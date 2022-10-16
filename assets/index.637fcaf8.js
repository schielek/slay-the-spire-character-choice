(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();function L(){}function oe(e,t){for(const n in t)e[n]=t[n];return e}function J(e){return e()}function R(){return Object.create(null)}function S(e){e.forEach(J)}function Q(e){return typeof e=="function"}function U(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let A;function F(e,t){return A||(A=document.createElement("a")),A.href=t,e===A.href}function ce(e){return Object.keys(e).length===0}function g(e,t){e.appendChild(t)}function B(e,t,n){e.insertBefore(t,n||null)}function I(e){e.parentNode.removeChild(e)}function se(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function V(e){return document.createTextNode(e)}function j(){return V(" ")}function X(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e){return Array.from(e.childNodes)}function ie(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function C(e,t,n){e.classList[n?"add":"remove"](t)}let D;function v(e){D=e}const w=[],H=[],N=[],K=[],ae=Promise.resolve();let T=!1;function fe(){T||(T=!0,ae.then(Y))}function W(e){N.push(e)}const M=new Set;let O=0;function Y(){const e=D;do{for(;O<w.length;){const t=w[O];O++,v(t),ue(t.$$)}for(v(null),w.length=0,O=0;H.length;)H.pop()();for(let t=0;t<N.length;t+=1){const n=N[t];M.has(n)||(M.add(n),n())}N.length=0}while(w.length);for(;K.length;)K.pop()();T=!1,M.clear(),v(e)}function ue(e){if(e.fragment!==null){e.update(),S(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(W)}}const x=new Set;let k;function de(){k={r:0,c:[],p:k}}function he(){k.r||S(k.c),k=k.p}function E(e,t){e&&e.i&&(x.delete(e),e.i(t))}function q(e,t,n,o){if(e&&e.o){if(x.has(e))return;x.add(e),k.c.push(()=>{x.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function me(e,t){const n={},o={},r={$$scope:1};let c=e.length;for(;c--;){const s=e[c],i=t[c];if(i){for(const u in s)u in i||(o[u]=1);for(const u in i)r[u]||(n[u]=i[u],r[u]=1);e[c]=i}else for(const u in s)r[u]=1}for(const s in o)s in n||(n[s]=void 0);return n}function _e(e){return typeof e=="object"&&e!==null?e:{}}function pe(e){e&&e.c()}function Z(e,t,n,o){const{fragment:r,after_update:c}=e.$$;r&&r.m(t,n),o||W(()=>{const s=e.$$.on_mount.map(J).filter(Q);e.$$.on_destroy?e.$$.on_destroy.push(...s):S(s),e.$$.on_mount=[]}),c.forEach(W)}function ee(e,t){const n=e.$$;n.fragment!==null&&(S(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ge(e,t){e.$$.dirty[0]===-1&&(w.push(e),fe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(e,t,n,o,r,c,s,i=[-1]){const u=D;v(e);const l=e.$$={fragment:null,ctx:[],props:c,update:L,not_equal:r,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:R(),dirty:i,skip_bound:!1,root:t.target||u.$$.root};s&&s(l.root);let a=!1;if(l.ctx=n?n(e,t.props||{},(h,b,...p)=>{const f=p.length?p[0]:b;return l.ctx&&r(l.ctx[h],l.ctx[h]=f)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](f),a&&ge(e,h)),b}):[],l.update(),a=!0,S(l.before_update),l.fragment=o?o(l.ctx):!1,t.target){if(t.hydrate){const h=le(t.target);l.fragment&&l.fragment.l(h),h.forEach(I)}else l.fragment&&l.fragment.c();t.intro&&E(e.$$.fragment),Z(e,t.target,t.anchor,t.customElement),Y()}v(u)}class ne{$destroy(){ee(this,1),this.$destroy=L}$on(t,n){if(!Q(n))return L;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!ce(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ye="/slay-the-spire-random-character-choice/assets/Ironclad.5d55b0a9.webp",be="/slay-the-spire-random-character-choice/assets/Silent.c01bbe57.webp",$e="/slay-the-spire-random-character-choice/assets/Defect.b1c0ff53.webp",ke="/slay-the-spire-random-character-choice/assets/Watcher.6d3b1458.webp";function we(e){let t,n;return{c(){t=$("img"),F(t.src,n=e[3][e[0]])||y(t,"src",n),y(t,"alt",e[0]),y(t,"class","svelte-mtn8ee"),C(t,"disabled",e[1]),C(t,"chosen",e[2])},m(o,r){B(o,t,r)},p(o,[r]){r&1&&!F(t.src,n=o[3][o[0]])&&y(t,"src",n),r&1&&y(t,"alt",o[0]),r&2&&C(t,"disabled",o[1]),r&4&&C(t,"chosen",o[2])},i:L,o:L,d(o){o&&I(t)}}}function ve(e,t,n){let{name:o}=t,{disabled:r}=t,{chosen:c}=t;const s={Ironclad:ye,Silent:be,Defect:$e,Watcher:ke};return e.$$set=i=>{"name"in i&&n(0,o=i.name),"disabled"in i&&n(1,r=i.disabled),"chosen"in i&&n(2,c=i.chosen)},[o,r,c,s]}class Ee extends ne{constructor(t){super(),te(this,t,ve,we,U,{name:0,disabled:1,chosen:2})}}function z(e,t,n){const o=e.slice();return o[6]=t[n],o[7]=t,o[8]=n,o}function G(e){let t,n,o,r,c,s;const i=[e[6],{chosen:!!e[1]&&e[6].name===e[1].name}];let u={};for(let a=0;a<i.length;a+=1)u=oe(u,i[a]);n=new Ee({props:u});function l(){return e[4](e[6],e[7],e[8])}return{c(){t=$("span"),pe(n.$$.fragment),o=j(),y(t,"class","char svelte-1fdx3ox")},m(a,h){B(a,t,h),Z(n,t,null),g(t,o),r=!0,c||(s=X(t,"click",l),c=!0)},p(a,h){e=a;const b=h&3?me(i,[h&1&&_e(e[6]),{chosen:!!e[1]&&e[6].name===e[1].name}]):{};n.$set(b)},i(a){r||(E(n.$$.fragment,a),r=!0)},o(a){q(n.$$.fragment,a),r=!1},d(a){a&&I(t),ee(n),c=!1,s()}}}function Le(e){let t,n,o,r,c,s,i,u,l,a,h,b,p=e[0],f=[];for(let d=0;d<p.length;d+=1)f[d]=G(z(e,p,d));const re=d=>q(f[d],1,1,()=>{f[d]=null});return{c(){t=$("main"),n=$("h1"),n.textContent="Let faith chose your hero...",o=j(),r=$("div");for(let d=0;d<f.length;d+=1)f[d].c();c=j(),s=$("button"),i=V(e[2]),u=j(),l=$("div"),l.innerHTML=`<p>Click on a character to include/exclude it from choice.</p> 

    <p class="disclaimer svelte-1fdx3ox">All assets taken from the official <a href="https://slay-the-spire.fandom.com/wiki/">Slay the Spire Wiki</a>.</p>`,y(r,"class","chars"),y(t,"class","svelte-1fdx3ox")},m(d,_){B(d,t,_),g(t,n),g(t,o),g(t,r);for(let m=0;m<f.length;m+=1)f[m].m(r,null);g(t,c),g(t,s),g(s,i),g(t,u),g(t,l),a=!0,h||(b=X(s,"click",e[3]),h=!0)},p(d,[_]){if(_&3){p=d[0];let m;for(m=0;m<p.length;m+=1){const P=z(d,p,m);f[m]?(f[m].p(P,_),E(f[m],1)):(f[m]=G(P),f[m].c(),E(f[m],1),f[m].m(r,null))}for(de(),m=p.length;m<f.length;m+=1)re(m);he()}(!a||_&4)&&ie(i,d[2])},i(d){if(!a){for(let _=0;_<p.length;_+=1)E(f[_]);a=!0}},o(d){f=f.filter(Boolean);for(let _=0;_<f.length;_+=1)q(f[_]);a=!1},d(d){d&&I(t),se(f,d),h=!1,b()}}}function Se(e,t,n){let o,r,c=[{name:"Ironclad",disabled:!1},{name:"Silent",disabled:!1},{name:"Defect",disabled:!1},{name:"Watcher",disabled:!1}],s=null;function i(){if(s)c.map(l=>l.chosen=!1),n(1,s=null);else{if(r.length===0)return;n(1,s=r[Math.floor(Math.random()*r.length)]),n(1,s.chosen=!0,s)}}const u=(l,a,h)=>{n(0,a[h].disabled=!l.disabled,c)};return e.$$.update=()=>{e.$$.dirty&2&&n(2,o=s?"Reset":"Roll the dice!"),e.$$.dirty&1&&(r=c.filter(l=>!l.disabled))},[c,s,o,i,u]}class Ae extends ne{constructor(t){super(),te(this,t,Se,Le,U,{})}}new Ae({target:document.getElementById("app")});
