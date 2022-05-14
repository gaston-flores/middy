"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8102],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,y=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8714:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={title:"ws-json-body-parser"},l=void 0,d={unversionedId:"middlewares/ws-json-body-parser",id:"middlewares/ws-json-body-parser",title:"ws-json-body-parser",description:"This middleware automatically parses WebSocket requests with a JSON body and converts the body into an",source:"@site/docs/middlewares/ws-json-body-parser.md",sourceDirName:"middlewares",slug:"/middlewares/ws-json-body-parser",permalink:"/docs/middlewares/ws-json-body-parser",editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/ws-json-body-parser.md",tags:[],version:"current",lastUpdatedAt:1652530817,formattedLastUpdatedAt:"5/14/2022",frontMatter:{title:"ws-json-body-parser"},sidebar:"tutorialSidebar",previous:{title:"warmup",permalink:"/docs/middlewares/warmup"},next:{title:"ws-response",permalink:"/docs/middlewares/ws-response"}},p=[{value:"Install",id:"install",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Sample usage",id:"sample-usage",children:[],level:2}],c={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This middleware automatically parses WebSocket requests with a JSON body and converts the body into an\nobject."),(0,o.kt)("p",null,"It can also be used in combination with validator as a prior step to normalize the\nevent body input as an object so that the content can be validated."),(0,o.kt)("p",null,"If the body has been parsed as JSON, you can access the original body through the ",(0,o.kt)("inlineCode",{parentName:"p"},"request.event.rawBody"),"."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"To install this middleware you can use NPM:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/ws-json-body-parser\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reviver")," (function) (default ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"),"): A ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Parameters"},"reviver")," parameter may be passed which will be used ",(0,o.kt)("inlineCode",{parentName:"li"},"JSON.parse"),"ing the body.")),(0,o.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport wsJsonBodyParserMiddleware from '@middy/ws-json-body-parser'\nimport wsResponseMiddleware from '@middy/ws-response'\n\nexport const handler = middy()\n  .use(wsJsonBodyParserMiddleware())\n  .use(wsResponseMiddleware())\n  .handler((event) => {\n    return event.body.message\n  })\n")))}u.isMDXComponent=!0}}]);