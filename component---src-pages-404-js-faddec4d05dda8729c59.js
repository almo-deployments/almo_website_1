"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[125],{4239:function(e,t,n){n.d(t,{A:function(){return c}});var a=n(6540),l=n(4794);function r(e,t){const n="en"===t?"es":"en";return e.replace(`/${t}/`,`/${n}/`)}var o=e=>{let{language:t,location:n}=e;const[o,c]=a.useState(!1);return a.createElement("header",{id:"page-hader"},a.createElement("div",{className:"container"},a.createElement(l.Link,{to:"en"===t?"/":`/${t}/`},a.createElement("img",{id:"header-logo",src:"/img/logo-header.svg",width:373,height:38,alt:"Almotásim"})),a.createElement("button",{id:"burger-menu",onClick:()=>c((e=>!e))},a.createElement("img",{id:"burger-button",src:"/img/burger-menu-white.svg"})),a.createElement("nav",{id:"site-navigation",className:o?"menu-open":void 0},a.createElement("div",{className:"container"},"en"===t?a.createElement("ul",null,a.createElement("li",null,a.createElement(l.Link,{to:`/${t}/projects/`},"Projects")),a.createElement("li",null,a.createElement(l.Link,{to:`/${t}/sketches/`},"Sketches")),a.createElement("li",null,a.createElement(l.Link,{to:`/${t}/about/`},"About")),a.createElement("li",null,a.createElement(l.Link,{to:r(n.pathname,t)},"Español"))):a.createElement("ul",null,a.createElement("li",null,a.createElement(l.Link,{to:`/${t}/projects/`},"Proyectos")),a.createElement("li",null,a.createElement(l.Link,{to:`/${t}/sketches/`},"Bosquejos")),a.createElement("li",null,a.createElement(l.Link,{to:`/${t}/about/`},"Info")),a.createElement("li",null,a.createElement(l.Link,{to:r(n.pathname,t)},"English")))))))};var c=e=>{let{location:t,title:n,children:l,language:r}=e;const c="/"===t.pathname;return a.createElement("div",{className:"global-wrapper","data-is-root-path":c},!c&&a.createElement(o,{location:t,language:r}),a.createElement("main",{className:"container"},l))}},7528:function(e,t,n){var a=n(6540),l=n(4794);t.A=e=>{var t,n,r;let{description:o,title:c,children:i}=e;const{site:m}=(0,l.useStaticQuery)("2841359383"),s=o||m.siteMetadata.description,u=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("meta",{name:"robots",content:"none"}),a.createElement("title",null,u?`${c} | ${u}`:c),a.createElement("meta",{name:"description",content:s}),a.createElement("meta",{property:"og:title",content:c}),a.createElement("meta",{property:"og:description",content:s}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n||null===(r=n.social)||void 0===r?void 0:r.twitter)||""}),a.createElement("meta",{name:"twitter:title",content:c}),a.createElement("meta",{name:"twitter:description",content:s}),a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",rel:"stylesheet"}),i)}},3331:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c}});var a=n(6540),l=n(4794),r=n(4239),o=n(7528);const c=()=>a.createElement(o.A,{title:"404: Not Found"});t.default=e=>{let{data:t,location:n}=e;const o=t.site.siteMetadata.title;return a.createElement(r.A,{location:n,title:o,language:"en"},a.createElement("h1",null,"404: Not Found"),a.createElement("p",null,"“I lost them in the desert, amid the sandstorms and the vast night.”"),a.createElement("hr",null),a.createElement("footer",{className:"not-found-footer"},a.createElement(l.Link,{to:"/"},a.createElement("img",{src:"/img/logo-inverse.svg",width:"100"}))))}}}]);
//# sourceMappingURL=component---src-pages-404-js-faddec4d05dda8729c59.js.map