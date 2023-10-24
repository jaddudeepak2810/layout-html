"use strict";
(self.webpackChunkmultikart = self.webpackChunkmultikart || []).push([
  [68],
  {
    57068: (cn, Ze, u) => {
      u.r(Ze), u.d(Ze, { HomeModule: () => ae });
      var s = u(36895),
        ke = u(44466),
        d = u(5992),
        g = u(53225),
        e = u(94650),
        m = u(90773),
        c = u(32474),
        l = u(24826),
        U = u(23618),
        x = u(71965),
        q = u(79320),
        p = u(24006);
      const Se = ["newsletter"];
      function Fe(n, i) {
        if (1 & n) {
          const o = e.EpF();
          e.TgZ(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(
            4,
            "div",
            6
          )(5, "div", 7)(6, "button", 8),
            e.NdJ("click", function () {
              const a = e.CHM(o).$implicit;
              return e.KtG(a.dismiss("Cross click"));
            }),
            e.TgZ(7, "span", 9),
            e._uU(8, "\xd7"),
            e.qZA()(),
            e.TgZ(9, "div", 10),
            e._UZ(10, "img", 11),
            e.TgZ(11, "h2"),
            e._uU(12, "newsletter"),
            e.qZA(),
            e.TgZ(13, "form", 12)(14, "div", 13),
            e._UZ(15, "input", 14),
            e.TgZ(16, "button", 15),
            e._uU(17, "subscribe"),
            e.qZA()()()()()()()()()();
        }
      }
      class J {
        constructor(i, o) {
          (this.platformId = i), (this.modalService = o), (this.modalOpen = !1);
        }
        ngOnInit() {}
        ngAfterViewInit() {
          "true" !== localStorage.getItem("newsletter") && this.openModal(),
            localStorage.setItem("newsletter", "true");
        }
        openModal() {
          (0, s.NF)(this.platformId) &&
            this.modalService
              .open(this.NewsLetterModal, {
                size: "lg",
                ariaLabelledBy: "NewsLetter-Modal",
                centered: !0,
                windowClass: "theme-modal newsletterm NewsLetterModal",
              })
              .result.then(
                (i) => {
                  this.modalOpen = !0;
                },
                (i) => {
                  this.closeResult = `Dismissed ${this.getDismissReason(i)}`;
                }
              );
        }
        getDismissReason(i) {
          return i === c.If.ESC
            ? "by pressing ESC"
            : i === c.If.BACKDROP_CLICK
            ? "by clicking on a backdrop"
            : `with: ${i}`;
        }
        ngOnDestroy() {
          this.modalOpen && this.modalService.dismissAll();
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || J)(e.Y36(e.Lbi), e.Y36(c.FF));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: J,
          selectors: [["app-newsletter"]],
          viewQuery: function (o, t) {
            if ((1 & o && e.Gf(Se, 5), 2 & o)) {
              let r;
              e.iGM((r = e.CRH())) && (t.NewsLetterModal = r.first);
            }
          },
          decls: 2,
          vars: 0,
          consts: [
            ["class", "theme-modal"],
            ["newsletter", ""],
            [1, "modal-content"],
            [1, "modal-body", "modal7"],
            [1, "container-fluid", "p-0"],
            [1, "row"],
            [1, "col-12"],
            [1, "modal-bg"],
            ["type", "button", "aria-label", "Close", 1, "close", 3, "click"],
            ["aria-hidden", "true"],
            [1, "offer-content"],
            [
              "src",
              "assets/images/offer-banner-1.png",
              "alt",
              "",
              1,
              "img-fluid",
            ],
            [
              "action",
              "https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&id=082f74cbda",
              "method",
              "post",
              "id",
              "mc-embedded-subscribe-form",
              "name",
              "mc-embedded-subscribe-form",
              "target",
              "_blank",
              1,
              "auth-form",
              "needs-validation",
            ],
            [1, "form-group", "mx-sm-3"],
            [
              "type",
              "text",
              "name",
              "EMAIL",
              "id",
              "mce-EMAIL",
              "placeholder",
              "Enter your email",
              "required",
              "required",
              1,
              "form-control",
            ],
            ["type", "submit", "id", "mc-submit", 1, "btn", "btn-solid"],
          ],
          template: function (o, t) {
            1 & o && e.YNc(0, Fe, 18, 0, "ng-template", 0, 1, e.W1O);
          },
          dependencies: [p._Y, p.JL, p.F],
        }));
      }
      const Oe = function (n) {
          return { "background-image": n };
        },
        Me = function () {
          return ["/shop/collection/left/sidebar"];
        },
        Ne = function (n) {
          return { category: n };
        };
      function Ie(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(
              4,
              "div",
              7
            )(5, "div")(6, "h4"),
            e._uU(7),
            e.qZA(),
            e.TgZ(8, "h1"),
            e._uU(9),
            e.qZA(),
            e.TgZ(10, "a", 8),
            e._uU(11),
            e.qZA()()()()()()()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.Q6J("ngClass", t.textClass)(
            "ngStyle",
            e.VKq(8, Oe, "url(" + o.image + ")")
          ),
            e.xp6(7),
            e.Oqu(o.title),
            e.xp6(2),
            e.Oqu(o.subTitle),
            e.xp6(1),
            e.Q6J("routerLink", e.DdM(10, Me))(
              "queryParams",
              e.VKq(11, Ne, t.category)
            )("ngClass", t.buttonClass),
            e.xp6(1),
            e.hij(" ", t.buttonText, " ");
        }
      }
      function Pe(n, i) {
        1 & n && (e.ynx(0), e.YNc(1, Ie, 12, 13, "ng-template", 2), e.BQk());
      }
      class f {
        constructor() {
          this.HomeSliderConfig = g.TU;
        }
        ngOnInit() {}
        static #e = (this.ɵfac = function (o) {
          return new (o || f)();
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: f,
          selectors: [["app-slider"]],
          inputs: {
            sliders: "sliders",
            class: "class",
            textClass: "textClass",
            category: "category",
            buttonText: "buttonText",
            buttonClass: "buttonClass",
          },
          decls: 2,
          vars: 3,
          consts: [
            [1, "home-slider", 3, "options", "ngClass"],
            [4, "ngFor", "ngForOf"],
            ["carouselSlide", ""],
            [1, "home", 3, "ngClass", "ngStyle"],
            [1, "container"],
            [1, "row"],
            [1, "col"],
            [1, "slider-contain"],
            [1, "btn", "btn-solid", 3, "routerLink", "queryParams", "ngClass"],
          ],
          template: function (o, t) {
            1 & o &&
              (e.TgZ(0, "owl-carousel-o", 0),
              e.YNc(1, Pe, 2, 0, "ng-container", 1),
              e.qZA()),
              2 & o &&
                (e.Q6J("options", t.HomeSliderConfig)("ngClass", t.class),
                e.xp6(1),
                e.Q6J("ngForOf", t.sliders));
          },
          dependencies: [s.mk, s.sg, s.PC, d.rH, l.Fy, l.Mp],
        }));
      }
      function De(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 3)(1, "a", 4)(2, "div", 5),
            e._UZ(3, "img", 6)(4, "span"),
            e.qZA()(),
            e.TgZ(5, "div", 7)(6, "h4"),
            e._uU(7),
            e.qZA(),
            e.TgZ(8, "a", 4)(9, "p"),
            e._uU(10),
            e.qZA()(),
            e._UZ(11, "hr", 8),
            e.TgZ(12, "h6"),
            e._uU(13),
            e.qZA()()()),
          2 & n)
        ) {
          const o = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J("routerLink", "/pages/blog/details"),
            e.xp6(2),
            e.Q6J("src", o.image, e.LSH),
            e.xp6(4),
            e.Oqu(o.date),
            e.xp6(1),
            e.Q6J("routerLink", "/pages/blog/details"),
            e.xp6(2),
            e.Oqu(o.title),
            e.xp6(3),
            e.AsE(" ", "by:" + o.by, " , ", "2 Comment", "");
        }
      }
      function je(n, i) {
        1 & n && (e.ynx(0), e.YNc(1, De, 14, 7, "ng-template", 2), e.BQk());
      }
      class v {
        constructor() {
          (this.blogs = []), (this.BlogSliderConfig = g.gg);
        }
        ngOnInit() {}
        static #e = (this.ɵfac = function (o) {
          return new (o || v)();
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: v,
          selectors: [["app-blog"]],
          inputs: { blogs: "blogs" },
          decls: 2,
          vars: 2,
          consts: [
            [1, "no-arrow", 3, "options"],
            [4, "ngFor", "ngForOf"],
            ["carouselSlide", ""],
            [1, "col-md-12"],
            [3, "routerLink"],
            [1, "classic-effect"],
            ["alt", "blog", 1, "img-fluid", 3, "src"],
            [1, "blog-details"],
            [1, "style1"],
          ],
          template: function (o, t) {
            1 & o &&
              (e.TgZ(0, "owl-carousel-o", 0),
              e.YNc(1, je, 2, 0, "ng-container", 1),
              e.qZA()),
              2 & o &&
                (e.Q6J("options", t.BlogSliderConfig),
                e.xp6(1),
                e.Q6J("ngForOf", t.blogs));
          },
          dependencies: [s.sg, d.rH, l.Fy, l.Mp],
        }));
      }
      function Ye(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div")(1, "div", 3)(2, "a", 4),
            e._UZ(3, "img", 5),
            e.qZA()()()),
          2 & n)
        ) {
          const o = e.oxw().$implicit;
          e.xp6(2),
            e.Q6J("routerLink", "/home/fashion"),
            e.xp6(1),
            e.Q6J("src", o.image, e.LSH);
        }
      }
      function He(n, i) {
        1 & n && (e.ynx(0), e.YNc(1, Ye, 4, 2, "ng-template", 2), e.BQk());
      }
      class T {
        constructor() {
          (this.logos = []), (this.LogoSliderConfig = g.w$);
        }
        ngOnInit() {}
        static #e = (this.ɵfac = function (o) {
          return new (o || T)();
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: T,
          selectors: [["app-logo"]],
          inputs: { logos: "logos" },
          decls: 2,
          vars: 2,
          consts: [
            [1, "no-arrow", 3, "options"],
            [4, "ngFor", "ngForOf"],
            ["carouselSlide", ""],
            [1, "logo-block"],
            [3, "routerLink"],
            ["alt", "logo", 1, "w-auto", 3, "src"],
          ],
          template: function (o, t) {
            1 & o &&
              (e.TgZ(0, "owl-carousel-o", 0),
              e.YNc(1, He, 2, 0, "ng-container", 1),
              e.qZA()),
              2 & o &&
                (e.Q6J("options", t.LogoSliderConfig),
                e.xp6(1),
                e.Q6J("ngForOf", t.logos));
          },
          dependencies: [s.sg, d.rH, l.Fy, l.Mp],
        }));
      }
      class y {
        constructor() {}
        ngOnInit() {}
        static #e = (this.ɵfac = function (o) {
          return new (o || y)();
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: y,
          selectors: [["app-services"]],
          decls: 39,
          vars: 0,
          consts: [
            [1, "row"],
            [1, "col-md-4", "service-block"],
            [1, "media"],
            [
              "xmlns",
              "http://www.w3.org/2000/svg",
              "viewBox",
              "0 -117 679.99892 679",
            ],
            [
              "d",
              "m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0",
              "fill",
              "#ff4c3b",
            ],
            [1, "media-body"],
            [
              "xmlns",
              "http://www.w3.org/2000/svg",
              0,
              "xmlns",
              "xlink",
              "http://www.w3.org/1999/xlink",
              "version",
              "1.1",
              "id",
              "Capa_1",
              "x",
              "0px",
              "y",
              "0px",
              "viewBox",
              "0 0 480 480",
              0,
              "xml",
              "space",
              "preserve",
              "width",
              "512px",
              "height",
              "512px",
              2,
              "enable-background",
              "new 0 0 480 480",
            ],
            [
              "d",
              "M472,432h-24V280c-0.003-4.418-3.588-7.997-8.006-7.994c-2.607,0.002-5.05,1.274-6.546,3.41l-112,160     c-2.532,3.621-1.649,8.609,1.972,11.14c1.343,0.939,2.941,1.443,4.58,1.444h104v24c0,4.418,3.582,8,8,8s8-3.582,8-8v-24h24     c4.418,0,8-3.582,8-8S476.418,432,472,432z M432,432h-88.64L432,305.376V432z",
              "fill",
              "#ff4c3b",
            ],
            [
              "d",
              "M328,464h-94.712l88.056-103.688c0.2-0.238,0.387-0.486,0.56-0.744c16.566-24.518,11.048-57.713-12.56-75.552     c-28.705-20.625-68.695-14.074-89.319,14.631C212.204,309.532,207.998,322.597,208,336c0,4.418,3.582,8,8,8s8-3.582,8-8     c-0.003-26.51,21.486-48.002,47.995-48.005c10.048-0.001,19.843,3.151,28.005,9.013c16.537,12.671,20.388,36.007,8.8,53.32     l-98.896,116.496c-2.859,3.369-2.445,8.417,0.924,11.276c1.445,1.226,3.277,1.899,5.172,1.9h112c4.418,0,8-3.582,8-8     S332.418,464,328,464z",
              "fill",
              "#ff4c3b",
            ],
            [
              "d",
              "M216.176,424.152c0.167-4.415-3.278-8.129-7.693-8.296c-0.001,0-0.002,0-0.003,0     C104.11,411.982,20.341,328.363,16.28,224H48c4.418,0,8-3.582,8-8s-3.582-8-8-8H16.28C20.283,103.821,103.82,20.287,208,16.288     V40c0,4.418,3.582,8,8,8s8-3.582,8-8V16.288c102.754,3.974,185.686,85.34,191.616,188l-31.2-31.2     c-3.178-3.07-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116l44.656,44.656c0.841,1.018,1.925,1.807,3.152,2.296     c0.313,0.094,0.631,0.172,0.952,0.232c0.549,0.198,1.117,0.335,1.696,0.408c0.08,0,0.152,0,0.232,0c0.08,0,0.152,0,0.224,0     c0.609-0.046,1.211-0.164,1.792-0.352c0.329-0.04,0.655-0.101,0.976-0.184c1.083-0.385,2.069-1.002,2.888-1.808l45.264-45.248     c3.069-3.178,2.982-8.242-0.196-11.312c-3.1-2.994-8.015-2.994-11.116,0l-31.976,31.952     C425.933,90.37,331.38,0.281,216.568,0.112C216.368,0.104,216.2,0,216,0s-0.368,0.104-0.568,0.112     C96.582,0.275,0.275,96.582,0.112,215.432C0.112,215.632,0,215.8,0,216s0.104,0.368,0.112,0.568     c0.199,115.917,91.939,210.97,207.776,215.28h0.296C212.483,431.847,216.013,428.448,216.176,424.152z",
              "fill",
              "#ff4c3b",
            ],
            [
              "d",
              "M323.48,108.52c-3.124-3.123-8.188-3.123-11.312,0L226.2,194.48c-6.495-2.896-13.914-2.896-20.408,0l-40.704-40.704     c-3.178-3.069-8.243-2.981-11.312,0.197c-2.994,3.1-2.994,8.015,0,11.115l40.624,40.624c-5.704,11.94-0.648,26.244,11.293,31.947     c9.165,4.378,20.095,2.501,27.275-4.683c7.219-7.158,9.078-18.118,4.624-27.256l85.888-85.888     C326.603,116.708,326.603,111.644,323.48,108.52z M221.658,221.654c-0.001,0.001-0.001,0.001-0.002,0.002     c-3.164,3.025-8.148,3.025-11.312,0c-3.125-3.124-3.125-8.189-0.002-11.314c3.124-3.125,8.189-3.125,11.314-0.002     C224.781,213.464,224.781,218.53,221.658,221.654z",
              "fill",
              "#ff4c3b",
            ],
            [
              "xmlns",
              "http://www.w3.org/2000/svg",
              "viewBox",
              "0 -14 512.00001 512",
            ],
            [
              "d",
              "m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0",
              "fill",
              "#ff4c3b",
            ],
            [
              "d",
              "m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0",
              "fill",
              "#ff4c3b",
            ],
            [
              "d",
              "m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0",
              "fill",
              "#ff4c3b",
            ],
            [
              "d",
              "m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0",
              "fill",
              "#ff4c3b",
            ],
            [
              "d",
              "m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0",
              "fill",
              "#ff4c3b",
            ],
            [
              "d",
              "m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0",
              "fill",
              "#ff4c3b",
            ],
          ],
          template: function (o, t) {
            1 & o &&
              (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2),
              e.O4$(),
              e.TgZ(3, "svg", 3),
              e._UZ(4, "path", 4),
              e.qZA(),
              e.kcU(),
              e.TgZ(5, "div", 5)(6, "h4"),
              e._uU(7, "free shipping"),
              e.qZA(),
              e.TgZ(8, "p"),
              e._uU(9, "free shipping world wide"),
              e.qZA()()()(),
              e.TgZ(10, "div", 1)(11, "div", 2),
              e.O4$(),
              e.TgZ(12, "svg", 6)(13, "g")(14, "g")(15, "g"),
              e._UZ(16, "path", 7)(17, "path", 8)(18, "path", 9)(
                19,
                "path",
                10
              ),
              e.qZA()()()(),
              e.kcU(),
              e.TgZ(20, "div", 5)(21, "h4"),
              e._uU(22, "24 X 7 service"),
              e.qZA(),
              e.TgZ(23, "p"),
              e._uU(24, "online service for new customer"),
              e.qZA()()()(),
              e.TgZ(25, "div", 1)(26, "div", 2),
              e.O4$(),
              e.TgZ(27, "svg", 11),
              e._UZ(28, "path", 12)(29, "path", 13)(30, "path", 14)(
                31,
                "path",
                15
              )(32, "path", 16)(33, "path", 17),
              e.qZA(),
              e.kcU(),
              e.TgZ(34, "div", 5)(35, "h4"),
              e._uU(36, "festival offer"),
              e.qZA(),
              e.TgZ(37, "p"),
              e._uU(38, "new online special festival offer"),
              e.qZA()()()()());
          },
        }));
      }
      const Be = function () {
          return ["/shop/collection/left/sidebar"];
        },
        ze = function () {
          return { category: "fashion" };
        };
      function $e(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 30)(1, "a", 31)(2, "div", 32),
            e._UZ(3, "img", 33),
            e.TgZ(4, "div", 34)(5, "div")(6, "h4"),
            e._uU(7),
            e.qZA(),
            e.TgZ(8, "h2"),
            e._uU(9),
            e.qZA()()()()()()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.xp6(1),
            e.Q6J("routerLink", e.DdM(5, Be))("queryParams", e.DdM(6, ze)),
            e.xp6(2),
            e.Q6J("src", o.image, e.LSH),
            e.xp6(4),
            e.Oqu(o.save),
            e.xp6(2),
            e.Oqu(o.title);
        }
      }
      function Ve(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 36), e._UZ(1, "app-product-box-one", 37), e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            )("thumbnail", !0)("cartModal", !0);
        }
      }
      function Ee(n, i) {
        1 & n && (e.ynx(0), e.YNc(1, Ve, 2, 4, "ng-template", 35), e.BQk());
      }
      function We(n, i) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "div", 36),
            e._UZ(2, "app-product-box-one", 42),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw(3);
          e.xp6(2),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function Ke(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 41),
            e.YNc(1, We, 3, 2, "ng-container", 16),
            e.ALo(2, "slice"),
            e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("ngForOf", e.Dn7(2, 1, t.getCollectionProducts(o), 0, 8));
        }
      }
      function Xe(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "li", 38)(1, "a", 39),
            e._uU(2),
            e.qZA(),
            e.YNc(3, Ke, 3, 5, "ng-template", 40),
            e.qZA()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.Q6J("ngbNavItem", o), e.xp6(2), e.hij(" ", o, " ");
        }
      }
      const Ge = function () {
        return { "background-image": "url(assets/images/parallax/1.jpg)" };
      };
      class N {
        constructor(i) {
          (this.productService = i),
            (this.products = []),
            (this.productCollections = []),
            (this.ProductSliderConfig = g.O_),
            (this.sliders = [
              {
                title: "welcome to fashion",
                subTitle: "Men fashion",
                image: "assets/images/slider/1.jpg",
              },
              {
                title: "welcome to fashion",
                subTitle: "Women fashion",
                image: "assets/images/slider/2.jpg",
              },
            ]),
            (this.collections = [
              {
                image: "assets/images/collection/fashion/1.jpg",
                save: "save 50%",
                title: "men",
              },
              {
                image: "assets/images/collection/fashion/2.jpg",
                save: "save 50%",
                title: "women",
              },
            ]),
            (this.blog = [
              {
                image: "assets/images/blog/1.jpg",
                date: "25 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/2.jpg",
                date: "26 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/3.jpg",
                date: "27 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/4.jpg",
                date: "28 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
            ]),
            (this.logo = [
              { image: "assets/images/logos/1.png" },
              { image: "assets/images/logos/2.png" },
              { image: "assets/images/logos/3.png" },
              { image: "assets/images/logos/4.png" },
              { image: "assets/images/logos/5.png" },
              { image: "assets/images/logos/6.png" },
              { image: "assets/images/logos/7.png" },
              { image: "assets/images/logos/8.png" },
            ]),
            this.productService.getProducts.subscribe((o) => {
              (this.products = o.filter((t) => "fashion" == t.type)),
                this.products.filter((t) => {
                  t.collection.filter((r) => {
                    -1 === this.productCollections.indexOf(r) &&
                      this.productCollections.push(r);
                  });
                });
            });
        }
        ngOnInit() {}
        getCollectionProducts(i) {
          return this.products.filter((o) => {
            if (o.collection.find((t) => t === i)) return o;
          });
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || N)(e.Y36(m.M));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: N,
          selectors: [["app-fashion-one"]],
          decls: 72,
          vars: 19,
          consts: [
            [3, "sticky"],
            [1, "p-0"],
            [3, "sliders", "textClass", "category", "buttonText"],
            [1, "pb-0"],
            [1, "container"],
            [1, "row", "partition2"],
            ["class", "col-md-6", 4, "ngFor", "ngForOf"],
            [1, "title1", "section-t-space"],
            [1, "title-inner1"],
            [1, "row"],
            [1, "col-lg-6", "offset-lg-3"],
            [1, "product-para"],
            [1, "text-center"],
            [1, "section-b-space", "p-t-0"],
            [1, "col"],
            [1, "product-m", "no-arrow", 3, "options"],
            [4, "ngFor", "ngForOf"],
            [
              1,
              "full-banner",
              "parallax-banner1",
              "parallax",
              "text-center",
              "p-left",
              3,
              "ngStyle",
            ],
            [1, "banner-contain"],
            [1, "col", "theme-tab"],
            [
              "ngbNav",
              "",
              1,
              "tabs",
              "tab-title",
              "justify-content-center",
              "nav",
              "nav-pills",
              3,
              "activeId",
              "activeIdChange",
            ],
            ["nav", "ngbNav"],
            [3, "ngbNavItem", 4, "ngFor", "ngForOf"],
            [1, "mt-2", 3, "ngbNavOutlet"],
            [1, "service", "border-section", "small-section"],
            [1, "blog", "p-t-0"],
            [1, "col-md-12"],
            [3, "blogs"],
            [1, "section-b-space"],
            [3, "logos"],
            [1, "col-md-6"],
            [3, "routerLink", "queryParams"],
            [1, "collection-banner", "p-right", "text-center"],
            ["alt", "collection-banner", 1, "img-fluid", 3, "src"],
            [1, "contain-banner"],
            ["carouselSlide", ""],
            [1, "product-box"],
            [3, "product", "currency", "thumbnail", "cartModal"],
            [3, "ngbNavItem"],
            ["ngbNavLink", ""],
            ["ngbNavContent", ""],
            [1, "no-slider", "row"],
            [3, "product", "currency"],
          ],
          template: function (o, t) {
            if (
              (1 & o &&
                (e._UZ(0, "app-header-one", 0),
                e.TgZ(1, "section", 1),
                e._UZ(2, "app-slider", 2),
                e.qZA(),
                e.TgZ(3, "section", 3)(4, "div", 4)(5, "div", 5),
                e.YNc(6, $e, 10, 7, "div", 6),
                e.qZA()()(),
                e.TgZ(7, "div", 7)(8, "h4"),
                e._uU(9, "special offer"),
                e.qZA(),
                e.TgZ(10, "h2", 8),
                e._uU(11, "top collection"),
                e.qZA()(),
                e.TgZ(12, "div", 4)(13, "div", 9)(14, "div", 10)(15, "div", 11)(
                  16,
                  "p",
                  12
                ),
                e._uU(
                  17,
                  " Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
                ),
                e.qZA()()()()(),
                e.TgZ(18, "section", 13)(19, "div", 4)(20, "div", 9)(
                  21,
                  "div",
                  14
                )(22, "owl-carousel-o", 15),
                e.YNc(23, Ee, 2, 0, "ng-container", 16),
                e.ALo(24, "slice"),
                e.qZA()()()()(),
                e.TgZ(25, "section", 1)(26, "div", 17)(27, "div", 4)(
                  28,
                  "div",
                  9
                )(29, "div", 14)(
                  30,
                  "div",
                  18
                )(31, "h2"),
                e._uU(32, "2018"),
                e.qZA(),
                e.TgZ(33, "h3"),
                e._uU(34, "fashion trends"),
                e.qZA(),
                e.TgZ(35, "h4"),
                e._uU(36, "special offer"),
                e.qZA()()()()()()(),
                e.TgZ(37, "div", 7)(38, "h4"),
                e._uU(39, "exclusive products"),
                e.qZA(),
                e.TgZ(40, "h2", 8),
                e._uU(41, "special products"),
                e.qZA()(),
                e.TgZ(42, "section", 13)(43, "div", 4)(44, "div", 9)(
                  45,
                  "div",
                  19
                )(46, "ul", 20, 21),
                e.NdJ("activeIdChange", function (a) {
                  return (t.active = a);
                }),
                e.YNc(48, Xe, 4, 2, "li", 22),
                e.qZA(),
                e._UZ(49, "div", 23),
                e.qZA()()()(),
                e.TgZ(50, "div", 4)(51, "section", 24),
                e._UZ(52, "app-services"),
                e.qZA()(),
                e.TgZ(53, "section", 25)(54, "div", 4)(55, "div", 9)(
                  56,
                  "div",
                  14
                )(
                  57,
                  "div",
                  7
                )(58, "h4"),
                e._uU(59, "Recent Story"),
                e.qZA(),
                e.TgZ(60, "h2", 8),
                e._uU(61, "from the blog"),
                e.qZA()()()(),
                e.TgZ(62, "div", 9)(63, "div", 26),
                e._UZ(64, "app-blog", 27),
                e.qZA()()()(),
                e.TgZ(65, "section", 28)(66, "div", 4)(67, "div", 9)(
                  68,
                  "div",
                  26
                ),
                e._UZ(69, "app-logo", 29),
                e.qZA()()()(),
                e._UZ(70, "app-newsletter")(71, "app-footer-one")),
              2 & o)
            ) {
              const r = e.MAs(47);
              e.Q6J("sticky", !0),
                e.xp6(2),
                e.Q6J("sliders", t.sliders)("textClass", "text-center")(
                  "category",
                  "fashion"
                )("buttonText", "shop now"),
                e.xp6(4),
                e.Q6J("ngForOf", t.collections),
                e.xp6(16),
                e.Q6J("options", t.ProductSliderConfig),
                e.xp6(1),
                e.Q6J("ngForOf", e.Dn7(24, 14, t.products, 0, 16)),
                e.xp6(3),
                e.Q6J("ngStyle", e.DdM(18, Ge)),
                e.xp6(20),
                e.Q6J("activeId", t.active),
                e.xp6(2),
                e.Q6J("ngForOf", t.productCollections),
                e.xp6(1),
                e.Q6J("ngbNavOutlet", r),
                e.xp6(15),
                e.Q6J("blogs", t.blog),
                e.xp6(5),
                e.Q6J("logos", t.logo);
            }
          },
          dependencies: [
            s.sg,
            s.PC,
            d.rH,
            c.uN,
            c.Pz,
            c.nv,
            c.Vx,
            c.tO,
            l.Fy,
            l.Mp,
            U.h,
            x.K,
            q.y,
            J,
            f,
            v,
            T,
            y,
            s.OU,
          ],
        }));
      }
      var le = u(13686),
        pe = u(33668);
      const Re = function () {
          return ["/shop/compare"];
        },
        et = function () {
          return ["/shop/wishlist"];
        };
      function tt(n, i) {
        1 & n &&
          (e.TgZ(0, "div", 15)(1, "div", 16)(2, "div", 4)(3, "div", 17)(
            4,
            "div",
            18
          )(5, "ul")(6, "li"),
          e._uU(7, "Welcome to Our store Multikart"),
          e.qZA(),
          e.TgZ(8, "li"),
          e._UZ(9, "i", 19),
          e._uU(10, "Call Us: 123 - 456 - 7890"),
          e.qZA()()()(),
          e.TgZ(11, "div", 20)(12, "ul", 21)(13, "li", 22)(14, "a", 11),
          e._UZ(15, "i", 23),
          e._uU(16, "Compare"),
          e.qZA()(),
          e.TgZ(17, "li", 24)(18, "a", 11),
          e._UZ(19, "i", 25),
          e._uU(20, "Wishlist"),
          e.qZA()(),
          e.TgZ(21, "li", 26),
          e._UZ(22, "i", 27),
          e._uU(23, " My Account "),
          e.TgZ(24, "ul", 28)(25, "li")(26, "a", 29),
          e._uU(27, " Login "),
          e.qZA()(),
          e.TgZ(28, "li")(29, "a", 30),
          e._uU(30, " Logout "),
          e.qZA()()()()()()()()()),
          2 & n &&
            (e.xp6(14),
            e.Q6J("routerLink", e.DdM(2, Re)),
            e.xp6(4),
            e.Q6J("routerLink", e.DdM(3, et)));
      }
      const ot = function () {
        return ["/home/fashion"];
      };
      class k {
        constructor() {
          (this.themeLogo = "assets/images/icon/logo.png"),
            (this.topbar = !0),
            (this.sticky = !1),
            (this.stick = !1);
        }
        ngOnInit() {}
        onWindowScroll() {
          this.stick =
            (window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0) >= 150 && window.innerWidth > 400;
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || k)();
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: k,
          selectors: [["app-header-two"]],
          hostBindings: function (o, t) {
            1 & o &&
              e.NdJ(
                "scroll",
                function () {
                  return t.onWindowScroll();
                },
                !1,
                e.Jf7
              );
          },
          inputs: {
            class: "class",
            themeLogo: "themeLogo",
            topbar: "topbar",
            sticky: "sticky",
          },
          decls: 18,
          vars: 7,
          consts: [
            [1, "sticky", 3, "ngClass"],
            [1, "mobile-fix-option"],
            ["class", "top-header top-header-dark2", 4, "ngIf"],
            [1, "container", "layout3-menu"],
            [1, "row"],
            [1, "col-sm-12"],
            [1, "main-menu"],
            [1, "menu-left", "around-border"],
            [1, "main-menu-right"],
            [1, "absolute-logo"],
            [1, "brand-logo"],
            [3, "routerLink"],
            ["alt", "logo", 3, "src"],
            [1, ""],
            [1, "menu-right", "pull-right"],
            [1, "top-header", "top-header-dark2"],
            [1, "container"],
            [1, "col-lg-6"],
            [1, "header-contact"],
            ["aria-hidden", "true", 1, "fa", "fa-phone"],
            [1, "col-lg-6", "text-end"],
            [1, "header-dropdown"],
            [1, "compare"],
            ["aria-hidden", "true", 1, "fa", "fa-random"],
            [1, "mobile-wishlist"],
            ["aria-hidden", "true", 1, "fa", "fa-heart"],
            [1, "onhover-dropdown", "mobile-account"],
            ["aria-hidden", "true", 1, "fa", "fa-user"],
            [1, "onhover-show-div"],
            ["data-lng", "en"],
            ["data-lng", "es"],
          ],
          template: function (o, t) {
            1 & o &&
              (e.TgZ(0, "header", 0),
              e._UZ(1, "div", 1),
              e.YNc(2, tt, 31, 4, "div", 2),
              e.TgZ(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(
                7,
                "div",
                7
              )(8, "div", 8),
              e._UZ(9, "app-menu"),
              e.qZA()(),
              e.TgZ(10, "div", 9)(11, "div", 10)(12, "a", 11),
              e._UZ(13, "img", 12),
              e.qZA()()(),
              e.TgZ(14, "div", 13)(15, "div", 14)(16, "div"),
              e._UZ(17, "app-settings"),
              e.qZA()()()()()()()()),
              2 & o &&
                (e.ekj("fixed", t.stick && t.sticky),
                e.Q6J("ngClass", t.class),
                e.xp6(2),
                e.Q6J("ngIf", t.topbar),
                e.xp6(10),
                e.Q6J("routerLink", e.DdM(6, ot)),
                e.xp6(1),
                e.Q6J("src", t.themeLogo, e.LSH));
          },
          dependencies: [s.mk, s.O5, d.rH, le.M, pe.f],
        }));
      }
      function it(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 15)(1, "div", 3)(2, "section", 16)(3, "div", 17)(
              4,
              "div",
              18
            )(
              5,
              "div",
              19
            )(6, "h4"),
            e._uU(7, "about"),
            e.qZA()(),
            e.TgZ(8, "div", 20)(9, "div", 21),
            e._UZ(10, "img", 22),
            e.qZA(),
            e.TgZ(11, "p"),
            e._uU(
              12,
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
            ),
            e.qZA()()(),
            e.TgZ(13, "div", 23)(14, "div", 24)(15, "h2"),
            e._uU(16, "newsletter"),
            e.qZA(),
            e.TgZ(17, "form")(18, "div", 25),
            e._UZ(19, "input", 26),
            e.TgZ(20, "button", 27),
            e._uU(21, "subscribe"),
            e.qZA()()()()(),
            e.TgZ(22, "div", 18)(23, "div", 28)(24, "h4"),
            e._uU(25, "store information"),
            e.qZA()(),
            e.TgZ(26, "div", 20)(27, "ul", 29)(28, "li"),
            e._uU(29, "Multikart Demo Store, Demo store India 345-659"),
            e.qZA(),
            e.TgZ(30, "li"),
            e._uU(31, "Call Us: 123-456-7898"),
            e.qZA(),
            e.TgZ(32, "li"),
            e._uU(33, "Email Us: "),
            e.TgZ(34, "a", 9),
            e._uU(35, "Support@Fiot.com"),
            e.qZA()(),
            e.TgZ(36, "li"),
            e._uU(37, "Fax: 123456"),
            e.qZA()()()()()()()()),
          2 & n)
        ) {
          const o = e.oxw();
          e.xp6(10), e.Q6J("src", o.themeLogo, e.LSH);
        }
      }
      function nt(n, i) {
        1 & n &&
          (e.TgZ(0, "div", 15)(1, "div", 3)(2, "section", 30)(3, "div", 17)(
            4,
            "div",
            31
          )(5, "div", 32)(6, "div", 33)(
            7,
            "div",
            28
          )(8, "h4"),
          e._uU(9, "Categories"),
          e.qZA()(),
          e.TgZ(10, "div", 20)(11, "ul")(12, "li")(13, "a", 9),
          e._uU(14, "Womens Fashion"),
          e.qZA()(),
          e.TgZ(15, "li")(16, "a", 9),
          e._uU(17, "Mens Fashion"),
          e.qZA()(),
          e.TgZ(18, "li")(19, "a", 9),
          e._uU(20, "Kids Fashion"),
          e.qZA()(),
          e.TgZ(21, "li")(22, "a", 9),
          e._uU(23, "Featured"),
          e.qZA()()()()()(),
          e.TgZ(24, "div", 34)(25, "div", 33)(26, "div", 28)(27, "h4"),
          e._uU(28, "why we choose"),
          e.qZA()(),
          e.TgZ(29, "div", 20)(30, "ul")(31, "li")(32, "a", 9),
          e._uU(33, "shipping & return"),
          e.qZA()(),
          e.TgZ(34, "li")(35, "a", 9),
          e._uU(36, "secure shopping"),
          e.qZA()(),
          e.TgZ(37, "li")(38, "a", 9),
          e._uU(39, "gallary"),
          e.qZA()(),
          e.TgZ(40, "li")(41, "a", 9),
          e._uU(42, "affiliates"),
          e.qZA()(),
          e.TgZ(43, "li")(44, "a", 9),
          e._uU(45, "contacts"),
          e.qZA()()()()()()()()()()());
      }
      class w {
        constructor() {
          (this.themeLogo = "assets/images/icon/logo.png"),
            (this.mainFooter = !0),
            (this.subFooter = !1),
            (this.today = Date.now());
        }
        ngOnInit() {}
        static #e = (this.ɵfac = function (o) {
          return new (o || w)();
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: w,
          selectors: [["app-footer-two"]],
          inputs: {
            class: "class",
            themeLogo: "themeLogo",
            mainFooter: "mainFooter",
            subFooter: "subFooter",
          },
          decls: 30,
          vars: 7,
          consts: [
            [3, "ngClass"],
            ["class", "dark-layout", 4, "ngIf"],
            [1, "sub-footer", "darker-subfooter"],
            [1, "container"],
            [1, "row"],
            [1, "col-xl-6", "col-md-6", "col-sm-12"],
            [1, "footer-end"],
            ["aria-hidden", "true", 1, "fa", "fa-copyright"],
            [1, "payment-card-bottom"],
            ["href", "javascript:void(0)"],
            ["src", "assets/images/icon/visa.png", "alt", ""],
            ["src", "assets/images/icon/mastercard.png", "alt", ""],
            ["src", "assets/images/icon/paypal.png", "alt", ""],
            ["src", "assets/images/icon/american-express.png", "alt", ""],
            ["src", "assets/images/icon/discover.png", "alt", ""],
            [1, "dark-layout"],
            [1, "section-b-space", "border-b"],
            [1, "row", "footer-theme2"],
            [1, "col-lg-3"],
            [1, "footer-title", "footer-mobile-title"],
            [1, "footer-contant"],
            ["id", "footerlogo", 1, "footer-logo"],
            ["alt", "logo", 3, "src"],
            [1, "col-lg-6", "subscribe-wrapper"],
            [1, "subscribe-block"],
            [1, "form-group"],
            [
              "type",
              "text",
              "id",
              "exampleFormControlInput3",
              "placeholder",
              "Enter your email",
              1,
              "form-control",
            ],
            ["type", "submit", 1, "btn", "btn-solid"],
            [1, "footer-title"],
            [1, "contact-details"],
            [1, "small-section"],
            [1, "col", "p-set"],
            [1, "footer-link"],
            [1, "sub-title"],
            [1, "footer-link-b"],
          ],
          template: function (o, t) {
            1 & o &&
              (e.TgZ(0, "footer", 0),
              e.YNc(1, it, 38, 1, "div", 1),
              e.YNc(2, nt, 46, 0, "div", 1),
              e.TgZ(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(
                7,
                "div",
                6
              )(8, "p"),
              e._UZ(9, "i", 7),
              e._uU(10),
              e.ALo(11, "date"),
              e.qZA()()(),
              e.TgZ(12, "div", 5)(13, "div", 8)(14, "ul")(15, "li")(16, "a", 9),
              e._UZ(17, "img", 10),
              e.qZA()(),
              e.TgZ(18, "li")(19, "a", 9),
              e._UZ(20, "img", 11),
              e.qZA()(),
              e.TgZ(21, "li")(22, "a", 9),
              e._UZ(23, "img", 12),
              e.qZA()(),
              e.TgZ(24, "li")(25, "a", 9),
              e._UZ(26, "img", 13),
              e.qZA()(),
              e.TgZ(27, "li")(28, "a", 9),
              e._UZ(29, "img", 14),
              e.qZA()()()()()()()()()),
              2 & o &&
                (e.Q6J("ngClass", t.class),
                e.xp6(1),
                e.Q6J("ngIf", t.mainFooter),
                e.xp6(1),
                e.Q6J("ngIf", t.subFooter),
                e.xp6(8),
                e.hij(
                  " ",
                  e.xi3(11, 4, t.today, "y"),
                  " theme forest powered by pixelstrap"
                ));
          },
          dependencies: [s.mk, s.O5, p._Y, p.JL, p.F, s.uU],
        }));
      }
      var I = u(18358);
      const be = function () {
          return ["/shop/collection/left/sidebar"];
        },
        Te = function () {
          return { category: "fashion" };
        };
      function rt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 25)(1, "a", 26)(2, "div", 27),
            e._UZ(3, "img", 28),
            e.TgZ(4, "div", 29)(5, "div")(6, "h4"),
            e._uU(7),
            e.qZA(),
            e.TgZ(8, "h2"),
            e._uU(9),
            e.qZA()()()()()()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.xp6(1),
            e.Q6J("routerLink", e.DdM(5, be))("queryParams", e.DdM(6, Te)),
            e.xp6(2),
            e.Q6J("src", o.image, e.LSH),
            e.xp6(4),
            e.Oqu(o.save),
            e.xp6(2),
            e.Oqu(o.title);
        }
      }
      function st(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 25)(1, "a", 26)(2, "div", 27),
            e._UZ(3, "img", 28),
            e.TgZ(4, "div", 29)(5, "div")(6, "h4"),
            e._uU(7),
            e.qZA(),
            e.TgZ(8, "h2"),
            e._uU(9),
            e.qZA()()()()()()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.xp6(1),
            e.Q6J("routerLink", e.DdM(5, be))("queryParams", e.DdM(6, Te)),
            e.xp6(2),
            e.Q6J("src", o.image, e.LSH),
            e.xp6(4),
            e.Oqu(o.save),
            e.xp6(2),
            e.Oqu(o.title);
        }
      }
      function ct(n, i) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "div", 35),
            e._UZ(2, "app-product-box-one", 36),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw(3);
          e.xp6(2),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function at(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 33),
            e.YNc(1, ct, 3, 2, "ng-container", 34),
            e.ALo(2, "slice"),
            e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("ngForOf", e.Dn7(2, 1, t.getCollectionProducts(o), 0, 4));
        }
      }
      function lt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "li", 30)(1, "a", 31),
            e._uU(2),
            e.qZA(),
            e.YNc(3, at, 3, 5, "ng-template", 32),
            e.qZA()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.Q6J("ngbNavItem", o), e.xp6(2), e.hij(" ", o, " ");
        }
      }
      const pt = function () {
        return { "background-image": "url(assets/images/parallax/2.jpg)" };
      };
      class P {
        constructor(i) {
          (this.productService = i),
            (this.themeLogo = "assets/images/icon/logo-5.png"),
            (this.products = []),
            (this.productCollections = []),
            (this.HomeSliderConfig = g.TU),
            (this.sliders = [
              {
                title: "welcome to fashion",
                subTitle: "Men fashion",
                image: "assets/images/slider/3.jpg",
              },
              {
                title: "welcome to fashion",
                subTitle: "Women fashion",
                image: "assets/images/slider/4.jpg",
              },
            ]),
            (this.collections1 = [
              {
                image: "assets/images/collection/fashion/3.jpg",
                save: "save 30%",
                title: "Women",
              },
              {
                image: "assets/images/collection/fashion/4.jpg",
                save: "save 50%",
                title: "Watch",
              },
            ]),
            (this.collections2 = [
              {
                image: "assets/images/collection/fashion/5.jpg",
                save: "save 30%",
                title: "Sandle",
              },
              {
                image: "assets/images/collection/fashion/6.jpg",
                save: "save 10%",
                title: "Kids",
              },
            ]),
            this.productService.getProducts.subscribe((o) => {
              (this.products = o.filter((t) => "fashion" == t.type)),
                this.products.filter((t, r) => {
                  t.collection.filter((a) => {
                    -1 === this.productCollections.indexOf(a) &&
                      this.productCollections.push(a);
                  });
                });
            });
        }
        ngOnInit() {}
        getCollectionProducts(i) {
          return this.products.filter((o) => {
            if (o.collection.find((t) => t === i)) return o;
          });
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || P)(e.Y36(m.M));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: P,
          selectors: [["app-fashion-two"]],
          decls: 49,
          vars: 17,
          consts: [
            [3, "sticky"],
            [1, "p-0"],
            [3, "sliders", "textClass", "category", "buttonText"],
            [1, "banner-padding", "banner-furniture"],
            [1, "container-fluid"],
            [1, "row", "partition2"],
            ["class", "col-md-6", 4, "ngFor", "ngForOf"],
            [1, "title1", "section-t-space"],
            [1, "title-inner1"],
            [1, "section-b-space", "p-t-0"],
            [1, "container"],
            [1, "row"],
            [1, "col", "theme-tab"],
            [
              "ngbNav",
              "",
              1,
              "tabs",
              "tab-title",
              "justify-content-center",
              "nav",
              "nav-pills",
              3,
              "activeId",
              "activeIdChange",
            ],
            ["nav", "ngbNav"],
            [3, "ngbNavItem", 4, "ngFor", "ngForOf"],
            [1, "mt-2", 3, "ngbNavOutlet"],
            [
              1,
              "full-banner",
              "parallax-banner1",
              "parallax",
              "text-center",
              "p-left",
              3,
              "ngStyle",
            ],
            [1, "col"],
            [1, "banner-contain"],
            [1, "section-b-space"],
            [1, "row", "multiple-slider"],
            [1, "col-lg-3", "col-sm-6"],
            [3, "title"],
            [3, "themeLogo"],
            [1, "col-md-6"],
            [3, "routerLink", "queryParams"],
            [1, "collection-banner", "p-left", "text-start"],
            ["alt", "collection-banner", 1, "img-fluid", 3, "src"],
            [1, "contain-banner"],
            [3, "ngbNavItem"],
            ["ngbNavLink", ""],
            ["ngbNavContent", ""],
            [1, "no-slider", "row"],
            [4, "ngFor", "ngForOf"],
            [1, "product-box"],
            [3, "product", "currency"],
          ],
          template: function (o, t) {
            if (
              (1 & o &&
                (e._UZ(0, "app-header-two", 0),
                e.TgZ(1, "section", 1),
                e._UZ(2, "app-slider", 2),
                e.qZA(),
                e.TgZ(3, "section", 3)(4, "div", 4)(5, "div", 5),
                e.YNc(6, rt, 10, 7, "div", 6),
                e.qZA()()(),
                e.TgZ(7, "section", 3)(8, "div", 4)(9, "div", 5),
                e.YNc(10, st, 10, 7, "div", 6),
                e.qZA()()(),
                e.TgZ(11, "div", 7)(12, "h4"),
                e._uU(13, "exclusive products"),
                e.qZA(),
                e.TgZ(14, "h2", 8),
                e._uU(15, "special products"),
                e.qZA()(),
                e.TgZ(16, "section", 9)(17, "div", 10)(18, "div", 11)(
                  19,
                  "div",
                  12
                )(20, "ul", 13, 14),
                e.NdJ("activeIdChange", function (a) {
                  return (t.active = a);
                }),
                e.YNc(22, lt, 4, 2, "li", 15),
                e.qZA(),
                e._UZ(23, "div", 16),
                e.qZA()()()(),
                e.TgZ(24, "section", 1)(25, "div", 17)(26, "div", 10)(
                  27,
                  "div",
                  11
                )(28, "div", 18)(
                  29,
                  "div",
                  19
                )(30, "h2"),
                e._uU(31, "2021"),
                e.qZA(),
                e.TgZ(32, "h3"),
                e._uU(33, "fashion trends"),
                e.qZA(),
                e.TgZ(34, "h4"),
                e._uU(35, "special offer"),
                e.qZA()()()()()()(),
                e.TgZ(36, "section", 20)(37, "div", 10)(38, "div", 21)(
                  39,
                  "div",
                  22
                ),
                e._UZ(40, "app-product-box-vertical-slider", 23),
                e.qZA(),
                e.TgZ(41, "div", 22),
                e._UZ(42, "app-product-box-vertical-slider", 23),
                e.qZA(),
                e.TgZ(43, "div", 22),
                e._UZ(44, "app-product-box-vertical-slider", 23),
                e.qZA(),
                e.TgZ(45, "div", 22),
                e._UZ(46, "app-product-box-vertical-slider", 23),
                e.qZA()()()(),
                e._UZ(47, "app-newsletter")(48, "app-footer-two", 24)),
              2 & o)
            ) {
              const r = e.MAs(21);
              e.Q6J("sticky", !0),
                e.xp6(2),
                e.Q6J("sliders", t.sliders)("textClass", "text-center")(
                  "category",
                  "fashion"
                )("buttonText", "shop now"),
                e.xp6(4),
                e.Q6J("ngForOf", t.collections1),
                e.xp6(4),
                e.Q6J("ngForOf", t.collections2),
                e.xp6(10),
                e.Q6J("activeId", t.active),
                e.xp6(2),
                e.Q6J("ngForOf", t.productCollections),
                e.xp6(1),
                e.Q6J("ngbNavOutlet", r),
                e.xp6(2),
                e.Q6J("ngStyle", e.DdM(16, pt)),
                e.xp6(15),
                e.Q6J("title", "New product"),
                e.xp6(2),
                e.Q6J("title", "Sell product"),
                e.xp6(2),
                e.Q6J("title", "Feature Product"),
                e.xp6(2),
                e.Q6J("title", "Best Product"),
                e.xp6(2),
                e.Q6J("themeLogo", t.themeLogo);
            }
          },
          dependencies: [
            s.sg,
            s.PC,
            d.rH,
            c.uN,
            c.Pz,
            c.nv,
            c.Vx,
            c.tO,
            k,
            w,
            q.y,
            I.X,
            J,
            f,
            s.OU,
          ],
        }));
      }
      var dt = u(60645);
      const ut = function () {
          return ["/shop/compare"];
        },
        gt = function () {
          return ["/shop/wishlist"];
        };
      function mt(n, i) {
        1 & n &&
          (e.TgZ(0, "div", 14)(1, "div", 3)(2, "div", 4)(3, "div", 15)(
            4,
            "div",
            16
          )(5, "ul")(6, "li"),
          e._uU(7, "Welcome to Our store Multikart"),
          e.qZA(),
          e.TgZ(8, "li"),
          e._UZ(9, "i", 17),
          e._uU(10, "Call Us: 123 - 456 - 7890"),
          e.qZA()()()(),
          e.TgZ(11, "div", 18)(12, "ul", 19)(13, "li", 20)(14, "a", 9),
          e._UZ(15, "i", 21),
          e._uU(16, "Compare"),
          e.qZA()(),
          e.TgZ(17, "li", 22)(18, "a", 9),
          e._UZ(19, "i", 23),
          e._uU(20, "Wishlist"),
          e.qZA()(),
          e.TgZ(21, "li", 24),
          e._UZ(22, "i", 25),
          e._uU(23, " My Account "),
          e.TgZ(24, "ul", 26)(25, "li")(26, "a", 27),
          e._uU(27, " Login "),
          e.qZA()(),
          e.TgZ(28, "li")(29, "a", 28),
          e._uU(30, " Logout "),
          e.qZA()()()()()()()()()),
          2 & n &&
            (e.xp6(14),
            e.Q6J("routerLink", e.DdM(2, ut)),
            e.xp6(4),
            e.Q6J("routerLink", e.DdM(3, gt)));
      }
      const _t = function () {
        return ["/home/fashion"];
      };
      class A {
        constructor() {
          (this.class = "header-2"),
            (this.themeLogo = "assets/images/icon/logo.png"),
            (this.topbar = !0),
            (this.sticky = !1),
            (this.stick = !1);
        }
        ngOnInit() {}
        onWindowScroll() {
          this.stick =
            (window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0) >= 150 && window.innerWidth > 400;
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || A)();
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: A,
          selectors: [["app-header-three"]],
          hostBindings: function (o, t) {
            1 & o &&
              e.NdJ(
                "scroll",
                function () {
                  return t.onWindowScroll();
                },
                !1,
                e.Jf7
              );
          },
          inputs: {
            class: "class",
            themeLogo: "themeLogo",
            topbar: "topbar",
            sticky: "sticky",
          },
          decls: 19,
          vars: 7,
          consts: [
            [1, "sticky", 3, "ngClass"],
            [1, "mobile-fix-option"],
            ["class", "top-header", 4, "ngIf"],
            [1, "container"],
            [1, "row"],
            [1, "col-sm-12"],
            [1, "main-menu", "border-section", "border-top-0"],
            [1, "menu-left"],
            [1, "brand-logo", "layout2-logo", "headerlogo"],
            [3, "routerLink"],
            ["alt", "logo", 1, "img-fluid", 3, "src"],
            [1, "menu-right", "pull-right"],
            [1, "col-lg-12"],
            [1, "main-nav-center"],
            [1, "top-header"],
            [1, "col-lg-6"],
            [1, "header-contact"],
            ["aria-hidden", "true", 1, "fa", "fa-phone"],
            [1, "col-lg-6", "text-end"],
            [1, "header-dropdown"],
            [1, "compare"],
            ["aria-hidden", "true", 1, "fa", "fa-random"],
            [1, "mobile-wishlist"],
            ["aria-hidden", "true", 1, "fa", "fa-heart"],
            [1, "onhover-dropdown", "mobile-account"],
            ["aria-hidden", "true", 1, "fa", "fa-user"],
            [1, "onhover-show-div"],
            ["data-lng", "en"],
            ["data-lng", "es"],
          ],
          template: function (o, t) {
            1 & o &&
              (e.TgZ(0, "header", 0),
              e._UZ(1, "div", 1),
              e.YNc(2, mt, 31, 4, "div", 2),
              e.TgZ(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(
                7,
                "div",
                7
              ),
              e._UZ(8, "app-left-menu"),
              e.qZA(),
              e.TgZ(9, "div", 8)(10, "a", 9),
              e._UZ(11, "img", 10),
              e.qZA()(),
              e.TgZ(12, "div", 11),
              e._UZ(13, "app-settings"),
              e.qZA()()()()(),
              e.TgZ(14, "div", 3)(15, "div", 4)(16, "div", 12)(17, "div", 13),
              e._UZ(18, "app-menu"),
              e.qZA()()()()()),
              2 & o &&
                (e.ekj("fixed", t.stick && t.sticky),
                e.Q6J("ngClass", t.class),
                e.xp6(2),
                e.Q6J("ngIf", t.topbar),
                e.xp6(8),
                e.Q6J("routerLink", e.DdM(6, _t)),
                e.xp6(1),
                e.Q6J("src", t.themeLogo, e.LSH));
          },
          dependencies: [s.mk, s.O5, d.rH, dt.H, le.M, pe.f],
        }));
      }
      function ft(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 24), e._UZ(1, "app-product-box-one", 25), e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            )("onHowerChangeImage", !0)("cartModal", !0);
        }
      }
      function vt(n, i) {
        1 & n && (e.ynx(0), e.YNc(1, ft, 2, 4, "ng-template", 23), e.BQk());
      }
      function ht(n, i) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "div", 24),
            e._UZ(2, "app-product-box-one", 30),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw(3);
          e.xp6(2),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function Zt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 29),
            e.YNc(1, ht, 3, 2, "ng-container", 13),
            e.ALo(2, "slice"),
            e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("ngForOf", e.Dn7(2, 1, t.getCollectionProducts(o), 0, 4));
        }
      }
      function bt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "li", 26)(1, "a", 27),
            e._uU(2),
            e.qZA(),
            e.YNc(3, Zt, 3, 5, "ng-template", 28),
            e.qZA()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.Q6J("ngbNavItem", o), e.xp6(2), e.hij(" ", o, " ");
        }
      }
      const Tt = function () {
          return { "background-image": "url(assets/images/bg-image.jpg)" };
        },
        yt = function () {
          return { "background-image": "url(assets/images/parallax/3.jpg)" };
        };
      class D {
        constructor(i) {
          (this.productService = i),
            (this.products = []),
            (this.productCollections = []),
            (this.ProductSliderConfig = g.O_),
            (this.sliders = [
              {
                title: "welcome to fashion",
                subTitle: "Men fashion",
                image: "assets/images/slider/5.jpg",
              },
              {
                title: "welcome to fashion",
                subTitle: "Women fashion",
                image: "assets/images/slider/6.jpg",
              },
            ]),
            this.productService.getProducts.subscribe((o) => {
              (this.products = o.filter((t) => "fashion" == t.type)),
                this.products.filter((t) => {
                  t.collection.filter((r) => {
                    -1 === this.productCollections.indexOf(r) &&
                      this.productCollections.push(r);
                  });
                });
            });
        }
        ngOnInit() {
          document.body.classList.add("box-layout-body");
        }
        ngOnDestroy() {
          document.body.classList.remove("box-layout-body");
        }
        getCollectionProducts(i) {
          return this.products.filter((o) => {
            if (o.collection.find((t) => t === i)) return o;
          });
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || D)(e.Y36(m.M));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: D,
          selectors: [["app-fashion-three"]],
          decls: 48,
          vars: 17,
          consts: [
            [1, "p-0"],
            [3, "sliders", "textClass", "category", "buttonText"],
            [1, "container", "box-layout", "bg-image", 3, "ngStyle"],
            [1, "section-b-space"],
            [1, "container"],
            [1, "title1"],
            [1, "title-inner1"],
            [1, "row"],
            [1, "col-xl-6", "offset-xl-3"],
            [1, "product-para"],
            [1, "text-center"],
            [1, "col"],
            [1, "product-m", "no-arrow", 3, "options"],
            [4, "ngFor", "ngForOf"],
            [
              1,
              "full-banner",
              "parallax-banner1",
              "parallax",
              "text-center",
              "p-left",
              3,
              "ngStyle",
            ],
            [1, "banner-contain"],
            [1, "title1", "section-t-space"],
            [1, "section-b-space", "p-t-0"],
            [1, "col", "theme-tab"],
            [
              "ngbNav",
              "",
              1,
              "tabs",
              "tab-title",
              "justify-content-center",
              "nav",
              "nav-pills",
              3,
              "activeId",
              "activeIdChange",
            ],
            ["nav", "ngbNav"],
            [3, "ngbNavItem", 4, "ngFor", "ngForOf"],
            [1, "mt-2", 3, "ngbNavOutlet"],
            ["carouselSlide", ""],
            [1, "product-box"],
            [3, "product", "currency", "onHowerChangeImage", "cartModal"],
            [3, "ngbNavItem"],
            ["ngbNavLink", ""],
            ["ngbNavContent", ""],
            [1, "no-slider", "row"],
            [3, "product", "currency"],
          ],
          template: function (o, t) {
            if (
              (1 & o &&
                (e._UZ(0, "app-header-three"),
                e.TgZ(1, "section", 0),
                e._UZ(2, "app-slider", 1),
                e.qZA(),
                e.TgZ(3, "div", 2)(4, "section", 3)(5, "div", 4)(6, "div", 5)(
                  7,
                  "h4"
                ),
                e._uU(8, "special offer"),
                e.qZA(),
                e.TgZ(9, "h2", 6),
                e._uU(10, "top collection"),
                e.qZA()(),
                e.TgZ(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "p", 10),
                e._uU(
                  15,
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                ),
                e.qZA()()()(),
                e.TgZ(16, "div", 7)(17, "div", 11)(18, "owl-carousel-o", 12),
                e.YNc(19, vt, 2, 0, "ng-container", 13),
                e.ALo(20, "slice"),
                e.qZA()()()()(),
                e.TgZ(21, "section", 0)(22, "div", 14)(23, "div", 4)(
                  24,
                  "div",
                  7
                )(25, "div", 11)(
                  26,
                  "div",
                  15
                )(27, "h2"),
                e._uU(28, "2018"),
                e.qZA(),
                e.TgZ(29, "h3"),
                e._uU(30, "fashion trends"),
                e.qZA(),
                e.TgZ(31, "h4"),
                e._uU(32, "special offer"),
                e.qZA()()()()()()(),
                e.TgZ(33, "div", 16)(34, "h4"),
                e._uU(35, "exclusive products"),
                e.qZA(),
                e.TgZ(36, "h2", 6),
                e._uU(37, "special products"),
                e.qZA()(),
                e.TgZ(38, "section", 17)(39, "div", 4)(40, "div", 7)(
                  41,
                  "div",
                  18
                )(42, "ul", 19, 20),
                e.NdJ("activeIdChange", function (a) {
                  return (t.active = a);
                }),
                e.YNc(44, bt, 4, 2, "li", 21),
                e.qZA(),
                e._UZ(45, "div", 22),
                e.qZA()()()()(),
                e._UZ(46, "app-newsletter")(47, "app-footer-one")),
              2 & o)
            ) {
              const r = e.MAs(43);
              e.xp6(2),
                e.Q6J("sliders", t.sliders)("textClass", "text-center")(
                  "category",
                  "fashion"
                )("buttonText", "shop now"),
                e.xp6(1),
                e.Q6J("ngStyle", e.DdM(15, Tt)),
                e.xp6(15),
                e.Q6J("options", t.ProductSliderConfig),
                e.xp6(1),
                e.Q6J("ngForOf", e.Dn7(20, 11, t.products, 0, 16)),
                e.xp6(3),
                e.Q6J("ngStyle", e.DdM(16, yt)),
                e.xp6(20),
                e.Q6J("activeId", t.active),
                e.xp6(2),
                e.Q6J("ngForOf", t.productCollections),
                e.xp6(1),
                e.Q6J("ngbNavOutlet", r);
            }
          },
          dependencies: [
            s.sg,
            s.PC,
            c.uN,
            c.Pz,
            c.nv,
            c.Vx,
            c.tO,
            l.Fy,
            l.Mp,
            x.K,
            A,
            q.y,
            J,
            f,
            s.OU,
          ],
        }));
      }
      var j = u(12796),
        Y = u(38972),
        de = u(85840),
        ue = u(77139),
        S = u(82834);
      const xt = ["quickView"],
        qt = ["cartModal"];
      function At(n, i) {
        1 & n && (e.TgZ(0, "span", 23), e._uU(1, "new"), e.qZA());
      }
      function Ct(n, i) {
        1 & n && (e.TgZ(0, "span", 24), e._uU(1, "on sale"), e.qZA());
      }
      function Ut(n, i) {
        if (1 & n) {
          const o = e.EpF();
          e.TgZ(0, "button", 25),
            e.NdJ("click", function () {
              e.CHM(o);
              const r = e.oxw();
              return e.KtG(r.CartModal.openModal(r.product));
            }),
            e._UZ(1, "i", 26),
            e.qZA();
        }
      }
      function wt(n, i) {
        if (1 & n) {
          const o = e.EpF();
          e.TgZ(0, "button", 25),
            e.NdJ("click", function () {
              e.CHM(o);
              const r = e.oxw();
              return e.KtG(r.addToCart(r.product));
            }),
            e._UZ(1, "i", 26),
            e.qZA();
        }
      }
      function Jt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "del")(1, "span", 27),
            e._uU(2),
            e.ALo(3, "currency"),
            e.qZA()()),
          2 & n)
        ) {
          const o = e.oxw();
          e.xp6(2),
            e.hij(
              " ",
              e.Dn7(
                3,
                1,
                (null == o.product ? null : o.product.price) *
                  (null == o.currency ? null : o.currency.price),
                null == o.currency ? null : o.currency.currency,
                "symbol"
              ),
              ""
            );
        }
      }
      const Qt = function (n) {
        return { "background-color": n };
      };
      function Lt(n, i) {
        if (1 & n) {
          const o = e.EpF();
          e.TgZ(0, "li", 30),
            e.NdJ("click", function () {
              const a = e.CHM(o).$implicit,
                _ = e.oxw(2);
              return e.KtG(_.ChangeVariants(a, _.product));
            }),
            e.qZA();
        }
        if (2 & n) {
          const o = i.$implicit;
          e.Tol(o), e.Q6J("ngStyle", e.VKq(3, Qt, o));
        }
      }
      function kt(n, i) {
        if (
          (1 & n && (e.TgZ(0, "ul", 28), e.YNc(1, Lt, 1, 5, "li", 29), e.qZA()),
          2 & n)
        ) {
          const o = e.oxw();
          e.xp6(1),
            e.Q6J(
              "ngForOf",
              o.Color(null == o.product ? null : o.product.variants)
            );
        }
      }
      function St(n, i) {
        if ((1 & n && e._UZ(0, "app-cart-modal", 20, 31), 2 & n)) {
          const o = e.oxw();
          e.Q6J("product", o.product)("currency", o.currency);
        }
      }
      const ye = function (n) {
        return ["/shop/product/left/sidebar/", n];
      };
      class Q {
        constructor(i) {
          (this.productService = i),
            (this.currency = this.productService.Currency),
            (this.cartModal = !1);
        }
        ngOnInit() {}
        Color(i) {
          const o = [];
          for (let t = 0; t < Object.keys(i).length; t++)
            -1 === o.indexOf(i[t].color) && i[t].color && o.push(i[t].color);
          return o;
        }
        ChangeVariants(i, o) {
          o.variants.map((t) => {
            t.color === i &&
              o.images.map((r) => {
                r.image_id === t.image_id && (this.ImageSrc = r.src);
              });
          });
        }
        ChangeVariantsImage(i) {
          this.ImageSrc = i;
        }
        addToCart(i) {
          this.productService.addToCart(i);
        }
        addToWishlist(i) {
          this.productService.addToWishlist(i);
        }
        addToCompare(i) {
          this.productService.addToCompare(i);
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || Q)(e.Y36(m.M));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: Q,
          selectors: [["app-product-box-two"]],
          viewQuery: function (o, t) {
            if ((1 & o && (e.Gf(xt, 5), e.Gf(qt, 5)), 2 & o)) {
              let r;
              e.iGM((r = e.CRH())) && (t.QuickView = r.first),
                e.iGM((r = e.CRH())) && (t.CartModal = r.first);
            }
          },
          inputs: {
            product: "product",
            currency: "currency",
            cartModal: "cartModal",
          },
          decls: 32,
          vars: 30,
          consts: [
            [1, "img-wrapper"],
            [1, "lable-block"],
            ["class", "lable3", 4, "ngIf"],
            ["class", "lable4", 4, "ngIf"],
            [1, "front"],
            [3, "routerLink"],
            [
              "alt",
              "",
              1,
              "img-fluid",
              "lazy-loading",
              3,
              "defaultImage",
              "lazyLoad",
            ],
            [1, "cart-box"],
            ["title", "Add to cart", 3, "click", 4, "ngIf"],
            [
              "href",
              "javascript:void(0)",
              "title",
              "Add to Wishlist",
              3,
              "click",
            ],
            ["aria-hidden", "true", 1, "ti-heart"],
            ["href", "javascript:void(0)", "title", "Quick View", 3, "click"],
            ["aria-hidden", "true", 1, "ti-search"],
            ["href", "javascript:void(0)", "title", "Compare", 3, "click"],
            ["aria-hidden", "true", 1, "ti-reload"],
            [1, "product-detail", "text-center"],
            [1, "rating"],
            [1, "text-center", "pro-rating", 3, "rate", "readOnly"],
            [4, "ngIf"],
            ["class", "color-variant", 4, "ngIf"],
            [3, "product", "currency"],
            ["quickView", ""],
            [3, "product", "currency", 4, "ngIf"],
            [1, "lable3"],
            [1, "lable4"],
            ["title", "Add to cart", 3, "click"],
            [1, "ti-shopping-cart"],
            [1, "money"],
            [1, "color-variant"],
            [3, "class", "ngStyle", "click", 4, "ngFor", "ngForOf"],
            [3, "ngStyle", "click"],
            ["cartModal", ""],
          ],
          template: function (o, t) {
            1 & o &&
              (e.TgZ(0, "div", 0)(1, "div", 1),
              e.YNc(2, At, 2, 0, "span", 2),
              e.YNc(3, Ct, 2, 0, "span", 3),
              e.qZA(),
              e.TgZ(4, "div", 4)(5, "a", 5),
              e._UZ(6, "img", 6),
              e.qZA()(),
              e.TgZ(7, "div", 7),
              e.YNc(8, Ut, 2, 0, "button", 8),
              e.YNc(9, wt, 2, 0, "button", 8),
              e.TgZ(10, "a", 9),
              e.NdJ("click", function () {
                return t.addToWishlist(t.product);
              }),
              e._UZ(11, "i", 10),
              e.qZA(),
              e.TgZ(12, "a", 11),
              e.NdJ("click", function () {
                return t.QuickView.openModal();
              }),
              e._UZ(13, "i", 12),
              e.qZA(),
              e.TgZ(14, "a", 13),
              e.NdJ("click", function () {
                return t.addToCompare(t.product);
              }),
              e._UZ(15, "i", 14),
              e.qZA()()(),
              e.TgZ(16, "div", 15)(17, "div", 16),
              e._UZ(18, "bar-rating", 17),
              e.qZA(),
              e.TgZ(19, "a", 5)(20, "h6"),
              e._uU(21),
              e.ALo(22, "titlecase"),
              e.qZA()(),
              e.TgZ(23, "h4"),
              e._uU(24),
              e.ALo(25, "currency"),
              e.ALo(26, "discount"),
              e.YNc(27, Jt, 4, 5, "del", 18),
              e.qZA(),
              e.YNc(28, kt, 2, 1, "ul", 19),
              e.qZA(),
              e._UZ(29, "app-quick-view", 20, 21),
              e.YNc(31, St, 2, 2, "app-cart-modal", 22)),
              2 & o &&
                (e.xp6(2),
                e.Q6J("ngIf", t.product.new),
                e.xp6(1),
                e.Q6J("ngIf", t.product.sale),
                e.xp6(2),
                e.Q6J(
                  "routerLink",
                  e.VKq(26, ye, t.product.title.replace(" ", "-"))
                ),
                e.xp6(1),
                e.Q6J(
                  "defaultImage",
                  t.ImageSrc
                    ? t.ImageSrc
                    : "assets/images/product/placeholder.jpg"
                )(
                  "lazyLoad",
                  t.ImageSrc ? t.ImageSrc : t.product.images[0].src
                ),
                e.xp6(2),
                e.Q6J("ngIf", t.cartModal),
                e.xp6(1),
                e.Q6J("ngIf", !t.cartModal),
                e.xp6(9),
                e.Q6J("rate", 5)("readOnly", !0),
                e.xp6(1),
                e.Q6J(
                  "routerLink",
                  e.VKq(28, ye, t.product.title.replace(" ", "-"))
                ),
                e.xp6(2),
                e.Oqu(e.lcZ(22, 17, t.product.title)),
                e.xp6(3),
                e.hij(
                  " ",
                  e.Dn7(
                    25,
                    19,
                    e.xi3(
                      26,
                      23,
                      (null == t.product ? null : t.product.price) *
                        (null == t.currency ? null : t.currency.price),
                      t.product
                    ),
                    null == t.currency ? null : t.currency.currency,
                    "symbol"
                  ),
                  " "
                ),
                e.xp6(3),
                e.Q6J("ngIf", null == t.product ? null : t.product.discount),
                e.xp6(1),
                e.Q6J(
                  "ngIf",
                  t.Color(null == t.product ? null : t.product.variants).length
                ),
                e.xp6(1),
                e.Q6J("product", t.product)("currency", t.currency),
                e.xp6(2),
                e.Q6J("ngIf", t.cartModal));
          },
          dependencies: [
            s.sg,
            s.O5,
            s.PC,
            d.rH,
            j.OJ,
            Y.z1,
            de.a,
            ue.u,
            s.rS,
            s.H9,
            S.B,
          ],
        }));
      }
      const Ft = function (n) {
        return { "background-color": n };
      };
      function Ot(n, i) {
        if (1 & n) {
          const o = e.EpF();
          e.TgZ(0, "li", 8),
            e.NdJ("click", function () {
              const a = e.CHM(o).$implicit,
                _ = e.oxw();
              return e.KtG(_.ChangeVariants(a, _.product));
            }),
            e.qZA();
        }
        if (2 & n) {
          const o = i.$implicit;
          e.Tol(o), e.Q6J("ngStyle", e.VKq(3, Ft, o));
        }
      }
      const xe = function (n) {
        return ["/shop/product/left/sidebar/", n];
      };
      class L {
        constructor() {}
        ngOnInit() {}
        Color(i) {
          const o = [];
          for (let t = 0; t < Object.keys(i).length; t++)
            -1 === o.indexOf(i[t].color) && i[t].color && o.push(i[t].color);
          return o;
        }
        ChangeVariants(i, o) {
          o.variants.map((t) => {
            t.color === i &&
              o.images.map((r) => {
                r.image_id === t.image_id && (this.ImageSrc = r.src);
              });
          });
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || L)();
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: L,
          selectors: [["app-product-box-vertical"]],
          inputs: { product: "product", currency: "currency" },
          decls: 16,
          vars: 23,
          consts: [
            [1, "media", "d-flex", "align-items-center"],
            [3, "routerLink"],
            [
              1,
              "img-fluid",
              "lazy-loading",
              3,
              "defaultImage",
              "lazyLoad",
              "alt",
            ],
            [1, "media-body", "align-self-center"],
            [1, "rating"],
            [3, "rate", "readOnly"],
            [1, "color-variant"],
            [3, "class", "ngStyle", "click", 4, "ngFor", "ngForOf"],
            [3, "ngStyle", "click"],
          ],
          template: function (o, t) {
            1 & o &&
              (e.TgZ(0, "div", 0)(1, "a", 1),
              e._UZ(2, "img", 2),
              e.qZA(),
              e.TgZ(3, "div", 3)(4, "div", 4),
              e._UZ(5, "bar-rating", 5),
              e.qZA(),
              e.TgZ(6, "a", 1)(7, "h6"),
              e._uU(8),
              e.ALo(9, "titlecase"),
              e.qZA()(),
              e.TgZ(10, "h4"),
              e._uU(11),
              e.ALo(12, "currency"),
              e.ALo(13, "discount"),
              e.qZA(),
              e.TgZ(14, "ul", 6),
              e.YNc(15, Ot, 1, 5, "li", 7),
              e.qZA()()()),
              2 & o &&
                (e.xp6(1),
                e.Q6J(
                  "routerLink",
                  e.VKq(19, xe, t.product.title.replace(" ", "-"))
                ),
                e.xp6(1),
                e.s9C("alt", t.product.images[0].alt),
                e.Q6J(
                  "defaultImage",
                  t.ImageSrc
                    ? t.ImageSrc
                    : "assets/images/product/placeholder.jpg"
                )(
                  "lazyLoad",
                  t.ImageSrc ? t.ImageSrc : t.product.images[0].src
                ),
                e.xp6(3),
                e.Q6J("rate", 5)("readOnly", !0),
                e.xp6(1),
                e.Q6J(
                  "routerLink",
                  e.VKq(21, xe, t.product.title.replace(" ", "-"))
                ),
                e.xp6(2),
                e.Oqu(e.lcZ(9, 10, t.product.title)),
                e.xp6(3),
                e.Oqu(
                  e.Dn7(
                    12,
                    12,
                    e.xi3(
                      13,
                      16,
                      (null == t.product ? null : t.product.price) *
                        (null == t.currency ? null : t.currency.price),
                      t.product
                    ),
                    null == t.currency ? null : t.currency.currency,
                    "symbol"
                  )
                ),
                e.xp6(4),
                e.Q6J(
                  "ngForOf",
                  t.Color(null == t.product ? null : t.product.variants)
                ));
          },
          dependencies: [s.sg, s.PC, d.rH, j.OJ, Y.z1, s.rS, s.H9, S.B],
        }));
      }
      const qe = function (n) {
        return ["/shop/product/left/sidebar/", n];
      };
      function Mt(n, i) {
        if (1 & n) {
          const o = e.EpF();
          e.TgZ(0, "li")(1, "div", 17)(2, "a", 18),
            e._UZ(3, "img", 19),
            e.qZA(),
            e.TgZ(4, "div", 20)(5, "a", 18)(6, "h4"),
            e._uU(7),
            e.ALo(8, "titlecase"),
            e.qZA()(),
            e.TgZ(9, "h4")(10, "span"),
            e._uU(11),
            e.ALo(12, "currency"),
            e.ALo(13, "discount"),
            e.qZA()()()(),
            e.TgZ(14, "div", 21)(15, "a", 22),
            e.NdJ("click", function () {
              const a = e.CHM(o).$implicit,
                _ = e.oxw(2);
              return e.KtG(_.removeItem(a));
            }),
            e._UZ(16, "i", 23),
            e.qZA()()();
        }
        if (2 & n) {
          const o = i.$implicit,
            t = e.oxw(2);
          e.xp6(2),
            e.Q6J("routerLink", e.VKq(16, qe, o.title.replace(" ", "-"))),
            e.xp6(1),
            e.Q6J("src", o.images[0].src, e.LSH)("alt", o.images[0].alt),
            e.xp6(2),
            e.Q6J("routerLink", e.VKq(18, qe, o.title.replace(" ", "-"))),
            e.xp6(2),
            e.Oqu(e.lcZ(8, 7, null == o ? null : o.title)),
            e.xp6(4),
            e.AsE(
              " ",
              null == o ? null : o.quantity,
              " x ",
              e.Dn7(
                12,
                9,
                e.xi3(
                  13,
                  13,
                  (null == o ? null : o.price) *
                    (null == t.productService
                      ? null
                      : t.productService.Currency.price),
                  o
                ),
                null == t.productService
                  ? null
                  : t.productService.Currency.currency,
                "symbol"
              ),
              " "
            );
        }
      }
      const Nt = function () {
          return ["/shop/cart"];
        },
        It = function () {
          return ["/shop/checkout"];
        };
      function Pt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 9)(1, "ul", 10),
            e.YNc(2, Mt, 17, 20, "li", 11),
            e.qZA(),
            e.TgZ(3, "ul", 12)(4, "li")(5, "div", 13)(6, "h5"),
            e._uU(7, " subtotal : "),
            e.TgZ(8, "span"),
            e._uU(9),
            e.ALo(10, "currency"),
            e.ALo(11, "async"),
            e.qZA()()()(),
            e.TgZ(12, "li")(13, "div", 14)(14, "a", 15),
            e._uU(15, "view cart"),
            e.qZA(),
            e.TgZ(16, "a", 16),
            e._uU(17, "checkout"),
            e.qZA()()()()()),
          2 & n)
        ) {
          const o = e.oxw();
          e.xp6(2),
            e.Q6J("ngForOf", o.products),
            e.xp6(7),
            e.Oqu(
              e.Dn7(
                10,
                4,
                e.lcZ(11, 8, o.getTotal),
                null == o.productService
                  ? null
                  : o.productService.Currency.currency,
                "symbol"
              )
            ),
            e.xp6(5),
            e.Q6J("routerLink", e.DdM(10, Nt)),
            e.xp6(2),
            e.Q6J("routerLink", e.DdM(11, It));
        }
      }
      const Dt = function () {
        return ["/shop/collection/left/sidebar"];
      };
      function jt(n, i) {
        1 & n &&
          (e.TgZ(0, "div", 24)(1, "h4", 25)(2, "strong"),
          e._uU(3, "Your Cart is Empty"),
          e.qZA()(),
          e.TgZ(4, "a", 26),
          e._uU(5, "continue shopping"),
          e.qZA()()),
          2 & n && (e.xp6(4), e.Q6J("routerLink", e.DdM(1, Dt)));
      }
      class b {
        constructor(i) {
          (this.productService = i),
            (this.direction = "right"),
            (this.products = []),
            this.productService.cartItems.subscribe((o) => (this.products = o));
        }
        ngOnInit() {
          this.productService.OpenCart = !1;
        }
        closeCart() {
          this.productService.OpenCart = !1;
        }
        get getTotal() {
          return this.productService.cartTotalAmount();
        }
        removeItem(i) {
          this.productService.removeCartItem(i);
        }
        ngOnDestroy() {
          this.closeCart();
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || b)(e.Y36(m.M));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: b,
          selectors: [["app-cart-variation"]],
          inputs: { direction: "direction" },
          decls: 11,
          vars: 5,
          consts: [
            ["id", "cart_side", 1, "add_to_cart", 3, "ngClass"],
            ["href", "javascript:void(0)", 1, "overlay", 3, "click"],
            [1, "cart-inner"],
            [1, "cart_top"],
            [1, "close-cart", 3, "click"],
            ["href", "javascript:void(0)"],
            ["aria-hidden", "true", 1, "fa", "fa-times"],
            ["class", "cart_media", 4, "ngIf"],
            ["class", "col-sm-12 empty-cart-cls text-start", 4, "ngIf"],
            [1, "cart_media"],
            [1, "cart_product"],
            [4, "ngFor", "ngForOf"],
            [1, "cart_total"],
            [1, "total"],
            [1, "buttons"],
            [1, "btn", "btn-solid", "btn-xs", "view-cart", 3, "routerLink"],
            [1, "btn", "btn-solid", "btn-xs", "checkout", 3, "routerLink"],
            [1, "media"],
            [3, "routerLink"],
            [1, "me-3", 3, "src", "alt"],
            [1, "media-body"],
            [1, "close-circle"],
            ["href", "javascript:void(0)", 3, "click"],
            ["aria-hidden", "true", 1, "ti-trash"],
            [1, "col-sm-12", "empty-cart-cls", "text-start"],
            [1, "mt-3"],
            [1, "btn", "btn-solid", 3, "routerLink"],
          ],
          template: function (o, t) {
            1 & o &&
              (e.TgZ(0, "div", 0)(1, "a", 1),
              e.NdJ("click", function () {
                return t.closeCart();
              }),
              e.qZA(),
              e.TgZ(2, "div", 2)(3, "div", 3)(4, "h3"),
              e._uU(5, "my cart"),
              e.qZA(),
              e.TgZ(6, "div", 4),
              e.NdJ("click", function () {
                return t.closeCart();
              }),
              e.TgZ(7, "a", 5),
              e._UZ(8, "i", 6),
              e.qZA()()(),
              e.YNc(9, Pt, 18, 12, "div", 7),
              e.YNc(10, jt, 6, 2, "div", 8),
              e.qZA()()),
              2 & o &&
                (e.ekj(
                  "openSide",
                  null == t.productService ? null : t.productService.OpenCart
                ),
                e.Q6J("ngClass", t.direction),
                e.xp6(9),
                e.Q6J("ngIf", t.products.length),
                e.xp6(1),
                e.Q6J("ngIf", !t.products.length));
          },
          dependencies: [s.mk, s.sg, s.O5, d.rH, s.Ov, s.rS, s.H9, S.B],
        }));
      }
      function Yt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 31), e._UZ(1, "app-product-box-two", 32), e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function Ht(n, i) {
        1 & n && (e.ynx(0), e.YNc(1, Yt, 2, 2, "ng-template", 30), e.BQk());
      }
      function Bt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 33),
            e._UZ(1, "app-product-box-vertical", 32),
            e.qZA()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function zt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 31), e._UZ(1, "app-product-box-two", 32), e.qZA()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function $t(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 33),
            e._UZ(1, "app-product-box-vertical", 32),
            e.qZA()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      const Vt = function () {
        return { "background-image": "url(assets/images/parallax/4.jpg)" };
      };
      class H {
        constructor(i) {
          (this.productService = i),
            (this.products = []),
            (this.ProductSliderConfig = g.O_),
            (this.sliders = [
              {
                title: "save 10%",
                subTitle: "fresh vegetables",
                image: "assets/images/slider/7.jpg",
              },
              {
                title: "save 10%",
                subTitle: "fresh vegetables",
                image: "assets/images/slider/8.jpg",
              },
            ]),
            (this.blogs = [
              {
                image: "assets/images/blog/6.jpg",
                date: "25 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/7.jpg",
                date: "26 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/8.jpg",
                date: "27 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/9.jpg",
                date: "28 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
            ]),
            this.productService.getProducts.subscribe(
              (o) => (this.products = o.filter((t) => "vegetables" == t.type))
            );
        }
        ngOnInit() {}
        static #e = (this.ɵfac = function (o) {
          return new (o || H)(e.Y36(m.M));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: H,
          selectors: [["app-vegetable"]],
          decls: 72,
          vars: 29,
          consts: [
            [1, "p-0"],
            [3, "sliders", "textClass", "category", "buttonText"],
            [1, "banner-padding", "absolute-banner", "pb-0"],
            [1, "container", "absolute-bg"],
            [1, "service", "p-0"],
            [1, "section-b-space"],
            [1, "container"],
            [1, "row"],
            [1, "col"],
            [1, "title4"],
            [1, "title-inner4"],
            [1, "line"],
            [1, "product-5", "product-m", "no-arrow", 3, "options"],
            [4, "ngFor", "ngForOf"],
            [
              1,
              "full-banner",
              "parallax-banner15",
              "parallax",
              "text-start",
              "p-left",
              3,
              "ngStyle",
            ],
            [1, "banner-contain"],
            [1, "full-box"],
            [1, "col-md-4"],
            [1, "theme-card", "center-align"],
            [1, "offer-slider"],
            [1, "sec-1"],
            ["class", "product-box2", 4, "ngFor", "ngForOf"],
            [1, "col-md-4", "center-slider"],
            ["class", "product-box product-wrap", 4, "ngFor", "ngForOf"],
            [1, "blog", "section-b-space", "pt-0"],
            [1, "title1", "section-t-space"],
            [1, "title-inner1"],
            [1, "col-md-12"],
            [3, "blogs"],
            [3, "direction"],
            ["carouselSlide", ""],
            [1, "product-box", "product-wrap"],
            [3, "product", "currency"],
            [1, "product-box2"],
          ],
          template: function (o, t) {
            1 & o &&
              (e._UZ(0, "app-header-three"),
              e.TgZ(1, "section", 0),
              e._UZ(2, "app-slider", 1),
              e.qZA(),
              e.TgZ(3, "section", 2)(4, "div", 3)(5, "div", 4),
              e._UZ(6, "app-services"),
              e.qZA()()(),
              e.TgZ(7, "section", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(
                11,
                "div",
                9
              )(12, "h2", 10),
              e._uU(13, "trending products"),
              e.qZA(),
              e.TgZ(14, "div", 11),
              e._UZ(15, "span"),
              e.qZA()(),
              e.TgZ(16, "owl-carousel-o", 12),
              e.YNc(17, Ht, 2, 0, "ng-container", 13),
              e.ALo(18, "slice"),
              e.qZA()()()()(),
              e.TgZ(19, "section", 0)(20, "div", 14)(21, "div", 6)(
                22,
                "div",
                7
              )(23, "div", 8)(
                24,
                "div",
                15
              )(25, "h2"),
              e._uU(26, "2018"),
              e.qZA(),
              e.TgZ(27, "h3"),
              e._uU(28, "food market"),
              e.qZA(),
              e.TgZ(29, "h4"),
              e._uU(30, "special offer"),
              e.qZA()()()()()()(),
              e.TgZ(31, "section")(32, "div", 16)(33, "div", 6)(34, "div", 9)(
                35,
                "h2",
                10
              ),
              e._uU(36, "special products"),
              e.qZA(),
              e.TgZ(37, "div", 11),
              e._UZ(38, "span"),
              e.qZA()(),
              e.TgZ(39, "div", 7)(40, "div", 17)(41, "div", 18)(42, "div", 19)(
                43,
                "div",
                20
              ),
              e.YNc(44, Bt, 2, 2, "div", 21),
              e.ALo(45, "slice"),
              e.qZA()()()(),
              e.TgZ(46, "div", 22)(47, "div")(48, "div", 19)(49, "div"),
              e.YNc(50, zt, 2, 2, "div", 23),
              e.ALo(51, "slice"),
              e.qZA()()()(),
              e.TgZ(52, "div", 17)(53, "div", 18)(54, "div", 19)(55, "div", 20),
              e.YNc(56, $t, 2, 2, "div", 21),
              e.ALo(57, "slice"),
              e.qZA()()()()()()()(),
              e.TgZ(58, "section", 24)(59, "div", 6)(60, "div", 7)(
                61,
                "div",
                8
              )(
                62,
                "div",
                25
              )(63, "h4"),
              e._uU(64, "Recent Story"),
              e.qZA(),
              e.TgZ(65, "h2", 26),
              e._uU(66, "from the blog"),
              e.qZA()()()(),
              e.TgZ(67, "div", 7)(68, "div", 27),
              e._UZ(69, "app-blog", 28),
              e.qZA()()()(),
              e._UZ(70, "app-cart-variation", 29)(71, "app-footer-one")),
              2 & o &&
                (e.xp6(2),
                e.Q6J("sliders", t.sliders)("textClass", "text-center")(
                  "category",
                  "vegetables"
                )("buttonText", "shop now"),
                e.xp6(14),
                e.Q6J("options", t.ProductSliderConfig),
                e.xp6(1),
                e.Q6J("ngForOf", e.Dn7(18, 12, t.products, 0, 8)),
                e.xp6(3),
                e.Q6J("ngStyle", e.DdM(28, Vt)),
                e.xp6(24),
                e.Q6J("ngForOf", e.Dn7(45, 16, t.products, 0, 2)),
                e.xp6(6),
                e.Q6J("ngForOf", e.Dn7(51, 20, t.products, 1, 2)),
                e.xp6(6),
                e.Q6J("ngForOf", e.Dn7(57, 24, t.products, 2, 4)),
                e.xp6(13),
                e.Q6J("blogs", t.blogs),
                e.xp6(1),
                e.Q6J("direction", "right"));
          },
          dependencies: [
            s.sg,
            s.PC,
            l.Fy,
            l.Mp,
            x.K,
            A,
            Q,
            L,
            b,
            f,
            v,
            y,
            s.OU,
          ],
        }));
      }
      var Ae = u(11481);
      const Et = function () {
          return ["/shop/collection/left/sidebar"];
        },
        Wt = function (n) {
          return { category: n };
        };
      function Kt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div")(1, "div", 3)(2, "div"),
            e._UZ(3, "img", 4),
            e.TgZ(4, "h4"),
            e._uU(5),
            e.qZA(),
            e._UZ(6, "ul", 5),
            e.TgZ(7, "a", 6),
            e._uU(8, " view more "),
            e.qZA()()()()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("ngClass", t.class),
            e.xp6(2),
            e.Q6J("src", o.image, e.LSH),
            e.xp6(2),
            e.Oqu(o.title),
            e.xp6(1),
            e.Q6J("innerHTML", o.text, e.oJD),
            e.xp6(1),
            e.Q6J("routerLink", e.DdM(6, Et))(
              "queryParams",
              e.VKq(7, Wt, t.category)
            );
        }
      }
      function Xt(n, i) {
        1 & n && (e.ynx(0), e.YNc(1, Kt, 9, 9, "ng-template", 2), e.BQk());
      }
      class F {
        constructor() {
          this.CollectionSliderConfig = g.Tj;
        }
        ngOnInit() {}
        static #e = (this.ɵfac = function (o) {
          return new (o || F)();
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: F,
          selectors: [["app-collection"]],
          inputs: {
            categories: "categories",
            category: "category",
            class: "class",
          },
          decls: 2,
          vars: 2,
          consts: [
            [1, "category-m", "no-arrow", 3, "options"],
            [4, "ngFor", "ngForOf"],
            ["carouselSlide", ""],
            [1, "category-wrapper", 3, "ngClass"],
            ["alt", "", 1, "img-fluid", "w-auto", 3, "src"],
            [1, "category-link", 3, "innerHTML"],
            [1, "btn", "btn-outline", 3, "routerLink", "queryParams"],
          ],
          template: function (o, t) {
            1 & o &&
              (e.TgZ(0, "owl-carousel-o", 0),
              e.YNc(1, Xt, 2, 0, "ng-container", 1),
              e.qZA()),
              2 & o &&
                (e.Q6J("options", t.CollectionSliderConfig),
                e.xp6(1),
                e.Q6J("ngForOf", t.categories));
          },
          dependencies: [s.mk, s.sg, d.rH, l.Fy, l.Mp],
        }));
      }
      function Gt(n, i) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "div", 49),
            e._UZ(2, "app-product-box-one", 50),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw(3);
          e.xp6(2),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function Rt(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 48),
            e.YNc(1, Gt, 3, 2, "ng-container", 29),
            e.ALo(2, "slice"),
            e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("ngForOf", e.Dn7(2, 1, t.getCollectionProducts(o), 0, 8));
        }
      }
      function eo(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "li", 45)(1, "a", 46),
            e._uU(2),
            e.qZA(),
            e.YNc(3, Rt, 3, 5, "ng-template", 47),
            e.qZA()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.Q6J("ngbNavItem", o), e.xp6(2), e.hij(" ", o, " ");
        }
      }
      function to(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 52), e._UZ(1, "app-product-box-two", 50), e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function oo(n, i) {
        1 & n && (e.ynx(0), e.YNc(1, to, 2, 2, "ng-template", 51), e.BQk());
      }
      function io(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 57)(1, "div")(2, "h4"),
            e._uU(3),
            e.qZA(),
            e.TgZ(4, "h2"),
            e._uU(5),
            e.qZA()()()),
          2 & n)
        ) {
          const o = e.oxw().$implicit;
          e.xp6(3), e.Oqu(o.title), e.xp6(2), e.Oqu(o.text);
        }
      }
      const no = function () {
          return ["/shop/collection/left/sidebar"];
        },
        ro = function () {
          return { category: "watch" };
        };
      function so(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 33)(1, "a", 53)(2, "div", 54),
            e._UZ(3, "img", 55),
            e.YNc(4, io, 6, 2, "div", 56),
            e.qZA()()()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.xp6(1),
            e.Q6J("routerLink", e.DdM(4, no))("queryParams", e.DdM(5, ro)),
            e.xp6(2),
            e.Q6J("src", o.image, e.LSH),
            e.xp6(1),
            e.Q6J("ngIf", o.title && o.text);
        }
      }
      function co(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 58),
            e._UZ(1, "app-product-box-vertical", 50),
            e.qZA()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function ao(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 52), e._UZ(1, "app-product-box-two", 50), e.qZA()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function lo(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 58),
            e._UZ(1, "app-product-box-vertical", 50),
            e.qZA()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      const po = function () {
        return { "background-image": "url(assets/images/offer-banner-2.jpg)" };
      };
      class B {
        constructor(i, o) {
          (this._sanitizer = i),
            (this.productService = o),
            (this.themeLogo = "assets/images/icon/logo-14.png"),
            (this.products = []),
            (this.productCollections = []),
            (this.ProductSliderConfig = g.O_),
            (this.CollectionSliderConfig = g.Tj),
            (this.sliders = [
              {
                title: "every time",
                subTitle: "mittnalier",
                image: "assets/images/slider/9.jpg",
              },
              {
                title: "welcome to fashion",
                subTitle: "Men Watch",
                image: "assets/images/slider/10.jpg",
              },
            ]),
            (this.logos = [
              { image: "assets/images/logos/1.png" },
              { image: "assets/images/logos/2.png" },
              { image: "assets/images/logos/3.png" },
              { image: "assets/images/logos/4.png" },
              { image: "assets/images/logos/5.png" },
              { image: "assets/images/logos/6.png" },
              { image: "assets/images/logos/7.png" },
              { image: "assets/images/logos/8.png" },
            ]),
            (this.categories = [
              {
                image: "assets/images/categories/1.png",
                title: "watch models",
                text: this._sanitizer.bypassSecurityTrustHtml(
                  '<li><a href="#">d1 milano</a></li><li><a href="#">damaskeening</a></li><li><a href="#">diving watch</a></li><li><a href="#">dollar watch</a></li>'
                ),
              },
              {
                image: "assets/images/categories/2.png",
                title: "calculator watch",
                text: this._sanitizer.bypassSecurityTrustHtml(
                  '<li><a href="#">Shock-resistant watch</a></li><li><a href="#">Skeleton watch</a></li><li><a href="#">Slow watch</a></li><li><a href="#">Solar-powered watch</a></li>'
                ),
              },
              {
                image: "assets/images/categories/3.png",
                title: "Antimagnetic watch",
                text: this._sanitizer.bypassSecurityTrustHtml(
                  '<li><a href="#">Watchmaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio watches</a></li><li><a href="#">Citizen Watch</a></li>'
                ),
              },
              {
                image: "assets/images/categories/4.png",
                title: "History of watches",
                text: this._sanitizer.bypassSecurityTrustHtml(
                  '<li><a href="#">Manufacture dhorlogerie</a></li><li><a href="#">Mechanical watch</a></li><li><a href="#">Microbrand watches</a></li><li><a href="#">MIL-W-46374</a></li>'
                ),
              },
              {
                image: "assets/images/categories/1.png",
                title: "watch models",
                text: this._sanitizer.bypassSecurityTrustHtml(
                  '<li><a href="#">d1 milano</a></li><li><a href="#">damaskeening</a></li><li><a href="#">diving watch</a></li><li><a href="#">dollar watch</a></li>'
                ),
              },
            ]),
            (this.collections = [
              {
                image: "assets/images/collection/watch/1.jpg",
                title: "minimum 10% off",
                text: "new watch",
              },
              { image: "assets/images/collection/watch/2.jpg" },
              {
                image: "assets/images/collection/watch/3.jpg",
                title: "minimum 10% off",
                text: "gold watch`",
              },
            ]),
            (this.blogs = [
              {
                image: "assets/images/blog/10.jpg",
                date: "25 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/11.jpg",
                date: "26 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/12.jpg",
                date: "27 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/13.jpg",
                date: "28 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
            ]),
            this.productService.getProducts.subscribe((t) => {
              (this.products = t.filter((r) => "watch" == r.type)),
                this.products.filter((r) => {
                  r.collection.filter((a) => {
                    -1 === this.productCollections.indexOf(a) &&
                      this.productCollections.push(a);
                  });
                });
            });
        }
        ngOnInit() {
          document.documentElement.style.setProperty(
            "--theme-deafult",
            "#e4604a"
          );
        }
        ngOnDestroy() {
          document.documentElement.style.removeProperty("--theme-deafult");
        }
        getCollectionProducts(i) {
          return this.products.filter((o) => {
            if (o.collection.find((t) => t === i)) return o;
          });
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || B)(e.Y36(Ae.H7), e.Y36(m.M));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: B,
          selectors: [["app-watch"]],
          decls: 122,
          vars: 34,
          consts: [
            [3, "themeLogo"],
            [1, "p-0"],
            [3, "sliders", "textClass", "category", "buttonText"],
            [1, "container"],
            [1, "row"],
            [1, "col-md-12"],
            [3, "logos"],
            [1, "banner-timer", 3, "ngStyle"],
            [1, "col-md-6"],
            [1, "banner-text"],
            [1, "timer-box"],
            [1, "timer"],
            ["id", "demo"],
            [1, "padding-l"],
            [1, "timer-cal"],
            [1, "section-b-space"],
            [1, "col"],
            [3, "categories", "category"],
            [1, "tab-bg"],
            [1, "container-fluid"],
            [1, "title4"],
            [1, "title-inner4"],
            [1, "line"],
            [1, "theme-tab"],
            [
              "ngbNav",
              "",
              1,
              "tabs",
              "tab-title",
              "justify-content-center",
              "nav",
              "nav-pills",
              3,
              "activeId",
              "activeIdChange",
            ],
            ["nav", "ngbNav"],
            [3, "ngbNavItem", 4, "ngFor", "ngForOf"],
            [1, "mt-2", 3, "ngbNavOutlet"],
            [1, "product-4", "product-m", "no-arrow", 3, "options"],
            [4, "ngFor", "ngForOf"],
            [1, "row", "partition3"],
            ["class", "col-md-4", 4, "ngFor", "ngForOf"],
            [1, "full-box"],
            [1, "col-md-4"],
            [1, "theme-card", "center-align"],
            [1, "offer-slider"],
            [1, "sec-1"],
            ["class", "product-box2", 4, "ngFor", "ngForOf"],
            [1, "col-md-4", "center-slider"],
            ["class", "product-box product-wrap", 4, "ngFor", "ngForOf"],
            [1, "blog", "blog-bg", "section-b-space"],
            [3, "blogs"],
            [1, "container", "section-t-space", "section-b-space"],
            [1, "service", "border-section", "small-section"],
            [3, "direction"],
            [3, "ngbNavItem"],
            ["ngbNavLink", ""],
            ["ngbNavContent", ""],
            [1, "no-slider", "row"],
            [1, "product-box"],
            [3, "product", "currency"],
            ["carouselSlide", ""],
            [1, "product-box", "product-wrap"],
            [3, "routerLink", "queryParams"],
            [1, "collection-banner", "p-left"],
            ["alt", "", 1, "img-fluid", 3, "src"],
            ["class", "contain-banner banner-3", 4, "ngIf"],
            [1, "contain-banner", "banner-3"],
            [1, "product-box2"],
          ],
          template: function (o, t) {
            if (
              (1 & o &&
                (e._UZ(0, "app-header-one", 0),
                e.TgZ(1, "section", 1),
                e._UZ(2, "app-slider", 2),
                e.qZA(),
                e.TgZ(3, "section")(4, "div", 3)(5, "div", 4)(6, "div", 5),
                e._UZ(7, "app-logo", 6),
                e.qZA()()()(),
                e.TgZ(8, "section")(9, "div", 3)(10, "div", 7)(11, "div", 4)(
                  12,
                  "div",
                  8
                )(
                  13,
                  "div",
                  9
                )(14, "h2"),
                e._uU(15, "Save "),
                e.TgZ(16, "span"),
                e._uU(17, "30% off"),
                e.qZA(),
                e._uU(18, " Digital Watch"),
                e.qZA()()(),
                e.TgZ(19, "div", 8)(20, "div", 10)(21, "div", 11)(22, "p", 12)(
                  23,
                  "span"
                ),
                e._uU(24, " 11"),
                e.TgZ(25, "span", 13),
                e._uU(26, ":"),
                e.qZA(),
                e.TgZ(27, "span", 14),
                e._uU(28, "Days"),
                e.qZA()(),
                e.TgZ(29, "span"),
                e._uU(30, " 11"),
                e.TgZ(31, "span", 13),
                e._uU(32, ":"),
                e.qZA(),
                e.TgZ(33, "span", 14),
                e._uU(34, "Hrs"),
                e.qZA()(),
                e.TgZ(35, "span"),
                e._uU(36, " 11"),
                e.TgZ(37, "span", 13),
                e._uU(38, ":"),
                e.qZA(),
                e.TgZ(39, "span", 14),
                e._uU(40, "Min"),
                e.qZA()(),
                e.TgZ(41, "span"),
                e._uU(42, " 11"),
                e.TgZ(43, "span", 14),
                e._uU(44, "Sec"),
                e.qZA()()()()()()()()()(),
                e.TgZ(45, "section", 15)(46, "div", 3)(47, "div", 4)(
                  48,
                  "div",
                  16
                ),
                e._UZ(49, "app-collection", 17),
                e.qZA()()()(),
                e.TgZ(50, "section", 1)(51, "div", 18)(52, "div", 19)(
                  53,
                  "div",
                  4
                )(54, "div", 16)(55, "div", 20)(56, "h2", 21),
                e._uU(57, "trending products"),
                e.qZA(),
                e.TgZ(58, "div", 22),
                e._UZ(59, "span"),
                e.qZA()(),
                e.TgZ(60, "div", 23)(61, "ul", 24, 25),
                e.NdJ("activeIdChange", function (a) {
                  return (t.active = a);
                }),
                e.YNc(63, eo, 4, 2, "li", 26),
                e.qZA(),
                e._UZ(64, "div", 27),
                e.qZA()()()()()(),
                e.TgZ(65, "section")(66, "div", 3)(67, "div", 4)(68, "div", 16)(
                  69,
                  "div",
                  20
                )(70, "h2", 21),
                e._uU(71, "trending products"),
                e.qZA(),
                e.TgZ(72, "div", 22),
                e._UZ(73, "span"),
                e.qZA()(),
                e.TgZ(74, "owl-carousel-o", 28),
                e.YNc(75, oo, 2, 0, "ng-container", 29),
                e.qZA()()()()(),
                e.TgZ(76, "section")(77, "div", 3)(78, "div", 30),
                e.YNc(79, so, 5, 6, "div", 31),
                e.qZA()()(),
                e.TgZ(80, "section", 15)(81, "div", 32)(82, "div", 3)(
                  83,
                  "div",
                  20
                )(84, "h2", 21),
                e._uU(85, "special products"),
                e.qZA(),
                e.TgZ(86, "div", 22),
                e._UZ(87, "span"),
                e.qZA()(),
                e.TgZ(88, "div", 4)(89, "div", 33)(90, "div", 34)(
                  91,
                  "div",
                  35
                )(92, "div", 36),
                e.YNc(93, co, 2, 2, "div", 37),
                e.ALo(94, "slice"),
                e.qZA()()()(),
                e.TgZ(95, "div", 38)(96, "div")(97, "div", 35)(98, "div"),
                e.YNc(99, ao, 2, 2, "div", 39),
                e.ALo(100, "slice"),
                e.qZA()()()(),
                e.TgZ(101, "div", 33)(102, "div", 34)(103, "div", 35)(
                  104,
                  "div",
                  36
                ),
                e.YNc(105, lo, 2, 2, "div", 37),
                e.ALo(106, "slice"),
                e.qZA()()()()()()()(),
                e.TgZ(107, "section", 40)(108, "div", 3)(109, "div", 20)(
                  110,
                  "h2",
                  21
                ),
                e._uU(111, "Recent Story"),
                e.qZA(),
                e.TgZ(112, "div", 22),
                e._UZ(113, "span"),
                e.qZA()(),
                e.TgZ(114, "div", 4)(115, "div", 5),
                e._UZ(116, "app-blog", 41),
                e.qZA()()()(),
                e.TgZ(117, "div", 42)(118, "section", 43),
                e._UZ(119, "app-services"),
                e.qZA()(),
                e._UZ(120, "app-cart-variation", 44)(121, "app-footer-one", 0)),
              2 & o)
            ) {
              const r = e.MAs(62);
              e.Q6J("themeLogo", t.themeLogo),
                e.xp6(2),
                e.Q6J("sliders", t.sliders)("textClass", "text-center")(
                  "category",
                  "watch"
                )("buttonText", "shop now"),
                e.xp6(5),
                e.Q6J("logos", t.logos),
                e.xp6(3),
                e.Q6J("ngStyle", e.DdM(33, po)),
                e.xp6(39),
                e.Q6J("categories", t.categories)("category", "watch"),
                e.xp6(12),
                e.Q6J("activeId", t.active),
                e.xp6(2),
                e.Q6J("ngForOf", t.productCollections),
                e.xp6(1),
                e.Q6J("ngbNavOutlet", r),
                e.xp6(10),
                e.Q6J("options", t.ProductSliderConfig),
                e.xp6(1),
                e.Q6J("ngForOf", t.products),
                e.xp6(4),
                e.Q6J("ngForOf", t.collections),
                e.xp6(14),
                e.Q6J("ngForOf", e.Dn7(94, 21, t.products, 0, 2)),
                e.xp6(6),
                e.Q6J("ngForOf", e.Dn7(100, 25, t.products, 4, 5)),
                e.xp6(6),
                e.Q6J("ngForOf", e.Dn7(106, 29, t.products, 2, 4)),
                e.xp6(11),
                e.Q6J("blogs", t.blogs),
                e.xp6(4),
                e.Q6J("direction", "left"),
                e.xp6(1),
                e.Q6J("themeLogo", t.themeLogo);
            }
          },
          dependencies: [
            s.sg,
            s.O5,
            s.PC,
            d.rH,
            c.uN,
            c.Pz,
            c.nv,
            c.Vx,
            c.tO,
            l.Fy,
            l.Mp,
            U.h,
            x.K,
            q.y,
            Q,
            L,
            b,
            f,
            v,
            T,
            y,
            F,
            s.OU,
          ],
        }));
      }
      const uo = function () {
          return ["/shop/collection/left/sidebar"];
        },
        go = function () {
          return { category: "furniture" };
        };
      function mo(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 24)(1, "a", 25)(2, "div", 26),
            e._UZ(3, "img", 27),
            e.TgZ(4, "div", 28)(5, "div")(6, "h4"),
            e._uU(7),
            e.qZA(),
            e.TgZ(8, "h2"),
            e._uU(9),
            e.qZA()()()()()()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.xp6(1),
            e.Q6J("routerLink", e.DdM(5, uo))("queryParams", e.DdM(6, go)),
            e.xp6(2),
            e.Q6J("src", o.image, e.LSH),
            e.xp6(4),
            e.Oqu(o.save),
            e.xp6(2),
            e.Oqu(o.title);
        }
      }
      function _o(n, i) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "div", 34),
            e._UZ(2, "app-product-box-one", 35),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw(3);
          e.xp6(2),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function fo(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 32),
            e.YNc(1, _o, 3, 2, "ng-container", 33),
            e.ALo(2, "slice"),
            e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("ngForOf", e.Dn7(2, 1, t.getCollectionProducts(o), 0, 8));
        }
      }
      function vo(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "li", 29)(1, "a", 30),
            e._uU(2),
            e.qZA(),
            e.YNc(3, fo, 3, 5, "ng-template", 31),
            e.qZA()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.Q6J("ngbNavItem", o), e.xp6(2), e.hij(" ", o, " ");
        }
      }
      const ho = function () {
        return { "background-image": "url(assets/images/parallax/5.jpg)" };
      };
      class z {
        constructor(i) {
          (this.productService = i),
            (this.themeLogo = "assets/images/icon/logo-12.png"),
            (this.products = []),
            (this.productCollections = []),
            (this.sliders = [
              {
                title: "furniture sofa",
                subTitle: "harmony sofa",
                image: "assets/images/slider/12.jpg",
              },
              {
                title: "furniture sofa",
                subTitle: "harmony sofa",
                image: "assets/images/slider/13.jpg",
              },
            ]),
            (this.collections = [
              {
                image: "assets/images/collection/furniture/1.jpg",
                save: "save 50%",
                title: "Sofa",
                link: "/home/left-sidebar/collection/furniture",
              },
              {
                image: "assets/images/collection/furniture/2.jpg",
                save: "save 50%",
                title: "Bean Bag",
                link: "/home/left-sidebar/collection/furniture",
              },
              {
                image: "assets/images/collection/furniture/3.jpg",
                save: "save 50%",
                title: "Chair",
                link: "/home/left-sidebar/collection/furniture",
              },
            ]),
            (this.blogs = [
              {
                image: "assets/images/blog/14.jpg",
                date: "25 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/15.jpg",
                date: "26 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/16.jpg",
                date: "27 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/14.jpg",
                date: "28 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
            ]),
            this.productService.getProducts.subscribe((o) => {
              (this.products = o.filter((t) => "furniture" == t.type)),
                this.products.filter((t) => {
                  t.collection.filter((r) => {
                    -1 === this.productCollections.indexOf(r) &&
                      this.productCollections.push(r);
                  });
                });
            });
        }
        ngOnInit() {
          document.documentElement.style.setProperty(
            "--theme-deafult",
            "#d4b196"
          );
        }
        ngOnDestroy() {
          document.documentElement.style.removeProperty("--theme-deafult");
        }
        getCollectionProducts(i) {
          return this.products.filter((o) => {
            if (o.collection.find((t) => t === i)) return o;
          });
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || z)(e.Y36(m.M));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: z,
          selectors: [["app-furniture"]],
          decls: 46,
          vars: 14,
          consts: [
            [3, "themeLogo"],
            [1, "p-0"],
            [3, "sliders", "textClass", "category", "buttonText"],
            [1, "banner-padding", "banner-furniture"],
            [1, "container-fluid"],
            [1, "row", "partition3"],
            ["class", "col-md-4", 4, "ngFor", "ngForOf"],
            [1, "title1", "section-t-space"],
            [1, "title-inner1"],
            [1, "section-b-space", "p-t-0"],
            [1, "container"],
            [1, "row"],
            [1, "col", "theme-tab"],
            [
              "ngbNav",
              "",
              1,
              "tabs",
              "tab-title",
              "justify-content-center",
              "nav",
              "nav-pills",
              3,
              "activeId",
              "activeIdChange",
            ],
            ["nav", "ngbNav"],
            [3, "ngbNavItem", 4, "ngFor", "ngForOf"],
            [1, "mt-2", 3, "ngbNavOutlet"],
            [
              1,
              "full-banner",
              "parallax-banner3",
              "parallax",
              "text-center",
              "p-left",
              3,
              "ngStyle",
            ],
            [1, "col"],
            [1, "banner-contain"],
            [1, "blog", "p-t-0", "section-b-space"],
            [1, "col-md-12"],
            [3, "blogs"],
            [3, "direction"],
            [1, "col-md-4"],
            [3, "routerLink", "queryParams"],
            [1, "collection-banner", "p-right", "text-end"],
            ["alt", "collection", 1, "img-fluid", 3, "src"],
            [1, "contain-banner", "banner-3"],
            [3, "ngbNavItem"],
            ["ngbNavLink", ""],
            ["ngbNavContent", ""],
            [1, "no-slider", "row"],
            [4, "ngFor", "ngForOf"],
            [1, "product-box"],
            [3, "product", "currency"],
          ],
          template: function (o, t) {
            if (
              (1 & o &&
                (e._UZ(0, "app-header-one", 0),
                e.TgZ(1, "section", 1),
                e._UZ(2, "app-slider", 2),
                e.qZA(),
                e.TgZ(3, "section", 3)(4, "div", 4)(5, "div", 5),
                e.YNc(6, mo, 10, 7, "div", 6),
                e.qZA()()(),
                e.TgZ(7, "div", 7)(8, "h4"),
                e._uU(9, "exclusive products"),
                e.qZA(),
                e.TgZ(10, "h2", 8),
                e._uU(11, "special products"),
                e.qZA()(),
                e.TgZ(12, "section", 9)(13, "div", 10)(14, "div", 11)(
                  15,
                  "div",
                  12
                )(16, "ul", 13, 14),
                e.NdJ("activeIdChange", function (a) {
                  return (t.active = a);
                }),
                e.YNc(18, vo, 4, 2, "li", 15),
                e.qZA(),
                e._UZ(19, "div", 16),
                e.qZA()()()(),
                e.TgZ(20, "section", 1)(21, "div", 17)(22, "div", 10)(
                  23,
                  "div",
                  11
                )(24, "div", 18)(
                  25,
                  "div",
                  19
                )(26, "h2"),
                e._uU(27, "2018"),
                e.qZA(),
                e.TgZ(28, "h3"),
                e._uU(29, "interior design in home"),
                e.qZA(),
                e.TgZ(30, "h4"),
                e._uU(31, "special offer"),
                e.qZA()()()()()()(),
                e.TgZ(32, "section", 20)(33, "div", 10)(34, "div", 11)(
                  35,
                  "div",
                  18
                )(
                  36,
                  "div",
                  7
                )(37, "h4"),
                e._uU(38, "Recent Story"),
                e.qZA(),
                e.TgZ(39, "h2", 8),
                e._uU(40, "from the blog"),
                e.qZA()()()(),
                e.TgZ(41, "div", 11)(42, "div", 21),
                e._UZ(43, "app-blog", 22),
                e.qZA()()()(),
                e._UZ(44, "app-cart-variation", 23)(45, "app-footer-one", 0)),
              2 & o)
            ) {
              const r = e.MAs(17);
              e.Q6J("themeLogo", t.themeLogo),
                e.xp6(2),
                e.Q6J("sliders", t.sliders)("textClass", "text-center")(
                  "category",
                  "furniture"
                )("buttonText", "shop now"),
                e.xp6(4),
                e.Q6J("ngForOf", t.collections),
                e.xp6(10),
                e.Q6J("activeId", t.active),
                e.xp6(2),
                e.Q6J("ngForOf", t.productCollections),
                e.xp6(1),
                e.Q6J("ngbNavOutlet", r),
                e.xp6(2),
                e.Q6J("ngStyle", e.DdM(13, ho)),
                e.xp6(22),
                e.Q6J("blogs", t.blogs),
                e.xp6(1),
                e.Q6J("direction", "top"),
                e.xp6(1),
                e.Q6J("themeLogo", t.themeLogo);
            }
          },
          dependencies: [
            s.sg,
            s.PC,
            d.rH,
            c.uN,
            c.Pz,
            c.nv,
            c.Vx,
            c.tO,
            U.h,
            x.K,
            q.y,
            b,
            f,
            v,
            s.OU,
          ],
        }));
      }
      function Zo(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 44),
            e._UZ(1, "app-product-box-vertical", 45),
            e.qZA()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function bo(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 46), e._UZ(1, "app-product-box-two", 45), e.qZA()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function To(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 44),
            e._UZ(1, "app-product-box-vertical", 45),
            e.qZA()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function yo(n, i) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "div", 51)(2, "div", 44),
            e._UZ(3, "app-product-box-vertical", 45),
            e.qZA()(),
            e.BQk()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw(3);
          e.xp6(3),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function xo(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 50),
            e.YNc(1, yo, 4, 2, "ng-container", 35),
            e.ALo(2, "slice"),
            e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("ngForOf", e.Dn7(2, 1, t.getCollectionProducts(o), 0, 8));
        }
      }
      function qo(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "li", 47)(1, "a", 48),
            e._uU(2),
            e.qZA(),
            e.YNc(3, xo, 3, 5, "ng-template", 49),
            e.qZA()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.Q6J("ngbNavItem", o), e.xp6(2), e.hij(" ", o, " ");
        }
      }
      function Ao(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 53), e._UZ(1, "app-product-box-two", 45), e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function Co(n, i) {
        1 & n && (e.ynx(0), e.YNc(1, Ao, 2, 2, "ng-template", 52), e.BQk());
      }
      const Ce = function () {
          return ["/shop/collection/left/sidebar"];
        },
        Ue = function () {
          return { category: "flower" };
        },
        Uo = function () {
          return { "background-image": "url(assets/images/flower-bg1.jpg)" };
        },
        wo = function () {
          return { "background-image": "url(assets/images/flower-bg.jpg)" };
        };
      class $ {
        constructor(i) {
          (this.productService = i),
            (this.themeLogo = "assets/images/icon/logo-11.png"),
            (this.products = []),
            (this.productCollections = []),
            (this.ProductSliderConfig = g.O_),
            (this.sliders = [
              {
                title: "save upto 20%",
                subTitle: "creative & decor",
                image: "assets/images/slider/13.jpg",
              },
              {
                title: "save upto 10%",
                subTitle: "pre-made & custom",
                image: "assets/images/slider/14.jpg",
              },
            ]),
            (this.blogs = [
              {
                image: "assets/images/blog/17.jpg",
                date: "25 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/18.jpg",
                date: "26 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/19.jpg",
                date: "27 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/17.jpg",
                date: "28 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
            ]),
            this.productService.getProducts.subscribe((o) => {
              (this.products = o.filter((t) => "flower" == t.type)),
                this.products.filter((t) => {
                  t.collection.filter((r) => {
                    -1 === this.productCollections.indexOf(r) &&
                      this.productCollections.push(r);
                  });
                });
            });
        }
        ngOnInit() {
          document.documentElement.style.setProperty(
            "--theme-deafult",
            "#fa869b"
          );
        }
        ngOnDestroy() {
          document.documentElement.style.removeProperty("--theme-deafult");
        }
        getCollectionProducts(i) {
          return this.products.filter((o) => {
            if (o.collection.find((t) => t === i)) return o;
          });
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || $)(e.Y36(m.M));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: $,
          selectors: [["app-flower"]],
          decls: 91,
          vars: 44,
          consts: [
            [3, "themeLogo"],
            [1, "p-0"],
            [3, "sliders", "textClass", "category", "buttonText"],
            [1, "banner-padding", "pb-0"],
            [1, "container"],
            [1, "row", "partition2"],
            [1, "col-md-4"],
            [3, "routerLink", "queryParams"],
            [1, "collection-banner", "p-left", "text-center"],
            [
              "src",
              "assets/images/collection/flower/1.jpg",
              "alt",
              "banner",
              1,
              "img-fluid",
            ],
            [1, "col-md-8"],
            [1, "collection-banner", "p-right", "text-end"],
            [
              "src",
              "assets/images/collection/flower/2.jpg",
              "alt",
              "banner",
              1,
              "img-fluid",
            ],
            [1, "contain-banner"],
            [1, "section-b-space"],
            [1, "full-box"],
            [1, "title4"],
            [1, "title-inner4"],
            [1, "line"],
            [1, "row"],
            [1, "theme-card", "center-align"],
            [1, "offer-slider"],
            [1, "sec-1"],
            ["class", "product-box2", 4, "ngFor", "ngForOf"],
            [1, "col-md-4", "center-slider"],
            [
              "class",
              "product-box product-wrap text-center",
              4,
              "ngFor",
              "ngForOf",
            ],
            [1, "bg-block", 3, "ngStyle"],
            [1, "container-fluid"],
            [1, "col"],
            [1, "theme-tab"],
            [
              "ngbNav",
              "",
              1,
              "tabs",
              "tab-title",
              "justify-content-center",
              "nav",
              "nav-pills",
              3,
              "activeId",
              "activeIdChange",
            ],
            ["nav", "ngbNav"],
            [3, "ngbNavItem", 4, "ngFor", "ngForOf"],
            [1, "mt-2", 3, "ngbNavOutlet"],
            [1, "product-4", "product-m", "no-arrow", 3, "options"],
            [4, "ngFor", "ngForOf"],
            [1, "blog", "flower-bg", "section-b-space", 3, "ngStyle"],
            [1, "title1", "section-t-space"],
            [1, "title-inner1"],
            [1, "col-md-12"],
            [3, "blogs"],
            [1, "container", "section-t-space", "section-b-space"],
            [1, "service", "border-section", "small-section"],
            [3, "direction"],
            [1, "product-box2"],
            [3, "product", "currency"],
            [1, "product-box", "product-wrap", "text-center"],
            [3, "ngbNavItem"],
            ["ngbNavLink", ""],
            ["ngbNavContent", ""],
            [1, "row", "product-tab"],
            [1, "tab-box"],
            ["carouselSlide", ""],
            [1, "product-box", "product-wrap"],
          ],
          template: function (o, t) {
            if (
              (1 & o &&
                (e._UZ(0, "app-header-three", 0),
                e.TgZ(1, "section", 1),
                e._UZ(2, "app-slider", 2),
                e.qZA(),
                e.TgZ(3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(
                  7,
                  "a",
                  7
                )(8, "div", 8),
                e._UZ(9, "img", 9),
                e.qZA()()(),
                e.TgZ(10, "div", 10)(11, "a", 7)(12, "div", 11),
                e._UZ(13, "img", 12),
                e.TgZ(14, "div", 13)(15, "div")(16, "h4"),
                e._uU(17, "save 30%"),
                e.qZA(),
                e.TgZ(18, "h2"),
                e._uU(19, "hot deal"),
                e.qZA()()()()()()()()(),
                e.TgZ(20, "section", 14)(21, "div", 15)(22, "div", 4)(
                  23,
                  "div",
                  16
                )(24, "h2", 17),
                e._uU(25, "best selling products"),
                e.qZA(),
                e.TgZ(26, "div", 18),
                e._UZ(27, "span"),
                e.qZA()(),
                e.TgZ(28, "div", 19)(29, "div", 6)(30, "div", 20)(
                  31,
                  "div",
                  21
                )(32, "div", 22),
                e.YNc(33, Zo, 2, 2, "div", 23),
                e.ALo(34, "slice"),
                e.qZA()()()(),
                e.TgZ(35, "div", 24)(36, "div")(37, "div", 21)(38, "div"),
                e.YNc(39, bo, 2, 2, "div", 25),
                e.ALo(40, "slice"),
                e.qZA()()()(),
                e.TgZ(41, "div", 6)(42, "div", 20)(43, "div", 21)(
                  44,
                  "div",
                  22
                ),
                e.YNc(45, To, 2, 2, "div", 23),
                e.ALo(46, "slice"),
                e.qZA()()()()()()()(),
                e.TgZ(47, "div", 26)(48, "section", 1)(49, "div", 27)(
                  50,
                  "div",
                  19
                )(51, "div", 28)(52, "div", 16)(53, "h2", 17),
                e._uU(54, "trending products"),
                e.qZA(),
                e.TgZ(55, "div", 18),
                e._UZ(56, "span"),
                e.qZA()(),
                e.TgZ(57, "div", 29)(58, "ul", 30, 31),
                e.NdJ("activeIdChange", function (a) {
                  return (t.active = a);
                }),
                e.YNc(60, qo, 4, 2, "li", 32),
                e.qZA(),
                e._UZ(61, "div", 33),
                e.qZA()()()()()(),
                e.TgZ(62, "section", 14)(63, "div", 4)(64, "div", 19)(
                  65,
                  "div",
                  28
                )(66, "div", 16)(67, "h2", 17),
                e._uU(68, "trending items"),
                e.qZA(),
                e.TgZ(69, "div", 18),
                e._UZ(70, "span"),
                e.qZA()(),
                e.TgZ(71, "owl-carousel-o", 34),
                e.YNc(72, Co, 2, 0, "ng-container", 35),
                e.ALo(73, "slice"),
                e.qZA()()()()(),
                e.TgZ(74, "section", 36)(75, "div", 4)(76, "div", 19)(
                  77,
                  "div",
                  28
                )(
                  78,
                  "div",
                  37
                )(79, "h4"),
                e._uU(80, "Recent Story"),
                e.qZA(),
                e.TgZ(81, "h2", 38),
                e._uU(82, "from the blog"),
                e.qZA()()()(),
                e.TgZ(83, "div", 19)(84, "div", 39),
                e._UZ(85, "app-blog", 40),
                e.qZA()()()(),
                e.TgZ(86, "div", 41)(87, "section", 42),
                e._UZ(88, "app-services"),
                e.qZA()(),
                e._UZ(89, "app-cart-variation", 43)(90, "app-footer-one", 0)),
              2 & o)
            ) {
              const r = e.MAs(59);
              e.Q6J("themeLogo", t.themeLogo),
                e.xp6(2),
                e.Q6J("sliders", t.sliders)("textClass", "text-center")(
                  "category",
                  "flower"
                )("buttonText", "shop now"),
                e.xp6(5),
                e.Q6J("routerLink", e.DdM(38, Ce))(
                  "queryParams",
                  e.DdM(39, Ue)
                ),
                e.xp6(4),
                e.Q6J("routerLink", e.DdM(40, Ce))(
                  "queryParams",
                  e.DdM(41, Ue)
                ),
                e.xp6(22),
                e.Q6J("ngForOf", e.Dn7(34, 22, t.products, 0, 2)),
                e.xp6(6),
                e.Q6J("ngForOf", e.Dn7(40, 26, t.products, 4, 5)),
                e.xp6(6),
                e.Q6J("ngForOf", e.Dn7(46, 30, t.products, 2, 4)),
                e.xp6(2),
                e.Q6J("ngStyle", e.DdM(42, Uo)),
                e.xp6(11),
                e.Q6J("activeId", t.active),
                e.xp6(2),
                e.Q6J("ngForOf", t.productCollections),
                e.xp6(1),
                e.Q6J("ngbNavOutlet", r),
                e.xp6(10),
                e.Q6J("options", t.ProductSliderConfig),
                e.xp6(1),
                e.Q6J("ngForOf", e.Dn7(73, 34, t.products, 0, 16)),
                e.xp6(2),
                e.Q6J("ngStyle", e.DdM(43, wo)),
                e.xp6(11),
                e.Q6J("blogs", t.blogs),
                e.xp6(4),
                e.Q6J("direction", "bottom"),
                e.xp6(1),
                e.Q6J("themeLogo", t.themeLogo);
            }
          },
          dependencies: [
            s.sg,
            s.PC,
            d.rH,
            c.uN,
            c.Pz,
            c.nv,
            c.Vx,
            c.tO,
            l.Fy,
            l.Mp,
            x.K,
            A,
            Q,
            L,
            b,
            f,
            v,
            y,
            s.OU,
          ],
        }));
      }
      const Jo = ["videoModal"];
      function Qo(n, i) {
        1 & n &&
          (e.TgZ(0, "div", 1)(1, "div", 2), e._UZ(2, "iframe", 3), e.qZA()());
      }
      class V {
        constructor(i, o) {
          (this.platformId = i), (this.modalService = o), (this.modalOpen = !1);
        }
        ngOnInit() {}
        openModal() {
          (this.modalOpen = !0),
            (0, s.NF)(this.platformId) &&
              this.modalService
                .open(this.VideoModal, {
                  size: "lg",
                  ariaLabelledBy: "Video-Modal",
                  centered: !0,
                  windowClass: "modal fade video-modal",
                })
                .result.then(
                  (i) => {},
                  (i) => {
                    this.closeResult = `Dismissed ${this.getDismissReason(i)}`;
                  }
                );
        }
        getDismissReason(i) {
          return i === c.If.ESC
            ? "by pressing ESC"
            : i === c.If.BACKDROP_CLICK
            ? "by clicking on a backdrop"
            : `with: ${i}`;
        }
        ngOnDestroy() {
          this.modalOpen && this.modalService.dismissAll();
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || V)(e.Y36(e.Lbi), e.Y36(c.FF));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: V,
          selectors: [["app-video-modal"]],
          viewQuery: function (o, t) {
            if ((1 & o && e.Gf(Jo, 5), 2 & o)) {
              let r;
              e.iGM((r = e.CRH())) && (t.VideoModal = r.first);
            }
          },
          decls: 2,
          vars: 0,
          consts: [
            ["videoModal", ""],
            [1, "modal-content"],
            [1, "modal-body"],
            [
              "src",
              "https://www.youtube.com/embed/FRIDLxM8Roc",
              "allowfullscreen",
              "",
            ],
          ],
          template: function (o, t) {
            1 & o && e.YNc(0, Qo, 3, 0, "ng-template", null, 0, e.W1O);
          },
        }));
      }
      const Lo = ["videoModal"];
      function ko(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 46), e._UZ(1, "app-product-box-one", 47), e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            )("cartModal", !0);
        }
      }
      function So(n, i) {
        1 & n && (e.ynx(0), e.YNc(1, ko, 2, 3, "ng-template", 45), e.BQk());
      }
      class E {
        constructor(i) {
          (this.productService = i),
            (this.themeLogo = "assets/images/icon/logo-7.png"),
            (this.products = []),
            (this.ProductSliderConfig = g.O_),
            (this.sliders = [
              {
                title: "save upto 20%",
                subTitle: "creative & decor",
                image: "assets/images/slider/15.jpg",
              },
              {
                title: "save upto 10%",
                subTitle: "pre-made & custom",
                image: "assets/images/slider/16.jpg",
              },
            ]),
            (this.blogs = [
              {
                image: "assets/images/blog/20.jpg",
                date: "25 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/21.jpg",
                date: "26 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/22.jpg",
                date: "27 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/23.jpg",
                date: "28 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
            ]),
            this.productService.getProducts.subscribe(
              (o) => (this.products = o.filter((t) => "beauty" == t.type))
            );
        }
        ngOnInit() {
          document.documentElement.style.setProperty(
            "--theme-deafult",
            "#f0b54d"
          );
        }
        ngOnDestroy() {
          document.documentElement.style.removeProperty("--theme-deafult");
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || E)(e.Y36(m.M));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: E,
          selectors: [["app-beauty"]],
          viewQuery: function (o, t) {
            if ((1 & o && e.Gf(Lo, 5), 2 & o)) {
              let r;
              e.iGM((r = e.CRH())) && (t.VideoModal = r.first);
            }
          },
          decls: 86,
          vars: 13,
          consts: [
            [3, "themeLogo"],
            [1, "p-0"],
            [3, "sliders", "textClass", "category", "buttonText"],
            [1, "section-b-space", "beauty-about"],
            [1, "container"],
            [1, "row"],
            [
              1,
              "col-xl-5",
              "col-lg-6",
              "col-md-12",
              "offset-xl-1",
              "text-center",
            ],
            ["src", "assets/images/about-main2.jpg", "alt", "", 1, "img-fluid"],
            [1, "col-xl-5", "col-lg-6", "col-md-12"],
            [1, "about-section"],
            [1, "about-text"],
            [1, "service", "small-section", "pb-0"],
            [1, "col-sm-4", "service-block1"],
            [
              "xmlns",
              "http://www.w3.org/2000/svg",
              "viewBox",
              "0 -117 679.99892 679",
            ],
            [
              "d",
              "m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0",
              "fill",
              "#ff4c3b",
            ],
            [
              "xmlns",
              "http://www.w3.org/2000/svg",
              0,
              "xmlns",
              "xlink",
              "http://www.w3.org/1999/xlink",
              "version",
              "1.1",
              "id",
              "Capa_1",
              "x",
              "0px",
              "y",
              "0px",
              "viewBox",
              "0 0 480 480",
              0,
              "xml",
              "space",
              "preserve",
              "width",
              "512px",
              "height",
              "512px",
              2,
              "enable-background",
              "new 0 0 480 480",
            ],
            [
              "d",
              "M472,432h-24V280c-0.003-4.418-3.588-7.997-8.006-7.994c-2.607,0.002-5.05,1.274-6.546,3.41l-112,160     c-2.532,3.621-1.649,8.609,1.972,11.14c1.343,0.939,2.941,1.443,4.58,1.444h104v24c0,4.418,3.582,8,8,8s8-3.582,8-8v-24h24     c4.418,0,8-3.582,8-8S476.418,432,472,432z M432,432h-88.64L432,305.376V432z",
              "fill",
              "#ff4c3b",
            ],
            [
              "d",
              "M328,464h-94.712l88.056-103.688c0.2-0.238,0.387-0.486,0.56-0.744c16.566-24.518,11.048-57.713-12.56-75.552     c-28.705-20.625-68.695-14.074-89.319,14.631C212.204,309.532,207.998,322.597,208,336c0,4.418,3.582,8,8,8s8-3.582,8-8     c-0.003-26.51,21.486-48.002,47.995-48.005c10.048-0.001,19.843,3.151,28.005,9.013c16.537,12.671,20.388,36.007,8.8,53.32     l-98.896,116.496c-2.859,3.369-2.445,8.417,0.924,11.276c1.445,1.226,3.277,1.899,5.172,1.9h112c4.418,0,8-3.582,8-8     S332.418,464,328,464z",
              "fill",
              "#ff4c3b",
            ],
            [
              "d",
              "M216.176,424.152c0.167-4.415-3.278-8.129-7.693-8.296c-0.001,0-0.002,0-0.003,0     C104.11,411.982,20.341,328.363,16.28,224H48c4.418,0,8-3.582,8-8s-3.582-8-8-8H16.28C20.283,103.821,103.82,20.287,208,16.288     V40c0,4.418,3.582,8,8,8s8-3.582,8-8V16.288c102.754,3.974,185.686,85.34,191.616,188l-31.2-31.2     c-3.178-3.07-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116l44.656,44.656c0.841,1.018,1.925,1.807,3.152,2.296     c0.313,0.094,0.631,0.172,0.952,0.232c0.549,0.198,1.117,0.335,1.696,0.408c0.08,0,0.152,0,0.232,0c0.08,0,0.152,0,0.224,0     c0.609-0.046,1.211-0.164,1.792-0.352c0.329-0.04,0.655-0.101,0.976-0.184c1.083-0.385,2.069-1.002,2.888-1.808l45.264-45.248     c3.069-3.178,2.982-8.242-0.196-11.312c-3.1-2.994-8.015-2.994-11.116,0l-31.976,31.952     C425.933,90.37,331.38,0.281,216.568,0.112C216.368,0.104,216.2,0,216,0s-0.368,0.104-0.568,0.112     C96.582,0.275,0.275,96.582,0.112,215.432C0.112,215.632,0,215.8,0,216s0.104,0.368,0.112,0.568     c0.199,115.917,91.939,210.97,207.776,215.28h0.296C212.483,431.847,216.013,428.448,216.176,424.152z",
              "fill",
              "#ff4c3b",
            ],
            [
              "d",
              "M323.48,108.52c-3.124-3.123-8.188-3.123-11.312,0L226.2,194.48c-6.495-2.896-13.914-2.896-20.408,0l-40.704-40.704     c-3.178-3.069-8.243-2.981-11.312,0.197c-2.994,3.1-2.994,8.015,0,11.115l40.624,40.624c-5.704,11.94-0.648,26.244,11.293,31.947     c9.165,4.378,20.095,2.501,27.275-4.683c7.219-7.158,9.078-18.118,4.624-27.256l85.888-85.888     C326.603,116.708,326.603,111.644,323.48,108.52z M221.658,221.654c-0.001,0.001-0.001,0.001-0.002,0.002     c-3.164,3.025-8.148,3.025-11.312,0c-3.125-3.124-3.125-8.189-0.002-11.314c3.124-3.125,8.189-3.125,11.314-0.002     C224.781,213.464,224.781,218.53,221.658,221.654z",
              "fill",
              "#ff4c3b",
            ],
            [
              "xmlns",
              "http://www.w3.org/2000/svg",
              "viewBox",
              "0 -14 512.00001 512",
            ],
            [
              "d",
              "m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0",
              "fill",
              "#ff4c3b",
            ],
            [
              "d",
              "m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0",
              "fill",
              "#ff4c3b",
            ],
            [
              "d",
              "m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0",
              "fill",
              "#ff4c3b",
            ],
            [
              "d",
              "m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0",
              "fill",
              "#ff4c3b",
            ],
            [
              "d",
              "m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0",
              "fill",
              "#ff4c3b",
            ],
            [
              "d",
              "m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0",
              "fill",
              "#ff4c3b",
            ],
            [1, "title1"],
            [1, "title-inner1"],
            [1, "p-t-0"],
            [1, "col"],
            [1, "product-5", "product-m", "no-arrow", 3, "options"],
            [4, "ngFor", "ngForOf"],
            [1, "video-section"],
            [1, "col-md-8", "offset-md-2"],
            ["href", "javascript:void(0)"],
            [1, "video-img"],
            ["src", "assets/images/video-modal.jpg", "alt", "", 1, "img-fluid"],
            [1, "play-btn", 3, "click"],
            ["aria-hidden", "true", 1, "fa", "fa-play"],
            [1, "blog", "p-t-0", "section-b-space"],
            [1, "title1", "section-t-space"],
            [1, "col-md-12"],
            [3, "blogs"],
            ["videoModal", ""],
            ["carouselSlide", ""],
            [1, "product-box"],
            [3, "product", "currency", "cartModal"],
          ],
          template: function (o, t) {
            if (1 & o) {
              const r = e.EpF();
              e._UZ(0, "app-header-one", 0),
                e.TgZ(1, "section", 1),
                e._UZ(2, "app-slider", 2),
                e.qZA(),
                e.TgZ(3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6),
                e._UZ(7, "img", 7),
                e.qZA(),
                e.TgZ(8, "div", 8)(9, "div", 9)(10, "div")(11, "h2"),
                e._uU(12, "about us"),
                e.qZA(),
                e.TgZ(13, "div", 10)(14, "p"),
                e._uU(
                  15,
                  " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.sit voluptatem accusantium doloremque laudantium,totam rem aperiam. "
                ),
                e.qZA()(),
                e.TgZ(16, "div", 11)(17, "div", 5)(18, "div", 12),
                e.O4$(),
                e.TgZ(19, "svg", 13),
                e._UZ(20, "path", 14),
                e.qZA(),
                e.kcU(),
                e.TgZ(21, "h5"),
                e._uU(22, "free shipping"),
                e.qZA()(),
                e.TgZ(23, "div", 12),
                e.O4$(),
                e.TgZ(24, "svg", 15)(25, "g")(26, "g")(27, "g"),
                e._UZ(28, "path", 16)(29, "path", 17)(30, "path", 18)(
                  31,
                  "path",
                  19
                ),
                e.qZA()()()(),
                e.kcU(),
                e.TgZ(32, "h5"),
                e._uU(33, "24 X 7 service"),
                e.qZA()(),
                e.TgZ(34, "div", 12),
                e.O4$(),
                e.TgZ(35, "svg", 20),
                e._UZ(36, "path", 21)(37, "path", 22)(38, "path", 23)(
                  39,
                  "path",
                  24
                )(40, "path", 25)(41, "path", 26),
                e.qZA(),
                e.kcU(),
                e.TgZ(42, "h5"),
                e._uU(43, "festival offer"),
                e.qZA()()()()()()()()()(),
                e.TgZ(44, "div", 27)(45, "h4"),
                e._uU(46, "special offer"),
                e.qZA(),
                e.TgZ(47, "h2", 28),
                e._uU(48, "new products"),
                e.qZA()(),
                e.TgZ(49, "section", 29)(50, "div", 4)(51, "div", 5)(
                  52,
                  "div",
                  30
                )(53, "owl-carousel-o", 31),
                e.YNc(54, So, 2, 0, "ng-container", 32),
                e.ALo(55, "slice"),
                e.qZA()()()()(),
                e.TgZ(56, "section", 33)(57, "div", 27)(58, "h4"),
                e._uU(59, "special offer"),
                e.qZA(),
                e.TgZ(60, "h2", 28),
                e._uU(61, "product tutorial"),
                e.qZA()(),
                e.TgZ(62, "div", 4)(63, "div", 5)(64, "div", 34)(65, "a", 35)(
                  66,
                  "div",
                  36
                ),
                e._UZ(67, "img", 37),
                e.TgZ(68, "div", 38),
                e.NdJ("click", function () {
                  e.CHM(r);
                  const _ = e.MAs(84);
                  return e.KtG(_.openModal());
                }),
                e.TgZ(69, "span"),
                e._UZ(70, "i", 39),
                e.qZA()()()()()()()(),
                e.TgZ(71, "section", 40)(72, "div", 4)(73, "div", 5)(
                  74,
                  "div",
                  30
                )(
                  75,
                  "div",
                  41
                )(76, "h4"),
                e._uU(77, "Recent Story"),
                e.qZA(),
                e.TgZ(78, "h2", 28),
                e._uU(79, "from the blog"),
                e.qZA()()()(),
                e.TgZ(80, "div", 5)(81, "div", 42),
                e._UZ(82, "app-blog", 43),
                e.qZA()()()(),
                e._UZ(83, "app-video-modal", null, 44)(85, "app-footer-one", 0);
            }
            2 & o &&
              (e.Q6J("themeLogo", t.themeLogo),
              e.xp6(2),
              e.Q6J("sliders", t.sliders)("textClass", "text-center")(
                "category",
                "beauty"
              )("buttonText", "shop now"),
              e.xp6(51),
              e.Q6J("options", t.ProductSliderConfig),
              e.xp6(1),
              e.Q6J("ngForOf", e.Dn7(55, 9, t.products, 0, 16)),
              e.xp6(28),
              e.Q6J("blogs", t.blogs),
              e.xp6(3),
              e.Q6J("themeLogo", t.themeLogo));
          },
          dependencies: [s.sg, l.Fy, l.Mp, U.h, x.K, q.y, V, f, v, s.OU],
        }));
      }
      const Fo = ["quickView"],
        Oo = ["cartModal"];
      function Mo(n, i) {
        1 & n &&
          (e.TgZ(0, "div", 18)(1, "span", 19), e._uU(2, "new"), e.qZA()());
      }
      function No(n, i) {
        if (1 & n) {
          const o = e.EpF();
          e.TgZ(0, "button", 20),
            e.NdJ("click", function () {
              e.CHM(o);
              const r = e.oxw();
              return e.KtG(r.CartModal.openModal(r.product));
            }),
            e._UZ(1, "i", 21),
            e.qZA();
        }
      }
      function Io(n, i) {
        if (1 & n) {
          const o = e.EpF();
          e.TgZ(0, "button", 20),
            e.NdJ("click", function () {
              e.CHM(o);
              const r = e.oxw();
              return e.KtG(r.addToCart(r.product));
            }),
            e._UZ(1, "i", 21),
            e.qZA();
        }
      }
      function Po(n, i) {
        if ((1 & n && e._UZ(0, "app-cart-modal", 15, 22), 2 & n)) {
          const o = e.oxw();
          e.Q6J("product", o.product)("currency", o.currency);
        }
      }
      const we = function (n) {
        return ["/shop/product/left/sidebar/", n];
      };
      class C {
        constructor(i) {
          (this.productService = i),
            (this.currency = this.productService.Currency),
            (this.cartModal = !1);
        }
        ngOnInit() {}
        addToCart(i) {
          this.productService.addToCart(i);
        }
        addToWishlist(i) {
          this.productService.addToWishlist(i);
        }
        addToCompare(i) {
          this.productService.addToCompare(i);
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || C)(e.Y36(m.M));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: C,
          selectors: [["app-product-box-three"]],
          viewQuery: function (o, t) {
            if ((1 & o && (e.Gf(Fo, 5), e.Gf(Oo, 5)), 2 & o)) {
              let r;
              e.iGM((r = e.CRH())) && (t.QuickView = r.first),
                e.iGM((r = e.CRH())) && (t.CartModal = r.first);
            }
          },
          inputs: {
            product: "product",
            currency: "currency",
            cartModal: "cartModal",
          },
          decls: 27,
          vars: 28,
          consts: [
            [1, "img-wrapper"],
            ["class", "lable-block", 4, "ngIf"],
            [1, "front"],
            [3, "routerLink"],
            [1, "img-fluid", 3, "defaultImage", "lazyLoad", "alt"],
            [1, "cart-box"],
            ["title", "Add to cart", 3, "click", 4, "ngIf"],
            [
              "href",
              "javascript:void(0)",
              "title",
              "Add to Wishlist",
              3,
              "click",
            ],
            ["aria-hidden", "true", 1, "ti-heart"],
            [
              "href",
              "javascript:void(0)",
              "title",
              "Quick View",
              1,
              "mobile-quick-view",
              3,
              "click",
            ],
            ["aria-hidden", "true", 1, "ti-search"],
            ["href", "javascript:void(0)", "title", "Compare", 3, "click"],
            ["aria-hidden", "true", 1, "ti-reload"],
            [1, "product-info"],
            [3, "rate", "readOnly"],
            [3, "product", "currency"],
            ["quickView", ""],
            [3, "product", "currency", 4, "ngIf"],
            [1, "lable-block"],
            [1, "lable3"],
            ["title", "Add to cart", 3, "click"],
            [1, "ti-shopping-cart"],
            ["cartModal", ""],
          ],
          template: function (o, t) {
            1 & o &&
              (e.TgZ(0, "div", 0),
              e.YNc(1, Mo, 3, 0, "div", 1),
              e.TgZ(2, "div", 2)(3, "a", 3),
              e._UZ(4, "img", 4),
              e.qZA()(),
              e.TgZ(5, "div", 5),
              e.YNc(6, No, 2, 0, "button", 6),
              e.YNc(7, Io, 2, 0, "button", 6),
              e.TgZ(8, "a", 7),
              e.NdJ("click", function () {
                return t.addToWishlist(t.product);
              }),
              e._UZ(9, "i", 8),
              e.qZA(),
              e.TgZ(10, "a", 9),
              e.NdJ("click", function () {
                return t.QuickView.openModal();
              }),
              e._UZ(11, "i", 10),
              e.qZA(),
              e.TgZ(12, "a", 11),
              e.NdJ("click", function () {
                return t.addToCompare(t.product);
              }),
              e._UZ(13, "i", 12),
              e.qZA()()(),
              e.TgZ(14, "div", 13),
              e._UZ(15, "bar-rating", 14),
              e.TgZ(16, "a", 3)(17, "h6"),
              e._uU(18),
              e.ALo(19, "titlecase"),
              e.qZA()(),
              e.TgZ(20, "h4"),
              e._uU(21),
              e.ALo(22, "currency"),
              e.ALo(23, "discount"),
              e.qZA()(),
              e._UZ(24, "app-quick-view", 15, 16),
              e.YNc(26, Po, 2, 2, "app-cart-modal", 17)),
              2 & o &&
                (e.xp6(1),
                e.Q6J("ngIf", t.product.new),
                e.xp6(2),
                e.Q6J(
                  "routerLink",
                  e.VKq(24, we, t.product.title.replace(" ", "-"))
                ),
                e.xp6(1),
                e.s9C("alt", t.product.images[0].alt),
                e.Q6J("defaultImage", "assets/images/product/placeholder.jpg")(
                  "lazyLoad",
                  t.product.images[0].src
                ),
                e.xp6(2),
                e.Q6J("ngIf", t.cartModal),
                e.xp6(1),
                e.Q6J("ngIf", !t.cartModal),
                e.xp6(8),
                e.Q6J("rate", 5)("readOnly", !0),
                e.xp6(1),
                e.Q6J(
                  "routerLink",
                  e.VKq(
                    26,
                    we,
                    null == t.product ? null : t.product.title.replace(" ", "-")
                  )
                ),
                e.xp6(2),
                e.Oqu(
                  e.lcZ(19, 15, null == t.product ? null : t.product.title)
                ),
                e.xp6(3),
                e.Oqu(
                  e.Dn7(
                    22,
                    17,
                    e.xi3(
                      23,
                      21,
                      (null == t.product ? null : t.product.price) *
                        (null == t.currency ? null : t.currency.price),
                      t.product
                    ),
                    null == t.currency ? null : t.currency.currency,
                    "symbol"
                  )
                ),
                e.xp6(3),
                e.Q6J("product", t.product)("currency", t.currency),
                e.xp6(2),
                e.Q6J("ngIf", t.cartModal));
          },
          dependencies: [s.O5, d.rH, j.OJ, Y.z1, de.a, ue.u, s.rS, s.H9, S.B],
        }));
      }
      const ge = function () {
          return ["/shop/collection/left/sidebar"];
        },
        me = function () {
          return { category: "electronics" };
        };
      function Do(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 23)(1, "a", 8)(2, "div", 24),
            e._UZ(3, "img", 25),
            e.TgZ(4, "div", 26)(5, "div")(6, "h4"),
            e._uU(7),
            e.qZA(),
            e.TgZ(8, "h2"),
            e._uU(9),
            e.qZA()()()()()()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.xp6(1),
            e.Q6J("routerLink", e.DdM(5, ge))("queryParams", e.DdM(6, me)),
            e.xp6(2),
            e.Q6J("src", o.image, e.LSH),
            e.xp6(4),
            e.Oqu(o.save),
            e.xp6(2),
            e.Oqu(o.title);
        }
      }
      function jo(n, i) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "div", 32),
            e._UZ(2, "app-product-box-three", 33),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw(3);
          e.xp6(2),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function Yo(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 30),
            e.YNc(1, jo, 3, 2, "ng-container", 31),
            e.ALo(2, "slice"),
            e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("ngForOf", e.Dn7(2, 1, t.getCollectionProducts(o), 0, 8));
        }
      }
      function Ho(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "li", 27)(1, "a", 28),
            e._uU(2),
            e.qZA(),
            e.YNc(3, Yo, 3, 5, "ng-template", 29),
            e.qZA()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.Q6J("ngbNavItem", o), e.xp6(2), e.hij(" ", o, " ");
        }
      }
      class W {
        constructor(i) {
          (this.productService = i),
            (this.themeLogo = "assets/images/icon/logo-10.png"),
            (this.products = []),
            (this.productCollections = []),
            (this.collections = [
              {
                image: "assets/images/collection/electronics/1.jpg",
                save: "10% off",
                title: "speaker",
              },
              {
                image: "assets/images/collection/electronics/2.jpg",
                save: "10% off",
                title: "earplug",
              },
              {
                image: "assets/images/collection/electronics/3.jpg",
                save: "10% off",
                title: "best deal",
              },
            ]),
            this.productService.getProducts.subscribe((o) => {
              (this.products = o.filter((t) => "electronics" == t.type)),
                this.products.filter((t) => {
                  t.collection.filter((r) => {
                    -1 === this.productCollections.indexOf(r) &&
                      this.productCollections.push(r);
                  });
                });
            });
        }
        ngOnInit() {
          document.documentElement.style.setProperty(
            "--theme-deafult",
            "#6d7e87"
          );
        }
        ngOnDestroy() {
          document.documentElement.style.removeProperty("--theme-deafult");
        }
        getCollectionProducts(i) {
          return this.products.filter((o) => {
            if (o.collection.find((t) => t === i)) return o;
          });
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || W)(e.Y36(m.M));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: W,
          selectors: [["app-electronics"]],
          decls: 28,
          vars: 15,
          consts: [
            [3, "themeLogo"],
            [1, "container", "banner-slider"],
            [1, "row"],
            [1, "col-md-7"],
            [
              "src",
              "assets/images/banner/1.jpg",
              "alt",
              "electronics",
              1,
              "img-fluid",
              "height-banner",
            ],
            [1, "col-md-5"],
            [1, "row", "home-banner"],
            [1, "col-12"],
            [3, "routerLink", "queryParams"],
            [
              "src",
              "assets/images/banner/2.jpg",
              "alt",
              "electronics",
              1,
              "img-fluid",
            ],
            [
              "src",
              "assets/images/banner/3.jpg",
              "alt",
              "electronics",
              1,
              "img-fluid",
            ],
            [1, "banner-padding", "banner-goggles"],
            [1, "container"],
            [1, "row", "partition3"],
            ["class", "col-md-4", 4, "ngFor", "ngForOf"],
            [1, "section-b-space"],
            [1, "col"],
            [1, "theme-tab"],
            [
              "ngbNav",
              "",
              1,
              "tabs",
              "tab-title",
              "justify-content-center",
              "nav",
              "nav-pills",
              3,
              "activeId",
              "activeIdChange",
            ],
            ["nav", "ngbNav"],
            [3, "ngbNavItem", 4, "ngFor", "ngForOf"],
            [1, "mt-2", 3, "ngbNavOutlet"],
            [3, "direction"],
            [1, "col-md-4"],
            [1, "collection-banner", "p-right", "text-end"],
            ["alt", "", 1, "img-fluid", 3, "src"],
            [1, "contain-banner", "banner-3"],
            [3, "ngbNavItem"],
            ["ngbNavLink", ""],
            ["ngbNavContent", ""],
            [1, "no-slider", "row"],
            [4, "ngFor", "ngForOf"],
            [1, "product-box"],
            [3, "product", "currency"],
          ],
          template: function (o, t) {
            if (
              (1 & o &&
                (e._UZ(0, "app-header-one", 0),
                e.TgZ(1, "div", 1)(2, "div", 2)(3, "div", 3),
                e._UZ(4, "img", 4),
                e.qZA(),
                e.TgZ(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "a", 8),
                e._UZ(9, "img", 9),
                e.qZA()(),
                e.TgZ(10, "div", 7)(11, "a", 8),
                e._UZ(12, "img", 10),
                e.qZA()()()()()(),
                e.TgZ(13, "section", 11)(14, "div", 12)(15, "div", 13),
                e.YNc(16, Do, 10, 7, "div", 14),
                e.qZA()()(),
                e.TgZ(17, "section", 15)(18, "div", 12)(19, "div", 2)(
                  20,
                  "div",
                  16
                )(21, "div", 17)(22, "ul", 18, 19),
                e.NdJ("activeIdChange", function (a) {
                  return (t.active = a);
                }),
                e.YNc(24, Ho, 4, 2, "li", 20),
                e.qZA(),
                e._UZ(25, "div", 21),
                e.qZA()()()()(),
                e._UZ(26, "app-cart-variation", 22)(27, "app-footer-one", 0)),
              2 & o)
            ) {
              const r = e.MAs(23);
              e.Q6J("themeLogo", t.themeLogo),
                e.xp6(8),
                e.Q6J("routerLink", e.DdM(11, ge))(
                  "queryParams",
                  e.DdM(12, me)
                ),
                e.xp6(3),
                e.Q6J("routerLink", e.DdM(13, ge))(
                  "queryParams",
                  e.DdM(14, me)
                ),
                e.xp6(5),
                e.Q6J("ngForOf", t.collections),
                e.xp6(6),
                e.Q6J("activeId", t.active),
                e.xp6(2),
                e.Q6J("ngForOf", t.productCollections),
                e.xp6(1),
                e.Q6J("ngbNavOutlet", r),
                e.xp6(1),
                e.Q6J("direction", "left"),
                e.xp6(1),
                e.Q6J("themeLogo", t.themeLogo);
            }
          },
          dependencies: [
            s.sg,
            d.rH,
            c.uN,
            c.Pz,
            c.nv,
            c.Vx,
            c.tO,
            U.h,
            x.K,
            C,
            b,
            s.OU,
          ],
        }));
      }
      const Bo = function () {
          return ["/shop/compare"];
        },
        zo = function () {
          return ["/shop/wishlist"];
        };
      function $o(n, i) {
        1 & n &&
          (e.TgZ(0, "div", 17)(1, "div", 3)(2, "div", 4)(3, "div", 18)(
            4,
            "div",
            19
          )(5, "ul")(6, "li"),
          e._uU(7, "Welcome to Our store Multikart"),
          e.qZA(),
          e.TgZ(8, "li"),
          e._UZ(9, "i", 20),
          e._uU(10, "Call Us: 123 - 456 - 7890"),
          e.qZA()()()(),
          e.TgZ(11, "div", 21)(12, "ul", 22)(13, "li", 23)(14, "a", 8),
          e._UZ(15, "i", 24),
          e._uU(16, "Compare"),
          e.qZA()(),
          e.TgZ(17, "li", 25)(18, "a", 8),
          e._UZ(19, "i", 26),
          e._uU(20, "Wishlist"),
          e.qZA()(),
          e.TgZ(21, "li", 27),
          e._UZ(22, "i", 28),
          e._uU(23, " My Account "),
          e.TgZ(24, "ul", 29)(25, "li")(26, "a", 30),
          e._uU(27, " Login "),
          e.qZA()(),
          e.TgZ(28, "li")(29, "a", 31),
          e._uU(30, " Logout "),
          e.qZA()()()()()()()()()),
          2 & n &&
            (e.xp6(14),
            e.Q6J("routerLink", e.DdM(2, Bo)),
            e.xp6(4),
            e.Q6J("routerLink", e.DdM(3, zo)));
      }
      const Vo = function () {
        return ["/home/fashion"];
      };
      class K {
        constructor() {
          (this.class = "header-2 header-6"),
            (this.themeLogo = "assets/images/icon/logo.png"),
            (this.topbar = !0),
            (this.sticky = !1),
            (this.stick = !1);
        }
        ngOnInit() {}
        onWindowScroll() {
          this.stick =
            (window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0) >= 150 && window.innerWidth > 400;
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || K)();
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: K,
          selectors: [["app-header-four"]],
          hostBindings: function (o, t) {
            1 & o &&
              e.NdJ(
                "scroll",
                function () {
                  return t.onWindowScroll();
                },
                !1,
                e.Jf7
              );
          },
          inputs: {
            class: "class",
            themeLogo: "themeLogo",
            topbar: "topbar",
            sticky: "sticky",
          },
          decls: 22,
          vars: 5,
          consts: [
            [1, "sticky", 3, "ngClass"],
            [1, "mobile-fix-option"],
            ["class", "top-header", 4, "ngIf"],
            [1, "container"],
            [1, "row"],
            [1, "col-sm-12"],
            [1, "main-menu", "border-section", "border-top-0"],
            [1, "brand-logo", "layout2-logo"],
            [3, "routerLink"],
            ["alt", "logo", 1, "img-fluid", 3, "src"],
            ["role", "form", 1, "form_search"],
            [
              "id",
              "query search-autocomplete",
              "type",
              "search",
              "placeholder",
              "Find the best for your...",
              "aria-expanded",
              "true",
              1,
              "nav-search",
              "nav-search-field",
            ],
            ["type", "button", "name", "nav-submit-button", 1, "btn-search"],
            [1, "ti-search"],
            [1, "menu-right", "pull-right"],
            [1, "col-lg-12"],
            [1, "main-nav-center"],
            [1, "top-header"],
            [1, "col-lg-6"],
            [1, "header-contact"],
            ["aria-hidden", "true", 1, "fa", "fa-phone"],
            [1, "col-lg-6", "text-end"],
            [1, "header-dropdown"],
            [1, "compare"],
            ["aria-hidden", "true", 1, "fa", "fa-random"],
            [1, "mobile-wishlist"],
            ["aria-hidden", "true", 1, "fa", "fa-heart"],
            [1, "onhover-dropdown", "mobile-account"],
            ["aria-hidden", "true", 1, "fa", "fa-user"],
            [1, "onhover-show-div"],
            ["data-lng", "en"],
            ["data-lng", "es"],
          ],
          template: function (o, t) {
            1 & o &&
              (e.TgZ(0, "header", 0),
              e._UZ(1, "div", 1),
              e.YNc(2, $o, 31, 4, "div", 2),
              e.TgZ(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(
                7,
                "div",
                7
              )(8, "a", 8),
              e._UZ(9, "img", 9),
              e.qZA()(),
              e.TgZ(10, "div")(11, "form", 10),
              e._UZ(12, "input", 11),
              e.TgZ(13, "button", 12),
              e._UZ(14, "i", 13),
              e.qZA()()(),
              e.TgZ(15, "div", 14),
              e._UZ(16, "app-settings"),
              e.qZA()()()()(),
              e.TgZ(17, "div", 3)(18, "div", 4)(19, "div", 15)(20, "div", 16),
              e._UZ(21, "app-menu"),
              e.qZA()()()()()),
              2 & o &&
                (e.Q6J("ngClass", t.class),
                e.xp6(2),
                e.Q6J("ngIf", t.topbar),
                e.xp6(6),
                e.Q6J("routerLink", e.DdM(4, Vo)),
                e.xp6(1),
                e.Q6J("src", t.themeLogo, e.LSH));
          },
          dependencies: [s.mk, s.O5, d.rH, p._Y, p.JL, p.F, le.M, pe.f],
        }));
      }
      class X {
        constructor() {
          (this.class = "footer-light"),
            (this.themeLogo = "assets/images/icon/logo.png"),
            (this.today = Date.now());
        }
        ngOnInit() {}
        static #e = (this.ɵfac = function (o) {
          return new (o || X)();
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: X,
          selectors: [["app-footer-four"]],
          inputs: { class: "class", themeLogo: "themeLogo" },
          decls: 92,
          vars: 6,
          consts: [
            [3, "ngClass"],
            [1, "white-layout"],
            [1, "container"],
            [1, "small-section"],
            [1, "row", "footer-theme2"],
            [1, "col"],
            [1, "footer-link", "link-white"],
            [1, "footer-brand-logo"],
            ["href", "javascript:void(0)"],
            ["alt", "", 1, "img-fluid", 3, "src"],
            [1, "social-white"],
            ["aria-hidden", "true", 1, "fa", "fa-facebook"],
            ["aria-hidden", "true", 1, "fa", "fa-google-plus"],
            ["aria-hidden", "true", 1, "fa", "fa-twitter"],
            ["aria-hidden", "true", 1, "fa", "fa-instagram"],
            ["aria-hidden", "true", 1, "fa", "fa-rss"],
            [1, "footer-title", "footer-mobile-title"],
            [1, "footer-contant"],
            [1, "sub-footer", "black-subfooter"],
            [1, "row"],
            [1, "col-xl-6", "col-md-6", "col-sm-12"],
            [1, "footer-end"],
            ["aria-hidden", "true", 1, "fa", "fa-copyright"],
            [1, "payment-card-bottom"],
            ["src", "assets/images/icon/visa.png", "alt", ""],
            ["src", "assets/images/icon/mastercard.png", "alt", ""],
            ["src", "assets/images/icon/paypal.png", "alt", ""],
            ["src", "assets/images/icon/american-express.png", "alt", ""],
            ["src", "assets/images/icon/discover.png", "alt", ""],
          ],
          template: function (o, t) {
            1 & o &&
              (e.TgZ(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "section", 3)(
                4,
                "div",
                4
              )(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "a", 8),
              e._UZ(9, "img", 9),
              e.qZA()(),
              e.TgZ(10, "div", 10)(11, "ul")(12, "li")(13, "a", 8),
              e._UZ(14, "i", 11),
              e.qZA()(),
              e.TgZ(15, "li")(16, "a", 8),
              e._UZ(17, "i", 12),
              e.qZA()(),
              e.TgZ(18, "li")(19, "a", 8),
              e._UZ(20, "i", 13),
              e.qZA()(),
              e.TgZ(21, "li")(22, "a", 8),
              e._UZ(23, "i", 14),
              e.qZA()(),
              e.TgZ(24, "li")(25, "a", 8),
              e._UZ(26, "i", 15),
              e.qZA()()()(),
              e.TgZ(27, "div", 16)(28, "h4"),
              e._uU(29, "my account"),
              e.qZA()(),
              e.TgZ(30, "div", 17)(31, "ul")(32, "li")(33, "a", 8),
              e._uU(34, "mens"),
              e.qZA()(),
              e.TgZ(35, "li")(36, "a", 8),
              e._uU(37, "womens"),
              e.qZA()(),
              e.TgZ(38, "li")(39, "a", 8),
              e._uU(40, "clothing"),
              e.qZA()(),
              e.TgZ(41, "li")(42, "a", 8),
              e._uU(43, "accessories"),
              e.qZA()(),
              e.TgZ(44, "li")(45, "a", 8),
              e._uU(46, "featured"),
              e.qZA()(),
              e.TgZ(47, "li")(48, "a", 8),
              e._uU(49, "service"),
              e.qZA()(),
              e.TgZ(50, "li")(51, "a", 8),
              e._uU(52, "cart"),
              e.qZA()(),
              e.TgZ(53, "li")(54, "a", 8),
              e._uU(55, "my order"),
              e.qZA()(),
              e.TgZ(56, "li")(57, "a", 8),
              e._uU(58, "FAQ"),
              e.qZA()(),
              e.TgZ(59, "li")(60, "a", 8),
              e._uU(61, "new product"),
              e.qZA()(),
              e.TgZ(62, "li")(63, "a", 8),
              e._uU(64, "featured product"),
              e.qZA()()()()()()()()()(),
              e.TgZ(65, "div", 18)(66, "div", 2)(67, "div", 19)(68, "div", 20)(
                69,
                "div",
                21
              )(70, "p"),
              e._UZ(71, "i", 22),
              e._uU(72),
              e.ALo(73, "date"),
              e.qZA()()(),
              e.TgZ(74, "div", 20)(75, "div", 23)(76, "ul")(77, "li")(
                78,
                "a",
                8
              ),
              e._UZ(79, "img", 24),
              e.qZA()(),
              e.TgZ(80, "li")(81, "a", 8),
              e._UZ(82, "img", 25),
              e.qZA()(),
              e.TgZ(83, "li")(84, "a", 8),
              e._UZ(85, "img", 26),
              e.qZA()(),
              e.TgZ(86, "li")(87, "a", 8),
              e._UZ(88, "img", 27),
              e.qZA()(),
              e.TgZ(89, "li")(90, "a", 8),
              e._UZ(91, "img", 28),
              e.qZA()()()()()()()()()),
              2 & o &&
                (e.Q6J("ngClass", t.class),
                e.xp6(9),
                e.Q6J("src", t.themeLogo, e.LSH),
                e.xp6(63),
                e.hij(
                  " ",
                  e.xi3(73, 3, t.today, "y"),
                  " themeforest powered by pixelstrap"
                ));
          },
          dependencies: [s.mk, s.uU],
        }));
      }
      const _e = function () {
          return ["/shop/collection/left/sidebar"];
        },
        fe = function () {
          return { category: "pets" };
        };
      function Eo(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 29)(1, "a", 30)(2, "div", 31),
            e._UZ(3, "img", 32),
            e.TgZ(4, "div", 33)(5, "div")(6, "h2"),
            e._uU(7),
            e.qZA()()()()()()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.xp6(1),
            e.Q6J("routerLink", e.DdM(4, _e))("queryParams", e.DdM(5, fe)),
            e.xp6(2),
            e.Q6J("src", o.image, e.LSH),
            e.xp6(4),
            e.Oqu(o.title);
        }
      }
      function Wo(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 29)(1, "a", 30)(2, "div", 34),
            e._UZ(3, "img", 32),
            e.TgZ(4, "div", 33)(5, "div")(6, "h2"),
            e._uU(7),
            e.qZA()()()()()()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.xp6(1),
            e.Q6J("routerLink", e.DdM(4, _e))("queryParams", e.DdM(5, fe)),
            e.xp6(2),
            e.Q6J("src", o.image, e.LSH),
            e.xp6(4),
            e.Oqu(o.title);
        }
      }
      function Ko(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 36), e._UZ(1, "app-product-box-one", 37), e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function Xo(n, i) {
        1 & n && (e.ynx(0), e.YNc(1, Ko, 2, 2, "ng-template", 35), e.BQk());
      }
      const Go = function () {
        return { "background-image": "url(assets/images/parallax/6.jpg)" };
      };
      class G {
        constructor(i) {
          (this.productService = i),
            (this.themeLogo = "assets/images/icon/logo-13.png"),
            (this.products = []),
            (this.ProductSliderConfig = g.O_),
            (this.sliders = [
              {
                title: "every pet is different",
                subTitle: "lets shop",
                image: "assets/images/slider/17.jpg",
              },
              {
                title: "Any thing that pets want",
                subTitle: "save 20%",
                image: "assets/images/slider/18.jpg",
              },
            ]),
            (this.logos = [
              { image: "assets/images/logos/9.png" },
              { image: "assets/images/logos/10.png" },
              { image: "assets/images/logos/11.png" },
              { image: "assets/images/logos/12.png" },
              { image: "assets/images/logos/13.png" },
              { image: "assets/images/logos/14.png" },
              { image: "assets/images/logos/15.png" },
              { image: "assets/images/logos/16.png" },
            ]),
            (this.collections1 = [
              {
                image: "assets/images/collection/pets/1.jpg",
                title: "Clothes",
              },
              { image: "assets/images/collection/pets/2.jpg", title: "Groom" },
              { image: "assets/images/collection/pets/3.jpg", title: "food" },
            ]),
            (this.collections2 = [
              { image: "assets/images/collection/pets/4.jpg", title: "Home" },
              { image: "assets/images/collection/pets/5.jpg", title: "cats" },
              { image: "assets/images/collection/pets/6.jpg", title: "bowls" },
            ]),
            (this.blogs = [
              {
                image: "assets/images/blog/24.jpg",
                date: "25 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                details:
                  "Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/25.jpg",
                date: "26 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                details:
                  "Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/26.jpg",
                date: "27 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                details:
                  "Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/27.jpg",
                date: "28 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                details:
                  "Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit",
                by: "John Dio",
              },
            ]),
            this.productService.getProducts.subscribe((o) => {
              this.products = o.filter((t) => "pets" == t.type);
            });
        }
        ngOnInit() {
          document.documentElement.style.setProperty(
            "--theme-deafult",
            "#ff9944"
          );
        }
        ngOnDestroy() {
          document.documentElement.style.removeProperty("--theme-deafult");
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || G)(e.Y36(m.M));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: G,
          selectors: [["app-pets"]],
          decls: 57,
          vars: 25,
          consts: [
            [3, "themeLogo"],
            [1, "p-0"],
            [3, "sliders", "textClass", "category", "buttonText"],
            [1, "section-b-space"],
            [1, "container"],
            [1, "row"],
            [1, "col-md-12"],
            [3, "logos"],
            [1, "pt-0", "banner-6"],
            [1, "row", "partition3"],
            ["class", "col-md-4", 4, "ngFor", "ngForOf"],
            [1, "row", "partition3", "banner-top-cls"],
            [1, "section-b-space", "j-box", "pets-box"],
            [1, "col"],
            [1, "title1", "title5"],
            [1, "title-inner1"],
            ["role", "tournament6"],
            [1, "product-4", "product-m", "no-arrow", 3, "options"],
            [4, "ngFor", "ngForOf"],
            [1, "p-0", "pet-parallax"],
            [
              1,
              "full-banner",
              "parallax",
              "parallax-banner19",
              "text-center",
              "p-center",
              3,
              "ngStyle",
            ],
            [1, "banner-contain"],
            [
              1,
              "btn",
              "btn-solid",
              "black-btn",
              3,
              "routerLink",
              "queryParams",
            ],
            [1, "pet-decor"],
            ["src", "assets/images/dog.png", "alt", "", 1, "img-fluid"],
            [1, "section-b-space", "blog", "p-t-0", "blog_box"],
            [1, "title1", "section-t-space"],
            [3, "blogs"],
            [3, "direction"],
            [1, "col-md-4"],
            [3, "routerLink", "queryParams"],
            [1, "collection-banner", "p-left"],
            ["alt", "pets", 1, "img-fluid", 3, "src"],
            [1, "contain-banner", "banner-3"],
            [1, "collection-banner", "p-right"],
            ["carouselSlide", ""],
            [1, "product-box"],
            [3, "product", "currency"],
          ],
          template: function (o, t) {
            1 & o &&
              (e._UZ(0, "app-header-four", 0),
              e.TgZ(1, "section", 1),
              e._UZ(2, "app-slider", 2),
              e.qZA(),
              e.TgZ(3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6),
              e._UZ(7, "app-logo", 7),
              e.qZA()()()(),
              e.TgZ(8, "section", 8)(9, "div", 4)(10, "div", 9),
              e.YNc(11, Eo, 8, 6, "div", 10),
              e.qZA(),
              e.TgZ(12, "div", 11),
              e.YNc(13, Wo, 8, 6, "div", 10),
              e.qZA()()(),
              e.TgZ(14, "section", 12)(15, "div", 4)(16, "div", 5)(
                17,
                "div",
                13
              )(
                18,
                "div",
                14
              )(19, "h4"),
              e._uU(20, "special offer"),
              e.qZA(),
              e.TgZ(21, "h2", 15),
              e._uU(22, "top collection"),
              e.qZA(),
              e._UZ(23, "hr", 16),
              e.qZA(),
              e.TgZ(24, "owl-carousel-o", 17),
              e.YNc(25, Xo, 2, 0, "ng-container", 18),
              e.ALo(26, "slice"),
              e.qZA()()()()(),
              e.TgZ(27, "section", 19)(28, "div", 20)(29, "div", 4)(
                30,
                "div",
                5
              )(31, "div", 13)(
                32,
                "div",
                21
              )(33, "h4"),
              e._uU(34, "choose what you love"),
              e.qZA(),
              e.TgZ(35, "h3"),
              e._uU(36, "get upto 70% off"),
              e.qZA(),
              e.TgZ(37, "p"),
              e._uU(
                38,
                " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
              ),
              e.qZA(),
              e.TgZ(39, "a", 22),
              e._uU(40, " shop now "),
              e.qZA()()()()(),
              e.TgZ(41, "div", 23),
              e._UZ(42, "img", 24),
              e.qZA()()(),
              e.TgZ(43, "section", 25)(44, "div", 4)(45, "div", 5)(
                46,
                "div",
                13
              )(
                47,
                "div",
                26
              )(48, "h4"),
              e._uU(49, "Recent Story"),
              e.qZA(),
              e.TgZ(50, "h2", 15),
              e._uU(51, "from the blog"),
              e.qZA()()()(),
              e.TgZ(52, "div", 5)(53, "div", 6),
              e._UZ(54, "app-blog", 27),
              e.qZA()()()(),
              e._UZ(55, "app-cart-variation", 28)(56, "app-footer-four", 0)),
              2 & o &&
                (e.Q6J("themeLogo", t.themeLogo),
                e.xp6(2),
                e.Q6J("sliders", t.sliders)("textClass", "text-center")(
                  "category",
                  "pets"
                )("buttonText", "shop now"),
                e.xp6(5),
                e.Q6J("logos", t.logos),
                e.xp6(4),
                e.Q6J("ngForOf", t.collections1),
                e.xp6(2),
                e.Q6J("ngForOf", t.collections2),
                e.xp6(11),
                e.Q6J("options", t.ProductSliderConfig),
                e.xp6(1),
                e.Q6J("ngForOf", e.Dn7(26, 18, t.products, 0, 16)),
                e.xp6(3),
                e.Q6J("ngStyle", e.DdM(22, Go)),
                e.xp6(11),
                e.Q6J("routerLink", e.DdM(23, _e))(
                  "queryParams",
                  e.DdM(24, fe)
                ),
                e.xp6(15),
                e.Q6J("blogs", t.blogs),
                e.xp6(1),
                e.Q6J("direction", "left"),
                e.xp6(1),
                e.Tol("footer-light pet-layout-footer"),
                e.Q6J("themeLogo", t.themeLogo));
          },
          dependencies: [
            s.sg,
            s.PC,
            d.rH,
            l.Fy,
            l.Mp,
            K,
            X,
            q.y,
            b,
            f,
            v,
            T,
            s.OU,
          ],
        }));
      }
      function Ro(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 33)(1, "div", 34),
            e._UZ(2, "app-product-box-one", 35),
            e.qZA()()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw();
          e.xp6(2),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            )("cartModal", !0);
        }
      }
      function ei(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 33)(1, "div", 34),
            e._UZ(2, "app-product-box-one", 35),
            e.qZA()()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw();
          e.xp6(2),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            )("cartModal", !0);
        }
      }
      const Je = function () {
          return ["/shop/collection/left/sidebar"];
        },
        Qe = function () {
          return { category: "gym" };
        },
        ti = function () {
          return { "background-image": "url(assets/images/gym-bg.jpg)" };
        };
      class R {
        constructor(i) {
          (this.productService = i),
            (this.themeLogo = "assets/images/icon/logo-2.png"),
            (this.products = []),
            (this.sliders = [
              {
                title: "summer sale",
                subTitle: "Protien Powder",
                image: "assets/images/slider/19.jpg",
              },
              {
                title: "summer sale",
                subTitle: "Protien Powder",
                image: "assets/images/slider/20.jpg",
              },
            ]),
            (this.blogs = [
              {
                image: "assets/images/blog/28.jpg",
                date: "25 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/29.jpg",
                date: "26 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/30.jpg",
                date: "27 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/31.jpg",
                date: "28 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
            ]),
            (this.logos = [
              { image: "assets/images/logos/1.png" },
              { image: "assets/images/logos/2.png" },
              { image: "assets/images/logos/3.png" },
              { image: "assets/images/logos/4.png" },
              { image: "assets/images/logos/5.png" },
              { image: "assets/images/logos/6.png" },
              { image: "assets/images/logos/7.png" },
              { image: "assets/images/logos/8.png" },
            ]),
            this.productService.getProducts.subscribe(
              (o) => (this.products = o.filter((t) => "gym" == t.type))
            );
        }
        ngOnInit() {
          document.documentElement.style.setProperty(
            "--theme-deafult",
            "#3d72f1"
          ),
            document.documentElement.style.setProperty(
              "--theme-gradient1",
              "#01effc"
            ),
            document.documentElement.style.setProperty(
              "--theme-gradient2",
              "#485ff2"
            );
        }
        ngOnDestroy() {
          document.documentElement.style.removeProperty("--theme-deafult"),
            document.documentElement.style.removeProperty("--theme-gradient1"),
            document.documentElement.style.removeProperty("--theme-gradient2");
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || R)(e.Y36(m.M));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: R,
          selectors: [["app-gym"]],
          decls: 70,
          vars: 32,
          consts: [
            [3, "themeLogo"],
            [1, "p-0", "gym-slider"],
            [3, "sliders", "textClass", "category", "buttonText"],
            [1, "banner-padding", "banner-furniture", "gym-banner"],
            [1, "container-fluid"],
            [1, "row", "partition2"],
            [1, "col-md-4"],
            [3, "routerLink", "queryParams"],
            [1, "collection-banner", "p-left", "text-start"],
            ["src", "assets/images/banner/4.jpg", "alt", "", 1, "img-fluid"],
            [1, "contain-banner"],
            [1, "col-md-8"],
            ["src", "assets/images/banner/5.jpg", "alt", "", 1, "img-fluid"],
            [1, "title1", "title-gradient", "section-t-space"],
            [1, "title-inner1"],
            [1, "p-t-0", "section-b-space", "gym-product"],
            [1, "container"],
            [1, "row", "partition-cls"],
            ["class", "col-xl-3 col-sm-6", 4, "ngFor", "ngForOf"],
            [
              1,
              "full-banner",
              "gym-parallax",
              "parallax-banner25",
              "parallax",
              "p-0",
              3,
              "ngStyle",
            ],
            [1, "section-t-space", "section-b-space", "gym-product"],
            [1, "title1", "title-gradient"],
            [1, "row"],
            [1, "col-lg-6", "offset-lg-3"],
            [1, "product-para"],
            [1, "text-center"],
            [1, "row", "part-cls"],
            [1, "blog", "p-t-0", "gym-blog"],
            [1, "col"],
            [1, "col-md-12"],
            [3, "blogs"],
            [1, "section-b-space"],
            [3, "logos"],
            [1, "col-xl-3", "col-sm-6"],
            [1, "product-box"],
            [3, "product", "currency", "cartModal"],
          ],
          template: function (o, t) {
            1 & o &&
              (e._UZ(0, "app-header-one", 0),
              e.TgZ(1, "section", 1),
              e._UZ(2, "app-slider", 2),
              e.qZA(),
              e.TgZ(3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(
                7,
                "a",
                7
              )(8, "div", 8),
              e._UZ(9, "img", 9),
              e.TgZ(10, "div", 10)(11, "div")(12, "h4"),
              e._uU(13, "save 30%"),
              e.qZA(),
              e.TgZ(14, "h2"),
              e._uU(15, "Gym"),
              e.qZA()()()()()(),
              e.TgZ(16, "div", 11)(17, "a", 7)(18, "div", 8),
              e._UZ(19, "img", 12),
              e.TgZ(20, "div", 10)(21, "div")(22, "h4"),
              e._uU(23, "save 30%"),
              e.qZA(),
              e.TgZ(24, "h2"),
              e._uU(25, "Protien Powder"),
              e.qZA()()()()()()()()(),
              e.TgZ(26, "div", 13)(27, "h4"),
              e._uU(28, "special offer"),
              e.qZA(),
              e.TgZ(29, "h2", 14),
              e._uU(30, "top collection"),
              e.qZA()(),
              e.TgZ(31, "section", 15)(32, "div", 16)(33, "div", 17),
              e.YNc(34, Ro, 3, 3, "div", 18),
              e.ALo(35, "slice"),
              e.qZA()()(),
              e.TgZ(36, "div", 19)(37, "div", 20)(38, "div", 16)(39, "div", 21)(
                40,
                "h4"
              ),
              e._uU(41, "special offer"),
              e.qZA(),
              e.TgZ(42, "h2", 14),
              e._uU(43, "top collection"),
              e.qZA()(),
              e.TgZ(44, "div", 22)(45, "div", 23)(46, "div", 24)(47, "p", 25),
              e._uU(
                48,
                " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
              ),
              e.qZA()()()(),
              e.TgZ(49, "div", 26),
              e.YNc(50, ei, 3, 3, "div", 18),
              e.ALo(51, "slice"),
              e.qZA()()()(),
              e.TgZ(52, "section", 27)(53, "div", 16)(54, "div", 22)(
                55,
                "div",
                28
              )(
                56,
                "div",
                13
              )(57, "h4"),
              e._uU(58, "Recent Story"),
              e.qZA(),
              e.TgZ(59, "h2", 14),
              e._uU(60, "from the blog"),
              e.qZA()()()(),
              e.TgZ(61, "div", 22)(62, "div", 29),
              e._UZ(63, "app-blog", 30),
              e.qZA()()()(),
              e.TgZ(64, "section", 31)(65, "div", 16)(66, "div", 22)(
                67,
                "div",
                29
              ),
              e._UZ(68, "app-logo", 32),
              e.qZA()()()(),
              e._UZ(69, "app-footer-two", 0)),
              2 & o &&
                (e.Tol("header-gym"),
                e.Q6J("themeLogo", t.themeLogo),
                e.xp6(2),
                e.Q6J("sliders", t.sliders)("textClass", "text-end p-right")(
                  "category",
                  "gym"
                )("buttonText", "shop now"),
                e.xp6(5),
                e.Q6J("routerLink", e.DdM(27, Je))(
                  "queryParams",
                  e.DdM(28, Qe)
                ),
                e.xp6(10),
                e.Q6J("routerLink", e.DdM(29, Je))(
                  "queryParams",
                  e.DdM(30, Qe)
                ),
                e.xp6(17),
                e.Q6J("ngForOf", e.Dn7(35, 19, t.products, 0, 8)),
                e.xp6(2),
                e.Q6J("ngStyle", e.DdM(31, ti)),
                e.xp6(14),
                e.Q6J("ngForOf", e.Dn7(51, 23, t.products, 0, 4)),
                e.xp6(13),
                e.Q6J("blogs", t.blogs),
                e.xp6(5),
                e.Q6J("logos", t.logos),
                e.xp6(1),
                e.Tol("bg-img-gym bg-size"),
                e.Q6J("themeLogo", t.themeLogo));
          },
          dependencies: [s.sg, s.PC, d.rH, U.h, w, q.y, f, v, T, s.OU],
        }));
      }
      const oi = function () {
          return { "background-image": "url(assets/images/slider/21.jpg)" };
        },
        ve = function () {
          return ["/shop/collection/left/sidebar"];
        },
        Le = function () {
          return { category: "tools" };
        };
      function ii(n, i) {
        1 & n &&
          (e.TgZ(0, "div", 55)(1, "div", 6)(2, "div", 7)(3, "div", 14)(
            4,
            "div",
            56
          )(5, "div")(6, "h4"),
          e._uU(7, "welcome to tools"),
          e.qZA(),
          e.TgZ(8, "h1"),
          e._uU(9, "auto parts"),
          e.qZA(),
          e.TgZ(10, "a", 57),
          e._uU(11, "shop now"),
          e.qZA()()()()(),
          e.TgZ(12, "div", 58),
          e._UZ(13, "img", 59),
          e.qZA(),
          e.TgZ(14, "div", 60),
          e._UZ(15, "img", 61),
          e.qZA()()()),
          2 & n &&
            (e.Q6J("ngStyle", e.DdM(3, oi)),
            e.xp6(10),
            e.Q6J("routerLink", e.DdM(4, ve))("queryParams", e.DdM(5, Le)));
      }
      const ni = function () {
        return { "background-image": "url(assets/images/slider/22.jpg)" };
      };
      function ri(n, i) {
        1 & n &&
          (e.TgZ(0, "div", 55)(1, "div", 6)(2, "div", 7)(3, "div", 14)(
            4,
            "div",
            56
          )(5, "div")(6, "h4"),
          e._uU(7, "welcome to tools"),
          e.qZA(),
          e.TgZ(8, "h1"),
          e._uU(9, "auto parts"),
          e.qZA(),
          e.TgZ(10, "a", 57),
          e._uU(11, "shop now"),
          e.qZA()()()()(),
          e.TgZ(12, "div", 62),
          e._UZ(13, "img", 63),
          e.qZA()()()),
          2 & n &&
            (e.Q6J("ngStyle", e.DdM(3, ni)),
            e.xp6(10),
            e.Q6J("routerLink", e.DdM(4, ve))("queryParams", e.DdM(5, Le)));
      }
      function si(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 64),
            e._UZ(1, "app-product-box-three", 65),
            e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function ci(n, i) {
        1 & n && (e.ynx(0), e.YNc(1, si, 2, 2, "ng-template", 2), e.BQk());
      }
      function ai(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 64),
            e._UZ(1, "app-product-box-three", 65),
            e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function li(n, i) {
        1 & n && (e.ynx(0), e.YNc(1, ai, 2, 2, "ng-template", 2), e.BQk());
      }
      function pi(n, i) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "div", 70),
            e._UZ(2, "app-product-box-three", 65),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw(3);
          e.xp6(2),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function di(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 69),
            e.YNc(1, pi, 3, 2, "ng-container", 18),
            e.ALo(2, "slice"),
            e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("ngForOf", e.Dn7(2, 1, t.getCollectionProducts(o), 0, 4));
        }
      }
      function ui(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "li", 66)(1, "a", 67),
            e._uU(2),
            e.qZA(),
            e.YNc(3, di, 3, 5, "ng-template", 68),
            e.qZA()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.Q6J("ngbNavItem", o), e.xp6(2), e.hij(" ", o, " ");
        }
      }
      const gi = function () {
          return { "background-image": "url(assets/images/parallax/8.jpg)" };
        },
        mi = function () {
          return { category: "shoes" };
        };
      class ee {
        constructor(i, o) {
          (this._sanitizer = i),
            (this.productService = o),
            (this.themeLogo = "assets/images/icon/logo-5.png"),
            (this.products = []),
            (this.productCollections = []),
            (this.tabs = [1, 2, 3, 4, 5]),
            (this.HomeSliderConfig = g.TU),
            (this.ProductSliderConfig = g.O_),
            (this.categories = [
              {
                image: "assets/images/categories/6.jpg",
                title: "auto parts",
                text: this._sanitizer.bypassSecurityTrustHtml(
                  '<li><a href="#">Shock-resistant parts</a></li><li><a href="#">Skeleton parts</a></li><li><a href="#">Slow parts</a></li><li><a href="#">Solar-powered parts</a></li>'
                ),
              },
              {
                image: "assets/images/categories/7.jpg",
                title: "brakes & steering",
                text: this._sanitizer.bypassSecurityTrustHtml(
                  '<li><a href="#">Shock-resistant parts</a></li><li><a href="#">Skeleton parts</a></li><li><a href="#">Slow parts</a></li><li><a href="#">Solar-powered parts</a></li>'
                ),
              },
              {
                image: "assets/images/categories/8.jpg",
                title: "engine & drivetrain",
                text: this._sanitizer.bypassSecurityTrustHtml(
                  '<li><a href="#">Shock-resistant parts</a></li><li><a href="#">Skeleton parts</a></li><li><a href="#">Slow parts</a></li><li><a href="#">Solar-powered parts</a></li>'
                ),
              },
              {
                image: "assets/images/categories/9.jpg",
                title: "exterior accesories",
                text: this._sanitizer.bypassSecurityTrustHtml(
                  '<li><a href="#">Shock-resistant parts</a></li><li><a href="#">Skeleton parts</a></li><li><a href="#">Slow parts</a></li><li><a href="#">Solar-powered parts</a></li>'
                ),
              },
              {
                image: "assets/images/categories/10.jpg",
                title: "other parts",
                text: this._sanitizer.bypassSecurityTrustHtml(
                  '<li><a href="#">Shock-resistant parts</a></li><li><a href="#">Skeleton parts</a></li><li><a href="#">Slow parts</a></li><li><a href="#">Solar-powered parts</a></li>'
                ),
              },
            ]),
            (this.logos = [
              { image: "assets/images/logos/1.png" },
              { image: "assets/images/logos/2.png" },
              { image: "assets/images/logos/3.png" },
              { image: "assets/images/logos/4.png" },
              { image: "assets/images/logos/5.png" },
              { image: "assets/images/logos/6.png" },
              { image: "assets/images/logos/7.png" },
              { image: "assets/images/logos/8.png" },
            ]),
            this.productService.getProducts.subscribe((t) => {
              (this.products = t.filter((r) => "tools" == r.type)),
                this.products.filter((r) => {
                  r.collection.filter((a) => {
                    -1 === this.productCollections.indexOf(a) &&
                      this.productCollections.push(a);
                  });
                }),
                console.log("this.products", this.products);
            });
        }
        ngOnInit() {
          document.body.classList.add("tools-bg");
        }
        ngOnDestroy() {
          document.body.classList.remove("tools-bg");
        }
        getCollectionProducts(i) {
          return this.products.filter((o) => {
            if (o.collection.find((t) => t === i)) return o;
          });
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || ee)(e.Y36(Ae.H7), e.Y36(m.M));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: ee,
          selectors: [["app-tools"]],
          decls: 96,
          vars: 28,
          consts: [
            [1, "p-0", "height-85", "tools_slider"],
            [1, "home-slider", 3, "options"],
            ["carouselSlide", ""],
            [1, "banner-padding", "absolute-banner", "pb-0", "tools-service"],
            [1, "container", "absolute-bg"],
            [1, "service", "p-0"],
            [1, "container"],
            [1, "row"],
            [1, "col-lg-8", "offset-lg-2"],
            [1, "title3"],
            [1, "title-inner3"],
            [1, "line"],
            [1, "about-text"],
            [1, "pt-0", "category-tools"],
            [1, "col"],
            [3, "categories", "category"],
            [1, "section-b-space", "tools-grey"],
            [1, "product-5", "product-m", "no-arrow", 3, "options"],
            [4, "ngFor", "ngForOf"],
            [
              1,
              "full-banner",
              "parallax-banner21",
              "parallax",
              "small-slider",
              "tools-parallax-product",
              3,
              "ngStyle",
            ],
            [1, "col-lg-4", "col-12"],
            [1, "tools-description"],
            [1, "tools-form"],
            [1, "search-box"],
            [1, "form-control"],
            ["value", ""],
            ["value", "1"],
            ["value", "2"],
            ["value", "3"],
            ["value", "4"],
            ["value", "5"],
            ["name", "model", 1, "form-control"],
            ["name", "engine", 1, "form-control"],
            ["name", "year", 1, "form-control"],
            [1, "search-button"],
            [1, "btn", "btn-solid", "btn-find", 3, "routerLink", "queryParams"],
            [1, "col-lg-8", "col-12", "tools-grey"],
            [1, "tools-product-4", "product-m", 3, "options"],
            [1, "tools_product"],
            [1, "row", "multiple-slider"],
            [1, "col-xl-3", "col-lg-4", "col-md-12"],
            [3, "title", "type"],
            [1, "col-xl-9", "col-lg-8", "col-md-12", "tools-grey"],
            [1, "theme-tab"],
            [
              "ngbNav",
              "",
              1,
              "tabs",
              "tab-title",
              "justify-content-center",
              "nav",
              "nav-pills",
              3,
              "activeId",
              "activeIdChange",
            ],
            ["nav", "ngbNav"],
            [3, "ngbNavItem", 4, "ngFor", "ngForOf"],
            [1, "mt-2", 3, "ngbNavOutlet"],
            [1, "banner-tools"],
            [
              "src",
              "assets/images/offer-banner-4.jpg",
              "alt",
              "banner",
              1,
              "img-fluid",
            ],
            [1, "section-b-space", "tools-brand"],
            [1, "col-md-12"],
            [3, "logos"],
            [3, "direction"],
            [3, "newsletter", "themeLogo"],
            [1, "home", "text-center", 3, "ngStyle"],
            [1, "slider-contain"],
            [1, "btn", "btn-solid", 3, "routerLink", "queryParams"],
            ["id", "tools-move", 1, "tools-parts"],
            ["src", "assets/images/tools-2.png", "alt", "", 1, "img-fluid"],
            ["id", "tools-move1", 1, "tools-parts1"],
            ["src", "assets/images/tools-3.png", "alt", "", 1, "img-fluid"],
            ["id", "tools-move2", 1, "tools-parts"],
            ["src", "assets/images/tools-1.png", "alt", "", 1, "img-fluid"],
            [1, "product-box", "product-wrap"],
            [3, "product", "currency"],
            [3, "ngbNavItem"],
            ["ngbNavLink", ""],
            ["ngbNavContent", ""],
            [1, "no-slider", "row"],
            [1, "product-box"],
          ],
          template: function (o, t) {
            if (
              (1 & o &&
                (e._UZ(0, "app-header-one"),
                e.TgZ(1, "section", 0)(2, "owl-carousel-o", 1),
                e.YNc(3, ii, 16, 6, "ng-template", 2),
                e.YNc(4, ri, 14, 6, "ng-template", 2),
                e.qZA()(),
                e.TgZ(5, "section", 3)(6, "div", 4)(7, "div", 5),
                e._UZ(8, "app-services"),
                e.qZA()()(),
                e.TgZ(9, "section")(10, "div", 6)(11, "div", 7)(12, "div", 8)(
                  13,
                  "div",
                  9
                )(14, "h2", 10),
                e._uU(15, "welcome to tool store"),
                e.qZA(),
                e._UZ(16, "div", 11),
                e.qZA(),
                e.TgZ(17, "div", 12)(18, "p"),
                e._uU(
                  19,
                  " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
                ),
                e.qZA()()()()()(),
                e.TgZ(20, "section", 13)(21, "div", 6)(22, "div", 7)(
                  23,
                  "div",
                  14
                ),
                e._UZ(24, "app-collection", 15),
                e.qZA()()()(),
                e.TgZ(25, "section", 16)(26, "div", 6)(27, "div", 7)(
                  28,
                  "div",
                  14
                )(29, "div", 9)(30, "h2", 10),
                e._uU(31, "Popular products"),
                e.qZA(),
                e._UZ(32, "div", 11),
                e.qZA(),
                e.TgZ(33, "owl-carousel-o", 17),
                e.YNc(34, ci, 2, 0, "ng-container", 18),
                e.qZA()()()()(),
                e.TgZ(35, "section", 19)(36, "div", 6)(37, "div", 7)(
                  38,
                  "div",
                  20
                )(
                  39,
                  "div",
                  21
                )(40, "div")(41, "h3"),
                e._uU(42, "select your vehical"),
                e.qZA(),
                e.TgZ(43, "div", 22)(44, "div", 23)(45, "select", 24)(
                  46,
                  "option",
                  25
                ),
                e._uU(47, "Select Make"),
                e.qZA(),
                e.TgZ(48, "option", 26),
                e._uU(49, "Audi"),
                e.qZA(),
                e.TgZ(50, "option", 27),
                e._uU(51, "BMW"),
                e.qZA(),
                e.TgZ(52, "option", 28),
                e._uU(53, "Fiat"),
                e.qZA(),
                e.TgZ(54, "option", 29),
                e._uU(55, "Hyndai"),
                e.qZA(),
                e.TgZ(56, "option", 30),
                e._uU(57, "Skoda"),
                e.qZA()()(),
                e.TgZ(58, "div", 23)(59, "select", 31)(60, "option", 25),
                e._uU(61, "Select Model"),
                e.qZA()()(),
                e.TgZ(62, "div", 23)(63, "select", 32)(64, "option", 25),
                e._uU(65, "Select category"),
                e.qZA()()(),
                e.TgZ(66, "div", 23)(67, "select", 33)(68, "option", 25),
                e._uU(69, "Select Year"),
                e.qZA()()(),
                e.TgZ(70, "div", 34)(71, "a", 35),
                e._uU(72, "find my part"),
                e.qZA()()()()()(),
                e.TgZ(73, "div", 36)(74, "owl-carousel-o", 37),
                e.YNc(75, li, 2, 0, "ng-container", 18),
                e.qZA()()()()(),
                e.TgZ(76, "section", 38)(77, "div", 6)(78, "div", 39)(
                  79,
                  "div",
                  40
                ),
                e._UZ(80, "app-product-box-vertical-slider", 41),
                e.qZA(),
                e.TgZ(81, "div", 42)(82, "div", 43)(83, "ul", 44, 45),
                e.NdJ("activeIdChange", function (a) {
                  return (t.active = a);
                }),
                e.YNc(85, ui, 4, 2, "li", 46),
                e.qZA(),
                e._UZ(86, "div", 47),
                e.qZA(),
                e.TgZ(87, "div", 48),
                e._UZ(88, "img", 49),
                e.qZA()()()()(),
                e.TgZ(89, "section", 50)(90, "div", 6)(91, "div", 7)(
                  92,
                  "div",
                  51
                ),
                e._UZ(93, "app-logo", 52),
                e.qZA()()()(),
                e._UZ(94, "app-cart-variation", 53)(95, "app-footer-one", 54)),
              2 & o)
            ) {
              const r = e.MAs(84);
              e.Tol("header-tools"),
                e.xp6(2),
                e.Q6J("options", t.HomeSliderConfig),
                e.xp6(22),
                e.Tol("pt-0"),
                e.Q6J("categories", t.categories)("category", "tools"),
                e.xp6(9),
                e.Q6J("options", t.ProductSliderConfig),
                e.xp6(1),
                e.Q6J("ngForOf", t.products),
                e.xp6(1),
                e.Q6J("ngStyle", e.DdM(25, gi)),
                e.xp6(36),
                e.Q6J("routerLink", e.DdM(26, ve))(
                  "queryParams",
                  e.DdM(27, mi)
                ),
                e.xp6(3),
                e.Q6J("options", t.ProductSliderConfig),
                e.xp6(1),
                e.Q6J("ngForOf", t.products),
                e.xp6(5),
                e.Q6J("title", "new products")("type", "tools"),
                e.xp6(3),
                e.Q6J("activeId", t.active),
                e.xp6(2),
                e.Q6J("ngForOf", t.productCollections),
                e.xp6(1),
                e.Q6J("ngbNavOutlet", r),
                e.xp6(7),
                e.Q6J("logos", t.logos),
                e.xp6(1),
                e.Q6J("direction", "top"),
                e.xp6(1),
                e.Tol("sticky-footer"),
                e.Q6J("newsletter", !1)("themeLogo", t.themeLogo);
            }
          },
          dependencies: [
            s.sg,
            s.PC,
            d.rH,
            p.YN,
            p.Kr,
            c.uN,
            c.Pz,
            c.nv,
            c.Vx,
            c.tO,
            l.Fy,
            l.Mp,
            U.h,
            x.K,
            C,
            I.X,
            b,
            T,
            y,
            F,
            s.OU,
          ],
        }));
      }
      function _i(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 16)(1, "section", 17)(2, "div", 18)(3, "div", 19)(
              4,
              "div",
              20
            )(5, "div", 21)(6, "div", 22)(
              7,
              "div",
              23
            )(8, "h4"),
            e._uU(9, "about"),
            e.qZA()(),
            e.TgZ(10, "div", 24)(11, "div", 25),
            e._UZ(12, "img", 26),
            e.qZA(),
            e.TgZ(13, "div", 27)(14, "ul")(15, "li")(16, "a", 10),
            e._UZ(17, "i", 28),
            e.qZA()(),
            e.TgZ(18, "li")(19, "a", 10),
            e._UZ(20, "i", 29),
            e.qZA()(),
            e.TgZ(21, "li")(22, "a", 10),
            e._UZ(23, "i", 30),
            e.qZA()(),
            e.TgZ(24, "li")(25, "a", 10),
            e._UZ(26, "i", 31),
            e.qZA()(),
            e.TgZ(27, "li")(28, "a", 10),
            e._UZ(29, "i", 32),
            e.qZA()()()()()()()(),
            e.TgZ(30, "div", 33)(31, "div", 21)(32, "div", 34)(33, "h2"),
            e._uU(34, "newsletter"),
            e.qZA(),
            e.TgZ(35, "form")(36, "div", 35),
            e._UZ(37, "input", 36),
            e.TgZ(38, "button", 37),
            e._uU(39, "subscribe"),
            e.qZA()()()()()(),
            e.TgZ(40, "div", 20)(41, "div", 21)(42, "div", 22)(43, "div", 38)(
              44,
              "h4"
            ),
            e._uU(45, "store information"),
            e.qZA()(),
            e.TgZ(46, "div", 24)(47, "ul", 39)(48, "li"),
            e._uU(49, "Multikart Demo Store, Demo store India 345-659"),
            e.qZA(),
            e.TgZ(50, "li"),
            e._uU(51, "Call Us: 123-456-7898"),
            e.qZA(),
            e.TgZ(52, "li"),
            e._uU(53, "Email Us: "),
            e.TgZ(54, "a", 10),
            e._uU(55, "Support@mail.com"),
            e.qZA()(),
            e.TgZ(56, "li"),
            e._uU(57, "Fax: 123456"),
            e.qZA()()()()()()()()()()),
          2 & n)
        ) {
          const o = e.oxw();
          e.xp6(12), e.Q6J("src", o.themeLogo, e.LSH);
        }
      }
      function fi(n, i) {
        1 & n &&
          (e.TgZ(0, "div", 40)(1, "div", 4)(2, "section", 41)(3, "div", 42)(
            4,
            "div",
            20
          )(5, "div", 43)(
            6,
            "div",
            38
          )(7, "h4"),
          e._uU(8, "my account"),
          e.qZA()(),
          e.TgZ(9, "div", 24)(10, "ul")(11, "li")(12, "a", 10),
          e._uU(13, "mens"),
          e.qZA()(),
          e.TgZ(14, "li")(15, "a", 10),
          e._uU(16, "womens"),
          e.qZA()(),
          e.TgZ(17, "li")(18, "a", 10),
          e._uU(19, "clothing"),
          e.qZA()(),
          e.TgZ(20, "li")(21, "a", 10),
          e._uU(22, "accessories"),
          e.qZA()(),
          e.TgZ(23, "li")(24, "a", 10),
          e._uU(25, "featured"),
          e.qZA()(),
          e.TgZ(26, "li")(27, "a", 10),
          e._uU(28, "service"),
          e.qZA()(),
          e.TgZ(29, "li")(30, "a", 10),
          e._uU(31, "cart"),
          e.qZA()(),
          e.TgZ(32, "li")(33, "a", 10),
          e._uU(34, "my order"),
          e.qZA()(),
          e.TgZ(35, "li")(36, "a", 10),
          e._uU(37, "FAQ"),
          e.qZA()(),
          e.TgZ(38, "li")(39, "a", 10),
          e._uU(40, "new product"),
          e.qZA()(),
          e.TgZ(41, "li")(42, "a", 10),
          e._uU(43, "featured product"),
          e.qZA()()()()()()()()()());
      }
      class te {
        constructor() {
          (this.mainFooter = !0),
            (this.subFooter = !1),
            (this.themeLogo = "assets/images/icon/logo.png"),
            (this.today = Date.now());
        }
        ngOnInit() {}
        static #e = (this.ɵfac = function (o) {
          return new (o || te)();
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: te,
          selectors: [["app-footer-three"]],
          inputs: {
            class: "class",
            mainFooter: "mainFooter",
            subFooter: "subFooter",
            themeLogo: "themeLogo",
          },
          decls: 30,
          vars: 7,
          consts: [
            [3, "ngClass"],
            ["class", "white-layout", 4, "ngIf"],
            ["class", "white-layout box-layout", 4, "ngIf"],
            [1, "sub-footer", "black-subfooter"],
            [1, "container"],
            [1, "row"],
            [1, "col-xl-6", "col-md-6", "col-sm-12"],
            [1, "footer-end"],
            ["aria-hidden", "true", 1, "fa", "fa-copyright"],
            [1, "payment-card-bottom"],
            ["href", "javascript:void(0)"],
            ["src", "assets/images/icon/visa.png", "alt", ""],
            ["src", "assets/images/icon/mastercard.png", "alt", ""],
            ["src", "assets/images/icon/paypal.png", "alt", ""],
            ["src", "assets/images/icon/american-express.png", "alt", ""],
            ["src", "assets/images/icon/discover.png", "alt", ""],
            [1, "white-layout"],
            [1, "p-0"],
            [1, "container-fluid"],
            [1, "row", "footer-theme2", "section-light", "footer-border"],
            [1, "col"],
            [1, "footer-block"],
            [1, "footer-container"],
            [1, "footer-title", "footer-mobile-title"],
            [1, "footer-contant"],
            [1, "footer-logo"],
            ["alt", "", 3, "src"],
            [1, "social-white"],
            ["aria-hidden", "true", 1, "fa", "fa-facebook"],
            ["aria-hidden", "true", 1, "fa", "fa-google-plus"],
            ["aria-hidden", "true", 1, "fa", "fa-twitter"],
            ["aria-hidden", "true", 1, "fa", "fa-instagram"],
            ["aria-hidden", "true", 1, "fa", "fa-rss"],
            [1, "col", "form-p", "p-0"],
            [1, "subscribe-white"],
            [1, "form-group"],
            [
              "type",
              "text",
              "id",
              "exampleFormControlInput",
              "placeholder",
              "Enter your email",
              1,
              "form-control",
            ],
            ["type", "submit", 1, "btn", "btn-solid", "black-btn"],
            [1, "footer-title"],
            [1, "contact-details"],
            [1, "white-layout", "box-layout"],
            [1, "small-section"],
            [1, "row", "footer-theme2"],
            [1, "footer-link", "link-white"],
          ],
          template: function (o, t) {
            1 & o &&
              (e.TgZ(0, "footer", 0),
              e.YNc(1, _i, 58, 1, "div", 1),
              e.YNc(2, fi, 44, 0, "div", 2),
              e.TgZ(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(
                7,
                "div",
                7
              )(8, "p"),
              e._UZ(9, "i", 8),
              e._uU(10),
              e.ALo(11, "date"),
              e.qZA()()(),
              e.TgZ(12, "div", 6)(13, "div", 9)(14, "ul")(15, "li")(
                16,
                "a",
                10
              ),
              e._UZ(17, "img", 11),
              e.qZA()(),
              e.TgZ(18, "li")(19, "a", 10),
              e._UZ(20, "img", 12),
              e.qZA()(),
              e.TgZ(21, "li")(22, "a", 10),
              e._UZ(23, "img", 13),
              e.qZA()(),
              e.TgZ(24, "li")(25, "a", 10),
              e._UZ(26, "img", 14),
              e.qZA()(),
              e.TgZ(27, "li")(28, "a", 10),
              e._UZ(29, "img", 15),
              e.qZA()()()()()()()()()),
              2 & o &&
                (e.Q6J("ngClass", t.class),
                e.xp6(1),
                e.Q6J("ngIf", t.mainFooter),
                e.xp6(1),
                e.Q6J("ngIf", t.subFooter),
                e.xp6(8),
                e.hij(
                  " ",
                  e.xi3(11, 4, t.today, "y"),
                  " themeforest powered by pixelstrap "
                ));
          },
          dependencies: [s.mk, s.O5, p._Y, p.JL, p.F, s.uU],
        }));
      }
      const vi = ["quickView"],
        hi = ["cartModal"];
      function Zi(n, i) {
        1 & n && (e.TgZ(0, "span", 24), e._uU(1, "new"), e.qZA());
      }
      function bi(n, i) {
        if ((1 & n && (e.TgZ(0, "span", 25), e._uU(1), e.qZA()), 2 & n)) {
          const o = e.oxw();
          e.xp6(1),
            e.hij("", null == o.product ? null : o.product.discount, "% off");
        }
      }
      const he = function (n) {
        return ["/shop/product/left/sidebar/", n];
      };
      function Ti(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 26)(1, "a", 6), e._UZ(2, "img", 27), e.qZA()()),
          2 & n)
        ) {
          const o = e.oxw();
          e.xp6(1),
            e.Q6J(
              "routerLink",
              e.VKq(3, he, o.product.title.replace(" ", "-"))
            ),
            e.xp6(1),
            e.s9C("alt", o.product.images[1].alt),
            e.Q6J(
              "src",
              o.ImageSrc ? o.ImageSrc : o.product.images[1].src,
              e.LSH
            );
        }
      }
      function yi(n, i) {
        if (1 & n) {
          const o = e.EpF();
          e.TgZ(0, "button", 28),
            e.NdJ("click", function () {
              e.CHM(o);
              const r = e.oxw();
              return e.KtG(r.CartModal.openModal(r.product));
            }),
            e._UZ(1, "i", 29),
            e.qZA();
        }
      }
      function xi(n, i) {
        if (1 & n) {
          const o = e.EpF();
          e.TgZ(0, "button", 28),
            e.NdJ("click", function () {
              e.CHM(o);
              const r = e.oxw();
              return e.KtG(r.addToCart(r.product));
            }),
            e._UZ(1, "i", 29),
            e.qZA();
        }
      }
      function qi(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "del")(1, "span", 30),
            e._uU(2),
            e.ALo(3, "currency"),
            e.qZA()()),
          2 & n)
        ) {
          const o = e.oxw();
          e.xp6(2),
            e.hij(
              " ",
              e.Dn7(
                3,
                1,
                (null == o.product ? null : o.product.price) *
                  (null == o.currency ? null : o.currency.price),
                null == o.currency ? null : o.currency.currency,
                "symbol"
              ),
              ""
            );
        }
      }
      const Ai = function (n) {
        return { "background-color": n };
      };
      function Ci(n, i) {
        if (1 & n) {
          const o = e.EpF();
          e.TgZ(0, "li", 33),
            e.NdJ("click", function () {
              const a = e.CHM(o).$implicit,
                _ = e.oxw(2);
              return e.KtG(_.ChangeVariants(a, _.product));
            }),
            e.qZA();
        }
        if (2 & n) {
          const o = i.$implicit;
          e.Tol(o), e.Q6J("ngStyle", e.VKq(3, Ai, o));
        }
      }
      function Ui(n, i) {
        if (
          (1 & n && (e.TgZ(0, "ul", 31), e.YNc(1, Ci, 1, 5, "li", 32), e.qZA()),
          2 & n)
        ) {
          const o = e.oxw();
          e.xp6(1),
            e.Q6J(
              "ngForOf",
              o.Color(null == o.product ? null : o.product.variants)
            );
        }
      }
      function wi(n, i) {
        if ((1 & n && e._UZ(0, "app-cart-modal", 21, 34), 2 & n)) {
          const o = e.oxw();
          e.Q6J("product", o.product)("currency", o.currency);
        }
      }
      class oe {
        constructor(i) {
          (this.productService = i),
            (this.currency = this.productService.Currency),
            (this.onHowerChangeImage = !1),
            (this.cartModal = !1);
        }
        ngOnInit() {}
        Color(i) {
          const o = [];
          for (let t = 0; t < Object.keys(i).length; t++)
            -1 === o.indexOf(i[t].color) && i[t].color && o.push(i[t].color);
          return o;
        }
        ChangeVariants(i, o) {
          o.variants.map((t) => {
            t.color === i &&
              o.images.map((r) => {
                r.image_id === t.image_id && (this.ImageSrc = r.src);
              });
          });
        }
        ChangeVariantsImage(i) {
          this.ImageSrc = i;
        }
        addToCart(i) {
          this.productService.addToCart(i);
        }
        addToWishlist(i) {
          this.productService.addToWishlist(i);
        }
        addToCompare(i) {
          this.productService.addToCompare(i);
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || oe)(e.Y36(m.M));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: oe,
          selectors: [["app-product-box-four"]],
          viewQuery: function (o, t) {
            if ((1 & o && (e.Gf(vi, 5), e.Gf(hi, 5)), 2 & o)) {
              let r;
              e.iGM((r = e.CRH())) && (t.QuickView = r.first),
                e.iGM((r = e.CRH())) && (t.CartModal = r.first);
            }
          },
          inputs: {
            product: "product",
            currency: "currency",
            onHowerChangeImage: "onHowerChangeImage",
            cartModal: "cartModal",
          },
          decls: 34,
          vars: 32,
          consts: [
            [1, "img-wrapper"],
            [1, "img-block"],
            [1, "lable-wrapper"],
            ["class", "lable1", 4, "ngIf"],
            ["class", "lable2", 4, "ngIf"],
            [1, "front"],
            [3, "routerLink"],
            [
              1,
              "img-fluid",
              "lazy-loading",
              3,
              "defaultImage",
              "lazyLoad",
              "alt",
            ],
            ["class", "back", 4, "ngIf"],
            [1, "cart-info"],
            ["title", "Add to cart", 3, "click", 4, "ngIf"],
            [
              "href",
              "javascript:void(0)",
              "title",
              "Add to Wishlist",
              3,
              "click",
            ],
            ["aria-hidden", "true", 1, "ti-heart"],
            ["href", "javascript:void(0)", "title", "Quick View", 3, "click"],
            ["aria-hidden", "true", 1, "ti-search"],
            ["href", "javascript:void(0)", "title", "Compare", 3, "click"],
            ["aria-hidden", "true", 1, "ti-reload"],
            [1, "product-detail"],
            [3, "rate", "readOnly"],
            [4, "ngIf"],
            ["class", "color-variant", 4, "ngIf"],
            [3, "product", "currency"],
            ["quickView", ""],
            [3, "product", "currency", 4, "ngIf"],
            [1, "lable1"],
            [1, "lable2"],
            [1, "back"],
            [1, "img-fluid", "lazy-loading", 3, "src", "alt"],
            ["title", "Add to cart", 3, "click"],
            [1, "ti-shopping-cart"],
            [1, "money"],
            [1, "color-variant"],
            [3, "class", "ngStyle", "click", 4, "ngFor", "ngForOf"],
            [3, "ngStyle", "click"],
            ["cartModal", ""],
          ],
          template: function (o, t) {
            1 & o &&
              (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2),
              e.YNc(3, Zi, 2, 0, "span", 3),
              e.YNc(4, bi, 2, 1, "span", 4),
              e.qZA(),
              e.TgZ(5, "div", 5)(6, "a", 6),
              e._UZ(7, "img", 7),
              e.qZA()(),
              e.YNc(8, Ti, 3, 5, "div", 8),
              e.TgZ(9, "div", 9),
              e.YNc(10, yi, 2, 0, "button", 10),
              e.YNc(11, xi, 2, 0, "button", 10),
              e.TgZ(12, "a", 11),
              e.NdJ("click", function () {
                return t.addToWishlist(t.product);
              }),
              e._UZ(13, "i", 12),
              e.qZA(),
              e.TgZ(14, "a", 13),
              e.NdJ("click", function () {
                return t.QuickView.openModal();
              }),
              e._UZ(15, "i", 14),
              e.qZA(),
              e.TgZ(16, "a", 15),
              e.NdJ("click", function () {
                return t.addToCompare(t.product);
              }),
              e._UZ(17, "i", 16),
              e.qZA()()()(),
              e.TgZ(18, "div", 17)(19, "div"),
              e._UZ(20, "bar-rating", 18),
              e.TgZ(21, "a", 6)(22, "h6"),
              e._uU(23),
              e.ALo(24, "titlecase"),
              e.qZA()(),
              e.TgZ(25, "h4"),
              e._uU(26),
              e.ALo(27, "currency"),
              e.ALo(28, "discount"),
              e.YNc(29, qi, 4, 5, "del", 19),
              e.qZA(),
              e.YNc(30, Ui, 2, 1, "ul", 20),
              e.qZA()(),
              e._UZ(31, "app-quick-view", 21, 22),
              e.YNc(33, wi, 2, 2, "app-cart-modal", 23)),
              2 & o &&
                (e.xp6(3),
                e.Q6J("ngIf", t.product.new),
                e.xp6(1),
                e.Q6J("ngIf", t.product.sale),
                e.xp6(2),
                e.Q6J(
                  "routerLink",
                  e.VKq(28, he, t.product.title.replace(" ", "-"))
                ),
                e.xp6(1),
                e.s9C("alt", t.product.images[0].alt),
                e.Q6J(
                  "defaultImage",
                  t.ImageSrc
                    ? t.ImageSrc
                    : "assets/images/product/placeholder.jpg"
                )(
                  "lazyLoad",
                  t.ImageSrc ? t.ImageSrc : t.product.images[0].src
                ),
                e.xp6(1),
                e.Q6J("ngIf", t.onHowerChangeImage),
                e.xp6(2),
                e.Q6J("ngIf", t.cartModal),
                e.xp6(1),
                e.Q6J("ngIf", !t.cartModal),
                e.xp6(9),
                e.Q6J("rate", 5)("readOnly", !0),
                e.xp6(1),
                e.Q6J(
                  "routerLink",
                  e.VKq(
                    30,
                    he,
                    null == t.product ? null : t.product.title.replace(" ", "-")
                  )
                ),
                e.xp6(2),
                e.Oqu(
                  e.lcZ(24, 19, null == t.product ? null : t.product.title)
                ),
                e.xp6(3),
                e.hij(
                  " ",
                  e.Dn7(
                    27,
                    21,
                    e.xi3(
                      28,
                      25,
                      (null == t.product ? null : t.product.price) *
                        (null == t.currency ? null : t.currency.price),
                      t.product
                    ),
                    null == t.currency ? null : t.currency.currency,
                    "symbol"
                  ),
                  " "
                ),
                e.xp6(3),
                e.Q6J("ngIf", null == t.product ? null : t.product.discount),
                e.xp6(1),
                e.Q6J(
                  "ngIf",
                  t.Color(null == t.product ? null : t.product.variants).length
                ),
                e.xp6(1),
                e.Q6J("product", t.product)("currency", t.currency),
                e.xp6(2),
                e.Q6J("ngIf", t.cartModal));
          },
          dependencies: [
            s.sg,
            s.O5,
            s.PC,
            d.rH,
            j.OJ,
            Y.z1,
            de.a,
            ue.u,
            s.rS,
            s.H9,
            S.B,
          ],
        }));
      }
      const O = function () {
          return ["/shop/collection/left/sidebar"];
        },
        M = function () {
          return { category: "shoes" };
        };
      function Ji(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 43)(1, "a", 44)(2, "div", 45),
            e._UZ(3, "img", 46),
            e.qZA()(),
            e.TgZ(4, "div", 47)(5, "a", 44)(6, "h5"),
            e._uU(7),
            e.qZA()()()()),
          2 & n)
        ) {
          const o = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J("routerLink", e.DdM(6, O))("queryParams", e.DdM(7, M)),
            e.xp6(2),
            e.Q6J("src", o.image, e.LSH),
            e.xp6(2),
            e.Q6J("routerLink", e.DdM(8, O))("queryParams", e.DdM(9, M)),
            e.xp6(2),
            e.Oqu(o.title);
        }
      }
      function Qi(n, i) {
        1 & n && (e.ynx(0), e.YNc(1, Ji, 8, 10, "ng-template", 42), e.BQk());
      }
      function Li(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 48)(1, "a", 44)(2, "div", 49),
            e._UZ(3, "img", 50),
            e.TgZ(4, "div", 51)(5, "div")(6, "h4", 52),
            e._uU(7),
            e.qZA(),
            e.TgZ(8, "h2"),
            e._uU(9),
            e.qZA()()()()()()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.xp6(1),
            e.Q6J("routerLink", e.DdM(5, O))("queryParams", e.DdM(6, M)),
            e.xp6(2),
            e.Q6J("src", o.image, e.LSH),
            e.xp6(4),
            e.Oqu(o.save),
            e.xp6(2),
            e.Oqu(o.title);
        }
      }
      function ki(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 53),
            e._UZ(1, "app-product-box-four", 54),
            e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            )("onHowerChangeImage", !0)("cartModal", !0);
        }
      }
      function Si(n, i) {
        1 & n && (e.ynx(0), e.YNc(1, ki, 2, 4, "ng-template", 42), e.BQk());
      }
      function Fi(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 55)(1, "div", 56)(2, "div"),
            e._UZ(3, "img", 57),
            e.qZA(),
            e.TgZ(4, "div", 58)(5, "a", 44)(6, "h2"),
            e._uU(7),
            e.qZA()()()()()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.xp6(3),
            e.Q6J("src", o.image, e.LSH),
            e.xp6(2),
            e.Q6J("routerLink", e.DdM(4, O))("queryParams", e.DdM(5, M)),
            e.xp6(2),
            e.Oqu(o.title);
        }
      }
      function Oi(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 6)(1, "a", 44)(2, "div", 59)(3, "h4"),
            e._uU(4),
            e.qZA()()()()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.xp6(1),
            e.Q6J("routerLink", e.DdM(3, O))("queryParams", e.DdM(4, M)),
            e.xp6(3),
            e.Oqu(o);
        }
      }
      function Mi(n, i) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "div", 53),
            e._UZ(2, "app-product-box-three", 64),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw(3);
          e.xp6(2),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function Ni(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 63),
            e.YNc(1, Mi, 3, 2, "ng-container", 9),
            e.ALo(2, "slice"),
            e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("ngForOf", e.Dn7(2, 1, t.getCollectionProducts(o), 0, 4));
        }
      }
      function Ii(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "li", 60)(1, "a", 61),
            e._uU(2),
            e.qZA(),
            e.YNc(3, Ni, 3, 5, "ng-template", 62),
            e.qZA()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.Q6J("ngbNavItem", o), e.xp6(2), e.hij(" ", o, " ");
        }
      }
      class ie {
        constructor(i) {
          (this.productService = i),
            (this.themeLogo = "assets/images/icon/logo-6.png"),
            (this.products = []),
            (this.productCollections = []),
            (this.CategorySliderConfig = g.Ad),
            (this.ProductSliderConfig = g.O_),
            (this.sliders = [
              {
                title: "special offer",
                subTitle: "men shoes",
                image: "assets/images/slider/23.jpg",
              },
              {
                title: "special offer",
                subTitle: "men shoes",
                image: "assets/images/slider/24.jpg",
              },
            ]),
            (this.sizes = [
              "size 06",
              "size 07",
              "size 08",
              "size 09",
              "size 10",
            ]),
            (this.categories = [
              { image: "assets/images/icon/cat1.png", title: "sport shoes" },
              { image: "assets/images/icon/cat2.png", title: "casual shoes" },
              { image: "assets/images/icon/cat3.png", title: "formal shoes" },
              { image: "assets/images/icon/cat4.png", title: "flat" },
              { image: "assets/images/icon/cat5.png", title: "heels" },
              { image: "assets/images/icon/cat6.png", title: "boots" },
              { image: "assets/images/icon/cat1.png", title: "sport shoes" },
            ]),
            (this.collections1 = [
              {
                image: "assets/images/collection/shoes/1.png",
                save: "save 50%",
                title: "men",
              },
              {
                image: "assets/images/collection/shoes/2.png",
                save: "save 50%",
                title: "women",
              },
            ]),
            (this.collections2 = [
              { image: "assets/images/categories/14.png", title: "men" },
              { image: "assets/images/categories/15.png", title: "women" },
              { image: "assets/images/categories/16.png", title: "kids" },
            ]),
            (this.blogs = [
              {
                image: "assets/images/blog/33.jpg",
                date: "25 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/34.jpg",
                date: "26 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/35.jpg",
                date: "27 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/36.jpg",
                date: "28 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
            ]),
            (this.logos = [
              { image: "assets/images/logos/1.png" },
              { image: "assets/images/logos/2.png" },
              { image: "assets/images/logos/3.png" },
              { image: "assets/images/logos/4.png" },
              { image: "assets/images/logos/5.png" },
              { image: "assets/images/logos/6.png" },
              { image: "assets/images/logos/7.png" },
              { image: "assets/images/logos/8.png" },
            ]),
            this.productService.getProducts.subscribe((o) => {
              (this.products = o.filter((t) => "shoes" == t.type)),
                this.products.filter((t) => {
                  t.collection.filter((r) => {
                    -1 === this.productCollections.indexOf(r) &&
                      this.productCollections.push(r);
                  });
                });
            });
        }
        ngOnInit() {
          document.documentElement.style.setProperty(
            "--theme-deafult",
            "#3fdda7"
          );
        }
        ngOnDestroy() {
          document.documentElement.style.removeProperty("--theme-deafult");
        }
        getCollectionProducts(i) {
          return this.products.filter((o) => {
            if (o.collection.find((t) => t === i)) return o;
          });
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || ie)(e.Y36(m.M));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: ie,
          selectors: [["app-shoes"]],
          decls: 93,
          vars: 32,
          consts: [
            [3, "themeLogo"],
            [1, "p-0"],
            [
              3,
              "sliders",
              "textClass",
              "category",
              "buttonClass",
              "buttonText",
            ],
            [1, "container"],
            [1, "section-b-space", "border-section", "border-top-0"],
            [1, "row"],
            [1, "col"],
            [1, "slide-6", "no-arrow"],
            [3, "options"],
            [4, "ngFor", "ngForOf"],
            [1, "col-lg-8", "offset-lg-2"],
            [1, "title3"],
            [1, "title-inner3"],
            [1, "line"],
            [1, "about-text"],
            [1, "section-b-space", "p-t-0"],
            [1, "row", "partition2"],
            ["class", "col-md-6", 4, "ngFor", "ngForOf"],
            [1, "product-4", "product-m", "no-arrow", 3, "options"],
            [1, "container-fluid"],
            [1, "row", "category-border"],
            ["class", "col-sm-4 border-padding", 4, "ngFor", "ngForOf"],
            [1, "section-b-space"],
            [1, "row", "multiple-slider"],
            [1, "col-lg-3", "col-sm-6"],
            [3, "title", "type"],
            [1, "row", "background"],
            ["class", "col", 4, "ngFor", "ngForOf"],
            [1, "title1", "section-t-space"],
            [1, "title-inner1"],
            [1, "col", "theme-tab"],
            [
              "ngbNav",
              "",
              1,
              "tabs",
              "tab-title",
              "justify-content-center",
              "nav",
              "nav-pills",
              3,
              "activeId",
              "activeIdChange",
            ],
            ["nav", "ngbNav"],
            [3, "ngbNavItem", 4, "ngFor", "ngForOf"],
            [1, "mt-2", 3, "ngbNavOutlet"],
            [1, "blog", "blog-bg", "section-b-space"],
            [1, "title1"],
            [1, "col-md-12"],
            [3, "blogs"],
            [1, "service", "border-section", "small-section", "border-top-0"],
            [3, "logos"],
            [3, "themeLogo", "subFooter"],
            ["carouselSlide", ""],
            [1, "category-block"],
            [3, "routerLink", "queryParams"],
            [1, "category-image"],
            ["alt", "", 1, "w-auto", 3, "src"],
            [1, "category-details"],
            [1, "col-md-6"],
            [1, "collection-banner", "p-right", "text-center"],
            ["alt", "collection-banner", 1, "img-fluid", 3, "src"],
            [1, "contain-banner"],
            [1, "text-white"],
            [1, "product-box"],
            [3, "product", "currency", "onHowerChangeImage", "cartModal"],
            [1, "col-sm-4", "border-padding"],
            [1, "category-banner"],
            ["alt", "", 1, "img-fluid", 3, "src"],
            [1, "category-box"],
            [1, "contain-bg"],
            [3, "ngbNavItem"],
            ["ngbNavLink", ""],
            ["ngbNavContent", ""],
            [1, "no-slider", "row"],
            [3, "product", "currency"],
          ],
          template: function (o, t) {
            if (
              (1 & o &&
                (e._UZ(0, "app-header-three", 0),
                e.TgZ(1, "section", 1),
                e._UZ(2, "app-slider", 2),
                e.qZA(),
                e.TgZ(3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "div", 6)(
                  7,
                  "div",
                  7
                )(8, "owl-carousel-o", 8),
                e.YNc(9, Qi, 2, 0, "ng-container", 9),
                e.qZA()()()()()(),
                e.TgZ(10, "section")(11, "div", 3)(12, "div", 5)(13, "div", 10)(
                  14,
                  "div",
                  11
                )(15, "h4"),
                e._uU(16, "about us"),
                e.qZA(),
                e.TgZ(17, "h2", 12),
                e._uU(18, "welcome to multi store"),
                e.qZA(),
                e._UZ(19, "div", 13),
                e.qZA(),
                e.TgZ(20, "div", 14)(21, "p"),
                e._uU(
                  22,
                  " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
                ),
                e.qZA()()()()()(),
                e.TgZ(23, "section", 15)(24, "div", 3)(25, "div", 16),
                e.YNc(26, Li, 10, 7, "div", 17),
                e.qZA()()(),
                e.TgZ(27, "section", 15)(28, "div", 3)(29, "div", 11)(30, "h4"),
                e._uU(31, "our collection"),
                e.qZA(),
                e.TgZ(32, "h2", 12),
                e._uU(33, "special products"),
                e.qZA(),
                e._UZ(34, "div", 13),
                e.qZA(),
                e.TgZ(35, "div", 5)(36, "div", 6)(37, "owl-carousel-o", 18),
                e.YNc(38, Si, 2, 0, "ng-container", 9),
                e.ALo(39, "slice"),
                e.qZA()()()()(),
                e.TgZ(40, "section", 1)(41, "div", 19)(42, "div", 20),
                e.YNc(43, Fi, 8, 6, "div", 21),
                e.qZA()()(),
                e.TgZ(44, "section", 22)(45, "div", 3)(46, "div", 23)(
                  47,
                  "div",
                  24
                ),
                e._UZ(48, "app-product-box-vertical-slider", 25),
                e.qZA(),
                e.TgZ(49, "div", 24),
                e._UZ(50, "app-product-box-vertical-slider", 25),
                e.qZA(),
                e.TgZ(51, "div", 24),
                e._UZ(52, "app-product-box-vertical-slider", 25),
                e.qZA(),
                e.TgZ(53, "div", 24),
                e._UZ(54, "app-product-box-vertical-slider", 25),
                e.qZA()()()(),
                e.TgZ(55, "section", 1)(56, "div", 3)(57, "div", 26),
                e.YNc(58, Oi, 5, 5, "div", 27),
                e.qZA()()(),
                e.TgZ(59, "div", 28)(60, "h4"),
                e._uU(61, "exclusive products"),
                e.qZA(),
                e.TgZ(62, "h2", 29),
                e._uU(63, "special products"),
                e.qZA()(),
                e.TgZ(64, "section", 15)(65, "div", 3)(66, "div", 5)(
                  67,
                  "div",
                  30
                )(68, "ul", 31, 32),
                e.NdJ("activeIdChange", function (a) {
                  return (t.active = a);
                }),
                e.YNc(70, Ii, 4, 2, "li", 33),
                e.qZA(),
                e._UZ(71, "div", 34),
                e.qZA()()()(),
                e.TgZ(72, "section", 35)(73, "div", 3)(74, "div", 5)(
                  75,
                  "div",
                  6
                )(
                  76,
                  "div",
                  36
                )(77, "h4"),
                e._uU(78, "Recent Story"),
                e.qZA(),
                e.TgZ(79, "h2", 29),
                e._uU(80, "from the blog"),
                e.qZA()()()(),
                e.TgZ(81, "div", 5)(82, "div", 37),
                e._UZ(83, "app-blog", 38),
                e.qZA()()()(),
                e.TgZ(84, "div", 3)(85, "section", 39),
                e._UZ(86, "app-services"),
                e.qZA()(),
                e.TgZ(87, "section", 22)(88, "div", 3)(89, "div", 5)(
                  90,
                  "div",
                  37
                ),
                e._UZ(91, "app-logo", 40),
                e.qZA()()()(),
                e._UZ(92, "app-footer-three", 41)),
              2 & o)
            ) {
              const r = e.MAs(69);
              e.Q6J("themeLogo", t.themeLogo),
                e.xp6(2),
                e.Q6J("sliders", t.sliders)("textClass", "text-center")(
                  "category",
                  "shoes"
                )("buttonClass", "black-btn")("buttonText", "shop now"),
                e.xp6(6),
                e.Q6J("options", t.CategorySliderConfig),
                e.xp6(1),
                e.Q6J("ngForOf", t.categories),
                e.xp6(17),
                e.Q6J("ngForOf", t.collections1),
                e.xp6(11),
                e.Q6J("options", t.ProductSliderConfig),
                e.xp6(1),
                e.Q6J("ngForOf", e.Dn7(39, 28, t.products, 0, 16)),
                e.xp6(5),
                e.Q6J("ngForOf", t.collections2),
                e.xp6(5),
                e.Q6J("title", "New product")("type", "shoes"),
                e.xp6(2),
                e.Q6J("title", "Sell product")("type", "shoes"),
                e.xp6(2),
                e.Q6J("title", "Feature Product")("type", "shoes"),
                e.xp6(2),
                e.Q6J("title", "Best Product")("type", "shoes"),
                e.xp6(4),
                e.Q6J("ngForOf", t.sizes),
                e.xp6(10),
                e.Q6J("activeId", t.active),
                e.xp6(2),
                e.Q6J("ngForOf", t.productCollections),
                e.xp6(1),
                e.Q6J("ngbNavOutlet", r),
                e.xp6(12),
                e.Q6J("blogs", t.blogs),
                e.xp6(8),
                e.Q6J("logos", t.logos),
                e.xp6(1),
                e.Q6J("themeLogo", t.themeLogo)("subFooter", !0);
            }
          },
          dependencies: [
            s.sg,
            d.rH,
            c.uN,
            c.Pz,
            c.nv,
            c.Vx,
            c.tO,
            l.Fy,
            l.Mp,
            A,
            te,
            C,
            oe,
            I.X,
            f,
            v,
            T,
            y,
            s.OU,
          ],
        }));
      }
      var Pi = u(19564);
      function Di(n, i) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "div", 51),
            e._UZ(2, "app-product-box-three", 52),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw(3);
          e.xp6(2),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function ji(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 50),
            e.YNc(1, Di, 3, 2, "ng-container", 28),
            e.ALo(2, "slice"),
            e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("ngForOf", e.Dn7(2, 1, t.getCollectionProducts(o), 0, 4));
        }
      }
      function Yi(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "li", 47)(1, "a", 48),
            e._uU(2),
            e.qZA(),
            e.YNc(3, ji, 3, 5, "ng-template", 49),
            e.qZA()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.Q6J("ngbNavItem", o), e.xp6(2), e.hij(" ", o, " ");
        }
      }
      const h = function () {
          return ["/shop/collection/left/sidebar"];
        },
        Z = function () {
          return { category: "bags" };
        };
      function Hi(n, i) {
        if (
          (1 & n && (e.TgZ(0, "div", 8)(1, "a", 53), e._uU(2), e.qZA()()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.xp6(1),
            e.Q6J("routerLink", e.DdM(3, h))("queryParams", e.DdM(4, Z)),
            e.xp6(1),
            e.hij(" ", o, " ");
        }
      }
      function Bi(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div")(1, "div", 55),
            e._UZ(2, "app-product-box-five", 56),
            e.qZA()()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(2),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            )("thumbnail", !1)("onHowerChangeImage", !1)("cartModal", !0);
        }
      }
      function zi(n, i) {
        1 & n && (e.ynx(0), e.YNc(1, Bi, 3, 5, "ng-template", 54), e.BQk());
      }
      function $i(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 55),
            e._UZ(1, "app-product-box-five", 56),
            e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            )("thumbnail", !1)("onHowerChangeImage", !0)("cartModal", !0);
        }
      }
      function Vi(n, i) {
        1 & n && (e.ynx(0), e.YNc(1, $i, 2, 5, "ng-template", 54), e.BQk());
      }
      const Ei = function () {
        return { "background-image": "url(assets/images/parallax/9.jpg)" };
      };
      class ne {
        constructor(i) {
          (this.productService = i),
            (this.themeLogo = "assets/images/icon/logo-7.png"),
            (this.themeLogoWhite = "assets/images/icon/logo-8.png"),
            (this.products = []),
            (this.productCollections = []),
            (this.ProductSliderConfig = g.O_),
            (this.ProductSliderOneConfig = g.fE),
            (this.sliders = [
              {
                title: "summer sale",
                subTitle: "the bag",
                image: "assets/images/slider/25.jpg",
              },
              {
                title: "summer sale",
                subTitle: "the bag",
                image: "assets/images/slider/26.jpg",
              },
              {
                title: "summer sale",
                subTitle: "the bag",
                image: "assets/images/slider/27.jpg",
              },
            ]),
            (this.categories = [
              "airbag",
              "burn bag",
              "briefcase",
              "carpet",
              "money bag",
              "tucker",
            ]),
            (this.blogs = [
              {
                image: "assets/images/blog/37.jpg",
                date: "25 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/38.jpg",
                date: "26 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/39.jpg",
                date: "27 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/37.jpg",
                date: "28 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
            ]),
            this.productService.getProducts.subscribe((o) => {
              (this.products = o.filter((t) => "bags" == t.type)),
                this.products.filter((t) => {
                  t.collection.filter((r) => {
                    -1 === this.productCollections.indexOf(r) &&
                      this.productCollections.push(r);
                  });
                });
            });
        }
        ngOnInit() {
          document.documentElement.style.setProperty(
            "--theme-deafult",
            "#f0b54d"
          );
        }
        ngOnDestroy() {
          document.documentElement.style.removeProperty("--theme-deafult");
        }
        getCollectionProducts(i) {
          return this.products.filter((o) => {
            if (o.collection.find((t) => t === i)) return o;
          });
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || ne)(e.Y36(m.M));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: ne,
          selectors: [["app-bags"]],
          decls: 131,
          vars: 81,
          consts: [
            [3, "themeLogo"],
            [1, "p-0"],
            [3, "sliders", "textClass", "category", "buttonText"],
            [1, "section-b-space"],
            [1, "container"],
            [1, "title2"],
            [1, "title-inner2"],
            [1, "row"],
            [1, "col"],
            [1, "theme-tab"],
            [
              "ngbNav",
              "",
              1,
              "tabs",
              "tab-title",
              "justify-content-center",
              "nav",
              "nav-pills",
              3,
              "activeId",
              "activeIdChange",
            ],
            ["nav", "ngbNav"],
            [3, "ngbNavItem", 4, "ngFor", "ngForOf"],
            [1, "mt-2", 3, "ngbNavOutlet"],
            [1, "container", "category-button"],
            [1, "section-b-space", "border-section", "border-bottom-0"],
            [1, "row", "partition1"],
            ["class", "col", 4, "ngFor", "ngForOf"],
            [
              1,
              "full-banner",
              "banner-layout-3",
              "parallax",
              "text-center",
              "p-center",
              3,
              "ngStyle",
            ],
            [1, "banner-contain"],
            [1, "color", "pt-0"],
            [1, "btn", "btn-solid", 3, "routerLink", "queryParams"],
            [1, "row", "partition3", "partition_3"],
            [1, "col-lg-4"],
            [1, "theme-card", "card-border"],
            [3, "title", "type"],
            [1, "col-lg-4", "center-slider", "border-0"],
            [1, "offer-slider", "slide-1", 3, "options"],
            [4, "ngFor", "ngForOf"],
            [1, "category-bg"],
            [1, "container-fluid", "p-0"],
            [1, "row", "order-section"],
            [1, "col-sm-4", "p-0"],
            [1, "image-block", 3, "routerLink", "queryParams"],
            [
              "src",
              "assets/images/categories/11.jpg",
              "alt",
              "",
              1,
              "img-fluid",
            ],
            [1, "contain-block", "even"],
            [3, "routerLink", "queryParams"],
            [
              1,
              "btn",
              "btn-solid",
              "category-btn",
              3,
              "routerLink",
              "queryParams",
            ],
            [
              "src",
              "assets/images/categories/12.jpg",
              "alt",
              "",
              1,
              "img-fluid",
            ],
            [1, "contain-block"],
            [1, "image-block", "even", 3, "routerLink", "queryParams"],
            [
              "src",
              "assets/images/categories/13.jpg",
              "alt",
              "",
              1,
              "img-fluid",
            ],
            [1, "section-b-space", "border-section", "border-top-0"],
            [1, "product-4", "product-m", "no-arrow", 3, "options"],
            [1, "blog", "section-b-space"],
            [1, "col-md-12"],
            [3, "blogs"],
            [3, "ngbNavItem"],
            ["ngbNavLink", ""],
            ["ngbNavContent", ""],
            [1, "no-slider", "row"],
            [1, "product-box"],
            [3, "product", "currency"],
            [
              1,
              "btn",
              "btn-outline",
              "btn-block",
              3,
              "routerLink",
              "queryParams",
            ],
            ["carouselSlide", ""],
            [1, "product-box", "product-wrap"],
            [
              3,
              "product",
              "currency",
              "thumbnail",
              "onHowerChangeImage",
              "cartModal",
            ],
          ],
          template: function (o, t) {
            if (
              (1 & o &&
                (e._UZ(0, "app-header-two", 0),
                e.TgZ(1, "section", 1),
                e._UZ(2, "app-slider", 2),
                e.qZA(),
                e.TgZ(3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "h4"),
                e._uU(7, "new collection"),
                e.qZA(),
                e.TgZ(8, "h2", 6),
                e._uU(9, "trending products"),
                e.qZA()(),
                e.TgZ(10, "div", 7)(11, "div", 8)(12, "div", 9)(
                  13,
                  "ul",
                  10,
                  11
                ),
                e.NdJ("activeIdChange", function (a) {
                  return (t.active = a);
                }),
                e.YNc(15, Yi, 4, 2, "li", 12),
                e.qZA(),
                e._UZ(16, "div", 13),
                e.qZA()()()()(),
                e.TgZ(17, "div", 14)(18, "section", 15)(19, "div", 16),
                e.YNc(20, Hi, 3, 5, "div", 17),
                e.qZA()()(),
                e.TgZ(21, "section", 1)(22, "div", 18)(23, "div", 4)(
                  24,
                  "div",
                  7
                )(25, "div", 8)(26, "div", 19)(27, "h4", 20),
                e._uU(28, "special offer for you"),
                e.qZA(),
                e.TgZ(29, "h3"),
                e._uU(30, "leather bag"),
                e.qZA(),
                e.TgZ(31, "h4"),
                e._uU(32, "extra 50% off"),
                e.qZA(),
                e.TgZ(33, "a", 21),
                e._uU(34, " shop now "),
                e.qZA()()()()()()(),
                e.TgZ(35, "section", 3)(36, "div", 4)(37, "div", 22)(
                  38,
                  "div",
                  23
                )(39, "div", 24),
                e._UZ(40, "app-product-box-vertical-slider", 25),
                e.qZA()(),
                e.TgZ(41, "div", 26)(42, "div")(43, "div", 5)(44, "h4"),
                e._uU(45, "on sale"),
                e.qZA(),
                e.TgZ(46, "h2", 6),
                e._uU(47, "season sale"),
                e.qZA()(),
                e.TgZ(48, "owl-carousel-o", 27),
                e.YNc(49, zi, 2, 0, "ng-container", 28),
                e.ALo(50, "slice"),
                e.qZA()()(),
                e.TgZ(51, "div", 23)(52, "div", 24),
                e._UZ(53, "app-product-box-vertical-slider", 25),
                e.qZA()()()()(),
                e.TgZ(54, "div", 29)(55, "div", 30)(56, "div", 31)(
                  57,
                  "div",
                  32
                )(58, "a", 33),
                e._UZ(59, "img", 34),
                e.qZA()(),
                e.TgZ(60, "div", 32)(61, "div", 35)(62, "div")(63, "h6"),
                e._uU(64, "new products"),
                e.qZA(),
                e.TgZ(65, "a", 36)(66, "h2"),
                e._uU(67, "zipper storage bag"),
                e.qZA()(),
                e.TgZ(68, "a", 37),
                e._uU(69, " -80% off "),
                e.qZA(),
                e.TgZ(70, "a", 36)(71, "h6")(72, "span"),
                e._uU(73, "shop now"),
                e.qZA()()()()()(),
                e.TgZ(74, "div", 32)(75, "a", 33),
                e._UZ(76, "img", 38),
                e.qZA()(),
                e.TgZ(77, "div", 32)(78, "div", 39)(79, "div")(80, "h6"),
                e._uU(81, "on sale"),
                e.qZA(),
                e.TgZ(82, "a", 36)(83, "h2"),
                e._uU(84, "tucker bag"),
                e.qZA()(),
                e.TgZ(85, "a", 37),
                e._uU(86, " save 30% off "),
                e.qZA(),
                e.TgZ(87, "a", 36)(88, "h6")(89, "span"),
                e._uU(90, "shop now"),
                e.qZA()()()()()(),
                e.TgZ(91, "div", 32)(92, "a", 40),
                e._UZ(93, "img", 41),
                e.qZA()(),
                e.TgZ(94, "div", 32)(95, "div", 39)(96, "div")(97, "h6"),
                e._uU(98, "summer sale"),
                e.qZA(),
                e.TgZ(99, "a", 36)(100, "h2"),
                e._uU(101, "gate check bag"),
                e.qZA()(),
                e.TgZ(102, "a", 37),
                e._uU(103, " minimum 50% off "),
                e.qZA(),
                e.TgZ(104, "a", 36)(105, "h6")(106, "span"),
                e._uU(107, "shop now"),
                e.qZA()()()()()()()()(),
                e.TgZ(108, "div", 4)(109, "section", 42)(110, "div", 7)(
                  111,
                  "div",
                  8
                )(
                  112,
                  "div",
                  5
                )(113, "h4"),
                e._uU(114, "trend"),
                e.qZA(),
                e.TgZ(115, "h2", 6),
                e._uU(116, "exclusive bag"),
                e.qZA()(),
                e.TgZ(117, "owl-carousel-o", 43),
                e.YNc(118, Vi, 2, 0, "ng-container", 28),
                e.ALo(119, "slice"),
                e.qZA()()()()(),
                e.TgZ(120, "section", 44)(121, "div", 4)(122, "div", 7)(
                  123,
                  "div",
                  45
                )(
                  124,
                  "div",
                  5
                )(125, "h4"),
                e._uU(126, "recent story"),
                e.qZA(),
                e.TgZ(127, "h2", 6),
                e._uU(128, "latest blog"),
                e.qZA()(),
                e._UZ(129, "app-blog", 46),
                e.qZA()()()(),
                e._UZ(130, "app-footer-two", 0)),
              2 & o)
            ) {
              const r = e.MAs(14);
              e.Q6J("themeLogo", t.themeLogo),
                e.xp6(2),
                e.Q6J("sliders", t.sliders)(
                  "textClass",
                  "text-center p-center"
                )("category", "bags")("buttonText", "save up to 50% off"),
                e.xp6(11),
                e.Q6J("activeId", t.active),
                e.xp6(2),
                e.Q6J("ngForOf", t.productCollections),
                e.xp6(1),
                e.Q6J("ngbNavOutlet", r),
                e.xp6(4),
                e.Q6J("ngForOf", t.categories),
                e.xp6(2),
                e.Q6J("ngStyle", e.DdM(54, Ei)),
                e.xp6(11),
                e.Q6J("routerLink", e.DdM(55, h))("queryParams", e.DdM(56, Z)),
                e.xp6(7),
                e.Q6J("title", "New product")("type", "bags"),
                e.xp6(8),
                e.Q6J("options", t.ProductSliderOneConfig),
                e.xp6(1),
                e.Q6J("ngForOf", e.Dn7(50, 46, t.products, 0, 8)),
                e.xp6(4),
                e.Q6J("title", "Feature product")("type", "bags"),
                e.xp6(5),
                e.Q6J("routerLink", e.DdM(57, h))("queryParams", e.DdM(58, Z)),
                e.xp6(7),
                e.Q6J("routerLink", e.DdM(59, h))("queryParams", e.DdM(60, Z)),
                e.xp6(3),
                e.Q6J("routerLink", e.DdM(61, h))("queryParams", e.DdM(62, Z)),
                e.xp6(2),
                e.Q6J("routerLink", e.DdM(63, h))("queryParams", e.DdM(64, Z)),
                e.xp6(5),
                e.Q6J("routerLink", e.DdM(65, h))("queryParams", e.DdM(66, Z)),
                e.xp6(7),
                e.Q6J("routerLink", e.DdM(67, h))("queryParams", e.DdM(68, Z)),
                e.xp6(3),
                e.Q6J("routerLink", e.DdM(69, h))("queryParams", e.DdM(70, Z)),
                e.xp6(2),
                e.Q6J("routerLink", e.DdM(71, h))("queryParams", e.DdM(72, Z)),
                e.xp6(5),
                e.Q6J("routerLink", e.DdM(73, h))("queryParams", e.DdM(74, Z)),
                e.xp6(7),
                e.Q6J("routerLink", e.DdM(75, h))("queryParams", e.DdM(76, Z)),
                e.xp6(3),
                e.Q6J("routerLink", e.DdM(77, h))("queryParams", e.DdM(78, Z)),
                e.xp6(2),
                e.Q6J("routerLink", e.DdM(79, h))("queryParams", e.DdM(80, Z)),
                e.xp6(13),
                e.Q6J("options", t.ProductSliderConfig),
                e.xp6(1),
                e.Q6J("ngForOf", e.Dn7(119, 50, t.products, 0, 8)),
                e.xp6(11),
                e.Q6J("blogs", t.blogs),
                e.xp6(1),
                e.Q6J("themeLogo", t.themeLogoWhite);
            }
          },
          dependencies: [
            s.sg,
            s.PC,
            d.rH,
            c.uN,
            c.Pz,
            c.nv,
            c.Vx,
            c.tO,
            l.Fy,
            l.Mp,
            k,
            w,
            C,
            Pi.P,
            I.X,
            f,
            v,
            s.OU,
          ],
        }));
      }
      const Wi = ["ageVerification"];
      function Ki(n, i) {
        if (1 & n) {
          const o = e.EpF();
          e.TgZ(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(
            4,
            "div",
            6
          )(5, "div", 7)(
            6,
            "div",
            8
          )(7, "h2"),
            e._uU(8, " Age verification"),
            e.qZA(),
            e.TgZ(9, "h4"),
            e._uU(
              10,
              "This Website requires you to be 18 years or older to enter. Please enter your Date Of Birth in this fields below in order to continue:"
            ),
            e.qZA(),
            e.TgZ(11, "form", 9)(12, "div"),
            e._UZ(13, "input", 10)(14, "input", 11)(15, "input", 12),
            e.qZA(),
            e.TgZ(16, "button", 13),
            e.NdJ("click", function () {
              e.CHM(o);
              const r = e.oxw();
              return e.KtG(r.ageForm());
            }),
            e._uU(17, " submit "),
            e.qZA()()()()()()()()();
        }
        if (2 & n) {
          const o = e.oxw();
          e.xp6(13),
            e.Q6J("formControl", o.ageVerificationForm.controls.day),
            e.xp6(1),
            e.Q6J("formControl", o.ageVerificationForm.controls.month),
            e.xp6(1),
            e.Q6J("formControl", o.ageVerificationForm.controls.year);
        }
      }
      class re {
        constructor(i, o, t) {
          (this.platformId = i),
            (this.modalService = o),
            (this.fb = t),
            (this.ageVerificationForm = this.fb.group({
              day: ["", p.kI.required],
              month: ["", p.kI.required],
              year: ["", p.kI.required],
            }));
        }
        ngOnInit() {}
        ngAfterViewInit() {
          "true" !== localStorage.getItem("ageVerification") &&
            this.openModal();
        }
        openModal() {
          (0, s.NF)(this.platformId) &&
            this.modalService
              .open(this.AgeVerificationModal, {
                size: "md",
                backdrop: "static",
                keyboard: !1,
                centered: !0,
                windowClass: "bd-example-modal-md theme-modal agem",
              })
              .result.then(
                (i) => {},
                (i) => {
                  this.closeResult = `Dismissed ${this.getDismissReason(i)}`;
                }
              );
        }
        ageForm() {
          var i = this.ageVerificationForm.value.day,
            o = this.ageVerificationForm.value.month,
            t = this.ageVerificationForm.value.year,
            a = new Date();
          a.setFullYear(t, o - 1, i);
          var _ = new Date();
          this.currdate = _;
          var sn = new Date();
          (this.setDate = sn.setFullYear(a.getFullYear() + 18, o - 1, i)),
            this.currdate - this.setDate > 0
              ? (localStorage.setItem("ageVerification", "true"),
                this.modalService.dismissAll())
              : (window.location.href = "https://www.google.com/");
        }
        getDismissReason(i) {
          return i === c.If.ESC
            ? "by pressing ESC"
            : i === c.If.BACKDROP_CLICK
            ? "by clicking on a backdrop"
            : `with: ${i}`;
        }
        ngOnDestroy() {}
        static #e = (this.ɵfac = function (o) {
          return new (o || re)(e.Y36(e.Lbi), e.Y36(c.FF), e.Y36(p.QS));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: re,
          selectors: [["app-age-verification"]],
          viewQuery: function (o, t) {
            if ((1 & o && e.Gf(Wi, 5), 2 & o)) {
              let r;
              e.iGM((r = e.CRH())) && (t.AgeVerificationModal = r.first);
            }
          },
          decls: 2,
          vars: 0,
          consts: [
            ["class", "theme-modal"],
            ["ageVerification", ""],
            [1, "modal-content"],
            [1, "modal-body", "modal13"],
            [1, "container-fluid", "p-0"],
            [1, "row"],
            [1, "col-12"],
            [1, "modal-bg"],
            [1, "age-content"],
            ["id", "demoForm"],
            [
              "type",
              "number",
              "name",
              "day",
              "id",
              "birthDay",
              "value",
              "",
              "placeholder",
              "DD",
              "min",
              "1",
              "max",
              "2",
              1,
              "form-control",
              3,
              "formControl",
            ],
            [
              "type",
              "number",
              "name",
              "month",
              "id",
              "birthMonth",
              "value",
              "",
              "placeholder",
              "MM",
              "min",
              "1",
              "max",
              "2",
              1,
              "form-control",
              3,
              "formControl",
            ],
            [
              "type",
              "number",
              "name",
              "year",
              "id",
              "birthYear",
              "value",
              "",
              "placeholder",
              "YY",
              "min",
              "1",
              "max",
              "4",
              1,
              "form-control",
              3,
              "formControl",
            ],
            ["type", "submit", 1, "btn", "btn-solid", 3, "click"],
          ],
          template: function (o, t) {
            1 & o && e.YNc(0, Ki, 18, 3, "ng-template", 0, 1, e.W1O);
          },
          dependencies: [p._Y, p.Fj, p.wV, p.JJ, p.JL, p.qQ, p.Fd, p.F, p.oH],
        }));
      }
      function Xi(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 42)(1, "a", 43)(2, "div", 44),
            e._UZ(3, "img", 45),
            e.TgZ(4, "div", 46)(5, "div")(6, "h4"),
            e._uU(7),
            e.qZA(),
            e.TgZ(8, "h2"),
            e._uU(9),
            e.qZA()()()()()()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.xp6(1),
            e.Q6J("routerLink", o.link),
            e.xp6(1),
            e.Q6J("ngClass", o.class),
            e.xp6(1),
            e.Q6J("src", o.image, e.LSH),
            e.xp6(4),
            e.Oqu(o.save),
            e.xp6(2),
            e.Oqu(o.title);
        }
      }
      function Gi(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 48),
            e._UZ(1, "app-product-box-three", 49),
            e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function Ri(n, i) {
        1 & n && (e.ynx(0), e.YNc(1, Gi, 2, 2, "ng-template", 47), e.BQk());
      }
      function en(n, i) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "div", 54),
            e._UZ(2, "app-product-box-three", 49),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const o = i.$implicit,
            t = e.oxw(3);
          e.xp6(2),
            e.Q6J("product", o)(
              "currency",
              null == t.productService ? null : t.productService.Currency
            );
        }
      }
      function tn(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 53),
            e.YNc(1, en, 3, 2, "ng-container", 27),
            e.ALo(2, "slice"),
            e.qZA()),
          2 & n)
        ) {
          const o = e.oxw().$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J("ngForOf", e.Dn7(2, 1, t.getCollectionProducts(o), 0, 4));
        }
      }
      function on(n, i) {
        if (
          (1 & n &&
            (e.TgZ(0, "li", 50)(1, "a", 51),
            e._uU(2),
            e.qZA(),
            e.YNc(3, tn, 3, 5, "ng-template", 52),
            e.qZA()),
          2 & n)
        ) {
          const o = i.$implicit;
          e.Q6J("ngbNavItem", o), e.xp6(2), e.hij(" ", o, " ");
        }
      }
      const nn = function () {
        return { "background-image": "url(assets/images/parallax/10.jpg)" };
      };
      class se {
        constructor(i) {
          (this.productService = i),
            (this.themeLogo = "assets/images/icon/logo-3.png"),
            (this.themeFooterLogo = "assets/images/icon/logo-9.png"),
            (this.products = []),
            (this.productCollections = []),
            (this.ProductSliderConfig = g.O_),
            (this.sliders = [
              {
                title: "special offer",
                subTitle: "Buy Marijuana",
                image: "assets/images/slider/28.jpg",
              },
              {
                title: "special offer",
                subTitle: "cannabis weed",
                image: "assets/images/slider/29.jpg",
              },
            ]),
            (this.collections = [
              {
                image: "assets/images/collection/marijuana/1.jpg",
                save: "save 50%",
                title: "oils",
                link: "/home/left-sidebar/collection/marijuana",
                class: "p-left",
              },
              {
                image: "assets/images/collection/marijuana/2.jpg",
                save: "save 20%",
                title: "liquid",
                link: "/home/left-sidebar/collection/marijuana",
                class: "p-right",
              },
            ]),
            (this.blogs = [
              {
                image: "assets/images/blog/40.jpg",
                date: "25 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/41.jpg",
                date: "26 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/42.jpg",
                date: "27 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
              {
                image: "assets/images/blog/40.jpg",
                date: "28 January 2018",
                title: "Lorem ipsum dolor sit consectetur adipiscing elit,",
                by: "John Dio",
              },
            ]),
            (this.logos = [
              { image: "assets/images/logos/1.png" },
              { image: "assets/images/logos/2.png" },
              { image: "assets/images/logos/3.png" },
              { image: "assets/images/logos/4.png" },
              { image: "assets/images/logos/5.png" },
              { image: "assets/images/logos/6.png" },
              { image: "assets/images/logos/7.png" },
              { image: "assets/images/logos/8.png" },
            ]),
            this.productService.getProducts.subscribe((o) => {
              (this.products = o.filter((t) => "marijuana" == t.type)),
                this.products.filter((t) => {
                  t.collection.filter((r) => {
                    -1 === this.productCollections.indexOf(r) &&
                      this.productCollections.push(r);
                  });
                });
            });
        }
        ngOnInit() {
          document.documentElement.style.setProperty(
            "--theme-deafult",
            "#5d7227"
          ),
            document.documentElement.style.setProperty(
              "--theme-gradient1",
              "#5d7227"
            ),
            document.documentElement.style.setProperty(
              "--theme-gradient2",
              "#203f15"
            );
        }
        ngOnDestroy() {
          document.documentElement.style.removeProperty("--theme-deafult"),
            document.documentElement.style.removeProperty("--theme-gradient1"),
            document.documentElement.style.removeProperty("--theme-gradient2");
        }
        getCollectionProducts(i) {
          return this.products.filter((o) => {
            if (o.collection.find((t) => t === i)) return o;
          });
        }
        static #e = (this.ɵfac = function (o) {
          return new (o || se)(e.Y36(m.M));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: se,
          selectors: [["app-marijuana"]],
          decls: 100,
          vars: 22,
          consts: [
            [3, "themeLogo"],
            [1, "p-0", "service_slide"],
            [
              3,
              "sliders",
              "textClass",
              "category",
              "buttonClass",
              "buttonText",
            ],
            [1, "banner-padding", "absolute-banner", "pb-0", "tools-service"],
            [1, "container", "absolute-bg"],
            [1, "service", "p-0"],
            [1, "container"],
            [1, "row"],
            [1, "col-lg-8", "offset-lg-2"],
            [1, "title3"],
            [1, "title-inner3"],
            [1, "line"],
            [1, "about-text"],
            [1, "p-t-0", "section-b-space"],
            [1, "row", "partition2"],
            ["class", "col-md-6", 4, "ngFor", "ngForOf"],
            [1, "section-b-space", "detail-cannabis", "bg-grey"],
            [1, "col-md-4"],
            [1, "detail_section"],
            [
              "viewBox",
              "-29 0 396 396.05387",
              "xmlns",
              "http://www.w3.org/2000/svg",
            ],
            [
              "d",
              "m244.53125 271.503906c-2.628906-.84375-5.445312.605469-6.289062 3.234375-.84375 2.628907.605468 5.445313 3.234374 6.289063 17.464844 5.945312 33.558594 15.34375 47.320313 27.632812-19.019531 2.972656-38.453125 1.882813-57.019531-3.199218-17.972656-5.644532-34.546875-15.023438-48.636719-27.523438-.8125-.703125-1.828125-1.125-2.902344-1.203125-7.023437-.496094-14.074219-.496094-21.097656 0-1.070313.078125-2.089844.5-2.902344 1.203125-14.089843 12.503906-30.664062 21.882812-48.636719 27.527344-18.566406 5.089844-38 6.179687-57.019531 3.199218 13.761719-12.289062 29.855469-21.6875 47.320313-27.632812 2.121094-.675781 3.539062-2.671875 3.476562-4.894531-.058594-2.222657-1.578125-4.140625-3.730468-4.703125-5.953126-1.554688-11.808594-3.46875-17.527344-5.730469-24.882813-10.507813-47.144532-26.367187-65.203125-46.453125 26.917969-2.222656 53.996093 1.523438 79.300781 10.960938 1.40625.5625 2.753906 1.164062 4.109375 1.765624l1.058594.472657c2.222656.980469 4.828125.226562 6.179687-1.792969 1.347656-2.019531 1.054688-4.71875-.703125-6.394531-9.792969-9.3125-18.691406-19.519531-26.574219-30.488281-28.636718-40.144532-38.039062-85.835938-40.84375-104.71875 16.921876 8.800781 57.027344 32.503906 85.707032 72.710937 2.355468 3.300781 4.726562 6.910156 7.46875 11.367187.921875 1.546876 2.605468 2.480469 4.410156 2.4375 1.804688-.039062 3.441406-1.050781 4.292969-2.640624.851562-1.589844.777343-3.515626-.1875-5.039063-2.859375-4.644531-5.351563-8.4375-7.84375-11.925781-38.671875-54.210938-95.554688-78.980469-97.957031-80-1.605469-.6875-3.449219-.484375-4.871094.527344-1.417969 1.011718-2.207032 2.691406-2.082032 4.433593.191407 2.601563 5.089844 64.449219 43.765626 118.664063 3.933593 5.519531 8.214843 10.9375 12.839843 16.25-25.621093-7.179688-52.4375-9.03125-78.800781-5.429688-1.71875.289063-3.164062 1.457032-3.808594 3.078125-.644531 1.625-.394531 3.464844.65625 4.855469 20.03125 24.859375 45.945313 44.332031 75.398438 56.65625 1.554687.617188 3.136718 1.214844 4.746094 1.792969-16.746094 7.664062-31.917969 18.378906-44.738282 31.597656-1.179687 1.289063-1.597656 3.101563-1.105468 4.773437.488281 1.675782 1.816406 2.972657 3.503906 3.425782 10.9375 2.570312 22.140625 3.828125 33.375 3.75 12.925781.074218 25.792968-1.710938 38.207031-5.292969 18.820313-5.867187 36.21875-15.566406 51.109375-28.484375.824219-.050781 1.703125-.078125 2.570312-.109375-1.222656 15.402344-1.414062 57.640625 27.792969 91.652344 1.800781 2.097656 4.960938 2.339843 7.058594.539062 2.097656-1.796875 2.34375-4.957031.542969-7.054687-27.074219-31.527344-26.363282-72.097656-25.308594-85.203125 1.261719.042969 2.5.09375 3.679688.164062 14.886718 12.910157 32.277343 22.601563 51.085937 28.46875 23.367187 6.460938 47.976563 6.992188 71.597656 1.542969 1.6875-.449219 3.015625-1.746094 3.507813-3.421875.488281-1.675781.070312-3.484375-1.105469-4.773437-16.269531-16.753907-36.292969-29.394532-58.421875-36.863282zm0 0",
            ],
            [
              "d",
              "m339 213.476562c-.644531-1.621093-2.089844-2.789062-3.808594-3.082031-26.363281-3.59375-53.179687-1.746093-78.800781 5.433594 4.609375-5.296875 8.890625-10.710937 12.839844-16.246094 38.679687-54.21875 43.578125-116.046875 43.769531-118.667969.125-1.742187-.664062-3.421874-2.082031-4.433593-1.421875-1.015625-3.265625-1.214844-4.871094-.527344-37.171875 17.367187-69.679687 43.332031-94.835937 75.742187.203124-4 .304687-7.914062.304687-11.78125 0-75.140624-36-135.160156-37.554687-137.683593-.972657-1.398438-2.566407-2.230469-4.269532-2.230469s-3.300781.832031-4.273437 2.230469c-21.269531 37.734375-33.9375 79.703125-37.089844 122.90625-.167969 2.757812 1.925781 5.128906 4.683594 5.300781 2.734375.109375 5.074219-1.957031 5.300781-4.683594 3.003906-38.5625 13.671875-76.136718 31.378906-110.523437 9.554688 18.472656 31.824219 67.648437 31.824219 124.683593-.023437 10.019532-.683594 20.027344-1.972656 29.960938-.277344 2.324219 1.09375 4.53125 3.300781 5.308594 2.203125.78125 4.65625-.074219 5.898438-2.054688 2.738281-4.453125 5.113281-8.066406 7.46875-11.367187 28.632812-40.140625 68.777343-63.90625 85.714843-72.707031-2.796875 18.867187-12.167969 64.503906-40.851562 104.714843-7.882813 10.96875-16.78125 21.175781-26.574219 30.488281-1.757812 1.675782-2.050781 4.375-.703125 6.394532 1.351563 2.019531 3.957031 2.773437 6.179687 1.792968l1.058594-.472656c1.355469-.601562 2.707032-1.199218 4.105469-1.765625 25.308594-9.425781 52.382813-13.167969 79.300781-10.957031-15.886718 17.585938-34.957031 32.011719-56.203125 42.519531-2.492187 1.183594-3.554687 4.167969-2.367187 6.664063 1.1875 2.492187 4.171875 3.554687 6.664062 2.367187 25.507813-12.46875 47.96875-30.378906 65.808594-52.464843 1.050781-1.394532 1.300781-3.234376.65625-4.859376zm0 0",
            ],
            [
              "d",
              "m211.195312 383.136719c-2.121093-1.769531-5.277343-1.480469-7.042968.644531-1.769532 2.121094-1.480469 5.277344.644531 7.042969 1.746094 1.453125 3.5625 2.875 5.449219 4.265625 2.230468 1.628906 5.359375 1.144531 6.992187-1.082032 1.632813-2.230468 1.144531-5.359374-1.082031-6.992187-1.714844-1.273437-3.371094-2.574219-4.960938-3.878906zm0 0",
            ],
            [1, "title3", "section-t-space"],
            [1, "p-t-0", "section-b-space", "tools-grey", "border-box"],
            [1, "col"],
            [1, "product-5", "product-m", "no-arrow", 3, "options"],
            [4, "ngFor", "ngForOf"],
            [
              1,
              "full-banner",
              "parallax",
              "tools-parallax-product",
              "tools-grey",
              "border-box",
              3,
              "ngStyle",
            ],
            [1, "col", "theme-tab"],
            [
              "ngbNav",
              "",
              1,
              "tabs",
              "tab-title",
              "justify-content-center",
              "nav",
              "nav-pills",
              3,
              "activeId",
              "activeIdChange",
            ],
            ["nav", "ngbNav"],
            [3, "ngbNavItem", 4, "ngFor", "ngForOf"],
            [1, "mt-2", 3, "ngbNavOutlet"],
            [1, "blog", "pt-0", "section-b-space"],
            [1, "title1", "section-t-space"],
            [1, "title-inner1"],
            [1, "col-md-12"],
            [3, "blogs"],
            [1, "bg-grey", "section-b-space", "small-section"],
            [3, "logos"],
            [3, "direction"],
            [1, "col-md-6"],
            [3, "routerLink"],
            [1, "collection-banner", "text-center", 3, "ngClass"],
            ["alt", "collection-banner", 1, "img-fluid", 3, "src"],
            [1, "contain-banner"],
            ["carouselSlide", ""],
            [1, "product-box", "product-wrap"],
            [3, "product", "currency"],
            [3, "ngbNavItem"],
            ["ngbNavLink", ""],
            ["ngbNavContent", ""],
            [1, "no-slider", "row"],
            [1, "product-box"],
          ],
          template: function (o, t) {
            if (
              (1 & o &&
                (e._UZ(0, "app-header-three", 0),
                e.TgZ(1, "section", 1),
                e._UZ(2, "app-slider", 2),
                e.qZA(),
                e.TgZ(3, "section", 3)(4, "div", 4)(5, "div", 5),
                e._UZ(6, "app-services"),
                e.qZA()()(),
                e.TgZ(7, "section")(8, "div", 6)(9, "div", 7)(10, "div", 8)(
                  11,
                  "div",
                  9
                )(12, "h4"),
                e._uU(13, "about us"),
                e.qZA(),
                e.TgZ(14, "h2", 10),
                e._uU(15, "welcome to multi store"),
                e.qZA(),
                e._UZ(16, "div", 11),
                e.qZA(),
                e.TgZ(17, "div", 12)(18, "p"),
                e._uU(
                  19,
                  " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
                ),
                e.qZA()()()()()(),
                e.TgZ(20, "section", 13)(21, "div", 6)(22, "div", 14),
                e.YNc(23, Xi, 10, 5, "div", 15),
                e.qZA()()(),
                e.TgZ(24, "section", 16)(25, "div", 6)(26, "div", 7)(
                  27,
                  "div",
                  17
                )(
                  28,
                  "div",
                  18
                )(29, "div"),
                e.O4$(),
                e.TgZ(30, "svg", 19),
                e._UZ(31, "path", 20)(32, "path", 21)(33, "path", 22),
                e.qZA(),
                e.kcU(),
                e.TgZ(34, "h4"),
                e._uU(35, "19+ Only"),
                e.qZA(),
                e.TgZ(36, "p"),
                e._uU(
                  37,
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis cupiditate deleniti"
                ),
                e.qZA()()()(),
                e.TgZ(38, "div", 17)(39, "div", 18)(40, "div"),
                e.O4$(),
                e.TgZ(41, "svg", 19),
                e._UZ(42, "path", 20)(43, "path", 21)(44, "path", 22),
                e.qZA(),
                e.kcU(),
                e.TgZ(45, "h4"),
                e._uU(46, "30g Limit"),
                e.qZA(),
                e.TgZ(47, "p"),
                e._uU(
                  48,
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis cupiditate deleniti"
                ),
                e.qZA()()()(),
                e.TgZ(49, "div", 17)(50, "div", 18)(51, "div"),
                e.O4$(),
                e.TgZ(52, "svg", 19),
                e._UZ(53, "path", 20)(54, "path", 21)(55, "path", 22),
                e.qZA(),
                e.kcU(),
                e.TgZ(56, "h4"),
                e._uU(57, "Trusted Source"),
                e.qZA(),
                e.TgZ(58, "p"),
                e._uU(
                  59,
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis cupiditate deleniti"
                ),
                e.qZA()()()()()()(),
                e.TgZ(60, "div", 23)(61, "h4"),
                e._uU(62, "special offer"),
                e.qZA(),
                e.TgZ(63, "h2", 10),
                e._uU(64, "new products"),
                e.qZA(),
                e._UZ(65, "div", 11),
                e.qZA(),
                e.TgZ(66, "section", 24)(67, "div", 6)(68, "div", 7)(
                  69,
                  "div",
                  25
                )(70, "owl-carousel-o", 26),
                e.YNc(71, Ri, 2, 0, "ng-container", 27),
                e.qZA()()()()(),
                e.TgZ(72, "section", 28)(73, "div", 6)(74, "div", 7)(
                  75,
                  "div",
                  29
                )(76, "ul", 30, 31),
                e.NdJ("activeIdChange", function (a) {
                  return (t.active = a);
                }),
                e.YNc(78, on, 4, 2, "li", 32),
                e.qZA(),
                e._UZ(79, "div", 33),
                e.qZA()()()(),
                e.TgZ(80, "section", 34)(81, "div", 6)(82, "div", 7)(
                  83,
                  "div",
                  25
                )(
                  84,
                  "div",
                  35
                )(85, "h4"),
                e._uU(86, "Recent Story"),
                e.qZA(),
                e.TgZ(87, "h2", 36),
                e._uU(88, "from the blog"),
                e.qZA()()()(),
                e.TgZ(89, "div", 7)(90, "div", 37),
                e._UZ(91, "app-blog", 38),
                e.qZA()()()(),
                e.TgZ(92, "section", 39)(93, "div", 6)(94, "div", 7)(
                  95,
                  "div",
                  37
                ),
                e._UZ(96, "app-logo", 40),
                e.qZA()()()(),
                e._UZ(97, "app-age-verification")(98, "app-cart-variation", 41)(
                  99,
                  "app-footer-two",
                  0
                )),
              2 & o)
            ) {
              const r = e.MAs(77);
              e.Q6J("themeLogo", t.themeLogo),
                e.xp6(2),
                e.Tol("text-white"),
                e.Q6J("sliders", t.sliders)(
                  "textClass",
                  "text-center p-center"
                )("category", "marijuana")("buttonClass", "btn-green")(
                  "buttonText",
                  "shop now"
                ),
                e.xp6(21),
                e.Q6J("ngForOf", t.collections),
                e.xp6(47),
                e.Q6J("options", t.ProductSliderConfig),
                e.xp6(1),
                e.Q6J("ngForOf", t.products),
                e.xp6(1),
                e.Q6J("ngStyle", e.DdM(21, nn)),
                e.xp6(4),
                e.Q6J("activeId", t.active),
                e.xp6(2),
                e.Q6J("ngForOf", t.productCollections),
                e.xp6(1),
                e.Q6J("ngbNavOutlet", r),
                e.xp6(12),
                e.Q6J("blogs", t.blogs),
                e.xp6(5),
                e.Q6J("logos", t.logos),
                e.xp6(2),
                e.Q6J("direction", "right"),
                e.xp6(1),
                e.Tol("footer-5"),
                e.Q6J("themeLogo", t.themeFooterLogo);
            }
          },
          dependencies: [
            s.mk,
            s.sg,
            s.PC,
            d.rH,
            c.uN,
            c.Pz,
            c.nv,
            c.Vx,
            c.tO,
            l.Fy,
            l.Mp,
            w,
            A,
            C,
            b,
            re,
            f,
            v,
            T,
            y,
            s.OU,
          ],
        }));
      }
      const rn = [
        { path: "fashion", component: N },
        { path: "fashion-2", component: P },
        { path: "fashion-3", component: D },
        { path: "vegetable", component: H },
        { path: "watch", component: B },
        { path: "furniture", component: z },
        { path: "flower", component: $ },
        { path: "beauty", component: E },
        { path: "electronics", component: W },
        { path: "pets", component: G },
        { path: "gym", component: R },
        { path: "tools", component: ee },
        { path: "shoes", component: ie },
        { path: "bags", component: ne },
        { path: "marijuana", component: se },
      ];
      class ce {
        static #e = (this.ɵfac = function (o) {
          return new (o || ce)();
        });
        static #t = (this.ɵmod = e.oAB({ type: ce }));
        static #o = (this.ɵinj = e.cJS({ imports: [d.Bz.forChild(rn), d.Bz] }));
      }
      class ae {
        static #e = (this.ɵfac = function (o) {
          return new (o || ae)();
        });
        static #t = (this.ɵmod = e.oAB({ type: ae }));
        static #o = (this.ɵinj = e.cJS({ imports: [s.ez, ce, ke.m] }));
      }
    },
  },
]);
