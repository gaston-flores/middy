"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7796],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7462),a=n(7294),o=n(2389),l=n(9548),i=n(6010),u="tabItem_LplD";function s(e){var t,n,o,s=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(t=null!=c?c:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==h&&!y.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.UB)(),k=w.tabGroupChoices,g=w.setTabGroupChoices,E=(0,a.useState)(h),N=E[0],O=E[1],T=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=k[m];null!=C&&C!==N&&y.some((function(e){return e.value===C}))&&O(C)}var j=function(e){var t=e.currentTarget,n=T.indexOf(t),r=y[n].value;r!==N&&(x(t),O(r),null!=m&&g(m,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return T.push(e)},onKeyDown:P,onFocus:j,onClick:j},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function p(e){var t=(0,o.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},7837:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(9877),i=n(8215),u=["components"],s={title:"do-not-wait-for-empty-event-loop"},p=void 0,c={unversionedId:"middlewares/do-not-wait-for-empty-event-loop",id:"middlewares/do-not-wait-for-empty-event-loop",title:"do-not-wait-for-empty-event-loop",description:"This middleware sets context.callbackWaitsForEmptyEventLoop property to false.",source:"@site/docs/middlewares/do-not-wait-for-empty-event-loop.md",sourceDirName:"middlewares",slug:"/middlewares/do-not-wait-for-empty-event-loop",permalink:"/docs/middlewares/do-not-wait-for-empty-event-loop",editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/do-not-wait-for-empty-event-loop.md",tags:[],version:"current",lastUpdatedAt:1652530817,formattedLastUpdatedAt:"5/14/2022",frontMatter:{title:"do-not-wait-for-empty-event-loop"},sidebar:"tutorialSidebar",previous:{title:"cloudwatch-metrics",permalink:"/docs/middlewares/cloudwatch-metrics"},next:{title:"error-logger",permalink:"/docs/middlewares/error-logger"}},d=[{value:"Install",id:"install",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Sample usage",id:"sample-usage",children:[],level:2}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This middleware sets ",(0,o.kt)("inlineCode",{parentName:"p"},"context.callbackWaitsForEmptyEventLoop")," property to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".\nThis will prevent Lambda from timing out because of open database connections, etc."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"To install this middleware you can use NPM:"),(0,o.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/do-not-wait-for-empty-event-loop\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/do-not-wait-for-empty-event-loop\n")))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"By default the middleware sets the ",(0,o.kt)("inlineCode",{parentName:"p"},"callbackWaitsForEmptyEventLoop")," property to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," only in the ",(0,o.kt)("inlineCode",{parentName:"p"},"before")," phase,\nmeaning you can override it in handler to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if needed. You can set it in all steps with the options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"runOnBefore")," (defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),") - sets property before running your handler"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"runOnAfter"),"  (defaults  to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"runOnError")," (defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),")")),(0,o.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport doNotWaitForEmptyEventLoop from '@middy/do-not-wait-for-empty-event-loop'\n\nconst handler = middy((event, context) => {\n  return {}\n})\n\nhandler.use(doNotWaitForEmptyEventLoop({runOnError: true}))\n\n// When Lambda runs the handler it gets context with\n// callbackWaitsForEmptyEventLoop property set to false\n\nhandler(event, context, (_, response) => {\n  t.is(context.callbackWaitsForEmptyEventLoop,false)\n})\n")))}f.isMDXComponent=!0}}]);