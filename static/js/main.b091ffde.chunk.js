(this["webpackJsonphackernews-mc"]=this["webpackJsonphackernews-mc"]||[]).push([[0],{120:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(37),s=n.n(a),i=(n(120),n(61)),j=n(62),o=n(80),d=n(74),l=n(162),u=n(163),b=n(53),h=n(26),O=n(10),x=n(168),p=n(165),v=n(161),f=n(164),m=n(4);var k=function(e){var t=function(e){var t=new Date(1e3*e),n=t.getFullYear(),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+r+" "+n+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}(e.date);return Object(m.jsx)(f.a.Event,{id:e.id,children:Object(m.jsxs)(f.a.Content,{children:[Object(m.jsxs)(f.a.Summary,{children:[Object(m.jsx)(f.a.Extra,{as:"h1",children:e.title}),Object(m.jsxs)(f.a.Extra,{text:!0,as:"a",href:e.url,target:"_blank",children:["Click to Know more ",Object(m.jsx)("br",{})]}),Object(m.jsx)(f.a.User,{children:e.by})," posted this news on  ",Object(m.jsx)(f.a.Date,{children:t})]}),Object(m.jsx)(f.a.Meta,{children:Object(m.jsxs)(f.a.Like,{children:[Object(m.jsx)(b.a,{name:"thumbs up"}),e.score]})})]})})},y=n(57),g=n.n(y),w=n(86),C=n(58),S=n(105),I=n.n(S);function F(e){var t="https://hacker-news.firebaseio.com/v0/".concat(e,'stories.json?print=pretty&orderBy="$key"&limitToFirst=30'),n=Object(r.useState)([]),c=Object(C.a)(n,2),a=(c[0],c[1]),s=Object(r.useState)(null),i=Object(C.a)(s,2),j=(i[0],i[1]),o=Object(r.useState)(!0),d=Object(C.a)(o,2),l=d[0],u=d[1],b=Object(r.useState)([]),h=Object(C.a)(b,2),O=h[0],x=h[1];function p(e){return v.apply(this,arguments)}function v(){return(v=Object(w.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("https://hacker-news.firebaseio.com/v0/item/".concat(t,".json?print=pretty"));case 3:return n=e.sent,e.abrupt("return",{success:!0,data:n.data});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){Object(w.a)(g.a.mark((function e(){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,Promise.all(r.map(p)).then((function(e){x(e),a(r)})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),j(e.t0);case 13:return e.prev=13,u(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))()}),[t]),{loading:l,final:O}}var E=function(e){var t=F(e.type),n=t.loading,r=t.final;return document.title="HackerNews | Best Stories",n?Object(m.jsx)("div",{id:"loa",children:Object(m.jsx)(x.a,{raised:!0,padded:!0,inverted:!0,id:"loaders",children:Object(m.jsx)(p.a,{active:!0,children:Object(m.jsx)(v.a,{inverted:!0})})})}):Object(m.jsx)(l.a,{children:Object(m.jsx)(f.a,{children:r.map((function(e){var t=e.data,n=t.id,r=t.title,c=t.by,a=t.url,s=t.score,i=t.time;return Object(m.jsx)(k,{title:r,by:c,url:a,score:s,date:i},n)}))})})};var M=function(e){var t=F(e.type),n=t.loading,r=t.final;return document.title="HackerNews | New Stories",n?Object(m.jsx)("div",{id:"loa",children:Object(m.jsx)(x.a,{raised:!0,padded:!0,inverted:!0,id:"loaders",children:Object(m.jsx)(p.a,{active:!0,children:Object(m.jsx)(v.a,{inverted:!0})})})}):Object(m.jsx)(l.a,{children:Object(m.jsx)(f.a,{children:r.map((function(e){var t=e.data,n=t.id,r=t.title,c=t.by,a=t.url,s=t.score,i=t.time;return Object(m.jsx)(k,{as:h.b,to:"/new/".concat(n),title:r,by:c,url:a,score:s,date:i},n)}))})})};var N=function(e){var t=F(e.type),n=t.loading,r=t.final;return document.title="HackerNews | Top Stories",n?Object(m.jsx)("div",{id:"loa",children:Object(m.jsx)(x.a,{raised:!0,padded:!0,inverted:!0,id:"loaders",children:Object(m.jsx)(p.a,{active:!0,children:Object(m.jsx)(v.a,{inverted:!0})})})}):Object(m.jsx)(l.a,{children:Object(m.jsx)(f.a,{children:r.map((function(e){var t=e.data,n=t.id,r=t.title,c=t.by,a=t.url,s=t.score,i=t.time;return Object(m.jsx)(k,{title:r,by:c,url:a,score:s,date:i},n)}))})})},B=n(166),D=n(167),H=n(170),J=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return document.title="Error 404: Page Not Found",Object(m.jsx)("div",{id:"err-page",children:Object(m.jsx)(x.a,{very:!0,raised:!0,padded:!0,id:"err-seg",children:Object(m.jsxs)(B.a,{error:!0,children:[Object(m.jsx)(H.a,{children:"Uh-Oh.. Looks like you're lost"}),Object(m.jsx)("br",{}),Object(m.jsx)(D.a,{as:h.b,to:"/",color:"red",children:"Go Back"})]})})})}}]),n}(r.Component),L=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={activeitem:"best"},e.handleItemClick=function(t,n){var r=n.name;e.setState({activeitem:r})},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state.activeitem;return Object(m.jsx)("div",{id:"cont",children:Object(m.jsx)(l.a,{fluid:!0,children:Object(m.jsxs)(h.a,{children:[Object(m.jsxs)(u.a,{size:"huge",inverted:!0,id:"myHeader",stackable:!0,children:[Object(m.jsx)(u.a.Item,{id:"to-top",children:Object(m.jsx)(b.a,{name:"hacker news square",size:"large"})}),Object(m.jsx)(u.a.Item,{as:h.c,to:"/best",name:"best stories",activeitem:"best"===e,onClick:this.handleItemClick}),Object(m.jsx)(u.a.Item,{as:h.c,to:"/top",name:"top stories",activeitem:"top"===e,onClick:this.handleItemClick}),Object(m.jsx)(u.a.Item,{as:h.c,to:"/new",name:"latest stories",activeitem:"new"===e,onClick:this.handleItemClick})]}),Object(m.jsxs)(O.c,{children:[Object(m.jsx)(O.a,{exact:!0,path:"/best",render:function(){return Object(m.jsx)(E,{type:"best"})}}),Object(m.jsx)(O.a,{exact:!0,path:"/hackernews-clone",render:function(){return Object(m.jsx)(E,{type:"best"})}}),Object(m.jsx)(O.a,{exact:!0,path:"/top",render:function(){return Object(m.jsx)(N,{type:"top"})}}),Object(m.jsx)(O.a,{exact:!0,path:"/new",render:function(){return Object(m.jsx)(M,{type:"new"})}}),Object(m.jsx)(O.a,{path:"/*",render:function(){return Object(m.jsx)(J,{})}})]})]})})})}}]),n}(r.Component),P=(n(147),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,171)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))});s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root")),P()}},[[148,1,2]]]);
//# sourceMappingURL=main.b091ffde.chunk.js.map