import{S as X,i as ee,s as te,k as S,e as v,t as H,j as G,T as se,d,n as j,c as k,a as y,g as P,m as F,b as E,f as L,F as u,o as J,u as q,w as N,x as T,v as Y,r as Z,G as O,h as V,Z as z,I as le,_ as oe}from"../../chunks/vendor-b0dca1c4.js";import{C as ne}from"../../chunks/contact-2deb9ba2.js";function K(f,e,t){const l=f.slice();return l[1]=e[t],l}function M(f,e,t){const l=f.slice();return l[4]=e[t],l}function re(f){let e,t,l,o;return{c(){e=v("p"),t=H("Unable to load posts at this time, but rest assured we're looking into it.. "),l=v("br"),o=H(" Apologies!"),this.h()},l(s){e=k(s,"P",{class:!0});var m=y(e);t=P(m,"Unable to load posts at this time, but rest assured we're looking into it.. "),l=k(m,"BR",{}),o=P(m," Apologies!"),m.forEach(d),this.h()},h(){E(e,"class","text-red-400")},m(s,m){L(s,e,m),u(e,t),u(e,l),u(e,o)},p:O,i:O,o:O,d(s){s&&d(e)}}}function ae(f){let e,t,l,o=f[0],s=[];for(let r=0;r<o.length;r+=1)s[r]=W(K(f,o,r));const m=r=>q(s[r],1,1,()=>{s[r]=null});return{c(){e=v("table"),t=v("tbody");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=k(r,"TABLE",{class:!0});var h=y(e);t=k(h,"TBODY",{});var c=y(t);for(let p=0;p<s.length;p+=1)s[p].l(c);c.forEach(d),h.forEach(d),this.h()},h(){E(e,"class","w-full text-center")},m(r,h){L(r,e,h),u(e,t);for(let c=0;c<s.length;c+=1)s[c].m(t,null);l=!0},p(r,h){if(h&1){o=r[0];let c;for(c=0;c<o.length;c+=1){const p=K(r,o,c);s[c]?(s[c].p(p,h),T(s[c],1)):(s[c]=W(p),s[c].c(),T(s[c],1),s[c].m(t,null))}for(Z(),c=o.length;c<s.length;c+=1)m(c);N()}},i(r){if(!l){for(let h=0;h<o.length;h+=1)T(s[h]);l=!0}},o(r){s=s.filter(Boolean);for(let h=0;h<s.length;h+=1)q(s[h]);l=!1},d(r){r&&d(e),z(s,r)}}}function ce(f){let e,t;return{c(){e=v("p"),t=H("Loading posts..."),this.h()},l(l){e=k(l,"P",{class:!0});var o=y(e);t=P(o,"Loading posts..."),o.forEach(d),this.h()},h(){E(e,"class","text-center animate-pulse")},m(l,o){L(l,e,o),u(e,t)},p:O,i:O,o:O,d(l){l&&d(e)}}}function Q(f){let e,t=f[4]+"",l;return{c(){e=v("p"),l=H(t),this.h()},l(o){e=k(o,"P",{class:!0});var s=y(e);l=P(s,t),s.forEach(d),this.h()},h(){E(e,"class","inline-block bhhs bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2")},m(o,s){L(o,e,s),u(e,l)},p(o,s){s&1&&t!==(t=o[4]+"")&&V(l,t)},d(o){o&&d(e)}}}function W(f){let e,t,l,o,s=f[1].title+"",m,r,h,c,p,b,$,w,x=new Date(f[1].published).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"})+"",B,I,g;h=new le({props:{data:oe}});let D=f[1].tags,n=[];for(let a=0;a<D.length;a+=1)n[a]=Q(M(f,D,a));return{c(){e=v("tr"),t=v("td"),l=v("p"),o=v("a"),m=H(s),r=S(),G(h.$$.fragment),p=S();for(let a=0;a<n.length;a+=1)n[a].c();b=S(),$=v("p"),w=H("Published "),B=H(x),I=S(),this.h()},l(a){e=k(a,"TR",{});var _=y(e);t=k(_,"TD",{class:!0});var i=y(t);l=k(i,"P",{});var A=y(l);o=k(A,"A",{href:!0,target:!0,class:!0});var C=y(o);m=P(C,s),r=j(C),F(h.$$.fragment,C),C.forEach(d),A.forEach(d),p=j(i);for(let U=0;U<n.length;U+=1)n[U].l(i);b=j(i),$=k(i,"P",{class:!0});var R=y($);w=P(R,"Published "),B=P(R,x),R.forEach(d),i.forEach(d),I=j(_),_.forEach(d),this.h()},h(){E(o,"href",c="https://emmalu.notion.site/"+f[1].slug+"-"+f[1].id.split("-").join("")),E(o,"target","_blank"),E(o,"class","bhhs hover:text-red-700 text-2xl items-center"),E($,"class","text-xs italic"),E(t,"class","items-center text-center")},m(a,_){L(a,e,_),u(e,t),u(t,l),u(l,o),u(o,m),u(o,r),J(h,o,null),u(t,p);for(let i=0;i<n.length;i+=1)n[i].m(t,null);u(t,b),u(t,$),u($,w),u($,B),u(e,I),g=!0},p(a,_){if((!g||_&1)&&s!==(s=a[1].title+"")&&V(m,s),(!g||_&1&&c!==(c="https://emmalu.notion.site/"+a[1].slug+"-"+a[1].id.split("-").join("")))&&E(o,"href",c),_&1){D=a[1].tags;let i;for(i=0;i<D.length;i+=1){const A=M(a,D,i);n[i]?n[i].p(A,_):(n[i]=Q(A),n[i].c(),n[i].m(t,b))}for(;i<n.length;i+=1)n[i].d(1);n.length=D.length}(!g||_&1)&&x!==(x=new Date(a[1].published).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"})+"")&&V(B,x)},i(a){g||(T(h.$$.fragment,a),g=!0)},o(a){q(h.$$.fragment,a),g=!1},d(a){a&&d(e),Y(h),z(n,a)}}}function ie(f){let e,t,l,o,s,m,r,h,c,p,b,$,w,x,B;const I=[ce,ae,re],g=[];function D(n,a){return n[0].length===0?0:n[0].length>0?1:2}return p=D(f),b=g[p]=I[p](f),x=new ne({}),{c(){e=S(),t=v("div"),l=v("div"),o=v("h2"),s=H("House Bytes [Blog]"),m=S(),r=v("p"),h=H("A place for CHS-focused Real Estate bits & bytes for existing & prospective homeowners."),c=S(),b.c(),$=S(),w=v("div"),G(x.$$.fragment),this.h()},l(n){se('[data-svelte="svelte-1kpyys9"]',document.head).forEach(d),e=j(n),t=k(n,"DIV",{class:!0});var _=y(t);l=k(_,"DIV",{class:!0});var i=y(l);o=k(i,"H2",{class:!0});var A=y(o);s=P(A,"House Bytes [Blog]"),A.forEach(d),m=j(i),r=k(i,"P",{class:!0});var C=y(r);h=P(C,"A place for CHS-focused Real Estate bits & bytes for existing & prospective homeowners."),C.forEach(d),c=j(i),b.l(i),i.forEach(d),$=j(_),w=k(_,"DIV",{});var R=y(w);F(x.$$.fragment,R),R.forEach(d),_.forEach(d),this.h()},h(){document.title="House Bytes",E(o,"class","block pb-4 font-bold"),E(r,"class","pb-4 w-96"),E(l,"class","text-center contents-center pb-16"),E(t,"class","flex flex-col py-2 sm:py-8 items-center")},m(n,a){L(n,e,a),L(n,t,a),u(t,l),u(l,o),u(o,s),u(l,m),u(l,r),u(r,h),u(l,c),g[p].m(l,null),u(t,$),u(t,w),J(x,w,null),B=!0},p(n,[a]){let _=p;p=D(n),p===_?g[p].p(n,a):(Z(),q(g[_],1,1,()=>{g[_]=null}),N(),b=g[p],b?b.p(n,a):(b=g[p]=I[p](n),b.c()),T(b,1),b.m(l,null))},i(n){B||(T(b),T(x.$$.fragment,n),B=!0)},o(n){q(b),q(x.$$.fragment,n),B=!1},d(n){n&&d(e),n&&d(t),g[p].d(),Y(x)}}}const pe=!0,de=!1;async function _e({fetch:f}){const e=new Headers;e.append("Accept","application/json");const t={method:"GET",headers:e,mode:"cors",cache:"default"},l="https://cv-notion.herokuapp.com",s=await(await f("https://cv-notion.herokuapp.com/posts",t)).text();return s?{props:{posts:JSON.parse(s)}}:{error:new Error(`Couldn't load ${l}/posts`)}}function he(f,e,t){let{posts:l=[]}=e;return f.$$set=o=>{"posts"in o&&t(0,l=o.posts)},[l]}class me extends X{constructor(e){super();ee(this,e,he,ie,te,{posts:0})}}export{me as default,_e as load,pe as prerender,de as ssr};
