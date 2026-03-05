import { c as create_ssr_component } from "./ssr.js";
const Tooltip_svelte_svelte_type_style_lang = "";
const ButtonProjects_svelte_svelte_type_style_lang = "";
const css = {
  code: 'button.svelte-qhh14i{font-size:100%;border-radius:16px;border:none;display:flex;align-items:center;position:relative;flex-direction:row;width:max-content;cursor:pointer;background-color:var(--neutral-one);transition:filter 0.2s var(--bezier-one), transform 0.5s var(--bezier-one);user-select:none;margin:0;padding:1rem 2rem;color:var(--yellow);font-weight:300;font-size:1.6rem;font-family:var(--font-two);letter-spacing:-0.075em;border:1px solid var(--neutral-four)}button.svelte-qhh14i:active{transform:scale(95%)}button.svelte-qhh14i:hover{filter:brightness(110%)}@media screen and (max-width: 868px){button.svelte-qhh14i{text-align:center;justify-content:center;padding:1rem 2rem;width:100%;font-size:clamp(1.1rem, 2vw, 1.9rem)}}.button-with-side.svelte-qhh14i{padding:1rem 2rem 1rem 3rem}.side.svelte-qhh14i{position:absolute;border-radius:16px 0 0 16px;top:0;left:0;content:"";height:100%;width:1.6rem;background-color:var(--yellow)}@media screen and (max-width: 868px){.side.svelte-qhh14i{display:none}}',
  map: null
};
const ButtonProjects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { side = false } = $$props;
  if ($$props.side === void 0 && $$bindings.side && side !== void 0)
    $$bindings.side(side);
  $$result.css.add(css);
  return `<button class="${["svelte-qhh14i", side ? "button-with-side" : ""].join(" ").trim()}"><div class="${["svelte-qhh14i", side ? "side" : ""].join(" ").trim()}"></div> ${slots.default ? slots.default({}) : ``} </button>`;
});
export {
  ButtonProjects as B
};
