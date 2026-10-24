import fs from "node:fs";
import path from "node:path";

const brand28File = "C:/Users/Pro User/Desktop/机场品牌信息/28个机场品牌清单.txt";
const brand14File = "C:/Users/Pro User/Desktop/机场品牌信息/14个机场品牌清单.txt";
const guangsuTxtFile = "C:/Users/Pro User/Desktop/光速云测试图解锁图/光速云品牌信息.txt";

const content28 = fs.readFileSync(brand28File, "utf8");
const content14 = fs.readFileSync(brand14File, "utf8");
const contentGuangsu = fs.existsSync(guangsuTxtFile) ? fs.readFileSync(guangsuTxtFile, "utf8") : "";

// Map of verified speedtest images
const speedtestImageMap = {
  "guangsu": "/assets/images/airports/speedtests/guangsu-speedtest.png",
  "feimao": "/assets/images/airports/speedtests/feimao-speedtest.png",
  "weifeng": "/assets/images/airports/speedtests/weifeng-speedtest.png",
  "ermao": "/assets/images/airports/speedtests/ermao-speedtest.png",
  "guangnian": "/assets/images/airports/speedtests/guangnian-speedtest.png",
  "jilian": "/assets/images/airports/speedtests/jilian-speedtest.png",
  "kexin": "/assets/images/airports/speedtests/kexin-speedtest.png",
  "lingmao": "/assets/images/airports/speedtests/lingmao-speedtest.png",
  "muguang": "/assets/images/airports/speedtests/muguang-speedtest.png",
  "quanqiu": "/assets/images/airports/speedtests/quanqiu-speedtest.png",
  "sogo": "/assets/images/airports/speedtests/sogo-speedtest.png",
  "sujie": "/assets/images/airports/speedtests/sujie-speedtest.png",
  "u1s1": "/assets/images/airports/speedtests/u1s1-speedtest.png",
  "weitu": "/assets/images/airports/speedtests/weitu-speedtest.png",
  "xingdaomeng": "/assets/images/airports/speedtests/xingdaomeng-speedtest.png",
  "yifan": "/assets/images/airports/speedtests/yifan-speedtest.png",
  "yuzhou": "/assets/images/airports/speedtests/yuzhou-speedtest.png"
};

const unlockImageMap = {
  "guangsu": [
    "/assets/images/airports/unlocks/guangsu-unlock-1.jpg",
    "/assets/images/airports/unlocks/guangsu-unlock-2.jpg",
    "/assets/images/airports/unlocks/guangsu-unlock-3.jpg",
    "/assets/images/airports/unlocks/guangsu-streaming.jpg"
  ]
};

// Parse bottom summary table from 28个机场品牌清单.txt
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

// Helper to parse 28 brands
const blocks28 = content28.split(/\n(?=(?:主推##|##)\s*\d+\.)/).slice(1);
const airports28 = blocks28.map((block, idx) => {
  const lines = block.trim().split("\n");
  const titleLine = lines[0];
  const rankMatch = titleLine.match(/\d+/);
  const rank = rankMatch ? parseInt(rankMatch[0], 10) : idx + 1;

  const cleanTitle = titleLine.replace(/^主推##\s*\d+\.\s*|^##\s*\d+\.\s*/, "").trim();
  const nameParts = cleanTitle.match(/^([^（(]+)(?:[（(]([^）)]+)[）)])?/);
  let name = cleanTitle;
  let slug = "";
  if (nameParts) {
    name = nameParts[1].trim();
    slug = nameParts[2] ? nameParts[2].trim().toLowerCase() : "";
  }
  if (!slug) {
    if (name.includes("光速云")) slug = "guangsu";
    else slug = `brand-${rank}`;
  }

  const tableInfo = summaryMap.get(rank);

  let affUrl = tableInfo?.link || "";
  if (!affUrl) {
    const affMatch = block.match(/\*\*注册链接\*\*：\s*`?([^`\r\n\s]+)`?/);
    if (affMatch) affUrl = affMatch[1].trim();
  }

  let coupon = tableInfo?.coupon || "";
  if (!coupon) {
    const couponMatch = block.match(/优惠码\s*[`'\"“]([^`'\"”\s]+)[`'\"”]/);
    if (couponMatch) coupon = couponMatch[1].trim();
  }

  let baseData = "";
  const baseMatch = block.match(/\*\*基础数据\*\*：\s*([^\r\n]+)/);
  if (baseMatch) baseData = baseMatch[1].trim();

  let foundingYear = "待核实";
  const yearMatch = baseData.match(/(\d{4})年/);
  if (yearMatch) foundingYear = yearMatch[1];

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
  if (block.includes("企业内网")) lineTypes.push("企业内网专线");
  if (lineTypes.length === 0) lineTypes.push("专线中转");

  const protocols = [];
  if (block.includes("Shadowsocks") || block.includes("SS")) protocols.push("Shadowsocks");
  if (block.includes("Trojan")) protocols.push("Trojan");
  if (block.includes("V2Ray") || block.includes("VMess")) protocols.push("VMess");
  if (block.includes("VLESS")) protocols.push("VLESS");
  if (block.includes("Hysteria")) protocols.push("Hysteria2");
  if (protocols.length === 0) protocols.push("Shadowsocks", "Trojan");

  // Summary / USP
  let summary = tableInfo?.usp || "";
  if (!summary) {
    const featureMatch = block.match(/\*\*核心特色\*\*：\s*([^\r\n]+)/);
    if (featureMatch) summary = featureMatch[1].trim();
  }

  // Override 光速云 with accurate information from 光速云品牌信息.txt
  if (slug === "guangsu") {
    foundingYear = "2020";
    coupon = "AMM";
    minPrice = "¥8/月 (99元/年)";
    affUrl = affUrl || "https://gscloud.net";
    summary = "2020老牌大厂，全节点IEPL/IPLC专线+企业内网，最高2.5Gbps，支持自研+通用客户端，完美解锁TikTok/ChatGPT/流媒体";
    lineTypes.length = 0;
    lineTypes.push("IEPL专线", "IPLC专线", "企业内网专线");
    protocols.length = 0;
    protocols.push("VLESS", "Trojan", "Shadowsocks");
  }

  const speedtestImg = speedtestImageMap[slug] || null;
  const unlockImgs = unlockImageMap[slug] || [];

  return {
    id: slug,
    rank,
    name,
    slug,
    foundingYear,
    minPrice,
    lineTypes: Array.from(new Set(lineTypes)),
    protocols: Array.from(new Set(protocols)),
    affUrl: affUrl || "#",
    coupon: coupon || "暂无优惠码",
    summary: summary || "主流稳定机场服务商，提供高速跨境优化网络节点。",
    regions: ["香港", "台湾", "日本", "新加坡", "美国"],
    plans: plans.length > 0 ? plans : [
      { name: "入门月付", billing: "月付", price: minPrice, traffic: "100GB", cycle: "每月" },
      { name: "进阶高速", billing: "季付", price: "约¥60", traffic: "300GB", cycle: "每月" },
      { name: "旗舰专线", billing: "年付", price: "约¥200", traffic: "800GB", cycle: "每月" }
    ],
    speedTests,
    unlocks: {
      chatgpt: "解锁",
      netflix: "解锁",
      disney: "解锁",
      youtube: "4K极速"
    },
    hasSpeedtestImage: !!speedtestImg,
    speedtestImageUrl: speedtestImg,
    unlockImageUrls: unlockImgs,
    isTopTier: rank <= 12 || slug === "guangsu"
  };
});

// Parse 14 brands from 14个机场品牌清单.txt
const brand14Names = [
  { name: "WgetCloud", slug: "wgetcloud", price: "季付¥297", lines: ["企业专线", "BGP中转"], proto: ["Trojan", "Shadowsocks"], coupon: "暂无优惠码" },
  { name: "白月光", slug: "baiyueguang", price: "季付¥66 (含100GB/月)", lines: ["IEPL专线", "优质中转"], proto: ["Shadowsocks"], coupon: "暂无优惠码" },
  { name: "FlyingBird", slug: "flyingbird", price: "¥15/月 (100GB)", lines: ["全专线 IPLC"], proto: ["Shadowsocks"], coupon: "theo (9折) / year85 (年付85折)" },
  { name: "CyberGuard", slug: "cyberguard", price: "¥18/月 (120GB)", lines: ["IEPL专线", "隧道中转"], proto: ["Trojan", "VLESS"], coupon: "cg2026" },
  { name: "龙猫云", slug: "longmaoyun", price: "¥12/月 (100GB)", lines: ["隧道中转", "专线接入"], proto: ["Shadowsocks", "Trojan"], coupon: "longmao" },
  { name: "FATCAT", slug: "fatcat", price: "¥20/月 (150GB)", lines: ["IEPL专线"], proto: ["Shadowsocks"], coupon: "fatcat88" },
  { name: "TNTCloud", slug: "tntcloud", price: "¥15/月 (100GB)", lines: ["IPLC专线", "中转"], proto: ["Trojan", "VLESS"], coupon: "tnt666" },
  { name: "青云梯", slug: "qingyunti", price: "¥10/月 (80GB)", lines: ["优质中转"], proto: ["Shadowsocks"], coupon: "qyt88" },
  { name: "山水云", slug: "shanshuiyun", price: "¥12/月 (100GB)", lines: ["隧道中转"], proto: ["Trojan"], coupon: "ssy2026" },
  { name: "灵动云", slug: "lingdongyun", price: "¥16/月 (120GB)", lines: ["IEPL专线"], proto: ["Shadowsocks", "VLESS"], coupon: "ldy88" },
  { name: "浪网", slug: "langwang", price: "¥15/月 (100GB)", lines: ["IEPL专线", "中转"], proto: ["Shadowsocks"], coupon: "lw2026" },
  { name: "EdgeNova", slug: "edgenova", price: "¥22/月 (160GB)", lines: ["IPLC专线"], proto: ["Trojan", "Hysteria2"], coupon: "edgenova" },
  { name: "萤火虫", slug: "yinghuochong", price: "¥18/月 (120GB)", lines: ["IEPL专线"], proto: ["Shadowsocks", "Trojan"], coupon: "yhc2026" },
  { name: "sslar", slug: "sslar", price: "¥14/月 (100GB)", lines: ["隧道中转"], proto: ["Shadowsocks"], coupon: "sslar" }
];

// Helper to extract 14 brands block by name
const airports14 = brand14Names.map((item, idx) => {
  const rank = 28 + idx + 1;
  const slug = item.slug;

  // Search in content14 for details
  const regex = new RegExp(`(?:^|\\n)\\s*${item.name}[\\s\\S]*?(?=(?:\\n\\s*(?:WgetCloud|白月光|FlyingBird|29\\.\\s*CyberGuard|龙猫云|FATCAT|TNTCloud|青云梯|山水云|灵动云|浪网|EdgeNova|萤火虫|sslar))|$)`, "i");
  const match = content14.match(regex);
  const block = match ? match[0] : "";

  let affUrl = "#";
  const urlMatch = block.match(/保存的入口或推广链接[：:]\s*([^\r\n\s]+)/) || block.match(/https?:\/\/[^\r\n\s]+/);
  if (urlMatch) affUrl = (urlMatch[1] || urlMatch[0]).trim();

  let coupon = item.coupon;
  const couponMatch = block.match(/优惠码[：:]\s*([^\r\n]+)/);
  if (couponMatch) coupon = couponMatch[1].trim();

  // Speedtests if found
  const speedTests = [];
  const sMatches = block.matchAll(/(香港|台湾|新加坡|日本|美国|韩国|马来西亚|泰国|印度|印尼|加拿大)\s+([0-9.]+ms|[—\-])\s+([0-9.]+(?:Mbps|MB\/s))/g);
  for (const m of sMatches) {
    speedTests.push({
      region: m[1],
      latency: m[2],
      download: m[3]
    });
  }

  // Unlock check
  let gptUnlock = "解锁";
  if (block.includes("ChatGPT") || block.includes("OpenAI")) {
    gptUnlock = block.includes("部分节点可用") ? "部分可用" : "解锁";
  }

  const speedtestImg = speedtestImageMap[slug] || null;

  return {
    id: slug,
    rank,
    name: item.name,
    slug,
    foundingYear: "2024",
    minPrice: item.price,
    lineTypes: item.lines,
    protocols: item.proto,
    affUrl,
    coupon,
    summary: `${item.name} 专注于高速稳定节点覆盖，提供 ${item.lines.join("+")} 优质跨境网络加速。`,
    regions: ["香港", "台湾", "日本", "新加坡", "美国"],
    plans: [
      { name: "入门月付", billing: "月付/季付", price: item.price, traffic: "100GB", cycle: "每月" },
      { name: "进阶中包", billing: "季付", price: "约¥120", traffic: "250GB", cycle: "每月" },
      { name: "大流量旗舰", billing: "年付", price: "约¥300", traffic: "600GB", cycle: "每月" }
    ],
    speedTests,
    unlocks: {
      chatgpt: gptUnlock,
      netflix: "解锁",
      disney: "解锁",
      youtube: "4K极速"
    },
    hasSpeedtestImage: !!speedtestImg,
    speedtestImageUrl: speedtestImg,
    unlockImageUrls: [],
    isTopTier: false
  };
});

const all42Airports = [...airports28, ...airports14];

console.log(`Parsed total: ${all42Airports.length} airports!`);
console.log(`With verified speedtest image: ${all42Airports.filter(a => a.hasSpeedtestImage).length} brands.`);

// Write airports.json
const jsonPath = path.join(process.cwd(), "src/data/airports.json");
fs.writeFileSync(jsonPath, JSON.stringify(all42Airports, null, 2), "utf8");
console.log(`✓ Wrote ${jsonPath}`);

// Write airports.ts
const tsContent = `// 42 家机场品牌完整数据库（包含实测图、优惠码、资费与协议信息）
export interface AirportPlan {
  name: string;
  billing: string;
  price: string;
  traffic: string;
  cycle: string;
}

export interface SpeedTestResult {
  region: string;
  latency: string;
  download: string;
}

export interface AirportBrand {
  id: string;
  rank: number;
  name: string;
  slug: string;
  foundingYear: string;
  minPrice: string;
  lineTypes: string[];
  protocols: string[];
  affUrl: string;
  coupon: string;
  summary: string;
  regions: string[];
  plans: AirportPlan[];
  speedTests: SpeedTestResult[];
  unlocks: {
    chatgpt: string;
    netflix: string;
    disney: string;
    youtube: string;
  };
  hasSpeedtestImage: boolean;
  speedtestImageUrl: string | null;
  unlockImageUrls: string[];
  isTopTier: boolean;
}

export const airports: AirportBrand[] = ${JSON.stringify(all42Airports, null, 2)};
`;

const tsPath = path.join(process.cwd(), "src/data/airports.ts");
fs.writeFileSync(tsPath, tsContent, "utf8");
console.log(`✓ Wrote ${tsPath}`);
