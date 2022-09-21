"use strict";(self.webpackChunkdocusaurus_dashboard=self.webpackChunkdocusaurus_dashboard||[]).push([[310],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),b=a,h=c["".concat(p,".").concat(b)]||c[b]||d[b]||n;return r?o.createElement(h,i(i({ref:t},u),{},{components:r})):o.createElement(h,i({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:2},i="Deploy website to Github pages",s={unversionedId:"setup/dashboard-setup/deploy-website-to-github-pages",id:"setup/dashboard-setup/deploy-website-to-github-pages",title:"Deploy website to Github pages",description:"Activate repository settings to host dashboard on Github pages:",source:"@site/docs/setup/dashboard-setup/deploy-website-to-github-pages.md",sourceDirName:"setup/dashboard-setup",slug:"/setup/dashboard-setup/deploy-website-to-github-pages",permalink:"/test-report-dashboard/docs/setup/dashboard-setup/deploy-website-to-github-pages",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setup a local repository",permalink:"/test-report-dashboard/docs/setup/dashboard-setup/setup-local-repo"},next:{title:"Link test repositories to dashboard",permalink:"/test-report-dashboard/docs/setup/dashboard-setup/link-test-repos-and-dashboard"}},p={},l=[],u={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-website-to-github-pages"},"Deploy website to Github pages"),(0,a.kt)("p",null,"Activate repository settings to host dashboard on Github pages:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Save all changes and push to main, this should trigger the github-pages workflow which will create a gh-pages branch for your Github repository"),(0,a.kt)("li",{parentName:"ol"},"On your Github repository's ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings")," page, under ",(0,a.kt)("inlineCode",{parentName:"li"},"code and automation"),", select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Pages")," tab",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"Deploy from a branch")," as the source"),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"gh-pages")," as the branch"),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"/(root)")," as the root folder"),(0,a.kt)("li",{parentName:"ol"},"Click the save button"))),(0,a.kt)("li",{parentName:"ol"},"Your site will take a few minutes to deploy. After it does click on the site link provided on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Pages")," tab to view your dashboard")))}d.isMDXComponent=!0}}]);