"use strict";(self.webpackChunkyoutube_client=self.webpackChunkyoutube_client||[]).push([[705],{725:function(t,e,s){function n(t){const e=parseInt(t,10),s=Number(e.toExponential().toString().split("+")[1]);let n="",o=0;return Number.isNaN(e)?"-":(s>=9?(o=9,n=" B"):s>=6?(o=6,n=" M"):s>=3&&(o=3,n=" K"),(e/10**o).toFixed(o?1:0)+n)}s.d(e,{Z:function(){return c}}),s(294);var o={metric:"S8eY6IP_T35j2zBIYEkA",logo:"shpyMtxjkfBNkSaJLZZr",count:"EI64uDkVdIYAk3PGAmY3","logo-comments":"WOqlicuQepD6xcEh7jAu","logo-favorites":"uaQ7zlkYcpqyRKjzUoAH","logo-likes":"ZsqdDIIjsKmGJR72jCTg","logo-views":"CFRW0qDh1ZrMvmXbN0wj"},a=s(893);function i(t){let{data:e}=t;return(0,a.jsxs)("div",{className:o.metric,"data-title":e.title,children:[(0,a.jsx)("div",{className:`${o.logo} ${o[e.class]}`}),(0,a.jsx)("p",{className:o.count,children:n(e.count)})]})}function c(t){let{data:e}=t;const s=[{class:"logo-views",count:e.viewCount,title:"Views"},{class:"logo-likes",count:e.likeCount,title:"Likes"},{class:"logo-comments",count:e.commentCount,title:"Comments"},{class:"logo-favorites",count:e.favoriteCount,title:"Favorites"}];return(0,a.jsx)("ul",{className:"fosciPMUuPRHvuZ0j2KJ",children:s.map((t=>(0,a.jsx)("li",{children:(0,a.jsx)(i,{data:t})},t.title)))})}},705:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}});var n=s(294),o=s(998),a=s(335),i=s(725),c=s(893);function l(t){var e;let{data:s}=t;const n=(0,a.s0)();return(0,c.jsxs)("div",{className:"ZFK788lI4xaaGr6YY8BJ",children:[(0,c.jsx)("img",{className:"gqUhSobX2QENeCZtLnRL",src:null===(e=s.snippet.thumbnails.high)||void 0===e?void 0:e.url,alt:s.snippet.title}),(0,c.jsx)(i.Z,{data:s.statistics}),(0,c.jsx)("h3",{className:"title pta0R428o1a6ACx0mf6A",children:s.snippet.title}),(0,c.jsx)("button",{className:"button h2uh6NPB4zrgrLfQqzqR",type:"button",onClick:function(){n(`/videos/${s.id}`)},children:"more..."})]})}var r=s(262),u=s(972);function d(){const t=(0,o.v9)((t=>t.cache.pageTokens)),e=(0,r.Z)(),s=[{class:["btn-video-search-page-prev"],action:()=>e("pageToken",t[0]),label:"Previous page",disabled:!t[0]},{class:["btn-video-search-page-prev","arrow-next"],action:()=>e("pageToken",t[1]),label:"Next page",disabled:!t[1]}];return(0,c.jsx)("nav",{className:"UispS2pTuTs_zUog7cA5",children:s.map((t=>(0,c.jsx)(u.Z,{data:t},t.label)))})}var m=s(317);function p(){const t=function(){const t=[...(0,o.v9)((t=>t.cache.requestData))],e=function(){const t=(0,o.v9)((t=>t.sortFilters.byWord));return e=>e.filter((e=>e.snippet.title.toLowerCase().includes(t.toLowerCase())))}();return function(t){const e=(0,o.v9)((t=>t.sortFilters)),s={byViews:"viewCount",byLikes:"likeCount",byComments:"commentCount"};Object.keys(e).forEach((n=>{if("byWord"===n||"off"===e[n])return;const o="ascending"===e[n]?1:-1;"byDate"===n?t.sort(((t,e)=>o*(Date.parse(t.snippet.publishedAt)-Date.parse(e.snippet.publishedAt)))):t.sort(((t,e)=>o*(Number(t.statistics[s[n]])-Number(e.statistics[s[n]]))))}))}(t),e(t)}(),e=(0,o.I0)(),s=(0,o.v9)((t=>t.settings.mainPageScroll)),a=(0,n.useRef)(null);let i;return(0,n.useLayoutEffect)((()=>{a.current&&(a.current.scrollTop=s)}),[s]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("main",{className:"main ynhFJl0KL5hkghNMTopN",ref:a,onScroll:function(){clearTimeout(i),i=setTimeout((()=>{a.current&&e((0,m.oi)(a.current.scrollTop))}),500)},children:(0,c.jsx)("div",{className:"container doJqBA3I4xTXMv4czKva",children:t.map((t=>(0,c.jsx)(l,{data:t},t.id)))})}),Boolean(t.length)&&(0,c.jsx)(d,{})]})}}}]);
//# sourceMappingURL=705.33f43ebc9240833eea65.chunk.js.map