// 代理客户端资料库 (基于 第三方代理客户端.txt 整理)

export interface ClientItem {
  name: string;
  platform: ("Windows" | "Android" | "iOS" | "macOS" | "Linux")[];
  kernel: string;
  features: string[];
  recommendedRole: string;
  sourceUrl: string;
  sourceType: "GitHub" | "App Store" | "Official";
  isFree: boolean;
  notes?: string;
}

export const clients: ClientItem[] = [
  {
    name: "Clash Verge Rev",
    platform: ["Windows", "macOS", "Linux"],
    kernel: "Mihomo (Clash.Meta)",
    features: ["现代化GUI界面", "规则智能分流", "TUN虚拟网卡模式", "订阅一键更新", "脚本扩展"],
    recommendedRole: "Windows / macOS 桌面端综合首选客户端，适合新手到进阶用户",
    sourceUrl: "https://github.com/clash-verge-rev/clash-verge-rev",
    sourceType: "GitHub",
    isFree: true,
    notes: "macOS 需区分 Apple Silicon (arm64) 与 Intel (x64) 安装包。"
  },
  {
    name: "v2rayN",
    platform: ["Windows"],
    kernel: "Xray / sing-box / Mihomo",
    features: ["支持协议最全面(VLESS/VMess/Trojan/SS/Hysteria2)", "批量真连接延迟测速", "分路由规则管理", "轻量低占用"],
    recommendedRole: "Windows 平台技术型与多协议用户首选工具",
    sourceUrl: "https://github.com/2dust/v2rayN",
    sourceType: "GitHub",
    isFree: true,
    notes: "需安装 .NET 8 Desktop Runtime 运行库。"
  },
  {
    name: "v2rayNG",
    platform: ["Android"],
    kernel: "Xray",
    features: ["轻量省电", "支持VLESS/Trojan/VMess节点导入", "分应用代理(分流)", "批量延迟测试"],
    recommendedRole: "安卓手机通用经典代理客户端，新手老手必备",
    sourceUrl: "https://github.com/2dust/v2rayNG",
    sourceType: "GitHub",
    isFree: true
  },
  {
    name: "FlClash",
    platform: ["Windows", "Android", "macOS", "Linux"],
    kernel: "Mihomo",
    features: ["多端UI高度一致", "简洁Material风格", "规则分流", "订阅管理"],
    recommendedRole: "跨平台多端统一体验用户推荐",
    sourceUrl: "https://github.com/chen08209/FlClash",
    sourceType: "GitHub",
    isFree: true
  },
  {
    name: "Hiddify",
    platform: ["Windows", "Android", "iOS", "macOS", "Linux"],
    kernel: "sing-box",
    features: ["全自动智能选路", "一键连接无需复杂配置", "多协议高度兼容", "全平台覆盖"],
    recommendedRole: "追求极简、零配置上手的新手用户",
    sourceUrl: "https://github.com/hiddify/hiddify-next",
    sourceType: "GitHub",
    isFree: true
  },
  {
    name: "Karing",
    platform: ["Windows", "Android", "iOS", "macOS"],
    kernel: "sing-box",
    features: ["跨平台", "原生多订阅规则分流", "iOS免美区账号(部分区已上架)", "界面友好"],
    recommendedRole: "苹果全家桶及跨设备用户",
    sourceUrl: "https://github.com/KaringX/karing",
    sourceType: "GitHub",
    isFree: true
  },
  {
    name: "Shadowrocket (小火箭)",
    platform: ["iOS"],
    kernel: "自研高性能内核",
    features: ["支持二维码/URL一键导入", "深度规则分流", "实时测速与节点排序", "抓包与流量统计"],
    recommendedRole: "iPhone / iPad 用户首选必备工具（统治级地位）",
    sourceUrl: "https://apps.apple.com/app/shadowrocket/id932747118",
    sourceType: "App Store",
    isFree: false,
    notes: "需海外 App Store 账号购买下载（美区售价约为 $2.99）。"
  },
  {
    name: "Stash",
    platform: ["iOS", "macOS"],
    kernel: "Clash 内核机制",
    features: ["完美还原 Clash 语法与策略组", "覆写配置支持", "WebUI 远程管理", "界面精致"],
    recommendedRole: "习惯 Clash 规则和策略组配置的苹果用户",
    sourceUrl: "https://apps.apple.com/app/stash-rule-based-proxy/id1596063349",
    sourceType: "App Store",
    isFree: false,
    notes: "付费应用，支持 iOS 和 macOS (Apple Silicon)。"
  },
  {
    name: "sing-box (SFA / SFI / SFM)",
    platform: ["Windows", "Android", "iOS", "macOS", "Linux"],
    kernel: "官方原生 sing-box 内核",
    features: ["极度节省内存与CPU", "现代化协议支持度高", "出色的吞吐吞吐性能", "纯净无广告"],
    recommendedRole: "对性能和资源占用有极致追求的技术进阶用户",
    sourceUrl: "https://sing-box.sagernet.org/",
    sourceType: "Official",
    isFree: true
  }
];
