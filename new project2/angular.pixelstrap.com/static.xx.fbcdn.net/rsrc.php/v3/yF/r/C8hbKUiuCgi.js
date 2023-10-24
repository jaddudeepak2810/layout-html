/*FB_PKG_DELIM*/

__d(
  "TetraIcon.react",
  ["CometIcon.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      return h.jsx(
        c("CometIcon.react"),
        babelHelpers["extends"]({}, a, { ref: b })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "VideoPlayerODS",
  ["ODS", "Random"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function (a, b, c) {
      d("Random").coinflip(c) && d("ODS").bumpEntityKey(2079, a, b, c);
    };
    g.bumpEntityKey = a;
  },
  98
);
__d(
  "destroyOnUnload",
  ["Run"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      return d("Run").onLeave(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "dispatchEvent",
  [],
  function (a, b, c, d, e, f) {
    function b(b, c) {
      var d;
      typeof a.Event === "function"
        ? (d = new a.Event(c))
        : ((d = a.document.createEvent("Event")), d.initEvent(c, !0, !0));
      b.dispatchEvent(d);
    }
    f["default"] = b;
  },
  66
);
__d(
  "oz-player/configs/MockOzConfig",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        a === void 0 && (a = {}), (this.$1 = a);
      }
      var b = a.prototype;
      b.getBool = function (a, b) {
        return typeof this.$1[a] === "boolean" ? this.$1[a] : b;
      };
      b.getNumber = function (a, b) {
        return typeof this.$1[a] === "number" ? this.$1[a] : b;
      };
      b.getString = function (a, b) {
        return typeof this.$1[a] === "string" ? this.$1[a] : b;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player/shims/www/getOzGlobalConfigSourceWWW",
  ["oz-player/configs/MockOzConfig", "qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
      allow_subsequent_prefetch: (b = c("qex")._("2085")) != null ? b : !0,
      clear_prefetch_on_unload: (d = c("qex")._("2086")) != null ? d : !1,
      systemic_risk_abr_prefetch_initial_risk_factor:
        (e = c("qex")._("2087")) != null ? e : 3,
      prefetch_retention_duration_ms: (f = c("qex")._("2088")) != null ? f : 0,
      prefetch_resolution_threshold: (b = c("qex")._("2089")) != null ? b : 1e3,
      systemic_risk_abr_prefetch_low_mos_resolution:
        (d = c("qex")._("2090")) != null ? d : 260,
      systemic_risk_abr_min_watchable_mos:
        (e = c("qex")._("2091")) != null ? e : 0,
      systemic_risk_abr_parse_prefetch_mos:
        (f = c("qex")._("2092")) != null ? f : !1,
    };
    function a() {
      return new (c("oz-player/configs/MockOzConfig"))(h);
    }
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/shims/getOzGlobalConfigSource",
  ["oz-player/shims/www/getOzGlobalConfigSourceWWW"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/getOzGlobalConfigSourceWWW");
  },
  98
);
__d(
  "oz-player/configs/OzGlobalConfig",
  ["oz-player/shims/getOzGlobalConfigSource"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("oz-player/shims/getOzGlobalConfigSource")();
    a = {
      getBool: function (a, b) {
        return h ? h.getBool(a, b) : b;
      },
      getNumber: function (a, b) {
        return h ? h.getNumber(a, b) : b;
      },
      getString: function (a, b) {
        return h ? h.getString(a, b) : b;
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "oz-player/shims/www/OzBandwidthEstimatorWWW",
  ["cr:5022"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:5022");
  },
  98
);
__d(
  "oz-player/shims/OzShimBandwidthEstimator",
  ["oz-player/shims/www/OzBandwidthEstimatorWWW"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/OzBandwidthEstimatorWWW");
  },
  98
);
__d(
  "oz-player/networks/OzBandwidthEstimator",
  ["oz-player/shims/OzShimBandwidthEstimator"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/OzShimBandwidthEstimator");
  },
  98
);
__d(
  "oz-player/networks/OzBandwidthUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 0.3,
      h = 3,
      i = 50,
      j = 10,
      k = 5,
      l = new Map([
        ["51", 0.03],
        ["52", 0.06],
        ["53", 0.08],
        ["54", 0.1],
        ["55", 0.13],
        ["56", 0.16],
        ["57", 0.18],
        ["58", 0.2],
        ["59", 0.23],
        ["60", 0.26],
        ["61", 0.28],
        ["62", 0.31],
        ["63", 0.33],
        ["64", 0.36],
        ["65", 0.39],
        ["66", 0.42],
        ["67", 0.44],
        ["68", 0.47],
        ["69", 0.5],
        ["70", 0.53],
        ["71", 0.56],
        ["72", 0.59],
        ["73", 0.62],
        ["74", 0.65],
        ["75", 0.68],
        ["76", 0.71],
        ["77", 0.74],
        ["78", 0.78],
        ["79", 0.81],
        ["80", 0.85],
        ["81", 0.88],
        ["82", 0.92],
        ["83", 0.96],
        ["84", 1],
        ["85", 1.04],
        ["86", 1.08],
        ["87", 1.13],
        ["88", 1.18],
        ["89", 1.23],
        ["90", 1.28],
        ["91", 1.34],
        ["92", 1.41],
        ["93", 1.48],
        ["94", 1.56],
        ["95", 1.65],
        ["96", 1.76],
        ["97", 1.89],
        ["98", 2.06],
        ["99", 2.33],
      ]);
    function a(a, b, c, d) {
      if (a.length === 0) return null;
      var e = n(a);
      a = q(a, b);
      b = a.average;
      a = a.totalWeight;
      var f = j,
        g = k,
        h = i;
      if (c.length > 0) {
        f = o(
          c.map(function (a) {
            return a.timeToFirstByteMs;
          })
        );
        c = p(
          c.map(function (a) {
            return { value: a.timeToFirstByteMs, weight: 1 };
          }),
          d
        );
        h = c.average;
        g = c.totalWeight;
      }
      return {
        bandwidthEstimate: b,
        bandwidthStandardDeviation: e,
        bandwidthTotalWeight: a,
        timeToFirstByteMsEstimate: h,
        timeToFirstByteMsStandardDeviation: f,
        timeToFirstByteMsTotalWeight: g,
      };
    }
    function m(a) {
      var b = 0;
      for (var c = 0; c < a.length; c++)
        b += (a[c].bytes * 8e3) / a[c].timeInMs;
      return b / a.length;
    }
    function n(a) {
      return o(
        a.map(function (a) {
          return (a.bytes * 8e3) / a.timeInMs;
        })
      );
    }
    function o(a) {
      var b =
          a.reduce(function (a, b) {
            return a + b;
          }, 0) / a.length,
        c = 0;
      for (var d = 0; d < a.length; d++) c += Math.pow(a[d] - b, 2);
      return Math.round(Math.sqrt(c / a.length));
    }
    function p(a, b) {
      b = Math.exp(Math.log(0.5) / b);
      var c = 0,
        d = 0;
      for (var e = 0; e < a.length; e++) {
        var f = Math.pow(b, a[e].weight);
        c = a[e].value * (1 - f) + c * f;
        d += a[e].weight;
      }
      f = Math.round(c / (1 - Math.pow(b, d)));
      return { average: f, totalWeight: d };
    }
    function q(a, b) {
      return p(
        a.map(function (a) {
          return {
            value: (a.bytes * 8e3) / a.timeInMs,
            weight: a.timeInMs / 1e3,
          };
        }),
        b
      );
    }
    function r(a, b) {
      var c = m(a),
        d = [];
      for (var e = 0; e < a.length; e++)
        Math.abs(c - (a[e].bytes * 8e3) / a[e].timeInMs) < b && d.push(a[e]);
      return d;
    }
    function b(a, b, c, d) {
      var e = n(a);
      a = r(a, e * c);
      c = q(a, b);
      return c.average - e * d;
    }
    function c(a, b, c) {
      c = l.get(String(c));
      var d = a.bandwidthEstimate,
        e = a.bandwidthStandardDeviation,
        f = a.timeToFirstByteMsStandardDeviation;
      a = a.timeToFirstByteMsEstimate;
      var i = 1,
        j = 1;
      c != null &&
        ((i = 1 - (c * e) / d),
        (i = isNaN(i) ? 1 : Math.max(i, g)),
        (j = 1 + (c * f) / a),
        (j = isNaN(j) ? 1 : j),
        (j = Math.min(j, h)));
      return (8e3 * b) / (d * i) + a * j;
    }
    f.getBandwidthDiagnostics = a;
    f.getMeanBandwidth = m;
    f.getStandardDeviationOfBandwidth = n;
    f.getExponentiallyWeightedMovingAverage = p;
    f.getExponentiallyWeightedMovingAverageOfBandwidth = q;
    f.getBandwidthSamplesWithinRangeOfMean = r;
    f.getBandwidthEstimate = b;
    f.getEstimatedRequestTimeToLastByteMs = c;
  },
  66
);
__d(
  "oz-player/parsers/getMIMECodecs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return a + '; codecs="' + b + '"';
    }
    f["default"] = a;
  },
  66
);
__d(
  "oz-player/shims/www/OzEventEmitterWWW",
  ["BaseEventEmitter"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("BaseEventEmitter");
  },
  98
);
__d(
  "oz-player/shims/OzEventEmitter",
  ["oz-player/shims/www/OzEventEmitterWWW"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/OzEventEmitterWWW");
  },
  98
);
__d(
  "MosUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      if (a === 0 || b === 0) return 0;
      if (a < b) {
        var c = a;
        a = b;
        b = c;
      }
      c = a / b;
      return c > 16 / 9 ? Math.round(a / (16 / 9)) : b;
    }
    function b(a, b) {
      var c = null,
        d = null,
        e = null,
        f = null;
      for (var g = 0; g < a.length; g++) {
        var h = a[g].qualityLabel;
        if (h <= b) (e = a[g].mosValue), (c = h);
        else {
          f = a[g].mosValue;
          d = h;
          break;
        }
      }
      if (c === null && d === null) return 0;
      else if (c === null && f !== null) return f;
      else if (d === null && e !== null) return e;
      else if (f !== null && e !== null && c !== null && d !== null) {
        h = e + ((b - c) * (f - e)) / (d - c);
        return h < 0 ? 0 : h > 100 ? 100 : h;
      }
      return 0;
    }
    function c(a) {
      a = a.split(",");
      var b = [];
      for (var c = 0; c < a.length; c++) {
        var d = a[c].split(":");
        if (d.length !== 2) return null;
        var e = Number(d[0]);
        d = Number(d[1]);
        if (isNaN(e) || isNaN(d)) return null;
        b.push({ qualityLabel: e, mosValue: d });
      }
      return b;
    }
    f.getQualityLabel = a;
    f.getMosValue = b;
    f.parsePlaybackMos = c;
  },
  66
);
__d(
  "PlaybackSpeedExperiments",
  ["gkx", "qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h() {
      return c("gkx")("1755152");
    }
    function i() {
      return !1;
    }
    function a() {
      return h() || i() || c("qex")._("2095");
    }
    function j() {
      return i() ? !1 : c("qex")._("2096") || c("qex")._("2097");
    }
    function b() {
      return k() || j();
    }
    function k() {
      if (i()) return !0;
      return j() ? !1 : h() || c("qex")._("2098");
    }
    function d() {
      if (h()) return !1;
      if (i()) return !0;
      return j() ? !1 : !!c("qex")._("2099");
    }
    function e() {
      if (h()) return !1;
      if (i()) return !1;
      return !j() ? !1 : !!c("qex")._("2100");
    }
    function f() {
      return !0;
    }
    function l() {
      return !!c("qex")._("2101");
    }
    g.enableWwwPlaybackSpeedControl = a;
    g.isInCometHeadroomTest = j;
    g.enableCometPlaybackSpeedControl = b;
    g.enableCometPlaybackSpeedControlPublicTest = k;
    g.enableCometPlaybackSpeedControlNUX = d;
    g.enableCometPlaybackSpeedControlHeadroomTestNUX = e;
    g.enablePlaybackSpeedLogging = f;
    g.enablePersistPlaybackSpeed = l;
  },
  98
);
__d(
  "VideoPlayerContextSensitiveConfigUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = function (a, b) {
      return b.every(function (b) {
        return a[b.name] === b.value;
      });
    };
    a = function (a, b) {
      return b.find(function (b) {
        return g(a, b.contexts);
      });
    };
    f.getFirstMatchingValueAndContextTargets = a;
  },
  66
);
__d(
  "VideoPlayerContextSensitiveConfigResolver",
  [
    "VideoPlayerContextSensitiveConfigPayload",
    "VideoPlayerContextSensitiveConfigUtils",
    "cr:1724253",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$1 = {}),
          (this.$2 = {}),
          a == null
            ? ((this.$3 = c(
                "VideoPlayerContextSensitiveConfigPayload"
              ).static_values),
              (this.$4 = c(
                "VideoPlayerContextSensitiveConfigPayload"
              ).context_sensitive_values))
            : ((this.$3 = a.staticValues),
              (this.$4 = a.contextSensitiveValues));
      }
      var e = a.prototype;
      e.setContexts = function (a) {
        (this.$1 = a), (this.$2 = this.$5(a));
      };
      e.getValue = function (a) {
        if (this.$2[a] != null) return this.$2[a];
        return this.$3[a] != null ? this.$3[a] : null;
      };
      e.$5 = function (a) {
        var b = this;
        return Object.keys(this.$4).reduce(function (c, e) {
          var f = b.$4[e];
          if (f != null) {
            f = d(
              "VideoPlayerContextSensitiveConfigUtils"
            ).getFirstMatchingValueAndContextTargets(a, f);
            f != null && (c[e] = f.value);
          }
          return c;
        }, {});
      };
      a.getPayload = function () {
        return c("VideoPlayerContextSensitiveConfigPayload");
      };
      a.getSources = function () {
        return b("cr:1724253");
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerShakaGlobalConfig",
  ["VideoPlayerContextSensitiveConfigResolver"],
  function (a, b, c, d, e, f, g) {
    var h = new (c("VideoPlayerContextSensitiveConfigResolver"))(),
      i = {};
    a = function (a) {
      i = a;
    };
    b = function (a, b) {
      if (!!i && typeof i[a] === "boolean") return i[a];
      a = h.getValue(a);
      return a != null && typeof a === "boolean" ? a : b;
    };
    d = function (a, b) {
      if (!!i && typeof i[a] === "number") return i[a];
      a = h.getValue(a);
      return a != null && typeof a === "number" ? a : b;
    };
    e = function (a, b) {
      if (!!i && typeof i[a] === "string") return i[a];
      a = h.getValue(a);
      return a != null && typeof a === "string" ? a : b;
    };
    g.setGlobalOverrideConfig = a;
    g.getBool = b;
    g.getNumber = d;
    g.getString = e;
  },
  98
);
__d(
  "filterObject",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty;
    function a(a, b, c) {
      if (!a) return null;
      var d = {};
      for (var e in a) g.call(a, e) && b.call(c, a[e], e, a) && (d[e] = a[e]);
      return d;
    }
    f["default"] = a;
  },
  66
);
__d(
  "mapObject",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a, b, c) {
      if (!a) return null;
      var d = {};
      Object.keys(a).forEach(function (e) {
        d[e] = b.call(c, a[e], e, a);
      });
      return d;
    }
    function a(a, b, c) {
      return g(a, b, c);
    }
    function b(a, b, c) {
      return g(a, b, c);
    }
    function c(a, b, c) {
      return g(a, b, c);
    }
    g.untyped = a;
    g.shape = b;
    g.self = c;
    f["default"] = g;
  },
  66
);
__d(
  "JSResourceForInteraction",
  ["JSResource"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      return c("JSResource").call(null, a);
    }
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "TrackingNodeConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = 58;
    b = 126;
    c = 69;
    d = 42;
    e = 47;
    var g = 6,
      h = 100,
      i = 33,
      j = 38,
      k = (g + 1) * c,
      l = "__tn__";
    f.BASE_CODE_START = a;
    f.BASE_CODE_END = b;
    f.BASE_CODE_SIZE = c;
    f.PREFIX_CODE_START = d;
    f.PREFIX_CODE_END = e;
    f.PREFIX_CODE_SIZE = g;
    f.ENCODE_NUMBER_MAX = h;
    f.ENCODED_STRING_WITH_TWO_SYMBOLS_PREFIX_CODE = i;
    f.ENCODED_STRING_WITH_THREE_SYMBOLS_PREFIX_CODE = j;
    f.TOTAL_IDS_SUPPORTED_BY_LEGACY_ENCODING = k;
    f.TN_URL_PARAM = l;
  },
  66
);
__d(
  "relay-runtime/mutations/readUpdatableQuery",
  [
    "relay-runtime/mutations/createUpdatableProxy",
    "relay-runtime/query/GraphQLTag",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime/query/GraphQLTag").getUpdatableQuery,
      h = b(
        "relay-runtime/mutations/createUpdatableProxy"
      ).createUpdatableProxy;
    function a(a, b, c, d) {
      a = g(a);
      return { updatableData: h(c.getRoot(), b, a.fragment.selections, c, d) };
    }
    e.exports = { readUpdatableQuery: a };
  },
  null
);
__d(
  "cssVar",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      throw new Error('cssVar("' + a + '"): Unexpected class transformation.');
    }
    f["default"] = a;
  },
  66
);
