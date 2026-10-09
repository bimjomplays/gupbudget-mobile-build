(()=>{var n,t,i,r,u,f,o,e,l,c,a,s,h,p,v={},y=[],w=/^m(i|n|o|s|text|space)$/,d=Array.isArray,_=y.slice,g=Object.assign;function b(n3){n3&&n3.parentNode&&n3.remove()}function k(n3,t4,i3){var r3,u3,f3,o3={},e3=arguments.length;for(f3 in t4)f3=="key"?r3=t4[f3]:f3=="ref"&&typeof n3!="function"?u3=t4[f3]:o3[f3]=t4[f3];return e3>2&&(o3.children=e3>3?_.call(arguments,2):i3),M(n3,o3,r3,u3,null)}function M(i3,r3,u3,f3,o3){var e3={type:i3,props:r3,key:u3,ref:f3,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o3||++t,__i:-1,__u:0};return!o3&&n.vnode&&n.vnode(e3),e3}function x(n3){return n3.children}function S(n3,t4){this.props=n3,this.context=t4,this.__g=0}function C(n3,t4){if(t4==null)return n3.__?C(n3.__,n3.__i+1):null;for(var i3;t4<n3.__k.length;t4++)if((i3=n3.__k[t4])&&i3.__e)return i3.__e;return typeof n3.type!="function"||n3.props.__P?null:C(n3)}function j(n3){if((n3=n3.__)&&n3.__c&&!n3.props.__P)return n3.__e=null,n3.__k.some(function(t4){return t4&&(n3.__e=t4.__e)}),j(n3)}function L(t4){(8&t4.__g||!(t4.__g|=8)||!r.push(t4)||f++)&&u==n.debounceRendering||((u=n.debounceRendering)||queueMicrotask)(H)}function H(){var t4,i3,u3,e3,l3,c3,a3,s3,h3;try{for(i3=1;r.length;)r.length>i3&&r.sort(o),t4=r.shift(),i3=r.length,8&t4.__g&&(e3=void 0,l3=void 0,c3=(l3=(u3=t4).__v).__e,a3=[],s3=[],(h3=u3.__P)&&((e3=g({constructor:void 0},l3)).__v=l3.__v+1,n.vnode&&n.vnode(e3),z(h3,e3,l3,u3.__n,h3.namespaceURI,32&l3.__u?[c3]:null,a3,c3||C(l3),32&l3.__u,s3),e3.__v=l3.__v,e3.__.__k[e3.__i]=e3,D(a3,e3,s3),l3.__=l3.__e=null,e3.__e!=c3&&j(e3)))}finally{r.length=f=0}}function I(n3,t4,i3,r3,u3,f3,o3,e3,l3,c3,a3){var s3,h3,p3,w2,d3,_3,g3=r3.__k||y,b3=t4.length;for(l3=A(i3,t4,g3,l3,b3),s3=0;s3<b3;s3++)(p3=i3.__k[s3])!=null&&(h3=~p3.__i&&g3[p3.__i]||v,p3.__i=s3,_3=z(n3,p3,h3,u3,f3,o3,e3,l3,c3,a3),w2=p3.__e,p3.ref&&(h3.ref!=p3.ref||8&h3.__u)&&(h3.ref!=p3.ref&&h3.ref&&F(h3.ref,null,p3),a3.push(p3.ref,p3.__c||w2,p3)),d3=d3||w2,4&p3.__u?(l3=O(p3,l3,n3,!h3.__v),h3.__e&&(h3.__e=null)):typeof p3.type=="function"&&_3!==void 0?l3=_3:w2&&(l3=w2.nextSibling),p3.__u&=-7);return i3.__e=d3,l3}function A(n3,t4,i3,r3,u3){var f3,o3,e3,l3,c3,a3,s3,h3,p3,v3,y3=i3.length,w2=y3,_3=0,g3=!1,b3=n3.__k=Array(u3);for(f3=0;f3<u3;f3++)(o3=t4[f3])!=null&&typeof o3!="boolean"&&typeof o3!="function"?(typeof o3!="object"||o3.constructor==String?o3=b3[f3]=M(null,o3):d(o3)?o3=b3[f3]=M(x,{children:o3}):o3.constructor===void 0&&o3.__b?o3=b3[f3]=M(o3.type,o3.props,o3.key,o3.ref,o3.__v):b3[f3]=o3,l3=f3+_3,o3.__=n3,o3.__b=n3.__b+1,e3=null,~(c3=o3.__i=T(o3,i3,l3,w2))&&(w2--,(e3=i3[c3])&&(e3.__u|=2)),e3&&e3.__v?(o3.__u|=2,c3==l3-1?_3--:c3==l3+1?_3++:c3!=l3&&(c3>l3?_3--:_3++,g3=!0)):(~c3||(u3>y3?_3--:u3<y3&&_3++),typeof o3.type!="function"&&(o3.__u|=4))):b3[f3]=null;if(g3){for(a3=[],s3=[],f3=0;f3<u3;f3++)if((o3=b3[f3])&&2&o3.__u){for(h3=0,p3=a3.length;h3<p3;)a3[v3=h3+p3>>1]<o3.__i?h3=v3+1:p3=v3;a3[h3]=o3.__i,s3[f3]=h3+1}for(_3=a3.length;f3--;)s3[f3]&&(s3[f3]==_3?_3--:b3[f3].__u|=4)}if(w2)for(f3=0;f3<y3;f3++)!(e3=i3[f3])||2&e3.__u||(e3.__e==r3&&(r3=C(e3)),G(e3,e3));return r3}function O(n3,t4,i3,r3){var u3,f3;if(typeof n3.type=="function"){if(n3.props.__P)return t4;if(u3=n3.__k)for(f3=0;f3<u3.length;f3++)u3[f3]&&(u3[f3].__=n3,t4=O(u3[f3],t4,i3,!1));return t4}for(t4&&!t4.parentNode&&(t4=C(n3))&&!t4.parentNode&&(t4=null),n3.__e!=t4&&(!r3&&i3.moveBefore&&n3.__e.parentNode?i3.moveBefore(n3.__e,t4):i3.insertBefore(n3.__e,t4||null)),t4=n3.__e;(t4=t4&&t4.nextSibling)&&t4.nodeType==8;);return t4}function T(n3,t4,i3,r3){var u3,f3,o3,e3=n3.key,l3=n3.type,c3=t4[i3],a3=c3&&!(2&c3.__u);if(c3===null&&e3==null||a3&&e3==c3.key&&l3==c3.type)return i3;if(r3>(a3?1:0)){for(u3=i3-1,f3=i3+1;u3>=0||f3<t4.length;)if((c3=t4[o3=u3>=0?u3--:f3++])&&!(2&c3.__u)&&e3==c3.key&&l3==c3.type)return o3}return-1}function q(n3,t4,i3){i3==null&&(i3=""),t4[0]=="-"?n3.setProperty(t4,i3):n3[t4]=i3}function N(n3,t4,i3,r3,u3){var f3;n:if(t4=="style")if(typeof i3=="string")n3.style.cssText=i3;else{if(typeof r3=="string"&&(n3.style.cssText=r3=""),r3)for(t4 in r3)i3&&t4 in i3||q(n3.style,t4,"");if(i3)for(t4 in i3)r3&&i3[t4]==r3[t4]||q(n3.style,t4,i3[t4])}else if(t4[0]=="o"&&t4[1]=="n")f3=t4!=(t4=t4.replace(c,"$1")),(t4=t4.slice(2))[0]<"a"&&(t4=t4.toLowerCase()),(n3.__e||(n3.__e={}))[t4+f3]=i3,i3?r3?i3[l]=r3[l]:(i3[l]=a,n3.addEventListener(t4,f3?h:s,f3)):n3.removeEventListener(t4,f3?h:s,f3);else{if(u3=="http://www.w3.org/2000/svg")t4=t4.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t4!="width"&&t4!="height"&&t4!="href"&&t4!="list"&&t4!="form"&&t4!="tabIndex"&&t4!="download"&&t4!="rowSpan"&&t4!="colSpan"&&t4!="role"&&t4!="popover"&&t4 in n3)try{n3[t4]=i3??"";break n}catch{}typeof i3=="function"||(i3==null||i3===!1&&t4[4]!="-"?n3.removeAttribute(t4):n3.setAttribute(t4,t4=="popover"&&i3==1?"":i3))}}function V(t4){return function(i3){if(this.__e){var r3=this.__e[i3.type+t4];if(i3[e]==null)i3[e]=a++;else if(i3[e]<r3[l])return;return r3(n.event?n.event(i3):i3)}}}function z(t4,i3,r3,u3,f3,o3,e3,l3,c3,a3){var s3,h3,p3,v3,w2,_3,k3,m2,M2,$,j3,L3,H2,A3,O2,P2,T4,q2,N2,V2,z3=i3.type;if(i3.constructor!==void 0)return null;if(128&r3.__u&&(c3=32&r3.__u,s3=r3.__c.__z)){if(i3.__u|=c3,h3=o3=[],s3.nodeType==8)for(p3=1,v3=s3.nextSibling;v3;v3=v3.nextSibling){if(v3.nodeType==8){if(v3.data.startsWith("$s"))p3++;else if(v3.data.startsWith("/$s")&&!--p3)break}o3.push(v3)}else o3.push(s3);l3=o3[0]}(s3=n.__b)&&s3(i3);n:if(typeof z3=="function"){w2=e3.length;try{if($=i3.props,j3=(s3=z3.prototype)&&s3.render,L3=(s3=z3.contextType)&&u3[s3.__c],H2=s3?L3?L3.props.value:s3.__:u3,r3.__c?2&(_3=i3.__c=r3.__c).__g&&(_3.__g|=1):(j3?i3.__c=_3=new z3($,H2):(i3.__c=_3=new S($,H2),_3.constructor=z3,_3.render=J),L3&&L3.sub(_3),_3.state||(_3.state={}),_3.__n=u3,_3.__g|=8,_3.__h=[],_3.__k=[]),j3&&(_3.__s||(_3.__s=_3.state),z3.getDerivedStateFromProps&&(_3.__s==_3.state&&(_3.__s=g({},_3.__s)),g(_3.__s,z3.getDerivedStateFromProps($,_3.__s)))),k3=_3.props,m2=_3.state,_3.__v=i3,r3.__c){if(j3&&!z3.getDerivedStateFromProps&&$!==k3&&_3.componentWillReceiveProps&&_3.componentWillReceiveProps($,H2),i3.__v==r3.__v&&!(8&_3.__g)||!(4&_3.__g)&&_3.shouldComponentUpdate&&_3.shouldComponentUpdate($,_3.__s,H2)===!1){i3.__v!=r3.__v&&(_3.props=$,_3.state=_3.__s,_3.__g&=-9),i3.__e=r3.__e,i3.__k=r3.__k,i3.__k.some(function(n3){n3&&(n3.__=i3)}),y.push.apply(_3.__h,_3.__k),_3.__k=[],_3.__h.length&&e3.push(_3),l3=C(r3);break n}_3.componentWillUpdate&&_3.componentWillUpdate($,_3.__s,H2),j3&&_3.componentDidUpdate&&_3.__h.push(function(){_3.componentDidUpdate(k3,m2,M2)})}else j3&&!z3.getDerivedStateFromProps&&_3.componentWillMount&&_3.componentWillMount(),j3&&_3.componentDidMount&&_3.__h.push(_3.componentDidMount);if(_3.context=H2,_3.props=$,_3.__P=t4,_3.__g&=-5,A3=n.__r,O2=0,j3)_3.state=_3.__s,_3.__g&=-9,A3&&A3(i3),s3=_3.render(_3.props,_3.state,_3.context),y.push.apply(_3.__h,_3.__k),_3.__k=[];else do _3.__g&=-9,A3&&A3(i3),s3=_3.render(_3.props,_3.state,_3.context),_3.state=_3.__s;while(8&_3.__g&&++O2<25);_3.state=_3.__s,_3.getChildContext&&(u3=g({},u3,_3.getChildContext())),j3&&r3.__c&&_3.getSnapshotBeforeUpdate&&(M2=_3.getSnapshotBeforeUpdate(k3,m2)),P2=s3&&s3.type===x&&s3.key==null?s3.props.children:s3,$.__P&&(s3=l3,f3=(t4=$.__P).namespaceURI,c3=o3=null,r3.props&&r3.props.__P!=t4&&(r3.__k.some(function(n3){n3&&G(n3,n3)}),r3.__k=null),l3=r3.__k?C(r3,0):null),l3=I(t4,d(P2)?P2:[P2],i3,r3,u3,f3,o3,e3,l3,c3,a3),$.__P&&(i3.__e=null,l3=s3),i3.__u&=-161,128&r3.__u&&(_3.__z=null),h3&&h3.some(b),_3.__h.length&&e3.push(_3),1&_3.__g&&(_3.__g&=-4)}catch(t5){if(e3.length=w2,i3.__v=null,c3||o3)if(t5.then){if(T4=0,i3.__u|=c3?160:128,o3){for(N2=0;N2<o3.length;N2++)if(V2=o3[N2])if(V2.nodeType==8){if(o3[N2]=null,V2.data.startsWith("$s"))T4++||(q2=V2);else if(V2.data.startsWith("/$s")&&!--T4){l3=V2;break}}else T4&&(o3[N2]=null)}if(!q2){for(;l3&&l3.nodeType==8&&l3.nextSibling;)l3=l3.nextSibling;o3&&(o3[o3.indexOf(l3)]=null),q2=l3}i3.__c.__z||(i3.__c.__z=q2),i3.__e=l3}else o3&&o3.some(b);else i3.__e=r3.__e;i3.__k||(i3.__k=r3.__k||[]),t5.then||B(i3),n.__e(t5,i3,r3)}}else l3=i3.__e=E(r3.__e,i3,r3,u3,f3,o3,e3,c3,a3,t4);return(s3=n.diffed)&&s3(i3),128&i3.__u?void 0:l3}function B(n3){n3&&(n3.__c&&(n3.__c.__g|=4),n3.__k&&n3.__k.some(B))}function D(t4,i3,r3){for(var u3=0;u3<r3.length;)F(r3[u3++],r3[u3++],r3[u3++]);n.__c&&n.__c(i3,t4),t4.some(function(i4){try{t4=i4.__h,i4.__h=[],t4.some(function(n3){n3.call(i4)})}catch(t5){n.__e(t5,i4.__v)}})}function E(t4,i3,r3,u3,f3,o3,e3,l3,c3,a3){var s3,h3,p3,y3,g3,k3,m2,M2,$,x2=r3.props||v,S2=i3.props,j3=i3.type;if(j3=="svg"?f3="http://www.w3.org/2000/svg":j3=="math"?f3="http://www.w3.org/1998/Math/MathML":f3||(f3="http://www.w3.org/1999/xhtml"),o3){for(s3=0;s3<o3.length;s3++)if((g3=o3[s3])&&(j3?g3.localName==j3:g3.nodeType==3)){t4=g3,o3[s3]=null;break}}if(!t4){if(M2=a3.ownerDocument||document,!j3)return M2.createTextNode(S2);t4=M2.createElementNS(f3,j3,S2.is&&S2),l3&&(n.__m&&n.__m(i3,o3),l3=!1),o3=null}if(j3){if(a3=j3=="template"?t4.content:t4,o3=j3=="textarea"&&S2.defaultValue!=null?null:o3&&_.call(a3.childNodes),!l3&&o3)for(x2={},s3=0;s3<t4.attributes.length;s3++)x2[(g3=t4.attributes[s3]).name]=g3.value;for(s3 in x2)g3=x2[s3],s3=="dangerouslySetInnerHTML"?p3=g3:s3=="children"||s3 in S2||s3=="value"&&"defaultValue"in S2||s3=="checked"&&"defaultChecked"in S2||N(t4,s3,null,g3,f3);for(s3 in $=1&r3.__u,S2)g3=S2[s3],s3=="children"?y3=g3:s3=="dangerouslySetInnerHTML"?h3=g3:s3=="value"?k3=g3:s3=="checked"?m2=g3:l3&&typeof g3!="function"||!(x2[s3]!==g3||$&&g3!=null)||N(t4,s3,g3,x2[s3],f3);h3?(l3||p3&&(h3.__html==p3.__html||h3.__html==t4.innerHTML)||(t4.innerHTML=h3.__html),i3.__k=[]):(p3&&(t4.textContent=""),(j3=="foreignObject"||f3=="http://www.w3.org/1998/Math/MathML"&&w.test(j3))&&(f3="http://www.w3.org/1999/xhtml"),I(a3,d(y3)?y3:[y3],i3,r3,u3,f3,o3,e3,o3?o3[0]:r3.__k&&C(r3,0),l3,c3),o3&&o3.some(b)),l3&&j3!="textarea"||(s3="value",j3=="progress"&&k3==null?t4.removeAttribute(s3):k3==null||k3===t4[s3]&&(j3!="progress"||k3)||N(t4,s3,k3,x2[s3],f3),s3="checked",m2!=null&&m2!=t4[s3]&&N(t4,s3,m2,x2[s3],f3))}else x2===S2||l3&&t4.data==S2||(t4.data=S2);return t4}function F(t4,i3,r3){try{typeof t4=="function"?(typeof t4.__u=="function"&&t4.__u(),(typeof t4.__u!="function"||i3)&&(t4.__u=t4(i3))):t4.current=i3}catch(t5){n.__e(t5,r3)}}function G(t4,i3,r3){var u3,f3;if(n.unmount&&n.unmount(t4),!(u3=t4.ref)||u3.current&&u3.current!=t4.__e||F(u3,null,i3),u3=t4.__c){if(u3.componentWillUnmount)try{u3.componentWillUnmount()}catch(t5){n.__e(t5,i3)}u3.__P=u3.__n=null}if(u3=t4.__k)for(f3=0;f3<u3.length;f3++)u3[f3]&&G(u3[f3],i3,typeof t4.type!="function"||r3&&!t4.props.__P);(u3=t4.__e)&&(r3||b(u3),u3.__e&&(u3.__e=null)),t4.__e=t4.__c=t4.__=null}function J(n3,t4,i3){return this.constructor(n3,i3)}function K(t4,i3){var r3,u3,f3,o3;n.__&&n.__(t4,i3),i3.nodeType==9&&(i3=i3.documentElement),u3=(r3=t4&&32&t4.__u)?null:i3.__k,i3.__k=M(x,{children:[t4]}),f3=[],o3=[],z(i3,i3.__k,u3||v,v,i3.namespaceURI,u3?null:i3.firstChild?_.call(i3.childNodes):null,f3,u3?u3.__e:i3.firstChild,r3,o3),D(f3,i3.__k,o3),i3.__k.props.children=null}n={__e:function(n3,t4,i3,r3){for(var u3,o3,e3;t4=t4.__;)if((u3=t4.__c)&&!(1&u3.__g)){u3.__g|=4;try{if((o3=u3.constructor)&&o3.getDerivedStateFromError&&(u3.setState(o3.getDerivedStateFromError(n3)),e3=8&u3.__g),u3.componentDidCatch&&(u3.componentDidCatch(n3,r3||{}),e3=8&u3.__g),e3)return void(u3.__g|=2)}catch(t5){n3=t5,e3=0}}throw f=0,n3}},t=0,i=function(n3){return n3!=null&&n3.constructor===void 0},S.prototype.setState=function(n3,t4){var i3=this.__s;i3&&i3!=this.state||(i3=this.__s=g({},this.state)),typeof n3=="function"&&(n3=n3(g({},i3),this.props)),n3&&(g(i3,n3),this.__v&&(t4&&this.__k.push(t4),L(this)))},S.prototype.forceUpdate=function(n3){this.__v&&(this.__g|=4,n3&&this.__h.push(n3),L(this))},S.prototype.render=x,r=[],f=0,o=function(n3,t4){return n3.__v.__b-t4.__v.__b},e=Symbol(),l=Symbol(),c=/(PointerCapture)$|Capture$/i,a=0,s=V(!1),h=V(!0),p=0;var t2,r2,u2,i2,o2=Object.is,f2=0,c2=[],e2=[],a2=n,v2=a2.__b,l2=a2.__r,m=a2.diffed,s2=a2.__c,h2=a2.unmount,p2=a2.__;function y2(n3,t4){a2.__h&&a2.__h(r2,n3,f2||t4),f2=0;var u3=r2.__H||(r2.__H={__:[],__h:[]});return n3>=u3.__.length&&u3.__.push({}),u3.__[n3]}function d2(n3){return f2=1,_2(G2,n3)}function _2(n3,u3,i3){var f3=y2(t2++,2);if(f3.t=n3,!f3.__c&&(f3.__=[i3?i3(u3):G2(void 0,u3),function(n4){var t4=f3.__N?f3.__N[0]:f3.__[0],r3=f3.t(t4,n4);o2(t4,r3)||(f3.__N=[r3,f3.__[1]],f3.__c.setState({}))}],f3.__c=r2,!r2.__f)){r2.__f=!0;var c3=r2.shouldComponentUpdate;r2.shouldComponentUpdate=function(n4,t4,r3){var u4=this.__H;if(!u4)return!0;var i4=!1,f4=this.props!=n4;if(u4.__.some(function(n5){n5.__N&&(i4=!0,o2(n5.__[0],n5.__N[0])||(f4=!0))}),c3){var e3=c3.call(this,n4,t4,r3);return i4?e3||f4:e3}return!i4||f4}}return f3.__}function A2(n3,u3){var i3=y2(t2++,3);!a2.__s&&E2(i3.__H,u3)&&(i3.__P=!0,i3.__=n3,i3.u=u3,r2.__H.__h.push(i3))}function T2(n3){return f2=5,b2(function(){return{current:n3}},[])}function b2(n3,r3){var u3=y2(t2++,7);return E2(u3.__H,r3)&&(u3.__=n3(),u3.__H=r3),u3.__}function j2(n3,t4){return f2=8,b2(function(){return n3},t4)}function g2(){var n3;do{for(;n3=e2.shift();)try{C2(n3)}catch(t5){a2.__e(t5,{__:(n3=n3.__P)&&n3.__v})}for(;n3=c2.shift();){var t4=n3.__H;if(n3.__P&&t4)try{t4.__h.some(C2),t4.__h.some(D2),t4.__h=[]}catch(r3){t4.__h=[],a2.__e(r3,n3.__v)}}}while(e2.length)}a2.__b=function(n3){r2=null,v2&&v2(n3)},a2.__=function(n3,t4){n3&&t4.__k&&t4.__k.__m&&(n3.__m=t4.__k.__m),p2&&p2(n3,t4)},a2.__r=function(n3){l2&&l2(n3),t2=0;var i3=(r2=n3.__c).__H;i3&&(u2==r2?r2.__h=[]:(i3.__h.some(C2),i3.__h.some(D2),t2=0),i3.__h=[],i3.__.some(function(n4){n4.__N&&(n4.__=n4.__N),n4.u=n4.__N=void 0})),u2=r2},a2.diffed=function(n3){m&&m(n3);var t4=n3.__c;t4&&t4.__H&&(t4.__H.__h.length&&B2(c2.push(t4)),t4.__H.__.some(function(n4){n4.u&&(n4.__H=n4.u)})),u2=r2=null},a2.__c=function(n3,t4){t4.some(function(n4){try{n4.__h.some(C2),n4.__h=n4.__h.filter(function(n5){return!n5.__||D2(n5)})}catch(r3){t4.some(function(n5){n5.__h&&(n5.__h=[])}),t4=[],a2.__e(r3,n4.__v)}}),s2&&s2(n3,t4)},a2.unmount=function(n3){h2&&h2(n3);var t4,r3,u3=n3.__c;u3&&u3.__H&&(u3.__H.__.some(function(u4){try{if(u4.__P&&u4.__c){if(r3===void 0){for(r3=n3.__;r3&&(!r3.__c||!r3.__c.__P);)r3=r3.__;r3=r3&&r3.__c}u4.__P=r3,B2(e2.push(u4))}else C2(u4)}catch(n4){t4=n4}}),u3.__H=void 0,t4&&a2.__e(t4,u3.__v))};var k2=typeof requestAnimationFrame=="function";function z2(n3){var t4,r3=function(){clearTimeout(u3),k2&&cancelAnimationFrame(t4),setTimeout(n3)},u3=setTimeout(r3,35);k2&&(t4=requestAnimationFrame(r3))}function B2(n3){n3!=1&&i2==a2.requestAnimationFrame||((i2=a2.requestAnimationFrame)||z2)(g2)}function C2(n3){var t4=r2,u3=n3.__c;typeof u3=="function"&&(n3.__c=void 0,u3()),r2=t4}function D2(n3){var t4=r2;n3.__c=n3.__(),r2=t4}function E2(n3,t4){return!n3||n3.length!=t4.length||t4.some(function(t5,r3){return!o2(t5,n3[r3])})}function G2(n3,t4){return typeof t4=="function"?t4(n3):t4}var n2=function(t4,s3,r3,e3){var u3;s3[0]=0;for(var h3=1;h3<s3.length;h3++){var p3=s3[h3++],a3=s3[h3]?(s3[0]|=p3?1:2,r3[s3[h3++]]):s3[++h3];p3===3?e3[0]=a3:p3===4?e3[1]=Object.assign(e3[1]||{},a3):p3===5?(e3[1]=e3[1]||{})[s3[++h3]]=a3:p3===6?e3[1][s3[++h3]]+=a3+"":p3?(u3=t4.apply(a3,n2(t4,a3,r3,["",null])),e3.push(u3),a3[0]?s3[0]|=2:(s3[h3-2]=0,s3[h3]=u3)):e3.push(a3)}return e3},t3=new Map;function htm_module_default(s3){var r3=t3.get(this);return r3||(r3=new Map,t3.set(this,r3)),(r3=n2(this,r3.get(s3)||(r3.set(s3,r3=(function(n3){for(var t4,s4,r4=1,e3="",u3="",h3=[0],p3=function(n4){r4===1&&(n4||(e3=e3.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h3.push(0,n4,e3):r4===3&&(n4||e3)?(h3.push(3,n4,e3),r4=2):r4===2&&e3==="..."&&n4?h3.push(4,n4,0):r4===2&&e3&&!n4?h3.push(5,0,!0,e3):r4>=5&&((e3||!n4&&r4===5)&&(h3.push(r4,0,e3,s4),r4=6),n4&&(h3.push(r4,n4,0,s4),r4=6)),e3=""},a3=0;a3<n3.length;a3++){a3&&(r4===1&&p3(),p3(a3));for(var l3=0;l3<n3[a3].length;l3++)t4=n3[a3][l3],r4===1?t4==="<"?(p3(),h3=[h3],r4=3):e3+=t4:r4===4?e3==="--"&&t4===">"?(r4=1,e3=""):e3=t4+e3[0]:u3?t4===u3?u3="":e3+=t4:t4==='"'||t4==="'"?u3=t4:t4===">"?(p3(),r4=1):r4&&(t4==="="?(r4=5,s4=e3,e3=""):t4==="/"&&(r4<5||n3[a3][l3+1]===">")?(p3(),r4===3&&(h3=h3[0]),r4=h3,(h3=h3[0]).push(2,0,r4),r4=0):t4===" "||t4==="	"||t4===`
`||t4==="\r"?(p3(),r4=2):e3+=t4),r4===3&&e3==="!--"&&(r4=4,h3=h3[0])}return p3(),h3})(s3)),r3),arguments,[])).length>1?r3:r3[0]}var THEMES=[{id:"graphite",name:"Graphite",accent:"#7b6cf6",line:"Flat near-black, solid cards with hairline borders and one violet accent. Quiet, like a pro tool.",swatches:["#0d0e10","#16171a","#7b6cf6","#a99bff"],page:{bg:"#0d0e10",bgImage:"none",card:"#16171a",cardBorder:"#26282d",text:"#ececef",muted:"#8b8d95",accent:"#7b6cf6",accentText:"#a99bff",onAccent:"#ffffff",radius:"12px",font:"'Inter', system-ui, sans-serif"}},{id:"harbor",name:"Harbor",accent:"#3b82f6",line:"Deep navy in soft layers: no borders, each level a little lighter with a real shadow. Blue accent, Fira Sans.",swatches:["#1a3360","#111b2d","#3b82f6","#7db5ff"],page:{bg:"#0a111e",bgImage:"radial-gradient(1400px 600px at 50% -20%, rgba(37,79,150,.28), transparent 70%), linear-gradient(180deg, #0c1424, #0a101c)",card:"#111b2d",cardBorder:"transparent",text:"#e7eef9",muted:"#8b9bb5",accent:"#3b82f6",accentText:"#7db5ff",onAccent:"#ffffff",radius:"18px",font:"'Fira Sans', 'Inter', system-ui, sans-serif"}},{id:"aurora",name:"Aurora",accent:"#8b5cf6",line:"Frosted glass over an indigo night with soft violet and blue light. Violet-to-indigo accent, big rounded cards.",swatches:["#2a1a5e","#0b0a18","#8b5cf6","#6aa8ff"],page:{bg:"#0b0a18",bgImage:"radial-gradient(900px 640px at 6% -10%, rgba(124,58,237,.30), transparent 62%), radial-gradient(900px 700px at 100% 0%, rgba(37,99,235,.22), transparent 62%), linear-gradient(165deg, #0d0b1f, #09081a)",card:"rgba(255,255,255,.055)",cardBorder:"rgba(255,255,255,.10)",text:"#eeebfc",muted:"#9e98c0",accent:"linear-gradient(135deg, #8b5cf6, #5b5ef0)",accentText:"#c4b5fd",onAccent:"#ffffff",radius:"26px",font:"'Inter', system-ui, sans-serif"}},{id:"ink",name:"Ink",accent:"#2f7cf6",line:"True black with outlined cards, white type, light-weight numbers and one electric-blue accent. Greyscale charts.",swatches:["#000000","#f4f4f5","#2f7cf6","#26262b"],page:{bg:"#000000",bgImage:"none",card:"transparent",cardBorder:"#26262b",text:"#f4f4f5",muted:"#8e8e96",accent:"#2f7cf6",accentText:"#5aa2ff",onAccent:"#ffffff",radius:"10px",font:"'Inter', system-ui, sans-serif"}}],DEFAULT_THEME="graphite",THEME_IDS=THEMES.map(t4=>t4.id),isTheme=id=>THEME_IDS.includes(id),themeOf=id=>THEMES.find(t4=>t4.id===id)||THEMES.find(t4=>t4.id===DEFAULT_THEME),CATEGORY_COLORS=["#8b9cff","#60a5fa","#38bdf8","#22d3ee","#f472b6","#34d399","#fbbf24","#fb923c","#a3e635","#2dd4bf","#c084fc","#e879f9","#f87171","#94a3b8"];function catColor(color){let i3=CATEGORY_COLORS.indexOf(String(color||"").toLowerCase());return i3<0?color:`var(--cat-${i3+1})`}var TOKENS=["ink","ink2","text","text2","text3","muted","faint","soft","mint","teal","deep","on-mint","amber","coral","good","blue","glass","glass2","line","line2","mint-line","mint-wash","r","r2","r-ctl","font","font-display","h-weight","num-weight","track-tight","bg-base","bg-image","selection","scroll-thumb","card-bg","card-border","card-shadow","blur","raise","raise-border","hover","track","control","control-border","control-hover","field","chip-bg","chip-border","chip-text","accent-grad","glow","nav-bg","nav-border","nav-on-bg","nav-on-text","nav-on-ring","nav-radius","askbar-border","askbar-focus","askbar-shadow","askbar-radius","hero-bg","hero-border","plain-bg","fresh-bg","icon-bg","orb-bg","orb-glow","me-bg","me-text","bot-bg","tab-on-bg","tab-on-text","toggle-off","toggle-knob","toggle-on","toggle-knob-on","tint","letter-text","letter-bg","letter-ring","chart-line","chart-fill","chart-prev","chart-in","chart-out","chart-bar","chart-hot","chart-rest","chart-normal","hero-bar","mk-a","mk-b",...CATEGORY_COLORS.map((_3,i3)=>`cat-${i3+1}`)];var sample=(group,decimal)=>"123456".replace(/^(\d)(\d{3})(\d{2})$/,`$1${group}$2${decimal}$3`),NUMBER_FORMATS={"comma-dot":{group:",",decimal:".",label:sample(",",".")},"dot-comma":{group:".",decimal:",",label:sample(".",",")},"space-comma":{group:" ",decimal:",",label:sample(" ",",")},"apostrophe-dot":{group:"’",decimal:".",label:sample("’",".")},"comma-dot-in":{group:",",decimal:".",indian:!0,label:"12,34,567.89"}},DATE_FORMATS={"MM/dd/yyyy":"10/16/2026","dd/MM/yyyy":"16/10/2026","yyyy-MM-dd":"2026-10-16","MM.dd.yyyy":"10.16.2026","dd.MM.yyyy":"16.10.2026"},CURRENCIES={"":{symbol:"",label:"None (no symbol)"},USD:{symbol:"$",label:"US dollar ($)"},EUR:{symbol:"€",label:"Euro (€)"},GBP:{symbol:"£",label:"British pound (£)"},CAD:{symbol:"CA$",label:"Canadian dollar (CA$)"},AUD:{symbol:"A$",label:"Australian dollar (A$)"},JPY:{symbol:"¥",label:"Japanese yen (¥)"},CHF:{symbol:"CHF",label:"Swiss franc (CHF)"},MXN:{symbol:"MX$",label:"Mexican peso (MX$)"},INR:{symbol:"₹",label:"Indian rupee (₹)"}},WEEK_DAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],DEFAULT_DISPLAY=Object.freeze({numberFormat:"comma-dot",hideFraction:!1,dateFormat:null,firstDay:0,currency:"USD",symbolPosition:"before",symbolSpace:!1});var current=DEFAULT_DISPLAY;function setDisplay(d3){return current=Object.freeze({...DEFAULT_DISPLAY,...d3}),current}var hidden=!1,HIDDEN_AMOUNT="••••",setAmountsHidden=on=>(hidden=on===!0,hidden),amountsHidden=()=>hidden,scrub=text=>hidden&&typeof text=="string"?text.replace(/[-−+]?\$\d[\d,]*(\.\d+)?/g,HIDDEN_AMOUNT):text;function groupInteger(digits,fmt2){return fmt2.indian?digits.length<=3?digits:`${digits.slice(0,-3).replace(/\B(?=(\d{2})+(?!\d))/g,fmt2.group)}${fmt2.group}${digits.slice(-3)}`:digits.replace(/\B(?=(\d{3})+(?!\d))/g,fmt2.group)}function money(cents,{decimals=!1,sign=!1}={},d3=current){if(hidden)return HIDDEN_AMOUNT;let fmt2=NUMBER_FORMATS[d3.numberFormat],places=decimals&&!d3.hideFraction?2:0,scaled=Math.round(Math.abs(cents||0)/100*10**places),whole=String(Math.floor(scaled/10**places)),frac=places?String(scaled%10**places).padStart(places,"0"):"",number=groupInteger(whole,fmt2)+(places?fmt2.decimal+frac:""),symbol=CURRENCIES[d3.currency].symbol,body=symbol?d3.symbolPosition==="after"?`${number}${d3.symbolSpace?" ":""}${symbol}`:`${symbol}${d3.symbolSpace?" ":""}${number}`:number;return cents<0&&scaled!==0?`−${body}`:`${sign&&cents>0?"+":""}${body}`}function numericDate(ymd,d3=current){if(!d3.dateFormat||typeof ymd!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(ymd))return null;let[y3,m2,day2]=ymd.split("-"),sep=d3.dateFormat.includes("/")?"/":d3.dateFormat.includes(".")?".":"-";return d3.dateFormat.split(/[/.-]/).map(part=>part==="yyyy"?y3:part==="MM"?m2:day2).join(sep)}var html=htm_module_default.bind(k);function go(screen,params={}){let qs=new URLSearchParams(Object.entries(params).filter(([,v3])=>v3!=null)).toString();location.hash=`#/${screen}${qs?`?${qs}`:""}`}var ApiError=class extends Error{constructor(code,body){super(body?.error||`HTTP ${code}`),this.code=code,this.body=body}},transport=null,setApiTransport=fn=>{transport=fn};var WROTE="gb-wrote",UNDONE="gb-undone";async function api(path,body){if(transport)return transport(path,body);let res=await fetch(path,body===void 0?{}:{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(body)}),json=null;try{json=await res.json()}catch{}if(!res.ok)throw new ApiError(res.status,json);return body!==void 0&&path!=="/api/undo"&&dispatchEvent(new Event(WROTE)),json}var statusListeners=new Set,onNotReady=fn=>(statusListeners.add(fn),()=>statusListeners.delete(fn));function useData(path){let[state,setState]=d2({data:null,error:null,loading:!0}),load=j2(()=>{let live=!0;if(!path){setState({data:null,error:null,loading:!1});return}return setState(s3=>({...s3,loading:!0})),api(path).then(data=>live&&setState({data,error:null,loading:!1}),err=>{live&&(err.code===409&&statusListeners.forEach(fn=>fn(err.body?.status)),setState({data:null,error:err,loading:!1}))}),()=>{live=!1}},[path]);return A2(load,[load]),{...state,reload:load}}var chat={messages:[],online:null,reason:null,working:!1,archived:0,sending:null,fastUntil:0,failed:[],gen:0,loaded:!1,live:0,timer:null,polling:!1,listeners:new Set},snapshot=()=>({messages:chat.failed.length?[...chat.messages,...chat.failed]:chat.messages,pending:chat.sending,working:chat.working,online:chat.online,reason:chat.reason,archived:chat.archived}),emit=()=>chat.listeners.forEach(fn=>fn(snapshot()));function apply(r3){!r3||!Array.isArray(r3.messages)||(Object.assign(chat,{messages:r3.messages,online:r3.online,reason:r3.reason,working:!!r3.working,archived:r3.archived||0}),emit())}function schedule(){clearTimeout(chat.timer);let fast=chat.working||chat.sending||Date.now()<chat.fastUntil;!fast&&!chat.live||(chat.timer=setTimeout(poll,document.hidden?3e4:fast?2e3:1e4))}async function poll(){if(!chat.polling){chat.polling=!0;try{let gen=chat.gen,r3=await api("/api/chat");!chat.sending&&gen===chat.gen&&apply(r3)}catch{}chat.polling=!1,schedule()}}typeof document<"u"&&document.addEventListener("visibilitychange",()=>{!document.hidden&&chat.listeners.size&&poll()});function useChat({live=!1}={}){let[s3,set]=d2(snapshot);return A2(()=>(chat.listeners.add(set),set(snapshot()),live&&chat.live++,(!chat.loaded||live)&&(chat.loaded=!0,poll()),()=>{chat.listeners.delete(set),live&&chat.live--}),[live]),s3}async function askHelper(text){let q2=text.trim();if(!(!q2||chat.sending)){chat.sending=q2,chat.gen++,emit();try{apply(await api("/api/chat",{text:q2})),chat.fastUntil=Date.now()+2e4}catch(err){chat.failed=[...chat.failed,{id:`err-${Date.now()}`,role:"me",text:q2,source:"gupbudget"},{id:`err2-${Date.now()}`,role:"helper",notice:!0,text:err.code===503?err.message:`Couldn't send that (${err.message}).`}].slice(-10)}finally{chat.sending=null,emit(),schedule()}}}var pct=(frac,digits=0)=>`${(frac*100).toFixed(digits)}%`;function ago(ms){if(!ms)return"never";let min=Math.round((Date.now()-ms)/6e4);if(min<1)return"just now";if(min<60)return`${min} min ago`;let hr=Math.round(min/60);if(hr<24)return`${hr} hour${hr>1?"s":""} ago`;let d3=Math.round(hr/24);return`${d3} day${d3>1?"s":""} ago`}var LETTER_COLORS=[6,8,5,2,7,11,4,13,9].map(n3=>`var(--cat-${n3})`);function Letter({name,size=40}){let hsh=0;for(let ch2 of name||"?")hsh=hsh*31+ch2.charCodeAt(0)>>>0;let ch=((name||"?").match(/[A-Za-z0-9]/)||["?"])[0].toUpperCase();return html`<span class="lt" style=${{width:`${size}px`,height:`${size}px`,"--lt-c":LETTER_COLORS[hsh%LETTER_COLORS.length],fontSize:`${Math.round(size*.42)}px`}}>${ch}</span>`}function applyTheme(id){document.documentElement.dataset.theme=id}var P={home:'<path d="M4 11 12 4.5 20 11v8.5h-5.5v-5h-5v5H4z"/>',list:'<path d="M9 7h11M9 12h11M9 17h11"/><circle cx="4.8" cy="7" r=".9"/><circle cx="4.8" cy="12" r=".9"/><circle cx="4.8" cy="17" r=".9"/>',pie:'<path d="M12 3.5v8.5h8.5A8.5 8.5 0 1 1 12 3.5Z"/><path d="M15 3.8A8.5 8.5 0 0 1 20.2 9H15z"/>',repeat:'<path d="M17 3.5 20 6.5l-3 3"/><path d="M4 11.5v-1a4 4 0 0 1 4-4h12M7 20.5l-3-3 3-3"/><path d="M20 12.5v1a4 4 0 0 1-4 4H4"/>',spark:'<path d="M12 3.5c.6 3.9 2.6 5.9 6.5 6.5-3.9.6-5.9 2.6-6.5 6.5-.6-3.9-2.6-5.9-6.5-6.5 3.9-.6 5.9-2.6 6.5-6.5Z"/><path d="M18.5 15.5c.3 1.6 1 2.3 2.5 2.5-1.5.3-2.2 1-2.5 2.5-.3-1.5-1-2.2-2.5-2.5 1.5-.2 2.2-.9 2.5-2.5Z"/>',chart:'<path d="M4 20h16M7 20v-6M12 20V6M17 20v-9"/>',calendar:'<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 13.5a7.6 7.6 0 0 0 0-3l2-1.6-2-3.4-2.4 1a7.5 7.5 0 0 0-2.6-1.5L14 2.5h-4l-.4 2.5A7.5 7.5 0 0 0 7 6.5l-2.4-1-2 3.4 2 1.6a7.6 7.6 0 0 0 0 3l-2 1.6 2 3.4 2.4-1a7.5 7.5 0 0 0 2.6 1.5l.4 2.5h4l.4-2.5a7.5 7.5 0 0 0 2.6-1.5l2.4 1 2-3.4z"/>',bank:'<path d="M3.5 9.5 12 4.5l8.5 5M5 9.5v8M9.5 9.5v8M14.5 9.5v8M19 9.5v8M3.5 20h17"/>',search:'<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',chev:'<path d="m9 5.5 6.5 6.5L9 18.5"/>',left:'<path d="M15 5.5 8.5 12l6.5 6.5"/>',up:'<path d="M12 19V6M6.5 11.5 12 6l5.5 5.5"/>',down:'<path d="M12 5v13M6.5 12.5 12 18l5.5-5.5"/>',plus:'<path d="M12 5v14M5 12h14"/>',edit:'<path d="M4.5 19.5h4l10-10-4-4-10 10z"/><path d="m13 7 4 4"/>',eye:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',eyeoff:'<path d="M10 5.7a9.6 9.6 0 0 1 2-.2c6 0 9.5 6.5 9.5 6.5a17 17 0 0 1-2.6 3.4M6.5 7.2C3.9 8.9 2.5 12 2.5 12S6 18.5 12 18.5c1.6 0 3-.4 4.2-1.1M4 4l16 16"/><path d="M9.9 10a3 3 0 0 0 4.1 4.1"/>',alert:'<path d="M12 4 21 19.5H3z"/><path d="M12 10v4.5M12 17.2v.3"/>',check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',sync:'<path d="M20 11.5A8 8 0 0 0 5.5 7M4 12.5A8 8 0 0 0 18.5 17"/><path d="M5 3.5V7.5h4M19 20.5v-4h-4"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>',shield:'<path d="M12 3.5 19 6v5.5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>',wallet:'<path d="M4 7.5v10a2 2 0 0 0 2 2h14v-10H6a2 2 0 0 1-2-2Zm0 0a2 2 0 0 1 2-2h11v4"/><circle cx="16" cy="14.5" r="1"/>',info:'<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8v.4"/>',x:'<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',trend:'<path d="M3.5 16.5 9 11l3.5 3.5 8-8M15 6.5h5.5V12"/>',clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',flag:'<path d="M5.5 21V4M5.5 4.5h11l-2 4 2 4h-11"/>',swap:'<path d="M4 8h14l-3.5-3.5M20 16H6l3.5 3.5"/>',external:'<path d="M14 4.5h5.5V10M19.5 4.5 11 13M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"/>',folder:'<path d="M3.5 7a2 2 0 0 1 2-2h4l2 2.5h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/>',phone:'<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>',logout:'<path d="M14.5 4.5h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-3M10 16.5 5.5 12 10 7.5M5.5 12h10"/>',trash:'<path d="M4.5 7h15M9.5 7V4.5h5V7M6.5 7l1 12.5h9l1-12.5"/>',more:'<circle cx="5.5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="18.5" cy="12" r="1.3"/>',palette:'<path d="M12 3.5a8.5 8.5 0 0 0 0 17c1.3 0 1.8-1 1.3-2-.6-1.2.2-2.5 1.6-2.5H17a3.5 3.5 0 0 0 3.5-3.5c0-5-3.8-9-8.5-9Z"/><circle cx="7.8" cy="11" r="1"/><circle cx="10.5" cy="7.3" r="1"/><circle cx="15" cy="7.8" r="1"/>',help:'<circle cx="12" cy="12" r="8.5"/><path d="M9.7 9.5a2.4 2.4 0 1 1 3.3 2.3c-.6.3-1 .8-1 1.4v.4M12 16.8v.2"/>',doc:'<path d="M14 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-10z"/><path d="M14 3.5v5h5M8.5 13h7M8.5 16.5h4.5"/>',bell:'<path d="M6.5 9.5a5.5 5.5 0 1 1 11 0c0 5.5 2.3 7 2.3 7H4.2s2.3-1.5 2.3-7"/><path d="M10.2 19.5a1.9 1.9 0 0 0 3.6 0"/>',zap:'<path d="M13 3 5 13.5h6.5l-1 7.5 8-10.5H12z"/>',faceid:'<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><path d="M9 9v1.5M15 9v1.5M12 9v4.5h-1M9 16c1.8 1.3 4.2 1.3 6 0"/>',brain:'<path d="M9 4.5a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 4.5 3 3 0 0 0 6 1V6a1.9 1.9 0 0 0-3-1.5zM15 4.5a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 4.5 3 3 0 0 1-6 1"/>'};function Icon({name,size=18,sw=1.8,cls="",style}){return html`<svg class=${`ic ${cls}`} style=${style} viewBox="0 0 24 24" width=${size} height=${size} fill="none"
    stroke="currentColor" stroke-width=${sw} stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"
    dangerouslySetInnerHTML=${{__html:P[name]||""}} />`}function Donut({parts:parts2,size,thick,track="var(--track)",gap=1.2,children}){let r3=(size-thick)/2,c3=2*Math.PI*r3,total=parts2.reduce((s3,p3)=>s3+p3.value,0)||1,acc=0,segs=parts2.map((p3,i3)=>{let L3=p3.value/total*c3,el=html`<circle key=${i3} cx=${size/2} cy=${size/2} r=${r3} fill="none" style=${{stroke:catColor(p3.color)}}
      stroke-width=${thick} stroke-dasharray=${`${Math.max(L3-gap,.1)} ${c3}`} stroke-dashoffset=${-acc}
      transform=${`rotate(-90 ${size/2} ${size/2})`} />`;return acc+=L3,el});return html`<div style=${{position:"relative",width:`${size}px`,height:`${size}px`,flex:"none"}}>
    <svg width=${size} height=${size}><circle cx=${size/2} cy=${size/2} r=${r3} fill="none" style=${{stroke:track}} stroke-width=${thick} />${segs}</svg>
    <div style=${{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"}}>${children}</div>
  </div>`}function Ring({frac,size,thick,color,children}){let f3=Math.max(0,Math.min(frac||0,1));return html`<${Donut} size=${size} thick=${thick} gap=${0}
    parts=${[{value:f3,color},{value:1-f3,color:"transparent"}]}>${children}<//>`}function Bars({pairs,width,height,colorA,colorB}){let n3=pairs.length||1,gapX=14,max=Math.max(1,...pairs.flatMap(p3=>[p3.a,p3.b]))*1.05,gw=(width-gapX*(n3-1))/n3,bw=Math.min((gw-6)/2,40);return html`<svg width="100%" height=${height} viewBox=${`0 0 ${width} ${height}`}>
    ${pairs.map((p3,i3)=>{let x0=i3*(gw+gapX)+(gw-(bw*2+6))/2;return html`<g key=${i3}>
        ${[[p3.a,colorA],[p3.b,colorB]].map(([v3,col],j3)=>{let bh=v3/max*(height-24);return html`<rect x=${x0+j3*(bw+6)} y=${height-22-bh} width=${bw} height=${Math.max(bh,0)} rx="4" style=${{fill:col}} />`})}
        <text x=${i3*(gw+gapX)+gw/2} y=${height-4} text-anchor="middle" font-size="12" fill="currentColor" opacity=".6">${p3.label}</text>
      </g>`})}
  </svg>`}function DayBars({days,normal,width=420,height=190,color="var(--chart-bar)",label:label3}){let n3=days.length||1,top=22,max=Math.max(1,normal||0,...days.map(d3=>d3.spent))*1.05,slot=width/n3,bw=Math.min(slot-10,44),y3=v3=>height-24-Math.max(v3,0)/max*(height-24-top);return html`<svg width="100%" viewBox=${`0 0 ${width} ${height}`} role="img" aria-label=${label3||"Spending by day"} style="display:block;max-width:100%">
    ${normal!=null&&normal>0&&html`<line x1="0" x2=${width} y1=${y3(normal)} y2=${y3(normal)} style="stroke:var(--chart-normal)"
      stroke-dasharray="4 4" />`}
    ${days.map((d3,i3)=>{let cx=i3*slot+slot/2,hot=normal>0&&d3.spent>normal*2;return html`<g key=${i3}>
        <rect x=${cx-bw/2} y=${y3(d3.spent)} width=${bw} height=${Math.max(height-24-y3(d3.spent),d3.spent>0?2:0)} rx="5"
          style=${{fill:hot?"var(--chart-hot)":color}} />
        ${d3.spent>0&&html`<text x=${cx} y=${y3(d3.spent)-5} text-anchor="middle" font-size="11.5" font-weight="650" fill="currentColor">${money(d3.spent)}</text>`}
        <text x=${cx} y=${height-6} text-anchor="middle" font-size="12" fill="currentColor" opacity=".6">${d3.label}</text>
      </g>`})}
  </svg>`}function Loading({what="Loading"}){return html`<div class="loading"><div class="spin"></div>${what}…</div>`}function Failed({error,retry}){return html`<div class="card empty" style="flex:1">
    <b>That didn't load</b><span>${error?.message||"Something went wrong."}</span>
    ${retry&&html`<div class="acts"><button class="btn" onClick=${retry}>Try again</button></div>`}
  </div>`}function Toggle({on,onChange,label:label3,disabled}){return html`<button class=${`toggle${on?" on":""}`} role="switch" aria-checked=${on} aria-label=${label3}
    disabled=${disabled} onClick=${()=>onChange(!on)}><i></i></button>`}var root=typeof window>"u"?globalThis:window,handler=root.webkit?.messageHandlers?.gup,listeners={},seq=0;function call(op,args){return handler?Promise.resolve(handler.postMessage({...args||{},op})):Promise.reject(new Error("not in the app"))}async function request(msg,signal){let id=++seq,onAbort=()=>{call("cancel",{id}).catch(()=>{})};signal?.addEventListener("abort",onAbort,{once:!0});try{return await call("request",{...msg,id})}finally{signal?.removeEventListener("abort",onAbort)}}var native={available:!!handler,call,request,on(name,fn){return(listeners[name]=listeners[name]||[]).push(fn),()=>{listeners[name]=listeners[name].filter(f3=>f3!==fn)}}};root.GupNative={_event(name,data){(listeners[name]||[]).slice().forEach(fn=>{try{fn(data||{})}catch(e3){console.error(e3)}})}};var REPORT_ID=/^[A-Za-z0-9_-]{1,80}$/,MONTH=/^\d{4}-(0[1-9]|1[0-2])$/,NOT_HERE="That's only in GupBudget on your PC.",RETRY=new Set(["timeout","unreachable"]),notHere=()=>new ApiError(404,{error:NOT_HERE,reason:"not_on_phone"}),month=m2=>MONTH.test(m2||"")?m2:null,clientId=()=>`m${Date.now().toString(36)}${Math.random().toString(36).slice(2,12)}`;function waitingOf(counts={}){let r3=Math.max(0,Number(counts.requests)||0),q2=Math.max(0,Number(counts.questions)||0);return{total:r3+q2,counts:{budget_requests:r3,questions:q2},items:[...Array(r3).fill({kind:"budget-request"}),...Array(q2).fill({kind:"question"})]}}function phoneApi(pc2){let titles=new Map,remember=r3=>{for(let x2 of[...r3?.pending||[],...r3?.recent||[]])x2?.id&&titles.set(x2.id,String(x2.summary||""));return r3},chat2=r3=>r3&&typeof r3=="object"?{...r3,archived:0}:r3;async function send(text){let body={text:String(text??""),client_id:clientId()};try{return await pc2("/v1/chat",{body,timeoutMs:3e4})}catch(e3){if(e3?.status!==0||!RETRY.has(e3.reason))throw e3;return pc2("/v1/chat",{body,timeoutMs:3e4})}}async function get(path,q2){switch(path){case"/api/overview":return pc2("/v1/overview");case"/api/subscriptions":return pc2("/v1/subscriptions");case"/api/transactions":case"/api/budget":case"/api/summary":return pc2(`/v1/${path.slice(5)}`,{query:{month:month(q2.get("month"))}});case"/api/spend":return pc2("/v1/spend",{query:{id:q2.get("id")}});case"/api/reports":return pc2("/v1/reports");case"/api/reports/item":{let id=q2.get("id")||"";if(!REPORT_ID.test(id))throw new ApiError(404,{error:"No such report.",reason:"not_found"});return pc2(`/v1/reports/${id}`)}case"/api/analytics/meta":return pc2("/v1/analytics/meta");case"/api/analytics/run":return pc2("/v1/analytics/run",{query:{kind:q2.get("kind"),opts:q2.get("opts"),saved:q2.get("saved")}});case"/api/analytics/dashboard":return pc2("/v1/analytics/dashboard",{query:{id:q2.get("id")}});case"/api/helper/requests":return remember(await pc2("/v1/requests"));case"/api/helper/questions":return pc2("/v1/questions");case"/api/helper/log":return pc2("/v1/activity",{query:{limit:q2.get("limit")}});case"/api/helper/memory":return{facts:(await pc2("/v1/settings"))?.helper?.memory||[],where:null};case"/api/helper/waiting":return waitingOf((await pc2("/v1/status"))?.counts);case"/api/helper":{let[o3,s3]=await Promise.all([pc2("/v1/overview"),pc2("/v1/status")]),on=!!s3?.helper?.available;return{available:on,insights:on?o3?.insights||[]:[],model:null}}case"/api/budget/extras":return pc2("/v1/budget/extras",{query:{month:month(q2.get("month"))}});case"/api/settings":return pc2("/v1/tax");case"/api/categories":return pc2("/v1/categories");case"/api/categories/delete-preview":return pc2("/v1/categories/delete-preview",{query:{kind:q2.get("kind"),id:q2.get("id")}});case"/api/undo":return pc2("/v1/undo");case"/api/payees":return pc2("/v1/payees");case"/api/payee":return pc2("/v1/payee",{query:{id:q2.get("id")}});case"/api/tags":return pc2("/v1/tags");case"/api/filters":return pc2("/v1/filters");case"/api/rules":return pc2("/v1/rules");case"/api/schedules":return pc2("/v1/schedules");case"/api/accounts":return pc2("/v1/accounts");case"/api/accounts/reconcile":return pc2("/v1/accounts/reconcile",{query:{id:q2.get("id"),statement:q2.get("statement")}});case"/api/accounts/bank":return{ok:!1,error:"Linking an account to a bank is done in GupBudget on your PC."};case"/api/budgetfile":return pc2("/v1/budgetfile");case"/api/display":return{display:(await pc2("/v1/budgetfile"))?.display};case"/api/bank-sync":return pc2("/v1/bank-sync");case"/api/bank-sync/settings":return pc2("/v1/bank-sync/settings",{query:{id:q2.get("id")}});case"/api/chat":return chat2(await pc2("/v1/chat",{query:{last:200}}));case"/api/chat/archive":return{messages:[]};default:throw notHere()}}async function post(path,body){let b3=body&&typeof body=="object"?body:{};switch(path){case"/api/helper/requests/answer":{let id=String(b3.id||"");return pc2("/v1/requests/answer",{body:{id,answer:b3.answer},title:titles.get(id)||""})}case"/api/helper/questions/answer":return pc2("/v1/questions/answer",{body:b3});case"/api/spend/change":return pc2("/v1/spend/change",{body:b3});case"/api/chat":return chat2(await send(b3.text));case"/api/budget/change":return pc2("/v1/budget/change",{body:b3});case"/api/categories/change":return pc2("/v1/categories/change",{body:b3});case"/api/transactions/category":return pc2("/v1/transactions/category",{body:b3});case"/api/transactions/change":return pc2("/v1/transactions/change",{body:b3});case"/api/transactions/bulk":return pc2("/v1/transactions/bulk",{body:b3});case"/api/undo":return pc2("/v1/undo",{body:b3});case"/api/tax/setup":return pc2("/v1/tax/setup",{body:b3});case"/api/payees/change":return pc2("/v1/payees/change",{body:b3});case"/api/search":return pc2("/v1/search",{body:b3});case"/api/tags/change":return pc2("/v1/tags/change",{body:b3});case"/api/filters/change":return pc2("/v1/filters/change",{body:b3});case"/api/rules/match":return pc2("/v1/rules/match",{body:b3});case"/api/rules/change":return pc2("/v1/rules/change",{body:b3});case"/api/schedules/change":return pc2("/v1/schedules/change",{body:b3});case"/api/accounts/change":return pc2("/v1/accounts/change",{body:b3});case"/api/budgetfile/display":return pc2("/v1/budgetfile/display",{body:b3});case"/api/budgetfile/backup":return pc2("/v1/budgetfile/backup",{body:b3});case"/api/budgetfile/restore":return pc2("/v1/budgetfile/restore",{body:b3});case"/api/bank-sync/run":return pc2("/v1/bank-sync/run",{body:b3});default:throw notHere()}}return function(path,body){let u3=new URL(String(path),"http://phone.invalid");return u3.origin!=="http://phone.invalid"||!u3.pathname.startsWith("/api/")?Promise.reject(notHere()):body===void 0?get(u3.pathname,u3.searchParams):post(u3.pathname,body).then(r3=>(u3.pathname!=="/api/undo"&&typeof dispatchEvent=="function"&&dispatchEvent(new Event(WROTE)),r3))}}var WHY={locked:"GupBudget is locked.",not_paired:"This phone isn't paired with your PC yet.",timeout:"Your PC took too long to answer.",unreachable:"Can't reach your PC. Is it on, and is Tailscale on on this phone?",aborted:"Stopped.",bad_request:"The app asked for something your PC's API doesn't have.",cancelled:"Not confirmed, so nothing was decided.",failed:"Face ID didn't pass, so nothing was decided.",no_passcode:"Set a passcode on this iPhone first: decisions need Face ID or the passcode.",busy:"Another Face ID check is still open.",no_app:"Talking to your PC needs the GupBudget iPhone app.",refused:"The app refused that call (a bug in this build)."},PcError=class extends ApiError{constructor(status,reason,message,body=null){super(status,{...body||{},error:message,reason}),this.status=status,this.reason=reason,this.message=message}get quiet(){return this.reason==="cancelled"||this.reason==="aborted"}};function decisionOf(method,path,body){if(method!=="POST"||!body||typeof body!="object")return null;if(path==="/v1/requests/answer"&&["approve","always","no"].includes(body.answer))return{key:`request:${body.id}`,action:body.answer,sendsConfirm:!0};if(path==="/v1/settings/helper"&&typeof body.on=="boolean"){if(body.permission!=null)return{key:`permission:${body.permission}`,action:body.on?"on":"off",sendsConfirm:body.on};if(body.grant!=null)return{key:`grant:${body.grant}`,action:body.on?"on":"revoke",sendsConfirm:!1}}return null}var mode=native.available?"native":"none",mockBase=null,devConfirm=null,clockOffset=0,lost=new Set,linkMode=()=>mode,onUnauthorized=fn=>(lost.add(fn),()=>lost.delete(fn));function startMock(search,confirm2){if(native.available)return!1;let port=Number(new URLSearchParams(search).get("mock"));return!Number.isInteger(port)||port<1024||port>65535?!1:(mode="mock",mockBase=`http://127.0.0.1:${port}`,devConfirm=confirm2,!0)}async function pc(path,{method,body,query,title,timeoutMs=15e3,signal}={}){method=method||(body===void 0?"GET":"POST");let q2=Object.fromEntries(Object.entries(query||{}).filter(([,v3])=>v3!=null).map(([k3,v3])=>[k3,String(v3)])),r3;if(mode==="native"){let msg={method,path,query:q2,timeoutMs,title:title?String(title).slice(0,120):""};body!==void 0&&(msg.body=JSON.stringify(body));try{r3=await native.request(msg,signal)}catch(e3){let reason2=e3?.message==="locked"?"locked":"refused";throw new PcError(0,reason2,WHY[reason2])}if(!r3||r3.error){let reason2=r3?.error||"unreachable";throw new PcError(0,reason2,WHY[reason2]||WHY.unreachable)}}else if(mode==="mock"){body&&typeof body=="object"&&!decisionOf(method,path,body)&&(body={...body},delete body.confirm),r3=await mockCall(method,path,q2,body,title,timeoutMs,signal);let hint=r3.status===428?riskHint(r3.body):null;if(hint){if(!(devConfirm?await devConfirm({key:hint.key,action:hint.action,title:hint.title}):!1))throw new PcError(0,"cancelled",WHY.cancelled);let confirm2={key:hint.key,action:hint.action,method:"passcode",at:new Date(Date.now()+clockOffset).toISOString().replace(/\.\d+Z$/,"+00:00")};r3=await mockCall(method,path,q2,{...body,confirm:confirm2},title,timeoutMs,signal,!0)}}else throw new PcError(0,"no_app",WHY.no_app);let json=null;try{json=r3.body?JSON.parse(r3.body):null}catch{}if(r3.status>=200&&r3.status<300)return path==="/v1/status"&&json?.serverTime&&(clockOffset=Date.parse(json.serverTime)-Date.now()),json;let err=json?.error&&typeof json.error=="object"?json.error:{};r3.status===401&&lost.forEach(fn=>{try{fn()}catch(e3){console.error(e3)}});let reason=typeof err.code=="string"?err.code:`http_${r3.status}`,message=typeof err.message=="string"?err.message:`Your PC answered HTTP ${r3.status}.`;throw new PcError(r3.status,reason,message,json&&typeof json=="object"?json:null)}function riskHint(text){try{let e3=JSON.parse(text)?.error;return e3?.code==="confirmation_required"&&typeof e3.confirm?.key=="string"&&e3.confirm.key.startsWith("risk:")?e3.confirm:null}catch{return null}}async function mockCall(method,path,query,body,title,timeoutMs,signal,checked=!1){if(!/^\/v1\/[A-Za-z0-9/_-]+$/.test(path)||path.includes("//"))throw new PcError(0,"bad_request",WHY.bad_request);let d3=checked?null:decisionOf(method,path,body);if(d3){if(!(devConfirm?await devConfirm({...d3,title}):!1))throw new PcError(0,"cancelled",WHY.cancelled);body={...body},d3.sendsConfirm&&(body.confirm={key:d3.key,action:d3.action,method:"passcode",at:new Date(Date.now()+clockOffset).toISOString().replace(/\.\d+Z$/,"+00:00")})}let qs=new URLSearchParams(query).toString(),ctl2=new AbortController,timer=setTimeout(()=>ctl2.abort(),timeoutMs),stop=()=>ctl2.abort();signal?.addEventListener("abort",stop,{once:!0});try{let res=await fetch(`${mockBase}${path}${qs?`?${qs}`:""}`,{method,signal:ctl2.signal,redirect:"error",headers:{authorization:"Bearer mock",accept:"application/json",...body!==void 0?{"content-type":"application/json"}:{}},body:body!==void 0?JSON.stringify(body):void 0});return{status:res.status,body:await res.text()}}catch{throw signal?.aborted?new PcError(0,"aborted",WHY.aborted):new PcError(0,ctl2.signal.aborted?"timeout":"unreachable",ctl2.signal.aborted?WHY.timeout:WHY.unreachable)}finally{clearTimeout(timer),signal?.removeEventListener("abort",stop)}}setApiTransport(phoneApi(pc));var FACE_ID=html`<svg viewBox="0 0 64 64" width="72" height="72" fill="none" stroke="currentColor" stroke-width="3.2"
  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M6 20V12a6 6 0 0 1 6-6h8M44 6h8a6 6 0 0 1 6 6v8M58 44v8a6 6 0 0 1-6 6h-8M20 58h-8a6 6 0 0 1-6-6v-8"/>
  <path d="M22 24v5M42 24v5M32 24v13h-3M24 44c4.5 4 11.5 4 16 0"/></svg>`,NAME={face_id:"Face ID",touch_id:"Touch ID",none:"your passcode"},LOOK={face_id:"Look at your iPhone to unlock",touch_id:"Touch the sensor to unlock",none:"Enter your passcode to unlock"};function LockScreen({info}){let[waiting,setWaiting]=d2(null),bio=NAME[info.biometry]?info.biometry:"face_id",state=info.state||"idle";A2(()=>{let live=!0,peek=()=>{document.hidden||native.call("lock.peek").then(r3=>live&&setWaiting(typeof r3?.waiting=="number"?r3.waiting:null),()=>{})};return peek(),document.addEventListener("visibilitychange",peek),()=>{live=!1,document.removeEventListener("visibilitychange",peek)}},[]);let unlock=passcode=>{state!=="checking"&&native.call("unlock",{passcode}).catch(()=>{})},hint={checking:"Checking…",cancelled:"Tap to unlock",failed:"Didn't match. Tap to try again",no_passcode:"Set a passcode on this iPhone first"}[state]||LOOK[bio];return html`<main class="m-lock" data-state=${state}>
    <div class="m-lock-top">
      <span class="m-logo"><${Icon} name="wallet" size=${30} sw=${2} /></span>
      <h1>GupBudget</h1>
      <p class="m-lock-sub"><${Icon} name="lock" size=${15} />Locked</p>
    </div>
    <button class="m-faceid" aria-label=${bio==="none"?"Unlock with the passcode":`Unlock with ${NAME[bio]}`}
      onClick=${()=>unlock(bio==="none")}>${bio==="face_id"?FACE_ID:html`<${Icon} name="lock" size=${58} sw=${1.6} />`}</button>
    <p class=${`m-lock-hint${state==="failed"||state==="no_passcode"?" bad":""}`}>${hint}</p>
    ${waiting!==null&&html`<p class="m-lock-pill">${waiting?html`<span class="dot warn"></span>${waiting} waiting for you`:html`<span class="dot"></span>Nothing waiting`}</p>`}
    <button class="m-link" onClick=${()=>state==="no_passcode"?native.call("settings").catch(()=>{}):unlock(!0)}>
      ${state==="no_passcode"?"Open Settings":"Use passcode"}</button>
  </main>`}var TORCH=html`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"
  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2.5 5.5 13.5H12l-1 8 7.5-11H12z"/></svg>`;function Pairing({mode:mode2,onPaired,onClose}){let[s3,setS]=d2({state:mode2==="code"?"code":"starting"}),[torch,setTorch]=d2(!1),done=T2(null),now=T2(s3.state);now.current=s3.state,A2(()=>{let live=!0,timer=null;document.activeElement?.blur?.();let off=native.on("pair",e3=>{live&&(e3.state==="checking"?setS({state:"checking",host:e3.host}):e3.state==="failed"?setS({state:"failed",title:e3.title,message:e3.message}):e3.state==="paired"&&(done.current=e3,setS({state:"paired",host:e3.host,rtt:e3.rtt}),document.documentElement.classList.remove("camera"),timer=setTimeout(()=>live&&onPaired(e3),1100)))}),startCamera=()=>native.call("pair.start").then(r3=>{!live||done.current||r3?.error==="stopped"||(r3?.ok?(document.documentElement.classList.add("camera"),setS(x2=>x2.state==="starting"||x2.state==="denied"||x2.state==="nocamera"?{state:"scanning"}:x2)):setS({state:r3?.error==="denied"?"denied":"nocamera"}))},()=>live&&setS({state:"nocamera"}));mode2==="code"?native.call("pair.enter").catch(()=>{}):startCamera();let back=()=>{!document.hidden&&mode2!=="code"&&(now.current==="denied"||now.current==="nocamera")&&startCamera()};return document.addEventListener("visibilitychange",back),()=>{live=!1,off(),clearTimeout(timer),document.removeEventListener("visibilitychange",back),document.documentElement.classList.remove("camera"),native.call("pair.stop").catch(()=>{})}},[]);let toggleTorch=async()=>{try{setTorch(!!(await native.call("pair.torch",{on:!torch})).on)}catch{setTorch(!1)}},close=()=>done.current?onPaired(done.current):onClose(),card={starting:["busy","Starting the camera…",""],scanning:["","Point the camera at the QR code","On your PC: GupBudget › Settings › Phones › Pair a phone"],code:["","Type the PC address and the code","Both are under the QR code in Settings › Phones on your PC"],checking:["busy",`Checking the code with ${s3.host||"your PC"}…`,"Over Tailscale, straight to your PC"],paired:["ok",`Paired with ${s3.host||"your PC"}`,`Tailscale · ${Number(s3.rtt)||0} ms · key saved on this iPhone`],failed:["bad",s3.title||"That didn't work",s3.message||"Scan the code again."],denied:["warn","The camera is off for GupBudget","Allow it in Settings, or enter the code instead"],nocamera:["warn","No camera here","Enter the code instead"]}[s3.state],scanning=mode2!=="code"&&s3.state!=="paired";return html`<div class="m-pair" data-state=${s3.state}>
    <div class="m-pair-bar">
      <button class="m-round" aria-label="Close" onClick=${close}><${Icon} name="x" size=${22} /></button>
      ${scanning&&html`<button class=${`m-round${torch?" on":""}`} aria-label="Torch" onClick=${toggleTorch}>${TORCH}</button>`}
    </div>
    ${scanning&&html`<div class="m-finder" aria-hidden="true"><i></i><i></i><i></i><i></i></div>`}
    <div class="m-pair-bottom">
      <section class=${`m-card m-pair-card ${card[0]}`} role="status">
        <span class="m-pair-icon">${card[0]==="busy"?html`<span class="m-spin"></span>`:html`<${Icon} name=${card[0]==="ok"?"check":card[0]==="bad"?"x":card[0]==="warn"?"alert":"phone"} size=${20} />`}</span>
        <div><b>${card[1]}</b>${card[2]&&html`<p>${card[2]}</p>`}</div>
      </section>
      ${s3.state==="denied"&&html`<button class="m-btn" onClick=${()=>native.call("settings").catch(()=>{})}>Open Settings</button>`}
      ${s3.state!=="paired"&&s3.state!=="checking"&&html`<button class=${mode2==="code"?"m-btn pri":"m-btn"}
        onClick=${()=>native.call("pair.enter").catch(()=>{})}>${mode2==="code"?"Enter the code":"Enter code instead"}</button>`}
    </div>
  </div>`}var MONTHS=["January","February","March","April","May","June","July","August","September","October","November","December"],DAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],pad=n3=>String(n3).padStart(2,"0"),parts=s3=>s3.split("-").map(Number);function localToday(d3=new Date){return`${d3.getFullYear()}-${pad(d3.getMonth()+1)}-${pad(d3.getDate())}`}function addMonths(month2,n3){let[y3,m2]=parts(month2),d3=new Date(y3,m2-1+n3,1);return`${d3.getFullYear()}-${pad(d3.getMonth()+1)}`}function addDays(date,n3){let[y3,m2,d3]=parts(date);return localToday(new Date(y3,m2-1,d3+n3))}function daysInMonth(month2){let[y3,m2]=parts(month2);return new Date(y3,m2,0).getDate()}var dayOfMonth=date=>Number(date.slice(8,10)),monthName=month2=>MONTHS[parts(month2)[1]-1],monthShort=month2=>monthName(month2).slice(0,3),monthLabel=month2=>`${monthName(month2)} ${month2.slice(0,4)}`;function weekday(date){let[y3,m2,d3]=parts(date);return DAYS[new Date(y3,m2-1,d3).getDay()]}var shortDate=date=>`${monthShort(date.slice(0,7))} ${dayOfMonth(date)}`,longDate=date=>`${weekday(date)}, ${monthName(date.slice(0,7))} ${dayOfMonth(date)}`;function dayLabel(date,today2){if(date===today2)return"Today";if(date===addDays(today2,-1))return"Yesterday";let numeric=numericDate(date);return numeric||(date.slice(0,4)===today2.slice(0,4)?shortDate(date):`${shortDate(date)}, ${date.slice(0,4)}`)}var weekdayShort=date=>`${weekday(date).slice(0,3)}, ${shortDate(date)}`;var REQUESTS_CHANGED="gb-requests-changed";var TXN_DONE={changeTransaction:"Done: the transaction is changed in Actual.",deleteTransaction:"Done: deleted in Actual.",makeTransfer:"Done: recorded as a move between your accounts in Actual (nothing moved at a bank).",undoTransfer:"Done: it is a plain transaction again in Actual."},LIST_DONE={deleteRule:"Done: the rule is deleted in Actual.",applyRule:"Done: the rule was run on the transactions already there.",mergePayees:"Done: the payees are merged in Actual.",deletePayee:"Done: the payee is deleted in Actual.",deleteSchedule:"Done: the schedule is deleted in Actual.",deleteTag:"Done: the tag is deleted in Actual.",mergeTransactions:"Done: the two transactions are merged in Actual (nothing moved at a bank)."},ACCOUNT_DONE={setAccountBudgetSide:"Done: the account is moved in Actual.",closeAccount:"Done: the account is closed in Actual.",deleteAccount:"Done: the account is deleted in Actual.",unlinkAccountBank:"Done: bank sync is stopped for that account (what was already here stays).",lockReconciled:"Done: the cleared transactions are locked as reconciled.",addReconcileAdjustment:"Done: the adjustment is added.",unlockTransactions:"Done: the transactions are unlocked."},BUDGET_DONE={fillMonth:"Done: the month's plan is filled in Actual.",applyTemplates:"Done: the month's plan is filled from the templates in Actual.",setBudgetType:"Done: the budget type is switched in Actual."},GROUP="categorizeGroup",EVERY_TIME=new Set([GROUP,"deleteCategory","deleteGroup",...Object.keys(TXN_DONE),...Object.keys(LIST_DONE),...Object.keys(ACCOUNT_DONE),...Object.keys(BUDGET_DONE)]);function useUndo(onChanged){let[toast,setToast]=d2(null),seen=T2(void 0),busy=T2(!1),timer=T2(null),show2=t4=>{setToast(t4),clearTimeout(timer.current),timer.current=setTimeout(()=>setToast(null),t4.kind==="bad"?9e3:1e4)},look=j2(async()=>{let s3;try{s3=await api("/api/undo")}catch{return}let top=s3?.undo||null,first=seen.current===void 0,fresh=top&&top.id!==seen.current;seen.current=top?.id??null,!first&&fresh&&top.undoable&&show2({kind:"undo",text:top.summary,id:top.id})},[]),act=j2(async(dir,id=null)=>{if(!busy.current){busy.current=!0;try{let r3=await api("/api/undo",{...dir==="redo"?{redo:!0}:{},...id?{id}:{}});seen.current=r3.state?.undo?.id??null,r3.result?.ok?(show2(dir==="undo"?{kind:"redo",text:r3.result.summary}:{kind:"undo",text:r3.result.summary,id:r3.state?.undo?.id}),onChanged()):show2({kind:"bad",text:r3.result?.error||"Couldn't do that."})}catch(err){show2({kind:"bad",text:err.message})}finally{busy.current=!1}}},[onChanged]);return A2(()=>{look();let t4=null,onWrote=()=>{clearTimeout(t4),t4=setTimeout(look,300)},onUndone=async()=>{try{seen.current=(await api("/api/undo"))?.undo?.id??null}catch{}onChanged()};return addEventListener(WROTE,onWrote),addEventListener(UNDONE,onUndone),()=>{removeEventListener(WROTE,onWrote),removeEventListener(UNDONE,onUndone),clearTimeout(t4),clearTimeout(timer.current)}},[look,onChanged]),{toast,dismiss:()=>setToast(null),undo:()=>act("undo"),redo:()=>act("redo"),act}}function UndoToast({toast,undo,redo,dismiss}){return toast?html`<div class=${`toast${toast.kind==="bad"?" bad":""}`} role="status" aria-live="polite">
    <span class="toasttext">${toast.text}</span>
    ${toast.kind==="undo"&&html`<button class="btn small" onClick=${undo}>Undo</button>`}
    ${toast.kind==="redo"&&html`<button class="btn small" onClick=${redo}>Redo</button>`}
    <button class="iconbtn" aria-label="Dismiss" onClick=${dismiss}><${Icon} name="x" size=${13} sw=${2} /></button>
  </div>`:null}function TaxEditor({d:d3,onChanged}){let[rate,setRate]=d2(null),[busy,setBusy]=d2(!1),[msg,setMsg]=d2(null),s3=d3.settings,savingIds=d3.groups.filter(g3=>s3.savingGroupIds?s3.savingGroupIds.includes(g3.id):g3.saving).map(g3=>g3.id),change2=async(action,args)=>{setBusy(!0),setMsg(null);try{let r3=await api("/api/tax/setup",{action,args});r3.result?.ok?await onChanged?.():setMsg(r3.result?.error||"That didn't change.")}catch(err){setMsg(`Couldn't save that: ${err.message}`)}finally{setBusy(!1),setRate(null)}},typed=rate??s3.taxRate,auto=d3.taxAccount&&!s3.taxAccountId?d3.accounts.find(a3=>a3.id===d3.taxAccount)?.name:null;return html`<div class="taxedit">
    <div class="setrow"><div class="what">Tax set-aside rate<small>Share of money in to set aside for taxes. 0 turns the tax card off.</small></div>
      <input class="field num" type="number" min="0" max="60" step="0.5" value=${typed} style="width:84px;text-align:right"
        aria-label="Tax rate in percent" disabled=${busy} onInput=${e3=>setRate(e3.target.value)}
        onKeyDown=${e3=>e3.key==="Enter"&&Number(typed)!==s3.taxRate&&change2("setTaxRate",{rate:typed})} /><span class="muted">%</span>
      <button class="btn small" disabled=${busy||rate===null||Number(typed)===s3.taxRate} onClick=${()=>change2("setTaxRate",{rate:typed})}>Save</button></div>
    <div class="setrow"><div class="what">Tax account<small>Where you move the tax money.</small></div>
      <select class="field" value=${s3.taxAccountId||""} aria-label="Tax account" disabled=${busy}
        onChange=${e3=>change2("setTaxAccount",{accountId:e3.target.value||null})}>
        <option value="">${auto?`Automatic (${auto})`:'Automatic (an account named "tax")'}</option>
        ${d3.accounts.map(a3=>html`<option value=${a3.id}>${a3.name}</option>`)}
      </select></div>
    <div class="what" style="margin-top:12px">Saving, not spending
      <small>Category groups picked here count as money you put aside, so they're left out of "left to spend".</small></div>
    <div class="groupchips">${d3.groups.map(g3=>html`<button class=${savingIds.includes(g3.id)?"on":""}
      aria-pressed=${savingIds.includes(g3.id)} disabled=${busy}
      onClick=${()=>change2("setSavingGroups",{groupIds:savingIds.includes(g3.id)?savingIds.filter(x2=>x2!==g3.id):[...savingIds,g3.id]})}>
      ${g3.name}</button>`)}</div>
    ${!d3.groups.length&&html`<div class="muted">No category groups yet.</div>`}
    ${(s3.taxAccountId||Array.isArray(s3.savingGroupIds))&&html`<div class="row" style="margin-top:8px;gap:8px;flex-wrap:wrap">
      ${s3.taxAccountId&&html`<button class="btn small" disabled=${busy} onClick=${()=>change2("setTaxAccount",{accountId:null})}>Find the tax account by name</button>`}
      ${Array.isArray(s3.savingGroupIds)&&html`<button class="btn small" disabled=${busy} onClick=${()=>change2("setSavingGroups",{groupIds:null})}>Pick saving groups by name</button>`}
    </div>`}
    ${msg&&html`<div class="bad" role="alert" style="font-size:13px;margin-top:8px"><${Icon} name="alert" size=${13} /> ${msg}</div>`}
    <div class="muted" style="font-size:12.5px;margin-top:8px">The helper can change the account and the saving groups, and asks you before a new rate.
      Every change is logged in Helper activity.</div>
  </div>`}function InsightCard({ins,glow}){let icon={bad:"alert",warn:"alert",good:"trend",info:"info"}[ins.tone]||"info",color={bad:"var(--coral)",warn:"var(--amber)",good:"var(--good)",info:"var(--blue)"}[ins.tone];return html`<div class=${`ins${glow?" glow":""}`}>
    <div class="t"><${Icon} name=${icon} size=${18} style=${{color}} />${scrub(ins.title)}</div>
    <div class="b">${scrub(ins.body)}</div>
    ${ins.action&&html`<a class="a" href=${`#/${ins.action.to}`}>${ins.action.label}<${Icon} name="chev" size=${14} sw=${2.2} /></a>`}
  </div>`}var FREQUENCIES=[["daily","day"],["weekly","week"],["monthly","month"],["yearly","year"]],END_MODES=[["never","Never"],["after_n_occurrences","After a number of times"],["on_date","On a date"]],AMOUNT_OPS=[["isapprox","about"],["is","exactly"],["isbetween","between"]];var isRecurring=date=>!!date&&typeof date=="object"&&typeof date.frequency=="string";var plural=(n3,one,many=`${one}s`)=>`${n3} ${n3===1?one:many}`;async function listChange(kind,action,args,preview=!1){try{return(await api(`/api/${{schedule:"schedules",rule:"rules",tag:"tags",filter:"filters",txn:"transactions",account:"accounts",budget:"budget"}[kind]||"payees"}/change`,{action,args,...preview?{preview:!0}:{}})).result}catch(err){return{ok:!1,error:err.message}}}function IconBtn({name,label:label3,onClick,disabled}){return html`<button type="button" class="iconbtn" title=${label3} aria-label=${label3} disabled=${disabled} onClick=${onClick}>
    <${Icon} name=${name} size=${15} sw=${2} /></button>`}function Confirm({title,action,args,kind,button="Delete",icon="trash",note,busy,onDone,onCancel}){let[p3,setP]=d2(null),[working,setWorking]=d2(!1),[err,setErr]=d2(null);A2(()=>{let live=!0;return listChange(kind,action,args,!0).then(r3=>live&&setP(r3)),()=>{live=!1}},[kind,action,JSON.stringify(args)]);let go2=async()=>{setWorking(!0),setErr(null);let r3=await listChange(kind,action,args);setWorking(!1),r3.ok?onDone(r3):setErr(r3.error)};return html`<div class="cedpanel" role="group" aria-label=${title}>
    <b>${title}</b>
    ${!p3&&html`<div class="muted">Checking what it would do…</div>`}
    ${p3&&!p3.ok&&html`<div class="bad">${p3.error}</div>`}
    ${p3?.ok&&html`<div>${p3.summary}</div>`}
    ${note&&html`<div class="muted" style="font-size:12.5px">${note}</div>`}
    ${err&&html`<div class="bad" role="status">That didn't work: ${err}</div>`}
    <div class="cedform">
      <button class=${`btn small${icon==="trash"?" danger":" pri"}`} disabled=${busy||working||!p3?.ok} onClick=${go2}>
        <${Icon} name=${icon} size=${14} />${button}</button>
      <button class="btn small" onClick=${onCancel}>Cancel</button>
    </div>
  </div>`}var plural2=(n3,one,many=`${one}s`)=>`${n3} ${n3===1?one:many}`;function IconBtn2({name,label:label3,onClick,disabled}){return html`<button type="button" class="iconbtn" title=${label3} aria-label=${label3} disabled=${disabled} onClick=${onClick}>
    <${Icon} name=${name} size=${15} sw=${2} /></button>`}function NameForm({value="",placeholder,button,busy,onSave,onCancel,children}){let[v3,setV]=d2(value);return html`<form class="cedform" onSubmit=${e3=>{e3.preventDefault(),v3.trim()&&onSave(v3.trim())}}>
    <input class="field" value=${v3} maxlength="50" placeholder=${placeholder} aria-label=${placeholder} autofocus
      onInput=${e3=>setV(e3.target.value)} onKeyDown=${e3=>e3.key==="Escape"&&onCancel()} />
    ${children}
    <button class="btn small pri" type="submit" disabled=${busy||!v3.trim()||v3.trim()===value}>${button}</button>
    <button class="btn small" type="button" onClick=${onCancel}>Cancel</button>
  </form>`}function DeletePanel({del,groups,busy,onDelete,onCancel}){let action=del.kind==="group"?"deleteGroup":"deleteCategory",args=del.kind==="group"?{groupId:del.id}:{categoryId:del.id},{data:p3,error,loading}=useData(`/api/categories/delete-preview?${new URLSearchParams({kind:del.kind,id:del.id})}`),[to,setTo]=d2(""),leaving=new Set(del.kind==="group"?groups.find(g3=>g3.id===del.id)?.categories.map(c3=>c3.id)||[]:[del.id]),targets=groups.filter(g3=>g3.income===del.income).map(g3=>({...g3,categories:g3.categories.filter(c3=>!leaving.has(c3.id)&&!c3.hidden)})).filter(g3=>g3.categories.length),u3=p3?.usage,inside=del.kind==="group"?groups.find(g3=>g3.id===del.id)?.categories||[]:[];return html`<div class="cedpanel" role="group" aria-label=${`Delete ${del.name}`}>
    <b>Delete ${del.kind==="group"?"the group":""} ${del.name}?</b>
    ${inside.length>0&&html`<div>Its ${plural2(inside.length,"category","categories")} go too: ${inside.map(c3=>c3.name).join(", ")}.</div>`}
    ${loading&&!p3&&html`<div class="muted">Looking at what's in it…</div>`}
    ${(error||p3?.ok===!1)&&html`<div class="bad">${error?.message||p3.error}</div>`}
    ${u3&&(u3.needsTarget?html`<div>${`${del.kind==="group"?"Its categories have":"It has"} ${[u3.transactions&&plural2(u3.transactions,"transaction"),u3.months&&`${money(u3.planned,{decimals:!0})} planned over ${plural2(u3.months,"month")}`].filter(Boolean).join(" and ")}. Where should they go?`}</div>`:html`<div class="muted">Nothing is filed or planned in it.</div>`)}
    ${u3&&html`<div class="cedform">
      <select class="field" value=${to} onChange=${e3=>setTo(e3.target.value)} aria-label="Move them to">
        <option value="">${u3.needsTarget?"Pick a category…":"Nowhere (nothing to move)"}</option>
        ${targets.map(g3=>html`<optgroup label=${g3.name}>${g3.categories.map(c3=>html`<option value=${c3.id}>${c3.name}</option>`)}</optgroup>`)}
      </select>
      <button class="btn small danger" disabled=${busy||u3.needsTarget&&!to} onClick=${()=>onDelete(action,{...args,transferTo:to||null})}>
        <${Icon} name="trash" size=${14} />Delete</button>
      <button class="btn small" onClick=${onCancel}>Cancel</button>
    </div>
    <div class="muted" style="font-size:12.5px">${u3.needsTarget?"Its transactions are filed in the category you pick and its planned money goes with them. ":""}No real money moves.</div>`}
  </div>`}function CategoryEditor({onDone,onChanged}){let{data,error,loading,reload}=useData("/api/categories"),[groups,setGroups]=d2(null),[busy,setBusy]=d2(!1),[msg,setMsg]=d2(null),[edit,setEdit]=d2(null),[del,setDel]=d2(null);if(loading&&!data)return html`<${Loading} />`;if(error)return html`<${Failed} error=${error} retry=${reload} />`;let list2=groups||data.groups,change2=async(action,args)=>{setBusy(!0),setMsg(null);try{let r3=await api("/api/categories/change",{action,args});setGroups(r3.groups),r3.result.ok?(setMsg({good:!0,text:`Done: ${r3.result.summary}.`}),setEdit(null),setDel(null),onChanged?.()):setMsg({good:!1,text:`That didn't work: ${r3.result.error}`})}catch(err){setMsg({good:!1,text:`That didn't work: ${err.message}`})}finally{setBusy(!1)}},is=(kind,id)=>edit?.kind===kind&&edit.id===id,spending=list2.filter(g3=>!g3.income),income=list2.filter(g3=>g3.income),group=(g3,kind)=>{let at=kind.indexOf(g3);return html`<div class=${`cedgroup${g3.hidden?" hid":""}`} key=${g3.id}>
      <div class="cedhead">
        ${is("rename-group",g3.id)?html`<${NameForm} value=${g3.name} placeholder="Group name" button="Rename" busy=${busy}
            onSave=${name=>change2("renameGroup",{groupId:g3.id,name})} onCancel=${()=>setEdit(null)} />`:html`<b>${g3.name}</b>
            ${g3.income&&html`<span class="pill good">Income</span>`}${g3.saving&&html`<span class="pill dim">Saving</span>`}
            ${g3.hidden&&html`<span class="pill dim">Hidden</span>`}
            <span class="cedacts">
              <${IconBtn2} name="up" label=${`Move ${g3.name} up`} disabled=${busy||at===0} onClick=${()=>change2("moveGroup",{groupId:g3.id,beforeId:kind[at-1].id})} />
              <${IconBtn2} name="down" label=${`Move ${g3.name} down`} disabled=${busy||at===kind.length-1}
                onClick=${()=>change2("moveGroup",{groupId:g3.id,beforeId:kind[at+2]?.id||null})} />
              <${IconBtn2} name="edit" label=${`Rename ${g3.name}`} disabled=${busy} onClick=${()=>setEdit({kind:"rename-group",id:g3.id})} />
              <${IconBtn2} name=${g3.hidden?"eye":"eyeoff"} label=${`${g3.hidden?"Show":"Hide"} ${g3.name}`} disabled=${busy}
                onClick=${()=>change2("hideGroup",{groupId:g3.id,hidden:!g3.hidden})} />
              <${IconBtn2} name="trash" label=${`Delete ${g3.name}`} disabled=${busy||g3.income&&income.length===1}
                onClick=${()=>setDel({kind:"group",id:g3.id,name:g3.name,income:g3.income})} />
            </span>`}
      </div>
      ${del?.kind==="group"&&del.id===g3.id&&html`<${DeletePanel} del=${del} groups=${list2} busy=${busy} onDelete=${change2} onCancel=${()=>setDel(null)} />`}
      ${g3.categories.map((c3,i3)=>html`<div key=${c3.id}>
        <div class=${`cedrow${c3.hidden?" hid":""}`}>
          ${is("rename-cat",c3.id)?html`<${NameForm} value=${c3.name} placeholder="Category name" button="Rename" busy=${busy}
              onSave=${name=>change2("renameCategory",{categoryId:c3.id,name})} onCancel=${()=>setEdit(null)} />`:is("move-cat",c3.id)?html`<div class="cedform"><span>${c3.name} goes to</span>
                <select class="field" aria-label=${`Move ${c3.name} to another group`} disabled=${busy}
                  onChange=${e3=>e3.target.value&&change2("moveCategory",{categoryId:c3.id,groupId:e3.target.value,beforeId:null})}>
                  <option value="">Pick a group…</option>
                  ${list2.filter(x2=>x2.income===g3.income&&x2.id!==g3.id).map(x2=>html`<option value=${x2.id}>${x2.name}</option>`)}
                </select>
                <button class="btn small" type="button" onClick=${()=>setEdit(null)}>Cancel</button></div>`:html`<span class="cname">${c3.name}</span>${c3.hidden&&html`<span class="pill dim">Hidden</span>`}
              <span class="cedacts">
                <${IconBtn2} name="up" label=${`Move ${c3.name} up`} disabled=${busy||i3===0}
                  onClick=${()=>change2("moveCategory",{categoryId:c3.id,groupId:g3.id,beforeId:g3.categories[i3-1].id})} />
                <${IconBtn2} name="down" label=${`Move ${c3.name} down`} disabled=${busy||i3===g3.categories.length-1}
                  onClick=${()=>change2("moveCategory",{categoryId:c3.id,groupId:g3.id,beforeId:g3.categories[i3+2]?.id||null})} />
                <${IconBtn2} name="folder" label=${`Move ${c3.name} to another group`} disabled=${busy||!list2.some(x2=>x2.income===g3.income&&x2.id!==g3.id)}
                  onClick=${()=>setEdit({kind:"move-cat",id:c3.id})} />
                <${IconBtn2} name="edit" label=${`Rename ${c3.name}`} disabled=${busy} onClick=${()=>setEdit({kind:"rename-cat",id:c3.id})} />
                <${IconBtn2} name=${c3.hidden?"eye":"eyeoff"} label=${`${c3.hidden?"Show":"Hide"} ${c3.name}`} disabled=${busy}
                  onClick=${()=>change2("hideCategory",{categoryId:c3.id,hidden:!c3.hidden})} />
                <${IconBtn2} name="trash" label=${`Delete ${c3.name}`} disabled=${busy}
                  onClick=${()=>setDel({kind:"category",id:c3.id,name:c3.name,income:g3.income})} />
              </span>`}
        </div>
        ${del?.kind==="category"&&del.id===c3.id&&html`<${DeletePanel} del=${del} groups=${list2} busy=${busy} onDelete=${change2} onCancel=${()=>setDel(null)} />`}
      </div>`)}
      ${!g3.categories.length&&html`<div class="cedrow muted">No categories in this group yet.</div>`}
      ${is("add-cat",g3.id)?html`<div class="cedrow"><${NameForm} placeholder="New category name" button="Add" busy=${busy}
          onSave=${name=>change2("createCategory",{name,groupId:g3.id})} onCancel=${()=>setEdit(null)} /></div>`:html`<button class="btn small cedadd" disabled=${busy} onClick=${()=>setEdit({kind:"add-cat",id:g3.id})}>
          <${Icon} name="plus" size=${14} sw=${2.2} />Add a category to ${g3.name}</button>`}
    </div>`};return html`<section class="card pad cated" aria-label="Edit categories">
    <div class="cardhead"><h2>Edit categories</h2><span class="aside">Changes go straight to your budget</span>
      <button class="btn small pri" onClick=${onDone}><${Icon} name="check" size=${14} sw=${2.2} />Done</button></div>
    ${msg&&html`<div class=${`notice ${msg.good?"ok":""}`} role="status">${msg.text}</div>`}
    ${spending.map(g3=>group(g3,spending))}
    ${income.length>0&&html`<div class="reqsub">Income</div>`}
    ${income.map(g3=>group(g3,income))}
    ${edit?.kind==="add-group"?html`<div class="cedgroup"><${NameForm} placeholder="New group name" button="Add group" busy=${busy}
        onSave=${name=>change2("createGroup",{name,income:edit.income===!0})} onCancel=${()=>setEdit(null)}>
        <select class="field" aria-label="Kind of group" value=${edit.income?"income":"spending"}
          onChange=${e3=>setEdit({...edit,income:e3.target.value==="income"})}>
          <option value="spending">Spending</option><option value="income">Income</option>
        </select></${NameForm}></div>`:html`<button class="btn small cedadd" disabled=${busy} onClick=${()=>setEdit({kind:"add-group",id:null,income:!1})}>
        <${Icon} name="plus" size=${14} sw=${2.2} />Add a group</button>`}
    <div class="muted" style="font-size:12.5px;margin-top:12px">Hidden ones stay in your budget with their history; they just
      don't show on your screens or in pickers. No real money ever moves.</div>
  </section>`}function CategoryPick({t:t4,categories,onChanged}){let[busy,setBusy]=d2(!1),[msg,setMsg]=d2(null),set=async categoryId=>{setBusy(!0),setMsg(null);try{let{result:r3}=await api("/api/transactions/category",{transactionId:t4.id,categoryId:categoryId||null});setMsg(r3.ok?{good:!0,text:categoryId?`Filed in ${r3.after?.category||"that category"}.`:"Category taken off: it has no category now."}:{good:!1,text:`That didn't work: ${r3.error}`}),r3.ok&&onChanged?.()}catch(err){setMsg({good:!1,text:`That didn't work: ${err.message}`})}finally{setBusy(!1)}},groups=[...new Set(categories.map(c3=>c3.group))],known=!t4.categoryId||categories.some(c3=>c3.id===t4.categoryId);return html`<div class="catpick">
    <label><span class="muted">Category</span>
      <select class="field" value=${t4.categoryId||""} disabled=${busy} aria-label=${`Category for ${t4.payee}`}
        onChange=${e3=>set(e3.target.value)}>
        <option value="">No category</option>
        ${!known&&html`<option value=${t4.categoryId}>${t4.category}</option>`}
        ${groups.map(g3=>html`<optgroup label=${g3}>${categories.filter(c3=>c3.group===g3).map(c3=>html`<option value=${c3.id}>${c3.name}</option>`)}</optgroup>`)}
      </select></label>
    ${t4.categoryId&&html`<button class="btn small" disabled=${busy} onClick=${()=>set(null)}><${Icon} name="x" size=${13} sw=${2.2} />Clear category</button>`}
    ${msg&&html`<span class=${msg.good?"good":"bad"} role="status" style="font-size:13px">${msg.text}</span>`}
  </div>`}var toCents=v3=>{let t4=String(v3??"").replace(/[$,\s]/g,"");return/^\d+(\.\d{1,2})?$/.test(t4)?Math.round(Number(t4)*100):null},dollars=c3=>(Math.abs(c3)/100).toFixed(2),plural3=(n3,one,many=`${one}s`)=>`${n3} ${n3===1?one:many}`;async function change(action,args){try{return(await api("/api/transactions/change",{action,args})).result}catch(err){return{ok:!1,error:err.message}}}function DuplicateButton({t:t4,onDone}){let[busy,setBusy]=d2(!1),[err,setErr]=d2(null);return t4.kind==="transfer"?null:html`<button class="btn small" disabled=${busy} onClick=${async()=>{setBusy(!0),setErr(null);let r3=await change("duplicateTransaction",{transactionId:t4.id});setBusy(!1),r3.ok?onDone(`${r3.summary}.`):setErr(r3.error)}}><${Icon} name="plus" size=${14} />Duplicate</button>${err&&html` <span class="bad" role="status" style="font-size:13px">${err}</span>`}`}var Msg=({msg})=>msg&&html`<div class=${msg.good?"good":"bad"} role="status" style="font-size:13px">${msg.text}</div>`;function CategorySelect({value,onChange,categories,blank="No category yet",label:label3,disabled}){let groups=[...new Set(categories.map(c3=>c3.group))];return html`<select class="field" value=${value} disabled=${disabled} aria-label=${label3} onChange=${e3=>onChange(e3.target.value)}>
    <option value="">${blank}</option>
    ${groups.map(g3=>html`<optgroup label=${g3}>${categories.filter(c3=>c3.group===g3).map(c3=>html`<option value=${c3.id}>${c3.name}</option>`)}</optgroup>`)}
  </select>`}var AmountField=({value,onChange,label:label3="Amount"})=>html`<input class="field" inputmode="decimal" placeholder="0.00" value=${value}
  aria-label=${label3} style="width:110px" onInput=${e3=>onChange(e3.target.value)} />`;function AddTransaction({d:d3,onClose,onAdded}){let[kind,setKind]=d2("out"),[f3,setF]=d2({account:d3.accounts[0]?.id||"",to:d3.accounts[1]?.id||"",date:d3.today,payee:"",category:"",amount:"",notes:"",cleared:!1}),[busy,setBusy]=d2(!1),[msg,setMsg]=d2(null),set=(k3,v3)=>setF(x2=>({...x2,[k3]:v3})),acct=d3.accounts.find(a3=>a3.id===f3.account);return html`<form class="card pad txform" onSubmit=${async e3=>{e3.preventDefault();let cents=toCents(f3.amount);if(!cents)return setMsg({good:!1,text:"Enter the amount, like 12.50."});if(!f3.date)return setMsg({good:!1,text:"Pick the date."});setBusy(!0),setMsg(null);let r3=kind==="transfer"?await change("makeTransfer",{fromAccountId:f3.account,toAccountId:f3.to,amount:cents,date:f3.date,notes:f3.notes.trim()||null}):await change("addTransaction",{accountId:f3.account,date:f3.date,amount:kind==="out"?-cents:cents,payee:f3.payee.trim()||null,categoryId:!acct?.offbudget&&f3.category?f3.category:null,notes:f3.notes.trim()||null,cleared:f3.cleared});setBusy(!1),r3.ok?onAdded(r3.summary):setMsg({good:!1,text:`That didn't work: ${r3.error}`})}} aria-label="Add a transaction">
    <div class="cardhead"><h2>Add a transaction</h2><span class="aside">Only records it here; nothing moves at your bank</span></div>
    <div class="qopts" role="group" aria-label="Kind">
      ${[["out","Spent"],["in","Money in"],["transfer","Move between accounts"]].map(([k3,label3])=>html`
        <button type="button" class=${`btn small${kind===k3?" on":""}`} aria-pressed=${kind===k3} onClick=${()=>setKind(k3)}>${label3}</button>`)}
    </div>
    <div class="txgrid">
      <label><span class="muted">${kind==="transfer"?"From":"Account"}</span>
        <select class="field" value=${f3.account} aria-label=${kind==="transfer"?"From account":"Account"} onChange=${e3=>set("account",e3.target.value)}>
          ${d3.accounts.map(a3=>html`<option value=${a3.id}>${a3.name}</option>`)}</select></label>
      ${kind==="transfer"&&html`<label><span class="muted">To</span>
        <select class="field" value=${f3.to} aria-label="To account" onChange=${e3=>set("to",e3.target.value)}>
          ${d3.accounts.filter(a3=>a3.id!==f3.account).map(a3=>html`<option value=${a3.id}>${a3.name}</option>`)}</select></label>`}
      <label><span class="muted">Date</span>
        <input class="field" type="date" value=${f3.date} aria-label="Date" onInput=${e3=>set("date",e3.target.value)} /></label>
      <label><span class="muted">Amount</span>
        <${AmountField} value=${f3.amount} onChange=${v3=>set("amount",v3)} /></label>
      ${kind!=="transfer"&&html`<label><span class="muted">Payee</span>
        <input class="field" list="payee-names" value=${f3.payee} maxlength="100" placeholder="Who it was with" aria-label="Payee"
          onInput=${e3=>set("payee",e3.target.value)} /></label>`}
      ${kind!=="transfer"&&!acct?.offbudget&&html`<label><span class="muted">Category</span>
        <${CategorySelect} value=${f3.category} categories=${d3.categories} label="Category" onChange=${v3=>set("category",v3)} /></label>`}
      <label class="wide"><span class="muted">Notes</span>
        <input class="field" value=${f3.notes} maxlength="500" placeholder="Optional" aria-label="Notes" onInput=${e3=>set("notes",e3.target.value)} /></label>
    </div>
    <div class="acts">
      ${kind!=="transfer"&&html`<label class="check"><input type="checkbox" checked=${f3.cleared} onChange=${e3=>set("cleared",e3.target.checked)} />Already cleared</label>`}
      <button class="btn small pri" type="submit" disabled=${busy||!d3.accounts.length||kind==="transfer"&&!f3.to}>
        <${Icon} name="plus" size=${14} sw=${2.2} />${kind==="transfer"?"Make the transfer":"Add"}</button>
      <button class="btn small" type="button" onClick=${onClose}>Cancel</button>
    </div>
    <${Msg} msg=${msg} />
  </form>`}function SplitEditor({t:t4,categories,busy,onSave,onCancel}){let start=t4.parts?t4.parts.map(p3=>({category:p3.categoryId||"",amount:dollars(p3.amount),notes:p3.notes||""})):[{category:t4.categoryId||"",amount:dollars(t4.amount),notes:""},{category:"",amount:"",notes:""}],[rows,setRows]=d2(start),left=Math.abs(t4.amount)-rows.reduce((n3,r3)=>n3+(toCents(r3.amount)||0),0),ready=rows.length>=2&&left===0&&rows.every(r3=>r3.category&&toCents(r3.amount)),sign=t4.amount<0?-1:1,edit=(i3,k3,v3)=>setRows(rs=>rs.map((r3,j3)=>j3===i3?{...r3,[k3]:v3}:r3));return html`<div class="cedpanel splitpanel" role="group" aria-label="Split">
    <b style="color:var(--mint)">Split ${money(t4.amount,{decimals:!0})} over several categories</b>
    ${rows.map((r3,i3)=>html`<div class="splitrow" key=${i3}>
      <${CategorySelect} value=${r3.category} categories=${categories} blank="Pick a category…" label=${`Category for part ${i3+1}`} onChange=${v3=>edit(i3,"category",v3)} />
      <${AmountField} value=${r3.amount} label=${`Amount of part ${i3+1}`} onChange=${v3=>edit(i3,"amount",v3)} />
      <button type="button" class="btn small" title="Put what is left in this part" disabled=${left===0}
        onClick=${()=>edit(i3,"amount",dollars(Math.max((toCents(r3.amount)||0)+left,0)))}>Rest</button>
      <button type="button" class="iconbtn" aria-label=${`Remove part ${i3+1}`} disabled=${rows.length<=2} onClick=${()=>setRows(rs=>rs.filter((_3,j3)=>j3!==i3))}>
        <${Icon} name="x" size=${14} sw=${2} /></button>
    </div>`)}
    <div class="cedform">
      <button type="button" class="btn small" disabled=${rows.length>=20} onClick=${()=>setRows(rs=>[...rs,{category:"",amount:"",notes:""}])}>
        <${Icon} name="plus" size=${13} sw=${2.2} />Add a part</button>
      <span class=${left===0?"good":"warn"} role="status" style="font-size:13px">
        ${left===0?"Adds up to the whole.":left>0?`${money(left,{decimals:!0})} left to put somewhere.`:`${money(-left,{decimals:!0})} too much.`}</span>
    </div>
    <div class="cedform">
      <button type="button" class="btn small pri" disabled=${busy||!ready}
        onClick=${()=>onSave(rows.map(r3=>({categoryId:r3.category,amount:sign*toCents(r3.amount),...r3.notes.trim()?{notes:r3.notes.trim()}:{}})))}>
        <${Icon} name="check" size=${14} sw=${2.2} />Save the split</button>
      <button type="button" class="btn small" onClick=${onCancel}>Cancel</button>
    </div>
  </div>`}function TxnEditor({t:t4,d:d3,onChanged,onDeleted}){let transfer=t4.kind==="transfer",[f3,setF]=d2({payee:t4.payeeName||"",notes:t4.notes||"",date:t4.date,amount:dollars(t4.amount),dir:t4.amount<0?"out":"in",account:t4.accountId,cleared:!!t4.cleared}),[mode2,setMode]=d2(null),[pick,setPick]=d2(""),[busy,setBusy]=d2(!1),[msg,setMsg]=d2(null),set=(k3,v3)=>setF(x2=>({...x2,[k3]:v3})),other=d3.accounts.find(a3=>a3.id===t4.transferAcct)?.name||"the other account",run=async(steps,done)=>{setBusy(!0),setMsg(null);let last=null;for(let[action,args]of steps)if(last=await change(action,{transactionId:t4.id,...args}),!last.ok)break;return setBusy(!1),last?.ok?(setMode(null),onChanged(`${done||last.summary}.`)):(setMsg({good:!1,text:`That didn't work: ${last?.error}`}),steps.length>1&&onChanged()),last},save=()=>{let cents=toCents(f3.amount);if(!cents)return setMsg({good:!1,text:"Enter the amount, like 12.50."});if(!f3.date)return setMsg({good:!1,text:"Pick the date."});let edit={};!transfer&&f3.payee.trim()!==(t4.payeeName||"")&&(edit.payee=f3.payee.trim()||null),f3.notes.trim()!==(t4.notes||"")&&(edit.notes=f3.notes.trim()||null),f3.cleared!==!!t4.cleared&&(edit.cleared=f3.cleared);let chg={},signed2=f3.dir==="out"?-cents:cents;!t4.split&&signed2!==t4.amount&&(chg.amount=signed2),f3.date!==t4.date&&(chg.date=f3.date),f3.account!==t4.accountId&&(chg.accountId=f3.account);let steps=[Object.keys(edit).length&&["editTransaction",edit],Object.keys(chg).length&&["changeTransaction",chg]].filter(Boolean);if(!steps.length)return setMsg({good:!0,text:"Nothing changed."});run(steps,"Saved")},remove=async()=>{let restore=t4.split||transfer?null:{accountId:t4.accountId,date:t4.date,amount:t4.amount,payee:t4.payeeName,categoryId:t4.categoryId,notes:t4.notes,cleared:!!t4.cleared};(await run([["deleteTransaction",{}]],"Deleted"))?.ok&&onDeleted(restore,t4.payee,t4.amount)};return html`<div class="txedit">
    <div class="txgrid">
      ${!transfer&&html`<label><span class="muted">Payee</span>
        <input class="field" list="payee-names" value=${f3.payee} maxlength="100" placeholder="No payee" aria-label="Payee" onInput=${e3=>set("payee",e3.target.value)} /></label>`}
      <label><span class="muted">Amount</span><span class="amtrow">
        <select class="field" value=${f3.dir} disabled=${t4.split||transfer} aria-label="Spent or received" onChange=${e3=>set("dir",e3.target.value)}>
          <option value="out">Spent</option><option value="in">Received</option></select>
        <${AmountField} value=${f3.amount} onChange=${v3=>set("amount",v3)} /></span></label>
      <label><span class="muted">Date</span>
        <input class="field" type="date" value=${f3.date} aria-label="Date" onInput=${e3=>set("date",e3.target.value)} /></label>
      <label><span class="muted">Account</span>
        <select class="field" value=${f3.account} disabled=${transfer} aria-label="Account" onChange=${e3=>set("account",e3.target.value)}>
          ${d3.accounts.map(a3=>html`<option value=${a3.id}>${a3.name}</option>`)}</select></label>
      <label class="wide"><span class="muted">Notes</span>
        <input class="field" value=${f3.notes} maxlength="500" placeholder="Optional" aria-label="Notes" onInput=${e3=>set("notes",e3.target.value)} /></label>
    </div>
    <div class="acts">
      <label class="check"><input type="checkbox" checked=${f3.cleared} onChange=${e3=>set("cleared",e3.target.checked)} />Cleared</label>
      <button class="btn small pri" disabled=${busy} onClick=${save}><${Icon} name="check" size=${14} sw=${2.2} />Save changes</button>
    </div>
    ${t4.split&&html`<div class="muted" style="font-size:12.5px">A split's total changes by changing its parts, or put it back together first.</div>`}
    ${transfer&&html`<div class="muted" style="font-size:12.5px">A move between accounts keeps its two accounts. The other side is in ${other}.</div>`}

    ${t4.canFile&&html`<${CategoryPick} t=${t4} categories=${d3.categories} onChanged=${onChanged} />`}
    ${t4.split&&html`<div class="splitlist" aria-label="Parts of the split">
      ${t4.parts.map(p3=>html`<div class="splitrow"><span>${p3.category||html`<span class="bad">No category</span>`}</span><span class="num">${money(p3.amount,{decimals:!0})}</span></div>`)}
    </div>`}

    <div class="acts wrapacts">
      ${!transfer&&!t4.offbudget&&html`<button class="btn small" disabled=${busy} onClick=${()=>setMode(mode2==="split"?null:"split")}>
        <${Icon} name="folder" size=${14} />${t4.split?"Change the split":"Split…"}</button>`}
      ${t4.split&&html`<button class="btn small" disabled=${busy} onClick=${()=>{setPick(""),setMode(mode2==="unsplit"?null:"unsplit")}}>Put back together</button>`}
      ${!transfer&&!t4.split&&html`<button class="btn small" disabled=${busy||d3.accounts.length<2} onClick=${()=>{setPick(d3.accounts.find(a3=>a3.id!==t4.accountId)?.id||""),setMode(mode2==="transfer"?null:"transfer")}}>
        <${Icon} name="swap" size=${14} />Make it a transfer…</button>`}
      ${transfer&&html`<button class="btn small" disabled=${busy} onClick=${()=>setMode(mode2==="undo"?null:"undo")}>Undo the transfer…</button>`}
      <button class="btn small danger" disabled=${busy} onClick=${()=>t4.split||transfer?setMode(mode2==="delete"?null:"delete"):remove()}>
        <${Icon} name="trash" size=${14} />Delete</button>
    </div>

    ${mode2==="split"&&html`<${SplitEditor} t=${t4} categories=${d3.categories} busy=${busy} onCancel=${()=>setMode(null)}
      onSave=${parts2=>run([["splitTransaction",{parts:parts2}]],"Split saved")} />`}
    ${mode2==="unsplit"&&html`<div class="cedpanel"><b style="color:var(--mint)">Put it back together as one?</b>
      <div class="cedform"><${CategorySelect} value=${pick} categories=${d3.categories} blank="No category" label="Category for the whole" onChange=${setPick} />
        <button class="btn small pri" disabled=${busy} onClick=${()=>run([["unsplitTransaction",{categoryId:pick||null}]],"Put back together")}>Put back together</button>
        <button class="btn small" onClick=${()=>setMode(null)}>Cancel</button></div></div>`}
    ${mode2==="transfer"&&html`<div class="cedpanel"><b style="color:var(--mint)">Make this a move to or from another of your accounts?</b>
      <div class="cedform"><select class="field" value=${pick} aria-label="The other account" onChange=${e3=>setPick(e3.target.value)}>
          ${d3.accounts.filter(a3=>a3.id!==t4.accountId).map(a3=>html`<option value=${a3.id}>${a3.name}</option>`)}</select>
        <button class="btn small pri" disabled=${busy||!pick} onClick=${()=>run([["makeTransfer",{toAccountId:pick}]],"Made a transfer")}>Make the transfer</button>
        <button class="btn small" onClick=${()=>setMode(null)}>Cancel</button></div>
      <div class="muted" style="font-size:12.5px">GupBudget adds the matching side to that account and takes the category off. Nothing moves at a bank.</div></div>`}
    ${mode2==="undo"&&html`<div class="cedpanel"><b>Undo this transfer?</b>
      <div>It stays here as a plain transaction and the other side in ${other} is removed.</div>
      <div class="cedform"><button class="btn small danger" disabled=${busy} onClick=${()=>run([["undoTransfer",{}]],"Transfer undone")}>Undo the transfer</button>
        <button class="btn small" onClick=${()=>setMode(null)}>Keep it</button></div></div>`}
    ${mode2==="delete"&&html`<div class="cedpanel"><b>Delete ${t4.payee}?</b>
      <div>${t4.split?`It goes with its ${plural3(t4.parts.length,"part")}.`:`The other side in ${other} goes too.`} This can't be undone here.</div>
      <div class="cedform"><button class="btn small danger" disabled=${busy} onClick=${remove}><${Icon} name="trash" size=${14} />Delete</button>
        <button class="btn small" onClick=${()=>setMode(null)}>Keep it</button></div></div>`}
    <${Msg} msg=${msg} />
  </div>`}function BulkBar({ids,d:d3,onClear,onDone}){let[category,setCategory]=d2(""),[payee,setPayee]=d2(""),[confirm2,setConfirm]=d2(!1),[busy,setBusy]=d2(!1),[msg,setMsg]=d2(null),go2=async(body,words)=>{setBusy(!0),setMsg(null);try{let r3=await api("/api/transactions/bulk",{ids,...body}),why=[...new Set(r3.left.map(x2=>x2.error))].slice(0,2).join(" ");setMsg({good:!r3.left.length,text:`${words(r3.done)}${r3.left.length?` ${plural3(r3.left.length,"was","were")} left alone: ${why}`:""}`}),setConfirm(!1),onDone(r3.done>0)}catch(err){setMsg({good:!1,text:`That didn't work: ${err.message}`})}finally{setBusy(!1)}};return html`<div class="bulkbar" role="group" aria-label="Edit the selected transactions">
    <b>${plural3(ids.length,"transaction")} selected</b>
    <span class="cedform">
      <${CategorySelect} value=${category} categories=${d3.categories} blank="Pick a category…" label="Category for the selected" onChange=${setCategory} />
      <button class="btn small" disabled=${busy||!ids.length||!category} onClick=${()=>go2({op:"category",categoryId:category},n3=>`${plural3(n3,"transaction")} filed.`)}>Set category</button>
    </span>
    <span class="cedform">
      <input class="field" list="payee-names" value=${payee} maxlength="100" placeholder="Payee" aria-label="Payee for the selected" onInput=${e3=>setPayee(e3.target.value)} />
      <button class="btn small" disabled=${busy||!ids.length||!payee.trim()} onClick=${()=>go2({op:"payee",payee},n3=>`Payee set on ${plural3(n3,"transaction")}.`)}>Set payee</button>
    </span>
    ${confirm2?html`<span class="cedform"><b class="bad">Delete ${plural3(ids.length,"transaction")}?</b>
        <button class="btn small danger" disabled=${busy} onClick=${()=>go2({op:"delete"},n3=>`${plural3(n3,"transaction")} deleted.`)}><${Icon} name="trash" size=${14} />Delete</button>
        <button class="btn small" onClick=${()=>setConfirm(!1)}>Keep them</button></span>`:html`<button class="btn small danger" disabled=${busy||!ids.length} onClick=${()=>setConfirm(!0)}><${Icon} name="trash" size=${14} />Delete…</button>`}
    <button class="btn small ghost" onClick=${onClear}>Done</button>
    <${Msg} msg=${msg} />
  </div>`}var dollars2=c3=>typeof c3=="number"?(Math.abs(c3)/100).toFixed(2):"",today=()=>{let d3=new Date;return`${d3.getFullYear()}-${String(d3.getMonth()+1).padStart(2,"0")}-${String(d3.getDate()).padStart(2,"0")}`},amountWords=s3=>s3.amount&&typeof s3.amount=="object"?`${money(s3.amount.num1,{decimals:!0})} to ${money(s3.amount.num2,{decimals:!0})}`:typeof s3.amount=="number"?`${s3.amountOp==="isapprox"?"about ":""}${money(s3.amount,{decimals:!0})}`:"";function startForm(s3,options){let rec=s3&&isRecurring(s3.date)?s3.date:null,between=s3&&s3.amount&&typeof s3.amount=="object",first=between?s3.amount.num1:s3?.amount;return{name:s3?.name||"",accountId:s3?.accountId||options.accounts[0]?.id||"",payeeId:s3?.payeeId||"",spent:first===void 0||first<=0,amountOp:s3?.amountOp||"isapprox",amount:dollars2(first),amount2:between?dollars2(s3.amount.num2):"",repeats:s3?!!rec:!0,once:s3&&!rec?s3.date:today(),start:rec?.start||(s3&&!rec?s3.date:today()),frequency:rec?.frequency||"monthly",interval:rec?.interval||1,patterns:rec?.patterns||[],skipWeekend:!!rec?.skipWeekend,weekendSolveMode:rec?.weekendSolveMode||"after",endMode:rec?.endMode||"never",endOccurrences:rec?.endOccurrences||2,endDate:rec?.endDate||"",posts:s3?.postsTransaction||!1}}function seeded(f3,seed){if(!seed?.add)return f3;let cents=Number(seed.amount);return{...f3,name:String(seed.add).slice(0,60),amount:cents>0?dollars2(cents):"",repeats:!0,frequency:FREQUENCIES.some(x2=>x2[0]===seed.every)?seed.every:"monthly",interval:Number(seed.interval)||1,start:seed.next||f3.start}}function fromForm(f3){let sign=f3.spent?-1:1,a3=toCents(f3.amount),b3=toCents(f3.amount2);if(!f3.name.trim())return{error:"Give it a name."};if(!a3||a3<=0)return{error:"Enter the amount, like 12.50."};if(f3.amountOp==="isbetween"&&(!b3||b3<=0))return{error:"Enter both ends of the amount."};let date=f3.once;return f3.repeats&&(date={start:f3.start,frequency:f3.frequency,interval:Number(f3.interval)||1,patterns:f3.patterns,skipWeekend:f3.skipWeekend,weekendSolveMode:f3.weekendSolveMode,endMode:f3.endMode},f3.endMode==="after_n_occurrences"&&(date.endOccurrences=Number(f3.endOccurrences)||0),f3.endMode==="on_date"&&(date.endDate=f3.endDate)),{fields:{name:f3.name.trim(),accountId:f3.accountId,payeeId:f3.payeeId||null,amountOp:f3.amountOp,amount:f3.amountOp==="isbetween"?{num1:sign*a3,num2:sign*b3}:sign*a3,date,postsTransaction:f3.posts}}}function Form({start,options,id,old,onSaved,onCancel}){let[f3,setF]=d2(start),[busy,setBusy]=d2(!1),[err,setErr]=d2(null),set=(k3,v3)=>setF(x2=>({...x2,[k3]:v3}));return html`<form class="card pad txform" onSubmit=${async e3=>{e3.preventDefault();let r3=fromForm(f3);if(r3.error)return setErr(r3.error);setBusy(!0),setErr(null);let fields=r3.fields;id&&(fields=Object.fromEntries(Object.entries(fields).filter(([k3,v3])=>JSON.stringify(v3)!==JSON.stringify({name:old.name,accountId:old.accountId,payeeId:old.payeeId,amountOp:old.amountOp,amount:old.amount,date:old.date,postsTransaction:old.postsTransaction}[k3]))));let res=id?await listChange("schedule","updateSchedule",{scheduleId:id,fields}):await listChange("schedule","createSchedule",fields);setBusy(!1),res.ok?onSaved(res):setErr(res.error)}} aria-label=${id?"Change schedule":"Add a schedule"}>
    <div class="cardhead"><h2>${id?`Change ${old.name}`:"Add a schedule"}</h2><span class="aside">Only records it here; nothing moves at your bank</span></div>
    <div class="txgrid">
      <label class="wide"><span class="muted">Name</span><input class="field" value=${f3.name} maxlength="60" aria-label="Name" onInput=${e3=>set("name",e3.target.value)} /></label>
      <label><span class="muted">Account</span><select class="field" value=${f3.accountId} aria-label="Account" onChange=${e3=>set("accountId",e3.target.value)}>
        ${options.accounts.map(a3=>html`<option value=${a3.id}>${a3.name}</option>`)}</select></label>
      <label><span class="muted">Payee</span><select class="field" value=${f3.payeeId} aria-label="Payee" onChange=${e3=>set("payeeId",e3.target.value)}>
        <option value="">No payee</option>${options.payees.map(p3=>html`<option value=${p3.id}>${p3.name}</option>`)}</select></label>
      <label><span class="muted">Money</span><select class="field" value=${f3.spent?"out":"in"} aria-label="Direction" onChange=${e3=>set("spent",e3.target.value==="out")}>
        <option value="out">Goes out</option><option value="in">Comes in</option></select></label>
      <label><span class="muted">Amount is</span><select class="field" value=${f3.amountOp} aria-label="How exact the amount is" onChange=${e3=>set("amountOp",e3.target.value)}>
        ${AMOUNT_OPS.map(([k3,t4])=>html`<option value=${k3}>${t4}</option>`)}</select></label>
      <label><span class="muted">${f3.amountOp==="isbetween"?"From":"Amount"}</span>
        <input class="field" inputmode="decimal" placeholder="0.00" value=${f3.amount} aria-label="Amount" onInput=${e3=>set("amount",e3.target.value)} /></label>
      ${f3.amountOp==="isbetween"&&html`<label><span class="muted">To</span>
        <input class="field" inputmode="decimal" placeholder="0.00" value=${f3.amount2} aria-label="Amount to" onInput=${e3=>set("amount2",e3.target.value)} /></label>`}
      <label><span class="muted">When</span><select class="field" value=${f3.repeats?"repeats":"once"} aria-label="Once or repeating" onChange=${e3=>set("repeats",e3.target.value==="repeats")}>
        <option value="repeats">Repeats</option><option value="once">Happens once</option></select></label>
      ${!f3.repeats&&html`<label><span class="muted">Date</span><input class="field" type="date" value=${f3.once} aria-label="Date" onInput=${e3=>set("once",e3.target.value)} /></label>`}
      ${f3.repeats&&html`<label><span class="muted">First date</span><input class="field" type="date" value=${f3.start} aria-label="First date" onInput=${e3=>set("start",e3.target.value)} /></label>
        <label><span class="muted">Every</span><span class="amtrow"><input class="field" type="number" min="1" max="99" value=${f3.interval} aria-label="Repeat every" style="width:70px"
          onInput=${e3=>set("interval",e3.target.value)} />
          <select class="field" value=${f3.frequency} aria-label="Repeat unit" onChange=${e3=>set("frequency",e3.target.value)}>
            ${FREQUENCIES.map(([k3,t4])=>html`<option value=${k3}>${t4}${Number(f3.interval)===1?"":"s"}</option>`)}</select></span></label>
        <label><span class="muted">Ends</span><select class="field" value=${f3.endMode} aria-label="Ends" onChange=${e3=>set("endMode",e3.target.value)}>
          ${END_MODES.map(([k3,t4])=>html`<option value=${k3}>${t4}</option>`)}</select></label>
        ${f3.endMode==="after_n_occurrences"&&html`<label><span class="muted">Times</span><input class="field" type="number" min="1" max="999" value=${f3.endOccurrences}
          aria-label="Number of times" onInput=${e3=>set("endOccurrences",e3.target.value)} /></label>`}
        ${f3.endMode==="on_date"&&html`<label><span class="muted">Last date</span><input class="field" type="date" value=${f3.endDate} aria-label="Last date"
          onInput=${e3=>set("endDate",e3.target.value)} /></label>`}`}
    </div>
    <div class="acts">
      ${f3.repeats&&html`<label class="check"><input type="checkbox" checked=${f3.skipWeekend} onChange=${e3=>set("skipWeekend",e3.target.checked)} />Move off weekends</label>
        ${f3.skipWeekend&&html`<select class="field" value=${f3.weekendSolveMode} aria-label="Weekend move" onChange=${e3=>set("weekendSolveMode",e3.target.value)}>
          <option value="after">to the next Monday</option><option value="before">to the Friday before</option></select>`}`}
      <label class="check"><input type="checkbox" checked=${f3.posts} onChange=${e3=>set("posts",e3.target.checked)} />Add the transaction by itself when it's due</label>
    </div>
    ${err&&html`<div class="bad" role="status" style="font-size:13px">${err}</div>`}
    <div class="acts">
      <button class="btn small pri" type="submit" disabled=${busy||!options.accounts.length}><${Icon} name="check" size=${14} sw=${2.2} />${id?"Save changes":"Add the schedule"}</button>
      <button class="btn small" type="button" onClick=${onCancel}>Cancel</button>
    </div>
  </form>`}function LinkPanel({s:s3,onDone,onCancel}){if(!s3.payeeId)return html`<div class="cedpanel" role="group" aria-label=${`Link a transaction to ${s3.name}`}>
      <b>Link a transaction to ${s3.name}</b>
      <div class="muted">This schedule has no payee, so there's no list to pick from. Give it a payee first.</div>
      <div class="cedform"><button class="btn small" onClick=${onCancel}>Close</button></div></div>`;let{data,error,loading}=useData(`/api/payee?id=${encodeURIComponent(s3.payeeId)}`),[err,setErr]=d2(null),link=async id=>{let r3=await listChange("schedule","linkSchedule",{transactionId:id,scheduleId:s3.id});r3.ok?onDone(r3):setErr(r3.error)};return html`<div class="cedpanel" role="group" aria-label=${`Link a transaction to ${s3.name}`}>
    <b>Link a transaction to ${s3.name}</b>
    ${loading&&!data&&html`<div class="muted">Loading…</div>`}
    ${(error||data?.ok===!1)&&html`<div class="bad">${error?.message||data.error}</div>`}
    ${data?.transactions?.length===0&&html`<div class="muted">No transactions with this payee yet.</div>`}
    ${data?.transactions?.map(t4=>html`<div class="payrow" key=${t4.id}>
      <span class="muted" style="width:70px">${shortDate(t4.date)}</span><span style="flex:1">${t4.accountName||""}</span>
      <span class="num">${money(t4.amount,{decimals:!0})}</span>
      <button class="btn small" onClick=${()=>link(t4.id)}>Link</button></div>`)}
    ${err&&html`<div class="bad" role="status">That didn't work: ${err}</div>`}
    <div class="cedform"><button class="btn small" onClick=${onCancel}>Close</button></div>
  </div>`}function ScheduleManager(props){return html`<${Manager} ...${props} />`}function Manager({params={},onChanged}){let focus=params.schedule||null,{data:d3,error,loading,reload}=useData("/api/schedules"),[mode2,setMode]=d2(null),[msg,setMsg]=d2(null),[busy,setBusy]=d2(!1);if(A2(()=>{d3&&(focus&&d3.schedules.some(s3=>s3.id===focus)?setMode({kind:"edit",id:focus}):params.add&&setMode({kind:"add",seed:params}))},[!!d3]),loading&&!d3)return html`<${Loading} />`;if(error)return html`<${Failed} error=${error} retry=${reload} />`;if(d3.ok===!1)return html`<${Failed} error=${{message:d3.error}} retry=${reload} />`;let done=text=>{setMsg({good:!0,text}),setMode(null),reload(),onChanged?.()},skip=async s3=>{setBusy(!0),setMsg(null);let r3=await listChange("schedule","skipSchedule",{scheduleId:s3.id});setBusy(!1),r3.ok?done(`${r3.summary}.`):setMsg({good:!1,text:`That didn't work: ${r3.error}`})},options=d3.options;return html`<section class="card pad" aria-label="Your schedules">
    <div class="cardhead"><h2>Your schedules</h2>
      <span class="aside"><button class="btn small pri" onClick=${()=>setMode({kind:"add"})}><${Icon} name="plus" size=${14} sw=${2.2} />Add a schedule</button></span></div>
    ${msg&&html`<div class=${`notice ${msg.good?"ok":""}`} role="status">${msg.text}</div>`}
    ${mode2?.kind==="add"&&html`<${Form} start=${seeded(startForm(null,options),mode2.seed)} options=${options} onCancel=${()=>setMode(null)} onSaved=${r3=>done(`${r3.summary}.`)} />`}
    ${d3.schedules.map(s3=>html`<div key=${s3.id} id=${`sched-${s3.id}`}>
      <div class="payrow">
        <div class="paymain" style="cursor:default">
          <b>${s3.name}</b>
          <span class="muted">${[s3.payee,s3.account,amountWords(s3),s3.repeats].filter(Boolean).join(" · ")}</span>
          <span class="muted">${s3.completed?"Finished":s3.nextDate?`Next ${shortDate(s3.nextDate)}`:""}${s3.postsTransaction?" · adds itself":""}${s3.transactions?` · ${plural(s3.transactions,"transaction")} linked`:""}</span>
        </div>
        <div class="cedacts">
          <${IconBtn} name="edit" label=${`Change ${s3.name}`} disabled=${busy} onClick=${()=>setMode({kind:"edit",id:s3.id})} />
          <${IconBtn} name="chev" label=${`Skip the next ${s3.name}`} disabled=${busy||s3.completed||!isRecurring(s3.date)} onClick=${()=>skip(s3)} />
          <${IconBtn} name="plus" label=${`Post ${s3.name} now`} disabled=${busy||s3.completed} onClick=${()=>setMode({kind:"post",id:s3.id})} />
          <${IconBtn} name="swap" label=${`Link a transaction to ${s3.name}`} disabled=${busy} onClick=${()=>setMode({kind:"link",id:s3.id})} />
          <${IconBtn} name="trash" label=${`Delete ${s3.name}`} disabled=${busy} onClick=${()=>setMode({kind:"delete",id:s3.id})} /></div>
      </div>
      ${mode2?.kind==="edit"&&mode2.id===s3.id&&html`<${Form} start=${startForm(s3,options)} old=${s3} id=${s3.id} options=${options}
        onCancel=${()=>setMode(null)} onSaved=${r3=>done(`${r3.summary}.`)} />`}
      ${mode2?.kind==="post"&&mode2.id===s3.id&&html`<${Confirm} kind="schedule" title=${`Post ${s3.name} now?`} action="postSchedule" args=${{scheduleId:s3.id}}
        button="Post it" icon="plus" onDone=${r3=>done(`${r3.summary}.`)} onCancel=${()=>setMode(null)} />`}
      ${mode2?.kind==="delete"&&mode2.id===s3.id&&html`<${Confirm} kind="schedule" title=${`Delete ${s3.name}?`} action="deleteSchedule" args=${{scheduleId:s3.id}}
        onDone=${r3=>done(`${r3.summary}.`)} onCancel=${()=>setMode(null)} />`}
      ${mode2?.kind==="link"&&mode2.id===s3.id&&html`<${LinkPanel} s=${s3} onDone=${r3=>done(`${r3.summary}.`)} onCancel=${()=>setMode(null)} />`}
    </div>`)}
    ${!d3.schedules.length&&html`<div class="empty"><b>No schedules yet</b><span>A schedule is a bill or paycheck that comes back. Add one with "Add a schedule".</span></div>`}
  </section>`}var EVERY={daily:"day",weekly:"week",monthly:"mo",yearly:"yr"},per=e3=>e3.interval===1?`/${EVERY[e3.frequency]}`:` every ${e3.interval} ${EVERY[e3.frequency]}`;function Found({found,alone}){return html`<section class="card pad">
    <div class="cardhead"><h2>Found in your history</h2>
      <span class="aside num" style="font-size:14px">${money(found.monthly)}/mo · ${money(found.yearly)}/yr</span></div>
    <div class="muted" style="font-size:13px;margin:-4px 0 12px">The helper spotted these repeating charges in your
      transactions${alone?"":"; they aren't on your Schedules yet, so they aren't in the totals above"}.Make a schedule from one to see it coming.</div>
    <div class="subgrid">
      ${found.items.map(s3=>html`<section class=${`card subcard${s3.flags[0]?` ${s3.flags[0].tone}`:""}`}>
        <div class="row" style="gap:12px;align-items:center;min-width:0">
          <${Letter} name=${s3.name} size=${36} />
          <div style="min-width:0"><div class="nm">${s3.name}</div><div class="nx">Next about ${shortDate(s3.next)}</div></div>
        </div>
        <div class="pr num">${money(s3.charge,{decimals:!0})}<small>${per(s3.every)}</small></div>
        ${s3.flags.map(f3=>html`<div class=${f3.tone||"warn"} style="font-size:13px">${scrub(f3.label)}</div>`)}
        <div><button class="btn small" onClick=${()=>go("subscriptions",{add:s3.name,amount:Math.round(Math.abs(s3.charge)),every:s3.every.frequency,interval:s3.every.interval,next:s3.next})}><${Icon} name="plus" size=${13} sw=${2.2} />Make a schedule</button></div>
      </section>`)}
    </div>
  </section>`}function ask(q2){go("helper"),askHelper(q2)}function Subscriptions({status,params={}}){let{data:d3,error,loading,reload}=useData("/api/subscriptions");if(loading&&!d3)return html`<${Loading} />`;if(error)return html`<${Failed} error=${error} retry=${reload} />`;let flagged=d3.items.filter(i3=>i3.flags.length).length,found=d3.found||{items:[]};return html`<div class="subcols">
    <aside class="card helpercol">
      <div class="head"><div class="orb"><${Icon} name="spark" size=${17} sw=${2} /></div>
        <div><b>Helper</b><span>Suggests only · stays on this PC</span></div></div>
      ${d3.notes.length?html`<p style="font-size:14px">What changed with your subscriptions:</p>
          ${d3.notes.map(n3=>html`<${InsightCard} ins=${n3} />`)}`:status.helperAvailable&&d3.watching?html`<div class="ins"><div class="t"><${Icon} name="check" size=${18} style="color:var(--good)" />Nothing changed</div>
            <div class="b">No prices went up, nothing was charged twice and no yearly renewal is coming up soon.</div></div>`:status.helperAvailable?html`<div class="ins"><div class="t"><${Icon} name="info" size=${18} style="color:var(--blue)" />Alerts are off</div>
            <div class="b">Price-increase and unusual-spending alerts are turned off in Settings, so nothing is checked here.</div></div>`:html`<div class="ins"><div class="t"><${Icon} name="info" size=${18} style="color:var(--blue)" />Nothing from the helper yet</div>
            <div class="b">When it's switched on, it points out prices that went up, double charges and trials that are
              about to turn into paid plans, right here.</div></div>`}
      <div style="margin-top:auto;display:flex;flex-direction:column;gap:8px;align-items:flex-start">
        ${["What are all my subscriptions?","Which subscriptions went up this year?"].map(q2=>html`<button class="chip" onClick=${()=>ask(q2)}>${q2}</button>`)}
      </div>
    </aside>

    <div style="display:flex;flex-direction:column;gap:14px;min-width:0">
      <div class="pagehead">
        <div><h1 class="disp">Subscriptions</h1>
          <div class="sub">${d3.items.length} repeating charge${d3.items.length===1?"":"s"}${flagged?` · ${flagged} need a look`:""}${found.items.length?` · ${found.items.length} more found in your history`:""}</div></div>
      </div>
      ${d3.items.length?html`
        <div class="subtiles">
          <section class="card tile"><div class="k">Every month</div><div class="tileNum disp num">${money(d3.monthly)}</div></section>
          <section class="card tile"><div class="k">Every year</div><div class="tileNum disp num">${money(d3.yearly)}</div></section>
          <section class="card tile"><div class="k">Still to come before ${shortDate(d3.upcoming.until)}</div>
            <div class="tileNum disp num">${money(d3.upcoming.total)}</div>
            <div class="muted" style="font-size:12.5px">${d3.upcoming.items.length} charge${d3.upcoming.items.length===1?"":"s"}</div></section>
        </div>
        <div class="subgrid">
          ${d3.items.map(s3=>{let tone2=s3.flags[0]?.tone;return html`<section class=${`card subcard${tone2?` ${tone2}`:""}`}>
              <div class="row" style="gap:12px;align-items:center;min-width:0">
                <${Letter} name=${s3.name} size=${36} />
                <div style="min-width:0"><div class="nm">${s3.name}</div><div class="nx">Next ${shortDate(s3.next)}</div></div>
              </div>
              <div class="pr num">${money(s3.charge,{decimals:!0})}<small>${per(s3.every)}</small></div>
              ${s3.flags.map(f3=>html`<div class=${f3.tone||"warn"} style="font-size:13px">${scrub(f3.label)}</div>`)}
            </section>`})}
        </div>
        <section class="card pad" style="flex:1">
          <div class="cardhead"><h2>Coming up before ${shortDate(d3.upcoming.until)}</h2>
            <span class="aside num" style="font-size:15px;color:var(--text);font-weight:700">${money(d3.upcoming.total,{decimals:!0})}</span></div>
          ${d3.upcoming.items.map(u3=>html`<div class="uprow"><span class="d">${weekdayShort(u3.date)}</span><span>${u3.name}</span>
            <span class="r num">${money(u3.amount,{decimals:!0})}</span></div>`)}
          ${!d3.upcoming.items.length&&html`<div class="muted" style="font-size:13.5px">Nothing else due this month.</div>`}
        </section>
        ${found.items.length>0&&html`<${Found} found=${found} />`}`:found.items.length?html`<${Found} found=${found} alone />`:html`<div class="card empty" style="flex:1">
          <b>No repeating charges yet</b>
          <span>Add your bills and paychecks as schedules below, and GupBudget shows what is coming.</span>
        </div>`}
      <${ScheduleManager} params=${params} onChanged=${reload} />
    </div>
  </div>`}function MonthNav({month:month2,prev,next,screen}){return html`<div class="monthnav">
    ${prev?html`<a href="#" aria-label="Previous month" onClick=${e3=>{e3.preventDefault(),go(screen,{month:prev})}}>
      <${Icon} name="left" size=${16} sw=${2.2} /></a>`:html`<span class="off"><${Icon} name="left" size=${16} /></span>`}
    <b>${monthLabel(month2)}</b>
    ${next?html`<a href="#" aria-label="Next month" onClick=${e3=>{e3.preventDefault(),go(screen,{month:next})}}>
      <${Icon} name="chev" size=${16} sw=${2.2} /></a>`:html`<span class="off"><${Icon} name="chev" size=${16} /></span>`}
  </div>`}function ordinal(n3){let suffix=n3%100>=11&&n3%100<=13?"th":{1:"st",2:"nd",3:"rd"}[n3%10]||"th";return`${n3}${suffix}`}function fact(n3,prevName){switch(n3.kind){case"text":return scrub(n3.text);case"kept":return`You kept ${pct(n3.pct)} of what came in.`;case"overspent":return`You spent ${money(n3.amount)} more than came in.`;case"tax":return n3.moved>=n3.should?`Taxes are covered: ${money(n3.moved)} set aside, ${n3.rate}% of money in.`:`Taxes: ${money(n3.moved)} set aside of ${money(n3.should)} (${n3.rate}% of money in).`;case"biggest":return`${n3.name} was the biggest spend at ${money(n3.amount)}.`;case"jump":return`${n3.name} went up the most since ${prevName} (+${money(n3.diff)}).`;default:return""}}function Summary({params}){let{data:d3,error,loading,reload}=useData(`/api/summary${params.month?`?month=${params.month}`:""}`);if(loading&&!d3)return html`<${Loading} />`;if(error)return html`<${Failed} error=${error} retry=${reload} />`;let name=monthName(d3.month),prevName=d3.prev?monthName(d3.prev):"last month",maxWhere=Math.max(1,...d3.where.map(w2=>w2.spent));return html`
    <div class="pagehead">
      <div><h1 class="disp">${name}, in one look</h1>
        <div class="sub">${d3.complete?"The whole month":"So far this month"} · from your budget, in plain words</div></div>
      <div class="right"><${MonthNav} month=${d3.month} prev=${d3.prev} next=${d3.next} screen="summary" /></div>
    </div>
    <div class="sumtiles">
      <section class="card tile"><div class="lbl">Money in</div><div class="tileNum disp num good">${money(d3.moneyIn)}</div>
        <div class="muted" style="font-size:13px">${money(d3.moneyOut)} went out</div></section>
      <section class="card tile"><div class="lbl">Kept</div>
        <div class=${`tileNum disp num ${d3.kept<0?"bad":"mint"}`}>${money(d3.kept)}</div>
        <div class="muted" style="font-size:13px">${d3.keptPct==null?"nothing came in":`${pct(Math.max(d3.keptPct,0))} of what came in`}</div></section>
      <section class="card tile"><div class="lbl">Taxes set aside</div>
        <div class="tileNum disp num">${d3.tax?money(d3.tax.moved):"—"}</div>
        <div class="muted" style="font-size:13px">${d3.tax?d3.tax.moved>=d3.tax.should?"covered":`of ${money(d3.tax.should)}`:"not set up"}</div></section>
      <section class="card tile"><div class="lbl">Net worth</div>
        <div class="tileNum disp num">${d3.netWorth==null?"—":money(d3.netWorth)}</div>
        ${d3.netWorth==null?html`<div class="muted" style="font-size:13px">no accounts yet</div>`:html`<div class=${d3.netChange<0?"bad":"good"} style="font-size:13px">${money(d3.netChange,{sign:!0})} ${d3.complete?`in ${name}`:"so far this month"}</div>`}</section>
    </div>
    <div class="sumcols">
      <section class="card pad" style="display:flex;flex-direction:column;gap:12px">
        <div class="cardhead" style="margin:0"><h2>Where it went</h2></div>
        ${d3.where.map(w2=>html`<div class="whererow">
          <span>${w2.name}</span><div class="bar thin"><i style=${{width:pct(w2.spent/maxWhere),background:catColor(w2.color)}}></i></div>
          <span class="v num">${money(w2.spent)}</span></div>`)}
        ${!d3.where.length&&html`<div class="muted">Nothing spent.</div>`}
        <div class="cardhead" style="margin:18px 0 0"><h2>${d3.six.length>1?`Last ${d3.six.length} months`:"Month by month"}</h2>
          <span class="aside legend"><span><i style="background:var(--chart-in)"></i>in</span><span><i style="background:var(--chart-out)"></i>out</span></span></div>
        ${d3.six.length?html`<div style="flex:1;min-height:150px;display:flex;align-items:flex-end">
          <${Bars} width=${640} height=${170} colorA="var(--chart-in)" colorB="var(--chart-out)"
            pairs=${d3.six.map(m2=>({label:monthShort(m2.month),a:m2.in,b:m2.out}))} /></div>`:html`<div class="muted" style="font-size:13.5px">No history yet.</div>`}
      </section>
      <div style="display:flex;flex-direction:column;gap:16px;min-width:0">
        <section class="card plain">
          <div class="row" style="align-items:center;gap:11px"><div class="orb sm"><${Icon} name="spark" size=${15} sw=${2} /></div>
            <h2 style="font-size:16.5px">In plain words</h2>
            ${!d3.notesFromHelper&&html`<span class="muted" style="font-size:12px;margin-left:auto">from the numbers</span>`}</div>
          <ul>${d3.notes.map(n3=>html`<li>${fact(n3,prevName)}</li>`)}</ul>
          ${!d3.notes.length&&html`<p class="muted" style="margin-top:8px">Not much happened this month.</p>`}
        </section>
        <section class="card pad" style="flex:1">
          <div class="cardhead"><h2>Biggest changes vs ${prevName}</h2>
            ${d3.comparedByDay&&html`<span class="aside">both up to the ${ordinal(d3.comparedByDay)}</span>`}</div>
          ${d3.changes.map(c3=>html`<div class="list-row"><span>${c3.name}</span>
            <span class="r num"><span class=${c3.diff>0?"bad":"good"}>${money(c3.diff,{sign:!0})}</span>
            ${c3.pct!=null&&html`<span class="muted" style="font-weight:500"> (${c3.pct>0?"+":""}${pct(c3.pct)})</span>`}</span></div>`)}
          ${!d3.changes.length&&html`<div class="muted" style="font-size:13.5px">${d3.prev?"No changes worth noting.":`No ${prevName} to compare with.`}</div>`}
        </section>
      </div>
    </div>`}var seriesColor=i3=>`var(--cat-${i3%14+1})`,IN="var(--chart-in)",OUT="var(--chart-out)",BAR="var(--chart-bar)",COLORS={in:IN,out:OUT,bar:BAR};function niceScale(lo,hi,n3=4){lo=Math.min(lo,0),hi=Math.max(hi,0),hi===lo&&(hi=lo+100);let raw=(hi-lo)/n3,mag=10**Math.floor(Math.log10(raw)),step=[1,2,2.5,5,10].map(m2=>m2*mag).find(s3=>s3>=raw)||raw,a3=Math.floor(lo/step)*step,b3=Math.ceil(hi/step)*step,ticks=[];for(let v3=a3;v3<=b3+step/2;v3+=step)ticks.push(Math.round(v3));return{lo:a3,hi:b3,ticks}}var W=640,L2=62,R=10,T3=12,B3=26;function TimeChart({labels,series,mode:mode2="line",height=220,title="Chart",fmt:fmt2=money}){let n3=labels.length;if(!n3||!series.length)return html`<div class="muted" style="padding:20px 0">Nothing to draw.</div>`;let stacked=mode2==="stack-bars"||mode2==="stack-area",lo=0,hi=0;for(let i3=0;i3<n3;i3++)if(stacked){let pos=0,neg=0;for(let s3 of series){let v3=s3.values[i3]||0;v3>=0?pos+=v3:neg+=v3}hi=Math.max(hi,pos),lo=Math.min(lo,neg)}else for(let s3 of series){let v3=s3.values[i3];v3!=null&&(hi=Math.max(hi,v3),lo=Math.min(lo,v3))}let sc=niceScale(lo,hi),lowest=sc.lo,plotW=W-L2-R,plotH=height-T3-B3,y3=v3=>T3+plotH-(v3-lowest)/(sc.hi-lowest||1)*plotH,slot=plotW/n3,cx=i3=>L2+(mode2.includes("bars")?slot*i3+slot/2:n3===1?plotW/2:plotW*i3/(n3-1)),every=Math.max(1,Math.ceil(n3/8)),zeroY=y3(Math.max(lowest,0)),grid=sc.ticks.filter(t4=>t4>=lowest).map(t4=>html`<g key=${t4}>
    <line x1=${L2} x2=${W-R} y1=${y3(t4)} y2=${y3(t4)} style=${`stroke:var(--${t4===0?"line":"line2"});stroke-width:1`}/>
    <text x=${L2-8} y=${y3(t4)+4} text-anchor="end" style="fill:var(--muted);font-size:11px">${fmt2(t4)}</text></g>`),xs=labels.map((lab,i3)=>(i3%every===0||i3===n3-1)&&html`<text key=${i3} x=${cx(i3)} y=${height-8} text-anchor="middle"
    style="fill:var(--muted);font-size:11px">${lab}</text>`),body;if(mode2==="bars"||mode2==="stack-bars"){let k3=mode2==="bars"?series.length:1,bw=Math.max(2,Math.min(34,(slot-6)/k3));body=labels.map((lab,i3)=>{if(mode2==="bars")return html`<g key=${i3}>${series.map((s3,j3)=>{let v3=s3.values[i3]||0,top=y3(Math.max(v3,0)),bot=y3(Math.min(v3,0));return html`<rect x=${cx(i3)-bw*k3/2+j3*bw} y=${top} width=${Math.max(bw-1,1)} height=${Math.max(bot-top,v3?1:0)} rx="2" style=${`fill:${s3.color}`}>
            <title>${`${lab}: ${s3.name} ${fmt2(v3)}`}</title></rect>`})}</g>`;let pos=0,neg=0;return html`<g key=${i3}>${series.map(s3=>{let v3=s3.values[i3]||0;if(!v3)return null;let from=v3>=0?pos:neg,to=from+v3;v3>=0?pos=to:neg=to;let top=y3(Math.max(from,to)),bot=y3(Math.min(from,to));return html`<rect x=${cx(i3)-bw/2} y=${top} width=${bw} height=${Math.max(bot-top-.5,1)} style=${`fill:${s3.color}`}>
          <title>${`${lab}: ${s3.name} ${fmt2(v3)}`}</title></rect>`})}</g>`})}else if(mode2==="stack-area"){let base=labels.map(()=>0);body=series.map((s3,j3)=>{let upper=s3.values.map((v3,i3)=>base[i3]+(v3||0)),d3=`M${upper.map((v3,i3)=>`${cx(i3).toFixed(1)},${y3(v3).toFixed(1)}`).join(" L")} L${base.map((_3,i3)=>`${cx(n3-1-i3).toFixed(1)},${y3(base[n3-1-i3]).toFixed(1)}`).join(" L")} Z`;return upper.forEach((v3,i3)=>{base[i3]=v3}),html`<path key=${j3} d=${d3} style=${`fill:${s3.color};opacity:.85;stroke:var(--card-bg);stroke-width:1`}><title>${s3.name}</title></path>`})}else body=series.map((s3,j3)=>{let pts=s3.values.map((v3,i3)=>v3==null?null:[cx(i3),y3(v3)]),segs=[],cur=[];for(let p3 of pts)p3?cur.push(p3):cur.length&&(segs.push(cur),cur=[]);return cur.length&&segs.push(cur),html`<g key=${j3}>${segs.map((seg,m2)=>{let d3="M"+seg.map(([a3,b3])=>`${a3.toFixed(1)},${b3.toFixed(1)}`).join(" L");return html`<g key=${m2}>
          ${mode2==="area"&&html`<path d=${`${d3} L${seg.at(-1)[0].toFixed(1)},${zeroY} L${seg[0][0].toFixed(1)},${zeroY} Z`} style=${`fill:${s3.color};opacity:.16;stroke:none`}/>`}
          <path d=${d3} style=${`fill:none;stroke:${s3.color};stroke-width:2.4;stroke-linejoin:round;stroke-linecap:round`}/>
          ${seg.length===1&&html`<circle cx=${seg[0][0]} cy=${seg[0][1]} r="3.5" style=${`fill:${s3.color}`}/>`}</g>`})}${s3.values.map((v3,i3)=>v3!=null&&n3<=40&&html`<circle key=${i3} cx=${cx(i3)} cy=${y3(v3)} r=${n3<=14?3:2} style=${`fill:${s3.color}`}><title>${`${labels[i3]}: ${s3.name} ${fmt2(v3)}`}</title></circle>`)}</g>`});return html`<svg viewBox=${`0 0 ${W} ${height}`} width="100%" class="achart" role="img" aria-label=${title}>${grid}${body}${xs}</svg>`}function Spark({values,color=BAR,height=56,area=!0,title="Trend"}){let pts=values.map((v3,i3)=>[i3,v3]).filter(([,v3])=>v3!=null);if(pts.length<2)return null;let lo=Math.min(0,...pts.map(p3=>p3[1])),hi=Math.max(1,...pts.map(p3=>p3[1])),w2=300,pad2=4,x2=i3=>pad2+i3/(values.length-1)*(w2-pad2*2),y3=v3=>height-pad2-(v3-lo)/(hi-lo||1)*(height-pad2*2),d3="M"+pts.map(([i3,v3])=>`${x2(i3).toFixed(1)},${y3(v3).toFixed(1)}`).join(" L");return html`<svg viewBox=${`0 0 ${w2} ${height}`} width="100%" height=${height} preserveAspectRatio="none" class="achart" role="img" aria-label=${title}>
    ${area&&html`<path d=${`${d3} L${x2(pts.at(-1)[0]).toFixed(1)},${y3(Math.max(lo,0))} L${x2(pts[0][0]).toFixed(1)},${y3(Math.max(lo,0))} Z`} style=${`fill:${color};opacity:.16;stroke:none`}/>`}
    <path d=${d3} style=${`fill:none;stroke:${color};stroke-width:2.2;stroke-linejoin:round;stroke-linecap:round;vector-effect:non-scaling-stroke`}/></svg>`}function Legend({items}){return html`<div class="alegend">${items.map(it=>html`<span key=${it.name}><i style=${`background:${it.color}`}></i>${it.name}</span>`)}</div>`}function DonutChart({parts:parts2,size=190,center}){let total=parts2.reduce((s3,p3)=>s3+p3.value,0);return total<=0?html`<div class="muted" style="padding:20px 0">Nothing to show.</div>`:html`<div class="adonut">
    <${Donut} size=${size} thick=${28} parts=${parts2.map((p3,i3)=>({value:p3.value,color:seriesColor(i3)}))}>
      ${center||html`<span class="num" style="font-weight:700;font-size:17px">${money(total)}</span>`}<//>
    <div class="adonut-key">${parts2.map((p3,i3)=>html`<div key=${p3.name} class="adonut-row"><i style=${`background:${seriesColor(i3)}`}></i>
      <span class="nm">${p3.name}</span><span class="num">${money(p3.value)}</span><span class="muted num">${Math.round(p3.value/total*100)}%</span></div>`)}</div>
  </div>`}function fold(parts2,n3=8){return parts2.length<=n3?parts2:[...parts2.slice(0,n3-1),{name:"Other",value:parts2.slice(n3-1).reduce((s3,p3)=>s3+p3.value,0)}]}var runPath=(kind,opts={},saved="")=>`/api/analytics/run?kind=${kind}&opts=${encodeURIComponent(JSON.stringify(opts))}${saved?`&saved=${encodeURIComponent(saved)}`:""}`,useRun=(kind,opts,saved)=>useData(runPath(kind,opts,saved)),label=r3=>r3.short||r3.label,signed=c3=>money(c3,{sign:!0}),percent=v3=>v3==null?"–":`${Math.round(v3*10)/10}%`,toneOf=c3=>c3<0?"bad":c3>0?"good":"";function Sel({label:text,value,options,onChange}){return html`<label class="ctl"><span>${text}</span>
    <select class="field" value=${value} onChange=${e3=>onChange(e3.target.value)}>
      ${options.map(([v3,t4])=>html`<option key=${v3} value=${v3} selected=${String(v3)===String(value)}>${t4}</option>`)}</select></label>`}function Flag({label:text,on,onChange}){return html`<label class="ctl flag-ctl"><${Toggle} on=${on} onChange=${onChange} label=${text} /><span>${text}</span></label>`}function RangeSel({value,onChange,presets,text="Dates"}){let fixed=value&&typeof value=="object",today2=localToday();return html`<span class="ctl-group">
    <${Sel} label=${text} value=${fixed?"fixed":value} onChange=${v3=>onChange(v3==="fixed"?{start:fixed?value.start:`${today2.slice(0,4)}-01-01`,end:today2}:v3)}
      options=${[...presets.map(p3=>[p3.id,p3.label]),["fixed","Pick dates…"]]} />
    ${fixed&&html`<label class="ctl"><span>From</span><input class="field" type="date" value=${value.start} onChange=${e3=>e3.target.value&&onChange({...value,start:e3.target.value})} /></label>
      <label class="ctl"><span>To</span><input class="field" type="date" value=${value.end} onChange=${e3=>e3.target.value&&onChange({...value,end:e3.target.value})} /></label>`}</span>`}var INTERVAL_OPTS=[["day","Daily"],["week","Weekly"],["month","Monthly"],["year","Yearly"]];function Tile({text,value,tone:tone2="",sub}){return html`<section class="card tile"><div class="lbl">${text}</div><div class=${`tileNum disp num ${tone2}`}>${value}</div>${sub&&html`<div class="muted" style="font-size:13px">${sub}</div>`}</section>`}function Seg({value,options,onChange}){return html`<div class="seg" role="group">${options.map(([v3,t4])=>html`<button key=${v3} class=${value===v3?"on":""} aria-pressed=${value===v3} onClick=${()=>onChange(v3)}>${t4}</button>`)}</div>`}function Wait({state}){return state.error?html`<${Failed} error=${state.error} retry=${state.reload} />`:state.data?null:html`<${Loading} />`}var ENTITY_OPS=[["is","is"],["isNot","is not"],["contains","contains"]],OPS_FOR={category:ENTITY_OPS,group:ENTITY_OPS,payee:ENTITY_OPS,account:ENTITY_OPS,notes:[["contains","contains"],["doesNotContain","does not contain"]],amount:[["gt","is more than"],["gte","is at least"],["lt","is less than"],["lte","is at most"],["is","is exactly"]],cleared:[["isTrue","is cleared"],["isFalse","is not cleared"]]},FIELD_TEXT=[["category","Category"],["group","Category group"],["payee","Payee"],["account","Account"],["notes","Notes"],["amount","Amount"],["cleared","Cleared"]];function Filter({c:c3,meta,onChange,onRemove}){let field=c3.field,names=field==="category"?meta.groups.flatMap(g3=>g3.categories.map(x2=>x2.name)):field==="group"?meta.groups.map(g3=>g3.name):field==="account"?meta.accounts.map(a3=>a3.name):[],set=patch=>onChange({...c3,...patch}),list2=`dl-${field}`;return html`<div class="filter">
    <select class="field" aria-label="Filter on" value=${field} onChange=${e3=>{let f3=e3.target.value;onChange({field:f3,op:OPS_FOR[f3][0][0],value:f3==="amount"?0:""})}}>
      ${FIELD_TEXT.map(([v3,t4])=>html`<option key=${v3} value=${v3} selected=${v3===field}>${t4}</option>`)}</select>
    <select class="field" aria-label="Is" value=${c3.op} onChange=${e3=>set({op:e3.target.value})}>
      ${OPS_FOR[field].map(([v3,t4])=>html`<option key=${v3} value=${v3} selected=${v3===c3.op}>${t4}</option>`)}</select>
    ${field==="amount"?html`<input class="field" type="number" min="0" step="0.01" aria-label="Amount" value=${(Number(c3.value)||0)/100}
      onChange=${e3=>set({value:Math.round(Math.abs(Number(e3.target.value)||0)*100)})} />`:field==="cleared"?null:html`<input class="field" list=${field==="payee"?"dl-payee":names.length?list2:void 0} aria-label="Value" placeholder=${field==="notes"?"Words in the notes":"Pick or type a name"}
          value=${Array.isArray(c3.value)?c3.value.join(", "):c3.value} onChange=${e3=>set({value:e3.target.value})} />
          ${names.length>0&&html`<datalist id=${list2}>${[...new Set(names)].map(n3=>html`<option key=${n3} value=${n3} />`)}</datalist>`}`}
    <button class="btn small ghost" aria-label="Remove this filter" onClick=${onRemove}><${Icon} name="x" size=${14} /></button></div>`}function Filters({meta,conditions,op,onChange}){let list2=conditions||[];return html`<div class="filters">
    ${meta.payees.length>0&&html`<datalist id="dl-payee">${meta.payees.map(p3=>html`<option key=${p3.id} value=${p3.name} />`)}</datalist>`}
    ${list2.map((c3,i3)=>html`<${Filter} key=${i3} c=${c3} meta=${meta} onChange=${n3=>onChange(list2.map((x2,k3)=>k3===i3?n3:x2),op)} onRemove=${()=>onChange(list2.filter((_3,k3)=>k3!==i3),op)} />`)}
    <div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">
      <button class="btn small" onClick=${()=>onChange([...list2,{field:"category",op:"is",value:""}],op)}><${Icon} name="plus" size=${14} />Add a filter</button>
      ${list2.length>1&&html`<${Sel} label="Match" value=${op||"and"} onChange=${v3=>onChange(list2,v3)} options=${[["and","all of them"],["or","any of them"]]} />`}</div></div>`}var usable=list2=>(list2||[]).filter(c3=>c3.field==="cleared"||(c3.field==="amount"?Number(c3.value)>0:String(Array.isArray(c3.value)?c3.value.join(""):c3.value).trim()));function NetWorth({meta}){let[range2,setRange]=d2("last_12_months"),[interval,setInterval2]=d2("month"),[mode2,setMode]=d2("total"),[picked,setPicked]=d2([]),state=useRun("networth",{range:range2,interval,accountIds:picked.length?picked:void 0}),d3=state.data,pts=d3?.points||[],series=d3?mode2==="total"?[{name:"Net worth",color:COLORS.bar,values:pts.map(p3=>p3.total)}]:[...d3.accounts].sort((a3,b3)=>Math.abs(b3.balance)-Math.abs(a3.balance)).map((a3,i3)=>({name:a3.name,color:seriesColor(i3),values:pts.map(p3=>p3.perAccount[a3.id]||0)})):[];return html`
    <div class="controls"><${RangeSel} value=${range2} onChange=${setRange} presets=${meta.presets} />
      <${Sel} label="Points" value=${interval} onChange=${setInterval2} options=${INTERVAL_OPTS} />
      <${Seg} value=${mode2} onChange=${setMode} options=${[["total","Total"],["stack","Stacked"],["line","By account"]]} /></div>
    <div class="chips-pick" role="group" aria-label="Accounts">${meta.accounts.map(a3=>html`<button key=${a3.id} class=${`chip${picked.includes(a3.id)?" on":""}`} aria-pressed=${picked.includes(a3.id)}
      onClick=${()=>setPicked(picked.includes(a3.id)?picked.filter(x2=>x2!==a3.id):[...picked,a3.id])}>${a3.name}${a3.offbudget?" · off budget":""}${a3.closed?" · closed":""}</button>`)}
      ${picked.length>0&&html`<button class="chip" onClick=${()=>setPicked([])}>All accounts</button>`}</div>
    <${Wait} state=${state} />
    ${d3&&html`
      <div class="reptiles">
        <${Tile} text="Net worth now" value=${money(d3.summary.end)} tone=${toneOf(d3.summary.end)} sub=${d3.range.label} />
        <${Tile} text="Change" value=${signed(d3.summary.change)} tone=${toneOf(d3.summary.change)} sub=${d3.summary.changePct==null?"since the start":`${percent(d3.summary.changePct)} since the start`} />
        <${Tile} text="Assets" value=${money(d3.summary.assets)} />
        <${Tile} text="Debts" value=${money(d3.summary.debts)} tone=${d3.summary.debts<0?"bad":""} />
      </div>
      <section class="card pad">
        <div class="cardhead"><h2>Net worth over time</h2><span class="aside">${d3.range.label}</span></div>
        <${TimeChart} labels=${pts.map(label)} series=${series} mode=${mode2==="total"?"area":mode2==="stack"?"stack-bars":"line"} title="Net worth over time" />
        ${mode2!=="total"&&html`<${Legend} items=${series.map(s3=>({name:s3.name,color:s3.color}))} />`}
      </section>
      <section class="card pad">
        <div class="cardhead"><h2>Each account</h2></div>
        ${d3.accounts.map(a3=>html`<div key=${a3.id} class="list-row"><span class="mid"><b>${a3.name}</b>
          <span class="tcat" style="display:block">${a3.offbudget?"Off budget":"On budget"}${a3.closed?" · closed":""}</span></span>
          <span class="r num">${money(a3.balance)}</span><span class=${`num ${toneOf(a3.change)}`} style="min-width:92px;text-align:right">${signed(a3.change)}</span></div>`)}
        ${!d3.accounts.length&&html`<div class="muted">No accounts.</div>`}
      </section>`}`}function CashFlow({meta}){let[range2,setRange]=d2("last_6_months"),[interval,setInterval2]=d2("month"),[off,setOff]=d2(!1),state=useRun("cashflow",{range:range2,interval,showOffBudget:off}),d3=state.data,rows=d3?.intervals||[];return html`
    <div class="controls"><${RangeSel} value=${range2} onChange=${setRange} presets=${meta.presets} />
      <${Sel} label="Points" value=${interval} onChange=${setInterval2} options=${INTERVAL_OPTS} />
      <${Flag} label="Include off-budget accounts" on=${off} onChange=${setOff} /></div>
    <${Wait} state=${state} />
    ${d3&&html`
      <div class="reptiles">
        <${Tile} text="Money in" value=${money(d3.totals.income)} tone="good" />
        <${Tile} text="Money out" value=${money(d3.totals.expenses)} />
        <${Tile} text="Transfers" value=${signed(d3.totals.transfers)} sub="to or from accounts left out" />
        <${Tile} text="Net" value=${signed(d3.totals.net)} tone=${toneOf(d3.totals.net)} sub=${`balance ${money(d3.startBalance)} to ${money(d3.endBalance)}`} />
      </div>
      <section class="card pad">
        <div class="cardhead"><h2>Money in and out</h2><span class="aside">${d3.range.label}</span></div>
        <${TimeChart} labels=${rows.map(label)} mode="bars" title="Money in and money out"
          series=${[{name:"In",color:COLORS.in,values:rows.map(r3=>r3.income)},{name:"Out",color:COLORS.out,values:rows.map(r3=>r3.expenses)}]} />
        <${Legend} items=${[{name:"In",color:COLORS.in},{name:"Out",color:COLORS.out}]} />
      </section>
      <section class="card pad">
        <div class="cardhead"><h2>Balance</h2><span class="aside">${off?"all accounts":"on-budget accounts"}</span></div>
        <${TimeChart} labels=${rows.map(label)} mode="area" title="Balance" series=${[{name:"Balance",color:COLORS.bar,values:rows.map(r3=>r3.balance)}]} />
      </section>
      <section class="card pad scrollx"><table class="atable"><thead><tr><th></th><th>In</th><th>Out</th><th>Transfers</th><th>Net</th><th>Balance</th></tr></thead>
        <tbody>${rows.map(r3=>html`<tr key=${r3.key}><th>${r3.label}</th><td class="num">${money(r3.income)}</td><td class="num">${money(r3.expenses)}</td>
          <td class="num">${money(r3.transfers)}</td><td class=${`num ${toneOf(r3.net)}`}>${signed(r3.net)}</td><td class="num">${money(r3.balance)}</td></tr>`)}</tbody></table></section>`}`}function Spending({meta}){let[month2,setMonth]=d2(null),[compare,setCompare]=d2("budget"),state=useRun("spending",{compare,...month2?{month:month2}:{}}),d3=state.data,m2=d3?.month||month2||meta.today.slice(0,7),cur=meta.today.slice(0,7),days=d3?Array.from({length:d3.days},(_3,i3)=>String(i3+1)):[],series=d3?[...d3.comparison?[{name:d3.label,color:"var(--text3)",values:d3.comparison}]:[],{name:"Spent",color:COLORS.out,values:days.map((_3,i3)=>i3<d3.upto?d3.current[i3]:null)}]:[];return html`
    <div class="controls">
      <span class="monthnav"><button class="btn small" aria-label="Earlier month" onClick=${()=>setMonth(addMonths(m2,-1))}><${Icon} name="left" size=${14} /></button>
        <b>${monthLabel(m2)}</b>
        <button class="btn small" aria-label="Later month" disabled=${m2>=cur} onClick=${()=>setMonth(addMonths(m2,1)>=cur?null:addMonths(m2,1))}><${Icon} name="chev" size=${14} /></button></span>
      <${Sel} label="Compare with" value=${compare} onChange=${setCompare}
        options=${[["budget","The budget"],["last_month","Last month"],["last_year","A year ago"],["average","The last 3 months"]]} /></div>
    <${Wait} state=${state} />
    ${d3&&html`
      <div class="reptiles">
        <${Tile} text=${`Spent by day ${d3.upto||0}`} value=${money(d3.spent)} />
        ${d3.available?html`<${Tile} text=${`${d3.label} by now`} value=${money(d3.comparisonSoFar)} sub=${d3.comparisonTotal!=null?`${money(d3.comparisonTotal)} for the whole month`:""} />
          <${Tile} text=${d3.diff>0?"Over by":"Under by"} value=${money(Math.abs(d3.diff))} tone=${d3.diff>0?"bad":"good"} sub=${d3.diff>0?"▲ more than the comparison":"▼ less than the comparison"} />`:html`<${Tile} text="Comparison" value="–" sub=${d3.reason} />`}
      </div>
      <section class="card pad">
        <div class="cardhead"><h2>Spending through the month</h2><span class="aside">${monthLabel(m2)}</span></div>
        <${TimeChart} labels=${days} series=${series} mode="line" title="Spending through the month, running total" />
        <${Legend} items=${series.map(s3=>({name:s3.name,color:s3.color}))} />
      </section>
      <section class="card pad">
        <div class="cardhead"><h2>By category</h2><span class="aside">${d3.available?`vs ${d3.label.toLowerCase()}`:""}</span></div>
        ${d3.categories.map(c3=>html`<div key=${c3.key} class="list-row"><span class="mid"><b>${c3.name}</b>${c3.group&&html`<span class="tcat" style="display:block">${c3.group}</span>`}</span>
          <span class="num">${money(c3.spent)}</span>
          ${c3.comparison!=null&&html`<span class="muted num" style="min-width:110px;text-align:right">of ${money(c3.comparison)}</span>
            <span class=${`num ${c3.diff>0?"bad":"good"}`} style="min-width:92px;text-align:right">${c3.diff>0?"▲":c3.diff<0?"▼":""} ${money(Math.abs(c3.diff))}</span>`}</div>`)}
        ${!d3.categories.length&&html`<div class="muted">Nothing spent yet this month.</div>`}
      </section>`}`}var SUMMARY_TYPES=[["sum","Total"],["avg_month","Average per month"],["avg_transaction","Average per transaction"],["avg_year","Average per year"],["percent","Share of all"]],BALANCE_OPTS=[["expense","Spending"],["income","Income"],["net","Net"]];function summaryText(d3){let what={expense:"spending",income:"income",net:"net change"}[d3.balanceType];return{sum:`Total ${what}`,avg_month:`Average ${what} per month`,avg_transaction:`Average ${what} per transaction`,avg_year:`Average ${what} per year`,percent:`Share of all ${what}`}[d3.type]}function Summary2({meta}){let[type,setType]=d2("sum"),[balanceType,setBalanceType]=d2("expense"),[range2,setRange]=d2("last_12_months"),[f3,setF]=d2({conditions:[],op:"and"}),state=useRun("summary",{type,balanceType,range:range2,conditions:usable(f3.conditions),conditionsOp:f3.op}),d3=state.data;return html`
    <div class="controls"><${Sel} label="Show" value=${type} onChange=${setType} options=${SUMMARY_TYPES} />
      <${Sel} label="Of" value=${balanceType} onChange=${setBalanceType} options=${BALANCE_OPTS} />
      <${RangeSel} value=${range2} onChange=${setRange} presets=${meta.presets} /></div>
    <details class="card pad filterbox" open=${f3.conditions.length>0}><summary>Filters${f3.conditions.length?` (${f3.conditions.length})`:""}</summary>
      <${Filters} meta=${meta} conditions=${f3.conditions} op=${f3.op} onChange=${(conditions,op)=>setF({conditions,op})} /></details>
    <${Wait} state=${state} />
    ${d3&&html`<section class="card pad summarybig">
      <div class="lbl">${summaryText(d3)}</div>
      <div class=${`tileNum disp num ${d3.unit==="money"&&d3.balanceType==="net"?toneOf(d3.value):""}`} style="font-size:56px">${d3.unit==="percent"?percent(d3.value):money(d3.value,{decimals:d3.type==="avg_transaction"})}</div>
      <div class="muted">${d3.range.label} · ${d3.count} transaction${d3.count===1?"":"s"}${d3.type==="percent"&&d3.denominator?` · ${money(d3.total)} of ${money(d3.denominator)}`:""}</div>
    </section>`}`}function Calendar({meta}){let[month2,setMonth]=d2(meta.today.slice(0,7)),[off,setOff]=d2(!1),[f3,setF]=d2({conditions:[],op:"and"}),[day2,setDay]=d2(null),state=useRun("calendar",{month:month2,showOffBudget:off,conditions:usable(f3.conditions),conditionsOp:f3.op}),d3=state.data,head=d3?d3.weeks[0].map(c3=>new Date(`${c3.date}T12:00:00`).toLocaleDateString("en-US",{weekday:"short"})):[],picked=d3&&day2?d3.days[day2]:null,cur=meta.today.slice(0,7);return html`
    <div class="controls">
      <span class="monthnav"><button class="btn small" aria-label="Earlier month" onClick=${()=>{setMonth(addMonths(month2,-1)),setDay(null)}}><${Icon} name="left" size=${14} /></button>
        <b>${monthLabel(month2)}</b>
        <button class="btn small" aria-label="Later month" disabled=${month2>=cur} onClick=${()=>{setMonth(addMonths(month2,1)),setDay(null)}}><${Icon} name="chev" size=${14} /></button></span>
      <${Flag} label="Include off-budget accounts" on=${off} onChange=${setOff} /></div>
    <details class="card pad filterbox" open=${f3.conditions.length>0}><summary>Filters${f3.conditions.length?` (${f3.conditions.length})`:""}</summary>
      <${Filters} meta=${meta} conditions=${f3.conditions} op=${f3.op} onChange=${(conditions,op)=>setF({conditions,op})} /></details>
    <${Wait} state=${state} />
    ${d3&&html`
      <div class="reptiles">
        <${Tile} text="Money in" value=${money(d3.totals.income)} tone="good" />
        <${Tile} text="Spending" value=${money(d3.totals.spending)} />
        <${Tile} text="Transactions" value=${String(d3.totals.count)} />
      </div>
      <section class="card pad">
        <div class="calgrid" role="grid" aria-label=${`${monthLabel(month2)} by day`}>
          ${head.map(h3=>html`<div key=${h3} class="calhead" role="columnheader">${h3}</div>`)}
          ${d3.weeks.flat().map(c3=>{let heat=d3.max&&c3.spending?Math.round(c3.spending/d3.max*55):0;return html`<button key=${c3.date} role="gridcell" class=${`calcell${c3.inMonth?"":" out"}${day2===c3.date?" on":""}`} disabled=${!c3.inMonth||!c3.count}
      style=${heat?`background:color-mix(in srgb, var(--chart-out) ${heat}%, transparent)`:""} aria-label=${`${shortDate(c3.date)}: ${c3.count} transactions`}
      onClick=${()=>setDay(day2===c3.date?null:c3.date)}>
      <span class="dn">${Number(c3.date.slice(8))}</span>
      ${c3.income>0&&html`<span class="in num">+${money(c3.income)}</span>`}
      ${c3.spending>0&&html`<span class="out num">−${money(c3.spending)}</span>`}</button>`})}
        </div>
        <${Legend} items=${[{name:"Money in",color:COLORS.in},{name:"Spending (darker = more)",color:COLORS.out}]} />
      </section>
      ${picked&&html`<section class="card pad">
        <div class="cardhead"><h2>${longDate(day2)}</h2><span class="aside">${picked.count} transaction${picked.count===1?"":"s"}</span></div>
        ${picked.txns.map((t4,i3)=>html`<div key=${i3} class="list-row"><span class="mid"><b>${t4.payee}</b>
          <span class="tcat" style="display:block">${t4.category||"No category"}${t4.account?` · ${t4.account}`:""}${t4.notes?` · ${t4.notes}`:""}</span></span>
          <span class=${`r num ${t4.amount>0?"good":""}`}>${money(t4.amount,{decimals:!0})}</span></div>`)}
        ${picked.count>picked.txns.length&&html`<div class="muted">and ${picked.count-picked.txns.length} more</div>`}
      </section>`}`}`}function AgeOfMoney({meta}){let[range2,setRange]=d2("last_12_months"),state=useRun("ageofmoney",{range:range2}),d3=state.data,dayText=v3=>`${v3} day${v3===1?"":"s"}`;return html`
    <div class="controls"><${RangeSel} value=${range2} onChange=${setRange} presets=${meta.presets} /></div>
    <${Wait} state=${state} />
    ${d3&&html`
      <div class="reptiles">
        <${Tile} text="Age of money" value=${d3.days==null?"–":dayText(d3.days)} sub=${d3.days==null?"No spending yet to measure.":"the average age of the last 10 payments"} />
        <${Tile} text="Compared with 30 days ago" value=${d3.change==null?"–":`${d3.change>0?"▲ +":d3.change<0?"▼ −":""}${Math.abs(d3.change)} d`} tone=${d3.change>0?"good":d3.change<0?"bad":""}
          sub=${d3.change>0?"older is better":d3.change<0?"getting younger":""} />
        <${Tile} text="Payments counted" value=${String(d3.payments)} />
      </div>
      <section class="card pad">
        <div class="cardhead"><h2>Age of money by month</h2><span class="aside">${d3.range.label}</span></div>
        <${TimeChart} labels=${d3.points.map(label)} mode="area" title="Age of money by month, in days" fmt=${v3=>`${Math.round(v3)} d`}
          series=${[{name:"Days",color:COLORS.bar,values:d3.points.map(p3=>p3.days)}]} />
        <div class="muted" style="font-size:13px;margin-top:8px">Money you earn joins the back of a line and every payment is paid from the front. The age is how long that money waited. The higher it is, the further ahead of your bills you are.</div>
      </section>`}`}var numField=(text,value,set,{min=0,max=100,step=.1,hint}={})=>html`<label class="ctl"><span>${text}</span>
  <input class="field narrow" type="number" min=${min} max=${max} step=${step} value=${value} placeholder=${hint} onChange=${e3=>set(e3.target.value===""?"":Number(e3.target.value))} /></label>`;function Crossover(){let[o3,setO]=d2({swr:4,returnPct:5,inflationPct:0,contribution:"",expenses:""}),asked2={swr:o3.swr,returnPct:o3.returnPct,inflationPct:o3.inflationPct};o3.contribution!==""&&(asked2.contribution=Math.round(o3.contribution*100)),o3.expenses!==""&&(asked2.expenses=Math.round(o3.expenses*100));let state=useRun("crossover",asked2),d3=state.data,set=k3=>v3=>setO({...o3,[k3]:v3}),when2=d3?.available?d3.crossed?"Already there":d3.crossover?`${Math.floor(d3.crossover.months/12)} year${Math.floor(d3.crossover.months/12)===1?"":"s"}${d3.crossover.months%12?` ${d3.crossover.months%12} mo`:""}`:`Not within ${d3.horizon} years`:"",pts=d3?.points||[];return html`
    <div class="controls">${numField("Safe withdrawal %",o3.swr,set("swr"),{min:.5,max:20})}${numField("Yearly return %",o3.returnPct,set("returnPct"),{min:-10,max:30})}
      ${numField("Inflation %",o3.inflationPct,set("inflationPct"),{min:0,max:20})}
      ${numField("Saved per month",o3.contribution,set("contribution"),{max:1e6,step:10,hint:d3?.available?String(Math.round(d3.monthlyContribution/100)):"auto"})}
      ${numField("Spending per month",o3.expenses,set("expenses"),{max:1e6,step:10,hint:d3?.available?String(Math.round(d3.monthlyExpenses/100)):"auto"})}</div>
    <${Wait} state=${state} />
    ${d3&&!d3.available&&html`<section class="card empty" style="flex:1"><${Icon} name="chart" size=${30} style="color:var(--mint)" /><b>No investment accounts</b><span>${d3.reason}</span></section>`}
    ${d3?.available&&html`
      <div class="reptiles">
        <${Tile} text="Crossover point" value=${when2} tone=${d3.crossed?"good":""} sub=${d3.crossover&&!d3.crossed?monthLabel(d3.crossover.month):"when investments can pay your spending"} />
        <${Tile} text="Invested now" value=${money(d3.startBalance)} sub=${d3.accounts.map(a3=>a3.name).join(", ")} />
        <${Tile} text="They could pay" value=${`${money(d3.currentIncome)}/mo`} sub=${`of ${money(d3.monthlyExpenses)}/mo you spend`} />
        <${Tile} text="Saved per month" value=${money(d3.monthlyContribution)} sub="into the investments" />
      </div>
      <section class="card pad">
        <div class="cardhead"><h2>Investment income against spending</h2><span class="aside">per month, by year</span></div>
        <${TimeChart} labels=${pts.map(p3=>String(p3.year))} mode="line" title="Monthly investment income against monthly spending"
          series=${[{name:"Investments could pay",color:COLORS.in,values:pts.map(p3=>p3.income)},{name:"You spend",color:COLORS.out,values:pts.map(p3=>p3.expenses)}]} />
        <${Legend} items=${[{name:"Investments could pay",color:COLORS.in},{name:"You spend",color:COLORS.out}]} />
      </section>
      ${d3.past.length>1&&html`<section class="card pad">
        <div class="cardhead"><h2>The investments so far</h2></div>
        <${TimeChart} labels=${d3.past.map(p3=>monthShort(p3.month))} mode="area" title="Investment balance so far" series=${[{name:"Balance",color:COLORS.bar,values:d3.past.map(p3=>p3.balance)}]} />
      </section>`}`}`}var BLANK=Object.freeze({graph:"bar",groupBy:"category",balanceType:"expense",interval:"month",range:"last_6_months",sort:"desc",conditionsOp:"and",conditions:[],showEmpty:!1,showHidden:!1,showOffBudget:!1,showUncategorized:!0}),GRAPH_OPTS=[["bar","Bar"],["stacked","Stacked bar"],["line","Line"],["area","Area"],["donut","Donut"],["table","Table"]],GROUP_OPTS=[["category","Category"],["group","Category group"],["payee","Payee"],["account","Account"],["interval","Time only"]];function seriesOf(groups,intervals,n3=8){let head=groups.slice(0,groups.length>n3?n3-1:n3).map((g3,i3)=>({name:g3.name,color:seriesColor(i3),values:g3.values}));return groups.length>n3&&head.push({name:"Other",color:"var(--text3)",values:intervals.map((_3,i3)=>groups.slice(n3-1).reduce((s3,g3)=>s3+g3.values[i3],0))}),head}function ReportTable({d:d3,limit=0}){let wide=d3.intervals.length<=12&&d3.intervals.length>1,rows=limit?d3.groups.slice(0,limit):d3.groups;return html`<div class="scrollx"><table class="atable"><thead><tr><th></th>${wide&&d3.intervals.map(x2=>html`<th key=${x2.key}>${label(x2)}</th>`)}<th>Total</th></tr></thead>
    <tbody>${rows.map(g3=>html`<tr key=${g3.key}><th>${g3.name}${g3.sub&&html` <span class="muted">${g3.sub}</span>`}</th>${wide&&g3.values.map((v3,i3)=>html`<td key=${i3} class="num">${v3?money(v3):""}</td>`)}<td class="num"><b>${money(g3.total)}</b></td></tr>`)}
      ${!limit&&html`<tr class="sum"><th>All</th>${wide&&d3.totals.byInterval.map((x2,i3)=>html`<td key=${i3} class="num">${money(x2[d3.def.balanceType])}</td>`)}<td class="num"><b>${money(d3.totals[d3.def.balanceType])}</b></td></tr>`}</tbody></table></div>`}function ReportChart({d:d3,compact=!1}){if(d3.empty)return html`<div class="muted" style="padding:16px 0">No transactions match this report in ${d3.range.label.toLowerCase()}.</div>`;let{graph,groupBy}=d3.def,h3=compact?150:240,labels=d3.intervals.map(label);if(graph==="table")return html`<${ReportTable} d=${d3} limit=${compact?6:0} />`;if(graph==="donut"){let parts2=fold(d3.groups.filter(g3=>g3.total>0).map(g3=>({name:g3.name,value:g3.total})),compact?5:8);return html`<${DonutChart} parts=${parts2} size=${compact?130:190} />`}if(graph==="bar"&&groupBy!=="interval"){let rows=d3.groups.slice(0,compact?5:15),max=Math.max(1,...rows.map(g3=>Math.abs(g3.total)));return html`<div class="hbars">${rows.map(g3=>html`<div key=${g3.key} class="whererow"><span title=${g3.name}>${g3.name}</span>
      <div class="bar thin"><i style=${{width:pct(Math.abs(g3.total)/max),background:g3.total<0&&d3.def.balanceType==="net"?COLORS.out:COLORS.bar}}></i></div>
      <span class="v num">${money(g3.total)}</span></div>`)}</div>`}let series=seriesOf(d3.groups,d3.intervals,compact?5:8);return html`<${TimeChart} labels=${labels} series=${series} mode=${graph==="stacked"?"stack-bars":graph==="area"?"area":graph==="line"?"line":"bars"} height=${h3} title=${d3.def.name||"Custom report"} />
    ${!compact&&series.length>1&&html`<${Legend} items=${series.map(s3=>({name:s3.name,color:s3.color}))} />`}`}function Custom({meta,status,params={}}){let phone=!!status?.phone,[def,setDef]=d2({...BLANK}),[saved,setSaved]=d2(null),[name,setName]=d2(""),[msg,setMsg]=d2(null),[list2,setList]=d2(meta.savedReports||[]),asked2={...def,conditions:usable(def.conditions)},state=useRun("custom",asked2),d3=state.data,set=k3=>v3=>setDef({...def,[k3]:v3});async function open(id){try{let r3=await api(runPath("custom",{},id));setDef({...BLANK,...r3.def}),setSaved(r3.saved),setName(r3.saved.name),setMsg(null)}catch(e3){setMsg({bad:e3.message})}}A2(()=>{params.saved&&open(params.saved)},[params.saved]);async function save(asNew){setMsg(null);try{let r3=await api("/api/analytics/report",{...asked2,name,...saved&&!asNew?{id:saved.id}:{}});setSaved({id:r3.report.id,name:r3.report.name}),setList(l3=>[...l3.filter(x2=>x2.id!==r3.report.id),{id:r3.report.id,name:r3.report.name,graph:r3.report.graph}]),setMsg({ok:`Saved "${r3.report.name}".`})}catch(e3){setMsg({bad:e3.message})}}async function remove(){try{await api("/api/analytics/report/delete",{id:saved.id}),setList(l3=>l3.filter(x2=>x2.id!==saved.id)),setSaved(null),setName(""),setMsg({ok:"Deleted."})}catch(e3){setMsg({bad:e3.message})}}return html`
    ${list2.length>0&&html`<div class="chips-pick" role="group" aria-label="Saved reports"><span class="muted" style="font-size:12.5px">Saved:</span>
      ${list2.map(r3=>html`<button key=${r3.id} class=${`chip${saved?.id===r3.id?" on":""}`} onClick=${()=>open(r3.id)}>${r3.name}</button>`)}
      ${saved&&html`<button class="chip" onClick=${()=>{setSaved(null),setName(""),setDef({...BLANK})}}>New report</button>`}</div>`}
    <section class="card pad builder">
      <div class="controls">
        <${Sel} label="Graph" value=${def.graph} onChange=${set("graph")} options=${GRAPH_OPTS} />
        <${Sel} label="Group by" value=${def.groupBy} onChange=${set("groupBy")} options=${GROUP_OPTS} />
        <${Sel} label="Show" value=${def.balanceType} onChange=${set("balanceType")} options=${BALANCE_OPTS} />
        <${Sel} label="Interval" value=${def.interval} onChange=${set("interval")} options=${INTERVAL_OPTS} />
        <${RangeSel} value=${def.range} onChange=${set("range")} presets=${meta.presets} />
        <${Sel} label="Sort" value=${def.sort} onChange=${set("sort")} options=${[["desc","Biggest first"],["asc","Smallest first"],["name","By name"]]} />
      </div>
      <div class="controls">
        <${Flag} label="Show empty rows" on=${def.showEmpty} onChange=${set("showEmpty")} />
        <${Flag} label="Show hidden categories" on=${def.showHidden} onChange=${set("showHidden")} />
        <${Flag} label="Include off-budget accounts" on=${def.showOffBudget} onChange=${set("showOffBudget")} />
        <${Flag} label="Include uncategorized" on=${def.showUncategorized} onChange=${set("showUncategorized")} />
      </div>
      <details class="filterbox" open=${def.conditions.length>0}><summary>Filters${def.conditions.length?` (${def.conditions.length})`:""}</summary>
        <${Filters} meta=${meta} conditions=${def.conditions} op=${def.conditionsOp} onChange=${(conditions,op)=>setDef({...def,conditions,conditionsOp:op})} /></details>
      ${!phone&&html`<div class="controls savebar">
        <label class="ctl"><span>Name</span><input class="field" value=${name} maxlength="80" placeholder="Name this report" onInput=${e3=>setName(e3.target.value)} /></label>
        <button class="btn small pri" disabled=${!name.trim()} onClick=${()=>save(!1)}>${saved?"Save changes":"Save report"}</button>
        ${saved&&html`<button class="btn small" disabled=${!name.trim()} onClick=${()=>save(!0)}>Save as new</button><button class="btn small danger" onClick=${remove}>Delete</button>`}
        ${msg?.ok&&html`<span class="good" style="font-size:12.5px">${msg.ok}</span>`}${msg?.bad&&html`<span class="bad" style="font-size:12.5px">${msg.bad}</span>`}</div>`}
    </section>
    <${Wait} state=${state} />
    ${d3&&html`
      <div class="reptiles">
        <${Tile} text="Money in" value=${money(d3.totals.income)} tone="good" />
        <${Tile} text="Money out" value=${money(d3.totals.expense)} />
        <${Tile} text="Net" value=${signed(d3.totals.net)} tone=${toneOf(d3.totals.net)} sub=${`${d3.totals.count} transactions · ${d3.range.label}`} />
      </div>
      <section class="card pad">
        <div class="cardhead"><h2>${saved?.name||"Custom report"}</h2><span class="aside">${d3.groups.length} row${d3.groups.length===1?"":"s"}${d3.truncated?" (the biggest 200)":""}</span></div>
        <${ReportChart} d=${d3} />
      </section>
      ${def.graph!=="table"&&!d3.empty&&html`<section class="card pad"><div class="cardhead"><h2>The numbers</h2></div><${ReportTable} d=${d3} /></section>`}`}`}var TYPES=[["net_worth","Net worth",{w:2,h:1}],["cash_flow","Cash flow",{w:2,h:1}],["spending","Spending vs budget",{w:2,h:1}],["summary","Summary",{w:1,h:1}],["calendar","Calendar",{w:1,h:1}],["age_of_money","Age of money",{w:1,h:1}],["crossover","Crossover point",{w:1,h:1}],["text","Text note",{w:1,h:1}]],NAME2=Object.fromEntries(TYPES.map(([t4,n3])=>[t4,n3])),VIEW={net_worth:"networth",cash_flow:"cashflow",spending:"spending",summary:"summary",calendar:"calendar",age_of_money:"ageofmoney",crossover:"crossover"},RANGES=[["last_30_days","30 days"],["last_3_months","3 months"],["last_6_months","6 months"],["last_12_months","12 months"],["year_to_date","This year"],["all_time","All time"]],label2=r3=>r3.short||r3.label,tone=c3=>c3<0?"bad":c3>0?"good":"";function Big({value,sub,cls=""}){return html`<div class=${`wbig disp num ${cls}`}>${value}</div>${sub&&html`<div class="muted wsub">${sub}</div>`}`}function Body({w:w2,d:d3}){switch(w2.type){case"net_worth":return html`<${Big} value=${money(d3.summary.end)} cls=${tone(d3.summary.end)}
        sub=${`${d3.summary.change>=0?"▲":"▼"} ${money(Math.abs(d3.summary.change))} · ${d3.range.label}`} />
      <${Spark} values=${d3.points.map(p3=>p3.total)} title="Net worth over time" />`;case"cash_flow":return html`<${Big} value=${money(d3.totals.net,{sign:!0})} cls=${tone(d3.totals.net)} sub=${`${money(d3.totals.income)} in · ${money(d3.totals.expenses)} out · ${d3.range.label}`} />
      <${TimeChart} labels=${d3.intervals.map(label2)} mode="bars" height=${130} title="Money in and out"
        series=${[{name:"In",color:COLORS.in,values:d3.intervals.map(r3=>r3.income)},{name:"Out",color:COLORS.out,values:d3.intervals.map(r3=>r3.expenses)}]} />`;case"spending":{let days=Array.from({length:d3.days},(_3,i3)=>String(i3+1));return html`<${Big} value=${money(d3.spent)} sub=${d3.available?`${d3.diff>0?"▲ over":"▼ under"} ${d3.label.toLowerCase()} by ${money(Math.abs(d3.diff))}`:d3.reason} />
        <${TimeChart} labels=${days} mode="line" height=${130} title="Spending through the month"
          series=${[...d3.comparison?[{name:d3.label,color:"var(--text3)",values:d3.comparison}]:[],{name:"Spent",color:COLORS.out,values:days.map((_3,i3)=>i3<d3.upto?d3.current[i3]:null)}]} />`}case"summary":return html`<${Big} value=${d3.unit==="percent"?`${Math.round(d3.value*10)/10}%`:money(d3.value)} sub=${`${summaryText(d3)} · ${d3.range.label}`} />`;case"calendar":{let cells=d3.weeks.flat();return html`<div class="minical" aria-label="Spending by day">${cells.map(c3=>html`<i key=${c3.date} class=${c3.inMonth?"":"out"} title=${`${shortDate(c3.date)}: ${money(c3.spending)}`}
        style=${c3.inMonth&&c3.spending&&d3.max?`background:color-mix(in srgb, var(--chart-out) ${15+Math.round(c3.spending/d3.max*70)}%, transparent)`:""}></i>`)}</div>
        <div class="muted wsub">${money(d3.totals.spending)} spent · ${money(d3.totals.income)} in</div>`}case"age_of_money":return html`<${Big} value=${d3.days==null?"–":`${d3.days} days`} cls=${d3.change>0?"good":""}
        sub=${d3.change==null?"":`${d3.change>0?"▲":d3.change<0?"▼":""} ${Math.abs(d3.change)} days vs 30 days ago`} />
      <${Spark} values=${d3.points.map(p3=>p3.days)} title="Age of money" />`;case"crossover":return d3.available?html`<${Big} value=${d3.crossed?"Already there":d3.crossover?`${(d3.crossover.months/12).toFixed(1)} years`:`Over ${d3.horizon} years`}
          sub=${`investments could pay ${money(d3.currentIncome)}/mo of ${money(d3.monthlyExpenses)}/mo`} />`:html`<div class="muted wsub">${d3.reason}</div>`;case"report":return html`<${ReportChart} d=${d3} compact />`;default:return null}}function Widget({w:w2,res,edit,index,count,onChange,onRemove,onMove,reports}){let name=w2.title||(w2.type==="report"?reports.find(r3=>r3.id===w2.report)?.name||"Saved report":NAME2[w2.type]),link=w2.type==="report"?`#/reports?view=custom&saved=${w2.report}`:VIEW[w2.type]?`#/reports?view=${VIEW[w2.type]}`:null,size=(k3,n3,lo,hi)=>onChange({...w2,[k3]:Math.min(hi,Math.max(lo,w2[k3]+n3))}),hasRange=["net_worth","cash_flow","summary","age_of_money"].includes(w2.type);return html`<section class=${`card dw${edit?" editing":""}`} style=${`--w:${w2.w};--h:${w2.h}`} data-widget=${w2.type}>
    <div class="dwhead">${edit?html`<input class="field dwtitle" value=${w2.title} placeholder=${name} maxlength="80" aria-label="Widget title" onChange=${e3=>onChange({...w2,title:e3.target.value})} />`:link?html`<a class="dwname" href=${link}>${name}</a>`:html`<span class="dwname">${name}</span>`}
      ${!edit&&link&&html`<${Icon} name="chev" size=${14} style="color:var(--faint)" />`}</div>
    ${edit&&html`<div class="dwtools">
      <button class="btn small" aria-label="Move earlier" disabled=${index===0} onClick=${()=>onMove(-1)}><${Icon} name="left" size=${13} /></button>
      <button class="btn small" aria-label="Move later" disabled=${index===count-1} onClick=${()=>onMove(1)}><${Icon} name="chev" size=${13} /></button>
      <button class="btn small" aria-label="Narrower" disabled=${w2.w<=1} onClick=${()=>size("w",-1,1,3)}>−W</button>
      <button class="btn small" aria-label="Wider" disabled=${w2.w>=3} onClick=${()=>size("w",1,1,3)}>+W</button>
      <button class="btn small" aria-label="Shorter" disabled=${w2.h<=1} onClick=${()=>size("h",-1,1,2)}>−H</button>
      <button class="btn small" aria-label="Taller" disabled=${w2.h>=2} onClick=${()=>size("h",1,1,2)}>+H</button>
      ${hasRange&&html`<select class="field" aria-label="Dates" value=${typeof w2.opts.range=="string"?w2.opts.range:""} onChange=${e3=>onChange({...w2,opts:{...w2.opts,range:e3.target.value}})}>
        <option value="" selected=${!w2.opts.range}>Default dates</option>${RANGES.map(([v3,t4])=>html`<option key=${v3} value=${v3} selected=${w2.opts.range===v3}>${t4}</option>`)}</select>`}
      <button class="btn small danger" aria-label="Remove this widget" onClick=${onRemove}><${Icon} name="trash" size=${13} /></button></div>`}
    <div class="dwbody">${w2.type==="text"?edit?html`<textarea class="field" rows="4" maxlength="2000" aria-label="Note" value=${w2.text} onChange=${e3=>onChange({...w2,text:e3.target.value})}></textarea>`:html`<div class="dwtext">${w2.text||html`<span class="muted">An empty note.</span>`}</div>`:res?.error?html`<div class="bad wsub">${res.error}</div>`:res?html`<${Body} w=${w2} d=${res} />`:html`<${Loading} />`}</div>
  </section>`}function download(name,obj){let url=URL.createObjectURL(new Blob([JSON.stringify(obj,null,2)],{type:"application/json"})),a3=Object.assign(document.createElement("a"),{href:url,download:`${name.replace(/[^\w-]+/g,"-").toLowerCase()||"dashboard"}.json`});document.body.append(a3),a3.click(),a3.remove(),setTimeout(()=>URL.revokeObjectURL(url),1e3)}function Dashboard({params,status}){let phone=!!status?.phone,[id,setId]=d2(params.dash||""),state=useData(`/api/analytics/dashboard?id=${encodeURIComponent(id)}`),[edit,setEdit]=d2(!1),[msg,setMsg]=d2(null),[adding,setAdding]=d2(""),d3=state.data;if(state.error)return html`<${Failed} error=${state.error} retry=${state.reload} />`;if(!d3)return html`<${Loading} />`;let dash=d3.dashboard,act=async(fn,after)=>{setMsg(null);try{await fn(),after?.()}catch(e3){setMsg(e3.message)}},save=(widgets,name=dash.name)=>act(()=>api("/api/analytics/dashboard",{...dash,name,widgets}),state.reload),change2=(i3,w2)=>save(dash.widgets.map((x2,k3)=>k3===i3?w2:x2)),move=(i3,by)=>{let a3=[...dash.widgets];[a3[i3],a3[i3+by]]=[a3[i3+by],a3[i3]],save(a3)},add=value=>{if(!value)return;setAdding("");let saved=value.startsWith("r-")?value:null,base=saved?{type:"report",report:saved,w:2,h:1}:{type:value,...Object.fromEntries(TYPES.filter(t4=>t4[0]===value).flatMap(t4=>Object.entries(t4[2])))};save([...dash.widgets,{opts:{},title:"",text:"",...base}])},openDash=v3=>{setId(v3),setEdit(!1)},create=()=>act(async()=>{let r3=await api("/api/analytics/dashboard/new",{name:""});setId(r3.dashboard.id),setEdit(!0)}),remove=()=>act(()=>api("/api/analytics/dashboard/delete",{id:dash.id}),()=>{setId(""),setEdit(!1)}),exportIt=()=>act(async()=>{let r3=await api(`/api/analytics/dashboard/export?id=${encodeURIComponent(dash.id)}`);download(dash.name,r3.file)}),importIt=e3=>{let f3=e3.target.files?.[0];e3.target.value="",f3&&act(async()=>{let r3=await api("/api/analytics/dashboard/import",{file:JSON.parse(await f3.text())});setId(r3.dashboard.id)})};return html`
    <div class="controls dashbar">
      <label class="ctl"><span>Dashboard</span><select class="field" value=${dash.id} onChange=${e3=>openDash(e3.target.value)}>
        ${d3.dashboards.map(x2=>html`<option key=${x2.id} value=${x2.id} selected=${x2.id===dash.id}>${x2.name}</option>`)}</select></label>
      ${!phone&&html`<button class=${`btn small${edit?" pri":""}`} onClick=${()=>setEdit(!edit)}><${Icon} name=${edit?"check":"edit"} size=${14} />${edit?"Done":"Edit"}</button>`}
      ${edit&&html`
        <label class="ctl"><span>Name</span><input class="field" value=${dash.name} maxlength="80" aria-label="Dashboard name" onChange=${e3=>save(dash.widgets,e3.target.value)} /></label>
        <label class="ctl"><span>Add</span><select class="field" aria-label="Add a widget" value=${adding} onChange=${e3=>add(e3.target.value)}>
          <option value="" selected>Add a widget…</option>
          ${TYPES.map(([t4,n3])=>html`<option key=${t4} value=${t4}>${n3}</option>`)}
          ${d3.reports.map(r3=>html`<option key=${r3.id} value=${r3.id}>Saved report: ${r3.name}</option>`)}</select></label>
        <button class="btn small" onClick=${create}><${Icon} name="plus" size=${14} />New dashboard</button>
        <button class="btn small" onClick=${exportIt}>Export</button>
        <label class="btn small filebtn">Import<input type="file" accept="application/json,.json" onChange=${importIt} /></label>
        <button class="btn small danger" disabled=${d3.dashboards.length<2} onClick=${remove}><${Icon} name="trash" size=${14} />Delete dashboard</button>`}
      ${msg&&html`<span class="bad" style="font-size:12.5px">${msg}</span>`}
    </div>
    ${dash.widgets.length?html`<div class="dgrid">${dash.widgets.map((w2,i3)=>html`<${Widget} key=${w2.id} w=${w2} res=${d3.results[w2.id]} edit=${edit} index=${i3} count=${dash.widgets.length}
      reports=${d3.reports} onChange=${n3=>change2(i3,n3)} onRemove=${()=>save(dash.widgets.filter((_3,k3)=>k3!==i3))} onMove=${by=>move(i3,by)} />`)}</div>`:html`<section class="card empty" style="flex:1"><${Icon} name="chart" size=${30} style="color:var(--mint)" /><b>This dashboard is empty</b>
        <span>${phone?"Add widgets on your PC.":'Press Edit, then pick "Add a widget…".'}</span></section>`}`}var KIND={weekly:"Weekly",monthly:"Monthly"},range=r3=>r3.kind==="weekly"?`${shortDate(r3.period.start)} – ${shortDate(r3.period.end)}`:monthName(r3.period.month),New=()=>html`<span class="pill good">New</span>`;function Row({r:r3}){return html`<a class=${`card reprow${r3.isNew?" fresh":""}`} href=${`#/reports?id=${r3.id}`}>
    <span class="repic"><${Icon} name=${r3.kind==="weekly"?"calendar":"chart"} size=${20} /></span>
    <span class="mid">
      <span class="tname">${r3.title}${r3.isNew&&html`<${New} />`}</span>
      <span class="tcat">${KIND[r3.kind]} · ${range(r3)}${r3.headline?` · ${r3.headline}`:""}</span>
    </span>
    <${Icon} name="chev" size=${18} style="color:var(--faint)" />
  </a>`}function Make({kind,label:label3,onDone}){let[busy,setBusy]=d2(!1),[err,setErr]=d2(null);return html`<button class="btn small" disabled=${busy} onClick=${async()=>{setBusy(!0),setErr(null);try{let r3=await api("/api/reports/make",{kind});go("reports",{id:r3.id}),onDone()}catch(e3){setErr(e3.message)}finally{setBusy(!1)}}} title="Works out the numbers now (the helper adds its words when it writes one)">
    <${Icon} name="sync" size=${14} />${busy?"Working…":label3}</button>${err&&html`<span class="bad" style="font-size:12.5px">${err}</span>`}`}function List({canMake}){let{data:d3,error,loading,reload}=useData("/api/reports");return loading&&!d3?html`<${Loading} />`:error?html`<${Failed} error=${error} retry=${reload} />`:html`
    <div class="row" style="align-items:center;gap:10px;flex-wrap:wrap">
      <div class="sub muted" style="font-size:14px;flex:1;min-width:220px">A weekly report every Sunday and a monthly one on the 1st · from your budget, in plain words</div>
      ${canMake&&html`<div class="right"><${Make} kind="weekly" label="This week now" onDone=${reload} /><${Make} kind="monthly" label="Last month now" onDone=${reload} /></div>`}
    </div>
    ${d3.items.length?html`<div class="replist">${d3.items.map(r3=>html`<${Row} key=${r3.id} r=${r3} />`)}</div>`:html`<section class="card empty" style="flex:1"><${Icon} name="chart" size=${30} style="color:var(--mint)" />
        <b>No reports yet</b>
        <span>The Finance helper writes one every Sunday (the week) and on the 1st (last month).${canMake?" You can also make one now with the buttons above.":""}</span></section>`}`}function Words({r:r3}){let t4=r3.text||{summary:[],suggestions:[]};return html`<section class="card plain">
    <div class="row" style="align-items:center;gap:11px"><div class="orb sm"><${Icon} name="spark" size=${15} sw=${2} /></div>
      <h2 style="font-size:16.5px">In plain words</h2>
      <span class="muted" style="font-size:12px;margin-left:auto">${r3.textFrom==="helper"?"written by the Finance helper":"from the numbers"}</span></div>
    <ul>${t4.summary.map(s3=>html`<li>${s3}</li>`)}</ul>
    ${t4.suggestions.length>0&&html`<div class="lbl" style="margin-top:14px">Worth doing</div>
      <ul class="todo">${t4.suggestions.map(s3=>html`<li>${s3}</li>`)}</ul>`}
  </section>`}function Odd({items,empty}){return html`<section class="card pad">
    <div class="cardhead"><h2>Worth a second look</h2><span class="aside">${items.length?`${items.length} found`:""}</span></div>
    ${items.map(o3=>html`<div class="list-row oddrow">
      <span class=${`flag ${o3.tone}`} style="margin:0">${o3.label}</span>
      <span class="mid"><b>${o3.name}</b> <span class="muted">${shortDate(o3.date)}</span>
        <span class="why">${o3.why}</span></span>
      <span class="r num">${money(o3.amount,{decimals:!0})}</span></div>`)}
    ${!items.length&&html`<div class="row" style="align-items:center;gap:8px;color:var(--good);font-size:14px">
      <${Icon} name="check" size=${17} />${empty}</div>`}
  </section>`}function Back({r:r3}){return html`<div class="pagehead">
    <div><a class="link" href="#/reports?view=weekly" style="margin-bottom:8px"><${Icon} name="left" size=${14} />All reports</a>
      <h1 class="disp">${r3.title}${r3.isNew&&html` <${New} />`}</h1>
      <div class="sub">${KIND[r3.kind]} report · ${range(r3)}</div></div>
    ${r3.kind==="monthly"&&html`<div class="right"><a class="btn small" href=${`#/summary?month=${r3.period.month}`}>
      <${Icon} name="calendar" size=${14} />The month in one look</a></div>`}
  </div>`}function unsortedNote({count,amount}){let is=count===1?"isn't":"aren't";return`${count===1?"1 charge":`${count} charges`} (${money(amount)}) ${is} sorted into a category yet, so ${is} in the numbers above.`}function Weekly({r:r3}){let d3=r3.data,s3=d3.spent,maxTop=Math.max(1,...d3.top.items.map(i3=>i3.spent)),compare=s3.normal==null?null:Math.abs(s3.diff)<=s3.normal*.05?"about a normal week":`${money(Math.abs(s3.diff))} ${s3.diff>0?"more":"less"} than a normal week`;return html`
    <${Words} r=${r3} />
    <div class="repgrid">
      <section class="card pad">
        <div class="cardhead"><h2>Spent this week</h2><span class="aside">vs a normal week</span></div>
        <div class="row" style="align-items:baseline;gap:12px;flex-wrap:wrap">
          <span class="tileNum disp num">${money(s3.week)}</span>
          ${compare&&html`<span class=${s3.diff>s3.normal*.05?"warn":"good"} style="font-size:14px;font-weight:650">${compare}</span>`}</div>
        <div class="muted" style="font-size:13px;margin:2px 0 12px">${s3.normal==null?"Not enough history yet to say what a normal week is.":`A normal week is about ${money(s3.normal)} (the middle of the last ${s3.weeksCompared}).`}</div>
        <${DayBars} days=${s3.days} normal=${s3.normalDay} label=${`Spending each day, ${money(s3.week)} in all`} />
        ${s3.normalDay!=null&&html`<div class="legend" style="margin-top:6px"><span><i style="background:none;border-top:2px dashed var(--chart-normal);height:0"></i>a normal day (${money(s3.normalDay)})</span>
          <span><i style="background:var(--chart-hot)"></i>a day over twice that</span></div>`}
        ${s3.normal!=null&&html`<div class="cmp">
          <div class="cmprow"><span>This week</span><div class="bar thin"><i style=${{width:pct(s3.week/Math.max(s3.week,s3.normal,1)),background:s3.diff>0?"var(--amber)":"var(--teal)"}}></i></div><span class="num">${money(s3.week)}</span></div>
          <div class="cmprow"><span>A normal week</span><div class="bar thin"><i style=${{width:pct(s3.normal/Math.max(s3.week,s3.normal,1)),background:"var(--chart-normal)"}}></i></div><span class="num">${money(s3.normal)}</span></div></div>`}
      </section>
      <section class="card pad">
        <div class="cardhead"><h2>Left to spend this month</h2><span class="aside">${d3.left?`${d3.left.daysLeft} days to go`:""}</span></div>
        ${d3.left?html`
          <div class=${`tileNum disp num ${d3.left.left<0?"bad":"mint"}`}>${money(d3.left.left)}</div>
          <div class="muted" style="font-size:13.5px;margin:2px 0 14px">${d3.left.left>0?`about ${money(d3.left.perDay)} a day`:"nothing left in the spending categories"}</div>
          <div class="bar"><i style=${{width:pct(d3.left.pct),background:d3.left.pct>=1?"var(--coral)":"linear-gradient(90deg,var(--teal),var(--mint))"}}></i></div>
          <div class="barlbl muted" style="display:flex;justify-content:space-between;font-size:13px;margin-top:8px"><span>${money(d3.left.spent)} spent</span><span>of ${money(d3.left.planned)} planned</span></div>`:html`<div class="muted" style="font-size:13.5px">There's no budget for this month in Actual yet.</div>`}
      </section>
      <section class="card pad">
        <div class="cardhead"><h2>Top 3 categories</h2><span class="aside">${money(d3.top.total)} in all</span></div>
        ${d3.top.items.map(i3=>html`<div class="whererow"><span>${i3.name}</span>
          <div class="bar thin"><i style=${{width:pct(i3.spent/maxTop),background:catColor(i3.color)}}></i></div><span class="v num">${money(i3.spent)}</span></div>`)}
        ${d3.top.other>0&&html`<div class="muted" style="font-size:13px;margin-top:6px">+ ${money(d3.top.other)} everywhere else</div>`}
        ${!d3.top.items.length&&html`<div class="muted">Nothing spent this week.</div>`}
      </section>
      <section class="card pad">
        <div class="cardhead"><h2>Biggest purchases</h2></div>
        ${d3.biggest.map(b3=>html`<div class="list-row"><${Letter} name=${b3.payee} size=${32} />
          <span class="mid"><b>${b3.payee}</b><span class="tcat" style="display:block">${shortDate(b3.date)} · ${b3.category||"no category yet"}</span></span>
          <span class="r num">${money(b3.amount,{decimals:!0})}</span></div>`)}
        ${!d3.biggest.length&&html`<div class="muted">No purchases this week.</div>`}
        ${d3.unsorted.count>0&&html`<div class="muted" style="font-size:13px;margin-top:8px">${unsortedNote(d3.unsorted)}${" "}
          <a class="link" href="#/transactions?tab=needs">See ${d3.unsorted.count===1?"it":"them"}</a></div>`}
      </section>
      <${Odd} items=${d3.odd} empty="Nothing odd this week." />
      <section class="card pad">
        <div class="cardhead"><h2>Bills in the next 7 days</h2><span class="aside num">${d3.bills.items.length?money(d3.bills.total):""}</span></div>
        ${d3.bills.items.map(b3=>html`<div class="uprow"><span class="d">${shortDate(b3.date)}</span><span>${b3.name}${b3.estimated&&html` <span class="muted">(about)</span>`}</span>
          <span class="r num">${money(b3.amount,{decimals:!0})}</span></div>`)}
        ${!d3.bills.items.length&&html`<div class="muted" style="font-size:13.5px">No bills expected until after ${shortDate(d3.bills.to)}.</div>`}
      </section>
    </div>`}var statusColor={over:"var(--coral)",close:"var(--amber)",unplanned:"var(--coral)"};function Delta({now,before,goodWhenUp=!0}){if(before==null)return null;let diff=now-before;if(!diff)return html`<div class="muted" style="font-size:13px">same as the month before</div>`;let good=diff>0===goodWhenUp;return html`<div class=${good?"good":"warn"} style="font-size:13px">${money(diff,{sign:!0})} vs the month before</div>`}function Monthly({r:r3}){let d3=r3.data,f3=d3.flow,sub=d3.subscriptions,tax=d3.tax;return html`
    <${Words} r=${r3} />
    <div class="reptiles">
      <section class="card tile"><div class="lbl">Money in</div><div class="tileNum disp num good">${money(f3.in)}</div>
        <${Delta} now=${f3.in} before=${f3.before?.in} /></section>
      <section class="card tile"><div class="lbl">Money out</div><div class="tileNum disp num">${money(f3.out)}</div>
        <${Delta} now=${f3.out} before=${f3.before?.out} goodWhenUp=${!1} /></section>
      <section class="card tile"><div class="lbl">Saved</div><div class=${`tileNum disp num ${f3.saved<0?"bad":"mint"}`}>${money(f3.saved)}</div>
        <${Delta} now=${f3.saved} before=${f3.before?.saved} /></section>
    </div>
    <div class="repgrid">
      <section class="card pad">
        <div class="cardhead"><h2>${d3.sixMonths.length>1?`Last ${d3.sixMonths.length} months`:"This month"}</h2>
          <span class="aside legend"><span><i style="background:var(--chart-in)"></i>in</span><span><i style="background:var(--chart-out)"></i>out</span></span></div>
        <${Bars} width=${420} height=${190} colorA="var(--chart-in)" colorB="var(--chart-out)"
          pairs=${d3.sixMonths.map(m2=>({label:monthShort(m2.month),a:m2.in,b:m2.out}))} />
      </section>
      <section class="card pad">
        <div class="cardhead"><h2>Each category vs its budget</h2></div>
        ${d3.categories.map(c3=>html`<div class="catrow">
          <span class="nm">${c3.name}</span>
          <div class="bar thin"><i style=${{width:pct(c3.planned>0?Math.min(c3.spent/c3.planned,1):1),background:statusColor[c3.status]||catColor(c3.color)}}></i></div>
          <span class="v num">${money(c3.spent)} <span class="muted">of ${money(c3.planned)}</span></span>
          ${c3.status==="over"&&html`<span class="pill bad">${money(c3.spent-c3.planned)} over</span>`}
          ${c3.status==="unplanned"&&html`<span class="pill warn">no budget</span>`}</div>`)}
        ${!d3.categories.length&&html`<div class="muted">No spending categories this month.</div>`}
      </section>
      <section class="card pad">
        <div class="cardhead"><h2>Subscriptions</h2><span class="aside num" style="font-size:14px">${money(sub.monthly)}/mo · ${money(sub.yearly)}/yr</span></div>
        ${sub.items.map(i3=>html`<div class="list-row"><${Letter} name=${i3.name} size=${32} />
          <span class="mid"><b>${i3.name}</b> ${i3.isNew&&html`<span class="pill good">New</span>`}
            ${i3.pricier&&html` <span class="pill warn">Up ${money(i3.pricier.now-i3.pricier.was,{decimals:!0})}</span>`}
            <span class="tcat" style="display:block">${i3.every}</span></span>
          <span class="r num">${money(i3.amount,{decimals:!0})}</span></div>`)}
        ${!sub.items.length&&html`<div class="muted">No repeating charges found.</div>`}
      </section>
      <section class="card pad">
        <div class="cardhead"><h2>Tax set-aside</h2><span class="aside">${tax?`${tax.rate}% of money in`:""}</span></div>
        ${tax?html`<div class="taxrow">
            <${Ring} frac=${tax.should>0?tax.moved/tax.should:1} size=${96} thick=${11} color="var(--mint)">
              <span class="num" style="font-weight:700;font-size:16px">${tax.should>0?pct(Math.min(tax.moved/tax.should,1)):"–"}</span><//>
            <div><div class="tileNum disp num" style="font-size:28px">${money(tax.should)}</div>
              <div class="muted" style="font-size:13px">to set aside for the month · ${money(tax.moved)} moved to ${tax.account}${tax.toMove>0?`, ${money(tax.toMove)} to go`:""}</div></div></div>
          <div class="list-row"><span>So far this year</span><span class="r num">${money(tax.yearMoved)} <span class="muted" style="font-weight:500">of ${money(tax.yearShould)}</span></span></div>
          ${tax.yearShort>0&&html`<div class="list-row"><span>Still short for the year</span><span class="r num warn">${money(tax.yearShort)}</span></div>`}
          <div class="list-row"><span>Next estimated tax payment (usually)</span><span class="r">${shortDate(tax.nextDue)}, ${tax.nextDue.slice(0,4)}</span></div>`:html`<div class="muted" style="font-size:13.5px">Not set up: pick a tax rate and a tax account in Settings.</div>`}
      </section>
      <${Odd} items=${d3.odd} empty="Nothing odd this month." />
    </div>`}function Page({id}){let{data:r3,error,loading,reload}=useData(`/api/reports/item?id=${encodeURIComponent(id)}`);return loading&&!r3?html`<${Loading} />`:error?error.code===404?html`<section class="card empty" style="flex:1"><b>This report is gone</b><span>It may have been replaced by a newer one for the same dates, or removed.</span>
          <div class="acts"><a class="btn" href="#/reports?view=weekly">All reports</a></div></section>`:html`<${Failed} error=${error} retry=${reload} />`:html`<div class="rep"><${Back} r=${r3} />${r3.kind==="weekly"?html`<${Weekly} r=${r3} />`:html`<${Monthly} r=${r3} />`}</div>`}var VIEWS=[["dashboard","Dashboard"],["networth","Net worth"],["cashflow","Cash flow"],["spending","Spending"],["summary","Summary"],["calendar","Calendar"],["ageofmoney","Age of money"],["crossover","Crossover point"],["custom","Custom"],["weekly","Weekly & monthly"]],SUBTITLE={dashboard:"Your dashboards: pick the widgets you want to see at a glance",networth:"What you own less what you owe, over time",cashflow:"Money in, money out and the balance",spending:"This month against the budget or an earlier month",summary:"One number: a total, an average or a share",calendar:"Money in and spending day by day",ageofmoney:"How long your money waits before it is spent",crossover:"When your investments can pay for your spending",custom:"Build your own report and save it",weekly:"The Finance helper writes one every Sunday and one on the 1st"},VIEW_BODY={networth:NetWorth,cashflow:CashFlow,spending:Spending,summary:Summary2,calendar:Calendar,ageofmoney:AgeOfMoney,crossover:Crossover,custom:Custom};function NumberView({view,status,params}){let{data:meta,error,reload}=useData("/api/analytics/meta");if(error)return html`<${Failed} error=${error} retry=${reload} />`;if(!meta)return html`<${Loading} />`;let Body2=VIEW_BODY[view];return html`<${Body2} key=${view} meta=${meta} status=${status} params=${params} />`}function Reports({params,status}){let{data:list2}=useData("/api/reports"),fresh=list2?.newCount||0;if(params.id)return html`<${Page} id=${params.id} />`;let view=VIEWS.some(([v3])=>v3===params.view)?params.view:"dashboard";return html`
    <div class="pagehead"><div><h1 class="disp">Reports</h1><div class="sub">${SUBTITLE[view]}</div></div></div>
    <nav class="tabs rtabs" aria-label="Reports">${VIEWS.map(([v3,t4])=>html`<a key=${v3} class=${`tab${view===v3?" on":""}`} href=${`#/reports?view=${v3}`}
      aria-current=${view===v3?"page":null}>${t4}${v3==="weekly"&&fresh>0&&html` <span class="numdot">${fresh}</span>`}</a>`)}</nav>
    <div class="rview">${view==="weekly"?html`<${List} canMake=${!status?.phone} />`:view==="dashboard"?html`<${Dashboard} params=${params} status=${status} />`:html`<${NumberView} view=${view} status=${status} params=${params} />`}</div>`}var DISPLAY_CHANGED="gb-display",applyDisplay=d3=>{setDisplay(d3),window.dispatchEvent(new Event(DISPLAY_CHANGED))};function DisplaySettings({display,focusProps}){let[d3,setD]=d2(display),[msg,setMsg]=d2(null),[busy,setBusy]=d2(!1),change2=async patch=>{setBusy(!0),setMsg(null);try{let r3=await api("/api/budgetfile/display",patch);r3.result?.ok?(setD(r3.display),applyDisplay(r3.display)):setMsg(r3.result?.error||"That didn't change.")}catch(err){setMsg(`Couldn't save that: ${err.message}`)}finally{setBusy(!1)}},sample2=`${money(-123456,{decimals:!0},d3)} · ${money(98e3,{},d3)} · ${numericDate("2026-10-16",d3)||"Oct 16"}`,sel=(label3,small,key,options,value)=>html`<div class="setrow"><div class="what">${label3}<small>${small}</small></div>
    <select class="field" aria-label=${label3} value=${value} disabled=${busy}
      onChange=${e3=>{let v3=e3.target.value;change2({[key]:typeof value=="number"?Number(v3):v3})}}>
      ${options.map(([v3,text])=>html`<option value=${v3}>${text}</option>`)}</select></div>`;return html`<section ...${focusProps}>
    <div class="sechead">Numbers and dates</div>
    <div class="secsub">These are your budget's number and date settings. The example shows how amounts and dates look now.</div>
    <div class="setrow"><div class="what">Example<small>An expense with cents, a whole amount, a date</small></div><b class="num" data-testid="display-example">${sample2}</b></div>
    ${sel("Number format","How thousands and decimals are written","numberFormat",Object.entries(NUMBER_FORMATS).map(([k3,v3])=>[k3,v3.label]),d3.numberFormat)}
    <div class="setrow"><div class="what">Hide cents<small>Show whole amounts only, like $1,235</small></div>
      <input type="checkbox" role="switch" aria-label="Hide cents" checked=${d3.hideFraction} disabled=${busy} onChange=${e3=>change2({hideFraction:e3.target.checked})} /></div>
    ${sel("Currency","The symbol shown with amounts","currency",Object.entries(CURRENCIES).map(([k3,v3])=>[k3,v3.label]),d3.currency)}
    ${sel("Symbol position","Before or after the number","symbolPosition",[["before","Before (€12)"],["after","After (12€)"]],d3.symbolPosition)}
    <div class="setrow"><div class="what">Space beside the symbol<small>€ 12 instead of €12</small></div>
      <input type="checkbox" role="switch" aria-label="Space beside the symbol" checked=${d3.symbolSpace} disabled=${busy} onChange=${e3=>change2({symbolSpace:e3.target.checked})} /></div>
    ${sel("Date format",d3.dateFormat?"How numeric dates are written":"Not picked yet: GupBudget uses words (Oct 16) until you pick one","dateFormat",[...d3.dateFormat?[]:[["","Words (Oct 16)"]],...Object.entries(DATE_FORMATS).map(([k3,v3])=>[k3,`${v3} (${k3})`])],d3.dateFormat||"")}
    ${sel("First day of the week","Where weeks start in the budget's calendars and reports; GupBudget's screens have no week grid","firstDay",WEEK_DAYS.map((n3,i3)=>[i3,n3]),d3.firstDay)}
    ${msg&&html`<div class="bad" role="alert" style="font-size:13px;margin-top:8px"><${Icon} name="alert" size=${13} /> ${msg}</div>`}
  </section>`}function Confirm2({title,children,yes,onYes,onNo,busy,disabled=!1}){return html`<div class="confirmbox" role="alertdialog" aria-label=${title}>
    <b>${title}</b>
    <div class="confirmtext">${children}</div>
    <div class="row" style="gap:8px;margin-top:10px">
      <button class="btn pri" disabled=${busy||disabled} onClick=${onYes}>${yes}</button>
      <button class="btn" disabled=${busy} onClick=${onNo}>Cancel</button>
    </div>
  </div>`}var MAX_IMPORT=12*1024*1024;var secProps=(name,focus)=>({id:`set-${name}`,class:`card sec${focus===name?" focus":""}`}),scrollTo2=focus=>focus&&document.getElementById(`set-${focus}`)?.scrollIntoView({block:"start"}),useRescroll=(focus,data)=>A2(()=>{data&&scrollTo2(focus)},[!!data]);function Memory({focus}){let{data}=useData("/api/helper/memory");useRescroll(focus,data);let facts=data?.facts||[];return html`<section ...${secProps("memory",focus)}>
    <div class="sechead">What the helper remembers</div>
    <div class="secsub">Things you told it to keep, filed by GupWorks' Librarian in your GupBudget notes (Memory). To
      change or remove one, edit it there${data?.where?html`: <code>${data.where}</code>`:""}. Amounts, balances and
      account numbers are never kept.</div>
    ${facts.map(f3=>html`<div class="factrow"><span>${f3.text}</span></div>`)}
    ${!facts.length&&html`<div class="muted" style="font-size:13.5px">Nothing yet. Tell it something like "remember I pay estimated taxes every quarter".</div>`}
  </section>`}function Activity({focus}){let{data,error,reload}=useData("/api/helper/log?limit=40"),[busy,setBusy]=d2(null),[problem,setProblem]=d2(null);useRescroll(focus,data);let list2=data?.entries||[],undo=async u3=>{setBusy(u3.id),setProblem(null);try{let r3=(await api("/api/undo",{id:u3.id,...u3.state==="undone"?{redo:!0}:{}})).result;r3.ok||setProblem(r3.error),dispatchEvent(new Event(UNDONE))}catch(err){setProblem(err.message)}setBusy(null),reload()};return html`<section ...${secProps("activity",focus)}>
    <div class="sechead">Helper activity</div>
    <div class="secsub">Everything the helper did or was told no to, and the category changes you made yourself, kept on
      this PC. Newest first.</div>
    ${list2.map((e3,i3)=>html`<div class=${`actrow${e3.kind==="refused"?" refused":""}`} key=${i3}>
      <div class="acttop"><b>${e3.title}</b><span title=${e3.at}>${ago(Date.parse(e3.at))}</span></div>
      ${e3.undo&&html`<div class="actbtns"><button class="btn small" disabled=${busy===e3.undo.id} onClick=${()=>undo(e3.undo)}>
        ${e3.undo.state==="undone"?"Redo this":"Undo this"}</button></div>`}
      ${e3.what&&html`<div class="actsub">${e3.what}</div>`}
      ${(e3.before||e3.after)&&html`<div class="actchange">${e3.before||"nothing"} → ${e3.after||"nothing"}</div>`}
      ${e3.error&&html`<div class="actsub">${e3.error}</div>`}
      ${e3.why&&html`<div class="actwhy">Why: ${e3.why}</div>`}</div>`)}
    ${problem&&html`<div class="notice" role="alert">${problem}</div>`}
    ${!list2.length&&!error&&html`<div class="muted" style="font-size:13.5px">Nothing yet. When the helper files a transaction, makes a rule or asks for a budget change, it shows up here.</div>`}
    ${error&&html`<div class="muted" style="font-size:13.5px">Couldn't read the log: ${error.message}</div>`}
  </section>`}var SECTIONS=["permissions","activity","memory","pc","phones"],NOTICES=[["priceAlerts","Price-increase alerts"],["unusualSpending","Unusual spending"],["taxReminders","Tax reminders"],["monthlySummary","Monthly summary on the 1st"]],day=iso=>{let d3=new Date(iso);return Number.isNaN(d3.getTime())?"":d3.toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"})},sec=(name,focus)=>({id:`set-${name}`,class:`card sec${focus===name?" focus":""}`});function ThisPhone({pcInfo={},device,mock:mock2,onUnpair}){let[sure,setSure]=d2(!1);A2(()=>{if(!sure)return;let t4=setTimeout(()=>setSure(!1),4e3);return()=>clearTimeout(t4)},[sure]);let host=pcInfo.host||"your PC";return html`<div class="m-row"><${Icon} name="phone" size=${20} /><b>This phone</b></div>
    <p>Paired with <b class="m-host">${pcInfo.fqdn||host}</b>${pcInfo.pairedAt?` since ${day(pcInfo.pairedAt)}`:""}.</p>
    ${device?.name&&html`<p class="m-muted">Your PC calls it “${device.name}” in Settings › Phones.</p>`}
    ${!mock2&&html`<button class=${`m-btn${sure?" danger":""}`} onClick=${()=>sure?onUnpair():setSure(!0)}><${Icon} name="logout" size=${17} />${sure?"Tap again to unpair":"Unpair this phone"}</button>`}`}function PhoneSettings({params={},status,pcInfo={},mock:mock2,onUnpair}){let[d3,setD]=d2(null),[error,setError]=d2(null),[busy,setBusy]=d2(null),[msg,setMsg]=d2(null),focus=SECTIONS.includes(params.section)?params.section:params.section==="helper"?"permissions":null,load=()=>pc("/v1/settings").then(v3=>{setD(v3),setError(null)},setError);if(A2(()=>{load()},[]),A2(()=>{d3&&focus&&document.getElementById(`set-${focus}`)?.scrollIntoView({block:"start"})},[!!d3]),!d3&&!error)return html`<${Loading} />`;if(!d3)return html`<${Failed} error=${error} retry=${load} />`;let change2=async(key,body,title)=>{setBusy(key),setMsg(null);try{setD(await pc("/v1/settings/helper",{body,title}))}catch(e3){e3.quiet||setMsg(`That didn't change: ${e3.message}`)}finally{setBusy(null)}},granted=(d3.grants||[]).filter(g3=>g3.on),notices=d3.helper?.notices||{};return html`
    <div class="pagehead"><div><h1 class="disp">Settings</h1>
      <div class="sub">What the helper may do · everything else is set on your PC</div></div></div>
    ${msg&&html`<div class="notice" role="status"><${Icon} name="alert" size=${16} />${msg}</div>`}

    <section ...${sec("permissions",focus)}>
      <div class="sechead">Helper permissions</div>
      <div class="secsub">What the helper may change in your budget. Every change here asks for Face ID first.
        Turn a switch off and that kind of change stops at once.</div>
      ${d3.permissions.map(p3=>html`<div class="setrow">
        <div class="what">${p3.label}<small>${p3.detail}</small></div>
        <${Toggle} on=${p3.on} label=${p3.label} disabled=${!!busy}
          onChange=${on=>change2(p3.key,{permission:p3.key,on},p3.label)} /></div>`)}
      <div class="lockline"><${Icon} name="lock" size=${17} style="color:var(--mint)" />
        <span>There is no switch for moving money. GupBudget and its helper can never move money.</span></div>
      <div class="sechead" style="margin-top:16px">Always allowed</div>
      <div class="secsub">Kinds of budget change you chose "Always allow" for: the helper makes these without asking
        (each is still logged). Revoke one and it asks you again.</div>
      ${granted.map(g3=>html`<div class="setrow">
        <div class="what">${g3.label}<small>Made without asking</small></div>
        <button class="btn small" disabled=${!!busy} aria-label=${`Revoke: ${g3.label}`}
          onClick=${()=>change2(g3.key,{grant:g3.key,on:!1},`Revoke: ${g3.label}`)}>Revoke</button></div>`)}
      ${!granted.length&&html`<div class="muted" style="font-size:13.5px">None yet: the helper asks you for every budget
        change. "Always allow" on a request (Budget) adds one here.</div>`}
    </section>

    <${Activity} focus=${focus} />
    ${d3.helper?.available&&html`<${Memory} focus=${focus} />`}

    <section ...${sec("pc",focus)}>
      <div class="sechead">Set on your PC</div>
      <div class="secsub">Change these in GupBudget › Settings on your PC.</div>
      <dl class="kv words">
        <dt>Look</dt><dd>${themeOf(d3.theme).name}</dd>
        <dt>Tax set-aside</dt><dd>${d3.taxRate}% of money in</dd>
        <dt>Helper alerts</dt><dd>${NOTICES.filter(([k3])=>notices[k3]).map(([,l3])=>l3).join(", ")||"all off"}</dd>
        ${d3.helper?.chat?.label&&html`<dt>Chat</dt><dd>One conversation ${d3.helper.chat.label}</dd>`}
      </dl>
    </section>

    <section ...${sec("phones",focus)}>
      <${ThisPhone} pcInfo=${pcInfo} device=${status?.device} mock=${mock2} onUnpair=${onUnpair} />
    </section>`}var W2=330,num=v3=>Number.isFinite(Number(v3))?Number(v3):0,list=v3=>Array.isArray(v3)?v3:[],hasCents=(...ns)=>ns.some(n3=>Math.round(num(n3)*100)%100!==0);function fmt(n3,cents){if(amountsHidden())return HIDDEN_AMOUNT;n3=num(n3);let s3=Math.abs(n3).toLocaleString("en-US",{minimumFractionDigits:cents?2:0,maximumFractionDigits:cents?2:0});return`${n3<0?"−":""}$${s3}`}var TONES={good:"good",coral:"coral",amber:"amber"},LINK=/^gupbudget:\/\/([a-z]+(?:\?[\w=&%.:-]*)?)$/,fill=col=>`fill:${col}`,stroke=(col,w2,extra="")=>`fill:none;stroke:${col};stroke-width:${w2};${extra}`;function Head({c:c3}){return html`<div class="cc-t"><span class="cc-h">${c3.title}</span>${c3.period&&html`<span class="cc-p">${c3.period}</span>`}</div>`}function Foot({c:c3}){return html`<div class="cc-src"><span>From your budget · ${c3.asOf||"now"}</span>${c3.open&&html`<span>${c3.open.label} ›</span>`}</div>`}function Pill({tone:tone2,icon,children}){return html`<span class=${`cc-pill ${tone2}`}><span aria-hidden="true">${icon}</span> ${children}</span>`}function BudgetLeft({c:c3}){let planned=num(c3.planned),spent=num(c3.spent),day2=Math.max(num(c3.day),1),days=Math.max(num(c3.days),day2),left=planned-spent,over=left<0,cents=hasCents(planned,spent),pct2=planned>0?Math.min(spent/planned,1):spent>0?1:0,pace=day2/days,paceAmt=planned*pace,daysLeft=days-day2+1,col=over?"var(--coral)":"var(--chart-bar)",tx=Math.round(pace*W2),anchor=tx>W2-70?"end":tx<70?"start":"middle",ahead=spent-paceAmt,status=over?html`<${Pill} tone="bad" icon="▲">Over plan by ${fmt(-left,cents)}<//>`:ahead>planned*.05?html`<${Pill} tone="warn" icon="▲">${fmt(Math.round(ahead))} ahead of pace<//>`:html`<${Pill} tone="ok" icon="✓">On pace<//>`,bar=html`<svg viewBox=${`0 0 ${W2} ${c3.compact?20:44}`} width="100%" role="img" aria-label=${`${fmt(spent,cents)} of ${fmt(planned,cents)} spent`}>
    <rect x="0" y="6" width=${W2} height="10" rx="4" style="fill:var(--track)"/>
    <rect x="0" y="6" width=${Math.max(pct2*W2-1,4)} height="10" rx="4" style=${fill(col)}/>
    ${!c3.compact&&html`<line x1=${tx} x2=${tx} y1="1" y2="21" style="stroke:var(--text);stroke-width:2"/>
      <text x=${tx} y="37" text-anchor=${anchor} style="fill:var(--muted);font-size:11.5px">${`even pace ${fmt(Math.round(paceAmt))}`}</text>`}
  </svg>`;return c3.compact?html`<div class="cc-row cc-compact"><span class="cc-eyebrow">${c3.category}</span><div class="cc-grow">${bar}</div>
      <span class="cc-amt">${over?`${fmt(-left,cents)} over`:`${fmt(left,cents)} left`}</span></div>`:html`<${Head} c=${{title:`${c3.category} · ${c3.month}`,period:`day ${day2} of ${days}`}} />
    <div class=${`cc-num cc-big${over?" coral":""}`}>${over?`${fmt(-left,cents)} over`:`${fmt(left,cents)} left`}</div>
    <div class="cc-sub">of ${fmt(planned,cents)} planned · ${fmt(spent,cents)} spent</div>
    ${bar}
    <div class="cc-row cc-between">${status}<span class="cc-note">${over?"":`${fmt(left/daysLeft,!0)}/day · ${daysLeft} days`}</span></div>`}function Breakdown({c:c3}){let items=list(c3.items).map(i3=>({name:i3.name,amount:num(i3.amount)})).sort((a3,b3)=>b3.amount-a3.amount),total=num(c3.total)||1,max=Math.max(1,...items.map(i3=>i3.amount),num(c3.other?.amount)),row=(name,amt,other)=>html`<div class="cc-item" key=${name}>
    <div class="cc-row cc-between"><span>${name}</span>
      <span><span class="cc-amt">${fmt(amt)}</span> <span class="cc-pc">${Math.round(amt/total*100)}%</span></span></div>
    <svg viewBox=${`0 0 ${W2} 10`} width="100%" class="cc-blk" aria-hidden="true"><rect x="0" y="1" width=${W2} height="8" rx="4" style="fill:var(--track)"/>
      <rect x="0" y="1" width=${Math.max(amt/max*W2,6)} height="8" rx="4" style=${fill(other?"var(--chart-rest)":"var(--chart-bar)")}/></svg></div>`;return html`<${Head} c=${c3} />
    <div class="cc-num cc-big">${fmt(c3.total)} <span class="cc-unit">${c3.totalLabel||"spent"}</span></div>
    ${items.map(i3=>row(i3.name,i3.amount))}
    ${c3.other&&row(`Other (${num(c3.other.count)} categories)`,num(c3.other.amount),!0)}`}var Delta2=({d:d3})=>Math.abs(d3)<.005?html`<span class="cc-note">= no change</span>`:html`<span class=${d3>0?"coral":"good"}>${d3>0?"▲":"▼"} ${fmt(Math.abs(d3))} ${d3>0?"more":"less"}</span>`;function Compare({c:c3}){let items=list(c3.items),max=Math.max(1,...items.flatMap(i3=>[num(i3.a),num(i3.b)])),BW=196,total={a:num(c3.total?.a),b:num(c3.total?.b)};return html`<${Head} c=${c3} />
    <div class="cc-legend"><span><i style="background:var(--mk-a)"></i>${c3.a}</span><span><i style="background:var(--mk-b)"></i>${c3.b}</span></div>
    ${items.map(i3=>html`<div class="cc-item" key=${i3.name}>
      <div class="cc-row cc-between"><span>${i3.name}</span><b class="cc-delta"><${Delta2} d=${num(i3.a)-num(i3.b)} /></b></div>
      <div class="cc-row cc-bars">
        <svg viewBox=${`0 0 ${BW} 18`} width=${BW} style="flex:none" aria-hidden="true">
          <rect x="0" y="0" width=${Math.max(num(i3.a)/max*BW,5)} height="8" rx="3" style="fill:var(--mk-a)"/>
          <rect x="0" y="10" width=${Math.max(num(i3.b)/max*BW,5)} height="8" rx="3" style="fill:var(--mk-b)"/></svg>
        <span class="cc-note"><b class="cc-strong">${fmt(i3.a)}</b> vs ${fmt(i3.b)}</span></div></div>`)}
    <div class="cc-row cc-between cc-total"><span class="cc-note">All spending</span>
      <span><b class="cc-amt">${fmt(total.a)}</b> <span class="cc-note">vs ${fmt(total.b)}</span> <b class="cc-delta"><${Delta2} d=${total.a-total.b} /></b></span></div>`}function Trend({c:c3}){let pts=list(c3.points).map(p3=>({label:p3.label,amount:num(p3.amount),partial:!!p3.partial})),n3=Math.max(pts.length,1),H2=132,top=18,base=108,max=Math.max(1,...pts.map(p3=>p3.amount),num(c3.plan))*1.12,y3=v3=>base-v3/max*(base-top),slot=W2/n3,bw=Math.min(30,slot-14),peak=pts.reduce((m2,p3,i3)=>p3.amount>pts[m2].amount?i3:m2,0),hatch=`hatch-${c3.id||"x"}`,cols=pts.map((p3,i3)=>{let x2=i3*slot+(slot-bw)/2,h3=Math.max(base-y3(p3.amount),1),r3=Math.min(4,h3);return html`<g key=${i3}>
      <path d=${`M${x2},${base} v${-(h3-r3)} q0,${-r3} ${r3},${-r3} h${bw-2*r3} q${r3},0 ${r3},${r3} v${h3-r3} z`}
        style=${`fill:${p3.partial?`url(#${hatch})`:"var(--chart-bar)"};${p3.partial?"stroke:var(--chart-bar);stroke-width:1.5":""}`}/>
      ${(i3===peak||p3.partial)&&html`<text x=${x2+bw/2} y=${y3(p3.amount)-6} text-anchor="middle" style="fill:var(--text2);font-size:11.5px;font-weight:600">${fmt(p3.amount)}</text>`}
      <text x=${x2+bw/2} y=${base+17} text-anchor="middle" style="fill:var(--muted);font-size:11.5px">${p3.label}${p3.partial?" *":""}</text></g>`}),plan=num(c3.plan);return html`<${Head} c=${c3} />
    <div class="cc-row cc-top"><div><div class="cc-num cc-mid">${fmt(c3.average)}</div><div class="cc-small">a month on average</div></div>
      ${c3.note&&html`<div class="cc-note cc-grow">${c3.note}</div>`}</div>
    <svg viewBox=${`0 0 ${W2} ${H2}`} width="100%" class="cc-blk" role="img" aria-label=${`${c3.title}, month by month`}>
      <defs><pattern id=${hatch} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" style="fill:var(--mint-wash)"/><line x1="0" y1="0" x2="0" y2="6" style="stroke:var(--chart-bar);stroke-width:2.2"/></pattern></defs>
      <line x1="0" x2=${W2} y1=${base} y2=${base} style="stroke:var(--line);stroke-width:1"/>
      ${plan>0&&html`<line x1="0" x2=${W2} y1=${y3(plan)} y2=${y3(plan)} style="stroke:var(--text3);stroke-width:1.2;stroke-dasharray:4 4"/>
        <text x="0" y=${y3(plan)-5} style="fill:var(--text3);font-size:11px">${`plan ${fmt(plan)}/mo`}</text>`}
      ${cols}</svg>
    ${pts.some(p3=>p3.partial)&&html`<div class="cc-faint">* ${c3.partialNote||"so far this month"}</div>`}`}function Pace({c:c3}){let R2=W2-4,days=Math.max(num(c3.days),2),plan=num(c3.plan),mine=list(c3.this).map(num),last=list(c3.last).map(num).slice(0,days),max=Math.max(1,plan,...last,...mine)*1.06,x2=d4=>(d4-1)/(days-1)*R2,y3=v3=>124-v3/max*110,line=(arr,col,w2)=>html`<path d=${arr.map((v3,i3)=>`${i3?"L":"M"}${x2(i3+1).toFixed(1)},${y3(v3).toFixed(1)}`).join(" ")}
    style=${stroke(col,w2,"stroke-linejoin:round;stroke-linecap:round")}/>`,d3=Math.max(mine.length,1),tA=mine.at(-1)??0,tB=last[d3-1]??last.at(-1)??0,dot=(v3,col)=>html`<circle cx=${x2(d3)} cy=${y3(v3)} r="4.5" style=${`${fill(col)};stroke:var(--bot-bg);stroke-width:2`}/>`;return html`<${Head} c=${c3} />
    <div class="cc-row cc-top"><div><div class="cc-num cc-mid">${fmt(tA)}</div><div class="cc-small">spent by day ${d3}</div></div>
      <div class=${`cc-delta ${tA>tB?"coral":"good"}`}>${tA>tB?"▲":"▼"} ${fmt(Math.abs(tA-tB))} ${tA>tB?"more":"less"} than ${c3.bShort} by the same day</div></div>
    <svg viewBox=${`0 0 ${W2} 150`} width="100%" class="cc-blk" style="overflow:visible" role="img" aria-label=${`${c3.title}: ${c3.a} against ${c3.b}`}>
      <line x1="0" x2=${W2} y1=${124} y2=${124} style="stroke:var(--line);stroke-width:1"/>
      <line x1="0" x2=${W2} y1=${y3(plan)} y2=${y3(plan)} style="stroke:var(--text3);stroke-width:1.2;stroke-dasharray:4 4"/>
      <text x="0" y=${y3(plan)-5} style="fill:var(--text3);font-size:11px">${`plan ${fmt(plan)}`}</text>
      <line x1=${x2(d3)} x2=${x2(d3)} y1=${14} y2=${124} style="stroke:var(--line);stroke-width:1"/>
      ${line(last,"var(--mk-b)",2)}${line(mine,"var(--mk-a)",2.5)}${dot(tB,"var(--mk-b)")}${dot(tA,"var(--mk-a)")}
      <text x=${x2(1)} y=${140} style="fill:var(--muted);font-size:11px">1</text>
      <text x=${x2(d3)} y=${140} text-anchor="middle" style="fill:var(--text2);font-size:11px;font-weight:600">today</text>
      <text x=${x2(days)} y=${140} text-anchor="end" style="fill:var(--muted);font-size:11px">${days}</text></svg>
    <div class="cc-legend"><span><i style="background:var(--mk-a)"></i>${c3.a}</span><span><i style="background:var(--mk-b)"></i>${c3.b}</span></div>`}function Upcoming({c:c3}){let span=Math.max(num(c3.days),1),T4=W2-20,items=list(c3.items),xs=it=>10+Math.min(Math.max(num(it.inDays),0),span)/span*T4;return html`<${Head} c=${c3} />
    <div class="cc-num cc-big">${fmt(c3.total,!0)} <span class="cc-unit">due</span></div>
    <svg viewBox=${`0 0 ${W2} 40`} width="100%" class="cc-blk cc-line" aria-hidden="true">
      <line x1="10" x2=${W2-10} y1="16" y2="16" style="stroke:var(--track);stroke-width:3;stroke-linecap:round"/>
      ${items.map((it,i3)=>html`<circle key=${i3} cx=${xs(it)} cy="16" r=${num(it.amount)>=500?7:4.5}
        style=${`${fill(num(it.amount)>=500?"var(--amber)":"var(--chart-bar)")};stroke:var(--bot-bg);stroke-width:2`}/>`)}
      <text x="4" y="36" style="fill:var(--muted);font-size:11px">${c3.from}</text>
      <text x=${W2-4} y="36" text-anchor="end" style="fill:var(--muted);font-size:11px">${c3.to}</text></svg>
    ${items.map((it,i3)=>html`<div class="cc-row cc-bill" key=${i3}><span class="cc-when">${it.when}</span><span class="cc-grow">${it.name}</span><span class="cc-amt">${fmt(it.amount,!0)}</span></div>`)}
    ${c3.after&&html`<div class="cc-note cc-after">${c3.after}</div>`}`}function Progress({c:c3}){let C3=2*Math.PI*34,target=num(c3.target),p3=target>0?Math.min(num(c3.have)/target,1):0;return html`<${Head} c=${c3} />
    <div class="cc-row cc-prog">
      <svg viewBox="0 0 88 88" width="88" height="88" style="flex:none" role="img" aria-label=${`${Math.round(p3*100)}% of ${fmt(target)}`}>
        <circle cx="44" cy="44" r=${34} style="fill:none;stroke:var(--track);stroke-width:9"/>
        <circle cx="44" cy="44" r=${34} transform="rotate(-90 44 44)" style=${`fill:none;stroke:var(--chart-hot);stroke-width:9;stroke-linecap:round;stroke-dasharray:${p3*C3} ${C3}`}/>
        <text x="44" y="49" text-anchor="middle" style="fill:var(--text);font-size:16px;font-weight:700">${Math.round(p3*100)}%</text></svg>
      <div><div class="cc-num cc-mid">${fmt(c3.have)} <span class="cc-unit cc-of">of ${fmt(target)}</span></div>
        <div class="cc-note">${c3.sub}</div>
        ${c3.todo&&html`<div class="cc-todo">${c3.todo}</div>`}</div></div>`}function Stat({c:c3}){return html`<${Head} c=${c3} /><div class=${`cc-num cc-big ${TONES[c3.tone]||""}`}>${c3.value}</div><div class="cc-sub">${c3.sub}</div>`}function NetWorth2({c:c3}){let pts=list(c3.points).map(p3=>({label:p3.label,amount:num(p3.amount)})),n3=Math.max(pts.length,2),H2=132,top=14,base=106,R2=W2-4,lo=Math.min(0,...pts.map(p3=>p3.amount)),span=(Math.max(1,...pts.map(p3=>p3.amount))-lo)*1.08||1,x2=i3=>i3/(n3-1)*R2,y3=v3=>base-(v3-lo)/span*(base-top),path=pts.map((p3,i3)=>`${i3?"L":"M"}${x2(i3).toFixed(1)},${y3(p3.amount).toFixed(1)}`).join(" "),change2=num(c3.change),up=change2>=0,cents=hasCents(c3.value,change2),every=Math.ceil(pts.length/6);return html`<${Head} c=${c3} />
    <div class="cc-row cc-top"><div><div class="cc-num cc-mid">${fmt(c3.value,cents)}</div><div class="cc-small">now</div></div>
      <div class="cc-grow"><${Pill} tone=${up?"ok":"warn"} icon=${up?"▲":"▼"}>${fmt(Math.abs(change2),cents)} ${up?"up":"down"}<//></div></div>
    <svg viewBox=${`0 0 ${W2} ${H2}`} width="100%" class="cc-blk" role="img" aria-label=${`${c3.title}, month by month`}>
      <line x1="0" x2=${W2} y1=${y3(0)} y2=${y3(0)} style="stroke:var(--line);stroke-width:1"/>
      <path d=${`${path} L${x2(pts.length-1).toFixed(1)},${y3(0).toFixed(1)} L0,${y3(0).toFixed(1)} z`} style="fill:var(--mint-wash);stroke:none"/>
      <path d=${path} style=${stroke("var(--chart-bar)",2.4,"stroke-linejoin:round;stroke-linecap:round")}/>
      ${pts.length>0&&html`<circle cx=${x2(pts.length-1)} cy=${y3(pts.at(-1).amount)} r="4.5" style=${`${fill("var(--chart-bar)")};stroke:var(--bot-bg);stroke-width:2`}/>`}
      ${pts.map((p3,i3)=>(i3%every===0||i3===pts.length-1)&&html`<text key=${i3} x=${x2(i3)} y=${base+18} text-anchor=${i3===0?"start":i3===pts.length-1?"end":"middle"} style="fill:var(--muted);font-size:11.5px">${p3.label}</text>`)}
    </svg>
    <div class="cc-small">${fmt(c3.assets)} in assets${num(c3.debts)?` · ${fmt(c3.debts)} owed`:""}</div>`}function CashFlow2({c:c3}){let pts=list(c3.points).map(p3=>({label:p3.label,income:num(p3.income),expenses:num(p3.expenses)})),n3=Math.max(pts.length,1),H2=132,top=14,base=108,max=Math.max(1,...pts.flatMap(p3=>[p3.income,p3.expenses]))*1.1,y3=v3=>base-v3/max*(base-top),slot=W2/n3,bw=Math.max(Math.min(14,slot/2-4),3),net=num(c3.net),up=net>=0,cents=hasCents(c3.income,c3.expenses,net),bar=(x2,v3,col)=>html`<rect x=${x2} y=${y3(v3)} width=${bw} height=${Math.max(base-y3(v3),v3>0?1:0)} rx="2" style=${fill(col)}/>`;return html`<${Head} c=${c3} />
    <div class="cc-row cc-top"><div><div class=${`cc-num cc-mid ${up?"":"coral"}`}>${up?"+":""}${fmt(net,cents)}</div><div class="cc-small">${up?"more in than out":"more out than in"}</div></div>
      <div class="cc-note cc-grow">${fmt(c3.income)} in · ${fmt(c3.expenses)} out</div></div>
    <svg viewBox=${`0 0 ${W2} ${H2}`} width="100%" class="cc-blk" role="img" aria-label=${`${c3.title}, money in and out by month`}>
      <line x1="0" x2=${W2} y1=${base} y2=${base} style="stroke:var(--line);stroke-width:1"/>
      ${pts.map((p3,i3)=>{let x0=i3*slot+slot/2-bw-1;return html`<g key=${i3}>${bar(x0,p3.income,"var(--chart-in)")}${bar(x0+bw+2,p3.expenses,"var(--chart-out)")}
        <text x=${i3*slot+slot/2} y=${base+17} text-anchor="middle" style="fill:var(--muted);font-size:11.5px">${p3.label}</text></g>`})}
    </svg>
    <div class="cc-legend"><span><i style="background:var(--chart-in)"></i>In</span><span><i style="background:var(--chart-out)"></i>Out</span></div>`}function Logged({c:c3}){let[live,setLive]=d2(null),[busy,setBusy]=d2(!1),[msg,setMsg]=d2(null),id=c3.txnId;A2(()=>{let off=!1;return api(`/api/spend?id=${encodeURIComponent(id)}`).then(r3=>{off||setLive(r3)}).catch(()=>{}),()=>{off=!0}},[id]);let state=live?.state||"waiting",t4=live?.txn,cents=hasCents(t4?t4.amount:c3.amount),category=t4?t4.category:c3.category,account=t4?t4.account:c3.account,budget=live?live.budget:c3.budget;async function change2(body){setBusy(!0),setMsg(null);try{let r3=await api("/api/spend/change",{id,...body});r3.result&&!r3.result.ok?setMsg(r3.result.error||"That didn't work."):setMsg(body.undo?"Undone: removed from your spending.":r3.result?.summary||"Changed."),setLive(r3)}catch(e3){setMsg(e3?.body?.error||e3?.message||"That didn't work.")}setBusy(!1)}let cash3=(live?.accounts||[]).filter(a3=>a3.cash&&a3.id!==t4?.accountId),others=(live?.accounts||[]).filter(a3=>a3.id!==t4?.accountId),pick=e3=>{let v3=e3.target.value;e3.target.value="",v3&&change2(v3.startsWith("a:")?{accountId:v3.slice(2)}:{categoryId:v3.slice(2)})};return html`<${Head} c=${{title:state==="gone"?"Spend removed":state==="matched"?"Spend matched":"Spend logged",period:shortDate(c3.date)}} />
    <div class=${`cc-num cc-big${state==="gone"?" cc-gone":""}`}>${fmt(t4?t4.amount:c3.amount,cents)} <span class="cc-unit">${t4?.payee||c3.payee}</span></div>
    <div class="cc-sub">${state==="gone"?"No longer in your budget.":[category||"No category yet",account].filter(Boolean).join(" · ")}${state==="waiting"?" · waiting for the bank":""}</div>
    ${state==="matched"&&html`<div class="cc-note">The bank's charge came in and matched this one. It's an ordinary transaction now: change it in Spending.</div>`}
    ${state!=="gone"&&budget&&html`<${BudgetLeft} c=${{...budget,compact:!0}} />`}
    ${state==="waiting"&&live&&html`<div class="cc-acts">
      <select class="field cc-pick" disabled=${busy} aria-label="Change category" value="" onChange=${pick}>
        <option value="">Change category</option>
        ${live.categories.map(k3=>html`<option key=${k3.id} value=${`c:${k3.id}`}>${k3.group} · ${k3.name}</option>`)}</select>
      ${cash3.length===1&&html`<button class="btn small" disabled=${busy} onClick=${()=>change2({accountId:cash3[0].id})}>Paid cash, not card</button>`}
      ${cash3.length!==1&&others.length>0&&html`<select class="field cc-pick" disabled=${busy} aria-label="Paid with another account" value="" onChange=${pick}>
        <option value="">${cash3.length?"Paid cash, not card":"Another account"}</option>
        ${(cash3.length?cash3:others).map(a3=>html`<option key=${a3.id} value=${`a:${a3.id}`}>${a3.name}</option>`)}</select>`}
      <button class="btn small" disabled=${busy} onClick=${()=>change2({undo:!0})}>Undo</button></div>`}
    ${msg&&html`<div class="cc-note cc-msg" role="status">${msg}</div>`}
    <div class="cc-src"><span>Logged in chat · ${c3.loggedAt||c3.asOf||"now"}</span>${c3.open&&state!=="gone"&&html`<a class="cc-open" href=${`#/transactions?month=${(t4?.date||c3.date).slice(0,7)}`}>${c3.open.label} ›</a>`}</div>`}var KINDS={stat:Stat,budget_left:BudgetLeft,breakdown:Breakdown,compare:Compare,pace:Pace,trend:Trend,upcoming:Upcoming,progress:Progress,net_worth:NetWorth2,cash_flow:CashFlow2,logged:Logged};function ChartCard({c:c3}){let Kind=c3&&Object.hasOwn(KINDS,c3.kind)?KINDS[c3.kind]:null;if(!Kind)return null;let link=c3.kind!=="logged"&&typeof c3.open?.route=="string"?LINK.exec(c3.open.route):null,body=html`<${Kind} c=${c3} />${!(c3.kind==="logged"||c3.kind==="budget_left"&&c3.compact)&&html`<${Foot} c=${c3} />`}`,cls=`chartcard cc-${c3.kind}`;return link?html`<a class=${cls} href=${`#/${link[1]}`} data-chart=${c3.kind}>${body}</a>`:html`<div class=${cls} data-chart=${c3.kind}>${body}</div>`}var CHANGE={done:["good","Done"],requested:["muted","Waiting for you (Budget)"],asked:["muted","Asked you (Needs a look)"]},OLD_PROPOSAL={done:["good","Done"],declined:["muted","Left as it was"],failed:["bad","Not changed"],expired:["muted","Expired"],pending:["muted","Not answered"]},PLACES={gupbudget:"GupBudget","gupworks-app":"GupWorks",phone:"your phone"},AGENTS={gup:"Gup",finance:"Finance","finance-job":"Finance's scheduled job",gupworks:"GupWorks"},agentName=s3=>AGENTS[s3]||(s3?s3.charAt(0).toUpperCase()+s3.slice(1):"GupWorks");function sourceLabel(m2){return m2.role==="me"?`You in ${PLACES[m2.source]||m2.source||"GupWorks"}`:agentName(m2.source)}var LINK2=new RegExp("(?:\\bgupbudget:\\/\\/|(?<![\\w/])#\\/)([a-z]+(?:\\?[\\w=&%.:-]*)?)","g");function Linked({text}){let parts2=[],last=0;for(let m2 of text.matchAll(LINK2))parts2.push(text.slice(last,m2.index),html`<a class="mint" href=${`#/${m2[1]}`}>${m2[0]}</a>`),last=m2.index+m2[0].length;return parts2.push(text.slice(last)),parts2}function Change({c:c3}){let[cls,label3]=CHANGE[c3.status]||["muted",c3.status];return html`<div class="proposal"><span>${c3.summary}</span><b class=${`st ${cls}`}>${label3}</b></div>`}var Typing=()=>html`<span class="typing"><i></i><i></i><i></i></span>`;function Bubble({m:m2}){if(m2.role==="me")return html`<div class="me">${m2.text}<small class="src">${sourceLabel(m2)}</small></div>`;if(m2.role==="system")return html`<div class="sysline" title=${m2.text}><b>${sourceLabel(m2)}</b> ${m2.text}</div>`;let agent=m2.role==="agent";return html`<div class=${`bot${m2.notice?" notice":""}${agent?" agent":""}`}>
    <div class="orb sm"><${Icon} name=${agent?"info":"spark"} size=${15} sw=${2} /></div>
    <div class="col">
      ${agent&&html`<div class="via">${sourceLabel(m2)} asked</div>`}
      ${(m2.text||m2.partial)&&html`<div class="txt"><${Linked} text=${m2.text} />${m2.partial&&html` <${Typing} />`}</div>`}
      ${(m2.charts||[]).map(c3=>html`<${ChartCard} key=${c3.id} c=${c3} />`)}
      ${(m2.changes||[]).map((c3,i3)=>html`<${Change} key=${i3} c=${c3} />`)}
      ${(m2.proposals||[]).map(p3=>{let[cls,label3]=OLD_PROPOSAL[p3.status]||["muted",p3.status];return html`<div class="proposal"><span>${p3.summary}</span><b class=${`st ${cls}`}>${label3}</b></div>`})}
      ${!agent&&!m2.notice&&html`<div class="via">${[m2.via,m2.archived?"earlier chat":"Finance on GupWorks"].filter(Boolean).join(" · ")}</div>`}
    </div></div>`}function Title({title,sub,children}){return html`<header class="m-title"><div><h1>${title}</h1>${sub}</div>
    ${children&&html`<div class="m-acts">${children}</div>`}</header>`}var Round=({href,label:label3,icon,dot,onClick,on})=>href?html`<a class=${`m-round${on?" on":""}`} href=${href} aria-label=${label3}><${Icon} name=${icon} size=${19} />${dot&&html`<i class="m-rdot"></i>`}</a>`:html`<button class=${`m-round${on?" on":""}`} type="button" aria-label=${label3} aria-pressed=${on==null?null:!!on} onClick=${onClick}>
      <${Icon} name=${icon} size=${19} />${dot&&html`<i class="m-rdot"></i>`}</button>`;function MonthStep({month:month2,prev,next,screen,params={}}){let step=m2=>e3=>{e3.preventDefault(),go(screen,{...params,month:m2})};return html`<div class="m-month">
    ${prev?html`<a href="#" aria-label="Previous month" onClick=${step(prev)}><${Icon} name="left" size=${16} sw=${2.2} /></a>`:html`<span></span>`}
    <b>${monthLabel(month2)}</b>
    ${next?html`<a href="#" aria-label="Next month" onClick=${step(next)}><${Icon} name="chev" size=${16} sw=${2.2} /></a>`:html`<span></span>`}
  </div>`}function Bar({frac,over,tick,big,color}){let w2=`${Math.round(Math.max(0,Math.min(1,frac||0))*1e3)/10}%`;return html`<div class=${`m-meter${big?" big":""}`}>
    <i style=${{width:w2,background:over?"var(--coral)":color||null}}></i>
    ${tick!=null&&html`<span class="m-tick" style=${{left:`${Math.round(Math.max(0,Math.min(1,tick))*1e3)/10}%`}} aria-hidden="true"></span>`}
  </div>`}var Pill2=({tone:tone2="",icon,children})=>html`<span class=${`m-pill ${tone2}`}>${icon&&html`<${Icon} name=${icon} size=${14} sw=${2} />`}${children}</span>`,plural4=(n3,one,many)=>`${n3} ${n3===1?one:many}`;function usePc(path,query){let key=`${path}?${JSON.stringify(query||{})}`,[s3,set]=d2({data:null,error:null}),load=j2(()=>{let live=!0;return pc(path,{query}).then(data=>live&&set({data,error:null}),error=>live&&set({data:null,error})),()=>{live=!1}},[key]);return A2(load,[load]),{...s3,reload:load}}function useSwipeX({onMove,onEnd}){let cb=T2(null);return cb.current={onMove,onEnd},b2(()=>{let x0=null,y0=0,t0=0,dir=null,dx=0,swallow=!1,end=e3=>{if(x0==null)return;let fast=Math.abs(dx)>25&&Math.abs(dx)/Math.max(1,e3.timeStamp-t0)>.5,was=dir;x0=null,dir=null,was==="x"&&(swallow=!0,setTimeout(()=>{swallow=!1},80),cb.current.onEnd(dx,fast))};return{onPointerDown:e3=>{x0=e3.clientX,y0=e3.clientY,t0=e3.timeStamp,dir=null,dx=0},onPointerMove:e3=>{if(x0==null)return;dx=e3.clientX-x0;let dy=e3.clientY-y0;!dir&&Math.hypot(dx,dy)>8&&(dir=Math.abs(dx)>Math.abs(dy)?"x":"y",dir==="x"&&e3.currentTarget.setPointerCapture?.(e3.pointerId)),dir==="x"&&cb.current.onMove(dx)},onPointerUp:end,onPointerCancel:end,onClickCapture:e3=>{swallow&&(e3.stopPropagation(),e3.preventDefault(),swallow=!1)}}},[])}var PICKS=["How much is left this month?","This week so far","Bills coming up","Anything I should look at?","Where did my money go this month?","Am I spending more than last month?"],LOG_START="Spent $",SHOWN=30,ctl=null;function openAsk(text=""){if(!ctl)return;let{sheet,input}=ctl;sheet.current.inert=!1,sheet.current.classList.add("open"),document.documentElement.classList.add("m-asking"),text&&(input.current.value=text,ctl.setText(text)),input.current.focus({preventScroll:!0}),text&&input.current.setSelectionRange(text.length,text.length),ctl.setOpen(!0)}function useViewport(open){A2(()=>{let vv=window.visualViewport,root2=document.documentElement.style;if(!open||!vv)return;let fit=()=>{root2.setProperty("--m-vvh",`${vv.height}px`),root2.setProperty("--m-vvtop",`${vv.offsetTop}px`),document.documentElement.classList.toggle("m-kb",vv.height<innerHeight-120)};return fit(),vv.addEventListener("resize",fit),vv.addEventListener("scroll",fit),()=>{vv.removeEventListener("resize",fit),vv.removeEventListener("scroll",fit),root2.removeProperty("--m-vvh"),root2.removeProperty("--m-vvtop"),document.documentElement.classList.remove("m-kb")}},[open])}function Messages(){let{messages,pending,working,online,reason}=useChat({live:!0}),end=T2(null),last=messages.at(-1),busy=!!pending||working;return A2(()=>end.current?.scrollIntoView({block:"end"}),[messages.length,last?.text,busy]),html`<div class="m-msgs" aria-live="polite">
    ${online===!1&&html`<div class="notice"><${Icon} name="alert" size=${16} />
      GupWorks isn't reachable${reason?` (${reason})`:""}, so nobody can answer right now and a message can't be sent.</div>`}
    ${!messages.length&&!pending&&html`<div class="m-hello"><b>Ask anything about your money</b>
      <span>One conversation with Finance: here, on your PC and in GupWorks.</span></div>`}
    ${messages.slice(-SHOWN).map(m2=>html`<${Bubble} key=${m2.id} m=${m2} />`)}
    ${pending&&html`<div class="me">${pending}<small class="src">sending…</small></div>`}
    ${busy&&!(last?.partial&&!pending)&&html`<div class="bot"><div class="orb sm"><${Icon} name="spark" size=${15} sw=${2} /></div>
      <div class="txt"><span class="typing"><i></i><i></i><i></i></span></div></div>`}
    <div ref=${end}></div>
  </div>`}function AskSheet(){let[open,setOpen]=d2(!1),[text,setText]=d2(""),[drag,setDrag]=d2(0),sheet=T2(null),input=T2(null),start=T2(null),{pending}=useChat();useViewport(open),A2(()=>(ctl={sheet,input,setOpen,setText},()=>{ctl=null,document.documentElement.classList.remove("m-asking")}),[]);let close=()=>{input.current?.blur(),document.documentElement.classList.remove("m-asking"),setDrag(0),setOpen(!1)};A2(()=>{if(!open)return;addEventListener("hashchange",close);let behind=[...document.querySelectorAll(".m-app > :not(.m-askwrap)")];return behind.forEach(el=>{el.inert=!0}),()=>{removeEventListener("hashchange",close),behind.forEach(el=>{el.inert=!1})}},[open]);let send=q2=>{!q2.trim()||pending||(setText(""),askHelper(q2),input.current?.focus({preventScroll:!0}))},grab={onPointerDown:e3=>{start.current={y:e3.clientY,t:e3.timeStamp},e3.currentTarget.setPointerCapture?.(e3.pointerId)},onPointerMove:e3=>{start.current&&setDrag(Math.max(0,e3.clientY-start.current.y))},onPointerUp:e3=>{if(!start.current)return;let dy=e3.clientY-start.current.y,fast=dy>30&&dy/Math.max(1,e3.timeStamp-start.current.t)>.5;start.current=null,dy>90||fast?close():setDrag(0)},onPointerCancel:()=>{start.current=null,setDrag(0)}};return html`<div class=${`m-askwrap${open?" open":""}`}>
    <div class="m-dim" onClick=${close} aria-hidden="true"></div>
    <section ref=${sheet} class=${`m-asksheet${open?" open":""}${drag?" dragging":""}`} inert=${!open}
      role="dialog" aria-modal="true" aria-label="Ask Finance" onKeyDown=${e3=>{e3.key==="Escape"&&close()}}
      onClickCapture=${e3=>{e3.target.closest?.('a[href^="#/"]')&&close()}} style=${drag?{transform:`translateY(${drag}px)`}:null}>
      <div class="m-grabzone" ...${grab}>
        <div class="m-grab" aria-hidden="true"></div>
        <div class="m-chathead">
          <span class="m-avatar"><${Icon} name="spark" size=${17} sw=${2} /></span>
          <div class="grow"><b>Finance</b><small>On your PC · never moves money</small></div>
          <button class="m-round small" type="button" aria-label="Close the chat" onPointerDown=${e3=>e3.stopPropagation()} onClick=${close}>
            <${Icon} name="x" size=${17} sw=${2} /></button>
        </div>
      </div>
      ${open?html`<${Messages} />`:html`<div class="m-msgs"></div>`}
      <div class="m-picks" role="group" aria-label="Quick picks">
        <button class="m-pick" type="button" disabled=${!!pending} onClick=${()=>{setText(LOG_START),input.current.value=LOG_START,input.current.focus({preventScroll:!0})}}>Log a spend</button>
        ${PICKS.map(q2=>html`<button class="m-pick" type="button" disabled=${!!pending} onClick=${()=>send(q2)}>${q2}</button>`)}
      </div>
      <form class="m-composer" onSubmit=${e3=>{e3.preventDefault(),send(text)}}>
        <input ref=${input} value=${text} onInput=${e3=>setText(e3.target.value)} placeholder="Ask about your money…"
          aria-label="Ask about your money" maxlength="2000" enterkeyhint="send" autocomplete="off" />
        <button class="m-send" type="submit" disabled=${!!pending||!text.trim()} aria-label="Send"><${Icon} name="up" size=${19} sw=${2.3} /></button>
      </form>
    </section>
  </div>`}function ChatHistory(){let{messages,pending}=useChat({live:!0}),[q2,setQ]=d2(""),want=q2.trim().toLowerCase(),shown=want?messages.filter(m2=>String(m2.text||"").toLowerCase().includes(want)):messages,end=T2(null);return A2(()=>{want||end.current?.scrollIntoView({block:"end"})},[messages.length,!!want]),html`
    <${Title} title="Chat history" sub=${html`<div class="m-sub">One conversation with Finance: here, on your PC and in GupWorks</div>`} />
    <div class="m-search"><${Icon} name="search" size=${17} />
      <input type="search" value=${q2} onInput=${e3=>setQ(e3.target.value)} placeholder="Search every answer" aria-label="Search the chat" /></div>
    ${want&&html`<div class="m-sub">${shown.length} of ${messages.length} messages</div>`}
    <section class="card m-history">
      ${shown.map(m2=>html`<${Bubble} key=${m2.id} m=${m2} />`)}
      ${pending&&html`<div class="me">${pending}<small class="src">sending…</small></div>`}
      ${!shown.length&&html`<div class="empty"><b>${want?"Nothing matches":"No messages yet"}</b>
        <span>${want?"Try other words.":"Tap Ask to start."}</span></div>`}
      <div ref=${end}></div>
    </section>
    <button class="btn pri m-wide" type="button" onClick=${()=>openAsk()}><${Icon} name="spark" size=${17} />Ask Finance</button>`}var LAUNCH={log:{ask:"Spent $"},ask:{ask:""},groceries:{ask:"How much is left for groceries?"},needs:{route:"#/spending?tab=needs"}};function runLaunch(action){let t4=Object.hasOwn(LAUNCH,action)?LAUNCH[action]:null;return t4?t4.route?(location.hash!==t4.route&&(location.hash=t4.route),!0):(openAsk(t4.ask),!0):!1}async function take(){try{let r3=await native.call("launch.take");r3?.action&&runLaunch(r3.action)}catch{}}function watchLaunch(){return native.available?(take(),native.on("launch",take)):()=>{}}var greeting=()=>{let h3=new Date().getHours();return h3<12?"Good morning":h3<18?"Good afternoon":"Good evening"},TONE={bad:"coral",warn:"amber",ask:"amber"};function Hero({d:d3}){let{hero}=d3,m2=monthName(d3.month);if(!hero.hasBudget)return html`<section class="card m-hero">
      <div class="m-eyebrow">Spent so far in ${m2}</div>
      <div class="m-big num">${money(hero.spent)}</div>
      <div class="m-per">Nothing is planned for ${m2} yet. Plan it on the Budget tab and this shows what's left.</div>
    </section>`;let days=d3.curve?.days||daysInMonth(d3.month),pace=Math.min(1,dayOfMonth(d3.today)/days),ahead=hero.spent-hero.planned*pace,over=hero.left<0,pill=over?html`<${Pill2} tone="bad" icon="flag">Over plan by ${money(-hero.left)}<//>`:ahead>hero.planned*.05?html`<${Pill2} tone="warn" icon="zap">${money(ahead)} ahead of pace<//>`:ahead<-hero.planned*.05?html`<${Pill2} tone="ok" icon="check">${money(-ahead)} under pace<//>`:html`<${Pill2} tone="ok" icon="check">On pace<//>`;return html`<section class="card m-hero" aria-label=${over?`Over plan in ${m2}`:`Left to spend in ${m2}`}>
    <div class="m-eyebrow">${over?`Over plan in ${m2}`:`Left to spend in ${m2}`}</div>
    <div class=${`m-big num${over?" coral":""}`}>${money(Math.abs(hero.left))}</div>
    <div class="m-per">${hero.left>0?html`about <b>${money(hero.perDay)} a day</b> for the next ${plural4(hero.daysLeft,"day","days")}`:`${plural4(hero.daysLeft,"day","days")} to go in ${m2}`}</div>
    <${Bar} big frac=${hero.pct} over=${over} tick=${pace} color="var(--hero-bar)" />
    <div class="m-herofoot"><span class="muted">${money(hero.spent)} spent of ${money(hero.planned)}</span>${pill}</div>
  </section>`}function Needs({counts,reports}){let r3=Math.max(0,counts.requests||0),q2=Math.max(0,counts.questions||0),newest=(reports?.items||[]).find(x2=>x2.isNew),nr=counts.reportsNew,tile=(href,icon,n3,big,label3)=>html`<a class=${`m-need${n3?" on":""}`} href=${href}>
    <${Icon} name=${icon} size=${19} />${n3>0&&html`<i class="numdot">${n3}</i>`}
    <b class="num">${big}</b><span>${label3}</span></a>`;return html`<div class="m-needs" aria-label="Needs you">
    ${tile("#/budget","pie",r3,r3,r3===1?"budget change to OK":r3?"budget changes to OK":"budget changes waiting")}
    ${tile("#/spending?tab=needs","help",q2,q2,q2===1?"charge the helper asks about":q2?"charges the helper asks about":"questions from the helper")}
    ${nr>0?tile(newest?`#/reports?id=${newest.id}`:"#/reports","doc",0,"New",newest?`${newest.kind==="monthly"?"monthly":"weekly"} report is ready`:plural4(nr,"new report","new reports")):tile("#/reports","doc",0,"Reports","no new report")}
  </div>`}function Categories({budget}){if(!budget?.hasMonth)return null;let planned=g3=>g3.items.filter(c3=>c3.planned>0),byPlan=(a3,b3)=>b3.planned-a3.planned,day2=budget.groups.filter(g3=>!/bill/i.test(g3.name)).flatMap(planned).sort(byPlan),rest=budget.groups.filter(g3=>/bill/i.test(g3.name)).flatMap(planned).sort(byPlan),cats=[...day2,...rest].slice(0,4);return cats.length?html`<div class="m-sect">Your categories</div>
    <div class="m-cats">${cats.map(c3=>html`<a class="m-cat" href="#/budget">
      <span class="t">${c3.name}</span>
      <span class="v num">${c3.left<0?html`<b class="coral">${money(-c3.left)}</b> <small>over ${money(c3.planned)}</small>`:html`<b>${money(c3.left)}</b> <small>left of ${money(c3.planned)}</small>`}</span>
      <${Bar} frac=${c3.pct} over=${c3.left<0} />
    </a>`)}</div>`:null}function comingUp(subs,today2,days=14){if(!subs||!today2)return[];let until=addDays(today2,days),seen=new Set;return[...subs.items||[],...subs.found?.items||[]].map(s3=>({name:s3.name,date:s3.next,amount:s3.charge})).filter(b3=>b3.date&&b3.date>=today2&&b3.date<=until&&!seen.has(`${b3.name}|${b3.date}`)&&seen.add(`${b3.name}|${b3.date}`)).sort((a3,b3)=>a3.date.localeCompare(b3.date)||b3.amount-a3.amount)}function Bills({subs,today:today2}){if(!subs)return null;let bills=comingUp(subs,today2),first=bills.slice(0,3),more=bills.slice(3),total=bills.reduce((s3,b3)=>s3+Math.abs(b3.amount||0),0);return html`<section class="card m-list">
    <h3>Coming up <a class="m-more" href="#/subscriptions">All bills ›</a></h3>
    ${first.map(b3=>html`<div class="m-row"><${Letter} name=${b3.name} size=${36} />
      <div class="grow"><div class="t">${b3.name}</div><div class="s">${weekdayShort(b3.date)}</div></div>
      <span class="amt num">${money(Math.abs(b3.amount),{decimals:!0})}</span></div>`)}
    ${!bills.length&&html`<div class="m-row"><div class="s">Nothing due in the next 14 days.</div></div>`}
    ${more.length>0&&html`<div class="m-row"><div class="s">+ ${more.slice(0,3).map(b3=>`${b3.name} ${shortDate(b3.date)}`).join(", ")}${more.length>3?` and ${more.length-3} more`:""} · ${money(total)} in the next 14 days</div></div>`}
  </section>`}function Latest({tx,questions}){if(!tx)return null;let asked2=new Set((questions?.open||[]).map(q2=>q2.transactionId)),items=tx.items.filter(t4=>!t4.mirror).slice(0,3),day2=date=>{let l3=dayLabel(date,tx.today);return l3==="Today"||l3==="Yesterday"?l3.toLowerCase():l3};return html`<section class="card m-list">
    <h3>Latest <a class="m-more" href="#/spending">Spending ›</a></h3>
    ${items.map(t4=>{let flag=asked2.has(t4.id)?{label:"The helper asks",tone:"ask"}:t4.flags[0];return html`<a class="m-row" href=${asked2.has(t4.id)?"#/spending?tab=needs":t4.flags.length?"#/spending?tab=flagged":"#/spending"}>
        <${Letter} name=${t4.payee} size=${36} />
        <div class="grow"><div class="t">${t4.payee}</div>
          <div class="s">${flag?html`<span class=${TONE[flag.tone]||"amber"}>${flag.label}</span>`:t4.category||"No category yet"} · ${day2(t4.date)}</div></div>
        <span class=${`amt num${t4.kind==="in"?" good":""}`}>${money(t4.amount,{decimals:!0,sign:t4.kind==="in"})}</span></a>`})}
    ${!items.length&&html`<div class="m-row"><div class="s">No transactions this month yet.</div></div>`}
  </section>`}function MoneyIn({d:d3}){let tax=d3.tax;return html`<section class="card m-moneyin">
    <h3>Money in · ${monthName(d3.month)}</h3>
    <div class="m-split">
      <div><div class="m-mid num good">${money(d3.moneyIn)}</div><div class="s">${plural4(d3.moneyInCount||0,"payment","payments")}</div></div>
      <div class="r">${tax?html`<div class="s">Taxes set aside</div>
          <div class="num m-tax"><b>${money(tax.moved)}</b> <small>of ${money(tax.should)}</small></div>
          <div class=${tax.toMove>0?"amber":"good"}>${tax.toMove>0?`${money(tax.toMove)} more to move`:"All set aside"}</div>`:html`<div class="s">Taxes set aside</div><div class="s">Set it up in GupBudget's Settings on your PC.</div>`}</div>
    </div>
  </section>`}function Noticed({insights}){return insights?.length?html`<section class="card m-list">
    <h3>The helper noticed</h3>
    ${insights.slice(0,3).map(i3=>html`<div class="m-row m-note">
      <${Icon} name=${i3.tone==="info"?"info":"alert"} size=${18} cls=${TONE[i3.tone]||"accent"} />
      <div class="grow"><div class="t">${i3.title}</div><div class="s">${i3.body}</div>
        ${i3.action&&html`<a class="m-more" href=${`#/${i3.action.to.replace(/^transactions\b/,"spending")}`}>${i3.action.label} ›</a>`}</div></div>`)}
  </section>`:null}function Home({counts={}}){let ov=useData("/api/overview"),budget=useData("/api/budget"),subs=useData("/api/subscriptions"),tx=useData("/api/transactions"),qs=useData("/api/helper/questions"),reports=useData("/api/reports");if(ov.loading&&!ov.data)return html`<${Loading} />`;if(ov.error)return html`<${Failed} error=${ov.error} retry=${ov.reload} />`;let d3=ov.data,waiting=counts.requests>0?"#/budget":counts.questions>0?"#/spending?tab=needs":counts.reportsNew>0?"#/reports":"#/more";return html`
    <header class="m-hellobar">
      <span class="m-logo-sq"><${Icon} name="wallet" size=${19} sw=${2} /></span>
      <div class="grow"><div class="m-eyebrow">${greeting()}${d3.name?`, ${d3.name}`:""}</div><b>${longDate(d3.today)}</b></div>
      <${Round} href="#/spending?search=1" label="Search transactions" icon="search" />
      <${Round} href=${waiting} label="What's waiting for you" icon="bell" dot=${counts.requests>0||counts.questions>0||counts.reportsNew>0} />
    </header>
    <${Hero} d=${d3} />
    <${Needs} counts=${counts} reports=${reports.data} />
    <${Categories} budget=${budget.data} />
    <${Bills} subs=${subs.data} today=${d3.today} />
    <${Latest} tx=${tx.data} questions=${qs.data} />
    <${MoneyIn} d=${d3} />
    <${Noticed} insights=${d3.insights} />`}var VIEWS2=[["all","All"],["needs","Needs a look"],["flagged","Flagged"]],TONE2={bad:"coral",warn:"amber",ask:"amber"},OUTCOME={filed:{done:"filed",already:"already filed",off:"not filed (switch off)",gone:"transaction gone"},rule:{made:"rule made",already:"rule already there",off:"no rule (switch off)"},remembered:{queued:"sent to its notes"}},ACTION_W=76,about=t4=>`the ${money(Math.abs(t4.amount),{decimals:!0})} ${t4.amount>0?"payment from":"charge at"} "${t4.payee}" on ${shortDate(t4.date)}${t4.account?` (${t4.account})`:""}`,fileSentence=(t4,cat)=>`Please file ${about(t4)} in ${cat}.`,askSentence=t4=>`About ${about(t4)}: `;function QuestionCard({q:q2,pos,busy,categories,onAnswer,onNext}){let[other,setOther]=d2(!1),[rule,setRule]=d2(!0),[remember,setRemember]=d2(!0),[cat,setCat]=d2(""),[text,setText]=d2(""),open=q2.status==="open",send=extra=>onAnswer({id:q2.id,rule:!!q2.rule&&rule,...extra}),groups=[...new Set(categories.filter(c3=>!c3.income).map(c3=>c3.group))];return html`<div class="card m-q" id=${`q-${q2.id}`}>
    <div class="m-row"><${Letter} name=${q2.payee} size=${38} />
      <div class="grow"><div class="t">${q2.payee}</div>
        <div class="s">${[q2.date&&shortDate(q2.date),q2.account,q2.gone?"no longer in the budget":q2.category||"not filed"].filter(Boolean).join(" · ")}</div></div>
      ${q2.amount!=null&&html`<span class=${`amt num${q2.amount>0?" good":""}`}>${money(q2.amount,{decimals:!0,sign:q2.amount>0})}</span>`}</div>
    <div class="m-qtext">${q2.question}</div>
    ${q2.why&&html`<div class="m-sub">${q2.why}</div>`}
    ${open?html`
      <div class="m-opts">
        ${q2.options.map(o3=>html`<button class="btn m-opt" disabled=${!!busy}
          onClick=${()=>send(o3.categoryId?{categoryId:o3.categoryId,text:"",remember:!1}:{text:o3.label,remember:!1})}>
          <span>${o3.label}</span><small>${o3.categoryId?"file it here":"tell the helper"}</small></button>`)}
        <button class=${`btn m-opt${other?" on":""}`} disabled=${!!busy} aria-expanded=${other} onClick=${()=>setOther(!other)}><span>Something else…</span></button>
      </div>
      ${other&&html`<form class="m-other" onSubmit=${e3=>{e3.preventDefault(),send({categoryId:cat||null,text,remember})}}>
        <select class="field" value=${cat} onChange=${e3=>setCat(e3.target.value)} aria-label="Category">
          <option value="">Category (optional)</option>
          ${groups.map(g3=>html`<optgroup label=${g3}>${categories.filter(c3=>c3.group===g3&&!c3.income).map(c3=>html`<option value=${c3.id}>${c3.name}</option>`)}</optgroup>`)}
        </select>
        <input class="field" value=${text} onInput=${e3=>setText(e3.target.value)} maxlength="500" aria-label="Your answer"
          placeholder="Or say it in a few words" />
        <label class="m-check"><input type="checkbox" checked=${remember} onChange=${e3=>setRemember(e3.target.checked)} />
          <span>Let the helper remember what I write</span></label>
        <button class="btn pri" type="submit" disabled=${!!busy||!cat&&!text.trim()}>Send</button>
      </form>`}
      ${q2.rule&&html`<label class="m-check"><input type="checkbox" checked=${rule} onChange=${e3=>setRule(e3.target.checked)} />
        <span>Always file ${q2.rule.payee} here (makes a rule)</span></label>`}
      <div class="m-qfoot"><span class="faint">${pos}${q2.at?` · ${ago(q2.at)}`:""}</span>
        <span>${onNext&&html`<button class="m-link" type="button" onClick=${onNext}>Next ›</button>`}
          <button class="m-link" type="button" disabled=${!!busy} title="Leave this one; the helper won't ask about it again"
            onClick=${()=>onAnswer({id:q2.id,dismiss:!0})}>Skip</button></span></div>`:html`<div class="m-sub">${q2.status==="dismissed"?"Skipped.":html`You said: <b>${[q2.categoryName,q2.answer].filter(Boolean).join(" · ")}</b>
        ${Object.entries(q2.outcome||{}).map(([k3,v3])=>OUTCOME[k3]?.[v3]).filter(Boolean).map(w2=>` · ${w2}`)}`}</div>`}
  </div>`}function Questions2({data,focus,deck,reload}){let[busy,setBusy]=d2(!1),[msg,setMsg]=d2(null),[at,setAt]=d2(0),open=data?.open||[],wanted=focus?[...open,...data?.answered||[]].find(q2=>q2.id===focus):null;if(A2(()=>{wanted&&document.getElementById(`q-${wanted.id}`)?.scrollIntoView({block:"center"})},[!!data,focus]),!data)return null;let answer=async body=>{setBusy(!0),setMsg(null);try{let r3=await api("/api/helper/questions/answer",body);setMsg(r3.ok?{good:!0,text:r3.message||(r3.status==="dismissed"?"Skipped: the helper won't ask about it again.":"Thanks.")}:{good:!1,text:`That didn't work: ${r3.error}`})}catch(err){setMsg({good:!1,text:`That didn't work: ${err.message}`})}finally{setBusy(!1),reload(),dispatchEvent(new Event(REQUESTS_CHANGED))}},cats=data.categories||[],n3=open.length,i3=Math.min(at,Math.max(0,n3-1)),shown=deck?wanted&&open.includes(wanted)?[wanted]:open.slice(i3,i3+1):open,ended=wanted&&!open.includes(wanted)?wanted:null;return html`
    ${focus&&!wanted&&html`<div class="notice"><${Icon} name="alert" size=${16} />This question is gone: it was answered a while ago or the helper took it back.</div>`}
    ${msg&&html`<div class=${`notice${msg.good?" ok":""}`} role="status">${msg.text}</div>`}
    ${ended&&html`<${QuestionCard} key=${ended.id} q=${ended} pos="Needs a look" busy=${busy} categories=${cats} onAnswer=${answer} />`}
    ${shown.map(q2=>html`<${QuestionCard} key=${q2.id} q=${q2} pos=${`Needs a look · ${open.indexOf(q2)+1} of ${n3}`} busy=${busy} categories=${cats}
      onAnswer=${answer} onNext=${deck&&n3>1&&!(wanted&&open.includes(wanted))?()=>setAt((open.indexOf(q2)+1)%n3):null} />`)}
    ${!deck&&!n3&&!ended&&html`<div class="card empty"><b>Nothing needs a look</b><span>The helper has no questions right now.</span></div>`}
    ${n3>0&&html`<div class="m-sub">${data.canFile?"Picking a category files it. Your answers teach the helper; nothing else changes.":'The "Categorize transactions" switch is off, so answers are only kept for the helper.'}</div>`}`}function TxRow({t:t4,flags,askedId,swiped,setSwiped,expanded,setExpanded,onFile,d:d3,selecting,picked,toggle,done}){let[dx,setDx]=d2(0),isOpen=swiped===t4.id,canFile=t4.kind!=="transfer",w2=ACTION_W*(canFile?2:1),swipe=useSwipeX({onMove:d4=>setDx(isOpen?Math.max(0,Math.min(w2,d4)):Math.max(-w2-30,Math.min(0,d4))),onEnd:(d4,fast)=>{setDx(0),setSwiped((isOpen?d4<40:d4<-50||fast&&d4<0)?t4.id:null)}}),style=isOpen?{marginRight:`${w2}px`,...dx?{transform:`translateX(${dx}px)`,transition:"none"}:null}:dx?{transform:`translateX(${dx}px)`,transition:"none"}:null,exp=expanded===t4.id;return html`<div class=${`m-swipe${isOpen?" open":""}${dx?" dragging":""}`}>
    <div class="m-under" aria-hidden=${!isOpen}>
      ${canFile&&html`<button class="file" tabindex=${isOpen?0:-1} onClick=${()=>onFile(t4)}>File as…</button>`}
      <button class="ask" tabindex=${isOpen?0:-1} onClick=${()=>{setSwiped(null),openAsk(askSentence(t4))}}>Ask</button>
    </div>
    <div class="m-over" ...${swipe} style=${style}>
      <button class="m-row m-tx" aria-expanded=${selecting?null:exp} aria-pressed=${selecting?picked:null}
        onClick=${()=>selecting?toggle(t4.id):isOpen?setSwiped(null):setExpanded(exp?null:t4.id)}>
        ${selecting&&html`<span class=${`m-sel${picked?" on":""}`} aria-hidden="true">${picked&&html`<${Icon} name="check" size=${14} sw=${2.6} />`}</span>`}
        ${t4.kind==="transfer"?html`<span class="lt plain" style="width:36px;height:36px"><${Icon} name="swap" size=${17} /></span>`:html`<${Letter} name=${t4.payee} size=${36} />`}
        <span class="grow"><span class="t">${t4.payee}</span>
          <span class="s">${flags.length?html`<span class=${TONE2[flags[0].tone]||"amber"}>${flags[0].label}${flags.length>1?` +${flags.length-1}`:""}</span> · `:""}${t4.chatLogged?html`<span class="chatlog">logged in chat</span> · `:""}${t4.category||"No category yet"}</span></span>
        <span class=${`amt num${t4.kind==="in"?" good":""}`}>${money(t4.amount,{decimals:!0,sign:t4.kind==="in"})}</span>
      </button>
      ${exp&&!selecting&&html`<div class="m-exp">
        ${flags.map(f3=>html`<div><b>${f3.label}:</b> ${f3.why}</div>`)}
        ${t4.chatLogged&&html`<div>Logged in the Finance chat. When the bank's charge arrives (same account and amount, within 7 days) it is matched to this one, not counted twice.${t4.chatStale?" This one is older than that, so the charge will come in as its own transaction: delete this one then.":""}</div>`}
        <div class="s">${[t4.account,t4.notes].filter(Boolean).join(" · ")}</div>
        <${TxnEditor} key=${[t4.id,t4.amount,t4.date,t4.accountId,t4.notes,t4.payeeName,t4.cleared,t4.kind,t4.split].join("|")} t=${t4} d=${d3}
          onChanged=${done} onDeleted=${(restore,payee,amount)=>done(`Deleted ${payee} (${money(amount,{decimals:!0})}).`)} />
        <div class="m-expbtns">
          <${DuplicateButton} t=${t4} onDone=${text=>done(text)} />
          ${askedId&&html`<a class="btn pri" href=${`#/spending?tab=needs&question=${askedId}`}><${Icon} name="spark" size=${15} />Answer the helper</a>`}
          ${canFile&&html`<button class="btn" onClick=${()=>onFile(t4)}>File as…</button>`}
          <button class="btn" onClick=${()=>openAsk(askSentence(t4))}>Ask about it</button>
        </div>
      </div>`}
    </div>
  </div>`}function FilePicker({t:t4,categories,onClose}){let inc=t4.amount>0,list2=categories.filter(c3=>!!c3.income===inc&&c3.name!==t4.category),groups=[...new Set(list2.map(c3=>c3.group))];return html`<div class="m-sheet-back" onClick=${e3=>{e3.target===e3.currentTarget&&onClose()}}>
    <div class="m-pick-sheet card" role="dialog" aria-modal="true" aria-label=${`File ${t4.payee} as`}>
      <div class="m-split"><b>File “${t4.payee}” as…</b><button class="m-round small" aria-label="Close" onClick=${onClose}><${Icon} name="x" size=${16} /></button></div>
      <div class="m-sub">Finance files it for you (with your "Categorize transactions" switch on). You see the message before it's sent.</div>
      <div class="m-catlist">${groups.map(g3=>html`<div class="m-sect">${g3}</div>
        ${list2.filter(c3=>c3.group===g3).map(c3=>html`<button class="m-row m-catpick" onClick=${()=>{onClose(),openAsk(fileSentence(t4,c3.name))}}>
          <span class="grow t">${c3.name}</span><${Icon} name="chev" size=${16} /></button>`)}`)}
        ${!list2.length&&html`<div class="m-sub">No categories to pick from.</div>`}</div>
    </div>
  </div>`}function Spending2({params={}}){let tx=useData(`/api/transactions${params.month?`?month=${params.month}`:""}`),qs=useData("/api/helper/questions"),[view,setView]=d2(VIEWS2.some(v3=>v3[0]===params.tab)?params.tab:params.question?"needs":"all"),[searching,setSearching]=d2(!!params.search),[search,setSearch]=d2(""),[swiped,setSwiped]=d2(null),[expanded,setExpanded]=d2(null),[filing,setFiling]=d2(null),[adding,setAdding]=d2(params.new==="1"),[selecting,setSelecting]=d2(!1),[picked,setPicked]=d2(()=>new Set),[notice,setNotice]=d2(null);if(tx.loading&&!tx.data)return html`<${Loading} />`;if(tx.error)return html`<${Failed} error=${tx.error} retry=${tx.reload} />`;let d3=tx.data,openQs=qs.data?.open||[],asked2=new Map(openQs.map(q3=>[q3.transactionId,q3])),flagsOf=t4=>asked2.has(t4.id)?[{kind:"question",label:"The helper asks",tone:"ask",why:asked2.get(t4.id).question},...t4.flags]:t4.flags,reloadAll=()=>{qs.reload(),tx.reload()},done=text=>{text&&setNotice({good:!0,text}),setExpanded(null),reloadAll()},toggle=id=>setPicked(p3=>{let n3=new Set(p3);return n3.has(id)?n3.delete(id):n3.add(id),n3}),q2=search.trim().toLowerCase(),rows=d3.items.filter(t4=>!t4.mirror&&(view!=="flagged"||flagsOf(t4).length)&&(!q2||`${t4.payee} ${t4.category||""} ${t4.account} ${t4.notes||""}`.toLowerCase().includes(q2))),days=[];for(let t4 of rows)days.at(-1)?.date!==t4.date&&days.push({date:t4.date,items:[]}),days.at(-1).items.push(t4);let flagged=d3.items.filter(t4=>!t4.mirror&&flagsOf(t4).length).length,pick=v3=>{setView(v3),setSwiped(null),setExpanded(null)};return html`
    <${Title} title="Spending" sub=${html`<${MonthStep} month=${d3.month} prev=${d3.prev} next=${d3.next} screen="spending" params=${{tab:view}} />`}>
      <${Round} label="Search" icon="search" on=${searching} onClick=${()=>{setSearching(!searching),searching&&setSearch("")}} />
      <${Round} label=${selecting?"Stop selecting":"Select several"} icon="check" on=${selecting}
        onClick=${()=>{setSelecting(!selecting),setPicked(new Set),setSwiped(null),setExpanded(null)}} />
      <${Round} label="Add a transaction" icon="plus" on=${adding} onClick=${()=>setAdding(!adding)} />
    <//>
    <datalist id="payee-names">${(d3.payees||[]).map(p3=>html`<option value=${p3}></option>`)}</datalist>
    ${adding&&html`<${AddTransaction} d=${d3} onClose=${()=>setAdding(!1)} onAdded=${text=>{setAdding(!1),done(`Added: ${text}.`)}} />`}
    ${notice&&html`<div class=${`notice${notice.good?" ok":""}`} role="status">${notice.text}
      <button class="iconbtn" aria-label="Dismiss" onClick=${()=>setNotice(null)}><${Icon} name="x" size=${13} sw=${2} /></button></div>`}
    ${selecting&&html`<${BulkBar} ids=${[...picked]} d=${d3} onClear=${()=>{setSelecting(!1),setPicked(new Set)}}
      onDone=${changed=>{changed&&(setPicked(new Set),reloadAll())}} />`}
    ${searching&&html`<div class="m-search"><${Icon} name="search" size=${17} />
      <input type="search" value=${search} onInput=${e3=>setSearch(e3.target.value)} placeholder="Payee, category, account" aria-label="Search transactions" autofocus /></div>`}
    <div class="m-seg" role="tablist">${VIEWS2.map(([k3,label3])=>html`<button role="tab" aria-selected=${view===k3} class=${view===k3?"on":""} onClick=${()=>pick(k3)}>
      ${label3}${k3==="needs"&&openQs.length>0&&html`<i class="numdot">${openQs.length}</i>`}${k3==="flagged"&&flagged>0&&html`<small>${flagged}</small>`}</button>`)}</div>
    ${view!=="flagged"&&html`<${Questions2} data=${qs.data} focus=${params.question||null} deck=${view==="all"} reload=${reloadAll} />`}
    ${view!=="needs"&&html`
      ${days.map(day2=>html`<div class="m-day">${dayLabel(day2.date,d3.today)}</div>
        ${day2.items.map(t4=>html`<${TxRow} key=${t4.id} t=${t4} flags=${flagsOf(t4)} askedId=${asked2.get(t4.id)?.id}
          swiped=${swiped} setSwiped=${setSwiped} expanded=${expanded} setExpanded=${setExpanded} onFile=${x2=>{setSwiped(null),setFiling(x2)}}
          d=${d3} selecting=${selecting} picked=${picked.has(t4.id)} toggle=${toggle} done=${done} />`)}`)}
      ${!days.length&&html`<div class="card empty"><b>${q2?"Nothing matches":view==="flagged"?"Nothing flagged":"No transactions this month"}</b>
        <span>${q2?"Try other words.":view==="flagged"?`Nothing in ${monthName(d3.month)} looks off.`:"Once your banks sync, they show up here."}</span></div>`}
      ${days.length>0&&html`<div class="m-sub">${plural4(rows.length,"transaction","transactions")} · tap one to change it, swipe it left to file it or ask about it</div>`}`}
    ${filing&&html`<${FilePicker} t=${filing} categories=${qs.data?.categories||[]} onClose=${()=>setFiling(null)} />`}`}function parseBalance(v3){let t4=String(v3??"").replace(/[$,\s]/g,""),neg=!1;if(/^\(.*\)$/.test(t4)&&(neg=!0,t4=t4.slice(1,-1)),t4.startsWith("-")&&(neg=!neg,t4=t4.slice(1)),!/^\d+(\.\d{1,2})?$/.test(t4))return null;let c3=Math.round(Number(t4)*100);return neg?-c3:c3}var cash=c3=>money(c3,{decimals:!0}),stamp=ymd=>ymd?shortDate(ymd):null;function Form2({children,onSubmit,ok=!0,label:label3,busy,onCancel}){return html`<form class="cedform" onSubmit=${e3=>{e3.preventDefault(),ok&&!busy&&onSubmit()}}>
    ${children}
    <button class="btn small pri" type="submit" disabled=${busy||!ok}>${label3}</button>
    ${onCancel&&html`<button class="btn small" type="button" onClick=${onCancel}>Cancel</button>`}
  </form>`}function AddAccount({onDone,onCancel}){let[name,setName]=d2(""),[off,setOff]=d2("on"),[bal,setBal]=d2(""),[date,setDate]=d2(localToday()),[busy,setBusy]=d2(!1),[err,setErr]=d2(null),cents=bal.trim()===""?0:parseBalance(bal);return html`<section class="card pad accform" aria-label="Add an account">
    <${Form2} onSubmit=${async()=>{setBusy(!0),setErr(null);let r3=await listChange("account","createAccount",{name:name.trim(),offbudget:off==="off",balance:cents,date:cents?date:null});setBusy(!1),r3.ok?onDone(`${r3.summary}.`):setErr(r3.error)}} ok=${name.trim()&&cents!==null} label="Add the account" busy=${busy} onCancel=${onCancel}>
      <input class="field" value=${name} maxlength="50" placeholder="Account name (like Checking)" aria-label="Account name" autofocus onInput=${e3=>setName(e3.target.value)} />
      <select class="field" value=${off} aria-label="On or off the budget" onChange=${e3=>setOff(e3.target.value)}>
        <option value="on">On budget (counts in your budget)</option><option value="off">Off budget (tracking only)</option></select>
      <input class="field" value=${bal} inputmode="decimal" placeholder="Opening balance (optional)" aria-label="Opening balance" style="flex:0 1 190px" onInput=${e3=>setBal(e3.target.value)} />
      ${cents?html`<input class="field" type="date" value=${date} aria-label="Opening balance date" style="flex:0 1 150px" onInput=${e3=>setDate(e3.target.value)} />`:null}
    </${Form2}>
    ${cents===null&&html`<div class="bad" style="font-size:13px">The opening balance should be an amount like 1250 or 1250.5 (a minus sign for a debt).</div>`}
    ${err&&html`<div class="bad" role="status" style="font-size:13px">That didn't work: ${err}</div>`}
  </section>`}function LinkBank({a:a3,onDone,onCancel}){let{data,error,loading}=useData("/api/accounts/bank"),[pick,setPick]=d2(""),[since,setSince]=d2(()=>{let d3=new Date;return d3.setDate(d3.getDate()-30),localToday(d3)});if(loading&&!data)return html`<div class="cedpanel muted">Asking SimpleFIN…</div>`;if(error||data?.ok===!1)return html`<div class="cedpanel"><div class="bad">${error?.message||data.error}</div>
    <div class="cedform"><a class="btn small" href="#/banks">Bank sync setup</a><button class="btn small" onClick=${onCancel}>Close</button></div></div>`;let free=data.accounts.filter(x2=>!x2.linkedTo),chosen=free.find(x2=>x2.id===pick);return free.length?html`<div class="cedpanel" style="border-color:var(--line);background:var(--control)">
    <div class="cedform"><select class="field" value=${pick} aria-label="SimpleFIN account" onChange=${e3=>setPick(e3.target.value)}>
      <option value="">Pick the bank account for ${a3.name}</option>
      ${free.map(x2=>html`<option value=${x2.id}>${x2.institution?`${x2.institution} · `:""}${x2.name}${x2.balance!==null?` · ${cash(x2.balance)}`:""}</option>`)}</select>
      <label class="check">Bring in transactions since <input class="field" type="date" value=${since} onInput=${e3=>setSince(e3.target.value)} style="flex:0 1 150px" /></label></div>
    ${chosen&&html`<${Confirm} kind="account" title=${`Link ${a3.name} to ${chosen.name}?`} action="linkAccountBank" button="Link it" icon="bank"
      args=${{accountId:a3.id,externalId:chosen.id,externalName:`${chosen.institution?`${chosen.institution} `:""}${chosen.name}`,startDate:since}}
      note="Only reads the bank's transactions through SimpleFIN; nothing is sent to your bank."
      onDone=${r3=>onDone(`${r3.summary}.`)} onCancel=${onCancel} />`}
    ${!chosen&&html`<div class="cedform"><button class="btn small" onClick=${onCancel}>Cancel</button></div>`}
  </div>`:html`<div class="cedpanel"><div>Every SimpleFIN account is already linked.</div><div class="cedform"><button class="btn small" onClick=${onCancel}>Close</button></div></div>`}function Manage({a:a3,all,categories,onDone,onClose}){let[name,setName]=d2(a3.name),[notes,setNotes]=d2(a3.notes||""),[ask2,setAsk]=d2(null),[to,setTo]=d2(""),[cat,setCat]=d2(""),[busy,setBusy]=d2(!1),[err,setErr]=d2(null),run=async(action,args,text)=>{setBusy(!0),setErr(null);let r3=await listChange("account",action,args);setBusy(!1),r3.ok?onDone(text||`${r3.summary}.`):setErr(r3.error)},others=all.filter(x2=>!x2.closed&&x2.id!==a3.id),target=others.find(x2=>x2.id===to),crossing=target&&target.offbudget!==a3.offbudget,closeArgs={accountId:a3.id,...a3.balance!==0||a3.transactions?{transferToId:to||null}:{},categoryId:crossing&&cat||null};return html`<div class="paydetail accmanage" role="group" aria-label=${`Manage ${a3.name}`}>
    ${err&&html`<div class="bad" role="status" style="font-size:13px">That didn't work: ${err}</div>`}
    <${Form2} onSubmit=${()=>run("renameAccount",{accountId:a3.id,name:name.trim()})} ok=${name.trim()&&name.trim()!==a3.name} label="Rename" busy=${busy}>
      <input class="field" value=${name} maxlength="50" aria-label="Account name" onInput=${e3=>setName(e3.target.value)} /></${Form2}>
    <${Form2} onSubmit=${()=>run("setAccountNotes",{accountId:a3.id,notes:notes.trim()})} ok=${notes.trim()!==(a3.notes||"")} label="Save notes" busy=${busy}>
      <textarea class="field" rows="2" maxlength="1000" placeholder="Notes about this account" aria-label="Notes" style="flex:1 1 320px;resize:vertical"
        value=${notes} onInput=${e3=>setNotes(e3.target.value)} /></${Form2}>
    <div class="cedform">
      ${!a3.closed&&html`<button class="btn small" disabled=${busy} onClick=${()=>setAsk(ask2==="side"?null:"side")}>
        <${Icon} name="swap" size=${14} />${a3.offbudget?"Put on the budget":"Take off the budget"}</button>`}
      ${!a3.closed&&(a3.linked?html`<button class="btn small" disabled=${busy} onClick=${()=>setAsk(ask2==="unlink"?null:"unlink")}><${Icon} name="bank" size=${14} />Stop bank sync</button>`:html`<button class="btn small" disabled=${busy} onClick=${()=>setAsk(ask2==="link"?null:"link")}><${Icon} name="bank" size=${14} />Link to a bank</button>`)}
      ${a3.closed?html`<button class="btn small" disabled=${busy} onClick=${()=>run("reopenAccount",{accountId:a3.id})}><${Icon} name="check" size=${14} />Reopen</button>`:html`<button class="btn small" disabled=${busy} onClick=${()=>setAsk(ask2==="close"?null:"close")}><${Icon} name="lock" size=${14} />Close</button>`}
      <button class="btn small danger" disabled=${busy} onClick=${()=>setAsk(ask2==="delete"?null:"delete")}><${Icon} name="trash" size=${14} />Delete</button>
      <button class="btn small" style="margin-left:auto" onClick=${onClose}>Done</button>
    </div>
    ${ask2==="side"&&html`<${Confirm} kind="account" title=${a3.offbudget?`Put ${a3.name} on the budget?`:`Take ${a3.name} off the budget?`} action="setAccountBudgetSide"
      args=${{accountId:a3.id,offbudget:!a3.offbudget}} button="Yes, do it" icon="swap" busy=${busy} onDone=${r3=>onDone(`${r3.summary}.`)} onCancel=${()=>setAsk(null)} />`}
    ${ask2==="unlink"&&html`<${Confirm} kind="account" title=${`Stop bank sync for ${a3.name}?`} action="unlinkAccountBank" args=${{accountId:a3.id}} button="Stop sync" icon="bank"
      busy=${busy} onDone=${r3=>onDone(`${r3.summary}.`)} onCancel=${()=>setAsk(null)} />`}
    ${ask2==="link"&&html`<${LinkBank} a=${a3} onDone=${onDone} onCancel=${()=>setAsk(null)} />`}
    ${ask2==="close"&&html`<div class="cedpanel" style="border-color:var(--line);background:var(--control)">
      ${(a3.balance!==0||a3.transactions>0)&&a3.transactions>0&&html`<div class="cedform">
        <span>${a3.balance!==0?`It still holds ${cash(a3.balance)}. Move that to:`:"No balance to move. Move it to (optional):"}</span>
        <select class="field" value=${to} aria-label="Move the balance to" onChange=${e3=>setTo(e3.target.value)}>
          <option value="">${a3.balance!==0?"Pick an account":"Nowhere"}</option>
          ${others.map(x2=>html`<option value=${x2.id}>${x2.name}${x2.offbudget?" (off budget)":""}</option>`)}</select>
        ${crossing&&html`<select class="field" value=${cat} aria-label="Category for the move" onChange=${e3=>setCat(e3.target.value)}>
          <option value="">Pick a category for the move</option>${categories.map(c3=>html`<option value=${c3.id}>${c3.group}: ${c3.name}</option>`)}</select>`}</div>`}
      <${Confirm} kind="account" title=${`Close ${a3.name}?`} action="closeAccount" args=${closeArgs} button="Close it" icon="lock" busy=${busy}
        note=${a3.transactions?"It stays in the list under Closed, with its transactions; you can reopen it.":null}
        onDone=${r3=>onDone(`${r3.summary}.`)} onCancel=${()=>setAsk(null)} />
    </div>`}
    ${ask2==="delete"&&html`<${Confirm} kind="account" title=${`Delete ${a3.name}?`} action="deleteAccount" args=${{accountId:a3.id}} busy=${busy}
      note="This can't be undone from here. Closing keeps the history." onDone=${r3=>onDone(`${r3.summary}.`)} onCancel=${()=>setAsk(null)} />`}
  </div>`}function Reconcile({a:a3,categories,onDone,onClose}){let[text,setText]=d2(""),[applied,setApplied]=d2(null),[filter,setFilter]=d2("open"),[ask2,setAsk]=d2(null),[date,setDate]=d2(localToday()),[cat,setCat]=d2(""),[busy,setBusy]=d2(!1),[msg,setMsg]=d2(null),{data:d3,error,loading,reload}=useData(`/api/accounts/reconcile?id=${encodeURIComponent(a3.id)}${applied===null?"":`&statement=${applied}`}`);A2(()=>{setApplied(null),setText("")},[a3.id]);let cents=text.trim()===""?null:parseBalance(text);if(loading&&!d3)return html`<div class="cedpanel muted">Loading…</div>`;if(error||d3?.ok===!1)return html`<div class="cedpanel bad">${error?.message||d3.error}</div>`;let f3=d3.figures,lockedCount=d3.transactions.filter(t4=>t4.reconciled).length,shown=d3.transactions.filter(t4=>filter==="all"||!t4.cleared||!t4.reconciled),matches2=d3.difference===0,toggle=async t4=>{setBusy(!0),setMsg(null);let r3=await listChange("account","markCleared",{transactionIds:[t4.id],cleared:!t4.cleared});setBusy(!1),r3.ok||setMsg({good:!1,text:`That didn't work: ${r3.error}`}),reload()},clearAll=async()=>{let ids=d3.transactions.filter(t4=>!t4.cleared).map(t4=>t4.id);if(!ids.length)return;setBusy(!0),setMsg(null);let r3=await listChange("account","markCleared",{transactionIds:ids.slice(0,200),cleared:!0});setBusy(!1),setMsg(r3.ok?{good:!0,text:`${r3.summary}.`}:{good:!1,text:`That didn't work: ${r3.error}`}),reload()},finished=text2=>{setAsk(null),setMsg({good:!0,text:text2}),reload(),onDone(null)},notCleared=d3.transactions.filter(t4=>!t4.cleared).length,adjustArgs={accountId:a3.id,statementBalance:d3.statementBalance,amount:d3.difference,date,categoryId:!a3.offbudget&&cat?cat:null};return html`<div class="paydetail recon" role="group" aria-label=${`Reconcile ${a3.name}`}>
    <div class="reconfig">
      <div><span class="muted">Balance in GupBudget</span><b>${cash(f3.balance)}</b></div>
      <div><span class="muted">Cleared (the bank has it)</span><b>${cash(f3.cleared)}</b></div>
      <div><span class="muted">Not cleared yet</span><b>${cash(f3.uncleared)}</b></div>
      <form class="stmt" onSubmit=${e3=>{e3.preventDefault(),cents!==null&&setApplied(cents)}}>
        <label><span class="muted">Balance on the bank's statement</span>
          <input class="field" value=${text} inputmode="decimal" placeholder="0.00" aria-label="Statement balance" onInput=${e3=>setText(e3.target.value)} /></label>
        <button class="btn small pri" type="submit" disabled=${cents===null}>Check</button>
      </form>
    </div>
    ${text.trim()!==""&&cents===null&&html`<div class="bad" style="font-size:13px">That should be an amount like 1250 or 1250.5 (a minus sign for a debt).</div>`}
    ${d3.difference!==null&&html`<div class=${`notice ${matches2?"ok":""}`} role="status" style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
      <${Icon} name=${matches2?"check":"alert"} size=${16} />
      ${matches2?"The cleared balance matches the statement.":`Off by ${cash(Math.abs(d3.difference))}: the statement is ${d3.difference>0?"higher":"lower"} than what is cleared.`}
      <span class="muted">${d3.lastReconciled?`Last reconciled ${stamp(d3.lastReconciled)}.`:"Not reconciled yet."}</span></div>`}
    ${msg&&html`<div class=${`notice ${msg.good?"ok":""}`} role="status">${msg.text}</div>`}
    <div class="cedform">
      <label class="check"><input type="checkbox" checked=${filter==="all"} onChange=${e3=>setFilter(e3.target.checked?"all":"open")} />Show locked ones too</label>
      <button class="btn small" disabled=${busy||!notCleared} onClick=${clearAll}><${Icon} name="check" size=${14} />Mark all ${notCleared} not cleared as cleared</button>
      <div class="filters" style="margin-left:auto;display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn small pri" disabled=${busy||!matches2||!f3.unlocked} onClick=${()=>setAsk(ask2==="lock"?null:"lock")}><${Icon} name="lock" size=${14} />Lock as reconciled</button>
        <button class="btn small" disabled=${busy||d3.difference===null||matches2} onClick=${()=>setAsk(ask2==="adjust"?null:"adjust")}>Add an adjustment${d3.difference?` of ${cash(d3.difference)}`:""}</button>
        <button class="btn small" disabled=${busy||!lockedCount} onClick=${()=>setAsk(ask2==="unlock"?null:"unlock")}>Unlock ${lockedCount||""}</button>
      </div></div>
    ${ask2==="lock"&&html`<${Confirm} kind="account" title=${`Lock the cleared transactions in ${a3.name}?`} action="lockReconciled"
      args=${{accountId:a3.id,statementBalance:d3.statementBalance}} button="Lock them" icon="lock" busy=${busy}
      note="Locked transactions can't be changed (amount, date, account, delete) until you unlock them." onDone=${r3=>finished(`${r3.summary}.`)} onCancel=${()=>setAsk(null)} />`}
    ${ask2==="adjust"&&html`<div class="cedpanel" style="border-color:var(--line);background:var(--control)">
      <div class="cedform"><label class="check">Dated <input class="field" type="date" value=${date} style="flex:0 1 150px" onInput=${e3=>setDate(e3.target.value)} /></label>
        ${!a3.offbudget&&html`<select class="field" value=${cat} aria-label="Category (optional)" onChange=${e3=>setCat(e3.target.value)}>
          <option value="">No category</option>${categories.map(c3=>html`<option value=${c3.id}>${c3.group}: ${c3.name}</option>`)}</select>`}</div>
      <${Confirm} kind="account" title="Add the adjustment?" action="addReconcileAdjustment" args=${adjustArgs} button="Add it" icon="check" busy=${busy}
        note="It is cleared at once, so the cleared balance becomes the statement's. You can then lock." onDone=${r3=>finished(`${r3.summary}.`)} onCancel=${()=>setAsk(null)} />
    </div>`}
    ${ask2==="unlock"&&html`<${Confirm} kind="account" title=${`Unlock the reconciled transactions in ${a3.name}?`} action="unlockTransactions" args=${{accountId:a3.id}}
      button="Unlock" icon="lock" busy=${busy} onDone=${r3=>finished(`${r3.summary}.`)} onCancel=${()=>setAsk(null)} />`}
    <table class="recontx"><tbody>${shown.map(t4=>html`<tr key=${t4.id} class=${t4.reconciled?"locked":""}>
      <td><input type="checkbox" checked=${t4.cleared} disabled=${busy||t4.reconciled} aria-label=${`${t4.payee||"Transaction"} ${shortDate(t4.date)} cleared`} onChange=${()=>toggle(t4)} /></td>
      <td class="muted">${shortDate(t4.date)}</td><td>${t4.payee||html`<span class="muted">no payee</span>`}${t4.split?html` <span class="muted">(split)</span>`:""}</td>
      <td class="num">${cash(t4.amount)}</td>
      <td>${t4.reconciled?html`<span title="Reconciled and locked"><${Icon} name="lock" size=${13} /></span>`:""}</td></tr>`)}</tbody></table>
    ${!shown.length&&html`<div class="muted" style="font-size:13px">${d3.transactions.length?"Everything here is cleared and locked.":"No transactions yet."}</div>`}
    ${d3.more&&html`<div class="muted" style="font-size:12.5px">Showing the latest ${d3.transactions.length}.</div>`}
    <div class="cedform"><button class="btn small" onClick=${onClose}>Close</button></div>
  </div>`}function Row2({a:a3,group,i:i3,panel,setPanel,busy,move}){let bits=[plural(a3.transactions,"transaction"),a3.lastReconciled&&`reconciled ${stamp(a3.lastReconciled)}`,a3.linked&&`SimpleFIN${a3.lastSync?`, synced ${ago(Number(a3.lastSync)||0)}`:""}`].filter(Boolean);return html`<div class=${`payrow accrow${a3.closed?" closed":""}`}>
    <div class="ib"><${Icon} name=${a3.linked?"bank":"wallet"} size=${18} /></div>
    <button class="paymain" aria-expanded=${panel?.id===a3.id} onClick=${()=>setPanel(panel?.id===a3.id&&panel.kind==="manage"?null:{id:a3.id,kind:"manage"})}>
      <b>${a3.name}</b>${a3.linked&&html` <span class=${`pill ${a3.syncStatus&&a3.syncStatus!=="ok"?"warn":"good"}`}>${a3.syncStatus&&a3.syncStatus!=="ok"?"Needs a look":"Bank sync"}</span>`}
      <span class="muted">${bits.join(" · ")}</span>
      ${a3.notes&&html`<span class="muted accnote">${a3.notes.split(`
`)[0]}</span>`}
    </button>
    <b class=${`num${a3.balance<0?" neg":""}`}>${cash(a3.balance)}</b>
    <div class="cedacts">
      ${!a3.closed&&html`<button class="btn small" disabled=${busy} onClick=${()=>setPanel(panel?.id===a3.id&&panel.kind==="reconcile"?null:{id:a3.id,kind:"reconcile"})}>Reconcile</button>`}
      <${IconBtn} name="up" label=${`Move ${a3.name} up`} disabled=${busy||i3===0} onClick=${()=>move(a3,group[i3-1].id)} />
      <${IconBtn} name="down" label=${`Move ${a3.name} down`} disabled=${busy||i3===group.length-1} onClick=${()=>move(a3,group[i3+2]?.id||null)} />
      <${IconBtn} name="edit" label=${`Manage ${a3.name}`} onClick=${()=>setPanel(panel?.id===a3.id&&panel.kind==="manage"?null:{id:a3.id,kind:"manage"})} />
    </div>
  </div>`}function Accounts({params={}}){let{data:d3,error,loading,reload}=useData("/api/accounts"),[panel,setPanel]=d2(params.id?{id:params.id,kind:params.reconcile?"reconcile":"manage"}:null),[adding,setAdding]=d2(!1),[busy,setBusy]=d2(!1),[msg,setMsg]=d2(null);if(loading&&!d3)return html`<${Loading} />`;if(error)return html`<${Failed} error=${error} retry=${reload} />`;if(d3.ok===!1)return html`<${Failed} error=${{message:d3.error}} retry=${reload} />`;let lists=[["On budget",d3.accounts.filter(a3=>!a3.closed&&!a3.offbudget)],["Off budget",d3.accounts.filter(a3=>!a3.closed&&a3.offbudget)],["Closed",d3.accounts.filter(a3=>a3.closed)]].filter(([,l3])=>l3.length),open=d3.accounts.filter(a3=>!a3.closed),total=open.filter(a3=>!a3.offbudget).reduce((s3,a3)=>s3+a3.balance,0),done=text=>{text&&setMsg({good:!0,text}),setPanel(null),setAdding(!1),reload()},move=async(a3,beforeId)=>{setBusy(!0),setMsg(null);let r3=await listChange("account","moveAccount",{accountId:a3.id,beforeId});setBusy(!1),r3.ok||setMsg({good:!1,text:`That didn't work: ${r3.error}`}),reload()},current2=panel&&d3.accounts.find(a3=>a3.id===panel.id);return html`<div style="display:flex;flex-direction:column;gap:14px;min-width:0">
    <div class="pagehead">
      <div><h1 class="disp">Accounts</h1>
        <div class="sub">${plural(open.length,"account")} · ${cash(total)} on the budget${d3.accounts.length>open.length?` · ${d3.accounts.length-open.length} closed`:""}</div></div>
      <div class="right">
        <button class="btn small" onClick=${()=>{location.hash="#/banks"}}><${Icon} name="bank" size=${14} />Bank sync</button>
        <button class="btn small pri" onClick=${()=>setAdding(!0)}><${Icon} name="plus" size=${14} sw=${2.2} />Add an account</button>
      </div>
    </div>
    ${msg&&html`<div class=${`notice ${msg.good?"ok":""}`} role="status">${msg.text}</div>`}
    ${adding&&html`<${AddAccount} onDone=${done} onCancel=${()=>setAdding(!1)} />`}
    ${lists.map(([title,list2])=>html`<section class="card txlist" key=${title} aria-label=${title}>
      <div class="cedhead" style="padding:8px 10px 0"><b>${title}</b></div>
      ${list2.map((a3,i3)=>html`<div key=${a3.id}>
        <${Row2} a=${a3} group=${list2} i=${i3} panel=${panel} setPanel=${setPanel} busy=${busy} move=${move} />
        ${current2?.id===a3.id&&panel.kind==="manage"&&html`<${Manage} a=${a3} all=${d3.accounts} categories=${d3.categories} onDone=${done} onClose=${()=>setPanel(null)} />`}
        ${current2?.id===a3.id&&panel.kind==="reconcile"&&html`<${Reconcile} a=${a3} categories=${d3.categories} onDone=${()=>reload()} onClose=${()=>setPanel(null)} />`}
      </div>`)}
    </section>`)}
    ${!d3.accounts.length&&html`<div class="empty"><b>No accounts yet</b><span>Add one with "Add an account", or link your bank on the Bank sync screen.</span></div>`}
  </div>`}var cash2=c3=>money(c3,{decimals:!0}),asInput=c3=>c3?(c3/100).toFixed(2):"",FILLS=[["copy-last","Copy last month"],["avg3","Average of the last 3 months"],["avg6","Average of the last 6 months"],["avg12","Average of the last 12 months"],["zero","Set to $0"]],Note=({children})=>html`<div class="muted" style="font-size:12.5px">${children}</div>`,Sect=({title,children})=>html`<div class="bsect"><div class="bsh">${title}</div>${children}</div>`;function useSave(onDone){let[busy,setBusy]=d2(!1),[err,setErr]=d2(null);return{busy,err,save:async(action,args)=>{setBusy(!0),setErr(null);let r3=await listChange("budget",action,args);return setBusy(!1),r3.ok?onDone(`${r3.summary}.`):setErr(r3.error),r3.ok}}}var Err=({err})=>err&&html`<div class="bad" role="status" style="font-size:13px">That didn't work: ${err}</div>`;function CategoryTools({c:c3,month:month2,others,extras,envelope,onDone,onClose}){let[plan,setPlan]=d2(asInput(c3.budgeted)),[mode2,setMode]=d2(""),[ask2,setAsk]=d2(null),[way,setWay]=d2("to"),[other,setOther]=d2(""),[amt,setAmt]=d2(""),[from,setFrom]=d2("to-budget"),[cover,setCover]=d2(asInput(Math.max(-c3.left,0))),[notes,setNotes]=d2(extras?.notes?.[c3.id]||""),{busy,err,save}=useSave(onDone),cents=parseBalance(plan===""?"0":plan),moveCents=parseBalance(amt),coverCents=parseBalance(cover),lines=extras?.templates?.[c3.id]||[],withPool=envelope?[{id:"to-budget",name:"To budget (not planned yet)"},...others]:others,pick=withPool.find(x2=>x2.id===other),moveArgs=way==="to"?{fromCategoryId:other,toCategoryId:c3.id}:{fromCategoryId:c3.id,toCategoryId:other},toggle=k3=>setAsk(ask2===k3?null:k3),done=r3=>{setAsk(null),onDone(`${r3.summary}.`)};return html`<div class="paydetail bpanel" role="group" aria-label=${`Plan ${c3.name}`}>
    <${Err} err=${err} />
    <${Sect} title="Plan for the month">
      <form class="cedform" onSubmit=${e3=>{e3.preventDefault(),cents!==null&&cents>=0&&!busy&&save("setBudget",{month:month2,categoryId:c3.id,amount:cents})}}>
        <input class="field" value=${plan} inputmode="decimal" placeholder="0.00" aria-label=${`Planned for ${c3.name}`} style="flex:0 1 150px" onInput=${e3=>setPlan(e3.target.value)} />
        <button class="btn small pri" type="submit" disabled=${busy||cents===null||cents<0||cents===c3.budgeted}>Set plan</button>
        ${c3.budgeted!==0&&html`<button class="btn small" type="button" disabled=${busy} onClick=${()=>save("setBudget",{month:month2,categoryId:c3.id,amount:0})}>Clear</button>`}
        <button class="btn small" type="button" onClick=${()=>toggle("fill")}><${Icon} name="repeat" size=${14} />Fill from…</button>
        <button class="btn small" type="button" onClick=${()=>toggle("move")}><${Icon} name="swap" size=${14} />Move money</button>
        ${c3.left<0&&envelope&&html`<button class="btn small" type="button" onClick=${()=>toggle("cover")}><${Icon} name="shield" size=${14} />Cover overspending</button>`}
        <button class="btn small" style="margin-left:auto" type="button" onClick=${onClose}>Done</button>
      </form>
      ${cents===null&&html`<div class="bad" style="font-size:13px">That should be an amount like 250.00.</div>`}
      ${ask2==="fill"&&html`<div class="cedpanel" style="border-color:var(--line);background:var(--control)">
        <div class="cedform"><select class="field" value=${mode2} aria-label="Fill from" onChange=${e3=>setMode(e3.target.value)}>
          <option value="">Fill ${c3.name} from…</option>
          ${FILLS.map(([k3,t4])=>html`<option value=${k3}>${t4}</option>`)}<option value="year-end">Copy this plan to the rest of the year</option></select></div>
        ${mode2&&html`<${Confirm} kind="budget" title=${`Fill ${c3.name}?`} action="fillCategory" args=${{month:month2,categoryId:c3.id,mode:mode2}} button="Fill it" icon="check"
          onDone=${done} onCancel=${()=>setAsk(null)} />`}
        ${!mode2&&html`<div class="cedform"><button class="btn small" onClick=${()=>setAsk(null)}>Cancel</button></div>`}
      </div>`}
      ${ask2==="move"&&html`<div class="cedpanel" style="border-color:var(--line);background:var(--control)">
        <div class="cedform">
          <select class="field" value=${way} aria-label="Direction" onChange=${e3=>setWay(e3.target.value)} style="flex:0 1 190px">
            <option value="to">Move into ${c3.name} from</option><option value="from">Move out of ${c3.name} to</option></select>
          <select class="field" value=${other} aria-label="The other category" onChange=${e3=>setOther(e3.target.value)}>
            <option value="">Pick…</option>${withPool.map(x2=>html`<option value=${x2.id}>${x2.name}</option>`)}</select>
          <input class="field" value=${amt} inputmode="decimal" placeholder="Amount" aria-label="Amount to move" style="flex:0 1 120px" onInput=${e3=>setAmt(e3.target.value)} />
        </div>
        ${pick&&moveCents>0?html`<${Confirm} kind="budget" title=${`Move ${cash2(moveCents)}?`} action="moveBudget" args=${{month:month2,...moveArgs,amount:moveCents}}
          button="Move it" icon="swap" onDone=${done} onCancel=${()=>setAsk(null)} />`:html`<div class="cedform"><button class="btn small" onClick=${()=>setAsk(null)}>Cancel</button></div>`}
      </div>`}
      ${ask2==="cover"&&html`<div class="cedpanel" style="border-color:var(--line);background:var(--control)">
        <div class="cedform">
          <span>Cover it from</span>
          <select class="field" value=${from} aria-label="Cover from" onChange=${e3=>setFrom(e3.target.value)}>${withPool.map(x2=>html`<option value=${x2.id}>${x2.name}</option>`)}</select>
          <input class="field" value=${cover} inputmode="decimal" placeholder="Amount" aria-label="Amount to cover" style="flex:0 1 120px" onInput=${e3=>setCover(e3.target.value)} />
        </div>
        ${coverCents>0?html`<${Confirm} kind="budget" title=${`Cover ${c3.name}?`} action="coverOverspending"
          args=${{month:month2,categoryId:c3.id,fromCategoryId:from,amount:coverCents}} button="Cover it" icon="shield" onDone=${done} onCancel=${()=>setAsk(null)} />`:html`<div class="cedform"><button class="btn small" onClick=${()=>setAsk(null)}>Cancel</button></div>`}
      </div>`}
    </${Sect}>
    ${envelope&&html`<${Sect} title="Rollover">
      <label class="check" style="display:flex;align-items:center;gap:10px">
        <${Toggle} on=${c3.carryover} disabled=${busy} label=${`Roll ${c3.name} over`} onChange=${on=>save("setCarryover",{month:month2,categoryId:c3.id,carryover:on})} />
        <span>${c3.carryover?`What's left in ${c3.name} (or overspent) carries into the next month.`:`Leftover in ${c3.name} goes back to "not planned yet" next month.`}</span></label>
    </${Sect}>`}
    <${Sect} title="Notes and template">
      <textarea class="field" rows="3" maxlength="2000" aria-label=${`Notes for ${c3.name}`} style="width:100%;resize:vertical"
        placeholder=${'Notes about this category. A line like "#template 250" or "#template up to 300 per month" plans it for you when you apply templates.'}
        value=${notes} onInput=${e3=>setNotes(e3.target.value)} />
      <div class="cedform">
        <button class="btn small pri" disabled=${busy||notes.trim()===(extras?.notes?.[c3.id]||"").trim()} onClick=${()=>save("saveCategoryNote",{categoryId:c3.id,notes:notes.trim()})}>Save notes</button>
        ${lines.length>0&&html`<button class="btn small" onClick=${()=>toggle("template")}><${Icon} name="zap" size=${14} />Apply its template</button>`}
      </div>
      ${lines.length>0&&html`<${Note}>Template: ${lines.join(" · ")}</${Note}>`}
      ${ask2==="template"&&html`<${Confirm} kind="budget" title=${`Apply ${c3.name}'s template?`} action="applyCategoryTemplate" args=${{month:month2,categoryId:c3.id}}
        button="Apply it" icon="zap" onDone=${done} onCancel=${()=>setAsk(null)} />`}
    </${Sect}>
  </div>`}function PlanTools({d:d3,extras,onDone}){let[tool,setTool]=d2(null),[mode2,setMode]=d2(""),[over,setOver]=d2(!1),[hold,setHold]=d2(asInput(Math.max(d3.toBudget,0))),envelope=(extras?.type||"envelope")==="envelope",holdCents=parseBalance(hold),done=r3=>{setTool(null),onDone(`${r3.summary}.`)},cancel=()=>setTool(null),toggle=k3=>setTool(tool===k3?null:k3),hasTemplates=Object.keys(extras?.templates||{}).length>0;return html`<section class="card pad plantools">
    <div class="cardhead"><h2>Plan tools</h2><span class="aside">${envelope?"envelope budget":"tracking budget"}</span></div>
    <div class="cedform">
      <button class="btn small" onClick=${()=>toggle("fill")}><${Icon} name="repeat" size=${14} />Fill the month</button>
      <button class="btn small" onClick=${()=>toggle("templates")}><${Icon} name="zap" size=${14} />Apply templates</button>
      ${envelope&&html`<button class="btn small" onClick=${()=>toggle("hold")}><${Icon} name="lock" size=${14} />Hold for next month</button>`}
      <button class="btn small" onClick=${()=>toggle("type")}><${Icon} name="swap" size=${14} />Budget type</button>
    </div>
    ${envelope&&d3.held>0&&html`<div class="list-row"><${Icon} name="lock" size=${16} /><span>${money(d3.held)} held for next month</span></div>`}
    ${tool==="fill"&&html`<div class="cedpanel" style="border-color:var(--line);background:var(--control)">
      <div class="cedform"><select class="field" value=${mode2} aria-label="Fill every category from" onChange=${e3=>setMode(e3.target.value)}>
        <option value="">Set every category to…</option>${FILLS.map(([k3,t4])=>html`<option value=${k3}>${t4}</option>`)}</select></div>
      ${mode2?html`<${Confirm} kind="budget" title="Fill the whole month?" action="fillMonth" args=${{month:d3.month,mode:mode2}} button="Fill the month" icon="check"
        note="This replaces every category's plan for the month." onDone=${done} onCancel=${cancel} />`:html`<div class="cedform"><button class="btn small" onClick=${cancel}>Cancel</button></div>`}
    </div>`}
    ${tool==="templates"&&html`<div class="cedpanel" style="border-color:var(--line);background:var(--control)">
      ${!hasTemplates&&html`<div>No category has a template yet. Add a line like <code>#template 250</code> to a category's notes (Plan on its row).</div>`}
      ${extras?.templateProblem&&html`<div class="bad">${extras.templateProblem}</div>`}
      ${hasTemplates&&html`<label class="check" style="display:flex;align-items:center;gap:10px"><input type="checkbox" checked=${over} onChange=${e3=>setOver(e3.target.checked)} />
        Replace plans that are already set (otherwise only empty categories are filled)</label>
        <${Confirm} kind="budget" title="Apply templates for the month?" action="applyTemplates" args=${{month:d3.month,overwrite:over}} button="Apply templates"
          icon="zap" onDone=${done} onCancel=${cancel} />`}
      ${!hasTemplates&&html`<div class="cedform"><button class="btn small" onClick=${cancel}>Close</button></div>`}
    </div>`}
    ${tool==="hold"&&html`<div class="cedpanel" style="border-color:var(--line);background:var(--control)">
      <div class="cedform"><span>Hold</span>
        <input class="field" value=${hold} inputmode="decimal" aria-label="Amount to hold" style="flex:0 1 130px" onInput=${e3=>setHold(e3.target.value)} />
        <span>so it isn't planned this month.</span></div>
      ${holdCents>0?html`<${Confirm} kind="budget" title=${`Hold ${cash2(holdCents)} for next month?`} action="holdForNextMonth" args=${{month:d3.month,amount:holdCents}}
        button="Hold it" icon="lock" onDone=${done} onCancel=${cancel} />`:html`<div class="cedform"><button class="btn small" onClick=${cancel}>Cancel</button></div>`}
      ${d3.held>0&&html`<${Confirm} kind="budget" title="Release the held money?" action="resetHold" args=${{month:d3.month}} button="Release it" icon="check" onDone=${done} onCancel=${cancel} />`}
    </div>`}
    ${tool==="type"&&html`<div class="cedpanel" style="border-color:var(--line);background:var(--control)">
      <div>${envelope?"Envelope budget: every dollar gets a category before you spend it; what is left over rolls into the next month.":"Tracking budget: you plan income and spending separately and nothing has to be assigned."}</div>
      <${Confirm} kind="budget" title=${envelope?"Switch to a tracking budget?":"Switch to an envelope budget?"} action="setBudgetType"
        args=${{type:envelope?"tracking":"envelope"}} button=${envelope?"Switch to tracking":"Switch to envelope"} icon="swap" onDone=${done} onCancel=${cancel} />
    </div>`}
    ${extras?.monthNote&&html`<div class="bnote"><div class="bsh">Notes for this month</div><pre>${extras.monthNote}</pre></div>`}
  </section>`}var GROUP2="categorizeGroup",DELETES=new Set(["deleteCategory","deleteGroup"]),EVERY_TIME2=new Set([GROUP2,...DELETES]),ENDED={done:["ok","Done"],declined:["","You said no"],failed:["bad","Didn't work"]};function fromTo(r3){let b3=r3.before||{},a3=r3.after||{};return r3.action==="setBudget"&&b3.category?[[b3.category,`${money(b3.planned)} → ${money(a3.planned)}`]]:r3.action==="moveBudget"&&b3.from&&b3.to?[[b3.from.category,`${money(b3.from.planned)} → ${money(a3.from?.planned)}`],[b3.to.category,`${money(b3.to.planned)} → ${money(a3.to?.planned)}`]]:r3.action===GROUP2?[["From",b3.from||plural4(b3.count||0,"transaction","transactions")],["To",a3.category||r3.to||""]]:r3.from&&r3.to?[["Now",r3.from],["After",r3.to]]:[]}function RequestCard({r:r3,i:i3,n:n3,busy,onAnswer}){let end=ENDED[r3.status];return html`<div class="m-req" id=${`req-${r3.id}`}>
    <div class="m-reqtop"><${Pill2} tone="ai" icon="spark">${end?"Helper asked":`Helper asks${n3>1?` · ${i3+1} of ${n3}`:""}`}<//>
      <span class="faint">${end?html`<${Pill2} tone=${end[0]}>${end[1]}<//>`:ago(r3.at)}</span></div>
    <div class="m-reqwhat">${r3.summary}</div>
    <div class="m-fromto">${fromTo(r3).map(([k3,v3])=>html`<div><span>${k3}</span><b class="num">${v3}</b></div>`)}</div>
    ${r3.action===GROUP2&&r3.before?.items?.length>0&&html`<details class="m-reqlist">
      <summary>See all ${r3.before.items.length}</summary>
      ${r3.before.items.map(t4=>html`<div class="m-row" key=${t4.id}><span class="s">${shortDate(t4.date)}</span>
        <span class="grow t">${t4.payee}</span><span class="amt num">${money(t4.amount,{decimals:!0})}</span></div>`)}
    </details>`}
    <div class="m-reqwhy">${r3.why?`${r3.why} `:""}${r3.action===GROUP2||DELETES.has(r3.action)?"Only categories change, no money moves.":"Only the plan changes, no money moves."}</div>
    ${r3.status==="failed"&&r3.error&&html`<div class="coral" style="font-size:13px;margin-top:6px">${r3.error}</div>`}
    ${r3.status==="pending"&&html`<div class="m-reqbtns">
      <button class="btn pri" disabled=${!!busy} onClick=${()=>onAnswer(r3,"approve")}><${Icon} name="faceid" size=${18} />Approve</button>
      ${!EVERY_TIME2.has(r3.action)&&html`<button class="btn" disabled=${!!busy} title="Approve, and make this kind of change without asking from now on"
        onClick=${()=>onAnswer(r3,"always")}>Always</button>`}
      <button class="btn ghost" disabled=${!!busy} onClick=${()=>onAnswer(r3,"no")}>No</button>
    </div>`}
  </div>`}function RequestDeck({focus,onChanged}){let{data,reload}=useData("/api/helper/requests"),[at,setAt]=d2(0),[dx,setDx]=d2(0),[busy,setBusy]=d2(!1),[msg,setMsg]=d2(null),pending=data?.pending||[],recent=(data?.recent||[]).filter(r3=>ENDED[r3.status]),wanted=focus&&data?[...pending,...recent].find(r3=>r3.id===focus):null;A2(()=>{let i4=pending.findIndex(r3=>r3.id===focus);i4>=0&&setAt(i4),focus&&data&&document.querySelector(".m-reqs")?.scrollIntoView({block:"start"})},[!!data,focus]);let n3=pending.length,i3=Math.min(at,Math.max(0,n3-1)),swipe=useSwipeX({onMove:d3=>{n3>1&&setDx(d3)},onEnd:(d3,fast)=>{setDx(0),d3<-60||fast&&d3<0?setAt(Math.min(n3-1,i3+1)):(d3>60||fast&&d3>0)&&setAt(Math.max(0,i3-1))}});if(!data)return null;let shownEnded=wanted&&!pending.includes(wanted)?wanted:null;if(!n3&&!shownEnded&&!focus&&!msg&&!recent.length)return null;let answer=async(r3,how)=>{setBusy(!0),setMsg(null);let quiet=!1;try{let res=(await api("/api/helper/requests/answer",{id:r3.id,answer:how})).result,filed=res.filed!==void 0?`Done: filed ${plural4(res.filed,"transaction","transactions")} in your budget.`+(res.left?.length?` ${res.left.length} left alone (filed somewhere else since).`:""):null;setMsg(res.ok?{good:!0,text:res.status==="declined"?"Declined. The helper will be told.":filed||(DELETES.has(r3.action)?"Done: deleted; its transactions and planned money moved where it said.":"Done: the plan is changed.")}:{good:!1,text:`That didn't work: ${res.error}`})}catch(err){quiet=!!err.quiet,quiet||setMsg({good:!1,text:`That didn't work: ${err.message}`})}finally{setBusy(!1),quiet||(reload(),onChanged?.(),dispatchEvent(new Event(REQUESTS_CHANGED)))}};return html`<section class=${`card m-reqs${n3?" waiting":""}`} aria-label="Budget changes the helper asked for">
    ${focus&&!wanted&&html`<div class="notice"><${Icon} name="alert" size=${16} />This item is gone: it was answered a while ago or the helper took it back.</div>`}
    ${msg&&html`<div class=${`notice${msg.good?" ok":""}`} role="status">${msg.text}</div>`}
    ${shownEnded&&html`<${RequestCard} r=${shownEnded} i=${0} n=${1} busy=${busy} onAnswer=${answer} />`}
    ${n3>0&&html`<div class="m-deck" ...${swipe} style=${dx?{transform:`translateX(${dx}px)`,transition:"none"}:null}>
      <${RequestCard} key=${pending[i3].id} r=${pending[i3]} i=${i3} n=${n3} busy=${busy} onAnswer=${answer} /></div>`}
    ${n3>1&&html`<div class="m-dots">${pending.map((_3,k3)=>html`<button class=${k3===i3?"on":""} aria-label=${`Request ${k3+1} of ${n3}`}
      aria-current=${k3===i3?"true":null} onClick=${()=>setAt(k3)}></button>`)}</div>`}
    ${!n3&&!shownEnded&&html`<div class="m-sub">Nothing waiting for your OK.</div>`}
    ${recent.length>0&&html`<details class="m-recent"><summary>Answered lately (${recent.length})</summary>
      ${recent.slice(0,5).map(r3=>html`<div class="m-row"><span class="grow s">${r3.summary}</span><${Pill2} tone=${ENDED[r3.status][0]}>${ENDED[r3.status][1]}<//></div>`)}
    </details>`}
  </section>`}function BudgetScreen({params={}}){let q2=params.month?`?month=${params.month}`:"",{data:d3,error,loading,reload}=useData(`/api/budget${q2}`),x2=useData(`/api/budget/extras${q2}`),[open,setOpen]=d2(params.cat||null),[msg,setMsg]=d2(null),[rev,setRev]=d2(0);if(loading&&!d3)return html`<${Loading} />`;if(error)return html`<${Failed} error=${error} retry=${reload} />`;let ex=x2.data?.ok?x2.data:null,envelope=(ex?.type||"envelope")==="envelope",changed=text=>{setMsg({good:!0,text}),setRev(n3=>n3+1),reload(),x2.reload()},others=c3=>[...d3.groups.flatMap(g3=>g3.items),...d3.savings].filter(o3=>o3.id!==c3.id).map(o3=>({id:o3.id,name:o3.name}));return html`
    <${Title} title="Budget" sub=${html`<${MonthStep} month=${d3.month} prev=${d3.prev} next=${d3.next} screen="budget" />`}>
      <${Round} href="#/categories" label="Edit categories" icon="edit" />
    <//>
    <${RequestDeck} focus=${params.request||null} onChanged=${reload} />
    ${msg&&html`<div class=${`notice${msg.good?" ok":""}`} role="status">${msg.text}
      <button class="iconbtn" aria-label="Dismiss" onClick=${()=>setMsg(null)}><${Icon} name="x" size=${13} sw=${2} /></button></div>`}
    ${d3.hasMonth?html`
      <div class="m-totals card">
        <div><span class="s">Planned</span><b class="num">${money(d3.totals.planned)}</b></div>
        <div><span class="s">Spent</span><b class="num">${money(d3.totals.spent)}</b></div>
        <div><span class="s">${d3.totals.left<0?"Over":"Left"}</span><b class=${`num ${d3.totals.left<0?"coral":"good"}`}>${money(Math.abs(d3.totals.left))}</b></div>
        <div><span class="s">${d3.toBudget<0?"Planned too much":"Not planned yet"}</span><b class=${`num${d3.toBudget<0?" coral":""}`}>${money(Math.abs(d3.toBudget))}</b></div>
      </div>
      ${d3.groups.map(g3=>{let left=g3.planned-g3.spent;return html`<section class="card m-group" aria-label=${g3.name}>
          <h3>${g3.name}<span class="l num">${left<0?html`<b class="coral">${money(-left)} over</b> of ${money(g3.planned)}`:html`<b>${money(left)}</b> left of ${money(g3.planned)}`}</span></h3>
          ${g3.items.map(c3=>html`<div class="m-bcat">
            <button class="m-bbtn" aria-expanded=${open===c3.id} aria-label=${`Plan ${c3.name}`} onClick=${()=>setOpen(open===c3.id?null:c3.id)}>
              <div class="m-split"><span>${c3.name}</span><span class="l num">${c3.left<0?html`<b class="coral">${money(-c3.left)} over</b>`:c3.planned===0&&c3.spent===0?html`<span class="faint">not planned</span>`:html`<b>${money(c3.left)}</b> left`}</span></div>
              <${Bar} frac=${c3.pct} over=${c3.left<0} />
            </button>
            ${open===c3.id&&html`<${CategoryTools} key=${`${c3.id}:${rev}:${c3.budgeted}:${c3.left}:${c3.carryover}:${ex?.notes?.[c3.id]||""}`} c=${c3} month=${d3.month}
              others=${others(c3)} extras=${ex} envelope=${envelope} onDone=${changed} onClose=${()=>setOpen(null)} />`}
          </div>`)}
        </section>`})}
      ${!d3.groups.length&&html`<div class="card empty"><b>No categories yet</b><span>Add some with Edit categories.</span>
        <a class="btn pri" href="#/categories">Edit categories</a></div>`}
      <${PlanTools} key=${`tools:${rev}`} d=${d3} extras=${ex} onDone=${changed} />
      ${d3.tax&&html`<section class="card m-group"><h3>Taxes set aside<span class="l num"><b>${money(d3.tax.moved)}</b> of ${money(d3.tax.should)}</span></h3>
        <${Bar} frac=${d3.tax.pct} color="var(--amber)" />
        <div class=${`m-sub ${d3.tax.toMove>0?"amber":"good"}`}>${d3.tax.toMove>0?`${money(d3.tax.toMove)} more to move this month`:"Covered this month"} · ${d3.tax.accountName}
          · <a href="#/tax">Change</a></div></section>`}
      <div class="m-sub">Tap a category to plan it. The helper's requests still wait for your Face ID.</div>`:html`<div class="card empty"><b>No budget for this month</b><span>This month isn't in your budget yet.</span></div>`}`}function subsLine(s3){if(!s3)return"Repeating charges and bills";let all=[...s3.items||[],...s3.found?.items||[]],rises=all.filter(x2=>(x2.flags||[]).some(f3=>f3.kind==="price-up")).length,monthly=(s3.monthly||0)+(s3.found?.monthly||0);return[plural4(all.length,"charge","charges"),`${money(monthly)} a month`,rises?plural4(rises,"price rise","price rises"):null].filter(Boolean).join(" · ")}function More({status={},counts={},hidden:hidden2=!1,onHide}){let subs=useData("/api/subscriptions"),reports=useData("/api/reports"),settings=usePc("/v1/settings"),activity=usePc("/v1/activity",{limit:200}),today2=status.today||localToday(),newest=(reports.data?.items||[]).find(r3=>r3.isNew),s3=settings.data,on=s3?s3.permissions.filter(p3=>p3.on).length:null,grants=s3?s3.grants.filter(g3=>g3.on).length:null,todayN=activity.data?activity.data.entries.filter(e3=>localToday(new Date(e3.at))===today2).length:null,tile=(href,icon,title,sub,dot)=>html`<a class="m-tile" href=${href}>
    <${Icon} name=${icon} size=${21} />${dot&&html`<i class="navdot" aria-label=${plural4(counts.reportsNew,"new report","new reports")}></i>`}
    <b>${title}</b><span>${sub}</span></a>`,row=(section,icon,label3,value)=>html`<a class="m-setrow" href=${`#/settings?section=${section}`}>
    <${Icon} name=${icon} size=${19} /><span class="grow">${label3}</span>${value!=null&&html`<span class="v">${value}</span>`}
    <${Icon} name="chev" size=${16} cls="faint" /></a>`,link=(screen,icon,label3,value)=>html`<a class="m-setrow" href=${`#/${screen}`}>
    <${Icon} name=${icon} size=${19} /><span class="grow">${label3}</span>${value!=null&&html`<span class="v">${value}</span>`}
    <${Icon} name="chev" size=${16} cls="faint" /></a>`;return html`
    <${Title} title="More" />
    <nav class="m-tiles" aria-label="More screens">
      ${tile("#/subscriptions","repeat","Subscriptions",subsLine(subs.data))}
      ${tile(newest?`#/reports?id=${newest.id}`:"#/reports","doc","Reports",newest?`${newest.kind==="monthly"?"Monthly":"Weekly"} report ready`:"The helper's weekly and monthly reports",counts.reportsNew>0)}
      ${tile("#/summary","chart","Monthly summary",`${monthName(addMonths(today2.slice(0,7),-1))} in one look`)}
      ${tile("#/chat","spark","Chat history","Every answer, searchable")}
    </nav>
    <div class="m-sect">Your money</div>
    <nav class="card m-settings" aria-label="Your money">
      ${link("accounts","wallet","Accounts","balances, reconcile, close")}
      ${link("payees","list","Payees","rename, merge, delete")}
      ${link("rules","zap","Rules","file transactions by themselves")}
      ${link("tags","flag","Tags")}
      ${link("find","search","Find","all history, saved searches")}
      ${link("categories","pie","Categories","groups, add, hide, delete")}
      ${link("tax","chart","Tax set-aside","rate, account, saving groups")}
      ${link("banks","bank","Bank sync","status, sync now")}
      ${link("budgetfile","doc","Budget file","numbers and dates, backups")}
      ${link("import","plus","Import a bank file","on your PC")}
    </nav>
    <div class="m-sect">Settings</div>
    <nav class="card m-settings" aria-label="Settings">
      ${row("permissions","shield","Helper permissions",on==null?null:`${on} on`)}
      ${row("permissions","check","Always allowed",grants==null?null:grants?`${grants}`:"none")}
      ${row("activity","list","Helper activity",todayN==null?null:`${todayN} today`)}
      ${row("memory","brain","What the helper remembers",s3?.helper?.memory?`${s3.helper.memory.length}`:null)}
      ${row("pc","palette","Appearance",s3?`${themeOf(s3.theme).name} · on the PC`:null)}
      ${row("phones","phone","This phone",status.device?.name||null)}
      <label class="m-setrow"><${Icon} name="shield" size=${19} /><span class="grow">Hide amounts</span>
        <input type="checkbox" role="switch" aria-label="Hide amounts" checked=${hidden2} onChange=${e3=>onHide?.(e3.target.checked)} /></label>
    </nav>
    <div class="m-sub">The look (theme) and the helper's setup are set in GupBudget on your PC; here they're read only. Hide amounts covers the numbers on this phone only.</div>`}function NameForm2({value="",placeholder,button,busy,onSave,onCancel}){let[v3,setV]=d2(value);return html`<form class="cedform" onSubmit=${e3=>{e3.preventDefault(),v3.trim()&&onSave(v3.trim())}}>
    <input class="field" value=${v3} maxlength="100" placeholder=${placeholder} aria-label=${placeholder} autofocus
      onInput=${e3=>setV(e3.target.value)} onKeyDown=${e3=>e3.key==="Escape"&&onCancel()} />
    <button class="btn small pri" type="submit" disabled=${busy||!v3.trim()||v3.trim()===value}>${button}</button>
    <button class="btn small" type="button" onClick=${onCancel}>Cancel</button>
  </form>`}function Detail({id}){let{data:d3,error,loading}=useData(`/api/payee?id=${encodeURIComponent(id)}`);return loading&&!d3?html`<div class="cedpanel muted">Loading…</div>`:error||d3?.ok===!1?html`<div class="cedpanel bad">${error?.message||d3.error}</div>`:html`<div class="paydetail">
    <div><b>Transactions</b> <span class="muted">${d3.total>d3.transactions.length?`latest ${d3.transactions.length} of ${d3.total}`:plural(d3.total,"transaction")}</span></div>
    ${d3.transactions.length>0&&html`<table class="paytx"><tbody>${d3.transactions.map(t4=>html`<tr key=${t4.id}>
      <td class="muted">${shortDate(t4.date)}</td><td>${t4.accountName||""}</td><td class="muted">${t4.categoryName||"no category"}</td>
      <td class="num">${money(t4.amount,{decimals:!0})}</td></tr>`)}</tbody></table>`}
    ${d3.total===0&&html`<div class="muted">No transactions use this payee.</div>`}
    <div><b>Rules</b></div>
    ${d3.rules.length?d3.rules.map(r3=>html`<div key=${r3.id} class="payrule"><span class="muted">If</span> ${r3.when}<span class="muted">, then</span> ${r3.then}
      <a href=${`#/rules?rule=${r3.id}`} style="margin-left:8px">Open</a></div>`):html`<div class="muted">No rules mention this payee.</div>`}
    <div><b>Schedules</b></div>
    ${d3.schedules.length?d3.schedules.map(s3=>html`<div key=${s3.id}>${s3.name} <a href=${`#/subscriptions?schedule=${s3.id}`} style="margin-left:8px">Open</a></div>`):html`<div class="muted">No schedules use this payee.</div>`}
  </div>`}function Payees(){let{data:d3,error,loading,reload}=useData("/api/payees"),[q2,setQ]=d2(""),[open,setOpen]=d2(null),[edit,setEdit]=d2(null),[picked,setPicked]=d2(new Set),[merging,setMerging]=d2(!1),[keep,setKeep]=d2(""),[unused,setUnused]=d2(!1),[busy,setBusy]=d2(!1),[msg,setMsg]=d2(null);if(loading&&!d3)return html`<${Loading} />`;if(error)return html`<${Failed} error=${error} retry=${reload} />`;if(d3.ok===!1)return html`<${Failed} error=${{message:d3.error}} retry=${reload} />`;let needle=q2.trim().toLowerCase(),shown=d3.payees.filter(p3=>(!needle||p3.name.toLowerCase().includes(needle))&&(!unused||!p3.transactions&&!p3.rules&&!p3.schedules)).sort((a3,b3)=>a3.name.localeCompare(b3.name)),real=d3.payees.filter(p3=>!p3.transfer),chosen=[...picked].map(id=>d3.payees.find(p3=>p3.id===id)).filter(Boolean),done=text=>{setMsg({good:!0,text}),setEdit(null),setMerging(!1),setPicked(new Set),reload()},run=async(action,args,text)=>{setBusy(!0),setMsg(null);let r3=await listChange("payee",action,args);setBusy(!1),r3.ok?done(text||`${r3.summary}.`):setMsg({good:!1,text:`That didn't work: ${r3.error}`})},toggle=id=>setPicked(s3=>{let n3=new Set(s3);return n3.has(id)?n3.delete(id):n3.add(id),n3}),target=chosen.find(p3=>p3.id===keep)||chosen[0];return html`<div style="display:flex;flex-direction:column;gap:14px;min-width:0">
    <div class="pagehead">
      <div><h1 class="disp">Payees</h1>
        <div class="sub">${plural(real.length,"payee")}${d3.payees.length>real.length?` · ${plural(d3.payees.length-real.length,"transfer account")} not listed`:""}</div></div>
      <div class="right">
        <button class="btn small" onClick=${()=>go("rules")}><${Icon} name="zap" size=${14} />Rules</button>
        <button class="btn small pri" onClick=${()=>setEdit({kind:"add"})}><${Icon} name="plus" size=${14} sw=${2.2} />Add a payee</button>
      </div>
    </div>
    ${msg&&html`<div class=${`notice ${msg.good?"ok":""}`} role="status">${msg.text}</div>`}
    ${edit?.kind==="add"&&html`<section class="card pad"><${NameForm2} placeholder="New payee's name" button="Add" busy=${busy}
      onSave=${name=>run("createPayee",{name},`Added the payee ${name}.`)} onCancel=${()=>setEdit(null)} /></section>`}
    <div class="tabs">
      <input class="field" type="search" placeholder="Search payees" value=${q2} onInput=${e3=>setQ(e3.target.value)} aria-label="Search payees" style="width:240px" />
      <label class="check"><input type="checkbox" checked=${unused} onChange=${e3=>setUnused(e3.target.checked)} />Not used anywhere</label>
      <div class="filters">
        <button class="btn small" disabled=${chosen.length<2} onClick=${()=>{setMerging(!0),setKeep(chosen[0]?.id||"")}}>
          <${Icon} name="swap" size=${14} />Merge ${chosen.length>1?`${chosen.length} selected`:"selected"}</button>
      </div>
    </div>
    ${merging&&target&&html`<section class="card pad">
      <div class="cedform"><span>Keep this name:</span>
        <select class="field" value=${target.id} aria-label="Keep this payee" onChange=${e3=>setKeep(e3.target.value)}>
          ${chosen.map(p3=>html`<option value=${p3.id}>${p3.name}</option>`)}</select></div>
      <${Confirm} kind="payee" title=${`Merge ${plural(chosen.length-1,"payee")} into ${target.name}?`} action="mergePayees"
        args=${{targetId:target.id,mergeIds:chosen.filter(p3=>p3.id!==target.id).map(p3=>p3.id)}} button="Merge" icon="swap" busy=${busy}
        note="Their transactions, rules and schedules move to the one you keep. The others are deleted."
        onDone=${r3=>done(`${r3.summary}.`)} onCancel=${()=>setMerging(!1)} />
    </section>`}
    <section class="card txlist" style="flex:1">
      ${shown.map(p3=>html`<div key=${p3.id}>
        <div class="payrow">
          <label class="tsel"><input type="checkbox" checked=${picked.has(p3.id)} disabled=${p3.transfer} aria-label=${`Select ${p3.name}`} onChange=${()=>toggle(p3.id)} /></label>
          <button class="paymain" aria-expanded=${open===p3.id} onClick=${()=>setOpen(open===p3.id?null:p3.id)}>
            <b>${p3.name}</b>
            <span class="muted">${[p3.transactions&&plural(p3.transactions,"transaction"),p3.rules&&plural(p3.rules,"rule"),p3.schedules&&plural(p3.schedules,"schedule")].filter(Boolean).join(" · ")||"not used anywhere"}</span>
            ${p3.transfer&&html`<span class="pill dim">Transfer account</span>`}
          </button>
          ${!p3.transfer&&html`<div class="cedacts">
            <${IconBtn} name="edit" label=${`Rename ${p3.name}`} disabled=${busy} onClick=${()=>setEdit({kind:"rename",id:p3.id})} />
            <${IconBtn} name="trash" label=${`Delete ${p3.name}`} disabled=${busy} onClick=${()=>setEdit({kind:"delete",id:p3.id})} /></div>`}
        </div>
        ${edit?.kind==="rename"&&edit.id===p3.id&&html`<div class="cedpanel" style="margin-left:18px"><${NameForm2} value=${p3.name} placeholder="Payee's name" button="Rename" busy=${busy}
          onSave=${name=>run("renamePayee",{payeeId:p3.id,name},`Renamed ${p3.name} to ${name}.`)} onCancel=${()=>setEdit(null)} /></div>`}
        ${edit?.kind==="delete"&&edit.id===p3.id&&html`<${Confirm} kind="payee" title=${`Delete ${p3.name}?`} action="deletePayee" args=${{payeeId:p3.id}}
          busy=${busy} onDone=${r3=>done(`${r3.summary}.`)} onCancel=${()=>setEdit(null)} />`}
        ${open===p3.id&&html`<${Detail} id=${p3.id} />`}
      </div>`)}
      ${!shown.length&&html`<div class="empty"><b>${d3.payees.length?"Nothing matches":"No payees yet"}</b>
        <span>${d3.payees.length?"Try another search.":'Payees show up as transactions arrive, or add one with "Add a payee".'}</span></div>`}
    </section>
  </div>`}var STAGES=[["pre","Before (runs first)"],[null,"Default"],["post","After (runs last)"]],stageName=s3=>s3==="pre"?"before":s3==="post"?"after":"default",COND_FIELDS=[{field:"payee",label:"Payee",type:"id",list:"payee",not:["onBudget","offBudget"]},{field:"imported_payee",label:"Imported payee",type:"string",not:["hasTags","hasAnyTag"]},{field:"notes",label:"Notes",type:"string",not:["oneOf","notOneOf"]},{field:"category",label:"Category",type:"id",list:"category",not:["onBudget","offBudget"]},{field:"category_group",label:"Category group",type:"id",list:"category_group",not:["onBudget","offBudget"]},{field:"account",label:"Account",type:"id",list:"account"},{field:"date",label:"Date",type:"date"},{field:"amount",label:"Amount",type:"number"},{field:"cleared",label:"Cleared",type:"boolean"},{field:"reconciled",label:"Reconciled",type:"boolean"},{field:"transfer",label:"Is a transfer",type:"boolean"},{field:"parent",label:"Is a split",type:"boolean"}],TYPE_OPS={id:["is","isNot","oneOf","notOneOf","contains","doesNotContain","matches","onBudget","offBudget"],string:["is","isNot","oneOf","notOneOf","contains","doesNotContain","matches","hasTags","hasAnyTag"],number:["is","isapprox","isbetween","gt","gte","lt","lte"],date:["is","isapprox","gt","gte","lt","lte"],boolean:["is"]},OP_LABEL={is:"is",isNot:"is not",oneOf:"is one of",notOneOf:"is none of",contains:"contains",doesNotContain:"does not contain",matches:"matches (pattern)",onBudget:"is on budget",offBudget:"is off budget",hasTags:"has all the tags",hasAnyTag:"has any of the tags",isapprox:"is around",isbetween:"is between",gt:"is more than",gte:"is at least",lt:"is less than",lte:"is at most"},condField=f3=>COND_FIELDS.find(x2=>x2.field===f3)||null,opsFor=f3=>{let c3=condField(f3);return c3?TYPE_OPS[c3.type].filter(o3=>!(c3.not||[]).includes(o3)&&(o3!=="onBudget"&&o3!=="offBudget"||c3.field==="account")):[]},ACTION_OPS=[{op:"set",label:"Set a field"},{op:"append-notes",label:"Add to the end of the notes"},{op:"prepend-notes",label:"Add to the start of the notes"},{op:"set-split-amount",label:"Make a split part (when splitting)"},{op:"link-schedule",label:"Link to a schedule"},{op:"delete-transaction",label:"Delete the transaction"}],SET_FIELDS=[{field:"category",label:"Category",type:"id",list:"category"},{field:"payee",label:"Payee",type:"id",list:"payee"},{field:"notes",label:"Notes",type:"string"},{field:"cleared",label:"Cleared",type:"boolean"},{field:"account",label:"Account",type:"id",list:"account"},{field:"date",label:"Date",type:"date"},{field:"amount",label:"Amount",type:"number"}],setField=f3=>SET_FIELDS.find(x2=>x2.field===f3)||null,SPLIT_METHODS=[["fixed-amount","a fixed amount"],["fixed-percent","a percent"],["remainder","the rest"]];var MAX_PARTS=12;var dollars3=c3=>typeof c3=="number"?(c3/100).toFixed(2):"",isList=op=>op==="oneOf"||op==="notOneOf",blankValue=(field,op)=>{let info=condField(field);return op==="onBudget"||op==="offBudget"?null:info.type==="id"?isList(op)?[]:op==="is"||op==="isNot"?field==="account"?"":null:"":info.type==="string"?isList(op)?[]:"":info.type==="number"?op==="isbetween"?{num1:0,num2:0}:0:info.type==="date"?"":!0},newCondition=(payee=null)=>payee?{field:"payee",op:"is",value:payee}:{field:"payee",op:"contains",value:""},newAction=()=>({op:"set",field:"category",value:null}),blankAction=op=>op==="set"?newAction():op==="link-schedule"?{op,value:""}:op==="delete-transaction"?{op}:op==="set-split-amount"?{op,value:0,options:{method:"remainder",splitIndex:1}}:{op,value:""},blankSet=field=>{let f3=setField(field);return f3.type==="boolean"?!0:f3.type==="number"?0:f3.type==="string"||f3.type==="date"?"":null},asRule=d3=>({stage:d3.stage,conditionsOp:d3.conditionsOp,conditions:d3.conditions,actions:d3.actions});function Money({cents,onChange,label:label3}){let[t4,setT]=d2(dollars3(cents));return html`<input class="field" inputmode="decimal" style="width:110px" placeholder="0.00" value=${t4} aria-label=${label3}
    onInput=${e3=>{setT(e3.target.value),onChange(toCents(e3.target.value))}} />`}function Choose({list:list2,value,onChange,label:label3,blank,multiple,grouped}){if(multiple)return html`<select class="field" multiple size="4" aria-label=${label3}
      onChange=${e3=>onChange([...e3.target.selectedOptions].map(o3=>o3.value))}>
      ${list2.map(o3=>html`<option value=${o3.id} selected=${(value||[]).includes(o3.id)}>${o3.name}</option>`)}</select>`;let groups=grouped?[...new Set(list2.map(c3=>c3.group))]:null;return html`<select class="field" value=${value??""} aria-label=${label3} onChange=${e3=>onChange(e3.target.value===""?null:e3.target.value)}>
    ${blank!==void 0&&html`<option value="">${blank}</option>`}
    ${groups?groups.map(g3=>html`<optgroup label=${g3}>${list2.filter(c3=>c3.group===g3).map(c3=>html`<option value=${c3.id}>${c3.name}</option>`)}</optgroup>`):list2.map(o3=>html`<option value=${o3.id}>${o3.name}</option>`)}</select>`}var listFor=(name,options)=>name==="payee"?options.payees:name==="category"?options.categories:name==="category_group"?options.groups:name==="account"?options.accounts:options.schedules;function CondValue({c:c3,options,n:n3,onChange}){let info=condField(c3.field),label3=`Value of condition ${n3}`;if(c3.op==="onBudget"||c3.op==="offBudget")return null;if(info.type==="id"){if(isList(c3.op))return html`<${Choose} multiple list=${listFor(info.list,options)} value=${c3.value} label=${label3} grouped=${info.list==="category"}
      onChange=${v3=>onChange({value:v3})} />`;if(c3.op==="is"||c3.op==="isNot")return html`<${Choose} list=${listFor(info.list,options)} value=${c3.value} label=${label3} grouped=${info.list==="category"}
        blank=${info.field==="account"?"Pick one…":`No ${info.label.toLowerCase()}`} onChange=${v3=>onChange({value:v3})} />`}if(info.type==="id"||info.type==="string")return isList(c3.op)?html`<input class="field" value=${(c3.value||[]).join(", ")} placeholder="one, two, three" aria-label=${label3}
      onInput=${e3=>onChange({value:e3.target.value.split(",").map(x2=>x2.trim()).filter(Boolean)})} />`:html`<input class="field" value=${c3.value??""} maxlength="200" placeholder=${c3.op==="matches"?"pattern, like ^Shell":"text to look for"} aria-label=${label3}
      onInput=${e3=>onChange({value:e3.target.value})} />`;if(info.type==="number"){let dir=c3.options?.inflow?"in":c3.options?.outflow?"out":"";return html`<span class="amtrow">
      ${c3.op==="isbetween"?html`<${Money} cents=${c3.value?.num1} label=${`${label3}, from`} onChange=${v3=>onChange({value:{...c3.value,num1:v3}})} />
        <span class="muted">and</span><${Money} cents=${c3.value?.num2} label=${`${label3}, to`} onChange=${v3=>onChange({value:{...c3.value,num2:v3}})} />`:html`<${Money} cents=${c3.value} label=${label3} onChange=${v3=>onChange({value:v3})} />`}
      <select class="field" value=${dir} aria-label=${`Direction of condition ${n3}`}
        onChange=${e3=>onChange({options:e3.target.value==="in"?{inflow:!0}:e3.target.value==="out"?{outflow:!0}:void 0})}>
        <option value="">any direction</option><option value="in">money in</option><option value="out">money out</option></select></span>`}return info.type==="date"?c3.value&&typeof c3.value=="object"?html`<span class="muted">a repeating date (kept as it is)</span>`:html`<input class="field" type="date" value=${c3.value||""} aria-label=${label3} onInput=${e3=>onChange({value:e3.target.value})} />`:html`<select class="field" value=${c3.value?"yes":"no"} aria-label=${label3} onChange=${e3=>onChange({value:e3.target.value==="yes"})}>
    <option value="yes">yes</option><option value="no">no</option></select>`}function CondRows({conditions,options,setConditions,min=1}){let edit=(i3,patch)=>setConditions(cs=>cs.map((r3,j3)=>j3===i3?{...r3,...patch}:r3));return html`${conditions.map((c3,i3)=>html`<div class="rulerow" key=${i3}>
      <select class="field" value=${c3.field} aria-label=${`Field of condition ${i3+1}`}
        onChange=${e3=>{let field=e3.target.value,op=opsFor(field).includes(c3.op)?c3.op:opsFor(field)[0];edit(i3,{field,op,value:blankValue(field,op),options:void 0})}}>
        ${COND_FIELDS.map(f3=>html`<option value=${f3.field}>${f3.label}</option>`)}</select>
      <select class="field" value=${c3.op} aria-label=${`Operator of condition ${i3+1}`}
        onChange=${e3=>edit(i3,{op:e3.target.value,value:blankValue(c3.field,e3.target.value),options:void 0})}>
        ${opsFor(c3.field).map(o3=>html`<option value=${o3}>${OP_LABEL[o3]}</option>`)}</select>
      <${CondValue} c=${c3} n=${i3+1} options=${options} onChange=${p3=>edit(i3,p3)} />
      <${IconBtn} name="x" label=${`Remove condition ${i3+1}`} disabled=${conditions.length<=min} onClick=${()=>setConditions(cs=>cs.filter((_3,j3)=>j3!==i3))} />
    </div>`)}
    <div><button class="btn small" disabled=${conditions.length>=MAX_PARTS} onClick=${()=>setConditions(cs=>[...cs,newCondition()])}>
      <${Icon} name="plus" size=${13} sw=${2.2} />Add a condition</button></div>`}function ActionValue({a:a3,options,n:n3,onChange}){let label3=`Value of action ${n3}`;if(a3.op==="delete-transaction")return html`<span class="muted">The transaction is deleted as it arrives.</span>`;if(a3.op==="link-schedule")return html`<${Choose} list=${options.schedules} value=${a3.value} label=${label3} blank="Pick a schedule…" onChange=${v3=>onChange({value:v3})} />`;if(a3.op==="append-notes"||a3.op==="prepend-notes")return html`<input class="field" value=${a3.value??""} maxlength="500" placeholder="text to add" aria-label=${label3}
    onInput=${e3=>onChange({value:e3.target.value})} />`;if(a3.op==="set-split-amount"){let m2=a3.options?.method;return html`<span class="amtrow">
      <select class="field" value=${m2} aria-label=${`Split method of action ${n3}`} onChange=${e3=>onChange({options:{...a3.options,method:e3.target.value},value:e3.target.value==="remainder"?0:a3.value||0})}>
        ${SPLIT_METHODS.map(([k3,t4])=>html`<option value=${k3}>${t4}</option>`)}</select>
      ${m2==="fixed-amount"&&html`<${Money} cents=${a3.value} label=${label3} onChange=${v3=>onChange({value:v3})} />`}
      ${m2==="fixed-percent"&&html`<input class="field" type="number" min="1" max="100" style="width:80px" value=${a3.value||""} aria-label=${label3}
        onInput=${e3=>onChange({value:Number(e3.target.value)||0})} />`}
      <span class="muted">for part</span>
      <input class="field" type="number" min="1" max=${MAX_PARTS} style="width:70px" value=${a3.options?.splitIndex??1} aria-label=${`Split part of action ${n3}`}
        onInput=${e3=>onChange({options:{...a3.options,splitIndex:Number(e3.target.value)||1}})} /></span>`}let f3=setField(a3.field);return f3.type==="id"?html`<${Choose} list=${listFor(f3.list,options)} value=${a3.value} label=${label3} grouped=${f3.list==="category"}
    blank=${f3.field==="account"?"Pick one…":`No ${f3.label.toLowerCase()}`} onChange=${v3=>onChange({value:v3})} />`:f3.type==="boolean"?html`<select class="field" value=${a3.value?"yes":"no"} aria-label=${label3} onChange=${e3=>onChange({value:e3.target.value==="yes"})}>
    <option value="yes">yes</option><option value="no">no</option></select>`:f3.type==="number"?html`<${Money} cents=${a3.value} label=${label3} onChange=${v3=>onChange({value:v3})} />`:f3.type==="date"?html`<input class="field" type="date" value=${a3.value||""} aria-label=${label3} onInput=${e3=>onChange({value:e3.target.value})} />`:html`<input class="field" value=${a3.value??""} maxlength="500" placeholder="notes" aria-label=${label3} onInput=${e3=>onChange({value:e3.target.value})} />`}function useMatch(draft){let[m2,setM]=d2(null),key=JSON.stringify(asRule(draft));return A2(()=>{let live=!0;setM(null);let t4=setTimeout(async()=>{try{let r3=await api("/api/rules/match",asRule(draft));live&&setM(r3)}catch(err){live&&setM({ok:!1,error:err.message})}},450);return()=>{live=!1,clearTimeout(t4)}},[key]),m2}function Editor({start,options,ruleId,onSaved,onCancel}){let[d3,setD]=d2(start),[busy,setBusy]=d2(!1),[err,setErr]=d2(null),m2=useMatch(d3),edit=(key,i3,patch)=>setD(x2=>({...x2,[key]:x2[key].map((r3,j3)=>j3===i3?{...r3,...patch}:r3)})),drop=(key,i3)=>setD(x2=>({...x2,[key]:x2[key].filter((_3,j3)=>j3!==i3)})),save=async()=>{setBusy(!0),setErr(null);let r3=await listChange("rule","saveRule",{...ruleId?{ruleId}:{},...asRule(d3)});setBusy(!1),r3.ok?onSaved(r3):setErr(r3.error)};return html`<div class="card pad ruleedit" role="group" aria-label=${ruleId?"Edit rule":"New rule"}>
    <div class="cardhead"><h2>${ruleId?"Change this rule":"New rule"}</h2><span class="aside">Runs on each transaction as it arrives</span></div>
    <div class="cedform">
      <label>Run <select class="field" value=${d3.stage??""} aria-label="When it runs" onChange=${e3=>setD(x2=>({...x2,stage:e3.target.value||null}))}>
        ${STAGES.map(([k3,t4])=>html`<option value=${k3??""}>${t4}</option>`)}</select></label>
    </div>
    <div class="rulehead">If <select class="field" value=${d3.conditionsOp} aria-label="All or any" onChange=${e3=>setD(x2=>({...x2,conditionsOp:e3.target.value}))}>
      <option value="and">all of</option><option value="or">any of</option></select> these are true:</div>
    <${CondRows} conditions=${d3.conditions} options=${options} min=${1}
      setConditions=${fn=>setD(x2=>({...x2,conditions:fn(x2.conditions)}))} />
    <div class="rulehead">Then:</div>
    ${d3.actions.map((a3,i3)=>html`<div class="rulerow" key=${i3}>
      <select class="field" value=${a3.op} aria-label=${`What action ${i3+1} does`} onChange=${e3=>edit("actions",i3,{...blankAction(e3.target.value),op:e3.target.value})}>
        ${ACTION_OPS.map(o3=>html`<option value=${o3.op}>${o3.label}</option>`)}</select>
      ${a3.op==="set"&&html`<select class="field" value=${a3.field} aria-label=${`Field of action ${i3+1}`}
        onChange=${e3=>edit("actions",i3,{field:e3.target.value,value:blankSet(e3.target.value)})}>
        ${SET_FIELDS.map(f3=>html`<option value=${f3.field}>${f3.label}</option>`)}</select>`}
      <${ActionValue} a=${a3} n=${i3+1} options=${options} onChange=${p3=>edit("actions",i3,p3)} />
      <${IconBtn} name="x" label=${`Remove action ${i3+1}`} disabled=${d3.actions.length<=1} onClick=${()=>drop("actions",i3)} />
    </div>`)}
    <div><button class="btn small" disabled=${d3.actions.length>=MAX_PARTS} onClick=${()=>setD(x2=>({...x2,actions:[...x2.actions,newAction()]}))}>
      <${Icon} name="plus" size=${13} sw=${2.2} />Add an action</button></div>
    <div class="rulematch" role="status" aria-live="polite">
      ${m2?m2.ok?html`<span><b>${m2.matches}${m2.more?"+":""}</b> ${m2.matches===1&&!m2.more?"transaction":"transactions"} already in your budget ${m2.matches===1&&!m2.more?"matches":"match"}${m2.changes!==null&&m2.changes!==void 0?`; ${m2.changes} would change if you ran it on them`:""}.</span>`:html`<span class="muted">${m2.error}</span>`:html`<span class="muted">Counting what it would catch…</span>`}
    </div>
    ${err&&html`<div class="bad" role="status">That didn't work: ${err}</div>`}
    <div class="acts">
      <button class="btn small pri" disabled=${busy} onClick=${save}><${Icon} name="check" size=${14} sw=${2.2} />${ruleId?"Save changes":"Add the rule"}</button>
      <button class="btn small" onClick=${onCancel}>Cancel</button>
    </div>
  </div>`}function Rules({params}){let{data:d3,error,loading,reload}=useData("/api/rules"),[q2,setQ]=d2(""),[mode2,setMode]=d2(null),[msg,setMsg]=d2(null),[seeded2,setSeeded]=d2(!1);if(A2(()=>{!d3||seeded2||(setSeeded(!0),params?.rule&&d3.rules.some(r3=>r3.id===params.rule)?setMode({kind:"edit",id:params.rule}):params?.payee?setMode({kind:"new",payee:params.payee}):params?.new&&setMode({kind:"new"}))},[d3]),loading&&!d3)return html`<${Loading} />`;if(error)return html`<${Failed} error=${error} retry=${reload} />`;if(d3.ok===!1)return html`<${Failed} error=${{message:d3.error}} retry=${reload} />`;let order={pre:0,post:2},mine=d3.rules.filter(r3=>!r3.schedule).sort((a3,b3)=>(order[a3.stage]??1)-(order[b3.stage]??1)),hidden2=d3.rules.length-mine.length,needle=q2.trim().toLowerCase(),shown=mine.filter(r3=>!needle||`${r3.when} ${r3.then}`.toLowerCase().includes(needle)),done=text=>{setMsg({good:!0,text}),setMode(null),reload()},blank={stage:null,conditionsOp:"and",conditions:[newCondition(mode2?.payee)],actions:[newAction()]};return html`<div style="display:flex;flex-direction:column;gap:14px;min-width:0">
    <div class="pagehead">
      <div><h1 class="disp">Rules</h1>
        <div class="sub">${plural(mine.length,"rule")}${hidden2?` · ${plural(hidden2,"schedule rule")} not shown (they belong to the schedules)`:""}</div></div>
      <div class="right">
        <button class="btn small" onClick=${()=>go("payees")}><${Icon} name="list" size=${14} />Payees</button>
        <button class="btn small pri" onClick=${()=>setMode({kind:"new"})}><${Icon} name="plus" size=${14} sw=${2.2} />New rule</button>
      </div>
    </div>
    ${msg&&html`<div class=${`notice ${msg.good?"ok":""}`} role="status">${msg.text}</div>`}
    ${mode2?.kind==="new"&&html`<${Editor} start=${blank} options=${d3.options} onCancel=${()=>setMode(null)} onSaved=${r3=>done(`${r3.summary}.`)} />`}
    <div class="tabs">
      <input class="field" type="search" placeholder="Search rules" value=${q2} onInput=${e3=>setQ(e3.target.value)} aria-label="Search rules" style="width:240px" />
    </div>
    <section class="card txlist" style="flex:1">
      ${shown.map(r3=>html`<div key=${r3.id} id=${`rule-${r3.id}`}>
        <div class="payrow">
          <div class="paymain" style="cursor:default">
            <span><span class="muted">If</span> ${r3.when}<span class="muted">, then</span> ${r3.then}</span>
            <span class="pill dim">${r3.stage?`Runs ${stageName(r3.stage)}`:"Default"}</span>
          </div>
          <div class="cedacts">
            <${IconBtn} name="edit" label="Edit this rule" onClick=${()=>setMode({kind:"edit",id:r3.id})} />
            <${IconBtn} name="zap" label="Run on past transactions" onClick=${()=>setMode({kind:"apply",id:r3.id})} />
            <${IconBtn} name="trash" label="Delete this rule" onClick=${()=>setMode({kind:"delete",id:r3.id})} /></div>
        </div>
        ${mode2?.kind==="edit"&&mode2.id===r3.id&&html`<${Editor} start=${{stage:r3.stage??null,conditionsOp:r3.conditionsOp||"and",conditions:r3.conditions,actions:r3.actions}}
          ruleId=${r3.id} options=${d3.options} onCancel=${()=>setMode(null)} onSaved=${x2=>done(`${x2.summary}.`)} />`}
        ${mode2?.kind==="apply"&&mode2.id===r3.id&&html`<${Confirm} kind="rule" title="Run this rule on transactions already there?" action="applyRule"
          args=${{ruleId:r3.id}} button="Run it" icon="zap" note="Only the budget's records change; you can change any of them back by hand."
          onDone=${x2=>done(`${x2.summary}.`)} onCancel=${()=>setMode(null)} />`}
        ${mode2?.kind==="delete"&&mode2.id===r3.id&&html`<${Confirm} kind="rule" title="Delete this rule?" action="deleteRule" args=${{ruleId:r3.id}}
          note="Transactions it already changed stay as they are." onDone=${x2=>done(`${x2.summary}.`)} onCancel=${()=>setMode(null)} />`}
      </div>`)}
      ${!shown.length&&html`<div class="empty"><b>${mine.length?"Nothing matches":"No rules yet"}</b>
        <span>${mine.length?"Try another search.":'A rule files or renames transactions for you as they arrive. Add one with "New rule".'}</span></div>`}
    </section>
  </div>`}var SORTS=[["date-desc","Newest first"],["date-asc","Oldest first"],["amount-desc","Biggest first"],["amount-asc","Smallest first"]],localToday2=()=>{let d3=new Date;return`${d3.getFullYear()}-${String(d3.getMonth()+1).padStart(2,"0")}-${String(d3.getDate()).padStart(2,"0")}`},blankRow=()=>({field:"payee",op:"contains",value:""});function download2(name,data){let url=URL.createObjectURL(new Blob([data],{type:"text/csv;charset=utf-8"})),a3=document.createElement("a");a3.href=url,a3.download=name,document.body.appendChild(a3),a3.click(),a3.remove(),setTimeout(()=>URL.revokeObjectURL(url),1e3)}function Find({params}){let saved=useData("/api/filters"),[text,setText]=d2(params.text||""),[op,setOp]=d2("and"),[conds,setConds]=d2(()=>params.tag?[{field:"notes",op:"hasTags",value:`#${params.tag}`}]:[]),[account,setAccount]=d2(params.account||""),[hideRec,setHideRec]=d2(!1),[sort,setSort]=d2("date-desc"),[filterId,setFilterId]=d2(""),[res,setRes]=d2(null),[pick,setPick]=d2(null),[problem,setProblem]=d2(null),[busy,setBusy]=d2(!1),[open,setOpen]=d2(null),[selecting,setSelecting]=d2(!1),[picked,setPicked]=d2(()=>new Set),[mode2,setMode]=d2(null),[name,setName]=d2(""),[notice,setNotice]=d2(null),seq2=T2(0),body=()=>({text,conditionsOp:op,conditions:conds,account:account||null,hideReconciled:hideRec,sort}),key=JSON.stringify(body()),run=async(more=!1)=>{let mine=++seq2.current;setBusy(!0);try{let r3=await api("/api/search",{...body(),offset:more?res.items.length:0,...pick?{}:{pickers:!0}});if(mine!==seq2.current)return;if(r3.ok===!1){setProblem(r3.error),setBusy(!1);return}setProblem(null),r3.options&&setPick({accounts:r3.accounts,categories:r3.categories,payees:r3.payees,options:r3.options}),setRes(more?{...r3,items:[...res.items,...r3.items]}:r3)}catch(err){mine===seq2.current&&setProblem(err.message)}mine===seq2.current&&setBusy(!1)};if(A2(()=>{let t4=setTimeout(()=>run(!1),250);return()=>clearTimeout(t4)},[key]),saved.loading&&!saved.data)return html`<${Loading} />`;if(saved.error)return html`<${Failed} error=${saved.error} retry=${saved.reload} />`;let filters=saved.data?.filters||[],current2=filters.find(f3=>f3.id===filterId)||null,changed=!!current2&&JSON.stringify({op,conds})!==JSON.stringify({op:current2.conditionsOp,conds:current2.conditions}),options=pick?.options||{payees:[],groups:[],categories:[],accounts:[],schedules:[]},d3=pick?{accounts:pick.accounts,categories:pick.categories,payees:pick.payees,today:localToday2()}:null,reloadAll=()=>{saved.reload(),run(!1)},done=(text2,extra={})=>{text2&&setNotice({good:!0,text:text2,...extra}),setMode(null),setPicked(new Set),reloadAll()},load=id=>{setFilterId(id);let f3=filters.find(x2=>x2.id===id);f3&&(setOp(f3.conditionsOp),setConds(f3.conditions.map(c3=>({...c3}))))},clear=()=>{setFilterId(""),setText(""),setOp("and"),setConds([]),setAccount(""),setHideRec(!1),setMode(null)},exportCsv=async()=>{try{let r3=await api("/api/search/export",body());r3.ok===!1?setNotice({good:!1,text:`Couldn't make the file: ${r3.error}`}):(download2(r3.name,r3.data),setNotice({good:!0,text:`Downloaded ${plural(r3.rows,"transaction")} as ${r3.name}${r3.truncated?" (the first 50,000)":""}.`}))}catch(err){setNotice({good:!1,text:`Couldn't make the file: ${err.message}`})}},submitFilter=async how=>{let nm=how==="update"?current2.name:name.trim(),what=how==="rename"?{conditionsOp:current2.conditionsOp,conditions:current2.conditions}:{conditionsOp:op,conditions:conds},r3=await listChange("filter",how==="save"?"saveFilter":"updateFilter",{...how==="save"?{}:{filterId},name:nm,...what});if(!r3.ok){setNotice({good:!1,text:`That didn't work: ${r3.error}`});return}setNotice({good:!0,text:`${r3.summary}.`}),setMode(null);let list2=await api("/api/filters");saved.reload();let made=(list2.filters||[]).find(f3=>f3.name===nm);made&&setFilterId(made.id)},items=res?.items||[],days=[];if(sort.startsWith("date"))for(let t4 of items)days.at(-1)?.date!==t4.date&&days.push({date:t4.date,items:[]}),days.at(-1).items.push(t4);else items.length&&days.push({date:null,items});let togglePick=id=>setPicked(p3=>{let n3=new Set(p3);return n3.has(id)?n3.delete(id):n3.add(id),n3}),accountName=options.accounts.find(a3=>a3.id===account)?.name;return html`
    <div class="pagehead">
      <div><h1 class="disp">Find a transaction</h1>
        <div class="sub">${res?`${plural(res.total,"transaction")} in all of history${res.truncated?" (the newest 50,000)":""}`:"Searching…"}</div></div>
      <div class="right">
        <button class="btn small" onClick=${()=>go("tags")}><${Icon} name="list" size=${14} />Tags</button>
        <button class="btn small" onClick=${()=>go("transactions")}><${Icon} name="left" size=${14} />This month</button>
      </div>
    </div>
    ${notice&&html`<div class=${`notice ${notice.good?"ok":""}`} role="status">${notice.text}
      <button class="iconbtn" aria-label="Dismiss" onClick=${()=>setNotice(null)}><${Icon} name="x" size=${13} sw=${2} /></button></div>`}

    <section class="card pad findbox" aria-label="Filters">
      <div class="cedform">
        <input class="field" type="search" placeholder="Words in the payee, notes, category, account, date or amount" value=${text}
          aria-label="Search all transactions" style="flex:1 1 280px" onInput=${e3=>setText(e3.target.value)} />
        <select class="field" value=${account} aria-label="Account" onChange=${e3=>setAccount(e3.target.value)}>
          <option value="">All accounts</option>
          ${options.accounts.filter(a3=>!a3.closed).map(a3=>html`<option value=${a3.id}>${a3.name}</option>`)}</select>
        <select class="field" value=${sort} aria-label="Order" onChange=${e3=>setSort(e3.target.value)}>
          ${SORTS.map(([k3,t4])=>html`<option value=${k3}>${t4}</option>`)}</select>
        ${account&&html`<label class="chk"><input type="checkbox" checked=${hideRec} onChange=${e3=>setHideRec(e3.target.checked)} /> Hide reconciled</label>`}
      </div>
      ${conds.length>0&&html`<div class="rulehead">Show the ones where <select class="field" value=${op} aria-label="All or any" onChange=${e3=>setOp(e3.target.value)}>
        <option value="and">all of</option><option value="or">any of</option></select> these are true:</div>`}
      <${CondRows} conditions=${conds} options=${options} min=${0} setConditions=${setConds} />
      ${conds.length===0&&html`<div><button class="btn small" onClick=${()=>setConds([blankRow()])}>
        <${Icon} name="plus" size=${13} sw=${2.2} />Add a filter</button>
        <span class="muted" style="font-size:12.5px"> on date, amount, payee, notes, category, account, cleared, reconciled, transfers or tags</span></div>`}
      <div class="cedform" style="align-items:center">
        <select class="field" value=${filterId} aria-label="Saved filters" onChange=${e3=>e3.target.value?load(e3.target.value):setFilterId("")}>
          <option value="">${filters.length?"Saved filters…":"No saved filters yet"}</option>
          ${filters.map(f3=>html`<option value=${f3.id}>${f3.name}</option>`)}</select>
        <button class="btn small" disabled=${!conds.length} onClick=${()=>{setName(""),setMode({kind:"save"})}}>Save as…</button>
        ${current2&&html`${changed&&html`<button class="btn small pri" onClick=${()=>submitFilter("update")}>Update “${current2.name}”</button>`}
          <button class="btn small" onClick=${()=>{setName(current2.name),setMode({kind:"rename"})}}>Rename</button>
          <button class="btn small danger" onClick=${()=>setMode({kind:"delete"})}>Delete</button>`}
        <span style="flex:1"></span>
        <button class="btn small" onClick=${clear}>Clear</button>
        <button class="btn small" aria-pressed=${selecting} onClick=${()=>{setSelecting(!selecting),setPicked(new Set),setMode(null)}}>
          <${Icon} name="check" size=${14} sw=${2.2} />${selecting?"Stop selecting":"Select"}</button>
        <button class="btn small pri" disabled=${!res?.total} onClick=${exportCsv}><${Icon} name="down" size=${14} />Download CSV</button>
      </div>
      ${(mode2?.kind==="save"||mode2?.kind==="rename")&&html`<div class="cedpanel" role="group" aria-label="Name this filter">
        <b>${mode2.kind==="save"?"Save these filters":"Rename this filter"}</b>
        <div class="cedform"><input class="field" value=${name} maxlength="50" placeholder="A name, like Eating out last year" aria-label="Filter name"
          onInput=${e3=>setName(e3.target.value)} />
          <button class="btn small pri" disabled=${!name.trim()} onClick=${()=>submitFilter(mode2.kind)}>
            <${Icon} name="check" size=${14} sw=${2.2} />${mode2.kind==="save"?"Save":"Rename"}</button>
          <button class="btn small" onClick=${()=>setMode(null)}>Cancel</button></div></div>`}
      ${mode2?.kind==="delete"&&current2&&html`<${Confirm} kind="filter" title=${`Delete the saved filter “${current2.name}”?`} action="deleteFilter"
        args=${{filterId}} note="Only the saved filter goes; no transaction changes." onDone=${r3=>{setFilterId(""),done(`${r3.summary}.`)}} onCancel=${()=>setMode(null)} />`}
      ${problem&&html`<div class="muted" role="status" style="font-size:13px">${problem}</div>`}
    </section>

    ${res&&html`<div class="findsum num" role="status">
      <span>${plural(res.total,"transaction")}</span>
      ${res.totals.in>0&&html`<span class="in">In ${money(res.totals.in,{decimals:!0})}</span>`}
      ${res.totals.out<0&&html`<span>Out ${money(-res.totals.out,{decimals:!0})}</span>`}
      ${res.balance!==void 0&&html`<span>Balance${accountName?` of ${accountName}`:""}: <b>${money(res.balance,{decimals:!0})}</b></span>`}
    </div>`}

    ${selecting&&html`<div class="bulkbar" role="group" aria-label="Merge">
      <span>${picked.size} selected</span>
      <button class="btn small pri" disabled=${picked.size!==2} onClick=${()=>setMode({kind:"merge"})}>
        <${Icon} name="swap" size=${14} />Merge these two</button>
      <span class="muted" style="font-size:12.5px">Pick two with the same account and amount, like one you typed and its bank copy.</span></div>`}
    ${mode2?.kind==="merge"&&picked.size===2&&html`<${Confirm} kind="txn" title="Merge these two transactions into one?" action="mergeTransactions"
      args=${{ids:[...picked]}} button="Merge" icon="swap" note="The bank's copy is kept and gets anything the other one had that it lacks. Only the budget's records change."
      onDone=${r3=>done(`${r3.summary}.`)} onCancel=${()=>setMode(null)} />`}

    <section class="card txlist" style="flex:1" aria-busy=${busy}>
      ${days.map(day2=>html`
        ${day2.date&&html`<div class="daylabel">${dayLabel(day2.date,localToday2())}</div>`}
        ${day2.items.map(t4=>{let exp=open===t4.id&&!selecting;return html`<div key=${t4.id}>
            <div class="trwrap">
              ${selecting&&html`<label class="tsel"><input type="checkbox" checked=${picked.has(t4.id)} aria-label=${`Select ${t4.payee}`}
                onChange=${()=>togglePick(t4.id)} /></label>`}
              <button class=${`trow${exp?" exp":""}`} onClick=${()=>selecting?togglePick(t4.id):setOpen(open===t4.id?null:t4.id)}
                aria-expanded=${selecting?null:!!exp}>
                ${t4.kind==="transfer"?html`<span class="lt plain" style="width:40px;height:40px"><${Icon} name="swap" size=${18} /></span>`:html`<${Letter} name=${t4.payee} />`}
                <div class="mid">
                  <div class="tname">${t4.payee}${t4.tags.map(g3=>html`<span class="tagchip">#${g3}</span>`)}</div>
                  <div class="tcat">${[!day2.date&&t4.date,t4.category,t4.account].filter(Boolean).join(" · ")}${t4.cleared&&html` <span class="clr" title="Cleared" aria-label="Cleared"><${Icon} name="check" size=${12} sw=${2.4} /></span>`}${t4.reconciled&&html` <span class="muted" title="Reconciled"><${Icon} name="lock" size=${11} /></span>`}</div>
                </div>
                <div class=${`tamt num ${t4.kind}`}>${money(t4.amount,{decimals:!0,sign:t4.kind==="in"})}${t4.balance!==void 0&&t4.balance!==null&&html`<small class="muted" style="display:block;font-size:11.5px;font-weight:400">${money(t4.balance,{decimals:!0})}</small>`}</div>
              </button>
            </div>
            ${exp&&d3&&html`<div class="expwrap">
              ${t4.notes&&html`<div class="muted" style="font-size:13px">${t4.notes}</div>`}
              <${TxnEditor} key=${[t4.id,t4.amount,t4.date,t4.accountId,t4.notes,t4.payeeName,t4.cleared,t4.kind,t4.split].join("|")} t=${t4} d=${d3}
                onChanged=${text2=>done(text2)} onDeleted=${(_restore,payee,amount)=>done(`Deleted ${payee} (${money(amount,{decimals:!0})}).`)} />
              <div class="acts"><${DuplicateButton} t=${t4} onDone=${text2=>done(text2)} /></div>
            </div>`}
          </div>`})}`)}
      ${res&&!items.length&&html`<div class="empty"><b>Nothing matches</b>
        <span>Try fewer words, or take a filter off.</span></div>`}
      ${res?.more&&html`<div class="acts" style="justify-content:center;padding:10px"><button class="btn small" disabled=${busy} onClick=${()=>run(!0)}>
        Show more (${res.total-items.length} left)</button></div>`}
    </section>`}var FIND=new RegExp("(?<!#)#([^#\\s]+)","g");var START_TAG_COLOR="#1a9f7a";var MAX_NAME=50;function TagForm({start,button,onSave,onCancel,busy}){let[tag,setTag]=d2(start.tag||""),[color,setColor]=d2(start.color||""),[description,setDescription]=d2(start.description||"");return html`<form class="cedpanel" onSubmit=${e3=>{e3.preventDefault(),onSave({tag:tag.trim().replace(/^#/,""),color:color||null,description:description.trim()})}}>
    <div class="cedform">
      ${start.nameLocked?html`<b>#${start.tag}</b>`:html`<input class="field" value=${tag} maxlength=${MAX_NAME} placeholder="one word, like vacation" aria-label="Tag name"
        autofocus onInput=${e3=>setTag(e3.target.value)} />`}
      <label class="chk"><input type="checkbox" checked=${!!color} onChange=${e3=>setColor(e3.target.checked?START_TAG_COLOR:"")} /> Colour</label>
      ${color&&html`<input type="color" value=${color} aria-label="Tag colour" onInput=${e3=>setColor(e3.target.value)} />`}
    </div>
    <input class="field" value=${description} maxlength="200" placeholder="What is it for? (optional)" aria-label="Description" onInput=${e3=>setDescription(e3.target.value)} />
    <div class="cedform">
      <button class="btn small pri" type="submit" disabled=${busy||!tag.trim()}>${button}</button>
      <button class="btn small" type="button" onClick=${onCancel}>Cancel</button></div>
  </form>`}function Tags(){let{data:d3,error,loading,reload}=useData("/api/tags"),[mode2,setMode]=d2(null),[name,setName]=d2(""),[alsoNotes,setAlsoNotes]=d2(!1),[showHidden,setShowHidden]=d2(!1),[busy,setBusy]=d2(!1),[msg,setMsg]=d2(null);if(loading&&!d3)return html`<${Loading} />`;if(error)return html`<${Failed} error=${error} retry=${reload} />`;if(d3.ok===!1)return html`<${Failed} error=${{message:d3.error}} retry=${reload} />`;let done=text=>{setMsg({good:!0,text}),setMode(null),setAlsoNotes(!1),reload()},run=async(action,args,after)=>{setBusy(!0);let r3=await listChange("tag",action,args);setBusy(!1),r3.ok?done(after||`${r3.summary}.`):setMsg({good:!1,text:`That didn't work: ${r3.error}`})},tags=d3.tags.filter(t4=>showHidden||!t4.hidden),hiddenCount=d3.tags.length-d3.tags.filter(t4=>!t4.hidden).length;return html`<div style="display:flex;flex-direction:column;gap:14px;min-width:0">
    <div class="pagehead">
      <div><h1 class="disp">Tags</h1>
        <div class="sub">${plural(d3.tags.length,"tag")}${d3.unsaved.length?` · ${plural(d3.unsaved.length,"more #word")} in notes, not saved yet`:""}</div></div>
      <div class="right">
        <button class="btn small" onClick=${()=>go("find")}><${Icon} name="search" size=${14} />Find a transaction</button>
        <button class="btn small pri" onClick=${()=>setMode({kind:"add"})}><${Icon} name="plus" size=${14} sw=${2.2} />New tag</button>
      </div>
    </div>
    ${msg&&html`<div class=${`notice ${msg.good?"ok":""}`} role="status">${msg.text}</div>`}
    <div class="muted" style="font-size:13px">Type #word in a transaction's notes to tag it, like “#vacation”. Tags are only labels in your budget; they don't move money.</div>
    ${mode2?.kind==="add"&&html`<${TagForm} start=${{}} button="Add the tag" busy=${busy} onCancel=${()=>setMode(null)}
      onSave=${a3=>run("createTag",a3)} />`}

    <section class="card txlist" style="flex:1">
      ${tags.map(t4=>html`<div key=${t4.id} id=${`tag-${t4.id}`}>
        <div class="payrow">
          <div class="paymain" style="cursor:default">
            <span><span class="tagdot" style=${t4.color?`background:${t4.color}`:""}></span> <b>#${t4.tag}</b>
              ${t4.description&&html` <span class="muted">${t4.description}</span>`}</span>
            <span class="pill dim">${plural(t4.transactions,"transaction")}</span>
            ${t4.hidden&&html`<span class="pill dim">Hidden</span>`}
          </div>
          <div class="cedacts">
            <${IconBtn} name="search" label=${`See the transactions with #${t4.tag}`} onClick=${()=>go("find",{tag:t4.tag})} />
            <${IconBtn} name="edit" label=${`Change the colour or description of #${t4.tag}`} onClick=${()=>setMode({kind:"edit",id:t4.id})} />
            <${IconBtn} name=${t4.hidden?"eye":"eyeoff"} label=${t4.hidden?`Show #${t4.tag}`:`Hide #${t4.tag}`}
              onClick=${()=>run("updateTag",{tagId:t4.id,hidden:!t4.hidden},t4.hidden?`#${t4.tag} is shown again.`:`#${t4.tag} is hidden.`)} />
            <${IconBtn} name="swap" label=${`Rename #${t4.tag}`} onClick=${()=>{setName(t4.tag),setMode({kind:"rename",id:t4.id})}} />
            <${IconBtn} name="trash" label=${`Delete #${t4.tag}`} onClick=${()=>{setAlsoNotes(!1),setMode({kind:"delete",id:t4.id})}} /></div>
        </div>
        ${mode2?.kind==="edit"&&mode2.id===t4.id&&html`<${TagForm} start=${{...t4,nameLocked:!0}} button="Save" busy=${busy} onCancel=${()=>setMode(null)}
          onSave=${a3=>run("updateTag",{tagId:t4.id,color:a3.color,description:a3.description})} />`}
        ${mode2?.kind==="rename"&&mode2.id===t4.id&&html`<form class="cedpanel" onSubmit=${e3=>{e3.preventDefault(),run("renameTag",{tagId:t4.id,tag:name})}}>
          <div class="cedform"><input class="field" value=${name} maxlength=${MAX_NAME} aria-label="New name" autofocus onInput=${e3=>setName(e3.target.value)} />
            <button class="btn small pri" type="submit" disabled=${busy||!name.trim()||name.trim().replace(/^#/,"")===t4.tag}>Rename</button>
            <button class="btn small" type="button" onClick=${()=>setMode(null)}>Cancel</button></div>
          <div class="muted" style="font-size:12.5px">Every note that has #${t4.tag} (${plural(t4.transactions,"transaction")}) is rewritten with the new name.</div></form>`}
        ${mode2?.kind==="delete"&&mode2.id===t4.id&&html`<div>
          <label class="chk" style="margin:6px 18px"><input type="checkbox" checked=${alsoNotes} onChange=${e3=>setAlsoNotes(e3.target.checked)} />
            Also take #${t4.tag} out of the notes of ${plural(t4.transactions,"transaction")}</label>
          <${Confirm} kind="tag" title=${`Delete the tag #${t4.tag}?`} action="deleteTag" args=${{tagId:t4.id,removeFromNotes:alsoNotes}}
            note="Only the tag goes unless you ticked the box; no amount, date or category changes." onDone=${r3=>done(`${r3.summary}.`)} onCancel=${()=>setMode(null)} /></div>`}
      </div>`)}
      ${!tags.length&&html`<div class="empty"><b>No tags yet</b>
        <span>Add one with “New tag”, or type #word in a transaction's notes and save it from below.</span></div>`}
    </section>
    ${hiddenCount>0&&html`<div><button class="btn small" onClick=${()=>setShowHidden(!showHidden)}>${showHidden?"Hide":"Show"} the ${plural(hiddenCount,"hidden tag")}</button></div>`}

    ${d3.unsaved.length>0&&html`<section class="card pad" aria-label="Found in notes">
      <div class="cardhead"><h2>Found in your notes</h2><span class="aside">#words with no saved tag</span></div>
      ${d3.unsaved.slice(0,40).map(u3=>html`<div class="payrow" key=${u3.tag}>
        <div class="paymain" style="cursor:default"><span><b>#${u3.tag}</b></span><span class="pill dim">${plural(u3.transactions,"transaction")}</span></div>
        <div class="cedacts"><${IconBtn} name="search" label=${`See the transactions with #${u3.tag}`} onClick=${()=>go("find",{tag:u3.tag})} />
          <${IconBtn} name="plus" label=${`Save #${u3.tag} as a tag`} onClick=${()=>run("createTag",{tag:u3.tag})} /></div></div>`)}
      <div class="acts"><button class="btn small pri" disabled=${busy} onClick=${()=>run("discoverTags",{},`Saved ${plural(d3.unsaved.length,"tag")} found in your notes.`)}>
        <${Icon} name="spark" size=${14} />Save all ${d3.unsaved.length}</button></div>
    </section>`}
  </div>`}var Back2=({to="more",label:label3="More"})=>html`<a class="m-back" href=${`#/${to}`}><${Icon} name="left" size=${16} sw=${2.2} />${label3}</a>`,desk=(Screen,name)=>({params})=>html`<div class=${`m-desk m-desk-${name}`}><${Back2} /><${Screen} params=${params} /></div>`,AccountsScreen=desk(Accounts,"accounts"),PayeesScreen=desk(Payees,"payees"),RulesScreen=desk(Rules,"rules"),FindScreen=desk(Find,"find"),TagsScreen=desk(Tags,"tags");function CategoriesScreen(){return html`<div class="m-desk m-desk-categories"><${Back2} />
    <${CategoryEditor} onDone=${()=>{location.hash="#/budget"}} onChanged=${()=>{}} /></div>`}function TaxScreen(){let{data,error,loading,reload}=useData("/api/settings");return loading&&!data?html`<${Loading} />`:error?html`<${Failed} error=${error} retry=${reload} />`:html`<div class="m-desk m-desk-tax"><${Back2} />
    <${Title} title="Tax set-aside" />
    <section class="card pad"><${TaxEditor} d=${data} onChanged=${reload} /></section>
    <div class="m-sub">Moving the tax money between accounts is still yours to do; this only sets the rate, the account and which groups count as saving.</div></div>`}var RESULT={ok:["good","Synced"],failed:["bad","Failed"],"not-set-up":["dim","Not set up yet"],"no-linked-accounts":["dim","No accounts linked"],"signed-out":["warn","Not signed in"],"server-down":["warn","Not answering"]};function BankSyncScreen(){let{data:d3,error,loading,reload}=useData("/api/bank-sync"),[note,setNote]=d2(null),[starting,setStarting]=d2(null);if(loading&&!d3)return html`<${Loading} />`;if(error)return html`<${Failed} error=${error} retry=${reload} />`;let syncNow=async accountId=>{setStarting(accountId||"all"),setNote(null);try{let r3=await api("/api/bank-sync/run",accountId?{accountId}:{});setNote(r3.started?"Started. New transactions show up in a minute.":r3.message||"That didn't start.")}catch(err){setNote(`Couldn't start it: ${err.message}`)}finally{setStarting(null),reload()}},last=d3.last,[cls,text]=last?RESULT[last.result]||["dim",last.result]:[],canSync=!d3.running&&!starting&&d3.ready&&d3.steps?.link;return html`<div class="m-desk m-desk-banksync"><${Back2} />
    <${Title} title="Bank sync" />
    <section class="card pad">
      <div class="m-split"><b>${d3.running?"Syncing now…":last?html`<span class=${cls}>${text}</span>`:"Not synced yet"}</b>
        ${last&&html`<span class="faint">${ago(last.finishedAt)}</span>`}</div>
      ${last?.result==="ok"&&html`<div class="m-sub">${last.newTransactions} new transaction${last.newTransactions===1?"":"s"}${last.accountName?` · ${last.accountName} only`:""}</div>`}
      ${last?.message&&html`<div class="m-sub">${last.message}</div>`}
      <button class="btn pri" style="margin-top:10px" disabled=${!canSync} onClick=${()=>syncNow(null)}><${Icon} name="sync" size=${15} />${d3.running||starting==="all"?"Syncing…":"Sync now"}</button>
      ${note&&html`<div class="m-sub" role="status">${note}</div>`}
    </section>
    <div class="m-sect">Accounts</div>
    <section class="card pad">
      ${(d3.accounts||[]).map(a3=>html`<div class="m-row" key=${a3.id}>
        <span class="grow"><span class="t">${a3.name}</span>
          <span class="s">${a3.linked?`Last synced ${a3.lastSync?ago(a3.lastSync):"not yet"}${a3.trouble?` · ${a3.statusText}`:""}`:a3.offbudget?"Off budget · typed in by hand":"Typed in by hand"}</span>
          ${a3.fix&&html`<span class="s">${a3.fix}</span>`}</span>
        ${a3.linked&&html`<button class="btn small" disabled=${!canSync} aria-label=${`Sync ${a3.name}`} onClick=${()=>syncNow(a3.id)}>${starting===a3.id?"Syncing…":"Sync"}</button>`}
      </div>`)}
      ${!(d3.accounts||[]).length&&html`<div class="m-sub">${d3.ready?"No accounts yet.":"Connect to the budget to see your accounts."}</div>`}
    </section>
    <div class="m-sub">Read-only: bank sync only brings transactions in, it can't move money. The SimpleFIN token, the timer and linking an account to a bank are done in GupBudget on your PC.</div></div>`}var when=id=>{let m2=/^(\d{4}-\d{2}-\d{2})-?(?:T?(\d{2})[-:](\d{2}))?/.exec(id||"");return m2?`${m2[1]}${m2[2]?` ${m2[2]}:${m2[3]}`:""}`:String(id||"")};function BudgetFileScreen(){let{data,error,loading,reload}=useData("/api/budgetfile"),[ask2,setAsk]=d2(null),[busy,setBusy]=d2(!1),[msg,setMsg]=d2(null);if(loading&&!data)return html`<${Loading} />`;if(error)return html`<${Failed} error=${error} retry=${reload} />`;let run=async(path,body,okText)=>{setBusy(!0),setMsg(null);try{let r3=await api(path,body);r3.result?.ok?(setMsg({ok:!0,text:okText}),setAsk(null),reload()):setMsg({ok:!1,text:r3.result?.error||"That didn't work."})}catch(err){err.quiet||setMsg({ok:!1,text:`Couldn't do that: ${err.message}`})}finally{setBusy(!1)}};return html`<div class="m-desk m-desk-budgetfile"><${Back2} />
    <${Title} title="Budget file" />
    <section class="card pad"><${DisplaySettings} key=${JSON.stringify(data.display)} display=${data.display} /></section>
    <div class="m-sect">Backups on your PC</div>
    <section class="card pad">
      <div class="m-row"><span class="grow"><span class="t">Back up now</span><span class="s">Kept on your PC next to the budget</span></span>
        <button class="btn small" disabled=${busy} onClick=${()=>run("/api/budgetfile/backup",{},"Backed up.")}>Back up</button></div>
      ${data.backups.map(b3=>html`<div class="m-row" key=${b3.id}><span class="grow"><span class="t">${when(b3.id)}</span></span>
        <button class="btn small" disabled=${busy} aria-label=${`Restore the backup from ${when(b3.id)}`} onClick=${()=>setAsk({id:b3.id})}>Restore</button></div>`)}
      ${!data.backups.length&&html`<div class="m-sub">No backups yet.</div>`}
      ${ask2&&html`<${Confirm2} title=${`Restore the backup from ${when(ask2.id)}?`} yes="Yes, restore it (Face ID)" busy=${busy} onNo=${()=>setAsk(null)}
        onYes=${()=>run("/api/budgetfile/restore",{backupId:ask2.id,confirmed:!0},"Restored.")}>
        Everything you changed after that backup is gone from your PC, and other devices get the restored budget at their next sync.
        A copy of the budget as it is now is kept on your PC first.</${Confirm2}>`}
      ${msg&&html`<div class=${msg.ok?"good":"bad"} role=${msg.ok?"status":"alert"} style="font-size:13px;margin-top:10px">${msg.text}</div>`}
    </section>
    <div class="m-sub">Exporting or importing the whole budget, downloading it again and resetting sync are done in GupBudget on your PC.</div></div>`}function ImportScreen(){return html`<div class="m-desk m-desk-import"><${Back2} />
    <${Title} title="Import a bank file" />
    <section class="card empty"><b>Do this in GupBudget on your PC</b>
      <span>Bank files (OFX, QFX, CSV, QIF) are too big to send from the phone. Open GupBudget on your PC, choose
        Transactions › Import a file, and you'll see a preview before anything is added.</span></section></div>`}var TABS=[["home","Home","home"],["spending","Spending","list"],["budget","Budget","pie"],["more","More","more"]],SCREENS={home:Home,spending:Spending2,budget:BudgetScreen,more:More,subscriptions:Subscriptions,reports:Reports,summary:Summary,settings:PhoneSettings,chat:ChatHistory,accounts:AccountsScreen,payees:PayeesScreen,rules:RulesScreen,find:FindScreen,tags:TagsScreen,categories:CategoriesScreen,tax:TaxScreen,banks:BankSyncScreen,budgetfile:BudgetFileScreen,import:ImportScreen},ALIAS={overview:"home",transactions:"spending",helper:"chat"},HIDE_KEY="gb-hide-amounts";function startHidden(){let on=!1;try{on=localStorage.getItem(HIDE_KEY)==="on"}catch{}return setAmountsHidden(on),on&&(document.documentElement.dataset.hideAmounts="on"),on}function setHidden(on){setAmountsHidden(on),on?document.documentElement.dataset.hideAmounts="on":delete document.documentElement.dataset.hideAmounts;try{localStorage.setItem(HIDE_KEY,on?"on":"off")}catch{}}var tabOf=screen=>TABS.some(t4=>t4[0]===screen)?screen:"more";function parseRoute(hash){let[raw,qs]=String(hash||"").replace(/^#\/?/,"").split("?"),path=Object.hasOwn(ALIAS,raw)?ALIAS[raw]:raw,params=Object.fromEntries(new URLSearchParams(qs||""));return raw==="transactions"&&params.tab==="in"&&delete params.tab,{screen:Object.hasOwn(SCREENS,path)?path:"home",params}}function screenStatus(s3){return{status:s3?.budget?.status||"ready",budgetName:s3?.budget?.name||null,syncError:s3?.budget?.syncError||null,today:s3?.today||null,helperAvailable:!!s3?.helper?.available,actualURL:null,phone:!0,device:s3?.device||null}}function PhoneApp({status,problem,onRetry,pcInfo,mock:mock2,onUnpair}){let[route,setRoute]=d2(()=>parseRoute(location.hash)),[hidden2,setHide]=d2(startHidden),[rev,setRev]=d2(0),undo=useUndo(()=>setRev(n3=>n3+1)),hide=on=>{setHidden(on),setHide(on)};A2(()=>{let onHash=()=>setRoute(parseRoute(location.hash));return addEventListener("hashchange",onHash),()=>removeEventListener("hashchange",onHash)},[]),A2(()=>watchLaunch(),[]);let linked=route.params.request||route.params.question||route.params.section;A2(()=>{linked||scrollTo(0,0)},[route.screen,route.params.id,route.params.month,route.params.tab]);let counts=status?.counts||{},Screen=SCREENS[route.screen],tab=tabOf(route.screen),st=screenStatus(status),badge={spending:counts.questions,budget:counts.requests},tabLink=([key,label3,icon])=>html`<a href=${`#/${key}`} class=${`m-tab${tab===key?" on":""}`} aria-current=${tab===key?"page":null}>
    <span class="m-tabic"><${Icon} name=${icon} size=${24} sw=${tab===key?2.1:1.8} />
      ${badge[key]>0&&html`<i class="numdot" aria-label=${`${badge[key]} waiting`}>${badge[key]}</i>`}
      ${key==="more"&&counts.reportsNew>0&&html`<i class="navdot" aria-label=${`${counts.reportsNew} new report${counts.reportsNew===1?"":"s"}`}></i>`}</span>
    <span>${label3}</span></a>`;return html`<div class="m-app">
    ${problem&&html`<div class="notice m-problem" role="status"><${Icon} name="alert" size=${16} />
      <span>${problem.message} Trying again in ${problem.retryIn} s.</span>
      <button class="btn small" onClick=${onRetry}>Try now</button></div>`}
    ${st.syncError&&html`<div class="notice m-problem"><${Icon} name="alert" size=${16} />${st.syncError}</div>`}
    <main class="page m-page">
      <${Screen} key=${`${route.screen}${JSON.stringify(route.params)}|${rev}|${hidden2}`} params=${route.params} status=${st} counts=${counts}
        pcInfo=${pcInfo} mock=${mock2} onUnpair=${onUnpair} hidden=${hidden2} onHide=${hide} />
    </main>
    <${UndoToast} toast=${undo.toast} undo=${undo.undo} redo=${undo.redo} dismiss=${undo.dismiss} />
    <${AskSheet} />
    <nav class="m-tabs" aria-label="Screens">
      ${TABS.slice(0,2).map(tabLink)}
      <button class="m-asktab" type="button" aria-label="Ask Finance" onClick=${()=>openAsk()} onContextMenu=${e3=>e3.preventDefault()}>
        <span class="m-orb"><${Icon} name="spark" size=${28} sw=${2} /></span><span>Ask</span></button>
      ${TABS.slice(2).map(tabLink)}
    </nav>
  </div>`}var POLL_S=20,BUDGET={starting:"GupBudget on your PC is starting.","server-down":"The budget server on your PC isn't running.","signed-out":"GupBudget on your PC is signed out. Sign in there.","no-budget":"There is no budget on your PC yet. Make one there.","pick-budget":"Pick a budget in GupBudget on your PC.","needs-setup":"Finish setting up GupBudget on your PC.","needs-key":"The budget is encrypted. Type its encryption password in GupBudget on your PC.",error:"GupBudget on your PC has a problem with the budget."},plural5=(n3,one,many)=>`${n3} ${n3===1?one:many}`;function Connected({pcInfo,mock:mock2,onUnpair}){let[st,setSt]=d2({status:null,error:null,retryIn:0}),[kick,setKick]=d2(0);A2(()=>{let live=!0,timer=null,fails=0,running=!1,again=!1,ctl2=new AbortController;async function poll2(){if(!(!live||document.hidden)){if(running){again=!0;return}running=!0,clearTimeout(timer);try{let s4=await pc("/v1/status",{signal:ctl2.signal,timeoutMs:1e4});if(!live)return;fails=0,isTheme(s4?.theme)&&applyTheme(s4.theme),setSt({status:s4,error:null,retryIn:0})}catch(e3){if(!live||e3.quiet||e3.status===401||e3.reason==="locked")return;fails++,setSt(x2=>({...x2,error:e3,retryIn:Math.min(60,5*2**(fails-1))}))}finally{running=!1,live&&(timer=setTimeout(poll2,(fails?Math.min(60,5*2**(fails-1)):POLL_S)*1e3)),live&&again&&(again=!1,poll2())}}}poll2();let back=()=>{document.hidden||poll2()};document.addEventListener("visibilitychange",back),addEventListener(REQUESTS_CHANGED,poll2);let off=onNotReady(poll2);return()=>{live=!1,ctl2.abort(),clearTimeout(timer),off(),document.removeEventListener("visibilitychange",back),removeEventListener(REQUESTS_CHANGED,poll2)}},[kick]);let{status:s3,error}=st,host=pcInfo.host||"your PC";if(s3?.budget?.status==="ready"){let problem=error&&{message:error.reason==="public_refused"?error.message:`Can't reach ${host}. ${error.message}`,retryIn:st.retryIn};return html`<${PhoneApp} status=${s3} problem=${problem} onRetry=${()=>setKick(k3=>k3+1)}
      pcInfo=${pcInfo} mock=${mock2} onUnpair=${onUnpair} />`}let reachable=!!s3&&!error,counts=s3?.counts||{},waiting=[counts.requests?plural5(counts.requests,"budget change to approve or decline","budget changes to approve or decline"):null,counts.questions?plural5(counts.questions,"question in Needs a look","questions in Needs a look"):null,counts.reportsNew?plural5(counts.reportsNew,"new report","new reports"):null].filter(Boolean);return html`<main class="m-home">
    <header class="m-top">
      <span class="m-logo small"><${Icon} name="wallet" size=${20} sw=${2} /></span>
      <h1>GupBudget</h1>
      <span class=${`m-chip ${reachable?"good":s3||error?"warn":""}`}><span class="dot"></span>${host}</span>
    </header>

    <section class="m-card">
      ${!s3&&!error&&html`<div class="m-row"><span class="m-spin"></span><b>Reaching ${host}…</b></div>`}
      ${error&&html`<div class="m-row warn"><${Icon} name="alert" size=${20} /><b>${error.reason==="public_refused"?"Your PC refuses the phone right now":`Can't reach ${host}`}</b></div>
        <p>${error.message}</p>
        <p class="m-muted">Trying again in ${st.retryIn} s.</p>
        <button class="m-btn" onClick=${()=>setKick(k3=>k3+1)}><${Icon} name="sync" size=${17} />Try now</button>`}
      ${reachable&&html`<div class="m-row warn"><${Icon} name="info" size=${20} /><b>Connected, but the budget isn't open</b></div>
        <p>${BUDGET[s3.budget?.status]||BUDGET.error}</p>
        <p class="m-muted">Your screens come back by themselves once it's open.</p>`}
    </section>

    ${reachable&&waiting.length>0&&html`<section class="m-card">
      <div class="m-row"><${Icon} name="flag" size=${20} /><b>Waiting for you</b></div>
      <ul class="m-list">${waiting.map(w2=>html`<li>${w2}</li>`)}</ul>
    </section>`}

    <section class="m-card"><${ThisPhone} pcInfo=${pcInfo} device=${s3?.device} mock=${mock2} onUnpair=${onUnpair} /></section>
    ${mock2&&html`<p class="m-foot">Dev mock on this computer</p>`}
  </main>`}var show=null;function askDevConfirm(req){return new Promise(resolve=>show?show({...req,resolve}):resolve(!1))}function DevConfirmHost(){let[req,setReq]=d2(null);if(A2(()=>(show=setReq,()=>{show=null}),[]),!req)return null;let answer=ok=>{setReq(null),req.resolve(ok)};return html`<div class="m-sheet-back" onClick=${e3=>e3.target===e3.currentTarget&&answer(!1)}>
    <section class="m-card m-sheet" role="dialog" aria-label="Confirm">
      <p class="m-muted">Dev mock: in the app this is Face ID</p>
      <b>${req.title||req.key}</b>
      <p>${req.action} · ${req.key}</p>
      <div class="m-row2">
        <button class="m-btn" onClick=${()=>answer(!1)}><${Icon} name="x" size=${18} />Cancel</button>
        <button class="m-btn pri" onClick=${()=>answer(!0)}><${Icon} name="check" size=${18} />Confirm</button>
      </div>
    </section>
  </div>`}var asked=new URLSearchParams(location.search).get("theme");applyTheme(isTheme(asked)?asked:DEFAULT_THEME);var mock=startMock(location.search,askDevConfirm),setLockedClass=on=>document.documentElement.classList.toggle("locked",on);native.available&&setLockedClass(!0);function App(){let[phase,setPhase]=d2(native.available?"boot":mock?"paired":"browser"),[locked,setLocked]=d2(native.available),[lock,setLock]=d2({state:"idle"}),[pcInfo,setPcInfo]=d2(mock?{host:"mock",fqdn:"127.0.0.1 (dev mock)"}:{}),[pairing,setPairing]=d2(null),[note,setNote]=d2("");async function hello(){let r3=null;try{r3=await native.call("hello")}catch{return setLockedClass(!1),setLocked(!1),setPhase("broken")}if(r3){if(r3.locked)return showLock(r3);if(setLockedClass(!1),setLocked(!1),r3.keychain==="locked")return setPhase("keychain");if(r3.paired)return setPcInfo({host:r3.host,fqdn:r3.fqdn,pairedAt:r3.pairedAt}),setPhase(p3=>p3==="removed"?p3:"paired");setPhase("unpaired")}}function showLock(info){setLockedClass(!0),setPairing(null),setLock(info),setLocked(!0)}A2(()=>{if(!native.available)return;let offLock=native.on("lock",info=>info.locked?showLock(info):hello()),offPair=native.on("pair",e3=>{e3.state==="paired"&&(setPcInfo({host:e3.host,fqdn:e3.fqdn,pairedAt:e3.pairedAt}),setNote(""),setPhase("paired"))});return hello(),()=>{offLock(),offPair()}},[]),A2(()=>onUnauthorized(()=>setPhase(p3=>p3==="paired"?"removed":p3)),[]);async function unpair(){let r3=null;try{r3=await native.call("pair.forget")}catch{}r3&&(setPcInfo({}),setNote(r3.pcRemoved?"":"Your PC couldn't be told. Remove this phone there too: GupBudget › Settings › Phones."),setPhase("unpaired"))}let paired=info=>{setPairing(null),setNote(""),setPcInfo({host:info.host,fqdn:info.fqdn,pairedAt:info.pairedAt}),setPhase("paired")};return locked?phase==="boot"&&lock.native===void 0?null:html`<${LockScreen} info=${lock} />`:pairing?html`<${Pairing} mode=${pairing} onPaired=${paired} onClose=${()=>setPairing(null)} />`:html`
    ${phase==="paired"&&html`<${Connected} pcInfo=${pcInfo} mock=${linkMode()==="mock"} onUnpair=${unpair} />`}
    ${(phase==="unpaired"||phase==="browser")&&html`<${Start} inApp=${phase==="unpaired"} note=${note} onPair=${setPairing} />`}
    ${phase==="removed"&&html`<${Removed} onPair=${setPairing} onForget=${unpair} />`}
    ${phase==="keychain"&&html`<${KeychainLocked} onRetry=${hello} />`}
    ${phase==="broken"&&html`<${Broken} onRetry=${hello} />`}
    ${mock&&html`<${DevConfirmHost} />`}`}function Brand(){return html`<div class="m-brand">
    <span class="m-logo"><${Icon} name="wallet" size=${30} sw=${2} /></span>
    <h1>GupBudget</h1>
  </div>`}function Start({inApp,note,onPair}){return html`<main class="m-start">
    <${Brand} />
    <section class="m-card">
      <div class="m-row"><${Icon} name="lock" size=${20} /><b>Not connected to your PC yet</b></div>
      <p>GupBudget on this iPhone shows your budget from your own PC, over your private Tailscale network. Nothing
        goes through a cloud, and the phone keeps no money data of its own.</p>
      ${inApp?html`<ol class="m-steps">
          <li>On your PC, open GupBudget › Settings › Phones › <b>Pair a phone</b>.</li>
          <li>Scan the QR code it shows, or type its address and code.</li>
        </ol>
        <button class="m-btn pri wide" onClick=${()=>onPair("scan")}><${Icon} name="search" size=${18} />Scan the QR code</button>
        <button class="m-btn wide" onClick=${()=>onPair("code")}>Enter code instead</button>`:html`<p class="m-muted">Pairing needs the GupBudget iPhone app (this page is open in a browser).</p>`}
      ${note&&html`<p class="m-note">${note}</p>`}
    </section>
    <p class="m-foot">Your PC needs to be on, with Tailscale on both.</p>
  </main>`}function Removed({onPair,onForget}){return html`<main class="m-start">
    <${Brand} />
    <section class="m-card">
      <div class="m-row warn"><${Icon} name="alert" size=${20} /><b>This phone isn't paired any more</b></div>
      <p>Your PC doesn't take this phone's key: it was removed in Settings › Phones there, or it ran out. Pair it again
        to go on.</p>
      <button class="m-btn pri wide" onClick=${()=>onPair("scan")}><${Icon} name="search" size=${18} />Pair again</button>
      <button class="m-btn wide" onClick=${onForget}>Forget this PC</button>
    </section>
  </main>`}function KeychainLocked({onRetry}){return html`<main class="m-start">
    <${Brand} />
    <section class="m-card">
      <div class="m-row warn"><${Icon} name="lock" size=${20} /><b>Can't read the pairing right now</b></div>
      <p>The iPhone keeps the PC's key locked while the phone is locked. Unlock the phone, then try again.</p>
      <button class="m-btn wide" onClick=${onRetry}>Try again</button>
    </section>
  </main>`}function Broken({onRetry}){return html`<main class="m-start">
    <${Brand} />
    <section class="m-card">
      <div class="m-row warn"><${Icon} name="alert" size=${20} /><b>The app can't reach its own link to your PC</b></div>
      <p>This build of GupBudget doesn't let its page talk to the iPhone side. Install a newer build.</p>
      <button class="m-btn wide" onClick=${onRetry}>Try again</button>
    </section>
  </main>`}K(html`<${App} />`,document.getElementById("app"));})();
