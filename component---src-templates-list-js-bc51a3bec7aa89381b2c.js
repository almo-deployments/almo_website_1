"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[202],{2729:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,i=new RegExp("^"+l.source),s=new RegExp(l.source+r.source,"gu"),o=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,n,r)=>{let l=!1,i=!1,s=!1;for(let o=0;o<e.length;o++){const c=e[o];l&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,s=i,i=!0,o++):i&&s&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),s=i,i=!1,l=!0):(l=n(c)===c&&r(c)!==c,s=i,i=r(c)===c&&n(c)!==c)}return e})(e,l,c)),e=e.replace(i,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,l):l(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,o.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,a){a.d(t,{G:function(){return q},L:function(){return h},M:function(){return L},P:function(){return k},_:function(){return s},a:function(){return i},b:function(){return m},c:function(){return c},g:function(){return d},h:function(){return o}});var n=a(6540),r=(a(2729),a(5556)),l=a.n(r);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t.indexOf(a=l[n])>=0||(r[a]=e[a]);return r}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function m(e,t,a,n,r){return void 0===r&&(r={}),i({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},r,{opacity:t?1:0})})}function d(e,t,a,n,r,l,s,o){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const g=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=s(e,g);return n.createElement(n.Fragment,null,n.createElement(p,i({},a)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],E=function(e){let{src:t,srcSet:a,loading:r,alt:l="",shouldLoad:o}=e,c=s(e,y);return n.createElement("img",i({},c,{decoding:"async",loading:r,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,l=s(e,f);const o=l.sizes||(null==t?void 0:t.sizes),c=n.createElement(E,i({},l,t,{sizes:o,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return n.createElement("source",{key:`${t}-${l}-${a}`,type:l,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:o})})),c):c};var v;E.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},b.displayName="Picture",b.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const w=["fallback"],k=function(e){let{fallback:t}=e,a=s(e,w);return t?n.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},a))};k.displayName="Placeholder",k.propTypes={fallback:r.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const L=function(e){return n.createElement(n.Fragment,null,n.createElement(b,i({},e)),n.createElement("noscript",null,n.createElement(b,i({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=b.propTypes;const x=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],C=e=>e.replace(/\n/g,""),T=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),i=3;i<n;i++)r[i-3]=arguments[i];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(r)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},$={image:l().object.isRequired,alt:T},I=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],j=new Set;let A,P;const _=function(e){let{as:t="div",image:r,style:l,backgroundColor:c,className:m,class:d,onStartLoad:g,onLoad:p,onError:h}=e,y=s(e,I);const{width:f,height:E,layout:b}=r,v=u(f,E,b),{style:w,className:k}=v,L=s(v,N),x=(0,n.useRef)(),S=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);d&&(m=d);const C=function(e,t,a){let n="";return"fullWidth"===e&&(n=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(n=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),n}(b,f,E);return(0,n.useEffect)((()=>{A||(A=a.e(108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return P=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(S);if(P&&j.has(S))return;let t,n;return A.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;x.current&&(x.current.innerHTML=a(i({isLoading:!0,isLoaded:j.has(S),image:r},y)),j.has(S)||(t=requestAnimationFrame((()=>{x.current&&(n=s(x.current,S,j,l,g,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{j.has(S)&&P&&(x.current.innerHTML=P(i({isLoading:j.has(S),isLoaded:j.has(S),image:r},y)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[r]),(0,n.createElement)(t,i({},L,{style:i({},w,l,{backgroundColor:c}),className:`${k}${m?` ${m}`:""}`,ref:x,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},q=(0,n.memo)((function(e){return e.image?(0,n.createElement)(_,e):null}));q.propTypes=$,q.displayName="GatsbyImage";const F=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function O(e){return function(t){let{src:a,__imageData:r,__error:l}=t,o=s(t,F);return l&&console.warn(l),r?n.createElement(e,i({image:r},o)):(console.warn("Image not loaded",a),null)}}const R=O((function(e){let{as:t="div",className:a,class:r,style:l,image:o,loading:c="lazy",imgClassName:g,imgStyle:p,backgroundColor:y,objectFit:f,objectPosition:E}=e,b=s(e,x);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),p=i({objectFit:f,objectPosition:E,backgroundColor:y},p);const{width:v,height:w,layout:T,images:$,placeholder:I,backgroundColor:N}=o,j=u(v,w,T),{style:A,className:P}=j,_=s(j,S),q={fallback:void 0,sources:[]};return $.fallback&&(q.fallback=i({},$.fallback,{srcSet:$.fallback.srcSet?C($.fallback.srcSet):void 0})),$.sources&&(q.sources=$.sources.map((e=>i({},e,{srcSet:C(e.srcSet)})))),n.createElement(t,i({},_,{style:i({},A,l,{backgroundColor:y}),className:`${P}${a?` ${a}`:""}`}),n.createElement(h,{layout:T,width:v,height:w},n.createElement(k,i({},d(I,!1,T,v,w,N,f,E))),n.createElement(L,i({"data-gatsby-image-ssr":"",className:g},b,m("eager"===c,!1,q,c,p)))))})),M=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(n)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},z=new Set(["fixed","fullWidth","constrained"]),W={src:l().string.isRequired,alt:T,width:M,height:M,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};R.displayName="StaticImage",R.propTypes=W;const D=O(q);D.displayName="StaticImage",D.propTypes=W},5585:function(e,t,a){a.d(t,{A:function(){return s}});var n=a(6540),r=a(4794);function l(e,t){const a="en"===t?"es":"en";return e.replace(`/${t}/`,`/${a}/`)}var i=e=>{let{language:t,location:a}=e;const[i,s]=n.useState(!1);return n.createElement("header",{id:"page-hader"},n.createElement("div",{className:"container"},n.createElement(r.Link,{to:"en"===t?"/":`/${t}/`},n.createElement("img",{id:"header-logo",src:"/img/logo-horizontal-inverse-filled.svg",width:373,height:38,alt:"Almotásim"})),n.createElement("button",{id:"burger-menu",onClick:()=>s((e=>!e))},n.createElement("img",{id:"burger-button",src:"/img/burger-menu-white.svg"})),n.createElement("nav",{id:"site-navigation",className:i?"menu-open":void 0},n.createElement("div",{className:"container"},"en"===t?n.createElement("ul",null,n.createElement("li",null,n.createElement(r.Link,{to:`/${t}/projects/`},"Projects")),n.createElement("li",null,n.createElement(r.Link,{to:`/${t}/sketches/`},"Sketches")),n.createElement("li",null,n.createElement(r.Link,{to:`/${t}/texts/`},"Texts")),n.createElement("li",null,n.createElement(r.Link,{to:`/${t}/about/`},"About")),n.createElement("li",null,n.createElement(r.Link,{to:l(a.pathname,t)},"Español"))):n.createElement("ul",null,n.createElement("li",null,n.createElement(r.Link,{to:`/${t}/projects/`},"Proyectos")),n.createElement("li",null,n.createElement(r.Link,{to:`/${t}/sketches/`},"Bosquejos")),n.createElement("li",null,n.createElement(r.Link,{to:`/${t}/texts/`},"Textos")),n.createElement("li",null,n.createElement(r.Link,{to:`/${t}/about/`},"Info")),n.createElement("li",null,n.createElement(r.Link,{to:l(a.pathname,t)},"English")))))))};var s=e=>{let{location:t,title:a,children:r,language:l}=e;const s="/"===t.pathname;return n.createElement("div",{className:"global-wrapper","data-is-root-path":s},!s&&n.createElement(i,{location:t,language:l}),n.createElement("main",{className:"container"},r))}},7528:function(e,t,a){var n=a(6540),r=a(4794);t.A=e=>{var t,a,l;let{description:i,title:s,children:o}=e;const{site:c}=(0,r.useStaticQuery)("2841359383"),u=i||c.siteMetadata.description,m=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("meta",{name:"robots",content:"none"}),n.createElement("title",null,m?`${s} | ${m}`:s),n.createElement("meta",{name:"description",content:u}),n.createElement("meta",{property:"og:title",content:s}),n.createElement("meta",{property:"og:description",content:u}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=c.siteMetadata)||void 0===a||null===(l=a.social)||void 0===l?void 0:l.twitter)||""}),n.createElement("meta",{name:"twitter:title",content:s}),n.createElement("meta",{name:"twitter:description",content:u}),n.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),n.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),n.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Alegreya+SC:ital,wght@0,400;0,500;0,700;0,800;0,900;1,400;1,500;1,700;1,800;1,900&family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap",rel:"stylesheet"}),o)}},2076:function(e,t,a){var n=a(6540);t.A=e=>{let{tags:t,barBefore:a=!1}=e;if(t&&t.length>0)return n.createElement(n.Fragment,null,a&&"|",(null!=t?t:[]).map((e=>n.createElement("span",{className:"tag",key:e},"#",e.toUpperCase()))))}},2878:function(e,t,a){a.r(t),a.d(t,{Head:function(){return u}});var n=a(6540),r=a(4794),l=a(5585),i=a(7528),s=a(2076),o=a(2532);function c(e){let{contentType:t,language:a}=e;switch(a){case"en":switch(t){case"texts":return n.createElement(n.Fragment,null,n.createElement("h1",null,"Texts"),n.createElement("p",null,"Some fleeting thoughts about the practice of digital media"));case"projects":return n.createElement(n.Fragment,null,n.createElement("h1",null,"Projects"));case"sketches":return n.createElement(n.Fragment,null,n.createElement("h1",null,"Sketches"),n.createElement("p",null,"These experiments lay claim to the essential qualities of all games: symmetry, arbitrary rules, tedium."))}break;case"es":switch(t){case"texts":return n.createElement(n.Fragment,null,n.createElement("h1",null,"Textos"));case"projects":return n.createElement(n.Fragment,null,n.createElement("h1",null,"Projectos"));case"sketches":return n.createElement(n.Fragment,null,n.createElement("h1",null,"Bosquejos"),n.createElement("p",null,"Estos experimentos reivindican el juego y la levedad"))}}return null}t.default=e=>{var t;let{data:a,location:i,pageContext:{language:u,contentType:m}}=e;const d=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",g=a.allMarkdownRemark.nodes;return n.createElement(l.A,{location:i,title:d,language:u},n.createElement("header",{id:"list-header"},n.createElement(c,{contentType:m,language:u})),n.createElement("ol",{id:"posts-list",className:"grid"},g.filter((e=>e.fields.language===u&&e.fields.contentType===m)).map((e=>{var t,a;const l=e.frontmatter.title||e.fields.slug;let i=(0,o.c)(null===(t=e.frontmatter.featuredImage)||void 0===t||null===(a=t.childImageSharp)||void 0===a?void 0:a.gatsbyImageData);return n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h2",null,n.createElement(r.Link,{to:e.fields.slug,itemProp:"urlx"},n.createElement("span",{itemProp:"headline"},l))),n.createElement("div",null,n.createElement(r.Link,{to:e.fields.slug,itemProp:"urlx"},n.createElement(o.G,{image:i})))),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"})),n.createElement("div",{className:"article-byline"},n.createElement(s.A,{tags:e.frontmatter.tags}))))}))))};const u=()=>n.createElement(n.Fragment,null,n.createElement(i.A,{title:"All posts"}))}}]);
//# sourceMappingURL=component---src-templates-list-js-bc51a3bec7aa89381b2c.js.map