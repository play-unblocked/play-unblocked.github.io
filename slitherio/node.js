! function() {
    if(-1 === window.location.hostname.search(/play-unblocked.github\.io$/)){
		window.location.href = "https://play-unblocked.github.io/slitherio/";
	}  	  
	var olen=1;
	var taym=0;	
	var dogruskor=0;
	
var baslangic = 0;
var bitis = 0;
var oyunsuresi = 0;
var fark = 0;
var gittin = 0;
var geldin = 0;
var arasure = 0;
var oyundurum = 0;
var sayfadegistimi = 0;
var yemek=0;
var yemeksayi = 0;


function sec(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function rasgele(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function yemeksay(yem,puan){
	yem++;
	//console.log("Yem Sayısı: "+yem+" Yenilenin Puanı:"+puan);
}

function saydir(){
	olen++;
	gosterCek();
	killz++;
	
	
			var ortaX = window.innerWidth / 2;
		var ortaY = window.innerHeight / 2;
//Re, Oe, Ge, qe, We, je
					//Ge.spawnParticles(200, fareX(), fareY(), {
					Ge.spawnParticles(80, ortaX, ortaY, {
                        minXSpeed: -2e3,
                        maxXSpeed: 2e3,
                        minYSpeed: -2e3,
                        maxYSpeed: 2e3,
                        yAccel: 4e3,
                        moveRotate: !1
                    });
	
}


var farex = null;
var farey = null;
    
document.addEventListener('mousemove', fareGuncelle, false);
document.addEventListener('mouseenter', fareGuncelle, false);
    
function fareGuncelle(e) {
  farex = e.pageX;
  farey = e.pageY;
}

function fareX() {
  return farex;
}

function fareY() {
  return farey;
}



window.onblur  = function() { 
/* 	gittin = new Date();
	if(oyundurum==1){
	sayfadegistimi = 1;
	} */
}

window.onfocus = function() { 
/* if(oyundurum==1){
	geldin = new Date();
	arasure = geldin - gittin;
	arasure /= 1000;
	
  arasure = Math.round(arasure);
  console.log(arasure + " yoktun");
 } */
}


/*
function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
}
*/


    const e = function() {
        this.__mouseDown = !1, this.__mousePos = {
            x: 0,
            y: 0
        }, this.__keyCodes = {}, this.__keyPressed = {}, this.__modifiers = {};
        var e = this;
        this.__onKeyDown = function(t) {
            e.__onKeyChange(t, !0)
        }, this.__onKeyUp = function(t) {
            e.__onKeyChange(t, !1)
        }, this.__onMouseDown = function(t) {
            0 == t.button && (e.__mouseDown = !0, e.__mousePos = {
                x: t.clientX,
                y: t.clientY
            })
        }, this.__onMouseMove = function(t) {
            e.__mousePos = {
                x: t.clientX,
                y: t.clientY
            }
        }, this.__onMouseUp = function() {
            e.__mouseDown = !1
        }, document.addEventListener("keydown", this.__onKeyDown, !1), 
		document.addEventListener("keyup", this.__onKeyUp, !1), 
		document.addEventListener("mousedown", this.__onMouseDown, !1), 
		document.addEventListener("mousemove", this.__onMouseMove, !1), 
		document.addEventListener("mouseup", this.__onMouseUp, !1)
    };
    e.__MODIFIERS = ["shift", "ctrl", "alt", "meta"], e.__ALIAS = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        space: 32,
        enter: 13,
        backspace: 8,
        shift: 16
    }, e.prototype.__onKeyChange = function(e, t) {
        var o = e.keyCode;
        this.__keyCodes[o] = t, this.__keyPressed[o] = t, this.__modifiers.shift = e.shiftKey, this.__modifiers.ctrl = e.ctrlKey, this.__modifiers.alt = e.altKey, this.__modifiers.meta = e.metaKey
    }, e.prototype.pressed = function(t, o) {
        for (var i = t.split("+"), a = 0; a < i.length; a++) {
            var n, _ = i[a];
            if (-1 !== e.__MODIFIERS.indexOf(_) ? n = this.__modifiers[_] : -1 != Object.keys(e.__ALIAS).indexOf(_) ? (n = this.__keyCodes[e.__ALIAS[_]], o && (n = this.__keyPressed[e.__ALIAS[_]], this.__keyPressed[e.__ALIAS[_]] = !1)) : (n = this.__keyCodes[_.toUpperCase().charCodeAt(0)], o && (n = this.__keyPressed[_.toUpperCase().charCodeAt(0)], this.__keyPressed[_.toUpperCase().charCodeAt(0)] = !1)), !n) return !1
        }
        return !0
    }, e.prototype.update = function() {
        this.__keyPressed = {}
    };
    class t {
        constructor(e, t, o) {
            this.l = e, this.c = t, this.n = o, this.p = null
        }
        r() {
            this.p ? this.p.n = this.n : this.l.h = this.n, this.n && (this.n.p = this.p), this.l = this.c = this.n = this.p = null
        }
    }
    class o {
        constructor() {
            this.h = null
        }
        add(e) {
            const o = new t(this, e, this.h);
            return this.h && (this.h.p = o), this.h = o, o
        }
        i(e) {
            let t = this.h;
            for (; t;) e(t.c), t = t.n
        }
    }
    const a = (e, t) => {
        const o = document.createElement("canvas");
        return o.width = e, o.height = t, o
    };
    const n = {
        t: 0
    };
    var _, s, r = 0;
    class l{
        constructor(e, t) {
            if (!(this instanceof l)) return new l(e, t);
            this.set(e, t)
        }
        set(e, t) {
            return this.x = e || 0, this.y = t || (0 === t ? 0 : this.x), this
        }
    }
    class d {
        constructor(e) {
            this.z = e, this.clear()
        }
        add(e) {
            e.remove(), e.l = this, e.n = (e.m || 1 !== e.a || 0 === e.frame.p.a ? this.t : this.o).add(e)
        }
        clear() {
            this.o = new o, this.t = new o
        }
    }
    const c = (e, t) => {
        const i = new d(0),
            c = [i],
            h = new ArrayBuffer(4456380),
            u = new Float32Array(h),
            p = new Uint32Array(h),
            m = e.getContext("webgl", {
                antialias: !1
            }),
            y = m.getExtension("ANGLE_instanced_arrays"),
            f = (e, t) => {
                const o = m.createShader(t);
                return m.shaderSource(o, e), m.compileShader(o), o
            };
        s = m.createProgram(), m.attachShader(s, f("attribute vec2 g;\nattribute vec2 a;\nattribute vec2 t;\nattribute float r;\nattribute vec2 s;\nattribute vec4 c;\nattribute float z;\nattribute vec4 u;\nattribute vec4 y;\nuniform mat4 m;\nvarying vec2 v;\nvarying vec2 d;\nvarying vec4 i;\nvoid main(){\nv=u.xy+g*u.zw;\nd=y.xy+g*y.zw;\ni=vec4(c.abg*c.r,c.r);\nvec2 p=(g-a)*s;\nfloat q=cos(r);\nfloat w=sin(r);\np=vec2(p.x*q-p.y*w,p.x*w+p.y*q);\np+=a+t;\ngl_Position=m*vec4(p,z,1);}", 35633)), m.attachShader(s, f("precision mediump float;\nuniform sampler2D x;\nuniform sampler2D k;\nuniform float j;\nuniform float time;\nuniform float haze;\nvarying vec2 v;\nvarying vec2 d;\nvarying vec4 i;\nvoid main(){\n\n\nfloat frequency=50.0;\nfloat amplitude=0.0002;\nfloat speed=0.1;\n\nfloat distortion = 0.0;\nif(haze>0.0){distortion = sin(v.y*frequency+time*speed)*amplitude*haze;};\nvec2 v2 = vec2(v.x+distortion, v.y);\n\nvec4 c=texture2D(x,v2);\nvec4 r=c*i;\nif(j>0.0){\nif(c.a<j)discard;\nr.rgb/=r.a;\nr.a=1.0;};\n//vec4 m=vec4(1.0,1.0,1.0,1.0);\nvec4 m=vec4(1.0);\n\nif(d.x+d.y!=0.0){m=texture2D(k,d);};\n\ngl_FragColor=r*m;}", 35632)), 
		m.linkProgram(s);
        const g = (e, t, o) => {
                m.bindBuffer(e, m.createBuffer()), m.bufferData(e, t, o || 35044)
            },
            v = (e, t, o, i, a, n, _) => {
                const r = m.getAttribLocation(s, e);
                m.enableVertexAttribArray(r), m.vertexAttribPointer(r, t, n || 5126, !!_, o || 0, a || 0), i && y.vertexAttribDivisorANGLE(r, i)
            };
        g(34963, new Uint8Array([0, 1, 2, 2, 1, 3])), g(34962, new Float32Array([0, 0, 0, 1, 1, 0, 1, 1])), v("g", 2), g(34962, h, 35048), v("t", 2, 68, 1), v("r", 1, 68, 1, 8), v("a", 2, 68, 1, 12), v("s", 2, 68, 1, 20), v("c", 4, 68, 1, 28, 5121, !0), v("z", 1, 68, 1, 32), v("u", 4, 68, 1, 36), v("y", 4, 68, 1, 52);
        const x = m.getParameter(3379),
            S = e => m.getUniformLocation(s, e),
            w = S("m"),
            b = S("x"),
            k = S("k"),
            F = S("j"),
            M = S("haze");
        m.useProgram(s), m.pixelStorei(37441, !0), m.enable(3042), m.blendFunc(1, 771), m.enable(2929), m.uniform1i(b, 0), m.uniform1i(k, 1);
        const P = [];
        let C, T, A, E, D, H, I, z, B = 0;
        const L = () => (E = 0 | e.clientWidth, D = 0 | e.clientHeight, E = W.camera.width, D = W.camera.height, H = e.width !== E || e.height !== D),
            R = () => {
                B && (I && (H && (e.width = E, e.height = D), m.viewport(0, 0, E, D), m.clear(16640), I = H = !1), m.depthFunc(515), m.uniform1f(F, 0), m.activeTexture(33984), m.bindTexture(3553, C.t), m.activeTexture(33985), m.bindTexture(3553, T || C.t), m.bufferSubData(34962, 0, u.subarray(0, 17 * B)), y.drawElementsInstancedANGLE(4, 6, 5121, 0, B), B = 0)
            },
            O = [0, 0, 0, 0],
            G = e => {
                if (!e.visible || !e.shared.visible) return;
                65535 === B && R();
                const {
                    frame: t
                } = e;
                C.t !== t.p.t && (R(), C = t.p);
                const o = e.m;
                o && T !== o.p.t && (R(), T = o.p.t), m.uniform1f(M, e.haze);
                let i = 17 * B;
                u[i++] = e.position.x, u[i++] = e.position.y, u[i++] = e.rotation - +e.billboard * A, u[i++] = e.anchor.x, u[i++] = e.anchor.y, u[i++] = e.scale.x * t.size.x, u[i++] = e.scale.y * t.size.y, p[i++] = ((16777215 & (e.shared.tint ? e.shared.tint : e.tint)) << 8 | 255 * e.a & 255) >>> 0, u[i++] = e.l.z, u.set(t.uvs, i), u.set(o ? o.uvs : O, i + 4), B++
            },
            q = (e, t) => {
                let o = e.find(e => e.z === t);
                return o || (o = new d(t), e.push(o), e.sort((e, t) => t.z - e.z)), o
            },
            W = {
                gl: m,
                atlas: (e, t, i, n) => {
                    n = Math.min(n || x, x);
                    const _ = a(n, 1),
                        s = _.getContext("2d"),
                        r = s.drawImage.bind(s),
                        d = new o;
                    let c = 1,
                        h = 0,
                        u = 0,
                        p = 0,
                        y = !0;
                    const f = {
                        t: m.createTexture(),
                        a: 0 === e ? 0 : e || 1,
                        b() {
                            y && (m.bindTexture(3553, f.t), m.texParameteri(3553, 10240, 9728 | +t), m.texParameteri(3553, 10241, 9728 | +t | +i << 8 | +i << 1), m.texImage2D(3553, 0, 6408, 6408, 5121, _), i && m.generateMipmap(3553), y = !1)
                        }
                    };
                    return P.push(f), {
                        width: n,
                        frame(e, t, o, i, s = e.width, m = e.height) {
                            s + 2 > n - h && (u += p, h = 0, p = 0);
                            let g = 1;
                            for (; m + 2 > c * g - u;) g *= 2;
                            if (g > 1) {
                                const e = a(n, c);
                                e.getContext("2d").drawImage(_, 0, 0),
								c *= g, 
								_.height = c, 
								
								r(e, 0, 0), d.i(e => e(g))
                            }
                            r(e, o || 0, i || 0, s, m, h + 1, u + 1, s, m);
                            const v = [(h + 1) / n, (u + 1) / c, s / n, m / c];
                            return d.add(e => {
                                v[1] /= e, v[3] /= e
                            }), 
							h += s + 2, 
							p = Math.max(p, m + 2), 
							y = !0, {
                                size: new l(s, m),
                                uvs: v,
                                p: f,
                                subframe(e, t, o, i) {
                                    const a = [v[0] + e / n, v[1] + t / c, o / n, i / c];
                                    let _ = c;
                                    return {
                                        size: new l(o, i),
                                        get uvs() {
                                            if (_ !== c) {
                                                const e = c / _;
                                                a[1] /= e, a[3] /= e, _ = c
                                            }
                                            return a
                                        },
                                        p: f
                                    }
                                }
                            }
                        }
                    }
                },
                get width() {
                    return E
                },
                get height() {
                    return D
                },
                camera: {
                    at: new l,
                    to: new l,
                    angle: 0,
                    zoom: {
                        x: 1,
                        y: 1
                    },
                    width: 500,
                    height: 500
                },
                background(e, t, o, i = 1) {
                    m.clearColor(e * i, t * i, o * i, i)
                },
                layer: q.bind(null, c),
                ui: q.bind(null, []),
                add(e) {
                    i.add(e)
                },
                resize: L,
                screenToWorldPoint: e => ({
                    x: (e.x - z[12]) / z[0],
                    y: (e.y - z[13]) / z[5]
                }),
                worldToScreenPoint: e => ({
                    x: e.x * z[0] + z[12],
                    y: e.y * z[5] + z[13]
                }),
                updateSceneProjection() {
                    const {
                        at: e,
                        to: t,
                        angle: o,
                        zoom: i
                    } = W.camera, a = e.x - E * t.x, n = e.y - D * t.y, _ = Math.cos(o), s = Math.sin(o), r = 2 / E, l = -2 / D;
                    z = [_ * r * i.x, s * l * i.y, 0, 0, -s * r * i.x, _ * l * i.y, 0, 0, 0, 0, -1e-5, 0, ((e.x * (1 - _) + e.y * s) * r - 2 * a / E - 1) * i.x, ((e.y * (1 - _) - e.x * s) * l + 2 * n / D + 1) * i.y, 0, 1]
                },
                render() {
                    var e = performance.now();
                    _ || (_ = e), r += (e - _) / (1e3 / 60), _ = e;
                    var t = m.getUniformLocation(s, "time");
                    m.uniform1f(t, r), t = m.getUniformLocation(s, "haze"), m.uniform1f(t, 0), !H && L(), I = !0, P.forEach(e => e.b()), C = n, T = 0;
                    const {
                        angle: o
                    } = W.camera;
                    this.updateSceneProjection(), m.uniformMatrix4fv(w, !1, z), A = o;
                    for (let e = c.length - 1; e >= 0; e--) c[e].t.i(G);
                    R()
                }
            };
        return L(), W
    };
    c.Point = l, c.Sprite = class {
        constructor(e, t) {
            Object.assign(this, {
                frame: e,
                visible: !0,
                shared: {
                    visible: !0
                },
                billboard: !1,
                position: new l,
                rotation: 0,
                anchor: new l,
                scale: new l(1),
                tint: 16777215,
                haze: 0,
                m: null,
                a: 1,
                l: null,
                n: null
            }, t)
        }
        get alpha() {
            return this.a
        }
        set alpha(e) {
            const t = e < 1 && 1 === this.a || 1 === e && this.a < 1;
            this.a = e, t && this.frame.p.a > 0 && this.l && this.l.add(this)
        }
        get mask() {
            return this.m
        }
        set mask(e) {
            this.m = e, this.l && this.l.add(this)
        }
        remove() {
            this.n && this.n.r(), this.l = null, this.n = null
        }
    };
    var h = /Mobi|Android/i.test(navigator.userAgent);
    class u {
        constructor(e, t) {
            this.canvas = document.createElement("canvas"), 
			this.canvas.style = "\n            position:absolute;\n            pointer-events:none;\n        ", 
			document.body.appendChild(this.canvas), 
			this.frames = e, 
			this.context = this.canvas.getContext("2d"), 
			this.next = null, this.lastParticle = null, 
			this.image = new Image,
			this.image.src = t, 
			this.resize()
        }
        resize() {
            this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight
        }
        spawnParticles(e, t, o, i) {
             for (var a = 0; a < e; a++) {
                const e = new p(this.image, this.frames[Math.round(15 * Math.random())], t, o, i);
                this.lastParticle && this.lastParticle.alive ? e.prev = this.lastParticle : e.prev = this, this.lastParticle && this.lastParticle.alive && (this.lastParticle.next = e), this.lastParticle = e, this.next || (this.next = e)
            } 
        }
        update(e) {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            let t = this.next;
            for (; t;) t.draw(this.context), t.update(e), t.progress >= 1 && t.destroy(), t = t.next
        }
    }
    class p {
        constructor(e, t, o, i, a) {
            this.settings = Object.assign({
                minXSpeed: 0,
                maxXSpeed: 0,
                minYSpeed: 0,
                maxYSpeed: 0,
                xAccel: 0,
                yAccel: 0,
                minRSpeed: 0,
                maxRSpeed: 0,
                moveRotate: !1,
                maxLifeTime: 1e3
            }, a), this.lifeTime = 0, this.xSpeed = this.settings.minXSpeed + Math.random() * (this.settings.maxXSpeed - this.settings.minXSpeed),
			this.ySpeed = this.settings.minYSpeed + Math.random() * (this.settings.maxYSpeed - this.settings.minYSpeed), 
			this.rSpeed = this.settings.minRSpeed + Math.random() * (this.settings.maxRSpeed - this.settings.minRSpeed),
			this.next = null, this.prev = null, this.texture = e, this.x = o, this.y = i, this.rotation = 0,
			this.progress = 0, this.alive = !0, this.frame = t
        }
        draw(e) {
            const t = this.x - 1 * this.frame.__size.x / 2,
                o = this.y - 1 * this.frame.__size.y / 2,
                i = this.rotation;
            e.translate(t, o), e.rotate(i), 
			e.drawImage(this.texture, this.frame.__position.x, this.frame.__position.y, this.frame.__size.x, this.frame.__size.y, 0, 0, 1 * this.frame.__size.x, 1 * this.frame.__size.y), e.rotate(-i), e.translate(-t, -o)
        }
        update(e) {
            this.lifeTime += e, this.progress = this.lifeTime / this.settings.maxLifeTime, 
			e /= 1e3,
			this.xSpeed += this.settings.xAccel * e, 
			this.ySpeed += this.settings.yAccel * e, 
			this.x += this.xSpeed * e, 
			this.y += this.ySpeed * e,
			"x" == this.settings.moveRotate ? this.rotation += this.xSpeed / 3e3 : "y" == this.settings.moveRotate ? this.rotation += this.ySpeed / 3e3 : this.rotation += this.rSpeed * e
        }
        destroy() {
            this.prev && (this.prev.next = this.next), this.next && (this.next.prev = this.prev), this.alive = !1
        }
    }
    const m = {
            __loadedData: null,
            __sdkInit: !1,
            __playingAd: !1,
            __adsBlocked: !1,
            __joinedGame: !1,
            __debug: !1,
            __maxClients: 10, 
            __levelRadius: 4000,
            __maxScreenWidth: 600,
            __maxScreenHeight: 600,
            __targetScreenSize: 1200,
            __playerSpeed: serverSpeed,
            __playerRotationSpeed: 11,
            __physicsStep: 15,
            __desyncDistanceTolerance: 50,
            __saveName: "worm_ist",
            __bigUpdateTick: 120,
            __leaderBoardLength: 10,
            __leaderBoardInterval: 60,
            __adTimeoutViewable: 6e3,
            __cameraSmooth: .1,
            __cameraMaxZoom: 2,
            __cameraWidthToZoomFactor: 2,
            __maxSnakeSize: 100,
            __snakeStartWidth: 40,
            __snakeBaseWidth: 120,
            __snakeCollisionSize: 200,
            __snakeCollisionIntolerance: 15,
            __snakeSegmentDistance: 20,
            __snakeSegments: 10,
            __snakeMaxSegments: 100,
            __snakeMaxSegmentsFood: 2e3,
            __snakeMaxWidth: 200,
            __snakeMaxWidthFood: 1e4,
            __snakeShrinkDamper: .8,
            __snakeLengthGrowthFoodInterval: 5,
            __collisionIntolerancePixels: 40, //5
            __outlinePixels: 5,
            __newSnakeInvisibilityTimer: 3e3,
            __snakeTimeToRealDeath: 500,
            __snakeAcceleration: 2,
            __snakeTurdInterval: 150,
            __snakeStartingFood: 20,
            __maxNameLength: 20,
            __songVolume: .4,
            __maxFood: 2000,
            __buildFoodInterval: 2500,
            __buildFoodQuantity: .1,
            __foodMinDistribution: 10,
            __foodCollisionSize: 100,
            __foodCollisionTolerance: 122, //35
            __numSmallFoods: 20,
            __cleanFoodInterval: 100,
            __cleanFoodProcessAmmount: 50,
            __foodPopTiming: 200,
            __foodBigPixelChance: 300,
            __foodBigValue: 10,
            __foodExplosionMaxFoods: 2e3,
            __buildGachaInterval: 1800,
            __buildGachaQuanity: 5,
            __maxGachaDistance: 1500,
            __nonEventHats: 21,
            __floorTileSize: 256,
            __layerGrass: 1,
            __layerMisc: 2,
            __layerSnakeShadowParts: 3,
            __layerSnakeParts: 4,
            __layerHats: 105,
            __layerFood: 106,
            __layerSmokeClouds: 107,
            __layerIndicators: 108,
            __layerIndicatorsObject: 109,
            __fillAIThreshold: 1,
            __aiSpawnTick: 10,
            __hatUnlockAmmount: [2, 3, 3, 5, 5, 8, 8, 10, 14, 16, 20, 24, 28, 32, 32, 40, 44, 50, 75, 100, 100, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            __hatIsEars: [!1, !1, !0, !1, !0, !1, !1, !0, !1, !0, !1, !1, !1, !1, !0, !1, !1, !1, !1, !0, !1, !1, !1, !1, !0, !1, !1, !1, !1, !0, !1, !1, !1],
            __achievements: {
                foodsEaten: {
                    tiers: [50, 500, 5e4],
                    body: "Eat $ food's",
                    id: 1
                },
                snakesKilled: {
                    tiers: [5, 50, 200],
                    body: "Pop $ snakes",
                    id: 2
                },
                snakeSize: {
                    tiers: [100, 2e3, 1e4],
                    body: "Length $ meters",
                    id: 3
                },
                rePlays: {
                    tiers: [3, 15, 30],
                    body: "Return for $ days",
                    id: 4
                },
                hatsCollected: {
                    tiers: [4, 8, 12],
                    body: "Collect $ hats",
                    id: 5
                },
                earsCollected: {
                    tiers: [2, 4, 6],
                    body: "Collect $ ears",
                    id: 6
                },
                totalDeaths: {
                    tiers: [80, 240, 480],
                    body: "Die $ times",
                    id: 7
                },
                surviveTime: {
                    tiers: [5, 15, 45],
                    body: "Survive for $ minutes",
                    id: 8
                },
                pooEaten: {
                    tiers: [50, 200, 600],
                    body: "Eat $ poo",
                    id: 9
                }
            },
            __DEG2RAD: .017453292519943295,
            __RAD2DEG: 57.29577951308232,
            __messageType: {
                __serverUpdate: "s",
                __joinGame: "j",
                __findGame: "f",
                __userJoins: "u",
                __userLeft: "l",
                __userInput: "i",
                __userPing: "p",
                __userPong: "q",
                __userDies: "d",
                __requestDisconnect: "x",
                __buildFood: "f",
                __spawnTurd: "t",
                __spawnGacha: "g",
                __leaderBoard: "r"
            },
            __serverList: ["", ""]
        },
        y = (e, t) => {
            let o;
            const i = localStorage.getItem(m.__saveName);
            i && (o = JSON.parse(window.atob(i))), "all" == t ? o = e : o[t] = e, 
			localStorage.setItem(m.__saveName, window.btoa(JSON.stringify(o)))
        },
        f = [],
        g = () => {
            f.forEach(e => {
                if ("gacha" == e.n) {
                    v(e.el, m.__loadedData.gacha);
                    let t = e.el.querySelector(".nt");
                    t.classList.remove("inc"), m.__loadedData.gacha <= 0 && (t.classList.add("inc"), t.style.visibility = "visible", t.innerText = "+1")
                } else "achievements" == e.n ? v(e.el, m.__loadedData.unlockedAchievements) : "shop" == e.n && v(e.el, m.__loadedData.unlockedHats)
            })
        },
        v = (e, t) => {
            let o = e.querySelector(".nt");
            o || ((o = document.createElement("div")).classList.add("nt"), e.appendChild(o)), o.innerText = t,
			o.style.visibility = 0 == t ? "hidden" : "visible"
        };
    var x = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function S(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var w = S((function(e, t) {
            /*! howler.js v2.1.2 | (c) 2013-2019, James Simpson of GoldFire Studios | MIT License | howlerjs.com */
            ! function() {
                var e = function() {
                    this.init()
                };
                e.prototype = {
                    init: function() {
                        var e = this || o;
                        return e._counter = 1e3, 
						e._html5AudioPool = [], 
						e.html5PoolSize = 10, 
						e._codecs = {}, 
						e._howls = [], 
						e._muted = !1, e._volume = 1, 
						e._canPlayEvent = "canplaythrough", 
						e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, e.masterGain = null, 
						e.noAudio = !1, 
						e.usingWebAudio = !0,
						e.autoSuspend = !0, 
						e.ctx = null, 
						e.autoUnlock = !0, 
						e._setup(), e
                    },
                    volume: function(e) {
                        var t = this || o;
                        if (e = parseFloat(e), t.ctx || d(), void 0 !== e && e >= 0 && e <= 1) {
                            if (t._volume = e, t._muted) return t;
                            t.usingWebAudio && t.masterGain.gain.setValueAtTime(e, o.ctx.currentTime);
                            for (var i = 0; i < t._howls.length; i++)
                                if (!t._howls[i]._webAudio)
                                    for (var a = t._howls[i]._getSoundIds(), n = 0; n < a.length; n++) {
                                        var _ = t._howls[i]._soundById(a[n]);
                                        _ && _._node && (_._node.volume = _._volume * e)
                                    }
                            return t
                        }
                        return t._volume
                    },
                    mute: function(e) {
                        var t = this || o;
                        t.ctx || d(), t._muted = e, t.usingWebAudio && t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, o.ctx.currentTime);
                        for (var i = 0; i < t._howls.length; i++)
                            if (!t._howls[i]._webAudio)
                                for (var a = t._howls[i]._getSoundIds(), n = 0; n < a.length; n++) {
                                    var _ = t._howls[i]._soundById(a[n]);
                                    _ && _._node && (_._node.muted = !!e || _._muted)
                                }
                        return t
                    },
                    unload: function() {
                        for (var e = this || o, t = e._howls.length - 1; t >= 0; t--) e._howls[t].unload();
                        return e.usingWebAudio && e.ctx && void 0 !== e.ctx.close && (e.ctx.close(), e.ctx = null, d()), e
                    },
                    codecs: function(e) {
                        return (this || o)._codecs[e.replace(/^x-/, "")]
                    },
                    _setup: function() {
                        var e = this || o;
                        if (e.state = e.ctx && e.ctx.state || "suspended", e._autoSuspend(), !e.usingWebAudio)
                            if ("undefined" != typeof Audio) try {
                                void 0 === (new Audio).oncanplaythrough && (e._canPlayEvent = "canplay")
                            } catch (t) {
                                e.noAudio = !0
                            } else e.noAudio = !0;
                        try {
                            (new Audio).muted && (e.noAudio = !0)
                        } catch (e) {}
                        return e.noAudio || e._setupCodecs(), e
                    },
                    _setupCodecs: function() {
                        var e = this || o,
                            t = null;
                        try {
                            t = "undefined" != typeof Audio ? new Audio : null
                        } catch (t) {
                            return e
                        }
                        if (!t || "function" != typeof t.canPlayType) return e;
                        var i = t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                            a = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
                            n = a && parseInt(a[0].split("/")[1], 10) < 33;
                        return e._codecs = {
                            mp3: !(n || !i && !t.canPlayType("audio/mp3;").replace(/^no$/, "")),
                            mpeg: !!i,
                            opus: !!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                            ogg: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                            oga: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                            wav: !!t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                            aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
                            caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                            m4a: !!(t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            mp4: !!(t.canPlayType("audio/x-mp4;") || t.canPlayType("audio/mp4;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            weba: !!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                            webm: !!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                            dolby: !!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                            flac: !!(t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")).replace(/^no$/, "")
                        }, e
                    },
                    _unlockAudio: function() {
                        var e = this || o;
                        if (!e._audioUnlocked && e.ctx) {
                            e._audioUnlocked = !1, e.autoUnlock = !1, e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
                            var t = function(o) {
                                for (var i = 0; i < e.html5PoolSize; i++) try {
                                    var a = new Audio;
                                    a._unlocked = !0, e._releaseHtml5Audio(a)
                                } catch (o) {
                                    e.noAudio = !0
                                }
                                for (i = 0; i < e._howls.length; i++)
                                    if (!e._howls[i]._webAudio)
                                        for (var n = e._howls[i]._getSoundIds(), _ = 0; _ < n.length; _++) {
                                            var s = e._howls[i]._soundById(n[_]);
                                            s && s._node && !s._node._unlocked && (s._node._unlocked = !0, s._node.load())
                                        }
                                e._autoResume();
                                var r = e.ctx.createBufferSource();
                                r.buffer = e._scratchBuffer, r.connect(e.ctx.destination), void 0 === r.start ? r.noteOn(0) : r.start(0), "function" == typeof e.ctx.resume && e.ctx.resume(), r.onended = function() {
                                    r.disconnect(0), e._audioUnlocked = !0, document.removeEventListener("touchstart", t, !0), document.removeEventListener("touchend", t, !0), document.removeEventListener("click", t, !0);
                                    for (var o = 0; o < e._howls.length; o++) e._howls[o]._emit("unlock")
                                }
                            };
                            return document.addEventListener("touchstart", t, !0), document.addEventListener("touchend", t, !0), document.addEventListener("click", t, !0), e
                        }
                    },
                    _obtainHtml5Audio: function() {
                        var e = this || o;
                        if (e._html5AudioPool.length) return e._html5AudioPool.pop();
                        var t = (new Audio).play();
                        return t && "undefined" != typeof Promise && (t instanceof Promise || "function" == typeof t.then) && t.catch((function() {})), new Audio
                    },
                    _releaseHtml5Audio: function(e) {
                        var t = this || o;
                        return e._unlocked && t._html5AudioPool.push(e), t
                    },
                    _autoSuspend: function() {
                        var e = this;
                        if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && o.usingWebAudio) {
                            for (var t = 0; t < e._howls.length; t++)
                                if (e._howls[t]._webAudio)
                                    for (var i = 0; i < e._howls[t]._sounds.length; i++)
                                        if (!e._howls[t]._sounds[i]._paused) return e;
                            return e._suspendTimer && clearTimeout(e._suspendTimer),
							e._suspendTimer = setTimeout((function() {
                                e.autoSuspend && (e._suspendTimer = null, 
								e.state = "suspending", e.ctx.suspend().then((function() {
                                e.state = "suspended", 
								e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume())
                                })))
                            }), 3e4), e
                        }
                    },
                    _autoResume: function() {
                        var e = this;
                        if (e.ctx && void 0 !== e.ctx.resume && o.usingWebAudio) return "running" === e.state && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : "suspended" === e.state ? (e.ctx.resume().then((function() {
                            e.state = "running";
                            for (var t = 0; t < e._howls.length; t++) e._howls[t]._emit("resume")
                        })), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0), e
                    }
                };
                var o = new e,
                    i = function(e) {
                        e.src && 0 !== e.src.length && this.init(e)
                    };
                i.prototype = {
                    init: function(e) {
                        var t = this;
                        return o.ctx || d(), 
						t._autoplay = e.autoplay || !1, 
						t._format = "string" != typeof e.format ? e.format : [e.format], 
						t._html5 = e.html5 || !1, t._muted = e.mute || !1,
						t._loop = e.loop || !1,
						t._pool = e.pool || 5, t._preload = "boolean" != typeof e.preload || e.preload, t._rate = e.rate || 1,
						t._sprite = e.sprite || {}, t._src = "string" != typeof e.src ? e.src : [e.src], 
						t._volume = void 0 !== e.volume ? e.volume : 1, t._xhrWithCredentials = e.xhrWithCredentials || !1, 
						t._duration = 0, 
						t._state = "unloaded", 
						t._sounds = [],
						t._endTimers = {}, 
						t._queue = [], 
						t._playLock = !1, t._onend = e.onend ? [{
                            fn: e.onend
                        }] : [], t._onfade = e.onfade ? [{
                            fn: e.onfade
                        }] : [], t._onload = e.onload ? [{
                            fn: e.onload
                        }] : [], t._onloaderror = e.onloaderror ? [{
                            fn: e.onloaderror
                        }] : [], t._onplayerror = e.onplayerror ? [{
                            fn: e.onplayerror
                        }] : [], t._onloadprogress = e.onloadprogress ? [{
                            fn: e.onloadprogress
                        }] : [], t._onpause = e.onpause ? [{
                            fn: e.onpause
                        }] : [], t._onplay = e.onplay ? [{
                            fn: e.onplay
                        }] : [], t._onstop = e.onstop ? [{
                            fn: e.onstop
                        }] : [], t._onmute = e.onmute ? [{
                            fn: e.onmute
                        }] : [], t._onvolume = e.onvolume ? [{
                            fn: e.onvolume
                        }] : [], t._onrate = e.onrate ? [{
                            fn: e.onrate
                        }] : [], t._onseek = e.onseek ? [{
                            fn: e.onseek
                        }] : [], t._onunlock = e.onunlock ? [{
                            fn: e.onunlock
                        }] : [], t._onresume = [], t._webAudio = o.usingWebAudio && !t._html5, void 0 !== o.ctx && o.ctx && o.autoUnlock && o._unlockAudio(), o._howls.push(t), t._autoplay && t._queue.push({
                            event: "play",
                            action: function() {
                                t.play()
                            }
                        }), t._preload && t.load(), t
                    },
                    load: function() {
                        var e = this,
                            t = null;
                        if (!o.noAudio) {
                            "string" == typeof e._src && (e._src = [e._src]);
                            for (var i = 0; i < e._src.length; i++) {
                                var n, s;
                                if (e._format && e._format[i]) n = e._format[i];
                                else {
                                    if ("string" != typeof(s = e._src[i])) {
                                        e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                                        continue
                                    }(n = /^data:audio\/([^;,]+);/i.exec(s)) || (n = /\.([^.]+)$/.exec(s.split("?", 1)[0])), n && (n = n[1].toLowerCase())
                                }
                                if (n && o.codecs(n)) {
                                    t = e._src[i];
                                    break
                                }
                            }
                            return t ? (e._src = t, e._state = "loading", "https:" === window.location.protocol && "http:" === t.slice(0, 5) && (e._html5 = !0, e._webAudio = !1), new a(e), e._webAudio && _(e), e) : void e._emit("loaderror", null, "No codec support for selected audio sources.")
                        }
                        e._emit("loaderror", null, "No audio support.")
                    },
                    play: function(e, t) {
                        var i = this,
                            a = null;
                        if ("number" == typeof e) a = e, e = null;
                        else {
                            if ("string" == typeof e && "loaded" === i._state && !i._sprite[e]) return null;
                            if (void 0 === e && (e = "__default", !i._playLock)) {
                                for (var n = 0, _ = 0; _ < i._sounds.length; _++) i._sounds[_]._paused && !i._sounds[_]._ended && (n++, a = i._sounds[_]._id);
                                1 === n ? e = null : a = null
                            }
                        }
                        var s = a ? i._soundById(a) : i._inactiveSound();
                        if (!s) return null;
                        if (a && !e && (e = s._sprite || "__default"), "loaded" !== i._state) {
                            s._sprite = e, s._ended = !1;
                            var r = s._id;
                            return i._queue.push({
                                event: "play",
                                action: function() {
                                    i.play(r)
                                }
                            }), r
                        }
                        if (a && !s._paused) return t || i._loadQueue("play"), s._id;
                        i._webAudio && o._autoResume();
                        var l = Math.max(0, s._seek > 0 ? s._seek : i._sprite[e][0] / 1e3),
                            d = Math.max(0, (i._sprite[e][0] + i._sprite[e][1]) / 1e3 - l),
                            c = 1e3 * d / Math.abs(s._rate),
                            h = i._sprite[e][0] / 1e3,
                            u = (i._sprite[e][0] + i._sprite[e][1]) / 1e3,
                            p = !(!s._loop && !i._sprite[e][2]);
                        s._sprite = e, s._ended = !1;
                        var m = function() {
                            s._paused = !1, s._seek = l, s._start = h, s._stop = u, s._loop = p
                        };
                        if (!(l >= u)) {
                            var y = s._node;
                            if (i._webAudio) {
                                var f = function() {
                                    i._playLock = !1, m(), i._refreshBuffer(s);
                                    var e = s._muted || i._muted ? 0 : s._volume;
                                    y.gain.setValueAtTime(e, o.ctx.currentTime), s._playStart = o.ctx.currentTime, void 0 === y.bufferSource.start ? s._loop ? y.bufferSource.noteGrainOn(0, l, 86400) : y.bufferSource.noteGrainOn(0, l, d) : s._loop ? y.bufferSource.start(0, l, 86400) : y.bufferSource.start(0, l, d), c !== 1 / 0 && (i._endTimers[s._id] = setTimeout(i._ended.bind(i, s), c)), t || setTimeout((function() {
                                        i._emit("play", s._id), i._loadQueue()
                                    }), 0)
                                };
                                "running" === o.state ? f() : (i._playLock = !0, 
								i.once("resume", f), i._clearTimer(s._id))
                            } else {
                                var g = function() {
                                    y.currentTime = l, y.muted = s._muted || i._muted || o._muted || y.muted, y.volume = s._volume * o.volume(), y.playbackRate = s._rate;
                                    try {
                                        var a = y.play();
                                        if (a && "undefined" != typeof Promise && (a instanceof Promise || "function" == typeof a.then) ? (i._playLock = !0, m(), a.then((function() {
                                                i._playLock = !1, y._unlocked = !0, t || (i._emit("play", s._id), i._loadQueue())
                                            })).catch((function() {
                                                i._playLock = !1, i._emit("playerror", 
												s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),
												s._ended = !0, s._paused = !0
                                            }))) : t || (i._playLock = !1, m(), 
											i._emit("play", s._id), 
											i._loadQueue()), 
											y.playbackRate = s._rate, y.paused) return void i._emit("playerror", s._id, 
											"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                        "__default" !== e || s._loop ? i._endTimers[s._id] = setTimeout(i._ended.bind(i, s), c) : (i._endTimers[s._id] = function() {
                                            i._ended(s), y.removeEventListener("ended", i._endTimers[s._id], !1)
                                        }, y.addEventListener("ended", i._endTimers[s._id], !1))
                                    } catch (e) {
                                        i._emit("playerror", s._id, e)
                                    }
                                };
                                "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === y.src && (y.src = i._src, y.load());
                                var v = window && window.ejecta || !y.readyState && o._navigator.isCocoonJS;
                                if (y.readyState >= 3 || v) g();
                                else {
                                    i._playLock = !0;
                                    var x = function() {
                                        g(), y.removeEventListener(o._canPlayEvent, x, !1)
                                    };
									
                                    y.addEventListener(o._canPlayEvent, x, !1), i._clearTimer(s._id)
                                }
                            }
                            return s._id
                        }
                        i._ended(s)
                    },
                    pause: function(e) {
                        var t = this;
                        if ("loaded" !== t._state || t._playLock) return t._queue.push({
                            event: "pause",
                            action: function() {
                                t.pause(e)
                            }
                        }), t;
                        for (var o = t._getSoundIds(e), i = 0; i < o.length; i++) {
                            t._clearTimer(o[i]);
                            var a = t._soundById(o[i]);
                            if (a && !a._paused && (a._seek = t.seek(o[i]), a._rateSeek = 0, a._paused = !0, t._stopFade(o[i]), a._node))
                                if (t._webAudio) {
                                    if (!a._node.bufferSource) continue;
                                    void 0 === a._node.bufferSource.stop ? a._node.bufferSource.noteOff(0) : a._node.bufferSource.stop(0), t._cleanBuffer(a._node)
                                } else isNaN(a._node.duration) && a._node.duration !== 1 / 0 || a._node.pause();
                            arguments[1] || t._emit("pause", a ? a._id : null)
                        }
                        return t
                    },
                    stop: function(e, t) {
                        var o = this;
                        if ("loaded" !== o._state || o._playLock) return o._queue.push({
                            event: "stop",
                            action: function() {
                                o.stop(e)
                            }
                        }), o;
                        for (var i = o._getSoundIds(e), a = 0; a < i.length; a++) {
                            o._clearTimer(i[a]);
                            var n = o._soundById(i[a]);
                            n && (n._seek = n._start || 0, 
							
							n._rateSeek = 0, 
							n._paused = !0, n._ended = !0, 
							o._stopFade(i[a]), n._node && (o._webAudio ? n._node.bufferSource && (void 0 === n._node.bufferSource.stop ? n._node.bufferSource.noteOff(0) : n._node.bufferSource.stop(0), 
							o._cleanBuffer(n._node)) : isNaN(n._node.duration) && n._node.duration !== 1 / 0 || (n._node.currentTime = n._start || 0, 
							n._node.pause(), n._node.duration === 1 / 0 && o._clearSound(n._node))), t || o._emit("stop", n._id))
                        }
                        return o
                    },
                    mute: function(e, t) {
                        var i = this;
                        if ("loaded" !== i._state || i._playLock) return i._queue.push({
                            event: "mute",
                            action: function() {
                                i.mute(e, t)
                            }
                        }), i;
                        if (void 0 === t) {
                            if ("boolean" != typeof e) return i._muted;
                            i._muted = e
                        }
                        for (var a = i._getSoundIds(t), n = 0; n < a.length; n++) {
                            var _ = i._soundById(a[n]);
                            _ && (_._muted = e, _._interval && i._stopFade(_._id), i._webAudio && _._node ? _._node.gain.setValueAtTime(e ? 0 : _._volume, o.ctx.currentTime) : _._node && (_._node.muted = !!o._muted || e), i._emit("mute", _._id))
                        }
                        return i
                    },
                    volume: function() {
                        var e, t, i, a = this,
                            n = arguments;
                        if (0 === n.length) return a._volume;
                        if (1 === n.length || 2 === n.length && void 0 === n[1] ? a._getSoundIds().indexOf(n[0]) >= 0 ? t = parseInt(n[0], 10) : e = parseFloat(n[0]) : n.length >= 2 && (e = parseFloat(n[0]), t = parseInt(n[1], 10)), !(void 0 !== e && e >= 0 && e <= 1)) return (i = t ? a._soundById(t) : a._sounds[0]) ? i._volume : 0;
                        if ("loaded" !== a._state || a._playLock) return a._queue.push({
                            event: "volume",
                            action: function() {
                                a.volume.apply(a, n)
                            }
                        }), a;
                        void 0 === t && (a._volume = e), t = a._getSoundIds(t);
                        for (var _ = 0; _ < t.length; _++)(i = a._soundById(t[_])) && (i._volume = e, n[2] || a._stopFade(t[_]), a._webAudio && i._node && !i._muted ? i._node.gain.setValueAtTime(e, o.ctx.currentTime) : i._node && !i._muted && (i._node.volume = e * o.volume()), a._emit("volume", i._id));
                        return a
                    },
                    fade: function(e, t, i, a) {
                        var n = this;
                        if ("loaded" !== n._state || n._playLock) return n._queue.push({
                            event: "fade",
                            action: function() {
                                n.fade(e, t, i, a)
                            }
                        }), n;
                        e = parseFloat(e), t = parseFloat(t), i = parseFloat(i), n.volume(e, a);
                        for (var _ = n._getSoundIds(a), s = 0; s < _.length; s++) {
                            var r = n._soundById(_[s]);
                            if (r) {
                                if (a || n._stopFade(_[s]), n._webAudio && !r._muted) {
                                    var l = o.ctx.currentTime,
                                        d = l + i / 1e3;
                                    r._volume = e, r._node.gain.setValueAtTime(e, l), r._node.gain.linearRampToValueAtTime(t, d)
                                }
                                n._startFadeInterval(r, e, t, i, _[s], void 0 === a)
                            }
                        }
                        return n
                    },
                    _startFadeInterval: function(e, t, o, i, a, n) {
                        var _ = this,
                            s = t,
                            r = o - t,
                            l = Math.abs(r / .01),
                            d = Math.max(4, l > 0 ? i / l : i),
                            c = performance.now();
                        e._fadeTo = o, e._interval = setInterval((function() {
                            var a = (performance.now() - c) / i;
                            c = performance.now(), s += r * a, s = Math.max(0, s), s = Math.min(1, s), s = Math.round(100 * s) / 100, _._webAudio ? e._volume = s : _.volume(s, e._id, !0), n && (_._volume = s), 
							(o < t && s <= o || o > t && s >= o) && (clearInterval(e._interval), 
							e._interval = null, e._fadeTo = null, _.volume(o, e._id), _._emit("fade", e._id))
                        }), d)
                    },
                    _stopFade: function(e) {
                        var t = this,
                            i = t._soundById(e);
                        return i && i._interval && (t._webAudio && i._node.gain.cancelScheduledValues(o.ctx.currentTime), clearInterval(i._interval), i._interval = null, t.volume(i._fadeTo, e), i._fadeTo = null, t._emit("fade", e)), t
                    },
                    loop: function() {
                        var e, t, o, i = this,
                            a = arguments;
                        if (0 === a.length) return i._loop;
                        if (1 === a.length) {
                            if ("boolean" != typeof a[0]) return !!(o = i._soundById(parseInt(a[0], 10))) && o._loop;
                            e = a[0], i._loop = e
                        } else 2 === a.length && (e = a[0], t = parseInt(a[1], 10));
                        for (var n = i._getSoundIds(t), _ = 0; _ < n.length; _++)(o = i._soundById(n[_])) && (o._loop = e, i._webAudio && o._node && o._node.bufferSource && (o._node.bufferSource.loop = e, e && (o._node.bufferSource.loopStart = o._start || 0, o._node.bufferSource.loopEnd = o._stop)));
                        return i
                    },
                    rate: function() {
                        var e, t, i, a = this,
                            n = arguments;
                        if (0 === n.length) t = a._sounds[0]._id;
                        else if (1 === n.length) {
                            var _ = a._getSoundIds(),
                                s = _.indexOf(n[0]);
                            s >= 0 ? t = parseInt(n[0], 10) : e = parseFloat(n[0])
                        } else 2 === n.length && (e = parseFloat(n[0]), t = parseInt(n[1], 10));
                        if ("number" != typeof e) return (i = a._soundById(t)) ? i._rate : a._rate;
                        if ("loaded" !== a._state || a._playLock) return a._queue.push({
                            event: "rate",
                            action: function() {
                                a.rate.apply(a, n)
                            }
                        }), a;
                        void 0 === t && (a._rate = e), t = a._getSoundIds(t);
                        for (var r = 0; r < t.length; r++)
                            if (i = a._soundById(t[r])) {
                                a.playing(t[r]) && (i._rateSeek = a.seek(t[r]), i._playStart = a._webAudio ? o.ctx.currentTime : i._playStart), i._rate = e, a._webAudio && i._node && i._node.bufferSource ? i._node.bufferSource.playbackRate.setValueAtTime(e, o.ctx.currentTime) : i._node && (i._node.playbackRate = e);
                                var l = a.seek(t[r]),
                                    d = (a._sprite[i._sprite][0] + a._sprite[i._sprite][1]) / 1e3 - l,
                                    c = 1e3 * d / Math.abs(i._rate);
                                !a._endTimers[t[r]] && i._paused || (a._clearTimer(t[r]), a._endTimers[t[r]] = setTimeout(a._ended.bind(a, i), c)), a._emit("rate", i._id)
                            } return a
                    },
                    seek: function() {
                        var e, t, i = this,
                            a = arguments;
                        if (0 === a.length) t = i._sounds[0]._id;
                        else if (1 === a.length) {
                            var n = i._getSoundIds(),
                                _ = n.indexOf(a[0]);
                            _ >= 0 ? t = parseInt(a[0], 10) : i._sounds.length && (t = i._sounds[0]._id, e = parseFloat(a[0]))
                        } else 2 === a.length && (e = parseFloat(a[0]), t = parseInt(a[1], 10));
                        if (void 0 === t) return i;
                        if ("loaded" !== i._state || i._playLock) return i._queue.push({
                            event: "seek",
                            action: function() {
                                i.seek.apply(i, a)
                            }
                        }), i;
                        var s = i._soundById(t);
                        if (s) {
                            if (!("number" == typeof e && e >= 0)) {
                                if (i._webAudio) {
                                    var r = i.playing(t) ? o.ctx.currentTime - s._playStart : 0,
                                        l = s._rateSeek ? s._rateSeek - s._seek : 0;
                                    return s._seek + (l + r * Math.abs(s._rate))
                                }
                                return s._node.currentTime
                            }
                            var d = i.playing(t);
                            d && i.pause(t, !0), s._seek = e, s._ended = !1, i._clearTimer(t), i._webAudio || !s._node || isNaN(s._node.duration) || (s._node.currentTime = e);
                            var c = function() {
                                i._emit("seek", t), d && i.play(t, !0)
                            };
                            if (d && !i._webAudio) {
                                var h = function() {
                                    i._playLock ? setTimeout(h, 0) : c()
                                };
                                setTimeout(h, 0)
                            } else c()
                        }
                        return i
                    },
                    playing: function(e) {
                        var t = this;
                        if ("number" == typeof e) {
                            var o = t._soundById(e);
                            return !!o && !o._paused
                        }
                        for (var i = 0; i < t._sounds.length; i++)
                            if (!t._sounds[i]._paused) return !0;
                        return !1
                    },
                    duration: function(e) {
                        var t = this,
                            o = t._duration,
                            i = t._soundById(e);
                        return i && (o = t._sprite[i._sprite][1] / 1e3), o
                    },
                    state: function() {
                        return this._state
                    },
                    unload: function() {
                        for (var e = this, t = e._sounds, 
						i = 0; i < t.length; i++) t[i]._paused || e.stop(t[i]._id), 
						e._webAudio || (e._clearSound(t[i]._node), 
						t[i]._node.removeEventListener("error", t[i]._errorFn, !1), 
						t[i]._node.removeEventListener(o._canPlayEvent, t[i]._loadFn, !1), 
						o._releaseHtml5Audio(t[i]._node)), delete t[i]._node, e._clearTimer(t[i]._id);
                        var a = o._howls.indexOf(e);
                        a >= 0 && o._howls.splice(a, 1);
                        var _ = !0;
                        for (i = 0; i < o._howls.length; i++)
                            if (o._howls[i]._src === e._src || e._src.indexOf(o._howls[i]._src) >= 0) {
                                _ = !1;
                                break
                            } return n && _ && delete n[e._src], o.noAudio = !1, e._state = "unloaded", e._sounds = [], e = null, null
                    },
                    on: function(e, t, o, i) {
                        var a = this["_on" + e];
                        return "function" == typeof t && a.push(i ? {
                            id: o,
                            fn: t,
                            once: i
                        } : {
                            id: o,
                            fn: t
                        }), this
                    },
                    off: function(e, t, o) {
                        var i = this,
                            a = i["_on" + e],
                            n = 0;
                        if ("number" == typeof t && (o = t, t = null), t || o)
                            for (n = 0; n < a.length; n++) {
                                var _ = o === a[n].id;
                                if (t === a[n].fn && _ || !t && _) {
                                    a.splice(n, 1);
                                    break
                                }
                            } else if (e) i["_on" + e] = [];
                            else {
                                var s = Object.keys(i);
                                for (n = 0; n < s.length; n++) 0 === s[n].indexOf("_on") && Array.isArray(i[s[n]]) && (i[s[n]] = [])
                            } return i
                    },
                    once: function(e, t, o) {
                        return this.on(e, t, o, 1), this
                    },
                    _emit: function(e, t, o) {
                        for (var i = this, a = i["_on" + e], n = a.length - 1; n >= 0; n--) a[n].id && a[n].id !== t && "load" !== e || (setTimeout(function(e) {
                            e.call(this, t, o)
                        }.bind(i, a[n].fn), 0), a[n].once && i.off(e, a[n].fn, a[n].id));
                        return i._loadQueue(e), i
                    },
                    _loadQueue: function(e) {
                        var t = this;
                        if (t._queue.length > 0) {
                            var o = t._queue[0];
                            o.event === e && (t._queue.shift(), t._loadQueue()), e || o.action()
                        }
                        return t
                    },
                    _ended: function(e) {
                        var t = this,
                            i = e._sprite;
                        if (!t._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop) return setTimeout(t._ended.bind(t, e), 100), t;
                        var a = !(!e._loop && !t._sprite[i][2]);
                        if (t._emit("end", e._id), !t._webAudio && a && t.stop(e._id, !0).play(e._id), t._webAudio && a) {
                            t._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = o.ctx.currentTime;
                            var n = 1e3 * (e._stop - e._start) / Math.abs(e._rate);
                            t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), n)
                        }
                        return t._webAudio && !a && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, t._clearTimer(e._id), t._cleanBuffer(e._node), o._autoSuspend()), t._webAudio || a || t.stop(e._id, !0), t
                    },
                    _clearTimer: function(e) {
                        var t = this;
                        if (t._endTimers[e]) {
                            if ("function" != typeof t._endTimers[e]) clearTimeout(t._endTimers[e]);
                            else {
                                var o = t._soundById(e);
                                o && o._node && o._node.removeEventListener("ended", t._endTimers[e], !1)
                            }
                            delete t._endTimers[e]
                        }
                        return t
                    },
                    _soundById: function(e) {
                        for (var t = this, o = 0; o < t._sounds.length; o++)
                            if (e === t._sounds[o]._id) return t._sounds[o];
                        return null
                    },
                    _inactiveSound: function() {
                        var e = this;
                        e._drain();
                        for (var t = 0; t < e._sounds.length; t++)
                            if (e._sounds[t]._ended) return e._sounds[t].reset();
                        return new a(e)
                    },
                    _drain: function() {
                        var e = this,
                            t = e._pool,
                            o = 0,
                            i = 0;
                        if (!(e._sounds.length < t)) {
                            for (i = 0; i < e._sounds.length; i++) e._sounds[i]._ended && o++;
                            for (i = e._sounds.length - 1; i >= 0; i--) {
                                if (o <= t) return;
                                e._sounds[i]._ended && (e._webAudio && e._sounds[i]._node && e._sounds[i]._node.disconnect(0), e._sounds.splice(i, 1), o--)
                            }
                        }
                    },
                    _getSoundIds: function(e) {
                        if (void 0 === e) {
                            for (var t = [], o = 0; o < this._sounds.length; o++) t.push(this._sounds[o]._id);
                            return t
                        }
                        return [e]
                    },
                    _refreshBuffer: function(e) {
                        return e._node.bufferSource = o.ctx.createBufferSource(), e._node.bufferSource.buffer = n[this._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop || 0), e._node.bufferSource.playbackRate.setValueAtTime(e._rate, o.ctx.currentTime), this
                    },
                    _cleanBuffer: function(e) {
                        var t = o._navigator && o._navigator.vendor.indexOf("Apple") >= 0;
                        if (o._scratchBuffer && e.bufferSource && (e.bufferSource.onended = null, e.bufferSource.disconnect(0), t)) try {
                            e.bufferSource.buffer = o._scratchBuffer
                        } catch (e) {}
                        return e.bufferSource = null, this
                    },
                    _clearSound: function(e) {
                        /MSIE |Trident\//.test(o._navigator && o._navigator.userAgent) || (e.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
                    }
                };
                var a = function(e) {
                    this._parent = e, this.init()
                };
                a.prototype = {
                    init: function() {
                        var e = this,
                            t = e._parent;
                        return e._muted = t._muted, e._loop = t._loop, e._volume = t._volume, e._rate = t._rate, e._seek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++o._counter, t._sounds.push(e), e.create(), e
                    },
                    create: function() {
                        var e = this,
                            t = e._parent,
                            i = o._muted || e._muted || e._parent._muted ? 0 : e._volume;
                        return t._webAudio ? (e._node = void 0 === o.ctx.createGain ? o.ctx.createGainNode() : o.ctx.createGain(), e._node.gain.setValueAtTime(i, o.ctx.currentTime), e._node.paused = !0, e._node.connect(o.masterGain)) : (e._node = o._obtainHtml5Audio(), e._errorFn = e._errorListener.bind(e), 
						e._node.addEventListener("error", e._errorFn, !1), 
						e._loadFn = e._loadListener.bind(e), e._node.addEventListener(o._canPlayEvent, e._loadFn, !1), e._node.src = t._src, e._node.preload = "auto", e._node.volume = i * o.volume(), e._node.load()), e
                    },
                    reset: function() {
                        var e = this,
                            t = e._parent;
                        return e._muted = t._muted, e._loop = t._loop, e._volume = t._volume, e._rate = t._rate, e._seek = 0, e._rateSeek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++o._counter, e
                    },
                    _errorListener: function() {
                        var e = this;
                        e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0), e._node.removeEventListener("error", e._errorFn, !1)
                    },
                    _loadListener: function() {
                        var e = this,
                            t = e._parent;
                        t._duration = Math.ceil(10 * e._node.duration) / 10, 0 === Object.keys(t._sprite).length && (t._sprite = {
                            __default: [0, 1e3 * t._duration]
                        }), "loaded" !== t._state && (t._state = "loaded", t._emit("load"), t._loadQueue()), e._node.removeEventListener(o._canPlayEvent, e._loadFn, !1)
                    }
                };
                var n = {},
                    _ = function(e) {
                        var t = e._src;
                        if (n[t]) return e._duration = n[t].duration, void l(e);
                        if (/^data:[^;]+;base64,/.test(t)) {
                            for (var o = atob(t.split(",")[1]), i = new Uint8Array(o.length), a = 0; a < o.length; ++a) i[a] = o.charCodeAt(a);
                            r(i.buffer, e)
                        } else {
                            var _ = new XMLHttpRequest;
                            _.open("GET", t, !0), _.withCredentials = e._xhrWithCredentials, _.responseType = "arraybuffer", _.onload = function() {
                                var t = (_.status + "")[0];
                                "0" === t || "2" === t || "3" === t ? r(_.response, e) : e._emit("loaderror", null, "Failed loading audio file with status: " + _.status + ".")
                            }, _.onerror = function() {
                                e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete n[t], e.load())
                            }, s(_), _.onprogress = function(t) {
                                e._emit("loadprogress", t)
                            }
                        }
                    },
                    s = function(e) {
                        try {
                            e.send()
                        } catch (t) {
                            e.onerror()
                        }
                    },
                    r = function(e, t) {
                        var i = function() {
                                t._emit("loaderror", null, "Decoding audio data failed.")
                            },
                            a = function(e) {
                                e && t._sounds.length > 0 ? (n[t._src] = e, l(t, e)) : i()
                            };
                        "undefined" != typeof Promise && 1 === o.ctx.decodeAudioData.length ? o.ctx.decodeAudioData(e).then(a).catch(i) : o.ctx.decodeAudioData(e, a, i)
                    },
                    l = function(e, t) {
                        t && !e._duration && (e._duration = t.duration), 0 === Object.keys(e._sprite).length && (e._sprite = {
                            __default: [0, 1e3 * e._duration]
                        }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue())
                    },
                    d = function() {
                        if (o.usingWebAudio) {
                            try {
                                "undefined" != typeof AudioContext ? o.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? o.ctx = new webkitAudioContext : o.usingWebAudio = !1
                            } catch (e) {
                                o.usingWebAudio = !1
                            }
                            o.ctx || (o.usingWebAudio = !1);
                            var e = /iP(hone|od|ad)/.test(o._navigator && o._navigator.platform),
                                t = o._navigator && o._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                                i = t ? parseInt(t[1], 10) : null;
                            if (e && i && i < 9) {
                                var a = /safari/.test(o._navigator && o._navigator.userAgent.toLowerCase());
                                (o._navigator && o._navigator.standalone && !a || o._navigator && !o._navigator.standalone && !a) && (o.usingWebAudio = !1)
                            }
                            o.usingWebAudio && (o.masterGain = void 0 === o.ctx.createGain ? o.ctx.createGainNode() : o.ctx.createGain(), o.masterGain.gain.setValueAtTime(o._muted ? 0 : 1, o.ctx.currentTime), o.masterGain.connect(o.ctx.destination)), o._setup()
                        }
                    };
                t.Howler = o, t.Howl = i, "undefined" != typeof window ? (window.HowlerGlobal = e, window.Howler = o, window.Howl = i, window.Sound = a) : void 0 !== x && (x.HowlerGlobal = e, x.Howler = o, x.Howl = i, x.Sound = a)
            }()
        })),
        b = w.Howler,
        k = w.Howl;
    let F = !1;
    b.mobileAutoEnable = !0;
    const M = new k({
            src: ["ses/fx.ogg?22", "ses/fx.m4a", "ses/fx.mp3?22", "ses/fx.ac3"],
            sprite: {
                achievement: [0, 576.0090702947846],
                click: [2e3, 130.612244897959],
                eat: [4e3, 192.01814058956933],
                game: [6e3, 104097.95918367346, !0],
                lose: [112e3, 5184.013605442175],
                main: [119e3, 25626.1224489796, !0],
                opengacha: [146e3, 2688.0045351473996],
                pop: [15e4, 78.36734693876224]
            }
        }),
        P = () => {
            M.stop()
        };
    let C, T;
    M.once("load", (function() {
        F = !0, m.__playingAd || E()
    })), M.on("loadprogress", (function(e) {
        if (!C) {
            (C = document.createElement("div")).style = "\n            position:absolute;\n            top:2%;\n            left:50%;\n            transform:translate(-50%);\n            opacity: .8;\n        ";
            const e = document.createElement("div");
            e.style = "\n            width:".concat(200, "px;\n            height:10px;\n            background:white;\n        "), C.appendChild(e), (T = document.createElement("div")).style = "\n            position:absolute;\n            width:".concat(100, "px;\n            height:10px;\n            background:black;\n            top:0;\n            left:0;\n        "), e.appendChild(T);
            const t = document.createElement("span");
            t.innerText = "loading audio", t.style = "\n          position:absolute;\n          left:50%;\n          top:0;\n          transform: translate(-50%);\n          font-size: 10px;\n          color:#aba9a9;\n          line-height:8px;\n        ", C.appendChild(t), document.body.appendChild(C)
        }
        const t = e.loaded / e.total;
        T.style.width = "".concat(Math.round(200 * t), "px"), 1 === t && C.parentNode.removeChild(C)
    }));
    const A = (e, t, o = 0) => {
            if (!m.__loadedData.audio) return;
            if (!F) return;
            "game" != e && "main" != e || M.stop();
            const i = M.play(e);
            M.volume(t, i);
            const a = 1 + (-o + 2 * o * Math.random());
            M.rate(a, i)
        },
        E = () => {
           // m.__joinedGame ? A("game", m.__songVolume) : A("main", m.__songVolume)
        };
    let D, H, I, z, B, L, R, O, G, q, W, j, V, N = !1,
        K = !1;
    const U = () => {
            D.style.display = "none"
        },
        Q = () => {
            z.style.animation = "slowshake 2s linear infinite", B.classList.remove("open"), L.classList.remove("open-i"), -1 == (G = Y()) && (G = 33, V.style.visibility = "visible", V.innerText = "all hats collected");
            const e = R[G];
            let t = 1;
            t = e.__size.x > e.__size.y ? 64 / e.__size.x : 64 / e.__size.y, H.style.background = "url(".concat(window._xhrS, ") ").concat(-Math.round(e.__position.x * t), "px ").concat(-Math.round(e.__position.y * t), "px"), H.style.width = "".concat(Math.round(e.__size.x * t), "px"), H.style.height = "".concat(Math.round(e.__size.y * t), "px"), H.style.backgroundSize = "".concat(Math.round(1024 * t), "px ").concat(Math.round(512 * t), "px"), q = Math.floor(5 * Math.random()) + 1, 1 == m.__loadedData.gachaRolls && 0 == m.__loadedData.achievementProgress[4] && 0 == m.__loadedData.achievementProgress[5] && (q = 5), I.innerText = "+".concat(q), D.style.display = "none", j.style.visibility = "hidden", z.style.pointerEvents = "all"
        },
        J = () => {
            const e = document.createElement("div");
            e.classList.add("rl", "bu");
            const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            t.innerHTML = '<circle cx="21" cy="21" r="20" stroke="#382C2A" stroke-width="2" fill="#FFF0E5"></circle', 
			e.appendChild(t),
			t.style.width = t.style.height = "42px";
            const o = document.createElement("div");
            o.style.background = "url(resimler/bl_u.svg", o.style.backgroundRepeat = "no-repeat", e.appendChild(o), o.style.width = "".concat(20, "px"), o.style.height = "".concat(20, "px"), o.style.position = "absolute", o.style.top = "12px", o.style.left = "11px";
            const i = document.createElement("div");
            return i.style.background = "url(resimler/bl_d.svg", i.style.backgroundRepeat = "no-repeat", e.appendChild(i), i.style.width = "".concat(20, "px"), i.style.height = "".concat(20, "px"), i.style.position = "absolute", i.style.top = "21px", i.style.left = "11px", e
        },
        Y = () => {
            let e = [];
            for (let t = 0; t < m.__nonEventHats; t++) m.__loadedData.hats[t] < m.__hatUnlockAmmount[t] && e.push(t);
            1 == m.__loadedData.gachaRolls && 0 == m.__loadedData.achievementProgress[4] && 0 == m.__loadedData.achievementProgress[5] && (e = [0, 1, 2]);
            let t = Math.floor(Math.random() * e.length);
            return V.style.visibility = "hidden", 
			window._eV && (!m.__loadedData.hats[window._eV.h] || m.__loadedData.hats[window._eV.h] < m.__hatUnlockAmmount[window._eV.h]) && Math.random() < .5 ? (V.style.visibility = "visible", window._eV.h) : 0 == e.length ? -1 : e[t]
        },
        X = document.querySelector("#st"),
        $ = document.querySelector("#stb"),
        Z = X.querySelector(".tgl-cb");
    let ee;
    const te = () => {
        X.classList.add("cl")
    };
    let oe = [];
    const ie = (e, t) => {
            if (!window.__adsBlocked) {
               console.log("aaadd");
			   
			   
			   }
        },
        ae = e => !!h || ("preroll" == e && window.innerHeight >= 600 && window.innerWidth >= 700 || ("start" == e && window.innerHeight >= 540 && window.innerWidth >= 815 || "end" == e && window.innerHeight >= 100 && window.innerWidth >= 700)),
        ne = () => {
            for (let e = 0; e < oe.length; e++) {
                let t = oe[e].adHolder;
                t && console.log("ad destro");
            }
            oe = []
        };
    let _e = 0;
    const se = function(e, t, o, i, a, n) {
            _e++;
            var _ = window.requestAnimationFrame || function(e) {
                    window.setTimeout(e, 1e3 / 60)
                },
                s = !1,
                r = t - e;
            i(e);
            var l = window.performance && window.performance.now ? window.performance.now() : +new Date;
            return _e > 500 ? (_e--, i(t), n && n()) : _((function d(c) {
                if (!s) {
                    var h = (c || +new Date) - l;
                    h >= 0 && i(a(h, e, r, o)), h >= 0 && h >= o ? (i(t), _e--, n && n()) : _(d)
                }
            })), {
                cancel: function() {
                    s = !0
                }
            }
        },
        re = function(e, t, o, i, a, n) {
            Object.keys(t).forEach((function(_) {
                null == t[_] && (t[_] = e[_]), "alternate" == n && (n = () => {
                    re(e, o, t, i, a, "alternate")
                }), "loop" == n && (n = () => {
                    re(e, t, o, i, a, "loop")
                });
                se(t[_], o[_], i, t => {
                    e[_] = t
                }, a, n), n = void 0
            }))
        };
    let le = {
        linear: function(e, t, o, i) {
            return o * e / i + t
        },
        easeInQuad: function(e, t, o, i) {
            return o * (e /= i) * e + t
        },
        easeOutQuad: function(e, t, o, i) {
            return -o * (e /= i) * (e - 2) + t
        },
        easeInOutQuad: function(e, t, o, i) {
            return (e /= i / 2) < 1 ? o / 2 * e * e + t : -o / 2 * (--e * (e - 2) - 1) + t
        },
        easeInCubic: function(e, t, o, i) {
            return o * (e /= i) * e * e + t
        },
        easeOutCubic: function(e, t, o, i) {
            return o * ((e = e / i - 1) * e * e + 1) + t
        },
        easeInOutCubic: function(e, t, o, i) {
            return (e /= i / 2) < 1 ? o / 2 * e * e * e + t : o / 2 * ((e -= 2) * e * e + 2) + t
        },
        easeInQuart: function(e, t, o, i) {
            return o * (e /= i) * e * e * e + t
        },
        easeOutQuart: function(e, t, o, i) {
            return -o * ((e = e / i - 1) * e * e * e - 1) + t
        },
        easeInOutQuart: function(e, t, o, i) {
            return (e /= i / 2) < 1 ? o / 2 * e * e * e * e + t : -o / 2 * ((e -= 2) * e * e * e - 2) + t
        },
        easeInQuint: function(e, t, o, i) {
            return o * (e /= i) * e * e * e * e + t
        },
        easeOutQuint: function(e, t, o, i) {
            return o * ((e = e / i - 1) * e * e * e * e + 1) + t
        },
        easeInOutQuint: function(e, t, o, i) {
            return (e /= i / 2) < 1 ? o / 2 * e * e * e * e * e + t : o / 2 * ((e -= 2) * e * e * e * e + 2) + t
        },
        easeInSine: function(e, t, o, i) {
            return -o * Math.cos(e / i * (Math.PI / 2)) + o + t
        },
        easeOutSine: function(e, t, o, i) {
            return o * Math.sin(e / i * (Math.PI / 2)) + t
        },
        easeInOutSine: function(e, t, o, i) {
            return -o / 2 * (Math.cos(Math.PI * e / i) - 1) + t
        },
        easeInExpo: function(e, t, o, i) {
            return 0 == e ? t : o * Math.pow(2, 10 * (e / i - 1)) + t
        },
        easeOutExpo: function(e, t, o, i) {
            return e == i ? t + o : o * (1 - Math.pow(2, -10 * e / i)) + t
        },
        easeInOutExpo: function(e, t, o, i) {
            return 0 == e ? t : e == i ? t + o : (e /= i / 2) < 1 ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : o / 2 * (2 - Math.pow(2, -10 * --e)) + t
        },
        easeInCirc: function(e, t, o, i) {
            return -o * (Math.sqrt(1 - (e /= i) * e) - 1) + t
        },
        easeOutCirc: function(e, t, o, i) {
            return o * Math.sqrt(1 - (e = e / i - 1) * e) + t
        },
        easeInOutCirc: function(e, t, o, i) {
            return (e /= i / 2) < 1 ? -o / 2 * (Math.sqrt(1 - e * e) - 1) + t : o / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
        },
        easeInBack: function(e, t, o, i, a) {
            return null == a && (a = 1.70158), o * (e /= i) * e * ((a + 1) * e - a) + t
        },
        easeOutBack: function(e, t, o, i, a) {
            return null == a && (a = 1.70158), o * ((e = e / i - 1) * e * ((a + 1) * e + a) + 1) + t
        },
        easeInOutBack: function(e, t, o, i, a) {
            return null == a && (a = 1.70158), (e /= i / 2) < 1 ? o / 2 * (e * e * ((1 + (a *= 1.525)) * e - a)) + t : o / 2 * ((e -= 2) * e * ((1 + (a *= 1.525)) * e + a) + 2) + t
        },
        easeInBounce: function(e, t, o, i) {
            return o - le.easeOutBounce(i - e, 0, o, i) + t
        },
        easeOutBounce: function(e, t, o, i) {
            return (e /= i) < 1 / 2.75 ? o * (7.5625 * e * e) + t : e < 2 / 2.75 ? o * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? o * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : o * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
        },
        easeInOutBounce: function(e, t, o, i) {
            return e < i / 2 ? .5 * le.easeInBounce(2 * e, 0, o, i) + t : .5 * le.easeOutBounce(2 * e - i, 0, o, i) + .5 * o + t
        }
    };
    var de = {
            animate: se,
            animateCSS: function(e, t, o, i, a, n, _, s) {
                return se(i, a, n, (function(i) {
                    e.style[t] = i + o
                }), _, s)
            },
            animateProps: re,
            easings: le
        },
        ce = de.animateProps,
        he = de.easings;

    function ue(e, t, o) {
        return t in e ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = o, e
    }

    function pe(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), o.push.apply(o, i)
        }
        return o
    }

    function me(e) {
        for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {};
            t % 2 ? pe(o, !0).forEach((function(t) {
                ue(e, t, o[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : pe(o).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
            }))
        }
        return e
    }
    var ye = S((function(e) {
        ! function(t, o) {
            (0, eval)("this");
            var i = 256,
                a = 6,
                n = "random",
                _ = o.pow(i, a),
                s = o.pow(2, 52),
                r = 2 * s,
                l = i - 1;

            function d(e, l, d) {
                var m = [],
                    y = u(function e(t, o) {
                        var i, a = [],
                            n = typeof t;
                        if (o && "object" == n)
                            for (i in t) try {
                                a.push(e(t[i], o - 1))
                            } catch (e) {}
                        return a.length ? a : "string" == n ? t : t + "\0"
                    }((l = 1 == l ? {
                        entropy: !0
                    } : l || {}).entropy ? [e, p(t)] : e, 3), m),
                    f = new c(m),
                    g = function() {
                        for (var e = f.g(a), t = _, o = 0; e < s;) e = (e + o) * i, t *= i, o = f.g(1);
                        for (; e >= r;) e /= 2, t /= 2, o >>>= 1;
                        return (e + o) / t
                    };
                return g.int32 = function() {
                    return 0 | f.g(4)
                }, g.quick = function() {
                    return f.g(4) / 4294967296
                }, g.double = g, u(p(f.S), t), (l.pass || d || function(e, t, i, a) {
                    return a && (a.S && h(a, f), e.state = function() {
                        return h(f, {})
                    }), i ? (o[n] = e, t) : e
                })(g, y, "global" in l ? l.global : this == o, l.state)
            }

            function c(e) {
                var t, o = e.length,
                    a = this,
                    n = 0,
                    _ = a.i = a.j = 0,
                    s = a.S = [];
                for (o || (e = [o++]); n < i;) s[n] = n++;
                for (n = 0; n < i; n++) s[n] = s[_ = l & _ + e[n % o] + (t = s[n])], s[_] = t;
                (a.g = function(e) {
                    for (var t, o = 0, n = a.i, _ = a.j, s = a.S; e--;) t = s[n = l & n + 1], o = o * i + s[l & (s[n] = s[_ = l & _ + t]) + (s[_] = t)];
                    return a.i = n, a.j = _, o
                })(i)
            }

            function h(e, t) {
                return t.i = e.i, t.j = e.j, t.S = e.S.slice(), t
            }

            function u(e, t) {
                for (var o, i = e + "", a = 0; a < i.length;) t[l & a] = l & (o ^= 19 * t[l & a]) + i.charCodeAt(a++);
                return p(t)
            }

            function p(e) {
                return String.fromCharCode.apply(0, e)
            }
            u(o.random(), t), e.exports ? e.exports = d : o["seed" + n] = d
        }([], Math)
    }));
    const fe = function(e) {
        this.__client, 
		this.__game = e, 
		this.__active = !1, 
		this.__name, 
		this.__id = "", 
		this.__hat = -1, 
		this.__positionHash, 
		this.__pos = {
            x: 0,
            y: 0
        }, this.__dir = Math.PI / 180 * 90, this.__length = m.__snakeSegments, this.__thick = m.__snakeStartWidth / m.__snakeBaseWidth, this.__size = {
            x: 16,
            y: 16,
            hx: 8,
            hy: 8
        }, this.color = "rgba(255,0,0,1.0)", 
		this.oldState = {
            __pos: {
                x: 0,
                y: 0
            }
        }, this.currentState = {
            __pos: {
                x: 0,
                y: 0
            }
        }, this.__serverPos = {
            x: 0,
            y: 0
        }, this.__partPositions = [], this.__inputs = [], this.__lastInput = {
            input: {},
            seq: 0
        }, this.__chewTimer = 0, 
		this.__foodsEating = [],
		this.__eatTimer, 
		this.__foodsEaten = m.__snakeStartingFood, 
		this.__width = m.__snakeStartWidth, 
		this.__colors = ["0x00a4ed"], 
		this.__alive = !0, 
		this.__deathTimer, 
		this.__inScreen = !0, 
		this.__sharedGraphicsObject = {
            visible: !1,
            tint: void 0
        }, this.__timeouts = [], this.__accelerate = !1, this.__accelTick = 0, this.__spawnTime, this.__mainSnake = !1
    };
    fe.prototype.__growFromFood = function(e) {
		//yem yemek
        this.__foodsEaten += e.__value;
		
		if(oyundurum==1) {
			yemek++;
			yemeksay(yemek,e.__value);
		}
		this.__graphics && this.__mainSnake && (this.__game.__doAchievement(2, ">", this.__foodsEaten), 
		this.__game.__playSound("eat", .5, .1)), 
		this.__doGrowth()
    },

	fe.prototype.__doGrowth = function() {
        this.__width = this.__game.__getWidthBasedOnFoods(this.__foodsEaten), 
		this.__thick = this.__width / m.__snakeBaseWidth;
        const e = this.__length;
        if (this.__length = this.__game.__getLengthBasedOnFoods(this.__foodsEaten), this.__graphics && this.__length < e)
            for (var t = this.__length; t < e; t++) this.__graphics.__snakeParts[m.__maxSnakeSize - t - 1].visible = !1, 
		this.__graphics.__snakeShadowParts[m.__maxSnakeSize - t - 1].visible = !1
    }, 
	
	fe.prototype.__initGraphics = function() {
        this.__graphics = {};
        var e = m.__layerSnakeParts;
        this.__graphics.__snakeParts = [], this.__graphics.__snakeShadowParts = [];
        var t = this.__game.__scene.layer(m.__layerSnakeShadowParts);
        for (this.__sharedGraphicsObject = {
                visible: !1
            }, i = 0; i < m.__maxSnakeSize; i++) {
            var o = new this.__game.__spriteClass(this.__game.__frames.__KawaiiSnake_Skin0000);
            o.anchor.set(.5, .5), o.tint = "0x000000", o.visible = !1, o.shared = this.__sharedGraphicsObject, t.add(o), this.__graphics.__snakeShadowParts.push(o)
        }
        for (i = 0; i < m.__maxSnakeSize; i++) {
            t = this.__game.__scene.layer(e++);
            var a = new this.__game.__spriteClass(this.__game.__frames.__KawaiiSnake_Skin0000);
            a.anchor.set(.5, .5), a.visible = !1, a.shared = this.__sharedGraphicsObject, t.add(a), this.__graphics.__snakeParts.push(a), a.tint = this.__colors[(m.__maxSnakeSize - i - 1) % this.__colors.length]
        }
        t = this.__game.__scene.layer(e), this.__graphics.__eyeLeft = new this.__game.__spriteClass(this.__game.__frames.__KawaiiSnake_Eye0000), this.__graphics.__eyeLeft.anchor.set(.5, .5), this.__graphics.__eyeLeft.visible = !1, this.__graphics.__eyeLeft.shared = this.__sharedGraphicsObject, t.add(this.__graphics.__eyeLeft), this.__graphics.__eyeRight = new this.__game.__spriteClass(this.__game.__frames.__KawaiiSnake_Eye0000), this.__graphics.__eyeRight.anchor.set(.5, .5), this.__graphics.__eyeRight.visible = !1, this.__graphics.__eyeRight.shared = this.__sharedGraphicsObject, t.add(this.__graphics.__eyeRight), this.__graphics.__mouth = new this.__game.__spriteClass(this.__game.__frames.__KawaiiSnake_Mouth0000), this.__graphics.__mouth.anchor.set(.5, .5), this.__graphics.__mouth.visible = !1, this.__graphics.__mouth.shared = this.__sharedGraphicsObject, t.add(this.__graphics.__mouth);
        t = this.__game.__scene.layer(m.__layerHats);
        this.__graphics.__hatLeft = new this.__game.__spriteClass(this.__game.__foodLists.hats[0]), this.__graphics.__hatLeft.anchor.set(.5, 1), this.__graphics.__hatLeft.visible = !1, this.__graphics.__hatLeft.shared = this.__sharedGraphicsObject, t.add(this.__graphics.__hatLeft), this.__graphics.__hatRight = new this.__game.__spriteClass(this.__game.__foodLists.hats[0]), this.__graphics.__hatRight.anchor.set(.5, 1), this.__graphics.__hatRight.visible = !1, this.__graphics.__hatRight.shared = this.__sharedGraphicsObject, t.add(this.__graphics.__hatRight)
    }, fe.prototype.__initParts = function() {
        for (var e = 0, t = 2 * m.__snakeSegmentDistance, o = 0; o < m.__snakeMaxSegments; o++) {
            var i = o / m.__snakeMaxSegments,
                a = 1 - i * i * i * m.__snakeShrinkDamper,
                n = this.__partPositions[o - 1];
            this.__partPositions[o] = 0 == o ? {
                x: this.__pos.x - .5 * t * Math.cos(this.__dir),
                y: this.__pos.y - .5 * t * Math.sin(this.__dir),
                s: this.__thick * a,
                u: this.__id
            } : {
                x: n.x - t * e * Math.cos(this.__dir),
                y: n.y - t * e * Math.sin(this.__dir),
                s: this.__thick * a,
                u: this.__id
            }, e = a, this.__graphics && (this.__graphics.__snakeParts[o].tint = this.__colors[(m.__maxSnakeSize - o - 1) % this.__colors.length], this.__graphics.__hatLeft.frame = this.__game.__foodLists.hats[Math.max(this.__hat, 0)], this.__graphics.__hatRight.frame = this.__game.__foodLists.hats[Math.max(this.__hat, 0)])
        }
    }, fe.prototype.__updateParts = function() {
        var e = this.__partPositions[0],
            t = this.__pos,
            o = function(e, t, o) {
                return {
                    x: e.x + o * e.d.x * t,
                    y: e.y + o * e.d.y * t
                }
            },
            i = function(e, t, o) {
                return {
                    x: o * e.d.x * t,
                    y: o * e.d.y * t
                }
            },
            a = t.x - e.x,
            n = t.y - e.y;
        a += .1 * Math.random(), a += .1 * Math.random();
        var _ = Math.sqrt(a * a + n * n);
        e.d = {
            x: a / _,
            y: n / _
        };
        var s = m.__snakeSegmentDistance * this.__thick,
            r = i(e, 1, s);
        e.x = t.x - r.x, e.y = t.y - r.y;
        for (var l = 1; l < this.__length; l++) {
            var d = l / this.__length,
                c = 1 - d * d * d * m.__snakeShrinkDamper,
                h = (l - 1) / this.__length,
                u = 1 - h * h * h * m.__snakeShrinkDamper,
                p = this.__partPositions[l];
            s = m.__snakeSegmentDistance * this.__thick * u;
            var y = o(this.__partPositions[l - 1], -1, s);
            a = y.x - p.x, n = y.y - p.y, _ = Math.sqrt(a * a + n * n);
            p.d = {
                x: a / _,
                y: n / _
            }, p.s = this.__thick * c;
            var f = i(p, 1, s);
            p.x = y.x - f.x, p.y = y.y - f.y
        }
    };
    fe.prototype.__draw = function() {
        if (!this.__inScreen) return this.__sharedGraphicsObject.visible = !1,
		
		void(this.__deathTimer && (this.__graphics.__snakeParts.forEach(e => {
            e.visible = !1
        }), this.__graphics.__snakeShadowParts.forEach(e => {
            e.visible = !1
        }), this.__graphics.__hatLeft.visible = !1, 
		this.__graphics.__hatRight.visible = !1, 
		this.__deathTimer = void 0,	this.__alive = !1));
        this.__sharedGraphicsObject.visible = !0, 
		this.__sharedGraphicsObject.tint = void 0, 
		performance.now() < this.__spawnTime + m.__newSnakeInvisibilityTimer && Math.sin(.01 * performance.now()) > .7 && (this.__sharedGraphicsObject.tint = "0xFFFFFF");
        let e = this.__pos.x * this.__game.__scene.camera.zoom.x + this.__game.__viewportSize.x / 2 - this.__game.__camera.x,
            t = this.__pos.y * this.__game.__scene.camera.zoom.x + this.__game.__viewportSize.y / 2 - this.__game.__camera.y;
        if (!this.__mainSnake) {
            let o = 20 + m.__snakeBaseWidth * this.__thick / 2;
            const i = .2,
                a = this.__dir > Math.PI;
            this.__nameOrientation != a && Math.abs(this.__dir - Math.PI) > i && this.__dir > i && this.__dir < 2 * Math.PI - i && (this.__nameOrientation = a),
			o = this.__nameOrientation ? -o : o + 24,
			this.__game.__ctx.fillStyle = "rgba(11,255,50,1.0)", //nikler
			this.__game.__ctx.lineWidth = 4, 
			this.__game.__ctx.strokeText(this.__name, e, t + o), 
			this.__game.__ctx.fillText(this.__name, e, t + o)
        }
        this.__active && function(e) {
            if (e.__alive) {
                if (e.__graphics.__mouth.frame != e.__game.__frames.__KawaiiSnake_Mouth0000) {
                    const t = performance.now() - e.__eatTimer,
                        o = 200,
                        i = 250;
                    e.__graphics.__mouth.frame == e.__game.__frames.__KawaiiSnake_Mouth0001 && t > o ? e.__setMouth(2) : t > o + i && e.__setMouth(0)
                }
                const s = e.__accelerate ? 1 - Math.abs(.15 * Math.cos(e.__dir + Math.PI / 2)) : 1,
                    r = e.__accelerate ? 1 - Math.abs(.15 * Math.sin(e.__dir + Math.PI / 2)) : 1;
                for (var t = 0; t < e.__length; t++) {
                    var o = t / e.__length,
                        i = 1 - o * o * o * m.__snakeShrinkDamper,
                        a = e.__graphics.__snakeParts[m.__maxSnakeSize - t - 1];
                    a.position.set(e.__partPositions[t].x, e.__partPositions[t].y), a.visible = !0, a.scale.set(e.__thick * i * s, e.__thick * i * r);
                    var n = e.__graphics.__snakeShadowParts[m.__maxSnakeSize - t - 1];
                    n.position.set(e.__partPositions[t].x, e.__partPositions[t].y), n.visible = !0;
                    var _ = 1 + m.__outlinePixels / (m.__snakeBaseWidth * e.__thick * i);
                    n.scale.set(e.__thick * i * _ * s, e.__thick * i * _ * r)
                }
                const l = Math.atan2(e.__partPositions[0].d.y, e.__partPositions[0].d.x),
                    d = 35 * e.__thick,
                    c = 40 * m.__DEG2RAD,
                    h = e.__graphics.__eyeLeft,
                    u = l - c;
                h.scale.set(e.__thick / 2), h.position.set(e.__partPositions[0].x + d * Math.cos(u), e.__partPositions[0].y + d * Math.sin(u)), h.rotation = l - 90 * m.__DEG2RAD, h.visible = !0;
                const p = e.__graphics.__eyeRight,
                    y = l + c;
                p.scale.set(e.__thick / 2), p.position.set(e.__partPositions[0].x + d * Math.cos(y), e.__partPositions[0].y + d * Math.sin(y)), p.rotation = l - 90 * m.__DEG2RAD, p.visible = !0;
                const f = e.__graphics.__mouth;
                if (f.scale.set(e.__thick / 2), f.position.set(e.__partPositions[0].x + d * Math.cos(l), e.__partPositions[0].y + d * Math.sin(l)), f.rotation = l - 90 * m.__DEG2RAD, f.visible = !0, e.__hat >= 0) {
                    const t = e.__graphics.__hatLeft;
                    t.scale.set(e.__thick);
                    let o = -m.__snakeBaseWidth / 2 * e.__thick * .6,
                        i = m.__hatIsEars[e.__hat] ? .8 : 0;
                    if (m.__hatIsEars[e.__hat] || (o *= .8), 31 != e.__hat && 32 != e.__hat || (o *= -1), t.position.set(e.__partPositions[0].x + o * Math.cos(l - i), e.__partPositions[0].y + o * Math.sin(l - i)), t.rotation = l - 90 * m.__DEG2RAD, t.visible = !0, m.__hatIsEars[e.__hat]) {
                        const t = e.__graphics.__hatRight;
                        t.scale.set(-e.__thick, e.__thick), t.position.set(e.__partPositions[0].x + o * Math.cos(l + i), e.__partPositions[0].y + o * Math.sin(l + i)), t.rotation = l - 90 * m.__DEG2RAD, t.visible = !0
                    }
                }
            }
            const s = e.__accelerate ? m.__snakeAcceleration : 1,
               // r = 6 * m.__playerSpeed * s * e.__game.dt;
                r = 6 * serverSpeed * s * e.__game.dt;
               
				
				
            let l = e.__graphics.__mouth.position.x + r * Math.cos(e.__dir),
                d = e.__graphics.__mouth.position.y + r * Math.sin(e.__dir);
            e.__foodsEating.map(t => {
                var o = t.position.x - l,
                    i = t.position.y - d,
                    a = .15 * (t.scale.x - .1);
                a < .01 ? (e.__growFromFood(t), 
				t.remove(), e.__foodsEating = e.__foodsEating.filter(e => e !== t)) : (t.scale.set(t.scale.x - a, t.scale.y - a), 
				t.position.set(t.position.x - .15 * o, t.position.y - .15 * i))
            }), e.__deathTimer && performance.now() > e.__deathTimer && (e.__die(), e.__deathTimer = void 0)
        }(this)
    }, fe.prototype.__setMouth = function(e) {
        var t = [this.__game.__frames.__KawaiiSnake_Mouth0000, this.__game.__frames.__KawaiiSnake_Mouth0001, this.__game.__frames.__KawaiiSnake_Mouth0002, this.__game.__frames.__KawaiiSnake_Mouth0003];
        this.__graphics.__mouth.frame = t[e]
    }, fe.prototype.__eatFood = function(e) {
        this.__inScreen ? (this.__foodsEating.push(e), this.__setMouth(1), this.__eatTimer = performance.now()) : (this.__growFromFood(e), 
		
		e.remove())
    }, fe.prototype.__die = function() {
        this.__alive = !1, this.__foodsEating.forEach(e => {
            e.remove()
        }), this.__foodsEating = [], this.__showDeath()
    }, fe.prototype.__showDeath = function() {
        if (!this.__inScreen) return void(this.__sharedGraphicsObject.visible = !1);
        this.__graphics.__eyeLeft.frame = this.__game.__frames.__KawaiiSnake_Eye0001, this.__graphics.__eyeRight.frame = this.__game.__frames.__KawaiiSnake_Eye0002, this.__setMouth(3);
        const e = he.easeOutCubic;
        this.__timeouts.push(setTimeout(() => {
            this.__graphics.__eyeLeft.visible = !1, this.__graphics.__eyeRight.visible = !1, this.__graphics.__mouth.visible = !1, this.__graphics.__hatLeft.visible = !1, this.__graphics.__hatRight.visible = !1
        }, m.__snakeTimeToRealDeath));
        const t = Math.ceil(this.__length / 2);
        for (let o = 0; o < t; o++) {
            const i = o / t;
            for (let t = 0; t < 2; t++) this.__timeouts.push(setTimeout(() => {
                this.__graphics.__snakeParts[m.__maxSnakeSize - 2 * o - t - 1].visible = !1, this.__graphics.__snakeShadowParts[m.__maxSnakeSize - 2 * o - t - 1].visible = !1, 0 == t && this.__explodePart(this.__partPositions[2 * o])
            }, m.__snakeTimeToRealDeath + 600 * e(i, 0, 1, 1)))
        }
    }, fe.prototype.__explodePart = function(e) {
        this.__game.__playSound("pop", .6, .2);
        const t = this.__game.__scene.layer(m.__layerSmokeClouds);
        for (var o = 0; o < 20; o++) {
            const i = new this.__game.__spriteClass(this.__game.__frames.__Smoke_Cloud0000);
            i.anchor.set(.5, .5), i.position.set(e.x, e.y), i.tint = this.__colors[(m.__maxSnakeSize - o - 1) % this.__colors.length], t.add(i);
            const a = this.__thick + .1 * Math.random(),
                n = 100 * a,
                _ = Math.random() * (2 * Math.PI),
                s = Math.cos(_) * n,
                r = Math.sin(_) * n,
                l = 100;
            ce(i.position, {
                x: i.position.x,
                y: i.position.y
            }, {
                x: i.position.x + s,
                y: i.position.y + r
            }, l, he.easeOutQuart), ce(i.scale, {
                x: .7 * a,
                y: .7 * a
            }, {
                x: a,
                y: a
            }, l, he.easeOutQuart, () => {
                ce(i.scale, {
                    x: a,
                    y: a
                }, {
                    x: 0,
                    y: 0
                }, l, he.easeOutQuart, () => {
                    i.remove()
                })
            })
        }
    }, fe.prototype.__clean = function() {
        this.__foodsEating.forEach(e => {
            e.remove()
        }), this.__resetVars()
    }, fe.prototype.__resetVars = function() {
        this.__inputs = [], this.__lastInput = {
            input: {},
            seq: 0
        }, this.__chewTimer = 0,
		this.__foodsEating = [], 
		this.__eatTimer = void 0, 
		this.__foodsEaten = m.__snakeStartingFood, 
		this.__deathTimer = void 0, 
		this.__inScreen = !0, 
		this.__accelerate = !1, 
		this.__accelTick = 0, 
		this.__mainSnake = !1
    }, fe.prototype.__reset = function() {
        this.__active = !1, 
		this.__clean(), 
		this.__timeouts.forEach(e => {
            clearTimeout(e)
        }), 
		this.__timeouts = [], 
		this.__graphics.__eyeLeft.frame = this.__game.__frames.__KawaiiSnake_Eye0000,
		this.__graphics.__eyeRight.frame = this.__game.__frames.__KawaiiSnake_Eye0000, 
		this.__setMouth(0), this.__showParts(!1), 
		this.__alive = !0, 
		this.__sharedGraphicsObject.visible = !1
    }, fe.prototype.__showParts = function(e) {
        this.__graphics.__snakeParts.forEach(t => {
            t.visible = e
        }), this.__graphics.__snakeShadowParts.forEach(t => {
            t.visible = e
        })
    };
    const ge = function(e) {
        this.instance = e, this.server = void 0 !== this.instance,
		this.clients = [], this.players = [];
        for (var t = 0; t < m.__maxClients; t++) this.players.push(new fe(this)), 
		this.players[t].__id = t;
        this.__foodPositionHash = {}, this.__foodCollisionHash = {}, 
		this.server && this.initServer(), 
		this.__rAF = window.requestAnimationFrame ? window.requestAnimationFrame : this.requestAnimationFrame,
		this.__cAF = window.cancelAnimationFrame ? window.cancelAnimationFrame : this.cancelAnimationFrame, 
		this._pdt = 1e-4, this._pdte = performance.now(), 
		this.localTime = .016, 
		this._dt = performance.now(), 
		this._dte = performance.now(),
		this.__createTimer()
    };
	

    ge.prototype.prepareTinyIDs = function() {
        this.availableTinyIds = [];
        for (let e = 0; e < m.__maxClients; e++) this.availableTinyIds.push(e)
    }, ge.prototype.getTinyID = function() {
        return this.availableTinyIds.shift()
    }, ge.prototype.returnTinyID = function(e) {
        this.availableTinyIds.push(e)
    }, ge.prototype.__update = function(e) {
 
		
        e = performance.now(), 
		this.dt = .016, //this.lastFrameTime ? (e - this.lastFrameTime) / 1e3 : .016, 
		this.lastFrameTime = e, 
		this.__clientUpdate();
        var t = this.__rAF;
        this.updateid = t(this.__update.bind(this), this.__viewport)
    }, ge.prototype.getPlayerPositionHash = function(e) {
        var t = {};
        return t.hashX = Math.floor(e.__pos.x / m.__maxScreenWidth), 
		t.hashY = Math.floor(e.__pos.y / m.__maxScreenHeight), 
		t.hash = t.hashX + "_" + t.hashY, t
    }, ge.prototype.__processInput = function(e) {
        var t = 0;
        if (e.__lastInput) {
            const i = e.__lastInput.input;
            if (i.l && (t = -1), i.r && (t = 1), void 0 !== i.ma) {
                var o = this.angleDifference(e.__dir, i.ma);
                t = o > .05 ? 1 : o < -.05 ? -1 : 0
            }
            e.__accelerate = i.a, 0 == e.__foodsEaten && (e.__accelerate = !1)
        }
        return t
    }, ge.prototype.__getPhysicsMovementVectorFromDirection = function(e) {
        //var t = m.__playerSpeed * e.a * this.dt;
        var t = serverSpeed * e.a * this.dt;
		 
        return {
            x: e.x * t,
            y: e.y * t
        }
    }, ge.prototype.__createTimer = function() {
        setInterval(function() {
            this._dt = performance.now() - this._dte, this._dte = performance.now(), this.localTime += this._dt / 1e3
        }.bind(this), 4)
    }, ge.prototype.__foodExplosion = function(e, t, o) {
        t = Math.min(1e3, t);
        var i = !0;
        null == o && (i = !1, o = Math.round(1e5 * Math.random()));
        for (var a, n = ye(o), _ = Math.min(m.__foodExplosionMaxFoods, t),
		s = Math.ceil(t / _), 
		r = Math.max(1, Math.floor(_ / e.length)),
		l = [], 
		d = this.__getWidthBasedOnFoods(t), 
		c = 0; 
		c < e.length; c += 2) {
            const t = [];
            for (var h = 0; h < r; h++) {
                const o = {
                    x: e[c],
                    y: e[c + 1]
                };
                a = this.__v_add(this.__randomPointInCircle(d, n), o);
                var u, p = Math.sqrt(a.x * a.x + a.y * a.y);
                if (p > m.__levelRadius) {
                    var y = m.__levelRadius / p;
                    a.x *= y, a.y *= y
                }
                null != (u = i ? this.__getFoodIdFromPosition(a) : this.__addFood(a, s)) && t.push(u)
            }
            l.push(t)
        }
        return {
            seed: o,
            foodsCreated: l
        }
    }, ge.prototype.__getWidthBasedOnFoods = function(e) {
        var t = m.__snakeMaxWidth - m.__snakeStartWidth,
            o = Math.min(e / m.__snakeMaxWidthFood, 1);
        return de.easings.easeOutCirc(o, m.__snakeStartWidth, t, 1)
    }, ge.prototype.__getLengthBasedOnFoods = function(e) {
        const t = m.__snakeMaxSegments - m.__snakeSegments,
            o = Math.min(e / m.__snakeMaxSegmentsFood, 1);
        return Math.floor(de.easings.easeOutQuint(o, m.__snakeSegments, t, 1))
    }, ge.prototype.__addFoods = function(e, t) {
        var o = !0;
        null == t && (o = !1, t = Math.round(1e5 * Math.random()));
        for (var i, a = ye(t), n = [], _ = 0; _ < e; _++) {
            var s;
            i = this.__randomPointInCircle(m.__levelRadius, a), null != (s = o ? this.__getFoodIdFromPosition(i) : this.__addFood(i)) && n.push(s)
        }
        return {
            seed: t,
            foodsCreated: n
        }
    }, ge.prototype.__addFood = function(e, t) {
        var o = this.__getFoodIdFromPosition(e);
        e = this.__getFoodPositionFromId(o);
        var i = this.__getPositionHash(e, m.__maxScreenWidth, m.__maxScreenHeight);
        null == this.__foodPositionHash[i] && (this.__foodPositionHash[i] = {});
        var a = 1;
        if (e.x % m.__foodBigPixelChance != 0 && e.y % m.__foodBigPixelChance != 0 || (a = m.__foodBigValue),
		t && (a = t), 
		!this.__foodPositionHash[i][o]) 
		return this.__foodPositionHash[i][o] = a,
		this.activeFoods++, 
		//console.log("yedin"),
		o
    }, ge.prototype.__addFoodToCollisionHash = function(e, t) {
        var o = this.__getFoodIdFromPosition(e),
            i = this.__getPositionHash(e, m.__foodCollisionSize);
        null == this.__foodCollisionHash[i] && (this.__foodCollisionHash[i] = {}), this.__foodCollisionHash[i][o] = t
    }, ge.prototype.__existsInFoodCollisionHash = function(e, t) {
        var o = this.__getPositionHash(e, m.__foodCollisionSize);
        return null != this.__foodCollisionHash[o] && this.__foodCollisionHash[o][t]
    }, ge.prototype.__checkFoodCollision = function(e, t) {
        for (var o = m.__snakeBaseWidth * e.__thick + m.__foodCollisionTolerance, i = o / 2, a = Math.floor(o / (2 * m.__foodCollisionSize)) + 1, n = Math.floor(e.__pos.x / m.__foodCollisionSize), _ = Math.floor(e.__pos.y / m.__foodCollisionSize), s = -a; s <= a; s++)
            for (var r = -a; r <= a; r++) {
                var l = n + s + "_" + (_ + r);
                if (null != this.__foodCollisionHash[l]) {
                    var d = this,
                        c = this.__foodCollisionHash[l];
                    Object.keys(c).forEach((function(o) {
                        var a = d.__getFoodPositionFromId(o),
                            n = a.x - e.__pos.x,
                            _ = a.y - e.__pos.y;
                        if (Math.sqrt(n * n + _ * _) < i) {
                            var s = c[o];
                            t(e, s)
                        }
                    }))
                }
            }
        return []
    }, ge.prototype.__getCameraZoomForPlayer = function(e) {
        return 1;
		//return Math.min(m.__snakeStartWidth / e.__width * m.__cameraWidthToZoomFactor, m.__cameraMaxZoom)
    }, ge.prototype.__getCameraZoomHashOverflow = function(e) {
        return Math.round(Math.max(1, 1 / this.__getCameraZoomForPlayer(e)))
    }, ge.prototype.__getPositionHash = function(e, t, o) {
        return Math.floor(e.x / t) + "_" + Math.floor(e.y / (o || t))
    }, ge.prototype.__getFoodIdFromPosition = function(e) {
        var t = m.__levelRadius / m.__foodMinDistribution,
            o = 2 * t;
        return (Math.floor(e.y / m.__foodMinDistribution) + t) * o + (Math.floor(e.x / m.__foodMinDistribution) + t)
    }, ge.prototype.__getFoodPositionFromId = function(e) {
        var t = m.__levelRadius / m.__foodMinDistribution,
            o = 2 * t,
            i = {};
        return i.x = (e % o - t) * m.__foodMinDistribution, i.y = (Math.floor(e / o) - t) * m.__foodMinDistribution, i
    }, ge.prototype.__removeFood = function(e) {
        var t = this.__getFoodPositionFromId(e),
            o = this.__getPositionHash(t, m.__maxScreenWidth, m.__maxScreenHeight);
        this.__foodPositionHash[o] && delete this.__foodPositionHash[o][e], this.__foodPositionHash[o] && 0 === Object.keys(this.__foodPositionHash[o]).length && this.__foodPositionHash[o].constructor === Object && delete this.__foodPositionHash[o], this.__removeFoodFromCollisionHash(e)
    }, ge.prototype.__removeFoodFromCollisionHash = function(e) {
        var t = this.__getFoodPositionFromId(e),
            o = this.__getPositionHash(t, m.__foodCollisionSize);
        this.__foodCollisionHash[o] && delete this.__foodCollisionHash[o][e], this.__foodCollisionHash[o] && 0 === Object.keys(this.__foodCollisionHash[o]).length && this.__foodCollisionHash[o].constructor === Object && delete this.__foodCollisionHash[o]
    }, ge.prototype.__randomPointInCircle = function(e, t) {
        t || (t = Math.random), t || (t = Math.random);
        let o, i, a = Number.POSITIVE_INFINITY;
        const n = 2 * e,
            _ = e * e;
        for (; a > _;) a = (o = t() * n - e) * o + (i = t() * n - e) * i;
        return {
            x: o,
            y: i
        }
    }, ge.prototype.__pos = function(e) {
        return {
            x: e.x,
            y: e.y
        }
    }, ge.prototype.__v_add = function(e, t) {
        return {
            x: e.x + t.x,
            y: e.y + t.y
        }
    }, ge.prototype.__stopUpdate = function() {
        this.__cAF(this.updateid)
    }, ge.prototype.__lerp = function(e, t, o) {
        var i = Number(o);
        return e + (i = Math.max(0, Math.min(1, i))) * (t - e)
    }, ge.prototype.__randomColor = function() {
        function e(e) {
            var t = e.toString(16);
            return 1 == t.length ? "0" + t : t
        }
        var t, o, i, a = Math.random(),
            n = .25 + .7 * Math.random(),
            _ = .4 + .55 * Math.random(),
            s = function(e, t, o) {
                return o < 0 && (o += 1), 
				o > 1 && (o -= 1),
				o < 1 / 6 ? e + 6 * (t - e) * o : o < .5 ? t : o < 2 / 3 ? e + (t - e) * (2 / 3 - o) * 6 : e
            },
            r = _ < .5 ? _ * (1 + n) : _ + n - _ * n,
            l = 2 * _ - r;
        return t = Math.round(255 * s(l, r, a + 1 / 3)), o = Math.round(255 * s(l, r, a)), i = Math.round(255 * s(l, r, a - 1 / 3)), "0x" + e(t) + e(o) + e(i)
    }, ge.prototype.__v_lerp = function(e, t, o) {
        return {
            x: this.__lerp(e.x, t.x, o),
            y: this.__lerp(e.y, t.y, o)
        }
    }, ge.prototype.angleDifference = function(e, t) {
        var o = (t - e + Math.PI) % (2 * Math.PI) - Math.PI;
        return o < -Math.PI ? o + 2 * Math.PI : o
    }, ge.prototype.__verifyUserName = function(e) {
        return e.toUpperCase().replace(/[\W_]+/g, "").substr(0, m.__maxNameLength)
    }, ge.prototype.setPlayerInCollisionHash = function(e) {
        for (var t = 0; t < e.__length; t += 2) {
            var o = e.__partPositions[t],
                i = Math.floor(o.x / m.__snakeCollisionSize) + "_" + Math.floor(o.y / m.__snakeCollisionSize);
            null == this.playerCollisionHash[i] && (this.playerCollisionHash[i] = []), this.playerCollisionHash[i].push(o)
        }
    }, ge.prototype.doesPlayerCollideWithOtherPlayers = function(e) {
        var t, o, i = e.__pos.x,
            a = e.__pos.y,
            n = Math.floor(i / m.__snakeCollisionSize),
            _ = Math.floor(a / m.__snakeCollisionSize),
            s = [];
        for (t = n - 1; t <= n + 1; t++)
            for (o = _ - 1; o <= _ + 1; o++) {
                var r = t + "_" + o;
                null != this.playerCollisionHash[r] && (s = s.concat(this.playerCollisionHash[r]))
            }
        if (0 == s.length) return !1;
        var l = performance.now();
        if (l < e.__invisibilityTime) return !1;
        for (var d = 0; d < s.length; d++) {
            var c = s[d];
            if (c.u !== e.__id && !(l < this.players[c.u].__invisibilityTime)) {
                var h = m.__snakeBaseWidth * e.__thick / 2,
                    u = m.__snakeBaseWidth * c.s / 2,
                    p = i - c.x,
                    y = a - c.y;
                if (Math.sqrt(p * p + y * y) < h + u - m.__collisionIntolerancePixels) return c
            }
        }
        return !1
    }, ge.prototype.getSortedHighscoreList = function() {
        for (var e = [], t = [...this.players].sort((function(e, t) {
                return t.__foodsEaten - e.__foodsEaten
            })), o = 0; o < t.length; o++) {
            var i = t[o],
                a = me({}, i.__pos);
            e.length < m.__leaderBoardLength && (a.u = i.__id, 
			a.f = i.__foodsEaten, 
			this.players[o].rank = o + 1), 
			i.__active && i.__alive && e.push(a)
        }
        return e
    };
    const ve = ['elif','ergiiin','melike','Cansu','Simal','leo','Leydi','DolunaAY','selena','esraa','EMERSON', 'NELEO', '05032020', 'TERRORIST', 'SLITHERKING', 'AZERTY', 'MOGEKO', 'PLAY', 'FUFUFUFUFUFUFUFUFUFU', 'RIANNE', 'MALICE', 'DIE', 'GE', 'CHASUUUUUUUUUU', 'HBINJFR', 'BOI', 'BLANK', 'FUCK', 'ROAN', 'BROKELILBABY', 'David J.', 'GOFGOL', 'KENZIE', 'NIGGER', 'COOL', 'RR', 'PAPA', 'ACTPAHN', 'BRUH', 'POOP', 'ASS', 'RAVENCLAW', 'FURY4LIFE', 'LEX305', 'YUYU', 'YEEEEEEEEEEEEEEET', 'TINYBLUETAPEWORM', 'WWW', 'NLE', 'SHANESAW', 'COOKIES', '69', 'CAT', 'GOAWAY', 'NNNN', 'MAL', 'JACKJACK', 'TINYBLUE', 'UID', 'MICHELLE', 'CLAY', 'POLLI', 'J', 'NOU', 'NAREK', 'SNAME', 'SLIMSHADY', 'SCOTLAND', 'GFGFG', 'KYLE', 'YOYO', 'AJ', 'SAM', 'I', 'HEY', 'GOOSE', 'SLITHERSPACE', 'HELLO', 'CORBAN', 'SOMEGUY', 'OOF', 'ANONYMOUS', 'AS', 'SUP', 'MASTER', 'FRISK', 'QBT', '76', 'JEREMY', 'MAMEN', 'WKIMORTALKM', 'PARYNHAR', 'JOHNWILKESBOOTH', 'CG', 'SIKEEEEEE', 'CARLIYONNA', 'NEWBIE', '2020', 'COOKIE', 'BISH', 'LA', 'HUSLEE', 'CAKEJELLO', 'SUPER', 'NOOB', 'BECARFULCHIREN', 'X', 'TTTT', 'SAD', 'NOTHING', 'HAILEY', 'EMM', 'BITCH', 'YEEYEE', 'DEKU', 'NO', 'LEXI', 'KILLERSQUID48', 'HAYHAY', 'MILES', 'ISORULE', 'H', 'IRULE', 'BRO', 'INSCHOOL', 'GENOSANS', 'SLITHER', 'TY', 'STICKYCHIP', 'KERCH00', 'PRO', '666', '121356', 'BLACKPINK', '5346456', 'UNOOBIFUKILLME', 'U2', 'KIARA', 'GOATSAVAGE', 'SNAKE', 'FRED', 'FRAI', 'ABBY', 'BIGBOI', 'BILLYBOB', 'HI', 'RIP', 'JOEMAMA', 'YOURMOMGAY', 'OLOL', 'SEAN', 'MIKA', '55555', 'BOB', 'BIGBIO', 'BTS', 'MEME', 'KENDALL', 'CHIKILOVE08', 'VAKA', 'JOE', 'JORDAN', 'NYA', 'HAMSTER', 'TIM', 'DETH', 'EPICFREZZI', 'ELSIE', 'DOGYNB', 'CACA', 'BIGDADDY', 'VY', 'GRYFFINDOR', 'CHIKY', 'NTM', 'JAY', 'EEG', 'GINGERBREAD', 'SAILOR', 'BB', 'K', 'CROUCHY', 'CASINO', 'COOPER', 'IKILLU', 'WALOL', 'SHEEP', 'CHRIS', 'NGD', 'USUCK', 'DAVID', 'PUGGY', 'TARTARUS', 'BUMBLE', 'RAYDEN', 'FUKYOU', 'MATT', 'BUM', 'MEEP', 'FVFFGVFGB', 'XANDER', 'MOMMY', 'QUEENSNAKE', 'IDK', 'HQA', 'CHICKEN', 'URMOM', 'MERMAID', 'CHOCOLATE', 'IMBLUE', 'DEATH', 'SLIM', 'GFNRHYFDTYN', 'USER', 'IMANUTINU', 'COPPERHEAD', 'BORBIN', 'LEVI', 'WATERMELON', 'MANGLE', 'YOURMOMISGAY', 'WZXCVGBJHN', 'AYDEN', 'JAYDIN', 'BRUTUS', 'YOUR', 'MRY', '69696969696696969696', 'MRCLEAN69', 'SPERM', 'LOOPS', 'ZUHURA', 'JT', 'DEPRESSION', 'INQ', 'GIOGIO', 'DAMON', 'KSENIIA', 'BI', 'SOPHIA', 'NICKNAME', 'BBB', '123456789', 'TRANSFIXED', 'MACKENZIE', 'FART', 'TESSA', 'O', 'SOFIA', 'HYPER', 'TAYK', 'B', 'II', 'SATANSATANSATANSATAN', 'YY', 'LOLLA', 'SLITERKING', 'DWDW', 'HEWHOMUSTNOTBENAMED', 'SHUTTHEFRIDGE', 'JACOB1', 'JOURNEYYYYY', 'LAURA', 'YEIDY', 'TYLER', 'JASON', 'ITZBINY', 'JOSEISCOLORBLIND', 'KJ', 'KENOYT', 'KILLER', 'JJJ', 'SUSHISAM', 'VEGTA', 'PANDA', 'JMIKE', 'DVSFN', 'NICKY', 'DAD', 'MJ', 'FUFUFUFUFUFUFUFUF', 'SPLAT', 'SHELDON', 'OWO', 'OK', 'HELP', 'HUNTER', 'CRAINER', 'LIAM', 'EMER', 'TERRESSA', 'R', 'MALEKWILLWIN', 'THEATRE', 'OM', 'M', 'TURD', 'TTTAAA', 'RHRBM', 'SSSSSSSS', 'ABDEL1234', 'YOURMOM', 'SLIVER', 'DONTKILLMEBOTS', 'BREAD', 'LILLY', 'RAVEN', 'BIGFRED', 'JERRY', '535462983', 'CHAMELEON', 'C', 'ANGELA', 'GAYYYYY', 'FEET', 'GOODLOKIN', 'Bananaaa', 'BRANDON', 'GIRL', 'LOVE101', 'ABCATS', 'MARELLY', 'TEEHEE', 'BEO', 'MRDTTV', 'ICECUBE', 'UNICORN', 'ANA', 'HUKU', 'GDKFERS', 'BEEF', 'LOL', 'IKENUMA', 'NIKI', 'IMA', 'KKW', 'STEPBRO', 'OH', 'WINNER', 'MEEEEEE', 'PUPPY', 'LIFE', '2', 'TAYDEN', 'WHATT', 'JYDUD', 'ED', 'BEEBLE', 'HOPE', 'NANA', 'KIDD', 'GOAWAYORDIEE', 'KITKAT', 'SHYANNE', 'G', 'UHH', 'TYREE', 'LOKI', 'FE4RLICIA', 'LOSS', 'COLL', 'NLEEE', 'ZYHEIM', 'VITALINA', 'GO', 'DONOVAN', 'MADIE', 'XXXKINGRIP', 'RETARD', 'BOTO', 'BUTTHOLE', 'ROLANDO', 'OOOOOOOO', 'KILLMEIFYOUGAY', 'LOGAN', 'NAME', 'GG', 'REEE', 'MARSHMALLOW', 'MEMES', 'MICHAEL', '5', 'LILSMOKEY', 'TATIANA', 'ZERK', 'BRENDAN', 'KOBE', 'DOOM', 'WELSHCAKE', 'DARKSIDE', 'POOPOO', 'SPACE', 'HEYYYYYY', 'DADDY', 'FUNNEH', 'IEATPIZZA', 'MOONLIGHT', 'ME', 'BRENDEN', 'LANDEN', 'LIVE', 'JOSE', 'LLLLIIILLLYYYY', 'SLA', 'HYPERCORESZTUDIOS', 'SEAHAWK', 'ROMANOODLES', 'ALEX', 'WOLFQUEEN', 'KING', 'BENDOVER', 'TINY', 'HIIIIIIIIII', 'NICK', 'LUCARIOUS21', 'DANANA', 'YE', 'BRTR', 'CRISPYGRAPES', 'DARKDEADPOOL', 'MARI20LOCKETT', 'P1NK', 'DIRPYLIRPY', 'D', 'HELL', 'GYH89I0OPZAPL', 'HAHA', 'SINKLIFE', 'MMMMM', 'ZICLONE', 'JJJJJ', 'DSJHVNAKSDMCSDKXC', 'SLITHERGOD', 'HESUUUUUS', '333PRO', 'FLEX', 'SART', 'MEMELORD', 'HELLUR', 'DAKOTA', 'BOGGIER', 'CLO', 'AAAAAA', 'MARCO', 'JULIAN', 'TYSON', 'NIGERIA', 'TALIYAH', '1QUINCY', 'BOSS', 'BAILEY', 'ELISEY', 'YABOI', 'HHH', 'ADDY', 'HEIDI', 'KUADSBFJHWEBDFBJ', 'LUKAS', 'BUTT', 'YEET', 'AARON', 'GVYFT', 'BOT', 'KY', 'CATEARS', 'NEWUPDATES', 'MASTERPLAYER', 'CHARLI', 'BOOTY', 'ETHAN', 'CHUCKYDOLL', 'AMNESTY', 'ALIEN', 'ASDF', 'OLIVIA', 'FUN', 'KILL', 'ILIKETURTLEZ', 'JK', 'QUINCY', 'IMTHENEWGIRL', 'UR', 'NN', 'NIGGA', 'REEEEEEEEEE', 'POLICE', 'JL', 'FRIDAY', 'REN', 'NUGGETZ', 'GREEN', 'E', 'DEAD', 'PRESTONPLAYZ', 'SPEED', 'SAMSAM', 'IIIIIIII', 'EEEEEEEEEEEEEEEEEEEE', 'RARR', 'HOW', 'TIGGER', 'TRAPMEPLZ', 'DARK', 'SAKURA', 'TIMOTHY', 'TEST', 'XD', '1STPLACE', 'CALEB', 'MEL', 'MONEY', 'MEW', 'IO', 'REVAN', 'GEM', 'BEANS', 'YOINK', 'CHRISTIAN', 'GIVE', 'GIORUNO', 'PACKERS', 'SLIDE', 'BRYADEN', 'NOTSUPRISED', 'HYHDTU', 'BLEH', 'GAGE', 'NATALIA', 'ADRIANNA', 'MELLON', 'AJROLEX', 'CHICKINFONGER', 'BRBVEJHBNJHUGBYWHEUO', 'OOT', 'BEAST', 'MARIAH', 'YAAASSSS', 'HD', 'NOOB1234', 'NHMTRYWKNPTHW', 'YOUDEAD', 'SOPHIE', 'MEOW', 'BIG', 'MAKAYLA', 'HAAHERRRRR', 'SD', 'PINK', 'STEVEN', 'ALINAGAME', 'REEEEE', 'JANVI29', 'LLG', 'IS', 'APPLEJACKS', 'DANNA', 'YEETBOI', 'JILLIAN', 'RUDDDDDDDY', 'THE', 'CUPCAKE', 'TEDDYGAMER', 'STEPHENCURRY', 'USU', 'LATE', 'MYBUT', 'DADD', 'HH', 'BOBBLEGUM', 'COOLGAL', 'TTVBYTHEWAY', 'JAYCE', 'ZILLA', 'TAPEWORMCATCHER', 'KINGSPACE', 'ODOG', 'DEADROSES', 'SC', 'FOOTBALL', 'GAY', 'CHICA', 'DOMENIC', 'NINE', 'HOLY', '0O0', 'GAMERGIRL22', 'KINGRIGGS', 'REDNEC', 'REEEEEE', 'LILA', 'ROBOCCO', 'T', 'LUNA', 'HTTPSSLITHERSPACE', 'SLYTHERIN', 'SONIC', 'IT', 'KITTY', 'PACKZ', 'SIREEN', 'BROOKLYNN', 'IDUMB', 'SY', 'CH', 'IWERUIOP', 'STRAWBERRY', 'PRODICK', 'ZZ', 'SLITHER123345678910', 'DREAM', 'VOIDPANCAKE', 'XXXFANRIP', 'SAYED', '1ST', 'ARNA', 'FIONA', 'CHIKIN', 'YOMOMMA', 'IMOK', 'MIA', 'CHEZBORGOR', 'ZOYDEEN', 'SLITHERIO', 'LOSSER', 'HILO', 'BEC', 'YOUDIE', 'DOLUNAY', 'KEMAL', 'CRUZZZ', 'LUCAS', 'SLIME', 'SINK', 'WHOSURDADDY', 'MIKCHEZDURR09', 'KIRITO', 'UWU', 'COCKANDBALLS', 'JADE', 'URDAD', 'MEIE', 'AYY', 'DAVIDJ', 'SUPERRONKID', 'DANNY', 'JACK', 'CHASE', 'AAAAAAAAAA', 'ISAIAH', 'GREGGY', 'AUSTINISGAY', 'WOLFIE', 'STOOP', 'MOVELIKEASNAKE', 'MAGRO', 'BATMAN', 'MYJEFFY', 'WUS', 'BEESECHURGER', 'BILL', 'PP', 'CRAZY', 'OROROROROROROROR', 'TRASH', 'NATHANT', 'JHJMHMJHJ', 'DEADLYRAGDOLL', 'EATMYASS', 'ZOE', 'MXCM', 'ANNA', 'ROBLOX', 'JULIANA', 'WHAT', 'JAZZ', 'PIP', 'OMG', 'JESS', 'NICKSNAME', 'CMASTER584', 'NI', 'NIG', 'ASHANTI', 'FRE', 'HOLLEY', 'LALALALA', 'KI', 'BUB', 'ANN', 'FABRICIO', 'TREY', 'CRISPYWAFFELG', 'PEE', 'FOOD', 'NCT', 'HACKER', 'FISHER', 'SAVYYY', 'AHHH', 'ASIOSAMIGOS', 'RERTFTDT', 'EVA', 'ABBEY', 'TTVREPOOC', 'CASIDUS', 'MOCHEI', 'BTSIS', 'STUPID', 'ADAVEN', 'SHORTY', 'SPARKY', 'KKKLO', 'KRAZY', 'OOMP', 'ANTHONY', 'S', 'SKYLANDERHERO', 'AHVEWUVTEARITBERB5EU', 'PARCYJAKUP', 'CHOPY', 'JUIAN', 'NFKSJDN', 'TCGILBERT', 'JACKIECHAN', 'IVIBE', 'JOHNNY', 'IDGAF', 'THEDUO', 'AZUL', 'SSSSSSS', 'HUJJHG', 'JJ', 'MUSHROOM', 'OTESB', '565', 'IZZY', 'SMASTER', 'GOD', 'LIAMSNAK', 'OKBOOMER', 'ELI', 'DONUT21', 'TEHEHEHE', 'LOVE', 'BALA', 'KK', 'NNM', 'PETERPUG', 'YNW', 'LEO', 'WILDFIRE', 'HEEHEE', 'KNKK', 'LANDON', 'IEATYOU', 'M0NEY', 'HGV', 'BEEGIRL62', 'YOULLFLOATTOO', 'JAKIE', 'PAYTON', 'JAMES', 'LALA', 'RACHEL', 'BOO', 'SASUKEEUCHIHA', 'TABTAB', 'WOLFTOOTH', 'SLITHERPRO', 'CHE', 'OOOOH', 'TOKYOSREVENGE', 'BEST', 'LOADING', 'SDN', 'BELLA', 'DWI', 'EXTREME', 'VBSS', 'PLZ', 'VIIOOFVIOOFVII', 'HIIIIIIIIIIIIIIIIIII', 'SOUR', 'BANANA', 'TATSUYA', 'CARTER', 'DJ', 'CUTEOVERLOAD', 'KREWFAM4LIFETOAST', 'EDWDWD', 'DRAGON', 'IIIIIIIIIIIIIII', 'KJB', 'KNEEL', 'ASHER', 'INOTUCHU', 'ZEN', 'MARKO', '1111111', 'OPMAN10', 'HII', 'ABK', 'AROW135', 'JIM', 'XCVBNM', 'LJ', 'POPPER', 'ARRRRRRRRR', 'AD', 'TTT', 'PJ', 'JILL', 'REXY', 'BLUEQUUEN', 'HAVEN', 'VIHAAN', 'PARTYPOOPER', 'VIRTUALGOD', 'JIMIN', 'ANNIE', 'YASSQUEEN', 'BING', 'KONTOL', 'NOOOO', 'DIVINE', 'NKBO', 'YEERTTTTRTR', 'DUSTY', 'HIII', 'HOTDOG', 'SETH', 'CHEYENNE', 'RAINBOW', 'QUAN', 'FANDS', 'ANNEMARIE', 'JM', 'SIDETTE', 'WASGOOD', 'ALPHYS', 'KORLEAH', 'DOM', 'DACOBRA', 'JOJ', 'GOKU', 'BUTTBOY', 'BOBMANGO41', 'ONLY', 'ABC', 'AUSTYN', 'BITCHSNITCHRICTH', 'MIKE', 'DRE', '745585', 'BALLER', 'CECE', 'PAPER', 'F', 'GAYBOI', 'EVIE', 'SAVANNAH', 'COLE', 'ELCHJH', 'SLITHERED', 'SASMA', 'GANDHI', 'THEBRIGHTCOLORSCLUB', 'COOLGAL0827', 'REEEEEKID', '0000000000000000', 'DAILYDONUT', 'PIZZAROLLS', 'PS', 'JALISCO', 'DARIUSDAGOAT', 'JENNIFER', 'AL', 'KENNA', 'CC', 'KUMO', 'REALMADRID', 'MOJO', 'YV', 'XXX', 'HA', 'DUTS', 'TREEEEEEEEEEEEE', 'FGBUYR', 'JELLY', 'REEEEEEEE', '123', 'JETT', 'KLAYRRR', 'BIGBOY', 'FEED', 'DONTKILLMEH', 'OPPS', 'IM', 'IDKMYNAME', 'P', 'MARAINA', 'BREANALJ', 'LUCKY', '8987987', 'NOAH', 'FFF4', 'DA', 'VJDSIOFD', 'HAI', 'UMOM', 'XXXTEN', 'QWERTYUIOP', 'QUEEN', 'TITANIC', 'SLOGO', 'SARAH', 'LJH', 'DEANGELOGIANT22', 'BUTTMASTER', 'LILHAY', 'FREDDYFAZBEAR', 'ALASKA', '4', 'GGG', 'BE', 'CINNAMON', 'FISH', 'NICKGRR', 'TRASHIK', 'MOCHI', 'DEEZ', 'GHYCYVTY7', 'DOMINATE', 'POLAR', 'YOU', 'KOP', 'FABIAN', 'MITEK', 'JONATHAN', 'LAZERTAG', 'PEEPEEPOOPOO', 'PETEYTHEAWESOME', 'HR', 'TYRONE', 'EQ2EQ', 'HOWDY', 'CASSSSH', 'FOOT', 'HEART', 'SAMBO', 'MILLIE', 'ERIC', 'BEN', 'HYG', 'TIMOTY', 'BOBKILLER', 'ZOEY', 'EUPHORIA', 'LILLWIP', 'PLAYER', 'A', 'CAYDENT', 'TURTLE', 'CUMSOCK', 'MAC', 'QUESTION', 'THICKER', 'HAAAAAA', 'CYCLONE', 'CHC', 'MALEBUNS', 'ARNALDOY', 'PILL', 'ZARI', 'MMMM', 'COOKIEGUY', 'LUCY', 'KORONAVIRUS', 'TBNRFRAGS', 'FAT', 'WIERDDUDE', '6', 'TAKUACHE', '24357', 'PFKSD', 'TTVBCJBYTHEWAY', 'HEHEHEHEHEHEHEHEHEHE', 'BEETLEJUICE', 'BRIANNA', 'Y', 'ILIANA', 'CHARLY', 'TG', 'IDIOTA', 'ASAS', 'TECHBOY', 'STUPIDNONAME', 'LEA', '535', 'CUHH', 'HFYH', 'YOOOOOO', 'DEADLINE1276', 'IMNOTHERE', 'ERIE', 'HEHEHEHE', 'MONTY', 'ALLIE', 'SERPENTINE','yalaka','ahmet','marangoz ali','huseyin baba','eşek arısı','honey bee:)','fcuk u','get Backk','TuRTleMan','ILoveTurtLes :)','getRekT','kevin xD','LoL','⚡Heяø ⚡Heяø','Unkown Wolf','slither.ist_12','slither.ist_10','slither.ist_192','slither.ist_92','slither.ist_34','slither.ist_22','slither.ist_72','slither.ist_41','slither.ist_27','slither.ist_19','slither.ist_57','slither.ist_12','slither.ist_10','slither.ist_18','slither.ist_90','slither.ist_13','slither.ist_67','slither.ist_66','slither.ist_49','slither.ist_58','slither.ist_102','slither.ist_46','slither.ist_42','slither.ist_20','slither.ist_72','slither.ist_91','slither.ist_39','slither.ist_20','slither.ist_71','slither.ist_58','slither.ist_27','slither.ist_25','slither.ist_7','slither.ist_12','slither.ist_10','slither.ist_192','slither.ist_92','slither.ist_34','slither.ist_22','slither.ist_72','slither.ist_41','slither.ist_22','slither.ist_19','slither.ist_57','slither.ist_12','slither.ist_10','slither.ist_18','slither.ist_90','slither.ist_13','slither.ist_67','slither.ist_66','slither.ist_49','slither.ist_58','slither.ist_102','slither.ist_46','slither.ist_42','slither.ist_20','slither.ist_72','slither.ist_91','slither.ist_39','slither.ist_20','slither.ist_71','slither.ist_58','slither.ist_27','slither.ist_25','slither.ist_7','NΣXUS','𝓟𝓡𝐈𝓝𝓒𝓔','😈ϾṒṆṆΣϾṪḭṆḠ🐉','hacker','miray','ezgi nil','nice','zeus','sebassssss','JayyXx ','Jasonnnnnn','GÜŠTAVÖ','Help Me','Curvex.io','teampro','the_prof','Noob:)','MasterNoob:D','MƛƦƧӇMЄԼԼƠ','arcadego','bumbum','wunwun','RoYaL','TYT☢️SIRIUS','edgar amigo','köroğlu','adam ol','profesör','akıllı ol','to be yourself','paperrrr','im ok','you noobbb','i kill uu','go home',':)',':D','niKe','Mike','oscar','JuLia','missgirll','melissa','bnnr','amigos','loss','loser','slayer','marshmellow','santiago','santaFE','domingos','dominiq','tytsirius','agarboy','Galacticos','adios','CLaRis5a','Tempest','Julia','n0psa','SONLER','Vegas','sanik','FleXxx','bumbum','wunwun','im new','porterio','Woody','sara fan','PUMBA','exTreme','DUMB','Go home:)','levels','ArYa','mustafa kemal','король','начинающий','лучший','Cмертоносный','θανάσιμα','τουρκική','уровень','ok','levels','ArYa','ismail','kingcamo','pro','Timah','slayerlick','ÇeLik','Come Onnn','go go go','EsTeBAn','pAbLo','sharkk','sivasli','gre','luckyboy','nerdygirl','lucky Girl','kalimera','loll','wow!','championnnn','paperman','paperboy','paper man','paper space','space paper','paperiospace','leaderr','1 number','BrickRose','Prince','Jade','Beau','Smasher','Dazzle','Black Magic','Shrimp','Genie','Princess','Doggie','Bullseye','Butterfly','Fury Cutie','Jelly Rogue','Charisma','Bobo Indie','Wonder Bigshot','Freak','Cryo','Daydream','Zero','Indie','Bird','Twinkle Toes','Red Barber','Jewel','Lightning','Dash','Cyclone','Buck','Butch','Sketch','Flutters','Tiger','Bullseye','Hawk','Team >.<','Sara','jamie','K'],
        xe = e => {
            const t = e[1] - e[0];
            return Math.random() * t + e[0]
        },
        Se = function(e) {
            this.__game = e, this.__name = ve[Math.floor(Math.random() * ve.length)].toUpperCase(),
			this.__color = [e.__randomColor()], 
			this.__hat = 2, 
			this.viewDistance = 200,
			this.targetDirection = void 0, 
			this.rotateDirection = 0,
			this.inputSeq = 0, 
			this.rayCollisions = [], 
			this.rays = 8, 
			this.rayAngleDistribution = 2 * Math.PI / this.rays,
			this.doDumb = !1,
			this.doRandomDir = !0, 
			this.randomDirFrequency = [100, 5e3],
			this.threadAccelerate = !1, 
			this.threadAccelerateTime = [100, 2e3],
			this.dumbAccelerate = !0, 
			this.dumbAccelerateFrequency = [2e3, 1e4], 
			this.dumbAccelerateDuration = [100, 2e3],
			this.accelerationTime = 0, 
			this.accelerate = !1
        };
    Se.prototype.hashOffsets = [{
        x: 0,
        y: 0
    }, {
        x: 0,
        y: -1
    }, {
        x: 0,
        y: 1
    }, {
        x: -1,
        y: 0
    }, {
        x: -1,
        y: -1
    }, {
        x: -1,
        y: 1
    }, {
        x: 1,
        y: 0
    }, {
        x: 1,
        y: -1
    }, {
        x: 1,
        y: 1
    }];
    var we = function(e, t) {
        for (; e < 0;) e += t;
        return e % t
    };
    Se.prototype.updateBrain = function() {
        var e;
        this.detectThreats();
        var t = Number.POSITIVE_INFINITY;
        this.targetDirection = void 0;
        var o = !1,
            i = 0;
        for (e = 0; e < this.rays; e++) {
            var a = this.rayAngleDistribution * e,
                n = this.__game.angleDifference(this.__player.__dir, a);
            Math.abs(n) <= this.rayAngleDistribution && (i = e, this.rayCollisions[e] && (o = !0))
        }
        if (o && !this.doDumb) {
            for (e = 0; e < this.rays; e++)
                if (!this.rayCollisions[e]) {
                    a = this.rayAngleDistribution * e, 
					n = this.__game.angleDifference(this.__player.__dir, a);
                    Math.abs(n) < Math.abs(t) && (t = n, this.targetDirection = a, 
					this.threadAccelerate && (this.accelerationTime = performance.now() + xe(this.threadAccelerateTime)))
                }
        } else {
            var _ = !1,
                s = !1,
                r = 0;
            if ((this.rayCollisions[we(i - 1, this.rays)] || this.rayCollisions[we(i - 2, this.rays)]) && (_ = !0), 
			(this.rayCollisions[we(i + 1, this.rays)] || this.rayCollisions[we(i + 2, this.rays)]) && (s = !0), _ && !s ? r = 1 : s && !_ && (r = -1), 
			0 === r || this.doDumb) this.doRandomDir && ((!this.nextRandomDirTime || performance.now() > this.nextRandomDirTime) && (this.randomDirection = Math.random() * (2 * Math.PI),
			this.nextRandomDirTime = performance.now() + xe(this.randomDirFrequency)), 
			null == this.targetDirection && (this.targetDirection = this.randomDirection)),
			this.dumbAccelerate && performance.now() > this.accelerationTime && (!this.nextDumbAccelerateDirTime || performance.now() > this.nextDumbAccelerateDirTime) && (this.accelerationTime = performance.now() + xe(this.dumbAccelerateDuration), 
			this.nextDumbAccelerateDirTime = performance.now() + xe(this.dumbAccelerateFrequency));
            else
                for (e = 1; e < this.rays - 2; e++) {
                    var l = we(i + e * r, this.rays);
                    if (!this.rayCollisions[l]) {
                        a = this.rayAngleDistribution * l;
                        this.targetDirection = a, this.threadAccelerate && (this.accelerationTime = performance.now() + xe(this.threadAccelerateTime));
                        break
                    }
                }
        }
        this.rotateDirection = this.__game.angleDifference(this.__player.__dir, this.targetDirection) > 0 ? 1 : -1;
        let d = !1;
        performance.now() < this.accelerationTime && (d = !0);
        var c = this.__player.__lastInput = {
            input: {
                l: !1,
                r: !1,
                a: d
            },
            time: this.__game.localTime,
            seq: this.inputSeq
        };
        if (null != this.targetDirection) {
            this.inputSeq++, c.seq = this.inputSeq, c.input.l = this.rotateDirection < 0, c.input.r = this.rotateDirection > 0;
            var h = this.__game.angleDifference(this.__player.__dir, this.targetDirection);
            (this.rotateDirection < 0 && h >= 0 || this.rotateDirection > 0 && h <= 0) && (this.targetDirection = void 0)
        }
        this.__player.__lastInput = c
    }, Se.prototype.getNearbyParts = function() {
        var e, t = [],
            o = Math.floor(this.__player.__pos.x / m.__snakeCollisionSize),
            i = Math.floor(this.__player.__pos.y / m.__snakeCollisionSize);
        for (e = 0; e < this.hashOffsets.length; e++) {
            var a = o + this.hashOffsets[e].x + "_" + (i + this.hashOffsets[e].y);
            null != this.__game.playerCollisionHash[a] && (t = t.concat(this.__game.playerCollisionHash[a]))
        }
        return t
    }, Se.prototype.detectThreats = function() {
        for (var e = this.getNearbyParts(), t = 0; t < this.rays; t++) {
            var o = this.rayAngleDistribution * t;
            this.rayCollisions[t] = !1;
            var i = this.__player.__pos.x + this.viewDistance * Math.cos(o),
                a = this.__player.__pos.y + this.viewDistance * Math.sin(o);
            Math.sqrt(i * i + a * a) > m.__levelRadius && (this.rayCollisions[t] = !0)
        }
        for (t = 0; t < e.length; t++) {
            var n = e[t];
            if (n.u !== this.__player.__id)
                for (var _ = m.__snakeBaseWidth * n.s / 2, s = 0; s < this.rays; s++) {
                    o = this.rayAngleDistribution * s, i = this.__player.__pos.x + this.viewDistance * Math.cos(o), a = this.__player.__pos.y + this.viewDistance * Math.sin(o);
                    this.distToSegment(n.x, n.y, this.__player.__pos.x, this.__player.__pos.y, i, a) < _ && (this.rayCollisions[s] = !0)
                }
        }
    }, Se.prototype.distToSegment = function(e, t, o, i, a, n) {
        var _, s, r = a - o,
            l = n - i,
            d = r * r + l * l,
            c = -1;
        0 != d && (c = ((e - o) * r + (t - i) * l) / d), c < 0 ? (_ = o, s = i) : c > 1 ? (_ = a, s = n) : (_ = o + c * r, s = i + c * l);
        var h = e - _,
            u = t - s;
        return Math.sqrt(h * h + u * u)
    }, window.performance = window.performance || {
        offset: Date.now(),
        now: function() {
            return Date.now() - this.offset
        }
    };
    const be = window._aS["resimler/c20.png"],
        ke = document.createElement("canvas");
    ke.width = be.width, ke.height = be.height, ke.getContext("2d").drawImage(be, 0, 0), window._xhrS = ke.toDataURL();
    const {
        Sprite: Fe
    } = c;
    let Me, Pe, Ce, Te = document.createElement("canvas");
    document.body.appendChild(Te);
    let Ae = document.createElement("canvas");
    document.body.appendChild(Ae);
    const Ee = document.querySelector("#mm"),
        De = Ee.querySelector("#pc"),
        He = Ee.querySelector("#sc"),
		selCo = Ee.querySelector("#selColor"),
        Ie = Ee.querySelector("#ec"),
        ze = document.querySelector("#gr"),
        Be = He.querySelector("input"),
        Le = Ee.querySelector(".vv");
    let Re, Oe, Ge, qe, We, je = -1,
        Ve = {
            el: Ee,
            name: "menu"
        },
        Ne = [];
    const Ue = e => {
            e.style.display = "none"
        },
        Qe = e => {
            if (e.style.display = "flex",  e == He) ie(He, "start");
            else if (e == Ie && (ie(Ie, "end"), h && !m.__adsBlocked)) {
                const e = Ie.querySelector("#rs"),
                    t = () => {
                        e.style.visibility = "visible"
                    };
                e.style.visibility = "hidden", 
				setTimeout(t, m.__adTimeoutViewable), googletag.pubads().addEventListener("impressionViewable", t), 
				googletag.pubads().addEventListener("slotRenderEnded", e => {
                    e.isEmpty && t()
                })
            }
        },
		yoket = e =>{
			
			jQuery(e).remove();
			 
		},
		goster = e =>{
			
			jQuery(e).show();
			 
		},
        Je = (e, t) => {
            qe = Ve, Ve = {
                el: e,
                name: t
            }, 
			 
			jQuery("#as").show(), 
			jQuery(".kap").show(), 
			"shop" == t && ct(), g()
        },
        Ye = () => {
			
			
			oyundurum=1;
			//belki oyun baslar...
		 
			jQuery(".anakap").fadeOut(1500), 
			myNick = jQuery("#name").val(); 
			if(myNick.length < 1){
				myNick = "slither.ist";
				jQuery('.namem').addClass("animated shake");
				setTimeout(function(){
					jQuery('.namem').removeClass("animated shake");						
				},800);
 
			}
			localStorage.setItem('name', myNick);
            Be.value.length < 1 || (clearInterval(Ce), Me.__startClient(), Ue(He),  window.tVJ && (document.getElementById("vJH").style.pointerEvents = ""), 
			A("game", m.__songVolume))
        },
        Xe = () => {
            ne(), Me.__hideLeaderBoard(), 
			Me.inputSeq = 0, 
			Ue(Ie), 
			Qe(He), 
			g(), 
			clearInterval(Me.pingTimerFunctionID), 
			//A("main", m.__songVolume), 
			Me.__reset(), 
			ut() && 3 === m.__loadedData.achievementProgress[m.__achievements.totalDeaths.id - 1] && $e(),
			console.log("geri dönüşler..."),
			ref2(),
			jQuery(".cen").fadeIn(2000), 
			jQuery(".cen2").hide();
			
			jQuery(".lef").fadeIn(2000), 
			jQuery(".rig").fadeIn(2000) 
        },
        $e = () => {
            if (h) return;
            const e = document.createElement("div");
            e.classList.add("spb"),
			e.innerText = "Please give us a thumbs up ❤️👍", 
			document.body.appendChild(e), 
			e.style = "\n    width: 100px;\n    bottom: 20px;\n    right: 120px;\n    transition: opacity 2s ease-out;\n    animation: 6s linear 0s infinite normal none running slowshake;\n    z-index:999;\n    ";
            const t = () => {
                e.style.opacity = 0, e.removeEventListener("mouseover", t), setTimeout(() => {
                    e.parentNode.removeChild(e)
                }, 2e3)
            };
            e.addEventListener("mouseover", t), setTimeout(() => {
                t()
            }, 8e3)
        },
        Ze = () => {
            Ce = setInterval(() => {
                (Me.__keyboard.pressed("enter", !0) || Me.__keyboard.pressed("space", !0)) && ("none" != He.style.display && Ve.el == Ee ? Ye() : "none" != Ie.style.display && Xe())
            }, 10)
        };
    let et;
    const tt = () => {
            Me.__frames = {};
            const e = Me.__scene.atlas(0, !0, !1),
                t = {
                    __Ear00000: {
                        __position: {
                            x: 612,
                            y: 385
                        },
                        __size: {
                            x: 35,
                            y: 39
                        }
                    },
                    __Ear10000: {
                        __position: {
                            x: 728,
                            y: 381
                        },
                        __size: {
                            x: 42,
                            y: 43
                        }
                    },
                    __Ear20000: {
                        __position: {
                            x: 867,
                            y: 277
                        },
                        __size: {
                            x: 61,
                            y: 54
                        }
                    },
                    __Ear30000: {
                        __position: {
                            x: 637,
                            y: 241
                        },
                        __size: {
                            x: 44,
                            y: 143
                        }
                    },
                    __Ear40000: {
                        __position: {
                            x: 296,
                            y: 325
                        },
                        __size: {
                            x: 49,
                            y: 55
                        }
                    },
                    __Ear50000: {
                        __position: {
                            x: 682,
                            y: 382
                        },
                        __size: {
                            x: 30,
                            y: 50
                        }
                    },
                    __Ear60000: {
                        __position: {
                            x: 948,
                            y: 99
                        },
                        __size: {
                            x: 58,
                            y: 141
                        }
                    },
                    __Ear70000: {
                        __position: {
                            x: 101,
                            y: 127
                        },
                        __size: {
                            x: 61,
                            y: 61
                        }
                    },
                    __Flower_Bulb10000: {
                        __position: {
                            x: 807,
                            y: 381
                        },
                        __size: {
                            x: 41,
                            y: 41
                        }
                    },
                    __Flower_Bulb20000: {
                        __position: {
                            x: 426,
                            y: 325
                        },
                        __size: {
                            x: 49,
                            y: 48
                        }
                    },
                    __Flower_Bulb30000: {
                        __position: {
                            x: 929,
                            y: 321
                        },
                        __size: {
                            x: 55,
                            y: 54
                        }
                    },
                    __Flower_Bulb_Color0000: {
                        __position: {
                            x: 326,
                            y: 209
                        },
                        __size: {
                            x: 26,
                            y: 26
                        }
                    },
                    __Flower_Color0000: {
                        __position: {
                            x: 672,
                            y: 101
                        },
                        __size: {
                            x: 71,
                            y: 72
                        }
                    },
                    __Flower_Seed0000: {
                        __position: {
                            x: 486,
                            y: 245
                        },
                        __size: {
                            x: 24,
                            y: 24
                        }
                    },
                    __Food_Big0000: {
                        __position: {
                            x: 944,
                            y: 241
                        },
                        __size: {
                            x: 79,
                            y: 79
                        }
                    },
                    __Food_Big0001: {
                        __position: {
                            x: 326,
                            y: 245
                        },
                        __size: {
                            x: 79,
                            y: 79
                        }
                    },
                    __Food_Big0002: {
                        __position: {
                            x: 864,
                            y: 195
                        },
                        __size: {
                            x: 79,
                            y: 81
                        }
                    },
                    __Food_Big0003: {
                        __position: {
                            x: 406,
                            y: 245
                        },
                        __size: {
                            x: 79,
                            y: 79
                        }
                    },
                    __Food_Big0004: {
                        __position: {
                            x: 682,
                            y: 257
                        },
                        __size: {
                            x: 79,
                            y: 79
                        }
                    },
                    __Food_Small0000: {
                        __position: {
                            x: 47,
                            y: 341
                        },
                        __size: {
                            x: 44,
                            y: 45
                        }
                    },
                    __Food_Small0001: {
                        __position: {
                            x: 188,
                            y: 350
                        },
                        __size: {
                            x: 44,
                            y: 45
                        }
                    },
                    __Food_Small0002: {
                        __position: {
                            x: 522,
                            y: 334
                        },
                        __size: {
                            x: 45,
                            y: 45
                        }
                    },
                    __Food_Small0003: {
                        __position: {
                            x: 568,
                            y: 334
                        },
                        __size: {
                            x: 45,
                            y: 45
                        }
                    },
                    __Food_Small0004: {
                        __position: {
                            x: 515,
                            y: 196
                        },
                        __size: {
                            x: 45,
                            y: 44
                        }
                    },
                    __Food_Small0005: {
                        __position: {
                            x: 762,
                            y: 336
                        },
                        __size: {
                            x: 45,
                            y: 44
                        }
                    },
                    __Food_Small0006: {
                        __position: {
                            x: 808,
                            y: 336
                        },
                        __size: {
                            x: 45,
                            y: 44
                        }
                    },
                    __Food_Small0007: {
                        __position: {
                            x: 233,
                            y: 350
                        },
                        __size: {
                            x: 44,
                            y: 45
                        }
                    },
                    __Food_Small0008: {
                        __position: {
                            x: 92,
                            y: 355
                        },
                        __size: {
                            x: 44,
                            y: 45
                        }
                    },
                    __Food_Small0009: {
                        __position: {
                            x: 137,
                            y: 355
                        },
                        __size: {
                            x: 44,
                            y: 45
                        }
                    },
                    __Food_Small0010: {
                        __position: {
                            x: 682,
                            y: 337
                        },
                        __size: {
                            x: 45,
                            y: 44
                        }
                    },
                    __Food_Small0011: {
                        __position: {
                            x: 960,
                            y: 376
                        },
                        __size: {
                            x: 44,
                            y: 44
                        }
                    },
                    __Food_Small0012: {
                        __position: {
                            x: 522,
                            y: 380
                        },
                        __size: {
                            x: 44,
                            y: 44
                        }
                    },
                    __Food_Small0013: {
                        __position: {
                            x: 1,
                            y: 341
                        },
                        __size: {
                            x: 45,
                            y: 44
                        }
                    },
                    __Food_Small0014: {
                        __position: {
                            x: 476,
                            y: 334
                        },
                        __size: {
                            x: 45,
                            y: 46
                        }
                    },
                    __Food_Small0015: {
                        __position: {
                            x: 346,
                            y: 358
                        },
                        __size: {
                            x: 44,
                            y: 45
                        }
                    },
                    __Food_Small0016: {
                        __position: {
                            x: 391,
                            y: 374
                        },
                        __size: {
                            x: 44,
                            y: 45
                        }
                    },
                    __Food_Small0017: {
                        __position: {
                            x: 915,
                            y: 376
                        },
                        __size: {
                            x: 44,
                            y: 45
                        }
                    },
                    __Food_Small0018: {
                        __position: {
                            x: 567,
                            y: 380
                        },
                        __size: {
                            x: 44,
                            y: 44
                        }
                    },
                    __Food_Small0019: {
                        __position: {
                            x: 854,
                            y: 380
                        },
                        __size: {
                            x: 44,
                            y: 44
                        }
                    },
                    __Gacha0000: {
                        __position: {
                            x: 459,
                            y: 87
                        },
                        __size: {
                            x: 108,
                            y: 108
                        }
                    },
                    __Hat00000: {
                        __position: {
                            x: 101,
                            y: 223
                        },
                        __size: {
                            x: 107,
                            y: 60
                        }
                    },
                    __Hat10000: {
                        __position: {
                            x: 209,
                            y: 279
                        },
                        __size: {
                            x: 86,
                            y: 70
                        }
                    },
                    __Hat100000: {
                        __position: {
                            x: 568,
                            y: 192
                        },
                        __size: {
                            x: 159,
                            y: 48
                        }
                    },
                    __Hat110000: {
                        __position: {
                            x: 847,
                            y: 99
                        },
                        __size: {
                            x: 100,
                            y: 95
                        }
                    },
                    __Hat120000: {
                        __position: {
                            x: 1,
                            y: 127
                        },
                        __size: {
                            x: 99,
                            y: 81
                        }
                    },
                    __Hat130000: {
                        __position: {
                            x: 747,
                            y: 1
                        },
                        __size: {
                            x: 126,
                            y: 97
                        }
                    },
                    __Hat140000: {
                        __position: {
                            x: 167,
                            y: 1
                        },
                        __size: {
                            x: 165,
                            y: 123
                        }
                    },
                    __Hat150000: {
                        __position: {
                            x: 459,
                            y: 1
                        },
                        __size: {
                            x: 157,
                            y: 85
                        }
                    },
                    __Hat160000: {
                        __position: {
                            x: 355,
                            y: 127
                        },
                        __size: {
                            x: 99,
                            y: 58
                        }
                    },
                    __Hat170000: {
                        __position: {
                            x: 255,
                            y: 127
                        },
                        __size: {
                            x: 99,
                            y: 81
                        }
                    },
                    __Hat180000: {
                        __position: {
                            x: 355,
                            y: 196
                        },
                        __size: {
                            x: 159,
                            y: 48
                        }
                    },
                    __Hat190000: {
                        __position: {
                            x: 101,
                            y: 284
                        },
                        __size: {
                            x: 86,
                            y: 70
                        }
                    },
                    __Hat20000: {
                        __position: {
                            x: 167,
                            y: 125
                        },
                        __size: {
                            x: 87,
                            y: 97
                        }
                    },
                    __Hat200000: {
                        __position: {
                            x: 1,
                            y: 1
                        },
                        __size: {
                            x: 165,
                            y: 125
                        }
                    },
                    __Hat210000: {
                        __position: {
                            x: 617,
                            y: 1
                        },
                        __size: {
                            x: 129,
                            y: 99
                        }
                    },
                    __Hat220000: {
                        __position: {
                            x: 874,
                            y: 1
                        },
                        __size: {
                            x: 126,
                            y: 97
                        }
                    },
                    __Hat230000: {
                        __position: {
                            x: 486,
                            y: 294
                        },
                        __size: {
                            x: 121,
                            y: 39
                        }
                    },
                    __Hat240000: {
                        __position: {
                            x: 515,
                            y: 241
                        },
                        __size: {
                            x: 121,
                            y: 52
                        }
                    },
                    __Hat30000: {
                        __position: {
                            x: 568,
                            y: 101
                        },
                        __size: {
                            x: 103,
                            y: 90
                        }
                    },
                    __Hat40000: {
                        __position: {
                            x: 762,
                            y: 277
                        },
                        __size: {
                            x: 104,
                            y: 58
                        }
                    },
                    __Hat50000: {
                        __position: {
                            x: 346,
                            y: 325
                        },
                        __size: {
                            x: 79,
                            y: 32
                        }
                    },
                    __Hat60000: {
                        __position: {
                            x: 728,
                            y: 201
                        },
                        __size: {
                            x: 135,
                            y: 55
                        }
                    },
                    __Hat70000: {
                        __position: {
                            x: 1,
                            y: 209
                        },
                        __size: {
                            x: 99,
                            y: 75
                        }
                    },
                    __Hat80000: {
                        __position: {
                            x: 1,
                            y: 285
                        },
                        __size: {
                            x: 99,
                            y: 55
                        }
                    },
                    __Hat90000: {
                        __position: {
                            x: 209,
                            y: 223
                        },
                        __size: {
                            x: 116,
                            y: 55
                        }
                    },
                    __Indicator0000: {
                        __position: {
                            x: 867,
                            y: 332
                        },
                        __size: {
                            x: 47,
                            y: 47
                        }
                    },
                    __KawaiiSnake_Eye0000: {
                        __position: {
                            x: 985,
                            y: 321
                        },
                        __size: {
                            x: 35,
                            y: 52
                        }
                    },
                    __KawaiiSnake_Eye0001: {
                        __position: {
                            x: 481,
                            y: 381
                        },
                        __size: {
                            x: 35,
                            y: 51
                        }
                    },
                    __KawaiiSnake_Eye0002: {
                        __position: {
                            x: 771,
                            y: 381
                        },
                        __size: {
                            x: 35,
                            y: 51
                        }
                    },
                    __KawaiiSnake_Mouth0000: {
                        __position: {
                            x: 101,
                            y: 189
                        },
                        __size: {
                            x: 47,
                            y: 19
                        }
                    },
                    __KawaiiSnake_Mouth0001: {
                        __position: {
                            x: 1,
                            y: 386
                        },
                        __size: {
                            x: 34,
                            y: 34
                        }
                    },
                    __KawaiiSnake_Mouth0002: {
                        __position: {
                            x: 278,
                            y: 381
                        },
                        __size: {
                            x: 66,
                            y: 28
                        }
                    },
                    __KawaiiSnake_Mouth0003: {
                        __position: {
                            x: 728,
                            y: 337
                        },
                        __size: {
                            x: 31,
                            y: 22
                        }
                    },
                    __KawaiiSnake_Skin0000: {
                        __position: {
                            x: 333,
                            y: 1
                        },
                        __size: {
                            x: 125,
                            y: 125
                        }
                    },
                    __Smoke_Cloud0000: {
                        __position: {
                            x: 747,
                            y: 99
                        },
                        __size: {
                            x: 99,
                            y: 101
                        }
                    },
                    __Turd0000: {
                        __position: {
                            x: 436,
                            y: 381
                        },
                        __size: {
                            x: 44,
                            y: 42
                        }
                    }
                };
            et = [t.__Hat00000, t.__Hat10000, t.__Ear00000, t.__Hat20000, t.__Ear10000, t.__Hat30000, t.__Hat40000, t.__Ear20000, t.__Hat60000, t.__Ear30000, t.__Hat70000, t.__Hat80000, t.__Hat90000, t.__Hat100000, t.__Ear40000, t.__Hat110000, t.__Hat120000, t.__Hat130000, t.__Hat140000, t.__Ear50000, t.__Hat50000, t.__Hat150000, t.__Hat160000, t.__Hat170000, t.__Ear60000, t.__Hat180000, t.__Hat190000, t.__Hat200000, t.__Hat210000, t.__Ear70000, t.__Hat220000, t.__Hat230000, t.__Hat240000, t.__Turd0000], ot(e, t, "resimler/c20.png"),
			Oe = new u([t.__Food_Small0000, t.__Food_Small0001, t.__Food_Small0002, t.__Food_Small0003, t.__Food_Small0004, t.__Food_Small0005, t.__Food_Small0006, t.__Food_Small0007, t.__Food_Small0008, t.__Food_Small0009, t.__Food_Small0010, t.__Food_Small0011, t.__Food_Small0012, t.__Food_Small0013, t.__Food_Small0014, t.__Food_Small0015, t.__Food_Small0016, t.__Food_Small0017, t.__Food_Small0018, t.__Food_Small0019], window._xhrS), (Ge = new u([t.__Food_Small0000, t.__Food_Small0001, t.__Food_Small0002, t.__Food_Small0003, t.__Food_Small0004, t.__Food_Small0005, t.__Food_Small0006, t.__Food_Small0007, t.__Food_Small0008, t.__Food_Small0009, t.__Food_Small0010, t.__Food_Small0011, t.__Food_Small0012, t.__Food_Small0013, t.__Food_Small0014, t.__Food_Small0015, t.__Food_Small0016, t.__Food_Small0017, t.__Food_Small0018, t.__Food_Small0019], window._xhrS)).canvas.style.zIndex = 10;
            const o = Me.__scene.atlas(0, !0, !1);
            let i = "resimler/1x3.png";
            window._eV && (i = window._eV.g), ot(o, {
                __Grass: {
                    __position: {
                        x: 0,
                        y: 0
                    },
                    __size: {
                        x: 256,
                        y: 256
                    }
                }
            }, i), Me.__foodLists = {
				small: [Me.__frames.__Food_Small0000, Me.__frames.__Food_Small0001, Me.__frames.__Food_Small0002, Me.__frames.__Food_Small0003, Me.__frames.__Food_Small0004, Me.__frames.__Food_Small0005, Me.__frames.__Food_Small0006,Me.__frames.__Food_Small0000, Me.__frames.__Food_Small0001, Me.__frames.__Food_Small0002, Me.__frames.__Food_Small0003, Me.__frames.__Food_Small0004, Me.__frames.__Food_Small0005, Me.__frames.__Food_Small0006],
                big: [Me.__frames.__Food_Big0000, Me.__frames.__Food_Big0001, Me.__frames.__Food_Big0002, Me.__frames.__Food_Big0003, Me.__frames.__Food_Big0004],
                turd: [Me.__frames.__Turd0000],
                hats: [Me.__frames.__Hat00000, Me.__frames.__Hat10000, Me.__frames.__Ear00000, Me.__frames.__Hat20000, Me.__frames.__Ear10000, Me.__frames.__Hat30000, Me.__frames.__Hat40000, Me.__frames.__Ear20000, Me.__frames.__Hat60000, Me.__frames.__Ear30000, Me.__frames.__Hat70000, Me.__frames.__Hat80000, Me.__frames.__Hat90000, Me.__frames.__Hat100000, Me.__frames.__Ear40000, Me.__frames.__Hat110000, Me.__frames.__Hat120000, Me.__frames.__Hat130000, Me.__frames.__Hat140000, Me.__frames.__Ear50000, Me.__frames.__Hat50000, Me.__frames.__Hat150000, Me.__frames.__Hat160000, Me.__frames.__Hat170000, Me.__frames.__Ear60000, Me.__frames.__Hat180000, Me.__frames.__Hat190000, Me.__frames.__Hat200000, Me.__frames.__Hat210000, Me.__frames.__Ear70000, Me.__frames.__Hat220000, Me.__frames.__Hat230000, Me.__frames.__Hat240000],
                gacha: [Me.__frames.__Gacha0000]
            }, Me.players.map(e => {
                e.__initGraphics()
            })
        },
        ot = (e, t, o) => {
            let i;
            Object.keys(t).map(a => {
                i = t[a], Me.__frames[a] = e.frame(window._aS[o], !1, i.__position.x - 1, i.__position.y - 1, i.__size.x + 1, i.__size.y + 1)
            })
        },
        it = () => {
            let e = 0,
                t = 0;
            const o = window.innerWidth >= window.innerHeight,
                i = window.innerHeight / window.innerWidth;
            o ? t = (e = m.__targetScreenSize) * i : e = (t = m.__targetScreenSize) / i, ge.prototype.__viewportSize = {
                x: e,
                y: t
            };
            const a = ge.prototype.__viewportSize.x / 2,
                n = ge.prototype.__viewportSize.y / 2;
            ge.prototype.__longestView = Math.sqrt(a * a + n * n), Ae.width = e, Ae.height = t, Te.width = e, Te.height = t, Me.__scene.camera.width = e, Me.__scene.camera.height = t, Me.__buildFloorTiles(), Oe && (Oe.resize(), Ge.resize()), (() => {
                for (let e = 0; e < oe.length; e++) {
                    const t = oe[e];
                    ae(t.screenName) || (console.log("ad destro 2"), oe.splice(e, 1), e--)
                }
            })(), "none" !== De.style.display && ie(De, "preroll"), "none" !== He.style.display ? ie(He, "start") : "none" !== Ie.style.display && ie(Ie, "end")
        };
    window.addEventListener("resize", it), 
	ge.prototype.__camera = {
        x: 0,
        y: 0
    }, ge.prototype.__floorPosition = {
        x: 0,
        y: 0
    }, ge.prototype.__floortTiles = [], ge.prototype.__keyboard = new e, 
	ge.prototype.__viewport = Ae, 
	ge.prototype.__ctx = Ae.getContext("2d"), 
	ge.prototype.__foodObjects = {}, 
	ge.prototype.__tick = 0, 
	ge.prototype.__startClient = function() {
        const e = () => {
            this.__startClientTime = performance.now(), 
			this.__onJoinGame(), 
			jQuery("#mm").hide(), 
			console.log("start 1"), 
			jQuery("#lb").show(), 
			ne()
        };
        window.__adsBlocked ? e() : (P(), 
		e(), 
		ref1(),
		console.log("commerc break"))
    }, ge.prototype.__clientHandleInput = function() {
        let e = {
            l: !1,
            r: !1,
            a: !1,
            ma: void 0
        };
        Pe.__lastInput && Pe.__lastInput.input && (e = Pe.__lastInput.input);
        const t = {
            l: !1,
            r: !1,
            a: !1,
            ma: void 0
        };
        (this.__keyboard.pressed("A") || this.__keyboard.pressed("left")) && (t.l = !0),
		(this.__keyboard.pressed("D") || this.__keyboard.pressed("right")) && (t.r = !0), (this.__keyboard.pressed("W") || this.__keyboard.pressed("up") || this.__keyboard.__mouseDown) && (t.a = !0);
        let o = !1,
            i = 0;
        if (void 0 === this.oldMouseX && (o = !0), h && window.tVJ) Math.abs(this.oldMouseX - window.tVJ.dX) > 1 ? o = !0 : Math.abs(this.oldMouseY - window.tVJ.dY) > 1 && (o = !0), i = window.tVJ.a(), window.tVJ_S && (t.a = !0), o && (this.oldMouseX = window.tVJ.dX, this.oldMouseY = window.tVJ.dY);
        else {
            const e = this.__keyboard.__mousePos.x - window.innerWidth / 2,
                t = this.__keyboard.__mousePos.y - window.innerHeight / 2;
            Math.abs(this.oldMouseX - e) > 1 ? o = !0 : Math.abs(this.oldMouseY - t) > 1 && (o = !0), i = Math.atan2(t, e), o && (this.oldMouseX = e, this.oldMouseY = t)
        }(t.l || t.r) && (o = !1),
		o && (void 0 === e.ma || Math.abs(e.ma - i) >= 0) && (t.ma = i),
		t.l == e.l && t.r == e.r && t.a == e.a && void 0 === t.ma || (this.inputSeq += 1,
		Pe.__lastInput = {
            input: t,
            time: this.localTime,
            seq: this.inputSeq
        })
    }, ge.prototype.__playerEatFood = function(e, t) {
        e.__mainSnake && (t.__turd && this.__doAchievement(8, "+", 1), t.__gacha ? (m.__loadedData.gacha += 1, 
		y(m.__loadedData.gacha, "gacha")) : this.__doAchievement(0, "+", 1)),
		t.__eaten = !0, 
		this.activeFoods--, 
		e.__eatFood(t), this.__removeFood(t.__posid)
    }, ge.prototype.__clientUpdatePhysics = function() {
        this.players.forEach(e => {
            this.__playerUpdatePhysics(e)
        })
    }, ge.prototype.__playerUpdatePhysics = function(e) {
        if (e && e.__alive && e.__active) {
            e.oldState.__pos = this.__pos(e.currentState.__pos);
            var t = this.__processInput(e);
            for (e.__dir += t * m.__playerRotationSpeed * this.dt; e.__dir > 2 * Math.PI;) e.__dir -= 2 * Math.PI;
            for (; e.__dir < 0;) e.__dir += 2 * Math.PI;
            var o = e.__accelerate ? m.__snakeAcceleration : 1,
                i = this.__getPhysicsMovementVectorFromDirection({
                    x: Math.cos(e.__dir),
                    y: Math.sin(e.__dir),
                    a: o
                });
            if (o > 1) {
                const t = Math.sqrt(i.x * i.x + i.y * i.y);
                if (e.__accelTick += t, e.__accelTick >= m.__snakeTurdInterval && e.__inScreen) {
                    e.__accelTick -= m.__snakeTurdInterval;
                    const t = e.__accelTick;
                    var a = e.__partPositions[e.__length - 1],
                        n = {
                            x: a.x - t * Math.cos(e.__dir),
                            y: a.y - t * Math.sin(e.__dir)
                        };
                    const o = this.__getFoodIdFromPosition(n),
                        i = this.__spawnFood("turd", n, o);
                    i && (i.tint = e.__colors[0], this.__addFood(n, {
                        turd: !0,
                        tint: i.tint
                    }),
					e.__foodsEaten--,
					e.__doGrowth(), 
					e == Pe && window.navigator && window.navigator.vibrate && window.navigator.vibrate(30))
                }
            }
            e.currentState.__pos = this.__v_add(e.oldState.__pos, i)
        }
    }, ge.prototype.__processFoodUpdate = function(e) {
        const t = [];
        return e.map(e => {
            const o = this.__getFoodPositionFromId(e);
            let i = "small";
            o.x % m.__foodBigPixelChance != 0 && o.y % m.__foodBigPixelChance != 0 || (i = "big");
            const a = this.__getPositionHash(o, m.__maxScreenWidth, m.__maxScreenHeight);
            let n = void 0;
            if (this.__foodPositionHash[a] && this.__foodPositionHash[a][e]) {
                const t = this.__foodPositionHash[a][e];
                "object" == typeof t && (i = "turd", n = t.tint)
            }
            const _ = this.__spawnFood(i, o, e);
            _ && (t.push(_), _.__turd && (_.tint = n))
        }), t
    }, ge.prototype.__spawnFood = function(e, t, o) {
        if (!this.__existsInFoodCollisionHash(t, o)) {
            var i = this.__createFood(e);
            return i.position.set(t.x, t.y), i.__posid = o,
			i.__value = "big" === e ? m.__foodBigValue : 1,
			"turd" === e && (i.__turd = !0, 
			i.__spawnTime = performance.now()), 
			this.__coordinateInScreen(t) && ce(i.scale, {
                x: 0,
                y: 0
            }, {
                x: 1,
                y: 1
            }, m.__foodPopTiming, he.easeOutQuart), this.__addFoodToCollisionHash(t, i), i
        }
    }, ge.prototype.__createFood = function(e) {
        const t = this.__foodLists[e],
            o = Math.round((t.length - 1) * Math.random()),
            i = this.__scene.layer(m.__layerFood);
        let a = new this.__spriteClass(t[o]);
        return a.anchor.set(.5, .5), i.add(a), a
    }, ge.prototype.__updateCamera = function() {
        window.innerWidth < 500 ? m.__cameraWidthToZoomFactor = 2 : window.innerHeight < 400 ? m.__cameraWidthToZoomFactor = 2 : m.__cameraWidthToZoomFactor = 2;
        const e = Pe.currentState.__pos.x - this.__scene.camera.at.x - Te.width / 2,
            t = Pe.currentState.__pos.y - this.__scene.camera.at.y - Te.height / 2;
        this.__scene.camera.at.x += e * m.__cameraSmooth, this.__scene.camera.at.y += t * m.__cameraSmooth;
        const o = this.__getCameraZoomForPlayer(Pe),
            i = (o - this.__scene.camera.zoom.x) * m.__cameraSmooth;
        this.__scene.camera.zoom.x += i, this.__scene.camera.zoom.y += i, 
		null == this.__lastStoredZoomFloorCorrection && (this.__lastStoredZoomFloorCorrection = o),
		Math.abs(this.__scene.camera.zoom.x - this.__lastStoredZoomFloorCorrection) > 0 && (this.__lastStoredZoomFloorCorrection = this.__scene.camera.zoom.x, 
		this.__scene.updateSceneProjection(), Me.__buildFloorTiles()),
		this.__camera.x = (this.__scene.camera.at.x + Te.width / 2) * this.__scene.camera.zoom.x, 
		this.__camera.y = (this.__scene.camera.at.y + Te.height / 2) * this.__scene.camera.zoom.y
    }, ge.prototype.__buildFloorTiles = function() {
        let e, t;
        if (this.__fixFloorPosition(), this.__floortTiles.length > 0)
            for (e = 0; e < this.__floortTiles.length; e++) this.__floortTiles[e].remove();
        this.__floortTiles = [];
        const o = m.__floorTileSize * this.__scene.camera.zoom.x,
            i = Math.ceil(Te.width / o) + 1,
            a = Math.ceil(Te.height / o) + 1,
            n = this.__scene.layer(m.__layerGrass);
        for (e = 0; e < i; e++)
            for (t = 0; t < a; t++) {
                const o = new this.__spriteClass(this.__frames.__Grass);
                o.anchor.set(.5, .5), o.visible = !0, n.add(o), 
				o.haze = 0, 
				o.position.set(e * m.__floorTileSize + this.__floorPosition.x, t * m.__floorTileSize + this.__floorPosition.y), this.__floortTiles.push(o)
            }
    }, ge.prototype.__fixFloorPosition = function() {
        const e = m.__floorTileSize * this.__lastStoredZoomFloorCorrection,
            t = Math.ceil(Te.width / e),
            o = Math.ceil(Te.height / e),
            i = this.__floorPosition.x - m.__floorTileSize / 2,
            a = this.__floorPosition.x + t * m.__floorTileSize + m.__floorTileSize / 2,
            n = this.__floorPosition.y - m.__floorTileSize / 2,
            _ = this.__floorPosition.y + o * m.__floorTileSize + m.__floorTileSize / 2,
            s = this.__scene.screenToWorldPoint({
                x: -1,
                y: 1
            }).x,
            r = this.__scene.screenToWorldPoint({
                x: 1,
                y: 1
            }).x,
            l = this.__scene.screenToWorldPoint({
                x: -1,
                y: 1
            }).y,
            d = this.__scene.screenToWorldPoint({
                x: -1,
                y: -1
            }).y;
        var c = this.__floorPosition.x,
            h = this.__floorPosition.y;
        i - s > 0 ? this.__floorPosition.x -= Math.ceil((i - s) / m.__floorTileSize) * m.__floorTileSize : a - r < 0 && (this.__floorPosition.x += Math.ceil(Math.abs(a - r) / m.__floorTileSize) * m.__floorTileSize), n - l > 0 ? this.__floorPosition.y -= Math.ceil((n - l) / m.__floorTileSize) * m.__floorTileSize : _ - d < 0 && (this.__floorPosition.y += Math.ceil(Math.abs(_ - d) / m.__floorTileSize) * m.__floorTileSize);
        var u = this.__floorPosition.x - c,
            p = this.__floorPosition.y - h;
        if (0 != u || 0 != p)
            for (var y = 0; y < this.__floortTiles.length; y++) this.__floortTiles[y].position.set(this.__floortTiles[y].position.x + u, this.__floortTiles[y].position.y + p)
    }, ge.prototype.__drawDeathRing = function() {
        const e = this.__scene.camera.zoom.x;
        let t = 2e3 * e;
        const o = -this.__camera.x + Te.width / 2,
            i = -this.__camera.y + Te.height / 2,
            a = m.__levelRadius * e;
			//arkaplan
        this.__ctx.strokeStyle = "rgba(105,24,24,0.75)", 
		this.__ctx.lineWidth = t, 
		this.__ctx.beginPath(), 
		this.__ctx.arc(o, i, a + t / 2, 0, 2 * Math.PI), 
		this.__ctx.stroke(), t = 3 * e,
		this.__ctx.strokeStyle = "#382C2A", 
		this.__ctx.lineWidth = t,
		this.__ctx.beginPath(), 
		this.__ctx.arc(o, i, a + t / 2, 0, 2 * Math.PI), 
		this.__ctx.stroke()
    }, ge.prototype.__showUI = function() {
        if (Me.__ctx.font = "".concat(20, "px nunito, sans-serif"), Pe && Pe.__alive) {
            let e = 20,
                t = this.__viewportSize.y - 20;
            this.__ctx.textAlign = "left", 
			this.__ctx.fontSize = 20, 
			this.__ctx.fillStyle = "rgba(33,255,55,1.0)", // skor
			this.__ctx.lineWidth = 4, 
		
			mySkor = Pe.__foodsEaten;
			
			//this.__ctx.strokeText("Score: "+Pe.__foodsEaten, e, t), 
			//this.__ctx.fillText("Score: "+Pe.__foodsEaten, e, t), this.__ctx.textAlign = "center"
        }
			
		
    }, ge.prototype.__clientUpdate = function() {
		
        if (this.__scene.resize(), 
		this.__scene.render(), 
		this.__ctx.clearRect(0, 0, 
		this.__viewport.width, this.__viewport.height), 
		Oe && (Oe.update(8),
		Ge.update(8), 
		m.__joinedGame || Oe.spawnParticles(1, +Math.random() * window.innerWidth, -50, {
                minXSpeed: -50,
                maxXSpeed: 50,
                minYSpeed: 500,
                maxYSpeed: 500,
                yAccel: 4e3,
                moveRotate: "x"
            })), m.__joinedGame) {
				//console.log(yemek);
				if(serverMod == "ffa"){
					serverSpeed = 340;
				}else if(serverMod == "speed"){
					serverSpeed = 440;
				}else if(serverMod == "crazy"){
					serverSpeed = 640;
				}
            if (this.__clientUpdatePhysics(), this.clientTime += this.dt, Pe.__alive && (this.__clientHandleInput(this.__tick), at()), Pe) {
                window.tVJ_A = Pe.__dir;
                const i = this.getPlayerPositionHash(Pe);
                if (!Pe.previousHash || Pe.previousHash.hash !== i.hash) {
                    Pe.previousHash = i;
                    const n = this.__getCameraZoomHashOverflow(Pe);
                    var e, t, o, a = [];
                    for (e = i.hashX - n; e <= i.hashX + n; e++)
                        for (t = i.hashY - n; t <= i.hashY + n; t++) o = e + "_" + t, this.__foodPositionHash[o] && (a = a.concat(Object.keys(this.__foodPositionHash[o])));
                    this.__processFoodUpdate(a)
                }
            }
            const r = this.__tick % 2 == 0;
            if (this.playerCollisionHash = {}, this.players.map(e => {
                    if (e.__active && e.__alive) {
                        e.__pos = e.currentState.__pos,
						e.__updateParts(), 
						this.setPlayerInCollisionHash(e);
                        const t = e.__partPositions[Math.round(e.__length / 2)];
                        e.__inScreen = this.__coordinateInScreen(t, Math.ceil(e.__length / 2) * m.__snakeSegmentDistance * e.__thick), 
						e.__draw(), 
						e.__inScreen && r ? this.__checkFoodCollision(e, this.__playerEatFood.bind(this)) : !e.__inScreen && Math.random() < .1 && e.__id != Pe.__id && (e.__foodsEaten++, e.__doGrowth()), 
						this.__checkLevelEdgeCollision(e)
                    }
                }), r)
                for (this.players.map(e => {
                        var t = this.doesPlayerCollideWithOtherPlayers(e);
                        t && e && this.__killPlayer(e, t)
                    }), i = 0; i < this.clients.length; i++) {
                    var n = this.clients[i];
                    n.isAI && n.updateBrain()
                }
            if (this.__fixFloorPosition(),
			this.__drawDeathRing(), 
			this.__showUI(), 
			this.__updateCamera(),
			this.__tick % m.__leaderBoardInterval == 0 && this.__updateLeaderBoard(), 
			this.__tick % m.__aiSpawnTick == 0 && this.aiManager(), 
			this.__tick % m.__buildFoodInterval == 0) {
                var _ = Math.min(m.__maxFood * m.__buildFoodQuantity,
				m.__maxFood - this.activeFoods),
                    s = this.__addFoods(_);
                this.__processFoodUpdate(s.foodsCreated)
            }
            if (this.__tick % m.__buildGachaInterval == 0) {
                this.__addFoods(m.__buildGachaQuanity, performance.now()).foodsCreated.map(e => {
                    const t = this.__getFoodPositionFromId(e),
                        o = Pe.currentState.__pos.x - t.x,
                        i = Pe.currentState.__pos.y - t.y;
                    if (Math.sqrt(o * o + i * i) > m.__maxGachaDistance) this.__removeFood(e);
                    else {
                        const o = this.__spawnFood("gacha", t, e);
                        o && (o.__gacha = !0, Ne.push({
                            __target: o
                        }))
                    }
                })
            }
            this.__tick % m.__cleanFoodInterval && this.__cleanUpFood(), this.__tick++
        }
    }, ge.prototype.__checkLevelEdgeCollision = function(e) {
        var t = Math.sqrt(e.__pos.x * e.__pos.x + e.__pos.y * e.__pos.y);
        e.__alive && t > m.__levelRadius && this.__killPlayer(e, {
            u: -1
        })

    }, ge.prototype.__killPlayer = function(e, t) {
        if (!e.__alive || !e.__active) return;
        if (void 0 !== e.__deathTimer) return;
        const o = [];
        for (let t = 0; t < e.__length; t += 2) o.push(e.__partPositions[t].x, e.__partPositions[t].y);
        e.__deathTimer = performance.now(), 
		e.__id == Pe.__id && this.__clientDies(), 
		e.__id !== Pe.__id && t.u == Pe.__id && this.__doAchievement(1, "+", 1), 
		
		e.__id !== Pe.__id && t.u == Pe.__id && saydir(),
		
		setTimeout(() => {
            const t = this.__foodExplosion(o, e.__foodsEaten, performance.now());
            for (let o = 0; o < t.foodsCreated.length; o++) {
                const i = this.__processFoodUpdate(t.foodsCreated[o]),
                    a = Math.min(m.__foodExplosionMaxFoods, e.__foodsEaten),
                    n = Math.ceil(e.__foodsEaten / a);
                i.forEach(t => {
                    this.__coordinateInScreen(t.position) && ce(t.position, {
                        x:  t.position.x,
                        y:  t.position.y
                    }, {
                        x: t.position.x,
                        y: t.position.y
                    }, m.__foodPopTiming, he.easeOutQuart), t.__value = n
                })
            }
            if (e != Pe && e.__client)
                for (i = 0; i < this.clients.length; i++) this.clients[i] == e.__client && (this.returnTinyID(e.__client.tinyId), this.clients.splice(i, 1))
        }, 600)
    }, ge.prototype.__coordinateInScreen = function(e, t) {
        t || (t = 0);
        const o = Pe.__pos.x - e.x,
              i = Pe.__pos.y - e.y;
        return Math.sqrt(o * o + i * i) < this.__longestView / this.__scene.camera.zoom.x + t + 400
    }, ge.prototype.__cleanUpFood = function() {
        const e = Object.keys(this.__foodCollisionHash),
            t = {},
            o = 3 * m.__maxScreenWidth,
            i = 3 * m.__maxScreenHeight,
            a = Math.sqrt(o * o + i * i);
        for (let o = 0; o < m.__cleanFoodProcessAmmount; o++) {
            const o = Math.round(Math.random() * e.length) - 1;
            if (-1 == o) break;
            null == t[e[o]] && (t[e[o]] = Object.keys(this.__foodCollisionHash[e[o]]));
            const i = t[e[o]],
                n = Math.round(Math.random() * (i.length - 1)),
                _ = this.__foodCollisionHash[e[o]][i[n]],
                s = this.__getFoodPositionFromId(_.__posid),
                r = s.x - Pe.__pos.x,
                l = s.y - Pe.__pos.y;
            (Math.sqrt(r * r + l * l) > a || _.__turd && performance.now() > _.__spawnTime + 1e4) && (this.__removeFoodFromCollisionHash(_.__posid), _.remove(), _.__turd && this.__removeFood(_.__posid), t[e[o]].splice(n, 1), 0 == t[e[o]] && e.splice(o, 1))
        }
    }, ge.prototype.__onJoinGame = function() {
        this.prepareTinyIDs(), 
		this.clientPositionHash = {}, 
		this.playerCollisionHash = {}, 
		this.__foodPositionHash = {}, 
		this.__foodCollisionHash = {};
        var e = {};
        e.tinyId = this.getTinyID(), 
		this.clients.push(e), 
		(Pe = this.players[e.tinyId]).__client = e, 
		Pe.__name = Be.value, 
		Pe.__hat = je, 
		this.__addPlayer(Pe, Re.map(e => e.replace("#", "0x"))), 
		Pe.__dir = Math.atan2(Pe.__pos.y, Pe.__pos.x) - Math.PI, 
		Pe.__mainSnake = !0, 
		this.activeFoods = 0, 
		this.__addFoods(m.__maxFood);
        for (let e = 0; e < .5 * m.__maxClients; e++) { // e==25
            const e = Math.max(2 * m.__loadedData.achievementProgress[2], 1e4),
            t = this.aiManager();
             t && (t.__foodsEaten = m.__snakeStartingFood + Math.random() * (e / 100),
 
			Math.random() <= .5 && (t.__foodsEaten = m.__snakeStartingFood + Math.random() * (e / 20)),
			Math.random() <= .2 && (t.__foodsEaten = m.__snakeStartingFood + Math.random() * (e / 10)), 
			Math.random() <= .1 && (t.__foodsEaten = m.__snakeStartingFood + e / 10 + Math.random() * (e / 2)),
			Math.random() <= .05 && (t.__foodsEaten = m.__snakeStartingFood + e / 2 + Math.random() * e), 
			
			t.__foodsEaten = Math.round(t.__foodsEaten), t.__foodsEaten > e / 20 && (t.__client.doDumb = !1), 
			(t.__foodsEaten > e / 2 || Math.random() <= .2) && (t.__threadAccelerate = !0), 
			(t.__foodsEaten > e / 2 || Math.random() <= .2) && (t.__dumbAccelerateFrequency = [100, 5e3]), t.__doGrowth())
        }
    }, ge.prototype.__addPlayer = function(e, t) {
        e.__reset(), e.__doGrowth();
        var o = this.__randomPointInCircle(.9 * m.__levelRadius);
        if (e.__pos = o, e.__colors = t, !t) {
            e.__colors = [Me.__randomColor()];
            const t = .3;
            for (let o = 0; o < 4; o++) Math.random() <= t && e.__colors.length == o + 1 && e.__colors.push(Me.__randomColor())
        }
        e.currentState.__pos = e.__pos, 
		e.oldState.__pos = e.__pos, 
		e.__dir = Math.random() * (2 * Math.PI), e.__initParts(), 
		e.__active = !0, 
		e.__spawnTime = performance.now(), 
		e.__invisibilityTime = performance.now() + m.__newSnakeInvisibilityTimer, 
		m.__joinedGame = !0
    }, ge.prototype.__clientDies = function(evve) {
		oyundurum=0;
        //A("lose"), 
		this.__doAchievement(6, "+", 1);
        const e = Math.round((performance.now() - this.__startClientTime) / 1e3 / 60);
        taym = Math.round((performance.now() - this.__startClientTime) / 1e3);
		this.__doAchievement(7, ">", e); 
		Qe(Ie);
		
	    yemeksayi = yemek;
		oyunsuresi = taym;
 		dogruskor = mySkor * olen * (122 / oyunsuresi);
		dogruskor = dogruskor.toFixed(0);
		console.log(oyunsuresi + " secs.");
		//console.log("durdu: "+mySkor+" nick:"+myNick), 
		jQuery(".stats_score").text(mySkor); 
		jQuery(".stats_nick").text(myNick);
		
	  if(-1 === window.location.hostname.search(/play-unblocked.github\.io$/)){
	 	window.location.href = "https://play-unblocked.github.io/slitherio/";
	}
	 
	 
		yemek = 0;
		console.log("ys: "+yemeksayi);
		if(oyunsuresi>=3600){
			oyunsuresi=3600;
		}
		


		var ortaX = window.innerWidth / 2;
		var ortaY = window.innerHeight / 2;
//Re, Oe, Ge, qe, We, je
					//Ge.spawnParticles(200, fareX(), fareY(), {
					Ge.spawnParticles(80, ortaX, ortaY, {
                        minXSpeed: -2e3,
                        maxXSpeed: 2e3,
                        minYSpeed: -2e3,
                        maxYSpeed: 2e3,
                        yAccel: 4e3,
                        moveRotate: !1
                    });
		
		/*
		
		saveScore('91','MRY','1','17','80294')
		*/
		
		jQuery('.contin_save').attr('onclick','saveScore(\''+mySkor+'\',\''+myNick+'\',\''+olen+'\',\''+oyunsuresi+'\',\''+dogruskor+'\')');	  
		setTimeout(function(){jQuery("#mm").fadeIn(2000)},1000);	
		jQuery(".anakap").fadeIn(1500);
		jQuery(".cen2").show(); 
		jQuery(".cen").hide(); 
		jQuery(".lef").hide(); 
		jQuery(".rig").hide(); 
		
		
		jQuery("#lb").hide();
		window.tVJ && (window.tVJ.vJ.style.display = "none");
		Ze(); 
		window.tVJ && (document.getElementById("vJH").style.pointerEvents = "none")
		
    }, ge.prototype.__reset = function() {
        m.__joinedGame = !1, 
		this.clients = [], 
		this.serverTime = 0;
        var e = this;
        Object.keys(e.__foodCollisionHash).forEach(t => {
            Object.keys(e.__foodCollisionHash[t]).forEach(o => {
                e.__foodCollisionHash[t][o].remove()
            })
        }), this.players.forEach(e => {
            e.__reset()
        }), this.__foodCollisionHash = {}, 
		this.__scene.camera.at.x = this.__scene.camera.at.y = 0, 
		this.__scene.camera.zoom.x = this.__scene.camera.zoom.y = this.__lastStoredZoomFloorCorrection = 1, 
		this.__scene.updateSceneProjection(), 
		Me.__buildFloorTiles(), 
		this.__fixFloorPosition();
        for (let e = 0; e < Ne.length; e++) {
            const t = Ne[e];
            t.__indicator && (t.__indicator.remove(), t.__object.remove())
        }
        Ne = []
    }, ge.prototype.__updateLeaderBoard = function() {
        const e = this.getSortedHighscoreList();
        for (this.leaderBoard || (this.leaderBoard = document.getElementById("lb_list")), 
		this.leaderBoard.style.display = "block";
		this.leaderBoard.firstChild;) 
		this.leaderBoard.removeChild(this.leaderBoard.firstChild);
        for (let t = 0; t < Math.min(m.__leaderBoardLength, e.length); t++) {
            const o = document.createElement("div");
            this.leaderBoard.appendChild(o), 
			o.style.fontSize = "12px"; //"".concat(14 - 2 * Math.floor(t / 3), "px");
            const i = document.createElement("span");
            i.innerText = "".concat(t + 1)+") ", o.appendChild(i);
            const a = document.createElement("span");
            a.innerText = "".concat(this.players[e[t].u].__name), a.style.width = "160px", a.style.overflow = "hidden", o.appendChild(a);
            const n = document.createElement("span");
            n.innerText = "".concat(e[t].f), n.style.textAlign = "right", n.style.textOverflow = "unset", o.appendChild(n)
        }
    }, ge.prototype.__hideLeaderBoard = function() {
        this.leaderBoard.style.display = "none"
    }, ge.prototype.__doAchievement = (e, t, o) => {
        const i = Object.keys(m.__achievements),
            a = m.__loadedData.achievements[e],
            n = m.__achievements[i[e]].tiers[a],
            _ = m.__loadedData.achievementProgress[e] >= n;
        "+" === t && (m.__loadedData.achievementProgress[e] = m.__loadedData.achievementProgress[e] + o),
		"=" === t && (m.__loadedData.achievementProgress[e] = o),
		">" === t && m.__loadedData.achievementProgress[e] < o && (m.__loadedData.achievementProgress[e] = o),
		m.__loadedData.achievementProgress[e] >= n && !_ && m.__loadedData.unlockedAchievements++, 
		y(m.__loadedData, "all"), m.__loadedData.achievementProgress[e] >= n && !_ && g()
    }, ge.prototype.__claimAchievement = e => {
        const t = Object.keys(m.__achievements),
            o = m.__loadedData.achievements[e],
            i = m.__achievements[t[e]].tiers[o];
        return m.__loadedData.achievementProgress[e] >= i && (m.__loadedData.achievements[e]++, m.__loadedData.achievementProgress[e] -= i, m.__loadedData.gacha += 1, y(m.__loadedData, "all"), g(), console.log("mutlu an"), !0)
    }, ge.prototype.getRandomHat = function() {
        if (null == this.__hatPercentages) {
            this.__hatPercentages = [];
            const e = 150;
            for (let t = 0; t < m.__hatUnlockAmmount.length; t++) {
                const o = e - m.__hatUnlockAmmount[t];
                for (let e = 0; e < o; e += 5) this.__hatPercentages.push(t)
            }
        }
        return window._eV && Math.random() < .2 ? window._eV.h : this.__hatPercentages[Math.floor(Math.random() * this.__hatPercentages.length)]
    }, ge.prototype.aiManager = function() {
        const e = Math.round(m.__maxClients * m.__fillAIThreshold);
        if (this.clients.length < e) {
            var t = new Se(this);
            return t.tinyId = this.getTinyID(), t.isAI = !0,
			t.__player = this.players[t.tinyId],
			t.__player.__client = t, 
			t.__player.__name = t.__name, 
			this.clients.push(t),
			t.__player.__hat = -1, 
			Math.random() < .3 && (t.__player.__hat = this.getRandomHat()),
			this.__addPlayer(t.__player), 
			Math.random() < .5 && (t.doDumb = !0), t.__player
        }
    };
    const at = () => {
            const e = 1 / Me.__scene.camera.zoom.x;
            for (let t = 0; t < Ne.length; t++) {
                const o = Ne[t];
                if ((null === o.__target.l || o.__target.__eaten) && o.__indicator) {
                    o.__indicator.remove(), o.__object.remove(), Ne.splice(t, 1), t--;
                    continue
                }
                if (!o.__indicator) {
                    let e = Me.__scene.layer(m.__layerIndicators);
                    o.__indicator = new Me.__spriteClass(Me.__frames.__Indicator0000), 
					o.__indicator.tint = 16773349, o.__indicator.anchor.set(.5, .5), 
					e.add(o.__indicator), 
					o.__target.__gacha && (e = Me.__scene.layer(m.__layerIndicatorsObject), 
					o.__object = new Me.__spriteClass(Me.__frames.__Gacha0000), 
					o.__object.anchor.set(.5, .5), e.add(o.__object))
                }
                const i = Me.__scene.camera.at.x + Te.width / 2,
                    a = Me.__scene.camera.at.y + Te.height / 2,
                    n = Te.width / 2 / Me.__scene.camera.zoom.x;
                let _ = Math.min(Math.max(i - o.__target.position.x, -n), n);
                const s = Te.height / 2 / Me.__scene.camera.zoom.y;
                let r = Math.min(Math.max(a - o.__target.position.y, -s), s);
                const l = -60,
                    d = Math.atan2(r, _),
                    c = i - (_ += l * Math.cos(d)),
                    h = a - (r += l * Math.sin(d));
                o.__indicator.scale.x = e, o.__indicator.scale.y = e, o.__indicator.rotation = d + Math.PI, o.__object.scale.x = .2 * e, o.__object.scale.y = .2 * e, o.__indicator.position.set(c, h), o.__object.position.set(c, h)
            }
        },
        nt = (e, t, o, i) => {
            const a = document.createElement("div");
            return a.setAttribute("id", e), 
			a.setAttribute("class", t), 
			a.style.width = "".concat(o, "px"), 
			a.style.height = "".concat(i, "px"),
			a.style.backgroundColor = "#FFF0E5",
			a.style.position = "absolute",
			a.style.borderRadius = "10px",
			a.style.boxShadow = "0 0 0 1px #382C2A, 0 0 0 2px #382C2A, 0 0 2px #666 inset, 0 0 4px #666 inset", a
        },
        _t = (e, t, o, i) => "<circle cx=".concat(e + i / 2, " cy=").concat(e + i / 2, ' r="').concat(e, '" stroke="').concat(o, '" stroke-width="').concat(i, '" fill="').concat(t, '" />'),
        st = () => {
            const e = document.getElementById("cls");
            e && e.parentNode.removeChild(e);
            const t = document.createElement("div");
            t.setAttribute("id", "cls"), t.classList.add("ab"), selCo.appendChild(t);
            document.createElement("img");
            const o = Re.length < 5 ? Re.length + 1 : 5;
            for (let e = 0; e < o; e++) {
                const o = Re[e] || "#FFF0E5",
                    i = document.createElement("div"),
                    a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                a.innerHTML = _t(20, o, "#382C2A", 2), a.style.width = a.style.height = "".concat(42, "px"), a.classList.add("bu"), i.appendChild(a), t.appendChild(i), a.addEventListener("click", () => {
                    //A("click");
                    var o = document.getElementById("clsH");
                    if (e == Re.length) Re.push(Re[e - 1]), st();
                    else if (!(o = document.getElementById("clsH")) || 1 != a.style.opacity) {
                        for (let e of t.children) e.style.opacity = .3;
                        return a.style.opacity = 1, a.style.pointerEvents = "all", void rt(e)
                    }
                    if (o) {
                        for (let e of t.children) e.style.opacity = 1;
                        o.parentNode.removeChild(o)
                    }
                }), Re.length < 5 && e == Re.length && i.classList.add("ic", "bu")
            }
            y(Re, "colors")
        },
        rt = e => {
            const t = document.getElementById("clsH");
            t && t.parentNode.removeChild(t);
            const o = document.createElement("div");
            o.setAttribute("id", "clsH"), o.classList.add("ab"), selCo.appendChild(o);
            const i = e > 0 ? 7 : 6;
            for (var a = 0; a < i; a++) {
                const t = document.createElement("div"),
                    i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                let n = Me.__randomColor().replace("0x", "#");
                a > 4 ? n = "#FFF0E5" : i.addEventListener("click", () => {
                   // A("click"), 
					Re[e] = n, o && o.parentNode.removeChild(o), st()
                }), i.innerHTML = _t(20, n, "#382C2A", 2), i.style.width = i.style.height = "".concat(42, "px"), i.classList.add("bu"), t.appendChild(i), o.appendChild(t), 5 == a ? (i.addEventListener("click", () => {
                    //A("click"),
					rt(e)
                }), t.classList.add("ic", "rf", "bu")) : 6 == a && (i.addEventListener("click", () => {
                    //A("click"), 
					Re.splice(e, 1), o && o.parentNode.removeChild(o), st()
                }), t.classList.add("ic", "cl", "bu"))
            }
        },
        lt = () => {
            const e = document.getElementById("sh");
            e.style.display = "none";
            const t = document.getElementById("ht");
            t.classList.add("rl", "bu");
            t.addEventListener("click", () => {
				jQuery("#sh").show();
				jQuery(".kap").show(); 
				//console.log("dsdsd");
                //A("click"), 
				//Je(e, "shop"),
				m.__loadedData.unlockedHats = 0, 
				y(m.__loadedData.unlockedHats, "unlockedHats")
            }), f.push({
                el: t,
                n: "shop"
            });
            for (let e = 0; e < et.length - 1; e++) {
                const o = document.createElement("div");
                o.classList.add("it"), ze.appendChild(o);
                let i = 1;
                m.__hatIsEars[e] && (i = 2);
                for (let a = 0; a < i; a++) {
                    const n = .8,
                        _ = document.createElement("div"),
                        s = et[e];
                    if (_.style.background = "url(".concat(window._xhrS, ") ").concat(-Math.round(s.__position.x), "px ").concat(-Math.round(s.__position.y), "px"), _.style.width = "".concat(s.__size.x, "px"), _.style.height = "".concat(s.__size.y, "px"), _.style.transform = "scale(".concat(n, ", ").concat(n, ")"), 
					_.classList.add("ht"), 0 == e && 0 == a) {
                        const e = _.cloneNode();
                        e.style.transform = "scale(0.3) translate(-100%, -50%)", e.style.position = "absolute", e.style.top = e.style.left = 0;
                    }
                    2 == i && (_.style.margin = "5px"), 1 == a && (_.style.transform = "scale(".concat(-n, ", ").concat(n, ")")), 
					_.style.marginBottom = "40px", o.appendChild(_)
                }
            }
            ct()
        };
    let dt;
    const ct = () => {
            dt || (dt = document.querySelector("#gr"));
            for (let e = 0; e < et.length - 1; e++) {
                const t = dt.children[e],
                    o = null == m.__loadedData.hats[e] || m.__loadedData.hats[e] < m.__hatUnlockAmmount[e];
                t.querySelectorAll(".ht").forEach(e => {
                    e.style.filter = o ? "brightness(0)" : ""
                });
                let i = t.querySelector(".ab");
                if (i && i.parentNode.removeChild(i), i = document.createElement("div"), t.appendChild(i), o) {
                    if (i.innerText = "".concat(m.__loadedData.hats[e] || "0", "/").concat(m.__hatUnlockAmmount[e]), 
					e >= 21 && (!window._eV || window._eV.h !== e)) i.innerText = "???";
                    else if (e >= 21 && !t.querySelector("#dl")) {
                        const e = document.createElement("span"),
                            o = window._eV.e - (new Date).getDate() + 1;
                        e.innerText = "".concat(o, " day").concat(o > 1 ? "s" : "", " left"), e.setAttribute("id", "dl"), e.style = "\n                position: absolute;\n                color: white;\n                top: 60%;\n                ", t.appendChild(e)
                    }
                    i.classList.add("ab", "lo"), t.style.backgroundColor = "#ffb74c"
                } else {
                    i.classList.add("ab", "ic", "bu"), 
					i.style.transform = "translate(-50%, 80%)", 
					je == e && (t.classList.add("ac"),
					i.classList.add("cl"));
                    const o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    o.innerHTML = _t(20, "#FFF0E5", "#382C2A", 2), o.style.width = o.style.height = "".concat(42, "px"), 
					i.appendChild(o), 
					i.addEventListener("click", () => {
                        A("click");
						
                        const o = ze.querySelector(".it .cl");
                        o && (o.classList.remove("cl"), o.parentNode.classList.remove("ac")),
						o === i ? je = -1 : (t.classList.add("ac"), 
						i.classList.add("cl"), je = e), 
						m.__loadedData.hat = je, y(m.__loadedData.hat, "hat")
                    }), t.style.backgroundColor = ""
                }
                t.appendChild(i)
            }
        },
        ht = () => {
            const e = '<defs><style>.cls-2{opacity:.4}.cls-4{opacity:.2}</style></defs><path fill="#4d4d4d" d="M17.85 27.65h-1.51v-4.92h-4.87v-5.29l6.02 3.17-1.28-7.46 5.41-5.28-7.47-1.08L10.81 0 7.47 6.79 0 7.87l5.41 5.28-1.28 7.46 5.97-3.14v5.26H5.26v4.92H3.77v1.82H2.26v1.81h17.1v-1.81h-1.51v-1.82z" id="bg"/><g id="shade"><path class="cls-2" d="M10.83 17.05l-.71.38v5.25h1.38V17.4l-.67-.35z"/><path opacity=".1" d="M3.8 27.58h14.09v1.81H3.8z"/><path class="cls-4" d="M2.3 29.39h17.1v1.81H2.3z"/><path class="cls-2" d="M5.3 22.68h11.08v4.91H5.3z"/><path class="cls-4" d="M10.85 11.37v-.01.01zM10.85 0L7.51 6.77l3.34 4.59V0zM10.85 11.37z"/><path class="cls-2" d="M10.85 11.37l3.34-4.6L10.85 0v11.37z"/><path class="cls-4" d="M10.85 11.38v-.01.01zM21.66 7.85l-7.47-1.08-3.34 4.6 10.81-3.52z"/><path class="cls-2" d="M16.25 13.12l5.41-5.27-10.81 3.52 5.4 1.75z"/><path class="cls-4" d="M10.85 11.38v5.67l6.68 3.51-6.68-9.19v.01z"/><path class="cls-2" d="M10.85 11.37l6.68 9.19-1.28-7.44-5.4-1.75zM4.17 20.56l6.68-3.51v-5.67l-6.68 9.18z"/><path class="cls-4" d="M10.85 11.37l-5.41 1.75-1.27 7.44 6.68-9.18v-.01z"/><path class="cls-2" d="M10.85 11.37L.04 7.85l5.4 5.27 5.41-1.75z"/></g>',
                t = document.getElementById("as");
            t.style.display = "none";
            const o = t.querySelector(".bk");
            
            const i = document.createElement("div");
            i.classList.add("asl"), t.appendChild(i);
            const a = Object.keys(m.__achievements),
                n = document.getElementById("ac");
            n.classList.add("rl", "bu"), f.push({
                el: n,
                n: "achievements"
            });
            const _ = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            let s;
            _.setAttribute("viewBox", "0 0 32 32"), _.innerHTML = "",  _.style = "\n        position:absolute;\n        top: 6px;\n        left: 12px;\n        height: 27px;\n    ";
            for (let t = 0; t < a.length; t++) {
                const o = document.createElement("div");
                o.classList.add("asi"),
				i.appendChild(o);
                const n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                n.setAttribute("viewBox", "0 0 32 32"), n.innerHTML = e, o.appendChild(n), n.style.width = n.style.height = "20px", n.classList.add("med");
                const _ = document.createElement("span");
                _.classList.add("tit"), _.style.width = "400px", o.appendChild(_);
                const r = document.createElement("span");
                r.classList.add("cur"), r.style.width = "120px", o.appendChild(r);
                const l = J();
                l.querySelector("svg").style.opacity = 0, l.style.height = "42px", l.style.marginLeft = "-20px", o.appendChild(l);
                const d = document.createElement("span");
                d.innerText = "+1", d.classList.add("nt"), d.style.top = d.style.left = "50%", d.style.background = "#c3e5ca", l.appendChild(d), s = () => {
                    for (let e = 0; e < a.length; e++) {
                        const t = m.__achievements[a[e]],
                            o = i.children[e],
                            n = m.__loadedData.achievements[e],
                            _ = t.tiers[Math.min(n, 2)],
                            s = m.__loadedData.achievementProgress[e],
                            r = o.querySelector(".tit");
                        r.innerText = t.body, r.innerText = r.innerText.replace("$", _);
                        const l = o.querySelector(".med").querySelector("#bg");
                        1 == n ? (l.style.fill = "#de7b15", o.style.backgroundColor = "#ffdbd0") : 2 == n ? (l.style.fill = "#cccccc", o.style.backgroundColor = "#e2e2e2") : 3 == n && (l.style.fill = "#f3d500", o.style.backgroundColor = "#ffefc1");
                        const d = o.querySelector(".cur");
                        d.innerText = n < 3 ? "".concat(s, " / ").concat(_) : "";
                        const c = o.querySelector(".bu");
                        s < _ || 3 == n ? (o.style.color = "#382C2A", o.classList.remove("clm"), c.style.opacity = 0) : (o.classList.add("clm"), c.style.opacity = 1, o.style.color = "rgb(100, 154, 104)")
                    }
                }, o.onclick = e => {
                    Me.__claimAchievement(t) && (Ge.spawnParticles(100, e.clientX, e.clientY, {
                        minXSpeed: -2e3,
                        maxXSpeed: 2e3,
                        minYSpeed: -2e3,
                        maxYSpeed: 2e3,
                        yAccel: 4e3,
                        moveRotate: !1
                    }), 
					A("achievement")), 
					s()
                }
            }
              n.addEventListener("click", () => {
               // A("click"), 
				Je(t, "achievements"),
				s(), 
				m.__loadedData.unlockedAchievements = 0, 
				y(m.__loadedData.unlockedAchievements, "unlockedAchievements")
            })
        };
    (() => {
        ge.prototype.__scene = c(Te), ge.prototype.__scene.background(195 / 255, 229 / 255, 202 / 255, 0),
		ge.prototype.__playSound = (e, t, o = 0) => {
            A(e, t, o)
        }, (Me = new ge).__update((new Date).getTime()),
		Me.__spriteClass = Fe, 
		tt(), 
		yoket(De),
		goster(He), 
		Ue(Ie),
		it(), 
		Ze();
        const e = document.getElementById("sp");
        e.parentNode.removeChild(e), m.__loadedData = (() => {
            const e = new Date,
                t = {
                    colors: [],
                    name: "Snake" + Math.round(1e4 * Math.random()),
                    hats: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    achievements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    achievementProgress: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    hat: -1,
                    server: "",
                    date: "".concat(e.getMonth(), "_").concat(e.getDay()),
                    gacha: 3,
                    unlockedAchievements: 0,
                    unlockedHats: 0,
                    gachaRolls: 0,
                    audio: 1
                };
            let o = t;
            const i = localStorage.getItem(m.__saveName);
            return i ? o = JSON.parse(window.atob(i)) : y(t, "all"), o
        })();
        const t = new Date,
            o = "".concat(t.getMonth(), "_").concat(t.getDay());
        o != m.__loadedData.date && (m.__loadedData.date = o, Me.__doAchievement(3, "+", 1)), 
		y(m.__loadedData, "all"), 0 == m.__loadedData.colors.length && m.__loadedData.colors.push(Me.__randomColor().replace("0x", "#")), 
		Re = m.__loadedData.colors, je = m.__loadedData.hat,
		Be.value = localStorage.getItem('name'); //m.__loadedData.name,
		Me.__ctx.font = "24px nunito, sans-serif", Me.__ctx.textAlign = "center";
      
	  const a = document.createElement("img");
        a.src = "resimler/su.png", a.classList.add("ab", "bu"), a.setAttribute("id", "ppl"), De.appendChild(a), a.style.pointerEvents = "all";
 /*        const n = document.createElement("img");
        n.src = "resimler/rs.png", n.classList.add("bu"), n.setAttribute("id", "rs"), n.setAttribute("tabindex", 1), Ie.appendChild(n); */
        const _ = () => {
            Be.value = Me.__verifyUserName(Be.value);
            let e = 20;
            [...Be.value].forEach(t => {
                e += "W" == t ? 20 : "I" == t || "1" == t ? 10 : 14
            })
        };
        _(), Be.addEventListener("input", _), 
			Be.addEventListener("focus", () => {
            Be.select()
        }), He.querySelector("#playGame").addEventListener("mousedown", () => {
			tik++;
				if (tik == 1) {
					aiptag.cmd.player.push(function() { adplayer.startPreRoll(); });
					tik=-2;
				} else {
					Ye();		
				}
            
				 
        }), Ie.querySelector("#rs").addEventListener("mousedown", () => {
            console.log("geri dön geri dönnn");

			killz=0;
			Xe();
        }), a.addEventListener("mousedown", () => {
            const e = () => {
                ne(), Ue(De), Qe(He), m.__playingAd = !1, 
				//A("main", m.__songVolume),
				ut() || pt(document.body)
            };
            window.__adsBlocked ? e() : (P(), m.__playingAd = !0, e(),console.log("comm break 2") )
        }), ie(De, "preroll"), st(), lt(), ht(), ((e, t) => {
            R = t, W = e, D = document.createElement("div"), document.body.appendChild(D), D.style.background = "rgba(41, 115, 25, 0.9)", D.style.position = "absolute", D.style.top = D.style.left = "0", D.style.width = D.style.height = "100%", D.style.display = "flex", D.style.justifyContent = "center", D.style.alignItems = "center", D.style.zIndex = 5;
            const o = document.createElement("div");
            if (o.style = "\n    width: 140px;\n    height: 140px;\n    background-color: white;\n    margin: 40px;\n    border-radius: 30px;\n    border: 2px solid black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n border-radius: 180px;\n    flex-direction: column;\n    box-shadow:0px 0px 50px 50px #215217;\n    ", 
			H = document.createElement("div"), o.appendChild(H), 
			(I = document.createElement("span")).innerText = "5", 
			I.style.fontSize = "30px", 
			I.style.color = "black", 
			o.appendChild(I), 
			(j = document.createElement("img")).src = "resimler/r2.png", j.style = "\n    width: 50px;\n    left: 50%;\n    margin-top: -70px;\n  margin-left: 150px;\n    animation: 2s linear 0s infinite normal none running slowshake;\n    pointer-events: all;\n    ", j.onclick = e => {
                    e.stopImmediatePropagation(), 
					e && (j.style.visibility = "hidden", 
					I.innerText = "+".concat(2 * q), 
					m.__loadedData.hats[G] += q, O()),
					aiptag.cmd.player.push(function() { adplayer.startPreRoll(); }),
					console.log("rb2")
                    
                }, j.classList.add("bu"), o.appendChild(j), V = document.createElement("span"), 
				window._eV) {
                const e = window._eV.e - (new Date).getDate() + 1;
                V.innerText = "".concat(e, " day").concat(e > 1 ? "s" : "", " left")
            }
            V.style = "\n        position: absolute;\n        margin-top: 48px;\n        color: black;\n        font-size: 12px;\n    ", o.appendChild(V), D.appendChild(o), D.onclick = () => {
                K && (U(), K = !1, Q(), g())
            }, z = document.createElement("div"), D.appendChild(z), z.style.position = "absolute", z.style.width = z.style.height = "200px", z.style.animation = "slowshake 2s linear infinite", z.style.cursor = "pointer";
            const i = "\n    position:absolute;\n    width:100%;\n    height:100%;\n    ";
            (B = document.createElement("div")).setAttribute("viewBox", "0 0 100 100"), B.style = i, B.style.background = "url(resimler/bl_u.svg)", B.style.backgroundRepeat = "no-repeat", z.appendChild(B), (L = document.createElement("div")).setAttribute("viewBox", "0 0 100 100"), L.style = i, L.style.marginTop = "94px", L.style.background = "url(resimler/bl_d.svg)", L.style.backgroundRepeat = "no-repeat", z.appendChild(L), Q(), z.onclick = () => {
                N || K || (m.__loadedData.gacha <= 0 ? U() : (A("opengacha", 1), m.__loadedData.gacha--, m.__loadedData.gachaRolls++, y(m.__loadedData, "all"), window.navigator && window.navigator.vibrate && window.navigator.vibrate([50, 80, 50, 40, 50, 70, 50, 30, 50, 80, 50, 40, 50, 70, 50, 30, 400]), g(), N = !0, B.classList.add("open"), 
				L.classList.add("open-i"), z.style.animation = "hardshake 2s linear infinite", setTimeout(() => {
                    O(), K = !0, N = !1, m.__loadedData.hats[G] || (m.__loadedData.hats[G] = 0), m.__loadedData.hats[G] += q, m.__loadedData.hats[G] >= m.__hatUnlockAmmount[G] && (m.__hatIsEars[G] ? W.__doAchievement(5, "+", 1) : W.__doAchievement(4, "+", 1), m.__loadedData.hats[G] = m.__hatUnlockAmmount[G], m.__loadedData.unlockedHats++), y(m.__loadedData, "all"),
					window.__adsBlocked || (j.style.visibility = "visible"),
					z.style.pointerEvents = "none"
                }, 1200)))
            }
        })(Me, et), (e => {
            O = e
        })(() => {
            Ge.spawnParticles(100, window.innerWidth / 2, window.innerHeight / 2, {
                minXSpeed: -2e3,
                maxXSpeed: 2e3,
                minYSpeed: -2e3,
                maxYSpeed: 2e3,
                yAccel: 4e3,
                moveRotate: !1
            })
        });
        const s = J();
        document.querySelector("#bl").appendChild(s), s.onclick = () => {
            const e = e => {
                m.__playingAd = !1, e && A("main", m.__songVolume), D.style.display = "flex"
            };
            0 != m.__loadedData.gacha || window.__adsBlocked ? e(!1) : (P(), m.__playingAd = !0, t && (m.__loadedData.gacha++, y(m.__loadedData.gacha, "gacha"), g()), e(!0)), 
			//A("click"),
			console.log("rew break 2")
        }, f.push({
            el: s,
            n: "gacha"
        }), g(), m.__loadedData.audio || (Z.checked = !1), Z.addEventListener("change", () => {
            m.__loadedData.audio = Z.checked, y(m.__loadedData.audio, "audio"), m.__loadedData.audio ? (A("click"), E()) : P()
        })
    })();
    const ut = () => {
            try {
                return window.self !== window.top || window.location.host.indexOf("localhost:") >= 0
            } catch (e) {
                return !0
            }
        },
        pt = e => {
           console.log("fulss call");// e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
        }
}();