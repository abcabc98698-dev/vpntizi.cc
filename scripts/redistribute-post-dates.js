import fs from 'node:fs';
import path from 'node:path';

const postsDir = 'src/content/posts';

// 1. Define logical publishing order from oldest to newest:
// 1.1 Foundation & Core Concepts (Oldest)
const foundationPosts = [
  'vpn-and-airport-difference.md',
  'is-ladder-always-vpn.md',
  'vpn-vs-proxy-deep-dive.md',
  'datacenter-vs-residential-ip.md',
  'direct-vs-transit-routes.md',
  'iplc-vs-iepl-explained.md',
];

// 1.2 Tools, Clients & Technical Setup
const toolsPosts = [
  'clash-v2rayn-shadowrocket-explained.md',
  'clash-vs-v2rayn.md',
  'why-some-airports-need-custom-client.md',
  'client-download-directory.md',
  'subscription-import-tutorial.md',
  'rule-routing-and-proxy-modes.md',
  'ip-dns-leak-test-guide.md',
];

// 1.3 Buying Guides & Risk Prevention
const guidePosts = [
  'ladder-selection-standards.md',
  'beginner-vpn-or-airport-guide.md',
  'how-to-read-speedtest-results.md',
  'monthly-vs-yearly-subscription.md',
  'avoid-bad-proxy-services.md',
  'same-budget-comparison.md',
  'free-proxy-risks.md',
  'free-trial-airports.md',
  'free-vpn-comparison.md',
  'low-cost-alternatives.md',
  'mobile-ladder-guide.md',
  'long-term-stability-records.md',
];

// 1.4 Airport brands (Rank 42 down to Rank 4)
const airports = JSON.parse(fs.readFileSync('src/data/airports.json', 'utf-8'));
const airportFilesRank42To4 = airports
  .filter(a => a.rank >= 4)
  .sort((a, b) => b.rank - a.rank) // Rank 42 down to 4
  .map(a => `airport-${a.slug}.md`);

// 1.5 Roundup & Category Guides
const roundupPosts = [
  'airport-node-locations-guide.md',
  'cost-effective-airports.md',
  'iplc-iepl-airports.md',
  'ai-streaming-airports.md',
];

// 1.6 Top 3 Flagship Brands & Comprehensive 2026 Guide (Newest)
const topFlagship = [
  'airport-weifeng.md',               // Rank 3
  'airport-feimao.md',                // Rank 2
  'airport-recommendations-guide.md', // 2026 综合推荐指南
  'airport-guangsu.md',               // Rank 1 (Today: 2026-10-24)
];

const orderedFiles = [
  ...foundationPosts,
  ...toolsPosts,
  ...guidePosts,
  ...airportFilesRank42To4,
  ...roundupPosts,
  ...topFlagship,
];

console.log(`Total ordered files: ${orderedFiles.length}`);

// 2. Realistic date cadence (intervals between 1 and 3 days)
const cadence = [1, 2, 2, 1, 2, 3, 1, 2, 2, 1, 3, 2];

function generateDates(count, endDateStr) {
  const dates = [];
  let curr = new Date(endDateStr + 'T12:00:00Z');
  dates.push(formatDate(curr));
  
  for (let i = 1; i < count; i++) {
    const step = cadence[(i - 1) % cadence.length];
    curr.setUTCDate(curr.getUTCDate() - step);
    dates.push(formatDate(curr));
  }
  
  return dates.reverse(); // Earliest to latest
}

function formatDate(d) {
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

const dates = generateDates(orderedFiles.length, '2026-10-24');

// 3. Update all 72 markdown files
let updatedCount = 0;
const dateMap = {};

orderedFiles.forEach((file, index) => {
  const targetDate = dates[index];
  dateMap[file] = targetDate;
  const filePath = path.join(postsDir, file);
  
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace published: ... with published: targetDate
  if (content.match(/published:\s*([^\r\n]+)/)) {
    content = content.replace(/published:\s*([^\r\n]+)/, `published: ${targetDate}`);
    fs.writeFileSync(filePath, content, 'utf-8');
    updatedCount++;
  } else {
    console.warn(`No published field found in ${file}`);
  }
});

console.log(`Successfully updated ${updatedCount} posts with unique chronological dates!`);
console.log(`Oldest: ${dates[0]} (${orderedFiles[0]})`);
console.log(`Newest: ${dates[dates.length - 1]} (${orderedFiles[orderedFiles.length - 1]})`);

// Verify uniqueness
const dateCounts = {};
Object.values(dateMap).forEach(d => {
  dateCounts[d] = (dateCounts[d] || 0) + 1;
});

const duplicates = Object.entries(dateCounts).filter(([d, c]) => c > 1);
if (duplicates.length === 0) {
  console.log('✅ ALL 72 DATES ARE 100% UNIQUE! Zero duplicates on timeline!');
} else {
  console.warn('⚠️ Duplicates found:', duplicates);
}

// Print last 10 assigned dates
console.log('\nTop 10 Latest Articles on Timeline:');
orderedFiles.slice(-10).forEach(f => {
  console.log(`- ${dateMap[f]} : ${f}`);
});
