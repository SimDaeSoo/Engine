(this.webpackJsonpEngine=this.webpackJsonpEngine||[]).push([[0],{319:function(t,e,n){"use strict";n.r(e);var i,a,r=n(0),c=n.n(r),o=n(35),s=n.n(o),l=n(92),d=n(9),h=n(322),u=n(2),f=function(){return Object(u.jsx)("div",{style:{position:"absolute",bottom:0,right:0,color:"#FFFFFF",backgroundColor:"rgba(0,0,0,0.5)",padding:"1px 4px"},className:"noselect",children:Object(u.jsx)("a",{href:"https://github.com/SimDaeSoo",children:"Created by daesoo94"})})},b=n(11),j=n(325),g=n(321),p=n(323),w=n(155),m=function(){var t=Object(d.f)(),e=Object(d.e)(),n=Object(r.useState)(!0),i=Object(b.a)(n,2),a=i[0],c=i[1],o=t.pathname;return Object(u.jsx)(j.a,{collapsible:!0,width:a?0:250,style:{position:"absolute",height:"100%",overflow:"auto",backgroundColor:"#1a1d24",zIndex:1},children:Object(u.jsxs)(g.a,{children:[Object(u.jsx)(g.a.Header,{style:{position:"fixed",top:0,height:"50px",width:a?56:250,zIndex:2},children:Object(u.jsx)(p.a,{children:Object(u.jsx)(p.a.Item,{icon:Object(u.jsx)(w.a,{icon:a?"external-link-square":"gears2"}),onClick:function(t){t.stopPropagation(),c(!a)},style:{backgroundColor:"#0f131a"},children:a?"-":"Ellie Engine v0.0.1"})})}),Object(u.jsx)(g.a.Body,{style:{height:"calc(100%-50px)",marginTop:"50px"},children:Object(u.jsxs)(p.a,{activeKey:o,children:[Object(u.jsx)(p.a.Item,{icon:Object(u.jsx)(w.a,{icon:"th2"}),onSelect:function(){return e.push("/")},eventKey:"/",children:"Tilemap With Buffer"}),Object(u.jsx)(p.a.Item,{icon:Object(u.jsx)(w.a,{icon:"th2"}),onSelect:function(){return e.push("/cave-generate")},eventKey:"/cave-generate",children:"Cave Generate"}),Object(u.jsx)(p.a.Item,{icon:Object(u.jsx)(w.a,{icon:"th2"}),onSelect:function(){return e.push("/cave-generate-texture")},eventKey:"/cave-generate-texture",children:"Cave With Texture"}),Object(u.jsx)(p.a.Item,{icon:Object(u.jsx)(w.a,{icon:"tint"}),onSelect:function(){return e.push("/liquid-simulation")},eventKey:"/liquid-simulation",children:"Liquid Simulation"}),Object(u.jsx)(p.a.Item,{icon:Object(u.jsx)(w.a,{icon:"tint"}),onSelect:function(){return e.push("/liquid-simulation-2")},eventKey:"/liquid-simulation-2",children:"Liquid Simulation 2"}),Object(u.jsx)(p.a.Item,{icon:Object(u.jsx)(w.a,{icon:"tint"}),onSelect:function(){return e.push("/liquid-stress-test")},eventKey:"/liquid-stress-test",children:"Liquid Stress Test"}),Object(u.jsx)(p.a.Item,{icon:Object(u.jsx)(w.a,{icon:"close"}),onSelect:function(){return e.push("/line-intersection")},eventKey:"/line-intersection",disabled:!0,children:"Line Intersection"}),Object(u.jsx)(p.a.Item,{icon:Object(u.jsx)(w.a,{icon:"square-o"}),onSelect:function(){return e.push("/viewport")},eventKey:"/viewport",disabled:!0,children:"Viewport"}),Object(u.jsx)(p.a.Item,{icon:Object(u.jsx)(w.a,{icon:"lightbulb-o"}),onSelect:function(){return e.push("/lighting-area")},eventKey:"/lighting-area",disabled:!0,children:"Lighting Area"}),Object(u.jsx)(p.a.Item,{icon:Object(u.jsx)(w.a,{icon:"lightbulb-o"}),onSelect:function(){return e.push("/lighting-area-2")},eventKey:"/lighting-area-2",disabled:!0,children:"Lighting Area 2"}),Object(u.jsx)(p.a.Item,{icon:Object(u.jsx)(w.a,{icon:"lightbulb-o"}),onSelect:function(){return e.push("/lighting-stress-test")},eventKey:"/lighting-stress-test",disabled:!0,children:"Lighting Stress Test"}),Object(u.jsx)(p.a.Item,{icon:Object(u.jsx)(w.a,{icon:"lightbulb-o"}),onSelect:function(){return e.push("/lighting-with-viewport")},eventKey:"/lighting-with-viewport",disabled:!0,children:"Lighting With Viewport"}),Object(u.jsx)(p.a.Item,{icon:Object(u.jsx)(w.a,{icon:"object-ungroup"}),onSelect:function(){return e.push("/aabb-collision")},eventKey:"/aabb-collision",disabled:!0,children:"AABB Collision"}),Object(u.jsx)(p.a.Item,{icon:Object(u.jsx)(w.a,{icon:"object-ungroup"}),onSelect:function(){return e.push("/aabb-collision-2")},eventKey:"/aabb-collision-2",disabled:!0,children:"AABB Collision 2"}),Object(u.jsx)(p.a.Item,{icon:Object(u.jsx)(w.a,{icon:"object-ungroup"}),onSelect:function(){return e.push("/aabb-stress-test")},eventKey:"/aabb-stress-test",disabled:!0,children:"AABB Stress Test"}),Object(u.jsx)(p.a.Item,{icon:Object(u.jsx)(w.a,{icon:"globe"}),onSelect:function(){return e.push("/sample-world")},eventKey:"/sample-world",disabled:!0,children:"Sample World 1"})]})})]})})},v=n(10),x=n.n(v),O=n(13),y=n(4),S=n(154),M=n(153),A=n.n(M);function C(t){return L.apply(this,arguments)}function L(){return(L=Object(O.a)(x.a.mark((function t(e){var n,i,a,r,c,o,s,l,d,h,u;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for("https://simdaesoo.github.io/Engine/build",n=[],i=[],a=1;a<=61;a++)i.push("tiles/Tile_".concat(a.toString().padStart(2,"0"),".png"));for(r=0;r<=36;r++)i.push("waters/".concat(r.toString().padStart(2,"0"),".png"));for(c=0,o=i;c<o.length;c++)s=o[c],n.push([s,"".concat("https://simdaesoo.github.io/Engine/build","/").concat(s)]);l=0,d=x.a.mark((function t(){var i;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=u[h],t.prev=1,t.next=4,new Promise((function(t){var e;(e=y.d.shared).add.apply(e,Object(S.a)(i)).load((function(){t()}))}));case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(1);case 8:l++,e(l/n.length,i[0]);case 10:case"end":return t.stop()}}),t,null,[[1,6]])})),h=0,u=n;case 9:if(!(h<u.length)){t.next=14;break}return t.delegateYield(d(),"t0",11);case 11:h++,t.next=9;break;case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(){if(a)return a.stage.removeAllListeners(),a.stage.removeChildren(),a;var t=window.devicePixelRatio||1;y.j.SCALE_MODE=y.f.NEAREST,y.j.MIPMAP_TEXTURES=y.e.OFF,y.j.STRICT_TEXTURE_CACHE=!0;var e=new A.a;(a=new y.a({width:window.innerWidth,height:window.innerHeight,sharedLoader:!0,powerPreference:"high-performance",backgroundColor:2105376,backgroundAlpha:0,autoStart:!1,antialias:!1,forceCanvas:!1,preserveDrawingBuffer:!1,resolution:t})).view.className="renderer",a.view.style.width="100%",a.view.style.height="100%",e.dom.style.right="0",e.dom.style.removeProperty("left");var n=document.getElementById("content");n.appendChild(a.view),n.appendChild(e.dom);return window.requestAnimationFrame((function t(){i&&i(),e.update(),a.render(),window.requestAnimationFrame(t)})),a}function k(t){i=t}function T(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8;t.beginFill(6710886);for(var i=0;i<e.length;i++)for(var a=0;a<e[i].length;a++)e[i][a][0][0]&&t.drawRect(a*n,i*n,n,n);t.endFill()}function F(t,e,n){var i=n||{},a=i.splitSize,r=void 0===a?0:a,c=i.density,o=void 0===c?{block:.5,liquid:.5}:c;if(0===r){for(var s=new ArrayBuffer(t*e*8+16),l=0;l<t*e;l++){var d=new Uint8Array(s,8*l,4),h=new Float32Array(s,8*l+4,1),u=Math.random()<o.block?1:0;d[0]=u,d[1]=0,d[2]=0,d[3]=0,h[0]=0===u&&Math.random()<o.liquid?1:0}var f=new Float64Array(s,s.byteLength-16,2);return f[0]=e,f[1]=t,[[s]]}if(t%r!==0||e%r!==0)throw new Error("width and height must be perfectly was divided by split size");for(var b=new Array(e/r).fill(!0).map((function(){return new Array(t/r)})),j=0;j<e/r;j++)for(var g=0;g<t/r;g++){for(var p=new ArrayBuffer(8*Math.pow(r,2)+16),w=0;w<Math.pow(r,2);w++){var m=new Uint8Array(p,8*w,4),v=new Float32Array(p,8*w+4,1),x=Math.random()<o.block?1:0;m[0]=x,m[1]=0,m[2]=0,m[3]=0,v[0]=0===x&&Math.random()<o.liquid?1:0}var O=new Float64Array(p,p.byteLength-16,2);O[0]=r,O[1]=r,b[j][g]=p}return b}function I(t){for(var e=new Float64Array(t[0][0],t[0][0].byteLength-16,2),n=e[0],i=e[1],a=new Array(n*t.length).fill(!0).map((function(){return new Array(i*t[0].length)})),r=0;r<a.length;r++)for(var c=[Math.floor(r/n),r%n],o=c[0],s=c[1],l=0;l<a[r].length;l++){var d=[Math.floor(l/i),l%i],h=d[0],u=d[1];a[r][l]=[new Uint8Array(t[o][h],8*(s*i+u),4),new Float32Array(t[o][h],8*(s*i+u)+4,1)]}return a}var q=function(){return Object(r.useEffect)((function(){Object(O.a)(x.a.mark((function t(){var e,n,i,a,r,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=Math.ceil(window.innerWidth/8),n=Math.ceil(window.innerHeight/8),i=F(e,n),a=I(i),r=E(),(c=new y.c).clear(),T(c,a),r.stage.addChild(c),k((function(){}));case 10:case"end":return t.stop()}}),t)})))()}),[]),Object(u.jsx)(u.Fragment,{})};function B(t,e,n){for(var i=0,a=-1;a<=1;a++)for(var r=-1;r<=1;r++){var c=t+r,o=e+a;0===r&&0===a||(c<0||o<0||c>=n[0].length||o>=n.length||n[o][c][0][0])&&i++}return i}function P(t,e){for(var n=new Array(t.length).fill(!0).map((function(){return new Array(t[0].length).fill(!1)})),i=e.deathLimit,a=e.birthLimit,r=0;r<t.length;r++)for(var c=0;c<t[0].length;c++){var o=B(c,r,t);t[r][c][0][0]?n[r][c]=!(o<a):n[r][c]=o>i}for(var s=0;s<n.length;s++)for(var l=0;l<n[0].length;l++)t[s][l][0][0]=n[s][l]?1:0}var K=function(){return Object(r.useEffect)((function(){Object(O.a)(x.a.mark((function t(){var e,n,i,a,r,c,o,s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=Math.ceil(window.innerWidth/8),n=Math.ceil(window.innerHeight/8),i=F(e,n),a=I(i),r=E(),(c=new y.c).clear(),T(c,a),r.stage.addChild(c),o=0,s=0,k((function(){o++>=10&&s<10&&(P(a,s<4?{deathLimit:3,birthLimit:5}:{deathLimit:4,birthLimit:4}),c.clear(),T(c,a),s++,o=0)}));case 12:case"end":return t.stop()}}),t)})))()}),[]),Object(u.jsx)(u.Fragment,{})},W=n(324);function _(t,e,n){var i=e>0&&t>0&&n[e-1][t-1][0][0]===n[e][t][0][0],a=e>0&&n[e-1][t][0][0]===n[e][t][0][0],r=e>0&&t<n[0].length-1&&n[e-1][t+1][0][0]===n[e][t][0][0],c=t>0&&n[e][t-1][0][0]===n[e][t][0][0],o=t<n[0].length-1&&n[e][t+1][0][0]===n[e][t][0][0],s=e<n.length-1&&t>0&&n[e+1][t-1][0][0]===n[e][t][0][0],l=e<n.length-1&&n[e+1][t][0][0]===n[e][t][0][0],d=e<n.length-1&&t<n[0].length-1&&n[e+1][t+1][0][0]===n[e][t+1][0][0];return!a&&!c&&o&&l?1:!a&&c&&o&&l&&!s&&d?41:!a&&c&&o&&l&&!s&&!d?42:!a&&c&&o&&l&&s&&!d?43:!a&&c&&o&&l?2:!a&&c&&!o&&l?3:a&&c&&o&&l&&i&&r&&s&&!d?4:a&&c&&o&&!l&&!i&&r?51:a&&c&&o&&!l&&i&&!r?53:a&&c&&o&&!l&&!i&&!r?52:a&&c&&o&&!l?5:a&&c&&o&&l&&i&&r&&!s&&d?6:a&&c&&o&&l&&i&&r&&s&&d?12:a&&!c&&o&&l&&!r&&d?36:a&&!c&&o&&l&&!r&&!d?37:a&&!c&&o&&l&&r&&!d?38:a&&!c&&o&&l?11:a&&c&&!o&&l&&i&&!s?44:a&&c&&!o&&l&&!i&&!s?45:a&&c&&!o&&l&&!i&&s?46:a&&c&&!o&&l?13:a&&c&&o&&l&&!i&&r&&!s&&d?17:a&&c&&o&&l&&i&&r&&!s&&!d?18:a&&c&&o&&l&&!i&&r&&s&&!d?19:a&&!c&&o&&!l?21:a&&c&&!o&&!l?23:a&&c&&o&&l&&i&&!r&&s&&d?24:a&&c&&o&&l&&!i&&r&&s&&d?57:a&&c&&o&&l&&i&&!r&&s&&!d?27:a&&c&&o&&l&&!i&&!r&&s&&d?28:a&&c&&o&&l&&i&&!r&&!s&&d?29:a||c||!o||l?!a&&c&&o&&!l?33:a||!c||o||l?!(a&&c&&o&&l)||i||r||s||d?a||c||o||!l?a&&!c&&!o&&l?55:!a||c||o||l?a&&c&&o&&l&&i&&!r&&!s&&!d||a&&c&&o&&l&&!i&&r&&!s&&!d||a&&c&&o&&l&&!i&&!r&&s&&!d||a&&c&&o&&l&&!i&&!r&&!s&&d?35:31:56:54:35:34:32}function Y(t,e,n){var i=Math.floor(33-33*Math.min(n[e][t][1][0],1));return e<n.length-1&&e>0&&t<n[0].length-1&&t>0&&!n[e-1][t][1][0]&&n[e+1][t][1][0]&&(n[e][t-1][1][0]&&n[e-1][t-1][1][0]&&n[e][t-1][1][0]<1&&n[e-1][t-1][1][0]<1&&n[e+1][t+1][1][0]<1||n[e][t+1][1][0]&&n[e-1][t+1][1][0]&&n[e][t+1][1][0]<1&&n[e-1][t+1][1][0]<1&&n[e+1][t-1][1][0]<1)?n[e-1][t-1][1][0]&&n[e-1][t+1][1][0]?36:n[e-1][t-1][1][0]?35:n[e-1][t+1][1][0]?34:-1:i<=1&&(0===e||!n[e-1][t][0][0]&&!n[e-1][t][1][0])?2:e>0&&n[e-1][t][1][0]?0:i}var H=function(){var t=Object(r.useState)(0),e=Object(b.a)(t,2),n=e[0],i=e[1],a=Object(r.useState)(""),c=Object(b.a)(a,2),o=c[0],s=c[1],l=Object(r.useState)(!1),d=Object(b.a)(l,2),h=d[0],f=d[1];return Object(r.useEffect)((function(){Object(O.a)(x.a.mark((function t(){var e,n,a,r,c,o,l,d;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Math.ceil(window.innerWidth/8),n=Math.ceil(window.innerHeight/8),a=F(e,n),r=I(a),c=E(),t.next=7,C((function(t,e){i(Math.floor(100*t)),s(e)}));case 7:f(!0),(o=new y.c).clear(),T(o,r),c.stage.addChild(o),l=0,d=0,k((function(){if(l++>=10&&d<10&&(P(r,d<4?{deathLimit:3,birthLimit:5}:{deathLimit:4,birthLimit:4}),o.clear(),T(o,r),d++,l=0,10===d)){c.stage.removeChild(o);for(var t=new y.b,i=new Array(n).fill(!0).map((function(){return new Array(e)})),a=0;a<n;a++)for(var s=0;s<e;s++){var h=new y.g(r[a][s][0][0]?y.i.from("tiles/Tile_".concat(_(s,a,r).toString().padStart(2,"0"),".png")):y.i.from("tiles/Tile_61.png"));h.width=8,h.height=8,h.x=8*s,h.y=8*a,i[a][s]=h,t.addChild(h)}c.stage.addChild(t),t.cacheAsBitmap=!0}}));case 15:case"end":return t.stop()}}),t)})))()}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{style:{width:"100%",position:"absolute",bottom:"20px",opacity:h?0:1,transitionProperty:"opacity",transitionDuration:"1s"},children:[Object(u.jsxs)("div",{style:{width:"100%",textAlign:"center"},className:"noselect",children:["Loading Asset : ",o]}),Object(u.jsx)(W.a.Line,{percent:n,status:100===n?"success":"active"})]})})},z=.005,D=.25,N=.005;function R(t,e){var n=t+e[1][0];return n<=1?1:n<2.25?(1+n*D)/1.25:(n+D)/2}function X(t){for(var e=0,n=new Array(t.length).fill(!0).map((function(){return new Array(t[0].length).fill(!0).map((function(){return{diff:0,settled:!1,settleCount:0}}))})),i=0;i<t.length;i++)for(var a=0;a<t[i].length;a++){var r=t[i][a];if(r[0][0])r[1][0]=0;else if(0!==r[1][0]&&!n[i][a].settled)if(r[1][0]<z)r[1][0]=0;else{var c=r[1][0],o=r[1][0];e=0,i<t.length-1&&!t[i+1][a][0][0]&&(e=R(r[1][0],t[i+1][a])-t[i+1][a][1][0],t[i+1][a][1][0]>0&&e>N&&(e*=1),(e=Math.max(e,0))>Math.min(4,r[1][0])&&(e=Math.min(4,r[1][0])),0!==e&&(o-=e,n[i][a].diff-=e,n[i+1][a].diff+=e,n[i+1][a].settled=!1)),o<z?n[i][a].diff-=o:(a>0&&!t[i][a-1][0][0]&&((e=(o-t[i][a-1][1][0])/4)>N&&(e*=1),(e=Math.max(e,0))>Math.min(4,o)&&(e=Math.min(4,o)),0!==e&&(o-=e,n[i][a].diff-=e,n[i][a-1].diff+=e,n[i][a-1].settled=!1)),o<z?n[i][a].diff-=o:(a<t[i].length-1&&!t[i][a+1][0][0]&&((e=(o-t[i][a+1][1][0])/3)>N&&(e*=1),(e=Math.max(e,0))>Math.min(4,o)&&(e=Math.min(4,o)),0!==e&&(o-=e,n[i][a].diff-=e,n[i][a+1].diff+=e,n[i][a+1].settled=!1)),o<z?n[i][a].diff-=o:(i>0&&!t[i-1][a][0][0]&&((e=o-R(o,t[i-1][a]))>N&&(e*=1),(e=Math.max(e,0))>Math.min(4,o)&&(e=Math.min(4,o)),0!==e&&(o-=e,n[i][a].diff-=e,n[i-1][a].diff+=e,n[i-1][a].settled=!1)),o<z?n[i][a].diff-=o:c===o?(n[i][a].settleCount++,n[i][a].settleCount>=10&&(n[i][a].settled=!0)):(i>0&&t[i-1][a]&&(n[i-1][a].settled=!1),i<t.length-1&&t[i+1][a]&&(n[i+1][a].settled=!1),a>0&&t[i][a-1]&&(n[i][a-1].settled=!1),a<t[0].length-1&&t[i][a+1]&&(n[i][a+1].settled=!1)))))}}for(var s=0;s<t.length;s++)for(var l=0;l<t[s].length;l++)t[s][l][1][0]+=n[s][l].diff,t[s][l][1][0]<z&&(t[s][l][1][0]=0)}var U=function(){var t=Object(r.useState)(0),e=Object(b.a)(t,2),n=e[0],i=e[1],a=Object(r.useState)(""),c=Object(b.a)(a,2),o=c[0],s=c[1],l=Object(r.useState)(!1),d=Object(b.a)(l,2),h=d[0],f=d[1];return Object(r.useEffect)((function(){Object(O.a)(x.a.mark((function t(){var e,n,a,r,c,o,l,d,h,u,b,j,g,p,w,m;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=Math.ceil(window.innerWidth/8),n=Math.ceil(window.innerHeight/8),a=F(e,n,{splitSize:0,density:{block:.5,liquid:.5}}),r=I(a),c=0;c<10;c++)P(r,c<4?{deathLimit:3,birthLimit:5}:{deathLimit:4,birthLimit:4});return o=E(),t.next=8,C((function(t,e){i(Math.floor(100*t)),s(e)}));case 8:for(f(!0),l=new y.b,d=new y.b,h=new y.b,u=new Array(n).fill(!0).map((function(){return new Array(e)})),b=0;b<n;b++)for(j=0;j<e;j++)r[b][j][0][0]?((g=new y.g(y.i.from("tiles/Tile_".concat(_(j,b,r).toString().padStart(2,"0"),".png")))).width=8,g.height=8,g.x=8*j,g.y=8*b,u[b][j]=g,d.addChild(g)):(p=Y(j,b,r),(w=new y.g(p>=0?y.i.from("waters/".concat(p.toString().padStart(2,"0"),".png")):y.i.EMPTY)).width=8,w.height=8,w.x=8*j,w.y=8*b,u[b][j]=w,h.addChild(w),(m=new y.g(y.i.from("tiles/Tile_61.png"))).width=8,m.height=8,m.x=8*j,m.y=8*b,l.addChild(m));o.stage.addChild(l),o.stage.addChild(d),o.stage.addChild(h),l.cacheAsBitmap=!0,d.cacheAsBitmap=!0,k((function(){X(r);for(var t=0;t<n;t++)for(var i=0;i<e;i++)if(!r[t][i][0][0]){var a=Y(i,t,r);u[t][i].texture=r[t][i][1][0]&&a>=0?y.i.from("waters/".concat(a.toString().padStart(2,"0"),".png")):y.i.EMPTY,u[t][i].alpha=Math.min(.3+.15*r[t][i][1][0],.8)}}));case 20:case"end":return t.stop()}}),t)})))()}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{style:{width:"100%",position:"absolute",bottom:"20px",opacity:h?0:1,transitionProperty:"opacity",transitionDuration:"1s"},children:[Object(u.jsxs)("div",{style:{width:"100%",textAlign:"center"},className:"noselect",children:["Loading Asset : ",o]}),Object(u.jsx)(W.a.Line,{percent:n,status:100===n?"success":"active"})]})})};function J(t){var e=new y.b,n=new y.c,i=new y.h(t,{fontSize:13,fill:16777215});return i.x=1,i.y=1,n.beginFill(0,.5),n.drawRect(0,0,i.width+2,i.height+2),n.endFill(),e.addChild(n),e.addChild(i),e}var V,G,Q=function(t){var e=[Math.floor(t.targetTouches[0].clientX/8),Math.floor(t.targetTouches[0].clientY/8)];$(e[0],e[1])},Z=function(t){var e=[Math.floor(t.clientX/8),Math.floor(t.clientY/8)];$(e[0],e[1])},$=function(t,e){V&&V(t,e)},tt=function(){var t=Object(r.useState)(0),e=Object(b.a)(t,2),n=e[0],i=e[1],a=Object(r.useState)(""),c=Object(b.a)(a,2),o=c[0],s=c[1],l=Object(r.useState)(!1),d=Object(b.a)(l,2),h=d[0],f=d[1];return Object(r.useEffect)((function(){Object(O.a)(x.a.mark((function t(){var e,n,a,r,c,o,l,d,h,u,b,j,g,p,w,m,v;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=Math.ceil(window.innerWidth/8),n=Math.ceil(window.innerHeight/8),a=F(e,n,{splitSize:0,density:{block:.5,liquid:0}}),r=I(a),c=0;c<10;c++)P(r,c<4?{deathLimit:3,birthLimit:5}:{deathLimit:4,birthLimit:4});return window.removeEventListener("touchstart",Q),window.removeEventListener("click",Z),window.addEventListener("touchstart",Q),window.addEventListener("click",Z),V=function(t,i){for(var a=-3;a<=3;a++)for(var c=-3;c<=3;c++)t+c>=0&&t+c<e&&i+a>=0&&i+a<n&&!r[i+a][t+c][0][0]&&(r[i+a][t+c][1][0]+=1)},o=E(),t.next=13,C((function(t,e){i(Math.floor(100*t)),s(e)}));case 13:for(f(!0),(l=J("Click to create water")).x=Math.round(window.innerWidth/2-l.width/2),l.y=60,d=new y.b,h=new y.b,u=new y.b,b=new Array(n).fill(!0).map((function(){return new Array(e)})),j=0;j<n;j++)for(g=0;g<e;g++)r[j][g][0][0]?((p=new y.g(y.i.from("tiles/Tile_".concat(_(g,j,r).toString().padStart(2,"0"),".png")))).width=8,p.height=8,p.x=8*g,p.y=8*j,b[j][g]=p,h.addChild(p)):(w=Y(g,j,r),(m=new y.g(w>=0?y.i.from("waters/".concat(w.toString().padStart(2,"0"),".png")):y.i.EMPTY)).width=8,m.height=8,m.x=8*g,m.y=8*j,b[j][g]=m,u.addChild(m),(v=new y.g(y.i.from("tiles/Tile_61.png"))).width=8,v.height=8,v.x=8*g,v.y=8*j,d.addChild(v));o.stage.addChild(d),o.stage.addChild(h),o.stage.addChild(u),o.stage.addChild(l),d.cacheAsBitmap=!0,h.cacheAsBitmap=!0,k((function(){X(r);for(var t=0;t<n;t++)for(var i=0;i<e;i++)if(!r[t][i][0][0]){var a=Y(i,t,r);b[t][i].texture=r[t][i][1][0]&&a>=0?y.i.from("waters/".concat(a.toString().padStart(2,"0"),".png")):y.i.EMPTY,b[t][i].alpha=Math.min(.3+.15*r[t][i][1][0],.8)}}));case 29:case"end":return t.stop()}}),t)})))()}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{style:{width:"100%",position:"absolute",bottom:"20px",opacity:h?0:1,transitionProperty:"opacity",transitionDuration:"1s"},children:[Object(u.jsxs)("div",{style:{width:"100%",textAlign:"center"},className:"noselect",children:["Loading Asset : ",o]}),Object(u.jsx)(W.a.Line,{percent:n,status:100===n?"success":"active"})]})})},et=function(t){var e=[Math.floor(t.targetTouches[0].clientX/8),Math.floor(t.targetTouches[0].clientY/8)];it(e[0],e[1])},nt=function(t){var e=[Math.floor(t.clientX/8),Math.floor(t.clientY/8)];it(e[0],e[1])},it=function(t,e){G&&G(t,e)},at=function(){var t=Object(r.useState)(0),e=Object(b.a)(t,2),n=e[0],i=e[1],a=Object(r.useState)(""),c=Object(b.a)(a,2),o=c[0],s=c[1],l=Object(r.useState)(!1),d=Object(b.a)(l,2),h=d[0],f=d[1];return Object(r.useEffect)((function(){Object(O.a)(x.a.mark((function t(){var e,n,a,r,c,o,l,d,h,u,b,j,g,p,w,m;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Math.ceil(window.innerWidth/8),n=Math.ceil(window.innerHeight/8),a=F(e,n,{splitSize:0,density:{block:0,liquid:1}}),r=I(a),window.removeEventListener("touchstart",et),window.removeEventListener("click",nt),window.addEventListener("touchstart",et),window.addEventListener("click",nt),G=function(t,i){for(var a=-3;a<=3;a++)for(var c=-3;c<=3;c++)t+c>=0&&t+c<e&&i+a>=0&&i+a<n&&!r[i+a][t+c][0][0]&&(r[i+a][t+c][1][0]+=1)},c=E(),t.next=12,C((function(t,e){i(Math.floor(100*t)),s(e)}));case 12:for(f(!0),(o=J("Click to create water")).x=Math.round(window.innerWidth/2-o.width/2),o.y=60,l=new y.b,d=new y.b,h=new y.b,u=new Array(n).fill(!0).map((function(){return new Array(e)})),b=0;b<n;b++)for(j=0;j<e;j++)r[b][j][0][0]?((g=new y.g(y.i.from("tiles/Tile_".concat(_(j,b,r).toString().padStart(2,"0"),".png")))).width=8,g.height=8,g.x=8*j,g.y=8*b,u[b][j]=g,d.addChild(g)):(p=Y(j,b,r),(w=new y.g(p>=0?y.i.from("waters/".concat(p.toString().padStart(2,"0"),".png")):y.i.EMPTY)).width=8,w.height=8,w.x=8*j,w.y=8*b,u[b][j]=w,h.addChild(w),(m=new y.g(y.i.from("tiles/Tile_61.png"))).width=8,m.height=8,m.x=8*j,m.y=8*b,l.addChild(m));c.stage.addChild(l),c.stage.addChild(d),c.stage.addChild(h),c.stage.addChild(o),l.cacheAsBitmap=!0,d.cacheAsBitmap=!0,k((function(){X(r);for(var t=0;t<n;t++)for(var i=0;i<e;i++)if(!r[t][i][0][0]){var a=Y(i,t,r);u[t][i].texture=r[t][i][1][0]&&a>=0?y.i.from("waters/".concat(a.toString().padStart(2,"0"),".png")):y.i.EMPTY,u[t][i].alpha=Math.min(.3+.15*r[t][i][1][0],.8)}}));case 28:case"end":return t.stop()}}),t)})))()}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{style:{width:"100%",position:"absolute",bottom:"20px",opacity:h?0:1,transitionProperty:"opacity",transitionDuration:"1s"},children:[Object(u.jsxs)("div",{style:{width:"100%",textAlign:"center"},className:"noselect",children:["Loading Asset : ",o]}),Object(u.jsx)(W.a.Line,{percent:n,status:100===n?"success":"active"})]})})},rt=function(){var t=Object(r.useState)(0),e=Object(b.a)(t,2),n=e[0],i=e[1],a=Object(r.useState)(""),c=Object(b.a)(a,2),o=c[0],s=c[1],l=Object(r.useState)(!1),d=Object(b.a)(l,2),h=d[0],f=d[1];return Object(r.useEffect)((function(){Object(O.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E(),t.next=3,C((function(t,e){i(Math.floor(100*t)),s(e)}));case 3:f(!0),k((function(){}));case 5:case"end":return t.stop()}}),t)})))()}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{style:{width:"100%",position:"absolute",bottom:"20px",opacity:h?0:1,transitionProperty:"opacity",transitionDuration:"1s"},children:[Object(u.jsxs)("div",{style:{width:"100%",textAlign:"center"},className:"noselect",children:["Loading Asset : ",o]}),Object(u.jsx)(W.a.Line,{percent:n,status:100===n?"success":"active"})]})})},ct=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(h.a,{style:{height:"100%"},children:[Object(u.jsx)(m,{}),Object(u.jsxs)(h.a,{id:"content",children:[Object(u.jsx)(d.a,{exact:!0,path:"/",component:q}),Object(u.jsx)(d.a,{exact:!0,path:"/cave-generate",component:K}),Object(u.jsx)(d.a,{exact:!0,path:"/cave-generate-texture",component:H}),Object(u.jsx)(d.a,{exact:!0,path:"/liquid-simulation",component:U}),Object(u.jsx)(d.a,{exact:!0,path:"/liquid-simulation-2",component:tt}),Object(u.jsx)(d.a,{exact:!0,path:"/liquid-stress-test",component:at}),Object(u.jsx)(d.a,{exact:!0,path:"/line-intersection",component:rt}),Object(u.jsx)(f,{})]})]})})};n(318);s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(l.a,{children:Object(u.jsx)(ct,{})})}),document.getElementById("root"))}},[[319,1,2]]]);
//# sourceMappingURL=main.a04b4b4c.chunk.js.map