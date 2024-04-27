'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2d9350f33ffc3c9cfc16d66bb92989f5",
"index.html": "136294f73d75cdb3b84d2aa85ede7115",
"/": "136294f73d75cdb3b84d2aa85ede7115",
"main.dart.js": "20fb127f9e70be03e573e6e545e2a2b2",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "a6e44562c7ebf6d26591aca26ffc9f9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4dce1ed704653d6dff765c064e34377f",
"assets/AssetManifest.json": "752058d9335686629c2de228fc9c62cb",
"assets/NOTICES": "300171937a4c64b0b11789c45ab3225a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "dec972bbffdb712f11c6a8f1af3ce441",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "04744f8c7dacdf24177b7c3b7d492144",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fea3755297a45c9852ffdef62b8c39c5",
"assets/fonts/MaterialIcons-Regular.otf": "6f029a486e58ed4db6474559ef901f62",
"assets/assets/Mas%2520msg.png": "e381df89e339323aaad23a5763251f07",
"assets/assets/add.png": "425dd710bebabe1dfa4ac6d0c168f177",
"assets/assets/Fan.png": "424ee38ef3d226f058c987f77b8d1049",
"assets/assets/Email.png": "2c49750b9a942970c036d54187d005cb",
"assets/assets/line1.png": "95d4482bf9ec888e1060735c41d64c6f",
"assets/assets/nav2.png": "4eb85d585fb83ab6fc9ecea4aebcd800",
"assets/assets/Check.png": "3f00f5ead9884ee8e109d14852088b25",
"assets/assets/Feed.png": "bd04529a066e07bff846ffd52762a0aa",
"assets/assets/plus.png": "484b00aa6336270ac300f74f85a9392a",
"assets/assets/nav3.png": "5ee414744b4ed942aad1d9bb0aed064e",
"assets/assets/model3.jpg": "7fa3773aa749bc1e993b2506c437a3d2",
"assets/assets/Muted.png": "25723a11a49fe918556fc8ae5be13938",
"assets/assets/Line2.png": "bd096c3f6dce5d4f93a6aa1c0613cc74",
"assets/assets/Icon.png": "5431459910f74efaae7915014a5740e7",
"assets/assets/nav1.png": "993d8080d4fca3b060f40772411dc9fd",
"assets/assets/flag.png": "99e82fd4b5e7ecae20cf777ec3589519",
"assets/assets/Rectangle%252021.png": "5cea3226718f49068d89d6e96a7f6ded",
"assets/assets/flash.png": "56c88e0703f89820720c1aed984e30af",
"assets/assets/Line3.png": "95d4482bf9ec888e1060735c41d64c6f",
"assets/assets/nav1fil.png": "760e668c2a0e6d12857fad4863edfbee",
"assets/assets/model2.jpg": "0c1f2366727be16575862a5a4b8948cd",
"assets/assets/model6.png": "af970c8bed33aafbdc1cb78cf5833202",
"assets/assets/nav4.png": "773c1cfedc3f1bd7f780f2587800d992",
"assets/assets/Ellipse%252012.png": "7fa131a625e7dfa998fc561c86a8301a",
"assets/assets/__before.png": "377af3bfd5436c0f515106b55766d8a7",
"assets/assets/pre.png": "5711f06fabd5dba9c91f754211eae8bc",
"assets/assets/allgender.png": "8f9462e5dae419c38307c219f0bf9991",
"assets/assets/Vector8.png": "71dd06ce4a953982bcb370d4047b6761",
"assets/assets/model5.png": "ba7e49295d0de2d30e6fdab3fec76a9d",
"assets/assets/Line4.png": "b4cd2b2fc8d43f81c45700b8864f022b",
"assets/assets/Btn.png": "93308cefaf8af979ec92bff53db152ed",
"assets/assets/fire.png": "d3d8e11cba3559ce797e7b256f7296f8",
"assets/assets/x.png": "245da6117b9fd058e6137a1b34b4b22f",
"assets/assets/post.png": "0f6d274a80de361225041465d5ec9605",
"assets/assets/model4.png": "596fbddf7cafb451ef13912df8af3646",
"assets/assets/lock.png": "35f302d7a6e308598d257d719d9f3334",
"assets/assets/Home%2520Icon.png": "cb8c6d9e6c4051c9e03886f1895c489c",
"assets/assets/Vector9.png": "f0eeb7d4db86f38f66027daa9e3e1f05",
"assets/assets/up.png": "96018b12eefa99f456d582d5acdc359a",
"assets/assets/dell.png": "bd76d333b01d3dad7a1d059483caf591",
"assets/assets/all.png": "9804bddc366d06cddd5e6330d5e91f13",
"assets/assets/Asset%25201mdpi%25201.png": "571fa5f81c1d275b7c826b0ff81cac26",
"assets/assets/nav4fill.png": "c890fd56f029f591e6d4fe3086ae5569",
"assets/assets/call5.png": "13ad9f84762728c41cdab002e39b769b",
"assets/assets/call4.png": "4db563d90418a290024ca9ef30880703",
"assets/assets/instragram.png": "07721abc322c682a7644190eedc1a45d",
"assets/assets/Vector.png": "5cfb5161a407f9e88dbbbabf7ba1539a",
"assets/assets/fb.png": "640f2faa4246bbe8b4f75668382263d7",
"assets/assets/pinapplepng.png": "4e40fc6bdc8173057dc284f807a149c2",
"assets/assets/down.png": "d5bf9e9736fe8113e0f1af8bab7122c0",
"assets/assets/Social%2520icon.png": "0d6cb4b786d0a1fff1b3736cb4a64727",
"assets/assets/member.png": "d1eeab17d967600de63f74a2da39e543",
"assets/assets/shop.png": "5af2251831bc684029929f68dcf65656",
"assets/assets/img.png": "0a8d73aef3658ba6084aca9623c72bdf",
"assets/assets/arrow.png": "cda33f25c8a84786edd6ed311e2754d9",
"assets/assets/call3.png": "c4eaf9c6130a90373d33d6c7cfd6ddae",
"assets/assets/Model.png": "72ec5bcfdd3ee5e37c152b7564843f87",
"assets/assets/CTA8.png": "b486359d34dbe61986bb47d7070a12de",
"assets/assets/call2.png": "0ca0a9d47e3a519fc0bef49d3ca74709",
"assets/assets/model.jpg": "309808bd7c212e849bcd8ed3b7e3011a",
"assets/assets/cup1.png": "381deb79c42ca2d6bc7f24a0b71d68ec",
"assets/assets/arrowp.png": "7a75b6a9c121dcd46e13bd9e58ebae6b",
"assets/assets/call1.png": "5aae3bb8d6cadda9c6969ff83fd58142",
"assets/assets/Information%2520Icon.png": "fd09a1f5eeb60348535b9ae3955af5eb",
"assets/assets/earth.png": "77f157dc759fdc8d95737308c062b540",
"assets/assets/CTA.png": "c0a2d59c0e4234e731ba036346dd47fd",
"assets/assets/heart.png": "a5aa2b4b156ee9336dd34863d28f5dd4",
"assets/assets/Vector12.png": "a0000a231e66a0470eb5a46facb828e0",
"assets/assets/card3.png": "989883d07a76802ffb0ed51a2dbc50ea",
"assets/assets/CTA6.png": "18db9d3139bfd016216e1972814cc534",
"assets/assets/Check1.png": "6bcd2eca33a5c9937b2e077b2593a7f8",
"assets/assets/checkp.png": "563fc4ad265fe902f70a2acea5a6b26d",
"assets/assets/history.png": "894c0cc550de089f3ccda55442bf0627",
"assets/assets/card2.png": "96c07873b520b79fecd1c4883cabf5f0",
"assets/assets/cards.png": "8a1161313c554ebd132137a91e2af44a",
"assets/assets/Minus.png": "ccb17c75a3cee74901da50c155dfc433",
"assets/assets/fill.png": "94af1c4b21e6e52194d2302ed5bef418",
"assets/assets/ic4.png": "b24c60e42d81a5ca28219458a3c136db",
"assets/assets/Menu2.png": "ff30393637afec1d5de0d958dca33dfb",
"assets/assets/Vector13.png": "65e043b8e22ea7644d043646ea55ac3f",
"assets/assets/logo1.png": "a6e44562c7ebf6d26591aca26ffc9f9a",
"assets/assets/Menu.png": "d374529d1d06d1723156e5d805cf91fe",
"assets/assets/airplane.png": "77377fb8df5cebeccd0e11678977dece",
"assets/assets/Vector11.png": "a7191f7da5dd6d4bd3e2886c5b2f8852",
"assets/assets/exp.png": "aeabc7783d9b45b95a9881cc4362f163",
"assets/assets/CTA5.png": "885c99229708bacff96833f0739d6086",
"assets/assets/Icon3.png": "b2e44c2f182e9c4fde409d78c68aa6d5",
"assets/assets/Icon2.png": "026cfab29430df8ec2d09ef54a89b268",
"assets/assets/cup.png": "f8266b6aa22018220fcfa9abe89b483b",
"assets/assets/error.png": "761954ad540e7a4f9f0b40f027dfa231",
"assets/assets/Vector10.png": "9d1803eeb5a96048951ff5df9dc59560",
"assets/assets/Logo.png": "571fa5f81c1d275b7c826b0ff81cac26",
"assets/assets/Vector14.png": "71f9d0df83e21ea60a39561f1932bdb1",
"assets/assets/ic3.png": "bc51fe89b9dcd92608ba829eea00427c",
"assets/assets/Avatar3.png": "37ac9464f0882174c7469ae8effb43b9",
"assets/assets/filter.png": "a0e8c349b5fc178b3bac7f56e6627d31",
"assets/assets/twitter.png": "6fedf3be4306ad3d6101d59b2d1ba3b3",
"assets/assets/R.jfif": "f9e9d355c3275e281cfde7ade4fe37ea",
"assets/assets/Avatar2.png": "50ba7c6dd118380d78cef89bd7caa701",
"assets/assets/insta.png": "618d183a506242afa9c8917eb16f9b64",
"assets/assets/ic2.png": "f36ccfa584f55450c0cb69837b83454b",
"assets/assets/Vector15.png": "1d5fed8b5570658675bb01eace8365b1",
"assets/assets/share.png": "c7f23eee6b9deae05a6a9fdeda63c862",
"assets/assets/Vector17.png": "a64b031f1d5f97980ebb882c9e62de54",
"assets/assets/pop.png": "c696a9cf2fe7502737953b2441134528",
"assets/assets/CTA3.png": "6bcde85fcecc8caf9b8bf104e6651a20",
"assets/assets/phone.png": "8f08095b8d20f35948b16993ff5e4bc3",
"assets/assets/CTA2.png": "272d5b72c90cbff1eeca74f6009cb7f5",
"assets/assets/Vector16.png": "64bfa5570a87fcc28d92b86d55605048",
"assets/assets/Input.png": "fe8b78e3f0b319f3345ab0f45c2e8ab3",
"assets/assets/Vector4.png": "e586729fea3dd24903f887c498ec68cc",
"assets/assets/Vector%252017.png": "9a7a8a53021bae8a0833a4470e8d5052",
"assets/assets/collection.png": "8dbf6ded01b94bff2e2387b037ac8a70",
"assets/assets/Vector5.png": "817a20c35926e8527bebd34ca1d79c74",
"assets/assets/star.png": "89e10005b00ac58308e193ccb489bbfa",
"assets/assets/twittter.png": "62d97a24eb6af402cb4096661237404e",
"assets/assets/Vector7.png": "275af174426e02e29ce67353d0decb01",
"assets/assets/contacts.png": "4a4166af7781f34684ec9ae85aa80dc2",
"assets/assets/vid.png": "75f90044b58b666d1823a3135583913e",
"assets/assets/write.png": "74663d27bc7b1d3d422d90532006aec6",
"assets/assets/Rectangle%252028.png": "75662211f8e4ed1be36fd5bd19105105",
"assets/assets/Line.png": "f5374ff36bfd1c63d93d93a79b170cec",
"assets/assets/nav3fill.png": "98eef531b98cd80320048f2ac926cf2f",
"assets/assets/pic.png": "39630468a885d07782d70a03005a5a59",
"assets/assets/star2.png": "62aa0d1ed3023eb1f3193c5fc5b44dd6",
"assets/assets/Social%2520icon2.png": "365bb84c4a97f410fc8fe08b23034cde",
"assets/assets/Addition.png": "aacebc9031f6ba9c6ba03cff489b0cc2",
"assets/assets/Vector6.png": "7908c7c9583532ddd6448e205bb67b43",
"assets/assets/voice.png": "7658a43fb8312bedf3f1bcf9672b76a2",
"assets/assets/explore.png": "2c45cfc710465751264b36dca7b486c5",
"assets/assets/Vector2.png": "57b6baaeb63bf466e0311c642f3fc8bd",
"assets/assets/coin.png": "fc2e0b5126d92dcfa99c0dabba1abb8f",
"assets/assets/Messages.png": "55828c40e2230e816d46c4085d559a74",
"assets/assets/post2.png": "73784ac40cc3be057a6abd352333490e",
"assets/assets/play.png": "a8d14b737634233df0b161c22e1f0951",
"assets/assets/nav2fill.png": "6aa7fe1d06bd4ab955ef33cc7a8773bc",
"assets/assets/Vector3.png": "d6ece052c70d26c9b74cfe0a17e4e0bf",
"assets/assets/Popover%2520Arrow%2520Type%25201.png": "c696a9cf2fe7502737953b2441134528",
"assets/assets/Rectangle%25207.png": "d8d039b397d85c2a4e815dae2cf66cc9",
"assets/assets/Vector1.png": "6edeffa4dace9a2f58d1bed4ea7fe989",
"assets/assets/active.png": "95c3468efd50f0ddb2da395f317d39d3",
"assets/assets/Rectangle%25206.png": "da2dd54b53f7ac2e31ca96a474072055",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
