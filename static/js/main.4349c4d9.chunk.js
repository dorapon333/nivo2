(this.webpackJsonpnivo=this.webpackJsonpnivo||[]).push([[0],{244:function(e,t,a){e.exports=a(387)},386:function(e,t,a){},387:function(e,t,a){"use strict";a.r(t);var n=a(14),i=a(8),l=a(1),r=a.n(l),c=a(193),s=a(194),o=a(202),m=a(206),u=(a(386),function(e){var t=e.step,a=e.newNodes,n=e.newLinks;return r.a.createElement("div",{style:{width:"1000px",height:"1000px"}},r.a.createElement(s.a,{nodes:a,links:n,margin:{top:0,right:0,bottom:0,left:0},repulsivity:3,iterations:50,nodeColor:function(e){return 1===e.values[t]?"#E23C34":0===e.values[t]?"gray":-1===e.values[t]?"#5BB2DD":void 0},linkColor:function(e){return"gray"},nodeBorderWidth:0,nodeBorderColor:{from:"color",modifiers:[["darker",.8]]},linkThickness:function(e){return 2},motionStiffness:160,motionDamping:12}))}),d=function(e){for(var t=e.nowStep,a=e.newNodes,l={Negative:{},Neutral:{},Positive:{}},c=0;c<t;c++)l.Negative[c]=0,l.Neutral[c]=0,l.Positive[c]=0;for(var s=Array.from(new Set(a.map((function(e){return e.values})))),m=0;m<t;m++){var u,d=Object(i.a)(s);try{for(d.s();!(u=d.n()).done;){var f=u.value;-1===f[m]?l.Negative[m]+=1:0===f[m]?l.Neutral[m]+=1:1===f[m]&&(l.Positive[m]+=1)}}catch(N){d.e(N)}finally{d.f()}}for(var v=1,g=0;g<3;g++)for(var h=0;h<t;h++)v=1,0===g?(v=l.Negative[h]/a.length*100,l.Negative[h]=Math.round(10*v)/10):1===g?(v=l.Neutral[h]/a.length*100,l.Neutral[h]=Math.round(10*v)/10):(v=l.Positive[h]/a.length*100,l.Positive[h]=Math.round(10*v)/10);var p=Object.entries(l).map((function(e){var t=Object(n.a)(e,2),a=t[0],i=t[1],l=0;return{id:a,data:Object.values(i).map((function(e){return{x:l++,y:e}}))}}));return r.a.createElement("div",{style:{width:"1000px",height:"500px"}},r.a.createElement(o.a,{data:p,margin:{top:50,right:110,bottom:50,left:60},xScale:{type:"point"},yScale:{type:"linear",min:0,max:100,stacked:!1,reverse:!1},axisTop:null,axisRight:null,axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:"TimeStep",legendOffset:36,legendPosition:"middle"},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"ratio",legendOffset:-40,legendPosition:"middle"},colors:function(e){return"Negative"===e.id?"#5BB2DD":"Neutral"===e.id?"gray":"#E23C34"},pointSize:10,pointColor:{theme:"background"},pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabel:"y",pointLabelYOffset:-12,useMesh:!0,legends:[{anchor:"bottom-right",direction:"column",justify:!1,translateX:100,translateY:0,itemsSpacing:0,itemDirection:"left-to-right",itemWidth:80,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle",symbolBorderColor:"rgba(0, 0, 0, .5)",effects:[{on:"hover",style:{itemBackground:"rgba(0, 0, 0, .03)",itemOpacity:1}}]}]}))},f=function(e){for(var t=e.step,a=e.data,l=e.newNodes,c={Negative:{},Neutral:{},Positive:{}},s=0;s<t;s++)c.Negative[s]=0,c.Neutral[s]=0,c.Positive[s]=0;for(var o=Array.from(new Set(l.map((function(e){return e.values})))),u=0;u<t;u++){var d,f=Object(i.a)(o);try{for(f.s();!(d=f.n()).done;){var v=d.value;-1===v[u]?c.Negative[u]+=1:0===v[u]?c.Neutral[u]+=1:1===v[u]&&(c.Positive[u]+=1)}}catch(x){f.e(x)}finally{f.f()}}for(var g=1,h=0;h<3;h++)for(var p=0;p<t;p++)g=1,0===h?(g=c.Negative[p]/l.length*100,c.Negative[p]=Math.round(10*g)/10):1===h?(g=c.Neutral[p]/l.length*100,c.Neutral[p]=Math.round(10*g)/10):(g=c.Positive[p]/l.length*100,c.Positive[p]=Math.round(10*g)/10);var N=[];(N=a.nodes.filter((function(e){var t,n=0,l=Object(i.a)(a.links);try{for(l.s();!(t=l.n()).done;){var r=t.value;e.id!==r.source&&e.id!==r.target||n++}}catch(x){l.e(x)}finally{l.f()}if(n>0)return e.Degree=n,e}))).sort((function(e,t){return e.Degree>t.Degree?-1:1})),N.slice(0,99);var E,b={},y=Object(i.a)(N);try{for(y.s();!(E=y.n()).done;){var O=E.value;b[O.Degree]=0}}catch(x){y.e(x)}finally{y.f()}var j,S=Object(i.a)(N);try{for(S.s();!(j=S.n()).done;){var k=j.value;b[k.Degree]++}}catch(x){S.e(x)}finally{S.f()}var w=[{id:"Degree",data:Object.entries(b).map((function(e){var t=Object(n.a)(e,2);return{x:t[0],y:t[1]/N.length}}))}];return r.a.createElement("div",{style:{width:"1000px",height:"500px"}},r.a.createElement(m.a,{data:w,margin:{top:60,right:140,bottom:70,left:90},xScale:{type:"log",min:1,max:"auto"},xFormat:function(e){return e+""},yScale:{type:"log",min:1e-5,max:1},yFormat:function(e){return e+""},blendMode:"multiply",axisTop:null,axisRight:null,axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:"Degree",legendPosition:"middle",legendOffset:46},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"Count",legendPosition:"middle",legendOffset:-60,format:function(e){var t=e.toExponential(1);return t.startsWith("1")?t:""}},legends:[{anchor:"bottom-right",direction:"column",justify:!1,translateX:130,translateY:0,itemWidth:100,itemHeight:12,itemsSpacing:5,itemDirection:"left-to-right",symbolSize:12,symbolShape:"circle",effects:[{on:"hover",style:{itemOpacity:1}}]}]}))},v=function(){var e=Object(l.useRef)(null),t=Object(l.useRef)(null),a=Object(l.useRef)(null),c=50,s=Object(l.useState)(50),o=Object(n.a)(s,2),m=o[0],v=o[1],g=Object(l.useState)(50),h=Object(n.a)(g,2),p=h[0],N=h[1],E=Object(l.useState)({nodes:[],links:[]}),b=Object(n.a)(E,2),y=b[0],O=b[1];Object(l.useEffect)((function(){window.fetch("all.json").then((function(e){return e.json()})).then((function(e){var t,a=Object(i.a)(e.nodes);try{for(a.s();!(t=a.n()).done;){var n=t.value;n.id=n.id.toString(),n.radius=5}}catch(s){a.e(s)}finally{a.f()}var l,r=Object(i.a)(e.links);try{for(r.s();!(l=r.n()).done;){var c=l.value;c.color="gray",c.source=c.source.toString(),c.target=c.target.toString(),c.distance=20}}catch(s){r.e(s)}finally{r.f()}O(e)}))}),[]);var j=y.links.filter((function(e,t){return e.weight>=5}));var S=y.nodes.filter((function(e){var t,a=Object(i.a)(j);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(e.id===n.source||e.id===n.target)return e}}catch(l){a.e(l)}finally{a.f()}}));console.log(S);var k=[];(k=y.nodes.filter((function(e){var t,a=0,n=Object(i.a)(j);try{for(n.s();!(t=n.n()).done;){var l=t.value;e.id!==l.source&&e.id!==l.target||a++}}catch(r){n.e(r)}finally{n.f()}if(a>1)return e.Degree=a,e}))).sort((function(e,t){return e.Degree>t.Degree?-1:1})),k.slice(0,99);var w=k.map((function(e){return r.a.createElement("option",{value:e.id},e.name)})),x=[0,25,50,75,100].map((function(e){return r.a.createElement("option",{value:e},e)})),P=function(n){var l;console.log(y),console.log("simu"+n),N(n),v(n),console.log(n);var r,c=[],s=[],o=Object(i.a)(a.current.options);try{for(o.s();!(r=o.n()).done;){var m=r.value;!0===m.selected&&(l=m.value)}}catch(j){o.e(j)}finally{o.f()}var u,d=Object(i.a)(e.current.options);try{for(d.s();!(u=d.n()).done;){var f=u.value;!0===f.selected&&c.push(f.value)}}catch(j){d.e(j)}finally{d.f()}var g,h=Object(i.a)(t.current.options);try{for(h.s();!(g=h.n()).done;){var E=g.value;!0===E.selected&&s.push(E.value)}}catch(j){h.e(j)}finally{h.f()}var b=function(e,t,a,n,l){var r,c=Object(i.a)(e.nodes);try{for(c.s();!(r=c.n()).done;){r.value.values[0]=0}}catch(j){c.e(j)}finally{c.f()}var s,o=Object(i.a)(e.nodes);try{for(o.s();!(s=o.n()).done;){var m,u=s.value,d=Object(i.a)(t);try{for(d.s();!(m=d.n()).done;){m.value===u.id&&(u.values[0]=1)}}catch(j){d.e(j)}finally{d.f()}var f,v=Object(i.a)(a);try{for(v.s();!(f=v.n()).done;){f.value===u.id&&(u.values[0]=-1)}}catch(j){v.e(j)}finally{v.f()}}}catch(j){o.e(j)}finally{o.f()}var g,h={},p=Object(i.a)(e.nodes);try{for(p.s();!(g=p.n()).done;){h[g.value.id]=[]}}catch(j){p.e(j)}finally{p.f()}var N,E=Object(i.a)(e.links);try{for(E.s();!(N=E.n()).done;){var b=N.value;h[b.source].push(b.target),h[b.target].push(b.source)}}catch(j){E.e(j)}finally{E.f()}var y,O={},S=Object(i.a)(e.nodes);try{for(S.s();!(y=S.n()).done;){var k=y.value;O[k.id]=k}}catch(j){S.e(j)}finally{S.f()}for(var w=100-n,x=1;x<=l;x++){var P,D=Object(i.a)(e.nodes);try{for(D.s();!(P=D.n()).done;){var C=P.value,B=0,R=h[C.id].length;B+=C.values[x-1]/(R+1)*n;var M,L=Object(i.a)(h[C.id]);try{for(L.s();!(M=L.n()).done;){var z=O[M.value],T=w/(R+1);1===z.values[x-1]?B+=1*T:-1===z.values[x-1]&&(B-=1*T)}}catch(j){L.e(j)}finally{L.f()}C.values[x]=B>0?1:B<0?-1:0}}catch(j){D.e(j)}finally{D.f()}}return Object.assign({},e)}(y,c,s,l,p);O(b)};return r.a.createElement("div",null,r.a.createElement("head",null,r.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css"})),r.a.createElement("section",{className:"hero is-warning"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("h1",{className:"title"},"Negative\u30fbPositive\u306e\u62e1\u6563\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3"),r.a.createElement("h2",{className:"subtitle"},"\u4f50\u91ce\u5e78\u6075\u3089\u306e\u300cSNS\u306b\u304a\u3051\u308b\u798f\u5cf6\u539f\u767a\u4e8b\u6545\u5f8c\u306e\u653e\u5c04\u7dda\u60c5\u5831\u62e1\u6563\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u300d \u3067\u53ce\u96c6\u3055\u308c\u305f\u653e\u5c04\u7dda\u306b\u95a2\u3059\u308b\u30c4\u30a4\u30fc\u30c8\u30c7\u30fc\u30bf\u3092\u7528\u3044\u3066\u3044\u307e\u3059\u3002 \u30c7\u30fc\u30bf\u306eRT\u95a2\u9023\u30c7\u30fc\u30bf\u3092\u4f5c\u6210\u3057\u3001\uff13\u3064\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u884c\u3044\u307e\u3059\u3002"))),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"tile is-ancestor"},r.a.createElement("div",{className:"tile is-vertical"},r.a.createElement("div",{className:"tile"},r.a.createElement("div",{className:"tile is-parent is-vertical is-2"},r.a.createElement("article",{className:"tile is-child notification"},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"title"},"\u8a73\u7d30\u8a2d\u5b9a"),r.a.createElement("p",{className:"subtitle"},"4\u3064\u306e\u9805\u76ee\u306e\u8a73\u7d30\u3092\u8a2d\u5b9a\u3057\u3001Start\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u304c\u958b\u59cb\u3055\u308c\u307e\u3059\u3002"),r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("article",{className:"tile is-child notification"},r.a.createElement("p",{className:"title"},"Positive"),r.a.createElement("p",{className:"subtitle"},"Ctrl\u3067\u8907\u6570\u9078\u629e\u53ef\u80fd"),r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"select is-multiple"},r.a.createElement("select",{multiple:!0,ref:e},w))))),r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("article",{className:"tile is-child notification"},r.a.createElement("p",{className:"title"},"Negative"),r.a.createElement("p",{className:"subtitle"},"Ctrl\u3067\u8907\u6570\u9078\u629e\u53ef\u80fd"),r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"select is-multiple"},r.a.createElement("select",{multiple:!0,ref:t},w))))),r.a.createElement("div",{className:"tile is-parent "},r.a.createElement("article",{className:"tile is-child notification"},r.a.createElement("p",{className:"title"},"Step"),r.a.createElement("p",{className:"subtitle"},"step\u8a2d\u5b9a"),r.a.createElement("div",{class:"control has-icons-left has-icons-right"},r.a.createElement("form",{onChange:function(e){e.preventDefault(),c=+e.target.value,console.log("handleChange"+c)}},r.a.createElement("input",{name:"step",type:"number",defaultValue:p}),r.a.createElement("p",null,m,"step\u307e\u3067\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u884c\u3046"))))),r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("article",{className:"tile is-child notification"},r.a.createElement("p",{className:"title"},"\u30eb\u30fc\u30eb\uff11\uff1a\u6295\u7968Model"),r.a.createElement("p",{className:"subtitle"},"\u81ea\u5206\u306e\u610f\u601d\u30920~100%\u306e\u5272\u5408\u3067\u53cd\u6620\u3057\u307e\u3059"),r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"select"},r.a.createElement("select",{ref:a},x))))),r.a.createElement("div",{className:"tile is-parent  notification"},r.a.createElement("article",{className:"tile is-child notification"},r.a.createElement("button",{className:"button is-danger is-active is-large is-fullwidth",onClick:function(){P(c)}},"Start")))))),r.a.createElement("div",{className:"tile is-parent is-vertical "},r.a.createElement("article",{className:"tile is-child notification is-white"},r.a.createElement("p",{className:"title"},"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"),r.a.createElement("p",{className:"subtitle"},"Positive\u3068Negative\u306b\u95a2\u3059\u308b\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u56f3\u3067\u3059\u3002 \u4e0b\u306e\u30b9\u30c6\u30c3\u30d7\u6570\u3092\u5909\u66f4\u3059\u308b\u4e8b\u3067\u3001\u5404\u30b9\u30c6\u30c3\u30d7\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u898b\u308b\u4e8b\u304c\u3067\u304d\u307e\u3059\u3002",r.a.createElement("br",null),"\u9752\u8272\u306f\u300c\u6b63\u3057\u3044\u60c5\u5831\u3092\u77e5\u3063\u3066\u3044\u308b\u72b6\u614b( Positive )\u300d\u3067\u3059\u3002\u7070\u8272\u306f \u300c\u4f55\u3082\u77e5\u3089\u306a\u3044\u72b6\u614b( Neutral )\u300d \u3067\u3059\u3002\u8d64\u8272\u306f\u300c\u30c7\u30de\u3092\u4fe1\u3058\u3066\u3044\u308b\u72b6\u614b( Negative )\u300d\u3067\u3059\u3002 \u300cweight(RT\u56de\u6570)\u300d\u304c5\u4ee5\u4e0b\u306e\u3082\u306e\u3068\u3001\u5b64\u7acb\u30ce\u30fc\u30c9\u306f\u4e88\u3081\u53d6\u308a\u9664\u3044\u3066\u3044\u307e\u3059\u3002"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),N(+e.target.elements.step.value),console.log("handleSubmit"+e.target.elements.step.value)}},r.a.createElement("input",{name:"step",type:"number",defaultValue:p}),r.a.createElement("button",{className:"button is-light",type:"submit"},"\u30b9\u30c6\u30c3\u30d7\u6570\u3092\u5909\u66f4\u3059\u308b\uff01"),r.a.createElement("p",null,"\u73fe\u5728\u306e\u30b9\u30c6\u30c3\u30d7\u6570 ",p)),r.a.createElement("div",{className:"container "},r.a.createElement(u,{step:p,newNodes:S,newLinks:j})))),r.a.createElement("div",{className:"tile  is-vertical is-parent "},r.a.createElement("article",{className:"tile  is-vertical is-child notification is-white"},r.a.createElement("p",{className:"title"},"\u6298\u308c\u7dda\u30b0\u30e9\u30d5"),r.a.createElement("p",{className:"subtitle"},"\u5404\u30bf\u30a4\u30e0\u30b9\u30c6\u30c3\u30d7\u306b\u5bfe\u3057\u3001\u30ce\u30fc\u30c9\u6570\u306e\u5272\u5408\u3092\u898b\u308b\u4e8b\u304c\u3067\u304d\u307e\u3059\u3002 \u6a2a\u8ef8\u304c\u300c\u5404\u30bf\u30a4\u30e0\u30b9\u30c6\u30c3\u30d7\u300d\u3001\u7e26\u8ef8\u304c\u300c\u5168\u4f53\u3092\uff11\u3068\u3057\u305f\u6642\u306e\u5272\u5408\u300d\u3067\u3059\u3002",r.a.createElement("br",null),"\u203b\u5168\u4f53\u3092\uff11\u3068\u3057\u3066\u3044\u307e\u3059"),r.a.createElement("div",{className:"container"},r.a.createElement(d,{step:p,nowStep:m,newNodes:S,newLinks:j}))),r.a.createElement("article",{className:"tile  is-vertical is-child notification is-white"},r.a.createElement("p",{className:"title"},"\u6b21\u6570\u5206\u5e03"),r.a.createElement("p",{className:"subtitle"},"\u6b21\u6570\u306b\u95a2\u3057\u305f\u5206\u5e03\u3092\u307f\u308b\u4e8b\u304c\u3067\u307e\u3059\u3002 \u6a2a\u8ef8\u304c\u300c\u6b21\u6570\u300d\u3001\u7e26\u8ef8\u304c\u300c\u5272\u5408\u300d\u3067\u3059\u3002"),r.a.createElement("div",{className:"container "},r.a.createElement(f,{step:p,data:y,newNodes:S,newLinks:j})))))))),r.a.createElement("footer",{className:"footer is-warning"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,"\xa9 2020 \u8239\u6728\u99ff\u4e4b\u4ecb, \u671b\u6708\u6c99\u548c"))))};Object(c.render)(r.a.createElement(v,null),document.querySelector("#content"))}},[[244,1,2]]]);
//# sourceMappingURL=main.4349c4d9.chunk.js.map