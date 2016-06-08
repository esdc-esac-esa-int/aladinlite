function AstroMath() {}

function Projection(t, e) {
    this.PROJECTION = Projection.PROJ_TAN, this.ROT = this.tr_oR(t, e)
}

function Coo(t, e, i) {
    this.lon = t, this.lat = e, this.prec = i, this.frame = null, this.computeDirCos()
}

function Tokenizer(t, e) {
    this.string = Strings.trim(t, e), this.sep = e, this.pos = 0
}

function Strings() {}

function Numbers() {}

function relMouseCoords(t) {
    if (t.offsetX) return {
        x: t.offsetX,
        y: t.offsetY
    };
    if (!Utils.cssScale) {
        var e = window.getComputedStyle(document.body, null),
            i = e.getPropertyValue("-webkit-transform") || e.getPropertyValue("-moz-transform") || e.getPropertyValue("-ms-transform") || e.getPropertyValue("-o-transform") || e.getPropertyValue("transform"),
            o = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/,
            r = i.match(o);
        Utils.cssScale = r ? parseFloat(r[1]) : 1
    }
    var a = t;
    a.target;
    var s = a.target || a.srcElement,
        n = s.currentStyle || window.getComputedStyle(s, null),
        h = parseInt(n.borderLeftWidth, 10),
        l = parseInt(n.borderTopWidth, 10),
        c = s.getBoundingClientRect(),
        u = a.clientX - h - c.left,
        d = a.clientY - l - c.top;
    return {
        x: parseInt(u / Utils.cssScale),
        y: parseInt(d / Utils.cssScale)
    }
}
var cds = cds || {},
    A = A || {};
"object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";

        function f(t) {
            return 10 > t ? "0" + t : t
        }

        function quote(t) {
            return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) {
                var e = meta[t];
                return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + t + '"'
        }

        function str(t, e) {
            var i, o, r, a, s, n = gap,
                h = e[t];
            switch (h && "object" == typeof h && "function" == typeof h.toJSON && (h = h.toJSON(t)), "function" == typeof rep && (h = rep.call(e, t, h)), typeof h) {
                case "string":
                    return quote(h);
                case "number":
                    return isFinite(h) ? h + "" : "null";
                case "boolean":
                case "null":
                    return h + "";
                case "object":
                    if (!h) return "null";
                    if (gap += indent, s = [], "[object Array]" === Object.prototype.toString.apply(h)) {
                        for (a = h.length, i = 0; a > i; i += 1) s[i] = str(i, h) || "null";
                        return r = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + n + "]" : "[" + s.join(",") + "]", gap = n, r
                    }
                    if (rep && "object" == typeof rep)
                        for (a = rep.length, i = 0; a > i; i += 1) "string" == typeof rep[i] && (o = rep[i], r = str(o, h), r && s.push(quote(o) + (gap ? ": " : ":") + r));
                    else
                        for (o in h) Object.prototype.hasOwnProperty.call(h, o) && (r = str(o, h), r && s.push(quote(o) + (gap ? ": " : ":") + r));
                    return r = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + n + "}" : "{" + s.join(",") + "}", gap = n, r
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, i) {
            var o;
            if (gap = "", indent = "", "number" == typeof i)
                for (o = 0; i > o; o += 1) indent += " ";
            else "string" == typeof i && (indent = i);
            if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw Error("JSON.stringify");
            return str("", {
                "": t
            })
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(t, e) {
                var i, o, r = t[e];
                if (r && "object" == typeof r)
                    for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (o = walk(r, i), void 0 !== o ? r[i] = o : delete r[i]);
                return reviver.call(t, e, r)
            }
            var j;
            if (text += "", cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) {
                    return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(), Logger = {}, Logger.log = function(t, e) {
        try {
            var i = "http://alasky.u-strasbg.fr/cgi/AladinLiteLogger/log.py",
                o = "";
            e && (o = JSON.stringify(e)), $.ajax({
                url: i,
                data: {
                    action: t,
                    params: o,
                    pageUrl: window.location.href,
                    referer: document.referrer ? document.referrer : ""
                },
                method: "GET",
                dataType: "json"
            })
        } catch (r) {
            window.console && console.log("Exception: " + r)
        }
    },
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
    }(function(t) {
        function e(e) {
            var r, a = e || window.event,
                s = [].slice.call(arguments, 1),
                n = 0,
                h = 0,
                l = 0,
                c = 0,
                u = 0;
            return e = t.event.fix(a), e.type = "mousewheel", a.wheelDelta && (n = a.wheelDelta), a.detail && (n = -1 * a.detail), l = n, void 0 !== a.axis && a.axis === a.HORIZONTAL_AXIS && (l = 0, h = -1 * n), a.deltaY && (l = -1 * a.deltaY, n = l), a.deltaX && (h = a.deltaX, n = -1 * h), void 0 !== a.wheelDeltaY && (l = a.wheelDeltaY), void 0 !== a.wheelDeltaX && (h = -1 * a.wheelDeltaX), c = Math.abs(n), (!i || i > c) && (i = c), u = Math.max(Math.abs(l), Math.abs(h)), (!o || o > u) && (o = u), r = n > 0 ? "floor" : "ceil", n = Math[r](n / i), h = Math[r](h / o), l = Math[r](l / o), s.unshift(e, n, h, l), (t.event.dispatch || t.event.handle).apply(this, s)
        }
        var i, o, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
        if (t.event.fixHooks)
            for (var s = r.length; s;) t.event.fixHooks[r[--s]] = t.event.mouseHooks;
        t.event.special.mousewheel = {
            setup: function() {
                if (this.addEventListener)
                    for (var t = a.length; t;) this.addEventListener(a[--t], e, !1);
                else this.onmousewheel = e
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var t = a.length; t;) this.removeEventListener(a[--t], e, !1);
                else this.onmousewheel = null
            }
        }, t.fn.extend({
            mousewheel: function(t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
            },
            unmousewheel: function(t) {
                return this.unbind("mousewheel", t)
            }
        })
    }), window.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            window.setTimeout(t, 1e3 / 60)
        }
    }();
var Stats = function() {
    function t(t, e, i) {
        var o, r, a;
        for (r = 0; 30 > r; r++)
            for (o = 0; 73 > o; o++) a = 4 * (o + 74 * r), t[a] = t[a + 4], t[a + 1] = t[a + 5], t[a + 2] = t[a + 6];
        for (r = 0; 30 > r; r++) a = 4 * (73 + 74 * r), e > r ? (t[a] = O[i].bg.r, t[a + 1] = O[i].bg.g, t[a + 2] = O[i].bg.b) : (t[a] = O[i].fg.r, t[a + 1] = O[i].fg.g, t[a + 2] = O[i].fg.b)
    }
    var e, i, o, r, a, s, n, h, l, c, u, d, p, v, f = 0,
        g = 2,
        m = 0,
        y = (new Date).getTime(),
        w = y,
        C = y,
        x = 0,
        S = 1e3,
        M = 0,
        T = 0,
        b = 1e3,
        I = 0,
        P = 0,
        A = 1e3,
        R = 0,
        O = {
            fps: {
                bg: {
                    r: 16,
                    g: 16,
                    b: 48
                },
                fg: {
                    r: 0,
                    g: 255,
                    b: 255
                }
            },
            ms: {
                bg: {
                    r: 16,
                    g: 48,
                    b: 16
                },
                fg: {
                    r: 0,
                    g: 255,
                    b: 0
                }
            },
            mb: {
                bg: {
                    r: 48,
                    g: 16,
                    b: 26
                },
                fg: {
                    r: 255,
                    g: 0,
                    b: 128
                }
            }
        };
    e = document.createElement("div"), e.style.cursor = "pointer", e.style.width = "80px", e.style.opacity = "0.9", e.style.zIndex = "10001", e.addEventListener("click", function() {
        switch (f++, f == g && (f = 0), i.style.display = "none", n.style.display = "none", u.style.display = "none", f) {
            case 0:
                i.style.display = "block";
                break;
            case 1:
                n.style.display = "block";
                break;
            case 2:
                u.style.display = "block"
        }
    }, !1), i = document.createElement("div"), i.style.backgroundColor = "rgb(" + Math.floor(O.fps.bg.r / 2) + "," + Math.floor(O.fps.bg.g / 2) + "," + Math.floor(O.fps.bg.b / 2) + ")", i.style.padding = "2px 0px 3px 0px", e.appendChild(i), o = document.createElement("div"), o.style.fontFamily = "Helvetica, Arial, sans-serif", o.style.textAlign = "left", o.style.fontSize = "9px", o.style.color = "rgb(" + O.fps.fg.r + "," + O.fps.fg.g + "," + O.fps.fg.b + ")", o.style.margin = "0px 0px 1px 3px", o.innerHTML = '<span style="font-weight:bold">FPS</span>', i.appendChild(o), r = document.createElement("canvas"), r.width = 74, r.height = 30, r.style.display = "block", r.style.marginLeft = "3px", i.appendChild(r), a = r.getContext("2d"), a.fillStyle = "rgb(" + O.fps.bg.r + "," + O.fps.bg.g + "," + O.fps.bg.b + ")", a.fillRect(0, 0, r.width, r.height), s = a.getImageData(0, 0, r.width, r.height), n = document.createElement("div"), n.style.backgroundColor = "rgb(" + Math.floor(O.ms.bg.r / 2) + "," + Math.floor(O.ms.bg.g / 2) + "," + Math.floor(O.ms.bg.b / 2) + ")", n.style.padding = "2px 0px 3px 0px", n.style.display = "none", e.appendChild(n), h = document.createElement("div"), h.style.fontFamily = "Helvetica, Arial, sans-serif", h.style.textAlign = "left", h.style.fontSize = "9px", h.style.color = "rgb(" + O.ms.fg.r + "," + O.ms.fg.g + "," + O.ms.fg.b + ")", h.style.margin = "0px 0px 1px 3px", h.innerHTML = '<span style="font-weight:bold">MS</span>', n.appendChild(h), r = document.createElement("canvas"), r.width = 74, r.height = 30, r.style.display = "block", r.style.marginLeft = "3px", n.appendChild(r), l = r.getContext("2d"), l.fillStyle = "rgb(" + O.ms.bg.r + "," + O.ms.bg.g + "," + O.ms.bg.b + ")", l.fillRect(0, 0, r.width, r.height), c = l.getImageData(0, 0, r.width, r.height);
    try {
        performance && performance.memory && performance.memory.totalJSHeapSize && (g = 3)
    } catch (E) {}
    return u = document.createElement("div"), u.style.backgroundColor = "rgb(" + Math.floor(O.mb.bg.r / 2) + "," + Math.floor(O.mb.bg.g / 2) + "," + Math.floor(O.mb.bg.b / 2) + ")", u.style.padding = "2px 0px 3px 0px", u.style.display = "none", e.appendChild(u), d = document.createElement("div"), d.style.fontFamily = "Helvetica, Arial, sans-serif", d.style.textAlign = "left", d.style.fontSize = "9px", d.style.color = "rgb(" + O.mb.fg.r + "," + O.mb.fg.g + "," + O.mb.fg.b + ")", d.style.margin = "0px 0px 1px 3px", d.innerHTML = '<span style="font-weight:bold">MB</span>', u.appendChild(d), r = document.createElement("canvas"), r.width = 74, r.height = 30, r.style.display = "block", r.style.marginLeft = "3px", u.appendChild(r), p = r.getContext("2d"), p.fillStyle = "#301010", p.fillRect(0, 0, r.width, r.height), v = p.getImageData(0, 0, r.width, r.height), {
        domElement: e,
        update: function() {
            m++, y = (new Date).getTime(), T = y - w, b = Math.min(b, T), I = Math.max(I, T), t(c.data, Math.min(30, 30 - 30 * (T / 200)), "ms"), h.innerHTML = '<span style="font-weight:bold">' + T + " MS</span> (" + b + "-" + I + ")", l.putImageData(c, 0, 0), w = y, y > C + 1e3 && (x = Math.round(1e3 * m / (y - C)), S = Math.min(S, x), M = Math.max(M, x), t(s.data, Math.min(30, 30 - 30 * (x / 100)), "fps"), o.innerHTML = '<span style="font-weight:bold">' + x + " FPS</span> (" + S + "-" + M + ")", a.putImageData(s, 0, 0), 3 == g && (P = 9.54e-7 * performance.memory.usedJSHeapSize, A = Math.min(A, P), R = Math.max(R, P), t(v.data, Math.min(30, 30 - P / 2), "mb"), d.innerHTML = '<span style="font-weight:bold">' + Math.round(P) + " MB</span> (" + Math.round(A) + "-" + Math.round(R) + ")", p.putImageData(v, 0, 0)), C = y, m = 0)
        }
    }
};
Constants = {}, Constants.PI = Math.PI, Constants.C_PR = Math.PI / 180, Constants.VLEV = 2, Constants.EPS = 1e-7, Constants.c = .105, Constants.LN10 = Math.log(10), Constants.PIOVER2 = Math.PI / 2, Constants.TWOPI = 2 * Math.PI, Constants.TWOTHIRD = 2 / 3, Constants.ARCSECOND_RADIAN = 484813681109536e-20, SpatialVector = function() {
    function t(t, e, i) {
        "use strict";
        this.x = t, this.y = e, this.z = i, this.ra_ = 0, this.dec_ = 0, this.okRaDec_ = !1
    }
    return t.prototype.setXYZ = function(t, e, i) {
        this.x = t, this.y = e, this.z = i, this.okRaDec_ = !1
    }, t.prototype.length = function() {
        "use strict";
        return Math.sqrt(this.lengthSquared())
    }, t.prototype.lengthSquared = function() {
        "use strict";
        return this.x * this.x + this.y * this.y + this.z * this.z
    }, t.prototype.normalized = function() {
        "use strict";
        var t = this.length();
        this.x /= t, this.y /= t, this.z /= t
    }, t.prototype.set = function(t, e) {
        "use strict";
        this.ra_ = t, this.dec_ = e, this.okRaDec_ = !0, this.updateXYZ()
    }, t.prototype.angle = function(t) {
        "use strict";
        var e = this.y * t.z - this.z * t.y,
            i = this.z * t.x - this.x * t.z,
            o = this.x * t.y - this.y * t.x,
            r = Math.sqrt(e * e + i * i + o * o);
        return Math.abs(Math.atan2(r, dot(t)))
    }, t.prototype.get = function() {
        "use strict";
        return [x, y, z]
    }, t.prototype.toString = function() {
        "use strict";
        return "SpatialVector[" + this.x + ", " + this.y + ", " + this.z + "]"
    }, t.prototype.cross = function(e) {
        "use strict";
        return new t(this.y * e.z - e.y * this.z, this.z * e.x - e.z * this.x, this.x * e.y - e.x() * this.y)
    }, t.prototype.equal = function(t) {
        "use strict";
        return this.x == t.x && this.y == t.y && this.z == t.z() ? !0 : !1
    }, t.prototype.mult = function(e) {
        "use strict";
        return new t(e * this.x, e * this.y, e * this.z)
    }, t.prototype.dot = function(t) {
        "use strict";
        return this.x * t.x + this.y * t.y + this.z * t.z
    }, t.prototype.add = function(e) {
        "use strict";
        return new t(this.x + e.x, this.y + e.y, this.z + e.z)
    }, t.prototype.sub = function(e) {
        "use strict";
        return new t(this.x - e.x, this.y - e.y, this.z - e.z)
    }, t.prototype.dec = function() {
        "use strict";
        return this.okRaDec_ || (this.normalized(), this.updateRaDec()), this.dec_
    }, t.prototype.ra = function() {
        "use strict";
        return this.okRaDec_ || (this.normalized(), this.updateRaDec()), this.ra_
    }, t.prototype.updateXYZ = function() {
        "use strict";
        var t = Math.cos(this.dec_ * Constants.C_PR);
        this.x = Math.cos(this.ra_ * Constants.C_PR) * t, this.y = Math.sin(this.ra_ * Constants.C_PR) * t, this.z = Math.sin(this.dec_ * Constants.C_PR)
    }, t.prototype.updateRaDec = function() {
        "use strict";
        this.dec_ = Math.asin(this.z) / Constants.C_PR;
        var t = Math.cos(this.dec_ * Constants.C_PR);
        this.ra_ = t > Constants.EPS || -Constants.EPS > t ? this.y > Constants.EPS || this.y < -Constants.EPS ? 0 > this.y ? 360 - Math.acos(this.x / t) / Constants.C_PR : Math.acos(this.x / t) / Constants.C_PR : 0 > this.x ? 180 : 0 : 0, this.okRaDec_ = !0
    }, t.prototype.toRaRadians = function() {
        "use strict";
        var t = 0;
        return (0 != this.x || 0 != this.y) && (t = Math.atan2(this.y, this.x)), 0 > t && (t += 2 * Math.PI), t
    }, t.prototype.toDeRadians = function() {
        var t = z / this.length(),
            e = Math.acos(t);
        return Math.PI / 2 - e
    }, t
}(), AngularPosition = function() {
    return AngularPosition = function(t, e) {
        "use strict";
        this.theta = t, this.phi = e
    }, AngularPosition.prototype.toString = function() {
        "use strict";
        return "theta: " + this.theta + ", phi: " + this.phi
    }, AngularPosition
}(), LongRangeSetBuilder = function() {
    function t() {
        this.items = []
    }
    return t.prototype.appendRange = function(t, e) {
        for (var i = t; e >= i; i++) i in this.items || this.items.push(i)
    }, t
}(), HealpixIndex = function() {
    function t(t) {
        "use strict";
        this.nside = t
    }
    return t.NS_MAX = 8192, t.ORDER_MAX = 13, t.NSIDELIST = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192], t.JRLL = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4], t.JPLL = [1, 3, 5, 7, 0, 2, 4, 6, 1, 3, 5, 7], t.XOFFSET = [-1, -1, 0, 1, 1, 1, 0, -1], t.YOFFSET = [0, 1, 1, 1, 0, -1, -1, -1], t.FACEARRAY = [
        [8, 9, 10, 11, -1, -1, -1, -1, 10, 11, 8, 9],
        [5, 6, 7, 4, 8, 9, 10, 11, 9, 10, 11, 8],
        [-1, -1, -1, -1, 5, 6, 7, 4, -1, -1, -1, -1],
        [4, 5, 6, 7, 11, 8, 9, 10, 11, 8, 9, 10],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [1, 2, 3, 0, 0, 1, 2, 3, 5, 6, 7, 4],
        [-1, -1, -1, -1, 7, 4, 5, 6, -1, -1, -1, -1],
        [3, 0, 1, 2, 3, 0, 1, 2, 4, 5, 6, 7],
        [2, 3, 0, 1, -1, -1, -1, -1, 0, 1, 2, 3]
    ], t.SWAPARRAY = [
        [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],
        [0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0],
        [3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0]
    ], t.Z0 = Constants.TWOTHIRD, t.prototype.init = function() {
        "use strict";
        var e = 256;
        this.ctab = Array(e), this.utab = Array(e);
        for (var i = 0; 256 > i; ++i) this.ctab[i] = 1 & i | (2 & i) << 7 | (4 & i) >> 1 | (8 & i) << 6 | (16 & i) >> 2 | (32 & i) << 5 | (64 & i) >> 3 | (128 & i) << 4, this.utab[i] = 1 & i | (2 & i) << 1 | (4 & i) << 2 | (8 & i) << 3 | (16 & i) << 4 | (32 & i) << 5 | (64 & i) << 6 | (128 & i) << 7;
        this.nl2 = 2 * this.nside, this.nl3 = 3 * this.nside, this.nl4 = 4 * this.nside, this.npface = this.nside * this.nside, this.ncap = 2 * this.nside * (this.nside - 1), this.npix = 12 * this.npface, this.fact2 = 4 / this.npix, this.fact1 = (this.nside << 1) * this.fact2, this.order = t.nside2order(this.nside)
    }, t.calculateNSide = function(e) {
        for (var i = 0, o = e * e, r = 180 / Constants.PI, a = 5184e4 * Constants.PI * r * r, s = Utils.castToInt(a / o), n = s / 12, h = Math.sqrt(n), l = t.NS_MAX, c = 0, u = 0; t.NSIDELIST.length > u; u++)
            if (l >= Math.abs(h - t.NSIDELIST[u]) && (l = Math.abs(h - t.NSIDELIST[u]), i = t.NSIDELIST[u], c = u), h > i && t.NS_MAX > h && (i = t.NSIDELIST[c + 1]), h > t.NS_MAX) return console.log("nside cannot be bigger than " + t.NS_MAX), t.NS_MAX;
        return i
    }, t.nside2order = function(e) {
        "use strict";
        return (e & e - 1) > 0 ? -1 : Utils.castToInt(t.log2(e))
    }, t.log2 = function(t) {
        "use strict";
        return Math.log(t) / Math.log(2)
    }, t.prototype.ang2pix_nest = function(e, i) {
        "use strict";
        var o, r, a, s, n, h, l, c, u, d, p, v, f;
        if (i >= Constants.TWOPI && (i -= Constants.TWOPI), 0 > i && (i += Constants.TWOPI), e > Constants.PI || 0 > e) throw {
            name: "Illegal argument",
            message: "theta must be between 0 and " + Constants.PI
        };
        if (i > Constants.TWOPI || 0 > i) throw {
            name: "Illegal argument",
            message: "phi must be between 0 and " + Constants.TWOPI
        };
        if (r = Math.cos(e), a = Math.abs(r), s = i / Constants.PIOVER2, t.Z0 >= a) {
            var g = this.nside * (.5 + s),
                m = .75 * this.nside * r,
                c = g - m,
                u = g + m;
            h = c >> this.order, l = u >> this.order, p = h == l ? 4 == h ? 4 : h + 4 : l > h ? h : l + 8, v = Utils.castToInt(u & this.nside - 1), f = Utils.castToInt(this.nside - (c & this.nside - 1) - 1)
        } else {
            d = Utils.castToInt(s), d >= 4 && (d = 3), n = s - d;
            var y = this.nside * Math.sqrt(3 * (1 - a));
            c = Utils.castToInt(n * y), u = Utils.castToInt((1 - n) * y), c = Math.min(t.NS_MAX - 1, c), u = Math.min(t.NS_MAX - 1, u), r >= 0 ? (p = d, v = Utils.castToInt(this.nside - u - 1), f = Utils.castToInt(this.nside - c - 1)) : (p = d + 8, v = c, f = u)
        }
        return o = this.xyf2nest(v, f, p)
    }, t.prototype.xyf2nest = function(t, e, i) {
        "use strict";
        return (i << 2 * this.order) + (this.utab[255 & t] | this.utab[255 & t >> 8] << 16 | this.utab[255 & t >> 16] << 32 | this.utab[255 & t >> 24] << 48 | this.utab[255 & e] << 1 | this.utab[255 & e >> 8] << 17 | this.utab[255 & e >> 16] << 33 | this.utab[255 & e >> 24] << 49)
    }, t.prototype.nest2xyf = function(t) {
        "use strict";
        var e = {};
        e.face_num = t >> 2 * this.order;
        var i = t & this.npface - 1,
            o = (93823560581120 & i) >> 16 | (614882086624428e4 & i) >> 31 | 21845 & i | (1431633920 & i) >> 15;
        return e.ix = this.ctab[255 & o] | this.ctab[255 & o >> 8] << 4 | this.ctab[255 & o >> 16] << 16 | this.ctab[255 & o >> 24] << 20, i >>= 1, o = (93823560581120 & i) >> 16 | (614882086624428e4 & i) >> 31 | 21845 & i | (1431633920 & i) >> 15, e.iy = this.ctab[255 & o] | this.ctab[255 & o >> 8] << 4 | this.ctab[255 & o >> 16] << 16 | this.ctab[255 & o >> 24] << 20, e
    }, t.prototype.pix2ang_nest = function(e) {
        "use strict";
        if (0 > e || e > this.npix - 1) throw {
            name: "Illegal argument",
            message: "ipix out of range"
        };
        var i, o, r, a = this.nest2xyf(e),
            s = a.ix,
            n = a.iy,
            h = a.face_num,
            l = (t.JRLL[h] << this.order) - s - n - 1;
        this.nside > l ? (i = l, o = 1 - i * i * this.fact2, r = 0) : l > this.nl3 ? (i = this.nl4 - l, o = i * i * this.fact2 - 1, r = 0) : (i = this.nside, o = (this.nl2 - l) * this.fact1, r = 1 & l - this.nside);
        var c = Math.acos(o),
            u = (t.JPLL[h] * i + s - n + 1 + r) / 2;
        u > this.nl4 && (u -= this.nl4), 1 > u && (u += this.nl4);
        var d = (u - .5 * (r + 1)) * (Constants.PIOVER2 / i);
        return {
            theta: c,
            phi: d
        }
    }, t.nside2Npix = function(e) {
        "use strict";
        if (0 > e || (e & -e) != e || e > t.NS_MAX) throw {
            name: "Illegal argument",
            message: "nside should be >0, power of 2, <" + t.NS_MAX
        };
        var i = 12 * e * e;
        return i
    }, t.prototype.xyf2ring = function(e, i, o) {
        "use strict";
        var r, a, s, n = t.JRLL[o] * this.nside - e - i - 1;
        this.nside > n ? (r = n, s = 2 * r * (r - 1), a = 0) : n > 3 * this.nside ? (r = this.nl4 - n, s = this.npix - 2 * (r + 1) * r, a = 0) : (r = this.nside, s = this.ncap + (n - this.nside) * this.nl4, a = 1 & n - this.nside);
        var h = (t.JPLL[o] * r + e - i + 1 + a) / 2;
        return h > this.nl4 ? h -= this.nl4 : 1 > h && (h += this.nl4), s + h - 1
    }, t.prototype.nest2ring = function(t) {
        "use strict";
        var e = this.nest2xyf(t),
            i = this.xyf2ring(e.ix, e.iy, e.face_num);
        return i
    }, t.prototype.corners_nest = function(t, e) {
        "use strict";
        var i = this.nest2ring(t);
        return this.corners_ring(i, e)
    }, t.prototype.pix2ang_ring = function(t) {
        "use strict";
        var e, i, o, r, a, s, n, h, l;
        if (0 > t || t > this.npix - 1) throw {
            name: "Illegal argument",
            message: "ipix out of range"
        };
        return s = t + 1, this.ncap >= s ? (h = s / 2, l = Utils.castToInt(h), o = Utils.castToInt(Math.sqrt(h - Math.sqrt(l))) + 1, r = s - 2 * o * (o - 1), e = Math.acos(1 - o * o * this.fact2), i = (r - .5) * Constants.PI / (2 * o)) : this.npix - this.ncap > t ? (a = t - this.ncap, o = a / this.nl4 + this.nside, r = a % this.nl4 + 1, n = (1 & o + this.nside) > 0 ? 1 : .5, e = Math.acos((this.nl2 - o) * this.fact1), i = (r - n) * Constants.PI / this.nl2) : (a = this.npix - t, o = Utils.castToInt(.5 * (1 + Math.sqrt(2 * a - 1))), r = 4 * o + 1 - (a - 2 * o * (o - 1)), e = Math.acos(-1 + Math.pow(o, 2) * this.fact2), i = (r - .5) * Constants.PI / (2 * o)), [e, i]
    }, t.prototype.ring = function(t) {
        "use strict";
        var e, i, o = 0,
            r = t + 1,
            a = 0;
        return this.ncap >= r ? (i = r / 2, a = Utils.castToInt(i), o = Utils.castToInt(Math.sqrt(i - Math.sqrt(a))) + 1) : this.nl2 * (5 * this.nside + 1) >= r ? (e = Utils.castToInt(r - this.ncap - 1), o = Utils.castToInt(e / this.nl4 + this.nside)) : (e = this.npix - r + 1, i = e / 2, a = Utils.castToInt(i), o = Utils.castToInt(Math.sqrt(i - Math.sqrt(a))) + 1, o = this.nl4 - o), o
    }, t.prototype.integration_limits_in_costh = function(t) {
        "use strict";
        var e, i, o, r;
        return r = 1 * this.nside, this.nside >= t ? (i = 1 - Math.pow(t, 2) / 3 / this.npface, o = 1 - Math.pow(t - 1, 2) / 3 / this.npface, e = t == this.nside ? 2 * (this.nside - 1) / 3 / r : 1 - Math.pow(t + 1, 2) / 3 / this.npface) : this.nl3 > t ? (i = 2 * (2 * this.nside - t) / 3 / r, o = 2 * (2 * this.nside - t + 1) / 3 / r, e = 2 * (2 * this.nside - t - 1) / 3 / r) : (o = t == this.nl3 ? 2 * (-this.nside + 1) / 3 / r : -1 + Math.pow(4 * this.nside - t + 1, 2) / 3 / this.npface, e = -1 + Math.pow(this.nl4 - t - 1, 2) / 3 / this.npface, i = -1 + Math.pow(this.nl4 - t, 2) / 3 / this.npface), [o, i, e]
    }, t.prototype.pixel_boundaries = function(t, e, i, o) {
        var r, a, s, n, h, l, c, u, d = 1 * this.nside;
        if (Math.abs(o) >= 1 - 1 / 3 / this.npface) return c = i * Constants.PIOVER2, u = (i + 1) * Constants.PIOVER2, [c, u];
        if (1.5 * o >= 1) r = Math.sqrt(3 * (1 - o)), a = 1 / d / r, s = e, n = s - 1, h = t - e, l = h + 1, c = Constants.PIOVER2 * (Math.max(n * a, 1 - l * a) + i), u = Constants.PIOVER2 * (Math.min(1 - h * a, s * a) + i);
        else if (1.5 * o > -1) {
            var p = .5 * (1 - 1.5 * o),
                v = p + 1,
                f = this.nside + t % 2;
            s = e - (f - t) / 2, n = s - 1, h = (f + t) / 2 - e, l = h + 1, c = Constants.PIOVER2 * (Math.max(v - l / d, -p + n / d) + i), u = Constants.PIOVER2 * (Math.min(v - h / d, -p + s / d) + i)
        } else {
            r = Math.sqrt(3 * (1 + o)), a = 1 / d / r;
            var g = 2 * this.nside;
            s = t - g + e, n = s - 1, h = g - e, l = h + 1, c = Constants.PIOVER2 * (Math.max(1 - (g - n) * a, (g - l) * a) + i), u = Constants.PIOVER2 * (Math.min(1 - (g - s) * a, (g - h) * a) + i)
        }
        return [c, u]
    }, t.vector = function(t, e) {
        "use strict";
        var i = 1 * Math.sin(t) * Math.cos(e),
            o = 1 * Math.sin(t) * Math.sin(e),
            r = 1 * Math.cos(t);
        return new SpatialVector(i, o, r)
    }, t.prototype.corners_ring = function(e, i) {
        "use strict";
        var o = 2 * i + 2,
            r = Array(o),
            a = this.pix2ang_ring(e),
            s = Math.cos(a[0]),
            n = a[0],
            h = a[1],
            l = Utils.castToInt(h / Constants.PIOVER2),
            c = this.ring(e),
            u = Math.min(c, Math.min(this.nside, this.nl4 - c)),
            d = 0,
            p = Constants.PIOVER2 / u;
        d = c >= this.nside && this.nl3 >= c ? Utils.castToInt(h / p + c % 2 / 2) + 1 : Utils.castToInt(h / p) + 1, d -= l * u;
        var v = o / 2,
            f = this.integration_limits_in_costh(c),
            g = Math.acos(f[0]),
            m = Math.acos(f[2]),
            y = this.pixel_boundaries(c, d, l, f[0]);
        if (r[0] = d > u / 2 ? t.vector(g, y[1]) : t.vector(g, y[0]), y = this.pixel_boundaries(c, d, l, f[2]), r[v] = d > u / 2 ? t.vector(m, y[1]) : t.vector(m, y[0]), 1 == i) {
            var w = Math.acos(f[1]);
            y = this.pixel_boundaries(c, d, l, f[1]), r[1] = t.vector(w, y[0]), r[3] = t.vector(w, y[1])
        } else
            for (var C = f[2] - f[0], x = C / (i + 1), S = 1; i >= S; S++) s = f[0] + x * S, n = Math.acos(s), y = this.pixel_boundaries(c, d, l, s), r[S] = t.vector(n, y[0]), r[o - S] = t.vector(n, y[1]);
        return r
    }, t.vec2Ang = function(t) {
        "use strict";
        var e = t.z / t.length(),
            i = Math.acos(e),
            o = 0;
        return (0 != t.x || 0 != t.y) && (o = Math.atan2(t.y, t.x)), 0 > o && (o += 2 * Math.PI), [i, o]
    }, t.prototype.queryDisc = function(e, i, o, r) {
        "use strict";
        if (0 > i || i > Constants.PI) throw {
            name: "Illegal argument",
            message: "angular radius is in RADIAN and should be in [0,pi]"
        };
        var a, s, n, h, l, c, u, d, p, v, f, g, m, y, w, C, x, S, M, T = new LongRangeSetBuilder,
            b = null,
            l = i;
        if (r && (l += Constants.PI / this.nl4), b = t.vec2Ang(e), c = b[0], u = b[1], f = this.fact2, g = this.fact1, h = Math.cos(c), M = 1 / Math.sqrt((1 - h) * (1 + h)), y = c - l, w = c + l, d = Math.cos(l), x = Math.cos(y), a = this.ringAbove(x) + 1, C = Math.cos(w), s = this.ringAbove(C), a > s && 0 == s && (s = a), 0 >= y)
            for (var I = 1; a > I; ++I) this.inRing(I, 0, Math.PI, T);
        for (n = a; s >= n; ++n) S = this.nside > n ? 1 - n * n * f : this.nl3 >= n ? (this.nl2 - n) * g : -1 + (this.nl4 - n) * (this.nl4 - n) * f, p = (d - S * h) * M, v = 1 - S * S - p * p, m = Math.atan2(Math.sqrt(v), p), isNaN(m) && (m = l), this.inRing(n, u, m, T);
        if (w >= Math.PI)
            for (var I = s + 1; this.nl4 > I; ++I) this.inRing(I, 0, Math.PI, T, !1);
        var P;
        if (o) {
            for (var A = T.items, R = [], O = 0; A.length > O; O++) {
                var E = this.ring2nest(A[O]);
                R.indexOf(E) >= 0 || R.push(E)
            }
            P = R
        } else P = T.items;
        return P
    }, t.prototype.inRing = function(t, e, i, o, r) {
        "use strict";
        var a, s, n, h, l = !1,
            c = !1,
            u = 1e-12,
            d = 0,
            p = 0,
            v = 0,
            f = 0,
            g = (e - i) % Constants.TWOPI - u,
            m = e + i + u,
            y = (e + i) % Constants.TWOPI + u;
        if (u > Math.abs(i - Constants.PI) && (l = !0), t >= this.nside && this.nl3 >= t ? (p = t - this.nside + 1, n = this.ncap + this.nl4 * (p - 1), h = n + this.nl4 - 1, a = p % 2, s = this.nl4) : (this.nside > t ? (p = t, n = 2 * p * (p - 1), h = n + 4 * p - 1) : (p = 4 * this.nside - t, n = this.npix - 2 * p * (p + 1), h = n + 4 * p - 1), s = 4 * p, a = 1), l) return o.appendRange(n, h), void 0;
        if (d = a / 2, r) v = Math.round(s * g / Constants.TWOPI - d), f = Math.round(s * m / Constants.TWOPI - d), v %= s, f > s && (f %= s);
        else {
            if (v = Math.ceil(s * g / Constants.TWOPI - d), f = Utils.castToInt(s * y / Constants.TWOPI - d), v > f && 1 == t && (f = Utils.castToInt(s * m / Constants.TWOPI - d)), v == f + 1 && (v = f), 1 == v - f && Constants.PI > i * s) return console.log("the interval is too small and avay from center"), void 0;
            v = Math.min(v, s - 1), f = Math.max(f, 0)
        }
        if (v > f && (c = !0), c) v += n, f += n, o.appendRange(n, f), o.appendRange(v, h);
        else {
            if (0 > v) return v = Math.abs(v), o.appendRange(n, n + f), o.appendRange(h - v + 1, h), void 0;
            v += n, f += n, o.appendRange(v, f)
        }
    }, t.prototype.ringAbove = function(t) {
        "use strict";
        var e = Math.abs(t);
        if (e > Constants.TWOTHIRD) {
            var i = Utils.castToInt(this.nside * Math.sqrt(3 * (1 - e)));
            return t > 0 ? i : 4 * this.nside - i - 1
        }
        return Utils.castToInt(this.nside * (2 - 1.5 * t))
    }, t.prototype.ring2nest = function(t) {
        "use strict";
        var e = this.ring2xyf(t);
        return this.xyf2nest(e.ix, e.iy, e.face_num)
    }, t.prototype.ring2xyf = function(e) {
        "use strict";
        var i, o, r, a, s = {};
        if (this.ncap > e) {
            i = Utils.castToInt(.5 * (1 + Math.sqrt(1 + 2 * e))), o = e + 1 - 2 * i * (i - 1), r = 0, a = i, s.face_num = 0;
            var n = o - 1;
            n >= 2 * i && (s.face_num = 2, n -= 2 * i), n >= i && ++s.face_num
        } else if (this.npix - this.ncap > e) {
            var h = e - this.ncap;
            this.order >= 0 ? (i = (h >> this.order + 2) + this.nside, o = (h & this.nl4 - 1) + 1) : (i = h / this.nl4 + this.nside, o = h % this.nl4 + 1), r = 1 & i + this.nside, a = this.nside;
            var l, c, u = i - this.nside + 1,
                d = this.nl2 + 2 - u;
            this.order >= 0 ? (l = o - Utils.castToInt(u / 2) + this.nside - 1 >> this.order, c = o - Utils.castToInt(d / 2) + this.nside - 1 >> this.order) : (l = (o - Utils.castToInt(u / 2) + this.nside - 1) / this.nside, c = (o - Utils.castToInt(d / 2) + this.nside - 1) / this.nside), s.face_num = c == l ? 4 == c ? 4 : Utils.castToInt(c) + 4 : l > c ? Utils.castToInt(c) : Utils.castToInt(l) + 8
        } else {
            var h = this.npix - e;
            i = Utils.castToInt(.5 * (1 + Math.sqrt(2 * h - 1))), o = 4 * i + 1 - (h - 2 * i * (i - 1)), r = 0, a = i, i = 2 * this.nl2 - i, s.face_num = 8;
            var n = o - 1;
            n >= 2 * a && (s.face_num = 10, n -= 2 * a), n >= a && ++s.face_num
        }
        var p = i - t.JRLL[s.face_num] * this.nside + 1,
            v = 2 * o - t.JPLL[s.face_num] * a - r - 1;
        return v >= this.nl2 && (v -= 8 * this.nside), s.ix = v - p >> 1, s.iy = -(v + p) >> 1, s
    }, t
}(), Utils = function() {}, Utils.radecToPolar = function(t, e) {
    return {
        theta: Math.PI / 2 - e / 180 * Math.PI,
        phi: t / 180 * Math.PI
    }
}, Utils.polarToRadec = function(t, e) {
    return {
        ra: 180 * e / Math.PI,
        dec: 180 * (Math.PI / 2 - t) / Math.PI
    }
}, Utils.castToInt = function(t) {
    return t > 0 ? Math.floor(t) : Math.ceil(t)
}, AstroMath.D2R = Math.PI / 180, AstroMath.R2D = 180 / Math.PI, AstroMath.sign = function(t) {
    return t > 0 ? 1 : 0 > t ? -1 : 0
}, AstroMath.cosd = function(t) {
    if (0 == t % 90) {
        var e = Math.abs(Math.floor(t / 90 + .5)) % 4;
        switch (e) {
            case 0:
                return 1;
            case 1:
                return 0;
            case 2:
                return -1;
            case 3:
                return 0
        }
    }
    return Math.cos(t * AstroMath.D2R)
}, AstroMath.sind = function(t) {
    if (0 === t % 90) {
        var e = Math.abs(Math.floor(t / 90 - .5)) % 4;
        switch (e) {
            case 0:
                return 1;
            case 1:
                return 0;
            case 2:
                return -1;
            case 3:
                return 0
        }
    }
    return Math.sin(t * AstroMath.D2R)
}, AstroMath.tand = function(t) {
    var e;
    return e = t % 360, 0 == e || 180 == Math.abs(e) ? 0 : 45 == e || 225 == e ? 1 : -135 == e || -315 == e ? -1 : Math.tan(t * AstroMath.D2R)
}, AstroMath.asind = function(t) {
    return Math.asin(t) * AstroMath.R2D
}, AstroMath.acosd = function(t) {
    return Math.acos(t) * AstroMath.R2D
}, AstroMath.atand = function(t) {
    return Math.atan(t) * AstroMath.R2D
}, AstroMath.atan2 = function(t, e) {
    if (0 == t) return e > 0 ? 0 : 0 > e ? Math.PI : 0 / 0;
    var i = AstroMath.sign(t);
    if (0 == e) return Math.PI / 2 * i;
    var o = Math.atan(Math.abs(t / e));
    return e > 0 ? o * i : 0 > e ? (Math.PI - o) * i : void 0
}, AstroMath.atan2d = function(t, e) {
    return AstroMath.atan2(t, e) * AstroMath.R2D
}, AstroMath.cosh = function(t) {
    return (Math.exp(t) + Math.exp(-t)) / 2
}, AstroMath.sinh = function(t) {
    return (Math.exp(t) - Math.exp(-t)) / 2
}, AstroMath.tanh = function(t) {
    return (Math.exp(t) - Math.exp(-t)) / (Math.exp(t) + Math.exp(-t))
}, AstroMath.acosh = function(t) {
    return Math.log(t + Math.sqrt(t * t - 1))
}, AstroMath.asinh = function(t) {
    return Math.log(t + Math.sqrt(t * t + 1))
}, AstroMath.atanh = function(t) {
    return .5 * Math.log((1 + t) / (1 - t))
}, AstroMath.sinc = function(t) {
    var e, i = Math.abs(t);
    return .001 >= i ? (i *= i, e = 1 - i * (1 - i / 20) / 6) : e = Math.sin(i) / i, e
}, AstroMath.asinc = function(t) {
    var e, i = Math.abs(t);
    return .001 >= i ? (i *= i, e = 1 + i * (6 + .45 * i) / 6) : e = Math.asin(i) / i, e
}, AstroMath.hypot = function(t, e) {
    return Math.sqrt(t * t + e * e)
}, AstroMath.eulerMatrix = function(t, e, i) {
    var o = Array(3);
    o[0] = Array(3), o[1] = Array(3), o[2] = Array(3);
    var r = AstroMath.cosd(t),
        a = AstroMath.sind(t),
        s = AstroMath.cosd(e),
        n = AstroMath.sind(e),
        h = AstroMath.cosd(i),
        l = AstroMath.sind(i);
    return o[0][0] = h * s * r - l * a, o[0][1] = -l * s * r - h * a, o[0][2] = -n * r, o[1][0] = h * s * a + l * r, o[1][1] = -l * s * a + h * r, o[1][2] = -n * a, o[2][0] = -n * h, o[2][1] = -n * r, o[2][2] = s, o
}, AstroMath.displayMatrix = function(t) {
    for (var e = t.length, i = 0, o = 0; e > o; o++) t[o].length > i && (i = t[o].length);
    for (var r = "<table>\n", o = 0; e > o; o++) {
        r += "<tr>";
        for (var a = 0; e > a; a++) r += "<td>", t[o].length > o && (r += "" + t[o][a]), r += "</td>";
        r += "</td>\n"
    }
    return r += "</table>\n"
}, Projection.PROJ_TAN = 1, Projection.PROJ_TAN2 = 2, Projection.PROJ_STG = 2, Projection.PROJ_SIN = 3, Projection.PROJ_SIN2 = 4, Projection.PROJ_ZEA = 4, Projection.PROJ_ARC = 5, Projection.PROJ_SCHMIDT = 5, Projection.PROJ_AITOFF = 6, Projection.PROJ_AIT = 6, Projection.PROJ_GLS = 7, Projection.PROJ_MERCATOR = 8, Projection.PROJ_MER = 8, Projection.PROJ_LAM = 9, Projection.PROJ_LAMBERT = 9, Projection.PROJ_TSC = 10, Projection.PROJ_QSC = 11, Projection.PROJ_LIST = ["Mercator", Projection.PROJ_MERCATOR, "Gnomonic", Projection.PROJ_TAN, "Stereographic", Projection.PROJ_TAN2, "Orthographic", Projection.PROJ_SIN, "Zenithal", Projection.PROJ_ZEA, "Schmidt", Projection.PROJ_SCHMIDT, "Aitoff", Projection.PROJ_AITOFF, "Lambert", Projection.PROJ_LAMBERT], Projection.PROJ_NAME = ["-", "Gnomonic", "Stereographic", "Orthographic", "Equal-area", "Schmidt plates", "Aitoff", "Global sin", "Mercator", "Lambert"], Projection.prototype = {
    setCenter: function(t, e) {
        this.ROT = this.tr_oR(t, e)
    },
    setProjection: function(t) {
        this.PROJECTION = t
    },
    project: function(t, e) {
        var i = this.tr_ou(t, e),
            o = this.tr_uu(i, this.ROT),
            r = this.tr_up(this.PROJECTION, o);
        return null == r ? null : {
            X: -r[0],
            Y: -r[1]
        }
    },
    unproject: function(t, e) {
        t = -t, e = -e;
        var i = this.tr_pu(this.PROJECTION, t, e),
            o = this.tr_uu1(i, this.ROT),
            r = this.tr_uo(o);
        return {
            ra: r[0],
            dec: r[1]
        }
    },
    tr_up: function(t, e) {
        var i, o, r, a, s, n = e[0],
            h = e[1],
            l = e[2];
        if (i = AstroMath.hypot(n, h), 0 == i && 0 == l) return null;
        switch (t) {
            default: r = null;
            break;
            case Projection.PROJ_AITOFF:
                    o = Math.sqrt(i * (i + n) / 2),
                a = Math.sqrt(2 * i * (i - n)),
                o = Math.sqrt((1 + o) / 2),
                a /= o,
                s = l / o,
                0 > h && (a = -a),
                r = [a, s];
                break;
            case Projection.PROJ_GLS:
                    s = Math.asin(l),
                a = 0 != i ? Math.atan2(h, n) * i : 0,
                r = [a, s];
                break;
            case Projection.PROJ_MERCATOR:
                    0 != i ? (a = Math.atan2(h, n), s = AstroMath.atanh(l), r = [a, s]) : r = null;
                break;
            case Projection.PROJ_TAN:
                    n > 0 ? (a = h / n, s = l / n, r = [a, s]) : r = null;
                break;
            case Projection.PROJ_TAN2:
                    o = (1 + n) / 2,
                o > 0 ? (a = h / o, s = l / o, r = [a, s]) : r = null;
                break;
            case Projection.PROJ_ARC:
                    -1 >= n ? (a = Math.PI, s = 0) : (i = AstroMath.hypot(h, l), o = n > 0 ? AstroMath.asinc(i) : Math.acos(n) / i, a = h * o, s = l * o),
                r = [a, s];
                break;
            case Projection.PROJ_SIN:
                    n >= 0 ? (a = h, s = l, r = [a, s]) : r = null;
                break;
            case Projection.PROJ_SIN2:
                    o = Math.sqrt((1 + n) / 2),
                0 != o ? (a = h / o, s = l / o) : (a = 2, s = 0),
                r = [a, s];
                break;
            case Projection.PROJ_LAMBERT:
                    s = l,
                a = 0,
                0 != i && (a = Math.atan2(h, n)),
                r = [a, s]
        }
        return r
    },
    tr_pu: function(t, e, i) {
        var o, r, a, s, n;
        switch (t) {
            default: return null;
            case Projection.PROJ_AITOFF:
                    if (o = e * e / 8 + i * i / 2, o > 1) return null;a = 1 - o,
                r = Math.sqrt(1 - o / 2),
                s = e * r / 2,
                n = i * r,
                o = AstroMath.hypot(a, s),
                0 != o && (r = a, a = (r * r - s * s) / o, s = 2 * r * s / o);
                break;
            case Projection.PROJ_GLS:
                    if (n = Math.sin(i), o = 1 - n * n, 0 > o) return null;o = Math.sqrt(o),
                r = 0 != o ? e / o : 0,
                a = o * Math.cos(r),
                s = o * Math.sin(r);
                break;
            case Projection.PROJ_MERCATOR:
                    n = AstroMath.tanh(i),
                o = 1 / AstroMath.cosh(i),
                a = o * Math.cos(e),
                s = o * Math.sin(e);
                break;
            case Projection.PROJ_LAMBERT:
                    if (n = i, o = 1 - n * n, 0 > o) return null;o = Math.sqrt(o),
                a = o * Math.cos(e),
                s = o * Math.sin(e);
                break;
            case Projection.PROJ_TAN:
                    a = 1 / Math.sqrt(1 + e * e + i * i),
                s = e * a,
                n = i * a;
                break;
            case Projection.PROJ_TAN2:
                    o = (e * e + i * i) / 4,
                r = 1 + o,
                a = (1 - o) / r,
                s = e / r,
                n = i / r;
                break;
            case Projection.PROJ_ARC:
                    if (o = AstroMath.hypot(e, i), o > Math.PI) return null;r = AstroMath.sinc(o),
                a = Math.cos(o),
                s = r * e,
                n = r * i;
                break;
            case Projection.PROJ_SIN:
                    if (r = 1 - e * e - i * i, 0 > r) return null;a = Math.sqrt(r),
                s = e,
                n = i;
                break;
            case Projection.PROJ_SIN2:
                    if (o = (e * e + i * i) / 4, o > 1) return null;r = Math.sqrt(1 - o),
                a = 1 - 2 * o,
                s = r * e,
                n = r * i
        }
        return [a, s, n]
    },
    tr_oR: function(t, e) {
        var i = Array(3);
        return i[0] = Array(3), i[1] = Array(3), i[2] = Array(3), i[2][2] = AstroMath.cosd(e), i[0][2] = AstroMath.sind(e), i[1][1] = AstroMath.cosd(t), i[1][0] = -AstroMath.sind(t), i[1][2] = 0, i[0][0] = i[2][2] * i[1][1], i[0][1] = -i[2][2] * i[1][0], i[2][0] = -i[0][2] * i[1][1], i[2][1] = i[0][2] * i[1][0], i
    },
    tr_ou: function(t, e) {
        var i = Array(3),
            o = AstroMath.cosd(e);
        return i[0] = o * AstroMath.cosd(t), i[1] = o * AstroMath.sind(t), i[2] = AstroMath.sind(e), i
    },
    tr_uu: function(t, e) {
        var i = Array(3),
            o = t[0],
            r = t[1],
            a = t[2];
        return i[0] = e[0][0] * o + e[0][1] * r + e[0][2] * a, i[1] = e[1][0] * o + e[1][1] * r + e[1][2] * a, i[2] = e[2][0] * o + e[2][1] * r + e[2][2] * a, i
    },
    tr_uu1: function(t, e) {
        var i = Array(3),
            o = t[0],
            r = t[1],
            a = t[2];
        return i[0] = e[0][0] * o + e[1][0] * r + e[2][0] * a, i[1] = e[0][1] * o + e[1][1] * r + e[2][1] * a, i[2] = e[0][2] * o + e[1][2] * r + e[2][2] * a, i
    },
    tr_uo: function(t) {
        var e, i, o = t[0],
            r = t[1],
            a = t[2],
            s = o * o + r * r;
        if (0 == s) {
            if (0 == a) return null;
            e = 0, i = a > 0 ? 90 : -90
        } else i = AstroMath.atand(a / Math.sqrt(s)), e = AstroMath.atan2d(r, o), 0 > e && (e += 360);
        return [e, i]
    }
}, Coo.factor = [3600, 60, 1], Coo.prototype = {
    setFrame: function(t) {
        this.frame = t
    },
    computeDirCos: function() {
        var t = AstroMath.cosd(this.lat);
        this.x = t * AstroMath.cosd(this.lon), this.y = t * AstroMath.sind(this.lon), this.z = AstroMath.sind(this.lat)
    },
    computeLonLat: function() {
        var t = this.x * this.x + this.y * this.y;
        this.lon = 0, 0 == t ? 0 == this.z ? (this.lon = 0 / 0, this.lat = 0 / 0) : this.lat = this.z > 0 ? 90 : -90 : (this.lon = AstroMath.atan2d(this.y, this.x), this.lat = AstroMath.atan2d(this.z, Math.sqrt(t)), 0 > this.lon && (this.lon += 360))
    },
    dist2: function(t) {
        var e = t.x - this.x,
            i = e * e;
        return e = t.y - this.y, i += e * e, e = t.z - this.z, i += e * e
    },
    distance: function(t) {
        return 0 == t.x && 0 == t.y && 0 == t.z ? 0 / 0 : 0 == this.x && 0 == this.y && 0 == this.z ? 0 / 0 : 2 * AstroMath.asind(.5 * Math.sqrt(this.dist2(t)))
    },
    convertTo: function(t) {
        this.frame.equals(t) || (this.frame.toICRS(this.coo), t.fromICRS(this.coo), this.frame = t, this.lon = this.lat = 0 / 0)
    },
    rotate: function(t) {
        var e, i, o;
        t != Umatrix3 && (e = t[0][0] * this.x + t[0][1] * this.y + t[0][2] * this.z, i = t[1][0] * this.x + t[1][1] * this.y + t[1][2] * this.z, o = t[2][0] * this.x + t[2][1] * this.y + t[2][2] * this.z, this.x = e, this.y = i, this.z = o, this.lon = this.lat = 0 / 0)
    },
    rotate_1: function(t) {
        var e, i, o;
        t != Umatrix3 && (e = t[0][0] * this.x + t[1][0] * this.y + t[2][0] * this.z, i = t[0][1] * this.x + t[1][1] * this.y + t[2][1] * this.z, o = t[0][2] * this.x + t[1][2] * this.y + t[2][2] * this.z, this.x = e, this.y = i, this.z = o, this.lon = this.lat = 0 / 0)
    },
    equals: function(t) {
        return this.x == t.x && this.y == t.y && this.z == t.z
    },
    parse: function(t) {
        var e = t.indexOf("+");
        if (0 > e && (e = t.indexOf("-")), 0 > e && (e = t.indexOf(" ")), 0 > e) return this.lon = 0 / 0, this.lat = 0 / 0, this.prec = 0, !1;
        var i = t.substring(0, e),
            o = t.substring(e);
        return this.lon = this.parseLon(i), this.lat = this.parseLat(o), !0
    },
    parseLon: function(t) {
        var t = t.trim();
        if (0 > t.indexOf(" ")) {
            var e = t.indexOf(".");
            return this.prec = 0 > e ? 0 : t.length - e - 1, parseFloat(t)
        }
        for (var i = new Tokenizer(t, " "), o = 0, r = 0, a = 0; i.hasMore();) {
            var s = i.nextToken(),
                n = s.indexOf(".");
            switch (r += parseFloat(s) * Coo.factor[o], o) {
                case 0:
                    a = 0 > n ? 1 : 2;
                    break;
                case 1:
                    a = 0 > n ? 3 : 4;
                    break;
                case 2:
                    a = 0 > n ? 5 : 4 + s.length - n;
                default:
            }
            o++
        }
        return this.prec = a, 15 * r / 3600
    },
    parseLat: function(t) {
        var e, t = t.trim();
        if ("-" == t.charAt(0) ? (e = -1, t = t.substring(1)) : "-" == t.charAt(0) ? (e = 1, t = t.substring(1)) : e = 1, 0 > t.indexOf(" ")) {
            var i = t.indexOf(".");
            return this.prec = 0 > i ? 0 : t.length - i - 1, parseFloat(t) * e
        }
        for (var o = new Tokenizer(t, " "), r = 0, a = 0, s = 0; o.hasMore();) {
            var n = o.nextToken(),
                h = n.indexOf(".");
            switch (a += parseFloat(n) * Coo.factor[r], r) {
                case 0:
                    s = 0 > h ? 1 : 2;
                    break;
                case 1:
                    s = 0 > h ? 3 : 4;
                    break;
                case 2:
                    s = 0 > h ? 5 : 4 + n.length - h;
                default:
            }
            r++
        }
        return this.prec = s, a * e / 3600
    },
    format: function(t) {
        isNaN(this.lon) && this.computeLonLat();
        var e = "",
            i = "";
        if (t.indexOf("d") >= 0) e = Numbers.format(this.lon, this.prec), i = Numbers.format(this.lat, this.prec);
        else var o = this.lon / 15,
            e = Numbers.toSexagesimal(o, this.prec + 1, !1),
            i = Numbers.toSexagesimal(this.lat, this.prec, !1);
        return this.lat > 0 && (i = "+" + i), t.indexOf("/") >= 0 ? e + " " + i : t.indexOf("2") >= 0 ? [e, i] : e + i
    }
}, Tokenizer.prototype = {
    hasMore: function() {
        return this.pos < this.string.length
    },
    nextToken: function() {
        for (var t = this.pos; this.string.length > t && this.string.charAt(t) == this.sep;) t++;
        for (var e = t; this.string.length > e && this.string.charAt(e) != this.sep;) e++;
        return this.pos = e, this.string.substring(t, e)
    }
}, Strings.trim = function(t, e) {
    for (var i = 0, o = t.length - 1; t.length > i && t.charAt(i) == e;) i++;
    if (i == t.length) return "";
    for (; o > i && t.charAt(o) == e;) o--;
    return t.substring(i, o + 1)
}, Numbers.pow10 = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13, 1e14], Numbers.rndval = [.5, .05, .005, 5e-4, 5e-5, 5e-6, 5e-7, 5e-8, 5e-9, 5e-10, 5e-11, 5e-12, 5e-13, 5e-14, 5e-14], Numbers.format = function(t, e) {
    if (0 >= e) return "" + Math.round(t);
    var i = "" + t,
        o = i.indexOf("."),
        r = o >= 0 ? i.length - o - 1 : 0;
    if (e >= r) {
        0 > o && (i += ".");
        for (var a = 0; e - r > a; a++) i += "0";
        return i
    }
    return i = "" + (t + Numbers.rndval[e]), i.substr(0, o + e + 1)
}, Numbers.toSexagesimal = function(t, e, i) {
    var o = 0 > t ? "-" : i ? "+" : "",
        r = Math.abs(t);
    switch (e) {
        case 1:
            var a = Math.round(r);
            return o + ("" + a);
        case 2:
            return o + Numbers.format(r, 1);
        case 3:
            var a = Math.floor(r),
                s = Math.round(60 * (r - a));
            return o + a + " " + s;
        case 4:
            var a = Math.floor(r),
                s = 60 * (r - a);
            return o + a + " " + Numbers.format(s, 1);
        case 5:
            var a = Math.floor(r),
                s = 60 * (r - a),
                n = Math.floor(s),
                h = Math.round(60 * (s - n));
            return o + a + " " + n + " " + h;
        case 6:
        case 7:
        case 8:
            var a = Math.floor(r);
            10 > a && (a = "0" + a);
            var s = 60 * (r - a),
                n = Math.floor(s);
            10 > n && (n = "0" + n);
            var h = 60 * (s - n);
            return o + a + " " + n + " " + Numbers.format(h, e - 5);
        default:
            return o + Numbers.format(r, 1)
    }
}, CooConversion = function() {
    var t = {};
    return t.GALACTIC_TO_J2000 = [-.0548755604024359, .4941094279435681, -.867666148981161, -.8734370902479237, -.4448296299195045, -.1980763734646737, -.4838350155267381, .7469822444763707, .4559837762325372], t.J2000_TO_GALACTIC = [-.0548755604024359, -.873437090247923, -.4838350155267381, .4941094279435681, -.4448296299195045, .7469822444763707, -.867666148981161, -.1980763734646737, .4559837762325372], t.Transform = function(t, e) {
        t[0] = t[0] * Math.PI / 180, t[1] = t[1] * Math.PI / 180;
        var i = [Math.cos(t[0]) * Math.cos(t[1]), Math.sin(t[0]) * Math.cos(t[1]), Math.sin(t[1])],
            o = [i[0] * e[0] + i[1] * e[1] + i[2] * e[2], i[0] * e[3] + i[1] * e[4] + i[2] * e[5], i[0] * e[6] + i[1] * e[7] + i[2] * e[8]],
            r = Math.sqrt(o[0] * o[0] + o[1] * o[1] + o[2] * o[2]),
            a = [0, 0];
        a[1] = Math.asin(o[2] / r);
        var s = o[0] / r / Math.cos(a[1]),
            n = o[1] / r / Math.cos(a[1]);
        return a[0] = Math.atan2(n, s), 0 > a[0] && (a[0] = a[0] + 2 * Math.PI), a[0] = 180 * a[0] / Math.PI, a[1] = 180 * a[1] / Math.PI, a
    }, t.GalacticToJ2000 = function(e) {
        return t.Transform(e, t.GALACTIC_TO_J2000)
    }, t.J2000ToGalactic = function(e) {
        return t.Transform(e, t.J2000_TO_GALACTIC)
    }, t
}(), Sesame = function() {
    return Sesame = {}, Sesame.cache = {}, Sesame.resolve = function(t, e, i) {
        var o = "http://cds.u-strasbg.fr/cgi-bin/nph-sesame.jsonp?";
        $.ajax({
            url: o,
            data: {
                object: t
            },
            method: "GET",
            dataType: "jsonp",
            success: function(t) {
                t.Target && t.Target.Resolver && t.Target.Resolver ? e(t) : i(t)
            },
            error: i
        })
    }, Sesame
}(), HealpixCache = function() {
    var t = {};
    return t.staticCache = {
        corners: {
            nside8: []
        }
    }, t.dynamicCache = {}, t.lastNside = 8, t.hpxIdxCache = null, t.init = function() {
        var e = new HealpixIndex(8);
        e.init();
        for (var i = HealpixIndex.nside2Npix(8), o = 0; i > o; o++) t.staticCache.corners.nside8[o] = e.corners_nest(o, 1);
        t.hpxIdxCache = e
    }, t.corners_nest = function(e, i) {
        return 8 == i ? t.staticCache.corners.nside8[e] : (i != t.lastNside && (t.hpxIdxCache = new HealpixIndex(i), t.hpxIdxCache.init(), t.lastNside = i), t.hpxIdxCache.corners_nest(e, 1))
    }, t
}(), Utils = Utils || {}, Utils.cssScale = void 0, HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords, Function.prototype.bind || (Function.prototype.bind = function(t) {
    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var e = [].slice,
        i = e.call(arguments, 1),
        o = this,
        r = function() {},
        a = function() {
            return o.apply(this instanceof r ? this : t || {}, i.concat(e.call(arguments)))
        };
    return a.prototype = this.prototype, a
}), $ = $ || jQuery, $.urlParam = function(t, e) {
    return void 0 === e && (e = location.search), decodeURIComponent((RegExp("[?|&]" + t + "=" + "([^&;]+?)(&|#|;|$)").exec(e) || [, ""])[1].replace(/\+/g, "%20")) || null
}, Utils.isNumber = function(t) {
    return !isNaN(parseFloat(t)) && isFinite(t)
}, Utils.debounce = function(t, e) {
    var i = null;
    return function() {
        var o = this,
            r = arguments;
        clearTimeout(i), i = setTimeout(function() {
            t.apply(o, r)
        }, e)
    }
}, Utils.LRUCache = function(t) {
    this._keys = [], this._items = {}, this._expires = {}, this._size = 0, this._maxsize = t || 1024
}, Utils.LRUCache.prototype = {
    set: function(t, e) {
        var i = this._keys,
            o = this._items,
            r = this._expires,
            a = this._size,
            s = this._maxsize;
        a >= s && (i.sort(function(t, e) {
            return r[t] > r[e] ? -1 : r[t] < r[e] ? 1 : 0
        }), a--, delete r[i[a]], delete o[i[a]]), i[a] = t, o[t] = e, r[t] = Date.now(), a++, this._keys = i, this._items = o, this._expires = r, this._size = a
    },
    get: function(t) {
        var e = this._items[t];
        return e && (this._expires[t] = Date.now()), e
    },
    keys: function() {
        return this._keys
    }
}, Color = {}, Color.curIdx = 0, Color.colors = ["#ff0000", "#0000ff", "#99cc00", "#ffff00", "#000066", "#00ffff", "#9900cc", "#0099cc", "#cc9900", "#cc0099", "#00cc99", "#663333", "#ffcc9a", "#ff9acc", "#ccff33", "#660000", "#ffcc33", "#ff00ff", "#00ff00", "#ffffff"], Color.getNextColor = function() {
    var t = Color.colors[Color.curIdx % Color.colors.length];
    return Color.curIdx++, t
}, AladinUtils = function() {
    return {
        xyToView: function(t, e, i, o, r, a, s) {
            return void 0 == s && (s = !1), s ? {
                vx: r / 2 * (1 + a * t) - (r - i) / 2,
                vy: r / 2 * (1 + a * e) - (r - o) / 2
            } : {
                vx: AladinUtils.myRound(r / 2 * (1 + a * t) - (r - i) / 2),
                vy: AladinUtils.myRound(r / 2 * (1 + a * e) - (r - o) / 2)
            }
        },
        viewToXy: function(t, e, i, o, r, a) {
            return {
                x: ((2 * t + (r - i)) / r - 1) / a,
                y: ((2 * e + (r - o)) / r - 1) / a
            }
        },
        radecToViewXy: function(t, e, i, o, r, a, s, n) {
            var h;
            if (o != CooFrameEnum.J2000) {
                var l = CooConversion.J2000ToGalactic([t, e]);
                h = i.project(l[0], l[1])
            } else h = i.project(t, e);
            return h ? AladinUtils.xyToView(h.X, h.Y, r, a, s, n, !0) : null
        },
        myRound: function(t) {
            return 0 > t ? -1 * (0 | -t) : 0 | t
        },
        isHpxPixVisible: function(t, e, i) {
            for (var o = 0; t.length > o; o++)
                if (t[o].vx >= -20 && e + 20 > t[o].vx && t[o].vy >= -20 && i + 20 > t[o].vy) return !0;
            return !1
        },
        ipixToIpix: function(t, e, i) {},
        getZoomFactorForAngle: function(t, e) {
            var i = {
                    ra: 0,
                    dec: 0
                },
                o = {
                    ra: t,
                    dec: 0
                },
                r = new Projection(t / 2, 0);
            r.setProjection(e);
            var a = r.project(i.ra, i.dec),
                s = r.project(o.ra, o.dec),
                n = 1 / (a.X - s.Y);
            return n
        }
    }
}(), ProjectionEnum = {
    SIN: Projection.PROJ_SIN,
    AITOFF: Projection.PROJ_AITOFF
}, CooFrameEnum = function() {
    return {
        J2000: "J2000",
        GAL: "Galactic"
    }
}(), CooFrameEnum.fromString = function(t, e) {
    return t ? (t = t.toLowerCase().replace(/^\s+|\s+$/g, ""), 0 == t.indexOf("j2000") || 0 == t.indexOf("icrs") ? CooFrameEnum.J2000 : 0 == t.indexOf("gal") ? CooFrameEnum.GAL : e ? e : null) : e ? e : null
}, CooFrameEnum.shortName = function(t) {
    return t == CooFrameEnum.J2000 ? "J2000" : t == CooFrameEnum.GAL ? "GAL" : null
}, Downloader = function() {
    var t = 4,
        e = !1,
        i = 700,
        o = function(t) {
            this.view = t, this.nbDownloads = 0, this.dlQueue = [], this.urlsInQueue = {}
        };
    return o.prototype.requestDownload = function(t, e, i) {
        e in this.urlsInQueue || (this.dlQueue.push({
            img: t,
            url: e,
            cors: i
        }), this.urlsInQueue[e] = 1, this.tryDownload())
    }, o.prototype.tryDownload = function() {
        for (; this.dlQueue.length > 0 && t > this.nbDownloads;) this.startDownloadNext()
    }, o.prototype.startDownloadNext = function() {
        var t = this.dlQueue.shift();
        if (t) {
            this.nbDownloads++;
            var e = this;
            t.img.onload = function() {
                e.completeDownload(this, !0)
            }, t.img.onerror = function() {
                e.completeDownload(this, !1)
            }, t.cors ? t.img.crossOrigin = "anonymous" : void 0 !== t.img.crossOrigin && delete t.img.crossOrigin, t.img.src = t.url
        }
    }, o.prototype.completeDownload = function(t, o) {
        if (delete this.urlsInQueue[t.src], t.onerror = null, t.onload = null, this.nbDownloads--, o) {
            if (e) {
                var r = (new Date).getTime();
                t.fadingStart = r, t.fadingEnd = r + i
            }
            this.view.requestRedraw()
        } else t.dlError = !0;
        this.tryDownload()
    }, o
}(), CooGrid = function() {
    function t(t, e, i, o, r, a, s) {
        var n, h = AladinUtils.viewToXy(e, i, o, r, a, s);
        try {
            n = t.unproject(h.x, h.y)
        } catch (l) {
            return null
        }
        return {
            lon: n.ra,
            lat: n.dec
        }
    }
    var e = function() {};
    return e.prototype.redraw = function(e, i, o, r, a, s, n, h) {
        if (!(h > 60)) {
            var l = 0,
                c = 359.9999,
                u = -90,
                d = 90,
                p = t(i, 0, 0, r, a, s, n),
                v = t(i, r - 1, a - 1, r, a, s, n);
            c = Math.min(p.lon, v.lon), l = Math.max(p.lon, v.lon), d = Math.min(p.lat, v.lat), u = Math.max(p.lat, v.lat);
            var f = t(i, 0, a - 1, r, a, s, n);
            c = Math.min(c, f.lon), l = Math.max(l, f.lon), d = Math.min(d, f.lat), u = Math.max(u, f.lat);
            var g = t(i, r - 1, 0, r, a, s, n);
            c = Math.min(c, g.lon), l = Math.max(l, g.lon), d = Math.min(d, g.lat), u = Math.max(u, g.lat);
            var m, y, w = l - c,
                C = u - d;
            h > 10 ? (m = 4, y = 4) : h > 1 ? (m = 1, y = 1) : h > .1 ? (m = .1, y = .1) : (m = .01, y = .01);
            var x = Math.round(c % m) * m,
                S = Math.round(d % y) * y;
            e.lineWidth = 1, e.strokeStyle = "rgb(120,120,255)";
            for (var M = S; u + y > M; M += y) {
                e.beginPath();
                var T;
                if (T = AladinUtils.radecToViewXy(c, M, i, CooFrameEnum.J2000, r, a, s, n)) {
                    e.moveTo(T.vx, T.vy);
                    for (var b = 0, I = c; l + m > I; I += w / 10) b++, T = AladinUtils.radecToViewXy(I, M, i, CooFrameEnum.J2000, r, a, s, n), e.lineTo(T.vx, T.vy), 3 == b && e.strokeText(M.toFixed(2), T.vx, T.vy - 2);
                    e.stroke()
                }
            }
            for (var I = x; l + m > I; I += m) {
                e.beginPath();
                var T;
                if (T = AladinUtils.radecToViewXy(I, d, i, CooFrameEnum.J2000, r, a, s, n)) {
                    e.moveTo(T.vx, T.vy);
                    for (var b = 0, M = d; u + y > M; M += C / 10) b++, T = AladinUtils.radecToViewXy(I, M, i, CooFrameEnum.J2000, r, a, s, n), e.lineTo(T.vx, T.vy), 3 == b && e.strokeText(I.toFixed(2), T.vx, T.vy - 2);
                    e.stroke()
                }
            }
        }
    }, e
}(), Footprint = function() {
    return Footprint = function(t) {
        this.polygons = t, this.overlay = null, this.isShowing = !0, this.isSelected = !1
    }, Footprint.prototype.setOverlay = function(t) {
        this.overlay = t
    }, Footprint.prototype.show = function() {
        this.isShowing || (this.isShowing = !0, this.overlay && this.overlay.reportChange())
    }, Footprint.prototype.hide = function() {
        this.isShowing && (this.isShowing = !1, this.overlay && this.overlay.reportChange())
    }, Footprint.prototype.select = function() {
        this.isSelected || (this.isSelected = !0, this.overlay && this.overlay.reportChange())
    }, Footprint.prototype.deselect = function() {
        this.isSelected && (this.isSelected = !1, this.overlay && this.overlay.reportChange())
    }, Footprint
}(), Popup = function() {
    return Popup = function(t) {
        this.domEl = $('<div class="aladin-popup-container"><div class="aladin-popup"><a class="aladin-closeBtn">&times;</a><div class="aladin-popupTitle"></div><div class="aladin-popupText"></div></div><div class="aladin-popup-arrow"></div></div>'), this.domEl.appendTo(t);
        var e = this;
        this.domEl.find(".aladin-closeBtn").click(function() {
            e.hide()
        })
    }, Popup.prototype.hide = function() {
        this.domEl.hide()
    }, Popup.prototype.show = function() {
        this.domEl.show()
    }, Popup.prototype.setTitle = function(t) {
        this.domEl.find(".aladin-popupTitle").html(t)
    }, Popup.prototype.setText = function(t) {
        this.domEl.find(".aladin-popupText").html(t), this.w = this.domEl.outerWidth(), this.h = this.domEl.outerHeight()
    }, Popup.prototype.setSource = function(t) {
        this.source && (this.source.popup = null), t.popup = this, this.source = t, this.setPosition(t.x, t.y)
    }, Popup.prototype.setPosition = function(t, e) {
        var i = t - this.w / 2,
            o = e - this.h + this.source.catalog.sourceSize / 2;
        this.domEl[0].style.left = i + "px", this.domEl[0].style.top = o + "px"
    }, Popup
}(), Circle = function() {
    return Circle = function(t, e, i) {
        i = i || {}, this.color = i.color || void 0, this.setCenter(t), this.setRadius(e), this.overlay = null, this.isShowing = !0, this.isSelected = !1
    }, Circle.prototype.setOverlay = function(t) {
        this.overlay = t
    }, Circle.prototype.show = function() {
        this.isShowing || (this.isShowing = !0, this.overlay && this.overlay.reportChange())
    }, Circle.prototype.hide = function() {
        this.isShowing && (this.isShowing = !1, this.overlay && this.overlay.reportChange())
    }, Circle.prototype.select = function() {
        this.isSelected || (this.isSelected = !0, this.overlay && this.overlay.reportChange())
    }, Circle.prototype.deselect = function() {
        this.isSelected && (this.isSelected = !1, this.overlay && this.overlay.reportChange())
    }, Circle.prototype.setCenter = function(t) {
        this.centerRaDec = t, this.overlay && this.overlay.reportChange()
    }, Circle.prototype.setRadius = function(t) {
        this.radiusDegrees = t, this.overlay && this.overlay.reportChange()
    }, Circle.prototype.draw = function(t, e, i, o, r, a, s) {
        if (this.isShowing) {
            var n;
            if (i != CooFrameEnum.J2000) {
                var h = CooConversion.J2000ToGalactic([this.centerRaDec[0], this.centerRaDec[1]]);
                n = e.project(h[0], h[1])
            } else n = e.project(this.centerRaDec[0], this.centerRaDec[1]);
            if (n) {
                var l, c = AladinUtils.xyToView(n.X, n.Y, o, r, a, s, !0),
                    u = this.centerRaDec[0],
                    d = this.centerRaDec[1] + (u > 0 ? -this.radiusDegrees : this.radiusDegrees);
                if (i != CooFrameEnum.J2000) {
                    var h = CooConversion.J2000ToGalactic([u, d]);
                    l = e.project(h[0], h[1])
                } else l = e.project(u, d);
                if (l) {
                    var p = AladinUtils.xyToView(l.X, l.Y, o, r, a, s, !0),
                        v = p.vx - c.vx,
                        f = p.vy - c.vy,
                        g = Math.sqrt(v * v + f * f);
                    this.color && (t.strokeStyle = this.color), t.beginPath(), t.arc(c.vx, c.vy, g, 0, 2 * Math.PI, !1), t.stroke()
                }
            }
        }
    }, Circle
}(), Polyline = function() {
    return Polyline = function(t, e) {
        e = e || {}, this.color = e.color || void 0, this.radecArray = t, this.overlay = null, this.isShowing = !0, this.isSelected = !1
    }, Polyline.prototype.setOverlay = function(t) {
        this.overlay = t
    }, Polyline.prototype.show = function() {
        this.isShowing || (this.isShowing = !0, this.overlay && this.overlay.reportChange())
    }, Polyline.prototype.hide = function() {
        this.isShowing && (this.isShowing = !1, this.overlay && this.overlay.reportChange())
    }, Polyline.prototype.select = function() {
        this.isSelected || (this.isSelected = !0, this.overlay && this.overlay.reportChange())
    }, Polyline.prototype.deselect = function() {
        this.isSelected && (this.isSelected = !1, this.overlay && this.overlay.reportChange())
    }, Polyline.prototype.draw = function(t, e, i, o, r, a, s) {
        if (this.isShowing && this.radecArray && !(2 > this.radecArray.length)) {
            this.color && (t.strokeStyle = this.color);
            var n = AladinUtils.radecToViewXy(this.radecArray[0][0], this.radecArray[0][1], e, i, o, r, a, s);
            if (n) {
                t.moveTo(n.vx, n.vy);
                for (var h, l = 1; this.radecArray.length > l && (h = AladinUtils.radecToViewXy(this.radecArray[l][0], this.radecArray[l][1], e, i, o, r, a, s), h); l++) t.lineTo(h.vx, h.vy);
                t.stroke()
            }
        }
    }, Polyline
}(), Overlay = function() {
    return Overlay = function(t) {
        t = t || {}, this.name = t.name || "overlay", this.color = t.color || Color.getNextColor(), this.lineWidth = t.lineWidth || 2, this.overlays = [], this.overlay_items = [], this.isShowing = !0
    }, Overlay.prototype.show = function() {
        this.isShowing || (this.isShowing = !0, this.reportChange())
    }, Overlay.prototype.hide = function() {
        this.isShowing && (this.isShowing = !1, this.reportChange())
    }, Overlay.parseSTCS = function(t) {
        for (var e, i = [], o = t.match(/\S+/g), r = 0, a = o.length; a > r;) {
            var s = o[r].toLowerCase();
            if ("polygon" == s && (e = [], r++, frame = o[r].toLowerCase(), "icrs" == frame || "j2000" == frame)) {
                for (; a > r + 2;) {
                    var n = parseFloat(o[r + 1]);
                    if (isNaN(n)) break;
                    var h = parseFloat(o[r + 2]);
                    e.push([n, h]), r += 2
                }
                e.push(e[0]), i.push(e)
            }
            r++
        }
        return i
    }, Overlay.prototype.addFootprints = function(t) {
        this.overlays = this.overlays.concat(t);
        for (var e = 0, i = t.length; i > e; e++) t[e].setOverlay(this);
        this.view.requestRedraw()
    }, Overlay.prototype.add = function(t) {
        this.overlay_items.push(t), t.setOverlay(this), this.view.requestRedraw()
    }, Overlay.prototype.getFootprint = function(t) {
        return this.footprints.length > t ? this.footprints[t] : null
    }, Overlay.prototype.setView = function(t) {
        this.view = t
    }, Overlay.prototype.removeAll = function() {
        this.overlays = [], this.overlay_items = []
    }, Overlay.prototype.draw = function(t, e, i, o, r, a, s) {
        if (this.isShowing) {
            t.strokeStyle = this.color, t.lineWidth = this.lineWidth, t.beginPath(), xyviews = [];
            for (var n = 0, h = this.overlays.length; h > n; n++) xyviews.push(this.drawFootprint(this.overlays[n], t, e, i, o, r, a, s));
            t.stroke(), t.strokeStyle = Overlay.increase_brightness(this.color, 80), t.beginPath();
            for (var n = 0, h = this.overlays.length; h > n; n++) this.overlays[n].isSelected && this.drawFootprintSelected(t, xyviews[n]);
            t.stroke();
            for (var n = 0; this.overlay_items.length > n; n++) this.overlay_items[n].draw(t, e, i, o, r, a, s)
        }
    }, Overlay.increase_brightness = function(t, e) {
        t = t.replace(/^\s*#|\s*$/g, ""), 3 == t.length && (t = t.replace(/(.)/g, "$1$1"));
        var i = parseInt(t.substr(0, 2), 16),
            o = parseInt(t.substr(2, 2), 16),
            r = parseInt(t.substr(4, 2), 16);
        return "#" + (0 | 256 + i + (256 - i) * e / 100).toString(16).substr(1) + (0 | 256 + o + (256 - o) * e / 100).toString(16).substr(1) + (0 | 256 + r + (256 - r) * e / 100).toString(16).substr(1)
    }, Overlay.prototype.drawFootprint = function(t, e, i, o, r, a, s, n) {
        if (!t.isShowing) return null;
        for (var h = [], l = !1, c = t.polygons, u = 0, d = c.length; d > u; u++) {
            var p;
            if (o != CooFrameEnum.J2000) {
                var v = CooConversion.J2000ToGalactic([c[u][0], c[u][1]]);
                p = i.project(v[0], v[1])
            } else p = i.project(c[u][0], c[u][1]);
            if (!p) return null;
            var f = AladinUtils.xyToView(p.X, p.Y, r, a, s, n);
            h.push(f), !l && r > f.vx && f.vx >= 0 && a >= f.vy && f.vy >= 0 && (l = !0)
        }
        if (l) {
            e.moveTo(h[0].vx, h[0].vy);
            for (var u = 1, d = h.length; d > u; u++) e.lineTo(h[u].vx, h[u].vy)
        }
        return h
    }, Overlay.prototype.drawFootprintSelected = function(t, e) {
        if (e) {
            var i = e;
            t.moveTo(i[0].vx, i[0].vy);
            for (var o = 1, r = i.length; r > o; o++) t.lineTo(i[o].vx, i[o].vy)
        }
    }, Overlay.prototype.reportChange = function() {
        this.view.requestRedraw()
    }, Overlay
}(), cds.Source = function() {
    return cds.Source = function(t, e, i, o) {
        this.ra = t, this.dec = e, this.data = i, this.catalog = null, this.marker = o && o.marker || !1, this.marker && (this.popupTitle = o && o.popupTitle ? o.popupTitle : "", this.popupDesc = o && o.popupDesc ? o.popupDesc : ""), this.isShowing = !0, this.isSelected = !1
    }, cds.Source.prototype.setCatalog = function(t) {
        this.catalog = t
    }, cds.Source.prototype.show = function() {
        this.isShowing || (this.isShowing = !0, this.catalog && this.catalog.reportChange())
    }, cds.Source.prototype.hide = function() {
        this.isShowing && (this.isShowing = !1, this.catalog && this.catalog.reportChange())
    }, cds.Source.prototype.select = function() {
        this.isSelected || (this.isSelected = !0, this.catalog && this.catalog.reportChange())
    }, cds.Source.prototype.deselect = function() {
        this.isSelected && (this.isSelected = !1, this.catalog && this.catalog.reportChange())
    }, cds.Source
}(), ProgressiveCat = function() {
    function t(t, e) {
        var i = ["name", "ID", "ucd", "utype", "unit", "datatype", "arraysize", "width", "precision"],
            o = [],
            r = 0;
        return t.keyRa = t.keyDec = null, $(e).find("FIELD").each(function() {
            for (var e = {}, a = 0; i.length > a; a++) {
                var s = i[a];
                $(this).attr(s) && (e[s] = $(this).attr(s))
            }
            e.ID || (e.ID = "col_" + r), t.keyRa || !e.ucd || 0 != e.ucd.indexOf("pos.eq.ra") && 0 != e.ucd.indexOf("POS_EQ_RA") || (t.keyRa = e.name ? e.name : e.ID), t.keyDec || !e.ucd || 0 != e.ucd.indexOf("pos.eq.dec") && 0 != e.ucd.indexOf("POS_EQ_DEC") || (t.keyDec = e.name ? e.name : e.ID), o.push(e), r++
        }), o
    }

    function e(t, e, i) {
        if (!t.keyRa || !t.keyDec) return [];
        lines = e.split("\n");
        for (var o = [], r = 0; i.length > r; r++) i[r].name ? o.push(i[r].name) : o.push(i[r].ID);
        for (var a = [], s = new Coo, n = 2; lines.length > n; n++) {
            var h = {},
                l = lines[n].split("	");
            if (!(l.length < o.length)) {
                for (var c = 0; o.length > c; c++) h[o[c]] = l[c];
                var u, d;
                Utils.isNumber(h[t.keyRa]) && Utils.isNumber(h[t.keyDec]) ? (u = parseFloat(h[t.keyRa]), d = parseFloat(h[t.keyDec])) : (s.parse(h[t.keyRa] + " " + h[t.keyDec]), u = s.lon, d = s.lat), a.push(new cds.Source(u, d, h))
            }
        }
        return a
    }
    return ProgressiveCat = function(t, e, i, o) {
        o = o || {}, this.type = "progressivecat", this.rootUrl = t, this.frame = CooFrameEnum.fromString(e) || CooFrameEnum.J2000, this.maxOrder = i, this.isShowing = !0, this.name = o.name || "progressive-cat", this.color = o.color || Color.getNextColor(), this.sourceSize = o.sourceSize || 10, this.sourcesCache = new Utils.LRUCache(100), this.cacheCanvas = document.createElement("canvas"), this.cacheCanvas.width = this.sourceSize, this.cacheCanvas.height = this.sourceSize;
        var r = this.cacheCanvas.getContext("2d");
        r.beginPath(), r.strokeStyle = this.color, r.lineWidth = 2, r.moveTo(0, 0), r.lineTo(0, this.sourceSize), r.lineTo(this.sourceSize, this.sourceSize), r.lineTo(this.sourceSize, 0), r.lineTo(0, 0), r.stroke()
    }, ProgressiveCat.prototype = {
        init: function(t) {
            this.view = t, this.level3Sources || this.loadLevel2Sources()
        },
        loadLevel2Sources: function() {
            var i = this;
            $.ajax({
                url: i.rootUrl + "/" + "Norder2/Allsky.xml",
                method: "GET",
                success: function(o) {
                    i.fields = t(i, o), i.level2Sources = e(i, $(o).find("CSV").text(), i.fields), i.loadLevel3Sources()
                },
                error: function(t) {
                    console.log("Something went wrong: " + t)
                }
            })
        },
        loadLevel3Sources: function() {
            var t = this;
            $.ajax({
                url: t.rootUrl + "/" + "Norder3/Allsky.xml",
                method: "GET",
                success: function(i) {
                    t.level3Sources = e(t, $(i).find("CSV").text(), t.fields), t.view.requestRedraw()
                },
                error: function(t) {
                    console.log("Something went wrong: " + t)
                }
            })
        },
        draw: function(t, e, i, o, r, a, s) {
            if (this.isShowing && this.level3Sources && (this.drawSources(this.level2Sources, t, e, i, o, r, a, s), this.drawSources(this.level3Sources, t, e, i, o, r, a, s), this.tilesInView))
                for (var n, h, l, c = 0; this.tilesInView.length > c; c++) l = this.tilesInView[c], h = l[0] + "-" + l[1], n = this.sourcesCache.get(h), n && this.drawSources(n, t, e, i, o, r, a, s)
        },
        drawSources: function(t, e, i, o, r, a, s, n) {
            for (var h = 0, l = t.length; l > h; h++) this.drawSource(t[h], e, i, o, r, a, s, n)
        },
        getSources: function() {
            var t = [];
            if (this.level2Sources && (t = t.concat(this.level2Sources)), this.level3Sources && (t = t.concat(this.level3Sources)), this.tilesInView)
                for (var e, i, o, r = 0; this.tilesInView.length > r; r++) o = this.tilesInView[r], i = o[0] + "-" + o[1], e = this.sourcesCache.get(i), e && (t = t.concat(e));
            return t
        },
        drawSource: function(t, e, i, o, r, a, s, n) {
            if (t.isShowing) {
                var h, l = this.sourceSize;
                if (o != CooFrameEnum.J2000) {
                    var c = CooConversion.J2000ToGalactic([t.ra, t.dec]);
                    h = i.project(c[0], c[1])
                } else h = i.project(t.ra, t.dec);
                if (h) {
                    var u = AladinUtils.xyToView(h.X, h.Y, r, a, s, n);
                    if (u) {
                        if (u.vx > r + l || 0 - l > u.vx || u.vy > a + l || 0 - l > u.vy) return t.x = t.y = void 0, void 0;
                        t.x = u.vx, t.y = u.vy, e.drawImage(this.cacheCanvas, t.x - l / 2, t.y - l / 2)
                    }
                }
            }
        },
        deselectAll: function() {
            for (var t = 0; this.level2Sources.length > t; t++) this.level2Sources[t].deselect();
            for (var t = 0; this.level3Sources.length > t; t++) this.level3Sources[t].deselect();
            var e = this.sourcesCache.keys();
            for (key in e)
                if (this.sourcesCache[key])
                    for (var i = this.sourcesCache[key], t = 0; i.length > t; t++) i[t].deselect()
        },
        show: function() {
            this.isShowing || (this.isShowing = !0, this.reportChange())
        },
        hide: function() {
            this.isShowing && (this.isShowing = !1, this.reportChange())
        },
        reportChange: function() {
            this.view.requestRedraw()
        },
        getTileURL: function(t, e) {
            var i = 1e4 * Math.floor(e / 1e4);
            return this.rootUrl + "/" + "Norder" + t + "/Dir" + i + "/Npix" + e + ".tsv"
        },
        loadNeededTiles: function() {
            this.tilesInView = [], this.otherSources = [];
            var t = this.view.realNorder;
            if (t > this.maxOrder && (t = this.maxOrder), !(3 >= t)) {
                for (var i, o, r = this.view.getVisibleCells(t, this.frame), a = 4; t >= a; a++) {
                    i = [];
                    for (var s = 0; r.length > s; s++) o = Math.floor(r[s].ipix / Math.pow(4, t - a)), 0 > i.indexOf(o) && i.push(o);
                    for (var n = 0; i.length > n; n++) this.tilesInView.push([a, i[n]])
                }
                for (var h, l, s = 0; this.tilesInView.length > s; s++) h = this.tilesInView[s], l = h[0] + "-" + h[1], this.sourcesCache.get(l) || function(t, i, o) {
                    var r = i + "-" + o;
                    $.ajax({
                        url: t.getTileURL(i, o),
                        method: "GET",
                        success: function(i) {
                            t.sourcesCache.set(r, e(t, i, t.fields)), t.view.requestRedraw()
                        },
                        error: function() {
                            t.sourcesCache.set(r, [])
                        }
                    })
                }(this, h[0], h[1])
            }
        }
    }, ProgressiveCat
}(), cds.Catalog = function() {
    return cds.Catalog = function(t) {
        t = t || {}, this.type = "catalog", this.name = t.name || "catalog", this.color = t.color || Color.getNextColor(), this.sourceSize = t.sourceSize || 6, this.markerSize = t.sourceSize || 12, this.shape = t.shape || "square", this.displayLabel = t.displayLabel || !1, this.labelColor = t.labelColor || this.color, this.labelFont = t.labelFont || "10px sans-serif", this.displayLabel && (this.labelColumn = t.labelColumn, this.labelColumn || (this.displayLabel = !1)), this.shape instanceof Image && (this.sourceSize = this.shape.width), this.selectSize = this.sourceSize + 2, this.isShowing = !0, this.indexationNorder = 5, this.sources = [], this.hpxIdx = new HealpixIndex(this.indexationNorder), this.hpxIdx.init(), this.selectionColor = "#00ff00", this.cacheCanvas = cds.Catalog.createShape(this.shape, this.color, this.sourceSize), this.cacheMarkerCanvas = document.createElement("canvas"), this.cacheMarkerCanvas.width = this.markerSize, this.cacheMarkerCanvas.height = this.markerSize;
        var e = this.cacheMarkerCanvas.getContext("2d");
        e.fillStyle = this.color, e.beginPath();
        var i = this.markerSize / 2;
        e.arc(i, i, i - 2, 0, 2 * Math.PI, !1), e.fill(), e.lineWidth = 2, e.strokeStyle = "#ccc", e.stroke(), this.cacheSelectCanvas = document.createElement("canvas"), this.cacheSelectCanvas.width = this.selectSize, this.cacheSelectCanvas.height = this.selectSize;
        var o = this.cacheSelectCanvas.getContext("2d");
        o.beginPath(), o.strokeStyle = this.selectionColor, o.lineWidth = 2, o.moveTo(0, 0), o.lineTo(0, this.selectSize), o.lineTo(this.selectSize, this.selectSize), o.lineTo(this.selectSize, 0), o.lineTo(0, 0), o.stroke()
    }, cds.Catalog.createShape = function(t, e, i) {
        if (t instanceof Image) return t;
        var o = document.createElement("canvas");
        o.width = o.height = i;
        var r = o.getContext("2d");
        return r.beginPath(), r.strokeStyle = e, r.lineWidth = 2, "plus" == t ? (r.moveTo(i / 2, 0), r.lineTo(i / 2, i), r.stroke(), r.moveTo(0, i / 2), r.lineTo(i, i / 2), r.stroke()) : "cross" == t ? (r.moveTo(0, 0), r.lineTo(i - 1, i - 1), r.stroke(), r.moveTo(i - 1, 0), r.lineTo(0, i - 1), r.stroke()) : "rhomb" == t ? (r.moveTo(i / 2, 0), r.lineTo(0, i / 2), r.lineTo(i / 2, i), r.lineTo(i, i / 2), r.lineTo(i / 2, 0), r.stroke()) : "triangle" == t ? (r.moveTo(i / 2, 0), r.lineTo(0, i - 1), r.lineTo(i - 1, i - 1), r.lineTo(i / 2, 0), r.stroke()) : (r.moveTo(0, 0), r.lineTo(0, i), r.lineTo(i, i), r.lineTo(i, 0), r.lineTo(0, 0), r.stroke()), o
    }, cds.Catalog.parseVOTable = function(t, e) {
        function i(t, e) {
            t = t.replace(/^\s+/g, "");
            var i = ["name", "ID", "ucd", "utype", "unit", "datatype", "arraysize", "width", "precision"],
                o = [],
                r = 0;
            $(t).find("FIELD").each(function() {
                for (var t = {}, e = 0; i.length > e; e++) {
                    var a = i[e];
                    $(this).attr(a) && (t[a] = $(this).attr(a))
                }
                t.ID || (t.ID = "col_" + r), o.push(t), r++
            });
            var a, s;
            a = s = null;
            for (var n = 0, h = o.length; h > n; n++) {
                var l = o[n];
                if (!a && l.ucd) {
                    var c = l.ucd.toLowerCase();
                    if (c.indexOf("pos.eq.ra") >= 0 || c.indexOf("pos_eq_ra") >= 0) {
                        a = n;
                        continue
                    }
                }
                if (!s && l.ucd) {
                    var c = l.ucd.toLowerCase();
                    if (c.indexOf("pos.eq.dec") >= 0 || c.indexOf("pos_eq_dec") >= 0) {
                        s = n;
                        continue
                    }
                }
            }
            var u, d, p = [],
                v = new Coo;
            $(t).find("TR").each(function() {
                var t = {},
                    e = 0;
                $(this).find("TD").each(function() {
                    var i = o[e].name ? o[e].name : o[e].id;
                    t[i] = $(this).text(), e++
                });
                var i = o[a].name ? o[a].name : o[a].id,
                    r = o[s].name ? o[s].name : o[s].id;
                Utils.isNumber(t[i]) && Utils.isNumber(t[r]) ? (u = parseFloat(t[i]), d = parseFloat(t[r])) : (v.parse(t[i] + " " + t[r]), u = v.lon, d = v.lat), p.push(new cds.Source(u, d, t))
            }), e && e(p)
        }
        $.ajax({
            url: Aladin.JSONP_PROXY,
            data: {
                url: t
            },
            method: "GET",
            dataType: "text",
            success: function(t) {
                i(t, e)
            }
        })
    }, cds.Catalog.prototype.addSources = function(t) {
        this.sources = this.sources.concat(t);
        for (var e = 0, i = t.length; i > e; e++) t[e].setCatalog(this);
        this.view.requestRedraw()
    }, cds.Catalog.prototype.getSources = function() {
        return this.sources
    }, cds.Catalog.prototype.selectAll = function() {
        if (this.sources)
            for (var t = 0; this.sources.length > t; t++) this.sources[t].select()
    }, cds.Catalog.prototype.deselectAll = function() {
        if (this.sources)
            for (var t = 0; this.sources.length > t; t++) this.sources[t].deselect()
    }, cds.Catalog.prototype.getSource = function(t) {
        return this.sources.length > t ? this.sources[t] : null
    }, cds.Catalog.prototype.setView = function(t) {
        this.view = t
    }, cds.Catalog.prototype.removeAll = cds.Catalog.prototype.clear = function() {
        this.sources = []
    }, cds.Catalog.prototype.draw = function(t, e, i, o, r, a, s) {
        if (this.isShowing) {
            for (var n = 0, h = this.sources.length; h > n; n++) this.drawSource(this.sources[n], t, e, i, o, r, a, s);
            t.strokeStyle = this.selectionColor;
            for (var n = 0, h = this.sources.length; h > n; n++) this.sources[n].isSelected && this.drawSourceSelection(this.sources[n], t);
            if (this.displayLabel) {
                t.fillStyle = this.labelColor, t.font = this.labelFont;
                for (var n = 0, h = this.sources.length; h > n; n++) this.drawSourceLabel(this.sources[n], t)
            }
        }
    }, cds.Catalog.prototype.drawSource = function(t, e, i, o, r, a, s, n) {
        if (t.isShowing) {
            var h, l = this.sourceSize;
            if (o != CooFrameEnum.J2000) {
                var c = CooConversion.J2000ToGalactic([t.ra, t.dec]);
                h = i.project(c[0], c[1])
            } else h = i.project(t.ra, t.dec);
            if (h) {
                var u = AladinUtils.xyToView(h.X, h.Y, r, a, s, n),
                    d = t.popup ? 100 : t.sourceSize;
                if (u) {
                    if (u.vx > r + d || 0 - d > u.vx || u.vy > a + d || 0 - d > u.vy) return t.x = t.y = void 0, void 0;
                    t.x = u.vx, t.y = u.vy, t.marker ? e.drawImage(this.cacheMarkerCanvas, t.x - l / 2, t.y - l / 2) : e.drawImage(this.cacheCanvas, t.x - this.cacheCanvas.width / 2, t.y - this.cacheCanvas.height / 2), t.popup && t.popup.setPosition(t.x, t.y)
                }
            }
        }
    }, cds.Catalog.prototype.drawSourceSelection = function(t, e) {
        if (t && t.isShowing && t.x && t.y) {
            var i = this.selectSize;
            e.drawImage(this.cacheSelectCanvas, t.x - i / 2, t.y - i / 2)
        }
    }, cds.Catalog.prototype.drawSourceLabel = function(t, e) {
        if (t && t.isShowing && t.x && t.y) {
            var i = t.data[this.labelColumn];
            i && e.fillText(i, t.x, t.y)
        }
    }, cds.Catalog.prototype.reportChange = function() {
        this.view.requestRedraw()
    }, cds.Catalog.prototype.show = function() {
        this.isShowing || (this.isShowing = !0, this.reportChange())
    }, cds.Catalog.prototype.hide = function() {
        this.isShowing && (this.isShowing = !1, this.view && this.view.popup && this.view.popup.source && this.view.popup.source.catalog == this && this.view.popup.hide(), this.reportChange())
    }, cds.Catalog
}(), Tile = function() {
    function t(t, e) {
        this.img = t, this.url = e
    }
    return t.isImageOk = function(t) {
        return t.allSkyTexture ? !0 : t.src ? t.complete ? t.naturalWidth !== void 0 && 0 == t.naturalWidth ? !1 : !0 : !1 : !1
    }, t
}(), TileBuffer = function() {
    function t() {
        this.pointer = 0, this.tilesMap = {}, this.tilesArray = Array(e);
        for (var t = 0; e > t; t++) this.tilesArray[t] = new Tile(new Image, null)
    }
    var e = 800;
    return t.prototype.addTile = function(t) {
        if (this.getTile(t)) return null;
        var i = this.tilesArray[this.pointer];
        return null != i.url && (i.img.src = null, delete this.tilesMap[i.url]), this.tilesArray[this.pointer].url = t, this.tilesMap[t] = this.tilesArray[this.pointer], this.pointer++, this.pointer >= e && (this.pointer = 0), this.tilesMap[t]
    }, t.prototype.getTile = function(t) {
        return this.tilesMap[t]
    }, t
}(), ColorMap = function() {
    return ColorMap = function(t) {
        this.view = t, this.reversed = !1, this.map = "native", this.sig = this.signature()
    }, ColorMap.MAPS = {}, ColorMap.MAPS.eosb = {
        name: "Eos B",
        r: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 18, 27, 36, 45, 49, 57, 72, 81, 91, 100, 109, 118, 127, 136, 131, 139, 163, 173, 182, 191, 200, 209, 218, 227, 213, 221, 255, 255, 255, 255, 255, 255, 255, 255, 229, 229, 255, 255, 255, 255, 255, 255, 255, 255, 229, 229, 255, 255, 255, 255, 255, 255, 255, 255, 229, 229, 255, 255, 255, 255, 255, 255, 255, 255, 229, 229, 255, 255, 255, 255, 255, 255, 255, 255, 229, 229, 255, 255, 255, 255, 255, 255, 255, 255, 229, 229, 255, 255, 255, 255, 255, 255, 255, 255, 229, 229, 255, 255, 255, 255, 255, 255, 255, 255, 229, 229, 255, 255, 255, 255, 255, 255, 255, 255, 229, 229, 255, 253, 251, 249, 247, 245, 243, 241, 215, 214, 235, 234, 232, 230, 228, 226, 224, 222, 198, 196, 216, 215, 213, 211, 209, 207, 205, 203, 181, 179, 197, 196, 194, 192, 190, 188, 186, 184, 164, 162, 178, 176, 175, 173, 171, 169, 167, 165, 147, 145, 159, 157, 156, 154, 152, 150, 148, 146, 130, 128, 140, 138, 137, 135, 133, 131, 129, 127, 113, 111, 121, 119, 117, 117],
        g: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 15, 23, 31, 39, 47, 55, 57, 64, 79, 87, 95, 103, 111, 119, 127, 135, 129, 136, 159, 167, 175, 183, 191, 199, 207, 215, 200, 207, 239, 247, 255, 255, 255, 255, 255, 255, 229, 229, 255, 255, 255, 255, 255, 255, 255, 255, 229, 229, 255, 255, 255, 255, 255, 255, 255, 255, 229, 229, 255, 250, 246, 242, 238, 233, 229, 225, 198, 195, 212, 208, 204, 199, 195, 191, 187, 182, 160, 156, 169, 165, 161, 157, 153, 148, 144, 140, 122, 118, 127, 125, 123, 121, 119, 116, 114, 112, 99, 97, 106, 104, 102, 99, 97, 95, 93, 91, 80, 78, 84, 82, 80, 78, 76, 74, 72, 70, 61, 59, 63, 61, 59, 57, 55, 53, 50, 48, 42, 40, 42, 40, 38, 36, 33, 31, 29, 27, 22, 21, 21, 19, 16, 14, 12, 13, 8, 6, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        b: [116, 121, 127, 131, 136, 140, 144, 148, 153, 157, 145, 149, 170, 174, 178, 182, 187, 191, 195, 199, 183, 187, 212, 216, 221, 225, 229, 233, 238, 242, 221, 225, 255, 247, 239, 231, 223, 215, 207, 199, 172, 164, 175, 167, 159, 151, 143, 135, 127, 119, 100, 93, 95, 87, 79, 71, 63, 55, 47, 39, 28, 21, 15, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, ColorMap.MAPS.rainbow = {
        name: "Rainbow",
        r: [0, 4, 9, 13, 18, 22, 27, 31, 36, 40, 45, 50, 54, 58, 61, 64, 68, 69, 72, 74, 77, 79, 80, 82, 83, 85, 84, 86, 87, 88, 86, 87, 87, 87, 85, 84, 84, 84, 83, 79, 78, 77, 76, 71, 70, 68, 66, 60, 58, 55, 53, 46, 43, 40, 36, 33, 25, 21, 16, 12, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 8, 12, 21, 25, 29, 33, 42, 46, 51, 55, 63, 67, 72, 76, 80, 89, 93, 97, 101, 110, 114, 119, 123, 131, 135, 140, 144, 153, 157, 161, 165, 169, 178, 182, 187, 191, 199, 203, 208, 212, 221, 225, 229, 233, 242, 246, 250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
        g: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 8, 16, 21, 25, 29, 38, 42, 46, 51, 55, 63, 67, 72, 76, 84, 89, 93, 97, 106, 110, 114, 119, 127, 131, 135, 140, 144, 152, 157, 161, 165, 174, 178, 182, 187, 195, 199, 203, 208, 216, 220, 225, 229, 233, 242, 246, 250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 250, 242, 238, 233, 229, 221, 216, 212, 208, 199, 195, 191, 187, 178, 174, 170, 165, 161, 153, 148, 144, 140, 131, 127, 123, 119, 110, 106, 102, 97, 89, 85, 80, 76, 72, 63, 59, 55, 51, 42, 38, 34, 29, 21, 17, 12, 8, 0],
        b: [0, 3, 7, 10, 14, 19, 23, 28, 32, 38, 43, 48, 53, 59, 63, 68, 72, 77, 81, 86, 91, 95, 100, 104, 109, 113, 118, 122, 127, 132, 136, 141, 145, 150, 154, 159, 163, 168, 173, 177, 182, 186, 191, 195, 200, 204, 209, 214, 218, 223, 227, 232, 236, 241, 245, 250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 246, 242, 238, 233, 225, 220, 216, 212, 203, 199, 195, 191, 187, 178, 174, 170, 165, 157, 152, 148, 144, 135, 131, 127, 123, 114, 110, 106, 102, 97, 89, 84, 80, 76, 67, 63, 59, 55, 46, 42, 38, 34, 25, 21, 16, 12, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, ColorMap.MAPS_CUSTOM = ["rainbow", "eosb"], ColorMap.MAPS_NAMES = ["native", "grayscale"].concat(ColorMap.MAPS_CUSTOM), ColorMap.prototype.reverse = function(t) {
        this.reversed = t ? t : !this.reversed, this.sig = this.signature(), this.view.requestRedraw()
    }, ColorMap.prototype.signature = function() {
        var t = this.map;
        return this.reversed && (t += " reversed"), t
    }, ColorMap.prototype.update = function(t) {
        this.map = t, this.sig = this.signature(), this.view.requestRedraw()
    }, ColorMap.prototype.apply = function(t) {
        if ("native" == this.sig) return t;
        if (t.cmSig == this.sig) return t.cmImg;
        var e = document.createElement("canvas");
        e.width = t.width, e.height = t.height;
        var i = e.getContext("2d");
        i.drawImage(t, 0, 0);
        var o, r, a, s = i.getImageData(0, 0, e.width, e.height),
            n = s.data,
            h = n.length,
            l = 3;
        "grayscale" == this.map ? l = 1 : ColorMap.MAPS_CUSTOM.indexOf(this.map) >= 0 && (l = 2);
        for (var c = 0; h > c; c += 4) {
            switch (l) {
                case 1:
                    o = r = a = AladinUtils.myRound((n[c] + n[c + 1] + n[c + 2]) / 3);
                    break;
                case 2:
                    this.reversed ? (o = ColorMap.MAPS[this.map].r[255 - n[c]], r = ColorMap.MAPS[this.map].g[255 - n[c + 1]], a = ColorMap.MAPS[this.map].b[255 - n[c + 2]]) : (o = ColorMap.MAPS[this.map].r[n[c]], r = ColorMap.MAPS[this.map].g[n[c + 1]], a = ColorMap.MAPS[this.map].b[n[c + 2]]);
                    break;
                default:
                    o = n[c], r = n[c + 1], a = n[c + 2]
            }
            2 != l && this.reversed && (o = 255 - o, r = 255 - r, a = 255 - a), n[c] = o, n[c + 1] = r, n[c + 2] = a
        }
        return s.data = n, i.putImageData(s, 0, 0), t.cmSig = this.sig, t.cmImg = e, t.cmImg
    }, ColorMap
}(), HpxImageSurvey = function() {
    function t(t, e, i, o, r, a, s, n, h, l, c, u, d, p, v, f, g, m) {
        f = f || 0, g = g || 0, m || (m = !1), h += f, c += f, d += f, l += g, u += g, p += g;
        var y = (i + r + s) / 3,
            w = (o + a + n) / 3,
            y = (i + r + s) / 3,
            w = (o + a + n) / 3;
        t.save(), v && (t.globalAlpha = v);
        var C = .01;
        m && (C = .01), t.beginPath(), t.moveTo((1 + C) * i - y * C, (1 + C) * o - w * C), t.lineTo((1 + C) * r - y * C, (1 + C) * a - w * C), t.lineTo((1 + C) * s - y * C, (1 + C) * n - w * C), t.closePath(), t.clip(), m && (C = .03, i = (1 + C) * i - y * C, o = (1 + C) * o - w * C, r = (1 + C) * r - y * C, a = (1 + C) * a - w * C, s = (1 + C) * s - y * C, n = (1 + C) * n - w * C);
        var x = 1 / (h * (p - u) - c * p + d * u + (c - d) * l);
        t.transform(-(l * (s - r) - u * s + p * r + (u - p) * i) * x, (u * n + l * (a - n) - p * a + (p - u) * o) * x, (h * (s - r) - c * s + d * r + (c - d) * i) * x, -(c * n + h * (a - n) - d * a + (d - c) * o) * x, (h * (p * r - u * s) + l * (c * s - d * r) + (d * u - c * p) * i) * x, (h * (p * a - u * n) + l * (c * n - d * a) + (d * u - c * p) * o) * x), t.drawImage(e, 0, 0), t.restore()
    }
    var e = function(t, i, o, r, a, s) {
        this.id = t, this.name = i, this.rootUrl = "/" === o.slice(-1) ? o.substr(0, o.length - 1) : o, s = s || {}, this.imgFormat = s.imgFormat || "jpg", this.minOrder = s.minOrder || null, this.cooFrame = CooFrameEnum.fromString(r, CooFrameEnum.J2000), this.rootUrl.indexOf("/glimpse360/aladin/data") >= 0 && (this.cooFrame = CooFrameEnum.J2000), this.maxOrder = a, this.allskyTexture = null, this.alpha = 0, this.allskyTextureSize = 0, this.lastUpdateDateNeededTiles = 0;
        for (var n = !1, h = 0; e.SURVEYS.length > h; h++) e.SURVEYS[h].id == this.id && (n = !0);
        n || e.SURVEYS.push({
            id: this.id,
            url: this.rootUrl,
            name: this.name,
            maxOrder: this.maxOrder,
            frame: this.cooFrame
        }), e.SURVEYS_OBJECTS[this.id] = this
    };
    e.UPDATE_NEEDED_TILES_DELAY = 1e3, e.prototype.init = function(t, e) {
        this.view = t, this.cm || (this.cm = new ColorMap(this.view)), this.tileBuffer = this.view.tileBuffer, this.useCors = !1;
        var i = this;
        $.support.cors ? $.ajax({
            type: "GET",
            url: this.rootUrl + "/properties",
            contentType: "text/plain",
            xhrFields: {},
            headers: {},
            success: function() {
                i.useCors = !0, i.retrieveAllskyTextures(), e && e()
            },
            error: function() {
                i.retrieveAllskyTextures(), e && e()
            }
        }) : (this.retrieveAllskyTextures(), e())
    }, e.DEFAULT_SURVEY_ID = "P/DSS2/color", e.SURVEYS_OBJECTS = {}, e.SURVEYS = [{
        id: "P/2MASS/color",
        url: "http://alasky.u-strasbg.fr/2MASS/Color",
        name: "2MASS colored",
        maxOrder: 9,
        frame: "equatorial",
        format: "jpeg"
    }, {
        id: "P/DSS2/color",
        url: "http://alasky.u-strasbg.fr/DSS/DSSColor",
        name: "DSS colored",
        maxOrder: 9,
        frame: "equatorial",
        format: "jpeg"
    }, {
        id: "P/DSS2/red",
        url: "http://alasky.u-strasbg.fr/DSS/DSS2Merged",
        name: "DSS2 Red (F+R)",
        maxOrder: 9,
        frame: "equatorial",
        format: "jpeg fits"
    }, {
        id: "P/Fermi/color",
        url: "http://alasky.u-strasbg.fr/Fermi/Color",
        name: "Fermi color",
        maxOrder: 3,
        frame: "equatorial",
        format: "jpeg"
    }, {
        id: "P/Finkbeiner",
        url: "http://alasky.u-strasbg.fr/FinkbeinerHalpha",
        maxOrder: 3,
        frame: "galactic",
        format: "jpeg fits",
        name: "Halpha"
    }, {
        id: "P/GALEXGR6/AIS/color",
        url: "http://alasky.u-strasbg.fr/GALEX/GR6-02-Color",
        name: "GALEX Allsky Imaging Survey colored",
        maxOrder: 8,
        frame: "equatorial",
        format: "jpeg"
    }, {
        id: "P/IRIS/color",
        url: "http://alasky.u-strasbg.fr/IRISColor",
        name: "IRIS colored",
        maxOrder: 3,
        frame: "galactic",
        format: "jpeg"
    }, {
        id: "P/Mellinger/color",
        url: "http://alasky.u-strasbg.fr/MellingerRGB",
        name: "Mellinger colored",
        maxOrder: 4,
        frame: "galactic",
        format: "jpeg"
    }, {
        id: "P/SDSS9/color",
        url: "http://alasky.u-strasbg.fr/SDSS/DR9/color",
        name: "SDSS9 colored",
        maxOrder: 10,
        frame: "equatorial",
        format: "jpeg"
    }, {
        id: "P/SPITZER/color",
        url: "http://alasky.u-strasbg.fr/SpitzerI1I2I4color",
        name: "IRAC color I1,I2,I4 - (GLIMPSE, SAGE, SAGE-SMC, SINGS)",
        maxOrder: 9,
        frame: "galactic",
        format: "jpeg"
    }, {
        id: "P/VTSS/Ha",
        url: "http://alasky.u-strasbg.fr/VTSS/Ha",
        maxOrder: 3,
        frame: "galactic",
        format: "png jpeg fits",
        name: "VTSS-Ha"
    }, {
        id: "P/XMM/EPIC",
        url: "http://saada.u-strasbg.fr/xmmallsky",
        name: "XMM-Newton stacked EPIC images (no phot. normalization)",
        maxOrder: 7,
        frame: "equatorial",
        format: "png jpeg fits"
    }, {
        id: "P/XMM/PN/color",
        url: "http://saada.unistra.fr/xmmpnsky",
        name: "XMM PN colored",
        maxOrder: 7,
        frame: "equatorial",
        format: "png jpeg"
    }, {
        id: "P/allWISE/color",
        url: "http://alasky.u-strasbg.fr/AllWISE/RGB-W4-W2-W1/",
        name: "AllWISE color",
        maxOrder: 8,
        frame: "equatorial",
        format: "jpeg"
    }, {
        id: "P/GLIMPSE360",
        url: "http://www.spitzer.caltech.edu/glimpse360/aladin/data",
        name: "GLIMPSE360",
        maxOrder: 9,
        frame: "equatorial",
        format: "jpeg"
    }], e.getAvailableSurveys = function() {
        return e.SURVEYS
    }, e.getSurveyInfoFromId = function(t) {
        for (var i = e.getAvailableSurveys(), o = 0; i.length > o; o++)
            if (i[o].id == t) return i[o];
        return null
    }, e.getSurveyFromId = function(t) {
        if (e.SURVEYS_OBJECTS[t]) return e.SURVEYS_OBJECTS[t];
        var i = e.getSurveyInfoFromId(t);
        return i ? new e(i.id, i.name, i.url, i.frame, i.maxOrder) : null
    }, e.prototype.getTileURL = function(t, e) {
        var i = 1e4 * Math.floor(e / 1e4);
        return this.rootUrl + "/" + "Norder" + t + "/Dir" + i + "/Npix" + e + "." + this.imgFormat
    }, e.prototype.retrieveAllskyTextures = function() {
        var t = new Image;
        this.useCors && (t.crossOrigin = "anonymous");
        var e = this;
        t.onload = function() {
            e.allskyTextureSize = t.width / 27, e.allskyTexture = t, e.view.requestRedraw()
        }, t.src = this.rootUrl + "/Norder3/Allsky." + this.imgFormat
    }, e.prototype.redrawAllsky = function(t, e, i) {
        if (!(this.view.curNorder > 6) && this.allskyTexture)
            for (var o, r, a, s = 0, n = 0, h = e.length; h > n; n++)
                if (o = e[n], a = o.ipix, this.allskyTexture && Tile.isImageOk(this.allskyTexture)) {
                    var l = this.allskyTextureSize * Math.floor(a / 27),
                        c = this.allskyTextureSize * (a - 27 * Math.floor(a / 27));
                    if (i > 40) {
                        s = .02, s = 0, r = {
                            x: (o[0].vx + o[2].vx) / 2,
                            y: (o[0].vy + o[2].vy) / 2
                        };
                        for (var u = 0; 4 > u; u++) {
                            var d = {
                                x: o[u].vx - r.x,
                                y: o[u].vy - r.y
                            };
                            o[u].vx += s * d.x, o[u].vy += s * d.y
                        }
                    }
                    this.drawOneTile(t, this.allskyTexture, o, this.allskyTextureSize, null, c, l, !0)
                }
    }, e.prototype.getColorMap = function() {
        return this.cm
    };
    var i = !0;
    return e.prototype.redrawHighres = function(t, o, r) {
        i = !i;
        var a, s, n, h, l, c, u, d, p = (new Date).getTime(),
            v = p - this.lastUpdateDateNeededTiles > e.UPDATE_NEEDED_TILES_DELAY,
            f = r - 1,
            g = [],
            m = [],
            y = {},
            w = !1,
            C = [],
            x = [];
        if (v) {
            var S = [(o[0][0].vx + o[0][1].vx) / 2, (o[0][0].vy + o[0][1].vy) / 2],
                M = o.sort(function(t, e) {
                    var i = [(t[0].vx + t[2].vx) / 2, (t[0].vy + t[2].vy) / 2],
                        o = [(e[0].vx + e[2].vx) / 2, (e[0].vy + e[2].vy) / 2],
                        r = (i[0] - S[0]) * (i[0] - S[0]) + (i[1] - S[1]) * (i[1] - S[1]),
                        a = (o[0] - S[0]) * (o[0] - S[0]) + (o[1] - S[1]) * (o[1] - S[1]);
                    return r - a
                });
            o = M
        }
        for (var T = 0, b = o.length; b > T; T++)
            if (l = o[T], d = l.ipix, u = ~~(d / 4), h = this.getTileURL(f, u), v && f >= 3 && (n = this.tileBuffer.addTile(h), n && x.push({
                    img: n.img,
                    url: h
                })), s = this.getTileURL(r, d), a = this.tileBuffer.getTile(s)) Tile.isImageOk(a.img) ? g.push({
                img: a.img,
                corners: l
            }) : (w = !0, v && !a.img.dlError && C.push({
                img: a.img,
                url: s
            }), f >= 3 && !y[u] && (n = this.tileBuffer.getTile(h), n && Tile.isImageOk(n.img) && (c = this.view.getPositionsInView(u, f), c && m.push({
                img: n.img,
                corners: c,
                ipix: u
            })), y[u] = 1));
            else {
                if (w = !0, v) {
                    var a = this.tileBuffer.addTile(s);
                    a && C.push({
                        img: a.img,
                        url: s
                    })
                }
                f >= 3 && !y[u] && (n = this.tileBuffer.getTile(h), n && Tile.isImageOk(n.img) && (c = this.view.getPositionsInView(u, f), c && m.push({
                    img: n.img,
                    corners: c,
                    ipix: u
                })), y[u] = 1)
            }
        for (var T = 0, b = m.length; b > T; T++) this.drawOneTile(t, m[T].img, m[T].corners, m[T].img.width);
        for (var T = 0, b = g.length; b > T; T++) {
            var I = null,
                P = g[T].img;
            P.fadingStart && P.fadingEnd && P.fadingEnd > p && (I = .2 + .8 * ((p - P.fadingStart) / (P.fadingEnd - P.fadingStart))), this.drawOneTile(t, P, g[T].corners, P.width, I)
        }
        if (v) {
            for (var T = 0, b = C.length; b > T; T++) this.view.downloader.requestDownload(C[T].img, C[T].url, this.useCors);
            for (var T = 0, b = x.length; b > T; T++) this.view.downloader.requestDownload(x[T].img, x[T].url, this.useCors);
            this.lastUpdateDateNeededTiles = p
        }
        w && this.view.requestRedrawAtDate(p + e.UPDATE_NEEDED_TILES_DELAY + 10)
    }, e.prototype.drawOneTile = function(e, i, o, r, a, s, n, h) {
        var l = this.useCors ? this.cm.apply(i) : i;
        t(e, l, o[0].vx, o[0].vy, o[1].vx, o[1].vy, o[3].vx, o[3].vy, r - 1, r - 1, r - 1, 0, 0, r - 1, a, s, n, h), t(e, l, o[1].vx, o[1].vy, o[3].vx, o[3].vy, o[2].vx, o[2].vy, r - 1, 0, 0, r - 1, 0, 0, a, s, n, h)
    }, e.prototype.setAlpha = function(t) {
        t = +t, this.alpha = Math.max(0, Math.min(t, 1)), this.view.requestRedraw()
    }, e.prototype.getAlpha = function() {
        return this.alpha
    }, e
}(), HealpixGrid = function() {
    var t = function() {};
    return t.prototype.redraw = function(t, e, i, o) {
        t.lineWidth = 1, t.strokeStyle = "rgb(150,150,220)", t.beginPath();
        for (var r, a = 0, s = e.length; s > a; a++) r = e[a], ipix = r.ipix, t.moveTo(r[0].vx, r[0].vy), t.lineTo(r[1].vx, r[1].vy), t.lineTo(r[2].vx, r[2].vy);
        t.stroke(), t.strokeStyle = "#FFDDDD", t.beginPath();
        for (var a = 0, s = e.length; s > a; a++) r = e[a], ipix = r.ipix, t.strokeText(o + "/" + ipix, (r[0].vx + r[2].vx) / 2, (r[0].vy + r[2].vy) / 2);
        t.stroke()
    }, t
}(), Location = function() {
    return Location = function(t) {
        this.div = $(t)
    }, Location.prototype.update = function(t, e, i) {
        var o = new Coo(t, e, 7);
        i == CooFrameEnum.J2000 ? this.div.html(o.format("s/")) : this.div.html(o.format("d/"))
    }, Location
}(), View = function() {
    function t(e, i, o, r, a) {
        this.aladin = e, this.options = e.options, this.aladinDiv = this.aladin.aladinDiv, this.popup = new Popup(this.aladinDiv), this.createCanvases(), this.location = i, this.fovDiv = o, this.mustClearCatalog = !0, this.mustRedrawReticle = !0, this.mode = t.PAN, this.minFOV = this.maxFOV = null, this.healpixGrid = new HealpixGrid(this.imageCanvas), this.cooFrame = r ? r : CooFrameEnum.GAL;
        var s, n;
        s = n = 0, this.projectionMethod = ProjectionEnum.SIN, this.projection = new Projection(s, n), this.projection.setProjection(this.projectionMethod), this.zoomLevel = 0, this.zoomFactor = this.computeZoomFactor(this.zoomLevel), this.viewCenter = {
            lon: s,
            lat: n
        }, a && this.setZoom(a), this.imageSurvey = null, this.catalogs = [], this.overlays = [], this.tileBuffer = new TileBuffer, this.fixLayoutDimensions(), this.curNorder = 1, this.realNorder = 1, this.curOverlayNorder = 1, this.dragging = !1, this.dragx = null, this.dragy = null, this.needRedraw = !0, this.downloader = new Downloader(this), this.flagForceRedraw = !1, this.fadingLatestUpdate = null, this.dateRequestRedraw = null, this.showGrid = !1, init(this), this.resizeTimer = null;
        var h = this;
        $(window).resize(function() {
            clearTimeout(h.resizeTimer), h.resizeTimer = setTimeout(function() {
                h.fixLayoutDimensions(h)
            }, 100)
        })
    }

    function e(t, e, i, o) {
        if (t.projection) {
            var r, a = AladinUtils.viewToXy(e, i, t.width, t.height, t.largestDim, t.zoomFactor);
            try {
                r = t.projection.unproject(a.x, a.y)
            } catch (s) {}
            r && t.location.update(r.ra, r.dec, t.cooFrame, o)
        }
    }
    t.PAN = 0, t.SELECT = 1, t.DRAW_SOURCES_WHILE_DRAGGING = !0, t.prototype.createCanvases = function() {
        var t = $(this.aladinDiv);
        t.find(".aladin-imageCanvas").remove(), t.find(".aladin-catalogCanvas").remove(), t.find(".aladin-reticleCanvas").remove(), this.imageCanvas = $("<canvas class='aladin-imageCanvas'></canvas>").appendTo(this.aladinDiv)[0], this.catalogCanvas = $("<canvas class='aladin-catalogCanvas'></canvas>").appendTo(this.aladinDiv)[0], this.reticleCanvas = $("<canvas class='aladin-reticleCanvas'></canvas>").appendTo(this.aladinDiv)[0]
    }, t.prototype.fixLayoutDimensions = function() {
        Utils.cssScale = void 0, this.width = $(this.aladinDiv).width(), this.height = $(this.aladinDiv).height(), this.width = Math.max(this.width, 1), this.height = Math.max(this.height, 1), this.cx = this.width / 2, this.cy = this.height / 2, this.largestDim = Math.max(this.width, this.height), this.smallestDim = Math.min(this.width, this.height), this.ratio = this.largestDim / this.smallestDim, this.mouseMoveIncrement = 160 / this.largestDim, this.imageCtx = this.imageCanvas.getContext("2d"), this.catalogCtx = this.catalogCanvas.getContext("2d"), this.reticleCtx = this.reticleCanvas.getContext("2d"), this.imageCtx.canvas.width = this.width, this.catalogCtx.canvas.width = this.width, this.reticleCtx.canvas.width = this.width, this.imageCtx.canvas.height = this.height, this.catalogCtx.canvas.height = this.height, this.reticleCtx.canvas.height = this.height, this.computeNorder(), this.requestRedraw()
    }, t.prototype.setMode = function(e) {
        this.mode = e, this.mode == t.SELECT ? this.setCursor("crosshair") : this.setCursor("default")
    }, t.prototype.setCursor = function(t) {
        this.reticleCanvas.style.cursor != t && (this.reticleCanvas.style.cursor = t)
    }, t.prototype.getCanvasDataURL = function() {
        var t = document.createElement("canvas");
        t.width = this.width, t.height = this.height;
        var e = t.getContext("2d");
        return e.drawImage(this.imageCanvas, 0, 0), e.drawImage(this.catalogCanvas, 0, 0), e.drawImage(this.reticleCanvas, 0, 0), t.toDataURL("image/png")
    }, computeFov = function(t) {
        var e = doComputeFov(t, t.zoomFactor);
        return t.mouseMoveIncrement = e / t.imageCanvas.width, e
    }, doComputeFov = function(t, e) {
        if (1 > t.zoomFactor) fov = 180;
        else {
            var i = AladinUtils.viewToXy(0, t.cy, t.width, t.height, t.largestDim, e),
                o = t.projection.unproject(i.x, i.y),
                r = AladinUtils.viewToXy(t.imageCanvas.width - 1, t.cy, t.width, t.height, t.largestDim, e),
                a = t.projection.unproject(r.x, r.y);
            fov = new Coo(o.ra, o.dec).distance(new Coo(a.ra, a.dec))
        }
        return fov
    }, updateFovDiv = function(t) {
        if (isNaN(t.fov)) return t.fovDiv.html("FoV:"), void 0;
        var e;
        e = t.fov > 1 ? Math.round(100 * t.fov) / 100 + "Â°" : 60 * t.fov > 1 ? Math.round(100 * 60 * t.fov) / 100 + "'" : Math.round(100 * 3600 * t.fov) / 100 + '"', t.fovDiv.html("FoV: " + e)
    }, createListeners = function(i) {
        var o = !1;
        "ontouchstart" in window && (o = !0), onDblClick = function(t) {
            var e = i.imageCanvas.relMouseCoords(t),
                o = AladinUtils.viewToXy(e.x, e.y, i.width, i.height, i.largestDim, i.zoomFactor);
            try {
                var r = i.projection.unproject(o.x, o.y)
            } catch (a) {
                return
            }
            radec = [], radec = i.cooFrame == CooFrameEnum.GAL ? CooConversion.GalacticToJ2000([r.ra, r.dec]) : [r.ra, r.dec], i.pointTo(radec[0], radec[1])
        }, o || $(i.reticleCanvas).dblclick(onDblClick), $(i.reticleCanvas).bind("mousedown touchstart", function(e) {
            var o = i.imageCanvas.relMouseCoords(e);
            return e.originalEvent && e.originalEvent.targetTouches ? (i.dragx = e.originalEvent.targetTouches[0].clientX, i.dragy = e.originalEvent.targetTouches[0].clientY) : (i.dragx = o.x, i.dragy = o.y), i.dragging = !0, i.mode == t.PAN ? i.setCursor("move") : i.mode == t.SELECT && (i.selectStartCoo = {
                x: i.dragx,
                y: i.dragy
            }), !1
        });
        var r;
        $(i.reticleCanvas).bind("mouseup mouseout touchend", function(e) {
            if (i.mode == t.SELECT && i.dragging && i.aladin.fire("selectend", i.getObjectsInBBox(i.selectStartCoo.x, i.selectStartCoo.y, i.dragx - i.selectStartCoo.x, i.dragy - i.selectStartCoo.y)), i.dragging && (i.setCursor("default"), i.dragging = !1), i.mustClearCatalog = !0, i.mustRedrawReticle = !0, i.dragx = i.dragy = null, "mouseout" === e.type) return i.requestRedraw(), void 0;
            var o = i.imageCanvas.relMouseCoords(e),
                a = i.closestObjects(o.x, o.y, 5);
            if (a) {
                var s = a[0];
                s.marker ? (i.popup.setTitle(s.popupTitle), i.popup.setText(s.popupDesc), i.popup.setSource(s), i.popup.show()) : (i.aladin.objClickedFunction && i.aladin.objClickedFunction(s), r = s)
            } else i.aladin.objClickedFunction && r && (r = null, i.aladin.objClickedFunction(null));
            i.refreshProgressiveCats(), i.requestRedraw()
        });
        var a;
        $(i.reticleCanvas).bind("mousemove touchmove", function(r) {
            r.preventDefault();
            var s = i.imageCanvas.relMouseCoords(r);
            if (!i.dragging || o) {
                if (e(i, s.x, s.y, !0), !i.dragging && !i.mode == t.SELECT) {
                    var n = i.closestObjects(s.x, s.y, 5);
                    n ? (i.setCursor("pointer"), i.aladin.objHoveredFunction && n[0] != a && i.aladin.objHoveredFunction(n[0]), a = n[0]) : (i.setCursor("default"), i.aladin.objHoveredFunction && a && (a = null, i.aladin.objHoveredFunction(null)))
                }
                if (!o) return
            }
            var h, l, c, u;
            if (r.originalEvent && r.originalEvent.targetTouches) {
                h = r.originalEvent.targetTouches[0].clientX - i.dragx, l = r.originalEvent.targetTouches[0].clientY - i.dragy;
                var d = AladinUtils.viewToXy(r.originalEvent.targetTouches[0].clientX, r.originalEvent.targetTouches[0].clientY, i.width, i.height, i.largestDim, i.zoomFactor),
                    p = AladinUtils.viewToXy(i.dragx, i.dragy, i.width, i.height, i.largestDim, i.zoomFactor);
                c = i.projection.unproject(d.x, d.y), u = i.projection.unproject(p.x, p.y)
            } else {
                h = s.x - i.dragx, l = s.y - i.dragy;
                var d = AladinUtils.viewToXy(s.x, s.y, i.width, i.height, i.largestDim, i.zoomFactor),
                    p = AladinUtils.viewToXy(i.dragx, i.dragy, i.width, i.height, i.largestDim, i.zoomFactor);
                c = i.projection.unproject(d.x, d.y), u = i.projection.unproject(p.x, p.y)
            }
            return r.originalEvent && r.originalEvent.targetTouches ? (i.dragx = r.originalEvent.targetTouches[0].clientX, i.dragy = r.originalEvent.targetTouches[0].clientY) : (i.dragx = s.x, i.dragy = s.y), i.mode == t.SELECT ? (i.requestRedraw(), void 0) : (i.viewCenter.lon += u.ra - c.ra, i.viewCenter.lat += u.dec - c.dec, i.viewCenter.lat > 90 ? i.viewCenter.lat = 90 : -90 > i.viewCenter.lat && (i.viewCenter.lat = -90), 0 > i.viewCenter.lon ? i.viewCenter.lon = 360 + i.viewCenter.lon : i.viewCenter.lon > 360 && (i.viewCenter.lon = i.viewCenter.lon % 360), i.requestRedraw(), void 0)
        }), $(i.aladinDiv).onselectstart = function() {
            return !1
        }, $(i.reticleCanvas).bind("mousewheel", function(t, e) {
            t.preventDefault(), t.stopPropagation();
            var o = i.zoomLevel;
            return e > 0 ? o += 1 : o -= 1, i.setZoomLevel(o), !1
        })
    }, init = function(t) {
        var e = new Stats;
        e.domElement.style.top = "50px", $("#aladin-statsDiv").length > 0 && $("#aladin-statsDiv")[0].appendChild(e.domElement), t.stats = e, createListeners(t), t.displayHpxGrid = !1, t.displaySurvey = !0, t.displayCatalog = !1, t.displayReticle = !0, t.fov = computeFov(t), updateFovDiv(t), t.redraw()
    }, t.prototype.requestRedrawAtDate = function(t) {
        this.dateRequestDraw = t
    }, t.prototype.redraw = function() {
        var e = this.needRedraw;
        requestAnimFrame(this.redraw.bind(this));
        var i = (new Date).getTime();
        if (this.dateRequestDraw && i > this.dateRequestDraw) this.dateRequestDraw = null;
        else if (!this.needRedraw) {
            if (!this.flagForceRedraw) return;
            this.flagForceRedraw = !1
        }
        this.stats.update();
        var o = this.imageCtx;
        o.clearRect(0, 0, this.imageCanvas.width, this.imageCanvas.height), this.projectionMethod == ProjectionEnum.SIN && (this.fov > 80 ? (o.fillStyle = "rgb(0,0,0)", o.beginPath(), o.arc(this.cx, this.cy, this.cx * this.zoomFactor, 0, 2 * Math.PI, !0), o.fill()) : 60 > this.fov && (o.fillStyle = "rgb(0,0,0)", o.fillRect(0, 0, this.imageCanvas.width, this.imageCanvas.height))), this.projection ? this.projection.setCenter(this.viewCenter.lon, this.viewCenter.lat) : this.projection = new Projection(this.viewCenter.lon, this.viewCenter.lat), this.projection.setProjection(this.projectionMethod);
        var r = this.getVisibleCells(3),
            a = null;
        if (this.curNorder >= 3 && (a = 3 == this.curNorder ? r : this.getVisibleCells(this.curNorder)), this.imageSurvey && this.imageSurvey.isReady && this.displaySurvey && (this.imageSurvey.redrawAllsky(o, r, this.fov, this.curNorder), this.curNorder >= 3 && this.imageSurvey.redrawHighres(o, a, this.curNorder)), this.overlayImageSurvey && this.overlayImageSurvey.isReady) {
            if (o.globalAlpha = this.overlayImageSurvey.getAlpha(), this.fov > 50 && this.overlayImageSurvey.redrawAllsky(o, r, this.fov, this.curOverlayNorder), this.curOverlayNorder >= 3) {
                var s = Math.min(this.curOverlayNorder, this.overlayImageSurvey.maxOrder);
                s != this.curNorder && (a = this.getVisibleCells(s)), this.overlayImageSurvey.redrawHighres(o, a, s)
            }
            o.globalAlpha = 1
        }
        this.displayHpxGrid && (a && this.curNorder > 3 ? this.healpixGrid.redraw(o, a, this.fov, this.curNorder) : this.healpixGrid.redraw(o, r, this.fov, 3)), this.showGrid && (null == this.cooGrid && (this.cooGrid = new CooGrid), this.cooGrid.redraw(o, this.projection, this.cooFrame, this.width, this.height, this.largestDim, this.zoomFactor, this.fov));
        var n = this.catalogCtx,
            h = !1;
        if (this.mustClearCatalog && (n.clearRect(0, 0, this.width, this.height), h = !0, this.mustClearCatalog = !1), this.catalogs && this.catalogs.length > 0 && this.displayCatalog && (!this.dragging || t.DRAW_SOURCES_WHILE_DRAGGING)) {
            h || (n.clearRect(0, 0, this.width, this.height), h = !0);
            for (var l = 0; this.catalogs.length > l; l++) this.catalogs[l].draw(n, this.projection, this.cooFrame, this.width, this.height, this.largestDim, this.zoomFactor, this.cooFrame)
        }
        var c = this.catalogCtx;
        if (this.overlays && this.overlays.length > 0 && (!this.dragging || t.DRAW_SOURCES_WHILE_DRAGGING)) {
            h || (n.clearRect(0, 0, this.width, this.height), h = !0);
            for (var l = 0; this.overlays.length > l; l++) this.overlays[l].draw(c, this.projection, this.cooFrame, this.width, this.height, this.largestDim, this.zoomFactor, this.cooFrame)
        }
        this.mode == t.SELECT && (mustRedrawReticle = !0);
        var u = this.reticleCtx;
        if ((this.mustRedrawReticle || this.mode == t.SELECT) && u.clearRect(0, 0, this.width, this.height), this.displayReticle) {
            if (!this.reticleCache) {
                var d = document.createElement("canvas"),
                    p = this.options.reticleSize;
                d.width = p, d.height = p;
                var v = d.getContext("2d");
                v.lineWidth = 2, v.strokeStyle = this.options.reticleColor, v.beginPath(), v.moveTo(p / 2, p / 2 + (p / 2 - 1)), v.lineTo(p / 2, p / 2 + 2), v.moveTo(p / 2, p / 2 - (p / 2 - 1)), v.lineTo(p / 2, p / 2 - 2), v.moveTo(p / 2 + (p / 2 - 1), p / 2), v.lineTo(p / 2 + 2, p / 2), v.moveTo(p / 2 - (p / 2 - 1), p / 2), v.lineTo(p / 2 - 2, p / 2), v.stroke(), this.reticleCache = d
            }
            u.drawImage(this.reticleCache, this.width / 2 - this.reticleCache.width / 2, this.height / 2 - this.reticleCache.height / 2), this.mustRedrawReticle = !1
        }
        if (this.mode == t.SELECT && this.dragging) {
            u.fillStyle = "rgba(100, 240, 110, 0.25)";
            var f = this.dragx - this.selectStartCoo.x,
                g = this.dragy - this.selectStartCoo.y;
            u.fillRect(this.selectStartCoo.x, this.selectStartCoo.y, f, g)
        }
        e == this.needRedraw && (this.needRedraw = !1), this.dragging || this.updateObjectsLookup()
    }, t.prototype.forceRedraw = function() {
        this.flagForceRedraw = !0
    }, t.prototype.refreshProgressiveCats = function() {
        if (this.catalogs)
            for (var t = 0; this.catalogs.length > t; t++) "progressivecat" == this.catalogs[t].type && this.catalogs[t].loadNeededTiles()
    }, t.prototype.getVisibleCells = function(t, e) {
        !e && this.imageSurvey && (e = this.imageSurvey.cooFrame);
        var i, o = [],
            r = [],
            a = new SpatialVector,
            s = Math.pow(2, t),
            n = HealpixIndex.nside2Npix(s),
            h = null;
        if (this.fov > 80) {
            i = [];
            for (var l = 0; n > l; l++) i.push(l)
        } else {
            var c = new HealpixIndex(s);
            c.init();
            var u = new SpatialVector,
                d = AladinUtils.viewToXy(this.cx, this.cy, this.width, this.height, this.largestDim, this.zoomFactor),
                p = this.projection.unproject(d.x, d.y),
                v = [];
            e && e != this.cooFrame ? e == CooFrameEnum.J2000 ? v = CooConversion.GalacticToJ2000([p.ra, p.dec]) : e == CooFrameEnum.GAL && (v = CooConversion.J2000ToGalactic([p.ra, p.dec])) : v = [p.ra, p.dec], u.set(v[0], v[1]);
            var f = .5 * this.fov * this.ratio;
            f *= this.fov > 60 ? 1.6 : this.fov > 12 ? 1.45 : 1.1, i = c.queryDisc(u, f * Math.PI / 180, !0, !0);
            var g = Utils.radecToPolar(v[0], v[1]);
            h = c.ang2pix_nest(g.theta, g.phi), i.unshift(h)
        }
        for (var l, m, y, w = 0, C = i.length; C > w; w++)
            if (l = i[w], !(l == h && w > 0)) {
                var x = [];
                corners = HealpixCache.corners_nest(l, s);
                for (var S = 0; 4 > S; S++) {
                    if (a.setXYZ(corners[S].x, corners[S].y, corners[S].z), e && e != this.cooFrame) {
                        if (e == CooFrameEnum.J2000) {
                            var p = CooConversion.J2000ToGalactic([a.ra(), a.dec()]);
                            m = p[0], y = p[1]
                        } else if (e == CooFrameEnum.GAL) {
                            var p = CooConversion.GalacticToJ2000([a.ra(), a.dec()]);
                            m = p[0], y = p[1]
                        }
                    } else m = a.ra(), y = a.dec();
                    r[S] = this.projection.project(m, y)
                }
                if (null != r[0] && null != r[1] && null != r[2] && null != r[3]) {
                    for (var S = 0; 4 > S; S++) x[S] = AladinUtils.xyToView(r[S].X, r[S].Y, this.width, this.height, this.largestDim, this.zoomFactor);
                    if (!(0 > x[0].vx && 0 > x[1].vx && 0 > x[2].vx && 0 > x[3].vx || 0 > x[0].vy && 0 > x[1].vy && 0 > x[2].vy && 0 > x[3].vy || x[0].vx >= this.width && x[1].vx >= this.width && x[2].vx >= this.width && x[3].vx >= this.width || x[0].vy >= this.height && x[1].vy >= this.height && x[2].vy >= this.height && x[3].vy >= this.height)) {
                        if (this.projection.PROJECTION == ProjectionEnum.AITOFF) {
                            var M = x[0].vx - x[2].vx,
                                T = x[0].vy - x[2].vy,
                                b = Math.sqrt(M * M + T * T);
                            if (b > this.largestDim / 5) continue;
                            if (M = x[1].vx - x[3].vx, T = x[1].vy - x[3].vy, b = Math.sqrt(M * M + T * T), b > this.largestDim / 5) continue
                        }
                        x.ipix = l, o.push(x)
                    }
                }
            }
        return o
    }, t.prototype.getPositionsInView = function(t, e) {
        for (var i, o, r = [], a = new SpatialVector, s = Math.pow(2, e), n = [], h = HealpixCache.corners_nest(t, s), l = 0; 4 > l; l++) {
            if (a.setXYZ(h[l].x, h[l].y, h[l].z), this.imageSurvey && this.imageSurvey.cooFrame != this.cooFrame) {
                if (this.imageSurvey.cooFrame == CooFrameEnum.J2000) {
                    var c = CooConversion.J2000ToGalactic([a.ra(), a.dec()]);
                    i = c[0], o = c[1]
                } else if (this.imageSurvey.cooFrame == CooFrameEnum.GAL) {
                    var c = CooConversion.GalacticToJ2000([a.ra(), a.dec()]);
                    i = c[0], o = c[1]
                }
            } else i = a.ra(), o = a.dec();
            r[l] = this.projection.project(i, o)
        }
        if (null == r[0] || null == r[1] || null == r[2] || null == r[3]) return null;
        for (var l = 0; 4 > l; l++) n[l] = AladinUtils.xyToView(r[l].X, r[l].Y, this.width, this.height, this.largestDim, this.zoomFactor);
        return n
    }, t.prototype.computeZoomFactor = function(t) {
        return t > 0 ? AladinUtils.getZoomFactorForAngle(180 / Math.pow(1.15, t), this.projectionMethod) : 1 + .1 * t
    }, t.prototype.setZoom = function(t) {
        if (!(0 > t || t > 180)) {
            var e = Math.log(180 / t) / Math.log(1.15);
            this.setZoomLevel(e)
        }
    }, t.prototype.setShowGrid = function(t) {
        this.showGrid = t, this.requestRedraw()
    }, t.prototype.setZoomLevel = function(t) {
        if (this.minFOV || this.maxFOV) {
            var e = doComputeFov(this, this.computeZoomFactor(Math.max(-2, t)));
            if (this.maxFOV && e > this.maxFOV || this.minFOV && this.minFOV > e) return
        }
        if (this.zoomLevel = this.projectionMethod == ProjectionEnum.SIN ? Math.max(-2, t) : Math.max(-7, t), this.zoomFactor = this.computeZoomFactor(this.zoomLevel), this.fov = computeFov(this), updateFovDiv(this), this.computeNorder(), this.forceRedraw(), this.requestRedraw(), !this.debounceProgCatOnZoom) {
            var i = this;
            this.debounceProgCatOnZoom = Utils.debounce(function() {
                i.refreshProgressiveCats()
            }, 300)
        }
        this.debounceProgCatOnZoom()
    }, t.prototype.computeNorder = function() {
        var t = this.fov / this.largestDim,
            e = 512,
            i = HealpixIndex.calculateNSide(3600 * e * t),
            o = Math.log(i) / Math.log(2);
        o = Math.max(o, 1), this.realNorder = o, 50 >= this.fov && 2 >= o && (o = 3), this.imageSurvey && 2 >= o && this.imageSurvey.minOrder > 2 && (o = this.imageSurvey.minOrder);
        var r = o;
        this.imageSurvey && o > this.imageSurvey.maxOrder && (o = this.imageSurvey.maxOrder), this.overlayImageSurvey && r > this.overlayImageSurvey.maxOrder && (r = this.overlayImageSurvey.maxOrder), o > HealpixIndex.ORDER_MAX && (o = HealpixIndex.ORDER_MAX), r > HealpixIndex.ORDER_MAX && (r = HealpixIndex.ORDER_MAX), this.curNorder = o, this.curOverlayNorder = r
    }, t.prototype.untaintCanvases = function() {
        this.createCanvases(), createListeners(this), this.fixLayoutDimensions()
    }, t.prototype.setOverlayImageSurvey = function(t, e) {
        if (!t) return this.overlayImageSurvey = null, this.requestRedraw(), void 0;
        $.support.cors && this.overlayImageSurvey && !this.overlayImageSurvey.useCors && this.untaintCanvases();
        var i;
        "string" == typeof t ? (i = HpxImageSurvey.getSurveyFromId(t), i || (i = HpxImageSurvey.getSurveyFromId(HpxImageSurvey.DEFAULT_SURVEY_ID))) : i = t, i.isReady = !1, this.overlayImageSurvey = i;
        var o = this;
        i.init(this, function() {
            o.computeNorder(), i.isReady = !0, o.requestRedraw(), o.updateObjectsLookup(), e && e()
        })
    }, t.prototype.setUnknownSurveyIfNeeded = function() {
        i && (this.setImageSurvey(i), i = void 0)
    };
    var i = void 0;
    return t.prototype.setImageSurvey = function(t, e) {
        if (t) {
            $.support.cors && this.imageSurvey && !this.imageSurvey.useCors && this.untaintCanvases();
            var o;
            "string" == typeof t ? (o = HpxImageSurvey.getSurveyFromId(t), o || (o = HpxImageSurvey.getSurveyFromId(HpxImageSurvey.DEFAULT_SURVEY_ID), i = t, console.log(i))) : o = t, this.tileBuffer = new TileBuffer, o.isReady = !1, this.imageSurvey = o;
            var r = this;
            o.init(this, function() {
                r.computeNorder(), o.isReady = !0, r.requestRedraw(), r.updateObjectsLookup(), e && e()
            })
        }
    }, t.prototype.requestRedraw = function() {
        this.needRedraw = !0
    }, t.prototype.changeProjection = function(t) {
        this.projectionMethod = t, this.requestRedraw()
    }, t.prototype.changeFrame = function(t) {
        if (this.cooFrame = t, this.cooFrame == CooFrameEnum.GAL) {
            var e = CooConversion.J2000ToGalactic([this.viewCenter.lon, this.viewCenter.lat]);
            this.viewCenter.lon = e[0], this.viewCenter.lat = e[1]
        } else if (this.cooFrame == CooFrameEnum.J2000) {
            var i = CooConversion.GalacticToJ2000([this.viewCenter.lon, this.viewCenter.lat]);
            this.viewCenter.lon = i[0], this.viewCenter.lat = i[1]
        }
        this.requestRedraw()
    }, t.prototype.showHealpixGrid = function(t) {
        this.displayHpxGrid = t, this.requestRedraw()
    }, t.prototype.showSurvey = function(t) {
        this.displaySurvey = t, this.requestRedraw()
    }, t.prototype.showCatalog = function(t) {
        this.displayCatalog = t, this.displayCatalog || (this.mustClearCatalog = !0), this.requestRedraw()
    }, t.prototype.showReticle = function(t) {
        this.displayReticle = t, this.mustRedrawReticle = !0, this.requestRedraw()
    }, t.prototype.pointTo = function(t, e) {
        if (t = parseFloat(t), e = parseFloat(e), !isNaN(t) && !isNaN(e)) {
            if (this.cooFrame == CooFrameEnum.J2000) this.viewCenter.lon = t, this.viewCenter.lat = e;
            else if (this.cooFrame == CooFrameEnum.GAL) {
                var i = CooConversion.J2000ToGalactic([t, e]);
                this.viewCenter.lon = i[0], this.viewCenter.lat = i[1]
            }
            this.forceRedraw(), this.requestRedraw();
            var o = this;
            setTimeout(function() {
                o.refreshProgressiveCats()
            }, 1e3)
        }
    }, t.prototype.makeUniqLayerName = function(t) {
        if (!this.layerNameExists(t)) return t;
        for (var e = 1;; ++e) {
            var i = t + "_" + e;
            if (!this.layerNameExists(i)) return i
        }
    }, t.prototype.layerNameExists = function(t) {
        for (var e = this.catalogs, i = 0; e.length > i; i++)
            if (t == e[i].name) return !0;
        return !1
    }, t.prototype.removeLayers = function() {
        this.catalogs = [], this.overlays = [], this.requestRedraw()
    }, t.prototype.addCatalog = function(t) {
        t.name = this.makeUniqLayerName(t.name), this.catalogs.push(t), "catalog" == t.type ? t.setView(this) : "progressivecat" == t.type && t.init(this)
    }, t.prototype.addOverlay = function(t) {
        this.overlays.push(t), t.setView(this)
    }, t.prototype.getObjectsInBBox = function(t, e, i, o) {
        0 > i && (t += i, i = -i), 0 > o && (e += o, o = -o);
        var r, a, s, n = [];
        if (this.catalogs)
            for (var h = 0; this.catalogs.length > h; h++)
                if (r = this.catalogs[h], r.isShowing) {
                    a = r.getSources();
                    for (var l = 0; a.length > l; l++) s = a[l], s.isShowing && s.x && s.y && s.x >= t && t + i >= s.x && s.y >= e && e + o >= s.y && n.push(s)
                }
        return n
    }, t.prototype.updateObjectsLookup = function() {
        this.objLookup = [];
        var t, e, i, o, r;
        if (this.catalogs)
            for (var a = 0; this.catalogs.length > a; a++)
                if (t = this.catalogs[a], t.isShowing) {
                    e = t.getSources();
                    for (var s = 0; e.length > s; s++) i = e[s], i.isShowing && i.x && i.y && (o = i.x, r = i.y, this.objLookup[o] || (this.objLookup[o] = []), this.objLookup[o][r] || (this.objLookup[o][r] = []), this.objLookup[o][r].push(i))
                }
    }, t.prototype.closestObjects = function(t, e, i) {
        if (!this.objLookup) return null;
        for (var o, r, a = 0; i >= a; a++) {
            o = r = null;
            for (var s = -i; i >= s; s++)
                if (this.objLookup[t + s])
                    for (var n = -i; i >= n; n++)
                        if (this.objLookup[t + s][e + n])
                            if (o) {
                                var h = s * s + n * n;
                                r > h && (r = h, o = this.objLookup[t + s][e + n])
                            } else o = this.objLookup[t + s][e + n];
            if (o) return o
        }
        return null
    }, t
}(), Aladin = function() {
    var t = function(e, i) {
        if (0 == $(e).length) return console.log("Could not find div " + e + ". Aborting creation of Aladin Lite instance"), void 0;
        HealpixCache.init();
        var o = this;
        if (void 0 === i && (i = this.getOptionsFromQueryString()), i = i || {}, "zoom" in i) {
            var r = i.zoom;
            delete i.zoom, i.fov = r
        }
        var a = {};
        for (var s in t.DEFAULT_OPTIONS) a[s] = void 0 !== i[s] ? i[s] : t.DEFAULT_OPTIONS[s];
        for (var s in i) void 0 === t.DEFAULT_OPTIONS[s] && (a[s] = i[s]);
        this.options = a, this.aladinDiv = e, $(e).addClass("aladin-container");
        var n = CooFrameEnum.fromString(a.cooFrame, CooFrameEnum.J2000),
            h = n == CooFrameEnum.J2000,
            l = $('<div class="aladin-location">' + (a.showFrame ? '<select class="aladin-frameChoice"><option value="' + CooFrameEnum.J2000 + '" ' + (h ? 'selected="selected"' : "") + '>J2000</option><option value="' + CooFrameEnum.GAL + '" ' + (h ? "" : 'selected="selected"') + ">GAL</option></select>" : "") + '<span class="aladin-location-text"></span></div>').appendTo(e),
            c = $('<div class="aladin-fov"></div>').appendTo(e);
        a.showZoomControl && $('<div class="aladin-zoomControl"><a href="#" class="zoomPlus" title="Zoom in">+</a><a href="#" class="zoomMinus" title="Zoom out">&ndash;</a></div>').appendTo(e), a.showFullscreenControl && $('<div class="aladin-fullscreenControl aladin-maximize" title="Full screen"></div>').appendTo(e), this.fullScreenBtn = $(e).find(".aladin-fullscreenControl"), this.fullScreenBtn.click(function() {
            o.toggleFullscreen()
        }), $("<div class='aladin-logo-container'><a href='http://aladin.u-strasbg.fr/' title='Powered by Aladin Lite' target='_blank'><div class='aladin-logo'></div></a></div>").appendTo(e), this.boxes = [];
        var u = new Location(l.find(".aladin-location-text"));
        if (this.view = new View(this, u, c, n, a.fov), this.view.setShowGrid(a.showCooGrid), $.ajax({
                url: "http://aladin.u-strasbg.fr/java/nph-aladin.pl",
                data: {
                    frame: "aladinLiteDic"
                },
                method: "GET",
                dataType: "jsonp",
                success: function(t) {
                    for (var e = {}, i = 0; t.length > i; i++) e[t[i].id] = !0;
                    for (var i = 0; HpxImageSurvey.SURVEYS.length > i; i++) e[HpxImageSurvey.SURVEYS[i].id] || t.push(HpxImageSurvey.SURVEYS[i]);
                    HpxImageSurvey.SURVEYS = t, o.view.setUnknownSurveyIfNeeded()
                },
                error: function() {}
            }), a.showLayersControl) {
            var d = $('<div class="aladin-layersControl-container" title="Manage layers"><div class="aladin-layersControl"></div></div>');
            d.appendTo(e);
            var p = $('<div class="aladin-box aladin-layerBox aladin-cb-list"></div>');
            p.appendTo(e), this.boxes.push(p), d.click(function() {
                return o.hideBoxes(), o.showLayerBox(), !1
            })
        }
        if (a.showGotoControl) {
            var d = $('<div class="aladin-gotoControl-container" title="Go to position"><div class="aladin-gotoControl"></div></div>');
            d.appendTo(e);
            var v = $('<div class="aladin-box aladin-gotoBox"><a class="aladin-closeBtn">&times;</a><div style="clear: both;"></div><form class="aladin-target-form">Go to: <input type="text" placeholder="Object name/position" /></form></div>');
            v.appendTo(e), this.boxes.push(v);
            var f = v.find(".aladin-target-form input");
            f.on("paste keydown", function() {
                $(this).removeClass("aladin-unknownObject")
            }), d.click(function() {
                return o.hideBoxes(), f.val(""), f.removeClass("aladin-unknownObject"), v.show(), f.focus(), !1
            }), v.find(".aladin-closeBtn").click(function() {
                return o.hideBoxes(), !1
            })
        }
        if (a.showShareControl) {
            var d = $('<div class="aladin-shareControl-container" title="Share current view"><div class="aladin-shareControl"></div></div>');
            d.appendTo(e);
            var g = $('<div class="aladin-box aladin-shareBox"><a class="aladin-closeBtn">&times;</a><div style="clear: both;"></div><b>Share</b><input type="text" class="aladin-shareInput" /></div>');
            g.appendTo(e), this.boxes.push(g), d.click(function() {
                return o.hideBoxes(), g.show(), !1
            }), g.find(".aladin-closeBtn").click(function() {
                return o.hideBoxes(), !1
            })
        }
        if (this.gotoObject(a.target), a.log) {
            var m = i;
            m.version = t.VERSION, Logger.log("startup", m)
        }
        if (this.showReticle(a.showReticle), a.catalogUrls)
            for (var y = 0, w = a.catalogUrls.length; w > y; y++) this.createCatalogFromVOTable(a.catalogUrls[y]);
        this.setImageSurvey(a.survey), this.view.showCatalog(a.showCatalog);
        var C = this;
        $(e).find(".aladin-frameChoice").change(function() {
            C.setFrame($(this).val())
        }), $("#projectionChoice").change(function() {
            C.setProjection($(this).val())
        }), $(e).find(".aladin-target-form").submit(function() {
            return C.gotoObject($(this).find("input").val(), function() {
                $(e).find(".aladin-target-form input").addClass("aladin-unknownObject")
            }), !1
        });
        var x = $(e).find(".zoomPlus");
        x.click(function() {
            return C.increaseZoom(), !1
        }), x.bind("mousedown", function(t) {
            t.preventDefault()
        });
        var S = $(e).find(".zoomMinus");
        S.click(function() {
            return C.decreaseZoom(), !1
        }), S.bind("mousedown", function(t) {
            t.preventDefault()
        }), a.fullScreen && window.setTimeout(function() {
            o.toggleFullscreen()
        }, 1e3)
    };
    t.VERSION = "2015-04-23", t.JSONP_PROXY = "http://alasky.u-strasbg.fr/cgi/JSONProxy", t.DEFAULT_OPTIONS = {
        target: "0 +0",
        cooFrame: "J2000",
        survey: "P/DSS2/color",
        fov: 60,
        showReticle: !0,
        showZoomControl: !0,
        showFullscreenControl: !0,
        showLayersControl: !0,
        showGotoControl: !0,
        showShareControl: !1,
        showCatalog: !0,
        showFrame: !0,
        showCooGrid: !1,
        fullScreen: !1,
        reticleColor: "rgb(178, 50, 178)",
        reticleSize: 22,
        log: !0
    }, t.prototype.toggleFullscreen = function() {
        this.fullScreenBtn.toggleClass("aladin-maximize aladin-restore");
        var t = this.fullScreenBtn.hasClass("aladin-restore");
        this.fullScreenBtn.attr("title", t ? "Restore original size" : "Full screen"), $(this.aladinDiv).toggleClass("aladin-fullscreen"), this.view.fixLayoutDimensions()
    }, t.prototype.updateSurveysDropdownList = function(t) {
        t = t.sort(function(t, e) {
            return t.order ? t.order && t.order > e.order ? 1 : -1 : t.id > e.id
        });
        var e = $(this.aladinDiv).find(".aladin-surveySelection");
        e.empty();
        for (var i = 0; t.length > i; i++) {
            var o = this.view.imageSurvey.id == t[i].id;
            e.append($("<option />").attr("selected", o).val(t[i].id).text(t[i].name))
        }
    }, t.prototype.getOptionsFromQueryString = function() {
        var t = {},
            e = $.urlParam("target");
        e && (t.target = e);
        var i = $.urlParam("frame");
        i && CooFrameEnum[i] && (t.frame = i);
        var o = $.urlParam("survey");
        o && HpxImageSurvey.getSurveyInfoFromId(o) && (t.survey = o);
        var r = $.urlParam("zoom");
        r && r > 0 && 180 > r && (t.zoom = r);
        var a = $.urlParam("showReticle");
        a && (t.showReticle = "true" == a.toLowerCase());
        var s = $.urlParam("cooFrame");
        s && (t.cooFrame = s);
        var n = $.urlParam("fullScreen");
        return void 0 !== n && (t.fullScreen = n), t
    }, t.prototype.setZoom = function(t) {
        this.view.setZoom(t)
    }, t.prototype.setFoV = function(t) {
        this.view.setZoom(t)
    }, t.prototype.setFrame = function(t) {
        if (t) {
            var e = CooFrameEnum.fromString(t, CooFrameEnum.J2000);
            e != this.view.cooFrame && (this.view.changeFrame(e), $(this.aladinDiv).find(".aladin-frameChoice").val(e))
        }
    }, t.prototype.setProjection = function(t) {
        if (t) switch (t = t.toLowerCase()) {
            case "aitoff":
                this.view.changeProjection(ProjectionEnum.AITOFF);
                break;
            case "sinus":
            default:
                this.view.changeProjection(ProjectionEnum.SIN)
        }
    }, t.prototype.gotoObject = function(t, e) {
        var i = /[a-zA-Z]/.test(t);
        if (i) {
            var o = this;
            Sesame.resolve(t, function(t) {
                var e = t.Target.Resolver.jradeg,
                    i = t.Target.Resolver.jdedeg;
                o.view.pointTo(e, i)
            }, function(i) {
                console && (console.log("Could not resolve object name " + t), console.log(i)), e && e()
            })
        } else {
            var r = new Coo;
            r.parse(t);
            var a = [r.lon, r.lat];
            this.view.cooFrame == CooFrameEnum.GAL && (a = CooConversion.GalacticToJ2000(a)), this.view.pointTo(a[0], a[1])
        }
    }, t.prototype.gotoPosition = function(t, e) {
        var i;
        i = this.view.cooFrame == CooFrameEnum.GAL ? CooConversion.GalacticToJ2000([t, e]) : [t, e], this.view.pointTo(i[0], i[1])
    };
    var e = function(t) {
        var i = t.animationParams;
        if (null != i) {
            var o = (new Date).getTime();
            if (o > i.end) return t.gotoRaDec(i.raEnd, i.decEnd), i.complete && i.complete(), void 0;
            var r = i.raStart + (i.raEnd - i.raStart) * (o - i.start) / (i.end - i.start),
                a = i.decStart + (i.decEnd - i.decStart) * (o - i.start) / (i.end - i.start);
            t.gotoRaDec(r, a), setTimeout(function() {
                e(t)
            }, 50)
        }
    };
    return t.prototype.animateToRaDec = function(t, i, o, r) {
        o = o || 5, this.animationParams = null, e(this);
        var a = {};
        a.start = (new Date).getTime(), a.end = (new Date).getTime() + 1e3 * o;
        var s = this.getRaDec();
        a.raStart = s[0], a.decStart = s[1], a.raEnd = t, a.decEnd = i, a.complete = r, this.animationParams = a, e(this)
    }, t.prototype.getRaDec = function() {
        if (this.view.cooFrame == CooFrameEnum.J2000) return [this.view.viewCenter.lon, this.view.viewCenter.lat];
        var t = CooConversion.GalacticToJ2000([this.view.viewCenter.lon, this.view.viewCenter.lat]);
        return t
    }, t.prototype.gotoRaDec = function(t, e) {
        this.view.pointTo(t, e)
    }, t.prototype.showHealpixGrid = function(t) {
        this.view.showHealpixGrid(t)
    }, t.prototype.showSurvey = function(t) {
        this.view.showSurvey(t)
    }, t.prototype.showCatalog = function(t) {
        this.view.showCatalog(t)
    }, t.prototype.showReticle = function(t) {
        this.view.showReticle(t), $("#displayReticle").attr("checked", t)
    }, t.prototype.removeLayers = function() {
        this.view.removeLayers()
    }, t.prototype.addCatalog = function(t) {
        this.view.addCatalog(t)
    }, t.prototype.addOverlay = function(t) {
        this.view.addOverlay(t)
    }, t.prototype.createImageSurvey = function(t, e, i, o, r, a) {
        return new HpxImageSurvey(t, e, i, o, r, a)
    }, t.prototype.getBaseImageLayer = function() {
        return this.view.imageSurvey
    }, t.prototype.setImageSurvey = function(t, e) {
        if (this.view.setImageSurvey(t, e), this.updateSurveysDropdownList(HpxImageSurvey.getAvailableSurveys()), this.options.log) {
            var i = t;
            "string" != typeof t && (i = t.rootUrl), Logger.log("changeImageSurvey", i)
        }
    }, t.prototype.setBaseImageLayer = t.prototype.setImageSurvey, t.prototype.getOverlayImageLayer = function() {
        return this.view.overlayImageSurvey
    }, t.prototype.setOverlayImageLayer = function(t, e) {
        this.view.setOverlayImageSurvey(t, e)
    }, t.prototype.increaseZoom = function(t) {
        t || (t = 5), this.view.setZoomLevel(this.view.zoomLevel + t)
    }, t.prototype.decreaseZoom = function(t) {
        t || (t = 5), this.view.setZoomLevel(this.view.zoomLevel - t)
    }, t.prototype.createCatalog = function(t) {
        return A.catalog(t)
    }, t.prototype.createProgressiveCatalog = function(t, e, i, o) {
        return new ProgressiveCat(t, e, i, o)
    }, t.prototype.createSource = function(t, e, i) {
        return new cds.Source(t, e, i)
    }, t.prototype.createMarker = function(t, e, i, o) {
        return i = i || {}, i.marker = !0, new cds.Source(t, e, o, i)
    }, t.prototype.createOverlay = function(t) {
        return new Overlay(t)
    }, t.prototype.createFootprintsFromSTCS = function(t) {
        for (var e = Overlay.parseSTCS(t), i = [], o = 0, r = e.length; r > o; o++) i.push(new Footprint(e[o]));
        return i
    }, t.prototype.createCatalogFromVOTable = function(t, e) {
        return A.catalogFromURL(t, e)
    }, A.catalogFromURL = function(t, e, i) {
        var o = A.catalog(e);
        return cds.Catalog.parseVOTable(t, function(t) {
            o.addSources(t), i && i(t)
        }), o
    }, t.prototype.on = function(t, e) {
        "select" === t ? this.selectFunction = e : "objectClicked" == t ? this.objClickedFunction = e : "objectHovered" == t && (this.objHoveredFunction = e)
    }, t.prototype.select = function() {
        this.fire("selectstart")
    }, t.prototype.fire = function(t, e) {
        "selectstart" === t ? this.view.setMode(View.SELECT) : "selectend" === t && (this.view.setMode(View.PAN), this.selectFunction && this.selectFunction(e))
    }, t.prototype.hideBoxes = function() {
        if (this.boxes)
            for (var t = 0; this.boxes.length > t; t++) this.boxes[t].hide()
    }, t.prototype.updateCM = function() {}, t.prototype.showLayerBox = function() {
        var t = this,
            e = $(this.aladinDiv).find(".aladin-layerBox");
        e.empty(), e.append('<a class="aladin-closeBtn">&times;</a><div style="clear: both;"></div><div class="aladin-label">Base image layer</div><select class="aladin-surveySelection"></select><div class="aladin-cmap">Color map:<div><select class="aladin-cmSelection"></select><button class="aladin-btn aladin-btn-small aladin-reverseCm" type="button">Reverse</button></div></div><div class="aladin-box-separator"></div><div class="aladin-label">Overlay layers</div>');
        for (var i = e.find(".aladin-cmap"), o = e.find(".aladin-cmSelection"), r = 0; ColorMap.MAPS_NAMES.length > r; r++) o.append($("<option />").text(ColorMap.MAPS_NAMES[r]));
        o.val(t.getBaseImageLayer().getColorMap().map);
        for (var a = this.view.catalogs, s = "<ul>", r = a.length - 1; r >= 0; r--) {
            var n = a[r].name,
                h = "";
            a[r].isShowing && (h = 'checked="checked"');
            var l = a[r].getSources().length,
                c = l + " source" + (l > 1 ? "s" : "");
            s += '<li><div class="aladin-layerIcon" style="background: ' + a[r].color + ';"></div><input type="checkbox" ' + h + ' id="aladin_lite_' + n + '"></input><label for="aladin_lite_' + n + '" class="aladin-layer-label" style="background: ' + a[r].color + ';" title="' + c + '">' + n + "</label></li>"
        }
        s += "</ul>", e.append(s), e.append('<div class="aladin-blank-separator"></div>');
        var h = "";
        this.view.displayReticle && (h = 'checked="checked"');
        var u = $('<input type="checkbox" ' + h + ' id="displayReticle" />');
        e.append(u).append('<label for="displayReticle">Reticle</label><br/>'), u.change(function() {
            t.showReticle($(this).is(":checked"))
        }), h = "", this.view.displayHpxGrid && (h = 'checked="checked"');
        var d = $('<input type="checkbox" ' + h + ' id="displayHpxGrid"/>');
        e.append(d).append('<label for="displayHpxGrid">HEALPix grid</label><br/>'), d.change(function() {
            t.showHealpixGrid($(this).is(":checked"))
        }), e.append('<div class="aladin-box-separator"></div><div class="aladin-label">Tools</div>');
        var p = $('<button class="aladin-btn" type="button">Export view as PNG</button>');
        e.append(p), p.click(function() {
            t.exportAsPNG()
        }), e.find(".aladin-closeBtn").click(function() {
            return t.hideBoxes(), !1
        }), this.updateSurveysDropdownList(HpxImageSurvey.getAvailableSurveys());
        var v = $(this.aladinDiv).find(".aladin-surveySelection");
        v.change(function() {
            var e = HpxImageSurvey.getAvailableSurveys()[$(this)[0].selectedIndex];
            t.setImageSurvey(e.id, function() {
                var e = t.getBaseImageLayer();
                e.useCors ? (o.val(e.getColorMap().map), i.show(), p.show()) : (i.hide(), p.hide())
            })
        }), i.find(".aladin-cmSelection").change(function() {
            var e = $(this).find(":selected").val();
            t.getBaseImageLayer().getColorMap().update(e)
        }), i.find(".aladin-reverseCm").click(function() {
            t.getBaseImageLayer().getColorMap().reverse()
        }), this.getBaseImageLayer().useCors ? (i.show(), p.show()) : (i.hide(), p.hide()), e.find(".aladin-reverseCm").parent().attr("disabled", !0), $(this.aladinDiv).find(".aladin-layerBox ul input").change(function() {
            var e = $(this).attr("id").substr(12),
                i = t.layerByName(e);
            $(this).is(":checked") ? i.show() : i.hide()
        }), e.show()
    }, t.prototype.layerByName = function(t) {
        for (var e = this.view.catalogs, i = 0; this.view.catalogs.length > i; i++)
            if (t == e[i].name) return e[i];
        return null
    }, t.prototype.exportAsPNG = function() {
        var t = this.view.getCanvasDataURL();
        window.open(t, "Aladin Lite snapshot")
    }, t.prototype.setFOVRange = function(t, e) {
        if (t > e) {
            var i = t;
            t = e, e = i
        }
        this.view.minFOV = t, this.view.maxFOV = e
    }, t.prototype.pix2world = function(t, e) {
        var i, o = AladinUtils.viewToXy(t, e, this.view.width, this.view.height, this.view.largestDim, this.view.zoomFactor),
            r = this.view.projection.unproject(o.x, o.y);
        return i = this.view.cooFrame == CooFrameEnum.GAL ? CooConversion.GalacticToJ2000([r.ra, r.dec]) : [r.ra, r.dec]
    }, t.prototype.world2pix = function(t, e) {
        var i;
        if (this.view.cooFrame == CooFrameEnum.GAL) {
            var o = CooConversion.J2000ToGalactic([t, e]);
            i = this.view.projection.project(o[0], o[1])
        } else i = this.view.projection.project(t, e);
        if (i) {
            var r = AladinUtils.xyToView(i.X, i.Y, this.view.width, this.view.height, this.view.largestDim, this.view.zoomFactor);
            return [r.vx, r.vy]
        }
        return null
    }, t.prototype.getFovCorners = function(t) {
        (!t || 1 > t) && (t = 1);
        for (var e, i, o, r, a = [], s = 0; 4 > s; s++) {
            e = 0 == s || 3 == s ? 0 : this.view.width - 1, i = 2 > s ? 0 : this.view.height - 1, o = 2 > s ? this.view.width - 1 : 0, r = 1 == s || 2 == s ? this.view.height - 1 : 0;
            for (var n = 0; t > n; n++) a.push(this.pix2world(e + n / t * (o - e), i + n / t * (r - i)))
        }
        return a
    }, t.prototype.getFov = function() {
        var t = this.view.fov,
            e = this.getSize(),
            i = e[1] / e[0] * t;
        return t = Math.min(t, 180), i = Math.min(i, 180), [t, i]
    }, t.prototype.getSize = function() {
        return [this.view.width, this.view.height]
    }, t.prototype.getParentDiv = function() {
        return $(this.aladinDiv)
    }, t
}(), A.aladin = function(t, e) {
    return new Aladin($(t)[0], e)
}, A.imageLayer = function(t, e, i, o) {
    return new HpxImageSurvey(t, e, i, null, null, o)
}, A.source = function(t, e, i, o) {
    return new cds.Source(t, e, i, o)
}, A.marker = function(t, e, i, o) {
    return i = i || {}, i.marker = !0, A.source(t, e, o, i)
}, A.polygon = function(t) {
    var e = t.length;
    return e > 0 && (t[0][0] != t[e - 1][0] || t[0][1] != t[e - 1][1]) && t.push([t[0][0], t[0][1]]), new Footprint(t)
}, A.polyline = function(t, e) {
    return new Polyline(t, e)
}, A.circle = function(t, e, i, o) {
    return new Circle([t, e], i, o)
}, A.graphicOverlay = function(t) {
    return new Overlay(t)
}, A.catalog = function(t) {
    return new cds.Catalog(t)
}, Aladin.prototype.displayFITS = function(t, e) {
    e = e || {};
    var i = {
        url: t
    };
    e.color && (i.color = !0), e.outputFormat && (i.format = e.outputFormat), e.order && (i.order = e.order), e.nocache && (i.nocache = e.nocache), $.ajax({
        url: "http://alasky.u-strasbg.fr/cgi/fits2HiPS",
        data: i,
        method: "GET",
        dataType: "json",
        success: function(t) {
            if ("success" != t.status) return alert("An error occured: " + t.message), void 0;
            var i = e.label || "FITS image";
            aladin.setOverlayImageLayer(aladin.createImageSurvey(i, i, t.data.url, "equatorial", t.data.meta.max_norder, {
                imgFormat: "png"
            })), aladin.setFoV(t.data.meta.fov), aladin.gotoRaDec(t.data.meta.ra, t.data.meta.dec);
            var o = e && e.transparency || 1;
            aladin.getOverlayImageLayer().setAlpha(o)
        }
    })
}, Aladin.prototype.displayJPG = Aladin.prototype.displayPNG = function(t, e) {
    e = e || {}, e.color = !0, e.label = "JPG/PNG image", e.outputFormat = "png", this.displayFITS(t, e)
}, $ && ($.aladin = A.aladin);