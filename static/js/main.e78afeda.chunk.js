(this.webpackJsonptdash=this.webpackJsonptdash||[]).push([[0],{98:function(t,e,n){},99:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(50),r=n.n(s),o=n(7),i=n(8),l=n.n(i),u=n(18),b=n(19),j=n.n(b),d=n(29),h=n.n(d),f=n(30),m=n(2),p=function(t){var e=Object(c.useState)(""),n=Object(o.a)(e,2),a=n[0],s=n[1],r=Object(c.useState)(0),i=Object(o.a)(r,2),b=i[0],d=i[1],p=Object(c.useState)(0),O=Object(o.a)(p,2),v=O[0],x=O[1],y=Object(c.useState)([]),g=Object(o.a)(y,2),w=g[0],k=g[1],S=Object(c.useCallback)(function(){var e=Object(u.a)(l.a.mark((function e(n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://finnhub.io/api/v1/stock/profile2?symbol=".concat(t.symbol,"&token=").concat(n));case 2:c=e.sent,s(c.data.name);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t.symbol]),I=Object(c.useCallback)(function(){var e=Object(u.a)(l.a.mark((function e(n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://finnhub.io/api/v1/quote?symbol=".concat(t.symbol,"&token=").concat(n));case 2:c=e.sent,d(c.data.c),x(c.data.c-c.data.o);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t.symbol]),_=Object(c.useCallback)(function(){var e=Object(u.a)(l.a.mark((function e(n){var c,a,s,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=h()().unix(),a=h()().subtract(6,"months").unix(),e.next=4,j.a.get("https://finnhub.io/api/v1/stock/candle?symbol=".concat(t.symbol,"&token=").concat(n,"&resolution=D&from=").concat(a,"&to=").concat(c));case 4:for(s=e.sent,r=[],o=0;o<s.data.c.length;o++)r.push({x:o+1,y:s.data.c[o]});k(r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t.symbol]);return Object(c.useEffect)((function(){var e=localStorage.getItem("finnhub_api_token");S(e),I(e),clearInterval(window["quote_"+t.symbol]),window["quote_"+t.symbol]=setInterval((function(){I(e)}),5e3),_(e),clearInterval(window["candles_"+t.symbol]),window["candles_"+t.symbol]=setInterval((function(){_(e)}),5e3)}),[t.symbol,S,I,_]),Object(m.jsxs)("div",{className:"widget",children:[Object(m.jsxs)("div",{className:"grid-container",children:[Object(m.jsxs)("div",{className:"profile",children:[Object(m.jsx)("h3",{children:t.symbol}),Object(m.jsx)("p",{children:a})]}),Object(m.jsxs)("div",{className:"quote",children:[Object(m.jsx)("h3",{children:b}),Object(m.jsx)("p",{className:v<0?"red":"green",children:Math.round(100*v)/100})]})]}),w.length?Object(m.jsx)("div",{className:"chart",children:Object(m.jsx)(f.b,{width:300,height:80,margin:0,style:{fill:"none"},children:Object(m.jsx)(f.a,{strokeWidth:2,color:w[w.length-1].y-w[0].y<0?"#dc322f":"#859900",data:w})})}):null]})},O=function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],a=e[1];return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault(),localStorage.setItem("finnhub_api_token",n),window.location.reload()},className:"token",children:[Object(m.jsxs)("label",{children:[Object(m.jsx)("a",{href:"https://finnhub.io/",children:"Finnhub"})," API Token"]}),Object(m.jsx)("div",{children:Object(m.jsx)("input",{type:"text",onChange:function(t){a(t.currentTarget.value)}})}),Object(m.jsx)("div",{children:Object(m.jsx)("input",{type:"submit",value:"Submit"})})]})})},v=function(){var t;if(!localStorage.getItem("finnhub_api_token"))return Object(m.jsx)(O,{});var e=localStorage.getItem("finnhub_symbols");return e||(localStorage.setItem("finnhub_symbols","AAPL, NVDA"),e="AAPL, NVDA"),Object(m.jsx)("div",{className:"App",children:null===(t=e)||void 0===t?void 0:t.split(",").map((function(t){return Object(m.jsx)(p,{symbol:t.trim()},t.trim())}))})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,101)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),s(t),r(t)}))};n(98);r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),x()}},[[99,1,2]]]);
//# sourceMappingURL=main.e78afeda.chunk.js.map