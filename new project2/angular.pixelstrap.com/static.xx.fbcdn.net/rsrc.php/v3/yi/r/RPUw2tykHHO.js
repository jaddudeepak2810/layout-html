/*FB_PKG_DELIM*/

__d(
  "EventListener",
  ["cr:1353359"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1353359");
  },
  98
);
__d(
  "React.classic",
  ["cr:1292365"],
  function (a, b, c, d, e, f) {
    e.exports = b("cr:1292365");
  },
  null
);
__d(
  "ReactDOM.classic",
  ["cr:5277"],
  function (a, b, c, d, e, f) {
    e.exports = b("cr:5277");
  },
  null
);
__d(
  "ReactDOM.classic.prod-or-profiling",
  ["cr:5278"],
  function (a, b, c, d, e, f) {
    e.exports = b("cr:5278");
  },
  null
);
__d(
  "React-prod.classic",
  ["ReactFeatureFlags"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = Symbol["for"]("react.element"),
      h = Symbol["for"]("react.portal"),
      i = Symbol["for"]("react.fragment"),
      j = Symbol["for"]("react.strict_mode"),
      k = Symbol["for"]("react.profiler"),
      l = Symbol["for"]("react.provider"),
      m = Symbol["for"]("react.context"),
      n = Symbol["for"]("react.server_context"),
      o = Symbol["for"]("react.forward_ref"),
      p = Symbol["for"]("react.suspense"),
      q = Symbol["for"]("react.suspense_list"),
      r = Symbol["for"]("react.memo"),
      s = Symbol["for"]("react.lazy"),
      t = Symbol["for"]("react.scope"),
      u = Symbol["for"]("react.debug_trace_mode"),
      v = Symbol["for"]("react.offscreen"),
      w = Symbol["for"]("react.legacy_hidden"),
      x = Symbol["for"]("react.cache"),
      y = Symbol["for"]("react.tracing_marker"),
      z = Symbol["for"]("react.default_value"),
      A = typeof Symbol === "function" ? Symbol.iterator : "@@iterator";
    function B(a) {
      if (null === a || "object" !== typeof a) return null;
      a = (A && a[A]) || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var C = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      D = Object.assign,
      E = {};
    function a(a, b, c) {
      (this.props = a),
        (this.context = b),
        (this.refs = E),
        (this.updater = c || C);
    }
    a.prototype.isReactComponent = {};
    a.prototype.setState = function (a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    a.prototype.forceUpdate = function (a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function c() {}
    c.prototype = a.prototype;
    function d(a, b, c) {
      (this.props = a),
        (this.context = b),
        (this.refs = E),
        (this.updater = c || C);
    }
    c = d.prototype = new c();
    c.constructor = d;
    D(c, a.prototype);
    c.isPureReactComponent = !0;
    var F = Array.isArray,
      G = b("ReactFeatureFlags").enableTransitionTracing,
      H = Object.prototype.hasOwnProperty,
      I = { current: null },
      J = { key: !0, ref: !0, __self: !0, __source: !0 };
    function K(a, b, c) {
      var d,
        e = {},
        f = null,
        h = null;
      if (null != b)
        for (d in (void 0 !== b.ref && (h = b.ref),
        void 0 !== b.key && (f = "" + b.key),
        b))
          H.call(b, d) &&
            !Object.prototype.hasOwnProperty.call(J, d) &&
            (e[d] = b[d]);
      var i = arguments.length - 2;
      if (1 === i) e.children = c;
      else if (1 < i) {
        for (var j = Array(i), k = 0; k < i; k++) j[k] = arguments[k + 2];
        e.children = j;
      }
      if (a && a.defaultProps)
        for (d in ((i = a.defaultProps), i)) void 0 === e[d] && (e[d] = i[d]);
      return {
        $$typeof: g,
        type: a,
        key: f,
        ref: h,
        props: e,
        _owner: I.current,
      };
    }
    function L(a, b) {
      return {
        $$typeof: g,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner,
      };
    }
    function M(a) {
      return "object" === typeof a && null !== a && a.$$typeof === g;
    }
    function aa(a) {
      var b = { "=": "=0", ":": "=2" };
      return (
        "$" +
        a.replace(/[=:]/g, function (a) {
          return b[a];
        })
      );
    }
    var N = /\/+/g;
    function O(a, b) {
      return "object" === typeof a && null !== a && null != a.key
        ? aa("" + a.key)
        : b.toString(36);
    }
    function P(a, b, c, d, e) {
      var f = typeof a;
      ("undefined" === f || "boolean" === f) && (a = null);
      var i = !1;
      if (null === a) i = !0;
      else
        switch (f) {
          case "string":
          case "number":
            i = !0;
            break;
          case "object":
            switch (a.$$typeof) {
              case g:
              case h:
                i = !0;
            }
        }
      if (i)
        return (
          (i = a),
          (e = e(i)),
          (a = "" === d ? "." + O(i, 0) : d),
          F(e)
            ? ((c = ""),
              null != a && (c = a.replace(N, "$&/") + "/"),
              P(e, b, c, "", function (a) {
                return a;
              }))
            : null != e &&
              (M(e) &&
                (e = L(
                  e,
                  c +
                    (!e.key || (i && i.key === e.key)
                      ? ""
                      : ("" + e.key).replace(N, "$&/") + "/") +
                    a
                )),
              b.push(e)),
          1
        );
      i = 0;
      d = "" === d ? "." : d + ":";
      if (F(a))
        for (var j = 0; j < a.length; j++) {
          f = a[j];
          var k = d + O(f, j);
          i += P(f, b, c, k, e);
        }
      else if (((k = B(a)), "function" === typeof k))
        for (a = k.call(a), j = 0; !(f = a.next()).done; )
          (f = f.value), (k = d + O(f, j++)), (i += P(f, b, c, k, e));
      else if ("object" === f)
        throw (
          ((b = String(a)),
          Error(
            "Objects are not valid as a React child (found: " +
              ("[object Object]" === b
                ? "object with keys {" + Object.keys(a).join(", ") + "}"
                : b) +
              "). If you meant to render a collection of children, use an array instead."
          ))
        );
      return i;
    }
    function Q(a, b, c) {
      if (null == a) return a;
      var d = [],
        e = 0;
      P(a, d, "", "", function (a) {
        return b.call(c, a, e++);
      });
      return d;
    }
    function ba(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(
          function (b) {
            (0 === a._status || -1 === a._status) &&
              ((a._status = 1), (a._result = b));
          },
          function (b) {
            (0 === a._status || -1 === a._status) &&
              ((a._status = 2), (a._result = b));
          }
        );
        -1 === a._status && ((a._status = 0), (a._result = b));
      }
      if (1 === a._status) return a._result["default"];
      throw a._result;
    }
    var R = { current: null };
    function ca() {
      return new WeakMap();
    }
    function S() {
      return { s: 0, v: void 0, o: null, p: null };
    }
    var T = { current: null };
    function e() {
      return T.current.useTransition();
    }
    function U(a) {
      return T.current.useDeferredValue(a);
    }
    function V(a, b, c) {
      return T.current.useMutableSource(a, b, c);
    }
    var W = { transition: null };
    c = {
      ReactCurrentDispatcher: T,
      ReactCurrentCache: R,
      ReactCurrentBatchConfig: W,
      ReactCurrentOwner: I,
      ContextRegistry: {},
    };
    var X = c.ContextRegistry;
    function Y(a, b) {
      return {
        _getVersion: b,
        _source: a,
        _workInProgressVersionPrimary: null,
        _workInProgressVersionSecondary: null,
      };
    }
    function Z(a, b) {
      var c = W.transition;
      W.transition = {};
      G &&
        void 0 !== b &&
        void 0 !== b.name &&
        ((W.transition.name = b.name), (W.transition.startTime = -1));
      try {
        a();
      } finally {
        W.transition = c;
      }
    }
    var da = c.ReactCurrentOwner,
      ea = { key: !0, ref: !0, __self: !0, __source: !0 };
    function $(a, b, c) {
      var d = {},
        e = null,
        f = null;
      void 0 !== c && (e = "" + c);
      void 0 !== b.key && (e = "" + b.key);
      void 0 !== b.ref && (f = b.ref);
      for (c in b)
        H.call(b, c) &&
          !Object.prototype.hasOwnProperty.call(ea, c) &&
          (d[c] = b[c]);
      if (a && a.defaultProps)
        for (c in ((b = a.defaultProps), b)) void 0 === d[c] && (d[c] = b[c]);
      return {
        $$typeof: g,
        type: a,
        key: e,
        ref: f,
        props: d,
        _owner: da.current,
      };
    }
    f.Children = {
      map: Q,
      forEach: function (a, b, c) {
        Q(
          a,
          function () {
            b.apply(this, arguments);
          },
          c
        );
      },
      count: function (a) {
        var b = 0;
        Q(a, function () {
          b++;
        });
        return b;
      },
      toArray: function (a) {
        return (
          Q(a, function (a) {
            return a;
          }) || []
        );
      },
      only: function (a) {
        if (!M(a))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return a;
      },
    };
    f.Component = a;
    f.Fragment = i;
    f.Profiler = k;
    f.PureComponent = d;
    f.StrictMode = j;
    f.Suspense = p;
    f.SuspenseList = q;
    f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c;
    f.cache = function (a) {
      return function () {
        var b = R.current;
        if (!b) return a.apply(null, arguments);
        var c = b.getCacheForType(ca);
        b = c.get(a);
        void 0 === b && ((b = S()), c.set(a, b));
        c = 0;
        for (var d = arguments.length; c < d; c++) {
          var e = arguments[c];
          if (
            "function" === typeof e ||
            ("object" === typeof e && null !== e)
          ) {
            var f = b.o;
            null === f && (b.o = f = new WeakMap());
            b = f.get(e);
            void 0 === b && ((b = S()), f.set(e, b));
          } else
            (f = b.p),
              null === f && (b.p = f = new Map()),
              (b = f.get(e)),
              void 0 === b && ((b = S()), f.set(e, b));
        }
        if (1 === b.s) return b.v;
        if (2 === b.s) throw b.v;
        try {
          var g = a.apply(null, arguments);
          c = b;
          c.s = 1;
          return (c.v = g);
        } catch (a) {
          throw ((g = b), (g.s = 2), (g.v = a), a);
        }
      };
    };
    f.cloneElement = function (a, b, c) {
      if (null === a || void 0 === a)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            a +
            "."
        );
      var d = D({}, a.props),
        e = a.key,
        f = a.ref,
        h = a._owner;
      if (null != b) {
        void 0 !== b.ref && ((f = b.ref), (h = I.current));
        void 0 !== b.key && (e = "" + b.key);
        if (a.type && a.type.defaultProps) var i = a.type.defaultProps;
        for (j in b)
          H.call(b, j) &&
            !Object.prototype.hasOwnProperty.call(J, j) &&
            (d[j] = void 0 === b[j] && void 0 !== i ? i[j] : b[j]);
      }
      var j = arguments.length - 2;
      if (1 === j) d.children = c;
      else if (1 < j) {
        i = Array(j);
        for (var k = 0; k < j; k++) i[k] = arguments[k + 2];
        d.children = i;
      }
      return { $$typeof: g, type: a.type, key: e, ref: f, props: d, _owner: h };
    };
    f.createContext = function (a) {
      a = {
        $$typeof: m,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      };
      a.Provider = { $$typeof: l, _context: a };
      return (a.Consumer = a);
    };
    f.createElement = K;
    f.createFactory = function (a) {
      var b = K.bind(null, a);
      b.type = a;
      return b;
    };
    f.createMutableSource = Y;
    f.createRef = function () {
      return { current: null };
    };
    f.createServerContext = function (a, b) {
      var c = !0;
      if (!X[a]) {
        c = !1;
        var d = {
          $$typeof: n,
          _currentValue: b,
          _currentValue2: b,
          _defaultValue: b,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _globalName: a,
        };
        d.Provider = { $$typeof: l, _context: d };
        X[a] = d;
      }
      d = X[a];
      if (d._defaultValue === z)
        (d._defaultValue = b),
          d._currentValue === z && (d._currentValue = b),
          d._currentValue2 === z && (d._currentValue2 = b);
      else if (c) throw Error("ServerContext: " + a + " already defined");
      return d;
    };
    f.experimental_useEvent = function (a) {
      return T.current.useEvent(a);
    };
    f.forwardRef = function (a) {
      return { $$typeof: o, render: a };
    };
    f.isValidElement = M;
    f.jsx = $;
    f.jsxDEV = void 0;
    f.jsxs = $;
    f.lazy = function (a) {
      return { $$typeof: s, _payload: { _status: -1, _result: a }, _init: ba };
    };
    f.memo = function (a, b) {
      return { $$typeof: r, type: a, compare: void 0 === b ? null : b };
    };
    f.startTransition = Z;
    f.unstable_Cache = x;
    f.unstable_DebugTracingMode = u;
    f.unstable_LegacyHidden = w;
    f.unstable_Offscreen = v;
    f.unstable_Scope = t;
    f.unstable_SuspenseList = q;
    f.unstable_TracingMarker = y;
    f.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    };
    f.unstable_createMutableSource = Y;
    f.unstable_getCacheForType = function (a) {
      var b = R.current;
      return b ? b.getCacheForType(a) : a();
    };
    f.unstable_getCacheSignal = function () {
      var a = R.current;
      return a
        ? a.getCacheSignal()
        : ((a = new AbortController()),
          a.abort(
            Error(
              "This CacheSignal was requested outside React which means that it is immediately aborted."
            )
          ),
          a.signal);
    };
    f.unstable_startTransition = Z;
    f.unstable_useCacheRefresh = function () {
      return T.current.useCacheRefresh();
    };
    f.unstable_useDeferredValue = U;
    f.unstable_useMemoCache = function (a) {
      return T.current.useMemoCache(a);
    };
    f.unstable_useMutableSource = V;
    f.unstable_useTransition = e;
    f.use = function (a) {
      return T.current.use(a);
    };
    f.useCallback = function (a, b) {
      return T.current.useCallback(a, b);
    };
    f.useContext = function (a) {
      return T.current.useContext(a);
    };
    f.useDebugValue = function () {};
    f.useDeferredValue = U;
    f.useEffect = function (a, b) {
      return T.current.useEffect(a, b);
    };
    f.useId = function () {
      return T.current.useId();
    };
    f.useImperativeHandle = function (a, b, c) {
      return T.current.useImperativeHandle(a, b, c);
    };
    f.useInsertionEffect = function (a, b) {
      return T.current.useInsertionEffect(a, b);
    };
    f.useLayoutEffect = function (a, b) {
      return T.current.useLayoutEffect(a, b);
    };
    f.useMemo = function (a, b) {
      return T.current.useMemo(a, b);
    };
    f.useMutableSource = V;
    f.useReducer = function (a, b, c) {
      return T.current.useReducer(a, b, c);
    };
    f.useRef = function (a) {
      return T.current.useRef(a);
    };
    f.useState = function (a) {
      return T.current.useState(a);
    };
    f.useSyncExternalStore = function (a, b, c) {
      return T.current.useSyncExternalStore(a, b, c);
    };
    f.useTransition = e;
    f.version = "18.3.0-www-classic-b14d7fa4b-20221209";
  },
  null
);
