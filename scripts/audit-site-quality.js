import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "src/content/posts");
const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));

console.log(`Total markdown posts: ${files.length}`);

const dates = new Map();
let totalChars = 0;
let minChars = Number.POSITIVE_INFINITY;
let minPost = "";
let maxChars = 0;
let maxPost = "";
const shortPosts = [];
const allPostsStats = [];

for (const f of files) {
	const filePath = path.join(postsDir, f);
	const raw = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(raw);

	// Date check
	const d = data.published
		? new Date(data.published).toISOString().split("T")[0]
		: "no-date";
	if (dates.has(d)) {
		console.warn(`DUPLICATE DATE: ${d} in ${f} already used by ${dates.get(d)}`);
	} else {
		dates.set(d, f);
	}

	// Character count calculation
	const cjk = (content.match(/[\u4e00-\u9fa5]/g) || []).length;
	const words = (content.match(/[a-zA-Z0-9_-]+/g) || []).length;
	const count = cjk + words;
	totalChars += count;

	if (count < minChars) {
		minChars = count;
		minPost = f;
	}
	if (count > maxChars) {
		maxChars = count;
		maxPost = f;
	}
	if (count < 1500) {
		shortPosts.push({ file: f, count, title: data.title });
	}

	allPostsStats.push({ file: f, count, title: data.title, date: d });
}

console.log(`Average word/char count: ${Math.round(totalChars / files.length)}`);
console.log(`Min count: ${minChars} in ${minPost}`);
console.log(`Max count: ${maxChars} in ${maxPost}`);
console.log(`Unique dates count: ${dates.size} / ${files.length}`);
console.log(`Posts under 1500 characters/words: ${shortPosts.length}`);
if (shortPosts.length > 0) {
	console.log("Short posts details:", shortPosts);
}
