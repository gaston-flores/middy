"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4267],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(f,l(l({ref:r},c),{},{components:t})):n.createElement(f,l({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,r,t){var n=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:a},r)}},9877:function(e,r,t){t.d(r,{Z:function(){return c}});var n=t(7462),a=t(7294),o=t(2389),l=t(9548),i=t(6010),u="tabItem_LplD";function s(e){var r,t,o,s=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:g.map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes}})),h=(0,l.lx)(v,(function(e,r){return e.value===r.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(r=null!=d?d:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?r:null==(o=g[0])?void 0:o.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.UB)(),w=b.tabGroupChoices,k=b.setTabGroupChoices,O=(0,a.useState)(y),T=O[0],N=O[1],E=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=w[m];null!=j&&j!==T&&v.some((function(e){return e.value===j}))&&N(j)}var C=function(e){var r=e.currentTarget,t=E.indexOf(r),n=v[t].value;n!==T&&(x(r),N(n),null!=m&&k(m,n))},I=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;t=E[n]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;t=E[a]||E[E.length-1]}null==(r=t)||r.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var r=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===r?0:-1,"aria-selected":T===r,key:r,ref:function(e){return E.push(e)},onKeyDown:I,onFocus:C,onClick:C},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":T===r})}),null!=t?t:r)}))),s?(0,a.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==T})}))))}function c(e){var r=(0,o.Z)();return a.createElement(s,(0,n.Z)({key:String(r)},e))}},6252:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),l=t(9877),i=t(8215),u=["components"],s={title:"error-logger"},c=void 0,d={unversionedId:"middlewares/error-logger",id:"middlewares/error-logger",title:"error-logger",description:"Logs the error and propagates it to the next middleware.",source:"@site/docs/middlewares/error-logger.md",sourceDirName:"middlewares",slug:"/middlewares/error-logger",permalink:"/docs/middlewares/error-logger",editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/error-logger.md",tags:[],version:"current",lastUpdatedAt:1652530817,formattedLastUpdatedAt:"5/14/2022",frontMatter:{title:"error-logger"},sidebar:"tutorialSidebar",previous:{title:"do-not-wait-for-empty-event-loop",permalink:"/docs/middlewares/do-not-wait-for-empty-event-loop"},next:{title:"event-normalizer",permalink:"/docs/middlewares/event-normalizer"}},p=[{value:"Install",id:"install",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Sample usage",id:"sample-usage",children:[],level:2}],m={toc:p};function f(e){var r=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Logs the error and propagates it to the next middleware."),(0,o.kt)("p",null,"By default AWS Lambda does not print errors in the CloudWatch logs. If you want to make sure that you don't miss error logs, you would have to catch any error and pass it through ",(0,o.kt)("inlineCode",{parentName:"p"},"console.error")," yourself."),(0,o.kt)("p",null,"This middleware will take care to intercept any error and log it for you. The middleware is not going to interfere with other error handlers because it will propagate the error to the next error handler middleware without handling it. You just have to make sure to attach this middleware before any other error handling middleware."),(0,o.kt)("p",null,"By default, the logging operate by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"console.error")," function. You can pass as a parameter a custom logger with additional logic if you need. It can be useful if you want to process the log by doing a http call or anything else."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"To install this middleware you can use NPM:"),(0,o.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/error-logger\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/error-logger\n")))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"logger")," property: a function (default ",(0,o.kt)("inlineCode",{parentName:"li"},"console.error"),") that is used to define the logging logic. It receives the Error object as first and only parameter.")),(0,o.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport errorLogger from '@middy/error-logger'\n\nconst handler = middy((event, context) => {\n  // your handler logic\n})\n\nhandler\n  .use(errorLogger())\n")))}f.isMDXComponent=!0}}]);