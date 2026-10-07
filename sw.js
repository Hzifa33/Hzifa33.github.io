/* Cache only public tool pages/assets, never user files or external requests. */
const CACHE='hoztools-soft-20261007-v7';
const OFFLINE='/tools/offline.html';
const CORE=[OFFLINE,'/assets/soft-system.css?v=20261007','/assets/soft-runtime.js?v=20261007','/assets/logo-light.svg','/assets/logo-dark.svg','/assets/soft-refinements.css?v=20261007d','/assets/soft-refinements.js?v=20261007c','/assets/install-prompt.js?v=20261007c','/tools/assets/app-icon-classic-clear-192.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE))));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const names=await caches.keys();await Promise.all(names.filter(n=>n.startsWith('hoztools-')&&n!==CACHE).map(n=>caches.delete(n)));await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==self.location.origin)return;
 const tool=/^\/(?:ar\/|es\/)?tools\//.test(url.pathname);
 const shared=/^\/assets\/(soft-system\.css|soft-runtime\.js|soft-refinements\.(?:js|css)|install-prompt\.js|logo(?:-light|-dark)?\.svg)$/.test(url.pathname);
 if(!tool&&!shared)return;
 if(request.mode!=='navigate'&&!/\.(?:js|css|png|svg|ttf|woff2?|mjs|bcmap|wasm|icc|pfb)$/.test(url.pathname))return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  try{const response=await fetch(request);if(response.ok&&response.type==='basic')event.waitUntil(cache.put(request,response.clone()).catch(()=>{}));return response}
  catch{const cached=await cache.match(request);if(cached)return cached;if(request.mode==='navigate')return(await cache.match(OFFLINE))||Response.error();return Response.error()}
 })());
});
