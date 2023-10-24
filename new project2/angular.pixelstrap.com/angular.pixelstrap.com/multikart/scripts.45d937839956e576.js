(function (s, a) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (l) {
        return a(s, l);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = a(s, require("jquery")))
    : (s.jQueryBridget = a(s, s.jQuery));
})(window, function (s, a) {
  "use strict";
  function l(f, v, g) {
    function p(_, r, i) {
      var t,
        e = "$()." + f + '("' + r + '")';
      return (
        _.each(function (n, m) {
          var y = g.data(m, f);
          if (y) {
            var I = y[r];
            if (I && "_" != r.charAt(0)) {
              var z = I.apply(y, i);
              t = void 0 === t ? z : t;
            } else u(e + " is not a valid method");
          } else u(f + " not initialized. Cannot call methods, i.e. " + e);
        }),
        void 0 !== t ? t : _
      );
    }
    function c(_, r) {
      _.each(function (i, t) {
        var e = g.data(t, f);
        e ? (e.option(r), e._init()) : ((e = new v(t, r)), g.data(t, f, e));
      });
    }
    (g = g || a || s.jQuery) &&
      (v.prototype.option ||
        (v.prototype.option = function (_) {
          g.isPlainObject(_) && (this.options = g.extend(!0, this.options, _));
        }),
      (g.fn[f] = function (_) {
        if ("string" == typeof _) {
          var r = d.call(arguments, 1);
          return p(this, _, r);
        }
        return c(this, _), this;
      }),
      h(g));
  }
  function h(f) {
    !f || (f && f.bridget) || (f.bridget = l);
  }
  var d = Array.prototype.slice,
    o = s.console,
    u =
      typeof o > "u"
        ? function () {}
        : function (f) {
            o.error(f);
          };
  return h(a || s.jQuery), l;
}),
  (function (s, a) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", a)
      : "object" == typeof module && module.exports
      ? (module.exports = a())
      : (s.EvEmitter = a());
  })(typeof window < "u" ? window : this, function () {
    function s() {}
    var a = s.prototype;
    return (
      (a.on = function (l, h) {
        if (l && h) {
          var d = (this._events = this._events || {}),
            o = (d[l] = d[l] || []);
          return -1 == o.indexOf(h) && o.push(h), this;
        }
      }),
      (a.once = function (l, h) {
        if (l && h) {
          this.on(l, h);
          var d = (this._onceEvents = this._onceEvents || {});
          return ((d[l] = d[l] || {})[h] = !0), this;
        }
      }),
      (a.off = function (l, h) {
        var d = this._events && this._events[l];
        if (d && d.length) {
          var o = d.indexOf(h);
          return -1 != o && d.splice(o, 1), this;
        }
      }),
      (a.emitEvent = function (l, h) {
        var d = this._events && this._events[l];
        if (d && d.length) {
          (d = d.slice(0)), (h = h || []);
          for (
            var o = this._onceEvents && this._onceEvents[l], u = 0;
            u < d.length;
            u++
          ) {
            var f = d[u];
            o && o[f] && (this.off(l, f), delete o[f]), f.apply(this, h);
          }
          return this;
        }
      }),
      (a.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      s
    );
  }),
  (function (s, a) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", a)
      : "object" == typeof module && module.exports
      ? (module.exports = a())
      : (s.getSize = a());
  })(window, function () {
    "use strict";
    function s(c) {
      var _ = parseFloat(c);
      return -1 == c.indexOf("%") && !isNaN(_) && _;
    }
    function h(c) {
      var _ = getComputedStyle(c);
      return (
        _ ||
          f(
            "Style returned " +
              _ +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        _
      );
    }
    var u,
      f =
        typeof console > "u"
          ? function a() {}
          : function (c) {
              console.error(c);
            },
      v = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      g = v.length,
      p = !1;
    return function o(c) {
      if (
        ((function d() {
          if (!p) {
            p = !0;
            var c = document.createElement("div");
            (c.style.width = "200px"),
              (c.style.padding = "1px 2px 3px 4px"),
              (c.style.borderStyle = "solid"),
              (c.style.borderWidth = "1px 2px 3px 4px"),
              (c.style.boxSizing = "border-box");
            var _ = document.body || document.documentElement;
            _.appendChild(c);
            var r = h(c);
            (u = 200 == Math.round(s(r.width))),
              (o.isBoxSizeOuter = u),
              _.removeChild(c);
          }
        })(),
        "string" == typeof c && (c = document.querySelector(c)),
        c && "object" == typeof c && c.nodeType)
      ) {
        var _ = h(c);
        if ("none" == _.display)
          return (function l() {
            for (
              var c = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0,
                },
                _ = 0;
              _ < g;
              _++
            )
              c[v[_]] = 0;
            return c;
          })();
        var r = {};
        (r.width = c.offsetWidth), (r.height = c.offsetHeight);
        for (
          var i = (r.isBorderBox = "border-box" == _.boxSizing), t = 0;
          t < g;
          t++
        ) {
          var e = v[t],
            m = parseFloat(_[e]);
          r[e] = isNaN(m) ? 0 : m;
        }
        var y = r.paddingLeft + r.paddingRight,
          I = r.paddingTop + r.paddingBottom,
          z = r.marginLeft + r.marginRight,
          x = r.marginTop + r.marginBottom,
          S = r.borderLeftWidth + r.borderRightWidth,
          b = r.borderTopWidth + r.borderBottomWidth,
          E = i && u,
          L = s(_.width);
        !1 !== L && (r.width = L + (E ? 0 : y + S));
        var T = s(_.height);
        return (
          !1 !== T && (r.height = T + (E ? 0 : I + b)),
          (r.innerWidth = r.width - (y + S)),
          (r.innerHeight = r.height - (I + b)),
          (r.outerWidth = r.width + z),
          (r.outerHeight = r.height + x),
          r
        );
      }
    };
  }),
  (function (s, a) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", a)
      : "object" == typeof module && module.exports
      ? (module.exports = a())
      : (s.matchesSelector = a());
  })(window, function () {
    "use strict";
    var s = (function () {
      var a = window.Element.prototype;
      if (a.matches) return "matches";
      if (a.matchesSelector) return "matchesSelector";
      for (var l = ["webkit", "moz", "ms", "o"], h = 0; h < l.length; h++) {
        var o = l[h] + "MatchesSelector";
        if (a[o]) return o;
      }
    })();
    return function (a, l) {
      return a[s](l);
    };
  }),
  (function (s, a) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (l) {
            return a(s, l);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = a(s, require("desandro-matches-selector")))
      : (s.fizzyUIUtils = a(s, s.matchesSelector));
  })(window, function (s, a) {
    var l = {
        extend: function (o, u) {
          for (var f in u) o[f] = u[f];
          return o;
        },
        modulo: function (o, u) {
          return ((o % u) + u) % u;
        },
      },
      h = Array.prototype.slice;
    (l.makeArray = function (o) {
      return Array.isArray(o)
        ? o
        : null == o
        ? []
        : "object" == typeof o && "number" == typeof o.length
        ? h.call(o)
        : [o];
    }),
      (l.removeFrom = function (o, u) {
        var f = o.indexOf(u);
        -1 != f && o.splice(f, 1);
      }),
      (l.getParent = function (o, u) {
        for (; o.parentNode && o != document.body; )
          if (a((o = o.parentNode), u)) return o;
      }),
      (l.getQueryElement = function (o) {
        return "string" == typeof o ? document.querySelector(o) : o;
      }),
      (l.handleEvent = function (o) {
        var u = "on" + o.type;
        this[u] && this[u](o);
      }),
      (l.filterFindElements = function (o, u) {
        o = l.makeArray(o);
        var f = [];
        return (
          o.forEach(function (v) {
            if (v instanceof HTMLElement) {
              if (!u) return void f.push(v);
              a(v, u) && f.push(v);
              for (var g = v.querySelectorAll(u), p = 0; p < g.length; p++)
                f.push(g[p]);
            }
          }),
          f
        );
      }),
      (l.debounceMethod = function (o, u, f) {
        f = f || 100;
        var v = o.prototype[u],
          g = u + "Timeout";
        o.prototype[u] = function () {
          var p = this[g];
          clearTimeout(p);
          var c = arguments,
            _ = this;
          this[g] = setTimeout(function () {
            v.apply(_, c), delete _[g];
          }, f);
        };
      }),
      (l.docReady = function (o) {
        var u = document.readyState;
        "complete" == u || "interactive" == u
          ? setTimeout(o)
          : document.addEventListener("DOMContentLoaded", o);
      }),
      (l.toDashed = function (o) {
        return o
          .replace(/(.)([A-Z])/g, function (u, f, v) {
            return f + "-" + v;
          })
          .toLowerCase();
      });
    var d = s.console;
    return (
      (l.htmlInit = function (o, u) {
        l.docReady(function () {
          var f = l.toDashed(u),
            v = "data-" + f,
            g = document.querySelectorAll("[" + v + "]"),
            p = document.querySelectorAll(".js-" + f),
            c = l.makeArray(g).concat(l.makeArray(p)),
            _ = v + "-options",
            r = s.jQuery;
          c.forEach(function (i) {
            var t,
              e = i.getAttribute(v) || i.getAttribute(_);
            try {
              t = e && JSON.parse(e);
            } catch (m) {
              return void (
                d &&
                d.error("Error parsing " + v + " on " + i.className + ": " + m)
              );
            }
            var n = new o(i, t);
            r && r.data(i, u, n);
          });
        });
      }),
      l
    );
  }),
  (function (s, a) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          a
        )
      : "object" == typeof module && module.exports
      ? (module.exports = a(require("ev-emitter"), require("get-size")))
      : ((s.Outlayer = {}), (s.Outlayer.Item = a(s.EvEmitter, s.getSize)));
  })(window, function (s, a) {
    "use strict";
    function h(i, t) {
      i &&
        ((this.element = i),
        (this.layout = t),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    var o = document.documentElement.style,
      u = "string" == typeof o.transition ? "transition" : "WebkitTransition",
      f = "string" == typeof o.transform ? "transform" : "WebkitTransform",
      v = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[u],
      g = {
        transform: f,
        transition: u,
        transitionDuration: u + "Duration",
        transitionProperty: u + "Property",
        transitionDelay: u + "Delay",
      },
      p = (h.prototype = Object.create(s.prototype));
    (p.constructor = h),
      (p._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (p.handleEvent = function (i) {
        var t = "on" + i.type;
        this[t] && this[t](i);
      }),
      (p.getSize = function () {
        this.size = a(this.element);
      }),
      (p.css = function (i) {
        var t = this.element.style;
        for (var e in i) t[g[e] || e] = i[e];
      }),
      (p.getPosition = function () {
        var i = getComputedStyle(this.element),
          t = this.layout._getOption("originLeft"),
          e = this.layout._getOption("originTop"),
          n = i[t ? "left" : "right"],
          m = i[e ? "top" : "bottom"],
          y = parseFloat(n),
          I = parseFloat(m),
          z = this.layout.size;
        -1 != n.indexOf("%") && (y = (y / 100) * z.width),
          -1 != m.indexOf("%") && (I = (I / 100) * z.height),
          (y = isNaN(y) ? 0 : y),
          (I = isNaN(I) ? 0 : I),
          (I -= e ? z.paddingTop : z.paddingBottom),
          (this.position.x = y -= t ? z.paddingLeft : z.paddingRight),
          (this.position.y = I);
      }),
      (p.layoutPosition = function () {
        var i = this.layout.size,
          t = {},
          e = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          I = e ? "right" : "left";
        (t[e ? "left" : "right"] = this.getXValue(
          this.position.x + i[e ? "paddingLeft" : "paddingRight"]
        )),
          (t[I] = "");
        var b = n ? "bottom" : "top";
        (t[n ? "top" : "bottom"] = this.getYValue(
          this.position.y + i[n ? "paddingTop" : "paddingBottom"]
        )),
          (t[b] = ""),
          this.css(t),
          this.emitEvent("layout", [this]);
      }),
      (p.getXValue = function (i) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !t
          ? (i / this.layout.size.width) * 100 + "%"
          : i + "px";
      }),
      (p.getYValue = function (i) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && t
          ? (i / this.layout.size.height) * 100 + "%"
          : i + "px";
      }),
      (p._transitionTo = function (i, t) {
        this.getPosition();
        var e = this.position.x,
          n = this.position.y,
          m = i == this.position.x && t == this.position.y;
        if ((this.setPosition(i, t), !m || this.isTransitioning)) {
          var z = {};
          (z.transform = this.getTranslate(i - e, t - n)),
            this.transition({
              to: z,
              onTransitionEnd: { transform: this.layoutPosition },
              isCleaning: !0,
            });
        } else this.layoutPosition();
      }),
      (p.getTranslate = function (i, t) {
        return (
          "translate3d(" +
          (i = this.layout._getOption("originLeft") ? i : -i) +
          "px, " +
          (t = this.layout._getOption("originTop") ? t : -t) +
          "px, 0)"
        );
      }),
      (p.goTo = function (i, t) {
        this.setPosition(i, t), this.layoutPosition();
      }),
      (p.moveTo = p._transitionTo),
      (p.setPosition = function (i, t) {
        (this.position.x = parseFloat(i)), (this.position.y = parseFloat(t));
      }),
      (p._nonTransition = function (i) {
        for (var t in (this.css(i.to),
        i.isCleaning && this._removeStyles(i.to),
        i.onTransitionEnd))
          i.onTransitionEnd[t].call(this);
      }),
      (p.transition = function (i) {
        if (parseFloat(this.layout.options.transitionDuration)) {
          var t = this._transn;
          for (var e in i.onTransitionEnd) t.onEnd[e] = i.onTransitionEnd[e];
          for (e in i.to)
            (t.ingProperties[e] = !0), i.isCleaning && (t.clean[e] = !0);
          i.from && this.css(i.from),
            this.enableTransition(i.to),
            this.css(i.to),
            (this.isTransitioning = !0);
        } else this._nonTransition(i);
      });
    var c =
      "opacity," +
      (function d(i) {
        return i.replace(/([A-Z])/g, function (t) {
          return "-" + t.toLowerCase();
        });
      })(f);
    (p.enableTransition = function () {
      if (!this.isTransitioning) {
        var i = this.layout.options.transitionDuration;
        this.css({
          transitionProperty: c,
          transitionDuration: (i = "number" == typeof i ? i + "ms" : i),
          transitionDelay: this.staggerDelay || 0,
        }),
          this.element.addEventListener(v, this, !1);
      }
    }),
      (p.onwebkitTransitionEnd = function (i) {
        this.ontransitionend(i);
      }),
      (p.onotransitionend = function (i) {
        this.ontransitionend(i);
      });
    var _ = { "-webkit-transform": "transform" };
    (p.ontransitionend = function (i) {
      if (i.target === this.element) {
        var t = this._transn,
          e = _[i.propertyName] || i.propertyName;
        delete t.ingProperties[e],
          (function l(i) {
            for (var t in i) return !1;
            return !0;
          })(t.ingProperties) && this.disableTransition(),
          e in t.clean &&
            ((this.element.style[i.propertyName] = ""), delete t.clean[e]),
          e in t.onEnd && (t.onEnd[e].call(this), delete t.onEnd[e]),
          this.emitEvent("transitionEnd", [this]);
      }
    }),
      (p.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(v, this, !1),
          (this.isTransitioning = !1);
      }),
      (p._removeStyles = function (i) {
        var t = {};
        for (var e in i) t[e] = "";
        this.css(t);
      });
    var r = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (p.removeTransitionStyles = function () {
        this.css(r);
      }),
      (p.stagger = function (i) {
        (i = isNaN(i) ? 0 : i), (this.staggerDelay = i + "ms");
      }),
      (p.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (p.remove = function () {
        return u && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (p.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var i = this.layout.options,
          t = {};
        (t[this.getHideRevealTransitionEndProperty("visibleStyle")] =
          this.onRevealTransitionEnd),
          this.transition({
            from: i.hiddenStyle,
            to: i.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: t,
          });
      }),
      (p.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (p.getHideRevealTransitionEndProperty = function (i) {
        var t = this.layout.options[i];
        if (t.opacity) return "opacity";
        for (var e in t) return e;
      }),
      (p.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var i = this.layout.options,
          t = {};
        (t[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
          this.onHideTransitionEnd),
          this.transition({
            from: i.visibleStyle,
            to: i.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: t,
          });
      }),
      (p.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (p.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      h
    );
  }),
  (function (s, a) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (l, h, d, o) {
            return a(s, l, h, d, o);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = a(
          s,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (s.Outlayer = a(
          s,
          s.EvEmitter,
          s.getSize,
          s.fizzyUIUtils,
          s.Outlayer.Item
        ));
  })(window, function (s, a, l, h, d) {
    "use strict";
    function o(t, e) {
      var n = h.getQueryElement(t);
      if (n) {
        (this.element = n),
          g && (this.$element = g(this.element)),
          (this.options = h.extend({}, this.constructor.defaults)),
          this.option(e);
        var m = ++c;
        (this.element.outlayerGUID = m),
          (_[m] = this),
          this._create(),
          this._getOption("initLayout") && this.layout();
      } else v && v.error("Bad element for " + this.constructor.namespace + ": " + (n || t));
    }
    function u(t) {
      function e() {
        t.apply(this, arguments);
      }
      return ((e.prototype = Object.create(t.prototype)).constructor = e), e;
    }
    var v = s.console,
      g = s.jQuery,
      p = function () {},
      c = 0,
      _ = {};
    (o.namespace = "outlayer"),
      (o.Item = d),
      (o.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var r = o.prototype;
    h.extend(r, a.prototype),
      (r.option = function (t) {
        h.extend(this.options, t);
      }),
      (r._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (o.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (r._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          h.extend(this.element.style, this.options.containerStyle),
          this._getOption("resize") && this.bindResize();
      }),
      (r.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (r._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            n = this.constructor.Item,
            m = [],
            y = 0;
          y < e.length;
          y++
        ) {
          var z = new n(e[y], this);
          m.push(z);
        }
        return m;
      }),
      (r._filterFindItemElements = function (t) {
        return h.filterFindElements(t, this.options.itemSelector);
      }),
      (r.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (r.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant");
        this.layoutItems(this.items, void 0 !== t ? t : !this._isLayoutInited),
          (this._isLayoutInited = !0);
      }),
      (r._init = r.layout),
      (r._resetLayout = function () {
        this.getSize();
      }),
      (r.getSize = function () {
        this.size = l(this.element);
      }),
      (r._getMeasurement = function (t, e) {
        var n,
          m = this.options[t];
        m
          ? ("string" == typeof m
              ? (n = this.element.querySelector(m))
              : m instanceof HTMLElement && (n = m),
            (this[t] = n ? l(n)[e] : m))
          : (this[t] = 0);
      }),
      (r.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (r._getItemsForLayout = function (t) {
        return t.filter(function (e) {
          return !e.isIgnored;
        });
      }),
      (r._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var n = [];
          t.forEach(function (m) {
            var y = this._getItemLayoutPosition(m);
            (y.item = m), (y.isInstant = e || m.isLayoutInstant), n.push(y);
          }, this),
            this._processLayoutQueue(n);
        }
      }),
      (r._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (r._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (e, n) {
            this._positionItem(e.item, e.x, e.y, e.isInstant, n);
          }, this);
      }),
      (r.updateStagger = function () {
        var t = this.options.stagger;
        return null == t
          ? void (this.stagger = 0)
          : ((this.stagger = (function f(t) {
              if ("number" == typeof t) return t;
              var e = t.match(/(^\d*\.?\d*)(\w*)/),
                n = e && e[1],
                m = e && e[2];
              return n.length ? (n = parseFloat(n)) * (i[m] || 1) : 0;
            })(t)),
            this.stagger);
      }),
      (r._positionItem = function (t, e, n, m, y) {
        m ? t.goTo(e, n) : (t.stagger(y * this.stagger), t.moveTo(e, n));
      }),
      (r._postLayout = function () {
        this.resizeContainer();
      }),
      (r.resizeContainer = function () {
        if (this._getOption("resizeContainer")) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (r._getContainerSize = p),
      (r._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var n = this.size;
          n.isBorderBox &&
            (t += e
              ? n.paddingLeft +
                n.paddingRight +
                n.borderLeftWidth +
                n.borderRightWidth
              : n.paddingBottom +
                n.paddingTop +
                n.borderTopWidth +
                n.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (r._emitCompleteOnItems = function (t, e) {
        function n() {
          y.dispatchEvent(t + "Complete", null, [e]);
        }
        function m() {
          ++z == I && n();
        }
        var y = this,
          I = e.length;
        if (e && I) {
          var z = 0;
          e.forEach(function (x) {
            x.once(t, m);
          });
        } else n();
      }),
      (r.dispatchEvent = function (t, e, n) {
        var m = e ? [e].concat(n) : n;
        if ((this.emitEvent(t, m), g))
          if (((this.$element = this.$element || g(this.element)), e)) {
            var y = g.Event(e);
            (y.type = t), this.$element.trigger(y, n);
          } else this.$element.trigger(t, n);
      }),
      (r.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (r.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (r.stamp = function (t) {
        (t = this._find(t)) &&
          ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
      }),
      (r.unstamp = function (t) {
        (t = this._find(t)) &&
          t.forEach(function (e) {
            h.removeFrom(this.stamps, e), this.unignore(e);
          }, this);
      }),
      (r._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            h.makeArray(t)
          );
      }),
      (r._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (r._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (r._manageStamp = p),
      (r._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          n = this._boundingRect,
          m = l(t);
        return {
          left: e.left - n.left - m.marginLeft,
          top: e.top - n.top - m.marginTop,
          right: n.right - e.right - m.marginRight,
          bottom: n.bottom - e.bottom - m.marginBottom,
        };
      }),
      (r.handleEvent = h.handleEvent),
      (r.bindResize = function () {
        s.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (r.unbindResize = function () {
        s.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (r.onresize = function () {
        this.resize();
      }),
      h.debounceMethod(o, "onresize", 100),
      (r.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (r.needsResizeLayout = function () {
        var t = l(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth;
      }),
      (r.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (r.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (r.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var n = this.items.slice(0);
          (this.items = e.concat(n)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(n);
        }
      }),
      (r.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (n, m) {
            n.stagger(m * e), n.reveal();
          });
        }
      }),
      (r.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (n, m) {
            n.stagger(m * e), n.hide();
          });
        }
      }),
      (r.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (r.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (r.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var n = this.items[e];
          if (n.element == t) return n;
        }
      }),
      (r.getItems = function (t) {
        t = h.makeArray(t);
        var e = [];
        return (
          t.forEach(function (n) {
            var m = this.getItem(n);
            m && e.push(m);
          }, this),
          e
        );
      }),
      (r.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (n) {
              n.remove(), h.removeFrom(this.items, n);
            }, this);
      }),
      (r.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (n) {
            n.destroy();
          }),
          this.unbindResize(),
          delete _[this.element.outlayerGUID],
          delete this.element.outlayerGUID,
          g && g.removeData(this.element, this.constructor.namespace);
      }),
      (o.data = function (t) {
        var e = (t = h.getQueryElement(t)) && t.outlayerGUID;
        return e && _[e];
      }),
      (o.create = function (t, e) {
        var n = u(o);
        return (
          (n.defaults = h.extend({}, o.defaults)),
          h.extend(n.defaults, e),
          (n.compatOptions = h.extend({}, o.compatOptions)),
          (n.namespace = t),
          (n.data = o.data),
          (n.Item = u(d)),
          h.htmlInit(n, t),
          g && g.bridget && g.bridget(t, n),
          n
        );
      });
    var i = { ms: 1, s: 1e3 };
    return (o.Item = d), o;
  }),
  (function (s, a) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/item", ["outlayer/outlayer"], a)
      : "object" == typeof module && module.exports
      ? (module.exports = a(require("outlayer")))
      : ((s.Isotope = s.Isotope || {}), (s.Isotope.Item = a(s.Outlayer)));
  })(window, function (s) {
    "use strict";
    function a() {
      s.Item.apply(this, arguments);
    }
    var l = (a.prototype = Object.create(s.Item.prototype)),
      h = l._create;
    (l._create = function () {
      (this.id = this.layout.itemGUID++), h.call(this), (this.sortData = {});
    }),
      (l.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var o = this.layout.options.getSortData,
            u = this.layout._sorters;
          for (var f in o) this.sortData[f] = (0, u[f])(this.element, this);
        }
      });
    var d = l.destroy;
    return (
      (l.destroy = function () {
        d.apply(this, arguments), this.css({ display: "" });
      }),
      a
    );
  }),
  (function (s, a) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          a
        )
      : "object" == typeof module && module.exports
      ? (module.exports = a(require("get-size"), require("outlayer")))
      : ((s.Isotope = s.Isotope || {}),
        (s.Isotope.LayoutMode = a(s.getSize, s.Outlayer)));
  })(window, function (s, a) {
    "use strict";
    function l(o) {
      (this.isotope = o),
        o &&
          ((this.options = o.options[this.namespace]),
          (this.element = o.element),
          (this.items = o.filteredItems),
          (this.size = o.size));
    }
    var h = l.prototype;
    return (
      [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ].forEach(function (o) {
        h[o] = function () {
          return a.prototype[o].apply(this.isotope, arguments);
        };
      }),
      (h.needsVerticalResizeLayout = function () {
        var o = s(this.isotope.element);
        return (
          this.isotope.size &&
          o &&
          o.innerHeight != this.isotope.size.innerHeight
        );
      }),
      (h._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (h.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (h.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (h.getSegmentSize = function (o, u) {
        var f = o + u,
          v = "outer" + u;
        if ((this._getMeasurement(f, v), !this[f])) {
          var g = this.getFirstItemSize();
          this[f] = (g && g[v]) || this.isotope.size["inner" + u];
        }
      }),
      (h.getFirstItemSize = function () {
        var o = this.isotope.filteredItems[0];
        return o && o.element && s(o.element);
      }),
      (h.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (h.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (l.modes = {}),
      (l.create = function (o, u) {
        function f() {
          l.apply(this, arguments);
        }
        return (
          ((f.prototype = Object.create(h)).constructor = f),
          u && (f.options = u),
          (f.prototype.namespace = o),
          (l.modes[o] = f),
          f
        );
      }),
      l
    );
  }),
  (function (s, a) {
    "function" == typeof define && define.amd
      ? define(
          "masonry-layout/masonry",
          ["outlayer/outlayer", "get-size/get-size"],
          a
        )
      : "object" == typeof module && module.exports
      ? (module.exports = a(require("outlayer"), require("get-size")))
      : (s.Masonry = a(s.Outlayer, s.getSize));
  })(window, function (s, a) {
    var l = s.create("masonry");
    l.compatOptions.fitWidth = "isFitWidth";
    var h = l.prototype;
    return (
      (h._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var d = 0; d < this.cols; d++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (h.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var d = this.items[0],
            o = d && d.element;
          this.columnWidth = (o && a(o).outerWidth) || this.containerWidth;
        }
        var u = (this.columnWidth += this.gutter),
          f = this.containerWidth + this.gutter,
          v = f / u,
          g = u - (f % u);
        (v = Math[g && g < 1 ? "round" : "floor"](v)),
          (this.cols = Math.max(v, 1));
      }),
      (h.getContainerWidth = function () {
        var d = this._getOption("fitWidth"),
          u = a(d ? this.element.parentNode : this.element);
        this.containerWidth = u && u.innerWidth;
      }),
      (h._getItemLayoutPosition = function (d) {
        d.getSize();
        var o = d.size.outerWidth % this.columnWidth,
          f = Math[o && o < 1 ? "round" : "ceil"](
            d.size.outerWidth / this.columnWidth
          );
        f = Math.min(f, this.cols);
        for (
          var g = this[
              this.options.horizontalOrder
                ? "_getHorizontalColPosition"
                : "_getTopColPosition"
            ](f, d),
            p = { x: this.columnWidth * g.col, y: g.y },
            c = g.y + d.size.outerHeight,
            _ = f + g.col,
            r = g.col;
          r < _;
          r++
        )
          this.colYs[r] = c;
        return p;
      }),
      (h._getTopColPosition = function (d) {
        var o = this._getTopColGroup(d),
          u = Math.min.apply(Math, o);
        return { col: o.indexOf(u), y: u };
      }),
      (h._getTopColGroup = function (d) {
        if (d < 2) return this.colYs;
        for (var o = [], u = this.cols + 1 - d, f = 0; f < u; f++)
          o[f] = this._getColGroupY(f, d);
        return o;
      }),
      (h._getColGroupY = function (d, o) {
        if (o < 2) return this.colYs[d];
        var u = this.colYs.slice(d, d + o);
        return Math.max.apply(Math, u);
      }),
      (h._getHorizontalColPosition = function (d, o) {
        var u = this.horizontalColIndex % this.cols;
        return (
          (u = d > 1 && u + d > this.cols ? 0 : u),
          (this.horizontalColIndex =
            o.size.outerWidth && o.size.outerHeight
              ? u + d
              : this.horizontalColIndex),
          { col: u, y: this._getColGroupY(u, d) }
        );
      }),
      (h._manageStamp = function (d) {
        var o = a(d),
          u = this._getElementOffset(d),
          v = this._getOption("originLeft") ? u.left : u.right,
          g = v + o.outerWidth,
          p = Math.floor(v / this.columnWidth);
        p = Math.max(0, p);
        var c = Math.floor(g / this.columnWidth);
        (c -= g % this.columnWidth ? 0 : 1), (c = Math.min(this.cols - 1, c));
        for (
          var r =
              (this._getOption("originTop") ? u.top : u.bottom) + o.outerHeight,
            i = p;
          i <= c;
          i++
        )
          this.colYs[i] = Math.max(r, this.colYs[i]);
      }),
      (h._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var d = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (d.width = this._getContainerFitWidth()),
          d
        );
      }),
      (h._getContainerFitWidth = function () {
        for (var d = 0, o = this.cols; --o && 0 === this.colYs[o]; ) d++;
        return (this.cols - d) * this.columnWidth - this.gutter;
      }),
      (h.needsResizeLayout = function () {
        var d = this.containerWidth;
        return this.getContainerWidth(), d != this.containerWidth;
      }),
      l
    );
  }),
  (function (s, a) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-modes/masonry",
          ["../layout-mode", "masonry-layout/masonry"],
          a
        )
      : "object" == typeof module && module.exports
      ? (module.exports = a(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : a(s.Isotope.LayoutMode, s.Masonry);
  })(window, function (s, a) {
    "use strict";
    var l = s.create("masonry"),
      h = l.prototype,
      d = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var o in a.prototype) d[o] || (h[o] = a.prototype[o]);
    var u = h.measureColumns;
    h.measureColumns = function () {
      (this.items = this.isotope.filteredItems), u.call(this);
    };
    var f = h._getOption;
    return (
      (h._getOption = function (v) {
        return "fitWidth" == v
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : f.apply(this.isotope, arguments);
      }),
      l
    );
  }),
  (function (s, a) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], a)
      : "object" == typeof exports
      ? (module.exports = a(require("../layout-mode")))
      : a(s.Isotope.LayoutMode);
  })(window, function (s) {
    "use strict";
    var a = s.create("fitRows"),
      l = a.prototype;
    return (
      (l._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (l._getItemLayoutPosition = function (h) {
        h.getSize();
        var d = h.size.outerWidth + this.gutter;
        0 !== this.x &&
          d + this.x > this.isotope.size.innerWidth + this.gutter &&
          ((this.x = 0), (this.y = this.maxY));
        var u = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + h.size.outerHeight)),
          (this.x += d),
          u
        );
      }),
      (l._getContainerSize = function () {
        return { height: this.maxY };
      }),
      a
    );
  }),
  (function (s, a) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], a)
      : "object" == typeof module && module.exports
      ? (module.exports = a(require("../layout-mode")))
      : a(s.Isotope.LayoutMode);
  })(window, function (s) {
    "use strict";
    var a = s.create("vertical", { horizontalAlignment: 0 }),
      l = a.prototype;
    return (
      (l._resetLayout = function () {
        this.y = 0;
      }),
      (l._getItemLayoutPosition = function (h) {
        h.getSize();
        var d =
            (this.isotope.size.innerWidth - h.size.outerWidth) *
            this.options.horizontalAlignment,
          o = this.y;
        return (this.y += h.size.outerHeight), { x: d, y: o };
      }),
      (l._getContainerSize = function () {
        return { height: this.y };
      }),
      a
    );
  }),
  (function (s, a) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
          ],
          function (l, h, d, o, u, f) {
            return a(s, l, 0, d, o, u, f);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = a(
          s,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        ))
      : (s.Isotope = a(
          s,
          s.Outlayer,
          0,
          s.matchesSelector,
          s.fizzyUIUtils,
          s.Isotope.Item,
          s.Isotope.LayoutMode
        ));
  })(window, function (s, a, l, h, d, o, u) {
    var v = s.jQuery,
      g = String.prototype.trim
        ? function (i) {
            return i.trim();
          }
        : function (i) {
            return i.replace(/^\s+|\s+$/g, "");
          },
      p = a.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (p.Item = o), (p.LayoutMode = u);
    var c = p.prototype;
    (c._create = function () {
      for (var i in ((this.itemGUID = 0),
      (this._sorters = {}),
      this._getSorters(),
      a.prototype._create.call(this),
      (this.modes = {}),
      (this.filteredItems = this.items),
      (this.sortHistory = ["original-order"]),
      u.modes))
        this._initLayoutMode(i);
    }),
      (c.reloadItems = function () {
        (this.itemGUID = 0), a.prototype.reloadItems.call(this);
      }),
      (c._itemize = function () {
        for (
          var i = a.prototype._itemize.apply(this, arguments), t = 0;
          t < i.length;
          t++
        ) {
          var e = i[t];
          e.id = this.itemGUID++;
        }
        return this._updateItemsSortData(i), i;
      }),
      (c._initLayoutMode = function (i) {
        var t = u.modes[i],
          e = this.options[i] || {};
        (this.options[i] = t.options ? d.extend(t.options, e) : e),
          (this.modes[i] = new t(this));
      }),
      (c.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout")
          ? void this.arrange()
          : void this._layout();
      }),
      (c._layout = function () {
        var i = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, i),
          (this._isLayoutInited = !0);
      }),
      (c.arrange = function (i) {
        this.option(i), this._getIsInstant();
        var t = this._filter(this.items);
        (this.filteredItems = t.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [t])
            : this._hideReveal(t),
          this._sort(),
          this._layout();
      }),
      (c._init = c.arrange),
      (c._hideReveal = function (i) {
        this.reveal(i.needReveal), this.hide(i.needHide);
      }),
      (c._getIsInstant = function () {
        var i = this._getOption("layoutInstant"),
          t = void 0 !== i ? i : !this._isLayoutInited;
        return (this._isInstant = t), t;
      }),
      (c._bindArrangeComplete = function () {
        function i() {
          t &&
            e &&
            n &&
            m.dispatchEvent("arrangeComplete", null, [m.filteredItems]);
        }
        var t,
          e,
          n,
          m = this;
        this.once("layoutComplete", function () {
          (t = !0), i();
        }),
          this.once("hideComplete", function () {
            (e = !0), i();
          }),
          this.once("revealComplete", function () {
            (n = !0), i();
          });
      }),
      (c._filter = function (i) {
        for (
          var t = this.options.filter,
            e = [],
            n = [],
            m = [],
            y = this._getFilterTest((t = t || "*")),
            I = 0;
          I < i.length;
          I++
        ) {
          var z = i[I];
          if (!z.isIgnored) {
            var x = y(z);
            x && e.push(z),
              x && z.isHidden ? n.push(z) : x || z.isHidden || m.push(z);
          }
        }
        return { matches: e, needReveal: n, needHide: m };
      }),
      (c._getFilterTest = function (i) {
        return v && this.options.isJQueryFiltering
          ? function (t) {
              return v(t.element).is(i);
            }
          : "function" == typeof i
          ? function (t) {
              return i(t.element);
            }
          : function (t) {
              return h(t.element, i);
            };
      }),
      (c.updateSortData = function (i) {
        var t;
        i ? ((i = d.makeArray(i)), (t = this.getItems(i))) : (t = this.items),
          this._getSorters(),
          this._updateItemsSortData(t);
      }),
      (c._getSorters = function () {
        var i = this.options.getSortData;
        for (var t in i) this._sorters[t] = _(i[t]);
      }),
      (c._updateItemsSortData = function (i) {
        for (var t = i && i.length, e = 0; t && e < t; e++)
          i[e].updateSortData();
      });
    var _ = function i(e) {
      if ("string" != typeof e) return e;
      var n = g(e).split(" "),
        m = n[0],
        y = m.match(/^\[(.+)\]$/),
        z = (function t(e, n) {
          return e
            ? function (m) {
                return m.getAttribute(e);
              }
            : function (m) {
                var y = m.querySelector(n);
                return y && y.textContent;
              };
        })(y && y[1], m),
        x = p.sortDataParsers[n[1]];
      return x
        ? function (S) {
            return S && x(z(S));
          }
        : function (S) {
            return S && z(S);
          };
    };
    (p.sortDataParsers = {
      parseInt: function (i) {
        return parseInt(i, 10);
      },
      parseFloat: function (i) {
        return parseFloat(i);
      },
    }),
      (c._sort = function () {
        if (this.options.sortBy) {
          var i = d.makeArray(this.options.sortBy);
          this._getIsSameSortBy(i) ||
            (this.sortHistory = i.concat(this.sortHistory));
          var t = (function f(i, t) {
            return function (e, n) {
              for (var m = 0; m < i.length; m++) {
                var y = i[m],
                  I = e.sortData[y],
                  z = n.sortData[y];
                if (I > z || I < z)
                  return (
                    (I > z ? 1 : -1) * ((void 0 !== t[y] ? t[y] : t) ? 1 : -1)
                  );
              }
              return 0;
            };
          })(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(t);
        }
      }),
      (c._getIsSameSortBy = function (i) {
        for (var t = 0; t < i.length; t++)
          if (i[t] != this.sortHistory[t]) return !1;
        return !0;
      }),
      (c._mode = function () {
        var i = this.options.layoutMode,
          t = this.modes[i];
        if (!t) throw new Error("No layout mode: " + i);
        return (t.options = this.options[i]), t;
      }),
      (c._resetLayout = function () {
        a.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (c._getItemLayoutPosition = function (i) {
        return this._mode()._getItemLayoutPosition(i);
      }),
      (c._manageStamp = function (i) {
        this._mode()._manageStamp(i);
      }),
      (c._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (c.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (c.appended = function (i) {
        var t = this.addItems(i);
        if (t.length) {
          var e = this._filterRevealAdded(t);
          this.filteredItems = this.filteredItems.concat(e);
        }
      }),
      (c.prepended = function (i) {
        var t = this._itemize(i);
        if (t.length) {
          this._resetLayout(), this._manageStamps();
          var e = this._filterRevealAdded(t);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = e.concat(this.filteredItems)),
            (this.items = t.concat(this.items));
        }
      }),
      (c._filterRevealAdded = function (i) {
        var t = this._filter(i);
        return (
          this.hide(t.needHide),
          this.reveal(t.matches),
          this.layoutItems(t.matches, !0),
          t.matches
        );
      }),
      (c.insert = function (i) {
        var t = this.addItems(i);
        if (t.length) {
          var e,
            m = t.length;
          for (e = 0; e < m; e++) this.element.appendChild(t[e].element);
          var y = this._filter(t).matches;
          for (e = 0; e < m; e++) t[e].isLayoutInstant = !0;
          for (this.arrange(), e = 0; e < m; e++) delete t[e].isLayoutInstant;
          this.reveal(y);
        }
      });
    var r = c.remove;
    return (
      (c.remove = function (i) {
        i = d.makeArray(i);
        var t = this.getItems(i);
        r.call(this, i);
        for (var e = t && t.length, n = 0; e && n < e; n++)
          d.removeFrom(this.filteredItems, t[n]);
      }),
      (c.shuffle = function () {
        for (var i = 0; i < this.items.length; i++)
          this.items[i].sortData.random = Math.random();
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (c._noTransition = function (i, t) {
        var e = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = i.apply(this, t);
        return (this.options.transitionDuration = e), n;
      }),
      (c.getFilteredItemElements = function () {
        return this.filteredItems.map(function (i) {
          return i.element;
        });
      }),
      p
    );
  });
