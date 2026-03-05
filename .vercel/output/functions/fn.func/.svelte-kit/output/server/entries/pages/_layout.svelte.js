import { c as create_ssr_component, b as add_styles, d as merge_ssr_styles, e as escape, v as validate_component } from "../../chunks/ssr.js";
const global = "";
const fonts = "";
const Cursor_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".pointer-ring.svelte-1adi960{left:0;top:0;height:30px;width:30px;border-radius:100px;border:1px solid var(--white-two);position:fixed;z-index:30;opacity:0;pointer-events:none;transition:0.3s all var(--bezier-one)}@media(pointer: coarse){.pointer-ring.svelte-1adi960{display:none}}",
  map: null
};
const Cursor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mouseX;
  let mouseY;
  let opacity;
  let scale = 1;
  $$result.css.add(css$1);
  return ` <div class="pointer-ring svelte-1adi960"${add_styles(merge_ssr_styles("transform: translateX(" + escape(mouseX - 15, true) + "px) translateY(" + escape(mouseY - 15, true) + "px) scale(" + escape(scale, true) + ")", { opacity }))}></div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".loading.svelte-1qspmtb .svelte-1qspmtb{transition:none}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-r7ogmu_START --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="og:title" content="exoexs.com"><meta content="/x00.png" property="og:image"><meta property="og:description" content="-_- Website Wasn't Enough Huh ?"><meta name="twitter:image" itemprop="image" content="/x00.png"><meta name="twitter:card" content="summary"><meta name="theme-color" content="#CCE2F2">${$$result.title = `<title>Abhishek Mallick</title>`, ""}<!-- HEAD_svelte-r7ogmu_END -->`, ""}  ${validate_component(Cursor, "Cursor").$$render($$result, {}, {}, {})} <span class="${["svelte-1qspmtb", "loading"].join(" ").trim()}">${slots.default ? slots.default({}) : ``} </span>`;
});
export {
  Layout as default
};
