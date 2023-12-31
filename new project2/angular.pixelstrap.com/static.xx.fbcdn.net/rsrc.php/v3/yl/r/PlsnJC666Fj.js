/*FB_PKG_DELIM*/

__d(
  "PageTransitions",
  ["cr:917439"],
  function (a, b, c, d, e, f, g) {
    g["default"] = b("cr:917439");
  },
  98
);
__d(
  "BladeRunnerStreamStatus",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      CREATED: 0,
      ACCEPTED: 1,
      REJECTED: 2,
      STARTED: 3,
      STOPPED: 4,
      CLOSED: 5,
    };
    f.StreamStatus = a;
  },
  66
);
__d(
  "RequestStreamCommonRequestStreamCommonTypes",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    c = (a = b("$InternalEnum"))({ Accepted: 1, Started: 2, Stopped: 3 });
    d = a({ Rejected: 40, Error: 50, TryAgain: 80, Closed: 99 });
    f = a({ BestEffort: 0, Socket: 10, Device: 20 });
    b = a({
      Flow_status: "flow_status",
      Log: "log",
      Rewrite: "rewrite",
      Data: "data",
      Termination: "termination",
      Amend_ack: "amend_ack",
    });
    e.exports = {
      AckLevel: f,
      FlowStatus: c,
      StreamResponseDelta$Types: b,
      TerminationReason: d,
    };
  },
  null
);
__d(
  "getVendorPrefixedName",
  ["invariant", "ExecutionEnvironment", "UserAgent", "camelize"],
  function (a, b, c, d, e, f, g, h) {
    var i = {},
      j = ["Webkit", "ms", "Moz", "O"],
      k = new RegExp("^(" + j.join("|") + ")"),
      l = c("ExecutionEnvironment").canUseDOM
        ? document.createElement("div").style
        : {};
    function m(a) {
      for (var b = 0; b < j.length; b++) {
        var c = j[b] + a;
        if (c in l) return c;
      }
      return null;
    }
    function n(a) {
      switch (a) {
        case "lineClamp":
          return c("UserAgent").isEngine("WebKit >= 315.14.2")
            ? "WebkitLineClamp"
            : null;
        default:
          return null;
      }
    }
    function a(a) {
      var b = c("camelize")(a);
      if (i[b] === void 0) {
        var d = b.charAt(0).toUpperCase() + b.slice(1);
        k.test(d) && h(0, 957, a);
        c("ExecutionEnvironment").canUseDOM
          ? (i[b] = b in l ? b : m(d))
          : (i[b] = n(b));
      }
      return i[b];
    }
    g["default"] = a;
  },
  98
);
__d(
  "shield",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      for (
        var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2;
        e < c;
        e++
      )
        d[e - 2] = arguments[e];
      if (typeof a !== "function")
        throw new TypeError("shield expects a function as the first argument");
      return function () {
        return a.apply(b, d);
      };
    }
    f["default"] = a;
  },
  66
);
__d(
  "DGWConstants",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 3e4,
      h = "prod",
      i = 128,
      j = (b = b("$InternalEnum"))({
        NORMAL_CLOSURE: 1e3,
        GOING_AWAY: 1001,
        ABNORMAL_CLOSURE: 1006,
        SERVER_INTERNAL_ERROR: 1011,
        GRACEFUL_CLOSE: 4e3,
        KEEPALIVE_TIMEOUT: 4001,
        DGW_SERVER_ERROR: 4002,
        UNAUTHORIZED: 4003,
        REJECTED: 4004,
        BAD_REQUEST: 4005,
      }),
      k = b({
        DrainReason_ELB: 0,
        DrainReason_SLB: 1,
        DrainReason_AppServerPush: 2,
        DrainReason_GracePeriodExpired: 3,
        DrainReason_Unknown: 4,
      });
    function a(a) {
      switch (a) {
        case k.DrainReason_ELB:
          return "DrainReason_ELB";
        case k.DrainReason_SLB:
          return "DrainReason_SLB";
        case k.DrainReason_AppServerPush:
          return "DrainReason_AppServerPush";
        case k.DrainReason_GracePeriodExpired:
          return "DrainReason_GracePeriodExpired";
        case k.DrainReason_Unknown:
          return "DrainReason_Unknown";
      }
    }
    var l = b({
      DGWVER_GENESIS: 0,
      DGWVER_PREFIXED_APP_HEADERS: 1,
      DGWVER_HANDLES_DGW_DRAIN_FRAME: 2,
      DGWVER_HANDLES_DGW_DEAUTH_FRAME: 3,
      DGWVER_HANDLES_STREAMGROUPS: 4,
      DGWVER_BIG_IDS: 5,
    });
    function c(a) {
      switch (a) {
        case l.DGWVER_GENESIS:
          return "DGWVER_GENESIS";
        case l.DGWVER_PREFIXED_APP_HEADERS:
          return "DGWVER_PREFIXED_APP_HEADERS";
        case l.DGWVER_HANDLES_DGW_DRAIN_FRAME:
          return "DGWVER_HANDLES_DGW_DRAIN_FRAME";
        case l.DGWVER_HANDLES_DGW_DEAUTH_FRAME:
          return "DGWVER_HANDLES_DGW_DEAUTH_FRAME";
        case l.DGWVER_HANDLES_STREAMGROUPS:
          return "DGWVER_HANDLES_STREAMGROUPS";
        case l.DGWVER_BIG_IDS:
          return "DGWVER_BIG_IDS";
      }
    }
    var m = b({
      DgwCodecReturnCode_Success: 0,
      DgwCodecReturnCode_Failure: 1,
      DgwCodecReturnCode_NotEnoughData: 2,
      DgwCodecReturnCode_OutOfMemory: 3,
      DgwCodecReturnCode_AckIdOutOfBounds: 4,
      DgwCodecReturnCode_InvalidParameter: 5,
      DgwCodecReturnCode_InvalidFrameType: 6,
      DgwCodecReturnCode_InvalidAckFrameLength: 7,
      DgwCodecReturnCode_InvalidDrainReason: 8,
      DgwCodecReturnCode_InvalidDataFrameLength: 9,
      DgwCodecReturnCode_InvalidDrainFrameLength: 10,
    });
    function d(a) {
      switch (a) {
        case m.DgwCodecReturnCode_Success:
          return "DgwCodecReturnCode_Success";
        case m.DgwCodecReturnCode_Failure:
          return "DgwCodecReturnCode_Failure";
        case m.DgwCodecReturnCode_NotEnoughData:
          return "DgwCodecReturnCode_NotEnoughData";
        case m.DgwCodecReturnCode_OutOfMemory:
          return "DgwCodecReturnCode_OutOfMemory";
        case m.DgwCodecReturnCode_AckIdOutOfBounds:
          return "DgwCodecReturnCode_AckIdOutOfBounds";
        case m.DgwCodecReturnCode_InvalidParameter:
          return "DgwCodecReturnCode_InvalidParameter";
        case m.DgwCodecReturnCode_InvalidFrameType:
          return "DgwCodecReturnCode_InvalidFrameType";
        case m.DgwCodecReturnCode_InvalidAckFrameLength:
          return "DgwCodecReturnCode_InvalidAckFrameLength";
        case m.DgwCodecReturnCode_InvalidDrainReason:
          return "DgwCodecReturnCode_InvalidDrainReason";
        case m.DgwCodecReturnCode_InvalidDataFrameLength:
          return "DgwCodecReturnCode_InvalidDataFrameLength";
        case m.DgwCodecReturnCode_InvalidDrainFrameLength:
          return "DgwCodecReturnCode_InvalidDrainFrameLength";
      }
    }
    var n = b({
      DgwFrameType_Data: 0,
      DgwFrameType_SmallAck: 1,
      DgwFrameType_Empty: 2,
      DgwFrameType_Drain: 3,
      DgwFrameType_Deauth: 4,
      DgwFrameType_StreamGroup_DeprecatedEstabStream: 5,
      DgwFrameType_StreamGroup_DeprecatedData: 6,
      DgwFrameType_StreamGroup_SmallAck: 7,
      DgwFrameType_StreamGroup_DeprecatedEndOfData: 8,
      DgwFrameType_Ping: 9,
      DgwFrameType_Pong: 10,
      DgwFrameType_StreamGroup_Ack: 12,
      DgwFrameType_StreamGroup_Data: 13,
      DgwFrameType_StreamGroup_EndOfData: 14,
      DgwFrameType_StreamGroup_EstabStream: 15,
    });
    function e(a) {
      switch (a) {
        case n.DgwFrameType_Data:
          return "DgwFrameType_Data";
        case n.DgwFrameType_SmallAck:
          return "DgwFrameType_SmallAck";
        case n.DgwFrameType_Empty:
          return "DgwFrameType_Empty";
        case n.DgwFrameType_Drain:
          return "DgwFrameType_Drain";
        case n.DgwFrameType_Deauth:
          return "DgwFrameType_Deauth";
        case n.DgwFrameType_StreamGroup_DeprecatedEstabStream:
          return "DgwFrameType_StreamGroup_DeprecatedEstabStream";
        case n.DgwFrameType_StreamGroup_DeprecatedData:
          return "DgwFrameType_StreamGroup_DeprecatedData";
        case n.DgwFrameType_StreamGroup_SmallAck:
          return "DgwFrameType_StreamGroup_SmallAck";
        case n.DgwFrameType_StreamGroup_DeprecatedEndOfData:
          return "DgwFrameType_StreamGroup_DeprecatedEndOfData";
        case n.DgwFrameType_Ping:
          return "DgwFrameType_Ping";
        case n.DgwFrameType_Pong:
          return "DgwFrameType_Pong";
        case n.DgwFrameType_StreamGroup_Ack:
          return "DgwFrameType_StreamGroup_Ack";
        case n.DgwFrameType_StreamGroup_Data:
          return "DgwFrameType_StreamGroup_Data";
        case n.DgwFrameType_StreamGroup_EndOfData:
          return "DgwFrameType_StreamGroup_EndOfData";
        case n.DgwFrameType_StreamGroup_EstabStream:
          return "DgwFrameType_StreamGroup_EstabStream";
      }
    }
    b = {
      HEADER_APPID: "x-dgw-appid",
      HEADER_APPVERSION: "x-dgw-appversion",
      HEADER_AUTHTYPE: "x-dgw-authtype",
      HEADER_AUTHTOKEN: "Authorization",
      HEADER_DGW_VERSION: "x-dgw-version",
      HEADER_LOGGING_ID: "x-dgw-loggingid",
      HEADER_REGIONHINT: "x-dgw-regionhint",
      HEADER_TARGET_TIER: "x-dgw-tier",
      HEADER_UUID: "x-dgw-uuid",
      HEADER_ESTABLISH_STREAM_FRAME_BASE64:
        "x-dgw-establish-stream-frame-base64",
      kShadowHeader: "x-dgw-shadow",
      APPHEADER_PREFIX: "x-dgw-app-",
    };
    f.DEFAULT_ACK_TIMEOUT_MS = g;
    f.DEFAULT_SERVICE_TIER = h;
    f.MAX_ACK_ID = i;
    f.WebsocketCloseCodes = j;
    f.DrainReason = k;
    f.drainReasonToDrainReasonString = a;
    f.DgwVersion = l;
    f.dgwVersionToString = c;
    f.DgwCodecReturnCode = m;
    f.DgwCodecReturnCodeToString = d;
    f.DgwFrameType = n;
    f.frameTypeToString = e;
    f.HEADER_CONSTANTS = b;
  },
  66
);
__d(
  "DGWEnvUtil",
  ["DGWConstants", "URI", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = "";
        this.$2 = "";
        if (c("URI").isValidURI(window.location.href)) {
          var a = new (c("URI"))(window.location.href),
            b = a.getDomain();
          a = a.getPath();
          i(b)
            ? ((this.$1 = "gateway.internalfb.com"), (this.$2 = "INTERNALFB"))
            : j(b)
            ? ((this.$1 = "gateway.workplace.com"), (this.$2 = "FACEBOOK"))
            : l(b)
            ? ((this.$1 = "gateway.facebookenterprise.com"),
              (this.$2 = "ENTERPRISEFB"))
            : m(b)
            ? ((this.$1 = "gateway.facebookenterprise.com"),
              (this.$2 = "ENTERPRISEFB"))
            : n(b)
            ? ((this.$1 = "gateway.facebookrecruiting.com"),
              (this.$2 = "RECRUITINGFB"))
            : p(b)
            ? ((this.$1 = "gateway.instagram.com"), (this.$2 = "INSTAGRAM"))
            : o(b) && !r(a)
            ? ((this.$1 = "gateway.facebook.com"), (this.$2 = "FACEBOOK"))
            : h(b)
            ? ((this.$1 = "gateway.messenger.com"), (this.$2 = "FACEBOOK"))
            : q(b)
            ? ((this.$1 = "gateway.bulletin.com"), (this.$2 = "BULLETIN"))
            : k(b) &&
              ((this.$1 = "gateway.work.meta.com"), (this.$2 = "FACEBOOK"));
          a = new (c("URI"))()
            .setDomain(this.$1)
            .setProtocol("wss")
            .setPath("/ws");
          this.$1 = a.toString();
        }
      }
      var b = a.prototype;
      b.isDGWEnvCompatible = function () {
        return this.$1.length != 0 && this.$2.length != 0;
      };
      b.isDGWAsDefault = function () {
        return this.$2 === "ENTERPRISEFB" || this.$2 === "INSTAGRAM";
      };
      b.getDGWEndpoint = function () {
        return this.$1;
      };
      b.getDGWAuthType = function () {
        return this.$2;
      };
      b.getDGWVersion = function () {
        return d("DGWConstants").DgwVersion.DGWVER_BIG_IDS;
      };
      return a;
    })();
    function h(a) {
      return a.includes("messenger.com");
    }
    function i(a) {
      return a.includes("internalfb.com") && c("gkx")("1365");
    }
    function j(a) {
      return a.includes("workplace.com");
    }
    function k(a) {
      return a.includes("work.meta.com");
    }
    function l(a) {
      return a.includes("facebookenterprise.com");
    }
    function m(a) {
      return a.includes("metaenterprise.com");
    }
    function n(a) {
      return a.includes("facebookrecruiting.com");
    }
    function o(a) {
      return a.includes("facebook.com");
    }
    function p(a) {
      return a.includes("instagram.com") && !c("gkx")("2754");
    }
    function q(a) {
      return a.includes("bulletin.com");
    }
    function r(a) {
      return (
        (a.includes("adsmanager") ||
          a.includes("aladdin") ||
          a.includes("ads")) &&
        !c("gkx")("265")
      );
    }
    b = new a();
    g["default"] = b;
  },
  98
);
__d(
  "BrowserSupportCore",
  ["getVendorPrefixedName"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      hasCSSAnimations: function () {
        return !!b("getVendorPrefixedName")("animationName");
      },
      hasCSSTransforms: function () {
        return !!b("getVendorPrefixedName")("transform");
      },
      hasCSS3DTransforms: function () {
        return !!b("getVendorPrefixedName")("perspective");
      },
      hasCSSTransitions: function () {
        return !!b("getVendorPrefixedName")("transition");
      },
    };
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "LogHistory",
  [],
  function (a, b, c, d, e, f) {
    var g = 500,
      h = {},
      i = [];
    function j(a, b, c, d) {
      var e = d[0];
      if (typeof e !== "string" || d.length !== 1) return;
      i.push({ date: Date.now(), level: a, category: b, event: c, args: e });
      i.length > g && i.shift();
    }
    var k = (function () {
      function a(a) {
        this.category = a;
      }
      var b = a.prototype;
      b.debug = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        j("debug", this.category, a, c);
        return this;
      };
      b.log = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        j("log", this.category, a, c);
        return this;
      };
      b.warn = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        j("warn", this.category, a, c);
        return this;
      };
      b.error = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        j("error", this.category, a, c);
        return this;
      };
      return a;
    })();
    function a(a) {
      h[a] || (h[a] = new k(a));
      return h[a];
    }
    function b() {
      return i;
    }
    function c() {
      i.length = 0;
    }
    function d(a) {
      return a
        .map(function (a) {
          var b = /\d\d:\d\d:\d\d/.exec(new Date(a.date).toString());
          return [b && b[0], a.level, a.category, a.event, a.args].join(" | ");
        })
        .join("\n");
    }
    f.getInstance = a;
    f.getEntries = b;
    f.clearEntries = c;
    f.formatEntries = d;
  },
  66
);
__d(
  "generateLiteTypedLogger",
  ["Banzai", "JstlMigrationFalcoEvent", "getDataWithLoggerOptions"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b, d) {
      var e = a.split(":")[0],
        f = a.split(":")[1];
      e == "logger"
        ? c("JstlMigrationFalcoEvent").log(function () {
            return { logger_config_name: f, payload: b };
          })
        : c("Banzai").post(a, b, d);
    }
    function a(a) {
      return {
        log: function (b, d) {
          h(a, c("getDataWithLoggerOptions")(b, d), c("Banzai").BASIC);
        },
        logVital: function (b, d) {
          h(a, c("getDataWithLoggerOptions")(b, d), c("Banzai").VITAL);
        },
        logImmediately: function (b, d) {
          h(a, c("getDataWithLoggerOptions")(b, d), { signal: !0 });
        },
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "BrowserSupport",
  [
    "BrowserSupportCore",
    "ExecutionEnvironment",
    "UserAgent_DEPRECATED",
    "getVendorPrefixedName",
    "memoize",
  ],
  function (a, b, c, d, e, f, g) {
    var h = null;
    function i() {
      if (c("ExecutionEnvironment").canUseDOM) {
        h || (h = document.createElement("div"));
        return h;
      }
      return null;
    }
    b = function (a) {
      return c("memoize")(function () {
        var b = i();
        return !b ? !1 : a(b);
      });
    };
    e = b(function (a) {
      a.style.cssText =
        "position:-moz-sticky;position:-webkit-sticky;position:-o-sticky;position:-ms-sticky;position:sticky;";
      return /sticky/.test(a.style.position);
    });
    f = b(function (a) {
      return (
        "scrollSnapType" in a.style ||
        "webkitScrollSnapType" in a.style ||
        "msScrollSnapType" in a.style
      );
    });
    var j = b(function (a) {
      return "scrollBehavior" in a.style;
    });
    b = b(function (a) {
      if (!("pointerEvents" in a.style)) return !1;
      a.style.cssText = "pointer-events:auto";
      return a.style.pointerEvents === "auto";
    });
    var k = c("memoize")(function () {
        return (
          !(
            d("UserAgent_DEPRECATED").webkit() &&
            !d("UserAgent_DEPRECATED").chrome() &&
            d("UserAgent_DEPRECATED").windows()
          ) &&
          "FileList" in window &&
          "FormData" in window
        );
      }),
      l = c("memoize")(function () {
        return !!a.blob;
      }),
      m = c("memoize")(function () {
        return (
          c("ExecutionEnvironment").canUseDOM &&
          document.createElementNS &&
          document
            .createElementNS("http://www.w3.org/2000/svg", "foreignObject")
            .toString()
            .includes("SVGForeignObject")
        );
      }),
      n = c("memoize")(function () {
        return !!window.MutationObserver;
      }),
      o = c("memoize")(function () {
        var a = {
            transition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "mozTransitionEnd",
            OTransition: "oTransitionEnd",
          },
          b = c("getVendorPrefixedName")("transition");
        return a[b] || null;
      }),
      p = function () {
        return !!window.CanvasRenderingContext2D;
      };
    g.hasCSSAnimations = c("BrowserSupportCore").hasCSSAnimations;
    g.hasCSSTransforms = c("BrowserSupportCore").hasCSSTransforms;
    g.hasCSS3DTransforms = c("BrowserSupportCore").hasCSS3DTransforms;
    g.hasCSSTransitions = c("BrowserSupportCore").hasCSSTransitions;
    g.hasPositionSticky = e;
    g.hasScrollSnapPoints = f;
    g.hasScrollBehavior = j;
    g.hasPointerEvents = b;
    g.hasFileAPI = k;
    g.hasBlobFactory = l;
    g.hasSVGForeignObject = m;
    g.hasMutationObserver = n;
    g.getTransitionEndEvent = o;
    g.hasCanvasRenderingContext2D = p;
  },
  98
);
__d(
  "React",
  ["cr:1108857", "cr:1294158", "gkx"],
  function (a, b, c, d, e, f) {
    c = b("cr:1294158");
    var g = c.useSyncExternalStore;
    function a(a, b, c) {
      return g(b, c);
    }
    b("gkx")("4166") &&
      ((c.useMutableSource = a), (c.unstable_useMutableSource = a));
    e.exports = c;
  },
  null
);
__d(
  "ReactDOMLegacy_DEPRECATED",
  ["cr:1108857", "cr:1294246"],
  function (a, b, c, d, e, f, g) {
    (g.createPortal = b("cr:1294246").createPortal),
      (g.findDOMNode = b("cr:1294246").findDOMNode),
      (g.flushSync = b("cr:1294246").flushSync),
      (g.hydrate = b("cr:1294246").hydrate),
      (g.render = b("cr:1294246").render),
      (g.unmountComponentAtNode = b("cr:1294246").unmountComponentAtNode),
      (g.unstable_batchedUpdates = b("cr:1294246").unstable_batchedUpdates),
      (g.unstable_renderSubtreeIntoContainer =
        b("cr:1294246").unstable_renderSubtreeIntoContainer),
      (g.version = b("cr:1294246").version),
      (g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
        b("cr:1294246").__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
  },
  98
);
__d(
  "XHRHttpError",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "HTTP_CLIENT_ERROR",
      h = "HTTP_PROXY_ERROR",
      i = "HTTP_SERVER_ERROR",
      j = "HTTP_TRANSPORT_ERROR",
      k = "HTTP_UNKNOWN_ERROR";
    function a(a, b) {
      if (b === 0) {
        a = a.getProtocol();
        return a === "file" || a === "ftp" ? null : j;
      } else if (b >= 100 && b < 200) return h;
      else if (b >= 200 && b < 300) return null;
      else if (b >= 400 && b < 500) return g;
      else if (b >= 500 && b < 600) return i;
      else if (b >= 12001 && b < 12156) return j;
      else return k;
    }
    f.HTTP_CLIENT_ERROR = g;
    f.HTTP_PROXY_ERROR = h;
    f.HTTP_SERVER_ERROR = i;
    f.HTTP_TRANSPORT_ERROR = j;
    f.HTTP_UNKNOWN_ERROR = k;
    f.getErrorCode = a;
  },
  66
);
__d(
  "xhrSimpleDataSerializer",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = [];
      for (var c in a)
        b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
      return b.join("&");
    }
    f["default"] = a;
  },
  66
);
__d(
  "XHRRequest",
  [
    "invariant",
    "DTSG",
    "DTSGUtils",
    "DTSG_ASYNC",
    "Env",
    "ErrorGuard",
    "FBLogger",
    "LSD",
    "Log",
    "NetworkStatus",
    "ResourceTimingsStore",
    "ResourceTypes",
    "SprinkleConfig",
    "TimeSlice",
    "URI",
    "XHRHttpError",
    "ZeroRewrites",
    "fb-error",
    "getAsyncHeaders",
    "xhrSimpleDataSerializer",
  ],
  function (a, b, c, d, e, f, g) {
    var h,
      i,
      j,
      k = b("fb-error").ErrorXFBDebug,
      l = !1,
      m = { loadedBytes: 0, totalBytes: 0 };
    function n(a) {
      return b("ZeroRewrites").rewriteURI(new (h || (h = b("URI")))(a));
    }
    a = (function () {
      "use strict";
      function a(a) {
        (this.$3 = function () {
          return null;
        }),
          (this.$19 = n(a)),
          (this.$7 = "POST"),
          (this.$6 = {}),
          this.setResponseType(null),
          this.setTransportBuilder(
            b("ZeroRewrites").getTransportBuilderForURI(this.getURI())
          ),
          this.setDataSerializer(b("xhrSimpleDataSerializer")),
          (this.$11 = b("ResourceTimingsStore").getUID(
            b("ResourceTypes").XHR,
            a != null ? a.toString() : ""
          ));
      }
      var c = a.prototype;
      c.setURI = function (a) {
        this.$19 = n(a);
        return this;
      };
      c.getURI = function () {
        return this.$19;
      };
      c.setResponseType = function (a) {
        this.$13 = a;
        return this;
      };
      c.setMethod = function (a) {
        this.$7 = a;
        return this;
      };
      c.getMethod = function () {
        return this.$7;
      };
      c.setData = function (a) {
        this.$2 = a;
        return this;
      };
      c.getData = function () {
        return this.$2;
      };
      c.setRawData = function (a) {
        this.$10 = a;
        return this;
      };
      c.setRequestHeader = function (a, b) {
        this.$6[a] = b;
        return this;
      };
      c.setTimeout = function (a) {
        this.$14 = a;
        return this;
      };
      c.getTimeout = function () {
        return this.$14;
      };
      c.setResponseHandler = function (a) {
        this.$12 = a;
        return this;
      };
      c.getResponseHandler = function () {
        return this.$12;
      };
      c.setErrorHandler = function (a) {
        this.$5 = a;
        return this;
      };
      c.getErrorHandler = function () {
        return this.$5;
      };
      c.setNetworkFailureHandler = function (a) {
        this.$8 = a;
        return this;
      };
      c.getNetworkFailureHandler = function () {
        return this.$8;
      };
      c.getResponseHeader = function (a) {
        var b = this.$9;
        return b ? b.getResponseHeader(a) : null;
      };
      c.setAbortHandler = function (a) {
        this.$1 = a;
        return this;
      };
      c.getAbortHandler = function () {
        return this.$1;
      };
      c.setTimeoutHandler = function (a) {
        this.$15 = a;
        return this;
      };
      c.getTimeoutHandler = function () {
        return this.$15;
      };
      c.setUploadProgressHandler = function (a) {
        this.$18 = a;
        return this;
      };
      c.setDownloadProgressHandler = function (a) {
        this.$4 = a;
        return this;
      };
      c.setTransportBuilder = function (a) {
        !this.$17 || !b("ZeroRewrites").isRewritten(this.$19)
          ? (this.$17 = a)
          : b("FBLogger")("iorg-FOS")
              .blameToPreviousFile()
              .mustfix(
                "can not set new TransportBuilder for the request %s",
                String(this.getURI())
              );
        return this;
      };
      c.setDataSerializer = function (a) {
        this.$3 = a;
        return this;
      };
      c.setWithCredentials = function (a) {
        this.$20 = a;
        return this;
      };
      c.send = function () {
        var a = this.$14,
          c = this.$17;
        if (!c) return;
        var d = c();
        c = this.getURI();
        if (
          c.toString().includes("/../") ||
          c.toString().includes("/..\\") ||
          c.toString().includes("\\../") ||
          c.toString().includes("\\..\\")
        ) {
          b("Log").error("XHRRequest.send(): path traversal is not allowed.");
          return !1;
        }
        if (l === !0) return;
        var e = new (h || (h = b("URI")))(c).getQualifiedURI().toString(),
          f = this.$11;
        b("ResourceTimingsStore").updateURI(b("ResourceTypes").XHR, f, e);
        b("ResourceTimingsStore").measureRequestSent(b("ResourceTypes").XHR, f);
        this.$9 = d;
        this.$7 === "POST" || !this.$10 || g(0, 2346, this.$10, c);
        e = (i || (i = b("Env"))).force_param;
        e && (this.$2 = babelHelpers["extends"]({}, this.getData() || {}, e));
        if (this.$7 === "GET" && b("DTSGUtils").shouldAppendToken(c)) {
          e = b("DTSG_ASYNC").getCachedToken
            ? b("DTSG_ASYNC").getCachedToken()
            : b("DTSG_ASYNC").getToken();
          e &&
            (this.$2 ? (this.$2.fb_dtsg_ag = e) : (this.$2 = { fb_dtsg_ag: e }),
            b("SprinkleConfig").param_name &&
              (this.$2[b("SprinkleConfig").param_name] =
                b("DTSGUtils").getNumericValue(e)));
        }
        if (this.$7 === "POST" && b("DTSGUtils").shouldAppendToken(c)) {
          e = b("DTSG").getCachedToken
            ? b("DTSG").getCachedToken()
            : b("DTSG").getToken();
          e &&
            (this.$2 ? (this.$2.fb_dtsg = e) : (this.$2 = { fb_dtsg: e }),
            b("SprinkleConfig").param_name &&
              (this.$2[b("SprinkleConfig").param_name] =
                b("DTSGUtils").getNumericValue(e)));
          b("LSD").token &&
            (this.$2
              ? (this.$2.lsd = b("LSD").token)
              : (this.$2 = { lsd: b("LSD").token }),
            b("SprinkleConfig").param_name &&
              !e &&
              (this.$2[b("SprinkleConfig").param_name] = b(
                "DTSGUtils"
              ).getNumericValue(b("LSD").token)));
        }
        this.$7 === "GET" || this.$10
          ? (c.addQueryData(this.$2), (e = this.$10))
          : (e = this.$3(this.$2));
        function j(a) {
          b("ResourceTimingsStore").measureResponseReceived(
            b("ResourceTypes").XHR,
            f
          );
          for (
            var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1;
            e < c;
            e++
          )
            d[e - 1] = arguments[e];
          a.apply(this, d);
        }
        j = b("TimeSlice").guard(j, "XHRRequest response received", {
          propagationType: b("TimeSlice").PropagationType.CONTINUATION,
        });
        d.onreadystatechange = this.$21(j);
        d.onerror = this.$22(j);
        d.upload && this.$18 && (d.upload.onprogress = this.$23.bind(this));
        this.$4 && (d.onprogress = this.$24.bind(this));
        a && (this.$16 = setTimeout(this.$25.bind(this), a));
        this.$20 != null && (d.withCredentials = this.$20);
        d.open(this.$7, c.toString(), !0);
        j = !1;
        if (this.$6)
          for (a in this.$6)
            a.toLowerCase() === "content-type" && (j = !0),
              d.setRequestHeader(a, this.$6[a]);
        this.$7 == "POST" &&
          !this.$10 &&
          !j &&
          d.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          );
        var k = b("getAsyncHeaders")(c);
        Object.keys(k).forEach(function (a) {
          d.setRequestHeader(a, k[a]);
        });
        this.$13 === "arraybuffer" &&
          ("responseType" in d
            ? (d.responseType = "arraybuffer")
            : "overrideMimeType" in d
            ? d.overrideMimeType("text/plain; charset=x-user-defined")
            : "setRequestHeader" in d &&
              d.setRequestHeader("Accept-Charset", "x-user-defined"));
        this.$13 === "blob" && (d.responseType = this.$13);
        d.send(e);
      };
      c.abort = function (a) {
        this.$26(),
          this.$1 &&
            (j || (j = b("ErrorGuard"))).applyWithGuard(this.$1, null, [a], {
              name: "XHRRequest:_abortHandler",
            });
      };
      c.$26 = function () {
        var a = this.$9;
        a && ((a.onreadystatechange = null), a.abort());
        this.$27();
      };
      c.$25 = function () {
        this.$26(),
          this.$15 &&
            (j || (j = b("ErrorGuard"))).applyWithGuard(this.$15, null, [], {
              name: "XHRRequest:_abortHandler",
            });
      };
      c.$28 = function (a) {
        if (this.$13)
          if ("response" in a) return a.response;
          else if (this.$13 === "arraybuffer" && window.VBArray)
            return window.VBArray(a.responseBody).toArray();
        return a.responseText;
      };
      c.$22 = function (a) {
        var c = this,
          d = this.$9;
        return function () {
          var e;
          e = {
            errorCode: b("XHRHttpError").HTTP_TRANSPORT_ERROR,
            errorMsg: "Network Failure.",
            errorType: "Network",
            errorRawResponseHeaders: null,
            errorRawTransport:
              d == null
                ? void 0
                : (e = d.constructor) == null
                ? void 0
                : e.name,
            errorRawTransportStatus: 0,
          };
          c.$8
            ? (j || (j = b("ErrorGuard"))).applyWithGuard(
                a.bind(void 0, c.$8),
                null,
                [e],
                { name: "XHRRequest:_networkFailureHandler" }
              )
            : a(function () {});
          b("NetworkStatus").reportError();
        };
      };
      c.$21 = function (a) {
        var c = this,
          d = b("TimeSlice").guard(
            function (a) {
              for (
                var b = arguments.length,
                  c = new Array(b > 1 ? b - 1 : 0),
                  d = 1;
                d < b;
                d++
              )
                c[d - 1] = arguments[d];
              return a.apply(this, c);
            },
            "XHRRequest onreadystatechange",
            { propagationType: b("TimeSlice").PropagationType.EXECUTION }
          );
        return function () {
          var e = c.$9;
          if (e == null) return;
          var f = e.readyState;
          if (f >= 2) {
            var g = f === 4;
            g && k.addFromXHR(e);
            var h = c.getURI();
            h = b("XHRHttpError").getErrorCode(h, e.status);
            var i = c.$12;
            if (h != null) {
              if (g) {
                var l = {
                  errorCode: h,
                  errorMsg: c.$28(e),
                  errorRawTransport: e.constructor.name,
                  errorRawTransportStatus: e.status,
                  errorRawResponseHeaders:
                    i && i.includeHeaders ? e.getAllResponseHeaders() : null,
                  errorType: e.status ? "HTTP " + e.status : "HTTP",
                };
                c.$5
                  ? (j || (j = b("ErrorGuard"))).applyWithGuard(
                      a.bind(void 0, c.$5),
                      null,
                      [l],
                      { name: "XHRRequest:_errorHandler" }
                    )
                  : a(function () {});
              }
            } else if (i) {
              if (g || (i.parseStreaming && f === 3)) {
                l = g ? a : d;
                f = (i == null ? void 0 : i.includeHeaders)
                  ? e.getAllResponseHeaders()
                  : null;
                (j || (j = b("ErrorGuard"))).applyWithGuard(
                  l.bind(void 0, i),
                  null,
                  [c.$28(e), f, g],
                  { name: "XHRRequest:handler" }
                );
              }
            } else g && a(function () {});
            g &&
              (h != "HTTP_TRANSPORT_ERROR" &&
                b("NetworkStatus").reportSuccess(),
              c.$27());
          }
        };
      };
      c.$23 = function (a) {
        (m.loadedBytes = a.loaded),
          (m.totalBytes = a.total),
          this.$18 &&
            (j || (j = b("ErrorGuard"))).applyWithGuard(this.$18, null, [m], {
              name: "XHRRequest:_uploadProgressHandler",
            });
      };
      c.$24 = function (a) {
        a = { loadedBytes: a.loaded, totalBytes: a.total };
        this.$4 &&
          (j || (j = b("ErrorGuard"))).applyWithGuard(this.$4, null, [a], {
            name: "XHRRequest:_downloadProgressHandler",
          });
      };
      c.$27 = function () {
        clearTimeout(this.$16), delete this.$9;
      };
      a.disable = function () {
        l = !0;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "ChannelClientID",
  ["MqttWebDeviceID", "gkx", "uuid"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("gkx")("3400")
      ? c("uuid")()
      : (a =
          c("MqttWebDeviceID") == null
            ? void 0
            : c("MqttWebDeviceID").clientID) != null
      ? a
      : c("uuid")();
    b = {
      getID: function () {
        return h;
      },
    };
    f.exports = b;
  },
  34
);
