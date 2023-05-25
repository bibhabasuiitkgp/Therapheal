/*

Qwilo - Multipurpose Responsive HTML5 Template
Author: iqonicthemes.in
Version: 1.0
Design and Developed by: iqonicthemes.in

*/


/*================================================
[  Table of contents  ]
================================================

:: jQuery Appear
:: Modernizr
:: CountDown Clock
:: jquery.countTo
:: Isotope PACKAGED v3.0.4
:: Parallax [Jarallax]
:: Owl Carousel
:: MediaElement.js
:: Retina.js
:: WOW wow.js
:: Magnific Popup
:: particles
:: Portfolio Hover Effcet
:: typer Js

======================================
[ End table content ]
======================================*/

/*************************
jQuery Appear
*************************/
(function($) {
    $.fn.appear = function(fn, options) {
        var settings = $.extend({
            data: undefined,
            one: true,
            accX: 0,
            accY: 0
        }, options);
        return this.each(function() {
            var t = $(this);
            t.appeared = false;
            if (!fn) {
                t.trigger('appear', settings.data);
                return;
            }
            var w = $(window);
            var check = function() {
                if (!t.is(':visible')) {
                    t.appeared = false;
                    return;
                }
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;
                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();
                if (y + th + ay >= b && y <= b + wh + ay && x + tw + ax >= a && x <= a + ww + ax) {
                    if (!t.appeared) t.trigger('appear', settings.data);
                } else {
                    t.appeared = false;
                }
            };
            var modifiedFn = function() {
                t.appeared = true;
                if (settings.one) {
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }
                fn.apply(this, arguments);
            };
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);
            w.scroll(check);
            $.fn.appear.checks.push(check);
            (check)();
        });
    };
    $.extend($.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var length = $.fn.appear.checks.length;
            if (length > 0)
                while (length--)($.fn.appear.checks[length])();
        },
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });
    $.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function(i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function() {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });
})(jQuery);

/*************************
Modernizr
*************************/
window.Modernizr = function(e, t, n) {
    function r(e) {
        b.cssText = e
    }

    function o(e, t) {
        return r(S.join(e + ";") + (t || ""))
    }

    function a(e, t) {
        return typeof e === t
    }

    function i(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function c(e, t) {
        for (var r in e) {
            var o = e[r];
            if (!i(o, "-") && b[o] !== n) return "pfx" == t ? o : !0
        }
        return !1
    }

    function s(e, t, r) {
        for (var o in e) {
            var i = t[e[o]];
            if (i !== n) return r === !1 ? e[o] : a(i, "function") ? i.bind(r || t) : i
        }
        return !1
    }

    function u(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1),
            o = (e + " " + k.join(r + " ") + r).split(" ");
        return a(t, "string") || a(t, "undefined") ? c(o, t) : (o = (e + " " + T.join(r + " ") + r).split(" "), s(o, t, n))
    }

    function l() {
        p.input = function(n) {
            for (var r = 0, o = n.length; o > r; r++) j[n[r]] = !!(n[r] in E);
            return j.list && (j.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), j
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), p.inputtypes = function(e) {
            for (var r, o, a, i = 0, c = e.length; c > i; i++) E.setAttribute("type", o = e[i]), r = "text" !== E.type, r && (E.value = x, E.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && E.style.WebkitAppearance !== n ? (g.appendChild(E), a = t.defaultView, r = a.getComputedStyle && "textfield" !== a.getComputedStyle(E, null).WebkitAppearance && 0 !== E.offsetHeight, g.removeChild(E)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? E.checkValidity && E.checkValidity() === !1 : E.value != x)), P[e[i]] = !!r;
            return P
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d, f, m = "2.8.3",
        p = {},
        h = !0,
        g = t.documentElement,
        v = "modernizr",
        y = t.createElement(v),
        b = y.style,
        E = t.createElement("input"),
        x = ":)",
        w = {}.toString,
        S = " -webkit- -moz- -o- -ms- ".split(" "),
        C = "Webkit Moz O ms",
        k = C.split(" "),
        T = C.toLowerCase().split(" "),
        N = {
            svg: "http://www.w3.org/2000/svg"
        },
        M = {},
        P = {},
        j = {},
        $ = [],
        D = $.slice,
        F = function(e, n, r, o) {
            var a, i, c, s, u = t.createElement("div"),
                l = t.body,
                d = l || t.createElement("body");
            if (parseInt(r, 10))
                for (; r--;) c = t.createElement("div"), c.id = o ? o[r] : v + (r + 1), u.appendChild(c);
            return a = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), u.id = v, (l ? u : d).innerHTML += a, d.appendChild(u), l || (d.style.background = "", d.style.overflow = "hidden", s = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)), i = n(u, e), l ? u.parentNode.removeChild(u) : (d.parentNode.removeChild(d), g.style.overflow = s), !!i
        },
        z = function(t) {
            var n = e.matchMedia || e.msMatchMedia;
            if (n) return n(t) && n(t).matches || !1;
            var r;
            return F("@media " + t + " { #" + v + " { position: absolute; } }", function(t) {
                r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
            }), r
        },
        A = function() {
            function e(e, o) {
                o = o || t.createElement(r[e] || "div"), e = "on" + e;
                var i = e in o;
                return i || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), i = a(o[e], "function"), a(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))), o = null, i
            }
            var r = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return e
        }(),
        L = {}.hasOwnProperty;
    f = a(L, "undefined") || a(L.call, "undefined") ? function(e, t) {
        return t in e && a(e.constructor.prototype[t], "undefined")
    } : function(e, t) {
        return L.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError;
        var n = D.call(arguments, 1),
            r = function() {
                if (this instanceof r) {
                    var o = function() {};
                    o.prototype = t.prototype;
                    var a = new o,
                        i = t.apply(a, n.concat(D.call(arguments)));
                    return Object(i) === i ? i : a
                }
                return t.apply(e, n.concat(D.call(arguments)))
            };
        return r
    }), M.flexbox = function() {
        return u("flexWrap")
    }, M.flexboxlegacy = function() {
        return u("boxDirection")
    }, M.canvas = function() {
        var e = t.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }, M.canvastext = function() {
        return !(!p.canvas || !a(t.createElement("canvas").getContext("2d").fillText, "function"))
    }, M.webgl = function() {
        return !!e.WebGLRenderingContext
    }, M.touch = function() {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : F(["@media (", S.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
            n = 9 === e.offsetTop
        }), n
    }, M.geolocation = function() {
        return "geolocation" in navigator
    }, M.postmessage = function() {
        return !!e.postMessage
    }, M.websqldatabase = function() {
        return !!e.openDatabase
    }, M.indexedDB = function() {
        return !!u("indexedDB", e)
    }, M.hashchange = function() {
        return A("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }, M.history = function() {
        return !(!e.history || !history.pushState)
    }, M.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
    }, M.websockets = function() {
        return "WebSocket" in e || "MozWebSocket" in e
    }, M.rgba = function() {
        return r("background-color:rgba(150,255,150,.5)"), i(b.backgroundColor, "rgba")
    }, M.hsla = function() {
        return r("background-color:hsla(120,40%,100%,.5)"), i(b.backgroundColor, "rgba") || i(b.backgroundColor, "hsla")
    }, M.multiplebgs = function() {
        return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
    }, M.backgroundsize = function() {
        return u("backgroundSize")
    }, M.borderimage = function() {
        return u("borderImage")
    }, M.borderradius = function() {
        return u("borderRadius")
    }, M.boxshadow = function() {
        return u("boxShadow")
    }, M.textshadow = function() {
        return "" === t.createElement("div").style.textShadow
    }, M.opacity = function() {
        return o("opacity:.55"), /^0.55$/.test(b.opacity)
    }, M.cssanimations = function() {
        return u("animationName")
    }, M.csscolumns = function() {
        return u("columnCount")
    }, M.cssgradients = function() {
        var e = "background-image:",
            t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            n = "linear-gradient(left top,#9f9, white);";
        return r((e + "-webkit- ".split(" ").join(t + e) + S.join(n + e)).slice(0, -e.length)), i(b.backgroundImage, "gradient")
    }, M.cssreflections = function() {
        return u("boxReflect")
    }, M.csstransforms = function() {
        return !!u("transform")
    }, M.csstransforms3d = function() {
        var e = !!u("perspective");
        return e && "webkitPerspective" in g.style && F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }), e
    }, M.csstransitions = function() {
        return u("transition")
    }, M.fontface = function() {
        var e;
        return F('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
            var o = t.getElementById("smodernizr"),
                a = o.sheet || o.styleSheet,
                i = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "" : "";
            e = /src/i.test(i) && 0 === i.indexOf(r.split(" ")[0])
        }), e
    }, M.generatedcontent = function() {
        var e;
        return F(["#", v, "{font:0/0 a}#", v, ':after{content:"', x, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
            e = t.offsetHeight >= 3
        }), e
    }, M.video = function() {
        var e = t.createElement("video"),
            n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (r) {}
        return n
    }, M.audio = function() {
        var e = t.createElement("audio"),
            n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (r) {}
        return n
    }, M.localstorage = function() {
        try {
            return localStorage.setItem(v, v), localStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, M.sessionstorage = function() {
        try {
            return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, M.webworkers = function() {
        return !!e.Worker
    }, M.applicationcache = function() {
        return !!e.applicationCache
    }, M.svg = function() {
        return !!t.createElementNS && !!t.createElementNS(N.svg, "svg").createSVGRect
    }, M.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == N.svg
    }, M.smil = function() {
        return !!t.createElementNS && /SVGAnimate/.test(w.call(t.createElementNS(N.svg, "animate")))
    }, M.svgclippaths = function() {
        return !!t.createElementNS && /SVGClipPath/.test(w.call(t.createElementNS(N.svg, "clipPath")))
    };
    for (var H in M) f(M, H) && (d = H.toLowerCase(), p[d] = M[H](), $.push((p[d] ? "" : "no-") + d));
    return p.input || l(), p.addTest = function(e, t) {
            if ("object" == typeof e)
                for (var r in e) f(e, r) && p.addTest(r, e[r]);
            else {
                if (e = e.toLowerCase(), p[e] !== n) return p;
                t = "function" == typeof t ? t() : t, "undefined" != typeof h && h && (g.className += " " + (t ? "" : "no-") + e), p[e] = t
            }
            return p
        }, r(""), y = E = null,
        function(e, t) {
            function n(e, t) {
                var n = e.createElement("p"),
                    r = e.getElementsByTagName("head")[0] || e.documentElement;
                return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
            }

            function r() {
                var e = y.elements;
                return "string" == typeof e ? e.split(" ") : e
            }

            function o(e) {
                var t = v[e[h]];
                return t || (t = {}, g++, e[h] = g, v[g] = t), t
            }

            function a(e, n, r) {
                if (n || (n = t), l) return n.createElement(e);
                r || (r = o(n));
                var a;
                return a = r.cache[e] ? r.cache[e].cloneNode() : p.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || m.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
            }

            function i(e, n) {
                if (e || (e = t), l) return e.createDocumentFragment();
                n = n || o(e);
                for (var a = n.frag.cloneNode(), i = 0, c = r(), s = c.length; s > i; i++) a.createElement(c[i]);
                return a
            }

            function c(e, t) {
                t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                    return y.shivMethods ? a(n, e, t) : t.createElem(n)
                }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function(e) {
                    return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                }) + ");return n}")(y, t.frag)
            }

            function s(e) {
                e || (e = t);
                var r = o(e);
                return !y.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || c(e, r), e
            }
            var u, l, d = "3.7.0",
                f = e.html5 || {},
                m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                h = "_html5shiv",
                g = 0,
                v = {};
            ! function() {
                try {
                    var e = t.createElement("a");
                    e.innerHTML = "<xyz></xyz>", u = "hidden" in e, l = 1 == e.childNodes.length || function() {
                        t.createElement("a");
                        var e = t.createDocumentFragment();
                        return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                    }()
                } catch (n) {
                    u = !0, l = !0
                }
            }();
            var y = {
                elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: d,
                shivCSS: f.shivCSS !== !1,
                supportsUnknownElements: l,
                shivMethods: f.shivMethods !== !1,
                type: "default",
                shivDocument: s,
                createElement: a,
                createDocumentFragment: i
            };
            e.html5 = y, s(t)
        }(this, t), p._version = m, p._prefixes = S, p._domPrefixes = T, p._cssomPrefixes = k, p.mq = z, p.hasEvent = A, p.testProp = function(e) {
            return c([e])
        }, p.testAllProps = u, p.testStyles = F, p.prefixed = function(e, t, n) {
            return t ? u(e, t, n) : u(e, "pfx")
        }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + $.join(" ") : ""), p
}(this, this.document);

/*************************
CountDown Clock
*************************/
! function(e) {
    e.fn.countdown = function(t, n) {
        var o = e.extend({
            date: null,
            offset: null,
            day: "Day",
            days: "Days",
            hour: "Hour",
            hours: "Hours",
            minute: "Minute",
            minutes: "Minutes",
            second: "Second",
            seconds: "Seconds"
        }, t);
        o.date || e.error("Date is not defined."), Date.parse(o.date) || e.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.");
        var r = this,
            i = function() {
                var e = new Date,
                    t = e.getTime() + 6e4 * e.getTimezoneOffset();
                return new Date(t + 36e5 * o.offset)
            };
        var s = setInterval(function() {
            var e = new Date(o.date) - i();
            if (e < 0) return clearInterval(s), void(n && "function" == typeof n && n());
            var t = 36e5,
                a = Math.floor(e / 864e5),
                d = Math.floor(e % 864e5 / t),
                f = Math.floor(e % t / 6e4),
                u = Math.floor(e % 6e4 / 1e3),
                l = 1 === a ? o.day : o.days,
                c = 1 === d ? o.hour : o.hours,
                h = 1 === f ? o.minute : o.minutes,
                x = 1 === u ? o.second : o.seconds;
            a = String(a).length >= 2 ? a : "0" + a, d = String(d).length >= 2 ? d : "0" + d, f = String(f).length >= 2 ? f : "0" + f, u = String(u).length >= 2 ? u : "0" + u, r.find(".days").text(a), r.find(".hours").text(d), r.find(".minutes").text(f), r.find(".seconds").text(u), r.find(".days_text").text(l), r.find(".hours_text").text(c), r.find(".minutes_text").text(h), r.find(".seconds_text").text(x)
        }, 1e3)
    }
}(jQuery);

/*************************
jquery.countTo
*************************/
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($) {
    var CountTo = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, CountTo.DEFAULTS, this.dataOptions(), options);
        this.init();
    };
    CountTo.DEFAULTS = {
        from: 0,
        to: 0,
        speed: 1000,
        refreshInterval: 100,
        decimals: 0,
        formatter: formatter,
        onUpdate: null,
        onComplete: null
    };
    CountTo.prototype.init = function() {
        this.value = this.options.from;
        this.loops = Math.ceil(this.options.speed / this.options.refreshInterval);
        this.loopCount = 0;
        this.increment = (this.options.to - this.options.from) / this.loops;
    };
    CountTo.prototype.dataOptions = function() {
        var options = {
            from: this.$element.data('from'),
            to: this.$element.data('to'),
            speed: this.$element.data('speed'),
            refreshInterval: this.$element.data('refresh-interval'),
            decimals: this.$element.data('decimals')
        };
        var keys = Object.keys(options);
        for (var i in keys) {
            var key = keys[i];
            if (typeof(options[key]) === 'undefined') {
                delete options[key];
            }
        }
        return options;
    };
    CountTo.prototype.update = function() {
        this.value += this.increment;
        this.loopCount++;
        this.render();
        if (typeof(this.options.onUpdate) == 'function') {
            this.options.onUpdate.call(this.$element, this.value);
        }
        if (this.loopCount >= this.loops) {
            clearInterval(this.interval);
            this.value = this.options.to;
            if (typeof(this.options.onComplete) == 'function') {
                this.options.onComplete.call(this.$element, this.value);
            }
        }
    };
    CountTo.prototype.render = function() {
        var formattedValue = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(formattedValue);
    };
    CountTo.prototype.restart = function() {
        this.stop();
        this.init();
        this.start();
    };
    CountTo.prototype.start = function() {
        this.stop();
        this.render();
        this.interval = setInterval(this.update.bind(this), this.options.refreshInterval);
    };
    CountTo.prototype.stop = function() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    CountTo.prototype.toggle = function() {
        if (this.interval) {
            this.stop();
        } else {
            this.start();
        }
    };

    function formatter(value, options) {
        return value.toFixed(options.decimals);
    }
    $.fn.countTo = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('countTo');
            var init = !data || typeof(option) === 'object';
            var options = typeof(option) === 'object' ? option : {};
            var method = typeof(option) === 'string' ? option : 'start';
            if (init) {
                if (data) data.stop();
                $this.data('countTo', data = new CountTo(this, options));
            }
            data[method].call(data);
        });
    };
}));

/*************************
Isotope PACKAGED v3.0.4
*************************/
! function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";

    function i(i, s, a) {
        function u(t, e, o) {
            var n, s = "$()." + i + '("' + e + '")';
            return t.each(function(t, u) {
                var h = a.data(u, i);
                if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                var l = d.apply(h, o);
                n = void 0 === n ? l : n
            }), void 0 !== n ? n : t
        }

        function h(t, e) {
            t.each(function(t, o) {
                var n = a.data(o, i);
                n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
            })
        }
        a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = n.call(arguments, 1);
                return u(this, t, e)
            }
            return h(this, t), this
        }, o(a))
    }

    function o(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var n = Array.prototype.slice,
        s = t.console,
        r = "undefined" == typeof s ? function() {} : function(t) {
            s.error(t)
        };
    return o(e || t.jQuery), i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                o = i[t] = i[t] || [];
            return o.indexOf(e) == -1 && o.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                o = i[t] = i[t] || {};
            return o[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = i.indexOf(e);
            return o != -1 && i.splice(o, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = 0,
                n = i[o];
            e = e || [];
            for (var s = this._onceEvents && this._onceEvents[t]; n;) {
                var r = s && s[n];
                r && (this.off(t, n), delete s[n]), n.apply(this, e), o += r ? 0 : 1, n = i[o]
            }
            return this
        }
    }, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";

    function t(t) {
        var e = parseFloat(t),
            i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }

    function e() {}

    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; e < h; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }

    function o(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
    }

    function n() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var n = o(e);
            s.isBoxSizeOuter = r = 200 == t(n.width), i.removeChild(e)
        }
    }

    function s(e) {
        if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var s = o(e);
            if ("none" == s.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l],
                    c = s[f],
                    m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight,
                y = a.paddingTop + a.paddingBottom,
                g = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                I = a.borderTopWidth + a.borderBottomWidth,
                z = d && r,
                x = t(s.width);
            x !== !1 && (a.width = x + (z ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) {
            console.error(t)
        },
        u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        h = u.length,
        d = !1;
    return s
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i],
                n = o + "MatchesSelector";
            if (t[n]) return n
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function(t, e) {
        return (t % e + e) % e
    }, i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "object" == typeof t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }, i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body;)
            if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function(t, o) {
        t = i.makeArray(t);
        var n = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!o) return void n.push(t);
                e(t, o) && n.push(t);
                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
            }
        }), n
    }, i.debounceMethod = function(t, e, i) {
        var o = t.prototype[e],
            n = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[n];
            t && clearTimeout(t);
            var e = arguments,
                s = this;
            this[n] = setTimeout(function() {
                o.apply(s, e), delete s[n]
            }, i || 100)
        }
    }, i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var o = t.console;
    return i.htmlInit = function(e, n) {
        i.docReady(function() {
            var s = i.toDashed(n),
                r = "data-" + s,
                a = document.querySelectorAll("[" + r + "]"),
                u = document.querySelectorAll(".js-" + s),
                h = i.makeArray(a).concat(i.makeArray(u)),
                d = r + "-options",
                l = t.jQuery;
            h.forEach(function(t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (a) {
                    return void(o && o.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var u = new e(t, i);
                l && l.data(t, n, u)
            })
        })
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function o(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function n(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var s = document.documentElement.style,
        r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        u = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[r],
        h = {
            transform: a,
            transition: r,
            transitionDuration: r + "Duration",
            transitionProperty: r + "Property",
            transitionDelay: r + "Delay"
        },
        d = o.prototype = Object.create(t.prototype);
    d.constructor = o, d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function() {
        this.size = e(this.element)
    }, d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var o = h[i] || i;
            e[o] = t[i]
        }
    }, d.getPosition = function() {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            o = t[e ? "left" : "right"],
            n = t[i ? "top" : "bottom"],
            s = this.layout.size,
            r = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.width : parseInt(o, 10),
            a = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.height : parseInt(n, 10);
        r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
    }, d.layoutPosition = function() {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop"),
            n = i ? "paddingLeft" : "paddingRight",
            s = i ? "left" : "right",
            r = i ? "right" : "left",
            a = this.position.x + t[n];
        e[s] = this.getXValue(a), e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom",
            h = o ? "top" : "bottom",
            d = o ? "bottom" : "top",
            l = this.position.y + t[u];
        e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
            o = this.position.y,
            n = parseInt(t, 10),
            s = parseInt(e, 10),
            r = n === this.position.x && s === this.position.y;
        if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
        var a = t - i,
            u = e - o,
            h = {};
        h.transform = this.getTranslate(a, u), this.transition({
            to: h,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop");
        return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, d._nonTransition = function(t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var l = "opacity," + n(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(u, this, !1)
        }
    }, d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }, d.onotransitionend = function(t) {
        this.ontransitionend(t)
    };
    var f = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn,
                o = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                var n = e.onEnd[o];
                n.call(this), delete e.onEnd[o]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
    }, d._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(c)
    }, d.stagger = function(t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, d.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, d.remove = function() {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, d.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, d.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, o
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
        return e(t, i, o, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, o, n) {
    "use strict";

    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
        var n = ++l;
        this.element.outlayerGUID = n, f[n] = this, this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }

    function r(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            o = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var n = m[o] || 1;
        return i * n
    }
    var u = t.console,
        h = t.jQuery,
        d = function() {},
        l = 0,
        f = {};
    s.namespace = "outlayer", s.Item = n, s.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var c = s.prototype;
    o.extend(c, e.prototype), c.option = function(t) {
        o.extend(this.options, t)
    }, c._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, c._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, c.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, c._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = e[n],
                r = new i(s, this);
            o.push(r)
        }
        return o
    }, c._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }, c.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }, c.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, c._init = c.layout, c._resetLayout = function() {
        this.getSize()
    }, c.getSize = function() {
        this.size = i(this.element)
    }, c._getMeasurement = function(t, e) {
        var o, n = this.options[t];
        n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
    }, c.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, c._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }, c._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var o = this._getItemLayoutPosition(t);
                o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
            }, this), this._processLayoutQueue(i)
        }
    }, c._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, c._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, c.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, c._positionItem = function(t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
    }, c._postLayout = function() {
        this.resizeContainer()
    }, c.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, c._getContainerSize = d, c._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, c._emitCompleteOnItems = function(t, e) {
        function i() {
            n.dispatchEvent(t + "Complete", null, [e])
        }

        function o() {
            r++, r == s && i()
        }
        var n = this,
            s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function(e) {
            e.once(t, o)
        })
    }, c.dispatchEvent = function(t, e, i) {
        var o = e ? [e].concat(i) : i;
        if (this.emitEvent(t, o), h)
            if (this.$element = this.$element || h(this.element), e) {
                var n = h.Event(e);
                n.type = t, this.$element.trigger(n, i)
            } else this.$element.trigger(t, i)
    }, c.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, c.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, c.stamp = function(t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, c.unstamp = function(t) {
        t = this._find(t), t && t.forEach(function(t) {
            o.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, c._find = function(t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
    }, c._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, c._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, c._manageStamp = d, c._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
            o = this._boundingRect,
            n = i(t),
            s = {
                left: e.left - o.left - n.marginLeft,
                top: e.top - o.top - n.marginTop,
                right: o.right - e.right - n.marginRight,
                bottom: o.bottom - e.bottom - n.marginBottom
            };
        return s
    }, c.handleEvent = o.handleEvent, c.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, c.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, c.onresize = function() {
        this.resize()
    }, o.debounceMethod(s, "onresize", 100), c.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, c.needsResizeLayout = function() {
        var t = i(this.element),
            e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, c.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, c.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, c.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, c.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, c.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, c.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, c.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, c.getItems = function(t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, c.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
            t.remove(), o.removeFrom(this.items, t)
        }, this)
    }, c.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
    }, s.data = function(t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }, s.create = function(t, e) {
        var i = r(s);
        return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
    };
    var m = {
        ms: 1,
        s: 1e3
    };
    return s.Item = n, s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype),
        o = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
    }, i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
                e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    };
    var n = i.destroy;
    return i.destroy = function() {
        n.apply(this, arguments), this.css({
            display: ""
        })
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var o = i.prototype,
        n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return n.forEach(function(t) {
        o[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }), o.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element),
            i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, o._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, o.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, o.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, o.getSegmentSize = function(t, e) {
        var i = t + e,
            o = "outer" + e;
        if (this._getMeasurement(i, o), !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }, o.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, o.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, o.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function(t, e) {
        function n() {
            i.apply(this, arguments)
        }
        return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return o._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, o.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var o = this.columnWidth += this.gutter,
            n = this.containerWidth + this.gutter,
            s = n / o,
            r = o - n % o,
            a = r && r < 1 ? "round" : "floor";
        s = Math[a](s), this.cols = Math.max(s, 1)
    }, o.getContainerWidth = function() {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            o = e(i);
        this.containerWidth = o && o.innerWidth
    }, o._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = e && e < 1 ? "round" : "ceil",
            o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
                x: this.columnWidth * s.col,
                y: s.y
            }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
        return r
    }, o._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }, o._getTopColGroup = function(t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
        return e
    }, o._getColGroupY = function(t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }, o._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols,
            o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }, o._manageStamp = function(t) {
        var i = e(t),
            o = this._getElementOffset(t),
            n = this._getOption("originLeft"),
            s = n ? o.left : o.right,
            r = s + i.outerWidth,
            a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
    }, o._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, o._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, o.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry"),
        o = i.prototype,
        n = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function() {
        this.items = this.isotope.filteredItems, r.call(this)
    };
    var a = o._getOption;
    return o._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var o = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
    }, i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {
            horizontalAlignment: 0
        }),
        i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += t.size.outerHeight, {
            x: e,
            y: i
        }
    }, i._getContainerSize = function() {
        return {
            height: this.y
        }
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, o, n, s, r) {
    function a(t, e) {
        return function(i, o) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n],
                    r = i.sortData[s],
                    a = o.sortData[s];
                if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e,
                        h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }
    var u = t.jQuery,
        h = String.prototype.trim ? function(t) {
            return t.trim()
        } : function(t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        d = e.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    d.Item = s, d.LayoutMode = r;
    var l = d.prototype;
    l._create = function() {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in r.modes) this._initLayoutMode(t)
    }, l.reloadItems = function() {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, l._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, l._initLayoutMode = function(t) {
        var e = r.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, l.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, l._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, l.arrange = function(t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, l._init = l.arrange, l._hideReveal = function(t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, l._getIsInstant = function() {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, l._bindArrangeComplete = function() {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
        }
        var e, i, o, n = this;
        this.once("layoutComplete", function() {
            e = !0, t()
        }), this.once("hideComplete", function() {
            i = !0, t()
        }), this.once("revealComplete", function() {
            o = !0, t()
        })
    }, l._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
            }
        }
        return {
            matches: i,
            needReveal: o,
            needHide: n
        }
    }, l._getFilterTest = function(t) {
        return u && this.options.isJQueryFiltering ? function(e) {
            return u(e.element).is(t)
        } : "function" == typeof t ? function(e) {
            return t(e.element)
        } : function(e) {
            return o(e.element, t)
        }
    }, l.updateSortData = function(t) {
        var e;
        t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, l._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }, l._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var o = t[i];
            o.updateSortData()
        }
    };
    var f = function() {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = h(t).split(" "),
                o = i[0],
                n = o.match(/^\[(.+)\]$/),
                s = n && n[1],
                r = e(s, o),
                a = d.sortDataParsers[i[1]];
            return t = a ? function(t) {
                return t && a(r(t))
            } : function(t) {
                return t && r(t)
            }
        }

        function e(t, e) {
            return t ? function(e) {
                return e.getAttribute(t)
            } : function(t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }
        return t
    }();
    d.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    }, l._sort = function() {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = a(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e)
        }
    }, l._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e]) return !1;
        return !0
    }, l._mode = function() {
        var t = this.options.layoutMode,
            e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, l._resetLayout = function() {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, l._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }, l._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }, l._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, l.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, l.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, l.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, l._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, l.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    };
    var c = l.remove;
    return l.remove = function(t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];
            n.removeFrom(this.filteredItems, s)
        }
    }, l.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, l._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i, o
    }, l.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }, d
});

/*************************
Parallax [Jarallax]
*************************/
! function() {
    "use strict";

    function e(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function t(e, t, i) {
        e.addEventListener(t, i)
    }

    function i(e) {
        p = window.innerWidth || document.documentElement.clientWidth, d = window.innerHeight || document.documentElement.clientHeight, "object" !== ("undefined" == typeof e ? "undefined" : a(e)) || "load" !== e.type && "DOMContentLoaded" !== e.type || (f = !0)
    }

    function n() {
        if (g.length) {
            u = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            var e = f || !y || y.width !== p || y.height !== d,
                t = e || !y || y.y !== u;
            f = !1, (e || t) && (g.forEach(function(i) {
                e && i.onResize(), t && i.onScroll()
            }), y = {
                width: p,
                height: d,
                y: u
            }), m(n)
        }
    }
    var o = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }(),
        a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        r = function() {
            for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), i = 0; i < e.length; i++)
                if (t && void 0 !== t.style[e[i]]) return e[i];
            return !1
        }(),
        l = navigator.userAgent,
        s = l.toLowerCase().indexOf("android") > -1,
        c = /iPad|iPhone|iPod/.test(l) && !window.MSStream,
        m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
            setTimeout(e, 1e3 / 60)
        },
        p = void 0,
        d = void 0,
        u = void 0,
        f = !1;
    i(), t(window, "resize", i), t(window, "orientationchange", i), t(window, "load", i), t(window, "DOMContentLoaded", i);
    var g = [],
        y = !1,
        h = 0,
        v = function() {
            function t(i, n) {
                e(this, t);
                var o = this;
                o.instanceID = h++, o.$item = i, o.defaults = {
                    type: "scroll",
                    speed: .5,
                    imgSrc: null,
                    imgElement: ".jarallax-img",
                    imgSize: "cover",
                    imgPosition: "50% 50%",
                    imgRepeat: "no-repeat",
                    keepImg: !1,
                    elementInViewport: null,
                    zIndex: -100,
                    noAndroid: !1,
                    noIos: !1,
                    videoSrc: null,
                    videoStartTime: 0,
                    videoEndTime: 0,
                    videoVolume: 0,
                    videoPlayOnlyVisible: !0,
                    onScroll: null,
                    onInit: null,
                    onDestroy: null,
                    onCoverImage: null
                };
                var r = o.$item.getAttribute("data-jarallax"),
                    l = JSON.parse(r || "{}");
                r && console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");
                var m = o.$item.dataset || {},
                    p = {};
                Object.keys(m).forEach(function(e) {
                    var t = e.substr(0, 1).toLowerCase() + e.substr(1);
                    t && "undefined" != typeof o.defaults[t] && (p[t] = m[e])
                }), o.options = o.extend({}, o.defaults, l, p, n), o.pureOptions = o.extend({}, o.options), Object.keys(o.options).forEach(function(e) {
                    "true" === o.options[e] ? o.options[e] = !0 : "false" === o.options[e] && (o.options[e] = !1)
                }), o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed)));
                var d = o.options.elementInViewport;
                d && "object" === ("undefined" == typeof d ? "undefined" : a(d)) && "undefined" != typeof d.length && (d = d[0]), d instanceof Element || (d = null), o.options.elementInViewport = d, o.image = {
                    src: o.options.imgSrc || null,
                    $container: null,
                    useImgTag: !1,
                    position: s || c ? "absolute" : "fixed"
                }, o.initImg() && o.canInitParallax() && o.init()
            }
            return o(t, [{
                key: "css",
                value: function(e, t) {
                    return "string" == typeof t ? window.getComputedStyle(e).getPropertyValue(t) : (t.transform && r && (t[r] = t.transform), Object.keys(t).forEach(function(i) {
                        e.style[i] = t[i]
                    }), e)
                }
            }, {
                key: "extend",
                value: function(e) {
                    var t = arguments;
                    return e = e || {}, Object.keys(arguments).forEach(function(i) {
                        t[i] && Object.keys(t[i]).forEach(function(n) {
                            e[n] = t[i][n]
                        })
                    }), e
                }
            }, {
                key: "getWindowData",
                value: function() {
                    return {
                        width: p,
                        height: d,
                        y: u
                    }
                }
            }, {
                key: "initImg",
                value: function() {
                    var e = this,
                        t = e.options.imgElement;
                    return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !!e.image.$item || (null === e.image.src && (e.image.src = e.css(e.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!e.image.src || "none" === e.image.src))
                }
            }, {
                key: "canInitParallax",
                value: function() {
                    return r && !(s && this.options.noAndroid) && !(c && this.options.noIos)
                }
            }, {
                key: "init",
                value: function() {
                    var e = this,
                        t = {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            pointerEvents: "none"
                        },
                        i = {};
                    if (!e.options.keepImg) {
                        var n = e.$item.getAttribute("style");
                        if (n && e.$item.setAttribute("data-jarallax-original-styles", n), e.image.useImgTag) {
                            var o = e.image.$item.getAttribute("style");
                            o && e.image.$item.setAttribute("data-jarallax-original-styles", o)
                        }
                    }
                    if ("static" === e.css(e.$item, "position") && e.css(e.$item, {
                            position: "relative"
                        }), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {
                            zIndex: 0
                        }), e.image.$container = document.createElement("div"), e.css(e.image.$container, t), e.css(e.image.$container, {
                            "z-index": e.options.zIndex
                        }), e.image.$container.setAttribute("id", "jarallax-container-" + e.instanceID), e.$item.appendChild(e.image.$container), e.image.useImgTag ? i = e.extend({
                            "object-fit": e.options.imgSize,
                            "object-position": e.options.imgPosition,
                            "font-family": "object-fit: " + e.options.imgSize + "; object-position: " + e.options.imgPosition + ";",
                            "max-width": "none"
                        }, t, i) : (e.image.$item = document.createElement("div"), i = e.extend({
                            "background-position": e.options.imgPosition,
                            "background-size": e.options.imgSize,
                            "background-repeat": e.options.imgRepeat,
                            "background-image": 'url("' + e.image.src + '")'
                        }, t, i)), "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"), "fixed" === e.image.position)
                        for (var a = 0, r = e.$item; null !== r && r !== document && 0 === a;) {
                            var l = e.css(r, "-webkit-transform") || e.css(r, "-moz-transform") || e.css(r, "transform");
                            l && "none" !== l && (a = 1, e.image.position = "absolute"), r = r.parentNode
                        }
                    i.position = e.image.position, e.css(e.image.$item, i), e.image.$container.appendChild(e.image.$item), e.coverImage(), e.clipContainer(), e.onScroll(!0), e.options.onInit && e.options.onInit.call(e), "none" !== e.css(e.$item, "background-image") && e.css(e.$item, {
                        "background-image": "none"
                    }), e.addToParallaxList()
                }
            }, {
                key: "addToParallaxList",
                value: function() {
                    g.push(this), 1 === g.length && n()
                }
            }, {
                key: "removeFromParallaxList",
                value: function() {
                    var e = this;
                    g.forEach(function(t, i) {
                        t.instanceID === e.instanceID && g.splice(i, 1)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this;
                    e.removeFromParallaxList();
                    var t = e.$item.getAttribute("data-jarallax-original-styles");
                    if (e.$item.removeAttribute("data-jarallax-original-styles"), t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"), e.image.useImgTag) {
                        var i = e.image.$item.getAttribute("data-jarallax-original-styles");
                        e.image.$item.removeAttribute("data-jarallax-original-styles"), i ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)
                    }
                    e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax
                }
            }, {
                key: "clipContainer",
                value: function() {
                    if ("fixed" === this.image.position) {
                        var e = this,
                            t = e.image.$container.getBoundingClientRect(),
                            i = t.width,
                            n = t.height;
                        if (!e.$clipStyles) {
                            e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "jarallax-clip-" + e.instanceID);
                            var o = document.head || document.getElementsByTagName("head")[0];
                            o.appendChild(e.$clipStyles)
                        }
                        var a = "#jarallax-container-" + e.instanceID + " {\n           clip: rect(0 " + i + "px " + n + "px 0);\n           clip: rect(0, " + i + "px, " + n + "px, 0);\n        }";
                        e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = a : e.$clipStyles.innerHTML = a
                    }
                }
            }, {
                key: "coverImage",
                value: function() {
                    var e = this,
                        t = e.image.$container.getBoundingClientRect(),
                        i = t.height,
                        n = e.options.speed,
                        o = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
                        a = 0,
                        r = i,
                        l = 0;
                    return o && (a = n < 0 ? n * Math.max(i, d) : n * (i + d), n > 1 ? r = Math.abs(a - d) : n < 0 ? r = a / n + Math.abs(a) : r += Math.abs(d - i) * (1 - n), a /= 2), e.parallaxScrollDistance = a, l = o ? (d - r) / 2 : (i - r) / 2, e.css(e.image.$item, {
                        height: r + "px",
                        marginTop: l + "px",
                        left: "fixed" === e.image.position ? t.left + "px" : "0",
                        width: t.width + "px"
                    }), e.options.onCoverImage && e.options.onCoverImage.call(e), {
                        image: {
                            height: r,
                            marginTop: l
                        },
                        container: t
                    }
                }
            }, {
                key: "isVisible",
                value: function() {
                    return this.isElementInViewport || !1
                }
            }, {
                key: "onScroll",
                value: function(e) {
                    var t = this,
                        i = t.$item.getBoundingClientRect(),
                        n = i.top,
                        o = i.height,
                        a = {},
                        r = i;
                    if (t.options.elementInViewport && (r = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = r.bottom >= 0 && r.right >= 0 && r.top <= d && r.left <= p, e || t.isElementInViewport) {
                        var l = Math.max(0, n),
                            s = Math.max(0, o + n),
                            c = Math.max(0, -n),
                            m = Math.max(0, n + o - d),
                            u = Math.max(0, o - (n + o - d)),
                            f = Math.max(0, -n + d - o),
                            g = 1 - 2 * (d - n) / (d + o),
                            y = 1;
                        if (o < d ? y = 1 - (c || m) / o : s <= d ? y = s / d : u <= d && (y = u / d), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (a.transform = "translate3d(0,0,0)", a.opacity = y), "scale" === t.options.type || "scale-opacity" === t.options.type) {
                            var h = 1;
                            t.options.speed < 0 ? h -= t.options.speed * y : h += t.options.speed * (1 - y), a.transform = "scale(" + h + ") translate3d(0,0,0)"
                        }
                        if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
                            var v = t.parallaxScrollDistance * g;
                            "absolute" === t.image.position && (v -= n), a.transform = "translate3d(0," + v + "px,0)"
                        }
                        t.css(t.image.$item, a), t.options.onScroll && t.options.onScroll.call(t, {
                            section: i,
                            beforeTop: l,
                            beforeTopEnd: s,
                            afterTop: c,
                            beforeBottom: m,
                            beforeBottomEnd: u,
                            afterBottom: f,
                            visiblePercent: y,
                            fromViewportCenter: g
                        })
                    }
                }
            }, {
                key: "onResize",
                value: function() {
                    this.coverImage(), this.clipContainer()
                }
            }]), t
        }(),
        b = function(e) {
            ("object" === ("undefined" == typeof HTMLElement ? "undefined" : a(HTMLElement)) ? e instanceof HTMLElement : e && "object" === ("undefined" == typeof e ? "undefined" : a(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
            var t = arguments[1],
                i = Array.prototype.slice.call(arguments, 2),
                n = e.length,
                o = 0,
                r = void 0;
            for (o; o < n; o++)
                if ("object" === ("undefined" == typeof t ? "undefined" : a(t)) || "undefined" == typeof t ? e[o].jarallax || (e[o].jarallax = new v(e[o], t)) : e[o].jarallax && (r = e[o].jarallax[t].apply(e[o].jarallax, i)), "undefined" != typeof r) return r;
            return e
        };
    b.constructor = v;
    var x = window.jarallax;
    if (window.jarallax = b, window.jarallax.noConflict = function() {
            return window.jarallax = x, this
        }, "undefined" != typeof jQuery) {
        var w = function() {
            var e = arguments || [];
            Array.prototype.unshift.call(e, this);
            var t = b.apply(window, e);
            return "object" !== ("undefined" == typeof t ? "undefined" : a(t)) ? t : this
        };
        w.constructor = v;
        var $ = jQuery.fn.jarallax;
        jQuery.fn.jarallax = w, jQuery.fn.jarallax.noConflict = function() {
            return jQuery.fn.jarallax = $, this
        }
    }
    t(window, "DOMContentLoaded", function() {
        b(document.querySelectorAll("[data-jarallax]"))
    })
}();

/*************************
Jarallax
*************************/
! function() {
    "use strict";
    /*!
     * Name    : Elements Extension for Jarallax
     * Version : 1.0.0
     * Author  : nK http://nkdev.info
     * GitHub  : https://github.com/nk-o/jarallax
     */
    ! function() {
        function e(e, t, a) {
            e.addEventListener(t, a)
        }
        if ("undefined" != typeof jarallax) {
            var t = jarallax.constructor;
            ["initImg", "canInitParallax", "init", "destroy", "clipContainer", "coverImage", "isVisible", "onScroll", "onResize"].forEach(function(e) {
                var a = t.prototype[e];
                t.prototype[e] = function() {
                    var t = this,
                        i = arguments || [];
                    if ("initImg" === e && null !== t.$item.getAttribute("data-jarallax-element") && (t.options.type = "element", t.pureOptions.speed = t.$item.getAttribute("data-jarallax-element") || t.pureOptions.speed), "element" !== t.options.type) return a.apply(t, i);
                    switch (e) {
                        case "init":
                            var n = t.pureOptions.speed.split(" ");
                            t.options.speed = t.pureOptions.speed || 0, t.options.speedY = n[0] ? parseFloat(n[0]) : 0, t.options.speedX = n[1] ? parseFloat(n[1]) : 0, t.onResize(), t.onScroll(), t.addToParallaxList();
                            break;
                        case "onResize":
                            var o = t.css(t.$item, "transform");
                            t.css(t.$item, {
                                transform: ""
                            });
                            var r = t.$item.getBoundingClientRect();
                            t.itemData = {
                                width: r.width,
                                height: r.height,
                                y: r.top + t.getWindowData().y,
                                x: r.left
                            }, t.css(t.$item, {
                                transform: o
                            });
                            break;
                        case "onScroll":
                            var s = t.getWindowData(),
                                l = (s.y + s.height / 2 - t.itemData.y) / (s.height / 2),
                                p = l * t.options.speedY,
                                c = l * t.options.speedX;
                            t.css(t.$item, {
                                transform: "translate3d(" + c + "px," + p + "px,0)"
                            });
                            break;
                        case "initImg":
                        case "isVisible":
                        case "clipContainer":
                        case "coverImage":
                            return !0;
                        default:
                            return a.apply(t, i)
                    }
                }
            }), e(window, "DOMContentLoaded", function() {
                jarallax(document.querySelectorAll("[data-jarallax-element]"))
            })
        }
    }()
}();

/*!
 * Name    : Video Worker (wrapper for Youtube, Vimeo and Local videos)
 * Version : 1.9.3
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
! function() {
    "use strict";

    function e(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function t() {
        this._done = [], this._fail = []
    }

    function i(e, t, i) {
        e.addEventListener(t, i)
    }
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        a = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var o = t[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, i, o) {
                return i && e(t.prototype, i), o && e(t, o), t
            }
        }();
    t.prototype = {
        execute: function(e, t) {
            var i = e.length;
            for (t = Array.prototype.slice.call(t); i--;) e[i].apply(null, t)
        },
        resolve: function() {
            this.execute(this._done, arguments)
        },
        reject: function() {
            this.execute(this._fail, arguments)
        },
        done: function(e) {
            this._done.push(e)
        },
        fail: function(e) {
            this._fail.push(e)
        }
    };
    var n = 0,
        r = 0,
        p = 0,
        l = 0,
        s = 0,
        u = new t,
        d = new t,
        y = function() {
            function t(i, o) {
                e(this, t);
                var a = this;
                a.url = i, a.options_default = {
                    autoplay: 1,
                    loop: 1,
                    mute: 1,
                    volume: 0,
                    controls: 0,
                    startTime: 0,
                    endTime: 0
                }, a.options = a.extend({}, a.options_default, o), a.videoID = a.parseURL(i), a.videoID && (a.ID = n++, a.loadAPI(), a.init())
            }
            return a(t, [{
                key: "extend",
                value: function(e) {
                    var t = arguments;
                    return e = e || {}, Object.keys(arguments).forEach(function(i) {
                        t[i] && Object.keys(t[i]).forEach(function(o) {
                            e[o] = t[i][o]
                        })
                    }), e
                }
            }, {
                key: "parseURL",
                value: function(e) {
                    function t(e) {
                        var t = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
                            i = e.match(t);
                        return !(!i || 11 !== i[1].length) && i[1]
                    }

                    function i(e) {
                        var t = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,
                            i = e.match(t);
                        return !(!i || !i[3]) && i[3]
                    }

                    function o(e) {
                        var t = e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),
                            i = {},
                            o = 0;
                        return t.forEach(function(e) {
                            var t = e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                            t && t[1] && t[2] && (i["ogv" === t[1] ? "ogg" : t[1]] = t[2], o = 1)
                        }), !!o && i
                    }
                    var a = t(e),
                        n = i(e),
                        r = o(e);
                    return a ? (this.type = "youtube", a) : n ? (this.type = "vimeo", n) : !!r && (this.type = "local", r)
                }
            }, {
                key: "isValid",
                value: function() {
                    return !!this.videoID
                }
            }, {
                key: "on",
                value: function(e, t) {
                    this.userEventsList = this.userEventsList || [], (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t)
                }
            }, {
                key: "off",
                value: function(e, t) {
                    var i = this;
                    this.userEventsList && this.userEventsList[e] && (t ? this.userEventsList[e].forEach(function(o, a) {
                        o === t && (i.userEventsList[e][a] = !1)
                    }) : delete this.userEventsList[e])
                }
            }, {
                key: "fire",
                value: function(e) {
                    var t = this,
                        i = [].slice.call(arguments, 1);
                    this.userEventsList && "undefined" != typeof this.userEventsList[e] && this.userEventsList[e].forEach(function(e) {
                        e && e.apply(t, i)
                    })
                }
            }, {
                key: "play",
                value: function(e) {
                    var t = this;
                    t.player && ("youtube" === t.type && t.player.playVideo && ("undefined" != typeof e && t.player.seekTo(e || 0), YT.PlayerState.PLAYING !== t.player.getPlayerState() && t.player.playVideo()), "vimeo" === t.type && ("undefined" != typeof e && t.player.setCurrentTime(e), t.player.getPaused().then(function(e) {
                        e && t.player.play()
                    })), "local" === t.type && ("undefined" != typeof e && (t.player.currentTime = e), t.player.paused && t.player.play()))
                }
            }, {
                key: "pause",
                value: function() {
                    var e = this;
                    e.player && ("youtube" === e.type && e.player.pauseVideo && YT.PlayerState.PLAYING === e.player.getPlayerState() && e.player.pauseVideo(), "vimeo" === e.type && e.player.getPaused().then(function(t) {
                        t || e.player.pause()
                    }), "local" === e.type && (e.player.paused || e.player.pause()))
                }
            }, {
                key: "getImageURL",
                value: function(e) {
                    var t = this;
                    if (t.videoImage) return void e(t.videoImage);
                    if ("youtube" === t.type) {
                        var i = ["maxresdefault", "sddefault", "hqdefault", "0"],
                            o = 0,
                            a = new Image;
                        a.onload = function() {
                            120 !== (this.naturalWidth || this.width) || o === i.length - 1 ? (t.videoImage = "https://img.youtube.com/vi/" + t.videoID + "/" + i[o] + ".jpg", e(t.videoImage)) : (o++, this.src = "https://img.youtube.com/vi/" + t.videoID + "/" + i[o] + ".jpg")
                        }, a.src = "https://img.youtube.com/vi/" + t.videoID + "/" + i[o] + ".jpg"
                    }
                    if ("vimeo" === t.type) {
                        var n = new XMLHttpRequest;
                        n.open("GET", "https://vimeo.com/api/v2/video/" + t.videoID + ".json", !0), n.onreadystatechange = function() {
                            if (4 === this.readyState && this.status >= 200 && this.status < 400) {
                                var i = JSON.parse(this.responseText);
                                t.videoImage = i[0].thumbnail_large, e(t.videoImage)
                            }
                        }, n.send(), n = null
                    }
                }
            }, {
                key: "getIframe",
                value: function(e) {
                    var t = this;
                    return t.$iframe ? void e(t.$iframe) : void t.onAPIready(function() {
                        function o(e, t, i) {
                            var o = document.createElement("source");
                            o.src = t, o.type = i, e.appendChild(o)
                        }
                        var a = void 0;
                        if (t.$iframe || (a = document.createElement("div"), a.style.display = "none"), "youtube" === t.type) {
                            t.playerOptions = {}, t.playerOptions.videoId = t.videoID, t.playerOptions.playerVars = {
                                autohide: 1,
                                rel: 0,
                                autoplay: 0,
                                playsinline: 1
                            }, t.options.controls || (t.playerOptions.playerVars.iv_load_policy = 3, t.playerOptions.playerVars.modestbranding = 1, t.playerOptions.playerVars.controls = 0, t.playerOptions.playerVars.showinfo = 0, t.playerOptions.playerVars.disablekb = 1);
                            var n = void 0,
                                r = void 0;
                            t.playerOptions.events = {
                                onReady: function(e) {
                                    t.options.mute ? e.target.mute() : t.options.volume && e.target.setVolume(t.options.volume), t.options.autoplay && t.play(t.options.startTime), t.fire("ready", e)
                                },
                                onStateChange: function(e) {
                                    t.options.loop && e.data === YT.PlayerState.ENDED && t.play(t.options.startTime), n || e.data !== YT.PlayerState.PLAYING || (n = 1, t.fire("started", e)), e.data === YT.PlayerState.PLAYING && t.fire("play", e), e.data === YT.PlayerState.PAUSED && t.fire("pause", e), e.data === YT.PlayerState.ENDED && t.fire("end", e), t.options.endTime && (e.data === YT.PlayerState.PLAYING ? r = setInterval(function() {
                                        t.options.endTime && t.player.getCurrentTime() >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                                    }, 150) : clearInterval(r))
                                }
                            };
                            var p = !t.$iframe;
                            if (p) {
                                var l = document.createElement("div");
                                l.setAttribute("id", t.playerID), a.appendChild(l), document.body.appendChild(a)
                            }
                            t.player = t.player || new window.YT.Player(t.playerID, t.playerOptions), p && (t.$iframe = document.getElementById(t.playerID), t.videoWidth = parseInt(t.$iframe.getAttribute("width"), 10) || 1280, t.videoHeight = parseInt(t.$iframe.getAttribute("height"), 10) || 720)
                        }
                        if ("vimeo" === t.type) {
                            t.playerOptions = "", t.playerOptions += "player_id=" + t.playerID, t.playerOptions += "&autopause=0", t.playerOptions += "&transparent=0", t.options.controls || (t.playerOptions += "&badge=0&byline=0&portrait=0&title=0"), t.playerOptions += "&autoplay=" + (t.options.autoplay ? "1" : "0"), t.playerOptions += "&loop=" + (t.options.loop ? 1 : 0), t.$iframe || (t.$iframe = document.createElement("iframe"), t.$iframe.setAttribute("id", t.playerID), t.$iframe.setAttribute("src", "https://player.vimeo.com/video/" + t.videoID + "?" + t.playerOptions), t.$iframe.setAttribute("frameborder", "0"), a.appendChild(t.$iframe), document.body.appendChild(a)), t.player = t.player || new Vimeo.Player(t.$iframe), t.player.getVideoWidth().then(function(e) {
                                t.videoWidth = e || 1280
                            }), t.player.getVideoHeight().then(function(e) {
                                t.videoHeight = e || 720
                            }), t.options.startTime && t.options.autoplay && t.player.setCurrentTime(t.options.startTime), t.options.mute ? t.player.setVolume(0) : t.options.volume && t.player.setVolume(t.options.volume);
                            var s = void 0;
                            t.player.on("timeupdate", function(e) {
                                s || t.fire("started", e), s = 1, t.options.endTime && t.options.endTime && e.seconds >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                            }), t.player.on("play", function(e) {
                                t.fire("play", e), t.options.startTime && 0 === e.seconds && t.play(t.options.startTime)
                            }), t.player.on("pause", function(e) {
                                t.fire("pause", e)
                            }), t.player.on("ended", function(e) {
                                t.fire("end", e)
                            }), t.player.on("loaded", function(e) {
                                t.fire("ready", e)
                            })
                        }
                        if ("local" === t.type) {
                            t.$iframe || (t.$iframe = document.createElement("video"), t.options.mute ? t.$iframe.muted = !0 : t.$iframe.volume && (t.$iframe.volume = t.options.volume / 100), t.options.loop && (t.$iframe.loop = !0), t.$iframe.setAttribute("playsinline", ""), t.$iframe.setAttribute("webkit-playsinline", ""), t.$iframe.setAttribute("id", t.playerID), a.appendChild(t.$iframe), document.body.appendChild(a), Object.keys(t.videoID).forEach(function(e) {
                                o(t.$iframe, t.videoID[e], "video/" + e)
                            })), t.player = t.player || t.$iframe;
                            var u = void 0;
                            i(t.player, "playing", function(e) {
                                u || t.fire("started", e), u = 1
                            }), i(t.player, "timeupdate", function() {
                                t.options.endTime && t.options.endTime && this.currentTime >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                            }), i(t.player, "play", function(e) {
                                t.fire("play", e)
                            }), i(t.player, "pause", function(e) {
                                t.fire("pause", e)
                            }), i(t.player, "ended", function(e) {
                                t.fire("end", e)
                            }), i(t.player, "loadedmetadata", function() {
                                t.videoWidth = this.videoWidth || 1280, t.videoHeight = this.videoHeight || 720, t.fire("ready"), t.options.autoplay && t.play(t.options.startTime)
                            })
                        }
                        e(t.$iframe)
                    })
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    e.playerID = "VideoWorker-" + e.ID
                }
            }, {
                key: "loadAPI",
                value: function() {
                    var e = this;
                    if (!r || !p) {
                        var t = "";
                        if ("youtube" !== e.type || r || (r = 1, t = "https://www.youtube.com/iframe_api"), "vimeo" !== e.type || p || (p = 1, t = "https://player.vimeo.com/api/player.js"), t) {
                            var i = document.createElement("script"),
                                o = document.getElementsByTagName("head")[0];
                            i.src = t, o.appendChild(i), o = null, i = null
                        }
                    }
                }
            }, {
                key: "onAPIready",
                value: function(e) {
                    var t = this;
                    if ("youtube" === t.type && ("undefined" != typeof YT && 0 !== YT.loaded || l ? "object" === ("undefined" == typeof YT ? "undefined" : o(YT)) && 1 === YT.loaded ? e() : u.done(function() {
                            e()
                        }) : (l = 1, window.onYouTubeIframeAPIReady = function() {
                            window.onYouTubeIframeAPIReady = null, u.resolve("done"), e()
                        })), "vimeo" === t.type)
                        if ("undefined" != typeof Vimeo || s) "undefined" != typeof Vimeo ? e() : d.done(function() {
                            e()
                        });
                        else {
                            s = 1;
                            var i = setInterval(function() {
                                "undefined" != typeof Vimeo && (clearInterval(i), d.resolve("done"), e())
                            }, 20)
                        }
                    "local" === t.type && e()
                }
            }]), t
        }();
    window.VideoWorker = y,
        /*!
         * Name    : Video Background Extension for Jarallax
         * Version : 1.0.0
         * Author  : nK http://nkdev.info
         * GitHub  : https://github.com/nk-o/jarallax
         */
        function() {
            if ("undefined" != typeof jarallax) {
                var e = jarallax.constructor,
                    t = e.prototype.init;
                e.prototype.init = function() {
                    var e = this;
                    t.apply(e), e.video && e.video.getIframe(function(t) {
                        var i = t.parentNode;
                        e.css(t, {
                            position: e.image.position,
                            top: "0px",
                            left: "0px",
                            right: "0px",
                            bottom: "0px",
                            width: "100%",
                            height: "100%",
                            maxWidth: "none",
                            maxHeight: "none",
                            margin: 0,
                            zIndex: -1
                        }), e.$video = t, e.image.$container.appendChild(t), i.parentNode.removeChild(i)
                    })
                };
                var o = e.prototype.coverImage;
                e.prototype.coverImage = function() {
                    var e = this,
                        t = o.apply(e),
                        i = e.image.$item.nodeName;
                    if (t && e.video && ("IFRAME" === i || "VIDEO" === i)) {
                        var a = t.image.height,
                            n = a * e.image.width / e.image.height,
                            r = (t.container.width - n) / 2,
                            p = t.image.marginTop;
                        t.container.width > n && (n = t.container.width, a = n * e.image.height / e.image.width, r = 0, p += (t.image.height - a) / 2), "IFRAME" === i && (a += 400, p -= 200), e.css(e.$video, {
                            width: n + "px",
                            marginLeft: r + "px",
                            height: a + "px",
                            marginTop: p + "px"
                        })
                    }
                    return t
                };
                var a = e.prototype.initImg;
                e.prototype.initImg = function() {
                    var e = this,
                        t = a.apply(e);
                    return e.options.videoSrc || (e.options.videoSrc = e.$item.getAttribute("data-jarallax-video") || null), e.options.videoSrc ? (e.defaultInitImgResult = t, !0) : t
                };
                var n = e.prototype.canInitParallax;
                e.prototype.canInitParallax = function() {
                    var e = this,
                        t = n.apply(e);
                    if (!e.options.videoSrc) return t;
                    var i = new y(e.options.videoSrc, {
                        startTime: e.options.videoStartTime || 0,
                        endTime: e.options.videoEndTime || 0,
                        mute: e.options.videoVolume ? 0 : 1,
                        volume: e.options.videoVolume || 0
                    });
                    if (i.isValid())
                        if (t) {
                            if (i.on("ready", function() {
                                    if (e.options.videoPlayOnlyVisible) {
                                        var t = e.onScroll;
                                        e.onScroll = function() {
                                            t.apply(e), e.isVisible() ? i.play() : i.pause()
                                        }
                                    } else i.play()
                                }), i.on("started", function() {
                                    e.image.$default_item = e.image.$item, e.image.$item = e.$video, e.image.width = e.video.videoWidth || 1280, e.image.height = e.video.videoHeight || 720, e.options.imgWidth = e.image.width, e.options.imgHeight = e.image.height, e.coverImage(), e.clipContainer(), e.onScroll(), e.image.$default_item && (e.image.$default_item.style.display = "none")
                                }), e.video = i, !e.defaultInitImgResult) return "local" !== i.type ? (i.getImageURL(function(t) {
                                e.image.src = t, e.init()
                            }), !1) : (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", !0)
                        } else e.defaultInitImgResult || i.getImageURL(function(t) {
                            var i = e.$item.getAttribute("style");
                            i && e.$item.setAttribute("data-jarallax-original-styles", i), e.css(e.$item, {
                                "background-image": 'url("' + t + '")',
                                "background-position": "center",
                                "background-size": "cover"
                            })
                        });
                    return t
                };
                var r = e.prototype.destroy;
                e.prototype.destroy = function() {
                    var e = this;
                    e.image.$default_item && (e.image.$item = e.image.$default_item, delete e.image.$default_item), r.apply(e)
                }, i(window, "DOMContentLoaded", function() {
                    jarallax(document.querySelectorAll("[data-jarallax-video]"))
                })
            }
        }()
}();

/*************************
Owl Carousel
*************************/
! function(a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Pipe, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }

    function f(a) {
        if (a.touches !== d) return {
            x: a.touches[0].pageX,
            y: a.touches[0].pageY
        };
        if (a.touches === d) {
            if (a.pageX !== d) return {
                x: a.pageX,
                y: a.pageY
            };
            if (a.pageX === d) return {
                x: a.clientX,
                y: a.clientY
            }
        }
    }

    function g(a) {
        var b, d, e = c.createElement("div"),
            f = a;
        for (b in f)
            if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
        return [!1]
    }

    function h() {
        return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function i() {
        return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function j() {
        return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function k() {
        return "ontouchstart" in b || !!navigator.msMaxTouchPoints
    }

    function l() {
        return b.navigator.msPointerEnabled
    }
    var m, n, o;
    m = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, n = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    }, o = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Plugins = {}, e.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a = this._clones,
                b = this.$stage.children(".cloned");
            (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a, b, c = this._clones,
                d = this._items,
                e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
            for (a = 0, b = Math.abs(e / 2); b > a; a++) e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a, b, c, d = this.settings.rtl ? 1 : -1,
                e = (this.width() / this.settings.items).toFixed(3),
                f = 0;
            for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++) a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var b, c, d = (this.width() / this.settings.items).toFixed(3),
                e = {
                    width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                    "padding-left": this.settings.stagePadding || "",
                    "padding-right": this.settings.stagePadding || ""
                };
            if (this.$stage.css(e), e = {
                    width: this.settings.autoWidth ? "auto" : d - this.settings.margin
                }, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function(a) {
                    return a > 1
                }).length > 0)
                for (b = 0, c = this._coordinates.length; c > b; b++) e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e);
            else this.$stage.children().css(e)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current && this.reset(this.$stage.children().index(a.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];
            for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], e.prototype.initialize = function() {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var b, c, e;
            if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthImages(b), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, e.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) {
            b >= a && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function(a, b) {
            return b.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, e.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", {
            content: c.data
        }), c.data
    }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                return this[a]
            }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function() {
        if (0 === this._items.length) return !1;
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, e.prototype.eventsCall = function() {
        this.e._onDragStart = a.proxy(function(a) {
            this.onDragStart(a)
        }, this), this.e._onDragMove = a.proxy(function(a) {
            this.onDragMove(a)
        }, this), this.e._onDragEnd = a.proxy(function(a) {
            this.onDragEnd(a)
        }, this), this.e._onResize = a.proxy(function(a) {
            this.onResize(a)
        }, this), this.e._transitionEnd = a.proxy(function(a) {
            this.transitionEnd(a)
        }, this), this.e._preventClick = a.proxy(function(a) {
            this.preventClick(a)
        }, this)
    }, e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    }, e.prototype.eventsRouter = function(a) {
        var b = a.type;
        "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
    }, e.prototype.internalEvents = function() {
        var c = (k(), l());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)), this.$stage.on("dragstart", function() {
            return !1
        }), this.$stage.get(0).onselectstart = function() {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
    }, e.prototype.onDragStart = function(d) {
        var e, g, h, i;
        if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1;
        if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this))
    }, e.prototype.onDragMove = function(a) {
        var c, e, g, h, i, j;
        this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, e.prototype.onDragEnd = function(b) {
        var d, e, f;
        if (this.state.isTouch) {
            if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents")
        }
    }, e.prototype.removeClick = function(c) {
        this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function() {
            a(c).off("click.preventClick")
        }, 300)
    }, e.prototype.preventClick = function(b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick")
    }, e.prototype.getTransformProperty = function() {
        var a, c;
        return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]
    }, e.prototype.closest = function(b) {
        var c = -1,
            d = 30,
            e = this.width(),
            f = this.coordinates();
        return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) {
            return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c
        }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c
    }, e.prototype.animate = function(b) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: b + "px"
        }) : this.$stage.animate({
            left: b
        }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function(a) {
        this._invalidated[a] = !0
    }, e.prototype.reset = function(a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function(b, c) {
        var e = c ? this._items.length : this._items.length + this._clones.length;
        return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
    }, e.prototype.relative = function(a) {
        return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function(a) {
        var b, c, d, e = 0,
            f = this.settings;
        if (a) return this._items.length - 1;
        if (!f.loop && f.center) b = this._items.length - 1;
        else if (f.loop || f.center)
            if (f.loop || f.center) b = this._items.length + f.items;
            else {
                if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position.";
                for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width();
                    (d = this.coordinates(e)) && !(d * revert >= c);) b = ++e
            }
        else b = this._items.length - f.items;
        return b
    }, e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) {
                return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
            };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function(a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function(b) {
        var c = null;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
    }, e.prototype.duration = function(a, b, c) {
        return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function(c, d) {
        if (this.settings.loop) {
            var e = c - this.relative(this.current()),
                f = this.current(),
                g = this.current(),
                h = this.current() + e,
                i = 0 > g - h ? !0 : !1,
                j = this._clones.length + this._items.length;
            h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function() {
                this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update()
    }, e.prototype.next = function(a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function(a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.transitionEnd = function(a) {
        return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
    }, e.prototype.viewport = function() {
        var d;
        if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth) d = b.innerWidth;
        else {
            if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
            d = c.documentElement.clientWidth
        }
        return d
    }, e.prototype.replace = function(b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function(a, b) {
        b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", {
            content: a,
            position: b
        }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: a,
            position: b
        })
    }, e.prototype.remove = function(a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.addTriggerableEvents = function() {
        var b = a.proxy(function(b, c) {
            return a.proxy(function(a) {
                a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]))
            }, this)
        }, this);
        a.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, a.proxy(function(a, c) {
            this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
        }, this))
    }, e.prototype.watchVisibility = function() {
        function c(a) {
            return a.offsetWidth > 0 && a.offsetHeight > 0
        }

        function d() {
            c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile))
        }
        c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
    }, e.prototype.preloadAutoWidthImages = function(b) {
        var c, d, e, f;
        c = 0, d = this, b.each(function(g, h) {
            e = a(h), f = new Image, f.onload = function() {
                c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize())
            }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
        })
    }, e.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var d in this._plugins) this._plugins[d].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : c > a;
            case ">":
                return d ? c > a : a > c;
            case ">=":
                return d ? c >= a : a >= c;
            case "<=":
                return d ? a >= c : c >= a
        }
    }, e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function(b, c, d) {
        var e = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            f = a.camelCase(a.grep(["on", b, d], function(a) {
                return a
            }).join("-").toLowerCase()),
            g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, e, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(g)
        }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
    }, e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.browserSupport = function() {
        if (this.support3d = j(), this.support3d) {
            this.transformVendor = i();
            var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = b.orientation
    }, a.fn.owlCarousel = function(b) {
        return this.each(function() {
            a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    var c = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) {
                            this.load(b)
                        }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h)
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    c.Defaults = {
        lazyLoad: !1
    }, c.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
                f.css({
                    "background-image": "url(" + g + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, c.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document),
function(a) {
    var b = function(c) {
        this._core = c, this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    b.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, b.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, b.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": a.proxy(function(a) {
                this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": a.proxy(function() {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find(".owl-video");
                c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
            }, this)
        }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    d.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, d.prototype.fetch = function(a, b) {
        var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else {
            if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            c = "vimeo"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, d.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
            };
        return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large, l(f)
            }
        }))
    }, d.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, d.prototype.play = function(b) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var c, d, e = a(b.target || b.srcElement),
            f = e.closest("." + this._core.settings.itemClass),
            g = this._videos[f.attr("data-video")],
            h = g.width || "100%",
            i = g.height || this._core.$stage.height();
        "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d)
    }, d.prototype.isInFullScreen = function() {
        var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0
    }, d.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                this.swapping = "translated" == a.type
            }, this),
            "translate.owl.carousel": a.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, e.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
        }
    }, e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    d.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, d.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
    }, d.prototype.play = function() {
        return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, d.prototype.stop = function() {
        b.clearInterval(this.interval)
    }, d.prototype.pause = function() {
        b.clearInterval(this.interval)
    }, d.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this.interval);
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document),
function(a) {
    "use strict";
    var b = function(c) {
        this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) {
                this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "change.owl.carousel": a.proxy(function(a) {
                if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var b = this._core.current(),
                        c = this._core.maximum(),
                        d = this._core.minimum();
                    a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": a.proxy(function() {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    b.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, b.prototype.initialize = function() {
        var b, c, d = this._core.settings;
        d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function(b) {
            var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(c, d.dotsSpeed)
        }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function() {
            this.prev(d.navSpeed)
        }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function() {
            this.next(d.navSpeed)
        }, this));
        for (c in this._overrides) this._core[c] = a.proxy(this[c], this)
    }, b.prototype.destroy = function() {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, b.prototype.update = function() {
        var a, b, c, d = this._core.settings,
            e = this._core.clones().length / 2,
            f = e + this._core.items().length,
            g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
        if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
            for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({
                start: a - e,
                end: a - e + g - 1
            }), b = 0, ++c), b += this._core.mergers(this._core.relative(a))
    }, b.prototype.draw = function() {
        var b, c, d = "",
            e = this._core.settings,
            f = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
            if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
                for (c = 0; c < this._controls.$indicators.children().length; c++) d += this._templates[this._core.relative(c)];
                this._controls.$indicators.html(d)
            } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(e.dots)
    }, b.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
        }
    }, b.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, function(a) {
            return a.start <= b && a.end >= b
        }).pop()
    }, b.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, b.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, b.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, b.prototype.to = function(b, c, d) {
        var e;
        d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    "use strict";
    var c = function(d) {
        this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[c] = b.content
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function() {
            var a = b.location.hash.substring(1),
                c = this._core.$stage.children(),
                d = this._hashes[a] && c.index(this._hashes[a]) || 0;
            return a ? void this._core.to(d, !1, !0) : !1
        }, this))
    };
    c.Defaults = {
        URLhashListener: !1
    }, c.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);

/*************************
MediaElement.js
*************************/
! function e(t, n, i) {
    function o(r, s) {
        if (!n[r]) {
            if (!t[r]) {
                var l = "function" == typeof require && require;
                if (!s && l) return l(r, !0);
                if (a) return a(r, !0);
                var d = new Error("Cannot find module '" + r + "'");
                throw d.code = "MODULE_NOT_FOUND", d
            }
            var u = n[r] = {
                exports: {}
            };
            t[r][0].call(u.exports, function(e) {
                var n = t[r][1][e];
                return o(n || e)
            }, u, u.exports, e, t, n, i)
        }
        return n[r].exports
    }
    for (var a = "function" == typeof require && require, r = 0; r < i.length; r++) o(i[r]);
    return o
}({
    1: [function(e, t, n) {}, {}],
    2: [function(e, t, n) {
        (function(n) {
            var i = void 0 !== n ? n : "undefined" != typeof window ? window : {},
                o = e(1);
            if ("undefined" != typeof document) t.exports = document;
            else {
                var a = i["__GLOBAL_DOCUMENT_CACHE@4"];
                a || (a = i["__GLOBAL_DOCUMENT_CACHE@4"] = o), t.exports = a
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        1: 1
    }],
    3: [function(e, t, n) {
        (function(e) {
            "undefined" != typeof window ? t.exports = window : void 0 !== e ? t.exports = e : "undefined" != typeof self ? t.exports = self : t.exports = {}
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    4: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            a = e(6),
            r = (i = a) && i.__esModule ? i : {
                default: i
            },
            s = e(14),
            l = e(25);
        var d = {
            lang: "en",
            en: s.EN,
            language: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (null !== t && void 0 !== t && t.length) {
                    if ("string" != typeof t[0]) throw new TypeError("Language code must be a string value");
                    if (!/^[a-z]{2}(\-[a-z]{2})?$/i.test(t[0])) throw new TypeError("Language code must have format `xx` or `xx-xx`");
                    d.lang = t[0], void 0 === d[t[0]] ? (t[1] = null !== t[1] && void 0 !== t[1] && "object" === o(t[1]) ? t[1] : {}, d[t[0]] = (0, l.isObjectEmpty)(t[1]) ? s.EN : t[1]) : null !== t[1] && void 0 !== t[1] && "object" === o(t[1]) && (d[t[0]] = t[1])
                }
                return d.lang
            },
            t: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ("string" == typeof e && e.length) {
                    var n = void 0,
                        i = void 0,
                        a = d.language(),
                        r = function(e, t, n) {
                            return "object" !== (void 0 === e ? "undefined" : o(e)) || "number" != typeof t || "number" != typeof n ? e : [function() {
                                return arguments.length <= 1 ? void 0 : arguments[1]
                            }, function() {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                            }, function() {
                                return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                            }, function() {
                                return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : 0 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function() {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) || 11 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) || 12 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) > 2 && (arguments.length <= 0 ? void 0 : arguments[0]) < 20 ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                            }, function() {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 0 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 20 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function() {
                                return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : [3]
                            }, function() {
                                return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function() {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) <= 4 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function() {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function() {
                                return (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 1 ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 2 ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 3 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 4 ? arguments.length <= 4 ? void 0 : arguments[4] : arguments.length <= 1 ? void 0 : arguments[1]
                            }, function() {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) > 2 && (arguments.length <= 0 ? void 0 : arguments[0]) < 7 ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) > 6 && (arguments.length <= 0 ? void 0 : arguments[0]) < 11 ? arguments.length <= 4 ? void 0 : arguments[4] : arguments.length <= 5 ? void 0 : arguments[5]
                            }, function() {
                                return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 3 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 <= 10 ? arguments.length <= 4 ? void 0 : arguments[4] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 11 ? arguments.length <= 5 ? void 0 : arguments[5] : arguments.length <= 6 ? void 0 : arguments[6]
                            }, function() {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 11 ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 10 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 20 ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                            }, function() {
                                return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 2 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function() {
                                return 11 !== (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                            }, function() {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function() {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 8 !== (arguments.length <= 0 ? void 0 : arguments[0]) && 11 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                            }, function() {
                                return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                            }, function() {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 3 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                            }, function() {
                                return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }][n].apply(null, [t].concat(e))
                        };
                    return void 0 !== d[a] && (n = d[a][e], null !== t && "number" == typeof t && (i = d[a]["mejs.plural-form"], n = r.apply(null, [n, t, i]))), !n && d.en && (n = d.en[e], null !== t && "number" == typeof t && (i = d.en["mejs.plural-form"], n = r.apply(null, [n, t, i]))), n = n || e, null !== t && "number" == typeof t && (n = n.replace("%1", t)), (0, l.escapeHTML)(n)
                }
                return e
            }
        };
        r.default.i18n = d, "undefined" != typeof mejsL10n && r.default.i18n.language(mejsL10n.language, mejsL10n.strings), n.default = d
    }, {
        14: 14,
        25: 25,
        6: 6
    }],
    5: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = u(e(3)),
            o = u(e(2)),
            a = u(e(6)),
            r = e(25),
            s = e(26),
            l = e(7),
            d = e(23);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = function e(t, n, u) {
            var c = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var f = this;
            u = Array.isArray(u) ? u : null, f.defaults = {
                renderers: [],
                fakeNodeName: "mediaelementwrapper",
                pluginPath: "build/",
                shimScriptAccess: "sameDomain",
                customError: ""
            }, n = Object.assign(f.defaults, n), f.mediaElement = o.default.createElement(n.fakeNodeName), f.mediaElement.options = n;
            var p = t,
                m = !1;
            if ("string" == typeof t ? f.mediaElement.originalNode = o.default.getElementById(t) : (f.mediaElement.originalNode = t, p = t.id), p = p || "mejs_" + Math.random().toString().slice(2), void 0 !== f.mediaElement.originalNode && null !== f.mediaElement.originalNode && f.mediaElement.appendChild) {
                f.mediaElement.originalNode.setAttribute("id", p + "_from_mejs");
                var h = f.mediaElement.originalNode.tagName.toLowerCase();
                ["video", "audio"].indexOf(h) > -1 && !f.mediaElement.originalNode.getAttribute("preload") && f.mediaElement.originalNode.setAttribute("preload", "none"), f.mediaElement.originalNode.parentNode.insertBefore(f.mediaElement, f.mediaElement.originalNode), f.mediaElement.appendChild(f.mediaElement.originalNode)
            }
            f.mediaElement.id = p, f.mediaElement.renderers = {}, f.mediaElement.renderer = null, f.mediaElement.rendererName = null, f.mediaElement.changeRenderer = function(e, t) {
                var n = c;
                if (void 0 !== n.mediaElement.renderer && null !== n.mediaElement.renderer && n.mediaElement.renderer.name === e) return n.mediaElement.renderer.pause(), n.mediaElement.renderer.stop && n.mediaElement.renderer.stop(), n.mediaElement.renderer.show(), n.mediaElement.renderer.setSrc(t[0].src), !0;
                void 0 !== n.mediaElement.renderer && null !== n.mediaElement.renderer && (n.mediaElement.renderer.pause(), n.mediaElement.renderer.stop && n.mediaElement.renderer.stop(), n.mediaElement.renderer.hide());
                var i = n.mediaElement.renderers[e],
                    o = null;
                if (void 0 !== i && null !== i) return i.show(), i.setSrc(t[0].src), n.mediaElement.renderer = i, n.mediaElement.rendererName = e, !0;
                for (var a = n.mediaElement.options.renderers.length ? n.mediaElement.options.renderers : l.renderer.order, r = 0, s = a.length; r < s; r++) {
                    var d = a[r];
                    if (d === e) {
                        o = l.renderer.renderers[d];
                        var u = Object.assign(o.options, n.mediaElement.options);
                        return (i = o.create(n.mediaElement, u, t)).name = e, n.mediaElement.renderers[o.name] = i, n.mediaElement.renderer = i, n.mediaElement.rendererName = e, i.show(), !0
                    }
                }
                return !1
            }, f.mediaElement.setSize = function(e, t) {
                void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && f.mediaElement.renderer.setSize(e, t)
            }, f.mediaElement.createErrorMessage = function(e) {
                e = Array.isArray(e) ? e : [];
                var t = o.default.createElement("div");
                t.className = "me_cannotplay", t.style.width = "100%", t.style.height = "100%";
                var n = f.mediaElement.options.customError;
                if (!n) {
                    var i = f.mediaElement.originalNode.getAttribute("poster");
                    i && (n += '<img src="' + i + '" width="100%" height="100%" alt="' + a.default.i18n.t("mejs.download-file") + '">');
                    for (var r = 0, s = e.length; r < s; r++) {
                        var l = e[r];
                        n += '<a href="' + l.src + '" data-type="' + l.type + '"><span>' + a.default.i18n.t("mejs.download-file") + ": " + l.src + "</span></a>"
                    }
                }
                t.innerHTML = n, f.mediaElement.originalNode.parentNode.insertBefore(t, f.mediaElement.originalNode), f.mediaElement.originalNode.style.display = "none", m = !0
            };
            var v = a.default.html5media.properties,
                y = a.default.html5media.methods,
                g = function(e, t, n, i) {
                    var o = e[t];
                    Object.defineProperty(e, t, {
                        get: function() {
                            return n.apply(e, [o])
                        },
                        set: function(t) {
                            return o = i.apply(e, [t])
                        }
                    })
                },
                b = function(e) {
                    if ("src" !== e) {
                        var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1),
                            n = function() {
                                return void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer ? f.mediaElement.renderer["get" + t]() : null
                            },
                            i = function(e) {
                                void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && f.mediaElement.renderer["set" + t](e)
                            };
                        g(f.mediaElement, e, n, i), f.mediaElement["get" + t] = n, f.mediaElement["set" + t] = i
                    }
                },
                E = function() {
                    return void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer ? f.mediaElement.renderer.getSrc() : null
                },
                S = function(e) {
                    var t = [];
                    if ("string" == typeof e) t.push({
                        src: e,
                        type: e ? (0, s.getTypeFromFile)(e) : ""
                    });
                    else
                        for (var n = 0, i = e.length; n < i; n++) {
                            var o = (0, s.absolutizeUrl)(e[n].src),
                                a = e[n].type;
                            t.push({
                                src: o,
                                type: "" !== a && null !== a && void 0 !== a || !o ? a : (0, s.getTypeFromFile)(o)
                            })
                        }
                    var d = l.renderer.select(t, f.mediaElement.options.renderers.length ? f.mediaElement.options.renderers : []),
                        u = void 0;
                    if (f.mediaElement.paused || (f.mediaElement.pause(), u = (0, r.createEvent)("pause", f.mediaElement), f.mediaElement.dispatchEvent(u)), f.mediaElement.originalNode.setAttribute("src", t[0].src || ""), f.mediaElement.querySelector(".me_cannotplay") && f.mediaElement.querySelector(".me_cannotplay").remove(), null === d) return f.mediaElement.createErrorMessage(t), (u = (0, r.createEvent)("error", f.mediaElement)).message = "No renderer found", void f.mediaElement.dispatchEvent(u);
                    f.mediaElement.changeRenderer(d.rendererName, t), void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer || ((u = (0, r.createEvent)("error", f.mediaElement)).message = "Error creating renderer", f.mediaElement.dispatchEvent(u), f.mediaElement.createErrorMessage(t))
                },
                x = function(e) {
                    f.mediaElement[e] = function() {
                        for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                        if (void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && "function" == typeof f.mediaElement.renderer[e]) try {
                            f.mediaElement.renderer[e](n)
                        } catch (e) {
                            f.mediaElement.createErrorMessage()
                        }
                        return null
                    }
                };
            g(f.mediaElement, "src", E, S), f.mediaElement.getSrc = E, f.mediaElement.setSrc = S;
            for (var w = 0, P = v.length; w < P; w++) b(v[w]);
            for (var T = 0, C = y.length; T < C; T++) x(y[T]);
            f.mediaElement.events = {}, f.mediaElement.addEventListener = function(e, t) {
                f.mediaElement.events[e] = f.mediaElement.events[e] || [], f.mediaElement.events[e].push(t)
            }, f.mediaElement.removeEventListener = function(e, t) {
                if (!e) return f.mediaElement.events = {}, !0;
                var n = f.mediaElement.events[e];
                if (!n) return !0;
                if (!t) return f.mediaElement.events[e] = [], !0;
                for (var i = 0; i < n.length; i++)
                    if (n[i] === t) return f.mediaElement.events[e].splice(i, 1), !0;
                return !1
            }, f.mediaElement.dispatchEvent = function(e) {
                var t = f.mediaElement.events[e.type];
                if (t)
                    for (var n = 0; n < t.length; n++) t[n].apply(null, [e])
            };
            var k = function(e, t) {
                    if (a.default.html5media.mediaTypes.indexOf(t) > -1 && "https:" === i.default.location.protocol && d.IS_IOS && !i.default.MSStream) {
                        var n = new XMLHttpRequest;
                        n.onreadystatechange = function() {
                            if (4 === this.readyState && 200 === this.status) {
                                var t = (i.default.URL || i.default.webkitURL).createObjectURL(this.response);
                                return f.mediaElement.originalNode.setAttribute("src", t), t
                            }
                            return e
                        }, n.open("GET", e), n.responseType = "blob", n.send()
                    }
                    return e
                },
                _ = void 0;
            if (null !== u) _ = u;
            else if (null !== f.mediaElement.originalNode) switch (_ = [], f.mediaElement.originalNode.nodeName.toLowerCase()) {
                case "iframe":
                    _.push({
                        type: "",
                        src: f.mediaElement.originalNode.getAttribute("src")
                    });
                    break;
                case "audio":
                case "video":
                    var N = f.mediaElement.originalNode.childNodes.length,
                        A = f.mediaElement.originalNode.getAttribute("src");
                    if (A) {
                        var L = f.mediaElement.originalNode,
                            F = (0, s.formatType)(A, L.getAttribute("type"));
                        _.push({
                            type: F,
                            src: k(A, F)
                        })
                    }
                    for (var j = 0; j < N; j++) {
                        var I = f.mediaElement.originalNode.childNodes[j];
                        if (I.nodeType === Node.ELEMENT_NODE && "source" === I.tagName.toLowerCase()) {
                            var M = I.getAttribute("src"),
                                O = (0, s.formatType)(M, I.getAttribute("type"));
                            _.push({
                                type: O,
                                src: k(M, O)
                            })
                        }
                    }
            }
            return _.length && (f.mediaElement.src = _), f.mediaElement.options.success && f.mediaElement.options.success(f.mediaElement, f.mediaElement.originalNode), m && f.mediaElement.options.error && f.mediaElement.options.error(f.mediaElement, f.mediaElement.originalNode), f.mediaElement
        };
        i.default.MediaElement = c, n.default = c
    }, {
        2: 2,
        23: 23,
        25: 25,
        26: 26,
        3: 3,
        6: 6,
        7: 7
    }],
    6: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i, o = e(3);
        var a = {
            version: "4.1.1",
            html5media: {
                properties: ["volume", "src", "currentTime", "muted", "duration", "paused", "ended", "buffered", "error", "networkState", "readyState", "seeking", "seekable", "currentSrc", "preload", "bufferedBytes", "bufferedTime", "initialTime", "startOffsetTime", "defaultPlaybackRate", "playbackRate", "played", "autoplay", "loop", "controls"],
                readOnlyProperties: ["duration", "paused", "ended", "buffered", "error", "networkState", "readyState", "seeking", "seekable"],
                methods: ["load", "play", "pause", "canPlayType"],
                events: ["loadstart", "progress", "suspend", "abort", "error", "emptied", "stalled", "play", "pause", "loadedmetadata", "loadeddata", "waiting", "playing", "canplay", "canplaythrough", "seeking", "seeked", "timeupdate", "ended", "ratechange", "durationchange", "volumechange"],
                mediaTypes: ["audio/mp3", "audio/ogg", "audio/oga", "audio/wav", "audio/x-wav", "audio/wave", "audio/x-pn-wav", "audio/mpeg", "audio/mp4", "video/mp4", "video/webm", "video/ogg", "video/ogv"]
            }
        };
        ((i = o) && i.__esModule ? i : {
            default: i
        }).default.mejs = a, n.default = a
    }, {
        3: 3
    }],
    7: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.renderer = void 0;
        var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            r = e(6),
            s = (i = r) && i.__esModule ? i : {
                default: i
            };
        var l = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.renderers = {}, this.order = []
                }
                return a(e, [{
                    key: "add",
                    value: function(e) {
                        if (void 0 === e.name) throw new TypeError("renderer must contain at least `name` property");
                        this.renderers[e.name] = e, this.order.push(e.name)
                    }
                }, {
                    key: "select",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            n = t.length;
                        if (t = t.length ? t : this.order, !n) {
                            var i = [/^(html5|native)/i, /^flash/i, /iframe$/i],
                                o = function(e) {
                                    for (var t = 0, n = i.length; t < n; t++)
                                        if (i[t].test(e)) return t;
                                    return i.length
                                };
                            t.sort(function(e, t) {
                                return o(e) - o(t)
                            })
                        }
                        for (var a = 0, r = t.length; a < r; a++) {
                            var s = t[a],
                                l = this.renderers[s];
                            if (null !== l && void 0 !== l)
                                for (var d = 0, u = e.length; d < u; d++)
                                    if ("function" == typeof l.canPlayType && "string" == typeof e[d].type && l.canPlayType(e[d].type)) return {
                                        rendererName: l.name,
                                        src: e[d].src
                                    }
                        }
                        return null
                    }
                }, {
                    key: "order",
                    set: function(e) {
                        if (!Array.isArray(e)) throw new TypeError("order must be an array of strings.");
                        this._order = e
                    },
                    get: function() {
                        return this._order
                    }
                }, {
                    key: "renderers",
                    set: function(e) {
                        if (null !== e && "object" !== (void 0 === e ? "undefined" : o(e))) throw new TypeError("renderers must be an array of objects.");
                        this._renderers = e
                    },
                    get: function() {
                        return this._renderers
                    }
                }]), e
            }(),
            d = n.renderer = new l;
        s.default.Renderers = d
    }, {
        6: 6
    }],
    8: [function(e, t, n) {
        "use strict";
        var i = c(e(3)),
            o = c(e(2)),
            a = c(e(4)),
            r = e(16),
            s = c(r),
            l = function(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }
            }(e(23)),
            d = e(25),
            u = e(24);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.assign(r.config, {
            usePluginFullScreen: !0,
            fullscreenText: null
        }), Object.assign(s.default.prototype, {
            isFullScreen: !1,
            isNativeFullScreen: !1,
            isInIframe: !1,
            isPluginClickThroughCreated: !1,
            fullscreenMode: "",
            containerSizeTimeout: null,
            buildfullscreen: function(e) {
                if (e.isVideo) {
                    e.isInIframe = i.default.location !== i.default.parent.location, e.detectFullscreenMode();
                    var t = this,
                        n = (0, d.isString)(t.options.fullscreenText) ? t.options.fullscreenText : a.default.t("mejs.fullscreen"),
                        r = o.default.createElement("div");
                    if (r.className = t.options.classPrefix + "button " + t.options.classPrefix + "fullscreen-button", r.innerHTML = '<button type="button" aria-controls="' + t.id + '" title="' + n + '" aria-label="' + n + '" tabindex="0"></button>', t.addControlElement(r, "fullscreen"), r.addEventListener("click", function() {
                            l.HAS_TRUE_NATIVE_FULLSCREEN && l.IS_FULLSCREEN || e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen()
                        }), e.fullscreenBtn = r, t.globalBind("keydown", function(n) {
                            27 === (n.which || n.keyCode || 0) && (l.HAS_TRUE_NATIVE_FULLSCREEN && l.IS_FULLSCREEN || t.isFullScreen) && e.exitFullScreen()
                        }), t.normalHeight = 0, t.normalWidth = 0, l.HAS_TRUE_NATIVE_FULLSCREEN) {
                        e.globalBind(l.FULLSCREEN_EVENT_NAME, function() {
                            e.isFullScreen && (l.isFullScreen() ? (e.isNativeFullScreen = !0, e.setControlsSize()) : (e.isNativeFullScreen = !1, e.exitFullScreen()))
                        })
                    }
                }
            },
            detectFullscreenMode: function() {
                var e = null !== this.media.rendererName && /(native|html5)/i.test(this.media.rendererName),
                    t = "";
                return t = l.HAS_TRUE_NATIVE_FULLSCREEN && e ? "native-native" : l.HAS_TRUE_NATIVE_FULLSCREEN && !e ? "plugin-native" : this.usePluginFullScreen && l.SUPPORT_POINTER_EVENTS ? "plugin-click" : "fullwindow", this.fullscreenMode = t, t
            },
            cleanfullscreen: function(e) {
                e.exitFullScreen()
            },
            enterFullScreen: function() {
                var e = this,
                    t = null !== e.media.rendererName && /(html5|native)/i.test(e.media.rendererName),
                    n = getComputedStyle(e.container);
                if (l.IS_IOS && l.HAS_IOS_FULLSCREEN) "function" == typeof e.media.webkitEnterFullscreen ? e.media.webkitEnterFullscreen() : e.media.originalNode.webkitEnterFullscreen();
                else {
                    if ((0, u.addClass)(o.default.documentElement, e.options.classPrefix + "fullscreen"), (0, u.addClass)(e.container, e.options.classPrefix + "container-fullscreen"), e.normalHeight = parseFloat(n.height), e.normalWidth = parseFloat(n.width), "native-native" !== e.fullscreenMode && "plugin-native" !== e.fullscreenMode || (l.requestFullScreen(e.container), e.isInIframe && setTimeout(function t() {
                            if (e.isNativeFullScreen) {
                                var n = i.default.innerWidth || o.default.documentElement.clientWidth || o.default.body.clientWidth,
                                    a = screen.width;
                                Math.abs(a - n) > .002 * a ? e.exitFullScreen() : setTimeout(t, 500)
                            }
                        }, 1e3)), e.container.style.width = "100%", e.container.style.height = "100%", e.containerSizeTimeout = setTimeout(function() {
                            e.container.style.width = "100%", e.container.style.height = "100%", e.setControlsSize()
                        }, 500), t) e.node.style.width = "100%", e.node.style.height = "100%";
                    else
                        for (var a = e.container.querySelectorAll("iframe, embed, object, video"), r = a.length, s = 0; s < r; s++) a[s].style.width = "100%", a[s].style.height = "100%";
                    e.options.setDimensions && "function" == typeof e.media.setSize && e.media.setSize(screen.width, screen.height);
                    for (var c = e.layers.childNodes, f = c.length, p = 0; p < f; p++) c[p].style.width = "100%", c[p].style.height = "100%";
                    e.fullscreenBtn && ((0, u.removeClass)(e.fullscreenBtn, e.options.classPrefix + "fullscreen"), (0, u.addClass)(e.fullscreenBtn, e.options.classPrefix + "unfullscreen")), e.setControlsSize(), e.isFullScreen = !0;
                    var m = Math.min(screen.width / e.width, screen.height / e.height),
                        h = e.container.querySelector("." + e.options.classPrefix + "captions-text");
                    h && (h.style.fontSize = 100 * m + "%", h.style.lineHeight = "normal", e.container.querySelector("." + e.options.classPrefix + "captions-position").style.bottom = "45px");
                    var v = (0, d.createEvent)("enteredfullscreen", e.container);
                    e.container.dispatchEvent(v)
                }
            },
            exitFullScreen: function() {
                var e = this,
                    t = null !== e.media.rendererName && /(native|html5)/i.test(e.media.rendererName);
                if (clearTimeout(e.containerSizeTimeout), l.HAS_TRUE_NATIVE_FULLSCREEN && (l.IS_FULLSCREEN || e.isFullScreen) && l.cancelFullScreen(), (0, u.removeClass)(o.default.documentElement, e.options.classPrefix + "fullscreen"), (0, u.removeClass)(e.container, e.options.classPrefix + "container-fullscreen"), e.options.setDimensions) {
                    if (e.container.style.width = e.normalWidth + "px", e.container.style.height = e.normalHeight + "px", t) e.node.style.width = e.normalWidth + "px", e.node.style.height = e.normalHeight + "px";
                    else
                        for (var n = e.container.querySelectorAll("iframe, embed, object, video"), i = n.length, a = 0; a < i; a++) n[a].style.width = e.normalWidth + "px", n[a].style.height = e.normalHeight + "px";
                    "function" == typeof e.media.setSize && e.media.setSize(e.normalWidth, e.normalHeight);
                    for (var r = e.layers.childNodes, s = r.length, c = 0; c < s; c++) r[c].style.width = e.normalWidth + "px", r[c].style.height = e.normalHeight + "px"
                }
                e.fullscreenBtn && ((0, u.removeClass)(e.fullscreenBtn, e.options.classPrefix + "unfullscreen"), (0, u.addClass)(e.fullscreenBtn, e.options.classPrefix + "fullscreen")), e.setControlsSize(), e.isFullScreen = !1;
                var f = e.container.querySelector("." + e.options.classPrefix + "captions-text");
                f && (f.style.fontSize = "", f.style.lineHeight = "", e.container.querySelector("." + e.options.classPrefix + "captions-position").style.bottom = "");
                var p = (0, d.createEvent)("exitedfullscreen", e.container);
                e.container.dispatchEvent(p)
            }
        })
    }, {
        16: 16,
        2: 2,
        23: 23,
        24: 24,
        25: 25,
        3: 3,
        4: 4
    }],
    9: [function(e, t, n) {
        "use strict";
        var i = d(e(2)),
            o = e(16),
            a = d(o),
            r = d(e(4)),
            s = e(25),
            l = e(24);

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.assign(o.config, {
            playText: null,
            pauseText: null
        }), Object.assign(a.default.prototype, {
            buildplaypause: function(e, t, n, o) {
                var a = this,
                    d = a.options,
                    u = (0, s.isString)(d.playText) ? d.playText : r.default.t("mejs.play"),
                    c = (0, s.isString)(d.pauseText) ? d.pauseText : r.default.t("mejs.pause"),
                    f = i.default.createElement("div");
                f.className = a.options.classPrefix + "button " + a.options.classPrefix + "playpause-button " + a.options.classPrefix + "play", f.innerHTML = '<button type="button" aria-controls="' + a.id + '" title="' + u + '" aria-label="' + c + '" tabindex="0"></button>', f.addEventListener("click", function() {
                    o.paused ? o.play() : o.pause()
                });
                var p = f.querySelector("button");

                function m(e) {
                    "play" === e ? ((0, l.removeClass)(f, a.options.classPrefix + "play"), (0, l.removeClass)(f, a.options.classPrefix + "replay"), (0, l.addClass)(f, a.options.classPrefix + "pause"), p.setAttribute("title", c), p.setAttribute("aria-label", c)) : ((0, l.removeClass)(f, a.options.classPrefix + "pause"), (0, l.removeClass)(f, a.options.classPrefix + "replay"), (0, l.addClass)(f, a.options.classPrefix + "play"), p.setAttribute("title", u), p.setAttribute("aria-label", u))
                }
                a.addControlElement(f, "playpause"), m("pse"), o.addEventListener("loadedmetadata", function() {
                    -1 === o.rendererName.indexOf("flash") && m("pse")
                }), o.addEventListener("play", function() {
                    m("play")
                }), o.addEventListener("playing", function() {
                    m("play")
                }), o.addEventListener("pause", function() {
                    m("pse")
                }), o.addEventListener("ended", function() {
                    e.options.loop || ((0, l.removeClass)(f, a.options.classPrefix + "pause"), (0, l.removeClass)(f, a.options.classPrefix + "play"), (0, l.addClass)(f, a.options.classPrefix + "replay"), p.setAttribute("title", u), p.setAttribute("aria-label", u))
                })
            }
        })
    }, {
        16: 16,
        2: 2,
        24: 24,
        25: 25,
        4: 4
    }],
    10: [function(e, t, n) {
        "use strict";
        var i = u(e(2)),
            o = e(16),
            a = u(o),
            r = u(e(4)),
            s = e(23),
            l = e(28),
            d = e(24);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.assign(o.config, {
            enableProgressTooltip: !0,
            useSmoothHover: !0
        }), Object.assign(a.default.prototype, {
            buildprogress: function(e, t, n, o) {
                var a = 0,
                    u = !1,
                    c = !1,
                    f = this,
                    p = e.options.autoRewind,
                    m = e.options.enableProgressTooltip ? '<span class="' + f.options.classPrefix + 'time-float"><span class="' + f.options.classPrefix + 'time-float-current">00:00</span><span class="' + f.options.classPrefix + 'time-float-corner"></span></span>' : "",
                    h = i.default.createElement("div");
                h.className = f.options.classPrefix + "time-rail", h.innerHTML = '<span class="' + f.options.classPrefix + "time-total " + f.options.classPrefix + 'time-slider"><span class="' + f.options.classPrefix + 'time-buffering"></span><span class="' + f.options.classPrefix + 'time-loaded"></span><span class="' + f.options.classPrefix + 'time-current"></span><span class="' + f.options.classPrefix + 'time-hovered no-hover"></span><span class="' + f.options.classPrefix + 'time-handle"><span class="' + f.options.classPrefix + 'time-handle-content"></span></span>' + m + "</span>", f.addControlElement(h, "progress"), t.querySelector("." + f.options.classPrefix + "time-buffering").style.display = "none", f.rail = t.querySelector("." + f.options.classPrefix + "time-rail"), f.total = t.querySelector("." + f.options.classPrefix + "time-total"), f.loaded = t.querySelector("." + f.options.classPrefix + "time-loaded"), f.current = t.querySelector("." + f.options.classPrefix + "time-current"), f.handle = t.querySelector("." + f.options.classPrefix + "time-handle"), f.timefloat = t.querySelector("." + f.options.classPrefix + "time-float"), f.timefloatcurrent = t.querySelector("." + f.options.classPrefix + "time-float-current"), f.slider = t.querySelector("." + f.options.classPrefix + "time-slider"), f.hovered = t.querySelector("." + f.options.classPrefix + "time-hovered"), f.newTime = 0, f.forcedHandlePause = !1, f.setTransformStyle = function(e, t) {
                    e.style.transform = t, e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t
                };
                var v = function(t) {
                        var n = getComputedStyle(f.total),
                            i = (0, d.offset)(f.total),
                            a = parseFloat(n.width),
                            r = void 0 !== n.webkitTransform ? "webkitTransform" : void 0 !== n.mozTransform ? "mozTransform " : void 0 !== n.oTransform ? "oTransform" : void 0 !== n.msTransform ? "msTransform" : "transform",
                            c = "WebKitCSSMatrix" in window ? "WebKitCSSMatrix" : "MSCSSMatrix" in window ? "MSCSSMatrix" : "CSSMatrix" in window ? "CSSMatrix" : void 0,
                            p = 0,
                            m = 0,
                            h = void 0;
                        if (h = t.originalEvent && t.originalEvent.changedTouches ? t.originalEvent.changedTouches[0].pageX : t.changedTouches ? t.changedTouches[0].pageX : t.pageX, o.duration && (h < i.left ? h = i.left : h > a + i.left && (h = a + i.left), p = (m = h - i.left) / a, f.newTime = p <= .02 ? 0 : p * o.duration, u && null !== o.currentTime && f.newTime.toFixed(4) !== o.currentTime.toFixed(4) && (f.setCurrentRailHandle(f.newTime), f.updateCurrent(f.newTime)), !s.IS_IOS && !s.IS_ANDROID && f.timefloat)) {
                            if (m < 0 && (m = 0), f.options.useSmoothHover && null !== c && void 0 !== window[c]) {
                                var v = new window[c](getComputedStyle(f.handle)[r]).m41,
                                    y = m / parseFloat(getComputedStyle(f.total).width) - v / parseFloat(getComputedStyle(f.total).width);
                                f.hovered.style.left = v + "px", f.setTransformStyle(f.hovered, "scaleX(" + y + ")"), f.hovered.setAttribute("pos", m), y >= 0 ? (0, d.removeClass)(f.hovered, "negative") : (0, d.addClass)(f.hovered, "negative")
                            }
                            f.timefloat.style.left = m + "px", f.timefloatcurrent.innerHTML = (0, l.secondsToTimeCode)(f.newTime, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength), f.timefloat.style.display = "block"
                        }
                    },
                    y = function() {
                        new Date - a >= 1e3 && o.play()
                    };
                f.slider.addEventListener("focus", function() {
                    e.options.autoRewind = !1
                }), f.slider.addEventListener("blur", function() {
                    e.options.autoRewind = p
                }), f.slider.addEventListener("keydown", function(t) {
                    if (new Date - a >= 1e3 && (c = o.paused), f.options.keyActions.length) {
                        var n = t.which || t.keyCode || 0,
                            i = o.duration,
                            r = e.options.defaultSeekForwardInterval(o),
                            l = e.options.defaultSeekBackwardInterval(o),
                            d = o.currentTime;
                        switch (n) {
                            case 37:
                            case 40:
                                o.duration !== 1 / 0 && (d -= l);
                                break;
                            case 39:
                            case 38:
                                o.duration !== 1 / 0 && (d += r);
                                break;
                            case 36:
                                d = 0;
                                break;
                            case 35:
                                d = i;
                                break;
                            case 32:
                                return void(s.IS_FIREFOX || (o.paused ? o.play() : o.pause()));
                            case 13:
                                return void(o.paused ? o.play() : o.pause());
                            default:
                                return
                        }
                        d = d < 0 ? 0 : d >= i ? i : Math.floor(d), a = new Date, c || o.pause(), d < o.duration && !c && setTimeout(y, 1100), o.setCurrentTime(d), t.preventDefault(), t.stopPropagation()
                    }
                });
                var g = ["mousedown", "touchstart"];
                f.slider.addEventListener("dragstart", function() {
                    return !1
                });
                for (var b = 0, E = g.length; b < E; b++) f.slider.addEventListener(g[b], function(t) {
                    if (f.forcedHandlePause = !1, o.duration !== 1 / 0 && (1 === t.which || 0 === t.which)) {
                        o.paused || (f.media.pause(), f.forcedHandlePause = !0), u = !0, v(t);
                        for (var n = ["mouseup", "touchend"], i = 0, a = n.length; i < a; i++) f.container.addEventListener(n[i], function(e) {
                            var t = e.target;
                            (t === f.slider || t.closest("." + f.options.classPrefix + "time-slider")) && v(e)
                        });
                        f.globalBind("mouseup.dur touchend.dur", function() {
                            u && null !== o.currentTime && f.newTime.toFixed(4) !== o.currentTime.toFixed(4) && (o.setCurrentTime(f.newTime), e.setCurrentRail(), f.updateCurrent(f.newTime)), f.forcedHandlePause && f.media.play(), f.forcedHandlePause = !1, u = !1, f.timefloat && (f.timefloat.style.display = "none"), f.globalUnbind("mousemove.dur touchmove.dur mouseup.dur touchend.dur")
                        })
                    }
                });
                f.slider.addEventListener("mouseenter", function(e) {
                    e.target === f.slider && o.duration !== 1 / 0 && (f.container.addEventListener("mousemove", function(e) {
                        var t = e.target;
                        (t === f.slider || t.closest("." + f.options.classPrefix + "time-slider")) && v(e)
                    }), !f.timefloat || s.IS_IOS || s.IS_ANDROID || (f.timefloat.style.display = "block"), f.hovered && !s.IS_IOS && !s.IS_ANDROID && f.options.useSmoothHover && (0, d.removeClass)(f.hovered, "no-hover"))
                }), f.slider.addEventListener("mouseleave", function() {
                    o.duration !== 1 / 0 && (u || (f.globalUnbind("mousemove.dur"), f.timefloat && (f.timefloat.style.display = "none"), f.hovered && f.options.useSmoothHover && (0, d.addClass)(f.hovered, "no-hover")))
                }), o.addEventListener("progress", function(n) {
                    var a = t.querySelector("." + f.options.classPrefix + "broadcast");
                    if (o.duration !== 1 / 0) a && (f.slider.style.display = "", a.remove()), e.setProgressRail(n), f.forcedHandlePause || e.setCurrentRail(n);
                    else if (!a) {
                        var s = i.default.createElement("span");
                        s.className = f.options.classPrefix + "broadcast", s.innerText = r.default.t("mejs.live-broadcast"), f.slider.style.display = "none"
                    }
                }), o.addEventListener("timeupdate", function(n) {
                    var a, s, d, u, c = t.querySelector("." + f.options.classPrefix + "broadcast");
                    if (o.duration !== 1 / 0) c && (f.slider.style.display = "", c.remove()), e.setProgressRail(n), f.forcedHandlePause || e.setCurrentRail(n), a = o.currentTime, s = r.default.t("mejs.time-slider"), d = (0, l.secondsToTimeCode)(a, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength), u = o.duration, f.slider.setAttribute("role", "slider"), f.slider.tabIndex = 0, o.paused ? (f.slider.setAttribute("aria-label", s), f.slider.setAttribute("aria-valuemin", 0), f.slider.setAttribute("aria-valuemax", u), f.slider.setAttribute("aria-valuenow", a), f.slider.setAttribute("aria-valuetext", d)) : (f.slider.removeAttribute("aria-label"), f.slider.removeAttribute("aria-valuemin"), f.slider.removeAttribute("aria-valuemax"), f.slider.removeAttribute("aria-valuenow"), f.slider.removeAttribute("aria-valuetext"));
                    else if (!c) {
                        var p = i.default.createElement("span");
                        p.className = f.options.classPrefix + "broadcast", p.innerText = r.default.t("mejs.live-broadcast"), t.querySelector("." + f.options.classPrefix + "time-rail").appendChild(p), f.slider.style.display = "none"
                    }
                }), f.container.addEventListener("controlsresize", function(t) {
                    o.duration !== 1 / 0 && (e.setProgressRail(t), f.forcedHandlePause || e.setCurrentRail(t))
                })
            },
            setProgressRail: function(e) {
                var t = this,
                    n = void 0 !== e ? e.target : t.media,
                    i = null;
                n && n.buffered && n.buffered.length > 0 && n.buffered.end && n.duration ? i = n.buffered.end(n.buffered.length - 1) / n.duration : n && void 0 !== n.bytesTotal && n.bytesTotal > 0 && void 0 !== n.bufferedBytes ? i = n.bufferedBytes / n.bytesTotal : e && e.lengthComputable && 0 !== e.total && (i = e.loaded / e.total), null !== i && (i = Math.min(1, Math.max(0, i)), t.loaded && t.total && t.setTransformStyle(t.loaded, "scaleX(" + i + ")"))
            },
            setCurrentRailHandle: function(e) {
                this.setCurrentRailMain(this, e)
            },
            setCurrentRail: function() {
                this.setCurrentRailMain(this)
            },
            setCurrentRailMain: function(e, t) {
                if (void 0 !== e.media.currentTime && e.media.duration) {
                    var n = void 0 === t ? e.media.currentTime : t;
                    if (e.total && e.handle) {
                        var i = parseFloat(getComputedStyle(e.total).width),
                            o = Math.round(i * n / e.media.duration),
                            a = o - Math.round(e.handle.offsetWidth / 2);
                        if (a = a < 0 ? 0 : a, e.setTransformStyle(e.current, "scaleX(" + o / i + ")"), e.setTransformStyle(e.handle, "translateX(" + a + "px)"), e.options.useSmoothHover && !(0, d.hasClass)(e.hovered, "no-hover")) {
                            var r = parseInt(e.hovered.getAttribute("pos")),
                                s = (r = isNaN(r) ? 0 : r) / i - a / i;
                            e.hovered.style.left = a + "px", e.setTransformStyle(e.hovered, "scaleX(" + s + ")"), s >= 0 ? (0, d.removeClass)(e.hovered, "negative") : (0, d.addClass)(e.hovered, "negative")
                        }
                    }
                }
            }
        })
    }, {
        16: 16,
        2: 2,
        23: 23,
        24: 24,
        28: 28,
        4: 4
    }],
    11: [function(e, t, n) {
        "use strict";
        var i = l(e(2)),
            o = e(16),
            a = l(o),
            r = e(28),
            s = e(24);

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.assign(o.config, {
            duration: 0,
            timeAndDurationSeparator: "<span> | </span>"
        }), Object.assign(a.default.prototype, {
            buildcurrent: function(e, t, n, o) {
                var a = this,
                    s = i.default.createElement("div");
                s.className = a.options.classPrefix + "time", s.setAttribute("role", "timer"), s.setAttribute("aria-live", "off"), s.innerHTML = '<span class="' + a.options.classPrefix + 'currenttime">' + (0, r.secondsToTimeCode)(0, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength) + "</span>", a.addControlElement(s, "current"), o.addEventListener("timeupdate", function() {
                    a.controlsAreVisible && e.updateCurrent()
                })
            },
            buildduration: function(e, t, n, o) {
                var a = this;
                if (t.lastChild.querySelector("." + a.options.classPrefix + "currenttime")) t.querySelector("." + a.options.classPrefix + "time").innerHTML += a.options.timeAndDurationSeparator + '<span class="' + a.options.classPrefix + 'duration">' + (0, r.secondsToTimeCode)(a.options.duration, a.options.alwaysShowHours, a.options.showTimecodeFrameCount, a.options.framesPerSecond, a.options.secondsDecimalLength) + "</span>";
                else {
                    t.querySelector("." + a.options.classPrefix + "currenttime") && (0, s.addClass)(t.querySelector("." + a.options.classPrefix + "currenttime").parentNode, a.options.classPrefix + "currenttime-container");
                    var l = i.default.createElement("div");
                    l.className = a.options.classPrefix + "time " + a.options.classPrefix + "duration-container", l.innerHTML = '<span class="' + a.options.classPrefix + 'duration">' + (0, r.secondsToTimeCode)(a.options.duration, a.options.alwaysShowHours, a.options.showTimecodeFrameCount, a.options.framesPerSecond, a.options.secondsDecimalLength) + "</span>", a.addControlElement(l, "duration")
                }
                o.addEventListener("timeupdate", function() {
                    a.controlsAreVisible && e.updateDuration()
                })
            },
            updateCurrent: function() {
                var e = this,
                    t = e.media.currentTime;
                isNaN(t) && (t = 0), e.controls.querySelector("." + e.options.classPrefix + "currenttime") && (e.controls.querySelector("." + e.options.classPrefix + "currenttime").innerText = (0, r.secondsToTimeCode)(t, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength))
            },
            updateDuration: function() {
                var e = this,
                    t = e.media.duration;
                (isNaN(t) || t === 1 / 0 || t < 0) && (e.media.duration = e.options.duration = t = 0), e.options.duration > 0 && (t = e.options.duration);
                var n = (0, r.secondsToTimeCode)(t, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength);
                n.length > 5 && (0, s.toggleClass)(e.container, e.options.classPrefix + "long-video"), e.controls.querySelector("." + e.options.classPrefix + "duration") && t > 0 && (e.controls.querySelector("." + e.options.classPrefix + "duration").innerHTML = n)
            }
        })
    }, {
        16: 16,
        2: 2,
        24: 24,
        28: 28
    }],
    12: [function(e, t, n) {
        "use strict";
        var i = c(e(2)),
            o = c(e(6)),
            a = c(e(4)),
            r = e(16),
            s = c(r),
            l = e(28),
            d = e(25),
            u = e(24);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.assign(r.config, {
            startLanguage: "",
            tracksText: null,
            chaptersText: null,
            tracksAriaLive: !1,
            hideCaptionsButtonWhenEmpty: !0,
            toggleCaptionsButtonWhenOnlyOne: !1,
            slidesSelector: ""
        }), Object.assign(s.default.prototype, {
            hasChapters: !1,
            buildtracks: function(e, t, n, o) {
                if (e.tracks.length || e.trackFiles && 0 !== !e.trackFiles.length) {
                    var r = this,
                        s = r.options.tracksAriaLive ? ' role="log" aria-live="assertive" aria-atomic="false"' : "",
                        l = (0, d.isString)(r.options.tracksText) ? r.options.tracksText : a.default.t("mejs.captions-subtitles"),
                        c = (0, d.isString)(r.options.chaptersText) ? r.options.chaptersText : a.default.t("mejs.captions-chapters"),
                        f = null === e.trackFiles ? e.tracks.length : e.trackFiles.length;
                    if (r.domNode.textTracks)
                        for (var p = r.domNode.textTracks.length - 1; p >= 0; p--) r.domNode.textTracks[p].mode = "hidden";
                    r.cleartracks(e), e.captions = i.default.createElement("div"), e.captions.className = r.options.classPrefix + "captions-layer " + r.options.classPrefix + "layer", e.captions.innerHTML = '<div class="' + r.options.classPrefix + "captions-position " + r.options.classPrefix + 'captions-position-hover"' + s + '><span class="' + r.options.classPrefix + 'captions-text"></span></div>', e.captions.style.display = "none", n.insertBefore(e.captions, n.firstChild), e.captionsText = e.captions.querySelector("." + r.options.classPrefix + "captions-text"), e.captionsButton = i.default.createElement("div"), e.captionsButton.className = r.options.classPrefix + "button " + r.options.classPrefix + "captions-button", e.captionsButton.innerHTML = '<button type="button" aria-controls="' + r.id + '" title="' + l + '" aria-label="' + l + '" tabindex="0"></button><div class="' + r.options.classPrefix + "captions-selector " + r.options.classPrefix + 'offscreen"><ul class="' + r.options.classPrefix + 'captions-selector-list"><li class="' + r.options.classPrefix + 'captions-selector-list-item"><input type="radio" class="' + r.options.classPrefix + 'captions-selector-input" name="' + e.id + '_captions" id="' + e.id + '_captions_none" value="none" checked disabled><label class="' + r.options.classPrefix + "captions-selector-label " + r.options.classPrefix + 'captions-selected" for="' + e.id + '_captions_none">' + a.default.t("mejs.none") + "</label></li></ul></div>", r.addControlElement(e.captionsButton, "tracks"), e.captionsButton.querySelector("." + r.options.classPrefix + "captions-selector-input").disabled = !1, e.chaptersButton = i.default.createElement("div"), e.chaptersButton.className = r.options.classPrefix + "button " + r.options.classPrefix + "chapters-button", e.chaptersButton.innerHTML = '<button type="button" aria-controls="' + r.id + '" title="' + c + '" aria-label="' + c + '" tabindex="0"></button><div class="' + r.options.classPrefix + "chapters-selector " + r.options.classPrefix + 'offscreen"><ul class="' + r.options.classPrefix + 'chapters-selector-list"></ul></div>';
                    for (var m = 0, h = 0; h < f; h++) {
                        var v = e.tracks[h].kind;
                        "subtitles" === v || "captions" === v ? m++ : "chapters" !== v || t.querySelector("." + r.options.classPrefix + "chapter-selector") || e.captionsButton.parentNode.insertBefore(e.chaptersButton, e.captionsButton)
                    }
                    e.trackToLoad = -1, e.selectedTrack = null, e.isLoadingTrack = !1;
                    for (var y = 0; y < f; y++) {
                        var g = e.tracks[y].kind;
                        "subtitles" !== g && "captions" !== g || e.addTrackButton(e.tracks[y].trackId, e.tracks[y].srclang, e.tracks[y].label)
                    }
                    e.loadNextTrack();
                    var b = ["mouseenter", "focusin"],
                        E = ["mouseleave", "focusout"];
                    if (r.options.toggleCaptionsButtonWhenOnlyOne && 1 === m) e.captionsButton.addEventListener("click", function() {
                        var t = "none";
                        null === e.selectedTrack && (t = e.tracks[0].trackId), e.setTrack(t)
                    });
                    else {
                        for (var S = e.captionsButton.querySelectorAll("." + r.options.classPrefix + "captions-selector-label"), x = e.captionsButton.querySelectorAll("input[type=radio]"), w = 0, P = b.length; w < P; w++) e.captionsButton.addEventListener(b[w], function() {
                            (0, u.removeClass)(this.querySelector("." + r.options.classPrefix + "captions-selector"), r.options.classPrefix + "offscreen")
                        });
                        for (var T = 0, C = E.length; T < C; T++) e.captionsButton.addEventListener(E[T], function() {
                            (0, u.addClass)(this.querySelector("." + r.options.classPrefix + "captions-selector"), r.options.classPrefix + "offscreen")
                        });
                        for (var k = 0, _ = x.length; k < _; k++) x[k].addEventListener("click", function() {
                            e.setTrack(this.value)
                        });
                        for (var N = 0, A = S.length; N < A; N++) S[N].addEventListener("click", function() {
                            var e = (0, u.siblings)(this, function(e) {
                                    return "INPUT" === e.tagName
                                })[0],
                                t = (0, d.createEvent)("click", e);
                            e.dispatchEvent(t)
                        });
                        e.captionsButton.addEventListener("keydown", function(e) {
                            e.stopPropagation()
                        })
                    }
                    for (var L = 0, F = b.length; L < F; L++) e.chaptersButton.addEventListener(b[L], function() {
                        this.querySelector("." + r.options.classPrefix + "chapters-selector-list").childNodes.length && (0, u.removeClass)(this.querySelector("." + r.options.classPrefix + "chapters-selector"), r.options.classPrefix + "offscreen")
                    });
                    for (var j = 0, I = E.length; j < I; j++) e.chaptersButton.addEventListener(E[j], function() {
                        (0, u.addClass)(this.querySelector("." + r.options.classPrefix + "chapters-selector"), r.options.classPrefix + "offscreen")
                    });
                    e.chaptersButton.addEventListener("keydown", function(e) {
                        e.stopPropagation()
                    }), e.options.alwaysShowControls ? (0, u.addClass)(e.container.querySelector("." + r.options.classPrefix + "captions-position"), r.options.classPrefix + "captions-position-hover") : (e.container.addEventListener("controlsshown", function() {
                        (0, u.addClass)(e.container.querySelector("." + r.options.classPrefix + "captions-position"), r.options.classPrefix + "captions-position-hover")
                    }), e.container.addEventListener("controlshidden", function() {
                        o.paused || (0, u.removeClass)(e.container.querySelector("." + r.options.classPrefix + "captions-position"), r.options.classPrefix + "captions-position-hover")
                    })), o.addEventListener("timeupdate", function() {
                        e.displayCaptions()
                    }), "" !== e.options.slidesSelector && (e.slidesContainer = i.default.querySelectorAll(e.options.slidesSelector), o.addEventListener("timeupdate", function() {
                        e.displaySlides()
                    }))
                }
            },
            cleartracks: function(e) {
                e && (e.captions && e.captions.remove(), e.chapters && e.chapters.remove(), e.captionsText && e.captionsText.remove(), e.captionsButton && e.captionsButton.remove(), e.chaptersButton && e.chaptersButton.remove())
            },
            rebuildtracks: function() {
                var e = this;
                e.findTracks(), e.buildtracks(e, e.controls, e.layers, e.media)
            },
            findTracks: function() {
                var e = this,
                    t = null === e.trackFiles ? e.node.querySelectorAll("track") : e.trackFiles,
                    n = t.length;
                e.tracks = [];
                for (var i = 0; i < n; i++) {
                    var o = t[i],
                        a = o.getAttribute("srclang").toLowerCase() || "",
                        r = e.id + "_track_" + i + "_" + o.getAttribute("kind") + "_" + a;
                    e.tracks.push({
                        trackId: r,
                        srclang: a,
                        src: o.getAttribute("src"),
                        kind: o.getAttribute("kind"),
                        label: o.getAttribute("label") || "",
                        entries: [],
                        isLoaded: !1
                    })
                }
            },
            setTrack: function(e) {
                for (var t = this, n = t.captionsButton.querySelectorAll('input[type="radio"]'), i = t.captionsButton.querySelectorAll("." + t.options.classPrefix + "captions-selected"), o = t.captionsButton.querySelector('input[value="' + e + '"]'), a = 0, r = n.length; a < r; a++) n[a].checked = !1;
                for (var s = 0, l = i.length; s < l; s++)(0, u.removeClass)(i[s], t.options.classPrefix + "captions-selected");
                o.checked = !0;
                for (var c = (0, u.siblings)(o, function(e) {
                        return (0, u.hasClass)(e, t.options.classPrefix + "captions-selector-label")
                    }), f = 0, p = c.length; f < p; f++)(0, u.addClass)(c[f], t.options.classPrefix + "captions-selected");
                if ("none" === e) t.selectedTrack = null, (0, u.removeClass)(t.captionsButton, t.options.classPrefix + "captions-enabled");
                else
                    for (var m = 0, h = t.tracks.length; m < h; m++) {
                        var v = t.tracks[m];
                        if (v.trackId === e) {
                            null === t.selectedTrack && (0, u.addClass)(t.captionsButton, t.options.classPrefix + "captions-enabled"), t.selectedTrack = v, t.captions.setAttribute("lang", t.selectedTrack.srclang), t.displayCaptions();
                            break
                        }
                    }
                var y = (0, d.createEvent)("captionschange", t.media);
                y.detail.caption = t.selectedTrack, t.media.dispatchEvent(y)
            },
            loadNextTrack: function() {
                var e = this;
                e.trackToLoad++, e.trackToLoad < e.tracks.length ? (e.isLoadingTrack = !0, e.loadTrack(e.trackToLoad)) : (e.isLoadingTrack = !1, e.checkForTracks())
            },
            loadTrack: function(e) {
                var t = this,
                    n = t.tracks[e];
                void 0 === n || void 0 === n.src && "" === n.src || (0, u.ajax)(n.src, "text", function(e) {
                    n.entries = "string" == typeof e && /<tt\s+xml/gi.exec(e) ? o.default.TrackFormatParser.dfxp.parse(e) : o.default.TrackFormatParser.webvtt.parse(e), n.isLoaded = !0, t.enableTrackButton(n), t.loadNextTrack(), "slides" === n.kind ? t.setupSlides(n) : "chapters" !== n.kind || t.hasChapters || (t.drawChapters(n), t.hasChapters = !0)
                }, function() {
                    t.removeTrackButton(n.trackId), t.loadNextTrack()
                })
            },
            enableTrackButton: function(e) {
                var t = this,
                    n = e.srclang,
                    r = i.default.getElementById("" + e.trackId);
                if (r) {
                    var s = e.label;
                    "" === s && (s = a.default.t(o.default.language.codes[n]) || n), r.disabled = !1;
                    for (var l = (0, u.siblings)(r, function(e) {
                            return (0, u.hasClass)(e, t.options.classPrefix + "captions-selector-label")
                        }), c = 0, f = l.length; c < f; c++) l[c].innerHTML = s;
                    if (t.options.startLanguage === n) {
                        r.checked = !0;
                        var p = (0, d.createEvent)("click", r);
                        r.dispatchEvent(p)
                    }
                }
            },
            removeTrackButton: function(e) {
                var t = i.default.getElementById("" + e);
                if (t) {
                    var n = t.closest("li");
                    n && n.remove()
                }
            },
            addTrackButton: function(e, t, n) {
                var i = this;
                "" === n && (n = a.default.t(o.default.language.codes[t]) || t), i.captionsButton.querySelector("ul").innerHTML += '<li class="' + i.options.classPrefix + 'captions-selector-list-item"><input type="radio" class="' + i.options.classPrefix + 'captions-selector-input" name="' + i.id + '_captions" id="' + e + '" value="' + e + '" disabled><label class="' + i.options.classPrefix + 'captions-selector-label"for="' + e + '">' + n + " (loading)</label></li>"
            },
            checkForTracks: function() {
                var e = this,
                    t = !1;
                if (e.options.hideCaptionsButtonWhenEmpty) {
                    for (var n = 0, i = e.tracks.length; n < i; n++) {
                        var o = e.tracks[n].kind;
                        if (("subtitles" === o || "captions" === o) && e.tracks[n].isLoaded) {
                            t = !0;
                            break
                        }
                    }
                    e.captionsButton.style.display = t ? "" : "none", e.setControlsSize()
                }
            },
            displayCaptions: function() {
                if (void 0 !== this.tracks) {
                    var e = this,
                        t = e.selectedTrack;
                    if (null !== t && t.isLoaded) {
                        var n = e.searchTrackPosition(t.entries, e.media.currentTime);
                        if (n > -1) return e.captionsText.innerHTML = function(e) {
                            var t = i.default.createElement("div");
                            t.innerHTML = e;
                            for (var n = t.getElementsByTagName("script"), o = n.length; o--;) n[o].remove();
                            for (var a = t.getElementsByTagName("*"), r = 0, s = a.length; r < s; r++)
                                for (var l = a[r].attributes, d = Array.prototype.slice.call(l), u = 0, c = d.length; u < c; u++) d[u].name.startsWith("on") || d[u].value.startsWith("javascript") ? a[r].remove() : "style" === d[u].name && a[r].removeAttribute(d[u].name);
                            return t.innerHTML
                        }(t.entries[n].text), e.captionsText.className = e.options.classPrefix + "captions-text " + (t.entries[n].identifier || ""), e.captions.style.display = "", void(e.captions.style.height = "0px");
                        e.captions.style.display = "none"
                    } else e.captions.style.display = "none"
                }
            },
            setupSlides: function(e) {
                this.slides = e, this.slides.entries.imgs = [this.slides.entries.length], this.showSlide(0)
            },
            showSlide: function(e) {
                var t = this,
                    n = this;
                if (void 0 !== n.tracks && void 0 !== n.slidesContainer) {
                    var o = n.slides.entries[e].text,
                        a = n.slides.entries[e].imgs;
                    if (void 0 === a || void 0 === a.fadeIn) {
                        var r = i.default.createElement("img");
                        r.src = o, r.addEventListener("load", function() {
                            var e = t,
                                i = (0, u.siblings)(e, function(e) {
                                    return i(e)
                                });
                            e.style.display = "none", n.slidesContainer.innerHTML += e.innerHTML, (0, u.fadeIn)(n.slidesContainer.querySelector(r));
                            for (var o = 0, a = i.length; o < a; o++)(0, u.fadeOut)(i[o], 400)
                        }), n.slides.entries[e].imgs = a = r
                    } else if (!(0, u.visible)(a)) {
                        var s = (0, u.siblings)(self, function(e) {
                            return s(e)
                        });
                        (0, u.fadeIn)(n.slidesContainer.querySelector(a));
                        for (var l = 0, d = s.length; l < d; l++)(0, u.fadeOut)(s[l])
                    }
                }
            },
            displaySlides: function() {
                if (void 0 !== this.slides) {
                    var e = this.slides,
                        t = this.searchTrackPosition(e.entries, this.media.currentTime);
                    t > -1 && this.showSlide(t)
                }
            },
            drawChapters: function(e) {
                var t = this,
                    n = e.entries.length;
                if (n) {
                    t.chaptersButton.querySelector("ul").innerHTML = "";
                    for (var i = 0; i < n; i++) t.chaptersButton.querySelector("ul").innerHTML += '<li class="' + t.options.classPrefix + 'chapters-selector-list-item" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false"><input type="radio" class="' + t.options.classPrefix + 'captions-selector-input" name="' + t.id + '_chapters" id="' + t.id + "_chapters_" + i + '" value="' + e.entries[i].start + '" disabled><label class="' + t.options.classPrefix + 'chapters-selector-label"for="' + t.id + "_chapters_" + i + '">' + e.entries[i].text + "</label></li>";
                    for (var o = t.chaptersButton.querySelectorAll('input[type="radio"]'), a = t.chaptersButton.querySelectorAll("." + t.options.classPrefix + "chapters-selector-label"), r = 0, s = o.length; r < s; r++) o[r].disabled = !1, o[r].checked = !1, o[r].addEventListener("click", function() {
                        var e = t.chaptersButton.querySelectorAll("li"),
                            n = (0, u.siblings)(this, function(e) {
                                return (0, u.hasClass)(e, t.options.classPrefix + "chapters-selector-label")
                            })[0];
                        this.checked = !0, this.parentNode.setAttribute("aria-checked", !0), (0, u.addClass)(n, t.options.classPrefix + "chapters-selected"), (0, u.removeClass)(t.chaptersButton.querySelector("." + t.options.classPrefix + "chapters-selected"), t.options.classPrefix + "chapters-selected");
                        for (var i = 0, o = e.length; i < o; i++) e[i].setAttribute("aria-checked", !1);
                        t.media.setCurrentTime(parseFloat(this.value)), t.media.paused && t.media.play()
                    });
                    for (var l = 0, c = a.length; l < c; l++) a[l].addEventListener("click", function() {
                        var e = (0, u.siblings)(this, function(e) {
                                return "INPUT" === e.tagName
                            })[0],
                            t = (0, d.createEvent)("click", e);
                        e.dispatchEvent(t)
                    })
                }
            },
            searchTrackPosition: function(e, t) {
                for (var n = 0, i = e.length - 1, o = void 0, a = void 0, r = void 0; n <= i;) {
                    if (a = e[o = n + i >> 1].start, r = e[o].stop, t >= a && t < r) return o;
                    a < t ? n = o + 1 : a > t && (i = o - 1)
                }
                return -1
            }
        }), o.default.language = {
            codes: {
                af: "mejs.afrikaans",
                sq: "mejs.albanian",
                ar: "mejs.arabic",
                be: "mejs.belarusian",
                bg: "mejs.bulgarian",
                ca: "mejs.catalan",
                zh: "mejs.chinese",
                "zh-cn": "mejs.chinese-simplified",
                "zh-tw": "mejs.chines-traditional",
                hr: "mejs.croatian",
                cs: "mejs.czech",
                da: "mejs.danish",
                nl: "mejs.dutch",
                en: "mejs.english",
                et: "mejs.estonian",
                fl: "mejs.filipino",
                fi: "mejs.finnish",
                fr: "mejs.french",
                gl: "mejs.galician",
                de: "mejs.german",
                el: "mejs.greek",
                ht: "mejs.haitian-creole",
                iw: "mejs.hebrew",
                hi: "mejs.hindi",
                hu: "mejs.hungarian",
                is: "mejs.icelandic",
                id: "mejs.indonesian",
                ga: "mejs.irish",
                it: "mejs.italian",
                ja: "mejs.japanese",
                ko: "mejs.korean",
                lv: "mejs.latvian",
                lt: "mejs.lithuanian",
                mk: "mejs.macedonian",
                ms: "mejs.malay",
                mt: "mejs.maltese",
                no: "mejs.norwegian",
                fa: "mejs.persian",
                pl: "mejs.polish",
                pt: "mejs.portuguese",
                ro: "mejs.romanian",
                ru: "mejs.russian",
                sr: "mejs.serbian",
                sk: "mejs.slovak",
                sl: "mejs.slovenian",
                es: "mejs.spanish",
                sw: "mejs.swahili",
                sv: "mejs.swedish",
                tl: "mejs.tagalog",
                th: "mejs.thai",
                tr: "mejs.turkish",
                uk: "mejs.ukrainian",
                vi: "mejs.vietnamese",
                cy: "mejs.welsh",
                yi: "mejs.yiddish"
            }
        }, o.default.TrackFormatParser = {
            webvtt: {
                pattern: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
                parse: function(e) {
                    for (var t = e.split(/\r?\n/), n = [], i = void 0, o = void 0, a = void 0, r = 0, s = t.length; r < s; r++) {
                        if ((i = this.pattern.exec(t[r])) && r < t.length) {
                            for (r - 1 >= 0 && "" !== t[r - 1] && (a = t[r - 1]), o = t[++r], r++;
                                "" !== t[r] && r < t.length;) o = o + "\n" + t[r], r++;
                            o = o.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), n.push({
                                identifier: a,
                                start: 0 === (0, l.convertSMPTEtoSeconds)(i[1]) ? .2 : (0, l.convertSMPTEtoSeconds)(i[1]),
                                stop: (0, l.convertSMPTEtoSeconds)(i[3]),
                                text: o,
                                settings: i[5]
                            })
                        }
                        a = ""
                    }
                    return n
                }
            },
            dfxp: {
                parse: function(e) {
                    var t = (e = $(e).filter("tt")).firstChild,
                        n = t.querySelectorAll("p"),
                        i = e.getElementById("" + t.attr("style")),
                        o = [],
                        a = void 0;
                    if (i.length) {
                        i.removeAttribute("id");
                        var r = i.attributes;
                        if (r.length) {
                            a = {};
                            for (var s = 0, d = r.length; s < d; s++) a[r[s].name.split(":")[1]] = r[s].value
                        }
                    }
                    for (var u = 0, c = n.length; u < c; u++) {
                        var f = void 0,
                            p = {
                                start: null,
                                stop: null,
                                style: null,
                                text: null
                            };
                        if (n.eq(u).attr("begin") && (p.start = (0, l.convertSMPTEtoSeconds)(n.eq(u).attr("begin"))), !p.start && n.eq(u - 1).attr("end") && (p.start = (0, l.convertSMPTEtoSeconds)(n.eq(u - 1).attr("end"))), n.eq(u).attr("end") && (p.stop = (0, l.convertSMPTEtoSeconds)(n.eq(u).attr("end"))), !p.stop && n.eq(u + 1).attr("begin") && (p.stop = (0, l.convertSMPTEtoSeconds)(n.eq(u + 1).attr("begin"))), a) {
                            f = "";
                            for (var m in a) f += m + ":" + a[m] + ";"
                        }
                        f && (p.style = f), 0 === p.start && (p.start = .2), p.text = n.eq(u).innerHTML.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), o.push(p)
                    }
                    return o
                }
            }
        }
    }, {
        16: 16,
        2: 2,
        24: 24,
        25: 25,
        28: 28,
        4: 4,
        6: 6
    }],
    13: [function(e, t, n) {
        "use strict";
        var i = u(e(2)),
            o = e(16),
            a = u(o),
            r = u(e(4)),
            s = e(23),
            l = e(25),
            d = e(24);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.assign(o.config, {
            muteText: null,
            unmuteText: null,
            allyVolumeControlText: null,
            hideVolumeOnTouchDevices: !0,
            audioVolume: "horizontal",
            videoVolume: "vertical"
        }), Object.assign(a.default.prototype, {
            buildvolume: function(e, t, n, o) {
                if (!s.IS_ANDROID && !s.IS_IOS || !this.options.hideVolumeOnTouchDevices) {
                    var a = this,
                        u = a.isVideo ? a.options.videoVolume : a.options.audioVolume,
                        c = (0, l.isString)(a.options.muteText) ? a.options.muteText : r.default.t("mejs.mute"),
                        f = (0, l.isString)(a.options.unmuteText) ? a.options.unmuteText : r.default.t("mejs.unmute"),
                        p = (0, l.isString)(a.options.allyVolumeControlText) ? a.options.allyVolumeControlText : r.default.t("mejs.volume-help-text"),
                        m = i.default.createElement("div");
                    if (m.className = a.options.classPrefix + "button " + a.options.classPrefix + "volume-button " + a.options.classPrefix + "mute", m.innerHTML = "horizontal" === u ? '<button type="button" aria-controls="' + a.id + '" title="' + c + '" aria-label="' + c + '" tabindex="0"></button>' : '<button type="button" aria-controls="' + a.id + '" title="' + c + '" aria-label="' + c + '" tabindex="0"></button><a href="javascript:void(0);" class="' + a.options.classPrefix + 'volume-slider" aria-label="' + r.default.t("mejs.volume-slider") + '" aria-valuemin="0" aria-valuemax="100" role="slider" aria-orientation="vertical"><span class="' + a.options.classPrefix + 'offscreen">' + p + '</span><div class="' + a.options.classPrefix + 'volume-total"><div class="' + a.options.classPrefix + 'volume-current"></div><div class="' + a.options.classPrefix + 'volume-handle"></div></div></a>', a.addControlElement(m, "volume"), "horizontal" === u) {
                        var h = i.default.createElement("a");
                        h.className = a.options.classPrefix + "horizontal-volume-slider", h.href = "javascript:void(0);", h.setAttribute("aria-label", r.default.t("mejs.volume-slider")), h.setAttribute("aria-valuemin", 0), h.setAttribute("aria-valuemax", 100), h.setAttribute("role", "slider"), h.innerHTML += '<span class="' + a.options.classPrefix + 'offscreen">' + p + '</span><div class="' + a.options.classPrefix + 'horizontal-volume-total"><div class="' + a.options.classPrefix + 'horizontal-volume-current"></div><div class="' + a.options.classPrefix + 'horizontal-volume-handle"></div></div>', m.parentNode.insertBefore(h, m.nextSibling)
                    }
                    var v = !1,
                        y = !1,
                        g = "vertical" === u ? a.container.querySelector("." + a.options.classPrefix + "volume-slider") : a.container.querySelector("." + a.options.classPrefix + "horizontal-volume-slider"),
                        b = "vertical" === u ? a.container.querySelector("." + a.options.classPrefix + "volume-total") : a.container.querySelector("." + a.options.classPrefix + "horizontal-volume-total"),
                        E = "vertical" === u ? a.container.querySelector("." + a.options.classPrefix + "volume-current") : a.container.querySelector("." + a.options.classPrefix + "horizontal-volume-current"),
                        S = "vertical" === u ? a.container.querySelector("." + a.options.classPrefix + "volume-handle") : a.container.querySelector("." + a.options.classPrefix + "horizontal-volume-handle"),
                        x = function(e) {
                            if (e = Math.max(0, e), 0 === (e = Math.min(e, 1))) {
                                (0, d.removeClass)(m, a.options.classPrefix + "mute"), (0, d.addClass)(m, a.options.classPrefix + "unmute");
                                var t = m.firstElementChild;
                                t.setAttribute("title", f), t.setAttribute("aria-label", f)
                            } else {
                                (0, d.removeClass)(m, a.options.classPrefix + "unmute"), (0, d.addClass)(m, a.options.classPrefix + "mute");
                                var n = m.firstElementChild;
                                n.setAttribute("title", c), n.setAttribute("aria-label", c)
                            }
                            var i = 100 * e + "%",
                                o = getComputedStyle(S);
                            "vertical" === u ? (E.style.bottom = 0, E.style.height = i, S.style.bottom = i, S.style.marginBottom = -parseFloat(o.height) / 2 + "px") : (E.style.left = 0, E.style.width = i, S.style.left = i, S.style.marginLeft = -parseFloat(o.width) / 2 + "px")
                        },
                        w = function(e) {
                            var t = (0, d.offset)(b),
                                n = getComputedStyle(b),
                                i = null;
                            if ("vertical" === u) {
                                var a = parseFloat(n.height);
                                if (i = (a - (e.pageY - t.top)) / a, 0 === t.top || 0 === t.left) return
                            } else {
                                var r = parseFloat(n.width);
                                i = (e.pageX - t.left) / r
                            }
                            i = Math.max(0, i), i = Math.min(i, 1), x(i), 0 === i ? o.setMuted(!0) : o.setMuted(!1), o.setVolume(i), e.preventDefault(), e.stopPropagation()
                        };
                    m.addEventListener("mouseenter", function(e) {
                        e.target === m && (g.style.display = "block", y = !0, e.preventDefault(), e.stopPropagation())
                    }), m.addEventListener("focusin", function() {
                        g.style.display = "block", y = !0
                    }), m.addEventListener("focusout", function(e) {
                        e.relatedTarget.matches("." + a.options.classPrefix + "volume-slider") || "vertical" !== u || (g.style.display = "none")
                    }), m.addEventListener("mouseleave", function() {
                        y = !1, v || "vertical" !== u || (g.style.display = "none")
                    }), m.addEventListener("focusout", function() {
                        y = !1
                    }), m.addEventListener("keydown", function(e) {
                        if (a.options.keyActions.length) {
                            var t = e.which || e.keyCode || 0,
                                n = o.volume;
                            switch (t) {
                                case 38:
                                    n = Math.min(n + .1, 1);
                                    break;
                                case 40:
                                    n = Math.max(0, n - .1);
                                    break;
                                default:
                                    return !0
                            }
                            v = !1, x(n), o.setVolume(n), e.preventDefault(), e.stopPropagation()
                        }
                    }), m.querySelector("button").addEventListener("click", function() {
                        o.setMuted(!o.muted);
                        var e = (0, l.createEvent)("volumechange", o);
                        o.dispatchEvent(e)
                    }), g.addEventListener("dragstart", function() {
                        return !1
                    }), g.addEventListener("mouseover", function() {
                        y = !0
                    }), g.addEventListener("focusin", function() {
                        g.style.display = "block", y = !0
                    }), g.addEventListener("focusout", function() {
                        y = !1, v || "vertical" !== u || (g.style.display = "none")
                    }), g.addEventListener("mousedown", function(e) {
                        w(e), a.globalBind("mousemove.vol", function(e) {
                            var t = e.target;
                            v && (t === g || t.closest("vertical" === u ? "." + a.options.classPrefix + "volume-slider" : "." + a.options.classPrefix + "horizontal-volume-slider")) && w(e)
                        }), a.globalBind("mouseup.vol", function() {
                            v = !1, a.globalUnbind("mousemove.vol mouseup.vol"), y || "vertical" !== u || (g.style.display = "none")
                        }), v = !0, e.preventDefault(), e.stopPropagation()
                    }), o.addEventListener("volumechange", function(e) {
                        var t;
                        v || (o.muted ? (x(0), (0, d.removeClass)(m, a.options.classPrefix + "mute"), (0, d.addClass)(m, a.options.classPrefix + "unmute")) : (x(o.volume), (0, d.removeClass)(m, a.options.classPrefix + "unmute"), (0, d.addClass)(m, a.options.classPrefix + "mute"))), t = Math.floor(100 * o.volume), g.setAttribute("aria-valuenow", t), g.setAttribute("aria-valuetext", t + "%")
                    }), 0 === e.options.startVolume && o.setMuted(!0), o.setVolume(e.options.startVolume), a.container.addEventListener("controlsresize", function() {
                        o.muted ? (x(0), (0, d.removeClass)(m, a.options.classPrefix + "mute"), (0, d.addClass)(m, a.options.classPrefix + "unmute")) : (x(o.volume), (0, d.removeClass)(m, a.options.classPrefix + "unmute"), (0, d.addClass)(m, a.options.classPrefix + "mute"))
                    })
                }
            }
        })
    }, {
        16: 16,
        2: 2,
        23: 23,
        24: 24,
        25: 25,
        4: 4
    }],
    14: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.EN = {
            "mejs.plural-form": 1,
            "mejs.download-file": "Download File",
            "mejs.install-flash": "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/",
            "mejs.fullscreen": "Fullscreen",
            "mejs.play": "Play",
            "mejs.pause": "Pause",
            "mejs.time-slider": "Time Slider",
            "mejs.time-help-text": "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
            "mejs.live-broadcast": "Live Broadcast",
            "mejs.volume-help-text": "Use Up/Down Arrow keys to increase or decrease volume.",
            "mejs.unmute": "Unmute",
            "mejs.mute": "Mute",
            "mejs.volume-slider": "Volume Slider",
            "mejs.video-player": "Video Player",
            "mejs.audio-player": "Audio Player",
            "mejs.captions-subtitles": "Captions/Subtitles",
            "mejs.captions-chapters": "Chapters",
            "mejs.none": "None",
            "mejs.afrikaans": "Afrikaans",
            "mejs.albanian": "Albanian",
            "mejs.arabic": "Arabic",
            "mejs.belarusian": "Belarusian",
            "mejs.bulgarian": "Bulgarian",
            "mejs.catalan": "Catalan",
            "mejs.chinese": "Chinese",
            "mejs.chinese-simplified": "Chinese (Simplified)",
            "mejs.chinese-traditional": "Chinese (Traditional)",
            "mejs.croatian": "Croatian",
            "mejs.czech": "Czech",
            "mejs.danish": "Danish",
            "mejs.dutch": "Dutch",
            "mejs.english": "English",
            "mejs.estonian": "Estonian",
            "mejs.filipino": "Filipino",
            "mejs.finnish": "Finnish",
            "mejs.french": "French",
            "mejs.galician": "Galician",
            "mejs.german": "German",
            "mejs.greek": "Greek",
            "mejs.haitian-creole": "Haitian Creole",
            "mejs.hebrew": "Hebrew",
            "mejs.hindi": "Hindi",
            "mejs.hungarian": "Hungarian",
            "mejs.icelandic": "Icelandic",
            "mejs.indonesian": "Indonesian",
            "mejs.irish": "Irish",
            "mejs.italian": "Italian",
            "mejs.japanese": "Japanese",
            "mejs.korean": "Korean",
            "mejs.latvian": "Latvian",
            "mejs.lithuanian": "Lithuanian",
            "mejs.macedonian": "Macedonian",
            "mejs.malay": "Malay",
            "mejs.maltese": "Maltese",
            "mejs.norwegian": "Norwegian",
            "mejs.persian": "Persian",
            "mejs.polish": "Polish",
            "mejs.portuguese": "Portuguese",
            "mejs.romanian": "Romanian",
            "mejs.russian": "Russian",
            "mejs.serbian": "Serbian",
            "mejs.slovak": "Slovak",
            "mejs.slovenian": "Slovenian",
            "mejs.spanish": "Spanish",
            "mejs.swahili": "Swahili",
            "mejs.swedish": "Swedish",
            "mejs.tagalog": "Tagalog",
            "mejs.thai": "Thai",
            "mejs.turkish": "Turkish",
            "mejs.ukrainian": "Ukrainian",
            "mejs.vietnamese": "Vietnamese",
            "mejs.welsh": "Welsh",
            "mejs.yiddish": "Yiddish"
        }
    }, {}],
    15: [function(e, t, n) {
        "use strict";
        var i = a(e(3)),
            o = a(e(6));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        "undefined" != typeof jQuery ? o.default.$ = i.default.jQuery = i.default.$ = jQuery : "undefined" != typeof Zepto ? o.default.$ = i.default.Zepto = i.default.$ = Zepto : "undefined" != typeof ender && (o.default.$ = i.default.ender = i.default.$ = ender)
    }, {
        3: 3,
        6: 6
    }],
    16: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.config = void 0;
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            a = h(e(3)),
            r = h(e(2)),
            s = h(e(6)),
            l = h(e(5)),
            d = h(e(4)),
            u = e(23),
            c = e(25),
            f = e(28),
            p = e(26),
            m = function(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }
            }(e(24));

        function h(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        s.default.mepIndex = 0, s.default.players = {};
        var v = n.config = {
            poster: "",
            showPosterWhenEnded: !1,
            showPosterWhenPaused: !1,
            defaultVideoWidth: 480,
            defaultVideoHeight: 270,
            videoWidth: -1,
            videoHeight: -1,
            defaultAudioWidth: 400,
            defaultAudioHeight: 40,
            defaultSeekBackwardInterval: function(e) {
                return .05 * e.duration
            },
            defaultSeekForwardInterval: function(e) {
                return .05 * e.duration
            },
            setDimensions: !0,
            audioWidth: -1,
            audioHeight: -1,
            startVolume: .8,
            loop: !1,
            autoRewind: !0,
            enableAutosize: !0,
            timeFormat: "",
            alwaysShowHours: !1,
            showTimecodeFrameCount: !1,
            framesPerSecond: 25,
            alwaysShowControls: !1,
            hideVideoControlsOnLoad: !1,
            hideVideoControlsOnPause: !1,
            clickToPlayPause: !0,
            controlsTimeoutDefault: 1500,
            controlsTimeoutMouseEnter: 2500,
            controlsTimeoutMouseLeave: 1e3,
            iPadUseNativeControls: !1,
            iPhoneUseNativeControls: !1,
            AndroidUseNativeControls: !1,
            features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
            isVideo: !0,
            stretching: "auto",
            classPrefix: "mejs__",
            enableKeyboard: !0,
            pauseOtherPlayers: !0,
            secondsDecimalLength: 0,
            keyActions: [{
                keys: [32, 179],
                action: function(e, t) {
                    u.IS_FIREFOX || (t.paused || t.ended ? t.play() : t.pause())
                }
            }, {
                keys: [38],
                action: function(e, t) {
                    (e.container.querySelector("." + v.classPrefix + "volume-button>button").matches(":focus") || e.container.querySelector("." + v.classPrefix + "volume-slider").matches(":focus")) && (e.container.querySelector("." + v.classPrefix + "volume-slider").style.display = ""), e.isVideo && (e.showControls(), e.startControlsTimer());
                    var n = Math.min(t.volume + .1, 1);
                    t.setVolume(n), n > 0 && t.setMuted(!1)
                }
            }, {
                keys: [40],
                action: function(e, t) {
                    (e.container.querySelector("." + v.classPrefix + "volume-button>button").matches(":focus") || e.container.querySelector("." + v.classPrefix + "volume-slider").matches(":focus")) && (e.container.querySelector("." + v.classPrefix + "volume-slider").style.display = ""), e.isVideo && (e.showControls(), e.startControlsTimer());
                    var n = Math.max(t.volume - .1, 0);
                    t.setVolume(n), n <= .1 && t.setMuted(!0)
                }
            }, {
                keys: [37, 227],
                action: function(e, t) {
                    if (!isNaN(t.duration) && t.duration > 0) {
                        e.isVideo && (e.showControls(), e.startControlsTimer());
                        var n = Math.max(t.currentTime - e.options.defaultSeekBackwardInterval(t), 0);
                        t.setCurrentTime(n)
                    }
                }
            }, {
                keys: [39, 228],
                action: function(e, t) {
                    if (!isNaN(t.duration) && t.duration > 0) {
                        e.isVideo && (e.showControls(), e.startControlsTimer());
                        var n = Math.min(t.currentTime + e.options.defaultSeekForwardInterval(t), t.duration);
                        t.setCurrentTime(n)
                    }
                }
            }, {
                keys: [70],
                action: function(e, t, n, i) {
                    i.ctrlKey || void 0 !== e.enterFullScreen && (e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen())
                }
            }, {
                keys: [77],
                action: function(e) {
                    e.container.querySelector("." + v.classPrefix + "volume-slider").style.display = "", e.isVideo && (e.showControls(), e.startControlsTimer()), e.media.muted ? e.setMuted(!1) : e.setMuted(!0)
                }
            }]
        };
        s.default.MepDefaults = v;
        var y, g = function() {
            function e(t, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var i = this,
                    o = "string" == typeof t ? r.default.getElementById(t) : t;
                if (i.hasFocus = !1, i.controlsAreVisible = !0, i.controlsEnabled = !0, i.controlsTimer = null, !(i instanceof e)) return new e(o, n);
                if (i.node = i.media = o, i.node) {
                    if (void 0 !== i.media.player) return i.media.player;
                    if (void 0 === n) {
                        var a = i.node.getAttribute("data-mejsoptions");
                        n = a ? JSON.parse(a) : {}
                    }
                    i.options = Object.assign({}, v, n), i.options.timeFormat || (i.options.timeFormat = "mm:ss", i.options.alwaysShowHours && (i.options.timeFormat = "hh:mm:ss"), i.options.showTimecodeFrameCount && (i.options.timeFormat += ":ff")), (0, f.calculateTimeFormat)(0, i.options, i.options.framesPerSecond || 25), i.id = "mep_" + s.default.mepIndex++, s.default.players[i.id] = i;
                    var h = Object.assign({}, i.options, {
                            success: function(e, t) {
                                i._meReady(e, t)
                            },
                            error: function(e) {
                                i._handleError(e)
                            }
                        }),
                        y = i.node.tagName.toLowerCase();
                    if (i.isDynamic = "audio" !== y && "video" !== y, i.isVideo = i.isDynamic ? i.options.isVideo : "audio" !== y && i.options.isVideo, i.mediaFiles = null, i.trackFiles = null, u.IS_IPAD && i.options.iPadUseNativeControls || u.IS_IPHONE && i.options.iPhoneUseNativeControls) i.node.setAttribute("controls", !0), u.IS_IPAD && i.node.getAttribute("autoplay") && i.play();
                    else if (!(i.isVideo || !i.isVideo && i.options.features.length) || u.IS_ANDROID && i.options.AndroidUseNativeControls) i.isVideo || i.options.features.length || (i.node.style.display = "none");
                    else {
                        i.node.removeAttribute("controls");
                        var g = i.isVideo ? d.default.t("mejs.video-player") : d.default.t("mejs.audio-player"),
                            b = r.default.createElement("span");
                        if (b.className = i.options.classPrefix + "offscreen", b.innerText = g, i.media.parentNode.insertBefore(b, i.media), i.container = r.default.createElement("div"), i.container.id = i.id, i.container.className = i.options.classPrefix + "container " + i.options.classPrefix + "container-keyboard-inactive " + i.media.className, i.container.tabIndex = 0, i.container.setAttribute("role", "application"), i.container.setAttribute("aria-label", g), i.container.innerHTML = '<div class="' + i.options.classPrefix + 'inner"><div class="' + i.options.classPrefix + 'mediaelement"></div><div class="' + i.options.classPrefix + 'layers"></div><div class="' + i.options.classPrefix + 'controls"></div><div class="' + i.options.classPrefix + 'clear"></div></div>', i.container.addEventListener("focus", function(e) {
                                if (!i.controlsAreVisible && !i.hasFocus && i.controlsEnabled) {
                                    i.showControls(!0);
                                    var t = (0, c.isNodeAfter)(e.relatedTarget, i.container) ? "." + i.options.classPrefix + "controls ." + i.options.classPrefix + "button:last-child > button" : "." + i.options.classPrefix + "playpause-button > button";
                                    i.container.querySelector(t).focus()
                                }
                            }), i.node.parentNode.insertBefore(i.container, i.node), i.options.features.length || (i.container.style.background = "transparent", i.container.querySelector("." + i.options.classPrefix + "controls").style.display = "none"), i.isVideo && "fill" === i.options.stretching && !m.hasClass(i.container.parentNode, i.options.classPrefix + "fill-container")) {
                            i.outerContainer = i.media.parentNode;
                            var E = r.default.createElement("div");
                            E.className = i.options.classPrefix + "fill-container", i.container.parentNode.insertBefore(E, i.container), E.appendChild(i.container)
                        }
                        if (u.IS_ANDROID && m.addClass(i.container, i.options.classPrefix + "android"), u.IS_IOS && m.addClass(i.container, i.options.classPrefix + "ios"), u.IS_IPAD && m.addClass(i.container, i.options.classPrefix + "ipad"), u.IS_IPHONE && m.addClass(i.container, i.options.classPrefix + "iphone"), m.addClass(i.container, i.isVideo ? i.options.classPrefix + "video" : i.options.classPrefix + "audio"), u.IS_SAFARI && !u.IS_IOS) {
                            m.addClass(i.container, i.options.classPrefix + "hide-cues");
                            for (var S = i.node.cloneNode(), x = i.node.childNodes, w = [], P = [], T = 0, C = x.length; T < C; T++) {
                                var k = x[T];
                                k && k.nodeType !== Node.TEXT_NODE && function() {
                                    switch (k.tagName.toLowerCase()) {
                                        case "source":
                                            var e = {};
                                            Array.prototype.slice.call(k.attributes).forEach(function(t) {
                                                e[t.name] = t.value
                                            }), e.type = (0, p.formatType)(e.src, e.type), w.push(e);
                                            break;
                                        case "track":
                                            k.mode = "hidden", P.push(k);
                                            break;
                                        default:
                                            S.appendChild(k)
                                    }
                                }()
                            }
                            i.node.remove(), i.node = i.media = S, w.length && (i.mediaFiles = w), P.length && (i.trackFiles = P)
                        }
                        i.container.querySelector("." + i.options.classPrefix + "mediaelement").appendChild(i.node), i.media.player = i, i.controls = i.container.querySelector("." + i.options.classPrefix + "controls"), i.layers = i.container.querySelector("." + i.options.classPrefix + "layers");
                        var _ = i.isVideo ? "video" : "audio",
                            N = _.substring(0, 1).toUpperCase() + _.substring(1);
                        i.options[_ + "Width"] > 0 || i.options[_ + "Width"].toString().indexOf("%") > -1 ? i.width = i.options[_ + "Width"] : "" !== i.node.style.width && null !== i.node.style.width ? i.width = i.node.style.width : i.node.getAttribute("width") ? i.width = i.node.getAttribute("width") : i.width = i.options["default" + N + "Width"], i.options[_ + "Height"] > 0 || i.options[_ + "Height"].toString().indexOf("%") > -1 ? i.height = i.options[_ + "Height"] : "" !== i.node.style.height && null !== i.node.style.height ? i.height = i.node.style.height : i.node.getAttribute("height") ? i.height = i.node.getAttribute("height") : i.height = i.options["default" + N + "Height"], i.initialAspectRatio = i.height >= i.width ? i.width / i.height : i.height / i.width, i.setPlayerSize(i.width, i.height), h.pluginWidth = i.width, h.pluginHeight = i.height
                    }
                    if (new l.default(i.media, h, i.mediaFiles), void 0 !== i.container && i.options.features.length && i.controlsAreVisible && !i.options.hideVideoControlsOnLoad) {
                        var A = (0, c.createEvent)("controlsshown", i.container);
                        i.container.dispatchEvent(A)
                    }
                    return i
                }
            }
            return o(e, [{
                key: "showControls",
                value: function(e) {
                    var t = this;
                    if (e = void 0 === e || e, !t.controlsAreVisible && t.isVideo) {
                        if (e) ! function() {
                            m.removeClass(t.controls, t.options.classPrefix + "offscreen"), m.fadeIn(t.controls, 200, function() {
                                var e = (0, c.createEvent)("controlsshown", t.container);
                                t.container.dispatchEvent(e)
                            });
                            for (var e = t.container.querySelectorAll("." + t.options.classPrefix + "control"), n = function(n, i) {
                                    m.fadeIn(e[n], 200, function() {
                                        m.removeClass(e[n], t.options.classPrefix + "offscreen")
                                    })
                                }, i = 0, o = e.length; i < o; i++) n(i)
                        }();
                        else {
                            m.removeClass(t.controls, t.options.classPrefix + "offscreen"), t.controls.style.display = "", t.controls.style.opacity = 1;
                            for (var n = t.container.querySelectorAll("." + t.options.classPrefix + "control"), i = 0, o = n.length; i < o; i++) m.removeClass(n[i], t.options.classPrefix + "offscreen"), n[i].style.display = "";
                            var a = (0, c.createEvent)("controlsshown", t.container);
                            t.container.dispatchEvent(a)
                        }
                        t.controlsAreVisible = !0, t.setControlsSize()
                    }
                }
            }, {
                key: "hideControls",
                value: function(e, t) {
                    var n = this;
                    if (e = void 0 === e || e, !0 === t || !(!n.controlsAreVisible || n.options.alwaysShowControls || n.keyboardAction || n.media.paused && 4 === n.media.readyState && (!n.options.hideVideoControlsOnLoad && n.media.currentTime <= 0 || !n.options.hideVideoControlsOnPause && n.media.currentTime > 0) || n.isVideo && !n.options.hideVideoControlsOnLoad && !n.media.readyState || n.media.ended)) {
                        if (e) ! function() {
                            m.fadeOut(n.controls, 200, function() {
                                m.addClass(n.controls, n.options.classPrefix + "offscreen"), n.controls.style.display = "";
                                var e = (0, c.createEvent)("controlshidden", n.container);
                                n.container.dispatchEvent(e)
                            });
                            for (var e = n.container.querySelectorAll("." + n.options.classPrefix + "control"), t = function(t, i) {
                                    m.fadeOut(e[t], 200, function() {
                                        m.addClass(e[t], n.options.classPrefix + "offscreen"), e[t].style.display = ""
                                    })
                                }, i = 0, o = e.length; i < o; i++) t(i)
                        }();
                        else {
                            m.addClass(n.controls, n.options.classPrefix + "offscreen"), n.controls.style.display = "", n.controls.style.opacity = 0;
                            for (var i = n.container.querySelectorAll("." + n.options.classPrefix + "control"), o = 0, a = i.length; o < a; o++) m.addClass(i[o], n.options.classPrefix + "offscreen"), i[o].style.display = "";
                            var r = (0, c.createEvent)("controlshidden", n.container);
                            n.container.dispatchEvent(r)
                        }
                        n.controlsAreVisible = !1
                    }
                }
            }, {
                key: "startControlsTimer",
                value: function(e) {
                    var t = this;
                    e = void 0 !== e ? e : t.options.controlsTimeoutDefault, t.killControlsTimer("start"), t.controlsTimer = setTimeout(function() {
                        t.hideControls(), t.killControlsTimer("hide")
                    }, e)
                }
            }, {
                key: "killControlsTimer",
                value: function() {
                    null !== this.controlsTimer && (clearTimeout(this.controlsTimer), delete this.controlsTimer, this.controlsTimer = null)
                }
            }, {
                key: "disableControls",
                value: function() {
                    this.killControlsTimer(), this.controlsEnabled = !0, this.hideControls(!1, !0)
                }
            }, {
                key: "enableControls",
                value: function() {
                    this.controlsEnabled = !0, this.showControls(!1)
                }
            }, {
                key: "_meReady",
                value: function(e, t) {
                    var n = this,
                        i = t.getAttribute("autoplay"),
                        o = !(void 0 === i || null === i || "false" === i),
                        l = null !== e.rendererName && /(native|html5)/i.test(n.media.rendererName);
                    if (n.controls && n.enableControls(), n.container && n.container.querySelector("." + n.options.classPrefix + "overlay-play") && (n.container.querySelector("." + n.options.classPrefix + "overlay-play").style.display = ""), !n.created) {
                        if (n.created = !0, n.media = e, n.domNode = t, !(u.IS_ANDROID && n.options.AndroidUseNativeControls || u.IS_IPAD && n.options.iPadUseNativeControls || u.IS_IPHONE && n.options.iPhoneUseNativeControls)) {
                            if (!n.isVideo && !n.options.features.length) return o && l && n.play(), void(n.options.success && ("string" == typeof n.options.success ? a.default[n.options.success](n.media, n.domNode, n) : n.options.success(n.media, n.domNode, n)));
                            n.buildposter(n, n.controls, n.layers, n.media), n.buildkeyboard(n, n.controls, n.layers, n.media), n.buildoverlays(n, n.controls, n.layers, n.media), n.findTracks(), n.featurePosition = {};
                            for (var d = 0, p = n.options.features.length; d < p; d++) {
                                var h = n.options.features[d];
                                if (n["build" + h]) try {
                                    n["build" + h](n, n.controls, n.layers, n.media)
                                } catch (e) {
                                    console.error("error building " + h, e)
                                }
                            }
                            var v = (0, c.createEvent)("controlsready", n.container);
                            n.container.dispatchEvent(v), n.setPlayerSize(n.width, n.height), n.setControlsSize(), n.isVideo && (n.clickToPlayPauseCallback = function() {
                                if (n.options.clickToPlayPause) {
                                    var e = n.container.querySelector("." + n.options.classPrefix + "overlay-button"),
                                        t = e.getAttribute("aria-pressed");
                                    n.media.paused && t ? n.pause() : n.media.paused ? n.play() : n.pause(), e.setAttribute("aria-pressed", !t)
                                }
                            }, n.createIframeLayer(), n.media.addEventListener("click", n.clickToPlayPauseCallback), !u.IS_ANDROID && !u.IS_IOS || n.options.alwaysShowControls ? (n.container.addEventListener("mouseenter", function() {
                                n.controlsEnabled && (n.options.alwaysShowControls || (n.killControlsTimer("enter"), n.showControls(), n.startControlsTimer(n.options.controlsTimeoutMouseEnter)))
                            }), n.container.addEventListener("mousemove", function() {
                                n.controlsEnabled && (n.controlsAreVisible || n.showControls(), n.options.alwaysShowControls || n.startControlsTimer(n.options.controlsTimeoutMouseEnter))
                            }), n.container.addEventListener("mouseleave", function() {
                                n.controlsEnabled && (n.media.paused || n.options.alwaysShowControls || n.startControlsTimer(n.options.controlsTimeoutMouseLeave))
                            })) : n.node.addEventListener("touchstart", function() {
                                n.controlsAreVisible ? n.hideControls(!1) : n.controlsEnabled && n.showControls(!1)
                            }), n.options.hideVideoControlsOnLoad && n.hideControls(!1), o && !n.options.alwaysShowControls && n.hideControls(), n.options.enableAutosize && n.media.addEventListener("loadedmetadata", function(e) {
                                n.options.videoHeight <= 0 && !n.domNode.getAttribute("height") && null !== e.target && !isNaN(e.target.videoHeight) && (n.setPlayerSize(e.target.videoWidth, e.target.videoHeight), n.setControlsSize(), n.media.setSize(e.target.videoWidth, e.target.videoHeight))
                            })), n.media.addEventListener("play", function() {
                                n.hasFocus = !0;
                                for (var e in s.default.players)
                                    if (s.default.players.hasOwnProperty(e)) {
                                        var t = s.default.players[e];
                                        t.id === n.id || !n.options.pauseOtherPlayers || t.paused || t.ended || (t.pause(), t.hasFocus = !1)
                                    }
                            }), n.media.addEventListener("ended", function() {
                                if (n.options.autoRewind) try {
                                    n.media.setCurrentTime(0), setTimeout(function() {
                                        var e = n.container.querySelector("." + n.options.classPrefix + "overlay-loading");
                                        e && e.parentNode && (e.parentNode.style.display = "none")
                                    }, 20)
                                } catch (e) {}
                                "function" == typeof n.media.stop ? n.media.stop() : n.media.pause(), n.setProgressRail && n.setProgressRail(), n.setCurrentRail && n.setCurrentRail(), n.options.loop ? n.play() : !n.options.alwaysShowControls && n.controlsEnabled && n.showControls()
                            }), n.media.addEventListener("loadedmetadata", function() {
                                (0, f.calculateTimeFormat)(n.duration, n.options, n.options.framesPerSecond || 25), n.updateDuration && n.updateDuration(), n.updateCurrent && n.updateCurrent(), n.isFullScreen || (n.setPlayerSize(n.width, n.height), n.setControlsSize())
                            });
                            var y = null;
                            n.media.addEventListener("timeupdate", function() {
                                y !== n.media.duration && (y = n.media.duration, (0, f.calculateTimeFormat)(y, n.options, n.options.framesPerSecond || 25), n.updateDuration && n.updateDuration(), n.updateCurrent && n.updateCurrent(), n.setControlsSize())
                            }), n.container.addEventListener("click", function(e) {
                                m.addClass(e.currentTarget, n.options.classPrefix + "container-keyboard-inactive")
                            }), n.container.addEventListener("focusin", function(e) {
                                m.removeClass(e.currentTarget, n.options.classPrefix + "container-keyboard-inactive"), n.controlsEnabled && !n.options.alwaysShowControls && n.showControls(!1)
                            }), n.container.addEventListener("focusout", function(e) {
                                setTimeout(function() {
                                    e.relatedTarget && n.keyboardAction && !e.relatedTarget.closest("." + n.options.classPrefix + "container") && (n.keyboardAction = !1, n.isVideo && !n.options.alwaysShowControls && n.hideControls(!0))
                                }, 0)
                            }), setTimeout(function() {
                                n.setPlayerSize(n.width, n.height), n.setControlsSize()
                            }, 0), n.globalBind("resize", function() {
                                n.isFullScreen || u.HAS_TRUE_NATIVE_FULLSCREEN && r.default.webkitIsFullScreen || n.setPlayerSize(n.width, n.height), n.setControlsSize()
                            })
                        }
                        o && l && n.play(), n.options.success && ("string" == typeof n.options.success ? a.default[n.options.success](n.media, n.domNode, n) : n.options.success(n.media, n.domNode, n))
                    }
                }
            }, {
                key: "_handleError",
                value: function(e) {
                    var t = this;
                    t.controls && t.disableControls();
                    var n = t.layers.querySelector("." + t.options.classPrefix + "overlay-play");
                    n && (n.style.display = "none"), t.options.error && t.options.error(e)
                }
            }, {
                key: "setPlayerSize",
                value: function(e, t) {
                    var n = this;
                    if (!n.options.setDimensions) return !1;
                    switch (void 0 !== e && (n.width = e), void 0 !== t && (n.height = t), n.options.stretching) {
                        case "fill":
                            n.isVideo ? n.setFillMode() : n.setDimensions(n.width, n.height);
                            break;
                        case "responsive":
                            n.setResponsiveMode();
                            break;
                        case "none":
                            n.setDimensions(n.width, n.height);
                            break;
                        default:
                            !0 === n.hasFluidMode() ? n.setResponsiveMode() : n.setDimensions(n.width, n.height)
                    }
                }
            }, {
                key: "hasFluidMode",
                value: function() {
                    var e = this;
                    return -1 !== e.height.toString().indexOf("%") || e.node && e.node.style.maxWidth && "none" !== e.node.style.maxWidth && e.node.style.maxWidth !== e.width || e.node && e.node.currentStyle && "100%" === e.node.currentStyle.maxWidth
                }
            }, {
                key: "setResponsiveMode",
                value: function() {
                    var e, t = this,
                        n = function() {
                            for (var e = void 0, n = t.container; n;) {
                                try {
                                    if (u.IS_FIREFOX && "html" === n.tagName.toLowerCase() && a.default.self !== a.default.top && null !== a.default.frameElement) return a.default.frameElement;
                                    e = n.parentElement
                                } catch (t) {
                                    e = n.parentElement
                                }
                                if (e && m.visible(e)) return e;
                                n = e
                            }
                            return null
                        }(),
                        i = n ? getComputedStyle(n, null) : getComputedStyle(r.default.body, null),
                        o = t.isVideo ? t.media.videoWidth && t.media.videoWidth > 0 ? t.media.videoWidth : t.node.getAttribute("width") ? t.node.getAttribute("width") : t.options.defaultVideoWidth : t.options.defaultAudioWidth,
                        s = t.isVideo ? t.media.videoHeight && t.media.videoHeight > 0 ? t.media.videoHeight : t.node.getAttribute("height") ? t.node.getAttribute("height") : t.options.defaultVideoHeight : t.options.defaultAudioHeight,
                        l = (e = 1, t.isVideo ? (e = t.media.videoWidth && t.media.videoWidth > 0 && t.media.videoHeight && t.media.videoHeight > 0 ? t.height >= t.width ? t.media.videoWidth / t.media.videoHeight : t.media.videoHeight / t.media.videoWidth : t.initialAspectRatio, (isNaN(e) || e < .01 || e > 100) && (e = 1), e) : e),
                        d = parseFloat(i.height),
                        c = void 0,
                        f = parseFloat(i.width);
                    if (c = t.isVideo ? "100%" === t.height ? parseFloat(f * s / o, 10) : t.height >= t.width ? parseFloat(f / l, 10) : parseFloat(f * l, 10) : s, isNaN(c) && (c = d), t.container.parentNode.length > 0 && "body" === t.container.parentNode.tagName.toLowerCase() && (f = a.default.innerWidth || r.default.documentElement.clientWidth || r.default.body.clientWidth, c = a.default.innerHeight || r.default.documentElement.clientHeight || r.default.body.clientHeight), c && f) {
                        t.container.style.width = f + "px", t.container.style.height = c + "px", t.node.style.width = "100%", t.node.style.height = "100%", t.isVideo && t.media.setSize && t.media.setSize(f, c);
                        for (var p = t.layers.childNodes, h = 0, v = p.length; h < v; h++) p[h].style.width = "100%", p[h].style.height = "100%"
                    }
                }
            }, {
                key: "setFillMode",
                value: function() {
                    var e = this,
                        t = void 0,
                        n = !1;
                    try {
                        a.default.self !== a.default.top ? (n = !0, t = a.default.frameElement) : t = e.outerContainer
                    } catch (n) {
                        t = e.outerContainer
                    }
                    var i = getComputedStyle(t);
                    "none" !== e.node.style.height && e.node.style.height !== e.height && (e.node.style.height = "auto"), "none" !== e.node.style.maxWidth && e.node.style.maxWidth !== e.width && (e.node.style.maxWidth = "none"), "none" !== e.node.style.maxHeight && e.node.style.maxHeight !== e.height && (e.node.style.maxHeight = "none"), e.node.currentStyle && ("100%" === e.node.currentStyle.height && (e.node.currentStyle.height = "auto"), "100%" === e.node.currentStyle.maxWidth && (e.node.currentStyle.maxWidth = "none"), "100%" === e.node.currentStyle.maxHeight && (e.node.currentStyle.maxHeight = "none")), n || parseFloat(i.width) || (t.style.width = e.media.offsetWidth + "px"), n || parseFloat(i.height) || (t.style.height = e.media.offsetHeight + "px"), i = getComputedStyle(t);
                    var o = parseFloat(i.width),
                        r = parseFloat(i.height);
                    e.setDimensions("100%", "100%");
                    var s = e.container.querySelector(e.options.classPrefix + "poster img");
                    s && (s.style.display = "");
                    for (var l = e.container.querySelectorAll("object, embed, iframe, video"), d = e.height, u = e.width, c = o, f = d * o / u, p = u * r / d, m = r, h = p > o == !1, v = h ? Math.floor(c) : Math.floor(p), y = h ? Math.floor(f) : Math.floor(m), g = h ? o + "px" : v + "px", b = h ? y + "px" : r + "px", E = 0, S = l.length; E < S; E++) l[E].style.height = b, l[E].style.width = g, e.media.setSize && e.media.setSize(g, b), l[E].style.marginLeft = Math.floor((o - v) / 2) + "px", l[E].style.marginTop = 0
                }
            }, {
                key: "setDimensions",
                value: function(e, t) {
                    e = (0, c.isString)(e) && e.indexOf("%") > -1 ? e : parseFloat(e) + "px", t = (0, c.isString)(t) && t.indexOf("%") > -1 ? t : parseFloat(t) + "px", this.container.style.width = e, this.container.style.height = t;
                    for (var n = this.layers.childNodes, i = 0, o = n.length; i < o; i++) n[i].style.width = e, n[i].style.height = t
                }
            }, {
                key: "setControlsSize",
                value: function() {
                    var e = this;
                    if (m.visible(e.container) && e.rail && m.visible(e.rail)) {
                        for (var t = getComputedStyle(e.rail), n = getComputedStyle(e.total), i = parseFloat(t.marginLeft) + parseFloat(t.marginRight), o = parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, a = 0, r = m.siblings(e.rail, function(t) {
                                return t !== e.rail
                            }), s = r.length, l = 0; l < s; l++) a += r[l].offsetWidth;
                        a += o + (0 === o ? 2 * i : i) + 1;
                        var d = parseFloat(e.controls.offsetWidth);
                        e.rail.style.width = (a > d ? 0 : d - a) + "px";
                        var u = (0, c.createEvent)("controlsresize", e.container);
                        e.container.dispatchEvent(u)
                    }
                }
            }, {
                key: "addControlElement",
                value: function(e, t) {
                    var n = this;
                    if (void 0 !== n.featurePosition[t]) {
                        var i = n.controls.childNodes[n.featurePosition[t] - 1];
                        i.parentNode.insertBefore(e, i.nextSibling)
                    } else {
                        n.controls.appendChild(e);
                        for (var o = n.controls.childNodes, a = 0, r = o.length; a < r; a++)
                            if (e == o[a]) {
                                n.featurePosition[t] = a;
                                break
                            }
                    }
                }
            }, {
                key: "createIframeLayer",
                value: function() {
                    var e = this;
                    if (e.isVideo && null !== e.media.rendererName && e.media.rendererName.indexOf("iframe") > -1 && !r.default.getElementById(e.media.id + "-iframe-overlay")) {
                        var t = r.default.createElement("div"),
                            n = r.default.getElementById(e.media.id + "_" + e.media.rendererName);
                        t.id = e.media.id + "-iframe-overlay", t.className = e.options.classPrefix + "iframe-overlay", t.addEventListener("click", function(t) {
                            e.options.clickToPlayPause && (e.media.paused ? e.media.play() : e.media.pause(), t.preventDefault(), t.stopPropagation())
                        }), n.parentNode.insertBefore(t, n)
                    }
                }
            }, {
                key: "resetSize",
                value: function() {
                    var e = this;
                    setTimeout(function() {
                        e.setPlayerSize(e.width, e.height), e.setControlsSize()
                    }, 50)
                }
            }, {
                key: "setPoster",
                value: function(e) {
                    var t = this.container.querySelector("." + this.options.classPrefix + "poster"),
                        n = t.querySelector("img");
                    n || ((n = r.default.createElement("img")).className = this.options.classPrefix + "poster-img", n.width = "100%", n.height = "100%", t.appendChild(n)), n.setAttribute("src", e), t.style.backgroundImage = 'url("' + e + '")'
                }
            }, {
                key: "changeSkin",
                value: function(e) {
                    var t = this;
                    t.container.className = t.options.classPrefix + "container " + e, t.setPlayerSize(t.width, t.height), t.setControlsSize()
                }
            }, {
                key: "globalBind",
                value: function(e, t) {
                    var n = this.node ? this.node.ownerDocument : r.default;
                    if ((e = (0, c.splitEvents)(e, this.id)).d)
                        for (var i = e.d.split(" "), o = 0, s = i.length; o < s; o++) i[o].split(".").reduce(function(e, i) {
                            return n.addEventListener(i, t, !1), i
                        }, "");
                    if (e.w)
                        for (var l = e.w.split(" "), d = 0, u = l.length; d < u; d++) l[d].split(".").reduce(function(e, n) {
                            return a.default.addEventListener(n, t, !1), n
                        }, "")
                }
            }, {
                key: "globalUnbind",
                value: function(e, t) {
                    var n = this.node ? this.node.ownerDocument : r.default;
                    if ((e = (0, c.splitEvents)(e, this.id)).d)
                        for (var i = e.d.split(" "), o = 0, s = i.length; o < s; o++) i[o].split(".").reduce(function(e, i) {
                            return n.removeEventListener(i, t, !1), i
                        }, "");
                    if (e.w)
                        for (var l = e.d.split(" "), d = 0, u = l.length; d < u; d++) l[d].split(".").reduce(function(e, n) {
                            return a.default.removeEventListener(n, t, !1), n
                        }, "")
                }
            }, {
                key: "buildposter",
                value: function(e, t, n, i) {
                    var o = r.default.createElement("div");
                    o.className = this.options.classPrefix + "poster " + this.options.classPrefix + "layer", n.appendChild(o);
                    var a = e.media.getAttribute("poster");
                    "" !== e.options.poster && (a = e.options.poster), a ? this.setPoster(a) : o.style.display = "none", i.addEventListener("play", function() {
                        o.style.display = "none"
                    }), i.addEventListener("playing", function() {
                        o.style.display = "none"
                    }), e.options.showPosterWhenEnded && e.options.autoRewind && i.addEventListener("ended", function() {
                        o.style.display = ""
                    }), i.addEventListener("error", function() {
                        o.style.display = "none"
                    }), e.options.showPosterWhenPaused && i.addEventListener("pause", function() {
                        i.ended || (o.style.display = "")
                    })
                }
            }, {
                key: "buildoverlays",
                value: function(e, t, n, i) {
                    if (e.isVideo) {
                        var o = this,
                            a = r.default.createElement("div"),
                            s = r.default.createElement("div"),
                            l = r.default.createElement("div"),
                            f = t.querySelector("." + o.options.classPrefix + "time-buffering");
                        a.style.display = "none", a.className = o.options.classPrefix + "overlay " + o.options.classPrefix + "layer", a.innerHTML = '<div class="' + o.options.classPrefix + 'overlay-loading"><span class="' + o.options.classPrefix + 'overlay-loading-bg-img"></span></div>', n.appendChild(a), s.style.display = "none", s.className = o.options.classPrefix + "overlay " + o.options.classPrefix + "layer", s.innerHTML = '<div class="' + o.options.classPrefix + 'overlay-error"></div>', n.appendChild(s), l.className = o.options.classPrefix + "overlay " + o.options.classPrefix + "layer " + o.options.classPrefix + "overlay-play", l.innerHTML = '<div class="' + o.options.classPrefix + 'overlay-button" role="button" tabindex="0"aria-label="' + d.default.t("mejs.play") + '" aria-pressed="false"></div>', l.addEventListener("click", function() {
                            if (o.options.clickToPlayPause) {
                                var e = o.container.querySelector("." + o.options.classPrefix + "overlay-button"),
                                    t = e.getAttribute("aria-pressed");
                                i.paused ? i.play() : i.pause(), e.setAttribute("aria-pressed", !!t)
                            }
                        }), l.addEventListener("keydown", function(e) {
                            var t = e.keyCode || e.which || 0;
                            if (13 === t || u.IS_FIREFOX && 32 === t) {
                                var n = (0, c.createEvent)("click", l);
                                return l.dispatchEvent(n), !1
                            }
                        }), n.appendChild(l), null !== o.media.rendererName && (/(youtube|facebook)/i.test(o.media.rendererName) && !e.media.originalNode.getAttribute("poster") && !e.options.poster || u.IS_STOCK_ANDROID) && (l.style.display = "none"), i.addEventListener("play", function() {
                            l.style.display = "none", a.style.display = "none", f && (f.style.display = "none"), s.style.display = "none"
                        }), i.addEventListener("playing", function() {
                            l.style.display = "none", a.style.display = "none", f && (f.style.display = "none"), s.style.display = "none"
                        }), i.addEventListener("seeking", function() {
                            l.style.display = "none", a.style.display = "", f && (f.style.display = "")
                        }), i.addEventListener("seeked", function() {
                            l.style.display = i.paused && !u.IS_STOCK_ANDROID ? "" : "none", a.style.display = "none", f && (f.style.display = "")
                        }), i.addEventListener("pause", function() {
                            a.style.display = "none", u.IS_STOCK_ANDROID || (l.style.display = ""), f && (f.style.display = "none")
                        }), i.addEventListener("waiting", function() {
                            a.style.display = "", f && (f.style.display = "")
                        }), i.addEventListener("loadeddata", function() {
                            a.style.display = "", f && (f.style.display = ""), u.IS_ANDROID && (i.canplayTimeout = setTimeout(function() {
                                if (r.default.createEvent) {
                                    var e = r.default.createEvent("HTMLEvents");
                                    return e.initEvent("canplay", !0, !0), i.dispatchEvent(e)
                                }
                            }, 300))
                        }), i.addEventListener("canplay", function() {
                            a.style.display = "none", f && (f.style.display = "none"), clearTimeout(i.canplayTimeout)
                        }), i.addEventListener("error", function(e) {
                            o._handleError(e), a.style.display = "none", l.style.display = "none", f && (f.style.display = "none"), e.message && (s.style.display = "block", s.querySelector("." + o.options.classPrefix + "overlay-error").innerHTML = e.message)
                        }), i.addEventListener("keydown", function(t) {
                            o.onkeydown(e, i, t)
                        })
                    }
                }
            }, {
                key: "buildkeyboard",
                value: function(e, t, n, i) {
                    var o = this;
                    o.container.addEventListener("keydown", function() {
                        o.keyboardAction = !0
                    }), o.globalBind("keydown", function(t) {
                        var n = r.default.activeElement.closest("." + o.options.classPrefix + "container"),
                            a = o.media.closest("." + o.options.classPrefix + "container");
                        return o.hasFocus = !(!n || !a || n.id !== a.id), o.onkeydown(e, i, t)
                    }), o.globalBind("click", function(e) {
                        o.hasFocus = !!e.target.closest("." + o.options.classPrefix + "container")
                    })
                }
            }, {
                key: "onkeydown",
                value: function(e, t, n) {
                    if (e.hasFocus && e.options.enableKeyboard)
                        for (var i = 0, o = e.options.keyActions.length; i < o; i++)
                            for (var a = e.options.keyActions[i], r = 0, s = a.keys.length; r < s; r++) n.keyCode === a.keys[r] && (a.action(e, t, n.keyCode, n), n.preventDefault(), n.stopPropagation());
                    return !0
                }
            }, {
                key: "play",
                value: function() {
                    this.media.getCurrentTime() <= 0 && this.load(), this.media.play()
                }
            }, {
                key: "pause",
                value: function() {
                    try {
                        this.media.pause()
                    } catch (e) {}
                }
            }, {
                key: "load",
                value: function() {
                    this.isLoaded || this.media.load(), this.isLoaded = !0
                }
            }, {
                key: "setMuted",
                value: function(e) {
                    this.media.setMuted(e)
                }
            }, {
                key: "setCurrentTime",
                value: function(e) {
                    this.media.setCurrentTime(e)
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.media.currentTime
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this.media.setVolume(e)
                }
            }, {
                key: "getVolume",
                value: function() {
                    return this.media.volume
                }
            }, {
                key: "setSrc",
                value: function(e) {
                    var t = r.default.getElementById(this.media.id + "-iframe-overlay");
                    t && t.remove(), this.media.setSrc(e), this.createIframeLayer()
                }
            }, {
                key: "remove",
                value: function() {
                    var e = this,
                        t = e.media.rendererName;
                    e.media.paused || e.media.pause();
                    var n = e.media.getSrc();
                    e.media.setSrc("");
                    for (var o in e.options.features) {
                        var a = e.options.features[o];
                        if (e["clean" + a]) try {
                            e["clean" + a](e)
                        } catch (e) {
                            console.error("error cleaning " + a, e)
                        }
                    }
                    var l = e.node.getAttribute("width"),
                        d = e.node.getAttribute("height");
                    (l ? -1 === l.indexOf("%") && (l += "px") : l = "auto", d ? -1 === d.indexOf("%") && (d += "px") : d = "auto", e.node.style.width = l, e.node.style.height = d, e.isDynamic ? e.container.parentNode.insertBefore(e.node, e.container) : function() {
                        (e.node.setAttribute("controls", !0), e.node.setAttribute("id", e.node.getAttribute("id").replace("_" + t, "").replace("_from_mejs", "")), delete e.node.autoplay, "" !== e.media.canPlayType((0, p.getTypeFromFile)(n)) && e.node.setAttribute("src", n), ~t.indexOf("iframe")) && r.default.getElementById(e.media.id + "-iframe-overlay").remove();
                        var i = e.node.cloneNode();
                        if (i.style.display = "", e.container.parentNode.insertBefore(i, e.container), e.node.remove(), e.mediaFiles)
                            for (var o = 0, a = e.mediaFiles.length; o < a; o++) {
                                var s = r.default.createElement("source");
                                s.setAttribute("src", e.mediaFiles[o].src), s.setAttribute("type", e.mediaFiles[o].type), i.appendChild(s)
                            }
                        if (e.trackFiles)
                            for (var l = function(t, n) {
                                    var o = e.trackFiles[t],
                                        a = r.default.createElement("track");
                                    a.kind = o.kind, a.label = o.label, a.srclang = o.srclang, a.src = o.src, i.appendChild(a), a.addEventListener("load", function() {
                                        this.mode = "showing", i.textTracks[t].mode = "showing"
                                    })
                                }, d = 0, u = e.trackFiles.length; d < u; d++) l(d);
                        delete e.node, delete e.mediaFiles, delete e.trackFiles
                    }(), "function" == typeof e.media.destroy && e.media.destroy(), delete s.default.players[e.id], "object" === i(e.container)) && (e.container.parentNode.querySelector("." + e.options.classPrefix + "offscreen").remove(), e.container.remove());
                    e.globalUnbind(), delete e.media.player
                }
            }]), e
        }();
        a.default.MediaElementPlayer = g, n.default = g, void 0 !== (y = s.default.$) && (y.fn.mediaelementplayer = function(e) {
            return !1 === e ? this.each(function() {
                var e = y(this).data("mediaelementplayer");
                e && e.remove(), y(this).removeData("mediaelementplayer")
            }) : this.each(function() {
                y(this).data("mediaelementplayer", new g(this, e))
            }), this
        }, y(r.default).ready(function() {
            y("." + v.classPrefix + "player").mediaelementplayer()
        }))
    }, {
        2: 2,
        23: 23,
        24: 24,
        25: 25,
        26: 26,
        28: 28,
        3: 3,
        4: 4,
        5: 5,
        6: 6
    }],
    17: [function(e, t, n) {
        "use strict";
        var i = u(e(3)),
            o = u(e(6)),
            a = e(7),
            r = e(25),
            s = e(26),
            l = e(23),
            d = e(24);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = {
                promise: null,
                load: function(e) {
                    "undefined" != typeof dashjs ? c._createPlayer(e) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdn.dashjs.org/latest/dash.mediaplayer.min.js", c.promise = c.promise || (0, d.loadScript)(e.options.path), c.promise.then(function() {
                        c._createPlayer(e)
                    }))
                },
                _createPlayer: function(e) {
                    var t = dashjs.MediaPlayer().create();
                    i.default["__ready__" + e.id](t)
                }
            },
            f = {
                name: "native_dash",
                options: {
                    prefix: "native_dash",
                    dash: {
                        path: "https://cdn.dashjs.org/latest/dash.mediaplayer.min.js",
                        debug: !1
                    }
                },
                canPlayType: function(e) {
                    return l.HAS_MSE && ["application/dash+xml"].indexOf(e.toLowerCase()) > -1
                },
                create: function(e, t, n) {
                    var s = e.originalNode,
                        l = e.id + "_" + t.prefix,
                        d = s.getAttribute("preload"),
                        u = s.autoplay,
                        f = null,
                        p = null;
                    f = s.cloneNode(!0), t = Object.assign(t, e.options);
                    for (var m = o.default.html5media.properties, h = function(e) {
                            var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
                            f["get" + t] = function() {
                                return null !== p ? f[e] : null
                            }, f["set" + t] = function(t) {
                                -1 === o.default.html5media.readOnlyProperties.indexOf(e) && null !== p && ("src" === e && (p.attachSource(t), u && f.play()), f[e] = t)
                            }
                        }, v = 0, y = m.length; v < y; v++) h(m[v]);
                    if (i.default["__ready__" + l] = function(n) {
                            e.dashPlayer = p = n, p.getDebug().setLogToBrowserConsole(t.dash.debug), p.setAutoPlay(d && "auto" === d || u), p.setScheduleWhilePaused(d && "auto" === d || u);
                            for (var i, a = o.default.html5media.events.concat(["click", "mouseover", "mouseout"]), s = dashjs.MediaPlayer.events, l = 0, c = a.length; l < c; l++) "loadedmetadata" === (i = a[l]) && p.initialize(f, f.src, !1), f.addEventListener(i, function(t) {
                                var n = (0, r.createEvent)(t.type, e);
                                e.dispatchEvent(n)
                            });
                            var m = function(t) {
                                var n = (0, r.createEvent)(t.type, f);
                                n.data = t, e.dispatchEvent(n), "error" === t.type.toLowerCase() && console.error(t)
                            };
                            for (var h in s) s.hasOwnProperty(h) && p.on(s[h], m)
                        }, n && n.length > 0)
                        for (var g = 0, b = n.length; g < b; g++)
                            if (a.renderer.renderers[t.prefix].canPlayType(n[g].type)) {
                                f.setAttribute("src", n[g].src);
                                break
                            }
                    f.setAttribute("id", l), s.parentNode.insertBefore(f, s), s.autoplay = !1, s.style.display = "none", c.load({
                        options: t.dash,
                        id: l
                    }), f.setSize = function(e, t) {
                        return f.style.width = e + "px", f.style.height = t + "px", f
                    }, f.hide = function() {
                        return f.pause(), f.style.display = "none", f
                    }, f.show = function() {
                        return f.style.display = "", f
                    };
                    var E = (0, r.createEvent)("rendererready", f);
                    return e.dispatchEvent(E), f
                }
            };
        s.typeChecks.push(function(e) {
            return ~e.toLowerCase().indexOf(".mpd") ? "application/dash+xml" : null
        }), a.renderer.add(f)
    }, {
        23: 23,
        24: 24,
        25: 25,
        26: 26,
        3: 3,
        6: 6,
        7: 7
    }],
    18: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.PluginDetector = void 0;
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = f(e(3)),
            a = f(e(2)),
            r = f(e(6)),
            s = f(e(4)),
            l = e(7),
            d = e(25),
            u = e(23),
            c = e(26);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var p = n.PluginDetector = {
            plugins: [],
            hasPluginVersion: function(e, t) {
                var n = p.plugins[e];
                return t[1] = t[1] || 0, t[2] = t[2] || 0, n[0] > t[0] || n[0] === t[0] && n[1] > t[1] || n[0] === t[0] && n[1] === t[1] && n[2] >= t[2]
            },
            addPlugin: function(e, t, n, i, o) {
                p.plugins[e] = p.detectPlugin(t, n, i, o)
            },
            detectPlugin: function(e, t, n, a) {
                var r = [0, 0, 0],
                    s = void 0,
                    l = void 0;
                if (null !== u.NAV.plugins && void 0 !== u.NAV.plugins && "object" === i(u.NAV.plugins[e])) {
                    if ((s = u.NAV.plugins[e].description) && (void 0 === u.NAV.mimeTypes || !u.NAV.mimeTypes[t] || u.NAV.mimeTypes[t].enabledPlugin))
                        for (var d = 0, c = (r = s.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".")).length; d < c; d++) r[d] = parseInt(r[d].match(/\d+/), 10)
                } else if (void 0 !== o.default.ActiveXObject) try {
                    (l = new ActiveXObject(n)) && (r = a(l))
                } catch (e) {}
                return r
            }
        };
        p.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(e) {
            var t = [],
                n = e.GetVariable("$version");
            return n && (n = n.split(" ")[1].split(","), t = [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10)]), t
        });
        var m = {
            create: function(e, t, n) {
                var i = {};
                i.options = t, i.id = e.id + "_" + i.options.prefix, i.mediaElement = e, i.flashState = {}, i.flashApi = null, i.flashApiStack = [];
                for (var f = r.default.html5media.properties, p = function(e) {
                        i.flashState[e] = null;
                        var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
                        i["get" + t] = function() {
                            if (null !== i.flashApi) {
                                if (void 0 !== i.flashApi["get_" + e]) {
                                    var t = i.flashApi["get_" + e]();
                                    return "buffered" === e ? {
                                        start: function() {
                                            return 0
                                        },
                                        end: function() {
                                            return t
                                        },
                                        length: 1
                                    } : t
                                }
                                return null
                            }
                            return null
                        }, i["set" + t] = function(t) {
                            "src" === e && (t = (0, c.absolutizeUrl)(t)), null !== i.flashApi && void 0 !== i.flashApi["set_" + e] ? i.flashApi["set_" + e](t) : i.flashApiStack.push({
                                type: "set",
                                propName: e,
                                value: t
                            })
                        }
                    }, m = 0, h = f.length; m < h; m++) p(f[m]);
                var v = r.default.html5media.methods,
                    y = function(e) {
                        i[e] = function() {
                            if (null !== i.flashApi) {
                                if (i.flashApi["fire_" + e]) try {
                                    i.flashApi["fire_" + e]()
                                } catch (e) {}
                            } else i.flashApiStack.push({
                                type: "call",
                                methodName: e
                            })
                        }
                    };
                v.push("stop");
                for (var g = 0, b = v.length; g < b; g++) y(v[g]);
                for (var E = ["rendererready"], S = 0, x = E.length; S < x; S++) {
                    var w = (0, d.createEvent)(E[S], i);
                    e.dispatchEvent(w)
                }
                o.default["__ready__" + i.id] = function() {
                    if (i.flashReady = !0, i.flashApi = a.default.getElementById("__" + i.id), i.flashApiStack.length)
                        for (var e = 0, t = i.flashApiStack.length; e < t; e++) {
                            var n = i.flashApiStack[e];
                            if ("set" === n.type) {
                                var o = n.propName,
                                    r = "" + o.substring(0, 1).toUpperCase() + o.substring(1);
                                i["set" + r](n.value)
                            } else "call" === n.type && i[n.methodName]()
                        }
                }, o.default["__event__" + i.id] = function(e, t) {
                    var n = (0, d.createEvent)(e, i);
                    n.message = t || "", i.mediaElement.dispatchEvent(n)
                }, i.flashWrapper = a.default.createElement("div"), -1 === ["always", "sameDomain"].indexOf(i.options.shimScriptAccess) && (i.options.shimScriptAccess = "sameDomain");
                var P = e.originalNode.autoplay,
                    T = ["uid=" + i.id, "autoplay=" + P, "allowScriptAccess=" + i.options.shimScriptAccess],
                    C = null !== e.originalNode && "video" === e.originalNode.tagName.toLowerCase(),
                    k = C ? e.originalNode.height : 1,
                    _ = C ? e.originalNode.width : 1;
                e.originalNode.getAttribute("src") && T.push("src=" + e.originalNode.getAttribute("src")), !0 === i.options.enablePseudoStreaming && (T.push("pseudostreamstart=" + i.options.pseudoStreamingStartQueryParam), T.push("pseudostreamtype=" + i.options.pseudoStreamingType)), e.appendChild(i.flashWrapper), null !== e.originalNode && (e.originalNode.style.display = "none");
                var N = [];
                if (u.IS_IE) {
                    var A = a.default.createElement("div");
                    i.flashWrapper.appendChild(A), N = ['classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"', 'codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"', 'id="__' + i.id + '"', 'width="' + _ + '"', 'height="' + k + '"'], C || N.push('style="clip: rect(0 0 0 0); position: absolute;"'), A.outerHTML = "<object " + N.join(" ") + '><param name="movie" value="' + i.options.pluginPath + i.options.filename + "?x=" + new Date + '" /><param name="flashvars" value="' + T.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + i.options.shimScriptAccess + '" /><param name="allowFullScreen" value="true" /><div>' + s.default.t("mejs.install-flash") + "</div></object>"
                } else N = ['id="__' + i.id + '"', 'name="__' + i.id + '"', 'play="true"', 'loop="false"', 'quality="high"', 'bgcolor="#000000"', 'wmode="transparent"', 'allowScriptAccess="' + i.options.shimScriptAccess + '"', 'allowFullScreen="true"', 'type="application/x-shockwave-flash"', 'pluginspage="//www.macromedia.com/go/getflashplayer"', 'src="' + i.options.pluginPath + i.options.filename + '"', 'flashvars="' + T.join("&") + '"', 'width="' + _ + '"', 'height="' + k + '"'], C || N.push('style="clip: rect(0 0 0 0); position: absolute;"'), i.flashWrapper.innerHTML = "<embed " + N.join(" ") + ">";
                if (i.flashNode = i.flashWrapper.lastChild, i.hide = function() {
                        C && (i.flashNode.style.display = "none")
                    }, i.show = function() {
                        C && (i.flashNode.style.display = "")
                    }, i.setSize = function(e, t) {
                        i.flashNode.style.width = e + "px", i.flashNode.style.height = t + "px", null !== i.flashApi && "function" == typeof i.flashApi.fire_setSize && i.flashApi.fire_setSize(e, t)
                    }, i.destroy = function() {
                        i.flashNode.remove()
                    }, n && n.length > 0)
                    for (var L = 0, F = n.length; L < F; L++)
                        if (l.renderer.renderers[t.prefix].canPlayType(n[L].type)) {
                            i.setSrc(n[L].src);
                            break
                        }
                return i
            }
        };
        if (p.hasPluginVersion("flash", [10, 0, 0])) {
            c.typeChecks.push(function(e) {
                return (e = e.toLowerCase()).startsWith("rtmp") ? ~e.indexOf(".mp3") ? "audio/rtmp" : "video/rtmp" : /\.og(a|g)/i.test(e) ? "audio/ogg" : ~e.indexOf(".m3u8") ? "application/x-mpegURL" : ~e.indexOf(".mpd") ? "application/dash+xml" : ~e.indexOf(".flv") ? "video/flv" : null
            });
            var h = {
                name: "flash_video",
                options: {
                    prefix: "flash_video",
                    filename: "mediaelement-flash-video.swf",
                    enablePseudoStreaming: !1,
                    pseudoStreamingStartQueryParam: "start",
                    pseudoStreamingType: "byte"
                },
                canPlayType: function(e) {
                    return ~["video/mp4", "video/rtmp", "audio/rtmp", "rtmp/mp4", "audio/mp4", "video/flv", "video/x-flv"].indexOf(e.toLowerCase())
                },
                create: m.create
            };
            l.renderer.add(h);
            var v = {
                name: "flash_hls",
                options: {
                    prefix: "flash_hls",
                    filename: "mediaelement-flash-video-hls.swf"
                },
                canPlayType: function(e) {
                    return ~["application/x-mpegurl", "vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase())
                },
                create: m.create
            };
            l.renderer.add(v);
            var y = {
                name: "flash_dash",
                options: {
                    prefix: "flash_dash",
                    filename: "mediaelement-flash-video-mdash.swf"
                },
                canPlayType: function(e) {
                    return ~["application/dash+xml"].indexOf(e.toLowerCase())
                },
                create: m.create
            };
            l.renderer.add(y);
            var g = {
                name: "flash_audio",
                options: {
                    prefix: "flash_audio",
                    filename: "mediaelement-flash-audio.swf"
                },
                canPlayType: function(e) {
                    return ~["audio/mp3"].indexOf(e.toLowerCase())
                },
                create: m.create
            };
            l.renderer.add(g);
            var b = {
                name: "flash_audio_ogg",
                options: {
                    prefix: "flash_audio_ogg",
                    filename: "mediaelement-flash-audio-ogg.swf"
                },
                canPlayType: function(e) {
                    return ~["audio/ogg", "audio/oga", "audio/ogv"].indexOf(e.toLowerCase())
                },
                create: m.create
            };
            l.renderer.add(b)
        }
    }, {
        2: 2,
        23: 23,
        25: 25,
        26: 26,
        3: 3,
        4: 4,
        6: 6,
        7: 7
    }],
    19: [function(e, t, n) {
        "use strict";
        var i = u(e(3)),
            o = u(e(6)),
            a = e(7),
            r = e(25),
            s = e(23),
            l = e(26),
            d = e(24);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = {
                promise: null,
                load: function(e) {
                    "undefined" != typeof flvjs ? c._createPlayer(e) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.2.0/flv.min.js", c.promise = c.promise || (0, d.loadScript)(e.options.path), c.promise.then(function() {
                        c._createPlayer(e)
                    }))
                },
                _createPlayer: function(e) {
                    var t = flvjs.createPlayer(e.options);
                    i.default["__ready__" + e.id](t)
                }
            },
            f = {
                name: "native_flv",
                options: {
                    prefix: "native_flv",
                    flv: {
                        path: "https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.2.0/flv.min.js",
                        cors: !0
                    }
                },
                canPlayType: function(e) {
                    return s.HAS_MSE && ["video/x-flv", "video/flv"].indexOf(e.toLowerCase()) > -1
                },
                create: function(e, t, n) {
                    var s = e.originalNode,
                        l = e.id + "_" + t.prefix,
                        d = null,
                        u = null;
                    d = s.cloneNode(!0), t = Object.assign(t, e.options);
                    for (var f = o.default.html5media.properties, p = function(e) {
                            var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
                            d["get" + t] = function() {
                                return null !== u ? d[e] : null
                            }, d["set" + t] = function(t) {
                                -1 === o.default.html5media.readOnlyProperties.indexOf(e) && null !== u && (d[e] = t, "src" === e && (u.unload(), u.detachMediaElement(), u.attachMediaElement(d), u.load()))
                            }
                        }, m = 0, h = f.length; m < h; m++) p(f[m]);
                    if (i.default["__ready__" + l] = function(t) {
                            e.flvPlayer = u = t;
                            for (var n, i = o.default.html5media.events.concat(["click", "mouseover", "mouseout"]), a = 0, s = i.length; a < s; a++) "loadedmetadata" === (n = i[a]) && (u.unload(), u.detachMediaElement(), u.attachMediaElement(d), u.load()), d.addEventListener(n, function(t) {
                                var n = (0, r.createEvent)(t.type, e);
                                e.dispatchEvent(n)
                            })
                        }, n && n.length > 0)
                        for (var v = 0, y = n.length; v < y; v++)
                            if (a.renderer.renderers[t.prefix].canPlayType(n[v].type)) {
                                d.setAttribute("src", n[v].src);
                                break
                            }
                    d.setAttribute("id", l), s.parentNode.insertBefore(d, s), s.autoplay = !1, s.style.display = "none", t.flv.type = "flv", t.flv.url = d.getAttribute("src"), c.load({
                        options: t.flv,
                        id: l
                    }), d.setSize = function(e, t) {
                        return d.style.width = e + "px", d.style.height = t + "px", d
                    }, d.hide = function() {
                        return null !== u && u.pause(), d.style.display = "none", d
                    }, d.show = function() {
                        return d.style.display = "", d
                    }, d.destroy = function() {
                        null !== u && u.destroy()
                    };
                    var g = (0, r.createEvent)("rendererready", d);
                    return e.dispatchEvent(g), d
                }
            };
        l.typeChecks.push(function(e) {
            return ~e.toLowerCase().indexOf(".flv") ? "video/flv" : null
        }), a.renderer.add(f)
    }, {
        23: 23,
        24: 24,
        25: 25,
        26: 26,
        3: 3,
        6: 6,
        7: 7
    }],
    20: [function(e, t, n) {
        "use strict";
        var i = u(e(3)),
            o = u(e(6)),
            a = e(7),
            r = e(25),
            s = e(23),
            l = e(26),
            d = e(24);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = {
                promise: null,
                load: function(e) {
                    "undefined" != typeof Hls ? c._createPlayer(e) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdn.jsdelivr.net/hls.js/latest/hls.min.js", c.promise = c.promise || (0, d.loadScript)(e.options.path), c.promise.then(function() {
                        c._createPlayer(e)
                    }))
                },
                _createPlayer: function(e) {
                    var t = new Hls(e.options);
                    return i.default["__ready__" + e.id](t), t
                }
            },
            f = {
                name: "native_hls",
                options: {
                    prefix: "native_hls",
                    hls: {
                        path: "https://cdn.jsdelivr.net/hls.js/latest/hls.min.js",
                        autoStartLoad: !1,
                        debug: !1
                    }
                },
                canPlayType: function(e) {
                    return s.HAS_MSE && ["application/x-mpegurl", "vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase()) > -1
                },
                create: function(e, t, n) {
                    var s = e.originalNode,
                        l = e.id + "_" + t.prefix,
                        d = s.getAttribute("preload"),
                        u = s.autoplay,
                        f = null,
                        p = null;
                    p = s.cloneNode(!0), (t = Object.assign(t, e.options)).hls.autoStartLoad = d && "none" !== d || u;
                    for (var m = o.default.html5media.properties, h = function(e) {
                            var n = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
                            p["get" + n] = function() {
                                return null !== f ? p[e] : null
                            }, p["set" + n] = function(n) {
                                -1 === o.default.html5media.readOnlyProperties.indexOf(e) && null !== f && (p[e] = n, "src" === e && (f.destroy(), (f = c._createPlayer({
                                    options: t.hls,
                                    id: l
                                })).loadSource(n), f.attachMedia(p)))
                            }
                        }, v = 0, y = m.length; v < y; v++) h(m[v]);
                    if (i.default["__ready__" + l] = function(t) {
                            e.hlsPlayer = f = t;
                            for (var n = o.default.html5media.events.concat(["click", "mouseover", "mouseout"]), i = Hls.Events, a = function(t) {
                                    if ("loadedmetadata" === t) {
                                        var n = e.originalNode.src;
                                        f.detachMedia(), f.loadSource(n), f.attachMedia(p)
                                    }
                                    p.addEventListener(t, function(t) {
                                        var n = (0, r.createEvent)(t.type, e);
                                        e.dispatchEvent(n)
                                    })
                                }, s = 0, l = n.length; s < l; s++) a(n[s]);
                            var d = void 0,
                                u = void 0,
                                c = function(t, n) {
                                    var i = (0, r.createEvent)(t, p);
                                    if (i.data = n, e.dispatchEvent(i), "hlsError" === t && (console.warn(t, n), n.fatal)) switch (n.type) {
                                        case "mediaError":
                                            var o = (new Date).getTime();
                                            !d || o - d > 3e3 ? (d = (new Date).getTime(), f.recoverMediaError()) : !u || o - u > 3e3 ? (u = (new Date).getTime(), console.warn("Attempting to swap Audio Codec and recover from media error"), f.swapAudioCodec(), f.recoverMediaError()) : console.error("Cannot recover, last media error recovery failed");
                                            break;
                                        case "networkError":
                                            console.error("Network error");
                                            break;
                                        default:
                                            f.destroy()
                                    }
                                };
                            for (var m in i) i.hasOwnProperty(m) && f.on(i[m], c)
                        }, n && n.length > 0)
                        for (var g = 0, b = n.length; g < b; g++)
                            if (a.renderer.renderers[t.prefix].canPlayType(n[g].type)) {
                                p.setAttribute("src", n[g].src);
                                break
                            }
                    "auto" === d || u || (p.addEventListener("play", function() {
                        null !== f && f.startLoad()
                    }), p.addEventListener("pause", function() {
                        null !== f && f.stopLoad()
                    })), p.setAttribute("id", l), s.parentNode.insertBefore(p, s), s.autoplay = !1, s.style.display = "none", c.load({
                        options: t.hls,
                        id: l
                    }), p.setSize = function(e, t) {
                        return p.style.width = e + "px", p.style.height = t + "px", p
                    }, p.hide = function() {
                        return p.pause(), p.style.display = "none", p
                    }, p.show = function() {
                        return p.style.display = "", p
                    }, p.destroy = function() {
                        null !== f && f.destroy()
                    }, p.stop = function() {
                        null !== f && f.stopLoad()
                    };
                    var E = (0, r.createEvent)("rendererready", p);
                    return e.dispatchEvent(E), p
                }
            };
        l.typeChecks.push(function(e) {
            return ~e.toLowerCase().indexOf(".m3u8") ? "application/x-mpegURL" : null
        }), a.renderer.add(f)
    }, {
        23: 23,
        24: 24,
        25: 25,
        26: 26,
        3: 3,
        6: 6,
        7: 7
    }],
    21: [function(e, t, n) {
        "use strict";
        var i = d(e(3)),
            o = d(e(2)),
            a = d(e(6)),
            r = e(7),
            s = e(25),
            l = e(23);

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = {
            name: "html5",
            options: {
                prefix: "html5"
            },
            canPlayType: function(e) {
                var t = o.default.createElement("video");
                return l.IS_ANDROID && /\/mp(3|4)$/i.test(e) || ~["application/x-mpegurl", "vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase()) && l.SUPPORTS_NATIVE_HLS ? "yes" : t.canPlayType ? t.canPlayType(e.toLowerCase()).replace(/no/, "") : ""
            },
            create: function(e, t, n) {
                var i = e.id + "_" + t.prefix,
                    l = null;
                void 0 === e.originalNode || null === e.originalNode ? (l = o.default.createElement("audio"), e.appendChild(l)) : l = e.originalNode, l.setAttribute("id", i);
                for (var d = a.default.html5media.properties, u = function(e) {
                        var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
                        l["get" + t] = function() {
                            return l[e]
                        }, l["set" + t] = function(t) {
                            -1 === a.default.html5media.readOnlyProperties.indexOf(e) && (l[e] = t)
                        }
                    }, c = 0, f = d.length; c < f; c++) u(d[c]);
                for (var p, m = a.default.html5media.events.concat(["click", "mouseover", "mouseout"]), h = 0, v = m.length; h < v; h++) p = m[h], l.addEventListener(p, function(t) {
                    var n = (0, s.createEvent)(t.type, e);
                    e.dispatchEvent(n)
                });
                if (l.setSize = function(e, t) {
                        return l.style.width = e + "px", l.style.height = t + "px", l
                    }, l.hide = function() {
                        return l.style.display = "none", l
                    }, l.show = function() {
                        return l.style.display = "", l
                    }, n && n.length > 0)
                    for (var y = 0, g = n.length; y < g; y++)
                        if (r.renderer.renderers[t.prefix].canPlayType(n[y].type)) {
                            l.setAttribute("src", n[y].src);
                            break
                        }
                var b = (0, s.createEvent)("rendererready", l);
                return e.dispatchEvent(b), l
            }
        };
        i.default.HtmlMediaElement = a.default.HtmlMediaElement = u, r.renderer.add(u)
    }, {
        2: 2,
        23: 23,
        25: 25,
        3: 3,
        6: 6,
        7: 7
    }],
    22: [function(e, t, n) {
        "use strict";
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = c(e(3)),
            a = c(e(2)),
            r = c(e(6)),
            s = e(7),
            l = e(25),
            d = e(26),
            u = e(24);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = {
                isIframeStarted: !1,
                isIframeLoaded: !1,
                iframeQueue: [],
                enqueueIframe: function(e) {
                    f.isLoaded = "undefined" != typeof YT && YT.loaded, f.isLoaded ? f.createIframe(e) : (f.loadIframeApi(), f.iframeQueue.push(e))
                },
                loadIframeApi: function() {
                    f.isIframeStarted || ((0, u.loadScript)("https://www.youtube.com/player_api"), f.isIframeStarted = !0)
                },
                iFrameReady: function() {
                    for (f.isLoaded = !0, f.isIframeLoaded = !0; f.iframeQueue.length > 0;) {
                        var e = f.iframeQueue.pop();
                        f.createIframe(e)
                    }
                },
                createIframe: function(e) {
                    return new YT.Player(e.containerId, e)
                },
                getYouTubeId: function(e) {
                    var t = "";
                    return e.indexOf("?") > 0 ? "" === (t = f.getYouTubeIdFromParam(e)) && (t = f.getYouTubeIdFromUrl(e)) : t = f.getYouTubeIdFromUrl(e), t
                },
                getYouTubeIdFromParam: function(e) {
                    if (void 0 === e || null === e || !e.trim().length) return null;
                    for (var t = e.split("?")[1].split("&"), n = "", i = 0, o = t.length; i < o; i++) {
                        var a = t[i].split("=");
                        if ("v" === a[0]) {
                            n = a[1];
                            break
                        }
                    }
                    return n
                },
                getYouTubeIdFromUrl: function(e) {
                    return void 0 !== e && null !== e && e.trim().length ? (e = e.split("?")[0]).substring(e.lastIndexOf("/") + 1) : null
                },
                getYouTubeNoCookieUrl: function(e) {
                    if (void 0 === e || null === e || !e.trim().length || -1 === e.indexOf("//www.youtube")) return e;
                    var t = e.split("/");
                    return t[2] = t[2].replace(".com", "-nocookie.com"), t.join("/")
                }
            },
            p = {
                name: "youtube_iframe",
                options: {
                    prefix: "youtube_iframe",
                    youtube: {
                        autoplay: 0,
                        controls: 0,
                        disablekb: 1,
                        end: 0,
                        loop: 0,
                        modestbranding: 0,
                        playsinline: 0,
                        rel: 0,
                        showinfo: 0,
                        start: 0,
                        iv_load_policy: 3,
                        nocookie: !1
                    }
                },
                canPlayType: function(e) {
                    return ~["video/youtube", "video/x-youtube"].indexOf(e.toLowerCase())
                },
                create: function(e, t, n) {
                    var i = {},
                        s = [],
                        d = null,
                        u = !0,
                        c = !1,
                        p = null;
                    i.options = t, i.id = e.id + "_" + t.prefix, i.mediaElement = e;
                    for (var m = r.default.html5media.properties, h = function(t) {
                            var n = "" + t.substring(0, 1).toUpperCase() + t.substring(1);
                            i["get" + n] = function() {
                                if (null !== d) {
                                    switch (t) {
                                        case "currentTime":
                                            return d.getCurrentTime();
                                        case "duration":
                                            return d.getDuration();
                                        case "volume":
                                            return d.getVolume() / 100;
                                        case "paused":
                                            return u;
                                        case "ended":
                                            return c;
                                        case "muted":
                                            return d.isMuted();
                                        case "buffered":
                                            var e = d.getVideoLoadedFraction(),
                                                n = d.getDuration();
                                            return {
                                                start: function() {
                                                    return 0
                                                },
                                                end: function() {
                                                    return e * n
                                                },
                                                length: 1
                                            };
                                        case "src":
                                            return d.getVideoUrl();
                                        case "readyState":
                                            return 4
                                    }
                                    return null
                                }
                                return null
                            }, i["set" + n] = function(n) {
                                if (null !== d) switch (t) {
                                    case "src":
                                        var o = "string" == typeof n ? n : n[0].src,
                                            a = f.getYouTubeId(o);
                                        e.originalNode.autoplay ? d.loadVideoById(a) : d.cueVideoById(a);
                                        break;
                                    case "currentTime":
                                        d.seekTo(n);
                                        break;
                                    case "muted":
                                        n ? d.mute() : d.unMute(), setTimeout(function() {
                                            var t = (0, l.createEvent)("volumechange", i);
                                            e.dispatchEvent(t)
                                        }, 50);
                                        break;
                                    case "volume":
                                        n, d.setVolume(100 * n), setTimeout(function() {
                                            var t = (0, l.createEvent)("volumechange", i);
                                            e.dispatchEvent(t)
                                        }, 50);
                                        break;
                                    case "readyState":
                                        var r = (0, l.createEvent)("canplay", i);
                                        e.dispatchEvent(r)
                                } else s.push({
                                    type: "set",
                                    propName: t,
                                    value: n
                                })
                            }
                        }, v = 0, y = m.length; v < y; v++) h(m[v]);
                    for (var g = r.default.html5media.methods, b = function(e) {
                            i[e] = function() {
                                if (null !== d) switch (e) {
                                    case "play":
                                        return u = !1, d.playVideo();
                                    case "pause":
                                        return u = !0, d.pauseVideo();
                                    case "load":
                                        return null
                                } else s.push({
                                    type: "call",
                                    methodName: e
                                })
                            }
                        }, E = 0, S = g.length; E < S; E++) b(g[E]);
                    var x = a.default.createElement("div");
                    x.id = i.id, i.options.youtube.nocookie && e.originalNode.setAttribute("src", f.getYouTubeNoCookieUrl(n[0].src)), e.originalNode.parentNode.insertBefore(x, e.originalNode), e.originalNode.style.display = "none";
                    var w = "audio" === e.originalNode.tagName.toLowerCase(),
                        P = w ? "1" : e.originalNode.height,
                        T = w ? "1" : e.originalNode.width,
                        C = f.getYouTubeId(n[0].src),
                        k = {
                            id: i.id,
                            containerId: x.id,
                            videoId: C,
                            height: P,
                            width: T,
                            playerVars: Object.assign({
                                controls: 0,
                                rel: 0,
                                disablekb: 1,
                                showinfo: 0,
                                modestbranding: 0,
                                html5: 1,
                                playsinline: 0,
                                start: 0,
                                end: 0,
                                iv_load_policy: 3
                            }, i.options.youtube),
                            origin: o.default.location.host,
                            events: {
                                onReady: function(t) {
                                    if (e.youTubeApi = d = t.target, e.youTubeState = {
                                            paused: !0,
                                            ended: !1
                                        }, s.length)
                                        for (var n = 0, o = s.length; n < o; n++) {
                                            var a = s[n];
                                            if ("set" === a.type) {
                                                var r = a.propName,
                                                    u = "" + r.substring(0, 1).toUpperCase() + r.substring(1);
                                                i["set" + u](a.value)
                                            } else "call" === a.type && i[a.methodName]()
                                        }
                                    p = d.getIframe();
                                    for (var c = ["mouseover", "mouseout"], f = function(t) {
                                            var n = (0, l.createEvent)(t.type, i);
                                            e.dispatchEvent(n)
                                        }, m = 0, h = c.length; m < h; m++) p.addEventListener(c[m], f, !1);
                                    for (var v = ["rendererready", "loadeddata", "loadedmetadata", "canplay"], y = 0, g = v.length; y < g; y++) {
                                        var b = (0, l.createEvent)(v[y], i);
                                        e.dispatchEvent(b)
                                    }
                                },
                                onStateChange: function(t) {
                                    var n = [];
                                    switch (t.data) {
                                        case -1:
                                            n = ["loadedmetadata"], u = !0, c = !1;
                                            break;
                                        case 0:
                                            n = ["ended"], u = !1, c = !0, i.stopInterval();
                                            break;
                                        case 1:
                                            n = ["play", "playing"], u = !1, c = !1, i.startInterval();
                                            break;
                                        case 2:
                                            n = ["pause"], u = !0, c = !1, i.stopInterval();
                                            break;
                                        case 3:
                                            n = ["progress"], c = !1;
                                            break;
                                        case 5:
                                            n = ["loadeddata", "loadedmetadata", "canplay"], u = !0, c = !1
                                    }
                                    for (var o = 0, a = n.length; o < a; o++) {
                                        var r = (0, l.createEvent)(n[o], i);
                                        e.dispatchEvent(r)
                                    }
                                },
                                onError: function(t) {
                                    var n = (0, l.createEvent)("error", i);
                                    n.data = t.data, e.dispatchEvent(n)
                                }
                            }
                        };
                    return w && (k.playerVars.playsinline = 1), f.enqueueIframe(k), i.onEvent = function(t, n, i) {
                        null !== i && void 0 !== i && (e.youTubeState = i)
                    }, i.setSize = function(e, t) {
                        null !== d && d.setSize(e, t)
                    }, i.hide = function() {
                        i.stopInterval(), i.pause(), p && (p.style.display = "none")
                    }, i.show = function() {
                        p && (p.style.display = "")
                    }, i.destroy = function() {
                        d.destroy()
                    }, i.interval = null, i.startInterval = function() {
                        i.interval = setInterval(function() {
                            var t = (0, l.createEvent)("timeupdate", i);
                            e.dispatchEvent(t)
                        }, 250)
                    }, i.stopInterval = function() {
                        i.interval && clearInterval(i.interval)
                    }, i
                }
            };
        o.default.postMessage && i(o.default.addEventListener) && (o.default.onYouTubePlayerAPIReady = function() {
            f.iFrameReady()
        }, d.typeChecks.push(function(e) {
            return /\/\/(www\.youtube|youtu\.be)/i.test(e) ? "video/x-youtube" : null
        }), s.renderer.add(p))
    }, {
        2: 2,
        24: 24,
        25: 25,
        26: 26,
        3: 3,
        6: 6,
        7: 7
    }],
    23: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.cancelFullScreen = n.requestFullScreen = n.isFullScreen = n.FULLSCREEN_EVENT_NAME = n.HAS_NATIVE_FULLSCREEN_ENABLED = n.HAS_TRUE_NATIVE_FULLSCREEN = n.HAS_IOS_FULLSCREEN = n.HAS_MS_NATIVE_FULLSCREEN = n.HAS_MOZ_NATIVE_FULLSCREEN = n.HAS_WEBKIT_NATIVE_FULLSCREEN = n.HAS_NATIVE_FULLSCREEN = n.SUPPORTS_NATIVE_HLS = n.SUPPORT_POINTER_EVENTS = n.HAS_MSE = n.IS_STOCK_ANDROID = n.IS_SAFARI = n.IS_FIREFOX = n.IS_CHROME = n.IS_EDGE = n.IS_IE = n.IS_ANDROID = n.IS_IOS = n.IS_IPHONE = n.IS_IPAD = n.UA = n.NAV = void 0;
        var i = r(e(3)),
            o = r(e(2)),
            a = r(e(6));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        for (var s = n.NAV = i.default.navigator, l = n.UA = s.userAgent.toLowerCase(), d = n.IS_IPAD = /ipad/i.test(l), u = n.IS_IPHONE = /iphone/i.test(l), c = (n.IS_IOS = u || d, n.IS_ANDROID = /android/i.test(l)), f = n.IS_IE = /(trident|microsoft)/i.test(s.appName), p = (n.IS_EDGE = "msLaunchUri" in s && !("documentMode" in o.default)), m = n.IS_CHROME = /chrome/i.test(l), h = n.IS_FIREFOX = /firefox/i.test(l), v = n.IS_SAFARI = /safari/i.test(l) && !m, y = n.IS_STOCK_ANDROID = /^mozilla\/\d+\.\d+\s\(linux;\su;/i.test(l), g = (n.HAS_MSE = "MediaSource" in i.default), b = n.SUPPORT_POINTER_EVENTS = function() {
                var e = o.default.createElement("x"),
                    t = o.default.documentElement,
                    n = i.default.getComputedStyle;
                if (!("pointerEvents" in e.style)) return !1;
                e.style.pointerEvents = "auto", e.style.pointerEvents = "x", t.appendChild(e);
                var a = n && "auto" === n(e, "").pointerEvents;
                return e.remove(), !!a
            }(), E = ["source", "track", "audio", "video"], S = void 0, x = 0, w = E.length; x < w; x++) S = o.default.createElement(E[x]);
        var P = n.SUPPORTS_NATIVE_HLS = v || c && (m || y) || f && /edge/i.test(l),
            T = void 0 !== S.webkitEnterFullscreen,
            C = void 0 !== S.requestFullscreen;
        T && /mac os x 10_5/i.test(l) && (C = !1, T = !1);
        var k = void 0 !== S.webkitRequestFullScreen,
            _ = void 0 !== S.mozRequestFullScreen,
            N = void 0 !== S.msRequestFullscreen,
            A = k || _ || N,
            L = A,
            F = "",
            j = void 0,
            I = void 0,
            M = void 0;
        _ ? L = o.default.mozFullScreenEnabled : N && (L = o.default.msFullscreenEnabled), m && (T = !1), A && (k ? F = "webkitfullscreenchange" : _ ? F = "mozfullscreenchange" : N && (F = "MSFullscreenChange"), n.isFullScreen = j = function() {
            return _ ? o.default.mozFullScreen : k ? o.default.webkitIsFullScreen : N ? null !== o.default.msFullscreenElement : void 0
        }, n.requestFullScreen = I = function(e) {
            k ? e.webkitRequestFullScreen() : _ ? e.mozRequestFullScreen() : N && e.msRequestFullscreen()
        }, n.cancelFullScreen = M = function() {
            k ? o.default.webkitCancelFullScreen() : _ ? o.default.mozCancelFullScreen() : N && o.default.msExitFullscreen()
        });
        var O = n.HAS_NATIVE_FULLSCREEN = C,
            H = n.HAS_WEBKIT_NATIVE_FULLSCREEN = k,
            q = n.HAS_MOZ_NATIVE_FULLSCREEN = _,
            R = n.HAS_MS_NATIVE_FULLSCREEN = N,
            U = n.HAS_IOS_FULLSCREEN = T,
            V = n.HAS_TRUE_NATIVE_FULLSCREEN = A,
            D = n.HAS_NATIVE_FULLSCREEN_ENABLED = L,
            B = n.FULLSCREEN_EVENT_NAME = F;
        n.isFullScreen = j, n.requestFullScreen = I, n.cancelFullScreen = M, a.default.Features = a.default.Features || {}, a.default.Features.isiPad = d, a.default.Features.isiPhone = u, a.default.Features.isiOS = a.default.Features.isiPhone || a.default.Features.isiPad, a.default.Features.isAndroid = c, a.default.Features.isIE = f, a.default.Features.isEdge = p, a.default.Features.isChrome = m, a.default.Features.isFirefox = h, a.default.Features.isSafari = v, a.default.Features.isStockAndroid = y, a.default.Features.hasMSE = g, a.default.Features.supportsNativeHLS = P, a.default.Features.supportsPointerEvents = b, a.default.Features.hasiOSFullScreen = U, a.default.Features.hasNativeFullscreen = O, a.default.Features.hasWebkitNativeFullScreen = H, a.default.Features.hasMozNativeFullScreen = q, a.default.Features.hasMsNativeFullScreen = R, a.default.Features.hasTrueNativeFullScreen = V, a.default.Features.nativeFullScreenEnabled = D, a.default.Features.fullScreenEventName = B, a.default.Features.isFullScreen = j, a.default.Features.requestFullScreen = I, a.default.Features.cancelFullScreen = M
    }, {
        2: 2,
        3: 3,
        6: 6
    }],
    24: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.removeClass = n.addClass = n.hasClass = void 0, n.loadScript = s, n.offset = l, n.toggleClass = h, n.fadeOut = v, n.fadeIn = y, n.siblings = g, n.visible = b, n.ajax = E;
        var i = r(e(3)),
            o = r(e(2)),
            a = r(e(6));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s(e) {
            return function(e) {
                var t = [],
                    n = -1,
                    i = void 0,
                    o = void 0;

                function a(e) {
                    for (i = e; o = t.shift();) o[n] && o[n](i)
                }
                return e(function(e) {
                    return a(e, n = 0)
                }, function(e) {
                    return a(e, n = 1)
                }), {
                    then: function() {
                        for (var e = arguments.length, o = Array(e), a = 0; a < e; a++) o[a] = arguments[a];
                        ~n ? o[n] && o[n](i) : t.push(o)
                    }
                }
            }(function(t, n) {
                var i = o.default.createElement("script");
                i.src = e, i.async = !0, i.onload = function() {
                    i.remove(), t()
                }, i.onerror = function() {
                    i.remove(), n()
                }, o.default.head.appendChild(i)
            })
        }

        function l(e) {
            var t = e.getBoundingClientRect(),
                n = i.default.pageXOffset || o.default.documentElement.scrollLeft,
                a = i.default.pageYOffset || o.default.documentElement.scrollTop;
            return {
                top: t.top + a,
                left: t.left + n
            }
        }
        var d = void 0,
            u = void 0,
            c = void 0;
        "classList" in o.default.documentElement ? (d = function(e, t) {
            return void 0 !== e.classList && e.classList.contains(t)
        }, u = function(e, t) {
            return e.classList.add(t)
        }, c = function(e, t) {
            return e.classList.remove(t)
        }) : (d = function(e, t) {
            return new RegExp("\\b" + t + "\\b").test(e.className)
        }, u = function(e, t) {
            f(e, t) || (e.className += " " + t)
        }, c = function(e, t) {
            e.className = e.className.replace(new RegExp("\\b" + t + "\\b", "g"), "")
        });
        var f = n.hasClass = d,
            p = n.addClass = u,
            m = n.removeClass = c;

        function h(e, t) {
            f(e, t) ? m(e, t) : p(e, t)
        }

        function v(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 400,
                n = arguments[2];
            e.style.opacity || (e.style.opacity = 1);
            var o = null;
            i.default.requestAnimationFrame(function a(r) {
                var s = r - (o = o || r),
                    l = parseFloat(1 - s / t, 2);
                e.style.opacity = l < 0 ? 0 : l, s > t ? n && "function" == typeof n && n() : i.default.requestAnimationFrame(a)
            })
        }

        function y(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 400,
                n = arguments[2];
            e.style.opacity || (e.style.opacity = 0);
            var o = null;
            i.default.requestAnimationFrame(function a(r) {
                var s = r - (o = o || r),
                    l = parseFloat(s / t, 2);
                e.style.opacity = l > 1 ? 1 : l, s > t ? n && "function" == typeof n && n() : i.default.requestAnimationFrame(a)
            })
        }

        function g(e, t) {
            var n = [];
            e = e.parentNode.firstChild;
            do {
                t && !t(e) || n.push(e)
            } while (e = e.nextSibling);
            return n
        }

        function b(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }

        function E(e, t, n, o) {
            var a = i.default.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
                r = "application/x-www-form-urlencoded; charset=UTF-8",
                s = !1,
                l = "*/".concat("*");
            switch (t) {
                case "text":
                    r = "text/plain";
                    break;
                case "json":
                    r = "application/json, text/javascript";
                    break;
                case "html":
                    r = "text/html";
                    break;
                case "xml":
                    r = "application/xml, text/xml"
            }
            "application/x-www-form-urlencoded" !== r && (l = r + ", */*; q=0.01"), a && (a.open("GET", e, !0), a.setRequestHeader("Accept", l), a.onreadystatechange = function() {
                if (!s && 4 === a.readyState)
                    if (200 === a.status) {
                        s = !0;
                        var e = void 0;
                        switch (t) {
                            case "json":
                                e = JSON.parse(a.responseText);
                                break;
                            case "xml":
                                e = a.responseXML;
                                break;
                            default:
                                e = a.responseText
                        }
                        n(e)
                    } else "function" == typeof o && o(a.status)
            }, a.send())
        }
        a.default.Utils = a.default.Utils || {}, a.default.Utils.offset = l, a.default.Utils.hasClass = f, a.default.Utils.addClass = p, a.default.Utils.removeClass = m, a.default.Utils.toggleClass = h, a.default.Utils.fadeIn = y, a.default.Utils.fadeOut = v, a.default.Utils.siblings = g, a.default.Utils.visible = b, a.default.Utils.ajax = E, a.default.Utils.loadScript = s
    }, {
        2: 2,
        3: 3,
        6: 6
    }],
    25: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.escapeHTML = r, n.debounce = s, n.isObjectEmpty = l, n.splitEvents = d, n.createEvent = u, n.isNodeAfter = c, n.isString = f;
        var i, o = e(6),
            a = (i = o) && i.__esModule ? i : {
                default: i
            };

        function r(e) {
            if ("string" != typeof e) throw new Error("Argument passed must be a string");
            var t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;"
            };
            return e.replace(/[&<>"]/g, function(e) {
                return t[e]
            })
        }

        function s(e, t) {
            var n = this,
                i = arguments,
                o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if ("function" != typeof e) throw new Error("First argument must be a function");
            if ("number" != typeof t) throw new Error("Second argument must be a numeric value");
            var a = void 0;
            return function() {
                var r = n,
                    s = i,
                    l = o && !a;
                clearTimeout(a), a = setTimeout(function() {
                    a = null, o || e.apply(r, s)
                }, t), l && e.apply(r, s)
            }
        }

        function l(e) {
            return Object.getOwnPropertyNames(e).length <= 0
        }

        function d(e, t) {
            var n = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/,
                i = {
                    d: [],
                    w: []
                };
            return (e || "").split(" ").forEach(function(e) {
                var o = e + (t ? "." + t : "");
                o.startsWith(".") ? (i.d.push(o), i.w.push(o)) : i[n.test(e) ? "w" : "d"].push(o)
            }), i.d = i.d.join(" "), i.w = i.w.join(" "), i
        }

        function u(e, t) {
            if ("string" != typeof e) throw new Error("Event name must be a string");
            var n = e.match(/([a-z]+\.([a-z]+))/i),
                i = {
                    target: t
                };
            return null !== n && (e = n[1], i.namespace = n[2]), new window.CustomEvent(e, {
                detail: i
            })
        }

        function c(e, t) {
            return !!(e && t && 2 & e.compareDocumentPosition(t))
        }

        function f(e) {
            return "string" == typeof e
        }
        a.default.Utils = a.default.Utils || {}, a.default.Utils.escapeHTML = r, a.default.Utils.debounce = s, a.default.Utils.isObjectEmpty = l, a.default.Utils.splitEvents = d, a.default.Utils.createEvent = u, a.default.Utils.isNodeAfter = c, a.default.Utils.isString = f
    }, {
        6: 6
    }],
    26: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.typeChecks = void 0, n.absolutizeUrl = l, n.formatType = d, n.getMimeFromType = u, n.getTypeFromFile = c, n.getExtension = f, n.normalizeExtension = p;
        var i, o = e(6),
            a = (i = o) && i.__esModule ? i : {
                default: i
            },
            r = e(25);
        var s = n.typeChecks = [];

        function l(e) {
            if ("string" != typeof e) throw new Error("`url` argument must be a string");
            var t = document.createElement("div");
            return t.innerHTML = '<a href="' + (0, r.escapeHTML)(e) + '">x</a>', t.firstChild.href
        }

        function d(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return e && !t ? c(e) : u(t)
        }

        function u(e) {
            if ("string" != typeof e) throw new Error("`type` argument must be a string");
            return e && e.indexOf(";") > -1 ? e.substr(0, e.indexOf(";")) : e
        }

        function c(e) {
            if ("string" != typeof e) throw new Error("`url` argument must be a string");
            for (var t = 0, n = s.length; t < n; t++) {
                var i = s[t](e);
                if (i) return i
            }
            var o = p(f(e)),
                a = "video/mp4";
            return o && (~["mp4", "m4v", "ogg", "ogv", "webm", "flv", "mpeg", "mov"].indexOf(o) ? a = "video/" + o : ~["mp3", "oga", "wav", "mid", "midi"].indexOf(o) && (a = "audio/" + o)), a
        }

        function f(e) {
            if ("string" != typeof e) throw new Error("`url` argument must be a string");
            var t = e.split("?")[0].split("\\").pop().split("/").pop();
            return ~t.indexOf(".") ? t.substring(t.lastIndexOf(".") + 1) : ""
        }

        function p(e) {
            if ("string" != typeof e) throw new Error("`extension` argument must be a string");
            switch (e) {
                case "mp4":
                case "m4v":
                    return "mp4";
                case "webm":
                case "webma":
                case "webmv":
                    return "webm";
                case "ogg":
                case "oga":
                case "ogv":
                    return "ogg";
                default:
                    return e
            }
        }
        a.default.Utils = a.default.Utils || {}, a.default.Utils.typeChecks = s, a.default.Utils.absolutizeUrl = l, a.default.Utils.formatType = d, a.default.Utils.getMimeFromType = u, a.default.Utils.getTypeFromFile = c, a.default.Utils.getExtension = f, a.default.Utils.normalizeExtension = p
    }, {
        25: 25,
        6: 6
    }],
    27: [function(e, t, n) {
        "use strict";
        var i, o = e(2),
            a = (i = o) && i.__esModule ? i : {
                default: i
            };
        [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function(e) {
                e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function() {
                        this.parentNode.removeChild(this)
                    }
                })
            }),
            function() {
                if ("function" == typeof window.CustomEvent) return !1;

                function e(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var n = a.default.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                }
                e.prototype = window.Event.prototype, window.CustomEvent = e
            }(), "function" != typeof Object.assign && (Object.assign = function(e) {
                if (null === e || void 0 === e) throw new TypeError("Cannot convert undefined or null to object");
                for (var t = Object(e), n = 1, i = arguments.length; n < i; n++) {
                    var o = arguments[n];
                    if (null !== o)
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a])
                }
                return t
            }), String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
                return t = t || 0, this.substr(t, e.length) === e
            }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
                for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length - 1; --n >= 0 && t.item(n) !== this;);
                return n > -1
            }), window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
                var t = (this.document || this.ownerDocument).querySelectorAll(e),
                    n = void 0,
                    i = this;
                do {
                    for (n = t.length; --n >= 0 && t.item(n) !== i;);
                } while (n < 0 && (i = i.parentElement));
                return i
            }),
            function() {
                for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
                    var n = (new Date).getTime(),
                        i = Math.max(0, 16 - (n - e)),
                        o = window.setTimeout(function() {
                            t(n + i)
                        }, i);
                    return e = n + i, o
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                    clearTimeout(e)
                })
            }(), /firefox/i.test(navigator.userAgent) && (window.mediaElementJsOldGetComputedStyle = window.getComputedStyle, window.getComputedStyle = function(e, t) {
                var n = window.mediaElementJsOldGetComputedStyle(e, t);
                return null === n ? {
                    getPropertyValue: function() {}
                } : n
            })
    }, {
        2: 2
    }],
    28: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.isDropFrame = r, n.secondsToTimeCode = s, n.timeCodeToSeconds = l, n.calculateTimeFormat = d, n.convertSMPTEtoSeconds = u;
        var i, o = e(6),
            a = (i = o) && i.__esModule ? i : {
                default: i
            };

        function r() {
            return !((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25) % 1 == 0)
        }

        function s(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 25,
                o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
            e = !e || "number" != typeof e || e < 0 ? 0 : e;
            var a = Math.round(.066666 * i),
                s = Math.round(i),
                l = 24 * Math.round(3600 * i),
                d = Math.round(600 * i),
                u = r(i) ? ";" : ":",
                c = void 0,
                f = void 0,
                p = void 0,
                m = void 0,
                h = Math.round(e * i);
            if (r(i)) {
                h < 0 && (h = l + h);
                var v = (h %= l) % d;
                h += 9 * a * Math.floor(h / d), v > a && (h += a * Math.floor((v - a) / Math.round(60 * s - a)));
                var y = Math.floor(h / s);
                c = Math.floor(Math.floor(y / 60) / 60), f = Math.floor(y / 60) % 60, p = n ? y % 60 : (h / s % 60).toFixed(o)
            } else c = Math.floor(e / 3600) % 24, f = Math.floor(e / 60) % 60, p = n ? Math.floor(e % 60) : (e % 60).toFixed(o);
            c = c <= 0 ? 0 : c, f = f <= 0 ? 0 : f, p = p <= 0 ? 0 : p;
            var g = t || c > 0 ? (c < 10 ? "0" + c : c) + ":" : "";
            return g += (f < 10 ? "0" + f : f) + ":", g += "" + (p < 10 ? "0" + p : p), n && (g += (m = (m = (h % s).toFixed(0)) <= 0 ? 0 : m) < 10 ? u + "0" + m : "" + u + m), g
        }

        function l(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 25;
            if ("string" != typeof e) throw new TypeError("Time must be a string");
            if (e.indexOf(";") > 0 && (e = e.replace(";", ":")), !/\d{2}(\:\d{2}){0,3}/i.test(e)) throw new TypeError("Time code must have the format `00:00:00`");
            var n = e.split(":"),
                i = void 0,
                o = 0,
                a = 0,
                s = 0,
                l = 0,
                d = 0,
                u = Math.round(.066666 * t),
                c = Math.round(t),
                f = 3600 * c,
                p = 60 * c;
            switch (n.length) {
                default:
                    case 1:
                    s = parseInt(n[0], 10);
                break;
                case 2:
                        a = parseInt(n[0], 10),
                    s = parseInt(n[1], 10);
                    break;
                case 3:
                        o = parseInt(n[0], 10),
                    a = parseInt(n[1], 10),
                    s = parseInt(n[2], 10);
                    break;
                case 4:
                        o = parseInt(n[0], 10),
                    a = parseInt(n[1], 10),
                    s = parseInt(n[2], 10),
                    l = parseInt(n[3], 10)
            }
            return i = r(t) ? f * o + p * a + c * s + l - u * ((d = 60 * o + a) - Math.floor(d / 10)) : (f * o + p * a + t * s + l) / t, parseFloat(i.toFixed(3))
        }

        function d(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 25;
            e = !e || "number" != typeof e || e < 0 ? 0 : e;
            for (var i = Math.floor(e / 3600) % 24, o = Math.floor(e / 60) % 60, a = Math.floor(e % 60), r = [
                    [Math.floor((e % 1 * n).toFixed(3)), "f"],
                    [a, "s"],
                    [o, "m"],
                    [i, "h"]
                ], s = t.timeFormat, l = s[1] === s[0], d = l ? 2 : 1, u = s.length < d ? s[d] : ":", c = s[0], f = !1, p = 0, m = r.length; p < m; p++)
                if (~s.indexOf(r[p][1])) f = !0;
                else if (f) {
                for (var h = !1, v = p; v < m; v++)
                    if (r[v][0] > 0) {
                        h = !0;
                        break
                    }
                if (!h) break;
                l || (s = c + s), s = r[p][1] + u + s, l && (s = r[p][1] + s), c = r[p][1]
            }
            t.currentTimeFormat = s
        }

        function u(e) {
            if ("string" != typeof e) throw new TypeError("Argument must be a string value");
            for (var t = ~(e = e.replace(",", ".")).indexOf(".") ? e.split(".")[1].length : 0, n = 0, i = 1, o = 0, a = (e = e.split(":").reverse()).length; o < a; o++) i = 1, o > 0 && (i = Math.pow(60, o)), n += Number(e[o]) * i;
            return Number(n.toFixed(t))
        }
        a.default.Utils = a.default.Utils || {}, a.default.Utils.secondsToTimeCode = s, a.default.Utils.timeCodeToSeconds = l, a.default.Utils.calculateTimeFormat = d, a.default.Utils.convertSMPTEtoSeconds = u
    }, {
        6: 6
    }]
}, {}, [27, 5, 4, 14, 21, 18, 17, 19, 20, 22, 15, 16, 8, 9, 10, 11, 12, 13]);

/*************************
Retina.js
*************************/
! function() {
    function a() {}

    function b(a) {
        return f.retinaImageSuffix + a
    }

    function c(a, c) {
        if (this.path = a || "", "undefined" != typeof c && null !== c) this.at_2x_path = c, this.perform_check = !1;
        else {
            if (void 0 !== document.createElement) {
                var d = document.createElement("a");
                d.href = this.path, d.pathname = d.pathname.replace(g, b), this.at_2x_path = d.href
            } else {
                var e = this.path.split("?");
                e[0] = e[0].replace(g, b), this.at_2x_path = e.join("?")
            }
            this.perform_check = !0
        }
    }

    function d(a) {
        this.el = a, this.path = new c(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));
        var b = this;
        this.path.check_2x_variant(function(a) {
            a && b.swap()
        })
    }
    var e = "undefined" == typeof exports ? window : exports,
        f = {
            retinaImageSuffix: "@2x",
            check_mime_type: !0,
            force_original_dimensions: !0
        };
    e.Retina = a, a.configure = function(a) {
        null === a && (a = {});
        for (var b in a) a.hasOwnProperty(b) && (f[b] = a[b])
    }, a.init = function(a) {
        null === a && (a = e);
        var b = a.onload || function() {};
        a.onload = function() {
            var a, c, e = document.getElementsByTagName("img"),
                f = [];
            for (a = 0; a < e.length; a += 1) c = e[a], c.getAttributeNode("data-no-retina") || f.push(new d(c));
            b()
        }
    }, a.isRetina = function() {
        var a = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return e.devicePixelRatio > 1 ? !0 : e.matchMedia && e.matchMedia(a).matches ? !0 : !1
    };
    var g = /\.\w+$/;
    e.RetinaImagePath = c, c.confirmed_paths = [], c.prototype.is_external = function() {
        return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain))
    }, c.prototype.check_2x_variant = function(a) {
        var b, d = this;
        return this.is_external() ? a(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in c.confirmed_paths ? a(!0) : (b = new XMLHttpRequest, b.open("HEAD", this.at_2x_path), b.onreadystatechange = function() {
            if (4 !== b.readyState) return a(!1);
            if (b.status >= 200 && b.status <= 399) {
                if (f.check_mime_type) {
                    var e = b.getResponseHeader("Content-Type");
                    if (null === e || !e.match(/^image/i)) return a(!1)
                }
                return c.confirmed_paths.push(d.at_2x_path), a(!0)
            }
            return a(!1)
        }, b.send(), void 0) : a(!0)
    }, e.RetinaImage = d, d.prototype.swap = function(a) {
        function b() {
            c.el.complete ? (f.force_original_dimensions && (c.el.setAttribute("width", c.el.offsetWidth), c.el.setAttribute("height", c.el.offsetHeight)), c.el.setAttribute("src", a)) : setTimeout(b, 5)
        }
        "undefined" == typeof a && (a = this.path.at_2x_path);
        var c = this;
        b()
    }, a.isRetina() && a.init(e)
}();

/*************************
 WOW wow.js
*************************/
! function(a, b) {
    if ("function" == typeof define && define.amd) define(["module", "exports"], b);
    else if ("undefined" != typeof exports) b(module, exports);
    else {
        var c = {
            exports: {}
        };
        b(c, c.exports), a.WOW = c.exports
    }
}(this, function(a, b) {
    "use strict";

    function c(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function d(a, b) {
        return b.indexOf(a) >= 0
    }

    function e(a, b) {
        for (var c in b)
            if (null == a[c]) {
                var d = b[c];
                a[c] = d
            }
        return a
    }

    function f(a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
    }

    function g(a) {
        var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
            c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
            d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
            e = void 0;
        return null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
    }

    function h(a, b) {
        null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) && a["on" + b]()
    }

    function i(a, b, c) {
        null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
    }

    function j(a, b, c) {
        null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
    }

    function k() {
        return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
    }
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    var l, m, n = function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                }
            }
            return function(b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(),
        o = window.WeakMap || window.MozWeakMap || function() {
            function a() {
                c(this, a), this.keys = [], this.values = []
            }
            return n(a, [{
                key: "get",
                value: function(a) {
                    for (var b = 0; b < this.keys.length; b++) {
                        var c = this.keys[b];
                        if (c === a) return this.values[b]
                    }
                }
            }, {
                key: "set",
                value: function(a, b) {
                    for (var c = 0; c < this.keys.length; c++) {
                        var d = this.keys[c];
                        if (d === a) return this.values[c] = b, this
                    }
                    return this.keys.push(a), this.values.push(b), this
                }
            }]), a
        }(),
        p = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (m = l = function() {
            function a() {
                c(this, a), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
            }
            return n(a, [{
                key: "observe",
                value: function() {}
            }]), a
        }(), l.notSupported = !0, m),
        q = window.getComputedStyle || function(a) {
            var b = /(\-([a-z]){1})/g;
            return {
                getPropertyValue: function(c) {
                    "float" === c && (c = "styleFloat"), b.test(c) && c.replace(b, function(a, b) {
                        return b.toUpperCase()
                    });
                    var d = a.currentStyle;
                    return (null != d ? d[c] : void 0) || null
                }
            }
        },
        r = function() {
            function a() {
                var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                c(this, a), this.defaults = {
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: !0,
                    live: !0,
                    callback: null,
                    scrollContainer: null,
                    resetAnimation: !0
                }, this.animate = function() {
                    return "requestAnimationFrame" in window ? function(a) {
                        return window.requestAnimationFrame(a)
                    } : function(a) {
                        return a()
                    }
                }(), this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = e(b, this.defaults), null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)), this.animationNameCache = new o, this.wowEvent = g(this.config.boxClass)
            }
            return n(a, [{
                key: "init",
                value: function() {
                    this.element = window.document.documentElement, d(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start), this.finished = []
                }
            }, {
                key: "start",
                value: function() {
                    var a = this;
                    if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length)
                        if (this.disabled()) this.resetStyle();
                        else
                            for (var b = 0; b < this.boxes.length; b++) {
                                var c = this.boxes[b];
                                this.applyStyle(c, !0)
                            }
                    if (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler), i(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) {
                        var d = new p(function(b) {
                            for (var c = 0; c < b.length; c++)
                                for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                                    var f = d.addedNodes[e];
                                    a.doSync(f)
                                }
                        });
                        d.observe(document.body, {
                            childList: !0,
                            subtree: !0
                        })
                    }
                }
            }, {
                key: "stop",
                value: function() {
                    this.stopped = !0, j(this.config.scrollContainer || window, "scroll", this.scrollHandler), j(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval)
                }
            }, {
                key: "sync",
                value: function() {
                    p.notSupported && this.doSync(this.element)
                }
            }, {
                key: "doSync",
                value: function(a) {
                    if ("undefined" != typeof a && null !== a || (a = this.element), 1 === a.nodeType) {
                        a = a.parentNode || a;
                        for (var b = a.querySelectorAll("." + this.config.boxClass), c = 0; c < b.length; c++) {
                            var e = b[c];
                            d(e, this.all) || (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), this.scrolled = !0)
                        }
                    }
                }
            }, {
                key: "show",
                value: function(a) {
                    return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), h(a, this.wowEvent), this.config.resetAnimation && (i(a, "animationend", this.resetAnimation), i(a, "oanimationend", this.resetAnimation), i(a, "webkitAnimationEnd", this.resetAnimation), i(a, "MSAnimationEnd", this.resetAnimation)), a
                }
            }, {
                key: "applyStyle",
                value: function(a, b) {
                    var c = this,
                        d = a.getAttribute("data-wow-duration"),
                        e = a.getAttribute("data-wow-delay"),
                        f = a.getAttribute("data-wow-iteration");
                    return this.animate(function() {
                        return c.customStyle(a, b, d, e, f)
                    })
                }
            }, {
                key: "resetStyle",
                value: function() {
                    for (var a = 0; a < this.boxes.length; a++) {
                        var b = this.boxes[a];
                        b.style.visibility = "visible"
                    }
                }
            }, {
                key: "resetAnimation",
                value: function(a) {
                    if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                        var b = a.target || a.srcElement;
                        b.className = b.className.replace(this.config.animateClass, "").trim()
                    }
                }
            }, {
                key: "customStyle",
                value: function(a, b, c, d, e) {
                    return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
                        animationDuration: c
                    }), d && this.vendorSet(a.style, {
                        animationDelay: d
                    }), e && this.vendorSet(a.style, {
                        animationIterationCount: e
                    }), this.vendorSet(a.style, {
                        animationName: b ? "none" : this.cachedAnimationName(a)
                    }), a
                }
            }, {
                key: "vendorSet",
                value: function(a, b) {
                    for (var c in b)
                        if (b.hasOwnProperty(c)) {
                            var d = b[c];
                            a["" + c] = d;
                            for (var e = 0; e < this.vendors.length; e++) {
                                var f = this.vendors[e];
                                a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d
                            }
                        }
                }
            }, {
                key: "vendorCSS",
                value: function(a, b) {
                    for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {
                        var f = this.vendors[e];
                        d = d || c.getPropertyCSSValue("-" + f + "-" + b)
                    }
                    return d
                }
            }, {
                key: "animationName",
                value: function(a) {
                    var b = void 0;
                    try {
                        b = this.vendorCSS(a, "animation-name").cssText
                    } catch (c) {
                        b = q(a).getPropertyValue("animation-name")
                    }
                    return "none" === b ? "" : b
                }
            }, {
                key: "cacheAnimationName",
                value: function(a) {
                    return this.animationNameCache.set(a, this.animationName(a))
                }
            }, {
                key: "cachedAnimationName",
                value: function(a) {
                    return this.animationNameCache.get(a)
                }
            }, {
                key: "scrollHandler",
                value: function() {
                    this.scrolled = !0
                }
            }, {
                key: "scrollCallback",
                value: function() {
                    if (this.scrolled) {
                        this.scrolled = !1;
                        for (var a = [], b = 0; b < this.boxes.length; b++) {
                            var c = this.boxes[b];
                            if (c) {
                                if (this.isVisible(c)) {
                                    this.show(c);
                                    continue
                                }
                                a.push(c)
                            }
                        }
                        this.boxes = a, this.boxes.length || this.config.live || this.stop()
                    }
                }
            }, {
                key: "offsetTop",
                value: function(a) {
                    for (; void 0 === a.offsetTop;) a = a.parentNode;
                    for (var b = a.offsetTop; a.offsetParent;) a = a.offsetParent, b += a.offsetTop;
                    return b
                }
            }, {
                key: "isVisible",
                value: function(a) {
                    var b = a.getAttribute("data-wow-offset") || this.config.offset,
                        c = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
                        d = c + Math.min(this.element.clientHeight, k()) - b,
                        e = this.offsetTop(a),
                        f = e + a.clientHeight;
                    return d >= e && f >= c
                }
            }, {
                key: "disabled",
                value: function() {
                    return !this.config.mobile && f(navigator.userAgent)
                }
            }]), a
        }();
    b["default"] = r, a.exports = b["default"]
});

/*************************
Magnific Popup
*************************/
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) {
            b.ev.on(o + a + p, c)
        },
        x = function(b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        y = function(c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        z = function(c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        },
        A = function() {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function() {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function() {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                    el: a(e)
                } : (d = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                    mfpEl: e
                }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline",
        G = function() {
            E && (D.after(E.addClass(C)).detach(), E = null)
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F), w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax",
        J = function() {
            H && a(document.body).removeClass(H)
        },
        K = function() {
            J(), b.req && b.req.abort()
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function() {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        L && clearInterval(L), L = setInterval(function() {
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function() {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function() {
                            b.content.css("visibility", "visible")
                        };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                f.css(b._getOffset(!0)), e = setTimeout(function() {
                                    k(), setTimeout(function() {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function() {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P), w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        T = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() {
                            b.prev()
                        }), f.click(function() {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function() {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }), w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});

/*************************
particles
*************************/

/*************************
Portfolio Hover Effcet
*************************/
/**
 * jquery.hoverdir.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
! function(t, e, i) {
    "use strict";
    t.HoverDir = function(e, i) {
        this.$el = t(i), this._init(e)
    }, t.HoverDir.defaults = {
        speed: 300,
        easing: "ease",
        hoverDelay: 0,
        inverse: !1
    }, t.HoverDir.prototype = {
        _init: function(e) {
            this.options = t.extend(!0, {}, t.HoverDir.defaults, e), this.transitionProp = "all " + this.options.speed + "ms " + this.options.easing, this.support = Modernizr.csstransitions, this._loadEvents()
        },
        _loadEvents: function() {
            var e = this;
            this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir", function(i) {
                var o = t(this),
                    n = o.find("div"),
                    s = e._getDir(o, {
                        x: i.pageX,
                        y: i.pageY
                    }),
                    r = e._getStyle(s);
                "mouseenter" === i.type ? (n.hide().css(r.from), clearTimeout(e.tmhover), e.tmhover = setTimeout(function() {
                    n.show(0, function() {
                        var i = t(this);
                        e.support && i.css("transition", e.transitionProp), e._applyAnimation(i, r.to, e.options.speed)
                    })
                }, e.options.hoverDelay)) : (e.support && n.css("transition", e.transitionProp), clearTimeout(e.tmhover), e._applyAnimation(n, r.from, e.options.speed))
            })
        },
        _getDir: function(t, e) {
            var i = t.width(),
                o = t.height(),
                n = (e.x - t.offset().left - i / 2) * (i > o ? o / i : 1),
                s = (e.y - t.offset().top - o / 2) * (o > i ? i / o : 1);
            return Math.round((Math.atan2(s, n) * (180 / Math.PI) + 180) / 90 + 3) % 4
        },
        _getStyle: function(t) {
            var e, i, o = {
                    left: "0px",
                    top: "-100%"
                },
                n = {
                    left: "0px",
                    top: "100%"
                },
                s = {
                    left: "-100%",
                    top: "0px"
                },
                r = {
                    left: "100%",
                    top: "0px"
                },
                a = {
                    top: "0px"
                },
                p = {
                    left: "0px"
                };
            switch (t) {
                case 0:
                    e = this.options.inverse ? n : o, i = a;
                    break;
                case 1:
                    e = this.options.inverse ? s : r, i = p;
                    break;
                case 2:
                    e = this.options.inverse ? o : n, i = a;
                    break;
                case 3:
                    e = this.options.inverse ? r : s, i = p
            }
            return {
                from: e,
                to: i
            }
        },
        _applyAnimation: function(e, i, o) {
            t.fn.applyStyle = this.support ? t.fn.css : t.fn.animate, e.stop().applyStyle(i, t.extend(!0, [], {
                duration: o + "ms"
            }))
        }
    };
    var o = function(t) {
        e.console && e.console.error(t)
    };
    t.fn.hoverdir = function(e) {
        var i = t.data(this, "hoverdir");
        if ("string" == typeof e) {
            var n = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                i ? t.isFunction(i[e]) && "_" !== e.charAt(0) ? i[e].apply(i, n) : o("no such method '" + e + "' for hoverdir instance") : o("cannot call methods on hoverdir prior to initialization; attempted to call method '" + e + "'")
            })
        } else this.each(function() {
            i ? i._init() : i = t.data(this, "hoverdir", new t.HoverDir(e, this))
        });
        return i
    }
}(jQuery, window);

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-shiv-cssclasses-testprop-testallprops-domprefixes-load
 */
;
window.Modernizr = function(a, b, c) {
        function x(a) {
            j.cssText = a
        }

        function y(a, b) {
            return x(prefixes.join(a + ";") + (b || ""))
        }

        function z(a, b) {
            return typeof a === b
        }

        function A(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function B(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!A(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function C(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function D(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + n.join(d + " ") + d).split(" ");
            return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c))
        }
        var d = "2.6.2",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = "Webkit Moz O ms",
            n = m.split(" "),
            o = m.toLowerCase().split(" "),
            p = {},
            q = {},
            r = {},
            s = [],
            t = s.slice,
            u, v = {}.hasOwnProperty,
            w;
        !z(v, "undefined") && !z(v.call, "undefined") ? w = function(a, b) {
            return v.call(a, b)
        } : w = function(a, b) {
            return b in a && z(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = t.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(t.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(t.call(arguments)))
                };
            return e
        }), p.csstransitions = function() {
            return D("transition")
        };
        for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
        return e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) w(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, x(""), i = k = null,
            function(a, b) {
                function k(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function l() {
                    var a = r.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function m(a) {
                    var b = i[a[g]];
                    return b || (b = {}, h++, a[g] = h, i[h] = b), b
                }

                function n(a, c, f) {
                    c || (c = b);
                    if (j) return c.createElement(a);
                    f || (f = m(c));
                    var g;
                    return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
                }

                function o(a, c) {
                    a || (a = b);
                    if (j) return a.createDocumentFragment();
                    c = c || m(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = l(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function p(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return r.shivMethods ? n(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(r, b.frag)
                }

                function q(a) {
                    a || (a = b);
                    var c = m(a);
                    return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
                }
                var c = a.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f, g = "_html5shiv",
                    h = 0,
                    i = {},
                    j;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        f = !0, j = !0
                    }
                })();
                var r = {
                    elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: c.shivCSS !== !1,
                    supportsUnknownElements: j,
                    shivMethods: c.shivMethods !== !1,
                    type: "default",
                    shivDocument: q,
                    createElement: n,
                    createDocumentFragment: o
                };
                a.html5 = r, q(b)
            }(this, b), e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function(a) {
                return B([a])
            }, e.testAllProps = D, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };

/*************************
 * jquery.typer.js 0.0.4 - https://github.com/yckart/jquery.typer.js
 * The typewriter effect
 *
 * Copyright (c) 2013 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/03/24
 *************************/
! function(f) {
    f.fn.typer = function(u, h) {
        return h = f.extend({}, {
            char: "",
            delay: 2e3,
            duration: 600,
            endless: !0,
            onType: f.noop,
            afterAll: f.noop,
            afterPhrase: f.noop
        }, h || u), u = f.isPlainObject(u) ? h.text : u, u = f.isArray(u) ? u : u.split(" "), this.each(function() {
            var a, s = f(this),
                i = {
                    input: 1,
                    textarea: 1
                }[this.tagName.toLowerCase()],
                o = !1,
                l = 0;
            ! function e(t) {
                var n = ({
                        string: 1,
                        number: 1
                    }[typeof u] ? u : u[t]) + "",
                    r = n.substr(l++, 1);
                if ("<" === r && (o = !0), ">" === r && (o = !1), s[i ? "val" : "html"](n.substr(0, l) + (f.isFunction(h.char) ? h.char() : h.char || " ")), l <= n.length) o ? e(t) : a = setTimeout(e, h.duration / 10, t), h.onType(a);
                else {
                    if (l = 0, ++t === u.length && !h.endless) return;
                    t === u.length && (t = 0), a = setTimeout(e, h.delay, t), t === u.length - 1 && h.afterAll(a), h.afterPhrase(a)
                }
            }(0)
        })
    }
}(jQuery);