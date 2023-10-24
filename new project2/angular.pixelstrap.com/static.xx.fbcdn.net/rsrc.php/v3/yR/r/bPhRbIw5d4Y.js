/*FB_PKG_DELIM*/

__d(
  "getOpacityStyleName",
  [],
  function (a, b, c, d, e, f) {
    var g = !1,
      h = null;
    function a() {
      if (!g) {
        if (document.body && "opacity" in document.body.style) h = "opacity";
        else {
          var a = document.createElement("div");
          a.style.filter = "alpha(opacity=100)";
          a.style.filter && (h = "filter");
        }
        g = !0;
      }
      return h;
    }
    f["default"] = a;
  },
  66
);
__d(
  "StyleCore",
  [
    "invariant",
    "camelize",
    "containsNode",
    "err",
    "getOpacityStyleName",
    "getStyleProperty",
    "hyphenate",
  ],
  function (a, b, c, d, e, f, g, h) {
    function i(a, b) {
      a = o.get(a, b);
      return a === "auto" || a === "scroll";
    }
    var j = new RegExp(
      "\\s*([^\\s:]+)\\s*:\\s*([^;('\"]*(?:(?:\\([^)]*\\)|\"[^\"]*\"|'[^']*')[^;(?:'\"]*)*)(?:;|$)",
      "g"
    );
    function k(a) {
      var b = {};
      a.replace(j, function (a, c, d) {
        b[c] = d;
        return d;
      });
      return b;
    }
    function l(a) {
      var b = "";
      for (var c in a) a[c] && (b += c + ":" + a[c] + ";");
      return b;
    }
    function m(a) {
      return a !== "" ? "alpha(opacity=" + a * 100 + ")" : "";
    }
    function n(a, b, d) {
      switch (c("hyphenate")(b)) {
        case "font-weight":
        case "line-height":
        case "opacity":
        case "z-index":
        case "animation-iteration-count":
        case "-webkit-animation-iteration-count":
          break;
        case "width":
        case "height":
          var e = parseInt(d, 10) < 0;
          e && h(0, 11849, a, b, d);
        default:
          isNaN(d) || !d || d === "0" || h(0, 11850, a, b, d, d + "px");
          break;
      }
    }
    var o = {
      set: function (a, b, d) {
        n("Style.set", b, d);
        if (a == null) return;
        a = a.style;
        switch (b) {
          case "opacity":
            c("getOpacityStyleName")() === "filter"
              ? (a.filter = m(d))
              : (a.opacity = d);
            break;
          case "float":
            a.cssFloat = a.styleFloat = d || "";
            break;
          default:
            try {
              a[c("camelize")(b)] = d;
            } catch (a) {
              throw c("err")('Style.set: "%s" argument is invalid: %s', b, d);
            }
        }
      },
      apply: function (a, b) {
        var d;
        for (d in b) n("Style.apply", d, b[d]);
        "opacity" in b &&
          c("getOpacityStyleName")() === "filter" &&
          ((b.filter = m(b.opacity)), delete b.opacity);
        var e = k(a.style.cssText);
        for (d in b) {
          var f = b[d];
          delete b[d];
          var g = c("hyphenate")(d);
          for (var h in e) (h === g || h.indexOf(g + "-") === 0) && delete e[h];
          b[g] = f;
        }
        Object.assign(e, b);
        a.style.cssText = l(e);
      },
      get: c("getStyleProperty"),
      getFloat: function (a, b) {
        return parseFloat(o.get(a, b), 10);
      },
      getOpacity: function (a) {
        if (c("getOpacityStyleName")() === "filter") {
          var b = o.get(a, "filter");
          if (b) {
            b = /(\d+(?:\.\d+)?)/.exec(b);
            if (b) return parseFloat(b.pop()) / 100;
          }
        }
        return o.getFloat(a, "opacity") || 1;
      },
      isFixed: function (a) {
        while (c("containsNode")(document.body, a)) {
          if (o.get(a, "position") === "fixed") return !0;
          a = a.parentNode;
        }
        return !1;
      },
      getScrollParent: function (a) {
        if (!a) return null;
        while (a && a !== document.body) {
          if (i(a, "overflow") || i(a, "overflowY") || i(a, "overflowX"))
            return a;
          a = a.parentNode;
        }
        return window;
      },
    };
    a = o;
    g["default"] = a;
  },
  98
);
__d(
  "Style",
  ["$", "StyleCore"],
  function (a, b, c, d, e, f, g) {
    a = babelHelpers["extends"]({}, c("StyleCore"), {
      get: function (a, b) {
        typeof a === "string" && (a = c("$")(a));
        return c("StyleCore").get(a, b);
      },
      getFloat: function (a, b) {
        typeof a === "string" && (a = c("$")(a));
        return c("StyleCore").getFloat(a, b);
      },
    });
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "PlatformDialog",
  ["cx", "CSS", "DOMEvent", "DOMEventListener"],
  function (a, b, c, d, e, f, g) {
    var h;
    a = (function () {
      "use strict";
      a.getInstance = function () {
        return h;
      };
      function a(a, c, d) {
        var e = this;
        h = this;
        this.$1 = a;
        this.$2 = c;
        this.$3 = !1;
        b("DOMEventListener").add(this.$1, "submit", function (c) {
          if (e.$3) {
            new (b("DOMEvent"))(c).kill();
            return;
          }
          e.$3 = !0;
          d && b("CSS").addClass(a, "_32qa");
        });
      }
      var c = a.prototype;
      c.getForm = function () {
        return this.$1;
      };
      c.getDisplay = function () {
        return this.$2;
      };
      c.hasBeenSubmitted = function () {
        return this.$3;
      };
      return a;
    })();
    a.RESPONSE = "platform/dialog/response";
    e.exports = a;
  },
  null
);
__d(
  "BanzaiAdapter",
  [
    "invariant",
    "Arbiter",
    "BanzaiConfig",
    "BanzaiConsts",
    "BanzaiStorage",
    "QueryString",
    "Run",
    "StaticSiteData",
    "TimeSlice",
    "URI",
    "UserAgent",
    "ZeroRewrites",
    "getAsyncParams",
    "isInIframe",
    "lowerFacebookDomain",
    "once",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = [],
      j = new (c("Arbiter"))(),
      k = c("isInIframe")(),
      l = "/ajax/bz",
      m = "POST",
      n = {
        config: c("BanzaiConfig"),
        useBeacon: !0,
        getEndPointUrl: function (a) {
          a = c("getAsyncParams")(m);
          delete a[c("StaticSiteData").csr_key];
          a = c("QueryString").appendToUrl(l, a);
          a.length <= 2e3 || h(0, 21850, a);
          return a;
        },
        getStorage: function () {
          return c("BanzaiStorage");
        },
        getTopLevel: function () {
          return k && c("lowerFacebookDomain").isValidDocumentDomain()
            ? window.top
            : null;
        },
        inform: function (a) {
          j.inform(a);
        },
        subscribe: function (a, b) {
          return j.subscribe(a, b);
        },
        wrapInTimeSlice: function (a, b) {
          return c("TimeSlice").guard(
            function () {
              a();
            },
            b,
            { propagationType: c("TimeSlice").PropagationType.ORPHAN }
          );
        },
        cleanup: function () {
          var a = i;
          i = [];
          a.forEach(function (a) {
            a.readyState < 4 && a.abort();
          });
        },
        preferredCompressionMethod: c("once")(function () {
          return "snappy_base64";
        }),
        readyToSend: function () {
          return c("UserAgent").isBrowser("IE <= 8") || navigator.onLine;
        },
        send: function (a, b, e, f) {
          var g = n.getEndPointUrl(!1);
          g = d("ZeroRewrites").rewriteURI(new (c("URI"))(g));
          var h = d("ZeroRewrites").getTransportBuilderForURI(g)();
          h.open(m, g.toString(), !0);
          h.onreadystatechange = function () {
            if (h.readyState >= 4) {
              var a = i.indexOf(h);
              a >= 0 && i.splice(a, 1);
              try {
                a = h.status;
              } catch (b) {
                a = 0;
              }
              a == 200
                ? (b && b(), f || n.inform(c("BanzaiConsts").OK))
                : (e && e(a), f || n.inform(c("BanzaiConsts").ERROR));
            }
          };
          i.push(h);
          h.send(a, !1);
        },
        setHooks: function (a) {},
        setUnloadHook: function (a) {
          d("Run").onAfterUnload(a._unload);
        },
        onUnload: function (a) {
          d("Run").onAfterUnload(a);
        },
        isOkToSendViaBeacon: function () {
          return !0;
        },
      };
    a = n;
    g["default"] = a;
  },
  98
);
__d(
  "ArbiterFrame",
  [],
  function (a, b, c, d, e, f) {
    a = {
      inform: function (a, b, c) {
        var d = parent.frames,
          e = d.length,
          f;
        b.crossFrame = !0;
        for (var g = 0; g < e; g++) {
          f = d[g];
          try {
            if (!f || f == window) continue;
            f.require
              ? f.require("Arbiter").inform(a, b, c)
              : f.ServerJSAsyncLoader && f.ServerJSAsyncLoader.wakeUp(a, b, c);
          } catch (a) {}
        }
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "isAdsExcelAddinURI",
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)fbaddins\\.com$", "i"),
      h = ["https"];
    function a(a) {
      if (a.isEmpty() && a.toString() !== "#") return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !1
        : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
    }
    f["default"] = a;
  },
  66
);
__d(
  "isValidAsyncSignalURI",
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp(
        "((^|\\.)instagram\\.com$)|((^|\\.)wit\\.ai$)|((^|\\.)accountkit\\.com$)",
        "i"
      ),
      h = ["https"];
    function a(a) {
      if (a.isEmpty() && a.toString() !== "#") return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !1
        : h.includes(a.getProtocol()) && g.test(a.getDomain());
    }
    f["default"] = a;
  },
  66
);
__d(
  "AsyncSignal",
  [
    "ErrorGuard",
    "Promise",
    "QueryString",
    "Run",
    "TimeSlice",
    "TrackingConfig",
    "URI",
    "ZeroRewrites",
    "getAsyncParams",
    "isAdsExcelAddinURI",
    "isFacebookURI",
    "isMessengerDotComURI",
    "isValidAsyncSignalURI",
    "isWorkplaceDotComURI",
    "memoize",
    "promiseDone",
  ],
  function (a, b, c, d, e, f) {
    var g, h, i;
    function a(a, c) {
      (this.data = c || {}),
        (this.uri = a.toString()),
        b("TrackingConfig").domain &&
          this.uri.charAt(0) == "/" &&
          (this.uri = b("TrackingConfig").domain + this.uri);
    }
    a.prototype.setHandler = function (a) {
      this.handler = a;
      return this;
    };
    a.prototype.setTimeout = function (a) {
      this.timeout = a;
      return this;
    };
    a.prototype.send = function () {
      b("TimeSlice").guard(this._send.bind(this), "AsyncSignal send", {
        propagationType: b("TimeSlice").PropagationType.ORPHAN,
      })();
    };
    a.prototype._send = function () {
      var a = this.handler,
        c = this.data;
      c.asyncSignal = ((Math.random() * 1e4) | 0) + 1;
      var d = b("ZeroRewrites").rewriteURI(new (g || (g = b("URI")))(this.uri));
      d =
        b("isFacebookURI")(d) ||
        b("isMessengerDotComURI")(d) ||
        b("isAdsExcelAddinURI")(d) ||
        b("isWorkplaceDotComURI")(d) ||
        b("isValidAsyncSignalURI")(d);
      if (d) Object.assign(c, b("getAsyncParams")("POST"));
      else
        throw new Error(
          "'" +
            this.uri +
            "' is an external URL, you should not send async signals to offsite links."
        );
      var e = b("QueryString").appendToUrl(this.uri, c);
      i ||
        (i = new (b("Promise"))(function (a) {
          b("Run").onAfterLoad(a);
        }));
      d = i.then(function () {
        return new (b("Promise"))(function (a, b) {
          var c = new Image();
          c.onload = a;
          c.onerror = c.onabort = b;
          c.src = e;
        });
      });
      if (a) {
        var f = !1,
          j = b("memoize")(function () {
            (h || (h = b("ErrorGuard"))).applyWithGuard(a, null, [f]);
          });
        b("promiseDone")(
          d.then(function () {
            (f = !0), j();
          }, j)
        );
        this.timeout && setTimeout(j, this.timeout);
      }
      return this;
    };
    e.exports = a;
  },
  null
);
__d(
  "UserAgent_DEPRECATED",
  [],
  function (a, b, c, d, e, f) {
    var g = !1,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w;
    function x() {
      if (g) return;
      g = !0;
      var a = navigator.userAgent,
        b =
          /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
            a
          ),
        c = /(Mac OS X)|(Windows)|(Linux)/.exec(a);
      s = /\b(iPhone|iP[ao]d)/.exec(a);
      t = /\b(iP[ao]d)/.exec(a);
      q = /Android/i.exec(a);
      u = /FBAN\/\w+;/i.exec(a);
      v = /FBAN\/mLite;/i.exec(a);
      w = /Mobile/i.exec(a);
      r = !!/Win64/.exec(a);
      if (b) {
        h = b[1] ? parseFloat(b[1]) : b[5] ? parseFloat(b[5]) : NaN;
        h && document && document.documentMode && (h = document.documentMode);
        var d = /(?:Trident\/(\d+.\d+))/.exec(a);
        m = d ? parseFloat(d[1]) + 4 : h;
        i = b[2] ? parseFloat(b[2]) : NaN;
        j = b[3] ? parseFloat(b[3]) : NaN;
        k = b[4] ? parseFloat(b[4]) : NaN;
        k
          ? ((b = /(?:Chrome\/(\d+\.\d+))/.exec(a)),
            (l = b && b[1] ? parseFloat(b[1]) : NaN))
          : (l = NaN);
      } else h = i = j = l = k = NaN;
      if (c) {
        if (c[1]) {
          d = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
          n = d ? parseFloat(d[1].replace("_", ".")) : !0;
        } else n = !1;
        o = !!c[2];
        p = !!c[3];
      } else n = o = p = !1;
    }
    function y() {
      return x() || h;
    }
    function a() {
      return x() || m > h;
    }
    function b() {
      return y() && r;
    }
    function c() {
      return x() || i;
    }
    function d() {
      return x() || j;
    }
    function z() {
      return x() || k;
    }
    function e() {
      return z();
    }
    function A() {
      return x() || l;
    }
    function B() {
      return x() || o;
    }
    function C() {
      return x() || n;
    }
    function D() {
      return x() || p;
    }
    function E() {
      return x() || s;
    }
    function F() {
      return x() || s || t || q || w;
    }
    function G() {
      return x() || v != null ? null : u;
    }
    function H() {
      return x() || q;
    }
    function I() {
      return x() || t;
    }
    f.ie = y;
    f.ieCompatibilityMode = a;
    f.ie64 = b;
    f.firefox = c;
    f.opera = d;
    f.webkit = z;
    f.safari = e;
    f.chrome = A;
    f.windows = B;
    f.osx = C;
    f.linux = D;
    f.iphone = E;
    f.mobile = F;
    f.nativeApp = G;
    f.android = H;
    f.ipad = I;
  },
  66
);
__d(
  "isScalar",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      return /string|number|boolean/.test(typeof a);
    }
    f["default"] = a;
  },
  66
);
__d(
  "DOM",
  [
    "$",
    "DOMQuery",
    "Event",
    "FBLogger",
    "FbtResultBase",
    "HTML",
    "UserAgent_DEPRECATED",
    "createArrayFromMixed",
    "fb-error",
    "isNode",
    "isScalar",
    "isTextNode",
  ],
  function (a, b, c, d, e, f, g) {
    a = function (a, b, c) {
      a = document.createElement(a);
      b && h.setAttributes(a, b);
      c != null && h.setContent(a, c);
      return a;
    };
    var h = {
      find: d("DOMQuery").find,
      findPushSafe: d("DOMQuery").findPushSafe,
      scry: d("DOMQuery").scry,
      getSelection: d("DOMQuery").getSelection,
      contains: d("DOMQuery").contains,
      getRootElement: d("DOMQuery").getRootElement,
      isNodeOfType: d("DOMQuery").isNodeOfType,
      isInputNode: d("DOMQuery").isInputNode,
      create: a,
      setAttributes: function (a, b) {
        b.type && (a.type = b.type);
        for (var d in b) {
          var e = b[d],
            f = /^on/i.test(d);
          f &&
            typeof e !== "function" &&
            c("FBLogger")("dom").warn(
              "Handlers passed to DOM.setAttributes must be functions. Handler passed for %s was %s",
              d,
              typeof e
            );
          if (d == "type") continue;
          else
            d == "style"
              ? typeof e === "string"
                ? (a.style.cssText = e)
                : Object.assign(a.style, e)
              : f
              ? c("Event").listen(a, d.substr(2), e)
              : d in a
              ? (a[d] = e)
              : a.setAttribute && a.setAttribute(d, e);
        }
      },
      prependContent: function (a, b) {
        if (!a)
          throw c("fb-error").TAAL.blameToPreviousFile(
            new Error("reference element is not a node")
          );
        return j(b, a, function (b) {
          a.firstChild ? a.insertBefore(b, a.firstChild) : a.appendChild(b);
        });
      },
      insertAfter: function (a, b) {
        if (!a || !a.parentNode)
          throw c("fb-error").TAAL.blameToPreviousFile(
            new Error("reference element does not have a parent")
          );
        var d = a.parentNode;
        return j(b, d, function (b) {
          a.nextSibling ? d.insertBefore(b, a.nextSibling) : d.appendChild(b);
        });
      },
      insertBefore: function (a, b) {
        if (!a || !a.parentNode)
          throw c("fb-error").TAAL.blameToPreviousFile(
            new Error("reference element does not have a parent")
          );
        var d = a.parentNode;
        return j(b, d, function (b) {
          d.insertBefore(b, a);
        });
      },
      setContent: function (a, b) {
        if (!a)
          throw c("fb-error").TAAL.blameToPreviousFile(
            new Error("reference element is not a node")
          );
        while (a.firstChild) i(a.firstChild);
        return h.appendContent(a, b);
      },
      appendContent: function (a, b) {
        if (!a)
          throw c("fb-error").TAAL.blameToPreviousFile(
            new Error("reference element is not a node")
          );
        return j(b, a, function (b) {
          a.appendChild(b);
        });
      },
      replace: function (a, b) {
        if (!a || !a.parentNode)
          throw c("fb-error").TAAL.blameToPreviousFile(
            new Error("reference element does not have a parent")
          );
        var d = a.parentNode;
        return j(b, d, function (b) {
          d.replaceChild(b, a);
        });
      },
      remove: function (a) {
        i(typeof a === "string" ? c("$")(a) : a);
      },
      empty: function (a) {
        a = typeof a === "string" ? c("$")(a) : a;
        while (a.firstChild) i(a.firstChild);
      },
    };
    function i(a) {
      a.parentNode && a.parentNode.removeChild(a);
    }
    function j(a, b, e) {
      a = c("HTML").replaceJSONWrapper(a);
      if (
        a instanceof c("HTML") &&
        b.firstChild === null &&
        -1 === a.toString().indexOf("<script")
      ) {
        var f = d("UserAgent_DEPRECATED").ie();
        if (
          !f ||
          (f > 7 &&
            !d("DOMQuery").isNodeOfType(b, [
              "table",
              "tbody",
              "thead",
              "tfoot",
              "tr",
              "select",
              "fieldset",
            ]))
        ) {
          var g = f ? '<em style="display:none;">&nbsp;</em>' : "";
          b.innerHTML = g + a;
          f && b.removeChild(b.firstChild);
          return Array.from(b.childNodes);
        }
      } else if (c("isTextNode")(b)) {
        b.data = a;
        return [a];
      }
      g = document.createDocumentFragment();
      var h;
      f = [];
      b = [];
      a = c("createArrayFromMixed")(a);
      a.length === 1 &&
        a[0] instanceof c("FbtResultBase") &&
        (a = a[0].getContents());
      for (var i = 0; i < a.length; i++) {
        h = c("HTML").replaceJSONWrapper(a[i]);
        if (h instanceof c("HTML")) {
          b.push(h.getAction());
          var j = h.getNodes();
          for (var k = 0; k < j.length; k++) f.push(j[k]), g.appendChild(j[k]);
        } else if (c("isScalar")(h) || h instanceof c("FbtResultBase")) {
          k = document.createTextNode(h);
          f.push(k);
          g.appendChild(k);
        } else
          c("isNode")(h)
            ? (f.push(h), g.appendChild(h))
            : (Array.isArray(h) &&
                c("FBLogger")("dom").warn("Nest arrays not supported"),
              h !== null &&
                c("FBLogger")("dom").warn("No way to set content %s", h));
      }
      e(g);
      b.forEach(function (a) {
        a();
      });
      return f;
    }
    b = h;
    g["default"] = b;
  },
  98
);
__d(
  "DOMDimensions",
  ["Style", "getDocumentScrollElement"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a ? a.offsetHeight : 0;
      a = a ? a.offsetWidth : 0;
      return { height: b, width: a };
    }
    function b(a) {
      a = c("getDocumentScrollElement")(a);
      var b = a.scrollWidth || 0;
      a = a.scrollHeight || 0;
      return { width: b, height: a };
    }
    function d(a, b, d, e, f) {
      var g;
      switch (b) {
        case "left":
        case "right":
        case "top":
        case "bottom":
          g = [b];
          break;
        case "width":
          g = ["left", "right"];
          break;
        case "height":
          g = ["top", "bottom"];
          break;
        default:
          throw Error("Invalid plane: " + b);
      }
      b = function (b, d) {
        var e = 0;
        for (var f = 0; f < g.length; f++)
          e += parseFloat(c("Style").get(a, b + "-" + g[f] + d)) || 0;
        return e;
      };
      return (
        (d ? b("padding", "") : 0) +
        (e ? b("border", "-width") : 0) +
        (f ? b("margin", "") : 0)
      );
    }
    g.getElementDimensions = a;
    g.getDocumentDimensions = b;
    g.measureElementBox = d;
  },
  98
);
__d(
  "PixelRatioConst",
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({ cookieName: "dpr" });
  },
  null
);
__d(
  "WebPixelRatioDetector",
  ["Cookie", "DOMEventListener", "PixelRatioConst", "Run", "WebPixelRatio"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = !1,
      i = !1,
      j = !1;
    function k() {
      return window.devicePixelRatio || 1;
    }
    function l() {
      c("Cookie").set(c("PixelRatioConst").cookieName, String(k()));
    }
    function m() {
      c("Cookie").clear(c("PixelRatioConst").cookieName);
    }
    function n() {
      if (i) return;
      i = !0;
      j && m();
      k() !== d("WebPixelRatio").get() && l();
    }
    function a(a) {
      a && (j = !0);
      if (h) return;
      h = !0;
      "onpagehide" in window &&
        d("DOMEventListener").add(window, "pagehide", n);
      d("Run").onBeforeUnload(n, !1);
    }
    g.startDetecting = a;
  },
  98
);
__d(
  "Queue",
  [],
  function (a, b, c, d, e, f) {
    var g = {};
    a = (function () {
      function a(a) {
        (this._timeout = null),
          (this._interval = (a == null ? void 0 : a.interval) || 0),
          (this._processor = a == null ? void 0 : a.processor),
          (this._queue = []),
          (this._stopped = !0);
      }
      var b = a.prototype;
      b._dispatch = function (a) {
        var b = this;
        a === void 0;
        if (this._stopped || this._queue.length === 0) return;
        a = this._processor;
        if (a == null) {
          this._stopped = !0;
          throw new Error("No processor available");
        }
        var c = this._interval;
        if (c != null)
          a.call(this, this._queue.shift()),
            (this._timeout = setTimeout(function () {
              return b._dispatch();
            }, c));
        else while (this._queue.length) a.call(this, this._queue.shift());
      };
      b.enqueue = function (a) {
        this._processor && !this._stopped
          ? this._processor(a)
          : this._queue.push(a);
        return this;
      };
      b.start = function (a) {
        a && (this._processor = a);
        this._stopped = !1;
        this._dispatch();
        return this;
      };
      b.isStarted = function () {
        return !this._stopped;
      };
      b.dispatch = function () {
        this._dispatch(!0);
      };
      b.stop = function (a) {
        this._stopped = !0;
        a && this._timeout != null && clearTimeout(this._timeout);
        return this;
      };
      b.merge = function (a, b) {
        if (b) {
          (b = this._queue).unshift.apply(b, a._queue);
        } else {
          (b = this._queue).push.apply(b, a._queue);
        }
        a._queue = [];
        this._dispatch();
        return this;
      };
      b.getLength = function () {
        return this._queue.length;
      };
      a.get = function (b, c) {
        var d;
        b in g ? (d = g[b]) : (d = g[b] = new a(c));
        return d;
      };
      a.exists = function (a) {
        return a in g;
      };
      a.remove = function (a) {
        return delete g[a];
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "resolveWindow",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      if (a == null) return null;
      var b = window;
      a = a.split(".");
      try {
        for (var c = 0; c < a.length; c++) {
          var d = a[c],
            e = /^frames\[[\'\"]?([a-zA-Z0-9\-_]+)[\'\"]?\]$/.exec(d);
          if (e) b = b.frames[e[1]];
          else if (d === "opener" || d === "parent" || d === "top") b = b[d];
          else return null;
        }
      } catch (a) {
        return null;
      }
      return b;
    }
    f["default"] = a;
  },
  66
);
__d(
  "ObservableMixin",
  [],
  function (a, b, c, d, e, f) {
    function a() {
      this.__observableEvents = {};
    }
    a.prototype = {
      inform: function (a) {
        var b = Array.prototype.slice.call(arguments, 1),
          c = Array.prototype.slice.call(this.getSubscribers(a));
        for (var d = 0; d < c.length; d++) {
          if (c[d] === null) continue;
          try {
            c[d].apply(this, b);
          } catch (a) {
            window.setTimeout(function () {
              throw a;
            }, 0);
          }
        }
        return this;
      },
      getSubscribers: function (a) {
        return this.__observableEvents[a] || (this.__observableEvents[a] = []);
      },
      clearSubscribers: function (a) {
        a && (this.__observableEvents[a] = []);
        return this;
      },
      subscribe: function (a, b) {
        a = this.getSubscribers(a);
        a.push(b);
        return this;
      },
      unsubscribe: function (a, b) {
        a = this.getSubscribers(a);
        for (var c = 0; c < a.length; c++)
          if (a[c] === b) {
            a.splice(c, 1);
            break;
          }
        return this;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ManagedError",
  [],
  function (a, b, c, d, e, f) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c) {
        var d;
        d = a.call(this, b !== null && b !== void 0 ? b : "") || this;
        b !== null && b !== void 0 ? (d.message = b) : (d.message = "");
        d.innerError = c;
        return d;
      }
      return b;
    })(babelHelpers.wrapNativeSuper(Error));
    f["default"] = a;
  },
  66
);
__d(
  "AssertionError",
  ["ManagedError"],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        return a.call(this, b) || this;
      }
      return b;
    })(c("ManagedError"));
    g["default"] = a;
  },
  98
);
__d(
  "Assert",
  ["AssertionError", "sprintf"],
  function (a, b, c, d, e, f, g) {
    function h(a, b) {
      if (typeof a !== "boolean" || a === !1)
        throw new (c("AssertionError"))(b);
      return a;
    }
    function i(a, b, d) {
      var e;
      if (b === void 0) e = "undefined";
      else if (b === null) e = "null";
      else {
        var f = Object.prototype.toString.call(b);
        f = /\s(\w*)/.exec(f);
        e = f == null ? typeof f : f[1].toLowerCase();
      }
      h(
        a.indexOf(e) !== -1,
        (f = d) != null
          ? f
          : c("sprintf")("Expression is of type %s, not %s", e, a)
      );
      return b;
    }
    function a(a, b, c) {
      h(
        b instanceof a,
        (a = c) != null ? a : "Expression not instance of type"
      );
      return b;
    }
    function j(a, b) {
      (k["is" + a] = b),
        (k["maybe" + a] = function (a, c) {
          return a == null ? a : b(a, c);
        });
    }
    b = function (a, b) {
      return a;
    };
    var k = {
      isInstanceOf: a,
      isTrue: h,
      isTruthy: function (a, b) {
        return h(!!a, b);
      },
      isBoolean: b,
      isFunction: b,
      isNumber: b,
      isObject: b,
      isString: b,
      isUndefined: b,
      maybeObject: b,
      maybeNumber: b,
      maybeFunction: b,
    };
    ["Boolean", "Function", "Number", "Object", "String", "Undefined"].forEach(
      function (a) {
        j(a, i.bind(null, a.toLowerCase()));
      }
    );
    d = k;
    g["default"] = d;
  },
  98
);
__d(
  "Type",
  ["Assert"],
  function (a, b, c, d, e, f) {
    function g() {
      var a = this.__mixins;
      if (a) for (var b = 0; b < a.length; b++) a[b].apply(this, arguments);
    }
    function h(a, b) {
      if (b instanceof a) return !0;
      if (b instanceof g)
        for (var c = 0; c < b.__mixins.length; c++)
          if (b.__mixins[c] == a) return !0;
      return !1;
    }
    function i(a, b) {
      var c = a.prototype;
      Array.isArray(b) || (b = [b]);
      for (a = 0; a < b.length; a++) {
        var d = b[a];
        typeof d === "function" && (c.__mixins.push(d), (d = d.prototype));
        Object.keys(d).forEach(function (a) {
          c[a] = d[a];
        });
      }
    }
    function j(a, c, d) {
      var e =
        c && Object.prototype.hasOwnProperty.call(c, "constructor")
          ? c.constructor
          : function () {
              this.parent.apply(this, arguments);
            };
      b("Assert").isFunction(e);
      if (a && a.prototype instanceof g === !1)
        throw new Error("parent type does not inherit from Type");
      a = a || g;
      function f() {}
      f.prototype = a.prototype;
      e.prototype = new f();
      c && Object.assign(e.prototype, c);
      e.prototype.constructor = e;
      e.parent = a;
      e.prototype.__mixins = a.prototype.__mixins
        ? Array.prototype.slice.call(a.prototype.__mixins)
        : [];
      d && i(e, d);
      e.prototype.parent = function () {
        (this.parent = a.prototype.parent), a.apply(this, arguments);
      };
      e.prototype.parentCall = function (b) {
        return a.prototype[b].apply(
          this,
          Array.prototype.slice.call(arguments, 1)
        );
      };
      e.extend = function (a, b) {
        return j(this, a, b);
      };
      return e;
    }
    Object.assign(g.prototype, {
      instanceOf: function (a) {
        return h(a, this);
      },
    });
    Object.assign(g, {
      extend: function (a, b) {
        return typeof a === "function"
          ? j.apply(null, arguments)
          : j(null, a, b);
      },
      instanceOf: h,
    });
    e.exports = g;
  },
  null
);
__d(
  "sdk.Model",
  ["ObservableMixin", "Type"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("Type").extend(
      {
        constructor: function (a) {
          this.parent();
          var b = {},
            c = this;
          Object.keys(a).forEach(function (d) {
            (b[d] = a[d]),
              (c["set" + d] = function (a) {
                if (a === b[d]) return c;
                b[d] = a;
                c.inform(d + ".change", a);
                return c;
              }),
              (c["get" + d] = function () {
                return b[d];
              });
          });
        },
      },
      c("ObservableMixin")
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "sdk.Runtime",
  ["JSSDKRuntimeConfig", "sdk.Model"],
  function (a, b, c, d, e, f, g) {
    var h = { UNKNOWN: 0, PAGETAB: 1, CANVAS: 2, PLATFORM: 4 },
      i = new (c("sdk.Model"))({
        AccessToken: "",
        AutoLogAppEvents: !1,
        ClientID: "",
        CookieUserID: "",
        EnforceHttps: !1,
        Environment: h.UNKNOWN,
        FamilyLoginLoaded: !1,
        GraphDomain: "",
        Initialized: !1,
        IsSPIN: Boolean(d("JSSDKRuntimeConfig").isSPIN),
        IsVersioned: !1,
        KidDirectedSite: void 0,
        Locale: d("JSSDKRuntimeConfig").locale,
        LoggedIntoFacebook: void 0,
        LoginStatus: void 0,
        Revision: d("JSSDKRuntimeConfig").revision,
        Rtl: d("JSSDKRuntimeConfig").rtl,
        Scope: void 0,
        SDKAB: d("JSSDKRuntimeConfig").sdkab,
        SDKUrl: d("JSSDKRuntimeConfig").sdkurl,
        SDKNS: d("JSSDKRuntimeConfig").sdkns,
        ShouldLoadFamilyLogin: !1,
        UseCookie: !1,
        UseLocalStorage: !0,
        UserID: "",
        Version: void 0,
      });
    Object.assign(i, {
      ENVIRONMENTS: h,
      isEnvironment: function (a) {
        var b = this.getEnvironment();
        return (a | b) === b;
      },
      isCanvasEnvironment: function () {
        return this.isEnvironment(h.CANVAS) || this.isEnvironment(h.PAGETAB);
      },
    });
    (function () {
      var a = /app_runner/.test(window.name)
        ? h.PAGETAB
        : /iframe_canvas/.test(window.name)
        ? h.CANVAS
        : h.UNKNOWN;
      (a | h.PAGETAB) === a && (a |= h.CANVAS);
      i.setEnvironment(a);
    })();
    a = i;
    g["default"] = a;
  },
  98
);
__d(
  "UrlMap",
  ["invariant", "UrlMapConfig", "sdk.Runtime"],
  function (a, b, c, d, e, f, g, h) {
    function a(a) {
      var b = "https";
      if (a === "graph_domain") {
        var e = c("sdk.Runtime").getGraphDomain();
        e ? (a = "graph_".concat(e)) : (a = "graph");
      }
      if (a in d("UrlMapConfig")) return b + "://" + d("UrlMapConfig")[a];
      a in d("UrlMapConfig") || h(0, 2511, a);
      return "";
    }
    g.resolve = a;
  },
  98
);
__d(
  "sdk.Scribe",
  ["QueryString", "UrlMap", "sdk.Runtime"],
  function (a, b, c, d, e, f, g) {
    var h = {};
    function a(a, b, e) {
      e === void 0 && (e = !1);
      if (a === "jssdk_error") {
        var f = JSON.stringify(b);
        if (Object.prototype.hasOwnProperty.call(h, f)) return;
        else h[f] = !0;
      }
      if (b.extra != null && typeof b.extra === "object") {
        f = b.extra;
        f.revision = c("sdk.Runtime").getRevision();
      }
      f = new Image();
      var g = d("UrlMap").resolve("www") + "/platform/scribe_endpoint.php/";
      e || (f.crossOrigin = "anonymous");
      f.src = c("QueryString").appendToUrl(g, {
        c: a,
        m: JSON.stringify(
          babelHelpers["extends"]({}, b, {
            isSPIN: c("sdk.Runtime").getIsSPIN(),
          })
        ),
      });
    }
    g.log = a;
  },
  98
);
__d(
  "XD",
  [
    "Arbiter",
    "DOM",
    "DOMDimensions",
    "Log",
    "PHPQuerySerializer",
    "Queue",
    "URI",
    "isFacebookURI",
    "isInIframe",
    "resolveWindow",
    "sdk.Scribe",
  ],
  function (a, b, c, d, e, f, g) {
    var h = {
      _callbacks: [],
      _opts: {
        autoResize: !1,
        allowShrink: !0,
        channelUrl: null,
        hideOverflow: !1,
        resizeTimeout: 1e3,
        resizeWidth: !1,
      },
      _lastResizeAckId: 0,
      _resizeCount: 0,
      _resizeTimestamp: 0,
      _shrinker: null,
      _forcedMinWidth: 100,
      init: function (a) {
        var b = this;
        this._opts = babelHelpers["extends"]({}, this._opts, a);
        this._opts.autoResize && this._startResizeMonitor();
        c("Arbiter").subscribe("Connect.Unsafe.resize.ack", function (a, c) {
          c.id || (c.id = b._resizeCount),
            c.id > b._lastResizeAckId && (b._lastResizeAckId = c.id);
        });
      },
      getQueue: function () {
        this._queue || (this._queue = new (c("Queue"))());
        return this._queue;
      },
      setChannelUrl: function (a) {
        var b = this;
        this.getQueue().start(function (c) {
          return b.send(c, a);
        });
      },
      send: function (a, b) {
        a === void 0 && (a = null);
        b === void 0 && (b = null);
        b = b || this._opts.channelUrl;
        if (!b) {
          this.getQueue().enqueue(a);
          return;
        }
        var e = {};
        b = new (c("URI"))(b);
        Object.assign(
          e,
          a,
          d("PHPQuerySerializer").deserialize(b.getFragment())
        );
        b = new (c("URI"))(e.origin);
        if (b.getDomain() === "") {
          d("Log").error("No valid domain for XD message target.");
          return;
        }
        var f = b.getOrigin();
        if (typeof e.relation !== "string") {
          d("Log").error("No relation specified to resolve XD target window.");
          return;
        }
        var g = c("resolveWindow")(e.relation.replace(/^parent\./, "")),
          h = 1;
        b = function b() {
          try {
            g.postMessage(d("PHPQuerySerializer").serialize(e), f);
          } catch (c) {
            --h
              ? window.setTimeout(b, 200)
              : d("sdk.Scribe").log("jssdk_error", {
                  error: "POST_MESSAGE",
                  extra: {
                    message: c.message + ", html/js/modules/XD.js:139",
                    ancestor_origins: JSON.stringify(location.ancestorOrigins),
                    referrer: document.referrer,
                    data: a,
                  },
                });
          }
        };
        b();
      },
      _computeSize: function () {
        var a = d("DOMDimensions").getDocumentDimensions(),
          b = 0;
        if (this._opts.resizeWidth) {
          var e = document.body;
          if (e != null) {
            if (e.clientWidth < e.scrollWidth) b = a.width;
            else {
              e = e.lastElementChild;
              if (e != null && e instanceof HTMLElement) {
                e = e;
                e = e.offsetLeft + e.offsetWidth;
                e > b && (b = e);
              }
            }
            b = Math.max(b, h._forcedMinWidth);
          } else b = h._forcedMinWidth;
        }
        a.width = b;
        this._opts.allowShrink &&
          (this._shrinker || (this._shrinker = c("DOM").create("div")),
          c("DOM").appendContent(document.body, this._shrinker),
          (a.height = Math.max(this._shrinker.offsetTop, 0)));
        return a;
      },
      _startResizeMonitor: function () {
        var a,
          b = this,
          d;
        a = (a = document.documentElement) != null ? a : {};
        if (this._opts.hideOverflow) {
          a.style.overflow = "hidden";
          ((a = document.body) != null ? a : {}).style.overflow = "hidden";
        }
        a = function () {
          var a = b._computeSize(),
            e = Date.now();
          if (
            !d ||
            (b._opts.allowShrink && d.width != a.width) ||
            (!b._opts.allowShrink && d.width < a.width) ||
            (b._opts.allowShrink && d.height != a.height) ||
            (!b._opts.allowShrink && d.height < a.height)
          ) {
            d = a;
            b._resizeCount++;
            b._resizeTimestamp = e;
            e = {
              type: "resize",
              height: a.height,
              ackData: { id: b._resizeCount },
              width: 0,
            };
            a.width && a.width != 0 && (e.width = a.width);
            try {
              if (
                c("isFacebookURI")(new (c("URI"))(document.referrer)) &&
                c("isInIframe")() &&
                window.name &&
                window.parent.location &&
                window.parent.location.toString &&
                c("isFacebookURI")(new (c("URI"))(window.parent.location))
              ) {
                a = window.parent.document.getElementsByTagName("iframe");
                for (var f = 0; f < a.length; f++)
                  a[f].name == window.name &&
                    (b._opts.resizeWidth && (a[f].style.width = e.width + "px"),
                    (a[f].style.height = e.height + "px"));
              }
              b.send(e);
            } catch (a) {
              b.send(e);
            }
          }
        };
        a();
        window.setInterval(a, this._opts.resizeTimeout);
      },
    };
    b = babelHelpers["extends"]({}, h);
    a.UnverifiedXD = b;
    a.XD = h;
    g.XD = h;
    g.UnverifiedXD = b;
  },
  98
);
__d(
  "Plugin",
  ["Arbiter", "ArbiterFrame"],
  function (a, b, c, d, e, f) {
    var g = {
      CONNECT: "platform/plugins/connect",
      DISCONNECT: "platform/plugins/disconnect",
      ERROR: "platform/plugins/error",
      RELOAD: "platform/plugins/reload",
      DIALOG: "platform/plugins/dialog",
      connect: function (a, c) {
        a = { identifier: a, href: a, story_fbid: c };
        b("Arbiter").inform(g.CONNECT, a);
        b("ArbiterFrame").inform(g.CONNECT, a);
      },
      disconnect: function (a, c) {
        a = { identifier: a, href: a, story_fbid: c };
        b("Arbiter").inform(g.DISCONNECT, a);
        b("ArbiterFrame").inform(g.DISCONNECT, a);
      },
      error: function (a, c) {
        b("Arbiter").inform(g.ERROR, { action: a, content: c });
      },
      reload: function (a) {
        b("Arbiter").inform(g.RELOAD, { reloadUrl: a || "" }),
          b("ArbiterFrame").inform(g.RELOAD, { reloadUrl: a || "" });
      },
      reloadOtherPlugins: function (a, c) {
        b("ArbiterFrame").inform(g.RELOAD, {
          reloadUrl: "",
          reload: a || "",
          identifier: c || "",
        });
      },
    };
    e.exports = g;
  },
  null
);
__d(
  "PluginBundleInit",
  ["DOM"],
  function (a, b, c, d, e, f, g) {
    function a() {
      var a = document.getElementById("jsbundle-loader");
      a && c("DOM").remove(a);
    }
    g.init = a;
  },
  98
);
__d(
  "PluginDOMEventListener",
  ["DOMEventListener", "Log", "UserAgent", "promiseDone"],
  function (a, b, c, d, e, f, g) {
    var h =
        !c("UserAgent").isBrowser("Safari < 12") &&
        typeof document.hasStorageAccess === "function",
      i = !h,
      j = !1;
    !i &&
      h &&
      c("promiseDone")(
        document.hasStorageAccess(),
        function (a) {
          d("Log").debug("hasStorageAccess=%s", a), (i = a);
        },
        function (a) {
          return d("Log").warn("Storage access check failed: %s", a);
        }
      );
    function a(a, b, e, f) {
      f === void 0 && (f = !1);
      if (!h || i || j) return d("DOMEventListener").add.apply(this, arguments);
      else {
        var g = function () {
          var a = this;
          for (var b = arguments.length, f = new Array(b), g = 0; g < b; g++)
            f[g] = arguments[g];
          if (i || j) return e.apply(this, f);
          else {
            var h = document.requestStorageAccess().then(
              function (b) {
                d("Log").debug("Storage access request granted.");
                i = !0;
                return e.apply(a, f);
              },
              function (b) {
                d("Log").warn("Storage access request denied.");
                j = !0;
                return e.apply(a, f);
              }
            );
            c("promiseDone")(h);
          }
        };
        return d("DOMEventListener").add.call(null, a, b, g, f);
      }
    }
    g.add = a;
    g.remove = d("DOMEventListener").remove;
  },
  98
);
__d(
  "PluginITP",
  ["PluginDOMEventListener", "promiseDone"],
  function (a, b, c, d, e, f, g) {
    function a() {
      if (!("hasStorageAccess" in document)) return;
      c("promiseDone")(document.hasStorageAccess(), function (a) {
        document.body &&
          !a &&
          d("PluginDOMEventListener").add(document.body, "click", function () {
            location.reload();
          });
      });
    }
    g.init = a;
  },
  98
);
__d(
  "UnverifiedXD",
  ["XD"],
  function (a, b, c, d, e, f, g) {
    g["default"] = d("XD").UnverifiedXD;
  },
  98
);
__d(
  "getOffsetParent",
  ["Style"],
  function (a, b, c, d, e, f) {
    function g(a) {
      a = a.parentNode;
      if (!a || a === document.documentElement) return document.documentElement;
      return b("Style").get(a, "position") !== "static"
        ? a
        : a === document.body
        ? document.documentElement
        : g(a);
    }
    e.exports = g;
  },
  null
);
__d(
  "PluginResize",
  ["Locale", "Log", "UnverifiedXD", "getOffsetParent", "getStyleProperty"],
  function (a, b, c, d, e, f) {
    function g(a) {
      a = a || document.body;
      var c = 0,
        d = b("getOffsetParent")(a);
      b("Locale").isRTL() && d
        ? (c = d.offsetWidth - a.offsetLeft - a.offsetWidth)
        : b("Locale").isRTL() || (c = a.offsetLeft);
      return h(a) + c;
    }
    function h(a) {
      return (
        Math.ceil(parseFloat(b("getStyleProperty")(a, "width"))) ||
        a.offsetWidth
      );
    }
    function i(a) {
      a = a || document.body;
      return a.offsetHeight + a.offsetTop;
    }
    function j(a, b, c) {
      (this.calcWidth = a || g),
        (this.calcHeight = b || i),
        (this.width = void 0),
        (this.height = void 0),
        (this.event = c || "resize");
    }
    Object.assign(j.prototype, {
      resize: function () {
        var a = this.calcWidth(),
          c = this.calcHeight();
        (a !== this.width || c !== this.height) &&
          (b("Log").debug(
            "Resizing Plugin: (%s, %s, %s, %s)",
            a,
            c,
            this.event
          ),
          (this.width = a),
          (this.height = c),
          b("UnverifiedXD").send({ type: this.event, width: a, height: c }));
        return this;
      },
      auto: function (a) {
        setInterval(this.resize.bind(this), a || 250);
        return this;
      },
    });
    j.auto = function (a, b, c) {
      return new j(g.bind(null, a), i.bind(null, a), b).resize().auto(c);
    };
    j.autoHeight = function (a, b, c, d) {
      return new j(
        function () {
          return a;
        },
        i.bind(null, b),
        c
      )
        .resize()
        .auto(d);
    };
    j.getElementWidth = h;
    e.exports = j;
  },
  null
);
__d(
  "StrSet",
  [],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a(a) {
        (this.$2 = {}), (this.$1 = 0), a && this.addAll(a);
      }
      var b = a.prototype;
      b.add = function (a) {
        Object.prototype.hasOwnProperty.call(this.$2, a) ||
          ((this.$2[a] = !0), this.$1++);
        return this;
      };
      b.addAll = function (a) {
        a.forEach(this.add, this);
        return this;
      };
      b.remove = function (a) {
        Object.prototype.hasOwnProperty.call(this.$2, a) &&
          (delete this.$2[a], this.$1--);
        return this;
      };
      b.removeAll = function (a) {
        a.forEach(this.remove, this);
        return this;
      };
      b.toArray = function () {
        return Object.keys(this.$2);
      };
      b.toMap = function (a) {
        var b = {};
        Object.keys(this.$2).forEach(function (c) {
          b[c] = typeof a === "function" ? a(c) : a || !0;
        });
        return b;
      };
      b.contains = function (a) {
        return Object.prototype.hasOwnProperty.call(this.$2, a);
      };
      b.count = function () {
        return this.$1;
      };
      b.clear = function () {
        this.$2 = {};
        this.$1 = 0;
        return this;
      };
      b.clone = function () {
        return new a(this);
      };
      b.forEach = function (a, b) {
        Object.keys(this.$2).forEach(a, b);
      };
      b.map = function (a, b) {
        return Object.keys(this.$2).map(a, b);
      };
      b.some = function (a, b) {
        return Object.keys(this.$2).some(a, b);
      };
      b.every = function (a, b) {
        return Object.keys(this.$2).every(a, b);
      };
      b.filter = function (b, c) {
        return new a(Object.keys(this.$2).filter(b, c));
      };
      b.union = function (a) {
        return this.clone().addAll(a);
      };
      b.intersect = function (a) {
        return this.filter(function (b) {
          return a.contains(b);
        });
      };
      b.difference = function (a) {
        var b = this;
        return a.filter(function (a) {
          return !b.contains(a);
        });
      };
      b.equals = function (a) {
        var b = function (a, b) {
            return a === b ? 0 : a < b ? -1 : 1;
          },
          c = this.toArray();
        a = a.toArray();
        if (c.length !== a.length) return !1;
        var d = c.length;
        c = c.sort(b);
        a = a.sort(b);
        while (d--) if (c[d] !== a[d]) return !1;
        return !0;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "PlatformVersioning",
  ["invariant", "PlatformVersions", "StrSet", "getObjectValues"],
  function (a, b, c, d, e, f, g) {
    var h = new (b("StrSet"))(
        b("getObjectValues")(b("PlatformVersions").versions)
      ),
      i = location.pathname;
    i = i.substring(1, i.indexOf("/", 1));
    var j = h.contains(i) ? i : b("PlatformVersions").versions.UNVERSIONED;
    function k(a, c) {
      if (c == b("PlatformVersions").versions.UNVERSIONED) return a;
      h.contains(c) || g(0, 3769);
      a = a.indexOf("/") !== 0 ? "/" + a : a;
      return "/" + c + a;
    }
    function a() {
      return b("PlatformVersions").LATEST;
    }
    function c(a) {
      return a.setPath(k(a.getPath(), j));
    }
    function d(a) {
      return k(a, j);
    }
    function e(a) {
      return h.contains(a.substring(1, a.indexOf("/", 1)))
        ? a.substring(a.indexOf("/", 1))
        : a;
    }
    i = {
      addVersionToPath: k,
      getLatestVersion: a,
      versionAwareURI: c,
      versionAwarePath: d,
      getUnversionedPath: e,
    };
    a = i;
    f["default"] = a;
  },
  66
);
__d(
  "PlatformWidgetEndpoint",
  ["PlatformVersioning"],
  function (a, b, c, d, e, f) {
    function a(a, c) {
      return b("PlatformVersioning").versionAwarePath(
        "/dialog/" + a + (c ? "/" + c : "")
      );
    }
    function c(a, c) {
      return b("PlatformVersioning").versionAwarePath(
        "/plugins/" + a + (c ? "/" + c : "")
      );
    }
    function d(a) {
      return /^\/plugins\//.test(b("PlatformVersioning").getUnversionedPath(a));
    }
    function f(a) {
      return /^\/dialog\//.test(b("PlatformVersioning").getUnversionedPath(a));
    }
    a = { dialog: a, plugins: c, isPluginEndpoint: d, isDialogEndpoint: f };
    e.exports = a;
  },
  null
);
__d(
  "PluginReturn",
  [
    "invariant",
    "Arbiter",
    "Log",
    "PlatformDialog",
    "PlatformWidgetEndpoint",
    "Plugin",
    "URI",
  ],
  function (a, b, c, d, e, f, g) {
    var h;
    b("Arbiter").subscribe(b("PlatformDialog").RESPONSE, function (a, c) {
      if (c.error_code) {
        b("Log").debug(
          "Plugin Return Error (%s): %s",
          c.error_code,
          c.error_message || c.error_description
        );
        return;
      }
      b("Plugin").reload(c.plugin_reload);
    });
    var i = {
      auto: function () {
        b("Arbiter").subscribe(b("Plugin").RELOAD, function (a, b) {
          a = typeof b === "object" ? b.reloadUrl : b;
          i.reload(a);
        });
      },
      syncPlugins: function () {
        b("Arbiter").subscribe(b("Plugin").RELOAD, function (a, b) {
          b.crossFrame && i.reload(b.reloadUrl, b.reload, b.identifier);
        });
      },
      reload: function (a, c, d) {
        d = (h || (h = b("URI")))
          .getRequestURI()
          .removeQueryData("ret")
          .removeQueryData("act")
          .removeQueryData("hash")
          .addQueryData("reload", c)
          .addQueryData("id", d);
        if (a) {
          var c = new (h || (h = b("URI")))(a);
          b("PlatformWidgetEndpoint").isPluginEndpoint(c.getPath()) ||
            g(0, 1120);
          d.setPath(c.getPath()).addQueryData(c.getQueryData());
        }
        window.location.replace(d.toString());
      },
    };
    e.exports = i;
  },
  null
);
__d(
  "SecurePostMessage",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "*";
    a = {
      sendMessageToSpecificOrigin: function (a, b, c, d) {
        c !== h || g(0, 21157), a.postMessage(b, c, d);
      },
      sendMessageForCurrentOrigin: function (a, b) {
        a.postMessage(b);
      },
      sendMessageAllowAnyOrigin_UNSAFE: function (a, b, c) {
        a.postMessage(b, h, c);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "PluginXDReady",
  ["Arbiter", "Log", "SecurePostMessage", "UnverifiedXD"],
  function (a, b, c, d, e, f, g) {
    b = {
      handleMessage: function (a) {
        d("Log").debug(
          "PluginXDReady at " +
            window.name +
            " handleMessage " +
            JSON.stringify(a)
        );
        if (!a.method) return;
        try {
          c("Arbiter").inform(
            "Connect.Unsafe." + a.method,
            JSON.parse(a.params),
            "persistent"
          );
        } catch (a) {}
      },
    };
    window.addEventListener(
      "message",
      function (a) {
        d("Log").debug(
          "PluginXDReady at " +
            window.name +
            " received message " +
            JSON.stringify(a.data.message)
        );
        if (a.data.xdArbiterSyn)
          d("SecurePostMessage").sendMessageAllowAnyOrigin_UNSAFE(a.source, {
            xdArbiterAck: !0,
          });
        else if (a.data.xdArbiterHandleMessage) {
          if (!a.data.message.method) return;
          try {
            c("Arbiter").inform(
              "Connect.Unsafe." + a.data.message.method,
              JSON.parse(a.data.message.params),
              "persistent"
            );
          } catch (a) {}
        }
      },
      !1
    );
    a.XdArbiter = b;
    c("UnverifiedXD").send({ xd_action: "plugin_ready", name: window.name });
    e = null;
    g["default"] = e;
  },
  98
);
__d(
  "BanzaiScubaMigrationFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1949898");
    c = b("FalcoLoggerInternal").create("banzai_scuba_migration", a);
    e.exports = c;
  },
  null
);
__d(
  "BanzaiScuba_DEPRECATED",
  ["BanzaiScubaMigrationFalcoEvent", "FBLogger"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a, b, d) {
        (this.posted = !1),
          a ||
            c("FBLogger")("BanzaiScuba").warn(
              "Can't post a sample without a dataset"
            ),
          (this.dataset = a),
          (this.$1 = b),
          (this.options = d);
      }
      var b = a.prototype;
      b.$2 = function (a, b, d) {
        if (this.posted) {
          c("FBLogger")("BanzaiScuba").warn(
            "Trying to add to an already posted sample"
          );
          return a;
        }
        a = a || {};
        a[b] = d;
        return a;
      };
      b.addNormal = function (a, b) {
        this.normal = this.$2(this.normal, a, b);
        return this;
      };
      b.addInteger = function (a, b) {
        this["int"] = this.$2(this["int"], a, b);
        return this;
      };
      b.addDenorm = function (a, b) {
        this.denorm = this.$2(this.denorm, a, b);
        return this;
      };
      b.addTagSet = function (a, b) {
        this.tags = this.$2(this.tags, a, b);
        return this;
      };
      b.addNormVector = function (a, b) {
        this.normvector = this.$2(this.normvector, a, b);
        return this;
      };
      b.post = function () {
        var a = this;
        if (this.posted) {
          c("FBLogger")("BanzaiScuba").warn("Trying to re-post");
          return;
        }
        if (!this.dataset) return;
        var b = {};
        b._ds = this.dataset;
        b._options = this.options;
        this.normal && (b.normal = this.normal);
        this["int"] && (b["int"] = this["int"]);
        this.denorm && (b.denorm = this.denorm);
        this.tags && (b.tags = this.tags);
        this.normvector && (b.normvector = this.normvector);
        this.$1 !== null &&
          this.$1 !== "" &&
          this.$1 !== void 0 &&
          (b._lid = this.$1);
        c("BanzaiScubaMigrationFalcoEvent").log(function () {
          return { dataset: a.dataset, payload: b };
        });
        this.posted = !0;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "FalcoLoggerTransports",
  [
    "AnalyticsCoreData",
    "Banzai",
    "JSResource",
    "ODS",
    "PersistedQueue",
    "Queue",
    "WebSession",
    "performanceAbsoluteNow",
    "promiseDone",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 5 * 1024,
      i =
        (b = c("AnalyticsCoreData").max_delay_br_queue) != null ? b : 60 * 1e3,
      j =
        (e = c("AnalyticsCoreData").max_delay_br_queue_immediate) != null
          ? e
          : 1e3,
      k = "falco:",
      l = new (c("Queue"))(),
      m = 5e3,
      n = 6e4,
      o = c("uuid")(),
      p = "ods_web_batch",
      q = new Map(),
      r = new Set(),
      s = [],
      t = 0,
      u,
      v = !1,
      w = !1,
      x = !1,
      y = !0,
      z = !1,
      A = Date.now() - n,
      B = 1;
    ((f = c("AnalyticsCoreData").fix_br_init_rc) != null ? f : !1) && R();
    for (
      e =
        (b = c("AnalyticsCoreData").stateful_events_list_for_br) != null
          ? b
          : [],
        f = Array.isArray(e),
        b = 0,
        e = f
          ? e
          : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
      ;

    ) {
      var C;
      if (f) {
        if (b >= e.length) break;
        C = e[b++];
      } else {
        b = e.next();
        if (b.done) break;
        C = b.value;
      }
      C = C;
      r.add(C);
    }
    function D(a, b) {
      K(b.item.name, "js.br.add_to_batch", 1, !0);
      var c = b.item.extra.length;
      t + c > h && (clearTimeout(u), E());
      s.push([a, b]);
      t += c;
    }
    function E() {
      u = null;
      v = !1;
      var a = s;
      I(
        "js.br.send_batch",
        a.map(function (a) {
          return a[1].item;
        })
      );
      if (!z) {
        J("js.br.init_not_complete.log", a.length);
        var b = function () {
          var b = a[d],
            e = b[0],
            f = b[1];
          K(f.item.name, "js.br.banzai_fallback_for_init_not_complete", 1, !0);
          if ((b = f.item.logImmediate) != null ? b : !1) {
            (
              (b =
                c(
                  "AnalyticsCoreData"
                ).use_critical_for_fallback_from_immediate) != null
                ? b
                : !1
            )
              ? L.logCritical([f.item], function (a) {
                  return e.markItem(f, a);
                })
              : L.logImmediately([f.item], function (a) {
                  return e.markItem(f, a);
                });
          } else
            L.log([f.item], function (a) {
              return e.markItem(f, a);
            });
        };
        for (var d = 0; d < a.length; d++) b();
      } else
        l.enqueue(function (b) {
          return b.log(
            a.map(function (a) {
              return a[1].item;
            }),
            function (b) {
              if (!b) {
                J("js.br.banzai_fallback", a.length);
                var d = function () {
                  var d = a[e],
                    b = d[0],
                    f = d[1];
                  K(f.item.name, "js.br.banzai_fallback_for_failure", 1, !0);
                  if ((d = f.item.logImmediate) != null ? d : !1) {
                    (
                      (d =
                        c(
                          "AnalyticsCoreData"
                        ).use_critical_for_fallback_from_immediate) != null
                        ? d
                        : !1
                    )
                      ? L.logCritical([f.item], function (a) {
                          return b.markItem(f, a);
                        })
                      : L.logImmediately([f.item], function (a) {
                          return b.markItem(f, a);
                        });
                  } else
                    L.log([f.item], function (a) {
                      return b.markItem(f, a);
                    });
                };
                for (var e = 0; e < a.length; e++) d();
                return;
              }
              for (d = 0; d < a.length; d++) {
                var f = a[d],
                  g = f[0];
                f = f[1];
                K(
                  f.item.name,
                  "js.br.success_callback.batch.send_batch",
                  1,
                  !0
                );
                g.markItem(f, b);
              }
            }
          );
        });
      s = [];
      t = 0;
    }
    function F(a) {
      return {
        events: a.map(function (a) {
          return {
            name: a.name,
            extra: a.extra,
            rate: a.policy.r,
            time: a.time / 1e3,
            shouldAddState: a.shouldAddState,
          };
        }),
      };
    }
    function G(a) {
      var b;
      a = {
        deviceId: c("AnalyticsCoreData").device_id,
        sessionId: a,
        appId: c("AnalyticsCoreData").app_id,
        pushPhase: c("AnalyticsCoreData").push_phase,
      };
      ((b =
        (b = c("AnalyticsCoreData").stateful_events_list_for_br) == null
          ? void 0
          : b.length) != null
        ? b
        : 0) > 0 && (a.ambientState = c("AnalyticsCoreData").state_for_br);
      return Object.freeze(a);
    }
    function H(a, b) {
      for (var e = 0; e < a.length; e++) {
        var f,
          g = a[e];
        K(g.name, "js.banzai.posting_event", 1, !1);
        f =
          ((f = {}),
          (f.e = g.extra),
          (f.r = g.policy.r),
          (f.d = c("AnalyticsCoreData").device_id),
          (f.s = d("WebSession").getId()),
          (f.t = g.time),
          f);
        g.privacyContext && (f.p = g.privacyContext);
        var h = g.identity;
        h && (f.id = h);
        c("Banzai").post(k + g.name, f, b);
      }
      I("planes.banzai.write_to_transport", a);
    }
    function I(a, b) {
      var c = 0;
      for (var d = 0; d < b.length; d++) {
        var e = b[d];
        e.name !== p && (c += 1);
      }
      c > 0 && J(a, c);
    }
    function J(a, b) {
      var e,
        f = "falco.fabric.www." + c("AnalyticsCoreData").push_phase;
      ((e = c("AnalyticsCoreData").queue_activation_experiment) != null
        ? e
        : !1) && (f += ".queue_activation_experiment");
      d("ODS").bumpEntityKey(1344, f, a, b);
    }
    function K(a, b, c, e) {
      if (a === p) return !1;
      d("ODS").bumpEntityKey(1344, "falco.event." + a, b, c);
      e && J(b, c);
      return !0;
    }
    var L = {
      log: function (a, b) {
        I("js.banzai.post.log", a), H(a, c("Banzai").BASIC), b(!0);
      },
      logImmediately: function (a, b) {
        I("js.banzai.post.log_immediately", a), H(a, c("Banzai").VITAL), b(!0);
      },
      logCritical: function (a, b) {
        I("js.banzai.post.log_critical", a),
          H(a, { signal: !0, retry: !0 }),
          b(!0);
      },
    };
    function M(a) {
      R();
      var b = N(a, "banzai_data_loss", "log"),
        d = N(a, "banzai_data_loss", "logImmediately"),
        e = N(a, "banzai_data_loss", "logCritical"),
        f = N(a, "bladerunner_data_loss", "");
      J("js.br_data_loss.posted." + a, 1);
      if (z && y)
        try {
          l.enqueue(function (b) {
            return b.log([f], function (b) {
              if (!b) {
                J("js.br.transport_failure." + a, 1);
                L.logCritical([f], function (b) {
                  J("js.br.failure_fallback_success_callback." + a, 1);
                });
                return;
              }
              J("js.br.success_callback." + a, 1);
            });
          });
        } catch (b) {
          J("js.br.error_enqueueing." + a, 1),
            L.logCritical([f], function (b) {
              J("js.br.enqueuing_fallback_success_callback." + a, 1);
            });
        }
      else
        y || J("js.br.failed." + a, 1),
          z || J("js.br.init_not_complete." + a, 1),
          L.logCritical([f], function (b) {
            J("js.br.init_fallback_success_callback." + a, 1);
          });
      H([b], c("Banzai").BASIC);
      H([d], c("Banzai").VITAL);
      H([e], { signal: !0, retry: !0 });
    }
    function N(a, b, d) {
      return {
        name: b,
        time: c("performanceAbsoluteNow")(),
        policy: { r: 1 },
        extra: JSON.stringify({
          event_index: a,
          falco_js_connection_id: o,
          logging_mode: d,
          logging_flow_flag: (
            (b = c("AnalyticsCoreData").fix_br_init_rc) != null ? b : !1
          )
            ? "race_condition_fixed"
            : "original_flow",
        }),
      };
    }
    function O() {
      A + m < Date.now() && (M(B), (A = Date.now()), B++);
    }
    function P() {
      window.setTimeout(function () {
        O(), B <= 40 && P();
      }, n);
    }
    function Q(a) {
      l.start(function (b) {
        return b({
          log: function (d, b) {
            I("planes.bladerunner.write_to_transport", d);
            var e = JSON.stringify(F(d));
            a
              ? c("AnalyticsCoreData").enable_ack
                ? c("promiseDone")(
                    a.amendWithAck(e),
                    function (a) {
                      I("planes.bladerunner.ack_received" + a.toString(), d),
                        b(a);
                    },
                    function () {
                      I("planes.bladerunner.ack_failure", d), b(!1);
                    }
                  )
                : (a.amendWithoutAck(e),
                  I("planes.bladerunner.write_without_ack", d))
              : (I("planes.bladerunner.request_stream_null", d), b(!1));
          },
          logImmediately: function (b, a) {
            this.log(b, a);
          },
          logCritical: function (b, a) {
            this.log(b, a);
          },
        });
      });
    }
    function R() {
      var a;
      if (w) return;
      z = !1;
      if (
        !c("AnalyticsCoreData").enable_bladerunner &&
        ((a = c("AnalyticsCoreData").fix_br_init_rc) != null ? a : !1)
      )
        return;
      c("JSResource").loadAll(
        [
          c("JSResource")("TransportSelectingClientSingleton").__setRef(
            "FalcoLoggerTransports"
          ),
          c("JSResource")(
            "RequestStreamCommonRequestStreamCommonTypes"
          ).__setRef("FalcoLoggerTransports"),
        ],
        function (a, b) {
          var e = b.FlowStatus,
            f;
          b = {
            onTermination: function (a) {
              a.message === "Stream closed"
                ? (l.stop(!0), (w = !1))
                : ((y = !1),
                  l.start(function (a) {
                    return a(L);
                  }));
            },
            onFlowStatus: function (a) {
              a === e.Started &&
                !((a = c("AnalyticsCoreData").fix_br_init_rc) != null
                  ? a
                  : !1) &&
                Q(f);
            },
          };
          c("promiseDone")(
            a
              .requestStream(
                { method: "Falco" },
                JSON.stringify(G(d("WebSession").getId())),
                b,
                { requestId: "" }
              )
              .then(function (a) {
                f = a;
                ((a = c("AnalyticsCoreData").fix_br_init_rc) != null
                  ? a
                  : !1) && Q(f);
                z = !0;
              })
              ["catch"](function (a) {
                l.stop(!0), (w = !1);
              })
          );
        }
      );
      w = !0;
    }
    function S(a) {
      var b = a.policy,
        d = a.name;
      r.has(d) && (a.shouldAddState = !0);
      return (
        c("AnalyticsCoreData").enable_bladerunner &&
        y &&
        (b.s === 1 || r.has(d))
      );
    }
    function T(a) {
      if (a === "") return null;
      if (q.has(a)) return q.get(a);
      else {
        var b = { claim: "" },
          c = a.split("^#");
        if (c.length >= 4) {
          var d = c[0],
            e = c[1],
            f = c[2];
          c = c[3];
          f !== ""
            ? (b = { appScopedIdentity: f, claim: c })
            : d !== "" &&
              (b = { fbIdentity: { accountId: d, actorId: e }, claim: c });
          q.set(a, b);
        }
        return b;
      }
    }
    function a() {
      var a;
      if (x) return;
      x = !0;
      c("PersistedQueue").setHandler("falco_queue_log", function (a) {
        var b,
          c = T(a.getQueueNameSuffix());
        while ((b = a.dequeueItem()))
          (function (b) {
            S(b.item)
              ? (K(b.item.name, "js.use_bladerunner.log", 1, !0),
                R(),
                u == null && (u = setTimeout(E, i)),
                D(a, b))
              : (K(b.item.name, "js.use_banzai.log", 1, !0),
                c && (b.item.identity = c),
                L.log([b.item], function (c) {
                  return a.markItem(b, c);
                }));
          })(b);
      });
      c("PersistedQueue").setHandler("falco_queue_immediately", function (a) {
        var b,
          d = T(a.getQueueNameSuffix());
        while ((b = a.dequeueItem()))
          (function (b) {
            S(b.item)
              ? (K(b.item.name, "js.use_bladerunner.log_immediately", 1, !0),
                R(),
                (u == null || !v) &&
                  (clearTimeout(u), (u = setTimeout(E, j)), (v = !0)),
                (b.item.logImmediate = !0),
                D(a, b),
                c("PersistedQueue").isPersistenceAllowed() ||
                  (K(
                    b.item.name,
                    "js.br.send_immediately_no_persistence",
                    1,
                    !0
                  ),
                  E()))
              : (K(b.item.name, "js.use_banzai.log_immediately", 1, !0),
                d && (b.item.identity = d),
                L.logImmediately([b.item], function (c) {
                  return a.markItem(b, c);
                }));
          })(b);
      });
      c("PersistedQueue").setHandler("falco_queue_critical", function (a) {
        var b,
          c = T(a.getQueueNameSuffix());
        while ((b = a.dequeueItem()))
          (function (b) {
            var d = b.item;
            S(d)
              ? (K(d.name, "js.use_bladerunner.log_critical", 1, !0),
                R(),
                !z
                  ? (K(d.name, "js.br.init_not_complete.logCritical", 1, !0),
                    c && (d.identity = c),
                    L.logCritical([d], function (c) {
                      return a.markItem(b, c);
                    }))
                  : l.enqueue(function (e) {
                      return e.logCritical([d], function (e) {
                        if (!e) {
                          J("js.br.banzai_fallback.critical", 1);
                          K(
                            b.item.name,
                            "js.br.banzai_fallback_for_failure.critical",
                            1,
                            !0
                          );
                          c && (d.identity = c);
                          L.logCritical([d], function (c) {
                            return a.markItem(b, c);
                          });
                          return;
                        }
                        K(
                          b.item.name,
                          "js.br.success_callback.batch.critical",
                          1,
                          !0
                        );
                        a.markItem(b, e);
                      });
                    }))
              : (c && (d.identity = c),
                K(d.name, "js.use_banzai.log_critical", 1, !0),
                L.logCritical([d], function (c) {
                  return a.markItem(b, c);
                }));
          })(b);
      });
      ((a = c("AnalyticsCoreData").queue_activation_experiment) != null
        ? a
        : !1) &&
        (c("PersistedQueue").setOnQueueActivateExperiment(),
        c("PersistedQueue").eventEmitter.emit("active", null));
      c("AnalyticsCoreData").enable_dataloss_timer && (R(), O(), P());
    }
    g.attach = a;
  },
  98
);
__d(
  "cancelIdleCallbackBlue",
  ["IdleCallbackImplementation"],
  function (a, b, c, d, e, f, g) {
    var h =
      (c = a.cancelIdleCallback) != null
        ? c
        : d("IdleCallbackImplementation").cancelIdleCallback;
    function b(a) {
      h(a);
    }
    g["default"] = b;
  },
  98
);
__d(
  "BanzaiBase",
  [
    "BanzaiAdapter",
    "BanzaiCompressionUtils",
    "BanzaiConsts",
    "BanzaiLazyQueue",
    "BanzaiUtils",
    "CurrentUser",
    "ErrorGuard",
    "ExecutionEnvironment",
    "FBLogger",
    "NavigationMetrics",
    "SetIdleTimeoutAcrossTransitions",
    "Visibility",
    "WebSession",
    "performanceAbsoluteNow",
  ],
  function (a, b, c, d, e, f) {
    var g,
      h,
      i,
      j,
      k,
      l = [],
      m = null,
      n = {
        _clearPostBuffer: function () {
          l = [];
        },
        _flushLazyQueue: function () {
          b("BanzaiLazyQueue")
            .flushQueue()
            .forEach(function (a) {
              return n.post.apply(n, a);
            });
        },
        _gatherWadsAndPostsFromBuffer: function (a, c, d, e, f) {
          var g = {
            currentSize: 0,
            keepRetryable: d,
            overlimit: !1,
            sendMinimumOnePost: f,
            wadMap: new Map(),
          };
          d = e.filter(function (d, e) {
            return b("BanzaiUtils").filterPost(d, a, c, g);
          });
          g.overlimit && d.length && n._schedule(0);
          return d;
        },
        _getEventTime: function () {
          return (g || (g = b("performanceAbsoluteNow")))();
        },
        _getWebSessionId: function () {
          return b("WebSession").getId();
        },
        _getPostBuffer: function () {
          return l;
        },
        _getUserId: function () {
          return b("CurrentUser").getPossiblyNonFacebookUserID();
        },
        _getAppId: function () {
          return b("CurrentUser").getAppID();
        },
        _initialize: function () {
          b("ExecutionEnvironment").canUseDOM &&
            (n.adapter.useBeacon && b("Visibility").isSupported()
              ? (b("Visibility").addListener(
                  b("Visibility").HIDDEN,
                  function () {
                    n._getPostBuffer().length > 0 &&
                      (n._tryToSendViaBeacon() || n._store(!1));
                  }
                ),
                n.isEnabled("enable_client_logging_clear_on_visible") &&
                  b("Visibility").addListener(
                    b("Visibility").VISIBLE,
                    function () {
                      n._tryToSendViaBeacon() || n._restore(!1);
                    }
                  ))
              : n.adapter.setHooks(n),
            n.adapter.setUnloadHook(n),
            b("NavigationMetrics").addListener(
              b("NavigationMetrics").Events.NAVIGATION_DONE,
              function (a, c) {
                if (c.pageType !== "normal") return;
                n._restore(!1);
                b("NavigationMetrics").removeCurrentListener();
              }
            ));
        },
        _sendBeacon: function (b, c) {
          return a.navigator.sendBeacon(b, c);
        },
        _prepForTransit: function (a) {
          var c = new FormData();
          c.append("ts", String(Date.now()));
          var d = b("BanzaiCompressionUtils").outOfBandsPosts(a);
          Object.keys(d).forEach(function (a) {
            c.append(a, d[a]);
          });
          c.append("q", JSON.stringify(a));
          return c;
        },
        _prepWadForTransit: function (a) {
          b("BanzaiCompressionUtils").compressWad(
            a,
            b("BanzaiAdapter").preferredCompressionMethod()
          );
        },
        _processCallbacksAndSendViaBeacon: function () {
          var a = [],
            c = [],
            d = [];
          n._gatherWadsAndPostsFromBuffer(c, d, !0, a, !1);
          if (c.length > 0) {
            c[0].send_method = "beacon";
            c.map(n._prepWadForTransit);
            d = n._prepForTransit(c);
            a = b("BanzaiAdapter").getEndPointUrl(!0);
            c = n._sendBeacon(a, d);
            c || b("FBLogger")("banzai").warn("Error sending beacon");
          }
        },
        _restore: function (a) {
          a = b("BanzaiAdapter").getStorage();
          var c = function (a) {
            l.push(a);
          };
          (h || (h = b("ErrorGuard"))).applyWithGuard(a.restore, a, [c]);
          n._schedule(
            b("BanzaiAdapter").config.RESTORE_WAIT ||
              (i || (i = b("BanzaiConsts"))).VITAL_WAIT
          );
        },
        _schedule: function (a) {
          var c = n._getEventTime() + a;
          if (!k || c < k) {
            k = c;
            b("SetIdleTimeoutAcrossTransitions").clear(j);
            j = b("SetIdleTimeoutAcrossTransitions").start(
              b("BanzaiAdapter").wrapInTimeSlice(
                n._sendWithCallbacks,
                "Banzai.send"
              ),
              a
            );
            return !0;
          }
          return !1;
        },
        _sendWithCallbacks: function (a, c) {
          k = null;
          n._schedule(n.BASIC.delay);
          if (!b("BanzaiAdapter").readyToSend()) {
            c && c();
            return;
          }
          if (n.isEnabled("flush_storage_periodically")) {
            var d = b("BanzaiAdapter").getStorage(),
              e = function () {
                n._restore(!1);
              };
            (h || (h = b("ErrorGuard"))).applyWithGuard(d.flush, d, [e]);
          }
          b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).SEND);
          d = [];
          var f = [];
          l = n._gatherWadsAndPostsFromBuffer(d, f, !0, l, !0);
          if (d.length <= 0) {
            b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).OK);
            a && a();
            return;
          }
          d[0].trigger = m;
          m = null;
          d[0].send_method = "ajax";
          d.map(n._prepWadForTransit);
          b("BanzaiAdapter").send(
            n._prepForTransit(d),
            function () {
              f.forEach(function (a) {
                a = a;
                a.__meta.status = (i || (i = b("BanzaiConsts"))).POST_SENT;
                a.__meta.callback && a.__meta.callback();
              }),
                a && a();
            },
            function (a) {
              f.forEach(function (c) {
                b("BanzaiUtils").retryPost(c, a, l);
              }),
                c && c();
            }
          );
        },
        _store: function (a) {
          a = b("BanzaiAdapter").getStorage();
          (h || (h = b("ErrorGuard"))).applyWithGuard(a.store, a, [l]);
        },
        _testState: function () {
          return { postBuffer: l, triggerRoute: m };
        },
        _tryToSendViaBeacon: function () {
          if (
            !(
              navigator &&
              navigator.sendBeacon &&
              b("BanzaiAdapter").isOkToSendViaBeacon()
            )
          )
            return !1;
          var a = [],
            c = [];
          l = n._gatherWadsAndPostsFromBuffer(a, c, !1, l, !1);
          if (a.length <= 0) return !1;
          a[0].send_method = "beacon";
          a.map(n._prepWadForTransit);
          a = n._prepForTransit(a);
          var d = b("BanzaiAdapter").getEndPointUrl(!0);
          d = n._sendBeacon(d, a);
          if (!d) {
            c.forEach(function (a) {
              l.push(a);
            });
            return !1;
          }
          return !0;
        },
        _unload: function () {
          if (b("BanzaiAdapter").config.disabled) return;
          n._flushLazyQueue();
          navigator &&
            navigator.sendBeacon &&
            b("BanzaiAdapter").isOkToSendViaBeacon() &&
            n._processCallbacksAndSendViaBeacon();
          b("BanzaiAdapter").cleanup();
          b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).SHUTDOWN);
          l.length > 0 &&
            (!n.adapter.useBeacon || !n._tryToSendViaBeacon()) &&
            n._store(!1);
        },
        BASIC: {
          delay:
            b("BanzaiAdapter").config.MAX_WAIT ||
            (i || (i = b("BanzaiConsts"))).BASIC_WAIT,
        },
        BASIC_WAIT: (i || (i = b("BanzaiConsts"))).BASIC_WAIT,
        ERROR: i.ERROR,
        OK: i.OK,
        SEND: i.SEND,
        SHUTDOWN: i.SHUTDOWN,
        VITAL: {
          delay:
            b("BanzaiAdapter").config.MIN_WAIT ||
            (i || (i = b("BanzaiConsts"))).VITAL_WAIT,
        },
        VITAL_WAIT: i.VITAL_WAIT,
        adapter: b("BanzaiAdapter"),
        canUseNavigatorBeacon: function () {
          return Boolean(
            navigator &&
              navigator.sendBeacon &&
              b("BanzaiAdapter").isOkToSendViaBeacon()
          );
        },
        flush: function (a, c) {
          b("SetIdleTimeoutAcrossTransitions").clear(j),
            n._sendWithCallbacks(a, c);
        },
        isEnabled: function (a) {
          return Boolean(
            b("BanzaiAdapter").config.gks &&
              b("BanzaiAdapter").config.gks[a] &&
              !b("BanzaiAdapter").config.disabled
          );
        },
        post: function (a, c, d) {
          a ||
            b("FBLogger")("banzai").mustfix(
              "Banzai.post called without specifying a route"
            );
          n._flushLazyQueue();
          var e = a.split(":");
          if (
            (b("BanzaiAdapter").config.known_routes || []).indexOf(e[0]) === -1
          ) {
            b("BanzaiAdapter").config.should_log_unknown_routes === !0 &&
              b("FBLogger")("banzai")
                .blameToPreviousFrame()
                .mustfix(
                  "Attempted to post to invalid Banzai route '" +
                    a +
                    "'. This call site should be cleaned up."
                );
            if (b("BanzaiAdapter").config.should_drop_unknown_routes === !0)
              return;
          }
          var f = "";
          try {
            var g;
            f = (g = JSON.stringify(c)) != null ? g : "";
          } catch (c) {
            b("FBLogger")("banzai")
              .catching(c)
              .addToCategoryKey(a)
              .mustfix("Could not JSON.stringify banzai data for route %s", a);
            return;
          }
          var h = d == null ? void 0 : d.retry;
          if (b("BanzaiAdapter").config.disabled) return;
          if (
            !b("ExecutionEnvironment").canUseDOM &&
            !b("ExecutionEnvironment").isInWorker
          )
            return;
          var j = n.adapter.getTopLevel();
          if (j) {
            var k;
            try {
              k = j.require("Banzai");
            } catch (a) {
              k = null;
            }
            if (k) {
              k.post.apply(k, arguments);
              return;
            }
          }
          var o = b("BanzaiAdapter").config.blacklist;
          if (
            o &&
            o.indexOf &&
            typeof o.indexOf == "function" &&
            o.indexOf(a) != -1
          )
            return;
          var p = f.length,
            q = b("BanzaiUtils").wrapData(a, c, n._getEventTime(), h, p),
            r = q;
          (d == null ? void 0 : d.callback) &&
            (r.__meta.callback = d == null ? void 0 : d.callback);
          (d == null ? void 0 : d.compress) != null &&
            (r.__meta.compress = d == null ? void 0 : d.compress);
          var s = d == null ? void 0 : d.delay;
          s == null && (s = (i || (i = b("BanzaiConsts"))).BASIC_WAIT);
          if (d == null ? void 0 : d.signal) {
            r.__meta.status = (i || (i = b("BanzaiConsts"))).POST_INFLIGHT;
            var t = [
              {
                user: n._getUserId(),
                webSessionId: n._getWebSessionId(),
                app_id: n._getAppId(),
                posts: [q],
                trigger: a,
              },
            ];
            b("BanzaiAdapter").send(
              n._prepForTransit(t),
              function () {
                (r.__meta.status = (i || (i = b("BanzaiConsts"))).POST_SENT),
                  r.__meta.callback && r.__meta.callback();
              },
              function (a) {
                b("BanzaiUtils").retryPost(q, a, l);
              },
              !0
            );
            if (!h) return;
          }
          l.push(q);
          (n._schedule(s) || !m) && (m = a);
        },
        subscribe: b("BanzaiAdapter").subscribe,
      };
    n._initialize();
    e.exports = n;
  },
  null
);
