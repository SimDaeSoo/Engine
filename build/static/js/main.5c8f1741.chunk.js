(this.webpackJsonpellie=this.webpackJsonpellie||[]).push([[0],{320:function(e,t,n){"use strict";n.r(t);var a,i,r=n(0),c=n.n(r),o=n(35),l=n.n(o),s=n(93),d=n(17),h=n.n(d),u=n(57),f=n(21),b=n(9),g=n(323),j=n(16),v=n(19),w=n(3),p=n(146),m=n.n(p);function x(e){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(h.a.mark((function e(t){var n,a,i,r,c,o,l,s,d;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for("https://simdaesoo.github.io/Ellie/build",n=[],a=[],i=1;i<=62;i++)a.push("tiles/Tile_".concat(i.toString().padStart(2,"0"),".png"));for(r=0;r<=36;r++)a.push("waters/".concat(r.toString().padStart(2,"0"),".png"));for(c=0;c<=0;c++)a.push("backgrounds/".concat(c.toString().padStart(2,"0"),".png"));for(a.push("characters/ellie/idle.png"),o=0,l=a;o<l.length;o++)s=l[o],n.push([s,"".concat("https://simdaesoo.github.io/Ellie/build","/").concat(s)]);return d=0,w.e.shared.onLoad.add((function(){var e=arguments.length<=1?void 0:arguments[1];t(++d/n.length,e.name)})),e.abrupt("return",new Promise((function(e){var t,a=Object(v.a)(n);try{for(a.s();!(t=a.n()).done;){var i,r=t.value;(i=w.e.shared).add.apply(i,Object(j.a)(r))}}catch(c){a.e(c)}finally{a.f()}w.e.shared.load((function(){e()}))})));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){if(i)return i.stage.removeChildren(),i.stage.removeAllListeners(),i;var e=window.devicePixelRatio||1;w.k.SCALE_MODE=w.g.NEAREST,w.k.MIPMAP_TEXTURES=w.f.OFF,w.k.STRICT_TEXTURE_CACHE=!0;var t=new m.a;(i=new w.a({width:window.innerWidth,height:window.innerHeight,sharedLoader:!0,powerPreference:"high-performance",backgroundColor:2105376,backgroundAlpha:0,autoStart:!1,antialias:!1,forceCanvas:!1,preserveDrawingBuffer:!1,resolution:e})).view.className="renderer",i.view.style.width="100%",i.view.style.height="100%",t.dom.style.right="0",t.dom.style.removeProperty("left");var n=document.getElementById("content");n.appendChild(i.view),n.appendChild(t.dom);return window.requestAnimationFrame((function e(){a&&a(),t.update(),i.render(),window.requestAnimationFrame(e)})),i}function S(e){a=e}var k=n(2),C=function(){return Object(k.jsx)("div",{style:{position:"absolute",bottom:0,right:0,color:"#FFFFFF",backgroundColor:"rgba(0,0,0,0.5)",padding:"1px 4px"},className:"noselect",children:Object(k.jsx)("a",{href:"https://github.com/SimDaeSoo",children:"Created by daesoo94"})})},M=n(326),A=n(322),L=n(324),T=n(156),E=function(){var e=Object(b.f)(),t=Object(b.e)(),n=Object(r.useState)(!0),a=Object(f.a)(n,2),i=a[0],c=a[1],o=e.pathname;return Object(k.jsx)(M.a,{collapsible:!0,width:i?0:250,style:{position:"absolute",height:"100%",overflow:"auto",backgroundColor:"#1a1d24"},onClick:function(e){e.stopPropagation()},onTouchStart:function(e){e.stopPropagation()},children:Object(k.jsxs)(A.a,{children:[Object(k.jsx)(A.a.Header,{style:{position:"fixed",top:0,height:"50px",width:i?56:250,zIndex:2},children:Object(k.jsx)(L.a,{children:Object(k.jsx)(L.a.Item,{icon:Object(k.jsx)(T.a,{icon:i?"external-link-square":"gears2"}),onClick:function(e){c(!i)},style:{backgroundColor:"#0f131a"},children:i?"-":"Ellie Engine v0.0.1"})})}),Object(k.jsx)(A.a.Body,{style:{height:"calc(100%-50px)",marginTop:"50px"},children:Object(k.jsxs)(L.a,{activeKey:o,children:[Object(k.jsx)(L.a.Item,{icon:Object(k.jsx)(T.a,{icon:"th2"}),onSelect:function(){return t.push("/")},eventKey:"/",children:"Tilemap With Buffer"}),Object(k.jsx)(L.a.Item,{icon:Object(k.jsx)(T.a,{icon:"th2"}),onSelect:function(){return t.push("/cave-generate")},eventKey:"/cave-generate",children:"Cave Generate"}),Object(k.jsx)(L.a.Item,{icon:Object(k.jsx)(T.a,{icon:"th2"}),onSelect:function(){return t.push("/cave-generate-texture")},eventKey:"/cave-generate-texture",children:"Cave With Texture"}),Object(k.jsx)(L.a.Item,{icon:Object(k.jsx)(T.a,{icon:"th2"}),onSelect:function(){return t.push("/cave-generate-sky")},eventKey:"/cave-generate-sky",children:"Cave With Sky"}),Object(k.jsx)(L.a.Item,{icon:Object(k.jsx)(T.a,{icon:"tint"}),onSelect:function(){return t.push("/liquid-simulation")},eventKey:"/liquid-simulation",children:"Liquid Simulation"}),Object(k.jsx)(L.a.Item,{icon:Object(k.jsx)(T.a,{icon:"tint"}),onSelect:function(){return t.push("/liquid-simulation-2")},eventKey:"/liquid-simulation-2",children:"Liquid Simulation 2"}),Object(k.jsx)(L.a.Item,{icon:Object(k.jsx)(T.a,{icon:"tint"}),onSelect:function(){return t.push("/liquid-stress-test")},eventKey:"/liquid-stress-test",children:"Liquid Stress Test"}),Object(k.jsx)(L.a.Item,{icon:Object(k.jsx)(T.a,{icon:"close"}),onSelect:function(){return t.push("/line-intersection")},eventKey:"/line-intersection",children:"Line Intersection"}),Object(k.jsx)(L.a.Item,{icon:Object(k.jsx)(T.a,{icon:"close"}),onSelect:function(){return t.push("/line-intersection-2")},eventKey:"/line-intersection-2",children:"Line Intersection 2"}),Object(k.jsx)(L.a.Item,{icon:Object(k.jsx)(T.a,{icon:"lightbulb-o"}),onSelect:function(){return t.push("/lighting-area")},eventKey:"/lighting-area",disabled:!0,children:"Lighting Area"}),Object(k.jsx)(L.a.Item,{icon:Object(k.jsx)(T.a,{icon:"lightbulb-o"}),onSelect:function(){return t.push("/lighting-area-2")},eventKey:"/lighting-area-2",disabled:!0,children:"Lighting Area 2"}),Object(k.jsx)(L.a.Item,{icon:Object(k.jsx)(T.a,{icon:"lightbulb-o"}),onSelect:function(){return t.push("/lighting-stress-test")},eventKey:"/lighting-stress-test",disabled:!0,children:"Lighting Stress Test"}),Object(k.jsx)(L.a.Item,{icon:Object(k.jsx)(T.a,{icon:"object-ungroup"}),onSelect:function(){return t.push("/aabb-collision")},eventKey:"/aabb-collision",disabled:!0,children:"AABB Collision"}),Object(k.jsx)(L.a.Item,{icon:Object(k.jsx)(T.a,{icon:"object-ungroup"}),onSelect:function(){return t.push("/aabb-collision-2")},eventKey:"/aabb-collision-2",disabled:!0,children:"AABB Collision 2"}),Object(k.jsx)(L.a.Item,{icon:Object(k.jsx)(T.a,{icon:"object-ungroup"}),onSelect:function(){return t.push("/aabb-stress-test")},eventKey:"/aabb-stress-test",disabled:!0,children:"AABB Stress Test"}),Object(k.jsx)(L.a.Item,{icon:Object(k.jsx)(T.a,{icon:"globe"}),onSelect:function(){return t.push("/sample-world")},eventKey:"/sample-world",disabled:!0,children:"Sample World"})]})})]})})},F=n(325),I=function(e){var t=e.hide,n=e.asset,a=e.percentage;return Object(k.jsxs)("div",{style:{width:"100%",position:"absolute",bottom:"20px",opacity:t?0:1,transitionProperty:"opacity",transitionDuration:"1s"},children:[Object(k.jsxs)("div",{style:{width:"100%",textAlign:"center"},className:"noselect",children:["Loading Asset : ",n]}),Object(k.jsx)(F.a.Line,{className:"notransition",percent:a,status:100===a?"success":"active"})]})};function H(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6710886;e.beginFill(a);for(var i=0;i<t.length;i++)for(var r=0;r<t[i].length;r++)t[i][r][0][0]&&e.drawRect(r*n,i*n,n,n);e.endFill()}function W(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:16711680;e.beginFill(a);var i,r=Object(v.a)(t);try{for(r.s();!(i=r.n()).done;){var c=i.value;e.drawCircle(c[0],c[1],n)}}catch(o){r.e(o)}finally{r.f()}e.endFill()}function q(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{width:1,color:65280};e.lineStyle(n);var a,i=Object(v.a)(t);try{for(i.s();!(a=i.n()).done;){var r=Object(f.a)(a.value,2),c=r[0],o=r[1];e.moveTo.apply(e,Object(j.a)(c)),e.lineTo.apply(e,Object(j.a)(o))}}catch(l){i.e(l)}finally{i.f()}e.endFill(),e.line.reset()}function B(e,t,n){var a=n||{},i=a.splitSize,r=void 0===i?0:i,c=a.density,o=void 0===c?{block:.5,liquid:.5}:c,l=a.clearHeight,s=void 0===l?0:l;if(0===r){for(var d=new ArrayBuffer(e*t*8+16),h=0;h<e*t;h++){var u=new Uint8Array(d,8*h,4),f=new Float32Array(d,8*h+4,1),b=h>e*s&&Math.random()<o.block?1:0;u[0]=b,u[1]=0,u[2]=0,u[3]=0,f[0]=0===b&&Math.random()<o.liquid?1:0}var g=new Float64Array(d,d.byteLength-16,2);return g[0]=t,g[1]=e,[[d]]}if(e%r!==0||t%r!==0)throw new Error("width and height must be perfectly was divided by split size");for(var j=new Array(t/r).fill(!0).map((function(){return new Array(e/r)})),v=0;v<t/r;v++)for(var w=0;w<e/r;w++){for(var p=new ArrayBuffer(8*Math.pow(r,2)+16),m=0;m<Math.pow(r,2);m++){var x=new Uint8Array(p,8*m,4),y=new Float32Array(p,8*m+4,1),O=m>e*s&&Math.random()<o.block?1:0;x[0]=O,x[1]=0,x[2]=0,x[3]=0,y[0]=0===O&&Math.random()<o.liquid?1:0}var S=new Float64Array(p,p.byteLength-16,2);S[0]=r,S[1]=r,j[v][w]=p}return j}function P(e){for(var t=new Float64Array(e[0][0],e[0][0].byteLength-16,2),n=t[0],a=t[1],i=new Array(n*e.length).fill(!0).map((function(){return new Array(a*e[0].length)})),r=0;r<i.length;r++)for(var c=[Math.floor(r/n),r%n],o=c[0],l=c[1],s=0;s<i[r].length;s++){var d=[Math.floor(s/a),s%a],h=d[0],u=d[1];i[r][s]=[new Uint8Array(e[o][h],8*(l*a+u),4),new Float32Array(e[o][h],8*(l*a+u)+4,1)]}return i}function K(e,t){return new Array(t).fill(!0).map((function(){return new Array(e).fill(!0).map((function(){return{diff:0,isStable:!1,stableLevel:0}}))}))}var _=function(e){var t=e.setCallback;return Object(r.useEffect)((function(){t((function(e,t){}));var e=P(B(Math.ceil(window.innerWidth/8),Math.ceil(window.innerHeight/8))),n=O(),a=new w.c;a.clear(),H(a,e),n.stage.addChild(a)}),[t]),Object(k.jsx)(k.Fragment,{})};function Y(e,t,n){for(var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,c=0,o=-a;o<=a;o++)for(var l=-a;l<=a;l++){var s=e+l,d=t+o;(i&&(0!==l||0!==o)&&(s<0||d<0||s>=n[0].length||d>=n.length)||(0!==l||0!==o)&&s>=0&&d>=0&&s<n[0].length&&d<n.length&&n[d][s][0][r])&&c++}return c}function D(e,t){for(var n=new Array(e.length).fill(!0).map((function(){return new Array(e[0].length).fill(!1)})),a=t.deathLimit,i=t.birthLimit,r=t.clearSky,c=t.margin,o=0;o<e.length;o++)for(var l=0;l<e[0].length;l++){var s=Y(l,o,e,1,!r||o>i);e[o][l][0][0]?n[o][l]=!(s<i):n[o][l]=s>a}for(var d=0,h=0;h<n.length;h++)for(var u=0;u<n[0].length;u++){var f=Y(u,h,e,1,!1,1);!d&&f&&(d=h+c),e[h][u][0][0]=n[h][u]?1:0,e[h][u][0][1]=e[h][n[0].length-1-u][0][0]||f>4?1:0,d&&d<=h&&!e[h][n[0].length-1-u][0][0]&&(e[h][u][0][1]=2)}}var z=function(e){var t=e.setCallback;return Object(r.useEffect)((function(){t((function(e,t){}));var e=P(B(Math.ceil(window.innerWidth/8),Math.ceil(window.innerHeight/8))),n=O(),a=new w.c;a.clear(),H(a,e),n.stage.addChild(a);var i=0,r=0;S((function(){i++>=10&&r<10&&(D(e,r<4?{deathLimit:3,birthLimit:5,clearSky:!1,margin:0}:{deathLimit:4,birthLimit:4,clearSky:!1,margin:0}),a.clear(),H(a,e),r++,i=0)}))}),[t]),Object(k.jsx)(k.Fragment,{})};function R(e,t,n){var a=t>0&&e>0&&n[t-1][e-1][0][0]===n[t][e][0][0],i=t>0&&n[t-1][e][0][0]===n[t][e][0][0],r=t>0&&e<n[0].length-1&&n[t-1][e+1][0][0]===n[t][e][0][0],c=e>0&&n[t][e-1][0][0]===n[t][e][0][0],o=e<n[0].length-1&&n[t][e+1][0][0]===n[t][e][0][0],l=t<n.length-1&&e>0&&n[t+1][e-1][0][0]===n[t][e][0][0],s=t<n.length-1&&n[t+1][e][0][0]===n[t][e][0][0],d=t<n.length-1&&e<n[0].length-1&&n[t+1][e+1][0][0]===n[t][e+1][0][0];return!i&&!c&&o&&s?1:!i&&c&&o&&s&&!l&&d?41:!i&&c&&o&&s&&!l&&!d?42:!i&&c&&o&&s&&l&&!d?43:!i&&c&&o&&s?2:!i&&c&&!o&&s?3:i&&c&&o&&s&&a&&r&&l&&!d?4:i&&c&&o&&!s&&!a&&r?51:i&&c&&o&&!s&&a&&!r?53:i&&c&&o&&!s&&!a&&!r?52:i&&c&&o&&!s?5:i&&c&&o&&s&&a&&r&&!l&&d?6:i&&c&&o&&s&&a&&r&&l&&d?12:i&&!c&&o&&s&&!r&&d?36:i&&!c&&o&&s&&!r&&!d?37:i&&!c&&o&&s&&r&&!d?38:i&&!c&&o&&s?11:i&&c&&!o&&s&&a&&!l?44:i&&c&&!o&&s&&!a&&!l?45:i&&c&&!o&&s&&!a&&l?46:i&&c&&!o&&s?13:i&&c&&o&&s&&!a&&r&&!l&&d?17:i&&c&&o&&s&&a&&r&&!l&&!d?18:i&&c&&o&&s&&!a&&r&&l&&!d?19:i&&!c&&o&&!s?21:i&&c&&!o&&!s?23:i&&c&&o&&s&&a&&!r&&l&&d?24:i&&c&&o&&s&&!a&&r&&l&&d?57:i&&c&&o&&s&&a&&!r&&l&&!d?27:i&&c&&o&&s&&!a&&!r&&l&&d?28:i&&c&&o&&s&&a&&!r&&!l&&d?29:i||c||!o||s?!i&&c&&o&&!s?33:i||!c||o||s?!(i&&c&&o&&s)||a||r||l||d?i||c||o||!s?i&&!c&&!o&&s?55:!i||c||o||s?i&&c&&o&&s&&a&&!r&&!l&&!d||i&&c&&o&&s&&!a&&r&&!l&&!d||i&&c&&o&&s&&!a&&!r&&l&&!d||i&&c&&o&&s&&!a&&!r&&!l&&d?35:31:56:54:35:34:32}function N(e,t,n){var a=Math.floor(33-33*Math.min(n[t][e][1][0],1));if(t<n.length-1&&t>0&&e<n[0].length-1&&e>0&&!n[t-1][e][1][0]&&n[t+1][e][1][0]&&(n[t][e-1][1][0]&&n[t-1][e-1][1][0]&&n[t][e-1][1][0]<1&&n[t-1][e-1][1][0]<1&&n[t+1][e+1][1][0]<1||n[t][e+1][1][0]&&n[t-1][e+1][1][0]&&n[t][e+1][1][0]<1&&n[t-1][e+1][1][0]<1&&n[t+1][e-1][1][0]<1)){if(n[t-1][e-1][1][0]&&n[t-1][e+1][1][0]&&(!n[t][e+1][1][0]||n[t][e+1][0][0])&&(!n[t][e-1][1][0]||n[t][e-1][0][0]))return 36;if(n[t-1][e-1][1][0]&&!n[t][e+1][1][0])return 35;if(n[t-1][e+1][1][0]&&!n[t][e-1][1][0])return 34}return a<=1&&(0===t||!n[t-1][e][0][0]&&!n[t-1][e][1][0])?2:t>0&&n[t-1][e][1][0]&&!n[t-1][e][0][0]?0:a}var U=function(e){var t=e.setCallback;return Object(r.useEffect)((function(){t((function(e,t){}));var e=Math.ceil(window.innerWidth/8),n=Math.ceil(window.innerHeight/8),a=P(B(e,n)),i=O(),r=new w.c;r.clear(),H(r,a),i.stage.addChild(r);var c=0,o=0;S((function(){if(c++>=10&&o<10&&(D(a,o<4?{deathLimit:3,birthLimit:5,clearSky:!1,margin:0}:{deathLimit:4,birthLimit:4,clearSky:!1,margin:0}),r.clear(),H(r,a),o++,c=0,10===o)){i.stage.removeChild(r);for(var t=new w.b,l=new Array(n).fill(!0).map((function(){return new Array(e)})),s=0;s<n;s++)for(var d=0;d<e;d++){var h=new w.h(a[s][d][0][0]?w.j.from("tiles/Tile_".concat(R(d,s,a).toString().padStart(2,"0"),".png")):1===a[s][d][0][1]?w.j.from("tiles/Tile_61.png"):2===a[s][d][0][1]?w.j.from("tiles/Tile_62.png"):w.j.EMPTY);h.width=8,h.height=8,h.x=8*d,h.y=8*s,l[s][d]=h,t.addChild(h)}i.stage.addChild(t),t.cacheAsBitmap=!0}}))}),[t]),Object(k.jsx)(k.Fragment,{})},X=function(e){var t=e.setCallback;return Object(r.useEffect)((function(){t((function(e,t){}));var e=Math.ceil(window.innerWidth/8),n=Math.ceil(window.innerHeight/8),a=P(B(e,n,{splitSize:0,clearHeight:Math.round(n/4),density:{block:.5,liquid:.5}})),i=O(),r=new w.c,c=new w.h(w.j.WHITE);c.tint=8900331,c.width=window.innerWidth,c.height=window.innerHeight,c.cacheAsBitmap=!0,r.clear(),H(r,a),i.stage.addChild(r);var o=0,l=0;S((function(){if(o++>=10&&l<10&&(D(a,l<4?{deathLimit:3,birthLimit:5,clearSky:!0,margin:Math.round(n/8)}:{deathLimit:4,birthLimit:4,clearSky:!0,margin:Math.round(n/8)}),r.clear(),H(r,a),l++,o=0,10===l)){i.stage.removeChild(r),i.stage.addChild(c);for(var t=new w.b,s=new Array(n).fill(!0).map((function(){return new Array(e)})),d=0;d<n;d++)for(var h=0;h<e;h++){var u=new w.h(a[d][h][0][0]?w.j.from("tiles/Tile_".concat(R(h,d,a).toString().padStart(2,"0"),".png")):1===a[d][h][0][1]?w.j.from("tiles/Tile_61.png"):2===a[d][h][0][1]?w.j.from("tiles/Tile_62.png"):w.j.EMPTY);u.width=8,u.height=8,u.x=8*h,u.y=8*d,s[d][h]=u,t.addChild(u)}i.stage.addChild(t),t.cacheAsBitmap=!0}}))}),[t]),Object(k.jsx)(k.Fragment,{})},J=h.a.mark(te),G=h.a.mark(ne),Q=.005,V=.125,Z=.005,$=.5;function ee(e,t){var n=e+t[1][0];return n<=1?1:n<2.125?(1+n*V)/1.125:(n+V)/2}function te(e,t,n){var a,i,r,c,o,l,s,d,u,f,b,g,j;return h.a.wrap((function(h){for(;;)switch(h.prev=h.next){case 0:a=0,i=5e3,r=Date.now(),l=0,d=0;case 4:if(!(d<t.length)){h.next=20;break}u=0;case 6:if(!(u<t[0].length)){h.next=17;break}if(t[d][u].diff=0,!(++a>i)){h.next=14;break}if(a=0,!(Date.now()-r>=n)){h.next=14;break}return void(h.next=13);case 13:r=h.sent;case 14:u++,h.next=6;break;case 17:d++,h.next=4;break;case 20:f=0;case 21:if(!(f<e.length)){h.next=66;break}b=0;case 23:if(!(b<e[f].length)){h.next=63;break}if(s=e[f][b],c=s[1][0],o=s[1][0],l=0,!s[0][0]){h.next=30;break}return h.abrupt("continue",60);case 30:if(0!==s[1][0]){h.next=32;break}return h.abrupt("continue",60);case 32:if(!t[f][b].isStable){h.next=34;break}return h.abrupt("continue",60);case 34:if(!(s[1][0]<Q)){h.next=37;break}return s[1][0]=0,h.abrupt("continue",60);case 37:if(f<e.length-1&&!e[f+1][b][0][0]&&(l=ee(s[1][0],e[f+1][b])-e[f+1][b][1][0],e[f+1][b][1][0]>0&&l>Z&&(l*=$),(l=Math.max(l,0))>Math.min(4,s[1][0])&&(l=Math.min(4,s[1][0])),0!==l&&(o-=l,t[f][b].diff-=l,t[f+1][b].diff+=l,t[f+1][b].isStable=!1)),!(o<Q)){h.next=41;break}return t[f][b].diff-=o,h.abrupt("continue",60);case 41:if(b>0&&!e[f][b-1][0][0]&&((l=(o-e[f][b-1][1][0])/4)>Z&&(l*=$),(l=Math.max(l,0))>Math.min(4,o)&&(l=Math.min(4,o)),0!==l&&(o-=l,t[f][b].diff-=l,t[f][b-1].diff+=l,t[f][b-1].isStable=!1)),!(o<Q)){h.next=45;break}return t[f][b].diff-=o,h.abrupt("continue",60);case 45:if(b<e[f].length-1&&!e[f][b+1][0][0]&&((l=(o-e[f][b+1][1][0])/3)>Z&&(l*=$),(l=Math.max(l,0))>Math.min(4,o)&&(l=Math.min(4,o)),0!==l&&(o-=l,t[f][b].diff-=l,t[f][b+1].diff+=l,t[f][b+1].isStable=!1)),!(o<Q)){h.next=49;break}return t[f][b].diff-=o,h.abrupt("continue",60);case 49:if(f>0&&!e[f-1][b][0][0]&&((l=o-ee(o,e[f-1][b]))>Z&&(l*=$),(l=Math.max(l,0))>Math.min(4,o)&&(l=Math.min(4,o)),0!==l&&(o-=l,t[f][b].diff-=l,t[f-1][b].diff+=l,t[f-1][b].isStable=!1)),!(o<Q)){h.next=53;break}return t[f][b].diff-=o,h.abrupt("continue",60);case 53:if(c===o&&++t[f][b].stableLevel>=10?t[f][b].isStable=!0:(f>0&&e[f-1][b]&&(t[f-1][b].isStable=!1),f<e.length-1&&e[f+1][b]&&(t[f+1][b].isStable=!1),b>0&&e[f][b-1]&&(t[f][b-1].isStable=!1),b<e[0].length-1&&e[f][b+1]&&(t[f][b+1].isStable=!1)),!(++a>i)){h.next=60;break}if(a=0,!(Date.now()-r>=n)){h.next=60;break}return void(h.next=59);case 59:r=h.sent;case 60:b++,h.next=23;break;case 63:f++,h.next=21;break;case 66:g=0;case 67:if(!(g<e.length)){h.next=84;break}j=0;case 69:if(!(j<e[g].length)){h.next=81;break}if(e[g][j][1][0]+=t[g][j].diff,e[g][j][1][0]<Q&&(e[g][j][1][0]=0),!(++a>i)){h.next=78;break}if(a=0,!(Date.now()-r>=n)){h.next=78;break}return void(h.next=77);case 77:r=h.sent;case 78:j++,h.next=69;break;case 81:g++,h.next=67;break;case 84:return h.abrupt("return");case 85:case"end":return h.stop()}}),J)}function ne(e,t){var n,a,i=arguments;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=i.length>2&&void 0!==i[2]?i[2]:3,a=te(e,t,n);case 2:return a.next(Date.now()).done&&(a=te(e,t,n)),void(r.next=6);case 6:r.next=2;break;case 8:case"end":return r.stop()}}),G)}var ae=function(e){var t=e.setCallback;return Object(r.useEffect)((function(){t((function(e,t){}));for(var e=Math.ceil(window.innerWidth/8),n=Math.ceil(window.innerHeight/8),a=P(B(e,n,{splitSize:0,clearHeight:Math.round(n/4),density:{block:.5,liquid:.3}})),i=K(e,n),r=0;r<10;r++)D(a,r<4?{deathLimit:3,birthLimit:5,clearSky:!0,margin:Math.round(n/8)}:{deathLimit:4,birthLimit:4,clearSky:!0,margin:Math.round(n/8)});var c=O(),o=new w.b,l=new w.b,s=new w.b,d=new Array(n).fill(!0).map((function(){return new Array(e)})),h=new w.h(w.j.WHITE);h.tint=8900331,h.width=window.innerWidth,h.height=window.innerHeight,h.cacheAsBitmap=!0,c.stage.addChild(h);for(var u=0;u<n;u++)for(var f=0;f<e;f++)if(a[u][f][0][0]){var b=new w.h(w.j.from("tiles/Tile_".concat(R(f,u,a).toString().padStart(2,"0"),".png")));b.width=8,b.height=8,b.x=8*f,b.y=8*u,d[u][f]=b,l.addChild(b)}else{var g=N(f,u,a),j=new w.h(g>=0?w.j.from("waters/".concat(g.toString().padStart(2,"0"),".png")):w.j.EMPTY);if(j.width=8,j.height=8,j.x=8*f,j.y=8*u,d[u][f]=j,s.addChild(j),a[u][f][0][1]){var v=new w.h(1===a[u][f][0][1]?w.j.from("tiles/Tile_61.png"):2===a[u][f][0][1]?w.j.from("tiles/Tile_62.png"):w.j.EMPTY);v.width=8,v.height=8,v.x=8*f,v.y=8*u,o.addChild(v)}}c.stage.addChild(o),c.stage.addChild(l),c.stage.addChild(s),o.cacheAsBitmap=!0,l.cacheAsBitmap=!0;var p=ne(a,i);S((function(){p.next();for(var t=0;t<n;t++)for(var i=0;i<e;i++)if(!a[t][i][0][0]){var r=N(i,t,a);d[t][i].texture=a[t][i][1][0]&&r>=0?w.j.from("waters/".concat(r.toString().padStart(2,"0"),".png")):w.j.EMPTY,d[t][i].alpha=Math.min(.4+.1*a[t][i][1][0],.8)}}))}),[t]),Object(k.jsx)(k.Fragment,{})};function ie(e){var t=new w.b,n=new w.c,a=new w.i(e,{fontSize:13,fill:16777215});return a.x=1,a.y=1,n.beginFill(0,.5),n.drawRect(0,0,a.width+2,a.height+2),n.endFill(),t.addChild(n),t.addChild(a),{container:t,label:a}}var re=function(e){var t=e.setCallback;return Object(r.useEffect)((function(){for(var e=Math.ceil(window.innerWidth/8),n=Math.ceil(window.innerHeight/8),a=P(B(e,n,{splitSize:0,clearHeight:Math.round(n/4),density:{block:.5,liquid:0}})),i=K(e,n),r=0;r<10;r++)D(a,r<4?{deathLimit:3,birthLimit:5,clearSky:!0,margin:Math.round(n/8)}:{deathLimit:4,birthLimit:4,clearSky:!0,margin:Math.round(n/8)});t((function(t,i){for(var r=[Math.floor(t/8),Math.floor(i/8)],c=r[0],o=r[1],l=-3;l<=3;l++)for(var s=-3;s<=3;s++)c+s>=0&&c+s<e&&o+l>=0&&o+l<n&&!a[o+l][c+s][0][0]&&(a[o+l][c+s][1][0]+=1)}));var c=O(),o=ie("Click to create water").container;o.x=Math.round(window.innerWidth/2-o.width/2),o.y=60;var l=new w.b,s=new w.b,d=new w.b,h=new Array(n).fill(!0).map((function(){return new Array(e)})),u=new w.h(w.j.WHITE);u.tint=8900331,u.width=window.innerWidth,u.height=window.innerHeight,u.cacheAsBitmap=!0,c.stage.addChild(u);for(var f=0;f<n;f++)for(var b=0;b<e;b++)if(a[f][b][0][0]){var g=new w.h(w.j.from("tiles/Tile_".concat(R(b,f,a).toString().padStart(2,"0"),".png")));g.width=8,g.height=8,g.x=8*b,g.y=8*f,h[f][b]=g,s.addChild(g)}else{var j=N(b,f,a),v=new w.h(j>=0?w.j.from("waters/".concat(j.toString().padStart(2,"0"),".png")):w.j.EMPTY);if(v.width=8,v.height=8,v.x=8*b,v.y=8*f,h[f][b]=v,d.addChild(v),a[f][b][0][1]){var p=new w.h(1===a[f][b][0][1]?w.j.from("tiles/Tile_61.png"):2===a[f][b][0][1]?w.j.from("tiles/Tile_62.png"):w.j.EMPTY);p.width=8,p.height=8,p.x=8*b,p.y=8*f,l.addChild(p)}}c.stage.addChild(l),c.stage.addChild(s),c.stage.addChild(d),c.stage.addChild(o),l.cacheAsBitmap=!0,s.cacheAsBitmap=!0;var m=ne(a,i);S((function(){m.next();for(var t=0;t<n;t++)for(var i=0;i<e;i++)if(!a[t][i][0][0]){var r=N(i,t,a);h[t][i].texture=a[t][i][1][0]&&r>=0?w.j.from("waters/".concat(r.toString().padStart(2,"0"),".png")):w.j.EMPTY,h[t][i].alpha=Math.min(.4+.1*a[t][i][1][0],.8)}}))}),[t]),Object(k.jsx)(k.Fragment,{})},ce=function(e){var t=e.setCallback;return Object(r.useEffect)((function(){var e=Math.ceil(window.innerWidth/8),n=Math.ceil(window.innerHeight/8),a=P(B(e,n,{splitSize:0,clearHeight:0,density:{block:0,liquid:1}})),i=K(e,n);t((function(t,i){for(var r=[Math.floor(t/8),Math.floor(i/8)],c=r[0],o=r[1],l=-5;l<=5;l++)for(var s=-5;s<=5;s++)c+s>=0&&c+s<e&&o+l>=0&&o+l<n&&!a[o+l][c+s][0][0]&&(a[o+l][c+s][1][0]+=1)}));var r=O(),c=ie("Click to create water").container;c.x=Math.round(window.innerWidth/2-c.width/2),c.y=60;for(var o=new w.b,l=new Array(n).fill(!0).map((function(){return new Array(e)})),s=0;s<n;s++)for(var d=0;d<e;d++){var h=N(d,s,a),u=new w.h(h>=0?w.j.from("waters/".concat(h.toString().padStart(2,"0"),".png")):w.j.EMPTY);u.width=8,u.height=8,u.x=8*d,u.y=8*s,l[s][d]=u,o.addChild(u)}r.stage.addChild(o),r.stage.addChild(c);var f=ne(a,i);S((function(){f.next();for(var t=0;t<n;t++)for(var i=0;i<e;i++)if(!a[t][i][0][0]){var r=N(i,t,a);l[t][i].texture=a[t][i][1][0]&&r>=0?w.j.from("waters/".concat(r.toString().padStart(2,"0"),".png")):w.j.EMPTY,l[t][i].alpha=Math.min(.4+.1*a[t][i][1][0],.8)}}))}),[t]),Object(k.jsx)(k.Fragment,{})};function oe(e,t){var n=(e[1][0]-e[0][0])*(t[1][1]-t[0][1])-(t[1][0]-t[0][0])*(e[1][1]-e[0][1]);if(0===n)return-1;var a=((t[1][1]-t[0][1])*(t[1][0]-e[0][0])+(t[0][0]-t[1][0])*(t[1][1]-e[0][1]))/n,i=((e[0][1]-e[1][1])*(t[1][0]-e[0][0])+(e[1][0]-e[0][0])*(t[1][1]-e[0][1]))/n;return 0<=a&&a<=1&&0<=i&&i<=1?a:-1}var le,se=function(e){var t=e.setCallback;return Object(r.useEffect)((function(){var e;t((function(e,t){}));var n=O(),a=new w.c,i=[Math.floor(window.innerWidth/4),Math.floor(window.innerHeight/4)],r=i[0],c=i[1],o=[[r,c],[3*r,3*c]],l=[[3*r,c],[r,3*c]],s=[].concat(o,l);n.stage.addChild(a);var d,h=Object(v.a)(s);try{for(h.s();!(d=h.n()).done;){var u,f=d.value,b=ie("(".concat(f,")")).container;(u=b.position).set.apply(u,Object(j.a)(f)),n.stage.addChild(b)}}catch(x){h.e(x)}finally{h.f()}a.clear(),q(a,[o,l],{width:1,color:39168}),W(a,s,2);var g=oe(o,l),p=[o[0][0]+(o[1][0]-o[0][0])*g,o[0][1]+(o[1][1]-o[0][1])*g];W(a,[p],4,16755302);var m=ie("Intersect at (".concat(p[0].toFixed(2),",").concat(p[1].toFixed(2),")")).container;(e=m.position).set.apply(e,p),n.stage.addChild(m)}),[t]),Object(k.jsx)(k.Fragment,{})},de=[[.65125,.73125],[.6275,.7375],[.61,.735],[.5925,.72625],[.57875,.71875],[.56625,.71375],[.54875,.715],[.53125,.72],[.515,.7225],[.50125,.71625],[.48125,.7175],[.46375,.72625],[.44875,.73],[.4375,.7325],[.42625,.7325],[.425,.73625],[.43375,.755],[.44375,.76375],[.45625,.7725],[.4625,.77625],[.48,.7825],[.49875,.785],[.5125,.785],[.5275,.78125],[.53625,.78125],[.55125,.78375],[.56625,.785],[.5775,.785],[.5875,.785],[.60125,.7775],[.6175,.76375],[.6375,.74375],[.64625,.73625],[.65125,.73125],[.6375,.71875],[.6225,.7075],[.60875,.695],[.6,.68625],[.585,.67125],[.57875,.6675],[.5675,.66125],[.55875,.6625],[.54875,.665],[.535,.67375],[.52625,.67375],[.5125,.6675],[.50625,.66375],[.49125,.66625],[.47375,.67375],[.45875,.68875],[.44375,.7],[.43375,.70875],[.42125,.7175],[.4125,.71875],[.40375,.71875],[.4,.71625],[.405,.72125],[.41,.72375],[.41875,.7275],[.435,.72625],[.45125,.7225],[.47625,.6975],[.49125,.685],[.505,.66],[.5125,.63875],[.51375,.61875],[.50625,.60125],[.4975,.595],[.485,.59125],[.47375,.58875],[.4675,.58875],[.4625,.59125],[.4675,.6],[.4775,.60375],[.49,.61],[.505,.61125],[.5225,.6125],[.53375,.6125],[.545,.60625],[.55625,.59625],[.56625,.5925],[.575,.5925],[.5825,.59375],[.565,.605],[.55375,.61],[.54125,.61125],[.5325,.6125],[.565,.6125],[.58375,.61],[.59375,.60125],[.59875,.59375],[.59875,.58375],[.59625,.5725],[.5925,.565],[.58375,.55375],[.57,.54],[.565,.525],[.56125,.49],[.55875,.39],[.56125,.3375],[.5725,.29625],[.585,.2675],[.59625,.24625],[.615,.22375],[.64375,.20375],[.66875,.195],[.6875,.19],[.70875,.18875],[.7325,.19],[.7525,.1925],[.78875,.20375],[.81875,.21875],[.835,.2325],[.84375,.24625],[.85,.2675],[.8525,.2875],[.84875,.30375],[.83875,.32375],[.82625,.3375],[.8025,.35375],[.77125,.37375],[.74375,.38],[.71125,.3825],[.6825,.385],[.6625,.38375],[.64625,.38125],[.62875,.37875],[.615,.3725],[.6075,.3675],[.62625,.34375],[.64125,.33125],[.66125,.31375],[.68875,.3],[.715,.295],[.7525,.2925],[.77375,.29375],[.79625,.3],[.8125,.31],[.8275,.32375],[.83875,.33625],[.85,.35375],[.86875,.39125],[.87875,.4475],[.87625,.49375],[.87625,.54375],[.865,.5975],[.84625,.6525],[.82875,.69625],[.81125,.7375],[.77375,.7925],[.75,.815],[.70625,.85375],[.67125,.87875],[.6375,.89875],[.6075,.91125],[.57625,.9225],[.54375,.925],[.49875,.9275],[.48,.92375],[.45,.9175],[.4225,.90125],[.38625,.88375],[.3475,.8525],[.32,.8325],[.305,.825],[.295,.82125],[.28125,.81875],[.26125,.81875],[.245,.82375],[.22,.83125],[.20625,.84125],[.17875,.84625],[.1675,.8475],[.1575,.8525],[.1375,.85],[.12,.84375],[.09625,.83375],[.0675,.8175],[.04625,.8075],[.035,.80125],[.02625,.7975],[.0225,.7975],[.05625,.77625],[.09125,.7575],[.11375,.74625],[.1475,.7425],[.1625,.7425],[.18,.745],[.20125,.74875],[.21875,.75625],[.24,.76625],[.26375,.78],[.2825,.79375],[.30375,.81125],[.32125,.82625],[.32875,.83625],[.27375,.76875],[.2525,.72875],[.25125,.70875],[.265,.685],[.29375,.66625],[.32375,.6525],[.35375,.635],[.375,.61875],[.39625,.59375],[.4175,.5625],[.4275,.53625],[.43125,.5175],[.43125,.51125],[.4125,.52875],[.3975,.53375],[.3675,.53625],[.36,.53625],[.33375,.5375],[.315,.5425],[.29625,.5475],[.27875,.5625],[.25875,.58375],[.245,.60125],[.2375,.62125],[.2375,.645],[.2375,.6775],[.24125,.69625],[.24625,.71375],[.24875,.72375],[.25125,.72625],[.2325,.65],[.23125,.605],[.2325,.575],[.23375,.53625],[.235,.51],[.23625,.49625],[.26875,.5],[.28875,.49625],[.31375,.48875],[.34,.47875],[.36375,.465],[.3775,.4475],[.39875,.43],[.42375,.41375],[.4475,.40125],[.47,.38375],[.485,.3625],[.49375,.33625],[.4975,.31],[.48375,.27875],[.46625,.26],[.45,.25125],[.4325,.25],[.41,.25125],[.39125,.25875],[.35875,.27875],[.335,.2875],[.315,.29125],[.2975,.29],[.28125,.28125],[.2575,.265],[.23,.245],[.20375,.23125],[.1825,.225],[.1675,.22375],[.15875,.2225],[.18625,.20375],[.23375,.19],[.2625,.185],[.29625,.1775],[.3275,.1775],[.35625,.18375],[.375,.195],[.3925,.21125],[.40875,.22875],[.41875,.24875],[.42375,.2725],[.4275,.30375],[.43125,.33125],[.42375,.35125],[.40625,.36875],[.38,.37875],[.3625,.38375],[.335,.38],[.32,.365],[.3025,.34625],[.2875,.33875],[.27375,.33625],[.2375,.33625],[.21625,.32875],[.19625,.32125],[.1775,.3075],[.16125,.29375],[.14875,.27375],[.13875,.25625],[.135,.24],[.1425,.235],[.16125,.23625],[.1725,.24375],[.18875,.25875],[.1975,.2725],[.21375,.28875],[.22375,.2975],[.24125,.30375],[.255,.3075],[.2775,.3075],[.29875,.3075],[.30875,.31375],[.32125,.325],[.3275,.34625],[.3275,.3725],[.325,.395],[.32125,.4075],[.31625,.43125],[.31375,.45],[.305,.47],[.29,.485],[.27375,.4875],[.24875,.4875],[.2325,.485],[.21875,.475],[.21,.4625],[.1975,.44],[.18875,.405],[.1825,.37625],[.17375,.35125],[.16,.32375],[.14375,.2975],[.125,.27625],[.115,.26375],[.0975,.25375],[.08625,.25125],[.07375,.2525],[.06625,.255],[.0625,.26875],[.0625,.2825],[.07125,.295],[.0775,.3025],[.0925,.3175],[.10125,.3275],[.1125,.3375],[.1225,.35375],[.12625,.3725],[.12875,.3925],[.13375,.41125],[.14125,.425],[.1525,.44],[.1675,.455],[.18,.46625],[.1975,.47625],[.215,.4875],[.2275,.48875],[.24375,.49375],[.25375,.495],[.27875,.49125],[.2925,.4875],[.31125,.47375],[.34,.44375],[.34375,.415],[.35125,.38875],[.35625,.35625],[.36375,.32375],[.36875,.2925],[.3675,.26],[.3625,.24125],[.355,.22625],[.34125,.21125],[.33,.20375],[.30875,.19625],[.29125,.195],[.27625,.1975],[.265,.2],[.2575,.20875],[.2575,.22375],[.26,.23875],[.26875,.24875],[.27875,.25375],[.2925,.25875],[.30625,.26125],[.32125,.25875],[.32875,.255],[.3375,.24875],[.3425,.24125],[.34125,.23125],[.32875,.22],[.31875,.215],[.3025,.21],[.2925,.20875],[.2825,.2125],[.28125,.225],[.28875,.23375],[.2975,.23625],[.30875,.2375],[.315,.23375],[.315,.2275],[.31125,.2225],[.305,.22],[.29875,.22125],[.29625,.225],[.29625,.22625]],he=function(e){var t=e.setCallback;return Object(r.useEffect)((function(){for(var e=!0,n=[window.innerWidth,window.innerHeight],a=n[0],i=n[1],r=a<i?i:a,c=[],o=de.map((function(e){var t=Object(f.a)(e,2),n=t[0],c=t[1];return[n*(r/2e3*900)+a/2-r/2e3*450,c*(r/2e3*900)+i/2-r/2e3*500]})),l=0;l<o.length-1;l++)c.push([o[l],o[l+1]]);var s=O(),d=new w.c,h=ie("Click to move line").container;h.x=Math.round(window.innerWidth/2-h.width/2),h.y=60,s.stage.addChild(d);var u=[[Math.round(a/2),Math.round(i/2)],[a,Math.round(i/2)]],b=ie("(".concat(u[0],")")).container,g=ie("(".concat(u[1],")")).container;s.stage.addChild(b),s.stage.addChild(g),s.stage.addChild(h),t((function(t,n){u[1][0]=t,u[1][1]=n,e=!0}));var p=[];S((function(){var t,n;if(e){var a,i=[],r=Object(v.a)(c);try{for(r.s();!(a=r.n()).done;){var o=a.value,l=oe(u,o);l>=0&&l<=1&&i.push([u[0][0]+(u[1][0]-u[0][0])*l,u[0][1]+(u[1][1]-u[0][1])*l])}}catch(C){r.e(C)}finally{r.f()}d.clear(),q(d,c,{width:2,color:5592405,cap:w.d.ROUND}),q(d,[u],{width:1,color:39168}),W(d,u,2,16711680),W(d,i,4,16755302);var h,f=Object(v.a)(p);try{for(f.s();!(h=f.n()).done;){var m=h.value;s.stage.removeChild(m)}}catch(C){f.e(C)}finally{f.f()}for(var x=0,y=i;x<y.length;x++){var O,S=y[x],k=ie("Intersect at (".concat(Math.round(S[0]),",").concat(Math.round(S[1]),")")).container;(O=k.position).set.apply(O,Object(j.a)(S)),s.stage.addChild(k),p.push(k)}(t=b.position).set.apply(t,Object(j.a)(u[0])),(n=g.position).set.apply(n,Object(j.a)(u[1])),e=!1}}))}),[t]),Object(k.jsx)(k.Fragment,{})},ue=function(){var e=Object(r.useState)(0),t=Object(f.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(""),c=Object(f.a)(i,2),o=c[0],l=c[1],s=Object(r.useState)(!1),d=Object(f.a)(s,2),j=d[0],v=d[1];return Object(r.useEffect)((function(){Object(u.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(e){var t=[e.targetTouches[0].clientX,e.targetTouches[0].clientY];le&&le(t[0],t[1])},n=function(e){var t=[e.clientX,e.clientY];le&&le(t[0],t[1])},window.removeEventListener("touchstart",t),window.removeEventListener("click",n),window.addEventListener("touchstart",t),window.addEventListener("click",n),v(!1),O(),e.next=10,x((function(e,t){a(Math.round(100*e)),l(t)}));case 10:v(!0);case 11:case"end":return e.stop()}}),e)})))()}),[]),Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(g.a,{style:{height:"100%"},children:[Object(k.jsxs)(g.a,{id:"content",children:[j&&Object(k.jsx)(b.a,{exact:!0,path:"/",render:function(){return Object(k.jsx)(_,{setCallback:function(e){return le=e}})}}),j&&Object(k.jsx)(b.a,{exact:!0,path:"/cave-generate",render:function(){return Object(k.jsx)(z,{setCallback:function(e){return le=e}})}}),j&&Object(k.jsx)(b.a,{exact:!0,path:"/cave-generate-texture",render:function(){return Object(k.jsx)(U,{setCallback:function(e){return le=e}})}}),j&&Object(k.jsx)(b.a,{exact:!0,path:"/cave-generate-sky",render:function(){return Object(k.jsx)(X,{setCallback:function(e){return le=e}})}}),j&&Object(k.jsx)(b.a,{exact:!0,path:"/liquid-simulation",render:function(){return Object(k.jsx)(ae,{setCallback:function(e){return le=e}})}}),j&&Object(k.jsx)(b.a,{exact:!0,path:"/liquid-simulation-2",render:function(){return Object(k.jsx)(re,{setCallback:function(e){return le=e}})}}),j&&Object(k.jsx)(b.a,{exact:!0,path:"/liquid-stress-test",render:function(){return Object(k.jsx)(ce,{setCallback:function(e){return le=e}})}}),j&&Object(k.jsx)(b.a,{exact:!0,path:"/line-intersection",render:function(){return Object(k.jsx)(se,{setCallback:function(e){return le=e}})}}),j&&Object(k.jsx)(b.a,{exact:!0,path:"/line-intersection-2",render:function(){return Object(k.jsx)(he,{setCallback:function(e){return le=e}})}}),Object(k.jsx)(C,{})]}),Object(k.jsx)(I,{hide:j,asset:o,percentage:n}),Object(k.jsx)(E,{})]})})};n(319);l.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(s.a,{children:Object(k.jsx)(ue,{})})}),document.getElementById("root"))}},[[320,1,2]]]);
//# sourceMappingURL=main.5c8f1741.chunk.js.map