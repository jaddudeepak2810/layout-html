/*FB_PKG_DELIM*/

__d(
  "debounceCore",
  ["TimeSlice"],
  function (a, b, c, d, e, f, g) {
    function a(a, b, d, e, f, g) {
      d === void 0 && (d = null);
      e === void 0 && (e = setTimeout);
      f === void 0 && (f = clearTimeout);
      g === void 0 && (g = !1);
      var h,
        i = !0;
      function j() {
        for (var k = arguments.length, l = new Array(k), m = 0; m < k; m++)
          l[m] = arguments[m];
        var n;
        if (g) {
          n = c("TimeSlice").guard(function () {
            (i = !0), (h = null);
          }, "debounceCore");
          if (!i) {
            f(h);
            h = e(n, b);
            return;
          }
          i = !1;
          a.apply(d, l);
        } else
          j.reset(),
            (n = c("TimeSlice").guard(function () {
              (h = null), a.apply(d, l);
            }, "debounceCore"));
        n.__SMmeta = a.__SMmeta;
        h = e(n, b);
      }
      j.reset = function () {
        f(h), (h = null), (i = !0);
      };
      j.isPending = function () {
        return h != null;
      };
      return j;
    }
    g["default"] = a;
  },
  98
);
__d(
  "debounce",
  ["clearTimeout", "debounceCore", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    function a(a, b, d, e, f) {
      b === void 0 && (b = 100);
      var g = function (a, b, d) {
        return c("setTimeout")(a, b, d, !e);
      };
      return c("debounceCore")(a, b, d, g, c("clearTimeout"), f);
    }
    g["default"] = a;
  },
  98
);
__d(
  "filterNulls",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = [];
      for (
        var a = a,
          c = Array.isArray(a),
          d = 0,
          a = c
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var e;
        if (c) {
          if (d >= a.length) break;
          e = a[d++];
        } else {
          d = a.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        e != null && b.push(e);
      }
      return b;
    }
    f["default"] = a;
  },
  66
);
