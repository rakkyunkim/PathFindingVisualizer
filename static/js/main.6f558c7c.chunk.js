(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(18)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i),s=n(7),o=n.n(s),a=(n(14),n(15),n(8)),u=n(1),l=n(2),c=n(4),h=n(3),d=n(5),f=(n(16),function(t){function e(){return Object(u.a)(this,e),Object(c.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.col,n=t.isFinish,i=t.isStart,s=t.isWall,o=t.onMouseDown,a=t.onMouseEnter,u=t.onMouseUp,l=t.onMouseLeave,c=t.row,h=n?"node-finish":i?"node-start":s?"node-wall":"";return r.a.createElement("div",{id:"node-".concat(c,"-").concat(e),className:"node ".concat(h),onMouseDown:function(){return o(c,e)},onMouseEnter:function(){return a(c,e)},onMouseUp:function(){return u()},onMouseLeave:function(){return l(c,e)}})}}]),e}(i.Component));function v(t,e,n){var i=[];e.distance=0;for(var r=function(t){var e=[],n=!0,i=!1,r=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var a=s.value,u=!0,l=!1,c=void 0;try{for(var h,d=a[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){var f=h.value;e.push(f)}}catch(v){l=!0,c=v}finally{try{u||null==d.return||d.return()}finally{if(l)throw c}}}}catch(v){i=!0,r=v}finally{try{n||null==o.return||o.return()}finally{if(i)throw r}}return e}(t);r.length;){g(r);var s=r.shift();if(!s.isWall){if(s.distance===1/0)return i;if(s.isVisited=!0,i.push(s),s===n)return i;m(s,t)}}}function g(t){t.sort((function(t,e){return t.distance-e.distance}))}function m(t,e){var n=function(t,e){var n=[],i=t.col,r=t.row;r>0&&n.push(e[r-1][i]);r<e.length-1&&n.push(e[r+1][i]);i>0&&n.push(e[r][i-1]);i<e[0].length-1&&n.push(e[r][i+1]);return n.filter((function(t){return!t.isVisited}))}(t,e),i=!0,r=!1,s=void 0;try{for(var o,a=n[Symbol.iterator]();!(i=(o=a.next()).done);i=!0){var u=o.value;u.distance=t.distance+1,u.previousNode=t}}catch(l){r=!0,s=l}finally{try{i||null==a.return||a.return()}finally{if(r)throw s}}}function p(t,e){var n=[],i=t.col,r=t.row;return r>0&&n.push(e[r-1][i]),r<e.length-1&&n.push(e[r+1][i]),i>0&&n.push(e[r][i-1]),i<e[0].length-1&&n.push(e[r][i+1]),n.filter((function(t){return!t.isVisited}))}function y(t){for(var e=[],n=t;null!==n;)e.unshift(n),n=n.previousNode;return e}function S(t,e,n){return!(t<0||t>=n.length||e<0||e>=n[0].length||n[t][e].isVisited)}function w(t,e){var n=[],i=t.col,r=t.row;return r>0&&n.push(e[r-1][i]),r<e.length-1&&n.push(e[r+1][i]),i>0&&n.push(e[r][i-1]),i<e[0].length-1&&n.push(e[r][i+1]),n.filter((function(t){return!t.isVisited}))}function b(t,e){return Math.abs(t.col-e.col)+Math.abs(t.row-e.row)}n(17);function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(n,!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var E=10,I=15,M=10,N=35,j=function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(c.a)(this,Object(h.a)(e).call(this))).state={grid:[],mouseIsPressed:!1,startNodePressed:!1,finishNodePressed:!1,visualFinished:!1,visualInProgress:!1},t}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=F();this.setState({grid:t})}},{key:"handleMouseDown",value:function(t,e){if(!this.state.visualInProgress)if(t===E&&e===I)this.setState({startNodePressed:!0,mouseIsPressed:!0});else if(t===M&&e===N)this.setState({finishNodePressed:!0,mouseIsPressed:!0});else{var n=C(this.state.grid,t,e);this.setState({grid:n,mouseIsPressed:!0})}}},{key:"handleMouseEnter",value:function(t,e){if(!this.state.visualInProgress&&this.state.mouseIsPressed)if(!0===this.state.startNodePressed){var n=D(this.state.grid,t,e);this.setState({grid:n})}else if(!0===this.state.finishNodePressed){var i=B(this.state.grid,t,e);this.setState({grid:i})}else{var r=C(this.state.grid,t,e);this.setState({grid:r})}}},{key:"handleMouseLeave",value:function(t,e){if(this.state.startNodePressed){var n=this.state.grid.slice(),i=n[t][e],r=P({},i,{isStart:!i.isStart});n[t][e]=r,this.setState({grid:n})}else if(this.state.finishNodePressed){var s=this.state.grid.slice(),o=s[t][e],a=P({},o,{isFinish:!o.isFinish});s[t][e]=a,this.setState({grid:s})}}},{key:"handleMouseUp",value:function(){this.setState({mouseIsPressed:!1}),this.setState({startNodePressed:!1}),this.setState({finishNodePressed:!1})}},{key:"animateDijkstra",value:function(t,e){for(var n=this,i=function(i){if(i===t.length-1)return setTimeout((function(){n.animateShortestPath(e)}),5*i),{v:void 0};setTimeout((function(){var e=t[i];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-visited"}),5*i)},r=1;r<t.length;r++){var s=i(r);if("object"===typeof s)return s.v}return 1}},{key:"animateShortestPath",value:function(t){for(var e=this,n=function(n){setTimeout((function(){var i=t[n],r=t[n-1];document.getElementById("node-".concat(i.row,"-").concat(i.col)).className="node node-shortest-path",e.checkDirection(i,r)}),25*n)},i=1;i<t.length-1;i++)n(i);setTimeout((function(){e.setState({visualInProgress:!1}),e.setState({visualFinished:!0})}),25*t.length-1)}},{key:"checkDirection",value:function(t,e){var n=t.row,i=t.col,r=e.row,s=e.col;n-1===r?document.getElementById("node-".concat(n,"-").concat(i)).innerHTML="\ud83e\udc83":n+1===r?document.getElementById("node-".concat(n,"-").concat(i)).innerHTML="\ud83e\udc81":i-1===s?document.getElementById("node-".concat(n,"-").concat(i)).innerHTML="\ud83e\udc82":i+1===s&&(document.getElementById("node-".concat(n,"-").concat(i)).innerHTML="\ud83e\udc80")}},{key:"visualizeDijkstra",value:function(){if(!0!==this.state.visualInProgress){this.state.visualFinished&&(this.reset(!0),this.setState({visualFinished:!1})),this.setState({visualInProgress:!0});var t=this.state.grid,e=t[E][I],n=t[M][N],i=v(t,e,n),r=function(t){for(var e=[],n=t;null!==n;)e.unshift(n),n=n.previousNode;return e}(n);this.animateDijkstra(i,r),document.querySelector(".algo-heading").innerText="Dijkstra's Algorithm guarantees shortest path!\ud83d\ude0a"}}},{key:"visualizeBFS",value:function(){if(!0!==this.state.visualInProgress){this.state.visualFinished&&(this.reset(!0),this.setState({visualFinished:!1})),this.setState({visualInProgress:!0});var t=this.state.grid,e=t[E][I],n=t[M][N],i=function(t,e,n){var i=[];if(e===n)return i;var r=[e];for(i.push(e),e.isVisited=!0;r;){var s=r.shift();if(!s.isWall)for(var o=p(s,t),a=0;a<o.length;a++)if(!o[a].isWall&&(r.push(o[a]),i.push(o[a]),o[a].isVisited=!0,o[a].previousNode=s,o[a]===n))return i}}(t,e,n),r=y(n);this.animateDijkstra(i,r),document.querySelector(".algo-heading").innerText="Breath-First Search guarantees shortest path!\ud83d\ude0a"}}},{key:"visualizeDFS",value:function(){if(!0!==this.state.visualInProgress){this.state.visualFinished&&(this.reset(!0),this.setState({visualFinished:!1})),document.querySelector(".algo-heading").innerHTML="Depth-First Search does not guarantee shortest path\ud83d\ude1e",this.setState({visualInProgress:!0});var t=this.state.grid,e=t[E][I],n=t[M][N],i=function(t,e,n){var i=[];if(e===n)return i;for(var r=[e];r;){var s=r.pop(),o=s.row,a=s.col;if(!s.isWall){if(s.isVisited=!0,i.push(s),s===n)return i;S(o+1,a,t)&&(r.push(t[o+1][a]),t[o+1][a].previousNode=s),S(o-1,a,t)&&(r.push(t[o-1][a]),t[o-1][a].previousNode=s),S(o,a-1,t)&&(r.push(t[o][a-1]),t[o][a-1].previousNode=s),S(o,a+1,t)&&(r.push(t[o][a+1]),t[o][a+1].previousNode=s)}}}(t,e,n),r=y(n);this.animateDijkstra(i,r)}}},{key:"visualizeAstar",value:function(){if(!0!==this.state.visualInProgress){this.state.visualFinished&&(this.reset(!0),this.setState({visualFinished:!1})),document.querySelector(".algo-heading").innerHTML="A* Algorithm guarantees shortest path!\ud83d\ude0a",this.setState({visualInProgress:!0});var t=this.state.grid,e=t[E][I],n=t[M][N],i=function(t,e,n){var i=[],r=[];if(e===n)return i;for(e.gCost=0,n.hCost=0,i.push(e),r.push(e);r.length>0;){for(var s=r[0],o=1;o<r.length;o++)r[o].fCost!==1/0&&(r[o].fCost<s.fCost?s=r[o]:r[o].fCost===s.fCost&&r[o].hCost<s.hCost&&(s=r[o]));var a=r.indexOf(s);if(a>-1&&r.splice(a,1),s.isVisited=!0,s===n)return i;for(var u=w(s,t),l=0;l<u.length;l++)if(!u[l].isWall){var c=s.gCost+b(s,u[l]);(c<u[l].gCost||-1===r.indexOf(u[l]))&&(u[l].gCost=c,u[l].hCost=b(u[l],n),u[l].fCost=u[l].gCost+u[l].hCost,u[l].previousNode=s,i.push(u[l]),-1===r.indexOf(u[l])&&r.push(u[l]))}}}(t,e,n),r=y(n);this.animateDijkstra(i,r)}}},{key:"reset",value:function(t){if(t){var e=!0,n=!1,i=void 0;try{for(var r,s=this.state.grid[Symbol.iterator]();!(e=(r=s.next()).done);e=!0){var o=r.value,a=!0,u=!1,l=void 0;try{for(var c,h=o[Symbol.iterator]();!(a=(c=h.next()).done);a=!0){var d=c.value;d.isVisited=!1,d.previousNode=null,d.distance=1/0,document.getElementById("node-".concat(d.row,"-").concat(d.col)).innerHTML=" ",d.isWall||d.isStart||d.isFinish||(document.getElementById("node-".concat(d.row,"-").concat(d.col)).className="node node")}}catch(I){u=!0,l=I}finally{try{a||null==h.return||h.return()}finally{if(u)throw l}}}}catch(I){n=!0,i=I}finally{try{e||null==s.return||s.return()}finally{if(n)throw i}}}else{var f=!0,v=!1,g=void 0;try{for(var m,p=this.state.grid[Symbol.iterator]();!(f=(m=p.next()).done);f=!0){var y=m.value,S=!0,w=!1,b=void 0;try{for(var k,P=y[Symbol.iterator]();!(S=(k=P.next()).done);S=!0){var E=k.value;E.isVisited=!1,E.previousNode=null,E.distance=1/0,E.isWall=!1,document.getElementById("node-".concat(E.row,"-").concat(E.col)).innerHTML=" ",E.isStart||E.isFinish||(document.getElementById("node-".concat(E.row,"-").concat(E.col)).className="node node")}}catch(I){w=!0,b=I}finally{try{S||null==P.return||P.return()}finally{if(w)throw b}}}}catch(I){v=!0,g=I}finally{try{f||null==p.return||p.return()}finally{if(v)throw g}}}}},{key:"render",value:function(){var t=this,e=this.state,n=e.grid,i=e.mouseIsPressed;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return t.visualizeDijkstra()}},"Visualize Dijkstra's Algorithm"),r.a.createElement("button",{onClick:function(){return t.visualizeBFS()}},"Visualize BFS Algorithm"),r.a.createElement("button",{onClick:function(){return t.visualizeDFS()}},"Visualize DFS Algorithm"),r.a.createElement("button",{onClick:function(){return t.visualizeAstar()}},"Visualize A* Algorithm"),r.a.createElement("button",{onClick:function(){return t.reset(!0)}},"Reset Board w/ Walls"),r.a.createElement("button",{onClick:function(){return t.reset(!1)}},"Reset Everything"),r.a.createElement("h2",{className:"algo-heading"},"Welcome to algorithm visualizer. Choose your algorithm above."),r.a.createElement("p",null,"You can move the start node(green) and the finish node(red) by clicking and dragging."),r.a.createElement("div",{className:"grid"},n.map((function(e,n){return r.a.createElement("div",{className:"row",key:n},e.map((function(e,n){var s=e.row,o=e.col,a=e.isFinish,u=e.isStart,l=e.isWall;return r.a.createElement(f,{key:n,col:o,isFinish:a,isStart:u,isWall:l,mouseIsPressed:i,onMouseDown:function(e,n){return t.handleMouseDown(e,n)},onMouseEnter:function(e,n){return t.handleMouseEnter(e,n)},onMouseUp:function(){return t.handleMouseUp()},onMouseLeave:function(e,n){return t.handleMouseLeave(e,n)},row:s})})))}))))}}]),e}(i.Component),F=function(){for(var t=[],e=0;e<30;e++){for(var n=[],i=0;i<60;i++)n.push(O(i,e));t.push(n)}return t},O=function(t,e){return{col:t,row:e,isStart:e===E&&t===I,isFinish:e===M&&t===N,distance:1/0,gCost:1/0,hCost:1/0,fCost:1/0,isVisited:!1,isWall:!1,previousNode:null}},C=function(t,e,n){if(e===E&&n===I)return t;if(e===M&&n===N)return t;var i=t.slice(),r=i[e][n],s=P({},r,{isWall:!r.isWall});return i[e][n]=s,i},D=function(t,e,n){var i=t.slice(),r=i[e][n],s=P({},r,{isStart:!r.isStart});return E=e,I=n,i[e][n]=s,i},B=function(t,e,n){var i=t.slice(),r=i[e][n],s=P({},r,{isFinish:!r.isFinish});return M=e,N=n,i[e][n]=s,i};var W=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.6f558c7c.chunk.js.map