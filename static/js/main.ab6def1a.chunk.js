(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(32)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),o=(a(21),a(5)),i=a(38),l=a(14),u=a(35),m=a(40),d=a(36),p=a(39),f=(a(22),function(e){var t=e.disabled,a=e.letter,n=e.handleLetterTileClick;return r.a.createElement("button",{className:"btn c-letter-tile",disabled:t,type:"button",onClick:function(){n(a)}},a)}),E="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),h="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),g=[{question:"What should Kinaxis do?",answer:"Hire Brad Duck",congrats:"Good Idea!"},{question:"What is a Kinaxis' primary product?",answer:"Rapid Response",congrats:"Good thing you got this one right!"},{question:"Fun Kinaxis core value",answer:"Laugh Often",congrats:"A solid life lesson"},{question:'Finish these lyrics: "Never gonna..."',answer:"give you up",congrats:"I am so sorry...."}],v=(a(23),function(e){var t=e.pickLetter,a=e.pickedLetters;return r.a.createElement("div",{className:"c-letter-rack"},h.map(function(e){return r.a.createElement(f,{handleLetterTileClick:t,letter:e,disabled:a.includes(e),key:e})}))}),w=(a(24),function(e){var t=e.points;return r.a.createElement("svg",{id:"hangman-icon",viewBox:"0 0 257 252",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",{id:"stand",transform:"translate(2, 2)"},r.a.createElement("path",{d:"M204.5,44.5 L204.5,1.5",id:"Line"}),r.a.createElement("path",{d:"M203.5,1.5 L90.5,1.5",id:"Line-2"}),r.a.createElement("path",{d:"M90.5,1.5 L90.5,245.502049",id:"Line-5"}),r.a.createElement("path",{d:"M0.5,246.5 L183.502732,246.5",id:"Line-6"})),t>0&&r.a.createElement("circle",{cx:"206",cy:"72",r:"25"}),t>1&&r.a.createElement("path",{d:"M206.5,97.5 L206.5,153.5"}),t>2&&r.a.createElement("path",{d:"M205.5,117.5 L157.5,104.5"}),t>3&&r.a.createElement("path",{d:"M254.5,117.5 L206.5,104.5",transform:"translate(230.5, 111) scale(-1, 1) translate(-230.5, -111) "}),t>4&&r.a.createElement("g",{id:"left-leg",transform:"translate(162, 153)"},r.a.createElement("path",{d:"M44.5,0.5 L10.5,51.5",strokeLinejoin:"round"}),r.a.createElement("path",{d:"M10.5,51.5 L0.5,44.5"})),t>5&&r.a.createElement("g",{transform:"translate(206, 153)"},r.a.createElement("path",{d:"M34.5,0.5 L0.5,51.5",transform:"translate(17.5, 26) scale(-1, 1) translate(-17, -26) "}),r.a.createElement("path",{d:"M44.5,51.5 L34.5,44.5",transform:"translate(39.5, 48) scale(-1, 1) translate(-39.5, -48) "})))}),b=(a(25),function(e){var t=e.phrase;return r.a.createElement("div",{className:"c-question"},r.a.createElement("span",null,t))}),L=(a(26),function(e){var t=e.letter,a=e.show;return r.a.createElement("span",{className:"c-answer-letter"},a&&t)}),k=(a(27),function(e){var t=e.pickedLetters,a=e.word.split("");return r.a.createElement("div",{className:"c-answer-word"},a.map(function(e,a){return r.a.createElement(L,{key:a,letter:e,show:t.includes(e)})}))}),O=(a(28),function(e){var t=e.phrase,a=e.pickedLetters,n=t.split(" ");return r.a.createElement("div",{className:"c-answer"},n.map(function(e,t){return r.a.createElement(k,{key:t,word:e,pickedLetters:a})}))}),N=(a(29),function(e){var t=e.children;return s.a.createPortal(r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"c-dimmer"}),r.a.createElement("div",{className:"c-modal"},t)),document.getElementById("modal-root"))}),j=function(e){var t=e.gameOverMessage,a=e.lostGame,n=e.restart,c=e.startNewPuzzle;return r.a.createElement("div",{className:"c-game-over"},r.a.createElement("span",{className:"c-game-over-title"},"GAME OVER!!"),r.a.createElement("span",{className:"c-game-over-message"},t),r.a.createElement("div",{className:"c-game-over-buttons"},a&&r.a.createElement("button",{className:"btn",onClick:n,type:"button"},"Try again"),!a&&r.a.createElement("button",{className:"btn",onClick:c,type:"button"},"New Puzzle")))},y=a(7),M=a(37),C=a(34),x=a(33),q=function(e,t){return Object(x.a)(new RegExp(t,"ig"),"",e)},z=function(e){return Object(y.a)(Array(e)).map(function(e,t){return t})},B=function(e,t){var a=function(a){t.includes(a.key)&&e(a.key)};Object(n.useEffect)(function(){return window.document.addEventListener("keyup",a),function(){window.document.removeEventListener("keyup",a)}})},G=function(){var e=Object(n.useRef)(g[0]),t=Object(n.useState)(Object(M.a)(1,Object(y.a)(z(g.length)))),a=Object(o.a)(t,2),r=a[0],c=a[1];return[e.current,function(){var t,a=(t=r.length,Math.floor(Math.random()*t));e.current=g[r[a]],r.length>1?c(Object(C.a)(a,1,r)):c(Object(y.a)(z(g.length)))}]},R=(a(30),function(){var e=G(),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),f=Object(o.a)(s,2),h=f[0],g=f[1],L=Object(n.useState)(0),k=Object(o.a)(L,2),y=k[0],M=k[1],C=Object(n.useState)([]),x=Object(o.a)(C,2),z=x[0],R=x[1];Object(n.useEffect)(function(){var e;(e=a.answer.toUpperCase(),Object(i.a)(Object(l.a)(q,e),u.a,m.a,Object(d.a)(0)))(z)?g(a.congrats):6===y&&g("Not quite!  Nice try.")},[z,y]);var U=function(e){a.answer.toUpperCase().includes(e)||M(y+1),R(Object(p.a)(e,z))};B(function(e){h.length||z.includes(e.toUpperCase())||U(e.toUpperCase())},E);var A=function(){M(0),R([]),g(!1)},I=function(){A(),c()},P=6===y;return B(function(){h.length&&(P?A():I())},["Enter"]),r.a.createElement("div",{className:"c-game"},r.a.createElement("h1",{className:"c-title"},"Duck Hangman!"),r.a.createElement(w,{points:y}),r.a.createElement(b,{phrase:a.question}),r.a.createElement(O,{phrase:a.answer.toUpperCase(),pickedLetters:z}),r.a.createElement(v,{pickLetter:U,pickedLetters:z}),h.length>0&&r.a.createElement(N,null,r.a.createElement(j,{gameOverMessage:h,lostGame:P,restart:A,startNewPuzzle:I})))}),U=(a(31),function(){return r.a.createElement("div",{id:"modal-root",className:"App"},r.a.createElement(R,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.ab6def1a.chunk.js.map