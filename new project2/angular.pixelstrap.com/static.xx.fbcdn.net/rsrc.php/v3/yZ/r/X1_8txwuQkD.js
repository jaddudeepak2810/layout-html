/*FB_PKG_DELIM*/

__d(
  "ChannelConstants",
  [],
  function (a, b, c, d, e, f) {
    var g = "channel/";
    a = {
      CHANNEL_MANUAL_RECONNECT_DEFER_MSEC: 2e3,
      MUTE_WARNING_TIME_MSEC: 25e3,
      WARNING_COUNTDOWN_THRESHOLD_MSEC: 15e3,
      ON_SHUTDOWN: g + "shutdown",
      ON_INVALID_HISTORY: g + "invalid_history",
      ON_CONFIG: g + "config",
      ON_ENTER_STATE: g + "enter_state",
      ON_EXIT_STATE: g + "exit_state",
      ATTEMPT_RECONNECT: g + "attempt_reconnect",
      RTI_SESSION: g + "new_rti_address",
      CONSOLE_LOG: g + "message:console_log",
      GET_RTI_SESSION_REQUEST: g + "rti_session_request",
      SKYWALKER: g + "skywalker",
      CHANNEL_ESTABLISHED: g + "established",
      OK: "ok",
      ERROR: "error",
      ERROR_MAX: "error_max",
      ERROR_MISSING: "error_missing",
      ERROR_MSG_TYPE: "error_msg_type",
      ERROR_SHUTDOWN: "error_shutdown",
      ERROR_STALE: "error_stale",
      SYS_OWNER: "sys_owner",
      SYS_NONOWNER: "sys_nonowner",
      SYS_ONLINE: "sys_online",
      SYS_OFFLINE: "sys_offline",
      SYS_TIMETRAVEL: "sys_timetravel",
      HINT_AUTH: "shutdown auth",
      HINT_CONN: "shutdown conn",
      HINT_DISABLED: "shutdown disabled",
      HINT_INVALID_STATE: "shutdown invalid state",
      HINT_MAINT: "shutdown maint",
      HINT_UNSUPPORTED: "shutdown unsupported",
      reason_Unknown: 0,
      reason_AsyncError: 1,
      reason_TooLong: 2,
      reason_Refresh: 3,
      reason_RefreshDelay: 4,
      reason_UIRestart: 5,
      reason_NeedSeq: 6,
      reason_PrevFailed: 7,
      reason_IFrameLoadGiveUp: 8,
      reason_IFrameLoadRetry: 9,
      reason_IFrameLoadRetryWorked: 10,
      reason_PageTransitionRetry: 11,
      reason_IFrameLoadMaxSubdomain: 12,
      reason_NoChannelInfo: 13,
      reason_NoChannelHost: 14,
      CAPABILITY_VOIP_INTEROP: 8,
      CAPABILITY_ACTIVE_ON_DESKTOP_APP: 16384,
      CAPABILITY_PLAYING_INSTANT_GAME: 2097152,
      FANTAIL_SERVICE: "WebchatClient",
      SUBSCRIBE: "subscribe",
      UNSUBSCRIBE: "unsubscribe",
      FAKE_DFF: "fake_dff",
      THROTTLED: g + "throttled",
      JUMPSTART: g + "jumpstart",
      ENTITY_PRESENCE_ACTIVE_PING: "entity_presence/active_ping",
      ENTITY_PRESENCE_SKIPPED_PING: "entity_presence/skipped_ping",
      SUBSCRIPTION_STATE: {
        SUBSCRIBE: "s",
        MUTATE_CONTEXT: "m",
        UNSUBSCRIBE: "u",
      },
      DEFAULT_MAX_SUBSCRIPTIONS: 300,
      DEFAULT_EVICTION_BATCH_SIZE: 20,
      DEFAULT_MAX_SUBSCRIPTION_FLUSH_BATCH_SIZE: 300,
      DEFAULT_MAX_CONSECUTIVE_FLUSH_FAILURES: 3,
      getArbiterType: function (a) {
        return g + "message:" + a;
      },
      getRTISkywalkerArbiterType: function (a, b) {
        return g + "skywalker:" + a + ":" + b;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "AvailableListConstants",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ON_AVAILABILITY_CHANGED: "buddylist/availability-changed",
      ON_UPDATE_ERROR: "buddylist/update-error",
      ON_UPDATED: "buddylist/updated",
      ON_CHAT_NOTIFICATION_CHANGED: "chat-notification-changed",
      OFFLINE: 0,
      IDLE: 1,
      ACTIVE: 2,
      MOBILE: 3,
      WEB_STATUS: "webStatus",
      FB_APP_STATUS: "fbAppStatus",
      MESSENGER_STATUS: "messengerStatus",
      OTHER_STATUS: "otherStatus",
      STATUS_ACTIVE: "active",
      STATUS_IDLE: "idle",
      STATUS_OFFLINE: "offline",
    });
    f["default"] = a;
  },
  66
);
__d(
  "PresenceConfig",
  ["PresenceConfigInitialData"],
  function (a, b, c, d, e, f, g) {
    var h = babelHelpers["extends"]({}, c("PresenceConfigInitialData"));
    function a(a, b) {
      return a in h ? h[a] : b;
    }
    g.get = a;
  },
  98
);
__d(
  "XLynxAsyncCallbackControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/si/linkclick/ajax_callback/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "FBLynxLogging",
  ["AsyncRequest", "ODS", "XLynxAsyncCallbackControllerRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = c("XLynxAsyncCallbackControllerRouteBuilder").buildURL({});
      new (c("AsyncRequest"))(b)
        .setData({ lynx_uri: a })
        .setErrorHandler(function (a) {
          a = a.getError();
          d("ODS").bumpEntityKey(3861, "linkshim", "click_log.post.fail." + a);
        })
        .setTransportErrorHandler(function (a) {
          a = a.getError();
          d("ODS").bumpEntityKey(
            3861,
            "linkshim",
            "click_log.post.transport_fail." + a
          );
        })
        .send();
    }
    g.log = a;
  },
  98
);
__d(
  "FBLynxBase",
  ["$", "FBLynxLogging", "LinkshimHandlerConfig", "URI", "isLinkshimURI"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    function h(a) {
      if (!b("isLinkshimURI")(a)) return null;
      a = a.getQueryData().u;
      return !a ? null : a;
    }
    var i = {
      logAsyncClick: function (a) {
        i.swapLinkWithUnshimmedLink(a);
        a = a.getAttribute("data-lynx-uri");
        if (!a) return;
        b("FBLynxLogging").log(a);
      },
      originReferrerPolicyClick: function (a) {
        var c = b("$")("meta_referrer");
        c.content = b("LinkshimHandlerConfig").switched_meta_referrer_policy;
        i.logAsyncClick(a);
        setTimeout(function () {
          c.content = b("LinkshimHandlerConfig").default_meta_referrer_policy;
        }, 100);
      },
      swapLinkWithUnshimmedLink: function (a) {
        var c = a.href,
          d = h(new (g || (g = b("URI")))(c));
        if (!d) return;
        a.setAttribute("data-lynx-uri", c);
        a.href = d;
      },
      revertSwapIfLynxURIPresent: function (a) {
        var b = a.getAttribute("data-lynx-uri");
        if (!b) return;
        a.removeAttribute("data-lynx-uri");
        a.href = b;
      },
    };
    e.exports = i;
  },
  null
);
__d(
  "FBLynx",
  ["Base64", "Event", "FBLynxBase", "LinkshimHandlerConfig", "Parent", "URI"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = (g || (g = b("URI"))).goURIOnWindow,
      i = {
        alreadySetup: !1,
        setupDelegation: function (a) {
          a === void 0 && (a = !1);
          if (!document.documentElement) return;
          if (document.body == null) {
            if (a) return;
            window.setTimeout(function () {
              i.setupDelegation(!0);
            }, 100);
            return;
          }
          if (i.alreadySetup) return;
          i.alreadySetup = !0;
          var c = function (a) {
            var c = i.getMaybeLynxLink(a.target);
            if (!c) return;
            var d = c[0];
            c = c[1];
            var e = c,
              f = new (g || (g = b("URI")))(c.href),
              j;
            if (
              b("LinkshimHandlerConfig").ghl_param_link_shim &&
              d !== "hover" &&
              c.dataset &&
              c.dataset.attributes
            ) {
              j = b("Base64").decodeObject(c.dataset.attributes);
              if (j && j.open_link) {
                var k;
                for (k in j) k !== "open_link" && f.addQueryData(k, j[k]);
                k = c.cloneNode(!0);
                k.href = f.toString();
                e = k;
              }
            }
            switch (d) {
              case "async":
              case "asynclazy":
                b("FBLynxBase").logAsyncClick(e);
                break;
              case "origin":
                b("FBLynxBase").originReferrerPolicyClick(e);
                break;
              case "hover":
                i.hoverClick(e);
                break;
            }
            b("LinkshimHandlerConfig").ghl_param_link_shim &&
              d !== "hover" &&
              j &&
              j.open_link &&
              (a.preventDefault(), h(f, window.open("", e.target), !0));
          };
          b("Event").listen(document.body, "click", c);
          b("LinkshimHandlerConfig").middle_click_requires_event &&
            b("Event").listen(document.body, "mouseup", function (a) {
              a.button == 1 && c(a);
            });
          b("Event").listen(document.body, "mouseover", function (a) {
            a = i.getMaybeLynxLink(a.target);
            if (!a) return;
            var b = a[0];
            a = a[1];
            switch (b) {
              case "async":
              case "asynclazy":
              case "origin":
              case "hover":
                i.mouseover(a);
                break;
            }
          });
          b("Event").listen(document.body, "contextmenu", function (a) {
            a = i.getMaybeLynxLink(a.target);
            if (!a) return;
            var b = a[0];
            a = a[1];
            switch (b) {
              case "async":
              case "hover":
              case "origin":
                i.contextmenu(a);
                break;
              case "asynclazy":
                break;
            }
          });
        },
        getMaybeLynxLink: function (a) {
          a = b("Parent").byAttribute(a, "data-lynx-mode");
          if (a instanceof HTMLAnchorElement) {
            var c = a.getAttribute("data-lynx-mode");
            switch (c) {
              case "async":
              case "asynclazy":
              case "hover":
              case "origin":
                return [c, a];
              default:
                return null;
            }
          }
          return null;
        },
        hoverClick: function (a) {
          b("FBLynxBase").revertSwapIfLynxURIPresent(a);
        },
        mouseover: function (a) {
          b("FBLynxBase").swapLinkWithUnshimmedLink(a);
        },
        contextmenu: function (a) {
          b("FBLynxBase").revertSwapIfLynxURIPresent(a);
        },
      };
    e.exports = i;
  },
  null
);
__d(
  "FBIDCheck",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = /^[1-9]\d*$/;
    function a(a) {
      a = a;
      if (a == null || (typeof a === "string" && !g.test(a))) return !1;
      a = parseInt(a, 10);
      return !a
        ? !1
        : (a > 0 && a < 22e8) ||
            (a >= 1e14 && a <= 100099999989999) ||
            (a >= 89e12 && a <= 89999999999999) ||
            (a >= 6000001e7 && a <= 60000019999999);
    }
    f.isUser_deprecated = a;
  },
  66
);
__d(
  "FocusEvent",
  ["Event", "Run", "ge", "getOrCreateDOMID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
      i = !1;
    function j(a, b) {
      if (h[a]) {
        b = h[a].indexOf(b);
        b >= 0 && h[a].splice(b, 1);
        h[a].length === 0 && delete h[a];
      }
    }
    function k(a) {
      var b = a.getTarget();
      if (h[b.id] && h[b.id].length > 0) {
        var c = a.type === "focusin" || a.type === "focus";
        h[b.id].forEach(function (a) {
          a(c);
        });
      }
    }
    function l() {
      if (i) return;
      c("Event").listen(document.documentElement, "focusout", k);
      c("Event").listen(document.documentElement, "focusin", k);
      i = !0;
    }
    function a(a, b, e) {
      l();
      var f = c("getOrCreateDOMID")(a);
      h[f] || (h[f] = []);
      h[f].push(b);
      var g = !1;
      function i() {
        g || (j(f, b), k && (k.remove(), (k = null)), (g = !0));
      }
      var k =
        (e == null ? void 0 : e.runtime_site_is_comet) !== !0
          ? d("Run").onLeave(function () {
              c("ge")(f) || i();
            })
          : null;
      return {
        remove: function () {
          i();
        },
      };
    }
    g.listen = a;
  },
  98
);
__d(
  "isStringNullOrEmpty",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a == null || a === "";
    }
    f["default"] = a;
  },
  66
);
__d(
  "tooltipPropsFor",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      if (!a) return {};
      a = { "data-tooltip-content": a, "data-hover": "tooltip" };
      b && (a["data-tooltip-position"] = b);
      c && (a["data-tooltip-alignh"] = c);
      return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "TooltipData",
  [
    "DOM",
    "DataStore",
    "FBLogger",
    "URI",
    "getElementText",
    "ifRequired",
    "isStringNullOrEmpty",
    "isTextNode",
    "killswitch",
    "tooltipPropsFor",
  ],
  function (a, b, c, d, e, f) {
    var g;
    function h(a) {
      var c = a.getAttribute("data-tooltip-delay");
      c = c ? parseInt(c, 10) || 1e3 : 0;
      if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT"))
        return babelHelpers["extends"](
          {
            className: a.getAttribute("data-tooltip-root-class"),
            content: a.getAttribute("data-tooltip-content"),
            delay: c,
            position: a.getAttribute("data-tooltip-position") || "above",
            alignH: a.getAttribute("data-tooltip-alignh") || "left",
            offsetY: a.getAttribute("data-tooltip-offsety") || 0,
            suppress: !1,
            overflowDisplay:
              a.getAttribute("data-tooltip-display") === "overflow",
            persistOnClick: a.getAttribute("data-pitloot-persistonclick"),
            textDirection: a.getAttribute("data-tooltip-text-direction"),
          },
          b("DataStore").get(a, "tooltip")
        );
      else {
        var d;
        d = (d = b("DataStore").get(a, "tooltip")) != null ? d : {};
        var e = d.content;
        d = babelHelpers.objectWithoutPropertiesLoose(d, ["content"]);
        var f = a.getAttribute("data-tooltip-content");
        !b("isStringNullOrEmpty")(e) &&
          !b("isStringNullOrEmpty")(f) &&
          b("FBLogger")("tooltip").warn(
            'Getting DataStore tooltip content on an element that has both a "data-tooltip-content" attribute value (set to %s) and a value coming from the DataStore',
            a.getAttribute("data-tooltip-content")
          );
        return babelHelpers["extends"](
          {
            className: a.getAttribute("data-tooltip-root-class"),
            delay: c,
            position: a.getAttribute("data-tooltip-position") || "above",
            alignH: a.getAttribute("data-tooltip-alignh") || "left",
            offsetY: a.getAttribute("data-tooltip-offsety") || 0,
            suppress: !1,
            overflowDisplay:
              a.getAttribute("data-tooltip-display") === "overflow",
            persistOnClick: a.getAttribute("data-pitloot-persistonclick"),
            textDirection: a.getAttribute("data-tooltip-text-direction"),
            content: (a = (c = f) != null ? c : e) != null ? a : null,
          },
          d
        );
      }
    }
    function i(a, c) {
      var d = h(a);
      if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT"))
        b("DataStore").set(a, "tooltip", {
          content: c.content || d.content,
          position: c.position || d.position,
          alignH: c.alignH || d.alignH,
          suppress: c.suppress !== void 0 ? c.suppress : d.suppress,
          overflowDisplay: c.overflowDisplay || d.overflowDisplay,
          persistOnClick: c.persistOnClick || d.persistOnClick,
        });
      else {
        !b("isStringNullOrEmpty")(c.content) &&
          !b("isStringNullOrEmpty")(a.getAttribute("data-tooltip-content")) &&
          b("FBLogger")("tooltip").warn(
            'Setting DataStore tooltip content on an element that already has the "data-tooltip-content" attribute (set to %s) is invalid',
            a.getAttribute("data-tooltip-content")
          );
        b("DataStore").set(a, "tooltip", {
          content:
            c.content ||
            ((a = b("DataStore").get(a, "tooltip")) != null ? a : {}).content,
          position: c.position || d.position,
          alignH: c.alignH || d.alignH,
          suppress: c.suppress !== void 0 ? c.suppress : d.suppress,
          overflowDisplay: c.overflowDisplay || d.overflowDisplay,
          persistOnClick: c.persistOnClick || d.persistOnClick,
        });
      }
    }
    function j(a, b) {
      i(a, b), a.setAttribute("data-hover", "tooltip");
    }
    function k(a, b) {}
    var l = {
      remove: function (a, c) {
        c = c === void 0 ? {} : c;
        c = c.onlyCleanupDataStore;
        c = c === void 0 ? !1 : c;
        b("DataStore").remove(a, "tooltip");
        c ||
          (a.removeAttribute("data-hover"),
          a.removeAttribute("data-tooltip-position"),
          a.removeAttribute("data-tooltip-alignh"),
          b("ifRequired")("Tooltip", function (b) {
            b.isActive(a) && b.hide();
          }));
      },
      set: function (a, c, d, e) {
        k(a, c);
        if (c instanceof (g || (g = b("URI"))))
          a.setAttribute("data-tooltip-uri", c),
            b("ifRequired")("Tooltip", function (b) {
              b.isActive(a) && b.fetchIfNecessary(a);
            });
        else if (
          b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")
        ) {
          var f = l._store({ context: a, content: c, position: d, alignH: e });
          typeof f.content !== "string"
            ? a.setAttribute(
                "data-tooltip-content",
                b("getElementText")(f.content)
              )
            : a.setAttribute("data-tooltip-content", f.content);
          l.refreshIfActive(a);
        } else
          a.removeAttribute("data-tooltip-content"),
            l._store({ context: a, content: c, position: d, alignH: e }),
            l.refreshIfActive(a);
      },
      refreshIfActive: function (a) {
        b("ifRequired")("Tooltip", function (b) {
          b.isActive(a) && b.show(a);
        });
      },
      _store: function (a) {
        var c = a.context,
          d = a.content,
          e = a.position;
        a = a.alignH;
        k(c, d);
        b("isTextNode")(d) && (d = b("getElementText")(d));
        var f = !1;
        typeof d !== "string"
          ? (d = b("DOM").create("div", {}, d))
          : (f = d === "");
        a = { alignH: a, content: d, position: e, suppress: f };
        j(c, a);
        return a;
      },
      propsFor: b("tooltipPropsFor"),
      enableDisplayOnOverflow: function (a) {
        a.removeAttribute("data-tooltip-display"),
          j(a, { overflowDisplay: !0 });
      },
      enablePersistOnClick: function (a) {
        a.removeAttribute("data-pitloot-persistOnClick"),
          j(a, { persistOnClick: !0 });
      },
      suppress: function (a, b) {
        i(a, { suppress: b });
      },
      _get: h,
    };
    e.exports = l;
  },
  null
);
__d(
  "Focus",
  [
    "cx",
    "CSS",
    "Event",
    "FocusEvent",
    "KeyStatus",
    "TooltipData",
    "ifRequired",
  ],
  function (a, b, c, d, e, f, g, h) {
    function a(a, b) {
      b === void 0 && (b = !1);
      if (a) {
        var e = c("ifRequired")(
          "VirtualCursorStatus",
          function (a) {
            return a.isVirtualCursorTriggered();
          },
          function () {
            return !1;
          }
        );
        b || d("KeyStatus").isKeyDown() || e ? k(a) : i(a);
      }
    }
    function i(a) {
      if (a) {
        d("CSS").addClass(a, "_5f0v");
        var b = c("Event").listen(a, "blur", function () {
          a && d("CSS").removeClass(a, "_5f0v"), b.remove();
        });
        d("TooltipData").suppress(a, !0);
        k(a);
        d("TooltipData").suppress(a, !1);
      }
    }
    function b(a, b) {
      d("CSS").addClass(a, "_5f0v");
      return d("FocusEvent").listen(a, function () {
        for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
          d[e] = arguments[e];
        return j.apply(void 0, [a, b].concat(d));
      });
    }
    function j(a, b, e) {
      d("CSS").addClass(a, "_5f0v");
      a = c("ifRequired")(
        "FocusRing",
        function (a) {
          return a.usingKeyboardNavigation();
        },
        function () {
          return !0;
        }
      );
      e = e && a;
      d("CSS").conditionClass(b, "_3oxt", e);
      d("CSS").conditionClass(b, "_16jm", e);
    }
    function k(a) {
      try {
        (a.tabIndex = a.tabIndex), a.focus();
      } catch (a) {}
    }
    g.set = a;
    g.setWithoutOutline = i;
    g.relocate = b;
    g.performRelocation = j;
  },
  98
);
__d(
  "debounceAcrossTransitions",
  ["debounce"],
  function (a, b, c, d, e, f, g) {
    function a(a, b, d) {
      return c("debounce")(a, b, d, !0);
    }
    g["default"] = a;
  },
  98
);
__d(
  "isEmail",
  [],
  function (a, b, c, d, e, f) {
    var g =
      /^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;
    function a(a) {
      return g.test(a);
    }
    f["default"] = a;
  },
  66
);
__d(
  "flatMapArray",
  [],
  function (a, b, c, d, e, f) {
    var g = Array.prototype.push;
    function a(a, b) {
      var c = [];
      for (var d = 0; d < a.length; d++) {
        var e = b.call(a, a[d], d);
        if (Array.isArray(e)) g.apply(c, e);
        else if (e != null)
          throw new TypeError(
            'flatMapArray: Callback must return an array or null, received "' +
              e.toString() +
              '" instead'
          );
      }
      return c;
    }
    f["default"] = a;
  },
  66
);
__d(
  "groupArray",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      var c = {};
      a.forEach(function (d, e) {
        e = b(d, e, a);
        c[e] || (c[e] = []);
        c[e].push(d);
      });
      return c;
    }
    f["default"] = a;
  },
  66
);
__d(
  "objectKeys",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      return Object.keys(a);
    }
    e.exports = a;
  },
  null
);
__d(
  "blueGHLContentDisplayCheck",
  ["GHLTestElement"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return d("GHLTestElement").testElementI(a, "blueGHLContentDisplayCheck");
    }
    g["default"] = a;
  },
  98
);
__d(
  "getHashtagRegex",
  ["getHashtagRegexString"],
  function (a, b, c, d, e, f) {
    function a() {
      return new RegExp(b("getHashtagRegexString")(), "ig");
    }
    f["default"] = a;
  },
  66
);
__d(
  "ImmutableRecordWithV4Types",
  ["immutable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g.Record = c("immutable").Record;
  },
  98
);
__d(
  "CometStoryAttachmentsFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743395");
    c = b("FalcoLoggerInternal").create("comet_story_attachments", a);
    e.exports = c;
  },
  null
);
__d(
  "XCometWorkPDFViewerControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/work/file_viewer/{file_id}/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "PlatformWindowDialogCloser",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      window.close();
    }
    f.close = a;
  },
  66
);
__d(
  "randomShuffle",
  ["randomInt"],
  function (a, b, c, d, e, f, g) {
    function a(a, b, d) {
      b === void 0 && (b = 0);
      d === void 0 && (d = 0);
      if (b > a.length - 1 - d) return a;
      for (d = a.length - 1 - d; d > b; d--) {
        var e = c("randomInt")(d + 1);
        if (e !== d) {
          var f = a[e];
          a[e] = a[d];
          a[d] = f;
        }
      }
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "PluginOptinResurrectCookie",
  ["EventListener", "goURI"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = !1;
      c("EventListener").listen(document, "click", function () {
        b || ((b = !0), c("goURI")(a));
      });
    }
    g.init = a;
  },
  98
);
__d(
  "normalizeDeltaYaw",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      b = b ? Math.PI : 180;
      var c = 2 * b;
      if (Math.abs(a) > c) {
        var d = Math.trunc(Math.abs(a) / c);
        a -= Math.sign(a) * d * c;
      }
      Math.abs(a) > b && (a -= Math.sign(a) * 2 * b);
      return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "castToEnum",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      var d = Object.keys(b);
      for (var e = 0; e < d.length; e++) if (b[d[e]] === a) return b[d[e]];
      return c;
    }
    f["default"] = a;
  },
  66
);
__d(
  "VideoPlayerLoggerFallbackReasons",
  [],
  function (a, b, c, d, e, f) {
    a = "timeout";
    b = "flash_error";
    c = "flash_unavailable";
    f.TIMEOUT = a;
    f.FLASH_ERROR = b;
    f.FLASH_UNAVAILABLE = c;
  },
  66
);
__d(
  "XBasicFBNuxDismissController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/ajax/megaphone/dismiss_fbnux/", {
      nux_id: { type: "Int", required: !0 },
    });
  },
  null
);
__d(
  "XBasicFBNuxViewController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/ajax/megaphone/view_fbnux/", {
      nux_id: { type: "Int", required: !0 },
    });
  },
  null
);
__d(
  "useCurrentRouteBuilder",
  [
    "CometRouteParams",
    "ConstUriUtils",
    "jsRouteBuilder",
    "react",
    "useCurrentRoute",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a(a) {
      var b,
        e = d("CometRouteParams").useRouteParams();
      b = (b = c("useCurrentRoute")()) != null ? b : {};
      var f = b.routePath;
      b = b.url;
      b =
        b != null
          ? (b = d("ConstUriUtils").getUri(b)) == null
            ? void 0
            : b.getPath()
          : null;
      var g = (a == null ? void 0 : a.useUrlPath) === !0 ? b : f;
      return h(
        function () {
          return g == null
            ? null
            : c("jsRouteBuilder")(g, Object.freeze({}), new Set(), e);
        },
        [g, e]
      );
    }
    g["default"] = a;
  },
  98
);
