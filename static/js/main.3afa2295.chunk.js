(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{24:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(2),i=t.n(o),c=t(8),s=t(5),a=t(13),l=t(12),u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(22);var h=t(3),b=t(4),f=t(7),j=t(6),g="CHANGE_SEARCHFIELD",p="REQUEST_ROBOTS_PENDING",v="REQUEST_ROBOTS_SUCCESS",O="REQUEST_ROBOTS_FAILED",w=function(){return function(e){var n;e({type:p}),(n="https://jsonplaceholder.typicode.com/users",fetch(n).then((function(e){return e.json()}))).then((function(n){return e({type:v,payload:n})})).catch((function(n){return e({type:O,payload:n})}))}},m=t(1),x=function(e){var n=e.name,t=e.email,r=e.id;return Object(m.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(m.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:n}),Object(m.jsx)("p",{children:t})]})]})},y=function(e){var n=e.robots;return Object(m.jsx)("div",{children:n.map((function(e,t){return Object(m.jsx)(x,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},k=function(e){e.searchfield;var n=e.searchChange;return Object(m.jsx)("div",{className:"pa2",children:Object(m.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},E=function(e){return Object(m.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},R=function(e){Object(f.a)(t,e);var n=Object(j.a)(t);function t(e){var r;return Object(h.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(b.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(m.jsx)("h1",{children:"Something went wrong."}):this.props.children}}]),t}(r.Component),S=(t(24),function(e){Object(f.a)(t,e);var n=Object(j.a)(t);function t(){return Object(h.a)(this,t),n.apply(this,arguments)}return Object(b.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.robots,t=e.searchField,r=e.onSearchChange,o=e.isPending,i=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(m.jsxs)("div",{className:"tc",children:[Object(m.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(m.jsx)(k,{searchChange:r}),Object(m.jsx)(E,{children:o?Object(m.jsx)("h1",{children:"Loading"}):Object(m.jsx)(R,{children:Object(m.jsx)(y,{robots:i})})})]})}}]),t}(r.Component)),C=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:g,payload:t}));var t},onRequestRobots:function(){return e(w())}}}))(S),N={searchField:""},P={robots:[],isPending:!0},F=(t(25),Object(l.createLogger)()),L=Object(c.b)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case p:return Object.assign({},e,{isPending:!0});case v:return Object.assign({},e,{robots:n.payload,isPending:!1});case O:return Object.assign({},e,{error:n.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.type===g?Object.assign({},e,{searchField:n.payload}):e}}),T=Object(c.c)(L,Object(c.a)(a.a,F));i.a.render(Object(m.jsx)(s.a,{store:T,children:Object(m.jsx)(C,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends-redux",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends-redux","/service-worker.js");u?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):d(n,e)}))}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.3afa2295.chunk.js.map