if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/bbH1D3KR6btzvQkt8hWDB/_buildManifest.js",revision:"99a31d691473366a960fd8ca14608d49"},{url:"/_next/static/bbH1D3KR6btzvQkt8hWDB/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/bbH1D3KR6btzvQkt8hWDB/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-b35a6028eeb7b6d1.js",revision:"b35a6028eeb7b6d1"},{url:"/_next/static/chunks/133-f64a69c93480b677.js",revision:"f64a69c93480b677"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-2727f92b6a285a16.js",revision:"2727f92b6a285a16"},{url:"/_next/static/chunks/pages/_app-149f8abfde251749.js",revision:"149f8abfde251749"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/about-0cbfdd5705be7b15.js",revision:"0cbfdd5705be7b15"},{url:"/_next/static/chunks/pages/app-d0c4d5789b622968.js",revision:"d0c4d5789b622968"},{url:"/_next/static/chunks/pages/dashboard-815f823db2a724ec.js",revision:"815f823db2a724ec"},{url:"/_next/static/chunks/pages/index-825ce4e289dcaf9b.js",revision:"825ce4e289dcaf9b"},{url:"/_next/static/chunks/pages/lead-00cf9c5526a72b00.js",revision:"00cf9c5526a72b00"},{url:"/_next/static/chunks/pages/lead/%5B...details%5D-9ec0077ce7c65042.js",revision:"9ec0077ce7c65042"},{url:"/_next/static/chunks/pages/pic-682cff84b164a1fc.js",revision:"682cff84b164a1fc"},{url:"/_next/static/chunks/pages/states-b99309e67eaa3cf1.js",revision:"b99309e67eaa3cf1"},{url:"/_next/static/chunks/pages/user-614b49cac4ee273d.js",revision:"614b49cac4ee273d"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-5dcbf4f62e053e1f.js",revision:"5dcbf4f62e053e1f"},{url:"/_next/static/css/a505adbcd30aa996.css",revision:"a505adbcd30aa996"},{url:"/_next/static/css/ef46db3751d8e999.css",revision:"ef46db3751d8e999"},{url:"/_next/static/media/bg.8f83a83c.jpg",revision:"8f83a83c"},{url:"/_next/static/media/document.d03a4e0b.png",revision:"a46c694c1e0e40e86415466c10e8c6bc"},{url:"/_next/static/media/user.dc1c6cd1.jpg",revision:"0f6b9e83a1de283edfa956c51d39b0a8"},{url:"/assets/data/data.json",revision:"1738bd7e89c919d8aa8d10269c2d63b6"},{url:"/assets/data/data2.json",revision:"d73ae6339ee952bd66dc344bed7e9196"},{url:"/assets/icon/call-icon.png",revision:"4b182c885431e31891b35b7ef185a7c5"},{url:"/assets/icon/dashboard.png",revision:"bb2f5b44ddaf0ce18727d7f0c34e41a0"},{url:"/assets/icon/favicon.ico",revision:"3565d1729b6620d7b28010a51a56922f"},{url:"/assets/icon/favicon.png",revision:"fbf06dbb6af414e0bf8ef8c91d9f1541"},{url:"/assets/icon/logo192.png",revision:"0fbb2bc39bb32fd31ab8d04e14f05980"},{url:"/assets/icon/logo512.png",revision:"8b00566b2e74d718e84a27f520e9b79e"},{url:"/assets/icon/logoWeb afsd.png",revision:"bfda8cfa15bffd2ba1b46cab829bf55e"},{url:"/assets/icon/logoWeb.png",revision:"bfda8cfa15bffd2ba1b46cab829bf55e"},{url:"/assets/icon/notification-icon.png",revision:"b883d74e966236cf53d475afd7fa60b5"},{url:"/assets/icon/offers-icon.png",revision:"985bb8ff16d0d6a647ca884ac1e08b2b"},{url:"/assets/icon/profile-image.png",revision:"76a1a81956ee68629eebdd8ed2b28501"},{url:"/assets/icon/search-icon.png",revision:"7da1511f95cec86404fcac801bb4ec28"},{url:"/assets/icon/target.svg",revision:"2d1bec9f8a2dacb69bc8b3bf2690d886"},{url:"/assets/icon/user.jpg",revision:"0f6b9e83a1de283edfa956c51d39b0a8"},{url:"/assets/images/bg.jpg",revision:"8cc0468e2d6f32c843f54f3f91def5d8"},{url:"/assets/images/dashboard.png",revision:"bb2f5b44ddaf0ce18727d7f0c34e41a0"},{url:"/assets/images/document.png",revision:"a46c694c1e0e40e86415466c10e8c6bc"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/manifest.json",revision:"839cb791f7610b03630e1e0d9af2087e"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/worker.js",revision:"3a0e440c653543a0726ab6434dcbea75"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
