(()=>{var n,t,i,r,u,f,o,e,l,c,a,s,h,p,v={},y=[],w=/^m(i|n|o|s|text|space)$/,d=Array.isArray,_=y.slice,g=Object.assign;function b(n3){n3&&n3.parentNode&&n3.remove()}function k(n3,t4,i3){var r3,u3,f3,o3={},e3=arguments.length;for(f3 in t4)f3=="key"?r3=t4[f3]:f3=="ref"&&typeof n3!="function"?u3=t4[f3]:o3[f3]=t4[f3];return e3>2&&(o3.children=e3>3?_.call(arguments,2):i3),M(n3,o3,r3,u3,null)}function M(i3,r3,u3,f3,o3){var e3={type:i3,props:r3,key:u3,ref:f3,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o3||++t,__i:-1,__u:0};return!o3&&n.vnode&&n.vnode(e3),e3}function x(n3){return n3.children}function S(n3,t4){this.props=n3,this.context=t4,this.__g=0}function C(n3,t4){if(t4==null)return n3.__?C(n3.__,n3.__i+1):null;for(var i3;t4<n3.__k.length;t4++)if((i3=n3.__k[t4])&&i3.__e)return i3.__e;return typeof n3.type!="function"||n3.props.__P?null:C(n3)}function j(n3){if((n3=n3.__)&&n3.__c&&!n3.props.__P)return n3.__e=null,n3.__k.some(function(t4){return t4&&(n3.__e=t4.__e)}),j(n3)}function L(t4){(8&t4.__g||!(t4.__g|=8)||!r.push(t4)||f++)&&u==n.debounceRendering||((u=n.debounceRendering)||queueMicrotask)(H)}function H(){var t4,i3,u3,e3,l3,c3,a3,s3,h3;try{for(i3=1;r.length;)r.length>i3&&r.sort(o),t4=r.shift(),i3=r.length,8&t4.__g&&(e3=void 0,l3=void 0,c3=(l3=(u3=t4).__v).__e,a3=[],s3=[],(h3=u3.__P)&&((e3=g({constructor:void 0},l3)).__v=l3.__v+1,n.vnode&&n.vnode(e3),z(h3,e3,l3,u3.__n,h3.namespaceURI,32&l3.__u?[c3]:null,a3,c3||C(l3),32&l3.__u,s3),e3.__v=l3.__v,e3.__.__k[e3.__i]=e3,D(a3,e3,s3),l3.__=l3.__e=null,e3.__e!=c3&&j(e3)))}finally{r.length=f=0}}function I(n3,t4,i3,r3,u3,f3,o3,e3,l3,c3,a3){var s3,h3,p3,w2,d3,_3,g3=r3.__k||y,b3=t4.length;for(l3=A(i3,t4,g3,l3,b3),s3=0;s3<b3;s3++)(p3=i3.__k[s3])!=null&&(h3=~p3.__i&&g3[p3.__i]||v,p3.__i=s3,_3=z(n3,p3,h3,u3,f3,o3,e3,l3,c3,a3),w2=p3.__e,p3.ref&&(h3.ref!=p3.ref||8&h3.__u)&&(h3.ref!=p3.ref&&h3.ref&&F(h3.ref,null,p3),a3.push(p3.ref,p3.__c||w2,p3)),d3=d3||w2,4&p3.__u?(l3=O(p3,l3,n3,!h3.__v),h3.__e&&(h3.__e=null)):typeof p3.type=="function"&&_3!==void 0?l3=_3:w2&&(l3=w2.nextSibling),p3.__u&=-7);return i3.__e=d3,l3}function A(n3,t4,i3,r3,u3){var f3,o3,e3,l3,c3,a3,s3,h3,p3,v3,y3=i3.length,w2=y3,_3=0,g3=!1,b3=n3.__k=Array(u3);for(f3=0;f3<u3;f3++)(o3=t4[f3])!=null&&typeof o3!="boolean"&&typeof o3!="function"?(typeof o3!="object"||o3.constructor==String?o3=b3[f3]=M(null,o3):d(o3)?o3=b3[f3]=M(x,{children:o3}):o3.constructor===void 0&&o3.__b?o3=b3[f3]=M(o3.type,o3.props,o3.key,o3.ref,o3.__v):b3[f3]=o3,l3=f3+_3,o3.__=n3,o3.__b=n3.__b+1,e3=null,~(c3=o3.__i=T(o3,i3,l3,w2))&&(w2--,(e3=i3[c3])&&(e3.__u|=2)),e3&&e3.__v?(o3.__u|=2,c3==l3-1?_3--:c3==l3+1?_3++:c3!=l3&&(c3>l3?_3--:_3++,g3=!0)):(~c3||(u3>y3?_3--:u3<y3&&_3++),typeof o3.type!="function"&&(o3.__u|=4))):b3[f3]=null;if(g3){for(a3=[],s3=[],f3=0;f3<u3;f3++)if((o3=b3[f3])&&2&o3.__u){for(h3=0,p3=a3.length;h3<p3;)a3[v3=h3+p3>>1]<o3.__i?h3=v3+1:p3=v3;a3[h3]=o3.__i,s3[f3]=h3+1}for(_3=a3.length;f3--;)s3[f3]&&(s3[f3]==_3?_3--:b3[f3].__u|=4)}if(w2)for(f3=0;f3<y3;f3++)!(e3=i3[f3])||2&e3.__u||(e3.__e==r3&&(r3=C(e3)),G(e3,e3));return r3}function O(n3,t4,i3,r3){var u3,f3;if(typeof n3.type=="function"){if(n3.props.__P)return t4;if(u3=n3.__k)for(f3=0;f3<u3.length;f3++)u3[f3]&&(u3[f3].__=n3,t4=O(u3[f3],t4,i3,!1));return t4}for(t4&&!t4.parentNode&&(t4=C(n3))&&!t4.parentNode&&(t4=null),n3.__e!=t4&&(!r3&&i3.moveBefore&&n3.__e.parentNode?i3.moveBefore(n3.__e,t4):i3.insertBefore(n3.__e,t4||null)),t4=n3.__e;(t4=t4&&t4.nextSibling)&&t4.nodeType==8;);return t4}function T(n3,t4,i3,r3){var u3,f3,o3,e3=n3.key,l3=n3.type,c3=t4[i3],a3=c3&&!(2&c3.__u);if(c3===null&&e3==null||a3&&e3==c3.key&&l3==c3.type)return i3;if(r3>(a3?1:0)){for(u3=i3-1,f3=i3+1;u3>=0||f3<t4.length;)if((c3=t4[o3=u3>=0?u3--:f3++])&&!(2&c3.__u)&&e3==c3.key&&l3==c3.type)return o3}return-1}function q(n3,t4,i3){i3==null&&(i3=""),t4[0]=="-"?n3.setProperty(t4,i3):n3[t4]=i3}function N(n3,t4,i3,r3,u3){var f3;n:if(t4=="style")if(typeof i3=="string")n3.style.cssText=i3;else{if(typeof r3=="string"&&(n3.style.cssText=r3=""),r3)for(t4 in r3)i3&&t4 in i3||q(n3.style,t4,"");if(i3)for(t4 in i3)r3&&i3[t4]==r3[t4]||q(n3.style,t4,i3[t4])}else if(t4[0]=="o"&&t4[1]=="n")f3=t4!=(t4=t4.replace(c,"$1")),(t4=t4.slice(2))[0]<"a"&&(t4=t4.toLowerCase()),(n3.__e||(n3.__e={}))[t4+f3]=i3,i3?r3?i3[l]=r3[l]:(i3[l]=a,n3.addEventListener(t4,f3?h:s,f3)):n3.removeEventListener(t4,f3?h:s,f3);else{if(u3=="http://www.w3.org/2000/svg")t4=t4.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t4!="width"&&t4!="height"&&t4!="href"&&t4!="list"&&t4!="form"&&t4!="tabIndex"&&t4!="download"&&t4!="rowSpan"&&t4!="colSpan"&&t4!="role"&&t4!="popover"&&t4 in n3)try{n3[t4]=i3??"";break n}catch{}typeof i3=="function"||(i3==null||i3===!1&&t4[4]!="-"?n3.removeAttribute(t4):n3.setAttribute(t4,t4=="popover"&&i3==1?"":i3))}}function V(t4){return function(i3){if(this.__e){var r3=this.__e[i3.type+t4];if(i3[e]==null)i3[e]=a++;else if(i3[e]<r3[l])return;return r3(n.event?n.event(i3):i3)}}}function z(t4,i3,r3,u3,f3,o3,e3,l3,c3,a3){var s3,h3,p3,v3,w2,_3,k3,m2,M2,$,j3,L2,H2,A3,O2,P2,T3,q2,N2,V2,z3=i3.type;if(i3.constructor!==void 0)return null;if(128&r3.__u&&(c3=32&r3.__u,s3=r3.__c.__z)){if(i3.__u|=c3,h3=o3=[],s3.nodeType==8)for(p3=1,v3=s3.nextSibling;v3;v3=v3.nextSibling){if(v3.nodeType==8){if(v3.data.startsWith("$s"))p3++;else if(v3.data.startsWith("/$s")&&!--p3)break}o3.push(v3)}else o3.push(s3);l3=o3[0]}(s3=n.__b)&&s3(i3);n:if(typeof z3=="function"){w2=e3.length;try{if($=i3.props,j3=(s3=z3.prototype)&&s3.render,L2=(s3=z3.contextType)&&u3[s3.__c],H2=s3?L2?L2.props.value:s3.__:u3,r3.__c?2&(_3=i3.__c=r3.__c).__g&&(_3.__g|=1):(j3?i3.__c=_3=new z3($,H2):(i3.__c=_3=new S($,H2),_3.constructor=z3,_3.render=J),L2&&L2.sub(_3),_3.state||(_3.state={}),_3.__n=u3,_3.__g|=8,_3.__h=[],_3.__k=[]),j3&&(_3.__s||(_3.__s=_3.state),z3.getDerivedStateFromProps&&(_3.__s==_3.state&&(_3.__s=g({},_3.__s)),g(_3.__s,z3.getDerivedStateFromProps($,_3.__s)))),k3=_3.props,m2=_3.state,_3.__v=i3,r3.__c){if(j3&&!z3.getDerivedStateFromProps&&$!==k3&&_3.componentWillReceiveProps&&_3.componentWillReceiveProps($,H2),i3.__v==r3.__v&&!(8&_3.__g)||!(4&_3.__g)&&_3.shouldComponentUpdate&&_3.shouldComponentUpdate($,_3.__s,H2)===!1){i3.__v!=r3.__v&&(_3.props=$,_3.state=_3.__s,_3.__g&=-9),i3.__e=r3.__e,i3.__k=r3.__k,i3.__k.some(function(n3){n3&&(n3.__=i3)}),y.push.apply(_3.__h,_3.__k),_3.__k=[],_3.__h.length&&e3.push(_3),l3=C(r3);break n}_3.componentWillUpdate&&_3.componentWillUpdate($,_3.__s,H2),j3&&_3.componentDidUpdate&&_3.__h.push(function(){_3.componentDidUpdate(k3,m2,M2)})}else j3&&!z3.getDerivedStateFromProps&&_3.componentWillMount&&_3.componentWillMount(),j3&&_3.componentDidMount&&_3.__h.push(_3.componentDidMount);if(_3.context=H2,_3.props=$,_3.__P=t4,_3.__g&=-5,A3=n.__r,O2=0,j3)_3.state=_3.__s,_3.__g&=-9,A3&&A3(i3),s3=_3.render(_3.props,_3.state,_3.context),y.push.apply(_3.__h,_3.__k),_3.__k=[];else do _3.__g&=-9,A3&&A3(i3),s3=_3.render(_3.props,_3.state,_3.context),_3.state=_3.__s;while(8&_3.__g&&++O2<25);_3.state=_3.__s,_3.getChildContext&&(u3=g({},u3,_3.getChildContext())),j3&&r3.__c&&_3.getSnapshotBeforeUpdate&&(M2=_3.getSnapshotBeforeUpdate(k3,m2)),P2=s3&&s3.type===x&&s3.key==null?s3.props.children:s3,$.__P&&(s3=l3,f3=(t4=$.__P).namespaceURI,c3=o3=null,r3.props&&r3.props.__P!=t4&&(r3.__k.some(function(n3){n3&&G(n3,n3)}),r3.__k=null),l3=r3.__k?C(r3,0):null),l3=I(t4,d(P2)?P2:[P2],i3,r3,u3,f3,o3,e3,l3,c3,a3),$.__P&&(i3.__e=null,l3=s3),i3.__u&=-161,128&r3.__u&&(_3.__z=null),h3&&h3.some(b),_3.__h.length&&e3.push(_3),1&_3.__g&&(_3.__g&=-4)}catch(t5){if(e3.length=w2,i3.__v=null,c3||o3)if(t5.then){if(T3=0,i3.__u|=c3?160:128,o3){for(N2=0;N2<o3.length;N2++)if(V2=o3[N2])if(V2.nodeType==8){if(o3[N2]=null,V2.data.startsWith("$s"))T3++||(q2=V2);else if(V2.data.startsWith("/$s")&&!--T3){l3=V2;break}}else T3&&(o3[N2]=null)}if(!q2){for(;l3&&l3.nodeType==8&&l3.nextSibling;)l3=l3.nextSibling;o3&&(o3[o3.indexOf(l3)]=null),q2=l3}i3.__c.__z||(i3.__c.__z=q2),i3.__e=l3}else o3&&o3.some(b);else i3.__e=r3.__e;i3.__k||(i3.__k=r3.__k||[]),t5.then||B(i3),n.__e(t5,i3,r3)}}else l3=i3.__e=E(r3.__e,i3,r3,u3,f3,o3,e3,c3,a3,t4);return(s3=n.diffed)&&s3(i3),128&i3.__u?void 0:l3}function B(n3){n3&&(n3.__c&&(n3.__c.__g|=4),n3.__k&&n3.__k.some(B))}function D(t4,i3,r3){for(var u3=0;u3<r3.length;)F(r3[u3++],r3[u3++],r3[u3++]);n.__c&&n.__c(i3,t4),t4.some(function(i4){try{t4=i4.__h,i4.__h=[],t4.some(function(n3){n3.call(i4)})}catch(t5){n.__e(t5,i4.__v)}})}function E(t4,i3,r3,u3,f3,o3,e3,l3,c3,a3){var s3,h3,p3,y3,g3,k3,m2,M2,$,x2=r3.props||v,S2=i3.props,j3=i3.type;if(j3=="svg"?f3="http://www.w3.org/2000/svg":j3=="math"?f3="http://www.w3.org/1998/Math/MathML":f3||(f3="http://www.w3.org/1999/xhtml"),o3){for(s3=0;s3<o3.length;s3++)if((g3=o3[s3])&&(j3?g3.localName==j3:g3.nodeType==3)){t4=g3,o3[s3]=null;break}}if(!t4){if(M2=a3.ownerDocument||document,!j3)return M2.createTextNode(S2);t4=M2.createElementNS(f3,j3,S2.is&&S2),l3&&(n.__m&&n.__m(i3,o3),l3=!1),o3=null}if(j3){if(a3=j3=="template"?t4.content:t4,o3=j3=="textarea"&&S2.defaultValue!=null?null:o3&&_.call(a3.childNodes),!l3&&o3)for(x2={},s3=0;s3<t4.attributes.length;s3++)x2[(g3=t4.attributes[s3]).name]=g3.value;for(s3 in x2)g3=x2[s3],s3=="dangerouslySetInnerHTML"?p3=g3:s3=="children"||s3 in S2||s3=="value"&&"defaultValue"in S2||s3=="checked"&&"defaultChecked"in S2||N(t4,s3,null,g3,f3);for(s3 in $=1&r3.__u,S2)g3=S2[s3],s3=="children"?y3=g3:s3=="dangerouslySetInnerHTML"?h3=g3:s3=="value"?k3=g3:s3=="checked"?m2=g3:l3&&typeof g3!="function"||!(x2[s3]!==g3||$&&g3!=null)||N(t4,s3,g3,x2[s3],f3);h3?(l3||p3&&(h3.__html==p3.__html||h3.__html==t4.innerHTML)||(t4.innerHTML=h3.__html),i3.__k=[]):(p3&&(t4.textContent=""),(j3=="foreignObject"||f3=="http://www.w3.org/1998/Math/MathML"&&w.test(j3))&&(f3="http://www.w3.org/1999/xhtml"),I(a3,d(y3)?y3:[y3],i3,r3,u3,f3,o3,e3,o3?o3[0]:r3.__k&&C(r3,0),l3,c3),o3&&o3.some(b)),l3&&j3!="textarea"||(s3="value",j3=="progress"&&k3==null?t4.removeAttribute(s3):k3==null||k3===t4[s3]&&(j3!="progress"||k3)||N(t4,s3,k3,x2[s3],f3),s3="checked",m2!=null&&m2!=t4[s3]&&N(t4,s3,m2,x2[s3],f3))}else x2===S2||l3&&t4.data==S2||(t4.data=S2);return t4}function F(t4,i3,r3){try{typeof t4=="function"?(typeof t4.__u=="function"&&t4.__u(),(typeof t4.__u!="function"||i3)&&(t4.__u=t4(i3))):t4.current=i3}catch(t5){n.__e(t5,r3)}}function G(t4,i3,r3){var u3,f3;if(n.unmount&&n.unmount(t4),!(u3=t4.ref)||u3.current&&u3.current!=t4.__e||F(u3,null,i3),u3=t4.__c){if(u3.componentWillUnmount)try{u3.componentWillUnmount()}catch(t5){n.__e(t5,i3)}u3.__P=u3.__n=null}if(u3=t4.__k)for(f3=0;f3<u3.length;f3++)u3[f3]&&G(u3[f3],i3,typeof t4.type!="function"||r3&&!t4.props.__P);(u3=t4.__e)&&(r3||b(u3),u3.__e&&(u3.__e=null)),t4.__e=t4.__c=t4.__=null}function J(n3,t4,i3){return this.constructor(n3,i3)}function K(t4,i3){var r3,u3,f3,o3;n.__&&n.__(t4,i3),i3.nodeType==9&&(i3=i3.documentElement),u3=(r3=t4&&32&t4.__u)?null:i3.__k,i3.__k=M(x,{children:[t4]}),f3=[],o3=[],z(i3,i3.__k,u3||v,v,i3.namespaceURI,u3?null:i3.firstChild?_.call(i3.childNodes):null,f3,u3?u3.__e:i3.firstChild,r3,o3),D(f3,i3.__k,o3),i3.__k.props.children=null}n={__e:function(n3,t4,i3,r3){for(var u3,o3,e3;t4=t4.__;)if((u3=t4.__c)&&!(1&u3.__g)){u3.__g|=4;try{if((o3=u3.constructor)&&o3.getDerivedStateFromError&&(u3.setState(o3.getDerivedStateFromError(n3)),e3=8&u3.__g),u3.componentDidCatch&&(u3.componentDidCatch(n3,r3||{}),e3=8&u3.__g),e3)return void(u3.__g|=2)}catch(t5){n3=t5,e3=0}}throw f=0,n3}},t=0,i=function(n3){return n3!=null&&n3.constructor===void 0},S.prototype.setState=function(n3,t4){var i3=this.__s;i3&&i3!=this.state||(i3=this.__s=g({},this.state)),typeof n3=="function"&&(n3=n3(g({},i3),this.props)),n3&&(g(i3,n3),this.__v&&(t4&&this.__k.push(t4),L(this)))},S.prototype.forceUpdate=function(n3){this.__v&&(this.__g|=4,n3&&this.__h.push(n3),L(this))},S.prototype.render=x,r=[],f=0,o=function(n3,t4){return n3.__v.__b-t4.__v.__b},e=Symbol(),l=Symbol(),c=/(PointerCapture)$|Capture$/i,a=0,s=V(!1),h=V(!0),p=0;var t2,r2,u2,i2,o2=Object.is,f2=0,c2=[],e2=[],a2=n,v2=a2.__b,l2=a2.__r,m=a2.diffed,s2=a2.__c,h2=a2.unmount,p2=a2.__;function y2(n3,t4){a2.__h&&a2.__h(r2,n3,f2||t4),f2=0;var u3=r2.__H||(r2.__H={__:[],__h:[]});return n3>=u3.__.length&&u3.__.push({}),u3.__[n3]}function d2(n3){return f2=1,_2(G2,n3)}function _2(n3,u3,i3){var f3=y2(t2++,2);if(f3.t=n3,!f3.__c&&(f3.__=[i3?i3(u3):G2(void 0,u3),function(n4){var t4=f3.__N?f3.__N[0]:f3.__[0],r3=f3.t(t4,n4);o2(t4,r3)||(f3.__N=[r3,f3.__[1]],f3.__c.setState({}))}],f3.__c=r2,!r2.__f)){r2.__f=!0;var c3=r2.shouldComponentUpdate;r2.shouldComponentUpdate=function(n4,t4,r3){var u4=this.__H;if(!u4)return!0;var i4=!1,f4=this.props!=n4;if(u4.__.some(function(n5){n5.__N&&(i4=!0,o2(n5.__[0],n5.__N[0])||(f4=!0))}),c3){var e3=c3.call(this,n4,t4,r3);return i4?e3||f4:e3}return!i4||f4}}return f3.__}function A2(n3,u3){var i3=y2(t2++,3);!a2.__s&&E2(i3.__H,u3)&&(i3.__P=!0,i3.__=n3,i3.u=u3,r2.__H.__h.push(i3))}function T2(n3){return f2=5,b2(function(){return{current:n3}},[])}function b2(n3,r3){var u3=y2(t2++,7);return E2(u3.__H,r3)&&(u3.__=n3(),u3.__H=r3),u3.__}function j2(n3,t4){return f2=8,b2(function(){return n3},t4)}function g2(){var n3;do{for(;n3=e2.shift();)try{C2(n3)}catch(t5){a2.__e(t5,{__:(n3=n3.__P)&&n3.__v})}for(;n3=c2.shift();){var t4=n3.__H;if(n3.__P&&t4)try{t4.__h.some(C2),t4.__h.some(D2),t4.__h=[]}catch(r3){t4.__h=[],a2.__e(r3,n3.__v)}}}while(e2.length)}a2.__b=function(n3){r2=null,v2&&v2(n3)},a2.__=function(n3,t4){n3&&t4.__k&&t4.__k.__m&&(n3.__m=t4.__k.__m),p2&&p2(n3,t4)},a2.__r=function(n3){l2&&l2(n3),t2=0;var i3=(r2=n3.__c).__H;i3&&(u2==r2?r2.__h=[]:(i3.__h.some(C2),i3.__h.some(D2),t2=0),i3.__h=[],i3.__.some(function(n4){n4.__N&&(n4.__=n4.__N),n4.u=n4.__N=void 0})),u2=r2},a2.diffed=function(n3){m&&m(n3);var t4=n3.__c;t4&&t4.__H&&(t4.__H.__h.length&&B2(c2.push(t4)),t4.__H.__.some(function(n4){n4.u&&(n4.__H=n4.u)})),u2=r2=null},a2.__c=function(n3,t4){t4.some(function(n4){try{n4.__h.some(C2),n4.__h=n4.__h.filter(function(n5){return!n5.__||D2(n5)})}catch(r3){t4.some(function(n5){n5.__h&&(n5.__h=[])}),t4=[],a2.__e(r3,n4.__v)}}),s2&&s2(n3,t4)},a2.unmount=function(n3){h2&&h2(n3);var t4,r3,u3=n3.__c;u3&&u3.__H&&(u3.__H.__.some(function(u4){try{if(u4.__P&&u4.__c){if(r3===void 0){for(r3=n3.__;r3&&(!r3.__c||!r3.__c.__P);)r3=r3.__;r3=r3&&r3.__c}u4.__P=r3,B2(e2.push(u4))}else C2(u4)}catch(n4){t4=n4}}),u3.__H=void 0,t4&&a2.__e(t4,u3.__v))};var k2=typeof requestAnimationFrame=="function";function z2(n3){var t4,r3=function(){clearTimeout(u3),k2&&cancelAnimationFrame(t4),setTimeout(n3)},u3=setTimeout(r3,35);k2&&(t4=requestAnimationFrame(r3))}function B2(n3){n3!=1&&i2==a2.requestAnimationFrame||((i2=a2.requestAnimationFrame)||z2)(g2)}function C2(n3){var t4=r2,u3=n3.__c;typeof u3=="function"&&(n3.__c=void 0,u3()),r2=t4}function D2(n3){var t4=r2;n3.__c=n3.__(),r2=t4}function E2(n3,t4){return!n3||n3.length!=t4.length||t4.some(function(t5,r3){return!o2(t5,n3[r3])})}function G2(n3,t4){return typeof t4=="function"?t4(n3):t4}var n2=function(t4,s3,r3,e3){var u3;s3[0]=0;for(var h3=1;h3<s3.length;h3++){var p3=s3[h3++],a3=s3[h3]?(s3[0]|=p3?1:2,r3[s3[h3++]]):s3[++h3];p3===3?e3[0]=a3:p3===4?e3[1]=Object.assign(e3[1]||{},a3):p3===5?(e3[1]=e3[1]||{})[s3[++h3]]=a3:p3===6?e3[1][s3[++h3]]+=a3+"":p3?(u3=t4.apply(a3,n2(t4,a3,r3,["",null])),e3.push(u3),a3[0]?s3[0]|=2:(s3[h3-2]=0,s3[h3]=u3)):e3.push(a3)}return e3},t3=new Map;function htm_module_default(s3){var r3=t3.get(this);return r3||(r3=new Map,t3.set(this,r3)),(r3=n2(this,r3.get(s3)||(r3.set(s3,r3=(function(n3){for(var t4,s4,r4=1,e3="",u3="",h3=[0],p3=function(n4){r4===1&&(n4||(e3=e3.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h3.push(0,n4,e3):r4===3&&(n4||e3)?(h3.push(3,n4,e3),r4=2):r4===2&&e3==="..."&&n4?h3.push(4,n4,0):r4===2&&e3&&!n4?h3.push(5,0,!0,e3):r4>=5&&((e3||!n4&&r4===5)&&(h3.push(r4,0,e3,s4),r4=6),n4&&(h3.push(r4,n4,0,s4),r4=6)),e3=""},a3=0;a3<n3.length;a3++){a3&&(r4===1&&p3(),p3(a3));for(var l3=0;l3<n3[a3].length;l3++)t4=n3[a3][l3],r4===1?t4==="<"?(p3(),h3=[h3],r4=3):e3+=t4:r4===4?e3==="--"&&t4===">"?(r4=1,e3=""):e3=t4+e3[0]:u3?t4===u3?u3="":e3+=t4:t4==='"'||t4==="'"?u3=t4:t4===">"?(p3(),r4=1):r4&&(t4==="="?(r4=5,s4=e3,e3=""):t4==="/"&&(r4<5||n3[a3][l3+1]===">")?(p3(),r4===3&&(h3=h3[0]),r4=h3,(h3=h3[0]).push(2,0,r4),r4=0):t4===" "||t4==="	"||t4===`
`||t4==="\r"?(p3(),r4=2):e3+=t4),r4===3&&e3==="!--"&&(r4=4,h3=h3[0])}return p3(),h3})(s3)),r3),arguments,[])).length>1?r3:r3[0]}var THEMES=[{id:"graphite",name:"Graphite",accent:"#7b6cf6",line:"Flat near-black, solid cards with hairline borders and one violet accent. Quiet, like a pro tool.",swatches:["#0d0e10","#16171a","#7b6cf6","#a99bff"],page:{bg:"#0d0e10",bgImage:"none",card:"#16171a",cardBorder:"#26282d",text:"#ececef",muted:"#8b8d95",accent:"#7b6cf6",accentText:"#a99bff",onAccent:"#ffffff",radius:"12px",font:"'Inter', system-ui, sans-serif"}},{id:"harbor",name:"Harbor",accent:"#3b82f6",line:"Deep navy in soft layers: no borders, each level a little lighter with a real shadow. Blue accent, Fira Sans.",swatches:["#1a3360","#111b2d","#3b82f6","#7db5ff"],page:{bg:"#0a111e",bgImage:"radial-gradient(1400px 600px at 50% -20%, rgba(37,79,150,.28), transparent 70%), linear-gradient(180deg, #0c1424, #0a101c)",card:"#111b2d",cardBorder:"transparent",text:"#e7eef9",muted:"#8b9bb5",accent:"#3b82f6",accentText:"#7db5ff",onAccent:"#ffffff",radius:"18px",font:"'Fira Sans', 'Inter', system-ui, sans-serif"}},{id:"aurora",name:"Aurora",accent:"#8b5cf6",line:"Frosted glass over an indigo night with soft violet and blue light. Violet-to-indigo accent, big rounded cards.",swatches:["#2a1a5e","#0b0a18","#8b5cf6","#6aa8ff"],page:{bg:"#0b0a18",bgImage:"radial-gradient(900px 640px at 6% -10%, rgba(124,58,237,.30), transparent 62%), radial-gradient(900px 700px at 100% 0%, rgba(37,99,235,.22), transparent 62%), linear-gradient(165deg, #0d0b1f, #09081a)",card:"rgba(255,255,255,.055)",cardBorder:"rgba(255,255,255,.10)",text:"#eeebfc",muted:"#9e98c0",accent:"linear-gradient(135deg, #8b5cf6, #5b5ef0)",accentText:"#c4b5fd",onAccent:"#ffffff",radius:"26px",font:"'Inter', system-ui, sans-serif"}},{id:"ink",name:"Ink",accent:"#2f7cf6",line:"True black with outlined cards, white type, light-weight numbers and one electric-blue accent. Greyscale charts.",swatches:["#000000","#f4f4f5","#2f7cf6","#26262b"],page:{bg:"#000000",bgImage:"none",card:"transparent",cardBorder:"#26262b",text:"#f4f4f5",muted:"#8e8e96",accent:"#2f7cf6",accentText:"#5aa2ff",onAccent:"#ffffff",radius:"10px",font:"'Inter', system-ui, sans-serif"}}],DEFAULT_THEME="graphite",THEME_IDS=THEMES.map(t4=>t4.id),isTheme=id=>THEME_IDS.includes(id),themeOf=id=>THEMES.find(t4=>t4.id===id)||THEMES.find(t4=>t4.id===DEFAULT_THEME),CATEGORY_COLORS=["#8b9cff","#60a5fa","#38bdf8","#22d3ee","#f472b6","#34d399","#fbbf24","#fb923c","#a3e635","#2dd4bf","#c084fc","#e879f9","#f87171","#94a3b8"];function catColor(color){let i3=CATEGORY_COLORS.indexOf(String(color||"").toLowerCase());return i3<0?color:`var(--cat-${i3+1})`}var TOKENS=["ink","ink2","text","text2","text3","muted","faint","soft","mint","teal","deep","on-mint","amber","coral","good","blue","glass","glass2","line","line2","mint-line","mint-wash","r","r2","r-ctl","font","font-display","h-weight","num-weight","track-tight","bg-base","bg-image","selection","scroll-thumb","card-bg","card-border","card-shadow","blur","raise","raise-border","hover","track","control","control-border","control-hover","field","chip-bg","chip-border","chip-text","accent-grad","glow","nav-bg","nav-border","nav-on-bg","nav-on-text","nav-on-ring","nav-radius","askbar-border","askbar-focus","askbar-shadow","askbar-radius","hero-bg","hero-border","plain-bg","fresh-bg","icon-bg","orb-bg","orb-glow","me-bg","me-text","bot-bg","tab-on-bg","tab-on-text","toggle-off","toggle-knob","toggle-on","toggle-knob-on","tint","letter-text","letter-bg","letter-ring","chart-line","chart-fill","chart-prev","chart-in","chart-out","chart-bar","chart-hot","chart-rest","chart-normal","hero-bar",...CATEGORY_COLORS.map((_3,i3)=>`cat-${i3+1}`)];var html=htm_module_default.bind(k);function go(screen,params={}){let qs=new URLSearchParams(Object.entries(params).filter(([,v3])=>v3!=null)).toString();location.hash=`#/${screen}${qs?`?${qs}`:""}`}var ApiError=class extends Error{constructor(code,body){super(body?.error||`HTTP ${code}`),this.code=code,this.body=body}},transport=null,setApiTransport=fn=>{transport=fn};async function api(path,body){if(transport)return transport(path,body);let res=await fetch(path,body===void 0?{}:{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(body)}),json=null;try{json=await res.json()}catch{}if(!res.ok)throw new ApiError(res.status,json);return json}var statusListeners=new Set,onNotReady=fn=>(statusListeners.add(fn),()=>statusListeners.delete(fn));function useData(path){let[state,setState]=d2({data:null,error:null,loading:!0}),load=j2(()=>{let live=!0;return setState(s3=>({...s3,loading:!0})),api(path).then(data=>live&&setState({data,error:null,loading:!1}),err=>{live&&(err.code===409&&statusListeners.forEach(fn=>fn(err.body?.status)),setState({data:null,error:err,loading:!1}))}),()=>{live=!1}},[path]);return A2(load,[load]),{...state,reload:load}}var chat={messages:[],online:null,reason:null,working:!1,archived:0,sending:null,fastUntil:0,failed:[],gen:0,loaded:!1,live:0,timer:null,polling:!1,listeners:new Set},snapshot=()=>({messages:chat.failed.length?[...chat.messages,...chat.failed]:chat.messages,pending:chat.sending,working:chat.working,online:chat.online,reason:chat.reason,archived:chat.archived}),emit=()=>chat.listeners.forEach(fn=>fn(snapshot()));function apply(r3){!r3||!Array.isArray(r3.messages)||(Object.assign(chat,{messages:r3.messages,online:r3.online,reason:r3.reason,working:!!r3.working,archived:r3.archived||0}),emit())}function schedule(){clearTimeout(chat.timer);let fast=chat.working||chat.sending||Date.now()<chat.fastUntil;!fast&&!chat.live||(chat.timer=setTimeout(poll,document.hidden?3e4:fast?2e3:1e4))}async function poll(){if(!chat.polling){chat.polling=!0;try{let gen=chat.gen,r3=await api("/api/chat");!chat.sending&&gen===chat.gen&&apply(r3)}catch{}chat.polling=!1,schedule()}}typeof document<"u"&&document.addEventListener("visibilitychange",()=>{!document.hidden&&chat.listeners.size&&poll()});function useChat({live=!1}={}){let[s3,set]=d2(snapshot);return A2(()=>(chat.listeners.add(set),set(snapshot()),live&&chat.live++,(!chat.loaded||live)&&(chat.loaded=!0,poll()),()=>{chat.listeners.delete(set),live&&chat.live--}),[live]),s3}async function askHelper(text){let q2=text.trim();if(!(!q2||chat.sending)){chat.sending=q2,chat.gen++,emit();try{apply(await api("/api/chat",{text:q2})),chat.fastUntil=Date.now()+2e4}catch(err){chat.failed=[...chat.failed,{id:`err-${Date.now()}`,role:"me",text:q2,source:"gupbudget"},{id:`err2-${Date.now()}`,role:"helper",notice:!0,text:err.code===503?err.message:`Couldn't send that (${err.message}).`}].slice(-10)}finally{chat.sending=null,emit(),schedule()}}}function money(cents,{decimals=!1,sign=!1}={}){let s3=(Math.abs(cents||0)/100).toLocaleString("en-US",{minimumFractionDigits:decimals?2:0,maximumFractionDigits:decimals?2:0});return cents<0&&s3!=="0"&&s3!=="0.00"?`−$${s3}`:`${sign&&cents>0?"+":""}$${s3}`}var pct=(frac,digits=0)=>`${(frac*100).toFixed(digits)}%`;function ago(ms){if(!ms)return"never";let min=Math.round((Date.now()-ms)/6e4);if(min<1)return"just now";if(min<60)return`${min} min ago`;let hr=Math.round(min/60);if(hr<24)return`${hr} hour${hr>1?"s":""} ago`;let d3=Math.round(hr/24);return`${d3} day${d3>1?"s":""} ago`}var LETTER_COLORS=[6,8,5,2,7,11,4,13,9].map(n3=>`var(--cat-${n3})`);function Letter({name,size=40}){let hsh=0;for(let ch2 of name||"?")hsh=hsh*31+ch2.charCodeAt(0)>>>0;let ch=((name||"?").match(/[A-Za-z0-9]/)||["?"])[0].toUpperCase();return html`<span class="lt" style=${{width:`${size}px`,height:`${size}px`,"--lt-c":LETTER_COLORS[hsh%LETTER_COLORS.length],fontSize:`${Math.round(size*.42)}px`}}>${ch}</span>`}function applyTheme(id){document.documentElement.dataset.theme=id}var P={home:'<path d="M4 11 12 4.5 20 11v8.5h-5.5v-5h-5v5H4z"/>',list:'<path d="M9 7h11M9 12h11M9 17h11"/><circle cx="4.8" cy="7" r=".9"/><circle cx="4.8" cy="12" r=".9"/><circle cx="4.8" cy="17" r=".9"/>',pie:'<path d="M12 3.5v8.5h8.5A8.5 8.5 0 1 1 12 3.5Z"/><path d="M15 3.8A8.5 8.5 0 0 1 20.2 9H15z"/>',repeat:'<path d="M17 3.5 20 6.5l-3 3"/><path d="M4 11.5v-1a4 4 0 0 1 4-4h12M7 20.5l-3-3 3-3"/><path d="M20 12.5v1a4 4 0 0 1-4 4H4"/>',spark:'<path d="M12 3.5c.6 3.9 2.6 5.9 6.5 6.5-3.9.6-5.9 2.6-6.5 6.5-.6-3.9-2.6-5.9-6.5-6.5 3.9-.6 5.9-2.6 6.5-6.5Z"/><path d="M18.5 15.5c.3 1.6 1 2.3 2.5 2.5-1.5.3-2.2 1-2.5 2.5-.3-1.5-1-2.2-2.5-2.5 1.5-.2 2.2-.9 2.5-2.5Z"/>',chart:'<path d="M4 20h16M7 20v-6M12 20V6M17 20v-9"/>',calendar:'<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 13.5a7.6 7.6 0 0 0 0-3l2-1.6-2-3.4-2.4 1a7.5 7.5 0 0 0-2.6-1.5L14 2.5h-4l-.4 2.5A7.5 7.5 0 0 0 7 6.5l-2.4-1-2 3.4 2 1.6a7.6 7.6 0 0 0 0 3l-2 1.6 2 3.4 2.4-1a7.5 7.5 0 0 0 2.6 1.5l.4 2.5h4l.4-2.5a7.5 7.5 0 0 0 2.6-1.5l2.4 1 2-3.4z"/>',bank:'<path d="M3.5 9.5 12 4.5l8.5 5M5 9.5v8M9.5 9.5v8M14.5 9.5v8M19 9.5v8M3.5 20h17"/>',search:'<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',chev:'<path d="m9 5.5 6.5 6.5L9 18.5"/>',left:'<path d="M15 5.5 8.5 12l6.5 6.5"/>',up:'<path d="M12 19V6M6.5 11.5 12 6l5.5 5.5"/>',alert:'<path d="M12 4 21 19.5H3z"/><path d="M12 10v4.5M12 17.2v.3"/>',check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',sync:'<path d="M20 11.5A8 8 0 0 0 5.5 7M4 12.5A8 8 0 0 0 18.5 17"/><path d="M5 3.5V7.5h4M19 20.5v-4h-4"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>',shield:'<path d="M12 3.5 19 6v5.5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>',wallet:'<path d="M4 7.5v10a2 2 0 0 0 2 2h14v-10H6a2 2 0 0 1-2-2Zm0 0a2 2 0 0 1 2-2h11v4"/><circle cx="16" cy="14.5" r="1"/>',info:'<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8v.4"/>',x:'<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',trend:'<path d="M3.5 16.5 9 11l3.5 3.5 8-8M15 6.5h5.5V12"/>',clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',flag:'<path d="M5.5 21V4M5.5 4.5h11l-2 4 2 4h-11"/>',swap:'<path d="M4 8h14l-3.5-3.5M20 16H6l3.5 3.5"/>',external:'<path d="M14 4.5h5.5V10M19.5 4.5 11 13M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"/>',folder:'<path d="M3.5 7a2 2 0 0 1 2-2h4l2 2.5h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/>',phone:'<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>',logout:'<path d="M14.5 4.5h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-3M10 16.5 5.5 12 10 7.5M5.5 12h10"/>',trash:'<path d="M4.5 7h15M9.5 7V4.5h5V7M6.5 7l1 12.5h9l1-12.5"/>',more:'<circle cx="5.5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="18.5" cy="12" r="1.3"/>',palette:'<path d="M12 3.5a8.5 8.5 0 0 0 0 17c1.3 0 1.8-1 1.3-2-.6-1.2.2-2.5 1.6-2.5H17a3.5 3.5 0 0 0 3.5-3.5c0-5-3.8-9-8.5-9Z"/><circle cx="7.8" cy="11" r="1"/><circle cx="10.5" cy="7.3" r="1"/><circle cx="15" cy="7.8" r="1"/>',help:'<circle cx="12" cy="12" r="8.5"/><path d="M9.7 9.5a2.4 2.4 0 1 1 3.3 2.3c-.6.3-1 .8-1 1.4v.4M12 16.8v.2"/>',doc:'<path d="M14 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-10z"/><path d="M14 3.5v5h5M8.5 13h7M8.5 16.5h4.5"/>',bell:'<path d="M6.5 9.5a5.5 5.5 0 1 1 11 0c0 5.5 2.3 7 2.3 7H4.2s2.3-1.5 2.3-7"/><path d="M10.2 19.5a1.9 1.9 0 0 0 3.6 0"/>',zap:'<path d="M13 3 5 13.5h6.5l-1 7.5 8-10.5H12z"/>',faceid:'<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><path d="M9 9v1.5M15 9v1.5M12 9v4.5h-1M9 16c1.8 1.3 4.2 1.3 6 0"/>',brain:'<path d="M9 4.5a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 4.5 3 3 0 0 0 6 1V6a1.9 1.9 0 0 0-3-1.5zM15 4.5a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 4.5 3 3 0 0 1-6 1"/>'};function Icon({name,size=18,sw=1.8,cls="",style}){return html`<svg class=${`ic ${cls}`} style=${style} viewBox="0 0 24 24" width=${size} height=${size} fill="none"
    stroke="currentColor" stroke-width=${sw} stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"
    dangerouslySetInnerHTML=${{__html:P[name]||""}} />`}function Donut({parts:parts2,size,thick,track="var(--track)",gap=1.2,children}){let r3=(size-thick)/2,c3=2*Math.PI*r3,total=parts2.reduce((s3,p3)=>s3+p3.value,0)||1,acc=0,segs=parts2.map((p3,i3)=>{let L2=p3.value/total*c3,el=html`<circle key=${i3} cx=${size/2} cy=${size/2} r=${r3} fill="none" style=${{stroke:catColor(p3.color)}}
      stroke-width=${thick} stroke-dasharray=${`${Math.max(L2-gap,.1)} ${c3}`} stroke-dashoffset=${-acc}
      transform=${`rotate(-90 ${size/2} ${size/2})`} />`;return acc+=L2,el});return html`<div style=${{position:"relative",width:`${size}px`,height:`${size}px`,flex:"none"}}>
    <svg width=${size} height=${size}><circle cx=${size/2} cy=${size/2} r=${r3} fill="none" style=${{stroke:track}} stroke-width=${thick} />${segs}</svg>
    <div style=${{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"}}>${children}</div>
  </div>`}function Ring({frac,size,thick,color,children}){let f3=Math.max(0,Math.min(frac||0,1));return html`<${Donut} size=${size} thick=${thick} gap=${0}
    parts=${[{value:f3,color},{value:1-f3,color:"transparent"}]}>${children}<//>`}function Bars({pairs,width,height,colorA,colorB}){let n3=pairs.length||1,gapX=14,max=Math.max(1,...pairs.flatMap(p3=>[p3.a,p3.b]))*1.05,gw=(width-gapX*(n3-1))/n3,bw=Math.min((gw-6)/2,40);return html`<svg width="100%" height=${height} viewBox=${`0 0 ${width} ${height}`}>
    ${pairs.map((p3,i3)=>{let x0=i3*(gw+gapX)+(gw-(bw*2+6))/2;return html`<g key=${i3}>
        ${[[p3.a,colorA],[p3.b,colorB]].map(([v3,col],j3)=>{let bh=v3/max*(height-24);return html`<rect x=${x0+j3*(bw+6)} y=${height-22-bh} width=${bw} height=${Math.max(bh,0)} rx="4" style=${{fill:col}} />`})}
        <text x=${i3*(gw+gapX)+gw/2} y=${height-4} text-anchor="middle" font-size="12" fill="currentColor" opacity=".6">${p3.label}</text>
      </g>`})}
  </svg>`}function DayBars({days,normal,width=420,height=190,color="var(--chart-bar)",label}){let n3=days.length||1,top=22,max=Math.max(1,normal||0,...days.map(d3=>d3.spent))*1.05,slot=width/n3,bw=Math.min(slot-10,44),y3=v3=>height-24-Math.max(v3,0)/max*(height-24-top);return html`<svg width="100%" viewBox=${`0 0 ${width} ${height}`} role="img" aria-label=${label||"Spending by day"} style="display:block;max-width:100%">
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
  </div>`}function Toggle({on,onChange,label,disabled}){return html`<button class=${`toggle${on?" on":""}`} role="switch" aria-checked=${on} aria-label=${label}
    disabled=${disabled} onClick=${()=>onChange(!on)}><i></i></button>`}var root=typeof window>"u"?globalThis:window,handler=root.webkit?.messageHandlers?.gup,listeners={},seq=0;function call(op,args){return handler?Promise.resolve(handler.postMessage({...args||{},op})):Promise.reject(new Error("not in the app"))}async function request(msg,signal){let id=++seq,onAbort=()=>{call("cancel",{id}).catch(()=>{})};signal?.addEventListener("abort",onAbort,{once:!0});try{return await call("request",{...msg,id})}finally{signal?.removeEventListener("abort",onAbort)}}var native={available:!!handler,call,request,on(name,fn){return(listeners[name]=listeners[name]||[]).push(fn),()=>{listeners[name]=listeners[name].filter(f3=>f3!==fn)}}};root.GupNative={_event(name,data){(listeners[name]||[]).slice().forEach(fn=>{try{fn(data||{})}catch(e3){console.error(e3)}})}};var REPORT_ID=/^[A-Za-z0-9_-]{1,80}$/,MONTH=/^\d{4}-(0[1-9]|1[0-2])$/,NOT_HERE="That's only in GupBudget on your PC.",RETRY=new Set(["timeout","unreachable"]),notHere=()=>new ApiError(404,{error:NOT_HERE,reason:"not_on_phone"}),month=m2=>MONTH.test(m2||"")?m2:null,clientId=()=>`m${Date.now().toString(36)}${Math.random().toString(36).slice(2,12)}`;function waitingOf(counts={}){let r3=Math.max(0,Number(counts.requests)||0),q2=Math.max(0,Number(counts.questions)||0);return{total:r3+q2,counts:{budget_requests:r3,questions:q2},items:[...Array(r3).fill({kind:"budget-request"}),...Array(q2).fill({kind:"question"})]}}function phoneApi(pc2){let titles=new Map,remember=r3=>{for(let x2 of[...r3?.pending||[],...r3?.recent||[]])x2?.id&&titles.set(x2.id,String(x2.summary||""));return r3},chat2=r3=>r3&&typeof r3=="object"?{...r3,archived:0}:r3;async function send(text){let body={text:String(text??""),client_id:clientId()};try{return await pc2("/v1/chat",{body,timeoutMs:3e4})}catch(e3){if(e3?.status!==0||!RETRY.has(e3.reason))throw e3;return pc2("/v1/chat",{body,timeoutMs:3e4})}}async function get(path,q2){switch(path){case"/api/overview":return pc2("/v1/overview");case"/api/subscriptions":return pc2("/v1/subscriptions");case"/api/transactions":case"/api/budget":case"/api/summary":return pc2(`/v1/${path.slice(5)}`,{query:{month:month(q2.get("month"))}});case"/api/reports":return pc2("/v1/reports");case"/api/reports/item":{let id=q2.get("id")||"";if(!REPORT_ID.test(id))throw new ApiError(404,{error:"No such report.",reason:"not_found"});return pc2(`/v1/reports/${id}`)}case"/api/helper/requests":return remember(await pc2("/v1/requests"));case"/api/helper/questions":return pc2("/v1/questions");case"/api/helper/log":return pc2("/v1/activity",{query:{limit:q2.get("limit")}});case"/api/helper/memory":return{facts:(await pc2("/v1/settings"))?.helper?.memory||[],where:null};case"/api/helper/waiting":return waitingOf((await pc2("/v1/status"))?.counts);case"/api/helper":{let[o3,s3]=await Promise.all([pc2("/v1/overview"),pc2("/v1/status")]),on=!!s3?.helper?.available;return{available:on,insights:on?o3?.insights||[]:[],model:null}}case"/api/chat":return chat2(await pc2("/v1/chat",{query:{last:200}}));case"/api/chat/archive":return{messages:[]};default:throw notHere()}}async function post(path,body){let b3=body&&typeof body=="object"?body:{};switch(path){case"/api/helper/requests/answer":{let id=String(b3.id||"");return pc2("/v1/requests/answer",{body:{id,answer:b3.answer},title:titles.get(id)||""})}case"/api/helper/questions/answer":return pc2("/v1/questions/answer",{body:b3});case"/api/chat":return chat2(await send(b3.text));default:throw notHere()}}return function(path,body){let u3=new URL(String(path),"http://phone.invalid");return u3.origin!=="http://phone.invalid"||!u3.pathname.startsWith("/api/")?Promise.reject(notHere()):body===void 0?get(u3.pathname,u3.searchParams):post(u3.pathname,body)}}var WHY={locked:"GupBudget is locked.",not_paired:"This phone isn't paired with your PC yet.",timeout:"Your PC took too long to answer.",unreachable:"Can't reach your PC. Is it on, and is Tailscale on on this phone?",aborted:"Stopped.",bad_request:"The app asked for something your PC's API doesn't have.",cancelled:"Not confirmed, so nothing was decided.",failed:"Face ID didn't pass, so nothing was decided.",no_passcode:"Set a passcode on this iPhone first: decisions need Face ID or the passcode.",busy:"Another Face ID check is still open.",no_app:"Talking to your PC needs the GupBudget iPhone app.",refused:"The app refused that call (a bug in this build)."},PcError=class extends ApiError{constructor(status,reason,message,body=null){super(status,{...body||{},error:message,reason}),this.status=status,this.reason=reason,this.message=message}get quiet(){return this.reason==="cancelled"||this.reason==="aborted"}};function decisionOf(method,path,body){if(method!=="POST"||!body||typeof body!="object")return null;if(path==="/v1/requests/answer"&&["approve","always","no"].includes(body.answer))return{key:`request:${body.id}`,action:body.answer,sendsConfirm:!0};if(path==="/v1/settings/helper"&&typeof body.on=="boolean"){if(body.permission!=null)return{key:`permission:${body.permission}`,action:body.on?"on":"off",sendsConfirm:body.on};if(body.grant!=null)return{key:`grant:${body.grant}`,action:body.on?"on":"revoke",sendsConfirm:!1}}return null}var mode=native.available?"native":"none",mockBase=null,devConfirm=null,clockOffset=0,lost=new Set,linkMode=()=>mode,onUnauthorized=fn=>(lost.add(fn),()=>lost.delete(fn));function startMock(search,confirm2){if(native.available)return!1;let port=Number(new URLSearchParams(search).get("mock"));return!Number.isInteger(port)||port<1024||port>65535?!1:(mode="mock",mockBase=`http://127.0.0.1:${port}`,devConfirm=confirm2,!0)}async function pc(path,{method,body,query,title,timeoutMs=15e3,signal}={}){method=method||(body===void 0?"GET":"POST");let q2=Object.fromEntries(Object.entries(query||{}).filter(([,v3])=>v3!=null).map(([k3,v3])=>[k3,String(v3)])),r3;if(mode==="native"){let msg={method,path,query:q2,timeoutMs,title:title?String(title).slice(0,120):""};body!==void 0&&(msg.body=JSON.stringify(body));try{r3=await native.request(msg,signal)}catch(e3){let reason2=e3?.message==="locked"?"locked":"refused";throw new PcError(0,reason2,WHY[reason2])}if(!r3||r3.error){let reason2=r3?.error||"unreachable";throw new PcError(0,reason2,WHY[reason2]||WHY.unreachable)}}else if(mode==="mock")r3=await mockCall(method,path,q2,body,title,timeoutMs,signal);else throw new PcError(0,"no_app",WHY.no_app);let json=null;try{json=r3.body?JSON.parse(r3.body):null}catch{}if(r3.status>=200&&r3.status<300)return path==="/v1/status"&&json?.serverTime&&(clockOffset=Date.parse(json.serverTime)-Date.now()),json;let err=json?.error&&typeof json.error=="object"?json.error:{};r3.status===401&&lost.forEach(fn=>{try{fn()}catch(e3){console.error(e3)}});let reason=typeof err.code=="string"?err.code:`http_${r3.status}`,message=typeof err.message=="string"?err.message:`Your PC answered HTTP ${r3.status}.`;throw new PcError(r3.status,reason,message,json&&typeof json=="object"?json:null)}async function mockCall(method,path,query,body,title,timeoutMs,signal){if(!/^\/v1\/[A-Za-z0-9/_-]+$/.test(path)||path.includes("//"))throw new PcError(0,"bad_request",WHY.bad_request);let d3=decisionOf(method,path,body);if(d3){if(!(devConfirm?await devConfirm({...d3,title}):!1))throw new PcError(0,"cancelled",WHY.cancelled);body={...body},d3.sendsConfirm&&(body.confirm={key:d3.key,action:d3.action,method:"passcode",at:new Date(Date.now()+clockOffset).toISOString().replace(/\.\d+Z$/,"+00:00")})}let qs=new URLSearchParams(query).toString(),ctl2=new AbortController,timer=setTimeout(()=>ctl2.abort(),timeoutMs),stop=()=>ctl2.abort();signal?.addEventListener("abort",stop,{once:!0});try{let res=await fetch(`${mockBase}${path}${qs?`?${qs}`:""}`,{method,signal:ctl2.signal,redirect:"error",headers:{authorization:"Bearer mock",accept:"application/json",...body!==void 0?{"content-type":"application/json"}:{}},body:body!==void 0?JSON.stringify(body):void 0});return{status:res.status,body:await res.text()}}catch{throw signal?.aborted?new PcError(0,"aborted",WHY.aborted):new PcError(0,ctl2.signal.aborted?"timeout":"unreachable",ctl2.signal.aborted?WHY.timeout:WHY.unreachable)}finally{clearTimeout(timer),signal?.removeEventListener("abort",stop)}}setApiTransport(phoneApi(pc));var FACE_ID=html`<svg viewBox="0 0 64 64" width="72" height="72" fill="none" stroke="currentColor" stroke-width="3.2"
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
  </div>`}var MONTHS=["January","February","March","April","May","June","July","August","September","October","November","December"],DAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],pad=n3=>String(n3).padStart(2,"0"),parts=s3=>s3.split("-").map(Number);function localToday(d3=new Date){return`${d3.getFullYear()}-${pad(d3.getMonth()+1)}-${pad(d3.getDate())}`}function addMonths(month2,n3){let[y3,m2]=parts(month2),d3=new Date(y3,m2-1+n3,1);return`${d3.getFullYear()}-${pad(d3.getMonth()+1)}`}function addDays(date,n3){let[y3,m2,d3]=parts(date);return localToday(new Date(y3,m2-1,d3+n3))}function daysInMonth(month2){let[y3,m2]=parts(month2);return new Date(y3,m2,0).getDate()}var dayOfMonth=date=>Number(date.slice(8,10)),monthName=month2=>MONTHS[parts(month2)[1]-1],monthShort=month2=>monthName(month2).slice(0,3),monthLabel=month2=>`${monthName(month2)} ${month2.slice(0,4)}`;function weekday(date){let[y3,m2,d3]=parts(date);return DAYS[new Date(y3,m2-1,d3).getDay()]}var shortDate=date=>`${monthShort(date.slice(0,7))} ${dayOfMonth(date)}`,longDate=date=>`${weekday(date)}, ${monthName(date.slice(0,7))} ${dayOfMonth(date)}`;function dayLabel(date,today){return date===today?"Today":date===addDays(today,-1)?"Yesterday":date.slice(0,4)===today.slice(0,4)?shortDate(date):`${shortDate(date)}, ${date.slice(0,4)}`}var weekdayShort=date=>`${weekday(date).slice(0,3)}, ${shortDate(date)}`;var REQUESTS_CHANGED="gb-requests-changed";function InsightCard({ins,glow}){let icon={bad:"alert",warn:"alert",good:"trend",info:"info"}[ins.tone]||"info",color={bad:"var(--coral)",warn:"var(--amber)",good:"var(--good)",info:"var(--blue)"}[ins.tone];return html`<div class=${`ins${glow?" glow":""}`}>
    <div class="t"><${Icon} name=${icon} size=${18} style=${{color}} />${ins.title}</div>
    <div class="b">${ins.body}</div>
    ${ins.action&&html`<a class="a" href=${`#/${ins.action.to}`}>${ins.action.label}<${Icon} name="chev" size=${14} sw=${2.2} /></a>`}
  </div>`}var EVERY={daily:"day",weekly:"week",monthly:"mo",yearly:"yr"},per=e3=>e3.interval===1?`/${EVERY[e3.frequency]}`:` every ${e3.interval} ${EVERY[e3.frequency]}`;function Found({found,alone}){return html`<section class="card pad">
    <div class="cardhead"><h2>Found in your history</h2>
      <span class="aside num" style="font-size:14px">${money(found.monthly)}/mo · ${money(found.yearly)}/yr</span></div>
    <div class="muted" style="font-size:13px;margin:-4px 0 12px">The helper spotted these repeating charges in your
      transactions${alone?"":"; they aren't in Actual's Schedules yet, so they aren't in the totals above"}. Add them as schedules in Actual to see them coming.</div>
    <div class="subgrid">
      ${found.items.map(s3=>html`<section class=${`card subcard${s3.flags[0]?` ${s3.flags[0].tone}`:""}`}>
        <div class="row" style="gap:12px;align-items:center;min-width:0">
          <${Letter} name=${s3.name} size=${36} />
          <div style="min-width:0"><div class="nm">${s3.name}</div><div class="nx">Next about ${shortDate(s3.next)}</div></div>
        </div>
        <div class="pr num">${money(s3.charge,{decimals:!0})}<small>${per(s3.every)}</small></div>
        ${s3.flags.map(f3=>html`<div class=${f3.tone||"warn"} style="font-size:13px">${f3.label}</div>`)}
      </section>`)}
    </div>
  </section>`}function ask(q2){go("helper"),askHelper(q2)}function Subscriptions({status}){let{data:d3,error,loading,reload}=useData("/api/subscriptions");if(loading&&!d3)return html`<${Loading} />`;if(error)return html`<${Failed} error=${error} retry=${reload} />`;let flagged=d3.items.filter(i3=>i3.flags.length).length,found=d3.found||{items:[]};return html`<div class="subcols">
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
        ${status.actualURL&&html`<div class="right"><a class="btn" href=${`${status.actualURL}/schedules`} target="_blank" rel="noopener">
          <${Icon} name="external" size=${15} />Schedules in Actual</a></div>`}
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
          ${d3.items.map(s3=>{let tone=s3.flags[0]?.tone;return html`<section class=${`card subcard${tone?` ${tone}`:""}`}>
              <div class="row" style="gap:12px;align-items:center;min-width:0">
                <${Letter} name=${s3.name} size=${36} />
                <div style="min-width:0"><div class="nm">${s3.name}</div><div class="nx">Next ${shortDate(s3.next)}</div></div>
              </div>
              <div class="pr num">${money(s3.charge,{decimals:!0})}<small>${per(s3.every)}</small></div>
              ${s3.flags.map(f3=>html`<div class=${f3.tone||"warn"} style="font-size:13px">${f3.label}</div>`)}
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
          <span>GupBudget lists the schedules you have in Actual. In Actual, Schedules → "Find schedules" spots them
            from your history in one go.</span>
          ${status.actualURL&&html`<div class="acts"><a class="btn pri" href=${`${status.actualURL}/schedules`} target="_blank" rel="noopener">
            <${Icon} name="external" size=${15} />Open Schedules in Actual</a></div>`}
        </div>`}
    </div>
  </div>`}function MonthNav({month:month2,prev,next,screen}){return html`<div class="monthnav">
    ${prev?html`<a href="#" aria-label="Previous month" onClick=${e3=>{e3.preventDefault(),go(screen,{month:prev})}}>
      <${Icon} name="left" size=${16} sw=${2.2} /></a>`:html`<span class="off"><${Icon} name="left" size=${16} /></span>`}
    <b>${monthLabel(month2)}</b>
    ${next?html`<a href="#" aria-label="Next month" onClick=${e3=>{e3.preventDefault(),go(screen,{month:next})}}>
      <${Icon} name="chev" size=${16} sw=${2.2} /></a>`:html`<span class="off"><${Icon} name="chev" size=${16} /></span>`}
  </div>`}function ordinal(n3){let suffix=n3%100>=11&&n3%100<=13?"th":{1:"st",2:"nd",3:"rd"}[n3%10]||"th";return`${n3}${suffix}`}function fact(n3,prevName){switch(n3.kind){case"text":return n3.text;case"kept":return`You kept ${pct(n3.pct)} of what came in.`;case"overspent":return`You spent ${money(n3.amount)} more than came in.`;case"tax":return n3.moved>=n3.should?`Taxes are covered: ${money(n3.moved)} set aside, ${n3.rate}% of money in.`:`Taxes: ${money(n3.moved)} set aside of ${money(n3.should)} (${n3.rate}% of money in).`;case"biggest":return`${n3.name} was the biggest spend at ${money(n3.amount)}.`;case"jump":return`${n3.name} went up the most since ${prevName} (+${money(n3.diff)}).`;default:return""}}function Summary({params}){let{data:d3,error,loading,reload}=useData(`/api/summary${params.month?`?month=${params.month}`:""}`);if(loading&&!d3)return html`<${Loading} />`;if(error)return html`<${Failed} error=${error} retry=${reload} />`;let name=monthName(d3.month),prevName=d3.prev?monthName(d3.prev):"last month",maxWhere=Math.max(1,...d3.where.map(w2=>w2.spent));return html`
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
    </div>`}var KIND={weekly:"Weekly",monthly:"Monthly"},range=r3=>r3.kind==="weekly"?`${shortDate(r3.period.start)} – ${shortDate(r3.period.end)}`:monthName(r3.period.month),New=()=>html`<span class="pill good">New</span>`;function Row({r:r3}){return html`<a class=${`card reprow${r3.isNew?" fresh":""}`} href=${`#/reports?id=${r3.id}`}>
    <span class="repic"><${Icon} name=${r3.kind==="weekly"?"calendar":"chart"} size=${20} /></span>
    <span class="mid">
      <span class="tname">${r3.title}${r3.isNew&&html`<${New} />`}</span>
      <span class="tcat">${KIND[r3.kind]} · ${range(r3)}${r3.headline?` · ${r3.headline}`:""}</span>
    </span>
    <${Icon} name="chev" size=${18} style="color:var(--faint)" />
  </a>`}function Make({kind,label,onDone}){let[busy,setBusy]=d2(!1),[err,setErr]=d2(null);return html`<button class="btn small" disabled=${busy} onClick=${async()=>{setBusy(!0),setErr(null);try{let r3=await api("/api/reports/make",{kind});go("reports",{id:r3.id}),onDone()}catch(e3){setErr(e3.message)}finally{setBusy(!1)}}} title="Works out the numbers now (the helper adds its words when it writes one)">
    <${Icon} name="sync" size=${14} />${busy?"Working…":label}</button>${err&&html`<span class="bad" style="font-size:12.5px">${err}</span>`}`}function List({canMake}){let{data:d3,error,loading,reload}=useData("/api/reports");return loading&&!d3?html`<${Loading} />`:error?html`<${Failed} error=${error} retry=${reload} />`:html`
    <div class="pagehead">
      <div><h1 class="disp">Reports</h1>
        <div class="sub">A weekly report every Sunday and a monthly one on the 1st · from your budget, in plain words</div></div>
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
    <div><a class="link" href="#/reports" style="margin-bottom:8px"><${Icon} name="left" size=${14} />All reports</a>
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
          <div class="acts"><a class="btn" href="#/reports">All reports</a></div></section>`:html`<${Failed} error=${error} retry=${reload} />`:html`<div class="rep"><${Back} r=${r3} />${r3.kind==="weekly"?html`<${Weekly} r=${r3} />`:html`<${Monthly} r=${r3} />`}</div>`}function Reports({params,status}){return params.id?html`<${Page} id=${params.id} />`:html`<${List} canMake=${!status?.phone} />`}var secProps=(name,focus)=>({id:`set-${name}`,class:`card sec${focus===name?" focus":""}`}),scrollTo2=focus=>focus&&document.getElementById(`set-${focus}`)?.scrollIntoView({block:"start"}),useRescroll=(focus,data)=>A2(()=>{data&&scrollTo2(focus)},[!!data]);function Memory({focus}){let{data}=useData("/api/helper/memory");useRescroll(focus,data);let facts=data?.facts||[];return html`<section ...${secProps("memory",focus)}>
    <div class="sechead">What the helper remembers</div>
    <div class="secsub">Things you told it to keep, filed by GupWorks' Librarian in your GupBudget notes (Memory). To
      change or remove one, edit it there${data?.where?html`: <code>${data.where}</code>`:""}. Amounts, balances and
      account numbers are never kept.</div>
    ${facts.map(f3=>html`<div class="factrow"><span>${f3.text}</span></div>`)}
    ${!facts.length&&html`<div class="muted" style="font-size:13.5px">Nothing yet. Tell it something like "remember I pay estimated taxes every quarter".</div>`}
  </section>`}function Activity({focus}){let{data,error}=useData("/api/helper/log?limit=40");useRescroll(focus,data);let list=data?.entries||[];return html`<section ...${secProps("activity",focus)}>
    <div class="sechead">Helper activity</div>
    <div class="secsub">Everything the helper did or was told no to, kept on this PC. Newest first.</div>
    ${list.map((e3,i3)=>html`<div class=${`actrow${e3.kind==="refused"?" refused":""}`} key=${i3}>
      <div class="acttop"><b>${e3.title}</b><span title=${e3.at}>${ago(Date.parse(e3.at))}</span></div>
      ${e3.what&&html`<div class="actsub">${e3.what}</div>`}
      ${(e3.before||e3.after)&&html`<div class="actchange">${e3.before||"nothing"} → ${e3.after||"nothing"}</div>`}
      ${e3.error&&html`<div class="actsub">${e3.error}</div>`}
      ${e3.why&&html`<div class="actwhy">Why: ${e3.why}</div>`}</div>`)}
    ${!list.length&&!error&&html`<div class="muted" style="font-size:13.5px">Nothing yet. When the helper files a transaction, makes a rule or asks for a budget change, it shows up here.</div>`}
    ${error&&html`<div class="muted" style="font-size:13.5px">Couldn't read the log: ${error.message}</div>`}
  </section>`}var SECTIONS=["permissions","activity","memory","pc","phones"],NOTICES=[["priceAlerts","Price-increase alerts"],["unusualSpending","Unusual spending"],["taxReminders","Tax reminders"],["monthlySummary","Monthly summary on the 1st"]],day=iso=>{let d3=new Date(iso);return Number.isNaN(d3.getTime())?"":d3.toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"})},sec=(name,focus)=>({id:`set-${name}`,class:`card sec${focus===name?" focus":""}`});function ThisPhone({pcInfo={},device,mock:mock2,onUnpair}){let[sure,setSure]=d2(!1);A2(()=>{if(!sure)return;let t4=setTimeout(()=>setSure(!1),4e3);return()=>clearTimeout(t4)},[sure]);let host=pcInfo.host||"your PC";return html`<div class="m-row"><${Icon} name="phone" size=${20} /><b>This phone</b></div>
    <p>Paired with <b class="m-host">${pcInfo.fqdn||host}</b>${pcInfo.pairedAt?` since ${day(pcInfo.pairedAt)}`:""}.</p>
    ${device?.name&&html`<p class="m-muted">Your PC calls it “${device.name}” in Settings › Phones.</p>`}
    ${!mock2&&html`<button class=${`m-btn${sure?" danger":""}`} onClick=${()=>sure?onUnpair():setSure(!0)}><${Icon} name="logout" size=${17} />${sure?"Tap again to unpair":"Unpair this phone"}</button>`}`}function PhoneSettings({params={},status,pcInfo={},mock:mock2,onUnpair}){let[d3,setD]=d2(null),[error,setError]=d2(null),[busy,setBusy]=d2(null),[msg,setMsg]=d2(null),focus=SECTIONS.includes(params.section)?params.section:params.section==="helper"?"permissions":null,load=()=>pc("/v1/settings").then(v3=>{setD(v3),setError(null)},setError);if(A2(()=>{load()},[]),A2(()=>{d3&&focus&&document.getElementById(`set-${focus}`)?.scrollIntoView({block:"start"})},[!!d3]),!d3&&!error)return html`<${Loading} />`;if(!d3)return html`<${Failed} error=${error} retry=${load} />`;let change=async(key,body,title)=>{setBusy(key),setMsg(null);try{setD(await pc("/v1/settings/helper",{body,title}))}catch(e3){e3.quiet||setMsg(`That didn't change: ${e3.message}`)}finally{setBusy(null)}},granted=(d3.grants||[]).filter(g3=>g3.on),notices=d3.helper?.notices||{};return html`
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
          onChange=${on=>change(p3.key,{permission:p3.key,on},p3.label)} /></div>`)}
      <div class="lockline"><${Icon} name="lock" size=${17} style="color:var(--mint)" />
        <span>There is no switch for moving money. GupBudget and its helper can never move money.</span></div>
      <div class="sechead" style="margin-top:16px">Always allowed</div>
      <div class="secsub">Kinds of budget change you chose "Always allow" for: the helper makes these without asking
        (each is still logged). Revoke one and it asks you again.</div>
      ${granted.map(g3=>html`<div class="setrow">
        <div class="what">${g3.label}<small>Made without asking</small></div>
        <button class="btn small" disabled=${!!busy} aria-label=${`Revoke: ${g3.label}`}
          onClick=${()=>change(g3.key,{grant:g3.key,on:!1},`Revoke: ${g3.label}`)}>Revoke</button></div>`)}
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
    </section>`}var CHANGE={done:["good","Done"],requested:["muted","Waiting for you (Budget)"],asked:["muted","Asked you (Needs a look)"]},OLD_PROPOSAL={done:["good","Done"],declined:["muted","Left as it was"],failed:["bad","Not changed"],expired:["muted","Expired"],pending:["muted","Not answered"]},PLACES={gupbudget:"GupBudget","gupworks-app":"GupWorks",phone:"your phone"},AGENTS={gup:"Gup",finance:"Finance","finance-job":"Finance's scheduled job",gupworks:"GupWorks"},agentName=s3=>AGENTS[s3]||(s3?s3.charAt(0).toUpperCase()+s3.slice(1):"GupWorks");function sourceLabel(m2){return m2.role==="me"?`You in ${PLACES[m2.source]||m2.source||"GupWorks"}`:agentName(m2.source)}var LINK=new RegExp("(?:\\bgupbudget:\\/\\/|(?<![\\w/])#\\/)([a-z]+(?:\\?[\\w=&%.:-]*)?)","g");function Linked({text}){let parts2=[],last=0;for(let m2 of text.matchAll(LINK))parts2.push(text.slice(last,m2.index),html`<a class="mint" href=${`#/${m2[1]}`}>${m2[0]}</a>`),last=m2.index+m2[0].length;return parts2.push(text.slice(last)),parts2}function Change({c:c3}){let[cls,label]=CHANGE[c3.status]||["muted",c3.status];return html`<div class="proposal"><span>${c3.summary}</span><b class=${`st ${cls}`}>${label}</b></div>`}var Typing=()=>html`<span class="typing"><i></i><i></i><i></i></span>`;function Bubble({m:m2}){if(m2.role==="me")return html`<div class="me">${m2.text}<small class="src">${sourceLabel(m2)}</small></div>`;if(m2.role==="system")return html`<div class="sysline" title=${m2.text}><b>${sourceLabel(m2)}</b> ${m2.text}</div>`;let agent=m2.role==="agent";return html`<div class=${`bot${m2.notice?" notice":""}${agent?" agent":""}`}>
    <div class="orb sm"><${Icon} name=${agent?"info":"spark"} size=${15} sw=${2} /></div>
    <div class="col">
      ${agent&&html`<div class="via">${sourceLabel(m2)} asked</div>`}
      <div class="txt"><${Linked} text=${m2.text} />${m2.partial&&html` <${Typing} />`}</div>
      ${(m2.changes||[]).map((c3,i3)=>html`<${Change} key=${i3} c=${c3} />`)}
      ${(m2.proposals||[]).map(p3=>{let[cls,label]=OLD_PROPOSAL[p3.status]||["muted",p3.status];return html`<div class="proposal"><span>${p3.summary}</span><b class=${`st ${cls}`}>${label}</b></div>`})}
      ${!agent&&!m2.notice&&html`<div class="via">${[m2.via,m2.archived?"earlier chat":"Finance on GupWorks"].filter(Boolean).join(" · ")}</div>`}
    </div></div>`}function Title({title,sub,children}){return html`<header class="m-title"><div><h1>${title}</h1>${sub}</div>
    ${children&&html`<div class="m-acts">${children}</div>`}</header>`}var Round=({href,label,icon,dot,onClick,on})=>href?html`<a class=${`m-round${on?" on":""}`} href=${href} aria-label=${label}><${Icon} name=${icon} size=${19} />${dot&&html`<i class="m-rdot"></i>`}</a>`:html`<button class=${`m-round${on?" on":""}`} type="button" aria-label=${label} aria-pressed=${on==null?null:!!on} onClick=${onClick}>
      <${Icon} name=${icon} size=${19} />${dot&&html`<i class="m-rdot"></i>`}</button>`;function MonthStep({month:month2,prev,next,screen,params={}}){let step=m2=>e3=>{e3.preventDefault(),go(screen,{...params,month:m2})};return html`<div class="m-month">
    ${prev?html`<a href="#" aria-label="Previous month" onClick=${step(prev)}><${Icon} name="left" size=${16} sw=${2.2} /></a>`:html`<span></span>`}
    <b>${monthLabel(month2)}</b>
    ${next?html`<a href="#" aria-label="Next month" onClick=${step(next)}><${Icon} name="chev" size=${16} sw=${2.2} /></a>`:html`<span></span>`}
  </div>`}function Bar({frac,over,tick,big,color}){let w2=`${Math.round(Math.max(0,Math.min(1,frac||0))*1e3)/10}%`;return html`<div class=${`m-meter${big?" big":""}`}>
    <i style=${{width:w2,background:over?"var(--coral)":color||null}}></i>
    ${tick!=null&&html`<span class="m-tick" style=${{left:`${Math.round(Math.max(0,Math.min(1,tick))*1e3)/10}%`}} aria-hidden="true"></span>`}
  </div>`}var Pill=({tone="",icon,children})=>html`<span class=${`m-pill ${tone}`}>${icon&&html`<${Icon} name=${icon} size=${14} sw=${2} />`}${children}</span>`,plural=(n3,one,many)=>`${n3} ${n3===1?one:many}`;function usePc(path,query){let key=`${path}?${JSON.stringify(query||{})}`,[s3,set]=d2({data:null,error:null}),load=j2(()=>{let live=!0;return pc(path,{query}).then(data=>live&&set({data,error:null}),error=>live&&set({data:null,error})),()=>{live=!1}},[key]);return A2(load,[load]),{...s3,reload:load}}function useSwipeX({onMove,onEnd}){let cb=T2(null);return cb.current={onMove,onEnd},b2(()=>{let x0=null,y0=0,t0=0,dir=null,dx=0,swallow=!1,end=e3=>{if(x0==null)return;let fast=Math.abs(dx)>25&&Math.abs(dx)/Math.max(1,e3.timeStamp-t0)>.5,was=dir;x0=null,dir=null,was==="x"&&(swallow=!0,setTimeout(()=>{swallow=!1},80),cb.current.onEnd(dx,fast))};return{onPointerDown:e3=>{x0=e3.clientX,y0=e3.clientY,t0=e3.timeStamp,dir=null,dx=0},onPointerMove:e3=>{if(x0==null)return;dx=e3.clientX-x0;let dy=e3.clientY-y0;!dir&&Math.hypot(dx,dy)>8&&(dir=Math.abs(dx)>Math.abs(dy)?"x":"y",dir==="x"&&e3.currentTarget.setPointerCapture?.(e3.pointerId)),dir==="x"&&cb.current.onMove(dx)},onPointerUp:end,onPointerCancel:end,onClickCapture:e3=>{swallow&&(e3.stopPropagation(),e3.preventDefault(),swallow=!1)}}},[])}var PICKS=["How much is left this month?","This week so far","Bills coming up","Anything I should look at?","Where did my money go this month?","Am I spending more than last month?"],SHOWN=30,ctl=null;function openAsk(text=""){if(!ctl)return;let{sheet,input}=ctl;sheet.current.inert=!1,sheet.current.classList.add("open"),document.documentElement.classList.add("m-asking"),text&&(input.current.value=text,ctl.setText(text)),input.current.focus({preventScroll:!0}),text&&input.current.setSelectionRange(text.length,text.length),ctl.setOpen(!0)}function useViewport(open){A2(()=>{let vv=window.visualViewport,root2=document.documentElement.style;if(!open||!vv)return;let fit=()=>{root2.setProperty("--m-vvh",`${vv.height}px`),root2.setProperty("--m-vvtop",`${vv.offsetTop}px`),document.documentElement.classList.toggle("m-kb",vv.height<innerHeight-120)};return fit(),vv.addEventListener("resize",fit),vv.addEventListener("scroll",fit),()=>{vv.removeEventListener("resize",fit),vv.removeEventListener("scroll",fit),root2.removeProperty("--m-vvh"),root2.removeProperty("--m-vvtop"),document.documentElement.classList.remove("m-kb")}},[open])}function Messages(){let{messages,pending,working,online,reason}=useChat({live:!0}),end=T2(null),last=messages.at(-1),busy=!!pending||working;return A2(()=>end.current?.scrollIntoView({block:"end"}),[messages.length,last?.text,busy]),html`<div class="m-msgs" aria-live="polite">
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
    <button class="btn pri m-wide" type="button" onClick=${()=>openAsk()}><${Icon} name="spark" size=${17} />Ask Finance</button>`}var greeting=()=>{let h3=new Date().getHours();return h3<12?"Good morning":h3<18?"Good afternoon":"Good evening"},TONE={bad:"coral",warn:"amber",ask:"amber"};function Hero({d:d3}){let{hero}=d3,m2=monthName(d3.month);if(!hero.hasBudget)return html`<section class="card m-hero">
      <div class="m-eyebrow">Spent so far in ${m2}</div>
      <div class="m-big num">${money(hero.spent)}</div>
      <div class="m-per">Nothing is planned for ${m2} yet. Plan it in Actual on your PC and this shows what's left.</div>
    </section>`;let days=d3.curve?.days||daysInMonth(d3.month),pace=Math.min(1,dayOfMonth(d3.today)/days),ahead=hero.spent-hero.planned*pace,over=hero.left<0,pill=over?html`<${Pill} tone="bad" icon="flag">Over plan by ${money(-hero.left)}<//>`:ahead>hero.planned*.05?html`<${Pill} tone="warn" icon="zap">${money(ahead)} ahead of pace<//>`:ahead<-hero.planned*.05?html`<${Pill} tone="ok" icon="check">${money(-ahead)} under pace<//>`:html`<${Pill} tone="ok" icon="check">On pace<//>`;return html`<section class="card m-hero" aria-label=${over?`Over plan in ${m2}`:`Left to spend in ${m2}`}>
    <div class="m-eyebrow">${over?`Over plan in ${m2}`:`Left to spend in ${m2}`}</div>
    <div class=${`m-big num${over?" coral":""}`}>${money(Math.abs(hero.left))}</div>
    <div class="m-per">${hero.left>0?html`about <b>${money(hero.perDay)} a day</b> for the next ${plural(hero.daysLeft,"day","days")}`:`${plural(hero.daysLeft,"day","days")} to go in ${m2}`}</div>
    <${Bar} big frac=${hero.pct} over=${over} tick=${pace} color="var(--hero-bar)" />
    <div class="m-herofoot"><span class="muted">${money(hero.spent)} spent of ${money(hero.planned)}</span>${pill}</div>
  </section>`}function Needs({counts,reports}){let r3=Math.max(0,counts.requests||0),q2=Math.max(0,counts.questions||0),newest=(reports?.items||[]).find(x2=>x2.isNew),nr=counts.reportsNew,tile=(href,icon,n3,big,label)=>html`<a class=${`m-need${n3?" on":""}`} href=${href}>
    <${Icon} name=${icon} size=${19} />${n3>0&&html`<i class="numdot">${n3}</i>`}
    <b class="num">${big}</b><span>${label}</span></a>`;return html`<div class="m-needs" aria-label="Needs you">
    ${tile("#/budget","pie",r3,r3,r3===1?"budget change to OK":r3?"budget changes to OK":"budget changes waiting")}
    ${tile("#/spending?tab=needs","help",q2,q2,q2===1?"charge the helper asks about":q2?"charges the helper asks about":"questions from the helper")}
    ${nr>0?tile(newest?`#/reports?id=${newest.id}`:"#/reports","doc",0,"New",newest?`${newest.kind==="monthly"?"monthly":"weekly"} report is ready`:plural(nr,"new report","new reports")):tile("#/reports","doc",0,"Reports","no new report")}
  </div>`}function Categories({budget}){if(!budget?.hasMonth)return null;let planned=g3=>g3.items.filter(c3=>c3.planned>0),byPlan=(a3,b3)=>b3.planned-a3.planned,day2=budget.groups.filter(g3=>!/bill/i.test(g3.name)).flatMap(planned).sort(byPlan),rest=budget.groups.filter(g3=>/bill/i.test(g3.name)).flatMap(planned).sort(byPlan),cats=[...day2,...rest].slice(0,4);return cats.length?html`<div class="m-sect">Your categories</div>
    <div class="m-cats">${cats.map(c3=>html`<a class="m-cat" href="#/budget">
      <span class="t">${c3.name}</span>
      <span class="v num">${c3.left<0?html`<b class="coral">${money(-c3.left)}</b> <small>over ${money(c3.planned)}</small>`:html`<b>${money(c3.left)}</b> <small>left of ${money(c3.planned)}</small>`}</span>
      <${Bar} frac=${c3.pct} over=${c3.left<0} />
    </a>`)}</div>`:null}function comingUp(subs,today,days=14){if(!subs||!today)return[];let until=addDays(today,days),seen=new Set;return[...subs.items||[],...subs.found?.items||[]].map(s3=>({name:s3.name,date:s3.next,amount:s3.charge})).filter(b3=>b3.date&&b3.date>=today&&b3.date<=until&&!seen.has(`${b3.name}|${b3.date}`)&&seen.add(`${b3.name}|${b3.date}`)).sort((a3,b3)=>a3.date.localeCompare(b3.date)||b3.amount-a3.amount)}function Bills({subs,today}){if(!subs)return null;let bills=comingUp(subs,today),first=bills.slice(0,3),more=bills.slice(3),total=bills.reduce((s3,b3)=>s3+Math.abs(b3.amount||0),0);return html`<section class="card m-list">
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
      <div><div class="m-mid num good">${money(d3.moneyIn)}</div><div class="s">${plural(d3.moneyInCount||0,"payment","payments")}</div></div>
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
    <${Noticed} insights=${d3.insights} />`}var VIEWS=[["all","All"],["needs","Needs a look"],["flagged","Flagged"]],TONE2={bad:"coral",warn:"amber",ask:"amber"},OUTCOME={filed:{done:"filed",already:"already filed",off:"not filed (switch off)",gone:"transaction gone"},rule:{made:"rule made",already:"rule already there",off:"no rule (switch off)"},remembered:{queued:"sent to its notes"}},ACTION_W=76,about=t4=>`the ${money(Math.abs(t4.amount),{decimals:!0})} ${t4.amount>0?"payment from":"charge at"} "${t4.payee}" on ${shortDate(t4.date)}${t4.account?` (${t4.account})`:""}`,fileSentence=(t4,cat)=>`Please file ${about(t4)} in ${cat}.`,askSentence=t4=>`About ${about(t4)}: `;function QuestionCard({q:q2,pos,busy,categories,onAnswer,onNext}){let[other,setOther]=d2(!1),[rule,setRule]=d2(!0),[remember,setRemember]=d2(!0),[cat,setCat]=d2(""),[text,setText]=d2(""),open=q2.status==="open",send=extra=>onAnswer({id:q2.id,rule:!!q2.rule&&rule,...extra}),groups=[...new Set(categories.filter(c3=>!c3.income).map(c3=>c3.group))];return html`<div class="card m-q" id=${`q-${q2.id}`}>
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
    ${n3>0&&html`<div class="m-sub">${data.canFile?"Picking a category files it in Actual. Your answers teach the helper; nothing else changes.":'The "Categorize transactions" switch is off, so answers are only kept for the helper.'}</div>`}`}function TxRow({t:t4,flags,askedId,swiped,setSwiped,expanded,setExpanded,onFile}){let[dx,setDx]=d2(0),isOpen=swiped===t4.id,canFile=t4.kind!=="transfer",w2=ACTION_W*(canFile?2:1),swipe=useSwipeX({onMove:d3=>setDx(isOpen?Math.max(0,Math.min(w2,d3)):Math.max(-w2-30,Math.min(0,d3))),onEnd:(d3,fast)=>{setDx(0),setSwiped((isOpen?d3<40:d3<-50||fast&&d3<0)?t4.id:null)}}),style=isOpen?{marginRight:`${w2}px`,...dx?{transform:`translateX(${dx}px)`,transition:"none"}:null}:dx?{transform:`translateX(${dx}px)`,transition:"none"}:null,exp=expanded===t4.id;return html`<div class=${`m-swipe${isOpen?" open":""}${dx?" dragging":""}`}>
    <div class="m-under" aria-hidden=${!isOpen}>
      ${canFile&&html`<button class="file" tabindex=${isOpen?0:-1} onClick=${()=>onFile(t4)}>File as…</button>`}
      <button class="ask" tabindex=${isOpen?0:-1} onClick=${()=>{setSwiped(null),openAsk(askSentence(t4))}}>Ask</button>
    </div>
    <div class="m-over" ...${swipe} style=${style}>
      <button class="m-row m-tx" aria-expanded=${exp} onClick=${()=>isOpen?setSwiped(null):setExpanded(exp?null:t4.id)}>
        ${t4.kind==="transfer"?html`<span class="lt plain" style="width:36px;height:36px"><${Icon} name="swap" size=${17} /></span>`:html`<${Letter} name=${t4.payee} size=${36} />`}
        <span class="grow"><span class="t">${t4.payee}</span>
          <span class="s">${flags.length?html`<span class=${TONE2[flags[0].tone]||"amber"}>${flags[0].label}${flags.length>1?` +${flags.length-1}`:""}</span> · `:""}${t4.category||"No category yet"}</span></span>
        <span class=${`amt num${t4.kind==="in"?" good":""}`}>${money(t4.amount,{decimals:!0,sign:t4.kind==="in"})}</span>
      </button>
      ${exp&&html`<div class="m-exp">
        ${flags.map(f3=>html`<div><b>${f3.label}:</b> ${f3.why}</div>`)}
        <div class="s">${[t4.account,t4.notes].filter(Boolean).join(" · ")}</div>
        <div class="m-expbtns">
          ${askedId&&html`<a class="btn pri" href=${`#/spending?tab=needs&question=${askedId}`}><${Icon} name="spark" size=${15} />Answer the helper</a>`}
          ${canFile&&html`<button class="btn" onClick=${()=>onFile(t4)}>File as…</button>`}
          <button class="btn" onClick=${()=>openAsk(askSentence(t4))}>Ask about it</button>
        </div>
      </div>`}
    </div>
  </div>`}function FilePicker({t:t4,categories,onClose}){let inc=t4.amount>0,list=categories.filter(c3=>!!c3.income===inc&&c3.name!==t4.category),groups=[...new Set(list.map(c3=>c3.group))];return html`<div class="m-sheet-back" onClick=${e3=>{e3.target===e3.currentTarget&&onClose()}}>
    <div class="m-pick-sheet card" role="dialog" aria-modal="true" aria-label=${`File ${t4.payee} as`}>
      <div class="m-split"><b>File “${t4.payee}” as…</b><button class="m-round small" aria-label="Close" onClick=${onClose}><${Icon} name="x" size=${16} /></button></div>
      <div class="m-sub">Finance files it for you (with your "Categorize transactions" switch on). You see the message before it's sent.</div>
      <div class="m-catlist">${groups.map(g3=>html`<div class="m-sect">${g3}</div>
        ${list.filter(c3=>c3.group===g3).map(c3=>html`<button class="m-row m-catpick" onClick=${()=>{onClose(),openAsk(fileSentence(t4,c3.name))}}>
          <span class="grow t">${c3.name}</span><${Icon} name="chev" size=${16} /></button>`)}`)}
        ${!list.length&&html`<div class="m-sub">No categories to pick from.</div>`}</div>
    </div>
  </div>`}function Spending({params={}}){let tx=useData(`/api/transactions${params.month?`?month=${params.month}`:""}`),qs=useData("/api/helper/questions"),[view,setView]=d2(VIEWS.some(v3=>v3[0]===params.tab)?params.tab:params.question?"needs":"all"),[searching,setSearching]=d2(!!params.search),[search,setSearch]=d2(""),[swiped,setSwiped]=d2(null),[expanded,setExpanded]=d2(null),[filing,setFiling]=d2(null);if(tx.loading&&!tx.data)return html`<${Loading} />`;if(tx.error)return html`<${Failed} error=${tx.error} retry=${tx.reload} />`;let d3=tx.data,openQs=qs.data?.open||[],asked2=new Map(openQs.map(q3=>[q3.transactionId,q3])),flagsOf=t4=>asked2.has(t4.id)?[{kind:"question",label:"The helper asks",tone:"ask",why:asked2.get(t4.id).question},...t4.flags]:t4.flags,reloadAll=()=>{qs.reload(),tx.reload()},q2=search.trim().toLowerCase(),rows=d3.items.filter(t4=>!t4.mirror&&(view!=="flagged"||flagsOf(t4).length)&&(!q2||`${t4.payee} ${t4.category||""} ${t4.account} ${t4.notes||""}`.toLowerCase().includes(q2))),days=[];for(let t4 of rows)days.at(-1)?.date!==t4.date&&days.push({date:t4.date,items:[]}),days.at(-1).items.push(t4);let flagged=d3.items.filter(t4=>!t4.mirror&&flagsOf(t4).length).length,pick=v3=>{setView(v3),setSwiped(null),setExpanded(null)};return html`
    <${Title} title="Spending" sub=${html`<${MonthStep} month=${d3.month} prev=${d3.prev} next=${d3.next} screen="spending" params=${{tab:view}} />`}>
      <${Round} label="Search" icon="search" on=${searching} onClick=${()=>{setSearching(!searching),searching&&setSearch("")}} />
    <//>
    ${searching&&html`<div class="m-search"><${Icon} name="search" size=${17} />
      <input type="search" value=${search} onInput=${e3=>setSearch(e3.target.value)} placeholder="Payee, category, account" aria-label="Search transactions" autofocus /></div>`}
    <div class="m-seg" role="tablist">${VIEWS.map(([k3,label])=>html`<button role="tab" aria-selected=${view===k3} class=${view===k3?"on":""} onClick=${()=>pick(k3)}>
      ${label}${k3==="needs"&&openQs.length>0&&html`<i class="numdot">${openQs.length}</i>`}${k3==="flagged"&&flagged>0&&html`<small>${flagged}</small>`}</button>`)}</div>
    ${view!=="flagged"&&html`<${Questions2} data=${qs.data} focus=${params.question||null} deck=${view==="all"} reload=${reloadAll} />`}
    ${view!=="needs"&&html`
      ${days.map(day2=>html`<div class="m-day">${dayLabel(day2.date,d3.today)}</div>
        ${day2.items.map(t4=>html`<${TxRow} key=${t4.id} t=${t4} flags=${flagsOf(t4)} askedId=${asked2.get(t4.id)?.id}
          swiped=${swiped} setSwiped=${setSwiped} expanded=${expanded} setExpanded=${setExpanded} onFile=${x2=>{setSwiped(null),setFiling(x2)}} />`)}`)}
      ${!days.length&&html`<div class="card empty"><b>${q2?"Nothing matches":view==="flagged"?"Nothing flagged":"No transactions this month"}</b>
        <span>${q2?"Try other words.":view==="flagged"?`Nothing in ${monthName(d3.month)} looks off.`:"Once your banks sync, they show up here."}</span></div>`}
      ${days.length>0&&html`<div class="m-sub">${plural(rows.length,"transaction","transactions")} · swipe one left (or tap it) to file it or ask about it</div>`}`}
    ${filing&&html`<${FilePicker} t=${filing} categories=${qs.data?.categories||[]} onClose=${()=>setFiling(null)} />`}`}var GROUP="categorizeGroup",ENDED={done:["ok","Done"],declined:["","You said no"],failed:["bad","Didn't work"]};function fromTo(r3){let b3=r3.before||{},a3=r3.after||{};return r3.action==="setBudget"&&b3.category?[[b3.category,`${money(b3.planned)} → ${money(a3.planned)}`]]:r3.action==="moveBudget"&&b3.from&&b3.to?[[b3.from.category,`${money(b3.from.planned)} → ${money(a3.from?.planned)}`],[b3.to.category,`${money(b3.to.planned)} → ${money(a3.to?.planned)}`]]:r3.action===GROUP?[["From",b3.from||plural(b3.count||0,"transaction","transactions")],["To",a3.category||r3.to||""]]:r3.from&&r3.to?[["Now",r3.from],["After",r3.to]]:[]}function RequestCard({r:r3,i:i3,n:n3,busy,onAnswer}){let end=ENDED[r3.status];return html`<div class="m-req" id=${`req-${r3.id}`}>
    <div class="m-reqtop"><${Pill} tone="ai" icon="spark">${end?"Helper asked":`Helper asks${n3>1?` · ${i3+1} of ${n3}`:""}`}<//>
      <span class="faint">${end?html`<${Pill} tone=${end[0]}>${end[1]}<//>`:ago(r3.at)}</span></div>
    <div class="m-reqwhat">${r3.summary}</div>
    <div class="m-fromto">${fromTo(r3).map(([k3,v3])=>html`<div><span>${k3}</span><b class="num">${v3}</b></div>`)}</div>
    ${r3.action===GROUP&&r3.before?.items?.length>0&&html`<details class="m-reqlist">
      <summary>See all ${r3.before.items.length}</summary>
      ${r3.before.items.map(t4=>html`<div class="m-row" key=${t4.id}><span class="s">${shortDate(t4.date)}</span>
        <span class="grow t">${t4.payee}</span><span class="amt num">${money(t4.amount,{decimals:!0})}</span></div>`)}
    </details>`}
    <div class="m-reqwhy">${r3.why?`${r3.why} `:""}${r3.action===GROUP?"Only categories change, no money moves.":"Only the plan changes, no money moves."}</div>
    ${r3.status==="failed"&&r3.error&&html`<div class="coral" style="font-size:13px;margin-top:6px">${r3.error}</div>`}
    ${r3.status==="pending"&&html`<div class="m-reqbtns">
      <button class="btn pri" disabled=${!!busy} onClick=${()=>onAnswer(r3,"approve")}><${Icon} name="faceid" size=${18} />Approve</button>
      ${r3.action!==GROUP&&html`<button class="btn" disabled=${!!busy} title="Approve, and make this kind of change without asking from now on"
        onClick=${()=>onAnswer(r3,"always")}>Always</button>`}
      <button class="btn ghost" disabled=${!!busy} onClick=${()=>onAnswer(r3,"no")}>No</button>
    </div>`}
  </div>`}function RequestDeck({focus,onChanged}){let{data,reload}=useData("/api/helper/requests"),[at,setAt]=d2(0),[dx,setDx]=d2(0),[busy,setBusy]=d2(!1),[msg,setMsg]=d2(null),pending=data?.pending||[],recent=(data?.recent||[]).filter(r3=>ENDED[r3.status]),wanted=focus&&data?[...pending,...recent].find(r3=>r3.id===focus):null;A2(()=>{let i4=pending.findIndex(r3=>r3.id===focus);i4>=0&&setAt(i4),focus&&data&&document.querySelector(".m-reqs")?.scrollIntoView({block:"start"})},[!!data,focus]);let n3=pending.length,i3=Math.min(at,Math.max(0,n3-1)),swipe=useSwipeX({onMove:d3=>{n3>1&&setDx(d3)},onEnd:(d3,fast)=>{setDx(0),d3<-60||fast&&d3<0?setAt(Math.min(n3-1,i3+1)):(d3>60||fast&&d3>0)&&setAt(Math.max(0,i3-1))}});if(!data)return null;let shownEnded=wanted&&!pending.includes(wanted)?wanted:null;if(!n3&&!shownEnded&&!focus&&!msg&&!recent.length)return null;let answer=async(r3,how)=>{setBusy(!0),setMsg(null);let quiet=!1;try{let res=(await api("/api/helper/requests/answer",{id:r3.id,answer:how})).result,filed=res.filed!==void 0?`Done: filed ${plural(res.filed,"transaction","transactions")} in Actual.`+(res.left?.length?` ${res.left.length} left alone (filed somewhere else since).`:""):null;setMsg(res.ok?{good:!0,text:res.status==="declined"?"Declined. The helper will be told.":filed||"Done: the plan is changed in Actual."}:{good:!1,text:`That didn't work: ${res.error}`})}catch(err){quiet=!!err.quiet,quiet||setMsg({good:!1,text:`That didn't work: ${err.message}`})}finally{setBusy(!1),quiet||(reload(),onChanged?.(),dispatchEvent(new Event(REQUESTS_CHANGED)))}};return html`<section class=${`card m-reqs${n3?" waiting":""}`} aria-label="Budget changes the helper asked for">
    ${focus&&!wanted&&html`<div class="notice"><${Icon} name="alert" size=${16} />This item is gone: it was answered a while ago or the helper took it back.</div>`}
    ${msg&&html`<div class=${`notice${msg.good?" ok":""}`} role="status">${msg.text}</div>`}
    ${shownEnded&&html`<${RequestCard} r=${shownEnded} i=${0} n=${1} busy=${busy} onAnswer=${answer} />`}
    ${n3>0&&html`<div class="m-deck" ...${swipe} style=${dx?{transform:`translateX(${dx}px)`,transition:"none"}:null}>
      <${RequestCard} key=${pending[i3].id} r=${pending[i3]} i=${i3} n=${n3} busy=${busy} onAnswer=${answer} /></div>`}
    ${n3>1&&html`<div class="m-dots">${pending.map((_3,k3)=>html`<button class=${k3===i3?"on":""} aria-label=${`Request ${k3+1} of ${n3}`}
      aria-current=${k3===i3?"true":null} onClick=${()=>setAt(k3)}></button>`)}</div>`}
    ${!n3&&!shownEnded&&html`<div class="m-sub">Nothing waiting for your OK.</div>`}
    ${recent.length>0&&html`<details class="m-recent"><summary>Answered lately (${recent.length})</summary>
      ${recent.slice(0,5).map(r3=>html`<div class="m-row"><span class="grow s">${r3.summary}</span><${Pill} tone=${ENDED[r3.status][0]}>${ENDED[r3.status][1]}<//></div>`)}
    </details>`}
  </section>`}function BudgetScreen({params={}}){let{data:d3,error,loading,reload}=useData(`/api/budget${params.month?`?month=${params.month}`:""}`);return loading&&!d3?html`<${Loading} />`:error?html`<${Failed} error=${error} retry=${reload} />`:html`
    <${Title} title="Budget" sub=${html`<${MonthStep} month=${d3.month} prev=${d3.prev} next=${d3.next} screen="budget" />`} />
    <${RequestDeck} focus=${params.request||null} onChanged=${reload} />
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
            <div class="m-split"><span>${c3.name}</span><span class="l num">${c3.left<0?html`<b class="coral">${money(-c3.left)} over</b>`:c3.planned===0&&c3.spent===0?html`<span class="faint">not planned</span>`:html`<b>${money(c3.left)}</b> left`}</span></div>
            <${Bar} frac=${c3.pct} over=${c3.left<0} />
          </div>`)}
        </section>`})}
      ${!d3.groups.length&&html`<div class="card empty"><b>No categories yet</b><span>Add categories in Actual.</span></div>`}
      ${d3.tax&&html`<section class="card m-group"><h3>Taxes set aside<span class="l num"><b>${money(d3.tax.moved)}</b> of ${money(d3.tax.should)}</span></h3>
        <${Bar} frac=${d3.tax.pct} color="var(--amber)" />
        <div class=${`m-sub ${d3.tax.toMove>0?"amber":"good"}`}>${d3.tax.toMove>0?`${money(d3.tax.toMove)} more to move this month`:"Covered this month"} · ${d3.tax.accountName}</div></section>`}
      <div class="m-sub">The plan itself is changed in Actual on your PC; from here only the helper's requests change it, after Face ID.</div>`:html`<div class="card empty"><b>No budget for this month</b><span>Actual hasn't got this month yet.</span></div>`}`}function subsLine(s3){if(!s3)return"Repeating charges and bills";let all=[...s3.items||[],...s3.found?.items||[]],rises=all.filter(x2=>(x2.flags||[]).some(f3=>f3.kind==="price-up")).length,monthly=(s3.monthly||0)+(s3.found?.monthly||0);return[plural(all.length,"charge","charges"),`${money(monthly)} a month`,rises?plural(rises,"price rise","price rises"):null].filter(Boolean).join(" · ")}function More({status={},counts={}}){let subs=useData("/api/subscriptions"),reports=useData("/api/reports"),settings=usePc("/v1/settings"),activity=usePc("/v1/activity",{limit:200}),today=status.today||localToday(),newest=(reports.data?.items||[]).find(r3=>r3.isNew),s3=settings.data,on=s3?s3.permissions.filter(p3=>p3.on).length:null,grants=s3?s3.grants.filter(g3=>g3.on).length:null,todayN=activity.data?activity.data.entries.filter(e3=>localToday(new Date(e3.at))===today).length:null,tile=(href,icon,title,sub,dot)=>html`<a class="m-tile" href=${href}>
    <${Icon} name=${icon} size=${21} />${dot&&html`<i class="navdot" aria-label=${plural(counts.reportsNew,"new report","new reports")}></i>`}
    <b>${title}</b><span>${sub}</span></a>`,row=(section,icon,label,value)=>html`<a class="m-setrow" href=${`#/settings?section=${section}`}>
    <${Icon} name=${icon} size=${19} /><span class="grow">${label}</span>${value!=null&&html`<span class="v">${value}</span>`}
    <${Icon} name="chev" size=${16} cls="faint" /></a>`;return html`
    <${Title} title="More" />
    <nav class="m-tiles" aria-label="More screens">
      ${tile("#/subscriptions","repeat","Subscriptions",subsLine(subs.data))}
      ${tile(newest?`#/reports?id=${newest.id}`:"#/reports","doc","Reports",newest?`${newest.kind==="monthly"?"Monthly":"Weekly"} report ready`:"The helper's weekly and monthly reports",counts.reportsNew>0)}
      ${tile("#/summary","chart","Monthly summary",`${monthName(addMonths(today.slice(0,7),-1))} in one look`)}
      ${tile("#/chat","spark","Chat history","Every answer, searchable")}
    </nav>
    <div class="m-sect">Settings</div>
    <nav class="card m-settings" aria-label="Settings">
      ${row("permissions","shield","Helper permissions",on==null?null:`${on} on`)}
      ${row("permissions","check","Always allowed",grants==null?null:grants?`${grants}`:"none")}
      ${row("activity","list","Helper activity",todayN==null?null:`${todayN} today`)}
      ${row("memory","brain","What the helper remembers",s3?.helper?.memory?`${s3.helper.memory.length}`:null)}
      ${row("pc","palette","Appearance",s3?`${themeOf(s3.theme).name} · on the PC`:null)}
      ${row("phones","phone","This phone",status.device?.name||null)}
      ${row("pc","bank","Banks, saving groups, data","on the PC")}
    </nav>
    <div class="m-sub">Bank sync, saving groups, the tax account and the look are set in GupBudget on your PC; here they're read only.</div>`}var TABS=[["home","Home","home"],["spending","Spending","list"],["budget","Budget","pie"],["more","More","more"]],SCREENS={home:Home,spending:Spending,budget:BudgetScreen,more:More,subscriptions:Subscriptions,reports:Reports,summary:Summary,settings:PhoneSettings,chat:ChatHistory},ALIAS={overview:"home",transactions:"spending",helper:"chat"},tabOf=screen=>TABS.some(t4=>t4[0]===screen)?screen:"more";function parseRoute(hash){let[raw,qs]=String(hash||"").replace(/^#\/?/,"").split("?"),path=Object.hasOwn(ALIAS,raw)?ALIAS[raw]:raw,params=Object.fromEntries(new URLSearchParams(qs||""));return raw==="transactions"&&params.tab==="in"&&delete params.tab,{screen:Object.hasOwn(SCREENS,path)?path:"home",params}}function screenStatus(s3){return{status:s3?.budget?.status||"ready",budgetName:s3?.budget?.name||null,syncError:s3?.budget?.syncError||null,today:s3?.today||null,helperAvailable:!!s3?.helper?.available,actualURL:null,phone:!0,device:s3?.device||null}}function PhoneApp({status,problem,onRetry,pcInfo,mock:mock2,onUnpair}){let[route,setRoute]=d2(()=>parseRoute(location.hash));A2(()=>{let onHash=()=>setRoute(parseRoute(location.hash));return addEventListener("hashchange",onHash),()=>removeEventListener("hashchange",onHash)},[]);let linked=route.params.request||route.params.question||route.params.section;A2(()=>{linked||scrollTo(0,0)},[route.screen,route.params.id,route.params.month,route.params.tab]);let counts=status?.counts||{},Screen=SCREENS[route.screen],tab=tabOf(route.screen),st=screenStatus(status),badge={spending:counts.questions,budget:counts.requests},tabLink=([key,label,icon])=>html`<a href=${`#/${key}`} class=${`m-tab${tab===key?" on":""}`} aria-current=${tab===key?"page":null}>
    <span class="m-tabic"><${Icon} name=${icon} size=${24} sw=${tab===key?2.1:1.8} />
      ${badge[key]>0&&html`<i class="numdot" aria-label=${`${badge[key]} waiting`}>${badge[key]}</i>`}
      ${key==="more"&&counts.reportsNew>0&&html`<i class="navdot" aria-label=${`${counts.reportsNew} new report${counts.reportsNew===1?"":"s"}`}></i>`}</span>
    <span>${label}</span></a>`;return html`<div class="m-app">
    ${problem&&html`<div class="notice m-problem" role="status"><${Icon} name="alert" size=${16} />
      <span>${problem.message} Trying again in ${problem.retryIn} s.</span>
      <button class="btn small" onClick=${onRetry}>Try now</button></div>`}
    ${st.syncError&&html`<div class="notice m-problem"><${Icon} name="alert" size=${16} />${st.syncError}</div>`}
    <main class="page m-page">
      <${Screen} key=${route.screen+JSON.stringify(route.params)} params=${route.params} status=${st} counts=${counts}
        pcInfo=${pcInfo} mock=${mock2} onUnpair=${onUnpair} />
    </main>
    <${AskSheet} />
    <nav class="m-tabs" aria-label="Screens">
      ${TABS.slice(0,2).map(tabLink)}
      <button class="m-asktab" type="button" aria-label="Ask Finance" onClick=${()=>openAsk()} onContextMenu=${e3=>e3.preventDefault()}>
        <span class="m-orb"><${Icon} name="spark" size=${28} sw=${2} /></span><span>Ask</span></button>
      ${TABS.slice(2).map(tabLink)}
    </nav>
  </div>`}var POLL_S=20,BUDGET={starting:"GupBudget on your PC is starting.","server-down":"Actual (the budget server) isn't running on your PC.","signed-out":"GupBudget on your PC is signed out of Actual. Sign in there.","no-budget":"There is no budget on your PC yet. Make one there.","pick-budget":"Pick a budget in GupBudget on your PC.","needs-setup":"Finish setting up GupBudget on your PC.",error:"GupBudget on your PC has a problem with the budget."},plural2=(n3,one,many)=>`${n3} ${n3===1?one:many}`;function Connected({pcInfo,mock:mock2,onUnpair}){let[st,setSt]=d2({status:null,error:null,retryIn:0}),[kick,setKick]=d2(0);A2(()=>{let live=!0,timer=null,fails=0,running=!1,again=!1,ctl2=new AbortController;async function poll2(){if(!(!live||document.hidden)){if(running){again=!0;return}running=!0,clearTimeout(timer);try{let s4=await pc("/v1/status",{signal:ctl2.signal,timeoutMs:1e4});if(!live)return;fails=0,isTheme(s4?.theme)&&applyTheme(s4.theme),setSt({status:s4,error:null,retryIn:0})}catch(e3){if(!live||e3.quiet||e3.status===401||e3.reason==="locked")return;fails++,setSt(x2=>({...x2,error:e3,retryIn:Math.min(60,5*2**(fails-1))}))}finally{running=!1,live&&(timer=setTimeout(poll2,(fails?Math.min(60,5*2**(fails-1)):POLL_S)*1e3)),live&&again&&(again=!1,poll2())}}}poll2();let back=()=>{document.hidden||poll2()};document.addEventListener("visibilitychange",back),addEventListener(REQUESTS_CHANGED,poll2);let off=onNotReady(poll2);return()=>{live=!1,ctl2.abort(),clearTimeout(timer),off(),document.removeEventListener("visibilitychange",back),removeEventListener(REQUESTS_CHANGED,poll2)}},[kick]);let{status:s3,error}=st,host=pcInfo.host||"your PC";if(s3?.budget?.status==="ready"){let problem=error&&{message:error.reason==="public_refused"?error.message:`Can't reach ${host}. ${error.message}`,retryIn:st.retryIn};return html`<${PhoneApp} status=${s3} problem=${problem} onRetry=${()=>setKick(k3=>k3+1)}
      pcInfo=${pcInfo} mock=${mock2} onUnpair=${onUnpair} />`}let reachable=!!s3&&!error,counts=s3?.counts||{},waiting=[counts.requests?plural2(counts.requests,"budget change to approve or decline","budget changes to approve or decline"):null,counts.questions?plural2(counts.questions,"question in Needs a look","questions in Needs a look"):null,counts.reportsNew?plural2(counts.reportsNew,"new report","new reports"):null].filter(Boolean);return html`<main class="m-home">
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
