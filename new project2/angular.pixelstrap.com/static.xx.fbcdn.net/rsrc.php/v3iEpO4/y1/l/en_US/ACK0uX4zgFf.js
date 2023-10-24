/*FB_PKG_DELIM*/

__d(
  "BanzaiLogger",
  ["Banzai"],
  function (a, b, c, d, e, f, g) {
    function h(a) {
      return {
        log: function (b, d) {
          c("Banzai").post("logger:" + b, d, a);
        },
        create: h,
      };
    }
    a = h();
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "MNCommerceLogger",
  ["BanzaiLogger", "ODS"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("BanzaiLogger").create({ signal: !0 });
    function i(a) {
      switch (a) {
        case "devx_upsell_learn_more_clicked":
          return "devx.upsell.learn_more.clicked";
        default:
          return a;
      }
    }
    function a(a, b, c) {
      d("ODS").bumpEntityKey(2966, "messenger_commerce", i(a)),
        h.log("MessengerCommerceLoggerConfig", {
          brand_app_id: b,
          user_fbid: c,
          event: a,
        });
    }
    function b(a, b, c, e) {
      h.log("MessengerCommerceLoggerConfig", {
        brand_app_id: a,
        page_id: b,
        user_fbid: c,
        event: e,
      }),
        d("ODS").bumpEntityKey(
          2966,
          "messenger_commerce",
          "auth." + e + ".all"
        );
    }
    g.logClick = a;
    g.logAuthEvent = b;
  },
  98
);
__d(
  "ArbiterMixin",
  ["Arbiter", "guid"],
  function (a, b, c, d, e, f, g) {
    var h = "arbiter$" + c("guid")(),
      i = Object.prototype.hasOwnProperty;
    a = {
      _getArbiterInstance: function () {
        return i.call(this, h) ? this[h] : (this[h] = new (c("Arbiter"))());
      },
      inform: function (a, b, c) {
        return this._getArbiterInstance().inform(a, b, c);
      },
      subscribe: function (a, b, c) {
        return this._getArbiterInstance().subscribe(a, b, c);
      },
      subscribeOnce: function (a, b, c) {
        return this._getArbiterInstance().subscribeOnce(a, b, c);
      },
      unsubscribe: function (a) {
        this._getArbiterInstance().unsubscribe(a);
      },
      unsubscribeCurrentSubscription: function () {
        this._getArbiterInstance().unsubscribeCurrentSubscription();
      },
      releaseCurrentPersistentEvent: function () {
        this._getArbiterInstance().releaseCurrentPersistentEvent();
      },
      registerCallback: function (a, b) {
        return this._getArbiterInstance().registerCallback(a, b);
      },
      query: function (a) {
        return this._getArbiterInstance().query(a);
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "AsyncDOM",
  ["CSS", "DOM", "FBLogger"],
  function (a, b, c, d, e, f) {
    a = {
      invoke: function (a, c) {
        for (var d = 0; d < a.length; ++d) {
          var e = a[d],
            f = e[0],
            g = e[1],
            h = e[2];
          e = e[3];
          h = (h && c) || null;
          g && (h = b("DOM").scry(h || document.documentElement, g)[0]);
          f != "eval" &&
            !h &&
            b("FBLogger")("async_dom").warn(
              "Could not find relativeTo element for %s AsyncDOM operation based on selector: %s",
              f,
              g
            );
          switch (f) {
            case "eval":
              new Function(e).apply(h);
              break;
            case "hide":
              b("CSS").hide(h);
              break;
            case "show":
              b("CSS").show(h);
              break;
            case "setContent":
              b("DOM").setContent(h, e);
              break;
            case "appendContent":
              b("DOM").appendContent(h, e);
              break;
            case "prependContent":
              b("DOM").prependContent(h, e);
              break;
            case "insertAfter":
              b("DOM").insertAfter(h, e);
              break;
            case "insertBefore":
              b("DOM").insertBefore(h, e);
              break;
            case "remove":
              b("DOM").remove(h);
              break;
            case "replace":
              b("DOM").replace(h, e);
              break;
            default:
              b("FBLogger")("async_dom").warn(
                "Received invalid command %s for AsyncDOM operation",
                f
              );
          }
        }
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "AsyncResponse",
  ["invariant", "Bootloader", "FBLogger", "HTML"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.error = 0),
          (this.errorSummary = null),
          (this.errorDescription = null),
          (this.onload = null),
          (this.replay = !1),
          (this.payload = b),
          (this.request = a),
          (this.silentError = !1),
          (this.transientError = !1),
          (this.blockedAction = !1),
          (this.is_last = !0),
          (this.responseHeaders = null);
      }
      var b = a.prototype;
      b.getRequest = function () {
        return this.request;
      };
      b.getPayload = function () {
        return this.payload;
      };
      b.toError = function () {
        this.error !== 0 || h(0, 5599);
        var a = this.errorSummary || "",
          b = this.getErrorDescriptionString() || "",
          c = new Error(a.toString() + ": " + b);
        Object.assign(c, {
          code: this.error,
          description: this.errorDescription || "",
          descriptionString: b,
          response: this,
          summary: a,
          isSilent: this.silentError,
          isTransient: this.transientError,
        });
        return c;
      };
      b.getError = function () {
        return this.error;
      };
      b.getErrorSummary = function () {
        return this.errorSummary;
      };
      b.setErrorSummary = function (a) {
        a = a === void 0 ? null : a;
        this.errorSummary = a;
        return this;
      };
      b.getErrorDescription = function () {
        return this.errorDescription;
      };
      b.getErrorDescriptionString = function () {
        var a = this.getErrorDescription();
        if (a == null) return null;
        if (c("HTML").isHTML(a)) {
          var b = new (c("HTML"))(a);
          return b.getRootNode().textContent;
        }
        return a.toString();
      };
      b.getErrorIsWarning = function () {
        return !!this.errorIsWarning;
      };
      b.isSilent = function () {
        return !!this.silentError;
      };
      b.isTransient = function () {
        return !!this.transientError;
      };
      b.isBlockedAction = function () {
        return !!this.blockedAction;
      };
      b.getResponseHeader = function (a) {
        var b = this.responseHeaders;
        if (!b) return null;
        b = b.replace(/^\n/, "");
        a = a.toLowerCase();
        b = b.split("\r\n");
        for (var c = 0; c < b.length; ++c) {
          var d = b[c],
            e = d.indexOf(": ");
          if (e <= 0) continue;
          var f = d.substring(0, e).toLowerCase();
          if (f === a) return d.substring(e + 2);
        }
        return null;
      };
      a.defaultErrorHandler = function (b) {
        try {
          !b.silentError
            ? a.verboseErrorHandler(b)
            : c("FBLogger")("async_response")
                .catching(b.toError())
                .warn("default error handler called");
        } catch (a) {
          alert(b);
        }
      };
      a.verboseErrorHandler = function (a, b) {
        c("Bootloader").loadModules(
          ["ExceptionDialog"],
          function (c) {
            return c.showAsyncError(a, b);
          },
          "AsyncResponse"
        );
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "Deferred",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    b("Promise").resolve();
    a = (function () {
      function a(a) {
        var c = this;
        a = a || b("Promise");
        this.$1 = !1;
        this.$2 = new a(function (a, b) {
          (c.$3 = a), (c.$4 = b);
        });
      }
      var c = a.prototype;
      c.getPromise = function () {
        return this.$2;
      };
      c.resolve = function (a) {
        (this.$1 = !0), this.$3(a);
      };
      c.reject = function (a) {
        (this.$1 = !0), this.$4(a);
      };
      c.isSettled = function () {
        return this.$1;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "FetchStreamConfig",
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({ delim: "/*<!-- fetch-stream -->*/" });
  },
  null
);
__d(
  "StreamBlockReader",
  ["Promise", "regeneratorRuntime"],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a(a) {
        var c = this;
        if (!a.getReader)
          throw new Error("No getReader method found on given object");
        this.$3 = a.getReader();
        this.$1 = "";
        this.$2 = null;
        this.$4 = !1;
        this.$5 = "utf-8";
        this.$6 = "";
        this.$9 = !1;
        this.$8 = function () {
          return b("Promise").reject(
            "Sorry, you are somehow using this too early."
          );
        };
        this.$7 = new (b("Promise"))(function (a, b) {
          c.$8 = a;
        });
      }
      var c = a.prototype;
      c.changeEncoding = function (a) {
        if (this.$2)
          throw new Error("Decoder already in use, encoding cannot be changed");
        this.$5 = a;
      };
      c.$10 = function () {
        if (!self.TextDecoder)
          throw new Error("TextDecoder is not supported here");
        this.$2 || (this.$2 = new self.TextDecoder(this.$5));
        return this.$2;
      };
      c.$11 = function () {
        if (this.$9)
          throw new Error("Something else is already reading from this reader");
        this.$9 = !0;
      };
      c.$12 = function () {
        this.$9 = !1;
      };
      c.isDone = function () {
        return this.$4;
      };
      c.$13 = function () {
        var a, c, d, e;
        return b("regeneratorRuntime").async(
          function (f) {
            while (1)
              switch ((f.prev = f.next)) {
                case 0:
                  if (!(this.$6 !== "")) {
                    f.next = 4;
                    break;
                  }
                  a = this.$6;
                  this.$6 = "";
                  return f.abrupt("return", a);
                case 4:
                  if (!this.isDone()) {
                    f.next = 6;
                    break;
                  }
                  throw new Error("You cannot read from a stream that is done");
                case 6:
                  f.next = 8;
                  return b("regeneratorRuntime").awrap(this.$3.read());
                case 8:
                  c = f.sent;
                  d = c.done;
                  e = c.value;
                  this.$4 = d;
                  d && this.$8();
                  return f.abrupt(
                    "return",
                    e ? this.$10().decode(e, { stream: !d }) : ""
                  );
                case 14:
                case "end":
                  return f.stop();
              }
          },
          null,
          this
        );
      };
      c.readNextBlock = function () {
        var a;
        return b("regeneratorRuntime").async(
          function (b) {
            while (1)
              switch ((b.prev = b.next)) {
                case 0:
                  this.$11();
                  a = this.$13();
                  this.$12();
                  return b.abrupt("return", a);
                case 4:
                case "end":
                  return b.stop();
              }
          },
          null,
          this
        );
      };
      c.readUntilStringOrEnd = function (a) {
        return b("regeneratorRuntime").async(
          function (c) {
            while (1)
              switch ((c.prev = c.next)) {
                case 0:
                  c.next = 2;
                  return b("regeneratorRuntime").awrap(
                    this.readUntilOneOfStringOrEnd_DO_NOT_USE([a])
                  );
                case 2:
                  return c.abrupt("return", c.sent);
                case 3:
                case "end":
                  return c.stop();
              }
          },
          null,
          this
        );
      };
      c.readUntilStringOrThrow = function (a) {
        var c, d, e;
        return b("regeneratorRuntime").async(
          function (f) {
            while (1)
              switch ((f.prev = f.next)) {
                case 0:
                  if (a) {
                    f.next = 2;
                    break;
                  }
                  throw new Error("cannot read empty string");
                case 2:
                  this.$11(), (c = ""), (d = 0);
                case 5:
                  if (this.isDone()) {
                    f.next = 23;
                    break;
                  }
                  f.t0 = c;
                  f.next = 9;
                  return b("regeneratorRuntime").awrap(this.$13());
                case 9:
                  c = f.t0 += f.sent;
                  if (!(c.length < a.length)) {
                    f.next = 12;
                    break;
                  }
                  return f.abrupt("continue", 5);
                case 12:
                  e = c.substring(d).indexOf(a);
                  if (!(e !== -1)) {
                    f.next = 20;
                    break;
                  }
                  e += d;
                  this.$6 = c.substring(e + a.length);
                  this.$12();
                  return f.abrupt("return", c.substring(0, e));
                case 20:
                  d = c.length - a.length + 1;
                case 21:
                  f.next = 5;
                  break;
                case 23:
                  this.$6 = c;
                  this.$12();
                  throw new Error("Breakpoint not found");
                case 26:
                case "end":
                  return f.stop();
              }
          },
          null,
          this
        );
      };
      c.readUntilOneOfStringOrEnd_DO_NOT_USE = function (a) {
        var c, d, e, f;
        return b("regeneratorRuntime").async(
          function (g) {
            while (1)
              switch ((g.prev = g.next)) {
                case 0:
                  this.$11(), (c = "");
                case 2:
                  if (this.isDone()) {
                    g.next = 20;
                    break;
                  }
                  g.t0 = c;
                  g.next = 6;
                  return b("regeneratorRuntime").awrap(this.$13());
                case 6:
                  (c = g.t0 += g.sent), (d = 0);
                case 8:
                  if (!(d < a.length)) {
                    g.next = 18;
                    break;
                  }
                  e = a[d];
                  f = c.indexOf(e);
                  if (!(f !== -1)) {
                    g.next = 15;
                    break;
                  }
                  this.$6 = c.substring(f + e.length);
                  this.$12();
                  return g.abrupt("return", c.substring(0, f));
                case 15:
                  d++;
                  g.next = 8;
                  break;
                case 18:
                  g.next = 2;
                  break;
                case 20:
                  this.$12();
                  return g.abrupt("return", c);
                case 22:
                case "end":
                  return g.stop();
              }
          },
          null,
          this
        );
      };
      c.waitUntilDone = function () {
        return b("regeneratorRuntime").async(
          function (a) {
            while (1)
              switch ((a.prev = a.next)) {
                case 0:
                  return a.abrupt("return", this.$7);
                case 1:
                case "end":
                  return a.stop();
              }
          },
          null,
          this
        );
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "mixin",
  [],
  function (a, b, c, d, e, f) {
    function a() {
      var a = function () {},
        b = 0,
        c;
      while (b < 0 || arguments.length <= b ? void 0 : arguments[b]) {
        c = b < 0 || arguments.length <= b ? void 0 : arguments[b];
        for (var d in c)
          Object.prototype.hasOwnProperty.call(c, d) && (a.prototype[d] = c[d]);
        b += 1;
      }
      return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "FetchStreamTransport",
  [
    "ArbiterMixin",
    "FBLogger",
    "FetchStreamConfig",
    "StreamBlockReader",
    "TimeSlice",
    "URI",
    "mixin",
    "nullthrows",
    "regeneratorRuntime",
  ],
  function $module_FetchStreamTransport(
    global,
    require,
    importDefault,
    importNamespace,
    requireLazy,
    module,
    exports
  ) {
    var instance_count = 0,
      FetchStreamTransport = (function (_ref) {
        babelHelpers.inheritsLoose(FetchStreamTransport, _ref);
        function FetchStreamTransport(uri) {
          var _this;
          if (!self.ReadableStream || !self.fetch || !Request || !TextDecoder)
            throw new Error("fetch stream transport is not supported here");
          _this = _ref.call(this) || this;
          _this.$FetchStreamTransport6 = null;
          _this.$FetchStreamTransport1 = uri;
          _this.$FetchStreamTransport3 = !1;
          _this.$FetchStreamTransport4 = !1;
          _this.$FetchStreamTransport5 = !1;
          _this.$FetchStreamTransport2 = ++instance_count;
          return (
            babelHelpers.assertThisInitialized(_this) ||
            babelHelpers.assertThisInitialized(_this)
          );
        }
        var _proto = FetchStreamTransport.prototype;
        _proto.hasFinished = function hasFinished() {
          return this.$FetchStreamTransport5;
        };
        _proto.getRequestURI = function getRequestURI() {
          return new (importDefault("URI"))(
            this.$FetchStreamTransport1
          ).addQueryData({
            __a: 1,
            __adt: this.$FetchStreamTransport2,
            __req: "fetchstream_" + this.$FetchStreamTransport2,
            ajaxpipe_fetch_stream: 1,
          });
        };
        _proto.send = function send() {
          if (this.$FetchStreamTransport3)
            throw new Error(
              "FetchStreamTransport instances cannot be re-used."
            );
          this.$FetchStreamTransport3 = !0;
          var req = new Request(this.getRequestURI().toString(), {
            mode: "same-origin",
            credentials: "include",
          });
          this.$FetchStreamTransport6 = importDefault(
            "TimeSlice"
          ).getGuardedContinuation(
            "FetchStreamTransport: waiting on first response"
          );
          var fetchPromise = self.fetch(req, { redirect: "follow" });
          this.$FetchStreamTransport7(fetchPromise);
        };
        _proto.$FetchStreamTransport7 = function $FetchStreamTransport7(
          fetchPromise
        ) {
          var _this = this,
            response,
            reader,
            first,
            _loop,
            _ret;
          return require("regeneratorRuntime").async(
            function $FetchStreamTransport7$(_context2) {
              while (1)
                switch ((_context2.prev = _context2.next)) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return require("regeneratorRuntime").awrap(fetchPromise);
                  case 3:
                    response = _context2.sent;
                    _context2.next = 9;
                    break;
                  case 6:
                    (_context2.prev = 6),
                      (_context2.t0 = _context2["catch"](0)),
                      this.abort();
                  case 9:
                    if (!(!response || !response.body || !response.ok)) {
                      _context2.next = 12;
                      break;
                    }
                    this.abort();
                    return _context2.abrupt("return");
                  case 12:
                    (reader = new (importDefault("StreamBlockReader"))(
                      response.body
                    )),
                      (first = !0),
                      (_loop = function _loop() {
                        var nextData;
                        return require("regeneratorRuntime").async(
                          function _loop$(_context) {
                            while (1)
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  _context.next = 2;
                                  return require("regeneratorRuntime").awrap(
                                    reader.readUntilStringOrEnd(
                                      importDefault("FetchStreamConfig").delim
                                    )
                                  );
                                case 2:
                                  nextData = _context.sent;
                                  if (!_this.$FetchStreamTransport4) {
                                    _context.next = 5;
                                    break;
                                  }
                                  return _context.abrupt("return", "break");
                                case 5:
                                  importDefault("nullthrows")(
                                    _this.$FetchStreamTransport6
                                  )(function () {
                                    if (first && nextData.startsWith("<")) {
                                      importDefault("FBLogger")(
                                        "FetchStreamTransport"
                                      ).mustfix(
                                        "Endpoint: %s is sending a raw HTML response instead of properly formatted payload",
                                        _this.$FetchStreamTransport1.toString()
                                      );
                                      var node = document.createElement("div");
                                      node.innerHTML = nextData;
                                      var scripts =
                                        node.getElementsByTagName("script");
                                      for (var i = 0; i < scripts.length; i++)
                                        eval(scripts[i].innerHTML);
                                      _this.$FetchStreamTransport5 = !0;
                                      return;
                                    }
                                    first = !1;
                                    var parsedResponse = JSON.parse(nextData);
                                    reader.isDone() || parsedResponse.finished
                                      ? (_this.$FetchStreamTransport5 = !0)
                                      : (_this.$FetchStreamTransport6 =
                                          importDefault(
                                            "TimeSlice"
                                          ).getGuardedContinuation(
                                            "FetchStreamTransport: waiting on next response"
                                          ));
                                    _this.inform(
                                      "response",
                                      parsedResponse.content
                                    );
                                  });
                                case 6:
                                case "end":
                                  return _context.stop();
                              }
                          },
                          null,
                          this
                        );
                      });
                  case 15:
                    if (
                      !(
                        !this.$FetchStreamTransport5 &&
                        !this.$FetchStreamTransport4
                      )
                    ) {
                      _context2.next = 23;
                      break;
                    }
                    _context2.next = 18;
                    return require("regeneratorRuntime").awrap(_loop());
                  case 18:
                    _ret = _context2.sent;
                    if (!(_ret === "break")) {
                      _context2.next = 21;
                      break;
                    }
                    return _context2.abrupt("break", 23);
                  case 21:
                    _context2.next = 15;
                    break;
                  case 23:
                  case "end":
                    return _context2.stop();
                }
            },
            null,
            this,
            [[0, 6]]
          );
        };
        _proto.abort = function abort() {
          var _this2 = this;
          if (this.$FetchStreamTransport4 || this.$FetchStreamTransport5)
            return;
          this.$FetchStreamTransport4 = !0;
          this.$FetchStreamTransport5 = !0;
          if (this.$FetchStreamTransport6) {
            var continuation = this.$FetchStreamTransport6;
            continuation(function () {
              _this2.inform("abort");
            });
          } else this.inform("abort");
        };
        return FetchStreamTransport;
      })(importDefault("mixin")(importDefault("ArbiterMixin")));
    exports["default"] = FetchStreamTransport;
  },
  98
);
__d(
  "HTTPErrors",
  ["emptyFunction"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      return { summary: "HTTP Error", description: "Unknown HTTP error #" + a };
    }
    b = { get: a, getAll: c("emptyFunction").thatReturns(new Map()) };
    d = b;
    g["default"] = d;
  },
  98
);
__d(
  "JSONPTransport",
  ["ArbiterMixin", "DOM", "HTML", "TimeSlice", "URI", "mixin"],
  function (a, b, c, d, e, f) {
    var g,
      h = {},
      i = 2,
      j = "jsonp",
      k = "iframe";
    function l(a) {
      delete h[a];
    }
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c(b, c) {
        var d;
        d = a.call(this) || this;
        d._type = b;
        d._uri = c;
        d._hasResponse = !1;
        h[d.getID()] = babelHelpers.assertThisInitialized(d);
        return d;
      }
      var d = c.prototype;
      d.getID = function () {
        return this._id || (this._id = i++);
      };
      d.hasFinished = function () {
        return !(this.getID() in h);
      };
      d.getRequestURI = function () {
        return new (g || (g = b("URI")))(this._uri).addQueryData({
          __a: 1,
          __adt: this.getID(),
          __req: "jsonp_" + this.getID(),
        });
      };
      d.getTransportFrame = function () {
        if (this._iframe) return this._iframe;
        var a = "transport_frame_" + this.getID();
        a = b("HTML")(
          '<iframe class="hidden_elem" name="' +
            a +
            '" src="javascript:void(0)" />'
        );
        return (this._iframe = b("DOM").appendContent(document.body, a)[0]);
      };
      d.send = function () {
        var a = this;
        this._type === j
          ? setTimeout(function () {
              b("DOM").appendContent(
                document.body,
                b("DOM").create("script", {
                  src: a.getRequestURI().toString(),
                  type: "text/javascript",
                })
              );
            }, 0)
          : ((this.getTransportFrame().onload =
              this._checkForErrors.bind(this)),
            (this.getTransportFrame().src = this.getRequestURI().toString()));
        this._continuation = b("TimeSlice").getGuardedContinuation(
          "JSONPTransport: waiting for first response"
        );
      };
      d.createContinuationForFileForm_DO_NOT_USE = function () {
        this._continuation = b("TimeSlice").getGuardedContinuation(
          "JSONPTransport: waiting for first response"
        );
      };
      d.handleResponse = function (a) {
        var c = this;
        this._continuation(function () {
          c.inform("response", a),
            c.hasFinished()
              ? setTimeout(c._cleanup.bind(c), 0)
              : (c._continuation = b("TimeSlice").getGuardedContinuation(
                  "JSONPTransport: waiting for next response"
                ));
        });
      };
      d.abort = function () {
        if (this._aborted) return;
        this._aborted = !0;
        this._cleanup();
        l(this.getID());
        this.inform("abort");
      };
      d._checkForErrors = function () {
        this._hasResponse || this.abort();
      };
      d._cleanup = function () {
        this._iframe && (b("DOM").remove(this._iframe), (this._iframe = null));
      };
      c.respond = function (a, b, c) {
        var d = h[a];
        d &&
          ((d._hasResponse = !0),
          c || l(a),
          d._type == k &&
            (typeof b === "string"
              ? (b = JSON.parse(b))
              : (b = JSON.parse(JSON.stringify(b)))),
          d.handleResponse(b));
      };
      return c;
    })(b("mixin")(b("ArbiterMixin")));
    a.respond = b("TimeSlice").guard(a.respond, "JSONPTransport.respond", {
      root: !0,
    });
    e.exports = a;
  },
  null
);
__d(
  "SessionName",
  ["SessionNameConfig"],
  function (a, b, c, d, e, f) {
    e.exports = {
      getName: function () {
        return b("SessionNameConfig").seed;
      },
    };
  },
  null
);
__d(
  "bind",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      var c = Array.prototype.slice.call(arguments, 2);
      if (typeof b !== "string")
        return Function.prototype.bind.apply(b, [a].concat(c));
      function d() {
        var d = c.concat(Array.prototype.slice.call(arguments));
        if (a[b]) return a[b].apply(a, d);
      }
      d.toString = function () {
        return "bound lazily: " + a[b];
      };
      return d;
    }
    e.exports = a;
  },
  null
);
__d(
  "executeAfter",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      return function () {
        a.apply(c || this, arguments), b.apply(c || this, arguments);
      };
    }
    e.exports = a;
  },
  null
);
__d(
  "isHorizonDotMetaDotComURI",
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)horizon\\.meta\\.com$", "i"),
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
  "AsyncRequest",
  [
    "errorCode",
    "fbt",
    "invariant",
    "Arbiter",
    "AsyncDOM",
    "AsyncRequestConfig",
    "AsyncResponse",
    "Bootloader",
    "CSS",
    "DTSG",
    "DTSG_ASYNC",
    "Deferred",
    "Env",
    "ErrorGuard",
    "Event",
    "FBLogger",
    "FetchStreamTransport",
    "HTTPErrors",
    "HasteResponse",
    "JSCC",
    "PHPQuerySerializer",
    "Parent",
    "Promise",
    "ResourceTimingsStore",
    "ResourceTypes",
    "ServerJS",
    "SessionName",
    "TimeSlice",
    "URI",
    "UserAgent_DEPRECATED",
    "ZeroRewrites",
    "bind",
    "clearTimeout",
    "emptyFunction",
    "evalGlobal",
    "executeAfter",
    "fb-error",
    "ge",
    "getAsyncHeaders",
    "getAsyncParams",
    "gkx",
    "goURI",
    "isBulletinDotComURI",
    "isEmpty",
    "isFacebookURI",
    "isHorizonDotMetaDotComURI",
    "isInternalFBURI",
    "isMessengerDotComURI",
    "isSparkDotMetaDotComURI",
    "isWorkDotMetaDotComURI",
    "isWorkplaceDotComURI",
    "killswitch",
    "performanceAbsoluteNow",
    "promiseDone",
    "replaceTransportMarkers",
    "setTimeout",
    "setTimeoutAcrossTransitions",
  ],
  function $module_AsyncRequest(
    global,
    require,
    importDefault,
    importNamespace,
    requireLazy,
    module,
    exports,
    errorCode,
    fbt,
    invariant
  ) {
    "use strict";
    var nineteenSecInMs = 19e3,
      INTERNAL_SERVER_ERROR = 500,
      NO_NETWORK_CONNECTION = 1006,
      NETWORK_ERROR = 1004,
      ABORTED_DUE_TO_PAGE_TRANSITION = 1010,
      WARNING_ERROR_CODES = new Set([
        INTERNAL_SERVER_ERROR,
        ABORTED_DUE_TO_PAGE_TRANSITION,
        NETWORK_ERROR,
        NO_NETWORK_CONNECTION,
      ]);
    function hasUnloaded() {
      try {
        return !window.domready;
      } catch (_unused) {
        return !0;
      }
    }
    function supportsProgress(transport) {
      return "onprogress" in transport;
    }
    function supportsUploadProgress(transport) {
      return "upload" in transport && "onprogress" in transport.upload;
    }
    function supportsCrossOrigin(transport) {
      return "withCredentials" in transport;
    }
    function isNetworkError(transport) {
      return (
        transport.status in { 0: 1, 12029: 1, 12030: 1, 12031: 1, 12152: 1 }
      );
    }
    function validateResponseHandler(handler) {
      var valid = !handler || typeof handler === "function";
      valid ||
        importDefault("FBLogger")("asyncresponse").mustfix(
          "AsyncRequest response handlers must be functions. Pass a function, or use bind() to build one."
        );
      return valid;
    }
    var last_id = 2,
      id_threshold = last_id,
      ignore_id_update = !1;
    importDefault("Arbiter").subscribe(
      "page_transition",
      function (_, message) {
        !ignore_id_update
          ? (id_threshold = message.id)
          : (ignore_id_update = !1);
      }
    );
    var JSON_HIJACKING_SHIELD = "for (;;);",
      JSON_HIJACKING_SHIELD_LEN = JSON_HIJACKING_SHIELD.length,
      AsyncRequest = (function () {
        function AsyncRequest(uri) {
          var _this = this;
          this._allowIrrelevantRequests = !1;
          this._delayPreDisplayJS = !1;
          this._shouldReplaceTransportMarkers = !1;
          this._dispatchErrorResponse = function (asyncResponse, errorHandler) {
            var error = asyncResponse.getError();
            _this.clearStatusIndicator();
            if (
              !_this._isRelevant() ||
              error === ABORTED_DUE_TO_PAGE_TRANSITION
            ) {
              _this.abort();
              return;
            }
            if (_this._isServerDialogErrorCode(error)) {
              var is_confirmation = error == 1357008 || error == 1357007;
              _this.interceptHandler(asyncResponse);
              error == 1357041
                ? _this._solveQuicksandChallenge(asyncResponse)
                : error == 1357007
                ? _this._displayServerDialog(asyncResponse, is_confirmation, !0)
                : _this._displayServerDialog(asyncResponse, is_confirmation);
            } else if (_this.initialHandler(asyncResponse) !== !1) {
              importDefault("clearTimeout")(_this.timer);
              try {
                errorHandler(asyncResponse);
              } catch (e) {
                _this.finallyHandler(asyncResponse);
                throw e;
              }
              _this.finallyHandler(asyncResponse);
            }
          };
          this._onStateChange = function () {
            var transport = _this.transport;
            if (!transport) return;
            try {
              AsyncRequest._inflightCount--;
              importNamespace("ResourceTimingsStore").measureResponseReceived(
                importDefault("ResourceTypes").XHR,
                _this.resourceTimingStoreUID
              );
              try {
                transport.getResponseHeader("X-FB-Debug") &&
                  ((_this._xFbServer =
                    transport.getResponseHeader("X-FB-Debug")),
                  importDefault("fb-error").ErrorXFBDebug.add(
                    _this._xFbServer
                  ));
              } catch (_unused2) {}
              if (transport.status >= 200 && transport.status < 300)
                (AsyncRequest.lastSuccessTime = Date.now()),
                  _this._handleXHRResponse(transport);
              else if (
                importNamespace("UserAgent_DEPRECATED").webkit() &&
                typeof transport.status === "undefined"
              )
                _this._invokeErrorHandler(1002);
              else if (
                importDefault("AsyncRequestConfig").retryOnNetworkError &&
                isNetworkError(transport) &&
                _this.remainingRetries > 0 &&
                !_this._requestTimeout
              ) {
                _this.remainingRetries--;
                delete _this.transport;
                _this.send(!0);
                return;
              } else _this._invokeErrorHandler();
              _this.getOption("asynchronous_DEPRECATED") !== !1 &&
                delete _this.transport;
            } catch (exception) {
              if (hasUnloaded()) return;
              delete _this.transport;
              _this.remainingRetries > 0
                ? (_this.remainingRetries--, _this.send(!0))
                : (_this.getOption("suppressErrorAlerts") ||
                    importDefault("FBLogger")("AsyncRequest")
                      .catching(exception)
                      .mustfix(
                        "AsyncRequest exception when attempting to handle a state change"
                      ),
                  _this._invokeErrorHandler(1007));
            }
          };
          this._handleTimeout = function () {
            _this.continuation.last(function () {
              _this._requestTimeout = !0;
              var func = _this.timeoutHandler;
              _this.abandon();
              func && func(_this);
              importDefault("setTimeout")(function () {
                importDefault("Arbiter").inform("AsyncRequest/timeout", {
                  request: _this,
                });
              }, 0);
            });
          };
          this.continuation =
            importDefault("TimeSlice").getPlaceholderReusableContinuation();
          this.transport = null;
          this.method = "POST";
          this.uri = "";
          this.timeout = null;
          this.timer = null;
          this.initialHandler = importDefault("emptyFunction");
          this.handler = null;
          this.uploadProgressHandler = null;
          this.errorHandler =
            importDefault("AsyncResponse").defaultErrorHandler;
          this.transportErrorHandler = null;
          this.timeoutHandler = null;
          this.interceptHandler = importDefault("emptyFunction");
          this.finallyHandler = importDefault("emptyFunction");
          this.abortHandler = importDefault("emptyFunction");
          this.serverDialogCancelHandler = null;
          this.relativeTo = null;
          this.statusElement = null;
          this.statusClass = "";
          this.data = {};
          this.headers = {};
          this.file = null;
          this.context = {};
          this.readOnly = !1;
          this.writeRequiredParams = [];
          this.remainingRetries = 0;
          this.userActionID = "-";
          this.resourceTimingStoreUID = importNamespace(
            "ResourceTimingsStore"
          ).getUID(
            importDefault("ResourceTypes").XHR,
            uri != null ? uri.toString() : ""
          );
          this.flushedResponseTextParseIndex = 0;
          this.option = {
            asynchronous_DEPRECATED: !0,
            suppressErrorHandlerWarning: !1,
            suppressEvaluation: !1,
            suppressErrorAlerts: !1,
            retries: 0,
            jsonp: !1,
            bundle: !1,
            useIframeTransport: !1,
            handleErrorAfterUnload: !1,
            useFetchWithIframeFallback: !1,
          };
          this.transportErrorHandler = importDefault("bind")(
            this,
            "errorHandler"
          );
          uri !== void 0 && this.setURI(uri);
          this.setAllowCrossPageTransition(
            importDefault("AsyncRequestConfig")
              .asyncRequestsSurviveTransitionsDefault || !1
          );
        }
        var _proto = AsyncRequest.prototype;
        _proto._dispatchResponse = function _dispatchResponse(asyncResponse) {
          this.clearStatusIndicator();
          if (!this._isRelevant()) {
            this._invokeErrorHandler(ABORTED_DUE_TO_PAGE_TRANSITION);
            return;
          }
          if (this.initialHandler(asyncResponse) === !1) return;
          importDefault("clearTimeout")(this.timer);
          if (asyncResponse.jscc_map) {
            var jsccMap = importNamespace("JSCC").parse(asyncResponse.jscc_map);
            importNamespace("JSCC").init(jsccMap);
          }
          var suppress_js,
            handler = this.getHandler();
          if (handler)
            try {
              suppress_js = this._shouldSuppressJS(handler(asyncResponse));
            } catch (e) {
              asyncResponse.is_last && this.finallyHandler(asyncResponse);
              throw e;
            }
          suppress_js || this._handleJSResponse(asyncResponse);
          asyncResponse.is_last && this.finallyHandler(asyncResponse);
        };
        _proto._shouldSuppressJS = function _shouldSuppressJS(
          handler_return_value
        ) {
          return handler_return_value === AsyncRequest.suppressOnloadToken;
        };
        _proto._handlePreDisplayServerJS = function _handlePreDisplayServerJS(
          serverJS,
          preDisplayJSMods
        ) {
          var _displayStarted = !1,
            preDisplayPromises = [],
            registerToBlockDisplayUntilDone_DONOTUSE =
              function registerToBlockDisplayUntilDone_DONOTUSE() {
                if (_displayStarted) {
                  importDefault("FBLogger")("AsyncResponse").warn(
                    "registerToBlockDisplayUntilDone_DONOTUSE called after AsyncResponse display started. This is a no-op."
                  );
                  return function () {};
                }
                var timeoutId,
                  deferrable = new (importDefault("Deferred"))();
                preDisplayPromises.push(deferrable.getPromise());
                return importDefault("TimeSlice").guard(
                  function () {
                    timeoutId && importDefault("clearTimeout")(timeoutId),
                      deferrable.resolve();
                  },
                  "AsyncRequestDisplayBlockingEvent",
                  {
                    propagationType:
                      importDefault("TimeSlice").PropagationType.EXECUTION,
                  }
                );
              };
          serverJS.handle(preDisplayJSMods, {
            bigPipeContext: {
              registerToBlockDisplayUntilDone_DONOTUSE:
                registerToBlockDisplayUntilDone_DONOTUSE,
            },
          });
          _displayStarted = !0;
          return preDisplayPromises;
        };
        _proto._hasEvalDomOp = function _hasEvalDomOp(domOps) {
          return domOps && domOps.length
            ? domOps.some(function (op) {
                return op[0] === "eval";
              })
            : !1;
        };
        _proto._handleJSResponse = function _handleJSResponse(asyncResponse) {
          var relativeTo = this.getRelativeTo(),
            domOps = asyncResponse.domops,
            dtsgToken = asyncResponse.dtsgToken,
            dtsgAsyncGetToken = asyncResponse.dtsgAsyncGetToken,
            jsMods = asyncResponse.jsmods,
            serverJS,
            savedServerJSInstance = asyncResponse.savedServerJSInstance;
          savedServerJSInstance &&
          savedServerJSInstance instanceof importDefault("ServerJS")
            ? (serverJS = savedServerJSInstance)
            : (serverJS = new (importDefault("ServerJS"))());
          serverJS.setRelativeTo(relativeTo);
          if (jsMods) {
            var preDisplayJSMods = {
              define: jsMods.define,
              instances: jsMods.instances,
              markup: jsMods.markup,
            };
            delete jsMods.define;
            delete jsMods.instances;
            delete jsMods.markup;
            this._hasEvalDomOp(domOps) &&
              ((preDisplayJSMods.elements = jsMods.elements),
              delete jsMods.elements);
            serverJS.handle(preDisplayJSMods);
          }
          var parsedUri = new (importDefault("URI"))(this.uri);
          ((!parsedUri.getDomain() && !parsedUri.getProtocol()) ||
            document.location.origin === parsedUri.getOrigin()) &&
            (dtsgToken && importNamespace("DTSG").setToken(dtsgToken),
            dtsgAsyncGetToken &&
              importNamespace("DTSG_ASYNC").setToken(dtsgAsyncGetToken));
          domOps &&
            importDefault("ErrorGuard").applyWithGuard(
              function () {
                return importNamespace("AsyncDOM").invoke(domOps, relativeTo);
              },
              null,
              [],
              { errorType: "warn" }
            );
          jsMods && serverJS.handle(jsMods);
          this._handleJSRegisters(asyncResponse, "onload");
          this._handleJSRegisters(asyncResponse, "onafterload");
        };
        _proto._handleJSRegisters = function _handleJSRegisters(
          asyncResponse,
          phase
        ) {
          var registers = asyncResponse[phase];
          if (registers)
            for (var ii = 0; ii < registers.length; ii++)
              importDefault("ErrorGuard").applyWithGuard(
                new Function(registers[ii]),
                this,
                []
              );
        };
        _proto.invokeResponseHandler = function invokeResponseHandler(
          interpreted
        ) {
          var _this2 = this;
          if (typeof interpreted.redirect !== "undefined") {
            importDefault("setTimeout")(function () {
              _this2.setURI(interpreted.redirect, !0).send();
            }, 0);
            return;
          }
          if (interpreted.bootloadOnly !== void 0) {
            var toBootload =
                typeof interpreted.bootloadOnly === "string"
                  ? JSON.parse(interpreted.bootloadOnly)
                  : interpreted.bootloadOnly,
              _loop = function _loop() {
                if (_isArray) {
                  if (_i >= _iterator.length) return "break";
                  _ref = _iterator[_i++];
                } else {
                  _i = _iterator.next();
                  if (_i.done) return "break";
                  _ref = _i.value;
                }
                var rsrcs = _ref;
                importDefault("TimeSlice").guard(
                  function () {
                    importDefault("Bootloader").loadPredictedResourceMap(rsrcs);
                  },
                  "Bootloader.loadPredictedResourceMap",
                  { root: !0 }
                )();
              };
            for (
              var _iterator = toBootload,
                _isArray = Array.isArray(_iterator),
                _i = 0,
                _iterator = _isArray
                  ? _iterator
                  : _iterator[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ]();
              ;

            ) {
              var _ref,
                _ret = _loop();
              if (_ret === "break") break;
            }
            return;
          }
          if (
            !this.handler &&
            !this.errorHandler &&
            !this.transportErrorHandler &&
            !this.preBootloadHandler &&
            this.initialHandler === importDefault("emptyFunction") &&
            this.finallyHandler === importDefault("emptyFunction")
          )
            return;
          var response = interpreted.asyncResponse;
          if (typeof response !== "undefined") {
            var _response$hsrp, _response$allResource;
            if (!this._isRelevant()) {
              this._invokeErrorHandler(ABORTED_DUE_TO_PAGE_TRANSITION);
              return;
            }
            response.inlinejs && importDefault("evalGlobal")(response.inlinejs);
            response.lid &&
              ((this._responseTime = Date.now()), (this.lid = response.lid));
            importNamespace("HasteResponse").handleSRPayload(
              (_response$hsrp = response.hsrp) != null ? _response$hsrp : {}
            );
            var dispatch, arbiter_event;
            if (response.getError() && !response.getErrorIsWarning()) {
              var handler = this.getErrorHandler().bind(this);
              dispatch = importDefault("ErrorGuard").guard(
                this._dispatchErrorResponse,
                {
                  name:
                    "AsyncRequest#_dispatchErrorResponse for " + this.getURI(),
                }
              );
              dispatch = dispatch.bind(this, response, handler);
              arbiter_event = "error";
            } else {
              dispatch = importDefault("ErrorGuard").guard(
                this._dispatchResponse.bind(this),
                { name: "AsyncRequest#_dispatchResponse for " + this.getURI() }
              );
              dispatch = dispatch.bind(this, response);
              arbiter_event = "response";
              var domOps = response.domops;
              if (
                !this._delayPreDisplayJS &&
                response.jsmods &&
                response.jsmods.pre_display_requires &&
                !this._hasEvalDomOp(domOps) &&
                !importDefault("killswitch")(
                  "ASYNC_REQUEST_EARLY_RENDERING_OF_PREDISPLAY_PRIORITY_JS"
                )
              ) {
                var jsMods = response.jsmods,
                  preDisplayJSMods = {
                    define: jsMods.define,
                    instances: jsMods.instances,
                    markup: jsMods.markup,
                  };
                delete jsMods.define;
                delete jsMods.instances;
                delete jsMods.markup;
                preDisplayJSMods.pre_display_requires =
                  jsMods.pre_display_requires;
                delete jsMods.pre_display_requires;
                var serverJS = new (importDefault("ServerJS"))();
                serverJS.setRelativeTo(this.getRelativeTo());
                response.savedServerJSInstance = serverJS;
                var preDisplayPromises = this._handlePreDisplayServerJS(
                  serverJS,
                  preDisplayJSMods
                );
                if (preDisplayPromises && preDisplayPromises.length) {
                  var realDispatch = dispatch;
                  dispatch = function dispatch() {
                    importDefault("promiseDone")(
                      require("Promise")
                        .all(preDisplayPromises)
                        .then(realDispatch)
                    );
                  };
                }
              }
            }
            var ts = importDefault("performanceAbsoluteNow")();
            dispatch = importDefault("executeAfter")(dispatch, function () {
              importDefault("Arbiter").inform("AsyncRequest/" + arbiter_event, {
                request: _this2,
                response: response,
                ts: ts,
              });
            });
            this.preBootloadHandler && this.preBootloadHandler(response);
            importDefault("Bootloader").loadResources(
              (_response$allResource = response.allResources) != null
                ? _response$allResource
                : [],
              {
                onAll: importDefault("AsyncRequestConfig").immediateDispatch
                  ? dispatch
                  : function () {
                      importDefault("setTimeout")(dispatch, 0);
                    },
              },
              this.getURI()
            );
          } else
            typeof interpreted.transportError !== "undefined"
              ? this._xFbServer
                ? this._invokeErrorHandler(1008)
                : this._invokeErrorHandler(1012)
              : this._invokeErrorHandler(1007);
        };
        _proto._invokeErrorHandler = function _invokeErrorHandler(
          explicitError
        ) {
          var _this3 = this,
            transport = this.transport;
          if (!transport) return;
          var error;
          if (this.responseText === "") error = 1002;
          else if (this._requestAborted) error = 1011;
          else {
            try {
              error = explicitError || transport.status || NETWORK_ERROR;
            } catch (_unused3) {
              error = 1005;
            }
            !1 === navigator.onLine && (error = NO_NETWORK_CONNECTION);
          }
          var desc,
            summary,
            silent = !0;
          if (error === NO_NETWORK_CONNECTION)
            (summary = fbt._("No Network Connection")),
              (desc = fbt._(
                "Your browser appears to be offline. Please check your internet connection and try again."
              ));
          else if (error >= 300 && error <= 399) {
            summary = fbt._("Redirection");
            desc = fbt._(
              "Your access to Facebook was redirected or blocked by a third party at this time, please contact your ISP or reload."
            );
            var location = transport.getResponseHeader("Location");
            location && importDefault("goURI")(location, !0);
            silent = !0;
          } else
            (summary = fbt._("Oops")),
              (desc = fbt._(
                "Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again."
              ));
          var async_response = new (importDefault("AsyncResponse"))(
            this,
            transport
          );
          Object.assign(async_response, {
            error: error,
            errorSummary: summary,
            errorDescription: desc,
            silentError: silent,
          });
          importDefault("setTimeout")(function () {
            importDefault("Arbiter").inform("AsyncRequest/error", {
              request: _this3,
              response: async_response,
            });
          }, 0);
          if (hasUnloaded() && !this.getOption("handleErrorAfterUnload"))
            return;
          if (!this.transportErrorHandler) {
            importDefault("FBLogger")("asyncresponse").mustfix(
              "Async request to %s failed with a %d error, but there was no error handler available to deal with it.",
              this.getURI(),
              error
            );
            return;
          }
          var error_handler = this.getTransportErrorHandler().bind(this);
          !(
            this.getOption("suppressErrorAlerts") ||
            WARNING_ERROR_CODES.has(error)
          )
            ? importDefault("FBLogger")("asyncresponse")
                .addToCategoryKey(String(error))
                .mustfix(
                  "Async request failed with error %s: %s when requesting %s",
                  error,
                  desc.toString(),
                  this.getURI()
                )
            : WARNING_ERROR_CODES.has(error) &&
              importDefault("FBLogger")("asyncresponse")
                .addToCategoryKey(String(error))
                .warn(
                  "Async request failed with error %s: %s when requesting %s",
                  error,
                  desc.toString(),
                  this.getURI()
                );
          importDefault("ErrorGuard").applyWithGuard(
            this._dispatchErrorResponse,
            this,
            [async_response, error_handler]
          );
        };
        _proto._isServerDialogErrorCode = function _isServerDialogErrorCode(
          error
        ) {
          return (
            error == 1357008 ||
            error == 1357007 ||
            error == 1357041 ||
            error == 1442002 ||
            error == 1357001
          );
        };
        _proto._solveQuicksandChallenge = function _solveQuicksandChallenge(
          async_response
        ) {
          var _this4 = this,
            payload = async_response.getPayload();
          importDefault("Bootloader").loadModules(
            ["QuickSandSolver"],
            function (QuickSandSolver) {
              QuickSandSolver.solveAndSendRequestBack(_this4, payload);
            },
            "AsyncRequest"
          );
        };
        _proto._displayServerDialog = function _displayServerDialog(
          async_response,
          is_confirmation,
          allow_get
        ) {
          var _this5 = this;
          allow_get === void 0 && (allow_get = !1);
          var payload = async_response.getPayload();
          if (payload.__dialog !== void 0) {
            this._displayServerLegacyDialog(async_response, is_confirmation);
            return;
          }
          var json = payload.__dialogx;
          new (importDefault("ServerJS"))().handle(json);
          importDefault("Bootloader").loadModules(
            ["ConfirmationDialog"],
            function (ConfirmationDialog) {
              ConfirmationDialog.setupConfirmation(
                async_response,
                _this5,
                allow_get
              );
            },
            "AsyncRequest"
          );
        };
        _proto._displayServerLegacyDialog = function _displayServerLegacyDialog(
          async_response,
          is_confirmation
        ) {
          var _this6 = this,
            model = async_response.getPayload().__dialog;
          if (importDefault("gkx")("708253")) {
            var _ref2, _async_response$reque;
            importDefault("FBLogger")("comet_infra")
              .addMetadata(
                "COMET_INFRA",
                "ERROR_CODE",
                async_response.getError().toString()
              )
              .addMetadata(
                "COMET_INFRA",
                "ERROR_URL",
                (_ref2 =
                  (_async_response$reque = async_response.request) == null
                    ? void 0
                    : _async_response$reque.getURI()) != null
                  ? _ref2
                  : "unknown"
              )
              .mustfix(
                "AsyncRequest._displayServerLegacyDialog called in Comet"
              );
          }
          importDefault("Bootloader").loadModules(
            ["Dialog"],
            function (Dialog) {
              var dialog = new Dialog(model);
              is_confirmation &&
                dialog.setHandler(
                  _this6._displayConfirmationHandler.bind(_this6, dialog)
                );
              dialog
                .setCancelHandler(function () {
                  var handler = _this6.getServerDialogCancelHandler();
                  try {
                    handler && handler(async_response);
                  } catch (e) {
                    throw e;
                  } finally {
                    _this6.finallyHandler(async_response);
                  }
                })
                .setCausalElement(_this6.relativeTo)
                .show();
            },
            "AsyncRequest"
          );
        };
        _proto._displayConfirmationHandler =
          function _displayConfirmationHandler(dialog) {
            (this.data.confirmed = 1),
              Object.assign(this.data, dialog.getFormData()),
              this.send();
          };
        _proto.setJSONPTransport = function setJSONPTransport(transport) {
          transport.subscribe("response", this._handleJSONPResponse.bind(this)),
            transport.subscribe("abort", this._handleJSONPAbort.bind(this)),
            (this.transport = transport);
        };
        _proto._handleJSONPResponse = function _handleJSONPResponse(_, data) {
          var transport = this.transport;
          if (!transport) return;
          data.bootloadOnly || (this.is_first = this.is_first === void 0);
          var interpreted = this._interpretResponse(data);
          interpreted.asyncResponse &&
            ((interpreted.asyncResponse.is_first = this.is_first),
            (interpreted.asyncResponse.is_last = transport.hasFinished()));
          this.invokeResponseHandler(interpreted);
          transport.hasFinished() && delete this.transport;
        };
        _proto._handleJSONPAbort = function _handleJSONPAbort() {
          this._invokeErrorHandler(), delete this.transport;
        };
        _proto._handleXHRResponse = function _handleXHRResponse(transport) {
          var interpreted;
          if (this.getOption("suppressEvaluation"))
            interpreted = {
              asyncResponse: new (importDefault("AsyncResponse"))(
                this,
                transport
              ),
            };
          else
            try {
              this._handleFlushedResponse();
              var text = transport.responseText;
              text = this._filterOutFlushedText(text);
              var safe_text = this._unshieldResponseText(text),
                _response;
              try {
                _response = JSON.parse(safe_text);
              } catch (error) {
                (_response = eval("(" + safe_text + ")")),
                  importDefault("FBLogger")("async_request")
                    .catching(error)
                    .warn(
                      "JSON.parse encountered an exception, fallback to eval. Endpoint: " +
                        new (importDefault("URI"))(this.uri).getPath()
                    );
              }
              interpreted = this._interpretResponse(_response);
            } catch (error) {
              (interpreted = error.message),
                importDefault("FBLogger")("async_request")
                  .catching(error)
                  .warn("Failed to handle response");
            }
          this.invokeResponseHandler(interpreted);
        };
        _proto._handleFlushedResponse = function _handleFlushedResponse() {
          var flushedResponseHandler = this.flushedResponseHandler,
            transport = this.transport;
          if (flushedResponseHandler && transport) {
            var jsonShieldIndex = transport.responseText.indexOf(
                JSON_HIJACKING_SHIELD
              ),
              flushedTextEndIndex =
                jsonShieldIndex === -1
                  ? transport.responseText.length
                  : jsonShieldIndex;
            flushedResponseHandler(
              transport.responseText.substring(
                this.flushedResponseTextParseIndex,
                flushedTextEndIndex
              )
            );
            this.flushedResponseTextParseIndex = flushedTextEndIndex;
          }
        };
        _proto._unshieldResponseText = function _unshieldResponseText(text) {
          if (text.length <= JSON_HIJACKING_SHIELD_LEN)
            throw new Error("Response too short on async");
          var offset = 0;
          while (text.charAt(offset) == " " || text.charAt(offset) == "\n")
            offset++;
          offset &&
            text.substring(offset, offset + JSON_HIJACKING_SHIELD_LEN) ==
              JSON_HIJACKING_SHIELD;
          return text.substring(offset + JSON_HIJACKING_SHIELD_LEN);
        };
        _proto._filterOutFlushedText = function _filterOutFlushedText(text) {
          if (!this.flushedResponseHandler) return text;
          var index = text.indexOf(JSON_HIJACKING_SHIELD);
          return index < 0 ? text : text.substr(index);
        };
        _proto._interpretResponse = function _interpretResponse(response) {
          if (response.redirect) return { redirect: response.redirect };
          if (response.bootloadOnly)
            return { bootloadOnly: response.bootloadOnly };
          var isServerDialog =
            response.error && this._isServerDialogErrorCode(response.error);
          this._shouldReplaceTransportMarkers &&
            response.payload &&
            !isServerDialog &&
            importDefault("replaceTransportMarkers")(
              { relativeTo: this.getRelativeTo(), bigPipeContext: null },
              response.payload
            );
          var r = new (importDefault("AsyncResponse"))(this);
          if (response.__ar != 1)
            importDefault("FBLogger")("AsyncRequest").warn(
              "AsyncRequest to endpoint %s returned a JSON response, but it is not properly formatted. The endpoint needs to provide a response using the AsyncResponse class in PHP.",
              this.getURI()
            ),
              (r.payload = response);
          else {
            Object.assign(r, response);
            var transport = this.transport;
            transport &&
              transport.getAllResponseHeaders !== void 0 &&
              (r.responseHeaders = transport.getAllResponseHeaders());
          }
          return { asyncResponse: r };
        };
        _proto._isMultiplexable = function _isMultiplexable() {
          if (
            this.getOption("jsonp") ||
            this.getOption("useIframeTransport") ||
            this.getOption("useFetchWithIframeFallback")
          ) {
            importDefault("FBLogger")("AsyncRequest").mustfix(
              "You cannot bundle AsyncRequest that uses jsonp or iframe transport."
            );
            return !1;
          }
          if (
            !importDefault("isFacebookURI")(
              new (importDefault("URI"))(this.uri)
            )
          ) {
            importDefault("FBLogger")("AsyncRequest").mustfix(
              "You can not bundle AsyncRequest sent to non-facebook URIs.  Uri: %s",
              this.getURI()
            );
            return !1;
          }
          if (!this.getOption("asynchronous_DEPRECATED")) {
            importDefault("FBLogger")("AsyncRequest").mustfix(
              "We cannot bundle synchronous AsyncRequests"
            );
            return !1;
          }
          return !0;
        };
        _proto.handleResponse = function handleResponse(response) {
          var interpreted = this._interpretResponse(response);
          this.invokeResponseHandler(interpreted);
        };
        _proto.setMethod = function setMethod(m) {
          this.method = m.toString().toUpperCase();
          return this;
        };
        _proto.getMethod = function getMethod() {
          return this.method;
        };
        _proto.setData = function setData(obj) {
          this.data = obj;
          return this;
        };
        _proto.setRequestHeader = function setRequestHeader(name, value) {
          this.headers[name] = value;
          return this;
        };
        _proto.setRawData = function setRawData(raw_data) {
          this.rawData = raw_data;
          return this;
        };
        _proto.getData = function getData() {
          return this.data;
        };
        _proto.setContextData = function setContextData(key, value, enabled) {
          enabled = enabled === void 0 ? !0 : enabled;
          enabled && (this.context["_log_" + key] = value);
          return this;
        };
        _proto._setUserActionID = function _setUserActionID() {
          this.userActionID =
            (importNamespace("SessionName").getName() || "-") + "/-";
        };
        _proto.setURI = function setURI(uri, throwOnInvalid) {
          throwOnInvalid === void 0 && (throwOnInvalid = !1);
          typeof uri === "string" &&
            uri.match(/^\/?u_\d+_\d+/) &&
            importDefault("FBLogger")("asyncrequest").warn(
              "Invalid URI %s",
              uri
            );
          var uri_obj = new (importDefault("URI"))(uri);
          if (
            (this.getOption("useIframeTransport") ||
              this.getOption("useFetchWithIframeFallback")) &&
            !importDefault("isFacebookURI")(uri_obj)
          ) {
            throwOnInvalid && invariant(0, 45284);
            return this;
          }
          if (
            !this._allowCrossOrigin &&
            !this.getOption("jsonp") &&
            !this.getOption("useIframeTransport") &&
            !this.getOption("useFetchWithIframeFallback") &&
            !uri_obj.isSameOrigin()
          ) {
            throwOnInvalid && invariant(0, 45285);
            return this;
          }
          this._setUserActionID();
          if (!uri || uri_obj.isEmpty()) {
            importDefault("FBLogger")("async_request").mustfix(
              "URI cannot be empty"
            );
            return this;
          }
          this.uri = importNamespace("ZeroRewrites").rewriteURI(uri_obj);
          return this;
        };
        _proto.getURI = function getURI() {
          return this.uri.toString();
        };
        _proto.delayPreDisplayJS = function delayPreDisplayJS(shouldDelayJS) {
          shouldDelayJS === void 0 && (shouldDelayJS = !0);
          this._delayPreDisplayJS = shouldDelayJS;
          return this;
        };
        _proto.setInitialHandler = function setInitialHandler(fn) {
          this.initialHandler = fn;
          return this;
        };
        _proto.setPayloadHandler = function setPayloadHandler(fn) {
          this.setHandler(function (response) {
            fn(response.payload);
          });
          return this;
        };
        _proto.setHandler = function setHandler(fn) {
          validateResponseHandler(fn) && (this.handler = fn);
          return this;
        };
        _proto.setFlushedResponseHandler = function setFlushedResponseHandler(
          fn
        ) {
          validateResponseHandler(fn) && (this.flushedResponseHandler = fn);
          return this;
        };
        _proto.getHandler = function getHandler() {
          return this.handler || importDefault("emptyFunction");
        };
        _proto.setProgressHandler = function setProgressHandler(fn) {
          validateResponseHandler(fn) && (this.progressHandler = fn);
          return this;
        };
        _proto.setUploadProgressHandler = function setUploadProgressHandler(
          fn
        ) {
          validateResponseHandler(fn) && (this.uploadProgressHandler = fn);
          return this;
        };
        _proto.setErrorHandler = function setErrorHandler(fn) {
          validateResponseHandler(fn) && (this.errorHandler = fn);
          return this;
        };
        _proto.setTransportErrorHandler = function setTransportErrorHandler(
          fn
        ) {
          this.transportErrorHandler = fn;
          return this;
        };
        _proto.getErrorHandler = function getErrorHandler() {
          return this.errorHandler || importDefault("emptyFunction");
        };
        _proto.getTransportErrorHandler = function getTransportErrorHandler() {
          return this.transportErrorHandler || importDefault("emptyFunction");
        };
        _proto.setTimeoutHandler = function setTimeoutHandler(timeout, fn) {
          validateResponseHandler(fn) &&
            ((this.timeout = timeout), (this.timeoutHandler = fn));
          return this;
        };
        _proto.resetTimeout = function resetTimeout(timeout) {
          if (!(this.timeoutHandler === null))
            if (timeout === null)
              (this.timeout = null),
                importDefault("clearTimeout")(this.timer),
                (this.timer = null);
            else {
              var clear_on_quickling_event = !this._allowCrossPageTransition;
              this.timeout = timeout;
              importDefault("clearTimeout")(this.timer);
              clear_on_quickling_event
                ? (this.timer = importDefault("setTimeout")(
                    this._handleTimeout.bind(this),
                    this.timeout
                  ))
                : (this.timer = importDefault("setTimeoutAcrossTransitions")(
                    this._handleTimeout.bind(this),
                    this.timeout
                  ));
            }
          return this;
        };
        _proto.setNewSerial = function setNewSerial() {
          this.id = ++last_id;
          return this;
        };
        _proto.setInterceptHandler = function setInterceptHandler(fn) {
          this.interceptHandler = fn;
          return this;
        };
        _proto.setFinallyHandler = function setFinallyHandler(fn) {
          this.finallyHandler = fn;
          return this;
        };
        _proto.setAbortHandler = function setAbortHandler(fn) {
          this.abortHandler = fn;
          return this;
        };
        _proto.getServerDialogCancelHandler =
          function getServerDialogCancelHandler() {
            return this.serverDialogCancelHandler;
          };
        _proto.setServerDialogCancelHandler =
          function setServerDialogCancelHandler(fn) {
            this.serverDialogCancelHandler = fn;
            return this;
          };
        _proto.setPreBootloadHandler = function setPreBootloadHandler(fn) {
          this.preBootloadHandler = fn;
          return this;
        };
        _proto.setReadOnly = function setReadOnly(readOnly) {
          typeof readOnly !== "boolean" || (this.readOnly = readOnly);
          return this;
        };
        _proto.getReadOnly = function getReadOnly() {
          return this.readOnly;
        };
        _proto.setRelativeTo = function setRelativeTo(element) {
          this.relativeTo = element;
          return this;
        };
        _proto.getRelativeTo = function getRelativeTo() {
          return this.relativeTo;
        };
        _proto.setStatusClass = function setStatusClass(c) {
          this.statusClass = c;
          return this;
        };
        _proto.setStatusElement = function setStatusElement(element) {
          this.statusElement = element;
          return this;
        };
        _proto.getStatusElement = function getStatusElement() {
          return importDefault("ge")(this.statusElement);
        };
        _proto._isRelevant = function _isRelevant() {
          if (this._allowCrossPageTransition) return !0;
          return !this.id ? !0 : this.id > id_threshold;
        };
        _proto.clearStatusIndicator = function clearStatusIndicator() {
          var statusElem = this.getStatusElement();
          statusElem &&
            (importNamespace("CSS").removeClass(statusElem, "async_saving"),
            importNamespace("CSS").removeClass(statusElem, this.statusClass));
        };
        _proto.addStatusIndicator = function addStatusIndicator() {
          var statusElem = this.getStatusElement();
          statusElem &&
            (importNamespace("CSS").addClass(statusElem, "async_saving"),
            importNamespace("CSS").addClass(statusElem, this.statusClass));
        };
        _proto.specifiesWriteRequiredParams =
          function specifiesWriteRequiredParams() {
            var _this7 = this;
            return this.writeRequiredParams.every(function (param) {
              _this7.data[param] =
                _this7.data[param] ||
                importDefault("Env")[param] ||
                (importDefault("ge")(param) || {}).value;
              return _this7.data[param] !== void 0 ? !0 : !1;
            });
          };
        _proto.setOption = function setOption(opt, v) {
          typeof this.option[opt] !== "undefined" && (this.option[opt] = v);
          return this;
        };
        _proto.getOption = function getOption(opt) {
          typeof this.option[opt] === "undefined";
          return this.option[opt];
        };
        _proto.abort = function abort() {
          var _this8 = this;
          this.continuation.last(function () {
            var transport = _this8.transport;
            if (transport) {
              var old_handler = _this8.getTransportErrorHandler();
              _this8.setOption("suppressErrorAlerts", !0);
              _this8.setTransportErrorHandler(importDefault("emptyFunction"));
              _this8._requestAborted = !0;
              transport.abort();
              _this8.setTransportErrorHandler(old_handler);
            }
            _this8.abortHandler();
            AsyncMultiplex.unschedule(_this8);
          });
        };
        _proto.abandon = function abandon() {
          var _this9 = this;
          this.continuation.last(function () {
            importDefault("clearTimeout")(_this9.timer);
            _this9
              .setOption("suppressErrorAlerts", !0)
              .setHandler(importDefault("emptyFunction"))
              .setErrorHandler(importDefault("emptyFunction"))
              .setTransportErrorHandler(importDefault("emptyFunction"))
              .setProgressHandler(importDefault("emptyFunction"))
              .setUploadProgressHandler(importDefault("emptyFunction"));
            var transport = _this9.transport;
            transport &&
              ((_this9._requestAborted = !0),
              supportsProgress(transport) && delete transport.onprogress,
              supportsUploadProgress(transport) &&
                delete transport.upload.onprogress,
              transport.abort());
            _this9.abortHandler();
            AsyncMultiplex.unschedule(_this9);
          });
        };
        _proto.setNectarModuleDataSafe = function setNectarModuleDataSafe(
          elem
        ) {
          var setNectarModuleData = this.setNectarModuleData;
          setNectarModuleData && setNectarModuleData.call(this, elem);
          return this;
        };
        _proto.setAllowCrossPageTransition =
          function setAllowCrossPageTransition(allow) {
            this._allowCrossPageTransition = !!allow;
            this.timer && this.resetTimeout(this.timeout);
            return this;
          };
        _proto.getAllowIrrelevantRequests =
          function getAllowIrrelevantRequests() {
            return this._allowIrrelevantRequests;
          };
        _proto.setAllowIrrelevantRequests = function setAllowIrrelevantRequests(
          allowIrrelevantRequests
        ) {
          this._allowIrrelevantRequests = allowIrrelevantRequests;
          return this;
        };
        _proto.setAllowCrossOrigin = function setAllowCrossOrigin(allow) {
          this._allowCrossOrigin = allow;
          return this;
        };
        _proto.setAllowCredentials = function setAllowCredentials(allow) {
          this._allowCredentials = allow;
          return this;
        };
        _proto.setIsBackgroundRequest = function setIsBackgroundRequest(
          isBackgroundRequest
        ) {
          this._isBackgroundRequest = isBackgroundRequest;
          return this;
        };
        _proto.setReplaceTransportMarkers = function setReplaceTransportMarkers(
          value
        ) {
          value === void 0 && (value = !0);
          this._shouldReplaceTransportMarkers = value;
          return this;
        };
        _proto.sendAndReturnAbortHandler =
          function sendAndReturnAbortHandler() {
            var _this10 = this;
            this.send();
            return function () {
              return _this10.abort();
            };
          };
        _proto.send = function send(isRetry) {
          var _this11 = this;
          isRetry = isRetry || !1;
          if (!this.uri) return !1;
          this.errorHandler || !this.getOption("suppressErrorHandlerWarning");
          this.getOption("jsonp") &&
            this.method != "GET" &&
            this.setMethod("GET");
          (this.getOption("useIframeTransport") ||
            this.getOption("useFetchWithIframeFallback")) &&
            this.method != "GET" &&
            this.setMethod("GET");
          this.timeoutHandler !== null &&
            (this.getOption("jsonp") ||
              this.getOption("useIframeTransport") ||
              this.getOption("useFetchWithIframeFallback"));
          if (!this.getReadOnly()) {
            this.specifiesWriteRequiredParams();
            if (this.method != "POST") return !1;
          }
          if (document.location.search.toString().includes(this.uri.toString()))
            return !1;
          if (
            this.uri.toString().includes("/../") ||
            this.uri.toString().includes("\\../") ||
            this.uri.toString().includes("/..\\") ||
            this.uri.toString().includes("\\..\\")
          )
            return !1;
          Object.assign(
            this.data,
            importDefault("getAsyncParams")(this.method)
          );
          importDefault("isEmpty")(this.context) ||
            (Object.assign(this.data, this.context), (this.data.ajax_log = 1));
          importDefault("Env").force_param &&
            Object.assign(this.data, importDefault("Env").force_param);
          this._setUserActionID();
          if (this.getOption("bundle") && this._isMultiplexable()) {
            AsyncMultiplex.schedule(this);
            return !0;
          }
          this.setNewSerial();
          this.getOption("asynchronous_DEPRECATED") ||
            this.uri.addQueryData({ __sjax: 1 });
          importDefault("Arbiter").inform("AsyncRequest/send", {
            request: this,
            ts: importDefault("performanceAbsoluteNow")(),
          });
          var uri_str, query;
          this.method == "GET" &&
            this.uri.addQueryData({
              fb_dtsg_ag: importNamespace("DTSG_ASYNC").getToken(),
            });
          this.method == "GET" || this.rawData
            ? ((uri_str = this.uri.addQueryData(this.data).toString()),
              (query = this.rawData || ""))
            : (this._allowCrossOrigin && this.uri.addQueryData({ __a: 1 }),
              (uri_str = this.uri.toString()),
              (query = importNamespace("PHPQuerySerializer").serialize(
                this.data
              )));
          if (this.transport) return !1;
          if (this.getOption("useFetchWithIframeFallback"))
            try {
              var _transport = new (importDefault("FetchStreamTransport"))(
                this.uri
              );
              this.setJSONPTransport(_transport);
              this._markRequestSent();
              _transport.send();
              this.setOption("useIframeTransport", !1);
              return !0;
            } catch (_unused4) {
              this.setOption("useFetchWithIframeFallback", !1),
                this.setOption("useIframeTransport", !0);
            }
          if (this.getOption("jsonp") || this.getOption("useIframeTransport")) {
            requireLazy(["JSONPTransport"], function (JSONPTransport) {
              var transport = new JSONPTransport(
                _this11.getOption("jsonp") ? "jsonp" : "iframe",
                _this11.uri
              );
              _this11.setJSONPTransport(transport);
              _this11._markRequestSent();
              transport.send();
            });
            return !0;
          }
          this.flushedResponseHandler &&
            (this.flushedResponseTextParseIndex = 0);
          var transport = importNamespace(
            "ZeroRewrites"
          ).getTransportBuilderForURI(this.uri)();
          if (!transport) return !1;
          this.schedule("AsyncRequest.send");
          transport.onreadystatechange = function () {
            var _transport = _this11.transport;
            _transport &&
              _transport.readyState >= 2 &&
              _transport.readyState <= 3 &&
              _this11._handleFlushedResponse();
            transport.readyState === 4 &&
              _this11.continuation.last(_this11._onStateChange);
          };
          this.progressHandler &&
            supportsProgress(transport) &&
            (transport.onprogress = function () {
              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              )
                args[_key] = arguments[_key];
              _this11.continuation(function () {
                _this11.progressHandler &&
                  _this11.progressHandler.apply(_this11, args);
              });
            });
          this.uploadProgressHandler &&
            supportsUploadProgress(transport) &&
            (transport.upload.onprogress = function () {
              for (
                var _len2 = arguments.length,
                  args = new Array(_len2),
                  _key2 = 0;
                _key2 < _len2;
                _key2++
              )
                args[_key2] = arguments[_key2];
              _this11.continuation(function () {
                _this11.uploadProgressHandler &&
                  _this11.uploadProgressHandler.apply(_this11, args);
              });
            });
          isRetry || (this.remainingRetries = this.getOption("retries"));
          this.transport = transport;
          try {
            transport.open(
              this.method,
              uri_str,
              importDefault("gkx")("1857581")
                ? !0
                : this.getOption("asynchronous_DEPRECATED")
            );
          } catch (exception) {
            return !1;
          }
          if (
            !this.uri.isSameOrigin() &&
            !this.getOption("jsonp") &&
            !this.getOption("useIframeTransport") &&
            !this.getOption("useFetchWithIframeFallback")
          ) {
            if (!supportsCrossOrigin(transport)) return !1;
            this._canSendCredentials() && (transport.withCredentials = !0);
          }
          this.method == "POST" &&
            !this.rawData &&
            transport.setRequestHeader(
              "Content-Type",
              "application/x-www-form-urlencoded"
            );
          this._isBackgroundRequest &&
            transport.setRequestHeader("X_FB_BACKGROUND_STATE", "1");
          var asyncHeaders = importDefault("getAsyncHeaders")(this.uri);
          Object.keys(asyncHeaders).forEach(function (name) {
            transport && transport.setRequestHeader(name, asyncHeaders[name]);
          });
          importDefault("Arbiter").inform("AsyncRequest/will_send", {
            request: this,
          });
          if (transport)
            for (var headerName in this.headers)
              Object.prototype.hasOwnProperty.call(this.headers, headerName) &&
                transport.setRequestHeader(
                  headerName,
                  this.headers[headerName]
                );
          this.addStatusIndicator();
          this._markRequestSent();
          transport.send(query);
          this.timeout !== null && this.resetTimeout(this.timeout);
          AsyncRequest._inflightCount++;
          return !0;
        };
        _proto.schedule = function schedule(name) {
          this.continuation =
            importDefault("TimeSlice").getReusableContinuation(name);
        };
        _proto._canSendCredentials = function _canSendCredentials() {
          if (this._allowCredentials === !1) return !1;
          var uri = new (importDefault("URI"))(this.uri);
          return (
            importDefault("isBulletinDotComURI")(uri) ||
            importDefault("isFacebookURI")(uri) ||
            importDefault("isInternalFBURI")(uri) ||
            importDefault("isMessengerDotComURI")(uri) ||
            importDefault("isWorkplaceDotComURI")(uri) ||
            importDefault("isWorkDotMetaDotComURI")(uri) ||
            importDefault("isHorizonDotMetaDotComURI")(uri) ||
            importDefault("isSparkDotMetaDotComURI")(uri)
          );
        };
        _proto._markRequestSent = function _markRequestSent() {
          var fullURI = new (importDefault("URI"))(this.getURI())
            .getQualifiedURI()
            .toString();
          importNamespace("ResourceTimingsStore").updateURI(
            importDefault("ResourceTypes").XHR,
            this.resourceTimingStoreUID,
            fullURI
          );
          importNamespace("ResourceTimingsStore")
            .annotate(
              importDefault("ResourceTypes").XHR,
              this.resourceTimingStoreUID
            )
            .addStringAnnotation("uri", fullURI);
          importNamespace("ResourceTimingsStore").measureRequestSent(
            importDefault("ResourceTypes").XHR,
            this.resourceTimingStoreUID
          );
        };
        _proto.promisePayload = function promisePayload(isRetry) {
          return this.exec().then(
            function (response) {
              return response.payload;
            },
            function (response) {
              throw response.toError();
            }
          );
        };
        _proto.exec = function exec(isRetry) {
          var _this12 = this;
          if (
            this.getHandler() !== importDefault("emptyFunction") ||
            this.getErrorHandler() !==
              importDefault("AsyncResponse").defaultErrorHandler
          )
            throw new Error(
              "exec is an async function and does not allow previously set handlers"
            );
          return new (require("Promise"))(function (resolve, reject) {
            _this12.setHandler(resolve).setErrorHandler(reject).send(isRetry);
          });
        };
        AsyncRequest.bootstrap = function bootstrap(href, elem, is_post) {
          var method = "GET",
            readonly = !0,
            data = {};
          (is_post || (elem && elem.rel == "async-post")) &&
            ((method = "POST"),
            (readonly = !1),
            href &&
              ((href = new (importDefault("URI"))(href)),
              (data = href.getQueryData()),
              href.setQueryData({})));
          var status_elem =
            importNamespace("Parent").byClass(elem, "stat_elem") || elem;
          if (
            status_elem &&
            importNamespace("CSS").hasClass(status_elem, "async_saving")
          )
            return !1;
          var async = new AsyncRequest(href)
            .setReadOnly(readonly)
            .setMethod(method)
            .setData(data)
            .setNectarModuleDataSafe(elem)
            .setRelativeTo(elem);
          elem &&
            (async.setHandler(function (response) {
              importDefault("Event").fire(elem, "success", {
                response: response,
              });
            }),
            async.setErrorHandler(function (response) {
              importDefault("Event").fire(elem, "error", {
                response: response,
              }) !== !1 &&
                importDefault("AsyncResponse").defaultErrorHandler(response);
            }));
          if (status_elem instanceof HTMLElement) {
            async.setStatusElement(status_elem);
            var status_class = status_elem.getAttribute("data-status-class");
            status_class && async.setStatusClass(status_class);
          }
          async.send();
          return !1;
        };
        AsyncRequest.post = function post(href, data) {
          new AsyncRequest(href)
            .setReadOnly(!1)
            .setMethod("POST")
            .setData(data)
            .send();
          return !1;
        };
        AsyncRequest.postStatic = function postStatic(href, data) {
          AsyncRequest.post(href, data);
        };
        AsyncRequest.getLastID = function getLastID() {
          return last_id;
        };
        AsyncRequest.ignoreUpdate = function ignoreUpdate() {
          ignore_id_update = !0;
        };
        AsyncRequest.getInflightCount = function getInflightCount() {
          return this._inflightCount;
        };
        return AsyncRequest;
      })();
    AsyncRequest._inflightCount = 0;
    var _asyncMultiplex,
      _pendingAsyncMultiplexes = [],
      AsyncMultiplex = (function () {
        function AsyncMultiplex() {
          this._requests = [];
        }
        var _proto2 = AsyncMultiplex.prototype;
        _proto2.add = function add(request) {
          this._requests.push(request);
        };
        _proto2.remove = function remove(request) {
          var requests = this._requests,
            requestsSent = this._requestsSent;
          for (var ii = 0, jj = requests.length; ii < jj; ii++)
            requests[ii] === request &&
              (requestsSent ? (requests[ii] = null) : requests.splice(ii, 1));
        };
        _proto2.send = function send() {
          this._requestsSent && invariant(0, 4390);
          this._requestsSent = !0;
          this._wrapperRequest = null;
          var requests = this._requests;
          if (!requests.length) return;
          var request;
          if (requests.length === 1) request = requests[0];
          else {
            var data = requests.filter(Boolean).map(function (request) {
              return [
                request.uri.getPath(),
                importNamespace("PHPQuerySerializer").serialize(request.data),
              ];
            });
            request = this._wrapperRequest = new AsyncRequest("/ajax/proxy.php")
              .setAllowCrossPageTransition(!0)
              .setData({ data: data })
              .setHandler(this._handler.bind(this))
              .setTransportErrorHandler(this._transportErrorHandler.bind(this));
          }
          request && request.setOption("bundle", !1).send();
        };
        _proto2._handler = function _handler(response) {
          var _this13 = this,
            responses = response.getPayload().responses;
          if (responses.length !== this._requests.length) return;
          var _loop2 = function _loop2(ii) {
            var request = _this13._requests[ii];
            if (!request) return "continue";
            var request_path = request.uri.getPath();
            _this13._wrapperRequest &&
              (request.id = _this13._wrapperRequest.id);
            if (responses[ii][0] !== request_path) {
              request.continuation.last(function () {
                request.invokeResponseHandler({
                  transportError:
                    "Wrong response order in bundled request to " +
                    request_path,
                });
              });
              return "continue";
            }
            request.continuation.last(function () {
              request.handleResponse(responses[ii][1]);
            });
          };
          for (var ii = 0; ii < this._requests.length; ii++) {
            var _ret2 = _loop2(ii);
            if (_ret2 === "continue") continue;
          }
          _pendingAsyncMultiplexes.splice(
            _pendingAsyncMultiplexes.indexOf(this, 1)
          );
        };
        _proto2._transportErrorHandler = function _transportErrorHandler(
          response
        ) {
          var _this14 = this,
            interpreted = { transportError: response.errorDescription },
            paths = this._requests.filter(Boolean).map(function (request) {
              _this14._wrapperRequest &&
                (request.id = _this14._wrapperRequest.id);
              request.invokeResponseHandler(interpreted);
              return request.uri.getPath();
            });
        };
        AsyncMultiplex.schedule = function schedule(request) {
          request.schedule("AsyncMultiplex.schedule");
          _asyncMultiplex ||
            ((_asyncMultiplex = new AsyncMultiplex()),
            _pendingAsyncMultiplexes.push(_asyncMultiplex),
            importDefault("TimeSlice").guard(
              function () {
                importDefault("setTimeoutAcrossTransitions")(function () {
                  _asyncMultiplex &&
                    (_asyncMultiplex.send(), (_asyncMultiplex = null));
                }, 0);
              },
              "AsyncMultiplex.schedule",
              {
                propagationType:
                  importDefault("TimeSlice").PropagationType.ORPHAN,
              }
            )());
          _asyncMultiplex.add(request);
          return _asyncMultiplex;
        };
        AsyncMultiplex.unschedule = function unschedule(request) {
          _pendingAsyncMultiplexes.forEach(function (asyncMultiplex) {
            asyncMultiplex.remove(request);
          });
        };
        return AsyncMultiplex;
      })();
    AsyncRequest.suppressOnloadToken = {};
    global.AsyncRequest = AsyncRequest;
    exports["default"] = AsyncRequest;
  },
  98
);
__d(
  "isValidReactElement",
  [],
  function (a, b, c, d, e, f) {
    var g =
      (typeof Symbol === "function" &&
        Symbol["for"] &&
        Symbol["for"]("react.element")) ||
      60103;
    function a(a) {
      return !!(typeof a === "object" && a !== null && a.$$typeof === g);
    }
    f["default"] = a;
  },
  66
);
__d(
  "BootloadedReact",
  ["Bootloader", "isValidReactElement"],
  function (a, b, c, d, e, f) {
    var g = function (a) {
      b("Bootloader").loadModules(["ReactDOM"], a, "BootloadedReact");
    };
    a = {
      isValidElement: function (a) {
        return b("isValidReactElement")(a);
      },
      render: function (a, b, c) {
        g(function (d) {
          d.render(a, b, function () {
            c && c(this);
          });
        });
      },
      unmountComponentAtNode: function (a, b) {
        g(function (c) {
          c.unmountComponentAtNode(a), b && b();
        });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "getOrCreateDOMID",
  ["uniqueID"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      a.id || (a.id = c("uniqueID")());
      return a.id;
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualThing",
  ["CSS", "containsNode", "ge", "getOrCreateDOMID"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      a.setAttribute("data-ownerid", c("getOrCreateDOMID")(b));
    }
    function b(a, b) {
      b = b;
      while (b) {
        if (c("containsNode")(a, b)) return !0;
        b = h(b);
      }
      return !1;
    }
    function h(a) {
      a = a;
      var b;
      while (a) {
        if (a.getAttribute && (b = a.getAttribute("data-ownerid")))
          return c("ge")(b);
        a = a.parentNode;
      }
      return null;
    }
    function e(a, b) {
      a = a;
      var e;
      while (a && !d("CSS").hasClass(a, b))
        a.getAttribute && (e = a.getAttribute("data-ownerid"))
          ? (a = c("ge")(e))
          : (a = a.parentNode);
      return a;
    }
    g.register = a;
    g.containsIncludingLayers = b;
    g.getContext = h;
    g.parentByClass = e;
  },
  98
);
__d(
  "getElementText",
  ["isElementNode", "isTextNode"],
  function (a, b, c, d, e, f, g) {
    var h = null;
    function a(a) {
      if (c("isTextNode")(a)) return a.data;
      else if (c("isElementNode")(a)) {
        if (h === null) {
          var b = document.createElement("div");
          h = b.textContent != null ? "textContent" : "innerText";
        }
        return a[h];
      } else return "";
    }
    g["default"] = a;
  },
  98
);
__d(
  "isContentEditable",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = a;
      while (a instanceof HTMLElement) {
        if (
          a.contentEditable === "true" ||
          a.contentEditable === "plaintext-only"
        )
          return !0;
        a = a.parentElement;
      }
      return !1;
    }
    f["default"] = a;
  },
  66
);
__d(
  "isElementInteractive",
  ["isContentEditable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set(["EMBED", "INPUT", "OBJECT", "SELECT", "TEXTAREA"]),
      i = new Set(["button", "checkbox", "radio", "submit"]);
    function a(a) {
      if (!a instanceof HTMLElement) return !1;
      var b = c("isContentEditable")(a),
        d = h.has(a.nodeName);
      a = a instanceof HTMLInputElement && i.has(a.type);
      return (b || d) && !a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "KeyEventController",
  [
    "Bootloader",
    "DOMQuery",
    "Event",
    "Run",
    "emptyFunction",
    "getElementText",
    "isContentEditable",
    "isElementInteractive",
    "isEmpty",
  ],
  function (a, b, c, d, e, f, g) {
    var h = null,
      i = {
        BACKSPACE: [8],
        TAB: [9],
        RETURN: [13],
        ALT: [18],
        ESCAPE: [27],
        LEFT: [37, 63234],
        UP: [38, 63232],
        RIGHT: [39, 63235],
        DOWN: [40, 63233],
        NUMPAD_ADD: [43],
        NUMPAD_SUBSTRACT: [45],
        DELETE: [46],
        COMMA: [188],
        PERIOD: [190],
        SLASH: [191],
        "`": [192],
        "[": [219],
        "]": [221],
        PAGE_UP: [33],
        PAGE_DOWN: [34],
        END: [35],
        HOME: [36],
        SPACE: [32],
        KP_DOT: [46, 110],
        "-": [189],
        "=": [187],
        FORWARD_SLASH: [191],
      },
      j =
        ((a = {}),
        (a[8] = 1),
        (a[9] = 1),
        (a[13] = 1),
        (a[27] = 1),
        (a[32] = 1),
        (a[37] = 1),
        (a[63234] = 1),
        (a[38] = 1),
        (a[63232] = 1),
        (a[39] = 1),
        (a[63235] = 1),
        (a[40] = 1),
        (a[63233] = 1),
        (a[46] = 1),
        a);
    b = (function () {
      function a() {
        var a = this;
        this.handlers = {};
        ["keyup", "keydown", "keypress"].forEach(function (b) {
          return document.addEventListener(b, a.onkeyevent.bind(a, "on" + b));
        });
      }
      var b = a.prototype;
      b.mapKey = function (a) {
        a = a;
        if (/^[0-9]$/.test(a + "")) {
          typeof a !== "number" && (a = a.charCodeAt(0) - 48);
          return [48 + a, 96 + a];
        }
        a += "";
        var b = i[a.toUpperCase()];
        return b ? b : [a.toUpperCase().charCodeAt(0)];
      };
      b.onkeyevent = function (a, b) {
        var d = b;
        d = c("Event").$E(d);
        b = this.handlers[d.keyCode] || this.handlers[d.which];
        if (b)
          for (var e = 0; e < b.length; e++) {
            var f = b[e].callback,
              g = b[e].filter;
            try {
              if (!g || g(d, a)) {
                g = (function () {
                  var b = f(d, a),
                    e = d.which || d.keyCode;
                  c("Bootloader").loadModules(
                    ["KeyEventTypedLogger"],
                    function (a) {
                      new a()
                        .setAction("key_shortcut")
                        .setKey(d.key || "")
                        .setKeyChar(String.fromCharCode(e))
                        .setKeyCode(e)
                        .addToExtraData("is_trusted", d.isTrusted)
                        .log();
                    },
                    "KeyEventController"
                  );
                  if (b === !1) return { v: c("Event").kill(d) };
                })();
                if (typeof g === "object") return g.v;
              }
            } catch (a) {}
          }
        return !0;
      };
      b.resetHandlers = function () {
        for (var a in this.handlers)
          if (Object.prototype.hasOwnProperty.call(this.handlers, a)) {
            var b = this.handlers[a].filter(function (a) {
              return a.preserve();
            });
            b.length ? (this.handlers[a] = b) : delete this.handlers[a];
          }
      };
      a.getInstance = function () {
        return h || (h = new a());
      };
      a.defaultFilter = function (b, d) {
        b = c("Event").$E(b);
        return (
          a.filterEventTypes(b, d) &&
          a.filterEventTargets(b, d) &&
          a.filterEventModifiers(b, d)
        );
      };
      a.filterEventTypes = function (a, b) {
        return b === "onkeydown" ? !0 : !1;
      };
      a.filterEventTargets = function (a, b) {
        b = a.getTarget();
        return (
          !c("isElementInteractive")(b) ||
          (a.keyCode in j &&
            ((d("DOMQuery").isNodeOfType(b, ["input", "textarea"]) &&
              b.value.length === 0) ||
              (c("isContentEditable")(b) &&
                c("getElementText")(b).length === 0)))
        );
      };
      a.filterEventModifiers = function (a, b) {
        return a.ctrlKey || a.altKey || a.metaKey || a.repeat ? !1 : !0;
      };
      a.registerKeyAcrossTransitions = function (b, d, e, f) {
        e === void 0 && (e = a.defaultFilter);
        f === void 0 && (f = !1);
        return a.registerKey(b, d, e, f, c("emptyFunction").thatReturnsTrue);
      };
      a.registerKey = function (b, e, f, g, h) {
        f === void 0 && (f = a.defaultFilter);
        g === void 0 && (g = !1);
        h === void 0 && (h = c("emptyFunction").thatReturnsFalse);
        b = b;
        var i = a.getInstance(),
          j = b == null ? [] : i.mapKey(b);
        c("isEmpty")(i.handlers) && d("Run").onLeave(i.resetHandlers.bind(i));
        var k = {};
        for (var l = 0; l < j.length; l++) {
          b = "" + j[l];
          (!i.handlers[b] || g) && (i.handlers[b] = []);
          var m = { callback: e, filter: f, preserve: h };
          k[b] = m;
          i.handlers[b].push(m);
        }
        return {
          remove: function () {
            for (var a in k) {
              if (i.handlers[a] && i.handlers[a].length) {
                var b = i.handlers[a].indexOf(k[a]);
                b >= 0 && i.handlers[a].splice(b, 1);
              }
              delete k[a];
            }
          },
        };
      };
      return a;
    })();
    g["default"] = b;
  },
  98
);
__d(
  "KeyStatus",
  ["Event", "ExecutionEnvironment"],
  function (a, b, c, d, e, f, g) {
    var h = null,
      i = null;
    function j() {
      i ||
        (i = c("Event").listen(window, "blur", function () {
          (h = null), k();
        }));
    }
    function k() {
      i && (i.remove(), (i = null));
    }
    function a(a) {
      (h = c("Event").getKeyCode(a)), j();
    }
    function b() {
      (h = null), k();
    }
    if (c("ExecutionEnvironment").canUseDOM) {
      f = document.documentElement;
      if (f)
        if (f.addEventListener)
          f.addEventListener("keydown", a, !0),
            f.addEventListener("keyup", b, !0);
        else if (f.attachEvent) {
          f = f.attachEvent;
          f("onkeydown", a);
          f("onkeyup", b);
        }
    }
    function d() {
      return !!h;
    }
    function e() {
      return h;
    }
    g.isKeyDown = d;
    g.getKeyDownCode = e;
  },
  98
);
__d(
  "Popup",
  ["isTruthy"],
  function (a, b, c, d, e, f, g) {
    function a(a, b, d, e) {
      var f = [];
      c("isTruthy")(b) && f.push("width=" + b);
      c("isTruthy")(d) && f.push("height=" + d);
      var g = document.body;
      if (g != null && b != null && b !== 0 && d != null && d !== 0) {
        var h = "screenX" in window ? window.screenX : window.screenLeft,
          i = "screenY" in window ? window.screenY : window.screenTop,
          j = "outerWidth" in window ? window.outerWidth : g.clientWidth;
        g = "outerHeight" in window ? window.outerHeight : g.clientHeight - 22;
        h = Math.floor(h + (j - b) / 2);
        j = Math.floor(i + (g - d) / 2.5);
        f.push("left=" + h);
        f.push("top=" + j);
      }
      f.push("scrollbars");
      return window.open(a, e != null && e !== "" ? e : "_blank", f.join(","));
    }
    g.open = a;
  },
  98
);
__d(
  "PopupLink",
  ["DOMEvent", "DOMEventListener", "Popup"],
  function (a, b, c, d, e, f) {
    a = {
      listen: function (a, c, d) {
        b("DOMEventListener").add(a, "click", function (e) {
          new (b("DOMEvent"))(e).kill(), b("Popup").open(a.href, c, d);
        });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "BehaviorsMixin",
  [],
  function (a, b, c, d, e, f) {
    var g = (function () {
        function a(a) {
          (this.$1 = a), (this.$2 = !1);
        }
        var b = a.prototype;
        b.enable = function () {
          this.$2 || ((this.$2 = !0), this.$1.enable());
        };
        b.disable = function () {
          this.$2 && ((this.$2 = !1), this.$1.disable());
        };
        return a;
      })(),
      h = 1;
    function i(a) {
      a.__BEHAVIOR_ID || (a.__BEHAVIOR_ID = h++);
      return a.__BEHAVIOR_ID;
    }
    a = {
      enableBehavior: function (a) {
        this._behaviors || (this._behaviors = {});
        var b = i(a);
        this._behaviors[b] || (this._behaviors[b] = new g(new a(this)));
        this._behaviors[b].enable();
        return this;
      },
      disableBehavior: function (a) {
        if (this._behaviors) {
          a = i(a);
          this._behaviors[a] && this._behaviors[a].disable();
        }
        return this;
      },
      enableBehaviors: function (a) {
        a.forEach(this.enableBehavior, this);
        return this;
      },
      destroyBehaviors: function () {
        if (this._behaviors) {
          for (var a in this._behaviors) this._behaviors[a].disable();
          this._behaviors = {};
        }
      },
      hasBehavior: function (a) {
        return this._behaviors && i(a) in this._behaviors;
      },
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "setImmediate",
  ["TimeSlice", "TimerStorage", "setImmediateAcrossTransitions"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var b,
        d = function () {
          c("TimerStorage").unset(c("TimerStorage").IMMEDIATE, b);
          for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
            e[f] = arguments[f];
          Function.prototype.apply.call(a, this, e);
        };
      c("TimeSlice").copyGuardForWrapper(a, d);
      for (
        var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1;
        g < e;
        g++
      )
        f[g - 1] = arguments[g];
      b = c("setImmediateAcrossTransitions").apply(void 0, [d].concat(f));
      c("TimerStorage").set(c("TimerStorage").IMMEDIATE, b);
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "Layer",
  [
    "invariant",
    "ArbiterMixin",
    "BehaviorsMixin",
    "BootloadedReact",
    "CSS",
    "ContextualThing",
    "DOM",
    "DataStore",
    "Event",
    "FBLogger",
    "HTML",
    "KeyEventController",
    "KeyStatus",
    "Parent",
    "Style",
    "ge",
    "isNode",
    "mixin",
    "removeFromArray",
    "setImmediate",
  ],
  function (a, b, c, d, e, f, g, h) {
    b("KeyStatus");
    var i = [],
      j = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, d) {
          var e;
          e = b.call(this) || this;
          e._config = a || {};
          if (d) {
            e._configure(e._config, d);
            a = e._config.addedBehaviors || [];
            e.enableBehaviors(e._getDefaultBehaviors().concat(a));
          } else
            c("FBLogger")("layer").warn(
              "The markup param wasn't provided to the Layer constructor"
            );
          return e;
        }
        var e = a.prototype;
        e.init = function (a) {
          this._configure(this._config, a);
          a = this._config.addedBehaviors || [];
          this.enableBehaviors(this._getDefaultBehaviors().concat(a));
          this._initialized = !0;
          return this;
        };
        e._configure = function (a, b) {
          var e = this;
          if (b) {
            var f = c("isNode")(b),
              g = typeof b === "string" || c("HTML").isHTML(b);
            this.containsReactComponent =
              d("BootloadedReact").isValidElement(b);
            !f &&
              !g &&
              !this.containsReactComponent &&
              c("FBLogger")("layer").warn(
                "Layer must be init with HTML, DOM node or React instance"
              );
            if (g) b = c("HTML")(b).getRootNode();
            else if (this.containsReactComponent) {
              f = document.createElement("div");
              var h = !0;
              d("BootloadedReact").render(b, f, function () {
                e.inform("reactshow"), h || e.updatePosition();
              });
              h = !1;
              b = this._reactContainer = f;
            }
          }
          this._root = this._buildWrapper(a, b);
          a.attributes && c("DOM").setAttributes(this._root, a.attributes);
          a.classNames &&
            a.classNames.forEach(d("CSS").addClass.bind(null, this._root));
          d("CSS").addClass(this._root, "uiLayer");
          a.causalElement && (this._causalElement = c("ge")(a.causalElement));
          a.permanent && (this._permanent = a.permanent);
          a.isStrictlyControlled &&
            (this._isStrictlyControlled = a.isStrictlyControlled);
          d("DataStore").set(this._root, "layer", this);
        };
        e._getDefaultBehaviors = function () {
          return [];
        };
        e.getCausalElement = function () {
          return this._causalElement;
        };
        e.setCausalElement = function (a) {
          this._causalElement = a;
          return this;
        };
        e.getInsertParent = function () {
          return this._insertParent || document.body;
        };
        e.getRoot = function () {
          this._root ||
            (this._destroyed
              ? c("FBLogger")("layer").warn(
                  "No root node for this Layer. It has either not yet been set or the Layer has been destroyed.  This layer has been destroyed."
                )
              : c("FBLogger")("layer").warn(
                  "No root node for this Layer. It has probably not been set."
                ));
          return this._root;
        };
        e.getContentRoot = function () {
          return this.getRoot();
        };
        e._buildWrapper = function (a, b) {
          return b;
        };
        e.setInsertParent = function (a) {
          a &&
            (this._shown &&
              a !== this.getInsertParent() &&
              (c("DOM").appendContent(a, this.getRoot()),
              this.updatePosition()),
            (this._insertParent = a));
          return this;
        };
        e.showAfterDelay = function (a) {
          window.setTimeout(this.show.bind(this), a);
        };
        e.show = function () {
          var b = this;
          if (this._shown) return this;
          var e = this.getRoot();
          e != null || h(0, 5142);
          this.inform("beforeshow");
          c("Style").set(e, "visibility", "hidden");
          c("Style").set(e, "overflow", "hidden");
          d("CSS").show(e);
          c("DOM").appendContent(this.getInsertParent(), e);
          this.updatePosition() !== !1
            ? ((this._shown = !0),
              this.inform("show"),
              a.inform("show", this),
              this._permanent ||
                window.setTimeout(function () {
                  b._shown && i.push(b);
                }, 0))
            : d("CSS").hide(e);
          c("Style").set(e, "visibility", "");
          c("Style").set(e, "overflow", "");
          c("Style").set(e, "opacity", "1");
          this.inform("aftershow");
          return this;
        };
        e.hide = function (a) {
          if (this._isStrictlyControlled) {
            this._shown && this.inform("runhide", a);
            return this;
          }
          return this._hide();
        };
        e._hide = function () {
          if (this._hiding || !this._shown || this.inform("beforehide") === !1)
            return this;
          this._hiding = !0;
          this.inform("starthide") !== !1 && this.finishHide();
          return this;
        };
        e.conditionShow = function (a) {
          return a ? this.show() : this._hide();
        };
        e.finishHide = function () {
          if (this._shown) {
            this._permanent || c("removeFromArray")(i, this);
            this._hiding = !1;
            this._shown = !1;
            var b = this.getRoot();
            b != null || h(0, 5143);
            d("CSS").hide(b);
            this.inform("hide");
            a.inform("hide", this);
          }
        };
        e.isShown = function () {
          return this._shown;
        };
        e.updatePosition = function () {
          return !0;
        };
        e.destroy = function () {
          this.containsReactComponent &&
            d("BootloadedReact").unmountComponentAtNode(this._reactContainer);
          this.finishHide();
          var b = this.getRoot();
          c("DOM").remove(b);
          this.destroyBehaviors();
          this.inform("destroy");
          a.inform("destroy", this);
          d("DataStore").remove(b, "layer");
          this._root = this._causalElement = null;
          this._destroyed = !0;
        };
        a.init = function (a, b) {
          a.init(b);
        };
        a.initAndShow = function (a, b) {
          a.init(b).show();
        };
        a.show = function (a) {
          a.show();
        };
        a.showAfterDelay = function (a, b) {
          a.showAfterDelay(b);
        };
        a.getTopmostLayer = function () {
          return i[i.length - 1];
        };
        a.informBlur = function (a) {
          k = null;
          l = null;
          var b = i.length;
          if (!b) return;
          while (b--) {
            var c = i[b],
              e = c.getContentRoot();
            e != null || h(0, 5144);
            if (d("ContextualThing").containsIncludingLayers(e, a)) return;
            if (c.inform("blur", { target: a }) === !1 || c.isShown()) return;
          }
        };
        return a;
      })(c("mixin")(c("ArbiterMixin"), c("BehaviorsMixin")));
    Object.assign(j, c("ArbiterMixin"));
    Object.assign(j.prototype, {
      _destroyed: !1,
      _initialized: !1,
      _root: null,
      _shown: !1,
      _hiding: !1,
      _causalElement: null,
      _reactContainer: null,
    });
    c("Event").listen(
      document.documentElement,
      "keydown",
      function (a) {
        if (c("KeyEventController").filterEventTargets(a, "keydown"))
          for (var b = i.length - 1; b >= 0; b--)
            if (i[b].inform("key", a) === !1) return !1;
        return !0;
      },
      c("Event").Priority.URGENT
    );
    var k;
    c("Event").listen(document.documentElement, "mousedown", function (a) {
      k = a.getTarget();
    });
    var l;
    c("Event").listen(document.documentElement, "mouseup", function (a) {
      (l = a.getTarget()),
        c("setImmediate")(function () {
          (k = null), (l = null);
        });
    });
    c("Event").listen(document.documentElement, "click", function (a) {
      var b = k,
        e = l;
      k = null;
      l = null;
      var f = i.length;
      if (!f) return;
      f = a.getTarget();
      if (f !== e || f !== b) return;
      if (!c("DOM").contains(document.documentElement, f)) return;
      if (f.offsetWidth != null && !f.offsetWidth) return;
      if (d("Parent").byClass(f, "generic_dialog")) return;
      j.informBlur(f);
    });
    g["default"] = j;
  },
  98
);
__d(
  "getViewportDimensions",
  ["UserAgent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function () {
      var a = null;
      return function () {
        var b = document.body;
        if (b == null) return null;
        (a == null || !b.contains(a)) &&
          ((a = document.createElement("div")),
          (a.style.left = Number.MAX_SAFE_INTEGER + "px"),
          (a.style.width = "100%"),
          (a.style.height = "100%"),
          (a.style.position = "fixed"),
          b.appendChild(a));
        return a;
      };
    })();
    function i() {
      var a;
      document.documentElement && (a = document.documentElement.clientWidth);
      a == null && document.body && (a = document.body.clientWidth);
      return a || 0;
    }
    function j() {
      var a;
      document.documentElement && (a = document.documentElement.clientHeight);
      a == null && document.body && (a = document.body.clientHeight);
      return a || 0;
    }
    function k() {
      return {
        width: window.innerWidth || i(),
        height: window.innerHeight || j(),
      };
    }
    k.withoutScrollbars = function () {
      return c("UserAgent").isPlatform("Android")
        ? k()
        : { width: i(), height: j() };
    };
    k.layout = function () {
      var a,
        b = h();
      return {
        width: (a = b == null ? void 0 : b.clientWidth) != null ? a : i(),
        height: (a = b == null ? void 0 : b.clientHeight) != null ? a : j(),
      };
    };
    g["default"] = k;
  },
  98
);
__d(
  "isFalsey",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a == null || !Boolean(a);
    }
    f["default"] = a;
  },
  66
);
__d(
  "PopupWindow",
  [
    "DOMDimensions",
    "DOMQuery",
    "FlowMigrationUtilsForLegacyFiles",
    "Layer",
    "Popup",
    "getViewportDimensions",
    "isFalsey",
  ],
  function (a, b, c, d, e, f, g) {
    var h = {
      allowShrink: !0,
      strategy: "vector",
      timeout: 100,
      widthElement: null,
    };
    function b(a) {
      Object.assign(h, a), window.setInterval(i, h.timeout);
    }
    function i() {
      var a = c("getViewportDimensions")(),
        b = j(),
        e = c("Layer").getTopmostLayer();
      if (e) {
        e = (e = e.getRoot()) == null ? void 0 : e.firstChild;
        e ||
          d("FlowMigrationUtilsForLegacyFiles").invariantViolation(
            "topMostLayer.getRoot().firstChild is null."
          );
        var f = d("DOMDimensions").getElementDimensions(e);
        f.height += d("DOMDimensions").measureElementBox(
          e,
          "height",
          !0,
          !0,
          !0
        );
        f.width += d("DOMDimensions").measureElementBox(e, "width", !0, !0, !0);
        b.height = Math.max(b.height, f.height);
        b.width = Math.max(b.width, f.width);
      }
      e = b.height - a.height;
      f = b.width - a.width;
      f < 0 && c("isFalsey")(h.widthElement) && (f = 0);
      f = f > 1 ? f : 0;
      c("isFalsey")(h.allowShrink) && e < 0 && (e = 0);
      if (e || f)
        try {
          window.console && window.console.firebug,
            window.resizeBy(f, e),
            f && window.moveBy(f / -2, 0);
        } catch (a) {}
    }
    function j() {
      var b = d("DOMDimensions").getDocumentDimensions();
      if (h.strategy === "offsetHeight") {
        var e = document.body;
        if (!e)
          d("FlowMigrationUtilsForLegacyFiles").invariantViolation(
            "document.body is null."
          );
        else {
          b.height = (e = e.offsetHeight) != null ? e : 0;
        }
      }
      if (c("isFalsey")(h.widthElement) && typeof h.widthElement === "string") {
        e = d("DOMQuery").scry(document.body, h.widthElement)[0];
        e && (b.width = d("DOMDimensions").getElementDimensions(e).width);
      }
      e = a.Dialog;
      e && e.max_bottom && e.max_bottom > b.height && (b.height = e.max_bottom);
      return b;
    }
    function e(a, b, c, e) {
      return d("Popup").open(a, c, b, e);
    }
    g._opts = h;
    g.init = b;
    g._resizeCheck = i;
    g._getDocumentSize = j;
    g.open = e;
  },
  98
);
__d(
  "PluginMessage",
  [
    "Arbiter",
    "CSS",
    "DOM",
    "DOMEventListener",
    "MNCommerceLogger",
    "UnverifiedXD",
  ],
  function (a, b, c, d, e, f, g) {
    var h = "platform/plugins/checkbox_connect/access_token";
    function a() {
      d("DOMEventListener").add(window, "message", function (a) {
        if (/\.facebook\.com$/.test(a.origin) && i().test(a.data)) {
          a = JSON.parse(a.data.substring(24));
          "type" in a &&
            (a.type === "send_to_messenger"
              ? j(a)
              : a.type === "messenger_checkbox"
              ? k(a)
              : a.type === "customer_chat" && m(a));
        }
      });
    }
    function i() {
      return new RegExp("^SOCIALPLUGIN_AUTH_POPUP:");
    }
    function j(a) {
      var b = document.getElementById("send-to-messenger-connect-button"),
        e = document.getElementById("send-to-messenger-disconnect-button"),
        f = document.getElementById("send-to-messenger-identity"),
        g = document.getElementById("send-to-messenger-profile-photo"),
        h = document.getElementById("send-to-messenger-profile-name");
      b != null &&
        e != null &&
        f != null &&
        g != null &&
        h != null &&
        (a.can_personalize === !0 && a.connected === !0
          ? (d("CSS").show(b),
            d("CSS").hide(e),
            l(g, a.profile_photo),
            l(h, a.profile_name),
            d("CSS").show(f),
            d("MNCommerceLogger").logAuthEvent(
              String(a.app_id),
              String(a.page_id),
              String(a.user_id),
              "send_to_messenger_opt_in_client_event"
            ),
            c("UnverifiedXD").send({
              type: "sdk_event",
              event: "send_to_messenger",
              data: JSON.stringify({ event: "opt_in", ref: String(a.ref) }),
            }))
          : (d("CSS").hide(b), d("CSS").show(e), d("CSS").hide(f)));
    }
    function k(a) {
      var b = document.getElementById("plugin-MN-commerce-identity"),
        e = document.getElementById(
          "plugin-MN-commerce-identity-profile-picture"
        ),
        f = document.getElementById("plugin-MN-commerce-identity-profile-name"),
        g = document.getElementById("web-plugin-checkbox-form");
      b != null &&
        e != null &&
        f != null &&
        g != null &&
        (a.can_personalize === !0
          ? (l(e, a.profile_photo),
            l(f, a.profile_name),
            d("CSS").show(b),
            l(g, a.checkbox),
            a.access_token != null && c("Arbiter").inform(h, a.access_token))
          : d("CSS").hide(b));
    }
    function l(a, b) {
      var d = document.createElement("div");
      c("DOM").setContent(d, b);
      b = d.firstChild;
      b != null && a.replaceWith(b);
    }
    function m(a) {
      var b = window.require("Arbiter");
      "ArbiterData" in a
        ? b.inform(a.ArbiterEvent, a.ArbiterData)
        : b.inform(a.ArbiterEvent);
    }
    g.MESSENGER_CHECKBOX_ACCESS_TOKEN_LOGIN_ARBITER = h;
    g.listen = a;
  },
  98
);
__d(
  "PluginConfirm",
  [
    "DOMEvent",
    "DOMEventListener",
    "PlatformVersioning",
    "PluginMessage",
    "PopupWindow",
    "URI",
  ],
  function (a, b, c, d, e, f) {
    var g;
    function h(a) {
      Object.assign(this, {
        plugin: a,
        confirm_params: {},
        return_params: (g || (g = b("URI"))).getRequestURI().getQueryData(),
      }),
        this.addReturnParams({ ret: "sentry" }),
        delete this.return_params.hash;
    }
    Object.assign(h.prototype, {
      addConfirmParams: function (a) {
        Object.assign(this.confirm_params, a);
      },
      addReturnParams: function (a) {
        Object.assign(this.return_params, a);
        return this;
      },
      start: function () {
        var a = b("PlatformVersioning")
          .versionAwareURI(
            new (g || (g = b("URI")))("/plugins/error/confirm/" + this.plugin)
          )
          .addQueryData(this.confirm_params)
          .addQueryData({
            secure: g.getRequestURI().isSecure(),
            plugin: this.plugin,
            return_params: JSON.stringify(this.return_params),
          });
        this.popup = b("PopupWindow").open(a.toString(), 320, 486);
        b("PluginMessage").listen();
        return this;
      },
    });
    h.starter = function (a, b, c) {
      a = new h(a);
      a.addConfirmParams(b || {});
      a.addReturnParams(c || {});
      return a.start.bind(a);
    };
    h.listen = function (a, c, d, e) {
      b("DOMEventListener").add(a, "click", function (a) {
        new (b("DOMEvent"))(a).kill(), h.starter(c, d, e)();
      });
    };
    e.exports = h;
  },
  null
);
__d(
  "intlSummarizeNumber",
  [
    "FbtNumberType",
    "IntlCompactDecimalNumberFormatConfig",
    "IntlVariations",
    "intlNumUtils",
  ],
  function (a, b, c, d, e, f, g) {
    var h = 3,
      i = 14,
      j = { ROUND: "ROUND", TRUNCATE: "TRUNCATE" },
      k = { SHORT: "SHORT", LONG: "LONG" };
    function a(a, b, d, e) {
      d === void 0 && (d = k.SHORT);
      e === void 0 && (e = j.ROUND);
      d = c("IntlCompactDecimalNumberFormatConfig")[
        d === k.SHORT ? "short_patterns" : "long_patterns"
      ];
      var f = a === 0 ? 0 : Math.floor(Math.log10(Math.abs(a)));
      f > i && (f = i);
      var g = l(a, f, b, e, d),
        m = g[0],
        n = g[1];
      g = g[2];
      if (g) {
        f += 1;
        g = l(a, f, b, e, d);
        m = g[0];
        n = g[1];
        g[2];
      }
      e =
        c("FbtNumberType").getVariation(m) || c("IntlVariations").NUMBER_OTHER;
      g = f.toString();
      g = d == null ? void 0 : (d = d[g]) == null ? void 0 : d[e.toString()];
      if (
        !g ||
        f < h ||
        (g.positive_prefix_pattern === "" && g.positive_suffix_pattern === "")
      ) {
        d = b === void 0 ? 0 : b;
        return c("intlNumUtils").formatNumberWithThousandDelimiters(a, d);
      }
      return g && g.min_integer_digits === 0 && m === 1
        ? g.positive_prefix_pattern + g.positive_suffix_pattern
        : ((g && g.positive_prefix_pattern) || "") +
            c("intlNumUtils").formatNumberWithThousandDelimiters(m, n) +
            ((g && g.positive_suffix_pattern) || "");
    }
    function l(a, b, d, e, f) {
      var g = b.toString();
      g =
        f == null
          ? void 0
          : (f = f[g]) == null
          ? void 0
          : f[c("IntlVariations").NUMBER_OTHER.toString()];
      f = (g && g.min_integer_digits) || b + 1;
      var h = b - f + 1;
      h = Math.abs(a) / Math.pow(10, h);
      var k = d != null;
      d = k ? d : g && g.min_fraction_digits;
      d == null && (d = b > 2 ? 1 : 0);
      g =
        e === j.TRUNCATE
          ? c("intlNumUtils").truncateLongNumber(h.toString(), d)
          : h.toFixed(d);
      e = parseFloat(g) * (a < 0 ? -1 : 1);
      return [
        e,
        e % 1 === 0 && !k ? 0 : d,
        g.length > f + (d > 0 ? d + 1 : 0) + (h >= 0 ? 0 : 1) && b < i,
      ];
    }
    g["default"] = a;
  },
  98
);
__d(
  "PluginIconButton",
  ["fbt", "invariant", "CSS", "DOM", "Event", "intlSummarizeNumber"],
  function (a, b, c, d, e, f, g, h, i) {
    a = (function () {
      function a(a, b, d, e) {
        var f = this;
        a.removeAttribute("id");
        e === null || d !== null || i(0, 2812);
        this.$1 = a;
        this.$2 = d;
        this.$3 = e;
        b === !1 &&
          (c("Event").listen(a, "click", function () {
            return f.toggleButton();
          }),
          c("Event").listen(a, "toggle", function () {
            return f.toggleButton();
          }));
      }
      var b = a.prototype;
      b.toggleButton = function () {
        var a = this;
        d("CSS").hasClass(this.$1, "active") === !1
          ? (d("CSS").addClass(this.$1, "active"),
            this.$4(!0),
            d("CSS").addClass(this.$1, "is_animating"),
            setTimeout(function () {
              d("CSS").removeClass(a.$1, "is_animating");
            }, 240))
          : (d("CSS").removeClass(this.$1, "active"), this.$4(!1));
      };
      b.setTitle = function (a) {
        this.$1.setAttribute("title", a);
      };
      b.$4 = function (a) {
        var b = function (a) {
          return h._("{count}", [
            h._param("count", c("intlSummarizeNumber")(a, 0)),
          ]);
        };
        this.$3 != null &&
          this.$3 < 1e3 &&
          ((this.$3 = a ? this.$3 + 1 : this.$3 - 1),
          c("DOM").setContent(this.$2, b(this.$3)));
      };
      b.isActivated = function () {
        return d("CSS").hasClass(this.$1, "active");
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "PluginPageActionLogger",
  ["BanzaiLogger", "DOMEventListener", "DOMQuery", "ODS"],
  function (a, b, c, d, e, f, g) {
    function a(a, b, e, f, g, h, i, j, k, l) {
      function m(g, h) {
        g = d("DOMQuery").scry(f, "." + g)[0];
        if (!g) return;
        d("DOMEventListener").add(g, "click", function (f) {
          d("ODS").bumpEntityKey(
            2966,
            "platform_www",
            "platform.plugin.page.action"
          ),
            c("BanzaiLogger").log("PagePluginActionsLoggerConfig", {
              page_id: b,
              page_plugin_action: h,
              page_plugin_action_type: "click",
              referer_url: e,
              is_sdk: a,
            });
        });
      }
      m(g, "page_like");
      m(h, "page_unlike");
      m(i, "page_avatar");
      m(j, "page_permalink");
      m(k, "page_share");
      m(l, "page_cta");
    }
    g.initializeClickLoggers = a;
  },
  98
);
__d(
  "XSharePluginLoggingController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/platform/plugin/share/logging/", {});
  },
  null
);
__d(
  "PluginShareActions",
  ["AsyncRequest", "Event", "XSharePluginLoggingController"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d, e, f, g, h) {
      c("Event").listen(f, "click", function (f) {
        new (c("AsyncRequest"))()
          .setURI(c("XSharePluginLoggingController").getURIBuilder().getURI())
          .setData({
            app_id: g,
            href: a,
            layout: b,
            event: "click",
            has_iframe: d,
            referer_url: e,
          })
          .send();
      });
    }
    g.init = a;
  },
  98
);
__d(
  "Keys",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
      BACKSPACE: 8,
      TAB: 9,
      RETURN: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      PAUSE_BREAK: 19,
      CAPS_LOCK: 20,
      ESC: 27,
      SPACE: 32,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      INSERT: 45,
      DELETE: 46,
      ZERO: 48,
      ONE: 49,
      TWO: 50,
      THREE: 51,
      FOUR: 52,
      FIVE: 53,
      SIX: 54,
      SEVEN: 55,
      EIGHT: 56,
      NINE: 57,
      A: 65,
      B: 66,
      C: 67,
      D: 68,
      E: 69,
      F: 70,
      G: 71,
      H: 72,
      I: 73,
      J: 74,
      K: 75,
      L: 76,
      M: 77,
      N: 78,
      O: 79,
      P: 80,
      Q: 81,
      R: 82,
      S: 83,
      T: 84,
      U: 85,
      V: 86,
      W: 87,
      X: 88,
      Y: 89,
      Z: 90,
      LEFT_WINDOW_KEY: 91,
      RIGHT_WINDOW_KEY: 92,
      SELECT_KEY: 93,
      NUMPAD_0: 96,
      NUMPAD_1: 97,
      NUMPAD_2: 98,
      NUMPAD_3: 99,
      NUMPAD_4: 100,
      NUMPAD_5: 101,
      NUMPAD_6: 102,
      NUMPAD_7: 103,
      NUMPAD_8: 104,
      NUMPAD_9: 105,
      MULTIPLY: 106,
      ADD: 107,
      SUBTRACT: 109,
      DECIMAL_POINT: 110,
      DIVIDE: 111,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      NUM_LOCK: 144,
      SCROLL_LOCK: 145,
      SEMI_COLON: 186,
      EQUAL_SIGN: 187,
      COMMA: 188,
      DASH: 189,
      PERIOD: 190,
      FORWARD_SLASH: 191,
      GRAVE_ACCENT: 192,
      OPEN_BRACKET: 219,
      BACK_SLASH: 220,
      CLOSE_BRAKET: 221,
      SINGLE_QUOTE: 222,
    });
    f["default"] = a;
  },
  66
);
__d(
  "FbtLogging",
  ["cr:1094907"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = b("cr:1094907") == null ? void 0 : b("cr:1094907").logImpression;
    g.logImpression = a;
  },
  98
);
__d(
  "InlineFbtResultImpl",
  ["cx", "FbtHooks", "FbtReactUtil", "FbtResultBase"],
  function (a, b, c, d, e, f, g, h) {
    function i(a, b, c, e) {
      var f = "_4qba";
      e != null &&
        e != "" &&
        (b === "TRANSLATION"
          ? (f = "_4qbb")
          : b === "APPROVE"
          ? (f = "_4qbc")
          : b === "REPORT" && (f = "_4qbd"));
      return {
        $$typeof: d("FbtReactUtil").REACT_ELEMENT_TYPE,
        type: "em",
        key: null,
        ref: null,
        props: {
          className: f,
          "data-intl-hash": e,
          "data-intl-translation": c,
          "data-intl-trid": "",
          children: a,
          suppressHydrationWarning: !0,
        },
        _owner: null,
      };
    }
    var j = function (a) {
      return i(a.content, a.inlineMode, a.translation, a.hash);
    };
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, e, f, g) {
        var h;
        h =
          a.call(
            this,
            b,
            c("FbtHooks").getErrorListener({ translation: f, hash: g })
          ) || this;
        h.$$typeof = d("FbtReactUtil").REACT_ELEMENT_TYPE;
        h.key = null;
        h.ref = null;
        h.type = j;
        h.props = { content: b, inlineMode: e, translation: f, hash: g };
        return h;
      }
      return b;
    })(c("FbtResultBase"));
    g["default"] = a;
  },
  98
);
__d(
  "IntlQtEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1848815");
    c = b("FalcoLoggerInternal").create("intl_qt_event", a);
    e.exports = c;
  },
  null
);
__d(
  "getContextualParent",
  ["ge"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      b === void 0 && (b = !1);
      var d = !1;
      a = a;
      do {
        if (a instanceof Element) {
          var e = a.getAttribute("data-ownerid");
          if (e) {
            a = c("ge")(e);
            d = !0;
            continue;
          }
        }
        a = a.parentNode;
      } while (b && a && !d);
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "csx",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      throw new Error("csx: Unexpected class selector transformation.");
    }
    f["default"] = a;
  },
  66
);
