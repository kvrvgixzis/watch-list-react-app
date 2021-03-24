(this["webpackJsonpwatch-list-react-app"]=this["webpackJsonpwatch-list-react-app"]||[]).push([[0],{36:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(18),a=(n(36),n(9)),s=function(){return Object(c.jsx)("div",{className:"spinner-border text-danger",role:"status",children:Object(c.jsx)("div",{className:"sr-only",children:"Loading..."})})},i=n(5),o=n.n(i),l=n(11),u=n(12),j=(n(42),n(0)),d=n(4),b="".concat("https://my-json-server.typicode.com/kvrvgixzis/watch-list-react-app","/films"),f="https://via.placeholder.com/".concat(200,"x").concat(400,"?text=Poster+not+found"),p="https://api.themoviedb.org/3/search/multi?api_key=".concat("eeddb6b3c7a58009b97b8dde8b85c32d","&language=ru"),O=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c,r,a,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={originalTitle:"",posterUrl:f},t){e.next=3;break}return e.abrupt("return",n);case 3:return t=t.split(" ").join("%20"),c="".concat(p,"&query=").concat(t),e.prev=5,e.next=8,fetch(c);case 8:return a=e.sent,e.next=11,a.json();case 11:if(null===(s=e.sent)||void 0===s||null===(r=s.results)||void 0===r?void 0:r.length){e.next=14;break}return e.abrupt("return",n);case 14:i=s.results[0],n.posterUrl="http://image.tmdb.org/t/p/w500/".concat(i.poster_path),n.originalTitle=i.original_title,n.originalName=i.original_name,n.voteAvg=i.vote_average,n.voteCount=i.vote_count,n.overview=i.overview,e.next=26;break;case 23:e.prev=23,e.t0=e.catch(5),console.warn("[TMDB] error: ",e.t0);case 26:return e.prev=26,e.abrupt("return",n);case 29:case"end":return e.stop()}}),e,null,[[5,23,26,29]])})));return function(t){return e.apply(this,arguments)}}(),h=(n(43),function(e){var t=e.title,n=e.clickHandler,r=e.className;return Object(c.jsx)("button",{onClick:n,className:"btn ".concat(r),children:t})}),m=function(e){var t=e.film,n=Object(j.useState)(void 0),r=Object(u.a)(n,2),a=r[0],s=r[1],i=Object(d.f)();return Object(j.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t.title);case 2:n=e.sent,s(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),a?Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("img",{src:a.posterUrl,className:"card__poster",alt:"poster"}),Object(c.jsxs)("div",{className:"card__about",children:[Object(c.jsx)("h3",{className:"card__heading",children:t.title}),Object(c.jsx)("h3",{className:"card__heading-original",children:a.originalTitle}),Object(c.jsx)("p",{className:"card__type",children:t.type}),Object(c.jsxs)("p",{className:"card__overview",children:[Object(c.jsx)("strong",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: "}),a.overview]}),Object(c.jsxs)("p",{className:"card__comment",children:[Object(c.jsx)("strong",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439: "}),t.comment]}),Object(c.jsxs)("p",{className:"card__author",children:[Object(c.jsx)("strong",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u043b: "}),t.added_by]}),Object(c.jsx)(h,{className:"card__open",clickHandler:function(){i.push("/film/".concat(t.id))},title:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]})]}):null},v=function(){var e=Object(a.c)((function(e){return e.films.films}));return Object(a.c)((function(e){return e.app.loading}))?Object(c.jsx)(s,{}):e.length?Object(c.jsx)("div",{className:"grid",children:e.map((function(e){return Object(c.jsx)(m,{film:e},e.id)}))}):Object(c.jsx)("div",{children:"\u0424\u0438\u043b\u044c\u043c\u043e\u0432 \u043d\u0435\u0442 \xaf\\_(\u30c4)_/\xaf"})},x=(n(45),n(46),n(13)),_=function(e){var t=e.onScrollDown,n=void 0===t?function(){}:t,c=e.onScrollUp,r=void 0===c?function(){}:c,a=0,s=function(){var e=window.pageYOffset||document.documentElement.scrollTop;e>a?n():r(),a=e<=0?0:e};Object(j.useEffect)((function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}}),[])},g="FILM/CREATE_POST",y="FILM/FETCH_FILMS",w="FILM/DELETE_FILM",N="APP/SHOW_LOADER",k="APP/HIDE_LOADER",S="APP/SHOW_ALERT",E="APP/HIDE_ALERT",A="APP/SHOW_ADD_FORM",L="APP/HIDE_ADD_FORM";function D(e){return function(t){t({type:S,payload:e}),setTimeout((function(){t({type:E})}),2e3)}}var P=function(){return null},T=function(){var e=Object(a.b)(),t=Object(j.useRef)();_({onScrollDown:function(){t.current.classList.remove("fixed")},onScrollUp:function(){t.current.classList.add("fixed")}});return Object(c.jsxs)("header",{ref:t,className:"header",children:[Object(c.jsx)(P,{}),Object(c.jsxs)("div",{className:"header__body",children:[Object(c.jsx)("div",{className:"header__title",children:Object(c.jsx)(x.b,{to:"/",children:"\u0427\u0442\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c?"})}),Object(c.jsx)("div",{className:"header__right-pane",children:Object(c.jsx)(h,{clickHandler:function(){e({type:A})},title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]})]})},F=(n(47),function(){return Object(c.jsx)("footer",{className:"footer",children:"by nktpfn"})}),I=(n(48),function(){var e=Object(a.c)((function(e){return e.app.alert}));return e&&e.trim()?Object(c.jsx)("div",{className:"notification",role:"alert",children:e}):null}),H=n(21),R=n(3);n(49);var C=function(){var e=Object(j.useState)({title:"",comment:""}),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(j.useRef)(),i=Object(a.b)(),d=Object(a.c)((function(e){return e.app.isAddFormShow})),f=function(e){var t=e.target;r((function(e){return Object(R.a)(Object(R.a)({},e),{},Object(H.a)({},t.name,t.value))}))};return Object(j.useEffect)((function(){var e=function(e){var t=e.target;d&&s.current&&!s.current.contains(t)&&i({type:L})};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[s,i,d]),d?Object(c.jsx)("div",{className:"form",children:Object(c.jsxs)("form",{ref:s,className:"form__body",onSubmit:function(e){e.preventDefault(),r((function(e){return Object(R.a)(Object(R.a)({},e),{},{title:"",comment:""})}));var t=Date.now().toString();i(function(e){return function(){var t=Object(l.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(b,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 3:t.sent.ok||n(D("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0438")),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(D("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0438"));case 10:n({type:g,payload:e});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(Object(R.a)(Object(R.a)({},n),{},{id:t})))},children:[Object(c.jsx)("h5",{className:"form__title",children:"\u0427\u0442\u043e \u043f\u043e\u0441\u043e\u0432\u0435\u0442\u0443\u0435\u0448\u044c?"}),Object(c.jsxs)("div",{className:"form__inputs",children:[Object(c.jsx)("input",{className:"form__input",name:"title",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:n.title,onChange:f}),Object(c.jsxs)("select",{name:"type",onChange:f,className:"form__input",children:[Object(c.jsx)("option",{select:"true",children:"\u041a\u0438\u043d\u043e"}),Object(c.jsx)("option",{children:"\u0421\u0435\u0440\u0438\u0430\u043b"}),Object(c.jsx)("option",{children:"\u041c\u0443\u043b\u044c\u0442\u0444\u0438\u043b\u044c\u043c"}),Object(c.jsx)("option",{children:"\u041c\u0443\u043b\u044c\u0442\u0441\u0435\u0440\u0438\u0430\u043b"}),Object(c.jsx)("option",{children:"\u0410\u043d\u0438\u043c\u0435"})]}),Object(c.jsx)("textarea",{className:"form__input",placeholder:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",value:n.comment,name:"comment",id:"comment",rows:10,onChange:f}),Object(c.jsx)("input",{className:"form__input",name:"added_by",type:"text",placeholder:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044c\u0441\u044f",value:n.added_by,onChange:f})]}),Object(c.jsx)(h,{title:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",type:"submit"})]})}):null},M=function(e){var t=e.children,n=Object(j.useRef)();return _({onScrollDown:function(){n.current.classList.remove("fixed")},onScrollUp:function(){n.current.classList.add("fixed")}}),Object(c.jsxs)("div",{ref:n,className:"container",children:[Object(c.jsx)(T,{}),Object(c.jsx)(I,{}),Object(c.jsx)(C,{}),Object(c.jsx)("main",{className:"root",children:t}),Object(c.jsx)(F,{})]})},U=(n(50),function(){var e=Object(j.useState)(void 0),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(j.useState)(void 0),i=Object(u.a)(a,2),f=i[0],p=i[1],h=Object(j.useState)(!1),m=Object(u.a)(h,2),v=m[0],x=m[1],_=Object(j.useState)(!1),g=Object(u.a)(_,2),y=g[0],w=g[1],N=Object(d.g)().id;return Object(j.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,O(n.title);case 4:t=e.sent,p(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!n&&function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,e.next=4,fetch("".concat(b,"/").concat(N));case 4:if((t=e.sent).ok){e.next=8;break}return w(!0),e.abrupt("return");case 8:return e.next=10,t.json();case 10:n=e.sent,r(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),w(!0);case 17:x(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}()(),!f&&e()}),[N,y,v]),y?Object(c.jsx)("div",{children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"}):!v&&n&&f?Object(c.jsxs)("div",{className:"film-page",children:[Object(c.jsxs)("h1",{children:[n.title," | ",f.originalTitle||f.originalName]}),Object(c.jsx)("p",{children:n.type}),Object(c.jsxs)("div",{className:"film-page__about",children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:f.posterUrl,alt:"poster"})}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: "}),f.overview]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439: "}),n.comment]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"\u041e\u0446\u0435\u043d\u043a\u0430: "}),f.voteAvg]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u043b: "}),n.added_by]})]})]})]}):Object(c.jsx)(s,{})}),J=function(){return Object(c.jsx)(M,{children:Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{path:"/film/:id",children:Object(c.jsx)(U,{})}),Object(c.jsx)(d.a,{path:"/",children:Object(c.jsx)(v,{})})]})})},W=(n(51),n(14)),B=n(30),q={loading:!1,alert:null,isAddFormShow:!1},z=n(27),Y={films:[]},G=Object(W.c)({films:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(R.a)(Object(R.a)({},e),{},{films:[t.payload].concat(Object(z.a)(e.films))});case w:return Object(R.a)(Object(R.a)({},e),{},{films:Object(z.a)(e.films.filter((function(e){return e.id!==t.payload})))});case y:return Object(R.a)(Object(R.a)({},e),{},{films:t.payload});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(R.a)(Object(R.a)({},e),{},{loading:!0});case k:return Object(R.a)(Object(R.a)({},e),{},{loading:!1});case S:return Object(R.a)(Object(R.a)({},e),{},{alert:t.payload});case E:return Object(R.a)(Object(R.a)({},e),{},{alert:null});case A:return Object(R.a)(Object(R.a)({},e),{},{isAddFormShow:!0});case L:return Object(R.a)(Object(R.a)({},e),{},{isAddFormShow:!1});default:return e}}}),K=Object(W.d)(G,Object(W.a)(B.a,(function(e){var t=e.dispatch;return function(e){return function(n){if(n.type===g){var c=n.payload,r=c.title,a=c.comment;if(!r.trim())return t(D("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"));if(!a.trim())return t(D("\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"))}return e(n)}}})));K.dispatch(function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:N}),e.prev=1,console.log("API_FILMS: ",b),e.next=5,fetch(b);case 5:return(n=e.sent).ok||t(D("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0438")),e.next=9,n.json();case 9:c=e.sent,t({type:y,payload:c.reverse()}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),t(D("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435"));case 16:t({type:k});case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}()),Object(r.render)(Object(c.jsx)(a.a,{store:K,children:Object(c.jsx)(x.a,{children:Object(c.jsx)(J,{})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.a6bc2b4d.chunk.js.map