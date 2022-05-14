"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7858],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(7294),o=n(2389),l=n(9548),i=n(6010),s="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=b[0])?void 0:o.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),g=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,a.useState)(h),j=N[0],O=N[1],C=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=g[m];null!=S&&S!==j&&v.some((function(e){return e.value===S}))&&O(S)}var E=function(e){var t=e.currentTarget,n=C.indexOf(t),r=v[n].value;r!==j&&(T(t),O(r),null!=m&&w(m,r))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;n=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return C.push(e)},onKeyDown:x,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(b.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function c(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},1113:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(9877),i=n(8215),s=["components"],u={title:"s3-object-response"},c=void 0,p={unversionedId:"middlewares/s3-object-response",id:"middlewares/s3-object-response",title:"s3-object-response",description:"* This middleware is a Proof of Concept and requires real world testing before use, not recommended for production *",source:"@site/docs/middlewares/s3-object-response.md",sourceDirName:"middlewares",slug:"/middlewares/s3-object-response",permalink:"/docs/middlewares/s3-object-response",editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/s3-object-response.md",tags:[],version:"current",lastUpdatedAt:1652530817,formattedLastUpdatedAt:"5/14/2022",frontMatter:{title:"s3-object-response"},sidebar:"tutorialSidebar",previous:{title:"rds-signer",permalink:"/docs/middlewares/rds-signer"},next:{title:"secrets-manager",permalink:"/docs/middlewares/secrets-manager"}},d=[{value:"Install",id:"install",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Sample usage",id:"sample-usage",children:[{value:"Stream",id:"stream",children:[],level:3},{value:"Promise",id:"promise",children:[],level:3}],level:2}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," This middleware is a Proof of Concept and requires real world testing before use, not recommended for production ")),(0,o.kt)("p",null,"Fetches S3 object as a stream and writes back to s3 object response."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"To install this middleware you can use NPM:"),(0,o.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/s3-object-response\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/s3-object-response\n")))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bodyType")," (string) (required): How to pass in the s3 object through the handler. Can be ",(0,o.kt)("inlineCode",{parentName:"li"},"stream")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"promise"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AwsClient")," (object) (default ",(0,o.kt)("inlineCode",{parentName:"li"},"AWS.S3"),"): AWS.STS class constructor (e.g. that has been instrumented with AWS XRay). Must be from ",(0,o.kt)("inlineCode",{parentName:"li"},"aws-sdk")," v2."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"awsClientOptions")," (object) (optional): Options to pass to AWS.STS class constructor."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"awsClientCapture")," (function) (optional): Enable XRay by passing ",(0,o.kt)("inlineCode",{parentName:"li"},"captureAWSClient")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"aws-xray-sdk")," in."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"httpsCapture")," (function) (optional): Enable XRay by passing ",(0,o.kt)("inlineCode",{parentName:"li"},"captureHTTPsGlobal")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"aws-xray-sdk")," in."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"disablePrefetch")," (boolean) (default ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"): On cold start requests will trigger early if they can. Setting ",(0,o.kt)("inlineCode",{parentName:"li"},"awsClientAssumeRole")," disables prefetch.")),(0,o.kt)("p",null,"NOTES:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The response from the handler must match the allowed parameters for ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#writeGetObjectResponse-property"},(0,o.kt)("inlineCode",{parentName:"a"},"S3.writeGetObjectResponse")),", excluding ",(0,o.kt)("inlineCode",{parentName:"li"},"RequestRoute")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"RequestToken"),"."),(0,o.kt)("li",{parentName:"ul"},"Lambda is required to have IAM permission for ",(0,o.kt)("inlineCode",{parentName:"li"},"s3-object-lambda:WriteGetObjectResponse"))),(0,o.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,o.kt)("h3",{id:"stream"},"Stream"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import zlib from 'zlib'\nimport middy from '@middy/core'\nimport s3ObjectResponse from '@middy/s3-object-response'\n\nconst handler = middy((event, context) => {\n  const readStream = context.s3Object\n  const transformStream = zlib.createBrotliCompress()\n  return {\n    Body: readStream.pipe(transformStream)\n  }\n})\n\nhandler\n  .use(s3ObjectResponse({\n    bodyType: 'stream'\n  }))\n")),(0,o.kt)("h3",{id:"promise"},"Promise"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import zlib from 'zlib'\nimport middy from '@middy/core'\nimport s3ObjectResponse from '@middy/s3-object-response'\n\nconst handler = middy(async (event, context) => {\n  let body = await context.s3Object\n  // change body\n  return {\n    Body: JSON.stringify(body)\n  }\n})\n\nhandler\n  .use(s3ObjectResponse({\n    bodyType: 'promise'\n  }))\n")))}f.isMDXComponent=!0}}]);