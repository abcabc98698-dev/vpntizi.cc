<script lang="ts">
import type { AirportBrand } from "@/data/airports";

interface Props {
	initialAirports: AirportBrand[];
}

const { initialAirports }: Props = $props();

let searchQuery = $state("");
let selectedLine = $state("all");
let selectedClient = $state("all");
let selectedUnlock = $state("all");
let onlyWithImages = $state(false);
let sortBy = $state("rank");
let copiedCoupon = $state<string | null>(null);

function copyCode(coupon: string) {
	if (!coupon) return;
	navigator.clipboard.writeText(coupon).then(() => {
		copiedCoupon = coupon;
		setTimeout(() => {
			copiedCoupon = null;
		}, 2000);
	});
}

function getBadge(brand: AirportBrand) {
	if (brand.rank === 1) return "年度推荐首选";
	if (brand.rank <= 3) return "顶级专线推荐";
	if (brand.rank <= 10) return "高可用专线";
	if (brand.isTopTier) return "精选品牌";
	return "收录服务商";
}

const filteredAirports = $derived(
	initialAirports
		.filter((airport) => {
			// Only with images filter
			if (onlyWithImages && !airport.hasSpeedtestImage) {
				return false;
			}

			// Search query match
			if (searchQuery.trim()) {
				const q = searchQuery.toLowerCase().trim();
				const matchName = (airport.name || "").toLowerCase().includes(q);
				const matchSlug = (airport.slug || "").toLowerCase().includes(q);
				const matchLines = (airport.lineTypes || []).some((l) =>
					l.toLowerCase().includes(q),
				);
				const matchProtocols = (airport.protocols || []).some((p) =>
					p.toLowerCase().includes(q),
				);
				const matchCoupon = (airport.coupon || "").toLowerCase().includes(q);
				const matchSummary = (airport.summary || "").toLowerCase().includes(q);
				if (
					!matchName &&
					!matchSlug &&
					!matchLines &&
					!matchProtocols &&
					!matchCoupon &&
					!matchSummary
				) {
					return false;
				}
			}

			// Line filter
			if (selectedLine !== "all") {
				if (
					selectedLine === "IEPL" &&
					!(airport.lineTypes || []).some((l) => l.includes("IEPL"))
				)
					return false;
				if (
					selectedLine === "IPLC" &&
					!(airport.lineTypes || []).some((l) => l.includes("IPLC"))
				)
					return false;
				if (
					selectedLine === "transit" &&
					!(airport.lineTypes || []).some(
						(l) => l.includes("中转") || l.includes("隧道"),
					)
				)
					return false;
			}

			// Client filter
			if (selectedClient !== "all") {
				const hasCustom =
					(airport.summary || "").includes("专属") ||
					(airport.summary || "").includes("自研");
				if (selectedClient === "custom" && !hasCustom) return false;
			}

			// Unlock filter
			if (selectedUnlock !== "all") {
				if (
					selectedUnlock === "chatgpt" &&
					airport.unlocks?.chatgpt !== "解锁"
				)
					return false;
				if (
					selectedUnlock === "netflix" &&
					airport.unlocks?.netflix !== "解锁"
				)
					return false;
				if (
					selectedUnlock === "youtube" &&
					!airport.unlocks?.youtube
				)
					return false;
			}

			return true;
		})
		.sort((a, b) => {
			if (sortBy === "rank") return a.rank - b.rank;
			if (sortBy === "priceAsc") {
				const priceA = parseFloat(a.minPrice.replace(/[^\d.]/g, "")) || 999;
				const priceB = parseFloat(b.minPrice.replace(/[^\d.]/g, "")) || 999;
				return priceA - priceB;
			}
			if (sortBy === "latencyAsc") {
				const latA =
					parseFloat(a.speedTests?.[0]?.latency?.replace(/[^\d.]/g, "") || "999") || 999;
				const latB =
					parseFloat(b.speedTests?.[0]?.latency?.replace(/[^\d.]/g, "") || "999") || 999;
				return latA - latB;
			}
			return 0;
		}),
);
</script>

<div class="w-full space-y-6">
  <!-- 顶部检索与多维筛选控制台 -->
  <div class="card-base p-6 rounded-2xl border border-black/5 dark:border-white/5 space-y-5">
    <!-- 搜索栏与排序 -->
    <div class="flex flex-col sm:flex-row gap-4 justify-between items-center">
      <div class="relative w-full sm:max-w-md">
        <input
          type="text"
          placeholder="搜索品牌名、优惠码、协议、线路特征..."
          bind:value={searchQuery}
          class="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-black/5 dark:bg-white/5 border border-transparent focus:border-(--primary) focus:outline-none transition-all"
        />
        <svg class="w-4 h-4 absolute left-3.5 top-3.5 text-black/40 dark:text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div class="flex items-center gap-3 w-full sm:w-auto justify-end text-sm flex-wrap">
        <!-- 晚高峰跑分图一键快速过滤 -->
        <button
          type="button"
          onclick={() => (onlyWithImages = !onlyWithImages)}
          class="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border flex items-center gap-1.5 cursor-pointer {onlyWithImages ? 'bg-amber-500 text-white border-amber-600 shadow-sm ring-2 ring-amber-400/30' : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30 hover:bg-amber-500/20'}"
        >
          <span>🔥 实测跑分附图</span>
          <span class="px-1.5 py-0.2 rounded-full text-[10px] {onlyWithImages ? 'bg-white/20 text-white font-bold' : 'bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold'}">
            {initialAirports.filter((a) => a.hasSpeedtestImage).length}
          </span>
        </button>

        <div class="flex items-center gap-1.5 shrink-0">
          <span class="text-xs text-black/50 dark:text-white/50 shrink-0">排序:</span>
          <select
            bind:value={sortBy}
            class="px-3 py-1.5 rounded-xl text-xs bg-black/5 dark:bg-white/5 border border-transparent focus:border-(--primary) focus:outline-none font-medium cursor-pointer"
          >
            <option value="rank">默认推荐排名</option>
            <option value="priceAsc">入门价格 (低到高)</option>
            <option value="latencyAsc">香港延迟 (低到高)</option>
          </select>
        </div>
      </div>
    </div>

    <!-- 快捷标签筛选组 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-black/5 dark:border-white/5">
      <!-- 线路类型 -->
      <div>
        <div class="text-xs font-semibold text-black/60 dark:text-white/60 mb-2">线路架构</div>
        <div class="flex flex-wrap gap-1.5">
          <button
            type="button"
            onclick={() => (selectedLine = "all")}
            class="px-2.5 py-1 text-xs rounded-lg transition-colors {selectedLine === 'all' ? 'bg-(--primary) text-white font-medium' : 'bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:bg-black/10'}"
          >全部</button>
          <button
            type="button"
            onclick={() => (selectedLine = "IEPL")}
            class="px-2.5 py-1 text-xs rounded-lg transition-colors {selectedLine === 'IEPL' ? 'bg-(--primary) text-white font-medium' : 'bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:bg-black/10'}"
          >IEPL专线</button>
          <button
            type="button"
            onclick={() => (selectedLine = "IPLC")}
            class="px-2.5 py-1 text-xs rounded-lg transition-colors {selectedLine === 'IPLC' ? 'bg-(--primary) text-white font-medium' : 'bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:bg-black/10'}"
          >IPLC专线</button>
          <button
            type="button"
            onclick={() => (selectedLine = "transit")}
            class="px-2.5 py-1 text-xs rounded-lg transition-colors {selectedLine === 'transit' ? 'bg-(--primary) text-white font-medium' : 'bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:bg-black/10'}"
          >隧道中转</button>
        </div>
      </div>

      <!-- 客户端兼容 -->
      <div>
        <div class="text-xs font-semibold text-black/60 dark:text-white/60 mb-2">客户端适配</div>
        <div class="flex flex-wrap gap-1.5">
          <button
            type="button"
            onclick={() => (selectedClient = "all")}
            class="px-2.5 py-1 text-xs rounded-lg transition-colors {selectedClient === 'all' ? 'bg-(--primary) text-white font-medium' : 'bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:bg-black/10'}"
          >全部</button>
          <button
            type="button"
            onclick={() => (selectedClient = "all")}
            class="px-2.5 py-1 text-xs rounded-lg transition-colors {selectedClient === 'all' ? 'bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:bg-black/10' : 'bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:bg-black/10'}"
          >支持第三方订阅(Clash等)</button>
          <button
            type="button"
            onclick={() => (selectedClient = "custom")}
            class="px-2.5 py-1 text-xs rounded-lg transition-colors {selectedClient === 'custom' ? 'bg-(--primary) text-white font-medium' : 'bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:bg-black/10'}"
          >专属客户端</button>
        </div>
      </div>

      <!-- AI 与流媒体解锁 -->
      <div>
        <div class="text-xs font-semibold text-black/60 dark:text-white/60 mb-2">解锁能力</div>
        <div class="flex flex-wrap gap-1.5">
          <button
            type="button"
            onclick={() => (selectedUnlock = "all")}
            class="px-2.5 py-1 text-xs rounded-lg transition-colors {selectedUnlock === 'all' ? 'bg-(--primary) text-white font-medium' : 'bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:bg-black/10'}"
          >全部</button>
          <button
            type="button"
            onclick={() => (selectedUnlock = "chatgpt")}
            class="px-2.5 py-1 text-xs rounded-lg transition-colors {selectedUnlock === 'chatgpt' ? 'bg-(--primary) text-white font-medium' : 'bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:bg-black/10'}"
          >ChatGPT解锁</button>
          <button
            type="button"
            onclick={() => (selectedUnlock = "netflix")}
            class="px-2.5 py-1 text-xs rounded-lg transition-colors {selectedUnlock === 'netflix' ? 'bg-(--primary) text-white font-medium' : 'bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:bg-black/10'}"
          >Netflix解锁</button>
          <button
            type="button"
            onclick={() => (selectedUnlock = "youtube")}
            class="px-2.5 py-1 text-xs rounded-lg transition-colors {selectedUnlock === 'youtube' ? 'bg-(--primary) text-white font-medium' : 'bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:bg-black/10'}"
          >YouTube 4K</button>
        </div>
      </div>
    </div>

    <!-- 状态指示条 -->
    <div class="flex items-center justify-between text-xs text-black/50 dark:text-white/50 pt-2 border-t border-black/5 dark:border-white/5">
      <div>
        当前展示 <span class="font-bold text-(--primary)">{filteredAirports.length}</span> / {initialAirports.length} 家品牌
      </div>
      <div class="flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>数据基准：2026-10-24 客观实测与品牌资料审计</span>
      </div>
    </div>
  </div>

  <!-- 品牌卡片网格 -->
  {#if filteredAirports.length === 0}
    <div class="card-base p-12 text-center rounded-2xl">
      <div class="text-4xl mb-3">🔍</div>
      <h3 class="text-lg font-bold mb-1">未找到匹配的机场服务商</h3>
      <p class="text-xs text-black/50 dark:text-white/50 mb-4">请尝试调整筛选条件或清空搜索关键词</p>
      <button
        type="button"
        onclick={() => {
          searchQuery = "";
          selectedLine = "all";
          selectedClient = "all";
          selectedUnlock = "all";
          onlyWithImages = false;
        }}
        class="px-4 py-2 rounded-xl text-xs bg-(--primary) text-white font-medium"
      >
        重置所有筛选
      </button>
    </div>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      {#each filteredAirports as brand (brand.id)}
        <div class="card-base p-6 rounded-2xl border border-black/5 dark:border-white/5 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group">
          <!-- 顶部序号角标与标头 -->
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <div>
                <div class="flex items-center gap-2 flex-wrap mb-1">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md {brand.rank <= 3 ? 'bg-amber-500 text-white' : brand.rank <= 10 ? 'bg-(--primary) text-white' : 'bg-black/10 dark:bg-white/10 text-black/80 dark:text-white/80'}">
                    #{brand.rank} {getBadge(brand)}
                  </span>
                  {#if brand.hasSpeedtestImage}
                    <span class="text-[11px] px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-700 dark:text-amber-300 font-bold border border-amber-500/30 flex items-center gap-1 shadow-xs">
                      🔥 附实测跑分图
                    </span>
                  {/if}
                  {#if brand.foundingYear && brand.foundingYear !== "待核实"}
                    <span class="text-[11px] px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60">
                      {brand.foundingYear}年运营
                    </span>
                  {/if}
                  {#if brand.coupon && brand.coupon !== "暂无专用码"}
                    <button
                      type="button"
                      onclick={() => copyCode(brand.coupon)}
                      title="点击一键复制优惠码"
                      class="text-[11px] px-2 py-0.5 rounded-md border border-dashed border-(--primary)/60 text-(--primary) hover:bg-(--primary)/10 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>码: {brand.coupon}</span>
                      {#if copiedCoupon === brand.coupon}
                        <span class="text-emerald-500 font-bold">✓ 已复制</span>
                      {:else}
                        <span class="text-[9px] opacity-70">📋</span>
                      {/if}
                    </button>
                  {/if}
                </div>
                <h3 class="text-xl font-bold text-black/90 dark:text-white/90 group-hover:text-(--primary) transition-colors">
                  <a href={`/posts/airport-${brand.slug}/`}>
                    {brand.name}
                  </a>
                </h3>
              </div>

              <!-- 价格指示 -->
              <div class="text-right shrink-0">
                <div class="text-xs text-black/50 dark:text-white/50">起步预算</div>
                <div class="text-lg font-extrabold text-(--primary)">{brand.minPrice}</div>
              </div>
            </div>

            <!-- 卖点描述 -->
            <p class="text-xs text-black/70 dark:text-white/70 line-clamp-2 mb-4 leading-relaxed">
              {brand.summary}
            </p>

            <!-- 关键标签行 -->
            <div class="flex flex-wrap gap-1.5 mb-4">
              {#each (brand.lineTypes || []) as line}
                <span class="text-[11px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium">
                  {line}
                </span>
              {/each}
              {#each (brand.protocols || []) as p}
                <span class="text-[11px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-medium">
                  {p}
                </span>
              {/each}
              <span class="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                {(brand.summary || "").includes("专属") || (brand.summary || "").includes("自研") ? "客户端一键登录" : "通用订阅支持"}
              </span>
            </div>

            <!-- 测速与解锁快速指标面板 -->
            <div class="bg-black/3 dark:bg-white/3 rounded-xl p-3 mb-4 space-y-2 text-xs">
              <!-- 测速样本 -->
              {#if (brand.speedTests || []).length > 0}
                <div class="flex items-center justify-between text-black/70 dark:text-white/70">
                  <span class="text-[11px] text-black/50 dark:text-white/50">实测基准 (晚高峰):</span>
                  <div class="flex items-center gap-2 font-mono text-[11px]">
                    {#each brand.speedTests.slice(0, 2) as st}
                      <span>{st.region} {st.latency} <b class="text-emerald-600 dark:text-emerald-400">{st.download}</b></span>
                    {/each}
                  </div>
                </div>
              {/if}

              <!-- 解锁状态 -->
              <div class="flex items-center justify-between text-black/70 dark:text-white/70">
                <span class="text-[11px] text-black/50 dark:text-white/50">解锁能力:</span>
                <div class="flex items-center gap-1.5 text-[11px]">
                  {#if brand.unlocks?.chatgpt === "解锁"}
                    <span class="px-1.5 py-0.2 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">ChatGPT √</span>
                  {/if}
                  {#if brand.unlocks?.netflix === "解锁"}
                    <span class="px-1.5 py-0.2 rounded bg-red-500/15 text-red-600 dark:text-red-400">Netflix √</span>
                  {/if}
                  {#if brand.unlocks?.youtube}
                    <span class="px-1.5 py-0.2 rounded bg-red-500/10 text-red-500">YouTube 4K √</span>
                  {/if}
                </div>
              </div>

              {#if brand.hasSpeedtestImage}
                <div class="pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px]">
                  <span class="text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
                    <span>🔥</span>
                    <span>晚高峰全节点跑分图</span>
                  </span>
                  <a
                    href={`/posts/airport-${brand.slug}/#真实晚高峰节点测速跑分截图`}
                    class="text-(--primary) hover:underline font-medium inline-flex items-center gap-0.5"
                  >
                    <span>查看实测大图</span>
                    <span>→</span>
                  </a>
                </div>
              {/if}
            </div>
          </div>

          <!-- 底部动作与合规声明 -->
          <div class="pt-3 border-t border-black/5 dark:border-white/5 space-y-2">
            <div class="flex items-center gap-2">
              <a
                href={`/posts/airport-${brand.slug}/`}
                class="flex-1 py-2 text-center rounded-xl text-xs font-medium border border-(--primary)/30 text-(--primary) hover:bg-(--primary)/10 transition-colors"
              >
                查看完整评测与大纲
              </a>
              {#if brand.affUrl && brand.affUrl !== "#"}
                <a
                  href={brand.affUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  class="flex-1 py-2 text-center rounded-xl text-xs font-medium bg-(--primary) text-white shadow-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-1"
                >
                  <span>直达官网注册</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              {:else}
                <span class="flex-1 py-2 text-center rounded-xl text-xs font-medium bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/40 border border-black/5 dark:border-white/5 cursor-not-allowed">
                  暂无直达通道
                </span>
              {/if}
            </div>
            <div class="text-[10px] text-center text-black/40 dark:text-white/40">
              * 含推广链接，注册可能为本站带来维护返佣，不影响用户实际支付价格。
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
