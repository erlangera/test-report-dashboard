"use strict";(self.webpackChunkdocusaurus_dashboard=self.webpackChunkdocusaurus_dashboard||[]).push([[684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(u,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},i="Automate Github Actions",s={unversionedId:"setup/repository-integration/automate-github-actions",id:"setup/repository-integration/automate-github-actions",title:"Automate Github Actions",description:"Set up Github Actions to automatically run Playwright tests nightly and on pushes and pull requests to the Github repo:",source:"@site/docs/setup/repository-integration/automate-github-actions.md",sourceDirName:"setup/repository-integration",slug:"/setup/repository-integration/automate-github-actions",permalink:"/test-report-dashboard/docs/setup/repository-integration/automate-github-actions",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setup Playwright Trace and Report",permalink:"/test-report-dashboard/docs/setup/repository-integration/setup-playwright-tracing"},next:{title:"Dashboard Setup",permalink:"/test-report-dashboard/docs/category/dashboard-setup"}},u={},l=[],p={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"automate-github-actions"},"Automate Github Actions"),(0,o.kt)("p",null,"Set up Github Actions to automatically run Playwright tests nightly and on pushes and pull requests to the Github repo:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In your repository, rename the ",(0,o.kt)("inlineCode",{parentName:"li"},"playwright.yml")," file in the ",(0,o.kt)("inlineCode",{parentName:"li"},"./github/workflows/")," directory to ",(0,o.kt)("inlineCode",{parentName:"li"},"playwright-onDemand.yml")),(0,o.kt)("li",{parentName:"ol"},"Copy the following contents to the ",(0,o.kt)("inlineCode",{parentName:"li"},"./github/workflows/playwright-onDemand.yml")," file of your repo. Note that if your repo requires other dependencies you may be required to install them after the step where you install Playwright")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node\n# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions\n\nname: Playwright tests\n\non:\n  # Runs on push or pull requests and nightly\n  push:\n    branches: [ "main" ]\n  pull_request:\n    branches: [ "main" ]\n  schedule: \n    # nightly\n    - cron: \'0 0 * * *\'\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n\n    strategy:\n      matrix:\n        node-version: [14.x, 16.x, 18.x]\n        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/\n\n    steps:\n    - uses: actions/checkout@v3\n    - uses: actions/setup-node@v3\n    - name: Install dependencies\n      run: npm ci\n    - name: Install Playwright\n      run: npx playwright install --with-deps\n    - name: Build production build\n      run: npm run build\n    - name: Run your tests\n      run: npm run test\n\n')))}c.isMDXComponent=!0}}]);