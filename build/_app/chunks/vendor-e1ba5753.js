function d(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function M(t){return t()}function z(){return Object.create(null)}function m(t){t.forEach(M)}function I(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let y;function st(t,n){return y||(y=document.createElement("a")),y.href=n,t===y.href}function G(t){return Object.keys(t).length===0}function J(t,...n){if(t==null)return d;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(J(n,e))}function at(t,n,e,r){if(t){const c=B(t,n,e,r);return t[0](c)}}function B(t,n,e,r){return t[1]&&r?H(e.ctx.slice(),t[1](r(n))):e.ctx}function _t(t,n,e,r){if(t[2]&&r){const c=t[2](r(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],o=Math.max(n.dirty.length,c.length);for(let u=0;u<o;u+=1)s[u]=n.dirty[u]|c[u];return s}return n.dirty|c}return n.dirty}function dt(t,n,e,r,c,s){if(c){const o=B(n,e,r,s);t.p(o,c)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}let b=!1;function K(){b=!0}function W(){b=!1}function Q(t,n,e,r){for(;t<n;){const c=t+(n-t>>1);e(c)<=r?t=c+1:n=c}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&i.push(a)}n=i}const e=new Int32Array(n.length+1),r=new Int32Array(n.length);e[0]=-1;let c=0;for(let i=0;i<n.length;i++){const l=n[i].claim_order,a=(c>0&&n[e[c]].claim_order<=l?c+1:Q(1,c,g=>n[e[g]].claim_order,l))-1;r[i]=e[a]+1;const f=a+1;e[f]=i,c=Math.max(f,c)}const s=[],o=[];let u=n.length-1;for(let i=e[c]+1;i!=0;i=r[i-1]){for(s.push(n[i-1]);u>=i;u--)o.push(n[u]);u--}for(;u>=0;u--)o.push(n[u]);s.reverse(),o.sort((i,l)=>i.claim_order-l.claim_order);for(let i=0,l=0;i<o.length;i++){for(;l<s.length&&o[i].claim_order>=s[l].claim_order;)l++;const a=l<s.length?s[l]:null;t.insertBefore(o[i],a)}}function U(t,n){if(b){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function mt(t,n,e){b&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode.removeChild(t)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function pt(){return k(" ")}function gt(){return k("")}function yt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,r,c=!1){tt(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(n(u)){const i=e(u);return i===void 0?t.splice(o,1):t[o]=i,c||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(n(u)){const i=e(u);return i===void 0?t.splice(o,1):t[o]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function T(t,n,e,r){return O(t,c=>c.nodeName===n,c=>{const s=[];for(let o=0;o<c.attributes.length;o++){const u=c.attributes[o];e[u.name]||s.push(u.name)}s.forEach(o=>c.removeAttribute(o))},()=>r(n))}function bt(t,n,e){return T(t,n,e,X)}function xt(t,n,e){return T(t,n,e,Y)}function nt(t,n){return O(t,e=>e.nodeType===3,e=>{const r=""+n;if(e.data.startsWith(r)){if(e.data.length!==r.length)return e.splitText(r.length)}else e.data=r},()=>k(n),!0)}function $t(t){return nt(t," ")}function wt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Et(t,n,e){t.classList[e?"add":"remove"](n)}function St(t,n=document.body){return Array.from(n.querySelectorAll(t))}let x;function $(t){x=t}function w(){if(!x)throw new Error("Function called outside component initialization");return x}function kt(t){w().$$.on_mount.push(t)}function At(t){w().$$.after_update.push(t)}function Nt(t,n){w().$$.context.set(t,n)}function jt(t){return w().$$.context.get(t)}const p=[],L=[],E=[],D=[],et=Promise.resolve();let A=!1;function it(){A||(A=!0,et.then(F))}function N(t){E.push(t)}let j=!1;const q=new Set;function F(){if(!j){j=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];$(n),rt(n.$$)}for($(null),p.length=0;L.length;)L.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];q.has(n)||(q.add(n),n())}E.length=0}while(p.length);for(;D.length;)D.pop()();A=!1,j=!1,q.clear()}}function rt(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const S=new Set;let _;function qt(){_={r:0,c:[],p:_}}function Ct(){_.r||m(_.c),_=_.p}function ct(t,n){t&&t.i&&(S.delete(t),t.i(n))}function vt(t,n,e,r){if(t&&t.o){if(S.has(t))return;S.add(t),_.c.push(()=>{S.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function Mt(t,n){const e={},r={},c={$$scope:1};let s=t.length;for(;s--;){const o=t[s],u=n[s];if(u){for(const i in o)i in u||(r[i]=1);for(const i in u)c[i]||(e[i]=u[i],c[i]=1);t[s]=u}else for(const i in o)c[i]=1}for(const o in r)o in e||(e[o]=void 0);return e}function zt(t){return typeof t=="object"&&t!==null?t:{}}function Bt(t){t&&t.c()}function Ot(t,n){t&&t.l(n)}function ot(t,n,e,r){const{fragment:c,on_mount:s,on_destroy:o,after_update:u}=t.$$;c&&c.m(n,e),r||N(()=>{const i=s.map(M).filter(I);o?o.push(...i):m(i),t.$$.on_mount=[]}),u.forEach(N)}function ut(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(p.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Tt(t,n,e,r,c,s,o,u=[-1]){const i=x;$(t);const l=t.$$={fragment:null,ctx:null,props:s,update:d,not_equal:c,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(i?i.$$.context:[])),callbacks:z(),dirty:u,skip_bound:!1,root:n.target||i.$$.root};o&&o(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,g,...C)=>{const v=C.length?C[0]:g;return l.ctx&&c(l.ctx[f],l.ctx[f]=v)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](v),a&&lt(t,f)),g}):[],l.update(),a=!0,m(l.before_update),l.fragment=r?r(l.ctx):!1,n.target){if(n.hydrate){K();const f=Z(n.target);l.fragment&&l.fragment.l(f),f.forEach(V)}else l.fragment&&l.fragment.c();n.intro&&ct(t.$$.fragment),ot(t,n.target,n.anchor,n.customElement),W(),F()}$(i)}class Lt{$destroy(){ut(this,1),this.$destroy=d}$on(n,e){const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const c=r.indexOf(e);c!==-1&&r.splice(c,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const h=[];function Dt(t,n=d){let e;const r=new Set;function c(u){if(P(t,u)&&(t=u,e)){const i=!h.length;for(const l of r)l[1](),h.push(l,t);if(i){for(let l=0;l<h.length;l+=2)h[l][0](h[l+1]);h.length=0}}}function s(u){c(u(t))}function o(u,i=d){const l=[u,i];return r.add(l),r.size===1&&(e=n(c)||d),u(t),()=>{r.delete(l),r.size===0&&(e(),e=null)}}return{set:c,update:s,subscribe:o}}export{kt as A,H as B,Dt as C,jt as D,Et as E,U as F,d as G,ft as H,at as I,st as J,dt as K,ht as L,_t as M,St as N,Y as O,xt as P,Lt as S,Z as a,yt as b,bt as c,V as d,X as e,mt as f,nt as g,wt as h,Tt as i,Bt as j,pt as k,gt as l,Ot as m,$t as n,ot as o,Mt as p,zt as q,qt as r,P as s,k as t,vt as u,ut as v,Ct as w,ct as x,Nt as y,At as z};
