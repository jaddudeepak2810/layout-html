/*FB_PKG_DELIM*/

__d(
  "PluginCSSReflowHack",
  ["Style"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      setTimeout(function () {
        var b = "border-bottom-width",
          d = c("Style").get(a, b);
        c("Style").set(a, b, parseInt(d, 10) + 1 + "px");
        c("Style").set(a, b, d);
      }, 1e3);
    }
    g.trigger = a;
  },
  98
);
__d(
  "isLinkshimURI",
  ["isBulletinDotComURI", "isFacebookURI", "isMessengerDotComURI"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.getPath();
      return (b === "/l.php" ||
        b.indexOf("/si/ajax/l/") === 0 ||
        b.indexOf("/l/") === 0 ||
        b.indexOf("l/") === 0) &&
        (c("isFacebookURI")(a) ||
          c("isMessengerDotComURI")(a) ||
          c("isBulletinDotComURI")(a))
        ? !0
        : !1;
    }
    g["default"] = a;
  },
  98
);
__d(
  "isSparkDotMetaDotComURI",
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)spark\\.meta\\.com$", "i"),
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
  "ReactDOM",
  ["cr:4865", "err"],
  function (a, b, c, d, e, f, g) {
    var h, i, j, k, l;
    function m() {
      var a = c("err")(
        "This React API is not implemented in this environment. Use ReactDOMComet instead."
      );
      throw a;
    }
    function n() {
      var a = c("err")(
        "This React API is not implemented in this environment. Use ReactDOMLegacy_DEPRECATED instead."
      );
      throw a;
    }
    d =
      (a = b("cr:4865").createRoot) != null
        ? a
        : function () {
            return m();
          };
    f =
      (e = b("cr:4865").hydrateRoot) != null
        ? e
        : function () {
            return m();
          };
    e =
      (a = b("cr:4865").unstable_createEventHandleInternal) != null
        ? a
        : function () {
            return m();
          };
    a =
      (a = b("cr:4865").unstable_flushControlled) != null
        ? a
        : function () {
            return m();
          };
    h =
      (h = b("cr:4865").findDOMNode) != null
        ? h
        : function () {
            return n();
          };
    i =
      (i = b("cr:4865").hydrate) != null
        ? i
        : function () {
            return n();
          };
    j =
      (j = b("cr:4865").render) != null
        ? j
        : function () {
            return n();
          };
    k =
      (k = b("cr:4865").unmountComponentAtNode) != null
        ? k
        : function () {
            return n();
          };
    l =
      (l = b("cr:4865").unstable_renderSubtreeIntoContainer) != null
        ? l
        : function () {
            return n();
          };
    g.createRoot = d;
    g.hydrateRoot = f;
    g.unstable_createEventHandle = e;
    g.unstable_flushControlled = a;
    g.findDOMNode = h;
    g.hydrate = i;
    g.render = j;
    g.unmountComponentAtNode = k;
    g.unstable_renderSubtreeIntoContainer = l;
    g.createPortal = b("cr:4865").createPortal;
    g.flushSync = b("cr:4865").flushSync;
    g.unstable_batchedUpdates = b("cr:4865").unstable_batchedUpdates;
    g.version = b("cr:4865").version;
    g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
      b("cr:4865").__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  },
  98
);
__d(
  "SubscriptionsHandler",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function i(a) {
      return a.remove || a.reset || a.unsubscribe || a.cancel || a.dispose;
    }
    function j(a) {
      i(a).call(a);
    }
    a = (function () {
      function a() {
        this.$1 = [];
      }
      var b = a.prototype;
      b.addSubscriptions = function () {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
          b[c] = arguments[c];
        b.every(i) || h(0, 3659);
        this.$1 != null ? (this.$1 = this.$1.concat(b)) : b.forEach(j);
      };
      b.engage = function () {
        this.$1 == null && (this.$1 = []);
      };
      b.release = function () {
        this.$1 != null && (this.$1.forEach(j), (this.$1 = null));
      };
      b.releaseOne = function (a) {
        var b = this.$1;
        if (b == null) return;
        var c = b.indexOf(a);
        c !== -1 && (j(a), b.splice(c, 1), b.length === 0 && (this.$1 = null));
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "throttle",
  [
    "TimeSlice",
    "TimeSliceInteractionSV",
    "setTimeout",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g) {
    function a(a, b, d) {
      return h(a, b, d, c("setTimeout"), !1);
    }
    Object.assign(a, {
      acrossTransitions: function (a, b, d) {
        return h(a, b, d, c("setTimeoutAcrossTransitions"), !1);
      },
      withBlocking: function (a, b, d) {
        return h(a, b, d, c("setTimeout"), !0);
      },
      acrossTransitionsWithBlocking: function (a, b, d) {
        return h(a, b, d, c("setTimeoutAcrossTransitions"), !0);
      },
    });
    function h(a, b, d, e, f) {
      var g = b == null ? 100 : b,
        h,
        i = null,
        j = 0,
        k = null,
        l = [],
        m = c("TimeSlice").guard(
          function () {
            j = Date.now();
            if (i) {
              var b = function (b) {
                  a.apply(h, b);
                }.bind(null, i),
                c = l.length;
              while (--c >= 0) b = l[c].bind(null, b);
              l = [];
              b();
              i = null;
              k = e(m, g);
            } else k = null;
          },
          "throttle_" + g + "_ms",
          {
            propagationType: c("TimeSlice").PropagationType.EXECUTION,
            registerCallStack: !0,
          }
        );
      m.__SMmeta = a.__SMmeta;
      return function () {
        c("TimeSliceInteractionSV").ref_counting_fix &&
          l.push(
            c("TimeSlice").getGuardedContinuation("throttleWithContinuation")
          );
        for (var a = arguments.length, b = new Array(a), n = 0; n < a; n++)
          b[n] = arguments[n];
        i = b;
        h = this;
        d !== void 0 && (h = d);
        (k === null || Date.now() - j > g) && (f === !0 ? m() : (k = e(m, 0)));
      };
    }
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "Base64",
  [],
  function (a, b, c, d, e, f) {
    var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function h(a) {
      a = (a.charCodeAt(0) << 16) | (a.charCodeAt(1) << 8) | a.charCodeAt(2);
      return String.fromCharCode(
        g.charCodeAt(a >>> 18),
        g.charCodeAt((a >>> 12) & 63),
        g.charCodeAt((a >>> 6) & 63),
        g.charCodeAt(a & 63)
      );
    }
    var i =
      ">___?456789:;<=_______\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19______\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123";
    function j(a) {
      a =
        (i.charCodeAt(a.charCodeAt(0) - 43) << 18) |
        (i.charCodeAt(a.charCodeAt(1) - 43) << 12) |
        (i.charCodeAt(a.charCodeAt(2) - 43) << 6) |
        i.charCodeAt(a.charCodeAt(3) - 43);
      return String.fromCharCode(a >>> 16, (a >>> 8) & 255, a & 255);
    }
    var k = {
      encode: function (a) {
        a = unescape(encodeURI(a));
        var b = (a.length + 2) % 3;
        a = (a + "\0\0".slice(b)).replace(/[\s\S]{3}/g, h);
        return a.slice(0, a.length + b - 2) + "==".slice(b);
      },
      decode: function (a) {
        a = a.replace(/[^A-Za-z0-9+\/]/g, "");
        var b = (a.length + 3) & 3;
        a = (a + "AAA".slice(b)).replace(/..../g, j);
        a = a.slice(0, a.length + b - 3);
        try {
          return decodeURIComponent(escape(a));
        } catch (a) {
          throw new Error("Not valid UTF-8");
        }
      },
      encodeObject: function (a) {
        return k.encode(JSON.stringify(a));
      },
      decodeObject: function (a) {
        return JSON.parse(k.decode(a));
      },
      encodeNums: function (a) {
        return String.fromCharCode.apply(
          String,
          a.map(function (a) {
            return g.charCodeAt(
              (a | -(a > 63 ? 1 : 0)) & -(a > 0 ? 1 : 0) & 63
            );
          })
        );
      },
    };
    a = k;
    f["default"] = a;
  },
  66
);
__d(
  "CometLruCache",
  ["recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function () {
      function a(a) {
        (this.$1 = a),
          a <= 0 &&
            c("recoverableViolation")(
              "CometLruCache: Unable to create instance of cache with zero or negative capacity.",
              "CometLruCache"
            ),
          (this.$2 = new Map());
      }
      var b = a.prototype;
      b.set = function (a, b) {
        this.$2["delete"](a);
        this.$2.set(a, b);
        if (this.$2.size > this.$1) {
          a = this.$2.keys().next();
          a.done || this.$2["delete"](a.value);
        }
      };
      b.get = function (a) {
        var b = this.$2.get(a);
        b != null && (this.$2["delete"](a), this.$2.set(a, b));
        return b;
      };
      b.has = function (a) {
        return this.$2.has(a);
      };
      b["delete"] = function (a) {
        this.$2["delete"](a);
      };
      b.size = function () {
        return this.$2.size;
      };
      b.capacity = function () {
        return this.$1 - this.$2.size;
      };
      b.clear = function () {
        this.$2.clear();
      };
      return a;
    })();
    function a(a) {
      return new h(a);
    }
    g.create = a;
  },
  98
);
__d(
  "ConstUriUtils",
  [
    "CometLruCache",
    "FBLogger",
    "PHPQuerySerializer",
    "PHPQuerySerializerNoEncoding",
    "URIRFC3986",
    "URISchemes",
    "UriNeedRawQuerySVConfig",
    "isSameOrigin",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("CometLruCache").create(5e3),
      i = new RegExp("(^|\\.)facebook\\.com$", "i"),
      j = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),
      k = new RegExp(
        "[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"
      ),
      l = c("UriNeedRawQuerySVConfig").uris.map(function (a) {
        return { domain: a, valid: r(a) };
      }),
      m = [];
    function n(a, b) {
      var d = {};
      if (a != null)
        for (
          var a = a.entries(),
            e = Array.isArray(a),
            f = 0,
            a = e
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= a.length) break;
            g = a[f++];
          } else {
            f = a.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          d[g[0]] = g[1];
        }
      else
        c("FBLogger")("ConstUriUtils").warn(
          "Passed a null query map in, this means poor client side flow coverage or client/server boundary type issue."
        );
      return b.serialize(d);
    }
    function o(a, b, d) {
      var e = c("PHPQuerySerializer");
      if (["http", "https"].includes(b) && p(a)) {
        if (a.includes("doubleclick.net") && d != null && !d.startsWith("http"))
          return e;
        e = c("PHPQuerySerializerNoEncoding");
      }
      return e;
    }
    function p(a) {
      return (
        a != null &&
        l.some(function (b) {
          return b.valid && q(a, b.domain);
        })
      );
    }
    function q(a, b) {
      if (b === "" || a === "") return !1;
      if (a.endsWith(b)) {
        b = a.length - b.length - 1;
        if (b === -1 || a[b] === ".") return !0;
      }
      return !1;
    }
    function r(a) {
      return !k.test(a);
    }
    function s(a, b) {
      var c =
        b.protocol != null && b.protocol !== "" ? b.protocol : a.getProtocol();
      c = b.domain != null ? o(b.domain, c) : a.getSerializer();
      c = {
        domain: a.getDomain(),
        fragment: a.getFragment(),
        fragmentSeparator: a.hasFragmentSeparator(),
        isGeneric: a.isGeneric(),
        originalRawQuery: a.getOriginalRawQuery(),
        path: a.getPath(),
        port: a.getPort(),
        protocol: a.getProtocol(),
        queryParams: a.getQueryParams(),
        serializer: c,
        subdomain: a.getSubdomain(),
      };
      a = babelHelpers["extends"]({}, c, b);
      c = b.queryParams != null && b.queryParams.size !== 0;
      return x.getUribyObject(a, c);
    }
    function t(a, b, c, d) {
      c === void 0 && (c = !1);
      var e =
          a.protocol !== "" ? a.protocol + ":" + (a.isGeneric ? "" : "//") : "",
        f = a.domain !== "" ? a.domain : "",
        g = a.port !== "" ? ":" + a.port : "",
        h =
          a.path !== ""
            ? a.path
            : (e !== "" && e !== "mailto:") || f !== "" || g !== ""
            ? "/"
            : "";
      c = u(
        f,
        a.originalRawQuery,
        a.queryParams,
        b,
        c,
        (b = d) != null ? b : a.serializer
      );
      d = c.length > 0 ? "?" : "";
      b = a.fragment !== "" ? "#" + a.fragment : "";
      a = a.fragment === "" && a.fragmentSeparator ? "#" : "";
      return "" + e + f + g + h + d + c + a + b;
    }
    function u(a, b, c, d, e, f) {
      e === void 0 && (e = !1);
      if (!d && (e || p(a))) {
        return (d = b) != null ? d : "";
      }
      return n(c, f);
    }
    function v(a) {
      var b = a.trim();
      b = d("URIRFC3986").parse(b) || {
        fragment: null,
        host: null,
        isGenericURI: !1,
        query: null,
        scheme: null,
        userinfo: null,
      };
      var c = b.host || "",
        e = c.split(".");
      e = e.length >= 3 ? e[0] : "";
      var f = o(c, b.scheme || "", b.query),
        g = f.deserialize(b.query || "") || {};
      g = new Map(Object.entries(g));
      g = w(
        {
          domain: c,
          fragment: b.fragment || "",
          fragmentSeparator: b.fragment === "",
          isGeneric: b.isGenericURI,
          originalRawQuery: b.query,
          path: b.path || "",
          port: b.port != null ? String(b.port) : "",
          protocol: (b.scheme || "").toLowerCase(),
          queryParams: g,
          serializer: f,
          subdomain: e,
          userInfo: (c = b == null ? void 0 : b.userinfo) != null ? c : "",
        },
        a
      );
      return g;
    }
    function w(a, b) {
      var c = {
          components: babelHelpers["extends"]({}, a),
          error: "",
          valid: !0,
        },
        e = c.components;
      if (!d("URISchemes").isAllowed(a.protocol)) {
        c.valid = !1;
        c.error =
          'The URI protocol "' + String(a.protocol) + '" is not allowed.';
        return c;
      }
      if (!r(a.domain || "")) {
        c.valid = !1;
        c.error = "This is an unsafe domain " + String(a.domain);
        return c;
      }
      e.port = (a.port != null && String(a.port)) || "";
      if (Boolean(a.userInfo)) {
        c.valid = !1;
        c.error =
          "Invalid URI: (userinfo is not allowed in a URI " +
          String(a.userInfo) +
          ")";
        return c;
      }
      a = b != null && b !== "" ? b : t(e, !1);
      if (e.domain === "" && e.path.indexOf("\\") !== -1) {
        c.valid = !1;
        c.error =
          "Invalid URI: (no domain but multiple back-slashes " + a + ")";
        return c;
      }
      if (!e.protocol && j.test(a)) {
        c.valid = !1;
        c.error = "Invalid URI: (unsafe protocol-relative URI " + a + ")";
        return c;
      }
      if (e.domain !== "" && e.path !== "" && !e.path.startsWith("/")) {
        c.valid = !1;
        c.error =
          "Invalid URI: (domain and pathwhere path lacks leading slash " +
          a +
          ")";
        return c;
      }
      return c;
    }
    var x = (function () {
      function a(a) {
        (this.queryParams = new Map()),
          (this.domain = a.domain),
          (this.fragment = a.fragment),
          (this.fragmentSeparator = Boolean(a.fragmentSeparator)),
          (this.isGenericProtocol = Boolean(a.isGeneric)),
          (this.path = a.path),
          (this.originalRawQuery = a.originalRawQuery),
          (this.port = a.port),
          (this.protocol = a.protocol),
          (this.queryParams = a.queryParams),
          (this.serializer = a.serializer),
          (this.subdomain = a.subdomain);
      }
      var b = a.prototype;
      b.addQueryParam = function (a, b) {
        if (Boolean(a)) {
          var c = this.getQueryParams();
          c.set(a, b);
          return s(this, { queryParams: c });
        }
        return this;
      };
      b.addQueryParams = function (a) {
        if (a.size > 0) {
          var b = this.getQueryParams();
          a.forEach(function (a, c) {
            b.set(c, a);
          });
          return s(this, { queryParams: b });
        }
        return this;
      };
      b.addQueryParamString = function (a) {
        if (Boolean(a)) {
          a = a.startsWith("?") ? a.slice(1) : a;
          var b = this.getQueryParams();
          a.split("&").map(function (a) {
            a = a.split("=");
            var c = a[0];
            a = a[1];
            b.set(c, a);
          });
          return s(this, { queryParams: b });
        }
        return this;
      };
      b.addTrailingSlash = function () {
        var a = this.getPath();
        return a.length > 0 && a[a.length - 1] !== "/"
          ? this.setPath(a + "/")
          : this;
      };
      b.getDomain = function () {
        return this.domain;
      };
      b.getFragment = function () {
        return this.fragment;
      };
      b.getOrigin = function () {
        var a = this.getPort();
        return (
          this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "")
        );
      };
      b.getOriginalRawQuery = function () {
        return this.originalRawQuery;
      };
      b.getPath = function () {
        return this.path;
      };
      b.getPort = function () {
        return this.port;
      };
      b.getProtocol = function () {
        return this.protocol.toLowerCase();
      };
      b.getQualifiedUri = function () {
        if (!this.getDomain()) {
          var b = String(window.location.href);
          b = b.slice(0, b.indexOf("/", b.indexOf(":") + 3));
          return a.getUri(b + this.toString());
        }
        return this;
      };
      b.getQueryParam = function (a) {
        a = this.queryParams.get(a);
        if (typeof a === "string") return a;
        else {
          a = JSON.stringify(a);
          return a == null ? a : JSON.parse(a);
        }
      };
      b.getQueryData = function () {
        return Object.fromEntries(this.getQueryParams());
      };
      b.getQueryParams = function () {
        return new Map(
          JSON.parse(JSON.stringify(Array.from(this.queryParams)))
        );
      };
      b.getQueryString = function (a) {
        a === void 0 && (a = !1);
        return u(
          this.domain,
          this.originalRawQuery,
          this.queryParams,
          !1,
          a,
          this.serializer
        );
      };
      b.getRegisteredDomain = function () {
        if (!this.getDomain()) return "";
        if (!this.isFacebookUri()) return null;
        var a = this.getDomain().split("."),
          b = a.indexOf("facebook");
        b === -1 && (b = a.indexOf("workplace"));
        return a.slice(b).join(".");
      };
      b.getSerializer = function () {
        return this.serializer;
      };
      b.getSubdomain = function () {
        return this.subdomain;
      };
      b.getUnqualifiedUri = function () {
        if (this.getDomain()) {
          var b = this.toString();
          return a.getUri(b.slice(b.indexOf("/", b.indexOf(":") + 3)));
        }
        return this;
      };
      a.getUri = function (b) {
        b = b.trim();
        var d = h.get(b);
        if (d == null) {
          var e = v(b);
          if (e.valid) (d = new a(e.components)), h.set(b, d);
          else {
            c("FBLogger")("ConstUriUtils").blameToPreviousFrame().warn(e.error);
            return null;
          }
        }
        return d;
      };
      a.getUribyObject = function (b, d) {
        var e = t(b, d),
          f = h.get(e);
        if (f == null) {
          d && (b.originalRawQuery = n(b.queryParams, b.serializer));
          d = w(b);
          if (d.valid) (f = new a(d.components)), h.set(e, f);
          else {
            c("recoverableViolation")(d.error, "ConstUri");
            return null;
          }
        }
        return f;
      };
      b.hasFragmentSeparator = function () {
        return this.fragmentSeparator;
      };
      b.isEmpty = function () {
        return !(
          this.getPath() ||
          this.getProtocol() ||
          this.getDomain() ||
          this.getPort() ||
          this.queryParams.size > 0 ||
          this.getFragment()
        );
      };
      b.isFacebookUri = function () {
        var a = this.toString();
        if (a === "") return !1;
        return !this.getDomain() && !this.getProtocol()
          ? !0
          : ["https", "http"].indexOf(this.getProtocol()) !== -1 &&
              i.test(this.getDomain());
      };
      b.isGeneric = function () {
        return this.isGenericProtocol;
      };
      b.isSameOrigin = function (a) {
        return c("isSameOrigin")(this, a);
      };
      b.isSameOriginOrRelativePath_DEPRECATED = function (a) {
        if (this.getProtocol() && this.getProtocol() !== a.getProtocol())
          return !1;
        if (this.getDomain() && this.getDomain() !== a.getDomain()) return !1;
        if (this.getPort() && this.getPort() !== a.getPort()) return !1;
        return this.toString() === "" || a.toString() === "" ? !1 : !0;
      };
      b.isSubdomainOfDomain = function (b) {
        var c = a.getUri(b);
        return c != null && q(this.domain, b);
      };
      b.isSecure = function () {
        return this.getProtocol() === "https";
      };
      b.removeQueryParams = function (a) {
        if (Array.isArray(a) && a.length > 0) {
          var b = this.getQueryParams();
          a.map(function (a) {
            return b["delete"](a);
          });
          return s(this, { queryParams: b });
        }
        return this;
      };
      b.removeQueryParam = function (a) {
        if (Boolean(a)) {
          var b = this.getQueryParams();
          b["delete"](a);
          return s(this, { queryParams: b });
        }
        return this;
      };
      b.replaceQueryParam = function (a, b) {
        if (Boolean(a)) {
          var c = this.getQueryParams();
          c.set(a, b);
          return s(this, { queryParams: c });
        }
        return this;
      };
      b.replaceQueryParams = function (a) {
        return s(this, { queryParams: a });
      };
      b.replaceQueryParamString = function (a) {
        if (a != null) {
          a = a.startsWith("?") ? a.slice(1) : a;
          var b = this.getQueryParams();
          a.split("&").map(function (a) {
            a = a.split("=");
            var c = a[0];
            a = a[1];
            b.set(c, a);
          });
          return s(this, { queryParams: b });
        }
        return this;
      };
      b.setDomain = function (a) {
        if (Boolean(a)) {
          var b = a.split(".");
          b = b.length >= 3 ? b[0] : "";
          return s(this, { domain: a, subdomain: b });
        }
        return this;
      };
      b.setFragment = function (a) {
        return a === "#"
          ? s(this, { fragment: "", fragmentSeparator: !0 })
          : s(this, { fragment: a, fragmentSeparator: a !== "" });
      };
      b.setPath = function (a) {
        return a != null ? s(this, { path: a }) : this;
      };
      b.setPort = function (a) {
        return Boolean(a) ? s(this, { port: a }) : this;
      };
      b.setProtocol = function (a) {
        return Boolean(a) ? s(this, { protocol: a }) : this;
      };
      b.setSecure = function (a) {
        return this.setProtocol(a ? "https" : "http");
      };
      b.setSubDomain = function (a) {
        if (Boolean(a)) {
          var b = this.domain.split(".");
          b.length >= 3 ? (b[0] = a) : b.unshift(a);
          return s(this, { domain: b.join("."), subdomain: a });
        }
        return this;
      };
      b.stripTrailingSlash = function () {
        return this.setPath(this.getPath().replace(/\/$/, ""));
      };
      a.$1 = function (a) {
        a = a;
        for (var b = 0; b < m.length; b++) {
          var c = m[b];
          a = c(a);
        }
        return a;
      };
      b.$2 = function (b, c) {
        c === void 0 && (c = !1);
        return t(
          {
            domain: a.$1(this.domain),
            fragment: this.fragment,
            fragmentSeparator: this.fragmentSeparator,
            isGeneric: this.isGenericProtocol,
            originalRawQuery: this.originalRawQuery,
            path: this.path,
            port: this.port,
            protocol: this.protocol,
            queryParams: this.queryParams,
            serializer: b,
            subdomain: this.subdomain,
            userInfo: "",
          },
          !1,
          c
        );
      };
      b.toStringRawQuery = function () {
        this.rawStringValue == null &&
          (this.rawStringValue = this.$2(c("PHPQuerySerializerNoEncoding")));
        return this.rawStringValue;
      };
      b.toString = function () {
        this.stringValue == null &&
          (this.stringValue = this.$2(this.serializer));
        return this.stringValue;
      };
      b.toStringPreserveQuery = function () {
        return this.$2(this.serializer, !0);
      };
      a.isValidUri = function (b) {
        var c = h.get(b);
        if (c != null) return !0;
        c = v(b);
        if (c.valid) {
          h.set(b, new a(c.components));
          return !0;
        }
        return !1;
      };
      return a;
    })();
    function a(a) {
      if (a instanceof x) return a;
      else return null;
    }
    function b(a) {
      m.push(a);
    }
    e = x.getUri;
    f = x.isValidUri;
    g.isSubdomainOfDomain = q;
    g.isConstUri = a;
    g.registerDomainFilter = b;
    g.getUri = e;
    g.isValidUri = f;
  },
  98
);
__d(
  "routeBuilderUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = a.split("/");
      return a
        .filter(function (a) {
          return a !== "";
        })
        .map(function (a) {
          var b = a.split(/{|}/);
          if (b.length < 3) return { isToken: !1, part: a };
          else {
            a = b[0];
            var c = b[1];
            b = b[2];
            var d = c[0] === "?",
              e = c[d ? 1 : 0] === "*";
            c = c.substring((d ? 1 : 0) + (e ? 1 : 0));
            return {
              isToken: !0,
              optional: d,
              catchAll: e,
              prefix: a,
              suffix: b,
              token: c,
            };
          }
        });
    }
    f.getPathParts = a;
  },
  66
);
__d(
  "jsRouteBuilder",
  ["ConstUriUtils", "FBLogger", "routeBuilderUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "#";
    function a(a, b, e, f, g) {
      g === void 0 && (g = !1);
      var i = d("routeBuilderUtils").getPathParts(a);
      function j(j) {
        try {
          var k =
              f != null
                ? babelHelpers["extends"]({}, f, j)
                : (j = j) != null
                ? j
                : {},
            l = {};
          j = "";
          var m = !1;
          j = i.reduce(function (a, c) {
            if (!c.isToken) return a + "/" + c.part;
            else {
              var d,
                e = c.optional,
                f = c.prefix,
                g = c.suffix;
              c = c.token;
              if (e && m) return a;
              d = (d = k[c]) != null ? d : b[c];
              if (d == null && e) {
                m = !0;
                return a;
              }
              if (d == null)
                throw new Error("Missing required template parameter: " + c);
              if (d === "")
                throw new Error(
                  "Required template parameter is an empty string: " + c
                );
              l[c] = !0;
              return a + "/" + f + d + g;
            }
          }, "");
          a.slice(-1) === "/" && (j += "/");
          j === "" && (j = "/");
          var n = d("ConstUriUtils").getUri(j);
          for (var o in k) {
            var p = k[o];
            !l[o] &&
              p != null &&
              n != null &&
              (e != null && e.has(o)
                ? p !== !1 && (n = n.addQueryParam(o, null))
                : (n = n.addQueryParam(o, p)));
          }
          return [n, j];
        } catch (b) {
          p = b == null ? void 0 : b.message;
          o = c("FBLogger")("JSRouteBuilder")
            .blameToPreviousFrame()
            .blameToPreviousFrame();
          g && (o = o.blameToPreviousFrame());
          o.mustfix("Failed building URI for base path: %s message: %s", a, p);
          return [null, h];
        }
      }
      return {
        buildUri: function (a) {
          a = (a = j(a)[0]) != null ? a : d("ConstUriUtils").getUri(h);
          if (a == null)
            throw new Error("Not even the fallback URL parsed validly!");
          return a;
        },
        buildUriNullable: function (a) {
          return j(a)[0];
        },
        buildURL: function (a) {
          a = j(a);
          var b = a[0];
          a = a[1];
          return (b = b == null ? void 0 : b.toString()) != null ? b : a;
        },
        buildURLStringDEPRECATED: function (a) {
          a = j(a);
          var b = a[0];
          a = a[1];
          return (b = b == null ? void 0 : b.toString()) != null ? b : a;
        },
      };
    }
    g["default"] = a;
  },
  98
);
