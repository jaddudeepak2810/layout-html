/*FB_PKG_DELIM*/

__d(
  "ChatPluginMobileCufee.react",
  [
    "cx",
    "fbt",
    "ClickableArea.react",
    "JSResource",
    "LiveChatPluginFbts",
    "MPNConstants",
    "MessagingPluginContext",
    "MessengerSpinner.react",
    "TetraText.react",
    "lazyLoadComponent",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useContext,
      l = c("lazyLoadComponent")(
        c("JSResource")("ChatPluginCufeeModal.react").__setRef(
          "ChatPluginMobileCufee.react"
        )
      );
    function a(a) {
      var b = a.pageName,
        e = a.feedbackQuestion,
        g = a.businessPrivacy,
        h = a.formState;
      a = a.formID;
      var n = k(c("MessagingPluginContext")),
        o = n.dispatchAction;
      n = n.state;
      n =
        n.optimisticStorageState.showCufeeModal ===
        d("MPNConstants").MPNVisibility.NOT_HIDDEN;
      return j.jsxs("div", {
        children: [
          j.jsx("div", {
            role: "none",
            className: n ? "_92bp" : "_9wh-",
            onClick: p,
          }),
          j.jsx("div", {
            className: n ? "_908c" : "_9jhn",
            role: "none",
            children: j.jsxs("div", {
              className: "_9wjx",
              children: [
                j.jsx("div", { className: "_9xpf" }),
                j.jsx(q, {}),
                h === "DEFAULT"
                  ? j.jsx(j.Suspense, {
                      fallback: j.jsx("div", {
                        style: { margin: "auto" },
                        children: j.jsx(c("MessengerSpinner.react"), {
                          color: "blue",
                          size: c("MessengerSpinner.react").large_size,
                        }),
                      }),
                      children: j.jsx(l, {
                        pageName: b,
                        feedbackQuestion: e,
                        businessPrivacy: g,
                        formID: a,
                        onCloseModalClick: p,
                      }),
                    })
                  : j.jsx(m, {}),
                j.jsx("div", { className: "_9xpg" }),
              ],
            }),
          }),
        ],
      });
      function p() {
        o({
          type: "SHOW_CUFEE_MODAL",
          showCufeeModal: d("MPNConstants").MPNVisibility.HIDDEN,
        });
      }
      function q() {
        return j.jsx(c("ClickableArea.react"), {
          onClick: p,
          children: j.jsx("div", {
            style: { marginBottom: 11, marginTop: 11 },
            children: j.jsx(c("TetraText.react"), {
              type: "body2",
              children: i._("Cancel"),
            }),
          }),
        });
      }
      q.displayName = q.name + " [from " + f.id + "]";
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function m() {
      return j.jsx("div", {
        className: "_9who _9wjy",
        children: d("LiveChatPluginFbts").CUFEE_EXPIRED_FORM,
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "XChatPluginReEngagementAppSwitchController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create(
      "/plugins/customer_chat/re_engagement_app_switch/",
      { page_id: { type: "Int", required: !0 }, ref: { type: "String" } }
    );
  },
  null
);
__d(
  "MPNMobileWelcomePageBottomButtons.react",
  [
    "cx",
    "fbt",
    "Arbiter",
    "AsyncRequest",
    "LineClamp.react",
    "LiveChatPluginConstants",
    "LiveChatPluginFbts",
    "LiveChatPluginLoggerUtil",
    "MPNConstants",
    "MPNIdentity",
    "MPNLocalState",
    "MPNMessengerIconSVG.react",
    "MPNNavigation",
    "MPNStorage",
    "MPNXDMessageManager",
    "MessagingPluginContext",
    "MessagingPluginThreadActions",
    "PopupWindow",
    "ShimButton.react",
    "XChatPluginIncognitoLoginPopupController",
    "XChatPluginReEngagementAppSwitchController",
    "cr:878",
    "gkx",
    "performanceAbsoluteNow",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e() {
        var e, f;
        for (var g = arguments.length, h = new Array(g), i = 0; i < g; i++)
          h[i] = arguments[i];
        return (
          ((e = f = a.call.apply(a, [this].concat(h)) || this),
          (f.$3 = function () {
            var a = f.context,
              b = a.state;
            a = a.dispatchAction;
            var e = b.pageID,
              g = b.isSanitizedEpd3pdRequest;
            a({
              type: "UPDATE_CONTINUE_CLICK_TIME",
              continueClickTime: c("performanceAbsoluteNow")(),
            });
            d("MPNIdentity").MPNIdentity.performUIAction(
              function () {
                if (g) {
                  c("MPNXDMessageManager").reloadPlugin(!0);
                  return;
                }
                d("MPNNavigation").navigateToRoute(
                  f.context,
                  f.props.history,
                  d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW
                );
              },
              function () {
                d("MPNIdentity").MPNIdentity.clearUserChangesSubscription(),
                  c("MPNStorage").setPath(
                    d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW
                  ),
                  c("MPNXDMessageManager").reloadPlugin();
              },
              function () {
                c("MPNStorage").clearThirdPartyStorageState(),
                  c("MPNXDMessageManager").reloadPlugin();
              }
            );
            d("LiveChatPluginLoggerUtil").logActionFromNewUI(
              "tab_click",
              null,
              e,
              "itp_page",
              { button_name: "continue" }
            );
          }),
          (f.$4 = function () {
            var a,
              b = f.context.state.pageID;
            (a = f.props.ActionDelegate) == null ? void 0 : a.minimize();
            d("MPNNavigation").navigateToRoute(
              f.context,
              f.props.history,
              d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE,
              !1
            );
            d("MPNNavigation").dismissReEngagementDialog(f.context);
            d("LiveChatPluginLoggerUtil").logActionFromNewUI(
              "tab_click",
              null,
              b,
              "re_engagement_expanded_view",
              { button_name: "re_engagement_not_now" }
            );
          }),
          (f.$6 = function () {
            var a = f.context.state,
              b = a.shouldShowMobileInWebChat,
              e = a.mobileOptin,
              g = a.pageID;
            a = a.refParam;
            if (!b || e === "app_switch")
              if (f.props.isReEngagementDialog) {
                d(
                  "MessagingPluginThreadActions"
                ).reEngagementOptInStateUpdateWithAppSwitch(
                  f.context,
                  f.props.history
                );
                b = c("XChatPluginReEngagementAppSwitchController")
                  .getURIBuilder()
                  .setInt("page_id", g)
                  .setString("ref", a)
                  .getURI();
                new (c("AsyncRequest"))().setURI(b).send();
                c("Arbiter").subscribeOnce(
                  d("LiveChatPluginConstants").START_RE_ENGAGEMENT,
                  function (a, b) {
                    d("MessagingPluginThreadActions").appSwitch(b);
                  }
                );
              } else {
                (e = f.props.ActionDelegate) == null
                  ? void 0
                  : e.onAppSwitchToMessenger();
              }
            else f.props.isReEngagementDialog ? f.$8() : f.$9();
          }),
          (f.$5 = function () {
            var a = f.context,
              e = a.state;
            a = a.dispatchAction;
            e = e.pageID;
            a({
              type: "UPDATE_CONTINUE_CLICK_TIME",
              continueClickTime: c("performanceAbsoluteNow")(),
            });
            b("cr:878") == null
              ? void 0
              : b("cr:878").logChatPluginThreadLoadModuleStart();
            d("MPNIdentity").MPNIdentity.performUIAction(
              f.$10,
              function () {
                var a = c("MPNStorage").getFBStorageState();
                a == null
                  ? (a = {
                      requestID: c("MPNStorage").requestID,
                      currentPath:
                        d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW,
                      userID: "0",
                      chatState:
                        d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED,
                      visibility: d("MPNConstants").MPNVisibility.NOT_HIDDEN,
                      showUpgradePrompt:
                        d("MPNConstants").MPNUpgradePrompt.NOT_SHOWN,
                      accessToken: null,
                      expirationTimestamp: null,
                      rdr: d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION,
                    })
                  : (a = babelHelpers["extends"]({}, a, {
                      chatState:
                        d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED,
                      rdr: d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION,
                    }));
                c("MPNStorage").setFBStorageState(a);
                c("MPNXDMessageManager").reloadPlugin();
              },
              function () {
                f.$10();
              }
            );
            d("LiveChatPluginLoggerUtil").logActionFromNewUI(
              "tab_click",
              null,
              e,
              "welcome_page_with_guest_option",
              { button_name: "continue_as_guest" }
            );
          }),
          (f.$10 = function () {
            var a = f.context.state.isSanitizedEpd3pdRequest;
            if (a) {
              a = c("MPNStorage").getFBStorageState();
              a != null &&
                c("MPNStorage").setFBStorageState(
                  babelHelpers["extends"]({}, a, {
                    rdr: d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION,
                  })
                );
              c("MPNXDMessageManager").reloadPlugin(!0);
            } else
              d("MPNNavigation").navigateToRoute(
                f.context,
                f.props.history,
                d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW
              ),
                f.props.ActionDelegate &&
                  f.props.ActionDelegate.onContinueAsGuest(function () {});
          }),
          e) || babelHelpers.assertThisInitialized(f)
        );
      }
      var f = e.prototype;
      f.render = function () {
        var a = this.context.state.hasGuestMode;
        return this.props.useITPContinueButton ? this.$1() : this.$2(a);
      };
      f.$1 = function () {
        var a = this.context.state.threadCSSColor;
        return j.jsx("div", {
          className: "_a2zl",
          children: j.jsx(c("ShimButton.react"), {
            onClick: this.$3,
            className: "_a2zm",
            style: { backgroundColor: a },
            children: j.jsx(c("LineClamp.react"), {
              className: "continueText",
              lines: 1,
              children: i._("Continue"),
            }),
          }),
        });
      };
      f.$2 = function (a) {
        var b = this.context.state.threadCSSColor,
          e = c("gkx")("1189683");
        e = !a && !e;
        var f = this.props.isReEngagementDialog;
        a = a
          ? j.jsx(c("ShimButton.react"), {
              "data-testid": void 0,
              onClick: this.$5,
              className: "_a2zk",
              children: j.jsx(c("LineClamp.react"), {
                lines: 1,
                children: i._("Continue as guest"),
              }),
            })
          : null;
        var g = j.jsx(c("ShimButton.react"), {
          onClick: this.$4,
          className: "_a2zk",
          children: j.jsx(c("LineClamp.react"), {
            lines: 1,
            children: d("LiveChatPluginFbts").NOT_NOW_BUTTON_TEXT,
          }),
        });
        return j.jsxs("div", {
          className: (e ? "" : "_a2zl") + (e ? " _a2zn" : ""),
          children: [
            j.jsxs(c("ShimButton.react"), {
              onClick: this.$6,
              className: "_a2zm",
              style: { backgroundColor: b },
              children: [
                f
                  ? null
                  : j.jsx("div", {
                      className: "loggedInIconContainer",
                      children: j.jsx(c("MPNMessengerIconSVG.react"), {}),
                    }),
                j.jsx(c("LineClamp.react"), {
                  className: "continueText",
                  lines: 1,
                  children: this.$7(),
                }),
              ],
            }),
            this.props.isReEngagementDialog ? g : a,
          ],
        });
      };
      f.$7 = function () {
        var a,
          b =
            d("MPNIdentity").MPNIdentity.currentUserState() ==
            d("MPNIdentity").MPNIdentityState.FB;
        a =
          (a = d("MPNIdentity").MPNIdentity.currentUser()) == null
            ? void 0
            : a.shortName;
        var c = this.context.state,
          e = c.shouldShowMobileInWebChat;
        c = c.mobileOptin;
        if (this.props.isReEngagementDialog)
          return d("LiveChatPluginFbts").GET_MESSAGES_BUTTON_TEXT;
        if (!e || c === "app_switch") return i._("Chat in Messenger");
        if (!b)
          return d("LiveChatPluginFbts").LOGIN_PAGE_USE_MESSENGER_BUTTON_TEXT;
        return a !== null
          ? i._("Continue as {first name}", [i._param("first name", a)])
          : i._("Continue");
      };
      f.$9 = function () {
        var a = this,
          b = this.context,
          e = b.state;
        b = b.dispatchAction;
        var f = e.pageID,
          g = e.hasGuestMode,
          h = e.pagePassesSentryTest,
          i = e.hasMessagingPermission,
          j = e.isSanitizedEpd3pdRequest,
          k = e.shouldShowMobileInWebChat,
          l = e.mobileOptin,
          m = e.shouldBypassPageSentryTest;
        e = e.shouldUseAccessTokenAuth;
        var n = d("MPNIdentity").MPNIdentity.currentUserState(),
          o = d("MPNIdentity").MPNIdentity.currentUserID();
        b({
          type: "UPDATE_CONTINUE_CLICK_TIME",
          continueClickTime: c("performanceAbsoluteNow")(),
        });
        if (n == d("MPNIdentity").MPNIdentityState.FB && o != null) {
          if (!m && !h && !i) {
            (b = this.props.ActionDelegate) == null
              ? void 0
              : b.openThreadWithInterstitial(function () {
                  var b;
                  (b = a.props.ActionDelegate) == null
                    ? void 0
                    : b.openThreadWithCurrentFBUser();
                  d("MPNNavigation").navigateToRoute(
                    a.context,
                    a.props.history,
                    d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW
                  );
                });
            d("LiveChatPluginLoggerUtil").logActionFromNewUI(
              "tab_click",
              null,
              f,
              g ? "welcome_page_with_guest_option" : "welcome_page",
              { button_name: "continue_as" }
            );
            return;
          }
          d("MPNNavigation").navigateToRoute(
            this.context,
            this.props.history,
            d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW
          );
          d("MessagingPluginThreadActions").openThreadWithCurrentFBUser(
            this.context,
            !1
          );
          d("LiveChatPluginLoggerUtil").logActionFromNewUI(
            "tab_click",
            null,
            f,
            g ? "welcome_page_with_guest_option" : "welcome_page",
            { button_name: "continue_as" }
          );
          return;
        }
        e
          ? d("MessagingPluginThreadActions").presentPluginOptIn(this.context)
          : d("MPNIdentity").MPNIdentity.performUIAction(
              function () {
                if (d("MPNIdentity").MPNIdentity.cookieUserUncached() != "0") {
                  if (j) {
                    c("MPNXDMessageManager").reloadPlugin(!0);
                    return;
                  }
                  return;
                }
                d("MPNIdentity").MPNIdentity.subscribeLoggedInUserChanges(
                  function (a, b) {
                    a = c("MPNStorage").getFBStorageState();
                    if (a != null) {
                      c("MPNStorage").setFBStorageState(
                        babelHelpers["extends"]({}, a, {
                          chatState:
                            d("MPNLocalState").MPNChatState
                              .LOGGED_IN_CHAT_STARTED,
                          rdr: d("MPNConstants").MPNRedirect.FB_LOG_IN,
                        })
                      );
                      b = {
                        path: d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW,
                        chatState:
                          d("MPNLocalState").MPNChatState
                            .LOGGED_IN_CHAT_STARTED,
                        visibility: d("MPNConstants").MPNVisibility.NOT_HIDDEN,
                      };
                      c("MPNStorage").setThirdPartyStorageState(b);
                    }
                  },
                  d("LiveChatPluginConstants").LOGIN_CHECK_INTERVAL
                );
                d("MessagingPluginThreadActions").presentPluginOptIn(a.context);
              },
              function () {
                if (d("MPNIdentity").MPNIdentity.cookieUserUncached() != "0") {
                  c("MPNXDMessageManager").reloadPlugin(!0);
                  return;
                }
                d("MPNIdentity").MPNIdentity.subscribeLoggedInUserChanges(
                  function (a, b) {
                    a = c("MPNStorage").getFBStorageState();
                    a != null &&
                      c("MPNStorage").setFBStorageState(
                        babelHelpers["extends"]({}, a, {
                          chatState:
                            d("MPNLocalState").MPNChatState
                              .LOGGED_IN_CHAT_STARTED,
                          rdr: d("MPNConstants").MPNRedirect.FB_LOG_IN,
                        })
                      );
                  },
                  d("LiveChatPluginConstants").LOGIN_CHECK_INTERVAL
                );
                d("MessagingPluginThreadActions").presentPluginOptIn(a.context);
              },
              function () {
                var a = c("XChatPluginIncognitoLoginPopupController")
                  .getURIBuilder()
                  .setBool("is_from_re_engagement", !1)
                  .getURI();
                d("PopupWindow").open(a.toString(), 420, 450);
              },
              k && l === "chat_tab"
            );
        d("LiveChatPluginLoggerUtil").logActionFromNewUI(
          "tab_click",
          null,
          f,
          g ? "welcome_page_with_guest_option" : "welcome_page",
          { button_name: "log_in_messenger" }
        );
      };
      f.$8 = function () {
        var a = this,
          b = this.context.state,
          e = b.shouldShowMobileInWebChat,
          f = b.mobileOptin;
        b = b.pageID;
        e = !e || f === "app_switch";
        d("MPNIdentity").MPNIdentity.performUIAction(
          function () {
            d("MessagingPluginThreadActions").reEngagementOptIn(a.context);
          },
          function () {
            d("MessagingPluginThreadActions").reEngagementOptIn(a.context);
          },
          function () {
            var a = c("XChatPluginIncognitoLoginPopupController")
              .getURIBuilder()
              .setBool("is_from_re_engagement", !0)
              .getURI();
            d("PopupWindow").open(a.toString(), 420, 450);
          },
          e
        );
        d("LiveChatPluginLoggerUtil").logActionFromNewUI(
          "tab_click",
          null,
          b,
          "re_engagement_expanded_view",
          { button_name: "re_engagement_get_messages" }
        );
      };
      return e;
    })(j.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "ChatPluginMobileReEngagementExpandedDialog.react",
  [
    "cx",
    "fbt",
    "ChatPluginMessengerAttribution.react",
    "ChatPluginSetupFlowE2ETestUtils",
    "Image.react",
    "LineClamp.react",
    "LiveChatPluginLoggerUtil",
    "MPNConstants",
    "MPNHeaderActionButton.react",
    "MPNLocalState",
    "MPNMinusButtonSVG.react",
    "MPNMobileWelcomePageBottomButtons.react",
    "MPNNavigation",
    "MPNPrivacyText.react",
    "MPNXDMessageManager",
    "MessagingPluginContext",
    "MessagingPluginPathUtils",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, e;
        for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++)
          g[h] = arguments[h];
        return (
          ((b = e = a.call.apply(a, [this].concat(g)) || this),
          (e.$1 = function () {
            var a = e.context.state,
              b = a.alignment,
              f = a.bottomSpacing,
              g = a.entryPointLabel,
              h = a.entryPointSize,
              i = a.optimisticStorageState,
              j = a.sideSpacing;
            a = a.pageID;
            e.props.isPreview
              ? e.props.ActionDelegate && e.props.ActionDelegate.minimize()
              : (d("MPNNavigation").navigateToRoute(
                  e.context,
                  e.props.history,
                  d("MPNLocalState").MPNLocalStatePath
                    .REENGAGEMENT_COLLAPSED_VIEW
                ),
                c("MPNXDMessageManager").setupMobileIframeForPath(
                  d("MessagingPluginPathUtils").MPN_PATH.REENGAGEMENT_COLLAPSED,
                  i.visibility === d("MPNConstants").MPNVisibility.NOT_HIDDEN,
                  h,
                  null,
                  b,
                  null,
                  f,
                  g,
                  j
                ),
                d("LiveChatPluginLoggerUtil").logActionFromNewUI(
                  "tab_click",
                  null,
                  a,
                  "re_engagement_expanded_view",
                  { button_name: "re_engagement_expanded_view_minus_button" }
                ));
          }),
          b) || babelHelpers.assertThisInitialized(e)
        );
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        var a = this.context.state,
          b = a.optimisticStorageState,
          e = a.entryPointSize,
          f = a.pageID,
          g = a.pluginMountTime;
        a = a.shouldUseAccessTokenAuth;
        c("MPNXDMessageManager").setupMobileIframeForPath(
          d("MessagingPluginPathUtils").MPN_PATH.REENGAGEMENT_EXPANDED,
          b.visibility === d("MPNConstants").MPNVisibility.NOT_HIDDEN,
          e
        );
        d("LiveChatPluginLoggerUtil").logImpressionUsingXController_SafeFor3PD(
          a,
          f,
          "re_engagement_expanded_view",
          g
        );
      };
      e.render = function () {
        var a = this.context.state,
          b = a.pageProfilePictureUri,
          d = a.expandedOptInMessageText;
        a = a.expandedOptInMessageTitle;
        return j.jsx("div", {
          className: "_908c",
          children: j.jsxs("div", {
            "data-testid": void 0,
            className: "_a9b_",
            children: [
              j.jsx("div", {
                children: j.jsxs("div", {
                  className: "_a9c0",
                  children: [
                    j.jsx("div", {
                      children: j.jsx(c("Image.react"), {
                        className: "_a9c1",
                        src: b,
                      }),
                    }),
                    j.jsx("div", { className: "_9dxh" }),
                    j.jsx("div", {
                      className: "_9dzn",
                      children: j.jsx("div", {
                        className: "_9l4n",
                        "data-testid": void 0,
                        children: j.jsx(c("MPNHeaderActionButton.react"), {
                          label: i._("close"),
                          onPress: this.$1,
                          children: j.jsx(c("MPNMinusButtonSVG.react"), {}),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              j.jsx("div", {
                className: "_a9c2",
                children: j.jsx(c("LineClamp.react"), {
                  lines: 1,
                  children: a,
                }),
              }),
              j.jsx("div", {
                className: "_a9c3",
                children: j.jsx(c("LineClamp.react"), {
                  lines: 3,
                  children: d,
                }),
              }),
              j.jsx(
                c("MPNMobileWelcomePageBottomButtons.react"),
                babelHelpers["extends"]({}, this.props, {
                  useITPContinueButton: !1,
                  shouldShowEntryPointCustomizationFromSetupFlow: !0,
                  isReEngagementDialog: !0,
                })
              ),
              j.jsx("div", {
                className: "_a9c4",
                children: j.jsx(c("MPNPrivacyText.react"), {
                  useITPContinueButton: !1,
                  isShownInReEngagementDialog: !0,
                }),
              }),
              j.jsx(c("ChatPluginMessengerAttribution.react"), {
                shouldShowEntryPointCustomization: !0,
              }),
            ],
          }),
        });
      };
      return b;
    })(j.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNMobileBadgeableMessengerIcon.react",
  [
    "ChatPluginEntryPoint.react",
    "LiveChatPluginMessengerIconSVGWithColor.react",
    "MessagingPluginContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        return h.jsx("div", {
          children: this.props.shouldShowEntryPointCustomization
            ? h.jsx(c("ChatPluginEntryPoint.react"), {
                entryPointIcon: this.props.entryPointIcon,
                entryPointLabel: this.props.entryPointLabel,
                entryPointSize: this.props.entryPointSize,
                threadColor: this.props.threadColor,
                alignment: this.props.alignment,
                isSocialPluginDomain: this.props.shouldUseNewDomain,
              })
            : h.jsx(c("LiveChatPluginMessengerIconSVGWithColor.react"), {
                threadColor: this.props.threadColor,
                entryPointSize: this.props.entryPointSize,
              }),
        });
      };
      return b;
    })(h.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNMobileBotMenuDialog.react",
  [
    "cx",
    "ChatPluginTestId",
    "LiveChatPluginLoggerUtil",
    "MPNDropdownMenu",
    "MPNDropdownMenuAlignment",
    "MPNDropdownMenuItem",
    "MPNIdentity",
    "MercuryIDs",
    "MessagingPluginContext",
    "URI",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c) {
        b = a.call(this, b, c) || this;
        b.state = { navigationPath: [] };
        b.$1 = d("LiveChatPluginLoggerUtil").getAttributionTags();
        b.$2 = d("MercuryIDs").getThreadIDFromUserID(b.context.state.pageID);
        b.$3 =
          d("MPNIdentity").MPNIdentity.currentUserState() ===
          d("MPNIdentity").MPNIdentityState.FB;
        return b;
      }
      var e = b.prototype;
      e.render = function () {
        var a = this,
          b = [],
          d = this.props.menuItems;
        for (var e = 0; e < this.state.navigationPath.length; e++) {
          var f = this.state.navigationPath[e];
          d != null && (d = d[f].nested_ctas);
        }
        d &&
          d.map(function (d, c) {
            switch (d.action_type) {
              case 4:
                a.$4(d, b);
                break;
              case 2:
                a.$5(d, b);
                break;
              case 11:
                a.$6(d, c, b);
                break;
              default:
                b.push({ primaryText: d.title || "" });
                break;
            }
          });
        return i.jsx(c("MPNDropdownMenu"), {
          alignment: c("MPNDropdownMenuAlignment").TOP,
          className: "_a2z_",
          children: b.map(function (b, a) {
            return i.createElement(
              c("MPNDropdownMenuItem"),
              babelHelpers["extends"]({}, b, { key: a, "data-testid": void 0 })
            );
          }),
        });
      };
      e.$5 = function (a, b) {
        var e = this.context.state.pageID,
          f = function (b) {
            c("URI").goURIOnNewWindow(a.action_link || "");
            b = d("MPNIdentity").MPNIdentity.currentUserID();
            d("LiveChatPluginLoggerUtil").logActionFromNewUI(
              "in_thread_action",
              b,
              e,
              d("MPNIdentity").MPNIdentity.currentUserState() ===
                d("MPNIdentity").MPNIdentityState.FB
                ? "logged_in_chat_tab"
                : "guest_chat_tab",
              { action_type: "customer_chat_bot_menu_url_redirect_clicked" }
            );
          };
        b.push({ onClick: f, primaryText: a.title || "" });
      };
      e.$6 = function (a, b, c) {
        var d = this,
          e = function (a) {
            d.setState(function (a) {
              return { navigationPath: a.navigationPath.concat(b) };
            });
          };
        c.push({ onClick: e, primaryText: a.title || "" });
      };
      e.$4 = function (a, b) {
        var c = this,
          e = this.context.state,
          f = e.pageID,
          g = e.refererUri;
        e = function (b) {
          b = d("MPNIdentity").MPNIdentity.currentUserState();
          var e = d("MPNIdentity").MPNIdentity.currentUserID();
          if (
            b !== d("MPNIdentity").MPNIdentityState.GUEST &&
            b !== d("MPNIdentity").MPNIdentityState.FB
          )
            return;
          else {
            var h = c.context.state.messageStore;
            h = h.sendQueue;
            if (!h) return;
            h.enqueueAndSend(
              a.title || "",
              !1,
              g,
              h.makePlatformTokenForPostbackCTA(a.id || "")
            );
          }
          d("LiveChatPluginLoggerUtil").logActionFromNewUI(
            "in_thread_action",
            e,
            f,
            b === d("MPNIdentity").MPNIdentityState.FB
              ? "logged_in_chat_tab"
              : "guest_chat_tab",
            { action_type: "customer_chat_bot_menu_postback_clicked" }
          );
        };
        b.push({ onClick: e, primaryText: a.title || "" });
      };
      return b;
    })(i.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNMobileBotMenuButton.react",
  [
    "cx",
    "fbt",
    "AsyncRequest",
    "BasePopoverTrigger.react",
    "CometPressable.react",
    "LiveChatPluginConstants",
    "LiveChatPluginGuestPersistentMenuQuery",
    "LiveChatPluginLoggerUtil",
    "LiveChatPluginSendButtonSVG.react",
    "MPNBotMenuButtonSVG.react",
    "MPNIdentity",
    "MPNLocalState",
    "MPNMobileBotMenuDialog.react",
    "MPNStorage",
    "MessagingPluginContext",
    "XMessengerBotsMenuController",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.state = { menuItems: null, isMenuOpen: !1 }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.UNSAFE_componentWillMount = function () {
        this.state.menuItems == null && this.$2();
      };
      e.componentDidUpdate = function () {
        this.state.menuItems == null &&
          this.context.state.accessToken &&
          this.$2();
      };
      e.componentWillUnmount = function () {
        this.$1 && (this.$1.abort(), (this.$1 = null)),
          this.setState(this.$3(!1));
      };
      e.render = function () {
        var a = this,
          b = this.context.state,
          e = b.isComposerDisabled,
          f = b.hasActiveAutomation,
          g = b.hasPersistentMenu,
          h = b.threadCSSColor;
        return !e &&
          (f ||
            !g ||
            !this.state.menuItems ||
            this.state.menuItems.length === 0)
          ? j.jsx("div", {
              className: " _64mk _64ml _8pz4",
              children: j.jsx(c("LiveChatPluginSendButtonSVG.react"), {
                threadColor: d("LiveChatPluginConstants")
                  .GUEST_SEND_BUTTON_COLOR_EMPTY_INPUT,
              }),
            })
          : j.jsx(c("BasePopoverTrigger.react"), {
              position: "above",
              disableAutoFlip: !0,
              popover: c("MPNMobileBotMenuDialog.react"),
              popoverProps: { menuItems: this.state.menuItems },
              children: function (b, d) {
                return j.jsx("div", {
                  ref: b,
                  children: j.jsx("div", {
                    className: "_95e-",
                    children: j.jsx(c("CometPressable.react"), {
                      overlayRadius: 50,
                      "aria-label": i._("Persistent menu button"),
                      onPress: function () {
                        a.$4(), d();
                      },
                      children: j.jsx(c("MPNBotMenuButtonSVG.react"), {
                        threadColor: h,
                      }),
                    }),
                  }),
                });
              },
            });
      };
      e.$2 = function () {
        var a = this,
          b = this.context,
          e = b.state,
          f = b.dispatchAction;
        b = e.pageID;
        e = c("MPNStorage").getFBStorageState();
        if (
          !e ||
          e.chatState === d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED
        )
          return;
        e = d("MPNIdentity").MPNIdentity.currentUserState();
        switch (e) {
          case d("MPNIdentity").MPNIdentityState.GUEST:
            e =
              (e = d("MPNIdentity").MPNIdentity.currentUser()) == null
                ? void 0
                : e.accessToken;
            if (e == null) return;
            d("LiveChatPluginGuestPersistentMenuQuery").fetch(
              b,
              e,
              function (b) {
                b != null && b.length > 0
                  ? (a.setState({ menuItems: b }),
                    f({
                      type: "TOGGLE_HAS_PERSISTENT_MENU",
                      hasPersistentMenu: !0,
                    }))
                  : (a.setState({ menuItems: [] }),
                    f({
                      type: "TOGGLE_HAS_PERSISTENT_MENU",
                      hasPersistentMenu: !1,
                    }));
              }
            );
            break;
          case d("MPNIdentity").MPNIdentityState.FB:
            e = c("XMessengerBotsMenuController")
              .getURIBuilder()
              .setString("page_id", b)
              .setBool("should_flatten", !0)
              .getURI();
            this.$1 = new (c("AsyncRequest"))()
              .setURI(e)
              .setHandler(function (b) {
                a.setState({ menuItems: b.payload.menu });
              })
              .setErrorHandler(function (b) {
                a.setState({ menuItems: [] });
              });
            this.$1.send();
            break;
          default:
            return;
        }
      };
      e.$4 = function () {
        this.$3(this.state.isMenuOpen),
          this.props.onClick(),
          this.setState(function (a) {
            return { isMenuOpen: !a.isMenuOpen };
          });
      };
      e.$3 = function (a) {
        a = a
          ? "customer_chat_bot_menu_closed"
          : "customer_chat_bot_menu_opened";
        var b = this.context.state.pageID,
          c = d("MPNIdentity").MPNIdentity.currentUserID();
        d("LiveChatPluginLoggerUtil").logActionFromNewUI(
          "in_thread_action",
          c,
          b,
          d("MPNIdentity").MPNIdentity.currentUserState() ===
            d("MPNIdentity").MPNIdentityState.FB
            ? "logged_in_chat_tab"
            : "guest_chat_tab",
          { action_type: a }
        );
      };
      return b;
    })(j.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNMobileGuestAttachmentButton.react",
  [
    "cx",
    "MPNPaperclipIconSVG.react",
    "MessagingPluginContext",
    "ShimButton.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        return i.jsx(c("ShimButton.react"), {
          "data-testid": void 0,
          className: "_99jy",
          onClick: this.props.onClick,
          children: i.jsx(c("MPNPaperclipIconSVG.react"), {
            color: this.props.color,
          }),
        });
      };
      return b;
    })(i.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNMobileGuestUpgradeUpsellPrompt.react",
  [
    "Arbiter",
    "LiveChatPluginLoggerUtil",
    "MPNSharedGuestUpgradePromptV2.react",
    "MessagingPluginContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$1 = null),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.componentWillUnmount = function () {
        this.$1 && c("Arbiter").unsubscribe(this.$1);
      };
      e.componentDidMount = function () {
        var a = this.context.state,
          b = a.pageID;
        a = a.guestID;
        d("LiveChatPluginLoggerUtil").logImpressionUsingFalco_UnsafeFor3PD(
          b,
          "upgrade_prompt",
          null,
          null,
          null,
          null,
          a,
          null,
          this.props.prompt
        );
      };
      e.render = function () {
        return h.jsx(c("MPNSharedGuestUpgradePromptV2.react"), {
          color: this.props.color,
          prompt: this.props.prompt,
          history: this.props.history,
          isMobile: !0,
        });
      };
      return b;
    })(h.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNMobileLoginModal.react",
  [
    "cx",
    "LineClamp.react",
    "LiveChatPluginFbts",
    "MPNIdentity",
    "MPNMobileWelcomePageBottomButtons.react",
    "MPNPrivacyText.react",
    "MPNSwitchAccountActionButton.react",
    "MPNSwitchAccountDropDownMenu.react",
    "MessagingPluginContext",
    "emptyFunction",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useContext,
      k = b.useEffect,
      l = b.useRef,
      m = b.useState;
    function a(a) {
      var b = a.useITPContinueButton,
        e = j(c("MessagingPluginContext"));
      e = e.state;
      var f = e.shouldShowMobileInWebChat;
      e = e.mobileOptin;
      var g =
          d("MPNIdentity").MPNIdentity.currentUserState() ==
          d("MPNIdentity").MPNIdentityState.FB,
        h = m(!1),
        n = h[0],
        o = h[1],
        p = l(null),
        q = l(null);
      k(
        function () {
          function a(a) {
            var b;
            a = a.target;
            p &&
              a instanceof Node &&
              !((b = p.current) == null ? void 0 : b.contains(a)) &&
              q &&
              a instanceof Node &&
              !((b = q.current) == null ? void 0 : b.contains(a)) &&
              o(!1);
          }
          Event.listen(document, "mousedown", a);
          return function () {
            document.removeEventListener("mousedown", a);
          };
        },
        [p, q]
      );
      return i.jsxs("div", {
        className: "_a8d2",
        children: [
          i.jsxs("div", {
            className: "_a6zi",
            children: [
              i.jsx("div", { className: "_a6zj" }),
              i.jsx("div", {
                className: "_a6zl",
                children: i.jsx(c("LineClamp.react"), {
                  lines: 1,
                  children: d("LiveChatPluginFbts").LOGIN_PAGE_TITLE,
                }),
              }),
              i.jsx("div", {
                className: "_9dzn _a6zm" + (a.isPreview ? " _9l3-" : ""),
                children:
                  g && f === !0 && e === "chat_tab"
                    ? i.jsx(c("MPNSwitchAccountActionButton.react"), {
                        onPress: function () {
                          o(!0);
                        },
                      })
                    : null,
              }),
            ],
          }),
          n &&
            i.jsx("div", {
              ref: q,
              className: "_a1qk",
              children: i.jsx(c("MPNSwitchAccountDropDownMenu.react"), {
                onClose: c("emptyFunction"),
              }),
            }),
          i.jsx(
            c("MPNMobileWelcomePageBottomButtons.react"),
            babelHelpers["extends"]({}, a, { isReEngagementDialog: !1 })
          ),
          i.jsx(c("MPNPrivacyText.react"), { useITPContinueButton: b }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MPNMobileMessageComposer.react",
  [
    "cx",
    "fbt",
    "AbstractTextInput.react",
    "JSResource",
    "Keys",
    "LiveChatPluginAttachmentUploadError",
    "LiveChatPluginLoggerUtil",
    "LiveChatPluginMessageComposerAttachmentShelf.react",
    "LiveChatPluginSendButtonSVG.react",
    "MPNConstants",
    "MPNIdentity",
    "MPNMobileBotMenuButton.react",
    "MPNMobileGuestAttachmentButton.react",
    "MPNPaperclipIconSVG.react",
    "MPNStorage",
    "MercuryIDs",
    "MercuryMessageActions",
    "MercuryMessageObject",
    "MessagingPluginContext",
    "ShimButton.react",
    "lazyLoadComponent",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = c("lazyLoadComponent")(
        c("JSResource")("MPNAttachmentInput.react").__setRef(
          "MPNMobileMessageComposer.react"
        )
      );
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, e) {
        var f;
        f = a.call(this, b, e) || this;
        f.state = {
          attachmentsDataMap: new Map(),
          error: c("LiveChatPluginAttachmentUploadError").NO_ERROR,
          inputValue: "",
          uploadingAttachments: new Set(),
        };
        f.$19 = function (a) {
          f.props.onChange(),
            f.setState({
              error: c("LiveChatPluginAttachmentUploadError").NO_ERROR,
              inputValue: a.target.value,
            });
        };
        f.$20 = function (a) {
          a.keyCode === c("Keys").RETURN && (a.preventDefault(), f.$18());
        };
        f.$18 = function () {
          var a,
            b = d("MPNIdentity").MPNIdentity.currentUserState(),
            c = f.context.state;
          a = (a = c.messageStore) == null ? void 0 : a.sendQueue;
          var e =
              a == null
                ? void 0
                : a.prepareAttachmentsForMessage(f.$1, f.$3, f.$4, f.$10),
            g = f.state.inputValue.trim();
          if (
            !(a == null
              ? void 0
              : a.canQueueMessage(
                  g,
                  f.state.uploadingAttachments.size !== 0,
                  e
                ))
          )
            return;
          a.enqueueAndSend(
            g,
            b === d("MPNIdentity").MPNIdentityState.FB,
            c.refererUri,
            null,
            e
          );
          f.$21();
          f.setState({ inputValue: "" });
          a =
            b === d("MPNIdentity").MPNIdentityState.FB
              ? d("MPNIdentity").MPNIdentity.currentUserID()
              : c.guestID;
          d("LiveChatPluginLoggerUtil").logActionUsingFalco(
            (g = a) != null ? g : "",
            c.pageID,
            b === d("MPNIdentity").MPNIdentityState.FB
              ? "logged_in_chat_tab"
              : "guest_chat_tab",
            "message_send"
          );
          f.context.state.hasActiveAutomation &&
            d("LiveChatPluginLoggerUtil").logActionFromNewUI(
              "automation_freeform_message_sent",
              d("MPNIdentity").MPNIdentity.currentUserID(),
              f.context.state.pageID,
              b === d("MPNIdentity").MPNIdentityState.FB
                ? "logged_in_chat_tab"
                : "guest_chat_tab"
            );
        };
        f.$11 = function (a) {
          f.$2 && f.$2.removeAttachment(a);
        };
        f.$15 = function (a) {
          f.setState({ error: a });
        };
        f.$16 = function (a, b, d, e, g, h) {
          d && (f.$1 = d),
            e && (f.$3 = e),
            g && (f.$4 = g),
            h && (f.$10 = h),
            f.setState({
              attachmentsDataMap: new Map(a),
              error: c("LiveChatPluginAttachmentUploadError").NO_ERROR,
              uploadingAttachments: new Set(b),
            }),
            f.focus();
        };
        b = f.context.state.pageID;
        e = d("MPNIdentity").MPNIdentity.currentUserID();
        if (e == null) return babelHelpers.assertThisInitialized(f);
        f.$6 = c("MercuryMessageActions").getForFBID(e);
        f.$7 = c("MercuryMessageObject").getForFBID(e);
        f.$8 = d("MercuryIDs").getThreadIDFromUserID(b);
        f.$9 = d("LiveChatPluginLoggerUtil").getAttributionTags();
        f.$1 = [];
        f.$3 = [];
        f.$4 = [];
        f.$10 = [];
        return f;
      }
      var e = b.prototype;
      e.render = function () {
        return j.jsxs("div", {
          className: this.context.state.isComposerDisabled ? "_664i" : "",
          children: [
            j.jsx(c("LiveChatPluginMessageComposerAttachmentShelf.react"), {
              attachments: this.state.attachmentsDataMap,
              error: this.state.error,
              removeAttachment: this.$11,
              threadColor: this.context.state.threadColor,
              uploadingAttachments: this.state.uploadingAttachments,
            }),
            j.jsxs("div", {
              className: "_99ks",
              children: [this.$12(), this.$13(), this.$14()],
            }),
          ],
        });
      };
      e.$12 = function () {
        var a = this,
          b = this.context,
          e = b.dispatchAction;
        b = b.state;
        var f = d("MPNIdentity").MPNIdentity.currentUserID();
        return f == null
          ? null
          : !b.shouldShowMobileInWebChat ||
            d("MPNIdentity").MPNIdentity.currentUserState() ===
              d("MPNIdentity").MPNIdentityState.GUEST
          ? this.context.state.showUpgradeUpsellPrompt &&
            j.jsx(c("MPNMobileGuestAttachmentButton.react"), {
              color: this.context.state.threadCSSColor,
              onClick: function () {
                c("MPNStorage").setShowUpgradePrompt(
                  d("MPNConstants").MPNUpgradePrompt.ATTACHMENT_UPSELL
                ),
                  e({
                    type: "UPDATE_UPGRADE_UPSELL_PROMPT",
                    upgradeUpsellPrompt:
                      d("MPNConstants").MPNUpgradePrompt.ATTACHMENT_UPSELL,
                  });
              },
            })
          : j.jsx(j.Suspense, {
              fallback: j.jsx("div", {
                className: "_95jj",
                children: j.jsx(c("MPNPaperclipIconSVG.react"), {
                  color: this.context.state.threadCSSColor,
                }),
              }),
              children: j.jsx(k, {
                pageID: this.context.state.pageID,
                ref: function (b) {
                  a.$2 = b;
                },
                setComposerAttachmentError: this.$15,
                updateComposerAttachmentsAndIDs: this.$16,
                viewerID: f,
                isMobile: !0,
              }),
            });
      };
      e.$14 = function () {
        var a = this.context.state,
          b = a.isComposerDisabled;
        a = a.threadCSSColor;
        var d = this.state.inputValue.trim();
        d = d.length === 0 && this.state.attachmentsDataMap.size === 0;
        return d || b
          ? this.$17()
          : j.jsx(c("ShimButton.react"), {
              "aria-label": i._("Send button"),
              className: "_4bqf _64mk _64ml",
              "data-testid": void 0,
              onClick: this.$18,
              children: j.jsx(c("LiveChatPluginSendButtonSVG.react"), {
                threadColor: a,
              }),
            });
      };
      e.$13 = function () {
        var a = this,
          b = this.context.state.isComposerDisabled,
          d = i._("Typing is disabled for this conversation.");
        return b
          ? j.jsx("div", { className: "_664k", children: d })
          : j.jsx("div", {
              className: "_92dv",
              children: j.jsx(c("AbstractTextInput.react"), {
                "data-testid": void 0,
                onBlur: this.props.onBlur,
                onChange: this.$19,
                onClick: this.props.onClick,
                onKeyDown: this.$20,
                ref: function (b) {
                  a.$5 = b;
                },
                placeholder: i._("Send a message\u2026").toString(),
                value: this.state.inputValue,
              }),
            });
      };
      e.$17 = function () {
        return j.jsx(c("MPNMobileBotMenuButton.react"), {
          onClick: this.props.onClick,
        });
      };
      e.$21 = function () {
        this.$2 && this.$2.removeAllAttachments();
      };
      e.focus = function () {
        this.$5 && this.$5.focusInput();
      };
      return b;
    })(j.PureComponent);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "LiveChatPluginCloseButtonSVG.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.render = function () {
        return h.jsx("svg", {
          width: "10px",
          height: "10px",
          viewBox: "0 0 14 14",
          children: h.jsx("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            children: h.jsx("g", {
              transform: "translate(-419.000000, -413.000000)",
              children: h.jsx("g", {
                transform: "translate(164.000000, 396.000000)",
                children: h.jsx("g", {
                  children: h.jsx("g", {
                    transform: "translate(250.000000, 12.000000)",
                    children: h.jsx("g", {
                      children: h.jsxs("g", {
                        children: [
                          h.jsx("rect", {
                            opacity: "0.200000003",
                            x: "0",
                            y: "0",
                            width: "24",
                            height: "24",
                          }),
                          h.jsxs("g", {
                            transform: "translate(4.000000, 4.000000)",
                            fill: "#000000",
                            children: [
                              h.jsx("rect", {
                                transform:
                                  "translate(8.000000, 8.000000) rotate(45.000000) translate(-8.000000, -8.000000) ",
                                x: "7",
                                y: "-1",
                                width: "2",
                                height: "18",
                                rx: "1",
                              }),
                              h.jsx("rect", {
                                transform:
                                  "translate(8.000000, 8.000000) rotate(135.000000) translate(-8.000000, -8.000000) ",
                                x: "7",
                                y: "-1",
                                width: "2",
                                height: "18",
                                rx: "1",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }),
        });
      };
      return b;
    })(h.PureComponent);
    g["default"] = a;
  },
  98
);
__d(
  "MessagingPluginMobileInformationMenu.react",
  [
    "cx",
    "fbt",
    "LiveChatPluginLoggerUtil",
    "MPNDropdownMenu",
    "MPNDropdownMenuItem",
    "MessagingPluginContext",
    "URI",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useContext;
    function a(a) {
      a = k(c("MessagingPluginContext"));
      a = a.state;
      var b = a.pageID,
        e = a.hasGuestMode;
      return j.jsxs(c("MPNDropdownMenu"), {
        className: "_a2-e",
        children: [
          j.jsx("div", {
            "data-testid": void 0,
            children: j.jsx(c("MPNDropdownMenuItem"), {
              onClick: function () {
                d("LiveChatPluginLoggerUtil").logActionFromNewUI(
                  "tab_click",
                  null,
                  b,
                  e ? "welcome_page_with_guest_option" : "welcome_page",
                  { button_name: "visit_facebook_page_menu_item" }
                ),
                  c("URI").goURIOnNewWindow("https://www.facebook.com/" + b);
              },
              primaryText: i._("Visit Facebook Page"),
            }),
          }),
          j.jsx(c("MPNDropdownMenuItem"), {
            "data-testid": void 0,
            onClick: function () {
              d("LiveChatPluginLoggerUtil").logActionFromNewUI(
                "tab_click",
                null,
                b,
                e ? "welcome_page_with_guest_option" : "welcome_page",
                { button_name: "add_messenger_to_your_website_menu_item" }
              ),
                c("URI").goURIOnNewWindow(
                  "https://www.facebook.com/business/m/add-messenger-to-your-website"
                );
            },
            primaryText: i._("Add Messenger to your website"),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MessagingPluginMobileProfilePicture.react",
  [
    "cx",
    "ix",
    "Image.react",
    "MPNConstants",
    "MessagingPluginContext",
    "PrivacyTransparentOverlay.react",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var e = b.prototype;
      e.render = function () {
        var a = this.context.state,
          b = a.pageProfilePictureUri,
          e = a.isPageAway;
        a = a.awayHoursEnabled;
        var f = this.props,
          g = f.className,
          h = f.availablityIconSize;
        f = f.disableStatusIndicator;
        var k = e ? "_a7a1" : "_a2gl";
        h =
          h === d("MPNConstants").MPNAvailablityIconSize.LARGE
            ? "_a7a2"
            : "_a7a3";
        k = c("joinClasses")(k, h);
        h = e
          ? j.jsx(c("Image.react"), { className: k, src: i("213835") })
          : j.jsx("div", { className: k });
        return j.jsxs(c("PrivacyTransparentOverlay.react"), {
          children: [
            j.jsx(c("Image.react"), {
              className: (e = g) != null ? e : "_a3jw",
              src: (k = this.props.personaProfilePictureUri) != null ? k : b,
            }),
            a && f !== !0 ? h : null,
          ],
        });
      };
      return b;
    })(j.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNMobileWelcomePageModal.react",
  [
    "cx",
    "fbt",
    "BasePopoverTrigger.react",
    "BootloaderResource",
    "ChatPluginMessengerAttribution.react",
    "ChatPluginTestId",
    "FlexLayout.react",
    "JSResource",
    "LineClamp.react",
    "LiveChatPluginCloseButtonSVG.react",
    "LiveChatPluginFbts",
    "LiveChatPluginLoggerUtil",
    "MPNConstants",
    "MPNHeaderActionButton.react",
    "MPNLocalState",
    "MPNMobileLoginModal.react",
    "MPNMoreInfoButtonSVG.react",
    "MPNNavigation",
    "MPNNewWelcomePageButtom.react",
    "MPNPageResponsivenessText.react",
    "MPNStorage",
    "MPNVerifiedBadge.react",
    "MPNXDMessageManager",
    "MessagingPluginContext",
    "MessagingPluginMobileInformationMenu.react",
    "MessagingPluginMobileProfilePicture.react",
    "MessagingPluginPathUtils",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, e;
        for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++)
          g[h] = arguments[h];
        return (
          ((b = e = a.call.apply(a, [this].concat(g)) || this),
          (e.state = {
            settingBackground: !1,
            shouldShowBackground:
              e.context.state.optimisticStorageState.visibility ===
              d("MPNConstants").MPNVisibility.NOT_HIDDEN,
            isCloseButtonActive: !0,
            shouldShowLoginPage: !1,
          }),
          (e.$1 = j.createRef()),
          (e.$2 = j.createRef()),
          (e.handleClickOutside = function (a) {
            var b;
            a = a.target;
            e.$1 &&
              a instanceof Node &&
              !((b = e.$1.current) == null ? void 0 : b.contains(a)) &&
              e.$2 &&
              a instanceof Node &&
              !((b = e.$2.current) == null ? void 0 : b.contains(a)) &&
              (e.setState({ shouldShowLoginPage: !1 }),
              c("MPNStorage").clearRedirectCommand(),
              c("MPNXDMessageManager").updateShouldShowLoginPage(!1));
          }),
          (e.$4 = function () {
            e.setState({ settingBackground: !0, shouldShowBackground: !1 });
            var a = e.props.ActionDelegate,
              b = babelHelpers.assertThisInitialized(e);
            window.setTimeout(function () {
              a && a.minimize(), b.setState({ settingBackground: !1 });
            }, 100);
            e.setState({ isCloseButtonActive: !1 });
            window.setTimeout(function () {
              e.setState({ isCloseButtonActive: !0 });
            }, 350);
          }),
          (e.$7 = function () {
            var a = e.context.state,
              b = a.entryPointSize,
              f = a.alignment,
              g = a.bottomSpacing,
              h = a.entryPointLabel,
              i = a.sideSpacing;
            (a = e.props.ActionDelegate) == null ? void 0 : a.minimize();
            window.setTimeout(function () {
              d("MPNNavigation").navigateToRoute(
                e.context,
                e.props.history,
                d("MPNLocalState").MPNLocalStatePath.REENGAGEMENT_COLLAPSED_VIEW
              ),
                c("MPNXDMessageManager").setupMobileIframeForPath(
                  d("MessagingPluginPathUtils").MPN_PATH.REENGAGEMENT_COLLAPSED,
                  !1,
                  b,
                  null,
                  f,
                  null,
                  g,
                  h,
                  i
                );
            }, 200);
          }),
          (e.$6 = function (a) {
            a.stopPropagation();
          }),
          b) || babelHelpers.assertThisInitialized(e)
        );
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        Event.listen(document, "mousedown", this.handleClickOutside);
        var a = this.context.state.isSanitizedEpd3pdRequest;
        a ||
          d("BootloaderResource").preload(
            c("JSResource")("MessagingPluginDialogBody.react").__setRef(
              "MPNMobileWelcomePageModal.react"
            )
          );
      };
      e.componentDidUpdate = function () {
        this.$3();
      };
      e.componentWillUnmount = function () {
        window.removeEventListener("mousedown", this.handleClickOutside);
      };
      e.render = function () {
        return j.jsxs("div", {
          children: [
            j.jsx("div", {
              role: "none",
              className: this.state.shouldShowBackground ? "_92bp" : "_92bq",
              onClick: this.$4,
            }),
            this.$5(),
          ],
        });
      };
      e.$5 = function () {
        var a = this,
          b,
          e,
          f = this.context.state,
          g = f.hasGuestMode,
          h = f.pageID,
          k = f.pageVerifiedStatus;
        f = f.shouldRenderReEngagementDialog;
        var l = this.context.state,
          m = i._("Chat with {pageName}", [i._param("pageName", l.pageName)]),
          n = j.jsx("div", {
            ref: this.$1,
            children: j.jsx(c("MPNNewWelcomePageButtom.react"), {
              onClick: function () {
                a.setState({ shouldShowLoginPage: !0 });
                var b = c("MPNStorage").getFBStorageState();
                b != null &&
                  c("MPNStorage").setFBStorageState(
                    babelHelpers["extends"]({}, b, {
                      rdr: d("MPNConstants").MPNRedirect.SHOW_LOGIN_PAGE,
                    })
                  );
                c("MPNXDMessageManager").updateShouldShowLoginPage(!0);
              },
              shouldShowLoginPage: this.props.shouldShowLoginPage,
            }),
          });
        b =
          (b = l.loggedInGreeting) != null
            ? b
            : d(
                "LiveChatPluginFbts"
              ).DEFAULT_LOGGED_IN_GREETING_TEXT.toString();
        e =
          (e = l.awayGreeting) != null
            ? e
            : d("LiveChatPluginFbts").DEFAULT_AWAY_GREETING_TEXT.toString();
        l = l.awayHoursEnabled && l.isPageAway ? e : b;
        return j.jsxs("div", {
          className: this.state.shouldShowBackground ? "_908c" : "_9jhn",
          onClick: this.$6,
          "data-testid": void 0,
          role: "none",
          children: [
            j.jsx("div", {
              className: this.state.shouldShowLoginPage ? "_a6s5" : "",
              children: j.jsxs("div", {
                className: "welcomePageModalSheetContent",
                children: [
                  j.jsxs("div", {
                    className: "_a2zp",
                    children: [
                      j.jsx(c("MessagingPluginMobileProfilePicture.react"), {
                        className: "_a3jx",
                        availablityIconSize:
                          d("MPNConstants").MPNAvailablityIconSize.LARGE,
                      }),
                      j.jsx("div", { className: "_9dxh" }),
                      j.jsxs("div", {
                        className: "_9dzn",
                        children: [
                          j.jsx("div", {
                            "data-testid": void 0,
                            children: j.jsx(c("BasePopoverTrigger.react"), {
                              popover: c(
                                "MessagingPluginMobileInformationMenu.react"
                              ),
                              popoverProps: {},
                              children: function (a, b) {
                                return j.jsx("div", {
                                  ref: a,
                                  children: j.jsx(
                                    c("MPNHeaderActionButton.react"),
                                    {
                                      label: i._("More"),
                                      onPress: function () {
                                        b(),
                                          d(
                                            "LiveChatPluginLoggerUtil"
                                          ).logActionFromNewUI(
                                            "tab_click",
                                            null,
                                            h,
                                            g
                                              ? "welcome_page_with_guest_option"
                                              : "welcome_page",
                                            { button_name: "more_menu" }
                                          );
                                      },
                                      children: j.jsx(
                                        c("MPNMoreInfoButtonSVG.react"),
                                        {}
                                      ),
                                    }
                                  ),
                                });
                              },
                            }),
                          }),
                          j.jsx(c("MPNHeaderActionButton.react"), {
                            label: i._("close"),
                            onPress: f ? this.$7 : this.$4,
                            testid: void 0,
                            children: j.jsx(
                              c("LiveChatPluginCloseButtonSVG.react"),
                              {}
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  j.jsxs(c("FlexLayout.react"), {
                    align: "center",
                    className_DO_NOT_USE: "_a2zr",
                    children: [
                      j.jsx(c("LineClamp.react"), {
                        lines: 1,
                        children: j.jsx("strong", { children: m }),
                      }),
                      k && k !== "not_verified"
                        ? j.jsx("span", {
                            className: "_a2m5",
                            children: j.jsx(c("MPNVerifiedBadge.react"), {
                              verificationStatus: k,
                              size: 18,
                            }),
                          })
                        : null,
                    ],
                  }),
                  j.jsx(c("MPNPageResponsivenessText.react"), {}),
                  j.jsx(c("LineClamp.react"), {
                    className: "_a2zt _a6zn",
                    lines: 3,
                    children: l,
                  }),
                  n,
                  j.jsx(c("ChatPluginMessengerAttribution.react"), {
                    shouldShowEntryPointCustomization:
                      this.context.state.shouldShowEntryPointCustomization,
                  }),
                ],
              }),
            }),
            j.jsx("div", {
              ref: this.$2,
              children:
                this.state.shouldShowLoginPage &&
                j.jsx("div", {
                  className: "_a6w9",
                  children: j.jsx("div", {
                    className: "_a8d3",
                    children: j.jsx(
                      c("MPNMobileLoginModal.react"),
                      babelHelpers["extends"]({}, this.props, { isPreview: !1 })
                    ),
                  }),
                }),
            }),
          ],
        });
      };
      e.$3 = function () {
        this.context.state.optimisticStorageState.visibility ===
          d("MPNConstants").MPNVisibility.NOT_HIDDEN &&
          !this.state.shouldShowBackground &&
          !this.state.settingBackground &&
          this.setState({ shouldShowBackground: !0 });
      };
      return b;
    })(j.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MessagingPluginMobileThreadMenu.react",
  [
    "cx",
    "fbt",
    "CometSeparatorMenuItem.react",
    "LiveChatPluginLoggerUtil",
    "MPNDropdownMenu",
    "MPNDropdownMenuItem",
    "MPNIdentity",
    "MessagingPluginContext",
    "MessagingPluginThreadActions",
    "ODS",
    "URI",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useContext;
    function a(a) {
      var b = k(c("MessagingPluginContext")),
        e = b.state,
        f = e.pageID,
        g = e.locale,
        h = e.guestID,
        l = e.isPageBlocked,
        m = e.showUpgradeUpsellPrompt,
        n = e.isPageInEU;
      e = e.isLightswitchEnabledForGuest;
      var o =
          d("MPNIdentity").MPNIdentity.currentUserState() ===
          d("MPNIdentity").MPNIdentityState.GUEST,
        p = e !== !0 && !n;
      p ||
        (e === !0 &&
          d("ODS").bumpEntityKey(
            4205,
            "chat_plugin",
            "chat_plugin.epd.guest_frx_entry_point_blocked_eu_guest"
          ),
        n &&
          d("ODS").bumpEntityKey(
            4205,
            "chat_plugin",
            "chat_plugin.epd.guest_frx_entry_point_blocked_eu_page"
          ));
      return j.jsxs(c("MPNDropdownMenu"), {
        "data-testid": void 0,
        className: "_a2z-",
        children: [
          o && m
            ? j.jsx(c("MPNDropdownMenuItem"), {
                iconSrc: "/images/web_messenger/app-messenger_filled_20-4x.png",
                onClick: function () {
                  return a.onUpgrade();
                },
                primaryText: i._("Continue in Messenger"),
              })
            : null,
          j.jsx(c("MPNDropdownMenuItem"), {
            "data-testid": void 0,
            iconSrc: "/images/web_messenger/cross-circle_filled_20-4x.png",
            onClick: function () {
              d("LiveChatPluginLoggerUtil").logActionFromNewUI(
                "in_thread_action",
                h,
                f,
                o ? "guest_chat_tab" : "logged_in_chat_tab",
                { button_name: "end_chat_menu_item" }
              ),
                b.dispatchAction({ type: "TOGGLE_END_CHAT", showEndChat: !0 });
            },
            primaryText: i._("End chat"),
          }),
          !o && l != null
            ? j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                iconSrc: "/images/web_messenger/message-cross_32-4x.png",
                onClick: function () {
                  d("MessagingPluginThreadActions").blockOrUnblockPage(b);
                },
                primaryText: l
                  ? i._("Turn on messages")
                  : i._("Turn off messages"),
              })
            : null,
          o
            ? null
            : j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                iconSrc: a.isMuted
                  ? "/images/web_messenger/bell-cross_32-4x.png"
                  : "/images/web_messenger/bell_32-4x.png",
                onClick: a.onClickMuteOrUnmute,
                primaryText: a.isMuted
                  ? i._("Unmute conversation")
                  : i._("Mute conversation"),
              }),
          p
            ? j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                iconSrc:
                  "images/web_messenger/caution-triangle_filled_20-4x.png",
                onClick: function () {
                  d("MessagingPluginThreadActions").openFRXPrompt(
                    f,
                    g,
                    "report_button"
                  );
                },
                primaryText: i._("Something's wrong"),
              })
            : null,
          j.jsx(c("CometSeparatorMenuItem.react"), {}),
          j.jsx(c("MPNDropdownMenuItem"), {
            "data-testid": void 0,
            onClick: function () {
              d("LiveChatPluginLoggerUtil").logActionFromNewUI(
                "in_thread_action",
                h,
                f,
                "guest_chat_tab",
                { button_name: "visit_facebook_page_menu_item" }
              ),
                c("URI").goURIOnNewWindow("https://www.facebook.com/" + f);
            },
            primaryText: i._("Visit Facebook Page"),
          }),
          j.jsx(c("MPNDropdownMenuItem"), {
            "data-testid": void 0,
            onClick: function () {
              d("LiveChatPluginLoggerUtil").logActionFromNewUI(
                "in_thread_action",
                h,
                f,
                "guest_chat_tab",
                { button_name: "add_messenger_to_your_website_menu_item" }
              ),
                c("URI").goURIOnNewWindow(
                  "https://www.facebook.com/business/m/add-messenger-to-your-website"
                );
            },
            primaryText: i._("Add Messenger to your website"),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MessagingPluginMobileDialogHeader.react",
  [
    "cx",
    "fbt",
    "Arbiter",
    "BasePopoverTrigger.react",
    "FlexLayout.react",
    "LineClamp.react",
    "LiveChatPluginLoggerUtil",
    "MPNConstants",
    "MPNHeaderActionButton.react",
    "MPNIdentity",
    "MPNMinusButtonSVG.react",
    "MPNMoreInfoButtonSVG.react",
    "MPNThreadPageHeaderSubtitle.react",
    "MPNVerifiedBadge.react",
    "MessagingPluginContext",
    "MessagingPluginMobileProfilePicture.react",
    "MessagingPluginMobileThreadMenu.react",
    "MessagingPluginThreadActions",
    "QE2Logger",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = c = a.call.apply(a, [this].concat(f)) || this),
          (c.$1 = null),
          (c.state = { isMuted: c.context.state.isMuted }),
          (c.$3 = function () {
            var a = c.context.state,
              b = a.guestID;
            a = a.pageID;
            c.$1 = d("MessagingPluginThreadActions").launchUpgradeFlowMobile(
              c.context,
              c.props.history,
              d("MPNConstants").MPNUpgradePrompt.CONTINUE_IN_MESSENGER
            );
            d("LiveChatPluginLoggerUtil").logActionFromNewUI(
              "in_thread_action",
              b,
              a,
              "guest_chat_tab",
              {
                action_type:
                  d("MPNConstants").MPNUpgradePrompt.CONTINUE_IN_MESSENGER,
              }
            );
          }),
          (c.$4 = function () {
            c.props.ActionDelegate && c.props.ActionDelegate.minimize();
          }),
          (c.$2 = function () {
            var a = c.state.isMuted;
            d("MessagingPluginThreadActions").muteOrUnmutePage(
              c.context.state.pageID,
              a
            );
            c.setState({ isMuted: !a });
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.componentWillUnmount = function () {
        this.$1 && c("Arbiter").unsubscribe(this.$1);
      };
      e.componentDidMount = function () {
        var a = this.context.state,
          b = a.pageID;
        a = a.pageResponsiveness;
        a != null &&
          d("QE2Logger").logExposureForPage(
            "chat_plugin_thread_header_responsiveness_text",
            b.toString()
          );
      };
      e.render = function () {
        var a = this.context.state,
          b = a.pageName,
          e = a.pageID,
          f = a.pageVerifiedStatus,
          g = a.guestID,
          h = a.showGuestUpgradePopover,
          k = a.isPageAway;
        a = a.awayHoursEnabled;
        var l =
          this.context.state.optimisticStorageState.showUpgradePrompt !=
          d("MPNConstants").MPNUpgradePrompt.NOT_SHOWN;
        return j.jsxs("div", {
          className: "_9dxj" + (!l && !h ? " _9gop" : ""),
          children: [
            j.jsx("div", {
              className: "_a2m0",
              children: j.jsx(
                c("MessagingPluginMobileProfilePicture.react"),
                {}
              ),
            }),
            j.jsxs("div", {
              className: "_9dxi",
              children: [
                j.jsxs(c("FlexLayout.react"), {
                  align: "center",
                  children: [
                    j.jsx(c("LineClamp.react"), {
                      className: "_a2m1",
                      lines: 1,
                      children: j.jsx("strong", { children: b }),
                    }),
                    f && f !== "not_verified"
                      ? j.jsx("span", {
                          className: "_a2m4",
                          children: j.jsx(c("MPNVerifiedBadge.react"), {
                            verificationStatus: f,
                            size: 14,
                          }),
                        })
                      : null,
                  ],
                }),
                j.jsx(c("MPNThreadPageHeaderSubtitle.react"), {
                  isPageAway: k,
                  awayHoursEnabled: a,
                }),
              ],
            }),
            j.jsx("div", { className: "_9dxh" }),
            j.jsxs("div", {
              className: "_9dzn",
              children: [
                j.jsx(c("BasePopoverTrigger.react"), {
                  popover: c("MessagingPluginMobileThreadMenu.react"),
                  popoverProps: {
                    history: this.props.history,
                    isMuted: this.state.isMuted,
                    onClickMuteOrUnmute: this.$2,
                    onUpgrade: this.$3,
                  },
                  children: function (a, b) {
                    return j.jsx("div", {
                      ref: a,
                      children: j.jsx(c("MPNHeaderActionButton.react"), {
                        testid: void 0,
                        label: i._("More"),
                        onPress: function () {
                          b(),
                            d("LiveChatPluginLoggerUtil").logActionFromNewUI(
                              "in_thread_action",
                              g,
                              e,
                              d(
                                "MPNIdentity"
                              ).MPNIdentity.currentUserState() ===
                                d("MPNIdentity").MPNIdentityState.FB
                                ? "logged_in_chat_tab"
                                : "guest_chat_tab",
                              { button_name: "more_menu" }
                            );
                        },
                        children: j.jsx(c("MPNMoreInfoButtonSVG.react"), {}),
                      }),
                    });
                  },
                }),
                j.jsx(c("MPNHeaderActionButton.react"), {
                  label: i._("close"),
                  onPress: this.$4,
                  children: j.jsx(c("MPNMinusButtonSVG.react"), {}),
                }),
              ],
            }),
          ],
        });
      };
      return b;
    })(j.PureComponent);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MessagingPluginMobileITPContinuePage.react",
  [
    "LiveChatPluginLoggerUtil",
    "MPNConstants",
    "MPNMobileWelcomePageModal.react",
    "MPNXDMessageManager",
    "MessagingPluginContext",
    "MessagingPluginPathUtils",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        var a = this.context.state,
          b = a.pageID,
          e = a.pluginMountTime,
          f = a.optimisticStorageState,
          g = a.entryPointSize;
        a = a.shouldUseAccessTokenAuth;
        c("MPNXDMessageManager").setupMobileIframeForPath(
          d("MessagingPluginPathUtils").MPN_PATH.ITPCONTINUE,
          f.visibility === d("MPNConstants").MPNVisibility.NOT_HIDDEN,
          g
        );
        d("LiveChatPluginLoggerUtil").logImpressionUsingXController_SafeFor3PD(
          a,
          b,
          "itp_page",
          e,
          ["continue"],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          !1
        );
      };
      e.render = function () {
        try {
          return h.jsx(c("MPNMobileWelcomePageModal.react"), {
            ActionDelegate: this.props.ActionDelegate,
            history: this.props.history,
            useITPContinueButton: !0,
          });
        } catch (c) {
          var a = this.context.state,
            b = a.pageID;
          a = a.shouldUseAccessTokenAuth;
          d(
            "LiveChatPluginLoggerUtil"
          ).logImpressionExceptionsUsingXController_SafeFor3PD(
            a,
            "tab_load_failure",
            b,
            "itp_page",
            c.name,
            c.message,
            c.stack
          );
        }
      };
      return b;
    })(h.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MessagingPluginMobileIcon.react",
  [
    "fbt",
    "LiveChatPluginLoggerUtil",
    "MPNConstants",
    "MPNMobileBadgeableMessengerIcon.react",
    "MPNStorage",
    "MPNXDMessageManager",
    "MessagingPluginContext",
    "ShimButton.react",
    "cr:352",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e() {
        var b, e, f;
        for (var g = arguments.length, h = new Array(g), i = 0; i < g; i++)
          h[i] = arguments[i];
        return (
          ((e = f = a.call.apply(a, [this].concat(h)) || this),
          (f.state = {
            dialogVisibility:
              (b = c("MPNStorage").getFBStorageState()) == null
                ? void 0
                : b.visibility,
            isButtonActive: !0,
          }),
          (f.$1 = function () {
            c("MPNXDMessageManager").markInteraction(),
              f.props.actionDelegate.togglePluginVisibility(),
              f.setState({ isButtonActive: !1 }),
              window.setTimeout(function () {
                f.setState({ isButtonActive: !0 });
              }, 350),
              f.props.shouldShowEntryPointCustomization &&
                d("LiveChatPluginLoggerUtil").logEntryPointClick(
                  f.props.entryPointIconEnum,
                  f.props.entryPointLabel,
                  f.props.pageID
                );
          }),
          e) || babelHelpers.assertThisInitialized(f)
        );
      }
      var f = e.prototype;
      f.componentDidMount = function () {
        var a = this;
        c("MPNXDMessageManager").subscribeEvent(
          "plugin_wrapper",
          "message",
          "CustomerChat.isDialogHidden",
          function (b) {
            b =
              ((b = b.data.params) == null ? void 0 : b.is_dialog_hidden) == !0
                ? d("MPNConstants").MPNVisibility.HIDDEN
                : d("MPNConstants").MPNVisibility.NOT_HIDDEN;
            a.setState({ dialogVisibility: b });
          }
        );
        var b = null,
          e = null,
          f = this.props,
          g = f.shouldShowEntryPointCustomization,
          h = f.pageID,
          i = f.pluginRequestTime,
          j = f.clientRequestTime,
          k = f.serverRequestTime;
        f = f.shouldUseNewDomain;
        g &&
          ((b = this.props.entryPointIconEnum),
          (e = this.props.entryPointLabel));
        d("LiveChatPluginLoggerUtil").logImpressionUsingXController_SafeFor3PD(
          f,
          h,
          "plugin_icon",
          i,
          null,
          null,
          null,
          null,
          j,
          null,
          b,
          e,
          g,
          this.props.logId,
          k
        );
      };
      f.render = function () {
        try {
          b("cr:352") == null
            ? void 0
            : b("cr:352").logChatPluginLandingLoadModuleEndSuccess();
          var a = this.props.entryPointLabel !== "none" ? "44px" : "60px";
          return i.jsx(c("ShimButton.react"), {
            style: { borderRadius: "50%", height: a },
            "data-testid": void 0,
            onClick: this.$1,
            children: i.jsx("div", {
              "data-testid": void 0,
              "aria-label":
                this.state.dialogVisibility ===
                d("MPNConstants").MPNVisibility.NOT_HIDDEN
                  ? ""
                  : h._("Chat with {page name} button", [
                      h._param("page name", this.props.pageName),
                    ]),
              children: i.jsx(c("MPNMobileBadgeableMessengerIcon.react"), {
                entryPointIcon: this.props.entryPointIconSVG,
                entryPointLabel: this.props.entryPointLabel,
                entryPointSize: this.props.entryPointSize,
                threadColor: this.props.threadColor,
                alignment: this.props.alignment,
                shouldShowEntryPointCustomization:
                  this.props.shouldShowEntryPointCustomization,
                shouldUseNewDomain: this.props.shouldUseNewDomain,
              }),
            }),
          });
        } catch (a) {
          b("cr:352") == null
            ? void 0
            : b("cr:352").logChatPluginLandingLoadModuleEndFail(),
            d(
              "LiveChatPluginLoggerUtil"
            ).logImpressionExceptionsUsingXController_SafeFor3PD(
              this.props.shouldUseNewDomain,
              "tab_load_failure",
              this.props.pageID,
              "plugin_icon",
              a.name,
              a.message,
              a.stack
            );
        }
      };
      return e;
    })(i.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MessagingPluginMobileMessengerIconSVGwithColor.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.render = function () {
        return h.jsx("svg", {
          width: this.props.size,
          height: this.props.size,
          viewBox: "0 0 41 41",
          children: h.jsx("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            children: h.jsx("g", {
              transform: "translate(-5.000000, -5.000000)",
              fill: this.props.threadColor,
              children: h.jsx("g", {
                children: h.jsx("g", {
                  transform: "translate(5.000000, 5.000000)",
                  children: h.jsx("path", {
                    d: "M20,0 C31.2666,0 40,8.2528 40,19.4 C40,30.5472 31.2666,38.8 20,38.8 C17.9763,38.8 16.0348,38.5327 14.2106,38.0311 C13.856,37.9335 13.4789,37.9612 13.1424,38.1098 L9.1727,39.8621 C8.1343,40.3205 6.9621,39.5819 6.9273,38.4474 L6.8184,34.8894 C6.805,34.4513 6.6078,34.0414 6.2811,33.7492 C2.3896,30.2691 0,25.2307 0,19.4 C0,8.2528 8.7334,0 20,0 Z M7.99009,25.07344 C7.42629,25.96794 8.52579,26.97594 9.36809,26.33674 L15.67879,21.54734 C16.10569,21.22334 16.69559,21.22164 17.12429,21.54314 L21.79709,25.04774 C23.19919,26.09944 25.20039,25.73014 26.13499,24.24744 L32.00999,14.92654 C32.57369,14.03204 31.47419,13.02404 30.63189,13.66324 L24.32119,18.45264 C23.89429,18.77664 23.30439,18.77834 22.87569,18.45674 L18.20299,14.95224 C16.80079,13.90064 14.79959,14.26984 13.86509,15.75264 L7.99009,25.07344 Z",
                  }),
                }),
              }),
            }),
          }),
        });
      };
      return b;
    })(h.Component);
    g["default"] = a;
  },
  98
);
__d(
  "MessagingPluginMobileLandingPage.react",
  [
    "cx",
    "fbt",
    "FlexLayout.react",
    "LineClamp.react",
    "LiveChatPluginFbts",
    "LiveChatPluginLoggerUtil",
    "MPNConstants",
    "MPNLocalState",
    "MPNNavigation",
    "MPNVerifiedBadge.react",
    "MPNXDMessageManager",
    "MessagingPluginContext",
    "MessagingPluginMobileMessengerIconSVGwithColor.react",
    "MessagingPluginMobileProfilePicture.react",
    "MessagingPluginPathUtils",
    "ShimButton.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = c = a.call.apply(a, [this].concat(f)) || this),
          (c.$1 = function (a) {
            var b = c.context.state,
              e = b.pageID;
            b = b.hasGuestMode;
            a.stopPropagation();
            d("MPNNavigation").navigateToRoute(
              c.context,
              c.props.history,
              d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE
            );
            d("LiveChatPluginLoggerUtil").logActionFromNewUI(
              "tab_click",
              null,
              e,
              "landing_page",
              {
                opened_tab: b
                  ? "welcome_page_with_guest_option"
                  : "welcome_page",
              }
            );
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        var a = this.context.state,
          b = a.pageID,
          e = a.pluginMountTime,
          f = a.loggedInGreeting,
          g = a.entryPointSize;
        a = a.shouldUseAccessTokenAuth;
        c("MPNXDMessageManager").setupMobileIframeForPath(
          d("MessagingPluginPathUtils").MPN_PATH.LANDING,
          this.context.state.optimisticStorageState.visibility ===
            d("MPNConstants").MPNVisibility.NOT_HIDDEN,
          g
        );
        d("LiveChatPluginLoggerUtil").logImpressionUsingXController_SafeFor3PD(
          a,
          b,
          "landing_page",
          e,
          null,
          f != null
            ? f
            : d("LiveChatPluginFbts").DEFAULT_LOGGED_IN_GREETING_TEXT.toString()
        );
      };
      e.render = function () {
        var a = this.context.state,
          b = a.pageID,
          e = a.pageName,
          f = a.pageVerifiedStatus,
          g = a.loggedInGreeting,
          h = a.threadCSSColor,
          k = a.optimisticStorageState;
        a = a.shouldUseAccessTokenAuth;
        k = k.visibility === d("MPNConstants").MPNVisibility.HIDDEN;
        e = i._("Chat with {pageName}", [i._param("pageName", e)]);
        try {
          return j.jsx("div", {
            className: "_90st",
            children: j.jsxs(c("ShimButton.react"), {
              "data-testid": void 0,
              className: "_8_x9",
              onClick: this.$1,
              children: [
                j.jsx("div", {
                  className: "_90s_",
                  children: j.jsx(
                    c("MessagingPluginMobileMessengerIconSVGwithColor.react"),
                    { threadColor: h, size: "24px" }
                  ),
                }),
                j.jsx("div", { className: "_9dxh" }),
                j.jsxs("div", {
                  className:
                    (k ? "_94mw" : "") +
                    (k ? "" : " _9dxi") +
                    (k ? "" : " _90sz"),
                  children: [
                    j.jsxs(c("FlexLayout.react"), {
                      align: "center",
                      children: [
                        j.jsx(c("LineClamp.react"), {
                          className: "x1lkfr7t x117nqv4 x1yn0g08",
                          lines: 1,
                          children: j.jsx("strong", { children: e }),
                        }),
                        f && f !== "not_verified"
                          ? j.jsx("span", {
                              className: "x1e558r4 x1n2onr6 x1pdr0v7",
                              children: j.jsx(c("MPNVerifiedBadge.react"), {
                                verificationStatus: f,
                                size: 14,
                              }),
                            })
                          : null,
                      ],
                    }),
                    j.jsx(c("LineClamp.react"), {
                      className: "x1o14lzj x1nxh6w3",
                      lines: 1,
                      children:
                        g != null
                          ? g
                          : d(
                              "LiveChatPluginFbts"
                            ).DEFAULT_LOGGED_IN_GREETING_TEXT.toString(),
                    }),
                  ],
                }),
                j.jsx("div", {
                  className: (k ? "_94mw" : "") + (k ? "" : " _91k-"),
                  children: j.jsx(
                    c("MessagingPluginMobileProfilePicture.react"),
                    {}
                  ),
                }),
              ],
            }),
          });
        } catch (c) {
          d(
            "LiveChatPluginLoggerUtil"
          ).logImpressionExceptionsUsingXController_SafeFor3PD(
            a,
            "tab_load_failure",
            b,
            "landing_page",
            c.name,
            c.message,
            c.stack
          );
        }
      };
      return b;
    })(j.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MessagingPluginMobileThreadPage.react",
  [
    "cx",
    "Arbiter",
    "Bootloader",
    "ChatPluginMobileCufee.react",
    "JSResource",
    "LiveChatMqttClient",
    "LiveChatPluginLoggerUtil",
    "MPNConstants",
    "MPNEndChatPrompt.react",
    "MPNIdentity",
    "MPNLocalState",
    "MPNMobileGuestUpgradeUpsellPrompt.react",
    "MPNMobileMessageComposer.react",
    "MPNUpgradePopover.react",
    "MPNXDMessageManager",
    "MessagingPluginContext",
    "MessagingPluginMobileDialogHeader.react",
    "MessagingPluginPathUtils",
    "MessengerSpinner.react",
    "MessengerState.bs",
    "emptyFunction",
    "gkx",
    "lazyLoadComponent",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = c("lazyLoadComponent")(
        c("JSResource")("MessagingPluginDialogBody.react").__setRef(
          "MessagingPluginMobileThreadPage.react"
        )
      );
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$2 = null),
          (c.$3 = !1),
          (c.state = {
            dialogBodyHeight: -1,
            informationViewOpen: !1,
            feedback: {
              first_screen: null,
              privacy_policy: null,
              form_state: "",
              form_id: "",
            },
          }),
          (c.setFeedback = function (a) {
            c.setState(function (b) {
              return babelHelpers["extends"]({}, b, { feedback: a });
            });
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        var a = this.context.state.entryPointSize;
        c("MPNXDMessageManager").setupMobileIframeForPath(
          d("MessagingPluginPathUtils").MPN_PATH.THREAD,
          this.context.state.optimisticStorageState.visibility ===
            d("MPNConstants").MPNVisibility.NOT_HIDDEN,
          a
        );
        this.$4();
      };
      e.componentDidUpdate = function () {
        this.$4();
      };
      e.$4 = function () {
        var a = this;
        if (this.$3) return;
        var b = this.context.state,
          e = b.optimisticStorageState,
          f = b.pageID,
          g = b.pageName,
          h = b.accessToken,
          i = b.guestID,
          j = b.loggedInAccessToken;
        b = b.shouldShowMobileInWebChat;
        if (b) {
          var k = d("MPNIdentity").MPNIdentity.currentUserID();
          if (
            this.$2 == k ||
            e.chatState === d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED ||
            k == null
          )
            return;
          b = d("MPNIdentity").MPNIdentity.currentUserState();
          b === d("MPNIdentity").MPNIdentityState.FB &&
            (c("LiveChatMqttClient").setUp(
              f,
              k,
              null,
              function () {
                return (a.$2 = k);
              },
              j
            ),
            c("Bootloader").loadModules(
              ["LiveChatPluginAlerts", "MercurySyncDeltaHandler"],
              function (a, b) {
                a.init(k, f, g, new Map(), !1, 0),
                  b.getForFBID(k),
                  c("Arbiter").inform("MercurySyncDeltaHandler/initSeqID", {
                    fbid: k,
                    seqID: 0,
                  });
              },
              "MessagingPluginMobileThreadPage.react"
            ));
        }
        f &&
          h &&
          i &&
          (c("LiveChatMqttClient").setUp(f, i, null, null, h), (this.$3 = !0));
      };
      e.render = function () {
        var a = this,
          b = this.context.state,
          e = b.optimisticStorageState,
          f = b.pageID;
        b = b.showUpgradeUpsellPrompt;
        var g =
          d("MPNIdentity").MPNIdentity.currentUserState() ===
          d("MPNIdentity").MPNIdentityState.GUEST;
        try {
          return i.jsx("div", {
            role: "none",
            className: "_926d",
            children: i.jsxs("div", {
              className:
                e.chatState === d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED
                  ? "_91hz"
                  : "",
              children: [
                i.jsxs(
                  "div",
                  {
                    className: "_6atj _90x4",
                    children: [
                      i.jsx(c("MessagingPluginMobileDialogHeader.react"), {
                        ActionDelegate: this.props.ActionDelegate,
                        history: this.props.history,
                      }),
                      i.jsx(c("MPNUpgradePopover.react"), { isMobile: !0 }),
                      i.jsxs("div", {
                        className: "_424s",
                        children: [
                          e.chatState ===
                            d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED &&
                            i.jsx("div", {
                              className: "spinner",
                              children: i.jsx(c("MessengerSpinner.react"), {
                                color: "blue",
                                size: c("MessengerSpinner.react").large_size,
                              }),
                            }),
                          i.jsx(i.Suspense, {
                            fallback: i.jsx("div", {
                              className: "spinner",
                              children: i.jsx(c("MessengerSpinner.react"), {
                                color: "blue",
                                size: c("MessengerSpinner.react").large_size,
                              }),
                            }),
                            children:
                              e.chatState !==
                                d("MPNLocalState").MPNChatState
                                  .CHAT_NOT_STARTED &&
                              i.jsx(d("MessengerState.bs").jsComponent, {
                                fbid: this.context.state.guestID,
                                children: function (b) {
                                  return i.jsx(j, {
                                    deliveryReceipt:
                                      c("MessengerState.bs").deliveryReceipts(
                                        b
                                      ),
                                    dialogBodyHeight: a.state.dialogBodyHeight,
                                    informationViewOpen:
                                      a.state.informationViewOpen,
                                    messengerState: b,
                                    sendRef: function () {},
                                    setFeedback: a.setFeedback,
                                  });
                                },
                              }),
                          }),
                        ],
                      }),
                      e.showUpgradePrompt == null ||
                      e.showUpgradePrompt ===
                        d("MPNConstants").MPNUpgradePrompt.NOT_SHOWN ||
                      !b
                        ? null
                        : i.jsx(c("MPNMobileGuestUpgradeUpsellPrompt.react"), {
                            color: this.context.state.threadCSSColor,
                            prompt:
                              this.context.state.optimisticStorageState
                                .showUpgradePrompt,
                            history: this.props.history,
                          }),
                      i.jsx(c("MPNEndChatPrompt.react"), {
                        isGuest: g,
                        history: this.props.history,
                        shouldMinimize: !0,
                      }),
                      i.jsx(c("MPNMobileMessageComposer.react"), {
                        onBlur: c("emptyFunction"),
                        onChange: function () {},
                        onClick: function () {},
                        ref: function (b) {
                          return (a.$1 = b);
                        },
                      }),
                    ],
                  },
                  "dialog_container"
                ),
                c("gkx")("2784")
                  ? i.jsx(c("ChatPluginMobileCufee.react"), {
                      pageName: this.context.state.pageName,
                      feedbackQuestion: this.state.feedback.first_screen,
                      businessPrivacy: this.state.feedback.privacy_policy,
                      formState:
                        (e = this.state.feedback.form_state) != null ? e : "",
                      formID:
                        (b = this.state.feedback.form_id) != null ? b : "",
                    })
                  : null,
              ],
            }),
          });
        } catch (a) {
          d(
            "LiveChatPluginLoggerUtil"
          ).logImpressionExceptionsFromNewUI_UnsafeFor3PD(
            "tab_load_failure",
            f,
            d("MPNIdentity").MPNIdentity.currentUserState() ===
              d("MPNIdentity").MPNIdentityState.FB
              ? "logged_in_chat_tab"
              : "guest_chat_tab",
            a.name,
            a.message,
            a.stack
          );
        }
      };
      return b;
    })(i.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MessagingPluginMobileWelcomeMessagePage.react",
  [
    "ChatPluginStyleUtils",
    "ChatPluginTestId",
    "LiveChatPluginFbts",
    "LiveChatPluginLoggerUtil",
    "MPNConstants",
    "MPNDialogMinusButtonSVG.react",
    "MPNLocalState",
    "MPNNavigation",
    "MPNXDMessageManager",
    "MessagingPluginContext",
    "MessagingPluginPathUtils",
    "ShimButton.react",
    "react",
    "useResizeObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useEffect,
      l = b.useState,
      m = 4e3,
      n = 6e3;
    function a(a) {
      var b = l(!1),
        e = b[0],
        f = b[1],
        g = j(c("MessagingPluginContext"));
      g = (b = a.context) != null ? b : g;
      b = g.state;
      var o = b.alignment,
        p = b.bottomSpacing,
        q = b.clientRequestTime,
        r = b.entryPointLabel,
        s = b.loggedInGreeting,
        t = b.optimisticStorageState,
        u = b.pageID,
        v = b.serverTime,
        w = b.shouldShowEntryPointCustomization,
        x = b.entryPointSize,
        y = b.awayGreeting,
        z = b.awayHoursEnabled,
        A = b.isPageAway,
        B = b.shouldShowReEngagement,
        C = b.shouldRenderReEngagementDialog,
        D = b.sideSpacing,
        E = b.shouldUseAccessTokenAuth;
      b = c("useResizeObserver")(function (a, b) {
        c("MPNXDMessageManager").setupMobileIframeForPath(
          d("MessagingPluginPathUtils").MPN_PATH.BUBBLE,
          t.visibility === d("MPNConstants").MPNVisibility.NOT_HIDDEN,
          x,
          b.clientHeight + 12,
          o,
          !0,
          p,
          r,
          D
        );
      });
      var F = C
          ? d("MPNLocalState").MPNLocalStatePath.REENGAGEMENT_COLLAPSED_VIEW
          : d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE,
        G = C
          ? d("MessagingPluginPathUtils").MPN_PATH.REENGAGEMENT_COLLAPSED
          : d("MessagingPluginPathUtils").MPN_PATH.WELCOME,
        H = i(
          function () {
            a.ActionDelegate && a.ActionDelegate.minimize(),
              window.setTimeout(function () {
                d("MPNNavigation").navigateToRoute(g, a.history, F),
                  c("MPNXDMessageManager").setupMobileIframeForPath(
                    G,
                    !1,
                    x,
                    null,
                    o,
                    !1,
                    p,
                    r,
                    D
                  );
              }, 200);
          },
          [g, a.history, a.ActionDelegate, F, x, o, p, r, D, G]
        );
      k(
        function () {
          var b = null,
            h = null;
          e ||
            (b = window.setTimeout(function () {
              f(!0);
            }, n));
          e &&
            (h = window.setTimeout(function () {
              H();
            }, m));
          c("MPNXDMessageManager").subscribeEvent(
            "plugin_welcome_message_page",
            "message",
            "navigateToWelcomePage",
            function (b) {
              d("MPNNavigation").navigateToRoute(
                g,
                a.history,
                d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE,
                !1
              );
            }
          );
          return function () {
            c("MPNXDMessageManager").unsubscribeEvent(
              "plugin_welcome_message_page",
              "message",
              "navigateToWelcomePage"
            ),
              b && window.clearTimeout(b),
              h && window.clearTimeout(h);
          };
        },
        [g, H, a.history, B, e]
      );
      k(
        function () {
          d(
            "LiveChatPluginLoggerUtil"
          ).logImpressionUsingXController_SafeFor3PD(
            E,
            u,
            "bubble",
            v,
            null,
            null,
            null,
            null,
            q
          );
        },
        [E, u, v, q]
      );
      C = function () {
        c("MPNXDMessageManager").markInteraction(),
          window.setTimeout(function () {
            d("MPNNavigation").navigateToRoute(
              g,
              a.history,
              d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE
            );
          }, 100),
          d("LiveChatPluginLoggerUtil").logActionFromNewUI(
            "tab_click",
            null,
            g.state.pageID,
            "plugin_icon",
            { opened_tab: "bubble" }
          );
      };
      B = d("ChatPluginStyleUtils").getNoOutlineFocus();
      var I = d("ChatPluginStyleUtils").getWelcomeMessageBubbleStyle(
          o === "right",
          "mobile"
        ),
        J = d("ChatPluginStyleUtils").getWelcomeMessageTextStyle(
          o === "right",
          "mobile"
        ),
        K = d("ChatPluginStyleUtils").getMinusButtonStyle(
          o === "right",
          "mobile"
        );
      w &&
        r !== "none" &&
        (K = d("ChatPluginStyleUtils").getMinusButtonStyle(
          o === "left",
          "mobile"
        ));
      s =
        (w = s) != null
          ? w
          : d("LiveChatPluginFbts").DEFAULT_LOGGED_IN_GREETING_TEXT.toString();
      y =
        (w = y) != null
          ? w
          : d("LiveChatPluginFbts").DEFAULT_AWAY_GREETING_TEXT.toString();
      w = z && A ? y : s;
      return h.jsxs("div", {
        children: [
          h.jsx(c("ShimButton.react"), {
            onClick: C,
            children: h.jsx("div", {
              "data-testid": void 0,
              style: I,
              ref: b,
              children: h.jsx("div", { style: J, children: w }),
            }),
          }),
          h.jsx("div", {
            style: K,
            children: h.jsx(c("ShimButton.react"), {
              "data-testid": void 0,
              onClick: H,
              style: B,
              children: h.jsx(c("MPNDialogMinusButtonSVG.react"), {}),
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MessagingPluginMobileWelcomePage.react",
  [
    "LiveChatPluginFbts",
    "LiveChatPluginLoggerUtil",
    "MPNConstants",
    "MPNMobileWelcomePageModal.react",
    "MPNXDMessageManager",
    "MessagingPluginContext",
    "MessagingPluginPathUtils",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        var a = this.context.state,
          b = a.pageID,
          e = a.pluginMountTime,
          f = a.hasGuestMode,
          g = a.loggedInGreeting,
          h = a.optimisticStorageState,
          i = a.entryPointSize;
        a = a.shouldUseAccessTokenAuth;
        c("MPNXDMessageManager").setupMobileIframeForPath(
          d("MessagingPluginPathUtils").MPN_PATH.WELCOME,
          h.visibility === d("MPNConstants").MPNVisibility.NOT_HIDDEN,
          i
        );
        d("LiveChatPluginLoggerUtil").logImpressionUsingXController_SafeFor3PD(
          a,
          b,
          f ? "welcome_page_with_guest_option" : "welcome_page",
          e,
          f
            ? ["chat_in_messenger", "continue_as_guest"]
            : ["chat_in_messenger"],
          g != null
            ? g
            : d(
                "LiveChatPluginFbts"
              ).DEFAULT_LOGGED_IN_GREETING_TEXT.toString(),
          null,
          null,
          null,
          null,
          null,
          null,
          !1
        );
      };
      e.render = function () {
        var a,
          b = this.context.state;
        a =
          (a = this.props.history.location.state) == null
            ? void 0
            : a.shouldShowLoginPage;
        try {
          return h.jsx(c("MPNMobileWelcomePageModal.react"), {
            ActionDelegate: this.props.ActionDelegate,
            history: this.props.history,
            useITPContinueButton: !1,
            shouldShowLoginPage: a === !1 ? a : this.props.shouldShowLoginPage,
          });
        } catch (a) {
          d(
            "LiveChatPluginLoggerUtil"
          ).logImpressionExceptionsUsingXController_SafeFor3PD(
            b.shouldUseAccessTokenAuth,
            "tab_load_failure",
            b.pageID,
            b.hasGuestMode ? "welcome_page_with_guest_option" : "welcome_page",
            a.name,
            a.message,
            a.stack
          );
        }
      };
      return b;
    })(h.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MessagingPluginMobileRoute.react",
  [
    "ChatPluginMobileReEngagementExpandedDialog.react",
    "ChatPluginReEngagementCollapsedDialog.react",
    "MessagingPluginMobileITPContinuePage.react",
    "MessagingPluginMobileLandingPage.react",
    "MessagingPluginMobileThreadPage.react",
    "MessagingPluginMobileWelcomeMessagePage.react",
    "MessagingPluginMobileWelcomePage.react",
    "MessagingPluginPathUtils",
    "ReactRouterDOM",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    var h = d("react");
    function a(a) {
      var b = a.path,
        e = a.ActionDelegate,
        f = a.shouldShowLoginPage;
      return h.jsx(d("ReactRouterDOM").BrowserRouter, {
        children: h.jsxs(d("ReactRouterDOM").Switch, {
          children: [
            h.jsx(d("ReactRouterDOM").Route, {
              component: c("MessagingPluginMobileLandingPage.react"),
              exact: !0,
              path: d("MessagingPluginPathUtils").MPN_PATH.LANDING,
            }),
            h.jsx(d("ReactRouterDOM").Route, {
              render: function (a) {
                return h.jsx(
                  c("MessagingPluginMobileWelcomePage.react"),
                  babelHelpers["extends"]({}, a, {
                    ActionDelegate: e,
                    shouldShowLoginPage: f,
                  })
                );
              },
              exact: !0,
              path: d("MessagingPluginPathUtils").MPN_PATH.WELCOME,
            }),
            h.jsx(d("ReactRouterDOM").Route, {
              render: function (a) {
                return h.jsx(
                  c("MessagingPluginMobileITPContinuePage.react"),
                  babelHelpers["extends"]({}, a, { ActionDelegate: e })
                );
              },
              exact: !0,
              path: d("MessagingPluginPathUtils").MPN_PATH.ITPCONTINUE,
            }),
            h.jsx(d("ReactRouterDOM").Route, {
              render: function (a) {
                return h.jsx(
                  c("MessagingPluginMobileThreadPage.react"),
                  babelHelpers["extends"]({}, a, { ActionDelegate: e })
                );
              },
              exact: !0,
              path: d("MessagingPluginPathUtils").MPN_PATH.THREAD,
            }),
            h.jsx(d("ReactRouterDOM").Route, {
              render: function (a) {
                return h.jsx(
                  c("MessagingPluginMobileWelcomeMessagePage.react"),
                  babelHelpers["extends"]({}, a, { ActionDelegate: e })
                );
              },
              exact: !0,
              path: d("MessagingPluginPathUtils").MPN_PATH.BUBBLE,
            }),
            h.jsx(d("ReactRouterDOM").Route, {
              render: function (a) {
                return h.jsx(
                  c("ChatPluginReEngagementCollapsedDialog.react"),
                  babelHelpers["extends"]({}, a, {
                    isPreview: !1,
                    isMobile: !0,
                  })
                );
              },
              exact: !0,
              path: d("MessagingPluginPathUtils").MPN_PATH
                .REENGAGEMENT_COLLAPSED,
            }),
            h.jsx(d("ReactRouterDOM").Route, {
              render: function (a) {
                return h.jsx(
                  c("ChatPluginMobileReEngagementExpandedDialog.react"),
                  babelHelpers["extends"]({}, a, {
                    ActionDelegate: e,
                    isPreview: !1,
                  })
                );
              },
              exact: !0,
              path: d("MessagingPluginPathUtils").MPN_PATH
                .REENGAGEMENT_EXPANDED,
            }),
            h.jsx(d("ReactRouterDOM").Redirect, { to: b }),
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MessagingPluginMobileWrapper.react",
  [
    "Arbiter",
    "ChatPluginEntryPoint.react",
    "CreateCustomerChatPluginGuestUserMutation",
    "CurrentUser",
    "LiveChatPluginConstants",
    "LiveChatPluginLoggerUtil",
    "LiveChatPluginMessengerIconSVGWithColor.react",
    "MPNConstants",
    "MPNEntryPointAvailabilityStatusIcon.react",
    "MPNIdentity",
    "MPNLocalState",
    "MPNNavigation",
    "MPNStorage",
    "MPNUnreadCountBadge.react",
    "MPNXDMessageManager",
    "MessagingPluginContext",
    "MessagingPluginGuestUpgradeActions",
    "MessagingPluginMobileIcon.react",
    "MessagingPluginMobileRoute.react",
    "MessagingPluginPathUtils",
    "MessagingPluginSDKActionUtil",
    "MessagingPluginThreadActions",
    "ReactDOM",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c = a.call(this, b) || this;
        c.shouldCreateGuestSession = !1;
        c.shouldPerformGuestUpgradeActions = !1;
        c.shouldStartNewThread = !1;
        c.iconIframeLoaded = !1;
        c.$3 = null;
        c.shouldShowLoginPage = !1;
        c.shouldPerformReengagementOptIn = !1;
        c.shouldPerformReengagementSwitchAccount = !1;
        c.shouldPerformSwitchAccount = !1;
        b = c.props.redirectCommand;
        c.initialPath =
          b === d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION ||
          b === d("MPNConstants").MPNRedirect.FB_LOG_IN ||
          b === d("MPNConstants").MPNRedirect.RE_ENGAGEMENT_LOG_IN
            ? d("MessagingPluginPathUtils").MPN_PATH.THREAD
            : c.props.path;
        b === d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION
          ? (c.shouldCreateGuestSession = !0)
          : b === d("MPNConstants").MPNRedirect.GUEST_UPGRADE_SWITCH_ACCOUNT
          ? (c.shouldPerformGuestUpgradeActions = !0)
          : b === d("MPNConstants").MPNRedirect.FB_LOG_IN
          ? (c.shouldStartNewThread = !0)
          : b === d("MPNConstants").MPNRedirect.SHOW_LOGIN_PAGE
          ? (c.shouldShowLoginPage = !0)
          : b === d("MPNConstants").MPNRedirect.RE_ENGAGEMENT_LOG_IN
          ? (c.shouldPerformReengagementOptIn = !0)
          : b === d("MPNConstants").MPNRedirect.RE_ENGAGEMENT_SWITCH_ACCOUNT
          ? (c.shouldPerformReengagementSwitchAccount = !0)
          : b === d("MPNConstants").MPNRedirect.SWITCH_ACCOUNT &&
            (c.shouldPerformSwitchAccount = !0);
        c.ActionDelegate = {
          onContinueAsGuest: c.onContinueAsGuest.bind(
            babelHelpers.assertThisInitialized(c)
          ),
          onAppSwitchToMessenger: c.onAppSwitchToMessenger.bind(
            babelHelpers.assertThisInitialized(c)
          ),
          openThreadWithCurrentFBUser: function () {
            d("MessagingPluginThreadActions").openThreadWithCurrentFBUser(
              c.context,
              !1
            );
          },
          openThreadWithInterstitial: function (a) {
            d("MessagingPluginThreadActions").openThreadWithInterstitial(
              c.context,
              a
            );
          },
          minimize: function () {
            d("MPNNavigation").minimizePlugin(c.context);
          },
          maximize: function () {
            d("MPNNavigation").maximizePlugin(c.context, !0);
          },
          togglePluginVisibility: function () {
            d("MPNNavigation").togglePluginVisibility(c.context, !0);
          },
        };
        c.$1 = window.name;
        return c;
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        this.$5();
        this.$6();
        var a = this.context.state.entryPointSize;
        c("MPNXDMessageManager").setupMobileIframeForPath(
          this.initialPath,
          this.context.state.optimisticStorageState.visibility ===
            d("MPNConstants").MPNVisibility.NOT_HIDDEN,
          a,
          null,
          this.context.state.alignment,
          null,
          this.context.state.bottomSpacing,
          this.context.state.entryPointLabel,
          this.context.state.sideSpacing
        );
      };
      e.componentWillUnmount = function () {
        this.$2 && window.clearTimeout(this.$2),
          this.$3 && c("Arbiter").unsubscribe(this.$3),
          this.$4 && window.clearTimeout(this.$4);
      };
      e.$5 = function () {
        var a = this,
          b = this.context.state,
          e = b.alignment,
          f = b.bottomSpacing,
          g = b.clientRequestTime,
          i = b.entryPointIconEnum,
          j = b.entryPointIconSVG,
          k = b.entryPointLabel,
          l = b.entryPointSize,
          m = b.pageID,
          n = b.pageName,
          o = b.shouldShowEntryPointCustomization,
          p = b.sideSpacing,
          q = b.threadCSSColor,
          r = b.isLoadedByFacade,
          s = b.serverTime,
          t = b.awayHoursEnabled,
          u = b.isPageAway,
          v = b.shouldShowReEngagement,
          w = b.shouldUseAccessTokenAuth;
        b = o
          ? h.jsx(c("ChatPluginEntryPoint.react"), {
              entryPointIcon: j,
              entryPointLabel: k,
              entryPointSize: l,
              threadColor: q,
              alignment: e,
              isSocialPluginDomain: w,
            })
          : h.jsx(c("LiveChatPluginMessengerIconSVGWithColor.react"), {
              threadColor: q,
              entryPointSize: l,
            });
        c("MPNXDMessageManager").setupIconIframe(
          this.$1,
          e,
          f,
          p,
          b,
          r,
          null,
          k,
          i,
          l,
          v
        );
        c("MPNXDMessageManager").subscribeEvent(
          "plugin_wrapper",
          "message",
          "bubbleFrameLoaded",
          function (b) {
            if (b.data.frameName != null) {
              var f = h.jsx(c("MessagingPluginMobileIcon.react"), {
                  alignment: e,
                  threadColor: q,
                  entryPointIconSVG: j,
                  entryPointIconEnum: i,
                  entryPointLabel: k,
                  entryPointSize: l,
                  actionDelegate: a.ActionDelegate,
                  pageID: m,
                  pageName: n,
                  pluginRequestTime: b.data.request_time,
                  clientRequestTime: g,
                  shouldShowEntryPointCustomization: o,
                  logId: b.data.log_id,
                  serverRequestTime: s,
                  shouldUseNewDomain: w,
                }),
                p = parent.frames[b.data.frameName].document.body;
              d("ReactDOM").render(f, p);
              a.iconIframeLoaded = !0;
            }
            if (b.data.unreadCountFrameName != null) {
              f = h.jsx(c("MPNUnreadCountBadge.react"), {});
              p = parent.frames[b.data.unreadCountFrameName].document.body;
              d("ReactDOM").render(f, p);
            }
            if (b.data.availabilityStatusIframeName != null) {
              f = h.jsx(c("MPNEntryPointAvailabilityStatusIcon.react"), {
                awayHoursEnabled: t,
                isPageAway: u,
              });
              p =
                parent.frames[b.data.availabilityStatusIframeName].document
                  .body;
              d("ReactDOM").render(f, p);
            }
            a.$7();
          }
        );
      };
      e.$7 = function () {
        var a = this,
          b = this.context.state,
          c = b.greetingDialogDelay,
          d = b.greetingDialogDisplay;
        b = b.isInitialLoad;
        if (!b) return;
        b = !1;
        var e = 0,
          f = c;
        switch (d) {
          case "show":
          case "unset":
            b = c > 0;
            break;
          case "fade":
            b = c > 0;
            e = c;
            f = 0;
            break;
          case "hide":
            b = !1;
            break;
          default:
            break;
        }
        if (!b) return;
        this.$2 = window.setTimeout(function () {
          a.$8(e);
        }, f);
      };
      e.$8 = function (a) {
        var b = this;
        this.context.state.optimisticStorageState.visibility ===
          d("MPNConstants").MPNVisibility.HIDDEN &&
          (d("MPNNavigation").maximizePlugin(this.context, !0),
          a != null &&
            a > 0 &&
            (this.$4 = window.setTimeout(function () {
              b.context.state.optimisticStorageState.visibility !==
                d("MPNConstants").MPNVisibility.HIDDEN &&
                d("MPNNavigation").minimizePlugin(b.context);
            }, a)));
      };
      e.$6 = function () {
        var a = this;
        c("MPNXDMessageManager").subscribeEvent(
          "plugin_wrapper",
          "message",
          "CustomerChat.SDK.Called",
          function (b) {
            d("MessagingPluginSDKActionUtil").logSDKCalls(a.context, b);
          }
        );
        c("MPNXDMessageManager").subscribeEvent(
          "plugin_wrapper",
          "message",
          "updateCustomerChat",
          function (b) {
            d("MessagingPluginSDKActionUtil").updateGreetingTextAndRefParam(
              a.context,
              b
            );
          }
        );
        c("MPNXDMessageManager").subscribeEvent(
          "plugin_wrapper",
          "message",
          "CustomerChat.isDialogHidden",
          function (b) {
            d("MessagingPluginSDKActionUtil").updateDialogVisibility(
              a.context,
              b
            );
          }
        );
      };
      e.render = function () {
        var a = this,
          b = !1;
        this.shouldCreateGuestSession &&
          ((this.shouldCreateGuestSession = !1),
          this.onContinueAsGuest(function () {
            c("MPNStorage").clearRedirectCommand();
          }));
        this.shouldPerformGuestUpgradeActions &&
          ((this.shouldPerformGuestUpgradeActions = !1),
          c("MPNStorage").clearRedirectCommand(),
          (this.$3 = c("Arbiter").subscribeOnce(
            d("LiveChatPluginConstants").GUEST_UPGRADE_SUCCESS,
            function () {
              d("MessagingPluginGuestUpgradeActions").clearGuestStorage(
                a.context
              ),
                d("MPNNavigation").minimizePlugin(a.context, !1),
                (a.initialPath = d(
                  "MessagingPluginPathUtils"
                ).MPN_PATH.WELCOME),
                c("MPNXDMessageManager").reloadPlugin();
            }
          )));
        this.shouldStartNewThread &&
          ((this.shouldStartNewThread = !1),
          c("MPNStorage").clearRedirectCommand(),
          d("MessagingPluginThreadActions").openThreadWithCurrentFBUser(
            this.context,
            !1
          ));
        this.shouldShowLoginPage &&
          ((this.shouldShowLoginPage = !1),
          (b = !0),
          c("MPNStorage").clearRedirectCommand(),
          c("MPNXDMessageManager").updateShouldShowLoginPage(!1),
          c("MPNStorage").setPath(
            d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE
          ),
          this.context.dispatchAction({
            type: "UPDATE_DIALOG_PATH",
            path: d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE,
          }));
        this.shouldPerformReengagementOptIn &&
          ((this.shouldPerformReengagementOptIn = !1),
          c("MPNXDMessageManager").updateIsReEngagementOptIn(!1),
          c("MPNStorage").clearRedirectCommand(),
          d("MessagingPluginThreadActions").openThreadWithCurrentFBUser(
            this.context,
            !0
          ));
        this.shouldPerformReengagementSwitchAccount &&
          ((this.shouldPerformReengagementSwitchAccount = !1),
          c("MPNStorage").clearRedirectCommand(),
          d("MPNIdentity").MPNIdentity.subscribeLoggedInUserChanges(function (
            a,
            b
          ) {
            if (b !== "0") {
              a = c("MPNStorage").getFBStorageState();
              a != null &&
                (c("MPNStorage").setFBStorageState(
                  babelHelpers["extends"]({}, a, {
                    rdr: d("MPNConstants").MPNRedirect.RE_ENGAGEMENT_LOG_IN,
                  })
                ),
                c("MPNXDMessageManager").reloadPlugin());
            }
          },
          d("LiveChatPluginConstants").LOGIN_CHECK_INTERVAL));
        this.shouldPerformSwitchAccount &&
          ((this.shouldPerformSwitchAccount = !1),
          c("MPNStorage").clearRedirectCommand(),
          d("MPNIdentity").MPNIdentity.subscribeLoggedInUserChanges(function (
            a,
            b
          ) {
            if (b !== "0") {
              a = c("MPNStorage").getFBStorageState();
              a != null &&
                (c("MPNStorage").setFBStorageState(
                  babelHelpers["extends"]({}, a, {
                    rdr: d("MPNConstants").MPNRedirect.SHOW_LOGIN_PAGE,
                  })
                ),
                c("MPNXDMessageManager").reloadPlugin());
            }
          },
          d("LiveChatPluginConstants").LOGIN_CHECK_INTERVAL));
        return this.context.state.optimisticStorageState.visibility ==
          d("MPNConstants").MPNVisibility.NOT_HIDDEN || this.iconIframeLoaded
          ? h.jsx(c("MessagingPluginMobileRoute.react"), {
              path: this.initialPath,
              ActionDelegate: this.ActionDelegate,
              shouldShowLoginPage: b,
              shouldShowReEngagement: this.context.state.shouldShowReEngagement,
            })
          : null;
      };
      e.onAppSwitchToMessenger = function () {
        var a = this.context.state,
          b = a.appSwitchUri,
          c = a.pageID;
        a = a.hasGuestMode;
        d("MessagingPluginThreadActions").appSwitch(b);
        d("LiveChatPluginLoggerUtil").logActionFromNewUI(
          "tab_click",
          null,
          c,
          a ? "welcome_page_with_guest_option" : "welcome_page",
          { button_name: "chat_in_messenger" }
        );
      };
      e.onContinueAsGuest = function (a) {
        var b = this,
          e = this.context,
          f = e.state,
          g = e.dispatchAction,
          h = f.pageID;
        e = f.locale;
        d("CreateCustomerChatPluginGuestUserMutation").commit(
          { input: { page_id: h, locale: e } },
          {
            onSuccess: function (c) {
              c = c.create_customer_chat_plugin_guest_user;
              var e = c == null ? void 0 : c.session_key,
                f = c == null ? void 0 : c.fbid,
                g = c == null ? void 0 : c.access_token;
              c = c == null ? void 0 : c.is_lightswitch_enabled;
              e != null &&
                f != null &&
                g != null &&
                c != null &&
                (d("MessagingPluginThreadActions").startChatAsGuest(
                  b.context,
                  g,
                  f,
                  c
                ),
                a(f, g));
            },
            onFailure: function (a) {
              g({
                type: "CLEAR_GUEST_SESSION",
                isLoggedIn: c("CurrentUser").isLoggedIn(),
                viewerID: c("CurrentUser").getID(),
              }),
                g({ type: "SET_ERROR", error: a }),
                d("LiveChatPluginLoggerUtil").logActionFromNewUI(
                  "guest_session_create_failure",
                  null,
                  h,
                  "guest_chat_tab"
                );
            },
          }
        );
      };
      return b;
    })(h.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MessagingPluginMobileRoot",
  [
    "cx",
    "CometBlueBridgeKeyCommandListener.react",
    "LiveChatPluginErrorBoundary.react",
    "MPNCacheVersioning",
    "MPNConstants",
    "MPNIdentity",
    "MPNLocalState",
    "MPNStorage",
    "MPNXDMessageManager",
    "MessagingPluginMobileWrapper.react",
    "MessagingPluginPathUtils",
    "MessagingPluginStateProvider",
    "ReactDOM",
    "URI",
    "performanceAbsoluteNow",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = (function () {
      function a(a) {
        var b = a.alignment,
          c = a.pageID,
          d = a.container,
          e = a.serverTime,
          f = a.clientRequestTime,
          g = a.pagePassesSentryTest,
          h = a.hasMessagingPermission,
          i = a.isMuted,
          j = a.isPageBlocked,
          k = a.requestID,
          l = a.refererUri,
          m = a.originDomain,
          n = a.soundURLs,
          o = a.hasGuestMode,
          p = a.showUpgradeUpsellPrompt,
          q = a.hasAutomation,
          r = a.appSwitchUri,
          s = a.upgradeAppSwitchUri,
          t = a.isBusinessActive,
          u = a.storedStates,
          v = a.isComposerDisabled,
          w = a.hasPersistentMenu,
          x = a.pageName,
          y = a.pageProfilePictureUri,
          z = a.viewerProfilePicureUri,
          A = a.pageResponsiveness,
          B = a.refParam,
          C = a.pageVerifiedStatus,
          D = a.greetingDialogDelay,
          E = a.greetingDialogDisplay,
          F = a.loggedInGreeting,
          G = a.loggedOutGreeting,
          H = a.threadCSSColor,
          I = a.entryPointIconSVG,
          J = a.entryPointIconEnum,
          aa = a.entryPointLabel,
          ba = a.locale,
          ca = a.icebreakers,
          da = a.icebreakerCtas,
          ea = a.bottomSpacing,
          fa = a.sideSpacing,
          ga = a.mobileOptin,
          ha = a.isPageInEU,
          K = a.isLoadedByFacade,
          L = a.isSanitizedEpd3pdRequest,
          ia = a.shouldShowEntryPointCustomization,
          M = a.shouldShowMobileInWebChat,
          N = a.shouldShowReEngagement,
          O = a.shouldBypassPageSentryTest,
          P = a.shouldUseAccessTokenAuth,
          ja = a.entryPointSize,
          Q = a.awayHoursEnabled,
          ka = a.awayGreeting,
          la = a.isPageAway,
          ma = a.nextAvailableTimestamp,
          na = a.optInMessageEnabled,
          oa = a.optInMessageCadence,
          R = a.collapsedOptInMessageTitle,
          pa = a.expandedOptInMessageTitle,
          qa = a.collapsedOptInMessageText;
        a = a.expandedOptInMessageText;
        try {
          this.$1(
            b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            r,
            s,
            t,
            o,
            p,
            q,
            u,
            v,
            w,
            x,
            y,
            z,
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H,
            I,
            J,
            aa,
            ba,
            ca,
            da,
            ea,
            fa,
            ga,
            ha,
            K,
            L,
            ia,
            M,
            N,
            O,
            P,
            ja,
            Q,
            ka,
            la,
            ma,
            na,
            oa,
            R,
            pa,
            qa,
            a
          );
        } catch (a) {}
      }
      var b = a.prototype;
      b.$1 = function (
        a,
        b,
        e,
        f,
        g,
        h,
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
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        aa,
        ba,
        ca,
        da,
        ea,
        fa,
        ga,
        ha,
        K,
        L,
        ia,
        M,
        N,
        O,
        P,
        ja,
        Q,
        ka,
        la,
        ma,
        na,
        oa,
        R,
        pa,
        qa,
        ra,
        sa,
        ta
      ) {
        var ua = !1;
        c("MPNStorage").initialize(o, b, m);
        d("MPNIdentity").MPNIdentity.hasStorageAccess(function (S) {
          var T, U;
          d("MPNIdentity").MPNIdentity.init(S, M);
          var va = m,
            V = w;
          V &&
            (d("MPNCacheVersioning").isLatestVersion(V.v) ||
              (c("MPNStorage").clearThirdPartyStorageState(), (V = null)));
          T = (T = V) == null ? void 0 : T.rdet;
          T = c("MPNStorage").getShouldRenderReEngagementDialog(P, R, T);
          U =
            (U = (U = V) == null ? void 0 : U.isGreetingDismissed) != null
              ? U
              : !1;
          (!V || !V.path || !V.chatState) &&
            ((V = c("MPNStorage").getDefaultOptimisticStorageState(
              !0,
              G,
              F,
              T,
              P,
              U
            )),
            c("MPNStorage").setThirdPartyStorageState(V));
          var wa = !1,
            xa,
            ya,
            W = V.visibility,
            X = V.shouldShowLoginPage,
            Y = V.isReEngagementOptIn;
          if (S) {
            var Z,
              $ = c("MPNStorage").getFBStorageState();
            Z = (Z = $) == null ? void 0 : Z.rdr;
            Z == null &&
              !d("MPNCacheVersioning").isLatestVersion(
                (Z = $) == null ? void 0 : Z.v
              ) &&
              (c("MPNStorage").clearFBStorageState(),
              ($ = c("MPNStorage").getFBStorageState()));
            c("MPNStorage").isAccessTokenExpired() &&
              (c("MPNStorage").clearFBStorageState(),
              (V = c("MPNStorage").getDefaultOptimisticStorageState(
                !0,
                G,
                F,
                T,
                P,
                U
              )),
              c("MPNStorage").setThirdPartyStorageState(V));
            if ($ != null && $.requestID != null && $.requestID != "") {
              Z = $.requestID;
              ($.rdr === d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION ||
                $.rdr === d("MPNConstants").MPNRedirect.ITP_CONTINUE_SESSION) &&
                ((va = Z), c("MPNStorage").initialize(o, b, Z));
            }
            ua = c("MPNStorage").setInitialStateIfNecessary(!0, W, G, X, Y, T);
            $ = c("MPNStorage").getFBStorageState();
            if ($ != null) {
              wa =
                $.chatState != d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED;
              xa = $.accessToken;
              ya = $.userID;
              W = $.visibility;
              V = babelHelpers["extends"]({}, V, {
                path: $.currentPath,
                chatState: $.chatState,
                visibility: $.visibility,
                showUpgradePrompt:
                  (Z = $.showUpgradePrompt) != null
                    ? Z
                    : d("MPNConstants").MPNUpgradePrompt.NOT_SHOWN,
                greetingVisibility: $.greetingVisibility,
              });
              c("MPNStorage").setThirdPartyStorageState(V);
            }
          }
          X = c("MPNStorage").getFBStorageState();
          Y = d("MessagingPluginPathUtils").getMobileDisplayPathFromStoredState(
            S,
            V,
            M,
            X,
            T,
            G === "show"
          );
          Z =
            Y ===
              d("MessagingPluginPathUtils").MPN_PATH.REENGAGEMENT_COLLAPSED ||
            Y === d("MessagingPluginPathUtils").MPN_PATH.REENGAGEMENT_EXPANDED;
          if (
            Z &&
            !T &&
            (X == null ? void 0 : X.rdr) !==
              d("MPNConstants").MPNRedirect.RE_ENGAGEMENT_LOG_IN
          ) {
            $ = c("MPNStorage").getDefaultPath(!0, W, G, T);
            Y = d(
              "MessagingPluginPathUtils"
            ).MessagingPluginPathUtils.toMobilePath($);
            c("MPNXDMessageManager").updatePath($);
          }
          if (P) {
            S = c("MPNStorage").getDefaultVisibility(
              {
                visibility: V.visibility,
                greetingVisibility: d("MPNConstants").MPNVisibility.HIDDEN,
              },
              d("MessagingPluginPathUtils").MessagingPluginPathUtils.toEnumPath(
                Y
              ),
              P,
              G,
              U,
              !0
            );
            Y === d("MessagingPluginPathUtils").MPN_PATH.BUBBLE
              ? ((V = babelHelpers["extends"]({}, V, {
                  visibility: S.visibility,
                  greetingVisibility: S.greetingVisibility,
                })),
                c("MPNStorage").setThirdPartyStorageState(V))
              : Y ===
                d("MessagingPluginPathUtils").MPN_PATH.REENGAGEMENT_COLLAPSED
              ? ((V = babelHelpers["extends"]({}, V, {
                  path: d(
                    "MessagingPluginPathUtils"
                  ).MessagingPluginPathUtils.toEnumPath(Y),
                  visibility: d("MPNConstants").MPNVisibility.NOT_HIDDEN,
                  greetingVisibility: S.greetingVisibility,
                })),
                c("MPNStorage").setThirdPartyStorageState(V))
              : ((V = babelHelpers["extends"]({}, V, {
                  greetingVisibility: d("MPNConstants").MPNVisibility.HIDDEN,
                })),
                c("MPNStorage").setThirdPartyStorageState(V));
          }
          O &&
            K === "chat_tab" &&
            d("MPNIdentity").MPNIdentity.subscribeLoggedInUserChanges(function (
              a,
              b
            ) {
              d("MPNIdentity").MPNIdentity.currentUserState() !=
                d("MPNIdentity").MPNIdentityState.GUEST &&
                (c("MPNStorage").clearFBStorageState(),
                c("MPNStorage").clearThirdPartyStorageState()),
                c("MPNXDMessageManager").reloadPlugin();
            });
          Z = {
            pageID: b,
            pageName: z,
            pagePassesSentryTest: h,
            hasMessagingPermission: j,
            isMuted: k,
            isPageBlocked: l,
            pageProfilePictureUri: A,
            viewerProfilePicureUri: B,
            threadCSSColor: J,
            entryPointIconSVG: aa,
            entryPointIconEnum: ba,
            entryPointLabel: ca,
            pageResponsiveness: C,
            isComposerDisabled: x,
            hasActiveAutomation: !1,
            hasPersistentMenu: y,
            greetingDialogDelay: F,
            greetingDialogDisplay: G,
            loggedInGreeting: H,
            loggedOutGreeting: I,
            alignment: a,
            refParam: D,
            refererUri: n,
            originDomain: o,
            appSwitchUri: q,
            upgradeAppSwitchUri: r,
            isBusinessActive: s,
            requestID: va,
            locale: da,
            icebreakers: ea,
            icebreakerCtas: fa,
            pageVerifiedStatus: E,
            initialRequestUri: c("URI").getRequestURI(),
            bottomSpacing: ga,
            sideSpacing: ha,
            mobileOptin: K,
            chatStarted: wa,
            accessToken: xa,
            guestID: ya,
            optimisticStorageState: V,
            soundURLs: p,
            isInitialLoad: ua,
            hasGuestMode: t,
            showUpgradeUpsellPrompt: u,
            pluginMountTime: c("performanceAbsoluteNow")(),
            serverTime: f,
            clientRequestTime: g,
            upgradeUpsellPrompt: d("MPNConstants").MPNUpgradePrompt.NOT_SHOWN,
            cookieAccessDenied: !1,
            hasAutomation: v && !L,
            isPageInEU: L,
            isLoadedByFacade: ia,
            isLightswitchEnabledForGuest: !1,
            isSanitizedEpd3pdRequest: M,
            shouldShowEntryPointCustomization: N,
            shouldShowMobileInWebChat: O,
            shouldShowReEngagement: P,
            shouldUseAccessTokenAuth: Q,
            entryPointSize: ka,
            awayHoursEnabled: la,
            awayGreeting: ma,
            isPageAway: na,
            nextAvailableTimestamp: oa,
            optInMessageEnabled: R,
            optInMessageCadence: pa,
            collapsedOptInMessageTitle: qa,
            expandedOptInMessageTitle: ra,
            collapsedOptInMessageText: sa,
            expandedOptInMessageText: ta,
            shouldRenderReEngagementDialog: T,
            shouldBypassPageSentryTest: ja,
          };
          c("MPNXDMessageManager").setShouldShowEntryPointCustomization(N);
          (X = document.body) == null
            ? void 0
            : (W = X.classList) == null
            ? void 0
            : W.add("_a2w-");
          ($ = document.body) == null
            ? void 0
            : (U = $.classList) == null
            ? void 0
            : U.add("_95rw");
          d("ReactDOM").render(
            i.jsx(c("LiveChatPluginErrorBoundary.react"), {
              pageID: b,
              shouldUseNewDomain: Q,
              children: i.jsx(c("CometBlueBridgeKeyCommandListener.react"), {
                children: i.jsx(c("MessagingPluginStateProvider"), {
                  initialState: Z,
                  children: i.jsx(c("MessagingPluginMobileWrapper.react"), {
                    path: Y,
                    redirectCommand: c("MPNStorage").getRedirectCommand(),
                  }),
                }),
              }),
            }),
            e
          );
        }, O && K === "chat_tab");
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
