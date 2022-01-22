"use strict";(self.webpackChunkpayload_starter_typescript=self.webpackChunkpayload_starter_typescript||[]).push([[716],{8716:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(7294),l=a(9243),r=a(4479),o=a(8380),s=a(4945),c=a(9599),i=a(3636);a(6124);const u="unauthorized-user",d=()=>{const{licensePlan:e,user:t}=(0,l.useAuth)(),{routes:{admin:a}}=(0,l.useConfig)();return n.createElement(c.Z,{className:u},n.createElement(o.Z,{title:"Unauthorized User",description:"Unauthorized User",keywords:"Unauthorized, Payload, CMS"}),n.createElement("h2",null,"Your user account is unauthorized"),n.createElement(s.Z,{type:"error",alignIcon:"left",icon:n.createElement(i.Z,null)},"Sorry, the"," ",n.createElement("strong",{className:`${u}__plan-name`},e)," ","license associated with this domain does not grant access to your email address (",n.createElement("strong",null,null==t?void 0:t.email),")."),n.createElement("p",null,"Don't worry—your Payload API is still accessible, but you can only access the Payload admin panel with user(s) that are specifically whitelisted by the owner of this Payload license."),n.createElement("p",null,"The user accounts that are granted access can be configured within the Payload CMS website. Contact the owner of the license to learn more."),n.createElement("div",{className:`${u}__button-group`},n.createElement(r.Z,{el:"link",url:`${a}/logout`},"Log out"),n.createElement(r.Z,{el:"anchor",url:"https://payloadcms.com/login",buttonStyle:"secondary",newTab:!0},"Go to the Payload CMS website")))}}}]);