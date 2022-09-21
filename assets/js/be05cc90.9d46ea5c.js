"use strict";(self.webpackChunkdocusaurus_dashboard=self.webpackChunkdocusaurus_dashboard||[]).push([[472],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=s(r),d=i,f=y["".concat(p,".").concat(d)]||y[d]||u[d]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8957:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:1},a="Initialize Playwright",l={unversionedId:"setup/repository-integration/initialize-playwright",id:"setup/repository-integration/initialize-playwright",title:"Initialize Playwright",description:"Set up Playwright tests for your repo:",source:"@site/docs/setup/repository-integration/initialize-playwright.md",sourceDirName:"setup/repository-integration",slug:"/setup/repository-integration/initialize-playwright",permalink:"/test-report-dashboard/docs/setup/repository-integration/initialize-playwright",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Repository Integration",permalink:"/test-report-dashboard/docs/category/repository-integration"},next:{title:"Setup Playwright Trace and Report",permalink:"/test-report-dashboard/docs/setup/repository-integration/setup-playwright-tracing"}},p={},s=[],c={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"initialize-playwright"},"Initialize Playwright"),(0,i.kt)("p",null,"Set up Playwright tests for your repo:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"At the root of your repository run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm init playwright@latest"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Select a language (",(0,i.kt)("inlineCode",{parentName:"li"},"TypeScript")," was used for the example repo but either will work)"),(0,i.kt)("li",{parentName:"ol"},"Select a folder to place your tests in (the folder ",(0,i.kt)("inlineCode",{parentName:"li"},"tests")," was used for the example repo)"),(0,i.kt)("li",{parentName:"ol"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"y")," to add a github workflow"))),(0,i.kt)("li",{parentName:"ol"},"Inside ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," add the script ",(0,i.kt)("inlineCode",{parentName:"li"},'"test": "playwright test"')),(0,i.kt)("li",{parentName:"ol"},"Write test suites and place them in your test folder")))}u.isMDXComponent=!0}}]);