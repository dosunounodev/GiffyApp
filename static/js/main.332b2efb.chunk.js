(this.webpackJsonpgiffy=this.webpackJsonpgiffy||[]).push([[0],{43:function(n,t,e){"use strict";e.r(t);var r,i,c,a,o,s,l,d,u,f,j,b,h,g,p,x,O,m,v=e(0),y=e.n(v),w=e(22),k=e.n(w),S=e(11),q=e(2),z=e(4),C=e(3),M=C.default.footer(r||(r=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100px;\n  margin-top: auto;\n  color: #fafafa;\n  background-color: #252525;\n\n  p {\n    font-size: 1.8rem;\n    font-weight: bold;\n  }\n\n  a {\n    color: #1565c0;\n    &:hover {\n      color: #fff;\n      text-decoration: underline;\n    }\n  }\n"]))),I=e(1),T=function(){return Object(I.jsx)(M,{children:Object(I.jsxs)("p",{children:["Made with \ud83d\udc99 by"," ",Object(I.jsx)("a",{href:"https://github.com/dosunounodev",target:"_blank",rel:"noreferrer",children:"dosunounodev"})]})})},D=C.default.div(i||(i=Object(z.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),F=C.default.h1(c||(c=Object(z.a)(["\n  font-size: 4.8rem;\n  font-style: italic;\n  margin-right: 10px;\n"]))),E=(C.default.span(a||(a=Object(z.a)(["\n  font-size: 1.6rem;\n  font-weight: 400;\n"]))),function(){return Object(I.jsx)(S.b,{to:"/",children:Object(I.jsx)(D,{children:Object(I.jsx)(F,{children:"Giffy"})})})}),N=C.default.header(o||(o=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 70px;\n  padding: 20px;\n  color: #fafafa;\n  background: #b92b27; /* fallback for old browsers */\n  background: -webkit-linear-gradient(\n    to bottom,\n    #1565c0,\n    #111\n  ); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to bottom,\n    #1565c0,\n    #111\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n"]))),_=function(){return Object(I.jsx)(N,{children:Object(I.jsx)(E,{})})},P=C.default.main(s||(s=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  min-height: 100vh;\n  background-color: #111;\n  color: #fff;\n"]))),G=function(n){var t=n.children;return Object(I.jsxs)(P,{children:[Object(I.jsx)(_,{}),t,Object(I.jsx)(T,{})]})},R=e(6),L=C.default.article(l||(l=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 400px;\n  padding: 20px;\n  background-color: rgba(255, 255, 255, 0.1);\n  border: 2px solid #fafafa;\n  border-radius: 6px;\n"]))),W=C.default.h3(d||(d=Object(z.a)(["\n  width: 100%;\n  height: 50px;\n  max-width: 280px;\n  font-size: 1.4rem;\n  text-align: center;\n"]))),Q=C.default.div(u||(u=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  margin-top: 20px;\n  border-radius: 6px;\n  overflow: hidden;\n"]))),Y=C.default.img(f||(f=Object(z.a)(["\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),Z=function(n){var t=n.gifData,e=t.id,r=t.title,i=t.url;return Object(I.jsx)(S.b,{to:"/gif/".concat(e),children:Object(I.jsxs)(L,{children:[Object(I.jsx)(W,{children:r}),Object(I.jsx)(Q,{children:Object(I.jsx)(Y,{alt:r,src:i},e)})]})})},A=C.default.div(j||(j=Object(z.a)(["\n  display: grid;\n  /* grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); */\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  justify-items: center;\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  gap: 2rem;\n"]))),B=function(n){var t=n.gifs;return Object(I.jsx)(A,{children:t.map((function(n){return Object(I.jsx)(Z,{gifData:n},n.id)}))})},J=e(9),K=e.n(J),V=e(12),H="MZTqNa5Op2YRSnpg7q7qWOMNtQPDqtSM",U=function(){var n=Object(V.a)(K.a.mark((function n(){var t,e,r,i,c,a,o,s,l,d=arguments;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:{},e=t.keyword,r=void 0===e?"panda":e,i=t.limit,c=void 0===i?10:i,n.next=3,fetch("https://api.giphy.com/v1/gifs/search?api_key=".concat(H,"&q=").concat(r,"&limit=").concat(c,"&offset=0&rating=g&lang=en"));case 3:return a=n.sent,n.next=6,a.json();case 6:return o=n.sent,s=o.data,l=s.map((function(n){var t=n.id,e=n.images;return{id:t,title:n.title,url:e.downsized_medium.url}})),n.abrupt("return",l);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),X=function(n){var t=n.keyword,e=n.limit,r=void 0===e?10:e,i=Object(v.useState)([]),c=Object(R.a)(i,2),a=c[0],o=c[1],s=Object(v.useState)(!0),l=Object(R.a)(s,2),d=l[0],u=l[1];return Object(v.useEffect)((function(){U({keyword:t,limit:r}).then((function(n){return o(n)})).then(u(!1))}),[t,r]),{loading:d,gifs:a}},$="MZTqNa5Op2YRSnpg7q7qWOMNtQPDqtSM",nn=function(){var n=Object(V.a)(K.a.mark((function n(){var t,e,r,i,c,a,o,s=arguments;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:{},e=t.limit,r=void 0===e?10:e,n.next=3,fetch("https://api.giphy.com/v1/gifs/trending?api_key=".concat($,"&limit=").concat(r,"&rating=g"));case 3:return i=n.sent,n.next=6,i.json();case 6:return c=n.sent,a=c.data,o=a.map((function(n){var t=n.id,e=n.images;return{id:t,title:n.title,url:e.downsized_medium.url}})),n.abrupt("return",o);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),tn=function(){var n=Object(V.a)(K.a.mark((function n(){var t,e,r;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.giphy.com/v1/trending/searches?api_key=".concat("MZTqNa5Op2YRSnpg7q7qWOMNtQPDqtSM"));case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,console.log(e),r=e.data,n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),en=C.default.h2(b||(b=Object(z.a)(["\n  display: block;\n  width: 100%;\n  margin-bottom: 20px;\n  font-size: 3.6rem;\n  text-align: center;\n"]))),rn=C.default.div(h||(h=Object(z.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  margin-top: 50px;\n"]))),cn=Object(C.default)(S.b)(g||(g=Object(z.a)(["\n  font-size: 2rem;\n  margin: 10px 20px;\n  padding: 5px;\n  border: 2px solid #1565c0;\n"]))),an=y.a.createContext(),on=C.default.form(p||(p=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin-bottom: 30px;\n\n  input,\n  button {\n    display: block;\n    width: 100%;\n    max-width: 280px;\n    padding: 10px;\n    border: 2px solid #1565c0;\n    border-radius: 5px;\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: bold;\n    color: #1565c0;\n    transition-property: color, background-color;\n    transition-duration: 0.3s;\n    will-change: color, background-color;\n  }\n\n  input {\n    margin-bottom: 10px;\n    color: initial;\n  }\n\n  button {\n    cursor: pointer;\n    &:hover {\n      color: #fff;\n      background-color: #1565c0;\n    }\n  }\n"]))),sn=function(n){var t=n.keyword,e=n.setKeyword,r=Object(q.f)(),i=Object(v.useContext)(an).setLastSearch;return Object(I.jsxs)(on,{onSubmit:function(n){n.preventDefault(),r.push("/search/".concat(t)),i(t),localStorage.setItem("lastSearch",t)},children:[Object(I.jsx)("input",{type:"text",value:t,placeholder:"Search a gif here",onChange:function(n){return e(n.target.value)}}),Object(I.jsx)("button",{children:"View All Results"})]})},ln=function(){var n=Object(v.useState)(""),t=Object(R.a)(n,2),e=t[0],r=t[1],i=X({keyword:e,limit:5}),c=i.gifs,a=i.loading,o=function(n){var t=n.limit,e=Object(v.useState)([]),r=Object(R.a)(e,2),i=r[0],c=r[1],a=Object(v.useState)(!0),o=Object(R.a)(a,2),s=o[0],l=o[1];return Object(v.useEffect)((function(){nn({limit:t}).then((function(n){return c(n)})),l(!1)}),[t]),{loading:s,gifs:i}}({limit:10}).gifs,s=function(){var n=Object(v.useState)([]),t=Object(R.a)(n,2),e=t[0],r=t[1],i=Object(v.useState)(!0),c=Object(R.a)(i,2),a=c[0],o=c[1];return Object(v.useEffect)((function(){tn().then((function(n){return r(n)})),o(!1)}),[]),{loading:a,gifs:e}}().gifs,l=Object(v.useContext)(an).lastSearch,d=X({keyword:l||"",limit:5}).gifs;return Object(I.jsx)("section",{children:a?Object(I.jsx)(en,{children:"Cargando . . . "}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(en,{children:"Search a Gif"}),Object(I.jsx)(sn,{keyword:e,setKeyword:r}),Object(I.jsx)(B,{gifs:c}),l?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(en,{children:["Last Search: '",l,"'"]}),Object(I.jsx)(B,{gifs:d})]}):null,Object(I.jsxs)(rn,{children:[Object(I.jsx)(en,{children:"Top Categories"}),s.map((function(n){return Object(I.jsx)(cn,{to:"/search/".concat(n),children:n},n)}))]}),Object(I.jsxs)(rn,{children:[Object(I.jsx)(en,{children:"The Top 10 Gifs Trending"}),Object(I.jsx)(B,{gifs:o})]})]})})},dn=C.default.h2(x||(x=Object(z.a)(["\n  margin-bottom: 20px;\n  font-size: 3.6rem;\n  text-align: center;\n"]))),un=function(){return Object(I.jsx)("section",{children:Object(I.jsx)(dn,{children:"Estos son los favs"})})},fn=C.default.h2(O||(O=Object(z.a)(["\n  margin-bottom: 20px;\n  font-size: 3.6rem;\n  text-align: center;\n"]))),jn=function(){var n=Object(q.g)().keyword,t=X({keyword:n,limit:25}),e=t.gifs,r=t.loading;return Object(I.jsx)("section",{children:r?Object(I.jsx)(fn,{children:"Cargando . . . "}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(fn,{children:["Resultados de '",n,"'"]}),Object(I.jsx)(B,{gifs:e})]})})},bn=C.default.h2(m||(m=Object(z.a)(["\n  margin-bottom: 20px;\n  font-size: 3.6rem;\n  text-align: center;\n"]))),hn="MZTqNa5Op2YRSnpg7q7qWOMNtQPDqtSM",gn=function(){var n=Object(V.a)(K.a.mark((function n(){var t,e,r,i,c,a,o,s,l,d,u=arguments;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},e=t.gifId,n.next=3,fetch("https://api.giphy.com/v1/gifs/".concat(e,"?api_key=").concat(hn));case 3:return r=n.sent,n.next=6,r.json();case 6:return i=n.sent,c=i.data,a=c.id,o=c.images,s=c.title,l=o.downsized_medium.url,d=[{id:a,title:s,url:l}],console.log(d),n.abrupt("return",d);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),pn=function(){var n=function(n){var t=n.gifId,e=Object(v.useState)([]),r=Object(R.a)(e,2),i=r[0],c=r[1],a=Object(v.useState)(!0),o=Object(R.a)(a,2),s=o[0],l=o[1];return Object(v.useEffect)((function(){gn({gifId:t}).then((function(n){return c(n)})),l(!1)}),[t]),{loading:s,gifs:i}}({gifId:Object(q.g)().gifId}),t=n.gifs,e=n.loading;return Object(I.jsx)("section",{children:e?Object(I.jsx)(bn,{children:"Cargando . . . "}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(bn,{children:"Gif Detail"}),Object(I.jsx)(B,{gifs:t})]})})},xn=function(){return Object(I.jsx)("section",{children:Object(I.jsx)("h2",{children:"404 not found"})})},On=function(n){var t=n.children,e=localStorage.getItem("lastSearch")||null,r=Object(v.useState)(e),i=Object(R.a)(r,2),c={lastSearch:i[0],setLastSearch:i[1]};return Object(I.jsx)(an.Provider,{value:c,children:t})};var mn,vn=function(){return Object(I.jsx)(On,{children:Object(I.jsx)(G,{children:Object(I.jsxs)(q.c,{children:[Object(I.jsx)(q.a,{exact:!0,path:"/",component:ln}),Object(I.jsx)(q.a,{exact:!0,path:"/GiffyApp",component:ln}),Object(I.jsx)(q.a,{exact:!0,path:"/favs",component:un}),Object(I.jsx)(q.a,{exact:!0,path:"/search/:keyword",component:jn}),Object(I.jsx)(q.a,{exact:!0,path:"/gif/:gifId",component:pn}),Object(I.jsx)(q.a,{path:"*",component:xn})]})})})},yn=e(26),wn=Object(C.createGlobalStyle)(mn||(mn=Object(z.a)(["\n\n","\n\n* {\n    box-sizing: border-box;\n}\n\n*::after, *::before {\n    box-sizing: inherit;\n}\n\nhtml {\n    font-size: 62.5%\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: 'Open Sans', sans-serif;\n    font-size:1.6rem;\n    font-weight: 400;\n    color: #fafafa;\n}\n\nsection {\n    width: 100%;\n    padding: 20px;\n}\n\nh1, h2, h3, p {\n    margin: 0;\n    padding: 0;\n}\n\na {\n    text-decoration:none;\n    color: inherit;\n}\n\n"])),yn.normalize),kn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,44)).then((function(t){var e=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;e(n),r(n),i(n),c(n),a(n)}))};k.a.render(Object(I.jsxs)(S.a,{children:[Object(I.jsx)(wn,{}),Object(I.jsx)(vn,{})]}),document.getElementById("root")),kn()}},[[43,1,2]]]);
//# sourceMappingURL=main.332b2efb.chunk.js.map