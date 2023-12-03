/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "15647b56d89f0699634edbf181762842"
  },
  {
    "url": "assets/css/0.styles.c1fd8c69.css",
    "revision": "6122eea76c36ed4c363d90011b42eb79"
  },
  {
    "url": "assets/img/business_actors.541b7f52.jpg",
    "revision": "541b7f521c8d5af28423294fb1c7a3eb"
  },
  {
    "url": "assets/img/ckan.78bddb68.png",
    "revision": "78bddb68dcd27ea45b695b00956a6434"
  },
  {
    "url": "assets/img/cloude.b48a1c44.jpg",
    "revision": "b48a1c443f1f03e26e278576b8bd44ca"
  },
  {
    "url": "assets/img/crowdsourcing.abc54512.jpg",
    "revision": "abc545121419715bb1bf3e4b2de91384"
  },
  {
    "url": "assets/img/data_gov.0a1216bd.png",
    "revision": "0a1216bda60133bf7e84f798dddfbf87"
  },
  {
    "url": "assets/img/database.aba810cd.jpg",
    "revision": "aba810cd53c228329a5c00e6ee060b99"
  },
  {
    "url": "assets/img/Delete.5b9906b8.png",
    "revision": "5b9906b8d39794df30346b82620a2329"
  },
  {
    "url": "assets/img/deleteUser.3c39f945.png",
    "revision": "3c39f945edbf8991f2ddfa6d3646793e"
  },
  {
    "url": "assets/img/ERR_Diagram.eaa9b24b.png",
    "revision": "eaa9b24b80e9a9dcd975e15d9cc23b6c"
  },
  {
    "url": "assets/img/GetAll.1540bbfb.png",
    "revision": "1540bbfb0dcf12d49e66a8edc0cc9eb5"
  },
  {
    "url": "assets/img/getAll.4c1c42d8.png",
    "revision": "4c1c42d8de443bd7c3b00e77331abf86"
  },
  {
    "url": "assets/img/getById.dd7465ff.png",
    "revision": "dd7465ffdc3e551593e0443c973130b4"
  },
  {
    "url": "assets/img/GetUserById.601953bc.png",
    "revision": "601953bce046bb3006934d12f43a851d"
  },
  {
    "url": "assets/img/image.c8b850c5.png",
    "revision": "c8b850c56ab0ab195894edfad94302b4"
  },
  {
    "url": "assets/img/launch.a0b40561.png",
    "revision": "a0b405616a5541be0ff314836d1bf3ca"
  },
  {
    "url": "assets/img/machine_learning.31b771f2.jpg",
    "revision": "31b771f2debbfff781cf573473788a37"
  },
  {
    "url": "assets/img/opendatasoft.bbab4790.png",
    "revision": "bbab4790100e26097cadd67de1ddbeee"
  },
  {
    "url": "assets/img/Patch.32d8fa52.png",
    "revision": "32d8fa5236fa2958f93eab82d15cd854"
  },
  {
    "url": "assets/img/patchUser.dd93057e.png",
    "revision": "dd93057edcaf2ab0771f60db23188044"
  },
  {
    "url": "assets/img/Post.d935b178.png",
    "revision": "d935b17848ed6fb3dd25461fc31b98a9"
  },
  {
    "url": "assets/img/rbac.0a226d39.jpg",
    "revision": "0a226d39b61a5e540e6d408b2e656997"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/socrata.34930cdd.png",
    "revision": "34930cddd7c17fd3ccfce8e0a08e4cb2"
  },
  {
    "url": "assets/img/userWasNotFound.86370e2c.png",
    "revision": "86370e2cd021d2f3cb184bc953e2f2da"
  },
  {
    "url": "assets/img/Validation.519a70b7.png",
    "revision": "519a70b7eb0c330531d24c8bdd1b99ae"
  },
  {
    "url": "assets/img/webscrapping.688f5706.jpg",
    "revision": "688f570695020ea6ee0d402bd5542cbf"
  },
  {
    "url": "assets/js/10.cac0190d.js",
    "revision": "c2e943787049f84852a1b15009c20d4d"
  },
  {
    "url": "assets/js/11.538eadb9.js",
    "revision": "074d28870dd4ab845655755fb36005a4"
  },
  {
    "url": "assets/js/12.2107dadf.js",
    "revision": "020f85bfcf01f52494361a1c609d476b"
  },
  {
    "url": "assets/js/13.1b88355b.js",
    "revision": "131c25edbb3e2a35198e26d0fd4adf30"
  },
  {
    "url": "assets/js/14.f6df92f2.js",
    "revision": "0ea243c4c3e5f2d78c20d8e1c44f244d"
  },
  {
    "url": "assets/js/15.88893643.js",
    "revision": "67f8074ae46453c1ecab0ce55d6f966c"
  },
  {
    "url": "assets/js/16.612f7894.js",
    "revision": "089d5606e3766034fe84754be1595dc2"
  },
  {
    "url": "assets/js/17.b885c34f.js",
    "revision": "c46c459b24e47578083e7fd37593e2ea"
  },
  {
    "url": "assets/js/18.e44c8fe7.js",
    "revision": "e5f28d199a77f4db6b9465a558a4d73d"
  },
  {
    "url": "assets/js/19.d7fdc3bf.js",
    "revision": "af5d5c69e6fa4e54bde77242d07a7f26"
  },
  {
    "url": "assets/js/2.793fa3aa.js",
    "revision": "b46e428f8969955a12abc9639e3c80c6"
  },
  {
    "url": "assets/js/20.1578d0b6.js",
    "revision": "5400e20fd28297ec25b405631d2ca80c"
  },
  {
    "url": "assets/js/21.0e4d64e3.js",
    "revision": "fa5dbfbc6863476f18be4e807d954cef"
  },
  {
    "url": "assets/js/22.2c96e8a3.js",
    "revision": "e9e7365f174e69cfe2de55ab3026293e"
  },
  {
    "url": "assets/js/23.1f16e96e.js",
    "revision": "49b20957c009510e09c1008e82ab453a"
  },
  {
    "url": "assets/js/24.c62b5ea7.js",
    "revision": "acd39aab7cda4f6b16d3e980e1a9716a"
  },
  {
    "url": "assets/js/26.b7d17ceb.js",
    "revision": "8b1bc808543c94035cca0d470bb98355"
  },
  {
    "url": "assets/js/3.55df8825.js",
    "revision": "f65a480e3749de570467c007e5a1bb9a"
  },
  {
    "url": "assets/js/4.9beda4c1.js",
    "revision": "68db5da25a5c412b2002b04f68820a13"
  },
  {
    "url": "assets/js/5.42914532.js",
    "revision": "c8a8ea53b3d60935efdf8cc51dbaae56"
  },
  {
    "url": "assets/js/6.55be187f.js",
    "revision": "d4e95e7d31ab063d103c03ec7029cd29"
  },
  {
    "url": "assets/js/7.0ddca428.js",
    "revision": "5d33f1b582df6ed3b1fbe1095cca1c19"
  },
  {
    "url": "assets/js/8.b61759ed.js",
    "revision": "0a6f4e60bf7297a5008ac01bb61fef2f"
  },
  {
    "url": "assets/js/9.6e0a9917.js",
    "revision": "b772e7fe0bb8a967418d6cf288428d71"
  },
  {
    "url": "assets/js/app.ae7a0c35.js",
    "revision": "5ae7de17428cd0360ae72439290dce64"
  },
  {
    "url": "conclusion/index.html",
    "revision": "b2b6844e57bf19df10f4c3ba828a77ad"
  },
  {
    "url": "design/index.html",
    "revision": "8ae248ad139def21e2745eb84ecfa52c"
  },
  {
    "url": "index.html",
    "revision": "56e09c9ffff9535670b4205adaa01453"
  },
  {
    "url": "intro/index.html",
    "revision": "8b681d38e526dfe308c2560bbc43a8a6"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "eaab1a8a67c78fc886838b44fdbfa0ee"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "a1fdc4f829b50e57c88b8855069bd757"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ff751a0b53c02e65364a47f9eaeee78b"
  },
  {
    "url": "software/index.html",
    "revision": "41eddb67a1661f471bb2d25d8c1017af"
  },
  {
    "url": "test/index.html",
    "revision": "9e010292e3cf94077244395f18dc815a"
  },
  {
    "url": "use cases/index.html",
    "revision": "3cc51a9daa9917ab0cf2125a24fd4d85"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
