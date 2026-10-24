// biome-ignore lint/suspicious/noShadowRestrictedNames: <toString from mdast-util-to-string>
import { toString } from "mdast-util-to-string";

export function remarkReadingTime() {
	return (tree, { data }) => {
		const textOnPage = toString(tree);
		// Count CJK characters and Latin/number words accurately
		const cjkCount = (textOnPage.match(/[\u4e00-\u9fa5]/g) || []).length;
		const wordCount = (
			textOnPage.match(
				/[a-zA-Z0-9_\u00A0-\u024F\u0400-\u04FF\u0370-\u03FF]+/g,
			) || []
		).length;
		const totalWords = cjkCount + wordCount;

		// Average reading speed: ~350 CJK characters/min, ~200 English words/min
		const minutes = Math.max(
			1,
			Math.round(cjkCount / 350 + wordCount / 200),
		);

		data.astro.frontmatter.minutes = minutes;
		data.astro.frontmatter.words = totalWords;
	};
}
