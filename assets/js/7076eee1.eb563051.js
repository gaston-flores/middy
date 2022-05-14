"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[481],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(r),u=a,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5846:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],d={title:"Application Load Balancer"},l=void 0,p={unversionedId:"events/application-load-balancer",id:"events/application-load-balancer",title:"Application Load Balancer",description:"Same as API Gateway (REST)",source:"@site/docs/events/application-load-balancer.md",sourceDirName:"events",slug:"/events/application-load-balancer",permalink:"/docs/events/application-load-balancer",editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/events/application-load-balancer.md",tags:[],version:"current",lastUpdatedAt:1652530817,formattedLastUpdatedAt:"5/14/2022",frontMatter:{title:"Application Load Balancer"},sidebar:"tutorialSidebar",previous:{title:"API Gateway (WebSocket)",permalink:"/docs/events/api-gateway-ws"},next:{title:"CloudFormation",permalink:"/docs/events/cloud-formation"}},s=[{value:"AWS Documentation",id:"aws-documentation",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],m={toc:s};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Same as API Gateway (REST)"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub."))),(0,o.kt)("h2",{id:"aws-documentation"},"AWS Documentation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lambda/latest/dg/services-alb.html"},"Using AWS Lambda with an Application Load Balancer"))),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport httpRouterHandler from '@middy/http-router'\nimport errorLoggerMiddleware from '@middy/error-logger'\nimport inputOutputLoggerMiddleware from '@middy/input-output-logger'\nimport httpContentNegotiationMiddleware from '@middy/http-content-negotiation'\nimport httpContentEncodingMiddleware from '@middy/http-content-encoding'\nimport httpCorsMiddleware from '@middy/http-cors'\nimport httpErrorHandlerMiddleware from '@middy/http-error-handler'\nimport httpEventNormalizerMiddleware from '@middy/http-event-normalizer'\nimport httpHeaderNormalizerMiddleware from '@middy/http-header-normalizer'\nimport httpJsonBodyParserMiddleware from '@middy/http-json-body-parser'\nimport httpMultipartBodyParserMiddleware from '@middy/http-multipart-body-parser'\nimport httpPartialResponseMiddleware from '@middy/http-partial-response'\nimport httpResponseSerializerMiddleware from '@middy/http-response-serializer'\nimport httpSecurityHeadersMiddleware from '@middy/http-security-headers'\nimport httpUrlencodeBodyParserMiddleware from '@middy/http-urlencode-body-parser'\nimport httpUrlencodePathParametersParserMiddleware from '@middy/http-urlencode-path-parser'\nimport warmupMiddleware from 'warmup'\n\nimport { handler as getHandler } from './handlers/get-user.js'\nimport { handler as postHandler } from './handlers/get-user.js'\n\nconst routes = [\n  {\n    method: 'GET',\n    path: '/user/{id}',\n    handler: getHandler\n  },\n  {\n    method: 'POST',\n    path: '/user',\n    handler: postHandler\n  }\n]\n\nexport const handler = middy({\n  timeoutEarlyResponse: () => {\n    return {\n      statusCode: 408\n    }\n  }\n})\n  .use(warmupMiddleware())\n  .use(httpEventNormalizerMiddleware())\n  .use(httpHeaderNormalizerMiddleware())\n  .use(\n    httpContentNegotiationMiddleware({\n      availableLanguages: ['en-CA', 'fr-CA'],\n      availableMediaTypes: ['application/json']\n    })\n  )\n  .use(httpUrlencodePathParametersParserMiddleware())\n  // Start oneOf\n  .use(httpUrlencodeBodyParserMiddleware())\n  .use(httpJsonBodyParserMiddleware())\n  .use(httpMultipartBodyParserMiddleware())\n  // End oneOf\n  .use(httpSecurityHeadersMiddleware())\n  .use(httpCorsMiddleware())\n  .use(httpContentEncodingMiddleware())\n  .use(\n    httpResponseSerializerMiddleware({\n      serializers: [\n        {\n          regex: /^application\\/json$/,\n          serializer: ({ body }) => JSON.stringify(body)\n        }\n      ],\n      default: 'application/json'\n    })\n  )\n  .use(httpPartialResponseMiddleware())\n  .use(httpErrorHandlerMiddleware())\n  .handler(httpRouterHandler(routes))\n")))}c.isMDXComponent=!0}}]);