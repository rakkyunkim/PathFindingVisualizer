(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),s=n(7),o=n.n(s),a=(n(14),n(15),n(8)),u=n(1),c=n(2),l=n(4),d=n(3),f=n(5),h=(n(16),function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.col,n=e.isFinish,r=e.isStart,s=e.isWall,o=e.onMouseDown,a=e.onMouseEnter,u=e.onMouseUp,c=e.onMouseLeave,l=e.row,d=n?"node-finish":r?"node-start":s?"node-wall":"";return i.a.createElement("div",{id:"node-".concat(l,"-").concat(t),className:"node ".concat(d),onMouseDown:function(){return o(l,t)},onMouseEnter:function(){return a(l,t)},onMouseUp:function(){return u()},onMouseLeave:function(){return c(l,t)}})}}]),t}(r.Component));function v(e,t,n){var r=[];t.distance=0;for(var i=function(e){var t=[],n=!0,r=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var a=s.value,u=!0,c=!1,l=void 0;try{for(var d,f=a[Symbol.iterator]();!(u=(d=f.next()).done);u=!0){var h=d.value;t.push(h)}}catch(v){c=!0,l=v}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}}}catch(v){r=!0,i=v}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}(e);i.length;){m(i);var s=i.shift();if(!s.isWall){if(s.distance===1/0)return r;if(s.isVisited=!0,r.push(s),s===n)return r;p(s,e)}}}function m(e){e.sort((function(e,t){return e.distance-t.distance}))}function p(e,t){var n=function(e,t){var n=[],r=e.col,i=e.row;i>0&&n.push(t[i-1][r]);i<t.length-1&&n.push(t[i+1][r]);r>0&&n.push(t[i][r-1]);r<t[0].length-1&&n.push(t[i][r+1]);return n.filter((function(e){return!e.isVisited}))}(e,t),r=!0,i=!1,s=void 0;try{for(var o,a=n[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var u=o.value;u.distance=e.distance+1,u.previousNode=e}}catch(c){i=!0,s=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}}n(17);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=10,b=15,P=10,S=35,j=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).state={grid:[],mouseIsPressed:!1,startNodePressed:!1,finishNodePressed:!1},e}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=O();this.setState({grid:e})}},{key:"handleMouseDown",value:function(e,t){if(e===w&&t===b)this.setState({startNodePressed:!0,mouseIsPressed:!0});else if(e===P&&t===S)this.setState({finishNodePressed:!0,mouseIsPressed:!0});else{var n=M(this.state.grid,e,t);this.setState({grid:n,mouseIsPressed:!0})}}},{key:"handleMouseEnter",value:function(e,t){if(this.state.mouseIsPressed)if(!0===this.state.startNodePressed){var n=E(this.state.grid,e,t);this.setState({grid:n})}else if(!0===this.state.finishNodePressed){var r=N(this.state.grid,e,t);this.setState({grid:r})}else{var i=M(this.state.grid,e,t);this.setState({grid:i})}}},{key:"handleMouseLeave",value:function(e,t){if(this.state.startNodePressed){var n=this.state.grid.slice(),r=n[e][t],i=g({},r,{isStart:!r.isStart});n[e][t]=i,this.setState({grid:n})}else if(this.state.finishNodePressed){var s=this.state.grid.slice(),o=s[e][t],a=g({},o,{isFinish:!o.isFinish});s[e][t]=a,this.setState({grid:s})}}},{key:"handleMouseUp",value:function(){this.setState({mouseIsPressed:!1}),this.setState({startNodePressed:!1}),this.setState({finishNodePressed:!1})}},{key:"animateDijkstra",value:function(e,t){for(var n=this,r=function(r){if(r===e.length-1)return setTimeout((function(){n.animateShortestPath(t)}),5*r),{v:void 0};setTimeout((function(){var t=e[r];document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited"}),5*r)},i=1;i<e.length;i++){var s=r(i);if("object"===typeof s)return s.v}}},{key:"animateShortestPath",value:function(e){for(var t=function(t){setTimeout((function(){var n=e[t];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-shortest-path"}),50*t)},n=1;n<e.length-1;n++)t(n)}},{key:"visualizeDijkstra",value:function(){var e=this.state.grid,t=e[w][b],n=e[P][S],r=v(e,t,n),i=function(e){for(var t=[],n=e;null!==n;)t.unshift(n),n=n.previousNode;return t}(n);this.animateDijkstra(r,i)}},{key:"render",value:function(){var e=this,t=this.state,n=t.grid,r=t.mouseIsPressed;return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{onClick:function(){return e.visualizeDijkstra()}},"Visualize Dijkstra's Algorithm"),i.a.createElement("div",{className:"grid"},n.map((function(t,n){return i.a.createElement("div",{className:"row",key:n},t.map((function(t,n){var s=t.row,o=t.col,a=t.isFinish,u=t.isStart,c=t.isWall;return i.a.createElement(h,{key:n,col:o,isFinish:a,isStart:u,isWall:c,mouseIsPressed:r,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseUp:function(){return e.handleMouseUp()},onMouseLeave:function(t,n){return e.handleMouseLeave(t,n)},row:s})})))}))))}}]),t}(r.Component),O=function(){for(var e=[],t=0;t<30;t++){for(var n=[],r=0;r<60;r++)n.push(k(r,t));e.push(n)}return e},k=function(e,t){return{col:e,row:t,isStart:t===w&&e===b,isFinish:t===P&&e===S,distance:1/0,isVisited:!1,isWall:!1,previousNode:null}},M=function(e,t,n){if(t===w&&n===b)return e;if(t===P&&n===S)return e;var r=e.slice(),i=r[t][n],s=g({},i,{isWall:!i.isWall});return r[t][n]=s,r},E=function(e,t,n){var r=e.slice(),i=r[t][n],s=g({},i,{isStart:!i.isStart});return w=t,b=n,r[t][n]=s,r},N=function(e,t,n){var r=e.slice(),i=r[t][n],s=g({},i,{isFinish:!i.isFinish});return P=t,S=n,r[t][n]=s,r};var D=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.08dc640a.chunk.js.map