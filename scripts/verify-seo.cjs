const fs = require('fs');

function checkPage(filePath, expectedCanonical) {
  const html = fs.readFileSync(filePath, 'utf-8');
  const head = html.substring(0, html.indexOf('</head>'));
  console.log(`\n=== Checking: ${filePath} ===`);

  const checks = [
    { name: 'title', re: /<title>([^<]+)<\/title>/i },
    { name: 'description', re: /<meta\s+name="description"\s+content="([^"]*)"/i },
    { name: 'canonical', re: /<link\s+rel="canonical"\s+href="([^"]*)"/i },
    { name: 'robots', re: /<meta\s+name="robots"\s+content="([^"]*)"/i },
    { name: 'google-site-verification', re: /<meta\s+name="google-site-verification"\s*(?:content(?:="([^"]*)")?)?/i },
    { name: 'msvalidate.01', re: /<meta\s+name="msvalidate\.01"\s*(?:content(?:="([^"]*)")?)?/i },
    { name: 'baidu-site-verification', re: /<meta\s+name="baidu-site-verification"\s*(?:content(?:="([^"]*)")?)?/i },
    { name: 'og:url', re: /<meta\s+property="og:url"\s+content="([^"]*)"/i },
    { name: 'og:title', re: /<meta\s+property="og:title"\s+content="([^"]*)"/i },
    { name: 'og:image', re: /<meta\s+property="og:image"\s+content="([^"]*)"/i },
    { name: 'og:type', re: /<meta\s+property="og:type"\s+content="([^"]*)"/i },
    { name: 'twitter:card', re: /<meta\s+name="twitter:card"\s+content="([^"]*)"/i }
  ];

  checks.forEach(c => {
    const m = head.match(c.re);
    if (m) {
      console.log(`  ✓ ${c.name}: ${m[1]}`);
    } else {
      console.log(`  ✗ MISSING: ${c.name}`);
    }
  });

  const schemaMatch = head.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi);
  console.log(`  ✓ JSON-LD schema blocks: ${schemaMatch ? schemaMatch.length : 0}`);
}

checkPage('dist/index.html', 'https://vpntizi.cc/');
checkPage('dist/vpn/index.html', 'https://vpntizi.cc/vpn/');
checkPage('dist/jichang/index.html', 'https://vpntizi.cc/jichang/');
checkPage('dist/brands/index.html', 'https://vpntizi.cc/brands/');
checkPage('dist/404.html', 'https://vpntizi.cc/404/');
checkPage('dist/search/index.html', 'https://vpntizi.cc/search/');
checkPage('dist/posts/vpn-and-airport-difference/index.html', 'https://vpntizi.cc/posts/vpn-and-airport-difference/');
