import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题，留空则走i18n默认标题
	title: "",

	// 公告内容
	content: "欢迎访问 VPN梯子 (vpntizi.cc)！2026 最新 28 家主流机场测速矩阵与选购指南已更新，涵盖中转、IPLC 专线与流媒体解锁深度横评。",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "查看品牌库",
		// 链接 URL
		url: "/brands/",
		// 内部链接
		external: false,
	},
};
