/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},o=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${o}--\x3e`,r=new RegExp(`${o}|${n}`);class s{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],s=document.createTreeWalker(e.content,133,null,!1);let c=0,h=-1,p=0;const{strings:u,values:{length:m}}=t;for(;p<m;){const t=s.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let o=0;for(let t=0;t<i;t++)a(e[t].name,"$lit$")&&o++;for(;o-- >0;){const e=u[p],i=l.exec(e)[2],o=i.toLowerCase()+"$lit$",n=t.getAttribute(o);t.removeAttribute(o);const s=n.split(r);this.parts.push({type:"attribute",index:h,name:i,strings:s}),p+=s.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(o)>=0){const o=t.parentNode,n=e.split(r),s=n.length-1;for(let e=0;e<s;e++){let i,r=n[e];if(""===r)i=d();else{const t=l.exec(r);null!==t&&a(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(r)}o.insertBefore(i,t),this.parts.push({type:"node",index:++h})}""===n[s]?(o.insertBefore(d(),t),i.push(t)):t.data=n[s],p+=s}}else if(8===t.nodeType)if(t.data===o){const e=t.parentNode;null!==t.previousSibling&&h!==c||(h++,e.insertBefore(d(),t)),c=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(i.push(t),h--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(o,e+1));)this.parts.push({type:"node",index:-1}),p++}}else s.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const a=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},c=t=>-1!==t.index,d=()=>document.createComment(""),l=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:i},parts:o}=t,n=document.createTreeWalker(i,133,null,!1);let r=u(o),s=o[r],a=-1,c=0;const d=[];let l=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===l&&(l=null),e.has(t)&&(d.push(t),null===l&&(l=t)),null!==l&&c++;void 0!==s&&s.index===a;)s.index=null!==l?-1:s.index-c,r=u(o,r),s=o[r]}d.forEach(t=>t.parentNode.removeChild(t))}const p=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},u=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(c(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,g=t=>"function"==typeof t&&m.has(t),f={},v={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class _{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],o=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let r,s=0,a=0,d=n.nextNode();for(;s<o.length;)if(r=o[s],c(r)){for(;a<r.index;)a++,"TEMPLATE"===d.nodeName&&(i.push(d),n.currentNode=d.content),null===(d=n.nextNode())&&(n.currentNode=i.pop(),d=n.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(d.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,r.name,r.strings,this.options));s++}else this.__parts.push(void 0),s++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),w=` ${o} `;class b{constructor(t,e,i,o){this.strings=t,this.values=e,this.type=i,this.processor=o}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let r=0;r<t;r++){const t=this.strings[r],s=t.lastIndexOf("\x3c!--");i=(s>-1||i)&&-1===t.indexOf("--\x3e",s+1);const a=l.exec(t);e+=null===a?t+(i?w:n):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+o}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==y&&(e=y.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class T{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!S(t))return t}let o="";for(let n=0;n<e;n++){o+=t[n];const e=i[n];if(void 0!==e){const t=e.value;if(x(t)||!S(t))o+="string"==typeof t?t:String(t);else for(const e of t)o+="string"==typeof e?e:String(e)}}return o+=t[e],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||x(t)&&t===this.value||(this.value=t,g(t)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class M{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(d()),this.endNode=t.appendChild(d())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=d()),t.__insert(this.endNode=d())}insertAfterPart(t){t.__insert(this.startNode=d()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(x(t)?t!==this.value&&this.__commitText(t):t instanceof b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===v?(this.value=v,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof _&&this.value.template===e)this.value.update(t.values);else{const i=new _(e,t.processor,this.options),o=i._clone();i.update(t.values),this.__commitNode(o),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,o=0;for(const n of t)i=e[o],void 0===i&&(i=new M(this.options),e.push(i),0===o?i.appendIntoPart(this):i.insertAfterPart(e[o-1])),i.setValue(n),i.commit(),o++;o<e.length&&(e.length=o,this.clear(i&&i.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class A{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class E extends T{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new k(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class k extends C{}let P=!1;(()=>{try{const t={get capture(){return P=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class ${constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),o=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=N(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const N=t=>t&&(P?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function O(t){let e=R.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},R.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(o);return i=e.keyString.get(n),void 0===i&&(i=new s(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const R=new Map,D=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const V=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,o){const n=e[0];if("."===n){return new E(t,e.slice(1),i).parts}if("@"===n)return[new $(t,e.slice(1),o.eventContext)];if("?"===n)return[new A(t,e.slice(1),i)];return new T(t,e,i).parts}handleTextExpression(t){return new M(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const U=(t,...e)=>new b(t,e,"html",V)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,H=(t,e)=>`${t}--${e}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),I=!1);const z=t=>e=>{const i=H(e.type,t);let n=R.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},R.set(i,n));let r=n.stringsArray.get(e.strings);if(void 0!==r)return r;const a=e.strings.join(o);if(r=n.keyString.get(a),void 0===r){const i=e.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(i,t),r=new s(e,i),n.keyString.set(a,r)}return n.stringsArray.set(e.strings,r),r},F=["html","svg"],Y=new Set,L=(t,e,i)=>{Y.add(t);const o=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(o,t);const s=document.createElement("style");for(let t=0;t<r;t++){const e=n[t];e.parentNode.removeChild(e),s.textContent+=e.textContent}(t=>{F.forEach(e=>{const i=R.get(H(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),h(t,i)})})})(t);const a=o.content;i?function(t,e,i=null){const{element:{content:o},parts:n}=t;if(null==i)return void o.appendChild(e);const r=document.createTreeWalker(o,133,null,!1);let s=u(n),a=0,c=-1;for(;r.nextNode();){c++;for(r.currentNode===i&&(a=p(e),i.parentNode.insertBefore(e,i));-1!==s&&n[s].index===c;){if(a>0){for(;-1!==s;)n[s].index+=a,s=u(n,s);return}s=u(n,s)}}}(i,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(o,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(s,a.firstChild);const t=new Set;t.add(s),h(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const q={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},j=(t,e)=>e!==t&&(e==e||t==t),B={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:j};class W extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const o=this._attributeNameForProperty(i,e);void 0!==o&&(this._attributeToPropertyMap.set(o,i),t.push(o))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=B){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdateInternal(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||B}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=j){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,o=e.converter||q,n="function"==typeof o?o:o.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,o=e.converter;return(o&&o.toAttribute||q.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=B){const o=this.constructor,n=o._attributeNameForProperty(t,i);if(void 0!==n){const t=o._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,o=i._attributeToPropertyMap.get(t);if(void 0!==o){const t=i.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let o=!0;if(void 0!==t){const n=this.constructor;i=i||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}W.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const J=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){window.customElements.define(t,e)}}})(t,e),Z=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function X(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Z(t,e)}function G(t){return X({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class tt{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const et=(t,...e)=>{const i=e.reduce((e,i,o)=>e+(t=>{if(t instanceof tt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[o+1],t[0]);return new tt(i,Q)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const it={};class ot extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),o=[];i.forEach(t=>o.unshift(t)),this._styles=o}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!K){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new tt(String(e),Q)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==it&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return it}}ot.finalized=!0,ot.render=(t,e,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const n=o.scopeName,r=D.has(e),s=I&&11===e.nodeType&&!!e.host,a=s&&!Y.has(n),c=a?document.createDocumentFragment():e;if(((t,e,o)=>{let n=D.get(e);void 0===n&&(i(e,e.firstChild),D.set(e,n=new M(Object.assign({templateFactory:O},o))),n.appendInto(e)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:z(n)},o)),a){const t=D.get(c);D.delete(c);const o=t.value instanceof _?t.value.template:void 0;L(n,c,o),i(e,e.firstChild),e.appendChild(c),D.set(e,t)}!r&&s&&window.ShadyCSS.styleElement(e.host)};const nt=U`
<style>
  :host { 
    --heatColor: #EF5350;
    --coolColor: #07B9FF;
    --offColor: #CCCCCC;
  }
</style>
`;var rt=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,st="[^\\s]+",at=/\[([^]*?)\]/gm;function ct(t,e){for(var i=[],o=0,n=t.length;o<n;o++)i.push(t[o].substr(0,e));return i}var dt=function(t){return function(e,i){var o=i[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return o>-1?o:null}};function lt(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var o=0,n=e;o<n.length;o++){var r=n[o];for(var s in r)t[s]=r[s]}return t}var ht=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],pt=["January","February","March","April","May","June","July","August","September","October","November","December"],ut=ct(pt,3),mt={dayNamesShort:ct(ht,3),dayNames:ht,monthNamesShort:ut,monthNames:pt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},gt=lt({},mt),ft=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},vt={D:function(t){return String(t.getDate())},DD:function(t){return ft(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return ft(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return ft(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return ft(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return ft(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return ft(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return ft(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return ft(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return ft(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return ft(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return ft(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+ft(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+ft(Math.floor(Math.abs(e)/60),2)+":"+ft(Math.abs(e)%60,2)}},_t=function(t){return+t-1},yt=[null,"[1-9]\\d?"],wt=[null,st],bt=["isPm",st,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],xt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}],St=(dt("monthNamesShort"),dt("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var Tt=function(t,e,i){if(void 0===e&&(e=St.default),void 0===i&&(i={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var o=[];e=(e=St[e]||e).replace(at,(function(t,e){return o.push(e),"@@@"}));var n=lt(lt({},gt),i);return(e=e.replace(rt,(function(e){return vt[e](t,n)}))).replace(/@@@/g,(function(){return o.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();var Ct,Mt,At,Et,kt;!function(t){t.CLIMATE="climate"}(Ct||(Ct={}));!function(t){t.CURRENT_TEMPERATUE="current_temperature",t.CURRENT_HUMIDITY="current_humidity",t.TEMPERATUE="temperature",t.NAME="friendly_name",t.HVAC_ACTION="hvac_action",t.HVAC_MODES="hvac_modes",t.MIN_TEMP="min_temp",t.MAX_TEMP="max_temp"}(Mt||(Mt={})),function(t){t.HEAT="heat",t.COOL="cool",t.OFF="off"}(At||(At={})),function(t){t.HEAT="heating",t.COOL="cooling",t.IDLE="idle"}(Et||(Et={})),function(t){t.TURN_OFF="turn_off",t.SET_HVAC_MODE="set_hvac_mode",t.SET_TEMPERATURE="set_temperature"}(kt||(kt={}));class Pt extends class{constructor(t){this.domain=t}initialize(t,e){return null!=e.entity&&(this.hass=t,this.config=e,this.entity=t.states[e.entity],this.onInitialzied(),!0)}onInitialzied(){}getState(){return this.entity.state}getAttr(t){return this.entity.attributes[t]}callService(t,e={}){const i=Object.assign({entity_id:this.entity.entity_id},e);return this.hass.callService(this.domain,t,i)}}{constructor(){super(Ct.CLIMATE),this.hvacModes=Array(At.OFF)}onInitialzied(){super.onInitialzied(),this.hvacModes=Array(At.OFF),this.getAttr(Mt.HVAC_MODES).sort().forEach(t=>{"off"!=t&&this.hvacModes.push(t)}),this.hvacModes.reverse()}getAttr(t){return super.getAttr(t)}hvacMode(t){t===At.OFF?super.callService(kt.TURN_OFF):super.callService(kt.SET_HVAC_MODE,{hvac_mode:t})}isMode(t){return super.getState()===t}isAction(t){return super.getAttr(Mt.HVAC_ACTION)===t}getHvacModes(){return[...this.hvacModes]}setTargetTemp(t){this.callService(kt.SET_TEMPERATURE,{temperature:t})}temperatureRange(){const t=super.getAttr(Mt.MIN_TEMP),e=super.getAttr(Mt.MAX_TEMP);return{difference:e-t,min:t,max:e}}}class $t extends ot{constructor(){super(),this.icon="",this.isActive=!1,this.activeColor="",this.mode=At.OFF}render(){return U`
      <div class=" ${this.mode}" @click=${this._handleClick}><ha-icon icon="${this.getIcon()}"></ha-icon></div>
    `}getIcon(){if(""!==this.icon)return this.icon;switch(this.mode){case"heat":return"mdi:fire";case"cool":return"mdi:snowflake";case"off":return"mdi:power-standby";default:return""}}updated(){}_handleClick(t){t.stopPropagation(),this.isActive||"function"!=typeof this.onClick||this.onClick(this.mode)}static get styles(){return[et`
        :host {
          border-radius: 50%;
          width: 24px;
          height: 24px;
          padding: 6px;
          box-shadow: rgb(0, 0, 0) 0px 0px 4px 0px;
          display: inline-block;
          margin-left: 4px;
          margin-right: 4px;
          cursor: pointer;
        }
        :host([isActive]) {
          box-shadow: rgb(0, 0, 0) 0px 0px 7px -2px;
          cursor: default;
        }
        :host([mode='heat'][isActive]) {
          color: var(--heatColor);
        }
        :host([mode='cool'][isActive]) {
          color: var(--coolColor);
        }
        :host([mode='off'][isActive]) {
          color: var(--offColor);
        }
      `]}}t([X({type:String})],$t.prototype,"icon",void 0),t([X({type:Boolean})],$t.prototype,"isActive",void 0),t([X({type:String})],$t.prototype,"activeColor",void 0),t([X({type:Function})],$t.prototype,"onClick",void 0),t([X()],$t.prototype,"mode",void 0),customElements.define("climate-mode-button",$t);class Nt extends ot{constructor(){super(),this.targetTemp=0,this.hvacMode=At.OFF,this.selectedTargetTemp=0}render(){return U`
      <div id="circle">
        <div id="picker" class="hvac-${this.hvacMode}" style="transform: rotate(150deg);">
          <div id="picker-circle"></div>
          <div id="picker-value">${this.selectedTargetTemp}</div>
        </div>
      </div>
      <svg class="climate-card-deg" viewBox="0 0 120 120">
        <path
          stroke-width="1"
          stroke="rgb(49 49 49)"
          stroke-dasharray="2"
          fill="none"
          d="M60 4 a 52 52 0 0 1 0 115 a 52 52 0 0 1 0 -115"
        />
      </svg>
    `}firstUpdated(){this._initPicker().then(()=>{const t=this.tempToDeg(this.targetTemp);this.setPickerAngle(t)})}tempToDeg(t){const e=255/this.tempRange.difference*(t-this.tempRange.min);let i=150;return e>=0&&e<=30?i=e+150:e>30&&e<210?i=e-30-180:e>=210&&(i=e-210),i}transformPickerAngle(t){return t<=180&&t>=150?t-150:t>-180&&t<0?30+t+180:t<=45&&t>=0?210+t:0}updateDeviceTargetTemp(){this.onUpdateTargetTemp(this.selectedTargetTemp)}updateTargetTemp(t){const e=this.transformPickerAngle(t),i=255/this.tempRange.difference;this.selectedTargetTemp=Math.round(e/i)+this.tempRange.min}setPickerAngle(t){var e;null===(e=this.picker)||void 0===e||e.setAttribute("style","transform: rotate("+t+"deg)"),this.updateTargetTemp(t)}async _initPicker(){var t,e;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#circle"),o=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#picker");if(this.picker=o,null==o||null==i)return;const n=o.firstElementChild,r=i.getBoundingClientRect();if(null==n)throw new Error("Could not initialize picker");const s=r.left+r.width/2,a=r.top+r.height/2,c=(function(){const t=["t","WebkitT","MozT","msT","OT"],e=document.documentElement.style;let i;for(let o=0,n=t.length;o<n;o++)if((i=t[o]+"ransform")in e)return i}(),t=>{const e=function(t,e){const i=t-s,o=e-a;return 180*Math.atan2(o,i)/Math.PI}(t.pageX,t.pageY);e>45&&e<150||this.setPickerAngle(e)}),d=()=>{var t;document.removeEventListener("mouseup",d),document.removeEventListener("mousemove",c),null===(t=this.picker)||void 0===t||t.setAttribute("class",""),this.updateTimer=setTimeout(()=>this.updateDeviceTargetTemp(),1e3)},l=t=>{var e;t.preventDefault(),document.addEventListener("mousemove",c),document.addEventListener("mouseup",d),null===(e=this.picker)||void 0===e||e.setAttribute("class","active"),null!=this.updateTimer&&clearTimeout(this.updateTimer)};n.addEventListener("mousedown",l),i.addEventListener("mousedown",(function(t){t.target==n&&l(t)}))}static get styles(){return et`
      .climate-card-deg {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        z-index: 11;
        top: 0px;
      }
      #circle {
        position: relative;
        width: 170px;
        height: 170px;
        border-radius: 50%;
        z-index: 1000;
        top: 5px;
        left: 5px;
      }
      #picker {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 30px;
        margin-top: -15px;
        width: 50%;

        -webkit-transform-origin: center left;
        -moz-transform-origin: center left;
        -ms-transform-origin: center left;
        -o-transform-origin: center left;
        transform-origin: center left;
      }

      #picker.hvac-off {
        display: none
      }

      #picker-circle {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgb(154 40 40);
        margin: 0px 3px 0px auto;
        cursor: move;
        transition: all 300ms ease-in;
      }

      #picker-circle:hover {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: rgb(154 40 40);
        margin: 0px 3px 0px auto;
        cursor: move;
        transition: all 300ms ease-in;
      }

      #picker.active #picker-circle {
        background: rgb(255 0 0);
        box-shadow: 0 0 5px 1px red;
      }

      #picker-value {
        position: absolute;
        right: 16px;
        top: -3px;
        font-size: 10px;
        font-family: 'Roboto';
        transform: rotate(80deg);
        transition: all 200ms ease-in;
      }

      #picker.active #picker-value {
        font-size: 14px;
      }
    `}}t([X()],Nt.prototype,"targetTemp",void 0),t([X()],Nt.prototype,"hvacMode",void 0),t([X()],Nt.prototype,"tempRange",void 0),t([X({type:Function})],Nt.prototype,"onUpdateTargetTemp",void 0),t([G()],Nt.prototype,"selectedTargetTemp",void 0),customElements.define("climate-picker",Nt);class Ot extends ot{constructor(){super(),this.hvacMode=At.OFF,this.hvacAction=Et.IDLE}render(){let t="",e="";return this.hvacMode==At.HEAT?t="WARM":this.hvacMode==At.COOL&&(t="COLD"),this.hvacAction==Et.HEAT?(t="HEATING",e="mdi:fire"):this.hvacAction==Et.COOL&&(t="COOLING",e="mdi:snowflake"),U`
      <div class="climate-card-data ccd-state ${this.hvacMode}" style=${this.hvacAction==Et.IDLE?"margin: auto; opacity: 0.5":"vertical-align: text-bottom;"}>
        ${""!=e?U`<ha-icon icon="${e}" style="vertical-align: text-bottom;"></ha-icon>`:""}
        ${t}
      </div>
    `}static get styles(){return[et`
      .climate-card-data {
            position: absolute;
            margin: auto;
          }
      .climate-card-data.ccd-state {
        bottom: 21%;
        margin: auto;
        width: 100%;
        font-size: 16px;
        margin-left: -6px;
      }

      .climate-card-data.ccd-state.heat {
        color: var(--heatColor);
      }

      .climate-card-data.ccd-state.cool {
        color: var(--coolColor);
      }

      `]}}t([X()],Ot.prototype,"hvacMode",void 0),t([X()],Ot.prototype,"hvacAction",void 0),customElements.define("climate-display-status",Ot);class Rt extends ot{constructor(){super(),this.name="",this.currentTemp="",this.humidity=""}render(){return U`
        <div class="climate-card-screen ${this.hvacMode} ${this.hvacAction}">
          <div class="climate-card-handle-back"></div>
          <div class="climate-card-handle-shadow"></div>
          <div class="climate-card-handle">
            <div class="climate-card-data ccd-name">${this.name}</div>
            <div class="climate-card-data ccd-temp">${this.currentTemp}<div class="ccd-deg">°</div></div>
            <climate-display-status
              hvacMode=${this.hvacMode}
              hvacAction=${this.hvacAction}
            ></climate-display-status>
            <div class="climate-card-data ccd-humidity">${"undefined"!=this.humidity?U`
            <ha-icon icon="mdi:water-percent" style="--mdc-icon-size: 16px; height: 16px; width: 16px; vertical-align: text-top;"></ha-icon>${this.humidity}%
            `:""}</div>
            <climate-picker
              hvacMode=${this.hvacMode}
              targetTemp=${this.targetTemp}
              .tempRange=${this.tempRange}
              .onUpdateTargetTemp=${t=>this.onUpdateTargetTemp(t)}
              ></climate-picker>
          </div>
        </div>
        `}static get styles(){return[et`
          .climate-card-screen {
            overflow: hidden;
            position: relative;
            width: 100%;
            height: 80%;
            display: block;
          }
          .climate-card-handle-back {
            background-color: rgb(19, 19, 19);
            border-radius: 100%;
            width: 200px;
            height: 200px;
            display: center;
            vertical-align: middle;
            top: 50%;
            transform: translate(-50%, -50%);
            left: 50%;
            position: absolute;
          }
          .climate-card-handle-shadow {
            border-radius: 100%;
            width: 180px;
            height: 180px;
            display: center;
            vertical-align: middle;
            top: 50%;
            transform: translate(-50%, -50%);
            left: 50%;
            position: absolute;
            margin-top: 1%;
          }
          .climate-card-handle {
            background: rgb(19,19,19);
            /* background: linear-gradient(0deg, rgba(18,18,18,1) 0%, rgba(24,24,24,1) 100%); */
            background: linear-gradient(0deg, rgba(19,19,19,1) 0%, rgba(19,19,19,1) 49%, rgb(25 25 25) 50%);
            border-radius: 100%;
            width: 180px;
            height: 180px;
            display: center;
            vertical-align: middle;
            top: 50%;
            transform: translate(-50%, -50%);
            left: 50%;
            position: absolute;
            text-align: center;
          }
          .climate-card-screen.heating .climate-card-handle-shadow {
            animation: climate-card-heating 3s ease-in;
            animation-iteration-count: infinite;
          }

          .climate-card-screen.heat .climate-card-handle-shadow {
            border: 1px solid rgb(156 115 0 / 20%);
            /* background: #ff9007;
            box-shadow: rgba(255, 177, 0, 100%) 0px 4px 14px -2px; */
            background: #ff8f076a;
            box-shadow: rgba(255, 177, 0, 30%) 0px 4px 14px -2px;
          }

          .climate-card-screen.cooling .climate-card-handle-shadow {
            animation: climate-card-cooling 3s ease-in;
            animation-iteration-count: infinite;
          }

          .climate-card-screen.cool .climate-card-handle-shadow {
            border: 1px solid rgb(7 186 255 / 20%);
            /* background: rgb(7 186 255);
            box-shadow: rgb(0 161 255) 0px 4px 14px -2px; */
            background: rgba(7, 186, 255, 30%);
            box-shadow: rgba(0, 161, 255, 30%) 0px 4px 14px -2px;
          }

          .climate-card-data {
            position: absolute;
            margin: auto;
          }

          .climate-card-data.ccd-name {
            color: #cccccc47;
            text-align: center;
            width: 100%;
            font-size: 9px;
            font-family: 'Roboto';
            top: 24px;
          }
          
          .climate-card-data.ccd-temp {
            top: 40%;
            margin: auto;
            color: rgb(204 204 204);
            width: 100%;
            font-size: 56px;
            margin-left: 6px;
          }
          .climate-card-data.ccd-humidity {
            bottom: 8%;
            margin: auto;
            color: rgb(202 202 202 / 62%);
            width: 100%
          }
          .ccd-deg {
            font-size: 30px;
            transform: translateY(-30px);
            display: inline-block;
          }

          @keyframes climate-card-heating {
            0% {
              background: #ff9007;
              box-shadow: rgba(255, 177, 0, 100%) 0px 4px 14px -2px;
            }

            60% {
              background: #ff8f076a;
              box-shadow: rgba(255, 177, 0, 30%) 0px 4px 14px -2px;
            }

            100% {
              background: #ff9007;
              box-shadow: rgba(255, 177, 0, 100%) 0px 4px 14px -2px;
            }
          }

          @keyframes climate-card-cooling {
            0% {
              background: rgb(7 186 255);
              box-shadow: rgb(0 161 255) 0px 4px 14px -2px;
            }

            60% {
              background: rgba(7, 186, 255, 30%);
              box-shadow: rgba(0, 161, 255, 30%) 0px 4px 14px -2px;
            }

            100% {
              background: rgb(7 186 255);
              box-shadow: rgb(0 161 255) 0px 4px 14px -2px;
            }
          }
        `]}}t([X()],Rt.prototype,"name",void 0),t([X()],Rt.prototype,"currentTemp",void 0),t([X()],Rt.prototype,"humidity",void 0),t([X()],Rt.prototype,"targetTemp",void 0),t([X()],Rt.prototype,"tempRange",void 0),t([X()],Rt.prototype,"hvacMode",void 0),t([X()],Rt.prototype,"hvacAction",void 0),t([X({type:Function})],Rt.prototype,"onUpdateTargetTemp",void 0),customElements.define("climate-display",Rt);const Dt={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},actions:{icon:"gesture-tap-hold",name:"Actions",secondary:"Perform actions based on tapping/clicking",show:!1,options:{tap:{icon:"gesture-tap",name:"Tap",secondary:"Set the action to perform on tap",show:!1},hold:{icon:"gesture-tap-hold",name:"Hold",secondary:"Set the action to perform on hold",show:!1},double_tap:{icon:"gesture-double-tap",name:"Double Tap",secondary:"Set the action to perform on double tap",show:!1}}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the name, icon, etc",show:!1}};let Vt=class extends ot{constructor(){super(...arguments),this._initialized=!1}setConfig(t){this._config=t,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _show_warning(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_warning)||!1}get _show_error(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_error)||!1}get _tap_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.tap_action)||{action:"more-info"}}get _hold_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.hold_action)||{action:"none"}}get _double_tap_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.double_tap_action)||{action:"none"}}render(){if(!this.hass||!this._helpers)return U``;this._helpers.importMoreInfoControl("climate");const t=Object.keys(this.hass.states).filter(t=>"climate"===t.substr(0,t.indexOf(".")));return U`
      <div class="card-config">
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Dt.required.icon}></ha-icon>
            <div class="title">${Dt.required.name}</div>
          </div>
          <div class="secondary">${Dt.required.secondary}</div>
        </div>
        ${Dt.required.show?U`
              <div class="values">
                <paper-dropdown-menu
                  label="Entity (Required)"
                  @value-changed=${this._valueChanged}
                  .configValue=${"entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._entity)}>
                    ${t.map(t=>U`
                        <paper-item>${t}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"actions"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Dt.actions.icon}></ha-icon>
            <div class="title">${Dt.actions.name}</div>
          </div>
          <div class="secondary">${Dt.actions.secondary}</div>
        </div>
        ${Dt.actions.show?U`
              <div class="values">
                <div class="option" @click=${this._toggleAction} .option=${"tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Dt.actions.options.tap.icon}></ha-icon>
                    <div class="title">${Dt.actions.options.tap.name}</div>
                  </div>
                  <div class="secondary">${Dt.actions.options.tap.secondary}</div>
                </div>
                ${Dt.actions.options.tap.show?U`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"hold"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Dt.actions.options.hold.icon}></ha-icon>
                    <div class="title">${Dt.actions.options.hold.name}</div>
                  </div>
                  <div class="secondary">${Dt.actions.options.hold.secondary}</div>
                </div>
                ${Dt.actions.options.hold.show?U`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"double_tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Dt.actions.options.double_tap.icon}></ha-icon>
                    <div class="title">${Dt.actions.options.double_tap.name}</div>
                  </div>
                  <div class="secondary">${Dt.actions.options.double_tap.secondary}</div>
                </div>
                ${Dt.actions.options.double_tap.show?U`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"appearance"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Dt.appearance.icon}></ha-icon>
            <div class="title">${Dt.appearance.name}</div>
          </div>
          <div class="secondary">${Dt.appearance.secondary}</div>
        </div>
        ${Dt.appearance.show?U`
              <div class="values">
                <paper-input
                  label="Name (Optional)"
                  .value=${this._name}
                  .configValue=${"name"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <br />
                <ha-formfield .label=${"Toggle warning "+(this._show_warning?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._show_warning}
                    .configValue=${"show_warning"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
                <ha-formfield .label=${"Toggle error "+(this._show_error?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._show_error}
                    .configValue=${"show_error"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
              </div>
            `:""}
      </div>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_toggleAction(t){this._toggleThing(t,Dt.actions.options)}_toggleOption(t){this._toggleThing(t,Dt)}_toggleThing(t,e){const i=!e[t.target.option].show;for(const[t]of Object.entries(e))e[t].show=!1;e[t.target.option].show=i,this._toggle=!this._toggle}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this["_"+e.configValue]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),function(t,e,i,o){o=o||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});n.detail=i,t.dispatchEvent(n)}(this,"config-changed",{config:this._config}))}static get styles(){return et`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }
      ha-formfield {
        padding-bottom: 8px;
      }
    `}};t([X({attribute:!1})],Vt.prototype,"hass",void 0),t([G()],Vt.prototype,"_config",void 0),t([G()],Vt.prototype,"_toggle",void 0),t([G()],Vt.prototype,"_helpers",void 0),Vt=t([J("climate-card-editor")],Vt);var Ut={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},Ht={common:Ut},It={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},zt={common:It};const Ft={en:Object.freeze({__proto__:null,common:Ut,default:Ht}),nb:Object.freeze({__proto__:null,common:It,default:zt})};function Yt(t,e="",i=""){const o=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=t.split(".").reduce((t,e)=>t[e],Ft[o])}catch(e){n=t.split(".").reduce((t,e)=>t[e],Ft.en)}return void 0===n&&(n=t.split(".").reduce((t,e)=>t[e],Ft.en)),""!==e&&""!==i&&(n=n.replace(e,i)),n}console.info(`%c  CLIMATE-CARD \n%c  ${Yt("common.version")} 1.0.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"climate-card",name:"Climate Card",description:"A Climate Card to monitor and config climate entity"});let Lt=class extends ot{constructor(){super(...arguments),this.deviceManger=new Pt}static async getConfigElement(){return document.createElement("climate-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t)throw new Error(Yt("common.invalid_configuration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this.config=Object.assign({name:"Climate"},t)}shouldUpdate(t){return!!this.config&&function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var o=e.get("hass");return!o||o.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}render(){return this.config.show_warning?this._showWarning(Yt("common.show_warning")):this.config.show_error?this._showError(Yt("common.show_error")):(this.deviceManger.initialize(this.hass,this.config),U`
      ${nt}
      <ha-card>
        <div class="climate-card">
          <climate-display
            name = ${this.deviceManger.getAttr(Mt.NAME)}
            currentTemp = ${this.deviceManger.getAttr(Mt.CURRENT_TEMPERATUE)}
            targetTemp=${this.deviceManger.getAttr(Mt.TEMPERATUE)}
            .tempRange=${this.deviceManger.temperatureRange()}
            humidity = ${this.deviceManger.getAttr(Mt.CURRENT_HUMIDITY)}
            hvacMode=${this.deviceManger.getState()}
            hvacAction=${this.deviceManger.getAttr(Mt.HVAC_ACTION)}
            .onUpdateTargetTemp=${t=>this.deviceManger.setTargetTemp(t)}
          ></climate-display>
          <div class="climate-card-controls">
          ${this.deviceManger.getHvacModes().map(t=>U`<climate-mode-button 
              mode=${t}
              ?isActive=${this.deviceManger.isMode(t)} 
              .onClick=${t=>this.deviceManger.hvacMode(t)}
            ></climate-mode-button>`)}
          </div>
        </div>
      </ha-card>
    `)}_showWarning(t){return U`
      <hui-warning>${t}</hui-warning>
    `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),U`
      ${e}
    `}static get styles(){return et`
      .climate-card {
        width: 100%;
        height: 280px;
        position: relative;
        font-family: "Oswald" !important;
      }
      
      .climate-card-controls {
        text-align: center;
        width:100%

      }

      .climate-card-control-button {
        border-radius: 50%;
        width: 24px;
        height: 24px;
        padding: 6px;
        box-shadow: rgb(0, 0, 0) 0px 0px 4px 0px;
        display: inline-block;
        margin-left: 4px;
        margin-right: 4px;
        cursor: pointer;
      }

      .climate-card-control-button.active {
          box-shadow: rgb(0, 0, 0) 0px 0px 7px -2px;
          cursor: default;
      }

      .climate-card-control-button-heating.active {
        color: var(--heatColor);
      }

      .climate-card-control-button-cooling.active {
        color: var(--coolColor);
      }
    `}};t([G()],Lt.prototype,"config",void 0),t([X()],Lt.prototype,"hass",void 0),Lt=t([J("climate-card")],Lt);export{Lt as ClimateCard};
