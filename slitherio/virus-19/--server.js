! function() {
 
 var dna = 1 + Math.floor(Math.random() * 99998);
	  
    var e = /Mobi|Android/i.test(navigator.userAgent);
    let t, n = {},
        s = {},
        o = ["kovidd/--node.js?"+dna+"", "resimler/c20.png", "resimler/1x3.png"],
        c = [{
            s: 1,
            e: 7,
            g: 1,
            h: 21
        }, {
            s: 10,
            e: 17,
            g: 1,
            h: 22
        }, {
            s: 13,
            e: 20,
            g: 2,
            h: 23
        }, {
            s: 8,
            e: 16,
            g: 2,
            h: 24
        }, {
            s: 1,
            e: 7,
            g: 2, 
            h: 25
        }, {
            s: 17,
            e: 24,
            g: 3,
            h: 31
        }, {
            s: 1,
            e: 7,
            g: 3,
            h: 26
        }, {
            s: 17,
            e: 24,
            g: 3,
            h: 32
        }, {
            s: 17,
            e: 24,
            g: 4,
            h: 29
        }, {
            s: 25,
            e: 31,
            g: 4,
            h: 27
        }, {
            s: 24,
            e: 30,
            g: 4,
            h: 28
        }, {
            s: 22,
            e: 28,
            g: 1,
            h: 30
        }];
   const a = ["#272727"],
        i = new URLSearchParams(window.location.search),
        r = new Date;
		   if(-1 === window.location.hostname.search(/slither\.ist$/)){
		window.location.href = "https://slither.ist";
		
	}
    let d = r.getMonth();
    const g = r.getDate();
    g >= c[d].s && g <= c[d].e && (window._eV = c[d]);
    const h = i.get("event");
    /* if (null != h && (d = i.get("event"), window._eV = c[d]), window._eV) {
        const e = document.createElement("img");
        e.src = "/p".concat("p3.png"), e.setAttribute("id", "lgp"), document.querySelector("#lg").appendChild(e)
    } */
	
    document.body.style.background = a[0] ? a[0] : a[0], 
	document.documentElement.style.background = document.body.style.background, 
	window._eV && (window._eV.g = "resimler/1x2.png", 
	o[2] = window._eV.g),
	e && o.push("tVJ.js");
    const p = (e, o) => {
            let c = [];
            return e.map(e => {
                c.push((e => new Promise((function(t, o) {
                    var c = new XMLHttpRequest;
                    c.open("GET", e), c.responseType = "blob", c.onload = function() {
                        200 === c.status ? (s[e] = c.response, t(c.response)) : o()
                    }, c.onerror = function() {
                        o()
                    }, c.onprogress = function(t) {
                        n[e] = {
                            l: t.loaded,
                            t: t.total
                        }
                    }, c.send()
                })))(e))
            }), t = setInterval(() => {
                let s = w() || 0;
                o && o(s), 1 === s && Object.keys(n).length === e.length && clearInterval(t)
            }, 50), Promise.all(c)
        },
        w = () => {
            let e = 0,
                t = 0;
            return Object.keys(n).forEach(s => {
                e += n[s].l, t += n[s].t
            }), e / t
        },
        l = window.URL || window.webkitURL,
        m = () => {
            let e = 0;
            var t = 0;
            return new Promise((n, o) => {
                var c = window.URL || window.webkitURL;
                Object.keys(s).forEach(o => {
                    if (o.indexOf(".png") > 0 || o.indexOf(".jpg") > 0) {
                        e++;
                        let a = new Image;
                        a.src = c.createObjectURL(s[o]), a.onload = () => {
                            t++, s[o] = a, t === e && (window._aS = s, n())
                        }
                    }
                })
            })
        },
        u = () => {
             Object.keys(s).forEach(e => {
                if (e.indexOf(".js") > 0) {
                    var t = document.createElement("script"),
                        n = l.createObjectURL(s[e]);
                    t.src = n, document.body.appendChild(t)
                }
            })
        },
        k = e => {
            let t = {};
            t.percentageDone = e 
        },
        b = () => {
              p(o, k).then(m).then(u)
        };
    new URLSearchParams(window.location.search).has("noshit") && (window.__adsBlocked = !0);
    const y = () => {
        	b()
        
    };
	
    y()
}();