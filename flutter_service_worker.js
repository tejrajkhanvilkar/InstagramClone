'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/a.jpg": "baa99bbe0b6e989989599c32b1e4b33b",
"assets/adidas_logo.png": "e59c843029823890760476e84bdc6985",
"assets/apple_logo.png": "e723762f27ae9e08d6a86005953ecacd",
"assets/AssetManifest.json": "0f065ff0ef0a7a6840199a6900ffdaba",
"assets/assets/a.jpg": "baa99bbe0b6e989989599c32b1e4b33b",
"assets/assets/adidas_logo.png": "e59c843029823890760476e84bdc6985",
"assets/assets/apple_logo.png": "e723762f27ae9e08d6a86005953ecacd",
"assets/assets/bag.png": "9135148ad72688d50e1adcfcb3ddf38f",
"assets/assets/bag2.png": "8bde4c47746423a332e6203db2417188",
"assets/assets/cap.png": "60abbb40b633f4a0d6f9e0068e103383",
"assets/assets/images.jpeg": "ad4e4a11e88065f497655bfaa4f0b5cc",
"assets/assets/iphone.png": "3a14b0c1a08b945ddbfc999d1857e56b",
"assets/assets/jacket.png": "e0b24425249654db67664b3eb242f3cd",
"assets/assets/nike_logo.png": "afb59ce8c5165a29c0d64a4d1917e863",
"assets/assets/puma_logo.png": "fcb74c5c2ab0d65360aabc46d64e8ac3",
"assets/assets/reebok_logo.png": "e34eaef7b98272ba598aeaa5da6e8ad1",
"assets/assets/shoe.png": "13a20069341fc29144866b78d60e1362",
"assets/assets/shoe2.png": "32497c5921fe2d33680581fcb5a6c83d",
"assets/assets/shoes/shoe1/a1.png": "bfd8351e1957d353aac9d40249490dbc",
"assets/assets/shoes/shoe1/a2.png": "36a6a49f85541a5cf2678c3ebd83d6f4",
"assets/assets/shoes/shoe1/a3.png": "da95dc106471ecd09a73145ee14ea765",
"assets/assets/shoes/shoe1/a4.png": "df272126a1de3cfe96695b771b132660",
"assets/assets/shoes/shoe10/a1.png": "b05d5cfeaa675b750cf78bb2ef76569c",
"assets/assets/shoes/shoe10/a2.png": "b6af8fff24865bd59dd3ab18f2ce2ccb",
"assets/assets/shoes/shoe10/a3.png": "881ece8654521a8ab1bcc468d9ae6114",
"assets/assets/shoes/shoe10/a4.png": "dba7aea318959a96069f699afb3e1f2c",
"assets/assets/shoes/shoe2/a1.png": "48f764333283bec3479f9649b68b164c",
"assets/assets/shoes/shoe2/a2.png": "4bba6f1928875d82a9ca4a4110cde377",
"assets/assets/shoes/shoe2/a3.png": "db6d5b378f22145230a39dd5150da4c4",
"assets/assets/shoes/shoe2/a4.png": "84cb42d79c680a465707cf7eb16ab0bb",
"assets/assets/shoes/shoe3/a1.png": "7c7ec6861aa5cc48d5afc2bcf787382e",
"assets/assets/shoes/shoe3/a2.png": "309d8c3a27887717d38d3cd6bf78c33f",
"assets/assets/shoes/shoe3/a3.png": "df76133b8886432529e28b64c02b51d6",
"assets/assets/shoes/shoe3/a4.png": "2305fa1c8925f51f9146cc8598cc53ca",
"assets/assets/shoes/shoe4/a1.png": "9f6898d86b6f7b946079d7307ffe3da3",
"assets/assets/shoes/shoe4/a2.png": "7bfabf181397fe779824c3c89e8453c3",
"assets/assets/shoes/shoe4/a3.png": "629d71ad834bc5aa00a7fb4084eac958",
"assets/assets/shoes/shoe4/a4.png": "4ce9e8d40b100477f2fb444a90c9d573",
"assets/assets/shoes/shoe5/a1.png": "cedf2f611ccb5fc50a27f7873ab5ac04",
"assets/assets/shoes/shoe5/a2.png": "2c5daaf7b3804feacf1181112e264c00",
"assets/assets/shoes/shoe5/a3.png": "3cf734e92c0dad048fc4cac90242e202",
"assets/assets/shoes/shoe5/a4.png": "e8a4b29e0abe609b50d4a70d51381bfd",
"assets/assets/shoes/shoe6/a1.png": "b2ba5c1686f383185029f372607ff806",
"assets/assets/shoes/shoe6/a2.png": "a351d65db7ab87d14536f2a3c7bb57d8",
"assets/assets/shoes/shoe6/a3.png": "d2f2d4831480998562a829cb8cae2def",
"assets/assets/shoes/shoe6/a4.png": "4a39200102b70bd7f8ad259be5776434",
"assets/assets/shoes/shoe7/a1.png": "faf573f5514ebdfa132c59daf846bd5e",
"assets/assets/shoes/shoe7/a2.png": "3dad2e518c758f963401c8277b516270",
"assets/assets/shoes/shoe7/a3.png": "ce762dda4b5d1a6315e73872b859372a",
"assets/assets/shoes/shoe7/a4.png": "07a6abc3001cd5f99ca5247e85f4788d",
"assets/assets/shoes/shoe8/a1.png": "e5cbdad33da565a71bfc05c0348cb772",
"assets/assets/shoes/shoe8/a2.png": "fc53637f34449e93918889511d95624d",
"assets/assets/shoes/shoe8/a3.png": "be05e0f5fbd7793d0691732c3ac474f5",
"assets/assets/shoes/shoe8/a4.png": "e271f986d705fc2e5da9ce62bb6cde54",
"assets/assets/shoes/shoe9/a1.png": "2ed5da13ed709a2c9509eac689ddf353",
"assets/assets/shoes/shoe9/a2.png": "ed1e2cf5f1e96aac6999216af70ce86b",
"assets/assets/shoes/shoe9/a3.png": "1593b671a28b703696ca0d000d75d35f",
"assets/assets/shoes/shoe9/a4.png": "435a9e176a875c654ae8b97f3c1ad277",
"assets/assets/tshirt.png": "6a1e6fc894b5b438fa07fe612242dc7b",
"assets/bag.png": "9135148ad72688d50e1adcfcb3ddf38f",
"assets/bag2.png": "8bde4c47746423a332e6203db2417188",
"assets/cap.png": "60abbb40b633f4a0d6f9e0068e103383",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images.jpeg": "ad4e4a11e88065f497655bfaa4f0b5cc",
"assets/iphone.png": "3a14b0c1a08b945ddbfc999d1857e56b",
"assets/jacket.png": "e0b24425249654db67664b3eb242f3cd",
"assets/loading.gif": "a2debfb85547f48c3a699423ba75f321",
"assets/nike_logo.png": "afb59ce8c5165a29c0d64a4d1917e863",
"assets/NOTICES": "56c1894a7cecd650c5ab58c55000743b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/puma_logo.png": "fcb74c5c2ab0d65360aabc46d64e8ac3",
"assets/reebok_logo.png": "e34eaef7b98272ba598aeaa5da6e8ad1",
"assets/shoe.png": "13a20069341fc29144866b78d60e1362",
"assets/shoe2.png": "32497c5921fe2d33680581fcb5a6c83d",
"assets/shoes/shoe1/a1.png": "bfd8351e1957d353aac9d40249490dbc",
"assets/shoes/shoe1/a2.png": "36a6a49f85541a5cf2678c3ebd83d6f4",
"assets/shoes/shoe1/a3.png": "da95dc106471ecd09a73145ee14ea765",
"assets/shoes/shoe1/a4.png": "df272126a1de3cfe96695b771b132660",
"assets/shoes/shoe10/a1.png": "b05d5cfeaa675b750cf78bb2ef76569c",
"assets/shoes/shoe10/a2.png": "b6af8fff24865bd59dd3ab18f2ce2ccb",
"assets/shoes/shoe10/a3.png": "881ece8654521a8ab1bcc468d9ae6114",
"assets/shoes/shoe10/a4.png": "dba7aea318959a96069f699afb3e1f2c",
"assets/shoes/shoe2/a1.png": "48f764333283bec3479f9649b68b164c",
"assets/shoes/shoe2/a2.png": "4bba6f1928875d82a9ca4a4110cde377",
"assets/shoes/shoe2/a3.png": "db6d5b378f22145230a39dd5150da4c4",
"assets/shoes/shoe2/a4.png": "84cb42d79c680a465707cf7eb16ab0bb",
"assets/shoes/shoe3/a1.png": "7c7ec6861aa5cc48d5afc2bcf787382e",
"assets/shoes/shoe3/a2.png": "309d8c3a27887717d38d3cd6bf78c33f",
"assets/shoes/shoe3/a3.png": "df76133b8886432529e28b64c02b51d6",
"assets/shoes/shoe3/a4.png": "2305fa1c8925f51f9146cc8598cc53ca",
"assets/shoes/shoe4/a1.png": "9f6898d86b6f7b946079d7307ffe3da3",
"assets/shoes/shoe4/a2.png": "7bfabf181397fe779824c3c89e8453c3",
"assets/shoes/shoe4/a3.png": "629d71ad834bc5aa00a7fb4084eac958",
"assets/shoes/shoe4/a4.png": "4ce9e8d40b100477f2fb444a90c9d573",
"assets/shoes/shoe5/a1.png": "cedf2f611ccb5fc50a27f7873ab5ac04",
"assets/shoes/shoe5/a2.png": "2c5daaf7b3804feacf1181112e264c00",
"assets/shoes/shoe5/a3.png": "3cf734e92c0dad048fc4cac90242e202",
"assets/shoes/shoe5/a4.png": "e8a4b29e0abe609b50d4a70d51381bfd",
"assets/shoes/shoe6/a1.png": "b2ba5c1686f383185029f372607ff806",
"assets/shoes/shoe6/a2.png": "a351d65db7ab87d14536f2a3c7bb57d8",
"assets/shoes/shoe6/a3.png": "d2f2d4831480998562a829cb8cae2def",
"assets/shoes/shoe6/a4.png": "4a39200102b70bd7f8ad259be5776434",
"assets/shoes/shoe7/a1.png": "faf573f5514ebdfa132c59daf846bd5e",
"assets/shoes/shoe7/a2.png": "3dad2e518c758f963401c8277b516270",
"assets/shoes/shoe7/a3.png": "ce762dda4b5d1a6315e73872b859372a",
"assets/shoes/shoe7/a4.png": "07a6abc3001cd5f99ca5247e85f4788d",
"assets/shoes/shoe8/a1.png": "e5cbdad33da565a71bfc05c0348cb772",
"assets/shoes/shoe8/a2.png": "fc53637f34449e93918889511d95624d",
"assets/shoes/shoe8/a3.png": "be05e0f5fbd7793d0691732c3ac474f5",
"assets/shoes/shoe8/a4.png": "e271f986d705fc2e5da9ce62bb6cde54",
"assets/shoes/shoe9/a1.png": "2ed5da13ed709a2c9509eac689ddf353",
"assets/shoes/shoe9/a2.png": "ed1e2cf5f1e96aac6999216af70ce86b",
"assets/shoes/shoe9/a3.png": "1593b671a28b703696ca0d000d75d35f",
"assets/shoes/shoe9/a4.png": "435a9e176a875c654ae8b97f3c1ad277",
"assets/tshirt.png": "6a1e6fc894b5b438fa07fe612242dc7b",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ba0aa07720af0c0902e5f5ce7e17227e",
"/": "ba0aa07720af0c0902e5f5ce7e17227e",
"main.dart.js": "01b6562dedcae56150a0d16a47db0b6b",
"manifest.json": "52fdb6a8291d1fc3109e30746bc54920",
"version.json": "42dc7aa61513639e0337d0b0cb36a133"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
