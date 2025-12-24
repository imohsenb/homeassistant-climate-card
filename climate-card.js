function t(t,e,i,o){var s,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new r(i,t,o)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:c,defineProperty:d,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,g=globalThis,m=g.trustedTypes,v=m?m.emptyScript:"",f=g.reactiveElementPolyfillSupport,_=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!c(t,e),b={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&d(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:s}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const r=o?.call(this);s?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(i)t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of o){const o=document.createElement("style"),s=e.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=i.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=o;const r=s.fromAttribute(e,t.type);this[o]=r??this._$Ej?.get(o)??r,this._$Em=null}}requestUpdate(t,e,i,o=!1,s){if(void 0!==t){const r=this.constructor;if(!1===o&&(s=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??y)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:s},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==s||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[_("elementProperties")]=new Map,A[_("finalized")]=new Map,f?.({ReactiveElement:A}),(g.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,x=t=>t,E=w.trustedTypes,T=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+S,k=`<${M}>`,O=document,P=()=>O.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,H="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,I=/>/g,D=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,V=/"/g,j=/^(?:script|style|textarea|title)$/i,q=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),W=new WeakMap,Y=O.createTreeWalker(O,129);function X(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==T?T.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,o=[];let s,r=2===e?"<svg>":3===e?"<math>":"",n=N;for(let e=0;e<i;e++){const i=t[e];let a,c,d=-1,l=0;for(;l<i.length&&(n.lastIndex=l,c=n.exec(i),null!==c);)l=n.lastIndex,n===N?"!--"===c[1]?n=z:void 0!==c[1]?n=I:void 0!==c[2]?(j.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=D):void 0!==c[3]&&(n=D):n===D?">"===c[0]?(n=s??N,d=-1):void 0===c[1]?d=-2:(d=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?D:'"'===c[3]?V:L):n===V||n===L?n=D:n===z||n===I?n=N:(n=D,s=void 0);const h=n===D&&t[e+1].startsWith("/>")?" ":"";r+=n===N?i+k:d>=0?(o.push(a),i.slice(0,d)+C+i.slice(d)+S+h):i+S+(-2===d?e:h)}return[X(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class J{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,r=0;const n=t.length-1,a=this.parts,[c,d]=G(t,e);if(this.el=J.createElement(c,i),Y.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=Y.nextNode())&&a.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(C)){const e=d[r++],i=o.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?et:"?"===n[1]?it:"@"===n[1]?ot:tt}),o.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:s}),o.removeAttribute(t));if(j.test(o.tagName)){const t=o.textContent.split(S),e=t.length-1;if(e>0){o.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],P()),Y.nextNode(),a.push({type:2,index:++s});o.append(t[e],P())}}}else if(8===o.nodeType)if(o.data===M)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(S,t+1));)a.push({type:7,index:s}),t+=S.length-1}s++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,o){if(e===F)return e;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const r=R(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(t),s._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(e=K(t,s._$AS(t,e.values),s,o)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??O).importNode(e,!0);Y.currentNode=o;let s=Y.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Q(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new st(s,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(s=Y.nextNode(),r++)}return Y.currentNode=O,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),R(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Z(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new J(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new Q(this.O(P()),this.O(P()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,s){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(t,e=this,i,o){const s=this.strings;let r=!1;if(void 0===s)t=K(this,t,e,0),r=!R(t)||t!==this._$AH&&t!==F,r&&(this._$AH=t);else{const o=t;let n,a;for(t=s[0],n=0;n<s.length-1;n++)a=K(this,o[i+n],e,n),a===F&&(a=this._$AH[n]),r||=!R(a)||a!==this._$AH[n],a===B?t=B:t!==B&&(t+=(a??"")+s[n+1]),this._$AH[n]=a}r&&!o&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class ot extends tt{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??B)===F)return;const i=this._$AH,o=t===B&&i!==B||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==B&&(i===B||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const rt=w.litHtmlPolyfillSupport;rt?.(J,Q),(w.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let s=o._$litPart$;if(void 0===s){const t=i?.renderBefore??null;o._$litPart$=s=new Q(e.insertBefore(P(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const ct=nt.litElementPolyfillSupport;ct?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");const dt=q`
<style>
  :host { 
    --heatColor: #EF5350;
    --coolColor: #07B9FF;
    --offColor: #CCCCCC;
  }
</style>
`
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,lt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:y},pt=(t=ht,e,i)=>{const{kind:o,metadata:s}=i;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,s,t,!0,i)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];e.call(this,i),this.requestUpdate(o,s,t,!0,i)}}throw Error("Unsupported decorator location: "+o)};function ut(t){return(e,i)=>"object"==typeof i?pt(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(t){return ut({...t,state:!0,attribute:!1})}var mt,vt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(mt||(mt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(vt||(vt={}));var ft,_t,$t,yt,bt;!function(t){t.CLIMATE="climate"}(ft||(ft={}));class At{constructor(t){this.domain=t}initialize(t,e){return null!=e.entity&&(this.hass=t,this.config=e,this.entity=t.states[e.entity],this.onInitialzied(),!0)}onInitialzied(){}getState(){return this.entity.state}getAttr(t){return this.entity.attributes[t]}callService(t,e={}){const i={entity_id:this.entity.entity_id,...e};return this.hass.callService(this.domain,t,i)}}!function(t){t.CURRENT_TEMPERATUE="current_temperature",t.CURRENT_HUMIDITY="current_humidity",t.TEMPERATUE="temperature",t.NAME="friendly_name",t.HVAC_ACTION="hvac_action",t.HVAC_MODES="hvac_modes",t.MIN_TEMP="min_temp",t.MAX_TEMP="max_temp"}(_t||(_t={})),function(t){t.HEAT="heat",t.COOL="cool",t.OFF="off"}($t||($t={})),function(t){t.HEAT="heating",t.COOL="cooling",t.IDLE="idle"}(yt||(yt={})),function(t){t.TURN_OFF="turn_off",t.SET_HVAC_MODE="set_hvac_mode",t.SET_TEMPERATURE="set_temperature"}(bt||(bt={}));class wt extends At{constructor(){super(ft.CLIMATE),this.hvacModes=Array($t.OFF)}onInitialzied(){super.onInitialzied(),this.hvacModes=Array($t.OFF),this.getAttr(_t.HVAC_MODES).sort().forEach(t=>{"off"!=t&&this.hvacModes.push(t)}),this.hvacModes.reverse()}getAttr(t){return super.getAttr(t)}hvacMode(t){t===$t.OFF?super.callService(bt.TURN_OFF):super.callService(bt.SET_HVAC_MODE,{hvac_mode:t})}isMode(t){return super.getState()===t}isAction(t){return super.getAttr(_t.HVAC_ACTION)===t}getHvacModes(){return[...this.hvacModes]}setTargetTemp(t){this.callService(bt.SET_TEMPERATURE,{temperature:t})}temperatureRange(){const t=super.getAttr(_t.MIN_TEMP),e=super.getAttr(_t.MAX_TEMP);return{difference:e-t,min:t,max:e}}}class xt extends at{constructor(){super(),this.icon="",this.isActive=!1,this.activeColor="",this.mode=$t.OFF}render(){return q`
      <div class=" ${this.mode}" @click=${this._handleClick}><ha-icon icon="${this.getIcon()}"></ha-icon></div>
    `}getIcon(){if(""!==this.icon)return this.icon;switch(this.mode){case"heat":return"mdi:fire";case"cool":return"mdi:snowflake";case"off":return"mdi:power-standby";default:return""}}updated(){}_handleClick(t){t.stopPropagation(),this.isActive||"function"!=typeof this.onClick||this.onClick(this.mode)}static get styles(){return[n`
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
      `]}}t([ut({type:String})],xt.prototype,"icon",void 0),t([ut({type:Boolean})],xt.prototype,"isActive",void 0),t([ut({type:String})],xt.prototype,"activeColor",void 0),t([ut({attribute:!1})],xt.prototype,"onClick",void 0),t([ut()],xt.prototype,"mode",void 0),customElements.define("climate-mode-button",xt);class Et extends at{constructor(){super(),this.targetTemp=0,this.hvacMode=$t.OFF,this.selectedTargetTemp=0}render(){return q`
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
    `}firstUpdated(){this._initPicker().then(()=>{const t=this.tempToDeg(this.targetTemp);this.setPickerAngle(t)})}tempToDeg(t){const e=255/this.tempRange.difference*(t-this.tempRange.min);let i=150;return e>=0&&e<=30?i=e+150:e>30&&e<210?i=e-30-180:e>=210&&(i=e-210),i}transformPickerAngle(t){return t<=180&&t>=150?t-150:t>-180&&t<0?30+t+180:t<=45&&t>=0?210+t:0}updateDeviceTargetTemp(){this.onUpdateTargetTemp?.(this.selectedTargetTemp)}updateTargetTemp(t){const e=this.transformPickerAngle(t),i=255/this.tempRange.difference;this.selectedTargetTemp=Math.round(e/i)+this.tempRange.min}setPickerAngle(t){this.picker?.setAttribute("style","transform: rotate("+t+"deg)"),this.updateTargetTemp(t)}async _initPicker(){const t=this.shadowRoot?.querySelector("#circle"),e=this.shadowRoot?.querySelector("#picker");if(this.picker=e,null==e||null==t)return;const i=e.firstElementChild,o=t.getBoundingClientRect();if(null==i)throw new Error("Could not initialize picker");const s=o.left+o.width/2,r=o.top+o.height/2;!function(){const t=["t","WebkitT","MozT","msT","OT"],e=document.documentElement.style;let i;for(let o=0,s=t.length;o<s;o++)if((i=t[o]+"ransform")in e)return i}();const n=t=>{const e=function(t,e){const i=t-s,o=e-r;return 180*Math.atan2(o,i)/Math.PI}(t.pageX,t.pageY);e>45&&e<150||this.setPickerAngle(e)},a=()=>{document.removeEventListener("mouseup",a),document.removeEventListener("mousemove",n),this.picker?.setAttribute("class",""),this.updateTimer=setTimeout(()=>this.updateDeviceTargetTemp(),1e3)},c=t=>{t.preventDefault(),document.addEventListener("mousemove",n),document.addEventListener("mouseup",a),this.picker?.setAttribute("class","active"),null!=this.updateTimer&&clearTimeout(this.updateTimer)};i.addEventListener("mousedown",c),t.addEventListener("mousedown",function(t){t.target==i&&c(t)})}static get styles(){return n`
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
    `}}t([ut()],Et.prototype,"targetTemp",void 0),t([ut()],Et.prototype,"hvacMode",void 0),t([ut()],Et.prototype,"tempRange",void 0),t([ut({attribute:!1})],Et.prototype,"onUpdateTargetTemp",void 0),t([gt()],Et.prototype,"selectedTargetTemp",void 0),customElements.define("climate-picker",Et);class Tt extends at{constructor(){super(),this.hvacMode=$t.OFF,this.hvacAction=yt.IDLE}render(){let t="",e="";return this.hvacMode==$t.HEAT?t="WARM":this.hvacMode==$t.COOL&&(t="COLD"),this.hvacAction==yt.HEAT?(t="HEATING",e="mdi:fire"):this.hvacAction==yt.COOL&&(t="COOLING",e="mdi:snowflake"),q`
      <div class="climate-card-data ccd-state ${this.hvacMode}" style=${this.hvacAction==yt.IDLE?"margin: auto; opacity: 0.5":"vertical-align: text-bottom;"}>
        ${""!=e?q`<ha-icon icon="${e}" style="vertical-align: text-bottom;"></ha-icon>`:""}
        ${t}
      </div>
    `}static get styles(){return[n`
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

      `]}}t([ut()],Tt.prototype,"hvacMode",void 0),t([ut()],Tt.prototype,"hvacAction",void 0),customElements.define("climate-display-status",Tt);class Ct extends at{constructor(){super(),this.name="",this.currentTemp=""}render(){return q`
        <div class="climate-card-screen ${this.hvacMode} ${this.hvacAction}">
          <div class="climate-card-handle-back"></div>
          <div class="climate-card-handle-shadow"></div>
          <div class="climate-card-handle">
            <div class="climate-card-data ccd-name">${this.name}</div>
            <div class="climate-card-data ccd-temp">${this.currentTemp}<div class="ccd-deg">°</div></div>
            <climate-display-status
              .hvacMode=${this.hvacMode}
              .hvacAction=${this.hvacAction}
            ></climate-display-status>
            <div class="climate-card-data ccd-humidity">${void 0!==this.humidity&&null!==this.humidity&&""!==this.humidity?q`
            <ha-icon icon="mdi:water-percent" style="--mdc-icon-size: 16px; height: 16px; width: 16px; vertical-align: text-top;"></ha-icon>${this.humidity}%
            `:""}</div>
            <climate-picker
              .hvacMode=${this.hvacMode}
              .targetTemp=${this.targetTemp??0}
              .tempRange=${this.tempRange}
              .onUpdateTargetTemp=${t=>this.onUpdateTargetTemp?.(t)}
              ></climate-picker>
          </div>
        </div>
        `}static get styles(){return[n`
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
        `]}}t([ut()],Ct.prototype,"name",void 0),t([ut()],Ct.prototype,"currentTemp",void 0),t([ut()],Ct.prototype,"humidity",void 0),t([ut()],Ct.prototype,"targetTemp",void 0),t([ut({attribute:!1})],Ct.prototype,"tempRange",void 0),t([ut()],Ct.prototype,"hvacMode",void 0),t([ut()],Ct.prototype,"hvacAction",void 0),t([ut({attribute:!1})],Ct.prototype,"onUpdateTargetTemp",void 0),customElements.define("climate-display",Ct);const St={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},actions:{icon:"gesture-tap-hold",name:"Actions",secondary:"Perform actions based on tapping/clicking",show:!1,options:{tap:{icon:"gesture-tap",name:"Tap",secondary:"Set the action to perform on tap",show:!1},hold:{icon:"gesture-tap-hold",name:"Hold",secondary:"Set the action to perform on hold",show:!1},double_tap:{icon:"gesture-double-tap",name:"Double Tap",secondary:"Set the action to perform on double tap",show:!1}}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the name, icon, etc",show:!1}};let Mt=class extends at{constructor(){super(...arguments),this._initialized=!1}setConfig(t){this._config=t,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){return this._config?.name||""}get _entity(){return this._config?.entity||""}get _show_warning(){return this._config?.show_warning||!1}get _show_error(){return this._config?.show_error||!1}get _tap_action(){return this._config?.tap_action||{action:"more-info"}}get _hold_action(){return this._config?.hold_action||{action:"none"}}get _double_tap_action(){return this._config?.double_tap_action||{action:"none"}}render(){if(!this.hass||!this._helpers)return q``;this._helpers.importMoreInfoControl("climate");const t=Object.keys(this.hass.states).filter(t=>"climate"===t.substr(0,t.indexOf(".")));return q`
      <div class="card-config">
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${St.required.icon}`}></ha-icon>
            <div class="title">${St.required.name}</div>
          </div>
          <div class="secondary">${St.required.secondary}</div>
        </div>
        ${St.required.show?q`
              <div class="values">
                <paper-dropdown-menu
                  label="Entity (Required)"
                  @value-changed=${this._valueChanged}
                  .configValue=${"entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._entity)}>
                    ${t.map(t=>q`
                        <paper-item>${t}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"actions"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${St.actions.icon}`}></ha-icon>
            <div class="title">${St.actions.name}</div>
          </div>
          <div class="secondary">${St.actions.secondary}</div>
        </div>
        ${St.actions.show?q`
              <div class="values">
                <div class="option" @click=${this._toggleAction} .option=${"tap"}>
                  <div class="row">
                    <ha-icon .icon=${`mdi:${St.actions.options.tap.icon}`}></ha-icon>
                    <div class="title">${St.actions.options.tap.name}</div>
                  </div>
                  <div class="secondary">${St.actions.options.tap.secondary}</div>
                </div>
                ${St.actions.options.tap.show?q`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"hold"}>
                  <div class="row">
                    <ha-icon .icon=${`mdi:${St.actions.options.hold.icon}`}></ha-icon>
                    <div class="title">${St.actions.options.hold.name}</div>
                  </div>
                  <div class="secondary">${St.actions.options.hold.secondary}</div>
                </div>
                ${St.actions.options.hold.show?q`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"double_tap"}>
                  <div class="row">
                    <ha-icon .icon=${`mdi:${St.actions.options.double_tap.icon}`}></ha-icon>
                    <div class="title">${St.actions.options.double_tap.name}</div>
                  </div>
                  <div class="secondary">${St.actions.options.double_tap.secondary}</div>
                </div>
                ${St.actions.options.double_tap.show?q`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"appearance"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${St.appearance.icon}`}></ha-icon>
            <div class="title">${St.appearance.name}</div>
          </div>
          <div class="secondary">${St.appearance.secondary}</div>
        </div>
        ${St.appearance.show?q`
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
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_toggleAction(t){this._toggleThing(t,St.actions.options)}_toggleOption(t){this._toggleThing(t,St)}_toggleThing(t,e){const i=!e[t.target.option].show;for(const[t]of Object.entries(e))e[t].show=!1;e[t.target.option].show=i,this._toggle=!this._toggle}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this[`_${e.configValue}`]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config={...this._config,[e.configValue]:void 0!==e.checked?e.checked:e.value}),function(t,e,i,o){o=o||{},i=null==i?{}:i;var s=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});s.detail=i,t.dispatchEvent(s)}(this,"config-changed",{config:this._config}))}static get styles(){return n`
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
    `}};t([ut({attribute:!1})],Mt.prototype,"hass",void 0),t([gt()],Mt.prototype,"_config",void 0),t([gt()],Mt.prototype,"_toggle",void 0),t([gt()],Mt.prototype,"_helpers",void 0),Mt=t([lt("climate-card-editor")],Mt);var kt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},Ot={common:kt},Pt={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Rt={common:Pt};const Ut={en:Object.freeze({__proto__:null,common:kt,default:Ot}),nb:Object.freeze({__proto__:null,common:Pt,default:Rt})};function Ht(t,e="",i=""){const o=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let s;try{s=t.split(".").reduce((t,e)=>t[e],Ut[o])}catch(e){s=t.split(".").reduce((t,e)=>t[e],Ut.en)}return void 0===s&&(s=t.split(".").reduce((t,e)=>t[e],Ut.en)),""!==e&&""!==i&&(s=s.replace(e,i)),s}console.info(`%c  CLIMATE-CARD \n%c  ${Ht("common.version")} 2.0.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"climate-card",name:"Climate Card",description:"A Climate Card to monitor and config climate entity"});let Nt=class extends at{constructor(){super(...arguments),this.deviceManger=new wt}static async getConfigElement(){return document.createElement("climate-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t)throw new Error(Ht("common.invalid_configuration"));if(t.test_gui)try{(function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null})().setEditMode(!0)}catch{}this.config={name:"Climate",...t}}shouldUpdate(t){return!!this.config&&function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var o=e.get("hass");return!o||o.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}render(){return this.config.show_warning?this._showWarning(Ht("common.show_warning")):this.config.show_error?this._showError(Ht("common.show_error")):(this.deviceManger.initialize(this.hass,this.config),q`
      ${dt}
      <ha-card>
        <div class="climate-card">
          <climate-display
            .name=${this.deviceManger.getAttr(_t.NAME)}
            .currentTemp=${this.deviceManger.getAttr(_t.CURRENT_TEMPERATUE)}
            .targetTemp=${this.deviceManger.getAttr(_t.TEMPERATUE)}
            .tempRange=${this.deviceManger.temperatureRange()}
            .humidity=${this.deviceManger.getAttr(_t.CURRENT_HUMIDITY)}
            .hvacMode=${this.deviceManger.getState()}
            .hvacAction=${this.deviceManger.getAttr(_t.HVAC_ACTION)}
            .onUpdateTargetTemp=${t=>this.deviceManger.setTargetTemp(t)}
          ></climate-display>
          <div class="climate-card-controls">
          ${this.deviceManger.getHvacModes().map(t=>q`<climate-mode-button 
              mode=${t}
              ?isActive=${this.deviceManger.isMode(t)} 
              .onClick=${t=>this.deviceManger.hvacMode(t)}
            ></climate-mode-button>`)}
          </div>
        </div>
      </ha-card>
    `)}_showWarning(t){return q`
      <hui-warning>${t}</hui-warning>
    `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),q`
      ${e}
    `}static get styles(){return n`
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
    `}};t([gt()],Nt.prototype,"config",void 0),t([ut({attribute:!1})],Nt.prototype,"hass",void 0),Nt=t([lt("climate-card")],Nt);export{Nt as ClimateCard};
