(this["webpackJsonpfree-cources"]=this["webpackJsonpfree-cources"]||[]).push([[0],{32:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},39:function(e,t,c){},43:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(15),s=c.n(r),i=(c(32),c(33),c(34),c(35),c(36),c(9)),o=c(3),l=(c(37),c(23)),d=c(13),j=c.n(d),u=c(17),b=c(10);c(39);function h(){for(var e="https://learning-community-web.herokuapp.com/",t=arguments.length,c=new Array(t),n=0;n<t;n++)c[n]=arguments[n];return c[0]=e+c[0],fetch.apply(this,c)}function O(e,t){return e.name.split(".")[0].padStart(4,"0")>t.name.split(".")[0].padStart(4,"0")?1:-1}var x=function e(t){return t.filter((function(e){return"data.json"!==e.name})).sort(O).map((function(t){return Array.isArray(t.children)&&(t.children=e(t.children)),t}))},m=(c(43),c.p+"static/media/camera-solid.f79d7868.svg"),f=c(0);function p(){return Object(f.jsxs)("div",{className:"no-image-found",children:[Object(f.jsx)("img",{src:m,alt:"no image"}),"No image found"]})}function v(e){var t=e.name,c=e.nodeId,n=(e.type,e.children),a=e.accountId,r=e.courseInfo,s=void 0===r?{}:r,i=e.loading,l=s.picture,d=s.description,j=Object(o.g)(),u=x(n),b="".concat(a,"/").concat(c).concat(function e(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(Array.isArray(t)&&t.length){var n=t[0];return c+="/".concat(n.nodeId),Array.isArray(n.children)?e(n.children,c):c}return""}(u));return Object(f.jsxs)("div",{className:"my-card"+(i?" loading":""),onClick:function(){if(!c)return null;j.push("/lesson?a=".concat(b))},children:[Object(f.jsx)("div",{className:"my-card-header",children:i?null:l?Object(f.jsx)("img",{src:"data:image/jpg;base64, ".concat(l),alt:t}):Object(f.jsx)(p,{})}),Object(f.jsxs)("div",{className:"my-card-body",children:[Object(f.jsx)("div",{className:"title",children:t}),Object(f.jsx)("div",{className:"subtitle",children:d})]})]})}var g=c(8),y="[COURSES] Load";function N(e){return{type:y,payload:e}}var w=c.p+"static/media/undraw_server_down_s4lk.43dea224.svg",C=c(53),_=Object(n.createContext)([]);function S(e){var t=e.children,c=Object(n.useState)(Object(g.c)((function(e){return e.courses}))),a=Object(b.a)(c,2),r=a[0],s=a[1];return Object(f.jsx)(_.Provider,{value:{courses:r,setCourses:s},children:t})}function A(){var e=Object(n.useContext)(_),t=e.courses,c=e.setCourses,a=Object(n.useState)(!1),r=Object(b.a)(a,2),s=r[0],i=r[1],o=Object(n.useState)(!0),d=Object(b.a)(o,2),O=d[0],x=d[1],m=Object(g.b)();return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h("courses");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a=n.response,r=a.sort((function(){return Math.round(10*Math.random())>5?-1:1})),m(N(r)),c(r),x(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),i(!0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("section",{id:"services",className:"services",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"section-title","data-aos":"fade-up",children:Object(f.jsx)("h2",{children:"What learn now"})}),Object(f.jsxs)("div",{className:"row",children:[!s&&t.map((function(e){return Object(f.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 d-flex align-items-stretch",children:Object(f.jsx)(v,Object(l.a)(Object(l.a)({},e),{},{loading:O}))},Object(C.a)())})),s?Object(f.jsx)("img",{src:w,style:{width:"22rem",margin:"0 auto"},alt:"server down"}):null]})]})})})}function k(){return Object(f.jsx)("main",{children:Object(f.jsx)(A,{})})}c(46);var L=c.p+"static/media/search-solid.a8b7c5d7.svg";function I(){var e=Object(n.useContext)(_),t=Object(g.c)((function(e){return e.courses})),c=e.setCourses;return Object(f.jsx)("div",{className:"blog search-container",children:Object(f.jsx)("div",{className:"sidebar",children:Object(f.jsx)("div",{className:"sidebar-item search-form",children:Object(f.jsxs)("form",{onSubmit:function(e){var n,a;e.preventDefault();var r=null===(n=e.target[0])||void 0===n||null===(a=n.value)||void 0===a?void 0:a.trim().toLowerCase();c(t.filter((function(e){return e.name.toLowerCase().indexOf(r)>-1})))},children:[Object(f.jsx)("input",{name:"inputText",type:"text"}),Object(f.jsx)("button",{type:"submit",children:Object(f.jsx)("img",{src:L,alt:"search",style:{width:"14px"}})})]})})})})}function E(e){var t=e.title,c=void 0===t?"LC":t,n=e.subtitle;return Object(f.jsx)("header",{id:"header",children:Object(f.jsxs)("div",{className:"container d-flex justify-content-between",children:[Object(f.jsxs)("div",{className:"logo",style:{width:n?"50%":null},children:[Object(f.jsx)("h1",{className:"text-light",children:Object(f.jsx)(i.b,{to:"/",children:Object(f.jsx)("span",{children:c})})}),n?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("hr",{}),Object(f.jsx)("span",{children:n})]}):null]}),n?null:Object(f.jsx)(I,{}),Object(f.jsx)("nav",{className:"nav-menu d-lg-block",children:Object(f.jsx)("ul",{children:Object(f.jsx)("li",{className:"",children:Object(f.jsx)(i.b,{to:"/",children:"Home"})})})})]})})}var F=c.p+"static/media/backgroud.70f8b048.jpg";c(47);function T(){return Object(f.jsx)("section",{className:"header",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("img",{src:F,alt:"Learning Community"}),Object(f.jsxs)("div",{className:"slogan d-none d-md-block",children:[Object(f.jsx)("h1",{children:"Let's go"}),Object(f.jsx)("p",{children:"Be part of a community that learns and shares its knowledge."})]})]})})}function D(){return Object(f.jsxs)(S,{children:[Object(f.jsx)(E,{title:"Learning Community"}),Object(f.jsx)(T,{}),Object(f.jsx)(k,{})]})}c(48);var B=Array(4).fill({name:"loading",nodeId:"",type:1,children:[],accountId:0,courseInfo:{description:"loading"}});c(49);function P(e){var t=e.active;return Object(f.jsx)("div",{className:"loader ".concat(t?"":"d-none"),children:"Loading..."})}c(50);var R=c.p+"static/media/play-circle-solid.658d5ba8.svg";function U(e){var t=e.expanded,c=e.id,n=e.idAccordion,a=e.title,r=e.loading,s=e.children,i=void 0===s?[]:s,l=e.pathCourse,d=e.setActive,j=Object(o.g)();return Object(f.jsxs)("div",{className:"accordion-item ".concat(r?"loading":""),children:[Object(f.jsx)("h2",{className:"accordion-header",id:"heading".concat(c),children:Object(f.jsx)("button",{className:"accordion-button ".concat(t?"":"collapsed"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse".concat(c),"aria-expanded":t,"aria-controls":"collapse".concat(c),children:a})}),Object(f.jsx)("div",{id:"collapse".concat(c),className:"accordion-collapse collapse ".concat(t?"show":""),"aria-labelledby":"heading".concat(c),"data-bs-parent":"#".concat(n),children:Object(f.jsx)("div",{className:"accordion-body",children:Object(f.jsx)("ul",{children:i.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:R,alt:"play"}),Object(f.jsx)("span",{onClick:function(){return function(e){var t="".concat(l,"/").concat(e);j.push("/lesson?a=".concat(t)),d(t)}(e.nodeId)},children:(t=e.name,t.split(".").slice(1,2))})]})},Object(C.a)());var t}))})})})]})}function X(){var e,t=new URLSearchParams(Object(o.h)().search),c=Object(n.useState)(t.get("a")),a=Object(b.a)(c,2),r=a[0],s=a[1],i=null===r||void 0===r?void 0:r.split("/")[1],l=Object(n.useState)(""),d=Object(b.a)(l,2),O=d[0],m=d[1],p=Object(g.c)((e=i,function(t){var c;return null===t||void 0===t||null===(c=t.courses)||void 0===c?void 0:c.find((function(t){return t.nodeId===e}))})),v=Object(n.useState)(!0),y=Object(b.a)(v,2),N=y[0],w=y[1],_=Array(3).fill({name:"loading",children:Array(3).fill({name:"loading"})});if(Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h("courses/embed?path=".concat(r));case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n=c.response,c.error?s(null):m(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),s(null);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}r&&(w(!0),window.scrollTo(0,0),function(){e.apply(this,arguments)}())}),[r]),!r)return Object(f.jsx)(o.a,{to:"/"});var S=function(e){return r.slice().split("/").slice(0,-2).concat(e).join("/")};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(E,{subtitle:p?p.name:null}),Object(f.jsx)("section",{children:Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col-lg-8 video-content",children:[O?Object(f.jsx)("iframe",{allowFullScreen:!0,frameBorder:"0",style:{width:"100%",height:"100%",opacity:N?0:1},src:O,title:i,onLoad:function(){return w(!1)}}):null,Object(f.jsx)("div",{className:"spinner-container",children:Object(f.jsx)(P,{active:N})})]})})}),Object(f.jsx)("section",{children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-lg-8 m-auto",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"accordion",id:"accordionCourse",children:p&&Array.isArray(p.children)?x(p.children).map((function(e,t){return Object(f.jsx)(U,{id:Object(C.a)(),expanded:0===t,idAccordion:"accordionCourse",title:e.name,children:e.children,pathCourse:S(e.nodeId),setActive:s},Object(C.a)())})):_.map((function(e,t){return Object(f.jsx)(U,{id:Object(C.a)(),expanded:0===t,idAccordion:"accordionCourse",title:e.name,loading:!0},Object(C.a)())}))})})})})})]})}c(51);var M=c.p+"static/media/219px-Definition_of_Free_Cultural_Works_logo_notext.svg.0a9f9783.png";function J(){return Object(f.jsx)("footer",{id:"footer",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"copyright",children:[Object(f.jsx)("img",{src:M}),Object(f.jsxs)("div",{className:"slogan",children:[Object(f.jsx)("strong",{children:Object(f.jsx)("span",{children:"Learning Community"})}),"Free Content, Open Knowledge"]})]})})})}function V(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(i.a,{basename:"learning-community",children:Object(f.jsxs)(o.d,{children:[Object(f.jsx)(o.b,{exact:!0,path:"/",component:D}),Object(f.jsx)(o.b,{exact:!0,path:"/lesson",component:X}),Object(f.jsx)(o.b,{children:Object(f.jsx)(o.a,{to:"/"})})]})}),Object(f.jsx)(J,{})]})}var W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))},H=c(11),K=c(27),q=Object(H.c)({courses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return t.payload;default:return e}}}),z=Object(H.e)(q,Object(H.d)(Object(H.a)(K.a),"object"===typeof window&&"undefined"!==typeof window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));s.a.render(Object(f.jsx)(g.a,{store:z,children:Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(V,{})})}),document.getElementById("root")),W()}},[[52,1,2]]]);
//# sourceMappingURL=main.425c5540.chunk.js.map