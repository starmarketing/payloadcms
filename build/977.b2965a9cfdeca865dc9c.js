"use strict";(self.webpackChunkpayload_starter_typescript=self.webpackChunkpayload_starter_typescript||[]).push([[977],{6977:(e,l,a)=>{a.r(l),a.d(l,{default:()=>k});var o=a(7294),t=a(8439),s=a(1455),r=a(546),n=a(4479),i=a(7578),d=a(5074),c=a(4012),p=a(3864),u=a(8285),m=a(666),v=a(8170),b=a(5050),f=a(8851),y=a(5193),h=a(4945),w=a(7070);a(3739);const E="field-type blocks",g={singular:"Block",plural:"Blocks"},R=o.memo((e=>{const{onDragEnd:l,label:a,showError:s,errorMessage:r,rows:i,labels:d,addRow:c,removeRow:p,moveRow:v,path:y,fieldTypes:g,permissions:R,value:k,setCollapse:x,blocks:C,readOnly:T,minRows:_,maxRows:Z,required:D,description:I}=e,O=Z&&i.length>=Z;return o.createElement(t.Z5,{onDragEnd:l},o.createElement("div",{className:E},o.createElement("div",{className:`${E}__error-wrap`},o.createElement(m.Z,{showError:s,message:r})),o.createElement("header",{className:`${E}__header`},o.createElement("h3",null,a),o.createElement(w.Z,{value:k,description:I})),o.createElement(t.bK,{droppableId:"blocks-drop",isDropDisabled:T},(e=>o.createElement("div",{ref:e.innerRef,...e.droppableProps},i.length>0&&i.map(((e,l)=>{var a;const{blockType:t}=e,s=C.find((e=>e.slug===t));return s?o.createElement(u.Z,{readOnly:T,key:e.id,id:e.id,blockType:"blocks",blocks:C,label:null===(a=null==s?void 0:s.labels)||void 0===a?void 0:a.singular,isCollapsed:e.collapsed,rowCount:i.length,rowIndex:l,addRow:c,removeRow:p,moveRow:v,setRowCollapse:x,parentPath:y,fieldTypes:g,permissions:R,hasMaxRows:O,fieldSchema:[...s.fields]}):null})),(i.length<_||D&&0===i.length)&&o.createElement(h.Z,{type:"error"},"This field requires at least"," ",`${_||1} ${1===_||void 0===_?d.singular:d.plural}`),0===i.length&&T&&o.createElement(h.Z,null,"This field has no"," ",d.plural,"."),e.placeholder))),!T&&(i.length<Z||void 0===Z)&&o.createElement("div",{className:`${E}__add-button-wrap`},o.createElement(b.Z,{buttonType:"custom",size:"large",horizontalAlign:"left",button:o.createElement(n.Z,{buttonStyle:"icon-label",icon:"plus",iconPosition:"left",iconStyle:"with-border"},`Add ${d.singular}`),render:({close:e})=>o.createElement(f.Z,{blocks:C,addRow:c,addRowIndex:k,close:e})}))))})),k=(0,r.Z)((e=>{const{label:l,name:a,path:t,blocks:r,labels:n=g,fieldTypes:u,maxRows:m,minRows:b,required:f,validate:h=y.blocks,permissions:w,admin:{readOnly:E,description:k,condition:x}}=e,C=t||a,{preferencesKey:T}=(0,d.x5)(),{getPreference:_,setPreference:Z}=(0,s.G)(),[D,I]=(0,o.useReducer)(i.Z,[]),O=(0,c.cI)(),{dispatchFields:P}=O,S=(0,o.useCallback)((e=>h(e,{minRows:b,maxRows:m,labels:n,blocks:r,required:f})),[h,m,b,n,r,f]),[$,M]=(0,o.useState)(!1),{showError:A,errorMessage:F,value:L,setValue:q}=(0,v.Z)({path:C,validate:S,disableFormData:$,ignoreWhileFlattening:!0,condition:x}),V=(0,o.useCallback)((async(e,l)=>{const a=r.find((e=>e.slug===l)),o=await(0,p.Z)(a.fields);P({type:"ADD_ROW",rowIndex:e,subFieldState:o,path:C,blockType:l}),I({type:"ADD",rowIndex:e,blockType:l}),q(L+1)}),[C,q,L,r,P]),B=(0,o.useCallback)((e=>{I({type:"REMOVE",rowIndex:e}),P({type:"REMOVE_ROW",rowIndex:e,path:C}),q(L-1)}),[C,q,L,P]),K=(0,o.useCallback)(((e,l)=>{I({type:"MOVE",moveFromIndex:e,moveToIndex:l}),P({type:"MOVE_ROW",moveFromIndex:e,moveToIndex:l,path:C})}),[I,P,C]),N=(0,o.useCallback)((async(e,l)=>{var a,o,t;if(I({type:"SET_COLLAPSE",id:e,collapsed:l}),T){const s=await _(T)||{fields:{}};let r=(null===(o=null===(a=null==s?void 0:s.fields)||void 0===a?void 0:a[C])||void 0===o?void 0:o.collapsed.filter((e=>D.find((l=>l.id===e)))))||[];l?r.push(e):r=r.filter((l=>l!==e)),Z(T,{...s,fields:{...(null==s?void 0:s.fields)||{},[C]:{...null===(t=null==s?void 0:s.fields)||void 0===t?void 0:t[C],collapsed:r}}})}}),[T,_,C,Z,D]),W=(0,o.useCallback)((e=>{if(!e.destination)return;const l=e.source.index,a=e.destination.index;K(l,a)}),[K]);return(0,o.useEffect)((()=>{(async()=>{var e,l;const a=T?await _(T):void 0,o=O.getDataByPath(C);I({type:"SET_ALL",data:o||[],collapsedState:null===(l=null===(e=null==a?void 0:a.fields)||void 0===e?void 0:e[C])||void 0===l?void 0:l.collapsed})})()}),[O,C,T,_]),(0,o.useEffect)((()=>{const e=O.getDataByPath(C);I({type:"SET_ALL",data:e||[]})}),[O,C]),(0,o.useEffect)((()=>{q((null==D?void 0:D.length)||0),0===(null==D?void 0:D.length)?M(!1):M(!0)}),[D,q]),o.createElement(R,{onDragEnd:W,label:l,showError:A,errorMessage:F,rows:D,labels:n,addRow:V,removeRow:B,moveRow:K,path:C,name:a,fieldTypes:u,setCollapse:N,permissions:w,value:L,blocks:r,readOnly:E,minRows:b,maxRows:m,required:f,description:k})}))},5074:(e,l,a)=>{a.d(l,{a4:()=>s,x5:()=>r});var o=a(7294);const t=(0,o.createContext)({}),s=e=>{const{children:l,type:a,slug:s}=e;if("global"===a)return o.createElement(t.Provider,{value:{type:a,slug:e.slug,preferencesKey:`global-${s}`}},l);if("collection"===a){const{id:r}=e,n={type:a,slug:s};return r&&(n.id=r,n.preferencesKey=`collection-${s}-${r}`),o.createElement(t.Provider,{value:n},l)}return null},r=()=>(0,o.useContext)(t)}}]);