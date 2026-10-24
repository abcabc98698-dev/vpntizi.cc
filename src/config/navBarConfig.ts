import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

// ============================================================================
// 导航栏配置 - 9 大核心业务栏目与二级专题集群
// ============================================================================
const getDynamicNavBarConfig = (): NavBarConfig => {
	const links: NavBarLink[] = [
		// 1. 首页
		{
			name: "首页",
			url: "/",
			icon: "material-symbols:home-outline-rounded",
		},

		// 2. VPN与机场
		{
			name: "VPN与机场",
			url: "/vpn/",
			icon: "material-symbols:compare-arrows-rounded",
			children: [
				{
					name: "VPN原理与用途",
					url: "/posts/vpn-and-airport-difference/",
					icon: "material-symbols:shield-outline",
				},
				{
					name: "机场订阅与节点",
					url: "/posts/is-ladder-always-vpn/",
					icon: "material-symbols:alt-route-rounded",
				},
				{
					name: "VPN和机场深度对比",
					url: "/posts/vpn-and-airport-difference/",
					icon: "material-symbols:difference-outline",
				},
				{
					name: "适用人群与场景分析",
					url: "/posts/beginner-vpn-or-airport-guide/",
					icon: "material-symbols:person-pin-outline",
				},
			],
		},

		// 3. 梯子推荐
		{
			name: "梯子推荐",
			url: "/tizi/",
			icon: "material-symbols:stairs-rounded",
			children: [
				{
					name: "综合梯子评价标准",
					url: "/posts/ladder-selection-standards/",
					icon: "material-symbols:fact-check-outline",
				},
				{
					name: "电脑桌面梯子客户端",
					url: "/posts/clash-v2rayn-shadowrocket-explained/",
					icon: "material-symbols:laptop-mac-outline",
				},
				{
					name: "手机移动端梯子推荐",
					url: "/posts/mobile-ladder-guide/",
					icon: "material-symbols:smartphone-outline",
				},
				{
					name: "长期稳定性实测记录",
					url: "/posts/long-term-stability-records/",
					icon: "material-symbols:monitoring-outline",
				},
			],
		},

		// 4. 机场推荐
		{
			name: "机场推荐",
			url: "/jichang/",
			icon: "material-symbols:rocket-launch-outline",
			children: [
				{
					name: "⚡ 机场品牌库大全 (42+家实测)",
					url: "/brands/",
					icon: "material-symbols:database-outline",
				},
				{
					name: "综合推荐与核心结论",
					url: "/posts/airport-recommendations-guide/",
					icon: "material-symbols:award-star",
				},
				{
					name: "高性价比机场盘点",
					url: "/posts/cost-effective-airports/",
					icon: "material-symbols:savings-outline",
				},
				{
					name: "顶级稳定专线 (IEPL/IPLC)",
					url: "/posts/iplc-iepl-airports/",
					icon: "material-symbols:speed-outline",
				},
				{
					name: "AI与流媒体解锁机场",
					url: "/posts/ai-streaming-airports/",
					icon: "material-symbols:smart-toy-outline",
				},
			],
		},

		// 5. 免费机场
		{
			name: "免费机场",
			url: "/free/",
			icon: "material-symbols:redeem-rounded",
			children: [
				{
					name: "免费服务现状与风险警示",
					url: "/posts/free-proxy-risks/",
					icon: "material-symbols:warning-rounded",
				},
				{
					name: "免费试用条件与核验",
					url: "/posts/free-trial-airports/",
					icon: "material-symbols:verified-outline",
				},
				{
					name: "免费VPN限制与隐私比较",
					url: "/posts/free-vpn-comparison/",
					icon: "material-symbols:lock-reset",
				},
				{
					name: "低价安全替代方案",
					url: "/posts/low-cost-alternatives/",
					icon: "material-symbols:price-check-outline",
				},
			],
		},

		// 6. 工具大对比
		{
			name: "工具大对比",
			url: "/clash/",
			icon: "material-symbols:balance-rounded",
			children: [
				{
					name: "VPN技术对比代理",
					url: "/posts/vpn-vs-proxy-deep-dive/",
					icon: "material-symbols:compare-rounded",
				},
				{
					name: "Clash与v2rayN全方位评测",
					url: "/posts/clash-vs-v2rayn/",
					icon: "material-symbols:tune-rounded",
				},
				{
					name: "专属客户端与通用客户端对比",
					url: "/posts/why-some-airports-need-custom-client/",
					icon: "material-symbols:apps-outline",
				},
				{
					name: "同预算服务横向比较",
					url: "/posts/same-budget-comparison/",
					icon: "material-symbols:analytics-outline",
				},
			],
		},

		// 7. 网络线路
		{
			name: "网络线路",
			url: "/nodes/",
			icon: "material-symbols:hub-outline",
			children: [
				{
					name: "直连与中转架构差异",
					url: "/posts/direct-vs-transit-routes/",
					icon: "material-symbols:conversion-path",
				},
				{
					name: "IPLC与IEPL专线原理",
					url: "/posts/iplc-vs-iepl-explained/",
					icon: "material-symbols:bolt-rounded",
				},
				{
					name: "机房IP与原生住宅IP区别",
					url: "/posts/datacenter-vs-residential-ip/",
					icon: "material-symbols:dns-outline",
				},
				{
					name: "节点地区分布与延迟实测",
					url: "/posts/airport-node-locations-guide/",
					icon: "material-symbols:public-rounded",
				},
			],
		},

		// 8. 选购指南
		{
			name: "选购指南",
			url: "/tutorial/",
			icon: "material-symbols:shopping-bag-outline",
			children: [
				{
					name: "新手按需选型四步法",
					url: "/posts/beginner-vpn-or-airport-guide/",
					icon: "material-symbols:help-outline",
				},
				{
					name: "月付还是年付？成本与风险",
					url: "/posts/monthly-vs-yearly-subscription/",
					icon: "material-symbols:calendar-month-outline",
				},
				{
					name: "如何看懂测速与晚高峰表现",
					url: "/posts/how-to-read-speedtest-results/",
					icon: "material-symbols:speed-rounded",
				},
				{
					name: "退款政策与隐私避坑检查",
					url: "/posts/avoid-bad-proxy-services/",
					icon: "material-symbols:security-update-good",
				},
			],
		},

		// 9. 使用教程
		{
			name: "使用教程",
			url: "/tutorial/",
			icon: "material-symbols:school-outline",
			children: [
				{
					name: "代理客户端大全与下载",
					url: "/posts/client-download-directory/",
					icon: "material-symbols:download-for-offline-outline",
				},
				{
					name: "订阅配置导入与转换",
					url: "/posts/subscription-import-tutorial/",
					icon: "material-symbols:sync-alt-rounded",
				},
				{
					name: "节点策略切换与规则分流",
					url: "/posts/rule-routing-and-proxy-modes/",
					icon: "material-symbols:alt-route",
				},
				{
					name: "IP与DNS泄露在线检测",
					url: "/posts/ip-dns-leak-test-guide/",
					icon: "material-symbols:network-check-rounded",
				},
			],
		},
	];

	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

export const LinkPresets: Record<string, NavBarLink> = {
	Home: {
		name: "主页",
		url: "/",
		icon: "material-symbols:home-outline-rounded",
	},
	Archive: {
		name: "归档",
		url: "/archive/",
		icon: "material-symbols:archive-outline",
	},
	Categories: {
		name: "分类",
		url: "/categories/",
		icon: "material-symbols:folder-open-rounded",
	},
	Tags: {
		name: "标签",
		url: "/tags/",
		icon: "material-symbols:tag-rounded",
	},
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
