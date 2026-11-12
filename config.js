/* ===== KONFIGURASI BERSAMA (user.html & uploader.html) — edit di sini saja ===== */
const CONFIG = {
  // URL Web App Apps Script (/exec)
  SCRIPT_URL: "https://script.google.com/macros/s/AKfycbw-sg3Dojb8I3TmGUxaAbrMoiXngIyJ6GQq3a77VVGWu-C5KiKz6qtVxc79Wz_YktfnrA/exec",
  // Alamat halaman user untuk membuat link bagikan. Kosongkan jika user.html satu folder dengan uploader.html
  USER_PAGE_URL: "",
  MAX_MB: 300,
  // ===== PLACEHOLDER LOGO: isi dengan link gambar (PNG/SVG transparan, disarankan 1 warna) =====
  // Kosong = otomatis tampil simbol line-art bawaan.
  LOGOS: {
    hub: "https://marketingexata.github.io/kontenmarketing/EXATAGROUP.png",
    "EXATA": "https://marketingexata.github.io/kontenmarketing/EXATA.png",
    "JP Smart": "https://marketingexata.github.io/kontenmarketing/JPS.png",
    "JLCT": "https://marketingexata.github.io/kontenmarketing/JLCT.png",
    "J-Expert": "https://marketingexata.github.io/kontenmarketing/JX.png"
  }
};
const BRANDS = [
  {name:"EXATA", slug:"exata", icon:"exata"}, {name:"JP Smart", slug:"jp-smart", icon:"jpsmart"},
  {name:"JLCT", slug:"jlct", icon:"jlct"}, {name:"J-Expert", slug:"j-expert", icon:"jexpert"}
];
const CATS = [
  {name:"Story", slug:"story", icon:"story"}, {name:"Feed", slug:"feed", icon:"feed"},
  {name:"Carousel", slug:"carousel", icon:"carousel"}, {name:"Materi Blasting", slug:"blast", icon:"blast"}, {name:"Video", slug:"video", icon:"video"}
];
const ICONS = {
  exata:'<path d="M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9z"/><path d="M12 8l3.5 2v4L12 16l-3.5-2v-4z"/>',
  jpsmart:'<path d="M3 19l6-9 4 5 2-3 6 7z"/><circle cx="17" cy="6" r="2"/>',
  jlct:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/>',
  jexpert:'<path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.5l-5.3 2.9 1.2-6-4.5-4.1 6-.7z"/>',
  story:'<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10 6h4"/>',
  feed:'<rect x="3.5" y="3.5" width="17" height="17" rx="2"/><path d="M3.5 16l5-5 4 4 3-3 5 5"/><circle cx="9" cy="8.5" r="1.3"/>',
  carousel:'<rect x="6" y="5" width="12" height="14" rx="2"/><path d="M3 8v8M21 8v8"/>',
  blast:'<path d="M3 10v4h3l8 4V6L6 10z"/><path d="M17 9.5a3.5 3.5 0 010 5"/>',
  video:'<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3z"/>',
  search:'<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>', next:'<path d="M9 5l7 7-7 7"/>',
  all:'<rect x="4" y="4" width="6.5" height="6.5" rx="1"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1"/>',
  download:'<path d="M12 4v11M7.5 11L12 15.5 16.5 11M5 20h14"/>',
  link:'<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
  play:'<circle cx="12" cy="12" r="9"/><path d="M10.5 8.5l5 3.5-5 3.5z"/>',
  back:'<path d="M15 5l-7 7 7 7"/>', close:'<path d="M6 6l12 12M18 6L6 18"/>',
  plus:'<path d="M12 5v14M5 12h14"/>', minus:'<path d="M5 12h14"/>',
  copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2"/>',
  edit:'<path d="M4 20h4L19 9l-4-4L4 16z"/>', trash:'<path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13"/>',
  upload:'<path d="M12 16V5M7.5 9L12 4.5 16.5 9M5 20h14"/>', refresh:'<path d="M20 11a8 8 0 10-2.3 5.7M20 4v7h-7"/>',
  folder:'<path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>',
  lock:'<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>', check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>'
};
const ico = (n, c = "w-5 h-5") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="${c}">${ICONS[n] || ""}</svg>`;
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const logoFail = (img, icon) => { const w = document.createElement("span"); w.innerHTML = ico(icon, "h-10 w-10"); img.replaceWith(w.firstChild); };
const brandMark = (b, c = "h-10") => CONFIG.LOGOS[b.name] ? `<img src="${esc(CONFIG.LOGOS[b.name])}" alt="${esc(b.name)}" class="${c} w-auto max-w-[150px] object-contain object-left" onerror="logoFail(this,'${b.icon}')">` : ico(b.icon, c + " w-auto aspect-square");
const hubMark = () => CONFIG.LOGOS.hub ? `<img src="${esc(CONFIG.LOGOS.hub)}" alt="Pusat Konten" class="h-10 sm:h-11 w-auto object-contain" onerror="this.outerHTML='<span class=\\'serif text-xl\\'>Pusat Konten</span>'">` : `<span class="serif text-xl">Pusat Konten</span>`;
const dlUrl = i => i.fileId ? `https://drive.google.com/uc?export=download&confirm=t&id=${i.fileId}` : i.downloadUrl;
const BASE_CSS = `
:root{--ink:#0B1A3A;--ivory:#F6F7FB;--brass:#E6195F;--line:rgba(11,26,58,.10);--grad:linear-gradient(90deg,#E6195F,#C21A7F);--gold:linear-gradient(90deg,#FF5C39,#FFB61F)}
body{font-family:'Plus Jakarta Sans',sans-serif;background:#F6F7FB;color:var(--ink)}
.serif{font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;letter-spacing:-.01em}
.card{background:#fff;border:1px solid var(--line);border-radius:1.1rem;box-shadow:0 6px 20px -12px rgba(11,26,58,.2)}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;padding:.7rem 1.3rem;border-radius:999px;font-size:.8rem;font-weight:700;background:var(--grad);color:#fff;box-shadow:0 10px 20px -10px rgba(230,25,95,.7);transition:.25s}
.btn:hover{filter:brightness(1.1);transform:translateY(-1px)} .btn:disabled{opacity:.5;transform:none}
.btn2{background:#fff;color:var(--ink);border:1px solid var(--line);box-shadow:none} .btn2:hover{background:var(--ink);color:#fff;filter:none}
.btn3{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.75);box-shadow:none} .btn3:hover{background:#fff;color:var(--ink);filter:none}
.chip{display:inline-flex;align-items:center;gap:.4rem;padding:.5rem .95rem;border-radius:999px;font-size:.75rem;font-weight:700;border:1px solid var(--line);white-space:nowrap;background:#fff}
.chip.on{background:var(--grad);color:#fff;border-color:transparent;box-shadow:0 8px 16px -8px rgba(230,25,95,.7)}
.inp{width:100%;padding:.72rem 1rem;border:1px solid var(--line);border-radius:.8rem;font-size:.875rem;background:#fff;outline:none;transition:.2s}.inp:focus{border-color:var(--brass);box-shadow:0 0 0 3px rgba(230,25,95,.12)}
.lbl{display:block;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:var(--brass);margin-bottom:.4rem}
.muted{color:rgba(11,26,58,.58)} .rule{height:1px;background:var(--line)} .brass{color:var(--brass)}
.ph{background:#EEF0F6;color:rgba(11,26,58,.3)}
.nav{background:rgba(255,255,255,.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.nl{position:relative;padding:.4rem 0;font-weight:600;font-size:.85rem;color:var(--ink);transition:.2s} .nl:hover{color:var(--brass)}
.nl.on{font-weight:800}.nl.on:after{content:"";position:absolute;left:0;right:0;bottom:-6px;height:2px;border-radius:2px;background:var(--brass);animation:grow .4s both;transform-origin:left}
.hero{position:relative;overflow:hidden;color:#fff;background:linear-gradient(120deg,#06132E 0%,#0C1F4B 52%,#2E1458 100%);border-radius:0 0 50% 50%/0 0 36px 36px}
.hero:before,.hero:after{content:"";position:absolute;pointer-events:none;transform:skewX(-24deg)}
.hero:before{right:-6%;top:-35%;width:46%;height:180%;background:linear-gradient(170deg,rgba(230,25,95,0),rgba(230,25,95,.6) 60%,rgba(124,58,237,.55));animation:drift 10s ease-in-out infinite alternate}
.hero:after{right:24%;top:-40%;width:14%;height:190%;background:linear-gradient(170deg,rgba(124,58,237,0),rgba(124,58,237,.35));animation:drift 14s ease-in-out infinite alternate-reverse}
.hero>*{position:relative;z-index:2}
.eyebrow{display:flex;align-items:center;gap:.7rem;font-size:.68rem;font-weight:800;letter-spacing:.24em;text-transform:uppercase}.eyebrow:before{content:"";width:2rem;height:2px;background:var(--brass)}
.gtext{background:var(--gold);-webkit-background-clip:text;background-clip:text;color:transparent}.rtext{color:var(--brass)}
.glass{background:linear-gradient(145deg,rgba(255,255,255,.15),rgba(255,255,255,.05));border:1px solid rgba(255,255,255,.22);backdrop-filter:blur(14px);border-radius:1.4rem;box-shadow:0 30px 60px -20px rgba(0,0,0,.6)}
.tilt{transform:perspective(1100px) rotateY(-7deg) rotateX(3deg);transition:transform .5s}.tilt:hover{transform:perspective(1100px) rotateY(0) rotateX(0)}
.tile{display:flex;align-items:center;justify-content:center;width:2.9rem;height:2.9rem;border-radius:.9rem;flex:none}
.t0{background:#FDE7EF;color:#E6195F}.t1{background:#F0E8FB;color:#7C3AED}.t2{background:#FFEFDD;color:#F97316}.t3{background:#FDE8E8;color:#E11D48}
.impact{position:relative;overflow:hidden;color:#fff;border-radius:1.4rem;background:linear-gradient(100deg,#07142F,#14204F 60%,#3B1466)}
.impact:after{content:"";position:absolute;right:-4%;top:-50%;width:22%;height:200%;transform:skewX(-24deg);background:linear-gradient(170deg,rgba(255,92,57,.0),rgba(255,92,57,.55))}
.cta{position:relative;overflow:hidden;color:#fff;border-radius:1.4rem;background:linear-gradient(100deg,#E6195F,#9A1B8A 55%,#4B1670)}
.step{border-radius:1.1rem;border:1px solid var(--line);box-shadow:0 6px 20px -12px rgba(11,26,58,.2)}
.foot{background:linear-gradient(180deg,#0B1A3A,#07122A);color:#cbd5e1;border-radius:2rem 2rem 0 0}
@keyframes drift{to{transform:skewX(-24deg) translateX(-36px)}}
@keyframes up{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
@keyframes pop{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:none}}
@keyframes shimmer{to{background-position:-200% 0}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes grow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes slideIn{from{opacity:0;transform:translateX(24px)}to{opacity:1;transform:none}}
@keyframes tick{from{stroke-dashoffset:30}to{stroke-dashoffset:0}}
.rise{opacity:0;animation:up .6s cubic-bezier(.2,.7,.2,1) forwards;animation-delay:calc(var(--i,0)*70ms)}
.pop{animation:pop .28s ease-out}.growline{transform-origin:left;animation:grow 1s cubic-bezier(.2,.7,.2,1) both}
.lift{transition:transform .3s,box-shadow .3s}.lift:hover{transform:translateY(-5px);box-shadow:0 18px 34px -18px rgba(27,36,48,.4)}
.btn:active,.chip:active{transform:scale(.96)} .chip{transition:.2s} .chip:hover{border-color:var(--brass)}
.mark{display:inline-block;transition:transform .5s cubic-bezier(.2,.7,.2,1)} .group:hover .mark{transform:rotate(-8deg) scale(1.12)}
.sk{background:linear-gradient(90deg,rgba(27,36,48,.05) 25%,rgba(27,36,48,.12) 50%,rgba(27,36,48,.05) 75%);background-size:200% 100%;animation:shimmer 1.3s infinite}
.fadein{opacity:0;transition:opacity .5s}.fadein.ld{opacity:1}
.pstack{position:fixed;right:1rem;bottom:1rem;z-index:100;display:flex;flex-direction:column;gap:.6rem;max-width:calc(100vw - 2rem)}
.ptask{display:flex;align-items:center;gap:.8rem;width:19rem;max-width:100%;padding:.7rem .9rem;background:#fff;border:1px solid var(--line);border-radius:1rem;box-shadow:0 14px 30px -12px rgba(27,36,48,.35);animation:slideIn .35s ease-out;transition:opacity .4s,transform .4s}
.ptask.out{opacity:0;transform:translateX(24px)}
.ring{position:relative;width:3.2rem;height:3.2rem;flex:none}.ring svg{width:100%;height:100%}
.ring .rg{transition:stroke .3s}.ring .rp{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:800}
.indet .ring svg{animation:spin 1.1s linear infinite}.indet .rg{stroke-dasharray:28 72}
.ptask.ok .rg{stroke:var(--ink)}.ptask.bad .rg{stroke:#9B2C2C}
.ptask .tk{stroke-dasharray:30;animation:tick .5s ease-out forwards}
.pt1{font-size:.8rem;font-weight:800}.pt2{font-size:.7rem;color:rgba(27,36,48,.6);word-break:break-all}
.drop{border:1.5px dashed var(--line);border-radius:1rem;transition:.25s;cursor:pointer}.drop:hover,.drop.over{border-color:var(--brass);background:rgba(169,133,80,.08);transform:scale(1.01)}
@media (prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;animation-delay:0s!important;transition-duration:.01ms!important}}`;

/* ===== PROGRESS LINGKARAN (persen) — dipakai untuk loading, unduh, unggah ===== */
const Prog = (() => {
  let box;
  const stack = () => box || (box = Object.assign(document.createElement("div"), {className: "pstack"}), document.body.appendChild(box), box);
  function start(title, sub = "") {
    const el = document.createElement("div"); el.className = "ptask";
    el.innerHTML = `<div class="ring"><svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(27,36,48,.13)" stroke-width="3"/><circle class="rg" cx="18" cy="18" r="15.9" fill="none" stroke="#E6195F" stroke-width="3" stroke-linecap="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100" transform="rotate(-90 18 18)"/></svg><b class="rp">0%</b></div><div class="min-w-0"><p class="pt1"></p><p class="pt2"></p></div>`;
    stack().appendChild(el);
    const rg = el.querySelector(".rg"), rp = el.querySelector(".rp"), p1 = el.querySelector(".pt1"), p2 = el.querySelector(".pt2");
    let target = 0, shown = 0, raf = 0, closed = false;
    p1.textContent = title; p2.textContent = sub;
    const loop = () => { shown += (target - shown) * 0.18; if (Math.abs(target - shown) < 0.2) shown = target;
      rg.style.strokeDashoffset = 100 - shown; rp.textContent = Math.round(shown) + "%"; raf = shown !== target ? requestAnimationFrame(loop) : 0; };
    const api = {
      set(p, s) { el.classList.remove("indet"); target = Math.max(0, Math.min(100, p)); if (s != null) p2.textContent = s; if (!raf) raf = requestAnimationFrame(loop); },
      indet(s) { el.classList.add("indet"); rp.textContent = ""; if (s != null) p2.textContent = s; },
      end(cls, msg, icon) { if (closed) return; closed = true; cancelAnimationFrame(raf); el.classList.remove("indet"); el.classList.add(cls);
        rg.style.strokeDashoffset = cls === "ok" ? 0 : 100 - shown; p2.textContent = msg || "";
        rp.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="${cls === "ok" ? "#0B1A3A" : "#9B2C2C"}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path class="tk" d="${icon}"/></svg>`;
        setTimeout(() => { el.classList.add("out"); setTimeout(() => el.remove(), 450); }, cls === "ok" ? 2200 : 5000); },
      done(msg) { api.end("ok", msg || "Selesai", "M5 12.5l4.5 4.5L19 7.5"); },
      fail(msg) { api.end("bad", msg || "Gagal", "M6 6l12 12M18 6L6 18"); }
    };
    return api;
  }
  return { start };
})();
const countUp = (el, n, ms = 700) => { const t0 = performance.now(); const f = t => { const k = Math.min(1, (t - t0) / ms); el.textContent = Math.round(n * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(f); }; requestAnimationFrame(f); };
