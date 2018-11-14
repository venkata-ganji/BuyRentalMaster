/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["1.623912f97b23a24faaa7.js","a8556eb073468fedc16174b7ab137239"],["10.53e935dbd4061d19e3ae.js","bac6fe3f8e3b61147ea4800612e7b466"],["11.860cc35dd019e0bf7bdb.js","8eaab6fb7a641ada1adf66bfe0126096"],["12.f4c391dba4bbd6454a3b.js","03d10cba4a7a692d1ef8263b8cfcf55a"],["2.14733f2269d21d87b797.js","7b17e3b65014c4a7ac993d5f3df704a6"],["3.dd601e064bea7d17e7a0.js","a42df2ec94145efefab0078849f99ac6"],["3rdpartylicenses.txt","f2cf3b9d48a08e8dd7c6dc4e626e673d"],["4.cfc2951001e8d2e24c3f.js","eddfacf334daf7a0e7bd7cd1b3bac6a6"],["5.8115810807c26d84b03b.js","9a096f55025000eb45a66a1c8de17265"],["6.e947c1338d03edc2c3bf.js","df9a168ce6540ecd669dac715ced5dd1"],["7.135974ed71da6c9b889a.js","f6ecac0b150eaed03919da2ec5045dc5"],["8.27faffc5715ce590dd46.js","6055d984f9316bf9c25d6f9ba771b4d1"],["9.c51f30f6444ef53ac039.js","c4c2226fe2554f8441e2771b17aa1ff8"],["assets/data/banners.json","4bfa2700d9cc11010e18981c4c2b95e9"],["assets/data/brand-products.json","9e6ff935d0a53d52f7cf53800a60a887"],["assets/data/categories.json","bd83c62227c0d47e4610b8eb3b4eabd2"],["assets/data/featured-products.json","f4b48066cffbfbea7c3a547422f08ffe"],["assets/data/new-arrivals-products.json","a71bfed0aefe9a395ceae0104c451064"],["assets/data/on-sale-products.json","e29edb01d9b50b45d6045cd140c3c72f"],["assets/data/product-1.json","c2ec119c936f50ab520310b6da58fde2"],["assets/data/product-2.json","ffe6e2e4baefa70b1ef2b8887dcc4130"],["assets/data/product-3.json","59b2bd95a04e244a479dcc8aa8d8a6bc"],["assets/data/product-4.json","632e1af490412fee89bcb919037fa5e2"],["assets/data/product-5.json","694b37a27d68e0a5df128c97000495d9"],["assets/data/product-6.json","238d1e74d5cc0cd1e92c52a7e3401bf7"],["assets/data/products.json","f4b48066cffbfbea7c3a547422f08ffe"],["assets/data/related-products.json","baf04ed046a64e7d20cae3a658845c79"],["assets/data/top-rated-products.json","b03107ecdac9c99cde901857d7e6d331"],["assets/icons/icon-128x128.png","c868628f85920746394b72634dfcc4f9"],["assets/icons/icon-144x144.png","cd8497548afb834dda62757379542627"],["assets/icons/icon-152x152.png","fe8578eb15d077ca8c61b136d721f816"],["assets/icons/icon-192x192.png","cba69c4d0a85d58c52948906f09cc2e5"],["assets/icons/icon-384x384.png","09e0f809670656f359124debc2f18af5"],["assets/icons/icon-512x512.png","499374c2e19adb5ef3b3dadc7cc53412"],["assets/icons/icon-72x72.png","18f662ec383f61bfe9db19a5a43fcec5"],["assets/icons/icon-96x96.png","5e7bb9c1b59630a0a57a10b506ba83b8"],["assets/images/avatars/avatar-1.png","081cadc90d872b2c20862cc3b2bc93c6"],["assets/images/avatars/avatar-2.png","bcad6a8b513f2c3b730b0877f180d2c0"],["assets/images/avatars/avatar-3.png","764bd556d973a55efe6d5b93eb474e5f"],["assets/images/brands/aloha.png","cca01e60c4d2a7eb061cb88fb84d1c44"],["assets/images/brands/best.png","7e20bbb91f407382cad59729627b7cbf"],["assets/images/brands/bravo.png","731e6754fb4a63761af19603e9e600fc"],["assets/images/brands/congrats.png","cdf744e18cff2b44f75538604b33a8a3"],["assets/images/brands/dream.png","5804b758453ddb844d2da35f9a6bcf73"],["assets/images/brands/easter.png","4fa0420403fa0024d900b1188588c347"],["assets/images/brands/king.png","9da55460b8cc95ca86c0d7ee0007ce1f"],["assets/images/brands/love.png","c4b84d85b681c284991becb523562710"],["assets/images/brands/original.png","123cd0d4d018d3201a90ac4f3602d07e"],["assets/images/brands/retro.png","eb45919a570cd68a50efd1c4486c8227"],["assets/images/brands/special.png","63c7a9a647c04f3d82c9998bc9c8a200"],["assets/images/brands/the.png","82e5979f1afe0780c2c87715f057a1cf"],["assets/images/brands/with.png","1aea03249cc7a48669a2abc30c5fc9fc"],["assets/images/carousel/banner1.jpg","5c6245013ed632535fb0ac595fe563f2"],["assets/images/carousel/banner2.jpg","462d1bfaa4d7d561d8581f9af664906a"],["assets/images/carousel/banner3.jpg","52f3a660a1fd75e40065a645edd2e5d2"],["assets/images/carousel/banner4.jpg","d2b53fea76186def48049ffe3fa6d5ed"],["assets/images/carousel/banner5.jpg","31671570bbb80abb7d3760b060f9ed35"],["assets/images/flags/de.svg","c4aec2f3498421f91d9f066ba8ed5626"],["assets/images/flags/fr.svg","4163a98ec1a06b374da33ba7cb4efdcc"],["assets/images/flags/gb.svg","5aef6544adb270241539dad6b30b192d"],["assets/images/flags/ru.svg","7a935957668f3f7e428f4ad90bc39116"],["assets/images/flags/tr.svg","66025830e6e30579c870039158c00acd"],["assets/images/logo/Logobr.min.png","4411f175ab8358e06148bb26d9162a45"],["assets/images/others/card-icon.png","912ac6e94aa72cb3bb6f45182224e45d"],["assets/images/others/mega_menu_img.png","96828fe556e054268940ecfe2ac7881c"],["assets/images/others/user.jpg","8baf20bf27da3b5a5088d963ef4591e9"],["assets/images/others/zoom.svg","d24b74ab84ae6a3f463707d33ea5c391"],["assets/images/products/headset/1-big.png","ed9901b6cdf9cfdef42d9926e0599885"],["assets/images/products/headset/1-medium.png","4ed2ced1679ff5c31db992b504ccfe5e"],["assets/images/products/headset/1-small.png","c501a89a87bb68166d3eb137ea87045e"],["assets/images/products/headset/2-big.png","65bd67cda175c539df6a09ac9e12d928"],["assets/images/products/headset/2-medium.png","97d50907f8dd7fa0c53f1867d65b87be"],["assets/images/products/headset/2-small.png","01707008930f815563c87ec4763fd350"],["assets/images/products/headset/3-big.png","33fa6758e617ce116f265c26879536ec"],["assets/images/products/headset/3-medium.png","45b301dc6ac95603a734ecb452d24d1f"],["assets/images/products/headset/3-small.png","cbf8eac1b1c8dea8df5e27594a4c6584"],["assets/images/products/keyboard/1-big.png","c9b0cc966998097d9892890b897940af"],["assets/images/products/keyboard/1-medium.png","dff253d27e4898d397e2467c6fc5ceac"],["assets/images/products/keyboard/1-small.png","a38f74b261a98690d52164212b576f28"],["assets/images/products/keyboard/2-big.png","2c654429709aa682341ffffcce9828aa"],["assets/images/products/keyboard/2-medium.png","4c43dad4d318b6a3315fa09549f04acb"],["assets/images/products/keyboard/2-small.png","bc4cb953b669332b0ff28a1699d4171f"],["assets/images/products/keyboard/3-big.png","968c0b4b16b298681bfa4bc70e0b3b26"],["assets/images/products/keyboard/3-medium.png","0bee689420520b06cf3873bb5bb30613"],["assets/images/products/keyboard/3-small.png","a43830e236749f8e3414d408d3769d87"],["assets/images/products/pc/1-big.png","3bf23dbabb9431d87810a67d6da6f42b"],["assets/images/products/pc/1-medium.png","478ffa6a0e54f9cd91e8e5ba3be0f540"],["assets/images/products/pc/1-small.png","44df17aeb6e1f6a07d33bf25ab819460"],["assets/images/products/pc/2-big.png","83d7dd9a2c8d66a407d9bd7e23fd8f9f"],["assets/images/products/pc/2-medium.png","fd3e93f8d467620c88b7c9cdc4d4ae3c"],["assets/images/products/pc/2-small.png","57ad454ee8eb4f156e44dda4506e9dfd"],["assets/images/products/pc/3-big.png","f85376f0ea64709257ce1c2bebc3d381"],["assets/images/products/pc/3-medium.png","76df983b1e1b411ffc790cec1c52b516"],["assets/images/products/pc/3-small.png","efd9f9fc53cdb9bc241af5728cf4d9ed"],["assets/images/products/pc/4-big.png","445f992f414a3ea7e916f245e47e8558"],["assets/images/products/pc/4-medium.png","b998aceaaea2ced081dca998ded84a82"],["assets/images/products/pc/4-small.png","973675667d66a1ed19d44ce911e3544b"],["assets/images/products/pc/5-big.png","d7ffc77098ed73bf284160fb25f01d4c"],["assets/images/products/pc/5-medium.png","8c8cac9c069382edaa0950be0f004348"],["assets/images/products/pc/5-small.png","5c84635fe8f33a12f7fa6781a1a3fe39"],["assets/images/products/pc/6-big.png","bf46f38bd6b0b2545ef62e98023420d9"],["assets/images/products/pc/6-medium.png","a8eaab1c516de99728b73c045a7c5163"],["assets/images/products/pc/6-small.png","1c5ccd257b658dc554bf4bd23c9f8b1d"],["assets/images/products/phone/1-big.png","bacd4ffb1b4a101b79ae861019dfbb1d"],["assets/images/products/phone/1-medium.png","ef0536f1abc0436a0a24c6feef74451d"],["assets/images/products/phone/1-small.png","8d4c1d24390f4c3ed55ae1254daf1c8c"],["assets/images/products/phone/2-big.png","c5ce780ed16272aa3ba75810da5dbf21"],["assets/images/products/phone/2-medium.png","54e3f5916dc0124fa8a8e02586693657"],["assets/images/products/phone/2-small.png","bcbafd96492120b87a4b985cee73c291"],["assets/images/products/printer/1-big.png","27c8c35922668291742049be331594fc"],["assets/images/products/printer/1-medium.png","6d0e0dbf2c9130f03d3caa25ecaf902e"],["assets/images/products/printer/1-small.png","e65a3e2df15260006d7771c4938b2dc5"],["assets/images/products/printer/2-big.png","1f0174b01dc584456b8b9f3a6820b591"],["assets/images/products/printer/2-medium.png","9966ce8c696a0ca188a0909fd1b5ce8a"],["assets/images/products/printer/2-small.png","dc74f94b3351d6cf03eb1f5e0450efc6"],["assets/images/products/printer/3-big.png","846e69a0040317f414dbc19095b5f3cb"],["assets/images/products/printer/3-medium.png","2cfa67bb4af1bfeb618fa95b18bd3d6c"],["assets/images/products/printer/3-small.png","630dfaf0f610dd9fd4380aadfaddc361"],["assets/images/products/printer/4-big.png","3807a0aeb8a0735d310840d3fb33df1a"],["assets/images/products/printer/4-medium.png","9bd365cf81bc85eb3ecf699b0c04e168"],["assets/images/products/printer/4-small.png","f973e970b2b7be0755a58f04b3d11aa1"],["assets/images/products/printer/5-big.png","8896500e5186cb808510d723aa58498f"],["assets/images/products/printer/5-medium.png","d3f9f978f5c60bddad693d8966139fa0"],["assets/images/products/printer/5-small.png","95534858a81bea56715d21487e4099bd"],["assets/images/products/probook/1-big.png","d35d6f05f351b08b69f3212ae613c0b8"],["assets/images/products/probook/1-medium.png","f34fea2394124b55e8666f170f5e0226"],["assets/images/products/probook/1-small.png","bf3077c850fd8a67a5c3382841bd34b4"],["assets/images/products/probook/2-big.png","0de4d022408e7705ed94c48b544bd02e"],["assets/images/products/probook/2-medium.png","006c077b0fb54c956c86803b459de6e4"],["assets/images/products/probook/2-small.png","77c3f00163d5f9ff1284839694d0df85"],["assets/images/products/probook/3-big.png","90b8707749c3f10b022a5fd8954fa6af"],["assets/images/products/probook/3-medium.png","64ee91b3a9332f5bec9a4d0fa9424c36"],["assets/images/products/probook/3-small.png","2b12f8cfbfaf7f14cc4a55b7ecdc9af6"],["assets/images/products/probook/4-big.png","0ffeddff933682e492268f629f1c15d3"],["assets/images/products/probook/4-medium.png","73882f6066d6589dbd12a4dbb1efa6f9"],["assets/images/products/probook/4-small.png","fb1084de2baee1e5e0b3029cf2df38a3"],["assets/images/products/probook/5-big.png","c14668b4f4d56c0598918b269cd957d4"],["assets/images/products/probook/5-medium.png","c5a51d41c8786da387c5b3e2bf396fa5"],["assets/images/products/probook/5-small.png","c72fbc8bc841f8fc2cd21a2d379c6665"],["common.7da9c45c9dd1df9bcd47.js","21c3bc95cc74d810109b60fc29f060c4"],["favicon.ico","8698c27163b4b90c43488008037f59ca"],["index.html","8d77fb6934ec58e5430a8abbe5bb73b6"],["main.04b8cdf74100812a2c34.js","89a31c1977bc0d287688e9f0cb46a191"],["manifest.json","e95ab3bb9ab97b3dc06b0ab95a85488a"],["ngsw-worker.js","cb6719ed5707a91958e4936fd7391a61"],["ngsw.json","a6c1e2f802c02cfd033020ac6853bdea"],["polyfills.1b5fae4a810b1288db9d.js","dc91ea92549314ddf0e6456978e926cd"],["runtime.7e164831fda20010ed00.js","dc945389ec5c21cf729a48fbea34de62"],["safety-worker.js","9963b75a25ae24de13db3e8e39ab027b"],["styles.4224feaa807718f2dc74.css","ce3fde71fc535adca2bff56058ed24e1"],["worker-basic.min.js","9963b75a25ae24de13db3e8e39ab027b"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







