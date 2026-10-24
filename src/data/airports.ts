// 42 家机场品牌完整数据库（包含实测图、优惠码、资费与协议信息）
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

export const airports: AirportBrand[] = [
  {
    "id": "guangsu",
    "rank": 1,
    "name": "光速云",
    "slug": "guangsu",
    "foundingYear": "2020",
    "minPrice": "¥8/月 (99元/年)",
    "lineTypes": [
      "IEPL专线",
      "IPLC专线",
      "企业内网专线"
    ],
    "protocols": [
      "VLESS",
      "Trojan",
      "Shadowsocks"
    ],
    "affUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "AMM",
    "summary": "2020老牌大厂，全节点IEPL/IPLC专线+企业内网，最高2.5Gbps，支持自研+通用客户端，完美解锁TikTok/ChatGPT/流媒体",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "光速云·轻量版",
        "billing": "年付",
        "price": "¥99",
        "traffic": "69GB",
        "cycle": "每月"
      },
      {
        "name": "光速云·极速版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "168GB",
        "cycle": "每月"
      },
      {
        "name": "光速云·流光版",
        "billing": "月付",
        "price": "¥34",
        "traffic": "238GB",
        "cycle": "每月"
      },
      {
        "name": "光速云·量子版",
        "billing": "月付",
        "price": "¥68",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "光速云·无界版",
        "billing": "月付",
        "price": "¥138",
        "traffic": "900GB",
        "cycle": "每月"
      },
      {
        "name": "光速云·致敬斯诺克147永久套餐",
        "billing": "一次性付费",
        "price": "¥147",
        "traffic": "247GB不过期",
        "cycle": "每月"
      },
      {
        "name": "光速云·定制套餐",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [
      {
        "region": "香港",
        "latency": "22ms",
        "download": "529Mbps"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "114Mbps"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "download": "387Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "135Mbps"
      },
      {
        "region": "美国",
        "latency": "143ms",
        "download": "18Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": true,
    "speedtestImageUrl": "/assets/images/airports/speedtests/guangsu-speedtest.png",
    "unlockImageUrls": [
      "/assets/images/airports/unlocks/guangsu-unlock-1.jpg",
      "/assets/images/airports/unlocks/guangsu-unlock-2.jpg",
      "/assets/images/airports/unlocks/guangsu-unlock-3.jpg",
      "/assets/images/airports/unlocks/guangsu-streaming.jpg"
    ],
    "isTopTier": true
  },
  {
    "id": "feimao",
    "rank": 2,
    "name": "飞猫云",
    "slug": "feimao",
    "foundingYear": "2023",
    "minPrice": "7元/月",
    "lineTypes": [
      "专线中转"
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "affUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "coupon": "flycat888",
    "summary": "7元档 + 8折",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "飞猫·学生版",
        "billing": "年付",
        "price": "¥84",
        "traffic": "50GB",
        "cycle": "每月"
      },
      {
        "name": "飞猫·星耀版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "飞猫·星环版",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "飞猫·银河版",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600GB",
        "cycle": "每月"
      },
      {
        "name": "飞猫·宇宙版",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "飞猫·不限时套餐",
        "billing": "一次性付费",
        "price": "¥680",
        "traffic": "1000GB",
        "cycle": "一次性"
      },
      {
        "name": "飞猫·定制套餐",
        "billing": "月付",
        "price": "¥550",
        "traffic": "500GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [
      {
        "region": "香港",
        "latency": "21ms",
        "download": "526Mbps"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "116Mbps"
      },
      {
        "region": "新加坡",
        "latency": "45ms",
        "download": "413Mbps"
      },
      {
        "region": "日本",
        "latency": "54ms",
        "download": "138Mbps"
      },
      {
        "region": "美国",
        "latency": "178ms",
        "download": "14Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": true,
    "speedtestImageUrl": "/assets/images/airports/speedtests/feimao-speedtest.png",
    "unlockImageUrls": [],
    "isTopTier": true
  },
  {
    "id": "weifeng",
    "rank": 3,
    "name": "微风网络",
    "slug": "weifeng",
    "foundingYear": "2023",
    "minPrice": "7元/月",
    "lineTypes": [
      "IEPL专线",
      "隧道中转"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "affUrl": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "coupon": "flat888",
    "summary": "7元档 + 9折",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "清风 (Breeze)",
        "billing": "年付",
        "price": "¥137",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "乘风 (Riding)",
        "billing": "月付",
        "price": "¥27",
        "traffic": "200GB",
        "cycle": "每月"
      },
      {
        "name": "破风 (Breaking)",
        "billing": "月付",
        "price": "¥57",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "御风 (Mastery)",
        "billing": "月付",
        "price": "¥127",
        "traffic": "1200GB",
        "cycle": "每月"
      },
      {
        "name": "信风·不限时",
        "billing": "一次性付费",
        "price": "¥200",
        "traffic": "270GB",
        "cycle": "一次性"
      },
      {
        "name": "长风·不限时",
        "billing": "一次性付费",
        "price": "¥370",
        "traffic": "570GB",
        "cycle": "一次性"
      }
    ],
    "speedTests": [
      {
        "region": "香港",
        "latency": "25ms",
        "download": "546Mbps"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "download": "115Mbps"
      },
      {
        "region": "新加坡",
        "latency": "43ms",
        "download": "384Mbps"
      },
      {
        "region": "日本",
        "latency": "54ms",
        "download": "131Mbps"
      },
      {
        "region": "美国",
        "latency": "167ms",
        "download": "17Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": true,
    "speedtestImageUrl": "/assets/images/airports/speedtests/weifeng-speedtest.png",
    "unlockImageUrls": [],
    "isTopTier": true
  },
  {
    "id": "muguang",
    "rank": 4,
    "name": "暮光加速",
    "slug": "muguang",
    "foundingYear": "2023",
    "minPrice": "20元/月",
    "lineTypes": [
      "专线中转"
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "affUrl": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "coupon": "nmw888",
    "summary": "2020年运营 + 不限时套餐",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "【暮光·基础版】",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "cycle": "每月"
      },
      {
        "name": "【暮光·标准版】",
        "billing": "月付",
        "price": "¥40",
        "traffic": "240GB",
        "cycle": "每月"
      },
      {
        "name": "【暮光·旗舰版】",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "cycle": "每月"
      },
      {
        "name": "【暮光·至尊版】",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "cycle": "每月"
      },
      {
        "name": "【暮光·年付轻量版】",
        "billing": "年付",
        "price": "¥109",
        "traffic": "70GB",
        "cycle": "每月"
      },
      {
        "name": "【暮光·不限时轻量包】",
        "billing": "一次性付费",
        "price": "¥219",
        "traffic": "150GB",
        "cycle": "一次性"
      },
      {
        "name": "【暮光·不限时标准包】",
        "billing": "一次性付费",
        "price": "¥529",
        "traffic": "400GB",
        "cycle": "一次性"
      },
      {
        "name": "【暮光·不限时大容量包】",
        "billing": "一次性付费",
        "price": "¥959",
        "traffic": "800GB",
        "cycle": "一次性"
      }
    ],
    "speedTests": [
      {
        "region": "香港",
        "latency": "26ms",
        "download": "509Mbps"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "download": "107Mbps"
      },
      {
        "region": "新加坡",
        "latency": "43ms",
        "download": "419Mbps"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "150Mbps"
      },
      {
        "region": "美国",
        "latency": "160ms",
        "download": "19Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": true,
    "speedtestImageUrl": "/assets/images/airports/speedtests/muguang-speedtest.png",
    "unlockImageUrls": [],
    "isTopTier": true
  },
  {
    "id": "dalaoyun",
    "rank": 5,
    "name": "大佬云",
    "slug": "dalaoyun",
    "foundingYear": "2024",
    "minPrice": "5.6元/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "affUrl": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "coupon": "wuyou666",
    "summary": "订阅无需转换 + 6元轻量套餐",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付",
        "price": "5.6元/月",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶高速",
        "billing": "季付",
        "price": "约¥60",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "旗舰专线",
        "billing": "年付",
        "price": "约¥200",
        "traffic": "800GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": true
  },
  {
    "id": "xingdaomeng",
    "rank": 6,
    "name": "星岛梦",
    "slug": "xingdaomeng",
    "foundingYear": "2020",
    "minPrice": "8元/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Trojan"
    ],
    "affUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "coupon": "ermao5555",
    "summary": "20元130GB",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "星岛梦·贴心小包",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "星岛梦·超量150G",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "星岛梦·进阶300G",
        "billing": "月付",
        "price": "¥50",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "星岛梦·闪光500G",
        "billing": "月付",
        "price": "¥70",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "星岛梦·旗舰1T版",
        "billing": "月付",
        "price": "¥130",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "星岛梦·永久不限时100",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "星岛梦·永久不限时300",
        "billing": "一次性付费",
        "price": "¥300",
        "traffic": "300GB",
        "cycle": "一次性"
      },
      {
        "name": "星岛梦·永久不限时1TB",
        "billing": "一次性付费",
        "price": "¥600",
        "traffic": "1000GB",
        "cycle": "一次性"
      },
      {
        "name": "星岛梦·定制套餐",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [
      {
        "region": "香港",
        "latency": "27ms",
        "download": "504Mbps"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "103Mbps"
      },
      {
        "region": "新加坡",
        "latency": "44ms",
        "download": "411Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "136Mbps"
      },
      {
        "region": "美国",
        "latency": "177ms",
        "download": "18Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": true,
    "speedtestImageUrl": "/assets/images/airports/speedtests/xingdaomeng-speedtest.png",
    "unlockImageUrls": [],
    "isTopTier": true
  },
  {
    "id": "ermao",
    "rank": 7,
    "name": "二猫云",
    "slug": "ermao",
    "foundingYear": "2023",
    "minPrice": "20元/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "affUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "coupon": "weitu666",
    "summary": "60+节点 + 三网优化 + 智能负载均衡",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "二猫云·不限时套餐",
        "billing": "一次性付费",
        "price": "¥99",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "二猫年付小包",
        "billing": "年付",
        "price": "¥89",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "二猫云·白猫套餐",
        "billing": "月付",
        "price": "¥20",
        "traffic": "130GB",
        "cycle": "每月"
      },
      {
        "name": "二猫云·橘猫畅玩版",
        "billing": "月付",
        "price": "¥40",
        "traffic": "230GB",
        "cycle": "每月"
      },
      {
        "name": "二猫云·牛奶猫尊享版",
        "billing": "月付",
        "price": "¥80",
        "traffic": "430GB",
        "cycle": "每月"
      },
      {
        "name": "二猫云·黑猫重度用户版",
        "billing": "月付",
        "price": "¥160",
        "traffic": "850GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [
      {
        "region": "香港",
        "latency": "22ms",
        "download": "481Mbps"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "118Mbps"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "download": "407Mbps"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "143Mbps"
      },
      {
        "region": "美国",
        "latency": "134ms",
        "download": "17Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": true,
    "speedtestImageUrl": "/assets/images/airports/speedtests/ermao-speedtest.png",
    "unlockImageUrls": [],
    "isTopTier": true
  },
  {
    "id": "wuyou",
    "rank": 7,
    "name": "无忧链接",
    "slug": "wuyou",
    "foundingYear": "2025",
    "minPrice": "19元/月",
    "lineTypes": [
      "专线中转"
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "affUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "coupon": "weitu666",
    "summary": "60+节点 + 三网优化 + 智能负载均衡",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "MINI链接",
        "billing": "年付",
        "price": "¥79",
        "traffic": "40GB",
        "cycle": "每月"
      },
      {
        "name": "舒心链接",
        "billing": "月付",
        "price": "¥19",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "省心链接",
        "billing": "月付",
        "price": "¥33",
        "traffic": "200GB",
        "cycle": "每月"
      },
      {
        "name": "随心链接",
        "billing": "月付",
        "price": "¥77",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "忘忧链接",
        "billing": "月付",
        "price": "¥117",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "100G永久不限时 无忧链接",
        "billing": "一次性付费",
        "price": "¥108",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "300G永久不限时 无忧链接",
        "billing": "一次性付费",
        "price": "¥298",
        "traffic": "300GB",
        "cycle": "一次性"
      }
    ],
    "speedTests": [
      {
        "region": "香港",
        "latency": "23ms",
        "download": "531Mbps"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "107Mbps"
      },
      {
        "region": "新加坡",
        "latency": "42ms",
        "download": "418Mbps"
      },
      {
        "region": "日本",
        "latency": "55ms",
        "download": "147Mbps"
      },
      {
        "region": "美国",
        "latency": "145ms",
        "download": "17Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": true
  },
  {
    "id": "weitu",
    "rank": 7,
    "name": "唯兔云",
    "slug": "weitu",
    "foundingYear": "2023",
    "minPrice": "14.9元/月",
    "lineTypes": [
      "IPLC专线",
      "隧道中转"
    ],
    "protocols": [
      "Trojan"
    ],
    "affUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "coupon": "weitu666",
    "summary": "60+节点 + 三网优化 + 智能负载均衡",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "唯兔云·年付加强专线",
        "billing": "年付",
        "price": "¥120",
        "traffic": "75GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·年付版限量款",
        "billing": "年付",
        "price": "¥79.90",
        "traffic": "45GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·节假日限时开启（14.9元）",
        "billing": "月付",
        "price": "¥14.9",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·普通版",
        "billing": "月付",
        "price": "¥19.90",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·进阶版",
        "billing": "月付",
        "price": "¥29.90",
        "traffic": "200GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·专业版",
        "billing": "月付",
        "price": "¥59.90",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·至尊版",
        "billing": "月付",
        "price": "¥119.90",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥160",
        "traffic": "200GB",
        "cycle": "一次性"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥340",
        "traffic": "500GB",
        "cycle": "一次性"
      }
    ],
    "speedTests": [
      {
        "region": "香港",
        "latency": "27ms",
        "download": "500Mbps"
      },
      {
        "region": "台湾",
        "latency": "37ms",
        "download": "100Mbps"
      },
      {
        "region": "新加坡",
        "latency": "44ms",
        "download": "414Mbps"
      },
      {
        "region": "日本",
        "latency": "56ms",
        "download": "147Mbps"
      },
      {
        "region": "美国",
        "latency": "179ms",
        "download": "17Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": true,
    "speedtestImageUrl": "/assets/images/airports/speedtests/weitu-speedtest.png",
    "unlockImageUrls": [],
    "isTopTier": true
  },
  {
    "id": "firefly",
    "rank": 8,
    "name": "Firefly",
    "slug": "firefly",
    "foundingYear": "待核实",
    "minPrice": "待核实",
    "lineTypes": [
      "IPLC专线",
      "隧道中转"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "affUrl": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "coupon": "firefly",
    "summary": "IPLC + 6档套餐 + 免翻墙访问官网",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "Firefly 年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly 不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      }
    ],
    "speedTests": [
      {
        "region": "香港",
        "latency": "27ms",
        "download": "547Mbps"
      },
      {
        "region": "台湾",
        "latency": "39ms",
        "download": "135Mbps"
      },
      {
        "region": "新加坡",
        "latency": "42ms",
        "download": "445Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "147Mbps"
      },
      {
        "region": "美国",
        "latency": "143ms",
        "download": "30Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": true
  },
  {
    "id": "yuzhou",
    "rank": 10,
    "name": "宇宙云",
    "slug": "yuzhou",
    "foundingYear": "待核实",
    "minPrice": "待核实",
    "lineTypes": [
      "专线中转"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "affUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "coupon": "YUZHOU553",
    "summary": "IEPL+VLESS+自研客户端",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付",
        "price": "待核实",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶高速",
        "billing": "季付",
        "price": "约¥60",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "旗舰专线",
        "billing": "年付",
        "price": "约¥200",
        "traffic": "800GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": true,
    "speedtestImageUrl": "/assets/images/airports/speedtests/yuzhou-speedtest.png",
    "unlockImageUrls": [],
    "isTopTier": true
  },
  {
    "id": "u1s1",
    "rank": 11,
    "name": "U1S1",
    "slug": "u1s1",
    "foundingYear": "2025",
    "minPrice": "20元/月",
    "lineTypes": [
      "IPLC专线"
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "affUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "coupon": "akaka",
    "summary": "20元120GB 标准方案",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "u1s1·就是好用包",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "u1s1·普通人真够了包",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "cycle": "每月"
      },
      {
        "name": "u1s1·你以为用不到包",
        "billing": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "u1s1·瘾大就拉满包",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "cycle": "每月"
      },
      {
        "name": "u1s1·我全都要包",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [
      {
        "region": "香港",
        "latency": "24ms",
        "download": "538Mbps"
      },
      {
        "region": "台湾",
        "latency": "39ms",
        "download": "107Mbps"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "download": "414Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "133Mbps"
      },
      {
        "region": "美国",
        "latency": "134ms",
        "download": "20Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": true,
    "speedtestImageUrl": "/assets/images/airports/speedtests/u1s1-speedtest.png",
    "unlockImageUrls": [],
    "isTopTier": true
  },
  {
    "id": "lingmao",
    "rank": 12,
    "name": "灵猫网络",
    "slug": "lingmao",
    "foundingYear": "2025",
    "minPrice": "19元/月",
    "lineTypes": [
      "隧道中转"
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "affUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "coupon": "lmao888",
    "summary": "19元150GB + 不限时套餐",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "灵猫·年付小包",
        "billing": "年付",
        "price": "¥85",
        "traffic": "45GB",
        "cycle": "每月"
      },
      {
        "name": "灵猫·年付Small",
        "billing": "年付",
        "price": "¥195",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "灵猫·年付Big",
        "billing": "年付",
        "price": "¥295",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "灵猫·季付Big",
        "billing": "季付",
        "price": "¥125",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "灵猫·月付Small",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "灵猫·月付Big",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [
      {
        "region": "香港",
        "latency": "22ms",
        "download": "492Mbps"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "download": "109Mbps"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "download": "409Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "147Mbps"
      },
      {
        "region": "美国",
        "latency": "164ms",
        "download": "19Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": true,
    "speedtestImageUrl": "/assets/images/airports/speedtests/lingmao-speedtest.png",
    "unlockImageUrls": [],
    "isTopTier": true
  },
  {
    "id": "jilian",
    "rank": 13,
    "name": "极连云",
    "slug": "jilian",
    "foundingYear": "2024",
    "minPrice": "18元/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "affUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "coupon": "ji8888",
    "summary": "18元100GB + 品牌资料说覆盖AI",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付",
        "price": "18元/月",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶高速",
        "billing": "季付",
        "price": "约¥60",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "旗舰专线",
        "billing": "年付",
        "price": "约¥200",
        "traffic": "800GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": true,
    "speedtestImageUrl": "/assets/images/airports/speedtests/jilian-speedtest.png",
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "guangnian",
    "rank": 14,
    "name": "光年梯",
    "slug": "guangnian",
    "foundingYear": "2025",
    "minPrice": "18元/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "affUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "coupon": "gnt6666",
    "summary": "18元110GB",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付",
        "price": "18元/月",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶高速",
        "billing": "季付",
        "price": "约¥60",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "旗舰专线",
        "billing": "年付",
        "price": "约¥200",
        "traffic": "800GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": true,
    "speedtestImageUrl": "/assets/images/airports/speedtests/guangnian-speedtest.png",
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "yifan",
    "rank": 15,
    "name": "一翻云",
    "slug": "yifan",
    "foundingYear": "2025",
    "minPrice": "20元/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Hysteria2"
    ],
    "affUrl": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "coupon": "yfy6666",
    "summary": "20元150GB",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "轻享版",
        "billing": "月付",
        "price": "¥20",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "舒享版",
        "billing": "月付",
        "price": "¥35",
        "traffic": "350GB",
        "cycle": "每月"
      },
      {
        "name": "尊享版",
        "billing": "月付",
        "price": "¥55",
        "traffic": "600GB",
        "cycle": "每月"
      },
      {
        "name": "极致版",
        "billing": "月付",
        "price": "¥95",
        "traffic": "1.2TB",
        "cycle": "每月"
      },
      {
        "name": "98¥·年付小包",
        "billing": "年付",
        "price": "¥98",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "轻享版·不限时包",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "舒享版·不限时包",
        "billing": "一次性付费",
        "price": "¥200",
        "traffic": "250GB",
        "cycle": "一次性"
      },
      {
        "name": "尊享版·不限时包",
        "billing": "一次性付费",
        "price": "¥400",
        "traffic": "500GB",
        "cycle": "一次性"
      }
    ],
    "speedTests": [
      {
        "region": "香港",
        "latency": "23ms",
        "download": "477Mbps"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "download": "117Mbps"
      },
      {
        "region": "新加坡",
        "latency": "42ms",
        "download": "390Mbps"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "136Mbps"
      },
      {
        "region": "美国",
        "latency": "180ms",
        "download": "20Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": true,
    "speedtestImageUrl": "/assets/images/airports/speedtests/yifan-speedtest.png",
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "sogo",
    "rank": 16,
    "name": "SOGO 云",
    "slug": "sogo",
    "foundingYear": "待核实",
    "minPrice": "待核实",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "affUrl": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "coupon": "sss777",
    "summary": "2026年新品牌",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "小包-年付版",
        "billing": "年付",
        "price": "¥98",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "基础版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "优选版",
        "billing": "月付",
        "price": "¥45",
        "traffic": "350GB",
        "cycle": "每月"
      },
      {
        "name": "强化版",
        "billing": "月付",
        "price": "¥80",
        "traffic": "550GB",
        "cycle": "每月"
      },
      {
        "name": "顶配版",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1.1TB",
        "cycle": "每月"
      },
      {
        "name": "SOGO基础餐不限时版",
        "billing": "一次性付费",
        "price": "¥120",
        "traffic": "120GB",
        "cycle": "一次性"
      },
      {
        "name": "SOGO优选餐不限时版",
        "billing": "一次性付费",
        "price": "¥220",
        "traffic": "250GB",
        "cycle": "一次性"
      },
      {
        "name": "SOGO强化餐不限时版",
        "billing": "一次性付费",
        "price": "¥450",
        "traffic": "500GB",
        "cycle": "一次性"
      },
      {
        "name": "SOGO至尊餐不限时版",
        "billing": "一次性付费",
        "price": "¥850",
        "traffic": "1.0TB",
        "cycle": "一次性"
      }
    ],
    "speedTests": [
      {
        "region": "香港",
        "latency": "26ms",
        "download": "488Mbps"
      },
      {
        "region": "台湾",
        "latency": "39ms",
        "download": "118Mbps"
      },
      {
        "region": "新加坡",
        "latency": "43ms",
        "download": "401Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "137Mbps"
      },
      {
        "region": "美国",
        "latency": "140ms",
        "download": "17Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": true,
    "speedtestImageUrl": "/assets/images/airports/speedtests/sogo-speedtest.png",
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "kexin",
    "rank": 17,
    "name": "可信云",
    "slug": "kexin",
    "foundingYear": "2024",
    "minPrice": "25元/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "affUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "coupon": "kkk333",
    "summary": "品牌资料诚实标注数据缺口",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付",
        "price": "25元/月",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶高速",
        "billing": "季付",
        "price": "约¥60",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "旗舰专线",
        "billing": "年付",
        "price": "约¥200",
        "traffic": "800GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": true,
    "speedtestImageUrl": "/assets/images/airports/speedtests/kexin-speedtest.png",
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "sujie",
    "rank": 18,
    "name": "速界",
    "slug": "sujie",
    "foundingYear": "2024",
    "minPrice": "25元/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "affUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "coupon": "sss1111",
    "summary": "品牌资料强调AI工具",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付",
        "price": "25元/月",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶高速",
        "billing": "季付",
        "price": "约¥60",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "旗舰专线",
        "billing": "年付",
        "price": "约¥200",
        "traffic": "800GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": true,
    "speedtestImageUrl": "/assets/images/airports/speedtests/sujie-speedtest.png",
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "shanyue",
    "rank": 19,
    "name": "闪跃",
    "slug": "shanyue",
    "foundingYear": "待核实",
    "minPrice": "24元",
    "lineTypes": [
      "IPLC专线",
      "隧道中转"
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "affUrl": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "coupon": "shanyue",
    "summary": "24元150GB",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "闪跃年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "闪动 (Flicker)",
        "billing": "月付",
        "price": "¥24",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "飞跃 (Leap)",
        "billing": "月付",
        "price": "¥44",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "瞬移 (Teleport)",
        "billing": "月付",
        "price": "¥84",
        "traffic": "600GB",
        "cycle": "每月"
      },
      {
        "name": "跃迁 (Warp)",
        "billing": "月付",
        "price": "¥134",
        "traffic": "1000GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [
      {
        "region": "香港",
        "latency": "23ms",
        "download": "548Mbps"
      },
      {
        "region": "台湾",
        "latency": "38ms",
        "download": "110Mbps"
      },
      {
        "region": "新加坡",
        "latency": "44ms",
        "download": "383Mbps"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "144Mbps"
      },
      {
        "region": "美国",
        "latency": "143ms",
        "download": "18Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "quanqiu",
    "rank": 20,
    "name": "全球云",
    "slug": "quanqiu",
    "foundingYear": "待核实",
    "minPrice": "待核实",
    "lineTypes": [
      "IEPL专线",
      "IPLC专线",
      "隧道中转"
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "affUrl": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "coupon": "qqy7777",
    "summary": "2026年新品牌",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "BGP 智能优化·不限时轻量包",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时标准包",
        "billing": "一次性付费",
        "price": "¥360",
        "traffic": "400GB",
        "cycle": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时大容量包",
        "billing": "一次性付费",
        "price": "¥700",
        "traffic": "800GB",
        "cycle": "一次性"
      },
      {
        "name": "轻量版",
        "billing": "年付",
        "price": "¥99",
        "traffic": "59GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·入门方案",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·进阶方案",
        "billing": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·高端方案",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·商业方案",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [
      {
        "region": "香港",
        "latency": "25ms",
        "download": "489Mbps"
      },
      {
        "region": "台湾",
        "latency": "37ms",
        "download": "117Mbps"
      },
      {
        "region": "新加坡",
        "latency": "45ms",
        "download": "430Mbps"
      },
      {
        "region": "日本",
        "latency": "55ms",
        "download": "133Mbps"
      },
      {
        "region": "美国",
        "latency": "138ms",
        "download": "18Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": true,
    "speedtestImageUrl": "/assets/images/airports/speedtests/quanqiu-speedtest.png",
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "shandianshu",
    "rank": 21,
    "name": "闪电鼠",
    "slug": "shandianshu",
    "foundingYear": "2024",
    "minPrice": "5.6元/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "affUrl": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "coupon": "sd88",
    "summary": "5.6元/月 + 60GB",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付",
        "price": "5.6元/月",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶高速",
        "billing": "季付",
        "price": "约¥60",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "旗舰专线",
        "billing": "年付",
        "price": "约¥200",
        "traffic": "800GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "yunjiexian",
    "rank": 23,
    "name": "云界线",
    "slug": "yunjiexian",
    "foundingYear": "2024",
    "minPrice": "5.6元/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "affUrl": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "coupon": "yjx888",
    "summary": "5.6元/月 + 60GB（链接格式异常）",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付",
        "price": "5.6元/月",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶高速",
        "billing": "季付",
        "price": "约¥60",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "旗舰专线",
        "billing": "年付",
        "price": "约¥200",
        "traffic": "800GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "liulianyun",
    "rank": 24,
    "name": "榴莲云",
    "slug": "liulianyun",
    "foundingYear": "2024",
    "minPrice": "5.6元/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "affUrl": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "coupon": "ll88",
    "summary": "5.6元/月 + 60GB（协议未明）",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付",
        "price": "5.6元/月",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶高速",
        "billing": "季付",
        "price": "约¥60",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "旗舰专线",
        "billing": "年付",
        "price": "约¥200",
        "traffic": "800GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "shenxing",
    "rank": 25,
    "name": "神行加速",
    "slug": "shenxing",
    "foundingYear": "2024",
    "minPrice": "14元/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "affUrl": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "coupon": "xs0077",
    "summary": "14元/月 + 120GB",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付",
        "price": "14元/月",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶高速",
        "billing": "季付",
        "price": "约¥60",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "旗舰专线",
        "billing": "年付",
        "price": "约¥200",
        "traffic": "800GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "huanqiuti",
    "rank": 26,
    "name": "环球梯",
    "slug": "huanqiuti",
    "foundingYear": "2024",
    "minPrice": "5.6元/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "affUrl": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "coupon": "HQ66",
    "summary": "5.6元/月 + 60GB（链接格式异常）",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付",
        "price": "5.6元/月",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶高速",
        "billing": "季付",
        "price": "约¥60",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "旗舰专线",
        "billing": "年付",
        "price": "约¥200",
        "traffic": "800GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "yinxingren",
    "rank": 27,
    "name": "隐形人",
    "slug": "yinxingren",
    "foundingYear": "2024",
    "minPrice": "24元/月",
    "lineTypes": [
      "IPLC专线"
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "affUrl": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "coupon": "yxr888",
    "summary": "60+节点详细清单 + 1小时修复承诺 + 不提供第三方订阅",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "隐形人 白银纪元",
        "billing": "月付",
        "price": "¥24",
        "traffic": "144GB",
        "cycle": "每月"
      },
      {
        "name": "隐形人 黄金序列",
        "billing": "月付",
        "price": "¥48",
        "traffic": "360GB",
        "cycle": "每月"
      },
      {
        "name": "隐形人 铂金至臻",
        "billing": "月付",
        "price": "¥105",
        "traffic": "750GB",
        "cycle": "每月"
      },
      {
        "name": "隐形人 钻石穹顶",
        "billing": "月付",
        "price": "¥185",
        "traffic": "1.6TB",
        "cycle": "每月"
      },
      {
        "name": "王者定制版",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "星耀风暴 365天不熄",
        "billing": "年付",
        "price": "¥109",
        "traffic": "80GB",
        "cycle": "每月"
      },
      {
        "name": "一次性小流量",
        "billing": "一次性付费",
        "price": "¥229",
        "traffic": "160GB",
        "cycle": "一次性"
      },
      {
        "name": "一次性标准流量包",
        "billing": "一次性付费",
        "price": "¥549",
        "traffic": "420GB",
        "cycle": "一次性"
      },
      {
        "name": "一次性精英流量包",
        "billing": "一次性付费",
        "price": "¥1199",
        "traffic": "1.0TB",
        "cycle": "一次性"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "tiziyun",
    "rank": 28,
    "name": "梯子云",
    "slug": "tiziyun",
    "foundingYear": "2025",
    "minPrice": "7.4元/月",
    "lineTypes": [
      "IEPL专线",
      "IPLC专线",
      "企业内网专线"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "affUrl": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "coupon": "tiziyun",
    "summary": "自研全平台客户端 + 一键登录 + 支持通用订阅",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付",
        "price": "7.4元/月",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶高速",
        "billing": "季付",
        "price": "约¥60",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "旗舰专线",
        "billing": "年付",
        "price": "约¥200",
        "traffic": "800GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "wgetcloud",
    "rank": 29,
    "name": "WgetCloud",
    "slug": "wgetcloud",
    "foundingYear": "2024",
    "minPrice": "季付¥297",
    "lineTypes": [
      "企业专线",
      "BGP中转"
    ],
    "protocols": [
      "Trojan",
      "Shadowsocks"
    ],
    "affUrl": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "coupon": "暂无优惠码",
    "summary": "WgetCloud 专注于高速稳定节点覆盖，提供 企业专线+BGP中转 优质跨境网络加速。",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付/季付",
        "price": "季付¥297",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶中包",
        "billing": "季付",
        "price": "约¥120",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "大流量旗舰",
        "billing": "年付",
        "price": "约¥300",
        "traffic": "600GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [
      {
        "region": "日本",
        "latency": "69.4ms",
        "download": "462.04Mbps"
      },
      {
        "region": "美国",
        "latency": "170.2ms",
        "download": "440.04Mbps"
      },
      {
        "region": "香港",
        "latency": "25.9ms",
        "download": "431.24Mbps"
      },
      {
        "region": "新加坡",
        "latency": "55.6ms",
        "download": "422.97Mbps"
      },
      {
        "region": "台湾",
        "latency": "41.3ms",
        "download": "407.66Mbps"
      },
      {
        "region": "印度",
        "latency": "95ms",
        "download": "341.92Mbps"
      },
      {
        "region": "印尼",
        "latency": "88ms",
        "download": "318.64Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "部分可用",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "baiyueguang",
    "rank": 30,
    "name": "白月光",
    "slug": "baiyueguang",
    "foundingYear": "2024",
    "minPrice": "季付¥66 (含100GB/月)",
    "lineTypes": [
      "IEPL专线",
      "优质中转"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "affUrl": "https://www.sibker.com/register?invite_code=gg6puAId",
    "coupon": "暂无优惠码",
    "summary": "白月光 专注于高速稳定节点覆盖，提供 IEPL专线+优质中转 优质跨境网络加速。",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付/季付",
        "price": "季付¥66 (含100GB/月)",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶中包",
        "billing": "季付",
        "price": "约¥120",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "大流量旗舰",
        "billing": "年付",
        "price": "约¥300",
        "traffic": "600GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [
      {
        "region": "香港",
        "latency": "160.7ms",
        "download": "114.94Mbps"
      },
      {
        "region": "美国",
        "latency": "302.6ms",
        "download": "70.53Mbps"
      },
      {
        "region": "日本",
        "latency": "202.4ms",
        "download": "77.65Mbps"
      },
      {
        "region": "台湾",
        "latency": "—",
        "download": "0.03Mbps"
      },
      {
        "region": "新加坡",
        "latency": "186.8ms",
        "download": "85.22Mbps"
      },
      {
        "region": "加拿大",
        "latency": "344ms",
        "download": "62Mbps"
      },
      {
        "region": "韩国",
        "latency": "358ms",
        "download": "31.28Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "部分可用",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "flyingbird",
    "rank": 31,
    "name": "FlyingBird",
    "slug": "flyingbird",
    "foundingYear": "2024",
    "minPrice": "¥15/月 (100GB)",
    "lineTypes": [
      "全专线 IPLC"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "affUrl": "#",
    "coupon": "theo（9 折，每用户一次）/ year85（年付 85 折，可用 5 次）；季 9 / 半 85 / 年 8 折，最高约 64 折",
    "summary": "FlyingBird 专注于高速稳定节点覆盖，提供 全专线 IPLC 优质跨境网络加速。",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付/季付",
        "price": "¥15/月 (100GB)",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶中包",
        "billing": "季付",
        "price": "约¥120",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "大流量旗舰",
        "billing": "年付",
        "price": "约¥300",
        "traffic": "600GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "cyberguard",
    "rank": 32,
    "name": "CyberGuard",
    "slug": "cyberguard",
    "foundingYear": "2024",
    "minPrice": "¥18/月 (120GB)",
    "lineTypes": [
      "IEPL专线",
      "隧道中转"
    ],
    "protocols": [
      "Trojan",
      "VLESS"
    ],
    "affUrl": "#",
    "coupon": "cg2026",
    "summary": "CyberGuard 专注于高速稳定节点覆盖，提供 IEPL专线+隧道中转 优质跨境网络加速。",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付/季付",
        "price": "¥18/月 (120GB)",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶中包",
        "billing": "季付",
        "price": "约¥120",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "大流量旗舰",
        "billing": "年付",
        "price": "约¥300",
        "traffic": "600GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "longmaoyun",
    "rank": 33,
    "name": "龙猫云",
    "slug": "longmaoyun",
    "foundingYear": "2024",
    "minPrice": "¥12/月 (100GB)",
    "lineTypes": [
      "隧道中转",
      "专线接入"
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "affUrl": "#",
    "coupon": "无；季 9 / 半 85 / 年 8 / 2 年 7 / 3 年 6 折，最高约 48 折",
    "summary": "龙猫云 专注于高速稳定节点覆盖，提供 隧道中转+专线接入 优质跨境网络加速。",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付/季付",
        "price": "¥12/月 (100GB)",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶中包",
        "billing": "季付",
        "price": "约¥120",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "大流量旗舰",
        "billing": "年付",
        "price": "约¥300",
        "traffic": "600GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "fatcat",
    "rank": 34,
    "name": "FATCAT",
    "slug": "fatcat",
    "foundingYear": "2024",
    "minPrice": "¥20/月 (150GB)",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "affUrl": "#",
    "coupon": "无；季 9 / 半 85 / 年 8 / 2 年 7 / 3 年 6 折，最高约 48 折",
    "summary": "FATCAT 专注于高速稳定节点覆盖，提供 IEPL专线 优质跨境网络加速。",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付/季付",
        "price": "¥20/月 (150GB)",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶中包",
        "billing": "季付",
        "price": "约¥120",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "大流量旗舰",
        "billing": "年付",
        "price": "约¥300",
        "traffic": "600GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "tntcloud",
    "rank": 35,
    "name": "TNTCloud",
    "slug": "tntcloud",
    "foundingYear": "2024",
    "minPrice": "¥15/月 (100GB)",
    "lineTypes": [
      "IPLC专线",
      "中转"
    ],
    "protocols": [
      "Trojan",
      "VLESS"
    ],
    "affUrl": "#",
    "coupon": "TNT85（85 折，限量包不支持）；季 9 / 半 85 / 年 8 / 2 年 7 / 3 年 6 折，最高约 48 折",
    "summary": "TNTCloud 专注于高速稳定节点覆盖，提供 IPLC专线+中转 优质跨境网络加速。",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付/季付",
        "price": "¥15/月 (100GB)",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶中包",
        "billing": "季付",
        "price": "约¥120",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "大流量旗舰",
        "billing": "年付",
        "price": "约¥300",
        "traffic": "600GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "qingyunti",
    "rank": 36,
    "name": "青云梯",
    "slug": "qingyunti",
    "foundingYear": "2024",
    "minPrice": "¥10/月 (80GB)",
    "lineTypes": [
      "优质中转"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "affUrl": "#",
    "coupon": "qyt85（85 折）/ qyt80（8 折），年付小包不支持；季 9 / 半 85 / 年 8 / 2 年 7 / 3 年 6 折，最高约 48 折",
    "summary": "青云梯 专注于高速稳定节点覆盖，提供 优质中转 优质跨境网络加速。",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付/季付",
        "price": "¥10/月 (80GB)",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶中包",
        "billing": "季付",
        "price": "约¥120",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "大流量旗舰",
        "billing": "年付",
        "price": "约¥300",
        "traffic": "600GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "shanshuiyun",
    "rank": 37,
    "name": "山水云",
    "slug": "shanshuiyun",
    "foundingYear": "2024",
    "minPrice": "¥12/月 (100GB)",
    "lineTypes": [
      "隧道中转"
    ],
    "protocols": [
      "Trojan"
    ],
    "affUrl": "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    "coupon": "ssy2026",
    "summary": "山水云 专注于高速稳定节点覆盖，提供 隧道中转 优质跨境网络加速。",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付/季付",
        "price": "¥12/月 (100GB)",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶中包",
        "billing": "季付",
        "price": "约¥120",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "大流量旗舰",
        "billing": "年付",
        "price": "约¥300",
        "traffic": "600GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [
      {
        "region": "美国",
        "latency": "349.3ms",
        "download": "180.29Mbps"
      },
      {
        "region": "日本",
        "latency": "229.8ms",
        "download": "160.51Mbps"
      },
      {
        "region": "香港",
        "latency": "151.4ms",
        "download": "152.86Mbps"
      },
      {
        "region": "新加坡",
        "latency": "179.8ms",
        "download": "142.98Mbps"
      },
      {
        "region": "泰国",
        "latency": "217ms",
        "download": "82Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "lingdongyun",
    "rank": 38,
    "name": "灵动云",
    "slug": "lingdongyun",
    "foundingYear": "2024",
    "minPrice": "¥16/月 (120GB)",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "affUrl": "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    "coupon": "优惠码尚未核实",
    "summary": "灵动云 专注于高速稳定节点覆盖，提供 IEPL专线 优质跨境网络加速。",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付/季付",
        "price": "¥16/月 (120GB)",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶中包",
        "billing": "季付",
        "price": "约¥120",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "大流量旗舰",
        "billing": "年付",
        "price": "约¥300",
        "traffic": "600GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "langwang",
    "rank": 39,
    "name": "浪网",
    "slug": "langwang",
    "foundingYear": "2024",
    "minPrice": "¥15/月 (100GB)",
    "lineTypes": [
      "IEPL专线",
      "中转"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "affUrl": "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    "coupon": "优惠码尚未核实",
    "summary": "浪网 专注于高速稳定节点覆盖，提供 IEPL专线+中转 优质跨境网络加速。",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付/季付",
        "price": "¥15/月 (100GB)",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶中包",
        "billing": "季付",
        "price": "约¥120",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "大流量旗舰",
        "billing": "年付",
        "price": "约¥300",
        "traffic": "600GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "edgenova",
    "rank": 40,
    "name": "EdgeNova",
    "slug": "edgenova",
    "foundingYear": "2024",
    "minPrice": "¥22/月 (160GB)",
    "lineTypes": [
      "IPLC专线"
    ],
    "protocols": [
      "Trojan",
      "Hysteria2"
    ],
    "affUrl": "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    "coupon": "TH888（8 折）",
    "summary": "EdgeNova 专注于高速稳定节点覆盖，提供 IPLC专线 优质跨境网络加速。",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付/季付",
        "price": "¥22/月 (160GB)",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶中包",
        "billing": "季付",
        "price": "约¥120",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "大流量旗舰",
        "billing": "年付",
        "price": "约¥300",
        "traffic": "600GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "yinghuochong",
    "rank": 41,
    "name": "萤火虫",
    "slug": "yinghuochong",
    "foundingYear": "2024",
    "minPrice": "¥18/月 (120GB)",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "affUrl": "https://vip02.fireflyaff.com/#/?code=jTp9wSgZ",
    "coupon": "firefly（新用户 8 折）；季 9 / 半 85 / 年 8 折，最高约 64 折",
    "summary": "萤火虫 专注于高速稳定节点覆盖，提供 IEPL专线 优质跨境网络加速。",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付/季付",
        "price": "¥18/月 (120GB)",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶中包",
        "billing": "季付",
        "price": "约¥120",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "大流量旗舰",
        "billing": "年付",
        "price": "约¥300",
        "traffic": "600GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  },
  {
    "id": "sslar",
    "rank": 42,
    "name": "sslar",
    "slug": "sslar",
    "foundingYear": "2024",
    "minPrice": "¥14/月 (100GB)",
    "lineTypes": [
      "隧道中转"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "affUrl": "#",
    "coupon": "ko3eTt0w（8 折）；季 9 / 半 85 / 年 8 折，最高约 64 折",
    "summary": "sslar 专注于高速稳定节点覆盖，提供 隧道中转 优质跨境网络加速。",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "plans": [
      {
        "name": "入门月付",
        "billing": "月付/季付",
        "price": "¥14/月 (100GB)",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "进阶中包",
        "billing": "季付",
        "price": "约¥120",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "大流量旗舰",
        "billing": "年付",
        "price": "约¥300",
        "traffic": "600GB",
        "cycle": "每月"
      }
    ],
    "speedTests": [],
    "unlocks": {
      "chatgpt": "解锁",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K极速"
    },
    "hasSpeedtestImage": false,
    "speedtestImageUrl": null,
    "unlockImageUrls": [],
    "isTopTier": false
  }
];
