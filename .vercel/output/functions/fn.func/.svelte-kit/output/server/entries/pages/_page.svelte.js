import { c as create_ssr_component, f as subscribe, e as escape, g as add_attribute, v as validate_component, b as add_styles } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { B as ButtonProjects } from "../../chunks/ButtonProjects.js";
const Nav_svelte_svelte_type_style_lang = "";
const css$a = {
  code: "li.svelte-3i26xw.svelte-3i26xw{text-decoration:none;list-style:none}button.svelte-3i26xw.svelte-3i26xw{background-color:transparent;border:none;color:var(--white-two);font-size:1.1rem;user-select:none;display:flex;align-items:center;gap:0.75rem;padding:13px 25px;border-radius:100px;cursor:pointer;transition:background-color 0.3s var(--bezier-one), transform 0.3s var(--bezier-one)}button.svelte-3i26xw.svelte-3i26xw:hover{background-color:var(--neutral-four)}h5.svelte-3i26xw.svelte-3i26xw{transition:all 0.3s var(--bezier-one)}.icon-container.svelte-3i26xw.svelte-3i26xw{display:none}button.svelte-3i26xw:hover>h5.svelte-3i26xw,.selected.svelte-3i26xw img.svelte-3i26xw,.selected.svelte-3i26xw h5.svelte-3i26xw{color:var(--white);opacity:1}img.svelte-3i26xw.svelte-3i26xw{display:flex;align-items:center;justify-self:center;opacity:0.5;height:24px;width:24px;transition:all 0.5s var(--bezier-one)}h5.svelte-3i26xw.svelte-3i26xw{opacity:0.8}button.svelte-3i26xw:active img.svelte-3i26xw,button.svelte-3i26xw:hover img.svelte-3i26xw{opacity:1}@media screen and (max-width: 868px){img.svelte-3i26xw.svelte-3i26xw{transform:scale(0.95);margin-right:0;transition-delay:0.3s}h5.svelte-3i26xw.svelte-3i26xw{transition-delay:0.5s}.icon-container.svelte-3i26xw.svelte-3i26xw{display:block;padding:6px 24px;border-radius:100px;margin-bottom:0.4rem;transition:all 0.5s var(--bezier-one);transition-delay:0.3s}button.svelte-3i26xw.svelte-3i26xw{flex-direction:column;gap:0;font-size:0.9rem;margin-bottom:0}button.svelte-3i26xw.svelte-3i26xw:hover{background-color:transparent}button.svelte-3i26xw:hover .icon-container.svelte-3i26xw,.selected.svelte-3i26xw .icon-container.svelte-3i26xw{background-color:var(--yellow-opacity)}}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { href = "#" } = $$props;
  let { section = "home" } = $$props;
  let { isSelected } = $$props;
  $page.url.pathname;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  $$result.css.add(css$a);
  $$unsubscribe_page();
  return `<li class="${["svelte-3i26xw", isSelected ? "selected" : ""].join(" ").trim()}"><button class="svelte-3i26xw"><div class="icon-container svelte-3i26xw"><img src="${"/icons/" + escape(
    section === "/" ? "home" : section === "projects" ? "work" : section,
    true
  ) + ".svg"}"${add_attribute("alt", section, 0)} class="svelte-3i26xw"></div> <h5 class="svelte-3i26xw">${escape(section)}</h5></button> </li>`;
});
const NavHost_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: "nav.svelte-1czrify.svelte-1czrify{display:flex;align-items:center;justify-content:center}div.svelte-1czrify.svelte-1czrify{width:100%;text-align:center;align-items:center;position:fixed;top:0;padding:1.25rem 0;z-index:15;background-color:var(--bg-color);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);background-blend-mode:overlay;transition:all 0.5s ease}div.svelte-1czrify ul.svelte-1czrify{display:flex;gap:4rem;justify-content:center}@media(min-width: 868px){div.svelte-1czrify.svelte-1czrify{width:40rem;border-radius:12px}.scrolled.svelte-1czrify.svelte-1czrify{border-bottom:1.5px solid var(--yellow-opacity);padding:0.5rem 0;margin-top:0.5rem;width:34rem;background-color:var(--neutral-five);box-shadow:0px 15px 8px -10px rgba(0, 0, 0, 0.4)}}@media(max-width: 868px){div.svelte-1czrify.svelte-1czrify{bottom:0;top:auto;padding:0rem;background-color:#1a1616}div.svelte-1czrify ul.svelte-1czrify{display:flex;justify-content:space-evenly;gap:2vw}}",
  map: null
};
const NavHost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y;
  $$result.css.add(css$9);
  return `<nav class="svelte-1czrify"><div class="${["svelte-1czrify", ""].join(" ").trim()}"><ul class="svelte-1czrify">${validate_component(Nav, "Nav").$$render(
    $$result,
    {
      href: "#home",
      section: "/",
      isSelected: y < 350
    },
    {},
    {}
  )} ${validate_component(Nav, "Nav").$$render(
    $$result,
    {
      href: "#about",
      section: "about",
      isSelected: y > 350
    },
    {},
    {}
  )} ${validate_component(Nav, "Nav").$$render(
    $$result,
    {
      href: "#work",
      section: "projects",
      isSelected: y > 675
    },
    {},
    {}
  )}</ul></div></nav>  `;
});
const HeroImage_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "@keyframes svelte-1rgv7kr-float{0%{transform:translateY(7px)}50%{transform:translateY(-7px)}100%{transform:translateY(7px)}}.img.svelte-1rgv7kr{border-radius:50%;width:320px;height:320px;max-width:100%;object-fit:cover;object-position:center;z-index:1;display:block;transition:width 0.4s var(--bezier-one), transform 0.4s var(--bezier-one);align-self:start;background-color:var(--neutral-one)}@media screen and (max-width: 768px){.img.svelte-1rgv7kr{display:none}}@media screen and (max-width: 1240px){.img.svelte-1rgv7kr{width:clamp(260px, 32vw, 320px);height:clamp(260px, 32vw, 320px)}}.img-container.svelte-1rgv7kr{z-index:1;animation:svelte-1rgv7kr-float 6s ease-in-out infinite;animation-play-state:running;background-color:rgba(255, 255, 255, 0);padding:0%;border:0}@media(max-width: 1240px){.img-container.svelte-1rgv7kr{display:flex;justify-content:center}}",
  map: null
};
const HeroImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let xRotation;
  let yRotation;
  $$result.css.add(css$8);
  return `<div class="img-container svelte-1rgv7kr"><img src="/icons/profile.jpeg" alt="Abhishek Mallick" width="320" height="320" loading="eager" fetchpriority="high" class="img svelte-1rgv7kr"${add_styles({
    "transform": `perspective(500px) ${""} rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
  })}> </div>`;
});
const Button_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: 'button.svelte-deyrn6{font-size:100%;border-radius:16px;border:none;display:flex;position:relative;flex-direction:row;width:max-content;cursor:pointer;background-color:var(--neutral-one);transition:filter 0.2s var(--bezier-one), transform 0.5s var(--bezier-one);user-select:none;margin:0;padding:1rem 2rem;color:var(--yellow);font-weight:300;font-size:1.6rem;font-family:var(--font-two);letter-spacing:-0.075em;border:1px solid var(--neutral-four)}button.svelte-deyrn6:active{transform:scale(95%)}button.svelte-deyrn6:hover{filter:brightness(110%)}@media screen and (max-width: 868px){button.svelte-deyrn6{text-align:center;justify-content:center;padding:1rem 2rem;width:100%;font-size:clamp(1.1rem, 2vw, 1.9rem)}}.button-with-side.svelte-deyrn6{padding:1rem 2rem 1rem 3rem}.side.svelte-deyrn6{position:absolute;border-radius:16px 0 0 16px;top:0;left:0;content:"";height:100%;width:1.6rem;background-color:var(--yellow)}@media screen and (max-width: 868px){.side.svelte-deyrn6{display:none}}',
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { side = false } = $$props;
  if ($$props.side === void 0 && $$bindings.side && side !== void 0)
    $$bindings.side(side);
  $$result.css.add(css$7);
  return `<button class="${["svelte-deyrn6", side ? "button-with-side" : ""].join(" ").trim()}"><div class="${["svelte-deyrn6", side ? "side" : ""].join(" ").trim()}"></div> ${slots.default ? slots.default({}) : ``} </button>`;
});
const css$6 = {
  code: '.tooltip-wrapper.svelte-197soql.svelte-197soql{position:relative;display:inline-block}.tooltip-wrapper.svelte-197soql:hover .tooltip.svelte-197soql{opacity:1;visibility:initial;margin-top:-8px}.tooltip.svelte-197soql.svelte-197soql{position:absolute;display:inline-block;white-space:nowrap;opacity:0;visibility:hidden;transition:opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, margin-top 0.2s ease-in-out;left:50%;top:0%;line-height:normal;transform:translate(-50%, -120%);padding:0.15rem 0.5rem;border-radius:6px;background-color:var(--yellow);color:var(--neutral-one);font-size:0.9rem;font-family:var(--font-two);font-weight:300;letter-spacing:-0.075em}.tooltip.svelte-197soql.svelte-197soql::after{border-left:solid transparent 10px;border-right:solid transparent 10px;border-top:solid var(--yellow) 10px;bottom:-8px;content:" ";height:0;width:0;left:50%;margin-left:-10px;position:absolute}.tooltip.active.svelte-197soql.svelte-197soql{opacity:1;visibility:initial;margin-top:-8px}',
  map: null
};
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tip = "" } = $$props;
  let { active = false } = $$props;
  if ($$props.tip === void 0 && $$bindings.tip && tip !== void 0)
    $$bindings.tip(tip);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css$6);
  return ` ${`${slots.default ? slots.default({}) : ``}`}`;
});
const Social_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "a.svelte-kqmvzq.svelte-kqmvzq{transition:all 0.3s var(--bezier-one);display:flex;justify-content:center;align-items:center;width:50px;height:50px;background-color:transparent;border:none;border-radius:10px;cursor:pointer}img.svelte-kqmvzq.svelte-kqmvzq{height:26px;width:26px;opacity:0.7;transition:all 0.3s var(--bezier-one)}div.svelte-kqmvzq.svelte-kqmvzq{transition:all 0.3s var(--bezier-one)}div.svelte-kqmvzq:hover img.svelte-kqmvzq{opacity:1}div.svelte-kqmvzq:hover a.svelte-kqmvzq{background-color:var(--neutral-one)}div.svelte-kqmvzq.svelte-kqmvzq:active{transform:scale(98%)}",
  map: null
};
const Social = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "Github" } = $$props;
  let { link = "" } = $$props;
  let { tip = "" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.tip === void 0 && $$bindings.tip && tip !== void 0)
    $$bindings.tip(tip);
  $$result.css.add(css$5);
  return `${validate_component(Tooltip, "Tooltip").$$render($$result, { tip }, {}, {
    default: () => {
      return `<div class="svelte-kqmvzq"><a${add_attribute("href", link, 0)} target="_blank" rel="noreferrer" class="svelte-kqmvzq"><img src="${"/icons/" + escape(icon, true) + ".svg"}"${add_attribute("alt", icon, 0)} class="svelte-kqmvzq"></a></div>`;
    }
  })}`;
});
const Socials_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".socials-container.svelte-t8woea{display:flex;gap:0.75rem}",
  map: null
};
const Socials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="socials-container svelte-t8woea">${validate_component(Social, "Social").$$render(
    $$result,
    {
      icon: "github",
      tip: "Abhishek-Mallick",
      link: "https://github.com/Abhishek-Mallick"
    },
    {},
    {}
  )} ${validate_component(Social, "Social").$$render(
    $$result,
    {
      icon: "discord",
      tip: "abhishek-mallick09",
      link: `https://www.linkedin.com/in/abhishek-mallick09/`
    },
    {},
    {}
  )} <a href="mailto:mallickabhishek97@gmail.com">${validate_component(Social, "Social").$$render(
    $$result,
    {
      icon: "email",
      tip: "mallickabhishek97@gmail.com"
    },
    {},
    {}
  )}</a> </div>`;
});
const Hero_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '@charset "UTF-8";section.svelte-10uglov{scroll-margin-top:20rem;display:flex;justify-content:space-between;align-items:center;margin-bottom:5.75rem;margin-top:7rem}@media screen and (max-width: 868px){section.svelte-10uglov{margin-top:4rem}}@media screen and (max-width: 768px){section.svelte-10uglov{margin-bottom:2.75rem}}@media screen and (max-width: 500px){section.svelte-10uglov{display:block}}.socials.svelte-10uglov{margin-top:1rem;margin-bottom:1.7rem}h1.svelte-10uglov::before{height:300px;font-size:100px;content:"⌥";font-weight:700;z-index:-1;user-select:none;transform:translateX(-125%) translateY(-50%);-webkit-text-stroke:2px var(--white);color:transparent;opacity:0.25;letter-spacing:-0.1em;position:absolute}@media screen and (max-width: 1240px){h1.svelte-10uglov{min-height:0vw;font-size:clamp(4rem, 10vw, 6.25rem)}}',
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section id="home" class="wrapper svelte-10uglov"><div><h1 class="svelte-10uglov" data-svelte-h="svelte-17h4buz">Abhishek</h1> <h2 data-svelte-h="svelte-1p38odf">Mallick</h2> <h5 data-svelte-h="svelte-18q1i12">&quot;Software Developer | Bringing Linux to Life!&quot;<br>Attempting to
			program.</h5> <div class="socials svelte-10uglov">${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div> ${validate_component(Button, "Button").$$render($$result, { side: true }, {}, {
    default: () => {
      return `Discover my work ↓`;
    }
  })}</div> ${validate_component(HeroImage, "HeroImage").$$render($$result, {}, {}, {})} </section>`;
});
const About_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '@charset "UTF-8";section.svelte-1b4kx92{margin-bottom:6rem;display:grid;gap:4.5rem;grid-template-columns:1fr 1fr;align-items:center}.text.svelte-1b4kx92{position:relative;line-height:1.75rem}span.svelte-1b4kx92{font-weight:400;font-family:var(--font-two);font-size:0.9rem;background-color:var(--neutral-one);border-radius:7px;color:var(--yellow);padding:0.2rem 0.5rem 0.2rem;width:fit-content}a.svelte-1b4kx92{text-decoration:none}.text.svelte-1b4kx92::before{height:300px;font-size:150px;content:"╭";font-weight:700;z-index:-1;user-select:none;transform:translateX(630%) translateY(-5%);-webkit-text-stroke:2px var(--white);color:transparent;opacity:0.22;letter-spacing:-0.075em;position:absolute}@media(max-width: 868px){section.svelte-1b4kx92{display:flex;flex-direction:column;align-items:normal}}.repo-card.svelte-1b4kx92{padding:1rem 1.25rem;background-color:var(--neutral-two);border-radius:8px;min-height:140px;height:100%;display:flex;flex-direction:column;gap:0.25rem;transition:transform 0.3s var(--bezier-one), box-shadow 0.3s var(--bezier-one);justify-content:space-between;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);background-blend-mode:overlay;border:1px solid var(--neutral-four)}.repo-card.svelte-1b4kx92:hover{transform:translateY(-2px);box-shadow:0px 15px 25px -10px rgba(0, 0, 0, 0.25)}.repo-card--featured.svelte-1b4kx92{border-left:3px solid var(--yellow-opacity)}.repo-card--secondary.svelte-1b4kx92{opacity:0.88;border-color:var(--neutral-four);background-color:var(--neutral-three)}.repo-card--secondary.svelte-1b4kx92:hover{opacity:1}.experience-group.svelte-1b4kx92{display:flex;flex-direction:column;gap:0.5rem;margin-bottom:0}.experience-group--jpmc.svelte-1b4kx92{margin-bottom:0}a.svelte-1b4kx92{text-decoration:none;color:var(--white);height:100%;border-radius:8px}img.svelte-1b4kx92{height:16px;width:auto}#top-part.svelte-1b4kx92{display:flex;justify-content:space-between}span.svelte-1b4kx92{color:var(--yellow)}.info.svelte-1b4kx92{display:flex;gap:0.2rem;align-items:center}#open-exp.svelte-1b4kx92{height:38px;width:auto;margin-right:8px;transition:filter 0.3s var(--bezier-one)}',
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let getAge = () => {
    let birthDate = /* @__PURE__ */ new Date("2003/03/09");
    const ageMs = Date.now() - birthDate.getTime();
    const preciseAge = (ageMs / 31536e6).toFixed(8);
    return preciseAge;
  };
  getAge();
  setInterval(
    () => {
      getAge();
    },
    1e3
  );
  $$result.css.add(css$2);
  return `<section id="about" class="wrapper svelte-1b4kx92"><div class="text svelte-1b4kx92"><h3 data-svelte-h="svelte-cpebvc">Bio</h3> <p>Hey, I&#39;m Abhishek. I&#39;m a Software Engineer at JP Morgan Chase &amp; Co., working on the Account Opening and Activation flow — systems where getting it wrong isn&#39;t an option.
			<br><br>
			I graduated from KIIT and have been building things ever since — from
			<span class="svelte-1b4kx92" data-svelte-h="svelte-16u4thh">Tunr</span>, a resume tuning and auto-apply tool for job hunters, to co-founding
			<span class="svelte-1b4kx92" data-svelte-h="svelte-1tghurn">Architech</span>, a platform that generates architectural diagrams from codebases and prompts, now used by 2k+ developers monthly.
			<br><br> <span class="svelte-1b4kx92" data-svelte-h="svelte-i7hm5s">Hackathons</span> are where a lot of this started — won Best Fintech at Solving for India, placed at BoostHacks and Hack for Health. They taught me how to build fast and think clearly under pressure.
			<br><br>
			I like contributing to
			${validate_component(Tooltip, "Tooltip").$$render($$result, { tip: "it's true" }, {}, {
    default: () => {
      return `<a href="https://github.com/Abhishek-Mallick" target="_blank" rel="noreferrer" class="svelte-1b4kx92" data-svelte-h="svelte-132bohh"><span class="svelte-1b4kx92">open source</span></a>`;
    }
  })}
			— which is probably why you ended up here.</p></div>  <div class="text svelte-1b4kx92" data-svelte-h="svelte-1grm024"><h3 style="margin-bottom: 1rem;">Experience</h3> <div class="experience-group experience-group--jpmc svelte-1b4kx92"><div class="repo-card repo-card--featured svelte-1b4kx92"><div id="top-part" class="svelte-1b4kx92"><div class="info svelte-1b4kx92"><h6>SWE I</h6></div> <div style="width: 200px; margin-top: 10px;"><img src="/icons/jpmc-transparent.png" alt="" id="open-exp" style="max-width: 100%; height: auto;" class="svelte-1b4kx92"></div></div> <div><h3>JP Morgan Chase and Co.</h3> <h6>Bengaluru | Jan&#39;25 – Present</h6></div></div> <div class="repo-card repo-card--secondary svelte-1b4kx92"><div id="top-part" class="svelte-1b4kx92"><div class="info svelte-1b4kx92"><h6>Software Developer Intern</h6></div> <div style="width: 200px; margin-top: 10px;"><img src="/icons/jpmc-transparent.png" alt="" id="open-exp" style="max-width: 100%; height: auto;" class="svelte-1b4kx92"></div></div> <div><h3>JP Morgan Chase and Co.</h3> <h6>Bengaluru | May&#39;24 – Dec&#39;24</h6></div></div></div> <div class="repo-card svelte-1b4kx92" style="margin-top: 1rem;"><div id="top-part" class="svelte-1b4kx92"><div class="info svelte-1b4kx92"><h6>Software Developer Intern</h6></div> <div><img src="/icons/dk.png" alt="" id="open-exp" class="svelte-1b4kx92"></div></div> <div><h3>Deepkapha</h3> <h6>Remote | May - August&#39;23</h6></div></div></div> </section>`;
});
const Repos_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@charset "UTF-8";.title.svelte-npd125.svelte-npd125{display:flex;justify-content:center;margin-top:0}@media(max-width: 868px){.title.svelte-npd125.svelte-npd125{justify-content:left}}.repo-card.svelte-npd125.svelte-npd125{padding:1rem 1.25rem;background-color:var(--neutral-two);border-radius:8px;min-height:140px;height:100%;display:flex;flex-direction:column;gap:0.25rem;transition:transform 0.3s var(--bezier-one), box-shadow 0.3s var(--bezier-one);justify-content:space-between;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);background-blend-mode:overlay;border:1px solid var(--neutral-four)}.repo-card.svelte-npd125.svelte-npd125:hover{transform:translateY(-2px);box-shadow:0px 15px 25px -10px rgba(0, 0, 0, 0.25)}.repo-card.svelte-npd125:hover #open.svelte-npd125{filter:brightness(1.3)}.shimmer.svelte-npd125.svelte-npd125{animation-duration:2.2s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:svelte-npd125-shimmer;animation-timing-function:linear;background:#ddd;background:linear-gradient(to right, var(--neutral-two) 8%, var(--neutral-one) 18%, var(--neutral-two) 33%);background-size:1200px 100%}@keyframes svelte-npd125-shimmer{0%{background-position:-1200px 0}100%{background-position:1200px 0}}a.svelte-npd125.svelte-npd125{text-decoration:none;color:var(--white);height:100%;border-radius:8px}img.svelte-npd125.svelte-npd125{height:16px;width:auto}h2.svelte-npd125.svelte-npd125{display:inline-block;margin-bottom:1rem}#star.svelte-npd125.svelte-npd125{transform:translateY(-1px)}#fork.svelte-npd125.svelte-npd125{height:17px}#pfp.svelte-npd125.svelte-npd125{border-radius:50%;height:16px}#top-part.svelte-npd125.svelte-npd125{display:flex;justify-content:space-between}#open.svelte-npd125.svelte-npd125{height:20px;transition:filter 0.3s var(--bezier-one)}span.svelte-npd125.svelte-npd125{color:var(--yellow)}.grid.svelte-npd125.svelte-npd125{gap:0.8rem;flex-direction:column;justify-content:center;align-items:center;display:grid;grid-template-columns:1fr 1fr;margin-bottom:3rem;position:relative}.grid.svelte-npd125.svelte-npd125:before{height:300px;font-size:175px;content:"⤬";font-weight:700;z-index:-1;user-select:none;transform:translateX(760%) translateY(-35%);-webkit-text-stroke:2px var(--white);color:transparent;opacity:0.25;letter-spacing:-0.075em;position:absolute}@media(max-width: 600px){.grid.svelte-npd125.svelte-npd125{grid-template-columns:1fr}}@media(max-width: 868px){.grid.svelte-npd125.svelte-npd125{margin-bottom:2rem}}.dot.svelte-npd125.svelte-npd125{height:11px;width:11px;border-radius:50%;display:inline-block}.info.svelte-npd125.svelte-npd125{display:flex;gap:0.2rem;align-items:center}.info-container.svelte-npd125.svelte-npd125{display:flex;gap:0.9rem}',
  map: null
};
const Repos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="wrapper" id="work"><div class="title svelte-npd125" data-svelte-h="svelte-18ekhxy"><h2 class="svelte-npd125"><span class="svelte-npd125">code</span>:work</h2></div> <div class="grid svelte-npd125">${`<div class="repo-card shimmer svelte-npd125"></div> <div class="repo-card shimmer svelte-npd125"></div> <div class="repo-card shimmer svelte-npd125"></div> <div class="repo-card shimmer svelte-npd125"></div> <div class="repo-card shimmer svelte-npd125"></div> <div class="repo-card shimmer svelte-npd125"></div>`}</div> <div style="display: flex; justify-content: center; align-items: center;"> ${validate_component(ButtonProjects, "ButtonProjects").$$render($$result, { side: true }, {}, {
    default: () => {
      return `View more projects ↗`;
    }
  })}</div> </section>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "hr.svelte-1qff901{background-color:var(--neutral-one);height:1px;border:0;width:100%;margin-bottom:2rem}@media screen and (max-width: 768px){hr.svelte-1qff901{margin-bottom:1.5rem}}footer.svelte-1qff901{padding-bottom:2.4rem;display:flex;justify-content:space-between;align-items:center}@media screen and (max-width: 768px){footer.svelte-1qff901{flex-direction:column}}h6.svelte-1qff901{text-align:center;line-height:2.5rem;margin-top:0}span.svelte-1qff901{font-family:var(--font-two);background-color:var(--neutral-one);border-radius:7px;padding:0.15rem 0.5rem 0.15rem;width:fit-content;margin-left:1rem;margin-right:0.4rem}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<hr class="svelte-1qff901"> <footer class="wrapper svelte-1qff901">${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})} <h6 class="svelte-1qff901">Made with pain. &lt;3
		${validate_component(Tooltip, "Tooltip").$$render($$result, { tip: "you're here" }, {}, {
    default: () => {
      return `<span class="svelte-1qff901" data-svelte-h="svelte-jcohqa">V2</span>`;
    }
  })}</h6> </footer>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(NavHost, "NavHost").$$render($$result, {}, {}, {})} <main>${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Repos, "Repos").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
