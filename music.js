// Automatically generated file.  Do not edit!

'use strict';
var b, h = {g: {}};
h.g.Vb = {};
h.g.Vb.Sg = function (a) {
    return a * Math.PI / 180
};
h.g.Vb.cA = function (a) {
    return 180 * a / Math.PI
};
h.g.Vb.Ni = function (a, c, d) {
    if (d < a) {
        var e = d;
        d = a;
        a = e
    }
    return Math.max(a, Math.min(c, d))
};
h.HE = {};
h.Gq = 40;
h.Pq = 125;
h.hv = 5;
h.rv = 10;
h.Sb = 28;
h.jq = h.Sb;
h.av = 8;
h.Av = "#000000";
h.xm = 250;
h.ym = 10;
h.Yu = 30;
h.Hv = 750;
h.dw = 100;
h.iv = !0;
h.vv = .45;
h.wv = .65;
h.PD = {width: 96, height: 124, url: "sprites.png"};
h.Ha = 1;
h.jd = 2;
h.Ca = 3;
h.ld = 4;
h.qe = 5;
h.tm = -1;
h.Vp = 0;
h.nk = 1;
h.dB = 0;
h.eB = 1;
h.bB = 1;
h.cB = 2;
h.mh = [];
h.mh[h.Ha] = h.jd;
h.mh[h.jd] = h.Ha;
h.mh[h.Ca] = h.ld;
h.mh[h.ld] = h.Ca;
h.Ci = 0;
h.fn = 1;
h.Bi = 2;
h.gn = 3;
h.nq = null;
h.Dm = 1;
h.oq = 2;
h.kr = "VARIABLE";
h.rw = "VARIABLE_DYNAMIC";
h.Rq = "PROCEDURE";
h.uD = "RENAME_VARIABLE_ID";
h.VA = "DELETE_VARIABLE_ID";
h.g.global = function () {
    return "object" === typeof self ? self : "object" === typeof window ? window : "object" === typeof global ? global : this
}();
h.h = {};
h.g.global.Blockly || (h.g.global.Blockly = {});
h.g.global.Blockly.Msg || (h.g.global.Blockly.Msg = h.h);
h.g.M = function (a, c) {
    this.x = a;
    this.y = c
};
h.g.M.Ud = function (a, c) {
    return a == c ? !0 : a && c ? a.x == c.x && a.y == c.y : !1
};
h.g.M.os = function (a, c) {
    var d = a.x - c.x;
    a = a.y - c.y;
    return Math.sqrt(d * d + a * a)
};
h.g.M.Xy = function (a) {
    return Math.sqrt(a.x * a.x + a.y * a.y)
};
h.g.M.bl = function (a, c) {
    return new h.g.M(a.x - c.x, a.y - c.y)
};
h.g.M.sum = function (a, c) {
    return new h.g.M(a.x + c.x, a.y + c.y)
};
h.g.M.prototype.scale = function (a) {
    this.x *= a;
    this.y *= a;
    return this
};
h.g.M.prototype.translate = function (a, c) {
    this.x += a;
    this.y += c;
    return this
};
h.g.Ga = {};
h.g.Ga.startsWith = function (a, c) {
    return 0 == a.lastIndexOf(c, 0)
};
h.g.Ga.Dp = function (a) {
    return a.length ? a.reduce(function (c, d) {
        return c.length < d.length ? c : d
    }).length : 0
};
h.g.Ga.gx = function (a, c) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    var d = 0;
    c = c || h.g.Ga.Dp(a);
    for (var e = 0; e < c; e++) {
        for (var f = a[0][e], g = 1; g < a.length; g++) if (f != a[g][e]) return d;
        " " == f && (d = e + 1)
    }
    for (g = 1; g < a.length; g++) if ((f = a[g][e]) && " " != f) return d;
    return c
};
h.g.Ga.hx = function (a, c) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    var d = 0;
    c = c || h.g.Ga.Dp(a);
    for (var e = 0; e < c; e++) {
        for (var f = a[0].substr(-e - 1, 1), g = 1; g < a.length; g++) if (f != a[g].substr(-e - 1, 1)) return d;
        " " == f && (d = e + 1)
    }
    for (g = 1; g < a.length; g++) if ((f = a[g].charAt(a[g].length - e - 1)) && " " != f) return d;
    return c
};
h.g.Ga.lA = function (a) {
    var c = h.D.Gv;
    a = a.split("\n");
    for (var d = 0; d < a.length; d++) a[d] = h.g.Ga.mA(a[d], c);
    return a.join("\n")
};
h.g.Ga.mA = function (a, c) {
    if (a.length <= c) return a;
    for (var d = a.trim().split(/\s+/), e = 0; e < d.length; e++) d[e].length > c && (c = d[e].length);
    e = -Infinity;
    var f = 1;
    do {
        var g = e;
        var k = a;
        a = [];
        var l = d.length / f, m = 1;
        for (e = 0; e < d.length - 1; e++) m < (e + 1.5) / l ? (m++, a[e] = !0) : a[e] = !1;
        a = h.g.Ga.Du(d, a, c);
        e = h.g.Ga.Rp(d, a, c);
        a = h.g.Ga.nA(d, a);
        f++
    } while (e > g);
    return k
};
h.g.Ga.Rp = function (a, c, d) {
    for (var e = [0], f = [], g = 0; g < a.length; g++) e[e.length - 1] += a[g].length, !0 === c[g] ? (e.push(0), f.push(a[g].charAt(a[g].length - 1))) : !1 === c[g] && e[e.length - 1]++;
    a = Math.max.apply(Math, e);
    for (g = c = 0; g < e.length; g++) c -= 2 * Math.pow(Math.abs(d - e[g]), 1.5), c -= Math.pow(a - e[g], 1.5), -1 != ".?!".indexOf(f[g]) ? c += d / 3 : -1 != ",;)]}".indexOf(f[g]) && (c += d / 4);
    1 < e.length && e[e.length - 1] <= e[e.length - 2] && (c += .5);
    return c
};
h.g.Ga.Du = function (a, c, d) {
    for (var e = h.g.Ga.Rp(a, c, d), f, g = 0; g < c.length - 1; g++) if (c[g] != c[g + 1]) {
        var k = [].concat(c);
        k[g] = !k[g];
        k[g + 1] = !k[g + 1];
        var l = h.g.Ga.Rp(a, k, d);
        l > e && (e = l, f = k)
    }
    return f ? h.g.Ga.Du(a, f, d) : c
};
h.g.Ga.nA = function (a, c) {
    for (var d = [], e = 0; e < a.length; e++) d.push(a[e]), void 0 !== c[e] && d.push(c[e] ? "\n" : " ");
    return d.join("")
};
h.g.md = function (a, c) {
    this.width = a;
    this.height = c
};
h.g.md.Ud = function (a, c) {
    return a == c ? !0 : a && c ? a.width == c.width && a.height == c.height : !1
};
h.g.style = {};
h.g.style.Ie = function (a) {
    if ("none" != h.g.style.Os(a, "display")) return h.g.style.Ms(a);
    var c = a.style, d = c.display, e = c.visibility, f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    var g = a.offsetWidth;
    a = a.offsetHeight;
    c.display = d;
    c.position = f;
    c.visibility = e;
    return new h.g.md(g, a)
};
h.g.style.Ms = function (a) {
    return new h.g.md(a.offsetWidth, a.offsetHeight)
};
h.g.style.Os = function (a, c) {
    return h.g.style.getComputedStyle(a, c) || h.g.style.Zx(a, c) || a.style && a.style[c]
};
h.g.style.getComputedStyle = function (a, c) {
    return document.defaultView && document.defaultView.getComputedStyle && (a = document.defaultView.getComputedStyle(a, null)) ? a[c] || a.getPropertyValue(c) || "" : ""
};
h.g.style.Zx = function (a, c) {
    return a.currentStyle ? a.currentStyle[c] : null
};
h.g.style.no = function (a) {
    var c = new h.g.M(0, 0);
    a = a.getBoundingClientRect();
    var d = document.documentElement;
    d = new h.g.M(window.pageXOffset || d.scrollLeft, window.pageYOffset || d.scrollTop);
    c.x = a.left + d.x;
    c.y = a.top + d.y;
    return c
};
h.g.style.Qs = function () {
    var a = document.body, c = document.documentElement;
    return new h.g.M(a.scrollLeft || c.scrollLeft, a.scrollTop || c.scrollTop)
};
h.g.style.AF = function (a, c) {
    a.style.display = c ? "" : "none"
};
h.g.style.ot = function () {
    return "rtl" == h.g.style.Os(void 0, "direction")
};
h.g.style.Wx = function (a) {
    var c = h.g.style.getComputedStyle(a, "borderLeftWidth"), d = h.g.style.getComputedStyle(a, "borderRightWidth"),
        e = h.g.style.getComputedStyle(a, "borderTopWidth");
    a = h.g.style.getComputedStyle(a, "borderBottomWidth");
    return {top: parseFloat(e), right: parseFloat(d), bottom: parseFloat(a), left: parseFloat(c)}
};
h.g.style.fu = function (a, c) {
    a = h.g.style.ay(a, c);
    c.scrollLeft = a.x;
    c.scrollTop = a.y
};
h.g.style.ay = function (a, c) {
    var d = h.g.style.no(a), e = h.g.style.no(c), f = h.g.style.Wx(c), g = d.x - e.x - f.left;
    d = d.y - e.y - f.top;
    a = h.g.style.Ms(a);
    e = c.clientHeight - a.height;
    f = c.scrollLeft;
    var k = c.scrollTop;
    f += Math.min(g, Math.max(g - (c.clientWidth - a.width), 0));
    k += Math.min(d, Math.max(d - e, 0));
    return new h.g.M(f, k)
};
h.g.userAgent = {};
(function (a) {
    function c(e) {
        return -1 != d.indexOf(e.toUpperCase())
    }

    h.g.userAgent.raw = a;
    var d = h.g.userAgent.raw.toUpperCase();
    h.g.userAgent.Xe = c("Trident") || c("MSIE");
    h.g.userAgent.Bk = c("Edge");
    h.g.userAgent.Ev = c("JavaFX");
    h.g.userAgent.rr = c("WebKit") && !h.g.userAgent.Bk;
    h.g.userAgent.IB = c("Gecko") && !h.g.userAgent.rr && !h.g.userAgent.Xe && !h.g.userAgent.Bk;
    h.g.userAgent.pk = c("Android");
    h.g.userAgent.wi = c("iPad");
    h.g.userAgent.Cq = c("iPod");
    h.g.userAgent.Bq = c("iPhone") && !h.g.userAgent.wi && !h.g.userAgent.Cq;
    h.g.userAgent.Iv = c("Macintosh");
    h.g.userAgent.lw = h.g.userAgent.wi || h.g.userAgent.pk && !c("Mobile") || c("Silk");
    h.g.userAgent.wC = !h.g.userAgent.lw && (h.g.userAgent.Cq || h.g.userAgent.Bq || h.g.userAgent.pk || c("IEMobile"))
})(h.g.global.navigator && h.g.global.navigator.userAgent || "");
h.g.hz = function (a) {
    a.preventDefault();
    a.stopPropagation()
};
h.g.Ml = function (a) {
    return "textarea" == a.target.type || "text" == a.target.type || "number" == a.target.type || "email" == a.target.type || "password" == a.target.type || "search" == a.target.type || "tel" == a.target.type || "url" == a.target.type || a.target.isContentEditable
};
h.g.Zc = function (a) {
    var c = new h.g.M(0, 0), d = a.getAttribute("x");
    d && (c.x = parseInt(d, 10));
    if (d = a.getAttribute("y")) c.y = parseInt(d, 10);
    if (d = (d = a.getAttribute("transform")) && d.match(h.g.Zc.vw)) c.x += Number(d[1]), d[3] && (c.y += Number(d[3]));
    (a = a.getAttribute("style")) && -1 < a.indexOf("translate") && (a = a.match(h.g.Zc.ww)) && (c.x += Number(a[1]), a[3] && (c.y += Number(a[3])));
    return c
};
h.g.lo = function (a) {
    for (var c = 0, d = 0; a;) {
        var e = h.g.Zc(a);
        c += e.x;
        d += e.y;
        if (-1 != (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) break;
        a = a.parentNode
    }
    return new h.g.M(c, d)
};
h.g.Zc.vw = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*)?/;
h.g.Zc.ww = /transform:\s*translate(?:3d)?\(\s*([-+\d.e]+)\s*px([ ,]\s*([-+\d.e]+)\s*px)?/;
h.g.Oh = function (a) {
    return a.ctrlKey && h.g.userAgent.Iv ? !0 : 2 == a.button
};
h.g.Ij = function (a, c, d) {
    var e = c.createSVGPoint();
    e.x = a.clientX;
    e.y = a.clientY;
    d || (d = c.getScreenCTM().inverse());
    return e.matrixTransform(d)
};
h.g.py = function (a) {
    switch (a.deltaMode) {
        case 0:
            return {x: a.deltaX, y: a.deltaY};
        case 1:
            return {x: a.deltaX * h.Gq, y: a.deltaY * h.Gq};
        case 2:
            return {x: a.deltaX * h.Pq, y: a.deltaY * h.Pq}
    }
};
h.g.dA = function (a) {
    return h.g.Np(a, !0)
};
h.g.oc = function (a) {
    if ("string" != typeof a) return a;
    a = h.g.Np(a, !1);
    return a.length ? a[0] : ""
};
h.g.Kr = function (a) {
    for (var c = h.h, d = a.match(/%{BKY_[A-Z]\w*}/ig), e = 0; e < d.length; e++) void 0 == c[d[e].toUpperCase().slice(6, -1)] && console.log("WARNING: No message string for " + d[e] + " in " + a)
};
h.g.Np = function (a, c) {
    var d = [], e = a.split("");
    e.push("");
    var f = 0;
    a = [];
    for (var g = null, k = 0; k < e.length; k++) {
        var l = e[k];
        0 == f ? "%" == l ? ((l = a.join("")) && d.push(l), a.length = 0, f = 1) : a.push(l) : 1 == f ? "%" == l ? (a.push(l), f = 0) : c && "0" <= l && "9" >= l ? (f = 2, g = l, (l = a.join("")) && d.push(l), a.length = 0) : "{" == l ? f = 3 : (a.push("%", l), f = 0) : 2 == f ? "0" <= l && "9" >= l ? g += l : (d.push(parseInt(g, 10)), k--, f = 0) : 3 == f && ("" == l ? (a.splice(0, 0, "%{"), k--, f = 0) : "}" != l ? a.push(l) : (f = a.join(""), /[A-Z]\w*/i.test(f) ? (l = f.toUpperCase(), (l = h.g.Ga.startsWith(l, "BKY_") ?
            l.substring(4) : null) && l in h.h ? (f = h.h[l], "string" == typeof f ? Array.prototype.push.apply(d, h.g.Np(f, c)) : c ? d.push(String(f)) : d.push(f)) : d.push("%{" + f + "}")) : d.push("%{" + f + "}"), f = a.length = 0))
    }
    (l = a.join("")) && d.push(l);
    c = [];
    for (k = a.length = 0; k < d.length; ++k) "string" == typeof d[k] ? a.push(d[k]) : ((l = a.join("")) && c.push(l), a.length = 0, c.push(d[k]));
    (l = a.join("")) && c.push(l);
    a.length = 0;
    return c
};
h.g.He = function () {
    for (var a = h.g.He.ou.length, c = [], d = 0; 20 > d; d++) c[d] = h.g.He.ou.charAt(Math.random() * a);
    return c.join("")
};
h.g.He.ou = "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
h.g.vg = function () {
    if (void 0 !== h.g.vg.yn) return h.g.vg.yn;
    if (!h.g.global.getComputedStyle) return !1;
    var a = document.createElement("p"), c = "none", d = {
        webkitTransform: "-webkit-transform",
        OTransform: "-o-transform",
        msTransform: "-ms-transform",
        MozTransform: "-moz-transform",
        transform: "transform"
    };
    document.body.insertBefore(a, null);
    for (var e in d) if (void 0 !== a.style[e]) {
        a.style[e] = "translate3d(1px,1px,1px)";
        c = h.g.global.getComputedStyle(a);
        if (!c) return document.body.removeChild(a), !1;
        c = c.getPropertyValue(d[e])
    }
    document.body.removeChild(a);
    h.g.vg.yn = "none" !== c;
    return h.g.vg.yn
};
h.g.du = function (a) {
    if ("object" != typeof document) throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
    if ("complete" == document.readyState) a(); else var c = setInterval(function () {
        "complete" == document.readyState && (clearInterval(c), a())
    }, 10)
};
h.g.sy = function () {
    var a = h.g.style.Qs();
    return {
        right: document.documentElement.clientWidth + a.x,
        bottom: document.documentElement.clientHeight + a.y,
        top: a.y,
        left: a.x
    }
};
h.g.Hi = function (a, c) {
    c = a.indexOf(c);
    if (-1 == c) return !1;
    a.splice(c, 1);
    return !0
};
h.g.jy = function () {
    var a = document.documentElement, c = window;
    return h.g.userAgent.Xe && c.pageYOffset != a.scrollTop ? new h.g.M(a.scrollLeft, a.scrollTop) : new h.g.M(c.pageXOffset || a.scrollLeft, c.pageYOffset || a.scrollTop)
};
h.g.Cs = function (a) {
    var c = Object.create(null), d = p(a, !0);
    if (a = t(a)) a = d.indexOf(a), d.splice(a, d.length - a);
    a = 0;
    for (var e; e = d[a]; a++) c[e.type] ? c[e.type]++ : c[e.type] = 1;
    return c
};
h.g.Lz = function (a, c) {
    var d = c.x;
    c = c.y;
    var e = aa(a).getBoundingClientRect();
    d = new h.g.M(d - e.left, c - e.top);
    c = h.g.lo(a.kb);
    return h.g.M.bl(d, c).scale(1 / a.scale)
};
h.i = {};
h.i.Us = "";
h.i.Mb = !0;
h.i.Pn = 0;
h.i.yk = "create";
h.i.aq = h.i.yk;
h.i.pi = "delete";
h.i.BA = h.i.pi;
h.i.ni = "change";
h.i.AA = h.i.ni;
h.i.yi = "move";
h.i.bq = h.i.yi;
h.i.lr = "var_create";
h.i.mr = "var_delete";
h.i.nr = "var_rename";
h.i.jn = "ui";
h.i.wk = "comment_create";
h.i.iq = "comment_delete";
h.i.hq = "comment_change";
h.i.xk = "comment_move";
h.i.qv = "finished_loading";
h.i.Uu = [h.i.aq, h.i.bq, h.i.wk, h.i.xk];
h.i.ri = [];
h.i.Ma = function (a) {
    h.i.isEnabled() && (h.i.ri.length || setTimeout(h.i.Nx, 0), h.i.ri.push(a))
};
h.i.Nx = function () {
    for (var a = h.i.filter(h.i.ri, !0), c = h.i.ri.length = 0, d; d = a[c]; c++) if (d.Ib) {
        var e = h.ab.io(d.Ib);
        if (e) {
            var f = d;
            if (f.Mb) for (e.Ug.push(f), e.Pj.length = 0; e.Ug.length > e.Hq && 0 <= e.Hq;) e.Ug.shift();
            for (var g = 0; d = e.Bj[g]; g++) d(f)
        }
    }
};
h.i.filter = function (a, c) {
    a = a.slice();
    c || a.reverse();
    for (var d = [], e = Object.create(null), f = 0, g; g = a[f]; f++) if (!g.Mh()) {
        var k = [g.type, g.Tb, g.Ib].join(" "), l = e[k], m = l ? l.event : null;
        if (!l) e[k] = {
            event: g,
            index: f
        }, d.push(g); else if (g.type == h.i.yi && l.index == f - 1) m.Dg = g.Dg, m.Cg = g.Cg, m.wf = g.wf, l.index = f; else if (g.type == h.i.ni && g.element == m.element && g.name == m.name) m.newValue = g.newValue; else if (g.type != h.i.jn || "click" != g.element || "commentOpen" != m.element && "mutatorOpen" != m.element && "warningOpen" != m.element) e[k] = {
            event: g,
            index: 1
        }, d.push(g)
    }
    a = d.filter(function (n) {
        return !n.Mh()
    });
    c || a.reverse();
    for (f = 1; g = a[f]; f++) g.type == h.i.ni && "mutation" == g.element && a.unshift(a.splice(f, 1)[0]);
    return a
};
h.i.bx = function () {
    for (var a = 0, c; c = h.i.ri[a]; a++) c.Mb = !1
};
h.i.disable = function () {
    h.i.Pn++
};
h.i.enable = function () {
    h.i.Pn--
};
h.i.isEnabled = function () {
    return 0 == h.i.Pn
};
h.i.ub = function () {
    return h.i.Us
};
h.i.ca = function (a) {
    h.i.Us = "boolean" == typeof a ? a ? h.g.He() : "" : a
};
h.i.Fs = function (a) {
    var c = [];
    a = p(a, !1);
    for (var d = 0, e; e = a[d]; d++) c[d] = e.id;
    return c
};
h.i.oa = function (a) {
    switch (a.type) {
        case h.i.yk:
            var c = new h.i.Ed(null);
            break;
        case h.i.pi:
            c = new h.i.Fd(null);
            break;
        case h.i.ni:
            c = new h.i.We(null, "", "", "", "");
            break;
        case h.i.yi:
            c = new h.i.Qf(null);
            break;
        case h.i.lr:
            c = new h.i.nd(null);
            break;
        case h.i.mr:
            c = new h.i.od(null);
            break;
        case h.i.nr:
            c = new h.i.Md(null, "");
            break;
        case h.i.jn:
            c = new h.i.Qc(null, "", "", "");
            break;
        case h.i.wk:
            c = new h.i.oe(null);
            break;
        case h.i.hq:
            c = new h.i.dh(null, "", "");
            break;
        case h.i.xk:
            c = new h.i.Lf(null);
            break;
        case h.i.iq:
            c = new h.i.pe(null);
            break;
        default:
            throw Error("Unknown event type.");
    }
    c.oa(a);
    c.Ib = (void 0).id;
    return c
};
h.i.JE = function (a) {
    if ((a.type == h.i.yi || a.type == h.i.yk) && a.Ib) {
        var c = h.ab.io(a.Ib);
        if (a = u(c, a.Tb)) {
            var d = a.getParent();
            if (d && d.isEnabled()) for (c = p(a, !1), a = 0; d = c[a]; a++) d.Re(!0); else if ((a.L || a.N) && !c.lc()) {
                do a.Re(!1), a = t(a); while (a)
            }
        }
    }
};
h.i.Abstract = function () {
    this.Ib = void 0;
    this.group = h.i.ub();
    this.Mb = h.i.Mb
};
h.i.Abstract.prototype.za = function () {
    var a = {type: this.type};
    this.group && (a.group = this.group);
    return a
};
h.i.Abstract.prototype.oa = function (a) {
    this.group = a.group
};
h.i.Abstract.prototype.Mh = function () {
    return !1
};
h.i.Abstract.prototype.run = function () {
};

function x(a) {
    if (a.Ib) var c = h.ab.io(a.Ib);
    if (!c) throw Error("Workspace is null. Event must have been generated from real Blockly events.");
    return c
};h.g.object = {};
h.g.object.S = function (a, c) {
    a.v = c.prototype;
    a.prototype = Object.create(c.prototype);
    a.prototype.constructor = a
};
h.g.object.Rh = function (a, c) {
    for (var d in c) a[d] = c[d]
};
h.g.object.values = function (a) {
    return Object.values ? Object.values(a) : Object.keys(a).map(function (c) {
        return a[c]
    })
};
h.i.Qc = function (a, c, d, e) {
    h.i.Qc.v.constructor.call(this);
    this.Tb = a ? a.id : null;
    this.Ib = a ? a.C.id : void 0;
    this.element = c;
    this.oldValue = d;
    this.newValue = e;
    this.Mb = !1
};
h.g.object.S(h.i.Qc, h.i.Abstract);
h.i.Qc.prototype.type = h.i.jn;
h.i.Qc.prototype.za = function () {
    var a = h.i.Qc.v.za.call(this);
    a.element = this.element;
    void 0 !== this.newValue && (a.newValue = this.newValue);
    this.Tb && (a.blockId = this.Tb);
    return a
};
h.i.Qc.prototype.oa = function (a) {
    h.i.Qc.v.oa.call(this, a);
    this.element = a.element;
    this.newValue = a.newValue;
    this.Tb = a.blockId
};
h.g.o = {};
h.g.o.Mk = "http://www.w3.org/2000/svg";
h.g.o.Fm = "http://www.w3.org/1999/xhtml";
h.g.o.sh = "http://www.w3.org/1999/xlink";
h.g.o.Node = {ELEMENT_NODE: 1, TEXT_NODE: 3, COMMENT_NODE: 8, DOCUMENT_POSITION_CONTAINED_BY: 16};
h.g.o.cg = null;
h.g.o.xn = 0;
h.g.o.J = function (a, c, d) {
    a = document.createElementNS(h.g.o.Mk, a);
    for (var e in c) a.setAttribute(e, c[e]);
    document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
    d && d.appendChild(a);
    return a
};
h.g.o.Ab = function (a, c) {
    var d = a.getAttribute("class") || "";
    if (-1 != (" " + d + " ").indexOf(" " + c + " ")) return !1;
    d && (d += " ");
    a.setAttribute("class", d + c);
    return !0
};
h.g.o.Gc = function (a, c) {
    var d = a.getAttribute("class");
    if (-1 == (" " + d + " ").indexOf(" " + c + " ")) return !1;
    d = d.split(/\s+/);
    for (var e = 0; e < d.length; e++) d[e] && d[e] != c || (d.splice(e, 1), e--);
    d.length ? a.setAttribute("class", d.join(" ")) : a.removeAttribute("class");
    return !0
};
h.g.o.Xs = function (a, c) {
    return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + c + " ")
};
h.g.o.removeNode = function (a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
};
h.g.o.pj = function (a, c) {
    var d = c.nextSibling;
    c = c.parentNode;
    if (!c) throw Error("Reference node has no parent.");
    d ? c.insertBefore(a, d) : c.appendChild(a)
};
h.g.o.containsNode = function (a, c) {
    return !!(a.compareDocumentPosition(c) & h.g.o.Node.DOCUMENT_POSITION_CONTAINED_BY)
};
h.g.o.dm = function (a, c) {
    a.style.transform = c;
    a.style["-webkit-transform"] = c
};
h.g.o.Zj = function () {
    h.g.o.xn++;
    h.g.o.cg || (h.g.o.cg = {})
};
h.g.o.$j = function () {
    h.g.o.xn--;
    h.g.o.xn || (h.g.o.cg = null)
};
h.g.o.so = function (a) {
    var c = a.textContent + "\n" + a.className.baseVal, d;
    if (h.g.o.cg && (d = h.g.o.cg[c])) return d;
    try {
        d = h.g.userAgent.Xe || h.g.userAgent.Bk ? a.getBBox().width : a.getComputedTextLength()
    } catch (e) {
        return 8 * a.textContent.length
    }
    h.g.o.cg && (h.g.o.cg[c] = d);
    return d
};
h.gq = function (a) {
    this.Ui = a;
    this.Va()
};
b = h.gq.prototype;
b.Sa = null;
b.td = null;
b.Ui = null;
b.Ef = 1;
b.ak = null;
b.Va = function () {
    this.Sa || (this.Sa = h.g.o.J("svg", {
        xmlns: h.g.o.Mk,
        "xmlns:html": h.g.o.Fm,
        "xmlns:xlink": h.g.o.sh,
        version: "1.1",
        "class": "blocklyBlockDragSurface"
    }, this.Ui), this.td = h.g.o.J("g", {}, this.Sa))
};

function ba(a, c) {
    if (a.td.childNodes.length) throw Error("Already dragging a block.");
    a.td.appendChild(c);
    a.Sa.style.display = "block";
    a.ak = new h.g.M(0, 0)
}

b.Tg = function (a, c) {
    this.ak = new h.g.M(a * this.Ef, c * this.Ef);
    a = this.ak.x;
    c = this.ak.y;
    a = a.toFixed(0);
    c = c.toFixed(0);
    this.Sa.style.display = "block";
    h.g.o.dm(this.Sa, "translate3d(" + a + "px, " + c + "px, 0px)")
};
b.qo = function () {
    var a = h.g.Zc(this.Sa);
    return new h.g.M(a.x / this.Ef, a.y / this.Ef)
};
b.ub = function () {
    return this.td
};
b.Sk = function (a) {
    a ? a.appendChild(this.td.firstChild) : this.td.removeChild(this.td.firstChild);
    this.Sa.style.display = "none";
    if (this.td.childNodes.length) throw Error("Drag group was not cleared.");
    this.ak = null
};
h.g.Ek = {};
h.g.Ek.gz = 0;
h.g.Ek.ly = function () {
    return "blockly:" + (h.g.Ek.gz++).toString(36)
};
h.$b = function () {
    this.cu = h.$b.bs;
    this.Jh = null;
    this.bd = !1;
    this.nc = this.X = null;
    this.Cb = [];
    this.An = {}
};
h.$b.bs = !1;
h.$b.Error = {
    um: "Component already rendered",
    Qq: "Unable to set parent component",
    Xu: "Child component index out of bounds"
};
b = h.$b.prototype;
b.ib = function () {
    return this.Jh || (this.Jh = h.g.Ek.ly())
};
b.$h = function (a) {
    if (this == a) throw Error(h.$b.Error.Qq);
    var c;
    if (c = a && this.nc && this.Jh) c = (c = this.Jh) ? this.nc.An[c] || null : null;
    if (c && this.nc != a) throw Error(h.$b.Error.Qq);
    this.nc = a
};
b.getParent = function () {
    return this.nc
};
b.Va = function () {
    this.X = document.createElement("div")
};
b.wa = function (a) {
    this.Vh(a)
};
b.Vh = function (a, c) {
    if (this.bd) throw Error(h.$b.Error.um);
    this.X || this.Va();
    a ? a.insertBefore(this.X, c || null) : document.body.appendChild(this.X);
    this.nc && !this.nc.bd || this.ll()
};
b.ll = function () {
    this.bd = !0;
    ca(this, function (a) {
        !a.bd && a.X && a.ll()
    })
};
b.ml = function () {
    ca(this, function (a) {
        a.bd && a.ml()
    });
    this.bd = !1
};
b.G = function () {
    this.Dx || (this.Dx = !0, this.Tn())
};
b.Tn = function () {
    this.bd && this.ml();
    ca(this, function (a) {
        a.G()
    });
    this.X && h.g.o.removeNode(this.X);
    this.nc = this.X = this.An = this.Cb = null
};

function da(a, c) {
    var d = a.Cb.length;
    if (c.bd) throw Error(h.$b.Error.um);
    if (0 > d || d > a.Cb.length) throw Error(h.$b.Error.Xu);
    a.An[c.ib()] = c;
    if (c.getParent() == a) {
        var e = a.Cb.indexOf(c);
        -1 < e && a.Cb.splice(e, 1)
    }
    c.$h(a);
    a.Cb.splice(d, 0, c);
    c.bd && a.bd && c.getParent() == a ? (a = a.X, d = a.childNodes[d] || null, d != c.X && a.insertBefore(c.X, d)) : (a.X || a.Va(), d = a.Cb[d + 1] || null, c.Vh(a.X, d ? d.X : null))
}

b.ot = function () {
    return this.cu
};

function ea(a, c) {
    if (a.bd) throw Error(h.$b.Error.um);
    a.cu = c
}

function ca(a, c, d) {
    for (var e = 0; e < a.Cb.length; e++) c.call(d, a.Cb[e], e)
};h.Lc = {};
h.Lc.Eo = !1;
h.Lc.register = function (a) {
    if (h.Lc.Eo) throw Error("CSS already injected");
    Array.prototype.push.apply(h.Lc.Am, a);
    a.length = 0
};
h.Lc.nf = function (a, c) {
    if (!h.Lc.Eo) {
        h.Lc.Eo = !0;
        var d = h.Lc.Am.join("\n");
        h.Lc.Am.length = 0;
        a && (a = c.replace(/[\\/]$/, ""), d = d.replace(/<<<PATH>>>/g, a), a = document.createElement("style"), d = document.createTextNode(d), a.appendChild(d), document.head.insertBefore(a, document.head.firstChild))
    }
};
h.Lc.ju = function () {
    console.warn("Deprecated call to Blockly.Css.setCursor. See https://github.com/google/blockly/issues/981 for context")
};
h.Lc.Am = [".blocklySvg {", "background-color: #fff;", "outline: none;", "overflow: hidden;", "position: absolute;", "display: block;", "}", ".blocklyWidgetDiv {", "display: none;", "position: absolute;", "z-index: 99999;", "}", ".injectionDiv {", "height: 100%;", "position: relative;", "overflow: hidden;", "touch-action: none;", "}", ".blocklyNonSelectable {", "user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "}", ".blocklyWsDragSurface {", "display: none;", "position: absolute;", "top: 0;", "left: 0;",
    "}", ".blocklyWsDragSurface.blocklyOverflowVisible {", "overflow: visible;", "}", ".blocklyBlockDragSurface {", "display: none;", "position: absolute;", "top: 0;", "left: 0;", "right: 0;", "bottom: 0;", "overflow: visible !important;", "z-index: 50;", "}", ".blocklyBlockCanvas.blocklyCanvasTransitioning,", ".blocklyBubbleCanvas.blocklyCanvasTransitioning {", "transition: transform .5s;", "}", ".blocklyTooltipDiv {", "background-color: #ffffc7;", "border: 1px solid #ddc;", "box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);",
    "color: #000;", "display: none;", "font-family: sans-serif;", "font-size: 9pt;", "opacity: .9;", "padding: 2px;", "position: absolute;", "z-index: 100000;", "}", ".blocklyDropDownDiv {", "position: fixed;", "left: 0;", "top: 0;", "z-index: 1000;", "display: none;", "border: 1px solid;", "border-radius: 2px;", "padding: 4px;", "box-shadow: 0px 0px 3px 1px rgba(0,0,0,.3);", "}", ".blocklyDropDownDiv.focused {", "box-shadow: 0px 0px 6px 1px rgba(0,0,0,.3);", "}", ".blocklyDropDownContent {", "max-height: 300px;", "overflow: auto;",
    "overflow-x: hidden;", "}", ".blocklyDropDownArrow {", "position: absolute;", "left: 0;", "top: 0;", "width: 16px;", "height: 16px;", "z-index: -1;", "background-color: inherit;", "border-color: inherit;", "}", ".blocklyDropDownButton {", "display: inline-block;", "float: left;", "padding: 0;", "margin: 4px;", "border-radius: 4px;", "outline: none;", "border: 1px solid;", "transition: box-shadow .1s;", "cursor: pointer;", "}", ".arrowTop {", "border-top: 1px solid;", "border-left: 1px solid;", "border-top-left-radius: 4px;",
    "border-color: inherit;", "}", ".arrowBottom {", "border-bottom: 1px solid;", "border-right: 1px solid;", "border-bottom-right-radius: 4px;", "border-color: inherit;", "}", ".blocklyResizeSE {", "cursor: se-resize;", "fill: #aaa;", "}", ".blocklyResizeSW {", "cursor: sw-resize;", "fill: #aaa;", "}", ".blocklyResizeLine {", "stroke: #515A5A;", "stroke-width: 1;", "}", ".blocklyHighlightedConnectionPath {", "fill: none;", "stroke: #fc3;", "stroke-width: 4px;", "}", ".blocklyPathLight {", "fill: none;", "stroke-linecap: round;",
    "stroke-width: 1;", "}", ".blocklySelected>.blocklyPath {", "stroke: #fc3;", "stroke-width: 3px;", "}", ".blocklySelected>.blocklyPathLight {", "display: none;", "}", ".blocklyDraggable {", 'cursor: url("<<<PATH>>>/handopen.cur"), auto;', "cursor: grab;", "cursor: -webkit-grab;", "}", ".blocklyDragging {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyDraggable:active {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;",
    "}", ".blocklyBlockDragSurface .blocklyDraggable {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyDragging.blocklyDraggingDelete {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyDragging>.blocklyPath,", ".blocklyDragging>.blocklyPathLight {", "fill-opacity: .8;", "stroke-opacity: .8;", "}", ".blocklyDragging>.blocklyPathDark {", "display: none;", "}", ".blocklyDisabled>.blocklyPath {", "fill-opacity: .5;", "stroke-opacity: .5;",
    "}", ".blocklyDisabled>.blocklyPathLight,", ".blocklyDisabled>.blocklyPathDark {", "display: none;", "}", ".blocklyInsertionMarker>.blocklyPath,", ".blocklyInsertionMarker>.blocklyPathLight,", ".blocklyInsertionMarker>.blocklyPathDark {", "fill-opacity: .2;", "stroke: none", "}", ".blocklyReplaceable .blocklyPath {", "fill-opacity: .5;", "}", ".blocklyReplaceable .blocklyPathLight,", ".blocklyReplaceable .blocklyPathDark {", "display: none;", "}", ".blocklyText {", "cursor: default;", "fill: #fff;", "font-family: sans-serif;",
    "font-size: 11pt;", "}", ".blocklyMultilineText {", "font-family: monospace;", "}", ".blocklyNonEditableText>text {", "pointer-events: none;", "}", ".blocklyNonEditableText>rect,", ".blocklyEditableText>rect {", "fill: #fff;", "fill-opacity: .6;", "}", ".blocklyNonEditableText>text,", ".blocklyEditableText>text {", "fill: #000;", "}", ".blocklyEditableText:hover>rect {", "stroke: #fff;", "stroke-width: 2;", "}", ".blocklyBubbleText {", "fill: #000;", "}", ".blocklyFlyout {", "position: absolute;", "z-index: 20;", "}", ".blocklySvg text, .blocklyBlockDragSurface text {",
    "user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "cursor: inherit;", "}", ".blocklyHidden {", "display: none;", "}", ".blocklyFieldDropdown:not(.blocklyHidden) {", "display: block;", "}", ".blocklyIconGroup {", "cursor: default;", "}", ".blocklyIconGroup:not(:hover),", ".blocklyIconGroupReadonly {", "opacity: .6;", "}", ".blocklyIconShape {", "fill: #00f;", "stroke: #fff;", "stroke-width: 1px;", "}", ".blocklyIconSymbol {", "fill: #fff;", "}", ".blocklyMinimalBody {", "margin: 0;", "padding: 0;",
    "}", ".blocklyCommentForeignObject {", "position: relative;", "z-index: 0;", "}", ".blocklyCommentRect {", "fill: #E7DE8E;", "stroke: #bcA903;", "stroke-width: 1px", "}", ".blocklyCommentTarget {", "fill: transparent;", "stroke: #bcA903;", "}", ".blocklyCommentTargetFocused {", "fill: none;", "}", ".blocklyCommentHandleTarget {", "fill: none;", "}", ".blocklyCommentHandleTargetFocused {", "fill: transparent;", "}", ".blocklyFocused>.blocklyCommentRect {", "fill: #B9B272;", "stroke: #B9B272;", "}", ".blocklySelected>.blocklyCommentTarget {",
    "stroke: #fc3;", "stroke-width: 3px;", "}", ".blocklyCommentTextarea {", "background-color: #fef49c;", "border: 0;", "outline: 0;", "margin: 0;", "padding: 3px;", "resize: none;", "display: block;", "overflow: hidden;", "}", ".blocklyCommentDeleteIcon {", "cursor: pointer;", "fill: #000;", "display: none", "}", ".blocklySelected > .blocklyCommentDeleteIcon {", "display: block", "}", ".blocklyDeleteIconShape {", "fill: #000;", "stroke: #000;", "stroke-width: 1px;", "}", ".blocklyDeleteIconShape.blocklyDeleteIconHighlighted {",
    "stroke: #fc3;", "}", ".blocklyHtmlInput {", "border: none;", "border-radius: 4px;", "font-family: sans-serif;", "height: 100%;", "margin: 0;", "outline: none;", "padding: 0;", "width: 100%;", "text-align: center;", "}", ".blocklyHtmlInput::-ms-clear {", "display: none;", "}", ".blocklyMainBackground {", "stroke-width: 1;", "stroke: #c6c6c6;", "}", ".blocklyMutatorBackground {", "fill: #fff;", "stroke: #ddd;", "stroke-width: 1;", "}", ".blocklyFlyoutBackground {", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyMainWorkspaceScrollbar {",
    "z-index: 20;", "}", ".blocklyFlyoutScrollbar {", "z-index: 30;", "}", ".blocklyScrollbarHorizontal, .blocklyScrollbarVertical {", "position: absolute;", "outline: none;", "}", ".blocklyScrollbarBackground {", "opacity: 0;", "}", ".blocklyScrollbarHandle {", "fill: #ccc;", "}", ".blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyScrollbarHandle:hover {", "fill: #bbb;", "}", ".blocklyFlyout .blocklyScrollbarHandle {", "fill: #bbb;", "}", ".blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,",
    ".blocklyFlyout .blocklyScrollbarHandle:hover {", "fill: #aaa;", "}", ".blocklyInvalidInput {", "background: #faa;", "}", ".blocklyContextMenu {", "border-radius: 4px;", "max-height: 100%;", "}", ".blocklyDropdownMenu {", "border-radius: 2px;", "padding: 0 !important;", "}", ".blocklyWidgetDiv .blocklyDropdownMenu .goog-menuitem,", ".blocklyDropDownDiv .blocklyDropdownMenu .goog-menuitem {", "padding-left: 28px;", "}", ".blocklyWidgetDiv .blocklyDropdownMenu .goog-menuitem.goog-menuitem-rtl,", ".blocklyDropDownDiv .blocklyDropdownMenu .goog-menuitem.goog-menuitem-rtl {",
    "padding-left: 5px;", "padding-right: 28px;", "}", ".blocklyVerticalCursor {", "stroke-width: 3px;", "fill: rgba(255,255,255,.5);", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon,", ".blocklyDropDownDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyDropDownDiv .goog-option-selected .goog-menuitem-icon {", "background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px;", "}", ".blocklyWidgetDiv .goog-menu {", "background: #fff;",
    "border-color: transparent;", "border-style: solid;", "border-width: 1px;", "cursor: default;", "font: normal 13px Arial, sans-serif;", "margin: 0;", "outline: none;", "padding: 4px 0;", "position: absolute;", "overflow-y: auto;", "overflow-x: hidden;", "max-height: 100%;", "z-index: 20000;", "box-shadow: 0px 0px 3px 1px rgba(0,0,0,.3);", "}", ".blocklyWidgetDiv .goog-menu.focused {", "box-shadow: 0px 0px 6px 1px rgba(0,0,0,.3);", "}", ".blocklyDropDownDiv .goog-menu {", "cursor: default;", 'font: normal 13px "Helvetica Neue", Helvetica, sans-serif;',
    "outline: none;", "z-index: 20000;", "}", ".blocklyWidgetDiv .goog-menuitem,", ".blocklyDropDownDiv .goog-menuitem {", "color: #000;", "font: normal 13px Arial, sans-serif;", "list-style: none;", "margin: 0;", "min-width: 7em;", "border: none;", "padding: 6px 15px;", "white-space: nowrap;", "cursor: pointer;", "}", ".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,", ".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem,", ".blocklyDropDownDiv .goog-menu-nocheckbox .goog-menuitem,", ".blocklyDropDownDiv .goog-menu-noicon .goog-menuitem {",
    "padding-left: 12px;", "}", ".blocklyWidgetDiv .goog-menuitem-content,", ".blocklyDropDownDiv .goog-menuitem-content {", "font: normal 13px Arial, sans-serif;", "}", ".blocklyWidgetDiv .goog-menuitem-content {", "color: #000;", "}", ".blocklyDropDownDiv .goog-menuitem-content {", "color: #000;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled,", ".blocklyDropDownDiv .goog-menuitem-disabled {", "cursor: inherit;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content,", ".blocklyDropDownDiv .goog-menuitem-disabled .goog-menuitem-content {",
    "color: #ccc !important;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon,", ".blocklyDropDownDiv .goog-menuitem-disabled .goog-menuitem-icon {", "opacity: .3;", "filter: alpha(opacity=30);", "}", ".blocklyWidgetDiv .goog-menuitem-highlight ,", ".blocklyDropDownDiv .goog-menuitem-highlight {", "background-color: rgba(0,0,0,.1);", "}", ".blocklyWidgetDiv .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-icon,", ".blocklyDropDownDiv .goog-menuitem-checkbox,", ".blocklyDropDownDiv .goog-menuitem-icon {",
    "background-repeat: no-repeat;", "height: 16px;", "left: 6px;", "position: absolute;", "right: auto;", "vertical-align: middle;", "width: 16px;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon,", ".blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-icon {", "left: auto;", "right: 6px;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon,",
    ".blocklyDropDownDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyDropDownDiv .goog-option-selected .goog-menuitem-icon {", "position: static;", "float: left;", "margin-left: -24px;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon,", ".blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-icon {", "float: right;", "margin-right: -24px;", "}"];
h.w = function () {
};
h.w.Mc = null;
h.w.vn = null;
h.w.Xb = null;
h.w.$l = null;
h.w.qk = 16;
h.w.fq = 1;
h.w.Zp = 12;
h.w.Oq = 16;
h.w.vm = .25;
h.w.lq = "#dadce0";
h.w.mq = "#fff";
h.w.ln = null;
h.w.Gg = null;
h.w.Va = function () {
    if (!h.w.Mc) {
        var a = document.createElement("div");
        a.className = "blocklyDropDownDiv";
        a.style.backgroundColor = h.w.mq;
        a.style.borderColor = h.w.lq;
        document.body.appendChild(a);
        h.w.Mc = a;
        var c = document.createElement("div");
        c.className = "blocklyDropDownContent";
        a.appendChild(c);
        h.w.ff = c;
        c = document.createElement("div");
        c.className = "blocklyDropDownArrow";
        a.appendChild(c);
        h.w.pd = c;
        h.w.Mc.style.opacity = 0;
        h.w.Mc.style.transition = "transform " + h.w.vm + "s, opacity " + h.w.vm + "s";
        a.addEventListener("focusin",
            function () {
                h.g.o.Ab(a, "focused")
            });
        a.addEventListener("focusout", function () {
            h.g.o.Gc(a, "focused")
        })
    }
};
h.w.gu = function (a) {
    h.w.vn = a
};
h.w.gy = function () {
    return h.w.ff
};
h.w.ax = function () {
    h.w.ff.innerHTML = "";
    h.w.ff.style.width = ""
};
h.w.zd = function (a) {
    h.w.Mc.style.backgroundColor = a;
    h.w.Mc.style.borderColor = void 0
};
h.w.yF = function (a) {
    h.w.Mc.setAttribute("data-category", a)
};
h.w.BF = function (a, c, d, e) {
    var f = c.C.scale, g = c.width, k = c.height;
    g *= f;
    k *= f;
    f = c.ga().getBoundingClientRect();
    g = f.left + g / 2;
    k = f.top + k;
    f = f.top;
    e && (f += e);
    h.w.gu(y(c.C).parentNode);
    return h.w.show(a, c.H, g, k, g, f, d)
};
h.w.Rz = function (a, c) {
    var d = a.ga().getBoundingClientRect(), e = d.left + d.width / 2, f = d.bottom;
    d = d.top;
    var g = a.B;
    h.w.$l = !0;
    h.w.gu(y(g.C).parentNode);
    h.w.show(a, g.H, e, f, e, d, c)
};
h.w.show = function (a, c, d, e, f, g, k) {
    h.w.Xb = a;
    h.w.Gg = k || null;
    a = h.w.Ls(d, e, f, g);
    a.nn ? (h.w.pd.style.display = "", h.w.pd.style.transform = "translate(" + a.Ii + "px," + a.Cr + "px) rotate(45deg)", h.w.pd.setAttribute("class", a.mn ? "blocklyDropDownArrow arrowTop" : "blocklyDropDownArrow arrowBottom")) : h.w.pd.style.display = "none";
    h.w.Mc.style.direction = c ? "rtl" : "ltr";
    h.w.Mj(a.Dl, a.El, a.ol, a.ql);
    return a.mn
};
h.w.Xx = function () {
    var a = h.w.vn.getBoundingClientRect(), c = h.g.style.Ie(h.w.vn);
    return {
        left: a.left,
        right: a.left + c.width,
        top: a.top,
        bottom: a.top + c.height,
        width: c.width,
        height: c.height
    }
};
h.w.Ls = function (a, c, d, e) {
    var f = h.w.Xx(), g = h.g.style.Ie(h.w.Mc);
    return c + g.height < f.bottom ? h.w.Ks(a, c, f, g) : e - g.height > f.top ? h.w.Js(d, e, f, g) : c + g.height < document.documentElement.clientHeight ? h.w.Ks(a, c, f, g) : e - g.height > document.documentElement.clientTop ? h.w.Js(d, e, f, g) : h.w.ny(a, f, g)
};
h.w.Ks = function (a, c, d, e) {
    a = h.w.oo(a, d.left, d.right, e.width);
    return {Dl: a.Bh, El: c, ol: a.Bh, ql: c + h.w.Oq, Ii: a.Ii, Cr: -(h.w.qk / 2 + h.w.fq), mn: !0, nn: !0}
};
h.w.Js = function (a, c, d, e) {
    a = h.w.oo(a, d.left, d.right, e.width);
    return {
        Dl: a.Bh,
        El: c - e.height,
        ol: a.Bh,
        ql: c - e.height - h.w.Oq,
        Ii: a.Ii,
        Cr: e.height - 2 * h.w.fq - h.w.qk / 2,
        mn: !1,
        nn: !0
    }
};
h.w.ny = function (a, c, d) {
    a = h.w.oo(a, c.left, c.right, d.width);
    return {Dl: a.Bh, El: 0, ol: a.Bh, ql: 0, nn: !1}
};
h.w.oo = function (a, c, d, e) {
    var f = a;
    a = h.g.Vb.Ni(c, a - e / 2, d - e);
    f -= h.w.qk / 2;
    c = h.g.Vb.Ni(h.w.Zp, f - a, e - h.w.Zp - h.w.qk);
    return {Ii: c, Bh: a}
};
h.w.isVisible = function () {
    return !!h.w.Xb
};
h.w.jj = function (a, c) {
    h.w.Xb === a && (c ? h.w.Bo() : h.w.Ia())
};
h.w.Ia = function () {
    var a = h.w.Mc;
    a.style.transform = "translate(0, 0)";
    a.style.opacity = 0;
    h.w.ln = setTimeout(function () {
        h.w.Bo()
    }, 1E3 * h.w.vm);
    h.w.Gg && (h.w.Gg(), h.w.Gg = null)
};
h.w.Bo = function () {
    if (h.w.isVisible()) {
        h.w.ln && clearTimeout(h.w.ln);
        var a = h.w.Mc;
        a.style.transform = "";
        a.style.left = "";
        a.style.top = "";
        a.style.opacity = 0;
        a.style.display = "none";
        a.style.backgroundColor = h.w.mq;
        a.style.borderColor = h.w.lq;
        h.w.Gg && (h.w.Gg(), h.w.Gg = null);
        h.w.ax();
        h.w.Xb = null
    }
};
h.w.Mj = function (a, c, d, e) {
    a = Math.floor(a);
    c = Math.floor(c);
    d = Math.floor(d);
    e = Math.floor(e);
    var f = h.w.Mc;
    f.style.left = a + "px";
    f.style.top = c + "px";
    f.style.display = "block";
    f.style.opacity = 1;
    f.style.transform = "translate(" + (d - a) + "px," + (e - c) + "px)"
};
h.w.rF = function () {
    if (h.w.Xb) {
        var a = h.w.Xb.B, c = a.C.scale, d = h.w.$l ? h.w.Xb.jb.width : a.width,
            e = h.w.$l ? h.w.Xb.jb.height : a.height;
        d *= c;
        e *= c;
        a = h.w.$l ? h.w.Xb.Wc.getBoundingClientRect() : a.ga().getBoundingClientRect();
        d = a.left + d / 2;
        e = h.w.Ls(d, a.top + e, d, a.top);
        h.w.Mj(e.Dl, e.El, e.ol, e.ql)
    } else h.w.Ia()
};
h.Nf = function (a, c) {
    this.Gh = a;
    this.Fp = c.spacing;
    this.tt = c.length;
    this.Uy = (this.Po = a.firstChild) && this.Po.nextSibling;
    this.Uz = c.snap
};
h.Nf.prototype.Ef = 1;
h.Nf.prototype.G = function () {
    this.Gh = null
};
h.Nf.prototype.update = function (a) {
    this.Ef = a;
    var c = this.Fp * a || 100;
    this.Gh.setAttribute("width", c);
    this.Gh.setAttribute("height", c);
    c = Math.floor(this.Fp / 2) + .5;
    var d = c - this.tt / 2, e = c + this.tt / 2;
    c *= a;
    d *= a;
    e *= a;
    fa(this.Po, a, d, e, c, c);
    fa(this.Uy, a, c, c, d, e)
};

function fa(a, c, d, e, f, g) {
    a && (a.setAttribute("stroke-width", c), a.setAttribute("x1", d), a.setAttribute("y1", f), a.setAttribute("x2", e), a.setAttribute("y2", g))
}

h.Nf.prototype.moveTo = function (a, c) {
    this.Gh.setAttribute("x", a);
    this.Gh.setAttribute("y", c);
    (h.g.userAgent.Xe || h.g.userAgent.Bk) && this.update(this.Ef)
};
h.Nf.Va = function (a, c, d) {
    a = h.g.o.J("pattern", {id: "blocklyGridPattern" + a, patternUnits: "userSpaceOnUse"}, d);
    0 < c.length && 0 < c.spacing ? (h.g.o.J("line", {stroke: c.colour}, a), 1 < c.length && h.g.o.J("line", {stroke: c.colour}, a)) : h.g.o.J("line", {}, a);
    return a
};
h.g.xml = {};
h.g.xml.Rv = "https://developers.google.com/blockly/xml";
h.g.xml.document = function () {
    return document
};
h.g.xml.createElement = function (a) {
    return h.g.xml.document().createElementNS(h.g.xml.Rv, a)
};
h.g.xml.createTextNode = function (a) {
    return h.g.xml.document().createTextNode(a)
};
h.g.xml.$z = function (a) {
    return (new DOMParser).parseFromString(a, "text/xml")
};
h.g.xml.Sd = function (a) {
    return (new XMLSerializer).serializeToString(a)
};
h.i.Dd = function (a) {
    h.i.Dd.v.constructor.call(this);
    this.Tb = a.id;
    this.Ib = a.C.id
};
h.g.object.S(h.i.Dd, h.i.Abstract);
h.i.Dd.prototype.za = function () {
    var a = h.i.Dd.v.za.call(this);
    a.blockId = this.Tb;
    return a
};
h.i.Dd.prototype.oa = function (a) {
    h.i.Dd.v.oa.call(this, a);
    this.Tb = a.blockId
};
h.i.We = function (a, c, d, e, f) {
    a && (h.i.We.v.constructor.call(this, a), this.element = c, this.name = d, this.oldValue = e, this.newValue = f)
};
h.g.object.S(h.i.We, h.i.Dd);
h.i.$g = h.i.We;
b = h.i.We.prototype;
b.type = h.i.ni;
b.za = function () {
    var a = h.i.We.v.za.call(this);
    a.element = this.element;
    this.name && (a.name = this.name);
    a.newValue = this.newValue;
    return a
};
b.oa = function (a) {
    h.i.We.v.oa.call(this, a);
    this.element = a.element;
    this.name = a.name;
    this.newValue = a.newValue
};
b.Mh = function () {
    return this.oldValue == this.newValue
};
b.run = function (a) {
    var c = u(x(this), this.Tb);
    if (c) switch (c.vf && c.vf.Yb(!1), a = a ? this.newValue : this.oldValue, this.element) {
        case "field":
            (c = z(c, this.name)) ? c.setValue(a) : console.warn("Can't set non-existent field: " + this.name);
            break;
        case "comment":
            c.Zh(a || null);
            break;
        case "collapsed":
            c.Ff(!!a);
            break;
        case "disabled":
            c.Re(!a);
            break;
        case "inline":
            c.Mg(!!a);
            break;
        case "mutation":
            var d = "";
            c.Wb && (d = (d = c.Wb()) && h.I.Sd(d));
            if (c.yc) {
                var e = h.I.Ue(a || "<mutation/>");
                c.yc(e)
            }
            h.i.Ma(new h.i.We(c, "mutation", null, d, a));
            break;
        default:
            console.warn("Unknown change type: " + this.element)
    } else console.warn("Can't change non-existent block: " + this.Tb)
};
h.i.Ed = function (a) {
    a && (h.i.Ed.v.constructor.call(this, a), this.xml = a.C.$ ? h.I.tn(a) : h.I.$f(a), this.tg = h.i.Fs(a))
};
h.g.object.S(h.i.Ed, h.i.Dd);
h.i.tk = h.i.Ed;
h.i.Ed.prototype.type = h.i.yk;
h.i.Ed.prototype.za = function () {
    var a = h.i.Ed.v.za.call(this);
    a.xml = h.I.Sd(this.xml);
    a.ids = this.tg;
    return a
};
h.i.Ed.prototype.oa = function (a) {
    h.i.Ed.v.oa.call(this, a);
    this.xml = h.I.Ue(a.xml);
    this.tg = a.ids
};
h.i.Ed.prototype.run = function (a) {
    var c = x(this);
    if (a) a = h.g.xml.createElement("xml"), a.appendChild(this.xml), h.I.Fe(a, c); else {
        a = 0;
        for (var d; d = this.tg[a]; a++) {
            var e = u(c, d);
            e ? e.G(!1) : d == this.Tb && console.warn("Can't uncreate non-existent block: " + d)
        }
    }
};
h.i.Fd = function (a) {
    if (a) {
        if (a.getParent()) throw Error("Connected blocks cannot be deleted.");
        h.i.Fd.v.constructor.call(this, a);
        this.jz = a.C.$ ? h.I.tn(a) : h.I.$f(a);
        this.tg = h.i.Fs(a)
    }
};
h.g.object.S(h.i.Fd, h.i.Dd);
h.i.Vu = h.i.Fd;
h.i.Fd.prototype.type = h.i.pi;
h.i.Fd.prototype.za = function () {
    var a = h.i.Fd.v.za.call(this);
    a.ids = this.tg;
    return a
};
h.i.Fd.prototype.oa = function (a) {
    h.i.Fd.v.oa.call(this, a);
    this.tg = a.ids
};
h.i.Fd.prototype.run = function (a) {
    var c = x(this);
    if (a) {
        a = 0;
        for (var d; d = this.tg[a]; a++) {
            var e = u(c, d);
            e ? e.G(!1) : d == this.Tb && console.warn("Can't delete non-existent block: " + d)
        }
    } else a = h.g.xml.createElement("xml"), a.appendChild(this.jz), h.I.Fe(a, c)
};
h.i.Qf = function (a) {
    a && (h.i.Qf.v.constructor.call(this, a), a = ha(this), this.It = a.Pt, this.Ht = a.ht, this.ep = a.Xr)
};
h.g.object.S(h.i.Qf, h.i.Dd);
h.i.li = h.i.Qf;
b = h.i.Qf.prototype;
b.type = h.i.yi;
b.za = function () {
    var a = h.i.Qf.v.za.call(this);
    this.Dg && (a.newParentId = this.Dg);
    this.Cg && (a.newInputName = this.Cg);
    this.wf && (a.newCoordinate = Math.round(this.wf.x) + "," + Math.round(this.wf.y));
    return a
};
b.oa = function (a) {
    h.i.Qf.v.oa.call(this, a);
    this.Dg = a.newParentId;
    this.Cg = a.newInputName;
    a.newCoordinate && (a = a.newCoordinate.split(","), this.wf = new h.g.M(Number(a[0]), Number(a[1])))
};
b.Jg = function () {
    var a = ha(this);
    this.Dg = a.Pt;
    this.Cg = a.ht;
    this.wf = a.Xr
};

function ha(a) {
    var c = u(x(a), a.Tb);
    a = {};
    var d = c.getParent();
    if (d) {
        a.Pt = d.id;
        a:{
            for (var e = 0, f; f = d.K[e]; e++) if (f.connection && A(f.connection) == c) {
                c = f;
                break a
            }
            c = null
        }
        c && (a.ht = c.name)
    } else a.Xr = c.Fa();
    return a
}

b.Mh = function () {
    return this.It == this.Dg && this.Ht == this.Cg && h.g.M.Ud(this.ep, this.wf)
};
b.run = function (a) {
    var c = x(this), d = u(c, this.Tb);
    if (d) {
        var e = a ? this.Dg : this.It, f = a ? this.Cg : this.Ht;
        a = a ? this.wf : this.ep;
        var g = null;
        if (e && (g = u(c, e), !g)) {
            console.warn("Can't connect to non-existent block: " + e);
            return
        }
        d.getParent() && B(d);
        if (a) f = d.Fa(), d.moveBy(a.x - f.x, a.y - f.y); else {
            d = d.L || d.N;
            if (f) {
                if (c = ia(g, f)) var k = c.connection
            } else d.type == h.ld && (k = g.W);
            k ? d.connect(k) : console.warn("Can't connect to non-existent input: " + f)
        }
    } else console.warn("Can't move non-existent block: " + this.Tb)
};
h.i.si = function (a) {
    this.Ib = a.id;
    this.group = h.i.ub();
    this.Mb = !1
};
h.g.object.S(h.i.si, h.i.Abstract);
h.i.si.prototype.type = h.i.qv;
h.i.si.prototype.za = function () {
    var a = {type: this.type};
    this.group && (a.group = this.group);
    this.Ib && (a.workspaceId = this.Ib);
    return a
};
h.i.si.prototype.oa = function (a) {
    this.Ib = a.workspaceId;
    this.group = a.group
};
h.i.ve = function (a) {
    h.i.ve.v.constructor.call(this);
    this.Hf = a.ib();
    this.Ib = a.C.id
};
h.g.object.S(h.i.ve, h.i.Abstract);
h.i.ve.prototype.za = function () {
    var a = h.i.ve.v.za.call(this);
    a.varId = this.Hf;
    return a
};
h.i.ve.prototype.oa = function (a) {
    h.i.ve.v.za.call(this);
    this.Hf = a.varId
};
h.i.nd = function (a) {
    a && (h.i.nd.v.constructor.call(this, a), this.Wg = a.type, this.Vg = a.name)
};
h.g.object.S(h.i.nd, h.i.ve);
h.i.nd.prototype.type = h.i.lr;
h.i.nd.prototype.za = function () {
    var a = h.i.nd.v.za.call(this);
    a.varType = this.Wg;
    a.varName = this.Vg;
    return a
};
h.i.nd.prototype.oa = function (a) {
    h.i.nd.v.oa.call(this, a);
    this.Wg = a.varType;
    this.Vg = a.varName
};
h.i.nd.prototype.run = function (a) {
    var c = x(this);
    a ? c.sd(this.Vg, this.Wg, this.Hf) : c.Ah(this.Hf)
};
h.i.od = function (a) {
    a && (h.i.od.v.constructor.call(this, a), this.Wg = a.type, this.Vg = a.name)
};
h.g.object.S(h.i.od, h.i.ve);
h.i.od.prototype.type = h.i.mr;
h.i.od.prototype.za = function () {
    var a = h.i.od.v.za.call(this);
    a.varType = this.Wg;
    a.varName = this.Vg;
    return a
};
h.i.od.prototype.oa = function (a) {
    h.i.od.v.oa.call(this, a);
    this.Wg = a.varType;
    this.Vg = a.varName
};
h.i.od.prototype.run = function (a) {
    var c = x(this);
    a ? c.Ah(this.Hf) : c.sd(this.Vg, this.Wg, this.Hf)
};
h.i.Md = function (a, c) {
    a && (h.i.Md.v.constructor.call(this, a), this.gp = a.name, this.ap = c)
};
h.g.object.S(h.i.Md, h.i.ve);
h.i.Md.prototype.type = h.i.nr;
h.i.Md.prototype.za = function () {
    var a = h.i.Md.v.za.call(this);
    a.oldName = this.gp;
    a.newName = this.ap;
    return a
};
h.i.Md.prototype.oa = function (a) {
    h.i.Md.v.oa.call(this, a);
    this.gp = a.oldName;
    this.ap = a.newName
};
h.i.Md.prototype.run = function (a) {
    var c = x(this);
    a ? c.Kg(this.Hf, this.ap) : c.Kg(this.Hf, this.gp)
};
h.I = {};
h.I.Cu = function (a) {
    var c = C, d = h.g.xml.createElement("xml"), e = h.I.jA(h.na.Hw(c));
    e.hasChildNodes() && d.appendChild(e);
    var f = ja(c, !0);
    e = 0;
    for (var g; g = f[e]; e++) d.appendChild(g.Mp(a));
    c = D(c, !0);
    for (e = 0; f = c[e]; e++) d.appendChild(h.I.tn(f, a));
    return d
};
h.I.jA = function (a) {
    for (var c = h.g.xml.createElement("variables"), d = 0, e; e = a[d]; d++) {
        var f = h.g.xml.createElement("variable");
        f.appendChild(h.g.xml.createTextNode(e.name));
        e.type && f.setAttribute("type", e.type);
        f.id = e.ib();
        c.appendChild(f)
    }
    return c
};
h.I.tn = function (a, c) {
    var d;
    a.C.H && (d = a.C.gj());
    c = h.I.$f(a, c);
    var e = a.Fa();
    c.setAttribute("x", Math.round(a.C.H ? d - e.x : e.x));
    c.setAttribute("y", Math.round(e.y));
    return c
};
h.I.Lx = function (a) {
    var c = !1;
    a.name && (a.Zq ? c = !0 : a.Gd && (console.warn("Detected an editable field that was not serializable. Please define SERIALIZABLE property as true on all editable custom fields. Proceeding with serialization."), c = !0));
    return c ? (c = h.g.xml.createElement("field"), c.setAttribute("name", a.name), c.textContent = a.getValue(), c) : null
};
h.I.Fw = function (a, c) {
    for (var d = 0, e; e = a.K[d]; d++) for (var f = 0, g; g = e.Ea[f]; f++) (g = h.I.Lx(g)) && c.appendChild(g)
};
h.I.$f = function (a, c) {
    var d = h.g.xml.createElement(a.Qa ? "shadow" : "block");
    d.setAttribute("type", a.type);
    c || (d.id = a.id);
    if (a.Wb) {
        var e = a.Wb();
        e && (e.hasChildNodes() || e.hasAttributes()) && d.appendChild(e)
    }
    h.I.Fw(a, d);
    if (e = a.Be.text) {
        var f = a.Be.size, g = a.Be.St, k = h.g.xml.createElement("comment");
        k.appendChild(h.g.xml.createTextNode(e));
        k.setAttribute("pinned", g);
        k.setAttribute("h", f.height);
        k.setAttribute("w", f.width);
        d.appendChild(k)
    }
    a.data && (e = h.g.xml.createElement("data"), e.appendChild(h.g.xml.createTextNode(a.data)),
        d.appendChild(e));
    for (f = 0; g = a.K[f]; f++) {
        var l;
        k = !0;
        if (g.type != h.qe) {
            var m = A(g.connection);
            g.type == h.Ha ? l = h.g.xml.createElement("value") : g.type == h.Ca && (l = h.g.xml.createElement("statement"));
            e = g.connection.ae;
            !e || m && m.Qa || l.appendChild(h.I.Mr(e, c));
            m && (l.appendChild(h.I.$f(m, c)), k = !1);
            l.setAttribute("name", g.name);
            k || d.appendChild(l)
        }
    }
    void 0 != a.Le && a.Le != a.Ly && d.setAttribute("inline", a.Le);
    a.isCollapsed() && d.setAttribute("collapsed", !0);
    a.isEnabled() || d.setAttribute("disabled", !0);
    a.Cc() || a.Qa || d.setAttribute("deletable",
        !1);
    a.mc() || a.Qa || d.setAttribute("movable", !1);
    a.Dc() || d.setAttribute("editable", !1);
    if (f = t(a)) l = h.g.xml.createElement("next"), l.appendChild(h.I.$f(f, c)), d.appendChild(l);
    e = a.W && a.W.ae;
    !e || f && f.Qa || l.appendChild(h.I.Mr(e, c));
    return d
};
h.I.Mr = function (a, c) {
    for (var d = a = a.cloneNode(!0), e; d;) if (c && "shadow" == d.nodeName && d.removeAttribute("id"), d.firstChild) d = d.firstChild; else {
        for (; d && !d.nextSibling;) e = d, d = d.parentNode, e.nodeType == h.g.o.Node.TEXT_NODE && "" == e.data.trim() && d.firstChild != e && h.g.o.removeNode(e);
        d && (e = d, d = d.nextSibling, e.nodeType == h.g.o.Node.TEXT_NODE && "" == e.data.trim() && h.g.o.removeNode(e))
    }
    return a
};
h.I.Sd = function (a) {
    a = h.g.xml.Sd(a);
    var c = /(<[^/](?:[^>]*[^/])?>[^<]*)\n([^<]*<\/)/;
    do {
        var d = a;
        a = a.replace(c, "$1&#10;$2")
    } while (a != d);
    return a
};
h.I.KE = function (a) {
    a = h.I.Sd(a).split("<");
    for (var c = "", d = 1; d < a.length; d++) {
        var e = a[d];
        "/" == e[0] && (c = c.substring(2));
        a[d] = c + "<" + e;
        "/" != e[0] && "/>" != e.slice(-2) && (c += "  ")
    }
    a = a.join("\n");
    a = a.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>");
    return a.replace(/^\n/, "")
};
h.I.Ue = function (a) {
    var c = h.g.xml.$z(a);
    if (!c || !c.documentElement || c.getElementsByTagName("parsererror").length) throw Error("textToDom was unable to parse: " + a);
    return c.documentElement
};
h.I.DE = function (a, c) {
    c.qc(!1);
    c.clear();
    a = h.I.Fe(a, c);
    c.qc(!0);
    return a
};
h.I.Fe = function (a, c) {
    if (a instanceof h.ab) {
        var d = a;
        a = c;
        c = d;
        console.warn("Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments.")
    }
    var e;
    c.H && (e = c.gj());
    d = [];
    h.g.o.Zj();
    var f = a.childNodes.length, g = h.i.ub();
    g || h.i.ca(!0);
    c.qc && c.qc(!1);
    var k = !0;
    try {
        for (var l = 0; l < f; l++) {
            var m = a.childNodes[l], n = m.nodeName.toLowerCase();
            if ("block" == n || "shadow" == n && !h.i.Mb) {
                var q = h.I.il(m, c);
                d.push(q.id);
                var r = m.hasAttribute("x") ? parseInt(m.getAttribute("x"), 10) : 10,
                    v = m.hasAttribute("y") ? parseInt(m.getAttribute("y"),
                        10) : 10;
                isNaN(r) || isNaN(v) || q.moveBy(c.H ? e - r : r, v);
                k = !1
            } else {
                if ("shadow" == n) throw TypeError("Shadow block cannot be a top-level block.");
                if ("comment" == n) c.$ ? h.rh ? h.rh.setValue(m.textContent) : console.warn("Missing require for Blockly.WorkspaceCommentSvg, ignoring workspace comment.") : h.uw ? h.uw.setValue(m.textContent) : console.warn("Missing require for Blockly.WorkspaceComment, ignoring workspace comment."); else if ("variables" == n) {
                    if (k) h.I.Gx(m, c); else throw Error("'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location.");
                    k = !1
                }
            }
        }
    } finally {
        g || h.i.ca(!1), h.g.o.$j()
    }
    c.qc && c.qc(!0);
    h.i.Ma(new h.i.si(c));
    return d
};
h.I.tE = function (a, c) {
    if (c.hasOwnProperty("scale")) {
        var d = h.ea.Vf;
        try {
            h.ea.Vf = 0;
            var e = ka(c)
        } finally {
            h.ea.Vf = d
        }
    }
    a = h.I.Fe(a, c);
    if (e && e.top != e.bottom) {
        d = e.bottom;
        var f = e.left;
        var g = Infinity, k = Infinity;
        for (e = 0; e < a.length; e++) {
            var l = u(c, a[e]).Fa();
            l.y < k && (k = l.y);
            l.x < g && (g = l.x)
        }
        d = d - k + h.ea.aw;
        f -= g;
        var m;
        c.H && (m = c.gj());
        for (e = 0; e < a.length; e++) u(c, a[e]).moveBy(c.H ? m - f : f, d)
    }
    return a
};
h.I.il = function (a, c) {
    if (a instanceof h.ab) {
        var d = a;
        a = c;
        c = d;
        console.warn("Deprecated call to Blockly.Xml.domToBlock, swap the arguments.")
    }
    h.i.disable();
    d = c.ng();
    try {
        var e = h.I.Vn(a, c), f = p(e, !1);
        if (c.$) {
            la(e, !0);
            for (var g = f.length - 1; 0 <= g; g--) f[g].ug();
            for (g = f.length - 1; 0 <= g; g--) f[g].wa(!1);
            setTimeout(function () {
                e.C && la(e, !1)
            }, 1);
            E(e);
            F(c)
        } else for (g = f.length - 1; 0 <= g; g--) ;
    } finally {
        h.i.enable()
    }
    if (h.i.isEnabled()) {
        a = h.na.Tx(c, d);
        for (g = 0; g < a.length; g++) h.i.Ma(new h.i.nd(a[g]));
        h.i.Ma(new h.i.tk(e))
    }
    return e
};
h.I.Gx = function (a, c) {
    for (var d = 0, e; e = a.childNodes[d]; d++) if (e.nodeType == h.g.o.Node.ELEMENT_NODE) {
        var f = e.getAttribute("type"), g = e.getAttribute("id");
        c.sd(e.textContent, f, g)
    }
};
h.I.Vn = function (a, c) {
    var d = null, e = a.getAttribute("type");
    if (!e) throw TypeError("Block type unspecified: " + a.outerHTML);
    var f = a.getAttribute("id");
    d = c.Sh(e, f);
    var g = null;
    f = 0;
    for (var k; k = a.childNodes[f]; f++) if (k.nodeType != h.g.o.Node.TEXT_NODE) {
        for (var l = g = null, m = 0, n; n = k.childNodes[m]; m++) n.nodeType == h.g.o.Node.ELEMENT_NODE && ("block" == n.nodeName.toLowerCase() ? g = n : "shadow" == n.nodeName.toLowerCase() && (l = n));
        !g && l && (g = l);
        m = k.getAttribute("name");
        switch (k.nodeName.toLowerCase()) {
            case "mutation":
                d.yc && (d.yc(k),
                d.ug && d.ug());
                break;
            case "comment":
                if (!h.Comment) {
                    console.warn("Missing require for Blockly.Comment, ignoring block comment.");
                    break
                }
                g = k.textContent;
                l = "true" == k.getAttribute("pinned");
                m = parseInt(k.getAttribute("w"), 10);
                k = parseInt(k.getAttribute("h"), 10);
                d.Zh(g);
                d.Be.St = l;
                isNaN(m) || isNaN(k) || (d.Be.size = new h.g.md(m, k));
                l && d.$x && !d.cd && setTimeout(function () {
                    d.Pd.Yb(!0)
                }, 1);
                break;
            case "data":
                d.data = k.textContent;
                break;
            case "title":
            case "field":
                h.I.Fx(d, m, k);
                break;
            case "value":
            case "statement":
                k = ia(d,
                    m);
                if (!k) {
                    console.warn("Ignoring non-existent input " + m + " in block " + e);
                    break
                }
                l && (k.connection.ae = l);
                if (g) if (g = h.I.Vn(g, c), g.L) k.connection.connect(g.L); else if (g.N) k.connection.connect(g.N); else throw TypeError("Child block does not have output or previous statement.");
                break;
            case "next":
                l && d.W && (d.W.ae = l);
                if (g) {
                    if (!d.W) throw TypeError("Next statement does not exist.");
                    if (d.W.isConnected()) throw TypeError("Next statement is already connected.");
                    g = h.I.Vn(g, c);
                    if (!g.N) throw TypeError("Next block does not have previous statement.");
                    d.W.connect(g.N)
                }
                break;
            default:
                console.warn("Ignoring unknown tag: " + k.nodeName)
        }
    }
    (f = a.getAttribute("inline")) && d.Mg("true" == f);
    (f = a.getAttribute("disabled")) && d.Re("true" != f && "disabled" != f);
    if (f = a.getAttribute("deletable")) d.Jn = "true" == f;
    (f = a.getAttribute("movable")) && d.zp("true" == f);
    (f = a.getAttribute("editable")) && d.yp("true" == f);
    (f = a.getAttribute("collapsed")) && d.Ff("true" == f);
    if ("shadow" == a.nodeName.toLowerCase()) {
        a = ma(d, !1);
        for (f = 0; c = a[f]; f++) if (!c.Qa) throw TypeError("Shadow block not allowed non-shadow child.");
        if (na(d).length) throw TypeError("Shadow blocks cannot have variable references.");
        d.Cp(!0)
    }
    return d
};
h.I.Fx = function (a, c, d) {
    var e = z(a, c);
    e ? e.setValue(d.textContent) : console.warn("Ignoring non-existent field " + c + " in block " + a.type)
};
h.I.vx = function (a) {
    for (var c = 0, d; d = a.childNodes[c]; c++) if ("next" == d.nodeName.toLowerCase()) {
        a.removeChild(d);
        break
    }
};
h.Pc = function (a) {
    var c = !!a.readOnly;
    if (c) var d = null, e = !1, f = !1, g = !1, k = !1, l = !1,
        m = !1; else d = h.Pc.xz(a.toolbox || null), e = !(!d || !d.getElementsByTagName("category").length), f = a.trashcan, void 0 === f && (f = e), g = a.collapse, void 0 === g && (g = e), k = a.comments, void 0 === k && (k = e), l = a.disable, void 0 === l && (l = e), m = a.sounds, void 0 === m && (m = !0);
    var n = !!a.rtl, q = a.horizontalLayout;
    void 0 === q && (q = !1);
    var r = a.toolboxPosition;
    r = "end" === r ? !1 : !0;
    r = q ? r ? h.Ci : h.fn : r == n ? h.gn : h.Bi;
    var v = a.css;
    void 0 === v && (v = !0);
    var w = "https://blockly-demo.appspot.com/static/media/";
    a.media ? w = a.media : a.path && (w = a.path + "media/");
    var K = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex, L = a.theme, T = a.keyMap || h.Ra.Na.nx(),
        Mc = a.renderer || "geras";
    this.H = n;
    this.Nt = K;
    this.collapse = g;
    this.ex = k;
    this.disable = l;
    this.readOnly = c;
    this.Fj = a.maxBlocks || Infinity;
    this.Wo = a.maxInstances;
    this.Rt = w;
    this.Ws = e;
    this.vb = h.Pc.wz(a, e);
    this.$s = f;
    this.Cy = m;
    this.Ay = v;
    this.lj = q;
    this.Ko = d;
    this.Ss = h.Pc.vz(a);
    this.$a = h.Pc.yz(a);
    this.Gb = r;
    this.bA = L;
    this.Na = T;
    this.rp = Mc
};
h.Pc.prototype.Fc = null;
h.Pc.prototype.Tj = null;
h.Pc.prototype.Yc = null;
h.Pc.wz = function (a, c) {
    var d = a.move || {}, e = {};
    e.scrollbars = void 0 === d.scrollbars && void 0 === a.scrollbars ? c : !!d.scrollbars || !!a.scrollbars;
    e.Xg = e.scrollbars && void 0 !== d.wheel ? !!d.wheel : !1;
    e.Ge = e.scrollbars ? void 0 === d.drag ? !0 : !!d.drag : !1;
    return e
};
h.Pc.yz = function (a) {
    a = a.zoom || {};
    var c = {};
    c.controls = void 0 === a.controls ? !1 : !!a.controls;
    c.Xg = void 0 === a.wheel ? !1 : !!a.wheel;
    c.Yz = void 0 === a.startScale ? 1 : Number(a.startScale);
    c.Gj = void 0 === a.maxScale ? 3 : Number(a.maxScale);
    c.Hj = void 0 === a.minScale ? .3 : Number(a.minScale);
    c.Kz = void 0 === a.scaleSpeed ? 1.2 : Number(a.scaleSpeed);
    return c
};
h.Pc.vz = function (a) {
    a = a.grid || {};
    var c = {};
    c.spacing = Number(a.spacing) || 0;
    c.ob = a.colour || "#888";
    c.length = Number(a.length) || 1;
    c.CF = 0 < c.spacing && !!a.snap;
    return c
};
h.Pc.xz = function (a) {
    if (a) {
        if ("string" != typeof a && (h.g.userAgent.Xe && a.outerHTML ? a = a.outerHTML : a instanceof Element || (a = null)), "string" == typeof a && (a = h.I.Ue(a), "xml" != a.nodeName.toLowerCase())) throw TypeError("Toolbox should be an <xml> document.");
    } else a = null;
    return a
};
h.Touch = {};
h.Touch.jr = "ontouchstart" in h.g.global || !!(h.g.global.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!h.g.global.navigator || !h.g.global.navigator.maxTouchPoints && !h.g.global.navigator.msMaxTouchPoints);
h.Touch.fk = null;
h.Touch.Ld = {};
h.g.global.PointerEvent ? h.Touch.Ld = {
    mousedown: ["pointerdown"],
    mouseenter: ["pointerenter"],
    mouseleave: ["pointerleave"],
    mousemove: ["pointermove"],
    mouseout: ["pointerout"],
    mouseover: ["pointerover"],
    mouseup: ["pointerup", "pointercancel"],
    touchend: ["pointerup"],
    touchcancel: ["pointercancel"]
} : h.Touch.jr && (h.Touch.Ld = {
    mousedown: ["touchstart"],
    mousemove: ["touchmove"],
    mouseup: ["touchend", "touchcancel"]
});
h.Ql = 0;
h.Wy = function (a, c) {
    h.uf();
    a.changedTouches && 1 != a.changedTouches.length || (h.Ql = setTimeout(function () {
        a.changedTouches && (a.button = 2, a.clientX = a.changedTouches[0].clientX, a.clientY = a.changedTouches[0].clientY);
        c && oa(c, a)
    }, h.Hv))
};
h.uf = function () {
    h.Ql && (clearTimeout(h.Ql), h.Ql = 0)
};
h.Touch.Tk = function () {
    h.Touch.fk = null
};
h.Touch.Ep = function (a) {
    return !h.Touch.Py(a) || h.Touch.Zw(a)
};
h.Touch.wl = function (a) {
    return void 0 != a.pointerId ? a.pointerId : a.changedTouches && a.changedTouches[0] && void 0 !== a.changedTouches[0].identifier && null !== a.changedTouches[0].identifier ? a.changedTouches[0].identifier : "mouse"
};
h.Touch.Zw = function (a) {
    var c = h.Touch.wl(a);
    return void 0 !== h.Touch.fk && null !== h.Touch.fk ? h.Touch.fk == c : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type ? (h.Touch.fk = c, !0) : !1
};
h.Touch.Nz = function (a) {
    if (h.g.Ga.startsWith(a.type, "touch")) {
        var c = a.changedTouches[0];
        a.clientX = c.clientX;
        a.clientY = c.clientY
    }
};
h.Touch.Py = function (a) {
    return h.g.Ga.startsWith(a.type, "touch") || h.g.Ga.startsWith(a.type, "mouse") || h.g.Ga.startsWith(a.type, "pointer")
};
h.Touch.Ol = function (a) {
    return h.g.Ga.startsWith(a.type, "touch") || h.g.Ga.startsWith(a.type, "pointer")
};
h.Touch.Vz = function (a) {
    var c = [];
    if (a.changedTouches) for (var d = 0; d < a.changedTouches.length; d++) c[d] = {
        type: a.type,
        changedTouches: [a.changedTouches[d]],
        target: a.target,
        stopPropagation: function () {
            a.stopPropagation()
        },
        preventDefault: function () {
            a.preventDefault()
        }
    }; else c.push(a);
    return c
};
h.oh = function (a) {
    this.F = a;
    this.Ac = new h.Da(a, !0, !0, "blocklyMainWorkspaceScrollbar");
    this.Kc = new h.Da(a, !1, !0, "blocklyMainWorkspaceScrollbar");
    this.Vi = h.g.o.J("rect", {height: h.Da.pc, width: h.Da.pc, "class": "blocklyScrollbarBackground"}, null);
    h.g.o.pj(this.Vi, a.Te)
};
h.oh.prototype.Za = null;
h.oh.prototype.G = function () {
    h.g.o.removeNode(this.Vi);
    this.Za = this.F = this.Vi = null;
    this.Ac.G();
    this.Ac = null;
    this.Kc.G();
    this.Kc = null
};
h.oh.prototype.resize = function () {
    var a = this.F.Yc();
    if (a) {
        var c = !1, d = !1;
        this.Za && this.Za.yb == a.yb && this.Za.Ob == a.Ob && this.Za.Sc == a.Sc && this.Za.Rc == a.Rc ? (this.Za && this.Za.De == a.De && this.Za.sb == a.sb && this.Za.ic == a.ic || (c = !0), this.Za && this.Za.Ce == a.Ce && this.Za.Hb == a.Hb && this.Za.jc == a.jc || (d = !0)) : d = c = !0;
        c && this.Ac.resize(a);
        d && this.Kc.resize(a);
        this.Za && this.Za.yb == a.yb && this.Za.Rc == a.Rc || this.Vi.setAttribute("x", this.Kc.Af.x);
        this.Za && this.Za.Ob == a.Ob && this.Za.Sc == a.Sc || this.Vi.setAttribute("y", this.Ac.Af.y);
        this.Za = a
    }
};
h.oh.prototype.set = function (a, c) {
    var d = {};
    a *= this.Ac.Fb;
    c *= this.Kc.Fb;
    var e = this.Kc.fd, f = a / this.Ac.fd;
    d.x = isNaN(f) ? 0 : f;
    e = c / e;
    d.y = isNaN(e) ? 0 : e;
    this.F.Tj(d);
    G(this.Ac, a);
    G(this.Kc, c)
};
h.Da = function (a, c, d, e) {
    this.F = a;
    this.Th = d || !1;
    this.sg = c;
    this.Za = null;
    this.Wi(e);
    this.Af = new h.g.M(0, 0);
    a = h.Da.pc;
    c ? (this.fe.setAttribute("height", a), this.Yd.setAttribute("height", a), this.rc.setAttribute("height", a - 5), this.rc.setAttribute("y", 2.5), this.Aj = "width", this.Tt = "x") : (this.fe.setAttribute("width", a), this.Yd.setAttribute("width", a), this.rc.setAttribute("width", a - 5), this.rc.setAttribute("x", 2.5), this.Aj = "height", this.Tt = "y");
    this.Lt = h.Ba(this.fe, "mousedown", this, this.mz);
    this.Mt = h.Ba(this.rc,
        "mousedown", this, this.nz)
};
b = h.Da.prototype;
b.Ot = new h.g.M(0, 0);
b.qu = 0;
b.fd = 0;
b.lf = 0;
b.ij = 0;
b.zj = !0;
b.Fn = !0;
h.Da.pc = 15;
h.Touch.jr && (h.Da.pc = 25);
h.Da.Yy = function (a, c) {
    return a && c && a.yb == c.yb && a.Ob == c.Ob && a.sb == c.sb && a.Hb == c.Hb && a.Sc == c.Sc && a.Rc == c.Rc && a.De == c.De && a.Ce == c.Ce && a.ic == c.ic && a.jc == c.jc ? !0 : !1
};
h.Da.prototype.G = function () {
    pa();
    h.lb(this.Lt);
    this.Lt = null;
    h.lb(this.Mt);
    this.Mt = null;
    h.g.o.removeNode(this.Yd);
    this.fe = this.P = this.Yd = null;
    this.rc && (this.F.gc.unsubscribe(this.rc), this.rc = null);
    this.F = null
};

function G(a, c) {
    a.ij = c;
    a.rc.setAttribute(a.Tt, a.ij)
}

function qa(a, c) {
    a.fd = c;
    a.Yd.setAttribute(a.Aj, a.fd);
    a.fe.setAttribute(a.Aj, a.fd)
}

h.oh.prototype.Rj = function (a) {
    this.Ac.Rj(a);
    this.Kc.Rj(a)
};

function ra(a, c, d) {
    a.Af.x = c;
    a.Af.y = d;
    h.g.o.dm(a.Yd, "translate(" + (a.Af.x + a.Ot.x) + "px," + (a.Af.y + a.Ot.y) + "px)")
}

b = h.Da.prototype;
b.resize = function (a) {
    if (!a && (a = this.F.Yc(), !a)) return;
    h.Da.Yy(a, this.Za) || (this.Za = a, this.sg ? sa(this, a) : ta(this, a), ua(this))
};

function sa(a, c) {
    var d = c.yb - 1;
    a.Th && (d -= h.Da.pc);
    qa(a, Math.max(0, d));
    d = c.Rc + .5;
    a.Th && a.F.H && (d += h.Da.pc);
    ra(a, d, c.Sc + c.Ob - h.Da.pc - .5);
    va(a, c)
}

function va(a, c) {
    a.Th || a.Yb(a.fd < c.De);
    a.Fb = a.fd / c.De;
    if (-Infinity == a.Fb || Infinity == a.Fb || isNaN(a.Fb)) a.Fb = 0;
    a.lf = Math.max(0, c.yb * a.Fb);
    a.rc.setAttribute(a.Aj, a.lf);
    G(a, wa(a, (c.sb - c.ic) * a.Fb))
}

function ta(a, c) {
    var d = c.Ob - 1;
    a.Th && (d -= h.Da.pc);
    qa(a, Math.max(0, d));
    d = c.Rc + .5;
    a.F.H || (d += c.yb - h.Da.pc - 1);
    ra(a, d, c.Sc + .5);
    xa(a, c)
}

function xa(a, c) {
    a.Th || a.Yb(a.fd < c.Ce);
    a.Fb = a.fd / c.Ce;
    if (-Infinity == a.Fb || Infinity == a.Fb || isNaN(a.Fb)) a.Fb = 0;
    a.lf = Math.max(0, c.Ob * a.Fb);
    a.rc.setAttribute(a.Aj, a.lf);
    G(a, wa(a, (c.Hb - c.jc) * a.Fb))
}

b.Wi = function (a) {
    var c = "blocklyScrollbar" + (this.sg ? "Horizontal" : "Vertical");
    a && (c += " " + a);
    this.Yd = h.g.o.J("svg", {"class": c}, null);
    this.P = h.g.o.J("g", {}, this.Yd);
    this.fe = h.g.o.J("rect", {"class": "blocklyScrollbarBackground"}, this.P);
    a = Math.floor((h.Da.pc - 5) / 2);
    this.rc = h.g.o.J("rect", {"class": "blocklyScrollbarHandle", rx: a, ry: a}, this.P);
    this.F.gc.subscribe(this.rc, "scrollbar", "fill");
    this.F.gc.subscribe(this.rc, "scrollbarOpacity", "fill-opacity");
    h.g.o.pj(this.Yd, y(this.F))
};
b.isVisible = function () {
    return this.zj
};
b.Rj = function (a) {
    var c = a != this.Fn;
    this.Fn = a;
    c && ya(this)
};
b.Yb = function (a) {
    var c = a != this.isVisible();
    if (this.Th) throw Error("Unable to toggle visibility of paired scrollbars.");
    this.zj = a;
    c && ya(this)
};

function ya(a) {
    a.Fn && a.isVisible() ? a.Yd.setAttribute("display", "block") : a.Yd.setAttribute("display", "none")
}

b.mz = function (a) {
    za(this.F);
    h.Touch.Tk();
    pa();
    if (h.g.Oh(a)) a.stopPropagation(); else {
        var c = h.g.Ij(a, y(this.F), Aa(this.F));
        c = this.sg ? c.x : c.y;
        var d = h.g.lo(this.rc);
        d = this.sg ? d.x : d.y;
        var e = this.ij, f = .95 * this.lf;
        c <= d ? e -= f : c >= d + this.lf && (e += f);
        G(this, wa(this, e));
        ua(this);
        a.stopPropagation();
        a.preventDefault()
    }
};
b.nz = function (a) {
    za(this.F);
    pa();
    h.g.Oh(a) ? a.stopPropagation() : (this.Wz = this.ij, Ba(this.F), this.qu = this.sg ? a.clientX : a.clientY, h.Da.yf = h.Ba(document, "mouseup", this, this.sz), h.Da.xf = h.Ba(document, "mousemove", this, this.oz), a.stopPropagation(), a.preventDefault())
};
b.oz = function (a) {
    G(this, wa(this, this.Wz + ((this.sg ? a.clientX : a.clientY) - this.qu)));
    ua(this)
};
b.sz = function () {
    Ca(this.F);
    h.Touch.Tk();
    pa()
};

function pa() {
    h.ec(!0);
    h.Da.yf && (h.lb(h.Da.yf), h.Da.yf = null);
    h.Da.xf && (h.lb(h.Da.xf), h.Da.xf = null)
}

function wa(a, c) {
    return c = 0 >= c || isNaN(c) || a.fd < a.lf ? 0 : Math.min(c, a.fd - a.lf)
}

function ua(a) {
    var c = a.ij / a.fd;
    isNaN(c) && (c = 0);
    var d = {};
    a.sg ? d.x = c : d.y = c;
    a.F.Tj(d)
}

b.set = function (a) {
    G(this, wa(this, a * this.Fb));
    ua(this)
};
h.D = {};
h.D.visible = !1;
h.D.vh = !1;
h.D.Gv = 50;
h.D.Ct = 0;
h.D.Xj = 0;
h.D.No = 0;
h.D.Oo = 0;
h.D.X = null;
h.D.Zl = null;
h.D.Lq = 0;
h.D.Mq = 10;
h.D.Yv = 10;
h.D.uv = 750;
h.D.Mm = 5;
h.D.ua = null;
h.D.Va = function () {
    h.D.ua || (h.D.ua = document.createElement("div"), h.D.ua.className = "blocklyTooltipDiv", document.body.appendChild(h.D.ua))
};
h.D.Ji = function (a) {
    h.Zf(a, "mouseover", h.D.rz);
    h.Zf(a, "mouseout", h.D.qz);
    a.addEventListener("mousemove", h.D.pz, !1)
};
h.D.rz = function (a) {
    if (!h.D.vh) {
        for (a = a.currentTarget; "string" != typeof a.ge && "function" != typeof a.ge;) a = a.ge;
        h.D.X != a && (h.D.Ia(), h.D.Zl = null, h.D.X = a);
        clearTimeout(h.D.Ct)
    }
};
h.D.qz = function () {
    h.D.vh || (h.D.Ct = setTimeout(function () {
        h.D.X = null;
        h.D.Zl = null;
        h.D.Ia()
    }, 1), clearTimeout(h.D.Xj))
};
h.D.pz = function (a) {
    if (h.D.X && h.D.X.ge && !h.D.vh) if (h.D.visible) {
        var c = h.D.No - a.pageX;
        a = h.D.Oo - a.pageY;
        Math.sqrt(c * c + a * a) > h.D.Yv && h.D.Ia()
    } else h.D.Zl != h.D.X && (clearTimeout(h.D.Xj), h.D.No = a.pageX, h.D.Oo = a.pageY, h.D.Xj = setTimeout(h.D.Sz, h.D.uv))
};
h.D.Ia = function () {
    h.D.visible && (h.D.visible = !1, h.D.ua && (h.D.ua.style.display = "none"));
    h.D.Xj && clearTimeout(h.D.Xj)
};
h.D.block = function () {
    h.D.Ia();
    h.D.vh = !0
};
h.D.iA = function () {
    h.D.vh = !1
};
h.D.Sz = function () {
    if (!h.D.vh && (h.D.Zl = h.D.X, h.D.ua)) {
        h.D.ua.innerHTML = "";
        for (var a = h.D.X.ge; "function" == typeof a;) a = a();
        a = h.g.Ga.lA(a);
        a = a.split("\n");
        for (var c = 0; c < a.length; c++) {
            var d = document.createElement("div");
            d.appendChild(document.createTextNode(a[c]));
            h.D.ua.appendChild(d)
        }
        a = h.D.X.H;
        c = document.documentElement.clientWidth;
        d = document.documentElement.clientHeight;
        h.D.ua.style.direction = a ? "rtl" : "ltr";
        h.D.ua.style.display = "block";
        h.D.visible = !0;
        var e = h.D.No;
        e = a ? e - (h.D.Lq + h.D.ua.offsetWidth) : e +
            h.D.Lq;
        var f = h.D.Oo + h.D.Mq;
        f + h.D.ua.offsetHeight > d + window.scrollY && (f -= h.D.ua.offsetHeight + 2 * h.D.Mq);
        a ? e = Math.max(h.D.Mm - window.scrollX, e) : e + h.D.ua.offsetWidth > c + window.scrollX - 2 * h.D.Mm && (e = c - h.D.ua.offsetWidth - 2 * h.D.Mm);
        h.D.ua.style.top = f + "px";
        h.D.ua.style.left = e + "px"
    }
};
h.wr = function (a) {
    this.Ui = a;
    this.Va()
};
b = h.wr.prototype;
b.Sa = null;
b.td = null;
b.Ui = null;
b.Va = function () {
    this.Sa || (this.Sa = h.g.o.J("svg", {
        xmlns: h.g.o.Mk,
        "xmlns:html": h.g.o.Fm,
        "xmlns:xlink": h.g.o.sh,
        version: "1.1",
        "class": "blocklyWsDragSurface blocklyOverflowVisible"
    }, null), this.Ui.appendChild(this.Sa))
};
b.Tg = function (a, c) {
    a = a.toFixed(0);
    c = c.toFixed(0);
    this.Sa.style.display = "block";
    h.g.o.dm(this.Sa, "translate3d(" + a + "px, " + c + "px, 0px)")
};
b.qo = function () {
    return h.g.Zc(this.Sa)
};
b.Sk = function (a) {
    if (!a) throw Error("Couldn't clear and hide the drag surface: missing new surface.");
    var c = this.Sa.childNodes[0], d = this.Sa.childNodes[1];
    if (!(c && d && h.g.o.Xs(c, "blocklyBlockCanvas") && h.g.o.Xs(d, "blocklyBubbleCanvas"))) throw Error("Couldn't clear and hide the drag surface. A node was missing.");
    null != this.np ? h.g.o.pj(c, this.np) : a.insertBefore(c, a.firstChild);
    h.g.o.pj(d, c);
    this.Sa.style.display = "none";
    if (this.Sa.childNodes.length) throw Error("Drag surface was not cleared.");
    h.g.o.dm(this.Sa,
        "");
    this.np = null
};
h.zb = Object.create(null);
h.aa = function (a, c) {
    this.B = a;
    this.type = c
};
h.aa.vk = 0;
h.aa.Uq = 1;
h.aa.Xq = 2;
h.aa.Wq = 3;
h.aa.Sq = 4;
h.aa.Tq = 5;
h.aa.Vq = 6;
b = h.aa.prototype;
b.ka = null;
b.ye = null;
b.ae = null;
b.fb = 0;
b.Aa = 0;
b.rd = function (a) {
    var c = this, d = c.B, e = a.B;
    a.isConnected() && a.disconnect();
    if (c.isConnected()) {
        var f = A(c), g = c.ae;
        c.ae = null;
        if (f.Qa) g = h.I.$f(f), f.G(), f = null; else if (c.type == h.Ha) {
            if (!f.L) throw Error("Orphan block does not have an output connection.");
            var k = h.aa.rt(e, f);
            k && (f.L.connect(k), f = null)
        } else if (c.type == h.Ca) {
            if (!f.N) throw Error("Orphan block does not have a previous connection.");
            for (k = e; k.W;) {
                var l = t(k);
                if (l && !l.Qa) k = l; else {
                    H(f.N, k.W) && (k.W.connect(f.N), f = null);
                    break
                }
            }
        }
        if (f && (c.disconnect(),
            h.i.Mb)) {
            var m = h.i.ub();
            setTimeout(function () {
                f.C && !f.getParent() && (h.i.ca(m), f.L ? f.L.Tl(c) : f.N && f.N.Tl(c), h.i.ca(!1))
            }, h.xm)
        }
        c.ae = g
    }
    var n;
    h.i.isEnabled() && (n = new h.i.li(e));
    h.aa.kx(c, a);
    e.$h(d);
    n && (n.Jg(), h.i.Ma(n))
};
b.G = function () {
    if (this.isConnected()) {
        this.ae = null;
        var a = A(this);
        a.Qa ? a.G() : B(a)
    }
};

function I(a) {
    return a.type == h.Ha || a.type == h.Ca
}

b.isConnected = function () {
    return !!this.ka
};

function Da(a, c) {
    if (!c) return h.aa.Wq;
    if (I(a)) var d = a.B, e = c.B; else e = a.B, d = c.B;
    return d && d == e ? h.aa.Uq : c.type != h.mh[a.type] ? h.aa.Xq : d && e && d.C !== e.C ? h.aa.Tq : H(a, c) ? d.Qa && !e.Qa ? h.aa.Vq : h.aa.vk : h.aa.Sq
}

function Ea(a, c) {
    switch (Da(a, c)) {
        case h.aa.vk:
            break;
        case h.aa.Uq:
            throw Error("Attempted to connect a block to itself.");
        case h.aa.Tq:
            throw Error("Blocks not on same workspace.");
        case h.aa.Xq:
            throw Error("Attempt to connect incompatible types.");
        case h.aa.Wq:
            throw Error("Target connection is null.");
        case h.aa.Sq:
            throw Error("Connection checks failed. " + (a + " expected " + a.ye + ", found " + c.ye));
        case h.aa.Vq:
            throw Error("Connecting non-shadow to shadow block.");
        default:
            throw Error("Unknown connection failure: this should never happen!");
    }
}

b.Hl = function (a) {
    if (a.B.rf() || Da(this, a) != h.aa.vk) return !1;
    switch (a.type) {
        case h.ld:
            return this.ka || -1 != h.cj.indexOf(a) ? a = !1 : a.ka ? (a = A(a), a = a.rf() ? !(a.N && A(a.N)) : !1) : a = !0, a;
        case h.jd:
            if (a.isConnected() && !A(a).rf() || this.isConnected()) return !1;
            break;
        case h.Ha:
            if (a.isConnected() && !A(a).mc() && !A(a).Qa) return !1;
            break;
        case h.Ca:
            if (a.isConnected() && !this.B.W && !A(a).Qa && A(a).W) return !1;
            break;
        default:
            throw Error("Unknown connection type in isConnectionAllowed");
    }
    return -1 != h.cj.indexOf(a) ? !1 : !0
};
b.Tl = function () {
};
b.connect = function (a) {
    if (this.ka != a) {
        Ea(this, a);
        var c = h.i.ub();
        c || h.i.ca(!0);
        I(this) ? this.rd(a) : a.rd(this);
        c || h.i.ca(!1)
    }
};
h.aa.kx = function (a, c) {
    if (!a || !c) throw Error("Cannot connect null connections.");
    a.ka = c;
    c.ka = a
};
h.aa.Tz = function (a, c) {
    for (var d = !1, e = 0; e < a.K.length; e++) {
        var f = a.K[e].connection;
        if (f && f.type == h.Ha && H(c.L, f)) {
            if (d) return null;
            d = f
        }
    }
    return d
};
h.aa.rt = function (a, c) {
    for (var d; d = h.aa.Tz(a, c);) if (a = A(d), !a || a.Qa) return d;
    return null
};
b = h.aa.prototype;
b.disconnect = function () {
    var a = this.ka;
    if (!a) throw Error("Source connection not connected.");
    if (a.ka != this) throw Error("Target connection not connected to source connection.");
    if (I(this)) {
        var c = this.B;
        var d = a.B;
        a = this
    } else c = a.B, d = this.B;
    var e = h.i.ub();
    e || h.i.ca(!0);
    this.Qn(c, d);
    a.up();
    e || h.i.ca(!1)
};
b.Qn = function (a, c) {
    var d;
    h.i.isEnabled() && (d = new h.i.li(c));
    this.ka = this.ka.ka = null;
    c.$h(null);
    d && (d.Jg(), h.i.Ma(d))
};
b.up = function () {
    var a = this.B, c = this.ae;
    if (a.C && c && h.i.Mb) if (a = h.I.il(c, a.C), a.L) this.connect(a.L); else if (a.N) this.connect(a.N); else throw Error("Child block does not have output or previous statement.");
};

function A(a) {
    return a.isConnected() ? a.ka.B : null
}

function H(a, c) {
    if (!a.ye || !c.ye) return !0;
    for (var d = 0; d < a.ye.length; d++) if (-1 != c.ye.indexOf(a.ye[d])) return !0;
    return !1
}

b.Jt = function () {
    this.isConnected() && !H(this, this.ka) && B(I(this) ? A(this) : this.B)
};
b.Yh = function (a) {
    a ? (Array.isArray(a) || (a = [a]), this.ye = a, this.Jt()) : this.ye = null
};
b.Ft = function () {
    return []
};
b.Vd = function () {
    for (var a = null, c = this.B, d = c.K, e = 0; e < c.K.length; e++) if (d[e].connection === this) {
        a = d[e];
        break
    }
    return a
};
b.toString = function () {
    var a = this.B;
    if (a) if (a.L == this) var c = "Output Connection of "; else if (a.N == this) c = "Previous Connection of "; else if (a.W == this) c = "Next Connection of "; else {
        c = null;
        for (var d = 0, e; e = a.K[d]; d++) if (e.connection == this) {
            c = e;
            break
        }
        if (c) c = 'Input "' + c.name + '" connection on '; else return console.warn("Connection not actually connected to sourceBlock_"), "Orphan Connection"
    } else return "Orphan Connection";
    d = a.type ? '"' + a.type + '" block' : "Block";
    a.id && (d += ' (id="' + a.id + '")');
    return c + d
};
h.pa = {};
h.pa.ki = {};
h.pa.register = function (a, c) {
    if ("string" != typeof a || "" == a.trim()) throw Error('Error: Invalid extension name "' + a + '"');
    if (h.pa.ki[a]) throw Error('Error: Extension "' + a + '" is already registered.');
    if ("function" != typeof c) throw Error('Error: Extension "' + a + '" must be a function');
    h.pa.ki[a] = c
};
h.pa.oF = function (a, c) {
    if (!c || "object" != typeof c) throw Error('Error: Mixin "' + a + '" must be a object');
    h.pa.register(a, function () {
        this.Rh(c)
    })
};
h.pa.pF = function (a, c, d, e) {
    var f = 'Error when registering mutator "' + a + '": ';
    h.pa.Jr(f, c.yc, "domToMutation");
    h.pa.Jr(f, c.Wb, "mutationToDom");
    var g = h.pa.Lr(c, f);
    if (d && "function" != typeof d) throw Error('Extension "' + a + '" is not a function');
    h.pa.register(a, function () {
        if (g) {
            if (!h.Qv) throw Error(f + "Missing require for Blockly.Mutator");
            this.lu(new h.Qv(e))
        }
        this.Rh(c);
        d && d.apply(this)
    })
};
h.pa.unregister = function (a) {
    h.pa.ki[a] ? delete h.pa.ki[a] : console.warn('No extension mapping for name "' + a + '" found to unregister')
};
h.pa.apply = function (a, c, d) {
    var e = h.pa.ki[a];
    if ("function" != typeof e) throw Error('Error: Extension "' + a + '" not found.');
    if (d) h.pa.Yw(a, c); else var f = h.pa.mo(c);
    e.apply(c);
    if (d) h.pa.Ww('Error after applying mutator "' + a + '": ', c); else if (!h.pa.dz(f, c)) throw Error('Error when applying extension "' + a + '": mutation properties changed when applying a non-mutator extension.');
};
h.pa.Jr = function (a, c, d) {
    if (!c) throw Error(a + 'missing required property "' + d + '"');
    if ("function" != typeof c) throw Error(a + '" required property "' + d + '" must be a function');
};
h.pa.Yw = function (a, c) {
    if (h.pa.mo(c).length) throw Error('Error: tried to apply mutation "' + a + '" to a block that already has mutator functions.  Block id: ' + c.id);
};
h.pa.Lr = function (a, c) {
    var d = void 0 !== a.Dn, e = void 0 !== a.In;
    if (d && e) {
        if ("function" != typeof a.Dn) throw Error(c + "compose must be a function.");
        if ("function" != typeof a.In) throw Error(c + "decompose must be a function.");
        return !0
    }
    if (d || e) throw Error(c + 'Must have both or neither of "compose" and "decompose"');
    return !1
};
h.pa.Ww = function (a, c) {
    if ("function" != typeof c.yc) throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
    if ("function" != typeof c.Wb) throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
    h.pa.Lr(c, a)
};
h.pa.mo = function (a) {
    var c = [];
    void 0 !== a.yc && c.push(a.yc);
    void 0 !== a.Wb && c.push(a.Wb);
    void 0 !== a.Dn && c.push(a.Dn);
    void 0 !== a.In && c.push(a.In);
    return c
};
h.pa.dz = function (a, c) {
    c = h.pa.mo(c);
    if (c.length != a.length) return !1;
    for (var d = 0; d < c.length; d++) if (a[d] != c[d]) return !1;
    return !0
};
h.pa.vE = function (a, c) {
    var d = [];
    "object" == typeof document && h.g.du(function () {
        for (var e in c) h.g.Kr(c[e])
    });
    return function () {
        this.type && -1 == d.indexOf(this.type) && (h.pa.Xw(this, a, c), d.push(this.type));
        this.Gf(function () {
            var e = Fa(this, a), f = c[e];
            null == f ? -1 == d.indexOf(this.type) && (e = "No tooltip mapping for value " + e + " of field " + a, null != this.type && (e += " of block type " + this.type), console.warn(e + ".")) : f = h.g.oc(f);
            return f
        }.bind(this))
    }
};
h.pa.Xw = function (a, c, d) {
    var e = z(a, c);
    if ("function" != typeof e.Qh) {
        e = e.getOptions();
        for (var f = 0; f < e.length; ++f) {
            var g = e[f][1];
            null == d[g] && console.warn("No tooltip mapping for value " + g + " of field " + c + " of block type " + a.type)
        }
    }
};
h.pa.wE = function (a, c) {
    "object" == typeof document && h.g.du(function () {
        h.g.Kr(a)
    });
    return function () {
        this.Gf(function () {
            var d = z(this, c);
            return h.g.oc(a).replace("%1", d ? d.jf() : "")
        }.bind(this))
    }
};
h.pa.Kx = function () {
    this.fA = this.ge;
    this.Gf(function () {
        var a = this.getParent();
        return a && Ga(a) && a.ge || this.fA
    }.bind(this))
};
h.pa.register("parent_tooltip_when_inline", h.pa.Kx);
h.La = {};
h.La.Rn = 0;
h.La.cl = null;
h.La.Cx = function (a) {
    var c = a.C, d = a.ga();
    c.Od.play("delete");
    a = Ha(c, d);
    d = d.cloneNode(!0);
    d.gA = a.x;
    d.hA = a.y;
    d.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
    y(c).appendChild(d);
    d.Dr = d.getBBox();
    h.La.ns(d, c.H, new Date, c.scale)
};
h.La.ns = function (a, c, d, e) {
    var f = (new Date - d) / 150;
    1 < f ? h.g.o.removeNode(a) : (a.setAttribute("transform", "translate(" + (a.gA + (c ? -1 : 1) * a.Dr.width * e / 2 * f) + "," + (a.hA + a.Dr.height * e * f) + ") scale(" + (1 - f) * e + ")"), setTimeout(h.La.ns, 10, a, c, d, e))
};
h.La.lx = function (a) {
    var c = a.C, d = c.scale;
    c.Od.play("click");
    if (!(1 > d)) {
        var e = Ha(c, a.ga());
        a.L ? (e.x += (a.H ? 3 : -3) * d, e.y += 13 * d) : a.N && (e.x += (a.H ? -23 : 23) * d, e.y += 3 * d);
        a = h.g.o.J("circle", {cx: e.x, cy: e.y, r: 0, fill: "none", stroke: "#888", "stroke-width": 10}, y(c));
        h.La.Tr(a, new Date, d)
    }
};
h.La.Tr = function (a, c, d) {
    var e = (new Date - c) / 150;
    1 < e ? h.g.o.removeNode(a) : (a.setAttribute("r", 25 * e * d), a.style.opacity = 1 - e, h.La.Rn = setTimeout(h.La.Tr, 10, a, c, d))
};
h.La.Bx = function (a) {
    a.C.Od.play("disconnect");
    if (!(1 > a.C.scale)) {
        var c = J(a).height;
        c = Math.atan(10 / c) / Math.PI * 180;
        a.H || (c *= -1);
        h.La.ls(a.ga(), c, new Date)
    }
};
h.La.ls = function (a, c, d) {
    var e = (new Date - d) / 200;
    1 < e ? a.Yj = "" : (a.Yj = "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * c) + ")", h.La.cl = a, h.La.Rn = setTimeout(h.La.ls, 10, a, c, d));
    a.setAttribute("transform", a.gk + a.Yj)
};
h.La.Sn = function () {
    if (h.La.cl) {
        clearTimeout(h.La.Rn);
        var a = h.La.cl;
        a.Yj = "";
        a.setAttribute("transform", a.gk);
        h.La.cl = null
    }
};
h.Fk = function (a) {
    this.Ad = h.selected = a;
    this.F = a.C;
    this.yg = this.Lo = null;
    this.Dh = Ia(this, this.Ad);
    this.Eb = this.Wa = null;
    this.le = !1;
    this.Ag = null;
    this.Co = !1;
    this.Ih = null;
    a = this.Ad.Xc(!1);
    var c;
    a:{
        for (c = this.Ad.W; c;) {
            var d = A(c);
            if (!d) break a;
            c = d.W
        }
        c = null
    }
    c && c != this.Ad.W && (a.push(c), this.Lo = c, this.yg = Ia(this, c.B));
    this.qn = a
};
h.Fk.prototype.G = function () {
    this.F = this.Ad = null;
    this.qn.length = 0;
    this.Eb = this.Wa = null;
    h.i.disable();
    try {
        this.Dh && (this.Dh.G(), this.Dh = null), this.yg && (this.yg.G(), this.yg = null)
    } finally {
        h.i.enable()
    }
    this.Ih = null
};
h.Fk.prototype.update = function (a, c) {
    var d = this.Wa && this.Eb ? h.jq : h.Sb;
    for (var e = null, f = null, g = 0; g < this.qn.length; g++) {
        var k = this.qn[g], l = k.closest(d, a);
        l.connection && (e = l.connection, f = k, d = l.bm)
    }
    e = (d = {closest: e, local: f, bm: d}, !!d.closest) && c != h.oq;
    if ((this.le = !!c && !this.Ad.getParent() && this.Ad.Cc() && !e) || Ja(this, d, a)) {
        h.i.disable();
        d.closest ? (a = this.Wa != d.closest, c = this.Eb != d.local, this.Wa && this.Eb && (a || c || this.le) && Ka(this)) : Ka(this);
        this.Eb = this.Wa = this.Ag = null;
        if (!this.le && (a = d.closest, c = d.local,
            a)) if (a == this.Wa || a.B.rf()) console.log("Trying to connect to an insertion marker"); else {
            this.Wa = a;
            this.Eb = c;
            a = this.Wa;
            c = this.Eb;
            if (c.type == h.jd) a = a.isConnected() && !h.aa.rt(this.Ad, a.ka.B); else {
                a:{
                    for (d = 0; e = c.B.K[d]; d++) if (e.connection && e.connection.type == h.Ca) {
                        d = e.connection;
                        break a
                    }
                    d = null
                }
                a = c == d ? 0 : !this.Ad.W && c.type == h.ld && a.isConnected()
            }
            if (a) a = this.Wa, c = this.Eb, A(a) ? (this.Ih = A(a), La(A(a), !0)) : c.type == h.jd && (this.Ih = a.B, a.B.Dy(a, !0)), this.Co = !0; else {
                d = this.Eb;
                a = this.Wa;
                c = this.Lo && d == this.Lo ? this.yg :
                    this.Dh;
                a:{
                    f = d.B;
                    e = c.Xc(!0);
                    f = f.Xc(!0);
                    if (e.length != f.length) throw Error("Connection lists did not match in length.");
                    for (g = 0; g < f.length; g++) if (f[g] == d) {
                        d = e[g];
                        break a
                    }
                    d = null
                }
                if (d == this.Ag) throw Error("Made it to connectMarker_ even though the marker isn't changing");
                c.wa();
                c.$ = !0;
                c.ga().setAttribute("visibility", "visible");
                d.type != h.Ca && d.type != h.Ha || c.moveBy(a.fb - d.fb, a.Aa - d.Aa);
                d.connect(a);
                this.Ag = d
            }
            this.Wa && this.Wa.et()
        }
        h.i.enable()
    }
};

function Ia(a, c) {
    var d = c.type;
    h.i.disable();
    try {
        var e = a.F.Sh(d);
        e.ku(!0);
        e.Ff(c.isCollapsed());
        if (c.Wb) {
            var f = c.Wb();
            f && e.yc(f)
        }
        for (a = 0; a < c.K.length; a++) {
            var g = c.K[a], k = e.K[a];
            for (d = 0; d < g.Ea.length; d++) k.Ea[d].setValue(g.Ea[d].getValue())
        }
        e.ug();
        e.ga().setAttribute("visibility", "hidden")
    } finally {
        h.i.enable()
    }
    return e
}

function Ja(a, c, d) {
    var e = c.local, f = c.closest;
    c = c.bm;
    if (e && f) {
        if (a.Eb && a.Wa) {
            if (a.Wa == f && a.Eb == e) return !1;
            e = a.Eb.fb + d.x - a.Wa.fb;
            a = a.Eb.Aa + d.y - a.Wa.Aa;
            a = Math.sqrt(e * e + a * a);
            return !(f && c > a - h.av)
        }
        if (a.Eb || a.Wa) console.error("Only one of localConnection_ and closestConnection_ was set."); else return !0
    } else return !(!a.Eb || !a.Wa);
    console.error("Returning true from shouldUpdatePreviews, but it's not clear why.");
    return !0
}

function Ka(a) {
    a.Wa && (h.g.o.removeNode(h.aa.ft), delete h.aa.ft);
    if (a.Co) {
        var c = a.Wa;
        c.type != h.Ha || c.isConnected() ? La(a.Ih, !1) : a.Ih.Dy(c, !1);
        a.Ih = null;
        a.Co = !1
    } else if (a.Ag) if (a.Ag) {
        c = a.Ag;
        var d = c.B, e = d.W, f = d.N, g = d.L;
        g = c.type == h.Ha && !(g && g.ka);
        !(c != e || f && f.ka) || g ? B(A(c), !1) : c.type == h.Ca && c != e ? (e = c.ka, B(e.B, !1), f = f ? f.ka : null, B(d, !0), f && f.connect(e)) : B(d, !0);
        if (c.ka) throw Error("markerConnection_ still connected at the end of disconnectInsertionMarker");
        a.Ag = null;
        d.ga().setAttribute("visibility", "hidden")
    } else console.log("No insertion marker connection to disconnect")
}

h.Fk.prototype.Eh = function () {
    var a = [];
    this.Dh && a.push(this.Dh);
    this.yg && a.push(this.yg);
    return a
};
h.Kf = function (a, c) {
    this.Xa = a;
    this.F = c;
    this.Td = new h.Fk(this.Xa);
    this.kg = null;
    this.le = !1;
    this.ee = this.Xa.Fa();
    this.jl = h.Kf.Iy(a)
};
h.Kf.prototype.G = function () {
    this.wb = this.F = this.Xa = null;
    this.jl.length = 0;
    this.Td && (this.Td.G(), this.Td = null)
};
h.Kf.Iy = function (a) {
    var c = [];
    a = p(a, !1);
    for (var d = 0, e; e = a[d]; d++) {
        e = M(e);
        for (var f = 0; f < e.length; f++) c.push({location: e[f].Bl, icon: e[f]})
    }
    return c
};

function Ma(a, c, d) {
    d = a.Uh(d);
    var e = h.g.M.sum(a.ee, d);
    a.Xa.Zo(e);
    for (e = 0; e < a.jl.length; e++) {
        var f = a.jl[e];
        Na(f.icon, h.g.M.sum(f.location, d))
    }
    a.kg = Oa(a.F, c);
    a.Td.update(d, a.kg);
    a.le = a.Td.le;
    c = a.F.Nb;
    a.le ? (Pa(a.Xa, !0), a.kg == h.Dm && c && c.Ap(!0)) : (Pa(a.Xa, !1), c && c.Ap(!1))
}

function Qa(a, c, d) {
    Ma(a, c, d);
    a.jl = [];
    h.g.o.$j();
    h.La.Sn();
    c = a.Uh(d);
    d = h.g.M.sum(a.ee, c);
    var e = a.Xa;
    e.mk && (e.translate(d.x, d.y), e.C.wc.Sk(e.C.kb));
    d = a.F.Nb;
    a.le ? (d && setTimeout(d.close.bind(d), 100), a.ej(), a.Xa.G(!1, !0)) : d && d.close();
    a.le || (Ra(a.Xa, c.x, c.y), a.Xa.Lg(!1), a.ej(), a.Td.Wa ? (c = a.Td, c.Wa && (h.i.disable(), Ka(c), h.i.enable(), c.Eb.connect(c.Wa), c.Ad.$ && (h.La.lx((I(c.Eb) ? c.Wa : c.Eb).B), Sa(N(c.Ad))))) : a.Xa.wa(), Ta(a.Xa));
    a.F.qc(!0);
    (c = a.F.qa) && c.Dz(a.Xa.Cc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
    h.i.ca(!1)
}

h.Kf.prototype.ej = function () {
    var a = new h.i.li(this.Xa);
    a.ep = this.ee;
    a.Jg();
    h.i.Ma(a)
};
h.Kf.prototype.Uh = function (a) {
    a = new h.g.M(a.x / this.F.scale, a.y / this.F.scale);
    this.F.xj && a.scale(1 / this.F.options.Fc.scale);
    return a
};
h.Kf.prototype.Eh = function () {
    return this.Td && this.Td.Eh ? this.Td.Eh() : []
};
h.Cm = function () {
    this.kc = this.qb = null
};

function O(a, c) {
    a.qb = c;
    a.kc && a.kc.draw(a.qb)
}

b = h.Cm.prototype;
b.Ia = function () {
    this.kc && this.kc.Ia()
};
b.next = function () {
    var a = this.qb;
    if (!a) return null;
    for (a = a.next(); a && a.next() && (a.cb() == h.A.types.hd || a.cb() == h.A.types.uc);) a = a.next();
    a && O(this, a);
    return a
};
b.Cl = function () {
    var a = this.qb;
    if (!a) return null;
    if (a.cb() == h.A.types.kd || a.cb() == h.A.types.nh) a = a.next();
    (a = a.Cl()) && O(this, a);
    return a
};
b.Bf = function () {
    var a = this.qb;
    if (!a) return null;
    for (a = a.Bf(); a && a.Bf() && (a.cb() == h.A.types.hd || a.cb() == h.A.types.uc);) a = a.Bf();
    a && O(this, a);
    return a
};
b.Wl = function () {
    var a = this.qb;
    if (!a) return null;
    (a = a.Wl()) && a.cb() == h.A.types.uc && (a = a.Bf() || a);
    a && O(this, a);
    return a
};
h.Of = function () {
    h.Of.v.constructor.call(this)
};
h.g.object.S(h.Of, h.Cm);
h.Of.prototype.next = function () {
    return null
};
h.Of.prototype.Cl = function () {
    return null
};
h.Of.prototype.Bf = function () {
    return null
};
h.Of.prototype.Wl = function () {
    return null
};
h.mw = function () {
    this.Pw = h.ph.oi.ux;
    this.jx = Object.create(null)
};

function Ua(a, c) {
    return (c = a.jx[c]) && "string" == typeof propertyValue && Ua(a, c) ? Ua(a, c) : c ? String(c) : null
};h.Di = function (a) {
    this.lm = a;
    this.km = [];
    this.df = Object.create(null)
};
h.Di.prototype.uo = function () {
    return this.lm
};
h.Di.prototype.subscribe = function (a, c, d) {
    this.df[c] || (this.df[c] = []);
    this.df[c].push({element: a, propertyName: d});
    a.style[d] = this.lm && Ua(this.lm, c) || ""
};
h.Di.prototype.unsubscribe = function (a) {
    if (a) for (var c = Object.keys(this.df), d = 0, e; e = c[d]; d++) {
        for (var f = this.df[e], g = f.length - 1; 0 <= g; g--) f[g].element === a && f.splice(g, 1);
        this.df[e].length || delete this.df[e]
    }
};
h.Di.prototype.G = function () {
    this.df = this.km = this.lm = this.Xb = null
};
h.ph = {};
h.ph.oi = {};
h.ph.oi.ux = {
    colour_blocks: {colourPrimary: "20"},
    list_blocks: {colourPrimary: "260"},
    logic_blocks: {colourPrimary: "210"},
    loop_blocks: {colourPrimary: "120"},
    math_blocks: {colourPrimary: "230"},
    procedure_blocks: {colourPrimary: "290"},
    text_blocks: {colourPrimary: "160"},
    variable_blocks: {colourPrimary: "330"},
    variable_dynamic_blocks: {colourPrimary: "310"},
    hat_blocks: {colourPrimary: "330", hat: "cap"}
};
h.ph.oi.BE = {
    colour_category: {colour: "20"},
    list_category: {colour: "260"},
    logic_category: {colour: "210"},
    loop_category: {colour: "120"},
    math_category: {colour: "230"},
    procedure_category: {colour: "290"},
    text_category: {colour: "160"},
    variable_category: {colour: "330"},
    variable_dynamic_category: {colour: "310"}
};
h.ph.oi = new h.mw;
h.pr = function (a) {
    this.Ta = Object.create(null);
    this.C = a
};
b = h.pr.prototype;
b.clear = function () {
    this.Ta = Object.create(null)
};
b.$t = function (a, c) {
    var d = this.kf(c, a.type), e = P(this.C, !1);
    h.i.ca(!0);
    try {
        if (d && d.ib() != a.ib()) {
            var f = a.type;
            c != d.name && Va(d, c, e);
            for (c = 0; c < e.length; c++) {
                var g = void 0;
                a.ib();
                d.ib();
                for (var k = 0; g = e[c].K[k]; k++) for (var l = 0; g.Ea[l]; l++) ;
            }
            h.i.Ma(new h.i.od(a));
            this.Ta[f].splice(this.xl(f).indexOf(a), 1)
        } else Va(a, c, e)
    } finally {
        h.i.ca(!1)
    }
};
b.Kg = function (a, c) {
    var d = this.og(a);
    if (!d) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
    this.$t(d, c)
};

function Va(a, c, d) {
    h.i.Ma(new h.i.Md(a, c));
    a.name = c;
    for (a = 0; a < d.length; a++) for (var e = d[a], f = 0; c = e.K[f]; f++) for (var g = 0; c.Ea[g]; g++) ;
}

b.sd = function (a, c, d) {
    var e = this.kf(a, c);
    if (e) {
        if (d && e.ib() != d) throw Error('Variable "' + a + '" is already in use and its id is "' + e.ib() + '" which conflicts with the passed in id, "' + d + '".');
        return e
    }
    if (d && this.og(d)) throw Error('Variable id, "' + d + '", is already in use.');
    e = d || h.g.He();
    c = c || "";
    e = new h.Pk(this.C, a, c, e);
    a = this.Ta[c] || [];
    a.push(e);
    delete this.Ta[c];
    this.Ta[c] = a;
    return e
};
b.Ah = function (a) {
    var c = this.og(a);
    if (c) {
        var d = c.name, e = this.wo(a);
        a = 0;
        for (var f; f = e[a]; a++) if ("procedures_defnoreturn" == f.type || "procedures_defreturn" == f.type) {
            a = Fa(f, "NAME");
            d = h.h.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", d).replace("%2", a);
            h.alert(d);
            return
        }
        var g = this;
        1 < e.length ? (d = h.h.DELETE_VARIABLE_CONFIRMATION.replace("%1", String(e.length)).replace("%2", d), h.confirm(d, function (k) {
            k && g.$k(c, e)
        })) : g.$k(c, e)
    } else console.warn("Can't delete non-existent variable: " + a)
};
b.$k = function (a, c) {
    var d = h.i.ub();
    d || h.i.ca(!0);
    try {
        for (var e = 0; e < c.length; e++) c[e].G(!0, !1);
        var f = this.Ta[a.type];
        c = 0;
        for (var g; g = f[c]; c++) if (g.ib() == a.ib()) {
            f.splice(c, 1);
            h.i.Ma(new h.i.od(a));
            break
        }
    } finally {
        d || h.i.ca(!1)
    }
};
b.kf = function (a, c) {
    if (c = this.Ta[c || ""]) for (var d = 0, e; e = c[d]; d++) if (h.Rf.Ud(e.name, a)) return e;
    return null
};
b.og = function (a) {
    for (var c = Object.keys(this.Ta), d = 0; d < c.length; d++) for (var e = c[d], f = 0, g; g = this.Ta[e][f]; f++) if (g.ib() == a) return g;
    return null
};
b.xl = function (a) {
    return (a = this.Ta[a || ""]) ? a.slice() : []
};
b.ng = function () {
    var a = [], c;
    for (c in this.Ta) a = a.concat(this.Ta[c]);
    return a
};
b.wo = function (a) {
    for (var c = [], d = P(this.C, !1), e = 0; e < d.length; e++) {
        var f = na(d[e]);
        if (f) for (var g = 0; g < f.length; g++) f[g].ib() == a && c.push(d[e])
    }
    return c
};
h.ab = function (a) {
    this.id = h.g.He();
    h.ab.Ei[this.id] = this;
    this.options = a || {};
    this.H = !!this.options.H;
    this.lj = !!this.options.lj;
    this.Gb = this.options.Gb;
    this.ii = [];
    this.mm = [];
    this.Wk = Object.create(null);
    this.Bj = [];
    this.Ug = [];
    this.Pj = [];
    this.sn = Object.create(null);
    this.Ve = Object.create(null);
    this.Ta = new h.pr(this);
    this.am = null;
    this.ya = new h.Cm;
    this.Ec = new h.Of;
    this.gc = this.options.Fc ? this.options.Fc.gc : new h.Di(this.options.bA || h.ph.oi);
    this.gc.km.push(this)
};
b = h.ab.prototype;
b.$ = !1;
b.Ho = !1;
b.Hq = 1024;
b.Yk = null;
b.ju = function (a) {
    this.ya = a
};
b.uo = function () {
    return this.gc.uo()
};
b.G = function () {
    this.Bj.length = 0;
    this.clear();
    delete h.ab.Ei[this.id];
    if (this.gc) {
        var a = this.gc, c = a.km.indexOf(this);
        if (0 > c) throw Error("Cannot unsubscribe a workspace that hasn't been subscribed.");
        a.km.splice(c, 1);
        this.gc.unsubscribe(this.fe);
        this.options.Fc || (this.gc.G(), this.gc = null)
    }
};
h.ab.Yq = 3;
b = h.ab.prototype;
b.ce = function (a, c) {
    a = a.Fa();
    c = c.Fa();
    return a.y + h.ab.prototype.ce.offset * a.x - (c.y + h.ab.prototype.ce.offset * c.x)
};

function Wa(a, c) {
    if (!h.g.Hi(a.ii, c)) throw Error("Block not present in workspace's list of top-most blocks.");
}

function D(a, c) {
    var d = [].concat(a.ii);
    c && 1 < d.length && (a.ce.offset = Math.sin(h.g.Vb.Sg(h.ab.Yq)), a.H && (a.ce.offset *= -1), d.sort(a.ce));
    return d
}

function ja(a, c) {
    var d = [].concat(a.mm);
    c && 1 < d.length && (a.ce.offset = Math.sin(h.g.Vb.Sg(h.ab.Yq)), a.H && (a.ce.offset *= -1), d.sort(a.ce));
    return d
}

function P(a, c) {
    if (c) {
        a = D(a, !0);
        c = [];
        for (var d = 0; d < a.length; d++) c.push.apply(c, p(a[d], !0))
    } else for (c = D(a, !1), d = 0; d < c.length; d++) c.push.apply(c, ma(c[d], !1));
    return c.filter(function (e) {
        return !e.rf()
    })
}

b.clear = function () {
    this.Ho = !0;
    try {
        var a = h.i.ub();
        for (a || h.i.ca(!0); this.ii.length;) this.ii[0].G();
        for (; this.mm.length;) this.mm[this.mm.length - 1].G();
        a || h.i.ca(!1);
        this.Ta.clear();
        this.am && this.am.clear()
    } finally {
        this.Ho = !1
    }
};
b.Kg = function (a, c) {
    this.Ta.Kg(a, c)
};
b.sd = function (a, c, d) {
    return this.Ta.sd(a, c, d)
};
b.wo = function (a) {
    return this.Ta.wo(a)
};
b.Ah = function (a) {
    this.Ta.Ah(a)
};
b.$k = function (a, c) {
    this.Ta.$k(a, c)
};
b.kf = function (a, c) {
    return this.Ta.kf(a, c)
};
b.og = function (a) {
    return this.Ta.og(a)
};
b.xl = function (a) {
    return this.Ta.xl(a)
};
b.ng = function () {
    return this.Ta.ng()
};
b.gj = function () {
    return 0
};
b.Sh = function (a, c) {
    return new h.rk(this, a, c)
};

function Xa(a, c) {
    if (!Ya(a)) return !0;
    var d = 0, e;
    for (e in c) {
        var f = c[e];
        if (a.options.Wo) {
            var g = a.options.Wo[e] || Infinity;
            var k = a.Ve[e] ? a.Ve[e].slice(0) : [];
            g -= k.length
        } else g = Infinity;
        if (f > g) return !1;
        d += c[e]
    }
    return d > (isNaN(a.options.Fj) ? Infinity : a.options.Fj - P(a).length) ? !1 : !0
}

function Ya(a) {
    return Infinity != a.options.Fj || !!a.options.Wo
}

b.Qp = function (a) {
    var c = a ? this.Pj : this.Ug, d = a ? this.Ug : this.Pj, e = c.pop();
    if (e) {
        for (var f = [e]; c.length && e.group && e.group == c[c.length - 1].group;) f.push(c.pop());
        for (c = 0; e = f[c]; c++) d.push(e);
        f = h.i.filter(f, a);
        h.i.Mb = !1;
        try {
            for (c = 0; e = f[c]; c++) e.run(a)
        } finally {
            h.i.Mb = !0
        }
    }
};

function Za() {
    var a = C;
    a.Ug.length = 0;
    a.Pj.length = 0;
    h.i.bx()
}

function $a(a, c) {
    a.Bj.push(c)
}

function u(a, c) {
    return a.sn[c] || null
}

h.ab.Ei = Object.create(null);
h.ab.io = function (a) {
    return h.ab.Ei[a] || null
};
h.ab.getAll = function () {
    var a = [], c;
    for (c in h.ab.Ei) a.push(h.ab.Ei[c]);
    return a
};
h.la = function (a, c, d, e, f, g) {
    this.F = a;
    this.ff = c;
    this.mu = d;
    d = h.la.Qu;
    this.F.H && (d = -d);
    this.Jw = h.g.Vb.Sg(d);
    a.Te.appendChild(this.Wi(c, !(!f || !g)));
    this.mb = e;
    this.qp && ab(this);
    f && g || (c = this.ff.getBBox(), f = c.width + 2 * h.la.Cd, g = c.height + 2 * h.la.Cd);
    bb(this, f, g);
    ab(this);
    cb(this);
    this.qp = !0;
    a.options.readOnly || (h.Ba(this.Li, "mousedown", this, this.Qw), this.$d && h.Ba(this.$d, "mousedown", this, this.Gz))
};
h.la.Cd = 6;
h.la.Ru = 5;
h.la.Qu = 20;
h.la.Xp = 4;
h.la.Ou = 8;
h.la.yf = null;
h.la.xf = null;
h.la.prototype.bu = null;
h.la.Pp = function () {
    h.la.yf && (h.lb(h.la.yf), h.la.yf = null);
    h.la.xf && (h.lb(h.la.xf), h.la.xf = null)
};
h.la.Rw = function () {
    h.Touch.Tk();
    h.la.Pp()
};
b = h.la.prototype;
b.qp = !1;
b.mb = null;
b.Qe = 0;
b.Cf = 0;
b.Qb = 0;
b.ud = 0;
b.pn = !0;
b.Wi = function (a, c) {
    this.xc = h.g.o.J("g", {}, null);
    var d = {filter: "url(#" + this.F.options.ss + ")"};
    h.g.userAgent.Ev && (d = {});
    d = h.g.o.J("g", d, this.xc);
    this.wn = h.g.o.J("path", {}, d);
    this.Li = h.g.o.J("rect", {"class": "blocklyDraggable", x: 0, y: 0, rx: h.la.Cd, ry: h.la.Cd}, d);
    c ? (this.$d = h.g.o.J("g", {"class": this.F.H ? "blocklyResizeSW" : "blocklyResizeSE"}, this.xc), c = 2 * h.la.Cd, h.g.o.J("polygon", {points: "0,x x,x x,0".replace(/x/g, c.toString())}, this.$d), h.g.o.J("line", {
        "class": "blocklyResizeLine", x1: c / 3, y1: c - 1, x2: c - 1, y2: c /
            3
    }, this.$d), h.g.o.J("line", {
        "class": "blocklyResizeLine",
        x1: 2 * c / 3,
        y1: c - 1,
        x2: c - 1,
        y2: 2 * c / 3
    }, this.$d)) : this.$d = null;
    this.xc.appendChild(a);
    return this.xc
};
b.ga = function () {
    return this.xc
};
b.Qw = function (a) {
    var c = db(this.F, a);
    if (c) {
        if (c.Hh) throw Error("Tried to call gesture.handleBubbleStart, but the gesture had already been started.");
        c.Hc || (c.Hc = this);
        c.yd = a
    }
};
b.Vj = function () {
};
b.Cc = function () {
    return !1
};
b.Gz = function (a) {
    var c = this.xc.parentNode;
    c.lastChild !== this.xc && c.appendChild(this.xc);
    h.la.Pp();
    h.g.Oh(a) || (this.F.Hp(a, new h.g.M(this.F.H ? -this.Qb : this.Qb, this.ud)), h.la.yf = h.Ba(document, "mouseup", this, h.la.Rw), h.la.xf = h.Ba(document, "mousemove", this, this.Hz), h.ec());
    a.stopPropagation()
};
b.Hz = function (a) {
    this.pn = !1;
    var c = this.F;
    a = h.g.Ij(a, y(c), Aa(c));
    a.x /= c.scale;
    a.y /= c.scale;
    c = h.g.M.sum(c.ps, a);
    bb(this, this.F.H ? -c.x : c.x, c.y);
    this.F.H && ab(this)
};

function eb(a, c, d) {
    var e = a.F.H ? a.mb.x - c.x - a.Qb : c.x + a.mb.x;
    c = c.y + a.mb.y;
    return Math.max(0, Math.min(1, (Math.min(e + a.Qb, d.sb + d.yb) - Math.max(e, d.sb)) * (Math.min(c + a.ud, d.Hb + d.Ob) - Math.max(c, d.Hb)) / (a.Qb * a.ud)))
}

function ab(a) {
    var c = a.mb.x;
    c = a.F.H ? c - (a.Qe + a.Qb) : c + a.Qe;
    a.moveTo(c, a.Cf + a.mb.y)
}

b.moveTo = function (a, c) {
    this.xc.setAttribute("transform", "translate(" + a + "," + c + ")")
};

function bb(a, c, d) {
    var e = 2 * h.la.Cd;
    c = Math.max(c, e + 45);
    d = Math.max(d, e + 20);
    a.Qb = c;
    a.ud = d;
    a.Li.setAttribute("width", c);
    a.Li.setAttribute("height", d);
    a.$d && (a.F.H ? a.$d.setAttribute("transform", "translate(" + 2 * h.la.Cd + "," + (d - e) + ") scale(-1 1)") : a.$d.setAttribute("transform", "translate(" + (c - e) + "," + (d - e) + ")"));
    if (a.pn) {
        c = a.F.Yc();
        c.sb /= a.F.scale;
        c.yb /= a.F.scale;
        c.Hb /= a.F.scale;
        c.Ob /= a.F.scale;
        d = -a.Qb / 4;
        if (!(a.Qb > c.yb)) {
            if (a.F.H) {
                e = a.mb.x - d;
                var f = e - a.Qb;
                var g = c.sb + c.yb, k = c.sb + h.Da.pc / a.F.scale
            } else f = d + a.mb.x,
                e = f + a.Qb, k = c.sb, g = c.sb + c.yb - h.Da.pc / a.F.scale;
            a.F.H ? f < k ? d = -(k - a.mb.x + a.Qb) : e > g && (d = -(g - a.mb.x)) : f < k ? d = k - a.mb.x : e > g && (d = g - a.mb.x - a.Qb)
        }
        f = d;
        d = -a.ud / 4;
        if (!(a.ud > c.Ob)) {
            e = a.mb.y + d;
            g = e + a.ud;
            k = c.Hb;
            var l = c.Hb + c.Ob - h.Da.pc / a.F.scale, m = a.mb.y;
            e < k ? d = k - m : g > l && (d = l - m - a.ud)
        }
        k = d;
        g = a.mu.getBBox();
        d = {x: f, y: -a.ud - h.ea.Jq};
        e = {x: -a.Qb - 30, y: k};
        k = {x: g.width, y: k};
        l = {x: f, y: g.height};
        f = g.width < g.height ? k : l;
        g = g.width < g.height ? l : k;
        k = eb(a, d, c);
        l = eb(a, e, c);
        m = eb(a, f, c);
        c = Math.max(k, l, m, eb(a, g, c));
        k == c ? (a.Qe = d.x, a.Cf = d.y) : l ==
        c ? (a.Qe = e.x, a.Cf = e.y) : m == c ? (a.Qe = f.x, a.Cf = f.y) : (a.Qe = g.x, a.Cf = g.y)
    }
    ab(a);
    cb(a);
    a.bu && a.bu()
}

function cb(a) {
    var c = [], d = a.Qb / 2, e = a.ud / 2, f = -a.Qe, g = -a.Cf;
    if (d == f && e == g) c.push("M " + d + "," + e); else {
        g -= e;
        f -= d;
        a.F.H && (f *= -1);
        var k = Math.sqrt(g * g + f * f), l = Math.acos(f / k);
        0 > g && (l = 2 * Math.PI - l);
        var m = l + Math.PI / 2;
        m > 2 * Math.PI && (m -= 2 * Math.PI);
        var n = Math.sin(m), q = Math.cos(m), r = new h.g.md(a.Qb, a.ud);
        m = (r.width + r.height) / h.la.Ru;
        m = Math.min(m, r.width, r.height) / 4;
        r = 1 - h.la.Ou / k;
        f = d + r * f;
        g = e + r * g;
        r = d + m * q;
        var v = e + m * n;
        d -= m * q;
        e -= m * n;
        n = l + a.Jw;
        n > 2 * Math.PI && (n -= 2 * Math.PI);
        l = Math.sin(n) * k / h.la.Xp;
        k = Math.cos(n) * k / h.la.Xp;
        c.push("M" +
            r + "," + v);
        c.push("C" + (r + k) + "," + (v + l) + " " + f + "," + g + " " + f + "," + g);
        c.push("C" + f + "," + g + " " + (d + k) + "," + (e + l) + " " + d + "," + e)
    }
    c.push("z");
    a.wn.setAttribute("d", c.join(" "))
}

b.zd = function (a) {
    this.Li.setAttribute("fill", a);
    this.wn.setAttribute("fill", a)
};
b.G = function () {
    h.la.Pp();
    h.g.o.removeNode(this.xc);
    this.mu = this.ff = this.F = this.$d = this.Li = this.wn = this.xc = null
};
b.Zo = function (a, c) {
    a ? a.Tg(c.x, c.y) : this.moveTo(c.x, c.y);
    this.Qe = this.F.H ? this.mb.x - c.x - this.Qb : c.x - this.mb.x;
    this.Cf = c.y - this.mb.y;
    cb(this)
};
b.Fa = function () {
    return new h.g.M(this.mb.x + this.Qe, this.mb.y + this.Cf)
};
h.i.ne = function (a) {
    this.Qd = a.id;
    this.Ib = a.C.id;
    this.group = h.i.ub();
    this.Mb = h.i.Mb
};
h.g.object.S(h.i.ne, h.i.Abstract);
h.i.ne.prototype.za = function () {
    var a = h.i.ne.v.za.call(this);
    this.Qd && (a.commentId = this.Qd);
    return a
};
h.i.ne.prototype.oa = function (a) {
    h.i.ne.v.oa.call(this, a);
    this.Qd = a.commentId
};
h.i.dh = function (a, c, d) {
    a && (h.i.dh.v.constructor.call(this, a), this.Gt = c, this.Sl = d)
};
h.g.object.S(h.i.dh, h.i.ne);
b = h.i.dh.prototype;
b.type = h.i.hq;
b.za = function () {
    var a = h.i.dh.v.za.call(this);
    a.newContents = this.Sl;
    return a
};
b.oa = function (a) {
    h.i.dh.v.oa.call(this, a);
    this.Sl = a.newValue
};
b.Mh = function () {
    return this.Gt == this.Sl
};
b.run = function (a) {
    var c;
    (c = x(this).Wk[this.Qd] || null) ? c.zF(a ? this.Sl : this.Gt) : console.warn("Can't change non-existent comment: " + this.Qd)
};
h.i.oe = function (a) {
    a && (h.i.oe.v.constructor.call(this, a), this.xml = a.Mp())
};
h.g.object.S(h.i.oe, h.i.ne);
h.i.oe.prototype.type = h.i.wk;
h.i.oe.prototype.za = function () {
    var a = h.i.oe.v.za.call(this);
    a.xml = h.I.Sd(this.xml);
    return a
};
h.i.oe.prototype.oa = function (a) {
    h.i.oe.v.oa.call(this, a);
    this.xml = h.I.Ue(a.xml)
};
h.i.oe.prototype.run = function (a) {
    h.i.kq(this, a)
};
h.i.kq = function (a, c) {
    var d = x(a);
    c ? (c = h.g.xml.createElement("xml"), c.appendChild(a.xml), h.I.Fe(c, d)) : (d = d.Wk[a.Qd] || null) ? d.G(!1, !1) : console.warn("Can't uncreate non-existent comment: " + a.Qd)
};
h.i.pe = function (a) {
    a && (h.i.pe.v.constructor.call(this, a), this.xml = a.Mp())
};
h.g.object.S(h.i.pe, h.i.ne);
h.i.pe.prototype.type = h.i.iq;
h.i.pe.prototype.za = function () {
    return h.i.pe.v.za.call(this)
};
h.i.pe.prototype.oa = function (a) {
    h.i.pe.v.oa.call(this, a)
};
h.i.pe.prototype.run = function (a) {
    h.i.kq(this, !a)
};
h.i.Lf = function (a) {
    a && (h.i.Lf.v.constructor.call(this, a), this.Cn = a, this.fp = a.Rs(), this.Bg = null)
};
h.g.object.S(h.i.Lf, h.i.ne);
b = h.i.Lf.prototype;
b.Jg = function () {
    if (!this.Cn) throw Error("Tried to record the new position of a comment on the same event twice.");
    this.Bg = this.Cn.Rs();
    this.Cn = null
};
b.type = h.i.xk;
b.za = function () {
    var a = h.i.Lf.v.za.call(this);
    this.Bg && (a.newCoordinate = Math.round(this.Bg.x) + "," + Math.round(this.Bg.y));
    return a
};
b.oa = function (a) {
    h.i.Lf.v.oa.call(this, a);
    a.newCoordinate && (a = a.newCoordinate.split(","), this.Bg = new h.g.M(Number(a[0]), Number(a[1])))
};
b.Mh = function () {
    return h.g.M.Ud(this.fp, this.Bg)
};
b.run = function (a) {
    var c;
    if (c = x(this).Wk[this.Qd] || null) {
        a = a ? this.Bg : this.fp;
        var d = c.Rs();
        c.moveBy(a.x - d.x, a.y - d.y)
    } else console.warn("Can't move non-existent comment: " + this.Qd)
};
h.mi = function (a, c) {
    this.tb = a;
    this.F = c;
    this.kg = null;
    this.pm = !1;
    this.ee = this.tb.Fa();
    this.lg = h.g.vg() && c.wc ? c.wc : null
};
h.mi.prototype.G = function () {
    this.lg = this.F = this.tb = null
};

function fb(a, c, d) {
    d = a.Uh(d);
    d = h.g.M.sum(a.ee, d);
    a.tb.Zo(a.lg, d);
    a.tb.Cc() && (a.kg = Oa(a.F, c), a.pm = a.kg != h.nq, c = a.F.Nb, a.pm ? (Pa(a.tb, !0), a.kg == h.Dm && c && c.Ap(!0)) : (Pa(a.tb, !1), c && c.Ap(!1)))
}

function gb(a, c, d) {
    fb(a, c, d);
    c = a.Uh(d);
    c = h.g.M.sum(a.ee, c);
    a.tb.moveTo(c.x, c.y);
    c = a.F.Nb;
    a.pm ? (c && setTimeout(c.close.bind(c), 100), a.ej(), a.tb.G(!1, !0)) : c && c.close();
    a.pm || (a.lg && a.lg.Sk(a.F.Te), a.tb.Lg && a.tb.Lg(!1), a.ej());
    a.F.qc(!0);
    a.F.qa && a.F.qa.Dz(a.tb.Cc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
    h.i.ca(!1)
}

h.mi.prototype.ej = function () {
    if (this.tb.mt) {
        var a = new h.i.Lf(this.tb);
        a.fp = this.ee;
        a.Jg();
        h.i.Ma(a)
    }
};
h.mi.prototype.Uh = function (a) {
    a = new h.g.M(a.x / this.F.scale, a.y / this.F.scale);
    this.F.xj && a.scale(1 / this.F.options.Fc.scale);
    return a
};
h.mi.prototype.$o = function () {
    this.tb.moveTo(0, 0);
    this.lg.Tg(this.ee.x, this.ee.y);
    ba(this.lg, this.tb.ga())
};
h.Fi = function (a) {
    this.F = a;
    this.su = new h.g.M(a.scrollX, a.scrollY)
};
h.Fi.prototype.G = function () {
    this.F = null
};
h.Fi.prototype.Hp = function () {
    h.selected && hb(h.selected);
    Ba(this.F)
};
h.Fi.prototype.Ge = function (a) {
    a = h.g.M.sum(this.su, a);
    this.F.scroll(a.x, a.y)
};
h.Dk = function (a) {
    h.Dk.v.constructor.call(this, a.yl());
    this.xp = a.xp;
    this.gt = a.gt
};
h.g.object.S(h.Dk, h.Fi);
h.Dk.prototype.Ge = function (a) {
    a = h.g.M.sum(this.su, a);
    this.gt ? this.xp.set(-a.x) : this.xp.set(-a.y)
};
h.gh = function (a, c) {
    this.wb = this.xb = this.Ng = this.Og = this.Hc = this.cc = this.Bt = null;
    this.Hn = c;
    this.rj = this.wg = this.sj = this.pg = !1;
    this.yd = a;
    this.R = this.Jf = this.qd = this.we = this.Vl = this.Ul = null;
    this.Jl = this.Hh = this.Ir = !1;
    this.at = !h.iv
};
b = h.gh.prototype;
b.G = function () {
    h.Touch.Tk();
    h.D.iA();
    this.Hn.Db = null;
    this.Ul && h.lb(this.Ul);
    this.Vl && h.lb(this.Vl);
    this.R = this.wb = this.xb = this.Ng = this.Og = null;
    this.qd && (this.qd.G(), this.qd = null);
    this.Jf && (this.Jf.G(), this.Jf = null);
    this.we && (this.we.G(), this.we = null)
};

function ib(a, c) {
    a.cc = h.g.M.bl(new h.g.M(c.clientX, c.clientY), a.Bt);
    if (a.pg) var d = !1; else a.pg = h.g.M.Xy(a.cc) > (a.R ? h.rv : h.hv), d = a.pg;
    if (d) {
        if (a.Ir) throw Error("updateIsDragging_ should only be called once per gesture.");
        a.Ir = !0;
        if (a.Hc) {
            a.rj = !0;
            a.we = new h.mi(a.Hc, a.wb);
            d = a.we;
            h.i.ub() || h.i.ca(!0);
            d.F.qc(!1);
            d.tb.pn = !1;
            d.lg && d.$o();
            d.tb.Lg && d.tb.Lg(!0);
            var e = d.F.qa;
            e && e.Dw(d.tb.Cc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
            fb(a.we, a.yd, a.cc);
            d = !0
        } else d = !1;
        if (!d) {
            if (a.xb) if (a.R ? (a.R.YE(a.xb) ? !a.R.Sy() ||
            a.R.$E(a.cc) ? (a.wb = a.R.HF, jb(a.wb), h.i.ub() || h.i.ca(!0), a.Ng = null, a.xb = a.R.Yr(a.xb), a.xb.select(), d = !0) : d = !1 : d = !1, a.wg = d) : a.xb.mc() && (a.wg = !0), a.wg) {
                a.qd = new h.Kf(a.xb, a.wb);
                d = a.qd;
                e = a.cc;
                var f = a.at;
                h.i.ub() || h.i.ca(!0);
                d.F.xj && Sa(d.Xa);
                h.g.o.Zj();
                d.F.qc(!1);
                h.La.Sn();
                if (d.Xa.getParent() || f && d.Xa.W && A(d.Xa.W)) B(d.Xa, f), e = d.Uh(e), e = h.g.M.sum(d.ee, e), d.Xa.translate(e.x, e.y), h.La.Bx(d.Xa);
                d.Xa.Lg(!0);
                d.Xa.$o();
                (e = d.F.qa) && e.Dw(d.Xa.Cc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
                Ma(a.qd, a.yd, a.cc);
                d = !0
            } else d = !1; else d = !1;
            if (d = !d) if (a.R) d = a.R.Sy(); else if (d = a.wb) d = a.wb, d = d.options.vb && d.options.vb.Ge;
            d && (a.Jf = a.R ? new h.Dk(a.R) : new h.Fi(a.wb), a.sj = !0, a.Jf.Hp())
        }
        h.uf()
    }
    a.yd = c
}

b.Un = function (a) {
    h.g.Ml(a) ? this.cancel() : (this.Hh = !0, h.La.Sn(), jb(this.wb), this.wb.xj && this.wb.resize(), za(this.wb), this.yd = a, h.ec(!!this.R), h.D.block(), this.xb && (!this.xb.cd && a.shiftKey ? (h.navigation.co(), O(this.Hn.ya, h.navigation.vo(this.xb))) : this.xb.select()), h.g.Oh(a) ? oa(this, a) : ("touchstart" != a.type.toLowerCase() && "pointerdown" != a.type.toLowerCase() || "mouse" == a.pointerType || h.Wy(a, this), this.Bt = new h.g.M(a.clientX, a.clientY), this.at = a.altKey || a.ctrlKey || a.metaKey, this.Ji(a)))
};
b.Ji = function (a) {
    this.Ul = h.Ba(document, "mousemove", null, this.hj.bind(this));
    this.Vl = h.Ba(document, "mouseup", null, this.zl.bind(this));
    a.preventDefault();
    a.stopPropagation()
};
b.hj = function (a) {
    ib(this, a);
    this.sj ? this.Jf.Ge(this.cc) : this.wg ? Ma(this.qd, this.yd, this.cc) : this.rj && fb(this.we, this.yd, this.cc);
    a.preventDefault();
    a.stopPropagation()
};
b.zl = function (a) {
    ib(this, a);
    h.uf();
    if (this.Jl) console.log("Trying to end a gesture recursively."); else {
        this.Jl = !0;
        if (this.rj) gb(this.we, a, this.cc); else if (this.wg) Qa(this.qd, a, this.cc); else if (this.sj) {
            var c = this.Jf;
            c.Ge(this.cc);
            Ca(c.F)
        } else if (this.Hc && !this.pg) this.Hc.Oz && this.Hc.Oz(), this.Hc.select && this.Hc.select(); else if (kb(this)) this.Og.Wj(), lb(this); else if (this.Ng && !this.pg && !kb(this)) this.R && this.R.on ? this.xb.isEnabled() && (h.i.ub() || h.i.ca(!0), Ta(this.R.Yr(this.xb))) : h.i.Ma(new h.i.Qc(this.Ng,
            "click", void 0, void 0)), lb(this), h.i.ca(!1); else if (!(this.Ng || this.Hc || this.Og || this.pg)) if (c = this.Hn, a.shiftKey) {
            h.navigation.co();
            var d = h.g.Lz(c, new h.g.M(a.clientX, a.clientY));
            d = h.A.Zi(c, d);
            O(c.ya, d)
        } else h.selected && hb(h.selected);
        a.preventDefault();
        a.stopPropagation();
        this.G()
    }
};
b.cancel = function () {
    if (!this.Jl) {
        h.uf();
        if (this.rj) gb(this.we, this.yd, this.cc); else if (this.wg) Qa(this.qd, this.yd, this.cc); else if (this.sj) {
            var a = this.Jf;
            a.Ge(this.cc);
            Ca(a.F)
        }
        this.G()
    }
};

function oa(a, c) {
    a.xb ? (lb(a), h.ec(a.R), a.xb.Vj(c)) : a.Hc ? a.Hc.Vj(c) : a.wb && !a.R && (h.ec(), a.wb.Vj(c));
    c.preventDefault();
    c.stopPropagation();
    a.G()
}

function lb(a) {
    a.xb && !a.R && Sa(a.xb)
}

function mb(a, c) {
    c.Qa ? mb(a, c.getParent()) : a.xb = c
}

function kb(a) {
    if (a.Og) {
        var c = a.Og;
        c = !!c.B && c.B.Dc() && !!c.Wj && "function" === typeof c.Wj
    } else c = !1;
    return c && !a.pg && (!a.R || !a.R.on)
}

b.lc = function () {
    return this.sj || this.wg || this.rj
};
b.Eh = function () {
    return this.qd ? this.qd.Eh() : []
};
h.gh.Do = function () {
    for (var a = h.ab.getAll(), c = 0, d; d = a[c]; c++) if (d.Db) return !0;
    return !1
};
h.xa = function (a, c, d) {
    this.wu = this.zu = this.je = null;
    this.jb = new h.g.md(0, 0);
    this.Lb = null;
    d && this.Ri(d);
    this.setValue(a);
    c && (this.zu = c)
};
h.xa.eq = 16;
h.xa.hr = 12.5;
h.xa.Gi = 10;
h.xa.yr = 10;
h.xa.fh = h.xa.Gi / 2;
b = h.xa.prototype;
b.name = void 0;
b.yt = 50;
b.B = null;
b.pf = !0;
b.If = !0;
b.Uk = null;
h.xa.Kq = "\u00a0";
b = h.xa.prototype;
b.Gd = !0;
b.Zq = !1;
b.Ri = function (a) {
    var c = a.tooltip;
    "string" == typeof c && (c = h.g.oc(a.tooltip));
    c && this.Gf(c)
};
b.Pa = function () {
    this.Wc || (this.Wc = h.g.o.J("g", {}, null), this.isVisible() || (this.Wc.style.display = "none"), this.B.ga().appendChild(this.Wc), this.nj(), this.jk(), this.Gf(this.wu), h.D.Ji(this.Uk || this.ga()), this.At = h.Ba(this.Uk || this.ga(), "mousedown", this, this.Jj))
};
b.nj = function () {
    this.jb.height = Math.max(this.jb.height, h.xa.eq);
    this.jb.width = Math.max(this.jb.width, h.xa.Gi);
    this.Ki = h.g.o.J("rect", {rx: 4, ry: 4, x: 0, y: 0, height: this.jb.height, width: this.jb.width}, this.Wc);
    nb(this)
};

function nb(a) {
    a.Jc = h.g.o.J("text", {"class": "blocklyText", y: h.xa.hr, x: a.Ki ? h.xa.fh : 0}, a.Wc);
    a.ei = document.createTextNode("");
    a.Jc.appendChild(a.ei)
}

b.G = function () {
    h.w.jj(this);
    h.V.jj(this);
    this.At && h.lb(this.At);
    h.g.o.removeNode(this.Wc)
};
b.jk = function () {
    var a = this.Uk || this.ga();
    this.Gd && a && (this.B.Dc() ? (h.g.o.Ab(a, "blocklyEditableText"), h.g.o.Gc(a, "blocklyNonEditableText"), a.style.cursor = this.bv) : (h.g.o.Ab(a, "blocklyNonEditableText"), h.g.o.Gc(a, "blocklyEditableText"), a.style.cursor = ""))
};
b.isVisible = function () {
    return this.If
};
b.Yb = function (a) {
    if (this.If != a) {
        this.If = a;
        var c = this.ga();
        c && (c.style.display = a ? "block" : "none")
    }
};
b.ga = function () {
    return this.Wc
};
b.ie = function () {
};
b.Vh = function () {
    if (this.ei) {
        this.ei.nodeValue = ob(this);
        var a = h.g.o.so(this.Jc);
        this.Ki && (a += h.xa.Gi, this.Ki.setAttribute("width", a));
        this.jb.width = a
    }
};
b.Ie = function () {
    if (!this.isVisible()) return new h.g.md(0, 0);
    this.pf ? (this.Vh(), this.pf = !1) : this.If && 0 == this.jb.width && (console.warn("Deprecated use of setting size_.width to 0 to rerender a field. Set field.isDirty_ to true instead."), this.Vh());
    return this.jb
};

function ob(a) {
    var c = a.jf();
    if (!c) return h.xa.Kq;
    c.length > a.yt && (c = c.substring(0, a.yt - 2) + "\u2026");
    c = c.replace(/\s/g, h.xa.Kq);
    a.B && a.B.H && (c += "\u200f");
    return c
}

b.jf = function () {
    if (this.to) {
        var a = this.to.call(this);
        if (null !== a) return String(a)
    }
    return String(this.getValue())
};
b.im = function () {
    throw Error("setText method is deprecated");
};
b.Ej = function () {
    this.pf = !0
};

function pb(a) {
    a.pf = !0;
    a.B && a.B.$ && (a.B.wa(), a.B.hc())
}

b.setValue = function (a) {
    if (null !== a) {
        var c = this.fl(a);
        a = qb(this, a, c);
        if (!(a instanceof Error)) {
            if (c = this.zu) if (c = c.call(this, a), a = qb(this, a, c), a instanceof Error) return;
            c = this.getValue();
            c !== a && (this.B && h.i.isEnabled() && h.i.Ma(new h.i.$g(this.B, "field", this.name || null, c, a)), this.hl(a), this.pf && pb(this))
        }
    }
};

function qb(a, c, d) {
    if (null === d) return a.pf && pb(a), Error();
    void 0 !== d && (c = d);
    return c
}

b.getValue = function () {
    return this.je
};
b.fl = function (a) {
    return null === a || void 0 === a ? null : a
};
b.hl = function (a) {
    this.je = a;
    this.pf = !0
};
b.Jj = function (a) {
    if (this.B && this.B.C && (a = db(this.B.C, a))) {
        if (a.Hh) throw Error("Tried to call gesture.setStartField, but the gesture had already been started.");
        a.Og || (a.Og = this)
    }
};
b.Gf = function (a) {
    var c = this.Uk || this.ga();
    c ? c.ge = a || "" === a ? a : this.B : this.wu = a
};
b.Vd = function () {
    for (var a = null, c = this.B, d = c.K, e = 0; e < c.K.length; e++) for (var f = d[e], g = f.Ea, k = 0; k < g.length; k++) if (g[k] === this) {
        a = f;
        break
    }
    return a
};
b.Is = function () {
    return !1
};
b.Fg = function () {
    return !1
};
b.Sj = function (a) {
    a ? (this.Wc.appendChild(a), this.Lb = a) : this.Lb = null
};
b.em = function (a) {
    a && this.Wc.appendChild(a)
};
h.zc = {};
h.zc.hk = {};
h.zc.register = function (a, c) {
    if ("string" != typeof a || "" == a.trim()) throw Error('Invalid field type "' + a + '". The type must be a non-empty string.');
    if (h.zc.hk[a]) throw Error('Error: Field "' + a + '" is already registered.');
    if (!c || "function" != typeof c.oa) throw Error('Field "' + c + '" must have a fromJson function');
    a = a.toLowerCase();
    h.zc.hk[a] = c
};
h.zc.unregister = function (a) {
    h.zc.hk[a] ? delete h.zc.hk[a] : console.warn('No field mapping for type "' + a + '" found to unregister')
};
h.zc.oa = function (a) {
    var c = h.zc.hk[a.type.toLowerCase()];
    return c ? c.oa(a) : (console.warn("Blockly could not create a field of type " + a.type + ". The field is probably not being registered. This could be because the file is not loaded, the field does not register itself (Issue #1584), or the registration is not being reached."), null)
};
h.Oc = function (a, c, d) {
    this.Rk = null;
    null == a && (a = "");
    h.Oc.v.constructor.call(this, a, null, d);
    d || (this.Rk = c || null);
    this.jb = new h.g.md(0, h.xa.hr)
};
h.g.object.S(h.Oc, h.xa);
h.Oc.oa = function (a) {
    var c = h.g.oc(a.text);
    return new h.Oc(c, void 0, a)
};
h.Oc.prototype.Gd = !1;
h.Oc.prototype.Ri = function (a) {
    h.Oc.v.Ri.call(this, a);
    this.Rk = a["class"]
};
h.Oc.prototype.nj = function () {
    nb(this);
    this.Jc.setAttribute("y", this.jb.height);
    this.Rk && h.g.o.Ab(this.Jc, this.Rk)
};
h.Oc.prototype.fl = function (a) {
    return null === a || void 0 === a ? null : String(a)
};
h.zc.register("field_label", h.Oc);
h.Dq = function (a, c, d, e) {
    if (a != h.qe && !c) throw Error("Value inputs and statement inputs must have non-empty name.");
    this.type = a;
    this.name = c;
    this.B = d;
    this.connection = e;
    this.Ea = []
};
b = h.Dq.prototype;
b.align = h.tm;
b.If = !0;

function Q(a, c, d) {
    rb(a, a.Ea.length, c, d);
    return a
}

function rb(a, c, d, e) {
    if (0 > c || c > a.Ea.length) throw Error("index " + c + " out of bounds.");
    if (!(d || "" == d && e)) return c;
    "string" == typeof d && (d = new h.Oc(d));
    if (d.B) throw Error("Field already bound to a block.");
    d.B = a.B;
    a.B.$ && d.Pa();
    d.name = e;
    d.lp && (c = rb(a, c, d.lp));
    a.Ea.splice(c, 0, d);
    ++c;
    d.Kp && (c = rb(a, c, d.Kp));
    a.B.$ && (a.B.wa(), a.B.hc());
    return c
}

b.isVisible = function () {
    return this.If
};
b.Yb = function (a) {
    var c = [];
    if (this.If == a) return c;
    for (var d = (this.If = a) ? "block" : "none", e = 0, f; f = this.Ea[e]; e++) f.Yb(a);
    if (this.connection) {
        if (a) c = sb(this.connection); else if (e = this.connection, R(e, !0), e.ka) for (e = p(A(e), !1), f = 0; f < e.length; f++) {
            for (var g = e[f], k = g.Xc(!0), l = 0; l < k.length; l++) R(k[l], !0);
            g = M(g);
            for (l = 0; l < g.length; l++) g[l].Yb(!1)
        }
        if (e = A(this.connection)) e.ga().style.display = d, a || (e.$ = !1)
    }
    return c
};
b.Ej = function () {
    for (var a = 0, c; c = this.Ea[a]; a++) c.Ej()
};
b.Yh = function (a) {
    if (!this.connection) throw Error("This input does not have a connection.");
    this.connection.Yh(a)
};

function tb(a, c) {
    a.align = c;
    a.B.$ && a.B.wa();
    return a
}

b.Pa = function () {
    if (this.B.C.$) for (var a = 0; a < this.Ea.length; a++) this.Ea[a].Pa()
};
b.G = function () {
    for (var a = 0, c; c = this.Ea[a]; a++) c.G();
    this.connection && this.connection.G();
    this.B = null
};
h.g.ob = {};
h.g.ob.parse = function (a) {
    a = String(a).toLowerCase().trim();
    var c = h.g.ob.names[a];
    if (c) return c;
    c = "#" == a[0] ? a : "#" + a;
    if (/^#[0-9a-f]{6}$/.test(c)) return c;
    if (/^#[0-9a-f]{3}$/.test(c)) return ["#", c[1], c[1], c[2], c[2], c[3], c[3]].join("");
    var d = a.match(/^(?:rgb)?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
    return d && (a = Number(d[1]), c = Number(d[2]), d = Number(d[3]), 0 <= a && 256 > a && 0 <= c && 256 > c && 0 <= d && 256 > d) ? h.g.ob.vp(a, c, d) : null
};
h.g.ob.vp = function (a, c, d) {
    c = a << 16 | c << 8 | d;
    return 16 > a ? "#" + (16777216 | c).toString(16).substr(1) : "#" + c.toString(16)
};
h.g.ob.bt = function (a) {
    a = parseInt(a.substr(1), 16);
    return [a >> 16, a >> 8 & 255, a & 255]
};
h.g.ob.Ey = function (a) {
    var c = h.vv, d = 255 * h.wv, e = 0, f = 0, g = 0;
    if (0 == c) g = f = e = d; else {
        var k = Math.floor(a / 60), l = a / 60 - k;
        a = d * (1 - c);
        var m = d * (1 - c * l);
        c = d * (1 - c * (1 - l));
        switch (k) {
            case 1:
                e = m;
                f = d;
                g = a;
                break;
            case 2:
                e = a;
                f = d;
                g = c;
                break;
            case 3:
                e = a;
                f = m;
                g = d;
                break;
            case 4:
                e = c;
                f = a;
                g = d;
                break;
            case 5:
                e = d;
                f = a;
                g = m;
                break;
            case 6:
            case 0:
                e = d, f = c, g = a
        }
    }
    return h.g.ob.vp(Math.floor(e), Math.floor(f), Math.floor(g))
};
h.g.ob.rn = function (a, c, d) {
    a = h.g.ob.bt(h.g.ob.parse(a));
    c = h.g.ob.bt(h.g.ob.parse(c));
    return h.g.ob.vp(Math.round(c[0] + d * (a[0] - c[0])), Math.round(c[1] + d * (a[1] - c[1])), Math.round(c[2] + d * (a[2] - c[2])))
};
h.g.ob.names = {
    aqua: "#00ffff",
    black: "#000000",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    gray: "#808080",
    green: "#008000",
    lime: "#00ff00",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    purple: "#800080",
    red: "#ff0000",
    silver: "#c0c0c0",
    teal: "#008080",
    white: "#ffffff",
    yellow: "#ffff00"
};
h.rk = function (a, c, d) {
    if (h.Generator && "undefined" != typeof h.Generator.prototype[c]) throw Error('Block prototypeName "' + c + '" conflicts with Blockly.Generator members.');
    this.id = d && !u(a, d) ? d : h.g.He();
    a.sn[this.id] = this;
    this.N = this.W = this.L = null;
    this.K = [];
    this.Le = void 0;
    this.disabled = !1;
    this.ge = "";
    this.contextMenu = !0;
    this.Zd = null;
    this.ze = [];
    this.rs = this.Dt = this.Jn = !0;
    this.Ae = this.Qa = !1;
    this.Qi = null;
    this.Be = {text: null, St: !1, size: new h.g.md(160, 80)};
    this.Gu = new h.g.M(0, 0);
    this.C = a;
    this.cd = a.Ne;
    this.H = a.H;
    this.vj = !1;
    this.Je = void 0;
    if (c) {
        this.type = c;
        d = h.zb[c];
        if (!d || "object" != typeof d) throw TypeError("Unknown block type: " + c);
        h.g.object.Rh(this, d)
    }
    a.ii.push(this);
    a.Ve[this.type] || (a.Ve[this.type] = []);
    a.Ve[this.type].push(this);
    "function" == typeof this.Pa && this.Pa();
    this.Ly = this.Le;
    if (h.i.isEnabled()) {
        (a = h.i.ub()) || h.i.ca(!0);
        try {
            h.i.Ma(new h.i.tk(this))
        } finally {
            a || h.i.ca(!1)
        }
    }
    if ("function" == typeof this.onchange) {
        if ((a = this.onchange) && "function" != typeof a) throw Error("onchange must be a function.");
        this.Kj &&
        h.g.Hi(this.C.Bj, this.Kj);
        if (this.onchange = a) this.Kj = a.bind(this), $a(this.C, this.Kj)
    }
};
b = h.rk.prototype;
b.data = null;
b.dg = "#000000";
b.Or = null;
b.Pr = null;
b.G = function (a) {
    if (this.C) {
        this.Kj && h.g.Hi(this.C.Bj, this.Kj);
        h.Oe && h.navigation.Et(this);
        B(this, a);
        h.i.isEnabled() && h.i.Ma(new h.i.Vu(this));
        h.i.disable();
        try {
            if (this.C) {
                Wa(this.C, this);
                var c = this.C;
                c.Ve[this.type].splice(c.Ve[this.type].indexOf(this), 1);
                c.Ve[this.type].length || delete c.Ve[this.type];
                delete this.C.sn[this.id];
                this.C = null
            }
            h.selected == this && (h.selected = null);
            for (var d = this.ze.length - 1; 0 <= d; d--) this.ze[d].G(!1);
            d = 0;
            for (var e; e = this.K[d]; d++) e.G();
            this.K.length = 0;
            var f = this.Xc(!0);
            d =
                0;
            for (var g; g = f[d]; d++) g.G()
        } finally {
            h.i.enable()
        }
    }
};

function B(a, c) {
    if (a.L) {
        var d = null;
        a.L.isConnected() && (d = a.L.ka, a.L.disconnect());
        if (d && c) {
            a:{
                c = null;
                for (var e = 0; e < a.K.length; e++) {
                    var f = a.K[e].connection;
                    if (f && f.type == h.Ha && f.ka) {
                        if (c) {
                            a = null;
                            break a
                        }
                        c = f
                    }
                }
                a = c
            }
            a && a.isConnected() && !A(a).Qa && (a = a.ka, a.disconnect(), H(a, d) ? d.connect(a) : a.Tl(d))
        }
    } else a.N && (d = null, a.N.isConnected() && (d = a.N.ka, a.N.disconnect()), e = t(a), c && e && !e.Qa && (a = a.W.ka, a.disconnect(), d && H(d, a) && d.connect(a)))
}

b.Xc = function () {
    var a = [];
    this.L && a.push(this.L);
    this.N && a.push(this.N);
    this.W && a.push(this.W);
    for (var c = 0, d; d = this.K[c]; c++) d.connection && a.push(d.connection);
    return a
};
b.hc = function () {
    console.warn("Not expected to reach Block.bumpNeighbours function. BlockSvg.bumpNeighbours was expected to be called instead.")
};
b.getParent = function () {
    return this.Zd
};

function ub(a) {
    do {
        var c = a;
        a = a.getParent();
        if (!a) return null
    } while (t(a) == c);
    return a
}

function t(a) {
    return a.W && A(a.W)
}

function N(a) {
    var c = a;
    do a = c, c = a.Zd; while (c);
    return a
}

function ma(a, c) {
    if (!c) return a.ze;
    c = [];
    for (var d = 0, e; e = a.K[d]; d++) e.connection && (e = A(e.connection)) && c.push(e);
    (a = t(a)) && c.push(a);
    return c
}

b.$h = function (a) {
    if (a != this.Zd) {
        if (this.Zd) {
            h.g.Hi(this.Zd.ze, this);
            if (this.N && this.N.isConnected()) throw Error("Still connected to previous block.");
            if (this.L && this.L.isConnected()) throw Error("Still connected to parent block.");
            this.Zd = null
        } else Wa(this.C, this);
        (this.Zd = a) ? a.ze.push(this) : this.C.ii.push(this)
    }
};

function p(a, c) {
    var d = [a];
    a = ma(a, c);
    for (var e, f = 0; e = a[f]; f++) d.push.apply(d, p(e, c));
    return d
}

b.Cc = function () {
    return this.Jn && !this.Qa && !(this.C && this.C.options.readOnly)
};
b.mc = function () {
    return this.Dt && !this.Qa && !(this.C && this.C.options.readOnly)
};
b.zp = function (a) {
    this.Dt = a
};
b.Cp = function (a) {
    this.Qa = a
};
b.rf = function () {
    return this.vj
};
b.ku = function (a) {
    this.vj = a
};
b.Dc = function () {
    return this.rs && !(this.C && this.C.options.readOnly)
};
b.yp = function (a) {
    this.rs = a;
    a = 0;
    for (var c; c = this.K[a]; a++) for (var d = 0, e; e = c.Ea[d]; d++) e.jk()
};
b.Gf = function (a) {
    this.ge = a
};

function vb(a) {
    var c = a.Or;
    return c ? c : h.g.ob.rn("#fff", a.dg, .6)
}

b.zd = function (a) {
    var c = "string" == typeof a ? h.g.oc(a) : a, d = Number(c);
    if (!isNaN(d) && 0 <= d && 360 >= d) this.dg = h.Fy(d); else if (d = h.g.ob.parse(c)) this.dg = d; else throw d = 'Invalid colour: "' + c + '"', a != c && (d += ' (from "' + a + '")'), Error(d);
};

function z(a, c) {
    for (var d = 0, e; e = a.K[d]; d++) for (var f = 0, g; g = e.Ea[f]; f++) if (g.name == c) return g;
    return null
}

function na(a) {
    for (var c = 0, d; d = a.K[c]; c++) for (var e = 0; d.Ea[e]; e++) ;
    return []
}

function Fa(a, c) {
    return (a = z(a, c)) ? a.getValue() : null
}

function wb(a, c) {
    a = z(a, "NAME");
    if (!a) throw Error('Field "NAME" not found.');
    a.setValue(c)
}

b.hm = function (a, c) {
    if (a) {
        void 0 === c && (c = null);
        if (!this.N) {
            if (this.L) throw Error("Remove output connection prior to adding previous connection.");
            this.N = this.Dj(h.ld)
        }
        this.N.Yh(c)
    } else if (this.N) {
        if (this.N.isConnected()) throw Error("Must disconnect previous statement before removing connection.");
        this.N.G();
        this.N = null
    }
};
b.fm = function (a, c) {
    if (a) void 0 === c && (c = null), this.W || (this.W = this.Dj(h.Ca)), this.W.Yh(c); else if (this.W) {
        if (this.W.isConnected()) throw Error("Must disconnect next statement before removing connection.");
        this.W.G();
        this.W = null
    }
};
b.gm = function (a, c) {
    if (a) {
        void 0 === c && (c = null);
        if (!this.L) {
            if (this.N) throw Error("Remove previous connection prior to adding output connection.");
            this.L = this.Dj(h.jd)
        }
        this.L.Yh(c)
    } else if (this.L) {
        if (this.L.isConnected()) throw Error("Must disconnect output value before removing connection.");
        this.L.G();
        this.L = null
    }
};
b.Mg = function (a) {
    this.Le != a && (h.i.Ma(new h.i.$g(this, "inline", null, this.Le, a)), this.Le = a)
};

function Ga(a) {
    if (void 0 != a.Le) return a.Le;
    for (var c = 1; c < a.K.length; c++) if (a.K[c - 1].type == h.qe && a.K[c].type == h.qe) return !1;
    for (c = 1; c < a.K.length; c++) if (a.K[c - 1].type == h.Ha && a.K[c].type == h.qe) return !0;
    return !1
}

b.isEnabled = function () {
    return !this.disabled
};
b.Re = function (a) {
    this.isEnabled() != a && (h.i.Ma(new h.i.$g(this, "disabled", null, this.disabled, !a)), this.disabled = !a)
};

function xb(a) {
    for (a = ub(a); a;) {
        if (a.disabled) return !0;
        a = ub(a)
    }
    return !1
}

b.isCollapsed = function () {
    return this.Ae
};
b.Ff = function (a) {
    this.Ae != a && (h.i.Ma(new h.i.$g(this, "collapsed", null, this.Ae, a)), this.Ae = a)
};
b.toString = function (a, c) {
    var d = [], e = c || "?";
    if (this.Ae) d.push(ia(this, "_TEMP_COLLAPSED_INPUT").Ea[0].jf()); else for (var f = 0, g; g = this.K[f]; f++) {
        for (var k = 0, l; l = g.Ea[k]; k++) d.push(l.jf());
        g.connection && ((g = A(g.connection)) ? d.push(g.toString(void 0, c)) : d.push(e))
    }
    d = d.join(" ").trim() || "???";
    a && d.length > a && (d = d.substring(0, a - 3) + "...");
    return d
};

function yb(a, c) {
    return a.Xf(h.qe, c || "")
}

b.Rh = function (a, c) {
    if (void 0 !== c && "boolean" != typeof c) throw Error("opt_disableCheck must be a boolean if provided");
    if (!c) {
        c = [];
        for (var d in a) void 0 !== this[d] && c.push(d);
        if (c.length) throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
    }
    h.g.object.Rh(this, a)
};
b.Xf = function (a, c) {
    var d = null;
    if (a == h.Ha || a == h.Ca) d = this.Dj(a);
    a = new h.Dq(a, c, this, d);
    this.K.push(a);
    return a
};
b.pp = function (a, c) {
    for (var d = 0, e; e = this.K[d]; d++) if (e.name == a) {
        e.G();
        this.K.splice(d, 1);
        return
    }
    if (!c) throw Error("Input not found: " + a);
};

function ia(a, c) {
    for (var d = 0, e; e = a.K[d]; d++) if (e.name == c) return e;
    return null
}

b.Zh = function (a) {
    this.Be.text != a && (h.i.Ma(new h.i.$g(this, "comment", null, this.Be.text, a)), this.Qi = this.Be.text = a)
};
b.Uj = function () {
};
b.lu = function () {
};
b.Fa = function () {
    return this.Gu
};
b.moveBy = function (a, c) {
    if (this.Zd) throw Error("Block has parent.");
    var d = new h.i.li(this);
    this.Gu.translate(a, c);
    d.Jg();
    h.i.Ma(d)
};
b.Dj = function (a) {
    return new h.aa(this, a)
};
h.j = {};
h.j.XB = function () {
};
h.j.Tf = function (a) {
    this.Rg = a;
    this.di = h.g.o.J("path", {"class": "blocklyPath"}, this.Rg);
    this.dk = h.g.o.J("path", {"class": "blocklyPathLight"}, this.Rg);
    this.bk = h.g.o.J("path", {"class": "blocklyPathDark", transform: "translate(1,1)"}, this.Rg)
};
h.j.Tf.prototype.Bp = function (a) {
    this.di.setAttribute("d", a);
    this.dk.style.display = "none";
    this.bk.style.display = "none"
};
h.j.Tf.prototype.eo = function () {
    this.di.setAttribute("transform", "scale(-1 1)")
};
h.g.Ka = {};
h.g.Ka.Pu = "aria-";
h.g.Ka.Xm = "role";
h.g.Ka.Zm = {
    pA: "alert",
    qA: "alertdialog",
    sA: "application",
    tA: "article",
    zA: "banner",
    DA: "button",
    FA: "checkbox",
    KA: "columnheader",
    LA: "combobox",
    NA: "complementary",
    OA: "contentinfo",
    UA: "definition",
    YA: "dialog",
    ZA: "directory",
    aB: "document",
    FB: "form",
    KB: "grid",
    LB: "gridcell",
    MB: "group",
    QB: "heading",
    UB: "img",
    fC: "link",
    gC: "list",
    hC: "listbox",
    iC: "listitem",
    kC: "log",
    qC: "main",
    rC: "marquee",
    sC: "math",
    Lv: "menu",
    uC: "menubar",
    Mv: "menuitem",
    Nv: "menuitemcheckbox",
    vC: "menuitemradio",
    AC: "navigation",
    DC: "note",
    YC: "option",
    iD: "presentation",
    lD: "progressbar",
    oD: "radio",
    pD: "radiogroup",
    rD: "region",
    Ym: "row",
    yD: "rowgroup",
    zD: "rowheader",
    BD: "scrollbar",
    DD: "search",
    FD: "separator",
    LD: "slider",
    OD: "spinbutton",
    QD: "status",
    kw: "tab",
    RD: "table",
    SD: "tablist",
    TD: "tabpanel",
    UD: "textbox",
    VD: "textinfo",
    YD: "timer",
    ZD: "toolbar",
    $D: "tooltip",
    aE: "tree",
    bE: "treegrid",
    cE: "treeitem"
};
h.g.Ka.State = {
    Mu: "activedescendant",
    uA: "atomic",
    wA: "autocomplete",
    CA: "busy",
    GA: "checked",
    JA: "colindex",
    QA: "controls",
    WA: "describedby",
    $A: "disabled",
    fB: "dropeffect",
    kB: "expanded",
    EB: "flowto",
    JB: "grabbed",
    OB: "haspopup",
    RB: "hidden",
    WB: "invalid",
    $B: "label",
    aC: "labelledby",
    eC: "level",
    jC: "live",
    xC: "multiline",
    yC: "multiselectable",
    ZC: "orientation",
    $C: "owns",
    hD: "posinset",
    jD: "pressed",
    qD: "readonly",
    sD: "relevant",
    vD: "required",
    AD: "rowindex",
    $m: "selected",
    GD: "setsize",
    MD: "sort",
    fE: "valuemax",
    gE: "valuemin",
    hE: "valuenow",
    iE: "valuetext"
};
h.g.Ka.ai = function (a, c) {
    c ? a.setAttribute(h.g.Ka.Xm, c) : h.g.Ka.Cz(a)
};
h.g.Ka.TE = function (a) {
    return a.getAttribute(h.g.Ka.Xm) || null
};
h.g.Ka.Cz = function (a) {
    a.removeAttribute(h.g.Ka.Xm)
};
h.g.Ka.bi = function (a, c, d) {
    Array.isArray(d) && (d = d.join(" "));
    a.setAttribute(h.g.Ka.Ux(c), d)
};
h.g.Ka.Ux = function (a) {
    return h.g.Ka.Pu + a
};
h.Pf = function () {
    h.$b.call(this);
    this.Ke = -1
};
h.g.object.S(h.Pf, h.$b);
b = h.Pf.prototype;
b.Va = function () {
    var a = document.createElement("div");
    a.id = this.ib();
    this.X = a;
    a.className = "goog-menu goog-menu-vertical blocklyNonSelectable";
    a.tabIndex = 0;
    h.g.Ka.ai(a, this.wp || h.g.Ka.Zm.Lv)
};
b.focus = function () {
    var a = this.X;
    a && (a.focus(), h.g.o.Ab(a, "focused"))
};
b.blur = function () {
    var a = this.X;
    a && (a.blur(), h.g.o.Gc(a, "focused"))
};
b.ai = function (a) {
    this.wp = a
};
b.ll = function () {
    h.Pf.v.ll.call(this);
    ca(this, function (a) {
        if (a.bd) {
            var c = a.X;
            c = c.id || (c.id = a.ib());
            this.wh || (this.wh = {});
            this.wh[c] = a
        }
    }, this);
    zb(this)
};
b.ml = function () {
    Ab(this, -1);
    h.Pf.v.ml.call(this)
};
b.Tn = function () {
    h.Pf.v.Tn.call(this);
    h.lb(this.bz);
    h.lb(this.Oi);
    h.lb(this.$y);
    h.lb(this.az);
    h.lb(this.kz)
};

function zb(a) {
    var c = a.X;
    a.bz = h.Ba(c, "mouseover", a, a.yy, !0);
    a.Oi = h.Ba(c, "click", a, a.ty, !0);
    a.$y = h.Ba(c, "mouseenter", a, a.wy, !0);
    a.az = h.Ba(c, "mouseleave", a, a.xy, !0);
    a.kz = h.Ba(c, "keydown", a, a.xo)
}

b.wh = null;

function Bb(a, c) {
    if (a.wh) for (var d = a.X; c && c !== d;) {
        var e = c.id;
        if (e in a.wh) return a.wh[e];
        c = c.parentNode
    }
    return null
}

function Cb(a) {
    (a = a.Cb[a.Ke] || null) && a.Se(!1)
}

function Ab(a, c) {
    var d = a.Cb[c] || null;
    d ? (d.Se(!0), a.Ke = c) : -1 < a.Ke && ((a.Cb[a.Ke] || null).Se(!1), a.Ke = -1);
    d && h.g.style.fu(d.X, a.X)
}

b.Se = function (a) {
    Ab(this, this.Cb.indexOf(a))
};

function Db(a) {
    Cb(a);
    Eb(a, function (c, d) {
        return (c + 1) % d
    }, a.Ke)
}

function Fb(a) {
    Cb(a);
    Eb(a, function (c, d) {
        c--;
        return 0 > c ? d - 1 : c
    }, a.Ke)
}

function Eb(a, c, d) {
    var e = a.Cb.length;
    d = c.call(a, 0 > d ? -1 : d, e);
    for (var f = 0; f <= e;) {
        var g = a.Cb[d] || null;
        if (g && g.isEnabled()) {
            Ab(a, d);
            break
        }
        f++;
        d = c.call(a, d, e)
    }
}

b.yy = function (a) {
    (a = Bb(this, a.target)) && a.isEnabled() && (this.Cb[this.Ke] || null) !== a && (Cb(this), this.Se(a))
};
b.ty = function (a) {
    var c = Bb(this, a.target), d;
    if (d = c) c.isEnabled() && (c.Se(!0), Gb(c)), d = void 0;
    d && a.preventDefault()
};
b.wy = function () {
    this.focus()
};
b.xy = function () {
    this.X && (this.blur(), Cb(this), Ab(this, -1))
};
b.xo = function (a) {
    return 0 != this.Cb.length && Hb(this, a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};

function Hb(a, c) {
    var d = a.Cb[a.Ke] || null;
    if (d && "function" == typeof d.xo && d.xo(c)) return !0;
    if (c.shiftKey || c.ctrlKey || c.metaKey || c.altKey) return !1;
    switch (c.keyCode) {
        case h.g.gb.qq:
            d && Gb(d);
            break;
        case h.g.gb.pw:
            Fb(a);
            break;
        case h.g.gb.gv:
            Db(a);
            break;
        default:
            return !1
    }
    return !0
};h.Gk = function (a, c) {
    h.$b.call(this);
    this.ff = a;
    this.setValue(c);
    this.kl = !0
};
h.g.object.S(h.Gk, h.$b);
b = h.Gk.prototype;
b.Va = function () {
    var a = document.createElement("div");
    a.id = this.ib();
    this.X = a;
    a.className = "goog-menuitem goog-option " + (this.kl ? "" : "goog-menuitem-disabled ") + (this.zn ? "goog-option-selected " : "") + (this.ot() ? "goog-menuitem-rtl " : "");
    var c = document.createElement("div");
    c.className = "goog-menuitem-content";
    a.appendChild(c);
    if (this.Mi) {
        var d = document.createElement("div");
        d.className = "goog-menuitem-checkbox"
    } else d = null;
    d && c.appendChild(d);
    c.appendChild(Ib(this));
    h.g.Ka.ai(a, this.wp || (this.Mi ? h.g.Ka.Zm.Nv :
        h.g.Ka.Zm.Mv));
    h.g.Ka.bi(a, h.g.Ka.State.$m, this.Mi && this.zn || !1)
};

function Ib(a) {
    a = a.ff;
    "string" === typeof a && (a = document.createTextNode(a));
    return a
}

b.setValue = function (a) {
    this.je = a
};
b.getValue = function () {
    return this.je
};
b.ai = function (a) {
    this.wp = a
};

function Jb(a, c) {
    if (a.Mi) {
        a.zn = c;
        var d = a.X;
        d && a.isEnabled() && (c ? (h.g.o.Ab(d, "goog-option-selected"), h.g.Ka.bi(d, h.g.Ka.State.$m, !0)) : (h.g.o.Gc(d, "goog-option-selected"), h.g.Ka.bi(d, h.g.Ka.State.$m, !1)))
    }
}

b.Se = function (a) {
    var c = this.X;
    c && this.isEnabled() && (a ? h.g.o.Ab(c, "goog-menuitem-highlight") : h.g.o.Gc(c, "goog-menuitem-highlight"))
};
b.isEnabled = function () {
    return this.kl
};
b.Re = function (a) {
    this.kl = a;
    (a = this.X) && (this.kl ? h.g.o.Gc(a, "goog-menuitem-disabled") : h.g.o.Ab(a, "goog-menuitem-disabled"))
};

function Gb(a) {
    a.Mi && Jb(a, !a.zn);
    a.Ar && a.Ar.call(a.Cw, a)
}

function Kb(a, c, d) {
    a.Ar = c;
    a.Cw = d
};h.g.nm = {};
h.g.nm.Ie = function (a) {
    a = a.X;
    var c = h.g.style.Ie(a);
    c.height = a.scrollHeight;
    return c
};
h.g.nm.Ew = function (a, c, d) {
    c.left += d.width;
    c.right += d.width;
    a.left += d.width;
    a.right += d.width
};
h.sa = {};
h.sa.Zk = null;
h.sa.us = null;
h.sa.show = function (a, c, d) {
    h.V.show(h.sa, d, null);
    if (c.length) {
        var e = h.sa.zz(c, d);
        h.sa.Af(e, a, d);
        setTimeout(function () {
            e.X.focus()
        }, 1);
        h.sa.Zk = null
    } else h.sa.Ia()
};
h.sa.zz = function (a, c) {
    var d = new h.Pf;
    ea(d, c);
    for (var e = 0, f; f = a[e]; e++) {
        var g = new h.Gk(f.text);
        ea(g, c);
        da(d, g);
        g.Re(f.enabled);
        f.enabled && Kb(g, function () {
            h.sa.Ia();
            this.Bb()
        }, f)
    }
    return d
};
h.sa.Af = function (a, c, d) {
    var e = h.g.sy();
    c = {top: c.clientY + e.top, bottom: c.clientY + e.top, left: c.clientX + e.left, right: c.clientX + e.left};
    h.sa.sx(a);
    var f = h.g.nm.Ie(a);
    d && h.g.nm.Ew(e, c, f);
    h.V.Az(e, c, f, d);
    a.X.focus()
};
h.sa.sx = function (a) {
    a.wa(h.V.ua);
    var c = a.X;
    h.g.o.Ab(c, "blocklyContextMenu");
    h.Ba(c, "contextmenu", null, h.g.hz);
    a.focus()
};
h.sa.Ia = function () {
    h.V.jj(h.sa);
    h.sa.Zk = null;
    h.sa.us && h.lb(h.sa.us)
};
h.sa.AE = function (a, c) {
    return function () {
        h.i.disable();
        try {
            var d = h.I.il(c, a.C), e = a.Fa();
            e.x = a.H ? e.x - h.Sb : e.x + h.Sb;
            e.y += 2 * h.Sb;
            d.moveBy(e.x, e.y)
        } finally {
            h.i.enable()
        }
        h.i.isEnabled() && !d.Qa && h.i.Ma(new h.i.tk(d));
        d.select()
    }
};
h.sa.Mw = function (a) {
    var c = p(a, !1).length, d = t(a);
    d && (c -= p(d, !1).length);
    return {
        text: 1 == c ? h.h.DELETE_BLOCK : h.h.DELETE_X_BLOCKS.replace("%1", String(c)),
        enabled: !0,
        Bb: function () {
            h.i.ca(!0);
            a.G(!0, !0);
            h.i.ca(!1)
        }
    }
};
h.sa.Ow = function (a) {
    return {
        enabled: !("function" == typeof a.rg ? !a.rg() : !a.rg), text: h.h.HELP, Bb: function () {
            var c = "function" == typeof a.rg ? a.rg() : a.rg;
            c && window.open(c)
        }
    }
};
h.sa.Nw = function (a) {
    var c = Ya(a.C) ? Xa(a.C, h.g.Cs(a)) : !0;
    return {
        text: h.h.DUPLICATE_BLOCK, enabled: c, Bb: function () {
            h.qs(a)
        }
    }
};
h.sa.Lw = function (a) {
    var c = {enabled: !h.g.userAgent.Xe};
    a.Qi ? (c.text = h.h.REMOVE_COMMENT, c.Bb = function () {
        a.Zh(null)
    }) : (c.text = h.h.ADD_COMMENT, c.Bb = function () {
        a.Zh("")
    });
    return c
};
h.sa.EE = function (a) {
    return {
        text: h.h.tD, enabled: !0, Bb: function () {
            h.i.ca(!0);
            a.G(!0, !0);
            h.i.ca(!1)
        }
    }
};
h.sa.FE = function (a) {
    return {
        text: h.h.gB, enabled: !0, Bb: function () {
            h.qs(a)
        }
    }
};
h.sa.LF = function (a, c) {
    if (!h.rh) throw Error("Missing require for Blockly.WorkspaceCommentSvg");
    var d = {enabled: !h.g.userAgent.Xe};
    d.text = h.h.oA;
    d.Bb = function () {
        var e = new h.rh(a, h.h.pE, h.rh.fv, h.rh.fv), f = aa(a).getBoundingClientRect();
        f = new h.g.M(c.clientX - f.left, c.clientY - f.top);
        var g = h.g.lo(a.kb);
        f = h.g.M.bl(f, g);
        f.scale(1 / a.scale);
        e.moveBy(f.x, f.y);
        a.$ && (e.ug(), e.wa(), e.select())
    };
    return d
};
h.te = function (a, c) {
    h.te.v.constructor.call(this, a, c);
    this.jg = a.C.Yk[c];
    this.$r = a.C.Yk[h.mh[c]];
    this.Eg = new h.g.M(0, 0);
    this.mf = !1;
    this.dt = !this.jg
};
h.g.object.S(h.te, h.aa);
b = h.te.prototype;
b.G = function () {
    h.te.v.G.call(this);
    this.mf && Lb(this.jg, this)
};

function Mb(a, c) {
    var d = a.fb - c.fb;
    a = a.Aa - c.Aa;
    return Math.sqrt(d * d + a * a)
}

function Nb(a, c) {
    if (!a.B.C.lc()) {
        var d = N(a.B);
        if (!d.cd) {
            var e = !1;
            if (!d.mc()) {
                d = N(c.B);
                if (!d.mc()) return;
                c = a;
                e = !0
            }
            var f = h.selected == d;
            f || Ob(d);
            var g = c.fb + h.Sb + Math.floor(Math.random() * h.ym) - a.fb,
                k = c.Aa + h.Sb + Math.floor(Math.random() * h.ym) - a.Aa;
            e && (k = -k);
            d.H && (g = c.fb - h.Sb - Math.floor(Math.random() * h.ym) - a.fb);
            d.moveBy(g, k);
            f || Pb(d)
        }
    }
}

b.moveTo = function (a, c) {
    this.mf && Lb(this.jg, this);
    this.fb = a;
    this.Aa = c;
    this.dt || Qb(this.jg, this)
};
b.moveBy = function (a, c) {
    this.moveTo(this.fb + a, this.Aa + c)
};

function Rb(a, c) {
    a.moveTo(c.x + a.Eg.x, c.y + a.Eg.y)
}

function S(a, c, d) {
    a.Eg.x = c;
    a.Eg.y = d
}

function Sb(a) {
    var c = a.ka.fb - a.fb, d = a.ka.Aa - a.Aa;
    if (0 != c || 0 != d) {
        a = A(a);
        var e = a.ga();
        if (!e) throw Error("block is not rendered.");
        e = h.g.Zc(e);
        a.ga().setAttribute("transform", "translate(" + (e.x - c) + "," + (e.y - d) + ")");
        Ra(a, -c, -d)
    }
}

b.closest = function (a, c) {
    var d = this.$r;
    if (d.pb.length) {
        var e = this.Aa, f = this.fb;
        this.fb = f + c.x;
        this.Aa = e + c.y;
        var g = Tb(d, this);
        c = null;
        for (var k = a, l, m = g - 1; 0 <= m && Math.abs(d.pb[m].Aa - this.Aa) <= a;) l = d.pb[m], this.Hl(l, k) && (c = l, k = Mb(l, this)), m--;
        for (; g < d.pb.length && Math.abs(d.pb[g].Aa - this.Aa) <= a;) l = d.pb[g], this.Hl(l, k) && (c = l, k = Mb(l, this)), g++;
        this.fb = f;
        this.Aa = e;
        a = {connection: c, bm: k}
    } else a = {connection: null, bm: a};
    return a
};
b.et = function () {
    var a = this.B.C.Df.u;
    a = this.type == h.Ha || this.type == h.jd ? h.g.s.moveBy(0, -5) + h.g.s.O("v", 5) + a.Sf.ed + h.g.s.O("v", 5) : h.g.s.moveBy(-5, 0) + h.g.s.O("h", 5) + a.kh.zf + h.g.s.O("h", 5);
    var c = this.B.Fa();
    h.aa.ft = h.g.o.J("path", {
        "class": "blocklyHighlightedConnectionPath",
        d: a,
        transform: "translate(" + (this.fb - c.x) + "," + (this.Aa - c.y) + ")" + (this.B.H ? " scale(-1 1)" : "")
    }, this.B.ga())
};

function sb(a) {
    R(a, !1);
    var c = [];
    if (a.type != h.Ha && a.type != h.Ca) return c;
    if (a = A(a)) {
        if (a.isCollapsed()) {
            var d = [];
            a.L && d.push(a.L);
            a.W && d.push(a.W);
            a.N && d.push(a.N)
        } else d = a.Xc(!0);
        for (var e = 0; e < d.length; e++) c.push.apply(c, sb(d[e]));
        c.length || (c[0] = a)
    }
    return c
}

function R(a, c) {
    (a.dt = c) && a.mf ? Lb(a.jg, a) : c || a.mf || Qb(a.jg, a)
}

b.Hl = function (a, c) {
    return Mb(this, a) > c ? !1 : h.te.v.Hl.call(this, a)
};
b.Tl = function (a) {
    Nb(this, a)
};
b.Qn = function (a, c) {
    h.te.v.Qn.call(this, a, c);
    a.$ && a.wa();
    c.$ && (E(c), c.wa())
};
b.up = function () {
    var a = this.B, c = this.ae;
    if (a.C && c && h.i.Mb) {
        h.te.v.up.call(this);
        c = A(this);
        if (!c) throw Error("Couldn't respawn the shadow block that should exist here.");
        c.ug();
        c.wa(!1);
        a.$ && a.wa()
    }
};
b.Ft = function (a) {
    return Ub(this.$r, this, a)
};
b.rd = function (a) {
    h.te.v.rd.call(this, a);
    var c = this.B;
    a = a.B;
    c.$ && E(c);
    a.$ && E(a);
    c.$ && a.$ && (this.type == h.Ca || this.type == h.ld ? a.wa() : c.wa())
};
b.Jt = function () {
    this.isConnected() && !H(this, this.ka) && (B(I(this) ? A(this) : this.B), this.B.hc())
};
h.g.Rect = function (a, c, d, e) {
    this.top = a;
    this.bottom = c;
    this.left = d;
    this.right = e
};
h.g.Rect.prototype.contains = function (a, c) {
    return a >= this.left && a <= this.right && c >= this.top && c <= this.bottom
};
h.se = function (a) {
    this.ba = a
};
b = h.se.prototype;
b.Nr = !0;
b.Jk = 17;
b.ag = null;
b.Bl = null;

function Vb(a) {
    if (!a.Xd) {
        a.Xd = h.g.o.J("g", {"class": "blocklyIconGroup"}, null);
        a.ba.cd && h.g.o.Ab(a.Xd, "blocklyIconGroupReadonly");
        var c = a.Xd;
        h.g.o.J("path", {
            "class": "blocklyIconShape",
            d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z"
        }, c);
        h.g.o.J("path", {"class": "blocklyIconSymbol", d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z"}, c);
        h.g.o.J("rect", {"class": "blocklyIconSymbol", x: "7", y: "11", height: "2", width: "2"}, c);
        a.ba.ga().appendChild(a.Xd);
        h.Ba(a.Xd, "mouseup", a, a.Gy);
        a.jk()
    }
}

b.G = function () {
    h.g.o.removeNode(this.Xd);
    this.Xd = null;
    this.Yb(!1);
    this.ba = null
};
b.jk = function () {
};
b.isVisible = function () {
    return !!this.ag
};
b.Gy = function (a) {
    this.ba.C.lc() || this.ba.cd || h.g.Oh(a) || this.Yb(!this.isVisible())
};
b.ie = function () {
    this.isVisible() && this.ag.zd(this.ba.dg)
};

function Na(a, c) {
    a.Bl = c;
    a.isVisible() && (a = a.ag, a.mb = c, a.qp && ab(a))
}

function Wb(a) {
    var c = a.ba.Fa(), d = h.g.Zc(a.Xd);
    c = new h.g.M(c.x + d.x + a.Jk / 2, c.y + d.y + a.Jk / 2);
    h.g.M.Ud(a.Bl, c) || Na(a, c)
};h.Nd = function (a) {
    h.Nd.v.constructor.call(this, a);
    Vb(this);
    this.gi = {}
};
h.g.object.S(h.Nd, h.se);
h.Nd.prototype.Nr = !1;
h.Nd.aA = function (a) {
    var c = h.g.o.J("text", {"class": "blocklyText blocklyBubbleText", y: h.la.Cd}, null);
    a = a.split("\n");
    for (var d = 0; d < a.length; d++) {
        var e = h.g.o.J("tspan", {dy: "1em", x: h.la.Cd}, c), f = document.createTextNode(a[d]);
        e.appendChild(f)
    }
    return c
};
h.Nd.prototype.Yb = function (a) {
    if (a != this.isVisible()) if (h.i.Ma(new h.i.Qc(this.ba, "warningOpen", !a, a)), a) {
        this.Xl = h.Nd.aA(this.jf());
        a = this.ag = new h.la(this.ba.C, this.Xl, this.ba.gd, this.Bl, null, null);
        a.xc.dataset && (a.xc.dataset.blockId = this.ba.id);
        if (this.ba.H) {
            a = this.Xl.getBBox().width;
            for (var c = 0, d; d = this.Xl.childNodes[c]; c++) d.setAttribute("text-anchor", "end"), d.setAttribute("x", a + h.la.Cd)
        }
        this.ie()
    } else this.ag.G(), this.Xl = this.ag = null
};
h.Nd.prototype.im = function (a, c) {
    this.gi[c] != a && (a ? this.gi[c] = a : delete this.gi[c], this.isVisible() && (this.Yb(!1), this.Yb(!0)))
};
h.Nd.prototype.jf = function () {
    var a = [], c;
    for (c in this.gi) a.push(this.gi[c]);
    return a.join("\n")
};
h.Nd.prototype.G = function () {
    this.ba.Pb = null;
    h.se.prototype.G.call(this)
};
h.ea = function (a, c, d) {
    this.P = h.g.o.J("g", {}, null);
    this.P.gk = "";
    this.Hg = a.Df.wt(this.P);
    this.ck = this.Hg.bk || null;
    this.gd = this.Hg.di || null;
    this.Qg = this.Hg.dk || null;
    this.gd.ge = this;
    this.$ = !1;
    this.mk = h.g.vg() && !!a.wc;
    h.D.Ji(this.gd);
    h.ea.v.constructor.call(this, a, c, d);
    this.P.dataset && (this.P.dataset.id = this.id);
    this.Lb = null
};
h.g.object.S(h.ea, h.rk);
h.ea.prototype.height = 0;
h.ea.prototype.width = 0;
h.ea.prototype.tc = null;
h.ea.VB = -1;
h.ea.zm = "TEMP_COLLAPSED_WARNING_";
h.ea.aw = 10;
h.ea.Jq = 25;
h.ea.Vf = 8;
h.ea.ue = !1;
b = h.ea.prototype;
b.ug = function () {
    if (!this.C.$) throw TypeError("Workspace is headless.");
    for (var a = 0, c; c = this.K[a]; a++) c.Pa();
    c = M(this);
    for (a = 0; a < c.length; a++) Vb(c[a]);
    this.ie();
    Xb(this);
    this.C.options.readOnly || this.Jx || h.Ba(this.ga(), "mousedown", this, this.Jj);
    this.Jx = !0;
    this.ga().parentNode || this.C.kb.appendChild(this.ga())
};
b.select = function () {
    if (this.Qa && this.getParent()) this.getParent().select(); else if (h.selected != this) {
        var a = null;
        if (h.selected) {
            a = h.selected.id;
            h.i.disable();
            try {
                hb(h.selected)
            } finally {
                h.i.enable()
            }
        }
        a = new h.i.Qc(null, "selected", a, this.id);
        a.Ib = this.C.id;
        h.i.Ma(a);
        h.selected = this;
        Ob(this)
    }
};

function hb(a) {
    if (h.selected == a) {
        var c = new h.i.Qc(null, "selected", a.id, null);
        c.Ib = a.C.id;
        h.i.Ma(c);
        h.selected = null;
        Pb(a)
    }
}

b.vf = null;
b.Qi = null;
b.Pd = null;
b.Pb = null;

function M(a) {
    var c = [];
    a.vf && c.push(a.vf);
    a.Pd && c.push(a.Pd);
    a.Pb && c.push(a.Pb);
    return c
}

b.$h = function (a) {
    var c = this.Zd;
    if (a != c) {
        h.g.o.Zj();
        h.ea.v.$h.call(this, a);
        h.g.o.$j();
        var d = this.ga();
        if (!this.C.Ho && d) {
            var e = this.Fa();
            a ? (a.ga().appendChild(d), a = this.Fa(), Ra(this, a.x - e.x, a.y - e.y)) : c && (this.C.kb.appendChild(d), this.translate(e.x, e.y))
        }
    }
};
b.Fa = function () {
    var a = 0, c = 0, d = this.mk ? this.C.wc.ub() : null, e = this.ga();
    if (e) {
        do {
            var f = h.g.Zc(e);
            a += f.x;
            c += f.y;
            this.mk && this.C.wc.td.firstChild == e && (f = this.C.wc.qo(), a += f.x, c += f.y);
            e = e.parentNode
        } while (e && e != this.C.kb && e != d)
    }
    return new h.g.M(a, c)
};
b.moveBy = function (a, c) {
    if (this.Zd) throw Error("Block has parent.");
    var d = h.i.isEnabled();
    if (d) var e = new h.i.li(this);
    var f = this.Fa();
    this.translate(f.x + a, f.y + c);
    Ra(this, a, c);
    d && (e.Jg(), h.i.Ma(e));
    F(this.C)
};
b.translate = function (a, c) {
    this.ga().setAttribute("transform", "translate(" + a + "," + c + ")")
};
b.$o = function () {
    if (this.mk) {
        var a = this.Fa();
        this.ga().removeAttribute("transform");
        this.C.wc.Tg(a.x, a.y);
        ba(this.C.wc, this.ga())
    }
};
b.moveTo = function (a) {
    var c = this.Fa();
    this.moveBy(a.x - c.x, a.y - c.y)
};
b.Zo = function (a) {
    this.mk ? this.C.wc.Tg(a.x, a.y) : (this.P.gk = "translate(" + a.x + "," + a.y + ")", this.P.setAttribute("transform", this.P.gk + this.P.Yj))
};

function Yb(a) {
    if (a.C && !a.C.lc() && !a.getParent() && !a.cd) {
        var c = a.C.$c;
        if (c && c.Uz) {
            var d = c.Fp, e = d / 2, f = a.Fa();
            c = Math.round((f.x - e) / d) * d + e - f.x;
            d = Math.round((f.y - e) / d) * d + e - f.y;
            c = Math.round(c);
            d = Math.round(d);
            0 == c && 0 == d || a.moveBy(c, d)
        }
    }
}

function Zb(a) {
    var c = a.Fa(), d = a.L ? h.ea.Vf : 0, e = J(a), f = c.y, g = c.y + e.height;
    a.H ? (a = c.x - (e.width - d), c = c.x + d) : (a = c.x - d, c = c.x + e.width - d);
    return new h.g.Rect(f, g, a, c)
}

b.Ej = function () {
    for (var a = 0, c; c = this.K[a]; a++) c.Ej()
};
b.Ff = function (a) {
    if (this.Ae != a) {
        for (var c = [], d = 0, e; e = this.K[d]; d++) c.push.apply(c, e.Yb(!a));
        if (a) {
            e = M(this);
            for (d = 0; d < e.length; d++) e[d].Yb(!1);
            d = this.toString(h.Yu);
            Q(yb(this, "_TEMP_COLLAPSED_INPUT"), d).Pa();
            e = p(this, !0);
            if (d = t(this)) d = e.indexOf(d), e.splice(d, e.length - d);
            d = 1;
            for (var f; f = e[d]; d++) if (f.Pb) {
                this.Uj(h.h.COLLAPSED_WARNINGS_WARNING, h.ea.zm);
                break
            }
        } else this.pp("_TEMP_COLLAPSED_INPUT"), this.Pb && (this.Pb.im("", h.ea.zm), Object.keys(this.Pb.gi).length || this.Uj(null));
        h.ea.v.Ff.call(this, a);
        c.length || (c[0] = this);
        if (this.$) for (d = 0; f = c[d]; d++) f.wa()
    }
};
b.Jj = function (a) {
    var c = this.C && db(this.C, a);
    if (c) {
        if (c.Hh) throw Error("Tried to call gesture.handleBlockStart, but the gesture had already been started.");
        c.Ng || c.Hc || (c.Ng = this, this.cd && this != N(this) ? mb(c, N(this)) : mb(c, this));
        c.yd = a
    }
};

function $b(a) {
    if (a.C.options.readOnly || !a.contextMenu) return null;
    var c = [];
    if (!a.cd) {
        a.Cc() && a.mc() && c.push(h.sa.Nw(a));
        a.C.options.ex && !a.Ae && a.Dc() && c.push(h.sa.Lw(a));
        if (a.mc()) if (a.Ae) a.C.options.collapse && (d = {enabled: !0}, d.text = h.h.EXPAND_BLOCK, d.Bb = function () {
            a.Ff(!1)
        }, c.push(d)); else {
            for (var d = 1; d < a.K.length; d++) if (a.K[d - 1].type != h.Ca && a.K[d].type != h.Ca) {
                d = {enabled: !0};
                var e = Ga(a);
                d.text = e ? h.h.EXTERNAL_INPUTS : h.h.INLINE_INPUTS;
                d.Bb = function () {
                    a.Mg(!e)
                };
                c.push(d);
                break
            }
            a.C.options.collapse &&
            (d = {enabled: !0}, d.text = h.h.COLLAPSE_BLOCK, d.Bb = function () {
                a.Ff(!0)
            }, c.push(d))
        }
        a.C.options.disable && a.Dc() && (d = {
            text: a.isEnabled() ? h.h.DISABLE_BLOCK : h.h.ENABLE_BLOCK,
            enabled: !xb(a),
            Bb: function () {
                var f = h.i.ub();
                f || h.i.ca(!0);
                a.Re(!a.isEnabled());
                f || h.i.ca(!1)
            }
        }, c.push(d));
        a.Cc() && c.push(h.sa.Mw(a))
    }
    c.push(h.sa.Ow(a));
    a.tx && a.tx(c);
    return c
}

b.Vj = function (a) {
    var c = $b(this);
    c && c.length && (h.sa.show(a, c, this.H), h.sa.Zk = this)
};

function Ra(a, c, d) {
    if (a.$) {
        for (var e = a.Xc(!1), f = 0; f < e.length; f++) e[f].moveBy(c, d);
        e = M(a);
        for (f = 0; f < e.length; f++) Wb(e[f]);
        for (f = 0; f < a.ze.length; f++) Ra(a.ze[f], c, d)
    }
}

b.Lg = function (a) {
    if (a) {
        var c = this.ga();
        c.gk = "";
        c.Yj = "";
        h.cj = h.cj.concat(this.Xc(!0));
        h.g.o.Ab(this.P, "blocklyDragging")
    } else h.cj = [], h.g.o.Gc(this.P, "blocklyDragging");
    for (c = 0; c < this.ze.length; c++) this.ze[c].Lg(a)
};

function Xb(a) {
    a.mc() ? h.g.o.Ab(a.P, "blocklyDraggable") : h.g.o.Gc(a.P, "blocklyDraggable")
}

b.zp = function (a) {
    h.ea.v.zp.call(this, a);
    Xb(this)
};
b.yp = function (a) {
    h.ea.v.yp.call(this, a);
    a = M(this);
    for (var c = 0; c < a.length; c++) a[c].jk()
};
b.Cp = function (a) {
    h.ea.v.Cp.call(this, a);
    this.ie()
};
b.ku = function (a) {
    this.vj != a && (this.vj = a) && (this.zd(h.Av), h.g.o.Ab(this.P, "blocklyInsertionMarker"))
};
b.ga = function () {
    return this.P
};
b.G = function (a, c) {
    if (this.C) {
        h.D.Ia();
        h.g.o.Zj();
        var d = this.C;
        if (h.selected == this) {
            hb(this);
            var e = this.C;
            e.Db && e.Db.cancel()
        }
        h.sa.Zk == this && h.sa.Ia();
        h.Oe && h.navigation.Et(this);
        c && this.$ && (B(this, a), h.La.Cx(this));
        this.$ = !1;
        if (this.tc) {
            for (var f in this.tc) clearTimeout(this.tc[f]);
            this.tc = null
        }
        c = M(this);
        for (e = 0; e < c.length; e++) c[e].G();
        h.ea.v.G.call(this, a);
        h.g.o.removeNode(this.P);
        F(d);
        this.ck = this.Qg = this.gd = this.P = null;
        h.g.o.$j()
    }
};
b.ie = function () {
    var a;
    if (this.isEnabled()) {
        if (this.Qa) {
            var c = vb(this);
            this.Qg.style.display = "none";
            this.ck.setAttribute("fill", c);
            this.gd.setAttribute("stroke", "none");
            this.gd.setAttribute("fill", c)
        } else {
            if (c = this.Pr) var d = a = null; else d = this.dg, c = null, a = h.g.ob.rn("#fff", d, .3), d = h.g.ob.rn("#000", d, .2);
            c ? (this.Qg.style.display = "none", this.ck.style.display = "none", this.gd.setAttribute("stroke", c)) : (this.Qg.style.display = "", this.ck.style.display = "", this.gd.setAttribute("stroke", "none"), this.Qg.setAttribute("stroke",
                a), this.ck.setAttribute("fill", d));
            this.gd.setAttribute("fill", this.dg)
        }
        c = M(this);
        for (a = 0; a < c.length; a++) c[a].ie();
        for (c = 0; a = this.K[c]; c++) {
            d = 0;
            for (var e; e = a.Ea[d]; d++) e.ie()
        }
    }
};

function E(a) {
    !a.isEnabled() || xb(a) ? h.g.o.Ab(a.P, "blocklyDisabled") && a.gd.setAttribute("fill", "url(#" + a.C.options.On + ")") : h.g.o.Gc(a.P, "blocklyDisabled") && a.ie();
    a = ma(a, !1);
    for (var c = 0, d; d = a[c]; c++) E(d)
}

b.$x = function () {
    return this.Pd
};
b.Zh = function (a) {
    if (!h.Comment) throw Error("Missing require for Blockly.Comment");
    this.Be.text != a && (h.ea.v.Zh.call(this, a), a = null != a, !!this.Pd == a ? this.Pd.KF() : (a ? this.Qi = this.Pd = new h.Comment(this) : (this.Pd.G(), this.Qi = this.Pd = null), this.$ && (this.wa(), this.hc())))
};
b.Uj = function (a, c) {
    this.tc || (this.tc = Object.create(null));
    var d = c || "";
    if (d) this.tc[d] && (clearTimeout(this.tc[d]), delete this.tc[d]); else for (var e in this.tc) clearTimeout(this.tc[e]), delete this.tc[e];
    if (this.C.lc()) {
        var f = this;
        this.tc[d] = setTimeout(function () {
            f.C && (delete f.tc[d], f.Uj(a, d))
        }, 100)
    } else {
        this.cd && (a = null);
        c = ub(this);
        for (e = null; c;) c.isCollapsed() && (e = c), c = ub(c);
        e && e.Uj(h.h.COLLAPSED_WARNINGS_WARNING, h.ea.zm);
        c = !1;
        "string" == typeof a ? (this.Pb || (this.Pb = new h.Nd(this), c = !0), this.Pb.im(a,
            d)) : this.Pb && !d ? (this.Pb.G(), c = !0) : this.Pb && (c = this.Pb.jf(), this.Pb.im("", d), (e = this.Pb.jf()) || this.Pb.G(), c = c != e);
        c && this.$ && (this.wa(), this.hc())
    }
};
b.lu = function (a) {
    this.vf && this.vf !== a && this.vf.G();
    a && (a.ba = this, this.vf = a, Vb(a))
};
b.Re = function (a) {
    this.isEnabled() != a && (h.ea.v.Re.call(this, a), this.$ && E(this))
};
b.Se = function (a) {
    this.$ && (a ? (this.gd.setAttribute("filter", "url(#" + this.C.options.ss + ")"), this.Qg.style.display = "none") : (this.gd.setAttribute("filter", "none"), this.Qg.style.display = "inline"))
};

function Ob(a) {
    h.g.o.Ab(a.P, "blocklySelected")
}

function Pb(a) {
    h.g.o.Gc(a.P, "blocklySelected")
}

function Pa(a, c) {
    c ? h.g.o.Ab(a.P, "blocklyDraggingDelete") : h.g.o.Gc(a.P, "blocklyDraggingDelete")
}

b.zd = function (a) {
    h.ea.v.zd.call(this, a);
    this.$ && this.ie()
};

function Sa(a) {
    do {
        var c = a.ga();
        c.parentNode.appendChild(c);
        a = a.getParent()
    } while (a)
}

b.hm = function (a, c) {
    h.ea.v.hm.call(this, a, c);
    this.$ && (this.wa(), this.hc())
};
b.fm = function (a, c) {
    h.ea.v.fm.call(this, a, c);
    this.$ && (this.wa(), this.hc())
};
b.gm = function (a, c) {
    h.ea.v.gm.call(this, a, c);
    this.$ && (this.wa(), this.hc())
};
b.Mg = function (a) {
    h.ea.v.Mg.call(this, a);
    this.$ && (this.wa(), this.hc())
};
b.pp = function (a, c) {
    h.ea.v.pp.call(this, a, c);
    this.$ && (this.wa(), this.hc())
};
b.Xf = function (a, c) {
    a = h.ea.v.Xf.call(this, a, c);
    this.$ && (this.wa(), this.hc());
    return a
};

function la(a, c) {
    if (!c && a.isCollapsed()) {
        if (a.L && R(a.L, c), a.N && R(a.N, c), a.W) {
            R(a.W, c);
            var d = A(a.W);
            d && la(d, c)
        }
    } else {
        a = a.Xc(!0);
        for (var e = 0; d = a[e]; e++) R(d, c), I(d) && (d = A(d)) && la(d, c)
    }
}

b.Xc = function (a) {
    var c = [];
    if (a || this.$) if (this.L && c.push(this.L), this.N && c.push(this.N), this.W && c.push(this.W), a || !this.Ae) {
        a = 0;
        for (var d; d = this.K[a]; a++) d.connection && c.push(d.connection)
    }
    return c
};
b.Dj = function (a) {
    return new h.te(this, a)
};
b.hc = function () {
    if (this.C && !this.C.lc()) {
        var a = N(this);
        if (!a.cd) for (var c = this.Xc(!1), d = 0, e; e = c[d]; d++) {
            e.isConnected() && I(e) && A(e).hc();
            for (var f = e.Ft(h.Sb), g = 0, k; k = f[g]; g++) e.isConnected() && k.isConnected() || N(k.B) != a && (I(e) ? Nb(k, e) : Nb(e, k))
        }
    }
};

function Ta(a) {
    var c = h.i.ub();
    setTimeout(function () {
        h.i.ca(c);
        Yb(a);
        h.i.ca(!1)
    }, h.xm / 2);
    setTimeout(function () {
        h.i.ca(c);
        a.hc();
        h.i.ca(!1)
    }, h.xm)
}

b.wa = function (a) {
    h.g.o.Zj();
    this.$ = !0;
    this.C.Df.wa(this);
    var c = this.Fa();
    this.N && Rb(this.N, c);
    this.L && Rb(this.L, c);
    for (var d = 0; d < this.K.length; d++) {
        var e = this.K[d].connection;
        e && (Rb(e, c), e.isConnected() && Sb(e))
    }
    this.W && (Rb(this.W, c), this.W.isConnected() && Sb(this.W));
    !1 !== a && ((a = this.getParent()) ? a.wa(!0) : F(this.C));
    h.g.o.$j()
};
b.Sj = function (a) {
    a ? (this.P.appendChild(a), this.Lb = a) : this.Lb = null
};
b.em = function (a) {
    a && (this.Lb ? this.P.insertBefore(a, this.Lb) : this.P.appendChild(a))
};

function J(a) {
    var c = a.height, d = a.width;
    if (a = t(a)) a = J(a), c += a.height - 4, d = Math.max(d, a.width);
    return {height: c, width: d}
}

function La(a, c) {
    c ? h.g.o.Ab(a.P, "blocklyReplaceable") : h.g.o.Gc(a.P, "blocklyReplaceable")
};h.j.Wh = {};
h.j.lk = !1;
h.j.register = function (a, c) {
    if (h.j.Wh[a]) throw Error("Renderer has already been registered.");
    h.j.Wh[a] = c
};
h.j.unregister = function (a) {
    h.j.Wh[a] ? delete h.j.Wh[a] : console.warn('No renderer mapping for name "' + a + '" found to unregister')
};
h.j.DF = function () {
    h.j.lk = !0
};
h.j.EF = function () {
    h.j.lk = !1
};
h.j.Pa = function (a) {
    function c() {
        c.v.constructor.call(this)
    }

    if (!h.j.Wh[a]) throw Error("Renderer not registered: ", a);
    h.g.object.S(c, h.j.Wh[a]);
    a = new c;
    a.Pa();
    return a
};
h.eh = function () {
    this.pb = []
};

function Qb(a, c) {
    if (c.mf) throw Error("Connection already in database.");
    c.B.cd || (a.pb.splice(Tb(a, c), 0, c), c.mf = !0)
}

function ac(a, c) {
    if (!a.pb.length) return -1;
    var d = Tb(a, c);
    if (d >= a.pb.length) return -1;
    for (var e = c.Aa, f = d; 0 <= f && a.pb[f].Aa == e;) {
        if (a.pb[f] == c) return f;
        f--
    }
    for (; d < a.pb.length && a.pb[d].Aa == e;) {
        if (a.pb[d] == c) return d;
        d++
    }
    return -1
}

function Tb(a, c) {
    if (!a.pb.length) return 0;
    for (var d = 0, e = a.pb.length; d < e;) {
        var f = Math.floor((d + e) / 2);
        if (a.pb[f].Aa < c.Aa) d = f + 1; else if (a.pb[f].Aa > c.Aa) e = f; else {
            d = f;
            break
        }
    }
    return d
}

function Lb(a, c) {
    if (!c.mf) throw Error("Connection not in database.");
    var d = ac(a, c);
    if (-1 == d) throw Error("Unable to find connection in connectionDB.");
    c.mf = !1;
    a.pb.splice(d, 1)
}

function Ub(a, c, d) {
    function e(n) {
        var q = g - f[n].fb, r = k - f[n].Aa;
        Math.sqrt(q * q + r * r) <= d && m.push(f[n]);
        return r < d
    }

    var f = a.pb, g = c.fb, k = c.Aa;
    a = 0;
    for (var l = c = f.length - 2; a < l;) f[l].Aa < k ? a = l : c = l, l = Math.floor((a + c) / 2);
    var m = [];
    c = a = l;
    if (f.length) {
        for (; 0 <= a && e(a);) a--;
        do c++; while (c < f.length && e(c))
    }
    return m
}

h.eh.Pa = function () {
    var a = [];
    a[h.Ha] = new h.eh;
    a[h.jd] = new h.eh;
    a[h.Ca] = new h.eh;
    a[h.ld] = new h.eh;
    return a
};
h.vc = function (a, c) {
    h.vc.v.constructor.call(this, a, c);
    this.Ll = !1;
    this.Uc = {};
    this.pu = this.Nj = 0;
    this.hp = null
};
h.g.object.S(h.vc, h.gh);
h.vc.yw = 5;
h.vc.zw = 6;
b = h.vc.prototype;
b.Un = function (a) {
    h.vc.v.Un.call(this, a);
    !this.Jl && h.Touch.Ol(a) && bc(this, a)
};
b.Ji = function (a) {
    this.hp = h.Ba(document, "mousedown", null, this.zy.bind(this), !0);
    this.Ul = h.Ba(document, "mousemove", null, this.hj.bind(this), !0);
    this.Vl = h.Ba(document, "mouseup", null, this.zl.bind(this), !0);
    a.preventDefault();
    a.stopPropagation()
};
b.zy = function (a) {
    !this.lc() && h.Touch.Ol(a) && (bc(this, a), this.Ll && h.uf())
};
b.hj = function (a) {
    if (this.lc()) h.Touch.Ep(a) && h.vc.v.hj.call(this, a); else if (this.Ll) {
        if (h.Touch.Ol(a)) {
            this.Uc[h.Touch.wl(a)] = cc(this, a);
            var c = Object.keys(this.Uc);
            if (2 == c.length) {
                c = h.g.M.os(this.Uc[c[0]], this.Uc[c[1]]) / this.pu;
                if (0 < this.Nj && Infinity > this.Nj) {
                    var d = c - this.Nj;
                    d = 0 < d ? d * h.vc.yw : d * h.vc.zw;
                    var e = this.wb, f = h.g.Ij(a, y(e), Aa(e));
                    e.zoom(f.x, f.y, d)
                }
                this.Nj = c;
                a.preventDefault()
            }
        }
        h.uf()
    } else h.vc.v.hj.call(this, a)
};
b.zl = function (a) {
    if (h.Touch.Ol(a) && !this.lc()) {
        var c = h.Touch.wl(a);
        this.Uc[c] && delete this.Uc[c];
        2 > Object.keys(this.Uc).length && (this.Uc = {}, this.Nj = 0)
    }
    !this.Ll || this.lc() ? h.Touch.Ep(a) && h.vc.v.zl.call(this, a) : (a.preventDefault(), a.stopPropagation(), this.G())
};
b.G = function () {
    h.vc.v.G.call(this);
    this.hp && h.lb(this.hp)
};

function bc(a, c) {
    a.Uc[h.Touch.wl(c)] = cc(a, c);
    var d = Object.keys(a.Uc);
    2 == d.length && (a.pu = h.g.M.os(a.Uc[d[0]], a.Uc[d[1]]), a.Ll = !0, c.preventDefault())
}

function cc(a, c) {
    return a.wb ? new h.g.M(c.pageX ? c.pageX : c.changedTouches[0].pageX, c.pageY ? c.pageY : c.changedTouches[0].pageY) : null
};h.vr = function (a) {
    this.jp = a;
    this.zi = Object.create(null)
};
b = h.vr.prototype;
b.Mo = null;
b.G = function () {
    this.zi = this.jp = null
};
b.load = function (a, c) {
    if (a.length) {
        try {
            var d = new h.g.global.Audio
        } catch (l) {
            return
        }
        for (var e, f = 0; f < a.length; f++) {
            var g = a[f], k = g.match(/\.(\w+)$/);
            if (k && d.canPlayType("audio/" + k[1])) {
                e = new h.g.global.Audio(g);
                break
            }
        }
        e && e.play && (this.zi[c] = e)
    }
};
b.preload = function () {
    for (var a in this.zi) {
        var c = this.zi[a];
        c.volume = .01;
        var d = c.play();
        void 0 !== d ? d.then(c.pause).catch(function () {
        }) : c.pause();
        if (h.g.userAgent.wi || h.g.userAgent.Bq) break
    }
};
b.play = function (a, c) {
    var d = this.zi[a];
    d ? (a = new Date, null != this.Mo && a - this.Mo < h.dw || (this.Mo = a, d = h.g.userAgent.wi || h.g.userAgent.pk ? d : d.cloneNode(), d.volume = void 0 === c ? 1 : c, d.play())) : this.jp && this.jp.Od.play(a, c)
};
h.Ua = function (a, c, d) {
    h.Ua.v.constructor.call(this, a);
    this.Yc = a.Yc || h.Ua.qy;
    this.Tj = a.Tj || h.Ua.Qz;
    this.Yk = h.eh.Pa();
    c && (this.wc = c);
    d && (this.Yg = d);
    this.om = this.Yg && h.g.vg();
    this.kj = [];
    this.Od = new h.vr(a.Fc);
    this.$c = this.options.Ts ? new h.Nf(a.Ts, a.Ss) : null;
    this.Lb = null;
    h.na && h.na.mg && dc(this, h.kr, h.na.mg);
    h.qr && h.qr.mg && dc(this, h.rw, h.qr.mg);
    h.hb && h.hb.mg && dc(this, h.Rq, h.hb.mg);
    this.Df = h.j.Pa(this.options.rp || "geras")
};
h.g.object.S(h.Ua, h.ab);
b = h.Ua.prototype;
b.cm = null;
b.$ = !0;
b.zj = !0;
b.Ne = !1;
b.xj = !1;
b.tp = !0;
b.scrollX = 0;
b.scrollY = 0;
b.ps = null;
b.scale = 1;
b.Nb = null;
b.eb = null;
b.R = null;
b.qa = null;
b.Db = null;
b.wc = null;
b.Yg = null;
b.om = !1;
b.Il = !1;
b.Fo = null;
b.st = null;
b.xs = {};
b.vu = {};
b.Qr = null;
b.Lp = null;
b.kt = null;
b.Go = !0;
b.ju = function (a) {
    this.ya && this.ya.kc && this.ya.kc.G();
    if (this.ya = a) this.ya.kc = new h.ma(this, !1), this.Sj(this.ya.kc.Va())
};
b.Sj = function (a) {
    a ? this.kb && (this.kb.appendChild(a), this.Lb = a) : this.Lb = null
};
b.em = function (a) {
    a && this.kb && (this.Lb ? this.kb.insertBefore(a, this.Lb) : this.kb.appendChild(a))
};

function Aa(a) {
    if (a.Go) {
        var c = y(a).getScreenCTM();
        c && (a.kt = c.inverse(), a.Go = !1)
    }
    return a.kt
}

b.kk = function () {
    this.Go = !0
};
b.isVisible = function () {
    return this.zj
};

function Ha(a, c) {
    var d = 0, e = 0, f = 1;
    if (h.g.o.containsNode(a.kb, c) || h.g.o.containsNode(a.Te, c)) f = a.scale;
    do {
        var g = h.g.Zc(c);
        if (c == a.kb || c == a.Te) f = 1;
        d += g.x * f;
        e += g.y * f;
        c = c.parentNode
    } while (c && c != y(a));
    return new h.g.M(d, e)
}

function aa(a) {
    if (!a.Fo) for (var c = a.P; c;) {
        if (-1 != (" " + (c.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) {
            a.Fo = c;
            break
        }
        c = c.parentNode
    }
    return a.Fo
}

b.Va = function (a) {
    this.P = h.g.o.J("g", {"class": "blocklyWorkspace"}, null);
    a && (this.fe = h.g.o.J("rect", {
        height: "100%",
        width: "100%",
        "class": a
    }, this.P), "blocklyMainBackground" == a && this.$c ? this.fe.style.fill = "url(#" + this.$c.Gh.id + ")" : this.gc.subscribe(this.fe, "workspace", "fill"));
    this.kb = h.g.o.J("g", {"class": "blocklyBlockCanvas"}, this.P);
    this.Te = h.g.o.J("g", {"class": "blocklyBubbleCanvas"}, this.P);
    this.Ne || (h.Ba(this.P, "mousedown", this, this.Jj, !1, !0), h.Ba(this.P, "wheel", this, this.uz));
    if (this.options.Ws) {
        if (!h.nw) throw Error("Missing require for Blockly.Toolbox");
        this.qa = new h.nw(this)
    }
    this.$c && this.$c.update(this.scale);
    ec(this);
    this.ya.kc = new h.ma(this, !1);
    a = this.ya.kc.Va();
    this.P.appendChild(a);
    this.Ec.kc = new h.ma(this, !0);
    a = this.Ec.kc.Va();
    this.P.appendChild(a);
    return this.P
};
b.G = function () {
    this.$ = !1;
    this.Db && this.Db.cancel();
    this.P && (h.g.o.removeNode(this.P), this.P = null);
    this.Te = this.kb = null;
    this.qa && (this.qa.G(), this.qa = null);
    this.R && (this.R.G(), this.R = null);
    this.Nb && (this.Nb.G(), this.Nb = null);
    this.eb && (this.eb.G(), this.eb = null);
    this.Zg && (this.Zg.G(), this.Zg = null);
    this.Ec && this.Ec.kc.G();
    this.ya && this.ya.kc.G();
    this.Od && (this.Od.G(), this.Od = null);
    this.$c && (this.$c.G(), this.$c = null);
    this.gc && this.gc.unsubscribe(this.fe);
    h.Ua.v.G.call(this);
    this.xs = this.vu = this.Yk = null;
    if (!this.options.Fc) {
        var a = y(this).parentNode;
        a && h.g.o.removeNode(a)
    }
    this.cm && (h.lb(this.cm), this.cm = null)
};
b.Sh = function (a, c) {
    return new h.ea(this, a, c)
};

function fc(a) {
    if (!h.ow) throw Error("Missing require for Blockly.Trashcan");
    a.Nb = new h.ow(a);
    var c = a.Nb.Va();
    a.P.insertBefore(c, a.kb)
}

function gc(a) {
    if (!h.Aw) throw Error("Missing require for Blockly.ZoomControls");
    a.Zg = new h.Aw(a);
    var c = a.Zg.Va();
    a.P.appendChild(c)
}

function hc(a) {
    var c = {On: a.options.On, Fc: a, H: a.H, Nt: a.options.Nt, lj: a.lj, Gb: a.options.Gb, rp: a.options.rp};
    if (a.lj) {
        if (!h.xv) throw Error("Missing require for Blockly.HorizontalFlyout");
        a.R = new h.xv(c)
    } else {
        if (!h.sw) throw Error("Missing require for Blockly.VerticalFlyout");
        a.R = new h.sw(c)
    }
    a.R.on = !1;
    return a.R.Va("svg")
}

function ic(a) {
    return a.R ? a.R : a.qa ? a.qa.R : null
}

function F(a) {
    if (a.tp && a.$) {
        if (a.eb) {
            var c = a.Yc();
            va(a.eb.Ac, c);
            xa(a.eb.Kc, c)
        }
        a.kk()
    }
}

b.resize = function () {
    this.qa && this.qa.position();
    this.R && this.R.position();
    this.Nb && this.Nb.position();
    this.Zg && this.Zg.position();
    this.eb && this.eb.resize();
    this.kk();
    ec(this)
};

function jb(a) {
    var c = h.g.jy();
    h.g.M.Ud(a.st, c) || (a.st = c, a.kk(), ec(a))
}

function y(a) {
    if (a.Fr) return a.Fr;
    for (var c = a.P; c;) {
        if ("svg" == c.tagName) return a.Fr = c;
        c = c.parentNode
    }
    return null
}

b.translate = function (a, c) {
    if (this.om && this.Il) this.Yg.Tg(a, c); else {
        var d = "translate(" + a + "," + c + ") scale(" + this.scale + ")";
        this.kb.setAttribute("transform", d);
        this.Te.setAttribute("transform", d)
    }
    if (this.wc) {
        d = this.wc;
        var e = this.scale;
        d.Ef = e;
        d.td.setAttribute("transform", "translate(" + a.toFixed(0) + "," + c.toFixed(0) + ") scale(" + e + ")")
    }
    this.$c && this.$c.moveTo(a, c)
};

function Ca(a) {
    if (a.om) {
        a.Il = !1;
        var c = a.Yg.qo();
        a.Yg.Sk(a.P);
        c = "translate(" + c.x + "," + c.y + ") scale(" + a.scale + ")";
        a.kb.setAttribute("transform", c);
        a.Te.setAttribute("transform", c)
    }
}

function Ba(a) {
    if (a.om && !a.Il) {
        a.Il = !0;
        var c = a.kb.previousSibling, d = parseInt(y(a).getAttribute("width"), 10),
            e = parseInt(y(a).getAttribute("height"), 10), f = h.g.Zc(a.kb), g = a.Yg, k = a.kb, l = a.Te, m = a.scale;
        if (g.Sa.childNodes.length) throw Error("Already dragging a block.");
        g.np = c;
        k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        g.Sa.setAttribute("width", d);
        g.Sa.setAttribute("height", e);
        g.Sa.appendChild(k);
        g.Sa.appendChild(l);
        g.Sa.style.display =
            "block";
        a.Yg.Tg(f.x, f.y)
    }
}

b.gj = function () {
    var a = this.Yc();
    return a ? a.yb / this.scale : 0
};
b.Yb = function (a) {
    this.eb && this.eb.Rj(a);
    ic(this) && ic(this).Rj(a);
    y(this).style.display = a ? "block" : "none";
    this.qa && (this.qa.TB.style.display = a ? "block" : "none");
    if (a) {
        for (var c = P(this, !1), d = c.length - 1; 0 <= d; d--) c[d].Ej();
        this.wa();
        this.qa && this.qa.position()
    } else h.ec(!0);
    this.zj = a
};
b.wa = function () {
    for (var a = P(this, !1), c = a.length - 1; 0 <= c; c--) a[c].wa(!1);
    if (this.Db) for (a = this.Db.Eh(), c = 0; c < a.length; c++) a[c].wa(!1)
};

function jc(a) {
    var c = h.Pi;
    if (a.$ && !(c.getElementsByTagName("block").length >= (isNaN(a.options.Fj) ? Infinity : a.options.Fj - P(a).length))) if (a.Db && a.Db.cancel(), "comment" == c.tagName.toLowerCase()) {
        h.i.disable();
        try {
            h.rh.setValue(c.textContent);
            var d = void 0;
            var e = parseInt(c.getAttribute("x"), 10), f = parseInt(c.getAttribute("y"), 10);
            isNaN(e) || isNaN(f) || (a.H && (e = -e), d.moveBy(e + 50, f + 50))
        } finally {
            h.i.enable()
        }
        d.select()
    } else a:{
        h.i.disable();
        try {
            var g = h.I.il(c, a), k = a.Ec.qb;
            if (h.Oe && k) {
                h.navigation.jt(g, k.Z);
                break a
            }
            var l = parseInt(c.getAttribute("x"), 10), m = parseInt(c.getAttribute("y"), 10);
            if (!isNaN(l) && !isNaN(m)) {
                a.H && (l = -l);
                do {
                    c = !1;
                    var n = P(a, !1);
                    d = 0;
                    for (var q; q = n[d]; d++) {
                        var r = q.Fa();
                        if (1 >= Math.abs(l - r.x) && 1 >= Math.abs(m - r.y)) {
                            c = !0;
                            break
                        }
                    }
                    if (!c) {
                        var v = g.Xc(!1);
                        d = 0;
                        for (var w; w = v[d]; d++) if (w.closest(h.Sb, new h.g.M(l, m)).connection) {
                            c = !0;
                            break
                        }
                    }
                    c && (l = a.H ? l - h.Sb : l + h.Sb, m += 2 * h.Sb)
                } while (c);
                g.moveBy(l, m)
            }
        } finally {
            h.i.enable()
        }
        h.i.isEnabled() && !g.Qa && h.i.Ma(new h.i.tk(g));
        g.select()
    }
}

function kc(a) {
    (a = a.Ne ? a.Lp : a) && !a.Db && a.qa && a.qa.R && a.qa.nF()
}

b.Kg = function (a, c) {
    h.Ua.v.Kg.call(this, a, c);
    kc(this)
};
b.Ah = function (a) {
    h.Ua.v.Ah.call(this, a);
    kc(this)
};
b.sd = function (a, c, d) {
    a = h.Ua.v.sd.call(this, a, c, d);
    kc(this);
    return a
};

function ec(a) {
    a.fs = a.Nb && a.P.parentNode ? a.Nb.Ds() : null;
    a.ds = a.R ? a.R.Ds() : a.qa ? a.qa.Ds() : null
}

function Oa(a, c) {
    return a.fs && a.fs.contains(c.clientX, c.clientY) ? h.Dm : a.ds && a.ds.contains(c.clientX, c.clientY) ? h.oq : h.nq
}

b.Jj = function (a) {
    var c = db(this, a);
    if (c) {
        if (c.Hh) throw Error("Tried to call gesture.handleWsStart, but the gesture had already been started.");
        c.wb || (c.wb = this);
        c.yd = a;
        c.Un(a);
        h.Oe && h.navigation.bi(h.navigation.Lk)
    }
};
b.Hp = function (a, c) {
    a = h.g.Ij(a, y(this), Aa(this));
    a.x /= this.scale;
    a.y /= this.scale;
    this.ps = h.g.M.bl(c, a)
};
b.lc = function () {
    return null != this.Db && this.Db.lc()
};

function lc(a) {
    return a.options.vb && a.options.vb.scrollbars || a.options.vb && a.options.vb.Xg || a.options.vb && a.options.vb.Ge || a.options.$a && a.options.$a.controls || a.options.$a && a.options.$a.Xg
}

b.mc = function () {
    return this.options.vb && this.options.vb.scrollbars || this.options.vb && this.options.vb.Xg || this.options.vb && this.options.vb.Ge || this.options.$a && this.options.$a.Xg
};
b.uz = function (a) {
    if (h.gh.Do()) a.preventDefault(), a.stopPropagation(); else {
        var c = this.options.$a && this.options.$a.Xg, d = this.options.vb && this.options.vb.Xg;
        if (c || d) {
            var e = h.g.py(a);
            !c || !a.ctrlKey && d ? (c = this.scrollX - e.x, d = this.scrollY - e.y, a.shiftKey && !e.x && (c = this.scrollX - e.y, d = this.scrollY), this.scroll(c, d)) : (e = -e.y / 50, c = h.g.Ij(a, y(this), Aa(this)), this.zoom(c.x, c.y, e));
            a.preventDefault()
        }
    }
};

function ka(a) {
    var c = D(a, !1);
    a = ja(a, !1);
    c = c.concat(a);
    if (!c.length) return new h.g.Rect(0, 0, 0, 0);
    a = Zb(c[0]);
    for (var d = 1; d < c.length; d++) {
        var e = Zb(c[d]);
        e.top < a.top && (a.top = e.top);
        e.bottom > a.bottom && (a.bottom = e.bottom);
        e.left < a.left && (a.left = e.left);
        e.right > a.right && (a.right = e.right)
    }
    return a
}

b.$w = function () {
    this.qc(!1);
    h.i.ca(!0);
    for (var a = D(this, !0), c = 0, d = 0, e; e = a[d]; d++) if (e.mc()) {
        var f = e.Fa();
        e.moveBy(-f.x, c - f.y);
        Yb(e);
        c = e.Fa().y + J(e).height + h.ea.Jq
    }
    h.i.ca(!1);
    this.qc(!0)
};
b.Vj = function (a) {
    function c(w) {
        if (w.Cc()) v = v.concat(p(w, !1)); else {
            w = ma(w, !1);
            for (var K = 0; K < w.length; K++) c(w[K])
        }
    }

    function d() {
        h.i.ca(g);
        var w = v.shift();
        w && (w.C ? (w.G(!1, !0), setTimeout(d, 10)) : d());
        h.i.ca(!1)
    }

    if (!this.options.readOnly && !this.Ne) {
        var e = [], f = D(this, !0), g = h.g.He(), k = this, l = {};
        l.text = h.h.UNDO;
        l.enabled = 0 < this.Ug.length;
        l.Bb = this.Qp.bind(this, !1);
        e.push(l);
        l = {};
        l.text = h.h.REDO;
        l.enabled = 0 < this.Pj.length;
        l.Bb = this.Qp.bind(this, !0);
        e.push(l);
        this.mc() && (l = {}, l.text = h.h.CLEAN_UP, l.enabled = 1 <
            f.length, l.Bb = this.$w.bind(this), e.push(l));
        if (this.options.collapse) {
            for (var m = l = !1, n = 0; n < f.length; n++) for (var q = f[n]; q;) q.isCollapsed() ? l = !0 : m = !0, q = t(q);
            var r = function (w) {
                for (var K = 0, L = 0; L < f.length; L++) for (var T = f[L]; T;) setTimeout(T.Ff.bind(T, w), K), T = t(T), K += 10
            };
            m = {enabled: m};
            m.text = h.h.COLLAPSE_ALL;
            m.Bb = function () {
                r(!0)
            };
            e.push(m);
            l = {enabled: l};
            l.text = h.h.EXPAND_ALL;
            l.Bb = function () {
                r(!1)
            };
            e.push(l)
        }
        var v = [];
        for (n = 0; n < f.length; n++) c(f[n]);
        l = {
            text: 1 == v.length ? h.h.DELETE_BLOCK : h.h.DELETE_X_BLOCKS.replace("%1",
                String(v.length)), enabled: 0 < v.length, Bb: function () {
                k.Db && k.Db.cancel();
                2 > v.length ? d() : h.confirm(h.h.DELETE_ALL_BLOCKS.replace("%1", v.length), function (w) {
                    w && d()
                })
            }
        };
        e.push(l);
        this.Qr && this.Qr(e);
        h.sa.show(a, e, this.H)
    }
};

function za(a) {
    if (a.options.Fc) za(a.options.Fc); else {
        h.Cj = a;
        document.activeElement && document.activeElement.blur();
        try {
            y(a).focus()
        } catch (c) {
            try {
                y(a).parentNode.setActive()
            } catch (d) {
                y(a).parentNode.focus()
            }
        }
    }
}

b.zoom = function (a, c, d) {
    if (!this.Ne && !this.xj) {
        d = Math.pow(this.options.$a.Kz, d);
        var e = this.scale * d;
        if (this.scale != e) {
            e > this.options.$a.Gj ? d = this.options.$a.Gj / this.scale : e < this.options.$a.Hj && (d = this.options.$a.Hj / this.scale);
            var f = this.kb.getCTM(), g = y(this).createSVGPoint();
            g.x = a;
            g.y = c;
            g = g.matrixTransform(f.inverse());
            a = g.x;
            c = g.y;
            f = f.translate(a * (1 - d), c * (1 - d)).scale(d);
            this.scrollX = f.e;
            this.scrollY = f.f;
            this.setScale(e)
        }
    }
};
b.setScale = function (a) {
    this.options.$a.Gj && a > this.options.$a.Gj ? a = this.options.$a.Gj : this.options.$a.Hj && a < this.options.$a.Hj && (a = this.options.$a.Hj);
    this.scale = a;
    h.ec(!1);
    this.R && (this.R.mF(), ec(this));
    this.$c && this.$c.update(this.scale);
    a = this.Yc();
    this.scrollX -= a.Rc;
    this.scrollY -= a.Sc;
    a.sb += a.Rc;
    a.Hb += a.Sc;
    this.scroll(this.scrollX, this.scrollY);
    this.eb && (this.R ? (sa(this.eb.Ac, a), ta(this.eb.Kc, a)) : (va(this.eb.Ac, a), xa(this.eb.Kc, a)))
};
b.scroll = function (a, c) {
    h.ec(!0);
    var d = this.Yc(), e = d.De + d.ic - d.yb, f = d.Ce + d.jc - d.Ob;
    a = Math.min(a, -d.ic);
    c = Math.min(c, -d.jc);
    a = Math.max(a, -e);
    c = Math.max(c, -f);
    this.scrollX = a;
    this.scrollY = c;
    this.eb && (G(this.eb.Ac, -(a + d.ic) * this.eb.Ac.Fb), G(this.eb.Kc, -(c + d.jc) * this.eb.Kc.Fb));
    a += d.Rc;
    c += d.Sc;
    this.translate(a, c)
};
h.Ua.Gs = function (a) {
    var c = 0, d = 0;
    a && (c = a.gj(), d = a.QE());
    return {width: c, height: d}
};
h.Ua.ey = function (a, c) {
    return lc(a) ? h.Ua.by(a, c) : h.Ua.Es(a)
};
h.Ua.Es = function (a) {
    var c = ka(a), d = a.scale;
    a = c.top * d;
    var e = c.bottom * d, f = c.left * d;
    c = c.right * d;
    return {top: a, bottom: e, left: f, right: c, width: c - f, height: e - a}
};
h.Ua.by = function (a, c) {
    a = h.Ua.Es(a);
    var d = c.width;
    c = c.height;
    var e = d / 2, f = c / 2, g = Math.min(a.left - e, a.right - d), k = Math.min(a.top - f, a.bottom - c);
    return {
        left: g,
        top: k,
        height: Math.max(a.bottom + f, a.top + c) - k,
        width: Math.max(a.right + e, a.left + d) - g
    }
};
h.Ua.qy = function () {
    var a = h.Ua.Gs(this.qa), c = h.Ua.Gs(this.R), d = h.uu(y(this)), e = {height: d.height, width: d.width};
    if (this.qa) if (this.Gb == h.Ci || this.Gb == h.fn) e.height -= a.height; else {
        if (this.Gb == h.Bi || this.Gb == h.gn) e.width -= a.width
    } else if (this.R) if (this.Gb == h.Ci || this.Gb == h.fn) e.height -= c.height; else if (this.Gb == h.Bi || this.Gb == h.gn) e.width -= c.width;
    var f = h.Ua.ey(this, e), g = 0;
    this.qa && this.Gb == h.Bi ? g = a.width : this.R && this.Gb == h.Bi && (g = c.width);
    var k = 0;
    this.qa && this.Gb == h.Ci ? k = a.height : this.R && this.Gb == h.Ci &&
        (k = c.height);
    return {
        Ce: f.height,
        De: f.width,
        jc: f.top,
        ic: f.left,
        Ob: e.height,
        yb: e.width,
        Hb: -this.scrollY,
        sb: -this.scrollX,
        Sc: k,
        Rc: g,
        FF: d.height,
        GF: d.width,
        JF: a.width,
        IF: a.height,
        NE: c.width,
        ME: c.height,
        Gb: this.Gb
    }
};
h.Ua.Qz = function (a) {
    var c = this.Yc();
    "number" == typeof a.x && (this.scrollX = -c.De * a.x - c.ic);
    "number" == typeof a.y && (this.scrollY = -c.Ce * a.y - c.jc);
    this.translate(this.scrollX + c.Rc, this.scrollY + c.Sc)
};
h.Ua.prototype.qc = function (a) {
    var c = !this.tp && a;
    this.tp = a;
    c && F(this)
};
h.Ua.prototype.clear = function () {
    this.qc(!1);
    h.Ua.v.clear.call(this);
    this.qc(!0)
};

function mc(a, c) {
    if ("function" != typeof c) throw TypeError("Button callbacks must be functions.");
    a.xs.CREATE_VARIABLE = c
}

function dc(a, c, d) {
    if ("function" != typeof d) throw TypeError("Toolbox category callbacks must be functions.");
    a.vu[c] = d
}

function db(a, c) {
    var d = "mousedown" == c.type || "touchstart" == c.type || "pointerdown" == c.type, e = a.Db;
    return e ? d && e.Hh ? (console.warn("Tried to start the same gesture twice."), e.cancel(), null) : e : d ? (a.Db = new h.vc(c, a), a.Db) : null
};h.nf = function (a, c) {
    h.Vw();
    "string" == typeof a && (a = document.getElementById(a) || document.querySelector(a));
    if (!h.g.o.containsNode(document, a)) throw Error("Error: container is not in current document.");
    c = new h.Pc(c || {});
    var d = document.createElement("div");
    d.className = "injectionDiv";
    a.appendChild(d);
    a = h.Wi(d, c);
    var e = new h.gq(d);
    d = new h.wr(d);
    d = h.ox(a, c, e, d);
    h.Ra.Na.Pz(c.Na);
    h.Jy(d);
    h.Cj = d;
    h.ek(d);
    return d
};
h.Wi = function (a, c) {
    a.setAttribute("dir", "LTR");
    h.$b.bs = c.H;
    h.Lc.nf(c.Ay, c.Rt);
    a = h.g.o.J("svg", {
        xmlns: h.g.o.Mk,
        "xmlns:html": h.g.o.Fm,
        "xmlns:xlink": h.g.o.sh,
        version: "1.1",
        "class": "blocklySvg"
    }, a);
    var d = h.g.o.J("defs", {}, a), e = String(Math.random()).substring(2),
        f = h.g.o.J("filter", {id: "blocklyEmbossFilter" + e}, d);
    h.g.o.J("feGaussianBlur", {"in": "SourceAlpha", stdDeviation: 1, result: "blur"}, f);
    var g = h.g.o.J("feSpecularLighting", {
        "in": "blur", surfaceScale: 1, specularConstant: .5, specularExponent: 10, "lighting-color": "white",
        result: "specOut"
    }, f);
    h.g.o.J("fePointLight", {x: -5E3, y: -1E4, z: 2E4}, g);
    h.g.o.J("feComposite", {"in": "specOut", in2: "SourceAlpha", operator: "in", result: "specOut"}, f);
    h.g.o.J("feComposite", {
        "in": "SourceGraphic",
        in2: "specOut",
        operator: "arithmetic",
        k1: 0,
        k2: 1,
        k3: 1,
        k4: 0
    }, f);
    c.ss = f.id;
    f = h.g.o.J("pattern", {
        id: "blocklyDisabledPattern" + e,
        patternUnits: "userSpaceOnUse",
        width: 10,
        height: 10
    }, d);
    h.g.o.J("rect", {width: 10, height: 10, fill: "#aaa"}, f);
    h.g.o.J("path", {d: "M 0 0 L 10 10 M 10 0 L 0 10", stroke: "#cc0"}, f);
    c.On = f.id;
    c.Ts = h.Nf.Va(e, c.Ss, d);
    return a
};
h.ox = function (a, c, d, e) {
    c.Fc = null;
    var f = new h.Ua(c, d, e);
    f.scale = c.$a.Yz;
    a.appendChild(f.Va("blocklyMainBackground"));
    !c.Ws && c.Ko && (d = hc(f), h.g.o.pj(d, a));
    c.$s && fc(f);
    c.$a && c.$a.controls && gc(f);
    f.gc.subscribe(a, "workspace", "background-color");
    f.translate(0, 0);
    h.Cj = f;
    c.readOnly || f.mc() || $a(f, function (g) {
        if (!f.lc() && !f.mc() && -1 != h.i.Uu.indexOf(g.type)) {
            var k = Object.create(null), l = f.Yc(), m = f.scale;
            k.H = f.H;
            k.sb = l.sb / m;
            k.Hb = l.Hb / m;
            k.Bu = (l.sb + l.yb) / m;
            k.Au = (l.Hb + l.Ob) / m;
            lc(f) ? (l = ka(f), k.ic = l.left, k.jc = l.top,
                k.Wr = l.right, k.Ur = l.bottom) : (k.ic = l.ic / m, k.jc = l.jc / m, k.Wr = (l.ic + l.De) / m, k.Ur = (l.jc + l.Ce) / m);
            if (k.jc < k.Hb || k.Ur > k.Au || k.ic < k.sb || k.Wr > k.Bu) {
                l = null;
                g && (l = h.i.ub(), h.i.ca(g.group));
                switch (g.type) {
                    case h.i.aq:
                    case h.i.bq:
                        var n = u(f, g.Tb);
                        n = N(n);
                        break;
                    case h.i.wk:
                    case h.i.xk:
                        n = f.Wk[g.Qd] || null
                }
                if (n) {
                    m = Zb(n);
                    m.height = m.bottom - m.top;
                    m.width = m.right - m.left;
                    var q = k.Hb, r = k.Au - m.height;
                    r = Math.max(q, r);
                    q = h.g.Vb.Ni(q, m.top, r) - m.top;
                    r = k.sb;
                    var v = k.Bu - m.width;
                    k.H ? r = Math.min(v, r) : v = Math.max(r, v);
                    n.moveBy(h.g.Vb.Ni(r,
                        m.left, v) - m.left, q)
                }
                g && (g.group || console.log("WARNING: Moved object in bounds but there was no event group. This may break undo."), null !== l && h.i.ca(l))
            }
        }
    });
    h.ek(f);
    h.V.Va();
    h.w.Va();
    h.D.Va();
    return f
};
h.Jy = function (a) {
    var c = a.options, d = y(a);
    h.Ba(d.parentNode, "contextmenu", null, function (e) {
        h.g.Ml(e) || e.preventDefault()
    });
    d = h.Ba(window, "resize", null, function () {
        h.ec(!0);
        h.ek(a)
    });
    a.cm = d;
    h.nf.Kw();
    c.Ko && (a.qa ? a.qa.Pa(a) : a.R && (a.R.Pa(a), a.R.show(c.Ko.childNodes), a.R.vF()));
    d = h.Da.pc;
    c.$s && (d = a.Nb.Pa(d));
    c.$a && c.$a.controls && a.Zg.Pa(d);
    c.vb && c.vb.scrollbars ? (a.eb = new h.oh(a), a.eb.resize()) : a.Tj({x: .5, y: .5});
    c.Cy && h.nf.Vy(c.Rt, a)
};
h.nf.Kw = function () {
    h.Ex || (h.Ba(document, "scroll", null, function () {
        for (var a = h.ab.getAll(), c = 0, d; d = a[c]; c++) d.kk && d.kk()
    }), h.Ba(document, "keydown", null, h.lz), h.Zf(document, "touchend", h.uf), h.Zf(document, "touchcancel", h.uf), h.g.userAgent.wi && h.Ba(window, "orientationchange", document, function () {
        h.ek(h.Ya())
    }));
    h.Ex = !0
};
h.nf.Vy = function (a, c) {
    function d() {
        for (; f.length;) h.lb(f.pop());
        e.preload()
    }

    var e = c.Od;
    e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
    e.load([a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"], "disconnect");
    e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
    var f = [];
    f.push(h.Ba(document, "mousemove", null, d, !0));
    f.push(h.Ba(document, "touchstart", null, d, !0))
};
h.Bd = function (a) {
    this.name = a
};
h.A = function (a, c, d) {
    if (!c) throw Error("Cannot create a node without a location.");
    this.ik = a;
    this.qj = h.A.Ny(a);
    this.Z = c;
    (a = d || null) && a.Eu && (this.Fu = a.Eu)
};
h.A.types = {
    Nc: "field",
    uc: "block",
    re: "input",
    nh: "output",
    hd: "next",
    kd: "previous",
    Kd: "stack",
    Wf: "workspace"
};
h.A.ev = -20;
h.A.Ny = function (a) {
    switch (a) {
        case h.A.types.kd:
        case h.A.types.hd:
        case h.A.types.re:
        case h.A.types.nh:
            return !0
    }
    return !1
};
h.A.Xi = function (a) {
    return new h.A(h.A.types.Nc, a)
};
h.A.Rd = function (a) {
    return a ? a.type == h.Ha || a.type == h.Ca && a.Vd() ? h.A.fg(a.Vd()) : a.type == h.Ca ? new h.A(h.A.types.hd, a) : a.type == h.jd ? new h.A(h.A.types.nh, a) : a.type == h.ld ? new h.A(h.A.types.kd, a) : null : null
};
h.A.fg = function (a) {
    return a ? new h.A(h.A.types.re, a.connection) : null
};
h.A.Ee = function (a) {
    return new h.A(h.A.types.uc, a)
};
h.A.Yi = function (a) {
    return new h.A(h.A.types.Kd, a)
};
h.A.Zi = function (a, c) {
    return new h.A(h.A.types.Wf, a, {Eu: c})
};
b = h.A.prototype;
b.cb = function () {
    return this.ik
};

function nc(a, c) {
    a = a.Z;
    a instanceof h.rk || (a = a.B);
    if (!a || !a.C) return null;
    var d = N(a);
    a = D(d.C, !0);
    for (var e = 0, f; f = a[e]; e++) if (d.id == f.id) return c = e + (c ? 1 : -1), -1 == c || c == a.length ? null : h.A.Yi(a[c]);
    throw Error("Couldn't find " + (c ? "next" : "previous") + " stack?!");
}

function oc(a) {
    if (!a) return null;
    do var c = a.N && A(a.N); while (c && t(c) == a && (a = c));
    return (c = a.N || a.L) && c.ka && c.ka.Vd() ? h.A.fg(c.ka.Vd()) : h.A.Yi(a)
}

b.next = function () {
    switch (this.ik) {
        case h.A.types.Kd:
            return nc(this, !0);
        case h.A.types.nh:
            return h.A.Ee(this.Z.B);
        case h.A.types.Nc:
            a:{
                var a = this.Z, c = a.Vd();
                var d = a.B;
                a = c.Ea.indexOf(a) + 1;
                c = d.K.indexOf(c);
                for (var e; e = d.K[c]; c++) {
                    for (var f = e.Ea; a < f.length;) {
                        if (f[a].Gd) {
                            d = h.A.Xi(f[a]);
                            break a
                        }
                        a++
                    }
                    a = 0;
                    if (e.connection) {
                        d = h.A.fg(e);
                        break a
                    }
                }
                d = null
            }
            return d;
        case h.A.types.re:
            a:{
                a = this.Z.Vd();
                d = a.B;
                for (a = d.K.indexOf(a) + 1; c = d.K[a]; a++) {
                    e = c.Ea;
                    f = 0;
                    for (var g; g = e[f]; f++) if (g.Gd) {
                        d = h.A.Xi(g);
                        break a
                    }
                    if (c.connection) {
                        d =
                            h.A.fg(c);
                        break a
                    }
                }
                d = null
            }
            return d;
        case h.A.types.uc:
            if (d = this.Z.W) return h.A.Rd(d);
            break;
        case h.A.types.kd:
            return h.A.Ee(this.Z.B);
        case h.A.types.hd:
            if (d = this.Z.ka) return h.A.Rd(d)
    }
    return null
};
b.Cl = function () {
    switch (this.ik) {
        case h.A.types.Wf:
            var a = D(this.Z, !0);
            if (0 < a.length) return h.A.Yi(a[0]);
            break;
        case h.A.types.Kd:
            a = this.Z;
            var c = a.N || a.L;
            return c ? h.A.Rd(c) : h.A.Ee(a);
        case h.A.types.uc:
            a:{
                a = this.Z.K;
                c = 0;
                for (var d; d = a[c]; c++) {
                    for (var e = d.Ea, f = 0, g; g = e[f]; f++) if (g.Gd) {
                        a = h.A.Xi(g);
                        break a
                    }
                    if (d.connection) {
                        a = h.A.fg(d);
                        break a
                    }
                }
                a = null
            }
            return a;
        case h.A.types.re:
            if (a = this.Z.ka) return h.A.Rd(a)
    }
    return null
};
b.Bf = function () {
    switch (this.ik) {
        case h.A.types.Kd:
            return nc(this, !1);
        case h.A.types.Nc:
            a:{
                var a = this.Z;
                var c = a.Vd();
                var d = a.B;
                a = c.Ea.indexOf(a) - 1;
                for (var e = d.K.indexOf(c), f; f = d.K[e]; e--) {
                    if (f.connection && f !== c) {
                        c = h.A.fg(f);
                        break a
                    }
                    for (f = f.Ea; -1 < a;) {
                        if (f[a].Gd) {
                            c = h.A.Xi(f[a]);
                            break a
                        }
                        a--
                    }
                    0 <= e - 1 && (a = d.K[e - 1].Ea.length - 1)
                }
                c = null
            }
            return c;
        case h.A.types.re:
            a:{
                c = this.Z.Vd();
                d = c.B;
                for (a = d.K.indexOf(c); e = d.K[a]; a--) {
                    if (e.connection && e !== c) {
                        c = h.A.fg(e);
                        break a
                    }
                    e = e.Ea;
                    f = e.length - 1;
                    for (var g; g = e[f]; f--) if (g.Gd) {
                        c =
                            h.A.Xi(g);
                        break a
                    }
                }
                c = null
            }
            return c;
        case h.A.types.uc:
            c = this.Z.L;
            if (c = this.Z.N || c) return h.A.Rd(c);
            break;
        case h.A.types.kd:
            if ((c = this.Z.ka) && !c.Vd()) return h.A.Rd(c);
            break;
        case h.A.types.hd:
            return h.A.Ee(this.Z.B)
    }
    return null
};
b.Wl = function () {
    switch (this.ik) {
        case h.A.types.Kd:
            var a = this.Z.Fa();
            return h.A.Zi(this.Z.C, new h.g.M(a.x, a.y + h.A.ev));
        case h.A.types.nh:
            return (a = this.Z.ka) ? h.A.Rd(a) : h.A.Yi(this.Z.B);
        case h.A.types.Nc:
            return h.A.Ee(this.Z.B);
        case h.A.types.re:
            return h.A.Ee(this.Z.B);
        case h.A.types.uc:
            return oc(this.Z);
        case h.A.types.kd:
            return oc(this.Z.B);
        case h.A.types.hd:
            return oc(this.Z.B)
    }
    return null
};
h.g.gb = {
    nE: 0,
    mC: 3,
    Su: 8,
    kw: 9,
    FC: 12,
    qq: 13,
    bw: 16,
    RA: 17,
    Nu: 18,
    dD: 19,
    EA: 20,
    rq: 27,
    ND: 32,
    cD: 33,
    bD: 34,
    iB: 35,
    SB: 36,
    cC: 37,
    pw: 38,
    wD: 39,
    gv: 40,
    gD: 43,
    kD: 44,
    Im: 45,
    pi: 46,
    ZERO: 48,
    ONE: 49,
    dE: 50,
    WD: 51,
    GB: 52,
    DB: 53,
    JD: 54,
    HD: 55,
    hB: 56,
    BC: 57,
    BB: 59,
    zB: 61,
    yB: 173,
    AB: 163,
    mD: 63,
    vA: 64,
    Hu: 65,
    xA: 66,
    Wu: 67,
    dv: 68,
    E: 69,
    lB: 70,
    HB: 71,
    NB: 72,
    yv: 73,
    YB: 74,
    Fv: 75,
    ZB: 76,
    lC: 77,
    zC: 78,
    VC: 79,
    aD: 80,
    Q: 81,
    nD: 82,
    $v: 83,
    jw: 84,
    eE: 85,
    qw: 86,
    tw: 87,
    xr: 88,
    qE: 89,
    xw: 90,
    Ov: 91,
    oE: 92,
    PA: 93,
    UC: 96,
    NC: 97,
    TC: 98,
    SC: 99,
    JC: 100,
    IC: 101,
    RC: 102,
    QC: 103,
    HC: 104,
    MC: 105,
    LC: 106,
    PC: 107,
    KC: 109,
    OC: 110,
    GC: 111,
    mB: 112,
    qB: 113,
    rB: 114,
    sB: 115,
    tB: 116,
    uB: 117,
    vB: 118,
    wB: 119,
    xB: 120,
    nB: 121,
    oB: 122,
    pB: 123,
    EC: 144,
    CD: 145,
    CB: 166,
    bC: 183,
    ED: 186,
    SA: 189,
    jB: 187,
    MA: 188,
    eD: 190,
    KD: 191,
    rA: 192,
    XD: 192,
    ID: 222,
    WC: 219,
    yA: 220,
    IA: 221,
    mE: 224,
    nC: 224,
    oC: 91,
    pC: 93,
    lE: 229,
    kE: 252,
    fD: 255
};
h.Ra = {};
h.Ra.Na = {};
h.Ra.Na.zg = {};
h.Ra.Na.Xo = {bw: "Shift", $u: "Control", Nu: "Alt", Ov: "Meta"};
h.Ra.Na.xF = function (a, c) {
    var d = h.Ra.Na.ky(c);
    d && delete h.Ra.Na.zg[d];
    h.Ra.Na.zg[a] = c
};
h.Ra.Na.Pz = function (a) {
    h.Ra.Na.zg = a
};
h.Ra.Na.RE = function () {
    var a = {};
    h.g.object.Rh(a, h.Ra.Na.zg);
    return a
};
h.Ra.Na.Sx = function (a) {
    return h.Ra.Na.zg[a]
};
h.Ra.Na.ky = function (a) {
    for (var c = Object.keys(h.Ra.Na.zg), d = 0, e; e = c[d]; d++) if (h.Ra.Na.zg[e].name === a.name) return e;
    return null
};
h.Ra.Na.Mz = function (a) {
    for (var c = h.g.object.values(h.Ra.Na.Xo), d = "", e = 0, f; f = c[e]; e++) a.getModifierState(f) && (d += f);
    return d += a.keyCode
};
h.Ra.Na.px = function () {
    for (var a = h.g.gb.Fv, c = [h.Ra.Na.Xo.$u], d = "", e = h.g.object.values(h.Ra.Na.Xo), f = 0, g; g = c[f]; f++) if (-1 < e.indexOf(g)) d += g; else throw Error(g + " is not a valid modifier key.");
    return d + a
};
h.Ra.Na.nx = function () {
    var a = {}, c = h.Ra.Na.px();
    a[h.g.gb.tw] = h.navigation.sm;
    a[h.g.gb.Hu] = h.navigation.Tp;
    a[h.g.gb.$v] = h.navigation.rm;
    a[h.g.gb.dv] = h.navigation.Sp;
    a[h.g.gb.yv] = h.navigation.Ju;
    a[h.g.gb.qq] = h.navigation.Ku;
    a[h.g.gb.xr] = h.navigation.Iu;
    a[h.g.gb.jw] = h.navigation.Lu;
    a[h.g.gb.E] = h.navigation.qm;
    a[h.g.gb.rq] = h.navigation.qm;
    a[c] = h.navigation.Up;
    return a
};
h.navigation = {};
h.navigation.Ph = null;
h.navigation.dr = 1;
h.navigation.Lk = 2;
h.navigation.er = 3;
h.navigation.gg = h.navigation.Lk;
h.navigation.Oa = {
    kd: "previous",
    hd: "next",
    Hm: "in",
    Rm: "out",
    Im: "insert",
    Nm: "mark",
    pq: "disconnect",
    ir: "toolbox",
    Em: "exit",
    dn: "toggle_keyboard_nav"
};
h.navigation.zs = function () {
    var a = h.Ya(), c = a.qa;
    c && (h.navigation.gg = h.navigation.er, h.navigation.au(!1), a.Ec.qb || h.navigation.Vo(), c.wF())
};
h.navigation.ys = function () {
    h.navigation.gg = h.navigation.dr;
    var a = h.Ya();
    var c = a.qa;
    c = c ? c.R : ic(a);
    a.Ec.qb || h.navigation.Vo();
    c && c.yl() && (a = D(c.yl(), !0), 0 < a.length && (a = a[0], a = h.A.Yi(a), O(h.navigation.hf(), a)))
};
h.navigation.rl = function () {
    h.ec();
    var a = h.Ya(), c = a.ya, d = !!a.qa, e = D(a, !0);
    h.navigation.au(d);
    h.navigation.gg = h.navigation.Lk;
    0 < e.length ? O(c, h.navigation.vo(e[0])) : (a = h.A.Zi(a, new h.g.M(100, 100)), O(c, a))
};
h.navigation.hf = function () {
    var a = h.Ya(), c = null;
    a.$ && (c = (a = (c = a.qa) ? c.R : ic(a)) ? a.F.ya : null);
    return c
};
h.navigation.My = function () {
    var a = h.Ya(), c = ic(a);
    if (c && c.isVisible()) {
        var d = h.navigation.hf().qb.Z;
        d.isEnabled() ? (c = c.Yr(d), c.wa(), la(c, !1), O(a.ya, h.A.Ee(c)), h.navigation.zt() || h.navigation.Zb("Something went wrong while inserting a block from the flyout."), h.navigation.rl(), O(a.ya, h.navigation.vo(c)), h.navigation.Bz()) : h.navigation.Zb("Can't insert a disabled block.")
    } else h.navigation.Zb("Trying to insert from the flyout when the flyout does not  exist or is not visible")
};
h.navigation.au = function (a) {
    h.navigation.hf() && (h.navigation.hf().Ia(), a && ic(h.Ya()).Ia())
};
h.navigation.Zy = function () {
    var a = h.Ya().Ec.qb, c = h.Ya().ya.qb;
    if (!a) return h.navigation.Zb("Cannot insert with no marked node."), !1;
    if (!c) return h.navigation.Zb("Cannot insert with no cursor node."), !1;
    a = a.cb();
    c = c.cb();
    return a == h.A.types.Nc ? (h.navigation.Zb("Should not have been able to mark a field."), !1) : a == h.A.types.uc ? (h.navigation.Zb("Should not have been able to mark a block."), !1) : a == h.A.types.Kd ? (h.navigation.Zb("Should not have been able to mark a stack."), !1) : c == h.A.types.Nc ? (h.navigation.Zb("Cannot attach a field to anything else."),
        !1) : c == h.A.types.Wf ? (h.navigation.Zb("Cannot attach a workspace to anything else."), !1) : !0
};
h.navigation.cz = function (a, c) {
    if (a.Qa) return h.navigation.Zb("Cannot move a shadow block to the workspace."), !1;
    a.getParent() && B(a, !1);
    a.moveTo(c.Fu);
    return !0
};
h.navigation.zt = function () {
    var a = h.Ya().Ec.qb, c = h.Ya().ya.qb;
    if (!h.navigation.Zy()) return !1;
    var d = a.cb(), e = c.cb(), f = c.Z, g = a.Z;
    if (a.qj && c.qj) return h.navigation.rd(f, g);
    if (a.qj && (e == h.A.types.uc || e == h.A.types.Kd)) return h.navigation.jt(f, g);
    if (d == h.A.types.Wf) return c = h.navigation.po(c), h.navigation.cz(c, a);
    h.navigation.Zb("Unexpected state in Blockly.navigation.modify_.");
    return !1
};
h.navigation.Ax = function (a, c) {
    var d = a.B, e = c.B;
    N(d) == N(e) && (-1 < p(d, !1).indexOf(e) ? h.navigation.vl(c).disconnect() : h.navigation.vl(a).disconnect())
};
h.navigation.Yo = function (a, c) {
    if (!a || !c) return !1;
    var d = a.B;
    return Da(c, a) == h.aa.vk ? (h.navigation.Ax(a, c), I(c) || a.type != h.Ca && a.type != h.Ha || N(d).moveBy(c.fb - a.fb, c.Aa - a.Aa), c.connect(a), !0) : !1
};
h.navigation.vl = function (a) {
    var c = a.B;
    return I(a) ? c.N ? c.N : c.L ? c.L : null : a
};
h.navigation.Ps = function (a) {
    return I(a) ? a : a.ka ? a.ka : null
};
h.navigation.rd = function (a, c) {
    if (!a || !c) return !1;
    var d = h.navigation.vl(a), e = h.navigation.Ps(c), f = h.navigation.Ps(a), g = h.navigation.vl(c);
    if (d && e && h.navigation.Yo(d, e) || f && g && h.navigation.Yo(f, g) || h.navigation.Yo(a, c)) return !0;
    try {
        Ea(c, a)
    } catch (k) {
        h.navigation.Zb("Connection failed with error: " + k)
    }
    return !1
};
h.navigation.jt = function (a, c) {
    switch (c.type) {
        case h.ld:
            if (h.navigation.rd(a.W, c)) return !0;
            break;
        case h.Ca:
            if (h.navigation.rd(a.N, c)) return !0;
            break;
        case h.Ha:
            if (h.navigation.rd(a.L, c)) return !0;
            break;
        case h.jd:
            for (var d = 0; d < a.K.length; d++) {
                var e = a.K[d].connection;
                if (e && e.type === h.Ha && h.navigation.rd(e, c)) return !0
            }
            if (a.L && h.navigation.rd(a.L, c)) return !0
    }
    h.navigation.Zb("This block can not be inserted at the marked location.");
    return !1
};
h.navigation.zx = function () {
    var a = h.Ya(), c = a.ya.qb;
    if (c.qj) {
        var d = c.Z;
        d.isConnected() ? (c = I(d) ? d : d.ka, d = I(d) ? d.ka : d, d.B.Qa ? h.navigation.Qo("Cannot disconnect a shadow block") : (c.disconnect(), Nb(d, c), Sa(N(c.B)), c = h.A.Rd(c), O(a.ya, c))) : h.navigation.Qo("Cannot disconnect unconnected connection")
    } else h.navigation.Qo("Cannot disconnect blocks when the cursor is not on a connection")
};
h.navigation.Vo = function () {
    var a = h.Ya();
    O(a.Ec, a.ya.qb)
};
h.navigation.Bz = function () {
    var a = h.Ya();
    O(a.Ec, null);
    a.Ec.Ia()
};
h.navigation.bi = function (a) {
    h.navigation.gg = a
};
h.navigation.po = function (a) {
    return a ? a.cb() === h.A.types.uc ? a.Z : a.cb() === h.A.types.Kd ? a.Z : a.cb() === h.A.types.Wf ? null : a.Z.B : null
};
h.navigation.vo = function (a) {
    var c = a.N || a.L;
    return c ? h.A.Rd(c) : h.A.Ee(a)
};
h.navigation.Et = function (a) {
    var c = h.Ya();
    if (c && (c = c.ya)) {
        var d = h.navigation.po(c.qb);
        d === a ? d.getParent() ? (a = d.N || d.L) && O(c, h.A.Rd(a.ka)) : O(c, h.A.Zi(d.C, d.Fa())) : -1 < ma(a, !1).indexOf(d) && O(c, h.A.Zi(d.C, d.Fa()))
    }
};
h.navigation.jF = function (a) {
    var c = h.Ya().ya;
    if (c) {
        var d = h.navigation.po(c.qb);
        d === a && O(c, h.A.Ee(d))
    }
};
h.navigation.co = function () {
    h.Oe || (h.Oe = !0, h.navigation.rl())
};
h.navigation.yx = function () {
    if (h.Oe) {
        var a = h.Ya();
        h.Oe = !1;
        a.ya.Ia();
        a.Ec.Ia();
        h.navigation.hf() && h.navigation.hf().Ia()
    }
};
h.navigation.Qo = function (a) {
    h.navigation.Ph ? h.navigation.Ph("log", a) : console.log(a)
};
h.navigation.Zb = function (a) {
    h.navigation.Ph ? h.navigation.Ph("warn", a) : console.warn(a)
};
h.navigation.LE = function (a) {
    h.navigation.Ph ? h.navigation.Ph("error", a) : console.error(a)
};
h.navigation.Kt = function (a) {
    a = h.Ra.Na.Mz(a);
    return (a = h.Ra.Na.Sx(a)) ? h.navigation.Fg(a) : !1
};
h.navigation.Fg = function (a) {
    var c = h.Ya().options.readOnly, d = !1;
    h.Oe ? c ? -1 < h.navigation.Zv.indexOf(a) && (d = h.navigation.Vs(a)) : d = h.navigation.Vs(a) : a.name === h.navigation.Oa.dn && (h.navigation.co(), d = !0);
    return d
};
h.navigation.Vs = function (a) {
    var c = h.Ya();
    if (a.name === h.navigation.Oa.dn) return h.navigation.yx(), !0;
    if (a.name === h.navigation.Oa.ir) return c.qa ? h.navigation.zs() : h.navigation.ys(), !0;
    if (h.navigation.gg === h.navigation.Lk) {
        c = c.ya.qb;
        var d = !1;
        c && c.cb() === h.A.types.Nc && (d = c.Z.Fg(a));
        d || (d = h.navigation.kA(a));
        return d
    }
    return h.navigation.gg === h.navigation.dr ? h.navigation.Qx(a) : h.navigation.gg === h.navigation.er ? h.navigation.eA(a) : !1
};
h.navigation.kA = function (a) {
    var c = h.Ya();
    switch (a.name) {
        case h.navigation.Oa.kd:
            return c.ya.Bf(), !0;
        case h.navigation.Oa.Rm:
            return c.ya.Wl(), !0;
        case h.navigation.Oa.hd:
            return c.ya.next(), !0;
        case h.navigation.Oa.Hm:
            return c.ya.Cl(), !0;
        case h.navigation.Oa.Im:
            return h.navigation.zt(), !0;
        case h.navigation.Oa.Nm:
            return h.navigation.uy(), !0;
        case h.navigation.Oa.pq:
            return h.navigation.zx(), !0;
        default:
            return !1
    }
};
h.navigation.Qx = function (a) {
    switch (a.name) {
        case h.navigation.Oa.kd:
            return h.navigation.hf().Bf(), !0;
        case h.navigation.Oa.Rm:
            return h.navigation.zs(), !0;
        case h.navigation.Oa.hd:
            return h.navigation.hf().next(), !0;
        case h.navigation.Oa.Nm:
            return h.navigation.My(), !0;
        case h.navigation.Oa.Em:
            return h.navigation.rl(), !0;
        default:
            return !1
    }
};
h.navigation.eA = function (a) {
    if (a.name === h.navigation.Oa.Em) return h.navigation.rl(), !0;
    var c = h.Ya().qa.Fg(a);
    return c || a.name !== h.navigation.Oa.Hm ? c : (h.navigation.ys(), !0)
};
h.navigation.uy = function () {
    var a = h.Ya().ya.qb, c = a.cb();
    c == h.A.types.Nc ? a.Z.Wj() : a.qj || c == h.A.types.Wf ? h.navigation.Vo() : c == h.A.types.uc ? h.navigation.Zb("Cannot mark a block.") : c == h.A.types.Kd && h.navigation.Zb("Cannot mark a stack.")
};
h.navigation.sm = new h.Bd(h.navigation.Oa.kd);
h.navigation.Tp = new h.Bd(h.navigation.Oa.Rm);
h.navigation.rm = new h.Bd(h.navigation.Oa.hd);
h.navigation.Sp = new h.Bd(h.navigation.Oa.Hm);
h.navigation.Ju = new h.Bd(h.navigation.Oa.Im);
h.navigation.Ku = new h.Bd(h.navigation.Oa.Nm);
h.navigation.Iu = new h.Bd(h.navigation.Oa.pq);
h.navigation.Lu = new h.Bd(h.navigation.Oa.ir);
h.navigation.qm = new h.Bd(h.navigation.Oa.Em);
h.navigation.Up = new h.Bd(h.navigation.Oa.dn);
h.navigation.Zv = [h.navigation.sm, h.navigation.Tp, h.navigation.Sp, h.navigation.rm, h.navigation.Up];
h.Rf = function (a) {
    this.Fz = Object.create(null);
    if (a) {
        a = a.split(",");
        for (var c = 0; c < a.length; c++) this.Fz[a[c]] = !0
    }
    this.reset()
};
h.Rf.XA = "DEVELOPER_VARIABLE";
h.Rf.prototype.reset = function () {
    this.jg = Object.create(null);
    Object.create(null);
    this.Ta = null
};
h.Rf.Ud = function (a, c) {
    return a.toLowerCase() == c.toLowerCase()
};
h.hb = {};
h.hb.Sv = h.Rq;
h.hb.Gw = function (a) {
    a = P(a, !1);
    for (var c = [], d = [], e = 0; e < a.length; e++) if (a[e].Fh) {
        var f = a[e].Fh();
        f && (f[2] ? c.push(f) : d.push(f))
    }
    d.sort(h.hb.Yt);
    c.sort(h.hb.Yt);
    return [d, c]
};
h.hb.Yt = function (a, c) {
    return a[0].toLowerCase().localeCompare(c[0].toLowerCase())
};
h.hb.Mx = function (a, c) {
    if (c.cd) return a;
    for (a = a || h.h.UNNAMED_KEY || "unnamed"; !h.hb.Oy(a, c.C, c);) {
        var d = a.match(/^(.*?)(\d+)$/);
        a = d ? d[1] + (parseInt(d[2], 10) + 1) : a + "2"
    }
    return a
};
h.hb.Oy = function (a, c, d) {
    return !h.hb.Qy(a, c, d)
};
h.hb.Qy = function (a, c, d) {
    c = P(c, !1);
    for (var e = 0; e < c.length; e++) if (c[e] != d && c[e].Fh) {
        var f = c[e].Fh();
        if (h.Rf.Ud(f[0], a)) return !0
    }
    return !1
};
h.hb.qF = function (a) {
    a = a.trim();
    var c = h.hb.Mx(a, this.B), d = this.getValue();
    if (d != a && d != c) {
        a = P(this.B.C, !1);
        for (var e = 0; e < a.length; e++) a[e].Ez && a[e].Ez(d, c)
    }
    return c
};
h.hb.mg = function (a) {
    function c(g, k) {
        for (var l = 0; l < g.length; l++) {
            var m = g[l][0], n = g[l][1], q = h.g.xml.createElement("block");
            q.setAttribute("type", k);
            q.setAttribute("gap", 16);
            var r = h.g.xml.createElement("mutation");
            r.setAttribute("name", m);
            q.appendChild(r);
            for (m = 0; m < n.length; m++) {
                var v = h.g.xml.createElement("arg");
                v.setAttribute("name", n[m]);
                r.appendChild(v)
            }
            d.push(q)
        }
    }

    var d = [];
    if (h.zb.procedures_defnoreturn) {
        var e = h.g.xml.createElement("block");
        e.setAttribute("type", "procedures_defnoreturn");
        e.setAttribute("gap",
            16);
        var f = h.g.xml.createElement("field");
        f.setAttribute("name", "NAME");
        f.appendChild(h.g.xml.createTextNode(h.h.PROCEDURES_DEFNORETURN_PROCEDURE));
        e.appendChild(f);
        d.push(e)
    }
    h.zb.procedures_defreturn && (e = h.g.xml.createElement("block"), e.setAttribute("type", "procedures_defreturn"), e.setAttribute("gap", 16), f = h.g.xml.createElement("field"), f.setAttribute("name", "NAME"), f.appendChild(h.g.xml.createTextNode(h.h.PROCEDURES_DEFRETURN_PROCEDURE)), e.appendChild(f), d.push(e));
    h.zb.procedures_ifreturn && (e = h.g.xml.createElement("block"),
        e.setAttribute("type", "procedures_ifreturn"), e.setAttribute("gap", 16), d.push(e));
    d.length && d[d.length - 1].setAttribute("gap", 24);
    a = h.hb.Gw(a);
    c(a[0], "procedures_callnoreturn");
    c(a[1], "procedures_callreturn");
    return d
};
h.hb.Yx = function (a, c) {
    var d = [];
    c = P(c, !1);
    for (var e = 0; e < c.length; e++) if (c[e].oy) {
        var f = c[e].oy();
        f && h.Rf.Ud(f, a) && d.push(c[e])
    }
    return d
};
h.hb.kF = function (a) {
    var c = h.i.Mb, d = a.Fh()[0], e = a.Wb(!0);
    a = h.hb.Yx(d, a.C);
    d = 0;
    for (var f; f = a[d]; d++) {
        var g = f.Wb();
        g = g && h.I.Sd(g);
        f.yc(e);
        var k = f.Wb();
        k = k && h.I.Sd(k);
        g != k && (h.i.Mb = !1, h.i.Ma(new h.i.$g(f, "mutation", null, g, k)), h.i.Mb = c)
    }
};
h.hb.OE = function (a, c) {
    c = D(c, !1);
    for (var d = 0; d < c.length; d++) if (c[d].Fh) {
        var e = c[d].Fh();
        if (e && h.Rf.Ud(e[0], a)) return c[d]
    }
    return null
};
h.Pk = function (a, c, d, e) {
    this.C = a;
    this.name = c;
    this.type = d || "";
    this.Jh = e || h.g.He();
    h.i.Ma(new h.i.nd(this))
};
h.Pk.prototype.ib = function () {
    return this.Jh
};
h.Pk.ix = function (a, c) {
    a = a.name.toLowerCase();
    c = c.name.toLowerCase();
    return a < c ? -1 : a == c ? 0 : 1
};
h.na = {};
h.na.Sv = h.kr;
h.na.Hw = function (a) {
    var c = P(a, !1);
    a = Object.create(null);
    for (var d = 0; d < c.length; d++) {
        var e = na(c[d]);
        if (e) for (var f = 0; f < e.length; f++) {
            var g = e[f], k = g.ib();
            k && (a[k] = g)
        }
    }
    c = [];
    for (k in a) c.push(a[k]);
    return c
};
h.na.sE = function () {
    console.warn("Deprecated call to Blockly.Variables.allUsedVariables. Use Blockly.Variables.allUsedVarModels instead.\nIf this is a major issue please file a bug on GitHub.")
};
h.na.Wp = {};
h.na.rE = function (a) {
    a = P(a, !1);
    for (var c = Object.create(null), d = 0, e; e = a[d]; d++) {
        var f = e.PE;
        !f && e.iy && (f = e.iy, h.na.Wp[e.type] || (console.warn("Function getDeveloperVars() deprecated. Use getDeveloperVariables() (block type '" + e.type + "')"), h.na.Wp[e.type] = !0));
        if (f) for (e = f(), f = 0; f < e.length; f++) c[e[f]] = !0
    }
    return Object.keys(c)
};
h.na.mg = function (a) {
    var c = [], d = document.createElement("button");
    d.setAttribute("text", "%{BKY_NEW_VARIABLE}");
    d.setAttribute("callbackKey", "CREATE_VARIABLE");
    mc(a, function (e) {
        h.na.Zr(e.UE())
    });
    c.push(d);
    a = h.na.Px(a);
    return c = c.concat(a)
};
h.na.Px = function (a) {
    a = a.xl("");
    var c = [];
    if (0 < a.length) {
        var d = a[a.length - 1];
        if (h.zb.variables_set) {
            var e = h.g.xml.createElement("block");
            e.setAttribute("type", "variables_set");
            e.setAttribute("gap", h.zb.math_change ? 8 : 24);
            e.appendChild(h.na.ho(d));
            c.push(e)
        }
        h.zb.math_change && (e = h.g.xml.createElement("block"), e.setAttribute("type", "math_change"), e.setAttribute("gap", h.zb.variables_get ? 20 : 8), e.appendChild(h.na.ho(d)), d = h.I.Ue('<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'),
            e.appendChild(d), c.push(e));
        if (h.zb.variables_get) {
            a.sort(h.Pk.ix);
            d = 0;
            for (var f; f = a[d]; d++) e = h.g.xml.createElement("block"), e.setAttribute("type", "variables_get"), e.setAttribute("gap", 8), e.appendChild(h.na.ho(f)), c.push(e)
        }
    }
    return c
};
h.na.Rx = function (a) {
    a = a.ng();
    var c = "";
    if (a.length) for (var d = 1, e = 0, f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e); !c;) {
        for (var g = !1, k = 0; k < a.length; k++) if (a[k].name.toLowerCase() == f) {
            g = !0;
            break
        }
        g ? (e++, 25 == e && (e = 0, d++), f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e), 1 < d && (f += d)) : c = f
    } else c = "i";
    return c
};
h.na.Zr = function (a, c, d) {
    function e(g) {
        h.na.Zt(h.h.NEW_VARIABLE_TITLE, g, function (k) {
            if (k) {
                var l = h.na.ez(k, a);
                if (l) {
                    var m = k.toLowerCase();
                    if (l.type == f) var n = h.h.VARIABLE_ALREADY_EXISTS.replace("%1", m); else n = h.h.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE, n = n.replace("%1", m).replace("%2", l.type);
                    h.alert(n, function () {
                        e(k)
                    })
                } else a.sd(k, f), c && c(k)
            } else c && c(null)
        })
    }

    var f = d || "";
    e("")
};
h.na.sd = h.na.Zr;
h.na.$t = function (a, c) {
    function d(e) {
        var f = h.h.RENAME_VARIABLE_TITLE.replace("%1", c.name);
        h.na.Zt(f, e, function (g) {
            if (g) {
                var k = h.na.fz(g, c.type, a);
                k ? (k = h.h.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace("%1", g.toLowerCase()).replace("%2", k.type), h.alert(k, function () {
                    d(g)
                })) : a.Kg(c.ib(), g)
            }
        })
    }

    d("")
};
h.na.Zt = function (a, c, d) {
    h.prompt(a, c, function (e) {
        e && (e = e.replace(/[\s\xa0]+/g, " ").trim(), e == h.h.RENAME_VARIABLE || e == h.h.NEW_VARIABLE) && (e = null);
        d(e)
    })
};
h.na.fz = function (a, c, d) {
    d = d.Ta.ng();
    a = a.toLowerCase();
    for (var e = 0, f; f = d[e]; e++) if (f.name.toLowerCase() == a && f.type != c) return f;
    return null
};
h.na.ez = function (a, c) {
    c = c.Ta.ng();
    a = a.toLowerCase();
    for (var d = 0, e; e = c[d]; d++) if (e.name.toLowerCase() == a) return e;
    return null
};
h.na.ho = function (a) {
    var c = h.g.xml.createElement("field");
    c.setAttribute("name", "VAR");
    c.setAttribute("id", a.ib());
    c.setAttribute("variabletype", a.type);
    a = h.g.xml.createTextNode(a.name);
    c.appendChild(a);
    return c
};
h.na.SE = function (a, c, d, e) {
    var f = h.na.kf(a, c, d, e);
    f || (f = h.na.qx(a, c, d, e));
    return f
};
h.na.kf = function (a, c, d, e) {
    var f = a.am;
    if (c) {
        var g = a.og(c);
        !g && f && (g = f.og(c));
        if (g) return g
    }
    if (d) {
        if (void 0 == e) throw Error("Tried to look up a variable by name without a type");
        g = a.kf(d, e);
        !g && f && (g = f.kf(d, e))
    }
    return g
};
h.na.qx = function (a, c, d, e) {
    var f = a.am;
    d || (d = h.na.Rx(a.Ne ? a.Lp : a));
    return f ? f.sd(d, e, c) : a.sd(d, e, c)
};
h.na.Tx = function (a, c) {
    a = a.ng();
    var d = [];
    if (c.length != a.length) for (var e = 0; e < a.length; e++) {
        var f = a[e];
        -1 == c.indexOf(f) && d.push(f)
    }
    return d
};
h.V = {};
h.V.ua = null;
h.V.Xb = null;
h.V.dl = null;
h.V.Va = function () {
    h.V.ua || (h.V.ua = document.createElement("div"), h.V.ua.className = "blocklyWidgetDiv", document.body.appendChild(h.V.ua))
};
h.V.show = function (a, c, d) {
    h.V.Ia();
    h.V.Xb = a;
    h.V.dl = d;
    h.V.ua.style.top = h.g.style.Qs().y + "px";
    h.V.ua.style.direction = c ? "rtl" : "ltr";
    h.V.ua.style.display = "block"
};
h.V.Ia = function () {
    h.V.Xb && (h.V.Xb = null, h.V.ua.style.display = "none", h.V.ua.style.left = "", h.V.ua.style.top = "", h.V.dl && h.V.dl(), h.V.dl = null, h.V.ua.innerHTML = "")
};
h.V.isVisible = function () {
    return !!h.V.Xb
};
h.V.jj = function (a) {
    h.V.Xb == a && h.V.Ia()
};
h.V.Mj = function (a, c, d) {
    h.V.ua.style.left = a + "px";
    h.V.ua.style.top = c + "px";
    h.V.ua.style.height = d + "px"
};
h.V.Az = function (a, c, d, e) {
    var f = h.V.Tw(a, c, d);
    a = h.V.Sw(a, c, d, e);
    0 > f ? h.V.Mj(a, 0, d.height + f) : h.V.Mj(a, f, d.height)
};
h.V.Sw = function (a, c, d, e) {
    if (e) return c = Math.max(c.right - d.width, a.left), Math.min(c, a.right - d.width);
    c = Math.min(c.left, a.right - d.width);
    return Math.max(c, a.left)
};
h.V.Tw = function (a, c, d) {
    return c.bottom + d.height >= a.bottom ? c.top - d.height : c.bottom
};
h.VERSION = "uncompiled";
h.Cj = null;
h.selected = null;
h.cursor = null;
h.Oe = !1;
h.cj = [];
h.Pi = null;
h.Vk = null;
h.Bn = null;
h.xE = null;
h.uu = function (a) {
    return {width: a.Gr, height: a.Er}
};
h.sF = function (a) {
    F(a)
};
h.ek = function (a) {
    for (; a.options.Fc;) a = a.options.Fc;
    var c = y(a), d = c.parentNode;
    if (d) {
        var e = d.offsetWidth;
        d = d.offsetHeight;
        c.Gr != e && (c.setAttribute("width", e + "px"), c.Gr = e);
        c.Er != d && (c.setAttribute("height", d + "px"), c.Er = d);
        a.resize()
    }
};
h.lz = function (a) {
    var c = h.Cj;
    if (!(h.g.Ml(a) || c.$ && !c.isVisible())) if (c.options.readOnly) h.navigation.Kt(a); else {
        var d = !1;
        if (a.keyCode == h.g.gb.rq) h.ec(), h.navigation.Fg(h.navigation.qm); else {
            if (h.navigation.Kt(a)) return;
            if (a.keyCode == h.g.gb.Su || a.keyCode == h.g.gb.pi) {
                a.preventDefault();
                if (h.gh.Do()) return;
                h.selected && h.selected.Cc() && (d = !0)
            } else if (a.altKey || a.ctrlKey || a.metaKey) {
                if (h.gh.Do()) return;
                h.selected && h.selected.Cc() && h.selected.mc() && (a.keyCode == h.g.gb.Wu ? (h.ec(), h.Gn(h.selected)) : a.keyCode !=
                    h.g.gb.xr || h.selected.C.Ne || (h.Gn(h.selected), d = !0));
                a.keyCode == h.g.gb.qw ? h.Pi && (a = h.Vk, a.Ne && (a = a.Lp), h.Bn && Xa(a, h.Bn) && (h.i.ca(!0), jc(a), h.i.ca(!1))) : a.keyCode == h.g.gb.xw && (h.ec(), c.Qp(a.shiftKey))
            }
        }
        d && !h.selected.C.Ne && (h.i.ca(!0), h.ec(), h.selected.G(!0, !0), h.i.ca(!1))
    }
};
h.Gn = function (a) {
    if (a.mt) var c = a.Mp(); else {
        c = h.I.$f(a, !0);
        h.I.vx(c);
        var d = a.Fa();
        c.setAttribute("x", a.H ? -d.x : d.x);
        c.setAttribute("y", d.y)
    }
    h.Pi = c;
    h.Vk = a.C;
    h.Bn = a.mt ? null : h.g.Cs(a)
};
h.qs = function (a) {
    var c = h.Pi, d = h.Vk;
    h.Gn(a);
    jc(a.C);
    h.Pi = c;
    h.Vk = d
};
h.lF = function (a) {
    h.g.Ml(a) || a.preventDefault()
};
h.ec = function (a) {
    h.D.Ia();
    h.V.Ia();
    h.w.Bo();
    a || (a = h.Ya(), a.Nb && a.Nb.R && a.Nb.R.Ia(), a.qa && a.qa.R && a.qa.R.on && a.qa.CE())
};
h.Ya = function () {
    return h.Cj
};
h.alert = function (a, c) {
    alert(a);
    c && c()
};
h.confirm = function (a, c) {
    c(confirm(a))
};
h.prompt = function (a, c, d) {
    d(prompt(a, c))
};
h.Ty = function (a) {
    return function () {
        var c = a.type ? 'Block "' + a.type + '": ' : "";
        if (a.output && a.previousStatement) throw Error(c + "Must not have both an output and a previousStatement.");
        a.style && a.style.Je && (this.Je = a.style.Je, a.style = null);
        if (a.style && a.colour) throw Error(c + "Must not have both a colour and a style.");
        if (a.style) {
            var d = a.style;
            try {
                var e = this.C.uo().Pw[d];
                if (e) this.Or = e.colourSecondary, this.Pr = e.colourTertiary, this.Je = e.Je, this.zd(e.colourPrimary); else throw Error("Invalid style name: " + d);
            } catch (r) {
                console.warn(c + "Style does not exist: ", d)
            }
        } else if ("colour" in a) if (void 0 === a.colour) console.warn(c + "Undefined colour value."); else {
            d = a.colour;
            try {
                this.zd(d)
            } catch (r) {
                console.warn(c + "Illegal colour value: ", d)
            }
        }
        for (d = 0; void 0 !== a["message" + d];) {
            var f = a["args" + d] || [], g = a["lastDummyAlign" + d], k = h.g.dA(a["message" + d]), l = [], m = 0;
            e = [];
            for (var n = 0; n < k.length; n++) {
                var q = k[n];
                if ("number" == typeof q) {
                    if (0 >= q || q > f.length) throw Error('Block "' + this.type + '": Message index %' + q + " out of range.");
                    if (l[q]) throw Error('Block "' +
                        this.type + '": Message index %' + q + " duplicated.");
                    l[q] = !0;
                    m++;
                    e.push(f[q - 1])
                } else (q = q.trim()) && e.push(q)
            }
            if (m != f.length) throw Error('Block "' + this.type + '": Message does not reference all ' + f.length + " arg(s).");
            e.length && ("string" == typeof e[e.length - 1] || h.g.Ga.startsWith(e[e.length - 1].type, "field_")) && (n = {type: "input_dummy"}, g && (n.align = g), e.push(n));
            g = {LEFT: h.tm, RIGHT: h.nk, CENTRE: h.Vp};
            f = [];
            for (n = 0; n < e.length; n++) if (l = e[n], "string" == typeof l) f.push([l, void 0]); else {
                k = m = null;
                do if (q = !1, "string" == typeof l) m =
                    new h.Oc(l); else switch (l.type) {
                    case "input_value":
                        k = this.Xf(h.Ha, l.name);
                        break;
                    case "input_statement":
                        k = this.Xf(h.Ca, l.name);
                        break;
                    case "input_dummy":
                        k = yb(this, l.name);
                        break;
                    default:
                        m = h.zc.oa(l), !m && l.alt && (l = l.alt, q = !0)
                } while (q);
                if (m) f.push([m, l.name]); else if (k) {
                    l.check && k.Yh(l.check);
                    l.align && tb(k, g[l.align]);
                    for (l = 0; l < f.length; l++) Q(k, f[l][0], f[l][1]);
                    f.length = 0
                }
            }
            d++
        }
        void 0 !== a.inputsInline && this.Mg(a.inputsInline);
        void 0 !== a.output && this.gm(!0, a.output);
        void 0 !== a.previousStatement && this.hm(!0,
            a.previousStatement);
        void 0 !== a.nextStatement && this.fm(!0, a.nextStatement);
        void 0 !== a.tooltip && (d = a.tooltip, d = h.g.oc(d), this.Gf(d));
        void 0 !== a.enableContextMenu && (d = a.enableContextMenu, this.contextMenu = !!d);
        void 0 !== a.helpUrl && (d = a.helpUrl, this.rg = h.g.oc(d));
        "string" == typeof a.extensions && (console.warn(c + "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" + a.type + "' block."), a.extensions = [a.extensions]);
        void 0 !== a.mutator && h.pa.apply(a.mutator, this, !0);
        if (Array.isArray(a.extensions)) for (c =
                                                  a.extensions, d = 0; d < c.length; ++d) h.pa.apply(c[d], this, !1)
    }
};
h.IE = function (a) {
    for (var c = 0; c < a.length; c++) {
        var d = a[c];
        if (d) {
            var e = d.type;
            null == e || "" === e ? console.warn("Block definition #" + c + " in JSON array is missing a type attribute. Skipping.") : (h.zb[e] && console.warn("Block definition #" + c + ' in JSON array overwrites prior definition of "' + e + '".'), h.zb[e] = {Pa: h.Ty(d)})
        } else console.warn("Block definition #" + c + " in JSON array is " + d + ". Skipping.")
    }
};
h.Ba = function (a, c, d, e, f, g) {
    function k(v) {
        var w = !f;
        v = h.Touch.Vz(v);
        for (var K = 0, L; L = v[K]; K++) if (!w || h.Touch.Ep(L)) h.Touch.Nz(L), d ? e.call(d, L) : e(L), l = !0
    }

    var l = !1, m = [];
    if (h.g.global.PointerEvent && c in h.Touch.Ld) for (var n = 0, q; q = h.Touch.Ld[c][n]; n++) a.addEventListener(q, k, !1), m.push([a, q, k]); else if (a.addEventListener(c, k, !1), m.push([a, c, k]), c in h.Touch.Ld) {
        var r = function (v) {
            k(v);
            var w = !g;
            l && w && v.preventDefault()
        };
        for (n = 0; q = h.Touch.Ld[c][n]; n++) a.addEventListener(q, r, !1), m.push([a, q, r])
    }
    return m
};
h.Zf = function (a, c, d) {
    function e(m) {
        d(m)
    }

    var f = [];
    if (h.g.global.PointerEvent && c in h.Touch.Ld) for (var g = 0, k; k = h.Touch.Ld[c][g]; g++) a.addEventListener(k, e, !1), f.push([a, k, e]); else if (a.addEventListener(c, e, !1), f.push([a, c, e]), c in h.Touch.Ld) {
        var l = function (m) {
            if (m.changedTouches && 1 == m.changedTouches.length) {
                var n = m.changedTouches[0];
                m.clientX = n.clientX;
                m.clientY = n.clientY
            }
            d(m);
            m.preventDefault()
        };
        for (g = 0; k = h.Touch.Ld[c][g]; g++) a.addEventListener(k, l, !1), f.push([a, k, l])
    }
    return f
};
h.lb = function (a) {
    for (; a.length;) {
        var c = a.pop();
        c[0].removeEventListener(c[1], c[2], !1)
    }
};
h.cF = function (a) {
    return /^\s*-?\d+(\.\d+)?\s*$/.test(a)
};
h.Fy = function (a) {
    return h.g.ob.Ey(a)
};
h.Vw = function () {
    h.Ub("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
    h.Ub("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
    h.Ub("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
    h.Ub("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
    h.Ub("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
    h.Ub("MATH_HUE", ["Constants", "Math", "HUE"], 230);
    h.Ub("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
    h.Ub("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
    h.Ub("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
    h.Ub("LISTS_HUE", ["Constants", "Lists", "HUE"],
        260);
    h.Ub("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
    h.Ub("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
    h.Ub("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
    h.Ub("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
    h.Ub("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
    h.Ub("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0)
};
h.Ub = function (a, c, d) {
    for (var e = "Blockly", f = h, g = 0; g < c.length; ++g) e += "." + c[g], f && (f = f[c[g]]);
    f && f !== d && (a = (void 0 === d ? '%1 has been removed. Use Blockly.Msg["%2"].' : '%1 is deprecated and unused. Override Blockly.Msg["%2"].').replace("%1", e).replace("%2", a), console.warn(a))
};
var pc = {
        ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        be: "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0456",
        "be-tarask": "Tara\u0161kievica",
        bg: "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",
        bn: "\u09ac\u09be\u0982\u09b2\u09be",
        br: "Brezhoneg",
        cs: "\u010cesky",
        da: "Dansk",
        de: "Deutsch",
        el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
        en: "English",
        es: "Espa\u00f1ol",
        eu: "Euskara",
        fa: "\u0641\u0627\u0631\u0633\u06cc",
        fi: "Suomi",
        fr: "Fran\u00e7ais",
        gl: "Galego",
        ha: "Hausa",
        he: "\u05e2\u05d1\u05e8\u05d9\u05ea",
        hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
        hu: "Magyar",
        hy: "\u0570\u0561\u0575\u0565\u0580\u0567\u0576",
        ia: "Interlingua",
        id: "Bahasa Indonesia",
        ig: "As\u1ee5s\u1ee5 Igbo",
        is: "\u00cdslenska",
        it: "Italiano",
        ja: "\u65e5\u672c\u8a9e",
        kab: "Taqbaylit",
        ko: "\ud55c\uad6d\uc5b4",
        lt: "Lietuvi\u0173",
        lv: "Latvie\u0161u",
        ms: "Bahasa Melayu",
        my: "\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c",
        nb: "Norsk Bokm\u00e5l",
        nl: "Nederlands, Vlaams",
        pl: "Polski",
        pms: "Piemont\u00e8is",
        pt: "Portugu\u00eas",
        "pt-br": "Portugu\u00eas Brasileiro",
        ro: "Rom\u00e2n\u0103",
        ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
        sc: "Sardu",
        sk: "Sloven\u010dina",
        sl: "Sloven\u0161\u010dina",
        sq: "Shqip",
        sr: "\u0421\u0440\u043f\u0441\u043a\u0438",
        sv: "Svenska",
        th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
        tr: "T\u00fcrk\u00e7e",
        uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
        ur: "\u0627\u064f\u0631\u062f\u064f\u0648\u202c",
        vi: "Ti\u1ebfng Vi\u1ec7t",
        yo: "\u00c8d\u00e8 Yor\u00f9b\u00e1",
        "zh-hans": "\u7b80\u4f53\u4e2d\u6587",
        "zh-hant": "\u6b63\u9ad4\u4e2d\u6587"
    }, qc = "ace ar fa he mzn ps ur".split(" "), U = window.BlocklyGamesLang, rc = window.BlocklyGamesLanguages,
    sc = ".html" == window.location.pathname.substr(-5), C = null;

function tc() {
    return -1 != qc.indexOf(U)
}

var V, uc = Number, vc, wc = window.location.search.match(/[?&]level=([^&]+)/);
vc = wc ? decodeURIComponent(wc[1].replace(/\+/g, "%20")) : "NaN";
var xc = uc(vc);
V = isNaN(xc) ? 1 : h.g.Vb.Ni(1, xc, 10);

function yc() {
    document.title = document.getElementById("title").textContent;
    document.dir = tc() ? "rtl" : "ltr";
    document.head.parentElement.setAttribute("lang", U);
    var a = document.getElementById("languageMenu");
    if (a) {
        for (var c = [], d = 0; d < rc.length; d++) {
            var e = rc[d];
            c.push([pc[e], e])
        }
        c.sort(function (g, k) {
            return g[0] > k[0] ? 1 : g[0] < k[0] ? -1 : 0
        });
        for (d = a.options.length = 0; d < c.length; d++) {
            var f = c[d];
            e = f[1];
            f = new Option(f[0], e);
            e == U && (f.selected = !0);
            a.options.add(f)
        }
        1 >= a.options.length && (a.style.display = "none")
    }
    for (d = 1; 10 >=
    d; d++) a = document.getElementById("level" + d), c = !!zc(d), a && c && (a.className += " level_done");
    (d = document.querySelector('meta[name="viewport"]')) && 725 > screen.availWidth && d.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
    setTimeout(Ac, 1)
}

function zc(a) {
    var c = Bc;
    try {
        var d = window.localStorage[c + a]
    } catch (e) {
    }
    return d
}

function W(a) {
    var c = Cc(a);
    return null === c ? "[Unknown message: " + a + "]" : c
}

function Cc(a) {
    return (a = document.getElementById(a)) ? (a = a.textContent, a = a.replace(/\\n/g, "\n")) : null
}

function Dc(a, c) {
    if (!a) throw TypeError("Element not found: " + a);
    "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener("click", c, !0);
    a.addEventListener("touchend", c, !0)
}

function Ac() {
    if (!sc) {
        window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
        var a = function (d) {
            (a.q = a.q || []).push(arguments)
        };
        window.GoogleAnalyticsFunction = a;
        a.l = 1 * new Date;
        var c = document.createElement("script");
        c.async = 1;
        c.src = "//www.google-analytics.com/analytics.js";
        document.head.appendChild(c);
        a("create", "UA-50448074-1", "auto");
        a("send", "pageview")
    }
};h.g.s = {};
h.g.s.va = function (a, c) {
    return " " + a + "," + c + " "
};
h.g.s.curve = function (a, c) {
    return " " + a + c.join("")
};
h.g.s.moveTo = function (a, c) {
    return " M " + a + "," + c + " "
};
h.g.s.moveBy = function (a, c) {
    return " m " + a + "," + c + " "
};
h.g.s.lineTo = function (a, c) {
    return " l " + a + "," + c + " "
};
h.g.s.line = function (a) {
    return " l" + a.join("")
};
h.g.s.O = function (a, c) {
    return " " + a + " " + c + " "
};
h.g.s.arc = function (a, c, d, e) {
    return a + " " + d + " " + d + " " + c + e
};
h.j.Mf = function () {
    this.Jd = 0;
    this.cw = 3;
    this.Id = 5;
    this.Iq = 8;
    this.bc = 10;
    this.gr = this.Id;
    this.cn = 15;
    this.Ai = 5;
    this.Vf = 8;
    this.Uv = 15;
    this.Tv = 4;
    this.Pv = 12;
    this.kv = 16;
    this.me = 8;
    this.Hk = 15;
    this.hw = 0;
    this.iw = 20;
    this.Tu = 4;
    this.fw = 15;
    this.gw = 100;
    this.ew = 15;
    this.Om = 24;
    this.nv = 14.5;
    this.mv = this.cn + 11;
    this.pv = 2;
    this.ov = this.Om;
    this.$q = h.g.s.moveBy(0, 0);
    this.Cv = 12;
    this.Dv = 6
};
b = h.j.Mf.prototype;
b.Pa = function () {
    this.jh = this.Ro();
    this.kh = this.So();
    this.ue = this.Uo();
    this.Sf = this.To();
    var a = this.me, c = h.g.s.arc("a", "0 0,0", a, h.g.s.va(-a, a)), d = h.g.s.arc("a", "0 0,0", a, h.g.s.va(a, a));
    this.ui = {width: a, height: a, kp: c, Yl: d};
    c = this.me;
    a = h.g.s.moveBy(0, c) + h.g.s.arc("a", "0 0,1", c, h.g.s.va(c, -c));
    c = h.g.s.arc("a", "0 0,1", c, h.g.s.va(-c, -c));
    this.Nq = {Op: a, un: c}
};
b.Ro = function () {
    var a = this.Cv, c = this.Dv, d = h.g.s.line([h.g.s.va(6, 3), h.g.s.va(-12, 6), h.g.s.va(6, 3)]);
    return {height: a, width: c, path: d}
};
b.Uo = function () {
    var a = this.fw, c = this.gw, d = h.g.s.curve("c", [h.g.s.va(30, -a), h.g.s.va(70, -a), h.g.s.va(c, 0)]);
    return {height: a, width: c, path: d}
};
b.To = function () {
    function a(g) {
        g = g ? -1 : 1;
        var k = -g, l = d / 2, m = h.g.s.va(c, g * l);
        return h.g.s.curve("c", [h.g.s.va(0, g * (l + 2.5)), h.g.s.va(-c, k * (l + .5)), h.g.s.va(-c, g * l)]) + h.g.s.curve("s", [h.g.s.va(c, 2.5 * k), m])
    }

    var c = this.Vf, d = this.cn, e = a(!0), f = a(!1);
    return {width: c, height: d, ed: f, Lj: e}
};
b.So = function () {
    function a(k) {
        return h.g.s.line([h.g.s.va(k * e, d), h.g.s.va(3 * k, 0), h.g.s.va(k * e, -d)])
    }

    var c = this.Uv, d = this.Tv, e = (c - 3) / 2, f = a(1), g = a(-1);
    return {width: c, height: d, zf: f, Qt: g}
};
h.j.m = {
    NONE: 0,
    Nc: 1,
    uq: 2,
    wq: 4,
    an: 8,
    $p: 16,
    Aq: 32,
    tq: 64,
    re: 128,
    yq: 256,
    cr: 512,
    Zu: 1024,
    Tm: 2048,
    Pm: 4096,
    Wv: 8192,
    Bm: 16384,
    Lm: 32768,
    Km: 65536,
    Wm: 131072,
    Vm: 262144,
    Eq: 524288,
    Ym: 1048576,
    hn: 2097152,
    wm: 4194304,
    zq: 8388608
};
h.j.m.dC = h.j.m.Lm | h.j.m.Km;
h.j.m.xD = h.j.m.Wm | h.j.m.Vm;
h.j.m.cp = 16777216;
h.j.m.cb = function () {
    h.j.m.hasOwnProperty(void 0) || (h.j.m[void 0] = h.j.m.cp, h.j.m.cp <<= 1);
    return h.j.m[void 0]
};
h.j.m.uj = function (a) {
    return a.type & h.j.m.Nc
};
h.j.m.xg = function (a) {
    return a.type & h.j.m.uq
};
h.j.m.Lh = function (a) {
    return a.type & h.j.m.wq
};
h.j.m.xd = function (a) {
    return a.type & h.j.m.an
};
h.j.m.aF = function (a) {
    return a.type & h.j.m.Aq
};
h.j.m.wd = function (a) {
    return a.type & h.j.m.re
};
h.j.m.tj = function (a) {
    return a.type & h.j.m.tq
};
h.j.m.qf = function (a) {
    return a.type & h.j.m.yq
};
h.j.m.yj = function (a) {
    return a.type & h.j.m.cr
};
h.j.m.Nh = function (a) {
    return a.type & h.j.m.Tm
};
h.j.m.tf = function (a) {
    return a.type & h.j.m.Pm
};
h.j.m.Ry = function (a) {
    return a.type & (h.j.m.Tm | h.j.m.Pm)
};
h.j.m.sf = function (a) {
    return a.type & h.j.m.Km
};
h.j.m.dF = function (a) {
    return a.type & h.j.m.Vm
};
h.j.m.wj = function (a) {
    return a.type & h.j.m.Lm
};
h.j.m.eF = function (a) {
    return a.type & h.j.m.Wm
};
h.j.m.ZE = function (a) {
    return a.type & h.j.m.Bm
};
h.j.m.nt = function (a) {
    return a.type & h.j.m.Eq
};
h.j.m.fF = function (a) {
    return a.type & h.j.m.Ym
};
h.j.m.XE = function (a) {
    return a.type & h.j.m.$p
};
h.j.m.Nl = function (a) {
    return a.type & h.j.m.hn
};
h.j.m.Gl = function (a) {
    return a.type & h.j.m.wm
};
h.j.m.gF = function (a) {
    return a.type & (h.j.m.hn | h.j.m.wm)
};
h.j.m.bF = function (a) {
    return a.type & h.j.m.zq
};
h.j.Ze = function (a) {
    this.height = this.width = 0;
    this.type = h.j.m.NONE;
    this.cf = this.ta = 0;
    this.u = a;
    this.dd = this.u.Hk
};
h.j.aa = function (a, c) {
    h.j.aa.v.constructor.call(this, a);
    this.En = c;
    a:switch (a = this.u, c.type) {
        case h.Ha:
        case h.jd:
            c = a.Sf;
            break a;
        case h.ld:
        case h.Ca:
            c = a.kh;
            break a;
        default:
            throw Error("Unknown connection type");
    }
    this.shape = c;
    this.type |= h.j.m.Zu
};
h.g.object.S(h.j.aa, h.j.Ze);
h.j.Sm = function (a, c) {
    h.j.Sm.v.constructor.call(this, a, c);
    this.type |= h.j.m.Wv;
    this.height = this.shape.height;
    this.width = this.shape.width;
    this.Vc = this.u.Ai;
    this.Ic = this.width
};
h.g.object.S(h.j.Sm, h.j.aa);
h.j.Um = function (a, c) {
    h.j.Um.v.constructor.call(this, a, c);
    this.type |= h.j.m.Tm;
    this.height = this.shape.height;
    this.width = this.shape.width
};
h.g.object.S(h.j.Um, h.j.aa);
h.j.Qm = function (a, c) {
    h.j.Qm.v.constructor.call(this, a, c);
    this.type |= h.j.m.Pm;
    this.height = this.shape.height;
    this.width = this.shape.width
};
h.g.object.S(h.j.Qm, h.j.aa);
h.j.xi = function (a, c) {
    h.j.xi.v.constructor.call(this, a, c.connection);
    this.type |= h.j.m.re;
    this.input = c;
    this.align = c.align;
    (this.eg = c.connection && A(c.connection) ? A(c.connection) : null) ? (a = J(this.eg), this.Si = a.width, this.Xk = a.height) : this.Xk = this.Si = 0;
    this.connection = c.connection;
    this.Vc = 0
};
h.g.object.S(h.j.xi, h.j.aa);
h.j.Ye = function (a, c) {
    h.j.Ye.v.constructor.call(this, a, c);
    this.type |= h.j.m.yq;
    this.eg ? (this.width = this.Si, this.height = this.Xk) : (this.height = this.u.mv, this.width = this.shape.width + this.u.nv);
    this.Vc = this.u.Ai;
    this.Ti = this.shape.height;
    this.ef = this.shape.width
};
h.g.object.S(h.j.Ye, h.j.xi);
h.j.bf = function (a, c) {
    h.j.bf.v.constructor.call(this, a, c);
    this.type |= h.j.m.cr;
    this.height = this.eg ? this.Xk + this.u.hw : this.u.ov;
    this.width = this.u.Hk + this.shape.width
};
h.g.object.S(h.j.bf, h.j.xi);
h.j.Ck = function (a, c) {
    h.j.Ck.v.constructor.call(this, a, c);
    this.type |= h.j.m.tq;
    this.height = this.eg ? this.Xk - 2 * this.u.Ai : this.shape.height;
    this.width = this.shape.width + this.u.pv;
    this.Vc = this.u.Ai;
    this.Ti = this.shape.height;
    this.ef = this.shape.width
};
h.g.object.S(h.j.Ck, h.j.xi);
h.j.se = function (a, c) {
    h.j.se.v.constructor.call(this, a);
    this.icon = c;
    this.isVisible = c.isVisible();
    this.type |= h.j.m.wq;
    a = new h.g.md(h.se.prototype.Jk, h.se.prototype.Jk - 2);
    this.height = a.height;
    this.width = a.width
};
h.g.object.S(h.j.se, h.j.Ze);
h.j.Jm = function (a) {
    h.j.Jm.v.constructor.call(this, a);
    this.type |= h.j.m.Eq;
    this.height = this.u.jh.height;
    this.width = this.u.jh.width
};
h.g.object.S(h.j.Jm, h.j.Ze);
h.j.xa = function (a, c) {
    h.j.xa.v.constructor.call(this, a);
    this.vs = c;
    this.Dc = c.Gd && !!c.B && c.B.Dc();
    this.Ox = c.Is();
    this.type |= h.j.m.Nc;
    a = this.vs.Ie();
    this.height = a.height;
    this.width = a.width
};
h.g.object.S(h.j.xa, h.j.Ze);
h.j.Gm = function (a) {
    h.j.Gm.v.constructor.call(this, a);
    this.type |= h.j.m.uq;
    this.height = this.u.ue.height;
    this.width = this.u.ue.width;
    this.uh = this.height
};
h.g.object.S(h.j.Gm, h.j.Ze);
h.j.Ok = function (a, c) {
    h.j.Ok.v.constructor.call(this, a);
    this.type = (c && "left" != c ? h.j.m.Wm : h.j.m.Lm) | h.j.m.Bm;
    this.width = this.height = this.u.Jd
};
h.g.object.S(h.j.Ok, h.j.Ze);
h.j.Ik = function (a, c) {
    h.j.Ik.v.constructor.call(this, a);
    this.type = (c && "left" != c ? h.j.m.Vm : h.j.m.Km) | h.j.m.Bm;
    this.width = this.u.me;
    this.height = this.u.me / 2
};
h.g.object.S(h.j.Ik, h.j.Ze);
h.j.hh = function (a, c) {
    h.j.hh.v.constructor.call(this, a);
    this.type = this.type | h.j.m.an | h.j.m.Aq;
    this.width = c;
    this.height = this.u.ew
};
h.g.object.S(h.j.hh, h.j.Ze);
h.j.Uf = function (a) {
    this.type = h.j.m.Ym;
    this.elements = [];
    this.ta = this.Jb = this.ke = this.minWidth = this.minHeight = this.width = this.height = 0;
    this.Ys = this.Al = this.zo = this.dc = this.qg = !1;
    this.u = a;
    this.dd = this.u.Hk
};
h.j.Uf.prototype.measure = function () {
    throw Error("Unexpected attempt to measure a base Row.");
};

function X(a) {
    for (var c = a.elements.length - 1, d; d = a.elements[c]; c--) if (h.j.m.wd(d)) return d;
    return null
}

h.j.Uf.prototype.Ip = function () {
    return !0
};
h.j.Uf.prototype.ts = function () {
    return !0
};

function Ec(a) {
    for (var c = a.elements.length - 1, d; d = a.elements[c]; c--) if (h.j.m.xd(d)) return d;
    return null
}

h.j.qh = function (a) {
    h.j.qh.v.constructor.call(this, a);
    this.type |= h.j.m.hn;
    this.uh = this.xe = 0;
    this.By = !1;
    this.connection = null
};
h.g.object.S(h.j.qh, h.j.Uf);
h.j.qh.prototype.Ao = function (a) {
    var c = a.Je ? "cap" === a.Je : h.ea.ue, d = a.N && A(a.N);
    return !!a.L || c || (d ? t(d) == a : !1)
};
h.j.qh.prototype.measure = function () {
    for (var a = 0, c = 0, d = 0, e = 0, f; f = this.elements[e]; e++) c += f.width, h.j.m.xd(f) || (h.j.m.xg(f) ? d = Math.max(d, f.uh) : a = Math.max(a, f.height));
    this.width = Math.max(this.minWidth, c);
    this.height = Math.max(this.minHeight, a) + d;
    this.xe = this.uh = d;
    this.ke = this.width
};
h.j.qh.prototype.Ip = function () {
    return !1
};
h.j.ah = function (a) {
    h.j.ah.v.constructor.call(this, a);
    this.type |= h.j.m.wm;
    this.Zs = !1;
    this.connection = null;
    this.Yf = this.bj = 0
};
h.g.object.S(h.j.ah, h.j.Uf);
h.j.ah.prototype.Ao = function (a) {
    return !!a.L || !!t(a)
};
h.j.ah.prototype.measure = function () {
    for (var a = 0, c = 0, d = 0, e = 0, f; f = this.elements[e]; e++) c += f.width, h.j.m.xd(f) || (h.j.m.tf(f) ? d = Math.max(d, f.height) : a = Math.max(a, f.height));
    this.width = Math.max(this.minWidth, c);
    this.height = Math.max(this.minHeight, a) + d;
    this.bj = d;
    this.ke = this.width
};
h.j.ah.prototype.Ip = function () {
    return !1
};
h.j.Nk = function (a, c, d) {
    h.j.Nk.v.constructor.call(this, a);
    this.type = this.type | h.j.m.an | h.j.m.$p;
    this.width = d;
    this.height = c;
    this.As = !1;
    this.ke = 0;
    this.elements = [new h.j.hh(this.u, d)]
};
h.g.object.S(h.j.Nk, h.j.Uf);
h.j.Nk.prototype.measure = function () {
};
h.j.ih = function (a) {
    h.j.ih.v.constructor.call(this, a);
    this.type |= h.j.m.zq;
    this.Sr = 0
};
h.g.object.S(h.j.ih, h.j.Uf);
h.j.ih.prototype.measure = function () {
    this.width = this.minWidth;
    this.height = this.minHeight;
    for (var a = 0, c = 0, d; d = this.elements[c]; c++) this.width += d.width, h.j.m.wd(d) && (h.j.m.yj(d) ? a += d.Si : h.j.m.tj(d) && 0 != d.Si && (a += d.Si - d.ef)), h.j.m.xd(d) || (this.height = Math.max(this.height, d.height));
    this.Sr = a;
    this.ke = this.width + a
};
h.j.ih.prototype.ts = function () {
    return !this.qg && !this.dc
};
h.j.$e = function (a, c) {
    this.ba = c;
    this.Df = a;
    this.u = this.Df.u;
    this.L = c.L ? new h.j.Sm(this.u, c.L) : null;
    this.Jo = Ga(c) && !c.isCollapsed();
    this.isCollapsed = c.isCollapsed();
    this.rf = c.rf();
    this.H = c.H;
    this.Pg = this.width = this.ji = this.height = 0;
    this.rows = [];
    this.ct = [];
    this.rb = new h.j.qh(this.u);
    this.bb = new h.j.ah(this.u);
    this.jm = this.Ic = 0
};
b = h.j.$e.prototype;
b.measure = function () {
    var a = this.ba.Je ? "cap" === this.ba.Je : h.ea.ue, c = !!this.ba.N;
    this.rb.Ao(this.ba) ? this.rb.elements.push(new h.j.Ok(this.u)) : this.rb.elements.push(new h.j.Ik(this.u));
    a ? (a = new h.j.Gm(this.u), this.rb.elements.push(a), this.rb.xe = a.uh) : c && (this.rb.By = !0, this.rb.connection = new h.j.Um(this.u, this.ba.N), this.rb.elements.push(this.rb.connection));
    this.ba.K.length && this.ba.K[0].type == h.Ca && !this.ba.isCollapsed() ? this.rb.minHeight = this.u.bc : this.rb.minHeight = this.u.Id;
    this.rows.push(this.rb);
    a = new h.j.ih(this.u);
    var d = M(this.ba);
    if (d.length) {
        c = 0;
        for (var e; e = d[c]; c++) {
            var f = new h.j.se(this.u, e);
            this.isCollapsed && e.Nr ? this.ct.push(f) : a.elements.push(f)
        }
    }
    e = null;
    for (c = 0; d = this.ba.K[c]; c++) if (d.isVisible()) {
        !e || d.type != h.Ca && e.type != h.Ca && (d.type != h.Ha && d.type != h.qe || this.Jo) || (this.rows.push(a), a = new h.j.ih(this.u));
        for (e = 0; f = d.Ea[e]; e++) a.elements.push(new h.j.xa(this.u, f, d));
        this.Br(d, a);
        e = d
    }
    this.isCollapsed && (a.Ys = !0, a.elements.push(new h.j.Jm(this.u)));
    (a.elements.length || a.Al) && this.rows.push(a);
    this.bb.Zs = !!this.ba.W;
    this.bb.minHeight = this.ba.K.length && this.ba.K[this.ba.K.length - 1].type == h.Ca ? this.u.bc : this.u.Id - 1;
    this.bb.Ao(this.ba) ? this.bb.elements.push(new h.j.Ok(this.u)) : this.bb.elements.push(new h.j.Ik(this.u));
    this.bb.Zs && (this.bb.connection = new h.j.Qm(this.u, this.ba.W), this.bb.elements.push(this.bb.connection));
    this.rows.push(this.bb);
    for (a = 0; c = this.rows[a]; a++) {
        d = c.elements;
        c.elements = [];
        c.Ip() && c.elements.push(new h.j.hh(this.u, this.ul(null, d[0])));
        for (e = 0; e < d.length - 1; e++) c.elements.push(d[e]),
            c.elements.push(new h.j.hh(this.u, this.ul(d[e], d[e + 1])));
        c.elements.push(d[d.length - 1]);
        c.ts() && c.elements.push(new h.j.hh(this.u, this.ul(d[d.length - 1], null)))
    }
    for (e = d = c = a = 0; f = this.rows[e]; e++) f.measure(), c = Math.max(c, f.width), f.dc && (a = Math.max(a, f.width - X(f).width)), d = Math.max(d, f.ke);
    this.Pg = a;
    this.width = c;
    for (e = 0; f = this.rows[e]; e++) f.dc && (f.Pg = this.Pg);
    this.ji = Math.max(c, d);
    this.L && (this.Ic = this.L.width, this.width += this.L.width, this.ji += this.L.width);
    for (a = 0; c = this.rows[a]; a++) c.dc ? (d = X(c), e = c.width -
        d.width, f = this.Pg - this.Ic, (e = f - e) && this.kn(c, e), e = c.width, f = this.width - this.Ic - (this.u.ui.tF || 0), d.width += f - e, c.width += f - e, c.ke = Math.max(c.width, this.Pg + c.Sr)) : (d = this.width - this.Ic - c.width) && this.kn(c, d);
    a = this.rows;
    this.rows = [];
    for (c = 0; c < a.length; c++) this.rows.push(a[c]), c != a.length - 1 && this.rows.push(Fc(this, a[c], a[c + 1]));
    this.ws()
};
b.Br = function (a, c) {
    this.Jo && a.type == h.Ha ? (c.elements.push(new h.j.Ye(this.u, a)), c.zo = !0) : a.type == h.Ca ? (c.elements.push(new h.j.bf(this.u, a)), c.dc = !0) : a.type == h.Ha ? (c.elements.push(new h.j.Ck(this.u, a)), c.qg = !0) : a.type == h.qe && (c.Al = !0)
};
b.ul = function (a, c) {
    if (a && h.j.m.wd(a) && !c) {
        if (h.j.m.tj(a)) return this.u.Jd;
        if (h.j.m.qf(a)) return this.u.bc;
        if (h.j.m.yj(a)) return this.u.Jd
    }
    return a && h.j.m.wj(a) && c && (h.j.m.Nh(c) || h.j.m.tf(c)) ? c.dd : a && h.j.m.sf(a) && c && (h.j.m.Nh(c) || h.j.m.tf(c)) ? c.dd - this.u.me : this.u.Id
};
b.kn = function (a, c) {
    var d = Ec(a);
    d && (d.width += c, a.width += c)
};

function Fc(a, c, d) {
    a = new h.j.Nk(a.u, a.Ns(c, d), a.width - a.Ic);
    c.dc && (a.As = !0);
    return a
}

b.Ns = function () {
    return this.u.Id
};
b.Hs = function (a, c) {
    return h.j.m.xd(c) ? a.Jb + c.height / 2 : h.j.m.Gl(a) ? (a = a.Jb + a.height - a.bj, h.j.m.tf(c) ? a + c.height / 2 : a - c.height / 2) : h.j.m.Nl(a) ? h.j.m.xg(c) ? a.xe - c.height / 2 : a.xe + c.height / 2 : a.Jb + a.height / 2
};

function Gc(a, c) {
    for (var d = c.ta, e = 0, f; f = c.elements[e]; e++) h.j.m.xd(f) && (f.height = c.height), f.ta = d, f.cf = a.Hs(c, f), d += f.width
}

b.ws = function () {
    for (var a = 0, c = 0, d = 0, e; e = this.rows[d]; d++) e.Jb = c, e.ta = this.Ic, c += e.height, a = Math.max(a, e.ke), Gc(this, e);
    this.ji = a + this.Ic;
    this.height = c;
    this.jm = this.rb.xe;
    this.bb.Yf = c - this.bb.bj
};
h.j.Rb = function (a, c) {
    this.ba = a;
    this.Y = c;
    a.Fa();
    this.Fl = this.ra = "";
    this.u = c.Df.u
};
b = h.j.Rb.prototype;
b.draw = function () {
    Hc(this);
    Ic(this);
    Jc(this);
    this.ba.Hg.Bp(this.ra + "\n" + this.Fl);
    this.Y.H && this.ba.Hg.eo();
    h.j.lk && this.ba.sp.Hx(this.ba, this.Y);
    Kc(this)
};

function Kc(a) {
    a.ba.height = a.Y.height;
    a.ba.width = a.Y.ji
}

function Hc(a) {
    for (var c = 0, d; d = a.Y.ct[c]; c++) d.icon.Xd.setAttribute("display", "none")
}

function Ic(a) {
    a.ao();
    for (var c = 1; c < a.Y.rows.length - 1; c++) {
        var d = a.Y.rows[c];
        d.Ys ? a.dj(d) : d.dc ? a.$n(d) : d.qg ? a.bo(d) : a.Zn(d)
    }
    a.Wn();
    a.Yn()
}

b.ao = function () {
    var a = this.Y.rb, c = a.elements, d = this.Y.rb;
    if (d.connection) {
        var e = d.ta + d.dd;
        S(d.connection.En, this.Y.H ? -e : e, 0)
    }
    this.ra += h.g.s.moveBy(a.ta, this.Y.jm);
    for (d = 0; e = c[d]; d++) h.j.m.sf(e) ? this.ra += this.u.Nq.Op : h.j.m.Nh(e) ? this.ra += e.shape.zf : h.j.m.xg(e) ? this.ra += this.u.ue.path : h.j.m.xd(e) && (this.ra += h.g.s.O("h", e.width));
    this.ra += h.g.s.O("v", a.height)
};
b.dj = function (a) {
    this.ra += this.u.jh.path + h.g.s.O("v", a.height - this.u.jh.height)
};
b.bo = function (a) {
    var c = X(a);
    this.Ut(a);
    var d = "function" == typeof c.shape.ed ? c.shape.ed(c.height) : c.shape.ed;
    this.ra += h.g.s.O("H", c.ta + c.width) + d + h.g.s.O("v", a.height - c.Ti)
};
b.$n = function (a) {
    var c = X(a);
    this.ra += h.g.s.O("H", c.ta + c.dd + c.shape.width) + (c.shape.Qt + h.g.s.O("h", -(c.dd - this.u.ui.width)) + this.u.ui.kp) + h.g.s.O("v", a.height - 2 * this.u.ui.height) + this.u.ui.Yl + h.g.s.O("H", a.ta + a.width);
    this.Xt(a)
};
b.Zn = function (a) {
    this.ra += h.g.s.O("V", a.Jb + a.height)
};
b.Wn = function () {
    var a = this.Y.bb, c = a.elements;
    this.Wt();
    this.ra += h.g.s.O("V", a.Yf);
    for (var d = c.length - 1, e; e = c[d]; d--) h.j.m.tf(e) ? this.ra += e.shape.Qt : h.j.m.wj(e) ? this.ra += h.g.s.O("H", a.ta) : h.j.m.sf(e) ? this.ra += this.u.Nq.un : h.j.m.xd(e) && (this.ra += h.g.s.O("h", -1 * e.width))
};
b.Yn = function () {
    var a = this.Y.L;
    if (this.Y.L) {
        var c = this.Y.Ic;
        S(this.ba.L, this.Y.H ? -c : c, this.Y.L.Vc)
    }
    a && (c = a.Vc + a.height, a = "function" == typeof a.shape.Lj ? a.shape.Lj(a.height) : a.shape.Lj, this.ra += h.g.s.O("V", c) + a);
    this.ra += "z"
};

function Jc(a) {
    for (var c = 0, d; d = a.Y.rows[c]; c++) for (var e = 0, f; f = d.elements[e]; e++) if (h.j.m.qf(f)) a.Xn(f); else if (h.j.m.Lh(f) || h.j.m.uj(f)) {
        var g = a;
        if (h.j.m.uj(f)) var k = f.vs.ga(); else h.j.m.Lh(f) && (k = f.icon.Xd);
        var l = f.cf - f.height / 2, m = f.ta, n = "";
        g.Y.H && (m = -(m + f.width), f.Ox && (m += f.width, n = "scale(-1 1)"));
        h.j.m.Lh(f) ? (k.setAttribute("display", "block"), k.setAttribute("transform", "translate(" + m + "," + l + ")"), Wb(f.icon)) : k.setAttribute("transform", "translate(" + m + "," + l + ")" + n);
        g.Y.rf && k.setAttribute("display",
            "none")
    }
}

b.Xn = function (a) {
    var c = a.width, d = a.height, e = a.Vc, f = a.Ti + e;
    this.Fl += h.g.s.moveTo(a.ta + a.ef, a.cf - d / 2) + h.g.s.O("v", e) + a.shape.ed + h.g.s.O("v", d - f) + h.g.s.O("h", c - a.ef) + h.g.s.O("v", -d) + "z";
    this.Vt(a)
};
b.Vt = function (a) {
    var c = a.cf - a.height / 2;
    if (a.connection) {
        var d = a.ta + a.ef;
        this.Y.H && (d *= -1);
        S(a.connection, d, c + a.Vc)
    }
};
b.Xt = function (a) {
    var c = X(a);
    if (c.connection) {
        var d = a.ta + a.Pg + c.dd;
        this.Y.H && (d *= -1);
        S(c.connection, d, a.Jb)
    }
};
b.Ut = function (a) {
    var c = X(a);
    if (c.connection) {
        var d = a.ta + a.width;
        this.Y.H && (d *= -1);
        S(c.connection, d, a.Jb)
    }
};
b.Wt = function () {
    var a = this.Y.bb;
    if (a.connection) {
        a = a.connection;
        var c = a.ta;
        S(a.En, this.Y.H ? -c : c, a.cf - a.height / 2)
    }
};
h.ma = function (a, c) {
    this.F = a;
    this.Kl = c;
    this.nc = null;
    this.u = a.Df.u
};
h.ma.Ak = 5;
h.ma.bh = 100;
h.ma.CC = 24;
h.ma.jE = 5;
h.ma.Kk = 10;
h.ma.cq = 2;
h.ma.tv = .75;
h.ma.zk = "#cc0a0a";
h.ma.Kv = "#4286f4";
h.ma.cv = "blocklyCursor";
h.ma.Jv = "blocklyMarker";
b = h.ma.prototype;
b.$i = null;
b.ga = function () {
    return this.P
};
b.Va = function () {
    this.P = h.g.o.J("g", {"class": this.Kl ? h.ma.Jv : h.ma.cv}, null);
    var a = this.Kl ? h.ma.Kv : h.ma.zk;
    this.Lb = h.g.o.J("g", {width: h.ma.bh, height: h.ma.Ak}, this.P);
    this.yh = h.g.o.J("rect", {
        x: "0",
        y: "0",
        fill: a,
        width: h.ma.bh,
        height: h.ma.Ak,
        style: "display: none;"
    }, this.Lb);
    this.zh = h.g.o.J("rect", {
        "class": "blocklyVerticalCursor",
        x: "0",
        y: "0",
        rx: "10",
        ry: "10",
        style: "display: none;",
        stroke: a
    }, this.Lb);
    this.aj = h.g.o.J("path", {
        width: h.ma.bh,
        height: h.ma.Ak,
        transform: "",
        style: "display: none;",
        fill: a
    }, this.Lb);
    this.hg = h.g.o.J("path", {
        width: h.ma.bh,
        height: h.ma.Ak,
        transform: "",
        style: "display: none;",
        fill: "none",
        stroke: a,
        "stroke-width": "4"
    }, this.Lb);
    this.Kl || (h.g.o.J("animate", {
        attributeType: "XML",
        attributeName: "fill",
        dur: "1s",
        values: h.ma.zk + ";transparent;transparent;",
        repeatCount: "indefinite"
    }, this.yh), h.g.o.J("animate", {
        attributeType: "XML",
        attributeName: "fill",
        dur: "1s",
        values: h.ma.zk + ";transparent;transparent;",
        repeatCount: "indefinite"
    }, this.aj), h.g.o.J("animate", {
        attributeType: "XML", attributeName: "stroke",
        dur: "1s", values: h.ma.zk + ";transparent;transparent;", repeatCount: "indefinite"
    }, this.hg));
    return this.P
};

function Lc(a, c) {
    a.Kl ? (a.nc && a.nc.em(null), c.em(a.ga())) : (a.nc && a.nc.Sj(null), c.Sj(a.ga()));
    a.nc = c
}

function Nc(a, c) {
    if (c) {
        var d = c.width, e = c.height, f = e * h.ma.tv;
        c.N ? (e = h.ma.cq, d = h.g.s.moveBy(-1 * e, f) + h.g.s.O("V", -1 * e) + h.g.s.O("H", a.u.Hk) + a.u.kh.zf + h.g.s.O("H", d + 2 * e) + h.g.s.O("V", f), a.hg.setAttribute("d", d)) : c.L ? (d = h.g.s.moveBy(d, 0) + h.g.s.O("h", -1 * (d - a.u.Sf.width)) + h.g.s.O("v", a.u.Ai) + a.u.Sf.ed + h.g.s.O("V", e) + h.g.s.O("H", d), a.hg.setAttribute("d", d)) : (e = h.ma.cq, d = h.g.s.moveBy(-1 * e, f) + h.g.s.O("V", -1 * e) + h.g.s.O("H", d + 2 * e) + h.g.s.O("V", f), a.hg.setAttribute("d", d));
        a.F.H && a.fj(a.hg);
        a.$i = a.hg;
        Lc(a, c);
        Oc(a)
    }
}

function Oc(a) {
    a.Ia();
    a.$i.style.display = ""
}

function Pc(a, c, d, e) {
    a.yh.setAttribute("x", c);
    a.yh.setAttribute("y", d);
    a.yh.setAttribute("width", e);
    a.$i = a.yh
}

function Qc(a, c, d, e, f) {
    a.zh.setAttribute("x", c);
    a.zh.setAttribute("y", d);
    a.zh.setAttribute("width", e);
    a.zh.setAttribute("height", f);
    a.$i = a.zh
}

b.fj = function (a) {
    a.setAttribute("transform", "scale(-1 1)")
};
b.Ia = function () {
    this.yh.style.display = "none";
    this.zh.style.display = "none";
    this.aj.style.display = "none";
    this.hg.style.display = "none"
};
b.draw = function (a) {
    if (a) if (a.cb() === h.A.types.uc) Nc(this, a.Z); else if (a.cb() === h.A.types.nh) Nc(this, a.Z.B); else if (a.Z.type === h.Ha) {
        var c = a.Z;
        a = c.B;
        var d = c.Eg.x;
        c = c.Eg.y;
        var e = h.g.s.moveTo(0, 0) + this.u.Sf.ed;
        this.aj.setAttribute("d", e);
        this.aj.setAttribute("transform", "translate(" + d + "," + c + ")" + (this.F.H ? " scale(-1 1)" : ""));
        this.$i = this.aj;
        Lc(this, a);
        Oc(this)
    } else if (a.Z.type === h.Ca) c = a.Z, a = c.B, d = 0, c = c.Eg.y, e = J(a).width, this.F.H && (d = -e), Pc(this, d, c, e), Lc(this, a), Oc(this); else if (a.cb() === h.A.types.kd) Nc(this,
        a.Z.B); else if (a.cb() === h.A.types.Nc) a = a.Z, d = a.Ie().width, c = a.Ie().height, Qc(this, 0, 0, d, c), Lc(this, a), Oc(this); else if (a.cb() === h.A.types.Wf) d = a.Fu, a = d.x, d = d.y, this.F.H && (a -= h.ma.bh), Pc(this, a, d, h.ma.bh), Lc(this, this.F), Oc(this); else {
        if (a.cb() === h.A.types.Kd) {
            a = a.Z;
            c = J(a);
            d = c.width + h.ma.Kk;
            c = c.height + h.ma.Kk;
            var f = e = -1 * h.ma.Kk / 2, g = -1 * h.ma.Kk / 2;
            this.F.H && (f = -(d + e));
            Qc(this, f, g, d, c);
            Lc(this, a);
            Oc(this)
        }
    } else this.Ia()
};
b.G = function () {
    this.P && h.g.o.removeNode(this.P)
};
h.j.af = function () {
    this.u = null
};
b = h.j.af.prototype;
b.Pa = function () {
    this.u = this.ut();
    this.u.Pa()
};
b.ut = function () {
    return new h.j.Mf
};
b.xt = function (a) {
    return new h.j.$e(this, a)
};
b.vt = function (a, c) {
    return new h.j.Rb(a, c)
};
b.wt = function (a) {
    return new h.j.Tf(a)
};
b.wa = function (a) {
    if (h.j.lk && !a.sp) {
        if (!h.j.jv) throw Error("Missing require for Blockly.blockRendering.Debug");
        var c = new h.j.jv;
        a.sp = c
    }
    c = this.xt(a);
    c.measure();
    this.vt(a, c).draw()
};
h.U = {};
h.U.Mf = function () {
    h.U.Mf.v.constructor.call(this);
    this.ac = 1
};
h.g.object.S(h.U.Mf, h.j.Mf);
h.U.vq = function (a) {
    this.Y = a;
    this.oj = this.T = "";
    this.Kb = this.Y.H;
    a = a.Df;
    this.u = a.u;
    this.vd = a.vd;
    this.fc = this.vd.lh;
    this.ip = this.vd.Xv;
    this.Kh = this.vd.Bv;
    this.Oj = this.vd.Sf;
    this.iz = this.vd.kh;
    this.Xz = this.vd.ue;
    this.qt = this.vd.jh
};
h.U.vq.prototype.dj = function (a) {
    this.Y.H && (this.T += h.g.s.O("H", a.width - this.fc), this.T += this.qt.zf, this.T += h.g.s.O("v", a.height - this.qt.height - this.fc))
};

function Rc(a, c) {
    var d = c.ta + c.width - a.fc;
    c.As && (a.T += h.g.s.O("H", d));
    a.Kb && (a.T += h.g.s.O("H", d), c.height > a.fc && (a.T += h.g.s.O("V", c.Jb + c.height - a.fc)))
};h.U.Tf = function (a) {
    this.Rg = a;
    this.bk = h.g.o.J("path", {"class": "blocklyPathDark", transform: "translate(1,1)"}, this.Rg);
    this.di = h.g.o.J("path", {"class": "blocklyPath"}, this.Rg);
    this.dk = h.g.o.J("path", {"class": "blocklyPathLight"}, this.Rg)
};
h.U.Tf.prototype.Bp = function (a, c) {
    this.di.setAttribute("d", a);
    this.bk.setAttribute("d", a);
    this.dk.setAttribute("d", c)
};
h.U.Tf.prototype.eo = function () {
    this.di.setAttribute("transform", "scale(-1 1)");
    this.dk.setAttribute("transform", "scale(-1 1)");
    this.bk.setAttribute("transform", "translate(1,1) scale(-1 1)")
};
h.U.Ye = function (a, c) {
    h.U.Ye.v.constructor.call(this, a, c);
    this.eg && (this.width += this.u.ac, this.height += this.u.ac)
};
h.g.object.S(h.U.Ye, h.j.Ye);
h.U.bf = function (a, c) {
    h.U.bf.v.constructor.call(this, a, c);
    this.eg && (this.height += this.u.ac)
};
h.g.object.S(h.U.bf, h.j.bf);
h.U.$e = function (a, c) {
    h.U.$e.v.constructor.call(this, a, c)
};
h.g.object.S(h.U.$e, h.j.$e);
b = h.U.$e.prototype;
b.Br = function (a, c) {
    this.Jo && a.type == h.Ha ? (c.elements.push(new h.U.Ye(this.u, a)), c.zo = !0) : a.type == h.Ca ? (c.elements.push(new h.U.bf(this.u, a)), c.dc = !0) : a.type == h.Ha ? (c.elements.push(new h.j.Ck(this.u, a)), c.qg = !0) : a.type == h.qe && (c.Al = !0)
};
b.ul = function (a, c) {
    if (!a) return c && h.j.m.uj(c) && c.Dc ? this.u.Id : c && h.j.m.qf(c) ? this.u.Iq : c && h.j.m.yj(c) ? this.u.iw : this.u.bc;
    if (!h.j.m.wd(a) && !c) return h.j.m.uj(a) && a.Dc ? this.u.Id : h.j.m.Lh(a) ? 2 * this.u.bc + 1 : h.j.m.xg(a) ? this.u.Jd : h.j.m.Ry(a) ? this.u.bc : h.j.m.sf(a) ? this.u.Pv : h.j.m.nt(a) ? this.u.Jd : this.u.bc;
    if (h.j.m.wd(a) && !c) {
        if (h.j.m.tj(a)) return this.u.Jd;
        if (h.j.m.qf(a)) return this.u.bc;
        if (h.j.m.yj(a)) return this.u.Jd
    }
    if (!h.j.m.wd(a) && c && h.j.m.wd(c)) {
        if (a.Dc) {
            if (h.j.m.qf(c) || h.j.m.tj(c)) return this.u.cw
        } else {
            if (h.j.m.qf(c) ||
                h.j.m.tj(c)) return this.u.Iq;
            if (h.j.m.yj(c)) return this.u.bc
        }
        return this.u.bc - 1
    }
    if (h.j.m.Lh(a) && c && !h.j.m.wd(c)) return this.u.bc;
    if (h.j.m.qf(a) && c && !h.j.m.wd(c)) return c.Dc ? this.u.Id : this.u.bc;
    if (h.j.m.wj(a) && c) {
        if (h.j.m.xg(c)) return this.u.Jd;
        if (h.j.m.Nh(c)) return c.dd;
        if (h.j.m.tf(c)) return a = (this.H ? 1 : -1) * this.u.ac / 2, c.dd + a
    }
    if (h.j.m.sf(a) && c) {
        if (h.j.m.Nh(c)) return c.dd - this.u.me;
        if (h.j.m.tf(c)) return a = (this.H ? 1 : -1) * this.u.ac / 2, c.dd - this.u.me + a
    }
    return !h.j.m.wd(a) && c && !h.j.m.wd(c) && a.Dc == c.Dc || c &&
    h.j.m.nt(c) ? this.u.bc : this.u.Id
};
b.kn = function (a, c) {
    a:{
        var d = 0;
        for (var e; e = a.elements[d]; d++) if (h.j.m.xd(e)) {
            d = e;
            break a
        }
        d = null
    }
    e = Ec(a);
    if (a.qg || a.dc) a.ke += c;
    var f = X(a);
    f ? f.align == h.tm ? e.width += c : f.align == h.Vp ? (d.width += c / 2, e.width += c / 2) : f.align == h.nk && (d.width += c) : e.width += c;
    a.width += c
};
b.Ns = function (a, c) {
    return h.j.m.Nl(a) && h.j.m.Gl(c) ? this.u.kv : h.j.m.Nl(a) || h.j.m.Gl(c) ? this.u.Jd : a.qg && c.qg ? this.u.bc : !a.dc && c.dc ? this.u.Tu : a.dc && c.dc || !a.dc && c.Al ? this.u.bc : this.u.Id
};
b.Hs = function (a, c) {
    if (h.j.m.xd(c)) return a.Jb + c.height / 2;
    if (h.j.m.Gl(a)) return a = a.Jb + a.height - a.bj, h.j.m.tf(c) ? a + c.height / 2 : a - c.height / 2;
    if (h.j.m.Nl(a)) return h.j.m.xg(c) ? a.xe - c.height / 2 : a.xe + c.height / 2;
    var d = a.Jb;
    h.j.m.uj(c) || h.j.m.Lh(c) ? (d += c.height / 2, (a.zo || a.dc) && c.height + this.u.gr <= a.height && (d += this.u.gr)) : d = h.j.m.qf(c) ? d + c.height / 2 : d + a.height / 2;
    return d
};
b.ws = function () {
    for (var a = 0, c = 0, d = 0, e; e = this.rows[d]; d++) {
        e.Jb = c;
        e.ta = this.Ic;
        c += e.height;
        a = Math.max(a, e.ke);
        var f = c - this.rb.uh;
        e == this.bb && f < this.u.Om && (f = this.u.Om - f, this.bb.height += f, c += f);
        Gc(this, e)
    }
    this.bb.Yf = c - this.bb.bj;
    this.ji = a + this.Ic + this.u.ac;
    this.width += this.u.ac;
    this.height = c + this.u.ac;
    this.jm = this.rb.xe
};
h.U.Rb = function (a, c) {
    h.U.Rb.v.constructor.call(this, a, c);
    this.Wd = new h.U.vq(c)
};
h.g.object.S(h.U.Rb, h.j.Rb);
b = h.U.Rb.prototype;
b.draw = function () {
    Hc(this);
    Ic(this);
    Jc(this);
    var a = this.Wd;
    this.ba.Hg.Bp(this.ra + "\n" + this.Fl, a.T + "\n" + a.oj);
    this.Y.H && this.ba.Hg.eo();
    h.j.lk && this.ba.sp.Hx(this.ba, this.Y);
    Kc(this)
};
b.ao = function () {
    var a = this.Wd, c = this.Y.rb;
    a.T += h.g.s.moveBy(c.ta, a.Y.jm);
    for (var d = 0, e; e = c.elements[d]; d++) h.j.m.wj(e) ? a.T += a.vd.$q : h.j.m.sf(e) ? a.T += a.ip.Op(a.Kb) : h.j.m.Nh(e) ? a.T += a.iz.zf : h.j.m.xg(e) ? a.T += a.Xz.path(a.Kb) : h.j.m.xd(e) && 0 != e.width && (a.T += h.g.s.O("H", e.ta + e.width - a.fc));
    a.T += h.g.s.O("H", c.ta + c.width - a.fc);
    Rc(this.Wd, this.Y.rb);
    h.U.Rb.v.ao.call(this)
};
b.dj = function (a) {
    this.Wd.dj(a);
    h.U.Rb.v.dj.call(this, a)
};
b.bo = function (a) {
    var c = this.Wd, d = X(a);
    if (c.Kb) {
        var e = a.height - d.Ti;
        c.T += h.g.s.moveTo(d.ta + d.width - c.fc, a.Jb) + c.Oj.ed(c.Kb) + h.g.s.O("v", e)
    } else c.T += h.g.s.moveTo(d.ta + d.width, a.Jb) + c.Oj.ed(c.Kb);
    h.U.Rb.v.bo.call(this, a)
};
b.$n = function (a) {
    var c = this.Wd, d = X(a);
    if (c.Kb) {
        var e = a.height - 2 * c.Kh.height;
        c.T += h.g.s.moveTo(d.ta, a.Jb) + c.Kh.kp(c.Kb) + h.g.s.O("v", e) + c.Kh.Yl(c.Kb) + h.g.s.lineTo(a.width - d.ta - c.Kh.width, 0)
    } else c.T += h.g.s.moveTo(d.ta, a.Jb + a.height) + c.Kh.Yl(c.Kb) + h.g.s.lineTo(a.width - d.ta - c.Kh.width, 0);
    h.U.Rb.v.$n.call(this, a)
};
b.Zn = function (a) {
    Rc(this.Wd, a);
    h.U.Rb.v.Zn.call(this, a)
};
b.Wn = function () {
    var a = this.Wd, c = this.Y.bb;
    if (a.Kb) a.T += h.g.s.O("V", c.Yf - a.fc); else {
        var d = a.Y.bb.elements[0];
        h.j.m.wj(d) ? a.T += h.g.s.moveTo(c.ta + a.fc, c.Yf - a.fc) : h.j.m.sf(d) && (a.T += h.g.s.moveTo(c.ta, c.Yf), a.T += a.ip.un())
    }
    h.U.Rb.v.Wn.call(this)
};
b.Yn = function () {
    var a = this.Wd, c = a.Y.L;
    c && (c = c.Vc + c.height, a.Kb ? a.T += h.g.s.moveTo(a.Y.Ic, c) : (a.T += h.g.s.moveTo(a.Y.Ic + a.fc, a.Y.bb.Yf - a.fc), a.T += h.g.s.O("V", c)), a.T += a.Oj.Lj(a.Kb));
    a.Kb || (c = a.Y.rb, a.T = h.j.m.sf(c.elements[0]) ? a.T + h.g.s.O("V", a.ip.height) : a.T + h.g.s.O("V", c.xe + a.fc));
    h.U.Rb.v.Yn.call(this)
};
b.Xn = function (a) {
    var c = this.Wd, d = c.fc, e = a.ta + a.ef, f = a.cf - a.height / 2, g = a.width - a.ef, k = f + d;
    if (c.Kb) {
        f = a.Vc - d;
        var l = a.height - (a.Vc + a.Ti) + d;
        c.oj += h.g.s.moveTo(e - d, k) + h.g.s.O("v", f) + c.Oj.ed(c.Kb) + h.g.s.O("v", l) + h.g.s.O("h", g)
    } else c.oj += h.g.s.moveTo(a.ta + a.width + d, k) + h.g.s.O("v", a.height) + h.g.s.O("h", -g) + h.g.s.moveTo(e, f + a.Vc) + c.Oj.ed(c.Kb);
    h.U.Rb.v.Xn.call(this, a)
};
b.Vt = function (a) {
    var c = a.cf - a.height / 2;
    if (a.connection) {
        var d = a.ta + a.ef + this.u.ac;
        this.Y.H && (d *= -1);
        S(a.connection, d, c + a.Vc + this.u.ac)
    }
};
b.Xt = function (a) {
    var c = X(a);
    if (c.connection) {
        var d = a.ta + a.Pg + c.dd;
        d = this.Y.H ? -1 * d : d + this.u.ac;
        S(c.connection, d, a.Jb + this.u.ac)
    }
};
b.Ut = function (a) {
    var c = X(a);
    if (c.connection) {
        var d = a.ta + a.width + this.u.ac;
        this.Y.H && (d *= -1);
        S(c.connection, d, a.Jb)
    }
};
b.Wt = function () {
    var a = this.Y.bb;
    if (a.connection) {
        a = a.connection;
        var c = a.ta;
        S(a.En, (this.Y.H ? -c : c) + this.u.ac / 2, a.cf - a.height / 2 + this.u.ac)
    }
};
h.U.ti = function (a) {
    this.xh = a;
    this.lh = .5;
    this.$q = h.g.s.moveBy(this.lh, this.lh);
    this.Bv = Sc(this);
    this.Xv = Tc(this);
    this.Sf = this.To();
    this.kh = this.So();
    this.jh = this.Ro();
    this.ue = this.Uo()
};

function Sc(a) {
    var c = a.xh.me;
    a = a.lh;
    var d = (1 - Math.SQRT1_2) * (c + a) - a,
        e = h.g.s.moveBy(d, d) + h.g.s.arc("a", "0 0,0", c, h.g.s.va(-d - a, c - d)),
        f = h.g.s.arc("a", "0 0,0", c + a, h.g.s.va(c + a, c + a)),
        g = h.g.s.moveBy(d, -d) + h.g.s.arc("a", "0 0,0", c + a, h.g.s.va(c - d, d + a));
    return {
        width: c + a, height: c, kp: function (k) {
            return k ? e : ""
        }, Yl: function (k) {
            return k ? f : g
        }
    }
}

function Tc(a) {
    var c = a.xh.me;
    a = a.lh;
    var d = (1 - Math.SQRT1_2) * (c - a) + a,
        e = h.g.s.moveBy(d, d) + h.g.s.arc("a", "0 0,1", c - a, h.g.s.va(c - d, -d + a)),
        f = h.g.s.moveBy(a, c) + h.g.s.arc("a", "0 0,1", c - a, h.g.s.va(c, -c + a)), g = -d,
        k = h.g.s.moveBy(d, g) + h.g.s.arc("a", "0 0,1", c - a, h.g.s.va(-d + a, -g - c));
    return {
        height: c, Op: function (l) {
            return l ? e : f
        }, un: function () {
            return k
        }
    }
}

h.U.ti.prototype.To = function () {
    var a = this.xh.Vf, c = this.xh.cn, d = h.g.s.moveBy(-2, -c + 3.4) + h.g.s.lineTo(-.45 * a, -2.1),
        e = h.g.s.O("v", 2.5) + h.g.s.moveBy(.97 * -a, 2.5) + h.g.s.curve("q", [h.g.s.va(.05 * -a, 10), h.g.s.va(.3 * a, 9.5)]) + h.g.s.moveBy(.67 * a, -1.9) + h.g.s.O("v", 2.5),
        f = h.g.s.O("v", -1.5) + h.g.s.moveBy(-.92 * a, -.5) + h.g.s.curve("q", [h.g.s.va(-.19 * a, -5.5), h.g.s.va(0, -11)]) + h.g.s.moveBy(.92 * a, 1),
        g = h.g.s.moveBy(-5, c - .7) + h.g.s.lineTo(.46 * a, -2.1);
    return {
        width: a, height: c, Lj: function (k) {
            return k ? d : f
        }, ed: function (k) {
            return k ?
                e : g
        }
    }
};
h.U.ti.prototype.So = function () {
    return {zf: h.g.s.O("h", this.lh) + this.xh.kh.zf}
};
h.U.ti.prototype.Ro = function () {
    return {zf: h.g.s.lineTo(5.1, 2.6) + h.g.s.moveBy(-10.2, 6.8) + h.g.s.lineTo(5.1, 2.6)}
};
h.U.ti.prototype.Uo = function () {
    var a = this.xh.ue.height,
        c = h.g.s.moveBy(25, -8.7) + h.g.s.curve("c", [h.g.s.va(29.7, -6.2), h.g.s.va(57.2, -.5), h.g.s.va(75, 8.7)]),
        d = h.g.s.curve("c", [h.g.s.va(17.8, -9.2), h.g.s.va(45.3, -14.9), h.g.s.va(75, -8.7)]) + h.g.s.moveTo(100.5, a + .5);
    return {
        path: function (e) {
            return e ? c : d
        }
    }
};
h.U.af = function () {
    h.U.af.v.constructor.call(this);
    this.vd = null
};
h.g.object.S(h.U.af, h.j.af);
b = h.U.af.prototype;
b.Pa = function () {
    h.U.af.v.Pa.call(this);
    this.vd = new h.U.ti(this.u)
};
b.ut = function () {
    return new h.U.Mf
};
b.xt = function (a) {
    return new h.U.$e(this, a)
};
b.vt = function (a, c) {
    return new h.U.Rb(a, c)
};
b.wt = function (a) {
    return new h.U.Tf(a)
};
h.j.register("geras", h.U.af);
h.h.ADD_COMMENT = "Add Comment";
h.h.CANNOT_DELETE_VARIABLE_PROCEDURE = "Can't delete the variable '%1' because it's part of the definition of the function '%2'";
h.h.CHANGE_VALUE_TITLE = "Change value:";
h.h.CLEAN_UP = "Clean up Blocks";
h.h.COLLAPSED_WARNINGS_WARNING = "Collapsed blocks contain warnings.";
h.h.COLLAPSE_ALL = "Collapse Blocks";
h.h.COLLAPSE_BLOCK = "Collapse Block";
h.h.COLOUR_BLEND_COLOUR1 = "colour 1";
h.h.COLOUR_BLEND_COLOUR2 = "colour 2";
h.h.COLOUR_BLEND_HELPURL = "https://meyerweb.com/eric/tools/color-blend/#:::rgbp";
h.h.COLOUR_BLEND_RATIO = "ratio";
h.h.COLOUR_BLEND_TITLE = "blend";
h.h.COLOUR_BLEND_TOOLTIP = "Blends two colours together with a given ratio (0.0 - 1.0).";
h.h.COLOUR_PICKER_HELPURL = "https://en.wikipedia.org/wiki/Color";
h.h.COLOUR_PICKER_TOOLTIP = "Choose a colour from the palette.";
h.h.COLOUR_RANDOM_HELPURL = "http://randomcolour.com";
h.h.COLOUR_RANDOM_TITLE = "random colour";
h.h.COLOUR_RANDOM_TOOLTIP = "Choose a colour at random.";
h.h.COLOUR_RGB_BLUE = "blue";
h.h.COLOUR_RGB_GREEN = "green";
h.h.COLOUR_RGB_HELPURL = "https://www.december.com/html/spec/colorpercompact.html";
h.h.COLOUR_RGB_RED = "red";
h.h.COLOUR_RGB_TITLE = "colour with";
h.h.COLOUR_RGB_TOOLTIP = "Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.";
h.h.CONTROLS_FLOW_STATEMENTS_HELPURL = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
h.h.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break out of loop";
h.h.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "continue with next iteration of loop";
h.h.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Break out of the containing loop.";
h.h.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "Skip the rest of this loop, and continue with the next iteration.";
h.h.CONTROLS_FLOW_STATEMENTS_WARNING = "Warning: This block may only be used within a loop.";
h.h.CONTROLS_FOREACH_HELPURL = "https://github.com/google/blockly/wiki/Loops#for-each";
h.h.CONTROLS_FOREACH_TITLE = "for each item %1 in list %2";
h.h.CONTROLS_FOREACH_TOOLTIP = "For each item in a list, set the variable '%1' to the item, and then do some statements.";
h.h.CONTROLS_FOR_HELPURL = "https://github.com/google/blockly/wiki/Loops#count-with";
h.h.CONTROLS_FOR_TITLE = "count with %1 from %2 to %3 by %4";
h.h.CONTROLS_FOR_TOOLTIP = "Have the variable '%1' take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
h.h.CONTROLS_IF_ELSEIF_TOOLTIP = "Add a condition to the if block.";
h.h.CONTROLS_IF_ELSE_TOOLTIP = "Add a final, catch-all condition to the if block.";
h.h.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";
h.h.CONTROLS_IF_IF_TOOLTIP = "Add, remove, or reorder sections to reconfigure this if block.";
h.h.CONTROLS_IF_MSG_ELSE = "else";
h.h.CONTROLS_IF_MSG_ELSEIF = "else if";
h.h.CONTROLS_IF_MSG_IF = "if";
h.h.CONTROLS_IF_TOOLTIP_1 = "If a value is true, then do some statements.";
h.h.CONTROLS_IF_TOOLTIP_2 = "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
h.h.CONTROLS_IF_TOOLTIP_3 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
h.h.CONTROLS_IF_TOOLTIP_4 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
h.h.CONTROLS_REPEAT_HELPURL = "https://en.wikipedia.org/wiki/For_loop";
h.h.CONTROLS_REPEAT_INPUT_DO = "do";
h.h.CONTROLS_REPEAT_TITLE = "repeat %1 times";
h.h.CONTROLS_REPEAT_TOOLTIP = "Do some statements several times.";
h.h.CONTROLS_WHILEUNTIL_HELPURL = "https://github.com/google/blockly/wiki/Loops#repeat";
h.h.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repeat until";
h.h.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repeat while";
h.h.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "While a value is false, then do some statements.";
h.h.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "While a value is true, then do some statements.";
h.h.DELETE_ALL_BLOCKS = "Delete all %1 blocks?";
h.h.DELETE_BLOCK = "Delete Block";
h.h.DELETE_VARIABLE = "Delete the '%1' variable";
h.h.DELETE_VARIABLE_CONFIRMATION = "Delete %1 uses of the '%2' variable?";
h.h.DELETE_X_BLOCKS = "Delete %1 Blocks";
h.h.DISABLE_BLOCK = "Disable Block";
h.h.DUPLICATE_BLOCK = "Duplicate";
h.h.DUPLICATE_COMMENT = "Duplicate Comment";
h.h.ENABLE_BLOCK = "Enable Block";
h.h.EXPAND_ALL = "Expand Blocks";
h.h.EXPAND_BLOCK = "Expand Block";
h.h.EXTERNAL_INPUTS = "External Inputs";
h.h.HELP = "Help";
h.h.INLINE_INPUTS = "Inline Inputs";
h.h.IOS_CANCEL = "Cancel";
h.h.IOS_ERROR = "Error";
h.h.IOS_OK = "OK";
h.h.IOS_PROCEDURES_ADD_INPUT = "+ Add Input";
h.h.IOS_PROCEDURES_ALLOW_STATEMENTS = "Allow statements";
h.h.IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR = "This function has duplicate inputs.";
h.h.IOS_PROCEDURES_INPUTS = "INPUTS";
h.h.IOS_VARIABLES_ADD_BUTTON = "Add";
h.h.IOS_VARIABLES_ADD_VARIABLE = "+ Add Variable";
h.h.IOS_VARIABLES_DELETE_BUTTON = "Delete";
h.h.IOS_VARIABLES_EMPTY_NAME_ERROR = "You can't use an empty variable name.";
h.h.IOS_VARIABLES_RENAME_BUTTON = "Rename";
h.h.IOS_VARIABLES_VARIABLE_NAME = "Variable name";
h.h.LISTS_CREATE_EMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
h.h.LISTS_CREATE_EMPTY_TITLE = "create empty list";
h.h.LISTS_CREATE_EMPTY_TOOLTIP = "Returns a list, of length 0, containing no data records";
h.h.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "list";
h.h.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "Add, remove, or reorder sections to reconfigure this list block.";
h.h.LISTS_CREATE_WITH_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
h.h.LISTS_CREATE_WITH_INPUT_WITH = "create list with";
h.h.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Add an item to the list.";
h.h.LISTS_CREATE_WITH_TOOLTIP = "Create a list with any number of items.";
h.h.LISTS_GET_INDEX_FIRST = "first";
h.h.LISTS_GET_INDEX_FROM_END = "# from end";
h.h.LISTS_GET_INDEX_FROM_START = "#";
h.h.LISTS_GET_INDEX_GET = "get";
h.h.LISTS_GET_INDEX_GET_REMOVE = "get and remove";
h.h.LISTS_GET_INDEX_LAST = "last";
h.h.LISTS_GET_INDEX_RANDOM = "random";
h.h.LISTS_GET_INDEX_REMOVE = "remove";
h.h.LISTS_GET_INDEX_TAIL = "";
h.h.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "Returns the first item in a list.";
h.h.LISTS_GET_INDEX_TOOLTIP_GET_FROM = "Returns the item at the specified position in a list.";
h.h.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "Returns the last item in a list.";
h.h.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "Returns a random item in a list.";
h.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "Removes and returns the first item in a list.";
h.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = "Removes and returns the item at the specified position in a list.";
h.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "Removes and returns the last item in a list.";
h.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "Removes and returns a random item in a list.";
h.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Removes the first item in a list.";
h.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = "Removes the item at the specified position in a list.";
h.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Removes the last item in a list.";
h.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Removes a random item in a list.";
h.h.LISTS_GET_SUBLIST_END_FROM_END = "to # from end";
h.h.LISTS_GET_SUBLIST_END_FROM_START = "to #";
h.h.LISTS_GET_SUBLIST_END_LAST = "to last";
h.h.LISTS_GET_SUBLIST_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
h.h.LISTS_GET_SUBLIST_START_FIRST = "get sub-list from first";
h.h.LISTS_GET_SUBLIST_START_FROM_END = "get sub-list from # from end";
h.h.LISTS_GET_SUBLIST_START_FROM_START = "get sub-list from #";
h.h.LISTS_GET_SUBLIST_TAIL = "";
h.h.LISTS_GET_SUBLIST_TOOLTIP = "Creates a copy of the specified portion of a list.";
h.h.LISTS_INDEX_FROM_END_TOOLTIP = "%1 is the last item.";
h.h.LISTS_INDEX_FROM_START_TOOLTIP = "%1 is the first item.";
h.h.LISTS_INDEX_OF_FIRST = "find first occurrence of item";
h.h.LISTS_INDEX_OF_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
h.h.LISTS_INDEX_OF_LAST = "find last occurrence of item";
h.h.LISTS_INDEX_OF_TOOLTIP = "Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.";
h.h.LISTS_INLIST = "in list";
h.h.LISTS_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#is-empty";
h.h.LISTS_ISEMPTY_TITLE = "%1 is empty";
h.h.LISTS_ISEMPTY_TOOLTIP = "Returns true if the list is empty.";
h.h.LISTS_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Lists#length-of";
h.h.LISTS_LENGTH_TITLE = "length of %1";
h.h.LISTS_LENGTH_TOOLTIP = "Returns the length of a list.";
h.h.LISTS_REPEAT_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
h.h.LISTS_REPEAT_TITLE = "create list with item %1 repeated %2 times";
h.h.LISTS_REPEAT_TOOLTIP = "Creates a list consisting of the given value repeated the specified number of times.";
h.h.LISTS_REVERSE_HELPURL = "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
h.h.LISTS_REVERSE_MESSAGE0 = "reverse %1";
h.h.LISTS_REVERSE_TOOLTIP = "Reverse a copy of a list.";
h.h.LISTS_SET_INDEX_HELPURL = "https://github.com/google/blockly/wiki/Lists#in-list--set";
h.h.LISTS_SET_INDEX_INPUT_TO = "as";
h.h.LISTS_SET_INDEX_INSERT = "insert at";
h.h.LISTS_SET_INDEX_SET = "set";
h.h.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = "Inserts the item at the start of a list.";
h.h.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = "Inserts the item at the specified position in a list.";
h.h.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = "Append the item to the end of a list.";
h.h.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = "Inserts the item randomly in a list.";
h.h.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Sets the first item in a list.";
h.h.LISTS_SET_INDEX_TOOLTIP_SET_FROM = "Sets the item at the specified position in a list.";
h.h.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Sets the last item in a list.";
h.h.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Sets a random item in a list.";
h.h.LISTS_SORT_HELPURL = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
h.h.LISTS_SORT_ORDER_ASCENDING = "ascending";
h.h.LISTS_SORT_ORDER_DESCENDING = "descending";
h.h.LISTS_SORT_TITLE = "sort %1 %2 %3";
h.h.LISTS_SORT_TOOLTIP = "Sort a copy of a list.";
h.h.LISTS_SORT_TYPE_IGNORECASE = "alphabetic, ignore case";
h.h.LISTS_SORT_TYPE_NUMERIC = "numeric";
h.h.LISTS_SORT_TYPE_TEXT = "alphabetic";
h.h.LISTS_SPLIT_HELPURL = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
h.h.LISTS_SPLIT_LIST_FROM_TEXT = "make list from text";
h.h.LISTS_SPLIT_TEXT_FROM_LIST = "make text from list";
h.h.LISTS_SPLIT_TOOLTIP_JOIN = "Join a list of texts into one text, separated by a delimiter.";
h.h.LISTS_SPLIT_TOOLTIP_SPLIT = "Split text into a list of texts, breaking at each delimiter.";
h.h.LISTS_SPLIT_WITH_DELIMITER = "with delimiter";
h.h.LOGIC_BOOLEAN_FALSE = "false";
h.h.LOGIC_BOOLEAN_HELPURL = "https://github.com/google/blockly/wiki/Logic#values";
h.h.LOGIC_BOOLEAN_TOOLTIP = "Returns either true or false.";
h.h.LOGIC_BOOLEAN_TRUE = "true";
h.h.LOGIC_COMPARE_HELPURL = "https://en.wikipedia.org/wiki/Inequality_(mathematics)";
h.h.LOGIC_COMPARE_TOOLTIP_EQ = "Return true if both inputs equal each other.";
h.h.LOGIC_COMPARE_TOOLTIP_GT = "Return true if the first input is greater than the second input.";
h.h.LOGIC_COMPARE_TOOLTIP_GTE = "Return true if the first input is greater than or equal to the second input.";
h.h.LOGIC_COMPARE_TOOLTIP_LT = "Return true if the first input is smaller than the second input.";
h.h.LOGIC_COMPARE_TOOLTIP_LTE = "Return true if the first input is smaller than or equal to the second input.";
h.h.LOGIC_COMPARE_TOOLTIP_NEQ = "Return true if both inputs are not equal to each other.";
h.h.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
h.h.LOGIC_NEGATE_TITLE = "not %1";
h.h.LOGIC_NEGATE_TOOLTIP = "Returns true if the input is false. Returns false if the input is true.";
h.h.LOGIC_NULL = "null";
h.h.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";
h.h.LOGIC_NULL_TOOLTIP = "Returns null.";
h.h.LOGIC_OPERATION_AND = "and";
h.h.LOGIC_OPERATION_HELPURL = "https://github.com/google/blockly/wiki/Logic#logical-operations";
h.h.LOGIC_OPERATION_OR = "or";
h.h.LOGIC_OPERATION_TOOLTIP_AND = "Return true if both inputs are true.";
h.h.LOGIC_OPERATION_TOOLTIP_OR = "Return true if at least one of the inputs is true.";
h.h.LOGIC_TERNARY_CONDITION = "test";
h.h.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
h.h.LOGIC_TERNARY_IF_FALSE = "if false";
h.h.LOGIC_TERNARY_IF_TRUE = "if true";
h.h.LOGIC_TERNARY_TOOLTIP = "Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";
h.h.MATH_ADDITION_SYMBOL = "+";
h.h.MATH_ARITHMETIC_HELPURL = "https://en.wikipedia.org/wiki/Arithmetic";
h.h.MATH_ARITHMETIC_TOOLTIP_ADD = "Return the sum of the two numbers.";
h.h.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Return the quotient of the two numbers.";
h.h.MATH_ARITHMETIC_TOOLTIP_MINUS = "Return the difference of the two numbers.";
h.h.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Return the product of the two numbers.";
h.h.MATH_ARITHMETIC_TOOLTIP_POWER = "Return the first number raised to the power of the second number.";
h.h.MATH_ATAN2_HELPURL = "https://en.wikipedia.org/wiki/Atan2";
h.h.MATH_ATAN2_TITLE = "atan2 of X:%1 Y:%2";
h.h.MATH_ATAN2_TOOLTIP = "Return the arctangent of point (X, Y) in degrees from -180 to 180.";
h.h.MATH_CHANGE_HELPURL = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
h.h.MATH_CHANGE_TITLE = "change %1 by %2";
h.h.MATH_CHANGE_TOOLTIP = "Add a number to variable '%1'.";
h.h.MATH_CONSTANT_HELPURL = "https://en.wikipedia.org/wiki/Mathematical_constant";
h.h.MATH_CONSTANT_TOOLTIP = "Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).";
h.h.MATH_CONSTRAIN_HELPURL = "https://en.wikipedia.org/wiki/Clamping_(graphics)";
h.h.MATH_CONSTRAIN_TITLE = "constrain %1 low %2 high %3";
h.h.MATH_CONSTRAIN_TOOLTIP = "Constrain a number to be between the specified limits (inclusive).";
h.h.MATH_DIVISION_SYMBOL = "\u00f7";
h.h.MATH_IS_DIVISIBLE_BY = "is divisible by";
h.h.MATH_IS_EVEN = "is even";
h.h.MATH_IS_NEGATIVE = "is negative";
h.h.MATH_IS_ODD = "is odd";
h.h.MATH_IS_POSITIVE = "is positive";
h.h.MATH_IS_PRIME = "is prime";
h.h.MATH_IS_TOOLTIP = "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";
h.h.MATH_IS_WHOLE = "is whole";
h.h.MATH_MODULO_HELPURL = "https://en.wikipedia.org/wiki/Modulo_operation";
h.h.MATH_MODULO_TITLE = "remainder of %1 \u00f7 %2";
h.h.MATH_MODULO_TOOLTIP = "Return the remainder from dividing the two numbers.";
h.h.MATH_MULTIPLICATION_SYMBOL = "\u00d7";
h.h.MATH_NUMBER_HELPURL = "https://en.wikipedia.org/wiki/Number";
h.h.MATH_NUMBER_TOOLTIP = "A number.";
h.h.MATH_ONLIST_HELPURL = "";
h.h.MATH_ONLIST_OPERATOR_AVERAGE = "average of list";
h.h.MATH_ONLIST_OPERATOR_MAX = "max of list";
h.h.MATH_ONLIST_OPERATOR_MEDIAN = "median of list";
h.h.MATH_ONLIST_OPERATOR_MIN = "min of list";
h.h.MATH_ONLIST_OPERATOR_MODE = "modes of list";
h.h.MATH_ONLIST_OPERATOR_RANDOM = "random item of list";
h.h.MATH_ONLIST_OPERATOR_STD_DEV = "standard deviation of list";
h.h.MATH_ONLIST_OPERATOR_SUM = "sum of list";
h.h.MATH_ONLIST_TOOLTIP_AVERAGE = "Return the average (arithmetic mean) of the numeric values in the list.";
h.h.MATH_ONLIST_TOOLTIP_MAX = "Return the largest number in the list.";
h.h.MATH_ONLIST_TOOLTIP_MEDIAN = "Return the median number in the list.";
h.h.MATH_ONLIST_TOOLTIP_MIN = "Return the smallest number in the list.";
h.h.MATH_ONLIST_TOOLTIP_MODE = "Return a list of the most common item(s) in the list.";
h.h.MATH_ONLIST_TOOLTIP_RANDOM = "Return a random element from the list.";
h.h.MATH_ONLIST_TOOLTIP_STD_DEV = "Return the standard deviation of the list.";
h.h.MATH_ONLIST_TOOLTIP_SUM = "Return the sum of all the numbers in the list.";
h.h.MATH_POWER_SYMBOL = "^";
h.h.MATH_RANDOM_FLOAT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation";
h.h.MATH_RANDOM_FLOAT_TITLE_RANDOM = "random fraction";
h.h.MATH_RANDOM_FLOAT_TOOLTIP = "Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";
h.h.MATH_RANDOM_INT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation";
h.h.MATH_RANDOM_INT_TITLE = "random integer from %1 to %2";
h.h.MATH_RANDOM_INT_TOOLTIP = "Return a random integer between the two specified limits, inclusive.";
h.h.MATH_ROUND_HELPURL = "https://en.wikipedia.org/wiki/Rounding";
h.h.MATH_ROUND_OPERATOR_ROUND = "round";
h.h.MATH_ROUND_OPERATOR_ROUNDDOWN = "round down";
h.h.MATH_ROUND_OPERATOR_ROUNDUP = "round up";
h.h.MATH_ROUND_TOOLTIP = "Round a number up or down.";
h.h.MATH_SINGLE_HELPURL = "https://en.wikipedia.org/wiki/Square_root";
h.h.MATH_SINGLE_OP_ABSOLUTE = "absolute";
h.h.MATH_SINGLE_OP_ROOT = "square root";
h.h.MATH_SINGLE_TOOLTIP_ABS = "Return the absolute value of a number.";
h.h.MATH_SINGLE_TOOLTIP_EXP = "Return e to the power of a number.";
h.h.MATH_SINGLE_TOOLTIP_LN = "Return the natural logarithm of a number.";
h.h.MATH_SINGLE_TOOLTIP_LOG10 = "Return the base 10 logarithm of a number.";
h.h.MATH_SINGLE_TOOLTIP_NEG = "Return the negation of a number.";
h.h.MATH_SINGLE_TOOLTIP_POW10 = "Return 10 to the power of a number.";
h.h.MATH_SINGLE_TOOLTIP_ROOT = "Return the square root of a number.";
h.h.MATH_SUBTRACTION_SYMBOL = "-";
h.h.MATH_TRIG_ACOS = "acos";
h.h.MATH_TRIG_ASIN = "asin";
h.h.MATH_TRIG_ATAN = "atan";
h.h.MATH_TRIG_COS = "cos";
h.h.MATH_TRIG_HELPURL = "https://en.wikipedia.org/wiki/Trigonometric_functions";
h.h.MATH_TRIG_SIN = "sin";
h.h.MATH_TRIG_TAN = "tan";
h.h.MATH_TRIG_TOOLTIP_ACOS = "Return the arccosine of a number.";
h.h.MATH_TRIG_TOOLTIP_ASIN = "Return the arcsine of a number.";
h.h.MATH_TRIG_TOOLTIP_ATAN = "Return the arctangent of a number.";
h.h.MATH_TRIG_TOOLTIP_COS = "Return the cosine of a degree (not radian).";
h.h.MATH_TRIG_TOOLTIP_SIN = "Return the sine of a degree (not radian).";
h.h.MATH_TRIG_TOOLTIP_TAN = "Return the tangent of a degree (not radian).";
h.h.NEW_COLOUR_VARIABLE = "Create colour variable...";
h.h.NEW_NUMBER_VARIABLE = "Create number variable...";
h.h.NEW_STRING_VARIABLE = "Create string variable...";
h.h.NEW_VARIABLE = "Create variable...";
h.h.NEW_VARIABLE_TITLE = "New variable name:";
h.h.NEW_VARIABLE_TYPE_TITLE = "New variable type:";
h.h.ORDINAL_NUMBER_SUFFIX = "";
h.h.PROCEDURES_ALLOW_STATEMENTS = "allow statements";
h.h.PROCEDURES_BEFORE_PARAMS = "with:";
h.h.PROCEDURES_CALLNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
h.h.PROCEDURES_CALLNORETURN_TOOLTIP = "Run the user-defined function '%1'.";
h.h.PROCEDURES_CALLRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
h.h.PROCEDURES_CALLRETURN_TOOLTIP = "Run the user-defined function '%1' and use its output.";
h.h.PROCEDURES_CALL_BEFORE_PARAMS = "with:";
h.h.PROCEDURES_CREATE_DO = "Create '%1'";
h.h.PROCEDURES_DEFNORETURN_COMMENT = "Describe this function...";
h.h.PROCEDURES_DEFNORETURN_DO = "";
h.h.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
h.h.PROCEDURES_DEFNORETURN_PROCEDURE = "do something";
h.h.PROCEDURES_DEFNORETURN_TITLE = "to";
h.h.PROCEDURES_DEFNORETURN_TOOLTIP = "Creates a function with no output.";
h.h.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
h.h.PROCEDURES_DEFRETURN_RETURN = "return";
h.h.PROCEDURES_DEFRETURN_TOOLTIP = "Creates a function with an output.";
h.h.PROCEDURES_DEF_DUPLICATE_WARNING = "Warning: This function has duplicate parameters.";
h.h.PROCEDURES_HIGHLIGHT_DEF = "Highlight function definition";
h.h.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
h.h.PROCEDURES_IFRETURN_TOOLTIP = "If a value is true, then return a second value.";
h.h.PROCEDURES_IFRETURN_WARNING = "Warning: This block may be used only within a function definition.";
h.h.PROCEDURES_MUTATORARG_TITLE = "input name:";
h.h.PROCEDURES_MUTATORARG_TOOLTIP = "Add an input to the function.";
h.h.PROCEDURES_MUTATORCONTAINER_TITLE = "inputs";
h.h.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "Add, remove, or reorder inputs to this function.";
h.h.REDO = "Redo";
h.h.REMOVE_COMMENT = "Remove Comment";
h.h.RENAME_VARIABLE = "Rename variable...";
h.h.RENAME_VARIABLE_TITLE = "Rename all '%1' variables to:";
h.h.TEXT_APPEND_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";
h.h.TEXT_APPEND_TITLE = "to %1 append text %2";
h.h.TEXT_APPEND_TOOLTIP = "Append some text to variable '%1'.";
h.h.TEXT_CHANGECASE_HELPURL = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
h.h.TEXT_CHANGECASE_OPERATOR_LOWERCASE = "to lower case";
h.h.TEXT_CHANGECASE_OPERATOR_TITLECASE = "to Title Case";
h.h.TEXT_CHANGECASE_OPERATOR_UPPERCASE = "to UPPER CASE";
h.h.TEXT_CHANGECASE_TOOLTIP = "Return a copy of the text in a different case.";
h.h.TEXT_CHARAT_FIRST = "get first letter";
h.h.TEXT_CHARAT_FROM_END = "get letter # from end";
h.h.TEXT_CHARAT_FROM_START = "get letter #";
h.h.TEXT_CHARAT_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-text";
h.h.TEXT_CHARAT_LAST = "get last letter";
h.h.TEXT_CHARAT_RANDOM = "get random letter";
h.h.TEXT_CHARAT_TAIL = "";
h.h.TEXT_CHARAT_TITLE = "in text %1 %2";
h.h.TEXT_CHARAT_TOOLTIP = "Returns the letter at the specified position.";
h.h.TEXT_COUNT_HELPURL = "https://github.com/google/blockly/wiki/Text#counting-substrings";
h.h.TEXT_COUNT_MESSAGE0 = "count %1 in %2";
h.h.TEXT_COUNT_TOOLTIP = "Count how many times some text occurs within some other text.";
h.h.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Add an item to the text.";
h.h.TEXT_CREATE_JOIN_TITLE_JOIN = "join";
h.h.TEXT_CREATE_JOIN_TOOLTIP = "Add, remove, or reorder sections to reconfigure this text block.";
h.h.TEXT_GET_SUBSTRING_END_FROM_END = "to letter # from end";
h.h.TEXT_GET_SUBSTRING_END_FROM_START = "to letter #";
h.h.TEXT_GET_SUBSTRING_END_LAST = "to last letter";
h.h.TEXT_GET_SUBSTRING_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
h.h.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "in text";
h.h.TEXT_GET_SUBSTRING_START_FIRST = "get substring from first letter";
h.h.TEXT_GET_SUBSTRING_START_FROM_END = "get substring from letter # from end";
h.h.TEXT_GET_SUBSTRING_START_FROM_START = "get substring from letter #";
h.h.TEXT_GET_SUBSTRING_TAIL = "";
h.h.TEXT_GET_SUBSTRING_TOOLTIP = "Returns a specified portion of the text.";
h.h.TEXT_INDEXOF_HELPURL = "https://github.com/google/blockly/wiki/Text#finding-text";
h.h.TEXT_INDEXOF_OPERATOR_FIRST = "find first occurrence of text";
h.h.TEXT_INDEXOF_OPERATOR_LAST = "find last occurrence of text";
h.h.TEXT_INDEXOF_TITLE = "in text %1 %2 %3";
h.h.TEXT_INDEXOF_TOOLTIP = "Returns the index of the first/last occurrence of the first text in the second text. Returns %1 if text is not found.";
h.h.TEXT_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
h.h.TEXT_ISEMPTY_TITLE = "%1 is empty";
h.h.TEXT_ISEMPTY_TOOLTIP = "Returns true if the provided text is empty.";
h.h.TEXT_JOIN_HELPURL = "https://github.com/google/blockly/wiki/Text#text-creation";
h.h.TEXT_JOIN_TITLE_CREATEWITH = "create text with";
h.h.TEXT_JOIN_TOOLTIP = "Create a piece of text by joining together any number of items.";
h.h.TEXT_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";
h.h.TEXT_LENGTH_TITLE = "length of %1";
h.h.TEXT_LENGTH_TOOLTIP = "Returns the number of letters (including spaces) in the provided text.";
h.h.TEXT_PRINT_HELPURL = "https://github.com/google/blockly/wiki/Text#printing-text";
h.h.TEXT_PRINT_TITLE = "print %1";
h.h.TEXT_PRINT_TOOLTIP = "Print the specified text, number or other value.";
h.h.TEXT_PROMPT_HELPURL = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
h.h.TEXT_PROMPT_TOOLTIP_NUMBER = "Prompt for user for a number.";
h.h.TEXT_PROMPT_TOOLTIP_TEXT = "Prompt for user for some text.";
h.h.TEXT_PROMPT_TYPE_NUMBER = "prompt for number with message";
h.h.TEXT_PROMPT_TYPE_TEXT = "prompt for text with message";
h.h.TEXT_REPLACE_HELPURL = "https://github.com/google/blockly/wiki/Text#replacing-substrings";
h.h.TEXT_REPLACE_MESSAGE0 = "replace %1 with %2 in %3";
h.h.TEXT_REPLACE_TOOLTIP = "Replace all occurances of some text within some other text.";
h.h.TEXT_REVERSE_HELPURL = "https://github.com/google/blockly/wiki/Text#reversing-text";
h.h.TEXT_REVERSE_MESSAGE0 = "reverse %1";
h.h.TEXT_REVERSE_TOOLTIP = "Reverses the order of the characters in the text.";
h.h.TEXT_TEXT_HELPURL = "https://en.wikipedia.org/wiki/String_(computer_science)";
h.h.TEXT_TEXT_TOOLTIP = "A letter, word, or line of text.";
h.h.TEXT_TRIM_HELPURL = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
h.h.TEXT_TRIM_OPERATOR_BOTH = "trim spaces from both sides of";
h.h.TEXT_TRIM_OPERATOR_LEFT = "trim spaces from left side of";
h.h.TEXT_TRIM_OPERATOR_RIGHT = "trim spaces from right side of";
h.h.TEXT_TRIM_TOOLTIP = "Return a copy of the text with spaces removed from one or both ends.";
h.h.TODAY = "Today";
h.h.UNDO = "Undo";
h.h.UNNAMED_KEY = "unnamed";
h.h.VARIABLES_DEFAULT_NAME = "item";
h.h.VARIABLES_GET_CREATE_SET = "Create 'set %1'";
h.h.VARIABLES_GET_HELPURL = "https://github.com/google/blockly/wiki/Variables#get";
h.h.VARIABLES_GET_TOOLTIP = "Returns the value of this variable.";
h.h.VARIABLES_SET = "set %1 to %2";
h.h.VARIABLES_SET_CREATE_GET = "Create 'get %1'";
h.h.VARIABLES_SET_HELPURL = "https://github.com/google/blockly/wiki/Variables#set";
h.h.VARIABLES_SET_TOOLTIP = "Sets this variable to be equal to the input.";
h.h.VARIABLE_ALREADY_EXISTS = "A variable named '%1' already exists.";
h.h.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = "A variable named '%1' already exists for another type: '%2'.";
h.h.WORKSPACE_COMMENT_DEFAULT_TEXT = "Say something...";
h.h.CONTROLS_FOREACH_INPUT_DO = h.h.CONTROLS_REPEAT_INPUT_DO;
h.h.CONTROLS_FOR_INPUT_DO = h.h.CONTROLS_REPEAT_INPUT_DO;
h.h.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = h.h.CONTROLS_IF_MSG_ELSEIF;
h.h.CONTROLS_IF_ELSE_TITLE_ELSE = h.h.CONTROLS_IF_MSG_ELSE;
h.h.CONTROLS_IF_IF_TITLE_IF = h.h.CONTROLS_IF_MSG_IF;
h.h.CONTROLS_IF_MSG_THEN = h.h.CONTROLS_REPEAT_INPUT_DO;
h.h.CONTROLS_WHILEUNTIL_INPUT_DO = h.h.CONTROLS_REPEAT_INPUT_DO;
h.h.LISTS_CREATE_WITH_ITEM_TITLE = h.h.VARIABLES_DEFAULT_NAME;
h.h.LISTS_GET_INDEX_HELPURL = h.h.LISTS_INDEX_OF_HELPURL;
h.h.LISTS_GET_INDEX_INPUT_IN_LIST = h.h.LISTS_INLIST;
h.h.LISTS_GET_SUBLIST_INPUT_IN_LIST = h.h.LISTS_INLIST;
h.h.LISTS_INDEX_OF_INPUT_IN_LIST = h.h.LISTS_INLIST;
h.h.LISTS_SET_INDEX_INPUT_IN_LIST = h.h.LISTS_INLIST;
h.h.MATH_CHANGE_TITLE_ITEM = h.h.VARIABLES_DEFAULT_NAME;
h.h.PROCEDURES_DEFRETURN_COMMENT = h.h.PROCEDURES_DEFNORETURN_COMMENT;
h.h.PROCEDURES_DEFRETURN_DO = h.h.PROCEDURES_DEFNORETURN_DO;
h.h.PROCEDURES_DEFRETURN_PROCEDURE = h.h.PROCEDURES_DEFNORETURN_PROCEDURE;
h.h.PROCEDURES_DEFRETURN_TITLE = h.h.PROCEDURES_DEFNORETURN_TITLE;
h.h.TEXT_APPEND_VARIABLE = h.h.VARIABLES_DEFAULT_NAME;
h.h.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = h.h.VARIABLES_DEFAULT_NAME;
h.h.MATH_HUE = "230";
h.h.LOOPS_HUE = "120";
h.h.LISTS_HUE = "260";
h.h.LOGIC_HUE = "210";
h.h.VARIABLES_HUE = "330";
h.h.TEXTS_HUE = "160";
h.h.PROCEDURES_HUE = "290";
h.h.COLOUR_HUE = "20";
h.h.VARIABLES_DYNAMIC_HUE = "310";
var Z = {
    Ch: null, Pa: function () {
        yc();
        var a = document.getElementById("linkButton");
        "BlocklyStorage" in window ? (BlocklyStorage.HTTPREQUEST_ERROR = W("Games_httpRequestError"), BlocklyStorage.LINK_ALERT = W("Games_linkAlert"), BlocklyStorage.HASH_ERROR = W("Games_hashError"), BlocklyStorage.XML_ERROR = W("Games_xmlError"), BlocklyStorage.alert = Y.tu.bind(Y, a), a && Dc(a, BlocklyStorage.link)) : a && (a.style.display = "none");
        (a = document.getElementById("languageMenu")) && a.addEventListener("change", Z.Uw, !0);
        h.zb && (h.zb.Vv = !1);
        h.Fq &&
        (h.Fq.Vv = !1)
    }, iF: function (a, c) {
        if ("BlocklyStorage" in window && 1 < window.location.hash.length) BlocklyStorage.retrieveXml(window.location.hash.substring(1)); else {
            var d = null;
            try {
                d = window.sessionStorage.Pl
            } catch (g) {
            }
            d && delete window.sessionStorage.Pl;
            var e = zc(V), f = c && zc(V - 1);
            f && "function" == typeof c && (f = c(f));
            (a = d || e || f || a) && Z.iu(a)
        }
    }, iu: function (a) {
        Z.Ch ? Z.Ch.setValue(a, -1) : (a = h.I.Ue(a), C.clear(), h.I.Fe(a, C), Za())
    }, jo: function () {
        if (Z.Ch) var a = Z.Ch.getValue(); else {
            a = h.I.Cu(!0);
            if (1 == D(C, !1).length && a.querySelector) {
                var c =
                    a.querySelector("block");
                c && (c.removeAttribute("x"), c.removeAttribute("y"))
            }
            a = h.I.Sd(a)
        }
        return a
    }, yl: function () {
        return C
    }, Jz: function () {
        window.localStorage && (window.localStorage[Bc + V] = Z.jo())
    }, mj: function () {
        window.location = (sc ? "index.html" : "./") + "?lang=" + U
    }, Uw: function () {
        if (window.sessionStorage) {
            if (Z.Ch) var a = Z.Ch.getValue(); else a = h.I.Cu(), a = h.I.Sd(a);
            window.sessionStorage.Pl = a
        }
        a = document.getElementById("languageMenu");
        a = encodeURIComponent(a.options[a.selectedIndex].value);
        var c = window.location.search;
        c = 1 >= c.length ? "?lang=" + a : c.match(/[?&]lang=[^&]*/) ? c.replace(/([?&]lang=)[^&]*/, "$1" + a) : c.replace(/\?/, "?lang=" + a + "&");
        window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + c
    }, bp: function () {
        10 > V ? window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + U + "&level=" + (V + 1) : Z.mj()
    }, et: function (a, c) {
        if (a) {
            var d = a.match(/^block_id_([^']+)$/);
            d && (a = d[1])
        }
        var e = a;
        a = C;
        if (void 0 === c) {
            for (var f = 0; d = a.kj[f]; f++) d.Se(!1);
            a.kj.length =
                0
        }
        if (d = e ? u(a, e) : null) (c = void 0 === c || c) ? -1 == a.kj.indexOf(d) && a.kj.push(d) : h.g.Hi(a.kj, d), d.Se(c)
    }, Ky: function (a, c) {
        a = document.getElementById(a);
        a.firstChild || (a = h.nf(a, {
            rtl: tc(),
            readOnly: !0
        }), "string" != typeof c && (c = c.join("")), h.I.Fe(h.I.Ue(c), a))
    }, Zz: function (a) {
        a = a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")");
        return a.replace(/\s+$/, "")
    }, gf: function (a) {
        if ("click" == a.type && "touchend" == Z.gf.op && Z.gf.mp + 2E3 > Date.now() || Z.gf.op == a.type && Z.gf.mp + 400 > Date.now()) return a.preventDefault(), a.stopPropagation(),
            !0;
        Z.gf.op = a.type;
        Z.gf.mp = Date.now();
        return !1
    }
};
Z.gf.op = null;
Z.gf.mp = 0;
Z.VE = function () {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "third-party/JS-Interpreter/compressed.js";
    document.head.appendChild(a)
};
Z.WE = function () {
    var a = document.createElement("link");
    a.rel = "stylesheet";
    a.type = "text/css";
    a.href = "common/prettify.css";
    document.head.appendChild(a);
    a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "common/prettify.js";
    document.head.appendChild(a)
};
window.BlocklyInterface = Z;
Z.setCode = Z.iu;
Z.getCode = Z.jo;
Z.getWorkspace = Z.yl;
var Y = {
    Me: !1, hs: null, al: null, ci: function (a, c, d, e, f, g) {
        function k() {
            Y.Me && (l.style.visibility = "visible", l.style.zIndex = 10, m.style.visibility = "hidden")
        }

        if (!a) throw TypeError("Content not found: " + a);
        Y.Me && Y.Bc(!1);
        h.Ya() && h.ec(!0);
        Y.Me = !0;
        Y.hs = c;
        Y.al = g;
        var l = document.getElementById("dialog");
        g = document.getElementById("dialogShadow");
        var m = document.getElementById("dialogBorder"), n;
        for (n in f) l.style[n] = f[n];
        e && (g.style.visibility = "visible", g.style.opacity = .3, g.style.zIndex = 9, e = document.createElement("div"),
            e.id = "dialogHeader", l.appendChild(e), Y.Kn = h.Zf(e, "mousedown", Y.wx));
        l.appendChild(a);
        a.className = a.className.replace("dialogHiddenContent", "");
        d && c ? (Y.Rl(c, !1, .2), Y.Rl(l, !0, .8), setTimeout(k, 175)) : k()
    }, js: 0, ks: 0, wx: function (a) {
        Y.Nn();
        if (!h.g.Oh(a)) {
            var c = document.getElementById("dialog");
            Y.js = c.offsetLeft - a.clientX;
            Y.ks = c.offsetTop - a.clientY;
            Y.Mn = h.Zf(document, "mouseup", Y.Nn);
            Y.Ln = h.Zf(document, "mousemove", Y.xx);
            a.stopPropagation()
        }
    }, xx: function (a) {
        var c = document.getElementById("dialog"), d = Y.js + a.clientX;
        a = Y.ks + a.clientY;
        a = Math.max(a, 0);
        a = Math.min(a, window.innerHeight - c.offsetHeight);
        d = Math.max(d, 0);
        d = Math.min(d, window.innerWidth - c.offsetWidth);
        c.style.left = d + "px";
        c.style.top = a + "px"
    }, Nn: function () {
        Y.Mn && (h.lb(Y.Mn), Y.Mn = null);
        Y.Ln && (h.lb(Y.Ln), Y.Ln = null)
    }, Bc: function (a) {
        function c() {
            e.style.zIndex = -1;
            e.style.visibility = "hidden";
            document.getElementById("dialogBorder").style.visibility = "hidden"
        }

        if (Y.Me) {
            Y.Nn();
            Y.Kn && (h.lb(Y.Kn), Y.Kn = null);
            Y.Me = !1;
            Y.al && Y.al();
            Y.al = null;
            var d = !1 === a ? null : Y.hs;
            a = document.getElementById("dialog");
            var e = document.getElementById("dialogShadow");
            e.style.opacity = 0;
            d && a ? (Y.Rl(a, !1, .8), Y.Rl(d, !0, .2), setTimeout(c, 175)) : c();
            a.style.visibility = "hidden";
            a.style.zIndex = -1;
            for ((d = document.getElementById("dialogHeader")) && d.parentNode.removeChild(d); a.firstChild;) d = a.firstChild, d.className += " dialogHiddenContent", document.body.appendChild(d)
        }
    }, Rl: function (a, c, d) {
        function e() {
            f.style.width = g.width + "px";
            f.style.height = g.height + "px";
            f.style.left = g.x + "px";
            f.style.top = g.y + "px";
            f.style.opacity = d
        }

        if (a) {
            var f =
                document.getElementById("dialogBorder"), g = Y.Vx(a);
            c ? (f.className = "dialogAnimate", setTimeout(e, 1)) : (f.className = "", e());
            f.style.visibility = "visible"
        }
    }, Vx: function (a) {
        var c = h.g.style.no(a);
        c = {x: c.x, y: c.y};
        a.getBBox ? (a = a.getBBox(), c.height = a.height, c.width = a.width) : (c.height = a.offsetHeight, c.width = a.offsetWidth);
        return c
    }, tu: function (a, c) {
        var d = document.getElementById("containerStorage");
        d.textContent = "";
        c = c.split("\n");
        for (var e = 0; e < c.length; e++) {
            var f = document.createElement("p");
            f.appendChild(document.createTextNode(c[e]));
            d.appendChild(f)
        }
        d = document.getElementById("dialogStorage");
        Y.ci(d, a, !0, !0, {width: "50%", left: "25%", top: "5em"}, Y.Jp);
        Y.Gp()
    }, Bw: function () {
        if (!zc(V)) if (Y.Me || C.lc()) setTimeout(Y.Bw, 15E3); else {
            var a = document.getElementById("dialogAbort"), c = document.getElementById("abortCancel");
            c.addEventListener("click", Y.Bc, !0);
            c.addEventListener("touchend", Y.Bc, !0);
            c = document.getElementById("abortOk");
            c.addEventListener("click", Z.mj, !0);
            c.addEventListener("touchend", Z.mj, !0);
            Y.ci(a, null, !1, !0, {
                width: "40%", left: "30%",
                top: "3em"
            }, function () {
                document.body.removeEventListener("keydown", Y.zr, !0)
            });
            document.body.addEventListener("keydown", Y.zr, !0)
        }
    }, nu: function () {
        document.getElementById("galleryXml").value = Z.jo();
        var a = document.getElementById("galleryDialog");
        if (!Y.nu.Iz) {
            var c = document.getElementById("galleryCancel");
            c.addEventListener("click", Y.Bc, !0);
            c.addEventListener("touchend", Y.Bc, !0);
            c = document.getElementById("galleryOk");
            c.addEventListener("click", Y.fo, !0);
            c.addEventListener("touchend", Y.fo, !0);
            Y.nu.Iz = !0
        }
        c =
            document.getElementById("submitButton");
        Y.ci(a, c, !0, !0, {width: "40%", left: "30%", top: "3em"}, function () {
            document.body.removeEventListener("keydown", Y.Bs, !0)
        });
        document.body.addEventListener("keydown", Y.Bs, !0);
        setTimeout(function () {
            document.getElementById("galleryTitle").focus()
        }, 250)
    }, GE: function () {
        var a = document.getElementById("dialogDone");
        if (C) {
            var c = document.getElementById("dialogLinesText");
            c.textContent = "";
            var d = h.Fq.MF(C);
            d = Z.Zz(d);
            var e = d.replace(/\/\/[^\n]*/g, "");
            e = e.replace(/\/\*.*\*\//g, "");
            e = e.replace(/[ \t]+\n/g, "\n");
            e = e.replace(/\n+/g, "\n");
            e = e.trim();
            e = e.split("\n").length;
            var f = document.getElementById("containerCode");
            f.textContent = d;
            "function" == typeof prettyPrintOne && (d = f.innerHTML, d = prettyPrintOne(d, "js"), f.innerHTML = d);
            d = 1 == e ? W("Games_linesOfCode1") : W("Games_linesOfCode2").replace("%1", String(e));
            c.appendChild(document.createTextNode(d))
        }
        d = 10 > V ? W("Games_nextLevel").replace("%1", String(V + 1)) : W("Games_finalLevel");
        c = document.getElementById("doneCancel");
        c.addEventListener("click",
            Y.Bc, !0);
        c.addEventListener("touchend", Y.Bc, !0);
        c = document.getElementById("doneOk");
        c.addEventListener("click", Z.bp, !0);
        c.addEventListener("touchend", Z.bp, !0);
        Y.ci(a, null, !1, !0, {width: "40%", left: "30%", top: "3em"}, function () {
            document.body.removeEventListener("keydown", Y.Rr, !0)
        });
        document.body.addEventListener("keydown", Y.Rr, !0);
        document.getElementById("dialogDoneText").textContent = d
    }, gs: function (a) {
        !Y.Me || 13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode || (Y.Bc(!0), a.stopPropagation(), a.preventDefault())
    },
    Gp: function () {
        document.body.addEventListener("keydown", Y.gs, !0)
    }, Jp: function () {
        document.body.removeEventListener("keydown", Y.gs, !0)
    }, Rr: function (a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) Y.Bc(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && Z.bp()
    }, zr: function (a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) Y.Bc(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && Z.mj()
    }, Bs: function (a) {
        27 == a.keyCode ? Y.Bc(!0) : 13 == a.keyCode && Y.fo()
    }, fo: function () {
        var a = document.getElementById("galleryTitle");
        if (a.value.trim()) {
            a = document.getElementById("galleryForm");
            for (var c = [], d = 0, e; e = a.elements[d]; d++) e.name && (c[d] = encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value));
            var f = new XMLHttpRequest;
            f.open("POST", a.action);
            f.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            f.onload = function () {
                if (4 == f.readyState) {
                    var g = 200 == f.status ? W("Games_submitted") : W("Games_httpRequestError") + "\nStatus: " + f.status;
                    Y.tu(null, g)
                }
            };
            f.send(c.join("&"));
            Y.Bc(!0)
        } else a.value = "", a.focus()
    }
};
window.BlocklyDialogs = Y;
Y.hideDialog = Y.Bc;
var Uc = Uc || {};

function Vc(a, c) {
    function d() {
    }

    d.prototype = c.prototype;
    a.v = c.prototype;
    a.prototype = new d;
    a.prototype.constructor = a;
    a.uE = function (e, f, g) {
        return c.prototype[f].apply(e, Array.prototype.slice.call(arguments, 2))
    }
}

if (!Wc) {
    var Wc, Xc = "";
    "undefined" !== typeof navigator && navigator && "string" == typeof navigator.userAgent && (Xc = navigator.userAgent);
    var Yc = 0 == Xc.indexOf("Opera");
    Wc = {
        hF: {PB: "ScriptEngine" in window},
        XC: Yc,
        Xe: !Yc && -1 != Xc.indexOf("MSIE"),
        rr: !Yc && -1 != Xc.indexOf("WebKit")
    }
}
if (!Zc) var Zc = {};
if (!$c) var $c = {};
if (!ad) var ad = {};
if (!bd) var bd = {};
if (!cd) var cd = {};
if (!dd) var dd = {};
var ed = Uc.TA ? {uF: !0} : {};

function fd() {
    throw Error("Do not instantiate directly");
}

fd.prototype.Vr = null;
fd.prototype.toString = function () {
    return this.content
};

function gd(a) {
    if (null != a) switch (a.Vr) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0
    }
    return null
}

function hd() {
    fd.call(this)
}

Vc(hd, fd);
hd.prototype.mx = ed;

function id(a) {
    return null != a && a.mx === ed ? a : jd(String(String(a)).replace(kd, ld), gd(a))
}

var jd = function (a) {
    function c() {
    }

    c.prototype = a.prototype;
    return function (d, e) {
        var f = new c;
        f.content = String(d);
        void 0 !== e && (f.Vr = e);
        return f
    }
}(hd), md = {
    "\x00": "&#0;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    "-": "&#45;",
    "/": "&#47;",
    "=": "&#61;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
};

function ld(a) {
    return md[a]
}

var kd = /[\x00\x22\x26\x27\x3c\x3e]/g;

function nd() {
    return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>'
};h.Ja = function (a, c, d) {
    "function" != typeof a && h.Ja.yu(a);
    this.Qh = a;
    this.tl = null;
    this.Qj = 0;
    this.Kp = this.lp = null;
    a = this.Qh;
    if (Array.isArray(a)) {
        for (var e = !1, f = 0; f < a.length; f++) {
            var g = a[f][0];
            "string" == typeof g ? a[f][0] = h.g.oc(g) : (null != g.alt && (a[f][0].alt = h.g.oc(g.alt)), e = !0)
        }
        if (!(e || 2 > a.length)) {
            e = [];
            for (f = 0; f < a.length; f++) e.push(a[f][0]);
            f = h.g.Ga.Dp(e);
            g = h.g.Ga.gx(e, f);
            var k = h.g.Ga.hx(e, f);
            !g && !k || f <= g + k || (g && (this.lp = e[0].substring(0, g - 1)), k && (this.Kp = e[0].substr(1 - k)), this.Qh = h.Ja.Iw(a, g, k))
        }
    }
    a = this.getOptions(!1)[0];
    h.Ja.v.constructor.call(this, a[1], c, d);
    this.Xh = this.ad = null
};
h.g.object.S(h.Ja, h.xa);
h.Ja.oa = function (a) {
    return new h.Ja(a.options, void 0, a)
};
h.Ja.prototype.Zq = !0;
h.Ja.HA = 25;
h.Ja.tC = .45;
h.Ja.xq = 5;
h.Ja.zv = 2 * h.Ja.xq;
h.Ja.Yp = h.g.userAgent.pk ? "\u25bc" : "\u25be";
b = h.Ja.prototype;
b.bv = "default";
b.nj = function () {
    h.Ja.v.nj.call(this);
    this.ad = h.g.o.J("image", {y: h.Ja.xq}, this.Wc);
    this.pd = h.g.o.J("tspan", {}, this.Jc);
    this.pd.appendChild(document.createTextNode(this.B.H ? h.Ja.Yp + " " : " " + h.Ja.Yp));
    this.B.H ? this.Jc.insertBefore(this.pd, this.ei) : this.Jc.appendChild(this.pd)
};
b.Wj = function () {
    var a = new h.Pf;
    ea(a, this.B.H);
    a.ai("listbox");
    var c = this.getOptions(!1);
    this.Xh = null;
    for (var d = 0; d < c.length; d++) {
        var e = c[d][0], f = c[d][1];
        if ("object" == typeof e) {
            var g = new Image(e.width, e.height);
            g.src = e.src;
            g.alt = e.alt || "";
            e = g
        }
        e = new h.Gk(e);
        e.ai("option");
        ea(e, this.B.H);
        e.setValue(f);
        e.Mi = !0;
        da(a, e);
        Jb(e, f == this.je);
        f == this.je && (this.Xh = e);
        Kb(e, this.vy, this)
    }
    h.g.Ka.bi(a.X, h.g.Ka.State.Mu, this.Xh ? this.Xh.ib() : "");
    this.Pe = a;
    this.Pe.wa(h.w.gy());
    h.g.o.Ab(this.Pe.X, "blocklyDropdownMenu");
    h.w.Rz(this, this.Ix.bind(this));
    this.Pe.focus();
    this.Xh && h.g.style.fu(this.Xh.X, this.Pe.X)
};
b.Ix = function () {
    this.Pe.G();
    this.Pe = null
};
b.vy = function (a) {
    h.w.jj(this, !0);
    this.setValue(a.getValue())
};
h.Ja.Iw = function (a, c, d) {
    for (var e = [], f = 0; f < a.length; f++) {
        var g = a[f][0], k = a[f][1];
        g = g.substring(c, g.length - d);
        e[f] = [g, k]
    }
    return e
};
b = h.Ja.prototype;
b.getOptions = function (a) {
    return "function" == typeof this.Qh ? (this.tl && a || (this.tl = this.Qh.call(this), h.Ja.yu(this.tl)), this.tl) : this.Qh
};
b.fl = function (a) {
    for (var c = !1, d = this.getOptions(!0), e = 0, f; f = d[e]; e++) if (f[1] == a) {
        c = !0;
        break
    }
    return c ? a : (this.B && console.warn("Cannot set the dropdown's value to an unavailable option. Block type: " + this.B.type + ", Field name: " + this.name + ", Value: " + a), null)
};
b.hl = function (a) {
    h.Ja.v.hl.call(this, a);
    a = this.getOptions(!0);
    for (var c = 0, d; d = a[c]; c++) d[1] == this.je && (this.Qj = c)
};
b.ie = function () {
    this.B && this.pd && (this.pd.style.fill = this.B.Qa ? vb(this.B) : this.B.dg)
};
b.Vh = function () {
    this.ei.nodeValue = "";
    this.ad.style.display = "none";
    var a = this.getOptions(!0), c = 0 <= this.Qj && a[this.Qj][0];
    if (c && "object" == typeof c) {
        this.ad.style.display = "";
        this.ad.setAttributeNS(h.g.o.sh, "xlink:href", c.src);
        this.ad.setAttribute("height", c.height);
        this.ad.setAttribute("width", c.width);
        a = h.g.o.so(this.pd);
        var d = Number(c.width);
        this.jb.height = Number(c.height) + h.Ja.zv;
        this.jb.width = d + a + h.xa.Gi;
        this.B.H ? (c = h.xa.fh - 1, this.ad.setAttribute("x", h.xa.fh + a), this.Jc.setAttribute("x", c)) : (c = d +
            a + h.xa.fh + 1, this.Jc.setAttribute("text-anchor", "end"), this.Jc.setAttribute("x", c), this.ad.setAttribute("x", h.xa.fh))
    } else this.ei.nodeValue = ob(this), this.Jc.setAttribute("text-anchor", "start"), this.Jc.setAttribute("x", h.xa.fh), this.jb.height = h.xa.eq, this.jb.width = h.g.o.so(this.Jc) + h.xa.Gi;
    this.Ki.setAttribute("height", this.jb.height);
    this.Ki.setAttribute("width", this.jb.width)
};
b.to = function () {
    if (0 > this.Qj) return null;
    var a = this.getOptions(!0)[this.Qj][0];
    return "object" == typeof a ? a.alt : a
};
h.Ja.yu = function (a) {
    if (!Array.isArray(a)) throw TypeError("FieldDropdown options must be an array.");
    if (!a.length) throw TypeError("FieldDropdown options must not be an empty array.");
    for (var c = !1, d = 0; d < a.length; ++d) {
        var e = a[d];
        Array.isArray(e) ? "string" != typeof e[1] ? (c = !0, console.error("Invalid option[" + d + "]: Each FieldDropdown option id must be a string. Found " + e[1] + " in: ", e)) : e[0] && "string" != typeof e[0] && "string" != typeof e[0].src && (c = !0, console.error("Invalid option[" + d + "]: Each FieldDropdown option must have a string label or image description. Found" +
            e[0] + " in: ", e)) : (c = !0, console.error("Invalid option[" + d + "]: Each FieldDropdown option must be an array. Found: ", e))
    }
    if (c) throw TypeError("Found invalid FieldDropdown options.");
};
h.Ja.prototype.Fg = function (a) {
    if (this.Pe) {
        if (a === h.navigation.sm) return Fb(this.Pe), !0;
        if (a === h.navigation.rm) return Db(this.Pe), !0
    }
    return h.Ja.v.Fg.call(this, a)
};
h.zc.register("field_dropdown", h.Ja);
h.Hd = function (a, c, d, e, f, g, k) {
    if (!a) throw Error("Src value of an image field is required");
    a = h.g.oc(a);
    d = Number(h.g.oc(d));
    c = Number(h.g.oc(c));
    if (isNaN(d) || isNaN(c)) throw Error("Height and width values of an image field must cast to numbers.");
    if (0 >= d || 0 >= c) throw Error("Height and width values of an image field must be greater than 0.");
    this.fj = !1;
    this.Qk = "";
    h.Hd.v.constructor.call(this, a || "", null, k);
    k || (this.fj = !!g, this.Qk = h.g.oc(e) || "");
    this.jb = new h.g.md(c, d + h.Hd.yr);
    this.Hy = d;
    this.Oi = null;
    "function" ==
    typeof f && (this.Oi = f)
};
h.g.object.S(h.Hd, h.xa);
h.Hd.oa = function (a) {
    return new h.Hd(a.src, a.width, a.height, void 0, void 0, void 0, a)
};
h.Hd.yr = 1;
b = h.Hd.prototype;
b.Gd = !1;
b.pf = !1;
b.Ri = function (a) {
    h.Hd.v.Ri.call(this, a);
    this.fj = !!a.flipRtl;
    this.Qk = h.g.oc(a.alt) || ""
};
b.nj = function () {
    this.ad = h.g.o.J("image", {height: this.Hy + "px", width: this.jb.width + "px", alt: this.Qk}, this.Wc);
    this.ad.setAttributeNS(h.g.o.sh, "xlink:href", this.je)
};
b.fl = function (a) {
    return "string" != typeof a ? null : a
};
b.hl = function (a) {
    this.je = a;
    this.ad && this.ad.setAttributeNS(h.g.o.sh, "xlink:href", this.je || "")
};
b.Is = function () {
    return this.fj
};
b.Wj = function () {
    this.Oi && this.Oi(this)
};
b.to = function () {
    return this.Qk
};
h.zc.register("field_image", h.Hd);
h.zb.animal = {
    Pa: function () {
        this.zd(120);
        Q(yb(this), "", "NAME");
        Q(tb(this.Xf(h.Ha, "PIC"), h.nk), W("Puzzle_picture"));
        Q(Q(tb(yb(this), h.nk), W("Puzzle_legs")), new h.Ja(od), "LEGS");
        Q(this.Xf(h.Ca, "TRAITS"), W("Puzzle_traits"));
        this.Mg(!1)
    }, Wb: function () {
        var a = document.createElement("mutation");
        a.setAttribute("animal", this.Tc);
        return a
    }, yc: function (a) {
        this.Ig(parseInt(a.getAttribute("animal"), 10))
    }, Tc: 0, Ig: function (a) {
        this.Tc = a;
        wb(this, W("Puzzle_animal" + a));
        this.rg = W("Puzzle_animal" + a + "HelpUrl")
    }, Io: function () {
        return Fa(this,
            "LEGS") == this.Tc
    }
};
h.zb.picture = {
    Pa: function () {
        this.zd(30);
        yb(this, "PIC");
        this.gm(!0);
        this.Gf("")
    }, Wb: h.zb.animal.Wb, yc: h.zb.animal.yc, Tc: 0, Ig: function (a) {
        this.Tc = a;
        var c = "puzzle/" + W("Puzzle_animal" + a + "Pic"), d = W("Puzzle_animal" + a + "PicHeight");
        a = W("Puzzle_animal" + a + "PicWidth");
        Q(ia(this, "PIC"), new h.Hd(c, a, d))
    }, Io: function () {
        var a = this.getParent();
        return a && a.Tc == this.Tc
    }
};
h.zb.trait = {
    Pa: function () {
        this.zd(290);
        Q(yb(this), "", "NAME");
        this.hm(!0);
        this.fm(!0)
    }, Wb: function () {
        var a = document.createElement("mutation");
        a.setAttribute("animal", this.Tc);
        a.setAttribute("trait", this.xu);
        return a
    }, yc: function (a) {
        this.Ig(parseInt(a.getAttribute("animal"), 10), parseInt(a.getAttribute("trait"), 10))
    }, Tc: 0, xu: 0, Ig: function (a, c) {
        this.Tc = a;
        this.xu = c;
        wb(this, W("Puzzle_animal" + a + "Trait" + c))
    }, Io: function () {
        var a = ub(this);
        return a && a.Tc == this.Tc
    }
};
var Bc = "puzzle";

function pd(a) {
    for (var c = a.length - 1; 0 < c; c--) {
        var d = Math.floor(Math.random() * (c + 1)), e = a[c];
        a[c] = a[d];
        a[d] = e
    }
}

function od() {
    for (var a = [[W("Puzzle_legsChoose"), "0"]], c = 1, d; d = Cc("Puzzle_animal" + c + "Legs");) a[c] = [d, String(c)], c++;
    a.sort(function (e, f) {
        return e[0] - f[0]
    });
    return a
}

function qd() {
    for (var a = P(C), c = 0, d = [], e = 0, f; f = a[e]; e++) f.Io() || (c++, f.select(), d.push(f));
    var g = document.getElementById("graphValue");
    setTimeout(function () {
        g.style.width = 100 * (a.length - c) / a.length + "px"
    }, 500);
    1 == c ? e = [W("Puzzle_error1"), W("Puzzle_tryAgain")] : c ? e = [W("Puzzle_error2").replace("%1", c), W("Puzzle_tryAgain")] : (e = [W("Puzzle_error0").replace("%1", a.length)], Z.Jz());
    f = document.getElementById("answerMessage");
    f.textContent = "";
    for (var k = 0; k < e.length; k++) {
        var l = document.createElement("div");
        l.appendChild(document.createTextNode(e[k]));
        f.appendChild(l)
    }
    e = document.getElementById("answers");
    f = document.getElementById("checkButton");
    Y.ci(e, f, !0, !0, {width: "25%", left: tc() ? "5%" : "70%", top: "5em"}, c ? Y.Jp : Z.mj);
    Y.Gp();
    if (d.length) {
        pd(d);
        var m = d[0], n = function () {
            m.select();
            Y.Me && (setTimeout(function () {
                hb(m)
            }, 150), setTimeout(n, 300))
        };
        n()
    } else setTimeout(rd, 2E3), h.selected && hb(h.selected)
}

function rd() {
    C.Od.play("win", .5);
    C.options.vb.Ge = !0;
    for (var a = D(C, !1), c = 0, d; d = a[c]; c++) sd(d, c / a.length * 360)
}

function sd(a, c) {
    if (Y.Me) {
        var d = C.Yc(), e = d.Ob / 2, f = d.yb / 2, g = J(a);
        d = a.Fa();
        tc() && (d.x -= g.width);
        var k = Math.max(175, Math.min(e, f) - Math.max(g.height, g.width) / 2), l = Date.now(), m = c + l / 50 % 360;
        k *= Math.sin(l % 5E3 / 5E3 * 2 * Math.PI) / 8 + .875;
        f = k * Math.cos(h.g.Vb.Sg(m)) + f - g.width / 2;
        g = k * Math.sin(h.g.Vb.Sg(m)) + e - g.height / 2;
        5 > Math.sqrt(Math.pow(f - d.x, 2) + Math.pow(g - d.y, 2)) ? (e = f - d.x, d = g - d.y) : (d = h.g.Vb.cA(Math.atan2(g - d.y, f - d.x)), d %= 360, 0 > d && (d += 360), e = Math.round(5 * Math.cos(h.g.Vb.Sg(d))), d = Math.round(5 * Math.sin(h.g.Vb.Sg(d))));
        a.moveBy(e, d);
        setTimeout(sd.bind(null, a, c), 50)
    }
}

function td(a) {
    Z.Ky("sample", '<xml>;<block type="animal" x="5" y="5">;<mutation animal="1"></mutation>;<title name="LEGS">1</title>;<value name="PIC">;<block type="picture">;<mutation animal="1"></mutation>;</block>;</value>;<statement name="TRAITS">;<block type="trait">;<mutation animal="1" trait="2"></mutation>;<next>;<block type="trait">;<mutation animal="1" trait="1"></mutation>;</block>;</next>;</block>;</statement>;</block>;</xml>'.split(";"));
    var c = document.getElementById("help"), d = document.getElementById("helpButton");
    Y.ci(c, d, a, !0, {width: "50%", left: "25%", top: "5em"}, Y.Jp);
    Y.Gp()
}

window.addEventListener("load", function () {
    function a() {
        d.style.width = window.innerWidth - 20 + "px";
        d.style.height = window.innerHeight - d.offsetTop - 15 + "px"
    }

    document.body.innerHTML = '<div style="display: none"><span id="Puzzle_animal1">Duck</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Feathers</span><span id="Puzzle_animal1Trait2">Beak</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">Cat</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Whiskers</span><span id="Puzzle_animal2Trait2">Fur</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Cat</span><span id="Puzzle_animal3">Bee</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Honey</span><span id="Puzzle_animal3Trait2">Stinger</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Bee</span><span id="Puzzle_animal4">Snail</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Shell</span><span id="Puzzle_animal4Trait2">Slime</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">picture:</span><span id="Puzzle_legs">legs:</span><span id="Puzzle_legsChoose">choose...</span><span id="Puzzle_traits">traits:</span><span id="Puzzle_error0">Perfect!\nAll %1 blocks are correct.</span><span id="Puzzle_error1">Almost! One block is incorrect.</span><span id="Puzzle_error2">%1 blocks are incorrect.</span><span id="Puzzle_tryAgain">The highlighted block is not correct.\nKeep trying.</span></div><table id="header" width="100%"><tr><td valign="bottom"><h1><span id="title">' + ((sc ?
        '<a href="index.html?lang=' + id(U) + '">' : '<a href="./?lang=' + id(U) + '">') + "Blockly Games</a> : " + id({appName: "Puzzle"}.appName) + '</span></h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="helpButton">Help</button>&nbsp;<button id="checkButton" class="primary">Check Answers</button></td></tr></table><div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">For each animal (green), attach its picture, choose its number of legs, and make a stack of its traits.</div><div id="sample" class="readonly"></div>') +
        nd() + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + nd() + "</div>";
    Z.Pa();
    var c = tc(), d = document.getElementById("blockly");
    a(null);
    window.addEventListener("resize", a);
    C = h.nf("blockly", {media: "third-party/blockly/media/", rtl: c, scrollbars: !1, trashcan: !1});
    var e = zc(V);
    try {
        var f = window.sessionStorage.Pl
    } catch (v) {
        f = null
    }
    if (f) delete window.sessionStorage.Pl, c = h.I.Ue(f), h.I.Fe(c, C); else if (e) c = h.I.Ue(e), h.I.Fe(c, C); else {
        var g =
            [], k = [], l = [];
        f = 1;
        for (var m; Cc("Puzzle_animal" + f);) {
            m = C.Sh("animal");
            m.Ig(f);
            g.push(m);
            m = C.Sh("picture");
            m.Ig(f);
            k.push(m);
            for (var n = 1; Cc("Puzzle_animal" + f + "Trait" + n);) m = C.Sh("trait"), m.Ig(f, n), l.push(m), n++;
            f++
        }
        pd(g);
        pd(k);
        pd(l);
        g = [].concat(g, k, l);
        c && g.reverse();
        for (f = 0; m = g[f]; f++) m.Jn = !1, m.ug(), m.wa();
        for (f = k = 0; m = g[f]; f++) l = m.ga().getBBox(), m.zE = l.width, m.yE = l.height, m.Hr = l.width * l.height, k += m.Hr;
        h.ek(C);
        n = h.uu(y(C));
        n.width -= 50;
        n.height -= 50;
        var q = 0;
        for (f = 0; m = g[f]; f++) {
            l = m.ga().getBBox();
            var r = c ?
                l.width + q / k * n.width : q / k * (n.width - l.width);
            r = Math.round(r + 50 * Math.random());
            m.moveBy(r, Math.round(Math.random() * (n.height - l.height)));
            q += m.Hr
        }
    }
    Za();
    Dc("checkButton", qd);
    Dc("helpButton", function () {
        td(!0)
    });
    e || td(!1);
    h.Sb *= 2;
    h.jq = h.Sb;
    C.Od.load(["puzzle/win.mp3", "puzzle/win.ogg"], "win")
});
