"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[510],{5954:function(e,t,n){var l=n(6540),a=n(4794);t.A=e=>{var t;let{data:n,location:r,language:c}=e;const o=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",[i,m]=l.useState(!1),s=l.useCallback((()=>{m((e=>!e))}),[]);return l.useEffect((()=>{window.setTimeout((()=>{m(!0)}),5e3)}),[]),l.createElement("main",{id:"homepage",className:i?"text-shown":""},l.createElement("img",{id:"home-logo",src:"/img/logo.svg",width:430,height:320,onPointerUp:s,onTouchStart:s,alt:o}),l.createElement("section",{id:"home-text"},"en"===c?l.createElement("p",null,l.createElement("b",null,"ALMOTÁSIM")," is a studio focused on software, art and digital communication."):l.createElement("p",null,l.createElement("b",null,"ALMOTÁSIM")," es un estudio dedicado al software, el arte y la comunicación digital."),"en"===c?l.createElement("ul",null,l.createElement("li",null,l.createElement(a.Link,{to:`/${c}/projects/`},"Projects")),l.createElement("li",null,l.createElement(a.Link,{to:`/${c}/sketches/`},"Sketches")),l.createElement("li",null,l.createElement(a.Link,{to:`/${c}/about/`},"About")),"en"===c?l.createElement("li",null,l.createElement(a.Link,{to:"es/"},"Español")):l.createElement("li",null,l.createElement(a.Link,{to:"/"},"English"))):l.createElement("ul",null,l.createElement("li",null,l.createElement(a.Link,{to:`/${c}/projects/`},"Proyectos")),l.createElement("li",null,l.createElement(a.Link,{to:`/${c}/sketches/`},"Bosquejos")),l.createElement("li",null,l.createElement(a.Link,{to:`/${c}/about/`},"Info")),"en"===c?l.createElement("li",null,l.createElement(a.Link,{to:"es/"},"Español")):l.createElement("li",null,l.createElement(a.Link,{to:"/"},"English")))))}},4239:function(e,t,n){n.d(t,{A:function(){return o}});var l=n(6540),a=n(4794);function r(e,t){const n="en"===t?"es":"en";return e.replace(`/${t}/`,`/${n}/`)}var c=e=>{let{language:t,location:n}=e;const[c,o]=l.useState(!1);return l.createElement("header",{id:"page-hader"},l.createElement("div",{className:"container"},l.createElement(a.Link,{to:"en"===t?"/":`/${t}/`},l.createElement("img",{id:"header-logo",src:"/img/logo-header.svg",width:373,height:38,alt:"Almotásim"})),l.createElement("button",{id:"burger-menu",onClick:()=>o((e=>!e))},l.createElement("img",{id:"burger-button",src:"/img/burger-menu-white.svg"})),l.createElement("nav",{id:"site-navigation",className:c?"menu-open":void 0},l.createElement("div",{className:"container"},"en"===t?l.createElement("ul",null,l.createElement("li",null,l.createElement(a.Link,{to:`/${t}/projects/`},"Projects")),l.createElement("li",null,l.createElement(a.Link,{to:`/${t}/sketches/`},"Sketches")),l.createElement("li",null,l.createElement(a.Link,{to:`/${t}/about/`},"About")),l.createElement("li",null,l.createElement(a.Link,{to:r(n.pathname,t)},"Español"))):l.createElement("ul",null,l.createElement("li",null,l.createElement(a.Link,{to:`/${t}/projects/`},"Proyectos")),l.createElement("li",null,l.createElement(a.Link,{to:`/${t}/sketches/`},"Bosquejos")),l.createElement("li",null,l.createElement(a.Link,{to:`/${t}/about/`},"Info")),l.createElement("li",null,l.createElement(a.Link,{to:r(n.pathname,t)},"English")))))))};var o=e=>{let{location:t,title:n,children:a,language:r}=e;const o="/"===t.pathname;return l.createElement("div",{className:"global-wrapper","data-is-root-path":o},!o&&l.createElement(c,{location:t,language:r}),l.createElement("main",{className:"container"},a))}},7528:function(e,t,n){var l=n(6540),a=n(4794);t.A=e=>{var t,n,r;let{description:c,title:o,children:i}=e;const{site:m}=(0,a.useStaticQuery)("2841359383"),s=c||m.siteMetadata.description,u=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return l.createElement(l.Fragment,null,l.createElement("meta",{name:"robots",content:"none"}),l.createElement("title",null,u?`${o} | ${u}`:o),l.createElement("meta",{name:"description",content:s}),l.createElement("meta",{property:"og:title",content:o}),l.createElement("meta",{property:"og:description",content:s}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n||null===(r=n.social)||void 0===r?void 0:r.twitter)||""}),l.createElement("meta",{name:"twitter:title",content:o}),l.createElement("meta",{name:"twitter:description",content:s}),l.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),l.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),l.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",rel:"stylesheet"}),i)}},3672:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c}});var l=n(6540),a=(n(4794),n(4239),n(7528)),r=n(5954);t.default=e=>{let{data:t,location:n}=e;return l.createElement(r.A,{data:t,location:n,language:"es"})};const c=()=>l.createElement(l.Fragment,null,l.createElement(a.A,{title:"All posts"}),l.createElement("html",{lang:"en",id:"almo-homepage"}))}}]);
//# sourceMappingURL=component---src-pages-es-index-js-9079118c8b047c76ced7.js.map