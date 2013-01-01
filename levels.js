﻿var levels = [];
var levelspers = 0;
levels[0] = { endl: 0, desc:"这让我想起了HelloWorld的时候。。",titles: "入门仪式", hash: "6f1d2c9dd7ae92f7c449afe3c2efa5de314eec4633271b482e0405ce4c23f57145133a96e1fc187c85f7f32cab88ad575599e766e207ecac2eae37ace8291dac", encqus: "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" };
levels[1] = { endl: 0, desc: "会码代码也是件必要滴东东~", titles: "Coding", hash: "5ef5981d033613527f18a76b2accc12972ca1f8e5814369aeecc938781fc881e777abb5be8b53ef04e02daf63b94d35f17f9b7630e60177db3f0afc62c958a94", encqus: "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" };
levels[2] = { endl: 0, desc: "这大概真的是外星人的信息麽=。=", titles: "ET's Message", hash: "f8ee85feb48b98e4b7bf5d4d89dfc0496bbe45636d0cc1bc1d3b6936ec822b6ad50fe32b3da6e99b49a32b438f7f3a823e6530b25f91ff35fb871fbf9d059260", encqus: "U2FsdGVkX1/hOcYtsy+QNlt1kFLe5hIgy5z/YufiRQ6/mXAEo4GWQclw/RGoLZjbsAWUCZ9Uyt5GIOWhpIZMJOQs2iDRx9GjB/LugG3q2rVG169pvEmOWD1mGpEJsGNLO1TNT7tg3odrjZ69eb9cAFhtv0g85Os+1pDTV9fJ2463mO7hnRpfpto6xF+R2HpFd3tAhwVyuK/7cX4P1JfmAvtOgs4ypspm3hbhmHedCWteCJIZqtreXqPTml1P2wQ8wMzT2r3MyUy3x1VuE2maGIWQkivdyFlcTyVuHAcv/CihvdSe9d792fmVYyYbZ24dO/cP3coY2HWxI2wDbVHkRV1+HCTYnMNAbG+23ix+7DsaLgCH3mC1JNxulIjBmH+DweEc+lE28AzVG7IywLLFXwvxy721mZTGcXTtL/EHbaTomq6X/in7GbMiufE8T0/4XVifY+xbolg/oBPhTSr9Z4Xn4QJAFSljGTo7liVpSAN5L5YI77w6mbT3gM0fiMbVd0Z4/aSESzaIzcGNGZ8M/98PhdPoZq6YZdHpi1JOalhTX+i9Q3fAX5L+jPZb3v77Dm/PnxFBfvQkJU7TmE6Inht9KLWBUnW3TG5UoI/UjRNEJmI10i2tV1zpBQgZcn7T63/c5A96ciWUvnttU2Sxx9zV6OrtwQZp5G0In/pwPtgimcAEGVIGHKlhqrQoGP6hbSVGrZ4bPNZWlKZ2HYhk0j4EDkUQQtBaqyztcxmasiwlm/tDnFafV2C5v7UnecEg/OE08USj0JxbDSZLlr5/rRgWHshB+l+J9zIgh6L33EeCjoj2UdMJZ9Lo3VezFEhCoeSTMUnt7YH43OUt6S6RDr1jvSXNtRZHQt2DIJi/Mrs8SdAFdcGFdSRB8CWG4Nwx1W4Gu+Jv3nRQiEzekvHPVK5yVDU+W31uAQlBrDLz1YsGZqCzOgkG2B9EcYH/HXcIBjy1475pkPanU2jpstIb9d5VQlNWhxXNHYqHxU6caBPxYvC1oA4zEqsgQtuOomi0ZU9Ni3ArRqw7GIaVp2V7II2M8KMjegQQaT2sR14EEe7AEC7kwyf0GREUpiwZidPzd81zPVox9fJiX5H0boOEvAsOQg34FA2ccUXNeoKC6Cc4u403EVLTVv+ZAbcpjJRtzExF0a8X6viRSTxXEcP0a0iM3ybklBSBYrNMIs/OIOVTGf6G6e0dyHnJMKNXwTr5lCKxSpwRD7EplofCfVmPivwmET54tntRDvEGC1i3nKcTfFxH7pOQ8JQvwihZdZlw2vtGLlSgTTQt1xrxriEcYpPeOPAmjr3cPnD+suxLibw=" };
levels[3] = { endl: 0, desc: "每题一分", titles: "多项选择题", hash: "31b1a0e56b67b0f4845a8dd66707be0fb74c7c0cf32295c4461731e9f376cb645165ed2769a25b214587cf455cf697fa05407fb5b51122835234457d40dcc9fe", encqus: "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" };
levels[4] = { endl: 1, desc: "Brainpast！", titles: "通关了！", hash: "4d78aafa5083fc2bd428cfe26183632b4528fa274fdedd76921bd73679554a159a5deade70640c7185a091146e41c94763c28b3fa4b14b74a429f10b1cf9d799", encqus: "U2FsdGVkX1/M95r6B6D9L7p0fjf1p/6FIYedweciNanWJ4nL8yAuQy/mv0m6R/XZLVHJpqjxC34AyOsJnlMgcGRgVZ3UsoabN5MspLk83reCOg5GooTdenIh3JIU6nTNiytvciFlqlrI+NwI2lHGFaDNPFS/QnslArgy2OniRpJfSmWedGXH0JkYY/13Z5FfTuRjbGdhILGaoQf98WvXYKdJ6I7NyUU8VG09sxGfuTKSsGhR7bFOwqTipOZAdgUQYr5Ly2tpB/JhYNFxk6TwLkL0h8qjid7QBMNjE4nYiA24nFNeZ/AQx1pDEKiJNrJJ9dsecM+scDz++Nh1eDGilbwBAoWcZMXHCtJ/y3u3OtuYiX+bzni9bWG3h46+JrAejJpE5BjQojl24BiaMDweBJLPAYlmlxLJMDxdru5VAHh1YJ/N5WabmMt29g8lTXA0AyV5eIex0xw91mgWuQ/b4sY29ySHHWyiTqeSyWtERyJZSzyrgJ/Wg2H31MiOWA8l/yUC/rzjr1tAElInnmcIMxHJQeHp0OQeFNe31AjthRe5oB2sOGkRHP6gtMpnp6T+ufkLmB+GoCBcC52iwbrT62sC4JONWc8oPuakZBAYX2NcgqHlLCtxTiuevD7myyj0cxpvB3Gx6taMsGPdjfMVDN/6SiSl13cLr98OzroGtT2Aez2q27kqr9WPrwhgeJ5A+ihrCLNC+exbDfmBdPSoBkEKRx1Pln77aSrMs7JogCYCt6CS2T/GMtW1et9/riiap52ehpy/2KnnTOWvGi6eXsQsZAPyT0yJox54GUk7EkhnjSXvSS9GDSockbYjjfphKEdY/ROcfY4dcxKS99lfoq8W86yN7GJOo270YWCrjSKOqKtsTWjn2DUTyTEFiLX/mdc9irNDdc8RlV6rH1ERntyDxk/IJnEyHVOHmvOtbz8RyUf/AF/z23ezKXTTNAlcmOTZb4rnNgn4cUZwmOkJH9BEc491fK1OCQvvzt10hVCFmNjdyfalf378njtaKXLmZHrWKBQTDWUERmLkm03ERkNCkYzGUseWdkWjV6e5JmPYvZhZuV0arvvr4PJQfEow9yU1fDB3B7D9MlKQJON/Jov0jZvILYpBuo2j+9iCNdXNlYjFbcDoCoxwVxJacTo9Tr4AkF6LIkIOzEISo/VIa45o6yHxnn29TlGidFstI0MLWbu7IKG4o2Oydy5U/u6McXjQTf+c6GDwglDuwAZubeB52SzLNBQst6G9h7D4r1fRZpWZHlaEaiFDRy3hQp1GNTSdSx+QZemxRWuo4d/AiO8ExufmeY0/UnM1QYG+XRGVIAOEOp59ESXrXj2kSwGFtIZ1eisRdLH0S82HBQB36ZZXakIK4hFN6LkMyEK13sVdTuctKX9g4GbWUNsq8Pqd7nohfsTEJaEvGNLlHDPA2/C0QQQoZCtUy39cyGyFzIwDVvI8nvd48Qzzu44ojbPjYui0/FwI+1U0OYQlGz6V/90dM5yjdiQFmc3i0fYD203KOHtqkmTlzlYEX12IVVk7ijinLuNKqsyAe7chglEDHf7EvWWw50MyPJXuexEgYDDe2hJ5SOMGayLHn+t+DbMvIo0XjxK6L1G03xRFk9Cz5NIRLbSaAEn8r745xGtQPk1q9BkjOdBGd5kpDxpXbbAPfmcHFOc4BD0ISlglWPj5fH+EMBdu0ejmwulO6IKYtXOIKKlEzsDdbyQHtUPRchmBGpeFjdF2dmkt0+M+iJyQ8QZorDjpQ7ryGgFMudx3up4BRWCs2/CFWFEO3KON67yzozQR6Gf6ELxRz4xPSqLj+x+KxnGPcW6ijl77FFOO0H6LOJZgD5GFLWgZC12OnchMjRmitIufYj3r6k3tf0BwWPeol1Jz+Xe4Rtr/3IYldhY6bKmnwMIZIlevqjd/yKoo3S8LnjljrxISpAUYg5mN0Q==" };