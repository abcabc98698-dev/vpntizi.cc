import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像（保留原主题视觉头像）
	avatar: "assets/images/avatar.avif",

	// 名字
	name: "VPN梯子评测室",

	// 个人签名
	bio: "专注 VPN、机场与网络工具的真实测速、客观比较与技术解析。",

	// 链接配置
	links: [
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
		{
			name: "Atom",
			icon: "fa7-solid:atom",
			url: "/atom/",
			showName: false,
		},
	],
};
