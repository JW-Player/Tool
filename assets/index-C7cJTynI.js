(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var Ft,z,Xo,Ne,In,Zo,jo,ei,yn,en,tn,At={},St=[],Ni=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Gt=Array.isArray;function _e(n,e){for(var t in e)n[t]=e[t];return n}function bn(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function F(n,e,t){var o,i,r,s={};for(r in e)r=="key"?o=e[r]:r=="ref"?i=e[r]:s[r]=e[r];if(arguments.length>2&&(s.children=arguments.length>3?Ft.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(r in n.defaultProps)s[r]===void 0&&(s[r]=n.defaultProps[r]);return Tt(n,s,o,i,null)}function Tt(n,e,t,o,i){var r={type:n,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Xo,__i:-1,__u:0};return i==null&&z.vnode!=null&&z.vnode(r),r}function Vt(n){return n.children}function It(n,e){this.props=n,this.context=e}function Je(n,e){if(e==null)return n.__?Je(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?Je(n):null}function Ui(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,o=[],i=[],r=_e({},e);r.__v=e.__v+1,z.vnode&&z.vnode(r),$n(n.__P,r,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,o,t??Je(e),!!(32&e.__u),i),r.__v=e.__v,r.__.__k[r.__i]=r,ii(o,r,i),e.__e=e.__=null,r.__e!=t&&ti(r)}}function ti(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),ti(n)}function En(n){(!n.__d&&(n.__d=!0)&&Ne.push(n)&&!Pt.__r++||In!=z.debounceRendering)&&((In=z.debounceRendering)||Zo)(Pt)}function Pt(){for(var n,e=1;Ne.length;)Ne.length>e&&Ne.sort(jo),n=Ne.shift(),e=Ne.length,Ui(n);Pt.__r=0}function ni(n,e,t,o,i,r,s,d,u,c,p){var f,h,m,g,v,b,$,C=o&&o.__k||St,x=e.length;for(u=Fi(t,e,C,u,x),f=0;f<x;f++)(m=t.__k[f])!=null&&(h=m.__i!=-1&&C[m.__i]||At,m.__i=f,b=$n(n,m,h,i,r,s,d,u,c,p),g=m.__e,m.ref&&h.ref!=m.ref&&(h.ref&&_n(h.ref,null,m),p.push(m.ref,m.__c||g,m)),v==null&&g!=null&&(v=g),($=!!(4&m.__u))||h.__k===m.__k?u=oi(m,u,n,$):typeof m.type=="function"&&b!==void 0?u=b:g&&(u=g.nextSibling),m.__u&=-7);return t.__e=v,u}function Fi(n,e,t,o,i){var r,s,d,u,c,p=t.length,f=p,h=0;for(n.__k=new Array(i),r=0;r<i;r++)(s=e[r])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=n.__k[r]=Tt(null,s,null,null,null):Gt(s)?s=n.__k[r]=Tt(Vt,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=n.__k[r]=Tt(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):n.__k[r]=s,u=r+h,s.__=n,s.__b=n.__b+1,d=null,(c=s.__i=Gi(s,t,u,f))!=-1&&(f--,(d=t[c])&&(d.__u|=2)),d==null||d.__v==null?(c==-1&&(i>p?h--:i<p&&h++),typeof s.type!="function"&&(s.__u|=4)):c!=u&&(c==u-1?h--:c==u+1?h++:(c>u?h--:h++,s.__u|=4))):n.__k[r]=null;if(f)for(r=0;r<p;r++)(d=t[r])!=null&&!(2&d.__u)&&(d.__e==o&&(o=Je(d)),ai(d,d));return o}function oi(n,e,t,o){var i,r;if(typeof n.type=="function"){for(i=n.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=n,e=oi(i[r],e,t,o));return e}n.__e!=e&&(o&&(e&&n.type&&!e.parentNode&&(e=Je(n)),t.insertBefore(n.__e,e||null)),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Gi(n,e,t,o){var i,r,s,d=n.key,u=n.type,c=e[t],p=c!=null&&(2&c.__u)==0;if(c===null&&d==null||p&&d==c.key&&u==c.type)return t;if(o>(p?1:0)){for(i=t-1,r=t+1;i>=0||r<e.length;)if((c=e[s=i>=0?i--:r++])!=null&&!(2&c.__u)&&d==c.key&&u==c.type)return s}return-1}function xn(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Ni.test(e)?t:t+"px"}function vt(n,e,t,o,i){var r,s;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof o=="string"&&(n.style.cssText=o=""),o)for(e in o)t&&e in t||xn(n.style,e,"");if(t)for(e in t)o&&t[e]==o[e]||xn(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(ei,"$1")),s=e.toLowerCase(),e=s in n||e=="onFocusOut"||e=="onFocusIn"?s.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+r]=t,t?o?t.u=o.u:(t.u=yn,n.addEventListener(e,r?tn:en,r)):n.removeEventListener(e,r?tn:en,r);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function kn(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=yn++;else if(e.t<t.u)return;return t(z.event?z.event(e):e)}}}function $n(n,e,t,o,i,r,s,d,u,c){var p,f,h,m,g,v,b,$,C,x,w,y,k,E,T,I=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),r=[d=e.__e=t.__e]),(p=z.__b)&&p(e);e:if(typeof I=="function")try{if($=e.props,C="prototype"in I&&I.prototype.render,x=(p=I.contextType)&&o[p.__c],w=p?x?x.props.value:p.__:o,t.__c?b=(f=e.__c=t.__c).__=f.__E:(C?e.__c=f=new I($,w):(e.__c=f=new It($,w),f.constructor=I,f.render=Bi),x&&x.sub(f),f.state||(f.state={}),f.__n=o,h=f.__d=!0,f.__h=[],f._sb=[]),C&&f.__s==null&&(f.__s=f.state),C&&I.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=_e({},f.__s)),_e(f.__s,I.getDerivedStateFromProps($,f.__s))),m=f.props,g=f.state,f.__v=e,h)C&&I.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),C&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(C&&I.getDerivedStateFromProps==null&&$!==m&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps($,w),e.__v==t.__v||!f.__e&&f.shouldComponentUpdate!=null&&f.shouldComponentUpdate($,f.__s,w)===!1){e.__v!=t.__v&&(f.props=$,f.state=f.__s,f.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(A){A&&(A.__=e)}),St.push.apply(f.__h,f._sb),f._sb=[],f.__h.length&&s.push(f);break e}f.componentWillUpdate!=null&&f.componentWillUpdate($,f.__s,w),C&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(m,g,v)})}if(f.context=w,f.props=$,f.__P=n,f.__e=!1,y=z.__r,k=0,C)f.state=f.__s,f.__d=!1,y&&y(e),p=f.render(f.props,f.state,f.context),St.push.apply(f.__h,f._sb),f._sb=[];else do f.__d=!1,y&&y(e),p=f.render(f.props,f.state,f.context),f.state=f.__s;while(f.__d&&++k<25);f.state=f.__s,f.getChildContext!=null&&(o=_e(_e({},o),f.getChildContext())),C&&!h&&f.getSnapshotBeforeUpdate!=null&&(v=f.getSnapshotBeforeUpdate(m,g)),E=p!=null&&p.type===Vt&&p.key==null?ri(p.props.children):p,d=ni(n,Gt(E)?E:[E],e,t,o,i,r,s,d,u,c),f.base=e.__e,e.__u&=-161,f.__h.length&&s.push(f),b&&(f.__E=f.__=null)}catch(A){if(e.__v=null,u||r!=null)if(A.then){for(e.__u|=u?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;r[r.indexOf(d)]=null,e.__e=d}else{for(T=r.length;T--;)bn(r[T]);nn(e)}else e.__e=t.__e,e.__k=t.__k,A.then||nn(e);z.__e(A,e,t)}else r==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):d=e.__e=Vi(t.__e,e,t,o,i,r,s,u,c);return(p=z.diffed)&&p(e),128&e.__u?void 0:d}function nn(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(nn))}function ii(n,e,t){for(var o=0;o<t.length;o++)_n(t[o],t[++o],t[++o]);z.__c&&z.__c(e,n),n.some(function(i){try{n=i.__h,i.__h=[],n.some(function(r){r.call(i)})}catch(r){z.__e(r,i.__v)}})}function ri(n){return typeof n!="object"||n==null||n.__b>0?n:Gt(n)?n.map(ri):_e({},n)}function Vi(n,e,t,o,i,r,s,d,u){var c,p,f,h,m,g,v,b=t.props||At,$=e.props,C=e.type;if(C=="svg"?i="http://www.w3.org/2000/svg":C=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),r!=null){for(c=0;c<r.length;c++)if((m=r[c])&&"setAttribute"in m==!!C&&(C?m.localName==C:m.nodeType==3)){n=m,r[c]=null;break}}if(n==null){if(C==null)return document.createTextNode($);n=document.createElementNS(i,C,$.is&&$),d&&(z.__m&&z.__m(e,r),d=!1),r=null}if(C==null)b===$||d&&n.data==$||(n.data=$);else{if(r=r&&Ft.call(n.childNodes),!d&&r!=null)for(b={},c=0;c<n.attributes.length;c++)b[(m=n.attributes[c]).name]=m.value;for(c in b)m=b[c],c=="dangerouslySetInnerHTML"?f=m:c=="children"||c in $||c=="value"&&"defaultValue"in $||c=="checked"&&"defaultChecked"in $||vt(n,c,null,m,i);for(c in $)m=$[c],c=="children"?h=m:c=="dangerouslySetInnerHTML"?p=m:c=="value"?g=m:c=="checked"?v=m:d&&typeof m!="function"||b[c]===m||vt(n,c,m,b[c],i);if(p)d||f&&(p.__html==f.__html||p.__html==n.innerHTML)||(n.innerHTML=p.__html),e.__k=[];else if(f&&(n.innerHTML=""),ni(e.type=="template"?n.content:n,Gt(h)?h:[h],e,t,o,C=="foreignObject"?"http://www.w3.org/1999/xhtml":i,r,s,r?r[0]:t.__k&&Je(t,0),d,u),r!=null)for(c=r.length;c--;)bn(r[c]);d||(c="value",C=="progress"&&g==null?n.removeAttribute("value"):g!=null&&(g!==n[c]||C=="progress"&&!g||C=="option"&&g!=b[c])&&vt(n,c,g,b[c],i),c="checked",v!=null&&v!=n[c]&&vt(n,c,v,b[c],i))}return n}function _n(n,e,t){try{if(typeof n=="function"){var o=typeof n.__u=="function";o&&n.__u(),o&&e==null||(n.__u=n(e))}else n.current=e}catch(i){z.__e(i,t)}}function ai(n,e,t){var o,i;if(z.unmount&&z.unmount(n),(o=n.ref)&&(o.current&&o.current!=n.__e||_n(o,null,e)),(o=n.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){z.__e(r,e)}o.base=o.__P=null}if(o=n.__k)for(i=0;i<o.length;i++)o[i]&&ai(o[i],e,t||typeof n.type!="function");t||bn(n.__e),n.__c=n.__=n.__e=void 0}function Bi(n,e,t){return this.constructor(n,t)}function Hi(n,e,t){var o,i,r,s;e==document&&(e=document.documentElement),z.__&&z.__(n,e),i=(o=!1)?null:e.__k,r=[],s=[],$n(e,n=e.__k=F(Vt,null,[n]),i||At,At,e.namespaceURI,i?null:e.firstChild?Ft.call(e.childNodes):null,r,i?i.__e:e.firstChild,o,s),ii(r,n,s)}Ft=St.slice,z={__e:function(n,e,t,o){for(var i,r,s;e=e.__;)if((i=e.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(n)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(n,o||{}),s=i.__d),s)return i.__E=i}catch(d){n=d}throw n}},Xo=0,It.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=_e({},this.state),typeof n=="function"&&(n=n(_e({},t),this.props)),n&&_e(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),En(this))},It.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),En(this))},It.prototype.render=Vt,Ne=[],Zo=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,jo=function(n,e){return n.__v.__b-e.__v.__b},Pt.__r=0,ei=/(PointerCapture)$|Capture$/i,yn=0,en=kn(!1),tn=kn(!0);var si=function(n,e,t,o){var i;e[0]=0;for(var r=1;r<e.length;r++){var s=e[r++],d=e[r]?(e[0]|=s?1:2,t[e[r++]]):e[++r];s===3?o[0]=d:s===4?o[1]=Object.assign(o[1]||{},d):s===5?(o[1]=o[1]||{})[e[++r]]=d:s===6?o[1][e[++r]]+=d+"":s?(i=n.apply(d,si(n,d,t,["",null])),o.push(i),d[0]?e[0]|=2:(e[r-2]=0,e[r]=i)):o.push(d)}return o},An=new Map;function G(n){var e=An.get(this);return e||(e=new Map,An.set(this,e)),(e=si(this,e.get(n)||(e.set(n,e=function(t){for(var o,i,r=1,s="",d="",u=[0],c=function(h){r===1&&(h||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,h,s):r===3&&(h||s)?(u.push(3,h,s),r=2):r===2&&s==="..."&&h?u.push(4,h,0):r===2&&s&&!h?u.push(5,0,!0,s):r>=5&&((s||!h&&r===5)&&(u.push(r,0,s,i),r=6),h&&(u.push(r,h,0,i),r=6)),s=""},p=0;p<t.length;p++){p&&(r===1&&c(),c(p));for(var f=0;f<t[p].length;f++)o=t[p][f],r===1?o==="<"?(c(),u=[u],r=3):s+=o:r===4?s==="--"&&o===">"?(r=1,s=""):s=o+s[0]:d?o===d?d="":s+=o:o==='"'||o==="'"?d=o:o===">"?(c(),r=1):r&&(o==="="?(r=5,i=s,s=""):o==="/"&&(r<5||t[p][f+1]===">")?(c(),r===3&&(u=u[0]),r=u,(u=u[0]).push(2,0,r),r=0):o===" "||o==="	"||o===`
`||o==="\r"?(c(),r=2):s+=o),r===3&&s==="!--"&&(r=4,u=u[0])}return c(),u}(n)),e),arguments,[])).length>1?e:e[0]}var st,Q,Qt,Sn,Rt=0,li=[],Z=z,Pn=Z.__b,Rn=Z.__r,Mn=Z.diffed,Dn=Z.__c,Ln=Z.unmount,Nn=Z.__;function Cn(n,e){Z.__h&&Z.__h(Q,n,Rt||e),Rt=0;var t=Q.__H||(Q.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function _(n){return Rt=1,qi(di,n)}function qi(n,e,t){var o=Cn(st++,2);if(o.t=n,!o.__c&&(o.__=[di(void 0,e),function(d){var u=o.__N?o.__N[0]:o.__[0],c=o.t(u,d);u!==c&&(o.__N=[c,o.__[1]],o.__c.setState({}))}],o.__c=Q,!Q.__f)){var i=function(d,u,c){if(!o.__c.__H)return!0;var p=o.__c.__H.__.filter(function(h){return h.__c});if(p.every(function(h){return!h.__N}))return!r||r.call(this,d,u,c);var f=o.__c.props!==d;return p.some(function(h){if(h.__N){var m=h.__[0];h.__=h.__N,h.__N=void 0,m!==h.__[0]&&(f=!0)}}),r&&r.call(this,d,u,c)||f};Q.__f=!0;var r=Q.shouldComponentUpdate,s=Q.componentWillUpdate;Q.componentWillUpdate=function(d,u,c){if(this.__e){var p=r;r=void 0,i(d,u,c),r=p}s&&s.call(this,d,u,c)},Q.shouldComponentUpdate=i}return o.__N||o.__}function ve(n,e){var t=Cn(st++,3);!Z.__s&&ci(t.__H,e)&&(t.__=n,t.u=e,Q.__H.__h.push(t))}function me(n){return Rt=5,de(function(){return{current:n}},[])}function de(n,e){var t=Cn(st++,7);return ci(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function zi(){for(var n;n=li.shift();){var e=n.__H;if(n.__P&&e)try{e.__h.some(Et),e.__h.some(on),e.__h=[]}catch(t){e.__h=[],Z.__e(t,n.__v)}}}Z.__b=function(n){Q=null,Pn&&Pn(n)},Z.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Nn&&Nn(n,e)},Z.__r=function(n){Rn&&Rn(n),st=0;var e=(Q=n.__c).__H;e&&(Qt===Q?(e.__h=[],Q.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(Et),e.__h.some(on),e.__h=[],st=0)),Qt=Q},Z.diffed=function(n){Mn&&Mn(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(li.push(e)!==1&&Sn===Z.requestAnimationFrame||((Sn=Z.requestAnimationFrame)||Oi)(zi)),e.__H.__.some(function(t){t.u&&(t.__H=t.u),t.u=void 0})),Qt=Q=null},Z.__c=function(n,e){e.some(function(t){try{t.__h.some(Et),t.__h=t.__h.filter(function(o){return!o.__||on(o)})}catch(o){e.some(function(i){i.__h&&(i.__h=[])}),e=[],Z.__e(o,t.__v)}}),Dn&&Dn(n,e)},Z.unmount=function(n){Ln&&Ln(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.some(function(o){try{Et(o)}catch(i){e=i}}),t.__H=void 0,e&&Z.__e(e,t.__v))};var Un=typeof requestAnimationFrame=="function";function Oi(n){var e,t=function(){clearTimeout(o),Un&&cancelAnimationFrame(e),setTimeout(n)},o=setTimeout(t,35);Un&&(e=requestAnimationFrame(t))}function Et(n){var e=Q,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),Q=e}function on(n){var e=Q;n.__c=n.__(),Q=e}function ci(n,e){return!n||n.length!==e.length||e.some(function(t,o){return t!==n[o]})}function di(n,e){return typeof e=="function"?e(n):e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ki,Ji;function Wi(){return{geminiUrl:Ki,vertexUrl:Ji}}function Yi(n,e,t){var o,i,r;if(!(!((o=n.httpOptions)===null||o===void 0)&&o.baseUrl)){const s=Wi();return n.vertexai?(i=s.vertexUrl)!==null&&i!==void 0?i:e:(r=s.geminiUrl)!==null&&r!==void 0?r:t}return n.httpOptions.baseUrl}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ut{}function N(n,e){const t=/\{([^}]+)\}/g;return n.replace(t,(o,i)=>{if(Object.prototype.hasOwnProperty.call(e,i)){const r=e[i];return r!=null?String(r):""}else throw new Error(`Key '${i}' not found in valueMap.`)})}function l(n,e,t){for(let r=0;r<e.length-1;r++){const s=e[r];if(s.endsWith("[]")){const d=s.slice(0,-2);if(!(d in n))if(Array.isArray(t))n[d]=Array.from({length:t.length},()=>({}));else throw new Error(`Value must be a list given an array path ${s}`);if(Array.isArray(n[d])){const u=n[d];if(Array.isArray(t))for(let c=0;c<u.length;c++){const p=u[c];l(p,e.slice(r+1),t[c])}else for(const c of u)l(c,e.slice(r+1),t)}return}else if(s.endsWith("[0]")){const d=s.slice(0,-3);d in n||(n[d]=[{}]);const u=n[d];l(u[0],e.slice(r+1),t);return}(!n[s]||typeof n[s]!="object")&&(n[s]={}),n=n[s]}const o=e[e.length-1],i=n[o];if(i!==void 0){if(!t||typeof t=="object"&&Object.keys(t).length===0||t===i)return;if(typeof i=="object"&&typeof t=="object"&&i!==null&&t!==null)Object.assign(i,t);else throw new Error(`Cannot set value for an existing key. Key: ${o}`)}else n[o]=t}function a(n,e){try{if(e.length===1&&e[0]==="_self")return n;for(let t=0;t<e.length;t++){if(typeof n!="object"||n===null)return;const o=e[t];if(o.endsWith("[]")){const i=o.slice(0,-2);if(i in n){const r=n[i];return Array.isArray(r)?r.map(s=>a(s,e.slice(t+1))):void 0}else return}else n=n[o]}return n}catch(t){if(t instanceof TypeError)return;throw t}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function W(n,e){if(!e||typeof e!="string")throw new Error("model is required and must be a string");if(n.isVertexAI()){if(e.startsWith("publishers/")||e.startsWith("projects/")||e.startsWith("models/"))return e;if(e.indexOf("/")>=0){const t=e.split("/",2);return`publishers/${t[0]}/models/${t[1]}`}else return`publishers/google/models/${e}`}else return e.startsWith("models/")||e.startsWith("tunedModels/")?e:`models/${e}`}function ui(n,e){const t=W(n,e);return t?t.startsWith("publishers/")&&n.isVertexAI()?`projects/${n.getProject()}/locations/${n.getLocation()}/${t}`:t.startsWith("models/")&&n.isVertexAI()?`projects/${n.getProject()}/locations/${n.getLocation()}/publishers/google/${t}`:t:""}function pi(n,e){return Array.isArray(e)?e.map(t=>Mt(n,t)):[Mt(n,e)]}function Mt(n,e){if(typeof e=="object"&&e!==null)return e;throw new Error(`Could not parse input as Blob. Unsupported blob type: ${typeof e}`)}function Qi(n,e){const t=Mt(n,e);if(t.mimeType&&t.mimeType.startsWith("image/"))return t;throw new Error(`Unsupported mime type: ${t.mimeType}`)}function Xi(n,e){const t=Mt(n,e);if(t.mimeType&&t.mimeType.startsWith("audio/"))return t;throw new Error(`Unsupported mime type: ${t.mimeType}`)}function Fn(n,e){if(e==null)throw new Error("PartUnion is required");if(typeof e=="object")return e;if(typeof e=="string")return{text:e};throw new Error(`Unsupported part type: ${typeof e}`)}function fi(n,e){if(e==null||Array.isArray(e)&&e.length===0)throw new Error("PartListUnion is required");return Array.isArray(e)?e.map(t=>Fn(n,t)):[Fn(n,e)]}function rn(n){return n!=null&&typeof n=="object"&&"parts"in n&&Array.isArray(n.parts)}function Gn(n){return n!=null&&typeof n=="object"&&"functionCall"in n}function Vn(n){return n!=null&&typeof n=="object"&&"functionResponse"in n}function ue(n,e){if(e==null)throw new Error("ContentUnion is required");return rn(e)?e:{role:"user",parts:fi(n,e)}}function mi(n,e){if(!e)return[];if(n.isVertexAI()&&Array.isArray(e))return e.flatMap(t=>{const o=ue(n,t);return o.parts&&o.parts.length>0&&o.parts[0].text!==void 0?[o.parts[0].text]:[]});if(n.isVertexAI()){const t=ue(n,e);return t.parts&&t.parts.length>0&&t.parts[0].text!==void 0?[t.parts[0].text]:[]}return Array.isArray(e)?e.map(t=>ue(n,t)):[ue(n,e)]}function Ee(n,e){if(e==null||Array.isArray(e)&&e.length===0)throw new Error("contents are required");if(!Array.isArray(e)){if(Gn(e)||Vn(e))throw new Error("To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them");return[ue(n,e)]}const t=[],o=[],i=rn(e[0]);for(const r of e){const s=rn(r);if(s!=i)throw new Error("Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them");if(s)t.push(r);else{if(Gn(r)||Vn(r))throw new Error("To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them");o.push(r)}}return i||t.push({role:"user",parts:fi(n,o)}),t}function hi(n,e){return e}function gi(n,e){if(typeof e=="object")return e;if(typeof e=="string")return{voiceConfig:{prebuiltVoiceConfig:{voiceName:e}}};throw new Error(`Unsupported speechConfig type: ${typeof e}`)}function Bt(n,e){return e}function Ht(n,e){if(!Array.isArray(e))throw new Error("tool is required and must be an array of Tools");return e}function Zi(n,e,t,o=1){const i=!e.startsWith(`${t}/`)&&e.split("/").length===o;return n.isVertexAI()?e.startsWith("projects/")?e:e.startsWith("locations/")?`projects/${n.getProject()}/${e}`:e.startsWith(`${t}/`)?`projects/${n.getProject()}/locations/${n.getLocation()}/${e}`:i?`projects/${n.getProject()}/locations/${n.getLocation()}/${t}/${e}`:e:i?`${t}/${e}`:e}function xe(n,e){if(typeof e!="string")throw new Error("name must be a string");return Zi(n,e,"cachedContents")}function vi(n,e){switch(e){case"STATE_UNSPECIFIED":return"JOB_STATE_UNSPECIFIED";case"CREATING":return"JOB_STATE_RUNNING";case"ACTIVE":return"JOB_STATE_SUCCEEDED";case"FAILED":return"JOB_STATE_FAILED";default:return e}}function ke(n,e){if(typeof e!="string")throw new Error("fromImageBytes must be a string");return e}function yi(n,e){if(typeof e!="string")throw new Error("fromName must be a string");return e.startsWith("files/")?e.split("files/")[1]:e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ji(n,e){const t={};if(a(e,["videoMetadata"])!==void 0)throw new Error("videoMetadata parameter is not supported in Gemini API.");const o=a(e,["thought"]);o!=null&&l(t,["thought"],o);const i=a(e,["codeExecutionResult"]);i!=null&&l(t,["codeExecutionResult"],i);const r=a(e,["executableCode"]);r!=null&&l(t,["executableCode"],r);const s=a(e,["fileData"]);s!=null&&l(t,["fileData"],s);const d=a(e,["functionCall"]);d!=null&&l(t,["functionCall"],d);const u=a(e,["functionResponse"]);u!=null&&l(t,["functionResponse"],u);const c=a(e,["inlineData"]);c!=null&&l(t,["inlineData"],c);const p=a(e,["text"]);return p!=null&&l(t,["text"],p),t}function Bn(n,e){const t={},o=a(e,["parts"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>ji(n,s))),l(t,["parts"],r)}const i=a(e,["role"]);return i!=null&&l(t,["role"],i),t}function er(){return{}}function tr(n,e){const t={},o=a(e,["mode"]);o!=null&&l(t,["mode"],o);const i=a(e,["dynamicThreshold"]);return i!=null&&l(t,["dynamicThreshold"],i),t}function nr(n,e){const t={},o=a(e,["dynamicRetrievalConfig"]);return o!=null&&l(t,["dynamicRetrievalConfig"],tr(n,o)),t}function or(n,e){const t={};if(a(e,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");a(e,["googleSearch"])!=null&&l(t,["googleSearch"],er());const i=a(e,["googleSearchRetrieval"]);i!=null&&l(t,["googleSearchRetrieval"],nr(n,i));const r=a(e,["codeExecution"]);r!=null&&l(t,["codeExecution"],r);const s=a(e,["functionDeclarations"]);return s!=null&&l(t,["functionDeclarations"],s),t}function ir(n,e){const t={},o=a(e,["mode"]);o!=null&&l(t,["mode"],o);const i=a(e,["allowedFunctionNames"]);return i!=null&&l(t,["allowedFunctionNames"],i),t}function rr(n,e){const t={},o=a(e,["functionCallingConfig"]);return o!=null&&l(t,["functionCallingConfig"],ir(n,o)),t}function ar(n,e,t){const o={},i=a(e,["ttl"]);t!==void 0&&i!=null&&l(t,["ttl"],i);const r=a(e,["expireTime"]);t!==void 0&&r!=null&&l(t,["expireTime"],r);const s=a(e,["displayName"]);t!==void 0&&s!=null&&l(t,["displayName"],s);const d=a(e,["contents"]);if(t!==void 0&&d!=null){let f=Ee(n,d);Array.isArray(f)&&(f=f.map(h=>Bn(n,h))),l(t,["contents"],f)}const u=a(e,["systemInstruction"]);t!==void 0&&u!=null&&l(t,["systemInstruction"],Bn(n,ue(n,u)));const c=a(e,["tools"]);if(t!==void 0&&c!=null){let f=c;Array.isArray(f)&&(f=f.map(h=>or(n,h))),l(t,["tools"],f)}const p=a(e,["toolConfig"]);return t!==void 0&&p!=null&&l(t,["toolConfig"],rr(n,p)),o}function sr(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["model"],ui(n,o));const i=a(e,["config"]);return i!=null&&l(t,["config"],ar(n,i,t)),t}function lr(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["_url","name"],xe(n,o));const i=a(e,["config"]);return i!=null&&l(t,["config"],i),t}function cr(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["_url","name"],xe(n,o));const i=a(e,["config"]);return i!=null&&l(t,["config"],i),t}function dr(n,e,t){const o={},i=a(e,["ttl"]);t!==void 0&&i!=null&&l(t,["ttl"],i);const r=a(e,["expireTime"]);return t!==void 0&&r!=null&&l(t,["expireTime"],r),o}function ur(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["_url","name"],xe(n,o));const i=a(e,["config"]);return i!=null&&l(t,["config"],dr(n,i,t)),t}function pr(n,e,t){const o={},i=a(e,["pageSize"]);t!==void 0&&i!=null&&l(t,["_query","pageSize"],i);const r=a(e,["pageToken"]);return t!==void 0&&r!=null&&l(t,["_query","pageToken"],r),o}function fr(n,e){const t={},o=a(e,["config"]);return o!=null&&l(t,["config"],pr(n,o,t)),t}function mr(n,e){const t={},o=a(e,["videoMetadata"]);o!=null&&l(t,["videoMetadata"],o);const i=a(e,["thought"]);i!=null&&l(t,["thought"],i);const r=a(e,["codeExecutionResult"]);r!=null&&l(t,["codeExecutionResult"],r);const s=a(e,["executableCode"]);s!=null&&l(t,["executableCode"],s);const d=a(e,["fileData"]);d!=null&&l(t,["fileData"],d);const u=a(e,["functionCall"]);u!=null&&l(t,["functionCall"],u);const c=a(e,["functionResponse"]);c!=null&&l(t,["functionResponse"],c);const p=a(e,["inlineData"]);p!=null&&l(t,["inlineData"],p);const f=a(e,["text"]);return f!=null&&l(t,["text"],f),t}function Hn(n,e){const t={},o=a(e,["parts"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>mr(n,s))),l(t,["parts"],r)}const i=a(e,["role"]);return i!=null&&l(t,["role"],i),t}function hr(){return{}}function gr(n,e){const t={},o=a(e,["mode"]);o!=null&&l(t,["mode"],o);const i=a(e,["dynamicThreshold"]);return i!=null&&l(t,["dynamicThreshold"],i),t}function vr(n,e){const t={},o=a(e,["dynamicRetrievalConfig"]);return o!=null&&l(t,["dynamicRetrievalConfig"],gr(n,o)),t}function yr(n,e){const t={},o=a(e,["retrieval"]);o!=null&&l(t,["retrieval"],o),a(e,["googleSearch"])!=null&&l(t,["googleSearch"],hr());const r=a(e,["googleSearchRetrieval"]);r!=null&&l(t,["googleSearchRetrieval"],vr(n,r));const s=a(e,["codeExecution"]);s!=null&&l(t,["codeExecution"],s);const d=a(e,["functionDeclarations"]);return d!=null&&l(t,["functionDeclarations"],d),t}function br(n,e){const t={},o=a(e,["mode"]);o!=null&&l(t,["mode"],o);const i=a(e,["allowedFunctionNames"]);return i!=null&&l(t,["allowedFunctionNames"],i),t}function $r(n,e){const t={},o=a(e,["functionCallingConfig"]);return o!=null&&l(t,["functionCallingConfig"],br(n,o)),t}function _r(n,e,t){const o={},i=a(e,["ttl"]);t!==void 0&&i!=null&&l(t,["ttl"],i);const r=a(e,["expireTime"]);t!==void 0&&r!=null&&l(t,["expireTime"],r);const s=a(e,["displayName"]);t!==void 0&&s!=null&&l(t,["displayName"],s);const d=a(e,["contents"]);if(t!==void 0&&d!=null){let f=Ee(n,d);Array.isArray(f)&&(f=f.map(h=>Hn(n,h))),l(t,["contents"],f)}const u=a(e,["systemInstruction"]);t!==void 0&&u!=null&&l(t,["systemInstruction"],Hn(n,ue(n,u)));const c=a(e,["tools"]);if(t!==void 0&&c!=null){let f=c;Array.isArray(f)&&(f=f.map(h=>yr(n,h))),l(t,["tools"],f)}const p=a(e,["toolConfig"]);return t!==void 0&&p!=null&&l(t,["toolConfig"],$r(n,p)),o}function Cr(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["model"],ui(n,o));const i=a(e,["config"]);return i!=null&&l(t,["config"],_r(n,i,t)),t}function wr(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["_url","name"],xe(n,o));const i=a(e,["config"]);return i!=null&&l(t,["config"],i),t}function Tr(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["_url","name"],xe(n,o));const i=a(e,["config"]);return i!=null&&l(t,["config"],i),t}function Ir(n,e,t){const o={},i=a(e,["ttl"]);t!==void 0&&i!=null&&l(t,["ttl"],i);const r=a(e,["expireTime"]);return t!==void 0&&r!=null&&l(t,["expireTime"],r),o}function Er(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["_url","name"],xe(n,o));const i=a(e,["config"]);return i!=null&&l(t,["config"],Ir(n,i,t)),t}function xr(n,e,t){const o={},i=a(e,["pageSize"]);t!==void 0&&i!=null&&l(t,["_query","pageSize"],i);const r=a(e,["pageToken"]);return t!==void 0&&r!=null&&l(t,["_query","pageToken"],r),o}function kr(n,e){const t={},o=a(e,["config"]);return o!=null&&l(t,["config"],xr(n,o,t)),t}function xt(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["name"],o);const i=a(e,["displayName"]);i!=null&&l(t,["displayName"],i);const r=a(e,["model"]);r!=null&&l(t,["model"],r);const s=a(e,["createTime"]);s!=null&&l(t,["createTime"],s);const d=a(e,["updateTime"]);d!=null&&l(t,["updateTime"],d);const u=a(e,["expireTime"]);u!=null&&l(t,["expireTime"],u);const c=a(e,["usageMetadata"]);return c!=null&&l(t,["usageMetadata"],c),t}function Ar(){return{}}function Sr(n,e){const t={},o=a(e,["nextPageToken"]);o!=null&&l(t,["nextPageToken"],o);const i=a(e,["cachedContents"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(s=>xt(n,s))),l(t,["cachedContents"],r)}return t}function kt(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["name"],o);const i=a(e,["displayName"]);i!=null&&l(t,["displayName"],i);const r=a(e,["model"]);r!=null&&l(t,["model"],r);const s=a(e,["createTime"]);s!=null&&l(t,["createTime"],s);const d=a(e,["updateTime"]);d!=null&&l(t,["updateTime"],d);const u=a(e,["expireTime"]);u!=null&&l(t,["expireTime"],u);const c=a(e,["usageMetadata"]);return c!=null&&l(t,["usageMetadata"],c),t}function Pr(){return{}}function Rr(n,e){const t={},o=a(e,["nextPageToken"]);o!=null&&l(t,["nextPageToken"],o);const i=a(e,["cachedContents"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(s=>kt(n,s))),l(t,["cachedContents"],r)}return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var lt;(function(n){n.PAGED_ITEM_BATCH_JOBS="batchJobs",n.PAGED_ITEM_MODELS="models",n.PAGED_ITEM_TUNING_JOBS="tuningJobs",n.PAGED_ITEM_FILES="files",n.PAGED_ITEM_CACHED_CONTENTS="cachedContents"})(lt||(lt={}));class wn{constructor(e,t,o,i){this.pageInternal=[],this.paramsInternal={},this.requestInternal=t,this.init(e,o,i)}init(e,t,o){var i,r;this.nameInternal=e,this.pageInternal=t[this.nameInternal]||[],this.idxInternal=0;let s={config:{}};o?typeof o=="object"?s=Object.assign({},o):s=o:s={config:{}},s.config&&(s.config.pageToken=t.nextPageToken),this.paramsInternal=s,this.pageInternalSize=(r=(i=s.config)===null||i===void 0?void 0:i.pageSize)!==null&&r!==void 0?r:this.pageInternal.length}initNextPage(e){this.init(this.nameInternal,e,this.paramsInternal)}get page(){return this.pageInternal}get name(){return this.nameInternal}get pageSize(){return this.pageInternalSize}get params(){return this.paramsInternal}get pageLength(){return this.pageInternal.length}getItem(e){return this.pageInternal[e]}[Symbol.asyncIterator](){return{next:async()=>{if(this.idxInternal>=this.pageLength)if(this.hasNextPage())await this.nextPage();else return{value:void 0,done:!0};const e=this.getItem(this.idxInternal);return this.idxInternal+=1,{value:e,done:!1}},return:async()=>({value:void 0,done:!0})}}async nextPage(){if(!this.hasNextPage())throw new Error("No more pages to fetch.");const e=await this.requestInternal(this.params);return this.initNextPage(e),this.page}hasNextPage(){var e;return((e=this.params.config)===null||e===void 0?void 0:e.pageToken)!==void 0}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var qn;(function(n){n.OUTCOME_UNSPECIFIED="OUTCOME_UNSPECIFIED",n.OUTCOME_OK="OUTCOME_OK",n.OUTCOME_FAILED="OUTCOME_FAILED",n.OUTCOME_DEADLINE_EXCEEDED="OUTCOME_DEADLINE_EXCEEDED"})(qn||(qn={}));var zn;(function(n){n.LANGUAGE_UNSPECIFIED="LANGUAGE_UNSPECIFIED",n.PYTHON="PYTHON"})(zn||(zn={}));var On;(function(n){n.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",n.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",n.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",n.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",n.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",n.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(On||(On={}));var Kn;(function(n){n.HARM_BLOCK_METHOD_UNSPECIFIED="HARM_BLOCK_METHOD_UNSPECIFIED",n.SEVERITY="SEVERITY",n.PROBABILITY="PROBABILITY"})(Kn||(Kn={}));var Jn;(function(n){n.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",n.BLOCK_NONE="BLOCK_NONE",n.OFF="OFF"})(Jn||(Jn={}));var Wn;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.MODE_DYNAMIC="MODE_DYNAMIC"})(Wn||(Wn={}));var U;(function(n){n.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",n.STRING="STRING",n.NUMBER="NUMBER",n.INTEGER="INTEGER",n.BOOLEAN="BOOLEAN",n.ARRAY="ARRAY",n.OBJECT="OBJECT"})(U||(U={}));var Yn;(function(n){n.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",n.STOP="STOP",n.MAX_TOKENS="MAX_TOKENS",n.SAFETY="SAFETY",n.RECITATION="RECITATION",n.LANGUAGE="LANGUAGE",n.OTHER="OTHER",n.BLOCKLIST="BLOCKLIST",n.PROHIBITED_CONTENT="PROHIBITED_CONTENT",n.SPII="SPII",n.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",n.IMAGE_SAFETY="IMAGE_SAFETY"})(Yn||(Yn={}));var Qn;(function(n){n.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",n.NEGLIGIBLE="NEGLIGIBLE",n.LOW="LOW",n.MEDIUM="MEDIUM",n.HIGH="HIGH"})(Qn||(Qn={}));var Xn;(function(n){n.HARM_SEVERITY_UNSPECIFIED="HARM_SEVERITY_UNSPECIFIED",n.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",n.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",n.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",n.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH"})(Xn||(Xn={}));var Zn;(function(n){n.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",n.SAFETY="SAFETY",n.OTHER="OTHER",n.BLOCKLIST="BLOCKLIST",n.PROHIBITED_CONTENT="PROHIBITED_CONTENT"})(Zn||(Zn={}));var jn;(function(n){n.TRAFFIC_TYPE_UNSPECIFIED="TRAFFIC_TYPE_UNSPECIFIED",n.ON_DEMAND="ON_DEMAND",n.PROVISIONED_THROUGHPUT="PROVISIONED_THROUGHPUT"})(jn||(jn={}));var Dt;(function(n){n.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",n.TEXT="TEXT",n.IMAGE="IMAGE",n.AUDIO="AUDIO"})(Dt||(Dt={}));var eo;(function(n){n.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",n.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",n.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",n.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH"})(eo||(eo={}));var an;(function(n){n.JOB_STATE_UNSPECIFIED="JOB_STATE_UNSPECIFIED",n.JOB_STATE_QUEUED="JOB_STATE_QUEUED",n.JOB_STATE_PENDING="JOB_STATE_PENDING",n.JOB_STATE_RUNNING="JOB_STATE_RUNNING",n.JOB_STATE_SUCCEEDED="JOB_STATE_SUCCEEDED",n.JOB_STATE_FAILED="JOB_STATE_FAILED",n.JOB_STATE_CANCELLING="JOB_STATE_CANCELLING",n.JOB_STATE_CANCELLED="JOB_STATE_CANCELLED",n.JOB_STATE_PAUSED="JOB_STATE_PAUSED",n.JOB_STATE_EXPIRED="JOB_STATE_EXPIRED",n.JOB_STATE_UPDATING="JOB_STATE_UPDATING",n.JOB_STATE_PARTIALLY_SUCCEEDED="JOB_STATE_PARTIALLY_SUCCEEDED"})(an||(an={}));var to;(function(n){n.ADAPTER_SIZE_UNSPECIFIED="ADAPTER_SIZE_UNSPECIFIED",n.ADAPTER_SIZE_ONE="ADAPTER_SIZE_ONE",n.ADAPTER_SIZE_TWO="ADAPTER_SIZE_TWO",n.ADAPTER_SIZE_FOUR="ADAPTER_SIZE_FOUR",n.ADAPTER_SIZE_EIGHT="ADAPTER_SIZE_EIGHT",n.ADAPTER_SIZE_SIXTEEN="ADAPTER_SIZE_SIXTEEN",n.ADAPTER_SIZE_THIRTY_TWO="ADAPTER_SIZE_THIRTY_TWO"})(to||(to={}));var no;(function(n){n.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED="FEATURE_SELECTION_PREFERENCE_UNSPECIFIED",n.PRIORITIZE_QUALITY="PRIORITIZE_QUALITY",n.BALANCED="BALANCED",n.PRIORITIZE_COST="PRIORITIZE_COST"})(no||(no={}));var oo;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.MODE_DYNAMIC="MODE_DYNAMIC"})(oo||(oo={}));var io;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.AUTO="AUTO",n.ANY="ANY",n.NONE="NONE"})(io||(io={}));var ro;(function(n){n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",n.BLOCK_NONE="BLOCK_NONE"})(ro||(ro={}));var ao;(function(n){n.DONT_ALLOW="DONT_ALLOW",n.ALLOW_ADULT="ALLOW_ADULT",n.ALLOW_ALL="ALLOW_ALL"})(ao||(ao={}));var so;(function(n){n.auto="auto",n.en="en",n.ja="ja",n.ko="ko",n.hi="hi"})(so||(so={}));var lo;(function(n){n.STATE_UNSPECIFIED="STATE_UNSPECIFIED",n.PROCESSING="PROCESSING",n.ACTIVE="ACTIVE",n.FAILED="FAILED"})(lo||(lo={}));var co;(function(n){n.SOURCE_UNSPECIFIED="SOURCE_UNSPECIFIED",n.UPLOADED="UPLOADED",n.GENERATED="GENERATED"})(co||(co={}));var uo;(function(n){n.MASK_MODE_DEFAULT="MASK_MODE_DEFAULT",n.MASK_MODE_USER_PROVIDED="MASK_MODE_USER_PROVIDED",n.MASK_MODE_BACKGROUND="MASK_MODE_BACKGROUND",n.MASK_MODE_FOREGROUND="MASK_MODE_FOREGROUND",n.MASK_MODE_SEMANTIC="MASK_MODE_SEMANTIC"})(uo||(uo={}));var po;(function(n){n.CONTROL_TYPE_DEFAULT="CONTROL_TYPE_DEFAULT",n.CONTROL_TYPE_CANNY="CONTROL_TYPE_CANNY",n.CONTROL_TYPE_SCRIBBLE="CONTROL_TYPE_SCRIBBLE",n.CONTROL_TYPE_FACE_MESH="CONTROL_TYPE_FACE_MESH"})(po||(po={}));var fo;(function(n){n.SUBJECT_TYPE_DEFAULT="SUBJECT_TYPE_DEFAULT",n.SUBJECT_TYPE_PERSON="SUBJECT_TYPE_PERSON",n.SUBJECT_TYPE_ANIMAL="SUBJECT_TYPE_ANIMAL",n.SUBJECT_TYPE_PRODUCT="SUBJECT_TYPE_PRODUCT"})(fo||(fo={}));var mo;(function(n){n.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",n.TEXT="TEXT",n.IMAGE="IMAGE",n.VIDEO="VIDEO",n.AUDIO="AUDIO",n.DOCUMENT="DOCUMENT"})(mo||(mo={}));var ho;(function(n){n.START_SENSITIVITY_UNSPECIFIED="START_SENSITIVITY_UNSPECIFIED",n.START_SENSITIVITY_HIGH="START_SENSITIVITY_HIGH",n.START_SENSITIVITY_LOW="START_SENSITIVITY_LOW"})(ho||(ho={}));var go;(function(n){n.END_SENSITIVITY_UNSPECIFIED="END_SENSITIVITY_UNSPECIFIED",n.END_SENSITIVITY_HIGH="END_SENSITIVITY_HIGH",n.END_SENSITIVITY_LOW="END_SENSITIVITY_LOW"})(go||(go={}));var vo;(function(n){n.ACTIVITY_HANDLING_UNSPECIFIED="ACTIVITY_HANDLING_UNSPECIFIED",n.START_OF_ACTIVITY_INTERRUPTS="START_OF_ACTIVITY_INTERRUPTS",n.NO_INTERRUPTION="NO_INTERRUPTION"})(vo||(vo={}));var yo;(function(n){n.TURN_COVERAGE_UNSPECIFIED="TURN_COVERAGE_UNSPECIFIED",n.TURN_INCLUDES_ONLY_ACTIVITY="TURN_INCLUDES_ONLY_ACTIVITY",n.TURN_INCLUDES_ALL_INPUT="TURN_INCLUDES_ALL_INPUT"})(yo||(yo={}));class yt{get text(){var e,t,o,i,r,s,d,u;if(((i=(o=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||o===void 0?void 0:o.parts)===null||i===void 0?void 0:i.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning text from the first one.");let c="",p=!1;const f=[];for(const h of(u=(d=(s=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content)===null||d===void 0?void 0:d.parts)!==null&&u!==void 0?u:[]){for(const[m,g]of Object.entries(h))m!=="text"&&m!=="thought"&&(g!==null||g!==void 0)&&f.push(m);if(typeof h.text=="string"){if(typeof h.thought=="boolean"&&h.thought)continue;p=!0,c+=h.text}}return f.length>0&&console.warn(`there are non-text parts ${f} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),p?c:void 0}get data(){var e,t,o,i,r,s,d,u;if(((i=(o=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||o===void 0?void 0:o.parts)===null||i===void 0?void 0:i.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning data from the first one.");let c="";const p=[];for(const f of(u=(d=(s=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content)===null||d===void 0?void 0:d.parts)!==null&&u!==void 0?u:[]){for(const[h,m]of Object.entries(f))h!=="inlineData"&&(m!==null||m!==void 0)&&p.push(h);f.inlineData&&typeof f.inlineData.data=="string"&&(c+=atob(f.inlineData.data))}return p.length>0&&console.warn(`there are non-data parts ${p} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),c.length>0?btoa(c):void 0}get functionCalls(){var e,t,o,i,r,s,d,u;if(((i=(o=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||o===void 0?void 0:o.parts)===null||i===void 0?void 0:i.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning function calls from the first one.");const c=(u=(d=(s=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content)===null||d===void 0?void 0:d.parts)===null||u===void 0?void 0:u.filter(p=>p.functionCall).map(p=>p.functionCall).filter(p=>p!==void 0);if((c==null?void 0:c.length)!==0)return c}get executableCode(){var e,t,o,i,r,s,d,u,c;if(((i=(o=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||o===void 0?void 0:o.parts)===null||i===void 0?void 0:i.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning executable code from the first one.");const p=(u=(d=(s=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content)===null||d===void 0?void 0:d.parts)===null||u===void 0?void 0:u.filter(f=>f.executableCode).map(f=>f.executableCode).filter(f=>f!==void 0);if((p==null?void 0:p.length)!==0)return(c=p==null?void 0:p[0])===null||c===void 0?void 0:c.code}get codeExecutionResult(){var e,t,o,i,r,s,d,u,c;if(((i=(o=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||o===void 0?void 0:o.parts)===null||i===void 0?void 0:i.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning code execution result from the first one.");const p=(u=(d=(s=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content)===null||d===void 0?void 0:d.parts)===null||u===void 0?void 0:u.filter(f=>f.codeExecutionResult).map(f=>f.codeExecutionResult).filter(f=>f!==void 0);if((p==null?void 0:p.length)!==0)return(c=p==null?void 0:p[0])===null||c===void 0?void 0:c.output}}class bo{}class $o{}class _o{}class Co{}class Mr{}class wo{}class To{}class Io{}class Dr{}class sn{constructor(e){const t={};for(const o of e.headers.entries())t[o[0]]=o[1];this.headers=t,this.responseInternal=e}json(){return this.responseInternal.json()}}class Lr{}class Nr{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ur extends ut{constructor(e){super(),this.apiClient=e,this.list=async(t={})=>new wn(lt.PAGED_ITEM_CACHED_CONTENTS,o=>this.listInternal(o),await this.listInternal(t),t)}async create(e){var t,o,i,r;let s,d="",u={};if(this.apiClient.isVertexAI()){const c=Cr(this.apiClient,e);return d=N("cachedContents",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),s.then(p=>kt(this.apiClient,p))}else{const c=sr(this.apiClient,e);return d=N("cachedContents",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(p=>p.json()),s.then(p=>xt(this.apiClient,p))}}async get(e){var t,o,i,r;let s,d="",u={};if(this.apiClient.isVertexAI()){const c=wr(this.apiClient,e);return d=N("{name}",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),s.then(p=>kt(this.apiClient,p))}else{const c=lr(this.apiClient,e);return d=N("{name}",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(p=>p.json()),s.then(p=>xt(this.apiClient,p))}}async delete(e){var t,o,i,r;let s,d="",u={};if(this.apiClient.isVertexAI()){const c=Tr(this.apiClient,e);return d=N("{name}",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),s.then(()=>{const p=Pr(),f=new To;return Object.assign(f,p),f})}else{const c=cr(this.apiClient,e);return d=N("{name}",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"DELETE",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(p=>p.json()),s.then(()=>{const p=Ar(),f=new To;return Object.assign(f,p),f})}}async update(e){var t,o,i,r;let s,d="",u={};if(this.apiClient.isVertexAI()){const c=Er(this.apiClient,e);return d=N("{name}",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"PATCH",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),s.then(p=>kt(this.apiClient,p))}else{const c=ur(this.apiClient,e);return d=N("{name}",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"PATCH",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(p=>p.json()),s.then(p=>xt(this.apiClient,p))}}async listInternal(e){var t,o,i,r;let s,d="",u={};if(this.apiClient.isVertexAI()){const c=kr(this.apiClient,e);return d=N("cachedContents",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),s.then(p=>{const f=Rr(this.apiClient,p),h=new Io;return Object.assign(h,f),h})}else{const c=fr(this.apiClient,e);return d=N("cachedContents",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(p=>p.json()),s.then(p=>{const f=Sr(this.apiClient,p),h=new Io;return Object.assign(h,f),h})}}}function Eo(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],o=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&o>=n.length&&(n=void 0),{value:n&&n[o++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function ae(n){return this instanceof ae?(this.v=n,this):new ae(n)}function Lt(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(n,e||[]),i,r=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),d("next"),d("throw"),d("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(m){return function(g){return Promise.resolve(g).then(m,f)}}function d(m,g){o[m]&&(i[m]=function(v){return new Promise(function(b,$){r.push([m,v,b,$])>1||u(m,v)})},g&&(i[m]=g(i[m])))}function u(m,g){try{c(o[m](g))}catch(v){h(r[0][3],v)}}function c(m){m.value instanceof ae?Promise.resolve(m.value.v).then(p,f):h(r[0][2],m)}function p(m){u("next",m)}function f(m){u("throw",m)}function h(m,g){m(g),r.shift(),r.length&&u(r[0][0],r[0][1])}}function ln(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Eo=="function"?Eo(n):n[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(r){t[r]=n[r]&&function(s){return new Promise(function(d,u){s=n[r](s),i(d,u,s.done,s.value)})}}function i(r,s,d,u){Promise.resolve(u).then(function(c){r({value:c,done:d})},s)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Fr(n){var e;if(n.candidates==null||n.candidates.length===0)return!1;const t=(e=n.candidates[0])===null||e===void 0?void 0:e.content;return t===void 0?!1:bi(t)}function bi(n){if(n.parts===void 0||n.parts.length===0)return!1;for(const e of n.parts)if(e===void 0||Object.keys(e).length===0||e.text!==void 0&&e.text==="")return!1;return!0}function Gr(n){if(n.length!==0){if(n[0].role!=="user")throw new Error("History must start with a user turn.");for(const e of n)if(e.role!=="user"&&e.role!=="model")throw new Error(`Role must be user or model, but got ${e.role}.`)}}function Vr(n){if(n===void 0||n.length===0)return[];const e=[],t=n.length;let o=0,i=n[0];for(;o<t;)if(n[o].role==="user")i=n[o],o++;else{const r=[];let s=!0;for(;o<t&&n[o].role==="model";)r.push(n[o]),s&&!bi(n[o])&&(s=!1),o++;s&&(e.push(i),e.push(...r))}return e}class Br{constructor(e,t){this.modelsModule=e,this.apiClient=t}create(e){return new Hr(this.apiClient,this.modelsModule,e.model,e.config,e.history)}}class Hr{constructor(e,t,o,i={},r=[]){this.apiClient=e,this.modelsModule=t,this.model=o,this.config=i,this.history=r,this.sendPromise=Promise.resolve(),Gr(r)}async sendMessage(e){var t;await this.sendPromise;const o=ue(this.apiClient,e.message),i=this.modelsModule.generateContent({model:this.model,contents:this.getHistory(!0).concat(o),config:(t=e.config)!==null&&t!==void 0?t:this.config});return this.sendPromise=(async()=>{var r,s;const u=(s=(r=(await i).candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content,c=u?[u]:[];this.recordHistory(o,c)})(),await this.sendPromise,i}async sendMessageStream(e){var t;await this.sendPromise;const o=ue(this.apiClient,e.message),i=this.modelsModule.generateContentStream({model:this.model,contents:this.getHistory(!0).concat(o),config:(t=e.config)!==null&&t!==void 0?t:this.config});this.sendPromise=i.then(()=>{}).catch(()=>{});const r=await i;return this.processStreamResponse(r,o)}getHistory(e=!1){return e?Vr(this.history):this.history}processStreamResponse(e,t){var o,i;return Lt(this,arguments,function*(){var s,d,u,c;const p=[];try{for(var f=!0,h=ln(e),m;m=yield ae(h.next()),s=m.done,!s;f=!0){c=m.value,f=!1;const g=c;if(Fr(g)){const v=(i=(o=g.candidates)===null||o===void 0?void 0:o[0])===null||i===void 0?void 0:i.content;v!==void 0&&p.push(v)}yield yield ae(g)}}catch(g){d={error:g}}finally{try{!f&&!s&&(u=h.return)&&(yield ae(u.call(h)))}finally{if(d)throw d.error}}this.recordHistory(t,p)})}recordHistory(e,t){let o=[];t.length>0&&t.every(i=>i.role==="model")?o=t:o.push({role:"model",parts:[]}),this.history.push(e),this.history.push(...o)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function qr(n,e,t){const o={},i=a(e,["pageSize"]);t!==void 0&&i!=null&&l(t,["_query","pageSize"],i);const r=a(e,["pageToken"]);return t!==void 0&&r!=null&&l(t,["_query","pageToken"],r),o}function zr(n,e){const t={},o=a(e,["config"]);return o!=null&&l(t,["config"],qr(n,o,t)),t}function Or(n,e){const t={},o=a(e,["details"]);o!=null&&l(t,["details"],o);const i=a(e,["message"]);i!=null&&l(t,["message"],i);const r=a(e,["code"]);return r!=null&&l(t,["code"],r),t}function Kr(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["name"],o);const i=a(e,["displayName"]);i!=null&&l(t,["displayName"],i);const r=a(e,["mimeType"]);r!=null&&l(t,["mimeType"],r);const s=a(e,["sizeBytes"]);s!=null&&l(t,["sizeBytes"],s);const d=a(e,["createTime"]);d!=null&&l(t,["createTime"],d);const u=a(e,["expirationTime"]);u!=null&&l(t,["expirationTime"],u);const c=a(e,["updateTime"]);c!=null&&l(t,["updateTime"],c);const p=a(e,["sha256Hash"]);p!=null&&l(t,["sha256Hash"],p);const f=a(e,["uri"]);f!=null&&l(t,["uri"],f);const h=a(e,["downloadUri"]);h!=null&&l(t,["downloadUri"],h);const m=a(e,["state"]);m!=null&&l(t,["state"],m);const g=a(e,["source"]);g!=null&&l(t,["source"],g);const v=a(e,["videoMetadata"]);v!=null&&l(t,["videoMetadata"],v);const b=a(e,["error"]);return b!=null&&l(t,["error"],Or(n,b)),t}function Jr(n,e){const t={},o=a(e,["file"]);o!=null&&l(t,["file"],Kr(n,o));const i=a(e,["config"]);return i!=null&&l(t,["config"],i),t}function Wr(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["_url","file"],yi(n,o));const i=a(e,["config"]);return i!=null&&l(t,["config"],i),t}function Yr(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["_url","file"],yi(n,o));const i=a(e,["config"]);return i!=null&&l(t,["config"],i),t}function Qr(n,e){const t={},o=a(e,["details"]);o!=null&&l(t,["details"],o);const i=a(e,["message"]);i!=null&&l(t,["message"],i);const r=a(e,["code"]);return r!=null&&l(t,["code"],r),t}function cn(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["name"],o);const i=a(e,["displayName"]);i!=null&&l(t,["displayName"],i);const r=a(e,["mimeType"]);r!=null&&l(t,["mimeType"],r);const s=a(e,["sizeBytes"]);s!=null&&l(t,["sizeBytes"],s);const d=a(e,["createTime"]);d!=null&&l(t,["createTime"],d);const u=a(e,["expirationTime"]);u!=null&&l(t,["expirationTime"],u);const c=a(e,["updateTime"]);c!=null&&l(t,["updateTime"],c);const p=a(e,["sha256Hash"]);p!=null&&l(t,["sha256Hash"],p);const f=a(e,["uri"]);f!=null&&l(t,["uri"],f);const h=a(e,["downloadUri"]);h!=null&&l(t,["downloadUri"],h);const m=a(e,["state"]);m!=null&&l(t,["state"],m);const g=a(e,["source"]);g!=null&&l(t,["source"],g);const v=a(e,["videoMetadata"]);v!=null&&l(t,["videoMetadata"],v);const b=a(e,["error"]);return b!=null&&l(t,["error"],Qr(n,b)),t}function Xr(n,e){const t={},o=a(e,["nextPageToken"]);o!=null&&l(t,["nextPageToken"],o);const i=a(e,["files"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(s=>cn(n,s))),l(t,["files"],r)}return t}function Zr(){return{}}function jr(){return{}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ea extends ut{constructor(e){super(),this.apiClient=e,this.list=async(t={})=>new wn(lt.PAGED_ITEM_FILES,o=>this.listInternal(o),await this.listInternal(t),t)}async upload(e){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files. You can share files through a GCS bucket.");return this.apiClient.uploadFile(e.file,e.config).then(t=>cn(this.apiClient,t))}async listInternal(e){var t,o;let i,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const d=zr(this.apiClient,e);return r=N("files",d._url),s=d._query,delete d.config,delete d._url,delete d._query,i=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(d),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),i.then(u=>{const c=Xr(this.apiClient,u),p=new Dr;return Object.assign(p,c),p})}}async createInternal(e){var t,o;let i,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const d=Jr(this.apiClient,e);return r=N("upload/v1beta/files",d._url),s=d._query,delete d.config,delete d._url,delete d._query,i=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(d),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),i.then(()=>{const u=Zr(),c=new Lr;return Object.assign(c,u),c})}}async get(e){var t,o;let i,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const d=Wr(this.apiClient,e);return r=N("files/{file}",d._url),s=d._query,delete d.config,delete d._url,delete d._query,i=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(d),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),i.then(u=>cn(this.apiClient,u))}}async delete(e){var t,o;let i,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const d=Yr(this.apiClient,e);return r=N("files/{file}",d._url),s=d._query,delete d.config,delete d._url,delete d._query,i=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(d),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),i.then(()=>{const u=jr(),c=new Nr;return Object.assign(c,u),c})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ta(n,e){const t={};if(a(e,["videoMetadata"])!==void 0)throw new Error("videoMetadata parameter is not supported in Gemini API.");const o=a(e,["thought"]);o!=null&&l(t,["thought"],o);const i=a(e,["codeExecutionResult"]);i!=null&&l(t,["codeExecutionResult"],i);const r=a(e,["executableCode"]);r!=null&&l(t,["executableCode"],r);const s=a(e,["fileData"]);s!=null&&l(t,["fileData"],s);const d=a(e,["functionCall"]);d!=null&&l(t,["functionCall"],d);const u=a(e,["functionResponse"]);u!=null&&l(t,["functionResponse"],u);const c=a(e,["inlineData"]);c!=null&&l(t,["inlineData"],c);const p=a(e,["text"]);return p!=null&&l(t,["text"],p),t}function na(n,e){const t={},o=a(e,["videoMetadata"]);o!=null&&l(t,["videoMetadata"],o);const i=a(e,["thought"]);i!=null&&l(t,["thought"],i);const r=a(e,["codeExecutionResult"]);r!=null&&l(t,["codeExecutionResult"],r);const s=a(e,["executableCode"]);s!=null&&l(t,["executableCode"],s);const d=a(e,["fileData"]);d!=null&&l(t,["fileData"],d);const u=a(e,["functionCall"]);u!=null&&l(t,["functionCall"],u);const c=a(e,["functionResponse"]);c!=null&&l(t,["functionResponse"],c);const p=a(e,["inlineData"]);p!=null&&l(t,["inlineData"],p);const f=a(e,["text"]);return f!=null&&l(t,["text"],f),t}function oa(n,e){const t={},o=a(e,["parts"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>ta(n,s))),l(t,["parts"],r)}const i=a(e,["role"]);return i!=null&&l(t,["role"],i),t}function ia(n,e){const t={},o=a(e,["parts"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>na(n,s))),l(t,["parts"],r)}const i=a(e,["role"]);return i!=null&&l(t,["role"],i),t}function ra(){return{}}function aa(){return{}}function sa(n,e){const t={},o=a(e,["mode"]);o!=null&&l(t,["mode"],o);const i=a(e,["dynamicThreshold"]);return i!=null&&l(t,["dynamicThreshold"],i),t}function la(n,e){const t={},o=a(e,["mode"]);o!=null&&l(t,["mode"],o);const i=a(e,["dynamicThreshold"]);return i!=null&&l(t,["dynamicThreshold"],i),t}function ca(n,e){const t={},o=a(e,["dynamicRetrievalConfig"]);return o!=null&&l(t,["dynamicRetrievalConfig"],sa(n,o)),t}function da(n,e){const t={},o=a(e,["dynamicRetrievalConfig"]);return o!=null&&l(t,["dynamicRetrievalConfig"],la(n,o)),t}function ua(n,e){const t={};if(a(e,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");a(e,["googleSearch"])!=null&&l(t,["googleSearch"],ra());const i=a(e,["googleSearchRetrieval"]);i!=null&&l(t,["googleSearchRetrieval"],ca(n,i));const r=a(e,["codeExecution"]);r!=null&&l(t,["codeExecution"],r);const s=a(e,["functionDeclarations"]);return s!=null&&l(t,["functionDeclarations"],s),t}function pa(n,e){const t={},o=a(e,["retrieval"]);o!=null&&l(t,["retrieval"],o),a(e,["googleSearch"])!=null&&l(t,["googleSearch"],aa());const r=a(e,["googleSearchRetrieval"]);r!=null&&l(t,["googleSearchRetrieval"],da(n,r));const s=a(e,["codeExecution"]);s!=null&&l(t,["codeExecution"],s);const d=a(e,["functionDeclarations"]);return d!=null&&l(t,["functionDeclarations"],d),t}function fa(n,e){const t={},o=a(e,["handle"]);if(o!=null&&l(t,["handle"],o),a(e,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return t}function ma(n,e){const t={},o=a(e,["handle"]);o!=null&&l(t,["handle"],o);const i=a(e,["transparent"]);return i!=null&&l(t,["transparent"],i),t}function ha(){return{}}function xo(){return{}}function ga(n,e){const t={},o=a(e,["disabled"]);o!=null&&l(t,["disabled"],o);const i=a(e,["startOfSpeechSensitivity"]);i!=null&&l(t,["startOfSpeechSensitivity"],i);const r=a(e,["endOfSpeechSensitivity"]);r!=null&&l(t,["endOfSpeechSensitivity"],r);const s=a(e,["prefixPaddingMs"]);s!=null&&l(t,["prefixPaddingMs"],s);const d=a(e,["silenceDurationMs"]);return d!=null&&l(t,["silenceDurationMs"],d),t}function va(n,e){const t={},o=a(e,["disabled"]);o!=null&&l(t,["disabled"],o);const i=a(e,["startOfSpeechSensitivity"]);i!=null&&l(t,["startOfSpeechSensitivity"],i);const r=a(e,["endOfSpeechSensitivity"]);r!=null&&l(t,["endOfSpeechSensitivity"],r);const s=a(e,["prefixPaddingMs"]);s!=null&&l(t,["prefixPaddingMs"],s);const d=a(e,["silenceDurationMs"]);return d!=null&&l(t,["silenceDurationMs"],d),t}function ya(n,e){const t={},o=a(e,["automaticActivityDetection"]);o!=null&&l(t,["automaticActivityDetection"],ga(n,o));const i=a(e,["activityHandling"]);i!=null&&l(t,["activityHandling"],i);const r=a(e,["turnCoverage"]);return r!=null&&l(t,["turnCoverage"],r),t}function ba(n,e){const t={},o=a(e,["automaticActivityDetection"]);o!=null&&l(t,["automaticActivityDetection"],va(n,o));const i=a(e,["activityHandling"]);i!=null&&l(t,["activityHandling"],i);const r=a(e,["turnCoverage"]);return r!=null&&l(t,["turnCoverage"],r),t}function $a(n,e){const t={},o=a(e,["targetTokens"]);return o!=null&&l(t,["targetTokens"],o),t}function _a(n,e){const t={},o=a(e,["targetTokens"]);return o!=null&&l(t,["targetTokens"],o),t}function Ca(n,e){const t={},o=a(e,["triggerTokens"]);o!=null&&l(t,["triggerTokens"],o);const i=a(e,["slidingWindow"]);return i!=null&&l(t,["slidingWindow"],$a(n,i)),t}function wa(n,e){const t={},o=a(e,["triggerTokens"]);o!=null&&l(t,["triggerTokens"],o);const i=a(e,["slidingWindow"]);return i!=null&&l(t,["slidingWindow"],_a(n,i)),t}function Ta(n,e,t){const o={},i=a(e,["generationConfig"]);t!==void 0&&i!=null&&l(t,["setup","generationConfig"],i);const r=a(e,["responseModalities"]);t!==void 0&&r!=null&&l(t,["setup","generationConfig","responseModalities"],r);const s=a(e,["temperature"]);t!==void 0&&s!=null&&l(t,["setup","generationConfig","temperature"],s);const d=a(e,["topP"]);t!==void 0&&d!=null&&l(t,["setup","generationConfig","topP"],d);const u=a(e,["topK"]);t!==void 0&&u!=null&&l(t,["setup","generationConfig","topK"],u);const c=a(e,["maxOutputTokens"]);t!==void 0&&c!=null&&l(t,["setup","generationConfig","maxOutputTokens"],c);const p=a(e,["mediaResolution"]);t!==void 0&&p!=null&&l(t,["setup","generationConfig","mediaResolution"],p);const f=a(e,["seed"]);t!==void 0&&f!=null&&l(t,["setup","generationConfig","seed"],f);const h=a(e,["speechConfig"]);t!==void 0&&h!=null&&l(t,["setup","generationConfig","speechConfig"],h);const m=a(e,["systemInstruction"]);t!==void 0&&m!=null&&l(t,["setup","systemInstruction"],oa(n,ue(n,m)));const g=a(e,["tools"]);if(t!==void 0&&g!=null){let x=Ht(n,g);Array.isArray(x)&&(x=x.map(w=>ua(n,Bt(n,w)))),l(t,["setup","tools"],x)}const v=a(e,["sessionResumption"]);if(t!==void 0&&v!=null&&l(t,["setup","sessionResumption"],fa(n,v)),a(e,["inputAudioTranscription"])!==void 0)throw new Error("inputAudioTranscription parameter is not supported in Gemini API.");const b=a(e,["outputAudioTranscription"]);t!==void 0&&b!=null&&l(t,["setup","outputAudioTranscription"],ha());const $=a(e,["realtimeInputConfig"]);t!==void 0&&$!=null&&l(t,["setup","realtimeInputConfig"],ya(n,$));const C=a(e,["contextWindowCompression"]);return t!==void 0&&C!=null&&l(t,["setup","contextWindowCompression"],Ca(n,C)),o}function Ia(n,e,t){const o={},i=a(e,["generationConfig"]);t!==void 0&&i!=null&&l(t,["setup","generationConfig"],i);const r=a(e,["responseModalities"]);t!==void 0&&r!=null&&l(t,["setup","generationConfig","responseModalities"],r);const s=a(e,["temperature"]);t!==void 0&&s!=null&&l(t,["setup","generationConfig","temperature"],s);const d=a(e,["topP"]);t!==void 0&&d!=null&&l(t,["setup","generationConfig","topP"],d);const u=a(e,["topK"]);t!==void 0&&u!=null&&l(t,["setup","generationConfig","topK"],u);const c=a(e,["maxOutputTokens"]);t!==void 0&&c!=null&&l(t,["setup","generationConfig","maxOutputTokens"],c);const p=a(e,["mediaResolution"]);t!==void 0&&p!=null&&l(t,["setup","generationConfig","mediaResolution"],p);const f=a(e,["seed"]);t!==void 0&&f!=null&&l(t,["setup","generationConfig","seed"],f);const h=a(e,["speechConfig"]);t!==void 0&&h!=null&&l(t,["setup","generationConfig","speechConfig"],h);const m=a(e,["systemInstruction"]);t!==void 0&&m!=null&&l(t,["setup","systemInstruction"],ia(n,ue(n,m)));const g=a(e,["tools"]);if(t!==void 0&&g!=null){let w=Ht(n,g);Array.isArray(w)&&(w=w.map(y=>pa(n,Bt(n,y)))),l(t,["setup","tools"],w)}const v=a(e,["sessionResumption"]);t!==void 0&&v!=null&&l(t,["setup","sessionResumption"],ma(n,v));const b=a(e,["inputAudioTranscription"]);t!==void 0&&b!=null&&l(t,["setup","inputAudioTranscription"],xo());const $=a(e,["outputAudioTranscription"]);t!==void 0&&$!=null&&l(t,["setup","outputAudioTranscription"],xo());const C=a(e,["realtimeInputConfig"]);t!==void 0&&C!=null&&l(t,["setup","realtimeInputConfig"],ba(n,C));const x=a(e,["contextWindowCompression"]);return t!==void 0&&x!=null&&l(t,["setup","contextWindowCompression"],wa(n,x)),o}function Ea(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["setup","model"],W(n,o));const i=a(e,["config"]);return i!=null&&l(t,["config"],Ta(n,i,t)),t}function xa(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["setup","model"],W(n,o));const i=a(e,["config"]);return i!=null&&l(t,["config"],Ia(n,i,t)),t}function ka(){return{}}function Aa(){return{}}function Sa(){return{}}function Pa(){return{}}function Ra(n,e){const t={},o=a(e,["media"]);o!=null&&l(t,["mediaChunks"],pi(n,o));const i=a(e,["audio"]);i!=null&&l(t,["audio"],Xi(n,i));const r=a(e,["audioStreamEnd"]);r!=null&&l(t,["audioStreamEnd"],r);const s=a(e,["video"]);s!=null&&l(t,["video"],Qi(n,s));const d=a(e,["text"]);return d!=null&&l(t,["text"],d),a(e,["activityStart"])!=null&&l(t,["activityStart"],ka()),a(e,["activityEnd"])!=null&&l(t,["activityEnd"],Sa()),t}function Ma(n,e){const t={},o=a(e,["media"]);if(o!=null&&l(t,["mediaChunks"],pi(n,o)),a(e,["audio"])!==void 0)throw new Error("audio parameter is not supported in Vertex AI.");const i=a(e,["audioStreamEnd"]);if(i!=null&&l(t,["audioStreamEnd"],i),a(e,["video"])!==void 0)throw new Error("video parameter is not supported in Vertex AI.");if(a(e,["text"])!==void 0)throw new Error("text parameter is not supported in Vertex AI.");return a(e,["activityStart"])!=null&&l(t,["activityStart"],Aa()),a(e,["activityEnd"])!=null&&l(t,["activityEnd"],Pa()),t}function Da(){return{}}function La(){return{}}function Na(n,e){const t={},o=a(e,["thought"]);o!=null&&l(t,["thought"],o);const i=a(e,["codeExecutionResult"]);i!=null&&l(t,["codeExecutionResult"],i);const r=a(e,["executableCode"]);r!=null&&l(t,["executableCode"],r);const s=a(e,["fileData"]);s!=null&&l(t,["fileData"],s);const d=a(e,["functionCall"]);d!=null&&l(t,["functionCall"],d);const u=a(e,["functionResponse"]);u!=null&&l(t,["functionResponse"],u);const c=a(e,["inlineData"]);c!=null&&l(t,["inlineData"],c);const p=a(e,["text"]);return p!=null&&l(t,["text"],p),t}function Ua(n,e){const t={},o=a(e,["videoMetadata"]);o!=null&&l(t,["videoMetadata"],o);const i=a(e,["thought"]);i!=null&&l(t,["thought"],i);const r=a(e,["codeExecutionResult"]);r!=null&&l(t,["codeExecutionResult"],r);const s=a(e,["executableCode"]);s!=null&&l(t,["executableCode"],s);const d=a(e,["fileData"]);d!=null&&l(t,["fileData"],d);const u=a(e,["functionCall"]);u!=null&&l(t,["functionCall"],u);const c=a(e,["functionResponse"]);c!=null&&l(t,["functionResponse"],c);const p=a(e,["inlineData"]);p!=null&&l(t,["inlineData"],p);const f=a(e,["text"]);return f!=null&&l(t,["text"],f),t}function Fa(n,e){const t={},o=a(e,["parts"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>Na(n,s))),l(t,["parts"],r)}const i=a(e,["role"]);return i!=null&&l(t,["role"],i),t}function Ga(n,e){const t={},o=a(e,["parts"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>Ua(n,s))),l(t,["parts"],r)}const i=a(e,["role"]);return i!=null&&l(t,["role"],i),t}function ko(n,e){const t={},o=a(e,["text"]);o!=null&&l(t,["text"],o);const i=a(e,["finished"]);return i!=null&&l(t,["finished"],i),t}function Ao(n,e){const t={},o=a(e,["text"]);o!=null&&l(t,["text"],o);const i=a(e,["finished"]);return i!=null&&l(t,["finished"],i),t}function Va(n,e){const t={},o=a(e,["modelTurn"]);o!=null&&l(t,["modelTurn"],Fa(n,o));const i=a(e,["turnComplete"]);i!=null&&l(t,["turnComplete"],i);const r=a(e,["interrupted"]);r!=null&&l(t,["interrupted"],r);const s=a(e,["groundingMetadata"]);s!=null&&l(t,["groundingMetadata"],s);const d=a(e,["generationComplete"]);d!=null&&l(t,["generationComplete"],d);const u=a(e,["inputTranscription"]);u!=null&&l(t,["inputTranscription"],ko(n,u));const c=a(e,["outputTranscription"]);return c!=null&&l(t,["outputTranscription"],ko(n,c)),t}function Ba(n,e){const t={},o=a(e,["modelTurn"]);o!=null&&l(t,["modelTurn"],Ga(n,o));const i=a(e,["turnComplete"]);i!=null&&l(t,["turnComplete"],i);const r=a(e,["interrupted"]);r!=null&&l(t,["interrupted"],r);const s=a(e,["groundingMetadata"]);s!=null&&l(t,["groundingMetadata"],s);const d=a(e,["generationComplete"]);d!=null&&l(t,["generationComplete"],d);const u=a(e,["inputTranscription"]);u!=null&&l(t,["inputTranscription"],Ao(n,u));const c=a(e,["outputTranscription"]);return c!=null&&l(t,["outputTranscription"],Ao(n,c)),t}function Ha(n,e){const t={},o=a(e,["id"]);o!=null&&l(t,["id"],o);const i=a(e,["args"]);i!=null&&l(t,["args"],i);const r=a(e,["name"]);return r!=null&&l(t,["name"],r),t}function qa(n,e){const t={},o=a(e,["args"]);o!=null&&l(t,["args"],o);const i=a(e,["name"]);return i!=null&&l(t,["name"],i),t}function za(n,e){const t={},o=a(e,["functionCalls"]);if(o!=null){let i=o;Array.isArray(i)&&(i=i.map(r=>Ha(n,r))),l(t,["functionCalls"],i)}return t}function Oa(n,e){const t={},o=a(e,["functionCalls"]);if(o!=null){let i=o;Array.isArray(i)&&(i=i.map(r=>qa(n,r))),l(t,["functionCalls"],i)}return t}function Ka(n,e){const t={},o=a(e,["ids"]);return o!=null&&l(t,["ids"],o),t}function Ja(n,e){const t={},o=a(e,["ids"]);return o!=null&&l(t,["ids"],o),t}function bt(n,e){const t={},o=a(e,["modality"]);o!=null&&l(t,["modality"],o);const i=a(e,["tokenCount"]);return i!=null&&l(t,["tokenCount"],i),t}function $t(n,e){const t={},o=a(e,["modality"]);o!=null&&l(t,["modality"],o);const i=a(e,["tokenCount"]);return i!=null&&l(t,["tokenCount"],i),t}function Wa(n,e){const t={},o=a(e,["promptTokenCount"]);o!=null&&l(t,["promptTokenCount"],o);const i=a(e,["cachedContentTokenCount"]);i!=null&&l(t,["cachedContentTokenCount"],i);const r=a(e,["responseTokenCount"]);r!=null&&l(t,["responseTokenCount"],r);const s=a(e,["toolUsePromptTokenCount"]);s!=null&&l(t,["toolUsePromptTokenCount"],s);const d=a(e,["thoughtsTokenCount"]);d!=null&&l(t,["thoughtsTokenCount"],d);const u=a(e,["totalTokenCount"]);u!=null&&l(t,["totalTokenCount"],u);const c=a(e,["promptTokensDetails"]);if(c!=null){let m=c;Array.isArray(m)&&(m=m.map(g=>bt(n,g))),l(t,["promptTokensDetails"],m)}const p=a(e,["cacheTokensDetails"]);if(p!=null){let m=p;Array.isArray(m)&&(m=m.map(g=>bt(n,g))),l(t,["cacheTokensDetails"],m)}const f=a(e,["responseTokensDetails"]);if(f!=null){let m=f;Array.isArray(m)&&(m=m.map(g=>bt(n,g))),l(t,["responseTokensDetails"],m)}const h=a(e,["toolUsePromptTokensDetails"]);if(h!=null){let m=h;Array.isArray(m)&&(m=m.map(g=>bt(n,g))),l(t,["toolUsePromptTokensDetails"],m)}return t}function Ya(n,e){const t={},o=a(e,["promptTokenCount"]);o!=null&&l(t,["promptTokenCount"],o);const i=a(e,["cachedContentTokenCount"]);i!=null&&l(t,["cachedContentTokenCount"],i);const r=a(e,["candidatesTokenCount"]);r!=null&&l(t,["responseTokenCount"],r);const s=a(e,["toolUsePromptTokenCount"]);s!=null&&l(t,["toolUsePromptTokenCount"],s);const d=a(e,["thoughtsTokenCount"]);d!=null&&l(t,["thoughtsTokenCount"],d);const u=a(e,["totalTokenCount"]);u!=null&&l(t,["totalTokenCount"],u);const c=a(e,["promptTokensDetails"]);if(c!=null){let g=c;Array.isArray(g)&&(g=g.map(v=>$t(n,v))),l(t,["promptTokensDetails"],g)}const p=a(e,["cacheTokensDetails"]);if(p!=null){let g=p;Array.isArray(g)&&(g=g.map(v=>$t(n,v))),l(t,["cacheTokensDetails"],g)}const f=a(e,["candidatesTokensDetails"]);if(f!=null){let g=f;Array.isArray(g)&&(g=g.map(v=>$t(n,v))),l(t,["responseTokensDetails"],g)}const h=a(e,["toolUsePromptTokensDetails"]);if(h!=null){let g=h;Array.isArray(g)&&(g=g.map(v=>$t(n,v))),l(t,["toolUsePromptTokensDetails"],g)}const m=a(e,["trafficType"]);return m!=null&&l(t,["trafficType"],m),t}function Qa(n,e){const t={},o=a(e,["timeLeft"]);return o!=null&&l(t,["timeLeft"],o),t}function Xa(n,e){const t={},o=a(e,["timeLeft"]);return o!=null&&l(t,["timeLeft"],o),t}function Za(n,e){const t={},o=a(e,["newHandle"]);o!=null&&l(t,["newHandle"],o);const i=a(e,["resumable"]);i!=null&&l(t,["resumable"],i);const r=a(e,["lastConsumedClientMessageIndex"]);return r!=null&&l(t,["lastConsumedClientMessageIndex"],r),t}function ja(n,e){const t={},o=a(e,["newHandle"]);o!=null&&l(t,["newHandle"],o);const i=a(e,["resumable"]);i!=null&&l(t,["resumable"],i);const r=a(e,["lastConsumedClientMessageIndex"]);return r!=null&&l(t,["lastConsumedClientMessageIndex"],r),t}function es(n,e){const t={};a(e,["setupComplete"])!=null&&l(t,["setupComplete"],Da());const i=a(e,["serverContent"]);i!=null&&l(t,["serverContent"],Va(n,i));const r=a(e,["toolCall"]);r!=null&&l(t,["toolCall"],za(n,r));const s=a(e,["toolCallCancellation"]);s!=null&&l(t,["toolCallCancellation"],Ka(n,s));const d=a(e,["usageMetadata"]);d!=null&&l(t,["usageMetadata"],Wa(n,d));const u=a(e,["goAway"]);u!=null&&l(t,["goAway"],Qa(n,u));const c=a(e,["sessionResumptionUpdate"]);return c!=null&&l(t,["sessionResumptionUpdate"],Za(n,c)),t}function ts(n,e){const t={};a(e,["setupComplete"])!=null&&l(t,["setupComplete"],La());const i=a(e,["serverContent"]);i!=null&&l(t,["serverContent"],Ba(n,i));const r=a(e,["toolCall"]);r!=null&&l(t,["toolCall"],Oa(n,r));const s=a(e,["toolCallCancellation"]);s!=null&&l(t,["toolCallCancellation"],Ja(n,s));const d=a(e,["usageMetadata"]);d!=null&&l(t,["usageMetadata"],Ya(n,d));const u=a(e,["goAway"]);u!=null&&l(t,["goAway"],Xa(n,u));const c=a(e,["sessionResumptionUpdate"]);return c!=null&&l(t,["sessionResumptionUpdate"],ja(n,c)),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ns(n,e){const t={};if(a(e,["videoMetadata"])!==void 0)throw new Error("videoMetadata parameter is not supported in Gemini API.");const o=a(e,["thought"]);o!=null&&l(t,["thought"],o);const i=a(e,["codeExecutionResult"]);i!=null&&l(t,["codeExecutionResult"],i);const r=a(e,["executableCode"]);r!=null&&l(t,["executableCode"],r);const s=a(e,["fileData"]);s!=null&&l(t,["fileData"],s);const d=a(e,["functionCall"]);d!=null&&l(t,["functionCall"],d);const u=a(e,["functionResponse"]);u!=null&&l(t,["functionResponse"],u);const c=a(e,["inlineData"]);c!=null&&l(t,["inlineData"],c);const p=a(e,["text"]);return p!=null&&l(t,["text"],p),t}function qt(n,e){const t={},o=a(e,["parts"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>ns(n,s))),l(t,["parts"],r)}const i=a(e,["role"]);return i!=null&&l(t,["role"],i),t}function os(n,e){const t={};if(a(e,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const o=a(e,["category"]);o!=null&&l(t,["category"],o);const i=a(e,["threshold"]);return i!=null&&l(t,["threshold"],i),t}function is(){return{}}function rs(n,e){const t={},o=a(e,["mode"]);o!=null&&l(t,["mode"],o);const i=a(e,["dynamicThreshold"]);return i!=null&&l(t,["dynamicThreshold"],i),t}function as(n,e){const t={},o=a(e,["dynamicRetrievalConfig"]);return o!=null&&l(t,["dynamicRetrievalConfig"],rs(n,o)),t}function ss(n,e){const t={};if(a(e,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");a(e,["googleSearch"])!=null&&l(t,["googleSearch"],is());const i=a(e,["googleSearchRetrieval"]);i!=null&&l(t,["googleSearchRetrieval"],as(n,i));const r=a(e,["codeExecution"]);r!=null&&l(t,["codeExecution"],r);const s=a(e,["functionDeclarations"]);return s!=null&&l(t,["functionDeclarations"],s),t}function ls(n,e){const t={},o=a(e,["mode"]);o!=null&&l(t,["mode"],o);const i=a(e,["allowedFunctionNames"]);return i!=null&&l(t,["allowedFunctionNames"],i),t}function cs(n,e){const t={},o=a(e,["functionCallingConfig"]);return o!=null&&l(t,["functionCallingConfig"],ls(n,o)),t}function ds(n,e){const t={},o=a(e,["voiceName"]);return o!=null&&l(t,["voiceName"],o),t}function us(n,e){const t={},o=a(e,["prebuiltVoiceConfig"]);return o!=null&&l(t,["prebuiltVoiceConfig"],ds(n,o)),t}function ps(n,e){const t={},o=a(e,["voiceConfig"]);o!=null&&l(t,["voiceConfig"],us(n,o));const i=a(e,["languageCode"]);return i!=null&&l(t,["languageCode"],i),t}function fs(n,e){const t={},o=a(e,["includeThoughts"]);o!=null&&l(t,["includeThoughts"],o);const i=a(e,["thinkingBudget"]);return i!=null&&l(t,["thinkingBudget"],i),t}function ms(n,e,t){const o={},i=a(e,["systemInstruction"]);t!==void 0&&i!=null&&l(t,["systemInstruction"],qt(n,ue(n,i)));const r=a(e,["temperature"]);r!=null&&l(o,["temperature"],r);const s=a(e,["topP"]);s!=null&&l(o,["topP"],s);const d=a(e,["topK"]);d!=null&&l(o,["topK"],d);const u=a(e,["candidateCount"]);u!=null&&l(o,["candidateCount"],u);const c=a(e,["maxOutputTokens"]);c!=null&&l(o,["maxOutputTokens"],c);const p=a(e,["stopSequences"]);p!=null&&l(o,["stopSequences"],p);const f=a(e,["responseLogprobs"]);f!=null&&l(o,["responseLogprobs"],f);const h=a(e,["logprobs"]);h!=null&&l(o,["logprobs"],h);const m=a(e,["presencePenalty"]);m!=null&&l(o,["presencePenalty"],m);const g=a(e,["frequencyPenalty"]);g!=null&&l(o,["frequencyPenalty"],g);const v=a(e,["seed"]);v!=null&&l(o,["seed"],v);const b=a(e,["responseMimeType"]);b!=null&&l(o,["responseMimeType"],b);const $=a(e,["responseSchema"]);if($!=null&&l(o,["responseSchema"],hi(n,$)),a(e,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(a(e,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const C=a(e,["safetySettings"]);if(t!==void 0&&C!=null){let A=C;Array.isArray(A)&&(A=A.map(S=>os(n,S))),l(t,["safetySettings"],A)}const x=a(e,["tools"]);if(t!==void 0&&x!=null){let A=Ht(n,x);Array.isArray(A)&&(A=A.map(S=>ss(n,Bt(n,S)))),l(t,["tools"],A)}const w=a(e,["toolConfig"]);if(t!==void 0&&w!=null&&l(t,["toolConfig"],cs(n,w)),a(e,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const y=a(e,["cachedContent"]);t!==void 0&&y!=null&&l(t,["cachedContent"],xe(n,y));const k=a(e,["responseModalities"]);k!=null&&l(o,["responseModalities"],k);const E=a(e,["mediaResolution"]);E!=null&&l(o,["mediaResolution"],E);const T=a(e,["speechConfig"]);if(T!=null&&l(o,["speechConfig"],ps(n,gi(n,T))),a(e,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const I=a(e,["thinkingConfig"]);return I!=null&&l(o,["thinkingConfig"],fs(n,I)),o}function So(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["_url","model"],W(n,o));const i=a(e,["contents"]);if(i!=null){let s=Ee(n,i);Array.isArray(s)&&(s=s.map(d=>qt(n,d))),l(t,["contents"],s)}const r=a(e,["config"]);return r!=null&&l(t,["generationConfig"],ms(n,r,t)),t}function hs(n,e,t){const o={},i=a(e,["taskType"]);t!==void 0&&i!=null&&l(t,["requests[]","taskType"],i);const r=a(e,["title"]);t!==void 0&&r!=null&&l(t,["requests[]","title"],r);const s=a(e,["outputDimensionality"]);if(t!==void 0&&s!=null&&l(t,["requests[]","outputDimensionality"],s),a(e,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(a(e,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return o}function gs(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["_url","model"],W(n,o));const i=a(e,["contents"]);i!=null&&l(t,["requests[]","content"],mi(n,i));const r=a(e,["config"]);r!=null&&l(t,["config"],hs(n,r,t));const s=a(e,["model"]);return s!==void 0&&l(t,["requests[]","model"],W(n,s)),t}function vs(n,e,t){const o={};if(a(e,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(a(e,["negativePrompt"])!==void 0)throw new Error("negativePrompt parameter is not supported in Gemini API.");const i=a(e,["numberOfImages"]);t!==void 0&&i!=null&&l(t,["parameters","sampleCount"],i);const r=a(e,["aspectRatio"]);t!==void 0&&r!=null&&l(t,["parameters","aspectRatio"],r);const s=a(e,["guidanceScale"]);if(t!==void 0&&s!=null&&l(t,["parameters","guidanceScale"],s),a(e,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const d=a(e,["safetyFilterLevel"]);t!==void 0&&d!=null&&l(t,["parameters","safetySetting"],d);const u=a(e,["personGeneration"]);t!==void 0&&u!=null&&l(t,["parameters","personGeneration"],u);const c=a(e,["includeSafetyAttributes"]);t!==void 0&&c!=null&&l(t,["parameters","includeSafetyAttributes"],c);const p=a(e,["includeRaiReason"]);t!==void 0&&p!=null&&l(t,["parameters","includeRaiReason"],p);const f=a(e,["language"]);t!==void 0&&f!=null&&l(t,["parameters","language"],f);const h=a(e,["outputMimeType"]);t!==void 0&&h!=null&&l(t,["parameters","outputOptions","mimeType"],h);const m=a(e,["outputCompressionQuality"]);if(t!==void 0&&m!=null&&l(t,["parameters","outputOptions","compressionQuality"],m),a(e,["addWatermark"])!==void 0)throw new Error("addWatermark parameter is not supported in Gemini API.");if(a(e,["enhancePrompt"])!==void 0)throw new Error("enhancePrompt parameter is not supported in Gemini API.");return o}function ys(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["_url","model"],W(n,o));const i=a(e,["prompt"]);i!=null&&l(t,["instances[0]","prompt"],i);const r=a(e,["config"]);return r!=null&&l(t,["config"],vs(n,r,t)),t}function bs(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["_url","name"],W(n,o));const i=a(e,["config"]);return i!=null&&l(t,["config"],i),t}function $s(n,e,t){const o={},i=a(e,["displayName"]);t!==void 0&&i!=null&&l(t,["displayName"],i);const r=a(e,["description"]);return t!==void 0&&r!=null&&l(t,["description"],r),o}function _s(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["_url","name"],W(n,o));const i=a(e,["config"]);return i!=null&&l(t,["config"],$s(n,i,t)),t}function Cs(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["_url","name"],W(n,o));const i=a(e,["config"]);return i!=null&&l(t,["config"],i),t}function ws(n,e){const t={};if(a(e,["systemInstruction"])!==void 0)throw new Error("systemInstruction parameter is not supported in Gemini API.");if(a(e,["tools"])!==void 0)throw new Error("tools parameter is not supported in Gemini API.");if(a(e,["generationConfig"])!==void 0)throw new Error("generationConfig parameter is not supported in Gemini API.");return t}function Ts(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["_url","model"],W(n,o));const i=a(e,["contents"]);if(i!=null){let s=Ee(n,i);Array.isArray(s)&&(s=s.map(d=>qt(n,d))),l(t,["contents"],s)}const r=a(e,["config"]);return r!=null&&l(t,["config"],ws(n,r)),t}function Is(n,e){const t={};if(a(e,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");const o=a(e,["imageBytes"]);o!=null&&l(t,["bytesBase64Encoded"],ke(n,o));const i=a(e,["mimeType"]);return i!=null&&l(t,["mimeType"],i),t}function Es(n,e,t){const o={},i=a(e,["numberOfVideos"]);if(t!==void 0&&i!=null&&l(t,["parameters","sampleCount"],i),a(e,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(a(e,["fps"])!==void 0)throw new Error("fps parameter is not supported in Gemini API.");const r=a(e,["durationSeconds"]);if(t!==void 0&&r!=null&&l(t,["parameters","durationSeconds"],r),a(e,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const s=a(e,["aspectRatio"]);if(t!==void 0&&s!=null&&l(t,["parameters","aspectRatio"],s),a(e,["resolution"])!==void 0)throw new Error("resolution parameter is not supported in Gemini API.");const d=a(e,["personGeneration"]);if(t!==void 0&&d!=null&&l(t,["parameters","personGeneration"],d),a(e,["pubsubTopic"])!==void 0)throw new Error("pubsubTopic parameter is not supported in Gemini API.");const u=a(e,["negativePrompt"]);if(t!==void 0&&u!=null&&l(t,["parameters","negativePrompt"],u),a(e,["enhancePrompt"])!==void 0)throw new Error("enhancePrompt parameter is not supported in Gemini API.");return o}function xs(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["_url","model"],W(n,o));const i=a(e,["prompt"]);i!=null&&l(t,["instances[0]","prompt"],i);const r=a(e,["image"]);r!=null&&l(t,["instances[0]","image"],Is(n,r));const s=a(e,["config"]);return s!=null&&l(t,["config"],Es(n,s,t)),t}function ks(n,e){const t={},o=a(e,["videoMetadata"]);o!=null&&l(t,["videoMetadata"],o);const i=a(e,["thought"]);i!=null&&l(t,["thought"],i);const r=a(e,["codeExecutionResult"]);r!=null&&l(t,["codeExecutionResult"],r);const s=a(e,["executableCode"]);s!=null&&l(t,["executableCode"],s);const d=a(e,["fileData"]);d!=null&&l(t,["fileData"],d);const u=a(e,["functionCall"]);u!=null&&l(t,["functionCall"],u);const c=a(e,["functionResponse"]);c!=null&&l(t,["functionResponse"],c);const p=a(e,["inlineData"]);p!=null&&l(t,["inlineData"],p);const f=a(e,["text"]);return f!=null&&l(t,["text"],f),t}function Ye(n,e){const t={},o=a(e,["parts"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>ks(n,s))),l(t,["parts"],r)}const i=a(e,["role"]);return i!=null&&l(t,["role"],i),t}function As(n,e){const t={},o=a(e,["featureSelectionPreference"]);return o!=null&&l(t,["featureSelectionPreference"],o),t}function Ss(n,e){const t={},o=a(e,["method"]);o!=null&&l(t,["method"],o);const i=a(e,["category"]);i!=null&&l(t,["category"],i);const r=a(e,["threshold"]);return r!=null&&l(t,["threshold"],r),t}function Ps(){return{}}function Rs(n,e){const t={},o=a(e,["mode"]);o!=null&&l(t,["mode"],o);const i=a(e,["dynamicThreshold"]);return i!=null&&l(t,["dynamicThreshold"],i),t}function Ms(n,e){const t={},o=a(e,["dynamicRetrievalConfig"]);return o!=null&&l(t,["dynamicRetrievalConfig"],Rs(n,o)),t}function $i(n,e){const t={},o=a(e,["retrieval"]);o!=null&&l(t,["retrieval"],o),a(e,["googleSearch"])!=null&&l(t,["googleSearch"],Ps());const r=a(e,["googleSearchRetrieval"]);r!=null&&l(t,["googleSearchRetrieval"],Ms(n,r));const s=a(e,["codeExecution"]);s!=null&&l(t,["codeExecution"],s);const d=a(e,["functionDeclarations"]);return d!=null&&l(t,["functionDeclarations"],d),t}function Ds(n,e){const t={},o=a(e,["mode"]);o!=null&&l(t,["mode"],o);const i=a(e,["allowedFunctionNames"]);return i!=null&&l(t,["allowedFunctionNames"],i),t}function Ls(n,e){const t={},o=a(e,["functionCallingConfig"]);return o!=null&&l(t,["functionCallingConfig"],Ds(n,o)),t}function Ns(n,e){const t={},o=a(e,["voiceName"]);return o!=null&&l(t,["voiceName"],o),t}function Us(n,e){const t={},o=a(e,["prebuiltVoiceConfig"]);return o!=null&&l(t,["prebuiltVoiceConfig"],Ns(n,o)),t}function Fs(n,e){const t={},o=a(e,["voiceConfig"]);o!=null&&l(t,["voiceConfig"],Us(n,o));const i=a(e,["languageCode"]);return i!=null&&l(t,["languageCode"],i),t}function Gs(n,e){const t={},o=a(e,["includeThoughts"]);o!=null&&l(t,["includeThoughts"],o);const i=a(e,["thinkingBudget"]);return i!=null&&l(t,["thinkingBudget"],i),t}function Vs(n,e,t){const o={},i=a(e,["systemInstruction"]);t!==void 0&&i!=null&&l(t,["systemInstruction"],Ye(n,ue(n,i)));const r=a(e,["temperature"]);r!=null&&l(o,["temperature"],r);const s=a(e,["topP"]);s!=null&&l(o,["topP"],s);const d=a(e,["topK"]);d!=null&&l(o,["topK"],d);const u=a(e,["candidateCount"]);u!=null&&l(o,["candidateCount"],u);const c=a(e,["maxOutputTokens"]);c!=null&&l(o,["maxOutputTokens"],c);const p=a(e,["stopSequences"]);p!=null&&l(o,["stopSequences"],p);const f=a(e,["responseLogprobs"]);f!=null&&l(o,["responseLogprobs"],f);const h=a(e,["logprobs"]);h!=null&&l(o,["logprobs"],h);const m=a(e,["presencePenalty"]);m!=null&&l(o,["presencePenalty"],m);const g=a(e,["frequencyPenalty"]);g!=null&&l(o,["frequencyPenalty"],g);const v=a(e,["seed"]);v!=null&&l(o,["seed"],v);const b=a(e,["responseMimeType"]);b!=null&&l(o,["responseMimeType"],b);const $=a(e,["responseSchema"]);$!=null&&l(o,["responseSchema"],hi(n,$));const C=a(e,["routingConfig"]);C!=null&&l(o,["routingConfig"],C);const x=a(e,["modelSelectionConfig"]);x!=null&&l(o,["modelConfig"],As(n,x));const w=a(e,["safetySettings"]);if(t!==void 0&&w!=null){let L=w;Array.isArray(L)&&(L=L.map(O=>Ss(n,O))),l(t,["safetySettings"],L)}const y=a(e,["tools"]);if(t!==void 0&&y!=null){let L=Ht(n,y);Array.isArray(L)&&(L=L.map(O=>$i(n,Bt(n,O)))),l(t,["tools"],L)}const k=a(e,["toolConfig"]);t!==void 0&&k!=null&&l(t,["toolConfig"],Ls(n,k));const E=a(e,["labels"]);t!==void 0&&E!=null&&l(t,["labels"],E);const T=a(e,["cachedContent"]);t!==void 0&&T!=null&&l(t,["cachedContent"],xe(n,T));const I=a(e,["responseModalities"]);I!=null&&l(o,["responseModalities"],I);const A=a(e,["mediaResolution"]);A!=null&&l(o,["mediaResolution"],A);const S=a(e,["speechConfig"]);S!=null&&l(o,["speechConfig"],Fs(n,gi(n,S)));const P=a(e,["audioTimestamp"]);P!=null&&l(o,["audioTimestamp"],P);const M=a(e,["thinkingConfig"]);return M!=null&&l(o,["thinkingConfig"],Gs(n,M)),o}function Po(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["_url","model"],W(n,o));const i=a(e,["contents"]);if(i!=null){let s=Ee(n,i);Array.isArray(s)&&(s=s.map(d=>Ye(n,d))),l(t,["contents"],s)}const r=a(e,["config"]);return r!=null&&l(t,["generationConfig"],Vs(n,r,t)),t}function Bs(n,e,t){const o={},i=a(e,["taskType"]);t!==void 0&&i!=null&&l(t,["instances[]","task_type"],i);const r=a(e,["title"]);t!==void 0&&r!=null&&l(t,["instances[]","title"],r);const s=a(e,["outputDimensionality"]);t!==void 0&&s!=null&&l(t,["parameters","outputDimensionality"],s);const d=a(e,["mimeType"]);t!==void 0&&d!=null&&l(t,["instances[]","mimeType"],d);const u=a(e,["autoTruncate"]);return t!==void 0&&u!=null&&l(t,["parameters","autoTruncate"],u),o}function Hs(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["_url","model"],W(n,o));const i=a(e,["contents"]);i!=null&&l(t,["instances[]","content"],mi(n,i));const r=a(e,["config"]);return r!=null&&l(t,["config"],Bs(n,r,t)),t}function qs(n,e,t){const o={},i=a(e,["outputGcsUri"]);t!==void 0&&i!=null&&l(t,["parameters","storageUri"],i);const r=a(e,["negativePrompt"]);t!==void 0&&r!=null&&l(t,["parameters","negativePrompt"],r);const s=a(e,["numberOfImages"]);t!==void 0&&s!=null&&l(t,["parameters","sampleCount"],s);const d=a(e,["aspectRatio"]);t!==void 0&&d!=null&&l(t,["parameters","aspectRatio"],d);const u=a(e,["guidanceScale"]);t!==void 0&&u!=null&&l(t,["parameters","guidanceScale"],u);const c=a(e,["seed"]);t!==void 0&&c!=null&&l(t,["parameters","seed"],c);const p=a(e,["safetyFilterLevel"]);t!==void 0&&p!=null&&l(t,["parameters","safetySetting"],p);const f=a(e,["personGeneration"]);t!==void 0&&f!=null&&l(t,["parameters","personGeneration"],f);const h=a(e,["includeSafetyAttributes"]);t!==void 0&&h!=null&&l(t,["parameters","includeSafetyAttributes"],h);const m=a(e,["includeRaiReason"]);t!==void 0&&m!=null&&l(t,["parameters","includeRaiReason"],m);const g=a(e,["language"]);t!==void 0&&g!=null&&l(t,["parameters","language"],g);const v=a(e,["outputMimeType"]);t!==void 0&&v!=null&&l(t,["parameters","outputOptions","mimeType"],v);const b=a(e,["outputCompressionQuality"]);t!==void 0&&b!=null&&l(t,["parameters","outputOptions","compressionQuality"],b);const $=a(e,["addWatermark"]);t!==void 0&&$!=null&&l(t,["parameters","addWatermark"],$);const C=a(e,["enhancePrompt"]);return t!==void 0&&C!=null&&l(t,["parameters","enhancePrompt"],C),o}function zs(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["_url","model"],W(n,o));const i=a(e,["prompt"]);i!=null&&l(t,["instances[0]","prompt"],i);const r=a(e,["config"]);return r!=null&&l(t,["config"],qs(n,r,t)),t}function Os(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["_url","name"],W(n,o));const i=a(e,["config"]);return i!=null&&l(t,["config"],i),t}function Ks(n,e,t){const o={},i=a(e,["displayName"]);t!==void 0&&i!=null&&l(t,["displayName"],i);const r=a(e,["description"]);return t!==void 0&&r!=null&&l(t,["description"],r),o}function Js(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["_url","model"],W(n,o));const i=a(e,["config"]);return i!=null&&l(t,["config"],Ks(n,i,t)),t}function Ws(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["_url","name"],W(n,o));const i=a(e,["config"]);return i!=null&&l(t,["config"],i),t}function Ys(n,e,t){const o={},i=a(e,["systemInstruction"]);t!==void 0&&i!=null&&l(t,["systemInstruction"],Ye(n,ue(n,i)));const r=a(e,["tools"]);if(t!==void 0&&r!=null){let d=r;Array.isArray(d)&&(d=d.map(u=>$i(n,u))),l(t,["tools"],d)}const s=a(e,["generationConfig"]);return t!==void 0&&s!=null&&l(t,["generationConfig"],s),o}function Qs(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["_url","model"],W(n,o));const i=a(e,["contents"]);if(i!=null){let s=Ee(n,i);Array.isArray(s)&&(s=s.map(d=>Ye(n,d))),l(t,["contents"],s)}const r=a(e,["config"]);return r!=null&&l(t,["config"],Ys(n,r,t)),t}function Xs(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["_url","model"],W(n,o));const i=a(e,["contents"]);if(i!=null){let s=Ee(n,i);Array.isArray(s)&&(s=s.map(d=>Ye(n,d))),l(t,["contents"],s)}const r=a(e,["config"]);return r!=null&&l(t,["config"],r),t}function Zs(n,e){const t={},o=a(e,["gcsUri"]);o!=null&&l(t,["gcsUri"],o);const i=a(e,["imageBytes"]);i!=null&&l(t,["bytesBase64Encoded"],ke(n,i));const r=a(e,["mimeType"]);return r!=null&&l(t,["mimeType"],r),t}function js(n,e,t){const o={},i=a(e,["numberOfVideos"]);t!==void 0&&i!=null&&l(t,["parameters","sampleCount"],i);const r=a(e,["outputGcsUri"]);t!==void 0&&r!=null&&l(t,["parameters","storageUri"],r);const s=a(e,["fps"]);t!==void 0&&s!=null&&l(t,["parameters","fps"],s);const d=a(e,["durationSeconds"]);t!==void 0&&d!=null&&l(t,["parameters","durationSeconds"],d);const u=a(e,["seed"]);t!==void 0&&u!=null&&l(t,["parameters","seed"],u);const c=a(e,["aspectRatio"]);t!==void 0&&c!=null&&l(t,["parameters","aspectRatio"],c);const p=a(e,["resolution"]);t!==void 0&&p!=null&&l(t,["parameters","resolution"],p);const f=a(e,["personGeneration"]);t!==void 0&&f!=null&&l(t,["parameters","personGeneration"],f);const h=a(e,["pubsubTopic"]);t!==void 0&&h!=null&&l(t,["parameters","pubsubTopic"],h);const m=a(e,["negativePrompt"]);t!==void 0&&m!=null&&l(t,["parameters","negativePrompt"],m);const g=a(e,["enhancePrompt"]);return t!==void 0&&g!=null&&l(t,["parameters","enhancePrompt"],g),o}function el(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["_url","model"],W(n,o));const i=a(e,["prompt"]);i!=null&&l(t,["instances[0]","prompt"],i);const r=a(e,["image"]);r!=null&&l(t,["instances[0]","image"],Zs(n,r));const s=a(e,["config"]);return s!=null&&l(t,["config"],js(n,s,t)),t}function tl(n,e){const t={},o=a(e,["thought"]);o!=null&&l(t,["thought"],o);const i=a(e,["codeExecutionResult"]);i!=null&&l(t,["codeExecutionResult"],i);const r=a(e,["executableCode"]);r!=null&&l(t,["executableCode"],r);const s=a(e,["fileData"]);s!=null&&l(t,["fileData"],s);const d=a(e,["functionCall"]);d!=null&&l(t,["functionCall"],d);const u=a(e,["functionResponse"]);u!=null&&l(t,["functionResponse"],u);const c=a(e,["inlineData"]);c!=null&&l(t,["inlineData"],c);const p=a(e,["text"]);return p!=null&&l(t,["text"],p),t}function nl(n,e){const t={},o=a(e,["parts"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>tl(n,s))),l(t,["parts"],r)}const i=a(e,["role"]);return i!=null&&l(t,["role"],i),t}function ol(n,e){const t={},o=a(e,["citationSources"]);return o!=null&&l(t,["citations"],o),t}function il(n,e){const t={},o=a(e,["content"]);o!=null&&l(t,["content"],nl(n,o));const i=a(e,["citationMetadata"]);i!=null&&l(t,["citationMetadata"],ol(n,i));const r=a(e,["tokenCount"]);r!=null&&l(t,["tokenCount"],r);const s=a(e,["finishReason"]);s!=null&&l(t,["finishReason"],s);const d=a(e,["avgLogprobs"]);d!=null&&l(t,["avgLogprobs"],d);const u=a(e,["groundingMetadata"]);u!=null&&l(t,["groundingMetadata"],u);const c=a(e,["index"]);c!=null&&l(t,["index"],c);const p=a(e,["logprobsResult"]);p!=null&&l(t,["logprobsResult"],p);const f=a(e,["safetyRatings"]);return f!=null&&l(t,["safetyRatings"],f),t}function Ro(n,e){const t={},o=a(e,["candidates"]);if(o!=null){let d=o;Array.isArray(d)&&(d=d.map(u=>il(n,u))),l(t,["candidates"],d)}const i=a(e,["modelVersion"]);i!=null&&l(t,["modelVersion"],i);const r=a(e,["promptFeedback"]);r!=null&&l(t,["promptFeedback"],r);const s=a(e,["usageMetadata"]);return s!=null&&l(t,["usageMetadata"],s),t}function rl(n,e){const t={},o=a(e,["values"]);return o!=null&&l(t,["values"],o),t}function al(){return{}}function sl(n,e){const t={},o=a(e,["embeddings"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>rl(n,s))),l(t,["embeddings"],r)}return a(e,["metadata"])!=null&&l(t,["metadata"],al()),t}function ll(n,e){const t={},o=a(e,["bytesBase64Encoded"]);o!=null&&l(t,["imageBytes"],ke(n,o));const i=a(e,["mimeType"]);return i!=null&&l(t,["mimeType"],i),t}function _i(n,e){const t={},o=a(e,["safetyAttributes","categories"]);o!=null&&l(t,["categories"],o);const i=a(e,["safetyAttributes","scores"]);i!=null&&l(t,["scores"],i);const r=a(e,["contentType"]);return r!=null&&l(t,["contentType"],r),t}function cl(n,e){const t={},o=a(e,["_self"]);o!=null&&l(t,["image"],ll(n,o));const i=a(e,["raiFilteredReason"]);i!=null&&l(t,["raiFilteredReason"],i);const r=a(e,["_self"]);return r!=null&&l(t,["safetyAttributes"],_i(n,r)),t}function dl(n,e){const t={},o=a(e,["predictions"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>cl(n,s))),l(t,["generatedImages"],r)}const i=a(e,["positivePromptSafetyAttributes"]);return i!=null&&l(t,["positivePromptSafetyAttributes"],_i(n,i)),t}function ul(n,e){const t={},o=a(e,["baseModel"]);o!=null&&l(t,["baseModel"],o);const i=a(e,["createTime"]);i!=null&&l(t,["createTime"],i);const r=a(e,["updateTime"]);return r!=null&&l(t,["updateTime"],r),t}function Mo(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["name"],o);const i=a(e,["displayName"]);i!=null&&l(t,["displayName"],i);const r=a(e,["description"]);r!=null&&l(t,["description"],r);const s=a(e,["version"]);s!=null&&l(t,["version"],s);const d=a(e,["_self"]);d!=null&&l(t,["tunedModelInfo"],ul(n,d));const u=a(e,["inputTokenLimit"]);u!=null&&l(t,["inputTokenLimit"],u);const c=a(e,["outputTokenLimit"]);c!=null&&l(t,["outputTokenLimit"],c);const p=a(e,["supportedGenerationMethods"]);return p!=null&&l(t,["supportedActions"],p),t}function pl(){return{}}function fl(n,e){const t={},o=a(e,["totalTokens"]);o!=null&&l(t,["totalTokens"],o);const i=a(e,["cachedContentTokenCount"]);return i!=null&&l(t,["cachedContentTokenCount"],i),t}function ml(n,e){const t={},o=a(e,["video","uri"]);o!=null&&l(t,["uri"],o);const i=a(e,["video","encodedVideo"]);i!=null&&l(t,["videoBytes"],ke(n,i));const r=a(e,["encoding"]);return r!=null&&l(t,["mimeType"],r),t}function hl(n,e){const t={},o=a(e,["_self"]);return o!=null&&l(t,["video"],ml(n,o)),t}function gl(n,e){const t={},o=a(e,["generatedSamples"]);if(o!=null){let s=o;Array.isArray(s)&&(s=s.map(d=>hl(n,d))),l(t,["generatedVideos"],s)}const i=a(e,["raiMediaFilteredCount"]);i!=null&&l(t,["raiMediaFilteredCount"],i);const r=a(e,["raiMediaFilteredReasons"]);return r!=null&&l(t,["raiMediaFilteredReasons"],r),t}function vl(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["name"],o);const i=a(e,["metadata"]);i!=null&&l(t,["metadata"],i);const r=a(e,["done"]);r!=null&&l(t,["done"],r);const s=a(e,["error"]);s!=null&&l(t,["error"],s);const d=a(e,["response","generateVideoResponse"]);return d!=null&&l(t,["response"],gl(n,d)),t}function yl(n,e){const t={},o=a(e,["videoMetadata"]);o!=null&&l(t,["videoMetadata"],o);const i=a(e,["thought"]);i!=null&&l(t,["thought"],i);const r=a(e,["codeExecutionResult"]);r!=null&&l(t,["codeExecutionResult"],r);const s=a(e,["executableCode"]);s!=null&&l(t,["executableCode"],s);const d=a(e,["fileData"]);d!=null&&l(t,["fileData"],d);const u=a(e,["functionCall"]);u!=null&&l(t,["functionCall"],u);const c=a(e,["functionResponse"]);c!=null&&l(t,["functionResponse"],c);const p=a(e,["inlineData"]);p!=null&&l(t,["inlineData"],p);const f=a(e,["text"]);return f!=null&&l(t,["text"],f),t}function bl(n,e){const t={},o=a(e,["parts"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>yl(n,s))),l(t,["parts"],r)}const i=a(e,["role"]);return i!=null&&l(t,["role"],i),t}function $l(n,e){const t={},o=a(e,["citations"]);return o!=null&&l(t,["citations"],o),t}function _l(n,e){const t={},o=a(e,["content"]);o!=null&&l(t,["content"],bl(n,o));const i=a(e,["citationMetadata"]);i!=null&&l(t,["citationMetadata"],$l(n,i));const r=a(e,["finishMessage"]);r!=null&&l(t,["finishMessage"],r);const s=a(e,["finishReason"]);s!=null&&l(t,["finishReason"],s);const d=a(e,["avgLogprobs"]);d!=null&&l(t,["avgLogprobs"],d);const u=a(e,["groundingMetadata"]);u!=null&&l(t,["groundingMetadata"],u);const c=a(e,["index"]);c!=null&&l(t,["index"],c);const p=a(e,["logprobsResult"]);p!=null&&l(t,["logprobsResult"],p);const f=a(e,["safetyRatings"]);return f!=null&&l(t,["safetyRatings"],f),t}function Do(n,e){const t={},o=a(e,["candidates"]);if(o!=null){let c=o;Array.isArray(c)&&(c=c.map(p=>_l(n,p))),l(t,["candidates"],c)}const i=a(e,["createTime"]);i!=null&&l(t,["createTime"],i);const r=a(e,["responseId"]);r!=null&&l(t,["responseId"],r);const s=a(e,["modelVersion"]);s!=null&&l(t,["modelVersion"],s);const d=a(e,["promptFeedback"]);d!=null&&l(t,["promptFeedback"],d);const u=a(e,["usageMetadata"]);return u!=null&&l(t,["usageMetadata"],u),t}function Cl(n,e){const t={},o=a(e,["truncated"]);o!=null&&l(t,["truncated"],o);const i=a(e,["token_count"]);return i!=null&&l(t,["tokenCount"],i),t}function wl(n,e){const t={},o=a(e,["values"]);o!=null&&l(t,["values"],o);const i=a(e,["statistics"]);return i!=null&&l(t,["statistics"],Cl(n,i)),t}function Tl(n,e){const t={},o=a(e,["billableCharacterCount"]);return o!=null&&l(t,["billableCharacterCount"],o),t}function Il(n,e){const t={},o=a(e,["predictions[]","embeddings"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>wl(n,s))),l(t,["embeddings"],r)}const i=a(e,["metadata"]);return i!=null&&l(t,["metadata"],Tl(n,i)),t}function El(n,e){const t={},o=a(e,["gcsUri"]);o!=null&&l(t,["gcsUri"],o);const i=a(e,["bytesBase64Encoded"]);i!=null&&l(t,["imageBytes"],ke(n,i));const r=a(e,["mimeType"]);return r!=null&&l(t,["mimeType"],r),t}function Ci(n,e){const t={},o=a(e,["safetyAttributes","categories"]);o!=null&&l(t,["categories"],o);const i=a(e,["safetyAttributes","scores"]);i!=null&&l(t,["scores"],i);const r=a(e,["contentType"]);return r!=null&&l(t,["contentType"],r),t}function xl(n,e){const t={},o=a(e,["_self"]);o!=null&&l(t,["image"],El(n,o));const i=a(e,["raiFilteredReason"]);i!=null&&l(t,["raiFilteredReason"],i);const r=a(e,["_self"]);r!=null&&l(t,["safetyAttributes"],Ci(n,r));const s=a(e,["prompt"]);return s!=null&&l(t,["enhancedPrompt"],s),t}function kl(n,e){const t={},o=a(e,["predictions"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>xl(n,s))),l(t,["generatedImages"],r)}const i=a(e,["positivePromptSafetyAttributes"]);return i!=null&&l(t,["positivePromptSafetyAttributes"],Ci(n,i)),t}function Al(n,e){const t={},o=a(e,["endpoint"]);o!=null&&l(t,["name"],o);const i=a(e,["deployedModelId"]);return i!=null&&l(t,["deployedModelId"],i),t}function Sl(n,e){const t={},o=a(e,["labels","google-vertex-llm-tuning-base-model-id"]);o!=null&&l(t,["baseModel"],o);const i=a(e,["createTime"]);i!=null&&l(t,["createTime"],i);const r=a(e,["updateTime"]);return r!=null&&l(t,["updateTime"],r),t}function Lo(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["name"],o);const i=a(e,["displayName"]);i!=null&&l(t,["displayName"],i);const r=a(e,["description"]);r!=null&&l(t,["description"],r);const s=a(e,["versionId"]);s!=null&&l(t,["version"],s);const d=a(e,["deployedModels"]);if(d!=null){let p=d;Array.isArray(p)&&(p=p.map(f=>Al(n,f))),l(t,["endpoints"],p)}const u=a(e,["labels"]);u!=null&&l(t,["labels"],u);const c=a(e,["_self"]);return c!=null&&l(t,["tunedModelInfo"],Sl(n,c)),t}function Pl(){return{}}function Rl(n,e){const t={},o=a(e,["totalTokens"]);return o!=null&&l(t,["totalTokens"],o),t}function Ml(n,e){const t={},o=a(e,["tokensInfo"]);return o!=null&&l(t,["tokensInfo"],o),t}function Dl(n,e){const t={},o=a(e,["gcsUri"]);o!=null&&l(t,["uri"],o);const i=a(e,["bytesBase64Encoded"]);i!=null&&l(t,["videoBytes"],ke(n,i));const r=a(e,["mimeType"]);return r!=null&&l(t,["mimeType"],r),t}function Ll(n,e){const t={},o=a(e,["_self"]);return o!=null&&l(t,["video"],Dl(n,o)),t}function Nl(n,e){const t={},o=a(e,["videos"]);if(o!=null){let s=o;Array.isArray(s)&&(s=s.map(d=>Ll(n,d))),l(t,["generatedVideos"],s)}const i=a(e,["raiMediaFilteredCount"]);i!=null&&l(t,["raiMediaFilteredCount"],i);const r=a(e,["raiMediaFilteredReasons"]);return r!=null&&l(t,["raiMediaFilteredReasons"],r),t}function Ul(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["name"],o);const i=a(e,["metadata"]);i!=null&&l(t,["metadata"],i);const r=a(e,["done"]);r!=null&&l(t,["done"],r);const s=a(e,["error"]);s!=null&&l(t,["error"],s);const d=a(e,["response"]);return d!=null&&l(t,["response"],Nl(n,d)),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Fl="FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";async function Gl(n,e,t){let o,i;t.data instanceof Blob?i=JSON.parse(await t.data.text()):i=JSON.parse(t.data),n.isVertexAI()?o=ts(n,i):o=es(n,i),e(o)}class Vl{constructor(e,t,o){this.apiClient=e,this.auth=t,this.webSocketFactory=o}async connect(e){var t,o,i,r;const s=this.apiClient.getWebsocketBaseUrl(),d=this.apiClient.getApiVersion();let u;const c=zl(this.apiClient.getDefaultHeaders());if(this.apiClient.isVertexAI())u=`${s}/ws/google.cloud.aiplatform.${d}.LlmBidiService/BidiGenerateContent`,await this.auth.addAuthHeaders(c);else{const w=this.apiClient.getApiKey();u=`${s}/ws/google.ai.generativelanguage.${d}.GenerativeService.BidiGenerateContent?key=${w}`}let p=()=>{};const f=new Promise(w=>{p=w}),h=e.callbacks,m=function(){var w;(w=h==null?void 0:h.onopen)===null||w===void 0||w.call(h),p({})},g=this.apiClient,v={onopen:m,onmessage:w=>{Gl(g,h.onmessage,w)},onerror:(t=h==null?void 0:h.onerror)!==null&&t!==void 0?t:function(w){},onclose:(o=h==null?void 0:h.onclose)!==null&&o!==void 0?o:function(w){}},b=this.webSocketFactory.create(u,ql(c),v);b.connect(),await f;let $=W(this.apiClient,e.model);if(this.apiClient.isVertexAI()&&$.startsWith("publishers/")){const w=this.apiClient.getProject(),y=this.apiClient.getLocation();$=`projects/${w}/locations/${y}/`+$}let C={};this.apiClient.isVertexAI()&&((i=e.config)===null||i===void 0?void 0:i.responseModalities)===void 0&&(e.config===void 0?e.config={responseModalities:[Dt.AUDIO]}:e.config.responseModalities=[Dt.AUDIO]),!((r=e.config)===null||r===void 0)&&r.generationConfig&&console.warn("Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).");const x={model:$,config:e.config,callbacks:e.callbacks};return this.apiClient.isVertexAI()?C=xa(this.apiClient,x):C=Ea(this.apiClient,x),delete C.config,b.send(JSON.stringify(C)),new Hl(b,this.apiClient)}}const Bl={turnComplete:!0};class Hl{constructor(e,t){this.conn=e,this.apiClient=t}tLiveClientContent(e,t){if(t.turns!==null&&t.turns!==void 0){let o=[];try{o=Ee(e,t.turns),e.isVertexAI()?o=o.map(i=>Ye(e,i)):o=o.map(i=>qt(e,i))}catch{throw new Error(`Failed to parse client content "turns", type: '${typeof t.turns}'`)}return{clientContent:{turns:o,turnComplete:t.turnComplete}}}return{clientContent:{turnComplete:t.turnComplete}}}tLiveClienttToolResponse(e,t){let o=[];if(t.functionResponses==null)throw new Error("functionResponses is required.");if(Array.isArray(t.functionResponses)?o=t.functionResponses:o=[t.functionResponses],o.length===0)throw new Error("functionResponses is required.");for(const r of o){if(typeof r!="object"||r===null||!("name"in r)||!("response"in r))throw new Error(`Could not parse function response, type '${typeof r}'.`);if(!e.isVertexAI()&&!("id"in r))throw new Error(Fl)}return{toolResponse:{functionResponses:o}}}sendClientContent(e){e=Object.assign(Object.assign({},Bl),e);const t=this.tLiveClientContent(this.apiClient,e);this.conn.send(JSON.stringify(t))}sendRealtimeInput(e){let t={};this.apiClient.isVertexAI()?t={realtimeInput:Ma(this.apiClient,e)}:t={realtimeInput:Ra(this.apiClient,e)},this.conn.send(JSON.stringify(t))}sendToolResponse(e){if(e.functionResponses==null)throw new Error("Tool response parameters are required.");const t=this.tLiveClienttToolResponse(this.apiClient,e);this.conn.send(JSON.stringify(t))}close(){this.conn.close()}}function ql(n){const e={};return n.forEach((t,o)=>{e[o]=t}),e}function zl(n){const e=new Headers;for(const[t,o]of Object.entries(n))e.append(t,o);return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ol extends ut{constructor(e){super(),this.apiClient=e,this.generateContent=async t=>await this.generateContentInternal(t),this.generateContentStream=async t=>await this.generateContentStreamInternal(t),this.generateImages=async t=>await this.generateImagesInternal(t).then(o=>{var i;let r;const s=[];if(o!=null&&o.generatedImages)for(const u of o.generatedImages)u&&(u!=null&&u.safetyAttributes)&&((i=u==null?void 0:u.safetyAttributes)===null||i===void 0?void 0:i.contentType)==="Positive Prompt"?r=u==null?void 0:u.safetyAttributes:s.push(u);let d;return r?d={generatedImages:s,positivePromptSafetyAttributes:r}:d={generatedImages:s},d})}async generateContentInternal(e){var t,o,i,r;let s,d="",u={};if(this.apiClient.isVertexAI()){const c=Po(this.apiClient,e);return d=N("{model}:generateContent",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),s.then(p=>{const f=Do(this.apiClient,p),h=new yt;return Object.assign(h,f),h})}else{const c=So(this.apiClient,e);return d=N("{model}:generateContent",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(p=>p.json()),s.then(p=>{const f=Ro(this.apiClient,p),h=new yt;return Object.assign(h,f),h})}}async generateContentStreamInternal(e){var t,o,i,r;let s,d="",u={};if(this.apiClient.isVertexAI()){const c=Po(this.apiClient,e);d=N("{model}:streamGenerateContent?alt=sse",c._url),u=c._query,delete c.config,delete c._url,delete c._query;const p=this.apiClient;return s=p.requestStream({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}),s.then(function(f){return Lt(this,arguments,function*(){var h,m,g,v;try{for(var b=!0,$=ln(f),C;C=yield ae($.next()),h=C.done,!h;b=!0){v=C.value,b=!1;const w=Do(p,yield ae(v.json())),y=new yt;Object.assign(y,w),yield yield ae(y)}}catch(x){m={error:x}}finally{try{!b&&!h&&(g=$.return)&&(yield ae(g.call($)))}finally{if(m)throw m.error}}})})}else{const c=So(this.apiClient,e);d=N("{model}:streamGenerateContent?alt=sse",c._url),u=c._query,delete c.config,delete c._url,delete c._query;const p=this.apiClient;return s=p.requestStream({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}),s.then(function(f){return Lt(this,arguments,function*(){var h,m,g,v;try{for(var b=!0,$=ln(f),C;C=yield ae($.next()),h=C.done,!h;b=!0){v=C.value,b=!1;const w=Ro(p,yield ae(v.json())),y=new yt;Object.assign(y,w),yield yield ae(y)}}catch(x){m={error:x}}finally{try{!b&&!h&&(g=$.return)&&(yield ae(g.call($)))}finally{if(m)throw m.error}}})})}}async embedContent(e){var t,o,i,r;let s,d="",u={};if(this.apiClient.isVertexAI()){const c=Hs(this.apiClient,e);return d=N("{model}:predict",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),s.then(p=>{const f=Il(this.apiClient,p),h=new bo;return Object.assign(h,f),h})}else{const c=gs(this.apiClient,e);return d=N("{model}:batchEmbedContents",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(p=>p.json()),s.then(p=>{const f=sl(this.apiClient,p),h=new bo;return Object.assign(h,f),h})}}async generateImagesInternal(e){var t,o,i,r;let s,d="",u={};if(this.apiClient.isVertexAI()){const c=zs(this.apiClient,e);return d=N("{model}:predict",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),s.then(p=>{const f=kl(this.apiClient,p),h=new $o;return Object.assign(h,f),h})}else{const c=ys(this.apiClient,e);return d=N("{model}:predict",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(p=>p.json()),s.then(p=>{const f=dl(this.apiClient,p),h=new $o;return Object.assign(h,f),h})}}async get(e){var t,o,i,r;let s,d="",u={};if(this.apiClient.isVertexAI()){const c=Os(this.apiClient,e);return d=N("{name}",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),s.then(p=>Lo(this.apiClient,p))}else{const c=bs(this.apiClient,e);return d=N("{name}",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(p=>p.json()),s.then(p=>Mo(this.apiClient,p))}}async update(e){var t,o,i,r;let s,d="",u={};if(this.apiClient.isVertexAI()){const c=Js(this.apiClient,e);return d=N("{model}",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"PATCH",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),s.then(p=>Lo(this.apiClient,p))}else{const c=_s(this.apiClient,e);return d=N("{name}",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"PATCH",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(p=>p.json()),s.then(p=>Mo(this.apiClient,p))}}async delete(e){var t,o,i,r;let s,d="",u={};if(this.apiClient.isVertexAI()){const c=Ws(this.apiClient,e);return d=N("{name}",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),s.then(()=>{const p=Pl(),f=new _o;return Object.assign(f,p),f})}else{const c=Cs(this.apiClient,e);return d=N("{name}",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"DELETE",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(p=>p.json()),s.then(()=>{const p=pl(),f=new _o;return Object.assign(f,p),f})}}async countTokens(e){var t,o,i,r;let s,d="",u={};if(this.apiClient.isVertexAI()){const c=Qs(this.apiClient,e);return d=N("{model}:countTokens",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),s.then(p=>{const f=Rl(this.apiClient,p),h=new Co;return Object.assign(h,f),h})}else{const c=Ts(this.apiClient,e);return d=N("{model}:countTokens",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(p=>p.json()),s.then(p=>{const f=fl(this.apiClient,p),h=new Co;return Object.assign(h,f),h})}}async computeTokens(e){var t,o;let i,r="",s={};if(this.apiClient.isVertexAI()){const d=Xs(this.apiClient,e);return r=N("{model}:computeTokens",d._url),s=d._query,delete d.config,delete d._url,delete d._query,i=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(d),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),i.then(u=>{const c=Ml(this.apiClient,u),p=new Mr;return Object.assign(p,c),p})}else throw new Error("This method is only supported by the Vertex AI.")}async generateVideos(e){var t,o,i,r;let s,d="",u={};if(this.apiClient.isVertexAI()){const c=el(this.apiClient,e);return d=N("{model}:predictLongRunning",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),s.then(p=>Ul(this.apiClient,p))}else{const c=xs(this.apiClient,e);return d=N("{model}:predictLongRunning",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(p=>p.json()),s.then(p=>vl(this.apiClient,p))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Kl(n,e){const t={},o=a(e,["operationName"]);o!=null&&l(t,["_url","operationName"],o);const i=a(e,["config"]);return i!=null&&l(t,["config"],i),t}function Jl(n,e){const t={},o=a(e,["operationName"]);o!=null&&l(t,["_url","operationName"],o);const i=a(e,["config"]);return i!=null&&l(t,["config"],i),t}function Wl(n,e){const t={},o=a(e,["operationName"]);o!=null&&l(t,["operationName"],o);const i=a(e,["resourceName"]);i!=null&&l(t,["_url","resourceName"],i);const r=a(e,["config"]);return r!=null&&l(t,["config"],r),t}function Yl(n,e){const t={},o=a(e,["video","uri"]);o!=null&&l(t,["uri"],o);const i=a(e,["video","encodedVideo"]);i!=null&&l(t,["videoBytes"],ke(n,i));const r=a(e,["encoding"]);return r!=null&&l(t,["mimeType"],r),t}function Ql(n,e){const t={},o=a(e,["_self"]);return o!=null&&l(t,["video"],Yl(n,o)),t}function Xl(n,e){const t={},o=a(e,["generatedSamples"]);if(o!=null){let s=o;Array.isArray(s)&&(s=s.map(d=>Ql(n,d))),l(t,["generatedVideos"],s)}const i=a(e,["raiMediaFilteredCount"]);i!=null&&l(t,["raiMediaFilteredCount"],i);const r=a(e,["raiMediaFilteredReasons"]);return r!=null&&l(t,["raiMediaFilteredReasons"],r),t}function Zl(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["name"],o);const i=a(e,["metadata"]);i!=null&&l(t,["metadata"],i);const r=a(e,["done"]);r!=null&&l(t,["done"],r);const s=a(e,["error"]);s!=null&&l(t,["error"],s);const d=a(e,["response","generateVideoResponse"]);return d!=null&&l(t,["response"],Xl(n,d)),t}function jl(n,e){const t={},o=a(e,["gcsUri"]);o!=null&&l(t,["uri"],o);const i=a(e,["bytesBase64Encoded"]);i!=null&&l(t,["videoBytes"],ke(n,i));const r=a(e,["mimeType"]);return r!=null&&l(t,["mimeType"],r),t}function ec(n,e){const t={},o=a(e,["_self"]);return o!=null&&l(t,["video"],jl(n,o)),t}function tc(n,e){const t={},o=a(e,["videos"]);if(o!=null){let s=o;Array.isArray(s)&&(s=s.map(d=>ec(n,d))),l(t,["generatedVideos"],s)}const i=a(e,["raiMediaFilteredCount"]);i!=null&&l(t,["raiMediaFilteredCount"],i);const r=a(e,["raiMediaFilteredReasons"]);return r!=null&&l(t,["raiMediaFilteredReasons"],r),t}function No(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["name"],o);const i=a(e,["metadata"]);i!=null&&l(t,["metadata"],i);const r=a(e,["done"]);r!=null&&l(t,["done"],r);const s=a(e,["error"]);s!=null&&l(t,["error"],s);const d=a(e,["response"]);return d!=null&&l(t,["response"],tc(n,d)),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class nc extends ut{constructor(e){super(),this.apiClient=e}async getVideosOperation(e){const t=e.operation,o=e.config;if(t.name===void 0||t.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const i=t.name.split("/operations/")[0];let r;return o&&"httpOptions"in o&&(r=o.httpOptions),this.fetchPredictVideosOperationInternal({operationName:t.name,resourceName:i,config:{httpOptions:r}})}else return this.getVideosOperationInternal({operationName:t.name,config:o})}async getVideosOperationInternal(e){var t,o,i,r;let s,d="",u={};if(this.apiClient.isVertexAI()){const c=Jl(this.apiClient,e);return d=N("{operationName}",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),s.then(p=>No(this.apiClient,p))}else{const c=Kl(this.apiClient,e);return d=N("{operationName}",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(p=>p.json()),s.then(p=>Zl(this.apiClient,p))}}async fetchPredictVideosOperationInternal(e){var t,o;let i,r="",s={};if(this.apiClient.isVertexAI()){const d=Wl(this.apiClient,e);return r=N("{resourceName}:fetchPredictOperation",d._url),s=d._query,delete d.config,delete d._url,delete d._query,i=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(d),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),i.then(u=>No(this.apiClient,u))}else throw new Error("This method is only supported by the Vertex AI.")}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const oc="Content-Type",ic="X-Server-Timeout",rc="User-Agent",ac="x-goog-api-client",sc="0.12.0",lc=`google-genai-sdk/${sc}`,cc="v1beta1",dc="v1beta",Uo=/^data: (.*)(?:\n\n|\r\r|\r\n\r\n)/;class wi extends Error{constructor(e,t){t?super(e,{cause:t}):super(e,{cause:new Error().stack}),this.message=e,this.name="ClientError"}}class dn extends Error{constructor(e,t){t?super(e,{cause:t}):super(e,{cause:new Error().stack}),this.message=e,this.name="ServerError"}}class uc{constructor(e){var t,o;this.clientOptions=Object.assign(Object.assign({},e),{project:e.project,location:e.location,apiKey:e.apiKey,vertexai:e.vertexai});const i={};this.clientOptions.vertexai?(i.apiVersion=(t=this.clientOptions.apiVersion)!==null&&t!==void 0?t:cc,this.getProject()||this.getLocation()?(i.baseUrl=`https://${this.clientOptions.location}-aiplatform.googleapis.com/`,this.clientOptions.apiKey=void 0):(i.baseUrl="https://aiplatform.googleapis.com/",this.clientOptions.project=void 0,this.clientOptions.location=void 0)):(i.apiVersion=(o=this.clientOptions.apiVersion)!==null&&o!==void 0?o:dc,i.baseUrl="https://generativelanguage.googleapis.com/"),i.headers=this.getDefaultHeaders(),this.clientOptions.httpOptions=i,e.httpOptions&&(this.clientOptions.httpOptions=this.patchHttpOptions(i,e.httpOptions))}isVertexAI(){var e;return(e=this.clientOptions.vertexai)!==null&&e!==void 0?e:!1}getProject(){return this.clientOptions.project}getLocation(){return this.clientOptions.location}getApiVersion(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.apiVersion!==void 0)return this.clientOptions.httpOptions.apiVersion;throw new Error("API version is not set.")}getBaseUrl(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.baseUrl!==void 0)return this.clientOptions.httpOptions.baseUrl;throw new Error("Base URL is not set.")}getRequestUrl(){return this.getRequestUrlInternal(this.clientOptions.httpOptions)}getHeaders(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.headers!==void 0)return this.clientOptions.httpOptions.headers;throw new Error("Headers are not set.")}getRequestUrlInternal(e){if(!e||e.baseUrl===void 0||e.apiVersion===void 0)throw new Error("HTTP options are not correctly set.");const o=[e.baseUrl.endsWith("/")?e.baseUrl.slice(0,-1):e.baseUrl];return e.apiVersion&&e.apiVersion!==""&&o.push(e.apiVersion),o.join("/")}getBaseResourcePath(){return`projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`}getApiKey(){return this.clientOptions.apiKey}getWebsocketBaseUrl(){const e=this.getBaseUrl(),t=new URL(e);return t.protocol=t.protocol=="http:"?"ws":"wss",t.toString()}setBaseUrl(e){if(this.clientOptions.httpOptions)this.clientOptions.httpOptions.baseUrl=e;else throw new Error("HTTP options are not correctly set.")}constructUrl(e,t,o){const i=[this.getRequestUrlInternal(t)];return o&&i.push(this.getBaseResourcePath()),e!==""&&i.push(e),new URL(`${i.join("/")}`)}shouldPrependVertexProjectPath(e){return!(this.clientOptions.apiKey||!this.clientOptions.vertexai||e.path.startsWith("projects/")||e.httpMethod==="GET"&&e.path.startsWith("publishers/google/models"))}async request(e){let t=this.clientOptions.httpOptions;e.httpOptions&&(t=this.patchHttpOptions(this.clientOptions.httpOptions,e.httpOptions));const o=this.shouldPrependVertexProjectPath(e),i=this.constructUrl(e.path,t,o);if(e.queryParams)for(const[s,d]of Object.entries(e.queryParams))i.searchParams.append(s,String(d));let r={};if(e.httpMethod==="GET"){if(e.body&&e.body!=="{}")throw new Error("Request body should be empty for GET request, but got non empty request body")}else r.body=e.body;return r=await this.includeExtraHttpOptionsToRequestInit(r,t,e.abortSignal),this.unaryApiCall(i,r,e.httpMethod)}patchHttpOptions(e,t){const o=JSON.parse(JSON.stringify(e));for(const[i,r]of Object.entries(t))typeof r=="object"?o[i]=Object.assign(Object.assign({},o[i]),r):r!==void 0&&(o[i]=r);return o}async requestStream(e){let t=this.clientOptions.httpOptions;e.httpOptions&&(t=this.patchHttpOptions(this.clientOptions.httpOptions,e.httpOptions));const o=this.shouldPrependVertexProjectPath(e),i=this.constructUrl(e.path,t,o);(!i.searchParams.has("alt")||i.searchParams.get("alt")!=="sse")&&i.searchParams.set("alt","sse");let r={};return r.body=e.body,r=await this.includeExtraHttpOptionsToRequestInit(r,t,e.abortSignal),this.streamApiCall(i,r,e.httpMethod)}async includeExtraHttpOptionsToRequestInit(e,t,o){if(t&&t.timeout||o){const i=new AbortController,r=i.signal;t.timeout&&(t==null?void 0:t.timeout)>0&&setTimeout(()=>i.abort(),t.timeout),o&&o.addEventListener("abort",()=>{i.abort()}),e.signal=r}return e.headers=await this.getHeadersInternal(t),e}async unaryApiCall(e,t,o){return this.apiCall(e.toString(),Object.assign(Object.assign({},t),{method:o})).then(async i=>(await Fo(i),new sn(i))).catch(i=>{throw i instanceof Error?i:new Error(JSON.stringify(i))})}async streamApiCall(e,t,o){return this.apiCall(e.toString(),Object.assign(Object.assign({},t),{method:o})).then(async i=>(await Fo(i),this.processStreamResponse(i))).catch(i=>{throw i instanceof Error?i:new Error(JSON.stringify(i))})}processStreamResponse(e){var t;return Lt(this,arguments,function*(){const i=(t=e==null?void 0:e.body)===null||t===void 0?void 0:t.getReader(),r=new TextDecoder("utf-8");if(!i)throw new Error("Response body is empty");try{let s="";for(;;){const{done:d,value:u}=yield ae(i.read());if(d){if(s.trim().length>0)throw new Error("Incomplete JSON segment at the end");break}const c=r.decode(u);try{const f=JSON.parse(c);if("error"in f){const h=JSON.parse(JSON.stringify(f.error)),m=h.status,g=h.code,v=`got status: ${m}. ${JSON.stringify(f)}`;if(g>=400&&g<500)throw new wi(v);if(g>=500&&g<600)throw new dn(v)}}catch(f){const h=f;if(h.name==="ClientError"||h.name==="ServerError")throw f}s+=c;let p=s.match(Uo);for(;p;){const f=p[1];try{const h=new Response(f,{headers:e==null?void 0:e.headers,status:e==null?void 0:e.status,statusText:e==null?void 0:e.statusText});yield yield ae(new sn(h)),s=s.slice(p[0].length),p=s.match(Uo)}catch(h){throw new Error(`exception parsing stream chunk ${f}. ${h}`)}}}}finally{i.releaseLock()}})}async apiCall(e,t){return fetch(e,t).catch(o=>{throw new Error(`exception ${o} sending request`)})}getDefaultHeaders(){const e={},t=lc+" "+this.clientOptions.userAgentExtra;return e[rc]=t,e[ac]=t,e[oc]="application/json",e}async getHeadersInternal(e){const t=new Headers;if(e&&e.headers){for(const[o,i]of Object.entries(e.headers))t.append(o,i);e.timeout&&e.timeout>0&&t.append(ic,String(Math.ceil(e.timeout/1e3)))}return await this.clientOptions.auth.addAuthHeaders(t),t}async uploadFile(e,t){var o;const i={};t!=null&&(i.mimeType=t.mimeType,i.name=t.name,i.displayName=t.displayName),i.name&&!i.name.startsWith("files/")&&(i.name=`files/${i.name}`);const r=this.clientOptions.uploader,s=await r.stat(e);i.sizeBytes=String(s.size);const d=(o=t==null?void 0:t.mimeType)!==null&&o!==void 0?o:s.type;if(d===void 0||d==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");i.mimeType=d;const u=await this.fetchUploadUrl(i,t);return r.upload(e,u,this)}async fetchUploadUrl(e,t){var o;let i={};t!=null&&t.httpOptions?i=t.httpOptions:i={apiVersion:"",headers:{"Content-Type":"application/json","X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${e.sizeBytes}`,"X-Goog-Upload-Header-Content-Type":`${e.mimeType}`}};const r={file:e},s=await this.request({path:N("upload/v1beta/files",r._url),body:JSON.stringify(r),httpMethod:"POST",httpOptions:i});if(!s||!(s!=null&&s.headers))throw new Error("Server did not return an HttpResponse or the returned HttpResponse did not have headers.");const d=(o=s==null?void 0:s.headers)===null||o===void 0?void 0:o["x-goog-upload-url"];if(d===void 0)throw new Error("Failed to get upload url. Server did not return the x-google-upload-url in the headers");return d}}async function Fo(n){var e;if(n===void 0)throw new dn("response is undefined");if(!n.ok){const t=n.status,o=n.statusText;let i;!((e=n.headers.get("content-type"))===null||e===void 0)&&e.includes("application/json")?i=await n.json():i={error:{message:await n.text(),code:n.status,status:n.statusText}};const r=`got status: ${t} ${o}. ${JSON.stringify(i)}`;throw t>=400&&t<500?new wi(r):t>=500&&t<600?new dn(r):new Error(r)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function pc(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["_url","name"],o);const i=a(e,["config"]);return i!=null&&l(t,["config"],i),t}function fc(n,e,t){const o={},i=a(e,["pageSize"]);t!==void 0&&i!=null&&l(t,["_query","pageSize"],i);const r=a(e,["pageToken"]);t!==void 0&&r!=null&&l(t,["_query","pageToken"],r);const s=a(e,["filter"]);return t!==void 0&&s!=null&&l(t,["_query","filter"],s),o}function mc(n,e){const t={},o=a(e,["config"]);return o!=null&&l(t,["config"],fc(n,o,t)),t}function hc(n,e){const t={},o=a(e,["textInput"]);o!=null&&l(t,["textInput"],o);const i=a(e,["output"]);return i!=null&&l(t,["output"],i),t}function gc(n,e){const t={};if(a(e,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");const o=a(e,["examples"]);if(o!=null){let i=o;Array.isArray(i)&&(i=i.map(r=>hc(n,r))),l(t,["examples","examples"],i)}return t}function vc(n,e,t){const o={};if(a(e,["validationDataset"])!==void 0)throw new Error("validationDataset parameter is not supported in Gemini API.");const i=a(e,["tunedModelDisplayName"]);if(t!==void 0&&i!=null&&l(t,["displayName"],i),a(e,["description"])!==void 0)throw new Error("description parameter is not supported in Gemini API.");const r=a(e,["epochCount"]);t!==void 0&&r!=null&&l(t,["tuningTask","hyperparameters","epochCount"],r);const s=a(e,["learningRateMultiplier"]);if(s!=null&&l(o,["tuningTask","hyperparameters","learningRateMultiplier"],s),a(e,["adapterSize"])!==void 0)throw new Error("adapterSize parameter is not supported in Gemini API.");const d=a(e,["batchSize"]);t!==void 0&&d!=null&&l(t,["tuningTask","hyperparameters","batchSize"],d);const u=a(e,["learningRate"]);return t!==void 0&&u!=null&&l(t,["tuningTask","hyperparameters","learningRate"],u),o}function yc(n,e){const t={},o=a(e,["baseModel"]);o!=null&&l(t,["baseModel"],o);const i=a(e,["trainingDataset"]);i!=null&&l(t,["tuningTask","trainingData"],gc(n,i));const r=a(e,["config"]);return r!=null&&l(t,["config"],vc(n,r,t)),t}function bc(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["_url","name"],o);const i=a(e,["config"]);return i!=null&&l(t,["config"],i),t}function $c(n,e,t){const o={},i=a(e,["pageSize"]);t!==void 0&&i!=null&&l(t,["_query","pageSize"],i);const r=a(e,["pageToken"]);t!==void 0&&r!=null&&l(t,["_query","pageToken"],r);const s=a(e,["filter"]);return t!==void 0&&s!=null&&l(t,["_query","filter"],s),o}function _c(n,e){const t={},o=a(e,["config"]);return o!=null&&l(t,["config"],$c(n,o,t)),t}function Cc(n,e,t){const o={},i=a(e,["gcsUri"]);if(t!==void 0&&i!=null&&l(t,["supervisedTuningSpec","trainingDatasetUri"],i),a(e,["examples"])!==void 0)throw new Error("examples parameter is not supported in Vertex AI.");return o}function wc(n,e){const t={},o=a(e,["gcsUri"]);return o!=null&&l(t,["validationDatasetUri"],o),t}function Tc(n,e,t){const o={},i=a(e,["validationDataset"]);t!==void 0&&i!=null&&l(t,["supervisedTuningSpec"],wc(n,i));const r=a(e,["tunedModelDisplayName"]);t!==void 0&&r!=null&&l(t,["tunedModelDisplayName"],r);const s=a(e,["description"]);t!==void 0&&s!=null&&l(t,["description"],s);const d=a(e,["epochCount"]);t!==void 0&&d!=null&&l(t,["supervisedTuningSpec","hyperParameters","epochCount"],d);const u=a(e,["learningRateMultiplier"]);t!==void 0&&u!=null&&l(t,["supervisedTuningSpec","hyperParameters","learningRateMultiplier"],u);const c=a(e,["adapterSize"]);if(t!==void 0&&c!=null&&l(t,["supervisedTuningSpec","hyperParameters","adapterSize"],c),a(e,["batchSize"])!==void 0)throw new Error("batchSize parameter is not supported in Vertex AI.");if(a(e,["learningRate"])!==void 0)throw new Error("learningRate parameter is not supported in Vertex AI.");return o}function Ic(n,e){const t={},o=a(e,["baseModel"]);o!=null&&l(t,["baseModel"],o);const i=a(e,["trainingDataset"]);i!=null&&l(t,["supervisedTuningSpec","trainingDatasetUri"],Cc(n,i,t));const r=a(e,["config"]);return r!=null&&l(t,["config"],Tc(n,r,t)),t}function Ec(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["model"],o);const i=a(e,["name"]);return i!=null&&l(t,["endpoint"],i),t}function Ti(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["name"],o);const i=a(e,["state"]);i!=null&&l(t,["state"],vi(n,i));const r=a(e,["createTime"]);r!=null&&l(t,["createTime"],r);const s=a(e,["tuningTask","startTime"]);s!=null&&l(t,["startTime"],s);const d=a(e,["tuningTask","completeTime"]);d!=null&&l(t,["endTime"],d);const u=a(e,["updateTime"]);u!=null&&l(t,["updateTime"],u);const c=a(e,["description"]);c!=null&&l(t,["description"],c);const p=a(e,["baseModel"]);p!=null&&l(t,["baseModel"],p);const f=a(e,["_self"]);f!=null&&l(t,["tunedModel"],Ec(n,f));const h=a(e,["distillationSpec"]);h!=null&&l(t,["distillationSpec"],h);const m=a(e,["experiment"]);m!=null&&l(t,["experiment"],m);const g=a(e,["labels"]);g!=null&&l(t,["labels"],g);const v=a(e,["pipelineJob"]);v!=null&&l(t,["pipelineJob"],v);const b=a(e,["tunedModelDisplayName"]);return b!=null&&l(t,["tunedModelDisplayName"],b),t}function xc(n,e){const t={},o=a(e,["nextPageToken"]);o!=null&&l(t,["nextPageToken"],o);const i=a(e,["tunedModels"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(s=>Ti(n,s))),l(t,["tuningJobs"],r)}return t}function kc(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["name"],o);const i=a(e,["metadata"]);i!=null&&l(t,["metadata"],i);const r=a(e,["done"]);r!=null&&l(t,["done"],r);const s=a(e,["error"]);return s!=null&&l(t,["error"],s),t}function Ac(n,e){const t={},o=a(e,["model"]);o!=null&&l(t,["model"],o);const i=a(e,["endpoint"]);return i!=null&&l(t,["endpoint"],i),t}function un(n,e){const t={},o=a(e,["name"]);o!=null&&l(t,["name"],o);const i=a(e,["state"]);i!=null&&l(t,["state"],vi(n,i));const r=a(e,["createTime"]);r!=null&&l(t,["createTime"],r);const s=a(e,["startTime"]);s!=null&&l(t,["startTime"],s);const d=a(e,["endTime"]);d!=null&&l(t,["endTime"],d);const u=a(e,["updateTime"]);u!=null&&l(t,["updateTime"],u);const c=a(e,["error"]);c!=null&&l(t,["error"],c);const p=a(e,["description"]);p!=null&&l(t,["description"],p);const f=a(e,["baseModel"]);f!=null&&l(t,["baseModel"],f);const h=a(e,["tunedModel"]);h!=null&&l(t,["tunedModel"],Ac(n,h));const m=a(e,["supervisedTuningSpec"]);m!=null&&l(t,["supervisedTuningSpec"],m);const g=a(e,["tuningDataStats"]);g!=null&&l(t,["tuningDataStats"],g);const v=a(e,["encryptionSpec"]);v!=null&&l(t,["encryptionSpec"],v);const b=a(e,["partnerModelTuningSpec"]);b!=null&&l(t,["partnerModelTuningSpec"],b);const $=a(e,["distillationSpec"]);$!=null&&l(t,["distillationSpec"],$);const C=a(e,["experiment"]);C!=null&&l(t,["experiment"],C);const x=a(e,["labels"]);x!=null&&l(t,["labels"],x);const w=a(e,["pipelineJob"]);w!=null&&l(t,["pipelineJob"],w);const y=a(e,["tunedModelDisplayName"]);return y!=null&&l(t,["tunedModelDisplayName"],y),t}function Sc(n,e){const t={},o=a(e,["nextPageToken"]);o!=null&&l(t,["nextPageToken"],o);const i=a(e,["tuningJobs"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(s=>un(n,s))),l(t,["tuningJobs"],r)}return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Pc extends ut{constructor(e){super(),this.apiClient=e,this.get=async t=>await this.getInternal(t),this.list=async(t={})=>new wn(lt.PAGED_ITEM_TUNING_JOBS,o=>this.listInternal(o),await this.listInternal(t),t),this.tune=async t=>{if(this.apiClient.isVertexAI())return await this.tuneInternal(t);{const o=await this.tuneMldevInternal(t);let i="";return o.metadata!==void 0&&o.metadata.tunedModel!==void 0?i=o.metadata.tunedModel:o.name!==void 0&&o.name.includes("/operations/")&&(i=o.name.split("/operations/")[0]),{name:i,state:an.JOB_STATE_QUEUED}}}}async getInternal(e){var t,o,i,r;let s,d="",u={};if(this.apiClient.isVertexAI()){const c=bc(this.apiClient,e);return d=N("{name}",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),s.then(p=>un(this.apiClient,p))}else{const c=pc(this.apiClient,e);return d=N("{name}",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(p=>p.json()),s.then(p=>Ti(this.apiClient,p))}}async listInternal(e){var t,o,i,r;let s,d="",u={};if(this.apiClient.isVertexAI()){const c=_c(this.apiClient,e);return d=N("tuningJobs",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),s.then(p=>{const f=Sc(this.apiClient,p),h=new wo;return Object.assign(h,f),h})}else{const c=mc(this.apiClient,e);return d=N("tunedModels",c._url),u=c._query,delete c.config,delete c._url,delete c._query,s=this.apiClient.request({path:d,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(p=>p.json()),s.then(p=>{const f=xc(this.apiClient,p),h=new wo;return Object.assign(h,f),h})}}async tuneInternal(e){var t,o;let i,r="",s={};if(this.apiClient.isVertexAI()){const d=Ic(this.apiClient,e);return r=N("tuningJobs",d._url),s=d._query,delete d.config,delete d._url,delete d._query,i=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(d),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),i.then(u=>un(this.apiClient,u))}else throw new Error("This method is only supported by the Vertex AI.")}async tuneMldevInternal(e){var t,o;let i,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const d=yc(this.apiClient,e);return r=N("tunedModels",d._url),s=d._query,delete d.config,delete d._url,delete d._query,i=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(d),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),i.then(u=>kc(this.apiClient,u))}}}const Rc=1024*1024*8;async function Mc(n,e,t){var o,i;let r=0,s=0,d=new sn(new Response),u="upload";for(r=n.size;s<r;){const p=Math.min(Rc,r-s),f=n.slice(s,s+p);if(s+p>=r&&(u+=", finalize"),d=await t.request({path:"",body:f,httpMethod:"POST",httpOptions:{apiVersion:"",baseUrl:e,headers:{"X-Goog-Upload-Command":u,"X-Goog-Upload-Offset":String(s),"Content-Length":String(p)}}}),s+=p,((o=d==null?void 0:d.headers)===null||o===void 0?void 0:o["x-goog-upload-status"])!=="active")break;if(r<=s)throw new Error("All content has been uploaded, but the upload status is not finalized.")}const c=await(d==null?void 0:d.json());if(((i=d==null?void 0:d.headers)===null||i===void 0?void 0:i["x-goog-upload-status"])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");return c.file}async function Dc(n){return{size:n.size,type:n.type}}class Lc{async upload(e,t,o){if(typeof e=="string")throw new Error("File path is not supported in browser uploader.");return await Mc(e,t,o)}async stat(e){if(typeof e=="string")throw new Error("File path is not supported in browser uploader.");return await Dc(e)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Nc{create(e,t,o){return new Uc(e,t,o)}}class Uc{constructor(e,t,o){this.url=e,this.headers=t,this.callbacks=o}connect(){this.ws=new WebSocket(this.url),this.ws.onopen=this.callbacks.onopen,this.ws.onerror=this.callbacks.onerror,this.ws.onclose=this.callbacks.onclose,this.ws.onmessage=this.callbacks.onmessage}send(e){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.send(e)}close(){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.close()}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Go="x-goog-api-key";class Fc{constructor(e){this.apiKey=e}async addAuthHeaders(e){e.get(Go)===null&&e.append(Go,this.apiKey)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Gc="gl-node/";class Ge{constructor(e){var t;if(e.apiKey==null)throw new Error("An API Key must be set when running in a browser");if(e.project||e.location)throw new Error("Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.");this.vertexai=(t=e.vertexai)!==null&&t!==void 0?t:!1,this.apiKey=e.apiKey;const o=Yi(e,void 0,void 0);o&&(e.httpOptions?e.httpOptions.baseUrl=o:e.httpOptions={baseUrl:o}),this.apiVersion=e.apiVersion;const i=new Fc(this.apiKey);this.apiClient=new uc({auth:i,apiVersion:this.apiVersion,apiKey:this.apiKey,vertexai:this.vertexai,httpOptions:e.httpOptions,userAgentExtra:Gc+"web",uploader:new Lc}),this.models=new Ol(this.apiClient),this.live=new Vl(this.apiClient,i,new Nc),this.chats=new Br(this.models,this.apiClient),this.caches=new Ur(this.apiClient),this.files=new ea(this.apiClient),this.operations=new nc(this.apiClient),this.tunings=new Pc(this.apiClient)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Ue=n=>n.split(",")[0].split(":")[1].split(";")[0],Qe=()=>{const n=localStorage.getItem("gemini_api_key");if(n&&n.trim()!=="")return n;throw new Error("មិនមាន API Key ត្រឹមត្រូវ។ សូមចូលទៅកាន់ផ្ទាំងការកំណត់ ដើម្បីបន្ថែម ឬពិនិត្យមើល API Key របស់អ្នកឡើងវិញ។")},X=async(n,e,t,o)=>{var f;const i=Qe(),r=3;let s=null;const d=localStorage.getItem("model_tier")||"standard";let u="gemini-2.5-flash-image",c={...o};d==="pro"&&(u="gemini-3.1-flash-image-preview",c.imageConfig={...c.imageConfig||{},imageSize:"1K",aspectRatio:((f=c.imageConfig)==null?void 0:f.aspectRatio)||"1:1"});const p=[];e&&p.push({inlineData:{data:e.split(",")[1],mimeType:Ue(e)}}),p.push({text:n}),t&&t.length>0&&t.forEach(h=>{p.push({inlineData:{data:h.split(",")[1],mimeType:Ue(h)}})});for(let h=0;h<r;h++)try{console.log(`[callGeminiAPI] Attempt ${h+1}/${r} using model: ${u}`);const g=await new Ge({apiKey:i}).models.generateContent({model:u,contents:{parts:p},config:c});if(g.candidates&&g.candidates.length>0){const v=g.candidates[0];if(v.content&&Array.isArray(v.content.parts)){const b=v.content.parts.find($=>$.inlineData);if(b&&b.inlineData)return`data:image/png;base64,${b.inlineData.data}`}}throw new Error("No image was generated via SDK")}catch(m){if(s=m,h<r-1){const g=Math.pow(2,h)*1e3+Math.random()*1e3,v=m.message||"";v.includes("429")||/rate limit/i.test(v)||/resource exhausted/i.test(v)?console.log(`Rate limit hit. Retrying in ${Math.ceil(g/1e3)}s... (${h+1}/${r})`):console.log(`API call failed. Retrying in ${Math.ceil(g/1e3)}s... (${h+1}/${r})`),await new Promise(b=>setTimeout(b,g))}}throw s||new Error("All retry attempts failed")},Vc=async n=>{if(!n.trim())return{success:!1,message:"API key មិនអាចទុកទំនេរបានទេ។",type:"error"};try{if((await new Ge({apiKey:n}).models.generateContent({model:"gemini-3-flash-preview",contents:"Hi"})).text)return{success:!0,message:"Key ត្រឹមត្រូវ និងដំណើរការ!",type:"success"};throw new Error("ការឆ្លើយតប API មិនត្រឹមត្រូវ។")}catch(e){const t=e.message;return console.error("API Key Test Error:",t),t.includes("API key not valid")?{success:!1,message:"មិនមាន API Key ត្រឹមត្រូវ។ សូមពិនិត្យមើល API Key របស់អ្នកឡើងវិញ។",type:"error"}:t.includes("quota")||t.includes("rate limit")?{success:!0,message:"Key ត្រឹមត្រូវ ប៉ុន្តែបានដល់កម្រិតកំណត់នៃការប្រើប្រាស់ហើយ។",type:"warning"}:{success:!1,message:`មានកំហុសបានកើតឡើង: ${t}`,type:"error"}}};async function Bc(n){var r;const e=Qe(),t=new Ge({apiKey:e}),o={inlineData:{data:n.split(",")[1],mimeType:Ue(n)}},i="Analyze this old photo. Determine if it needs colorization (is black and white or sepia), high-quality enhancement (is blurry or low resolution), hair redraw (hair is unclear), clothing redraw (clothing is damaged), and background sharpening (background is blurry). Your output MUST be a valid JSON object.";try{const d=((r=(await t.models.generateContent({model:"gemini-3-flash-preview",contents:{parts:[o,{text:i}]},config:{responseMimeType:"application/json",responseSchema:{type:U.OBJECT,properties:{colorize:{type:U.BOOLEAN,description:"True if the image is black and white or sepia and needs colorization."},highQuality:{type:U.BOOLEAN,description:"True if the image is blurry, has low resolution, or has significant noise."},redrawHair:{type:U.BOOLEAN,description:"True if the hair is poorly defined, damaged, or needs to be redrawn."},redrawClothing:{type:U.BOOLEAN,description:"True if clothing is damaged or indistinct."},sharpenBackground:{type:U.BOOLEAN,description:"True if the background is blurry and should be sharpened."}}}}})).text)==null?void 0:r.trim())||"{}",u=JSON.parse(d),c={};return typeof u.colorize=="boolean"&&(c.colorize=u.colorize),typeof u.highQuality=="boolean"&&(c.highQuality=u.highQuality),typeof u.redrawHair=="boolean"&&(c.redrawHair=u.redrawHair),typeof u.redrawClothing=="boolean"&&(c.redrawClothing=u.redrawClothing),typeof u.sharpenBackground=="boolean"&&(c.sharpenBackground=u.sharpenBackground),c}catch(s){throw console.error("Error in analyzeImageForRestoration:",s),new Error("មិនអាចវិភាគរូបថតបានទេ។ សូមព្យាយាមម្តងទៀត។")}}async function Hc(n){const e=Qe(),t=new Ge({apiKey:e}),o={inlineData:{data:n.split(",")[1],mimeType:Ue(n)}},i="Briefly describe this old photograph in Khmer, focusing on details relevant for photo restoration. For example, describe the subject, their clothing, the background, and any visible damage like scratches, spots, or fading. Keep the description concise, suitable for an advanced prompt field.";try{return(await t.models.generateContent({model:"gemini-3-flash-preview",contents:{parts:[o,{text:i}]}})).text||""}catch(r){throw console.error("Error in describeImageForRestoration:",r),new Error("មិនអាចបង្កើតការពិពណ៌នាបានទេ។ សូមព្យាយាមម្តងទៀត។")}}function pn(n,e){const t=["Generate an ultra-high-resolution, professional ID photo with a 3:4 aspect ratio and crystal-clear quality. The subject must be centered, facing forward, with even, studio-quality lighting and photorealistic skin texture. The image must have sharp details and be free of any blur or digital artifacts.","Critically, maintain the original framing of the subject from the source image. If the source image is a headshot, the result must also be a headshot. If it shows half the body, the result must also show half the body. Do not invent or add body parts that are not visible in the original photo.","Crucially, preserve the subject's original facial features, structure, and identity. Do not alter their ethnicity, age, or key characteristics."],o=e.gender==="nu"?"female":"male",i={"nguoi-lon":"an adult","thanh-nien":"a young adult","tre-em":"a child"}[e.ageGroup];t.push(`The subject is ${i} ${o}.`);const r={xanh:"solid light blue (#E0E8F0)",trang:"solid pure white (#FFFFFF)",xam:"solid light gray (#D3D3D3)","xanh-dam":"solid bright royal blue (#0055FF)"}[e.background];t.push(`The background must be a ${r}.`),e.hairStyle&&t.push(`Hairstyle: ${e.hairStyle}.`),e.beautifySkin&&t.push(`Apply natural skin beautification: remove blemishes and smooth skin at an intensity of ${e.beautifyLevel}%. The result must look realistic, not artificial.`);const s=e.brightnessLevel-50;s>5?t.push(`Subtly increase skin brightness by ${s}%.`):s<-5&&t.push(`Subtly decrease skin brightness by ${-s}%.`),e.customPrompt.trim()&&t.push(`Additional user request: "${e.customPrompt.trim()}".`);let d;e.customClothingImage?(t.push("You MUST dress the subject in the clothing provided in the second image. The second image is SOLELY a reference for the clothing. Perfectly adapt the clothing to the subject's body and pose, ensuring a natural and photorealistic fit. Do not use the clothing from the original photo."),d=[e.customClothingImage]):e.clothing?t.push(`Clothing: ${e.clothing}.`):t.push("Keep the original clothing from the photo.");const u=t.join(" ");return X(u,n,d)}function fn(n,e){const o=[e.customPrompt&&e.customPrompt.trim()!==""?e.customPrompt:"You are an expert AI photo restoration artist. Restore the provided old photo to an absolutely photorealistic standard, preserving the original aspect ratio and the subject's core identity and facial structure. Reconstruct fine details like skin pores and hair strands with maximum precision."];e.colorize&&o.push("Colorize the photo with extremely realistic and natural colors."),e.highQuality&&o.push("Enhance the resolution to modern standards, remove all digital noise, and improve clarity to a professional, high-quality level."),e.redrawHair&&o.push("Meticulously redraw the hair, ensuring every strand is clear, detailed, and naturally styled."),e.sharpenBackground&&o.push("Enhance and sharpen the background details to match the quality of the foreground subject."),e.adhereToFace&&o.push("Pay critical attention to preserving the exact facial details, structure, and unique characteristics of the person."),e.sharpenWrinkles&&o.push("Subtly enhance the natural lines and wrinkles on the face to add character and realism, without making the person look older."),e.isVietnamese&&o.push("The subject is Vietnamese; ensure the restored features are culturally and ethnically appropriate."),e.redrawClothing&&o.push("Redraw the clothing with realistic fabric textures and details, ensuring it is period-appropriate if applicable."),e.gender!=="auto"&&o.push(`The subject is identified as ${e.gender}.`),e.age!=="auto"&&o.push(`The subject's approximate age is ${e.age}.`),e.smile!=="auto"&&(e.smile==="none"?o.push("Ensure the subject has a neutral expression."):e.smile==="slight"&&o.push("Introduce a subtle, slight, closed-mouth smile.")),e.advancedPrompt&&o.push(`Follow this specific user instruction: "${e.advancedPrompt}".`);const i=o.join(" ");return X(i,n)}function qc(n,e){const t=["You are an expert AI document restoration specialist. Your task is to restore the provided image of an old document to a clean, legible, and high-quality state. Preserve the original aspect ratio.","Crucially, you must NOT invent or hallucinate any text or details that are not visibly present or reasonably inferred from the damaged original. The goal is restoration, not fabrication."];e.straighten&&t.push("Straighten and de-skew the document so that its edges are perfectly rectangular, as if it were scanned flat."),e.removeStains&&t.push("Remove all stains, water damage, mold, foxing (yellow/brown spots), and other discoloration from the paper background. The background should be clean and uniform in color."),e.flattenCreases&&t.push("Digitally flatten all creases, folds, and tears. The paper should appear smooth."),e.enhanceText&&t.push("Enhance the contrast and sharpness of all text, handwriting, and official stamps to make them crisp and highly legible. Reconstruct faded or blurred characters carefully."),e.restoreColors&&t.push("Restore any faded colors in stamps, letterheads, or colored text to their original vibrancy."),e.outputStyle==="new"?t.push("The final output should look like a brand new, pristine version of the original document."):e.outputStyle==="vintage"?t.push("The final output should retain a vintage feel, with clean paper but preserving the character of aged ink and classic typography. Do not make it brand new and sterile."):e.outputStyle==="preserve"&&t.push("Your primary goal is maximum preservation. Perform the selected restoration tasks with the absolute minimum necessary changes to maintain the original document's character, texture, paper grain, and inherent details. The result should feel authentic and carefully preserved, not heavily altered or modernized."),e.customPrompt.trim()&&t.push(`Follow this specific user instruction: "${e.customPrompt.trim()}".`),t.push("The output must be only the final, high-resolution restored document image.");const o=t.join(" ");return X(o,n)}async function zc(n){const e=Qe(),t=new Ge({apiKey:e}),o={inlineData:{data:n.split(",")[1],mimeType:Ue(n)}},i='Briefly describe this old document in Khmer. Focus on its condition and content type, suitable for a restoration prompt. Mention any visible damage like stains, tears, creases, faded text, or mold. For example: "នេះគឺជាវិញ្ញាបនបត្រចាស់ដែលប្រឡាក់លឿងខ្លាំង មានផ្នត់ច្រើន និងមានអក្សរសរសេរដៃដែលព្រាល។" Keep the description concise.';try{return(await t.models.generateContent({model:"gemini-3-flash-preview",contents:{parts:[o,{text:i}]}})).text||""}catch(r){throw console.error("Error in describeDocumentForRestoration:",r),new Error("មិនអាចបង្កើតការពិពណ៌នាសម្រាប់ឯកសារបានទេ។ សូមព្យាយាមម្តងទៀត។")}}function Oc(n,e,t){const o=["You are a professional AI fashion designer and virtual try-on specialist.","Your task is to take the person from the first image (the model) and realistically dress them in the clothing from the second image (the outfit).","CRITICAL: The model's face, identity, body shape, and pose from the first image must be perfectly preserved. The outfit from the second image must be adapted to fit the model's body and pose naturally.","The final image should be a photorealistic, high-fashion photograph.",`The final image must have a ${t.aspectRatio} aspect ratio.`];t.prompt&&o.push(`Main concept: "${t.prompt}"`),t.cameraAngle&&t.cameraAngle!=="ស្វ័យប្រវត្តិ"&&o.push(`Camera Angle: ${t.cameraAngle}.`),t.style&&t.style!=="ស្វ័យប្រវត្តិ"&&o.push(`Artistic Style: ${t.style}.`),t.colorPalette&&t.colorPalette!=="ស្វ័យប្រវត្តិ"&&o.push(`Color Palette: ${t.colorPalette}.`),t.lighting&&t.lighting!=="ស្វ័យប្រវត្តិ"&&o.push(`Lighting: ${t.lighting}.`),t.skinTone&&t.skinTone!=="ស្វ័យប្រវត្តិ"&&o.push(`Ensure the model's skin tone is ${t.skinTone}.`),t.lens&&t.lens!=="ស្វ័យប្រវត្តិ"&&o.push(`Shot with a ${t.lens} lens effect.`);const i=o.join(" "),r={},s=parseInt(t.seed,10);return isNaN(s)||(r.seed=s),X(i,n,[e],r)}function Kc(n,e){const t=["// INSTRUCTION: You are a hyper-realistic virtual try-on AI. Your sole task is to change the clothing on the person in the primary input image.","// PRESERVATION RULES (MANDATORY):","// 1. IDENTITY & FACE: The subject's face, facial expression, hair, and all identifying features MUST remain UNCHANGED. This is the most critical rule.","// 3. BACKGROUND: The background and all environmental elements MUST remain identical to the original image. DO NOT alter, add, or remove anything from the background.","// 4. LIGHTING & SHADOWS: The new clothing must realistically integrate with the original scene's lighting. This includes matching the light direction, color temperature, and casting accurate shadows on the body and receiving shadows from the environment."];if(e.poseOption==="keep"?t.push("// 2. BODY & POSE: The subject's body shape, proportions, and pose MUST be perfectly preserved."):t.push("// 2. BODY & POSE: The subject's body shape and proportions MUST be perfectly preserved. You have creative freedom to slightly and naturally change the subject's pose to better suit the new clothing, but the change must be subtle and realistic."),t.push("// --- Subject Details ---"),t.push(`The image contains ${e.numberOfPeople==="one"?"one person":e.numberOfPeople==="two"?"two people":"multiple people"}. Apply the clothing change to the main subject(s).`),e.sharpenSubject&&t.push("Apply a professional sharpening pass to the main subject(s) to make them stand out, but keep the background as is."),e.lightingEffect!=="none"){const r=e.lightingEffect.includes("left")?"from the left":"from the right",s=e.lightingEffect.includes("strong")?"strong":"soft";t.push(`Lighting Integration: Integrate the new clothing with a realistic ${s} key light source coming ${r}.`)}t.push(`Ambient Lighting: Blend the environmental light from the original background onto the new clothing with an intensity of ${e.lightingIntensity}%. This includes realistic color casting and light wrapping.`);let o;if(!e.clothingImage&&!e.clothingPrompt.trim())return Promise.reject(new Error("សូមផ្តល់រូបថតសម្លៀកបំពាក់ ឬការពិពណ៌នាជាអត្ថបទ។"));t.push("// CLOTHING TASK:"),e.clothingImage&&(t.push("// - PRIMARY GOAL: Use the provided second image (the clothing reference) as the main source for the new outfit.","// - FITTING INSTRUCTIONS: Meticulously adapt the clothing from the reference image onto the model's body. The fit must be natural, respecting the model's pose and body contours. Re-render the fabric's texture, folds, and drapes to look completely realistic in the new context."),o=[e.clothingImage]),e.clothingPrompt.trim()&&(e.clothingImage?t.push(`// - ADDITIONAL DETAILS: While using the reference image, also incorporate these details from the text description: "${e.clothingPrompt.trim()}". Use the description to modify or clarify aspects of the clothing reference (e.g., change color, add a detail).`):t.push("// - GOAL: Dress the person based on the following text description.",`// - DESCRIPTION: "${e.clothingPrompt.trim()}".`,"// - FITTING INSTRUCTIONS: Generate the described clothing realistically onto the model's body. The fabric, texture, folds, and fit must appear natural and photorealistic, conforming to the model's pose.")),t.push("// FINAL OUTPUT: The output MUST be a single, photorealistic image showing the person with the new clothing, following all preservation rules.");const i=t.join(`
`);return X(i,n,o)}const pt=(n,e)=>{const t=`
    Your task is to upscale the provided image to a photorealistic ${e} resolution, emulating the quality of a state-of-the-art AI upscaler like Real-ESRGAN. This is a technical restoration and enhancement task, not a creative one.

    CRITICAL INSTRUCTIONS:
    1.  **DO NOT CHANGE CONTENT OR IDENTITY:** The subject, composition, colors, lighting, and especially the facial features and identity of any person in the image must be perfectly preserved. Do not alter the original content in any way.
    2.  **RESTORE & ENHANCE DETAILS:** Your primary goal is to enhance sharpness and restore fine, realistic details. Focus on textures like skin pores, hair strands, fabric weaves, and environmental details.
    3.  **REMOVE ARTIFACTS:** Clean up any compression artifacts, digital noise, and blur from the original image.
    4.  **NATURAL & PHOTOREALISTIC OUTPUT:** The final image must be crystal-clear and sharp, but it must look natural and photorealistic. Avoid creating an artificial, over-sharpened, or 'plastic' look. The result should feel like a higher-resolution photograph, not a digital painting.
    5.  **ADVANCED SHARPENING:** Increase the image's sharpness using edge-aware sharpening techniques to make details pop without creating halos or artifacts.

    The output must be the final upscaled image only.`;return X(t,n)},Jc=(n,e)=>{const t=["Subtly correct facial asymmetry in this portrait. Preserve the person's identity. The result must be extremely realistic and natural-looking. Apply the following adjustments:"],o=Object.entries(e.adjustments).filter(([,i])=>i.enabled).map(([i,r])=>`${i.replace(/([A-Z])/g," $1").toLowerCase()} at ${r.intensity}% intensity`);return o.length===0?Promise.resolve(n):(t.push(...o),X(t.join(", "),n))},Wc=(n,e)=>X(e,n),mn=(n,e)=>{const t=["You are a world-class AI photo editor. Your task is to replace the background of the provided image. Adhere strictly to these parameters:",`// --- Camera & Quality ---
        camera_emulation {
            brand_model: Phase One XF IQ4 150MP,
            lens: Schneider Kreuznach 80mm LS f2.8,
            medium_format: true,
            look: ultimate sharpness, maximum dynamic range, medium format 3D pop, cinematic rendering
        }`,`// --- Subject Integrity ---
        subject_constraints {
            keep_identity: true,
            lock_features: [eyes,nose,lips,eyebrows,jawline,face_shape,ears,hairline],
            expression_policy: preserve_original
        }`,`// --- Composition ---
        composition {
            framing: three-quarter body (from mid-thigh up),
            orientation: portrait,
            crop_policy: do_not_crop_face_or_hands,
            keep_pose: ${e.poseOption==="keep"},
            zoom: slight zoom-out for wider context
        }`,`// --- Scene Details ---
        The image contains ${e.numberOfPeople==="one"?"one person":e.numberOfPeople==="two"?"two people":"multiple people"}. Ensure all subjects are perfectly preserved and extracted.`];if(e.prompt.trim()?t.push(`New Background Description: "${e.prompt.trim()}".`):e.referenceImage&&t.push("Use the provided reference image to create a new background that matches its style, lighting, and environment."),e.sharpenSubject&&t.push("Apply an additional professional sharpening pass to the main subject(s) to make them stand out."),t.push(`// --- Advanced Sharpening ---
Increase the overall image sharpness using edge-aware sharpening techniques to make all details pop without creating halos or artifacts.`),e.lightingEffect!=="none"){const r=e.lightingEffect.includes("left")?"from the left":"from the right",s=e.lightingEffect.includes("strong")?"strong":"soft";t.push(`Lighting Integration: Integrate the subject with a realistic ${s} key light source coming ${r}.`)}t.push(`Ambient Lighting: Blend the environmental light from the new background onto the subject with an intensity of ${e.lightingIntensity}%. This includes realistic color casting and light wrapping.`),t.push("The output must be only the final, high-resolution image.");const o=t.join(`
`),i=e.referenceImage?[e.referenceImage]:void 0;return X(o,n,i)},Yc=n=>{if(!n.productImage)return Promise.reject(new Error("Product image is required."));const e=["Create a realistic product mockup. The main focus is the product from the first image."];let t=n.productImage,o=[];n.characterImage?(e.push("The person in the second image should be holding or interacting with the product."),o.push(n.characterImage)):n.characterPrompt.trim()&&e.push(`A character described as "${n.characterPrompt.trim()}" should be holding or interacting with the product.`),n.scenePrompt.trim()&&e.push(`The scene is: "${n.scenePrompt.trim()}".`);const i=e.join(" ");return X(i,t,o)},hn=(n,e)=>{const t=["Clean the background of this image without altering the main subject."];return e.removeObjects&&t.push("Remove any distracting objects or people from the background."),e.evenColor&&t.push("Make the background color smooth and even, removing shadows or gradients."),e.denoise&&t.push("Apply denoising to the background to remove grain."),e.sharpen&&t.push("Slightly sharpen the background details."),e.customPrompt.trim()&&t.push(`Additional instructions: "${e.customPrompt.trim()}".`),X(t.join(" "),n)},Qc=(n,e)=>{const t=["Apply the following image filters to the person in the photo, maintaining their identity:"];return e.smoothSkin&&t.push("smooth skin"),e.smartPortrait&&t.push("apply smart portrait enhancements (like studio lighting)"),e.makeupTransfer&&t.push("apply subtle, natural makeup"),e.styleTransfer&&t.push("apply a creative artistic style transfer"),e.colorize&&t.push("colorize the image"),e.superResolution&&t.push("enhance to super resolution"),e.removeJpegArtifacts&&t.push("remove JPEG artifacts"),e.denoise&&t.push("apply denoising"),e.happiness!==0&&t.push(`adjust happiness by ${e.happiness}%`),e.surprise!==0&&t.push(`adjust surprise by ${e.surprise}%`),e.anger!==0&&t.push(`adjust anger by ${e.anger}%`),e.age!==0&&t.push(`adjust age by ${e.age} years`),e.hairThickness!==0&&t.push(`adjust hair thickness by ${e.hairThickness}%`),t.length===1?Promise.resolve(n):X(t.join(", "),n)},Xc=(n,e,t,o)=>{const i=`Create a photorealistic wedding photo. The bride's face MUST match the first image. The groom's face MUST match the second image. The scene and concept is: "${t}". Additional user request: "${o}".`;return X(i,n,[e])},Zc=(n,e)=>X(e,n),jc=(n,e)=>{const t=["In the main group photo (first image), replace faces based on the following instructions. Use the provided portrait images for the new faces. It is critical to maintain the original bodies, poses, and background."],o=e.map(i=>i.image);return e.forEach((i,r)=>{t.push(`For the person described as "${i.description}", use the face from portrait image #${r+2}.`)}),X(t.join(" "),n,o)},ed=(n,e)=>{const t=`Apply a color grade to this image based on the following instruction, without changing the image content: "${e}"`;return X(t,n)},td=n=>X("Adjust the person's head in this portrait so they are looking directly forward at the camera. Maintain a natural pose and preserve their identity. The result must be photorealistic.",n),nd=(n,e)=>{const t=`Subtly and realistically remove wrinkles from the ${e.targetArea} in this image. The result should look natural, not overly smoothed or artificial. Preserve the original skin or fabric texture.`;return X(t,n)},Vo=(n,e)=>{const t=["Perform a professional color correction on this image. Apply the following adjustments with values from -100 to 100:"];e.exposure!==0&&t.push(`exposure: ${e.exposure}`),e.contrast!==0&&t.push(`contrast: ${e.contrast}`),e.highlights!==0&&t.push(`highlights: ${e.highlights}`),e.shadows!==0&&t.push(`shadows: ${e.shadows}`),e.whites!==0&&t.push(`whites: ${e.whites}`),e.blacks!==0&&t.push(`blacks: ${e.blacks}`);const o=i=>{const r=[];for(const s in e[i]){const d=e[i][s];d!==0&&r.push(`${s.replace(/s$/,"")} ${d}`)}r.length>0&&t.push(`${i}: ${r.join(", ")}`)};return o("hue"),o("saturation"),o("luminance"),t.length===1?Promise.resolve(n):X(t.join("; "),n)};async function od(n){const e=Qe(),t=new Ge({apiKey:e}),o={inlineData:{data:n.split(",")[1],mimeType:Ue(n)}},i="Describe this image in extreme detail. Focus on the subject, style, lighting, composition, colors, and mood. The goal is to create a prompt that could be used to generate a similar image. Provide the description in English, as it will be used for AI generation.";try{return(await t.models.generateContent({model:"gemini-3-flash-preview",contents:{parts:[o,{text:i}]}})).text||""}catch(r){throw console.error("Error in describeImage:",r),new Error("មិនអាចបង្កើតការពិពណ៌នាសម្រាប់រូបភាពបានទេ។ សូមព្យាយាមម្តងទៀត។")}}const id=async n=>{var r;const e=Qe(),t=new Ge({apiKey:e}),o={inlineData:{data:n.split(",")[1],mimeType:Ue(n)}},i="Analyze this image's lighting and color balance. Suggest adjustments for exposure, contrast, highlights, shadows, whites, blacks, and HSL (hue, saturation, luminance) values for all 8 color channels (reds, oranges, yellows, greens, aquas, blues, purples, magentas). All values must be integers between -100 and 100. Provide the output as a single, valid JSON object matching the provided schema.";try{const d=((r=(await t.models.generateContent({model:"gemini-3-flash-preview",contents:{parts:[o,{text:i}]},config:{responseMimeType:"application/json",responseSchema:{type:U.OBJECT,properties:{exposure:{type:U.INTEGER},contrast:{type:U.INTEGER},highlights:{type:U.INTEGER},shadows:{type:U.INTEGER},whites:{type:U.INTEGER},blacks:{type:U.INTEGER},hue:{type:U.OBJECT,properties:{reds:{type:U.INTEGER},oranges:{type:U.INTEGER},yellows:{type:U.INTEGER},greens:{type:U.INTEGER},aquas:{type:U.INTEGER},blues:{type:U.INTEGER},purples:{type:U.INTEGER},magentas:{type:U.INTEGER}}},saturation:{type:U.OBJECT,properties:{reds:{type:U.INTEGER},oranges:{type:U.INTEGER},yellows:{type:U.INTEGER},greens:{type:U.INTEGER},aquas:{type:U.INTEGER},blues:{type:U.INTEGER},purples:{type:U.INTEGER},magentas:{type:U.INTEGER}}},luminance:{type:U.OBJECT,properties:{reds:{type:U.INTEGER},oranges:{type:U.INTEGER},yellows:{type:U.INTEGER},greens:{type:U.INTEGER},aquas:{type:U.INTEGER},blues:{type:U.INTEGER},purples:{type:U.INTEGER},magentas:{type:U.INTEGER}}}}}}})).text)==null?void 0:r.trim())||"{}";return JSON.parse(d)}catch(s){throw console.error("Error in analyzeAndSuggestColorSettings:",s),new Error("មិនអាចវិភាគរូបថតដើម្បីកែតម្រូវដោយស្វ័យប្រវត្តិបានទេ។")}};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const R=G.bind(F),te=({error:n})=>{const e=n.includes("API Key");return R`
        <div class="error-message">
            <span>${n}</span>
            ${e&&R`
                <button class="btn btn-primary btn-sm" onClick=${()=>{window.dispatchEvent(new CustomEvent("change-tab",{detail:"settings"}))}} style=${{marginLeft:"1rem",padding:"4px 12px",fontSize:"0.8rem",whiteSpace:"nowrap"}}>
                    ទៅកាន់ការកំណត់
                </button>
            `}
        </div>
    `},rd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,ad=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.68 5.58C13.82 5.25 14.16 5 14.53 5h2.38l-2.64 4.55-3.8-3.46c-.23-.21-.57-.25-.85-.1L2 12.01V19h20V5h-7.05l-1.27.58zM4 17l6-5.5 4 3.51 6-8.51V17H4z"/></svg>`,sd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>`,ld=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C9.24 2 7 4.24 7 7v4H4c-1.1 0-2 .9-2 2v8h20v-8c0-1.1-.9-2-2-2h-3V7c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3v4H9V7c0-1.66 1.34-3 3-3zm-5 7h10v6H7v-6z"/></svg>`,cd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 4L19 2H5L3.5 4H2v16h20V4h-1.5zM12 18l-4-3h3v-4h2v4h3l-4 3zm-2-9H6V7h4v2zm6 0h-4V7h4v2z"/></svg>`,dd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.5 2C6.81 2 3 6.81 3 11.5S6.81 21 11.5 21 20 16.19 20 11.5 16.19 2 11.5 2zm0 17c-3.03 0-5.5-2.47-5.5-5.5S8.47 6 11.5 6 17 8.47 17 11.5 14.53 19 11.5 19zM8 10h7v1.5H8zm2.25 4h2.5V11h-2.5v3z"/></svg>`,ud=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9 0 3.92 2.55 7.26 6 8.47V22h6v-1.53c3.45-1.21 6-4.55 6-8.47 0-4.97-4.03-9-9-9zm2 13h-4v-1h4v1zm0-2h-4v-1h4v1zm0-2h-4v-1h4v1z"/></svg>`,pd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/></svg>`,fd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5z"/></svg>`,md=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49.42l.38-2.65c.61-.25 1.17-.59 1.69.98l2.49 1c.23.09.49 0 .61.22l2-3.46c.12-.22.07.49-.12.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>`,hd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>`,gd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.45 16.2,13.48 15.2,15.2L16.62,16.62L15.2,18.03L13.78,16.61C11.96,17.73 9.9,17.71 8.28,16.61L2.25,22.64L1.36,21.75L12,11.11L19.36,2.72M13.27,10.93L12.93,10.6C11.33,9.54 9.3,9.5 7.8,10.5L6.38,9.08L13.27,2.19L14.7,3.61L13.27,10.93Z" /></svg>`,vd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/></svg>`,yd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22q-1.85 0-3.413-1.012T6.2 18.6L4.8 17.2l1.4-1.425L7.6 17.2q1-1.125 2.263-1.763T12.5 14.8q.375 0 .725.038t.7.112l-6.275-6.275q-.7-.7-.7-1.687T8 5.3q.975-.975 2.313-.975T12.625 5.3L14 6.7l1.425-1.4L14.025 3.9q-1.2-1.2-2.825-1.2T8.375 3.9q-1.2 1.2-1.2 2.837t1.2 2.838L14.8 15.8q.075.35.113.7t.037.7q-1.925 0-3.537-1.112T9.2 13.2L7.8 11.8 6.4 13.2l1.4 1.4q1.125 1.15 2.588 1.9T12 17q1.125 0 2.2-.4t2.05-1.15l1.4-1.4 1.4 1.4-1.4 1.4Q17.5 18.5 16.2 19.3t-2.85.8q-1.325 0-2.512-.525T8.7 18.2L12.925 14l3.15 3.15q.975.975.975 2.313t-.975 2.312q-.975.975-2.312.975T12 22Z"/></svg>`,bd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A9,9 0 0,0 3,11V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V11A9,9 0 0,0 12,2M12,4A7,7 0 0,1 19,11H5A7,7 0 0,1 12,4M11,6V8H13V6H11M8,9V11H10V9H8M14,9V11H16V9H14Z" /></svg>`,$d=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9.5 9.5L2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2zM12 5.69l1.5 4.51L18.01 12l-4.51 1.5L12 18.31l-1.5-4.51L6 12l4.5-1.5L12 5.69z"/></svg>`,_d=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,Ii=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`,Cd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 20h2V4H7v16zm8-12h2V4h-2v4zM3 14h2V4H3v10zm12 6h2V4h-2v16zm-4-4h2V4h-2v12z"/></svg>`,wd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v2h-4zm-2-4h8v2h-8z"/></svg>`,Td=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm8.21 7.21c-1.33-.49-2.69-.76-4.1-.81.05-.22.09-.43.09-.66 0-1.2-.7-2.22-1.66-2.71.69-.27 1.44-.42 2.22-.42 1.93 0 3.5 1.57 3.5 3.5 0 .19-.01.37-.04.55.77.1 1.5.33 2.19.67.75.38 1.1 1.25.79 2.01l-1.07 2.59c-.32.76-1.18 1.18-1.95.93zm-2.06 3.11c-.39.13-.8.2-1.21.2-1.28 0-2.45-.51-3.29-1.29.28-.02.56-.04.85-.04 2.34 0 7 1.17 7 3.5v1.75h2v-1.75c0-1.3-.67-2.42-1.69-3.11z"/></svg>`,Id=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2.6l2.1 4.9l4.9 2.1l-4.9 2.1l-2.1 4.9l-2.1-4.9l-4.9-2.1l4.9-2.1L12 2.6M12 21.4l-1.2-2.8l-2.8-1.2l2.8-1.2l1.2-2.8l1.2 2.8l2.8 1.2l-2.8 1.2L12 21.4M20.5 12.4l-.9-2.1l-2.1-.9l2.1-.9l.9-2.1l.9 2.1l2.1.9l-2.1.9L20.5 12.4Z"/></svg>`,Ed=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.75-1.23-3.5-2.07V8H12z"/></svg>`,xd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>`,kd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.64 5.64c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.06 1.06c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L5.64 5.64zm12.73 12.73c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.06 1.06c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.06-1.06zM5.64 18.36c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.06-1.06c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.06 1.06zm12.73-12.73c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.06-1.06c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.06 1.06z"/></svg>`,Ad=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg>`,ft=({recording:n})=>R`<svg class=${n?"recording":""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14q.825 0 1.413-.587T14 12V6q0-.825-.587-1.413T12 4q-.825 0-1.413.587T10 6v6q0 .825.587 1.413T12 14Zm-1 7v-3.075q-2.6-.35-4.3-2.325T5 12H7q0 2.075 1.463 3.538T12 17q2.075 0 3.538-1.463T17 12h2q0 2.25-1.7 4.225T13 20.925V21Zm1-6q1.65 0 2.825-1.175T16 12V6q0-1.65-1.175-2.825T12 2q-1.65 0-2.825 1.175T8 6v6q0 1.65 1.175 2.825T12 15Z"/></svg>`,J=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 16V7.85l-2.6 2.6L7 9l5-5 5 5-1.4 1.45-2.6-2.6V16h-2Zm-5 4q-.825 0-1.413-.587T4 18V6q0-.825.587-1.413T6 4h4V2H6q-1.65 0-2.825 1.175T2 6v12q0 1.65 1.175 2.825T6 22h12q1.65 0 2.825-1.175T22 18V9h-2v9q0 .825-.587 1.413T18 20H6Z"/></svg>`,ce=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16.5l-4-4h2.5v-6h3v6H15l-3 4.5M6 20h12v-2H6v2Z"/></svg>`,zt=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>`,We=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>`,ye=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"/></svg>`,Ce=()=>R`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>`,Ei=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM4 19V7h16v12H4zm8-11c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>`,mt=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 7.61 17 4.5 12 4.5zm0 13C8.24 17.5 5.5 15.12 4.08 12c1.42-3.12 4.16-5.5 7.92-5.5s6.5 2.38 7.92 5.5c-1.42 3.12-4.16 5.5-7.92 5.5zm0-9c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"/></svg>`,Sd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/></svg>`,Pd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>`,Rd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>`,Md=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>`,ht=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5L2 9l10 13L22 9l-3-3zm-7 15.67L6.44 9h11.12L12 18.67z"/></svg>`,Bo=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.41 10.59L12 15.17l4.59-4.58L18 12l-6 6-6-6 1.41-1.41z"/></svg>`,Dd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM10 9h-1v-1H8v1H7v1h1v1h1v-1h1V9z"/></svg>`,Ld=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"/></svg>`,Nd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,Ud=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.5 7.5H9v1h1.5v1.5h-1.5v1H9v-1H7.5V9H9V7.5h1.5V9H12v1.5h-1.5v1zm6.5 2.5h-1.5l-1.5-2v2H13V9h1.5v2l1.5-2H17.5l-2 2.5 2 4z"/></svg>`,Fd=()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm0 4.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm0 4.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm6 2.5h-1.5l-1.5-2v2H13V9h1.5v2l1.5-2H17.5l-2 2.5 2 4z"/></svg>`,H=({text:n})=>R`
    <div class="loader-overlay">
        <div class="spinner"></div>
        <div class="loader-text">${n}</div>
    </div>
`,ne=({onImageUpload:n,id:e="file-input"})=>{const[t,o]=_(!1),i=me(null),r=h=>{if(h&&h.type.startsWith("image/")){const m=new FileReader;m.onload=g=>{var v;(v=g.target)!=null&&v.result&&n(g.target.result)},m.readAsDataURL(h)}},s=h=>{var m;r((m=h.currentTarget.files)==null?void 0:m[0])},d=()=>{var h;return(h=i.current)==null?void 0:h.click()};return R`
        <div 
            class="upload-area ${t?"dragging":""}" 
            onClick=${d}
            onDragEnter=${h=>{h.preventDefault(),h.stopPropagation(),o(!0)}}
            onDragLeave=${h=>{h.preventDefault(),h.stopPropagation(),o(!1)}}
            onDragOver=${h=>{h.preventDefault(),h.stopPropagation()}}
            onDrop=${h=>{var m;h.preventDefault(),h.stopPropagation(),o(!1),r((m=h.dataTransfer)==null?void 0:m.files[0])}}
        >
            <input type="file" id=${e} ref=${i} accept="image/*" style=${{display:"none"}} onChange=${s} />
            <div class="upload-area-content">
                <${J} />
                <h3>អូស និងទម្លាក់រូបថតនៅទីនេះ</h3>
                <p class="separator"><span>ឬ</span></p>
                <button class="btn btn-secondary btn-upload" onClick=${h=>{h.stopPropagation(),d()}}>ជ្រើសរើសពីកុំព្យូទ័រ</button>
                <p class="upload-hint">គាំទ្រ៖ PNG, JPG, WEBP</p>
            </div>
        </div>
    `},se=({original:n,generated:e,objectFit:t="cover"})=>{const[o,i]=_(50),[r,s]=_(!1),d=me(null),u={objectFit:t},c=h=>{if(!d.current)return;const m=d.current.getBoundingClientRect();let v=(h-m.left)/m.width*100;v=Math.max(0,Math.min(100,v)),i(v)},p=h=>{h.preventDefault(),s(!0)},f=()=>{s(!0)};return ve(()=>{const h=()=>s(!1),m=()=>s(!1),g=b=>{r&&c(b.clientX)},v=b=>{r&&c(b.touches[0].clientX)};return window.addEventListener("mousemove",g),window.addEventListener("mouseup",h),window.addEventListener("touchmove",v),window.addEventListener("touchend",m),()=>{window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",h),window.removeEventListener("touchmove",v),window.removeEventListener("touchend",m)}},[r,c]),n?e?R`
        <div 
            ref=${d}
            class="comparison-slider" 
            onMouseDown=${p}
            onTouchStart=${f}
        >
            <div class="comparison-image-wrapper">
                <img src=${n} alt="Original" draggable="false" style=${u} />
            </div>
            <div 
                class="comparison-image-wrapper comparison-image-after" 
                style=${{clipPath:`inset(0 ${100-o}% 0 0)`}}
            >
                <img src=${e} alt="Generated" draggable="false" style=${u} />
            </div>
            <div 
                class="comparison-handle" 
                style=${{left:`${o}%`}}
            >
                <div class="comparison-handle-icon">
                    <${Sd} />
                </div>
            </div>
        </div>
    `:R`
            <div class="comparison-slider">
                <div class="comparison-image-wrapper">
                    <img src=${n} alt="Image" draggable="false" style=${u} />
                </div>
            </div>
        `:null},Y=({baseImageUrl:n,filename:e,disabled:t,children:o,class:i,style:r,onProcessStart:s,onProcessComplete:d,onError:u})=>{const[c,p]=_("idle"),[f,h]=_("standard"),[m,g]=_("jpg"),[v,b]=_(!1),[$,C]=_(!1),x=me(null);ve(()=>{const M=L=>{x.current&&!x.current.contains(L.target)&&(b(!1),C(!1))};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[]);const w=async M=>{if(M.preventDefault(),M.stopPropagation(),!(!n||c==="upscaling"||c==="downloading")){s==null||s(),p(f==="standard"?"downloading":"upscaling");try{let L=n;(f==="high"||f==="ultra")&&(L=await pt(n,f==="high"?"4k":"8k")),d==null||d(L),p("downloading");const O=await fetch(L);if(!O.ok)throw new Error("Failed to fetch image for download");const be=await O.blob(),Ve=URL.createObjectURL(be),we=new Image;we.onload=()=>{const Ae=document.createElement("canvas");Ae.width=we.naturalWidth,Ae.height=we.naturalHeight;const gt=Ae.getContext("2d");if(!gt)throw new Error("Canvas context error");gt.drawImage(we,0,0);const Kt=`image/${m==="jpg"?"jpeg":m}`,Jt=`${e.split(".")[0]}.${m}`,Wt=Ae.toDataURL(Kt,.95),Se=document.createElement("a");Se.href=Wt,Se.download=Jt,document.body.appendChild(Se),Se.click(),document.body.removeChild(Se),URL.revokeObjectURL(Ve),p("downloaded"),setTimeout(()=>p("idle"),3e3)},we.onerror=()=>{throw new Error("Failed to load processed image")},we.src=Ve}catch(L){const O=L instanceof Error?L.message:"កំហុសមិនស្គាល់ពេលកំពុងដំណើរការរូបភាព។";u==null||u(O),p("error"),setTimeout(()=>p("idle"),5e3)}}},y=()=>{C(!1),b(M=>!M)},k=()=>{b(!1),C(M=>!M)},E=M=>{h(M),b(!1)},T=M=>{g(M),C(!1)},I=t||!n||c==="upscaling"||c==="downloading";let A,S=`btn ${i||"btn-primary"}`;switch(c){case"upscaling":A=`កំពុងបង្កើនកម្រិត ${f==="high"?"4K":"8K"}...`;break;case"downloading":A="កំពុងដំណើរការទាញយក...";break;case"downloaded":A=R`<${Rd} /> បានទាញយក!`;break;case"error":A="កំហុស! ព្យាយាមម្តងទៀត",S+=" btn-danger";break;default:A=o}return R`
        <div class="download-control-group" style=${r} ref=${x}>
            <button class=${S} onClick=${w} disabled=${I}>
                ${A}
            </button>
            <button class="btn ${i||"btn-primary"} selector-toggle-btn" onClick=${y} disabled=${I} title="ជ្រើសរើសគុណភាព">
                <span class="selector-label">${{standard:"STD",high:"4K",ultra:"8K"}[f]}</span>
                <${Bo} />
            </button>
            <button class="btn ${i||"btn-primary"} selector-toggle-btn" onClick=${k} disabled=${I} title="ជ្រើសរើសទម្រង់ឯកសារ">
                <span class="selector-label">${m.toUpperCase()}</span>
                <${Bo} />
            </button>
            
            ${v&&R`
                <ul class="selector-dropdown quality-dropdown">
                    <li onClick=${()=>E("standard")}>ស្តង់ដារ (STD)</li>
                    <li onClick=${()=>E("high")}>គុណភាពខ្ពស់ (4K)</li>
                    <li onClick=${()=>E("ultra")}>ច្បាស់បំផុត (8K)</li>
                </ul>
            `}
            ${$&&R`
                <ul class="selector-dropdown format-dropdown">
                    <li onClick=${()=>T("jpg")}>JPG</li>
                    <li onClick=${()=>T("png")}>PNG</li>
                    <li onClick=${()=>T("webp")}>WEBP</li>
                </ul>
            `}
        </div>
    `},Gd=({theme:n,onToggle:e})=>R`
        <button class="theme-toggle" onClick=${e} title="Toggle theme">
            <span class="tab-icon"><${n==="light"?Ad:kd} /></span>
            <span class="tab-label">${n==="light"?"របៀបងងឹត":"របៀបភ្លឺ"}</span>
        </button>
    `,Vd=({originalUrl:n,generatedUrl:e,caption:t,onClose:o})=>R`
        <div class="lightbox-overlay" onClick=${o}>
            <div class="lightbox-content" onClick=${i=>i.stopPropagation()}>
                <div class="lightbox-header">
                    <h3>${t}</h3>
                    <button class="lightbox-close-btn" onClick=${o} title="Close">
                        <${ye} />
                    </button>
                </div>
                <div class="lightbox-image-comparison">
                    <div class="lightbox-image-wrapper">
                        <img src=${n} alt="Original Image" />
                        <p>រូបថតដើម</p>
                    </div>
                    <div class="lightbox-image-wrapper">
                        <img src=${e} alt="Generated Image" />
                        <p>រូបថត Trend</p>
                    </div>
                </div>
            </div>
        </div>
    `,Fe=({imageUrl:n,caption:e,onClose:t})=>{const[o,i]=_(100),r={transform:`scale(${o/100})`,transformOrigin:"center",maxWidth:o>100?"none":"100%",maxHeight:o>100?"none":"100%",transition:"transform 0.1s ease-out"},s=25,d=25,u=400,c=()=>i(h=>Math.min(u,h+s)),p=()=>i(h=>Math.max(d,h-s)),f=h=>i(parseInt(h.currentTarget.value,10));return R`
        <div class="lightbox-overlay" onClick=${t}>
            <div class="lightbox-content" onClick=${h=>h.stopPropagation()}>
                <div class="lightbox-header">
                    <h3>${e}</h3>
                    <div class="lightbox-actions">
                         <${Y} baseImageUrl=${n} filename=${`${e}.jpg`}>
                            <${ce} /> ទាញយក
                        </${Y}>
                        <button class="lightbox-close-btn" onClick=${t} title="Close">
                            <${ye} />
                        </button>
                    </div>
                </div>
                <div class="lightbox-image-wrapper-single">
                    <img src=${n} alt=${e} style=${r} />
                </div>
                <div class="lightbox-footer">
                    <button class="toolbar-btn" onClick=${p} disabled=${o<=d}><${Ld} /></button>
                    <div class="zoom-slider-container">
                        <input 
                            type="range" 
                            min=${d} 
                            max=${u} 
                            value=${o} 
                            onInput=${f}
                        />
                    </div>
                    <button class="toolbar-btn" onClick=${c} disabled=${o>=u}><${Dd} /></button>
                    <span class="zoom-value">${o}%</span>
                </div>
            </div>
        </div>
    `},he=({generatedImage:n,filename:e,onReset:t,onView:o,isGenerating:i,children:r})=>!n&&!i?null:R`
        <div 
            class="image-actions-toolbar" 
            style=${{opacity:i?0:1,pointerEvents:i?"none":"auto",transition:"opacity 0.3s ease"}}
        >
            ${r}
            ${r&&R`<div class="divider"></div>`}

            <button class="toolbar-btn" onClick=${t} title="បង្ហោះរូបថតថ្មី" disabled=${i}>
                <${J} />
            </button>
            
            <div class="divider"></div>

            <${Y} 
                baseImageUrl=${n} 
                filename=${e} 
                disabled=${i||!n}
            >
                <${ce} /> ទាញយក
            </${Y}>
            
            ${o&&R`
                <div class="divider"></div>
                <button class="toolbar-btn" onClick=${o} disabled=${i||!n} title="មើលរូបថតធំ">
                    <${mt} />
                </button>
            `}
        </div>
    `;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const ie=[{id:"id-photo",label:"កែសម្រួលរូបថតកាត",icon:rd,description:"បង្កើត និងកំណត់រូបថតកាតអាជីពដោយគ្រាន់តែចុចតែម្តង។",guideText:"ការណែនាំអំពីការធ្វើរូបថតកាត",guideLink:"https://www.youtube.com/watch?v=LoqkFbNIzj4&list=PL6ftEPuxjU4YGs5uk56t6ZjG95Ox6XyYV"},{id:"restoration",label:"ជួសជុលរូបថតចាស់",icon:ad,description:"ស្តារ ជួសជុល និងធ្វើឱ្យរូបថតចាស់ ខូច ឬព្រាលឱ្យថ្មីឡើងវិញ។",guideText:"ការណែនាំអំពីការជួសជុលរូបថតចាស់",guideLink:"https://www.youtube.com/watch?v=jx1XhzF8sdo&feature=youtu.be"},{id:"document-restoration",label:"ជួសជុលឯកសារចាស់",icon:sd,description:"ស្តារឯកសារចាស់ៗដែលប្រឡាក់ រហែក ឬព្រាលអក្សរឡើងវិញ។",guideText:"ការណែនាំអំពីការជួសជុលឯកសារចាស់",guideLink:"#"},{id:"fashion-design",label:"រចនាម៉ូដសម្លៀកបំពាក់",icon:ld,description:"ប្រើប្រាស់ AI ដើម្បីសាកល្បងសម្លៀកបំពាក់លើតារាម៉ូដែល និងរចនាគំនិតម៉ូដប្លែកៗ។",guideText:"ការណែនាំអំពីការរចនាម៉ូដសម្លៀកបំពាក់",guideLink:"#"},{id:"clothing-change",label:"ផ្លាស់ប្តូរសម្លៀកបំពាក់",icon:cd,description:"ផ្លាស់ប្តូរសម្លៀកបំពាក់របស់មនុស្សក្នុងរូបថតតាមរយៈការពិពណ៌នា ឬរូបថតគំរូ។",guideText:"ការណែនាំអំពីការផ្លាស់ប្តូរសម្លៀកបំពាក់",guideLink:"#"},{id:"face-transform",label:"AI ផ្លាស់ប្តូរផ្ទៃមុខ",icon:Td,description:"បង្កើតរូបភាពថ្មីដ៏ស្រស់ស្អាតដោយការបញ្ចូលផ្ទៃមុខរបស់អ្នកជាមួយគំនិតច្នៃប្រឌិត។",guideText:"ការណែនាំអំពីការផ្លាស់ប្តូរផ្ទៃមុខ",guideLink:"#"},{id:"image-to-prompt",label:"រូបភាពទៅជា Prompt",icon:Ce,description:"បំប្លែងរូបភាពរបស់អ្នកទៅជា Prompt លម្អិត ដើម្បីប្រើប្រាស់ក្នុងការបង្កើតរូបភាពថ្មីៗ។",guideText:"ការណែនាំអំពីការប្រើប្រាស់រូបភាពទៅជា Prompt",guideLink:"#"},{id:"wrinkle-editor",label:"កែសម្រួលស្នាមជ្រួញ AI",icon:Id,description:"បង្ហោះរូបថត ហើយអនុញ្ញាតឱ្យ AI បំបាត់ស្នាមជ្រួញលើផ្ទៃមុខ ឬសម្លៀកបំពាក់។",guideText:"ការណែនាំអំពីការកែសម្រួលស្នាមជ្រួញ",guideLink:"#"},{id:"image-filter",label:"តម្រងរូបភាព",icon:vd,description:"ប្រើប្រាស់តម្រង និងផលប៉ះពាល់កម្រិតខ្ពស់ជាច្រើនដើម្បីកែលម្អរូបថតរបស់អ្នក។",guideText:"ការណែនាំអំពីការប្រើប្រាស់តម្រងរូបភាព",guideLink:"#"},{id:"wedding-photo",label:"រូបថតអាពាហ៍ពិពាហ៍ AI",icon:yd,description:"បង្កើតអាល់ប៊ុមរូបថតអាពាហ៍ពិពាហ៍ក្នុងសុបិនរបស់អ្នកជាមួយនឹងគំនិតប្លែកៗជាច្រើន។",guideText:"ការណែនាំអំពីការធ្វើរូបថតអាពាហ៍ពិពាហ៍ AI",guideLink:"#"},{id:"birthday-photo",label:"បង្កើតរូបថតថ្ងៃកំណើត",icon:bd,description:"បង្កើតរូបថតថ្ងៃកំណើតប្លែកៗជាមួយនឹងគំនិតច្នៃប្រឌិត។",guideText:"ការណែនាំអំពីការបង្កើតរូបថតថ្ងៃកំណើត",guideLink:"#"},{id:"upscaler",label:"ធ្វើឱ្យរូបភាពច្បាស់",icon:$d,description:"បង្កើនកម្រិតរូបភាពរបស់អ្នកដល់កម្រិត 4K ឬ 8K ដែលច្បាស់ និងលម្អិតបំផុត។",guideText:"ការណែនាំអំពីការធ្វើឱ្យរូបភាពច្បាស់",guideLink:"#"},{id:"family-face-swap",label:"ផ្គុំមុខរូបថតគ្រួសារ",icon:_d,description:"ជំនួសផ្ទៃមុខក្នុងរូបថតក្រុមជាមួយនឹងរូបថតបញ្ឈរដែលអ្នកផ្តល់ឱ្យ។",guideText:"ការណែនាំអំពីការផ្គុំមុខរូបថតគ្រួសារ",guideLink:"#"},{id:"preset-color",label:"ពណ៌ Preset",icon:Ii,description:"បំប្លែងរូបថតរបស់អ្នកជាមួយនឹងរចនាប័ទ្មពណ៌ដែលគាំទ្រដោយ AI។",guideText:"ការណែនាំអំពីការប្រើប្រាស់ពណ៌ Preset",guideLink:"#"},{id:"color-correction",label:"កែសម្រួលពណ៌",icon:Cd,description:"កែតម្រូវពន្លឺ កម្រិតពណ៌ ភាពឆ្អែត និងកត្តាពណ៌ផ្សេងទៀត។",guideText:"ការណែនាំអំពីការកែសម្រួលពណ៌",guideLink:"#"},{id:"face-align",label:"តម្រង់ផ្ទៃមុខ",icon:wd,description:"បង្វិល និងតម្រង់ផ្ទៃមុខដោយស្វ័យប្រវត្តិ ដើម្បីមើលទៅត្រង់ប្រកបដោយវិជ្ជាជីវៈ។",guideText:"ការណែនាំអំពីការតម្រង់ផ្ទៃមុខ",guideLink:"#"},{id:"symmetry",label:"កែសម្រួលតុល្យភាព",icon:dd,description:"កែសម្រួល និងធ្វើឱ្យបន្ទាត់ផ្ទៃមុខមានតុល្យភាពតាមបែបធម្មជាតិ។",guideText:"ការណែនាំអំពីការកែសម្រួលតុល្យភាព",guideLink:"#"},{id:"lighting",label:"ពន្លឺ",icon:ud,description:"បង្កើត និងផ្លាស់ប្តូរពន្លឺនៃរូបថតជាមួយនឹងផលប៉ះពាល់អាជីព។",guideText:"ការណែនាំអំពីការកែពន្លឺ",guideLink:"#"},{id:"background",label:"ផ្លាស់ប្តូរផ្ទៃខាងក្រោយ",icon:pd,description:"បំបែក និងផ្លាស់ប្តូរផ្ទៃខាងក្រោយរូបថតយ៉ាងងាយស្រួលដោយប្រើអត្ថបទ ឬរូបថតយោង។",guideText:"ការណែនាំអំពីការផ្លាស់ប្តូរផ្ទៃខាងក្រោយ",guideLink:"#"},{id:"clean-background",label:"សម្អាតផ្ទៃខាងក្រោយ",icon:gd,description:"ឧបករណ៍អាជីពដើម្បីលុបព័ត៌មានលម្អិតដែលលើស កែសម្រួលពណ៌ និងធ្វើឱ្យផ្ទៃខាងក្រោយរលោងដោយមិនប៉ះពាល់ដល់ប្រធានបទ។",guideText:"ការណែនាំអំពីការសម្អាតផ្ទៃខាងក្រោយ",guideLink:"#"},{id:"trend-creator",label:"បង្កើតរូបថត Trend",icon:hd,description:"ប្រើប្រាស់រូបថតរបស់អ្នក និង Trend ដែលមានស្រាប់ដើម្បីបង្កើតស្នាដៃប្លែកពីគេ។",guideText:"ការណែនាំអំពីការបង្កើតរូបថត Trend",guideLink:"#"},{id:"mockup",label:"បង្កើត Mockup",icon:fd,description:"បង្កើត Mockup ផលិតផលអាជីពជាមួយនឹងតួអង្គ និងបរិបទដែលបានកំណត់។",guideText:"ការណែនាំអំពីការបង្កើត Mockup",guideLink:"#"},{id:"history",label:"ប្រវត្តិ",icon:Ed,description:"ពិនិត្យមើលឡើងវិញ ទាញយក ឬលុបរូបថតដែលអ្នកបានបង្កើតពីមុន។",guideText:"ការណែនាំអំពីការមើលប្រវត្តិ",guideLink:"#"},{id:"settings",label:"ការកំណត់",icon:md,description:"កំណត់ API Key, ស្បែកកម្មវិធី និងគ្រប់គ្រងអាជ្ញាប័ណ្ណរបស់អ្នក។",guideText:"ការណែនាំអំពីការកំណត់",guideLink:"https://play.fembed.vip/?url=U2FsdGVkX19nKHB%2FNK6PdAzYEflbGJN%2FsbKnrc5Ru77162DDd%2FNPGOmznWa%2BTmJ5ixDvi81wrlS0ua5gOCtjyxMcMpW8urPIw3OiiBi95CF1ZOma705jxkJoRClc4Ded5TYdH03KtTS43Fi6BaNcENb8WLyiNROX%2Bek9MoSAVdP3ozUdlXy4UKA9%2BM6v9LQn"}],gn=[{id:"beach",label:"ឆ្នេរសមុទ្រ",recommended:!0,prompt:"A romantic wedding photoshoot on a beautiful beach at sunset, with white sand and blue ocean."},{id:"classic",label:"បុរាណ",recommended:!1,prompt:"A classic and elegant indoor wedding photo, in a grand hall with chandeliers and flowers."},{id:"city",label:"ទីក្រុង",recommended:!1,prompt:"A modern wedding photoshoot in a bustling city street, with skyscrapers and city lights in the background."},{id:"hanbok",label:"Hanbok ប្រពៃណី",recommended:!1,prompt:"A traditional Korean wedding photoshoot with the couple wearing beautiful Hanbok in a historical palace."},{id:"forest",label:"ព្រៃឈើ",recommended:!0,prompt:"A whimsical wedding photoshoot in an enchanted forest, surrounded by tall trees and magical sunlight."},{id:"chinese_attire",label:"សម្លៀកបំពាក់ចិន",recommended:!0,prompt:"A traditional Chinese wedding photoshoot, with the couple in red and gold outfits, in a classic Chinese garden setting."},{id:"seoul_rooftop",label:"ដំបូលផ្ទះនៅសេអ៊ូល",recommended:!1,prompt:"A trendy wedding photoshoot on a rooftop in Seoul, overlooking the city skyline at dusk."},{id:"jeju_island",label:"កោះ Jeju",recommended:!1,prompt:"A beautiful wedding photoshoot on Jeju Island, with scenic fields of flowers or coastal views."},{id:"gyeongbok_palace",label:"វាំង Gyeongbok",recommended:!1,prompt:"An elegant wedding photoshoot at Gyeongbok Palace in Seoul, showcasing historical Korean architecture."},{id:"k_drama",label:"រចនាប័ទ្ម K-Drama",recommended:!1,prompt:"A dramatic and romantic K-Drama style wedding photo, capturing a poignant moment between the couple."},{id:"royal",label:"រាជវង្ស",recommended:!1,prompt:"A royal-themed wedding photoshoot, with the couple dressed as a prince and princess in a luxurious castle."},{id:"rustic",label:"បែបជនបទ",recommended:!0,prompt:"A rustic-themed wedding photoshoot in a countryside barn or field, with simple, natural decorations."},{id:"minimalist_studio",label:"ស្ទូឌីយោបែបសាមញ្ញ",recommended:!1,prompt:"A minimalist studio wedding photoshoot with a clean, simple background, focusing entirely on the couple."},{id:"neon_city",label:"ទីក្រុង Neon",recommended:!1,prompt:"A vibrant wedding photoshoot in a city at night, illuminated by colorful neon signs."},{id:"magazine_style",label:"រចនាប័ទ្មទស្សនាវដ្តី",recommended:!1,prompt:"A high-fashion, magazine-style wedding photoshoot with editorial poses and dramatic lighting."}],xi=[{id:"elegant_gown",label:"រ៉ូបរាត្រីសមោសរដ៏ស្រស់ស្អាត",prompt:"A stunning birthday photoshoot, subject wearing an elegant evening gown in a luxurious setting."},{id:"bohemian_muse",label:"ទេពធីតា Bohemian",prompt:"A whimsical birthday photoshoot, subject as a bohemian muse with flowing clothes in a natural, rustic environment."},{id:"modern_queen",label:"ម្ចាស់ក្សត្រីសម័យទំនើប",prompt:"A powerful and modern birthday photoshoot, subject portrayed as a modern queen with stylish, regal attire."},{id:"princess_balloons",label:"ព្រះនាង និងប៉េងប៉ោង",prompt:"A fairy-tale birthday photoshoot, subject dressed as a princess surrounded by colorful balloons."},{id:"muse_pink_balloons",label:"ទេពធីតា និងប៉េងប៉ោងពណ៌ផ្កាឈូក",prompt:"A dreamy birthday photoshoot, subject as a muse surrounded by aesthetic pink balloons."},{id:"lady_in_red",label:"សុភាពនារីក្នុងឈុតក្រហម",prompt:"A glamorous birthday photoshoot, subject in a captivating red dress, exuding confidence and charm."},{id:"luxurious_black_dress",label:"រ៉ូបខ្មៅដ៏ប្រណិត",prompt:"An elegant birthday photoshoot, subject wearing a luxurious black dress at a classy evening event."},{id:"classic_beauty",label:"សម្រស់បែបបុរាណ",prompt:"A timeless birthday photoshoot capturing classic beauty, with vintage-inspired fashion and setting."},{id:"party_queen",label:"ម្ចាស់ក្សត្រីនៃពិធីជប់លៀង",prompt:"A vibrant birthday photoshoot, subject as the queen of the party, with festive lights and a celebratory atmosphere."},{id:"stage_lights",label:"ពន្លឺលើឆាក",prompt:"A dramatic birthday photoshoot, subject on a stage under bright spotlights, looking like a star."},{id:"sweet_candy_dream",label:"សុបិនស្ករគ្រាប់ផ្អែមល្ហែម",prompt:"A playful and sweet birthday photoshoot in a candy-land-themed environment with pastel colors."},{id:"fashion_coffee",label:"ម៉ូដ និងកាហ្វេ",prompt:"A chic birthday photoshoot in a stylish coffee shop, with a high-fashion aesthetic."},{id:"rococo_tea_party",label:"ពិធីជប់លៀងតែ Rococo",prompt:"An ornate Rococo-style tea party birthday photoshoot, with elaborate dresses and decorations."},{id:"modern_fairy_tale",label:"រឿងនិទានសម័យទំនើប",prompt:"A modern fairy-tale birthday photoshoot, blending classic fantasy elements with a contemporary twist."},{id:"dreamy_mint",label:"ពណ៌បៃតងខ្ចីដ៏ស្រស់ត្រកាល",prompt:"A dreamy birthday photoshoot with a mint green color palette, creating a fresh and ethereal vibe."}],Bd=[{id:"nu",label:"ស្រី"},{id:"nam",label:"ប្រុស"}],Hd=[{id:"nguoi-lon",label:"មនុស្សពេញវ័យ"},{id:"thanh-nien",label:"យុវជន"},{id:"tre-em",label:"កុមារ"}],vn=[{id:"giu-nguyen",label:"រក្សានៅដដែល",prompt:""},{id:"ao-so-mi",label:"អាវសឺមី",prompt:"a formal collared dress shirt"},{id:"ao-so-mi-trang",label:"អាវសឺមីស",prompt:"a formal white collared dress shirt"},{id:"ao-polo",label:"អាវប៉ូឡូ",prompt:"a simple polo shirt"},{id:"ao-kieu",label:"អាវម៉ូដ",prompt:"a stylish blouse"},{id:"ao-phong-tron",label:"អាវយឺត",prompt:"a plain t-shirt"},{id:"ao-pak",label:"អាវប៉ាក់ខ្មែរ ពណ៌ស",prompt:"a traditional white Khmer embroidered blouse with intricate patterns"},{id:"ao-vest-nam",label:"អាវធំបុរស",prompt:"a sharp, formal men's business suit with a crisp white shirt and a tie"},{id:"ao-vest-nu",label:"អាវធំស្ត្រី",prompt:"a professional women's business suit with a tailored blazer and a formal blouse"},{id:"ao-vest",label:"អាវវេស",prompt:"a formal business suit with a tie"},{id:"cong-so",label:"ឈុតធ្វើការ",prompt:"professional office attire"},{id:"vest-nu-cong-so-2",label:"អាវវេសស្រីធ្វើការ ២",prompt:"a modern women's office blazer over a simple top"},{id:"ao-trang-khan-quang",label:"អាវស និងកន្សែងបង់ក",prompt:"a white shirt with a pioneer scarf"},{id:"ao-dai-trang",label:"អាវដាយស (Ao Dai)",prompt:"a traditional white Vietnamese Ao Dai"},{id:"nu-sinh-hq-1",label:"សិស្សស្រីខ្មែរ ១",prompt:"a Khmer high school uniform, style 1"},{id:"nu-sinh-hq-2",label:"សិស្សស្រីខ្មែរ ២",prompt:"a Khmer high school uniform, style 2"},{id:"nu-sinh-hq-3",label:"សិស្សស្រីខ្មែរ ៣",prompt:"a Khmer high school uniform, style 3"},{id:"khmer-traditional-male",label:"ប្រពៃណីខ្មែរ ប្រុស",prompt:"a traditional Cambodian male outfit, wearing a silk shirt with a collar and a traditional sampot or kben, elegant and cultural"},{id:"khmer-traditional-female",label:"ប្រពៃណីខ្មែរ ស្រី",prompt:"a traditional Cambodian female outfit, wearing an elegant silk sampot and a beautifully embroidered blouse or sbai, adorned with traditional jewelry"}],Ho=[{id:"giu-nguyen",label:"រក្សានៅដដែល",prompt:""},{id:"gon-gang",label:"រៀបរយ",prompt:"a neat and tidy hairstyle"},{id:"toc-ngan",label:"សក់ខ្លី",prompt:"a short hairstyle"},{id:"toc-dai",label:"សក់វែង",prompt:"a long hairstyle"},{id:"toc-dai-bong-benh",label:"សក់វែងរលក",prompt:"long, voluminous hair"},{id:"thoi-trang",label:"ម៉ូដទាន់សម័យ",prompt:"a trendy, modern hairstyle"},{id:"toc-buoc-gon",label:"សក់ចងរៀបរយ",prompt:"hair neatly tied back"},{id:"texture-crop-nam",label:"Texture Crop ប្រុស",prompt:"a male textured crop hairstyle"},{id:"re-doi-hq-nam",label:"សក់សែកកណ្ដាលកូរ៉េប្រុស",prompt:"a Korean-style middle part hairstyle for men"},{id:"xoan-ngan-nam",label:"សក់រួញខ្លីប្រុស",prompt:"a short, curly hairstyle for men"},{id:"hat-de-ngo-nam",label:"សក់ម៉ូដគ្រាប់ធញ្ញជាតិប្រុស",prompt:"a chestnut-style haircut for men"}],qd=[{id:"xanh",label:"ខៀវ"},{id:"trang",label:"ស"},{id:"xam",label:"ប្រផេះ"},{id:"xanh-dam",label:"ខៀវចាស់"}],ki=[{name:"ពន្លឺចំហៀង",prompt:"Apply natural side lighting: light coming from one side, like sunlight through a window, illuminating half of the face clearly while the other half remains softly shaded. Keep the transition smooth and realistic."},{name:"ពន្លឺខ្លាំង",prompt:"Apply natural hard light: direct sunlight effect with sharp, well-defined shadows and strong contrast. The look should feel realistic, like midday sun, without artificial glow."},{name:"ពន្លឺ ៤៥°",prompt:"Apply natural 45-degree lighting: light angled from above and to the side, forming a small triangle of light on the shadowed cheek. Shadows should stay gentle and natural, adding depth without harshness."},{name:"ពន្លឺបាញ់ពីក្រោយ",prompt:"Apply natural backlighting: strong light from behind the subject, creating a soft rim or halo glow around the hair and shoulders. Keep the front lighting subtle and balanced."},{name:"ពន្លឺផ្ទៃខាងក្រោយ",prompt:"Apply natural background lighting: light behind the subject that softly brightens the backdrop, separating the subject from it. The front should remain evenly and naturally lit."},{name:"ពន្លឺសក់",prompt:"Apply natural hair lighting: gentle light from above or behind that highlights the hair. Keep it subtle and realistic, adding texture and depth without overexposing."},{name:"ពន្លឺបំបែក",prompt:"Apply natural split lighting: light shining from one side, dividing the face into a bright half and a shadowed half. The contrast should look natural and not overly dramatic."},{name:"ពន្លឺស្រមោលទាំងស្រុង",prompt:"Apply natural silhouette effect: strong light from behind, turning the subject into a dark outline against a bright background. Preserve clean edges and a natural atmosphere."},{name:"ពន្លឺបរិយាកាស",prompt:"Apply natural ambient lighting: soft, diffused light filling the scene, like daylight on a cloudy day. Minimal shadows, evenly lit subject, and a gentle, realistic look."}],Ai=[{id:"old-film",name:"ហ្វីលចាស់",prompt:"Apply a vintage film color grade. Introduce warm tones, slightly faded blacks, and a subtle grain to emulate the look of classic analog film photography."},{id:"cyberpunk",name:"Neon Cyberpunk",prompt:"Apply a neon cyberpunk color grade. Emphasize blues, purples, and pinks in the highlights and shadows. Create a futuristic, high-contrast, neon-lit nighttime aesthetic."},{id:"golden-hour",name:"ម៉ោងមាស",prompt:"Apply a warm, golden hour color grade. Enhance the yellows, oranges, and reds to simulate the soft, warm light of sunset or sunrise. Create a dreamy and romantic atmosphere."},{id:"noir",name:"សខ្មៅ Noir",prompt:"Convert the image to black and white with a high-contrast, noir aesthetic. Deepen the blacks, brighten the whites, and create a dramatic, moody, and cinematic look."},{id:"vivid-dream",name:"សុបិនដ៏រស់រវើក",prompt:"Apply a vivid and dreamlike color grade. Increase saturation and vibrance, shift colors towards surreal tones like teal and orange, and add a soft, ethereal glow."},{id:"faded-summer",name:"រដូវក្តៅស្រអាប់",prompt:"Apply a faded summer color grade. Desaturate the colors slightly, lift the black point for a matte look, and add a warm, hazy, sun-drenched feel."},{id:"deep-forest",name:"ព្រៃជ្រៅ",prompt:"Apply a deep forest color grade. Emphasize rich greens and earthy browns. Cool down the shadows and create a moody, quiet, and atmospheric look reminiscent of a dense forest."},{id:"deep-sea",name:"សមុទ្រជ្រៅ",prompt:"Apply a deep blue sea color grade. Emphasize deep blues, teals, and cyans. Cool the overall temperature and create a mysterious, underwater, or oceanic feeling."},{id:"clear-fresh",name:"ស្រស់ថ្លា និងថ្មីថ្មោង",prompt:"Apply a clear and fresh color grade. Brighten the image, increase clarity, and enhance cool tones like blues and greens. Create a clean, airy, and modern aesthetic."},{id:"pure",name:"បរិសុទ្ធ",prompt:"Apply a pure and minimalistic color grade. Slightly desaturate colors, ensure clean whites, and create a soft, gentle, and very clean look with minimal color shifting."}],Nt={beggar:{label:"Trend អ្នកសុំទាន",prompt:"A homeless person, sitting hunched on the sidewalk of a city street. They are dressed in ragged, tattered, and patched clothing. Their hands cling tightly to the inner pot of an old, dented, and dusty rice cooker. Important: The face and identity of the homeless person must be identical to the provided reference portrait."},figurine:{label:"Trend ម៉ូដែលតុក្កតា",prompt:"A modern-styled character, inspired by the reference portrait, striking a dynamic pose with strong, confident energy. The design is gender-neutral (could be interpreted as male or female). The character has a well-proportioned physique, dressed in fashionable attire suitable for outdoor activities or performances, with sharp detailing and realistic fabric textures. The face is rendered faithfully to the reference portrait, preserving an expression of confidence, focus, and determination. The pose is captured like a moment of action, blending artistic flair with realism.The figure is presented in premium quality, commercial-style (1/7 scale collectible figure), mounted on a transparent acrylic base, and placed on a computer desk.Behind it, the computer screen displays the modeling process of the figure. The entire scene is set in a bright, modern studio with wooden shelves neatly showcasing a collection of figures and models. Multicolored LED lighting reflects softly on the walls and desk, creating a lively, professional, and creatively charged atmosphere. On the back wall, the prominent TG DESIGN AI logo highlights the brand identity. Next to the figure, there is a commercial-style figure box, printed with the original illustration."},statue:{label:"Trend រូបចម្លាក់",prompt:"Create a commercialized 1/7 scale figure of the character from the reference portrait, designed in a hyper-realistic style and placed within a real-world environment. The model is displayed on a computer desk with a round transparent acrylic base.Beside the desk, the real person from the reference portrait appears at life-size, wearing the same outfit as in both the photo and the figure, carefully holding a screwdriver as if adjusting or repairing the model.The setting is a modern, brightly lit studio, with a collection of toys and figures neatly displayed in the background. Important: The face and identity of both the real person and the figure must be identical to the provided reference portrait."}},zd=[{id:"angkor-wat",label:"អង្គរវត្ត",prompt:"In front of the magnificent Angkor Wat temple in Cambodia, with its iconic five towers and reflecting pond at sunrise."},{id:"bayon",label:"ប្រាសាទបាយ័ន",prompt:"At the Bayon temple in Angkor Thom, surrounded by the famous giant stone faces carved into the towers."},{id:"ta-prohm",label:"ប្រាសាទតាព្រហ្ម",prompt:"Inside the Ta Prohm temple, where massive tree roots are intertwined with the ancient stone ruins, creating a mystical jungle atmosphere."},{id:"preah-vihear",label:"ប្រាសាទព្រះវិហារ",prompt:"At the Preah Vihear temple, perched on a high cliff of the Dangrek Mountains, overlooking the vast plains of Cambodia."},{id:"koh-ker",label:"ប្រាសាទកោះកេរ",prompt:"In front of the unique seven-tiered pyramid temple of Koh Ker, surrounded by dense Cambodian forest."},{id:"banteay-srei",label:"ប្រាសាទបន្ទាយស្រី",prompt:"At the Banteay Srei temple, known for its intricate and delicate pink sandstone carvings."},{id:"sambor-prei-kuk",label:"ប្រាសាទសំបូរព្រៃគុក",prompt:"Among the ancient brick temples of Sambor Prei Kuk, nestled within a quiet, shaded forest setting."},{id:"phnom-bakheng",label:"ភ្នំបាខែង",prompt:"On top of Phnom Bakheng hill at sunset, with a panoramic view of the Angkor Wat towers in the distance."},{id:"preah-khan",label:"ប្រាសាទព្រះខ័ន",prompt:"Walking through the long, atmospheric corridors of the Preah Khan temple complex, with sunlight filtering through the stone openings."},{id:"beng-mealea",label:"ប្រាសាទបឹងមាលា",prompt:"Exploring the overgrown and collapsed ruins of Beng Mealea temple, feeling like an adventurer in a lost world."}],Od=[{id:"royal-palace",label:"ព្រះបរមរាជវាំង",prompt:"In front of the majestic Royal Palace in Phnom Penh, with its golden spires and beautiful Khmer architecture under a clear blue sky."},{id:"koh-rong",label:"កោះរ៉ុង",prompt:"On a pristine white sand beach of Koh Rong island, with crystal clear turquoise water and tropical palm trees."},{id:"bokor-mountain",label:"ភ្នំបូកគោ",prompt:"At the top of Bokor Mountain in Kampot, with the historic old casino building and a misty, atmospheric mountain landscape."},{id:"bousra-waterfall",label:"ទឹកធ្លាក់ប៊ូស្រា",prompt:"In front of the powerful two-tiered Bousra Waterfall in Mondulkiri, surrounded by lush green jungle and natural beauty."},{id:"yeak-laom",label:"បឹងយក្សឡោម",prompt:"At the edge of the serene and circular Yeak Laom volcanic lake in Ratanakiri, surrounded by dense tropical forest."},{id:"independence-monument",label:"វិមានឯករាជ្យ",prompt:"At the Independence Monument in Phnom Penh, a majestic Angkorian-style tower in the heart of the city."},{id:"kep-beach",label:"ឆ្នេរកែប",prompt:"At the peaceful Kep beach, with its famous crab statue in the water and a relaxing seaside atmosphere."},{id:"bamboo-train",label:"ឡូរីបាត់ដំបង",prompt:"Riding the famous Bamboo Train (Norry) in Battambang, traveling through the scenic Cambodian countryside."},{id:"kampot-river",label:"ព្រែកកំពត",prompt:"A peaceful sunset view of the Kampot river, with the Elephant Mountains in the background and traditional fishing boats."},{id:"mangrove-forest",label:"ព្រៃកោងកាងកោះកុង",prompt:"Walking on a wooden bridge through the lush green mangrove forest in Koh Kong, with a tranquil and natural environment."}];/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const ge=G.bind(F),Si=({settings:n,setSettings:e,onGenerate:t,generating:o,hasImage:i,originalImage:r,onImageUpload:s})=>{const d=me(null),u=m=>{var v;const g=(v=m.currentTarget.files)==null?void 0:v[0];if(g){const b=new FileReader;b.onload=$=>{$.target&&e(C=>({...C,customClothingImage:$.target.result,clothing:""}))},b.readAsDataURL(g)}},c=m=>{e(g=>({...g,clothing:m.id==="giu-nguyen"?"":m.prompt,customClothingImage:null}))},p=m=>{e(g=>({...g,hairStyle:m.id==="giu-nguyen"?"":m.prompt}))},f=()=>{if(!n.clothing)return"giu-nguyen";const m=vn.find(g=>g.prompt===n.clothing);return m?m.id:""},h=()=>{if(!n.hairStyle)return"giu-nguyen";const m=Ho.find(g=>g.prompt===n.hairStyle);return m?m.id:""};return ge`
        <div class="settings-panel id-photo-settings-panel">
            <div class="form-section">
                <h3 class="form-section-title">១. រូបថតដើម</h3>
                ${r?ge`
                    <div class="image-preview-container">
                        <img src=${r} alt="Uploaded preview"/>
                        <button class="btn btn-secondary" onClick=${()=>s("")} style=${{width:"100%",marginTop:"1rem"}}>
                            បង្ហោះរូបថតផ្សេងទៀត
                        </button>
                    </div>
                `:ge`
                     <${ne} onImageUpload=${s} id="id-photo-uploader"/>
                `}
            </div>
            
            <div class="form-section">
                <h3 class="form-section-title">២. កែសម្រួលរូបថត</h3>
                
                <div class="form-group">
                    <label class="form-section-label">ភេទ</label>
                    <div class="toggle-group">
                        ${Bd.map(m=>ge`
                            <button 
                                class="toggle-btn ${n.gender===m.id?"active":""}"
                                onClick=${()=>e(g=>({...g,gender:m.id}))}
                            >
                                ${m.label}
                            </button>
                        `)}
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-section-label">ប្រភេទមនុស្ស</label>
                    <div class="toggle-group">
                        ${Hd.map(m=>ge`
                            <button 
                                class="toggle-btn ${n.ageGroup===m.id?"active":""}"
                                onClick=${()=>e(g=>({...g,ageGroup:m.id}))}
                            >
                                ${m.label}
                            </button>
                        `)}
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-section-label">សម្លៀកបំពាក់</label>
                    <div class="option-grid">
                        <input 
                            type="file" 
                            ref=${d} 
                            onChange=${u} 
                            accept="image/*" 
                            style=${{display:"none"}} 
                        />
                        <button 
                            class="option-btn custom-upload-btn ${n.customClothingImage?"active":""}"
                            onClick=${()=>{var m;return(m=d.current)==null?void 0:m.click()}}
                            title="បង្ហោះសម្លៀកបំពាក់ផ្ទាល់ខ្លួន"
                        >
                            ${n.customClothingImage?ge`
                                <img src=${n.customClothingImage} />
                                <button 
                                    class="remove-reference-btn" 
                                    onClick=${m=>{m.stopPropagation(),e(g=>({...g,customClothingImage:null}))}}
                                >
                                    <${ye}/>
                                </button>
                            `:ge`
                                <${J} style=${{width:"24px",height:"24px"}} />
                                <span style=${{fontSize:"0.75rem",marginTop:"4px"}}>បង្ហោះ</span>
                            `}
                        </button>

                        ${vn.filter(m=>!m.id.startsWith("khmer-traditional")).map(m=>ge`
                             <button 
                                class="option-btn ${f()===m.id&&!n.customClothingImage?"active":""}"
                                onClick=${()=>c(m)}
                                title=${m.label}
                            >
                                ${m.label}
                            </button>
                        `)}
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-section-label">ម៉ូដសក់</label>
                    <div class="option-grid">
                        ${Ho.map(m=>ge`
                             <button 
                                class="option-btn ${h()===m.id?"active":""}"
                                onClick=${()=>p(m)}
                                title=${m.label}
                            >
                                ${m.label}
                            </button>
                        `)}
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-section-label">ពណ៌ផ្ទៃខាងក្រោយ</label>
                    <div class="toggle-group">
                        ${qd.map(m=>ge`
                            <button 
                                class="toggle-btn ${n.background===m.id?"active":""}"
                                onClick=${()=>e(g=>({...g,background:m.id}))}
                            >
                                ${m.label}
                            </button>
                        `)}
                    </div>
                </div>

                <div class="slider-group">
                    <div class="switch-group">
                         <label>ធ្វើឱ្យស្បែកស្អាត (រលោង, បំបាត់មុន)</label>
                         <label class="switch">
                            <input type="checkbox" checked=${n.beautifySkin} onChange=${m=>e(g=>({...g,beautifySkin:m.currentTarget.checked}))} />
                            <span class="slider-switch"></span>
                        </label>
                    </div>

                     <div class="slider-control">
                        <div class="slider-label">
                            <span>កម្រិតនៃភាពស្រស់ស្អាត</span>
                            <span class="value">${n.beautifyLevel}%</span>
                        </div>
                        <input type="range" min="0" max="100" value=${n.beautifyLevel} onInput=${m=>e(g=>({...g,beautifyLevel:parseInt(m.currentTarget.value,10)}))}/>
                    </div>

                     <div class="slider-control">
                        <div class="slider-label">
                            <span>កម្រិតពន្លឺស្បែក</span>
                             <span class="value">${n.brightnessLevel}%</span>
                        </div>
                        <input type="range" min="0" max="100" value=${n.brightnessLevel} onInput=${m=>e(g=>({...g,brightnessLevel:parseInt(m.currentTarget.value,10)}))}/>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-section-label">ការពិពណ៌នាផ្ទាល់ខ្លួន (ជម្រើស)</label>
                    <textarea
                        placeholder="ឧទាហរណ៍៖ បន្ថែមប្រជ្រុយតូចមួយនៅក្រោមភ្នែកឆ្វេង"
                        value=${n.customPrompt}
                        onInput=${m=>e(g=>({...g,customPrompt:m.currentTarget.value}))}
                    ></textarea>
                </div>
            </div>


            <button class="btn btn-primary" onClick=${t} disabled=${o||!i} style=${{width:"100%",padding:"0.85rem"}}>
                ${o?"កំពុងដំណើរការ...":"បង្កើតរូបថត"}
            </button>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Kd=300,Ot={"10x15cm":{w:152,h:102},"13x18cm":{w:178,h:127},A4:{w:297,h:210},A5:{w:210,h:148}},ct={"2x3cm":{w:20,h:30},"3x4cm":{w:30,h:40},"4x6cm":{w:40,h:60}},ee=n=>n/25.4*Kd,dt=n=>new Promise((e,t)=>{const o=new Image;o.crossOrigin="anonymous",o.onload=()=>e(o),o.onerror=i=>t(i),o.src=n}),Jd=(n,e)=>new Promise(async(t,o)=>{try{const i=await dt(n),r=document.createElement("canvas"),s=r.getContext("2d");if(!s)return o("មិនអាចប្រើប្រាស់ Canvas context បានទេ");const d=i.width/i.height;let u=0,c=0,p=i.width,f=i.height;d>e?(p=i.height*e,u=(i.width-p)/2):d<e&&(f=i.width/e,c=(i.height-f)/2),r.width=p,r.height=f,s.drawImage(i,u,c,p,f,0,0,p,f),t(r.toDataURL("image/jpeg"))}catch(i){o(i)}}),Wd=async(n,e)=>{const t=await dt(n),o=document.createElement("canvas"),i=o.getContext("2d");if(!i)throw new Error("មិនអាចប្រើប្រាស់ Canvas context បានទេ");if(e.aspectRatio){const r=t.width/t.height;let s=0,d=0,u=t.width,c=t.height;r>e.aspectRatio?(u=t.height*e.aspectRatio,s=(t.width-u)/2):(c=t.width/e.aspectRatio,d=(t.height-c)/2),o.width=u,o.height=c,i.drawImage(t,s,d,u,c,0,0,u,c)}else if(e.width&&e.height){const r=e.width,s=e.height;o.width=r,o.height=s;const d=t.width/t.height,u=r/s;let c=0,p=0,f=t.width,h=t.height;d>u?(f=t.height*u,c=(t.width-f)/2):(h=t.width/u,p=(t.height-h)/2),i.drawImage(t,c,p,f,h,0,0,r,s)}else throw new Error("ជម្រើសប្តូរទំហំមិនត្រឹមត្រូវ។ សូមផ្តល់សមាមាត្រ ឬទាំងទទឹង និងកម្ពស់។");return o.toDataURL("image/jpeg",.95)},qo=(n,e,t)=>new Promise((o,i)=>{const r=Ot[e],s=ct[t];if(!r||!s)return i(new Error("ទំហំក្រដាស ឬទំហំរូបថតមិនត្រឹមត្រូវ"));const d=document.createElement("canvas"),u=d.getContext("2d");if(!u)return i(new Error("មិនអាចបង្កើត Canvas context បានទេ"));const c=ee(r.w),p=ee(r.h),f=ee(s.w),h=ee(s.h);d.width=c,d.height=p,u.fillStyle="white",u.fillRect(0,0,d.width,d.height);const m=new Image;m.crossOrigin="anonymous",m.onload=()=>{const g=ee(2),v=Math.floor((c+g)/(f+g)),b=Math.floor((p+g)/(h+g)),$=v*f+(v-1)*g,C=b*h+(b-1)*g,x=(c-$)/2,w=(p-C)/2;for(let y=0;y<b;y++)for(let k=0;k<v;k++){const E=x+k*(f+g),T=w+y*(h+g),I=m.width/m.height,A=f/h;let S,P,M,L;I>A?(P=m.height,S=P*A,M=(m.width-S)/2,L=0):(S=m.width,P=S/A,M=0,L=(m.height-P)/2),u.drawImage(m,M,L,S,P,E,T,f,h)}o(d.toDataURL("image/jpeg"))},m.onerror=()=>i(new Error("មិនអាចបង្ហោះរូបថតដើម្បីរៀបចំបានទេ")),m.src=n}),Yd=async n=>{const e=Ot["10x15cm"],t=ct["4x6cm"],o=ct["3x4cm"],i=document.createElement("canvas"),r=i.getContext("2d");if(!r)throw new Error("មិនអាចប្រើប្រាស់ Canvas context បានទេ");const s=ee(e.w),d=ee(e.h);i.width=s,i.height=d,r.fillStyle="white",r.fillRect(0,0,i.width,i.height);const[u,c]=await Promise.all([dt(n),dt(n)]),p=ee(2),f=ee(t.w),h=ee(t.h),m=3*f+2*p,g=(s-m)/2,v=p*2;for(let y=0;y<3;y++){const k=u.width/u.height,E=f/h;let T=u.width,I=u.height,A=0,S=0;k>E?(T=I*E,A=(u.width-T)/2):(I=T/E,S=(u.height-I)/2),r.drawImage(u,A,S,T,I,g+y*(f+p),v,f,h)}const b=ee(o.w),$=ee(o.h),C=4*b+3*p,x=(s-C)/2,w=v+h+p;for(let y=0;y<4;y++){const k=c.width/c.height,E=b/$;let T=c.width,I=c.height,A=0,S=0;k>E?(T=I*E,A=(c.width-T)/2):(I=T/E,S=(c.height-I)/2),r.drawImage(c,A,S,T,I,x+y*(b+p),w,b,$)}return i.toDataURL("image/jpeg")},Qd=async(n,e,t)=>{const o=Ot[e];if(!o)throw new Error("ទំហំក្រដាសមិនត្រឹមត្រូវ");const i=document.createElement("canvas"),r=i.getContext("2d");if(!r)throw new Error("មិនអាចបង្កើត Canvas context បានទេ");const s=ee(o.w),d=ee(o.h);i.width=s,i.height=d,r.fillStyle="white",r.fillRect(0,0,i.width,i.height);const u=await dt(n),c=ee(2),p=[];for(const g in t){const v=t[g],b=ct[g];if(v>0&&b)for(let $=0;$<v;$++)p.push({w:ee(b.w),h:ee(b.h)})}p.sort((g,v)=>v.h-g.h);let f=c,h=c,m=0;for(const g of p){if(f+g.w>s-c&&(f=c,h+=m+c,m=0),h+g.h>d-c){const y=p.indexOf(g);throw new Error(`មិនមានកន្លែងគ្រប់គ្រាន់ទេ! អាចរៀបចំបានតែ ${y}/${p.length} រូបថតប៉ុណ្ណោះ។`)}const v=u.width/u.height,b=g.w/g.h;let $,C,x,w;v>b?(C=u.height,$=C*b,x=(u.width-$)/2,w=0):($=u.width,C=$/b,x=0,w=(u.height-C)/2),r.drawImage(u,x,w,$,C,f,h,g.w,g.h),f+=g.w+c,g.h>m&&(m=g.h)}return i.toDataURL("image/jpeg")};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Xt=G.bind(F),Xd=({onQuickCropAndDownload:n,onArrange:e,onDownloadArrangement:t,onBackToEditor:o,activeArrangement:i,isProcessing:r,canDownloadArrangement:s,paperSize:d,onPaperSizeChange:u,onResize:c,customWidth:p,setCustomWidth:f,customHeight:h,setCustomHeight:m,customArrangement:g,onCustomArrangementChange:v,onCustomArrange:b})=>Xt`
        <div class="settings-panel id-photo-settings-panel">
            <div class="form-section">
                <h3 class="form-section-title">កាត់ និងទាញយកលឿន</h3>
                <div class="form-group-row">
                    <button class="btn btn-secondary" style=${{flex:1}} onClick=${()=>n("3x4")}>
                        <${ce} /> កាត់ 3x4
                    </button>
                    <button class="btn btn-secondary" style=${{flex:1}} onClick=${()=>n("4x6")}>
                        <${ce} /> កាត់ 4x6
                    </button>
                </div>
            </div>

             <div class="form-section">
                <h3 class="form-section-title">ប្តូរទំហំរូបថត</h3>
                <label class="form-section-label">កាត់តាមសមាមាត្រ</label>
                <div class="option-grid">
                    <button class="option-btn" onClick=${()=>c({aspectRatio:1})}>ការ៉េ (1:1)</button>
                    <button class="option-btn" onClick=${()=>c({aspectRatio:16/9})}>ផ្ដេក (16:9)</button>
                    <button class="option-btn" onClick=${()=>c({aspectRatio:9/16})}>បញ្ឈរ (9:16)</button>
                </div>
                <label class="form-section-label" style=${{marginTop:"1rem"}}>ទំហំតាមតម្រូវការ (cm)</label>
                <div class="form-group-row">
                    <input type="number" step="0.1" class="number-input" placeholder="ទទឹង" value=${p} onInput=${$=>f($.currentTarget.value===""?"":parseFloat($.currentTarget.value))} />
                    <input type="number" step="0.1" class="number-input" placeholder="កម្ពស់" value=${h} onInput=${$=>m($.currentTarget.value===""?"":parseFloat($.currentTarget.value))} />
                </div>
                 <button 
                    class="btn btn-secondary" 
                    style=${{width:"100%",marginTop:"0.5rem"}}
                    onClick=${()=>c({width:ee(Number(p)*10),height:ee(Number(h)*10)})}
                    disabled=${!p||!h}
                >ប្តូរទំហំ</button>
            </div>

            <div class="form-section">
                <div class="form-group">
                    <label for="paper-size" class="form-section-label">ជ្រើសរើសទំហំក្រដាសបោះពុម្ព</label>
                    <select id="paper-size" value=${d} onChange=${$=>u($.currentTarget.value)}>
                        ${Object.keys(Ot).map($=>Xt`
                            <option value=${$}>${$.replace(/cm$/," cm")}</option>
                        `)}
                    </select>
                </div>
                <h3 class="form-section-title">រៀបចំរូបថតសម្រាប់បោះពុម្ព (ទំហំ ${d.replace(/cm$/," cm")})</h3>
                <div class="option-grid" style=${{gridTemplateColumns:"1fr",gap:"0.5rem"}}>
                    <button 
                        class="option-btn ${i==="8_3x4"?"active btn-danger":""}"
                        onClick=${()=>e("8_3x4")}
                        disabled=${r}
                    >រៀបចំរូបថត 3x4</button>
                    <button 
                        class="option-btn ${i==="5_4x6"?"active btn-danger":""}"
                        onClick=${()=>e("5_4x6")}
                        disabled=${r}
                    >រៀបចំរូបថត 4x6</button>
                    <button 
                        class="option-btn ${i==="mixed"?"active btn-danger":""}"
                        onClick=${()=>e("mixed")}
                        disabled=${r||d!=="10x15cm"}
                        title=${d!=="10x15cm"?"សម្រាប់តែទំហំ 10x15cm ប៉ុណ្ណោះ":""}
                    >រូបថត 4x6 ចំនួន 3 + រូបថត 3x4 ចំនួន 4</button>
                </div>

                <div style=${{borderTop:"1px solid var(--border-color)",paddingTop:"1.5rem",marginTop:"1.5rem"}}>
                     <h3 class="form-section-title" style=${{border:"none",padding:0,margin:0}}>ឬរៀបចំតាមតម្រូវការ</h3>
                    <div class="form-group" style=${{display:"flex",flexDirection:"column",gap:"0.75rem",marginTop:"1rem"}}>
                        ${Object.entries(ct).map(([$,C])=>Xt`
                            <div key=${$} class="form-group-row" style=${{alignItems:"center",gap:"0.5rem"}}>
                                <label for=${`custom-count-${$}`} style=${{flex:1,margin:0,fontSize:"0.9rem",color:"var(--text-secondary)"}}>
                                    ចំនួនរូបថត ${C.w/10}x${C.h/10}cm
                                </label>
                                <input
                                    type="number"
                                    id=${`custom-count-${$}`}
                                    class="number-input"
                                    min="0"
                                    max="50"
                                    value=${g[$]||0}
                                    onInput=${x=>v($,parseInt(x.currentTarget.value,10)||0)}
                                    style=${{flex:"0 0 70px"}}
                                    disabled=${r}
                                />
                            </div>
                        `)}
                    </div>
                    <button
                        class=${`btn btn-secondary ${i==="custom"?"active btn-danger":""}`}
                        style=${{width:"100%",marginTop:"1rem"}}
                        onClick=${b}
                        disabled=${r||Object.values(g).every($=>$===0)}
                    >
                        ${r&&i==="custom"?"កំពុងបង្កើត...":"បង្កើតប្លង់តាមតម្រូវការ"}
                    </button>
                </div>
            </div>
            
            <button class="btn btn-primary" onClick=${t} disabled=${!s||r} style=${{width:"100%",marginTop:"1.5rem",padding:"0.85rem"}}>
                <${ce} /> ទាញយកឯកសារ
            </button>
             <button class="btn btn-secondary" onClick=${o} style=${{width:"100%",marginTop:"0.5rem"}}>
                ត្រឡប់ក្រោយ
            </button>
        </div>
    `;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Ut="nhc-magic-tool-history",zo=50,Be=512,Oo=n=>new Promise(e=>{if(!n)return e("");const t=new Image;t.onload=()=>{let{width:o,height:i}=t;o>i?o>Be&&(i=Math.round(i*(Be/o)),o=Be):i>Be&&(o=Math.round(o*(Be/i)),i=Be);const r=document.createElement("canvas");r.width=o,r.height=i;const s=r.getContext("2d");if(!s)return console.error("Could not get canvas context for image compression."),e(n);s.drawImage(t,0,0,o,i),e(r.toDataURL("image/jpeg",.8))},t.onerror=o=>{console.error("Failed to load image for compression, storing original.",o),e(n)},t.src=n}),Tn=()=>{try{const n=localStorage.getItem(Ut);return n?JSON.parse(n):[]}catch(n){return console.error("Error loading history:",n),[]}},Pi=n=>{try{localStorage.setItem(Ut,JSON.stringify(n))}catch(e){if(console.error("Error saving history:",e),e instanceof DOMException&&(e.name==="QuotaExceededError"||e.code===22))if(console.warn("Local storage quota exceeded. Pruning oldest history item and retrying."),n.length>1){const t=n.slice(0,n.length-1);try{localStorage.setItem(Ut,JSON.stringify(t))}catch(o){console.error("Error saving history even after pruning:",o)}}else console.error("Cannot save history, single item is too large for local storage.")}},pe=async n=>{const e=Tn(),[t,o]=await Promise.all([Oo(n.original),Oo(n.generated)]),r=[{...n,original:t,generated:o,id:Date.now(),timestamp:Date.now()},...e];r.length>zo&&(r.length=zo),Pi(r)},Zd=n=>{const t=Tn().filter(o=>o.id!==n);Pi(t)},jd=()=>{try{localStorage.removeItem(Ut)}catch(n){console.error("Error clearing history:",n)}};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const K=G.bind(F),eu=()=>{const[n,e]=_(null),[t,o]=_(null),[i,r]=_(!1),[s,d]=_(""),[u,c]=_({gender:"nu",ageGroup:"thanh-nien",clothing:"",customClothingImage:null,hairStyle:"",background:"xanh",beautifySkin:!0,beautifyLevel:50,brightnessLevel:50,customPrompt:""}),[p,f]=_("editor"),[h,m]=_(null),[g,v]=_(null),[b,$]=_(!1),[C,x]=_(null),[w,y]=_("10x15cm"),[k,E]=_(""),[T,I]=_(""),[A,S]=_({"2x3cm":0,"3x4cm":0,"4x6cm":0}),[P,M]=_(null),L=async()=>{if(n){r(!0),d("");try{const V=await pn(n,u);o(V);const q=ie.find(Xe=>Xe.id==="id-photo");await pe({original:n,generated:V,feature:"id-photo",featureLabel:(q==null?void 0:q.label)||"រូបថតកាត"})}catch(V){V instanceof Error?d(V.message):d(String(V))}finally{r(!1)}}},O=()=>{t&&f("arrange_presets")},be=async V=>{if(!(!t||b)){$(!0),x(V),d(""),m(null),v(null);try{let q;switch(V){case"8_3x4":q=await qo(t,w,"3x4cm");break;case"5_4x6":q=await qo(t,w,"4x6cm");break;case"mixed":q=await Yd(t);break}m(q)}catch(q){d(q instanceof Error?q.message:"មានបញ្ហាក្នុងការរៀបចំរូបថត។")}finally{$(!1)}}},Ve=V=>{e(V),o(null),m(null),v(null),x(null),d(""),f("editor")},we=async V=>{if(t)try{const Xe=await Jd(t,V==="3x4"?.75:.6666666666666666),Yt=document.createElement("a");Yt.href=Xe,Yt.download=`id-photo-${V}.jpeg`,Yt.click()}catch(q){d(q instanceof Error?q.message:`មានបញ្ហាក្នុងការកាត់រូបថត ${V}។`)}},Ae=()=>{const V=g||h;if(!V)return;const q=document.createElement("a");q.href=V,q.download=`processed-image-${Date.now()}.jpeg`,q.click()},gt=()=>{f("editor"),m(null),v(null),x(null),E(""),I("")},Kt=V=>{y(V),m(null),v(null),x(null)},Jt=async V=>{if(!(!t||b)){$(!0),d(""),m(null),v(null),x(null);try{const q=await Wd(t,V);v(q)}catch(q){d(q instanceof Error?q.message:"មានបញ្ហាក្នុងការប្តូរទំហំរូបថត។")}finally{$(!1)}}},Wt=(V,q)=>{S(Xe=>({...Xe,[V]:Math.max(0,q)}))},Se=async()=>{if(!(!t||b||Object.values(A).every(V=>V===0))){$(!0),x("custom"),d(""),m(null),v(null);try{const V=await Qd(t,w,A);m(V)}catch(V){d(V instanceof Error?V.message:"មានបញ្ហាក្នុងការរៀបចំរូបថតតាមតម្រូវការ។")}finally{$(!1)}}},Li=()=>{if(!n)return K`
                <div class="image-panel-content">
                    <${Ei} class="placeholder-icon"/>
                    <h4>សូមស្វាគមន៍មកកាន់ Passport Photo AI</h4>
                    <p class="placeholder-text">សូមបង្ហោះរូបថត និងជ្រើសរើសការកំណត់ដែលអ្នកចង់បានដើម្បីចាប់ផ្តើម។</p>
                </div>
            `;const V=g||h||t;return p==="arrange_presets"?K`
                ${P&&K`
                    <${Fe}
                        imageUrl=${P}
                        caption="មើលរូបថតកាតដែលបានរៀបចំ"
                        onClose=${()=>M(null)}
                    />
                `}
                ${b&&K`<${H} text="កំពុងដំណើរការរូបថត..." />`}
                <div class="image-display-wrapper" style=${{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--background)"}}>
                    <img src=${V} alt="Processed Photo" style=${{cursor:"pointer",maxWidth:"100%",maxHeight:"100%",objectFit:"contain",border:"1px solid var(--border-color)",borderRadius:"4px"}} onClick=${()=>M(V)} />
                </div>
                ${s&&K`<${te} error=${s} />`}
            `:K`
            ${P&&K`
                <${Fe}
                    imageUrl=${P}
                    caption="មើលរូបថតកាត"
                    onClose=${()=>M(null)}
                />
            `}
            ${i&&K`<${H} text="AI កំពុងបង្កើតរូបថតកាតរបស់អ្នក..." />`}
            <div class="image-display-wrapper">
                <${se} original=${n} generated=${t} objectFit="contain" />
            </div>
            ${s&&K`<${te} error=${s} />`}
            <div class="actions">
                 ${t&&K`
                    <button class="btn btn-secondary" onClick=${()=>M(t)}>
                        <${mt} /> មើល
                    </button>
                    <button class="btn btn-secondary" onClick=${O}>
                        កាត់ និងរៀបចំរូបថតសម្រាប់បោះពុម្ព
                    </button>
                `}
                <${Y} baseImageUrl=${t} filename="id-photo.jpeg">
                    <${ce} /> ទាញយក
                </${Y}>
            </div>
        `};return K`
        <div class="editor-layout">
            ${p==="editor"||!t?K`
                <${Si} 
                    settings=${u} 
                    setSettings=${c} 
                    onGenerate=${L} 
                    generating=${i} 
                    hasImage=${!!n} 
                    originalImage=${n}
                    onImageUpload=${Ve}
                />
            `:K`
                 <${Xd}
                    onQuickCropAndDownload=${we}
                    onArrange=${be}
                    onDownloadArrangement=${Ae}
                    onBackToEditor=${gt}
                    activeArrangement=${C}
                    isProcessing=${b}
                    canDownloadArrangement=${!!(h||g)}
                    paperSize=${w}
                    onPaperSizeChange=${Kt}
                    onResize=${Jt}
                    customWidth=${k}
                    setCustomWidth=${E}
                    customHeight=${T}
                    setCustomHeight=${I}
                    customArrangement=${A}
                    onCustomArrangementChange=${Wt}
                    onCustomArrange=${Se}
                />
            `}
            
            <div class="image-panel">
               ${Li()}
            </div>
        </div>
    `},tu=()=>{const[n,e]=_([]),[t,o]=_({gender:"nu",ageGroup:"thanh-nien",clothing:"",customClothingImage:null,hairStyle:"",background:"xanh",beautifySkin:!0,beautifyLevel:50,brightnessLevel:50,customPrompt:""}),[i,r]=_(!1),[s,d]=_(0),[u,c]=_(""),[p,f]=_(!1),h=y=>{if(!y.currentTarget.files)return;const E=Array.from(y.currentTarget.files).map(T=>({id:Date.now()+Math.random(),file:T,original:URL.createObjectURL(T),generated:null,status:"pending"}));e(T=>[...T,...E])},m=y=>new Promise((k,E)=>{const T=new FileReader;T.onload=()=>k(T.result),T.onerror=E,T.readAsDataURL(y)}),g=async(y,k,E)=>{let T=0;const I=[...y],A=async()=>{for(;I.length>0;){const P=I.shift();P&&(await E(P),T++,d(Math.round(T/y.length*100)),I.length>0&&await new Promise(M=>setTimeout(M,2e3)))}},S=Array(k).fill(null).map(()=>A());await Promise.all(S)},v=async()=>{r(!0),d(0),c("");const y=n.filter(E=>E.status==="pending"||E.status==="error"),k=async E=>{e(T=>T.map(I=>I.id===E.id?{...I,status:"processing"}:I));try{const T=await m(E.file),I=await pn(T,t);e(S=>S.map(P=>P.id===E.id?{...P,generated:I,status:"done"}:P));const A=ie.find(S=>S.id==="id-photo");await pe({original:T,generated:I,feature:"id-photo",featureLabel:(A==null?void 0:A.label)||"រូបថតកាត"})}catch(T){throw T instanceof Error?c(T.message):c(String(T)),e(I=>I.map(A=>A.id===E.id?{...A,status:"error"}:A)),T}};try{await g(y,1,k)}catch(E){console.error("ដំណើរការជាក្រុមត្រូវបានបញ្ឈប់ដោយសារមានបញ្ហា។",E)}finally{r(!1)}},b=async y=>{const k=n.find(E=>E.id===y);if(k){e(E=>E.map(T=>T.id===y?{...T,status:"processing"}:T)),c("");try{const E=await m(k.file),T=await pn(E,t);e(A=>A.map(S=>S.id===y?{...S,generated:T,status:"done"}:S));const I=ie.find(A=>A.id==="id-photo");await pe({original:E,generated:T,feature:"id-photo",featureLabel:(I==null?void 0:I.label)||"រូបថតកាត"})}catch(E){E instanceof Error?c(E.message):c(String(E)),e(T=>T.map(I=>I.id===y?{...I,status:"error"}:I))}}},$=y=>{e(k=>k.filter(E=>E.id!==y))},C=async()=>{f(!0),c("");const y=n.filter(k=>k.generated);for(let k=0;k<y.length;k++){const E=y[k];if(E.generated)try{const T=document.createElement("a");T.href=E.generated,T.download=`id-photo-${E.id}.jpeg`,document.body.appendChild(T),T.click(),document.body.removeChild(T),await new Promise(I=>setTimeout(I,300))}catch(T){const I=`មានបញ្ហាក្នុងការទាញយករូបថតទី ${k+1}។`;c(I),console.error(I,T);break}}f(!1)},x=de(()=>n.filter(y=>y.status==="pending"||y.status==="error").length,[n]),w=x>0?`បង្កើតរូបថត ${x}`:"បង្កើតរូបថត";return K`
        <div class="editor-layout">
            <${Si}
                settings=${t}
                setSettings=${o}
                onGenerate=${v}
                generating=${i}
                hasImage=${x>0}
                buttonText=${w}
                originalImage=${null}
                onImageUpload=${()=>{}}
            />
            <div class="batch-panel">
                <div class="actions" style=${{justifyContent:"space-between",marginBottom:"1.5rem"}}>
                     <button class="btn btn-secondary" onClick=${()=>{var y;return(y=document.getElementById("batch-file-input"))==null?void 0:y.click()}}>
                         <${J} /> បន្ថែមរូបថត
                    </button>
                     <input type="file" id="batch-file-input" multiple accept="image/*" style=${{display:"none"}} onChange=${h} />
                    <button class="btn btn-primary" onClick=${C} disabled=${n.every(y=>!y.generated)||p}>
                        ${p?"កំពុងទាញយក...":K`<${ce} /> ទាញយកទាំងអស់`}
                    </button>
                </div>
                
                ${i&&K`
                    <div class="progress-bar">
                        <div class="progress-bar-inner" style=${{width:`${s}%`}}></div>
                        <span class="progress-label">${s}%</span>
                    </div>
                `}
                
                ${u&&K`<div class="error-message" style=${{marginTop:"1rem"}}>${u}</div>`}
    
                <div class="batch-grid">
                    ${n.map(y=>K`
                        <div class="batch-item">
                            <div class="image-container">
                                <img src=${y.generated||y.original} />
                                ${y.status==="processing"&&K`<${H} text="កំពុងដំណើរការ..." />`}
                                ${y.status==="error"&&K`<div class="error-badge">បញ្ហា</div>`}
                            </div>
                            <div class="batch-item-actions">
                                <button class="batch-item-btn" title="បង្កើតឡើងវិញ" onClick=${()=>b(y.id)}><${zt} /></button>
                                <button class="batch-item-btn" title="លុប" onClick=${()=>$(y.id)}><${We} /></button>
                            </div>
                        </div>
                    `)}
                     ${n.length===0&&K`
                        <div class="image-panel-content" style=${{gridColumn:"1 / -1"}}>
                             <${Ei} class="placeholder-icon"/>
                             <h4>កែសម្រួលរូបថតជាក្រុម</h4>
                             <p class="placeholder-text">បង្ហោះរូបថតច្រើនដើម្បីចាប់ផ្តើមកែសម្រួលក្នុងពេលតែមួយ។</p>
                        </div>
                     `}
                </div>
            </div>
        </div>
    `},nu=()=>{const[n,e]=_("single");return K`
        <div>
            <div class="tabs">
                <button class="tab ${n==="single"?"active":""}" onClick=${()=>e("single")}>កែសម្រួលរូបថតមួយសន្លឹក</button>
                <button class="tab ${n==="batch"?"active":""}" onClick=${()=>e("batch")}>កែសម្រួលជាក្រុម</button>
            </div>
            ${n==="single"?K`<${eu} />`:K`<${tu} />`}
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Ze=G.bind(F),Ri=({settings:n,setSettings:e,onGenerate:t,generating:o,hasImage:i,buttonText:r,originalImage:s,isBatch:d=!1,onImageChange:u})=>{const[c,p]=_(null),[f,h]=_(!1),[m,g]=_(""),v=async()=>{if(!(!s||f)){h("analyze"),g("");try{const w=await Bc(s);e(y=>({...y,...w}))}catch(w){g(w instanceof Error?w.message:"កំហុសក្នុងការវិភាគរូបថត។")}finally{h(!1)}}},b=async()=>{if(!(!s||f)){h("describe"),g("");try{const w=await Hc(s);e(y=>({...y,advancedPrompt:w}))}catch(w){g(w instanceof Error?w.message:"កំហុសក្នុងការបង្កើតការពិពណ៌នា។")}finally{h(!1)}}},$=w=>{p(null);const{name:y,checked:k}=w.currentTarget;e(E=>({...E,[y]:k}))},C=w=>{p(w);const y={colorize:!1,highQuality:!1,redrawHair:!1,sharpenBackground:!1,adhereToFace:!1,sharpenWrinkles:!1,isVietnamese:!1,redrawClothing:!1,advancedPrompt:""};switch(w){case"hq":e(k=>({...k,...y,highQuality:!0,adhereToFace:!0,isVietnamese:!0}));break;case"color":e(k=>({...k,...y,colorize:!0,highQuality:!0,adhereToFace:!0,isVietnamese:!0}));break;case"heavy_damage":e(k=>({...k,...y,highQuality:!0,redrawHair:!0,redrawClothing:!0,adhereToFace:!0}));break;case"deyellow":e(k=>({...k,...y,highQuality:!0,advancedPrompt:"លុបស្នាមលឿង និងការហើរពណ៌"}));break;case"advanced_portrait":e(k=>({...k,...y,highQuality:!0,redrawHair:!0,adhereToFace:!0,sharpenWrinkles:!0}));break;case"painting":e(k=>({...k,...y,highQuality:!0,advancedPrompt:"ស្តារគំនូរឡើងវិញ"}));break;case"detailed":e(k=>({...k,...y,highQuality:!0,redrawHair:!0,redrawClothing:!0,sharpenBackground:!0,adhereToFace:!0}));break;case"colorize_bw":e(k=>({...k,...y,colorize:!0,advancedPrompt:"ផាត់ពណ៌សម្រាប់រូបថតសខ្មៅ"}));break}},x=[{id:"hq",label:"ស្តារឡើងវិញគុណភាពខ្ពស់"},{id:"color",label:"ស្តារឡើងវិញ និងផាត់ពណ៌"},{id:"heavy_damage",label:"បង្កើតរូបថតដែលខូចធ្ងន់ធ្ងរឡើងវិញ"},{id:"deyellow",label:"លុបស្នាមលឿង និងការហើរពណ៌"},{id:"advanced_portrait",label:"ស្តាររូបថតបញ្ឈរកម្រិតខ្ពស់"},{id:"painting",label:"ស្តារគំនូរឡើងវិញ"},{id:"detailed",label:"ស្តារឡើងវិញ និងគូរលម្អិតបំផុត"},{id:"colorize_bw",label:"ផាត់ពណ៌សម្រាប់រូបថតសខ្មៅ"}];return Ze`
        <div class="settings-panel">
            ${!d&&i&&u&&Ze`
                <div class="form-group">
                     <button class="btn btn-secondary" onClick=${u} style=${{width:"100%"}}>
                        <${J} /> ប្តូររូបថត
                    </button>
                </div>
            `}
            <div class="form-group">
                <div class="btn-group" style="display: flex; gap: 0.5rem;">
                    <button 
                        class="btn btn-secondary" 
                        style="flex:1;"
                        onClick=${v}
                        disabled=${!s||!!f||o}
                    >
                        ${f==="analyze"?"កំពុងវិភាគ...":"វិភាគដោយស្វ័យប្រវត្តិ"}
                    </button>
                    <button 
                        class="btn btn-secondary" 
                        style="flex:1;"
                        onClick=${b}
                        disabled=${!s||!!f||o}
                    >
                        ${f==="describe"?"កំពុងបង្កើត...":"បង្កើតការពិពណ៌នា"}
                    </button>
                </div>
                ${m&&Ze`<div class="error-message" style="margin-top: 1rem; text-align: left;">${m}</div>`}
            </div>
            
            <div class="form-group">
                <label class="form-section-title">ជម្រើសស្តារឡើងវិញ</label>
                <div class="checkbox-grid-restoration">
                    <label><input type="checkbox" name="colorize" checked=${n.colorize} onChange=${$} /> ផាត់ពណ៌</label>
                    <label><input type="checkbox" name="adhereToFace" checked=${n.adhereToFace} onChange=${$} /> តាមដានព័ត៌មានលម្អិតនៃផ្ទៃមុខ</label>
                    <label><input type="checkbox" name="highQuality" checked=${n.highQuality} onChange=${$} /> គុណភាពខ្ពស់</label>
                    <label><input type="checkbox" name="sharpenWrinkles" checked=${n.sharpenWrinkles} onChange=${$} /> ធ្វើឱ្យជ្រួញច្បាស់</label>
                    <label><input type="checkbox" name="redrawHair" checked=${n.redrawHair} onChange=${$} /> គូររូបសក់លម្អិតឡើងវិញ</label>
                    <label><input type="checkbox" name="isVietnamese" checked=${n.isVietnamese} onChange=${$} /> លក្ខណៈអាស៊ី</label>
                    <label><input type="checkbox" name="sharpenBackground" checked=${n.sharpenBackground} onChange=${$} /> ធ្វើឱ្យផ្ទៃខាងក្រោយច្បាស់</label>
                    <label><input type="checkbox" name="redrawClothing" checked=${n.redrawClothing} onChange=${$} /> គូររូបសម្លៀកបំពាក់ឡើងវិញ</label>
                </div>
            </div>

             <div class="form-group-row">
                <div class="form-group">
                    <label for="gender">ភេទ</label>
                    <select id="gender" value=${n.gender} onChange=${w=>{p(null),e(y=>({...y,gender:w.currentTarget.value}))}}>
                        <option value="auto">ស្វ័យប្រវត្តិ</option>
                        <option value="male">ប្រុស</option>
                        <option value="female">ស្រី</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="age">អាយុ</label>
                    <select id="age" value=${n.age} onChange=${w=>{p(null),e(y=>({...y,age:w.currentTarget.value}))}}>
                        <option value="auto">ស្វ័យប្រវត្តិ</option>
                        <option value="child">កុមារ</option>
                        <option value="young-adult">យុវជន</option>
                        <option value="adult">វ័យកណ្តាល</option>
                        <option value="senior">មនុស្សចាស់</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="smile">ស្នាមញញឹម</label>
                <select id="smile" value=${n.smile} onChange=${w=>{p(null),e(y=>({...y,smile:w.currentTarget.value}))}}>
                    <option value="auto">ស្វ័យប្រវត្តិ</option>
                    <option value="none">មិនញញឹម</option>
                    <option value="slight">ញញឹមតិចៗ</option>
                </select>
            </div>

             <div class="form-group">
                <label class="form-section-title">ឬជ្រើសរើសគំរូដែលមានស្រាប់</label>
                <div class="preset-grid">
                    ${x.map(w=>Ze`<button class="preset-btn ${c===w.id?"active":""}" onClick=${()=>C(w.id)}>${w.label}</button>`)}
                </div>
            </div>
            
             <div class="form-group">
                <label for="advanced-prompt">តម្រូវការកម្រិតខ្ពស់ (ជម្រើស)</label>
                <textarea 
                    id="advanced-prompt" 
                    value=${n.advancedPrompt}
                    onInput=${w=>{p(null),e(y=>({...y,advancedPrompt:w.currentTarget.value}))}}
                    disabled=${!!c}
                ></textarea>
            </div>

            <div class="form-group">
                <label for="custom-prompt">តម្រូវការតាមបំណង (Prompt):</label>
                <textarea 
                    id="custom-prompt" 
                    rows="6"
                    value=${n.customPrompt}
                    onInput=${w=>{p(null),e(y=>({...y,customPrompt:w.currentTarget.value}))}}
                    disabled=${!!c}
                ></textarea>
            </div>
            
            ${!d&&Ze`
                <div class="form-group">
                    <label for="num-results">ចំនួនលទ្ធផល (អតិបរមា ៥)</label>
                    <input class="number-input" type="number" id="num-results" min="1" max="5" value=${n.numResults} onInput=${w=>{p(null),e(y=>({...y,numResults:parseInt(w.currentTarget.value,10)||1}))}} />
                </div>
            `}

            <button class="btn btn-primary" onClick=${t} disabled=${o||!i} style=${{width:"100%",marginTop:"0.5rem",padding:"0.85rem"}}>
                ${o?"កំពុងស្តារឡើងវិញ...":r||"ស្តាររូបថតឡើងវិញ"}
            </button>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const oe=G.bind(F),ou=()=>{const[n,e]=_(null),[t,o]=_([]),[i,r]=_(null),[s,d]=_(!1),[u,c]=_(""),[p,f]=_({colorize:!0,highQuality:!0,redrawHair:!0,sharpenBackground:!0,adhereToFace:!0,sharpenWrinkles:!0,isVietnamese:!0,redrawClothing:!0,gender:"auto",age:"auto",smile:"auto",advancedPrompt:"",customPrompt:`ស្តាររូបថតចាស់នេះឡើងវិញក្នុងគុណភាពខ្ពស់៖ លុបស្នាមឆ្កូត ធូលី ស្នាមប្រឡាក់ ផ្នត់ ស្តារតំបន់ដែលព្រាលឡើងវិញ កែសម្រួលពន្លឺ និងកម្រិតពណ៌ ធ្វើឱ្យព័ត៌មានលម្អិតនៃផ្ទៃមុខច្បាស់ បង្កើនពណ៌ធម្មជាតិ រក្សាទម្រង់ដើម រក្សាពណ៌ស្បែកពិតប្រាកដ មិនធ្វើឱ្យស្បែករលោងខ្លាំងពេកដែលមើលទៅក្លែងក្លាយ។
"caption": "ស្តារ និងលើកកម្ពស់រូបថតចាស់ – រក្សាផ្ទៃខាងក្រោយដើម ពណ៌បែបភាពយន្ត ស្តង់ដារ Phase One XF IQ4 150MP",
"notes": "បំប្លែងរូបថតចាស់ (រួមទាំងរូបថតដែលថតឡើងវិញ) ទៅជារូបថតពណ៌ទំនើប ស្អាតឥតខ្ចោះ រក្សាផ្ទៃខាងក្រោយដើម ប៉ុន្តែលើកកម្ពស់គុណភាពដូចជាការថតថ្មី។ ផ្តល់អាទិភាពដល់ការរក្សាអត្តសញ្ញាណ និងកាយវិការ។",
"input_image": "REPLACE_WITH_IMAGE_ID_OR_PATH",
"preprocess": {
"detect_and_isolate_original_photo": true,
"auto_crop_photo_edges": true,
"clean_edges": true,
"remove_hands_or_objects": true,
"perspective_correction": true,
"flatten_page_curvature": true,
"glare_reduction": "strict",
"reflection_removal": "strict",
"specular_highlight_fix": true
},
"camera_emulation": {
"brand_model": "Phase One XF IQ4 150MP",
"lens": "Schneider Kreuznach 80mm LS f/2.8",
"medium_format": true,
"look": "ultimate sharpness, maximum dynamic range, medium format 3D pop, cinematic rendering"
},
"composition": {
"framing": "three-quarter body (from mid-thigh up)",
"orientation": "portrait",
"crop_policy": "do_not_crop_face_or_hands",
"keep_pose": true,
"zoom": "slight zoom-out for wider context"
},
"subject_constraints": {
"keep_identity": true,
"lock_features": ["eyes","nose","lips","eyebrows","jawline","face_shape","ears","hairline"],
"expression_policy": "preserve_original"
},
"retouching": {
"skin": {
"tone": "realistic warm neutral",
"finish": "radiant but detailed",
"texture": "retain fine pores; avoid plastic look",
"blemishes": "remove completely",
"luminosity_balance": "uniform subtle glow",
"color_uniformity": "fix uneven tones"
},
"hair": { "finish": "clean, neat, natural gloss", "flyaways": "reduce but keep natural strands" },
"eyes": {
"iris_color": "natural brown/gray",
"whites_desaturation": 0.1,
"iris_clarity": 0.2,
"avoid_overwhitening": true,
"avoid_exaggeration": true
},
"teeth": { "natural_whiten": 0.08, "avoid_pure_white": true },
"clothing": {
"fabric_look": "premium, fine weave, crisp edges",
"wrinkle_reduction": "moderate",
"texture_enhancement": 0.25
},
"repair_cracks": "strict",
"remove_dust_scratches": "strict",
"remove_stains": "strict",
"remove_folds": true,
"restore_faded_details": true
},
"colorization": {
"apply_to": "entire_photo",
"style": "cinematic, natural, true-to-life",
"skin_tone_accuracy": "very_high",
"background_colorization": "full, layered, realistic",
"clothing_colorization": "faithful but premium",
"avoid_exaggeration": true
},
"background": {
"policy": "preserve_and_enhance",
"keep_original": true,
"enhancement": {
"colorize": "natural, true-to-life, cinematic color grading",
"restore_damage": true,
"texture_cleanup": "remove paper grain and speckles completely",
"add_depth": "studio gradient with layered tones and soft atmospheric haze",
"contrast_boost": "medium-high with soft roll-off",
"dynamic_range": "expanded like medium format",
"lighting_match": true
},
"remove_external_objects": true,
"banding_fix_on_background": true
},
"color_tone": {
"overall": "natural, true-to-life",
"saturation": "balanced vivid",
"contrast": "medium with cinematic roll-off",
"vibrance": 0.2,
"color_restoration": "revive faded colors, unify uneven tones, remove discoloration completely",
"auto_tone_balance": "strict",
"auto_contrast_balance": true,
"recolorize_consistently": true
},
"detail_sharpness": {
"method": "edge-aware sharpening",
"amount": 0.4,
"radius": 0.9,
"threshold": 0.02,
"noise_reduction": { "luminance": 0.22, "chroma": 0.26, "preserve_details": 0.85 }
},
"clean_up": {
"remove_noise": true,
"remove_artifacts": true,
"remove_scratches": "strict",
"remove_dust": "strict",
"remove_stains": "strict",
"remove_folds": true,
"deblotching": true,
"desilvering_fix": true,
"paper_texture_reduction": "strong",
"restore_faded_colors": true,
"reconstruct_missing_parts": "museum-grade",
"reconstruct_missing_corners": true,
"hallucination_control": "only realistic restoration, no fantasy",
"heritage_preservation_strict": true,
"archival_quality": "museum-grade restoration, pristine finish",
"final_finish": "as new color studio photograph, indistinguishable from modern digital capture"
},
"controls": {
"face_identity_lock": 0.96,
"pose_lock": 0.95,
"background_enhancement_strength": 0.9,
"colorization_strength": 0.9,
"restoration_strength": 0.95,
"background_replace_strength": 0.0
},
"output": {
"resolution": "12000x8000",
"dpi": 600,
"format": "TIFF",
"color_space": "AdobeRGB 1998",
"bit_depth": "16-bit",
"background_alpha": "opaque"
},
"safety_bounds": {
"do_not": [
"change face geometry or identity",
"change pose",
"alter clothing style drastically",
"add heavy makeup",
"over-smooth or plastic skin",
"over-sharpen halos",
"exaggerated eye colors"
],
"negative_prompt": [
"paper grain",
"speckles",
"flat monochrome background",
"hands holding photo",
"photo edges visible",
"glare spots",
"crooked perspective",
"color casts",
"posterization/banding",
"muddy blacks",
"oversaturated skin",
"cartoonish colors",
"loss of fine texture",
"visible damage marks"
]
},
"seed": 142857,
"metadata": {
"locale": "km-KH",
"creator": "fine art restoration specialist",
"purpose": "ស្តារ និងលើកកម្ពស់រូបថតទាំងមូលឱ្យដល់កម្រិតស្ទីឌីយោទំនើប រក្សាផ្ទៃខាងក្រោយដើម ប៉ុន្តែលើកកម្ពស់ពណ៌/ជម្រៅ/កម្រិតពន្លឺ",
"workflow": "studio emulation, medium format rendering, heritage restoration, cinematic color grading"
},
'restore-high-quality': 'ស្តាររូបថតចាស់នេះឡើងវិញក្នុងគុណភាពខ្ពស់៖ លុបស្នាមឆ្កូត ធូលី ស្នាមប្រឡាក់ ផ្នត់ ស្តារតំបន់ដែលព្រាលឡើងវិញ កែសម្រួលពន្លឺ និងកម្រិតពណ៌ ធ្វើឱ្យព័ត៌មានលម្អិតនៃផ្ទៃមុខច្បាស់ បង្កើនពណ៌ធម្មជាតិ រក្សាទម្រង់ដើម រក្សាពណ៌ស្បែកពិតប្រាកដ មិនធ្វើឱ្យស្បែករលោងខ្លាំងពេកដែលមើលទៅក្លែងក្លាយ។',
'restore-colorize': 'ស្តារ និងដាក់ពណ៌សម្រាប់រូបថតសខ្មៅនេះ។ សូមបង្កើតពណ៌ឡើងវិញឱ្យបានពិតប្រាកដ និងធម្មជាតិបំផុតតាមដែលអាចធ្វើទៅបាន ចាប់ពីពណ៌ស្បែក សក់ រហូតដល់សម្លៀកបំពាក់ និងទិដ្ឋភាព។',
'reconstruct-heavy-damage': 'បង្កើតផ្នែកដែលបាត់បង់ ឬខូចខាតធ្ងន់ធ្ងរឡើងវិញនៅលើរូបថតនេះ។ ប្រើប្រាស់ព័ត៌មានលម្អិតដែលនៅសល់ដើម្បីប៉ាន់ស្មាន និងគូរឡើងវិញនូវតំបន់ដែលរហែក ព្រាល ឬហើរពណ៌ខ្លាំង។',
'deyellow-defade': 'កាត់បន្ថយភាពលឿង និងការហើរពណ៌នៅលើរូបថតចាស់នេះ។ ស្តារពណ៌ដើមឡើងវិញ និងបង្កើនកម្រិតពណ៌ ដើម្បីឱ្យរូបថតមើលទៅច្បាស់ និងថ្មីជាងមុន។',
'advanced-portrait': 'លើកកម្ពស់គុណភាពរូបថតបញ្ឈរនេះ៖ ធ្វើឱ្យស្បែកម៉ដ្តបែបធម្មជាតិ បង្កើនភាពច្បាស់សម្រាប់ភ្នែក និងសក់ កែសម្រួលពន្លឺដើម្បីឱ្យម្ចាស់រូបថតលេចធ្លោ និងលុបផ្ទៃខាងក្រោយតិចៗ។',
'restore-painting': 'ស្តារគំនូរនេះឡើងវិញ។ បង្កើតព័ត៌មានលម្អិតដែលបាត់បង់ ហើរពណ៌ ឬខូចខាតឡើងវិញ។ បង្កើនពណ៌ កម្រិតពណ៌ និងធ្វើឱ្យបន្ទាត់ច្បាស់ ដើម្បីឱ្យគំនូរក្លាយជាមានជីវិត និងលម្អិតដូចដើម។'`,numResults:1}),h=async()=>{if(!n)return;d(!0),c(""),o([]),r(null);const g=[];for(let v=0;v<p.numResults;v++)try{const b=await fn(n,p);g.push(b);const $=ie.find(C=>C.id==="restoration");await pe({original:n,generated:b,feature:"restoration",featureLabel:($==null?void 0:$.label)||"ស្តាររូបថតចាស់ឡើងវិញ"})}catch(b){const $=b instanceof Error?b.message:String(b);c(C=>C?`${C}
កំហុសលើកទី ${v+1}: ${$}`:`កំហុសលើកទី ${v+1}: ${$}`);break}o(g),g.length>0&&r(g[0]),d(!1)},m=g=>{e(g),o([]),r(null)};return oe`
        <div class="editor-layout">
            <${Ri} 
                settings=${p} 
                setSettings=${f} 
                onGenerate=${h} 
                generating=${s} 
                hasImage=${!!n} 
                buttonText="ស្តាររូបថតឡើងវិញ"
                originalImage=${n}
                onImageChange=${()=>m(null)}
            />
            <div class="image-panel">
                ${n?oe`
                    <div class="image-panel-preview">
                        ${s&&oe`<${H} text="AI កំពុងស្តាររូបថតរបស់អ្នកឡើងវិញ..." />`}
                        <div class="image-display-wrapper">
                            <${se} original=${n} generated=${i} objectFit="contain"/>
                            <${he}
                                generatedImage=${i}
                                filename="restored-photo.jpeg"
                                onReset=${()=>m(null)}
                                isGenerating=${s}
                            />
                        </div>
                        ${t.length>1&&oe`
                            <div class="thumbnail-gallery">
                                ${t.map((g,v)=>oe`
                                    <div class="thumbnail-item">
                                        <img 
                                            src=${g} 
                                            alt="Generated ${v+1}" 
                                            class=${i===g?"active":""}
                                            onClick=${()=>r(g)}
                                        />
                                    </div>
                                `)}
                            </div>
                        `}
                        ${u&&oe`<${te} error=${u} />`}
                    </div>
                `:oe`
                    <${ne} onImageUpload=${g=>m(g)} />
                `}
            </div>
        </div>
    `},iu=()=>{const[n,e]=_([]),[t,o]=_({colorize:!0,highQuality:!0,redrawHair:!0,sharpenBackground:!0,adhereToFace:!0,sharpenWrinkles:!0,isVietnamese:!0,redrawClothing:!0,gender:"auto",age:"auto",smile:"auto",advancedPrompt:"",customPrompt:`ស្តាររូបថតចាស់នេះឡើងវិញក្នុងគុណភាពខ្ពស់៖ លុបស្នាមឆ្កូត ធូលី ស្នាមប្រឡាក់ ផ្នត់ ស្តារតំបន់ដែលព្រាលឡើងវិញ កែសម្រួលពន្លឺ និងកម្រិតពណ៌ ធ្វើឱ្យព័ត៌មានលម្អិតនៃផ្ទៃមុខច្បាស់ បង្កើនពណ៌ធម្មជាតិ រក្សាទម្រង់ដើម រក្សាពណ៌ស្បែកពិតប្រាកដ មិនធ្វើឱ្យស្បែករលោងខ្លាំងពេកដែលមើលទៅក្លែងក្លាយ។
"caption": "ស្តារ និងលើកកម្ពស់រូបថតចាស់ – រក្សាផ្ទៃខាងក្រោយដើម ពណ៌បែបភាពយន្ត ស្តង់ដារ Phase One XF IQ4 150MP",
"notes": "បំប្លែងរូបថតចាស់ (រួមទាំងរូបថតដែលថតឡើងវិញ) ទៅជារូបថតពណ៌ទំនើប ស្អាតឥតខ្ចោះ រក្សាផ្ទៃខាងក្រោយដើម ប៉ុន្តែលើកកម្ពស់គុណភាពដូចជាការថតថ្មី។ ផ្តល់អាទិភាពដល់ការរក្សាអត្តសញ្ញាណ និងកាយវិការ។",
"input_image": "REPLACE_WITH_IMAGE_ID_OR_PATH",
"preprocess": {
"detect_and_isolate_original_photo": true,
"auto_crop_photo_edges": true,
"clean_edges": true,
"remove_hands_or_objects": true,
"perspective_correction": true,
"flatten_page_curvature": true,
"glare_reduction": "strict",
"reflection_removal": "strict",
"specular_highlight_fix": true
},
"camera_emulation": {
"brand_model": "Phase One XF IQ4 150MP",
"lens": "Schneider Kreuznach 80mm LS f/2.8",
"medium_format": true,
"look": "ultimate sharpness, maximum dynamic range, medium format 3D pop, cinematic rendering"
},
"composition": {
"framing": "three-quarter body (from mid-thigh up)",
"orientation": "portrait",
"crop_policy": "do_not_crop_face_or_hands",
"keep_pose": true,
"zoom": "slight zoom-out for wider context"
},
"subject_constraints": {
"keep_identity": true,
"lock_features": ["eyes","nose","lips","eyebrows","jawline","face_shape","ears","hairline"],
"expression_policy": "preserve_original"
},
"retouching": {
"skin": {
"tone": "realistic warm neutral",
"finish": "radiant but detailed",
"texture": "retain fine pores; avoid plastic look",
"blemishes": "remove completely",
"luminosity_balance": "uniform subtle glow",
"color_uniformity": "fix uneven tones"
},
"hair": { "finish": "clean, neat, natural gloss", "flyaways": "reduce but keep natural strands" },
"eyes": {
"iris_color": "natural brown/gray",
"whites_desaturation": 0.1,
"iris_clarity": 0.2,
"avoid_overwhitening": true,
"avoid_exaggeration": true
},
"teeth": { "natural_whiten": 0.08, "avoid_pure_white": true },
"clothing": {
"fabric_look": "premium, fine weave, crisp edges",
"wrinkle_reduction": "moderate",
"texture_enhancement": 0.25
},
"repair_cracks": "strict",
"remove_dust_scratches": "strict",
"remove_stains": "strict",
"remove_folds": true,
"restore_faded_details": true
},
"colorization": {
"apply_to": "entire_photo",
"style": "cinematic, natural, true-to-life",
"skin_tone_accuracy": "very_high",
"background_colorization": "full, layered, realistic",
"clothing_colorization": "faithful but premium",
"avoid_exaggeration": true
},
"background": {
"policy": "preserve_and_enhance",
"keep_original": true,
"enhancement": {
"colorize": "natural, true-to-life, cinematic color grading",
"restore_damage": true,
"texture_cleanup": "remove paper grain and speckles completely",
"add_depth": "studio gradient with layered tones and soft atmospheric haze",
"contrast_boost": "medium-high with soft roll-off",
"dynamic_range": "expanded like medium format",
"lighting_match": true
},
"remove_external_objects": true,
"banding_fix_on_background": true
},
"color_tone": {
"overall": "natural, true-to-life",
"saturation": "balanced vivid",
"contrast": "medium with cinematic roll-off",
"vibrance": 0.2,
"color_restoration": "revive faded colors, unify uneven tones, remove discoloration completely",
"auto_tone_balance": "strict",
"auto_contrast_balance": true,
"recolorize_consistently": true
},
"detail_sharpness": {
"method": "edge-aware sharpening",
"amount": 0.4,
"radius": 0.9,
"threshold": 0.02,
"noise_reduction": { "luminance": 0.22, "chroma": 0.26, "preserve_details": 0.85 }
},
"clean_up": {
"remove_noise": true,
"remove_artifacts": true,
"remove_scratches": "strict",
"remove_dust": "strict",
"remove_stains": "strict",
"remove_folds": true,
"deblotching": true,
"desilvering_fix": true,
"paper_texture_reduction": "strong",
"restore_faded_colors": true,
"reconstruct_missing_parts": "museum-grade",
"reconstruct_missing_corners": true,
"hallucination_control": "only realistic restoration, no fantasy",
"heritage_preservation_strict": true,
"archival_quality": "museum-grade restoration, pristine finish",
"final_finish": "as new color studio photograph, indistinguishable from modern digital capture"
},
"controls": {
"face_identity_lock": 0.96,
"pose_lock": 0.95,
"background_enhancement_strength": 0.9,
"colorization_strength": 0.9,
"restoration_strength": 0.95,
"background_replace_strength": 0.0
},
"output": {
"resolution": "12000x8000",
"dpi": 600,
"format": "TIFF",
"color_space": "AdobeRGB 1998",
"bit_depth": "16-bit",
"background_alpha": "opaque"
},
"safety_bounds": {
"do_not": [
"change face geometry or identity",
"change pose",
"alter clothing style drastically",
"add heavy makeup",
"over-smooth or plastic skin",
"over-sharpen halos",
"exaggerated eye colors"
],
"negative_prompt": [
"paper grain",
"speckles",
"flat monochrome background",
"hands holding photo",
"photo edges visible",
"glare spots",
"crooked perspective",
"color casts",
"posterization/banding",
"muddy blacks",
"oversaturated skin",
"cartoonish colors",
"loss of fine texture",
"visible damage marks"
]
},
"seed": 142857,
"metadata": {
"locale": "km-KH",
"creator": "fine art restoration specialist",
"purpose": "ស្តារ និងលើកកម្ពស់រូបថតទាំងមូលឱ្យដល់កម្រិតស្ទីឌីយោទំនើប រក្សាផ្ទៃខាងក្រោយដើម ប៉ុន្តែលើកកម្ពស់ពណ៌/ជម្រៅ/កម្រិតពន្លឺ",
"workflow": "studio emulation, medium format rendering, heritage restoration, cinematic color grading"
},
'restore-high-quality': 'ស្តាររូបថតចាស់នេះឡើងវិញក្នុងគុណភាពខ្ពស់៖ លុបស្នាមឆ្កូត ធូលី ស្នាមប្រឡាក់ ផ្នត់ ស្តារតំបន់ដែលព្រាលឡើងវិញ កែសម្រួលពន្លឺ និងកម្រិតពណ៌ ធ្វើឱ្យព័ត៌មានលម្អិតនៃផ្ទៃមុខច្បាស់ បង្កើនពណ៌ធម្មជាតិ រក្សាទម្រង់ដើម រក្សាពណ៌ស្បែកពិតប្រាកដ មិនធ្វើឱ្យស្បែករលោងខ្លាំងពេកដែលមើលទៅក្លែងក្លាយ។',
'restore-colorize': 'ស្តារ និងដាក់ពណ៌សម្រាប់រូបថតសខ្មៅនេះ។ សូមបង្កើតពណ៌ឡើងវិញឱ្យបានពិតប្រាកដ និងធម្មជាតិបំផុតតាមដែលអាចធ្វើទៅបាន ចាប់ពីពណ៌ស្បែក សក់ រហូតដល់សម្លៀកបំពាក់ និងទិដ្ឋភាព។',
'reconstruct-heavy-damage': 'បង្កើតផ្នែកដែលបាត់បង់ ឬខូចខាតធ្ងន់ធ្ងរឡើងវិញនៅលើរូបថតនេះ។ ប្រើប្រាស់ព័ត៌មានលម្អិតដែលនៅសល់ដើម្បីប៉ាន់ស្មាន និងគូរឡើងវិញនូវតំបន់ដែលរហែក ព្រាល ឬហើរពណ៌ខ្លាំង។',
'deyellow-defade': 'កាត់បន្ថយភាពលឿង និងការហើរពណ៌នៅលើរូបថតចាស់នេះ។ ស្តារពណ៌ដើមឡើងវិញ និងបង្កើនកម្រិតពណ៌ ដើម្បីឱ្យរូបថតមើលទៅច្បាស់ និងថ្មីជាងមុន។',
'advanced-portrait': 'លើកកម្ពស់គុណភាពរូបថតបញ្ឈរនេះ៖ ធ្វើឱ្យស្បែកម៉ដ្តបែបធម្មជាតិ បង្កើនភាពច្បាស់សម្រាប់ភ្នែក និងសក់ កែសម្រួលពន្លឺដើម្បីឱ្យម្ចាស់រូបថតលេចធ្លោ និងលុបផ្ទៃខាងក្រោយតិចៗ។',
'restore-painting': 'ស្តារគំនូរនេះឡើងវិញ។ បង្កើតព័ត៌មានលម្អិតដែលបាត់បង់ ហើរពណ៌ ឬខូចខាតឡើងវិញ។ បង្កើនពណ៌ កម្រិតពណ៌ និងធ្វើឱ្យបន្ទាត់ច្បាស់ ដើម្បីឱ្យគំនូរក្លាយជាមានជីវិត និងលម្អិតដូចដើម។'`,numResults:1}),[i,r]=_(!1),[s,d]=_(0),[u,c]=_(""),[p,f]=_(!1),h=y=>{if(!y.currentTarget.files)return;const E=Array.from(y.currentTarget.files).map(T=>({id:Date.now()+Math.random(),file:T,original:URL.createObjectURL(T),generated:null,status:"pending"}));e(T=>[...T,...E])},m=y=>new Promise((k,E)=>{const T=new FileReader;T.onload=()=>k(T.result),T.onerror=E,T.readAsDataURL(y)}),g=async(y,k,E)=>{let T=0;const I=[...y],A=async()=>{for(;I.length>0;){const P=I.shift();P&&(await E(P),T++,d(Math.round(T/y.length*100)),I.length>0&&await new Promise(M=>setTimeout(M,2e3)))}},S=Array(k).fill(null).map(()=>A());await Promise.all(S)},v=async()=>{r(!0),d(0),c("");const y=n.filter(E=>E.status==="pending"||E.status==="error"),k=async E=>{e(T=>T.map(I=>I.id===E.id?{...I,status:"processing"}:I));try{const T=await m(E.file),I=await fn(T,t);e(S=>S.map(P=>P.id===E.id?{...P,generated:I,status:"done"}:P));const A=ie.find(S=>S.id==="restoration");await pe({original:T,generated:I,feature:"restoration",featureLabel:(A==null?void 0:A.label)||"ស្តាររូបថតចាស់ឡើងវិញ"})}catch(T){throw T instanceof Error?c(T.message):c(String(T)),e(I=>I.map(A=>A.id===E.id?{...A,status:"error"}:A)),T}};try{await g(y,1,k)}catch(E){console.error("Batch processing stopped due to an error.",E)}finally{r(!1)}},b=async y=>{const k=n.find(E=>E.id===y);if(k){e(E=>E.map(T=>T.id===y?{...T,status:"processing"}:T)),c("");try{const E=await m(k.file),T=await fn(E,t);e(A=>A.map(S=>S.id===y?{...S,generated:T,status:"done"}:S));const I=ie.find(A=>A.id==="restoration");await pe({original:E,generated:T,feature:"restoration",featureLabel:(I==null?void 0:I.label)||"ស្តាររូបថតចាស់ឡើងវិញ"})}catch(E){E instanceof Error?c(E.message):c(String(E)),e(T=>T.map(I=>I.id===y?{...I,status:"error"}:I))}}},$=y=>{e(k=>k.filter(E=>E.id!==y))},C=async()=>{f(!0),c("");const y=n.filter(k=>k.generated);for(let k=0;k<y.length;k++){const E=y[k];if(E.generated)try{const T=document.createElement("a");T.href=E.generated,T.download=`restored-${E.id}.jpeg`,document.body.appendChild(T),T.click(),document.body.removeChild(T),await new Promise(I=>setTimeout(I,300))}catch(T){const I=`កំហុសពេលទាញយករូបថត ${k+1}.`;c(I),console.error(I,T);break}}f(!1)},x=de(()=>n.filter(y=>y.status==="pending"||y.status==="error").length,[n]),w=x>0?`ស្តាររូបថត ${x} ឡើងវិញ`:"ស្តាររូបថតឡើងវិញ";return oe`
        <div class="batch-editor-layout">
             <${Ri} settings=${t} setSettings=${o} onGenerate=${v} generating=${i} hasImage=${x>0} buttonText=${w} isBatch=${!0} />
            <div class="actions" style=${{marginTop:"2rem",justifyContent:"space-between"}}>
                 <button class="btn btn-secondary" onClick=${()=>{var y;return(y=document.getElementById("batch-restore-file-input"))==null?void 0:y.click()}}>
                     <${J} /> បន្ថែមរូបថត
                </button>
                 <input type="file" id="batch-restore-file-input" multiple accept="image/*" style=${{display:"none"}} onChange=${h} />
                <button class="btn btn-primary" onClick=${C} disabled=${n.every(y=>!y.generated)||p}>
                    ${p?"កំពុងទាញយក...":oe`<${ce} /> ទាញយកទាំងអស់`}
                </button>
            </div>
            
            ${i&&oe`
                <div class="progress-bar">
                    <div class="progress-bar-inner" style=${{width:`${s}%`}}></div>
                    <span class="progress-label">${s}%</span>
                </div>
            `}
            
            ${u&&oe`<div class="error-message" style=${{marginTop:"1rem"}}>${u}</div>`}

            <div class="batch-grid">
                ${n.map(y=>oe`
                    <div class="batch-item">
                        <div class="image-comparator" style=${{display:"block"}}>
                            <div class="image-container">
                                <img src=${y.generated||y.original} />
                                ${y.status==="processing"&&oe`<${H} text="កំពុងដំណើរការ..." />`}
                                ${y.status==="error"&&oe`<div class="error-badge">កំហុស</div>`}
                            </div>
                        </div>
                        <div class="batch-item-actions">
                            <button class="batch-item-btn" title="ស្តារឡើងវិញម្តងទៀត" onClick=${()=>b(y.id)}><${zt} /></button>
                            <button class="batch-item-btn" title="លុប" onClick=${()=>$(y.id)}><${We} /></button>
                        </div>
                    </div>
                `)}
            </div>
        </div>
    `},ru=()=>{const[n,e]=_("single");return oe`
         <div>
            <div class="tabs">
                <button class="tab ${n==="single"?"active":""}" onClick=${()=>e("single")}>ស្តារឡើងវិញតែម្នាក់</button>
                <button class="tab ${n==="batch"?"active":""}" onClick=${()=>e("batch")}>ជួសជុលឡើងវិញជាក្រុម</button>
            </div>
            ${n==="single"?oe`<${ou} />`:oe`<${iu} />`}
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Ko=G.bind(F),au=({settings:n,setSettings:e,onGenerate:t,generating:o,hasImage:i,originalImage:r})=>{const[s,d]=_(!1),[u,c]=_(""),p=async()=>{if(!(!r||s||o)){d(!0),c("");try{const h=await zc(r);e(m=>({...m,customPrompt:h}))}catch(h){c(h instanceof Error?h.message:"មានបញ្ហាក្នុងការបង្កើតការពិពណ៌នា។")}finally{d(!1)}}},f=h=>{const{name:m,checked:g}=h.currentTarget;e(v=>({...v,[m]:g}))};return Ko`
        <div class="settings-panel">
            <div class="form-section">
                <h3 class="form-section-title">ឧបករណ៍ AI</h3>
                 <div style=${{display:"flex",gap:"0.5rem"}}>
                    <button
                        class="btn btn-secondary"
                        style=${{flex:1}}
                        onClick=${p}
                        disabled=${!r||s||o}
                    >
                        ${s?"កំពុងបង្កើត...":"បង្កើតការពិពណ៌នា"}
                    </button>
                </div>
                ${u&&Ko`<div class="error-message" style="margin-top: 1rem; text-align: left;">${u}</div>`}
            </div>
            
            <div class="form-section">
                <h3 class="form-section-title">ជម្រើសស្តារឡើងវិញ</h3>
                <div class="checkbox-grid-restoration" style=${{gridTemplateColumns:"1fr"}}>
                    <label><input type="checkbox" name="straighten" checked=${n.straighten} onChange=${f} /> ពង្រឹង និងតម្រឹមជ្រុង</label>
                    <label><input type="checkbox" name="removeStains" checked=${n.removeStains} onChange=${f} /> លុបស្នាមប្រឡាក់ ស្នាមអុជ និងផ្សិត</label>
                    <label><input type="checkbox" name="flattenCreases" checked=${n.flattenCreases} onChange=${f} /> ធ្វើឱ្យរាបស្មើនូវស្នាមបត់ និងស្នាមរហែក</label>
                    <label><input type="checkbox" name="enhanceText" checked=${n.enhanceText} onChange=${f} /> ធ្វើឱ្យអក្សរ និងត្រាកាន់តែច្បាស់</label>
                    <label><input type="checkbox" name="restoreColors" checked=${n.restoreColors} onChange=${f} /> ស្តារពណ៌ឡើងវិញ (ប្រសិនបើមាន)</label>
                </div>
            </div>

            <div class="form-group">
                <label class="form-section-label">ស្ទីលលទ្ធផល</label>
                <div class="toggle-group">
                    <button 
                        class="toggle-btn ${n.outputStyle==="new"?"active":""}"
                        onClick=${()=>e(h=>({...h,outputStyle:"new"}))}
                    >
                        ធ្វើឱ្យដូចថ្មី
                    </button>
                    <button 
                        class="toggle-btn ${n.outputStyle==="vintage"?"active":""}"
                        onClick=${()=>e(h=>({...h,outputStyle:"vintage"}))}
                    >
                        រក្សាភាពបុរាណ
                    </button>
                    <button 
                        class="toggle-btn ${n.outputStyle==="preserve"?"active":""}"
                        onClick=${()=>e(h=>({...h,outputStyle:"preserve"}))}
                    >
                        រក្សាទុកគ្រប់ព័ត៌មានលម្អិតនៃរូបថត
                    </button>
                </div>
            </div>

            <div class="form-group">
                <label for="custom-prompt-doc">សំណើតាមតម្រូវការ (ជម្រើស)</label>
                <textarea 
                    id="custom-prompt-doc" 
                    placeholder="ឧទាហរណ៍៖ រក្សាត្រាពណ៌ក្រហមនៅជ្រុងខាងឆ្វេង..."
                    value=${n.customPrompt}
                    onInput=${h=>e(m=>({...m,customPrompt:h.currentTarget.value}))}
                ></textarea>
            </div>
            
            <button class="btn btn-primary" onClick=${t} disabled=${o||!i} style=${{width:"100%",marginTop:"0.5rem",padding:"0.85rem"}}>
                ${o?"កំពុងស្តារឡើងវិញ...":"ស្តារឯកសារឡើងវិញ"}
            </button>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const je=G.bind(F),su={removeStains:!0,flattenCreases:!0,enhanceText:!0,restoreColors:!0,outputStyle:"new",straighten:!0,customPrompt:""},lu=()=>{const[n,e]=_(null),[t,o]=_(null),[i,r]=_(!1),[s,d]=_(""),[u,c]=_(su),p=async()=>{if(n){r(!0),d("");try{const h=await qc(n,u);o(h);const m=ie.find(g=>g.id==="document-restoration");await pe({original:n,generated:h,feature:"document-restoration",featureLabel:(m==null?void 0:m.label)||"ស្តារឯកសារចាស់ៗឡើងវិញ"})}catch(h){h instanceof Error?d(h.message):d(String(h))}finally{r(!1)}}},f=h=>{e(h),o(null),d("")};return je`
        <div class="editor-layout">
            <${au} 
                settings=${u} 
                setSettings=${c} 
                onGenerate=${p} 
                generating=${i} 
                hasImage=${!!n} 
                originalImage=${n}
            />
            <div class="image-panel">
                ${n?je`
                    <div class="image-panel-preview">
                        ${i&&je`<${H} text="AI កំពុងស្តារឯកសារឡើងវិញ..." />`}
                        <div class="image-display-wrapper">
                            <${se} original=${n} generated=${t} objectFit="contain" />
                            <${he}
                                generatedImage=${t}
                                filename="restored-document.jpeg"
                                onReset=${()=>f(null)}
                                isGenerating=${i}
                            />
                        </div>
                        ${s&&je`<${te} error=${s} />`}
                    </div>
                `:je`
                    <${ne} onImageUpload=${h=>f(h)} />
                `}
            </div>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const fe=G.bind(F),_t=({image:n,onImageUpload:e,onImageRemove:t,id:o,children:i})=>fe`
        <div class="upload-box-fashion" onClick=${()=>{var s;return(s=document.getElementById(o))==null?void 0:s.click()}}>
            <input type="file" id=${o} accept="image/*" style=${{display:"none"}} onChange=${s=>{var u;const d=(u=s.currentTarget.files)==null?void 0:u[0];if(d){const c=new FileReader;c.onload=p=>{var f;return e((f=p.target)==null?void 0:f.result)},c.readAsDataURL(d)}}} />
            ${n?fe`
                <img src=${n} alt="Uploaded preview" />
                <button class="remove-reference-btn" onClick=${s=>{s.stopPropagation(),t()}}><${ye} /></button>
            `:i}
        </div>
    `,cu=({modelImage:n,setModelImage:e,outfitImage:t,setOutfitImage:o,onGenerate:i,onSeparate:r,generating:s,canGenerate:d})=>fe`
        <aside class="fashion-panel">
            <div class="panel-header">
                <strong>ជំហានទី ១</strong>
                <${Nd} />
                <span class="panel-title">លំហរៀបចំ និងទូសម្លៀកបំពាក់</span>
            </div>
            <div class="panel-content">
                <div class="input-card">
                    <span class="card-label"><span class="step-circle">1</span>អ្នកបង្ហាញម៉ូដ និងសម្លៀកបំពាក់ដើម</span>
                    <${_t} 
                        image=${n} 
                        onImageUpload=${u=>e(u)} 
                        onImageRemove=${()=>e(null)}
                        id="model-upload"
                    >
                        <${J} />
                        <span>បង្ហោះរូបថត</span>
                    </${_t}>
                </div>
                <div class="input-card">
                    <span class="card-label"><span class="step-circle">2</span>សម្លៀកបំពាក់ដែលបានបំបែក</span>
                     <${_t} 
                        image=${t} 
                        onImageUpload=${u=>o(u)} 
                        onImageRemove=${()=>o(null)}
                        id="outfit-upload"
                    >
                        <${J} />
                        <span>បង្ហោះរូបថត</span>
                    </${_t}>
                </div>
                 <button class="btn btn-primary" onClick=${r}>បំបែកសម្លៀកបំពាក់</button>
                 <div class="input-card">
                    <span class="card-label"><span class="step-circle">3</span>អ្នកបង្ហាញម៉ូដថ្មី និងកាយវិការ</span>
                     <div class="upload-box-fashion" style="justify-content: center; text-align: center; color: #888;">
                        <${J} />
                        <span>(មុខងារនឹងមកដល់ឆាប់ៗនេះ)</span>
                    </div>
                </div>
                 <button class="btn btn-primary" onClick=${i} disabled=${s||!d}>
                    ${s?"កំពុងបង្កើត...":"សាកល្បងសម្លៀកបំពាក់សម្រាប់អ្នកបង្ហាញម៉ូដថ្មី"}
                 </button>
            </div>
        </aside>
    `,He=({label:n,value:e,options:t,onChange:o})=>fe`
    <div class="form-group">
        <label>${n}</label>
        <select value=${e} onChange=${o}>
            ${t.map(i=>fe`<option value=${i}>${i}</option>`)}
        </select>
    </div>
`,du=({settings:n,setSettings:e})=>{const t=i=>r=>{e(s=>({...s,[i]:r.currentTarget.value}))},o=i=>{e(r=>({...r,numVariants:Math.max(1,Math.min(8,r.numVariants+i))}))};return fe`
        <main class="fashion-panel">
            <div class="panel-header">
                 <strong>ជំហានទី ២</strong>
                <span class="panel-title">ផ្ទាំងបញ្ជាការច្នៃប្រឌិត</span>
            </div>
            <div class="panel-content">
                <div class="settings-panel">
                     <div class="fashion-settings-header">
                        <div class="form-group">
                            <label>សមាមាត្ររូបថត</label>
                            <div class="toggle-group">
                                <button class="toggle-btn ${n.aspectRatio==="9:16"?"active":""}" onClick=${()=>e(i=>({...i,aspectRatio:"9:16"}))}>9:16</button>
                                <button class="toggle-btn ${n.aspectRatio==="16:9"?"active":""}" onClick=${()=>e(i=>({...i,aspectRatio:"16:9"}))}>16:9</button>
                            </div>
                        </div>
                        <div class="form-group">
                             <label>សេវាកម្ម AI</label>
                             <select><option>Fircode Gemini</option></select>
                        </div>
                    </div>
                    
                    <div class="form-section">
                        <h4 class="form-section-title">ការកំណត់កម្រិតខ្ពស់</h4>
                        <div class="form-group">
                            <label>ការពិពណ៌នាគំនិតចម្បង</label>
                            <textarea rows="3" placeholder="ឧទាហរណ៍៖ អ្នកបង្ហាញម៉ូដ High-fashion ក្នុងឈុតសម្លៀកបំពាក់ Avant-garde..." value=${n.prompt} onInput=${t("prompt")}></textarea>
                        </div>

                        <${He} label="មុំកាមេរ៉ា" value=${n.cameraAngle} options=${["លំនាំដើម","ជិត","ពេញតួ","មុំទូលាយ"]} onChange=${t("cameraAngle")} />
                        <${He} label="ស្ទីល" value=${n.style} options=${["លំនាំដើម","បែបពិតៗ","បែបភាពយន្ត","បែបគំនូរ"]} onChange=${t("style")} />

                        <div class="form-group">
                            <label>ប្រព័ន្ធត្រួតពិនិត្យ</label>
                            <div class="control-buttons-group">
                                <button class="btn btn-primary">រូបថតយោង</button>
                                <button class="btn btn-primary">សម្លៀកបំពាក់</button>
                                <button class="btn btn-primary">គំនិត AI</button>
                            </div>
                        </div>

                        <div class="form-group-row">
                            <div class="form-group">
                                <label>Seed</label>
                                <input type="text" value=${n.seed} onInput=${t("seed")} />
                            </div>
                            <div class="form-group">
                                <label>ចំនួនបំរែបំរួល</label>
                                <div style="display: flex; align-items: center;">
                                    <button class="btn" onClick=${()=>o(-1)} style=${{background:"#1E2230",border:"1px solid #3A416F"}}>-</button>
                                    <input type="number" class="number-input" style="text-align: center; borderLeft: none; borderRight: none;" value=${n.numVariants} onInput=${i=>e(r=>({...r,numVariants:parseInt(i.currentTarget.value,10)}))} />
                                    <button class="btn" onClick=${()=>o(1)} style=${{background:"#1E2230",border:"1px solid #3A416F"}}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-section">
                        <h4 class="form-section-title">ការណែនាំពី AI Art Director</h4>
                        <${He} label="ក្ដារលាយពណ៌" value=${n.colorPalette} options=${["លំនាំដើម","ពណ៌ក្តៅ","ពណ៌ត្រជាក់","ពណ៌ទោល"]} onChange=${t("colorPalette")} />
                        <${He} label="ពន្លឺ" value=${n.lighting} options=${["លំនាំដើម","ស្ទូឌីយោ","ធម្មជាតិ","បែបល្ខោន"]} onChange=${t("lighting")} />
                        <${He} label="ពណ៌ស្បែក" value=${n.skinTone} options=${["លំនាំដើម","ធម្មជាតិ","ភ្លឺ","ងងឹត"]} onChange=${t("skinTone")} />
                        <${He} label="កែវភ្នែក (Lens)" value=${n.lens} options=${["លំនាំដើម","35mm","50mm","85mm"]} onChange=${t("lens")} />
                    </div>
                </div>
            </div>
        </main>
    `},uu=({generatedImages:n,generating:e,error:t})=>fe`
        <aside class="fashion-panel">
             <div class="panel-header">
                <strong>ជំហានទី ៣</strong>
                <span class="panel-title">បណ្ណាល័យលទ្ធផល</span>
            </div>
            <div class="results-panel-content">
                <div class="results-actions-header">
                    <span>ប្រតិបត្តិការជាក្រុម</span>
                    <div class="select-all-checkbox">
                        <button>ជ្រើសរើសរូបថតទាំងអស់</button>
                        <input type="checkbox" />
                    </div>
                </div>

                <div class="tabs" style="margin-bottom: 1rem; border-color: var(--fashion-border);">
                    <button class="tab active">រូបថត (${n.length})</button>
                    <button class="tab">វីដេអូ</button>
                </div>
                <div class="results-grid-fashion">
                    ${e&&fe`<${H} text="កំពុងបង្កើត..." />`}
                    ${!e&&t&&fe`<${te} error=${t} />`}
                    ${!e&&n.length===0&&!t&&fe`
                        <div class="placeholder-container" style="height: 100%; color: #888;">
                            <${Ce} class="placeholder-icon" />
                            <p>លទ្ធផលនឹងបង្ហាញនៅទីនេះ។</p>
                        </div>
                    `}
                    ${n.map(o=>fe`
                        <div class="result-image-wrapper">
                            <img src=${o} alt="Generated fashion design" />
                        </div>
                    `)}
                </div>
            </div>
        </aside>
    `;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const pu=G.bind(F),fu=()=>{const[n,e]=_(null),[t,o]=_(null),[i,r]=_([]),[s,d]=_(!1),[u,c]=_(""),[p,f]=_({aspectRatio:"9:16",prompt:"",cameraAngle:"លំនាំដើម",style:"លំនាំដើម",colorPalette:"លំនាំដើម",lighting:"លំនាំដើម",skinTone:"លំនាំដើម",lens:"លំនាំដើម",seed:String(Math.floor(Math.random()*1e5)),numVariants:4});return pu`
        <div class="fashion-layout">
            <${cu}
                modelImage=${n}
                setModelImage=${e}
                outfitImage=${t}
                setOutfitImage=${o}
                onGenerate=${async()=>{if(!n||!t){c("សូមបង្ហោះទាំងរូបថតអ្នកបង្ហាញម៉ូដ និងរូបថតសម្លៀកបំពាក់។");return}d(!0),c(""),r([]);const g=[];let v=parseInt(p.seed,10);isNaN(v)&&(v=Math.floor(Math.random()*1e5));for(let b=0;b<p.numVariants;b++){const $={...p,seed:String(v+b)};g.push(Oc(n,t,$))}try{const b=await Promise.all(g);r(b)}catch(b){c(b instanceof Error?b.message:"មានបញ្ហាមិនរំពឹងទុកបានកើតឡើង។")}finally{d(!1)}}}
                onSeparate=${()=>{alert("មុខងារបំបែកសម្លៀកបំពាក់នឹងត្រូវបានធ្វើបច្ចុប្បន្នភាពក្នុងពេលឆាប់ៗនេះ!")}}
                generating=${s}
                canGenerate=${!!n&&!!t}
            />
            <${du}
                settings=${p}
                setSettings=${f}
            />
            <${uu}
                generatedImages=${i}
                generating=${s}
                error=${u}
            />
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const et=G.bind(F),mu=({settings:n,setSettings:e,onGenerate:t,generating:o,hasImage:i})=>{const[r,s]=_(!1),d=me(null),u=()=>{if(!("webkitSpeechRecognition"in window)){alert("កម្មវិធីរុករកមិនគាំទ្រការបញ្ចូលសំឡេងទេ។");return}const m=new window.webkitSpeechRecognition;m.lang="km-KH",m.onstart=()=>s(!0),m.onend=()=>s(!1),m.onresult=g=>{const v=g.results[0][0].transcript;e(b=>({...b,clothingPrompt:b.clothingPrompt?`${b.clothingPrompt} ${v}`:v}))},r?m.stop():m.start()},c=m=>{e(g=>({...g,clothingPrompt:m}))},p=m=>{var v;const g=(v=m.currentTarget.files)==null?void 0:v[0];if(g){const b=new FileReader;b.onload=$=>{$.target&&e(C=>({...C,clothingImage:$.target.result}))},b.readAsDataURL(g)}},f=de(()=>i&&(n.clothingPrompt.trim()!==""||n.clothingImage!==null),[i,n.clothingPrompt,n.clothingImage]),h={none:"លំនាំដើម","left-light":"ពន្លឺថ្ងៃស្រាល (ឆ្វេង)","left-strong":"ពន្លឺថ្ងៃខ្លាំង (ឆ្វេង)","right-light":"ពន្លឺថ្ងៃស្រាល (ស្តាំ)","right-strong":"ពន្លឺថ្ងៃខ្លាំង (ស្តាំ)"};return et`
        <div class="settings-panel">
            <div class="form-group">
                <label for="clothing-prompt">ការពិពណ៌នាសម្លៀកបំពាក់ (អត្ថបទ)</label>
                <div class="voice-input-container">
                    <textarea 
                        id="clothing-prompt" 
                        placeholder="ឧទាហរណ៍៖ រ៉ូបរាត្រីពណ៌ក្រហម ឬអាវយឺតពណ៌ខៀវ និងខោខូវប៊យ..."
                        value=${n.clothingPrompt}
                        onInput=${m=>e(g=>({...g,clothingPrompt:m.currentTarget.value}))}
                    ></textarea>
                    <button class="voice-btn ${r?"recording":""}" onClick=${u} title="បញ្ចូលតាមរយៈសំឡេង">
                        <${ft} recording=${r} />
                    </button>
                </div>
            </div>

            <div class="form-group">
                <label>ជ្រើសរើសរហ័ស</label>
                <div class="option-grid">
                    ${vn.filter(m=>m.id!=="giu-nguyen").map(m=>et`
                        <button 
                            class="option-btn ${n.clothingPrompt===m.prompt?"active":""}"
                            onClick=${()=>c(m.prompt)}
                            title=${m.label}
                        >
                            ${m.label}
                        </button>
                    `)}
                </div>
            </div>

            <div class="form-group">
                <label>និង/ឬ បង្ហោះរូបថតសម្លៀកបំពាក់គំរូ</label>
                <input type="file" ref=${d} onChange=${p} accept="image/*" style=${{display:"none"}} />
                <div class="reference-uploader" onClick=${()=>{var m;return(m=d.current)==null?void 0:m.click()}}>
                    ${n.clothingImage?et`
                        <img src=${n.clothingImage} alt="Clothing Reference" class="reference-preview"/>
                        <button class="remove-reference-btn" onClick=${m=>{m.stopPropagation(),e(g=>({...g,clothingImage:null}))}} title="លុបរូបថតយោង"><${ye}/></button>
                    `:et`
                        <div class="reference-placeholder">
                           <${J} />
                           <span>ចុចដើម្បីបង្ហោះ</span>
                        </div>
                    `}
                </div>
            </div>

            <div class="form-group">
                <label>ចំនួនមនុស្សក្នុងរូបថត</label>
                <div class="radio-group">
                    <label>
                        <input type="radio" name="people" value="one" checked=${n.numberOfPeople==="one"} onChange=${()=>e(m=>({...m,numberOfPeople:"one"}))} />
                        ម្នាក់
                    </label>
                    <label>
                        <input type="radio" name="people" value="two" checked=${n.numberOfPeople==="two"} onChange=${()=>e(m=>({...m,numberOfPeople:"two"}))} />
                        ពីរនាក់
                    </label>
                    <label>
                        <input type="radio" name="people" value="multiple" checked=${n.numberOfPeople==="multiple"} onChange=${()=>e(m=>({...m,numberOfPeople:"multiple"}))} />
                        ច្រើននាក់
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label>ជម្រើសកាយវិការ</label>
                <div class="radio-group">
                    <label>
                        <input type="radio" name="pose" value="keep" checked=${n.poseOption==="keep"} onChange=${m=>e(g=>({...g,poseOption:m.currentTarget.value}))} />
                        រក្សានៅដដែល
                    </label>
                    <label>
                        <input type="radio" name="pose" value="change" checked=${n.poseOption==="change"} onChange=${m=>e(g=>({...g,poseOption:m.currentTarget.value}))} />
                        ប្តូរកាយវិការ
                    </label>
                </div>
            </div>
            
            <div class="form-section">
                <h3 class="form-section-title">កែសម្រួលតួអង្គ</h3>
                 <div class="switch-group">
                     <label>ធ្វើឱ្យតួអង្គច្បាស់</label>
                     <label class="switch">
                        <input type="checkbox" checked=${n.sharpenSubject} onChange=${m=>e(g=>({...g,sharpenSubject:m.currentTarget.checked}))} />
                        <span class="slider-switch"></span>
                    </label>
                </div>

                <div class="form-group" style="margin-top: 1.5rem;">
                    <label>ទិសដៅពន្លឺ</label>
                    <select value=${n.lightingEffect} onChange=${m=>e(g=>({...g,lightingEffect:m.currentTarget.value}))}>
                        ${Object.entries(h).map(([m,g])=>et`
                            <option value=${m}>${g}</option>
                        `)}
                    </select>
                </div>

                <div class="slider-control">
                    <div class="slider-label">
                        <span>កម្រិតពន្លឺបរិយាកាស</span>
                        <span class="value">${n.lightingIntensity}%</span>
                    </div>
                    <input type="range" min="0" max="100" value=${n.lightingIntensity} onInput=${m=>e(g=>({...g,lightingIntensity:parseInt(m.currentTarget.value,10)}))}/>
                </div>
            </div>
            
            <div class="form-group">
                <label>ចំនួនរូបថតដែលត្រូវបង្កើត</label>
                <input type="number" min="1" max="4" class="number-input" value=${n.numImages} onInput=${m=>e(g=>({...g,numImages:Math.max(1,Math.min(4,parseInt(m.currentTarget.value,10)))}))} />
            </div>
            
            <button class="btn btn-primary" onClick=${t} disabled=${o||!f} style=${{width:"100%"}}>
                ${o?"កំពុងផ្លាស់ប្តូរ...":"បង្កើតរូបថត"}
            </button>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Pe=G.bind(F),hu={clothingImage:null,clothingPrompt:"",numberOfPeople:"one",poseOption:"keep",sharpenSubject:!0,lightingEffect:"none",lightingIntensity:75,numImages:1},gu=()=>{const[n,e]=_(null),[t,o]=_([]),[i,r]=_(null),[s,d]=_(!1),[u,c]=_(""),[p,f]=_(hu),h=async()=>{if(!n)return;d(!0),c(""),o([]),r(null);const g=[],v=ie.find(b=>b.id==="clothing-change");for(let b=0;b<p.numImages;b++)try{const $=await Kc(n,p);g.push($),await pe({original:n,generated:$,feature:"clothing-change",featureLabel:(v==null?void 0:v.label)||"ប្តូរសម្លៀកបំពាក់"})}catch($){const C=$ instanceof Error?$.message:String($);c(x=>x?`${x}
បញ្ហាលើកទី ${b+1}: ${C}`:`បញ្ហាលើកទី ${b+1}: ${C}`);break}o(g),g.length>0&&r(g[0]),d(!1)},m=g=>{e(g),o([]),r(null),c("")};return Pe`
        <div class="editor-layout">
            <${mu} 
                settings=${p} 
                setSettings=${f} 
                onGenerate=${h} 
                generating=${s} 
                hasImage=${!!n} 
            />
            <div class="image-panel">
                ${n?Pe`
                    <div class="image-panel-preview">
                        ${s&&Pe`<${H} text="AI កំពុងប្តូរសម្លៀកបំពាក់..." />`}
                        <div class="image-display-wrapper">
                            <${se} original=${n} generated=${i} objectFit="contain"/>
                            <${he}
                                generatedImage=${i}
                                filename="clothing-changed.jpeg"
                                onReset=${()=>m(null)}
                                isGenerating=${s}
                            />
                        </div>
                         ${t.length>1&&Pe`
                            <div class="thumbnail-gallery">
                                ${t.map((g,v)=>Pe`
                                    <div class="thumbnail-item">
                                        <img 
                                            src=${g} 
                                            alt="Generated ${v+1}" 
                                            class=${i===g?"active":""}
                                            onClick=${()=>r(g)}
                                        />
                                        <span class="thumbnail-label">រូបថត ${v+1}</span>
                                    </div>
                                `)}
                            </div>
                        `}
                        ${u&&Pe`<${te} error=${u} />`}
                    </div>
                `:Pe`
                    <${ne} onImageUpload=${g=>m(g)} />
                `}
            </div>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Zt=G.bind(F),vu=({settings:n,setSettings:e,onGenerate:t,generating:o,hasImage:i})=>{const r=(d,u,c)=>{e(p=>({...p,adjustments:{...p.adjustments,[d]:{...p.adjustments[d],[u]:c}}}))};return Zt`
        <div class="settings-panel">
            ${Object.entries({សក់:{smoothHair:"ធ្វើឱ្យសក់រលោង"},ភ្នែក:{balanceEyes:"តុល្យភាពចម្ងាយ",equalizeEyeSize:"កែតម្រូវទំហំធំ/តូច",correctEyeGaze:"កែតម្រូវភ្នែកស្រលៀង/ត្របកភ្នែកធ្លាក់"},ច្រមុះ:{narrowNose:"បង្រួមស្លាបច្រមុះ",straightenNose:"ពង្រឹងខ្ទង់ច្រមុះឱ្យត្រង់",liftNoseTip:"លើកចុងច្រមុះបន្តិច"},"មាត់ និងធ្មេញ":{centerMouth:"កែតម្រូវមាត់ឱ្យត្រង់",evenTeeth:"ជួសជុលធ្មេញ និងបិទបាំងអញ្ចាញធ្មេញ",removeLipWrinkles:"កែតម្រូវបំបាត់ភាពជ្រីវជ្រួញលើបបូរមាត់"},"ចង្កា និងថ្គាម":{slimJawline:"ធ្វើឱ្យវណ្ឌថ្គាមតូចស្លីម",adjustChin:"កែតម្រូវចង្កា V-line"}}).map(([d,u])=>Zt`
                <fieldset class="fieldset-group">
                    <legend>${d}</legend>
                    <div class="checkbox-grid">
                        ${Object.entries(u).map(([c,p])=>{const f=n.adjustments[c];return Zt`
                                <div class="adjustment-control">
                                    <label>
                                        <input 
                                            type="checkbox" 
                                            checked=${f.enabled} 
                                            onChange=${h=>r(c,"enabled",h.currentTarget.checked)} 
                                        />
                                        ${p}
                                    </label>
                                    <input 
                                        type="range"
                                        min="1"
                                        max="100"
                                        value=${f.intensity}
                                        disabled=${!f.enabled}
                                        onInput=${h=>r(c,"intensity",parseInt(h.currentTarget.value,10))}
                                    />
                                </div>
                            `})}
                    </div>
                </fieldset>
            `)}
            
            <button class="btn btn-primary" onClick=${t} disabled=${o||!i} style=${{width:"100%"}}>
                ${o?"កំពុងកែសម្រួល...":"អនុវត្ត"}
            </button>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const tt=G.bind(F),yu=()=>{const[n,e]=_(null),[t,o]=_(null),[i,r]=_(!1),[s,d]=_(""),u=()=>({enabled:!1,intensity:50}),[c,p]=_({adjustments:{smoothHair:u(),balanceEyes:u(),equalizeEyeSize:u(),correctEyeGaze:u(),narrowNose:u(),straightenNose:u(),liftNoseTip:u(),centerMouth:u(),evenTeeth:u(),removeLipWrinkles:u(),slimJawline:u(),adjustChin:u()}}),f=async()=>{if(n){r(!0),d("");try{const m=await Jc(n,c);o(m)}catch(m){m instanceof Error?d(m.message):d(String(m))}finally{r(!1)}}},h=m=>{e(m),o(null)};return tt`
        <div class="editor-layout">
            <${vu} settings=${c} setSettings=${p} onGenerate=${f} generating=${i} hasImage=${!!n} />
            <div class="image-panel">
                ${n?tt`
                    <div class="image-panel-preview">
                        ${i&&tt`<${H} text="AI កំពុងវិភាគ និងកែសម្រួល..." />`}
                        <div class="image-display-wrapper">
                            <${se} original=${n} generated=${t} objectFit="contain" />
                            <${he}
                                generatedImage=${t}
                                filename="symmetric-photo.jpeg"
                                onReset=${()=>h(null)}
                                isGenerating=${i}
                            />
                        </div>
                        ${s&&tt`<${te} error=${s} />`}
                    </div>
                `:tt`
                    <${ne} onImageUpload=${m=>h(m)} />
                `}
            </div>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Jo=G.bind(F),bu=({settings:n,setSettings:e,onGenerate:t,generating:o,hasImage:i})=>{const[r,s]=_(!1),d=p=>{e(f=>{const h=f.selectedStyles.includes(p)?f.selectedStyles.filter(m=>m!==p):[...f.selectedStyles,p];return{...f,selectedStyles:h}})},u=()=>{if(!("webkitSpeechRecognition"in window)){alert("កម្មវិធីរុករកមិនគាំទ្រការបញ្ចូលសំឡេងទេ។");return}const p=new window.webkitSpeechRecognition;p.lang="km-KH",p.onstart=()=>s(!0),p.onend=()=>s(!1),p.onresult=f=>{const h=f.results[0][0].transcript;e(m=>({...m,customPrompt:m.customPrompt?`${m.customPrompt} ${h}`:h}))},r?p.stop():p.start()},c=de(()=>n.selectedStyles.length>0||n.customPrompt.trim()!=="",[n.selectedStyles,n.customPrompt]);return Jo`
        <div class="settings-panel">
            <div class="form-group">
                <label>៩ ស្ទីលពន្លឺដែលមានស្រាប់</label>
                <div class="lighting-styles-grid">
                    ${ki.map(p=>Jo`
                        <button 
                            class="style-button ${n.selectedStyles.includes(p.name)?"active":""}"
                            onClick=${()=>d(p.name)}
                        >
                            ${p.name}
                        </button>
                    `)}
                </div>
            </div>

            <div class="form-group">
                <label for="custom-lighting-prompt">Prompt តាមតម្រូវការ</label>
                <div class="voice-input-container">
                    <textarea 
                        id="custom-lighting-prompt" 
                        placeholder="ឧទាហរណ៍៖ ពន្លឺថ្ងៃលិចដ៏កក់ក្តៅជះពីខាងឆ្វេង..."
                        value=${n.customPrompt}
                        onInput=${p=>e(f=>({...f,customPrompt:p.currentTarget.value}))}
                    ></textarea>
                    <button class="voice-btn ${r?"recording":""}" onClick=${u} title="បញ្ចូលតាមរយៈសំឡេង">
                        <${ft} recording=${r} />
                    </button>
                </div>
            </div>
            
            <button class="btn btn-primary" onClick=${t} disabled=${o||!i||!c} style=${{width:"100%"}}>
                ${o?"កំពុងដំណើរការ...":"បង្កើតរូបថត"}
            </button>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Re=G.bind(F),$u=()=>{const[n,e]=_(null),[t,o]=_([]),[i,r]=_(null),[s,d]=_(!1),[u,c]=_(""),[p,f]=_({selectedStyles:[],customPrompt:""}),h=async()=>{if(!n)return;d(!0),c(""),o([]),r(null);const g=ki.filter($=>p.selectedStyles.includes($.name));if(p.customPrompt.trim()&&g.push({name:"តាមតម្រូវការ",prompt:p.customPrompt.trim()}),g.length===0){c("សូមជ្រើសរើសយ៉ាងហោចណាស់ស្ទីលពន្លឺមួយ ឬបញ្ចូលការពិពណ៌នាតាមតម្រូវការ។"),d(!1);return}const v=[];for(const $ of g)try{const C=await Wc(n,$.prompt);v.push({name:$.name,url:C})}catch(C){const x=C instanceof Error?C.message:String(C);c(w=>w?`${w}
បញ្ហា ${$.name}: ${x}`:`បញ្ហា ${$.name}: ${x}`),console.error(`បញ្ហាក្នុងការបង្កើតពន្លឺសម្រាប់ ${$.name}:`,C),v.push(null)}const b=v.filter($=>$!==null);o(b),b.length>0?r(b[0].url):u||c('អ្នកត្រូវបញ្ចូល API Key ក្នុងផ្ទាំង "ការកំណត់" មុនពេលប្រើប្រាស់មុខងារនេះ។'),d(!1)},m=g=>{e(g),o([]),r(null),c("")};return Re`
        <div class="editor-layout">
            <${bu} settings=${p} setSettings=${f} onGenerate=${h} generating=${s} hasImage=${!!n} />
            <div class="image-panel">
                 ${n?Re`
                    <div class="image-panel-preview">
                        ${s&&Re`<${H} text="AI កំពុងបង្កើតពន្លឺឡើងវិញ..." />`}
                        <div class="image-display-wrapper">
                            <${se} original=${n} generated=${i} objectFit="contain" />
                             <${he}
                                generatedImage=${i}
                                filename="relit-photo.jpeg"
                                onReset=${()=>m(null)}
                                isGenerating=${s}
                            />
                        </div>
                        ${t.length>0&&Re`
                            <div class="thumbnail-gallery">
                                ${t.map(g=>Re`
                                    <div class="thumbnail-item">
                                        <img 
                                            src=${g.url} 
                                            alt=${g.name} 
                                            class=${i===g.url?"active":""}
                                            onClick=${()=>r(g.url)}
                                        />
                                        <span class="thumbnail-label">${g.name}</span>
                                    </div>
                                `)}
                            </div>
                        `}
                        ${u&&Re`<${te} error=${u} />`}
                    </div>
                `:Re`
                    <${ne} onImageUpload=${g=>m(g)} />
                `}
            </div>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Me=G.bind(F),Mi=({settings:n,setSettings:e,onGenerate:t,generating:o,hasImage:i,isBatch:r=!1})=>{const[s,d]=_(!1),u=me(null),c=()=>{if(!("webkitSpeechRecognition"in window)){alert("កម្មវិធីរុករកមិនគាំទ្រការបញ្ចូលសំឡេងទេ។");return}const m=new window.webkitSpeechRecognition;m.lang="km-KH",m.onstart=()=>d(!0),m.onend=()=>d(!1),m.onresult=g=>{const v=g.results[0][0].transcript;e(b=>({...b,prompt:b.prompt?`${b.prompt} ${v}`:v}))},s?m.stop():m.start()},p=m=>{var v;const g=(v=m.currentTarget.files)==null?void 0:v[0];if(g){const b=new FileReader;b.onload=$=>{$.target&&e(C=>({...C,referenceImage:$.target.result}))},b.readAsDataURL(g)}},f=de(()=>i&&(n.prompt.trim()!==""||n.referenceImage!==null),[i,n.prompt,n.referenceImage]),h={none:"លំនាំដើម","left-light":"ពន្លឺថ្ងៃស្រាល (ឆ្វេង)","left-strong":"ពន្លឺថ្ងៃខ្លាំង (ឆ្វេង)","right-light":"ពន្លឺថ្ងៃស្រាល (ស្តាំ)","right-strong":"ពន្លឺថ្ងៃខ្លាំង (ស្តាំ)"};return Me`
        <div class="settings-panel">
            <div class="form-group">
                <label>តំបន់ប្រវត្តិសាស្ត្រខ្មែរ (Preset)</label>
                <div class="preset-grid" style=${{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"0.75rem",marginBottom:"1.5rem"}}>
                    ${zd.map(m=>Me`
                        <button 
                            class="preset-btn ${n.prompt===m.prompt?"active":""}" 
                            onClick=${()=>e(g=>({...g,prompt:m.prompt}))}
                        >
                            ${m.label}
                        </button>
                    `)}
                </div>
            </div>

            <div class="form-group">
                <label>តំបន់ទេសចរណ៍ខ្មែរ (Preset)</label>
                <div class="preset-grid" style=${{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"0.75rem",marginBottom:"1.5rem"}}>
                    ${Od.map(m=>Me`
                        <button 
                            class="preset-btn ${n.prompt===m.prompt?"active":""}" 
                            onClick=${()=>e(g=>({...g,prompt:m.prompt}))}
                        >
                            ${m.label}
                        </button>
                    `)}
                </div>
            </div>

            <div class="form-group">
                <label for="bg-prompt">ការពិពណ៌នាផ្ទៃខាងក្រោយ (អត្ថបទ)</label>
                <div class="voice-input-container">
                    <textarea 
                        id="bg-prompt" 
                        placeholder="ឧទាហរណ៍៖ ឆ្នេរសមុទ្រតំបន់ត្រូពិចដែលមានខ្សាច់ស និងសមុទ្រខៀវស្រងាត់..."
                        value=${n.prompt}
                        onInput=${m=>e(g=>({...g,prompt:m.currentTarget.value}))}
                    ></textarea>
                    <button class="voice-btn ${s?"recording":""}" onClick=${c} title="បញ្ចូលតាមរយៈសំឡេង">
                        <${ft} recording=${s} />
                    </button>
                </div>
            </div>

            <div class="form-group">
                <label>រូបថតយោង (Reference)</label>
                <input type="file" ref=${u} onChange=${p} accept="image/*" style=${{display:"none"}} />
                <div class="reference-uploader" onClick=${()=>{var m;return(m=u.current)==null?void 0:m.click()}}>
                    ${n.referenceImage?Me`
                        <img src=${n.referenceImage} alt="Reference" class="reference-preview"/>
                        <button class="remove-reference-btn" onClick=${m=>{m.stopPropagation(),e(g=>({...g,referenceImage:null}))}} title="លុបរូបថតយោង"><${ye}/></button>
                    `:Me`
                        <div class="reference-placeholder">
                           <${J} />
                           <span>ចុចដើម្បីបង្ហោះ</span>
                        </div>
                    `}
                </div>
            </div>

            <div class="form-group">
                <label>ចំនួនមនុស្សក្នុងរូបថត</label>
                <div class="radio-group">
                    <label>
                        <input type="radio" name="people" value="one" checked=${n.numberOfPeople==="one"} onChange=${()=>e(m=>({...m,numberOfPeople:"one"}))} />
                        ម្នាក់
                    </label>
                    <label>
                        <input type="radio" name="people" value="two" checked=${n.numberOfPeople==="two"} onChange=${()=>e(m=>({...m,numberOfPeople:"two"}))} />
                        ពីរនាក់
                    </label>
                    <label>
                        <input type="radio" name="people" value="multiple" checked=${n.numberOfPeople==="multiple"} onChange=${()=>e(m=>({...m,numberOfPeople:"multiple"}))} />
                        ច្រើននាក់
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label>ជម្រើសកាយវិការ</label>
                <div class="radio-group">
                    <label>
                        <input type="radio" name="pose" value="keep" checked=${n.poseOption==="keep"} onChange=${m=>e(g=>({...g,poseOption:m.currentTarget.value}))} />
                        រក្សានៅដដែល
                    </label>
                    <label>
                        <input type="radio" name="pose" value="change" checked=${n.poseOption==="change"} onChange=${m=>e(g=>({...g,poseOption:m.currentTarget.value}))} />
                        ប្តូរកាយវិការ
                    </label>
                </div>
            </div>
            
            <div class="form-section">
                <h3 class="form-section-title">កែសម្រួលតួអង្គ</h3>
                 <div class="switch-group">
                     <label>ធ្វើឱ្យតួអង្គច្បាស់</label>
                     <label class="switch">
                        <input type="checkbox" checked=${n.sharpenSubject} onChange=${m=>e(g=>({...g,sharpenSubject:m.currentTarget.checked}))} />
                        <span class="slider-switch"></span>
                    </label>
                </div>

                <div class="form-group" style="margin-top: 1.5rem;">
                    <label>ទិសដៅពន្លឺ</label>
                    <select value=${n.lightingEffect} onChange=${m=>e(g=>({...g,lightingEffect:m.currentTarget.value}))}>
                        ${Object.entries(h).map(([m,g])=>Me`
                            <option value=${m}>${g}</option>
                        `)}
                    </select>
                </div>

                <div class="slider-control">
                    <div class="slider-label">
                        <span>កម្រិតពន្លឺបរិយាកាស</span>
                        <span class="value">${n.lightingIntensity}%</span>
                    </div>
                    <input type="range" min="0" max="100" value=${n.lightingIntensity} onInput=${m=>e(g=>({...g,lightingIntensity:parseInt(m.currentTarget.value,10)}))}/>
                </div>
            </div>
            
            ${!r&&Me`
                <div class="form-group">
                    <label>ចំនួនរូបថតដែលត្រូវបង្កើត</label>
                    <input type="number" min="1" max="3" class="number-input" value=${n.numImages} onInput=${m=>e(g=>({...g,numImages:Math.max(1,Math.min(3,parseInt(m.currentTarget.value,10)))}))} />
                </div>
            `}

            <button class="btn btn-primary" onClick=${t} disabled=${o||!f} style=${{width:"100%"}}>
                ${o?"កំពុងផ្លាស់ប្តូរ...":"បង្កើតរូបថត"}
            </button>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const j=G.bind(F),_u=()=>{const[n,e]=_(null),[t,o]=_([]),[i,r]=_(null),[s,d]=_(!1),[u,c]=_(""),[p,f]=_(null),[h,m]=_({prompt:"",referenceImage:null,poseOption:"keep",lightingEffect:"none",numImages:1,numberOfPeople:"one",sharpenSubject:!0,lightingIntensity:75}),g=async()=>{if(!n)return;d(!0),c(""),o([]),r(null);const b=[];for(let C=0;C<h.numImages;C++)try{const x=await mn(n,h);b.push(x)}catch(x){console.error("Error generating one background:",x);const w=x instanceof Error?x.message:String(x);c(y=>y?`${y}
បញ្ហាលើកទី ${C+1}: ${w}`:`បញ្ហាលើកទី ${C+1}: ${w}`),b.push(null)}const $=b.filter(C=>C!==null);o($),$.length>0?r($[0]):u||c('អ្នកត្រូវបញ្ចូល API Key ក្នុងផ្ទាំង "ការកំណត់" មុនពេលប្រើប្រាស់មុខងារនេះ។'),d(!1)},v=b=>{e(b),o([]),r(null),c("")};return j`
        ${p&&j`
            <${Fe} 
                imageUrl=${p} 
                caption="រូបថតដែលបានប្តូរផ្ទៃខាងក្រោយ" 
                onClose=${()=>f(null)} 
            />
        `}
        <div class="editor-layout">
            <${Mi} settings=${h} setSettings=${m} onGenerate=${g} generating=${s} hasImage=${!!n} />
            <div class="image-panel">
                 ${n?j`
                    <div class="image-panel-preview">
                        ${s&&j`<${H} text="AI កំពុងប្តូរផ្ទៃខាងក្រោយ..." />`}
                        <div class="image-display-wrapper">
                            <${se} original=${n} generated=${i} objectFit="contain"/>
                             <${he} 
                                generatedImage=${i}
                                filename="background-changed.jpeg"
                                onReset=${()=>v(null)}
                                onView=${()=>f(i)}
                                isGenerating=${s}
                            />
                        </div>
                        ${t.length>1&&j`
                            <div class="thumbnail-gallery">
                                ${t.map((b,$)=>j`
                                    <div class="thumbnail-item">
                                        <img 
                                            src=${b} 
                                            alt="បានបង្កើត ${$+1}" 
                                            class=${i===b?"active":""}
                                            onClick=${()=>r(b)}
                                        />
                                    </div>
                                `)}
                            </div>
                        `}
                        ${u&&j`<${te} error=${u} />`}
                    </div>
                `:j`
                    <${ne} onImageUpload=${b=>v(b)} />
                `}
            </div>
        </div>
    `},Cu=()=>{const[n,e]=_([]),[t,o]=_({prompt:"",referenceImage:null,poseOption:"keep",lightingEffect:"none",numImages:1,numberOfPeople:"one",sharpenSubject:!0,lightingIntensity:75}),[i,r]=_(!1),[s,d]=_(0),[u,c]=_(""),[p,f]=_(""),[h,m]=_(null),[g,v]=_("4k"),b=I=>{if(!I.currentTarget.files)return;const A=Array.from(I.currentTarget.files).map(S=>({id:Date.now()+Math.random(),file:S,original:URL.createObjectURL(S),generated:null,status:"pending"}));e(S=>[...S,...A])},$=I=>new Promise((A,S)=>{const P=new FileReader;P.onload=()=>A(P.result),P.onerror=S,P.readAsDataURL(I)}),C=async(I,A,S)=>{let P=0;const M=[...I],L=async()=>{for(;M.length>0;){const O=M.shift();O&&(await S(O),P++,d(Math.round(P/I.length*100)),M.length>0&&await new Promise(be=>setTimeout(be,2e3)))}};await Promise.all(Array(A).fill(null).map(()=>L()))},x=async()=>{r(!0),d(0),c("");const I=n.filter(S=>S.status==="pending"||S.status==="error"),A=async S=>{e(P=>P.map(M=>M.id===S.id?{...M,status:"processing"}:M));try{const P=await $(S.file),M=await mn(P,t);e(L=>L.map(O=>O.id===S.id?{...O,generated:M,status:"done"}:O))}catch(P){const M=P instanceof Error?P.message:String(P);throw c(M),console.error(`Error processing image ${S.id}:`,P),e(L=>L.map(O=>O.id===S.id?{...O,status:"error"}:O)),P}};try{await C(I,1,A)}catch(S){console.error("Batch processing stopped due to an error.",S)}finally{r(!1)}},w=async I=>{const A=n.find(S=>S.id===I);if(A){c(""),e(S=>S.map(P=>P.id===I?{...P,status:"processing"}:P));try{const S=await $(A.file),P=await mn(S,t);e(M=>M.map(L=>L.id===I?{...L,generated:P,status:"done"}:L))}catch(S){const P=S instanceof Error?S.message:String(S);c(P),e(M=>M.map(L=>L.id===I?{...L,status:"error"}:L))}}},y=I=>e(A=>A.filter(S=>S.id!==I)),k=async()=>{f("ចាប់ផ្តើម..."),c("");const I=n.filter(A=>A.generated);for(let A=0;A<I.length;A++){const S=I[A];if(S.generated)try{let P=S.generated;f(`កំពុងដំណើរការ ${A+1}/${I.length}...`),g!=="original"&&(P=await pt(S.generated,g));const M=document.createElement("a");M.href=P,M.download=`background-changed-${S.id}-${g}.jpeg`,document.body.appendChild(M),M.click(),document.body.removeChild(M),await new Promise(L=>setTimeout(L,500))}catch(P){const M=`បញ្ហាក្នុងការទាញយករូបថត ${A+1}។`;c(M),console.error(M,P);break}}f("")},E=de(()=>n.filter(I=>I.status==="pending"||I.status==="error").length,[n]),T=E>0?`ប្តូរផ្ទៃខាងក្រោយរូបថត ${E}`:"ប្តូរផ្ទៃខាងក្រោយ";return j`
        ${h&&j`
            <${Fe} 
                imageUrl=${h} 
                caption="រូបថតដែលបានប្តូរផ្ទៃខាងក្រោយ" 
                onClose=${()=>m(null)} 
            />
        `}
        <div class="batch-editor-layout">
            <${Mi} 
                settings=${t} 
                setSettings=${o}
                onGenerate=${x} 
                generating=${i} 
                hasImage=${E>0} 
                buttonText=${T} isBatch=${!0} />
            <div class="batch-panel">
                 <div class="actions" style=${{justifyContent:"space-between",marginBottom:"1.5rem",flexWrap:"wrap",gap:"1rem"}}>
                     <button class="btn btn-secondary" onClick=${()=>{var I;return(I=document.getElementById("batch-bg-file-input"))==null?void 0:I.click()}}>
                         <${J} /> បន្ថែមរូបថត
                    </button>
                     <input type="file" id="batch-bg-file-input" multiple accept="image/*" style=${{display:"none"}} onChange=${b} />
                    <div style=${{display:"flex",alignItems:"center",gap:"1rem"}}>
                        <div class="toggle-group" style=${{flexShrink:0}}>
                            <button class=${`toggle-btn ${g==="original"?"active":""}`} onClick=${()=>v("original")}>ដើម</button>
                            <button class=${`toggle-btn ${g==="4k"?"active":""}`} onClick=${()=>v("4k")}>4K</button>
                            <button class=${`toggle-btn ${g==="8k"?"active":""}`} onClick=${()=>v("8k")}>8K</button>
                        </div>
                        <button class="btn btn-primary" onClick=${k} disabled=${n.every(I=>!I.generated)||!!p}>
                            ${p||j`<${ce} /> ទាញយកទាំងអស់`}
                        </button>
                    </div>
                </div>
                
                ${i&&j`
                    <div class="progress-bar">
                        <div class="progress-bar-inner" style=${{width:`${s}%`}}></div>
                        <span class="progress-label">${s}%</span>
                    </div>
                `}
                
                ${u&&j`<${te} error=${u} />`}
    
                <div class="batch-grid">
                    ${n.map(I=>j`
                        <div class="batch-item" onClick=${()=>I.generated&&m(I.generated)}>
                            <div class="image-container">
                                <img src=${I.generated||I.original} />
                                ${I.status==="processing"&&j`<${H} text="កំពុងដំណើរការ..." />`}
                                ${I.status==="error"&&j`<div class="error-badge">បញ្ហា</div>`}
                            </div>
                            <div class="batch-item-actions">
                                <button class="batch-item-btn" title="បង្កើតឡើងវិញ" onClick=${A=>{A.stopPropagation(),w(I.id)}}><${zt} /></button>
                                <button class="batch-item-btn" title="លុប" onClick=${A=>{A.stopPropagation(),y(I.id)}}><${We} /></button>
                            </div>
                        </div>
                    `)}
                     ${n.length===0&&j`
                        <div class="image-panel-content" style=${{gridColumn:"1 / -1"}}>
                             <${J} class="placeholder-icon"/>
                             <h4>កែសម្រួលរូបថតជាក្រុម</h4>
                             <p class="placeholder-text">បង្ហោះរូបថតច្រើនដើម្បីចាប់ផ្តើមកែសម្រួលក្នុងពេលតែមួយ។</p>
                        </div>
                     `}
                </div>
            </div>
        </div>
    `},wu=()=>{const[n,e]=_("single");return j`
         <div>
            <div class="tabs">
                <button class="tab ${n==="single"?"active":""}" onClick=${()=>e("single")}>កែសម្រួលម្នាក់ៗ</button>
                <button class="tab ${n==="batch"?"active":""}" onClick=${()=>e("batch")}>កែសម្រួលជាក្រុម</button>
            </div>
            ${n==="single"?j`<${_u} />`:j`<${Cu} />`}
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const nt=G.bind(F),Tu=({settings:n,setSettings:e,onGenerate:t,generating:o})=>{const i=me(null),r=me(null),s=(u,c)=>{if(u){const p=new FileReader;p.onload=f=>{f.target&&e(h=>({...h,[c]:f.target.result}))},p.readAsDataURL(u)}},d=de(()=>n.productImage&&(n.characterImage||n.characterPrompt.trim()!==""),[n.productImage,n.characterImage,n.characterPrompt]);return nt`
        <div class="settings-panel">
            <div class="form-group">
                <label class="uploader-label">រូបថតផលិតផល (ចាំបាច់)</label>
                <input type="file" ref=${i} onChange=${u=>{var c;return s((c=u.currentTarget.files)==null?void 0:c[0],"productImage")}} accept="image/*" style=${{display:"none"}} />
                <div class="reference-uploader" onClick=${()=>{var u;return(u=i.current)==null?void 0:u.click()}}>
                    ${n.productImage?nt`
                        <img src=${n.productImage} alt="Product" class="reference-preview"/>
                        <button class="remove-reference-btn" onClick=${u=>{u.stopPropagation(),e(c=>({...c,productImage:null}))}} title="លុបរូបថតផលិតផល"><${ye}/></button>
                    `:nt`
                        <div class="reference-placeholder">
                           <${J} />
                           <span>ចុចដើម្បីបង្ហោះ</span>
                        </div>
                    `}
                </div>
            </div>

             <div class="form-group">
                <label class="uploader-label">រូបថតតួអង្គ (ជម្រើស)</label>
                <input type="file" ref=${r} onChange=${u=>{var c;return s((c=u.currentTarget.files)==null?void 0:c[0],"characterImage")}} accept="image/*" style=${{display:"none"}} />
                <div class="reference-uploader" onClick=${()=>{var u;return(u=r.current)==null?void 0:u.click()}}>
                    ${n.characterImage?nt`
                        <img src=${n.characterImage} alt="Character" class="reference-preview"/>
                        <button class="remove-reference-btn" onClick=${u=>{u.stopPropagation(),e(c=>({...c,characterImage:null}))}} title="លុបរូបថតតួអង្គ"><${ye}/></button>
                    `:nt`
                        <div class="reference-placeholder">
                           <${J} />
                           <span>ចុចដើម្បីបង្ហោះ</span>
                        </div>
                    `}
                </div>
            </div>

            <div class="form-group">
                <label for="character-prompt">ការពិពណ៌នាតួអង្គ (ប្រសិនបើមិនបានបង្ហោះរូបថត)</label>
                <textarea 
                    id="character-prompt" 
                    placeholder="ឧទាហរណ៍៖ ស្ត្រីអាស៊ីម្នាក់ សក់វែង កំពុងញញឹម..."
                    value=${n.characterPrompt}
                    onInput=${u=>e(c=>({...c,characterPrompt:u.currentTarget.value}))}
                    disabled=${!!n.characterImage}
                ></textarea>
            </div>

            <div class="form-group">
                <label for="scene-prompt">ការពិពណ៌នាអំពីទិដ្ឋភាព និងកាយវិការ</label>
                <textarea 
                    id="scene-prompt" 
                    placeholder="ឧទាហរណ៍៖ ឈរនៅក្នុងហាងកាហ្វេទំនើប មានពន្លឺធម្មជាតិ កាន់ផលិតផលដោយដៃទាំងពីរ..."
                    value=${n.scenePrompt}
                    onInput=${u=>e(c=>({...c,scenePrompt:u.currentTarget.value}))}
                ></textarea>
            </div>
            
            <button class="btn btn-primary" onClick=${t} disabled=${o||!d} style=${{width:"100%"}}>
                ${o?"កំពុងបង្កើត Mockup...":"បង្កើតរូបថត"}
            </button>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Ke=G.bind(F),Iu=()=>{const[n,e]=_({productImage:null,characterImage:null,characterPrompt:"",scenePrompt:""}),[t,o]=_(null),[i,r]=_(!1),[s,d]=_(""),u=async()=>{if(n.productImage){r(!0),d("");try{const p=await Yc(n);o(p)}catch(p){p instanceof Error?d(p.message):d(String(p))}finally{r(!1)}}},c=()=>{e({productImage:null,characterImage:null,characterPrompt:"",scenePrompt:""}),o(null),d("")};return Ke`
        <div class="editor-layout">
            <${Tu} settings=${n} setSettings=${e} onGenerate=${u} generating=${i} />
            <div class="image-panel">
                ${n.productImage?Ke`
                    <div class="image-panel-preview">
                        ${i&&Ke`<${H} text="AI កំពុងបង្កើត Mockup ផលិតផល..." />`}
                        <div class="image-display-wrapper">
                            <${se} original=${n.productImage} generated=${t} objectFit="contain" />
                            <${he}
                                generatedImage=${t}
                                filename="product-mockup.jpeg"
                                onReset=${c}
                                isGenerating=${i}
                            />
                        </div>
                        ${s&&Ke`<${te} error=${s} />`}
                    </div>
                `:Ke`
                    <${ne} onImageUpload=${p=>e(f=>({...f,productImage:p}))} />
                `}
            </div>
        </div>
    `},Eu=()=>Ke`<${Iu} />`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const ot=G.bind(F),xu=({settings:n,setSettings:e,onGenerate:t,generating:o,hasImage:i})=>{const r=me(null),[s,d]=_(!1),u=h=>{var g;const m=(g=h.currentTarget.files)==null?void 0:g[0];if(m){const v=new FileReader;v.onload=b=>{b.target&&e($=>({...$,subjectImage:b.target.result}))},v.readAsDataURL(m)}},c=h=>{const m=n.selectedTrends.includes(h)?n.selectedTrends.filter(v=>v!==h):[...n.selectedTrends,h],g=m.map(v=>Nt[v].prompt).join(`

---

`);e(v=>({...v,selectedTrends:m,prompt:g}))},p=()=>{if(!("webkitSpeechRecognition"in window)){alert("កម្មវិធីរុករកមិនគាំទ្រការបញ្ចូលសំឡេងទេ។");return}const h=new window.webkitSpeechRecognition;h.lang="km-KH",h.onstart=()=>d(!0),h.onend=()=>d(!1),h.onresult=m=>{const g=m.results[0][0].transcript;e(v=>({...v,prompt:v.prompt?`${v.prompt} ${g}`:g}))},s?h.stop():h.start()},f=de(()=>i&&n.prompt.trim()!=="",[i,n.prompt]);return ot`
        <div class="settings-panel">
            <div class="form-group">
                <label class="uploader-label">១. រូបថតរបស់អ្នក (ប្រធានបទ)</label>
                <input type="file" ref=${r} onChange=${u} accept="image/*" style=${{display:"none"}} />
                <div class="reference-uploader" onClick=${()=>{var h;return(h=r.current)==null?void 0:h.click()}}>
                    ${n.subjectImage?ot`
                        <img src=${n.subjectImage} alt="Subject" class="reference-preview"/>
                        <button class="remove-reference-btn" onClick=${h=>{h.stopPropagation(),e(m=>({...m,subjectImage:null}))}} title="លុបតួអង្គ"><${ye}/></button>
                    `:ot`
                        <div class="reference-placeholder">
                           <${J} />
                           <span>ចុចដើម្បីបង្ហោះ</span>
                        </div>
                    `}
                </div>
            </div>

            <div class="form-group">
                <label>២. ជ្រើសរើស Trend ដែលមានស្រាប់ (អាចជ្រើសរើសបានច្រើន)</label>
                <div class="lighting-styles-grid">
                    ${Object.entries(Nt).map(([h,m])=>ot`
                        <button key=${h} onClick=${()=>c(h)} class="style-button ${n.selectedTrends.includes(h)?"active":""}">
                            ${m.label}
                        </button>
                    `)}
                </div>
            </div>

            <div class="form-group">
                <label for="trend-prompt">៣. Prompt (អាចកែសម្រួលបាន)</label>
                <div class="voice-input-container">
                    <textarea id="trend-prompt" value=${n.prompt} onInput=${h=>e(m=>({...m,prompt:h.currentTarget.value}))} placeholder="ជ្រើសរើស Trend ដែលមានស្រាប់ ឬសរសេរ Prompt ផ្ទាល់ខ្លួនរបស់អ្នក។" rows="6"></textarea>
                    <button class="voice-btn ${s?"recording":""}" onClick=${p} title="បញ្ចូលតាមរយៈសំឡេង"><${ft} recording=${s} /></button>
                </div>
            </div>
            
            <div class="form-group">
                <label>៤. ចំនួនរូបថត (សម្រាប់ Trend នីមួយៗ)</label>
                <div class="radio-group">${[1,2,3,4].map(h=>ot`<label><input type="radio" name="numImages" value=${h} checked=${n.numImages===h} onChange=${()=>e(m=>({...m,numImages:h}))}/> ${h}</label>`)}</div>
            </div>

            <button class="btn btn-primary" onClick=${t} disabled=${o||!f} style=${{width:"100%"}}>
                ${o?"កំពុងបង្កើត...":"បង្កើតរូបថត"}
            </button>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const $e=G.bind(F),ku=()=>{const[n,e]=_({subjectImage:null,selectedTrends:[],prompt:"",numImages:1}),[t,o]=_([]),[i,r]=_([]),[s,d]=_(!1),[u,c]=_(""),[p,f]=_(null),[h,m]=_(!1),g=w=>{e(y=>({...y,subjectImage:w})),o([]),r([]),c("")},v=async()=>{if(!n.subjectImage)return;d(!0),c("");const w=n.prompt.trim()===n.selectedTrends.map(E=>Nt[E].prompt).join(`

---

`).trim()&&n.selectedTrends.length>0,y=[];w?y.push(...n.selectedTrends.map(E=>Nt[E].prompt)):y.push(n.prompt);const k=[];for(const E of y)for(let T=0;T<n.numImages;T++)try{const I=await X(E,n.subjectImage);k.push(I)}catch(I){console.error("Error generating trend image:",I);const A=I instanceof Error?I.message:String(I);c(S=>S?`${S}
${A}`:A)}o(E=>[...E,...k]),d(!1)},b=w=>{r(y=>y.includes(w)?y.filter(k=>k!==w):[...y,w])},$=w=>{f(w)},C=async()=>{if(i.length!==0){m(!0),c("");for(let w=0;w<i.length;w++){const y=i[w];try{const k=await pt(y,"8k"),E=document.createElement("a");E.href=k,E.download=`trend-image-${w+1}-8k.jpeg`,document.body.appendChild(E),E.click(),document.body.removeChild(E),await new Promise(T=>setTimeout(T,500))}catch(k){const E=`មានបញ្ហាក្នុងការបង្កើនគុណភាពរូបថតទី ${w+1}។`;c(E),console.error(E,k);break}}m(!1)}},x=()=>$e`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`;return $e`
        ${p&&$e`
            <${Vd} 
                originalUrl=${n.subjectImage} 
                generatedUrl=${p}
                caption="ប្រៀបធៀបរូបថតដើម និងរូបថត Trend"
                onClose=${()=>f(null)}
            />
        `}
        <div class="editor-layout">
            <${xu} settings=${n} setSettings=${e} onGenerate=${v} generating=${s} hasImage=${!!n.subjectImage} />
            <div class="image-panel">
                ${s&&$e`<${H} text="AI កំពុងបង្កើតរូបថត Trend..." />`}
                ${n.subjectImage?$e`
                    <div class="trend-results-container">
                        <div class="results-actions">
                            <button class="btn btn-secondary" onClick=${()=>{o([]),r([])}} disabled=${t.length===0}>លុបទាំងអស់</button>
                            <button class="btn btn-primary" onClick=${C} disabled=${i.length===0||h}>
                                ${h?"កំពុងទាញយក...":$e`<${ht} /> ទាញយក (${i.length}) រូបថត (8K)`}
                            </button>
                        </div>
                         ${u&&$e`<${te} error=${u} />`}
                        <div class="trend-grid">
                            ${t.map(w=>$e`
                                <div class=${`trend-item ${i.includes(w)?"selected":""}`}>
                                    <img src=${w} alt="Generated trend image" onClick=${()=>$(w)} />
                                    <div class="trend-item-checkbox" onClick=${y=>{y.stopPropagation(),b(w)}}><${x}/></div>
                                </div>
                            `)}
                        </div>
                    </div>
                `:$e`
                    <${ne} onImageUpload=${g} />
                `}
            </div>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Au="BP-PRO-RETOUCH-2025-SALT",Wo=(n,e)=>{const t={email:n,prefix:"",expiryDate:new Date(0),isLifetime:!1,isExpired:!1,isValid:!1};if(!n||!e)return t;const o=e.split("-");if(o.length!==3)return t;const[i,r,s]=o,d=n.toLowerCase().trim(),u=`${d}:${i}:${r}:${Au}`;let c=0;for(let $=0;$<u.length;$++){const C=u.charCodeAt($);c=(c<<5)-c+C,c=c&c}const p=Math.abs(c).toString(36).toUpperCase();if(s!==p)return t;const f=parseInt(r,16),h=new Date(f*1e3),m=new Date,g=i==="LIFETIME",v=!g&&h<=m;return{email:d,prefix:i,expiryDate:h,isLifetime:g,isExpired:v,isValid:g||!v}},Su=()=>{const n=localStorage.getItem("license_email"),e=localStorage.getItem("license_key");return n&&e?{email:n,key:e}:null},Pu=(n,e)=>{localStorage.setItem("license_email",n.toLowerCase().trim()),localStorage.setItem("license_key",e.trim())},Ru=()=>{localStorage.removeItem("license_email"),localStorage.removeItem("license_key")};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Te=G.bind(F),Mu=()=>Te`
    <div class="settings-info">
        <div class="info-card">
            <div class="info-card-header">
                <h3>របៀបដែលវាដំណើរការ</h3>
            </div>
            <p>
                NHC MAGIC TOOL ប្រើប្រាស់ថាមពលនៃម៉ូដែល AI Google Gemini ដើម្បីអនុវត្តការងារកែសម្រួលរូបភាព។
            </p>
            <p>
                ដើម្បីធានាសុវត្ថិភាព និងអនុញ្ញាតឱ្យអ្នកមានការគ្រប់គ្រងពេញលេញលើការប្រើប្រាស់ កម្មវិធីតម្រូវឱ្យអ្នកផ្តល់ API Key ផ្ទាល់ខ្លួនរបស់អ្នក។ រាល់សំណើដំណើរការរូបភាពនឹងត្រូវបានធ្វើឡើងតាមរយៈ Key របស់អ្នក។
            </p>
        </div>
         <div class="info-card">
            <div class="info-card-header">
                <h3>តើធ្វើដូចម្តេចដើម្បីទទួលបាន API Key?</h3>
            </div>
            <ul>
                <li><strong>ជំហានទី ១៖</strong> ចូលទៅកាន់ Google AI Studio។</li>
                <li><strong>ជំហានទី ២៖</strong> ចុចលើប៊ូតុង "Get API Key" (យកកូដ API)។</li>
                <li><strong>ជំហានទី ៣៖</strong> បង្កើតកូដ API ថ្មីនៅក្នុងគម្រោងរបស់អ្នក។</li>
                <li><strong>ជំហានទី ៤៖</strong> ចម្លងកូដ ហើយបិទភ្ជាប់ក្នុងប្រអប់ខាងឆ្វេង។</li>
            </ul>
             <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" class="youtube-link">
                <span>យក API Key នៅ Google AI Studio</span>
            </a>
        </div>
    </div>
`,Du=({onClearCache:n,theme:e,setTheme:t,license:o,onApiKeyUpdate:i})=>{const[r,s]=_(""),[d,u]=_(null),[c,p]=_(""),[f,h]=_(!1),[m,g]=_("none"),[v,b]=_("standard");ve(()=>{const y=localStorage.getItem("gemini_api_key")||"",k=localStorage.getItem("model_tier")||"standard";s(y),b(k),y?g("custom"):(g("none"),u({message:"មិនមាន API Key ត្រឹមត្រូវ។ សូមបញ្ចូល API Key របស់អ្នក។",type:"warning"}))},[]);const $=async()=>{h(!0),u(null);const y=await Vc(r);u(y),h(!1)},C=()=>{const y=r.trim();u(null),y?(localStorage.setItem("gemini_api_key",y),g("custom")):(localStorage.removeItem("gemini_api_key"),s(""),g("none"),u({message:"មិនមាន API Key ត្រឹមត្រូវ។ សូមបញ្ចូល API Key របស់អ្នក។",type:"warning"})),p("បានរក្សាទុកដោយជោគជ័យ!"),i&&i(),setTimeout(()=>p(""),3e3)},x=y=>{b(y),localStorage.setItem("model_tier",y)},w=()=>{confirm("តើអ្នកពិតជាចង់ចាកចេញមែនទេ?")&&(Ru(),window.location.reload())};return Te`
        <div class="settings-app-layout">
            <div class="settings-panel">
                <h2>ការកំណត់</h2>

                <div class="form-group" style=${{background:"rgba(66, 153, 225, 0.1)",padding:"1rem",borderRadius:"8px",border:"1px solid var(--primary)"}}>
                    <h3 style=${{color:"var(--primary)",marginTop:0}}>ព័ត៌មានអាជ្ញាប័ណ្ណ</h3>
                    ${o?Te`
                        <div style=${{fontSize:"0.9rem"}}>
                            <div style=${{marginBottom:"0.5rem"}}><strong>Gmail:</strong> ${o.email}</div>
                            <div style=${{marginBottom:"0.5rem"}}><strong>ប្រភេទ:</strong> ${o.prefix}</div>
                            <div style=${{marginBottom:"0.5rem"}}><strong>ថ្ងៃផុតកំណត់:</strong> ${o.isLifetime?"គ្មានកំណត់":o.expiryDate.toLocaleDateString("km-KH")}</div>
                            <button class="btn" onClick=${w} style=${{background:"var(--surface-2)",color:"var(--text-primary)",border:"1px solid var(--border-color)",marginTop:"0.5rem",width:"100%"}}>
                                ចាកចេញពីគណនី
                            </button>
                        </div>
                    `:Te`
                        <div style=${{color:"var(--error-color)"}}>មិនទាន់មានអាជ្ញាប័ណ្ណ</div>
                    `}
                </div>

                 <div class="form-group">
                    <h3>Google Gemini API Key</h3>
                    <p class="settings-description">
                        ដើម្បីប្រើប្រាស់មុខងារ AI អ្នកត្រូវផ្តល់ API Key ផ្ទាល់ខ្លួនរបស់អ្នកពី Google។
                    </p>
                    
                    <div class="model-selector-container">
                        <div class="model-selector">
                            <button 
                                class=${v==="standard"?"active":""} 
                                onClick=${()=>x("standard")}
                            >
                                Nano Banana
                            </button>
                            <button 
                                class=${v==="pro"?"active-pro":""} 
                                onClick=${()=>x("pro")}
                            >
                                Nano Banana 2 (Pro)
                            </button>
                        </div>
                        ${v==="pro"&&Te`<p class="model-warning">* តម្រូវឱ្យមាន API Key Google Cloud ដែលបង់ប្រាក់</p>`}
                    </div>

                    <label for="api-key">បញ្ចូល API Key របស់អ្នក</label>
                    ${m==="custom"&&Te`<div class="api-status" style=${{marginBottom:"0.5rem",marginTop:"0.5rem"}}>ស្ថានភាព៖ កំពុងប្រើ Key ផ្ទាល់ខ្លួន។</div>`}
                    <input 
                        type="password" 
                        id="api-key" 
                        value=${r} 
                        onInput=${y=>s(y.currentTarget.value)}
                        placeholder="•••••••••••••••••••••••••••••••"
                    />
                    ${d&&Te`
                        <div class="api-test-result ${d.type}">
                            ${d.message}
                        </div>
                    `}
                </div>
                <div class="actions" style=${{justifyContent:"flex-start",paddingTop:0,marginTop:"1rem",marginBottom:"2rem"}}>
                    <button class="btn btn-secondary" onClick=${$} disabled=${f}>
                        ${f?"កំពុងពិនិត្យ...":"ពិនិត្យ Key"}
                    </button>
                     <button class="btn btn-primary" onClick=${C}>
                        រក្សាទុក Key
                    </button>
                </div>
                 ${c&&Te`<div class="save-status-message">${c}</div>`}
                

                 <div class="form-group">
                    <h3>ចំណុចប្រទាក់</h3>
                    <p class="settings-description">
                        ជ្រើសរើសចំណុចប្រទាក់ភ្លឺ ឬងងឹតសម្រាប់កម្មវិធី។
                    </p>
                    <div class="radio-group">
                        <label>
                            <input type="radio" name="theme" value="light" checked=${e==="light"} onChange=${()=>t("light")} />
                            ភ្លឺ
                        </label>
                        <label>
                            <input type="radio" name="theme" value="dark" checked=${e==="dark"} onChange=${()=>t("dark")} />
                            ងងឹត
                        </label>
                    </div>
                </div>
                
                <div class="form-group">
                    <h3>ប្រព័ន្ធ</h3>
                    <button class="btn" onClick=${n} style=${{width:"100%",background:"#ff6b6b",color:"white",marginTop:"0.5rem"}}>
                        🔄 លុប Cache និងផ្ទុកទំព័រឡើងវិញ
                    </button>
                </div>
            </div>
             <${Mu} />
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Ct=G.bind(F),Lu=({settings:n,setSettings:e,onGenerate:t,generating:o,hasImage:i})=>{const r=d=>{e(u=>({...u,selectedPreset:d,customPrompt:""}))},s=d=>{const u=d.currentTarget.value;e(c=>({...c,customPrompt:u,selectedPreset:null}))};return Ct`
        <div class="settings-panel">
             <div class="form-section">
                <h3 class="form-section-title">1. បង្ហោះរូបថត</h3>
                 ${i?Ct`
                    <button class="btn btn-secondary" onClick=${()=>{var d;return(d=document.getElementById("preset-change-image-input"))==null?void 0:d.click()}} style=${{width:"100%"}}>
                        <${J} /> ជ្រើសរើសរូបថតផ្សេងទៀត
                    </button>
                 `:Ct`
                    <p class="settings-description" style=${{color:"var(--text-secondary)",fontSize:"0.9rem",margin:"0.5rem 0"}}>បង្ហោះរូបថតនៅក្នុងប្រអប់ខាងស្តាំដើម្បីចាប់ផ្តើម។</p>
                 `}
            </div>

            <div class="form-section">
                <h3 class="form-section-title" style=${{display:"flex",alignItems:"center",gap:"0.5rem"}}>
                    <${Ii} />
                    <span>2. ជ្រើសរើស Preset ពណ៌</span>
                </h3>
                <div class="lighting-styles-grid">
                    ${Ai.map(d=>Ct`
                        <button
                            class="style-button ${n.selectedPreset===d.id?"active":""}"
                            onClick=${()=>r(d.id)}
                            disabled=${!i||o}
                        >
                            ${d.name}
                        </button>
                    `)}
                </div>
            </div>

            <div class="form-section">
                <h3 class="form-section-title">3. ឬកែតម្រូវពណ៌ដោយខ្លួនឯង</h3>
                <p class="settings-description" style=${{color:"var(--text-secondary)",fontSize:"0.9rem",margin:"0.5rem 0 0.25rem"}}>
                    ពិពណ៌នាអំពីស្ទីលពណ៌ដែលអ្នកចង់បាន។ AI នឹងរក្សាព័ត៌មានលម្អិតនៃរូបថត និងផ្លាស់ប្តូរតែពណ៌ប៉ុណ្ណោះ។
                </p>
                <p class="settings-description" style=${{color:"var(--text-secondary)",fontSize:"0.9rem",margin:"0 0 1rem"}}>
                    <strong>ឧទាហរណ៍៖</strong> "អនុវត្តពណ៌បែបត្រជាក់ កម្រិតពណ៌ខ្ពស់ តាមស្ទីលភាពយន្ត។"
                </p>
                <textarea
                    value=${n.customPrompt}
                    onInput=${s}
                    placeholder="បញ្ចូលការពិពណ៌នាពណ៌របស់អ្នកនៅទីនេះ..."
                    rows="4"
                    disabled=${!i||o}
                />
            </div>

            <button 
                class="btn btn-primary" 
                onClick=${t} 
                disabled=${o||!i||!n.selectedPreset&&!n.customPrompt.trim()}
                style=${{width:"100%",marginTop:"1rem",padding:"0.85rem"}}
            >
                ${o?"កំពុងដំណើរការ...":"អនុវត្តបែបផែន"}
            </button>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const it=G.bind(F),Nu=()=>{const[n,e]=_(null),[t,o]=_(null),[i,r]=_(!1),[s,d]=_(""),[u,c]=_({selectedPreset:null,customPrompt:""}),p=h=>{e(h),o(null),d(""),c({selectedPreset:null,customPrompt:""})};return it`
        <div class="editor-layout">
            <${Lu}
                settings=${u}
                setSettings=${c}
                onGenerate=${async()=>{if(!n)return;let h="";if(u.customPrompt.trim())h=u.customPrompt.trim();else if(u.selectedPreset){const m=Ai.find(g=>g.id===u.selectedPreset);m&&(h=m.prompt)}if(!h){d("សូមជ្រើសរើស Preset មួយ ឬបញ្ចូលការពិពណ៌នាដោយខ្លួនឯង។");return}r(!0),d("");try{const g=await ed(n,h);o(g)}catch(m){m instanceof Error?d(m.message):d(String(m))}finally{r(!1)}}}
                generating=${i}
                hasImage=${!!n}
            />
            <div class="image-panel">
                ${n?it`
                    <div class="image-panel-preview">
                        ${i&&it`<${H} text="AI កំពុងអនុវត្ត Preset ពណ៌..." />`}
                        <div class="image-display-wrapper">
                            <${se} original=${n} generated=${t} objectFit="contain" />
                            <${he}
                                generatedImage=${t}
                                filename=${`preset-${u.selectedPreset||"custom"}.jpeg`}
                                onReset=${()=>p(null)}
                                isGenerating=${i}
                            />
                        </div>
                        ${s&&it`<${te} error=${s} />`}
                    </div>
                `:it`
                    <${ne} onImageUpload=${h=>p(h)} id="preset-uploader" />
                `}
            </div>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const qe=G.bind(F),jt=[{key:"reds",name:"ក្រហម",gradients:{hue:"linear-gradient(to right, #ff00ff, #ff0000, #ff7f00)",saturation:"linear-gradient(to right, #808080, #ff0000)",luminance:"linear-gradient(to right, #000, #ff0000, #fff)"}},{key:"oranges",name:"ទឹកក្រូច",gradients:{hue:"linear-gradient(to right, #ff0000, #ff7f00, #ffff00)",saturation:"linear-gradient(to right, #808080, #ff7f00)",luminance:"linear-gradient(to right, #000, #ff7f00, #fff)"}},{key:"yellows",name:"លឿង",gradients:{hue:"linear-gradient(to right, #ff7f00, #ffff00, #7fff00)",saturation:"linear-gradient(to right, #808080, #ffff00)",luminance:"linear-gradient(to right, #000, #ffff00, #fff)"}},{key:"greens",name:"បៃតង",gradients:{hue:"linear-gradient(to right, #ffff00, #00ff00, #00ffff)",saturation:"linear-gradient(to right, #808080, #00ff00)",luminance:"linear-gradient(to right, #000, #00ff00, #fff)"}},{key:"aquas",name:"ខៀវស្រាល",gradients:{hue:"linear-gradient(to right, #00ff00, #00ffff, #0000ff)",saturation:"linear-gradient(to right, #808080, #00ffff)",luminance:"linear-gradient(to right, #000, #00ffff, #fff)"}},{key:"blues",name:"ខៀវ",gradients:{hue:"linear-gradient(to right, #00ffff, #0000ff, #ff00ff)",saturation:"linear-gradient(to right, #808080, #0000ff)",luminance:"linear-gradient(to right, #000, #0000ff, #fff)"}},{key:"purples",name:"ស្វាយ",gradients:{hue:"linear-gradient(to right, #0000ff, #800080, #ff00ff)",saturation:"linear-gradient(to right, #808080, #800080)",luminance:"linear-gradient(to right, #000, #800080, #fff)"}},{key:"magentas",name:"ផ្កាឈូក",gradients:{hue:"linear-gradient(to right, #800080, #ff00ff, #ff0000)",saturation:"linear-gradient(to right, #808080, #ff00ff)",luminance:"linear-gradient(to right, #000, #ff00ff, #fff)"}}],Uu=({settings:n,setSettings:e,onGenerate:t,generating:o,hasImage:i,onAutoAdjust:r,isAnalyzing:s,onImageUpload:d,generatedImage:u})=>{const c=me(null),p=v=>{var $;const b=($=v.currentTarget.files)==null?void 0:$[0];if(b){const C=new FileReader;C.onload=x=>{var w;(w=x.target)!=null&&w.result&&d(x.target.result)},C.readAsDataURL(b)}v.currentTarget&&(v.currentTarget.value="")},f=({label:v,settingKey:b,min:$,max:C,value:x})=>qe`
        <div class="slider-control">
            <div class="slider-label">
                <span>${v}</span>
                <span class="value">${x}</span>
            </div>
            <input 
                type="range" 
                min=${$} 
                max=${C} 
                value=${x} 
                onInput=${w=>e(y=>({...y,[b]:parseInt(w.currentTarget.value,10)}))}
                disabled=${!i||o||s}
            />
        </div>
    `,h=({label:v,value:b,gradient:$,onInput:C})=>qe`
        <div class="color-slider-item">
            <span class="color-slider-label">${v}</span>
            <div class="color-slider-control">
                <div class="color-slider-track" style=${{background:$}}></div>
                <input
                    type="range"
                    min="-100"
                    max="100"
                    value=${b}
                    onInput=${C}
                    disabled=${!i||o||s}
                />
            </div>
            <span class="color-slider-value">${b}</span>
        </div>
    `,m=(v,b,$)=>{e(C=>({...C,[v]:{...C[v],[b]:parseInt($,10)}}))},g=()=>{e(()=>({exposure:0,contrast:0,highlights:0,shadows:0,whites:0,blacks:0,hue:{reds:0,oranges:0,yellows:0,greens:0,aquas:0,blues:0,purples:0,magentas:0},saturation:{reds:0,oranges:0,yellows:0,greens:0,aquas:0,blues:0,purples:0,magentas:0},luminance:{reds:0,oranges:0,yellows:0,greens:0,aquas:0,blues:0,purples:0,magentas:0}}))};return qe`
        <div class="settings-panel color-correction-panel">
             <input type="file" ref=${c} onChange=${p} accept="image/*" style=${{display:"none"}} />
             <div class="form-section">
                <h3 class="form-section-title">ឧបករណ៍</h3>
                <div style=${{display:"flex",flexDirection:"column",gap:"0.75rem"}}>
                    <button 
                        class="btn btn-secondary" 
                        onClick=${()=>{var v;return(v=c.current)==null?void 0:v.click()}}
                        style=${{width:"100%"}}
                        disabled=${o||s}
                    >
                        <${J} /> ${i?"បង្ហោះរូបថតផ្សេងទៀត":"បង្ហោះរូបថត"}
                    </button>
                    <button 
                        class="btn btn-secondary" 
                        onClick=${r} 
                        disabled=${!i||o||s}
                        style=${{width:"100%"}}
                    >
                        ${s?"កំពុងវិភាគ...":"កែតម្រូវដោយស្វ័យប្រវត្តិ"}
                    </button>
                </div>
            </div>

            <details class="collapsible-section" open>
                <summary>ពន្លឺ</summary>
                <div class="light-sliders">
                    <${f} label="ការប៉ះពាល់ពន្លឺ" settingKey="exposure" min="-100" max="100" value=${n.exposure} />
                    <${f} label="កម្រិតពន្លឺពណ៌" settingKey="contrast" min="-100" max="100" value=${n.contrast} />
                    <${f} label="តំបន់ពន្លឺ" settingKey="highlights" min="-100" max="100" value=${n.highlights} />
                    <${f} label="តំបន់ងងឹត" settingKey="shadows" min="-100" max="100" value=${n.shadows} />
                    <${f} label="ចំណុចស" settingKey="whites" min="-100" max="100" value=${n.whites} />
                    <${f} label="ចំណុចខ្មៅ" settingKey="blacks" min="-100" max="100" value=${n.blacks} />
                </div>
            </details>

            <details class="collapsible-section" open>
                <summary>ពណ៌ - HSL</summary>
                <div class="hsl-section">
                    <h4>សម្លេងពណ៌ (Hue)</h4>
                    <div class="hsl-sliders">
                        ${jt.map(v=>qe`
                            <${h}
                                label=${v.name}
                                value=${n.hue[v.key]}
                                gradient=${v.gradients.hue}
                                onInput=${b=>m("hue",v.key,b.currentTarget.value)}
                            />
                        `)}
                    </div>
                </div>
                 <div class="hsl-section">
                    <h4>កម្រិតពណ៌ (Saturation)</h4>
                    <div class="hsl-sliders">
                         ${jt.map(v=>qe`
                            <${h}
                                label=${v.name}
                                value=${n.saturation[v.key]}
                                gradient=${v.gradients.saturation}
                                onInput=${b=>m("saturation",v.key,b.currentTarget.value)}
                            />
                        `)}
                    </div>
                </div>
                 <div class="hsl-section">
                    <h4>ពន្លឺពណ៌ (Luminance)</h4>
                    <div class="hsl-sliders">
                         ${jt.map(v=>qe`
                            <${h}
                                label=${v.name}
                                value=${n.luminance[v.key]}
                                gradient=${v.gradients.luminance}
                                onInput=${b=>m("luminance",v.key,b.currentTarget.value)}
                            />
                        `)}
                    </div>
                </div>
            </details>

            <div class="form-group-row" style=${{marginTop:"auto",paddingTop:"1rem",flexWrap:"wrap",gap:"0.5rem"}}>
                <button 
                    class="btn btn-secondary" 
                    onClick=${g}
                    disabled=${!i||o||s}
                    style=${{flex:1}}
                >
                    កំណត់ឡើងវិញ
                </button>
                <button 
                    class="btn btn-primary" 
                    onClick=${t} 
                    disabled=${o||!i}
                    style=${{flex:1}}
                >
                    ${o?"កំពុងអនុវត្ត...":"អនុវត្ត"}
                </button>
                 <${Y}
                    baseImageUrl=${u}
                    filename="color-corrected.jpeg"
                    disabled=${!u||o||s}
                    class="btn-primary"
                    style=${{width:"100%",marginTop:"0.5rem"}}
                >
                    <${ce} /> ទាញយករូបថត
                </${Y}>
            </div>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const rt=G.bind(F),Yo={exposure:0,contrast:0,highlights:0,shadows:0,whites:0,blacks:0,hue:{reds:0,oranges:0,yellows:0,greens:0,aquas:0,blues:0,purples:0,magentas:0},saturation:{reds:0,oranges:0,yellows:0,greens:0,aquas:0,blues:0,purples:0,magentas:0},luminance:{reds:0,oranges:0,yellows:0,greens:0,aquas:0,blues:0,purples:0,magentas:0}},Fu=()=>{const[n,e]=_(null),[t,o]=_(null),[i,r]=_(!1),[s,d]=_(!1),[u,c]=_(""),[p,f]=_(Yo),h=v=>{e(v),o(null),c(""),f(Yo)};return rt`
        <div class="editor-layout">
            <${Uu}
                settings=${p}
                setSettings=${f}
                onGenerate=${async()=>{if(n){r(!0),c("");try{const v=await Vo(n,p);o(v)}catch(v){c(v instanceof Error?v.message:"មានបញ្ហាមិនស្គាល់មួយបានកើតឡើង។")}finally{r(!1)}}}}
                generating=${i}
                hasImage=${!!n}
                onAutoAdjust=${async()=>{if(n){d(!0),c("");try{const v=await id(n);f(v);const b=await Vo(n,v);o(b)}catch(v){c(v instanceof Error?v.message:"មានបញ្ហាក្នុងការកែតម្រូវដោយស្វ័យប្រវត្តិ។")}finally{d(!1)}}}}
                isAnalyzing=${s}
                onImageUpload=${h}
                generatedImage=${t}
            />
            <div class="image-panel">
                 ${n?rt`
                    <div class="image-panel-preview">
                        ${(i||s)&&rt`<${H} text=${i?"AI កំពុងកែតម្រូវពណ៌...":"AI កំពុងវិភាគ..."} />`}
                        <div class="image-display-wrapper">
                            <${se} original=${n} generated=${t} objectFit="contain" />
                            <${he}
                                generatedImage=${t}
                                filename="color-corrected.jpeg"
                                onReset=${()=>h(null)}
                                isGenerating=${i||s}
                            />
                        </div>
                        ${u&&rt`<${te} error=${u} />`}
                    </div>
                `:rt`
                    <div class="image-panel-content">
                        <${Ce} class="placeholder-icon"/>
                        <h4>កែតម្រូវពណ៌</h4>
                        <p class="placeholder-text">បង្ហោះរូបថត ហើយប្រើរបាររំកិលដើម្បីកែតម្រូវ ឬអនុញ្ញាតឱ្យ AI ធ្វើវាដោយស្វ័យប្រវត្តិសម្រាប់អ្នក។</p>
                    </div>
                `}
            </div>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const ze=G.bind(F),Gu=()=>{const[n,e]=_(null),[t,o]=_(null),[i,r]=_(!1),[s,d]=_(""),[u,c]=_(null),p=g=>{e(g),o(null),d(""),c(null)},f=()=>{if(!t)return;const g=document.createElement("a");g.href=t,g.download=`upscaled-${u||"image"}.jpeg`,document.body.appendChild(g),g.click(),document.body.removeChild(g)},h=async g=>{if(!(!n||i||t)){r(g),d(""),c(null);try{const v=await pt(n,g);o(v),c(g)}catch(v){d(v instanceof Error?v.message:String(v))}finally{r(!1)}}},m=()=>{e(null),o(null),d(""),c(null)};return ze`
        <div class="upscaler-page-container">
            ${n?ze`
                <div class="upscaler-editor-layout">
                    <main class="upscaler-image-display">
                        ${i&&ze`<${H} text=${`កំពុងបង្កើនគុណភាពរូបថតទៅជា ${i.toUpperCase()}...`} />`}
                        <div class="image-display-wrapper">
                             <${se} original=${n} generated=${t} objectFit="contain" />
                        </div>
                    </main>
                    <aside class="settings-panel">
                        <div class="form-section">
                            <h3 class="form-section-title">ជ្រើសរើសគុណភាពរូបថត</h3>
                            <div class="upscaler-options-grid" style=${{marginTop:"1rem"}}>
                                <div 
                                    class="upscaler-option-card ${i||t?"disabled":""}"
                                    onClick=${()=>h("4k")}
                                >
                                   <div class="icon"><${Ud} /></div>
                                   <h4>បង្កើនគុណភាព 4K</h4>
                                   <p>ល្អសម្រាប់អេក្រង់ធំ និងការបោះពុម្ពដែលមានគុណភាពខ្ពស់។</p>
                                </div>
                                <div 
                                    class="upscaler-option-card ${i||t?"disabled":""}"
                                    onClick=${()=>h("8k")}
                                >
                                    <div class="icon"><${Fd} /></div>
                                   <h4>បង្កើនគុណភាព 8K</h4>
                                   <p>គុណភាពខ្ពស់បំផុតសម្រាប់គម្រោងអាជីព។</p>
                                </div>
                            </div>
                        </div>

                        ${s&&ze`<${te} error=${s} />`}

                        ${t&&ze`
                            <div class="form-section" style=${{marginTop:"1.5rem",borderTop:"1px solid var(--border-color)",paddingTop:"1.5rem"}}>
                                <h3 class="form-section-title">សកម្មភាព</h3>
                                <div style=${{display:"flex",flexDirection:"column",gap:"0.75rem",width:"100%"}}>
                                    <button class="btn btn-primary" onClick=${f} disabled=${i}>
                                        <${ce} /> ទាញយក (${u==null?void 0:u.toUpperCase()})
                                    </button>
                                    <button class="btn btn-secondary" onClick=${m} disabled=${i}>ចាប់ផ្តើមឡើងវិញ</button>
                                </div>
                            </div>
                        `}
                    </aside>
                </div>
            `:ze`
                <div class="page-header" style=${{textAlign:"center",maxWidth:"800px",margin:"0 auto 2rem auto"}}>
                    <h1>បង្កើនគុណភាពរូបថត AI</h1>
                    <p class="subtitle">បង្ហោះរូបថត ហើយអនុញ្ញាតឱ្យ AI បំប្លែងវាទៅជាស្នាដៃ 4K ឬ 8K ដ៏ច្បាស់បំផុត។</p>
                </div>
                <div class="upscaler-upload-container">
                    <${ne} onImageUpload=${g=>p(g)} id="upscaler-uploader" />
                </div>
            `}
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const De=G.bind(F),Vu=()=>{const[n,e]=_(null),[t,o]=_(null),[i,r]=_(null),[s,d]=_(100),[u,c]=_(!1),[p,f]=_(!1),[h,m]=_(""),g=me(null),v=w=>{var k;const y=(k=w.currentTarget.files)==null?void 0:k[0];if(y){const E=new FileReader;E.onload=T=>{var I;if((I=T.target)!=null&&I.result){const A=T.target.result;e(A),o(null),r(null),m(""),d(100)}},E.readAsDataURL(y)}},b=async()=>{if(n){c(!0),m("");try{const w=await td(n);o(w),r(w)}catch(w){m(w instanceof Error?w.message:String(w))}finally{c(!1)}}},$=async w=>{const y=t;if(y){f(w),m("");try{const k=await pt(y,w);r(k)}catch(k){m(k instanceof Error?k.message:String(k))}finally{f(!1)}}},C=u||p,x=u?"កំពុងតម្រឹមផ្ទៃមុខ...":p?`កំពុងបង្កើនគុណភាពទៅ ${p}...`:"";return De`
        <div class="face-align-app">
            <input type="file" ref=${g} onChange=${v} accept="image/*" style=${{display:"none"}} />
            
            <div class="face-align-header">
                <h1>NHC PHOTOSHOP VIP PRO</h1>
                <p>បង្ហោះរូបថត ហើយ NHC PHOTOSHOP VIP PRO នឹងជួយអ្នកតម្រឹមផ្ទៃមុខឱ្យត្រង់។</p>
            </div>

            <div class="face-align-actions">
                <button class="btn btn-primary" onClick=${()=>{var w;return(w=g.current)==null?void 0:w.click()}}>ជ្រើសរើសរូបថត</button>
                <button class="btn btn-secondary" onClick=${b} disabled=${!n||C}>
                    ${u?"កំពុងដំណើរការ...":"តម្រឹមផ្ទៃមុខ"}
                </button>
            </div>

            ${h&&De`<${te} error=${h} />`}

            <div class="face-align-panels">
                <div class="image-panel-labeled">
                    <h3>រូបថតដើម</h3>
                    <div class="image-display-box">
                        ${n?De`
                            <img src=${n} alt="Original" />
                        `:De`
                            <div class="image-placeholder">
                                <${Ce} />
                                <span>ចុច "ជ្រើសរើសរូបថត" ដើម្បីចាប់ផ្តើម</span>
                            </div>
                        `}
                    </div>
                </div>

                <div class="image-panel-labeled">
                    <h3>រូបថតដែលបានតម្រឹម</h3>
                    <div class="image-display-box">
                        ${C&&De`<${H} text=${x} />`}
                        ${i?De`
                            <img src=${i} alt="Aligned" style=${{transform:`scale(${s/100})`}} />
                        `:De`
                            <div class="image-placeholder">
                                <${Ce} />
                                <span>លទ្ធផលនឹងបង្ហាញនៅទីនេះ</span>
                            </div>
                        `}
                    </div>
                    <div class="controls-panel">
                        <div class="slider-control zoom-control">
                            <div class="slider-label">
                                <span>ពង្រីក/បង្រួម៖</span>
                                <span class="value">${s}%</span>
                            </div>
                            <input 
                                type="range" 
                                min="100" 
                                max="400" 
                                value=${s} 
                                onInput=${w=>d(parseInt(w.currentTarget.value,10))}
                                disabled=${!i}
                            />
                        </div>
                        <${Y} baseImageUrl=${t} filename="aligned-image-8k.jpeg" class="btn-download" disabled=${!t||C}>
                            <${ht} /> ទាញយករូបថតកម្រិត 8K ច្បាស់ល្អ
                        </${Y}>
                        <button class="btn" onClick=${()=>$("4k")} disabled=${!t||C}>
                             ${p==="4k"?"កំពុងបង្កើនគុណភាព...":"មើលជាមុនកម្រិត 4K"}
                        </button>
                        <button class="btn" onClick=${()=>$("8k")} disabled=${!t||C}>
                             ${p==="8k"?"កំពុងបង្កើនគុណភាព...":"មើលជាមុនកម្រិត 8K"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Ie=G.bind(F),re={style:{title:"ជំហានទី ២៖ បន្ថែមស្ទីល",description:"ការណែនាំស្ទីល",placeholder:"ឧទាហរណ៍៖ អ្នកចម្បាំងម្នាក់ក្នុងឈុតក្រោះភ្លឺចែងចាំង...",options:["គំនូរឌីជីថល, បែបស្រមើស្រមៃ","ទីក្រុង Cyberpunk ភ្លើងណេអុង","អ្នកចម្បាំងបុរាណ, ឈុតក្រោះលម្អិត","អវកាសយានិកក្នុងលំហអាកាស","រូបថតបញ្ឈរស្ទីលគួរឱ្យចាប់អារម្មណ៍","គំនូរពណ៌ទឹកស្រស់ឆើតឆាយ","ស្ទីល Gothic និងអាថ៌កំបាំង","អ្នកបង្កើតថ្មីស្ទីល Steampunk","កំពូលវីរបុរស, ពន្លឺបែបភាពយន្ត","ស្ទីលតួអង្គ Anime","ស្នាដៃគំនូរប្រេង","តួអង្គតុក្កតា Pixar"]},context:{title:"ជំហានទី ៣៖ កំណត់បរិបទ",description:"ការណែនាំបរិបទ",placeholder:"ឧទាហរណ៍៖ ក្នុងបន្ទប់បញ្ជាយានអវកាស...",options:["ព្រៃដែលមានអ័ព្ទ","ទិដ្ឋភាពទីក្រុងនាពេលអនាគត","ប្រាសាទដែលមានមន្តអាគម","ឆ្នេរសមុទ្រដែលមានពន្លឺថ្ងៃ","កម្ទេចកម្ទីក្រោយសម័យសង្គ្រាម","បណ្ណាល័យដ៏កក់ក្តៅ","ទិដ្ឋភាពភពក្រៅដ៏ចម្លែក","ក្បូរក្បាច់ធរណីមាត្រអរូបី"]},cameraAngle:{title:"ជំហានទី ៤៖ កំណត់មុំកាមេរ៉ា",description:"ការណែនាំមុំកាមេរ៉ា",placeholder:"ឧទាហរណ៍៖ ថតពីក្រោមឡើងលើ...",options:["ជិត","ពេញតួ","មុំថតពីក្រោមឡើងលើ","មុំថតពីលើចុះក្រោម","មុំផ្អៀង","ប្លង់ទូលាយ","មើលពីចំហៀង","មុំថតឆ្លងស្មា"]},lighting:{title:"ជំហានទី ៥៖ ជ្រើសរើសពន្លឺ",description:"ការណែនាំពន្លឺ",placeholder:"ឧទាហរណ៍៖ ពន្លឺព្រះអាទិត្យពេលរសៀល...",options:["ពន្លឺបែបភាពយន្ត","ពន្លឺស្រទន់","ភ្លើងណេអុងស្រស់ឆើតឆាយ","ពន្លឺម៉ោងមាស (Golden hour)","ពន្លឺណេអុង","ពន្លឺស្ទូឌីយោ","ពន្លឺព្រះច័ន្ទអាថ៌កំបាំង","ពន្លឺផ្សែង"]}},wt=({title:n,description:e,options:t,selectedOptions:o,onOptionClick:i,customValue:r,onCustomChange:s,placeholder:d})=>Ie`
        <div class="control-step-card">
            <h3 class="form-section-title">${n}</h3>
            <div>
                <label class="form-section-label">${e}</label>
                <div class="control-step-options">
                    ${t.map(u=>Ie`
                        <button 
                            class="option-btn ${o.includes(u)?"active":""}"
                            onClick=${()=>i(u)}
                        >
                            ${u}
                        </button>
                    `)}
                </div>
            </div>
            <div>
                <label class="form-section-label">ឬបន្ថែមដោយខ្លួនឯង</label>
                <textarea
                    placeholder=${d}
                    value=${r}
                    onInput=${u=>s(u.currentTarget.value)}
                />
            </div>
        </div>
    `,Bu=()=>{const[n,e]=_(null),[t,o]=_(null),[i,r]=_(!1),[s,d]=_(""),[u,c]=_({style:[],customStyle:"",context:[],customContext:"",cameraAngle:[],customCameraAngle:"",lighting:[],customLighting:"",aspectRatio:"1:1",referenceImage:null}),p=(g,v)=>{c(b=>{const $=b[g];if(!Array.isArray($))return b;const C=$.includes(v)?$.filter(x=>x!==v):[...$,v];return{...b,[g]:C}})},f=(g,v)=>{c(b=>({...b,[g]:v}))},h=async()=>{if(!n){d("សូមបង្ហោះរូបថតបញ្ឈរជាមុនសិន។");return}r(!0),d(""),o(null);const{style:g,customStyle:v,context:b,customContext:$,cameraAngle:C,customCameraAngle:x,lighting:w,customLighting:y,aspectRatio:k,referenceImage:E}=u,T=["Generate a photorealistic, high-detail image.","CRITICAL: The main subject's face, identity, and core features must be an EXACT match to the person in the provided reference photo."];k&&T.push(`The final image must have a ${k} aspect ratio.`);const I=[...g,v].filter(Boolean).join(", ");I&&T.push(`The artistic style is: ${I}.`);const A=[...b,$].filter(Boolean).join(", ");A&&T.push(`The setting and background is: ${A}.`);const S=[...C,x].filter(Boolean).join(", ");S&&T.push(`The camera shot is a ${S}.`);const P=[...w,y].filter(Boolean).join(", ");P&&T.push(`The scene is lit with ${P}.`),E&&T.push("Use the second provided image as a visual reference for the style, colors, and overall mood of the final output.");const M=T.join(" ");try{const O=await X(M,n,E?[E]:void 0);o(O);const be=ie.find(Ve=>Ve.id==="face-transform");await pe({original:n,generated:O,feature:"face-transform",featureLabel:(be==null?void 0:be.label)||"AI ប្តូរផ្ទៃមុខ"})}catch(L){d(L instanceof Error?L.message:"មានកំហុសមិនស្គាល់បានកើតឡើង។")}finally{r(!1)}},m=[{label:"ការ៉េ (1:1)",value:"1:1"},{label:"អេក្រង់ទូលាយ (16:9)",value:"16:9"},{label:"បញ្ឈរ (9:16)",value:"9:16"},{label:"ផ្ដេក (4:3)",value:"4:3"},{label:"ខ្ពស់ (3:4)",value:"3:4"}];return Ie`
        <div class="page-header" style=${{textAlign:"center",maxWidth:"800px",margin:"0 auto 2rem auto"}}>
            <h1>AI ប្តូរផ្ទៃមុខ</h1>
            <p class="subtitle">បង្កើតរូបភាពថ្មីៗដ៏ស្រស់ស្អាតដោយការបញ្ចូលផ្ទៃមុខរបស់អ្នកជាមួយគំនិតច្នៃប្រឌិត។</p>
        </div>
        <div class="face-transform-layout">
            <div class="face-transform-controls">
                <${wt}
                    title=${re.style.title}
                    description=${re.style.description}
                    options=${re.style.options}
                    selectedOptions=${u.style}
                    onOptionClick=${g=>p("style",g)}
                    customValue=${u.customStyle}
                    onCustomChange=${g=>f("customStyle",g)}
                    placeholder=${re.style.placeholder}
                />
                <${wt}
                    title=${re.context.title}
                    description=${re.context.description}
                    options=${re.context.options}
                    selectedOptions=${u.context}
                    onOptionClick=${g=>p("context",g)}
                    customValue=${u.customContext}
                    onCustomChange=${g=>f("customContext",g)}
                    placeholder=${re.context.placeholder}
                />
                <${wt}
                    title=${re.cameraAngle.title}
                    description=${re.cameraAngle.description}
                    options=${re.cameraAngle.options}
                    selectedOptions=${u.cameraAngle}
                    onOptionClick=${g=>p("cameraAngle",g)}
                    customValue=${u.customCameraAngle}
                    onCustomChange=${g=>f("customCameraAngle",g)}
                    placeholder=${re.cameraAngle.placeholder}
                />
                <${wt}
                    title=${re.lighting.title}
                    description=${re.lighting.description}
                    options=${re.lighting.options}
                    selectedOptions=${u.lighting}
                    onOptionClick=${g=>p("lighting",g)}
                    customValue=${u.customLighting}
                    onCustomChange=${g=>f("customLighting",g)}
                    placeholder=${re.lighting.placeholder}
                />

                <div class="control-step-card">
                    <h3 class="form-section-title">ជំហានទី ៦៖ ជ្រើសរើសសមាមាត្រ</h3>
                    <div class="aspect-ratio-options">
                        ${m.map(g=>Ie`
                            <button 
                                class="option-btn ${u.aspectRatio===g.value?"active":""}"
                                onClick=${()=>c(v=>({...v,aspectRatio:g.value}))}
                            >
                                ${g.label}
                            </button>
                        `)}
                    </div>
                </div>

                <button 
                    class="btn btn-primary generate-btn" 
                    onClick=${h} 
                    disabled=${i||!n}
                >
                    ${i?"កំពុងបង្កើត...":"បង្កើតរូបភាព"}
                </button>
                ${s&&Ie`<${te} error=${s} />`}
            </div>

            <div class="face-transform-preview">
                <div class="preview-card">
                    <h3 class="form-section-title">១. រូបថតបញ្ឈររបស់អ្នក</h3>
                    <${ne} 
                        onImageUpload=${g=>e(g)} 
                        id="face-transform-uploader"
                    />
                </div>

                <div class="preview-card">
                    <h3 class="form-section-title">២. រូបថតគំរូស្ទីល (ជម្រើស)</h3>
                    <${ne} 
                        onImageUpload=${g=>c(v=>({...v,referenceImage:g}))} 
                        id="face-transform-reference-uploader"
                    />
                </div>

                <div class="preview-card">
                    <h3 class="form-section-title">លទ្ធផល</h3>
                    <div class="result-display">
                        ${i&&Ie`<${H} text="AI កំពុងបង្កើតរូបភាព..." />`}
                        ${t?Ie`
                            <div class="result-image-container">
                                <img src=${t} alt="Generated" />
                                <div class="result-actions">
                                    <${Y} baseImageUrl=${t} filename="face-transform-8k.jpeg">
                                        <${ht} /> ទាញយកកម្រិត 8K
                                    </${Y}>
                                </div>
                            </div>
                        `:Ie`
                            <div class="result-placeholder">
                                <${Ce} />
                                <p>រូបភាពដែលបានបង្កើតនឹងបង្ហាញនៅទីនេះ</p>
                            </div>
                        `}
                    </div>
                </div>
            </div>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Oe=G.bind(F),Hu=()=>{const[n,e]=_(null),[t,o]=_(""),[i,r]=_(!1),[s,d]=_(""),[u,c]=_(!1),p=async h=>{e(h),r(!0),d(""),o(""),c(!1);try{const m=await od(h);o(m)}catch(m){d(m instanceof Error?m.message:"មានកំហុសមិនស្គាល់បានកើតឡើង។")}finally{r(!1)}},f=()=>{t&&(navigator.clipboard.writeText(t),c(!0),setTimeout(()=>c(!1),2e3))};return Oe`
        <div class="page-header" style=${{textAlign:"center",maxWidth:"800px",margin:"0 auto 2rem auto"}}>
            <h1>រូបភាពទៅជា Prompt (Image to Prompt)</h1>
            <p class="subtitle">បំប្លែងរូបភាពរបស់អ្នកទៅជា Prompt លម្អិត ដើម្បីប្រើប្រាស់ក្នុងការបង្កើតរូបភាពថ្មីៗ។</p>
        </div>

        <div class="editor-layout">
            <div class="settings-panel">
                <div class="form-section">
                    <h3 class="form-section-title">១. បង្ហោះរូបភាពរបស់អ្នក</h3>
                    <${ne} 
                        onImageUpload=${p} 
                        id="image-to-prompt-uploader"
                    />
                </div>
                
                ${s&&Oe`<${te} error=${s} />`}
                
                <div class="form-section" style=${{marginTop:"2rem"}}>
                    <h3 class="form-section-title">២. របៀបប្រើប្រាស់</h3>
                    <ul class="guide-list" style=${{fontSize:"0.9rem",color:"var(--text-secondary)",paddingLeft:"1.2rem"}}>
                        <li>បង្ហោះរូបភាពដែលអ្នកចង់បាន Prompt។</li>
                        <li>រង់ចាំ AI វិភាគ និងបង្កើត Prompt។</li>
                        <li>ចម្លង Prompt ដែលទទួលបាន។</li>
                        <li>យកទៅប្រើប្រាស់ក្នុងមុខងារ "AI ប្តូរផ្ទៃមុខ" ឬ "Trend Creator"។</li>
                    </ul>
                </div>
            </div>

            <div class="image-panel">
                <div class="image-panel-preview">
                    ${i&&Oe`<${H} text="AI កំពុងវិភាគរូបភាព..." />`}
                    
                    ${t?Oe`
                        <div class="prompt-result-card">
                            <div class="prompt-header">
                                <h3 class="form-section-title">អត្ថបទណែនាំដែលបានបង្កើត</h3>
                                <button class="btn btn-secondary btn-sm" onClick=${f}>
                                    <${Md} /> ${u?"បានចម្លង!":"ចម្លង"}
                                </button>
                            </div>
                            <div class="prompt-content">
                                ${t}
                            </div>
                        </div>
                    `:Oe`
                        <div class="image-panel-content">
                            <${Ce} class="placeholder-icon"/>
                            <h4>លទ្ធផលនឹងបង្ហាញនៅទីនេះ</h4>
                            <p class="placeholder-text">បង្ហោះរូបភាពដើម្បីទទួលបានអត្ថបទណែនាំលម្អិត។</p>
                        </div>
                    `}

                    ${n&&!i&&Oe`
                        <div class="uploaded-reference-preview" style=${{marginTop:"2rem"}}>
                            <h3 class="form-section-title">រូបភាពដើម</h3>
                            <img src=${n} style=${{maxWidth:"100%",borderRadius:"8px",border:"1px solid var(--border-color)"}} />
                        </div>
                    `}
                </div>
            </div>
        </div>

        <style>
            .prompt-result-card {
                background: var(--card-bg);
                border: 1px solid var(--border-color);
                border-radius: 12px;
                padding: 1.5rem;
                width: 100%;
                box-shadow: var(--shadow-sm);
            }
            .prompt-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
            }
            .prompt-content {
                font-family: var(--font-mono);
                font-size: 0.95rem;
                line-height: 1.6;
                color: var(--text-primary);
                white-space: pre-wrap;
                background: var(--background);
                padding: 1rem;
                border-radius: 8px;
                border: 1px solid var(--border-color);
                max-height: 400px;
                overflow-y: auto;
            }
            .guide-list li {
                margin-bottom: 0.5rem;
            }
        </style>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const at=G.bind(F),qu=()=>{const[n,e]=_({targetArea:"face",processMode:"single"}),[t,o]=_(null),[i,r]=_(null),[s,d]=_(!1),[u,c]=_("");ve(()=>{t&&n.processMode==="single"&&f()},[t,n.targetArea]);const p=h=>{o(h),r(null),c("")},f=async()=>{if(t){d(!0),c("");try{const h=await nd(t,n);r(h);const m=ie.find(g=>g.id==="wrinkle-editor");await pe({original:t,generated:h,feature:"wrinkle-editor",featureLabel:(m==null?void 0:m.label)||"កែសម្រួលស្នាមជ្រួញ AI"})}catch(h){c(h instanceof Error?h.message:"An unknown error occurred.")}finally{d(!1)}}};return at`
        <div class="wrinkle-editor-container">
            <h1>កែសម្រួលស្នាមជ្រួញ AI</h1>
            <p class="subtitle">បង្ហោះរូបភាព ហើយអនុញ្ញាតឱ្យ AI បំបាត់ស្នាមជ្រួញលើផ្ទៃមុខ ឬសម្លៀកបំពាក់។</p>
            
            <div class="form-group">
                <label class="form-section-label">តើអ្នកចង់លុបស្នាមជ្រួញនៅឯណា?</label>
                 <div class="pill-toggle-group">
                    <button 
                        class="pill-toggle-btn ${n.targetArea==="face"?"active":""}"
                        onClick=${()=>e(h=>({...h,targetArea:"face"}))}
                    >លើផ្ទៃមុខ</button>
                    <button 
                        class="pill-toggle-btn ${n.targetArea==="clothes"?"active":""}"
                        onClick=${()=>e(h=>({...h,targetArea:"clothes"}))}
                    >លើសម្លៀកបំពាក់</button>
                </div>
            </div>

             <div class="form-group">
                <div class="pill-toggle-group secondary">
                    <button 
                        class="pill-toggle-btn ${n.processMode==="single"?"active":""}"
                        onClick=${()=>e(h=>({...h,processMode:"single"}))}
                    >រូបភាពមួយ</button>
                    <button 
                        class="pill-toggle-btn ${n.processMode==="batch"?"active":""}"
                        onClick=${()=>{alert("ដំណើរការជាក្រុមនឹងមកដល់ឆាប់ៗនេះ!")}}
                    >ដំណើរការជាក្រុម</button>
                </div>
            </div>

            <div class="wrinkle-upload-area">
                ${t?at`
                    <div class="image-panel-preview">
                        ${s&&at`<${H} text="AI កំពុងដំណើរការស្នាមជ្រួញ..." />`}
                        <div class="image-display-wrapper">
                            <${se} original=${t} generated=${i} objectFit="contain" />
                        </div>
                        ${u&&at`<${te} error=${u} />`}
                        <div class="actions" style=${{width:"100%",marginTop:"1.5rem"}}>
                            <button class="btn btn-secondary" onClick=${()=>p(null)}>បង្ហោះរូបភាពផ្សេងទៀត</button>
                            <${Y} baseImageUrl=${i} filename="wrinkle-free-8k.jpeg">
                                <${ht} /> ទាញយកកម្រិត 8K ច្បាស់ល្អ
                            </${Y}>
                        </div>
                    </div>
                `:at`
                    <${ne} 
                        onImageUpload=${h=>p(h)} 
                        id="wrinkle-uploader" 
                    />
                `}
            </div>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Le=G.bind(F),zu=({item:n,onClose:e})=>Le`
        <div class="lightbox-overlay" onClick=${e}>
            <div class="lightbox-content" onClick=${t=>t.stopPropagation()} style=${{width:"90vw",height:"90vh",maxWidth:"1600px"}}>
                <div class="lightbox-header">
                    <h3>ប្រៀបធៀប - ${n.featureLabel}</h3>
                    <div class="lightbox-actions">
                         <${Y} baseImageUrl=${n.generated} filename=${`${n.feature}-${n.id}-8k.jpeg`}>
                            <${ht} /> ទាញយកកម្រិត 8K ច្បាស់ល្អ
                        </${Y}>
                        <button class="lightbox-close-btn" onClick=${e} title="Close">
                            <${ye} />
                        </button>
                    </div>
                </div>
                <div class="lightbox-image-wrapper-single">
                    <${se} original=${n.original} generated=${n.generated} objectFit="contain" />
                </div>
            </div>
        </div>
    `,Ou=()=>{const[n,e]=_([]),[t,o]=_(null);ve(()=>{e(Tn())},[]);const i=(d,u)=>{d.stopPropagation(),Zd(u),e(c=>c.filter(p=>p.id!==u))},r=()=>{window.confirm("តើអ្នកប្រាកដថាចង់លុបប្រវត្តិទាំងអស់មែនទេ? សកម្មភាពនេះមិនអាចត្រឡប់ក្រោយវិញបានទេ។")&&(jd(),e([]))},s=d=>new Date(d).toLocaleString("km-KH",{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit",year:"numeric"});return Le`
        ${t&&Le`<${zu} item=${t} onClose=${()=>o(null)} />`}
        <div class="history-app-container">
            <div class="history-header">
                <h1>ប្រវត្តិកែសម្រួល</h1>
                ${n.length>0&&Le`
                    <button class="btn btn-danger" onClick=${r}>
                        <${We} /> លុបទាំងអស់
                    </button>
                `}
            </div>
            
            ${n.length===0?Le`
                <div class="history-empty-state">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.75-1.23-3.5-2.07V8H12z"/></svg>
                    <h3>មិនទាន់មានប្រវត្តិ</h3>
                    <p>ចាប់ផ្តើមកែសម្រួលដើម្បីមើលលទ្ធផលរបស់អ្នកនៅទីនេះ។</p>
                </div>
            `:Le`
                <div class="history-grid">
                    ${n.map(d=>Le`
                        <div class="history-card" key=${d.id} onClick=${()=>o(d)}>
                            <img src=${d.generated} alt="Generated image" />
                            <div class="history-card-overlay">
                                <div class="history-card-feature">${d.featureLabel}</div>
                                <div class="history-card-date">${s(d.timestamp)}</div>
                            </div>
                             <button class="history-card-delete-btn" onClick=${u=>i(u,d.id)}>
                                <${We} />
                            </button>
                        </div>
                    `)}
                </div>
            `}
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Qo=G.bind(F),Ku=({onActivate:n,error:e})=>{const[t,o]=_(""),[i,r]=_(""),[s,d]=_(!1),u=async c=>{c.preventDefault(),d(!0);try{await n(t,i)}catch{}finally{d(!1)}};return Qo`
        <div class="login-container">
            <div class="login-form">
                <div class="login-icon-wrapper">
                    <div class="login-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                            <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                        </svg>
                    </div>
                </div>
                <h2 class="login-title">ធ្វើឱ្យឧបករណ៍ដំណើរការ</h2>
                <h3 class="login-subtitle">
                    <span class="text-gradient-animated">បង បារាំងបោះពុម្ព</span>
                </h3>
                <p class="login-desc">សូមបញ្ចូល Gmail និងលេខកូដអាជ្ញាប័ណ្ណ (License Key) ដើម្បីចាប់ផ្តើមប្រើប្រាស់មុខងារ AI កម្រិតអាជីព។</p>
                ${e&&Qo`<div class="error-message" style=${{marginBottom:"1.5rem"}}>${e}</div>`}
                <form onSubmit=${u}>
                    <div class="form-group" style=${{marginBottom:"1.2rem"}}>
                        <label for="email">អាសយដ្ឋាន Gmail</label>
                        <input 
                            type="email" 
                            id="email" 
                            value=${t} 
                            onInput=${c=>o(c.currentTarget.value)} 
                            required
                            placeholder="example@gmail.com"
                        />
                    </div>
                    <div class="form-group" style=${{marginBottom:"1.5rem"}}>
                        <label for="activation-key">លេខកូដអាជ្ញាប័ណ្ណ</label>
                        <input 
                            type="password" 
                            id="activation-key" 
                            value=${i} 
                            onInput=${c=>r(c.currentTarget.value)} 
                            required
                            placeholder="បញ្ចូល Key របស់អ្នកនៅទីនេះ..."
                        />
                    </div>
                    <button type="submit" class="btn btn-primary login-btn" disabled=${s}>
                        ${s?"កំពុងពិនិត្យ...":"ធ្វើឱ្យដំណើរការ (Activate)"}
                    </button>
                    
                    <div class="login-divider"></div>
                    
                    <div class="login-footer-text">
                        មិនទាន់មាន Key? សូមទាក់ទងមកកាន់យើងខ្ញុំ
                    </div>
                    <a href="https://t.me/bongbarang168" target="_blank" class="btn-telegram">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.29-.48.79-.74 3.08-1.34 5.15-2.23 6.19-2.66 2.95-1.23 3.56-1.45 3.96-1.46.09 0 .28.02.39.11.09.08.11.2.12.3z"/>
                        </svg>
                        <span>ទាក់ទង Admin តាម Telegram</span>
                    </a>
                </form>
            </div>
        </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */G.bind(F);/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const le=G.bind(F),Di=({settings:n,setSettings:e,onGenerate:t,generating:o,hasImage:i})=>{const[r,s]=_(!1),d=()=>{if(!("webkitSpeechRecognition"in window)){alert("កម្មវិធីរុករកមិនគាំទ្រការបញ្ចូលសំឡេងទេ។");return}const c=new window.webkitSpeechRecognition;c.lang="vi-VN",c.onstart=()=>s(!0),c.onend=()=>s(!1),c.onresult=p=>{const f=p.results[0][0].transcript;e(h=>({...h,customPrompt:h.customPrompt?`${h.customPrompt} ${f}`:f}))},r?c.stop():c.start()},u=de(()=>i&&(n.removeObjects||n.evenColor||n.denoise||n.sharpen||n.customPrompt.trim()!==""),[i,n.removeObjects,n.evenColor,n.denoise,n.sharpen,n.customPrompt]);return le`
        <div class="settings-panel">
            <div class="form-group">
                <label>ឧបករណ៍កែសម្រួលអាជីព</label>
                <div class="checkbox-group">
                    <label>
                        <input type="checkbox" checked=${n.removeObjects} onChange=${c=>e(p=>({...p,removeObjects:c.currentTarget.checked}))}/>
                        លុបព័ត៌មានលម្អិតដែលមិនចាំបាច់
                    </label>
                    <label>
                        <input type="checkbox" checked=${n.evenColor} onChange=${c=>e(p=>({...p,evenColor:c.currentTarget.checked}))}/>
                        ធ្វើឱ្យពណ៌ផ្ទៃខាងក្រោយស្មើគ្នា
                    </label>
                    <label>
                        <input type="checkbox" checked=${n.denoise} onChange=${c=>e(p=>({...p,denoise:c.currentTarget.checked}))}/>
                        កាត់បន្ថយ Noise/គ្រាប់ល្អិត
                    </label>
                    <label>
                        <input type="checkbox" checked=${n.sharpen} onChange=${c=>e(p=>({...p,sharpen:c.currentTarget.checked}))}/>
                        បង្កើនភាពច្បាស់នៃផ្ទៃខាងក្រោយ
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label for="clean-bg-prompt">ការកែសម្រួលបន្ថែម</label>
                <div class="voice-input-container">
                    <textarea 
                        id="clean-bg-prompt" 
                        placeholder="ឧទាហរណ៍៖ ធ្វើឱ្យពណ៌ខៀវនៃផ្ទៃខាងក្រោយដិតជាងមុនបន្តិច..."
                        value=${n.customPrompt}
                        onInput=${c=>e(p=>({...p,customPrompt:c.currentTarget.value}))}
                    ></textarea>
                    <button class="voice-btn ${r?"recording":""}" onClick=${d} title="បញ្ចូលតាមរយៈសំឡេង">
                        <${ft} recording=${r} />
                    </button>
                </div>
            </div>
            
            <button class="btn btn-primary" onClick=${t} disabled=${o||!u} style=${{width:"100%"}}>
                ${o?"កំពុងដំណើរការ...":"សម្អាតផ្ទៃខាងក្រោយ"}
            </button>
        </div>
    `},Ju=({settings:n,setSettings:e,onGenerate:t,generating:o,hasImage:i,onCancel:r})=>{const s=p=>{e(f=>({...f,[p]:!f[p]}))},d=(p,f)=>{e(h=>({...h,[p]:parseInt(f,10)}))},u=({label:p,settingKey:f,beta:h=!1})=>le`
        <div class="switch-group">
            <label>${p} ${h&&le`<span class="beta-tag">Beta</span>`}</label>
            <label class="switch">
                <input type="checkbox" checked=${n[f]} onChange=${()=>s(f)} disabled=${!n.allFilters} />
                <span class="slider-switch"></span>
            </label>
        </div>
    `,c=({label:p,settingKey:f,min:h,max:m})=>le`
        <div class="slider-control">
            <div class="slider-label">
                <span>${p}</span>
                <span class="value">${n[f]}</span>
            </div>
            <input type="range" min=${h} max=${m} value=${n[f]} onInput=${g=>d(f,g.currentTarget.value)} disabled=${!n.allFilters} />
        </div>
    `;return le`
        <div class="settings-panel">
            <h3 class="form-section-title" style=${{marginBottom:"1rem",border:"none",padding:0}}>តម្រងរូបភាព</h3>
            
            <${u} label="តម្រងទាំងអស់" settingKey="allFilters" />

            <div class="form-section" style=${{opacity:n.allFilters?1:.5,transition:"opacity 0.3s",display:"flex",flexDirection:"column",gap:"1rem"}}>
                <h4 class="form-section-title">រូបបញ្ឈរ</h4>
                <${u} label="ធ្វើឱ្យស្បែករលោង" settingKey="smoothSkin" />
                <${u} label="រូបបញ្ឈរឆ្លាតវៃ" settingKey="smartPortrait" />
                <${u} label="ផ្លាស់ប្តូរការតុបតែងមុខ" settingKey="makeupTransfer" />

                <h4 class="form-section-title">ការច្នៃប្រឌិត</h4>
                <${u} label="ផ្លាស់ប្តូរស្ទីល" settingKey="styleTransfer" beta=${!0} />

                <h4 class="form-section-title">ពណ៌</h4>
                <${u} label="ដាក់ពណ៌" settingKey="colorize" beta=${!0} />
                
                <h4 class="form-section-title">ការថតរូប</h4>
                <${u} label="ការពង្រីកកម្រិតខ្ពស់" settingKey="superResolution" />

                <h4 class="form-section-title">ការស្តារឡើងវិញ</h4>
                <${u} label="លុប Noise JPEG" settingKey="removeJpegArtifacts" />
                <${u} label="កាត់បន្ថយ Noise គ្រាប់ល្អិត" settingKey="denoise" />

                <div class="slider-group" style=${{marginTop:"1.5rem"}}>
                    <${c} label="សប្បាយរីករាយ" settingKey="happiness" min="-100" max="100" />
                    <${c} label="ភ្ញាក់ផ្អើល" settingKey="surprise" min="-100" max="100" />
                    <${c} label="ខឹងសម្បារ" settingKey="anger" min="-100" max="100" />
                    <${c} label="អាយុ" settingKey="age" min="-50" max="50" />
                    <${c} label="កម្រាស់សក់" settingKey="hairThickness" min="0" max="100" />
                </div>

                <div class="form-group" style=${{marginTop:"1.5rem"}}>
                    <label for="num-results-filter">ចំនួនរូបភាពលទ្ធផល</label>
                    <select id="num-results-filter" value=${n.numResults} onChange=${p=>e(f=>({...f,numResults:parseInt(p.currentTarget.value,10)}))} disabled=${!n.allFilters}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            </div>

            <div class="form-group-row" style=${{marginTop:"auto",paddingTop:"1rem"}}>
                <button class="btn btn-secondary" style=${{flex:1}} onClick=${r}>បោះបង់</button>
                <button class="btn btn-primary" style=${{flex:1}} onClick=${t} disabled=${o||!i}>យល់ព្រម</button>
            </div>
        </div>
    `},Wu=({settings:n,setSettings:e,onGenerate:t,generating:o})=>{const i=(u,c)=>{if(u){const p=new FileReader;p.onload=f=>{var h;(h=f.target)!=null&&h.result&&e(m=>({...m,[c]:f.target.result}))},p.readAsDataURL(u)}},r=u=>{e(c=>{const p=c.selectedConcepts,f=p.includes(u)?p.filter(h=>h!==u):[...p,u];return{...c,selectedConcepts:f}})},s=de(()=>!!n.brideImage&&!!n.groomImage&&n.selectedConcepts.length>0,[n.brideImage,n.groomImage,n.selectedConcepts]),d=()=>le`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>`;return le`
        <div class="settings-panel wedding-settings-panel">
            <div class="form-section">
                <h3 class="form-section-title">១. បង្ហោះរូបថតបញ្ឈរ</h3>
                <p style=${{color:"var(--text-secondary)",fontSize:"0.9rem",marginBottom:"1rem"}}>បង្ហោះរូបថតដែលបង្ហាញមុខច្បាស់ និងមានពន្លឺគ្រប់គ្រាន់របស់កូនក្រមុំ និងកូនកំលោះ។</p>
                <div class="portrait-uploaders">
                    <div class="portrait-uploader">
                        <h4>រូបថតកូនក្រមុំ</h4>
                        <div class="portrait-preview-wrapper" onClick=${()=>{var u;return(u=document.getElementById("bride-input"))==null?void 0:u.click()}}>
                            ${n.brideImage?le`<img src=${n.brideImage} />`:le`<${J} class="upload-icon" />`}
                        </div>
                        <input type="file" id="bride-input" accept="image/*" style=${{display:"none"}} onChange=${u=>{var c;return i((c=u.currentTarget.files)==null?void 0:c[0],"brideImage")}} />
                        <button class="btn portrait-upload-btn" onClick=${()=>{var u;return(u=document.getElementById("bride-input"))==null?void 0:u.click()}}>↑ ជ្រើសរើសឯកសារ</button>
                    </div>
                     <div class="portrait-uploader">
                        <h4>រូបថតកូនកំលោះ</h4>
                        <div class="portrait-preview-wrapper" onClick=${()=>{var u;return(u=document.getElementById("groom-input"))==null?void 0:u.click()}}>
                             ${n.groomImage?le`<img src=${n.groomImage} />`:le`<${J} class="upload-icon" />`}
                        </div>
                         <input type="file" id="groom-input" accept="image/*" style=${{display:"none"}} onChange=${u=>{var c;return i((c=u.currentTarget.files)==null?void 0:c[0],"groomImage")}} />
                        <button class="btn portrait-upload-btn" onClick=${()=>{var u;return(u=document.getElementById("groom-input"))==null?void 0:u.click()}}>↑ ជ្រើសរើសឯកសារ</button>
                    </div>
                </div>
                 <div class="wedding-note" style=${{marginTop:"1rem"}}>
                    <strong>សម្គាល់៖</strong> AI នឹងព្យាយាមឱ្យអស់ពីសមត្ថភាពដើម្បីរក្សាទម្រង់មុខដើមពីរូបថតដែលអ្នកបានបង្ហោះ ដោយគ្រាន់តែផ្លាស់ប្តូរសម្លៀកបំពាក់ និងទិដ្ឋភាពប៉ុណ្ណោះ។
                </div>
            </div>
            <div class="form-section">
                <h3 class="form-section-title">២. ជ្រើសរើស Concept រូបថតអាពាហ៍ពិពាហ៍</h3>
                <p style=${{color:"var(--text-secondary)",fontSize:"0.9rem"}}>អ្នកអាចជ្រើសរើស Concept មួយ ឬច្រើនដើម្បីបង្កើតរូបថតក្នុងពេលតែមួយ។</p>
                <p style=${{color:"var(--wedding-gold)",fontSize:"0.9rem",marginBottom:"1rem"}}>★ AI ណែនាំ Concept មួយចំនួនដែលសមស្របសម្រាប់អ្នក!</p>
                <div class="concept-grid">
                    ${gn.map(u=>le`
                        <button 
                            class="concept-btn ${n.selectedConcepts.includes(u.id)?"active":""}"
                            onClick=${()=>r(u.id)}
                        >
                            <span class="concept-checkbox"><${d} /></span>
                            <span class="concept-label">${u.label} ${u.recommended&&le`<span class="star">★</span>`}</span>
                        </button>
                    `)}
                </div>
            </div>
            <div class="form-section">
                <h3 class="form-section-title">៣. ការពិពណ៌នាបន្ថែម (ជម្រើស)</h3>
                <p style=${{color:"var(--text-secondary)",fontSize:"0.9rem",marginBottom:"1rem"}}>បន្ថែមព័ត៌មានលម្អិតដែលអ្នកចង់បាន ឧទាហរណ៍៖ "កូនក្រមុំស្លៀករ៉ូបអាពាហ៍ពិពាហ៍ពណ៌ផ្កាឈូក" ឬ "កូនកំលោះមិនពាក់វ៉ែនតា"។</p>
                <textarea
                    placeholder="បញ្ចូលការពិពណ៌នារបស់អ្នកនៅទីនេះ..."
                    value=${n.customPrompt}
                    onInput=${u=>e(c=>({...c,customPrompt:u.currentTarget.value}))}
                    rows="3"
                ></textarea>
            </div>
            <button class="btn wedding-generate-btn" onClick=${t} disabled=${o||!s}>
                ${o?"កំពុងបង្កើតរូបថត...":`បង្កើតរូបថត (${n.selectedConcepts.length} Concept) →`}
            </button>
        </div>
    `},Yu=({settings:n,setSettings:e,onGenerate:t,generating:o,hasImage:i})=>{const r=d=>{e(u=>{const c=u.selectedConcepts.includes(d)?u.selectedConcepts.filter(p=>p!==d):[...u.selectedConcepts,d];return{...u,selectedConcepts:c}})},s=de(()=>i&&(n.selectedConcepts.length>0||n.customPrompt.trim()!==""),[i,n.selectedConcepts,n.customPrompt]);return le`
        <div class="form-section">
            <h3 class="form-section-title">២. ជ្រើសរើស Concept មួយ ឬច្រើន</h3>
            <div class="birthday-concept-grid">
                ${xi.map(d=>le`
                    <button
                        key=${d.id}
                        class="birthday-concept-btn ${n.selectedConcepts.includes(d.id)?"active":""}"
                        onClick=${()=>r(d.id)}
                    >
                        ${d.label}
                    </button>
                `)}
            </div>
        </div>

        <div class="form-group">
            <label for="custom-prompt-birthday">បញ្ចូល Concept ដែលអ្នកចង់បាន</label>
            <textarea
                id="custom-prompt-birthday"
                placeholder="ឧទាហរណ៍៖ បង្កើតរូបថតបែប Vintage ទសវត្សរ៍ឆ្នាំ 90..."
                value=${n.customPrompt}
                onInput=${d=>e(u=>({...u,customPrompt:d.currentTarget.value}))}
            ></textarea>
        </div>

        <div class="slider-control">
            <div class="slider-label">
                <span>ចំនួនរូបថតដែលចង់បង្កើត៖</span>
                <span class="value">${n.numImages}</span>
            </div>
            <input
                type="range"
                min="1"
                max="4"
                value=${n.numImages}
                onInput=${d=>e(u=>({...u,numImages:parseInt(d.currentTarget.value,10)}))}
            />
        </div>
        
        <button
            class="btn btn-primary"
            onClick=${t}
            disabled=${o||!s}
            style=${{width:"100%",marginTop:"1.5rem",padding:"0.85rem"}}
        >
            ${o?"កំពុងបង្កើត...":"បង្កើតរូបថតខួបកំណើត"}
        </button>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const D=G.bind(F),Qu=()=>{const[n,e]=_(null),[t,o]=_(null),[i,r]=_(!1),[s,d]=_(""),[u,c]=_({removeObjects:!0,evenColor:!0,denoise:!1,sharpen:!1,customPrompt:""}),p=async()=>{if(n){r(!0),d("");try{const h=await hn(n,u);o(h);const m=ie.find(g=>g.id==="clean-background");await pe({original:n,generated:h,feature:"clean-background",featureLabel:(m==null?void 0:m.label)||"សម្អាតផ្ទៃខាងក្រោយ"})}catch(h){h instanceof Error?d(h.message):d(String(h))}finally{r(!1)}}},f=h=>{e(h),o(null),d("")};return D`
        <div class="editor-layout">
            <${Di} settings=${u} setSettings=${c} onGenerate=${p} generating=${i} hasImage=${!!n} />
            <div class="image-panel">
                ${n?D`
                    <div class="image-panel-preview">
                        ${i&&D`<${H} text="AI កំពុងសម្អាតផ្ទៃខាងក្រោយ..." />`}
                        <div class="image-display-wrapper">
                            <${se} original=${n} generated=${t} objectFit="contain" />
                            <${he}
                                generatedImage=${t}
                                filename="clean-background.jpeg"
                                onReset=${()=>f(null)}
                                isGenerating=${i}
                            />
                        </div>
                        ${s&&D`<div class="error-message">${s}</div>`}
                    </div>
                `:D`
                    <${ne} onImageUpload=${h=>f(h)} />
                `}
            </div>
        </div>
    `},Xu=()=>{const[n,e]=_([]),[t,o]=_({removeObjects:!0,evenColor:!0,denoise:!1,sharpen:!1,customPrompt:""}),[i,r]=_(!1),[s,d]=_(0),[u,c]=_(""),[p,f]=_(!1),h=y=>{if(!y.currentTarget.files)return;const E=Array.from(y.currentTarget.files).map(T=>({id:Date.now()+Math.random(),file:T,original:URL.createObjectURL(T),generated:null,status:"pending"}));e(T=>[...T,...E])},m=y=>new Promise((k,E)=>{const T=new FileReader;T.onload=()=>k(T.result),T.onerror=E,T.readAsDataURL(y)}),g=async(y,k,E)=>{let T=0;const I=[...y],A=async()=>{for(;I.length>0;){const P=I.shift();P&&(await E(P),T++,d(Math.round(T/y.length*100)),I.length>0&&await new Promise(M=>setTimeout(M,2e3)))}},S=Array(k).fill(null).map(()=>A());await Promise.all(S)},v=async()=>{r(!0),d(0),c("");const y=n.filter(E=>E.status==="pending"||E.status==="error"),k=async E=>{e(T=>T.map(I=>I.id===E.id?{...I,status:"processing"}:I));try{const T=await m(E.file),I=await hn(T,t);e(S=>S.map(P=>P.id===E.id?{...P,generated:I,status:"done"}:P));const A=ie.find(S=>S.id==="clean-background");await pe({original:T,generated:I,feature:"clean-background",featureLabel:(A==null?void 0:A.label)||"សម្អាតផ្ទៃខាងក្រោយ"})}catch(T){throw T instanceof Error?c(T.message):c(String(T)),e(I=>I.map(A=>A.id===E.id?{...A,status:"error"}:A)),T}};try{await g(y,1,k)}catch(E){console.error("Batch processing stopped due to an error.",E)}finally{r(!1)}},b=async y=>{const k=n.find(E=>E.id===y);if(k){e(E=>E.map(T=>T.id===y?{...T,status:"processing"}:T)),c("");try{const E=await m(k.file),T=await hn(E,t);e(A=>A.map(S=>S.id===y?{...S,generated:T,status:"done"}:S));const I=ie.find(A=>A.id==="clean-background");await pe({original:E,generated:T,feature:"clean-background",featureLabel:(I==null?void 0:I.label)||"សម្អាតផ្ទៃខាងក្រោយ"})}catch(E){E instanceof Error?c(E.message):c(String(E)),e(T=>T.map(I=>I.id===y?{...I,status:"error"}:I))}}},$=y=>{e(k=>k.filter(E=>E.id!==y))},C=async()=>{f(!0),c("");const y=n.filter(k=>k.generated);for(let k=0;k<y.length;k++){const E=y[k];if(E.generated)try{const T=document.createElement("a");T.href=E.generated,T.download=`clean-background-${E.id}.jpeg`,document.body.appendChild(T),T.click(),document.body.removeChild(T),await new Promise(I=>setTimeout(I,300))}catch(T){const I=`កំហុសក្នុងការទាញយករូបភាព ${k+1}.`;c(I),console.error(I,T);break}}f(!1)},x=de(()=>n.filter(y=>y.status==="pending"||y.status==="error").length,[n]),w=x>0?`សម្អាត ${x} រូបភាព`:"សម្អាតផ្ទៃខាងក្រោយ";return D`
        <div class="editor-layout">
            <${Di}
                settings=${t}
                setSettings=${o}
                onGenerate=${v}
                generating=${i}
                hasImage=${x>0}
                buttonText=${w}
            />
            <div class="batch-panel">
                <div class="actions" style=${{justifyContent:"space-between",marginBottom:"1.5rem"}}>
                     <button class="btn btn-secondary" onClick=${()=>{var y;return(y=document.getElementById("batch-clean-bg-file-input"))==null?void 0:y.click()}}>
                         <${J} /> បន្ថែមរូបភាព
                    </button>
                     <input type="file" id="batch-clean-bg-file-input" multiple accept="image/*" style=${{display:"none"}} onChange=${h} />
                    <button class="btn btn-primary" onClick=${C} disabled=${n.every(y=>!y.generated)||p}>
                        ${p?"កំពុងទាញយក...":D`<${ce} /> ទាញយកទាំងអស់`}
                    </button>
                </div>
                
                ${i&&D`
                    <div class="progress-bar">
                        <div class="progress-bar-inner" style=${{width:`${s}%`}}></div>
                        <span class="progress-label">${s}%</span>
                    </div>
                `}
                
                ${u&&D`<div class="error-message" style=${{marginTop:"1rem"}}>${u}</div>`}
    
                <div class="batch-grid">
                    ${n.map(y=>D`
                        <div class="batch-item">
                            <div class="image-container">
                                <img src=${y.generated||y.original} />
                                ${y.status==="processing"&&D`<${H} text="កំពុងដំណើរការ..." />`}
                                ${y.status==="error"&&D`<div class="error-badge">កំហុស</div>`}
                            </div>
                            <div class="batch-item-actions">
                                <button class="batch-item-btn" title="សម្អាតឡើងវិញ" onClick=${()=>b(y.id)}><${zt} /></button>
                                <button class="batch-item-btn" title="លុប" onClick=${()=>$(y.id)}><${We} /></button>
                            </div>
                        </div>
                    `)}
                     ${n.length===0&&D`
                        <div class="image-panel-content" style=${{gridColumn:"1 / -1"}}>
                             <${J} class="placeholder-icon"/>
                             <h4>សម្អាតផ្ទៃខាងក្រោយជាក្រុម</h4>
                             <p class="placeholder-text">បង្ហោះរូបភាពច្រើនដើម្បីចាប់ផ្តើមការកែសម្រួលក្នុងពេលតែមួយ។</p>
                        </div>
                     `}
                </div>
            </div>
        </div>
    `},Zu=()=>{const[n,e]=_("single");return D`
        <div>
            <div class="tabs">
                <button class="tab ${n==="single"?"active":""}" onClick=${()=>e("single")}>កែសម្រួលរូបភាពមួយ</button>
                <button class="tab ${n==="batch"?"active":""}" onClick=${()=>e("batch")}>កែសម្រួលជាក្រុម</button>
            </div>
            ${n==="single"?D`<${Qu} />`:D`<${Xu} />`}
        </div>
    `},ju=()=>{const n={allFilters:!0,smoothSkin:!1,smartPortrait:!0,makeupTransfer:!1,styleTransfer:!1,colorize:!1,superResolution:!1,removeJpegArtifacts:!1,denoise:!1,happiness:0,surprise:0,anger:0,age:0,hairThickness:0,numResults:2},[e,t]=_(null),[o,i]=_([]),[r,s]=_(null),[d,u]=_(!1),[c,p]=_(""),[f,h]=_(n),[m,g]=_(null),v=async()=>{if(!e)return;u(!0),p(""),i([]),s(null);const C=[];for(let x=0;x<f.numResults;x++)try{const w=await Qc(e,f);C.push(w)}catch(w){const y=w instanceof Error?w.message:String(w);p(k=>k?`${k}
កំហុសលើកទី ${x+1}: ${y}`:`កំហុសលើកទី ${x+1}: ${y}`);break}i(C),C.length>0&&s(C[0]),u(!1)},b=C=>{t(C),i([]),s(null),p(""),C||h(n)},$=()=>{h(n)};return D`
        ${m&&D`
            <${Fe}
                imageUrl=${m}
                caption="រូបភាពបន្ទាប់ពីប្រើតម្រង"
                onClose=${()=>g(null)}
            />
        `}
        <div class="image-filter-layout">
            <main class="image-display-area">
                ${e?D`
                    <div class="image-panel-preview" style="padding-top: 1rem;">
                        ${d&&D`<${H} text="កំពុងអនុវត្តតម្រង..." />`}
                        <div class="image-display-wrapper">
                            <${se} original=${e} generated=${r} objectFit="contain" />
                        </div>
                         ${o.length>1&&D`
                            <div class="thumbnail-gallery">
                                ${o.map((C,x)=>D`
                                    <div class="thumbnail-item">
                                        <img 
                                            src=${C} 
                                            alt="Generated ${x+1}" 
                                            class=${r===C?"active":""}
                                            onClick=${()=>s(C)}
                                        />
                                    </div>
                                `)}
                            </div>
                        `}
                        ${c&&D`<div class="error-message" style=${{width:"100%",marginTop:"1rem"}}>${c}</div>`}
                        <div class="actions" style=${{width:"100%",marginTop:"auto"}}>
                            <button class="btn btn-secondary" onClick=${()=>b(null)}>ប្តូររូបភាព</button>
                            <button class="btn btn-secondary" onClick=${()=>g(r)} disabled=${!r}>
                                <${mt} /> មើលរូបភាព
                            </button>
                            <${Y} baseImageUrl=${r} filename="filtered-image.jpeg">
                                <${ce} /> ទាញយក
                            </${Y}>
                        </div>
                    </div>
                `:D`
                    <${ne} onImageUpload=${C=>b(C)} />
                `}
            </main>
            <aside class="image-filter-controls-panel">
                 <${Ju} settings=${f} setSettings=${h} onGenerate=${v} onCancel=${$} generating=${d} hasImage=${!!e} />
            </aside>
        </div>
    `},ep=()=>{const[n,e]=_({brideImage:null,groomImage:null,selectedConcepts:[],customPrompt:""}),[t,o]=_(!1),[i,r]=_(""),[s,d]=_({}),[u,c]=_(null),p=async()=>{if(!n.brideImage||!n.groomImage||n.selectedConcepts.length===0)return;o(!0),r("");const f={};for(const h of n.selectedConcepts){const m=gn.find(g=>g.id===h);if(m)try{const g=await Xc(n.brideImage,n.groomImage,m.prompt,n.customPrompt);f[m.id]?f[m.id].push(g):f[m.id]=[g]}catch(g){const v=g instanceof Error?g.message:String(g);r(b=>b?`${b}
កំហុស Concept ${m.label}: ${v}`:`កំហុស Concept ${m.label}: ${v}`),console.error(`Error generating for concept ${m.label}:`,g)}}d(f),o(!1)};return D`
        ${u&&D`
            <${Fe} 
                imageUrl=${u.url}
                caption=${u.caption}
                onClose=${()=>c(null)}
            />
        `}
        <div class="wedding-photo-layout">
            <div class="page-header">
                <h1>រូបថតអាពាហ៍ពិពាហ៍ AI – ពេលវេលាដ៏មានន័យសម្រាប់គូស្នេហ៍</h1>
                <p class="subtitle">ធ្វើឱ្យសុបិននៃរូបថតអាពាហ៍ពិពាហ៍របស់អ្នកក្លាយជាការពិតដោយគ្រាន់តែអនុវត្តតាមជំហានងាយៗមួយចំនួន។ បង្ហោះរូបថតបញ្ឈរដែលបង្ហាញមុខច្បាស់របស់កូនក្រមុំ និងកូនកំលោះ បន្ទាប់មកជ្រើសរើសពីបណ្តុំនៃគំនិតរូបថតអាពាហ៍ពិពាហ៍ដ៏ប្លែកៗរបស់យើង។ AI នឹងបញ្ចូលផ្ទៃមុខរបស់អ្នកទៅក្នុងទិដ្ឋភាពដ៏រ៉ូមែនទិកដោយស្វ័យប្រវត្តិ ដោយបង្កើតបានជារូបថតដែលមានលក្ខណៈអាជីព និងពោរពេញដោយអារម្មណ៍។ ចាប់ផ្តើមដំណើរនៃការបង្កើតពេលវេលាដ៏មានន័យសម្រាប់គូស្នេហ៍ឥឡូវនេះ!</p>
            </div>
            <aside>
                <${Wu}
                    settings=${n}
                    setSettings=${e}
                    onGenerate=${p}
                    generating=${t}
                />
            </aside>
            <main class="wedding-results-panel">
                ${t&&D`<${H} text="AI កំពុងបង្កើតពេលវេលាដ៏មានន័យសម្រាប់គូស្នេហ៍..." />`}
                ${i&&D`<div class="error-message" style=${{textAlign:"left",whiteSpace:"pre-wrap"}}>${i}</div>`}
                
                ${Object.keys(s).length===0&&!t&&D`
                    <div class="placeholder-container" style=${{height:"100%"}}>
                        <${Ce} class="placeholder-icon"/>
                        <h4>លទ្ធផលនឹងបង្ហាញនៅទីនេះ</h4>
                        <p class="placeholder-text">បង្ហោះរូបថតកូនក្រមុំ កូនកំលោះ និងជ្រើសរើស concept ដើម្បីចាប់ផ្តើម។</p>
                    </div>
                `}

                ${Object.entries(s).map(([f,h])=>{const m=gn.find(g=>g.id===f);return D`
                        <div class="results-group">
                            <h3 class="results-group-title">លទ្ធផលសម្រាប់៖ ${m==null?void 0:m.label}</h3>
                            <div class="results-grid">
                                ${Array.isArray(h)&&h.map((g,v)=>{const b=`រូបថតអាពាហ៍ពិពាហ៍ concept ${m==null?void 0:m.label} - ជម្រើសទី ${v+1}`;return D`
                                    <div class="result-image-wrapper" onClick=${()=>c({url:g,caption:b})}>
                                        <img src=${g} alt=${b} />
                                        <span class="choice-label">ជម្រើសទី ${v+1}</span>
                                        <div class="image-overlay">
                                            <button 
                                                class="btn btn-secondary overlay-btn" 
                                                onClick=${$=>{$.stopPropagation(),c({url:g,caption:b})}}
                                            >
                                                <${mt} /> មើល
                                            </button>
                                            <${Y} 
                                                class="btn-primary overlay-btn"
                                                baseImageUrl=${g}
                                                filename=${`${b}.jpeg`}
                                            >
                                                <${ce} /> ទាញយក
                                            </${Y}>
                                        </div>
                                    </div>
                                `})}
                            </div>
                        </div>
                    `})}
            </main>
        </div>
    `},tp=()=>{const n={selectedConcepts:[],customPrompt:"",numImages:1},[e,t]=_(null),[o,i]=_([]),[r,s]=_(null),[d,u]=_(!1),[c,p]=_(""),[f,h]=_(n),m=async()=>{if(!e)return;u(!0),p(""),i([]),s(null);const v=["Generate a beautiful, high-resolution, photorealistic birthday-themed portrait. The subject's face and identity must be an exact match to the person in the provided reference photo.","The overall mood should be celebratory and joyful."],b=f.selectedConcepts.map(w=>{const y=xi.find(k=>k.id===w);return y?y.prompt:""}).filter(Boolean);b.length>0&&v.push(`Apply the following theme(s): ${b.join(". ")}.`),f.customPrompt.trim()&&v.push(`Additionally, follow this specific user request: "${f.customPrompt.trim()}".`);const $=v.join(" "),C=[],x=ie.find(w=>w.id==="birthday-photo");for(let w=0;w<f.numImages;w++)try{const y=await Zc(e,$);C.push(y),await pe({original:e,generated:y,feature:"birthday-photo",featureLabel:(x==null?void 0:x.label)||"បង្កើតរូបថតថ្ងៃខួបកំណើត"})}catch(y){const k=y instanceof Error?y.message:String(y);p(E=>E?`${E}
កំហុសលើកទី ${w+1}: ${k}`:`កំហុសលើកទី ${w+1}: ${k}`);break}i(C),C.length>0&&s(C[0]),u(!1)},g=v=>{t(v),i([]),s(null),p("")};return D`
        <div class="editor-layout">
            <div class="settings-panel">
                 <div class="form-section">
                    <h3 class="form-section-title">១. បង្ហោះរូបថតរបស់អ្នក</h3>
                    ${e?D`
                        <div class="image-preview-container" style=${{height:"auto",maxHeight:"300px",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--background)",borderRadius:"8px",border:"1px solid var(--border-color)"}}>
                            <img src=${e} alt="Uploaded preview" style=${{maxHeight:"100%",width:"auto",objectFit:"contain"}}/>
                        </div>
                        <button class="btn btn-secondary" onClick=${()=>g(null)} style=${{width:"100%",marginTop:"1rem"}}>
                            បង្ហោះរូបថតផ្សេងទៀត
                        </button>
                    `:D`
                        <${ne} onImageUpload=${v=>g(v)} />
                    `}
                </div>
                <${Yu}
                    settings=${f}
                    setSettings=${h}
                    onGenerate=${m}
                    generating=${d}
                    hasImage=${!!e}
                />
            </div>
            <div class="image-panel">
                ${e?D`
                    <div class="image-panel-preview">
                        ${d&&D`<${H} text="AI កំពុងរៀបចំកម្មវិធីខួបកំណើត..." />`}
                        <div class="image-display-wrapper">
                            <${se} original=${e} generated=${r} objectFit="contain" />
                            <${he}
                                generatedImage=${r}
                                filename="birthday-photo.jpeg"
                                onReset=${()=>g(null)}
                                isGenerating=${d}
                            />
                        </div>
                        ${o.length>1&&D`
                            <div class="thumbnail-gallery">
                                ${o.map((v,b)=>D`
                                    <div class="thumbnail-item">
                                        <img 
                                            src=${v} 
                                            alt="Generated ${b+1}" 
                                            class=${r===v?"active":""}
                                            onClick=${()=>s(v)}
                                        />
                                        <span class="thumbnail-label">រូបថត ${b+1}</span>
                                    </div>
                                `)}
                            </div>
                        `}
                        ${c&&D`<div class="error-message" style=${{textAlign:"left",whiteSpace:"pre-wrap"}}>${c}</div>`}
                    </div>
                `:D`
                    <div class="image-panel-content">
                        <${Ce} class="placeholder-icon"/>
                        <h4>បង្កើតរូបថតថ្ងៃខួបកំណើត</h4>
                        <p class="placeholder-text">បង្ហោះរូបថតរបស់អ្នក និងជ្រើសរើស concept ដើម្បីបង្កើតរូបថតថ្ងៃខួបកំណើតដ៏ស្រស់ស្អាត។</p>
                    </div>
                `}
            </div>
        </div>
    `},np=()=>{const[n,e]=_({groupImage:null,portraitImages:[{image:null,description:""}]}),[t,o]=_(null),[i,r]=_(!1),[s,d]=_(""),[u,c]=_(null),p=async($,C,x)=>{if(!$)return;const w=new FileReader;w.onload=y=>{var E;const k=(E=y.target)==null?void 0:E.result;if(x!==void 0){const T=[...n.portraitImages];T[x]={...T[x],image:k},e(I=>({...I,portraitImages:T}))}},w.readAsDataURL($)},f=($,C)=>{const x=[...n.portraitImages];x[C]={...x[C],description:$},e(w=>({...w,portraitImages:x}))},h=()=>{e($=>({...$,portraitImages:[...$.portraitImages,{image:null,description:""}]}))},m=$=>{if(n.portraitImages.length<=1)return;const C=n.portraitImages.filter((x,w)=>w!==$);e(x=>({...x,portraitImages:C}))},g=async()=>{const{groupImage:$,portraitImages:C}=n,x=C.filter(w=>w.image!==null);if(!$||x.length===0){d("សូមបង្ហោះរូបថតក្រុម និងយ៉ាងហោចណាស់រូបថតបញ្ឈរមួយ។");return}r(!0),d(""),o(null);try{const w=await jc($,x);o(w)}catch(w){d(w instanceof Error?w.message:String(w))}finally{r(!1)}},v=()=>{e({groupImage:null,portraitImages:[{image:null,description:""}]}),o(null),d("")},b=de(()=>!!n.groupImage&&n.portraitImages.some($=>$.image!==null),[n]);return i?D`
         <div class="face-swap-app-container">
            <${H} text="AI កំពុងបញ្ចូលផ្ទៃមុខ សូមរង់ចាំ..." />
         </div>
        `:t?D`
            ${u&&D`
                <${Fe}
                    imageUrl=${u}
                    caption="រូបថតគ្រួសារដែលបានបញ្ចូលផ្ទៃមុខ"
                    onClose=${()=>c(null)}
                />
            `}
            <div class="face-swap-results-view">
                 <div class="single-result-container" onClick=${()=>c(t)}>
                     <img src=${t} alt="រូបថតដែលបានបញ្ចូលផ្ទៃមុខ" />
                     <div class="single-result-overlay">
                         <${mt} /> មើលរូបភាពធំ
                     </div>
                 </div>
                 ${s&&D`<div class="error-message" style=${{marginTop:"1.5rem"}}>${s}</div>`}
                 <div class="actions" style=${{marginTop:"2rem"}}>
                    <button class="btn btn-secondary" onClick=${v}>បង្កើតរូបភាពថ្មី</button>
                    <${Y} baseImageUrl=${t} filename="family-face-swap.jpeg">
                        <${ce} /> ទាញយក
                    </${Y}>
                 </div>
            </div>
        `:D`
    <div class="face-swap-app-container">
        <div class="face-swap-header">
             <h2>បញ្ចូលផ្ទៃមុខក្នុងរូបថតគ្រួសារ</h2>
        </div>

        <div class="face-swap-info-box">
            <h3>សូមស្វាគមន៍!</h3>
            <p>តើអ្នកត្រៀមខ្លួនសម្រាប់ភាពសប្បាយរីករាយជាមួយរូបថតគ្រួសារហើយឬនៅ? គ្រាន់តែអនុវត្តតាមជំហានងាយៗខាងក្រោម៖</p>
            <ol>
                <li>បង្ហោះរូបថតគ្រួសារ ឬរូបថតក្រុមដែលអ្នកចង់កែសម្រួល។</li>
                <li>បង្ហោះរូបថតបញ្ឈរច្បាស់ <strong>មួយ ឬច្រើន</strong> ដែលមានផ្ទៃមុខដែលអ្នកចង់ប្រើ។</li>
                <li>ចុចប៊ូតុង <strong>បញ្ចូលផ្ទៃមុខ</strong> ហើយទុកឱ្យ AI របស់យើងបញ្ចូលផ្ទៃមុខទាំងអស់ទៅក្នុងរូបថត!</li>
            </ol>
            <p><strong>គន្លឹះ៖</strong> ដើម្បីទទួលបានលទ្ធផលល្អបំផុត សូមប្រើរូបភាពដែលមានគុណភាពខ្ពស់ និងផ្ទៃមុខដែលមើលត្រង់ទៅមុខ។</p>
        </div>

        <div class="face-swap-main-layout">
            <div class="face-swap-upload-section">
                <h4>១. បង្ហោះរូបថតក្រុម</h4>
                <p class="subtitle">ជ្រើសរើសរូបថតគ្រួសារ ឬមិត្តភក្តិរបស់អ្នក។</p>
                ${n.groupImage?D`
                    <div class="image-preview-container">
                        <img src=${n.groupImage} alt="Group preview" />
                        <button class="btn btn-secondary" onClick=${()=>e($=>({...$,groupImage:null}))} style=${{width:"100%",marginTop:"1rem"}}>
                            ប្តូររូបថតក្រុម
                        </button>
                    </div>
                `:D`
                    <${ne} onImageUpload=${$=>e(C=>({...C,groupImage:$}))} id="group-uploader" />
                `}
            </div>

            <div class="face-swap-upload-section">
                <h4>២. បង្ហោះរូបថតបញ្ឈរ</h4>
                <p class="subtitle">បន្ថែមផ្ទៃមុខតាមដែលអ្នកចង់បាន។</p>
                <div class="portrait-upload-list">
                    ${n.portraitImages.map(($,C)=>D`
                        <div class="portrait-upload-item" key=${C}>
                             ${$.image?D`
                                 <div class="image-preview-container" style="width: 120px; height: 120px; flex-shrink: 0;">
                                     <img src=${$.image} alt="រូបថតបញ្ឈរ" />
                                 </div>
                             `:D`
                                <div onClick=${()=>{var x;return(x=document.getElementById(`portrait-uploader-${C}`))==null?void 0:x.click()}} style="width: 120px; height: 120px; flex-shrink: 0;">
                                    <div class="portrait-preview-wrapper" style="width:100%; height: 100%; border-radius: 8px;">
                                        <${J} class="upload-icon" />
                                    </div>
                                </div>
                                <input type="file" id=${`portrait-uploader-${C}`} accept="image/*" style="display:none" onChange=${x=>p(x.currentTarget.files&&x.currentTarget.files[0]?x.currentTarget.files[0]:null,"portrait",C)} />
                             `}
                             <div class="portrait-info">
                                 <p class="label">ផ្ទៃមុខទី ${C+1}</p>
                                 <div class="form-group" style="margin-bottom: 0.5rem;">
                                     <input 
                                         type="text" 
                                         placeholder="ការពិពណ៌នា (ឧទាហរណ៍៖ បុរសពាក់អាវពណ៌ខៀវ)" 
                                         value=${$.description}
                                         onInput=${x=>f(x.currentTarget.value,C)}
                                     />
                                 </div>
                                 <div class="portrait-actions">
                                      <button class="btn btn-secondary" onClick=${()=>{var x;return(x=document.getElementById(`portrait-uploader-${C}`))==null?void 0:x.click()}}>
                                        ${$.image?"ប្តូរ":"ជ្រើសរើសរូបថត"}
                                      </button>
                                      ${n.portraitImages.length>1&&D`
                                          <button class="btn btn-danger" onClick=${()=>m(C)}>លុប</button>
                                      `}
                                 </div>
                             </div>
                        </div>
                    `)}
                </div>
                 <button class="btn add-portrait-btn" onClick=${h}>+ បន្ថែមផ្ទៃមុខ</button>
            </div>
        </div>
        
        <div class="face-swap-action-bar">
            <button class="btn face-swap-generate-btn" onClick=${g} disabled=${i||!b}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="currentColor" style=${{marginRight:"0.5rem"}}><path d="M12 2L9.5 9.5L2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z"/></svg>
                បញ្ចូលផ្ទៃមុខ
            </button>
        </div>
        ${s&&D`<div class="error-message" style=${{marginTop:"1.5rem"}}>${s}</div>`}
    </div>
    `};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const B=G.bind(F),op=()=>{const[n,e]=_("id-photo"),[t,o]=_(window.innerWidth<900),[i,r]=_("dark"),[s,d]=_(null),[u,c]=_(""),p=de(()=>ie.find(g=>g.id===n)||ie[0],[n]);ve(()=>{const g=v=>{v.detail&&e(v.detail)};return window.addEventListener("change-tab",g),()=>window.removeEventListener("change-tab",g)},[]),ve(()=>{const g=()=>{const b=Su();if(b){const $=Wo(b.email,b.key);$.isValid?(d($),c("")):(d(null),$.isExpired&&c("អាជ្ញាប័ណ្ណរបស់អ្នកបានផុតកំណត់ហើយ! សូមទាក់ទងមកកាន់បងបារាំងដើម្បីបន្ត។"))}};g();const v=setInterval(g,5*60*1e3);return()=>clearInterval(v)},[]);const f=async(g,v)=>{c("");const b=Wo(g,v);if(b.isValid)Pu(g,v),d(b);else throw b.isExpired?c("លេខកូដសកម្មនេះបានផុតកំណត់ហើយ! សូមទាក់ទងមកកាន់បងបារាំងដើម្បីបន្ត។"):c("លេខកូដសកម្មមិនត្រឹមត្រូវ! សូមពិនិត្យមើល Gmail និងលេខកូដរបស់អ្នកឡើងវិញ។"),new Error("Invalid key")};ve(()=>{const g=()=>{window.innerWidth<900&&o(!0)};return window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[]),ve(()=>{const v=localStorage.getItem("theme")||"dark";r(v)},[]),ve(()=>{i==="light"?document.body.classList.add("light-mode"):document.body.classList.remove("light-mode"),localStorage.setItem("theme",i)},[i]);const h=()=>{r(g=>g==="light"?"dark":"light")},m=()=>{const g=n!=="face-align"&&n!=="wedding-photo"&&n!=="face-transform"&&n!=="image-to-prompt"&&n!=="wrinkle-editor"&&n!=="history",v=(()=>{switch(n){case"id-photo":return B`<${nu} key="id-photo" />`;case"restoration":return B`<${ru} key="restoration" />`;case"document-restoration":return B`<${lu} key="document-restoration" />`;case"fashion-design":return B`<${fu} key="fashion-design" />`;case"clothing-change":return B`<${gu} key="clothing-change" />`;case"face-transform":return B`<${Bu} key="face-transform" />`;case"image-to-prompt":return B`<${Hu} key="image-to-prompt" />`;case"wrinkle-editor":return B`<${qu} key="wrinkle-editor" />`;case"image-filter":return B`<${ju} key="image-filter" />`;case"wedding-photo":return B`<${ep} key="wedding-photo" />`;case"birthday-photo":return B`<${tp} key="birthday-photo" />`;case"upscaler":return B`<${Gu} key="upscaler" />`;case"family-face-swap":return B`<${np} key="family-face-swap" />`;case"preset-color":return B`<${Nu} key="preset-color" />`;case"color-correction":return B`<${Fu} key="color-correction" />`;case"face-align":return B`<${Vu} key="face-align" />`;case"symmetry":return B`<${yu} key="symmetry" />`;case"lighting":return B`<${$u} key="lighting" />`;case"background":return B`<${wu} key="background" />`;case"clean-background":return B`<${Zu} key="clean-background" />`;case"trend-creator":return B`<${ku} key="trend-creator" />`;case"mockup":return B`<${Eu} key="mockup" />`;case"history":return B`<${Ou} key="history" />`;case"settings":return B`<${Du} key="settings" onClearCache=${()=>{localStorage.clear(),window.location.reload()}} theme=${i} setTheme=${r} license=${s} />`;default:return null}})();return B`
            ${g&&B`
                <div class="page-header">
                    <h1>${p.label}</h1>
                    <p class="subtitle">${p.description}</p>
                </div>
            `}
            <div class="tab-content">
                ${v}
            </div>
        `};return s?B`
        <div class="app-container ${t?"nav-collapsed":""}">
            <nav class="sidebar-nav">
                <div class="sidebar-header">
                    <span class="logo-text">បារាំងបោះពុម្ព</span>
                    <button class="nav-toggle" onClick=${()=>o(g=>!g)} title="Toggle Navigation">
                        <${xd} />
                    </button>
                </div>

                <div class="main-tabs">
                    ${ie.map(g=>B`
                        <button 
                            class="main-tab ${n===g.id?"active":""}" 
                            onClick=${()=>e(g.id)}
                            title=${g.label}
                        >
                            <span class="tab-icon"><${g.icon} /></span>
                            <span class="tab-label">${g.label}</span>
                        </button>
                    `)}
                </div>

                <div class="sidebar-footer">
                    <${Gd} theme=${i} onToggle=${h} />
                </div>
            </nav>

            <main class="main-content">
                <a href=${p.guideLink||"#"} target="_blank" rel="noopener noreferrer" class="coffee-button">
                    <${Pd} />
                    <span>${p.guideText||"ការណែនាំអំពីការប្រើប្រាស់"}</span>
                </a>

                ${m()}
            </main>
        </div>
    `:B`<${Ku} onActivate=${f} error=${u} />`};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const ip=G.bind(F);Hi(ip`<${op} />`,document.getElementById("app"));
