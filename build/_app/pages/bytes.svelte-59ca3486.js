import{S as tt,i as et,s as st,k as L,e as k,t as B,j as O,T as lt,d as p,n as S,c as y,a as E,g as D,m as Y,b as $,f as T,F as i,o as Z,u as U,w as z,x as I,v as J,r as K,G as V,h as q,Z as M,I as ot,_ as nt}from"../chunks/vendor-b0dca1c4.js";import{C as rt}from"../chunks/contact-2deb9ba2.js";import{b as at}from"../chunks/env-a13806e5.js";function N(u,t,e){const s=u.slice();return s[1]=t[e],s}function Q(u,t,e){const s=u.slice();return s[4]=t[e],s}function ct(u){let t,e,s,o;return{c(){t=k("p"),e=B("Unable to load posts at this time, but rest assured we're looking into it.. "),s=k("br"),o=B(" Apologies!"),this.h()},l(l){t=y(l,"P",{class:!0});var f=E(t);e=D(f,"Unable to load posts at this time, but rest assured we're looking into it.. "),s=y(f,"BR",{}),o=D(f," Apologies!"),f.forEach(p),this.h()},h(){$(t,"class","text-red-400")},m(l,f){T(l,t,f),i(t,e),i(t,s),i(t,o)},p:V,i:V,o:V,d(l){l&&p(t)}}}function it(u){let t,e,s,o=u[0],l=[];for(let n=0;n<o.length;n+=1)l[n]=X(N(u,o,n));const f=n=>U(l[n],1,1,()=>{l[n]=null});return{c(){t=k("table"),e=k("tbody");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){t=y(n,"TABLE",{class:!0});var h=E(t);e=y(h,"TBODY",{});var c=E(e);for(let d=0;d<l.length;d+=1)l[d].l(c);c.forEach(p),h.forEach(p),this.h()},h(){$(t,"class","w-full text-center")},m(n,h){T(n,t,h),i(t,e);for(let c=0;c<l.length;c+=1)l[c].m(e,null);s=!0},p(n,h){if(h&1){o=n[0];let c;for(c=0;c<o.length;c+=1){const d=N(n,o,c);l[c]?(l[c].p(d,h),I(l[c],1)):(l[c]=X(d),l[c].c(),I(l[c],1),l[c].m(e,null))}for(K(),c=o.length;c<l.length;c+=1)f(c);z()}},i(n){if(!s){for(let h=0;h<o.length;h+=1)I(l[h]);s=!0}},o(n){l=l.filter(Boolean);for(let h=0;h<l.length;h+=1)U(l[h]);s=!1},d(n){n&&p(t),M(l,n)}}}function ht(u){let t,e,s=u[0].length+"",o,l;return{c(){t=k("p"),e=B("Loading... "),o=B(s),l=B(" posts"),this.h()},l(f){t=y(f,"P",{class:!0});var n=E(t);e=D(n,"Loading... "),o=D(n,s),l=D(n," posts"),n.forEach(p),this.h()},h(){$(t,"class","text-center animate-pulse")},m(f,n){T(f,t,n),i(t,e),i(t,o),i(t,l)},p(f,n){n&1&&s!==(s=f[0].length+"")&&q(o,s)},i:V,o:V,d(f){f&&p(t)}}}function W(u){let t,e=u[4]+"",s;return{c(){t=k("p"),s=B(e),this.h()},l(o){t=y(o,"P",{class:!0});var l=E(t);s=D(l,e),l.forEach(p),this.h()},h(){$(t,"class","inline-block bhhs bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2")},m(o,l){T(o,t,l),i(t,s)},p(o,l){l&1&&e!==(e=o[4]+"")&&q(s,e)},d(o){o&&p(t)}}}function X(u){var j;let t,e,s,o,l=((j=u[1])==null?void 0:j.title)+"",f,n,h,c,d,b,x,A,w=new Date(u[1].published).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"})+"",C,R,g;h=new ot({props:{data:nt}});let H=u[1].tags,r=[];for(let a=0;a<H.length;a+=1)r[a]=W(Q(u,H,a));return{c(){t=k("tr"),e=k("td"),s=k("p"),o=k("a"),f=B(l),n=L(),O(h.$$.fragment),d=L();for(let a=0;a<r.length;a+=1)r[a].c();b=L(),x=k("p"),A=B("Published "),C=B(w),R=L(),this.h()},l(a){t=y(a,"TR",{});var _=E(t);e=y(_,"TD",{class:!0});var v=E(e);s=y(v,"P",{});var m=E(s);o=y(m,"A",{href:!0,target:!0,class:!0});var P=E(o);f=D(P,l),n=S(P),Y(h.$$.fragment,P),P.forEach(p),m.forEach(p),d=S(v);for(let F=0;F<r.length;F+=1)r[F].l(v);b=S(v),x=y(v,"P",{class:!0});var G=E(x);A=D(G,"Published "),C=D(G,w),G.forEach(p),v.forEach(p),R=S(_),_.forEach(p),this.h()},h(){$(o,"href",c="https://emmalu.notion.site/"+u[1].slug+"-"+u[1].id.split("-").join("")),$(o,"target","_blank"),$(o,"class","bhhs hover:text-red-700 text-2xl items-center"),$(x,"class","text-xs italic"),$(e,"class","items-center text-center")},m(a,_){T(a,t,_),i(t,e),i(e,s),i(s,o),i(o,f),i(o,n),Z(h,o,null),i(e,d);for(let v=0;v<r.length;v+=1)r[v].m(e,null);i(e,b),i(e,x),i(x,A),i(x,C),i(t,R),g=!0},p(a,_){var v;if((!g||_&1)&&l!==(l=((v=a[1])==null?void 0:v.title)+"")&&q(f,l),(!g||_&1&&c!==(c="https://emmalu.notion.site/"+a[1].slug+"-"+a[1].id.split("-").join("")))&&$(o,"href",c),_&1){H=a[1].tags;let m;for(m=0;m<H.length;m+=1){const P=Q(a,H,m);r[m]?r[m].p(P,_):(r[m]=W(P),r[m].c(),r[m].m(e,b))}for(;m<r.length;m+=1)r[m].d(1);r.length=H.length}(!g||_&1)&&w!==(w=new Date(a[1].published).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"})+"")&&q(C,w)},i(a){g||(I(h.$$.fragment,a),g=!0)},o(a){U(h.$$.fragment,a),g=!1},d(a){a&&p(t),J(h),M(r,a)}}}function ut(u){let t,e,s,o,l,f,n,h,c,d,b,x,A,w,C;const R=[ht,it,ct],g=[];function H(r,j){return r[0].length===0?0:r[0].length>0?1:2}return d=H(u),b=g[d]=R[d](u),w=new rt({}),{c(){t=L(),e=k("div"),s=k("div"),o=k("h2"),l=B("House Bytes [Blog]"),f=L(),n=k("p"),h=B(`A place for timely, CHS-focused bits for homeowners, home buyers, & those interested in Real
			Estate.`),c=L(),b.c(),x=L(),A=k("div"),O(w.$$.fragment),this.h()},l(r){lt('[data-svelte="svelte-1kpyys9"]',document.head).forEach(p),t=S(r),e=y(r,"DIV",{class:!0});var a=E(e);s=y(a,"DIV",{class:!0});var _=E(s);o=y(_,"H2",{class:!0});var v=E(o);l=D(v,"House Bytes [Blog]"),v.forEach(p),f=S(_),n=y(_,"P",{class:!0});var m=E(n);h=D(m,`A place for timely, CHS-focused bits for homeowners, home buyers, & those interested in Real
			Estate.`),m.forEach(p),c=S(_),b.l(_),_.forEach(p),x=S(a),A=y(a,"DIV",{});var P=E(A);Y(w.$$.fragment,P),P.forEach(p),a.forEach(p),this.h()},h(){document.title="House Bytes",$(o,"class","block pb-4 font-bold"),$(n,"class","pb-4 w-96"),$(s,"class","text-center contents-center pb-16"),$(e,"class","flex flex-col py-2 sm:py-8 items-center")},m(r,j){T(r,t,j),T(r,e,j),i(e,s),i(s,o),i(o,l),i(s,f),i(s,n),i(n,h),i(s,c),g[d].m(s,null),i(e,x),i(e,A),Z(w,A,null),C=!0},p(r,[j]){let a=d;d=H(r),d===a?g[d].p(r,j):(K(),U(g[a],1,1,()=>{g[a]=null}),z(),b=g[d],b?b.p(r,j):(b=g[d]=R[d](r),b.c()),I(b,1),b.m(s,null))},i(r){C||(I(b),I(w.$$.fragment,r),C=!0)},o(r){U(b),U(w.$$.fragment,r),C=!1},d(r){r&&p(t),r&&p(e),g[d].d(),J(w)}}}const mt=at;async function bt({fetch:u}){const t="https://cv-notion.herokuapp.com",e=`${t}/posts`,s=await u(e,{method:"GET",mode:"cors",headers:{"content-type":"application/json"}});return s.ok?{props:{posts:await s.json()}}:{status:s.status,error:new Error(`Could not load ${t}`)}}function ft(u,t,e){let{posts:s=[]}=t;return u.$$set=o=>{"posts"in o&&e(0,s=o.posts)},[s]}class gt extends tt{constructor(t){super();et(this,t,ft,ut,st,{posts:0})}}export{gt as default,bt as load,mt as router};