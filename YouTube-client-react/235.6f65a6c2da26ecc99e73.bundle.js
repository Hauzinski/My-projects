"use strict";(self.webpackChunkyoutube_client=self.webpackChunkyoutube_client||[]).push([[235],{725:function(t,e,n){function s(t){const e=parseInt(t,10),n=Number(e.toExponential().toString().split("+")[1]);let s="",i=0;return Number.isNaN(e)?"-":(n>=9?(i=9,s=" B"):n>=6?(i=6,s=" M"):n>=3&&(i=3,s=" K"),(e/10**i).toFixed(i?1:0)+s)}n.d(e,{Z:function(){return c}});var i={metric:"S8eY6IP_T35j2zBIYEkA",logo:"shpyMtxjkfBNkSaJLZZr",count:"EI64uDkVdIYAk3PGAmY3","logo-comments":"WOqlicuQepD6xcEh7jAu","logo-favorites":"uaQ7zlkYcpqyRKjzUoAH","logo-likes":"ZsqdDIIjsKmGJR72jCTg","logo-views":"CFRW0qDh1ZrMvmXbN0wj"},o=n(5893);function a(t){let{data:e}=t;return(0,o.jsxs)("div",{className:i.metric,"data-title":e.title,children:[(0,o.jsx)("div",{className:"".concat(i.logo," ").concat(i[e.class])}),(0,o.jsx)("p",{className:i.count,children:s(e.count)})]})}function c(t){let{data:e}=t;const n=[{class:"logo-views",count:e.viewCount,title:"Views"},{class:"logo-likes",count:e.likeCount,title:"Likes"},{class:"logo-comments",count:e.commentCount,title:"Comments"},{class:"logo-favorites",count:e.favoriteCount,title:"Favorites"}];return(0,o.jsx)("ul",{className:"fosciPMUuPRHvuZ0j2KJ",children:n.map((t=>(0,o.jsx)("li",{children:(0,o.jsx)(a,{data:t})},t.title)))})}},235:function(t,e,n){n.r(e),n.d(e,{default:function(){return r}});var s=n(5998),i=n(6974),o=n(1972),a=n(725),c=n(392),l=n(5893);function r(){const{id:t}=(0,i.UO)(),e=(0,s.v9)((t=>t.cache.requestData)),n=(0,i.s0)(),r=e.find((e=>e.id===t)),u={class:"btn-video-page-back",action:()=>n("/"),label:"Return to main page options"};return(0,l.jsxs)("div",{className:"container ".concat("N8UM6bcUTrPdB4Uv7f19"),children:[r&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("img",{className:"A9RKv8N0GM0H4rhoTno1",src:(0,c.Z)(r),alt:r.snippet.title}),(0,l.jsx)("h3",{className:"title ".concat("dYLWdqayIsoKH6vo3rcw"),children:r.snippet.title}),(0,l.jsx)("p",{className:"PpbqXworv47Rf2V7iTre",children:(d=r.snippet.publishedAt,new Date(d).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}))}),r.snippet.description&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h4",{className:"jZp6WCI1LiVjtts0Nj8T",children:"Description:"}),(0,l.jsx)("p",{className:"E6EJSTEsSyV9x_LLW3Jk",children:r.snippet.description})]}),(0,l.jsx)("div",{className:"bMDkyaoHHPlZNvV3lhRU",children:(0,l.jsx)(a.Z,{data:r.statistics})}),(0,l.jsx)(o.Z,{data:u})]}),!r&&(0,l.jsx)("p",{children:"Video not found!"})]});var d}},392:function(t,e,n){function s(t){var e;const n=["maxres","standard","high","medium"].find((e=>Object.prototype.hasOwnProperty.call(t.snippet.thumbnails,e)));return String(n?null===(e=t.snippet.thumbnails[n])||void 0===e?void 0:e.url:t.snippet.thumbnails.default)}n.d(e,{Z:function(){return s}})}}]);
//# sourceMappingURL=235.6f65a6c2da26ecc99e73.bundle.js.map