"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5774],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7462),a=t(7294),l=t(2389),i=t(9548),o=t(6010),s="tabItem_LplD";function u(e){var n,t,l,u=e.lazy,d=e.block,c=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,i.lx)(b,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===c?c:null!=(n=null!=c?c:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=v[0])?void 0:l.props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),h=k.tabGroupChoices,g=k.setTabGroupChoices,N=(0,a.useState)(w),C=N[0],O=N[1],T=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=h[m];null!=E&&E!==C&&b.some((function(e){return e.value===E}))&&O(E)}var j=function(e){var n=e.currentTarget,t=T.indexOf(n),r=b[t].value;r!==C&&(x(n),O(r),null!=m&&g(m,r))},A=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},b.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return T.push(e)},onKeyDown:A,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function d(e){var n=(0,l.Z)();return a.createElement(u,(0,r.Z)({key:String(n)},e))}},4087:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=t(9877),o=t(8215),s=["components"],u={title:"ws-response"},d=void 0,c={unversionedId:"middlewares/ws-response",id:"middlewares/ws-response",title:"ws-response",description:"Post message to WebSocket connection.",source:"@site/docs/middlewares/ws-response.md",sourceDirName:"middlewares",slug:"/middlewares/ws-response",permalink:"/docs/middlewares/ws-response",editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/ws-response.md",tags:[],version:"current",lastUpdatedAt:1652530817,formattedLastUpdatedAt:"5/14/2022",frontMatter:{title:"ws-response"},sidebar:"tutorialSidebar",previous:{title:"ws-json-body-parser",permalink:"/docs/middlewares/ws-json-body-parser"},next:{title:"Writing Middlewares",permalink:"/docs/category/writing-middlewares"}},p=[{value:"Install",id:"install",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Sample usage",id:"sample-usage",children:[{value:"API Gateway",id:"api-gateway",children:[],level:3},{value:"General",id:"general",children:[],level:3}],level:2}],m={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Post message to WebSocket connection."),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"To install this middleware you can use NPM:"),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/ws-responder\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/ws-responder\n")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AwsClient")," (object) (default ",(0,l.kt)("inlineCode",{parentName:"li"},"AWS.ApiGatewayManagementApi"),"): AWS.ApiGatewayManagementApi class constructor (e.g. that has been instrumented with AWS XRay). Must be from ",(0,l.kt)("inlineCode",{parentName:"li"},"aws-sdk")," v2."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"awsClientOptions")," (object) (default ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"),"): Options to pass to AWS.ApiGatewayManagementApi class constructor."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"awsClientAssumeRole")," (string) (default ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"),"): Internal key where secrets are stored. See ",(0,l.kt)("a",{parentName:"li",href:"/docs/middlewares/sts"},"@middy/sts")," on to set this."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"awsClientCapture")," (function) (default ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"),"): Enable XRay by passing ",(0,l.kt)("inlineCode",{parentName:"li"},"captureAWSClient")," from ",(0,l.kt)("inlineCode",{parentName:"li"},"aws-xray-sdk")," in."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"disablePrefetch")," (boolean) (default ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"): On cold start requests will trigger early if they can. Setting ",(0,l.kt)("inlineCode",{parentName:"li"},"awsClientAssumeRole")," disables prefetch.")),(0,l.kt)("p",null,"NOTES:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Lambda is required to have IAM permission for ",(0,l.kt)("inlineCode",{parentName:"li"},"execute-api:ManageConnections")),(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"awsClientOptions.endpoint")," is not set it will be set using ",(0,l.kt)("inlineCode",{parentName:"li"},"event.requestContext.{domainName,stage}")),(0,l.kt)("li",{parentName:"ul"},"If response does not contain ",(0,l.kt)("inlineCode",{parentName:"li"},"ConnectId"),", it will be set from ",(0,l.kt)("inlineCode",{parentName:"li"},"event.requestContext.connectionId"))),(0,l.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,l.kt)("h3",{id:"api-gateway"},"API Gateway"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport wsResonse from '@middy/ws-responder'\n\nexport const handler = middy((event, context) => {\n  return 'message'\n})\n\nhandler\n  .use(wsResonse())\n")),(0,l.kt)("h3",{id:"general"},"General"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport wsResonse from '@middy/ws-responder'\n\nexport const handler = middy((event, context) => {\n  return {\n    ConnectionId: '...',\n    Data: 'message'\n  }\n})\n\nhandler\n  .use(wsResonse({\n    awsClientOptions: {\n      endpoint: '...'\n    }\n  }))\n")))}f.isMDXComponent=!0}}]);