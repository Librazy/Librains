﻿var levels = [];
var levelspers = 0;
levels[0] = { endl: 0, desc: "这让我想起了HelloWorld的时候。。", titles: "入门仪式", hash: "6f1d2c9dd7ae92f7c449afe3c2efa5de314eec4633271b482e0405ce4c23f57145133a96e1fc187c85f7f32cab88ad575599e766e207ecac2eae37ace8291dac", encqus: "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" };
levels[1] = { endl: 0, desc: "会码代码也是件必要滴东东~", titles: "Coding", hash: "5ef5981d033613527f18a76b2accc12972ca1f8e5814369aeecc938781fc881e777abb5be8b53ef04e02daf63b94d35f17f9b7630e60177db3f0afc62c958a94", encqus: "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" };
levels[2] = { endl: 0, desc: "这大概真的是外星人的信息麽=。=", titles: "ET's Message", hash: "f8ee85feb48b98e4b7bf5d4d89dfc0496bbe45636d0cc1bc1d3b6936ec822b6ad50fe32b3da6e99b49a32b438f7f3a823e6530b25f91ff35fb871fbf9d059260", encqus: "U2FsdGVkX1/hOcYtsy+QNlt1kFLe5hIgy5z/YufiRQ6/mXAEo4GWQclw/RGoLZjbsAWUCZ9Uyt5GIOWhpIZMJOQs2iDRx9GjB/LugG3q2rVG169pvEmOWD1mGpEJsGNLO1TNT7tg3odrjZ69eb9cAFhtv0g85Os+1pDTV9fJ2463mO7hnRpfpto6xF+R2HpFd3tAhwVyuK/7cX4P1JfmAvtOgs4ypspm3hbhmHedCWteCJIZqtreXqPTml1P2wQ8wMzT2r3MyUy3x1VuE2maGIWQkivdyFlcTyVuHAcv/CihvdSe9d792fmVYyYbZ24dO/cP3coY2HWxI2wDbVHkRV1+HCTYnMNAbG+23ix+7DsaLgCH3mC1JNxulIjBmH+DweEc+lE28AzVG7IywLLFXwvxy721mZTGcXTtL/EHbaTomq6X/in7GbMiufE8T0/4XVifY+xbolg/oBPhTSr9Z4Xn4QJAFSljGTo7liVpSAN5L5YI77w6mbT3gM0fiMbVd0Z4/aSESzaIzcGNGZ8M/98PhdPoZq6YZdHpi1JOalhTX+i9Q3fAX5L+jPZb3v77Dm/PnxFBfvQkJU7TmE6Inht9KLWBUnW3TG5UoI/UjRNEJmI10i2tV1zpBQgZcn7T63/c5A96ciWUvnttU2Sxx9zV6OrtwQZp5G0In/pwPtgimcAEGVIGHKlhqrQoGP6hbSVGrZ4bPNZWlKZ2HYhk0j4EDkUQQtBaqyztcxmasiwlm/tDnFafV2C5v7UnecEg/OE08USj0JxbDSZLlr5/rRgWHshB+l+J9zIgh6L33EeCjoj2UdMJZ9Lo3VezFEhCoeSTMUnt7YH43OUt6S6RDr1jvSXNtRZHQt2DIJi/Mrs8SdAFdcGFdSRB8CWG4Nwx1W4Gu+Jv3nRQiEzekvHPVK5yVDU+W31uAQlBrDLz1YsGZqCzOgkG2B9EcYH/HXcIBjy1475pkPanU2jpstIb9d5VQlNWhxXNHYqHxU6caBPxYvC1oA4zEqsgQtuOomi0ZU9Ni3ArRqw7GIaVp2V7II2M8KMjegQQaT2sR14EEe7AEC7kwyf0GREUpiwZidPzd81zPVox9fJiX5H0boOEvAsOQg34FA2ccUXNeoKC6Cc4u403EVLTVv+ZAbcpjJRtzExF0a8X6viRSTxXEcP0a0iM3ybklBSBYrNMIs/OIOVTGf6G6e0dyHnJMKNXwTr5lCKxSpwRD7EplofCfVmPivwmET54tntRDvEGC1i3nKcTfFxH7pOQ8JQvwihZdZlw2vtGLlSgTTQt1xrxriEcYpPeOPAmjr3cPnD+suxLibw=" };
levels[3] = { endl: 0, desc: "每题一分", titles: "多项选择题", hash: "31b1a0e56b67b0f4845a8dd66707be0fb74c7c0cf32295c4461731e9f376cb645165ed2769a25b214587cf455cf697fa05407fb5b51122835234457d40dcc9fe", encqus: "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" };
levels[4] = { endl: 0, desc: "我擦。。撞关了。。TigerQ我真的不是故意的", titles: "My Flag", hash: "4d78aafa5083fc2bd428cfe26183632b4528fa274fdedd76921bd73679554a159a5deade70640c7185a091146e41c94763c28b3fa4b14b74a429f10b1cf9d799", encqus: "U2FsdGVkX1+3+qGVGpwYK1O/8Wkw8mSk3sJ4BqXgGcz0JxI/yYFl+Gen7Qttjx7d3XP2lMQaTPBzKtAe3AiblugcAHbw49+3W6uSqdbYvUtzYyhzO0EAZ8sfWTR6zw2Smbus54zzYtTYbgzI/Vkm7zKKnLfl1/AYj+HVll7SKQcHGPBptGrUtHxExAkrsjqor8IcJ0Kz2MQiwRJT+UPqf5parzufk5iFsvMyOssb7V7jFUCRykT3YuffVza8PtzU/zguPoRuo7GGcmXMpoYyaYytulfwBNBsTzQu285yra+0Lu1Lx2aCRAZHvNCFYMj/ovoikD01PADR/DHEsgqzpFAHZZVh+0MOQD8+HTdzctq8zxn8MnMNcCJAlesFzsq5ULbQtdYeRvNWQ1r/QoeB7FVtenH1vG1iIp/LxCVpDSwFC8EUKmR3y1zS6UzkOqai1gHZjWo1E3Lyhv/sFa3eFD0C+0t7SjfkHtQei/+xfyei7T/uSfkXJgeUCyV+Mn/1NhwoQcRulceaLrnD3V1UJYx7VR/F+gmkcu+TlP/Zki8iNSyJUJkAbjGx06nWV8wNhT7fKdDTTNZDu4krbaGeE20ewgeCCK70QzW42bQsCr8RzXFjK/c9Z3QQ5X29QiH1i5rNsq0gOV8W5SlOAgJ1uQlwbNRKiAigI2nsXZgc1wa6rsFWXg4+56Oii/sYJ2HmrXnWm1jiMCbkkB6CgBP7WbO6DJq758L3BWbORqWyar77XDZXtc3hTdwhiwTdZqsb19VfcKvpgaWMdlRGcLHHxqwdC8vUO/bx9gFofxatL1keUwjTFI4yvQNtKCzT8hBIwWCIVe+jVKjGJN3/+Xvwkk2cg1xvuSAdimKHff/QtHTOcX1CT4FPzg7heU/DRYb+pLiD21vVDrqcyoJCMORI8z302ib3Ei1b7tkn4XZN2IfyvQYMrD2QAMC+YckwsjThxAcrGiFiFgjQE9Oygf7X1PHzMOZC8tcos+h5YEefff+ADbdS8aT6BLxLRxyDe2Vhv4M1M01M+KsSFWWaV6G0FC4uC3y8aipzFt67CR/rf5/paVWzS2uuCOO/A6IFTzgtbMRIKIpqd/ptttipBcI/HiBoXsJjNPuucjXmCk8SwwH1qEWDcW16WRAas8Bzx4GYIOKj9/ByQIb94IzPyg/xBA==" };
levels[5] = { endl: 0, desc: "这个么。。我做关卡时都觉得太蛋疼了", titles: "一步一步Uncompress！", hash: "25d7ae6c6dcf13d726f59dc749649244da055a7bf39bada17dab078e02a05875a17e91df4dda9e1f21982bb15c3d9290a73a725d40b3e9ccf1471fddb1b09ff1", encqus: "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" };
levels[6] = { endl: 0, desc: "既然大家都见过。。。咳咳。。那么。注意全部大写哦。。", titles: "一行情书", hash: "41de437773283990923377674a23e4b18506a63bb6746e5266f0e6dc2896081d8e471a3c35500b999dc01b7e5108ce573f4e95a61a2d81905b414cc0706dbf6b", encqus: "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" };
levels[7] = { endl: 1, desc: "攻喜攻喜~", titles: "Pass！", hash: "56fd4b1c3c0cff0da88400136d597636306b4546c33e82a339fdb8203c69e9bce94bc630ad2a272f332f2accc7f957be92803d08f9e9faa23699ef04a45b45b1", encqus: "U2FsdGVkX19tEZZVA9FD8GBEgT+8ZnMaq9AFZXW0Fn5PCmy4yIvNsipU+LWswDHjMSIWwgYcUGrc3NNVphSlvy76UTPvngZUkH2CKJiujqFuRC4pexyI929FumNa570twYvAsjlF8nHA8E8rAZeVpEl6buh+amMGsoDOYQRRxsdMkrsNpOPIQORPSl8O3zZ44cgLz+8oWUKZR10zJZaplplSioMPIqd7qAKNynJHf+/QmWxjDLHePGRVyzHhhY88arSkNPFrwMcOdSMIQa3zFx+n8BvLJl3yZOpb7l0XoPXlcwQtu7AhmM9zVOlww4ms7/QIWwF0YV3iuHe82kcNhI16EdMWinTEpvWMXkdrFNWbPQqLFzGImzcHqQ/FjBJO+NIEZkmP1CaYdSw7skx8Wy66LIpEsIQu5a3CPSrIPeEAogc9WnL689PqSnv6Zslirp+Kl9MmBBC81ZgyYcNBk/vof7JecRjo3HIJ/UB+IuJ63ByOsgoDXC68/f8DLn17C2HUH/Un/XDhXgVmol692tdIzWf6LaQMj6Zb3hM1HTir4e8rOYNWQkLk9a3xHvaJw4GtVzKt+VelY3cBulSYT0L3H/KRuG/l+Mwc76G/VGJhfK/WDomg8COx1ksRma6UwN/GDIyhO6lE2R+D6+A5aFRd89r7Gw50scDUvlgkv4ruqg7gddMAE9Jmv1nEwxNS6NUK3SEAq8NKiLK7NmuuidZ635Dy8RmK7yFYwd9CkZCfl+w2SuAFaqN6IsnFI1Ewr3YG7irhJuAWnir3RGzdHr9eVyA6fnIPucbRy8Hog4mYnMTkK4IPJXmraX8rbPNN8aol/BroKNoTVtysnGQROaHstVYNJU4f+eLmPerepE3f8sl2sy5P93jnpwFxGZvJ/LPRH2ybYfb7udKxl3Eic+p0lDgj6Gn86Ex98Vub8QDNp9QcU2twWWJEDj/v4K8O7cKMFAzm/9hsiX4W5aKuH+W6AYZz4RXNf7G6G3zQis/MKE0mpy6jrDQKj5Gb/p8lH4HDij6H/ZLQ2h7j+x03UiX9aJGZYCm8ngCn2WsQ/OIovigsvyNKYyGF3OfS+0hhXdx2k13LQxLuzsf8bG1+kLkPt7gEmkhVVblDsQe55auk6mlXqH2DGBS2fMhPTZ8KwS5EyCiupcS5tBq2MMtYfN6eLekPxdWSH0S50bZqUxrnLT82Hw1zmPVQTW5999xtFVw4fGUwGijEMjZXLI8UYgmmcdX9+G3TOoFDRzU2Y8Fo0/n/+b/GQjNDlK3UEHxUEO+1wc2i+rfrrU9BKFxRr8V6y31yvybrzxXwXIqiWBLgZautohfxbG0nLAl5/AS3Eap1f1V+EDvnClw1XMK5WnVRIiwO0KuPSCE3MCvbmDOlg6bawFdO6hSUpLKKSGrRdzsA1Iafg1Tj8S6rh1Hjfnu70caHSJ/KfSniK0hN2/nOpFtcwLhg40RGsMuFudwKiYrlLeWlw3TGxe6Gh2NQwKlW2JaHWXYtqMWaG8C7iOMI6eiGxITiQ0V0P19ax+s2tsPnycusyfOfkW2YPkNCfBwcVc3SAtTOEqFu7SilhmclXvDNFsl29hFRglgyWIihaecFPR+1mqRFlTxLo+YMqq14UqKLA76WOnCcRqiLCWsSFDJREbZes7zFoUVeOpLYK5r7BYxecM7Wem20fLZVvuKlEP5zR28vMSfNjyUXIkaPp5Yw8OBGVpArkR7pbwxBhXsLkV7yJ7ylC22q5bccXcOAxuazUty9oiGEMIVPWc5y7pS/AbcuDT+5xJN2gK8TAmuMskNuOfwYpIFf6NlMLxFFX2Ivt4qLxoeKn/lDPkd2y6zH4DO+ElH3mWJH6Z6l/zVxPdU5QnXyMZXu8l5ZylpaAiracRtnztcW6iFm1V2Rzchh3VNOHmtUWOBdepU/mQmaiZpa60FClYRzfYghcw==" };
