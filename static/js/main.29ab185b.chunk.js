(this.webpackJsonpgiffy=this.webpackJsonpgiffy||[]).push([[0],{11:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return c}));var r="MZTqNa5Op2YRSnpg7q7qWOMNtQPDqtSM",c="https://api.giphy.com/v1"},12:function(n,e,t){"use strict";t(0);var r,c,i,a,o=t(13),s=t(4),l=t(3),u=l.default.article(r||(r=Object(s.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-width: 200px;\n  min-height: 200px;\n"]))),d=l.default.h3(c||(c=Object(s.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 5px;\n  font-size: 1.5rem;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n"]))),f=l.default.img(i||(i=Object(s.a)(["\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),b=t(1),j=function(n){var e=n.gifData,t=e.id,r=e.title,c=e.url;return Object(b.jsx)(o.b,{to:"/gif/".concat(t),children:Object(b.jsxs)(u,{children:[Object(b.jsx)(d,{children:r}),Object(b.jsx)(f,{alt:r,src:c},t)]})})},h=l.default.div(a||(a=Object(s.a)(["\n  display: grid;\n  /* grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); */\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  justify-items: center;\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  gap: 2rem;\n"])));e.a=function(n){var e=n.gifs;return Object(b.jsx)(h,{children:e.map((function(n){return Object(b.jsx)(j,{gifData:n},n.id)}))})}},48:function(n,e,t){"use strict";t.r(e);var r,c,i,a,o,s,l,u,d,f,b,j,h,x,g=t(0),p=t.n(g),O=t(27),m=t.n(O),v=t(13),w=t(2),y=t(4),k=t(3),S=k.default.footer(r||(r=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100px;\n  margin-top: auto;\n  color: #fafafa;\n  background-color: #252525;\n\n  p {\n    font-size: 1.8rem;\n    font-weight: bold;\n  }\n\n  a {\n    color: #1565c0;\n    &:hover {\n      color: #fff;\n      text-decoration: underline;\n    }\n  }\n"]))),C=t(1),z=function(){return Object(C.jsx)(S,{children:Object(C.jsxs)("p",{children:["Made with \ud83d\udc99 by"," ",Object(C.jsx)("a",{href:"https://github.com/dosunounodev",target:"_blank",rel:"noreferrer",children:"dosunounodev"})]})})},I=k.default.div(c||(c=Object(y.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),F=k.default.h1(i||(i=Object(y.a)(["\n  font-size: 4.8rem;\n  font-style: italic;\n  margin-right: 10px;\n"]))),T=(k.default.span(a||(a=Object(y.a)(["\n  font-size: 1.6rem;\n  font-weight: 400;\n"]))),function(){return Object(C.jsx)(v.b,{to:"/",children:Object(C.jsx)(I,{children:Object(C.jsx)(F,{children:"Giffy"})})})}),E=k.default.header(o||(o=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 70px;\n  padding: 20px;\n  color: #fafafa;\n  background: #b92b27; /* fallback for old browsers */\n  background: -webkit-linear-gradient(\n    to bottom,\n    #1565c0,\n    #111\n  ); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to bottom,\n    #1565c0,\n    #111\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n"]))),L=function(){return Object(C.jsx)(E,{children:Object(C.jsx)(T,{})})},P=k.default.main(s||(s=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  min-height: 100vh;\n  background-color: #000;\n  color: #fff;\n"]))),R=function(n){var e=n.children;return Object(C.jsxs)(P,{children:[Object(C.jsx)(L,{}),e,Object(C.jsx)(z,{})]})},_=p.a.createContext(),q=t(6),D=t(25),M=t(10),N=t.n(M),G=t(15),A=t(11),B=function(){var n=Object(G.a)(N.a.mark((function n(){var e,t,r,c,i,a,o,s,l,u,d,f=arguments;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=f.length>0&&void 0!==f[0]?f[0]:{},t=e.keyword,r=void 0===t?"gif":t,c=e.limit,i=void 0===c?10:c,a=e.page,o=void 0===a?0:a,n.next=3,fetch("".concat(A.b,"/gifs/search?api_key=").concat(A.a,"&q=").concat(r,"&limit=").concat(i,"&offset=").concat(o*i,"&rating=g&lang=en"));case 3:return s=n.sent,n.next=6,s.json();case 6:return l=n.sent,u=l.data,d=u.map((function(n){var e=n.id,t=n.images;return{id:e,title:n.title,url:t.downsized_medium.url}})),n.abrupt("return",d);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),J=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.keyword,t=n.limit,r=void 0===t?"":t,c=Object(g.useState)([]),i=Object(q.a)(c,2),a=i[0],o=i[1],s=Object(g.useState)(!0),l=Object(q.a)(s,2),u=l[0],d=l[1],f=Object(g.useState)(0),b=Object(q.a)(f,2),j=b[0],h=b[1];return Object(g.useEffect)((function(){B({keyword:e,limit:r}).then((function(n){return o(n)})).then(d(!1))}),[e,r]),Object(g.useEffect)((function(){0!==j&&(d(!0),B({keyword:e,limit:r,page:j}).then((function(n){return o((function(e){return[].concat(Object(D.a)(e),Object(D.a)(n))}))})).then(d(!1)))}),[e,r,j]),{loading:u,gifs:a,setPage:h}},K=t(12),V=k.default.form(l||(l=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  height: 100px;\n  max-width: 600px;\n  margin-bottom: 20px;\n  @media screen and (min-width: 650px) {\n    flex-direction: row;\n    justify-content: space-around;\n    height: 60px;\n  }\n\n  input,\n  button {\n    display: block;\n    width: 100%;\n    max-width: 280px;\n    height: 40px;\n    padding: 10px;\n    border: 2px solid #1565c0;\n    border-radius: 5px;\n    text-align: center;\n    font-weight: bold;\n    color: #1565c0;\n    transition-property: color, background-color;\n    transition-duration: 0.3s;\n    will-change: color, background-color;\n  }\n\n  input {\n    color: initial;\n  }\n\n  button {\n    cursor: pointer;\n    text-transform: uppercase;\n    &:hover {\n      color: #fff;\n      background-color: #1565c0;\n    }\n  }\n"]))),W=k.default.button(u||(u=Object(y.a)(["\n  display: block;\n  width: 100%;\n  max-width: 280px;\n  margin: 0 auto;\n  height: 40px;\n  padding: 10px;\n  border: 2px solid #1565c0;\n  border-radius: 5px;\n  text-align: center;\n  font-weight: bold;\n  color: #1565c0;\n  transition-property: color, background-color;\n  transition-duration: 0.3s;\n  will-change: color, background-color;\n  cursor: pointer;\n  text-transform: uppercase;\n  &:hover {\n    color: #fff;\n    background-color: #1565c0;\n  }\n"]))),Q=function(n){var e=n.children,t=n.onClick;return Object(C.jsx)(W,{onClick:t,children:e})},Y=function(n){var e=n.keyword,t=n.setKeyword,r=Object(w.f)(),c=Object(g.useContext)(_).setLastSearch;return Object(C.jsxs)(V,{onSubmit:function(n){n.preventDefault(),r.push("/search/".concat(e)),c(e),localStorage.setItem("lastSearch",e)},children:[Object(C.jsx)("input",{type:"text",value:e,placeholder:"Search a gif here",onChange:function(n){return t(n.target.value)}}),Object(C.jsx)(Q,{type:"submit",children:"View All Results"})]})},Z=function(){var n=Object(g.useState)(""),e=Object(q.a)(n,2),t=e[0],r=e[1],c=J({keyword:t,limit:5}),i=c.gifs,a=c.loading;return Object(C.jsx)(C.Fragment,{children:a?Object(C.jsx)("p",{children:"Loading. . ."}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(Y,{keyword:t,setKeyword:r}),Object(C.jsx)(K.a,{gifs:i})]})})},H=function(){var n=Object(g.useContext)(_).lastSearch,e=J({keyword:n||"",limit:5}),t=e.gifs,r=e.loading,c=Object(w.f)();return Object(C.jsx)(C.Fragment,{children:r?Object(C.jsx)("p",{children:"Loading. . ."}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(K.a,{gifs:t}),Object(C.jsx)("br",{}),Object(C.jsxs)(Q,{onClick:function(){return c.push("/search/".concat(n))},children:["View all '",n,"' gifs"]})]})})},U=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.distance,r=Object(g.useState)(!1),c=Object(q.a)(r,2),i=c[0],a=c[1],o=Object(g.useRef)();return Object(g.useEffect)((function(){var n,r=function(n,e){n[0].isIntersecting&&(a(!0),e.unobserve(o.current))};return Promise.resolve("undefined"!==typeof IntersectionObserver?IntersectionObserver:t.e(4).then(t.t.bind(null,49,7))).then((function(){(n=new IntersectionObserver(r,{rootMargin:e||"100px"})).observe(o.current)})),function(){n&&n.disconnect()}}),[e]),{isNearScreen:i,fromRef:o}},X=p.a.lazy((function(){return t.e(3).then(t.bind(null,51))})),$=function(){var n=U(),e=n.isNearScreen,t=n.fromRef;return Object(C.jsx)("section",{ref:t,children:Object(C.jsx)(g.Suspense,{fallback:null,children:e?Object(C.jsx)(X,{}):null})})},nn=k.default.h2(d||(d=Object(y.a)(["\n  display: block;\n  width: 100%;\n  margin-bottom: 20px;\n  font-size: 3.6rem;\n  text-align: center;\n"]))),en=k.default.div(f||(f=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  /* max-width: 1200px; */\n  margin: 0 auto;\n  margin-bottom: 50px;\n  padding: 20px 0;\n  background-color: ",";\n  color: ",";\n"])),(function(n){var e=n.bgcolor;return e||"inherit"}),(function(n){return"white"===n.bgcolor?"black":"inherit"})),tn=k.default.div(b||(b=Object(y.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 900px;\n"]))),rn=Object(k.default)(v.b)(j||(j=Object(y.a)(["\n  font-size: 2rem;\n  margin: 10px;\n  padding: 5px;\n  border: 2px solid #1565c0;\n  &:hover {\n    background-color: #000;\n    color: #1565c0;\n  }\n"]))),cn=function(){var n=Object(g.useContext)(_),e=n.lastSearch,t=n.trendingTerms;return Object(C.jsxs)("section",{children:[Object(C.jsx)(en,{children:Object(C.jsx)(Z,{})}),e?Object(C.jsxs)(en,{children:[Object(C.jsxs)(nn,{children:["Last Search: '",e,"'"]}),Object(C.jsx)(H,{})]}):null,Object(C.jsxs)(en,{bgcolor:"white",children:[Object(C.jsx)(nn,{children:"Top Categories"}),Object(C.jsx)(tn,{children:t.map((function(n){return Object(C.jsx)(rn,{to:"/search/".concat(n),children:n},n)}))})]}),Object(C.jsxs)(en,{children:[Object(C.jsx)(nn,{children:"The Top 10 Gifs Trending"}),Object(C.jsx)($,{})]})]})},an=k.default.h2(h||(h=Object(y.a)(["\n  margin-bottom: 20px;\n  font-size: 3.6rem;\n  text-align: center;\n"]))),on=function(){var n=Object(w.g)().keyword,e=J({keyword:n,limit:10}),t=e.gifs,r=e.loading,c=e.setPage;return Object(C.jsx)("section",{children:r?Object(C.jsx)(an,{children:"Loading . . . "}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(an,{children:["Results of '",n,"'"]}),Object(C.jsx)(K.a,{gifs:t}),Object(C.jsx)("br",{}),Object(C.jsx)(Q,{onClick:function(){c((function(n){return n+1}))},children:" Next Page"})]})})},sn=function(){var n=Object(G.a)(N.a.mark((function n(){var e,t,r,c,i,a,o,s,l,u,d=arguments;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=d.length>0&&void 0!==d[0]?d[0]:{},t=e.gifId,n.next=3,fetch("".concat(A.b,"/gifs/").concat(t,"?api_key=").concat(A.a));case 3:return r=n.sent,n.next=6,r.json();case 6:return c=n.sent,i=c.data,a=i.id,o=i.images,s=i.title,l=o.downsized_medium.url,u=[{id:a,title:s,url:l}],n.abrupt("return",u);case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ln=k.default.h2(x||(x=Object(y.a)(["\n  margin-bottom: 20px;\n  font-size: 3.6rem;\n  text-align: center;\n"]))),un=function(){var n=function(n){var e=n.gifId,t=Object(g.useState)([]),r=Object(q.a)(t,2),c=r[0],i=r[1],a=Object(g.useState)(!0),o=Object(q.a)(a,2),s=o[0],l=o[1];return Object(g.useEffect)((function(){sn({gifId:e}).then((function(n){return i(n)})),l(!1)}),[e]),{loading:s,gifs:c}}({gifId:Object(w.g)().gifId}),e=n.gifs,t=n.loading;return Object(C.jsx)("section",{children:t?Object(C.jsx)(ln,{children:"Cargando . . . "}):Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(K.a,{gifs:e})})})},dn=function(){return Object(C.jsx)("section",{children:Object(C.jsx)("h2",{children:"404 not found"})})},fn=function(){var n=Object(G.a)(N.a.mark((function n(){var e,t,r;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(A.b,"/trending/searches?api_key=").concat(A.a));case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),bn=function(n){var e=n.children,t=localStorage.getItem("lastSearch")||null,r=Object(g.useState)(t),c=Object(q.a)(r,2),i={lastSearch:c[0],setLastSearch:c[1],trendingTerms:function(){var n=Object(g.useState)([]),e=Object(q.a)(n,2),t=e[0],r=e[1],c=Object(g.useState)(!0),i=Object(q.a)(c,2),a=i[0],o=i[1];return Object(g.useEffect)((function(){fn().then((function(n){return r(n)})),o(!1)}),[]),{loading:a,gifs:t}}().gifs};return Object(C.jsx)(_.Provider,{value:i,children:e})};var jn,hn=function(){return Object(C.jsx)(bn,{children:Object(C.jsx)(R,{children:Object(C.jsxs)(w.c,{children:[Object(C.jsx)(w.a,{exact:!0,path:"/",component:cn}),Object(C.jsx)(w.a,{exact:!0,path:"/GiffyApp",component:cn}),Object(C.jsx)(w.a,{exact:!0,path:"/search/:keyword",component:on}),Object(C.jsx)(w.a,{exact:!0,path:"/gif/:gifId",component:un}),Object(C.jsx)(w.a,{path:"*",component:dn})]})})})},xn=t(31),gn=Object(k.createGlobalStyle)(jn||(jn=Object(y.a)(["\n\n","\n\n* {\n    box-sizing: border-box;\n}\n\n*::after, *::before {\n    box-sizing: inherit;\n}\n\nhtml {\n    font-size: 62.5%\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: 'Open Sans', sans-serif;\n    font-size:1.6rem;\n    font-weight: 400;\n    color: #000;\n}\n\nsection {\n    width: 100%;\n    padding: 20px;\n}\n\nh1, h2, h3, p {\n    margin: 0;\n    padding: 0;\n}\n\na {\n    text-decoration:none;\n    color: inherit;\n}\n\n"])),xn.normalize),pn=function(n){n&&n instanceof Function&&t.e(5).then(t.bind(null,50)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),r(n),c(n),i(n),a(n)}))};m.a.render(Object(C.jsxs)(v.a,{children:[Object(C.jsx)(gn,{}),Object(C.jsx)(hn,{})]}),document.getElementById("root")),pn()}},[[48,1,2]]]);
//# sourceMappingURL=main.29ab185b.chunk.js.map