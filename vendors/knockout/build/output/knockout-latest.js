/*!
 * Knockout JavaScript library v3.5.1-sm
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(R=>{function L(a,b){return a===b&&a!==Object(a)}function ca(a,b){var d;return()=>{d||(d=setTimeout(()=>{d=0;a()},b))}}function da(a,b){var d;return()=>{clearTimeout(d);d=setTimeout(a,b)}}function ea(a,b){b?.dispose?.()}function fa(a,b){var d=this.Lb,e=d[x];e.X||(this.Ma&&this.va[b]?(d.kb(b,a,this.va[b]),this.va[b]=null,--this.Ma):e.v[b]||d.kb(b,a,e.A?{T:a}:d.Db(a)),a.ea&&a.Hb())}function S(a){a=c.g.l.get(a,E);var b=a?.D;b&&(a.D=null,b.xb())}function T(a,b){for(var d,e=c.m.firstChild(b);d=e;)e=c.m.nextSibling(d),
U(a,d);c.j.notify(b,c.j.F)}function U(a,b){var d=a;if(1===b.nodeType||c.pb.Xb(b))d=V(b,null,a);d&&!b.matches?.("SCRIPT,TEXTAREA,TEMPLATE")&&T(d,b)}function ha(a){var b=[],d={},e=[];c.g.K(a,function f(l){if(!d[l]){var h=c.i[l];h&&(h.after&&(e.push(l),h.after.forEach(k=>{if(a[k]){if(e.includes(k))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+e.join(", "));f(k)}}),e.length--),b.push({key:l,vb:h}));d[l]=!0}});return b}function V(a,b,d){var e=c.g.l.Ra(a,E,
{}),g=e.Ib;if(!b){if(g)throw Error("You cannot apply bindings multiple times to the same element.");e.Ib=!0}g||(e.context=d);e.Va||(e.Va={});if(b&&"function"!==typeof b)var l=b;else{var f=c.o(()=>{if(l=b?b(d,a):c.pb.Ob(a,d))d[F]?.(),d[W]?.();return l},{s:a});l&&f.isActive()||(f=null)}var h=d,k;if(l){var n=f?m=>()=>f()[m]():m=>l[m],p={get:m=>l[m]&&n(m)(),has:m=>m in l};c.j.F in l&&c.j.subscribe(a,c.j.F,()=>{var m=l[c.j.F]();if(m){var q=c.m.childNodes(a);q.length&&m(q,c.dataFor(q[0]))}});c.j.ca in l&&
(h=c.j.$a(a,d),c.j.subscribe(a,c.j.ca,()=>{var m=l[c.j.ca]();m&&c.m.firstChild(a)&&m(a)}));ha(l).forEach(m=>{var q=m.vb.init,r=m.vb.update,u=m.key;if(8===a.nodeType&&!c.m.aa[u])throw Error("The binding '"+u+"' cannot be used with comment nodes");try{"function"==typeof q&&c.u.I(()=>{var t=q(a,n(u),p,h.$data,h);if(t&&t.controlsDescendantBindings){if(void 0!==k)throw Error("Multiple bindings ("+k+" and "+u+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
k=u}}),"function"==typeof r&&c.o(()=>r(a,n(u),p,h.$data,h),{s:a})}catch(t){throw t.message='Unable to process binding "'+u+": "+l[u]+'"\nMessage: '+t.message,t;}})}return void 0===k&&h}function M(a,b){return a&&a instanceof c.ba?a:new c.ba(a,null,b)}var G=R.document,N={},c="undefined"!==typeof N?N:{};c.P=(a,b)=>{a=a.split(".");for(var d=c,e=0,g=a.length-1;e<g;e++)d=d[a[e]];d[a[g]]=b};c.g={extend:(a,b)=>b?Object.assign(a,b):a,K:(a,b)=>a&&Object.entries(a).forEach(d=>b(d[0],d[1])),Qa:a=>[...a.childNodes].forEach(b=>
c.removeNode(b)),Wb:a=>{a=[...a];var b=(a[0]?.ownerDocument||G).createElement("div");a.forEach(d=>b.append(c.ha(d)));return b},ua:(a,b)=>Array.prototype.map.call(a,b?d=>c.ha(d.cloneNode(!0)):d=>d.cloneNode(!0)),pa:(a,b)=>{c.g.Qa(a);b&&a.append(...b)},xa:(a,b)=>{if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==b;)--a.length;if(1<a.length){b=a[0];var d=a[a.length-1];for(a.length=0;b!==d;)a.push(b),b=b.nextSibling;
a.push(d)}}return a},Cb:a=>null==a?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,""),Pa:a=>a.ownerDocument.documentElement.contains(1!==a.nodeType?a.parentNode:a),Eb:(a,b)=>{if(!a?.nodeType)throw Error("element must be a DOM node when calling triggerEvent");a.dispatchEvent(new Event(b))},h:a=>c.W(a)?a():a,Za:(a,b)=>a.textContent=c.g.h(b)};c.P("utils",c.g);c.P("unwrap",c.g.h);(()=>{let a=0,b="__ko__"+Date.now(),d=new WeakMap;c.g.l={get:(e,g)=>(d.get(e)||{})[g],set:(e,g,l)=>{d.has(e)?
d.get(e)[g]=l:d.set(e,{[g]:l});return l},Ra(e,g,l){return this.get(e,g)||this.set(e,g,l)},clear:e=>d.delete(e),Z:()=>a++ +b}})();c.g.N=(()=>{var a=c.g.l.Z(),b={1:1,8:1,9:1},d={1:1,9:1};const e=(f,h)=>{var k=c.g.l.get(f,a);h&&!k&&(k=new Set,c.g.l.set(f,a,k));return k},g=f=>{var h=e(f);h&&(new Set(h)).forEach(k=>k(f));c.g.l.clear(f);d[f.nodeType]&&l(f.childNodes,!0)},l=(f,h)=>{for(var k=[],n,p=0;p<f.length;p++)if(!h||8===f[p].nodeType)if(g(k[k.length]=n=f[p]),f[p]!==n)for(;p--&&!k.includes(f[p]););
};return{addDisposeCallback:(f,h)=>{if("function"!=typeof h)throw Error("Callback must be a function");e(f,1).add(h)},Ya:(f,h)=>{var k=e(f);k&&(k.delete(h),k.size||c.g.l.set(f,a,null))},ha:f=>{c.u.I(()=>{b[f.nodeType]&&(g(f),d[f.nodeType]&&l(f.getElementsByTagName("*")))});return f},removeNode:f=>{c.ha(f);f.parentNode&&f.parentNode.removeChild(f)}}})();c.ha=c.g.N.ha;c.removeNode=c.g.N.removeNode;c.P("utils.domNodeDisposal",c.g.N);c.extenders={debounce:(a,b)=>a.Da(d=>da(d,b)),rateLimit:(a,b)=>a.Da(d=>
ca(d,b)),notify:(a,b)=>{a.ka="always"==b?null:L}};class ia{constructor(a,b,d){this.T=a;this.eb=b;this.za=d;this.Ha=!1;this.H=this.da=null}dispose(){this.Ha||(this.H&&c.g.N.Ya(this.da,this.H),this.Ha=!0,this.za(),this.T=this.eb=this.za=this.da=this.H=null)}s(a){this.da=a;c.g.N.addDisposeCallback(a,this.H=this.dispose.bind(this))}}c.R=function(){Object.setPrototypeOf(this,O);O.init(this)};var O={init:a=>{a.S=new Map;a.S.set("change",new Set);a.jb=1},subscribe:function(a,b,d){var e=this;d=d||"change";
var g=new ia(e,b?a.bind(b):a,()=>{e.S.get(d).delete(g);e.Ia?.(d)});e.Ja?.(d);e.S.has(d)||e.S.set(d,new Set);e.S.get(d).add(g);return g},B(a,b){b=b||"change";"change"===b&&this.Ea();if(this.na(b)){b="change"===b&&this.Fb||new Set(this.S.get(b));try{c.u.ob(),b.forEach(d=>{d.Ha||d.eb(a)})}finally{c.u.end()}}},ya(){return this.jb},Rb(a){return this.ya()!==a},Ea(){++this.jb},Da(a){var b=this,d=c.W(b),e,g,l,f,h;b.ra||(b.ra=b.B,b.B=(n,p)=>{p&&"change"!==p?"beforeChange"===p?b.gb(n):b.ra(n,p):b.hb(n)});var k=
a(()=>{b.ea=!1;d&&f===b&&(f=b.fb?b.fb():b());var n=g||h&&b.Ba(l,f);h=g=e=!1;n&&b.ra(l=f)});b.hb=(n,p)=>{p&&b.ea||(h=!p);b.Fb=new Set(b.S.get("change"));b.ea=e=!0;f=n;k()};b.gb=n=>{e||(l=n,b.ra(n,"beforeChange"))};b.ib=()=>{h=!0};b.Hb=()=>{b.Ba(l,b.L(!0))&&(g=!0)}},na(a){return(this.S.get(a)||[]).size},Ba(a,b){return!this.ka||!this.ka(a,b)},toString:()=>"[object Object]",extend:function(a){var b=this;a&&c.g.K(a,(d,e)=>{d=c.extenders[d];"function"==typeof d&&(b=d(b,e)||b)});return b}};c.R.fn=Object.setPrototypeOf(O,
Function.prototype);c.Vb=a=>"function"==typeof a?.subscribe&&"function"==typeof a.B;(()=>{let a=[],b,d=0;c.u={ob:e=>{a.push(b);b=e},end:()=>b=a.pop(),Ab:e=>{if(b){if(!c.Vb(e))throw Error("Only subscribable things can act as dependencies");b.Jb.call(b.Kb,e,e.Gb||(e.Gb=++d))}},I(e,g,l){try{return a.push(b),b=void 0,e.apply(g,l||[])}finally{b=a.pop()}},ma:()=>b?.o.ma(),Ca:()=>b?.Ca,o:()=>b?.o}})();const A=Symbol("_latestValue");c.$=a=>{function b(){if(0<arguments.length)return b.Ba(b[A],arguments[0])&&
(b.cb(),b[A]=arguments[0],b.valueHasMutated()),this;c.u.Ab(b);return b[A]}b[A]=a;Object.defineProperty(b,"length",{get:()=>b[A]?.length});c.R.fn.init(b);return Object.setPrototypeOf(b,H)};var H={toJSON:function(){let a=this[A];return a?.toJSON?.()||a},ka:L,L(){return this[A]},valueHasMutated:function(){this.B(this[A],"spectate");this.B(this[A])},cb(){this.B(this[A],"beforeChange")}};Object.setPrototypeOf(H,c.R.fn);var D=c.$.Zb="__ko_proto__";H[D]=c.$;c.W=a=>{if((a="function"==typeof a&&a[D])&&a!==
H[D]&&a!==c.o.fn[D])throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");return!!a};c.wb=a=>"function"==typeof a&&(a[D]===H[D]||a[D]===c.o.fn[D]&&a.Sb);c.P("observable",c.$);c.P("isObservable",c.W);c.P("observable.fn",H);c.observableArray=a=>{a=a||[];if(!Array.isArray(a))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");return Object.setPrototypeOf(c.$(a),c.observableArray.fn).extend({trackArrayChanges:!0})};
const X=Symbol("IS_OBSERVABLE_ARRAY");c.observableArray.fn=Object.setPrototypeOf({[X]:1,remove:function(a){for(var b=this.L(),d=!1,e="function"!=typeof a||c.W(a)?f=>f===a:a,g=b.length;g--;){var l=b[g];if(e(l)){if(b[g]!==l)throw Error("Array modified during remove; cannot remove item");d||this.cb();d=!0;b.splice(g,1)}}d&&this.valueHasMutated()}},c.$.fn);Object.getOwnPropertyNames(Array.prototype).forEach(a=>{"function"===typeof Array.prototype[a]&&"constructor"!=a&&("copyWithin fill pop push reverse shift sort splice unshift".split(" ").includes(a)?
c.observableArray.fn[a]=function(...b){var d=this.L();this.cb();this.qb(d,a,b);b=d[a](...b);this.valueHasMutated();return b===d?this:b}:c.observableArray.fn[a]=function(...b){return this()[a](...b)})});c.isObservableArray=a=>!(!a||!a[X]);c.extenders.trackArrayChanges=(a,b)=>{function d(){if(k){var q=[].concat(a.L()||[]);if(a.na("arrayChange")){if(!l||1<k)l=c.g.rb(n,q,a.Ka);var r=l}n=q;l=null;k=0;r?.length&&a.B(r,"arrayChange")}}function e(){g?d():(g=!0,h=a.subscribe(()=>++k,null,"spectate"),n=[].concat(a.L()||
[]),l=null,f=a.subscribe(d))}a.Ka={};"object"==typeof b&&c.g.extend(a.Ka,b);a.Ka.sparse=!0;if(!a.qb){var g=!1,l=null,f,h,k=0,n,p=a.Ja,m=a.Ia;a.Ja=q=>{p?.call(a,q);"arrayChange"===q&&e()};a.Ia=q=>{m?.call(a,q);"arrayChange"!==q||a.na("arrayChange")||(f?.dispose(),h?.dispose(),h=f=null,g=!1,n=void 0)};a.qb=(q,r,u)=>{if(g&&!k){var t=[],z=q.length,w=u.length,y=0,B=(ja,ka,la)=>t[t.length]={status:ja,value:ka,index:la};switch(r){case "push":y=z;case "unshift":for(q=0;q<w;++q)B("added",u[q],y+q);break;case "pop":y=
z-1;case "shift":z&&B("deleted",q[y],y);break;case "splice":y=Math.min(Math.max(0,0>u[0]?z+u[0]:u[0]),z);z=1===w?z:Math.min(y+(u[1]||0),z);w=y+w-2;r=Math.max(z,w);for(var v=[],I=[],C=2;y<r;++y,++C)y<z&&I.push(B("deleted",q[y],y)),y<w&&v.push(B("added",u[C],y));c.g.ub(I,v);break;default:return}l=t}}}};var x=Symbol("_state");c.o=(a,b)=>{function d(){if(0<arguments.length){if("function"!==typeof e)throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
e(...arguments);return this}g.X||c.u.Ab(d);(g.V||g.A&&d.oa())&&d.U();return g.J}"object"===typeof a?b=a:(b=b||{},a&&(b.read=a));if("function"!=typeof b.read)throw Error("Pass a function that returns the value of the ko.computed");var e=b.write,g={J:void 0,Y:!0,V:!0,Aa:!1,ab:!1,X:!1,Xa:!1,A:!1,zb:b.read,s:b.s||null,ia:b.ia,Oa:null,v:{},G:0,bc:null};d[x]=g;d.Sb="function"===typeof e;c.R.fn.init(d);Object.setPrototypeOf(d,K);b.pure&&(g.Xa=!0,g.A=!0,c.g.extend(d,ma));g.s&&(g.ab=!0,g.s.nodeType||(g.s=
null));g.A||d.U();g.s&&d.isActive()&&c.g.N.addDisposeCallback(g.s,g.Oa=()=>{d.dispose()});return d};var K={ka:L,ma(){return this[x].G},Pb(){var a=[];c.g.K(this[x].v,(b,d)=>a[d.fa]=d.T);return a},Sa(a){if(!this[x].G)return!1;var b=this.Pb();return b.includes(a)||!!b.find(d=>d.Sa&&d.Sa(a))},kb(a,b,d){if(this[x].Xa&&b===this)throw Error("A 'pure' computed must not be called recursively");this[x].v[a]=d;d.fa=this[x].G++;d.ga=b.ya()},oa(){var a,b=this[x].v;for(a in b)if(Object.prototype.hasOwnProperty.call(b,
a)){var d=b[a];if(this.qa&&d.T.ea||d.T.Rb(d.ga))return!0}},dc(){this[x].Aa||this.qa?.(!1)},isActive(){var a=this[x];return a.V||0<a.G},fc(){this.ea?this[x].V&&(this[x].Y=!0):this.tb()},Db(a){return a.subscribe(this.tb,this)},tb(){this.qa?this.qa(!0):this.U(!0)},U(a){var b=this[x],d=b.ia,e=!1;if(!b.Aa&&!b.X){if(b.s&&!c.g.Pa(b.s)||d?.()){if(!b.ab){this.dispose();return}}else b.ab=!1;try{b.Aa=!0,e=this.Nb(a)}finally{b.Aa=!1}return e}},Nb(a){var b=this[x],d=b.Xa?void 0:!b.G;var e={Lb:this,va:b.v,Ma:b.G};
c.u.ob({Kb:e,Jb:fa,o:this,Ca:d});b.v={};b.G=0;a:{try{var g=b.zb();break a}finally{c.u.end(),e.Ma&&!b.A&&c.g.K(e.va,ea),b.Y=b.V=!1}g=void 0}b.G?e=this.Ba(b.J,g):(this.dispose(),e=!0);e&&(b.A?this.Ea():this.B(b.J,"beforeChange"),b.J=g,this.B(b.J,"spectate"),!b.A&&a&&this.B(b.J),this.ib&&this.ib());d&&this.B(b.J,"awake");return e},L(a){var b=this[x];(b.V&&(a||!b.G)||b.A&&this.oa())&&this.U();return b.J},Da(a){var b=this;c.R.fn.Da.call(b,a);b.fb=()=>{b[x].A||(b[x].Y?b.U():b[x].V=!1);return b[x].J};b.qa=
d=>{b.gb(b[x].J);b[x].V=!0;d&&(b[x].Y=!0);b.hb(b,!d)}},dispose:function(){var a=this[x];!a.A&&a.v&&c.g.K(a.v,(b,d)=>d.dispose?.());a.s&&a.Oa&&c.g.N.Ya(a.s,a.Oa);a.v=void 0;a.G=0;a.X=!0;a.Y=!1;a.V=!1;a.A=!1;a.s=void 0;a.ia=void 0;a.zb=void 0}},ma={Ja(a){var b=this,d=b[x];if(!d.X&&d.A&&"change"==a){d.A=!1;if(d.Y||b.oa())d.v=null,d.G=0,b.U()&&b.Ea();else{var e=[];c.g.K(d.v,(g,l)=>e[l.fa]=g);e.forEach((g,l)=>{var f=d.v[g],h=b.Db(f.T);h.fa=l;h.ga=f.ga;d.v[g]=h});b.oa()&&b.U()&&b.Ea()}d.X||b.B(d.J,"awake")}},
Ia(a){var b=this[x];b.X||"change"!=a||this.na("change")||(c.g.K(b.v,(d,e)=>{e.dispose&&(b.v[d]={T:e.T,fa:e.fa,ga:e.ga},e.dispose())}),b.A=!0,this.B(void 0,"asleep"))},ya(){var a=this[x];a.A&&(a.Y||this.oa())&&this.U();return c.R.fn.ya.call(this)}};Object.setPrototypeOf(K,c.R.fn);var P=c.$.Zb;K[P]=c.o;c.o.fn=K;c.P("computed",c.o);c.isComputed=a=>"function"==typeof a&&a[P]===K[P];c.yb=a=>{if("function"===typeof a)return c.o(a,{pure:!0});a={...a,pure:!0};return c.o(a)};c.C={M:a=>{switch(a.nodeName){case "OPTION":return!0===
a.__ko__hasDomDataOptionValue__?c.g.l.get(a,c.i.options.Wa):a.value;case "SELECT":return 0<=a.selectedIndex?c.C.M(a.options[a.selectedIndex]):void 0;default:return a.value}},Fa:(a,b)=>{switch(a.nodeName){case "OPTION":"string"===typeof b?(c.g.l.set(a,c.i.options.Wa,void 0),delete a.__ko__hasDomDataOptionValue__,a.value=b):(c.g.l.set(a,c.i.options.Wa,b),a.__ko__hasDomDataOptionValue__=!0,a.value="number"===typeof b?b:"");break;case "SELECT":for(var d=-1,e=""===(b??""),g=a.options.length,l;g--;)if(l=
c.C.M(a.options[g]),l==b||""===l&&e){d=g;break}if(0<=d||e&&1<a.size)a.selectedIndex=d;break;default:a.value=b??""}}};c.la=(()=>{var a=RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]","g"),b=/[\])"'A-Za-z0-9_$]+$/,d={"in":1,"return":1,"typeof":1},e=g=>{g=c.g.Cb(g);123===g.charCodeAt(0)&&(g=g.slice(1,-1));g+="\n,";var l=[],f=g.match(a),h=[],k=0;if(1<f.length){for(var n=0,
p;p=f[n++];){var m=p.charCodeAt(0);if(44===m){if(0>=k){l.push(q&&h.length?{key:q,value:h.join("")}:{unknown:q||h.join("")});var q=k=0;h=[];continue}}else if(58===m){if(!k&&!q&&1===h.length){q=h.pop();continue}}else if(47===m&&1<p.length&&(47===p.charCodeAt(1)||42===p.charCodeAt(1)))continue;else 47===m&&n&&1<p.length?(m=f[n-1].match(b))&&!d[m[0]]&&(g=g.slice(g.indexOf(p)+1),f=g.match(a),n=-1,p="/"):40===m||123===m||91===m?++k:41===m||125===m||93===m?--k:q||h.length||34!==m&&39!==m||(p=p.slice(1,-1));
h.push(p)}if(0<k)throw Error("Unbalanced parentheses, braces, or brackets");}return l};return{ec:e,Yb:g=>{var l=[];e(g).forEach(f=>{l.push("'"+(f.key||f.unknown)+"':function(){return "+(f.value+" }"))});return l.join(",")},cc:(g,l)=>-1<g.findIndex(f=>f.key==l),Ga:(g,l,f,h,k)=>{if(g&&c.W(g))!c.wb(g)||k&&g.L()===h||g(h);else throw Error(`${f} , must be observable`);}}})();(()=>{function a(f){return 8==f.nodeType&&e.test(f.nodeValue)}function b(f){return 8==f.nodeType&&g.test(f.nodeValue)}function d(f,
h){for(var k=f,n=1,p=[];k=k.nextSibling;){if(b(k)&&(c.g.l.set(k,l,!0),!--n))return p;p.push(k);a(k)&&++n}if(!h)throw Error("Cannot find closing comment tag to match: "+f.nodeValue);return null}var e=/^\s*ko(?:\s+([\s\S]+))?\s*$/,g=/^\s*\/ko\s*$/,l="__ko_matchedEndComment__";c.m={aa:{},childNodes:f=>a(f)?d(f):f.childNodes,ja:f=>{a(f)?(f=d(f))&&[...f].forEach(h=>c.removeNode(h)):c.g.Qa(f)},pa:(f,h)=>{a(f)?(c.m.ja(f),f.after(...h)):c.g.pa(f,h)},prepend:(f,h)=>{a(f)?f.nextSibling.before(h):f.prepend(h)},
Ub:(f,h,k)=>{k?k.after(h):c.m.prepend(f,h)},firstChild:f=>{if(a(f))return f=f.nextSibling,!f||b(f)?null:f;let h=f.firstChild;if(h&&b(h))throw Error("Found invalid end comment, as the first child of "+f);return h},nextSibling:f=>{if(a(f)){var h=d(f,void 0);f=h?(h.length?h[h.length-1]:f).nextSibling:null}if((h=f.nextSibling)&&b(h)){if(b(h)&&!c.g.l.get(h,l))throw Error("Found end comment without a matching opening comment, as child of "+f);return null}return h},Qb:a,ac:f=>(f=f.nodeValue.match(e))?f[1]:
null}})();const Y=new Map;c.pb=new class{Xb(a){switch(a.nodeType){case 1:return null!=a.getAttribute("data-bind");case 8:return c.m.Qb(a)}return!1}Ob(a,b){a:{switch(a.nodeType){case 1:var d=a.getAttribute("data-bind");break a;case 8:d=c.m.ac(a);break a}d=null}if(d)try{let g=Y.get(d);if(!g){var e="with($context){with($data||{}){return{"+c.la.Yb(d)+"}}}";g=new Function("$context","$element",e);Y.set(d,g)}return g(b,a)}catch(g){throw g.message="Unable to parse bindings.\nBindings value: "+d+"\nMessage: "+
g.message,g;}return null}};const F=Symbol("_subscribable"),J=Symbol("_ancestorBindingInfo"),W=Symbol("_dataDependency"),Z={},E=c.g.l.Z();c.i={};c.ba=class{constructor(a,b,d,e){var g=this,l=a===Z,f=l?void 0:a,h="function"==typeof f&&!c.W(f),k=e?.dataDependency;a=()=>{var p=h?f():f;p=c.g.h(p);b?(c.g.extend(g,b),J in b&&(g[J]=b[J])):(g.$root=p,g.ko=c);g[F]=n;l?p=g.$data:g.$data=p;d?.(g,b,p);if(b?.[F]&&!c.u.o().Sa(b[F]))b[F]();k&&(g[W]=k);return g.$data};if(e?.exportDependencies)a();else{var n=c.yb(a);
n.L();n.isActive()?n.ka=null:g[F]=void 0}}createChildContext(a,b){return new c.ba(a,this,(d,e)=>{d.$parent=e.$data;b.extend?.(d)},b)}extend(a,b){return new c.ba(Z,this,d=>c.g.extend(d,"function"==typeof a?a(d):a),b)}};class na{constructor(a,b,d){this.H=a;this.da=b;this.ta=new Set;this.F=!1;b.D||c.g.N.addDisposeCallback(a,S);d?.D&&(d.D.ta.add(a),this.za=d)}xb(){this.za?.D?.Mb(this.H)}Mb(a){this.ta.delete(a);this.ta.size||this.sb?.()}sb(){this.F=!0;this.da.D&&!this.ta.size&&(this.da.D=null,c.g.N.Ya(this.H,
S),c.j.notify(this.H,c.j.ca),this.xb())}}c.j={F:"childrenComplete",ca:"descendantsComplete",subscribe:(a,b,d,e,g)=>{var l=c.g.l.Ra(a,E,{});l.wa||(l.wa=new c.R);g?.notifyImmediately&&l.Va[b]&&c.u.I(d,e,[a]);return l.wa.subscribe(d,e,b)},notify:(a,b)=>{var d=c.g.l.get(a,E);if(d&&(d.Va[b]=!0,d.wa?.B(a,b),b==c.j.F))if(d.D)d.D.sb();else if(void 0===d.D&&d.wa?.na(c.j.ca))throw Error("descendantsComplete event not supported for bindings on this node");},$a:(a,b)=>{var d=c.g.l.Ra(a,E,{});d.D||(d.D=new na(a,
d,b[J]));return b[J]==d?b:b.extend(e=>{e[J]=d})}};c.$b=a=>(a=c.g.l.get(a,E))&&a.context;c.applyBindingAccessorsToNode=(a,b,d)=>V(a,b,M(d));c.nb=(a,b)=>{1!==b.nodeType&&8!==b.nodeType||T(M(a),b)};c.mb=function(a,b,d){if(2>arguments.length){if(b=G.body,!b)throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");}else if(!b||1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
U(M(a,d),b)};c.dataFor=a=>(a=a&&[1,8].includes(a.nodeType)&&c.$b(a))?a.$data:void 0;c.P("bindingHandlers",c.i);c.P("applyBindings",c.mb);(()=>{var a=Object.create(null),b=new Map;c.components={get:(l,f)=>{if(b.has(l))f(b.get(l));else{var h=a[l];h?h.subscribe(f):(h=a[l]=new c.R,h.subscribe(f),g(l,k=>{b.set(l,k);delete a[l];h.B(k)}))}},register:(l,f)=>{if(!f)throw Error("Invalid configuration for "+l);if(d[l])throw Error("Component "+l+" is already registered");d[l]=f}};var d=Object.create(null),e=
(l,f)=>{throw Error(`Component '${l}': ${f}`);},g=(l,f)=>{var h={},k=d[l]||{},n=k.template;k=k.viewModel;if(n){n.element||e(l,"Unknown template value: "+n);n=n.element;var p=G.getElementById(n);p||e(l,"Cannot find element with ID "+n);p.matches("TEMPLATE")||e(l,"Template Source Element not a <template>");h.template=c.g.ua(p.content.childNodes)}k&&("function"!==typeof k.createViewModel&&e(l,"Unknown viewModel value: "+k),h.createViewModel=k.createViewModel);f(h.template&&h.createViewModel?h:null)}})();
(()=>{var a=0;c.i.component={init:(b,d,e,g,l)=>{var f,h,k,n=()=>{var p=f&&f.dispose;"function"===typeof p&&p.call(f);k&&k.dispose();h=f=k=null};c.m.ja(b);c.g.N.addDisposeCallback(b,n);c.o(()=>{var p=c.g.h(d());if("string"!==typeof p){var m=c.g.h(p.params);p=c.g.h(p.name)}if(!p)throw Error("No component name specified");var q=c.j.$a(b,l),r=h=++a;c.components.get(p,u=>{if(h===r){n();if(!u)throw Error("Unknown component '"+p+"'");var t=u.template;if(!t)throw Error("Component '"+p+"' has no template");
c.m.pa(b,c.g.ua(t));f=u.createViewModel(m,{element:b});c.nb(q.createChildContext(f,{}),b)}})},{s:b});return{controlsDescendantBindings:!0}}};c.m.aa.component=!0})();c.i.attr={update:(a,b)=>{b=c.g.h(b())||{};c.g.K(b,function(d,e){e=c.g.h(e);var g=d.indexOf(":");g="lookupNamespaceURI"in a&&0<g&&a.lookupNamespaceURI(d.slice(0,g));!1===e||null==e?g?a.removeAttributeNS(g,d):a.removeAttribute(d):(e=e.toString(),g?a.setAttributeNS(g,d,e):a.setAttribute(d,e))})}};(()=>{c.i.checked={after:["value","attr"],
init:function(a,b,d){var e="checkbox"==a.type,g="radio"==a.type;if(e||g){const m=c.yb(()=>{if(d.has("checkedValue"))return c.g.h(d.get("checkedValue"));if(n)return d.has("value")?c.g.h(d.get("value")):a.value});var l=()=>{if(!c.u.Ca()){var q=a.checked,r=m();if(q||!g&&!c.u.ma()){var u=c.u.I(b);if(h){var t=k?u.L():u,z=p;p=r;z!==r?q&&(t.push(r),t.remove(z)):q?t.push(r):t.remove(r);k&&c.wb(u)&&u(t)}else e&&(void 0===r?r=q:q||(r=void 0)),c.la.Ga(u,d,"checked",r,!0)}}},f=b(),h=e&&c.g.h(f)instanceof Array,
k=!(h&&f.push&&f.splice),n=g||h,p=h?m():void 0;c.o(l,null,{s:a});a.addEventListener("click",l);c.o(()=>{var q=c.g.h(b()),r=m();h?(a.checked=q.includes(r),p=r):a.checked=e&&void 0===r?!!q:m()===q},null,{s:a});f=void 0}}};c.i.checkedValue={update:function(a,b){a.value=c.g.h(b())}}})();var Q=(a,b,d)=>b&&b.split(/\s+/).forEach(e=>a.classList.toggle(e,d));c.i.css={update:(a,b)=>{b=c.g.h(b());"object"==typeof b?c.g.K(b,(d,e)=>{e=c.g.h(e);Q(a,d,!!e)}):(b=c.g.Cb(b),Q(a,a.__ko__cssValue,!1),a.__ko__cssValue=
b,Q(a,b,!0))}};c.i.enable={update:(a,b)=>{(b=c.g.h(b()))&&a.disabled?a.removeAttribute("disabled"):b||a.disabled||(a.disabled=!0)}};c.i.disable={update:(a,b)=>c.i.enable.update(a,()=>!c.g.h(b()))};c.i.event={init:function(a,b,d,e,g){c.g.K(b()||{},l=>{"string"==typeof l&&a.addEventListener(l,(...f)=>{var h=b()[l];if(h)try{e=g.$data;var k=h.apply(e,[e,...f])}finally{!0!==k&&f[0].preventDefault()}})})}};const aa=a=>()=>{var b=a(),d=c.W(b)?b.L():b;if(!d||Array.isArray(d))return{foreach:b};c.g.h(b);return{foreach:d.data}};
c.i.foreach={init:(a,b)=>c.i.template.init(a,aa(b)),update:(a,b,d,e,g)=>c.i.template.update(a,aa(b),d,e,g)};c.m.aa.foreach=!0;c.i.hasfocus={init:(a,b,d)=>{var e=l=>{a.__ko_hasfocusUpdating=!0;l=a.ownerDocument.activeElement===a;c.la.Ga(b(),d,"hasfocus",l,!0);a.__ko_hasfocusLastValue=l;a.__ko_hasfocusUpdating=!1},g=e.bind(null,!0);e=e.bind(null,!1);a.addEventListener("focus",g);a.addEventListener("focusin",g);a.addEventListener("blur",e);a.addEventListener("focusout",e);a.__ko_hasfocusLastValue=!1},
update:(a,b)=>{b=!!c.g.h(b());a.__ko_hasfocusUpdating||a.__ko_hasfocusLastValue===b||(b?a.focus():a.blur())}};c.i.html={init:()=>({controlsDescendantBindings:!0}),update:(a,b)=>{c.g.Qa(a);b=c.g.h(b());if(null!=b){const d=G.createElement("template");d.innerHTML="string"!=typeof b?b.toString():b;a.appendChild(d.content)}}};(()=>{function a(b,d,e){c.i[b]={init:(g,l,f,h,k)=>{var n,p={};d&&(p={exportDependencies:!0});var m=f.has(c.j.ca);c.o(()=>{var q=c.g.h(l()),r=!e!==!q,u=!n;m&&(k=c.j.$a(g,k));if(r){p.dataDependency=
c.u.o();var t=d?k.createChildContext("function"==typeof q?q:l,p):c.u.ma()?k.extend(null,p):k}u&&c.u.ma()&&(n=c.g.ua(c.m.childNodes(g),!0));r?(u||c.m.pa(g,c.g.ua(n)),c.nb(t,g)):(c.m.ja(g),c.j.notify(g,c.j.F))},{s:g});return{controlsDescendantBindings:!0}}};c.m.aa[b]=!0}a("if");a("ifnot",!1,!0);a("with",!0)})();var ba={};c.i.options={init:a=>{if(!a.matches("SELECT"))throw Error("options binding applies only to SELECT elements");let b=a.length;for(;b--;)a.remove(b);return{controlsDescendantBindings:!0}},
update:(a,b,d)=>{var e=a.multiple,g=0!=a.length&&e?a.scrollTop:null,l=c.g.h(b()),f=[];b=()=>Array.from(a.options).filter(m=>m.selected);var h=(m,q,r)=>{var u=typeof q;return"function"==u?q(m):"string"==u?m[q]:r},k=(m,q)=>{f.length&&(m=f.includes(c.C.M(q[0])),q[0].selected=m,p&&!m&&c.u.I(c.g.Eb,null,[a,"change"]))};e?f=b().map(c.C.M):0<=a.selectedIndex&&f.push(c.C.M(a.options[a.selectedIndex]));if(l){Array.isArray(l)||(l=[l]);var n=l.filter(m=>m??1)}var p=!1;l=k;d.has("optionsAfterRender")&&"function"==
typeof d.get("optionsAfterRender")&&(l=(m,q)=>{k(m,q);c.u.I(d.get("optionsAfterRender"),null,[q[0],m!==ba?m:void 0])});c.g.Bb(a,n,(m,q,r)=>{r.length&&(f=r[0].selected?[c.C.M(r[0])]:[],p=!0);q=a.ownerDocument.createElement("option");m===ba?(c.g.Za(q),c.C.Fa(q,void 0)):(r=h(m,d.get("optionsValue"),m),c.C.Fa(q,c.g.h(r)),m=h(m,d.get("optionsText"),r),c.g.Za(q,m));return[q]},{},l);n=f.length;(e?n&&b().length<n:n&&0<=a.selectedIndex?c.C.M(a.options[a.selectedIndex])!==f[0]:n||0<=a.selectedIndex)&&c.u.I(c.g.Eb,
null,[a,"change"]);c.u.Ca()&&c.j.notify(a,c.j.F);g&&20<Math.abs(g-a.scrollTop)&&(a.scrollTop=g)}};c.i.options.Wa=c.g.l.Z();c.i.style={update:(a,b)=>{c.g.K(c.g.h(b()||{}),(d,e)=>{e=c.g.h(e);if(null==e||!1===e)e="";if(/^--/.test(d))a.style.setProperty(d,e);else{d=d.replace(/-(\w)/g,(l,f)=>f.toUpperCase());var g=a.style[d];a.style[d]=e;e===g||a.style[d]!=g||isNaN(e)||(a.style[d]=e+"px")}})}};c.i.submit={init:(a,b,d,e,g)=>{if("function"!=typeof b())throw Error("The value for a submit binding must be a function");
a.addEventListener("submit",l=>{var f=b();try{var h=f.call(g.$data,a)}finally{!0!==h&&l.preventDefault()}})}};c.i.text={init:()=>({controlsDescendantBindings:!0}),update:(a,b)=>{8===a.nodeType&&(a.text||a.after(a.text=G.createTextNode("")),a=a.text);c.g.Za(a,b())}};c.m.aa.text=!0;c.i.textInput={init:(a,b,d)=>{var e=a.value,g,l,f=()=>{clearTimeout(g);l=g=void 0;var k=a.value;e!==k&&(e=k,c.la.Ga(b(),d,"textInput",k))},h=()=>{var k=c.g.h(b())??"";void 0!==l&&k===l?setTimeout(h,4):a.value!==k&&(a.value=
k,e=a.value)};a.addEventListener("input",f);a.addEventListener("change",f);c.o(h,{s:a})}};c.i.value={init:(a,b,d)=>{var e=a.matches("SELECT"),g=a.matches("INPUT");if(!g||"checkbox"!=a.type&&"radio"!=a.type){var l=new Set,f=d.get("valueUpdate"),h=null,k=()=>{h=null;var m=b(),q=c.C.M(a);c.la.Ga(m,d,"value",q)};f&&("string"==typeof f?l.add(f):f.forEach(m=>l.add(m)),l.delete("change"));l.forEach(m=>{var q=k;(m||"").startsWith("after")&&(q=()=>{h=c.C.M(a);setTimeout(k,0)},m=m.slice(5));a.addEventListener(m,
q)});var n=g&&"file"==a.type?()=>{var m=c.g.h(b());null==m||""===m?a.value="":c.u.I(k)}:()=>{var m=c.g.h(b()),q=c.C.M(a);if(null!==h&&m===h)setTimeout(n,0);else if(m!==q||void 0===q)e?(c.C.Fa(a,m),m!==c.C.M(a)&&c.u.I(k)):c.C.Fa(a,m)};if(e){var p;c.j.subscribe(a,c.j.F,()=>{p?d.get("valueAllowUnset")?n():k():(a.addEventListener("change",k),p=c.o(n,{s:a}))},null,{notifyImmediately:!0})}else a.addEventListener("change",k),c.o(n,{s:a})}else c.applyBindingAccessorsToNode(a,{checkedValue:b})},update:()=>
{}};c.i.visible={update:(a,b)=>{b=c.g.h(b());var d="none"!=a.style.display;b&&!d?a.style.display="":d&&!b&&(a.style.display="none")}};c.i.hidden={update:(a,b)=>a.hidden=!!c.g.h(b())};(function(a){c.i[a]={init:function(b,d,e,g,l){return c.i.event.init.call(this,b,()=>({[a]:d()}),e,g,l)}}})("click");(()=>{let a=c.g.l.Z();class b{constructor(e){this.Na=e}Ua(...e){let g=this.Na;if(!e.length)return c.g.l.get(g,a)||(11===this.H?g.content:1===this.H?g:void 0);c.g.l.set(g,a,e[0])}}class d extends b{constructor(e){super(e);
e&&(this.H=e.matches("TEMPLATE")&&e.content?e.content.nodeType:1)}}c.bb={Na:d,lb:b}})();(()=>{const a=(h,k,n)=>{var p;for(k=c.m.nextSibling(k);h&&(p=h)!==k;)h=c.m.nextSibling(p),n(p,h)},b=(h,k)=>{if(h.length){var n=h[0],p=n.parentNode;a(n,h[h.length-1],m=>{1!==m.nodeType&&8!==m.nodeType||c.mb(k,m)});c.g.xa(h,p)}},d=(h,k,n,p)=>{var m=(h&&(h.nodeType?h:0<h.length?h[0]:null)||n||{}).ownerDocument;if("string"==typeof n){m=m||G;m=m.getElementById(n);if(!m)throw Error("Cannot find template with ID "+n);
n=new c.bb.Na(m)}else if([1,8].includes(n.nodeType))n=new c.bb.lb(n);else throw Error("Unknown template type: "+n);n=(n=n.Ua?n.Ua():null)?[...n.cloneNode(!0).childNodes]:null;if(!Array.isArray(n)||0<n.length&&"number"!=typeof n[0].nodeType)throw Error("Template engine must return an array of DOM nodes");k&&(c.m.pa(h,n),b(n,p),c.j.notify(h,c.j.F));return n},e=(h,k,n)=>c.W(h)?h():"function"===typeof h?h(k,n):h,g=(h,k,n,p)=>{n=n||{};if(p){var m=p.nodeType?p:0<p.length?p[0]:null;return c.o(()=>{var q=
k instanceof c.ba?k:new c.ba(k,null,null,{exportDependencies:!0}),r=e(h,q.$data,q);d(p,!0,r,q,n)},{ia:()=>!m||!c.g.Pa(m),s:m})}console.log("no targetNodeOrNodeArray")},l=(h,k,n,p,m)=>{var q,r=(w,y)=>{q=m.createChildContext(w,{extend:B=>B.$index=y});w=e(h,w,q);return d(p,!1,w,q,n)},u=(w,y)=>{b(y,q);q=null},t=(w,y)=>{c.u.I(c.g.Bb,null,[p,w,r,n,u,y]);c.j.notify(p,c.j.F)};if(c.isObservableArray(k)){t(k.L());var z=k.subscribe(w=>{t(k(),w)},null,"arrayChange");z.s(p);return z}return c.o(()=>{var w=c.g.h(k)||
[];Array.isArray(w)||(w=[w]);t(w)},{s:p})},f=c.g.l.Z();c.i.template={init:(h,k)=>{k=c.g.h(k());if("string"==typeof k||"name"in k)c.m.ja(h);else if(k=c.m.childNodes(h),k.length)k=c.g.Wb(k),(new c.bb.lb(h)).Ua(k);else throw Error("Anonymous template defined, but no template content was provided");return{controlsDescendantBindings:!0}},update:(h,k,n,p,m)=>{p=k();k=c.g.h(p);n=null;"string"==typeof k?k={}:p="name"in k?k.name:h;var q=!!p;"foreach"in k?n=l(p,q&&k.foreach||[],k,h,m):q?(n=m,"data"in k&&(n=
m.createChildContext(k.data,{exportDependencies:!0})),n=g(p,n,k,h)):c.m.ja(h);m=n;c.g.l.get(h,f)?.dispose?.();c.g.l.set(h,f,!m||m.isActive&&!m.isActive()?void 0:m)}};c.m.aa.template=!0})();c.g.ub=(a,b,d)=>{var e=0,g,l=b.length;l&&a.every(f=>{g=b.findIndex(h=>f.value===h.value);0<=g&&(f.moved=b[g].index,b[g].moved=f.index,b.splice(g,1),e=g=0,--l);e+=l;return l&&(!d||e<d)})};c.g.rb=(()=>{var a=(b,d,e,g,l)=>{for(var f=Math.min,h=Math.max,k=[],n=-1,p=b.length,m,q=d.length,r=q-p||1,u=p+q+1,t,z,w;++n<=
p;)for(z=t,k.push(t=[]),w=f(q,n+r),m=h(0,n-1);m<=w;m++)t[m]=m?n?b[n-1]===d[m-1]?z[m-1]:f(z[m]||u,t[m-1]||u)+1:m+1:n+1;f=[];h=[];r=[];n=p;for(m=q;n||m;)q=k[n][m]-1,m&&q===k[n][m-1]?h.push(f[f.length]={status:e,value:d[--m],index:m}):n&&q===k[n-1][m]?r.push(f[f.length]={status:g,value:b[--n],index:n}):(--m,--n,l.sparse||f.push({status:"retained",value:d[m]}));c.g.ub(r,h,10*p);return f.reverse()};return(b,d,e)=>{b=b||[];d=d||[];return b.length<d.length?a(b,d,"added","deleted",e):a(d,b,"deleted","added",
e)}})();(()=>{function a(e,g,l,f,h){var k=[],n=c.o(()=>{var p=g(l,h,c.g.xa(k,e))||[];if(0<k.length){var m=k.nodeType?[k]:k;if(0<m.length){var q=m[0],r=q.parentNode;p.forEach(u=>r.insertBefore(u,q));m.forEach(u=>c.removeNode(u))}f&&c.u.I(f,null,[l,p,h])}k.length=0;k.push(...p)},{s:e,ia:()=>!!k.find(c.g.Pa)});return{O:k,La:n.isActive()?n:void 0}}var b=c.g.l.Z(),d=c.g.l.Z();c.g.Bb=(e,g,l,f,h,k)=>{g=g||[];Array.isArray(g)||(g=[g]);var n=c.g.l.get(e,b),p=[],m=0,q=0,r=[],u=[],t,z=v=>{t={sa:v,Ta:c.$(q++)};
p.push(t)},w=v=>{t=n[v];t.Ta(q++);c.g.xa(t.O,e);p.push(t)};if(n){if(!k||n&&n._countWaitingForRemove)k=c.g.rb(Array.prototype.map.call(n,C=>C.sa),g,{sparse:!0});let v,I;for(k.forEach(C=>{v=C.moved;I=C.index;switch(C.status){case "deleted":for(;m<I;)w(m++);void 0===v&&(t=n[m],t.La&&(t.La.dispose(),t.La=void 0),c.g.xa(t.O,e).length&&t&&r.push.apply(r,t.O));m++;break;case "added":for(;q<I;)w(m++);void 0!==v?(u.push(p.length),w(v)):z(C.value)}});q<g.length;)w(m++);p._countWaitingForRemove=0}else g.forEach(z);
c.g.l.set(e,b,p);r.forEach(c.removeNode);var y=v=>{c.m.Ub(e,v,B);B=v};k=e.ownerDocument.activeElement;if(u.length)for(;null!=(g=u.shift());){for(t=p[g];g--;)if(f=p[g].O,f?.length){var B=f[f.length-1];break}t.O.forEach(y)}p.forEach(v=>{v.O||c.g.extend(v,a(e,l,v.sa,h,v.Ta));v.O.forEach(y);!v.Tb&&h&&(h(v.sa,v.O,v.Ta),v.Tb=!0,B=v.O[v.O.length-1])});e.ownerDocument.activeElement!=k&&k?.focus();[].forEach(v=>v&&(v.sa=d))}})();R.ko=N})(this);
