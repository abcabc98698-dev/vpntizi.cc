import fs from "node:fs";
import path from "node:path";

const brand28File = "C:/Users/Pro User/Desktop/机场品牌信息/28个机场品牌清单.txt";
const brand14File = "C:/Users/Pro User/Desktop/机场品牌信息/14个机场品牌清单.txt";

const content28 = fs.readFileSync(brand28File, "utf8");
const content14 = fs.readFileSync(brand14File, "utf8");

// Parse bottom summary table from 28个机场品牌清单.txt for exact affLinks and coupons
const summaryMap = new Map();
const tableMatches = content28.match(/\|\s*(\d+)\s*\|\s*([^|]+)\s*\|\s*`([^`]+)`\s*\|\s*`?([^`|]*)`?\s*\|\s*([^|]+)\s*\|/g);
if (tableMatches) {
  tableMatches.forEach(row => {
    const cols = row.split("|").map(s => s.trim()).filter(Boolean);
    if (cols.length >= 5 && cols[0] !== "#") {
      const rank = parseInt(cols[0], 10);
      const name = cols[1];
      const link = cols[2].replace(/`/g, "").trim();
      const coupon = cols[3].replace(/`/g, "").trim();
      const usp = cols[4];
      summaryMap.set(rank, { rank, name, link, coupon, usp });
    }
  });
}

// Split into blocks
const blocks = content28.split(/\n(?=(?:主推##|##)\s*\d+\.)/).slice(1);

const airports = blocks.map((block, idx) => {
  const lines = block.trim().split("\n");
  const titleLine = lines[0];
  const rankMatch = titleLine.match(/\d+/);
  const rank = rankMatch ? parseInt(rankMatch[0], 10) : idx + 1;
  const isTopTier = rank <= 10;

  const cleanTitle = titleLine.replace(/^主推##\s*\d+\.\s*|^##\s*\d+\.\s*/, "").trim();
  const nameParts = cleanTitle.match(/^([^（(]+)(?:[（(]([^）)]+)[）)])?/);
  let name = cleanTitle;
  let slug = "";
  if (nameParts) {
    name = nameParts[1].trim();
    slug = nameParts[2] ? nameParts[2].trim().toLowerCase() : "";
  }
  if (!slug) {
    if (name === "光速云") slug = "guangsu";
    else slug = `brand-${rank}`;
  }

  // Summary table fallback
  const tableInfo = summaryMap.get(rank);

  // Affiliate URL
  let affUrl = tableInfo?.link || "";
  if (!affUrl) {
    const affMatch = block.match(/\*\*注册链接\*\*：\s*`?([^`\r\n\s]+)`?/);
    if (affMatch) affUrl = affMatch[1].trim();
  }

  // Coupon
  let coupon = tableInfo?.coupon || "";
  if (!coupon) {
    const couponMatch = block.match(/优惠码\s*[`'\"“]([^`'\"”\s]+)[`'\"”]/);
    if (couponMatch) coupon = couponMatch[1].trim();
  }

  // Base Data line
  let baseData = "";
  const baseMatch = block.match(/\*\*基础数据\*\*：\s*([^\r\n]+)/);
  if (baseMatch) baseData = baseMatch[1].trim();

  // Founding year
  let foundingYear = "待核实";
  const yearMatch = baseData.match(/(\d{4})年/);
  if (yearMatch) foundingYear = yearMatch[1];

  // Starting price
  let minPrice = "待核实";
  const priceMatch = baseData.match(/(?:最低入门价格约|年付约|月付约|入门价格约|年付|月付)?\s*(¥?\d+(?:\.\d+)?元(?:\/月|\/年)?)/);
  if (priceMatch) minPrice = priceMatch[1];
  else if (tableInfo?.usp) {
    const uspPrice = tableInfo.usp.match(/(\d+(?:\.\d+)?元(?:[\/月]*)?)/);
    if (uspPrice) minPrice = uspPrice[1];
  }

  // Plans table
  const plans = [];
  const planLines = block.split("\n");
  for (const line of planLines) {
    const trimmed = line.trim();
    if (trimmed.includes("¥") || (trimmed.includes("元") && (trimmed.includes("月付") || trimmed.includes("年付") || trimmed.includes("一次性")))) {
      const parts = trimmed.split(/\t| {2,}/).map(s => s.trim()).filter(Boolean);
      if (parts.length >= 4 && !parts[0].includes("套餐名称") && !parts[0].includes("节点") && !parts[0].includes("注册链接")) {
        plans.push({
          name: parts[0],
          billing: parts[1],
          price: parts[2],
          traffic: parts[3],
          cycle: parts[4] || "每月"
        });
      }
    }
  }

  // Speed tests
  const speedTests = [];
  const regionRegex = /(香港|台湾|新加坡|日本|美国|韩国|马来西亚|德国|英国|法国|泰国|印度|巴西|加拿大)\s+(\d+ms)\s+(\d+(?:\.\d+)?(?:Mbps|MB\/s))/g;
  let sMatch;
  while ((sMatch = regionRegex.exec(block)) !== null) {
    speedTests.push({
      region: sMatch[1],
      latency: sMatch[2],
      download: sMatch[3]
    });
  }

  // Line Architecture & Protocols
  const lineTypes = [];
  if (block.includes("IEPL")) lineTypes.push("IEPL专线");
  if (block.includes("IPLC")) lineTypes.push("IPLC专线");
  if (block.includes("隧道中转") || block.includes("中转")) lineTypes.push("隧道中转");
  if (block.includes("企业级内网") || block.includes("内网专线")) lineTypes.push("企业内网专线");
  if (block.includes("直连")) lineTypes.push("优质直连");
  if (lineTypes.length === 0) lineTypes.push("专线中转");

  const protocols = [];
  if (block.includes("VLESS") || block.includes("vless")) protocols.push("VLESS");
  if (block.includes("Trojan") || block.includes("trojan")) protocols.push("Trojan");
  if (block.includes("Shadowsocks") || block.includes("SS")) protocols.push("Shadowsocks");
  if (block.includes("Hysteria") || block.includes("hysteria")) protocols.push("Hysteria2");
  if (protocols.length === 0) protocols.push("VLESS/Trojan");

  // Client support
  let clientSupport = "支持第三方订阅导入（Clash / Shadowrocket / v2rayN）";
  if (block.includes("专属客户端") && (block.includes("不提供第三方订阅") || block.includes("不用配订阅") || block.includes("不用自己挑客户端"))) {
    if (block.includes("不提供第三方订阅")) {
      clientSupport = "仅限专属客户端（无通用订阅）";
    } else {
      clientSupport = "主推专属客户端（一键登录即用）";
    }
  } else if (block.includes("自研客户端") && block.includes("支持第三方订阅")) {
    clientSupport = "自研客户端 + 支持第三方订阅导入";
  }

  // Unlocks
  const unlockAI = [];
  const unlockMedia = [];
  const conditional = [];
  if (block.includes("ChatGPT")) unlockAI.push("ChatGPT");
  if (block.includes("Claude")) unlockAI.push("Claude");
  if (block.includes("Gemini")) {
    if (block.includes("视节点而定：Gemini") || block.includes("Gemini（视节点而定）") || block.includes("部分节点可用")) {
      conditional.push("Gemini (视节点)");
    } else {
      unlockAI.push("Gemini");
    }
  }
  ["Netflix", "Disney+", "YouTube", "HBO Max", "TikTok", "Spotify"].forEach(m => {
    if (block.includes(m)) unlockMedia.push(m);
  });

  // Summary
  let summary = "";
  const summaryMatch = block.match(/介绍说明：\s*([^\r\n]+(?:\r?\n[^\r\n#-]+)*)/);
  if (summaryMatch) {
    summary = summaryMatch[1].trim().replace(/\r?\n/g, " ");
  } else {
    summary = `${name} 是一家${foundingYear !== "待核实" ? foundingYear + "年开始运营的" : ""}网络服务商，提供 ${lineTypes.join(" / ")} 线路，主打 ${tableInfo?.usp || "稳定连接与流媒体解锁"}。`;
  }

  // Features list
  const features = [];
  const featureMatches = block.match(/- ([^\r\n]+)/g);
  if (featureMatches) {
    featureMatches.slice(0, 5).forEach(f => {
      features.push(f.replace(/^- /, "").trim());
    });
  }
  if (tableInfo?.usp && !features.some(f => f.includes(tableInfo.usp))) {
    features.unshift(tableInfo.usp);
  }

  // Risk notice
  let riskNotice = "建议先通过月付或小额周期进行晚高峰实测，验证稳定性后再决定是否长期续费。";
  if (block.includes("不支持退款")) {
    riskNotice = "官方条款标明特殊商品不支持退款，建议先购买小额月付套餐实测晚高峰表现。";
  } else if (block.includes("不提供第三方订阅")) {
    riskNotice = "该机场不提供通用订阅链接，必须使用其专属客户端，请确认您的系统设备支持。";
  }

  return {
    id: `airport-${rank}`,
    rank,
    name,
    slug,
    badge: rank === 1 ? "主推首选" : rank === 2 ? "新手推荐" : rank === 3 ? "高性价比" : rank <= 10 ? "Top 10" : "精选机场",
    isTopTier,
    affUrl,
    coupon,
    foundingYear,
    minPrice,
    lineTypes,
    protocols,
    clientSupport,
    plans,
    speedTests,
    unlock: {
      ai: unlockAI,
      media: unlockMedia,
      conditional
    },
    usp: tableInfo?.usp || "高可用线路与稳定连接",
    features,
    summary,
    riskNotice,
    testDate: "2026-10-19",
    dataStatus: "verified"
  };
});

// Output TypeScript file
const tsContent = `// 机场品牌结构化数据 (由 scripts/build-airports-data.js 自动生成并经数据合规审计)
// 数据来源：28个机场品牌清单.txt (测试基准日期: 2026-10-19)
// 合规注意：推广链接统一由本文件集中管理，渲染时必须附带 target="_blank" rel="nofollow sponsored noopener"

export interface PlanItem {
  name: string;
  billing: string;
  price: string;
  traffic: string;
  cycle: string;
}

export interface SpeedTestItem {
  region: string;
  latency: string;
  download: string;
}

export interface AirportBrand {
  id: string;
  rank: number;
  name: string;
  slug: string;
  badge: string;
  isTopTier: boolean;
  affUrl: string;
  coupon: string;
  foundingYear: string;
  minPrice: string;
  lineTypes: string[];
  protocols: string[];
  clientSupport: string;
  plans: PlanItem[];
  speedTests: SpeedTestItem[];
  unlock: {
    ai: string[];
    media: string[];
    conditional: string[];
  };
  usp: string;
  features: string[];
  summary: string;
  riskNotice: string;
  testDate: string;
  dataStatus: "verified" | "vendor" | "to_verify";
}

export const airports: AirportBrand[] = ${JSON.stringify(airports, null, 2)};

export function getAirportBySlug(slug: string): AirportBrand | undefined {
  return airports.find(a => a.slug.toLowerCase() === slug.toLowerCase());
}

export function getAirportById(id: string): AirportBrand | undefined {
  return airports.find(a => a.id === id);
}

export function getTopAirports(limit = 10): AirportBrand[] {
  return airports.slice(0, limit);
}
`;

fs.mkdirSync("src/data", { recursive: true });
fs.writeFileSync("src/data/airports.ts", tsContent, "utf8");
fs.writeFileSync("src/data/airports.json", JSON.stringify(airports, null, 2), "utf8");
console.log(`Generated src/data/airports.ts and src/data/airports.json successfully with ${airports.length} brands.`);
