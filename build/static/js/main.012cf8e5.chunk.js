(this.webpackJsonpellie=this.webpackJsonpellie||[]).push([[0],{329:function(e,t,n){"use strict";n.r(t);var a,i,r,c=n(1),o=n.n(c),l=n(43),d=n.n(l),h=n(102),s=n(27),u=n.n(s),f=n(65),b=n(14),v=n(16),j=n(332),g=n(21),x=n(24),w=n(8),p=n(74),m=n(155),O=n.n(m);function y(e){return k.apply(this,arguments)}function k(){return(k=Object(f.a)(u.a.mark((function e(t){var n,a,i,r,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for("https://simdaesoo.github.io/Ellie/build",n=[],(a=[]).push("tiles.png"),a.push("waters.png"),i=0,r=a;i<r.length;i++)c=r[i],n.push([c,"".concat("https://simdaesoo.github.io/Ellie/build","/").concat(c)]);return o=0,w.f.shared.onLoad.add((function(){var e=arguments.length<=1?void 0:arguments[1];t(++o/n.length,e.name)})),e.abrupt("return",new Promise((function(e){var t,a=Object(x.a)(n);try{for(a.s();!(t=a.n()).done;){var i,r=t.value;(i=w.f.shared).add.apply(i,Object(g.a)(r))}}catch(c){a.e(c)}finally{a.f()}w.f.shared.load((function(){e()}))})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{defaultLighting:!0},t=S(),n=Object(b.a)(t,2),c=n[0],o=n[1];if(i){if(i.removeChildren(),i.removeAllListeners(),r.removeChildren(),r.removeAllListeners(),e.defaultLighting){var l=new w.d;l.beginFill(16777215),l.drawRect(0,0,c,o),l.endFill(),r.addChild(l),l.cacheAsBitmap=!0}return{stage:i,lightContainer:r}}var d=window.devicePixelRatio||1;w.n.SCALE_MODE=w.j.NEAREST,w.n.MIPMAP_TEXTURES=w.g.OFF,w.n.STRICT_TEXTURE_CACHE=!0,w.n.SPRITE_MAX_TEXTURES=200;var h=new O.a,s=new w.a({width:c,height:o,sharedLoader:!0,powerPreference:"high-performance",backgroundColor:2105376,autoStart:!1,antialias:!1,forceCanvas:!1,preserveDrawingBuffer:!1,resolution:d});s.stage=new p.b,s.view.className="renderer",s.view.style.width="100%",s.view.style.height="100%",h.dom.style.right="0",h.dom.style.removeProperty("left");var u=document.getElementById("content");u.appendChild(s.view),u.appendChild(h.dom);var f=new p.b,v=new p.a;v.useRenderTexture=!0,v.clearColor=[.075,.075,.075,1],i=new w.c,(r=new w.c).parentLayer=v;var j=new w.k(v.getRenderTexture());if(j.blendMode=w.b.MULTIPLY,f.addChild(i),f.addChild(r),f.addChild(v),f.addChild(j),s.stage.addChild(f),e.defaultLighting){var g=new w.d;g.beginFill(16777215),g.drawRect(0,0,c,o),g.endFill(),r.addChild(g),g.cacheAsBitmap=!0}var x=function e(){a&&a(),h.update(),s.render(),window.requestAnimationFrame(e)};return window.requestAnimationFrame(x),{stage:i,lightContainer:r}}function M(e){a=e}function S(){return[window.innerWidth,window.innerHeight]}var L=n(5),A=function(){return Object(L.jsx)("div",{style:{position:"absolute",bottom:0,right:0,color:"#FFFFFF",backgroundColor:"rgba(0,0,0,0.5)",padding:"1px 4px"},className:"noselect",children:Object(L.jsx)("a",{href:"https://github.com/SimDaeSoo",children:"Created by daesoo94"})})},F=n(335),E=n(331),I=n(333),T=n(165),q=function(){var e=Object(v.f)(),t=Object(v.e)(),n=Object(c.useState)(!0),a=Object(b.a)(n,2),i=a[0],r=a[1],o=e.pathname;return Object(L.jsx)(F.a,{collapsible:!0,width:i?0:250,style:{position:"absolute",height:"100%",overflow:"auto",backgroundColor:"#1a1d24"},onClick:function(e){e.stopPropagation()},onTouchStart:function(e){e.stopPropagation()},children:Object(L.jsxs)(E.a,{children:[Object(L.jsx)(E.a.Header,{style:{position:"fixed",top:0,height:"50px",width:i?56:250,zIndex:2},children:Object(L.jsx)(I.a,{children:Object(L.jsx)(I.a.Item,{icon:Object(L.jsx)(T.a,{icon:i?"external-link-square":"gears2"}),onClick:function(e){r(!i)},style:{backgroundColor:"#0f131a"},children:i?"-":"Ellie Engine v0.0.1"})})}),Object(L.jsx)(E.a.Body,{style:{height:"calc(100%-50px)",marginTop:"50px"},children:Object(L.jsxs)(I.a,{activeKey:o,children:[Object(L.jsx)(I.a.Item,{icon:Object(L.jsx)(T.a,{icon:"th2"}),onSelect:function(){return t.push("/")},eventKey:"/",children:"Tilemap With Buffer"}),Object(L.jsx)(I.a.Item,{icon:Object(L.jsx)(T.a,{icon:"th2"}),onSelect:function(){return t.push("/cave-generate")},eventKey:"/cave-generate",children:"Cave Generate"}),Object(L.jsx)(I.a.Item,{icon:Object(L.jsx)(T.a,{icon:"th2"}),onSelect:function(){return t.push("/cave-generate-texture")},eventKey:"/cave-generate-texture",children:"Cave With Texture"}),Object(L.jsx)(I.a.Item,{icon:Object(L.jsx)(T.a,{icon:"th2"}),onSelect:function(){return t.push("/cave-generate-sky")},eventKey:"/cave-generate-sky",children:"Cave With Sky"}),Object(L.jsx)(I.a.Item,{icon:Object(L.jsx)(T.a,{icon:"tint"}),onSelect:function(){return t.push("/liquid-simulation")},eventKey:"/liquid-simulation",children:"Liquid Simulation"}),Object(L.jsx)(I.a.Item,{icon:Object(L.jsx)(T.a,{icon:"tint"}),onSelect:function(){return t.push("/liquid-simulation-2")},eventKey:"/liquid-simulation-2",children:"Liquid Simulation 2"}),Object(L.jsx)(I.a.Item,{icon:Object(L.jsx)(T.a,{icon:"tint"}),onSelect:function(){return t.push("/liquid-stress-test")},eventKey:"/liquid-stress-test",children:"Liquid Stress Test"}),Object(L.jsx)(I.a.Item,{icon:Object(L.jsx)(T.a,{icon:"close"}),onSelect:function(){return t.push("/line-intersection")},eventKey:"/line-intersection",children:"Line Intersection"}),Object(L.jsx)(I.a.Item,{icon:Object(L.jsx)(T.a,{icon:"close"}),onSelect:function(){return t.push("/line-intersection-2")},eventKey:"/line-intersection-2",children:"Line Intersection 2"}),Object(L.jsx)(I.a.Item,{icon:Object(L.jsx)(T.a,{icon:"lightbulb-o"}),onSelect:function(){return t.push("/default-lighting")},eventKey:"/default-lighting",children:"Default Lighting"}),Object(L.jsx)(I.a.Item,{icon:Object(L.jsx)(T.a,{icon:"lightbulb-o"}),onSelect:function(){return t.push("/lighting-area")},eventKey:"/lighting-area",disabled:!0,children:"Lighting Area"}),Object(L.jsx)(I.a.Item,{icon:Object(L.jsx)(T.a,{icon:"lightbulb-o"}),onSelect:function(){return t.push("/lighting-area-2")},eventKey:"/lighting-area-2",disabled:!0,children:"Lighting Area 2"}),Object(L.jsx)(I.a.Item,{icon:Object(L.jsx)(T.a,{icon:"lightbulb-o"}),onSelect:function(){return t.push("/lighting-stress-test")},eventKey:"/lighting-stress-test",disabled:!0,children:"Lighting Stress Test"}),Object(L.jsx)(I.a.Item,{icon:Object(L.jsx)(T.a,{icon:"object-ungroup"}),onSelect:function(){return t.push("/aabb-collision")},eventKey:"/aabb-collision",disabled:!0,children:"AABB Collision"}),Object(L.jsx)(I.a.Item,{icon:Object(L.jsx)(T.a,{icon:"object-ungroup"}),onSelect:function(){return t.push("/aabb-collision-2")},eventKey:"/aabb-collision-2",disabled:!0,children:"AABB Collision 2"}),Object(L.jsx)(I.a.Item,{icon:Object(L.jsx)(T.a,{icon:"object-ungroup"}),onSelect:function(){return t.push("/aabb-stress-test")},eventKey:"/aabb-stress-test",disabled:!0,children:"AABB Stress Test"}),Object(L.jsx)(I.a.Item,{icon:Object(L.jsx)(T.a,{icon:"globe"}),onSelect:function(){return t.push("/sample-world")},eventKey:"/sample-world",disabled:!0,children:"Sample World"})]})})]})})},B=n(334),K=function(e){var t=e.hide,n=e.asset,a=e.percentage;return Object(L.jsxs)("div",{style:{width:"100%",position:"absolute",bottom:"20px",opacity:t?0:1,transitionProperty:"opacity",transitionDuration:"1s"},children:[Object(L.jsxs)("div",{style:{width:"100%",textAlign:"center"},className:"noselect",children:["Loading Asset : ",n]}),Object(L.jsx)(B.a.Line,{className:"notransition",percent:a,status:100===a?"success":"active"})]})},H=[[.65125,.73125],[.6275,.7375],[.61,.735],[.5925,.72625],[.57875,.71875],[.56625,.71375],[.54875,.715],[.53125,.72],[.515,.7225],[.50125,.71625],[.48125,.7175],[.46375,.72625],[.44875,.73],[.4375,.7325],[.42625,.7325],[.425,.73625],[.43375,.755],[.44375,.76375],[.45625,.7725],[.4625,.77625],[.48,.7825],[.49875,.785],[.5125,.785],[.5275,.78125],[.53625,.78125],[.55125,.78375],[.56625,.785],[.5775,.785],[.5875,.785],[.60125,.7775],[.6175,.76375],[.6375,.74375],[.64625,.73625],[.65125,.73125],[.6375,.71875],[.6225,.7075],[.60875,.695],[.6,.68625],[.585,.67125],[.57875,.6675],[.5675,.66125],[.55875,.6625],[.54875,.665],[.535,.67375],[.52625,.67375],[.5125,.6675],[.50625,.66375],[.49125,.66625],[.47375,.67375],[.45875,.68875],[.44375,.7],[.43375,.70875],[.42125,.7175],[.4125,.71875],[.40375,.71875],[.4,.71625],[.405,.72125],[.41,.72375],[.41875,.7275],[.435,.72625],[.45125,.7225],[.47625,.6975],[.49125,.685],[.505,.66],[.5125,.63875],[.51375,.61875],[.50625,.60125],[.4975,.595],[.485,.59125],[.47375,.58875],[.4675,.58875],[.4625,.59125],[.4675,.6],[.4775,.60375],[.49,.61],[.505,.61125],[.5225,.6125],[.53375,.6125],[.545,.60625],[.55625,.59625],[.56625,.5925],[.575,.5925],[.5825,.59375],[.565,.605],[.55375,.61],[.54125,.61125],[.5325,.6125],[.565,.6125],[.58375,.61],[.59375,.60125],[.59875,.59375],[.59875,.58375],[.59625,.5725],[.5925,.565],[.58375,.55375],[.57,.54],[.565,.525],[.56125,.49],[.55875,.39],[.56125,.3375],[.5725,.29625],[.585,.2675],[.59625,.24625],[.615,.22375],[.64375,.20375],[.66875,.195],[.6875,.19],[.70875,.18875],[.7325,.19],[.7525,.1925],[.78875,.20375],[.81875,.21875],[.835,.2325],[.84375,.24625],[.85,.2675],[.8525,.2875],[.84875,.30375],[.83875,.32375],[.82625,.3375],[.8025,.35375],[.77125,.37375],[.74375,.38],[.71125,.3825],[.6825,.385],[.6625,.38375],[.64625,.38125],[.62875,.37875],[.615,.3725],[.6075,.3675],[.62625,.34375],[.64125,.33125],[.66125,.31375],[.68875,.3],[.715,.295],[.7525,.2925],[.77375,.29375],[.79625,.3],[.8125,.31],[.8275,.32375],[.83875,.33625],[.85,.35375],[.86875,.39125],[.87875,.4475],[.87625,.49375],[.87625,.54375],[.865,.5975],[.84625,.6525],[.82875,.69625],[.81125,.7375],[.77375,.7925],[.75,.815],[.70625,.85375],[.67125,.87875],[.6375,.89875],[.6075,.91125],[.57625,.9225],[.54375,.925],[.49875,.9275],[.48,.92375],[.45,.9175],[.4225,.90125],[.38625,.88375],[.3475,.8525],[.32,.8325],[.305,.825],[.295,.82125],[.28125,.81875],[.26125,.81875],[.245,.82375],[.22,.83125],[.20625,.84125],[.17875,.84625],[.1675,.8475],[.1575,.8525],[.1375,.85],[.12,.84375],[.09625,.83375],[.0675,.8175],[.04625,.8075],[.035,.80125],[.02625,.7975],[.0225,.7975],[.05625,.77625],[.09125,.7575],[.11375,.74625],[.1475,.7425],[.1625,.7425],[.18,.745],[.20125,.74875],[.21875,.75625],[.24,.76625],[.26375,.78],[.2825,.79375],[.30375,.81125],[.32125,.82625],[.32875,.83625],[.27375,.76875],[.2525,.72875],[.25125,.70875],[.265,.685],[.29375,.66625],[.32375,.6525],[.35375,.635],[.375,.61875],[.39625,.59375],[.4175,.5625],[.4275,.53625],[.43125,.5175],[.43125,.51125],[.4125,.52875],[.3975,.53375],[.3675,.53625],[.36,.53625],[.33375,.5375],[.315,.5425],[.29625,.5475],[.27875,.5625],[.25875,.58375],[.245,.60125],[.2375,.62125],[.2375,.645],[.2375,.6775],[.24125,.69625],[.24625,.71375],[.24875,.72375],[.25125,.72625],[.2325,.65],[.23125,.605],[.2325,.575],[.23375,.53625],[.235,.51],[.23625,.49625],[.26875,.5],[.28875,.49625],[.31375,.48875],[.34,.47875],[.36375,.465],[.3775,.4475],[.39875,.43],[.42375,.41375],[.4475,.40125],[.47,.38375],[.485,.3625],[.49375,.33625],[.4975,.31],[.48375,.27875],[.46625,.26],[.45,.25125],[.4325,.25],[.41,.25125],[.39125,.25875],[.35875,.27875],[.335,.2875],[.315,.29125],[.2975,.29],[.28125,.28125],[.2575,.265],[.23,.245],[.20375,.23125],[.1825,.225],[.1675,.22375],[.15875,.2225],[.18625,.20375],[.23375,.19],[.2625,.185],[.29625,.1775],[.3275,.1775],[.35625,.18375],[.375,.195],[.3925,.21125],[.40875,.22875],[.41875,.24875],[.42375,.2725],[.4275,.30375],[.43125,.33125],[.42375,.35125],[.40625,.36875],[.38,.37875],[.3625,.38375],[.335,.38],[.32,.365],[.3025,.34625],[.2875,.33875],[.27375,.33625],[.2375,.33625],[.21625,.32875],[.19625,.32125],[.1775,.3075],[.16125,.29375],[.14875,.27375],[.13875,.25625],[.135,.24],[.1425,.235],[.16125,.23625],[.1725,.24375],[.18875,.25875],[.1975,.2725],[.21375,.28875],[.22375,.2975],[.24125,.30375],[.255,.3075],[.2775,.3075],[.29875,.3075],[.30875,.31375],[.32125,.325],[.3275,.34625],[.3275,.3725],[.325,.395],[.32125,.4075],[.31625,.43125],[.31375,.45],[.305,.47],[.29,.485],[.27375,.4875],[.24875,.4875],[.2325,.485],[.21875,.475],[.21,.4625],[.1975,.44],[.18875,.405],[.1825,.37625],[.17375,.35125],[.16,.32375],[.14375,.2975],[.125,.27625],[.115,.26375],[.0975,.25375],[.08625,.25125],[.07375,.2525],[.06625,.255],[.0625,.26875],[.0625,.2825],[.07125,.295],[.0775,.3025],[.0925,.3175],[.10125,.3275],[.1125,.3375],[.1225,.35375],[.12625,.3725],[.12875,.3925],[.13375,.41125],[.14125,.425],[.1525,.44],[.1675,.455],[.18,.46625],[.1975,.47625],[.215,.4875],[.2275,.48875],[.24375,.49375],[.25375,.495],[.27875,.49125],[.2925,.4875],[.31125,.47375],[.34,.44375],[.34375,.415],[.35125,.38875],[.35625,.35625],[.36375,.32375],[.36875,.2925],[.3675,.26],[.3625,.24125],[.355,.22625],[.34125,.21125],[.33,.20375],[.30875,.19625],[.29125,.195],[.27625,.1975],[.265,.2],[.2575,.20875],[.2575,.22375],[.26,.23875],[.26875,.24875],[.27875,.25375],[.2925,.25875],[.30625,.26125],[.32125,.25875],[.32875,.255],[.3375,.24875],[.3425,.24125],[.34125,.23125],[.32875,.22],[.31875,.215],[.3025,.21],[.2925,.20875],[.2825,.2125],[.28125,.225],[.28875,.23375],[.2975,.23625],[.30875,.2375],[.315,.23375],[.315,.2275],[.31125,.2225],[.305,.22],[.29875,.22125],[.29625,.225],[.29625,.22625]];function R(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6710886;e.beginFill(a);for(var i=0;i<t.length;i++)for(var r=0;r<t[i].length;r++)t[i][r][0][0]&&e.drawRect(r*n,i*n,n,n);e.endFill()}function D(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:16711680;e.beginFill(a);var i,r=Object(x.a)(t);try{for(r.s();!(i=r.n()).done;){var c=i.value;e.drawCircle(c[0],c[1],n)}}catch(o){r.e(o)}finally{r.f()}e.endFill()}function P(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{width:1,color:65280};e.lineStyle(n);var a,i=Object(x.a)(t);try{for(i.s();!(a=i.n()).done;){var r=Object(b.a)(a.value,2),c=r[0],o=r[1];e.moveTo.apply(e,Object(g.a)(c)),e.lineTo.apply(e,Object(g.a)(o))}}catch(l){i.e(l)}finally{i.f()}e.endFill(),e.line.reset()}function W(e,t,n){var a=n||{},i=a.splitSize,r=void 0===i?0:i,c=a.density,o=void 0===c?{block:.5,liquid:.5}:c,l=a.clearHeight,d=void 0===l?0:l;if(0===r){for(var h=new ArrayBuffer(e*t*8+16),s=0;s<e*t;s++){var u=new Uint8Array(h,8*s,4),f=new Float32Array(h,8*s+4,1),b=s>e*d&&Math.random()<o.block?1:0;u[0]=b,u[1]=0,u[2]=0,u[3]=0,f[0]=0===b&&Math.random()<o.liquid?1:0}var v=new Float64Array(h,h.byteLength-16,2);return v[0]=t,v[1]=e,[[h]]}if(e%r!==0||t%r!==0)throw new Error("width and height must be perfectly was divided by split size");for(var j=new Array(t/r).fill(!0).map((function(){return new Array(e/r)})),g=0;g<t/r;g++)for(var x=0;x<e/r;x++){for(var w=new ArrayBuffer(8*Math.pow(r,2)+16),p=0;p<Math.pow(r,2);p++){var m=new Uint8Array(w,8*p,4),O=new Float32Array(w,8*p+4,1),y=p>e*d&&Math.random()<o.block?1:0;m[0]=y,m[1]=0,m[2]=0,m[3]=0,O[0]=0===y&&Math.random()<o.liquid?1:0}var k=new Float64Array(w,w.byteLength-16,2);k[0]=r,k[1]=r,j[g][x]=w}return j}function z(e){for(var t=new Float64Array(e[0][0],e[0][0].byteLength-16,2),n=t[0],a=t[1],i=new Array(n*e.length).fill(!0).map((function(){return new Array(a*e[0].length)})),r=0;r<i.length;r++)for(var c=[Math.floor(r/n),r%n],o=c[0],l=c[1],d=0;d<i[r].length;d++){var h=[Math.floor(d/a),d%a],s=h[0],u=h[1];i[r][d]=[new Uint8Array(e[o][s],8*(l*a+u),4),new Float32Array(e[o][s],8*(l*a+u)+4,1)]}return i}function U(e,t){return new Array(t).fill(!0).map((function(){return new Array(e).fill(!0).map((function(){return{diff:0,isStable:!1,stableLevel:0}}))}))}var N=function(e){var t=e.setCallback;return Object(c.useEffect)((function(){t((function(e,t){}));var e=S(),n=Object(b.a)(e,2),a=n[0],i=n[1],r=z(W(Math.ceil(a/8),Math.ceil(i/8))),c=C().stage,o=new w.d;o.clear(),R(o,r,8),c.addChild(o)}),[t]),Object(L.jsx)(L.Fragment,{})};function X(e,t,n){for(var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,c=0,o=-a;o<=a;o++)for(var l=-a;l<=a;l++){var d=e+l,h=t+o;(i&&(0!==l||0!==o)&&(d<0||h<0||d>=n[0].length||h>=n.length)||(0!==l||0!==o)&&d>=0&&h>=0&&d<n[0].length&&h<n.length&&n[h][d][0][r])&&c++}return c}function _(e,t){for(var n=new Array(e.length).fill(!0).map((function(){return new Array(e[0].length).fill(!1)})),a=t.deathLimit,i=t.birthLimit,r=t.clearSky,c=t.margin,o=0;o<e.length;o++)for(var l=0;l<e[0].length;l++){var d=X(l,o,e,1,!r||o>i);e[o][l][0][0]?n[o][l]=!(d<i):n[o][l]=d>a}for(var h=0,s=0;s<n.length;s++)for(var u=0;u<n[0].length;u++){var f=X(u,s,e,1,!1,1);!h&&f&&(h=s+c),e[s][u][0][0]=n[s][u]?1:0,e[s][u][0][1]=e[s][n[0].length-1-u][0][0]||f>4?1:0,h&&h<=s&&!e[s][n[0].length-1-u][0][0]&&(e[s][u][0][1]=2)}}var Y=function(e){var t=e.setCallback;return Object(c.useEffect)((function(){t((function(e,t){}));var e=S(),n=Object(b.a)(e,2),a=n[0],i=n[1],r=z(W(Math.ceil(a/8),Math.ceil(i/8))),c=C().stage,o=new w.d;o.clear(),R(o,r,8),c.addChild(o);var l=0,d=0;M((function(){l++>=10&&d<10&&(_(r,d<4?{deathLimit:3,birthLimit:5,clearSky:!1,margin:0}:{deathLimit:4,birthLimit:4,clearSky:!1,margin:0}),o.clear(),R(o,r,8),d++,l=0)}))}),[t]),Object(L.jsx)(L.Fragment,{})};function J(e,t,n){var a=t>0&&e>0&&n[t-1][e-1][0][0]===n[t][e][0][0],i=t>0&&n[t-1][e][0][0]===n[t][e][0][0],r=t>0&&e<n[0].length-1&&n[t-1][e+1][0][0]===n[t][e][0][0],c=e>0&&n[t][e-1][0][0]===n[t][e][0][0],o=e<n[0].length-1&&n[t][e+1][0][0]===n[t][e][0][0],l=t<n.length-1&&e>0&&n[t+1][e-1][0][0]===n[t][e][0][0],d=t<n.length-1&&n[t+1][e][0][0]===n[t][e][0][0],h=t<n.length-1&&e<n[0].length-1&&n[t+1][e+1][0][0]===n[t][e+1][0][0];return!i&&!c&&o&&d?0:!i&&c&&o&&d&&!l&&h?40:!i&&c&&o&&d&&!l&&!h?41:!i&&c&&o&&d&&l&&!h?42:!i&&c&&o&&d?1:!i&&c&&!o&&d?2:i&&c&&o&&d&&a&&r&&l&&!h?3:i&&c&&o&&!d&&!a&&r?50:i&&c&&o&&!d&&a&&!r?52:i&&c&&o&&!d&&!a&&!r?51:i&&c&&o&&!d?4:i&&c&&o&&d&&a&&r&&!l&&h?5:i&&c&&o&&d&&a&&r&&l&&h?11:i&&!c&&o&&d&&!r&&h?35:i&&!c&&o&&d&&!r&&!h?36:i&&!c&&o&&d&&r&&!h?37:i&&!c&&o&&d?10:i&&c&&!o&&d&&a&&!l?43:i&&c&&!o&&d&&!a&&!l?44:i&&c&&!o&&d&&!a&&l?45:i&&c&&!o&&d?12:i&&c&&o&&d&&!a&&r&&!l&&h?16:i&&c&&o&&d&&a&&r&&!l&&!h?17:i&&c&&o&&d&&!a&&r&&l&&!h?18:i&&!c&&o&&!d?20:i&&c&&!o&&!d?22:i&&c&&o&&d&&a&&!r&&l&&h?23:i&&c&&o&&d&&!a&&r&&l&&h?56:i&&c&&o&&d&&a&&!r&&l&&!h?26:i&&c&&o&&d&&!a&&!r&&l&&h?27:i&&c&&o&&d&&a&&!r&&!l&&h?28:i||c||!o||d?!i&&c&&o&&!d?32:i||!c||o||d?!(i&&c&&o&&d)||a||r||l||h?i||c||o||!d?i&&!c&&!o&&d?54:!i||c||o||d?i&&c&&o&&d&&a&&!r&&!l&&!h||i&&c&&o&&d&&!a&&r&&!l&&!h||i&&c&&o&&d&&!a&&!r&&l&&!h||i&&c&&o&&d&&!a&&!r&&!l&&h?34:30:55:53:34:33:31}function G(e,t,n){var a=Math.floor(33-33*Math.min(n[t][e][1][0],1));if(t<n.length-1&&t>0&&e<n[0].length-1&&e>0&&!n[t-1][e][1][0]&&n[t+1][e][1][0]&&(n[t][e-1][1][0]&&n[t-1][e-1][1][0]&&n[t][e-1][1][0]<1&&n[t-1][e-1][1][0]<1&&n[t+1][e+1][1][0]<1||n[t][e+1][1][0]&&n[t-1][e+1][1][0]&&n[t][e+1][1][0]<1&&n[t-1][e+1][1][0]<1&&n[t+1][e-1][1][0]<1)){if(n[t-1][e-1][1][0]&&n[t-1][e+1][1][0]&&(!n[t][e+1][1][0]||n[t][e+1][0][0])&&(!n[t][e-1][1][0]||n[t][e-1][0][0]))return 36;if(n[t-1][e-1][1][0]&&!n[t][e+1][1][0])return 35;if(n[t-1][e+1][1][0]&&!n[t][e-1][1][0])return 34}return a<=1&&(0===t||!n[t-1][e][0][0]&&!n[t-1][e][1][0])?2:t>0&&n[t-1][e][1][0]&&!n[t-1][e][0][0]?0:a}function Q(){return new Array(63).fill(!0).map((function(e,t){var n=[t%9,Math.floor(t/9)],a=n[0],i=n[1];return new w.m(w.m.from("tiles.png").baseTexture,new w.i(16*a+(a+1),16*i+(i+1),16,16))}))}function V(){return new Array(38).fill(!0).map((function(e,t){return new w.m(w.m.from("waters.png").baseTexture,new w.i(16*t+(t+1),1,16,16))}))}var Z=function(e){var t=e.setCallback;return Object(c.useEffect)((function(){t((function(e,t){}));var e=S(),n=Object(b.a)(e,2),a=n[0],i=n[1],r=Math.ceil(a/8),c=Math.ceil(i/8),o=z(W(r,c)),l=C().stage,d=new w.d;d.clear(),R(d,o,8),l.addChild(d);var h=0,s=0;M((function(){if(h++>=10&&s<10&&(_(o,s<4?{deathLimit:3,birthLimit:5,clearSky:!1,margin:0}:{deathLimit:4,birthLimit:4,clearSky:!1,margin:0}),d.clear(),R(d,o,8),s++,h=0,10===s)){l.removeChild(d);for(var e=new w.h(r*c*2,{uvs:!0}),t=Q(),n=0;n<c;n++)for(var a=0;a<r;a++)if(o[n][a][0][0]){var i=new w.k(t[J(a,n,o)]);i.width=8,i.height=8,i.x=8*a,i.y=8*n,e.addChild(i)}else if(o[n][a][0][1]){var u=new w.k(1===o[n][a][0][1]?t[60]:t[61]);u.width=8,u.height=8,u.x=8*a,u.y=8*n,e.addChild(u)}l.addChild(e)}}))}),[t]),Object(L.jsx)(L.Fragment,{})},$=function(e){var t=e.setCallback;return Object(c.useEffect)((function(){t((function(e,t){}));var e=S(),n=Object(b.a)(e,2),a=n[0],i=n[1],r=Math.ceil(a/8),c=Math.ceil(i/8),o=z(W(r,c,{splitSize:0,clearHeight:Math.round(c/4),density:{block:.5,liquid:.5}})),l=C().stage,d=new w.d,h=new w.k(w.m.WHITE);h.tint=8900331,h.width=a,h.height=i,h.cacheAsBitmap=!0,d.clear(),R(d,o,8),l.addChild(d);var s=0,u=0;M((function(){if(s++>=10&&u<10&&(_(o,u<4?{deathLimit:3,birthLimit:5,clearSky:!0,margin:Math.round(c/6)}:{deathLimit:4,birthLimit:4,clearSky:!0,margin:Math.round(c/6)}),d.clear(),R(d,o,8),u++,s=0,10===u)){l.removeChild(d),l.addChild(h);for(var e=new w.h(r*c,{uvs:!0}),t=Q(),n=0;n<c;n++)for(var a=0;a<r;a++)if(o[n][a][0][0]){var i=new w.k(t[J(a,n,o)]);i.width=8,i.height=8,i.x=8*a,i.y=8*n,e.addChild(i)}else if(o[n][a][0][1]){var f=new w.k(1===o[n][a][0][1]?t[60]:t[61]);f.width=8,f.height=8,f.x=8*a,f.y=8*n,e.addChild(f)}l.addChild(e)}}))}),[t]),Object(L.jsx)(L.Fragment,{})},ee=u.a.mark(oe),te=u.a.mark(le),ne=.005,ae=.125,ie=.005,re=.5;function ce(e,t){var n=e+t[1][0];return n<=1?1:n<2.125?(1+n*ae)/1.125:(n+ae)/2}function oe(e,t,n){var a,i,r,c,o,l,d,h,s,f,b,v,j;return u.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:a=0,i=5e3,r=Date.now(),l=0,h=0;case 4:if(!(h<t.length)){u.next=20;break}s=0;case 6:if(!(s<t[0].length)){u.next=17;break}if(t[h][s].diff=0,!(++a>i)){u.next=14;break}if(a=0,!(Date.now()-r>=n)){u.next=14;break}return void(u.next=13);case 13:r=u.sent;case 14:s++,u.next=6;break;case 17:h++,u.next=4;break;case 20:f=0;case 21:if(!(f<e.length)){u.next=66;break}b=0;case 23:if(!(b<e[f].length)){u.next=63;break}if(d=e[f][b],c=d[1][0],o=d[1][0],l=0,!d[0][0]){u.next=30;break}return u.abrupt("continue",60);case 30:if(0!==d[1][0]){u.next=32;break}return u.abrupt("continue",60);case 32:if(!t[f][b].isStable){u.next=34;break}return u.abrupt("continue",60);case 34:if(!(d[1][0]<ne)){u.next=37;break}return d[1][0]=0,u.abrupt("continue",60);case 37:if(f<e.length-1&&!e[f+1][b][0][0]&&(l=ce(d[1][0],e[f+1][b])-e[f+1][b][1][0],e[f+1][b][1][0]>0&&l>ie&&(l*=re),(l=Math.max(l,0))>Math.min(4,d[1][0])&&(l=Math.min(4,d[1][0])),0!==l&&(o-=l,t[f][b].diff-=l,t[f+1][b].diff+=l,t[f+1][b].isStable=!1)),!(o<ne)){u.next=41;break}return t[f][b].diff-=o,u.abrupt("continue",60);case 41:if(b>0&&!e[f][b-1][0][0]&&((l=(o-e[f][b-1][1][0])/4)>ie&&(l*=re),(l=Math.max(l,0))>Math.min(4,o)&&(l=Math.min(4,o)),0!==l&&(o-=l,t[f][b].diff-=l,t[f][b-1].diff+=l,t[f][b-1].isStable=!1)),!(o<ne)){u.next=45;break}return t[f][b].diff-=o,u.abrupt("continue",60);case 45:if(b<e[f].length-1&&!e[f][b+1][0][0]&&((l=(o-e[f][b+1][1][0])/3)>ie&&(l*=re),(l=Math.max(l,0))>Math.min(4,o)&&(l=Math.min(4,o)),0!==l&&(o-=l,t[f][b].diff-=l,t[f][b+1].diff+=l,t[f][b+1].isStable=!1)),!(o<ne)){u.next=49;break}return t[f][b].diff-=o,u.abrupt("continue",60);case 49:if(f>0&&!e[f-1][b][0][0]&&((l=o-ce(o,e[f-1][b]))>ie&&(l*=re),(l=Math.max(l,0))>Math.min(4,o)&&(l=Math.min(4,o)),0!==l&&(o-=l,t[f][b].diff-=l,t[f-1][b].diff+=l,t[f-1][b].isStable=!1)),!(o<ne)){u.next=53;break}return t[f][b].diff-=o,u.abrupt("continue",60);case 53:if(c===o&&++t[f][b].stableLevel>=10?t[f][b].isStable=!0:(f>0&&e[f-1][b]&&(t[f-1][b].isStable=!1),f<e.length-1&&e[f+1][b]&&(t[f+1][b].isStable=!1),b>0&&e[f][b-1]&&(t[f][b-1].isStable=!1),b<e[0].length-1&&e[f][b+1]&&(t[f][b+1].isStable=!1)),!(++a>i)){u.next=60;break}if(a=0,!(Date.now()-r>=n)){u.next=60;break}return void(u.next=59);case 59:r=u.sent;case 60:b++,u.next=23;break;case 63:f++,u.next=21;break;case 66:v=0;case 67:if(!(v<e.length)){u.next=84;break}j=0;case 69:if(!(j<e[v].length)){u.next=81;break}if(e[v][j][1][0]+=t[v][j].diff,e[v][j][1][0]<ne&&(e[v][j][1][0]=0),!(++a>i)){u.next=78;break}if(a=0,!(Date.now()-r>=n)){u.next=78;break}return void(u.next=77);case 77:r=u.sent;case 78:j++,u.next=69;break;case 81:v++,u.next=67;break;case 84:return u.abrupt("return");case 85:case"end":return u.stop()}}),ee)}function le(e,t){var n,a,i=arguments;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=i.length>2&&void 0!==i[2]?i[2]:3,a=oe(e,t,n);case 2:return a.next(Date.now()).done&&(a=oe(e,t,n)),void(r.next=6);case 6:r.next=2;break;case 8:case"end":return r.stop()}}),te)}var de=function(e){var t=e.setCallback;return Object(c.useEffect)((function(){t((function(e,t){}));for(var e=S(),n=Object(b.a)(e,2),a=n[0],i=n[1],r=Math.ceil(a/8),c=Math.ceil(i/8),o=z(W(r,c,{splitSize:0,clearHeight:Math.round(c/4),density:{block:.5,liquid:.5}})),l=U(r,c),d=0;d<10;d++)_(o,d<4?{deathLimit:3,birthLimit:5,clearSky:!0,margin:Math.round(c/6)}:{deathLimit:4,birthLimit:4,clearSky:!0,margin:Math.round(c/6)});var h=C().stage,s=new w.h(r*c,{uvs:!0}),u=new w.h(r*c,{uvs:!0,alpha:!0}),f=Q(),v=V(),j=new Array(c).fill(!0).map((function(){return new Array(r)})),g=new w.k(w.m.WHITE);g.tint=8900331,g.width=a,g.height=i,g.cacheAsBitmap=!0,h.addChild(g);for(var x=0;x<c;x++)for(var p=0;p<r;p++)if(o[x][p][0][0]){var m=new w.k(f[J(p,x,o)]);m.width=8,m.height=8,m.x=8*p,m.y=8*x,s.addChild(m)}else{var O=o[x][p][1][0]?G(p,x,o):37,y=new w.k(v[O]);if(y.width=8,y.height=8,y.x=8*p,y.y=8*x,j[x][p]=y,u.addChild(y),o[x][p][0][1]){var k=new w.k(1===o[x][p][0][1]?f[60]:f[61]);k.width=8,k.height=8,k.x=8*p,k.y=8*x,s.addChild(k)}}h.addChild(s),h.addChild(u);var L=le(o,l);M((function(){L.next();for(var e=0;e<c;e++)for(var t=0;t<r;t++)if(!o[e][t][0][0]){var n=o[e][t][1][0]?G(t,e,o):37;j[e][t].texture=v[n],j[e][t].alpha=Math.min(.4+.1*o[e][t][1][0],.8)}}))}),[t]),Object(L.jsx)(L.Fragment,{})};function he(e){var t=new w.c,n=new w.d,a=new w.l(e,{fontSize:13,fill:16777215});return a.x=1,a.y=1,n.beginFill(0,.5),n.drawRect(0,0,a.width+2,a.height+2),n.endFill(),t.addChild(n),t.addChild(a),{container:t,label:a}}var se=function(e){var t=e.setCallback;return Object(c.useEffect)((function(){for(var e=S(),n=Object(b.a)(e,2),a=n[0],i=n[1],r=Math.ceil(a/8),c=Math.ceil(i/8),o=z(W(r,c,{splitSize:0,clearHeight:Math.round(c/4),density:{block:.5,liquid:0}})),l=U(r,c),d=0;d<10;d++)_(o,d<4?{deathLimit:3,birthLimit:5,clearSky:!0,margin:Math.round(c/6)}:{deathLimit:4,birthLimit:4,clearSky:!0,margin:Math.round(c/6)});t((function(e,t){for(var n=[Math.floor(e/8),Math.floor(t/8)],a=n[0],i=n[1],l=-3;l<=3;l++)for(var d=-3;d<=3;d++)a+d>=0&&a+d<r&&i+l>=0&&i+l<c&&!o[i+l][a+d][0][0]&&(o[i+l][a+d][1][0]+=1)}));var h=C().stage,s=he("Click to create water").container;s.x=Math.round(a/2-s.width/2),s.y=60;var u=new w.h(r*c,{uvs:!0}),f=new w.h(r*c,{uvs:!0,alpha:!0}),v=Q(),j=V(),g=new Array(c).fill(!0).map((function(){return new Array(r)})),x=new w.k(w.m.WHITE);x.tint=8900331,x.width=a,x.height=i,x.cacheAsBitmap=!0,h.addChild(x);for(var p=0;p<c;p++)for(var m=0;m<r;m++)if(o[p][m][0][0]){var O=new w.k(v[J(m,p,o)]);O.width=8,O.height=8,O.x=8*m,O.y=8*p,u.addChild(O)}else{var y=o[p][m][1][0]?G(m,p,o):37,k=new w.k(j[y]);if(k.width=8,k.height=8,k.x=8*m,k.y=8*p,g[p][m]=k,f.addChild(k),o[p][m][0][1]){var L=new w.k(1===o[p][m][0][1]?v[60]:v[61]);L.width=8,L.height=8,L.x=8*m,L.y=8*p,u.addChild(L)}}h.addChild(u),h.addChild(f),h.addChild(s);var A=le(o,l);M((function(){A.next();for(var e=0;e<c;e++)for(var t=0;t<r;t++)if(!o[e][t][0][0]){var n=o[e][t][1][0]?G(t,e,o):37;g[e][t].texture=j[n],g[e][t].alpha=Math.min(.4+.1*o[e][t][1][0],.8)}}))}),[t]),Object(L.jsx)(L.Fragment,{})},ue=function(e){var t=e.setCallback;return Object(c.useEffect)((function(){var e=S(),n=Object(b.a)(e,2),a=n[0],i=n[1],r=Math.ceil(a/8),c=Math.ceil(i/8),o=z(W(r,c,{splitSize:0,clearHeight:0,density:{block:0,liquid:1}})),l=U(r,c);t((function(e,t){for(var n=[Math.floor(e/8),Math.floor(t/8)],a=n[0],i=n[1],l=-5;l<=5;l++)for(var d=-5;d<=5;d++)a+d>=0&&a+d<r&&i+l>=0&&i+l<c&&!o[i+l][a+d][0][0]&&(o[i+l][a+d][1][0]+=1)}));var d=C().stage,h=he("".concat(r*c," sprites")).container,s=he("Click to create water").container;h.x=Math.round(a/2-h.width/2),h.y=60,s.x=Math.round(a/2-s.width/2),s.y=80;for(var u=new w.h(r*c,{uvs:!0}),f=V(),v=new Array(c).fill(!0).map((function(){return new Array(r)})),j=0;j<c;j++)for(var g=0;g<r;g++){var x=o[j][g][1][0]?G(g,j,o):37,p=new w.k(f[x]);p.width=8,p.height=8,p.x=8*g,p.y=8*j,v[j][g]=p,u.addChild(p)}d.addChild(u),d.addChild(s),d.addChild(h);var m=le(o,l);M((function(){m.next();for(var e=0;e<c;e++)for(var t=0;t<r;t++)if(!o[e][t][0][0]){var n=o[e][t][1][0]?G(t,e,o):37;v[e][t].texture=f[n],v[e][t].alpha=Math.min(.4+.1*o[e][t][1][0],.8)}}))}),[t]),Object(L.jsx)(L.Fragment,{})};function fe(e,t){var n=(e[1][0]-e[0][0])*(t[1][1]-t[0][1])-(t[1][0]-t[0][0])*(e[1][1]-e[0][1]);if(0===n)return-1;var a=((t[1][1]-t[0][1])*(t[1][0]-e[0][0])+(t[0][0]-t[1][0])*(t[1][1]-e[0][1]))/n,i=((e[0][1]-e[1][1])*(t[1][0]-e[0][0])+(e[1][0]-e[0][0])*(t[1][1]-e[0][1]))/n;return 0<=a&&a<=1&&0<=i&&i<=1?a:-1}var be=function(e){var t=e.setCallback;return Object(c.useEffect)((function(){var e;t((function(e,t){}));var n=S(),a=Object(b.a)(n,2),i=a[0],r=a[1],c=C().stage,o=new w.d,l=[Math.floor(i/4),Math.floor(r/4)],d=l[0],h=l[1],s=[[d,h],[3*d,3*h]],u=[[3*d,h],[d,3*h]],f=[].concat(s,u);c.addChild(o);var v,j=Object(x.a)(f);try{for(j.s();!(v=j.n()).done;){var p,m=v.value,O=he("(".concat(m,")")).container;(p=O.position).set.apply(p,Object(g.a)(m)),c.addChild(O)}}catch(L){j.e(L)}finally{j.f()}o.clear(),P(o,[s,u],{width:1,color:39168}),D(o,f,2);var y=fe(s,u),k=[s[0][0]+(s[1][0]-s[0][0])*y,s[0][1]+(s[1][1]-s[0][1])*y];D(o,[k],4,16755302);var M=he("Intersect at (".concat(k[0].toFixed(2),",").concat(k[1].toFixed(2),")")).container;(e=M.position).set.apply(e,k),c.addChild(M)}),[t]),Object(L.jsx)(L.Fragment,{})},ve=function(e){var t=e.setCallback;return Object(c.useEffect)((function(){for(var e=!0,n=S(),a=Object(b.a)(n,2),i=a[0],r=a[1],c=i<r?r:i,o=[],l=H.map((function(e){var t=Object(b.a)(e,2),n=t[0],a=t[1];return[n*(c/2e3*900)+i/2-c/2e3*450,a*(c/2e3*900)+r/2-c/2e3*500]})),d=0;d<l.length-1;d++)o.push([l[d],l[d+1]]);var h=C().stage,s=new w.d,u=he("Click to move line").container;u.x=Math.round(i/2-u.width/2),u.y=60,h.addChild(s);var f=[[Math.round(i/2),Math.round(r/2)],[i,Math.round(r/2)]],v=he("(".concat(f[0],")")).container,j=he("(".concat(f[1],")")),p=j.container,m=j.label;h.addChild(v),h.addChild(p),h.addChild(u),t((function(t,n){m.text="(".concat(Math.round(t),",").concat(Math.round(n),")"),f[1][0]=t,f[1][1]=n,e=!0}));var O=[];M((function(){var t,n;if(e){var a,i=[],r=Object(x.a)(o);try{for(r.s();!(a=r.n()).done;){var c=a.value,l=fe(f,c);l>=0&&l<=1&&i.push([f[0][0]+(f[1][0]-f[0][0])*l,f[0][1]+(f[1][1]-f[0][1])*l])}}catch(M){r.e(M)}finally{r.f()}s.clear(),P(s,o,{width:2,color:5592405,cap:w.e.ROUND}),P(s,[f],{width:1,color:39168}),D(s,f,2,16711680),D(s,i,4,16755302);var d,u=Object(x.a)(O);try{for(u.s();!(d=u.n()).done;){var b=d.value;h.removeChild(b)}}catch(M){u.e(M)}finally{u.f()}for(var j=0,m=i;j<m.length;j++){var y,k=m[j],C=he("Intersect at (".concat(Math.round(k[0]),",").concat(Math.round(k[1]),")")).container;(y=C.position).set.apply(y,Object(g.a)(k)),h.addChild(C),O.push(C)}(t=v.position).set.apply(t,Object(g.a)(f[0])),(n=p.position).set.apply(n,Object(g.a)(f[1])),e=!1}}))}),[t]),Object(L.jsx)(L.Fragment,{})};var je,ge=function(e){var t=e.setCallback;return Object(c.useEffect)((function(){t((function(e,t){}));for(var e=S(),n=Object(b.a)(e,2),a=n[0],i=n[1],r=Math.ceil(a/8),c=Math.ceil(i/8),o=z(W(r,c,{splitSize:0,clearHeight:Math.round(c/4),density:{block:.5,liquid:.3}})),l=0;l<10;l++)_(o,l<4?{deathLimit:3,birthLimit:5,clearSky:!0,margin:Math.round(c/6)}:{deathLimit:4,birthLimit:4,clearSky:!0,margin:Math.round(c/6)});var d=C({defaultLighting:!1}),h=d.stage,s=d.lightContainer,u=new w.h(r*c,{uvs:!0}),f=Q(),v=new w.k(w.m.WHITE),j=new w.d;v.tint=8900331,v.width=a,v.height=i,v.cacheAsBitmap=!0;var p,m=function(e,t,n,a,i){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,c=[];c.push([[[0,0],[e*n,a*n]],r]);for(var o=a;o<t;o++){var l=Math.max(0,r-(o-a+1)*i);l&&c.push([[[0,o*n],[e*n,n]],l])}return c}(r,c,8,Math.round(c/3),2/Math.round(c/4*3)),O=Object(x.a)(m);try{for(O.s();!(p=O.n()).done;){var y=p.value,k=Object(b.a)(y,2),M=k[0],L=k[1];j.beginFill(16777215,L),j.drawRect.apply(j,Object(g.a)(M[0]).concat(Object(g.a)(M[1]))),j.endFill()}}catch(T){O.e(T)}finally{O.f()}for(var A=0;A<c;A++)for(var F=0;F<r;F++)if(o[A][F][0][0]){var E=new w.k(f[J(F,A,o)]);E.width=8,E.height=8,E.x=8*F,E.y=8*A,u.addChild(E)}else if(o[A][F][0][1]){var I=new w.k(1===o[A][F][0][1]?f[60]:f[61]);I.width=8,I.height=8,I.x=8*F,I.y=8*A,u.addChild(I)}h.addChild(v),h.addChild(u),s.addChild(j),j.cacheAsBitmap=!0}),[t]),Object(L.jsx)(L.Fragment,{})},xe=function(){var e=Object(c.useState)(0),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(b.a)(i,2),o=r[0],l=r[1],d=Object(c.useState)(!1),h=Object(b.a)(d,2),s=h[0],g=h[1];return Object(c.useEffect)((function(){Object(f.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(e){var t=S(),n=Object(b.a)(t,2),a=n[0],i=n[1],r=e.targetTouches[0].clientX/window.innerWidth*a,c=e.targetTouches[0].clientY/window.innerHeight*i;je&&je(r,c)},n=function(e){var t=S(),n=Object(b.a)(t,2),a=n[0],i=n[1],r=e.clientX/window.innerWidth*a,c=e.clientY/window.innerHeight*i;je&&je(r,c)},window.removeEventListener("touchstart",t),window.removeEventListener("click",n),window.addEventListener("touchstart",t),window.addEventListener("click",n),g(!1),C(),e.next=10,y((function(e,t){a(Math.round(100*e)),l(t)}));case 10:g(!0);case 11:case"end":return e.stop()}}),e)})))()}),[]),Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(j.a,{style:{height:"100%"},children:[Object(L.jsxs)(j.a,{id:"content",children:[s&&Object(L.jsx)(v.a,{exact:!0,path:"/",render:function(){return Object(L.jsx)(N,{setCallback:function(e){return je=e}})}}),s&&Object(L.jsx)(v.a,{exact:!0,path:"/cave-generate",render:function(){return Object(L.jsx)(Y,{setCallback:function(e){return je=e}})}}),s&&Object(L.jsx)(v.a,{exact:!0,path:"/cave-generate-texture",render:function(){return Object(L.jsx)(Z,{setCallback:function(e){return je=e}})}}),s&&Object(L.jsx)(v.a,{exact:!0,path:"/cave-generate-sky",render:function(){return Object(L.jsx)($,{setCallback:function(e){return je=e}})}}),s&&Object(L.jsx)(v.a,{exact:!0,path:"/liquid-simulation",render:function(){return Object(L.jsx)(de,{setCallback:function(e){return je=e}})}}),s&&Object(L.jsx)(v.a,{exact:!0,path:"/liquid-simulation-2",render:function(){return Object(L.jsx)(se,{setCallback:function(e){return je=e}})}}),s&&Object(L.jsx)(v.a,{exact:!0,path:"/liquid-stress-test",render:function(){return Object(L.jsx)(ue,{setCallback:function(e){return je=e}})}}),s&&Object(L.jsx)(v.a,{exact:!0,path:"/line-intersection",render:function(){return Object(L.jsx)(be,{setCallback:function(e){return je=e}})}}),s&&Object(L.jsx)(v.a,{exact:!0,path:"/line-intersection-2",render:function(){return Object(L.jsx)(ve,{setCallback:function(e){return je=e}})}}),s&&Object(L.jsx)(v.a,{exact:!0,path:"/default-lighting",render:function(){return Object(L.jsx)(ge,{setCallback:function(e){return je=e}})}}),Object(L.jsx)(A,{})]}),Object(L.jsx)(K,{hide:s,asset:o,percentage:n}),Object(L.jsx)(q,{})]})})};n(328);d.a.render(Object(L.jsx)(o.a.StrictMode,{children:Object(L.jsx)(h.a,{children:Object(L.jsx)(xe,{})})}),document.getElementById("root"))}},[[329,1,2]]]);
//# sourceMappingURL=main.012cf8e5.chunk.js.map