(self.webpackChunkpayload_starter_typescript=self.webpackChunkpayload_starter_typescript||[]).push([[658],{4983:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(7294),i=n(9243),r=n(4479),a=n(684);const l=e=>{const{generatePreviewURL:t,data:n}=e,[l,s]=(0,o.useState)(void 0),u=(0,a.bU)(),{token:c}=(0,i.useAuth)();return(0,o.useEffect)((()=>{if(t&&"function"==typeof t){(async()=>{const e=await t(n,{locale:u,token:c});s(e)})()}}),[t,u,c,n]),l?o.createElement(r.Z,{el:"anchor",className:"preview-btn",buttonStyle:"secondary",url:l,newTab:!0},"Preview"):null}},3864:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(2489),i=n.n(o),r=n(3780);const a=async(e,t={})=>{if(e){const n=[],o=(e,t,o={})=>{var i;const r=void 0!==(null==o?void 0:o[e.name])?o[e.name]:e.defaultValue,a={value:r,initialValue:r,valid:!0,validate:e.validate,condition:null===(i=e.admin)||void 0===i?void 0:i.condition,passesCondition:t};return n.push((async(e,t)=>{const n=e;let o=!0;"function"==typeof t.validate&&(o=await t.validate(e.value,t)),"string"==typeof o?(n.errorMessage=o,n.valid=!1):n.valid=!0})(a,e)),a},a=(e,n,l,s="")=>e.reduce(((e,u)=>{var c,f;let p=n;if(!(0,r.fieldIsPresentationalOnly)(u)&&!(null===(c=null==u?void 0:u.admin)||void 0===c?void 0:c.disabled)){(0,r.fieldAffectsData)(u)&&u.defaultValue&&void 0===(null==p?void 0:p[u.name])&&(p={[u.name]:u.defaultValue});const c=Boolean((!(null===(f=null==u?void 0:u.admin)||void 0===f?void 0:f.condition)||u.admin.condition(t||{},p||{}))&&l);if((0,r.fieldAffectsData)(u)){if("relationship"===u.type&&null===(null==p?void 0:p[u.name])&&(p[u.name]="null"),"array"===u.type||"blocks"===u.type){if(Array.isArray(null==p?void 0:p[u.name])){const t=p[u.name];if("array"===u.type)return{...e,...t.reduce(((e,t,n)=>{const o=`${s}${u.name}.${n}.`;return{...e,[`${o}id`]:{value:t.id,initialValue:t.id||(new(i())).toHexString(),valid:!0},...a(u.fields,t,c,o)}}),{})};if("blocks"===u.type)return{...e,...t.reduce(((e,t,n)=>{const o=u.blocks.find((e=>e.slug===t.blockType)),r=`${s}${u.name}.${n}.`;return{...e,[`${r}blockType`]:{value:t.blockType,initialValue:t.blockType,valid:!0},[`${r}blockName`]:{value:t.blockName,initialValue:t.blockName,valid:!0},[`${r}id`]:{value:t.id,initialValue:t.id||(new(i())).toHexString(),valid:!0},...(null==o?void 0:o.fields)?a(o.fields,t,c,r):{}}}),{})}}return e}if("group"===u.type){const t=null==p?void 0:p[u.name];return{...e,...a(u.fields,t,c,`${s}${u.name}.`)}}return{...e,[`${s}${u.name}`]:o(u,c,n)}}if("row"===u.type)return{...e,...a(u.fields,n,c,s)};const d=u;return{...e,[`${s}${d.name}`]:o(u,c,n)}}return e}),{}),l=a(e,t,!0);return await Promise.all(n),l}return{}}},854:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n(7294),i=n(2949),r=n.n(i),a=n(9243),l=n(4012),s=n(9599),u=n(4479);n(2300);const c=()=>{const e=(0,l.$f)(),{user:t}=(0,a.useAuth)();return o.createElement(r(),{when:Boolean(e&&t)},(({onConfirm:e,onCancel:t})=>o.createElement("div",{className:"leave-without-saving"},o.createElement(s.Z,null,o.createElement("h1",null,"Leave without saving"),o.createElement("p",null,"Your changes have not been saved. If you leave now, you will lose your changes."),o.createElement(u.Z,{onClick:t,buttonStyle:"secondary"},"Stay on this page"),o.createElement(u.Z,{onClick:e},"Leave anyway")))))}},5074:(e,t,n)=>{"use strict";n.d(t,{a4:()=>r,x5:()=>a});var o=n(7294);const i=(0,o.createContext)({}),r=e=>{const{children:t,type:n,slug:r}=e;if("global"===n)return o.createElement(i.Provider,{value:{type:n,slug:e.slug,preferencesKey:`global-${r}`}},t);if("collection"===n){const{id:a}=e,l={type:n,slug:r};return a&&(l.id=a,l.preferencesKey=`collection-${r}-${a}`),o.createElement(i.Provider,{value:l},t)}return null},a=()=>(0,o.useContext)(i)},2949:(e,t,n)=>{e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(1),l=(o=a)&&o.__esModule?o:{default:o},s=n(2);var u={action:null,isActive:!1,nextLocation:null},c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._prevUserAction="",n._isMounted=!0,n.block=n.block.bind(n),n.onBeforeUnload=n.onBeforeUnload.bind(n),n.onCancel=n.onCancel.bind(n),n.onConfirm=n.onConfirm.bind(n),n.when=n.when.bind(n),n.state=i({},u,{unblock:function(){}}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.disableNative||window.addEventListener("beforeunload",this.onBeforeUnload),this.setState({unblock:this.props.history.block(this.block)})}},{key:"componentDidUpdate",value:function(e,t){"CANCEL"===this._prevUserAction&&"function"==typeof this.props.afterCancel?this.props.afterCancel():"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&this.props.afterConfirm(),this._prevUserAction=""}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&(this._prevUserAction="",this.props.afterConfirm()),this.state.unblock(),this.props.disableNative||window.removeEventListener("beforeunload",this.onBeforeUnload)}},{key:"block",value:function(e,t){var n=this.when(e,t);return n&&this.setState({action:t,nextLocation:e,isActive:!0}),!n}},{key:"navigateToNextLocation",value:function(e){var t=this,n=this.state,o=n.action,r=n.nextLocation;o={POP:this.props.allowGoBack?"goBack":"push",PUSH:"push",REPLACE:"replace"}[o||"PUSH"],r||(r={pathname:"/"});var a=this.props.history;if(this.state.unblock(),this._prevUserAction="CONFIRM","goBack"===o){var l=a.listen((function(){l(),t._isMounted&&t.setState(i({},u,{unblock:a.block(t.block)}))}));a.goBack()}else a[o](r),this._isMounted&&this.setState(i({},u,{unblock:this.props.history.block(this.block)}))}},{key:"onCancel",value:function(){var e=this;(this.props.beforeCancel||function(e){e()})((function(){e._prevUserAction="CANCEL",e.setState(i({},u))}))}},{key:"onConfirm",value:function(){var e=this;(this.props.beforeConfirm||function(e){e()})((function(){e.navigateToNextLocation(e.props.afterConfirm)}))}},{key:"onBeforeUnload",value:function(e){if(this.when()){var t="Do you want to leave this site?\n\nChanges you made may not be saved.";return e.returnValue=t,t}}},{key:"when",value:function(e,t){return"function"==typeof this.props.when?this.props.when(this.props.location,e,t):this.props.when}},{key:"render",value:function(){return this.state.isActive||this.props.renderIfNotActive?l.default.createElement("div",null,this.props.children({isActive:this.state.isActive,onConfirm:this.onConfirm,onCancel:this.onCancel})):null}}]),t}(l.default.Component);t.default=(0,s.withRouter)(c)},function(e,t){e.exports=n(7294)},function(e,t){e.exports=n(3727)}])}}]);