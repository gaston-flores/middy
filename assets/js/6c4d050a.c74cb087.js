"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5512],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(7462),a=r(7294),l=r(2389),o=r(9548),i=r(6010),u="tabItem_LplD";function s(e){var t,r,l,s=e.lazy,d=e.block,c=e.defaultValue,p=e.values,m=e.groupId,f=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.UB)(),k=w.tabGroupChoices,g=w.setTabGroupChoices,N=(0,a.useState)(b),T=N[0],O=N[1],E=[],j=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var z=k[m];null!=z&&z!==T&&v.some((function(e){return e.value===z}))&&O(z)}var x=function(e){var t=e.currentTarget,r=E.indexOf(t),n=v[r].value;n!==T&&(j(t),O(n),null!=m&&g(m,n))},C=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;r=E[n]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;r=E[a]||E[E.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},f)},v.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:x,onClick:x},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),s?(0,a.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,l.Z)();return a.createElement(s,(0,n.Z)({key:String(t)},e))}},3058:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=r(9877),i=r(8215),u=["components"],s={title:"http-header-normalizer"},d=void 0,c={unversionedId:"middlewares/http-header-normalizer",id:"middlewares/http-header-normalizer",title:"http-header-normalizer",description:"This middleware normalizes HTTP header names to their canonical format. Very useful if clients are",source:"@site/docs/middlewares/http-header-normalizer.md",sourceDirName:"middlewares",slug:"/middlewares/http-header-normalizer",permalink:"/docs/middlewares/http-header-normalizer",editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/http-header-normalizer.md",tags:[],version:"current",lastUpdatedAt:1652530817,formattedLastUpdatedAt:"5/14/2022",frontMatter:{title:"http-header-normalizer"},sidebar:"tutorialSidebar",previous:{title:"http-event-normalizer",permalink:"/docs/middlewares/http-event-normalizer"},next:{title:"http-json-body-parser",permalink:"/docs/middlewares/http-json-body-parser"}},p=[{value:"Install",id:"install",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Sample usage",id:"sample-usage",children:[],level:2}],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This middleware normalizes HTTP header names to their canonical format. Very useful if clients are\nnot using the canonical names of header (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"content-type")," as opposed to ",(0,l.kt)("inlineCode",{parentName:"p"},"Content-Type"),")."),(0,l.kt)("p",null,"API Gateway does not perform any normalization, so the headers are propagated to Lambda\nexactly as they were sent by the client."),(0,l.kt)("p",null,"Other middlewares like ",(0,l.kt)("a",{parentName:"p",href:"#jsonbodyparser"},(0,l.kt)("inlineCode",{parentName:"a"},"jsonBodyParser"))," or ",(0,l.kt)("a",{parentName:"p",href:"#urlencodebodyparser"},(0,l.kt)("inlineCode",{parentName:"a"},"urlEncodeBodyParser")),"\nwill rely on headers to be in the canonical format, so if you want to support non-normalized headers in your\napp you have to use this middleware before those ones."),(0,l.kt)("p",null,"This middleware will copy the original headers in ",(0,l.kt)("inlineCode",{parentName:"p"},"event.rawHeaders"),"."),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"To install this middleware you can use NPM:"),(0,l.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/http-header-normalizer\n"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/http-header-normalizer\n")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"normalizeHeaderKey")," (function) (optional): a function that accepts an header name as a parameter and returns its\ncanonical representation."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"canonical")," (bool) (optional): if true, modifies the headers to canonical format, otherwise the headers are normalized to lowercase (default ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),")")),(0,l.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport httpHeaderNormalizer from '@middy/http-header-normalizer'\n\nconst handler = middy((event, context) => {\n  return {}\n})\n\nhandler\n  .use(httpHeaderNormalizer())\n")))}f.isMDXComponent=!0}}]);