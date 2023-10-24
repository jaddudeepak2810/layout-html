/*FB_PKG_DELIM*/

__d(
  "PageCommItemFolder",
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      PAGE: "PAGE",
      GROUP: "GROUP",
      DONE: "DONE",
      FOLLOW_UP: "FOLLOW_UP",
      SPAM: "SPAM",
      TODO: "TODO",
      UNREAD: "UNREAD",
      INSTAGRAM_THREADS: "INSTAGRAM_THREADS",
      MESSENGER_THREADS: "MESSENGER_THREADS",
      WEC_THREADS: "WEC_THREADS",
      PRIORITY: "PRIORITY",
      MEDIA_MANAGER_FB_COMMS: "MEDIA_MANAGER_FB_COMMS",
      MEDIA_MANAGER_TOP_COMMENT: "MEDIA_MANAGER_TOP_COMMENT",
      MEDIA_MANAGER_TOP_MESSAGE: "MEDIA_MANAGER_TOP_MESSAGE",
      MEDIA_MANAGER_STARS_COMMENT: "MEDIA_MANAGER_STARS_COMMENT",
      MEDIA_MANAGER_ALL_SECONDARY_FOLDER: "MEDIA_MANAGER_ALL_SECONDARY_FOLDER",
      MEDIA_MANAGER_ALL_TOP_PRIORITY: "MEDIA_MANAGER_ALL_TOP_PRIORITY",
      EMAIL_THREADS: "EMAIL_THREADS",
      SENT: "SENT",
      LABELS: "LABELS",
      UNRESPONDED: "UNRESPONDED",
      STORY_REACTIONS: "STORY_REACTIONS",
      NON_STORY_REACTIONS: "NON_STORY_REACTIONS",
      ASSIGNED: "ASSIGNED",
      INTENT_AUTO_LABEL: "INTENT_AUTO_LABEL",
      CTX_AD: "CTX_AD",
    };
  },
  null
);
__d(
  "useBizInboxCommerceInvoiceDataQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "5924049760972445";
  },
  null
);
__d(
  "useBizInboxCommerceInvoiceDataQuery.graphql",
  ["useBizInboxCommerceInvoiceDataQuery_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "consumer_id",
        },
        c = { defaultValue: null, kind: "LocalArgument", name: "page_id" },
        d = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "consumer_id",
                variableName: "consumer_id",
              },
              { kind: "Variable", name: "page_id", variableName: "page_id" },
            ],
            concreteType: "BizInboxFeatureConfigWrapper",
            kind: "LinkedField",
            name: "biz_inbox_feature_config",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "BizInboxGatingConfig",
                kind: "LinkedField",
                name: "gating_config",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "show_commerce_invoice_button_in_composer",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "BizInboxCommerceInvoiceButtonConfig",
                kind: "LinkedField",
                name: "commerce_invoice_button_config",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "show_confirm_payment",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "show_payment_onboarding",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "show_request_payment",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [a, c],
          kind: "Fragment",
          metadata: null,
          name: "useBizInboxCommerceInvoiceDataQuery",
          selections: d,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [c, a],
          kind: "Operation",
          name: "useBizInboxCommerceInvoiceDataQuery",
          selections: d,
        },
        params: {
          id: b("useBizInboxCommerceInvoiceDataQuery_facebookRelayOperation"),
          metadata: {},
          name: "useBizInboxCommerceInvoiceDataQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "BizInboxUnifiedThreadsQuery.graphql",
  ["relay-runtime"],
  function (aa, ba, ca, da, ea, fa) {
    "use strict";
    aa = (function () {
      var aa = { defaultValue: null, kind: "LocalArgument", name: "before" },
        ba = {
          defaultValue: [],
          kind: "LocalArgument",
          name: "businessAssets",
        },
        ca = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "getShouldUnifyConfigQueries",
        },
        da = { defaultValue: 480, kind: "LocalArgument", name: "height" },
        ea = { defaultValue: null, kind: "LocalArgument", name: "ig_params" },
        fa = {
          defaultValue: !0,
          kind: "LocalArgument",
          name: "includeDeliveryReceipts",
        },
        ga = { defaultValue: !1, kind: "LocalArgument", name: "includeSeqID" },
        ha = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "isDependencyOfRemovePageDependencyEnabledTool",
        },
        ia = { defaultValue: !1, kind: "LocalArgument", name: "isWorkUser" },
        ja = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "is_work_teamwork_not_putting_muted_in_unreads",
        },
        ka = { defaultValue: null, kind: "LocalArgument", name: "item_after" },
        la = { defaultValue: null, kind: "LocalArgument", name: "item_limit" },
        ma = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "loadThreadItems",
        },
        na = { defaultValue: !0, kind: "LocalArgument", name: "loadThreads" },
        oa = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "load_delivery_receipts",
        },
        pa = { defaultValue: !0, kind: "LocalArgument", name: "load_items" },
        qa = { defaultValue: !0, kind: "LocalArgument", name: "load_messages" },
        ra = {
          defaultValue: !0,
          kind: "LocalArgument",
          name: "load_read_receipts",
        },
        sa = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "message_limit",
        },
        ta = { defaultValue: null, kind: "LocalArgument", name: "msgr_params" },
        ua = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "msgr_pending_params",
        },
        va = { defaultValue: null, kind: "LocalArgument", name: "page_id" },
        wa = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "selected_item_id",
        },
        xa = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "should3DContextCardSections",
        },
        ya = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "shouldMergeLabelsQuery",
        },
        za = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "shouldSkipMessage",
        },
        Aa = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "shouldSkipPageQuery",
        },
        Ba = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "shouldUnifyContextCardQueries",
        },
        Ca = { defaultValue: null, kind: "LocalArgument", name: "source" },
        Da = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "threadlistViewFieldsOnly",
        },
        Ea = { defaultValue: null, kind: "LocalArgument", name: "wa_params" },
        Fa = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "wa_pending_params",
        },
        Ga = { defaultValue: 480, kind: "LocalArgument", name: "width" },
        Ha = [
          { kind: "Variable", name: "ig_params", variableName: "ig_params" },
          {
            kind: "Variable",
            name: "msgr_params",
            variableName: "msgr_params",
          },
          {
            kind: "Variable",
            name: "selected_item_id",
            variableName: "selected_item_id",
          },
          { kind: "Variable", name: "wa_params", variableName: "wa_params" },
        ],
        Ia = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "sync_sequence_id",
          storageKey: null,
        },
        Ja = {
          condition: "includeSeqID",
          kind: "Condition",
          passingValue: !0,
          selections: [Ia],
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        Ka = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "thread_fbid",
          storageKey: null,
        },
        La = {
          alias: null,
          args: null,
          concreteType: "MessageThreadKey",
          kind: "LinkedField",
          name: "thread_key",
          plural: !1,
          selections: [
            Ka,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "other_user_id",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        Ma = [{ kind: "Literal", name: "last", value: 1 }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "snippet",
          storageKey: null,
        },
        d = [a],
        Na = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "timestamp_precise",
          storageKey: null,
        },
        Oa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "commerce_message_type",
          storageKey: null,
        },
        Pa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "legacy_attachment_id",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        f = [e],
        Qa = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "description",
          plural: !1,
          selections: f,
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "title",
          storageKey: null,
        },
        Ra = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "action_url",
          storageKey: null,
        },
        Sa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "native_url",
          storageKey: null,
        },
        i = [
          g,
          h,
          Ra,
          Sa,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "target_id",
            storageKey: null,
          },
        ];
      i = {
        alias: null,
        args: null,
        concreteType: "MessengerGenericXMATemplateExtraFields",
        kind: "LinkedField",
        name: "messenger_generic_xma_template_extra_info",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "media_owner_profile_name",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "media_owner_profile_pic_uri",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "favicon_url",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "favicon_url_fallback",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "MessengerGenericXMATemplateCTA",
            kind: "LinkedField",
            name: "default_cta",
            plural: !1,
            selections: i,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "MessengerGenericXMATemplateCTA",
            kind: "LinkedField",
            name: "cta1",
            plural: !1,
            selections: i,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "MessengerGenericXMATemplateCTA",
            kind: "LinkedField",
            name: "cta2",
            plural: !1,
            selections: i,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "MessengerGenericXMATemplateCTA",
            kind: "LinkedField",
            name: "cta3",
            plural: !1,
            selections: i,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "list_item_id_1",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "list_item_contact_url_list_1",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "list_item_contact_url_expiration_timestamp_list_1",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "list_item_contact_url_fallback_list_1",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "list_item_title_text_1",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "list_item_accessibility_text_1",
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      var j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label",
          storageKey: null,
        },
        Ta = [
          { kind: "Literal", name: "height", value: 240 },
          { kind: "Literal", name: "width", value: 240 },
        ],
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        l = [k],
        Ua = [
          { kind: "Literal", name: "height", value: 120 },
          { kind: "Literal", name: "width", value: 120 },
        ],
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "height",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "width",
          storageKey: null,
        };
      Ta = [
        a,
        {
          alias: null,
          args: null,
          concreteType: "StickerPack",
          kind: "LinkedField",
          name: "pack",
          plural: !1,
          selections: d,
          storageKey: null,
        },
        j,
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "frame_count",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "frame_rate",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "frames_per_row",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "frames_per_column",
          storageKey: null,
        },
        {
          alias: "sprite_image_2x",
          args: Ta,
          concreteType: "Image",
          kind: "LinkedField",
          name: "sprite_image",
          plural: !1,
          selections: l,
          storageKey: "sprite_image(height:240,width:240)",
        },
        {
          alias: null,
          args: Ua,
          concreteType: "Image",
          kind: "LinkedField",
          name: "sprite_image",
          plural: !1,
          selections: l,
          storageKey: "sprite_image(height:120,width:120)",
        },
        {
          alias: null,
          args: Ua,
          concreteType: "Image",
          kind: "LinkedField",
          name: "padded_sprite_image",
          plural: !1,
          selections: l,
          storageKey: "padded_sprite_image(height:120,width:120)",
        },
        {
          alias: "padded_sprite_image_2x",
          args: Ta,
          concreteType: "Image",
          kind: "LinkedField",
          name: "padded_sprite_image",
          plural: !1,
          selections: l,
          storageKey: "padded_sprite_image(height:240,width:240)",
        },
        m,
        n,
        o,
      ];
      var Va = {
          kind: "InlineFragment",
          selections: Ta,
          type: "Sticker",
          abstractKey: null,
        },
        p = [k, n, o],
        Wa = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "animated_image",
          plural: !1,
          selections: p,
          storageKey: null,
        },
        Xa = { kind: "Literal", name: "sizing", value: "contain-fit" },
        Ya = [Xa],
        Za = {
          alias: null,
          args: Ya,
          concreteType: "Image",
          kind: "LinkedField",
          name: "image",
          plural: !1,
          selections: p,
          storageKey: 'image(sizing:"contain-fit")',
        },
        q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "playable_duration_in_ms",
          storageKey: null,
        },
        $a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_playable",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "playable_url",
          storageKey: null,
        },
        ab = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "media",
          plural: !1,
          selections: [Va, Wa, Za, q, $a, r],
          storageKey: null,
        },
        bb = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "source",
          plural: !1,
          selections: f,
          storageKey: null,
        },
        cb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "style_list",
          storageKey: null,
        },
        db = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "title_with_entities",
          plural: !1,
          selections: f,
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        eb = {
          alias: null,
          args: null,
          concreteType: "AttachmentProperty",
          kind: "LinkedField",
          name: "properties",
          plural: !0,
          selections: [
            s,
            {
              alias: null,
              args: null,
              concreteType: "TextWithEntities",
              kind: "LinkedField",
              name: "value",
              plural: !1,
              selections: f,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        fb = {
          alias: "url",
          args: null,
          kind: "ScalarField",
          name: "messenger_dot_com_url",
          storageKey: null,
        },
        gb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "deduplication_key",
          storageKey: null,
        },
        hb = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "action_links",
          plural: !0,
          selections: [h, m],
          storageKey: null,
        },
        ib = {
          alias: null,
          args: null,
          concreteType: "MessagingAttribution",
          kind: "LinkedField",
          name: "messaging_attribution",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "attribution_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "attribution_id",
              storageKey: null,
            },
            b,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "icon_url",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        jb = {
          alias: "action_link",
          args: null,
          kind: "ScalarField",
          name: "action_url",
          storageKey: null,
        },
        kb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "action_open_type",
          storageKey: null,
        },
        lb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "preview_title",
          storageKey: null,
        },
        mb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "preview_subtitle",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "target_display",
          storageKey: null,
        },
        nb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "image_url",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "action_objects",
          plural: !0,
          selections: [
            {
              kind: "InlineFragment",
              selections: [a, lb, mb, t, nb],
              type: "MessengerPlatformEntPreview",
              abstractKey: "__isMessengerPlatformEntPreview",
            },
          ],
          storageKey: null,
        },
        ob = {
          alias: "title",
          args: null,
          kind: "ScalarField",
          name: "action_title",
          storageKey: null,
        },
        pb = {
          alias: null,
          args: null,
          concreteType: "MessengerCTAUserConfirmation",
          kind: "LinkedField",
          name: "user_confirmation",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "cancel_button_label",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "continue_button_label",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "confirmation_message",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "confirmation_title",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        qb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_disabled",
          storageKey: null,
        },
        rb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_mutable_by_server",
          storageKey: null,
        },
        sb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "logging_token",
          storageKey: null,
        },
        tb = {
          alias: null,
          args: null,
          concreteType: "MessengerPlatformPaymentMetadata",
          kind: "LinkedField",
          name: "payment_metadata",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "payment_module_config",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "total_price",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        ub = {
          alias: "render_style",
          args: null,
          kind: "ScalarField",
          name: "cta_render_style",
          storageKey: null,
        },
        vb = {
          alias: null,
          args: null,
          concreteType: "MessengerPlatformWebviewMetadata",
          kind: "LinkedField",
          name: "webview_metadata",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "fallback_url",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "messenger_extensions",
              storageKey: null,
            },
            {
              alias: "webview_height_ratio",
              args: null,
              kind: "ScalarField",
              name: "height_ratio",
              storageKey: null,
            },
            {
              alias: "webview_share_button",
              args: null,
              kind: "ScalarField",
              name: "hide_share_button",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        v = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "page_id",
          storageKey: null,
        },
        w = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "placeholder",
          storageKey: null,
        },
        wb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subtitle",
          storageKey: null,
        },
        x = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "length",
          storageKey: null,
        },
        xb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "format",
          storageKey: null,
        },
        yb = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "form_url",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "form_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "form_num_screens",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "form_current_screen_index",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "MessengerPIIFormScreenObject",
              kind: "LinkedField",
              name: "form_first_screen",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "screen_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "MessengerPIIQuestionObject",
                  kind: "LinkedField",
                  name: "questions",
                  plural: !0,
                  selections: [
                    a,
                    g,
                    h,
                    w,
                    wb,
                    x,
                    xb,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "mask",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "MessengerPIIBusinessPrivacyObject",
                  kind: "LinkedField",
                  name: "business_privacy",
                  plural: !1,
                  selections: [e, m],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "form_color_theme",
              storageKey: null,
            },
          ],
          type: "MessengerDirectSendCallToActionData",
          abstractKey: null,
        };
      w = {
        kind: "InlineFragment",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "feedback_form_current_screen_index",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "MessengerFeedbackFormScreenObject",
            kind: "LinkedField",
            name: "feedback_form_first_screen",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "MessengerFeedbackQuestionObject",
                kind: "LinkedField",
                name: "feedback_questions",
                plural: !0,
                selections: [
                  a,
                  h,
                  g,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "score_label",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "left_score_label",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "right_score_label",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "score_option",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "MessengerFeedBackQuestionFollowup",
                    kind: "LinkedField",
                    name: "follow_up",
                    plural: !1,
                    selections: [g, w],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "feedback_form_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "feedback_form_num_screens",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "MessengerFeedbackBusinessPrivacyObject",
            kind: "LinkedField",
            name: "feedback_form_privacy_policy",
            plural: !1,
            selections: [e, j, m],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "feedback_form_state",
            storageKey: null,
          },
        ],
        type: "MessengerFeedbackFormOpenCallToActionData",
        abstractKey: null,
      };
      var y = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "cta_data",
          plural: !1,
          selections: [yb, w],
          storageKey: null,
        },
        zb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_high_confidence",
          storageKey: null,
        },
        Ab = {
          alias: null,
          args: null,
          concreteType: "MessengerCallToAction",
          kind: "LinkedField",
          name: "messenger_call_to_actions",
          plural: !0,
          selections: [
            jb,
            kb,
            u,
            ob,
            pb,
            a,
            qb,
            rb,
            sb,
            tb,
            ub,
            vb,
            v,
            y,
            zb,
            Sa,
          ],
          storageKey: null,
        },
        Bb = {
          alias: null,
          args: null,
          concreteType: "XMALayoutInfo",
          kind: "LinkedField",
          name: "xma_layout_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "layout_type",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        z = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        Cb = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "listing_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "CrisisListingCategoryWrapper",
              kind: "LinkedField",
              name: "listing_category",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Image",
                  kind: "LinkedField",
                  name: "offer_image",
                  plural: !1,
                  selections: l,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "Image",
                  kind: "LinkedField",
                  name: "request_image",
                  plural: !1,
                  selections: l,
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: [
                { kind: "Literal", name: "height", value: 315 },
                { kind: "Literal", name: "width", value: 851 },
              ],
              concreteType: "Image",
              kind: "LinkedField",
              name: "map_image",
              plural: !1,
              selections: l,
              storageKey: "map_image(height:315,width:851)",
            },
          ],
          type: "CrisisListing",
          abstractKey: null,
        },
        Db = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "filename",
          storageKey: null,
        },
        Eb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url_shimhash",
          storageKey: null,
        },
        Fb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "extension",
          storageKey: null,
        },
        Gb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "filesize",
          storageKey: null,
        },
        Hb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "duration",
          storageKey: null,
        },
        A = {
          alias: "transfer_id",
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        B = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: l,
          storageKey: null,
        },
        C = [
          a,
          {
            alias: "name",
            args: null,
            kind: "ScalarField",
            name: "short_name",
            storageKey: null,
          },
          {
            alias: "full_name",
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null,
          },
          B,
          m,
        ],
        D = {
          alias: null,
          args: null,
          concreteType: "User",
          kind: "LinkedField",
          name: "sender",
          plural: !1,
          selections: C,
          storageKey: null,
        };
      C = {
        alias: null,
        args: null,
        concreteType: "User",
        kind: "LinkedField",
        name: "receiver",
        plural: !1,
        selections: C,
        storageKey: null,
      };
      var E = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "value",
        storageKey: null,
      };
      s = {
        alias: "actionDatas",
        args: null,
        concreteType: "PaymentActivityActionData",
        kind: "LinkedField",
        name: "action_datas",
        plural: !0,
        selections: [
          z,
          {
            alias: "additionalInfo",
            args: null,
            concreteType: "PaymentActivityActionDataAdditionalInfo",
            kind: "LinkedField",
            name: "additional_info",
            plural: !0,
            selections: [s, E],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "category",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "identifier",
            storageKey: null,
          },
          {
            alias: "inputType",
            args: null,
            kind: "ScalarField",
            name: "input_type",
            storageKey: null,
          },
          x,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "optional",
            storageKey: null,
          },
          {
            alias: "placeholderText",
            args: null,
            kind: "ScalarField",
            name: "placeholder_text",
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      var Ib = {
          alias: "actionIdentifier",
          args: null,
          kind: "ScalarField",
          name: "action_identifier",
          storageKey: null,
        },
        Jb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "style",
          storageKey: null,
        },
        Kb = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "title",
          plural: !1,
          selections: f,
          storageKey: null,
        },
        Lb = {
          kind: "InlineFragment",
          selections: [
            {
              alias: "receiptView",
              args: null,
              concreteType: "PaymentReceiptView",
              kind: "LinkedField",
              name: "receipt_view",
              plural: !1,
              selections: [
                {
                  alias: "additionalInstruction",
                  args: null,
                  concreteType: "TextWithEntities",
                  kind: "LinkedField",
                  name: "additional_instruction",
                  plural: !1,
                  selections: f,
                  storageKey: null,
                },
                a,
                {
                  alias: "otherParticipant",
                  args: null,
                  concreteType: "PaymentActivityParticipantView",
                  kind: "LinkedField",
                  name: "other_participant",
                  plural: !1,
                  selections: [
                    {
                      alias: "imageUrl",
                      args: null,
                      kind: "ScalarField",
                      name: "image_url",
                      storageKey: null,
                    },
                    wb,
                    h,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "PaymentActivityViewSection",
                  kind: "LinkedField",
                  name: "sections",
                  plural: !0,
                  selections: [
                    {
                      alias: "preferredPosition",
                      args: null,
                      kind: "ScalarField",
                      name: "preferred_position",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                Kb,
              ],
              storageKey: null,
            },
          ],
          type: "P2POpenReceiptActionButton",
          abstractKey: null,
        },
        F = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "amount",
          storageKey: null,
        },
        Mb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "currency",
          storageKey: null,
        },
        G = [
          F,
          Mb,
          {
            alias: "formattedAmount",
            args: null,
            kind: "ScalarField",
            name: "formatted_amount",
            storageKey: null,
          },
        ],
        Nb = {
          alias: "amount",
          args: null,
          concreteType: "CurrencyAmount",
          kind: "LinkedField",
          name: "currency_amount",
          plural: !1,
          selections: G,
          storageKey: null,
        },
        H = [
          z,
          s,
          Ib,
          Jb,
          h,
          Lb,
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: "moneyTransfer",
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "generic_money_transfer",
                plural: !1,
                selections: [A, D, C, Nb],
                storageKey: null,
              },
            ],
            type: "P2PPaymentActionButtonWithTransfer",
            abstractKey: null,
          },
        ],
        Ob = {
          alias: "componentType",
          args: null,
          kind: "ScalarField",
          name: "component_type",
          storageKey: null,
        },
        Pb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "color",
          storageKey: null,
        };
      G = {
        kind: "InlineFragment",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "CurrencyAmount",
            kind: "LinkedField",
            name: "amount",
            plural: !1,
            selections: G,
            storageKey: null,
          },
          Pb,
        ],
        type: "P2PBubbleAmountComponent",
        abstractKey: null,
      };
      var Qb = [
          {
            alias: "dimensionlessCacheKey",
            args: null,
            kind: "ScalarField",
            name: "dimensionless_cache_key",
            storageKey: null,
          },
          n,
          {
            alias: "isSilhouette",
            args: null,
            kind: "ScalarField",
            name: "is_silhouette",
            storageKey: null,
          },
          {
            alias: "mimeType",
            args: null,
            kind: "ScalarField",
            name: "mime_type",
            storageKey: null,
          },
          b,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "scale",
            storageKey: null,
          },
          k,
          o,
        ],
        Rb = {
          kind: "InlineFragment",
          selections: [
            {
              alias: "aspectRatio",
              args: null,
              kind: "ScalarField",
              name: "aspect_ratio",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "Image",
              kind: "LinkedField",
              name: "image",
              plural: !1,
              selections: Qb,
              storageKey: null,
            },
          ],
          type: "P2PBubbleImageComponent",
          abstractKey: null,
        };
      Qb = {
        kind: "InlineFragment",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "alignment",
            storageKey: null,
          },
          Pb,
          {
            alias: "facepileUsers",
            args: null,
            concreteType: "User",
            kind: "LinkedField",
            name: "facepile_users",
            plural: !0,
            selections: [
              a,
              {
                alias: null,
                args: null,
                concreteType: "Image",
                kind: "LinkedField",
                name: "profile_picture",
                plural: !1,
                selections: Qb,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Image",
            kind: "LinkedField",
            name: "images",
            plural: !0,
            selections: Qb,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "size",
            storageKey: null,
          },
          e,
        ],
        type: "P2PBubbleTextComponent",
        abstractKey: null,
      };
      var Sb = {
        alias: "iconCurrencyCode",
        args: null,
        kind: "ScalarField",
        name: "icon_currency_code",
        storageKey: null,
      };
      H = {
        kind: "InlineFragment",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "P2PBubbleView",
            kind: "LinkedField",
            name: "bubble_view",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "actions",
                plural: !0,
                selections: H,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "components",
                plural: !0,
                selections: [Ob, G, Rb, Qb],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "P2PBubbleRobotext",
                kind: "LinkedField",
                name: "robotext",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "action",
                    plural: !1,
                    selections: H,
                    storageKey: null,
                  },
                  Pb,
                  Sb,
                  e,
                ],
                storageKey: null,
              },
              {
                alias: "rootAction",
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "root_action",
                plural: !1,
                selections: H,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "PaymentViewData",
        abstractKey: "__isPaymentViewData",
      };
      var Tb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "short_name",
          storageKey: null,
        },
        Ub = {
          kind: "InlineFragment",
          selections: [Tb, m],
          type: "User",
          abstractKey: null,
        },
        Vb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "formatted_amount",
          storageKey: null,
        },
        Wb = {
          alias: null,
          args: null,
          concreteType: "CurrencyAmount",
          kind: "LinkedField",
          name: "transaction_amount",
          plural: !1,
          selections: [F, Vb],
          storageKey: null,
        },
        Xb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "transfer_status",
          storageKey: null,
        },
        Yb = {
          alias: "completedTime",
          args: null,
          kind: "ScalarField",
          name: "completed_time",
          storageKey: null,
        },
        Zb = {
          alias: "updatedTime",
          args: null,
          kind: "ScalarField",
          name: "updated_time",
          storageKey: null,
        },
        $b = {
          alias: "creationTime",
          args: null,
          kind: "ScalarField",
          name: "creation_time",
          storageKey: null,
        },
        ac = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "image",
          plural: !1,
          selections: l,
          storageKey: null,
        },
        bc = [ac],
        cc = {
          alias: null,
          args: null,
          concreteType: "MessengerPayTheme",
          kind: "LinkedField",
          name: "transfer_theme",
          plural: !1,
          selections: d,
          storageKey: null,
        },
        dc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "formatted",
          storageKey: null,
        },
        ec = [dc],
        fc = {
          alias: null,
          args: null,
          concreteType: "CurrencyQuantity",
          kind: "LinkedField",
          name: "amount_fb_discount",
          plural: !1,
          selections: ec,
          storageKey: null,
        },
        gc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "funds_availability",
          storageKey: null,
        },
        hc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "group_thread_fbid",
          storageKey: null,
        },
        I = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "description",
          storageKey: null,
        },
        J = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "status_description",
          storageKey: null,
        },
        ic = {
          alias: null,
          args: null,
          concreteType: "CurrencyAmount",
          kind: "LinkedField",
          name: "currency_amount",
          plural: !1,
          selections: [Mb],
          storageKey: null,
        },
        jc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "memo_text",
          storageKey: null,
        },
        K = [
          {
            alias: null,
            args: null,
            concreteType: "User",
            kind: "LinkedField",
            name: "sender",
            plural: !1,
            selections: [
              { args: null, kind: "FragmentSpread", name: "P2PSenderReceiver" },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "receiver_profile",
            plural: !1,
            selections: [a, b, B, Ub],
            storageKey: null,
          },
          Wb,
          Xb,
          A,
          Yb,
          Zb,
          $b,
          {
            alias: null,
            args: null,
            concreteType: "PeerToPeerTransferContext",
            kind: "LinkedField",
            name: "transfer_context",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "MessageImage",
                kind: "LinkedField",
                name: "memo_images",
                plural: !0,
                selections: bc,
                storageKey: null,
              },
              cc,
            ],
            storageKey: null,
          },
          fc,
          gc,
          hc,
          {
            alias: null,
            args: null,
            concreteType: "PeerToPeerPlatformSoldItemDetail",
            kind: "LinkedField",
            name: "platform_item",
            plural: !1,
            selections: [
              b,
              I,
              {
                alias: null,
                args: null,
                concreteType: "Photo",
                kind: "LinkedField",
                name: "photos",
                plural: !0,
                selections: bc,
                storageKey: null,
              },
              m,
            ],
            storageKey: null,
          },
          a,
          J,
          ic,
          jc,
          H,
        ];
      dc = {
        alias: null,
        args: null,
        concreteType: "CurrencyQuantity",
        kind: "LinkedField",
        name: "amount",
        plural: !1,
        selections: [dc, Mb],
        storageKey: null,
      };
      var kc = {
          alias: null,
          args: null,
          concreteType: "CurrencyAmount",
          kind: "LinkedField",
          name: "transaction_amount",
          plural: !1,
          selections: [F],
          storageKey: null,
        },
        L = [b, a, B, Ub],
        M = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "requester",
          plural: !1,
          selections: L,
          storageKey: null,
        };
      L = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "requestee",
        plural: !1,
        selections: L,
        storageKey: null,
      };
      var lc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "request_status",
          storageKey: null,
        },
        mc = {
          alias: null,
          args: null,
          concreteType: "MessengerPayTheme",
          kind: "LinkedField",
          name: "request_theme",
          plural: !1,
          selections: d,
          storageKey: null,
        },
        N = {
          alias: null,
          args: null,
          concreteType: "PeerToPeerTransfer",
          kind: "LinkedField",
          name: "transfer",
          plural: !1,
          selections: K,
          storageKey: null,
        },
        nc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creation_time",
          storageKey: null,
        },
        O = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "updated_time",
          storageKey: null,
        },
        oc = {
          alias: "message",
          args: null,
          kind: "ScalarField",
          name: "snippet",
          storageKey: null,
        };
      u = [jb, kb, u, ob, pb, a, qb, rb, sb, tb, ub, vb, v, y];
      y = {
        alias: null,
        args: null,
        concreteType: "MessengerCallToAction",
        kind: "LinkedField",
        name: "call_to_actions",
        plural: !0,
        selections: u,
        storageKey: null,
      };
      var pc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "image_aspect_ratio",
          storageKey: null,
        },
        qc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "first_metaline",
          storageKey: null,
        },
        rc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "source_name",
          storageKey: null,
        },
        sc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "target_url",
          storageKey: null,
        };
      u = {
        alias: null,
        args: null,
        concreteType: "MessengerCallToAction",
        kind: "LinkedField",
        name: "default_action",
        plural: !1,
        selections: u,
        storageKey: null,
      };
      var tc = [
          a,
          {
            alias: "large_preview",
            args: null,
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: p,
            storageKey: null,
          },
        ],
        uc = {
          kind: "InlineFragment",
          selections: tc,
          type: "MessageImage",
          abstractKey: null,
        };
      tc = {
        kind: "InlineFragment",
        selections: tc,
        type: "Photo",
        abstractKey: null,
      };
      var vc = { kind: "Literal", name: "media_type", value: "image/gif" },
        wc = {
          alias: null,
          args: [vc],
          concreteType: "Image",
          kind: "LinkedField",
          name: "animated_image",
          plural: !1,
          selections: p,
          storageKey: 'animated_image(media_type:"image/gif")',
        };
      vc = {
        alias: "preview_image",
        args: [
          { kind: "Literal", name: "height", value: 206 },
          vc,
          { kind: "Literal", name: "width", value: 206 },
        ],
        concreteType: "Image",
        kind: "LinkedField",
        name: "animated_image",
        plural: !1,
        selections: p,
        storageKey:
          'animated_image(height:206,media_type:"image/gif",width:206)',
      };
      var xc = {
          kind: "InlineFragment",
          selections: [
            wc,
            vc,
            {
              alias: "large_preview",
              args: [
                { kind: "Literal", name: "height", value: 420 },
                Xa,
                { kind: "Literal", name: "width", value: 420 },
              ],
              concreteType: "Image",
              kind: "LinkedField",
              name: "image",
              plural: !1,
              selections: p,
              storageKey: 'image(height:420,sizing:"contain-fit",width:420)',
            },
          ],
          type: "MessageAnimatedImage",
          abstractKey: null,
        },
        yc = {
          alias: null,
          args: null,
          concreteType: "Application",
          kind: "LinkedField",
          name: "attribution_app",
          plural: !1,
          selections: [
            a,
            b,
            {
              alias: null,
              args: null,
              concreteType: "Image",
              kind: "LinkedField",
              name: "square_logo",
              plural: !1,
              selections: l,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        zc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "attribution_metadata",
          storageKey: null,
        },
        Ac = [n, o, k],
        Bc = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "x",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "y",
            storageKey: null,
          },
        ],
        Cc = {
          alias: null,
          args: null,
          concreteType: "Vect2",
          kind: "LinkedField",
          name: "original_dimensions",
          plural: !1,
          selections: Bc,
          storageKey: null,
        };
      Ac = {
        kind: "InlineFragment",
        selections: [
          yc,
          zc,
          Db,
          r,
          {
            alias: "chat_image",
            args: [
              { kind: "Literal", name: "height", value: 200 },
              Xa,
              { kind: "Literal", name: "width", value: 168 },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: Ac,
            storageKey: 'image(height:200,sizing:"contain-fit",width:168)',
          },
          Pa,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "video_type",
            storageKey: null,
          },
          Cc,
          q,
          {
            alias: "large_image",
            args: [
              { kind: "Literal", name: "height", value: 640 },
              Xa,
              { kind: "Literal", name: "width", value: 640 },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: Ac,
            storageKey: 'image(height:640,sizing:"contain-fit",width:640)',
          },
          {
            alias: "inbox_image",
            args: [
              { kind: "Literal", name: "height", value: 450 },
              Xa,
              { kind: "Literal", name: "width", value: 450 },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: Ac,
            storageKey: 'image(height:450,sizing:"contain-fit",width:450)',
          },
        ],
        type: "MessageVideo",
        abstractKey: null,
      };
      var Dc = {
          kind: "InlineFragment",
          selections: [o, n, a, r],
          type: "Video",
          abstractKey: null,
        },
        P = [
          {
            alias: null,
            args: null,
            concreteType: "MessengerRetailItem",
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: [
              a,
              I,
              pc,
              nb,
              qc,
              b,
              rc,
              sc,
              u,
              y,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "media_blob_attachments",
                plural: !0,
                selections: [z, uc, tc, xc, Ac, Dc],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        Ec = {
          kind: "InlineFragment",
          selections: [
            {
              alias: "video_id",
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
            },
          ],
          type: "Video",
          abstractKey: null,
        },
        Fc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "values",
          storageKey: null,
        },
        Gc = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "ComponentFlowLeadGenField",
              kind: "LinkedField",
              name: "field_data_list",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "field_type",
                  storageKey: null,
                },
                j,
                Fc,
              ],
              storageKey: null,
            },
          ],
          type: "PagesPlatformLeadGenInfo",
          abstractKey: null,
        },
        Hc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "expiration_time",
          storageKey: null,
        },
        Q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "latitude",
          storageKey: null,
        },
        Ic = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "longitude",
          storageKey: null,
        },
        Jc = [Q, Ic],
        Kc = {
          kind: "InlineFragment",
          selections: [
            {
              alias: "live_location_id",
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_expired",
              storageKey: null,
            },
            Hc,
            {
              alias: null,
              args: null,
              concreteType: "User",
              kind: "LinkedField",
              name: "sender",
              plural: !1,
              selections: d,
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "Coordinate",
              kind: "LinkedField",
              name: "coordinate",
              plural: !1,
              selections: Jc,
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "location_title",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "LiveLocationDestination",
              kind: "LinkedField",
              name: "sender_destination",
              plural: !1,
              selections: [Q, Ic, j],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "stop_reason",
              storageKey: null,
            },
          ],
          type: "MessageLiveLocation",
          abstractKey: null,
        },
        Lc = {
          alias: null,
          args: null,
          concreteType: "MontageDirectOpenInfo",
          kind: "LinkedField",
          name: "opens",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "open_time",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "MessagingParticipant",
              kind: "LinkedField",
              name: "open_by",
              plural: !1,
              selections: d,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Mc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "message_state",
          storageKey: null,
        },
        Nc = {
          alias: null,
          args: null,
          concreteType: "MessagingParticipant",
          kind: "LinkedField",
          name: "kept_by",
          plural: !1,
          selections: d,
          storageKey: null,
        },
        Oc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "kept_at",
          storageKey: null,
        },
        Pc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_keep_disabled",
          storageKey: null,
        },
        Qc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "blob_media_type",
          storageKey: null,
        },
        Rc = [r, m, ac],
        Sc = {
          kind: "InlineFragment",
          selections: Rc,
          type: "MessageVideo",
          abstractKey: null,
        };
      Rc = {
        kind: "InlineFragment",
        selections: Rc,
        type: "MessageImage",
        abstractKey: null,
      };
      var Tc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "montage_container_id",
          storageKey: null,
        },
        Uc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "story_id",
          storageKey: null,
        },
        Vc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "calendar_sync_type",
          storageKey: null,
        },
        Wc = {
          alias: null,
          args: null,
          concreteType: "Page",
          kind: "LinkedField",
          name: "page",
          plural: !1,
          selections: [
            a,
            Vc,
            {
              alias: null,
              args: null,
              concreteType: "ServicesVerticalPageBasedInfo",
              kind: "LinkedField",
              name: "services_vertical_info",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_eligible_for_appointment_calendar",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_eligible_for_mbs_calendar",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "time_zone_name",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Xc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "message_bubble_type",
          storageKey: null,
        },
        Yc = {
          alias: null,
          args: null,
          concreteType: "User",
          kind: "LinkedField",
          name: "user",
          plural: !1,
          selections: d,
          storageKey: null,
        },
        Zc = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "ls_xma_title",
          storageKey: null,
        },
        $c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "ls_xma_subtitle",
          storageKey: null,
        },
        ad = {
          alias: "availability",
          args: null,
          kind: "ScalarField",
          name: "user_availability",
          storageKey: null,
        },
        bd = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "request_flow_type",
          storageKey: null,
        },
        cd = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "service_general_info",
          storageKey: null,
        },
        dd = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_saved_to_calendar",
          storageKey: null,
        },
        ed = [a, b, B],
        fd = {
          alias: null,
          args: null,
          concreteType: "Page",
          kind: "LinkedField",
          name: "page",
          plural: !1,
          selections: ed,
          storageKey: null,
        },
        gd = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "start",
          storageKey: null,
        },
        hd = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "end",
          storageKey: null,
        },
        id = [gd, hd],
        jd = {
          alias: null,
          args: null,
          concreteType: "TimeRange",
          kind: "LinkedField",
          name: "suggested_time_range",
          plural: !1,
          selections: id,
          storageKey: null,
        },
        kd = {
          alias: "duration",
          args: null,
          kind: "ScalarField",
          name: "duration_in_seconds",
          storageKey: null,
        },
        ld = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "duration_type",
          storageKey: null,
        },
        md = [{ kind: "Literal", name: "first", value: 1 }],
        nd = {
          alias: null,
          args: [
            { kind: "Literal", name: "sizing", value: "cover-fill-cropped" },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "image",
          plural: !1,
          selections: l,
          storageKey: 'image(sizing:"cover-fill-cropped")',
        },
        od = {
          alias: "price",
          args: null,
          kind: "ScalarField",
          name: "display_price",
          storageKey: null,
        },
        pd = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "requested_time",
          storageKey: null,
        },
        qd = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "special_request",
          storageKey: null,
        },
        rd = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "booking_status_value",
          storageKey: null,
        },
        sd = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "status",
          storageKey: null,
        },
        td = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "archived_status",
          storageKey: null,
        },
        ud = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reminder_bubble_text",
          storageKey: null,
        },
        vd = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "request_admin_approval_type",
          storageKey: null,
        },
        wd = {
          alias: null,
          args: null,
          concreteType: "JobApplication",
          kind: "LinkedField",
          name: "job_application",
          plural: !1,
          selections: d,
          storageKey: null,
        },
        xd = {
          alias: null,
          args: null,
          concreteType: "User",
          kind: "LinkedField",
          name: "user",
          plural: !1,
          selections: [a, Tb, B],
          storageKey: null,
        },
        yd = {
          alias: null,
          args: null,
          concreteType: "ServicesNativeBookingRequestAdditionalInfoField",
          kind: "LinkedField",
          name: "additional_info",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "field_key",
              storageKey: null,
            },
            E,
            j,
          ],
          storageKey: null,
        },
        zd = {
          alias: null,
          args: null,
          concreteType: "PhoneNumber",
          kind: "LinkedField",
          name: "consumer_phone_number",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "display_number",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Ad = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "recur_message",
          storageKey: null,
        },
        Bd = {
          alias: null,
          args: null,
          concreteType: "Page",
          kind: "LinkedField",
          name: "page",
          plural: !1,
          selections: d,
          storageKey: null,
        },
        Cd = {
          alias: null,
          args: null,
          concreteType: "User",
          kind: "LinkedField",
          name: "consumer",
          plural: !1,
          selections: d,
          storageKey: null,
        },
        Dd = {
          alias: null,
          args: null,
          concreteType: "TimeRange",
          kind: "LinkedField",
          name: "formatted_available_time_ranges",
          plural: !0,
          selections: id,
          storageKey: null,
        },
        Ed = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_booking_request_created",
          storageKey: null,
        },
        Fd = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cta_click_events",
          storageKey: null,
        },
        Gd = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cta_texts",
          storageKey: null,
        },
        Hd = {
          alias: null,
          args: null,
          concreteType: "ServicesWWWURL",
          kind: "LinkedField",
          name: "www_url",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_async",
              storageKey: null,
            },
            k,
          ],
          storageKey: null,
        },
        Id = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "render_template",
          storageKey: null,
        },
        Jd = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "primary_text",
          storageKey: null,
        },
        Kd = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "visible_on_platforms",
          storageKey: null,
        },
        Ld = [a, b],
        Md = [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "messaging_actor",
            plural: !1,
            selections: Ld,
            storageKey: null,
          },
        ],
        Nd = {
          alias: "eventID",
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        Od = {
          alias: "guestStatus",
          args: null,
          kind: "ScalarField",
          name: "viewer_guest_status",
          storageKey: null,
        },
        Pd = {
          alias: "canViewerJoin",
          args: null,
          kind: "ScalarField",
          name: "can_viewer_join",
          storageKey: null,
        },
        Qd = {
          alias: "timeString",
          args: null,
          kind: "ScalarField",
          name: "start_time_sentence",
          storageKey: null,
        },
        R = [b],
        Rd = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "social_context",
          plural: !1,
          selections: f,
          storageKey: null,
        },
        Sd = {
          alias: "watchStatus",
          args: null,
          kind: "ScalarField",
          name: "viewer_watch_status",
          storageKey: null,
        },
        Td = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "connection_style",
          storageKey: null,
        },
        Ud = {
          alias: "canViewerWatch",
          args: null,
          kind: "ScalarField",
          name: "can_viewer_watch",
          storageKey: null,
        },
        Vd = {
          alias: null,
          args: [{ kind: "Literal", name: "width", value: 300 }],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: l,
          storageKey: "profile_picture(width:300)",
        },
        Wd = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "start_timestamp",
          storageKey: null,
        },
        Xd = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "application_name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "artist_names",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "audio_url",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "duration_ms",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "music_title",
              storageKey: null,
            },
          ],
          type: "ExternalSong",
          abstractKey: null,
        },
        Yd = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "lwa_state",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "lwa_type",
              storageKey: null,
            },
          ],
          type: "LightweightAction",
          abstractKey: null,
        },
        Zd = {
          alias: "desc",
          args: null,
          kind: "ScalarField",
          name: "description",
          storageKey: null,
        },
        $d = {
          alias: "thumb_url",
          args: null,
          kind: "ScalarField",
          name: "image_url",
          storageKey: null,
        },
        ae = {
          alias: "item_url",
          args: null,
          kind: "ScalarField",
          name: "target_url",
          storageKey: null,
        },
        be = {
          alias: "source",
          args: null,
          kind: "ScalarField",
          name: "source_name",
          storageKey: null,
        },
        ce = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "second_metaline",
          storageKey: null,
        },
        de = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "third_metaline",
          storageKey: null,
        },
        ee = {
          alias: "total_cost",
          args: null,
          kind: "ScalarField",
          name: "formated_price",
          storageKey: null,
        },
        fe = {
          alias: "merchant_name",
          args: null,
          kind: "ScalarField",
          name: "seller_info",
          storageKey: null,
        },
        ge = {
          alias: "raw_amount",
          args: null,
          kind: "ScalarField",
          name: "price_amount",
          storageKey: null,
        },
        he = {
          alias: null,
          args: null,
          concreteType: "MessengerCommercePayment",
          kind: "LinkedField",
          name: "payment",
          plural: !1,
          selections: d,
          storageKey: null,
        },
        ie = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "price_currency",
          storageKey: null,
        },
        je = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "price_amount",
          storageKey: null,
        },
        ke = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_donate",
          storageKey: null,
        },
        le = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_viewer_donated",
          storageKey: null,
        },
        me = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "fundraiser_detailed_progress_text",
          plural: !1,
          selections: f,
          storageKey: null,
        },
        ne = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "fundraiser_subtitle_text",
          plural: !1,
          selections: f,
          storageKey: null,
        },
        S = [k, o, n],
        oe = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "image",
          plural: !1,
          selections: S,
          storageKey: null,
        },
        pe = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "recipient_name",
          storageKey: null,
        },
        qe = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "merchant_name",
          storageKey: null,
        },
        re = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "account_holder_name",
          storageKey: null,
        },
        se = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "receipt_id",
          storageKey: null,
        },
        te = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "shipping_method",
          storageKey: null,
        },
        ue = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "order_payment_method",
          storageKey: null,
        },
        ve = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "receipt_url",
          storageKey: null,
        },
        we = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cancellation_url",
          storageKey: null,
        },
        xe = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "receipient_address",
          storageKey: null,
        },
        ye = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "streets",
          storageKey: null,
        },
        ze = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "city",
          storageKey: null,
        },
        T = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "country",
          storageKey: null,
        },
        Ae = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "postal_code",
          storageKey: null,
        },
        Be = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "state",
          storageKey: null,
        },
        Ce = {
          alias: null,
          args: null,
          concreteType: "MessengerCommerceBusinessLocation",
          kind: "LinkedField",
          name: "structured_address",
          plural: !1,
          selections: [ye, ze, T, Ae, Be],
          storageKey: null,
        },
        De = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "total",
          storageKey: null,
        },
        Ee = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tax",
          storageKey: null,
        },
        Fe = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "shipping_cost",
          storageKey: null,
        },
        Ge = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subtotal",
          storageKey: null,
        },
        He = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "bubble_type",
          storageKey: null,
        },
        Ie = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "order_time_for_display",
          storageKey: null,
        },
        Je = {
          alias: null,
          args: null,
          concreteType: "RetailReceiptAdjustment",
          kind: "LinkedField",
          name: "retail_adjustments",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "adjustment_amount",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "adjustment_type",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Ke = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "partner_logo",
          plural: !1,
          selections: l,
          storageKey: null,
        },
        Le = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "payment_modules_client",
          storageKey: null,
        },
        Me = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_viewer_seller",
          storageKey: null,
        },
        Ne = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "payment_snippet",
          plural: !1,
          selections: f,
          storageKey: null,
        },
        Oe = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "item_id",
          storageKey: null,
        },
        Pe = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "subtitle",
          plural: !1,
          selections: f,
          storageKey: null,
        };
      F = [F, Mb];
      Mb = {
        alias: null,
        args: null,
        concreteType: "CurrencyAmount",
        kind: "LinkedField",
        name: "unit_price",
        plural: !1,
        selections: F,
        storageKey: null,
      };
      var Qe = {
          alias: null,
          args: Ua,
          concreteType: "Image",
          kind: "LinkedField",
          name: "images",
          plural: !0,
          selections: l,
          storageKey: "images(height:120,width:120)",
        },
        Re = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "quantity",
          storageKey: null,
        };
      Ua = {
        alias: null,
        args: null,
        concreteType: "PaymentPlatformAttachmentComponent",
        kind: "LinkedField",
        name: "components",
        plural: !0,
        selections: [
          Kb,
          Pe,
          {
            alias: null,
            args: Ua,
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: l,
            storageKey: "image(height:120,width:120)",
          },
        ],
        storageKey: null,
      };
      var Se = [
          Be,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "action_type",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "action_detail",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "label",
            plural: !1,
            selections: f,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "checkmark",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "extra_data",
            storageKey: null,
          },
        ],
        Te = {
          alias: null,
          args: null,
          concreteType: "PaymentPlatformAttachmentCallToAction",
          kind: "LinkedField",
          name: "payment_call_to_actions",
          plural: !0,
          selections: Se,
          storageKey: null,
        },
        Ue = {
          alias: null,
          args: null,
          concreteType: "PaymentPlatformAttachmentCallToAction",
          kind: "LinkedField",
          name: "click_action",
          plural: !1,
          selections: Se,
          storageKey: null,
        };
      Se = {
        alias: null,
        args: null,
        concreteType: "PaymentPlatformAttachmentCallToAction",
        kind: "LinkedField",
        name: "summary_action",
        plural: !1,
        selections: Se,
        storageKey: null,
      };
      var Ve = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "invoicer_id",
          storageKey: null,
        },
        We = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_last_attachment",
          storageKey: null,
        };
      F = {
        alias: null,
        args: null,
        concreteType: "CurrencyAmount",
        kind: "LinkedField",
        name: "payment_total",
        plural: !1,
        selections: F,
        storageKey: null,
      };
      var Xe = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "product_detail",
          storageKey: null,
        },
        Ye = {
          alias: null,
          args: null,
          concreteType: "PaymentPlatformAttachmentIcon",
          kind: "LinkedField",
          name: "payment_status_icon",
          plural: !1,
          selections: [sd],
          storageKey: null,
        },
        Ze = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "user_facing_payment_status",
          storageKey: null,
        },
        $e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "payment_sub_statuses",
          storageKey: null,
        },
        af = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_show_new_xma",
          storageKey: null,
        },
        bf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "buyer_name",
          storageKey: null,
        },
        cf = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "group_commerce_item_description",
          plural: !1,
          selections: f,
          storageKey: null,
        },
        df = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "formatted_price",
          plural: !1,
          selections: f,
          storageKey: null,
        },
        ef = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "group_commerce_item_title",
          storageKey: null,
        };
      Ya = {
        alias: null,
        args: Ya,
        concreteType: "Image",
        kind: "LinkedField",
        name: "image",
        plural: !1,
        selections: l,
        storageKey: 'image(sizing:"contain-fit")',
      };
      var ff = {
          alias: "primary_photo",
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "primary_listing_photo",
          plural: !1,
          selections: [Ya],
          storageKey: null,
        },
        gf = {
          alias: null,
          args: null,
          concreteType: "StreetAddress",
          kind: "LinkedField",
          name: "address",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "single_line_full_address",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        hf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "top_category_name",
          storageKey: null,
        };
      Xa = {
        alias: null,
        args: null,
        concreteType: "FocusedPhoto",
        kind: "LinkedField",
        name: "cover_photo",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Photo",
            kind: "LinkedField",
            name: "photo",
            plural: !1,
            selections: [
              a,
              {
                alias: null,
                args: [
                  { kind: "Literal", name: "height", value: 720 },
                  Xa,
                  { kind: "Literal", name: "width", value: 720 },
                ],
                concreteType: "Image",
                kind: "LinkedField",
                name: "image",
                plural: !1,
                selections: S,
                storageKey: 'image(height:720,sizing:"contain-fit",width:720)',
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      var jf = {
          alias: null,
          args: null,
          concreteType: "Location",
          kind: "LinkedField",
          name: "location",
          plural: !1,
          selections: Jc,
          storageKey: null,
        },
        kf = {
          alias: null,
          args: null,
          concreteType: "Rating",
          kind: "LinkedField",
          name: "overall_star_rating",
          plural: !1,
          selections: [E],
          storageKey: null,
        },
        lf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "price_range_description",
          storageKey: null,
        },
        mf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_active",
          storageKey: null,
        },
        nf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "event_title",
          storageKey: null,
        },
        of = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "time",
          storageKey: null,
        },
        pf = [mf, nf, of],
        qf = {
          kind: "InlineFragment",
          selections: pf,
          type: "MessengerEventReminder",
          abstractKey: null,
        },
        rf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_more_upcoming_reminders",
          storageKey: null,
        },
        sf = [
          {
            kind: "Literal",
            name: "orderby",
            value: "m_personal_reminder_list_ordering",
          },
        ],
        tf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tint_color",
          storageKey: null,
        },
        uf = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "logo",
          plural: !1,
          selections: S,
          storageKey: null,
        },
        vf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "flight_label",
          storageKey: null,
        },
        wf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "boarding_time_label",
          storageKey: null,
        },
        xf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "departure_label",
          storageKey: null,
        },
        yf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "passenger_names_label",
          storageKey: null,
        },
        zf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "passenger_seat_label",
          storageKey: null,
        },
        Af = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "flight_terminal_label",
          storageKey: null,
        },
        Bf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "flight_gate_label",
          storageKey: null,
        },
        Cf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "view_boarding_pass_cta_label",
          storageKey: null,
        },
        Df = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "share_cta_label",
          storageKey: null,
        },
        Ef = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "message_cta_label",
          storageKey: null,
        },
        Ff = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "boarding_pass_title_label",
          storageKey: null,
        },
        Gf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "boarding_pass_error_title_label",
          storageKey: null,
        },
        Hf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "airline_logo_image_url",
          storageKey: null,
        },
        If = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "header_image_url",
          storageKey: null,
        };
      E = [h, E];
      var Jf = {
          alias: null,
          args: null,
          concreteType: "AirlineProductItem",
          kind: "LinkedField",
          name: "auxiliary_fields",
          plural: !0,
          selections: E,
          storageKey: null,
        },
        Kf = {
          alias: null,
          args: null,
          concreteType: "AirlineProductItem",
          kind: "LinkedField",
          name: "secondary_fields",
          plural: !0,
          selections: E,
          storageKey: null,
        },
        Lf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "qr_code_header_image_url",
          storageKey: null,
        },
        Mf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "qr_code_image_url",
          storageKey: null,
        },
        Nf = {
          alias: null,
          args: null,
          concreteType: "AirlineProductItem",
          kind: "LinkedField",
          name: "header_text_field",
          plural: !1,
          selections: E,
          storageKey: null,
        },
        Of = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "flight_number",
          storageKey: null,
        },
        Pf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "formatted_time_for_display",
          storageKey: null,
        },
        Qf = [Pf],
        Rf = {
          alias: null,
          args: null,
          concreteType: "AirlineFlightTimeInfo",
          kind: "LinkedField",
          name: "departure_time_info",
          plural: !1,
          selections: Qf,
          storageKey: null,
        },
        Sf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "terminal",
          storageKey: null,
        },
        Tf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "gate",
          storageKey: null,
        },
        Uf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "airport_code",
          storageKey: null,
        },
        Vf = {
          alias: null,
          args: null,
          concreteType: "AirlineFlightTimeInfo",
          kind: "LinkedField",
          name: "arrival_time_info",
          plural: !1,
          selections: Qf,
          storageKey: null,
        },
        Wf = [Uf, ze],
        Xf = {
          alias: null,
          args: null,
          concreteType: "AirportInfo",
          kind: "LinkedField",
          name: "arrival_airport",
          plural: !1,
          selections: Wf,
          storageKey: null,
        };
      Qf = {
        alias: null,
        args: null,
        concreteType: "AirlineFlightInfo",
        kind: "LinkedField",
        name: "flight_info",
        plural: !1,
        selections: [
          Of,
          {
            alias: null,
            args: null,
            concreteType: "AirlineFlightTimeInfo",
            kind: "LinkedField",
            name: "boarding_time_info",
            plural: !1,
            selections: Qf,
            storageKey: null,
          },
          Rf,
          {
            alias: null,
            args: null,
            concreteType: "AirportInfo",
            kind: "LinkedField",
            name: "departure_airport",
            plural: !1,
            selections: [Sf, Tf, Uf, ze],
            storageKey: null,
          },
          Vf,
          Xf,
        ],
        storageKey: null,
      };
      var Yf = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "seat",
          storageKey: null,
        },
        Zf = {
          alias: null,
          args: null,
          concreteType: "AirlinePassengerSegmentDetail",
          kind: "LinkedField",
          name: "passenger",
          plural: !1,
          selections: [
            Yf,
            {
              alias: null,
              args: null,
              concreteType: "AirlinePassenger",
              kind: "LinkedField",
              name: "passenger",
              plural: !1,
              selections: R,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        $f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "pnr_number",
          storageKey: null,
        },
        ag = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "booking_number_label",
          storageKey: null,
        },
        bg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "arrival_time_label",
          storageKey: null,
        },
        cg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "departure_time_label",
          storageKey: null,
        };
      Wf = {
        kind: "InlineFragment",
        selections: [
          $f,
          tf,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "checkin_url",
            storageKey: null,
          },
          ag,
          vf,
          bg,
          cg,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "checkin_cta_label",
            storageKey: null,
          },
          uf,
          {
            alias: null,
            args: null,
            concreteType: "AirlineFlightInfo",
            kind: "LinkedField",
            name: "flight_infos",
            plural: !0,
            selections: [
              Of,
              Xf,
              {
                alias: null,
                args: null,
                concreteType: "AirportInfo",
                kind: "LinkedField",
                name: "departure_airport",
                plural: !1,
                selections: Wf,
                storageKey: null,
              },
              Rf,
              Vf,
            ],
            storageKey: null,
          },
        ],
        type: "AirlineCheckInReminderMessageAttachment",
        abstractKey: null,
      };
      var dg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tracking_number",
          storageKey: null,
        },
        eg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "shipdate_for_display",
          storageKey: null,
        },
        fg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "estimated_delivery_time_for_display",
          storageKey: null,
        },
        gg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "timezone",
          storageKey: null,
        };
      T = [T, ze, Ae, Ic, Q, Be, ye, gg];
      Ae = {
        alias: null,
        args: null,
        concreteType: "MessengerCommerceBusinessLocation",
        kind: "LinkedField",
        name: "commerce_origin",
        plural: !1,
        selections: T,
        storageKey: null,
      };
      Ic = {
        alias: null,
        args: null,
        concreteType: "MessengerCommerceBusinessLocation",
        kind: "LinkedField",
        name: "commerce_destination",
        plural: !1,
        selections: T,
        storageKey: null,
      };
      Q = {
        alias: null,
        args: null,
        concreteType: "RetailShipmentItemsConnection",
        kind: "LinkedField",
        name: "retail_shipment_items",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "MessengerRetailItem",
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: [a, b, Zd, $d, ae, be, pc, qc, ce, de, y],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      ye = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "carrier_tracking_url",
        storageKey: null,
      };
      var hg = [o, n, k],
        ig = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "logo",
          plural: !1,
          selections: hg,
          storageKey: null,
        },
        jg = {
          alias: null,
          args: null,
          concreteType: "MessengerRetailCarrier",
          kind: "LinkedField",
          name: "retail_carrier",
          plural: !1,
          selections: [b, ye, ig],
          storageKey: null,
        };
      T = {
        alias: null,
        args: null,
        concreteType: "MessengerCommerceBusinessLocation",
        kind: "LinkedField",
        name: "messenger_commerce_location",
        plural: !1,
        selections: T,
        storageKey: null,
      };
      var kg = {
          alias: null,
          args: null,
          concreteType: "RetailShipmentTrackingEventsConnection",
          kind: "LinkedField",
          name: "shipment_tracking_events",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MessengerRetailShipmentTrackingEvent",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [a, T],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        lg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tracking_event_time_for_display",
          storageKey: null,
        },
        mg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "shipment_tracking_event_type",
          storageKey: null,
        },
        ng = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tracking_event_description",
          storageKey: null,
        };
      ye = {
        alias: null,
        args: null,
        concreteType: "MessengerRetailCarrier",
        kind: "LinkedField",
        name: "retail_carrier",
        plural: !1,
        selections: [
          b,
          ye,
          ig,
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "legal_terms_of_service_text",
            plural: !1,
            selections: f,
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      ig = {
        alias: null,
        args: null,
        concreteType: "RetailShipmentTrackingEventsConnection",
        kind: "LinkedField",
        name: "shipment_tracking_events",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "MessengerRetailShipmentTrackingEvent",
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: [a, mg, T],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      var og = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "update_type",
          storageKey: null,
        },
        pg = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "logo",
          plural: !1,
          selections: p,
          storageKey: null,
        };
      Xf = {
        kind: "InlineFragment",
        selections: [
          $f,
          tf,
          og,
          cg,
          bg,
          ag,
          Bf,
          vf,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "flight_status_label",
            storageKey: null,
          },
          yf,
          zf,
          pg,
          {
            alias: null,
            args: null,
            concreteType: "AirlineFlightInfo",
            kind: "LinkedField",
            name: "flight_info",
            plural: !1,
            selections: [
              Xf,
              {
                alias: null,
                args: null,
                concreteType: "AirportInfo",
                kind: "LinkedField",
                name: "departure_airport",
                plural: !1,
                selections: [Uf, ze, Tf],
                storageKey: null,
              },
              Of,
              Rf,
              Vf,
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "hightlighted_labels",
            storageKey: null,
          },
        ],
        type: "AirlineUpdateMessageAttachment",
        abstractKey: null,
      };
      Tf = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "confirmation_number",
        storageKey: null,
      };
      Rf = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "formatted_total",
        storageKey: null,
      };
      Vb = {
        alias: null,
        args: null,
        concreteType: "AirlinePriceInfo",
        kind: "LinkedField",
        name: "itemized_price_infos",
        plural: !0,
        selections: [h, Vb],
        storageKey: null,
      };
      var qg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "formatted_tax",
          storageKey: null,
        },
        rg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "formatted_base_price",
          storageKey: null,
        },
        sg = {
          alias: null,
          args: null,
          concreteType: "AirlinePassenger",
          kind: "LinkedField",
          name: "passenger_infos",
          plural: !0,
          selections: R,
          storageKey: null,
        },
        tg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "aircraft_type_label",
          storageKey: null,
        },
        ug = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "base_price_label",
          storageKey: null,
        },
        vg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cabin_type_label",
          storageKey: null,
        },
        wg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "flight_confirmation_label",
          storageKey: null,
        },
        xg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "flight_date_label",
          storageKey: null,
        },
        yg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "itinerary_error_title_label",
          storageKey: null,
        },
        zg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "itinerary_title_label",
          storageKey: null,
        },
        Ag = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "passenger_name_label",
          storageKey: null,
        },
        Bg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "purchase_summary_label",
          storageKey: null,
        },
        Cg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "taxes_label",
          storageKey: null,
        },
        Dg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "total_label",
          storageKey: null,
        },
        Eg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "view_details_cta_label",
          storageKey: null,
        },
        Fg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "number_of_stops_label",
          storageKey: null,
        };
      Uf = [Uf, ze, Sf];
      Sf = {
        alias: null,
        args: null,
        concreteType: "AirlineFlightInfo",
        kind: "LinkedField",
        name: "flight_info",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "aircraft_type",
            storageKey: null,
          },
          Of,
          {
            alias: null,
            args: null,
            concreteType: "AirportInfo",
            kind: "LinkedField",
            name: "departure_airport",
            plural: !1,
            selections: Uf,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "AirportInfo",
            kind: "LinkedField",
            name: "arrival_airport",
            plural: !1,
            selections: Uf,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "AirlineFlightTimeInfo",
            kind: "LinkedField",
            name: "departure_time_info",
            plural: !1,
            selections: [
              Pf,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "formatted_datetime_for_display",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "formatted_date_for_display",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          Vf,
        ],
        storageKey: null,
      };
      Of = {
        alias: null,
        args: null,
        concreteType: "AirlinePassengerSegmentDetail",
        kind: "LinkedField",
        name: "passenger_details",
        plural: !0,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "AirlinePassenger",
            kind: "LinkedField",
            name: "passenger",
            plural: !1,
            selections: [
              b,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "ticket_number",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          Yf,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "seat_type",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "AirlineProductItem",
            kind: "LinkedField",
            name: "product_items",
            plural: !0,
            selections: E,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "travel_class",
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      Uf = {
        alias: null,
        args: null,
        concreteType: "Image",
        kind: "LinkedField",
        name: "cover_image",
        plural: !1,
        selections: S,
        storageKey: null,
      };
      Pf = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "headline",
        storageKey: null,
      };
      Vf = {
        alias: null,
        args: null,
        concreteType: "Page",
        kind: "LinkedField",
        name: "page",
        plural: !1,
        selections: Ld,
        storageKey: null,
      };
      Yf = {
        alias: null,
        args: null,
        concreteType: "EventAttendanceAnswer",
        kind: "LinkedField",
        name: "attendee_answers",
        plural: !0,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "question_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "answer",
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      E = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "num_guests",
        storageKey: null,
      };
      var Gg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "start_time_sentence",
          storageKey: null,
        },
        Hg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "contextual_name",
          storageKey: null,
        },
        Ig = {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 64 },
            { kind: "Literal", name: "width", value: 64 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: l,
          storageKey: "profile_picture(height:64,width:64)",
        },
        Jg = { kind: "Literal", name: "first", value: 3 },
        Kg = [Jg],
        Lg = {
          alias: null,
          args: Kg,
          concreteType: "EventAttendanceConfigToOrderedQuestionsConnection",
          kind: "LinkedField",
          name: "attendance_questions",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "EventAttendanceQuestion",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [a, e],
              storageKey: null,
            },
          ],
          storageKey: "attendance_questions(first:3)",
        };
      Fc = {
        alias: null,
        args: null,
        concreteType: "LeadGenUserInfoField",
        kind: "LinkedField",
        name: "field_data",
        plural: !0,
        selections: [j, b, Fc],
        storageKey: null,
      };
      var Mg = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "sender_wec_number",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "sender_wec_number_formated",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "sender_wec_number_fbid",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "sender_wec_name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "wec_referral_url",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "wec_referral_body",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "wec_referral_headline",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "wec_referral_media",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "wec_referral_media_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "templated_message_body",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "templated_message_footer",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "templated_message_header_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "templated_message_header_text",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "templated_message_header_media",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "templated_message_btn1_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "templated_message_btn1_text",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "templated_message_btn2_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "templated_message_btn2_text",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "templated_message_btn3_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "templated_message_btn3_text",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "templated_message_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "templated_message_name",
              storageKey: null,
            },
          ],
          type: "WECMessage",
          abstractKey: null,
        },
        Ng = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_malicious",
          storageKey: null,
        },
        Og = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "thumbnail_image",
          plural: !1,
          selections: p,
          storageKey: null,
        },
        Pg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "message",
          storageKey: null,
        },
        Qg = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "ad_id",
          storageKey: null,
        },
        Rg = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "ice_breaker_title",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "IceBreakerMessage",
              kind: "LinkedField",
              name: "ice_breaker_messages",
              plural: !0,
              selections: [
                Pg,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "message_key",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            Qg,
          ],
          type: "IceBreakerMessageAttachment",
          abstractKey: null,
        },
        Sg = { kind: "Literal", name: "height", value: 280 },
        Tg = { kind: "Literal", name: "width", value: 280 },
        Ug = [Sg, Tg],
        Vg = {
          alias: "preview",
          args: Ug,
          concreteType: "Image",
          kind: "LinkedField",
          name: "image",
          plural: !1,
          selections: p,
          storageKey: "image(height:280,width:280)",
        },
        Wg = { kind: "Literal", name: "height", value: 480 },
        Xg = { kind: "Literal", name: "width", value: 480 },
        Yg = {
          alias: "large_preview",
          args: [Wg, Xg],
          concreteType: "Image",
          kind: "LinkedField",
          name: "image",
          plural: !1,
          selections: p,
          storageKey: "image(height:480,width:480)",
        },
        Zg = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "friend_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "confidence",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "birthday_date",
              storageKey: null,
            },
          ],
          type: "MBirthdayReminderAttachment",
          abstractKey: null,
        },
        $g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "module_name",
          storageKey: null,
        },
        ah = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "program_name",
          storageKey: null,
        },
        bh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "curriculum_message",
          storageKey: null,
        },
        ch = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "prompt",
          storageKey: null,
        },
        dh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "step_count",
          storageKey: null,
        },
        eh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "total_steps",
          storageKey: null,
        },
        fh = {
          alias: null,
          args: null,
          concreteType: "MentorshipProgram",
          kind: "LinkedField",
          name: "mentorship_program",
          plural: !1,
          selections: [
            a,
            {
              alias: null,
              args: null,
              concreteType: "MentorshipCurriculum",
              kind: "LinkedField",
              name: "curriculum",
              plural: !1,
              selections: d,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        gh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "topics",
          storageKey: null,
        },
        hh = [Tb],
        ih = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "xma_type",
          storageKey: null,
        },
        jh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "xma_title",
          storageKey: null,
        },
        kh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "xma_disclaimer",
          storageKey: null,
        },
        lh = {
          alias: null,
          args: null,
          concreteType: "MentorshipProgram",
          kind: "LinkedField",
          name: "mentorship_program",
          plural: !1,
          selections: d,
          storageKey: null,
        },
        mh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "xma_body",
          storageKey: null,
        },
        nh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "offset",
          storageKey: null,
        },
        oh = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "title",
          plural: !1,
          selections: [
            e,
            {
              alias: null,
              args: null,
              concreteType: "EntityAtRange",
              kind: "LinkedField",
              name: "ranges",
              plural: !0,
              selections: [x, nh],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        ph = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "block_type",
          storageKey: null,
        },
        qh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "data",
          storageKey: null,
        },
        rh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "depth",
          storageKey: null,
        },
        sh = {
          alias: null,
          args: null,
          concreteType: "InlineStyleAtRange",
          kind: "LinkedField",
          name: "inline_style_ranges",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "inline_style",
              storageKey: null,
            },
            x,
            nh,
          ],
          storageKey: null,
        },
        th = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "comment_count_reduced",
          storageKey: null,
        },
        uh = {
          alias: null,
          args: null,
          concreteType: "TopLevelCommentsConnection",
          kind: "LinkedField",
          name: "top_level_comments",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "total_count",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        vh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reaction_count_reduced",
          storageKey: null,
        };
      Jg = [
        Jg,
        {
          kind: "Literal",
          name: "orderby",
          value: ["COUNT_DESC", "REACTION_TYPE"],
        },
      ];
      var wh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reaction_type",
          storageKey: null,
        },
        xh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "post_id",
          storageKey: null,
        },
        yh = {
          alias: "description",
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "message",
          plural: !1,
          selections: f,
          storageKey: null,
        },
        zh = {
          kind: "InlineFragment",
          selections: hh,
          type: "User",
          abstractKey: null,
        },
        Ah = [m],
        Bh = {
          kind: "InlineFragment",
          selections: Ah,
          type: "Entity",
          abstractKey: "__isEntity",
        },
        Ch = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "actors",
          plural: !0,
          selections: [
            z,
            b,
            a,
            zh,
            Bh,
            {
              alias: null,
              args: null,
              concreteType: "Image",
              kind: "LinkedField",
              name: "profile_picture",
              plural: !1,
              selections: p,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Dh = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "image",
          plural: !1,
          selections: p,
          storageKey: null,
        },
        Eh = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "media",
          plural: !1,
          selections: [$a, Dh],
          storageKey: null,
        },
        Fh = {
          alias: "title",
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "title_with_entities",
          plural: !1,
          selections: f,
          storageKey: null,
        },
        Gh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        },
        Hh = [{ kind: "Literal", name: "if_style", value: "file_upload" }],
        Ih = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "media",
          plural: !1,
          selections: bc,
          storageKey: null,
        },
        Jh = [{ kind: "Literal", name: "if_style", value: "photo" }],
        Kh = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "message",
          plural: !1,
          selections: f,
          storageKey: null,
        },
        Lh = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "actors",
          plural: !0,
          selections: [z, b, a, zh, Bh],
          storageKey: null,
        },
        Mh = {
          alias: null,
          args: null,
          concreteType: "Photo",
          kind: "LinkedField",
          name: "photo",
          plural: !1,
          selections: bc,
          storageKey: null,
        },
        U = {
          alias: null,
          args: null,
          concreteType: "FocusedPhoto",
          kind: "LinkedField",
          name: "cover_photo",
          plural: !1,
          selections: [Mh],
          storageKey: null,
        },
        Nh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "job_title",
          storageKey: null,
        },
        Oh = {
          alias: null,
          args: null,
          concreteType: "WorkUserInfo",
          kind: "LinkedField",
          name: "work_info",
          plural: !1,
          selections: [Nh],
          storageKey: null,
        },
        Ph = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subscribe_status",
          storageKey: null,
        },
        Qh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "visibility",
          storageKey: null,
        },
        Rh = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "visibility_sentence",
          plural: !1,
          selections: f,
          storageKey: null,
        },
        Sh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "viewer_join_state",
          storageKey: null,
        },
        Th = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "group_general_chat",
          plural: !1,
          selections: d,
          storageKey: null,
        },
        Uh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "attachment_type_name",
          storageKey: null,
        },
        Vh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "privacy_status",
          storageKey: null,
        },
        Wh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "file_type_category",
          storageKey: null,
        },
        Xh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "app_integration_type",
          storageKey: null,
        },
        Yh = {
          alias: null,
          args: [{ kind: "Literal", name: "size", value: "D32" }],
          concreteType: "Image",
          kind: "LinkedField",
          name: "logo",
          plural: !1,
          selections: l,
          storageKey: 'logo(size:"D32")',
        },
        Zh = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "viewer_auth_link",
          storageKey: null,
        },
        $h = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "attachment_icon",
          plural: !1,
          selections: l,
          storageKey: null,
        },
        ai = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "content_uri",
          storageKey: null,
        },
        bi = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "timestamp",
          storageKey: null,
        },
        ci = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "referral_offer_link",
          storageKey: null,
        },
        di = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "PostPurchaseOrderUpdateXmaProgress",
              kind: "LinkedField",
              name: "order_progress",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "total_segments",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "filled_segments",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "order_id",
              storageKey: null,
            },
          ],
          type: "PostPurchaseOrderUpdateXma",
          abstractKey: null,
        },
        ei = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cta_title",
          storageKey: null,
        },
        fi = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "action_prefill",
              storageKey: null,
            },
            Qg,
            ei,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "customer_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "index",
              storageKey: null,
            },
            v,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "reply_image_uri",
              storageKey: null,
            },
          ],
          type: "InThreadMultiphotoItemCTAData",
          abstractKey: null,
        };
      K = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "target",
        plural: !1,
        selections: [
          z,
          Cb,
          {
            kind: "InlineFragment",
            selections: [a, Db, r, Eb, Fb, Gb, Hb],
            type: "WECMessageAudio",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [A, D, C, H],
            type: "MoneyTransfer",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: K,
            type: "PeerToPeerTransfer",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              dc,
              kc,
              M,
              L,
              lc,
              mc,
              a,
              jc,
              N,
              nc,
              hc,
              O,
              J,
              H,
              {
                alias: null,
                args: null,
                concreteType: "PeerToPeerPaymentRequest",
                kind: "LinkedField",
                name: "individual_requests",
                plural: !0,
                selections: [dc, kc, M, L, lc, mc, a, jc, N, nc, hc, O, J, H],
                storageKey: null,
              },
            ],
            type: "PeerToPeerPaymentRequest",
            abstractKey: null,
          },
          H,
          {
            kind: "InlineFragment",
            selections: [
              oc,
              y,
              {
                alias: null,
                args: null,
                concreteType: "RetailPromotionItemsConnection",
                kind: "LinkedField",
                name: "promotion_items",
                plural: !1,
                selections: P,
                storageKey: null,
              },
            ],
            type: "MessengerRetailPromotion",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              oc,
              y,
              {
                alias: null,
                args: null,
                concreteType: "MessengerBusinessMessageItemsConnection",
                kind: "LinkedField",
                name: "business_items",
                plural: !1,
                selections: P,
                storageKey: null,
              },
            ],
            type: "MessengerBusinessMessage",
            abstractKey: null,
          },
          Ec,
          Gc,
          Kc,
          {
            kind: "InlineFragment",
            selections: [
              a,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "invite_sender",
                plural: !1,
                selections: d,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "invite_recipient",
                plural: !1,
                selections: d,
                storageKey: null,
              },
            ],
            type: "QuickInvite",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              Lc,
              Mc,
              Nc,
              Oc,
              Pc,
              Qc,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "blob_media",
                plural: !1,
                selections: [Sc, Rc],
                storageKey: null,
              },
            ],
            type: "MontageDirect",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [a, Tc, c, Uc],
            type: "MontageShare",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              a,
              Wc,
              Xc,
              Yc,
              Zc,
              $c,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "native_component_flow_request",
                plural: !1,
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      ad,
                      bd,
                      cd,
                      a,
                      Vc,
                      dd,
                      fd,
                      jd,
                      {
                        alias: null,
                        args: null,
                        concreteType:
                          "NativeComponentFlowBookingRequestServicesProductItemsConnection",
                        kind: "LinkedField",
                        name: "services_product_items",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: "ServicesProductItem",
                            kind: "LinkedField",
                            name: "nodes",
                            plural: !0,
                            selections: [
                              a,
                              b,
                              I,
                              kd,
                              ld,
                              {
                                alias: null,
                                args: md,
                                concreteType: "ProductImage",
                                kind: "LinkedField",
                                name: "images",
                                plural: !0,
                                selections: [nd],
                                storageKey: "images(first:1)",
                              },
                              od,
                            ],
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      pd,
                      qd,
                      rd,
                      sd,
                      td,
                      ud,
                      vd,
                      wd,
                      xd,
                      yd,
                      zd,
                      Zc,
                      $c,
                      Ad,
                    ],
                    type: "NativeComponentFlowBookingRequest",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "PagesPlatformBookingMessage",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [a, Bd, Cd, Dd, Ed],
            type: "ServicesAppointmentAvailability",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [a, Fd, Gd, Hd, Id, Jd, Kd],
            type: "ServicesGenericAdminText",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "MessagingParticipant",
                kind: "LinkedField",
                name: "genie_sender",
                plural: !1,
                selections: Md,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "StoryAttachment",
                kind: "LinkedField",
                name: "story_attachment",
                plural: !1,
                selections: [Qa, i, ab, bb, cb, db, eb, fb, gb, hb, ib, Ab, Bb],
                storageKey: null,
              },
            ],
            type: "GenieMessage",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              Nd,
              Od,
              Pd,
              Qd,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "event_place",
                plural: !1,
                selections: R,
                storageKey: null,
              },
              Rd,
              Sd,
              Td,
              Ud,
              Vd,
              b,
              Wd,
            ],
            type: "Event",
            abstractKey: null,
          },
          Xd,
          Yd,
          {
            kind: "InlineFragment",
            selections: [a, b, Zd, $d, ae, be, pc, qc, ce, de, u, y],
            type: "MessengerRetailItem",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [a, Zd, ee, fe, sc, $d, ge, he, ie, je, b],
            type: "AgentItemSuggestion",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              a,
              ke,
              le,
              me,
              ne,
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "FundraiserCoverPhoto",
                    kind: "LinkedField",
                    name: "focused_cover_photo",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "Photo",
                        kind: "LinkedField",
                        name: "photo",
                        plural: !1,
                        selections: [oe],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                type: "FundraiserWithPresence",
                abstractKey: "__isFundraiserWithPresence",
              },
            ],
            type: "Fundraiser",
            abstractKey: "__isFundraiser",
          },
          {
            kind: "InlineFragment",
            selections: [
              a,
              pe,
              qe,
              re,
              se,
              te,
              ue,
              ve,
              we,
              xe,
              Ce,
              sd,
              De,
              Ee,
              Fe,
              Ge,
              {
                alias: null,
                args: null,
                concreteType: "RetailReceiptItemsConnection",
                kind: "LinkedField",
                name: "retail_items",
                plural: !1,
                selections: P,
                storageKey: null,
              },
              He,
              Ie,
              Je,
              Ke,
            ],
            type: "MessengerRetailReceipt",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              Le,
              Me,
              Ne,
              {
                alias: null,
                args: null,
                concreteType: "PaymentInvoiceProduct",
                kind: "LinkedField",
                name: "item_list",
                plural: !0,
                selections: [Oe, b, Pe, I, Mb, Qe, Re],
                storageKey: null,
              },
              Ua,
              Te,
              Ue,
              Se,
              Ve,
              We,
              F,
              Xe,
              Ye,
              Ze,
              $e,
              af,
              bf,
            ],
            type: "PaymentPlatformAttachment",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: d,
            type: "JobApplication",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              cf,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "group_commerce_item_seller",
                plural: !1,
                selections: d,
                storageKey: null,
              },
              df,
              ef,
              ff,
              m,
            ],
            type: "GroupCommerceProductItem",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [df, ff],
            type: "MarketplaceListingRenderable",
            abstractKey: "__isMarketplaceListingRenderable",
          },
          {
            kind: "InlineFragment",
            selections: [gf, hf, Xa, jf, b, kf, a, lf],
            type: "Page",
            abstractKey: null,
          },
          qf,
          {
            kind: "InlineFragment",
            selections: [
              rf,
              {
                alias: null,
                args: sf,
                concreteType:
                  "MPersonalRemindersListToPersonalRemindersConnection",
                kind: "LinkedField",
                name: "personal_reminders",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType:
                      "MPersonalRemindersListToPersonalRemindersEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "MessengerEventReminder",
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: pf,
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey:
                  'personal_reminders(orderby:"m_personal_reminder_list_ordering")',
              },
            ],
            type: "MPersonalRemindersList",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              tf,
              uf,
              vf,
              wf,
              xf,
              yf,
              zf,
              Af,
              Bf,
              Cf,
              Df,
              Ef,
              Ff,
              Gf,
              {
                alias: null,
                args: null,
                concreteType: "AirlineBoardingPassesConnection",
                kind: "LinkedField",
                name: "boarding_passes",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "AirlineBoardingPassMessageAttachment",
                    kind: "LinkedField",
                    name: "nodes",
                    plural: !0,
                    selections: [Hf, If, Jf, Kf, Lf, Mf, Nf, Qf, Zf],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "AirlineBoardingPassCollectionMessageAttachment",
            abstractKey: null,
          },
          Wf,
          {
            kind: "InlineFragment",
            selections: [
              a,
              {
                alias: null,
                args: null,
                concreteType: "MessengerRetailShipment",
                kind: "LinkedField",
                name: "shipment",
                plural: !1,
                selections: [a, dg, eg, fg, Ae, Ic, Q, jg, kg],
                storageKey: null,
              },
              lg,
              mg,
              T,
              ng,
              He,
            ],
            type: "MessengerRetailShipmentTrackingEvent",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              a,
              dg,
              eg,
              fg,
              Ae,
              Ic,
              Q,
              ye,
              ig,
              {
                alias: null,
                args: null,
                concreteType: "MessengerRetailReceipt",
                kind: "LinkedField",
                name: "receipt",
                plural: !1,
                selections: [se],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "User",
                kind: "LinkedField",
                name: "recipient",
                plural: !1,
                selections: R,
                storageKey: null,
              },
              He,
            ],
            type: "MessengerRetailShipment",
            abstractKey: null,
          },
          Xf,
          {
            kind: "InlineFragment",
            selections: [
              Tf,
              $f,
              tf,
              Rf,
              Vb,
              qg,
              rg,
              sg,
              pg,
              tg,
              bg,
              ug,
              ag,
              vg,
              cg,
              wg,
              xg,
              vf,
              Af,
              yg,
              zg,
              Ag,
              yf,
              zf,
              Bg,
              Cg,
              Dg,
              Eg,
              {
                alias: null,
                args: null,
                concreteType: "AirlineItineraryLegsConnection",
                kind: "LinkedField",
                name: "itinerary_legs",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "AirlineItineraryLeg",
                    kind: "LinkedField",
                    name: "nodes",
                    plural: !0,
                    selections: [
                      Fg,
                      {
                        alias: null,
                        args: null,
                        concreteType: "AirlineItinerarySegmentsConnection",
                        kind: "LinkedField",
                        name: "segments",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType:
                              "AirlineItinerarySegmentMessageAttachment",
                            kind: "LinkedField",
                            name: "nodes",
                            plural: !0,
                            selections: [Sf, Of],
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "AirlineItineraryMessageAttachment",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [a, Uf, Pf, b, Vf],
            type: "LeadGenDeepLinkData",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              a,
              Yf,
              E,
              {
                alias: null,
                args: null,
                concreteType: "Event",
                kind: "LinkedField",
                name: "event",
                plural: !1,
                selections: [
                  a,
                  b,
                  Gg,
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "event_place",
                    plural: !1,
                    selections: [Hg],
                    storageKey: null,
                  },
                  Ig,
                  {
                    alias: null,
                    args: null,
                    concreteType: "EventAttendanceConfig",
                    kind: "LinkedField",
                    name: "attendance_config",
                    plural: !1,
                    selections: [Lg],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "EventAttendanceConfirmation",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [a, Fc],
            type: "UserLeadGenInfo",
            abstractKey: null,
          },
          Mg,
          {
            kind: "InlineFragment",
            selections: [a, b, Ng, k, Fb, Gb],
            type: "WECMessageFile",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [a, r, Eb, Fb, Gb, Db, n, Og, o],
            type: "WECMessageVideo",
            abstractKey: null,
          },
          Rg,
          {
            kind: "InlineFragment",
            selections: [a, Fb, Vg, Yg],
            type: "WECMessageImage",
            abstractKey: null,
          },
          Zg,
          {
            kind: "InlineFragment",
            selections: [a, $g, ah, bh, ch, dh, eh, fh],
            type: "MentorshipMessengerCurriculumStep",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [a, gh],
            type: "MentorshipMessengerDiscussionTopicSet",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              a,
              {
                alias: null,
                args: null,
                concreteType: "MentorshipProgram",
                kind: "LinkedField",
                name: "mentorship_program",
                plural: !1,
                selections: [
                  a,
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "other_member",
                    plural: !1,
                    selections: hh,
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              ih,
            ],
            type: "MentorshipMessengerLeavePrompt",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [a, ih, jh, kh, lh],
            type: "MentorshipMessengerSurvey",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [a, ih],
            type: "MentorshipMessengerReminder",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [a, ih, jh, mh],
            type: "MentorshipMessengerProgressTracker",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              oh,
              {
                alias: null,
                args: null,
                concreteType: "ComposedBlockWithEntities",
                kind: "LinkedField",
                name: "message_richtext",
                plural: !0,
                selections: [
                  ph,
                  qh,
                  rh,
                  {
                    alias: null,
                    args: null,
                    concreteType: "ComposedEntityAtRange",
                    kind: "LinkedField",
                    name: "entity_ranges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "entity",
                        plural: !1,
                        selections: [z],
                        storageKey: null,
                      },
                      x,
                      nh,
                    ],
                    storageKey: null,
                  },
                  sh,
                  e,
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "Feedback",
                kind: "LinkedField",
                name: "feedback",
                plural: !1,
                selections: [
                  th,
                  uh,
                  vh,
                  {
                    alias: null,
                    args: Jg,
                    concreteType: "TopReactionsConnection",
                    kind: "LinkedField",
                    name: "top_reactions",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "FeedbackReactionInfo",
                        kind: "LinkedField",
                        name: "nodes",
                        plural: !0,
                        selections: [wh],
                        storageKey: null,
                      },
                    ],
                    storageKey:
                      'top_reactions(first:3,orderby:["COUNT_DESC","REACTION_TYPE"])',
                  },
                ],
                storageKey: null,
              },
              xh,
              nc,
              yh,
              Ch,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "to",
                plural: !1,
                selections: [z, b, zh, Bh],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "StoryAttachment",
                kind: "LinkedField",
                name: "attachments",
                plural: !0,
                selections: [
                  cb,
                  m,
                  bb,
                  Qa,
                  Eh,
                  Fh,
                  {
                    alias: null,
                    args: Kg,
                    concreteType: "SubattachmentsConnection",
                    kind: "LinkedField",
                    name: "all_subattachments",
                    plural: !1,
                    selections: [
                      Gh,
                      {
                        alias: "files",
                        args: Hh,
                        concreteType: "StoryAttachment",
                        kind: "LinkedField",
                        name: "nodes",
                        plural: !0,
                        selections: [Fh, Ih],
                        storageKey: 'nodes(if_style:"file_upload")',
                      },
                      {
                        alias: "images",
                        args: Jh,
                        concreteType: "StoryAttachment",
                        kind: "LinkedField",
                        name: "nodes",
                        plural: !0,
                        selections: [Ih],
                        storageKey: 'nodes(if_style:"photo")',
                      },
                    ],
                    storageKey: "all_subattachments(first:3)",
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "Story",
                kind: "LinkedField",
                name: "attached_story",
                plural: !1,
                selections: [
                  Kh,
                  Lh,
                  {
                    alias: null,
                    args: null,
                    concreteType: "StoryAttachment",
                    kind: "LinkedField",
                    name: "attachments",
                    plural: !0,
                    selections: [Eh],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "Story",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [a, b, B, U, Oh, Ph],
            type: "User",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              a,
              b,
              Qh,
              Rh,
              Sh,
              U,
              Th,
              {
                alias: null,
                args: null,
                concreteType: "GroupsSyncMetadata",
                kind: "LinkedField",
                name: "work_groups_sync_metadata",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "messenger_group",
                    plural: !1,
                    selections: d,
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "Group",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              a,
              Uh,
              Vh,
              Wh,
              {
                alias: null,
                args: null,
                concreteType: "AppIntegration",
                kind: "LinkedField",
                name: "app_integration",
                plural: !1,
                selections: [Xh, b, Yh, Zh],
                storageKey: null,
              },
              $h,
              ai,
              {
                alias: null,
                args: null,
                concreteType: "AppContentAdditionalData",
                kind: "LinkedField",
                name: "link_preview_additional_data",
                plural: !0,
                selections: [
                  h,
                  e,
                  Pb,
                  xb,
                  bi,
                  {
                    alias: null,
                    args: null,
                    concreteType: "User",
                    kind: "LinkedField",
                    name: "profiles",
                    plural: !0,
                    selections: [B, b],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "AppContent",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: d,
            type: "OfferItem",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [u],
            type: "CommerceProductItemShare",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [a, ci],
            type: "ApplicationReferralXMA",
            abstractKey: null,
          },
          di,
          fi,
        ],
        storageKey: null,
      };
      M = {
        alias: null,
        args: null,
        concreteType: "StoryAttachment",
        kind: "LinkedField",
        name: "story_attachment",
        plural: !1,
        selections: [
          Qa,
          i,
          ab,
          bb,
          cb,
          db,
          eb,
          fb,
          gb,
          hb,
          ib,
          Ab,
          Bb,
          K,
          {
            alias: null,
            args: null,
            concreteType: "StoryAttachment",
            kind: "LinkedField",
            name: "subattachments",
            plural: !0,
            selections: [Qa, i, ab, bb, cb, db, eb, fb, gb, hb, ib, Ab, Bb, K],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      L = {
        kind: "InlineFragment",
        selections: d,
        type: "Node",
        abstractKey: "__isNode",
      };
      N = {
        alias: null,
        args: null,
        concreteType: "ExtensibleMessageAttachment",
        kind: "LinkedField",
        name: "extensible_attachment",
        plural: !1,
        selections: [
          Pa,
          M,
          {
            alias: "genie_attachment",
            args: null,
            concreteType: "StoryAttachment",
            kind: "LinkedField",
            name: "story_attachment",
            plural: !1,
            selections: [
              {
                alias: "genie_message",
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "target",
                plural: !1,
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      a,
                      {
                        alias: null,
                        args: null,
                        concreteType: "MessagingParticipant",
                        kind: "LinkedField",
                        name: "genie_sender",
                        plural: !1,
                        selections: [
                          a,
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "messaging_actor",
                            plural: !1,
                            selections: [L, b],
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      M,
                    ],
                    type: "GenieMessage",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      H = {
        alias: null,
        args: null,
        concreteType: "Sticker",
        kind: "LinkedField",
        name: "sticker",
        plural: !1,
        selections: Ta,
        storageKey: null,
      };
      y = { kind: "Literal", name: "sizing", value: "cover-fill" };
      P = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "projection_type",
        storageKey: null,
      };
      ff = {
        kind: "InlineFragment",
        selections: [
          yc,
          zc,
          Db,
          {
            alias: "preview",
            args: [Sg, y, Tg],
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: p,
            storageKey: 'image(height:280,sizing:"cover-fill",width:280)',
          },
          {
            alias: "large_preview",
            args: [Wg, y, Xg],
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: p,
            storageKey: 'image(height:480,sizing:"cover-fill",width:480)',
          },
          {
            alias: "thumbnail",
            args: [
              { kind: "Literal", name: "height", value: 38 },
              { kind: "Literal", name: "width", value: 58 },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: l,
            storageKey: "image(height:38,width:58)",
          },
          {
            alias: null,
            args: null,
            concreteType: "PhotoEncoding",
            kind: "LinkedField",
            name: "photo_encodings",
            plural: !0,
            selections: [
              a,
              o,
              n,
              P,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "cdn_uri",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "max_tile_level",
                storageKey: null,
              },
              {
                alias: null,
                args: [
                  {
                    kind: "Literal",
                    name: "thumbnail_dimensions",
                    value: [
                      { height: 280, width: 280 },
                      { height: 480, width: 480 },
                    ],
                  },
                ],
                concreteType: "SphericalPhotoThumbnail",
                kind: "LinkedField",
                name: "thumbnails",
                plural: !0,
                selections: hg,
                storageKey:
                  'thumbnails(thumbnail_dimensions:[{"height":280,"width":280},{"height":480,"width":480}])',
              },
              {
                alias: null,
                args: [{ kind: "Literal", name: "tile_levels", value: [0] }],
                concreteType: "PhotoTile",
                kind: "LinkedField",
                name: "tiles",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "level",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "face",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "col",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "row",
                    storageKey: null,
                  },
                  k,
                ],
                storageKey: "tiles(tile_levels:[0])",
              },
              {
                alias: null,
                args: null,
                concreteType: "PhotosphereMetadata",
                kind: "LinkedField",
                name: "spherical_metadata",
                plural: !1,
                selections: [
                  P,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "full_pano_width_pixels",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "full_pano_height_pixels",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "cropped_area_image_width_pixels",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "cropped_area_image_height_pixels",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "cropped_area_left_pixels",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "cropped_area_top_pixels",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "initial_view_heading_degrees",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "initial_view_pitch_degrees",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "initial_view_vertical_fov_degrees",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "initial_view_roll_degrees",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "pose_heading_degrees",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "pose_pitch_degrees",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "pose_roll_degrees",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          Pa,
          Cc,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "original_extension",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "render_as_sticker",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "blurred_image_uri",
            storageKey: null,
          },
        ],
        type: "MessageImage",
        abstractKey: null,
      };
      pf = {
        kind: "InlineFragment",
        selections: [
          yc,
          zc,
          Db,
          wc,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "animated_image_caption",
            storageKey: null,
          },
          Pa,
          vc,
          Cc,
        ],
        type: "MessageAnimatedImage",
        abstractKey: null,
      };
      Q = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "url_skipshim",
        storageKey: null,
      };
      hh = {
        kind: "InlineFragment",
        selections: [
          yc,
          zc,
          Db,
          r,
          q,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_voicemail",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "audio_type",
            storageKey: null,
          },
          Eb,
          Q,
        ],
        type: "MessageAudio",
        abstractKey: null,
      };
      Ih = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "content_type",
        storageKey: null,
      };
      Eh = {
        kind: "InlineFragment",
        selections: [
          yc,
          zc,
          Db,
          m,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "mimetype",
            storageKey: null,
          },
          Ih,
          Ng,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "message_file_fbid",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "preview_url",
            storageKey: null,
          },
          Eb,
          Q,
          {
            alias: "preview",
            args: null,
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: l,
            storageKey: null,
          },
        ],
        type: "MessageFile",
        abstractKey: null,
      };
      U = [z, ff, pf, hh, Ac, Eh];
      u = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "blob_attachments",
        plural: !0,
        selections: U,
        storageKey: null,
      };
      ab = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "extensible_message_admin_text_type",
        storageKey: null,
      };
      hb = {
        alias: null,
        args: null,
        concreteType: "Application",
        kind: "LinkedField",
        name: "game",
        plural: !1,
        selections: d,
        storageKey: null,
      };
      Ab = {
        kind: "InlineFragment",
        selections: [hb],
        type: "InstantGameUpdateExtensibleMessageAdminText",
        abstractKey: null,
      };
      K = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "platform_xmd_encoded",
        storageKey: null,
      };
      M = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "message_unsendability_status",
        storageKey: null,
      };
      Ta = {
        alias: "last_message",
        args: Ma,
        concreteType: "MessagesOfThreadConnection",
        kind: "LinkedField",
        name: "messages",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: [
              c,
              {
                alias: null,
                args: null,
                concreteType: "MessagingParticipant",
                kind: "LinkedField",
                name: "message_sender",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "messaging_actor",
                    plural: !1,
                    selections: d,
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              Na,
              Oa,
              {
                kind: "InlineFragment",
                selections: [N, H, u],
                type: "UserMessage",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  ab,
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "extensible_message_admin_text",
                    plural: !1,
                    selections: [Ab],
                    storageKey: null,
                  },
                ],
                type: "GenericAdminTextMessage",
                abstractKey: null,
              },
              K,
              M,
            ],
            storageKey: null,
          },
        ],
        storageKey: "messages(last:1)",
      };
      Sg = {
        alias: null,
        args: null,
        concreteType: "ThreadConnectivityData",
        kind: "LinkedField",
        name: "thread_connectivity_data",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "connectivity_status",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "first_sender_id",
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      Tg = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "job_status",
        storageKey: null,
      };
      Wg = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "should_show_jobs_feature",
        storageKey: null,
      };
      y = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "should_show_schdule_interview_dialog",
        storageKey: null,
      };
      Xg = {
        alias: null,
        args: null,
        concreteType: "JobApplicationsFromThreadConnection",
        kind: "LinkedField",
        name: "thread_associated_job_applications",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "JobApplication",
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: [
              a,
              {
                alias: null,
                args: null,
                concreteType: "JobOpening",
                kind: "LinkedField",
                name: "job_opening",
                plural: !1,
                selections: [
                  Tg,
                  {
                    alias: null,
                    args: null,
                    concreteType: "Page",
                    kind: "LinkedField",
                    name: "employer",
                    plural: !1,
                    selections: [Wg, y],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      p = {
        alias: null,
        args: null,
        concreteType: "User",
        kind: "LinkedField",
        name: "thread_associated_page_admin",
        plural: !1,
        selections: ed,
        storageKey: null,
      };
      P = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "unread_count",
        storageKey: null,
      };
      wc = {
        condition: "is_work_teamwork_not_putting_muted_in_unreads",
        kind: "Condition",
        passingValue: !0,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "unread_mentions_count",
            storageKey: null,
          },
        ],
      };
      vc = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "messages_count",
        storageKey: null,
      };
      yc = {
        alias: null,
        args: [{ kind: "Literal", name: "size", value: 60 }],
        concreteType: "Image",
        kind: "LinkedField",
        name: "square_image",
        plural: !1,
        selections: l,
        storageKey: "square_image(size:60)",
      };
      zc = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "updated_time_precise",
        storageKey: null,
      };
      Q = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "mute_until",
        storageKey: null,
      };
      ed = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_pin_protected",
        storageKey: null,
      };
      var gi = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_pinned",
          storageKey: null,
        },
        hi = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_viewer_subscribed",
          storageKey: null,
        },
        ii = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_other_recipient_page",
          storageKey: null,
        },
        ji = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "thread_queue_enabled",
          storageKey: null,
        },
        ki = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "folder",
          storageKey: null,
        },
        li = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_viewer_archived",
          storageKey: null,
        },
        mi = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_page_follow_up",
          storageKey: null,
        },
        ni = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_page_unresponded_thread",
          storageKey: null,
        },
        oi = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cannot_reply_reason",
          storageKey: null,
        },
        pi = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_report",
          storageKey: null,
        },
        qi = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "composer_input_disabled",
          storageKey: null,
        },
        ri = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "ephemeral_ttl_mode",
          storageKey: null,
        },
        si = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "emoji",
          storageKey: null,
        },
        ti = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "participant_id",
          storageKey: null,
        },
        ui = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "nickname",
          storageKey: null,
        },
        vi = {
          alias: null,
          args: null,
          concreteType: "MessageThreadParticipantCustomization",
          kind: "LinkedField",
          name: "participant_customizations",
          plural: !0,
          selections: [ti, ui],
          storageKey: null,
        },
        wi = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "outgoing_bubble_color",
          storageKey: null,
        },
        xi = {
          alias: null,
          args: null,
          concreteType: "MessageThreadCustomization",
          kind: "LinkedField",
          name: "customization_info",
          plural: !1,
          selections: [si, vi, wi],
          storageKey: null,
        },
        yi = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "fallback_color",
          storageKey: null,
        },
        zi = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "accessibility_label",
          storageKey: null,
        },
        Ai = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reverse_gradients_for_radial",
          storageKey: null,
        },
        Bi = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "gradient_colors",
          storageKey: null,
        },
        Ci = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "keyframe_asset_uri",
          storageKey: null,
        },
        Di = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reaction_name",
          storageKey: null,
        },
        Ei = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reaction_emoji",
          storageKey: null,
        },
        Fi = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "static_asset",
          plural: !1,
          selections: l,
          storageKey: null,
        },
        Gi = {
          alias: null,
          args: null,
          concreteType: "MessengerThreadTheme",
          kind: "LinkedField",
          name: "thread_theme",
          plural: !1,
          selections: [
            a,
            yi,
            zi,
            Ai,
            Bi,
            {
              alias: null,
              args: null,
              concreteType: "MessengerReactionPack",
              kind: "LinkedField",
              name: "reaction_pack",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "MessengerReactionPackReactionAssetsConnection",
                  kind: "LinkedField",
                  name: "reaction_assets",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "MessengerReactionAsset",
                      kind: "LinkedField",
                      name: "nodes",
                      plural: !0,
                      selections: [Ci, Di, Ei, Fi],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Hi = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "thread_admins",
          plural: !0,
          selections: d,
          storageKey: null,
        },
        Ii = {
          alias: "approval_mode",
          args: null,
          kind: "ScalarField",
          name: "group_approval_mode",
          storageKey: null,
        },
        Ji = {
          alias: null,
          args: null,
          concreteType: "MessageThreadJoinableMode",
          kind: "LinkedField",
          name: "joinable_mode",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "mode",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "link",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Ki = {
          alias: null,
          args: null,
          concreteType: "GroupApprovalQueueConnection",
          kind: "LinkedField",
          name: "group_approval_queue",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MessengerGroupRequesterInfo",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "requester",
                  plural: !1,
                  selections: d,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "inviter",
                  plural: !1,
                  selections: d,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "request_source",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "request_timestamp",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Li = [
          {
            alias: null,
            args: null,
            concreteType: "User",
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: d,
            storageKey: null,
          },
        ],
        Mi = {
          alias: null,
          args: null,
          concreteType: "ApprovalRequestsOfThreadConnection",
          kind: "LinkedField",
          name: "approval_requests",
          plural: !1,
          selections: Li,
          storageKey: null,
        },
        Ni = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "thread_queue_metadata",
          plural: !1,
          selections: [Mi],
          storageKey: null,
        },
        Oi = {
          alias: null,
          args: null,
          concreteType: "User",
          kind: "LinkedField",
          name: "lightweight_event_creator",
          plural: !1,
          selections: d,
          storageKey: null,
        },
        Pi = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "lightweight_event_type",
          storageKey: null,
        },
        Qi = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "location_name",
          storageKey: null,
        };
      Jc = {
        alias: null,
        args: null,
        concreteType: "Location",
        kind: "LinkedField",
        name: "location_coordinates",
        plural: !1,
        selections: Jc,
        storageKey: null,
      };
      var Ri = {
          alias: null,
          args: null,
          concreteType: "StreetAddress",
          kind: "LinkedField",
          name: "address",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "full_address",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Si = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "lightweight_event_status",
          storageKey: null,
        },
        Ti = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "note",
          storageKey: null,
        },
        Ui = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "repeat_mode",
          storageKey: null,
        },
        V = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "message_id",
          storageKey: null,
        },
        Vi = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "seconds_to_notify_before",
          storageKey: null,
        },
        Wi = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "allows_rsvp",
          storageKey: null,
        },
        Xi = {
          alias: null,
          args: null,
          concreteType: "Event",
          kind: "LinkedField",
          name: "related_event",
          plural: !1,
          selections: d,
          storageKey: null,
        },
        Yi = {
          alias: null,
          args: null,
          concreteType: "MessengerEventReminderMembersConnection",
          kind: "LinkedField",
          name: "event_reminder_members",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MessengerEventReminderMembersEdge",
              kind: "LinkedField",
              name: "edges",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: d,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "guest_list_state",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Zi = {
          alias: null,
          args: md,
          concreteType: "MessengerEventRemindersOfThreadConnection",
          kind: "LinkedField",
          name: "event_reminders",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MessengerEventReminder",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                a,
                Oi,
                of,
                Pi,
                Qi,
                Jc,
                {
                  alias: null,
                  args: null,
                  concreteType: "Page",
                  kind: "LinkedField",
                  name: "location_page",
                  plural: !1,
                  selections: [Ri],
                  storageKey: null,
                },
                Si,
                Ti,
                Ui,
                nf,
                {
                  alias: null,
                  args: null,
                  concreteType: "UserMessage",
                  kind: "LinkedField",
                  name: "trigger_message",
                  plural: !1,
                  selections: [V],
                  storageKey: null,
                },
                Vi,
                Wi,
                Xi,
                Yi,
              ],
              storageKey: null,
            },
          ],
          storageKey: "event_reminders(first:1)",
        },
        $i = {
          alias: null,
          args: null,
          concreteType: "MessageThread",
          kind: "LinkedField",
          name: "montage_thread",
          plural: !1,
          selections: d,
          storageKey: null,
        },
        aj = [Na],
        bj = {
          alias: "last_read_receipt",
          args: Ma,
          concreteType: "MessagingReadReceiptsOfThreadConnection",
          kind: "LinkedField",
          name: "read_receipts",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MessagingReadReceipt",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: aj,
              storageKey: null,
            },
          ],
          storageKey: "read_receipts(last:1)",
        },
        cj = {
          alias: "is_flagged",
          args: [{ kind: "Literal", name: "page_message_tag", value: "FLAG" }],
          kind: "ScalarField",
          name: "has_tag",
          storageKey: 'has_tag(page_message_tag:"FLAG")',
        },
        dj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label_color",
          storageKey: null,
        },
        ej = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "data_silo",
          storageKey: null,
        },
        fj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label_source",
          storageKey: null,
        },
        gj = [
          {
            alias: null,
            args: null,
            concreteType: "BusinessPresenceCustomLabel",
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: [a, b, dj, ej, fj],
            storageKey: null,
          },
        ],
        hj = {
          alias: null,
          args: null,
          concreteType: "PageMessageThreadCustomThreadLabelsConnection",
          kind: "LinkedField",
          name: "custom_thread_labels",
          plural: !1,
          selections: gj,
          storageKey: null,
        },
        ij = [a, b, Pb],
        jj = {
          alias: null,
          args: null,
          concreteType: "PageMessageThreadCustomTagsConnection",
          kind: "LinkedField",
          name: "custom_thread_tags",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "PageCustomTag",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: ij,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        kj = [
          {
            alias: null,
            args: null,
            concreteType: "BusinessPresenceCorporationLabel",
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: [a, b, dj, ej],
            storageKey: null,
          },
        ],
        lj = {
          alias: null,
          args: null,
          concreteType: "PageMessageThreadCorpThreadLabelsConnection",
          kind: "LinkedField",
          name: "corp_thread_labels",
          plural: !1,
          selections: kj,
          storageKey: null,
        },
        mj = {
          alias: null,
          args: null,
          concreteType: "PageMessageThread",
          kind: "LinkedField",
          name: "related_page_thread",
          plural: !1,
          selections: [cj, Bd, hj, jj, lj],
          storageKey: null,
        },
        nj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "call_state",
          storageKey: null,
        },
        oj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "server_info_data",
          storageKey: null,
        },
        pj = {
          alias: null,
          args: null,
          concreteType: "RtcCallData",
          kind: "LinkedField",
          name: "rtc_call_data",
          plural: !1,
          selections: [
            nj,
            oj,
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "initiator",
              plural: !1,
              selections: d,
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      ze = {
        alias: null,
        args: null,
        concreteType: "Location",
        kind: "LinkedField",
        name: "location",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "ReverseGeocodeData",
            kind: "LinkedField",
            name: "reverse_geocode",
            plural: !1,
            selections: [ze, Be],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      var qj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "inventory_count",
          storageKey: null,
        },
        rj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "delivery_types",
          storageKey: null,
        },
        sj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "c2c_shipping_eligible",
          storageKey: null,
        },
        tj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_pending",
          storageKey: null,
        },
        uj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_shipping_offered",
          storageKey: null,
        },
        vj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_sold",
          storageKey: null,
        },
        wj = {
          alias: null,
          args: null,
          concreteType: "ProductItem",
          kind: "LinkedField",
          name: "product_item",
          plural: !1,
          selections: [
            a,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_commerce_post_item",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        xj = {
          alias: null,
          args: [{ kind: "Literal", name: "site", value: "www" }],
          kind: "ScalarField",
          name: "url",
          storageKey: 'url(site:"www")',
        },
        yj = {
          alias: null,
          args: null,
          concreteType: "MarketplaceRatingState",
          kind: "LinkedField",
          name: "rating_state",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_eligible_to_rate",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        zj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_eligible",
          storageKey: null,
        },
        Aj = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MarketplaceC2CShippingSeller",
              kind: "LinkedField",
              name: "marketplace_c2c_shipping_seller",
              plural: !1,
              selections: [zj],
              storageKey: null,
            },
          ],
          type: "User",
          abstractKey: null,
        },
        Bj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label_type",
          storageKey: null,
        },
        Cj = {
          alias: null,
          args: null,
          concreteType: "MarketplaceThreadLabel",
          kind: "LinkedField",
          name: "seller_added_labels",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "label_string",
              storageKey: null,
            },
            Bj,
          ],
          storageKey: null,
        },
        Dj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "eligible_profile_selling_invoice_actions",
          storageKey: null,
        },
        Ej = {
          alias: null,
          args: null,
          concreteType: "MarketplaceThreadData",
          kind: "LinkedField",
          name: "marketplace_thread_data",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "GroupCommerceProductItem",
              kind: "LinkedField",
              name: "for_sale_item",
              plural: !1,
              selections: [
                a,
                Uc,
                ef,
                df,
                ze,
                qj,
                rj,
                sj,
                tj,
                uj,
                vj,
                {
                  alias: "primary_photo",
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "primary_listing_photo",
                  plural: !1,
                  selections: bc,
                  storageKey: null,
                },
                wj,
                xj,
              ],
              storageKey: null,
            },
            yj,
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "buyer",
              plural: !1,
              selections: d,
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "seller",
              plural: !1,
              selections: [a, Aj],
              storageKey: null,
            },
            Cj,
            Dj,
          ],
          storageKey: null,
        },
        Fj = {
          alias: "action_link",
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        Gj = {
          alias: "room_type",
          args: null,
          kind: "ScalarField",
          name: "time_spent_room_type",
          storageKey: null,
        },
        Hj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "privacy_mode",
          storageKey: null,
        },
        Ij = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "approval_mode_toggleable",
          storageKey: null,
        },
        Jj = {
          alias: null,
          args: null,
          concreteType: "MentorshipProgram",
          kind: "LinkedField",
          name: "mentorship_program",
          plural: !1,
          selections: Ld,
          storageKey: null,
        },
        Kj = [Gh],
        Lj = {
          alias: null,
          args: null,
          concreteType: "GroupSavesConnection",
          kind: "LinkedField",
          name: "group_saves",
          plural: !1,
          selections: Kj,
          storageKey: null,
        },
        Mj = {
          alias: null,
          args: [{ kind: "Literal", name: "external_ref", value: "messenger" }],
          kind: "ScalarField",
          name: "verse_group_link",
          storageKey: 'verse_group_link(external_ref:"messenger")',
        },
        Nj = {
          kind: "InlineFragment",
          selections: [b, gf],
          type: "Page",
          abstractKey: null,
        };
      Th = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "associated_object",
        plural: !1,
        selections: [
          {
            kind: "InlineFragment",
            selections: [Fj, a, b, B, Th, Gj, Hj, Ij, Jj, Lj, Mj],
            type: "Group",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              Fj,
              a,
              b,
              B,
              Gj,
              Hj,
              Ij,
              Wd,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "event_place",
                plural: !1,
                selections: [Nj],
                storageKey: null,
              },
            ],
            type: "Event",
            abstractKey: null,
          },
        ],
        storageKey: null,
      };
      var Oj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reactions_mute_mode",
          storageKey: null,
        },
        Pj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "mentions_mute_mode",
          storageKey: null,
        },
        Qj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "customization_enabled",
          storageKey: null,
        },
        Rj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "thread_type",
          storageKey: null,
        },
        Sj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "group_thread_subtype",
          storageKey: null,
        },
        Tj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "participant_add_mode_as_string",
          storageKey: null,
        },
        Uj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_canonical_neo_user",
          storageKey: null,
        };
      ti = {
        alias: null,
        args: null,
        concreteType: "MessageThreadParticipantEventStatusInfo",
        kind: "LinkedField",
        name: "participants_event_status",
        plural: !0,
        selections: [
          ti,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "event_status",
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      var Vj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "comm_status",
          storageKey: null,
        },
        Wj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "comm_source_id",
          storageKey: null,
        },
        Xj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_priority",
          storageKey: null,
        },
        Yj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "biz_inbox_tags",
          storageKey: null,
        },
        Zj = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "priority_score",
          storageKey: null,
        },
        $j = [
          a,
          b,
          {
            alias: null,
            args: [
              { kind: "Literal", name: "height", value: 20 },
              { kind: "Literal", name: "width", value: 20 },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: l,
            storageKey: "profile_picture(height:20,width:20)",
          },
        ],
        ak = {
          alias: null,
          args: null,
          concreteType: "User",
          kind: "LinkedField",
          name: "admin",
          plural: !1,
          selections: $j,
          storageKey: null,
        },
        bk = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "comm_icon_type",
          storageKey: null,
        };
      bc = {
        alias: null,
        args: null,
        concreteType: "PageCommItem",
        kind: "LinkedField",
        name: "page_comm_item",
        plural: !1,
        selections: [
          a,
          Vj,
          Wj,
          Xj,
          Yj,
          Zj,
          {
            alias: null,
            args: null,
            concreteType: "PageCommItemToPageCommItemOwnersConnection",
            kind: "LinkedField",
            name: "comm_item_owners",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "PageCommItemOwner",
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: [ak],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "subtitle",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "ImageAtRange",
                kind: "LinkedField",
                name: "image_ranges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "entity_with_image",
                    plural: !1,
                    selections: bc,
                    storageKey: null,
                  },
                  x,
                  nh,
                ],
                storageKey: null,
              },
              sh,
              e,
            ],
            storageKey: null,
          },
          bk,
        ],
        storageKey: null,
      };
      var ck = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "admin_model_status_string",
          storageKey: null,
        },
        dk = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "groups_sync_status_string",
          storageKey: null,
        };
      Ah = {
        alias: null,
        args: null,
        concreteType: "GroupsSyncMetadata",
        kind: "LinkedField",
        name: "groups_sync_metadata",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Group",
            kind: "LinkedField",
            name: "fb_group",
            plural: !1,
            selections: Ah,
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      var ek = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "pinning_time",
          storageKey: null,
        },
        fk = {
          alias: null,
          args: null,
          concreteType: "OmniMActionLite",
          kind: "LinkedField",
          name: "m_suggestions",
          plural: !0,
          selections: [
            a,
            j,
            g,
            {
              alias: null,
              args: null,
              concreteType: "OmniMActionDataLite",
              kind: "LinkedField",
              name: "data",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "OmniMActionReminderDataLite",
                  kind: "LinkedField",
                  name: "reminder",
                  plural: !1,
                  selections: [
                    bi,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "topic",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            Hc,
          ],
          storageKey: null,
        },
        gk = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "offline_threading_id",
          storageKey: null,
        },
        hk = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "email",
          storageKey: null,
        },
        ik = {
          alias: null,
          args: null,
          concreteType: "MessagingParticipant",
          kind: "LinkedField",
          name: "message_sender",
          plural: !1,
          selections: [a, hk],
          storageKey: null,
        },
        jk = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "ttl",
          storageKey: null,
        },
        kk = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "unread",
          storageKey: null,
        },
        lk = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_sponsored",
          storageKey: null,
        },
        mk = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "ad_client_token",
          storageKey: null,
        },
        nk = {
          alias: null,
          args: null,
          concreteType: "MessageCustomization",
          kind: "LinkedField",
          name: "customizations",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "customization_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "customization_value",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        ok = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tags_list",
          storageKey: null,
        },
        pk = {
          alias: null,
          args: null,
          concreteType: "MessageSourceData",
          kind: "LinkedField",
          name: "message_source_data",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "message_source",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        qk = {
          alias: null,
          args: null,
          concreteType: "MontageReplyData",
          kind: "LinkedField",
          name: "montage_reply_data",
          plural: !1,
          selections: [
            V,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "reply_action",
              storageKey: null,
            },
            c,
          ],
          storageKey: null,
        },
        rk = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reaction",
          storageKey: null,
        },
        sk = {
          alias: null,
          args: null,
          concreteType: "MessageReaction",
          kind: "LinkedField",
          name: "message_reactions",
          plural: !0,
          selections: [
            rk,
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "user",
              plural: !1,
              selections: d,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        tk = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "unsent_timestamp_precise",
          storageKey: null,
        },
        uk = {
          alias: null,
          args: null,
          concreteType: "MessagingParticipant",
          kind: "LinkedField",
          name: "unsender",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "messaging_actor",
              plural: !1,
              selections: [a, b, zh],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        vk = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "verse_group_role_xmd",
          storageKey: null,
        },
        wk = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "secondary_language_body",
          storageKey: null,
        },
        xk = {
          kind: "InlineFragment",
          selections: d,
          type: "Profile",
          abstractKey: "__isProfile",
        },
        yk = {
          kind: "InlineFragment",
          selections: d,
          type: "MessengerViewerGroupThread",
          abstractKey: null,
        };
      Ka = {
        kind: "InlineFragment",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "MessageThreadKey",
            kind: "LinkedField",
            name: "thread_key",
            plural: !1,
            selections: [Ka],
            storageKey: null,
          },
        ],
        type: "MessageThread",
        abstractKey: null,
      };
      var zk = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "message_profile_range_type",
          storageKey: null,
        },
        Ak = {
          alias: null,
          args: null,
          concreteType: "MetaAtRange",
          kind: "LinkedField",
          name: "meta_ranges",
          plural: !0,
          selections: [x, nh, g, qh],
          storageKey: null,
        };
      Bj = {
        alias: null,
        args: null,
        concreteType: "MessagePageAdminSender",
        kind: "LinkedField",
        name: "page_admin_sender",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "admin_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "sender_type",
            storageKey: null,
          },
          b,
          Bj,
          v,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "profile_uri",
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      N = {
        kind: "InlineFragment",
        selections: [
          wk,
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "message",
            plural: !1,
            selections: [
              e,
              {
                alias: null,
                args: null,
                concreteType: "EntityAtRange",
                kind: "LinkedField",
                name: "ranges",
                plural: !0,
                selections: [
                  x,
                  nh,
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "entity",
                    plural: !1,
                    selections: [z, xk, yk, Ka],
                    storageKey: null,
                  },
                  zk,
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          Ak,
          N,
          H,
          u,
          Bj,
        ],
        type: "UserMessage",
        abstractKey: null,
      };
      u = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "answered",
        storageKey: null,
      };
      var Bk = {
        kind: "InlineFragment",
        selections: [u, c],
        type: "VoiceCallMessage",
        abstractKey: null,
      };
      U = [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "node",
          plural: !1,
          selections: U,
          storageKey: null,
        },
      ];
      var Ck = {
          kind: "InlineFragment",
          selections: [
            u,
            c,
            {
              alias: null,
              args: null,
              concreteType: "VideoCallMessageToCaptureAttachmentsConnection",
              kind: "LinkedField",
              name: "call_capture_attachments",
              plural: !1,
              selections: [
                Gh,
                {
                  alias: null,
                  args: null,
                  concreteType: "VideoCallMessageToCaptureAttachmentsEdge",
                  kind: "LinkedField",
                  name: "edges",
                  plural: !0,
                  selections: U,
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "VideoCallMessage",
          abstractKey: null,
        },
        Dk = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "thread_name",
              storageKey: null,
            },
            c,
          ],
          type: "ThreadNameMessage",
          abstractKey: null,
        };
      Ug = {
        alias: "preview",
        args: Ug,
        concreteType: "Image",
        kind: "LinkedField",
        name: "image",
        plural: !1,
        selections: l,
        storageKey: "image(height:280,width:280)",
      };
      var Ek = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MessageImage",
              kind: "LinkedField",
              name: "image_with_metadata",
              plural: !1,
              selections: [Ug, Pa, Cc],
              storageKey: null,
            },
            c,
          ],
          type: "ThreadImageMessage",
          abstractKey: null,
        },
        Fk = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MessagingParticipant",
              kind: "LinkedField",
              name: "participants_added",
              plural: !0,
              selections: d,
              storageKey: null,
            },
            c,
          ],
          type: "ParticipantsAddedMessage",
          abstractKey: null,
        },
        Gk = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MessagingParticipant",
              kind: "LinkedField",
              name: "participants_removed",
              plural: !0,
              selections: d,
              storageKey: null,
            },
            c,
          ],
          type: "ParticipantLeftMessage",
          abstractKey: null,
        },
        Hk = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "viewer_has_voted",
          storageKey: null,
        };
      Hk = {
        kind: "InlineFragment",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "event_type",
            storageKey: null,
          },
          {
            alias: "total_count",
            args: null,
            kind: "ScalarField",
            name: "option_count",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Question",
            kind: "LinkedField",
            name: "question",
            plural: !1,
            selections: [
              a,
              e,
              Hk,
              {
                alias: null,
                args: [
                  { kind: "Literal", name: "orderby", value: "creation_time" },
                ],
                concreteType: "QuestionOptionsConnection",
                kind: "LinkedField",
                name: "options",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "QuestionOption",
                    kind: "LinkedField",
                    name: "nodes",
                    plural: !0,
                    selections: [
                      a,
                      e,
                      Hk,
                      {
                        alias: null,
                        args: null,
                        concreteType: "QuestionOptionVotersConnection",
                        kind: "LinkedField",
                        name: "voters",
                        plural: !1,
                        selections: Li,
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: 'options(orderby:"creation_time")',
              },
            ],
            storageKey: null,
          },
        ],
        type: "GroupPollExtensibleMessageAdminText",
        abstractKey: null,
      };
      Li = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "display_name",
        storageKey: null,
      };
      gg = {
        alias: null,
        args: null,
        concreteType: "MessengerEventReminder",
        kind: "LinkedField",
        name: "event_reminder",
        plural: !1,
        selections: [
          a,
          of,
          nf,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "end_time",
            storageKey: null,
          },
          Qi,
          Pi,
          Wi,
          Vi,
          Oi,
          {
            alias: null,
            args: null,
            concreteType: "Page",
            kind: "LinkedField",
            name: "location_page",
            plural: !1,
            selections: d,
            storageKey: null,
          },
          Jc,
          {
            alias: null,
            args: null,
            concreteType: "TimezoneInfo",
            kind: "LinkedField",
            name: "timezone_id",
            plural: !1,
            selections: [
              Li,
              gg,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "timezone_id",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          Yi,
        ],
        storageKey: null,
      };
      var W = [gg],
        Ik = {
          kind: "InlineFragment",
          selections: W,
          type: "LightweightEventCreateExtensibleMessageAdminText",
          abstractKey: null,
        },
        Jk = {
          kind: "InlineFragment",
          selections: W,
          type: "LightweightEventDeleteExtensibleMessageAdminText",
          abstractKey: null,
        },
        Kk = {
          kind: "InlineFragment",
          selections: W,
          type: "LightweightEventNotifyBeforeEventExtensibleMessageAdminText",
          abstractKey: null,
        },
        Lk = {
          kind: "InlineFragment",
          selections: W,
          type: "LightweightEventNotifyExtensibleMessageAdminText",
          abstractKey: null,
        },
        Mk = {
          kind: "InlineFragment",
          selections: W,
          type: "LightweightEventUpdateExtensibleMessageAdminText",
          abstractKey: null,
        },
        Nk = {
          kind: "InlineFragment",
          selections: W,
          type: "LightweightEventUpdateLocationExtensibleMessageAdminText",
          abstractKey: null,
        },
        Ok = {
          kind: "InlineFragment",
          selections: W,
          type: "LightweightEventUpdateTimeExtensibleMessageAdminText",
          abstractKey: null,
        };
      W = {
        kind: "InlineFragment",
        selections: W,
        type: "LightweightEventUpdateTitleExtensibleMessageAdminText",
        abstractKey: null,
      };
      var Pk = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "guest_id",
        storageKey: null,
      };
      gg = {
        kind: "InlineFragment",
        selections: [
          Pk,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "guest_status",
            storageKey: null,
          },
          gg,
        ],
        type: "LightweightEventRSVPExtensibleMessageAdminText",
        abstractKey: null,
      };
      var Qk = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "theme_color",
              storageKey: null,
            },
          ],
          type: "ThemeColorExtensibleMessageAdminText",
          abstractKey: null,
        },
        Rk = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "thread_icon",
              storageKey: null,
            },
          ],
          type: "ThreadIconExtensibleMessageAdminText",
          abstractKey: null,
        };
      ui = {
        kind: "InlineFragment",
        selections: [
          ui,
          {
            alias: "participant_id",
            args: null,
            kind: "ScalarField",
            name: "target_id",
            storageKey: null,
          },
        ],
        type: "ThreadNicknameExtensibleMessageAdminText",
        abstractKey: null,
      };
      var Sk = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "accepter_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "requester_id",
              storageKey: null,
            },
          ],
          type: "AcceptPendingThreadExtensibleMessageAdminText",
          abstractKey: null,
        },
        Tk = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "contact_added_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "contact_adder_id",
              storageKey: null,
            },
          ],
          type: "AddContactExtensibleMessageAdminText",
          abstractKey: null,
        },
        Uk = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "event",
          storageKey: null,
        },
        Vk = {
          kind: "InlineFragment",
          selections: [
            Uk,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_video_call",
              storageKey: null,
            },
            oj,
          ],
          type: "RtcCallLogExtensibleMessageAdminText",
          abstractKey: null,
        },
        Wk = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "collapsed_text",
          storageKey: null,
        },
        Xk = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "expanded_text",
          storageKey: null,
        },
        Yk = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cta_url",
          storageKey: null,
        },
        Zk = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "template",
          storageKey: null,
        },
        $k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "leaderboard_json",
          storageKey: null,
        },
        al = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "game_type",
              storageKey: null,
            },
          ],
          type: "GameScoreExtensibleMessageAdminText",
          abstractKey: null,
        },
        bl = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "parties_user_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "parties_invite_type",
              storageKey: null,
            },
          ],
          type: "PartiesInviteExtensibleMessageAdminText",
          abstractKey: null,
        },
        cl = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "icebreaker_type",
          storageKey: null,
        },
        dl = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "icebreaker_title",
          storageKey: null,
        },
        el = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "icebreaker_subtitle",
          storageKey: null,
        },
        fl = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "vote_buttons_with_icons",
          storageKey: null,
        },
        gl = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "friend_request_recipient",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "friend_request_sender",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "friend_request_subtype",
              storageKey: null,
            },
            cl,
            dl,
            el,
            fl,
          ],
          type: "ConfirmFriendRequestExtensibleMessageAdminText",
          abstractKey: null,
        },
        hl = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "sender_id",
          storageKey: null,
        },
        il = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "bump_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "recipient_id",
              storageKey: null,
            },
            hl,
            h,
            I,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "icon_uri",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "image_uri",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "facepile_ids",
              storageKey: null,
            },
            ei,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "cta_uri",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "admin_message_string",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "banner_uri",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_two_way",
              storageKey: null,
            },
          ],
          type: "MessengerGrowthGenericExtensibleMessageAdminText",
          abstractKey: null,
        },
        jl = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "submitted_time",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "form_conversation_instance_id",
              storageKey: null,
            },
          ],
          type: "BizInboxFormBuilderSubmitNotifyAdminText",
          abstractKey: null,
        },
        kl = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "customer_name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "rating_feedback",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "freeform_feedback",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "instance_id",
              storageKey: null,
            },
          ],
          type: "BizInboxCSATSurveyCustomerSubmitNotifyAdminText",
          abstractKey: null,
        },
        ll = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cta_text",
          storageKey: null,
        },
        ml = {
          kind: "InlineFragment",
          selections: [
            Jd,
            ll,
            Yk,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "async_url",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "www_is_async_url",
              storageKey: null,
            },
          ],
          type: "LinkCTAExtensibleMessageAdminText",
          abstractKey: null,
        },
        nl = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "referer_uri",
              storageKey: null,
            },
          ],
          type: "MessengerLiveChatPluginURLUpdateAdminText",
          abstractKey: null,
        },
        ol = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "fb_user_name",
              storageKey: null,
            },
          ],
          type: "MessengerLiveChatPluginFBUserStartChatAdminText",
          abstractKey: null,
        };
      Hc = {
        kind: "InlineFragment",
        selections: [Hc],
        type: "MessengerLiveChatPluginGuestUserStartChatAdminText",
        abstractKey: null,
      };
      ll = {
        kind: "InlineFragment",
        selections: [
          ll,
          Yk,
          V,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "recipient_is_the_sender",
            storageKey: null,
          },
        ],
        type: "WorkChatReminderLinkCTAExtensibleMessageAdminText",
        abstractKey: null,
      };
      var pl = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "post_uri",
              storageKey: null,
            },
          ],
          type: "PostSharedFromGroupExtensibleMessageAdminText",
          abstractKey: null,
        },
        ql = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "ad_url",
          storageKey: null,
        },
        rl = {
          kind: "InlineFragment",
          selections: [ql],
          type: "MessengerAdContextAdminText",
          abstractKey: null,
        },
        sl = {
          kind: "InlineFragment",
          selections: [
            mk,
            Qg,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "ad_preferences_link",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "ad_properties",
              storageKey: null,
            },
          ],
          type: "AdExtensibleMessageAdminText",
          abstractKey: null,
        },
        tl = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "page_name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "start_time",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "product_name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "user_name",
              storageKey: null,
            },
          ],
          type: "AppointmentReminderExtensibleMessageAdminText",
          abstractKey: null,
        },
        ul = [v],
        vl = {
          kind: "InlineFragment",
          selections: ul,
          type: "GraphQLServicesAppointmentsOptOutExtensibleMessageAdminText",
          abstractKey: null,
        },
        wl = {
          kind: "InlineFragment",
          selections: ul,
          type: "ServicesLeadGenSurveyExtensibleMessageAdminText",
          abstractKey: null,
        };
      ul = {
        kind: "InlineFragment",
        selections: ul,
        type: "ServicesLeadGenSurveyEditExtensibleMessageAdminText",
        abstractKey: null,
      };
      var xl = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "caller_id",
          storageKey: null,
        },
        yl = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "callee_id",
          storageKey: null,
        },
        zl = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "conference_name",
          storageKey: null,
        },
        Al = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "server_info",
          storageKey: null,
        },
        Bl = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "video",
          storageKey: null,
        },
        Cl = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "call_duration",
          storageKey: null,
        },
        Dl = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "rating",
          storageKey: null,
        };
      cl = {
        kind: "InlineFragment",
        selections: [
          cl,
          dl,
          el,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "votes_cast",
            storageKey: null,
          },
          fl,
        ],
        type: "MessengerIcebreakerVoteCastExtensibleMessageAdminText",
        abstractKey: null,
      };
      dl = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "user_id",
        storageKey: null,
      };
      el = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "currency_code",
        storageKey: null,
      };
      fl = [
        v,
        dl,
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "receipt_photo_id",
          storageKey: null,
        },
        el,
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "detection_type",
          storageKey: null,
        },
      ];
      var El = {
        kind: "InlineFragment",
        selections: fl,
        type: "PagesMarkAsPaidExtensibleMessageAdminText",
        abstractKey: null,
      };
      fl = {
        kind: "InlineFragment",
        selections: fl,
        type: "PagesMarkAsPaidNewExtensibleMessageAdminText",
        abstractKey: null,
      };
      var Fl = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "interaction_id",
          storageKey: null,
        },
        Gl = {
          kind: "InlineFragment",
          selections: [
            v,
            dl,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "interaction_type",
              storageKey: null,
            },
            Fl,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "should_show_cta",
              storageKey: null,
            },
          ],
          type: "PageThreadActionSystemAddDetailsXMAT",
          abstractKey: null,
        },
        Hl = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Page",
              kind: "LinkedField",
              name: "bot_page",
              plural: !1,
              selections: d,
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "show_landing_page",
              storageKey: null,
            },
          ],
          type: "WorkBotInstalledExtensibleMessageAdminText",
          abstractKey: null,
        };
      ql = {
        kind: "InlineFragment",
        selections: [
          ql,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "should_show_url",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "results_url",
            storageKey: null,
          },
        ],
        type: "AdReplyMessageAdminText",
        abstractKey: null,
      };
      var Il = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "new_magic_word_count",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "magic_word",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "emoji_effect",
              storageKey: null,
            },
          ],
          type: "MagicWordsExtensibleMessageAdminText",
          abstractKey: null,
        },
        Jl = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "token_ent_id_string",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "user_action_type",
              storageKey: null,
            },
          ],
          type: "NotificationMessagesAdminText",
          abstractKey: null,
        },
        Kl = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "admin_assigner_name",
          storageKey: null,
        },
        Ll = {
          kind: "InlineFragment",
          selections: [
            Kl,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "assigned_admin_name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "assign_conversation",
              storageKey: null,
            },
          ],
          type: "BizInboxAssignAdminAdminText",
          abstractKey: null,
        };
      Kl = {
        kind: "InlineFragment",
        selections: [
          Kl,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "note_input",
            storageKey: null,
          },
        ],
        type: "BizInboxAdminAssignmentNoteAdminText",
        abstractKey: null,
      };
      var Ml = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "email_thread_id",
              storageKey: null,
            },
          ],
          type: "BizInboxOmnichannelEmailSentAdminText",
          abstractKey: null,
        },
        Nl = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "user_subscription_management_action_type",
              storageKey: null,
            },
          ],
          type: "InstantGameBotMessageSubscriptionManagementAdminText",
          abstractKey: null,
        },
        Ol = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "user_mute_management_action_type",
              storageKey: null,
            },
          ],
          type: "InstantGameCustomUpdateMuteManagementAdminText",
          abstractKey: null,
        };
      Mh = {
        kind: "InlineFragment",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "extensible_message_admin_text",
            plural: !1,
            selections: [
              z,
              Hk,
              Ik,
              Jk,
              Kk,
              Lk,
              Mk,
              Nk,
              Ok,
              W,
              gg,
              Qk,
              Rk,
              ui,
              Sk,
              Tk,
              Vk,
              {
                kind: "InlineFragment",
                selections: [
                  hb,
                  og,
                  Wk,
                  Xk,
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "instant_game_update_data",
                    plural: !1,
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: [Yk, ei, Mh, Zk],
                        type: "InstantGameXMATCustomMessageClientData",
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  $k,
                ],
                type: "InstantGameUpdateExtensibleMessageAdminText",
                abstractKey: null,
              },
              al,
              bl,
              gl,
              il,
              jl,
              kl,
              ml,
              nl,
              ol,
              Hc,
              ll,
              pl,
              rl,
              sl,
              tl,
              vl,
              wl,
              ul,
              {
                kind: "InlineFragment",
                selections: [
                  xl,
                  yl,
                  zl,
                  Uk,
                  Al,
                  Bl,
                  Cl,
                  Dl,
                  {
                    alias: null,
                    args: null,
                    concreteType:
                      "MessengerCallLogExtensibleMessageAdminTextCallCaptureAttachmentsConnection",
                    kind: "LinkedField",
                    name: "call_capture_attachments",
                    plural: !1,
                    selections: [
                      Gh,
                      {
                        alias: null,
                        args: null,
                        concreteType:
                          "MessengerCallLogExtensibleMessageAdminTextCallCaptureAttachmentsEdge",
                        kind: "LinkedField",
                        name: "edges",
                        plural: !0,
                        selections: U,
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                type: "MessengerCallLogExtensibleMessageAdminText",
                abstractKey: null,
              },
              cl,
              El,
              fl,
              Gl,
              Hl,
              ql,
              Il,
              Jl,
              Ll,
              Kl,
              Ml,
              Nl,
              Ol,
            ],
            storageKey: null,
          },
          ab,
          c,
        ],
        type: "GenericAdminTextMessage",
        abstractKey: null,
      };
      U = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "transfer_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "message_type",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "CurrencyQuantity",
          kind: "LinkedField",
          name: "amount",
          plural: !1,
          selections: ec,
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "MessagingParticipant",
          kind: "LinkedField",
          name: "p2p_sender",
          plural: !1,
          selections: d,
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "MessagingParticipant",
          kind: "LinkedField",
          name: "p2p_receiver",
          plural: !1,
          selections: d,
          storageKey: null,
        },
        c,
      ];
      ec = {
        kind: "InlineFragment",
        selections: U,
        type: "P2PPaymentRequestMessage",
        abstractKey: null,
      };
      U = {
        kind: "InlineFragment",
        selections: U,
        type: "P2PPaymentMessage",
        abstractKey: null,
      };
      sk = [
        fk,
        z,
        V,
        gk,
        ik,
        jk,
        Na,
        kk,
        lk,
        Qg,
        mk,
        Oa,
        nk,
        ok,
        K,
        pk,
        qk,
        sk,
        tk,
        uk,
        vk,
        M,
        N,
        Bk,
        Ck,
        Dk,
        Ek,
        Fk,
        Gk,
        Mh,
        ec,
        U,
        {
          alias: null,
          args: null,
          concreteType: "RepliedToMessage",
          kind: "LinkedField",
          name: "replied_to_message",
          plural: !1,
          selections: [
            sd,
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "message",
              plural: !1,
              selections: [
                fk,
                z,
                V,
                gk,
                ik,
                jk,
                Na,
                kk,
                lk,
                Qg,
                mk,
                Oa,
                nk,
                ok,
                K,
                pk,
                qk,
                sk,
                tk,
                uk,
                vk,
                M,
                N,
                Bk,
                Ck,
                Dk,
                Ek,
                Fk,
                Gk,
                Mh,
                ec,
                U,
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      uk = {
        alias: null,
        args: null,
        concreteType: "PinnedMessageData",
        kind: "LinkedField",
        name: "pinned_messages",
        plural: !0,
        selections: [
          V,
          ek,
          {
            condition: "threadlistViewFieldsOnly",
            kind: "Condition",
            passingValue: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "message",
                plural: !1,
                selections: sk,
                storageKey: null,
              },
            ],
          },
        ],
        storageKey: null,
      };
      N = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_default_child_group",
        storageKey: null,
      };
      Ck = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "emoji_codepoints",
        storageKey: null,
      };
      Ek = {
        alias: null,
        args: null,
        concreteType: "GroupsSyncMetadata",
        kind: "LinkedField",
        name: "work_groups_sync_metadata",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Group",
            kind: "LinkedField",
            name: "fb_group",
            plural: !1,
            selections: [
              m,
              a,
              b,
              Qh,
              N,
              B,
              Lj,
              {
                alias: null,
                args: null,
                concreteType: "MultiBackgroundIcon",
                kind: "LinkedField",
                name: "group_icon",
                plural: !1,
                selections: [Ck],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      Mh = {
        condition: "threadlistViewFieldsOnly",
        kind: "Condition",
        passingValue: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "saved_messages",
            plural: !0,
            selections: sk,
            storageKey: null,
          },
        ],
      };
      var Pl = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "joinable_link",
          storageKey: null,
        },
        Ql = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_fuss_red_page",
          storageKey: null,
        },
        Rl = {
          alias: null,
          args: null,
          concreteType: "Group",
          kind: "LinkedField",
          name: "program_group",
          plural: !1,
          selections: [
            a,
            {
              alias: null,
              args: [
                { kind: "Literal", name: "height", value: 24 },
                { kind: "Literal", name: "width", value: 24 },
              ],
              concreteType: "Image",
              kind: "LinkedField",
              name: "profile_picture",
              plural: !1,
              selections: l,
              storageKey: "profile_picture(height:24,width:24)",
            },
          ],
          storageKey: null,
        };
      Ld = {
        alias: null,
        args: null,
        concreteType: "Group",
        kind: "LinkedField",
        name: "mentorship_group",
        plural: !1,
        selections: Ld,
        storageKey: null,
      };
      var Sl = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "banner_title",
          storageKey: null,
        },
        Tl = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "banner_subtitle",
          storageKey: null,
        },
        Ul = {
          alias: null,
          args: md,
          concreteType: "MessengerMentorshipProgramOfThreadConnection",
          kind: "LinkedField",
          name: "linked_mentorship_programs",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MentorshipProgram",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                a,
                Rl,
                Ld,
                {
                  alias: null,
                  args: md,
                  concreteType:
                    "MentorshipProgramToMentorshipMessengerCurriculumStepOrderByStepCountConnection",
                  kind: "LinkedField",
                  name: "messenger_curriculum_steps",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "MentorshipMessengerCurriculumStep",
                      kind: "LinkedField",
                      name: "nodes",
                      plural: !0,
                      selections: [Sl, Tl],
                      storageKey: null,
                    },
                  ],
                  storageKey: "messenger_curriculum_steps(first:1)",
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: "linked_mentorship_programs(first:1)",
        },
        Vl = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "thread_unsendability_status",
          storageKey: null,
        },
        Wl = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "thread_pin_timestamp",
          storageKey: null,
        },
        Xl = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_business_page_active",
          storageKey: null,
        },
        Yl = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "trigger_id",
          storageKey: null,
        };
      zj = {
        alias: null,
        args: null,
        concreteType: "ConversionDetectionData",
        kind: "LinkedField",
        name: "conversion_detection_data",
        plural: !1,
        selections: [
          zj,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "conversion_type",
            storageKey: null,
          },
          el,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "currency_amount",
            storageKey: null,
          },
          {
            alias: "timestamp",
            args: null,
            kind: "ScalarField",
            name: "timestamp_graphql_time",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "page_reply",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "icebreaker_key",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "icebreaker_message",
            storageKey: null,
          },
          Yl,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "shipping_provider",
            storageKey: null,
          },
          dg,
        ],
        storageKey: null,
      };
      el = {
        alias: null,
        args: null,
        concreteType: "SuggestedReplyData",
        kind: "LinkedField",
        name: "suggested_reply_data",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "suggestion_type",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "suggestion_content",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "triggered_timestamp",
            storageKey: null,
          },
          Yl,
        ],
        storageKey: null,
      };
      Yl = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "admin_type",
        storageKey: null,
      };
      var Zl = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "gender",
          storageKey: null,
        },
        X = {
          alias: "big_image_src",
          args: [
            { kind: "Literal", name: "height", value: 60 },
            { kind: "Literal", name: "width", value: 60 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: l,
          storageKey: "profile_picture(height:60,width:60)",
        },
        $l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "username",
          storageKey: null,
        },
        am = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_viewer_friend",
          storageKey: null,
        },
        bm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_messenger_user",
          storageKey: null,
        },
        cm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_message_blocked_by_viewer",
          storageKey: null,
        },
        dm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_viewer_coworker",
          storageKey: null,
        },
        em = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_employee",
          storageKey: null,
        },
        fm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_aloha_proxy_confirmed",
          storageKey: null,
        },
        gm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "company_title",
          storageKey: null,
        };
      R = {
        alias: null,
        args: null,
        concreteType: "WorkUserInfo",
        kind: "LinkedField",
        name: "work_info",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Group",
            kind: "LinkedField",
            name: "work_community",
            plural: !1,
            selections: R,
            storageKey: null,
          },
          Nh,
        ],
        storageKey: null,
      };
      var hm = {
          kind: "InlineFragment",
          selections: [
            Zl,
            m,
            X,
            Tb,
            am,
            bm,
            cm,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_viewer_managing_parent",
              storageKey: null,
            },
          ],
          type: "NeoApprovedUser",
          abstractKey: null,
        },
        im = {
          kind: "InlineFragment",
          selections: [
            m,
            X,
            $l,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "accepts_messenger_user_feedback",
              storageKey: null,
            },
            bm,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_messenger_platform_bot",
              storageKey: null,
            },
            cm,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_viewer_subscribed_to_message_updates",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "InstantGameChannelInfo",
              kind: "LinkedField",
              name: "instant_game_channel",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Application",
                  kind: "LinkedField",
                  name: "application",
                  plural: !1,
                  selections: d,
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "verification_status",
              storageKey: null,
            },
          ],
          type: "Page",
          abstractKey: null,
        },
        jm = [m, X, cm],
        km = {
          kind: "InlineFragment",
          selections: jm,
          type: "SmsMessagingParticipant",
          abstractKey: null,
        },
        lm = {
          kind: "InlineFragment",
          selections: [X, cm],
          type: "InstagramMessagingUser",
          abstractKey: null,
        },
        mm = [X],
        nm = {
          kind: "InlineFragment",
          selections: mm,
          type: "LiveChatOnlyPerson",
          abstractKey: null,
        };
      jm = {
        kind: "InlineFragment",
        selections: jm,
        type: "UnavailableMessagingActor",
        abstractKey: null,
      };
      var om = {
          kind: "InlineFragment",
          selections: mm,
          type: "UnifiedMessagingInstagramUser",
          abstractKey: null,
        },
        pm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_blocked_by_viewer",
          storageKey: null,
        },
        qm = [m, X, $l],
        rm = {
          kind: "InlineFragment",
          selections: qm,
          type: "Group",
          abstractKey: null,
        };
      qm = {
        kind: "InlineFragment",
        selections: qm,
        type: "Event",
        abstractKey: null,
      };
      j = {
        kind: "InlineFragment",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "WorkForeignEntityInfo",
            kind: "LinkedField",
            name: "work_foreign_entity_info",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "detail",
                storageKey: null,
              },
              j,
              g,
            ],
            storageKey: null,
          },
        ],
        type: "WorkForeignEntity",
        abstractKey: "__isWorkForeignEntity",
      };
      var sm = {
          kind: "InlineFragment",
          selections: [m, X, Tb, cm],
          type: "XFBWorkroomsBaseUser",
          abstractKey: "__isXFBWorkroomsBaseUser",
        },
        tm = {
          kind: "InlineFragment",
          selections: mm,
          type: "MessengerCallGuestUser",
          abstractKey: null,
        },
        um = {
          kind: "InlineFragment",
          selections: mm,
          type: "WorkVCEndpointUser",
          abstractKey: null,
        },
        vm = {
          kind: "InlineFragment",
          selections: mm,
          type: "WECMailboxAccount",
          abstractKey: null,
        };
      mm = {
        kind: "InlineFragment",
        selections: mm,
        type: "WECCustomer",
        abstractKey: null,
      };
      var wm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "wec_group_creation_time",
          storageKey: null,
        },
        xm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "wec_group_invite_link",
          storageKey: null,
        };
      Md = {
        alias: null,
        args: null,
        concreteType: "MessagingParticipant",
        kind: "LinkedField",
        name: "nodes",
        plural: !0,
        selections: Md,
        storageKey: null,
      };
      R = {
        alias: null,
        args: null,
        concreteType: "AllMessagingParticipantsOfThreadConnection",
        kind: "LinkedField",
        name: "all_participants",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "AllMessagingParticipantsOfThreadEdge",
            kind: "LinkedField",
            name: "edges",
            plural: !0,
            selections: [
              Yl,
              {
                alias: null,
                args: null,
                concreteType: "MessagingParticipant",
                kind: "LinkedField",
                name: "node",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "messaging_actor",
                    plural: !1,
                    selections: [
                      a,
                      z,
                      b,
                      {
                        kind: "InlineFragment",
                        selections: [
                          Zl,
                          m,
                          X,
                          Tb,
                          $l,
                          am,
                          bm,
                          cm,
                          dm,
                          em,
                          fm,
                          {
                            alias: null,
                            args: null,
                            concreteType: "ScimCompanyUser",
                            kind: "LinkedField",
                            name: "scim_company_user",
                            plural: !1,
                            selections: [gm],
                            storageKey: null,
                          },
                          R,
                        ],
                        type: "User",
                        abstractKey: null,
                      },
                      hm,
                      im,
                      km,
                      lm,
                      nm,
                      jm,
                      om,
                      {
                        kind: "InlineFragment",
                        selections: [m, X, $l, pm, cm, R],
                        type: "ReducedMessagingActor",
                        abstractKey: null,
                      },
                      rm,
                      qm,
                      j,
                      sm,
                      tm,
                      um,
                      vm,
                      mm,
                      {
                        kind: "InlineFragment",
                        selections: [
                          X,
                          wm,
                          xm,
                          {
                            alias: null,
                            args: null,
                            concreteType: "WECGroupParticipantsConnection",
                            kind: "LinkedField",
                            name: "wec_group_participants",
                            plural: !1,
                            selections: [Md, Gh],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: "WECGroupAdminsConnection",
                            kind: "LinkedField",
                            name: "wec_group_admins",
                            plural: !1,
                            selections: [Md],
                            storageKey: null,
                          },
                        ],
                        type: "WECGroupRecipient",
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      Md = {
        alias: "watermark",
        args: null,
        kind: "ScalarField",
        name: "timestamp_precise",
        storageKey: null,
      };
      var ym = {
          alias: "action",
          args: null,
          kind: "ScalarField",
          name: "action_timestamp_precise",
          storageKey: null,
        },
        zm = {
          alias: null,
          args: null,
          concreteType: "MessagingReadReceiptsOfThreadConnection",
          kind: "LinkedField",
          name: "read_receipts",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MessagingReadReceipt",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                Md,
                ym,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "actor",
                  plural: !1,
                  selections: d,
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      aj = [
        {
          alias: null,
          args: null,
          concreteType: "MessagingDeliveryReceiptsOfThreadConnection",
          kind: "LinkedField",
          name: "delivery_receipts",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MessagingDeliveryReceipt",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: aj,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      var Am = {
          condition: "includeDeliveryReceipts",
          kind: "Condition",
          passingValue: !0,
          selections: aj,
        },
        Bm = [
          Ja,
          {
            alias: null,
            args: null,
            concreteType: "MessageThread",
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: [
              a,
              La,
              b,
              Ta,
              Sg,
              Xg,
              p,
              P,
              wc,
              vc,
              yc,
              ac,
              zc,
              Q,
              ed,
              gi,
              hi,
              ii,
              ji,
              ki,
              li,
              mi,
              ni,
              oi,
              pi,
              qi,
              ri,
              xi,
              Gi,
              Hi,
              Ii,
              Ji,
              Ki,
              Ni,
              Zi,
              $i,
              bj,
              mj,
              pj,
              Ej,
              Th,
              Hj,
              Oj,
              Pj,
              Qj,
              Rj,
              Sj,
              Tj,
              Uj,
              ti,
              bc,
              ck,
              dk,
              Ah,
              uk,
              Ek,
              Mh,
              I,
              Pl,
              Ql,
              Ul,
              Vl,
              Wl,
              Xl,
              zj,
              el,
              R,
              zm,
              Am,
            ],
            storageKey: null,
          },
        ],
        Cm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "instagram_user_id",
          storageKey: null,
        },
        Dm = [Cm, B],
        Em = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "unseen_count",
          storageKey: null,
        },
        Fm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "token",
          storageKey: null,
        },
        Gm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "thread_id",
          storageKey: null,
        },
        Hm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "thread_v2_id",
          storageKey: null,
        },
        Im = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "instagram_message_thread_type",
          storageKey: null,
        },
        Jm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "thread_title",
          storageKey: null,
        },
        Km = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_group",
          storageKey: null,
        },
        Lm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "last_activity_at",
          storageKey: null,
        },
        Mm = {
          alias: null,
          args: null,
          concreteType: "IGThreadLastSeenUser",
          kind: "LinkedField",
          name: "last_seen_at",
          plural: !0,
          selections: [Oe, bi, dl],
          storageKey: null,
        },
        Nm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "media_type",
          storageKey: null,
        },
        Om = {
          alias: null,
          args: null,
          concreteType: "IGThreadDirectStoryData",
          kind: "LinkedField",
          name: "direct_story",
          plural: !1,
          selections: [Em, Nm],
          storageKey: null,
        };
      gj = {
        alias: null,
        args: null,
        concreteType: "InstagramMessageThreadThreadLabelsConnection",
        kind: "LinkedField",
        name: "thread_labels",
        plural: !1,
        selections: gj,
        storageKey: null,
      };
      kj = {
        alias: null,
        args: null,
        concreteType: "InstagramMessageThreadThreadCorpLabelsConnection",
        kind: "LinkedField",
        name: "thread_corp_labels",
        plural: !1,
        selections: kj,
        storageKey: null,
      };
      $j = {
        alias: null,
        args: null,
        concreteType: "User",
        kind: "LinkedField",
        name: "assigned_admin",
        plural: !1,
        selections: $j,
        storageKey: null,
      };
      var Pm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_follow_up",
          storageKey: null,
        },
        Qm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_read",
          storageKey: null,
        },
        Rm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "business_thread_folder",
          storageKey: null,
        },
        Sm = {
          alias: null,
          args: null,
          concreteType: "IGThreadUserNodesData",
          kind: "LinkedField",
          name: "thread_users",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "IGThreadUserData",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                Cm,
                $l,
                b,
                {
                  alias: null,
                  args: null,
                  concreteType: "IGThreadUserProfilePic",
                  kind: "LinkedField",
                  name: "profile_picture",
                  plural: !1,
                  selections: l,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "blocking",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_verified",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Tm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "input_mode",
          storageKey: null,
        },
        Um = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_partnership",
          storageKey: null,
        },
        Vm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "time_stamp",
          storageKey: null,
        },
        Wm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "ig_item_type",
          storageKey: null,
        },
        Xm = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "client_context",
          storageKey: null,
        },
        Ym = {
          alias: null,
          args: null,
          concreteType: "IGThreadItemPlaceHolderSource",
          kind: "LinkedField",
          name: "ig_placeholder",
          plural: !1,
          selections: [h, Pg],
          storageKey: null,
        },
        Zm = [
          { kind: "Variable", name: "height", variableName: "height" },
          { kind: "Variable", name: "width", variableName: "width" },
        ],
        $m = {
          alias: null,
          args: Zm,
          concreteType: "Image",
          kind: "LinkedField",
          name: "image_source",
          plural: !1,
          selections: l,
          storageKey: null,
        },
        an = {
          alias: null,
          args: Zm,
          concreteType: "IGThreadItemVideoSource",
          kind: "LinkedField",
          name: "video_source",
          plural: !1,
          selections: S,
          storageKey: null,
        },
        bn = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "expiring_at",
          storageKey: null,
        },
        cn = [Cm, $l, b, B],
        dn = {
          alias: null,
          args: null,
          concreteType: "InstagramUserV2",
          kind: "LinkedField",
          name: "media_owner",
          plural: !1,
          selections: cn,
          storageKey: null,
        },
        en = {
          alias: null,
          args: null,
          concreteType: "IGMessageThreadItemRavenMedia",
          kind: "LinkedField",
          name: "raven_media",
          plural: !1,
          selections: [
            Nm,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "seen_user_ids",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "view_mode",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "seen_count",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "IGMessageThreadItemMedia",
              kind: "LinkedField",
              name: "media",
              plural: !0,
              selections: [$m, an, bn],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      cn = {
        alias: null,
        args: null,
        concreteType: "InstagramUserV2",
        kind: "LinkedField",
        name: "user",
        plural: !1,
        selections: cn,
        storageKey: null,
      };
      var fn = {
          alias: null,
          args: Zm,
          concreteType: "Image",
          kind: "LinkedField",
          name: "image_source",
          plural: !1,
          selections: S,
          storageKey: null,
        },
        gn = {
          kind: "InlineFragment",
          selections: f,
          type: "IGMessageThreadItemMediaShare",
          abstractKey: null,
        },
        hn = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "story_type",
          storageKey: null,
        },
        jn = {
          kind: "InlineFragment",
          selections: [hn, e, g],
          type: "IGMessageThreadItemReelShare",
          abstractKey: null,
        };
      hn = {
        kind: "InlineFragment",
        selections: [hn, Pg, h, e],
        type: "IGMessageThreadItemStoryShare",
        abstractKey: null,
      };
      Pg = {
        kind: "InlineFragment",
        selections: [h, e],
        type: "IGMessageThreadItemFelixShare",
        abstractKey: null,
      };
      var kn = {
          kind: "InlineFragment",
          selections: [
            h,
            wb,
            e,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "current_price",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "full_price",
              storageKey: null,
            },
            k,
          ],
          type: "IGMessageThreadItemProductShare",
          abstractKey: null,
        },
        ln = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "likes_count",
          storageKey: null,
        },
        mn = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "emojis",
          storageKey: null,
        },
        nn = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "media",
          plural: !0,
          selections: S,
          storageKey: null,
        };
      id = {
        alias: null,
        args: null,
        concreteType: "IGThreadItemActionLogSource",
        kind: "LinkedField",
        name: "action_log",
        plural: !1,
        selections: [
          I,
          {
            alias: null,
            args: null,
            concreteType: "IGThreadItemActionLogBoldSource",
            kind: "LinkedField",
            name: "bold",
            plural: !0,
            selections: id,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "IGThreadItemActionLogTextAttributesSource",
            kind: "LinkedField",
            name: "text_attributes",
            plural: !0,
            selections: [
              gd,
              hd,
              Pb,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "intent",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      gd = {
        alias: null,
        args: null,
        concreteType: "IGThreadItemLinkSource",
        kind: "LinkedField",
        name: "link_source",
        plural: !1,
        selections: [
          Xm,
          e,
          {
            alias: null,
            args: null,
            concreteType: "IGThreadItemLinkContextSource",
            kind: "LinkedField",
            name: "link_context",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "link_url",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "link_title",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "link_summary",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "link_image_url",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      hd = {
        alias: null,
        args: null,
        concreteType: "IGThreadItemVideoSource",
        kind: "LinkedField",
        name: "animated_media",
        plural: !1,
        selections: hg,
        storageKey: null,
      };
      hg = {
        alias: null,
        args: null,
        concreteType: "IGThreadItemVoiceMediaSource",
        kind: "LinkedField",
        name: "voice_media",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "audio_src",
            storageKey: null,
          },
          Hb,
        ],
        storageKey: null,
      };
      var Y = [Nm, fn],
        on = {
          alias: null,
          args: null,
          concreteType: "IGMessageThreadItemMedia",
          kind: "LinkedField",
          name: "media",
          plural: !1,
          selections: Y,
          storageKey: null,
        },
        pn = {
          alias: null,
          args: null,
          concreteType: "IGMessageThreadItemHScrollShareItem",
          kind: "LinkedField",
          name: "hscroll_share",
          plural: !0,
          selections: [h, wb, k, on],
          storageKey: null,
        },
        qn = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "header_title",
          storageKey: null,
        },
        rn = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "header_subtitle",
          storageKey: null,
        },
        sn = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "header_icon_url",
          storageKey: null,
        },
        tn = {
          alias: null,
          args: null,
          concreteType: "IGMessageThreadItemCollectionShare",
          kind: "LinkedField",
          name: "shops_collection_share",
          plural: !1,
          selections: [qn, rn, sn, h, wb, sc, on],
          storageKey: null,
        };
      wb = {
        alias: null,
        args: null,
        concreteType: "IGMessageThreadItemAppointmentBooking",
        kind: "LinkedField",
        name: "appointment_booking",
        plural: !1,
        selections: [
          h,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "max_title_num_of_lines",
            storageKey: null,
          },
          wb,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "max_subtitle_num_of_lines",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "header_title_text",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Image",
            kind: "LinkedField",
            name: "header_icon_url_info",
            plural: !1,
            selections: S,
            storageKey: null,
          },
          on,
          {
            alias: null,
            args: null,
            concreteType: "Image",
            kind: "LinkedField",
            name: "preview_extra_urls_info",
            plural: !0,
            selections: S,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "preview_layout_type",
            storageKey: null,
          },
          sc,
          {
            alias: null,
            args: null,
            concreteType: "IGXMAMessageCTAButton",
            kind: "LinkedField",
            name: "cta_buttons",
            plural: !0,
            selections: [Ra, h],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      on = {
        alias: null,
        args: null,
        concreteType: "IGMessageThreadItemShopShare",
        kind: "LinkedField",
        name: "shop_share",
        plural: !1,
        selections: [
          qn,
          rn,
          sn,
          {
            alias: null,
            args: null,
            concreteType: "IGMessageThreadItemMedia",
            kind: "LinkedField",
            name: "medias",
            plural: !0,
            selections: Y,
            storageKey: null,
          },
          sc,
        ],
        storageKey: null,
      };
      S = {
        alias: null,
        args: null,
        concreteType: "IGMessageThreadItemGenericXMA",
        kind: "LinkedField",
        name: "generic_xma",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "xma_template_type",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "xma_layout_type",
            storageKey: null,
          },
          h,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "sub_title",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "GenericXMACTAButton",
            kind: "LinkedField",
            name: "cta_buttons",
            plural: !0,
            selections: [h, Ra],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "IGMessageThreadItemMedia",
            kind: "LinkedField",
            name: "preview_url_info",
            plural: !1,
            selections: Y,
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      qn = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "send_attribution",
        storageKey: null,
      };
      rn = {
        alias: null,
        args: null,
        concreteType: "IGMessageThreadItemRepliedToMessage",
        kind: "LinkedField",
        name: "replied_to_message",
        plural: !1,
        selections: [e, V, bi, dl],
        storageKey: null,
      };
      sn = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "end_cursor",
        storageKey: null,
      };
      Ra = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "has_next_page",
        storageKey: null,
      };
      Y = {
        alias: null,
        args: null,
        concreteType: "PageInfo",
        kind: "LinkedField",
        name: "page_info",
        plural: !1,
        selections: [sn, Ra],
        storageKey: null,
      };
      dn = [
        {
          alias: null,
          args: null,
          concreteType: "InstagramMessageThreadItem",
          kind: "LinkedField",
          name: "nodes",
          plural: !0,
          selections: [
            Fm,
            Oe,
            hl,
            Vm,
            Wm,
            e,
            Xm,
            Ym,
            {
              alias: null,
              args: null,
              concreteType: "IGMessageThreadItemMedia",
              kind: "LinkedField",
              name: "ig_thread_item_media",
              plural: !1,
              selections: [Nm, $m, an, bn, dn],
              storageKey: null,
            },
            en,
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "share",
              plural: !1,
              selections: [
                cn,
                {
                  alias: null,
                  args: null,
                  concreteType: "IGMessageThreadItemMedia",
                  kind: "LinkedField",
                  name: "media",
                  plural: !0,
                  selections: [Nm, fn, an, bn, dn],
                  storageKey: null,
                },
                gn,
                jn,
                hn,
                Pg,
                kn,
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "IGThreadItemReactions",
              kind: "LinkedField",
              name: "ig_reaction",
              plural: !1,
              selections: [
                ln,
                {
                  alias: null,
                  args: null,
                  concreteType: "InstagramUserV2",
                  kind: "LinkedField",
                  name: "likes",
                  plural: !0,
                  selections: Dm,
                  storageKey: null,
                },
                mn,
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: Zm,
              concreteType: "IGThreadItemProfileShareSource",
              kind: "LinkedField",
              name: "profileshare",
              plural: !1,
              selections: [cn, nn],
              storageKey: null,
            },
            id,
            gd,
            hd,
            hg,
            pn,
            tn,
            wb,
            on,
            S,
            qn,
            rn,
          ],
          storageKey: null,
        },
        Y,
      ];
      cn = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "selected_thread_type",
        storageKey: null,
      };
      var un = [
          { kind: "Variable", name: "after", variableName: "item_after" },
          { kind: "Variable", name: "first", variableName: "item_limit" },
        ],
        vn = [
          {
            kind: "Variable",
            name: "before_time_precise",
            variableName: "before",
          },
          { kind: "Variable", name: "last", variableName: "message_limit" },
        ],
        wn = {
          alias: null,
          args: null,
          concreteType: "PageInfo",
          kind: "LinkedField",
          name: "page_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "has_previous_page",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      aj = {
        condition: "load_delivery_receipts",
        kind: "Condition",
        passingValue: !0,
        selections: aj,
      };
      var Z = [{ kind: "Variable", name: "page_id", variableName: "page_id" }],
        xn = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "business_id",
          storageKey: null,
        },
        yn = { kind: "RootArgument", name: "page_id" },
        zn = {
          alias: null,
          args: null,
          concreteType: "XFBBizInboxSelectedThread",
          kind: "LinkedField",
          name: "selected_thread",
          plural: !1,
          selections: [
            {
              alias: null,
              args: Z,
              concreteType: "BizInboxFeatureConfigWrapper",
              kind: "LinkedField",
              name: "selected_thread_biz_inbox_feature_config",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "BizInboxGatingConfig",
                  kind: "LinkedField",
                  name: "gating_config",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "show_commerce_invoice_button_in_composer",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "show_product_picker_button_in_composer",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "show_service_picker_button_in_composer",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "show_send_availability_button_in_composer",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "show_create_appointment_button_in_composer",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "show_customer_feedback_button_in_composer",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "show_customer_feedback_button_on_move_to_done",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "show_form_builder_in_composer",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "BizInboxCommerceInvoiceButtonConfig",
                  kind: "LinkedField",
                  name: "commerce_invoice_button_config",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "show_confirm_payment",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "show_payment_onboarding",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "show_request_payment",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        An = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "passes_gk",
            storageKey: null,
          },
        ],
        Bn = {
          alias: "mcomEnableOrders",
          args: [
            {
              kind: "Literal",
              name: "gk_name",
              value: "mcom_kbank_integration_onboarding",
            },
          ],
          concreteType: "EntGKCheck",
          kind: "LinkedField",
          name: "gk_check",
          plural: !1,
          selections: An,
          storageKey: 'gk_check(gk_name:"mcom_kbank_integration_onboarding")',
        },
        Cn = {
          alias: "mcomIsOnboarded",
          args: [
            {
              kind: "Literal",
              name: "gk_name",
              value: "mcom_request_payment_seller_onboarding_flow",
            },
          ],
          concreteType: "EntGKCheck",
          kind: "LinkedField",
          name: "gk_check",
          plural: !1,
          selections: An,
          storageKey:
            'gk_check(gk_name:"mcom_request_payment_seller_onboarding_flow")',
        },
        Dn = {
          alias: "enableOrdersGlobally",
          args: [
            { kind: "Literal", name: "disable_auto_log_exposures", value: !0 },
            {
              kind: "Literal",
              name: "qe_universe",
              value: "ctm_grow_order_creation_fbs_globally",
            },
          ],
          concreteType: "QECheck",
          kind: "LinkedField",
          name: "qe_check",
          plural: !1,
          selections: [
            {
              alias: "enable_orders",
              args: [
                { kind: "Literal", name: "bool_default", value: !1 },
                { kind: "Literal", name: "param_name", value: "enable_orders" },
              ],
              kind: "ScalarField",
              name: "bool",
              storageKey: 'bool(bool_default:false,param_name:"enable_orders")',
            },
          ],
          storageKey:
            'qe_check(disable_auto_log_exposures:true,qe_universe:"ctm_grow_order_creation_fbs_globally")',
        },
        En = [Em];
      En = {
        alias: "xfb_unified_thread_list_pending",
        args: [
          {
            kind: "Variable",
            name: "msgr_params",
            variableName: "msgr_pending_params",
          },
          {
            kind: "Variable",
            name: "wa_params",
            variableName: "wa_pending_params",
          },
        ],
        concreteType: "XFBBizInboxUnifiedThreadList",
        kind: "LinkedField",
        name: "xfb_biz_inbox_unified_thread_list",
        plural: !1,
        selections: [
          {
            condition: "isWorkUser",
            kind: "Condition",
            passingValue: !1,
            selections: [
              {
                alias: "wa_pending_threads",
                args: null,
                concreteType: "ViewerMessageThreadsConnection",
                kind: "LinkedField",
                name: "wa_threads",
                plural: !1,
                selections: En,
                storageKey: null,
              },
              {
                alias: "msg_pending_threads",
                args: null,
                concreteType: "ViewerMessageThreadsConnection",
                kind: "LinkedField",
                name: "msgr_threads",
                plural: !1,
                selections: En,
                storageKey: null,
              },
            ],
          },
        ],
        storageKey: null,
      };
      var Fn = {
          alias: null,
          args: Z,
          concreteType: "BizCRMContactCardConfig",
          kind: "LinkedField",
          name: "selected_biz_crm_contact_card_config",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "can_add_activities",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Gn = [
          {
            kind: "Variable",
            name: "business_assets",
            variableName: "businessAssets",
          },
        ],
        $ = [z, a],
        Hn = {
          kind: "InlineFragment",
          selections: d,
          type: "DynamicFeedAdAttachmentMedia",
          abstractKey: null,
        },
        In = {
          kind: "InlineFragment",
          selections: d,
          type: "GenericAttachmentMedia",
          abstractKey: null,
        },
        Jn = {
          kind: "InlineFragment",
          selections: d,
          type: "MontageImage",
          abstractKey: null,
        },
        Kn = {
          kind: "InlineFragment",
          selections: d,
          type: "MontageVideo",
          abstractKey: null,
        };
      Va = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "media",
        plural: !1,
        selections: [z, Va, Wa, Za, q, $a, r, L, Hn, In, Jn, Kn],
        storageKey: null,
      };
      Wa = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "action_links",
        plural: !0,
        selections: [z, h, m],
        storageKey: null,
      };
      Za = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "action_objects",
        plural: !0,
        selections: [
          z,
          a,
          {
            kind: "InlineFragment",
            selections: [lb, mb, t, nb],
            type: "MessengerPlatformEntPreview",
            abstractKey: "__isMessengerPlatformEntPreview",
          },
        ],
        storageKey: null,
      };
      q = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "cta_data",
        plural: !1,
        selections: [z, yb, w],
        storageKey: null,
      };
      lb = {
        alias: null,
        args: null,
        concreteType: "MessengerCallToAction",
        kind: "LinkedField",
        name: "messenger_call_to_actions",
        plural: !0,
        selections: [
          jb,
          kb,
          Za,
          ob,
          pb,
          a,
          qb,
          rb,
          sb,
          tb,
          ub,
          vb,
          v,
          q,
          zb,
          Sa,
        ],
        storageKey: null,
      };
      mb = [
        z,
        { kind: "TypeDiscriminator", abstractKey: "__isPaymentActivityAction" },
        s,
        Ib,
        Jb,
        h,
        Lb,
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: "moneyTransfer",
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "generic_money_transfer",
              plural: !1,
              selections: [z, A, D, C, Nb, a],
              storageKey: null,
            },
          ],
          type: "P2PPaymentActionButtonWithTransfer",
          abstractKey: null,
        },
      ];
      t = {
        kind: "InlineFragment",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "P2PBubbleView",
            kind: "LinkedField",
            name: "bubble_view",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "actions",
                plural: !0,
                selections: mb,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "components",
                plural: !0,
                selections: [z, Ob, G, Rb, Qb],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "P2PBubbleRobotext",
                kind: "LinkedField",
                name: "robotext",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "action",
                    plural: !1,
                    selections: mb,
                    storageKey: null,
                  },
                  Pb,
                  Sb,
                  e,
                ],
                storageKey: null,
              },
              {
                alias: "rootAction",
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "root_action",
                plural: !1,
                selections: mb,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "PaymentViewData",
        abstractKey: "__isPaymentViewData",
      };
      yb = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "receiver_profile",
        plural: !1,
        selections: [z, a, b, B, Ub],
        storageKey: null,
      };
      w = [ac, a];
      zb = {
        alias: null,
        args: null,
        concreteType: "PeerToPeerTransferContext",
        kind: "LinkedField",
        name: "transfer_context",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "MessageImage",
            kind: "LinkedField",
            name: "memo_images",
            plural: !0,
            selections: w,
            storageKey: null,
          },
          cc,
          a,
        ],
        storageKey: null,
      };
      Sa = {
        alias: null,
        args: null,
        concreteType: "PeerToPeerPlatformSoldItemDetail",
        kind: "LinkedField",
        name: "platform_item",
        plural: !1,
        selections: [
          b,
          I,
          {
            alias: null,
            args: null,
            concreteType: "Photo",
            kind: "LinkedField",
            name: "photos",
            plural: !0,
            selections: w,
            storageKey: null,
          },
          m,
          a,
        ],
        storageKey: null,
      };
      s = [z, b, a, B, Ub];
      Ib = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "requester",
        plural: !1,
        selections: s,
        storageKey: null,
      };
      Lb = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "requestee",
        plural: !1,
        selections: s,
        storageKey: null,
      };
      Nb = {
        alias: null,
        args: null,
        concreteType: "PeerToPeerTransfer",
        kind: "LinkedField",
        name: "transfer",
        plural: !1,
        selections: [
          D,
          yb,
          Wb,
          Xb,
          A,
          Yb,
          Zb,
          $b,
          zb,
          fc,
          gc,
          hc,
          Sa,
          a,
          J,
          ic,
          jc,
          t,
        ],
        storageKey: null,
      };
      Ob = [jb, kb, Za, ob, pb, a, qb, rb, sb, tb, ub, vb, v, q];
      G = {
        alias: null,
        args: null,
        concreteType: "MessengerCallToAction",
        kind: "LinkedField",
        name: "call_to_actions",
        plural: !0,
        selections: Ob,
        storageKey: null,
      };
      Rb = {
        alias: null,
        args: null,
        concreteType: "MessengerCallToAction",
        kind: "LinkedField",
        name: "default_action",
        plural: !1,
        selections: Ob,
        storageKey: null,
      };
      Qb = [
        {
          alias: null,
          args: null,
          concreteType: "MessengerRetailItem",
          kind: "LinkedField",
          name: "nodes",
          plural: !0,
          selections: [
            a,
            I,
            pc,
            nb,
            qc,
            b,
            rc,
            sc,
            Rb,
            G,
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "media_blob_attachments",
              plural: !0,
              selections: [z, uc, tc, xc, Ac, Dc, L, Hn, In, Jn, Kn],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      Sb = [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "messaging_actor",
          plural: !1,
          selections: [z, a, b],
          storageKey: null,
        },
        a,
      ];
      mb = {
        alias: "primary_photo",
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "primary_listing_photo",
        plural: !1,
        selections: [z, Ya, a],
        storageKey: null,
      };
      cc = {
        alias: null,
        args: null,
        concreteType: "RetailShipmentItemsConnection",
        kind: "LinkedField",
        name: "retail_shipment_items",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "MessengerRetailItem",
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: [a, b, Zd, $d, ae, be, pc, qc, ce, de, G],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      Ub = [b, a];
      s = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "media",
        plural: !1,
        selections: [z, $a, Dh, L, Hn, In, Jn, Kn],
        storageKey: null,
      };
      jb = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "media",
        plural: !1,
        selections: [z, ac, L, Hn, In, Jn, Kn],
        storageKey: null,
      };
      kb = {
        alias: null,
        args: null,
        concreteType: "Photo",
        kind: "LinkedField",
        name: "photo",
        plural: !1,
        selections: w,
        storageKey: null,
      };
      Za = {
        alias: null,
        args: null,
        concreteType: "FocusedPhoto",
        kind: "LinkedField",
        name: "cover_photo",
        plural: !1,
        selections: [kb],
        storageKey: null,
      };
      ob = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "group_general_chat",
        plural: !1,
        selections: $,
        storageKey: null,
      };
      pb = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "target",
        plural: !1,
        selections: [
          z,
          a,
          Cb,
          {
            kind: "InlineFragment",
            selections: [Db, r, Eb, Fb, Gb, Hb],
            type: "WECMessageAudio",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [A, D, C, t],
            type: "MoneyTransfer",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              D,
              yb,
              Wb,
              Xb,
              A,
              Yb,
              Zb,
              $b,
              zb,
              fc,
              gc,
              hc,
              Sa,
              J,
              ic,
              jc,
              t,
            ],
            type: "PeerToPeerTransfer",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              dc,
              kc,
              Ib,
              Lb,
              lc,
              mc,
              jc,
              Nb,
              nc,
              hc,
              O,
              J,
              {
                alias: null,
                args: null,
                concreteType: "PeerToPeerPaymentRequest",
                kind: "LinkedField",
                name: "individual_requests",
                plural: !0,
                selections: [
                  dc,
                  kc,
                  Ib,
                  Lb,
                  lc,
                  mc,
                  a,
                  jc,
                  Nb,
                  nc,
                  hc,
                  O,
                  J,
                  t,
                ],
                storageKey: null,
              },
              t,
            ],
            type: "PeerToPeerPaymentRequest",
            abstractKey: null,
          },
          t,
          {
            kind: "InlineFragment",
            selections: [
              oc,
              G,
              {
                alias: null,
                args: null,
                concreteType: "RetailPromotionItemsConnection",
                kind: "LinkedField",
                name: "promotion_items",
                plural: !1,
                selections: Qb,
                storageKey: null,
              },
            ],
            type: "MessengerRetailPromotion",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              oc,
              G,
              {
                alias: null,
                args: null,
                concreteType: "MessengerBusinessMessageItemsConnection",
                kind: "LinkedField",
                name: "business_items",
                plural: !1,
                selections: Qb,
                storageKey: null,
              },
            ],
            type: "MessengerBusinessMessage",
            abstractKey: null,
          },
          Ec,
          Gc,
          Kc,
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "invite_sender",
                plural: !1,
                selections: $,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "invite_recipient",
                plural: !1,
                selections: $,
                storageKey: null,
              },
            ],
            type: "QuickInvite",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              Lc,
              Mc,
              Nc,
              Oc,
              Pc,
              Qc,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "blob_media",
                plural: !1,
                selections: [z, Sc, Rc, L],
                storageKey: null,
              },
            ],
            type: "MontageDirect",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [Tc, c, Uc],
            type: "MontageShare",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              Wc,
              Xc,
              Yc,
              Zc,
              $c,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "native_component_flow_request",
                plural: !1,
                selections: [
                  z,
                  a,
                  {
                    kind: "InlineFragment",
                    selections: [
                      ad,
                      bd,
                      cd,
                      Vc,
                      dd,
                      fd,
                      jd,
                      {
                        alias: null,
                        args: null,
                        concreteType:
                          "NativeComponentFlowBookingRequestServicesProductItemsConnection",
                        kind: "LinkedField",
                        name: "services_product_items",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: "ServicesProductItem",
                            kind: "LinkedField",
                            name: "nodes",
                            plural: !0,
                            selections: [
                              a,
                              b,
                              I,
                              kd,
                              ld,
                              {
                                alias: null,
                                args: md,
                                concreteType: "ProductImage",
                                kind: "LinkedField",
                                name: "images",
                                plural: !0,
                                selections: [nd, a],
                                storageKey: "images(first:1)",
                              },
                              od,
                            ],
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      pd,
                      qd,
                      rd,
                      sd,
                      td,
                      ud,
                      vd,
                      wd,
                      xd,
                      yd,
                      zd,
                      Zc,
                      $c,
                      Ad,
                    ],
                    type: "NativeComponentFlowBookingRequest",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "PagesPlatformBookingMessage",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [Bd, Cd, Dd, Ed],
            type: "ServicesAppointmentAvailability",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [Fd, Gd, Hd, Id, Jd, Kd],
            type: "ServicesGenericAdminText",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "MessagingParticipant",
                kind: "LinkedField",
                name: "genie_sender",
                plural: !1,
                selections: Sb,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "StoryAttachment",
                kind: "LinkedField",
                name: "story_attachment",
                plural: !1,
                selections: [Qa, i, Va, bb, cb, db, eb, fb, gb, Wa, ib, lb, Bb],
                storageKey: null,
              },
            ],
            type: "GenieMessage",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              Nd,
              Od,
              Pd,
              Qd,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "event_place",
                plural: !1,
                selections: [z, b, L],
                storageKey: null,
              },
              Rd,
              Sd,
              Td,
              Ud,
              Vd,
              b,
              Wd,
            ],
            type: "Event",
            abstractKey: null,
          },
          Xd,
          Yd,
          {
            kind: "InlineFragment",
            selections: [b, Zd, $d, ae, be, pc, qc, ce, de, Rb, G],
            type: "MessengerRetailItem",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [Zd, ee, fe, sc, $d, ge, he, ie, je, b],
            type: "AgentItemSuggestion",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              ke,
              le,
              me,
              ne,
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "FundraiserCoverPhoto",
                    kind: "LinkedField",
                    name: "focused_cover_photo",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "Photo",
                        kind: "LinkedField",
                        name: "photo",
                        plural: !1,
                        selections: [oe, a],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                type: "FundraiserWithPresence",
                abstractKey: "__isFundraiserWithPresence",
              },
            ],
            type: "Fundraiser",
            abstractKey: "__isFundraiser",
          },
          {
            kind: "InlineFragment",
            selections: [
              pe,
              qe,
              re,
              se,
              te,
              ue,
              ve,
              we,
              xe,
              Ce,
              sd,
              De,
              Ee,
              Fe,
              Ge,
              {
                alias: null,
                args: null,
                concreteType: "RetailReceiptItemsConnection",
                kind: "LinkedField",
                name: "retail_items",
                plural: !1,
                selections: Qb,
                storageKey: null,
              },
              He,
              Ie,
              Je,
              Ke,
            ],
            type: "MessengerRetailReceipt",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              Le,
              Me,
              Ne,
              {
                alias: null,
                args: null,
                concreteType: "PaymentInvoiceProduct",
                kind: "LinkedField",
                name: "item_list",
                plural: !0,
                selections: [Oe, b, Pe, I, Mb, Qe, Re, a],
                storageKey: null,
              },
              Ua,
              Te,
              Ue,
              Se,
              Ve,
              We,
              F,
              Xe,
              Ye,
              Ze,
              $e,
              af,
              bf,
            ],
            type: "PaymentPlatformAttachment",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              cf,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "group_commerce_item_seller",
                plural: !1,
                selections: $,
                storageKey: null,
              },
              df,
              ef,
              mb,
              m,
            ],
            type: "GroupCommerceProductItem",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [df, mb],
            type: "MarketplaceListingRenderable",
            abstractKey: "__isMarketplaceListingRenderable",
          },
          {
            kind: "InlineFragment",
            selections: [gf, hf, Xa, jf, b, kf, lf],
            type: "Page",
            abstractKey: null,
          },
          qf,
          {
            kind: "InlineFragment",
            selections: [
              rf,
              {
                alias: null,
                args: sf,
                concreteType:
                  "MPersonalRemindersListToPersonalRemindersConnection",
                kind: "LinkedField",
                name: "personal_reminders",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType:
                      "MPersonalRemindersListToPersonalRemindersEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "MessengerEventReminder",
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [mf, nf, of, a],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey:
                  'personal_reminders(orderby:"m_personal_reminder_list_ordering")',
              },
            ],
            type: "MPersonalRemindersList",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              tf,
              uf,
              vf,
              wf,
              xf,
              yf,
              zf,
              Af,
              Bf,
              Cf,
              Df,
              Ef,
              Ff,
              Gf,
              {
                alias: null,
                args: null,
                concreteType: "AirlineBoardingPassesConnection",
                kind: "LinkedField",
                name: "boarding_passes",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "AirlineBoardingPassMessageAttachment",
                    kind: "LinkedField",
                    name: "nodes",
                    plural: !0,
                    selections: [Hf, If, Jf, Kf, Lf, Mf, Nf, Qf, Zf, a],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "AirlineBoardingPassCollectionMessageAttachment",
            abstractKey: null,
          },
          Wf,
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "MessengerRetailShipment",
                kind: "LinkedField",
                name: "shipment",
                plural: !1,
                selections: [a, dg, eg, fg, Ae, Ic, cc, jg, kg],
                storageKey: null,
              },
              lg,
              mg,
              T,
              ng,
              He,
            ],
            type: "MessengerRetailShipmentTrackingEvent",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              dg,
              eg,
              fg,
              Ae,
              Ic,
              cc,
              ye,
              ig,
              {
                alias: null,
                args: null,
                concreteType: "MessengerRetailReceipt",
                kind: "LinkedField",
                name: "receipt",
                plural: !1,
                selections: [se, a],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "User",
                kind: "LinkedField",
                name: "recipient",
                plural: !1,
                selections: Ub,
                storageKey: null,
              },
              He,
            ],
            type: "MessengerRetailShipment",
            abstractKey: null,
          },
          Xf,
          {
            kind: "InlineFragment",
            selections: [
              Tf,
              $f,
              tf,
              Rf,
              Vb,
              qg,
              rg,
              sg,
              pg,
              tg,
              bg,
              ug,
              ag,
              vg,
              cg,
              wg,
              xg,
              vf,
              Af,
              yg,
              zg,
              Ag,
              yf,
              zf,
              Bg,
              Cg,
              Dg,
              Eg,
              {
                alias: null,
                args: null,
                concreteType: "AirlineItineraryLegsConnection",
                kind: "LinkedField",
                name: "itinerary_legs",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "AirlineItineraryLeg",
                    kind: "LinkedField",
                    name: "nodes",
                    plural: !0,
                    selections: [
                      Fg,
                      {
                        alias: null,
                        args: null,
                        concreteType: "AirlineItinerarySegmentsConnection",
                        kind: "LinkedField",
                        name: "segments",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType:
                              "AirlineItinerarySegmentMessageAttachment",
                            kind: "LinkedField",
                            name: "nodes",
                            plural: !0,
                            selections: [Sf, Of, a],
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "AirlineItineraryMessageAttachment",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [Uf, Pf, b, Vf],
            type: "LeadGenDeepLinkData",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              Yf,
              E,
              {
                alias: null,
                args: null,
                concreteType: "Event",
                kind: "LinkedField",
                name: "event",
                plural: !1,
                selections: [
                  a,
                  b,
                  Gg,
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "event_place",
                    plural: !1,
                    selections: [z, Hg, L],
                    storageKey: null,
                  },
                  Ig,
                  {
                    alias: null,
                    args: null,
                    concreteType: "EventAttendanceConfig",
                    kind: "LinkedField",
                    name: "attendance_config",
                    plural: !1,
                    selections: [Lg, a],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "EventAttendanceConfirmation",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [Fc],
            type: "UserLeadGenInfo",
            abstractKey: null,
          },
          Mg,
          {
            kind: "InlineFragment",
            selections: [b, Ng, k, Fb, Gb],
            type: "WECMessageFile",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [r, Eb, Fb, Gb, Db, n, Og, o],
            type: "WECMessageVideo",
            abstractKey: null,
          },
          Rg,
          {
            kind: "InlineFragment",
            selections: [Fb, Vg, Yg],
            type: "WECMessageImage",
            abstractKey: null,
          },
          Zg,
          {
            kind: "InlineFragment",
            selections: [$g, ah, bh, ch, dh, eh, fh],
            type: "MentorshipMessengerCurriculumStep",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [gh],
            type: "MentorshipMessengerDiscussionTopicSet",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "MentorshipProgram",
                kind: "LinkedField",
                name: "mentorship_program",
                plural: !1,
                selections: [
                  a,
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "other_member",
                    plural: !1,
                    selections: [z, Tb, a],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              ih,
            ],
            type: "MentorshipMessengerLeavePrompt",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [ih, jh, kh, lh],
            type: "MentorshipMessengerSurvey",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [ih],
            type: "MentorshipMessengerReminder",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [ih, jh, mh],
            type: "MentorshipMessengerProgressTracker",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              oh,
              {
                alias: null,
                args: null,
                concreteType: "ComposedBlockWithEntities",
                kind: "LinkedField",
                name: "message_richtext",
                plural: !0,
                selections: [
                  ph,
                  qh,
                  rh,
                  {
                    alias: null,
                    args: null,
                    concreteType: "ComposedEntityAtRange",
                    kind: "LinkedField",
                    name: "entity_ranges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "entity",
                        plural: !1,
                        selections: [z, L],
                        storageKey: null,
                      },
                      x,
                      nh,
                    ],
                    storageKey: null,
                  },
                  sh,
                  e,
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "Feedback",
                kind: "LinkedField",
                name: "feedback",
                plural: !1,
                selections: [
                  th,
                  uh,
                  vh,
                  {
                    alias: null,
                    args: Jg,
                    concreteType: "TopReactionsConnection",
                    kind: "LinkedField",
                    name: "top_reactions",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "FeedbackReactionInfo",
                        kind: "LinkedField",
                        name: "nodes",
                        plural: !0,
                        selections: [wh, a],
                        storageKey: null,
                      },
                    ],
                    storageKey:
                      'top_reactions(first:3,orderby:["COUNT_DESC","REACTION_TYPE"])',
                  },
                  a,
                ],
                storageKey: null,
              },
              xh,
              nc,
              yh,
              Ch,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "to",
                plural: !1,
                selections: [z, b, zh, Bh, a],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "StoryAttachment",
                kind: "LinkedField",
                name: "attachments",
                plural: !0,
                selections: [
                  cb,
                  m,
                  bb,
                  Qa,
                  s,
                  Fh,
                  {
                    alias: null,
                    args: Kg,
                    concreteType: "SubattachmentsConnection",
                    kind: "LinkedField",
                    name: "all_subattachments",
                    plural: !1,
                    selections: [
                      Gh,
                      {
                        alias: "files",
                        args: Hh,
                        concreteType: "StoryAttachment",
                        kind: "LinkedField",
                        name: "nodes",
                        plural: !0,
                        selections: [Fh, jb],
                        storageKey: 'nodes(if_style:"file_upload")',
                      },
                      {
                        alias: "images",
                        args: Jh,
                        concreteType: "StoryAttachment",
                        kind: "LinkedField",
                        name: "nodes",
                        plural: !0,
                        selections: [jb],
                        storageKey: 'nodes(if_style:"photo")',
                      },
                    ],
                    storageKey: "all_subattachments(first:3)",
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "Story",
                kind: "LinkedField",
                name: "attached_story",
                plural: !1,
                selections: [
                  Kh,
                  Lh,
                  {
                    alias: null,
                    args: null,
                    concreteType: "StoryAttachment",
                    kind: "LinkedField",
                    name: "attachments",
                    plural: !0,
                    selections: [s],
                    storageKey: null,
                  },
                  a,
                ],
                storageKey: null,
              },
            ],
            type: "Story",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [b, B, Za, Oh, Ph],
            type: "User",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              b,
              Qh,
              Rh,
              Sh,
              Za,
              ob,
              {
                alias: null,
                args: null,
                concreteType: "GroupsSyncMetadata",
                kind: "LinkedField",
                name: "work_groups_sync_metadata",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "messenger_group",
                    plural: !1,
                    selections: $,
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "Group",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              Uh,
              Vh,
              Wh,
              {
                alias: null,
                args: null,
                concreteType: "AppIntegration",
                kind: "LinkedField",
                name: "app_integration",
                plural: !1,
                selections: [Xh, b, Yh, Zh, a],
                storageKey: null,
              },
              $h,
              ai,
              {
                alias: null,
                args: null,
                concreteType: "AppContentAdditionalData",
                kind: "LinkedField",
                name: "link_preview_additional_data",
                plural: !0,
                selections: [
                  h,
                  e,
                  Pb,
                  xb,
                  bi,
                  {
                    alias: null,
                    args: null,
                    concreteType: "User",
                    kind: "LinkedField",
                    name: "profiles",
                    plural: !0,
                    selections: [B, b, a],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "AppContent",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [Rb],
            type: "CommerceProductItemShare",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [ci],
            type: "ApplicationReferralXMA",
            abstractKey: null,
          },
          di,
          fi,
        ],
        storageKey: null,
      };
      qb = {
        alias: null,
        args: null,
        concreteType: "StoryAttachment",
        kind: "LinkedField",
        name: "story_attachment",
        plural: !1,
        selections: [
          Qa,
          i,
          Va,
          bb,
          cb,
          db,
          eb,
          fb,
          gb,
          Wa,
          ib,
          lb,
          Bb,
          pb,
          {
            alias: null,
            args: null,
            concreteType: "StoryAttachment",
            kind: "LinkedField",
            name: "subattachments",
            plural: !0,
            selections: [Qa, i, Va, bb, cb, db, eb, fb, gb, Wa, ib, lb, Bb, pb],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      rb = {
        alias: null,
        args: null,
        concreteType: "ExtensibleMessageAttachment",
        kind: "LinkedField",
        name: "extensible_attachment",
        plural: !1,
        selections: [
          Pa,
          qb,
          {
            alias: "genie_attachment",
            args: null,
            concreteType: "StoryAttachment",
            kind: "LinkedField",
            name: "story_attachment",
            plural: !1,
            selections: [
              {
                alias: "genie_message",
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "target",
                plural: !1,
                selections: [
                  z,
                  a,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "MessagingParticipant",
                        kind: "LinkedField",
                        name: "genie_sender",
                        plural: !1,
                        selections: [
                          a,
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "messaging_actor",
                            plural: !1,
                            selections: [
                              z,
                              b,
                              a,
                              {
                                kind: "TypeDiscriminator",
                                abstractKey: "__isNode",
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      qb,
                    ],
                    type: "GenieMessage",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          a,
        ],
        storageKey: null,
      };
      sb = [
        z,
        { kind: "TypeDiscriminator", abstractKey: "__isMessageBlobAttachment" },
        ff,
        pf,
        hh,
        Ac,
        Eh,
        L,
      ];
      tb = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "blob_attachments",
        plural: !0,
        selections: sb,
        storageKey: null,
      };
      ub = {
        alias: "last_message",
        args: Ma,
        concreteType: "MessagesOfThreadConnection",
        kind: "LinkedField",
        name: "messages",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: [
              z,
              c,
              {
                alias: null,
                args: null,
                concreteType: "MessagingParticipant",
                kind: "LinkedField",
                name: "message_sender",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "messaging_actor",
                    plural: !1,
                    selections: $,
                    storageKey: null,
                  },
                  a,
                ],
                storageKey: null,
              },
              Na,
              Oa,
              K,
              M,
              {
                kind: "InlineFragment",
                selections: [rb, H, tb],
                type: "UserMessage",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  ab,
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "extensible_message_admin_text",
                    plural: !1,
                    selections: [z, Ab],
                    storageKey: null,
                  },
                ],
                type: "GenericAdminTextMessage",
                abstractKey: null,
              },
              L,
            ],
            storageKey: null,
          },
        ],
        storageKey: "messages(last:1)",
      };
      vb = {
        alias: null,
        args: null,
        concreteType: "JobApplicationsFromThreadConnection",
        kind: "LinkedField",
        name: "thread_associated_job_applications",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "JobApplication",
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: [
              a,
              {
                alias: null,
                args: null,
                concreteType: "JobOpening",
                kind: "LinkedField",
                name: "job_opening",
                plural: !1,
                selections: [
                  Tg,
                  {
                    alias: null,
                    args: null,
                    concreteType: "Page",
                    kind: "LinkedField",
                    name: "employer",
                    plural: !1,
                    selections: [Wg, y, a],
                    storageKey: null,
                  },
                  a,
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      v = {
        alias: null,
        args: null,
        concreteType: "MessageThreadCustomization",
        kind: "LinkedField",
        name: "customization_info",
        plural: !1,
        selections: [si, vi, wi, a],
        storageKey: null,
      };
      q = {
        alias: null,
        args: null,
        concreteType: "MessengerThreadTheme",
        kind: "LinkedField",
        name: "thread_theme",
        plural: !1,
        selections: [
          a,
          yi,
          zi,
          Ai,
          Bi,
          {
            alias: null,
            args: null,
            concreteType: "MessengerReactionPack",
            kind: "LinkedField",
            name: "reaction_pack",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "MessengerReactionPackReactionAssetsConnection",
                kind: "LinkedField",
                name: "reaction_assets",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "MessengerReactionAsset",
                    kind: "LinkedField",
                    name: "nodes",
                    plural: !0,
                    selections: [Ci, Di, Ei, Fi, a],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              a,
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      Ob = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "thread_admins",
        plural: !0,
        selections: $,
        storageKey: null,
      };
      rc = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "thread_queue_metadata",
        plural: !1,
        selections: [z, Mi, a],
        storageKey: null,
      };
      uc = {
        alias: null,
        args: md,
        concreteType: "MessengerEventRemindersOfThreadConnection",
        kind: "LinkedField",
        name: "event_reminders",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "MessengerEventReminder",
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: [
              a,
              Oi,
              of,
              Pi,
              Qi,
              Jc,
              {
                alias: null,
                args: null,
                concreteType: "Page",
                kind: "LinkedField",
                name: "location_page",
                plural: !1,
                selections: [Ri, a],
                storageKey: null,
              },
              Si,
              Ti,
              Ui,
              nf,
              {
                alias: null,
                args: null,
                concreteType: "UserMessage",
                kind: "LinkedField",
                name: "trigger_message",
                plural: !1,
                selections: [V, a],
                storageKey: null,
              },
              Vi,
              Wi,
              Xi,
              Yi,
            ],
            storageKey: null,
          },
        ],
        storageKey: "event_reminders(first:1)",
      };
      tc = {
        alias: null,
        args: null,
        concreteType: "PageMessageThread",
        kind: "LinkedField",
        name: "related_page_thread",
        plural: !1,
        selections: [cj, Bd, hj, jj, lj, a],
        storageKey: null,
      };
      xc = {
        alias: null,
        args: null,
        concreteType: "RtcCallData",
        kind: "LinkedField",
        name: "rtc_call_data",
        plural: !1,
        selections: [
          nj,
          oj,
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "initiator",
            plural: !1,
            selections: $,
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      Dc = {
        alias: null,
        args: null,
        concreteType: "MarketplaceThreadData",
        kind: "LinkedField",
        name: "marketplace_thread_data",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "GroupCommerceProductItem",
            kind: "LinkedField",
            name: "for_sale_item",
            plural: !1,
            selections: [
              a,
              Uc,
              ef,
              df,
              ze,
              qj,
              rj,
              sj,
              tj,
              uj,
              vj,
              {
                alias: "primary_photo",
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "primary_listing_photo",
                plural: !1,
                selections: [z, ac, a],
                storageKey: null,
              },
              wj,
              xj,
            ],
            storageKey: null,
          },
          yj,
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "buyer",
            plural: !1,
            selections: $,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "seller",
            plural: !1,
            selections: [z, a, Aj],
            storageKey: null,
          },
          Cj,
          Dj,
        ],
        storageKey: null,
      };
      Ya = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "associated_object",
        plural: !1,
        selections: [
          z,
          a,
          {
            kind: "InlineFragment",
            selections: [Fj, b, B, ob, Gj, Hj, Ij, Jj, Lj, Mj],
            type: "Group",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              Fj,
              b,
              B,
              Gj,
              Hj,
              Ij,
              Wd,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "event_place",
                plural: !1,
                selections: [z, Nj, L],
                storageKey: null,
              },
            ],
            type: "Event",
            abstractKey: null,
          },
        ],
        storageKey: null,
      };
      $a = {
        alias: null,
        args: null,
        concreteType: "PageCommItem",
        kind: "LinkedField",
        name: "page_comm_item",
        plural: !1,
        selections: [
          a,
          Vj,
          Wj,
          Xj,
          Yj,
          Zj,
          {
            alias: null,
            args: null,
            concreteType: "PageCommItemToPageCommItemOwnersConnection",
            kind: "LinkedField",
            name: "comm_item_owners",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "PageCommItemOwner",
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: [ak, a],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "subtitle",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "ImageAtRange",
                kind: "LinkedField",
                name: "image_ranges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "entity_with_image",
                    plural: !1,
                    selections: [z, ac, L],
                    storageKey: null,
                  },
                  x,
                  nh,
                ],
                storageKey: null,
              },
              sh,
              e,
            ],
            storageKey: null,
          },
          bk,
        ],
        storageKey: null,
      };
      Dh = {
        alias: null,
        args: null,
        concreteType: "GroupsSyncMetadata",
        kind: "LinkedField",
        name: "groups_sync_metadata",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Group",
            kind: "LinkedField",
            name: "fb_group",
            plural: !1,
            selections: [m, a],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      Hn = { kind: "TypeDiscriminator", abstractKey: "__isMessage" };
      In = {
        alias: null,
        args: null,
        concreteType: "MessageReaction",
        kind: "LinkedField",
        name: "message_reactions",
        plural: !0,
        selections: [
          rk,
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "user",
            plural: !1,
            selections: $,
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      Jn = {
        alias: null,
        args: null,
        concreteType: "MessagingParticipant",
        kind: "LinkedField",
        name: "unsender",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "messaging_actor",
            plural: !1,
            selections: [z, a, b, zh],
            storageKey: null,
          },
          a,
        ],
        storageKey: null,
      };
      Kn = {
        kind: "InlineFragment",
        selections: [
          wk,
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "message",
            plural: !1,
            selections: [
              e,
              {
                alias: null,
                args: null,
                concreteType: "EntityAtRange",
                kind: "LinkedField",
                name: "ranges",
                plural: !0,
                selections: [
                  x,
                  nh,
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "entity",
                    plural: !1,
                    selections: [z, xk, yk, Ka, L],
                    storageKey: null,
                  },
                  zk,
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          Ak,
          rb,
          H,
          tb,
          Bj,
        ],
        type: "UserMessage",
        abstractKey: null,
      };
      w = [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "node",
          plural: !1,
          selections: sb,
          storageKey: null,
        },
      ];
      Cb = {
        kind: "InlineFragment",
        selections: [
          u,
          c,
          {
            alias: null,
            args: null,
            concreteType: "VideoCallMessageToCaptureAttachmentsConnection",
            kind: "LinkedField",
            name: "call_capture_attachments",
            plural: !1,
            selections: [
              Gh,
              {
                alias: null,
                args: null,
                concreteType: "VideoCallMessageToCaptureAttachmentsEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: w,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "VideoCallMessage",
        abstractKey: null,
      };
      Hb = {
        kind: "InlineFragment",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "MessageImage",
            kind: "LinkedField",
            name: "image_with_metadata",
            plural: !1,
            selections: [Ug, Pa, Cc, a],
            storageKey: null,
          },
          c,
        ],
        type: "ThreadImageMessage",
        abstractKey: null,
      };
      C = {
        kind: "InlineFragment",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "extensible_message_admin_text",
            plural: !1,
            selections: [
              z,
              Hk,
              Ik,
              Jk,
              Kk,
              Lk,
              Mk,
              Nk,
              Ok,
              W,
              gg,
              Qk,
              Rk,
              ui,
              Sk,
              Tk,
              Vk,
              {
                kind: "InlineFragment",
                selections: [
                  hb,
                  og,
                  Wk,
                  Xk,
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "instant_game_update_data",
                    plural: !1,
                    selections: [
                      z,
                      {
                        kind: "InlineFragment",
                        selections: [Yk, ei, kb, Zk],
                        type: "InstantGameXMATCustomMessageClientData",
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  $k,
                ],
                type: "InstantGameUpdateExtensibleMessageAdminText",
                abstractKey: null,
              },
              al,
              bl,
              gl,
              il,
              jl,
              kl,
              ml,
              nl,
              ol,
              Hc,
              ll,
              pl,
              rl,
              sl,
              tl,
              vl,
              wl,
              ul,
              {
                kind: "InlineFragment",
                selections: [
                  xl,
                  yl,
                  zl,
                  Uk,
                  Al,
                  Bl,
                  Cl,
                  Dl,
                  {
                    alias: null,
                    args: null,
                    concreteType:
                      "MessengerCallLogExtensibleMessageAdminTextCallCaptureAttachmentsConnection",
                    kind: "LinkedField",
                    name: "call_capture_attachments",
                    plural: !1,
                    selections: [
                      Gh,
                      {
                        alias: null,
                        args: null,
                        concreteType:
                          "MessengerCallLogExtensibleMessageAdminTextCallCaptureAttachmentsEdge",
                        kind: "LinkedField",
                        name: "edges",
                        plural: !0,
                        selections: w,
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                type: "MessengerCallLogExtensibleMessageAdminText",
                abstractKey: null,
              },
              cl,
              El,
              fl,
              Gl,
              Hl,
              ql,
              Il,
              Jl,
              Ll,
              Kl,
              Ml,
              Nl,
              Ol,
            ],
            storageKey: null,
          },
          ab,
          c,
        ],
        type: "GenericAdminTextMessage",
        abstractKey: null,
      };
      D = [
        z,
        Hn,
        fk,
        V,
        gk,
        ik,
        jk,
        Na,
        kk,
        lk,
        Qg,
        mk,
        Oa,
        nk,
        ok,
        K,
        pk,
        qk,
        In,
        tk,
        Jn,
        vk,
        M,
        {
          alias: null,
          args: null,
          concreteType: "RepliedToMessage",
          kind: "LinkedField",
          name: "replied_to_message",
          plural: !1,
          selections: [
            sd,
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "message",
              plural: !1,
              selections: [
                z,
                Hn,
                fk,
                V,
                gk,
                ik,
                jk,
                Na,
                kk,
                lk,
                Qg,
                mk,
                Oa,
                nk,
                ok,
                K,
                pk,
                qk,
                In,
                tk,
                Jn,
                vk,
                M,
                Kn,
                Bk,
                Cb,
                Dk,
                Hb,
                Fk,
                Gk,
                C,
                ec,
                U,
                L,
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Kn,
        Bk,
        Cb,
        Dk,
        Hb,
        Fk,
        Gk,
        C,
        ec,
        U,
        L,
      ];
      yb = {
        alias: null,
        args: null,
        concreteType: "PinnedMessageData",
        kind: "LinkedField",
        name: "pinned_messages",
        plural: !0,
        selections: [
          V,
          ek,
          {
            condition: "threadlistViewFieldsOnly",
            kind: "Condition",
            passingValue: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "message",
                plural: !1,
                selections: D,
                storageKey: null,
              },
            ],
          },
        ],
        storageKey: null,
      };
      Wb = {
        alias: null,
        args: null,
        concreteType: "GroupsSyncMetadata",
        kind: "LinkedField",
        name: "work_groups_sync_metadata",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Group",
            kind: "LinkedField",
            name: "fb_group",
            plural: !1,
            selections: [
              m,
              a,
              b,
              Qh,
              N,
              B,
              Lj,
              {
                alias: null,
                args: null,
                concreteType: "MultiBackgroundIcon",
                kind: "LinkedField",
                name: "group_icon",
                plural: !1,
                selections: [Ck, a],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      Xb = {
        alias: null,
        args: md,
        concreteType: "MessengerMentorshipProgramOfThreadConnection",
        kind: "LinkedField",
        name: "linked_mentorship_programs",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "MentorshipProgram",
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: [
              a,
              Rl,
              Ld,
              {
                alias: null,
                args: md,
                concreteType:
                  "MentorshipProgramToMentorshipMessengerCurriculumStepOrderByStepCountConnection",
                kind: "LinkedField",
                name: "messenger_curriculum_steps",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "MentorshipMessengerCurriculumStep",
                    kind: "LinkedField",
                    name: "nodes",
                    plural: !0,
                    selections: [Sl, Tl, a],
                    storageKey: null,
                  },
                ],
                storageKey: "messenger_curriculum_steps(first:1)",
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: "linked_mentorship_programs(first:1)",
      };
      A = {
        alias: null,
        args: null,
        concreteType: "WorkUserInfo",
        kind: "LinkedField",
        name: "work_info",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Group",
            kind: "LinkedField",
            name: "work_community",
            plural: !1,
            selections: Ub,
            storageKey: null,
          },
          Nh,
        ],
        storageKey: null,
      };
      Yb = {
        alias: null,
        args: null,
        concreteType: "MessagingParticipant",
        kind: "LinkedField",
        name: "nodes",
        plural: !0,
        selections: Sb,
        storageKey: null,
      };
      Zb = {
        alias: null,
        args: null,
        concreteType: "AllMessagingParticipantsOfThreadConnection",
        kind: "LinkedField",
        name: "all_participants",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "AllMessagingParticipantsOfThreadEdge",
            kind: "LinkedField",
            name: "edges",
            plural: !0,
            selections: [
              Yl,
              {
                alias: null,
                args: null,
                concreteType: "MessagingParticipant",
                kind: "LinkedField",
                name: "node",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "messaging_actor",
                    plural: !1,
                    selections: [
                      z,
                      {
                        kind: "TypeDiscriminator",
                        abstractKey: "__isMessagingActor",
                      },
                      a,
                      b,
                      {
                        kind: "InlineFragment",
                        selections: [
                          Zl,
                          m,
                          X,
                          Tb,
                          $l,
                          am,
                          bm,
                          cm,
                          dm,
                          em,
                          fm,
                          {
                            alias: null,
                            args: null,
                            concreteType: "ScimCompanyUser",
                            kind: "LinkedField",
                            name: "scim_company_user",
                            plural: !1,
                            selections: [gm, a],
                            storageKey: null,
                          },
                          A,
                        ],
                        type: "User",
                        abstractKey: null,
                      },
                      hm,
                      im,
                      km,
                      lm,
                      nm,
                      jm,
                      om,
                      {
                        kind: "InlineFragment",
                        selections: [m, X, $l, pm, cm, A],
                        type: "ReducedMessagingActor",
                        abstractKey: null,
                      },
                      rm,
                      qm,
                      j,
                      sm,
                      tm,
                      um,
                      vm,
                      mm,
                      {
                        kind: "InlineFragment",
                        selections: [
                          X,
                          wm,
                          xm,
                          {
                            alias: null,
                            args: null,
                            concreteType: "WECGroupParticipantsConnection",
                            kind: "LinkedField",
                            name: "wec_group_participants",
                            plural: !1,
                            selections: [Yb, Gh],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: "WECGroupAdminsConnection",
                            kind: "LinkedField",
                            name: "wec_group_admins",
                            plural: !1,
                            selections: [Yb],
                            storageKey: null,
                          },
                        ],
                        type: "WECGroupRecipient",
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  a,
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      $b = {
        alias: null,
        args: null,
        concreteType: "MessagingReadReceiptsOfThreadConnection",
        kind: "LinkedField",
        name: "read_receipts",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "MessagingReadReceipt",
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: [
              Md,
              ym,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "actor",
                plural: !1,
                selections: $,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      zb = {
        condition: "threadlistViewFieldsOnly",
        kind: "Condition",
        passingValue: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "saved_messages",
            plural: !0,
            selections: D,
            storageKey: null,
          },
        ],
      };
      fc = [
        {
          alias: null,
          args: null,
          concreteType: "MessageThread",
          kind: "LinkedField",
          name: "nodes",
          plural: !0,
          selections: [
            a,
            La,
            b,
            ub,
            Sg,
            vb,
            p,
            P,
            vc,
            yc,
            ac,
            zc,
            Q,
            ed,
            gi,
            hi,
            ii,
            ji,
            ki,
            li,
            mi,
            ni,
            oi,
            pi,
            qi,
            ri,
            v,
            q,
            Ob,
            Ii,
            Ji,
            Ki,
            rc,
            uc,
            $i,
            bj,
            tc,
            xc,
            Dc,
            Ya,
            Hj,
            Oj,
            Pj,
            Qj,
            Rj,
            Sj,
            Tj,
            Uj,
            ti,
            $a,
            ck,
            dk,
            Dh,
            yb,
            Wb,
            I,
            Pl,
            Ql,
            Xb,
            Vl,
            Wl,
            Xl,
            zj,
            el,
            Zb,
            $b,
            wc,
            zb,
            Am,
          ],
          storageKey: null,
        },
        Ja,
      ];
      gc = [Cm, B, a];
      Sa = [Cm, $l, b, B, a];
      ic = {
        alias: null,
        args: null,
        concreteType: "InstagramUserV2",
        kind: "LinkedField",
        name: "media_owner",
        plural: !1,
        selections: Sa,
        storageKey: null,
      };
      dc = {
        alias: null,
        args: null,
        concreteType: "InstagramUserV2",
        kind: "LinkedField",
        name: "user",
        plural: !1,
        selections: Sa,
        storageKey: null,
      };
      kc = [
        {
          alias: null,
          args: null,
          concreteType: "InstagramMessageThreadItem",
          kind: "LinkedField",
          name: "nodes",
          plural: !0,
          selections: [
            Fm,
            Oe,
            hl,
            Vm,
            Wm,
            e,
            Xm,
            Ym,
            {
              alias: null,
              args: null,
              concreteType: "IGMessageThreadItemMedia",
              kind: "LinkedField",
              name: "ig_thread_item_media",
              plural: !1,
              selections: [Nm, $m, an, bn, ic],
              storageKey: null,
            },
            en,
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "share",
              plural: !1,
              selections: [
                z,
                dc,
                {
                  alias: null,
                  args: null,
                  concreteType: "IGMessageThreadItemMedia",
                  kind: "LinkedField",
                  name: "media",
                  plural: !0,
                  selections: [Nm, fn, an, bn, ic],
                  storageKey: null,
                },
                gn,
                jn,
                hn,
                Pg,
                kn,
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "IGThreadItemReactions",
              kind: "LinkedField",
              name: "ig_reaction",
              plural: !1,
              selections: [
                ln,
                {
                  alias: null,
                  args: null,
                  concreteType: "InstagramUserV2",
                  kind: "LinkedField",
                  name: "likes",
                  plural: !0,
                  selections: gc,
                  storageKey: null,
                },
                mn,
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: Zm,
              concreteType: "IGThreadItemProfileShareSource",
              kind: "LinkedField",
              name: "profileshare",
              plural: !1,
              selections: [dc, nn],
              storageKey: null,
            },
            id,
            gd,
            hd,
            hg,
            pn,
            tn,
            wb,
            on,
            S,
            qn,
            rn,
            a,
          ],
          storageKey: null,
        },
        Y,
      ];
      Ib = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "page_contact_id",
        storageKey: null,
      };
      Lb = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "ig_thread_id",
        storageKey: null,
      };
      lc = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "unit_type",
        storageKey: null,
      };
      mc = [
        { kind: "Literal", name: "first", value: 4 },
        {
          kind: "Literal",
          name: "message_shared_media_type",
          value: "PHOTO_AND_VIDEO",
        },
      ];
      jc = {
        alias: "fbid",
        args: null,
        kind: "ScalarField",
        name: "legacy_attachment_id",
        storageKey: null,
      };
      Nb = {
        alias: null,
        args: [
          { kind: "Literal", name: "height", value: 250 },
          { kind: "Literal", name: "width", value: 250 },
        ],
        concreteType: "Image",
        kind: "LinkedField",
        name: "image",
        plural: !1,
        selections: l,
        storageKey: "image(height:250,width:250)",
      };
      hc = {
        alias: "dim",
        args: null,
        concreteType: "Vect2",
        kind: "LinkedField",
        name: "original_dimensions",
        plural: !1,
        selections: Bc,
        storageKey: null,
      };
      O = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "cursor",
        storageKey: null,
      };
      J = {
        alias: null,
        args: null,
        concreteType: "PageInfo",
        kind: "LinkedField",
        name: "page_info",
        plural: !1,
        selections: [Ra, sn],
        storageKey: null,
      };
      t = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "full_name",
        storageKey: null,
      };
      oc = [
        { kind: "Literal", name: "height", value: 52 },
        { kind: "Literal", name: "width", value: 52 },
      ];
      Ec = {
        alias: null,
        args: oc,
        concreteType: "PageContactProfilePhotoURI",
        kind: "LinkedField",
        name: "profile_photo_uris",
        plural: !0,
        selections: l,
        storageKey: "profile_photo_uris(height:52,width:52)",
      };
      Gc = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "contact_count",
        storageKey: null,
      };
      Kc = [
        {
          alias: null,
          args: null,
          concreteType: "BusinessPresenceCorporationLabel",
          kind: "LinkedField",
          name: "node",
          plural: !1,
          selections: [a, b, dj, Gc, ej],
          storageKey: null,
        },
      ];
      Lc = [{ kind: "Literal", name: "first", value: 20 }];
      Mc = {
        kind: "ClientExtension",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__id",
            storageKey: null,
          },
        ],
      };
      Nc = [{ kind: "Literal", name: "first", value: 400 }];
      Oc = [
        {
          alias: null,
          args: null,
          concreteType: "BusinessPresenceCustomLabel",
          kind: "LinkedField",
          name: "node",
          plural: !1,
          selections: [a, b, dj, Gc, ej, fj, z],
          storageKey: null,
        },
        O,
      ];
      Pc = [{ kind: "Literal", name: "first", value: 2 }];
      Qc = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "__token",
        storageKey: null,
      };
      Sc = { kind: "Literal", name: "first", value: 5 };
      Rc = [Sc, { kind: "Literal", name: "types", value: ["BUSINESS_ORDER"] }];
      Tc = [Fl, ej];
      Wc = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_classic_page",
        storageKey: null,
      };
      Xc = {
        alias: null,
        args: null,
        concreteType: "BizCRMContactFBAttributes",
        kind: "LinkedField",
        name: "fb_attributes",
        plural: !1,
        selections: [dl],
        storageKey: null,
      };
      Yc = {
        alias: null,
        args: Nc,
        concreteType: "CustomLabelsConnection",
        kind: "LinkedField",
        name: "custom_labels",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "CustomLabelsEdge",
            kind: "LinkedField",
            name: "edges",
            plural: !0,
            selections: Oc,
            storageKey: null,
          },
          Y,
        ],
        storageKey: "custom_labels(first:400)",
      };
      ad = {
        alias: null,
        args: Nc,
        filters: null,
        handle: "connection",
        key: "BizKitContextCardLabelsSection_custom_labels",
        kind: "LinkedHandle",
        name: "custom_labels",
      };
      bd = {
        alias: null,
        args: null,
        concreteType: "BusinessPresenceNode",
        kind: "LinkedField",
        name: "business_presence_node",
        plural: !1,
        selections: d,
        storageKey: null,
      };
      cd = [
        {
          kind: "Literal",
          name: "gk_name",
          value: "mcom_kbank_integration_rollout",
        },
      ];
      Vc = [
        {
          alias: "passes",
          args: null,
          kind: "ScalarField",
          name: "passes_gk",
          storageKey: null,
        },
      ];
      dd = [Sc];
      fd = [
        {
          kind: "Literal",
          name: "gk_name",
          value: "ctm_www_tas_order_integration_gk",
        },
      ];
      jd = [
        {
          alias: "is_order_integration_enabled",
          args: null,
          kind: "ScalarField",
          name: "passes_gk",
          storageKey: null,
        },
      ];
      kd = [
        {
          kind: "Literal",
          name: "gk_name",
          value: "ctm_www_tas_timeline_actions_gk",
        },
      ];
      ld = [
        {
          alias: "showTimelineActions",
          args: null,
          kind: "ScalarField",
          name: "passes_gk",
          storageKey: null,
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [
            aa,
            ba,
            ca,
            da,
            ea,
            fa,
            ga,
            ha,
            ia,
            ja,
            ka,
            la,
            ma,
            na,
            oa,
            pa,
            qa,
            ra,
            sa,
            ta,
            ua,
            va,
            wa,
            xa,
            ya,
            za,
            Aa,
            Ba,
            Ca,
            Da,
            Ea,
            Fa,
            Ga,
          ],
          kind: "Fragment",
          metadata: null,
          name: "BizInboxUnifiedThreadsQuery",
          selections: [
            {
              alias: null,
              args: Ha,
              concreteType: "XFBBizInboxUnifiedThreadList",
              kind: "LinkedField",
              name: "xfb_biz_inbox_unified_thread_list",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "ViewerMessageThreadsConnection",
                  kind: "LinkedField",
                  name: "msgr_threads",
                  plural: !1,
                  selections: Bm,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "ViewerMessageThreadsConnection",
                  kind: "LinkedField",
                  name: "wa_threads",
                  plural: !1,
                  selections: Bm,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InstagramMessageThreadsConnection",
                  kind: "LinkedField",
                  name: "ig_threads",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "InstagramUserV2",
                      kind: "LinkedField",
                      name: "ig_user",
                      plural: !1,
                      selections: Dm,
                      storageKey: null,
                    },
                    Ia,
                    Em,
                    {
                      condition: "loadThreads",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "InstagramMessageThread",
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [
                            Fm,
                            Gm,
                            Hm,
                            Im,
                            Jm,
                            Km,
                            Lm,
                            Mm,
                            Om,
                            gj,
                            kj,
                            $j,
                            Pm,
                            Qm,
                            Rm,
                            Sm,
                            Tm,
                            Um,
                            Yj,
                            Zj,
                            {
                              condition: "loadThreadItems",
                              kind: "Condition",
                              passingValue: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: md,
                                  concreteType:
                                    "InstagramMessageThreadItemsConnection",
                                  kind: "LinkedField",
                                  name: "thread_items",
                                  plural: !1,
                                  selections: dn,
                                  storageKey: "thread_items(first:1)",
                                },
                              ],
                            },
                          ],
                          storageKey: null,
                        },
                        Y,
                      ],
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBBizInboxSelectedThread",
                  kind: "LinkedField",
                  name: "selected_thread",
                  plural: !1,
                  selections: [
                    cn,
                    {
                      alias: null,
                      args: null,
                      concreteType: "InstagramMessageThread",
                      kind: "LinkedField",
                      name: "selected_ig_thread",
                      plural: !1,
                      selections: [
                        Fm,
                        Gm,
                        Hm,
                        Im,
                        Jm,
                        Km,
                        Lm,
                        Mm,
                        Om,
                        gj,
                        kj,
                        $j,
                        Pm,
                        Qm,
                        Rm,
                        Sm,
                        Tm,
                        Um,
                        Yj,
                        Zj,
                        {
                          condition: "load_items",
                          kind: "Condition",
                          passingValue: !0,
                          selections: [
                            {
                              alias: null,
                              args: un,
                              concreteType:
                                "InstagramMessageThreadItemsConnection",
                              kind: "LinkedField",
                              name: "thread_items",
                              plural: !1,
                              selections: dn,
                              storageKey: null,
                            },
                          ],
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "MessageThread",
                      kind: "LinkedField",
                      name: "selected_message_thread",
                      plural: !1,
                      selections: [
                        a,
                        La,
                        b,
                        Ta,
                        Sg,
                        Xg,
                        p,
                        P,
                        wc,
                        vc,
                        yc,
                        ac,
                        zc,
                        Q,
                        ed,
                        gi,
                        hi,
                        ii,
                        ji,
                        ki,
                        li,
                        mi,
                        ni,
                        oi,
                        pi,
                        qi,
                        ri,
                        xi,
                        Gi,
                        Hi,
                        Ii,
                        Ji,
                        Ki,
                        Ni,
                        Zi,
                        $i,
                        bj,
                        mj,
                        pj,
                        Ej,
                        Th,
                        Hj,
                        Oj,
                        Pj,
                        Qj,
                        Rj,
                        Sj,
                        Tj,
                        Uj,
                        ti,
                        bc,
                        ck,
                        dk,
                        Ah,
                        uk,
                        Ek,
                        Mh,
                        I,
                        Pl,
                        Ql,
                        Ul,
                        Vl,
                        Wl,
                        Xl,
                        zj,
                        el,
                        R,
                        {
                          condition: "load_messages",
                          kind: "Condition",
                          passingValue: !0,
                          selections: [
                            {
                              alias: null,
                              args: vn,
                              concreteType: "MessagesOfThreadConnection",
                              kind: "LinkedField",
                              name: "messages",
                              plural: !1,
                              selections: [
                                wn,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "nodes",
                                  plural: !0,
                                  selections: sk,
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                        },
                        {
                          condition: "load_read_receipts",
                          kind: "Condition",
                          passingValue: !0,
                          selections: [zm],
                        },
                        aj,
                      ],
                      storageKey: null,
                    },
                    {
                      condition: "shouldUnifyContextCardQueries",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "BizKitContextCardContainerDetailsFrag_selectedContact",
                          selections: [
                            {
                              alias: null,
                              args: Z,
                              concreteType: "BizCRMContact",
                              kind: "LinkedField",
                              name: "selected_biz_crm_contact",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "BizCRMContactIdentity",
                                  kind: "LinkedField",
                                  name: "identity",
                                  plural: !1,
                                  selections: [xn],
                                  storageKey: null,
                                },
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "BizKitContextCardContainer_contact",
                                },
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: Z,
                              concreteType: "BizCRMContactCardConfig",
                              kind: "LinkedField",
                              name: "selected_biz_crm_contact_card_config",
                              plural: !1,
                              selections: [
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "BizKitContextCard_config",
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [yn],
                        },
                      ],
                    },
                  ],
                  storageKey: null,
                },
                {
                  condition: "getShouldUnifyConfigQueries",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    zn,
                    {
                      alias: null,
                      args: Z,
                      concreteType: "Page",
                      kind: "LinkedField",
                      name: "selected_page",
                      plural: !1,
                      selections: [Bn, Cn, Dn],
                      storageKey: null,
                    },
                  ],
                },
              ],
              storageKey: null,
            },
            En,
            {
              condition: "shouldUnifyContextCardQueries",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  kind: "InlineDataFragmentSpread",
                  name: "BizKitContextCardActivitySectionFrag_activitiesquery",
                  selections: [
                    {
                      alias: null,
                      args: Ha,
                      concreteType: "XFBBizInboxUnifiedThreadList",
                      kind: "LinkedField",
                      name: "xfb_biz_inbox_unified_thread_list",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "XFBBizInboxSelectedThread",
                          kind: "LinkedField",
                          name: "selected_thread",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: Z,
                              concreteType: "BizCRMContact",
                              kind: "LinkedField",
                              name: "selected_biz_crm_contact",
                              plural: !1,
                              selections: [
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "BizKitContextCardActivitySection_contact",
                                },
                              ],
                              storageKey: null,
                            },
                            Fn,
                          ],
                          storageKey: null,
                        },
                        {
                          condition:
                            "isDependencyOfRemovePageDependencyEnabledTool",
                          kind: "Condition",
                          passingValue: !1,
                          selections: [
                            {
                              alias: null,
                              args: Z,
                              concreteType: "Page",
                              kind: "LinkedField",
                              name: "selected_page",
                              plural: !1,
                              selections: [
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "BizKitContextCardActivityDropDown_page",
                                },
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "BizKitContextCardActivityListItem_page",
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      condition:
                        "isDependencyOfRemovePageDependencyEnabledTool",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [
                        {
                          alias: null,
                          args: Gn,
                          concreteType: "XFBMBSBusinessAssets",
                          kind: "LinkedField",
                          name: "xfb_mbs_business_assets",
                          plural: !1,
                          selections: [
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "BizKitContextCardActivityDropDown_mbsBusinessAssets",
                            },
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "BizKitContextCardActivityListItem_mbsBusinessAssets",
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                    },
                  ],
                  args: null,
                  argumentDefinitions: [
                    { kind: "RootArgument", name: "businessAssets" },
                    { kind: "RootArgument", name: "ig_params" },
                    {
                      kind: "RootArgument",
                      name: "isDependencyOfRemovePageDependencyEnabledTool",
                    },
                    { kind: "RootArgument", name: "msgr_params" },
                    yn,
                    { kind: "RootArgument", name: "selected_item_id" },
                    { kind: "RootArgument", name: "wa_params" },
                  ],
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [
            ia,
            fa,
            ga,
            ja,
            Da,
            Ca,
            Ga,
            da,
            na,
            ma,
            wa,
            ea,
            ta,
            Ea,
            ua,
            Fa,
            sa,
            aa,
            qa,
            ra,
            oa,
            la,
            ka,
            pa,
            va,
            ca,
            Aa,
            za,
            ya,
            xa,
            Ba,
            ha,
            ba,
          ],
          kind: "Operation",
          name: "BizInboxUnifiedThreadsQuery",
          selections: [
            {
              alias: null,
              args: Ha,
              concreteType: "XFBBizInboxUnifiedThreadList",
              kind: "LinkedField",
              name: "xfb_biz_inbox_unified_thread_list",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "ViewerMessageThreadsConnection",
                  kind: "LinkedField",
                  name: "msgr_threads",
                  plural: !1,
                  selections: fc,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "ViewerMessageThreadsConnection",
                  kind: "LinkedField",
                  name: "wa_threads",
                  plural: !1,
                  selections: fc,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InstagramMessageThreadsConnection",
                  kind: "LinkedField",
                  name: "ig_threads",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "InstagramUserV2",
                      kind: "LinkedField",
                      name: "ig_user",
                      plural: !1,
                      selections: gc,
                      storageKey: null,
                    },
                    Ia,
                    Em,
                    {
                      condition: "loadThreads",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "InstagramMessageThread",
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [
                            Fm,
                            Gm,
                            Hm,
                            Im,
                            Jm,
                            Km,
                            Lm,
                            Mm,
                            Om,
                            gj,
                            kj,
                            $j,
                            Pm,
                            Qm,
                            Rm,
                            Sm,
                            Tm,
                            Um,
                            Yj,
                            Zj,
                            {
                              condition: "loadThreadItems",
                              kind: "Condition",
                              passingValue: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: md,
                                  concreteType:
                                    "InstagramMessageThreadItemsConnection",
                                  kind: "LinkedField",
                                  name: "thread_items",
                                  plural: !1,
                                  selections: kc,
                                  storageKey: "thread_items(first:1)",
                                },
                              ],
                            },
                            a,
                          ],
                          storageKey: null,
                        },
                        Y,
                      ],
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBBizInboxSelectedThread",
                  kind: "LinkedField",
                  name: "selected_thread",
                  plural: !1,
                  selections: [
                    cn,
                    {
                      alias: null,
                      args: null,
                      concreteType: "InstagramMessageThread",
                      kind: "LinkedField",
                      name: "selected_ig_thread",
                      plural: !1,
                      selections: [
                        Fm,
                        Gm,
                        Hm,
                        Im,
                        Jm,
                        Km,
                        Lm,
                        Mm,
                        Om,
                        gj,
                        kj,
                        $j,
                        Pm,
                        Qm,
                        Rm,
                        Sm,
                        Tm,
                        Um,
                        Yj,
                        Zj,
                        {
                          condition: "load_items",
                          kind: "Condition",
                          passingValue: !0,
                          selections: [
                            {
                              alias: null,
                              args: un,
                              concreteType:
                                "InstagramMessageThreadItemsConnection",
                              kind: "LinkedField",
                              name: "thread_items",
                              plural: !1,
                              selections: kc,
                              storageKey: null,
                            },
                          ],
                        },
                        a,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "MessageThread",
                      kind: "LinkedField",
                      name: "selected_message_thread",
                      plural: !1,
                      selections: [
                        a,
                        La,
                        b,
                        ub,
                        Sg,
                        vb,
                        p,
                        P,
                        vc,
                        yc,
                        ac,
                        zc,
                        Q,
                        ed,
                        gi,
                        hi,
                        ii,
                        ji,
                        ki,
                        li,
                        mi,
                        ni,
                        oi,
                        pi,
                        qi,
                        ri,
                        v,
                        q,
                        Ob,
                        Ii,
                        Ji,
                        Ki,
                        rc,
                        uc,
                        $i,
                        bj,
                        tc,
                        xc,
                        Dc,
                        Ya,
                        Hj,
                        Oj,
                        Pj,
                        Qj,
                        Rj,
                        Sj,
                        Tj,
                        Uj,
                        ti,
                        $a,
                        ck,
                        dk,
                        Dh,
                        yb,
                        Wb,
                        I,
                        Pl,
                        Ql,
                        Xb,
                        Vl,
                        Wl,
                        Xl,
                        zj,
                        el,
                        Zb,
                        wc,
                        zb,
                        {
                          condition: "load_messages",
                          kind: "Condition",
                          passingValue: !0,
                          selections: [
                            {
                              alias: null,
                              args: vn,
                              concreteType: "MessagesOfThreadConnection",
                              kind: "LinkedField",
                              name: "messages",
                              plural: !1,
                              selections: [
                                wn,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "nodes",
                                  plural: !0,
                                  selections: D,
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                        },
                        {
                          condition: "load_read_receipts",
                          kind: "Condition",
                          passingValue: !0,
                          selections: [$b],
                        },
                        aj,
                      ],
                      storageKey: null,
                    },
                    {
                      condition: "shouldUnifyContextCardQueries",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [
                        {
                          alias: null,
                          args: Z,
                          concreteType: "BizCRMContact",
                          kind: "LinkedField",
                          name: "selected_biz_crm_contact",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "BizCRMContactIdentity",
                              kind: "LinkedField",
                              name: "identity",
                              plural: !1,
                              selections: [
                                xn,
                                g,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "contact_id",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            a,
                            {
                              alias: null,
                              args: null,
                              concreteType: "BizCRMContactSharedAttributes",
                              kind: "LinkedField",
                              name: "shared_attributes",
                              plural: !1,
                              selections: [
                                Ib,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_guest_chat",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "has_consented_to_contact_card_tos",
                              storageKey: null,
                            },
                            {
                              condition: "should3DContextCardSections",
                              kind: "Condition",
                              passingValue: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "BizCRMContactIGAttributes",
                                  kind: "LinkedField",
                                  name: "ig_attributes",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "ig_user_id",
                                      storageKey: null,
                                    },
                                    Lb,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "BizCRMContactIGUserProfileUnit",
                                      kind: "LinkedField",
                                      name: "profile_units",
                                      plural: !0,
                                      selections: [lc, e],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "BizCRMContactFBAttributes",
                                  kind: "LinkedField",
                                  name: "fb_attributes",
                                  plural: !1,
                                  selections: [
                                    dl,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "BizCRMContactFBUserProfileUnit",
                                      kind: "LinkedField",
                                      name: "profile_units",
                                      plural: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "TextWithEntities",
                                          kind: "LinkedField",
                                          name: "text",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "EntityAtRange",
                                              kind: "LinkedField",
                                              name: "ranges",
                                              plural: !0,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: null,
                                                  kind: "LinkedField",
                                                  name: "entity",
                                                  plural: !1,
                                                  selections: [z, m, L],
                                                  storageKey: null,
                                                },
                                                x,
                                                nh,
                                              ],
                                              storageKey: null,
                                            },
                                            e,
                                          ],
                                          storageKey: null,
                                        },
                                        lc,
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "BizCRMContactMessengerThreadAttribute",
                                      kind: "LinkedField",
                                      name: "messenger_thread",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "MessageThread",
                                          kind: "LinkedField",
                                          name: "one_to_one_thread",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: "sharedMedia",
                                              args: mc,
                                              concreteType:
                                                "MessageSharedMediaConnection",
                                              kind: "LinkedField",
                                              name: "message_shared_media",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "MessageSharedMediaEdge",
                                                  kind: "LinkedField",
                                                  name: "edges",
                                                  plural: !0,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: null,
                                                      kind: "LinkedField",
                                                      name: "node",
                                                      plural: !1,
                                                      selections: [
                                                        z,
                                                        {
                                                          kind: "TypeDiscriminator",
                                                          abstractKey:
                                                            "__isMessageSharedMedia",
                                                        },
                                                        L,
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: [
                                                            jc,
                                                            Nb,
                                                            hc,
                                                          ],
                                                          type: "MessageImage",
                                                          abstractKey: null,
                                                        },
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: [
                                                            jc,
                                                            Nb,
                                                            hc,
                                                            r,
                                                          ],
                                                          type: "MessageVideo",
                                                          abstractKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    O,
                                                  ],
                                                  storageKey: null,
                                                },
                                                J,
                                              ],
                                              storageKey:
                                                'message_shared_media(first:4,message_shared_media_type:"PHOTO_AND_VIDEO")',
                                            },
                                            {
                                              alias: "sharedMedia",
                                              args: mc,
                                              filters: [
                                                "message_shared_media_type",
                                              ],
                                              handle: "connection",
                                              key: "BizKitContextCardSharedPhotos_sharedMedia",
                                              kind: "LinkedHandle",
                                              name: "message_shared_media",
                                            },
                                            a,
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "BizCRMContactSharedAttributes",
                                  kind: "LinkedField",
                                  name: "shared_attributes",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "BizCRMContactProfile",
                                      kind: "LinkedField",
                                      name: "profile",
                                      plural: !1,
                                      selections: [
                                        Pk,
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "first_name",
                                          storageKey: null,
                                        },
                                        t,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "PageContactProfileURI",
                                          kind: "LinkedField",
                                          name: "profile_uris",
                                          plural: !0,
                                          selections: l,
                                          storageKey: null,
                                        },
                                        {
                                          condition: "shouldMergeLabelsQuery",
                                          kind: "Condition",
                                          passingValue: !1,
                                          selections: [Ec],
                                        },
                                        {
                                          condition: "shouldMergeLabelsQuery",
                                          kind: "Condition",
                                          passingValue: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: oc,
                                              concreteType:
                                                "PageContactProfilePhotoURI",
                                              kind: "LinkedField",
                                              name: "profile_photo_uris_prefetch",
                                              plural: !0,
                                              selections: l,
                                              storageKey:
                                                "profile_photo_uris_prefetch(height:52,width:52)",
                                            },
                                          ],
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "last_name",
                                          storageKey: null,
                                        },
                                        {
                                          alias:
                                            "profile_photo_uri_about_section",
                                          args: [
                                            {
                                              kind: "Literal",
                                              name: "height",
                                              value: 100,
                                            },
                                            {
                                              kind: "Literal",
                                              name: "width",
                                              value: 100,
                                            },
                                          ],
                                          concreteType:
                                            "PageContactProfilePhotoURI",
                                          kind: "LinkedField",
                                          name: "profile_photo_uris",
                                          plural: !0,
                                          selections: l,
                                          storageKey:
                                            "profile_photo_uris(height:100,width:100)",
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "address",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "city_name",
                                          storageKey: null,
                                        },
                                        hk,
                                        {
                                          alias: "phone",
                                          args: null,
                                          concreteType: "PhoneNumber",
                                          kind: "LinkedField",
                                          name: "phone_number",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "region_code",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "national_number",
                                              storageKey: null,
                                            },
                                            {
                                              alias: "phoneNumber",
                                              args: null,
                                              kind: "ScalarField",
                                              name: "display_number",
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        Be,
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "zip_code",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "country_code",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "PageContactBirthday",
                                          kind: "LinkedField",
                                          name: "birthday",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "day",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "month",
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "formatted_birthday",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "suggested_email_address",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "fallback_phone_number",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "city_state",
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "ban_action_type",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_banned",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_blocked",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_onsite_user",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "BizCRMContactSharedAttributesCorpLabelListConnection",
                                      kind: "LinkedField",
                                      name: "corp_label_list",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "BizCRMContactSharedAttributesCorpLabelListEdge",
                                          kind: "LinkedField",
                                          name: "edges",
                                          plural: !0,
                                          selections: Kc,
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: Lc,
                                      concreteType:
                                        "BizCRMContactSharedAttributesSuggestedLabelsConnection",
                                      kind: "LinkedField",
                                      name: "suggested_labels",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "BizCRMContactSharedAttributesSuggestedLabelsEdge",
                                          kind: "LinkedField",
                                          name: "edges",
                                          plural: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: null,
                                              kind: "LinkedField",
                                              name: "node",
                                              plural: !1,
                                              selections: [
                                                z,
                                                a,
                                                b,
                                                dj,
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    Li,
                                                    Ih,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "upsell",
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  type: "BusinessPresenceDerivedLabel",
                                                  abstractKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                            O,
                                          ],
                                          storageKey: null,
                                        },
                                        Y,
                                        Mc,
                                      ],
                                      storageKey: "suggested_labels(first:20)",
                                    },
                                    {
                                      alias: null,
                                      args: Lc,
                                      filters: null,
                                      handle: "connection",
                                      key: "BizKitContextCard_suggested_labels",
                                      kind: "LinkedHandle",
                                      name: "suggested_labels",
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "BizCRMContactBusinessAttributes",
                                  kind: "LinkedField",
                                  name: "business_attributes",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "BizCRMContactCommunicationPreference",
                                      kind: "LinkedField",
                                      name: "communication_preference",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "email_subscription_status",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "user_controlled_email_subscription_status",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "email_insight_tracking_consent",
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "BizCRMContactMessageLabelAttribute",
                                      kind: "LinkedField",
                                      name: "customer_labels",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: Nc,
                                          concreteType:
                                            "BizCRMContactMessageLabelAttributeLabelListConnection",
                                          kind: "LinkedField",
                                          name: "label_list",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "BizCRMContactMessageLabelAttributeLabelListEdge",
                                              kind: "LinkedField",
                                              name: "edges",
                                              plural: !0,
                                              selections: Oc,
                                              storageKey: null,
                                            },
                                            Y,
                                            Mc,
                                          ],
                                          storageKey: "label_list(first:400)",
                                        },
                                        {
                                          alias: null,
                                          args: Nc,
                                          filters: null,
                                          handle: "connection",
                                          key: "Contact_customer_label_list",
                                          kind: "LinkedHandle",
                                          name: "label_list",
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "BizCRMContactMessageLabelAttributeCustomerCustomTagsConnection",
                                          kind: "LinkedField",
                                          name: "customer_custom_tags",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "BizCRMContactMessageLabelAttributeCustomerCustomTagsEdge",
                                              kind: "LinkedField",
                                              name: "edges",
                                              plural: !0,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: "PageCustomTag",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: ij,
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "BizCRMContactAdminNotesAttribute",
                                      kind: "LinkedField",
                                      name: "admin_notes",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: Pc,
                                          concreteType:
                                            "BizCRMContactAdminNotesAttributeNotesListConnection",
                                          kind: "LinkedField",
                                          name: "notes_list",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "BizCRMContactAdminNotesAttributeNotesListEdge",
                                              kind: "LinkedField",
                                              name: "edges",
                                              plural: !0,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: "PageAdminNote",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: [
                                                    a,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "TextWithEntities",
                                                      kind: "LinkedField",
                                                      name: "body",
                                                      plural: !1,
                                                      selections: f,
                                                      storageKey: null,
                                                    },
                                                    bi,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "note_label",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "action_source_type",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: null,
                                                      kind: "LinkedField",
                                                      name: "underlying_admin_creator",
                                                      plural: !1,
                                                      selections: [z, b, a],
                                                      storageKey: null,
                                                    },
                                                    z,
                                                  ],
                                                  storageKey: null,
                                                },
                                                O,
                                              ],
                                              storageKey: null,
                                            },
                                            J,
                                            Mc,
                                          ],
                                          storageKey: "notes_list(first:2)",
                                        },
                                        {
                                          alias: null,
                                          args: Pc,
                                          filters: null,
                                          handle: "connection",
                                          key: "BizKitContextCard_notes_list",
                                          kind: "LinkedHandle",
                                          name: "notes_list",
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "BizCRMContactWAAttributes",
                                  kind: "LinkedField",
                                  name: "wa_attributes",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "wa_customer_id",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "opt_in_status",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                Qc,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "BizCRMContactBusinessActions",
                                  kind: "LinkedField",
                                  name: "business_actions",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: Rc,
                                      concreteType:
                                        "BizCRMContactBusinessActionsActionsConnection",
                                      kind: "LinkedField",
                                      name: "actions",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "BizCRMContactBusinessActionsActionsEdge",
                                          kind: "LinkedField",
                                          name: "edges",
                                          plural: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: null,
                                              kind: "LinkedField",
                                              name: "node",
                                              plural: !1,
                                              selections: [
                                                z,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "BizCRMContactAction3DWrapper",
                                                  kind: "LinkedField",
                                                  name: "wrapper",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: null,
                                                      kind: "LinkedField",
                                                      name: "contact_action",
                                                      plural: !1,
                                                      selections: [
                                                        z,
                                                        bi,
                                                        Kb,
                                                        g,
                                                        Pe,
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "TextWithEntities",
                                                          kind: "LinkedField",
                                                          name: "descriptions",
                                                          plural: !0,
                                                          selections: f,
                                                          storageKey: null,
                                                        },
                                                        nb,
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "click_url",
                                                          storageKey: null,
                                                        },
                                                        Jb,
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: [
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              kind: "ScalarField",
                                                              name: "invoice_id",
                                                              storageKey: null,
                                                            },
                                                            Fl,
                                                          ],
                                                          type: "BizCRMContactAdAction",
                                                          abstractKey: null,
                                                        },
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: [
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              concreteType:
                                                                "Story",
                                                              kind: "LinkedField",
                                                              name: "story",
                                                              plural: !1,
                                                              selections: d,
                                                              storageKey: null,
                                                            },
                                                          ],
                                                          type: "BizCRMContactFacebookActionWithStory",
                                                          abstractKey: null,
                                                        },
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: Tc,
                                                          type: "BizCRMContactCustomAction",
                                                          abstractKey: null,
                                                        },
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: [ej],
                                                          type: "BizCRMContactBusinessOrderAction",
                                                          abstractKey: null,
                                                        },
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: Tc,
                                                          type: "BizCRMContactEmailAction",
                                                          abstractKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                            O,
                                          ],
                                          storageKey: null,
                                        },
                                        J,
                                      ],
                                      storageKey:
                                        'actions(first:5,types:["BUSINESS_ORDER"])',
                                    },
                                    {
                                      alias: null,
                                      args: Rc,
                                      filters: ["types"],
                                      handle: "connection",
                                      key: "BizKitContextCardOrders__actions",
                                      kind: "LinkedHandle",
                                      name: "actions",
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Page",
                                  kind: "LinkedField",
                                  name: "page",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_p2m_lite_payment_onboarded",
                                      storageKey: null,
                                    },
                                    a,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  condition:
                                    "isDependencyOfRemovePageDependencyEnabledTool",
                                  kind: "Condition",
                                  passingValue: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Page",
                                      kind: "LinkedField",
                                      name: "page",
                                      plural: !1,
                                      selections: [Wc],
                                      storageKey: null,
                                    },
                                  ],
                                },
                                {
                                  condition:
                                    "isDependencyOfRemovePageDependencyEnabledTool",
                                  kind: "Condition",
                                  passingValue: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "XFBMBSBusinessAssets",
                                      kind: "LinkedField",
                                      name: "mbs_business_assets",
                                      plural: !1,
                                      selections: [Wc, a],
                                      storageKey: null,
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              condition: "shouldSkipMessage",
                              kind: "Condition",
                              passingValue: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "BizCRMContactSharedAttributes",
                                  kind: "LinkedField",
                                  name: "shared_attributes",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "BizCRMContactProfile",
                                      kind: "LinkedField",
                                      name: "profile",
                                      plural: !1,
                                      selections: [t, Ec],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "PageContactCTAType",
                                      kind: "LinkedField",
                                      name: "contact_ctas",
                                      plural: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "cta_type",
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                Xc,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "BizCRMContactIGAttributes",
                                  kind: "LinkedField",
                                  name: "ig_attributes",
                                  plural: !1,
                                  selections: [
                                    Lb,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "BizCRMContactIGUserProfileUnit",
                                      kind: "LinkedField",
                                      name: "profile_units",
                                      plural: !0,
                                      selections: [e, lc],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                            },
                            {
                              condition: "shouldSkipPageQuery",
                              kind: "Condition",
                              passingValue: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Page",
                                  kind: "LinkedField",
                                  name: "page",
                                  plural: !1,
                                  selections: [
                                    {
                                      condition: "shouldMergeLabelsQuery",
                                      kind: "Condition",
                                      passingValue: !0,
                                      selections: [
                                        Yc,
                                        ad,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "PageCorpLabelsConnection",
                                          kind: "LinkedField",
                                          name: "corp_labels",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "PageCorpLabelsEdge",
                                              kind: "LinkedField",
                                              name: "edges",
                                              plural: !0,
                                              selections: Kc,
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Page",
                                      kind: "LinkedField",
                                      name: "if_viewer_can_manage_permissions",
                                      plural: !1,
                                      selections: $,
                                      storageKey: null,
                                    },
                                    bd,
                                    {
                                      alias: "is_in_kbank_rollout",
                                      args: cd,
                                      concreteType: "EntGKCheck",
                                      kind: "LinkedField",
                                      name: "gk_check",
                                      plural: !1,
                                      selections: Vc,
                                      storageKey:
                                        'gk_check(gk_name:"mcom_kbank_integration_rollout")',
                                    },
                                    {
                                      alias: "is_page_enabled_for_wam",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "gk_name",
                                          value: "whatsapp_marketing_alpha",
                                        },
                                      ],
                                      concreteType: "EntGKCheck",
                                      kind: "LinkedField",
                                      name: "gk_check",
                                      plural: !1,
                                      selections: An,
                                      storageKey:
                                        'gk_check(gk_name:"whatsapp_marketing_alpha")',
                                    },
                                    {
                                      alias:
                                        "show_payment_onboarding_context_card",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "gk_name",
                                          value:
                                            "messenger_p2m_lite_merchant_onboarding",
                                        },
                                      ],
                                      concreteType: "EntGKCheck",
                                      kind: "LinkedField",
                                      name: "gk_check",
                                      plural: !1,
                                      selections: An,
                                      storageKey:
                                        'gk_check(gk_name:"messenger_p2m_lite_merchant_onboarding")',
                                    },
                                    a,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  condition:
                                    "isDependencyOfRemovePageDependencyEnabledTool",
                                  kind: "Condition",
                                  passingValue: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "XFBMBSBusinessAssets",
                                      kind: "LinkedField",
                                      name: "mbs_business_assets",
                                      plural: !1,
                                      selections: [
                                        {
                                          condition: "shouldMergeLabelsQuery",
                                          kind: "Condition",
                                          passingValue: !0,
                                          selections: [
                                            Yc,
                                            ad,
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "XFBMBSBusinessAssetsCorpLabelsConnection",
                                              kind: "LinkedField",
                                              name: "corp_labels",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "XFBMBSBusinessAssetsCorpLabelsEdge",
                                                  kind: "LinkedField",
                                                  name: "edges",
                                                  plural: !0,
                                                  selections: Kc,
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "Page",
                                          kind: "LinkedField",
                                          name: "page_if_viewer_can_manage_permissions",
                                          plural: !1,
                                          selections: $,
                                          storageKey: null,
                                        },
                                        bd,
                                        {
                                          alias: "is_in_kbank_rollout",
                                          args: cd,
                                          concreteType: "EntGKCheck",
                                          kind: "LinkedField",
                                          name: "gk_check_page",
                                          plural: !1,
                                          selections: Vc,
                                          storageKey:
                                            'gk_check_page(gk_name:"mcom_kbank_integration_rollout")',
                                        },
                                        a,
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: Z,
                          concreteType: "BizCRMContactCardConfig",
                          kind: "LinkedField",
                          name: "selected_biz_crm_contact_card_config",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "permission",
                              storageKey: null,
                            },
                            {
                              condition: "should3DContextCardSections",
                              kind: "Condition",
                              passingValue: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "sections",
                                  storageKey: null,
                                },
                              ],
                            },
                            {
                              condition: "should3DContextCardSections",
                              kind: "Condition",
                              passingValue: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "sections_renderers",
                                  plural: !0,
                                  selections: [
                                    z,
                                    {
                                      kind: "TypeDiscriminator",
                                      abstractKey:
                                        "__isXFBBizCRMContactSectionRenderer",
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "section_enum",
                                      storageKey: null,
                                    },
                                    a,
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "BizKitContextCardSection3DWrapper_sections",
                                          fragmentName:
                                            "BizKitContextCardProfileSection3DWrapper_profile",
                                          fragmentPropName: "profile",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "XFBBizKitContextCardProfileSectionRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "BizKitContextCardSection3DWrapper_sections",
                                          fragmentName:
                                            "BizKitContextCardAboutDetailSection3DWrapper_about",
                                          fragmentPropName: "about",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "XFBBizKitContextCardAboutDetailSectionRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "BizKitContextCardSection3DWrapper_sections",
                                          fragmentName:
                                            "BizKitContextCardAboutSectionFacebook3DWrapper_details",
                                          fragmentPropName: "details",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "XFBBizKitContextCardAboutSectionFacebookRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "BizKitContextCardSection3DWrapper_sections",
                                          fragmentName:
                                            "BizKitContextCardAboutSectionInstagram3DWrapper_details",
                                          fragmentPropName: "details",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "XFBBizKitContextCardAboutSectionInstagramRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "BizKitContextCardSection3DWrapper_sections",
                                          fragmentName:
                                            "BizKitContextCardNotesSection3DWrapper_notes",
                                          fragmentPropName: "notes",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "XFBBizKitContextCardNotesSectionRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "BizKitContextCardSection3DWrapper_sections",
                                          fragmentName:
                                            "BizKitContextCardMediaSection3DWrapper_media",
                                          fragmentPropName: "media",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "XFBBizKitContextCardMediaSectionRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "BizKitContextCardSection3DWrapper_sections",
                                          fragmentName:
                                            "BizKitContextCardOrdersSection3DWrapper_orders",
                                          fragmentPropName: "orders",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "XFBBizKitContextCardOrdersSectionRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "BizKitContextCardSection3DWrapper_sections",
                                          fragmentName:
                                            "BizKitContextCardMessageSection3DWrapper_details",
                                          fragmentPropName: "details",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "XFBBizKitContextCardMessageSectionRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "BizKitContextCardSection3DWrapper_sections",
                                          fragmentName:
                                            "BizKitContextLabels3DWrapper_contactLabels",
                                          fragmentPropName: "contactLabels",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "XFBBizKitContextCardLabelsSectionRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "BizKitContextCardSection3DWrapper_sections",
                                          fragmentName:
                                            "BizKitContextCardAddLeadSection3DWrapper_lead",
                                          fragmentPropName: "lead",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "XFBBizKitContextCardLeadSectionRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "BizKitContextCardSection3DWrapper_sections",
                                          fragmentName:
                                            "BizKitContextCardActivitySection3DWrapper_activities",
                                          fragmentPropName: "activities",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "XFBBizKitContextCardActivitySectionRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "BizKitContextCardSection3DWrapper_sections",
                                          fragmentName:
                                            "BizKitContextCardPaymentSection3DWrapper_payment",
                                          fragmentPropName: "payment",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "XFBBizKitMessengerOrdersContextCardSectionRenderer",
                                      abstractKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                    },
                  ],
                  storageKey: null,
                },
                {
                  condition: "getShouldUnifyConfigQueries",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    zn,
                    {
                      alias: null,
                      args: Z,
                      concreteType: "Page",
                      kind: "LinkedField",
                      name: "selected_page",
                      plural: !1,
                      selections: [Bn, Cn, Dn, a],
                      storageKey: null,
                    },
                  ],
                },
              ],
              storageKey: null,
            },
            En,
            {
              condition: "shouldUnifyContextCardQueries",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: null,
                  args: Ha,
                  concreteType: "XFBBizInboxUnifiedThreadList",
                  kind: "LinkedField",
                  name: "xfb_biz_inbox_unified_thread_list",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBBizInboxSelectedThread",
                      kind: "LinkedField",
                      name: "selected_thread",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: Z,
                          concreteType: "BizCRMContact",
                          kind: "LinkedField",
                          name: "selected_biz_crm_contact",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "BizCRMContactAllActions",
                              kind: "LinkedField",
                              name: "all_actions",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: dd,
                                  concreteType:
                                    "BizCRMContactAllActionsActionsConnection",
                                  kind: "LinkedField",
                                  name: "actions",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "BizCRMContactAllActionsActionsEdge",
                                      kind: "LinkedField",
                                      name: "edges",
                                      plural: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "node",
                                          plural: !1,
                                          selections: [
                                            z,
                                            {
                                              alias: "codeSplitWrapper",
                                              args: null,
                                              concreteType:
                                                "BizCRMContactAction3DWrapper",
                                              kind: "LinkedField",
                                              name: "wrapper",
                                              plural: !1,
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "BizKitContextCardActivityListItem3DWrapper_BizCRMContactAction3DWrapper",
                                                  fragmentName:
                                                    "BizKitContextCardActivityListItem_node",
                                                  fragmentPropName: "node",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        O,
                                      ],
                                      storageKey: null,
                                    },
                                    J,
                                    Mc,
                                  ],
                                  storageKey: "actions(first:5)",
                                },
                                {
                                  alias: null,
                                  args: dd,
                                  filters: null,
                                  handle: "connection",
                                  key: "BizKitContextCardActivityList_actions",
                                  kind: "LinkedHandle",
                                  name: "actions",
                                },
                                {
                                  alias: "interaction_count",
                                  args: null,
                                  concreteType:
                                    "BizCRMContactAllActionsActionsConnection",
                                  kind: "LinkedField",
                                  name: "actions",
                                  plural: !1,
                                  selections: Kj,
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            a,
                            Qc,
                            Xc,
                            {
                              alias: null,
                              args: null,
                              concreteType: "BizCRMContactSharedAttributes",
                              kind: "LinkedField",
                              name: "shared_attributes",
                              plural: !1,
                              selections: [Ib],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        Fn,
                      ],
                      storageKey: null,
                    },
                    {
                      condition:
                        "isDependencyOfRemovePageDependencyEnabledTool",
                      kind: "Condition",
                      passingValue: !1,
                      selections: [
                        {
                          alias: null,
                          args: Z,
                          concreteType: "Page",
                          kind: "LinkedField",
                          name: "selected_page",
                          plural: !1,
                          selections: [
                            {
                              alias: "ctm_www_tas_order_integration_gk",
                              args: fd,
                              concreteType: "EntGKCheck",
                              kind: "LinkedField",
                              name: "gk_check",
                              plural: !1,
                              selections: jd,
                              storageKey:
                                'gk_check(gk_name:"ctm_www_tas_order_integration_gk")',
                            },
                            {
                              alias: "timelineActionsCheck",
                              args: kd,
                              concreteType: "EntGKCheck",
                              kind: "LinkedField",
                              name: "gk_check",
                              plural: !1,
                              selections: ld,
                              storageKey:
                                'gk_check(gk_name:"ctm_www_tas_timeline_actions_gk")',
                            },
                            a,
                          ],
                          storageKey: null,
                        },
                      ],
                    },
                  ],
                  storageKey: null,
                },
                {
                  condition: "isDependencyOfRemovePageDependencyEnabledTool",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: null,
                      args: Gn,
                      concreteType: "XFBMBSBusinessAssets",
                      kind: "LinkedField",
                      name: "xfb_mbs_business_assets",
                      plural: !1,
                      selections: [
                        {
                          alias: "ctm_www_tas_order_integration_gk",
                          args: fd,
                          concreteType: "EntGKCheck",
                          kind: "LinkedField",
                          name: "gk_check_page",
                          plural: !1,
                          selections: jd,
                          storageKey:
                            'gk_check_page(gk_name:"ctm_www_tas_order_integration_gk")',
                        },
                        {
                          alias: "timelineActionsCheck",
                          args: kd,
                          concreteType: "EntGKCheck",
                          kind: "LinkedField",
                          name: "gk_check_page",
                          plural: !1,
                          selections: ld,
                          storageKey:
                            'gk_check_page(gk_name:"ctm_www_tas_timeline_actions_gk")',
                        },
                        a,
                      ],
                      storageKey: null,
                    },
                  ],
                },
              ],
            },
          ],
        },
        params: {
          id: "5697182787031932",
          metadata: {},
          name: "BizInboxUnifiedThreadsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    ba("relay-runtime").PreloadableQueryRegistry.set(aa.params.id, aa);
    ea.exports = aa;
  },
  null
);
__d(
  "BizKitContextCardActivitySectionFrag_activitiesquery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "BizKitContextCardActivitySectionFrag_activitiesquery",
    };
    e.exports = a;
  },
  null
);
__d(
  "BizKitContextCardContainerDetailsFrag_selectedContact.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "BizKitContextCardContainerDetailsFrag_selectedContact",
    };
    e.exports = a;
  },
  null
);
__d(
  "MessengerParticipantsQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "ids" },
          { defaultValue: null, kind: "LocalArgument", name: "source" },
        ],
        b = [{ kind: "Variable", name: "id", variableName: "ids" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "gender",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        h = {
          alias: "big_image_src",
          args: [
            { kind: "Literal", name: "height", value: 60 },
            { kind: "Literal", name: "width", value: 60 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "uri",
              storageKey: null,
            },
          ],
          storageKey: "profile_picture(height:60,width:60)",
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "short_name",
          storageKey: null,
        },
        j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "username",
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_viewer_friend",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_messenger_user",
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_message_blocked_by_viewer",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_viewer_coworker",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_employee",
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_aloha_proxy_confirmed",
          storageKey: null,
        },
        q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "company_title",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "job_title",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          concreteType: "WorkUserInfo",
          kind: "LinkedField",
          name: "work_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Group",
              kind: "LinkedField",
              name: "work_community",
              plural: !1,
              selections: [e],
              storageKey: null,
            },
            r,
          ],
          storageKey: null,
        },
        t = {
          kind: "InlineFragment",
          selections: [
            f,
            g,
            h,
            i,
            k,
            l,
            m,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_viewer_managing_parent",
              storageKey: null,
            },
          ],
          type: "NeoApprovedUser",
          abstractKey: null,
        },
        u = {
          kind: "InlineFragment",
          selections: [
            g,
            h,
            j,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "accepts_messenger_user_feedback",
              storageKey: null,
            },
            l,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_messenger_platform_bot",
              storageKey: null,
            },
            m,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_viewer_subscribed_to_message_updates",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "InstantGameChannelInfo",
              kind: "LinkedField",
              name: "instant_game_channel",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Application",
                  kind: "LinkedField",
                  name: "application",
                  plural: !1,
                  selections: [c],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "verification_status",
              storageKey: null,
            },
          ],
          type: "Page",
          abstractKey: null,
        },
        v = [g, h, m],
        w = {
          kind: "InlineFragment",
          selections: v,
          type: "SmsMessagingParticipant",
          abstractKey: null,
        },
        x = {
          kind: "InlineFragment",
          selections: [h, m],
          type: "InstagramMessagingUser",
          abstractKey: null,
        },
        y = [h],
        z = {
          kind: "InlineFragment",
          selections: y,
          type: "LiveChatOnlyPerson",
          abstractKey: null,
        };
      v = {
        kind: "InlineFragment",
        selections: v,
        type: "UnavailableMessagingActor",
        abstractKey: null,
      };
      var A = {
          kind: "InlineFragment",
          selections: y,
          type: "UnifiedMessagingInstagramUser",
          abstractKey: null,
        },
        B = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_blocked_by_viewer",
          storageKey: null,
        },
        C = [g, h, j],
        D = {
          kind: "InlineFragment",
          selections: C,
          type: "Group",
          abstractKey: null,
        };
      C = {
        kind: "InlineFragment",
        selections: C,
        type: "Event",
        abstractKey: null,
      };
      var E = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "WorkForeignEntityInfo",
              kind: "LinkedField",
              name: "work_foreign_entity_info",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "detail",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "label",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "type",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "WorkForeignEntity",
          abstractKey: "__isWorkForeignEntity",
        },
        F = {
          kind: "InlineFragment",
          selections: [g, h, i, m],
          type: "XFBWorkroomsBaseUser",
          abstractKey: "__isXFBWorkroomsBaseUser",
        },
        G = {
          kind: "InlineFragment",
          selections: y,
          type: "MessengerCallGuestUser",
          abstractKey: null,
        },
        H = {
          kind: "InlineFragment",
          selections: y,
          type: "WorkVCEndpointUser",
          abstractKey: null,
        },
        I = {
          kind: "InlineFragment",
          selections: y,
          type: "WECMailboxAccount",
          abstractKey: null,
        };
      y = {
        kind: "InlineFragment",
        selections: y,
        type: "WECCustomer",
        abstractKey: null,
      };
      var J = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "wec_group_creation_time",
          storageKey: null,
        },
        K = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "wec_group_invite_link",
          storageKey: null,
        },
        L = {
          alias: null,
          args: null,
          concreteType: "MessagingParticipant",
          kind: "LinkedField",
          name: "nodes",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "messaging_actor",
              plural: !1,
              selections: [c, e],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        M = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        };
      r = {
        alias: null,
        args: null,
        concreteType: "WorkUserInfo",
        kind: "LinkedField",
        name: "work_info",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Group",
            kind: "LinkedField",
            name: "work_community",
            plural: !1,
            selections: [e, c],
            storageKey: null,
          },
          r,
        ],
        storageKey: null,
      };
      var N = {
        alias: null,
        args: null,
        concreteType: "MessagingParticipant",
        kind: "LinkedField",
        name: "nodes",
        plural: !0,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "messaging_actor",
            plural: !1,
            selections: [d, c, e],
            storageKey: null,
          },
          c,
        ],
        storageKey: null,
      };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "MessengerParticipantsQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "messaging_actors",
              plural: !0,
              selections: [
                c,
                d,
                e,
                {
                  kind: "InlineFragment",
                  selections: [
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    {
                      alias: null,
                      args: null,
                      concreteType: "ScimCompanyUser",
                      kind: "LinkedField",
                      name: "scim_company_user",
                      plural: !1,
                      selections: [q],
                      storageKey: null,
                    },
                    s,
                  ],
                  type: "User",
                  abstractKey: null,
                },
                t,
                u,
                w,
                x,
                z,
                v,
                A,
                {
                  kind: "InlineFragment",
                  selections: [g, h, j, B, m, s],
                  type: "ReducedMessagingActor",
                  abstractKey: null,
                },
                D,
                C,
                E,
                F,
                G,
                H,
                I,
                y,
                {
                  kind: "InlineFragment",
                  selections: [
                    h,
                    J,
                    K,
                    {
                      alias: null,
                      args: null,
                      concreteType: "WECGroupParticipantsConnection",
                      kind: "LinkedField",
                      name: "wec_group_participants",
                      plural: !1,
                      selections: [L, M],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "WECGroupAdminsConnection",
                      kind: "LinkedField",
                      name: "wec_group_admins",
                      plural: !1,
                      selections: [L],
                      storageKey: null,
                    },
                  ],
                  type: "WECGroupRecipient",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "MessengerParticipantsQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "messaging_actors",
              plural: !0,
              selections: [
                d,
                {
                  kind: "TypeDiscriminator",
                  abstractKey: "__isMessagingActor",
                },
                c,
                e,
                {
                  kind: "InlineFragment",
                  selections: [
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    {
                      alias: null,
                      args: null,
                      concreteType: "ScimCompanyUser",
                      kind: "LinkedField",
                      name: "scim_company_user",
                      plural: !1,
                      selections: [q, c],
                      storageKey: null,
                    },
                    r,
                  ],
                  type: "User",
                  abstractKey: null,
                },
                t,
                u,
                w,
                x,
                z,
                v,
                A,
                {
                  kind: "InlineFragment",
                  selections: [g, h, j, B, m, r],
                  type: "ReducedMessagingActor",
                  abstractKey: null,
                },
                D,
                C,
                E,
                F,
                G,
                H,
                I,
                y,
                {
                  kind: "InlineFragment",
                  selections: [
                    h,
                    J,
                    K,
                    {
                      alias: null,
                      args: null,
                      concreteType: "WECGroupParticipantsConnection",
                      kind: "LinkedField",
                      name: "wec_group_participants",
                      plural: !1,
                      selections: [N, M],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "WECGroupAdminsConnection",
                      kind: "LinkedField",
                      name: "wec_group_admins",
                      plural: !1,
                      selections: [N],
                      storageKey: null,
                    },
                  ],
                  type: "WECGroupRecipient",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "8948060908553385",
          metadata: {},
          name: "MessengerParticipantsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a;
  },
  null
);
__d(
  "BizInboxIgThreadQueryMergeUtil",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("gkx")("5661");
    }
    g.getShouldMergeIgThreadQuery = a;
  },
  98
);
__d(
  "BizInboxCTSSuggestedActionType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      SAVE_LAST_SENT_MESSAGE: "SAVE_LAST_SENT_MESSAGE",
      NONE: "NONE",
      SET_INSTANT_REPLY: "SET_INSTANT_REPLY",
      MARK_AS_PAID: "MARK_AS_PAID",
      MARK_AS_SHIPPED: "MARK_AS_SHIPPED",
      SUGGESTED_REPLY: "SUGGESTED_REPLY",
      SET_ICEBREAKER_QUESTIONS: "SET_ICEBREAKER_QUESTIONS",
      SWITCH_TO_EMAIL_COMPOSER: "SWITCH_TO_EMAIL_COMPOSER",
      ONBOARD_TO_EMAIL: "ONBOARD_TO_EMAIL",
      SET_FAQ: "SET_FAQ",
      SET_FOLLOW_UP: "SET_FOLLOW_UP",
      SET_INSTANT_REPLY_AUTOMATION: "SET_INSTANT_REPLY_AUTOMATION",
      SET_AWAY_MESSAGE_AUTOMATION: "SET_AWAY_MESSAGE_AUTOMATION",
      SUGGESTED_LABEL: "SUGGESTED_LABEL",
      EXTRACT_INFO_TO_CONTACT_CARD: "EXTRACT_INFO_TO_CONTACT_CARD",
      SET_COMMENT_TO_MESSAGE_AUTOMATION: "SET_COMMENT_TO_MESSAGE_AUTOMATION",
      CREATE_OFFER: "CREATE_OFFER",
      CTD_UPSELL: "CTD_UPSELL",
    });
    f["default"] = a;
  },
  66
);
__d(
  "BizInboxSurface",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "BUSINESS_SUITE",
      "CREATOR_STUDIO",
      "INVALID",
      "PAGE",
      "PAGE_APPOINTMENT",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "BizInboxSurfaceContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(Object.freeze({}));
    c = b;
    g["default"] = c;
  },
  98
);
__d(
  "BizInboxSurfaceUtils",
  [
    "BizInboxSurface",
    "BizInboxSurfaceContext",
    "URI",
    "XBizSuiteControllerRouteBuilder",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function i() {
      var a = c("XBizSuiteControllerRouteBuilder").buildURL({});
      a = new (c("URI"))(a).getQualifiedURI().toString();
      return c("URI")
        .getRequestURI()
        .getQualifiedURI()
        .toString()
        .startsWith(a);
    }
    function a() {
      var a = h(c("BizInboxSurfaceContext"));
      a = a.inboxSurface;
      return (a = a) != null ? a : c("BizInboxSurface").INVALID;
    }
    function b() {
      var a = new RegExp("/inbox/(all|instagram_direct|messenger)", "i");
      return (
        i() && a.test(c("URI").getRequestURI().getQualifiedURI().toString())
      );
    }
    g.isBizSuiteSurface = i;
    g.useBizInboxSurface = a;
    g.useBizInboxSkeletonLoadingState = b;
  },
  98
);
__d(
  "BizInboxGating",
  [
    "BizInboxCTSSuggestedActionType",
    "BizInboxSurfaceUtils",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("justknobx")._("113");
    }
    function b() {
      return c("justknobx")._("112");
    }
    function e() {
      return c("justknobx")._("126");
    }
    function f() {
      return c("justknobx")._("131");
    }
    function h() {
      return c("justknobx")._("104");
    }
    function i() {
      return c("justknobx")._("34");
    }
    function j() {
      return c("justknobx")._("136");
    }
    function k() {
      return c("justknobx")._("33");
    }
    function l() {
      return c("justknobx")._("63");
    }
    function m() {
      return c("justknobx")._("189");
    }
    function n() {
      return c("justknobx")._("140");
    }
    function o() {
      return c("justknobx")._("28");
    }
    function p() {
      return c("justknobx")._("167");
    }
    function q() {
      return !1;
    }
    function r() {
      return !1;
    }
    function s() {
      return c("gkx")("1969323");
    }
    function t() {
      return c("gkx")("1997123");
    }
    function u() {
      return !0;
    }
    function v() {
      return !d("BizInboxSurfaceUtils").isBizSuiteSurface();
    }
    function w() {
      return c("gkx")("1153");
    }
    function x(a) {
      return a === c("BizInboxCTSSuggestedActionType").SET_FAQ ? !0 : !1;
    }
    function y() {
      return c("gkx")("1448") && c("qex")._("731") === !0;
    }
    function z() {
      return c("gkx")("3361");
    }
    function A() {
      return c("gkx")("5699");
    }
    function B() {
      return c("qex")._("412") === !0;
    }
    function C() {
      return c("gkx")("1157");
    }
    function D() {
      return c("gkx")("4469");
    }
    function E() {
      return !0;
    }
    function F() {
      return !c("gkx")("5980") && c("gkx")("5981");
    }
    function G() {
      return c("gkx")("2462");
    }
    function H() {
      return c("gkx")("1933");
    }
    function I() {
      return c("gkx")("4408");
    }
    function J() {
      return c("gkx")("1945");
    }
    function K() {
      return c("gkx")("48");
    }
    function L() {
      return c("gkx")("4029");
    }
    function M() {
      return !1;
    }
    function N() {
      return c("gkx")("2274");
    }
    function O() {
      return c("gkx")("6393");
    }
    function P() {
      return c("gkx")("6431");
    }
    function Q() {
      return c("gkx")("6739");
    }
    function R() {
      return c("gkx")("1768");
    }
    function S() {
      var a;
      return (a = c("qex")._("608")) != null ? a : !1;
    }
    function T() {
      return c("qex")._("612");
    }
    function U() {
      return c("gkx")("5659");
    }
    function V() {
      return c("gkx")("5860");
    }
    function W() {
      var a;
      return (a = c("qex")._("815")) != null ? a : !1;
    }
    function X() {
      return c("gkx")("1157");
    }
    function Y() {
      return c("gkx")("5699");
    }
    function aa() {
      return c("gkx")("4573");
    }
    function ba() {
      return c("qex")._("61") === !0;
    }
    function ca() {
      return !0;
    }
    function da() {
      return c("gkx")("7416");
    }
    function ea() {
      return Z() || $();
    }
    function Z() {
      return c("qex")._("171") === !0;
    }
    function $() {
      return c("qex")._("176") === !0;
    }
    function fa() {
      return c("gkx")("3242");
    }
    function ga() {
      return c("gkx")("7750");
    }
    g.getUseSPClientIDForMessagingActions = a;
    g.getUseSPClientIDForMessagingArchivedStatusChange = b;
    g.getUseSPClientIDForMessagingDeleteThread = e;
    g.getUseSPClientIDForMessagingFollowUp = f;
    g.getUseSPClientIDForMessagingMarkRead = h;
    g.getUseSPClientIDForMessagingMarkSpam = i;
    g.getUseSPClientIDForThreadAndMessageDFF = j;
    g.getUseSPClientIDForThreadListFetch = k;
    g.getUseSPClientIDForThreadFetch = l;
    g.getUseSPClientIDForMessengerParticipantsFetch = m;
    g.getUseSPClientIDForMQTT = n;
    g.getUseSPClientIDForAssignAdmin = o;
    g.getUseSPClientIDForUnreadThreads = p;
    g.getShouldShowGoldThread = q;
    g.getShouldMoveGoldThreadFromSecond = r;
    g.getAllowInboxSearchForIGOnly = s;
    g.getShouldShowContactCardInLeadMailInbox = t;
    g.getIsTabChannelNav = u;
    g.getShowNewIAModal = v;
    g.getCTSSuggestionBar = w;
    g.getShouldEnableControlButtonForSuggestionBar = x;
    g.getIsBadgeCountClientCalcDisplayEnabled = y;
    g.getIsIGDirectThreadTitleUpdate = z;
    g.getShouldShowCompactMode = A;
    g.getShouldShowUnrespondedFilter = B;
    g.getShouldUseUTLDataAdaptors = C;
    g.getShouldShowSelectAllBulkActions = D;
    g.getShouldHideContactCardForIGOnly = E;
    g.getShouldDisplayOnboardingCardForExistedUsers = F;
    g.getShouldEnableFRXForPhilippines = G;
    g.getShouldShowNewPillWhatsAppTab = H;
    g.getShouldShowGeoTokenizer = I;
    g.getShouldUseAMPMigration = J;
    g.getShouldShowAssignAdminTipInWA = K;
    g.getShouldUseNewBadgeUpdater = L;
    g.getShouldShowUnifiedFiltersUI = M;
    g.getShouldShowMultiFilters = N;
    g.getShouldShowUpdatedFlytrap = O;
    g.getShouldShowSpamLikely = P;
    g.getShouldDeprecateUnseenCount = Q;
    g.getIsEligibleForRemovePageDependencyInboxPhase1 = R;
    g.getShowAutomationIndicators = S;
    g.getShouldEnableAutoContentSearch = T;
    g.getShouldCountUnreadThreads = U;
    g.getShouldLogBadgeCount = V;
    g.getShouldShowClientServerCalculation = W;
    g.getMBS2022H2LaunchGK = X;
    g.getBmt2022AdminLaunchGK = Y;
    g.getShouldShowGeoAwayDialog = aa;
    g.getIsMessagesSectionOnTop = ba;
    g.getShouldShowInboxErrorUI = ca;
    g.getShouldShowMarketingMessageOptinSurface = da;
    g.getShouldShowQuickFilters = ea;
    g.getShouldShowFollowUpQuickFilter = Z;
    g.getShouldShowImportantQuickFilter = $;
    g.getUseSPMigration = fa;
    g.getEnableMQTTUserAgent = ga;
  },
  98
);
__d(
  "BizInboxThreadlistConsts",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
      MESSAGE_THREAD_INIT_COUNT: 20,
      MESSAGE_THREAD_LOAD_MORE_COUNT: 20,
      COMMENT_THREAD_INIT_COUNT: 20,
      COMMENT_THREAD_LOAD_MORE_COUNT: 20,
      SEARCH_THREAD_INIT_COUNT: 20,
      SEARCH_THREAD_LOAD_MORE_COUNT: 20,
      MENU_ICON_SIZE: 20,
      COMMENT_THREAD_FALLBACK_TITLE: "Facebook User",
      MS_IN_S: 1e3,
      MAX_SEARCH_TOKEN_LENGTH_BEFORE_TRUNCATE: 29,
      MESSAGE_THREAD_LIST_ROW_HEIGHT_TALL: 80,
      THREADS_PER_PAGE: 10,
      CONTENT_SEARCH_THREAD_INIT_COUNT: 3,
    });
    f["default"] = a;
  },
  66
);
__d(
  "useBizInboxCommerceInvoiceData",
  ["RelayHooks", "useBizInboxCommerceInvoiceDataQuery.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      var c = a.pageID;
      a = a.recipientID;
      var e =
        h !== void 0
          ? h
          : (h = b("useBizInboxCommerceInvoiceDataQuery.graphql"));
      e = d("RelayHooks").useLazyLoadQuery(e, { page_id: c, consumer_id: a });
      return i({
        show_commerce_invoice_button_in_composer:
          (c = e.biz_inbox_feature_config) == null
            ? void 0
            : (a = c.gating_config) == null
            ? void 0
            : a.show_commerce_invoice_button_in_composer,
        show_confirm_payment:
          (c = e.biz_inbox_feature_config) == null
            ? void 0
            : (a = c.commerce_invoice_button_config) == null
            ? void 0
            : a.show_confirm_payment,
        show_request_payment:
          (c = e.biz_inbox_feature_config) == null
            ? void 0
            : (a = c.commerce_invoice_button_config) == null
            ? void 0
            : a.show_request_payment,
        show_payment_onboarding:
          (c = e.biz_inbox_feature_config) == null
            ? void 0
            : (a = c.commerce_invoice_button_config) == null
            ? void 0
            : a.show_payment_onboarding,
      });
    }
    function i(a) {
      var b = a.show_commerce_invoice_button_in_composer,
        c = a.show_confirm_payment,
        d = a.show_request_payment;
      a = a.show_payment_onboarding;
      b = Boolean(b);
      c = Boolean(c);
      var e = !1;
      d = Boolean(d);
      a = Boolean(a);
      return {
        showInComposer: b,
        showConfirmPayment: c,
        showCommerceInvoiceButtonPUX: e,
        showRequestPayment: d,
        showPaymentOnboarding: a,
      };
    }
    g.useBizInboxCommerceInvoiceData = a;
    g.parseBizInboxCommerceInvoiceDataImpl = i;
  },
  98
);
__d(
  "BizInboxCommerceInvoiceDataUtils",
  ["useBizInboxCommerceInvoiceData"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return {
        showInComposer: !1,
        showConfirmPayment: !1,
        showCommerceInvoiceButtonPUX: !1,
        showRequestPayment: !1,
        showPaymentOnboarding: !1,
      };
    }
    function b(a) {
      var b;
      return d(
        "useBizInboxCommerceInvoiceData"
      ).parseBizInboxCommerceInvoiceDataImpl({
        show_commerce_invoice_button_in_composer:
          (b = a.xfb_biz_inbox_unified_thread_list) == null
            ? void 0
            : (b = b.selected_thread) == null
            ? void 0
            : (b = b.selected_thread_biz_inbox_feature_config) == null
            ? void 0
            : (b = b.gating_config) == null
            ? void 0
            : b.show_commerce_invoice_button_in_composer,
        show_confirm_payment:
          (b = a.xfb_biz_inbox_unified_thread_list) == null
            ? void 0
            : (b = b.selected_thread) == null
            ? void 0
            : (b = b.selected_thread_biz_inbox_feature_config) == null
            ? void 0
            : (b = b.commerce_invoice_button_config) == null
            ? void 0
            : b.show_confirm_payment,
        show_request_payment:
          (b = a.xfb_biz_inbox_unified_thread_list) == null
            ? void 0
            : (b = b.selected_thread) == null
            ? void 0
            : (b = b.selected_thread_biz_inbox_feature_config) == null
            ? void 0
            : (b = b.commerce_invoice_button_config) == null
            ? void 0
            : b.show_request_payment,
        show_payment_onboarding:
          (b = a.xfb_biz_inbox_unified_thread_list) == null
            ? void 0
            : (a = b.selected_thread) == null
            ? void 0
            : (b = a.selected_thread_biz_inbox_feature_config) == null
            ? void 0
            : (a = b.commerce_invoice_button_config) == null
            ? void 0
            : a.show_payment_onboarding,
      });
    }
    g.getDefaultBizInboxCommerceInvoiceData = a;
    g.parseBizInboxCommerceInvoiceData = b;
  },
  98
);
__d(
  "BizKitContextCardActivitySectionFrag",
  ["BizKitContextCardActivitySectionFrag_activitiesquery.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a =
      h !== void 0
        ? h
        : (h = b(
            "BizKitContextCardActivitySectionFrag_activitiesquery.graphql"
          ));
    g.BizKitContextCardActivitySectionFrag = a;
  },
  98
);
__d(
  "BizKitContextCardContainerDetailsFrag",
  ["BizKitContextCardContainerDetailsFrag_selectedContact.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a =
      h !== void 0
        ? h
        : (h = b(
            "BizKitContextCardContainerDetailsFrag_selectedContact.graphql"
          ));
    g.contactDetailsQueryFrag = a;
  },
  98
);
__d(
  "BizKitRelayEnvironmentFactory",
  ["cr:9515"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:9515");
  },
  98
);
__d(
  "getShould3DBizInboxContextCardSections.entrypointutils",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("gkx")("8304");
    }
    g.getShould3DBizInboxContextCardSections = a;
  },
  98
);
__d(
  "BizInboxUnfiedThreadsQueryService",
  [
    "Base64",
    "BizInboxCommerceInvoiceDataUtils",
    "BizInboxGating",
    "BizInboxIgThreadQueryMergeUtil",
    "BizInboxThreadlistConsts",
    "BizInboxUnifiedThreadsQuery.graphql",
    "BizKitContextCardActivitySectionFrag",
    "BizKitContextCardContainerDetailsFrag",
    "BizKitRelayEnvironmentFactory",
    "CurrentUser",
    "Deferred",
    "FBLogger",
    "InteractionTracingMetrics",
    "MercuryFilters.bs",
    "MessagingTag",
    "PageCommItemFolder",
    "RelayHooks",
    "getBizInboxUnifiedThreadsQuery",
    "getShould3DBizInboxContextCardSections.entrypointutils",
    "gkx",
    "nullthrows",
    "react-relay",
    "stableStringify",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        messenger_threads: null,
        instagram_threads: null,
        whatsapp_threads: null,
        messenger_thread_items: null,
        instagram_thread_items: null,
        whatsapp_thread_items: null,
        context_card_details: null,
        messenger_actor_id: null,
        whatsapp_actor_id: null,
        instagram_actor_id: null,
        selected_thread_item_id: null,
        active_folder: null,
        is_selected_thread_item_id_set: !1,
        is_thread_clicked: !1,
        is_active_folder_set: !1,
        executed_queries: null,
        page_id: null,
        getShouldUnifyConfigQueries: d(
          "getBizInboxUnifiedThreadsQuery"
        ).getShouldUnifyConfigQueries(),
        interaction_trace_id: null,
        shouldSkipPageQuery: !1,
        shouldSkipMessage: !1,
        shouldMergeLabelsQuery: !1,
        should3DContextCardSections: d(
          "getShould3DBizInboxContextCardSections.entrypointutils"
        ).getShould3DBizInboxContextCardSections(),
        shouldUnifyContextCardQueries: d(
          "getBizInboxUnifiedThreadsQuery"
        ).getShouldUnifyContextCardQueries(),
        isDependencyOfRemovePageDependencyEnabledTool: !1,
        businessAssets: null,
      },
      i = {
        commerce_invoice_data: d(
          "BizInboxCommerceInvoiceDataUtils"
        ).getDefaultBizInboxCommerceInvoiceData(),
        composer_toolbar_config: {
          isCommerceInvoiceEnabled: !1,
          isCreateAppointmentEnabled: !1,
          isProductPickerEnabled: !1,
          isServicePickerEnabled: !1,
          isSendAvailabilityEnabled: !1,
          isCustomerFeedbackEnabled: !1,
          canSendBizCustomerFeedback: !1,
          isFormBuilderEnabled: !1,
        },
      };
    function a() {
      return i;
    }
    function e() {
      return h.msg_predicted_selected_thread === ""
        ? h.ig_predicted_selected_thread === ""
          ? null
          : h.ig_predicted_selected_thread
        : h.msg_predicted_selected_thread;
    }
    function f(a, b, d, e, f, g) {
      h.messenger_actor_id = a;
      a = c("CurrentUser").isWorkUser();
      d = r(d, f, g, e);
      h.messenger_threads == null &&
        ((h.messenger_threads = {
          before: null,
          includeDeliveryReceipts: !0,
          includeSeqID: !1,
          is_work_teamwork_not_putting_muted_in_unreads: !1,
          limit: b + 1,
          onlyPinnedThreads: void 0,
          source: "mercury",
          tags: d,
          isWorkUser: a,
          threadlistViewFieldsOnly: c("gkx")("7304"),
        }),
        (h.messenger_thread_items = {
          before: void 0,
          id: "",
          is_work_teamwork_not_putting_muted_in_unreads: !1,
          load_delivery_receipts: !0,
          load_messages: b > 0,
          load_read_receipts: !0,
          message_limit: c("BizInboxThreadlistConsts")
            .MESSAGE_THREAD_INIT_COUNT,
          source: "mercury",
          threadlistViewFieldsOnly: !1,
        }));
    }
    function j(a, b, d, e, f, g, i) {
      h.whatsapp_actor_id = a;
      a = c("CurrentUser").isWorkUser();
      d = r(d, f, i, e);
      h.whatsapp_threads == null &&
        ((h.whatsapp_threads = {
          before: null,
          includeDeliveryReceipts: !0,
          includeSeqID: !1,
          is_work_teamwork_not_putting_muted_in_unreads: !1,
          limit: b + 1,
          onlyPinnedThreads: void 0,
          source: g,
          tags: d,
          isWorkUser: a,
          threadlistViewFieldsOnly: c("gkx")("7304"),
        }),
        (h.whatsapp_thread_items = {
          before: void 0,
          id: "",
          is_work_teamwork_not_putting_muted_in_unreads: !1,
          load_delivery_receipts: !0,
          load_messages: b > 0,
          load_read_receipts: !0,
          message_limit: c("BizInboxThreadlistConsts")
            .MESSAGE_THREAD_INIT_COUNT,
          source: g,
          threadlistViewFieldsOnly: !1,
        }));
    }
    function k(a, b, e, f, g, i, j, k) {
      j === void 0 && (j = !1),
        h.instagram_threads == null &&
          ((h.instagram_threads = {
            after: void 0,
            assigned_admin_id: i,
            folder: e,
            is_follow_up: f,
            is_page_unresponded_thread: void 0,
            is_priority_thread: void 0,
            is_unread: g,
            limit: b,
            loadThreads: !0,
            loadThreadItems: j
              ? !1
              : d(
                  "BizInboxIgThreadQueryMergeUtil"
                ).getShouldMergeIgThreadQuery(),
            ig_asset_id: d(
              "BizInboxGating"
            ).getIsEligibleForRemovePageDependencyInboxPhase1()
              ? k
              : null,
          }),
          (h.instagram_thread_items = {
            width: 480,
            height: 480,
            item_after: null,
            item_limit: c("BizInboxThreadlistConsts").MESSAGE_THREAD_INIT_COUNT,
            load_items: !0,
            token: "",
          }),
          (h.instagram_actor_id = a));
    }
    function l(a, b, c, e) {
      var f;
      f =
        (f =
          (f = h.executed_queries) == null
            ? void 0
            : f.has("context_card_details")) != null
          ? f
          : !1;
      if (f) return;
      h.shouldSkipPageQuery = a;
      h.shouldMergeLabelsQuery = !1;
      h.shouldSkipMessage = !1;
      h.should3DContextCardSections = d(
        "getShould3DBizInboxContextCardSections.entrypointutils"
      ).getShould3DBizInboxContextCardSections();
      h.shouldUnifyContextCardQueries = d(
        "getBizInboxUnifiedThreadsQuery"
      ).getShouldUnifyContextCardQueries();
      h.isDependencyOfRemovePageDependencyEnabledTool =
        d("BizInboxGating").getIsEligibleForRemovePageDependencyInboxPhase1();
      h.context_card_details = { selected_thread_item_id: b, business_id: c };
      h.businessAssets = e;
    }
    function m(a) {
      h.page_id = a;
    }
    function n(a) {
      h.is_thread_clicked = a;
    }
    function o(a) {
      h.is_selected_thread_item_id_set ||
        ((h.selected_thread_item_id = a),
        (h.is_selected_thread_item_id_set = !0));
    }
    function p(a) {
      h.is_active_folder_set ||
        ((h.active_folder = a), (h.is_active_folder_set = !0));
    }
    function q(a) {
      h.interaction_trace_id = a;
    }
    function r(a, b, e, f) {
      b =
        a === c("PageCommItemFolder").SPAM
          ? c("MessagingTag").SPAM
          : e.getActiveFolder(a, b);
      e = e.getActiveFilter(a, f);
      a = e === d("MercuryFilters.bs").all ? null : e.toUpperCase();
      e =
        ((f = {}),
        (f[c("MessagingTag").INBOX] = "INBOX"),
        (f[c("MessagingTag").OTHER] = "OTHER"),
        (f[c("MessagingTag").ACTION_ARCHIVED] = "ARCHIVED"),
        (f[c("MessagingTag").SPAM] = "SPAM"),
        (f[c("MessagingTag").PENDING] = "PENDING"),
        (f[c("MessagingTag").PAGE_BACKGROUND] = "PAGE_BACKGROUND"),
        (f[c("MessagingTag").BC_PARTNERSHIP] = "BC_PARTNERSHIP"),
        f);
      f = e[b];
      return f !== null || f !== void 0 ? (a !== null ? [f, s(a)] : [f]) : [];
    }
    function s(a) {
      switch (a) {
        case "ARCHIVED":
          return "ARCHIVED";
        case "BC_PARTNERSHIP":
          return "BC_PARTNERSHIP";
        case "INBOX":
          return "INBOX";
        case "MONTAGE":
          return "MONTAGE";
        case "NAMED":
          return "NAMED";
        case "OTHER":
          return "OTHER";
        case "PAGE_BACKGROUND":
          return "PAGE_BACKGROUND";
        case "PENDING":
          return "PENDING";
        case "READ_BUT_UNRESPONDED":
          return "READ_BUT_UNRESPONDED";
        case "ROOM":
          return "ROOM";
        case "SPAM":
          return "SPAM";
        case "UNNAMED":
          return "UNNAMED";
        case "UNREAD":
          return "UNREAD";
        case "WORK_CHANNEL":
          return "WORK_CHANNEL";
        case "WORK_SYNCED_GROUP":
          return "WORK_SYNCED_GROUP";
        case "WORK_UNSYNCED_CHAT":
          return "WORK_UNSYNCED_CHAT";
        default:
          return "%future added value";
      }
    }
    function t(a, d) {
      var e,
        f,
        g,
        i,
        j = b("react-relay");
      j = j.fetchQuery;
      e =
        c("BizKitRelayEnvironmentFactory") == null
          ? void 0
          : c("BizKitRelayEnvironmentFactory").getForActorID(
              c("nullthrows")(
                (e =
                  (e = h.messenger_actor_id) != null
                    ? e
                    : h.instagram_actor_id) != null
                  ? e
                  : h.whatsapp_actor_id
              )
            );
      var k = new (c("Deferred"))(),
        l = k.getPromise();
      f =
        h.instagram_actor_id !== null
          ? {
              first: (f = h.instagram_threads) == null ? void 0 : f.limit,
              after: (f = h.instagram_threads) == null ? void 0 : f.after,
              mode: "MIXED",
              folder:
                (f = (f = h.instagram_threads) == null ? void 0 : f.folder) !=
                null
                  ? f
                  : "TODO",
              is_follow_up:
                (f = h.instagram_threads) == null ? void 0 : f.is_follow_up,
              is_unread:
                (f = h.instagram_threads) == null ? void 0 : f.is_unread,
              is_page_unresponded_thread:
                (f = h.instagram_threads) == null
                  ? void 0
                  : f.is_page_unresponded_thread,
              assigned_admin_id:
                (f = h.instagram_threads) == null
                  ? void 0
                  : f.assigned_admin_id,
              is_priority_thread:
                (f = h.instagram_threads) == null
                  ? void 0
                  : f.is_priority_thread,
              ig_asset_id:
                (f = h.instagram_threads) == null ? void 0 : f.ig_asset_id,
            }
          : null;
      g =
        h.messenger_actor_id !== null
          ? {
              pinned_threads_only:
                (g = h.messenger_threads) == null
                  ? void 0
                  : g.onlyPinnedThreads,
              with_tags: (g = h.messenger_threads) == null ? void 0 : g.tags,
              before_time_precise:
                (g = h.messenger_threads) == null ? void 0 : g.before,
              last: (g = h.messenger_threads) == null ? void 0 : g.limit,
            }
          : null;
      i =
        h.whatsapp_actor_id !== null
          ? {
              pinned_threads_only:
                (i = h.whatsapp_threads) == null ? void 0 : i.onlyPinnedThreads,
              with_tags: (i = h.whatsapp_threads) == null ? void 0 : i.tags,
              before_time_precise:
                (i = h.whatsapp_threads) == null ? void 0 : i.before,
              last: (i = h.whatsapp_threads) == null ? void 0 : i.limit,
            }
          : null;
      var m = h.messenger_actor_id !== null ? { with_tags: ["PENDING"] } : null,
        n = h.whatsapp_actor_id !== null ? { with_tags: ["PENDING"] } : null;
      j(
        c("nullthrows")(e),
        c("BizInboxUnifiedThreadsQuery.graphql"),
        {
          height: (j = h.instagram_threads) == null ? void 0 : j.height,
          loadThreadItems:
            (e = h.instagram_threads) == null ? void 0 : e.loadThreadItems,
          loadThreads:
            (j = h.instagram_threads) == null ? void 0 : j.loadThreads,
          is_work_teamwork_not_putting_muted_in_unreads:
            (e = h.messenger_threads) == null
              ? void 0
              : e.is_work_teamwork_not_putting_muted_in_unreads,
          includeDeliveryReceipts:
            (e =
              (j = h.messenger_threads) == null
                ? void 0
                : j.includeDeliveryReceipts) != null
              ? e
              : (j = h.whatsapp_threads) == null
              ? void 0
              : j.includeDeliveryReceipts,
          includeSeqID:
            (j = (e = h.messenger_threads) == null ? void 0 : e.includeSeqID) !=
            null
              ? j
              : (e = h.whatsapp_threads) == null
              ? void 0
              : e.includeSeqID,
          isWorkUser:
            (e = (j = h.messenger_threads) == null ? void 0 : j.isWorkUser) !=
            null
              ? e
              : (j = h.whatsapp_threads) == null
              ? void 0
              : j.isWorkUser,
          source:
            (j = (e = h.whatsapp_threads) == null ? void 0 : e.source) != null
              ? j
              : (e = h.messenger_threads) == null
              ? void 0
              : e.source,
          threadlistViewFieldsOnly:
            (e =
              (j = h.messenger_threads) == null
                ? void 0
                : j.threadlistViewFieldsOnly) != null
              ? e
              : (j = h.whatsapp_threads) == null
              ? void 0
              : j.threadlistViewFieldsOnly,
          width: (e = h.instagram_threads) == null ? void 0 : e.width,
          ig_params: f,
          msgr_params: g,
          wa_params: i,
          msgr_pending_params: m,
          wa_pending_params: n,
          message_limit:
            (e =
              (j = h.messenger_thread_items) == null
                ? void 0
                : j.message_limit) != null
              ? e
              : (f = h.whatsapp_thread_items) == null
              ? void 0
              : f.message_limit,
          before:
            (i = (g = h.messenger_thread_items) == null ? void 0 : g.before) !=
            null
              ? i
              : (m = h.whatsapp_thread_items) == null
              ? void 0
              : m.before,
          load_messages:
            (j =
              (n = h.messenger_thread_items) == null
                ? void 0
                : n.load_messages) != null
              ? j
              : (e = h.whatsapp_thread_items) == null
              ? void 0
              : e.load_messages,
          load_read_receipts:
            (g =
              (f = h.messenger_thread_items) == null
                ? void 0
                : f.load_read_receipts) != null
              ? g
              : (i = h.whatsapp_thread_items) == null
              ? void 0
              : i.load_read_receipts,
          load_delivery_receipts:
            (m = h.messenger_thread_items) == null
              ? void 0
              : m.load_delivery_receipts,
          item_limit:
            (n = h.instagram_thread_items) == null ? void 0 : n.item_limit,
          item_after:
            (j = h.instagram_thread_items) == null ? void 0 : j.item_after,
          load_items:
            (e = h.instagram_thread_items) == null ? void 0 : e.load_items,
          selected_item_id: h.selected_thread_item_id,
          page_id: h.page_id,
          getShouldUnifyConfigQueries: h.getShouldUnifyConfigQueries,
          shouldSkipPageQuery: h.shouldSkipPageQuery,
          shouldSkipMessage: h.shouldSkipMessage,
          shouldMergeLabelsQuery: h.shouldMergeLabelsQuery,
          should3DContextCardSections: h.should3DContextCardSections,
          shouldUnifyContextCardQueries: h.shouldUnifyContextCardQueries,
          isDependencyOfRemovePageDependencyEnabledTool:
            h.isDependencyOfRemovePageDependencyEnabledTool,
          businessAssets: (f = h.businessAssets) != null ? f : [],
        },
        { fetchPolicy: "store-or-network" }
      ).subscribe({
        start: function () {},
        complete: function () {},
        error: function (a) {
          k.reject({
            data: {},
            errors: [{ message: a.message, severity: "CRITICAL", error: a }],
          });
        },
        next: function (b) {
          if (b) {
            F(b);
            J(a);
            var e = u(b, a);
            D(b);
            e
              ? (a === "context_card_details" && d && d(e), k.resolve(e))
              : (c("FBLogger")(
                  "biz_inbox_unified_threads_query",
                  "error_with_query_response"
                ).warn("Error with %s response", a),
                k.reject({
                  data: {},
                  errors: [
                    {
                      message: "Unexpected response received from server.",
                      severity: "CRITICAL",
                      response: e,
                    },
                  ],
                }));
          } else
            k.reject({
              data: {},
              errors: [
                {
                  message: "Unexpected response received from server.",
                  severity: "CRITICAL",
                  response: b,
                },
              ],
            });
        },
      });
      return l;
    }
    function u(a, b) {
      switch (b) {
        case "messenger_threads":
          return w(a);
        case "whatsapp_threads":
          return x(a);
        case "instagram_threads":
          return y(a);
        case "messenger_thread_items":
          return z(a);
        case "whatsapp_thread_items":
          return z(a);
        case "instagram_thread_items":
          return A(a);
        case "context_card_details":
          return B(a);
        default:
          return null;
      }
    }
    function v(a) {
      return (
        a === "messenger_thread_items" ||
        a === "whatsapp_thread_items" ||
        a === "instagram_thread_items"
      );
    }
    function w(a) {
      var b;
      if (
        (b = a.xfb_biz_inbox_unified_thread_list) == null
          ? void 0
          : b.msgr_threads
      ) {
        return {
          viewer: {
            message_threads:
              (b = a.xfb_biz_inbox_unified_thread_list) == null
                ? void 0
                : b.msgr_threads,
            pending_threads:
              (b = a.xfb_unified_thread_list_pending) == null
                ? void 0
                : b.msg_pending_threads,
          },
        };
      }
      return null;
    }
    function x(a) {
      var b;
      if (
        (b = a.xfb_biz_inbox_unified_thread_list) == null
          ? void 0
          : b.wa_threads
      ) {
        return {
          viewer: {
            message_threads:
              (b = a.xfb_biz_inbox_unified_thread_list) == null
                ? void 0
                : b.wa_threads,
            pending_threads:
              (b = a.xfb_unified_thread_list_pending) == null
                ? void 0
                : b.wa_pending_threads,
          },
        };
      }
      return null;
    }
    function y(a) {
      var b, c;
      b =
        (b = a.xfb_biz_inbox_unified_thread_list) == null
          ? void 0
          : b.ig_threads;
      var d =
        (c =
          (c = a.xfb_biz_inbox_unified_thread_list) == null
            ? void 0
            : (c = c.selected_thread) == null
            ? void 0
            : (c = c.selected_ig_thread) == null
            ? void 0
            : c.token) != null
          ? c
          : "";
      if (b) {
        c = b.nodes;
        var e = babelHelpers.objectWithoutPropertiesLoose(b, ["nodes"]),
          f =
            c == null
              ? void 0
              : c.findIndex(function (a) {
                  return a.token === d;
                });
        if (c != null && f != null && f !== -1) {
          var g = c[f];
          g.thread_items;
          g = babelHelpers.objectWithoutPropertiesLoose(g, ["thread_items"]);
          a =
            (a = a.xfb_biz_inbox_unified_thread_list) == null
              ? void 0
              : (a = a.selected_thread) == null
              ? void 0
              : (a = a.selected_ig_thread) == null
              ? void 0
              : a.thread_items;
          var h = babelHelpers["extends"]({ thread_items: a }, g);
          a = c.map(function (a, b) {
            return b === f ? h : a;
          });
          return {
            viewer: {
              instagram_message_threads: babelHelpers["extends"](
                { nodes: a },
                e
              ),
            },
          };
        }
        return { viewer: { instagram_message_threads: b } };
      }
      return null;
    }
    function z(a) {
      var b;
      if (
        (b = a.xfb_biz_inbox_unified_thread_list) == null
          ? void 0
          : (b = b.selected_thread) == null
          ? void 0
          : b.selected_message_thread
      ) {
        return {
          message_thread:
            (b = a.xfb_biz_inbox_unified_thread_list) == null
              ? void 0
              : (a = b.selected_thread) == null
              ? void 0
              : a.selected_message_thread,
        };
      }
      return null;
    }
    function A(a) {
      var b;
      if (
        (b = a.xfb_biz_inbox_unified_thread_list) == null
          ? void 0
          : (b = b.selected_thread) == null
          ? void 0
          : b.selected_ig_thread
      ) {
        return {
          instagram_message_thread:
            (b = a.xfb_biz_inbox_unified_thread_list) == null
              ? void 0
              : (a = b.selected_thread) == null
              ? void 0
              : a.selected_ig_thread,
        };
      }
      return null;
    }
    function B(a) {
      var b, e;
      if (
        !d("getBizInboxUnifiedThreadsQuery").getShouldUnifyContextCardQueries()
      ) {
        c("FBLogger")(
          "biz_inbox_unified_threads_query",
          "context_card"
        ).mustfix(
          "Trying to fetch Context Card Details data from Unified Threads query although data was not fetched"
        );
        return null;
      }
      b =
        a == null
          ? void 0
          : (b = a.xfb_biz_inbox_unified_thread_list) == null
          ? void 0
          : b.selected_thread;
      b = d("RelayHooks").readInlineData(
        d("BizKitContextCardContainerDetailsFrag").contactDetailsQueryFrag,
        b
      );
      b = {
        selected_biz_crm_contact:
          b == null ? void 0 : b.selected_biz_crm_contact,
        selected_biz_crm_contact_card_config:
          b == null ? void 0 : b.selected_biz_crm_contact_card_config,
      };
      e =
        a == null
          ? void 0
          : (e = a.xfb_biz_inbox_unified_thread_list) == null
          ? void 0
          : (e = e.selected_thread) == null
          ? void 0
          : e.selected_thread_type;
      var f = null;
      e !== "whatsapp_thread" &&
        (f = d("RelayHooks").readInlineData(
          d("BizKitContextCardActivitySectionFrag")
            .BizKitContextCardActivitySectionFrag,
          a
        ));
      e = {
        can_add_activities:
          (e =
            (e = f) == null
              ? void 0
              : (a = e.xfb_biz_inbox_unified_thread_list) == null
              ? void 0
              : (e = a.selected_thread) == null
              ? void 0
              : (a = e.selected_biz_crm_contact_card_config) == null
              ? void 0
              : a.can_add_activities) != null
            ? e
            : !1,
        selected_biz_crm_contact:
          (a = f) == null
            ? void 0
            : (e = a.xfb_biz_inbox_unified_thread_list) == null
            ? void 0
            : (a = e.selected_thread) == null
            ? void 0
            : a.selected_biz_crm_contact,
        page: {
          dropdownRef:
            (e = f) == null
              ? void 0
              : (a = e.xfb_biz_inbox_unified_thread_list) == null
              ? void 0
              : a.selected_page,
          listItemRef:
            (e = f) == null
              ? void 0
              : (a = e.xfb_biz_inbox_unified_thread_list) == null
              ? void 0
              : a.selected_page,
        },
        xfb_mbs_business_assets: {
          dropdownRef: (e = f) == null ? void 0 : e.xfb_mbs_business_assets,
          listItemRef: (a = f) == null ? void 0 : a.xfb_mbs_business_assets,
        },
      };
      return { detailsRef: b, activitiesRef: e };
    }
    function C(a) {
      if (
        !d("getBizInboxUnifiedThreadsQuery").getShouldUnifyContextCardQueries()
      )
        return null;
      a =
        a == null
          ? void 0
          : (a = a.xfb_biz_inbox_unified_thread_list) == null
          ? void 0
          : a.selected_thread;
      a = d("RelayHooks").readInlineData(
        d("BizKitContextCardContainerDetailsFrag").contactDetailsQueryFrag,
        a
      );
      return a == null
        ? void 0
        : (a = a.selected_biz_crm_contact) == null
        ? void 0
        : (a = a.identity) == null
        ? void 0
        : a.business_id;
    }
    function D(a) {
      (i.commerce_invoice_data = d(
        "BizInboxCommerceInvoiceDataUtils"
      ).parseBizInboxCommerceInvoiceData(a)),
        (i.composer_toolbar_config = E(a));
    }
    function E(a) {
      var b, c, d, e, f, g, h;
      b = Boolean(
        (b = a.xfb_biz_inbox_unified_thread_list) == null
          ? void 0
          : (b = b.selected_thread) == null
          ? void 0
          : (b = b.selected_thread_biz_inbox_feature_config) == null
          ? void 0
          : (b = b.gating_config) == null
          ? void 0
          : b.show_commerce_invoice_button_in_composer
      );
      c = Boolean(
        (c = a.xfb_biz_inbox_unified_thread_list) == null
          ? void 0
          : (c = c.selected_thread) == null
          ? void 0
          : (c = c.selected_thread_biz_inbox_feature_config) == null
          ? void 0
          : (c = c.gating_config) == null
          ? void 0
          : c.show_create_appointment_button_in_composer
      );
      d = Boolean(
        (d = a.xfb_biz_inbox_unified_thread_list) == null
          ? void 0
          : (d = d.selected_thread) == null
          ? void 0
          : (d = d.selected_thread_biz_inbox_feature_config) == null
          ? void 0
          : (d = d.gating_config) == null
          ? void 0
          : d.show_product_picker_button_in_composer
      );
      e = Boolean(
        (e = a.xfb_biz_inbox_unified_thread_list) == null
          ? void 0
          : (e = e.selected_thread) == null
          ? void 0
          : (e = e.selected_thread_biz_inbox_feature_config) == null
          ? void 0
          : (e = e.gating_config) == null
          ? void 0
          : e.show_service_picker_button_in_composer
      );
      f = Boolean(
        (f = a.xfb_biz_inbox_unified_thread_list) == null
          ? void 0
          : (f = f.selected_thread) == null
          ? void 0
          : (f = f.selected_thread_biz_inbox_feature_config) == null
          ? void 0
          : (f = f.gating_config) == null
          ? void 0
          : f.show_send_availability_button_in_composer
      );
      g = Boolean(
        (g = a.xfb_biz_inbox_unified_thread_list) == null
          ? void 0
          : (g = g.selected_thread) == null
          ? void 0
          : (g = g.selected_thread_biz_inbox_feature_config) == null
          ? void 0
          : (g = g.gating_config) == null
          ? void 0
          : g.show_customer_feedback_button_in_composer
      );
      h = Boolean(
        (h = a.xfb_biz_inbox_unified_thread_list) == null
          ? void 0
          : (h = h.selected_thread) == null
          ? void 0
          : (h = h.selected_thread_biz_inbox_feature_config) == null
          ? void 0
          : (h = h.gating_config) == null
          ? void 0
          : h.show_customer_feedback_button_on_move_to_done
      );
      a = Boolean(
        (a = a.xfb_biz_inbox_unified_thread_list) == null
          ? void 0
          : (a = a.selected_thread) == null
          ? void 0
          : (a = a.selected_thread_biz_inbox_feature_config) == null
          ? void 0
          : (a = a.gating_config) == null
          ? void 0
          : a.show_form_builder_in_composer
      );
      return {
        isCommerceInvoiceEnabled: b,
        isCreateAppointmentEnabled: c,
        isProductPickerEnabled: d,
        isServicePickerEnabled: e,
        isSendAvailabilityEnabled: f,
        isCustomerFeedbackEnabled: g,
        canSendBizCustomerFeedback: h,
        isFormBuilderEnabled: a,
      };
    }
    function F(a) {
      var b;
      h.ig_predicted_selected_thread =
        (b =
          (b = A(a)) == null
            ? void 0
            : (b = b.instagram_message_thread) == null
            ? void 0
            : b.token) != null
          ? b
          : "";
      h.msg_predicted_selected_thread = G(
        (b =
          (b = z(a)) == null
            ? void 0
            : (b = b.message_thread) == null
            ? void 0
            : b.id) != null
          ? b
          : ""
      );
      h.context_card_details == null
        ? (h.context_card_details = {
            selected_thread_item_id:
              h.ig_predicted_selected_thread === ""
                ? h.msg_predicted_selected_thread
                : h.ig_predicted_selected_thread,
            business_id: C(a),
          })
        : (h.context_card_details.business_id = C(a));
    }
    function G(a) {
      if (a === "") return a;
      var b = c("Base64").decode(a).split(":");
      return b.length === 2 ? b[1] : a;
    }
    function H(a, b, d) {
      if (a === "instagram_thread_items" && h.instagram_thread_items) {
        var e;
        h.instagram_thread_items.token =
          (e = h.ig_predicted_selected_thread) != null ? e : "";
      }
      if (a === "messenger_thread_items" && h.messenger_thread_items) {
        h.messenger_thread_items.id =
          (e = h.msg_predicted_selected_thread) != null ? e : "";
      }
      if (a === "whatsapp_thread_items" && h.whatsapp_thread_items) {
        h.whatsapp_thread_items.id =
          (e = h.msg_predicted_selected_thread) != null ? e : "";
      }
      if (a === "context_card_details" && h.context_card_details)
        if (h.msg_predicted_selected_thread !== "") {
          h.context_card_details.selected_thread_item_id =
            (e = h.msg_predicted_selected_thread) != null ? e : "";
        } else if (h.ig_predicted_selected_thread !== "") {
          h.context_card_details.selected_thread_item_id =
            (e = h.ig_predicted_selected_thread) != null ? e : "";
        }
      var f = h[a];
      d &&
        d.forEach(function (a) {
          f && Object.prototype.hasOwnProperty.call(b, a) && (b[a] = f[a]);
        });
      e = c("stableStringify")(f) === c("stableStringify")(b);
      d = N((d = f) != null ? d : {}, b);
      var g = new Map();
      if (!e) {
        var i;
        c("FBLogger")(
          "biz_inbox_unified_threads_query",
          "query_variables_mismatch"
        ).warn(
          "Unified Query Mismatching Variables for %s : \nMismatching Fields [%s] : with thread item selected %s",
          a,
          d.toString(),
          h.selected_thread_item_id != null
        );
        g.set(
          "unified_variables",
          P(
            Object.keys((i = f) != null ? i : {}),
            Object.values((i = f) != null ? i : {})
          )
        );
        g.set("query_variables", P(Object.keys(b), Object.values(b)));
      }
      v(a) &&
        (d.includes("id") || d.includes("token")
          ? g.set("is_selected_thread_matched", !1)
          : g.set("is_selected_thread_matched", !0),
        g.set("is_thread_item_selected", h.selected_thread_item_id != null));
      O(h.interaction_trace_id, g);
      return e;
    }
    function I(a, b) {
      switch (a) {
        case "MessengerGraphQLThreadlistFetcher":
          return b != null &&
            b === ((a = h.whatsapp_threads) == null ? void 0 : a.source)
            ? "whatsapp_threads"
            : "messenger_threads";
        case "InstagramMessageGraphQLThreadsFetcher":
          return "instagram_threads";
        case "MessengerGraphQLThreadFetcher":
          return b != null &&
            b === ((a = h.whatsapp_threads) == null ? void 0 : a.source)
            ? "whatsapp_thread_items"
            : "messenger_thread_items";
        case "InstagramMessageGraphQLThreadItemsFetcher":
          return "instagram_thread_items";
        default:
          return null;
      }
    }
    function J(a) {
      h.executed_queries == null
        ? (h.executed_queries = new Set([a]))
        : h.executed_queries.add(a);
    }
    function K(a) {
      var b;
      if (h.is_thread_clicked) return !1;
      a =
        (b = (b = h.executed_queries) == null ? void 0 : b.has(a)) != null
          ? b
          : !1;
      return !a;
    }
    function L(a, b, c) {
      return h[a] == null ? !1 : K(a) && H(a, b, c);
    }
    function M(a, b) {
      var c = "instagram_thread_items";
      if (h[c] == null || !K(c)) return;
      H(c, a, b);
    }
    function N(a, b) {
      var c = [],
        d = Object.keys(a);
      for (var e = 0; e < d.length; e++) {
        var f = d[e],
          g = a[f] != null ? JSON.stringify(a[f]) : "",
          h = b[f] != null ? JSON.stringify(b[f]) : "";
        g != h && c.push(f);
      }
      g = Object.keys(b);
      for (h = 0; h < g.length; h++) {
        f = g[h];
        e = a[f];
        e == null && b[f] != null && c.push(f);
      }
      return Array.from(new Set(c)).sort();
    }
    function O(a, b) {
      a != null &&
        b.forEach(function (b, d) {
          c("InteractionTracingMetrics").addMetadata(a, d, b);
        });
    }
    function P(a, b) {
      var c = new Map();
      for (var d = 0; d < b.length; d++)
        if (b[d] === null) c.set(a[d], "null");
        else if (b[d] === void 0) c.set(a[d], "undefied");
        else if (typeof b[d] === "string") c.set(a[d], "string");
        else if (typeof b[d] === "number") c.set(a[d], "number");
        else if (typeof b[d] === "boolean")
          c.set(a[d], b[d] ? "true" : "false");
        else {
          var e = babelHelpers["extends"]({}, b[d]);
          c.set(a[d], P(Object.keys(e), Object.values(e)));
        }
      return JSON.stringify(Object.fromEntries(c));
    }
    g.getConfigQueriesData = a;
    g.getSelectedThreadID = e;
    g.setMessengerVariables = f;
    g.setWhatsAppVariables = j;
    g.setInstagramVariables = k;
    g.setContextDetailsQueryVariables = l;
    g.setConfigQueryVariables = m;
    g.setIsThreadClicked = n;
    g.setSelectedThreadID = o;
    g.setActiveFolder = p;
    g.setInteractionTraceID = q;
    g.execUnifiedQuery = t;
    g.getChannelRespons = u;
    g.isThreadItemChannel = v;
    g.getMessengerThreadsResponse = w;
    g.getWhatsAppThreadsResponse = x;
    g.getInstagramThreadsResponse = y;
    g.getMessengerThreadItemsResponse = z;
    g.getInstagramThreadItemsResponse = A;
    g.getContextCardDetailsResponse = B;
    g.getBusinessIDFromContextCardDetailsResponse = C;
    g.setConfigQueriesResponse = D;
    g.decodeMessengerThreadId = G;
    g.compareWithUnifiedVariables = H;
    g.getUnifiedChannelFromMercuryOperations = I;
    g.updateExecutedQueriesState = J;
    g.isInitialQuery = K;
    g.shouldUseUnifiedQuery = L;
    g.logInstagramThreadItemsQueryPrediction = M;
    g.logInteractionTracing = O;
  },
  98
);
__d(
  "getBizInboxThreadsRelayQueryMigration",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("gkx")("6229");
    }
    g["default"] = a;
  },
  98
);
__d(
  "BusinessCometRelayEnvironmentFactory",
  ["cr:9829"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:9829");
  },
  98
);
__d(
  "MessengerObjectAssociationType",
  ["keyMirror"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("keyMirror")({ REGULAR_CHAT: null, GENERAL_CHAT: null });
    g["default"] = a;
  },
  98
);
__d(
  "MessengerDesktopNotificationPermissions",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      DEFAULT: "default",
      DENIED: "denied",
      GRANTED: "granted",
    });
    f["default"] = a;
  },
  66
);
__d(
  "MessengerDesktopNotifications",
  [
    "MessengerDesktopNotificationPermissions",
    "Run",
    "UserAgent",
    "WorkplaceChatHelper",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 5e3,
      i = new Map();
    function a() {
      i.forEach(function (a, b, c) {
        a.close && a.close();
      });
    }
    function b() {
      return !!window.Notification;
    }
    function j() {
      if (window.Notification) return window.Notification.permission;
    }
    function e() {
      return (
        c("UserAgent").isBrowser("FireFox") &&
        c("UserAgent").isPlatform("Mac OS X")
      );
    }
    function f() {
      return j() === c("MessengerDesktopNotificationPermissions").DENIED;
    }
    function k() {
      return j() === c("MessengerDesktopNotificationPermissions").GRANTED;
    }
    function l(a) {
      window.Notification && window.Notification.requestPermission(a);
    }
    function m(a) {
      if (k()) {
        var b = window.Notification
          ? new window.Notification(a.title, {
              body: a.body,
              icon: a.icon,
              tag: a.tag,
              silent: a.silent,
            })
          : {};
        i.set(a.tag, b);
        a.onShow && a.onShow();
        b.onclick = function () {
          d("WorkplaceChatHelper").isDesktopChatApp() &&
            d("WorkplaceChatHelper").showWindow(),
            a.onClick();
        };
        b.onclose = function () {
          i["delete"](a.tag);
        };
        setTimeout(function () {
          b.close();
        }, a.closeTime || h);
        return b;
      } else return null;
    }
    function n(a) {
      a = i.get(a);
      a && a.close();
    }
    d("Run").onUnload(a);
    g.isSupported = b;
    g.checkPermission = j;
    g.hasDefaultSound = e;
    g.isDenied = f;
    g.isGranted = k;
    g.requestPermission = l;
    g.showNotification = m;
    g.removeNotification = n;
  },
  98
);
__d(
  "MercuryAssert",
  ["MercuryIDs"],
  function (a, b, c, d, e, f, g) {
    function h(a) {
      if (a == null) throw new Error("participant_id null/undefined");
      if (!d("MercuryIDs").isValid(a))
        throw new Error("bad_participant_id " + a);
    }
    function a(a) {
      a.forEach(h);
    }
    function b(a) {
      var b = d("MercuryIDs").tokenize(a);
      if (a == null) throw new Error("participant_id null/undefined");
      if (b.type != "fbid") throw new Error("bad_user_id " + a);
    }
    function c(a) {
      var b = d("MercuryIDs").tokenize(a);
      if (a == null) throw new Error("participant_id null/undefined");
      if (b.type != "email") throw new Error("bad_email_id " + a);
    }
    function e(a) {
      a.forEach(i);
    }
    function i(a) {
      if (a == null) throw new Error("participant_id null/undefined");
      if (!d("MercuryIDs").isValid(a)) throw new Error("bad_thread_id " + a);
    }
    g.isParticipantID = h;
    g.allParticipantIDs = a;
    g.isUserParticipantID = b;
    g.isEmailParticipantID = c;
    g.allThreadID = e;
    g.isThreadID = i;
  },
  98
);
__d(
  "MercuryVanityIDMap.bs",
  ["MercuryAssert", "bs_js_dict", "bs_js_null_undefined"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
      i = {};
    function a(a) {
      return c("bs_js_null_undefined").fromOption(
        c("bs_js_dict").get(h, a.toLowerCase())
      );
    }
    function b(a) {
      return c("bs_js_null_undefined").fromOption(c("bs_js_dict").get(i, a));
    }
    function e(a) {
      return c("bs_js_dict").get(i, a) !== void 0;
    }
    function f(a) {
      return c("bs_js_dict").get(h, a.toLowerCase()) !== void 0;
    }
    function j(a, b) {
      d("MercuryAssert").isParticipantID(b);
      a = a.toLowerCase();
      h[a] = b;
      i[b] = a;
    }
    g.vanityToID = h;
    g.idToVanity = i;
    g.getID = a;
    g.getVanity = b;
    g.hasID = e;
    g.hasVanity = f;
    g.set = j;
  },
  98
);
__d(
  "MessageSharedMediaIDStore.bs",
  ["bs_js_dict"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {};
    function a(a, b) {
      h[a] = b;
    }
    function b(a) {
      a = c("bs_js_dict").get(h, a);
      if (a !== void 0) return a;
      else return null;
    }
    g._store = h;
    g.setMessageIDForAttachmentID = a;
    g.getMessageIDForAttachmentID = b;
  },
  98
);
__d(
  "MessageThreadUnsendabilityStatus.bs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (a == null) return null;
      switch (a) {
        case "can_unsend":
          return "can_unsend";
        case "deny_for_specific_ids":
          return "deny_for_specific_ids";
        case "deny_if_cannot_load_thread":
          return "deny_if_cannot_load_thread";
        case "deny_if_marketplace_thread":
          return "deny_if_marketplace_thread";
        case "deny_if_page_thread":
          return "deny_if_page_thread";
        case "deny_if_thread_contains_pau":
          return "deny_if_thread_contains_pau";
        default:
          return null;
      }
    }
    f.fromNullableString = a;
  },
  66
);
__d(
  "MessageUnsendabilityStatus.bs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (a == null) return null;
      switch (a) {
        case "can_unsend":
          return "can_unsend";
        case "deny_blob_attachment":
          return "deny_blob_attachment";
        case "deny_for_non_sender":
          return "deny_for_non_sender";
        case "deny_log_message":
          return "deny_log_message";
        case "deny_p2p_payment":
          return "deny_p2p_payment";
        case "deny_story_reaction":
          return "deny_story_reaction";
        case "deny_tombstone_message":
          return "deny_tombstone_message";
        default:
          return null;
      }
    }
    f.fromNullableString = a;
  },
  66
);
__d(
  "FundsAvailability",
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      NONE: 0,
      FUNDS_AVAILABILITY_NA: 65,
      FUNDS_AVAILABILITY_IMMEDIATE: 73,
      FUNDS_AVAILABILITY_SAME_DAY: 83,
      FUNDS_AVAILABILITY_NEXT_DAY: 78,
      FUNDS_AVAILABILITY_TWO_DAY: 80,
      FUNDS_AVAILABILITY_FIVE_DAY: 70,
      FUNDS_AVAILABILITY_UNKNOWN: 85,
      FUNDS_AVAILABILITY_ONE_THREE_DAY: 79,
      FUNDS_AVAILABILITY_CROSS_BORDER: 66,
      FUNDS_AVAILABILITY_CROSS_BORDER_FAST_FUNDS: 67,
      FUNDS_AVAILABILITY_DOMESTIC: 68,
      FUNDS_AVAILABILITY_DOMESTIC_FAST_FUNDS: 69,
    });
  },
  null
);
__d(
  "LeadGenInfoFieldTypes",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      CUSTOM: "CUSTOM",
      CITY: "CITY",
      COMPANY_NAME: "COMPANY_NAME",
      COUNTRY: "COUNTRY",
      DOB: "DOB",
      EMAIL: "EMAIL",
      GENDER: "GENDER",
      FIRST_NAME: "FIRST_NAME",
      FULL_ADDRESS: "FULL_ADDRESS",
      FULL_NAME: "FULL_NAME",
      JOB_TITLE: "JOB_TITLE",
      LAST_NAME: "LAST_NAME",
      MARITIAL_STATUS: "MARITIAL_STATUS",
      PHONE: "PHONE",
      POST_CODE: "POST_CODE",
      PROVINCE: "PROVINCE",
      RELATIONSHIP_STATUS: "RELATIONSHIP_STATUS",
      STATE: "STATE",
      STREET_ADDRESS: "STREET_ADDRESS",
      ZIP: "ZIP",
      WORK_EMAIL: "WORK_EMAIL",
      MILITARY_STATUS: "MILITARY_STATUS",
      WORK_PHONE_NUMBER: "WORK_PHONE_NUMBER",
      STORE_LOOKUP: "STORE_LOOKUP",
      STORE_LOOKUP_WITH_TYPEAHEAD: "STORE_LOOKUP_WITH_TYPEAHEAD",
      DATE_TIME: "DATE_TIME",
      ID_CPF: "ID_CPF",
      ID_AR_DNI: "ID_AR_DNI",
      ID_CL_RUT: "ID_CL_RUT",
      ID_CO_CC: "ID_CO_CC",
      ID_EC_CI: "ID_EC_CI",
      ID_PE_DNI: "ID_PE_DNI",
      ID_MX_RFC: "ID_MX_RFC",
    });
    f["default"] = a;
  },
  66
);
__d(
  "MNCommerceBubbleType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      FB_RETAIL_RECEIPT: 1,
      FB_RETAIL_CANCELLATION: 2,
      FB_RETAIL_SHIPMENT: 3,
      FB_RETAIL_SHIPMENT_TRACKING_EVENT_ETA: 4,
      FB_RETAIL_SHIPMENT_TRACKING_EVENT_IN_TRANSIT: 5,
      FB_RETAIL_SHIPMENT_TRACKING_EVENT_OUT_FOR_DELIVERY: 6,
      FB_RETAIL_SHIPMENT_TRACKING_EVENT_DELAYED: 7,
      FB_RETAIL_SHIPMENT_TRACKING_EVENT_DELIVERED: 8,
      FB_RETAIL_SHIPMENT_FOR_UNSUPPORTED_CARRIER: 9,
      FB_RETAIL_SHIPMENT_ETA: 10,
      FB_RETAIL_NOW_IN_STOCK: 11,
      FB_RETAIL_AGENT_ITEM_SUGGESTION: 12,
      FB_RETAIL_AGENT_ITEM_RECEIPT: 13,
      FB_RETAIL_PROMOTIONAL_MSG: 14,
    });
    f["default"] = a;
  },
  66
);
__d(
  "P2PPaymentRequestStatus",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      INITED: 1,
      DECLINED: 2,
      TRANSFER_INITED: 3,
      TRANSFER_COMPLETED: 4,
      TRANSFER_FAILED: 5,
      CANCELED: 6,
      EXPIRED: 7,
      MANUALLY_MARKED_AS_COMPLETED: 8,
    });
    f["default"] = a;
  },
  66
);
__d(
  "P2PTransferStatus",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      SYSTEM_FAILURE: 0,
      PENDING_SENDER_MANUAL_REVIEW: 1,
      PENDING_SENDER_VERIFICATION: 2,
      CANCELED_SENDER_RISK: 3,
      PENDING_RECIPIENT_NUX: 4,
      CANCELED_DECLINED: 5,
      PENDING_RECIPIENT_VERIFICATION: 6,
      PENDING_RECIPIENT_MANUAL_REVIEW: 7,
      PENDING_RECIPIENT_PROCESSING: 8,
      PENDING_PUSH_FAIL: 9,
      CANCELED_RECIPIENT_RISK: 10,
      CANCELED_SYSTEM_FAIL: 11,
      CANCELED_EXPIRED: 12,
      COMPLETED: 13,
      INTERMEDIATE_PROCESSING: 14,
      PENDING_SENDER_INITED: 15,
      CANCELED_SAME_CARD: 16,
      PENDING_SENDER_VERIFICATION_PROCESSING: 17,
      PENDING_RECIPIENT_VERIFICATION_PROCESSING: 18,
      CANCELED_SENDER_CANCEL: 19,
      PENDING_SENDER_IDV_REVIEW: 20,
      PENDING_RECEIVER_IDV_REVIEW: 21,
    });
    f["default"] = a;
  },
  66
);
__d(
  "ServicesCalendarSyncType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      CLIENT_ONLY: "client_only",
      NO_CALENDAR_SYNC: "no_calendar_sync",
      SERVER_CONTINUOUS: "server_continuous",
      SERVER_SINGLE: "server_single",
    });
    f["default"] = a;
  },
  66
);
__d(
  "bs_caml_bytes",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      if (b < 0 || b >= a.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error(),
        };
      a[b] = c;
    }
    function b(a, b) {
      if (b < 0 || b >= a.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error(),
        };
      return a[b];
    }
    function c(a, b, c, d) {
      if (c <= 0) return;
      for (var e = b, c = (c + b) | 0; e < c; ++e) a[e] = d;
    }
    function d(a) {
      if (a < 0)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.create",
          Error: new Error(),
        };
      var b = new Array(a);
      for (var c = 0; c < a; ++c) b[c] = 0;
      return b;
    }
    function e(a, b, c, d, e) {
      if (e <= 0) return;
      if (a === c) {
        if (b < d) {
          var f = (((a.length - d) | 0) - 1) | 0,
            g = (e - 1) | 0;
          g = f > g ? g : f;
          for (f = g; f >= 0; --f) a[(d + f) | 0] = a[(b + f) | 0];
          return;
        }
        if (b <= d) return;
        g = (((a.length - b) | 0) - 1) | 0;
        f = (e - 1) | 0;
        f = g > f ? f : g;
        for (g = 0; g <= f; ++g) a[(d + g) | 0] = a[(b + g) | 0];
        return;
      }
      g = (a.length - b) | 0;
      if (e <= g) {
        for (f = 0; f < e; ++f) c[(d + f) | 0] = a[(b + f) | 0];
        return;
      }
      for (f = 0; f < g; ++f) c[(d + f) | 0] = a[(b + f) | 0];
      for (f = g; f < e; ++f) c[(d + f) | 0] = 0;
    }
    function g(a) {
      var b = 0,
        c = a.length,
        d = "",
        e = c;
      if (b === 0 && c <= 4096 && c === a.length)
        return String.fromCharCode.apply(null, a);
      b = 0;
      while (e > 0) {
        c = e < 1024 ? e : 1024;
        var f = new Array(c);
        for (var g = 0; g < c; ++g) f[g] = a[(g + b) | 0];
        d = d + String.fromCharCode.apply(null, f);
        e = (e - c) | 0;
        b = (b + c) | 0;
      }
      return d;
    }
    function h(a, b, c, d, e) {
      if (e <= 0) return;
      var f = (a.length - b) | 0;
      if (e <= f) {
        for (var g = 0; g < e; ++g) c[(d + g) | 0] = a.charCodeAt((b + g) | 0);
        return;
      }
      for (g = 0; g < f; ++g) c[(d + g) | 0] = a.charCodeAt((b + g) | 0);
      for (g = f; g < e; ++g) c[(d + g) | 0] = 0;
    }
    function i(a) {
      var b = a.length,
        c = new Array(b);
      for (var d = 0; d < b; ++d) c[d] = a.charCodeAt(d);
      return c;
    }
    function j(a, b, c, d, e) {
      while (!0) {
        var f = c;
        if (f >= d) return e;
        var g = a[f],
          h = b[f];
        if (g > h) return 1;
        if (g < h) return -1;
        c = (f + 1) | 0;
        continue;
      }
    }
    function k(a, b) {
      var c = a.length,
        d = b.length;
      if (c === d) return j(a, b, 0, c, 0);
      else if (c < d) return j(a, b, 0, c, -1);
      else return j(a, b, 0, d, 1);
    }
    function l(a, b) {
      var c = a.length,
        d = b.length;
      if (c === d) {
        d = 0;
        while (!0) {
          var e = d;
          if (e === c) return !0;
          var f = a[e],
            g = b[e];
          if (f !== g) return !1;
          d = (e + 1) | 0;
          continue;
        }
      } else return !1;
    }
    function m(a, b) {
      return k(a, b) > 0;
    }
    function n(a, b) {
      return k(a, b) >= 0;
    }
    function o(a, b) {
      return k(a, b) < 0;
    }
    function p(a, b) {
      return k(a, b) <= 0;
    }
    f.caml_create_bytes = d;
    f.caml_fill_bytes = c;
    f.get = b;
    f.set = a;
    f.bytes_to_string = g;
    f.caml_blit_bytes = e;
    f.caml_blit_string = h;
    f.bytes_of_string = i;
    f.caml_bytes_compare = k;
    f.caml_bytes_greaterthan = m;
    f.caml_bytes_greaterequal = n;
    f.caml_bytes_lessthan = o;
    f.caml_bytes_lessequal = p;
    f.caml_bytes_equal = l;
  },
  null
);
__d(
  "bs_char",
  ["bs_caml_bytes"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (a < 0 || a > 255)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Char.chr",
          Error: new Error(),
        };
      return a;
    }
    function c(a) {
      var c = 0;
      if (a >= 40) {
        if (a === 92) return "\\\\";
        c = a >= 127 ? 1 : 2;
      } else if (a >= 32) {
        if (a >= 39) return "\\'";
        c = 2;
      } else if (a >= 14) c = 1;
      else
        switch (a) {
          case 8:
            return "\\b";
          case 9:
            return "\\t";
          case 10:
            return "\\n";
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 11:
          case 12:
            c = 1;
            break;
          case 13:
            return "\\r";
        }
      switch (c) {
        case 1:
          c = [0, 0, 0, 0];
          c[0] = 92;
          c[1] = (48 + ((a / 100) | 0)) | 0;
          c[2] = (48 + (((a / 10) | 0) % 10)) | 0;
          c[3] = (48 + (a % 10)) | 0;
          return b("bs_caml_bytes").bytes_to_string(c);
        case 2:
          c = [0];
          c[0] = a;
          return b("bs_caml_bytes").bytes_to_string(c);
      }
    }
    function d(a) {
      if (
        (a >= 65 && a <= 90) ||
        (a >= 192 && a <= 214) ||
        (a >= 216 && a <= 222)
      )
        return (a + 32) | 0;
      else return a;
    }
    function e(a) {
      if (
        (a >= 97 && a <= 122) ||
        (a >= 224 && a <= 246) ||
        (a >= 248 && a <= 254)
      )
        return (a - 32) | 0;
      else return a;
    }
    function g(a) {
      if (a >= 65 && a <= 90) return (a + 32) | 0;
      else return a;
    }
    function h(a) {
      if (a >= 97 && a <= 122) return (a - 32) | 0;
      else return a;
    }
    function i(a, b) {
      return (a - b) | 0;
    }
    function j(a, b) {
      return ((a - b) | 0) === 0;
    }
    f.chr = a;
    f.escaped = c;
    f.lowercase = d;
    f.uppercase = e;
    f.lowercase_ascii = g;
    f.uppercase_ascii = h;
    f.compare = i;
    f.equal = j;
  },
  null
);
__d(
  "bs_bytes",
  ["bs_caml", "bs_caml_bytes", "bs_caml_js_exceptions", "bs_char", "bs_curry"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    function a(a, c) {
      var d = b("bs_caml_bytes").caml_create_bytes(a);
      b("bs_caml_bytes").caml_fill_bytes(d, 0, a, c);
      return d;
    }
    function c(a, c) {
      var d = b("bs_caml_bytes").caml_create_bytes(a);
      for (var e = 0; e < a; ++e) d[e] = b("bs_curry")._1(c, e);
      return d;
    }
    var h = [];
    function i(a) {
      var c = a.length,
        d = b("bs_caml_bytes").caml_create_bytes(c);
      b("bs_caml_bytes").caml_blit_bytes(a, 0, d, 0, c);
      return d;
    }
    function d(a) {
      return b("bs_caml_bytes").bytes_to_string(i(a));
    }
    function e(a) {
      return i(b("bs_caml_bytes").bytes_of_string(a));
    }
    function j(a, c, d) {
      if (c < 0 || d < 0 || c > ((a.length - d) | 0))
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.sub / Bytes.sub",
          Error: new Error(),
        };
      var e = b("bs_caml_bytes").caml_create_bytes(d);
      b("bs_caml_bytes").caml_blit_bytes(a, c, e, 0, d);
      return e;
    }
    function k(a, c, d) {
      return b("bs_caml_bytes").bytes_to_string(j(a, c, d));
    }
    function l(a, b) {
      var c = (a + b) | 0;
      a = a < 0;
      b = b < 0;
      var d = c < 0;
      if (a) {
        if (!b) return c;
        if (d) return c;
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Bytes.extend",
          Error: new Error(),
        };
      }
      if (b) return c;
      if (d)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Bytes.extend",
          Error: new Error(),
        };
      return c;
    }
    function m(a, c, d) {
      d = l(l(a.length, c), d);
      var e = b("bs_caml_bytes").caml_create_bytes(d);
      c = c < 0 ? [-c | 0, 0] : [0, c];
      var f = c[1];
      c = c[0];
      d = b("bs_caml").caml_int_min((a.length - c) | 0, (d - f) | 0);
      d > 0 && b("bs_caml_bytes").caml_blit_bytes(a, c, e, f, d);
      return e;
    }
    function n(a, c, d, e) {
      if (c < 0 || d < 0 || c > ((a.length - d) | 0))
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.fill / Bytes.fill",
          Error: new Error(),
        };
      return b("bs_caml_bytes").caml_fill_bytes(a, c, d, e);
    }
    function o(a, c, d, e, f) {
      if (
        f < 0 ||
        c < 0 ||
        c > ((a.length - f) | 0) ||
        e < 0 ||
        e > ((d.length - f) | 0)
      )
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Bytes.blit",
          Error: new Error(),
        };
      return b("bs_caml_bytes").caml_blit_bytes(a, c, d, e, f);
    }
    function p(a, c, d, e, f) {
      if (
        f < 0 ||
        c < 0 ||
        c > ((a.length - f) | 0) ||
        e < 0 ||
        e > ((d.length - f) | 0)
      )
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.blit / Bytes.blit_string",
          Error: new Error(),
        };
      return b("bs_caml_bytes").caml_blit_string(a, c, d, e, f);
    }
    function q(a, c) {
      for (var d = 0, e = c.length; d < e; ++d) b("bs_curry")._1(a, c[d]);
    }
    function r(a, c) {
      for (var d = 0, e = c.length; d < e; ++d) b("bs_curry")._2(a, d, c[d]);
    }
    function s(a, b) {
      if (a >= b) return a;
      throw {
        RE_EXN_ID: "Invalid_argument",
        _1: "Bytes.concat",
        Error: new Error(),
      };
    }
    function t(a, b, c) {
      while (!0) {
        var d = c,
          e = a;
        if (!d) return e;
        var f = d.tl;
        d = d.hd;
        if (!f) return (d.length + e) | 0;
        c = f;
        a = s((((d.length + b) | 0) + e) | 0, e);
        continue;
      }
    }
    function u(a, c) {
      if (!c) return h;
      var d = a.length,
        e = b("bs_caml_bytes").caml_create_bytes(t(0, d, c)),
        f = 0;
      c = c;
      while (!0) {
        var g = c,
          i = f;
        if (!g) return e;
        var j = g.tl;
        g = g.hd;
        if (j) {
          b("bs_caml_bytes").caml_blit_bytes(g, 0, e, i, g.length);
          b("bs_caml_bytes").caml_blit_bytes(a, 0, e, (i + g.length) | 0, d);
          c = j;
          f = (((i + g.length) | 0) + d) | 0;
          continue;
        }
        b("bs_caml_bytes").caml_blit_bytes(g, 0, e, i, g.length);
        return e;
      }
    }
    function v(a, c) {
      var d = a.length,
        e = c.length,
        f = b("bs_caml_bytes").caml_create_bytes((d + e) | 0);
      b("bs_caml_bytes").caml_blit_bytes(a, 0, f, 0, d);
      b("bs_caml_bytes").caml_blit_bytes(c, 0, f, d, e);
      return f;
    }
    function w(a) {
      if (a > 13 || a < 9) return a === 32;
      else return a !== 11;
    }
    function x(a) {
      var b = a.length,
        c = 0;
      while (c < b && w(a[c])) c = (c + 1) | 0;
      b = (b - 1) | 0;
      while (b >= c && w(a[b])) b = (b - 1) | 0;
      if (b >= c) return j(a, c, (((b - c) | 0) + 1) | 0);
      else return h;
    }
    function y(a) {
      var c = 0;
      for (var d = 0, e = a.length; d < e; ++d) {
        var f = a[d];
        c =
          (c +
            (f >= 32
              ? f > 92 || f < 34
                ? f >= 127
                  ? 4
                  : 1
                : f > 91 || f < 35
                ? 2
                : 1
              : f >= 11
              ? f !== 13
                ? 4
                : 2
              : f >= 8
              ? 2
              : 4)) |
          0;
      }
      if (c === a.length) return i(a);
      f = b("bs_caml_bytes").caml_create_bytes(c);
      c = 0;
      for (d = 0, e = a.length; d < e; ++d) {
        var g = a[d],
          h = 0;
        if (g >= 35) g !== 92 ? (g >= 127 ? (h = 1) : (f[c] = g)) : (h = 2);
        else if (g >= 32) g >= 34 ? (h = 2) : (f[c] = g);
        else if (g >= 14) h = 1;
        else
          switch (g) {
            case 8:
              f[c] = 92;
              c = (c + 1) | 0;
              f[c] = 98;
              break;
            case 9:
              f[c] = 92;
              c = (c + 1) | 0;
              f[c] = 116;
              break;
            case 10:
              f[c] = 92;
              c = (c + 1) | 0;
              f[c] = 110;
              break;
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 11:
            case 12:
              h = 1;
              break;
            case 13:
              f[c] = 92;
              c = (c + 1) | 0;
              f[c] = 114;
              break;
          }
        switch (h) {
          case 1:
            f[c] = 92;
            c = (c + 1) | 0;
            f[c] = (48 + ((g / 100) | 0)) | 0;
            c = (c + 1) | 0;
            f[c] = (48 + (((g / 10) | 0) % 10)) | 0;
            c = (c + 1) | 0;
            f[c] = (48 + (g % 10)) | 0;
            break;
          case 2:
            f[c] = 92;
            c = (c + 1) | 0;
            f[c] = g;
            break;
        }
        c = (c + 1) | 0;
      }
      return f;
    }
    function z(a, c) {
      var d = c.length;
      if (d === 0) return c;
      var e = b("bs_caml_bytes").caml_create_bytes(d);
      for (var f = 0; f < d; ++f) e[f] = b("bs_curry")._1(a, c[f]);
      return e;
    }
    function A(a, c) {
      var d = c.length;
      if (d === 0) return c;
      var e = b("bs_caml_bytes").caml_create_bytes(d);
      for (var f = 0; f < d; ++f) e[f] = b("bs_curry")._2(a, f, c[f]);
      return e;
    }
    function B(a) {
      return z(b("bs_char").uppercase_ascii, a);
    }
    function C(a) {
      return z(b("bs_char").lowercase_ascii, a);
    }
    function D(a, c) {
      if (c.length === 0) return c;
      var d = i(c);
      d[0] = b("bs_curry")._1(a, c[0]);
      return d;
    }
    function E(a) {
      return D(b("bs_char").uppercase_ascii, a);
    }
    function F(a) {
      return D(b("bs_char").lowercase_ascii, a);
    }
    function G(a, b, c, d) {
      while (!0) {
        var e = c;
        if (e >= b) throw { RE_EXN_ID: "Not_found", Error: new Error() };
        if (a[e] === d) return e;
        c = (e + 1) | 0;
        continue;
      }
    }
    function H(a, b) {
      return G(a, a.length, 0, b);
    }
    function I(a, b, c, d) {
      while (!0) {
        var e = c;
        if (e >= b) return;
        if (a[e] === d) return e;
        c = (e + 1) | 0;
        continue;
      }
    }
    function J(a, b) {
      return I(a, a.length, 0, b);
    }
    function K(a, b, c) {
      var d = a.length;
      if (b < 0 || b > d)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.index_from / Bytes.index_from",
          Error: new Error(),
        };
      return G(a, d, b, c);
    }
    function L(a, b, c) {
      var d = a.length;
      if (b < 0 || b > d)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.index_from_opt / Bytes.index_from_opt",
          Error: new Error(),
        };
      return I(a, d, b, c);
    }
    function M(a, b, c) {
      while (!0) {
        var d = b;
        if (d < 0) throw { RE_EXN_ID: "Not_found", Error: new Error() };
        if (a[d] === c) return d;
        b = (d - 1) | 0;
        continue;
      }
    }
    function N(a, b) {
      return M(a, (a.length - 1) | 0, b);
    }
    function O(a, b, c) {
      if (b < -1 || b >= a.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rindex_from / Bytes.rindex_from",
          Error: new Error(),
        };
      return M(a, b, c);
    }
    function P(a, b, c) {
      while (!0) {
        var d = b;
        if (d < 0) return;
        if (a[d] === c) return d;
        b = (d - 1) | 0;
        continue;
      }
    }
    function Q(a, b) {
      return P(a, (a.length - 1) | 0, b);
    }
    function R(a, b, c) {
      if (b < -1 || b >= a.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rindex_from_opt / Bytes.rindex_from_opt",
          Error: new Error(),
        };
      return P(a, b, c);
    }
    function S(a, c, d) {
      var e = a.length;
      if (c < 0 || c > e)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.contains_from / Bytes.contains_from",
          Error: new Error(),
        };
      try {
        G(a, e, c, d);
        return !0;
      } catch (c) {
        a = b("bs_caml_js_exceptions").internalToOCamlException(c);
        if (a.RE_EXN_ID === "Not_found") return !1;
        throw a;
      }
    }
    function T(a, b) {
      return S(a, 0, b);
    }
    function U(a, c, d) {
      if (c < 0 || c >= a.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rcontains_from / Bytes.rcontains_from",
          Error: new Error(),
        };
      try {
        M(a, c, d);
        return !0;
      } catch (c) {
        a = b("bs_caml_js_exceptions").internalToOCamlException(c);
        if (a.RE_EXN_ID === "Not_found") return !1;
        throw a;
      }
    }
    var V = (g = b("bs_caml_bytes")).caml_bytes_compare;
    function W(a) {
      return z(b("bs_char").uppercase, a);
    }
    function X(a) {
      return z(b("bs_char").lowercase, a);
    }
    function Y(a) {
      return D(b("bs_char").uppercase, a);
    }
    function Z(a) {
      return D(b("bs_char").lowercase, a);
    }
    var $ = g.caml_bytes_equal,
      aa = g.bytes_to_string;
    g = g.bytes_of_string;
    f.make = a;
    f.init = c;
    f.empty = h;
    f.copy = i;
    f.of_string = e;
    f.to_string = d;
    f.sub = j;
    f.sub_string = k;
    f.extend = m;
    f.fill = n;
    f.blit = o;
    f.blit_string = p;
    f.concat = u;
    f.cat = v;
    f.iter = q;
    f.iteri = r;
    f.map = z;
    f.mapi = A;
    f.trim = x;
    f.escaped = y;
    f.index = H;
    f.index_opt = J;
    f.rindex = N;
    f.rindex_opt = Q;
    f.index_from = K;
    f.index_from_opt = L;
    f.rindex_from = O;
    f.rindex_from_opt = R;
    f.contains = T;
    f.contains_from = S;
    f.rcontains_from = U;
    f.uppercase = W;
    f.lowercase = X;
    f.capitalize = Y;
    f.uncapitalize = Z;
    f.uppercase_ascii = B;
    f.lowercase_ascii = C;
    f.capitalize_ascii = E;
    f.uncapitalize_ascii = F;
    f.compare = V;
    f.equal = $;
    f.unsafe_to_string = aa;
    f.unsafe_of_string = g;
  },
  null
);
__d(
  "bs_caml_string",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      if (b >= a.length || b < 0)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error(),
        };
      return a.charCodeAt(b);
    }
    function b(a, b) {
      return String.fromCharCode(b).repeat(a);
    }
    f.get = a;
    f.make = b;
  },
  null
);
__d(
  "bs_string",
  [
    "bs_bytes",
    "bs_caml",
    "bs_caml_bytes",
    "bs_caml_js_exceptions",
    "bs_caml_string",
    "bs_curry",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, c) {
      return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").init(a, c));
    }
    function g(a, c, d) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").sub(b("bs_caml_bytes").bytes_of_string(a), c, d)
      );
    }
    function h(a, b) {
      if (a >= b) return a;
      throw {
        RE_EXN_ID: "Invalid_argument",
        _1: "String.concat",
        Error: new Error(),
      };
    }
    function i(a, b, c) {
      while (!0) {
        var d = c,
          e = a;
        if (!d) return e;
        var f = d.tl;
        d = d.hd;
        if (!f) return (d.length + e) | 0;
        c = f;
        a = h((((d.length + b) | 0) + e) | 0, e);
        continue;
      }
    }
    function j(a, c, d, e, f) {
      while (!0) {
        var g = f,
          h = c;
        if (!g) return a;
        var i = g.tl;
        g = g.hd;
        if (i) {
          b("bs_caml_bytes").caml_blit_string(g, 0, a, h, g.length);
          b("bs_caml_bytes").caml_blit_string(d, 0, a, (h + g.length) | 0, e);
          f = i;
          c = (((h + g.length) | 0) + e) | 0;
          continue;
        }
        b("bs_caml_bytes").caml_blit_string(g, 0, a, h, g.length);
        return a;
      }
    }
    function c(a, c) {
      if (!c) return "";
      var d = a.length;
      return b("bs_caml_bytes").bytes_to_string(
        j(b("bs_caml_bytes").caml_create_bytes(i(0, d, c)), 0, a, d, c)
      );
    }
    function d(a, c) {
      for (var d = 0, e = c.length; d < e; ++d)
        b("bs_curry")._1(a, c.charCodeAt(d));
    }
    function e(a, c) {
      for (var d = 0, e = c.length; d < e; ++d)
        b("bs_curry")._2(a, d, c.charCodeAt(d));
    }
    function k(a, c) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").map(a, b("bs_caml_bytes").bytes_of_string(c))
      );
    }
    function l(a, c) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").mapi(a, b("bs_caml_bytes").bytes_of_string(c))
      );
    }
    function m(a) {
      if (a > 13 || a < 9) return a === 32;
      else return a !== 11;
    }
    function n(a) {
      if (
        a === "" ||
        !(m(a.charCodeAt(0)) || m(a.charCodeAt((a.length - 1) | 0)))
      )
        return a;
      else
        return b("bs_caml_bytes").bytes_to_string(
          b("bs_bytes").trim(b("bs_caml_bytes").bytes_of_string(a))
        );
    }
    function o(a) {
      var c = function (b) {
        while (!0) {
          var c = b;
          if (c >= a.length) return !1;
          var d = a.charCodeAt(c);
          if (d < 32) return !0;
          if (d > 92 || d < 34) {
            if (d >= 127) return !0;
            b = (c + 1) | 0;
            continue;
          }
          if (d > 91 || d < 35) return !0;
          b = (c + 1) | 0;
          continue;
        }
      };
      if (c(0))
        return b("bs_caml_bytes").bytes_to_string(
          b("bs_bytes").escaped(b("bs_caml_bytes").bytes_of_string(a))
        );
      else return a;
    }
    function p(a, b, c, d) {
      while (!0) {
        var e = c;
        if (e >= b) throw { RE_EXN_ID: "Not_found", Error: new Error() };
        if (a.charCodeAt(e) === d) return e;
        c = (e + 1) | 0;
        continue;
      }
    }
    function q(a, b) {
      return p(a, a.length, 0, b);
    }
    function r(a, b, c, d) {
      while (!0) {
        var e = c;
        if (e >= b) return;
        if (a.charCodeAt(e) === d) return e;
        c = (e + 1) | 0;
        continue;
      }
    }
    function s(a, b) {
      return r(a, a.length, 0, b);
    }
    function t(a, b, c) {
      var d = a.length;
      if (b < 0 || b > d)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.index_from / Bytes.index_from",
          Error: new Error(),
        };
      return p(a, d, b, c);
    }
    function u(a, b, c) {
      var d = a.length;
      if (b < 0 || b > d)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.index_from_opt / Bytes.index_from_opt",
          Error: new Error(),
        };
      return r(a, d, b, c);
    }
    function v(a, b, c) {
      while (!0) {
        var d = b;
        if (d < 0) throw { RE_EXN_ID: "Not_found", Error: new Error() };
        if (a.charCodeAt(d) === c) return d;
        b = (d - 1) | 0;
        continue;
      }
    }
    function w(a, b) {
      return v(a, (a.length - 1) | 0, b);
    }
    function x(a, b, c) {
      if (b < -1 || b >= a.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rindex_from / Bytes.rindex_from",
          Error: new Error(),
        };
      return v(a, b, c);
    }
    function y(a, b, c) {
      while (!0) {
        var d = b;
        if (d < 0) return;
        if (a.charCodeAt(d) === c) return d;
        b = (d - 1) | 0;
        continue;
      }
    }
    function z(a, b) {
      return y(a, (a.length - 1) | 0, b);
    }
    function A(a, b, c) {
      if (b < -1 || b >= a.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rindex_from_opt / Bytes.rindex_from_opt",
          Error: new Error(),
        };
      return y(a, b, c);
    }
    function B(a, c, d) {
      var e = a.length;
      if (c < 0 || c > e)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.contains_from / Bytes.contains_from",
          Error: new Error(),
        };
      try {
        p(a, e, c, d);
        return !0;
      } catch (c) {
        a = b("bs_caml_js_exceptions").internalToOCamlException(c);
        if (a.RE_EXN_ID === "Not_found") return !1;
        throw a;
      }
    }
    function C(a, b) {
      return B(a, 0, b);
    }
    function D(a, c, d) {
      if (c < 0 || c >= a.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rcontains_from / Bytes.rcontains_from",
          Error: new Error(),
        };
      try {
        v(a, c, d);
        return !0;
      } catch (c) {
        a = b("bs_caml_js_exceptions").internalToOCamlException(c);
        if (a.RE_EXN_ID === "Not_found") return !1;
        throw a;
      }
    }
    function E(a) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").uppercase_ascii(b("bs_caml_bytes").bytes_of_string(a))
      );
    }
    function F(a) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").lowercase_ascii(b("bs_caml_bytes").bytes_of_string(a))
      );
    }
    function G(a) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").capitalize_ascii(b("bs_caml_bytes").bytes_of_string(a))
      );
    }
    function H(a) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").uncapitalize_ascii(b("bs_caml_bytes").bytes_of_string(a))
      );
    }
    var I = b("bs_caml").caml_string_compare;
    function J(a, b) {
      var c = 0,
        d = b.length;
      for (var e = (b.length - 1) | 0; e >= 0; --e)
        b.charCodeAt(e) === a &&
          ((c = { hd: g(b, (e + 1) | 0, (((d - e) | 0) - 1) | 0), tl: c }),
          (d = e));
      return { hd: g(b, 0, d), tl: c };
    }
    function K(a) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").uppercase(b("bs_caml_bytes").bytes_of_string(a))
      );
    }
    function L(a) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").lowercase(b("bs_caml_bytes").bytes_of_string(a))
      );
    }
    function M(a) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").capitalize(b("bs_caml_bytes").bytes_of_string(a))
      );
    }
    function N(a) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").uncapitalize(b("bs_caml_bytes").bytes_of_string(a))
      );
    }
    var O = b("bs_caml_string").make,
      P = b("bs_bytes").blit_string;
    function Q(a, b) {
      return a === b;
    }
    f.make = O;
    f.init = a;
    f.sub = g;
    f.blit = P;
    f.concat = c;
    f.iter = d;
    f.iteri = e;
    f.map = k;
    f.mapi = l;
    f.trim = n;
    f.escaped = o;
    f.index = q;
    f.index_opt = s;
    f.rindex = w;
    f.rindex_opt = z;
    f.index_from = t;
    f.index_from_opt = u;
    f.rindex_from = x;
    f.rindex_from_opt = A;
    f.contains = C;
    f.contains_from = B;
    f.rcontains_from = D;
    f.uppercase = K;
    f.lowercase = L;
    f.capitalize = M;
    f.uncapitalize = N;
    f.uppercase_ascii = E;
    f.lowercase_ascii = F;
    f.capitalize_ascii = G;
    f.uncapitalize_ascii = H;
    f.compare = I;
    f.equal = Q;
    f.split_on_char = J;
  },
  null
);
__d(
  "MessengerStoryAttachmentTransformer.bs",
  [
    "fbt",
    "CurrentUser",
    "FundsAvailability",
    "LeadGenInfoFieldTypes",
    "MNCommerceBubbleType",
    "MNCommerceCallToActionType",
    "P2PPaymentRequestStatus",
    "P2PTransferStatus",
    "PaymentModulesClient",
    "ServicesCalendarSyncType",
    "URI",
    "bs_belt_Option",
    "bs_caml_array",
    "bs_caml_format",
    "bs_caml_option",
    "bs_js_dict",
    "bs_js_null_undefined",
    "bs_string",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function i(a) {
      return a.map(function (a) {
        var b = a.user_confirmation;
        b =
          b == null
            ? [null, null, null, null, !1]
            : [
                b.cancel_button_label,
                b.continue_button_label,
                b.confirmation_message,
                b.confirmation_title,
                !0,
              ];
        var d = a.payment_metadata;
        return {
          action_link: a.action_link,
          action_objects: a.action_objects,
          action_type: c("bs_js_null_undefined").fromOption(
            c("bs_js_dict").get(
              c("MNCommerceCallToActionType"),
              a.action_open_type
            )
          ),
          confirmation_cancel_label: b[0],
          confirmation_continue_label: b[1],
          confirmation_message: b[2],
          confirmation_title: b[3],
          cta_data: a.cta_data,
          id: a.id,
          is_disabled: a.is_disabled,
          is_mutable_by_server: a.is_mutable_by_server,
          logging_token: a.logging_token,
          page_id: a.page_id,
          payment_metadata:
            d == null
              ? { payment_module_config: null, total_price: null }
              : {
                  payment_module_config: d.payment_module_config,
                  total_price: d.total_price,
                },
          render_style: a.render_style,
          should_show_user_confirmation: b[4],
          title: a.title,
          webview_metadata: {
            fallback_url: a.webview_metadata.fallback_url,
            messenger_extensions: a.webview_metadata.messenger_extensions,
            webview_height_ratio: a.webview_metadata.webview_height_ratio,
            webview_share_button: a.webview_metadata.webview_share_button,
          },
        };
      });
    }
    function j(a) {
      return a.map(function (a) {
        var b = a.url;
        b = b == null ? null : new (c("URI"))(b).getUnqualifiedURI().toString();
        return { title: a.title, uri: b };
      });
    }
    function a(a) {
      if (!(a == null) && a !== "")
        return "#" + c("bs_string").sub(a, 2, (a.length - 2) | 0);
      else return null;
    }
    function d(a) {
      if (a == null) return null;
      else return { height: a.height, src: a.uri, url: a.uri, width: a.width };
    }
    function k(a, b) {
      var c = b.cover_photo,
        d;
      if (c == null) d = [null, null, null];
      else {
        var e = c.photo.image;
        e =
          e == null
            ? [null, null]
            : [e.uri, { height: e.height, width: e.width }];
        d = [c.photo.id, e[0], e[1]];
      }
      c = b.location;
      e = c == null ? [null, null] : [c.latitude, c.longitude];
      c = b.overall_star_rating;
      return {
        address: b.address.single_line_full_address,
        category: b.top_category_name,
        coverPhotoDimensions: d[2],
        coverPhotoID: d[0],
        coverPhotoURL: d[1],
        latitude: e[0],
        longitude: e[1],
        name: b.name,
        pageID: b.id,
        priceRange: b.price_range_description,
        rating: c == null ? null : c.value,
        viewerID: a,
      };
    }
    function l(a) {
      var b = a.group_commerce_item_seller,
        c = a.primary_photo,
        d;
      if (c == null) d = null;
      else {
        c = c.image;
        d = c == null ? null : c.uri;
      }
      return {
        caption: a.group_commerce_item_description.text,
        desc: a.group_commerce_item_description.text,
        owner_id: b == null ? null : b.id,
        price: a.formatted_price.text,
        text: a.group_commerce_item_description.text,
        thumb_url: d,
        title: a.group_commerce_item_title,
        url: a.url,
      };
    }
    function m(a) {
      return {
        app_name: a.application_name,
        artists: a.artist_names,
        audio_url: a.audio_url,
        duration_ms: a.duration_ms,
        title: a.music_title,
      };
    }
    function n(a) {
      var b = a.payment;
      return {
        desc: a.desc,
        display_total_cost: a.total_cost,
        id: a.id,
        merchant_name: a.merchant_name,
        name: a.name,
        payment_id: b == null ? null : b.id,
        raw_amount: a.raw_amount,
        target_url: a.target_url,
        thumb_url: a.thumb_url,
        total_cost: {
          amount: c("bs_caml_format").caml_float_of_string(a.price_amount),
          currency: a.price_currency,
        },
      };
    }
    function o(a) {
      return {
        canDonate: a.canDonate,
        focusedCoverPhoto: a.focusedCoverPhoto,
        fundraiserDetailedProgressText: a.fundraiserDetailedProgressText,
        fundraiserID: a.fundraiserID,
        fundraiserSubtitleText: a.fundraiserSubtitleText,
        hasViewerDonated: a.hasViewerDonated,
      };
    }
    function p(a) {
      return {
        attach_type: "file",
        extension: a.extension,
        filesize: a.filesize,
        id: a.id,
        is_malicious: a.is_malicious,
        name: a.name,
        url: a.uri,
      };
    }
    function q(a) {
      return {
        attach_type: "video",
        extension: a.extension,
        filesize: a.filesize,
        height: a.height,
        id: a.id,
        name: a.filename,
        url: a.playable_url,
        url_shimhash: a.url_shimhash,
        width: a.width,
      };
    }
    function r(a) {
      return {
        call_to_actions: i(a.call_to_actions),
        default_action: a.default_action,
        desc: a.desc,
        id: a.id,
        image_aspect_ratio: a.image_aspect_ratio,
        item_url: a.item_url,
        metalines: {
          metaline_1: a.first_metaline,
          metaline_2: a.second_metaline,
          metaline_3: a.third_metaline,
        },
        name: a.name,
        source: a.source,
        text: a.desc,
        thumb_url: a.thumb_url,
        title: a.name,
      };
    }
    function s(a) {
      var b = function (a) {
          a = a.services_vertical_info;
          if (!(a == null))
            return {
              isEligibleForAppointmentCalendar:
                a.is_eligible_for_appointment_calendar,
              isEligibleForMBSCalendar: a.is_eligible_for_mbs_calendar,
              timezoneName: a.time_zone_name,
            };
        },
        d = a.page;
      b =
        d == null
          ? [void 0, void 0, void 0]
          : [
              d.id,
              c("bs_js_null_undefined").fromOption(
                c("bs_js_dict").get(
                  c("ServicesCalendarSyncType"),
                  d.calendar_sync_type
                )
              ),
              b(d),
            ];
      d = a.native_component_flow_request;
      var e;
      if (d == null) e = null;
      else {
        var f = d.page,
          g = d.page,
          i = d.page,
          j;
        if (i == null) j = void 0;
        else {
          i = i.profile_picture;
          j = i == null ? void 0 : i.uri;
        }
        i = d.suggested_time_range;
        var k = d.user,
          l = d.user,
          m = d.job_application,
          n = d.user,
          o;
        if (n == null) o = void 0;
        else {
          n = n.profile_picture;
          o = n == null ? void 0 : n.uri;
        }
        e = {
          additionalInfo: d.additional_info,
          appointmentAddress: d.appointment_address,
          archivedStatus: d.archived_status,
          availability: d.availability,
          consumer_phone_number: d.consumer_phone_number,
          generalInfo: d.service_general_info,
          hasSavedToCalendar: d.has_saved_to_calendar,
          id: d.id,
          jobApplicationID: m == null ? void 0 : m.id,
          pageID: f == null ? void 0 : f.id,
          pageName: g == null ? void 0 : g.name,
          pageProfilePic: j,
          preferredTimeRange: i == null ? null : { end: i.end, start: i.start },
          productItems: d.services_product_items,
          recurMessage: d.recur_message,
          reminderBubbleText: d.reminder_bubble_text,
          requestAdminApprovalType: d.request_admin_approval_type,
          requestedTime: d.requested_time,
          requestFlowType: d.request_flow_type,
          specialRequest: d.special_request,
          status: d.booking_status_value,
          statusLabel: d.status,
          userID: k == null ? void 0 : k.id,
          username: l == null ? void 0 : l.short_name,
          userProfilePic: o,
        };
      }
      n = a.message_bubble_type;
      var p;
      switch (n) {
        case "ATTENDANCE_UPDATE":
          p = ["Attendance Update", h._("Attendance-update")];
          break;
        case "CANCELLED":
          p = ["Cancelled", h._("Canceled")];
          break;
        case "DECLINED":
          p = ["Declined", h._("Declined")];
          break;
        case "NO_SHOW":
          p = ["No Show", h._("No-show")];
          break;
        case "REQUESTED":
          p = ["Requested", h._("Appointment request")];
          break;
        case "SCHEDULEED":
          p = ["Scheduled", h._("Scheduled")];
          break;
        default:
          throw {
            _1: "Erroneous target status",
            Error: new Error(),
            RE_EXN_ID: "Invalid_argument",
          };
      }
      m = a.user;
      return {
        calendarSyncType: b[1],
        id: a.id,
        ls_xma_subtitle: a.ls_xma_subtitle,
        ls_xma_title: a.ls_xma_title,
        pageID: b[0],
        requestMetadata: e,
        servicesVerticalInfo: b[2],
        status: p[0],
        statusLabel: p[1],
        userID: m == null ? "0" : m.id,
        viewerID: c("CurrentUser").getAccountID(),
      };
    }
    function t(a) {
      return {
        has_booking_request_created: a.has_booking_request_created,
        id: a.id,
        page_id: a.page.id,
        time_ranges: a.formatted_available_time_ranges.map(function (a) {
          return { end: a.end, start: a.start };
        }),
        user_id: a.consumer.id,
      };
    }
    function u(a) {
      return { id: a.id };
    }
    function v(a) {
      return {
        coordinate: a.coordinate,
        expiration_time: a.expiration_time,
        is_expired: a.is_expired,
        live_location_id: a.live_location_id,
        location_title: a.location_title,
        sender: a.sender,
        sender_destination: a.sender_destination,
        stop_reason: a.stop_reason,
      };
    }
    function w(a) {
      return {
        sender_wec_name: a.sender_wec_name,
        sender_wec_number: a.sender_wec_number,
        sender_wec_number_fbid: a.sender_wec_number_fbid,
        sender_wec_number_formated: a.sender_wec_number_formated,
        templated_message_body: a.templated_message_body,
        templated_message_btn1_text: a.templated_message_btn1_text,
        templated_message_btn1_type: a.templated_message_btn1_type,
        templated_message_btn2_text: a.templated_message_btn2_text,
        templated_message_btn2_type: a.templated_message_btn2_type,
        templated_message_btn3_text: a.templated_message_btn3_text,
        templated_message_btn3_type: a.templated_message_btn3_type,
        templated_message_footer: a.templated_message_footer,
        templated_message_header_media: a.templated_message_header_media,
        templated_message_header_text: a.templated_message_header_text,
        templated_message_header_type: a.templated_message_header_type,
        templated_message_id: a.templated_message_id,
        templated_message_name: a.templated_message_name,
        wec_referral_body: a.wec_referral_body,
        wec_referral_headline: a.wec_referral_headline,
        wec_referral_media: a.wec_referral_media,
        wec_referral_media_type: a.wec_referral_media_type,
        wec_referral_url: a.wec_referral_url,
      };
    }
    function x(a) {
      var b = a.preview;
      b = b == null ? null : b.uri;
      var c = a.large_preview;
      c = c == null ? null : c.uri;
      return {
        attach_type: "photo",
        extension: a.extension,
        id: a.id,
        large_preview: a.large_preview,
        large_preview_url: c,
        preview: a.preview,
        preview_url: b,
      };
    }
    function y(a) {
      return {
        attach_type: "audio",
        duration: a.duration,
        extension: a.extension,
        filesize: a.filesize,
        id: a.id,
        name: a.filename,
        url: a.playable_url,
        url_shimhash: a.url_shimhash,
      };
    }
    function z(a) {
      var b = a.first_metaline;
      return {
        call_to_actions: i(a.call_to_actions),
        default_action: a.default_action,
        desc: a.description,
        id: a.id,
        image_aspect_ratio: a.image_aspect_ratio,
        item_url: a.target_url,
        media_blob_attachments: a.media_blob_attachments,
        metalines: b == null ? {} : { metaline_1: b },
        name: a.name,
        source: a.source_name,
        text: a.description,
        thumb_url: a.image_url,
        title: a.name,
      };
    }
    function A(a) {
      var b = a.business_items.nodes.map(z),
        c = i(a.call_to_actions);
      return { call_to_actions: c, items: b, message: a.message };
    }
    function B(a) {
      return {
        call_to_actions: i(a.call_to_actions),
        items: a.promotion_items.nodes.map(z),
        message: a.message,
      };
    }
    function C(a) {
      var b = a.structured_address.streets,
        d = a.partner_logo;
      return {
        account_holder_name: a.account_holder_name,
        adjustments: a.adjustments.map(function (a) {
          return {
            adjustment_type: a.adjustment_type,
            display_adjustment_amount: a.adjustment_amount,
          };
        }),
        cancellation_url: a.cancellation_url,
        items: a.items.nodes.map(z),
        merchant_name: a.merchant_name,
        messenger_commerce_bubble_type: c("bs_js_null_undefined").fromOption(
          c("bs_js_dict").get(
            c("MNCommerceBubbleType"),
            a.messenger_commerce_bubble_type
          )
        ),
        order_id: a.order_id,
        order_time: a.order_time,
        order_url: a.order_url,
        partner_logo: d == null ? void 0 : d.uri,
        payment_method: a.payment_method,
        receipt_id: a.receipt_id,
        recipient_name: a.recipient_name,
        shipping_cost: a.shipping_cost,
        shipping_method: a.shipping_method,
        status: a.status,
        structured_address: {
          city: a.structured_address.city,
          country: a.structured_address.country,
          postal_code: a.structured_address.postal_code,
          state: a.structured_address.state,
          street_1: c("bs_caml_array").get(b, 0),
          street_2: c("bs_caml_array").get(b, 1),
        },
        subtotal: a.subtotal,
        total_cost: a.total_cost,
        total_tax: a.total_tax,
      };
    }
    function D(a, b) {
      return {
        actor_id: a,
        buyer_name: b.buyer_name,
        click_action: b.click_action,
        components: b.components,
        invoicer_id: b.invoicer_id,
        is_last_attachment: b.is_last_attachment,
        is_viewer_seller: b.is_viewer_seller,
        item_list: b.item_list.map(function (a) {
          return {
            description: a.description,
            image_urls: a.images.map(function (a) {
              return a.uri;
            }),
            item_id: a.item_id,
            name: a.name,
            quantity: a.quantity,
            subtitle: a.subtitle,
            unit_price: a.unit_price,
          };
        }),
        payment_call_to_actions: b.payment_call_to_actions,
        payment_modules_client: c("bs_js_null_undefined").fromOption(
          c("bs_js_dict").get(
            c("PaymentModulesClient"),
            b.payment_modules_client
          )
        ),
        payment_snippet: b.payment_snippet,
        payment_status_icon: b.payment_status_icon,
        payment_sub_statuses: b.payment_sub_statuses,
        payment_total: b.payment_total,
        product_detail: b.product_detail,
        should_show_new_xma: b.should_show_new_xma,
        summary_action: b.summary_action,
        user_facing_payment_status: b.user_facing_payment_status,
      };
    }
    var E = function (a) {
      var c = b("LeadGenInfoFieldTypes"),
        d = {},
        e = [];
      for (
        var a = a.field_data_list,
          f = Array.isArray(a),
          g = 0,
          a = f
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var h;
        if (f) {
          if (g >= a.length) break;
          h = a[g++];
        } else {
          g = a.next();
          if (g.done) break;
          h = g.value;
        }
        h = h;
        var i = h.field_type,
          j = h.label;
        h = h.values;
        i === c.CUSTOM || i === c.ZIP
          ? e.push({ label: j, values: h })
          : (d[i] = { label: j, values: h });
      }
      d.questions = e;
      return d;
    };
    function F(a, b) {
      var c = b.invite_recipient;
      c = c == null ? null : c.id;
      var d = b.invite_sender;
      d = d == null ? null : d.id;
      return {
        is_viewer_recipient: a === c,
        quick_invite_id: b.id,
        recipient_id: c,
        sender_id: d,
      };
    }
    function G(a) {
      var b = function (a) {
          if (a == null) return null;
          else return a.uri;
        },
        c = a.listing_category;
      c = c == null ? [null, null] : [c.offer_image, c.request_image];
      return {
        listingType: a.listing_type,
        mapURI: b(a.map_image),
        offerURI: b(c[0]),
        requestURI: b(c[1]),
      };
    }
    function H(a) {
      return {
        bubbleView: a.bubble_view,
        receiver: a.receiver,
        sender: a.sender,
        transfer_id: a.transfer_id,
      };
    }
    function I(a) {
      var b = a.receiver_profile,
        d;
      if (b == null) d = null;
      else {
        var e = b.profile_picture;
        d = {
          full_name: b.name,
          id: b.id,
          name: b.short_name,
          picture: e == null ? null : e.uri,
          profile_url: b.url,
        };
      }
      e = a.sender;
      if (e == null) b = {};
      else {
        var f = e.profile_picture;
        b = {
          full_name: e.full_name,
          id: e.id,
          name: e.name,
          picture: f == null ? null : f.uri,
          profile_uri: e.url,
        };
      }
      f = a.transfer_context;
      if (f == null) e = [null, null];
      else {
        var g = f.transfer_theme;
        e = [
          f.memo_images.map(function (a) {
            a = a.image;
            if (a == null) return null;
            else return a.uri;
          }),
          g == null ? null : g.id,
        ];
      }
      f = a.platform_item;
      g =
        f == null
          ? null
          : {
              description: f.description,
              image: f.photos.map(function (a) {
                a = a.image;
                if (a == null) return null;
                else return a.uri;
              }),
              name: f.name,
              refURL: f.url,
            };
      f = a.amount_fb_discount;
      return {
        amount: a.transaction_amount.amount,
        amountWithSymbol: a.transaction_amount.formatted_amount,
        bubbleView: a.bubble_view,
        completedTime: a.completedTime,
        creationTime: a.creationTime,
        currencyCode: a.currency_amount.currency,
        discountAmount: f == null ? null : f.formatted,
        fundsAvailability: c("bs_js_null_undefined").fromOption(
          c("bs_js_dict").get(c("FundsAvailability"), a.funds_availability)
        ),
        groupThreadFBID: a.group_thread_fbid,
        memoPhotoURLs: e[0],
        memoText: a.memo_text,
        platform_item: g,
        receiver: d,
        sender: b,
        status: c("bs_js_null_undefined").fromOption(
          c("bs_js_dict").get(c("P2PTransferStatus"), a.transfer_status)
        ),
        statusDescription: { markup: a.status_description },
        themeID: e[1],
        transfer_id: a.transfer_id,
        updatedTime: a.updatedTime,
      };
    }
    function J(a) {
      var b = a.requester,
        d;
      if (b == null) d = void 0;
      else {
        var e = b.profile_picture;
        d = {
          full_name: b.name,
          id: b.id,
          name: b.short_name,
          picture: e == null ? null : e.uri,
          profile_url: b.url,
        };
      }
      e = a.requestee;
      if (e == null) b = void 0;
      else {
        var f = e.profile_picture;
        b = {
          full_name: e.name,
          id: e.id,
          name: e.short_name,
          picture: f == null ? null : f.uri,
          profile_url: e.url,
        };
      }
      f = c("bs_js_null_undefined").fromOption(
        c("bs_js_dict").get(c("P2PPaymentRequestStatus"), a.request_status)
      );
      e = a.transfer;
      e = e == null ? [null, ""] : [I(e), e.id];
      var g = a.request_theme;
      return {
        amount: a.transaction_amount.amount,
        amountWithSymbol: a.amount.formatted,
        bubbleView: a.bubble_view,
        creationTime: a.creation_time,
        currency: a.amount.currency,
        currentStatus: f,
        groupThreadFBID: a.group_thread_fbid,
        id: a.id,
        memoText: a.memo_text,
        requestee: b,
        requester: d,
        statusDescription: { markup: a.status_description },
        themeID: g == null ? null : g.id,
        transfer: e[0],
        transferID: e[1],
        updatedTime: a.updated_time,
      };
    }
    function K(a) {
      var b = J({
        amount: a.amount,
        bubble_view: a.bubble_view,
        creation_time: a.creation_time,
        group_thread_fbid: a.group_thread_fbid,
        id: a.id,
        memo_text: a.memo_text,
        request_status: a.request_status,
        request_theme: a.request_theme,
        requestee: a.requestee,
        requester: a.requester,
        status_description: a.status_description,
        transaction_amount: a.transaction_amount,
        transfer: a.transfer,
        updated_time: a.updated_time,
      });
      a = { individualRequests: a.individual_requests.map(J) };
      return Object.assign(b, a);
    }
    function L(a, b, d) {
      var e = b.media,
        f = e == null ? null : e.animated_image,
        g = e == null ? null : e.image,
        h = {};
      b.properties.forEach(function (a) {
        var b = a.value;
        h[a.key] = b == null ? null : b.text;
      });
      var i = b.target,
        z;
      if (i == null) z = null;
      else
        switch (i.TAG) {
          case 0:
            z = G(i._0);
            break;
          case 1:
            z = H(i._0);
            break;
          case 2:
            z = I(i._0);
            break;
          case 3:
            z = K(i._0);
            break;
          case 4:
            z = D(a, i._0);
            break;
          case 5:
            z = B(i._0);
            break;
          case 6:
            z = A(i._0);
            break;
          case 8:
            z = E(i._0);
            break;
          case 9:
            z = v(i._0);
            break;
          case 10:
            z = F(a, i._0);
            break;
          case 11:
            z = s(i._0);
            break;
          case 12:
            z = t(i._0);
            break;
          case 13:
            z = u(i._0);
            break;
          case 14:
            var J = i._0,
              L = J.genie_sender;
            L =
              L == null
                ? [null, null]
                : [L.messaging_actor.id, L.messaging_actor.name];
            var N = L[0],
              O = {
                action_links: [],
                deduplication_key: null,
                description: null,
                media: null,
                messaging_attribution: null,
                messenger_call_to_actions: [],
                messenger_generic_xma_template_extra_info: null,
                properties: [],
                source: null,
                style_list: [],
                subattachments: [],
                target: null,
                title_with_entities: null,
                url: null,
                xma_layout_info: null,
              },
              P = b.media,
              Q;
            if (P == null) Q = null;
            else {
              P = P.pack;
              if (P == null) {
                P = J.story_attachment;
                Q =
                  P == null || d == null
                    ? null
                    : M(a, {
                        genie_attachment: {
                          genie_message: { story_attachment: O },
                        },
                        legacy_attachment_id: N,
                        story_attachment: {
                          action_links: d.action_links,
                          deduplication_key: d.deduplication_key,
                          description: d.description,
                          media: d.media,
                          messaging_attribution: d.messaging_attribution,
                          messenger_call_to_actions:
                            d.messenger_call_to_actions,
                          messenger_generic_xma_template_extra_info:
                            d.messenger_generic_xma_template_extra_info,
                          properties: d.properties,
                          source: d.source,
                          style_list: d.style_list,
                          subattachments: d.subattachments,
                          target: d.target,
                          title_with_entities: d.title_with_entities,
                          url: d.url,
                          xma_layout_info: d.xma_layout_info,
                        },
                      });
              } else
                Q =
                  d == null
                    ? null
                    : M(a, {
                        genie_attachment: {
                          genie_message: { story_attachment: O },
                        },
                        legacy_attachment_id: N,
                        story_attachment: O,
                      });
            }
            z = { attachment: Q, genie_id: N, genie_name: L[1] };
            break;
          case 16:
            z = m(i._0);
            break;
          case 18:
            z = r(i._0);
            break;
          case 19:
            z = n(i._0);
            break;
          case 20:
            z = o(i._0);
            break;
          case 21:
            z = C(i._0);
            break;
          case 23:
            z = l(i._0);
            break;
          case 24:
            z = k(a, i._0);
            break;
          case 36:
            z = w(i._0);
            break;
          case 37:
            z = x(i._0);
            break;
          case 38:
            z = y(i._0);
            break;
          case 39:
            z = p(i._0);
            break;
          case 40:
            z = q(i._0);
            break;
          default:
            z = i._0;
        }
      J = b.target;
      P = J == null || J.TAG !== 5 ? null : 0;
      d = b.description;
      O = b.source;
      Q = b.title_with_entities;
      return {
        action_links: j(b.action_links),
        deduplication_key: b.deduplication_key,
        description: d == null ? null : d.text,
        label: P,
        media: {
          animated_image: f == null ? null : f.uri,
          animated_image_size:
            f == null
              ? { height: null, width: null }
              : { height: f.height, width: f.width },
          duration: e == null ? null : e.playable_duration,
          image: g == null ? null : g.uri,
          image_size:
            g == null
              ? { height: null, width: null }
              : { height: g.height, width: g.width },
          playable: e == null ? null : e.is_playable,
          source: e == null ? null : e.playable_url,
        },
        messaging_attribution: b.messaging_attribution,
        messenger_ctas: b.messenger_call_to_actions.map(function (a) {
          return {
            action_open_type: c("bs_js_null_undefined").fromOption(
              c("bs_js_dict").get(
                c("MNCommerceCallToActionType"),
                a.action_open_type
              )
            ),
            action_title: a.title,
            action_url: a.action_link,
            id: a.id,
            is_disabled: a.is_disabled,
            is_high_confidence: c("bs_belt_Option").getWithDefault(
              c("bs_caml_option").nullable_to_opt(a.is_high_confidence),
              !1
            ),
            is_mutable_by_server: a.is_mutable_by_server,
            native_url: a.native_url,
            page_id: c("bs_belt_Option").getWithDefault(
              c("bs_caml_option").nullable_to_opt(a.page_id),
              ""
            ),
            webview_metadata: {
              fallback_url: a.webview_metadata.fallback_url,
              messenger_extensions: a.webview_metadata.messenger_extensions,
              webview_height_ratio: a.webview_metadata.webview_height_ratio,
              webview_share_button: a.webview_metadata.webview_share_button,
            },
          };
        }),
        messenger_generic_xma_template_extra_info:
          b.messenger_generic_xma_template_extra_info,
        properties: h,
        source: O == null ? null : O.text,
        style_list: b.style_list,
        target: z,
        title: Q == null ? null : Q.text,
        uri: b.url,
        xma_layout_info: b.xma_layout_info,
      };
    }
    function M(a, b) {
      var c = b.genie_attachment,
        d;
      if (c == null) d = null;
      else {
        c = c.genie_message;
        if (c == null) d = null;
        else {
          c = c.story_attachment;
          d =
            c == null
              ? null
              : {
                  action_links: c.action_links,
                  deduplication_key: c.deduplication_key,
                  description: c.description,
                  media: c.media,
                  messaging_attribution: c.messaging_attribution,
                  messenger_call_to_actions: c.messenger_call_to_actions,
                  messenger_generic_xma_template_extra_info:
                    c.messenger_generic_xma_template_extra_info,
                  properties: c.properties,
                  source: c.source,
                  style_list: c.style_list,
                  subattachments: c.subattachments,
                  target: c.target,
                  title_with_entities: c.title_with_entities,
                  url: c.url,
                  xma_layout_info: c.xma_layout_info,
                };
        }
      }
      c = b.story_attachment;
      var e;
      if (c == null) e = null;
      else {
        var f = {
          action_links: [],
          deduplication_key: null,
          description: null,
          media: null,
          messaging_attribution: null,
          messenger_call_to_actions: [],
          messenger_generic_xma_template_extra_info: null,
          properties: [],
          source: null,
          style_list: [],
          subattachments: [],
          target: null,
          title_with_entities: null,
          url: null,
          xma_layout_info: null,
        };
        b = {
          share_id: b.legacy_attachment_id,
          subattachments: c.subattachments.map(function (b) {
            return L(a, b, f);
          }),
        };
        var g = {
          action_links: c.action_links,
          deduplication_key: c.deduplication_key,
          description: c.description,
          media: c.media,
          messaging_attribution: c.messaging_attribution,
          messenger_call_to_actions: c.messenger_call_to_actions,
          messenger_generic_xma_template_extra_info:
            c.messenger_generic_xma_template_extra_info,
          properties: c.properties,
          source: c.source,
          style_list: c.style_list,
          target: c.target,
          title_with_entities: c.title_with_entities,
          url: c.url,
          xma_layout_info: c.xma_layout_info,
        };
        c =
          d == null
            ? {
                action_links: c.action_links,
                deduplication_key: c.deduplication_key,
                description: c.description,
                media: c.media,
                messaging_attribution: c.messaging_attribution,
                messenger_call_to_actions: c.messenger_call_to_actions,
                messenger_generic_xma_template_extra_info:
                  c.messenger_generic_xma_template_extra_info,
                properties: c.properties,
                source: c.source,
                style_list: c.style_list,
                subattachments: c.subattachments,
                target: c.target,
                title_with_entities: c.title_with_entities,
                url: c.url,
                xma_layout_info: c.xma_layout_info,
              }
            : {
                action_links: d.action_links,
                deduplication_key: d.deduplication_key,
                description: d.description,
                media: d.media,
                messaging_attribution: d.messaging_attribution,
                messenger_call_to_actions: d.messenger_call_to_actions,
                messenger_generic_xma_template_extra_info:
                  d.messenger_generic_xma_template_extra_info,
                properties: d.properties,
                source: d.source,
                style_list: d.style_list,
                subattachments: d.subattachments,
                target: d.target,
                title_with_entities: d.title_with_entities,
                url: d.url,
                xma_layout_info: d.xma_layout_info,
              };
        e = Object.assign(b, L(a, g, c));
      }
      return {
        app_attribution: null,
        attach_type: "share",
        icon_type: null,
        large_preview_height: null,
        large_preview_url: null,
        large_preview_width: null,
        metadata: null,
        name: null,
        preview_height: null,
        preview_url: null,
        preview_width: null,
        rel: null,
        share: e,
        thumbnail_url: null,
        url: null,
      };
    }
    g._getCallToActions = i;
    g._getActionLinks = j;
    g._getColor = a;
    g._getLogo = d;
    g._getPageTarget = k;
    g._getGroupCommerceProductItemTarget = l;
    g._getExternalSongTarget = m;
    g._getAgentSuggestionItemTarget = n;
    g._getFundraiserTarget = o;
    g._getWECFileTarget = p;
    g._getWECMessageVideoTarget = q;
    g._getRetailItemTarget = r;
    g._getPagesPlatformBookingMessageTarget = s;
    g._getServicesAppointmentAvailabilityTarget = t;
    g._getServicesGenericAdminTextTarget = u;
    g._getMessageLiveLocationTarget = v;
    g._getWECMessageTarget = w;
    g._getWECMessageImageTarget = x;
    g._getWECMessageAudioTarget = y;
    g._getBusinessRetailItem = z;
    g._getMessengerBusinessMessageTarget = A;
    g._getMessengerRetailPromotionTarget = B;
    g._getMessengerRetailReceiptTarget = C;
    g._getPagesPlatformAttachmentTarget = D;
    g._getPagesPlatformLeadGenInfoTarget = E;
    g._getQuickInviteTarget = F;
    g._getCrisisListingTarget = G;
    g._getMoneyTransferTarget = H;
    g._getP2PTransferTarget = I;
    g._getP2PTransferRequestTarget = J;
    g._getP2PTransferRequestWithIndividualRequests = K;
    g.transformStoryAttachment = L;
    g.getExtensibleAttachmentPayload = M;
  },
  98
);
__d(
  "MessengerAttachmentTransformer.bs",
  [
    "fbt",
    "MessageSharedMediaIDStore.bs",
    "MessengerStoryAttachmentTransformer.bs",
    "bs_caml",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function i(a) {
      if (a.is_malicious) {
        var b = h._("This attachment has been marked as malicious.");
        return {
          app_attribution: null,
          attach_type: "error",
          error_msg: b,
          icon_type: "attach:unknown",
          message_file_fbid: null,
          metadata: null,
          mime_type: null,
          name: null,
          preview: null,
          preview_height: null,
          preview_url: null,
          preview_width: null,
          rel: null,
          share: null,
          thumbnail_url: null,
          url: null,
          url_shimhash: null,
          url_skipshim: null,
        };
      }
      b = a.attribution_app;
      var c;
      if (b == null) c = null;
      else {
        var d = b.square_logo;
        c = {
          icon_url: d == null ? null : d.uri,
          id: b.id,
          metadata: a.attribution_metadata,
          name: b.name,
        };
      }
      d = a.url;
      return {
        app_attribution: c,
        attach_type: "file",
        error_msg: void 0,
        icon_type: a.content_type,
        message_file_fbid: a.message_file_fbid,
        metadata: null,
        mime_type: a.mimetype,
        name: a.filename,
        preview: a.preview,
        preview_height: null,
        preview_url: a.preview_url,
        preview_width: null,
        rel: "ignore",
        share: null,
        thumbnail_url: null,
        url: d == null ? null : d,
        url_shimhash: a.url_shimhash,
        url_skipshim: a.url_skipshim,
      };
    }
    function j(a, b, c) {
      var d = a.chat_image;
      d = d == null ? [null, null, null] : [d.uri, d.width, d.height];
      var e = d[0],
        f = a.chat_image;
      f = f == null ? null : { height: f.height, width: f.width };
      var g = a.large_image;
      g =
        g == null
          ? [null, null]
          : [g.uri, { height: g.height, width: g.width }];
      var h = a.inbox_image;
      h =
        h == null
          ? [null, null]
          : [h.uri, { height: h.height, width: h.width }];
      var i = a.attribution_app,
        j;
      if (i == null) j = null;
      else {
        var k = i.square_logo;
        j = {
          icon_url: k == null ? null : k.uri,
          id: i.id,
          metadata: a.attribution_metadata,
          name: i.name,
        };
      }
      return {
        app_attribution: j,
        attach_type: "video",
        icon_type: "attach:video",
        large_preview_height: null,
        large_preview_url: null,
        large_preview_width: null,
        metadata: {
          chat_preview: e,
          chat_size: f,
          dimensions: {
            height: a.original_dimensions.y,
            width: a.original_dimensions.x,
          },
          duration: a.playable_duration_in_ms,
          fbid: a.legacy_attachment_id,
          inbox_preview: h[0],
          inbox_size: h[1],
          large_preview: g[0],
          large_size: g[1],
          pageid: c ? b : void 0,
          render_as_sticker: a.video_type === "SPEAKING_STICKER",
        },
        name: a.filename,
        preview_height: d[2],
        preview_url: e,
        preview_width: d[1],
        rel: "async",
        share: null,
        thumbnail_url: e,
        url: a.playable_url,
      };
    }
    function k(a) {
      var b = a.attribution_app,
        c;
      if (b == null) c = null;
      else {
        var d = b.square_logo;
        c = {
          icon_url: d == null ? null : d.uri,
          id: b.id,
          metadata: a.attribution_metadata,
          name: b.name,
        };
      }
      return {
        app_attribution: c,
        attach_type: "file",
        icon_type: "attach:music",
        large_preview_height: null,
        large_preview_url: null,
        large_preview_width: null,
        metadata: {
          duration: a.playable_duration_in_ms,
          isVoicemail: a.is_voicemail ? "1" : "0",
          type:
            a.audio_type === "VOICE_MESSAGE"
              ? "fb_voice_message"
              : a.audio_type === "VOICE_MESSAGE_WITH_TRANSCRIPT"
              ? "fb_voice_message_with_transcript"
              : "file_attachment",
        },
        name: a.filename,
        preview_height: null,
        preview_url: null,
        preview_width: null,
        rel: "ignore",
        share: null,
        thumbnail_url: null,
        url: a.playable_url,
        url_shimhash: a.url_shimhash,
        url_skipshim: a.url_skipshim,
      };
    }
    function l(a, b, c) {
      var d = a.preview_image;
      d = d == null ? [null, null, null] : [d.uri, d.width, d.height];
      var e = a.animated_image;
      e = e == null ? null : e.uri;
      var f = a.attribution_app,
        g;
      if (f == null) g = null;
      else {
        var h = f.square_logo;
        g = {
          icon_url: h == null ? null : h.uri,
          id: f.id,
          metadata: a.attribution_metadata,
          name: f.name,
        };
      }
      return {
        app_attribution: g,
        attach_type: "animated_image",
        icon_type: "attach:image",
        large_preview_height: null,
        large_preview_url: null,
        large_preview_width: null,
        metadata: {
          dimensions:
            String(a.original_dimensions.x) +
            ("," + String(a.original_dimensions.y)),
          fbid: a.legacy_attachment_id,
          image: e,
          pageid: c ? b : void 0,
        },
        name: a.filename,
        preview_height: d[2],
        preview_url: d[0],
        preview_width: d[1],
        rel: "async",
        share: null,
        thumbnail_url: e,
        title: a.title,
        url: e,
      };
    }
    function m(a) {
      var b =
          a.original_extension === "gif"
            ? "animated_image"
            : a.render_as_sticker
            ? "third_party_sticker"
            : "photo",
        c = a.preview;
      c = c == null ? [null, null, null] : [c.uri, c.width, c.height];
      if (b === "photo") {
        var d = a.large_preview;
        d = d == null ? [null, null, null] : [d.uri, d.width, d.height];
      } else d = [null, null, null];
      var e = a.attribution_app,
        f;
      if (e == null) f = null;
      else {
        var g = e.square_logo;
        f = {
          icon_url: g == null ? null : g.uri,
          id: e.id,
          metadata: a.attribution_metadata,
          name: e.name,
        };
      }
      g = a.thumbnail;
      return {
        app_attribution: f,
        attach_type: b,
        blurred_image_uri: a.blurred_image_uri,
        icon_type: "attach:image",
        large_preview_height: d[2],
        large_preview_url: d[0],
        large_preview_width: d[1],
        metadata: {
          dimensions:
            String(a.original_dimensions.x) +
            ("," + String(a.original_dimensions.y)),
          fbid: a.legacy_attachment_id,
        },
        name: a.filename,
        photo_encodings: a.photo_encodings,
        preview_height: c[2],
        preview_url: c[0],
        preview_width: c[1],
        rel: "async",
        share: null,
        thumbnail_url: g == null ? null : g.uri,
        url: null,
      };
    }
    function n(a, b) {
      var d = a,
        e = b;
      if (a >= b) {
        a = c("bs_caml").caml_float_min(120, d / 2);
        b = a / (d / 2);
        return [a | 0, ((e / 2) * b) | 0];
      }
      a = c("bs_caml").caml_float_min(120, e / 2);
      b = a / (e / 2);
      return [((d / 2) * b) | 0, a | 0];
    }
    function o(a) {
      var b = n(a.width, a.height),
        c = a.pack,
        d = a.padded_sprite_image,
        e = a.padded_sprite_image_2x,
        f = a.sprite_image,
        g = a.sprite_image_2x;
      return {
        app_attribution: null,
        attach_type: "sticker",
        icon_type: "attach:unknown",
        large_preview_height: null,
        large_preview_url: null,
        large_preview_width: null,
        metadata: {
          accessibilityLabel: a.label,
          frameCount: a.frame_count,
          frameRate: a.frame_rate,
          framesPerCol: a.frame_count > 1 ? a.frames_per_column : 1,
          framesPerRow: a.frame_count > 1 ? a.frames_per_row : 1,
          height: b[1],
          packID: c == null ? null : c.id,
          paddedSpriteURI: d == null ? null : d.uri,
          paddedSpriteURI2x: e == null ? null : e.uri,
          share: null,
          spriteURI: f == null ? null : f.uri,
          spriteURI2x: g == null ? null : g.uri,
          stickerID: a.id,
          thumbnail_url: null,
          width: b[0],
        },
        name: null,
        preview_height: null,
        preview_url: null,
        preview_width: null,
        rel: null,
        url: a.url,
      };
    }
    function p(a, b) {
      if (!(b == null))
        return d("MessageSharedMediaIDStore.bs").setMessageIDForAttachmentID(
          a,
          b
        );
    }
    function a(a, b, c, e) {
      var f = [],
        g = {
          frame_count: 0,
          frame_rate: 0,
          frames_per_column: 0,
          frames_per_row: 0,
          height: 0,
          id: "",
          label: "",
          pack: null,
          padded_sprite_image: null,
          padded_sprite_image_2x: null,
          sprite_image: null,
          sprite_image_2x: null,
          url: null,
          width: 0,
        },
        h = b.extensible_attachment,
        n;
      if (h == null) n = g;
      else {
        h = h.story_attachment;
        if (h == null) n = g;
        else {
          h = h.media;
          if (h == null) n = g;
          else {
            var q = h.__typename;
            n =
              q === "Sticker"
                ? {
                    frame_count: h.frame_count,
                    frame_rate: h.frame_rate,
                    frames_per_column: h.frames_per_column,
                    frames_per_row: h.frames_per_row,
                    height: h.height,
                    id: h.id,
                    label: h.label,
                    pack: h.pack,
                    padded_sprite_image: h.padded_sprite_image,
                    padded_sprite_image_2x: h.padded_sprite_image_2x,
                    sprite_image: h.sprite_image,
                    sprite_image_2x: h.sprite_image_2x,
                    url: h.url,
                    width: h.width,
                  }
                : g;
          }
        }
      }
      q = n.id;
      !(q == null) && q !== "" && f.push(o(n));
      h = b.extensible_attachment;
      h == null ||
        f.push(
          d(
            "MessengerStoryAttachmentTransformer.bs"
          ).getExtensibleAttachmentPayload(a, h)
        );
      g = b.sticker;
      g == null || f.push(o(g));
      q = b.blob_attachments;
      q == null ||
        q.forEach(function (b) {
          switch (b.TAG) {
            case 0:
              var d = b._0;
              p(d.legacy_attachment_id, c);
              f.push(m(d));
              return;
            case 1:
              d = b._0;
              p(d.legacy_attachment_id, c);
              f.push(l(d, a, e));
              return;
            case 2:
              f.push(k(b._0));
              return;
            case 3:
              d = b._0;
              p(d.legacy_attachment_id, c);
              f.push(j(d, a, e));
              return;
            case 4:
              f.push(i(b._0));
              return;
          }
        });
      return f;
    }
    g._getFilePayload = i;
    g._getVideoPayload = j;
    g._getAudioPayload = k;
    g._getAnimatedImagePayload = l;
    g._getImagePayload = m;
    g._getStickerDimensions = n;
    g.getStickerPayload = o;
    g._storeAttachmentMapping = p;
    g.transformAttachment = a;
  },
  98
);
__d(
  "MessengerGroupAdminModelStatus.bs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (a == null) return null;
      a = a.toUpperCase();
      switch (a) {
        case "NOT_SUPPORTED":
          return "not_supported";
        case "OPTIONAL":
          return "optional";
        case "REQUIRED":
          return "required";
        default:
          return null;
      }
    }
    f.fromNullableString = a;
  },
  66
);
__d(
  "MessengerGroupsSyncStatus.bs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (a == null) return null;
      switch (a) {
        case "OPT_IN":
          return "OPT_IN";
        case "OPT_OUT":
          return "OPT_OUT";
        case "PENDING_OPT_IN":
          return "PENDING_OPT_IN";
        case "PENDING_OPT_OUT":
          return "PENDING_OPT_OUT";
        case "UNSET":
          return "UNSET";
        case "UNSUPPORTED":
          return "UNSUPPORTED";
        default:
          return null;
      }
    }
    f.fromNullableString = a;
  },
  66
);
__d(
  "InstantGameUpdateXMATUpdateType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      UNKNOWN: "unknown",
      GAME_SCORE: "game_score",
      CUSTOM_MESSAGE: "custom_message",
    });
    f["default"] = a;
  },
  66
);
__d(
  "MNCommerceMessageType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      TEXT: "text",
      IMAGE: "image",
      VIDEO: "video",
      AUDIO: "audio",
      FILE: "file",
      ROBOT_TEXT: "robot_text",
      LOCATION: "location",
      FORCED_FETCH_MESSAGE: "forced_fetch_message",
      SENDER_ACTION: "sender_action",
      SHOPS_PRODUCT: "shops_product",
      SHOPS_PRODUCT_HSCROLL: "shops_product_hscroll",
      RETAIL_PRODUCT_SUBSCRIPTION: "retail_product_subscription",
      RETAIL_PROMOTION: "retail_promotion",
      RETAIL_CANCELLATION: "retail_cancellation",
      RETAIL_SHIPMENT: "retail_shipment",
      SHIPMENT_TRACKING_EVENT: "shipment_tracking_event",
      AIRLINE_CHECKIN_REMINDER: "airline_checkin_reminder",
      AIRLINE_BOARDING_PASS: "airline_boarding_pass",
      AIRLINE_CHECKIN: "airline_checkin",
      AIRLINE_BOARDINGPASS: "airline_boardingpass",
      AIRLINE_UPDATE: "airline_update",
      AIRLINE_ITINERARY: "airline_itinerary",
      CONTENT_SUBSCRIPTION: "content_subscription",
      AD_ADMIN_TEXT: "ad_admin_text",
      AD_TEXT: "ad_text",
      AD_BUBBLE: "ad_bubble",
      NON_AD: "non_ad",
      UNKNOWN: "unknown",
      OTHER: "other",
      TEMPLATE: "template",
      OPEN_GRAPH: "open_graph",
      GENERIC: "generic",
      LIST: "list",
      COMPACT_LIST: "compact_list",
      BUTTON: "button",
      RECEIPT: "receipt",
      GENERIC_LEGACY: "generic_legacy",
      ICE_BREAKER: "ice_breaker",
      FALLBACK: "fallback",
      ONE_TIME_NOTIF_REQ: "one_time_notif_req",
      NOTIFICATION_MESSAGES: "notification_messages",
      COUPON: "coupon",
      CUSTOMER_FEEDBACK: "customer_feedback",
      RIDE_INTENT: "ride_intent",
      RIDE_SIGNUP: "ride_signup",
      RIDE_WELCOME: "ride_welcome",
      RIDE_ORDER_CONFIRMATION: "ride_order_confirmation",
      RIDE_REQUESTED: "ride_requested",
      RIDE_DRIVER_ON_THE_WAY: "ride_driver_on_the_way",
      RIDE_NO_DRIVER: "ride_no_driver",
      RIDE_DRIVER_ARRIVING: "ride_driver_arriving",
      RIDE_DRIVER_CANCELED: "ride_driver_canceled",
      RIDE_RIDER_CANCELED: "ride_rider_canceled",
      RIDE_COMPLETE: "ride_complete",
      RIDE_ADMIN_MESSAGE: "ride_admin_message",
      RIDE_RECEIPT: "ride_receipt",
      RIDE_REENGAGEMENT_FIRST_RIDE: "ride_reengagement_first_ride",
      GET_RIDE: "give_get_ride",
      GIVE_RIDE: "send_give_get_ride",
      REFERER_PROMO: "referer_promo",
      INSTANT_GAMES_SHARE: "instant_games_share",
      INSTANT_GAMES_SCORE: "instant_games_score",
      INSTANT_GAMES_LIVE_STREAM: "instant_games_live_stream",
      INSTANT_GAMES_CUSTOM_UPDATE: "instant_games_custom_update",
      INSTANT_GAMES_CUSTOM_UPDATE_MEDIA: "instant_games_custom_update_media",
      INSTANT_GAMES_TOURNAMENT_UPDATE: "instant_games_tournament_update",
      GAMING_SERVICES_GAME_INVITE: "GAMING_SERVICES_GAME_INVITE",
      LINK: "link_admin_message",
      UNLINK: "unlink_admin_message",
      BLOCK_ALL: "block_all_admin_message",
      UNBLOCK_ALL: "unblock_all_admin_message",
      BLOCK_PROMOTION: "block_promotion_admin_message",
      UNBLOCK_PROMOTION: "unblock_promotion_admin_message",
      INITIAL_PROMOTION: "initial_promotion_admin_message",
      WEAK_CONSENT_ADMIN_MESSAGE: "weak_consent_admin_message",
      MESSENGER_TEAM_BOT_MESSAGE: "messenger_team_bot",
      MESSENGER_BOT_BASE_GENERIC: "messenger_bot_base_generic",
      COMMERCE_COMPACT_LIST: "commerce_compact_list",
      FEEDBACK: "feedback",
      FORM_PROGRESS: "form_progress",
      MEDIA: "media",
      PLACE_CARD: "place_card",
      MESSENGER_CALL_PROMPT: "messenger_call_prompt",
      MESSENGER_CALL_USER_PROMPT_SENT: "messenger_call_user_prompt_sent",
    });
    f["default"] = a;
  },
  66
);
__d(
  "MessagingGenericAdminTextType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ALOHA_AUTOCONNECT_INVITED: "aloha_autoconnect_invited",
      ALOHA_CONTACT_ADDED: "aloha_contact_added",
      ALOHA_CONTACT_ADDED_TO_ALOHA_PROXY_USER:
        "aloha_contact_added_to_aloha_proxy_user",
      ALOHA_CONTACT_REMOVED: "aloha_contact_removed",
      ALOHA_INVITE_OWNER_ACCEPT: "aloha_invite_owner_accept",
      ALOHA_INVITE_OWNER_DECLINE: "aloha_invite_owner_decline",
      ALOHA_MEDIA_ADDED: "aloha_media_added",
      ALOHA_MEDIA_SENT: "aloha_media_sent",
      ALOHA_VISUAL_MEDIA_SENT: "aloha_visual_media_sent",
      ALOHA_OWNER_INVITED: "aloha_owner_invited",
      ALOHA_PROXY_USER_NAME_SET: "aloha_proxy_user_name_set",
      ALOHA_PROXY_USER_PROFILE_PHOTO_SET: "aloha_proxy_user_profile_photo_set",
      ALOHA_WIFI_CREDENTIALS_SET: "aloha_wifi_credentials_set",
      ALOHA_USER_JOINED_CALL_ON_ALOHA: "aloha_user_joined_call_on_aloha",
      ALOHA_CALL_ENDED_ON_ALOHA: "aloha_call_ended_on_aloha",
      ALOHA_CALL_INVITE: "aloha_call_invite",
      BCMP_RESPOND_TO_PROJECT_BRIEF: "bcmp_respond_to_project_brief",
      BCMP_BRAND_INITIATED_MESSAGE: "bcmp_brand_initiated_message",
      BCMP_CAMPAIGN_INVITE: "bcmp_campaign_invite",
      MADE_POLL_VOTE: "made_poll_vote",
      GROUP_POLL: "group_poll",
      GENERIC_NEW_CONNECTION: "generic_new_connection",
      CONFIRM_FRIEND_REQUEST: "confirm_friend_request",
      THREAD_CUSTOMIZATION_UPSELL: "thread_customization_upsell",
      PHONE_CONTACT_UPLOAD: "phone_contact_upload",
      RELATIONSHIP_CREATED: "relationship_created",
      ACCEPT_PENDING_THREAD: "accept_pending_thread",
      RAMP_UP_WELCOME_MESSAGE: "ramp_up_welcome_message",
      CHANGE_THREAD_THEME: "change_thread_theme",
      CHANGE_THREAD_THEME_TO_LOCATION_THEME:
        "change_thread_theme_to_location_theme",
      CHANGE_THREAD_ICON: "change_thread_icon",
      CHANGE_THREAD_QUICK_REACTION: "change_thread_quick_reaction",
      GROUP_THREAD_CREATED: "group_thread_created",
      THREAD_EPHEMERAL_SEND_MODE: "thread_ephemeral_send_mode",
      INVITE_ACCEPTED: "invite_accepted",
      MESSENGER_INVITE_SENT: "messenger_invite_sent",
      TURN_ON_PUSH: "turn_on_push",
      JOURNEY_PROMPT_COLOR: "journey_prompt_color",
      JOURNEY_PROMPT_LIKE: "journey_prompt_like",
      JOURNEY_PROMPT_NICKNAME: "journey_prompt_nickname",
      JOURNEY_PROMPT_SETUP: "journey_prompt_setup",
      CHANGE_THREAD_NICKNAME: "change_thread_nickname",
      NOTIFY_GROUP_MAYORSHIP: "notify_group_mayorship",
      PROMPT_GROUP_MAYORSHIP_CUSTOMIZATION:
        "prompt_group_mayorship_customization",
      MESSAGE_COUNT_MILESTONE_MESSAGE: "message_count_milestone_message",
      BOT_THREAD_SUBSCRIPTION: "bot_thread_subscription",
      RTC_CALL_LOG: "rtc_call_log",
      RTC_PAGE_CALLBACK: "rtc_page_callback",
      RTC_INSTANT_VIDEO_LIFECYCLE: "rtc_instant_video_lifecycle",
      JOURNEY_PROMPT_BOT: "journey_prompt_bot",
      RIDE_ORDERED_MESSAGE: "ride_ordered_message",
      DESTINATION_ETA_MESSAGE: "destination_eta_message",
      RIDE_ARRIVED_MESSAGE: "ride_arrived_message",
      JOURNEY_PROMPT_NEW_SETUP: "journey_prompt_new_setup",
      LIGHTWEIGHT_EVENT_CREATE: "lightweight_event_create",
      LIGHTWEIGHT_EVENT_DELETE: "lightweight_event_delete",
      LIGHTWEIGHT_EVENT_NOTIFY: "lightweight_event_notify",
      LIGHTWEIGHT_EVENT_NOTIFY_BEFORE_EVENT:
        "lightweight_event_notify_before_event",
      LIGHTWEIGHT_EVENT_RSVP: "lightweight_event_rsvp",
      LIGHTWEIGHT_EVENT_UPDATE: "lightweight_event_update",
      LIGHTWEIGHT_EVENT_UPDATE_LOCATION: "lightweight_event_update_location",
      LIGHTWEIGHT_EVENT_UPDATE_TIME: "lightweight_event_update_time",
      LIGHTWEIGHT_EVENT_UPDATE_TITLE: "lightweight_event_update_title",
      SAFETY_LOCATION_REQUEST_SENT: "safety_location_request_sent",
      SAFETY_LOCATION_REQUEST_RESPONDED: "safety_location_request_responded",
      SAFETY_LOCATION_REQUEST_DENIED: "safety_location_request_denied",
      AD_MANAGE_MESSAGE: "ad_manage_message",
      ADMIN_TEXT_WITH_LINK: "admin_text_with_link",
      ADMIN_TEXT_WITH_RPC: "admin_text_with_rpc",
      AD_REPLY_MESSAGE: "ad_reply_message",
      TAGGED_PHOTO: "tagged_photo",
      GAME_SCORE: "game_score",
      INSTANT_GAME_UPDATE: "instant_game_update",
      INSTANT_GAME_BOT_INTRO: "instant_game_bot_intro",
      INSTANT_GAME_BOT_FEEDBACK: "instant_game_bot_feedback",
      INSTANT_GAME_BOT_MESSAGE_SUBSCRIPTION_MANAGEMENT:
        "instant_game_bot_message_subscription_management",
      INSTANT_GAME_WORLD_CUP_INTRO: "intant_games_world_cup_intro",
      INSTANT_GAME_CUSTOM_UPDATE_NUX_ADMIN_MESSAGE:
        "instant_game_custom_update_nux_admin_message",
      INSTANT_GAME_CUSTOM_UPDATE_MUTE_MANAGEMENT:
        "instant_game_custom_update_mute_management",
      INSTANT_GAME_OFFLINE_MATCH_INTRO: "instant_game_offline_match_intro",
      INSTANT_GAME_TOURNAMENT_REMINDER: "instant_game_tournament_reminder",
      MEDIA_SUBSCRIPTION_MANAGE: "media_subscription_manage",
      M_AI_SURVEY: "m_ai_survey",
      PHONE_NUMBER_LOOKUP_NOTICE: "phone_number_lookup_notice",
      MARK_AS_SHIPPED_UPDATE: "mark_as_shipped_update",
      MESSENGER_PRECHECKED_PLUGIN: "messenger_prechecked_plugin",
      MESSENGER_THREAD_RESURRECTION_NOTICE:
        "messenger_thread_resurrection_notice",
      MESSENGER_ENTRY_BY_MDOTME_LINK_WITH_REF:
        "messenger_entry_by_mdotme_link_with_ref",
      ADD_CONTACT: "add_contact",
      PRODUCT_INVOICE_RECEIPT_REJECTED: "product_invoice_receipt_rejected",
      PRODUCT_INVOICE_PAID: "product_invoice_paid",
      PRODUCT_INVOICE_VOIDED: "product_invoice_voided",
      PRODUCT_INVOICE_SHIPPED: "product_invoice_shipped",
      PRODUCT_INVOICE_PAYMENT_EXPIRED: "product_invoice_payment_expired",
      PRODUCT_INVOICE_RECEIPT_UPLOADED: "product_invoice_receipt_uploaded",
      PRODUCT_INVOICE_PAYMENT_PROCESSING: "product_invoice_payment_processing",
      PRODUCT_INVOICE_PAYMENT_FAILED: "product_invoice_payment_failed",
      PRODUCT_INVOICE_SHIPPING_UPDATE: "product_invoice_shipping_update",
      PRODUCT_INVOICE_STATUS_UPDATE: "product_invoice_status_update",
      PRODUCT_INVOICE_DUPLICATE_PAYMENT_REFUND_UPDATE:
        "product_invoice_duplicate_payment_refund_update",
      SELLER_NOT_ONBOARDED_FOR_PAYMENTS: "seller_not_onboarded_for_payments",
      CHANGE_JOINABLE_SETTING: "change_joinable_setting",
      CHANGE_THREAD_ADMINS: "change_thread_admins",
      CHANGE_THREAD_APPROVAL_MODE: "change_thread_approval_mode",
      CAPY_SESSION_BEGIN: "capy_session_begin",
      CAPY_SESSION_BOT_BEGIN: "capy_session_bot_begin",
      CAPY_SESSION_END: "capy_session_end",
      CAPY_AGENT_JOIN: "capy_agent_join",
      CAPY_AGENT_DUMPED: "capy_agent_dumped",
      CAPY_SESSION_UNAVAILABLE: "capy_session_unavailable",
      CAPY_SESSION_WAIT_TIME: "capy_session_wait_time",
      CAPY_TRANSCRIPT_NOTIF: "capy_transcript_notif",
      GROUP_SMS_PARTICIPANT_JOINED: "group_sms_participant_joined",
      GROUP_SMS_PARTICIPANT_CAPPED: "group_sms_participant_capped",
      SMS_PHONE_NUMBER_CHECK: "sms_phone_number_check",
      MESSENGER_BOT_REVIEW_SENT: "messenger_bot_review_sent",
      MESSENGER_CODE_SCAN: "messenger_code_scan",
      MESSENGER_LIVECHAT_PLUGIN_OPEN: "messenger_livechat_plugin_open",
      MESSENGER_LIVECHAT_PLUGIN_GUEST_END_CHAT:
        "messenger_livechat_plugin_guest_end_chat",
      MESSENGER_LIVECHAT_PLUGIN_GUEST_START_CHAT:
        "messenger_livechat_plugin_guest_start_chat",
      MESSENGER_LIVECHAT_PLUGIN_URL_UPDATE:
        "messenger_livechat_plugin_url_update",
      MESSENGER_LIVECHAT_PLUGIN_FB_USER_START_CHAT:
        "messenger_livechat_plugin_fb_user_start_chat",
      MESSENGER_LIVECHAT_PLUGIN_GUEST_USER_START_CHAT:
        "messanger_livechat_plugin_guest_user_start_chat",
      MN_ACCOUNT_LINKING_TEXT: "mn_account_linking_text",
      MN_ACCOUNT_UNLINKING_TEXT: "mn_account_unlinking_text",
      MN_ACCOUNT_FORCED_UNLINKING_TEXT: "mn_account_forced_unlinking_text",
      MN_REF_SEND_TEXT: "mn_ref_send_text",
      ADS_WELCOME_MSG: "ads_welcome_msg",
      THREAD_JOINABLE_PROMOTION_TEXT: "thread_joinable_promotion_text",
      PAGES_PLATFORM_REQUEST_TEXT: "pages_platform_request_text",
      MESSENGER_NEW_USER_GET_STARTED: "messenger_new_user_get_started",
      SMS_PHONE_NUMBER_TOGGLE: "sms_phone_number_toggle",
      PAGES_PLATFORM_CREATE_APPOINTMENT: "Pages_Platform_create_appointment",
      INTERNAL_CAREER_JOBSY_REACHOUT_CONNECTED:
        "internal_career_jobsy_reachout_connected",
      JOINABLE_GROUP_THREAD_CREATED: "joinable_group_thread_created",
      JOINABLE_ROOM_CREATED_WITH_CO_CREATORS:
        "joinable_room_created_with_co_creators",
      PAGES_PLATFORM_ACCEPT_APPOINTMENT: "pages_platform_accept_appointment",
      PAGES_PLATFORM_REFERRAL_CONFIRMED_APPOINTMENT:
        "pages_platform_referral_confirmed_appointment",
      PAGES_PLATFORM_DECLINE_APPOINTMENT: "pages_platform_decline_appointment",
      PAGES_PLATFORM_USER_CANCEL: "pages_platform_user_cancel",
      PAGES_PLATFORM_ADMIN_CANCEL: "pages_platform_admin_cancel",
      MESSENGER_OMNIM_CREATE_FLOW: "messenger_omnim_create_flow",
      MESSENGER_OMNIM_UPDATE_FLOW: "messenger_omnim_update_flow",
      MESSENGER_OMNIM_UPDATE_FLOW_STATE: "messenger_omnim_update_flow_state",
      MESSENGER_GROUP_DESCRITPION_UPDATE: "messenger_group_description_update",
      MESSENGER_GROUP_DESCRIPTION_UPDATE_V2:
        "messenger_group_description_update_v2",
      MESSENGER_EXTENSION_ADD_CART: "messenger_extension_add_cart",
      MESSENGER_EXTENSION_ADD_FAVORITE: "messenger_extension_add_favorite",
      MESSENGER_AD_CONTEXT: "messenger_ad_context",
      PAGES_PLATFORM_APPOINTMENT_REMINDER:
        "pages_platform_appointment_reminder",
      PAGES_PLATFORM_ADMIN_DECLINE: "pages_platform_admin_decline",
      POKE_RECEIVED: "poke_received",
      MESSENGER_STATION_SUBSCRIPTION: "messenger_station_subscription",
      MESSENGER_USER_ALSO_ON_MESSENGER: "messenger_user_also_on_messenger",
      MESSENGER_INBOX2_BIRTHDAY_BUMP: "messenger_inbox2_birthday_bump",
      MESSENGER_RESPOND_REMINDER_CONFIRMATION:
        "messenger_respond_reminder_confirmation",
      MESSENGER_RESPOND_REMINDER: "messenger_respond_reminder",
      MESSENGER_RESPOND_REMINDER_USER_CANCEL:
        "messenger_respond_reminder_user_cancel",
      MESSENGER_RESPOND_REMINDER_CANCEL_SUGGESTION:
        "messenger_respond_reminder_cancel_suggestion",
      STARTED_SHARING_VIDEO: "started_sharing_video",
      LIVE_VIDEO_CHAT: "live_video_chat",
      PARTICIPANT_JOINED_GROUP_CALL: "participant_joined_group_call",
      MESSENGER_ONLY_PHONE_JOINED_WITH_NEW_ACCOUNT:
        "messenger_only_phone_joined_with_new_account",
      PAGES_COMMERCE_PAYMENT_ENABLED: "pages_commerce_payment_enabled",
      GROUP_PAYMENT_REQUEST: "group_payment_request",
      P2P_CALL_ESCALATED_TO_GROUP_CALL: "p2p_call_escalated_to_group_call",
      INVITED_TO_ESCALATED_P2P_CALL: "invited_to_escalated_p2p_call",
      EVENT_UPCOMING: "event_upcoming",
      PAGES_VISITOR_POST_SEND_MESSAGE_UPSELL:
        "pages_visitor_post_send_message_upsell",
      PAGES_LOW_MESSAGE_RESPONSE_RATE: "pages_low_message_response_rate",
      PAGES_START_CALL: "pages_start_call",
      PARTIES_INVITE: "parties_invite",
      WORK_INVITE_CLAIMED: "work_invite_claimed",
      WORK_BOT_INSTALLED: "work_bot_installed",
      WORK_NEW_MULTI_COMPANY_CHAT: "work_new_multi_company_chat",
      PARTIAL_AUTOMATED_FEEDBACK: "partial_automated_feedback",
      P2P_PAYMENT_REQUEST_REMINDER: "p2p_payment_request_reminder",
      PHOTO_TAG_BUMP: "photo_tag_bump",
      MESSENGER_CALL_UPGRADE_LEGACY_CLIENT:
        "messenger_call_upgrade_legacy_client",
      DIRECTED_WALL_POST: "directed_wall_post",
      MESSENGER_CALL_LOG: "messenger_call_log",
      P2P_PAYMENT_MONEY_RAIN_GAME_ENTRY_POINT:
        "p2p_payment_money_rain_game_entry_point",
      MESSENGER_MONTAGE_MENTIONS: "messenger_montage_mentions",
      PAGES_MESSAGING_BLOCK_WORDS: "pages_messaging_block_words",
      SHIPPO_TRACKING_UPDATES: "shippo_tracking_updates",
      NEO_APPROVED_CONNECTION_ADDED: "neo_approved_connection_added",
      NEO_APPROVED_USERNAME: "neo_approved_username",
      NEO_PARENT_PROXY_CREATED: "neo_parent_proxy_created",
      NEO_PARENT_PROXY_FORWARDED: "neo_parent_proxy_forwarded",
      NEO_PARENT_UNLOCK_STICKER: "neo_parent_unlock_sticker",
      NEO_READ_ONLY_RECIPIENT: "neo_read_only_recipient",
      CHANGE_FAVORITE_COLOR: "change_favorite_color",
      MARKETPLACE_ITEM_CHANGED: "marketplace_item_changed",
      LINK_CTA: "link_cta",
      PLAIN_TEXT: "plain_text",
      BUSINESS_INLINE_FEEDBACK_FORM_CONFIRMATION:
        "business_inline_feedback_form_confirmation",
      BUSINESS_FEEDBACK_FORM_CONFIRMATION:
        "business_feedback_form_confirmation",
      BUSINESS_INLINE_FEEDBACK_FORM_EXPIRING:
        "business_inline_feedback_form_expiring",
      BUSINESS_FEEDBACK_FORM_EXPIRING: "business_feedback_form_expiring",
      CUSTOMER_INFORMATION_FORM: "customer_information_form",
      SDR_BOT_SESSION_BEGIN: "sdr_bot_session_begin",
      SERVICES_VERTICAL_REDEEMED_REFERRAL:
        "services_vertical_redeemed_referral",
      SERVICES_VERTICAL_OPT_OUT_REQUESTS: "services_vertical_opt_out_requests",
      SERVICES_VERTICAL_OPT_OUT_REQUESTS_SUCCESS:
        "services_vertical_opt_out_requests_success",
      SERVICES_VERTICAL_LEAD_GEN_SURVEY: "services_vertical_lead_gen_survey",
      SERVICES_VERTICAL_LEAD_GEN_SURVEY_EDIT:
        "services_vertical_lead_gen_survey_edit",
      PAGES_MARK_AS_PAID: "pages_mark_as_paid",
      MIGRATED_TO_WORKPLACE: "migrated_to_workplace",
      MESSENGER_GROUP_EVENT_STATUS_UPDATE:
        "messenger_group_event_status_update",
      NEO_APPROVED_USER_REMOVED_FROM_GROUP:
        "neo_approved_user_removed_from_group",
      LIVE_CHAT_SUPPORT_AGENT_JOIN: "live_chat_support_agent_join",
      LIVE_CHAT_SUPPORT_SESSION_BEGIN: "live_chat_support_session_begin",
      LIVE_CHAT_SUPPORT_SESSION_END: "live_chat_support_session_end",
      LIVE_CHAT_PRIVACY_NOTICE: "live_chat_privacy_notice",
      MONTAGE_DIRECT_KEEP: "montage_direct_keep",
      MONTAGE_DIRECT_EXPIRE: "montage_direct_expire",
      CHSBOT_CONVERSATION_ENDED: "chsbot_conversation_ended",
      CHSBOT_LIVE_CHAT_SUPPORT_AGENT_BEGIN:
        "chsbot_live_chat_support_agent_begin",
      CHSBOT_LIVE_CHAT_SUPPORT_AGENT_END: "chsbot_live_chat_support_agent_end",
      CHSBOT_LIVE_PHONE_SUPPORT_AGENT_CALLING:
        "chsbot_live_phone_support_agent_calling",
      CHSBOT_SUPPORT_REQUESTED: "chsbot_support_requested",
      SUPPORT_BOT_SESSION_AGENT_JOIN: "support_bot_session_agent_join",
      SUPPORT_BOT_SESSION_AGENT_LEAVE: "support_bot_session_agent_leave",
      SUPPORT_BOT_SESSION_END: "support_bot_session_end",
      SUPPORT_BOT_CALL_BEGIN: "support_bot_call_begin",
      SUPPORT_BOT_CALL_END: "support_bot_call_end",
      SUPPORT_BOT_INITIATE_CONVERSATION: "support_bot_initiate_conversation",
      MESSENGER_SUBSCRIBE_TO_UPDATES: "messenger_subscribe_to_updates",
      MESSENGER_UNSUBSCRIBE_FROM_UPDATES: "messenger_unsubscribe_from_updates",
      MESSENGER_BLOCK_MESSAGES: "messenger_block_messages",
      MESSENGER_UNBLOCK_MESSAGES: "messenger_unblock_messages",
      MESSENGER_TURN_ON_MESSAGES: "messenger_turn_on_messages",
      MESSENGER_TURN_OFF_MESSAGES: "messenger_turn_off_messages",
      THANKS_FOR_SHARING_MESSAGE_CONTEXT: "thanks_for_sharing_message_context",
      GROUP_ADMIN_MODEL_NUX: "group_admin_model_nux",
      MESSENGER_PAYMENT_INCENTIVE_INFO: "messenger_payment_incentive_info",
      MESSENGER_PLATFORM_PERSONA: "messenger_platform_persona",
      MESSENGER_GROUP_SYNC_OPT_IN: "messenger_group_sync_opt_in",
      MESSENGER_GROUP_SYNC_OPT_OUT: "messenger_group_sync_opt_out",
      MENTORSHIP_MATCH: "mentorship_match",
      MENTORSHIP_PROGRAM_MATCH: "mentorship_program_match",
      MENTORSHIP_PROGRAM_CONTINUE: "mentorship_program_continue",
      MENTORSHIP_PROGRAM_LEAVE: "mentorship_program_leave",
      MENTORSHIP_PROGRAM_LEAVE_PROMPT: "mentorship_program_leave_prompt",
      MENTORSHIP_CURRICULUM_STEP: "mentorship_curriculum_step",
      MENTORSHIP_DISCUSSION_TOPIC_SET_PROMPT:
        "mentorship_discussion_topic_set_prompt",
      MENTORSHIP_CHECK_IN_REMINDER: "mentorship_check_in_reminder",
      MENTORSHIP_DISCLAIMER: "mentorship_disclaimer",
      PAGES_CALL_DEFLECTION_UPSELL: "pages_call_deflection_upsell",
      RTC_PHOTOBOOTH: "rtc_photobooth",
      DELAYED_PHONE_NUMBER_MATCH: "delayed_phone_number_match",
      AUTOMATIC_TRANSLATION_ENABLED: "automatic_translation_enabled",
      AUTOMATIC_TRANSLATION_AUTO_ENABLED: "automatic_translation_auto_enabled",
      AUTOMATIC_TRANSLATION_DISABLED: "automatic_translation_disabled",
      AUTOMATIC_TRANSCRIPTION_ENABLED: "automatic_transcription_enabled",
      AUTOMATIC_TRANSCRIPTION_DISABLED: "automatic_transcription_disabled",
      MESSENGER_ROOM_MIGRATION: "messenger_room_migration",
      PAGE_ADMIN_RESPONSIVENESS_REMINDER: "page_admin_responsiveness_reminder",
      MESSENGER_GROWTH_GENERIC_ADMIN_TEXT:
        "messenger_growth_generic_admin_text",
      MESSENGER_TALK_TO_YOUR_MOM_REMINDER:
        "messenger_talk_to_your_mom_reminder",
      PAYMENT_INCENTIVE_RECEIVED: "payment_incentive_received",
      PAGES_THREAD_REMINDER: "pages_thread_reminder",
      MESSENGER_PLATFORM_PERSONA_LEAVE_THREAD:
        "messenger_platform_persona_leave_thread",
      STORY_REPLY_CONTEXT: "story_reply_context",
      PAGES_AUTOMATED_RESPONSE_RECOMMENDATION:
        "pages_automated_response_recommendation",
      PAGES_AUTOMATED_RESPONSE_SMART_REPLY:
        "pages_automated_response_smart_reply",
      PAGES_AUTOMATED_RESPONSE_JOB_APPLICATION:
        "pages_automated_response_job_APPLICATION",
      MESSENGER_ICEBREAKER_VOTE_CAST: "messenger_icebreaker_vote_cast",
      PARTIES_PRESENCE: "parties_presence",
      PAGE_THREAD_ADMIN_ASSIGNMENT_TEXT: "page_thread_admin_assignment_text",
      RTC_INSTANT_ACTIVITY_LIFECYCLE: "rtc_instant_activity_lifecycle",
      RTC_VIDEO_CHAT_LINK_LIFECYCLE: "rtc_video_chat_link_lifecycle",
      RTC_REDUCE_CALL_QUALITY: "rtc_reduce_call_quality",
      SHIBA_MOCK_BOT_RESTART_CHAT_TEXT: "shiba_mock_bot_restart_chat_text",
      MARKETPLACE_RENTALS_INITIAL_MESSAGE:
        "marketplace_rentals_initial_message",
      MARKETPLACE_RENTALS_SENDER_INFO: "marketplace_rentals_sender_info",
      PAGES_MARK_AS_PAID_NEW: "pages_mark_as_paid_new",
      MESSENGER_BUSINESS_REPORT_SPAM: "messenger_business_report_spam",
      MESSENGER_BUSINESS_REPORT_INAPPROPRIATE:
        "messenger_business_report_inappropriate",
      MESSENGER_BUSINESS_REPORT_OTHER_ABUSE:
        "messenger_business_report_other_abuse",
      FRIENDED_IN_MESSENGER: "friended_in_messenger",
      MARKETPLACE_REPLY_REMINDER: "marketplace_reply_reminder",
      VOD_CONVERSATION_SEND_MESSAGE: "vod_conversation_send_message",
      MESSENGER_SHARED_WITH: "messenger_shared_with",
      PAGE_THREAD_ACTION_SYSTEM_ADD_DETAILS:
        "page_thread_action_system_add_details",
      PAGE_USER_MESSENGER_CONNECTED: "page_user_messenger_connected",
      FB_ONLY_BOT_TEXT: "fb_only_bot_text",
      MESSENGER_SCHOOL_CHAT_AUTO_ADD_USER:
        "messenger_school_chat_auto_add_user",
      LIVING_ROOM_MESSAGE: "living_room_message",
      MESSENGER_FRIENDVERSARY_SHARED_TO: "messenger_friendversary_shared_to",
      PARENT_APPROVED_NEW_FRIEND_CODE: "parent_approved_new_friend_code",
      CHAT_ENTICEMENT_JOINED: "chat_enticement_joined",
      EVENT_CONFIRMED_GOING: "event_confirmed_going",
      CHEX_ORDER_STATE_CHANGED: "chex_order_state_changed",
      MESSENGER_CARE_PII_PRIVACY_INTRO: "messenger_care_pii_privacy_intro",
      MESSENGER_CARE_AUTH_LINKS_REF: "messenger_care_auth_links_ref",
      MARKETPLACE_RATE_SELLER: "marketplace_rate_seller",
      MARKETPLACE_DISCOUNTED_PRICE_EXPIRING:
        "marketplace_discounted_price_expiring",
      GEMSTONE_THREAD_CREATION: "gemstone_thread_creation",
      GEMSTONE_FB_MESSENGER_THREAD_CREATION:
        "gemstone_fb_messenger_thread_creation",
      GEMSTONE_CONTACT_SHARE_UPSELL: "gemstone_contact_share_upsell",
      GEMSTONE_MUTUAL_READY_TO_MEET: "gemstone_mutual_ready_to_meet",
      GEMSTONE_ADD_READY_TO_MEET_SINGLE_SIDED:
        "gemstone_add_ready_to_meet_single_sided",
      GEMSTONE_RECEIVED_COMPLIMENTS: "gemstone_received_compliments",
      GEMSTONE_REMOVE_READY_TO_MEET_SINGLE_SIDED:
        "gemstone_remove_ready_to_meet_single_sided",
      GEMSTONE_SEND_COMPLIMENTS_PM_TRIGGER:
        "gemstone_send_compliments_pm_trigger",
      GEMSTONE_SOCIAL_BADGE_PM_TRIGGER: "gemstone_social_badge_pm_trigger",
      GEMSTONE_STALE_THREAD: "gemstone_stale_thread",
      GEMSTONE_WE_MET_PROMPT: "gemstone_we_met_prompt",
      MNF_LIGHTWEIGHT_LIKE: "mnf_lightweight_like",
      WORKCHAT_REMINDER_ADMIN_TEXT: "workchat_reminder_admin_text",
      WORKCHAT_REMINDER_CREATION_FAILURE: "workchat_reminder_creation_failure",
      WORKCHAT_REMINDER_LINK_CTA: "workchat_reminder_link_cta",
      WORKCHAT_REMINDER_WITHOUT_MESSAGE: "workchat_reminder_without_message",
      WORKCHAT_RECIPIENT_ON_DND_WARNING: "workchat_recipient_on_dnd_warning",
      WORKCHAT_PIN_MESSAGE_ACTION: "workchat_pin_message_action",
      WORKCHAT_UNPIN_MESSAGE_ACTION: "workchat_unpin_message_action",
      CHATS_IN_GROUPS_PRE_MIGRATION: "chats_in_groups_pre_migration",
      CHATS_IN_GROUPS_MIGRATION: "chats_in_groups_migration",
      POST_SHARED_FROM_GROUP: "post_shared_from_group",
      WORKCHAT_ACTIVATION_WELCOME_MESSAGE:
        "workchat_activation_welcome_message",
      WORKCHAT_SELF_CHAT_INITIATOR: "workchat_self_chat_initiator",
      WORKCHAT_ACTIVATION_UNCLAIMED_ACCOUNT_WELCOME_MESSAGE:
        "workchat_activation_unclaimed_account_welcome_message",
      MARKETPLACE_ASSISTANT_SUPPORT_CASE_START:
        "marketplace_assistant_support_case_start",
      MARKETPLACE_ASSISTANT_SUPPORT_CASE_END:
        "marketplace_assistant_support_case_end",
      SECURITY_HUB_AGENT_LEFT: "security_hub_agent_left",
      SECURITY_HUB_AGENT_JOINED: "security_hub_agent_joined",
      NEO_SEND_DGG: "neo_send_dgg",
      SECURITY_HUB_AGENT_REASSIGNED: "security_hub_agent_reassigned",
      MARKETPLACE_MESSAGE_ENHANCEMENT: "marketplace_message_enhancement",
      C4G_MESSAGE_REMOVED: "c4g_message_removed",
      C4G_NEW_VIDEO_ROOM_CREATED: "c4g_new_video_room_created",
      C4G_VIDEO_ROOM_ENDED: "c4g_video_room_ended",
      C4G_VIDEO_ROOM_PARTICIPANT_JOIN: "c4g_video_room_participant_join",
      C4G_PARTICIPANT_JOIN: "c4g_participant_join",
      C4G_PARTICIPANT_LEFT: "c4g_participant_left",
      NEO_SHARE_VIRTUAL_PET: "neo_share_virtual_pet",
      NEO_SHARE_ASYNC_GAME_SCORE: "neo_share_async_game_score",
      NEO_SHARE_ASYNC_GAME_OTHER: "neo_share_async_game_other",
      NEO_SHARE_PROFILE_PHOTO_UPDATE: "neo_share_profile_photo_update",
      NEO_UPDATE_EMOJI_STATUS: "neo_update_emoji_status",
      NEO_NOTIFY_PARENT_EMOJI_STATUS: "neo_notify_parent_emoji_status",
      NEO_BEACON_QUICK_REACTION: "neo_beacon_quick_reaction",
      NEO_BEACON_QUICK_REPLY: "neo_beacon_quick_reply",
      THREAD_THEME_DEPRECATION: "thread_theme_deprecation",
      MAKETPLACE_SELLER_REQUEST_RATING: "maketplace_seller_request_rating",
      PRODUCT_INVOICE_CREATED: "PRODUCT_INVOICE_CREATED",
      REJOINED_GROUP_THREAD_AFTER_ERROR: "rejoined_group_thread_after_error",
      IG_DIRECT_CALL_LOG: "ig_direct_call_log",
      PAYMENT_REQUEST_REMINDER: "payment_request_reminder",
      MARKETPLACE_BSG_CONTACT_SELLER: "marketplace_bsg_contact_seller",
      MARKETPLACE_TXN_QUESTION: "marketplace_txn_question",
      MARKETPLACE_BUYER_TXN_QUESTION: "marketplace_buyer_txn_question",
      WORKCHAT_DETACH_SYNCED_GROUP_CHAT: "workchat_detach_synced_group_chat",
      CHAT_PLUGIN_GUEST_EXPIRATION: "chat_plugin_guest_expiration",
      MARKETPLACE_FOLLOW_SUGGESTION: "marketplace_follow_suggestion",
      CIP_REFERRAL_MESSAGE: "cip_referral_message",
      FB_LOGIN_B2P: "fb_login_b2p",
      EO_SRT_HELPDESK_TECHNICIAN_JOINED: "eo_srt_helpdesk_technician_joined",
      EO_SRT_HELPDESK_TECHNICIAN_LEFT: "eo_srt_helpdesk_technician_left",
      COMMUNITY_CHATS_DESCRITPION_UPDATE: "community_chats_description_update",
      COMMUNITY_CHATS_THREAD_CREATION: "community_chats_thread_creation",
      MARKETPLACE_MEETING_PLAN_DELETED: "marketplace_meeting_plan_deleted",
      MARKETPLACE_MEETING_PLAN_SHARED: "marketplace_meeting_plan_shared",
      MARKETPLACE_COMMERCE_POST_PRIVATE_REPLY:
        "marketplace_commerce_post_private_reply",
      PRIVATE_REPLY_ADMIN_TEXT_LOG: "private_reply_admin_text_log",
      MESSAGE_REQUEST_ACCEPTED_ADMIN_TEXT_LOG:
        "message_request_accepted_admin_text_log",
      CHAT_PLUGIN_UPGRADE_PAGE_SIDE: "chat_plugin_upgrade_page_side",
      MARKETPLACE_DRAFT_THREAD: "marketplace_draft_thread",
      MARKETPLACE_THREAD_RTC_ENABLED: "marketplace_thread_rtc_enabled",
      MARKETPLACE_THREAD_RTC_BUYER_INFORM:
        "marketplace_thread_rtc_buyer_inform",
      PRODUCT_INVOICE_ORDER_TOTAL_AMOUNT_EDITED:
        "product_invoice_order_total_amount_edited",
      PRODUCT_INVOICE_ORDER_NOTES_EDITED: "product_invoice_order_notes_edited",
      PRODUCT_INVOICE_PAYMENT_DISPUTED: "product_invoice_payment_disputed",
      SHH_MODE_SCREENSHOT: "shh_mode_screenshot",
      SHH_MODE_REPLAY: "SHH_MODE_REPLAY",
      MESSAGING_REACHABILITY_ONE_WAY_SEND:
        "messaging_reachability_one_way_send",
      NEO_LINK_SHARING: "neo_link_sharing",
      MARKETPLACE_REPLY_REMINDER_1_TO_1_THREAD:
        "marketplace_reply_reminder_1_to_1_thread",
      MARKETPLACE_COMMENT_TO_MESSAGING: "marketplace_comment_to_messaging",
      ADULT_MINOR_INTERACTION_ONE_WAY_SEND:
        "adult_minor_interaction_one_way_send",
      SHARED_ITEM_XMA: "shared_item_xma",
      MESSENGER_ROOMS_THREAD_CREATED: "messenger_rooms_thread_created_xmat",
      MESSENGER_ROOMS_THREAD_PARTICIPANT_JOINED:
        "messenger_rooms_thread_participant_joined_xmat",
      MESSENGER_ROOMS_THREAD_PARTICIPANT_LEFT:
        "messenger_rooms_thread_participant_left_xmat",
      MESSENGER_ROOMS_TO_LIVE_STARTED: "messenger_rooms_to_live_started_xmat",
      MESSENGER_ROOMS_TO_LIVE_END: "messenger_rooms_to_live_end_xmat",
      PAYMENTS_CARE_B2C_MESSENGER_ESCALATION_XMAT:
        "payments_care_b2c_messenger_escalation_xmat",
      REACTION_LOG: "reaction_log",
      GAMING_SQUADS_ADMIN_XMAT: "gaming_squads_admin_xmat",
      MAGIC_WORDS: "magic_words",
      PIN_MESSAGES_V2: "pin_messages_v2",
      UNPIN_MESSAGES_V2: "unpin_messages_v2",
      PAY_REFERRAL_INVITATION_SENT_XMAT: "pay_referral_invitation_sent_xmat",
      ICEBREAKER_SENT_BY_MISTAKE: "icebreaker_sent_by_mistake",
      EARLY_THREAD_CLOSE_OUT_SENT_BY_MISTAKE:
        "early_thread_close_out_sent_by_mistake",
      NOTIFICATION_MESSAGES: "notification_messages",
      WORKCHAT_BOT_LEFT_MISSING_PERMISSION:
        "workchat_bot_left_missing_permission",
      LIVE_PRIVATE_REPLY_ADMIN_TEXT_LOG: "live_private_reply_admin_text_log",
      COLLAB_COLLECTION_ADMIN_TEXT_LOG: "collab_collection_admin_text_log",
      BIZ_INBOX_CSAT_SURVEY_CUSTOMER_SUBMIT_NOTIFY:
        "biz_inbox_csat_survey_customer_submit_notify",
      JOINABLE_GROUP_LINK_MODE_CHANGE: "joinable_group_link_mode_change",
      JOINABLE_GROUP_LINK_RESET: "joinable_group_link_reset",
      VOLUNTEERING_OPT_IN_MESSAGES: "volunteering_opt_in_messages",
      MESSENGER_SILENT_MESSAGE: "messenger_silent_message",
      TOGGLE_IN_THREAD_TRANSLATION: "toggle_in_thread_translation",
      BIZ_INBOX_ASSIGN_ADMIN: "biz_inbox_assign_admin",
      BIZ_INBOX_ADMIN_ASSIGNMENT_NOTE: "biz_inbox_admin_assignment_note",
      LAST_ADMIN_LEFT: "last_admin_left",
      MARKETPLACE_LOCAL_DELIVERY_UPDATE: "marketplace_local_delivery_update",
      CM_THREAD_HISTORY_TRUNCATED: "cm_thread_history_truncated",
      EVENT_THREAD_CREATION: "event_thread_creation",
      MESSENGER_P2B_PRIVACY_DISCLOSURE: "messenger_p2b_privacy_disclosure",
      HELPDESK_CHAT_ADMIN_MESSAGE: "helpdesk_chat_admin_message",
      SHOPS_QA_BUYER_PRIVATE_REPLY_MANAGE:
        "shops_qa_buyer_private_reply_manage",
      BIZ_INBOX_OMNICHANNEL_EMAIL_SENT: "biz_inbox_omnichannel_email_sent",
      BIZ_INBOX_FORM_BUILDER_SUBMIT_NOTIFY:
        "biz_inbox_form_builder_submit_notify",
      BCP_CREATOR_ACCEPTS_PROJECT_INVITE: "bcp_creator_accepts_project_invite",
      IG_ME_ADMIN_TEXT_LOG: "ig_me_admin_text_log",
      BCP_BRAND_UPDATES_PROJECT_DETAILS: "bcp_brand_updates_project_details",
      PARTNERSHIP_MESSAGING_AFFILIATE_SELLER_INITIATION:
        "partnership_messaging_affiliate_seller_initiation",
      BCP_CREATOR_ATTACHES_MEDIA_TO_PROJECT:
        "bcp_creator_attaches_media_to_project",
      BCP_CREATOR_COMPLETES_PROJECT: "bcp_creator_completes_project",
      BCP_BRAND_INITIATED_PAYMENT_FOR_PROJECT:
        "bcp_brand_initiated_payment_for_project",
      BCP_BRAND_REMOVES_CREATOR_FROM_PROJECT:
        "bcp_brand_removes_creator_from_project",
      MESSENGER_FAQ_RESPONSE_RESOLUTION_SIGNAL_COLLECTION_XMAT:
        "messenger_faq_response_resolution_signal_collection_xmat",
      DEFAULT_ICEBREAKER_ADMIN_TEXT_LOG: "default_icebreaker_admin_text_log",
      BIZ_INBOX_AUTO_ASSIGNED_ADMIN: "biz_inbox_auto_assigned_admin",
      GROUP_CHALLENGE_PARTICIPANT_ADD_ACTIVITY:
        "group_challenge_participant_add_activity",
      IG_HANGOUTS_CANVAS_CONTENT_UPDATE_ACTION_LOG:
        "ig_hangouts_canvas_content_update_action_log",
      BUSINESS_CALLING_PROMOTION_ADMIN_TEXT_LOG:
        "business_calling_promotion_admin_text_log",
      NOTIFY_ONE_HOUR_BEFORE_CSC_END: "notify_one_hour_before_csc_end",
      BCP_BRAND_PAID_CREATOR_OFFSITE_FOR_PROJECT:
        "bcp_brand_paid_creator_offsite_for_project",
      SERVICE_BOOKING_LEGAL_DISCLAIMER_ADMIN_TEXT:
        "service_booking_legal_disclaimer_admin_text",
      BMC_SELLER_REVIEW_POST_SUBMISSION_TEXT:
        "bmc_seller_review_post_submission_text",
      ADMIN_REMOVE_MESSAGE: "admin_remove_message",
      CM_HOWDY_BOT: "cm_howdy_bot",
      SERVICE_APPOINTMENT_REMINDER: "service_appointment_reminder",
      GROUPS_ADMOD_SHARE_ADMIN_ACTION: "groups_admod_share_admin_action",
      MESSENGER_CART_ACTION: "messenger_cart_action",
      MESSAGING_OFFERS_REMINDER: "messaging_offers_reminder",
      IG_HANGOUTS_CANVAS_BUZZ_NOTIFY_ACTION_LOG:
        "ig_hangouts_canvas_buzz_notify_action_log",
      ADMIN_MESSAGE_PUBLIC_CHAT_CREATION: "admin_message_public_chat_creation",
      LIVE_MESSAGE_OPT_IN: "live_message_opt_in",
      DISABLE_VANISH_MODE_ADMIN_TEXT_LOG: "disable_vanish_mode_admin_text_log",
      LIVE_MESSAGE_OPT_OUT: "live_message_opt_out",
      MCOM_CUSTOMER_PAYMENT_INVOICE_MEDIA_MESSAGE_DETECTION_CREATION:
        "mcom_customer_payment_invoice_media_message_detection_creation",
      MCOM_CUSTOMER_PAYMENT_INVOICE_MEDIA_MESSAGE_DETECTION_CANCELATION:
        "mcom_customer_payment_invoice_media_message_detection_cancelation",
      MCOM_MERCHANT_PAYMENT_INVOICE_MEDIA_MESSAGE_DETECTION_CREATION:
        "mcom_merchant_payment_invoice_media_message_detection_creation",
      VR_REQUEST_THREAD_ACCEPT: "vr_request_thread_accept",
      BIZ_INBOX_AUTOMATION_NONPROFITS_SUPPORTER_ACTIVITY:
        "biz_inbox_automation_nonprofits_supporter_activity",
      BIZ_INBOX_AUTOMATION_NONPROFITS_PAGE_ADMIN:
        "biz_inbox_automation_nonprofits_page_admin",
      GROUP_SET_WELCOME_MESSAGE_MEDIA: "group_set_welcome_message_media",
      GROUP_INVITE_VIA_MESSENGER: "group_invite_via_messenger",
      GROUP_INVITE_PENDING_VIA_MESSENGER: "group_invite_pending_via_messenger",
      EVENT_RSVP_UPDATED: "event_rsvp_updated",
      EVENT_RSVP_UPDATED_BY_ADMOD: "event_rsvp_updated_by_admod",
      VR_REQUEST_GROUP_THREAD_ACCEPT: "vr_request_group_thread_accept",
      CHANGE_THREAD_IMAGE: "change_thread_image",
      ROLL_CALL_RESPONSE: "roll_call_response",
      IG_BROADCAST_CHAT_COLLABORATOR_JOIN_OR_LEAVE:
        "ig_broadcast_chat_collaborator_join_or_leave",
      VR_GROUPS_JOINED_GROUP_CALL: "vr_groups_joined_group_call",
      VR_GROUPS_LEFT_GROUP_CALL: "vr_groups_left_group_call",
      VR_GROUPS_INVITED_DESTINATION: "vr_groups_invited_destination",
      VR_GROUPS_TRAVELED_DESTINATION: "vr_groups_traveled_destination",
      IG_BROADCAST_CHAT_DECLINE_COLLABORATOR_INVITE:
        "ig_broadcast_chat_decline_collaborator_invite",
      REELS_TOGETHER_ENDED: "reels_together_ended",
    });
    f["default"] = a;
  },
  66
);
__d(
  "MercurySourceType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      BRAND_COLLABS_MANAGER: "source:brand_collabs_manager",
      BUSINESS_WHATSAPP_SHARE_XMA: "source:business_whatsapp_share_xma",
      CHAT_ORCA: "source:chat:orca",
      CHAT_LIGHT_SPEED: "source:chat:light_speed",
      CHAT_WEB_LIGHT_SPEED_INBOX: "source:chat:web:light_speed:inbox",
      CHAT_WEB_LIGHT_SPEED_CHAT: "source:chat:web:light_speed:chat",
      CHAT_WEB_LIGHT_SPEED_ROOMS_SIDE_CHAT:
        "source:chat:web:light_speed:rooms_side_chat",
      CHAT_IPHONE: "source:chat:iphone",
      CHAT_JABBER: "source:chat:jabber",
      CHAT_MEEBO: "source:chat:meebo",
      CHAT_WEB: "source:chat:web",
      CHAT_TEST: "source:chat:test",
      CHAT_FORWARD_DIALOG: "source:chat:forward",
      CHAT_FULLSCREEN: "source:chat:fullscreen",
      CHAT: "source:chat",
      CONTACT_ADD_MUTATION: "source:contact_add:graphql_mutation",
      CONTACT_ADD_CYMK: "source:contact_add:cymk_suggestion",
      CONTEXTUAL_PROFILE_MESSAGE: "source:contextual_profile:message",
      CONTEXTUAL_PROFILE_WAVE: "source:contextual_profile:wave",
      COWORKER_GROUP: "source:work:coworker_group",
      COVID_HUB_MENTAL_HEALTH_UNIT: "source:covid_hub_mental_health",
      CUSTOMER_CHAT_PLUGIN: "source:discovery:customer_chat_plugin",
      CUSTOMER_CHAT_PLUGIN_ESCALATION:
        "source:discovery:customer_chat_plugin_escalation",
      CUSTOMER_CHAT_SUPPORT: "source:integrity:customer_chat_support",
      EMAIL: "source:email",
      EVENT_MESSAGE_BLAST: "source:event_message_blast",
      EVENT_TICKETING: "source:event_ticket",
      EVENT_REMINDERS: "source:event_reminders",
      EVENT_INITIAL_MESSAGE: "source:event_initial_message",
      EVENT_JOIN_CHAT: "source:event_join_chat",
      EVENT_CREATION: "source:event_creation",
      WHITEHAT_FBDL: "source:whitehat_fbdl",
      GENERIC_ADMIN_TEXT: "source:generic_admin_text",
      GIGABOXX_API: "source:gigaboxx:api",
      GIGABOXX_BLAST: "source:gigaboxx:blast",
      GIGABOXX_EMAIL_REPLY: "source:gigaboxx:emailreply",
      GIGABOXX_MOBILE: "source:gigaboxx:mobile",
      GIGABOXX_WAP: "source:gigaboxx:wap",
      GIGABOXX_WEB: "source:gigaboxx:web",
      GRATITUDE_LIBRARY: "source:gratitude_library",
      GROUP_ADMOD_THREAD_AUTOJOIN: "source:group:admod_thread_autojoin",
      GROUP_GENERAL_THREAD_AUTOJOIN: "source:group:general_thread_autojoin",
      GROUP_ADMOD_THREAD_MODERATION_QUEUE_ENTRYPOINT:
        "source:group_admod_thread_moderation_queue_entrypoint",
      GROUPS_INVITE_VIA_MESSENGER: "source:groups_invite_via_messenger",
      INBOX_WHATSAPP_MIGRATION: "source:inbox_whatsapp_migration",
      INVITE: "source:invite",
      LEIA: "source:leia",
      MESSENGER_WEB: "source:messenger:web",
      MESSENGER_WEB_SEARCH: "source:messenger:web_search",
      MESSENGER_UNKNOWN: "source:messenger:unknown",
      MESSENGER_RESTRICT: "source:messenger:restrict",
      REFERRALS_DIALOG: "source:referrals:dialog",
      SAM_UFI: "source:sam:ufi",
      SHARE_DIALOG: "source:share:dialog",
      SEND_PLUGIN: "source:sendplugin",
      SMS: "source:sms",
      SSI_RESOURCES: "source:ssi_resources",
      TEST: "source:test",
      TITAN_WAP: "source:titan:wap",
      TITAN_M_BASIC: "source:titan:m_basic",
      TITAN_M_FREE: "source:titan:m_free_basic",
      TITAN_M_JAPAN: "source:titan:m_japan",
      TITAN_M_MINI: "source:titan:m_mini",
      TITAN_M_TOUCH: "source:titan:m_touch",
      TITAN_M_APP: "source:titan:m_app",
      TITAN_M_TABLET: "source:titan:m_tablet",
      TITAN_M_ZERO: "source:titan:m_zero",
      TITAN_M_TALK: "source:titan:m_talk",
      TITAN_WEB: "source:titan:web",
      TITAN_FACEWEB_ANDROID: "source:titan:faceweb_android",
      TITAN_FACEWEB_BUFFY: "source:titan:faceweb_buffy",
      TITAN_FACEWEB_IPAD: "source:titan:faceweb_ipad",
      TITAN_FACEWEB_IPHONE: "source:titan:faceweb_iphone",
      TITAN_FACEWEB_UNKNOWN: "source:titan:faceweb_unknown",
      TITAN_API: "source:titan:api",
      TITAN_API_MOBILE: "source:titan:api_mobile",
      TITAN_ORCA: "source:titan:orca",
      TITAN_EMAIL_REPLY: "source:titan:emailreply",
      MOBILE: "source:mobile",
      PAGE_PLATFORM_API: "source:page_platform_api",
      PAGE_UNIFIED_INBOX: "source:page_unified_inbox",
      WHATSAPP_CALLBACK: "source:wa_callback",
      UNKNOWN: "source:unknown",
      WEB: "source:web",
      WESTWORLD: "source:westworld",
      TESTDATA: "source:testdata",
      HELPCENTER: "source:helpcenter",
      HUDDLE: "source:huddle",
      NEW_SHARE_DIALOG: "source:share:dialog:new",
      PAID_PROMOTION: "source:paid_promotion",
      BUFFY_SMS: "source:buffy:sms",
      WEBRTC_MOBILE: "source:webrtc:mobile",
      CLICK_TO_DIRECT_LEAD_GEN: "source:click:to:direct:lead:gen",
      MESSENGER_COMMERCE: "source:messenger:commerce",
      MESSENGER_BOT: "source:bot",
      MESSENGER_CHAT_ENTITY: "source:messenger:chat_entity",
      SERVICES_QPC_CTA_TRIGGER_MESSAGE:
        "source:services:qpc:cta:trigger:message",
      MESSENGER_EMPLOYEE_ONLY_BOT: "source:bot:employee_only",
      MESSENGER_OMNIM: "source:messenger:omnim",
      PAGES_PRIVATE_REPLY: "source:pages:private_reply",
      MESSENGER_FORWARD_DIALOG: "source:messenger:forward",
      MESSENGER_AD: "source:messenger:ad",
      CLICK_TO_MESSENGER_AD: "source:click_to_messenger_ad",
      MARKETPLACE: "source:marketplace",
      MARKETPLACE_BUSINESS_MESSAGING: "source:marketplace:bizmsg",
      MARKETPLACE_CARE: "source:marketplace:care",
      MARKETPLACE_BOT: "source:marketplace:bot",
      PAYMENTS_BOT: "source:payments:bot",
      CHEX_C2C: "source:chex:c2c",
      MESSENGER_LEAD_GEN: "source:messenger:lead_gen",
      PAGES_MESSAGE_SHORTLINK: "source:pages:message_shortlink",
      STICKER_SUBSCRIBE: "source:messenger:sticker_subscribe",
      PHOTO_TAG: "source:messenger:photo_tag",
      INTERNAL_TEST_INBOX: "source:internal:test_inbox",
      INTERNAL_TEST_PENDING: "source:internal:test_pending",
      INTERNAL_TEST_OTHER: "source:internal:test_other",
      INTERNAL_TEST_ML_ONLY: "source:internal:test_ml_only",
      JOB_SEARCH_APPLICATION: "source:job_search:application",
      JOB_SEARCH_JOB_OPENING: "source:job_search:job_opening",
      MESSENGER_JOINABLE_LINK: "source:messenger:joinable_link",
      MESSENGER_JOINABLE_GROUP_LINK: "source:messenger:joinable_group_link",
      MESSENGER_ADD_WITH_APPROVAL: "source:messenger:add_with_approval",
      MESSENGER_SMS_BRIDGE_CONVERT: "source:messenger:sms_bridge_conversion",
      TINCAN_ORCA: "source:tincan:orca",
      TINCAN_IOS: "source:tincan:ios",
      TINCAN_UNKNOWN: "source:tincan:unknown",
      FACEBOOK_GROUPS_CHANNELS: "source:groups:channels",
      GROUP_COMMERCE: "source:group_commerce",
      INTERNAL_TOOL: "source:internal:tool",
      PAGE_COMMENT_OPT_IN: "source:pages:opt_in",
      PAGES_PLATFORM: "source:pages:platform",
      PAGES_RECOMMENDATION: "source:pages:recommendation",
      PAGES_ORDER_MANAGEMENT: "source:pages:order_management",
      PAGE_AUTO_RESPONSE: "source:pages:auto_response",
      PAGE_AUTO_RESPONSE_INSTANT_REPLY:
        "source:pages:auto_response:instant_reply",
      PAGE_AUTO_RESPONSE_AWAY_MESSAGE:
        "source:pages:auto_response:away_message",
      PAGE_AUTO_RESPONSE_CUSTOM_QUESTIONS:
        "source:pages:auto_response:custom_questions",
      PAGE_AUTO_RESPONSE_KEYWORD_DETECTION:
        "source:pages:auto_response:keyword_detection",
      PAGE_AUTO_RESPONSE_JOB_APPLICATION:
        "source:pages:auto_response:job_application",
      PAGE_AUTO_RESPONSE_COMMENT_TO_INBOX:
        "source:pages:auto_response:comment_to_inbox",
      PAGE_AUTO_RESPONSE_COMMENT_TO_INBOX_ONE_WAY:
        "source:pages:auto_response:comment_to_inbox:one_way",
      PAGE_AUTO_RESPONSE_APPOINTMENT_REMINDER:
        "source:pages:auto_response:appointment_reminder",
      PAGE_AUTO_RESPONSE_ORGANIC_INTAKE_FORM:
        "source:pages:auto_response:organic_intake_form",
      PAGE_AUTO_RESPONSE_NOT_RESPONDED:
        "source:pages:auto_response:not_responded",
      PAGE_AUTO_RESPONSE_CUSTOM_AUTOMATION:
        "source:pages:auto_response:custom_automation",
      PAGE_AUTO_RESPONSE_SMART_REPLY_CONTACT:
        "source:pages:auto_response:smart_reply_contact",
      PAGE_AUTO_RESPONSE_SMART_REPLY_HOURS:
        "source:pages:auto_response:smart_reply_hours",
      PAGE_AUTO_RESPONSE_SMART_REPLY_LOCATION:
        "source:pages:auto_response:smart_reply_location",
      PAGE_AUTO_RESPONSE_SMART_REPLY_POSITIVE_FEEDBACK:
        "source:pages:auto_response:smart_reply_positive_feedback",
      PAGE_AUTO_RESPONSE_SMART_REPLY_NEGATIVE_FEEDBACK:
        "source:pages:auto_response:smart_reply_negative_feedback",
      PAGE_AUTO_RESPONSE_POSITIVE_RECOMMENDATION:
        "source:pages:auto_response:positive_recommendation",
      PAGE_AUTO_RESPONSE_NEGATIVE_RECOMMENDATION:
        "source:pages:auto_response:negative_recommendation",
      PAGE_AUTO_RESPONSE_SHIPPING_UPDATES:
        "source:pages:auto_response:shipping_updates",
      PAGE_AUTO_RESPONSE_FOLLOWUP_MESSAGE:
        "source:pages:auto_response:followup_message",
      PAGE_AUTO_RESPONSE_FUNDRAISER_CREATED:
        "source:pages:auto_response:fundraiser_created",
      PAGE_AUTO_RESPONSE_FUNDRAISER_DONATION:
        "source:pages:auto_response:fundraiser_donation",
      PAGES_INVITE: "source:pages:invite",
      PAGES_INVITE_SEND_MESSAGE_BOTTOMSHEET:
        "source:pages:invite_send_message_bottomsheet",
      PAGES_CHAT_EXTENSION: "source:pages:chat_extension",
      PAGES_COMPOSER: "source:pages:composer",
      PAGES_SMB_LEAD_GEN: "source:pages:smb_lead_gen",
      PTX: "source:ptx",
      SAVED_CHAT_EXTENSION: "source:saved:chat_extension",
      CREATOR_PAGE_INITIATE_TO_CREATOR_PAGE:
        "source:pages:creator_page_initiate_to_creator_page",
      LIVE_VIDEO_CHAT: "source:live_video_chat",
      LIVE_EVENT_CHAT: "source:live_event_chat",
      GEMSTONE: "source:gemstone",
      WATCH_PARTY: "source:watch_party",
      WORK_ACTIVATION_CARD_GENERAL_GROUP_CHAT:
        "source:work:activation_card_general_group_chat",
      SCHOOL_COMMUNITY: "source:school_community",
      SCHOOL_COMMUNITY_COURSE: "source:school_community_course",
      SOCIAL_ASSISTANT: "source:social_assistant",
      BELL_RESEARCH: "source:bell_research",
      BELL_MESSENGER_LINKED: "source:bell_messenger_linked",
      BELL_MESSENGER_UNLINKED: "source:bell_messenger_unlinked",
      BELL_MESSENGER_ONBOARD: "source:bell_messenger_onboard",
      PROFILE_MEET_NEW_FRIENDS: "source:profile_meet_new_friends",
      PROFILE_MEET_NEW_FRIENDS_REPLY: "source:profile_meet_new_friends_reply",
      OCULUS_COMMUNICATOR: "source:oculus_communicator",
      OCULUS_MEDIA_MESSAGING: "source:oculus_media_messaging",
      OCULUS_SHARE_TO_MESSENGER: "source:oculus_share_to_messenger",
      BFF_BOT: "source:bff:bot",
      FRIENDING_ADMIN_BUMP: "source:messenger_growth:friending_admin_bump",
      NEW_MESSENGER_USER_ADMIN_BUMP:
        "source:messenger_growth:new_messenger_user_admin_bump",
      EVENT_UPCOMING_BUMP: "source:messenger_growth:event_upcoming_bump",
      PHOTO_TAG_BUMP: "source:messenger_growth:photo_tag_bump",
      WALL_POST_BUMP: "source:messenger_growth:wall_post_bump",
      FRIENDVERSARY_BUMP: "source:messenger_growth:friendversary_bump",
      CUSTOMIZATION_UPSELL_BUMP:
        "source:messenger_growth:customization_upsell_bump",
      MESSENGER_BROADCASTFLOW: "source:messenger:broadcastflow",
      PAGE_COMMENT_MSG: "source:pages:question_triggered_convo",
      COMMENT_PIVOT: "source:messenger_growth:comment_pivot",
      PAGE_HOVERCARD: "source:pages:hovercard",
      INSTANT_GAMES_GAME_UPDATE: "source:instant_games_game_updates",
      INSTANT_GAMES_GAME_SHARE: "source:instant_games_game_share",
      INSTANT_GAMES_MATCH_MAKING: "source:instant_games_match_making",
      INSTANT_GAMES_GROUP_CREATION: "source:instant_games_group_creation",
      MOBILE_GAME_SHARE: "source:games_app:mobile_game_share",
      GAMES_SERVICE_GAME_INVITE: "source:games_service_game_invite",
      GAMES_SERVICE_GAME_REQUEST: "source:games_service_game_request",
      PAGE_EMAIL_REPLY: "source:pages:email_reply",
      PAGE_HOME_PAGE_PANEL: "source:page_home_page_panel",
      GROUPSYNC_MESSENGER_GROUP_CREATE:
        "source:groupsync:messenger_group_create",
      GROUPSYNC_SYNC_FROM_FB: "source:groupsync:sync_from_fb",
      GROUPSYNC_NAMING: "source:groupsync:naming",
      GROUPSYNC_THREAD_INFO_SYNC_FROM_FB: "source:groupsync:thread_info_sync",
      GROUPSYNC_THREAD_INFO_SYNC_FROM_FB_NON_PARTICIPANT:
        "source:groupsync:thread_info_sync_non_participant",
      WORK_GARDEN_CREATION: "source:work:garden:creation",
      COWORKING: "source:coworking",
      WORK_GROUP_SYNCED_CHAT_CREATION: "source:work:groupchat:creation",
      WORK_DEFAULT_GROUP_SYNCED_CHAT_CREATION:
        "source:work:defaultgroupchat:creation",
      WORK_GROUP_SYNCED_CHAT_MEMBER_SYNC: "source:work:groupchat:member_sync",
      WORK_MEETING_SYNCED_CHAT_MEMBER_SYNC:
        "source:work:meetingchat:member_sync",
      WORK_GROUP_SYNCED_CHAT_DESCRIPTION_SYNC:
        "source:work:groupchat:description_sync",
      WORK_GROUP_SYNCED_CHAT_NAME_SYNC: "source:work:groupchat:name_sync",
      WORK_GROUP_SYNCED_CHAT_OPT_IN: "source:work:groupchat:opt_in",
      PAGE_PQI_MESSAGE: "source:pages:pqi_message",
      PAGE_PLUGIN_MESSAGE: "source:pages:page_plugin_message",
      WORKPLACE_CHAT_DESKTOP: "source:workchat:desktop",
      WORKPLACE_QUICKCHAT: "source:workchat:quickchat",
      WORKPLACE_SIGNUP_PAGE_ADMIN_INVITE:
        "source:workplace:signup_page_admin_invite",
      WORKPLACE_APPROVALS: "source:workplace:approvals",
      WORKPLACE_TEAMWORK_CALL: "source:workplace:teamwork_call",
      WORKPLACE_TEAMWORK_TEST: "source:workplace:test",
      WORKPLACE_TEAMWORK_GROUP_POST: "source:workplace:group_post",
      CREATOR_STUDIO: "source:creator_studio",
      FB_GROUP_ADMINSHIP_SYNC: "source:fbgroup:adminship_sync",
      FB_GROUP_CHAT_MUTE_MEMBER: "source:fbgroup:mute_member",
      MESSENGER_ADS_PARTIAL_AUTOMATED_REMINDER:
        "source:ads_partial_automated:reminder",
      AR_CALLING_PARROT_BOT: "source:ar_calling:parrot_bot",
      COMMUNITY_HELP_LISTING: "source:community_help_listing",
      FUNDRAISER_MESSAGE_BLAST: "source:fundraiser_message_blast",
      MENTORSHIP: "source:mentorship",
      MENTORSHIP_DISCUSSION_TOPIC: "source:mentorship_discussion_topic",
      MENTORSHIP_OUTREACH: "source:mentorship_outreach",
      NONPROFIT_SUPPORTER_LIST: "source:nonprofit_supporter_list",
      VOLUNTEERING_ORGANIZER_REACHOUT: "source:volunteering_organizer_reachout",
      VOD_CONVERSATION: "source:vod_conversation",
      LOCAL_SEARCH_SERVICES: "source:local_search_services",
      YOUTH_VAULT: "source:youth_vault",
      MESSENGER_KIDS: "source:messenger_kids",
      MESSENGER_KIDS_ACTIVITY: "source:messenger_kids:activity",
      STORY_REPLY: "source:story_reply",
      LOCAL_DEV_PLATFORM: "source:local_dev_platform",
      INSTAGRAM_DIRECT: "source:instagram_direct",
      WA_MSGR_INTEROP: "source:wa-msgr-interop",
      C4G_CURRENT_GROUP_MEMBERS_ENTINTEGRITY:
        "source:c4g_current_group_members_entintegrity",
      CHATROOM: "source:chatroom",
      FB_FEED: "source:fb_feed",
      FB_GROUPS: "source:fb_groups",
      FB_INBOX: "source:messaging_inbox_in_blue",
      FB_JOINABLE_VIDEO_CHATS: "source:fb_joinable_video_chats",
      FB_MENTIONS_MESSENGER_SHARING: "source:fb_mentions_messenger_sharing",
      FB_PAGE: "source:fb_page",
      FB_PROFILE: "source:fb_profile",
      FB_SEARCH_NULLSTATE_GLOBAL: "source:fb_search_nullstate_global",
      FB_SEARCH: "source:fb_search",
      FB_STORY: "source:fb_story",
      FB_STATUS: "source:fb_status",
      FB_TOP_OF_FEED_UNIT: "source:fb_top_of_feed_unit",
      FEED: "source:feed",
      MIB_NOTIFICATION: "source:mib_notification",
      KOTOTORO: "source:kototoro",
      SHARESHEET: "source:sharesheet",
      UFI: "source:ufi",
      ROOMS_INVITE: "source:rooms_invite",
      IG_ROOMS: "source:ig_rooms",
      FRIENDS_HOME: "source:friends_home",
      FRIENDS_HOME_SENDER_SIDE_POST_ACCEPT:
        "source:friends_home:sender_side_post_accept",
      NPE_WHALE: "source:npe_whale",
      NPE_POUTINE: "source:npe_poutine",
      NPE_HOBBI: "source:npe_hobbi",
      SHOPS_XMA_DOGFOODING: "source:shops_xma_dogfooding",
      SHOPS_QA: "source:shops_qa",
      CHAT_FOR_ROOM: "source:chat_for_room",
      WORK_AUTOMATION: "source:work_automation",
      WORK_ROOM_INCALL_CHAT: "source:work_room_incall_chat",
      MESSENGER_ROOM_INCALL_CHAT: "source:messenger_room_incall_chat",
      SECURITY_ACADEMY_BOT: "source:security_academy_bot",
      VR_MESSENGER: "source:vr_messenger",
      PRODUCT_PICKER: "product_picker",
      STARS_ONBOARDING: "source:stars_onboarding",
      N4M: "source:novi_for_messenger",
      ARMADILLO_WA: "source:armadillo_wa",
      REMEDIATION_PLATFORM: "REMEDIATION_PLATFORM",
      ONLINE_LEARNING_CLASS_CREATION: "source:online_learning_class_creation",
      ONLINE_LEARNING_CLASS_GOING: "source:online_learning_class_going",
      ONLINE_LEARNING_CLASS_ADMIN_SYNC:
        "source:online_learning_class_admin_sync",
      PORTAL_CONTACT_GROUP: "source:portal_contact_group",
      CAREER_CHAT_THREAD: "source:career_chat_thread",
      CUSTOMER_DATA_BIZ_TRANSACTIONAL_UPDATES:
        "source:biz_messaging:transactional_updates",
      THREAD_HISTORY_TRUNCATION: "source:thread_history_truncation",
      SERVICEFRIEND: "source:servicefriend",
      FINANCIAL_INTEGRITY_CORRESPONDENCE_FRAMEWORK:
        "source:financial_integrity_correspondence_framework",
      MIB_RTC_CALL_XMA: "source:mib_rtc_call_xma",
      SUPPORT_BOT: "source:support_bot",
      CHECKBOX_PLUGIN_MARKETING_OPT_IN:
        "source:checkbox_plugin_marketing_opt_in",
      CHECKBOX_PLUGIN_PROMOTIONAL_OPT_IN:
        "source:checkbox_plugin_promotional_opt_in",
      BUSINESS_SUPPORT_MESSAGING: "source:business_support_messaging",
      LIVE_SHOPPING_MESSAGING_ORDER: "source:live_shopping_messaging_order",
      HORIZON_SHARING: "source:horizon_sharing",
      COMMUNITY_CHATS_IMPLICIT_AUTO_JOIN:
        "source:community_chats_implicit_auto_join",
      COMMUNITY_CHATS_CONTENT_VISIBILITY_DISCLAIMER:
        "source:community_chats_content_visibility_disclaimer",
      SUBSCRIPTIONS: "source:subscriptions",
      PRIVACY_PORTAL_BOT: "source:privacy_portal_bot",
      MESSAGING_OFFER_ONE_WAY: "source:messaging_offer_one_way",
      MESSENGER_PUBLIC_CHATS: "source:messenger_public_chats",
      COMMENT_PRIVATE_MESSAGE: "source:comment:private_message",
      COMMENT_IN_THREAD_NOTIFICATION: "source:comment:in_thread_notification",
      COMMUNITY_CHAT_PARTICIPANT_VALIDATION: "source:cm:participant_validation",
    });
    f["default"] = a;
  },
  66
);
__d(
  "MessagingTagUtils",
  ["MercurySourceType", "MessagingTagConstants"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set(Object.values(c("MercurySourceType")));
    function a(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (h.has(c)) return c;
      }
      return "source:unknown";
    }
    function i(a) {
      for (var b = 0; b < a.length; b++) {
        var d = a[b];
        d = d.split(c("MessagingTagConstants").app_id_root);
        if (d.length > 1) return d[1].trim();
      }
      return null;
    }
    function b(a, b) {
      var d = [],
        e = i(a);
      e &&
        c("MessagingTagConstants").orca_app_ids.indexOf(e) !== -1 &&
        d.push("source:messenger");
      c("MessagingTagConstants").chat_sources.indexOf(b) !== -1 &&
        d.push("source:chat");
      c("MessagingTagConstants").email_source === b && d.push("source:email");
      c("MessagingTagConstants").mobile_sources.indexOf(b) !== -1 &&
        d.push("source:mobile");
      a.indexOf("source:workchat:desktop") !== -1 &&
        d.push("source:workchat:desktop");
      return d;
    }
    g.getSourceFromTags = a;
    g.getSourceTags = b;
  },
  98
);
__d(
  "P2PPaymentLogMessageSubtype",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      SENT_IN_GROUP: "sent_in_group",
      CANCELED_SENDER_RISK: "canceled_sender_risk",
      CANCELED_DECLINED: "canceled_declined",
      CANCELED_RECIPIENT_RISK: "canceled_recipient_risk",
      CANCELED_EXPIRED: "canceled_expired",
      CANCELED_SAME_CARD: "canceled_same_card",
      CANCELED_CUSTOMER_SERVICE: "canceled_customer_service",
      CANCELED_CHARGEBACK: "canceled_chargeback",
      CANCELED_SYSTEM_FAIL: "canceled_system_fail",
      REQUEST_CANCELED_BY_REQUESTER: "request_canceled_by_requester",
      REQUEST_DECLINED_BY_REQUESTEE: "request_declined_by_requestee",
      REQUEST_EXPIRED: "request_expired",
      REQUEST_REMINDER: "request_reminder",
      MONEY_RAIN_GAME_ENTRY_POINT: "money_rain_game_entry_point",
    });
    f["default"] = a;
  },
  66
);
__d(
  "MessengerMessageTransformer.bs",
  [
    "CurrentUser",
    "FBIDCheck",
    "InstantGameUpdateXMATUpdateType",
    "MNCommerceMessageType",
    "MercuryIDs",
    "MessageUnsendabilityStatus.bs",
    "MessagingGenericAdminTextType",
    "MessagingTagUtils",
    "MessengerAttachmentTransformer.bs",
    "P2PPaymentLogMessageSubtype",
    "bs_caml_format",
    "bs_caml_option",
    "bs_js_dict",
    "bs_js_null_undefined",
    "getByPath",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      a = a.blob_attachments;
      var b = [];
      a == null ||
        a.forEach(function (a) {
          if (a.__typename === "MessageImage") {
            b.push({
              _0: {
                attribution_app: a.attribution_app,
                attribution_metadata: a.attribution_metadata,
                blurred_image_uri: a.blurred_image_uri,
                filename: a.filename,
                id: a.id,
                large_preview: a.large_preview,
                legacy_attachment_id: a.legacy_attachment_id,
                original_dimensions: a.original_dimensions,
                original_extension: a.original_extension,
                photo_encodings: a.photo_encodings,
                preview: a.preview,
                render_as_sticker: a.render_as_sticker,
                thumbnail: a.thumbnail,
              },
              TAG: 0,
            });
            return;
          } else if (a.__typename === "MessageAnimatedImage") {
            b.push({
              _0: {
                animated_image: a.animated_image,
                attribution_app: a.attribution_app,
                attribution_metadata: a.attribution_metadata,
                filename: a.filename,
                legacy_attachment_id: a.legacy_attachment_id,
                original_dimensions: a.original_dimensions,
                preview_image: a.preview_image,
                title: a.animated_image_caption,
              },
              TAG: 1,
            });
            return;
          } else if (a.__typename === "MessageAudio") {
            b.push({
              _0: {
                attribution_app: a.attribution_app,
                attribution_metadata: a.attribution_metadata,
                audio_type: a.audio_type,
                filename: a.filename,
                is_voicemail: a.is_voicemail,
                playable_duration_in_ms: a.playable_duration_in_ms,
                playable_url: a.playable_url,
                url_shimhash: a.url_shimhash,
                url_skipshim: a.url_skipshim,
              },
              TAG: 2,
            });
            return;
          } else if (a.__typename === "MessageVideo") {
            b.push({
              _0: {
                attribution_app: a.attribution_app,
                attribution_metadata: a.attribution_metadata,
                chat_image: a.chat_image,
                filename: a.filename,
                inbox_image: a.inbox_image,
                large_image: a.large_image,
                legacy_attachment_id: a.legacy_attachment_id,
                original_dimensions: a.original_dimensions,
                playable_duration_in_ms: a.playable_duration_in_ms,
                playable_url: a.playable_url,
                video_type: a.video_type,
              },
              TAG: 3,
            });
            return;
          } else if (a.__typename === "MessageFile") {
            b.push({
              _0: {
                attribution_app: a.attribution_app,
                attribution_metadata: a.attribution_metadata,
                content_type: a.content_type,
                filename: a.filename,
                is_malicious: a.is_malicious,
                message_file_fbid: a.message_file_fbid,
                mimetype: a.mimetype,
                preview: a.preview,
                preview_url: a.preview_url,
                url: a.url,
                url_shimhash: a.url_shimhash,
                url_skipshim: a.url_skipshim,
              },
              TAG: 4,
            });
            return;
          } else return;
        });
      return b;
    }
    function i(a, b, c) {
      var e = b.call_capture_attachments;
      if (e == null) return [];
      else
        return d("MessengerAttachmentTransformer.bs").transformAttachment(
          a,
          {
            blob_attachments: h({
              blob_attachments: e.edges.map(function (a) {
                return a.node;
              }),
            }),
            extensible_attachment: null,
            sticker: null,
          },
          b.message_id,
          c
        );
    }
    function j(a, b, d, e, f) {
      if (b.__typename === "GroupPollExtensibleMessageAdminText") {
        var g = b.question,
          h;
        if (g == null) h = [{}, null];
        else {
          var j = Object.assign({}, g);
          Object.assign(j, {
            options: g.options.nodes.map(function (a) {
              var b = Object.assign({}, a);
              return Object.assign(b, {
                total_count: a.voters.nodes.length,
                voters: a.voters.nodes.map(function (a) {
                  return a.id;
                }),
              });
            }),
            total_count: b.total_count,
          });
          h = [j, g.id];
        }
        j = {
          message_type: c("bs_js_null_undefined").fromOption(
            c("bs_js_dict").get(c("MessagingGenericAdminTextType"), d)
          ),
          untypedData: {
            event_type: b.event_type.toLowerCase(),
            question_id: h[1],
            question_json: c("bs_js_null_undefined").fromOption(
              JSON.stringify(h[0])
            ),
          },
        };
      } else if (b.__typename === "InstantGameUpdateExtensibleMessageAdminText")
        j = {
          message_type: c("bs_js_null_undefined").fromOption(
            c("bs_js_dict").get(c("MessagingGenericAdminTextType"), d)
          ),
          untypedData: {
            collapsed_text: b.collapsed_text,
            cta_title: c("getByPath")(b, [
              "instant_game_update_data",
              "cta_title",
            ]),
            cta_url: c("getByPath")(b, ["instant_game_update_data", "cta_url"]),
            custom_image_url: c("getByPath")(b, [
              "instant_game_update_data",
              "photo",
              "image",
              "uri",
            ]),
            expanded_text: b.expanded_text,
            game_id: c("getByPath")(b, ["game", "id"]),
            leaderboard_json: b.leaderboard_json,
            template: c("getByPath")(b, [
              "instant_game_update_data",
              "template",
            ]),
            update_type: c("bs_js_null_undefined").fromOption(
              c("bs_js_dict").get(
                c("InstantGameUpdateXMATUpdateType"),
                b.update_type
              )
            ),
          },
        };
      else if (b.__typename === "MessengerAdContextAdminText")
        j = {
          message_type: c("bs_js_null_undefined").fromOption(
            c("bs_js_dict").get(c("MessagingGenericAdminTextType"), d)
          ),
          untypedData: { ad_url: b.ad_url },
        };
      else if (b.__typename === "AdExtensibleMessageAdminText")
        j = {
          message_type: c("bs_js_null_undefined").fromOption(
            c("bs_js_dict").get(c("MessagingGenericAdminTextType"), d)
          ),
          untypedData: {
            ad_client_token: b.ad_client_token,
            ad_id: b.ad_id,
            ad_preferences_link: b.ad_preferences_link,
            ad_properties: b.ad_properties,
          },
        };
      else if (b.__typename === "MessengerCallLogExtensibleMessageAdminText")
        j = {
          message_type: c("bs_js_null_undefined").fromOption(
            c("bs_js_dict").get(c("MessagingGenericAdminTextType"), d)
          ),
          untypedData: Object.assign(Object.assign({}, b), {
            call_capture_attachments: i(a, b, f),
          }),
        };
      else if (
        b.__typename === "ThemeColorExtensibleMessageAdminText" ||
        b.__typename === "ThreadIconExtensibleMessageAdminText" ||
        b.__typename === "ThreadNicknameExtensibleMessageAdminText" ||
        b.__typename === "AcceptPendingThreadExtensibleMessageAdminText" ||
        b.__typename === "AddContactExtensibleMessageAdminText" ||
        b.__typename === "RtcCallLogExtensibleMessageAdminText" ||
        b.__typename === "GameScoreExtensibleMessageAdminText" ||
        b.__typename === "ConfirmFriendRequestExtensibleMessageAdminText" ||
        b.__typename === "MessengerGrowthGenericExtensibleMessageAdminText" ||
        b.__typename === "PartiesInviteExtensibleMessageAdminText" ||
        b.__typename === "AppointmentReminderExtensibleMessageAdminText" ||
        b.__typename === "LinkCTAExtensibleMessageAdminText" ||
        b.__typename === "MessengerLiveChatPluginURLUpdateAdminText" ||
        b.__typename === "MessengerLiveChatPluginFBUserStartChatAdminText" ||
        b.__typename === "MessengerLiveChatPluginGuestUserStartChatAdminText" ||
        b.__typename === "BizInboxCSATSurveyCustomerSubmitNotifyAdminText" ||
        b.__typename ===
          "GraphQLServicesAppointmentsOptOutExtensibleMessageAdminText" ||
        b.__typename === "ServicesLeadGenSurveyExtensibleMessageAdminText" ||
        b.__typename ===
          "ServicesLeadGenSurveyEditExtensibleMessageAdminText" ||
        b.__typename ===
          "MessengerIcebreakerVoteCastExtensibleMessageAdminText" ||
        b.__typename === "PagesMarkAsPaidExtensibleMessageAdminText" ||
        b.__typename === "PagesMarkAsPaidNewExtensibleMessageAdminText" ||
        b.__typename === "WorkBotInstalledExtensibleMessageAdminText" ||
        b.__typename === "WorkChatReminderLinkCTAExtensibleMessageAdminText" ||
        b.__typename === "PageThreadActionSystemAddDetailsXMAT" ||
        b.__typename === "MagicWordsExtensibleMessageAdminText" ||
        b.__typename === "NotificationMessagesAdminText" ||
        b.__typename === "PostSharedFromGroupExtensibleMessageAdminText" ||
        b.__typename === "BizInboxFormBuilderSubmitNotifyAdminText" ||
        b.__typename ===
          "InstantGameBotMessageSubscriptionManagementAdminText" ||
        b.__typename === "InstantGameCustomUpdateMuteManagementAdminText"
      )
        j = {
          message_type: c("bs_js_null_undefined").fromOption(
            c("bs_js_dict").get(c("MessagingGenericAdminTextType"), d)
          ),
          untypedData: Object.assign({}, b),
        };
      else if (
        b.__typename === "LightweightEventCreateExtensibleMessageAdminText" ||
        b.__typename === "LightweightEventDeleteExtensibleMessageAdminText" ||
        b.__typename ===
          "LightweightEventNotifyBeforeEventExtensibleMessageAdminText" ||
        b.__typename === "LightweightEventNotifyExtensibleMessageAdminText" ||
        b.__typename === "LightweightEventUpdateExtensibleMessageAdminText" ||
        b.__typename ===
          "LightweightEventUpdateLocationExtensibleMessageAdminText" ||
        b.__typename ===
          "LightweightEventUpdateTimeExtensibleMessageAdminText" ||
        b.__typename ===
          "LightweightEventUpdateTitleExtensibleMessageAdminText" ||
        b.__typename === "LightweightEventRSVPExtensibleMessageAdminText"
      ) {
        g = b.event_reminder;
        if (g == null) h = void 0;
        else {
          a = g.lightweight_event_creator;
          f = a == null ? void 0 : a.id;
          a = g.location_page;
          a = a == null ? void 0 : a.id;
          var k = g.timezone_id;
          k = k == null ? void 0 : k.timezone;
          var l = g.location_coordinates;
          l = l == null ? { latitude: void 0, longitude: void 0 } : l;
          var m = g.event_reminder_members;
          m = m == null ? void 0 : m.edges;
          h = {
            event_creator_id: f,
            event_end_time: g.end_time,
            event_id: g.id,
            event_location_id: a,
            event_location_name: g.location_name,
            event_seconds_to_notify_before: g.seconds_to_notify_before,
            event_time: g.time,
            event_timezone: k,
            event_title: g.event_title,
            event_track_rsvp: g.allows_rsvp,
            event_type: g.lightweight_event_type,
            guest_id: b.guest_id,
            guest_state_list: m,
            guest_status: b.guest_status,
            latitude: l.latitude,
            longitude: l.longitude,
          };
        }
        j = {
          message_type: c("bs_js_null_undefined").fromOption(
            c("bs_js_dict").get(c("MessagingGenericAdminTextType"), d)
          ),
          untypedData: h,
        };
      } else
        j =
          b.__typename === "AdReplyMessageAdminText"
            ? {
                message_type: c("bs_js_null_undefined").fromOption(
                  c("bs_js_dict").get(c("MessagingGenericAdminTextType"), d)
                ),
                untypedData: {
                  ad_url: b.ad_url,
                  results_url: b.results_url,
                  should_show_url: b.should_show_url,
                },
              }
            : {
                message_type: c("bs_js_null_undefined").fromOption(
                  c("bs_js_dict").get(c("MessagingGenericAdminTextType"), d)
                ),
                untypedData: void 0,
              };
      return {
        log_message_body: e,
        log_message_data: j,
        log_message_type: "log:generic-admin-text",
      };
    }
    function k(a) {
      return a.map(function (a) {
        if (a === "p2p_transfer") return "orion";
        else if (a === "p2p_payment_request") return "orion_request";
        else return a;
      });
    }
    function l(a) {
      var b = a.target,
        c;
      if (b == null) c = null;
      else if (b.__typename === "CrisisListing")
        c = {
          _0: {
            listing_category: b.listing_category,
            listing_type: b.listing_type,
            map_image: b.map_image,
          },
          TAG: 0,
        };
      else if (b.__typename === "MoneyTransfer")
        c = {
          _0: {
            bubble_view: b.bubble_view,
            receiver: b.receiver,
            sender: b.sender,
            transfer_id: b.transfer_id,
          },
          TAG: 1,
        };
      else if (b.__typename === "PeerToPeerTransfer")
        c = {
          _0: {
            amount_fb_discount: b.amount_fb_discount,
            bubble_view: b.bubble_view,
            completedTime: b.completedTime,
            creationTime: b.creationTime,
            currency_amount: b.currency_amount,
            funds_availability: b.funds_availability,
            group_thread_fbid: b.group_thread_fbid,
            id: b.id,
            memo_text: b.memo_text,
            platform_item: b.platform_item,
            receiver_profile: b.receiver_profile,
            sender: b.sender,
            status_description: b.status_description,
            transaction_amount: b.transaction_amount,
            transfer_context: b.transfer_context,
            transfer_id: b.transfer_id,
            transfer_status: b.transfer_status,
            updatedTime: b.updatedTime,
          },
          TAG: 2,
        };
      else if (b.__typename === "PeerToPeerPaymentRequest")
        c = {
          _0: {
            amount: b.amount,
            bubble_view: b.bubble_view,
            creation_time: b.creation_time,
            group_thread_fbid: b.group_thread_fbid,
            id: b.id,
            individual_requests: b.individual_requests,
            memo_text: b.memo_text,
            request_status: b.request_status,
            request_theme: b.request_theme,
            requestee: b.requestee,
            requester: b.requester,
            status_description: b.status_description,
            transaction_amount: b.transaction_amount,
            transfer: b.transfer,
            updated_time: b.updated_time,
          },
          TAG: 3,
        };
      else if (b.__typename === "PaymentPlatformAttachment")
        c = {
          _0: {
            buyer_name: b.buyer_name,
            click_action: b.click_action,
            components: b.components,
            invoicer_id: b.invoicer_id,
            is_last_attachment: b.is_last_attachment,
            is_viewer_seller: b.is_viewer_seller,
            item_list: b.item_list,
            payment_call_to_actions: b.payment_call_to_actions,
            payment_modules_client: b.payment_modules_client,
            payment_snippet: b.payment_snippet,
            payment_status_icon: b.payment_status_icon,
            payment_sub_statuses: b.payment_sub_statuses,
            payment_total: b.payment_total,
            product_detail: b.product_detail,
            should_show_new_xma: b.should_show_new_xma,
            summary_action: b.summary_action,
            user_facing_payment_status: b.user_facing_payment_status,
          },
          TAG: 4,
        };
      else if (b.__typename === "MessengerRetailPromotion")
        c = {
          _0: {
            call_to_actions: b.call_to_actions,
            message: b.message,
            promotion_items: b.promotion_items,
          },
          TAG: 5,
        };
      else if (b.__typename === "MessengerBusinessMessage")
        c = {
          _0: {
            business_items: b.business_items,
            call_to_actions: b.call_to_actions,
            message: b.message,
          },
          TAG: 6,
        };
      else if (b.__typename === "Video")
        c = { _0: { video_id: b.video_id }, TAG: 7 };
      else if (b.__typename === "PagesPlatformLeadGenInfo")
        c = { _0: { field_data_list: b.field_data_list }, TAG: 8 };
      else if (b.__typename === "MessageLiveLocation")
        c = {
          _0: {
            coordinate: b.coordinate,
            expiration_time: b.expiration_time,
            is_expired: b.is_expired,
            live_location_id: b.live_location_id,
            location_title: b.location_title,
            sender: b.sender,
            sender_destination: b.sender_destination,
            stop_reason: b.stop_reason,
          },
          TAG: 9,
        };
      else if (b.__typename === "QuickInvite")
        c = {
          _0: {
            id: b.id,
            invite_recipient: b.invite_recipient,
            invite_sender: b.invite_sender,
          },
          TAG: 10,
        };
      else if (b.__typename === "PagesPlatformBookingMessage")
        c = {
          _0: {
            id: b.id,
            ls_xma_subtitle: b.ls_xma_subtitle,
            ls_xma_title: b.ls_xma_title,
            message_bubble_type: b.message_bubble_type,
            native_component_flow_request: b.native_component_flow_request,
            page: b.page,
            user: b.user,
          },
          TAG: 11,
        };
      else if (b.__typename === "ServicesAppointmentAvailability")
        c = {
          _0: {
            consumer: b.consumer,
            formatted_available_time_ranges: b.formatted_available_time_ranges,
            has_booking_request_created: b.has_booking_request_created,
            id: b.id,
            page: b.page,
          },
          TAG: 12,
        };
      else if (b.__typename === "ServicesGenericAdminText")
        c = { _0: { id: b.id }, TAG: 13 };
      else if (b.__typename === "GenieMessage")
        c = {
          _0: {
            genie_sender: b.genie_sender,
            story_attachment: b.story_attachment,
          },
          TAG: 14,
        };
      else if (b.__typename === "Event")
        c = {
          _0: {
            canViewerJoin: b.canViewerJoin,
            canViewerWatch: b.canViewerWatch,
            connection_style: b.connection_style,
            event_place: b.event_place,
            eventID: b.eventID,
            guestStatus: b.guestStatus,
            name: b.name,
            profile_picture: b.profile_picture,
            social_context: b.social_context,
            start_timestamp: b.start_timestamp,
            timeString: b.timeString,
            watchStatus: b.watchStatus,
          },
          TAG: 15,
        };
      else if (b.__typename === "ExternalSong")
        c = {
          _0: {
            application_name: b.application_name,
            artist_names: b.artist_names,
            audio_url: b.audio_url,
            duration_ms: b.duration_ms,
            music_title: b.music_title,
          },
          TAG: 16,
        };
      else if (b.__typename === "LightweightAction")
        c = { _0: { lwa_state: b.lwa_state, lwa_type: b.lwa_type }, TAG: 17 };
      else if (b.__typename === "MessengerRetailItem")
        c = {
          _0: {
            call_to_actions: b.call_to_actions,
            default_action: b.default_action,
            desc: b.desc,
            first_metaline: b.first_metaline,
            id: b.id,
            image_aspect_ratio: b.image_aspect_ratio,
            item_url: b.item_url,
            name: b.name,
            second_metaline: b.second_metaline,
            source: b.source,
            third_metaline: b.third_metaline,
            thumb_url: b.thumb_url,
          },
          TAG: 18,
        };
      else if (b.__typename === "AgentItemSuggestion")
        c = {
          _0: {
            desc: b.desc,
            id: b.id,
            merchant_name: b.merchant_name,
            name: b.name,
            payment: b.payment,
            price_amount: b.price_amount,
            price_currency: b.price_currency,
            raw_amount: b.raw_amount,
            target_url: b.target_url,
            thumb_url: b.thumb_url,
            total_cost: b.total_cost,
          },
          TAG: 19,
        };
      else if (
        b.__typename === "FundraiserPersonToCharity" ||
        b.__typename === "FundraiserPersonForPerson"
      ) {
        var d = b.focused_cover_photo,
          e = b.fundraiser_detailed_progress_text,
          f = b.fundraiser_subtitle_text;
        c = {
          _0: {
            canDonate: b.can_donate,
            focusedCoverPhoto:
              d == null
                ? null
                : {
                    data: {
                      height: d.photo.image.height,
                      width: d.photo.image.width,
                    },
                    src: d.photo.image.uri,
                  },
            fundraiserDetailedProgressText: e == null ? null : e.text,
            fundraiserID: b.id,
            fundraiserSubtitleText: f == null ? null : f.text,
            hasViewerDonated: b.has_viewer_donated,
          },
          TAG: 20,
        };
      } else
        c =
          b.__typename === "MessengerRetailReceipt"
            ? {
                _0: {
                  account_holder_name: b.account_holder_name,
                  adjustments: b.retail_adjustments,
                  cancellation_url: b.cancellation_url,
                  items: b.retail_items,
                  merchant_name: b.merchant_name,
                  messenger_commerce_bubble_type: b.bubble_type,
                  order_id: b.receipt_id,
                  order_time: b.order_time_for_display,
                  order_url: b.receipt_url,
                  partner_logo: b.partner_log,
                  payment_method: b.order_payment_method,
                  receipt_id: b.id,
                  recipient_name: b.recipient_name,
                  shipping_cost: b.shipping_cost,
                  shipping_method: b.shipping_method,
                  status: b.status,
                  structured_address: b.structured_address,
                  subtotal: b.subtotal,
                  total_cost: b.total,
                  total_tax: b.tax,
                },
                TAG: 21,
              }
            : b.__typename === "JobApplication"
            ? { _0: { id: b.id }, TAG: 22 }
            : b.__typename === "GroupCommerceProductItem"
            ? {
                _0: {
                  formatted_price: b.formatted_price,
                  group_commerce_item_description:
                    b.group_commerce_item_description,
                  group_commerce_item_seller: b.group_commerce_item_seller,
                  group_commerce_item_title: b.group_commerce_item_title,
                  primary_photo: b.primary_photo,
                  url: b.url,
                },
                TAG: 23,
              }
            : b.__typename === "Page"
            ? {
                _0: {
                  address: b.address,
                  cover_photo: b.cover_photo,
                  id: b.id,
                  location: b.location,
                  name: b.name,
                  overall_star_rating: b.overall_star_rating,
                  price_range_description: b.price_range_description,
                  top_category_name: b.top_category_name,
                },
                TAG: 24,
              }
            : b.__typename === "MessengerEventReminder"
            ? {
                _0: {
                  event_title: b.event_title,
                  is_active: b.is_active,
                  time: b.time,
                },
                TAG: 25,
              }
            : b.__typename === "AirlineBoardingPassCollectionMessageAttachment"
            ? {
                _0: {
                  boarding_pass_error_title_label:
                    b.boarding_pass_error_title_label,
                  boarding_pass_title_label: b.boarding_pass_title_label,
                  boarding_passes: b.boarding_passes,
                  boarding_time_label: b.boarding_time_label,
                  departure_label: b.departure_label,
                  flight_gate_label: b.flight_gate_label,
                  flight_label: b.flight_label,
                  flight_terminal_label: b.flight_terminal_label,
                  logo: b.logo,
                  message_cta_label: b.message_cta_label,
                  passenger_names_label: b.passenger_names_label,
                  passenger_seat_label: b.passenger_seat_label,
                  share_cta_label: b.share_cta_label,
                  tint_color: b.tint_color,
                  view_boarding_pass_cta_label: b.view_boarding_pass_cta_label,
                },
                TAG: 26,
              }
            : b.__typename === "AirlineCheckInReminderMessageAttachment"
            ? {
                _0: {
                  arrival_time_label: b.arrival_time_label,
                  booking_number_label: b.booking_number_label,
                  checkin_cta_label: b.checkin_cta_label,
                  checkin_url: b.checkin_url,
                  departure_time_label: b.departure_time_label,
                  flight_infos: b.flight_infos,
                  flight_label: b.flight_label,
                  logo: b.logo,
                  pnr_number: b.pnr_number,
                  tint_color: b.tint_color,
                },
                TAG: 27,
              }
            : b.__typename === "AirlineUpdateMessageAttachment"
            ? {
                _0: {
                  arrival_time_label: b.arrival_time_label,
                  booking_number_label: b.booking_number_label,
                  departure_time_label: b.departure_time_label,
                  flight_gate_label: b.flight_gate_label,
                  flight_info: b.flight_info,
                  flight_label: b.flight_label,
                  flight_status_label: b.flight_status_label,
                  hightlighted_labels: b.hightlighted_labels,
                  logo: b.logo,
                  passenger_names_label: b.passenger_names_label,
                  passenger_seat_label: b.passenger_seat_label,
                  pnr_number: b.pnr_number,
                  tint_color: b.tint_color,
                  update_type: b.update_type,
                },
                TAG: 28,
              }
            : b.__typename === "AirlineItineraryMessageAttachment"
            ? {
                _0: {
                  aircraft_type_label: b.aircraft_type_label,
                  arrival_time_label: b.arrival_time_label,
                  base_price_label: b.base_price_label,
                  booking_number_label: b.booking_number_label,
                  cabin_type_label: b.cabin_type_label,
                  confirmation_number: b.confirmation_number,
                  departure_time_label: b.departure_time_label,
                  flight_confirmation_label: b.flight_confirmation_label,
                  flight_date_label: b.flight_date_label,
                  flight_label: b.flight_label,
                  flight_terminal_label: b.flight_terminal_label,
                  formatted_base_price: b.formatted_base_price,
                  formatted_tax: b.formatted_tax,
                  formatted_total: b.formatted_total,
                  itemized_price_infos: b.itemized_price_infos,
                  itinerary_error_title_label: b.itinerary_error_title_label,
                  itinerary_legs: b.itinerary_legs,
                  itinerary_title_label: b.itinerary_title_label,
                  logo: b.logo,
                  passenger_infos: b.passenger_infos,
                  passenger_name_label: b.passenger_name_label,
                  passenger_names_label: b.passenger_names_label,
                  passenger_seat_label: b.passenger_seat_label,
                  pnr_number: b.pnr_number,
                  purchase_summary_label: b.purchase_summary_label,
                  taxes_label: b.taxes_label,
                  tint_color: b.tint_color,
                  total_label: b.total_label,
                  view_details_cta_label: b.view_details_cta_label,
                },
                TAG: 29,
              }
            : b.__typename === "MessengerRetailShipmentTrackingEvent"
            ? {
                _0: {
                  bubble_type: b.bubble_type,
                  id: b.id,
                  messenger_commerce_location: b.messenger_commerce_location,
                  shipment: b.shipment,
                  shipment_tracking_event_type: b.shipment_tracking_event_type,
                  tracking_event_description: b.tracking_event_description,
                  tracking_event_time_for_display:
                    b.tracking_event_time_for_display,
                },
                TAG: 30,
              }
            : b.__typename === "MessengerRetailShipment"
            ? {
                _0: {
                  bubble_type: b.bubble_type,
                  commerce_destination: b.commerce_destination,
                  commerce_origin: b.commerce_origin,
                  estimated_delivery_time_for_display:
                    b.estimated_delivery_time_for_display,
                  id: b.id,
                  receipt: b.receipt,
                  recipient: b.recipient,
                  retail_carrier: b.retail_carrier,
                  retail_shipment_items: b.retail_shipment_items,
                  shipdate_for_display: b.shipdate_for_display,
                  shipment_tracking_events: b.shipment_tracking_events,
                  tracking_number: b.tracking_number,
                },
                TAG: 31,
              }
            : b.__typename === "EventAttendanceConfirmation"
            ? {
                _0: {
                  attendee_answers: b.attendee_answers,
                  event: b.event,
                  id: b.id,
                  num_guests: b.num_guests,
                },
                TAG: 33,
              }
            : b.__typename === "LeadGenDeepLinkData"
            ? {
                _0: {
                  cover_image: b.cover_image,
                  headline: b.headline,
                  id: b.id,
                  name: b.name,
                  page: b.page,
                },
                TAG: 32,
              }
            : b.__typename === "UserLeadGenInfo"
            ? { _0: { field_data: b.field_data, id: b.id }, TAG: 34 }
            : b.__typename === "WECMessageAudio"
            ? {
                _0: {
                  duration: b.duration,
                  extension: b.extension,
                  filename: b.filename,
                  filesize: b.filesize,
                  id: b.id,
                  playable_url: b.playable_url,
                  url_shimhash: b.url_shimhash,
                },
                TAG: 38,
              }
            : b.__typename === "IceBreakerMessageAttachment"
            ? {
                _0: {
                  ad_id: b.ad_id,
                  ice_breaker_messages: b.ice_breaker_messages,
                  ice_breaker_title: b.ice_breaker_title,
                },
                TAG: 35,
              }
            : b.__typename === "WECMessage"
            ? {
                _0: {
                  sender_wec_name: b.sender_wec_name,
                  sender_wec_number: b.sender_wec_number,
                  sender_wec_number_fbid: b.sender_wec_number_fbid,
                  sender_wec_number_formated: b.sender_wec_number_formated,
                  templated_message_body: b.templated_message_body,
                  templated_message_btn1_text: b.templated_message_btn1_text,
                  templated_message_btn1_type: b.templated_message_btn1_type,
                  templated_message_btn2_text: b.templated_message_btn2_text,
                  templated_message_btn2_type: b.templated_message_btn2_type,
                  templated_message_btn3_text: b.templated_message_btn3_text,
                  templated_message_btn3_type: b.templated_message_btn3_type,
                  templated_message_footer: b.templated_message_footer,
                  templated_message_header_media:
                    b.templated_message_header_media,
                  templated_message_header_text:
                    b.templated_message_header_text,
                  templated_message_header_type:
                    b.templated_message_header_type,
                  templated_message_id: b.templated_message_id,
                  templated_message_name: b.templated_message_name,
                  wec_referral_body: b.wec_referral_body,
                  wec_referral_headline: b.wec_referral_headline,
                  wec_referral_media: b.wec_referral_media,
                  wec_referral_media_type: b.wec_referral_media_type,
                  wec_referral_url: b.wec_referral_url,
                },
                TAG: 36,
              }
            : b.__typename === "WECMessageImage"
            ? {
                _0: {
                  extension: b.extension,
                  id: b.id,
                  large_preview: b.large_preview,
                  preview: b.preview,
                },
                TAG: 37,
              }
            : b.__typename === "WECMessageFile"
            ? {
                _0: {
                  extension: b.extension,
                  filesize: b.filesize,
                  id: b.id,
                  is_malicious: b.is_malicious,
                  name: b.name,
                  uri: b.uri,
                },
                TAG: 39,
              }
            : b.__typename === "WECMessageVideo"
            ? {
                _0: {
                  extension: b.extension,
                  filename: b.filename,
                  filesize: b.filesize,
                  height: b.height,
                  id: b.id,
                  playable_url: b.playable_url,
                  url_shimhash: b.url_shimhash,
                  width: b.width,
                },
                TAG: 40,
              }
            : b.__typename === "MontageDirect"
            ? {
                _0: {
                  blob_media: b.blob_media,
                  blob_media_type: b.blob_media_type,
                  image: b.image,
                  is_keep_disabled: b.is_keep_disabled,
                  message_state: b.message_state,
                },
                TAG: 41,
              }
            : b.__typename === "MBirthdayReminderAttachment"
            ? {
                _0: {
                  birthday_date: b.birthday_date,
                  confidence: b.confidence,
                  friend_id: b.friend_id,
                },
                TAG: 42,
              }
            : b.__typename === "MPersonalRemindersList"
            ? {
                _0: {
                  has_more_upcoming_reminders: b.has_more_upcoming_reminders,
                  personal_reminders: b.personal_reminders,
                },
                TAG: 43,
              }
            : b.__typename === "MentorshipMessengerCurriculumStep"
            ? {
                _0: {
                  curriculum_message: b.curriculum_message,
                  id: b.id,
                  mentorship_program: b.mentorship_program,
                  module_name: b.module_name,
                  program_name: b.program_name,
                  prompt: b.prompt,
                  step_count: b.step_count,
                  total_steps: b.total_steps,
                },
                TAG: 44,
              }
            : b.__typename === "MentorshipMessengerDiscussionTopicSet"
            ? { _0: { id: b.id, topics: b.topics }, TAG: 45 }
            : b.__typename === "MentorshipMessengerLeavePrompt"
            ? {
                _0: {
                  id: b.id,
                  mentorship_program: b.mentorship_program,
                  xma_type: b.xma_type,
                },
                TAG: 46,
              }
            : b.__typename === "MentorshipMessengerReminder"
            ? { _0: { id: b.id, xma_type: b.xma_type }, TAG: 47 }
            : b.__typename === "MentorshipMessengerSurvey"
            ? {
                _0: {
                  id: b.id,
                  mentorship_program: b.mentorship_program,
                  xma_disclaimer: b.xma_disclaimer,
                  xma_title: b.xma_title,
                  xma_type: b.xma_type,
                },
                TAG: 48,
              }
            : b.__typename === "MentorshipMessengerProgressTracker"
            ? {
                _0: {
                  id: b.id,
                  xma_body: b.xma_body,
                  xma_title: b.xma_title,
                  xma_type: b.xma_type,
                },
                TAG: 49,
              }
            : b.__typename === "Story"
            ? {
                _0: {
                  actors: b.actors,
                  attached_story: b.attached_story,
                  attachments: b.attachments,
                  creation_time: b.creation_time,
                  description: b.description,
                  feedback: b.feedback,
                  message_richtext: b.message_richtext,
                  post_id: b.post_id,
                  reaction_count_reduced: b.reaction_count_reduced,
                  title: b.title,
                  to: b.to,
                  top_reactions: b.top_reactions,
                },
                TAG: 50,
              }
            : b.__typename === "User"
            ? {
                _0: {
                  cover_photo: b.cover_photo,
                  id: b.id,
                  name: b.name,
                  profile_picture: b.profile_picture,
                  subscribe_status: b.subscribe_status,
                  type: b.__typename,
                  work_info: b.work_info,
                },
                TAG: 51,
              }
            : b.__typename === "Group"
            ? {
                _0: {
                  cover_photo: b.cover_photo,
                  group_general_chat: b.group_general_chat,
                  id: b.id,
                  name: b.name,
                  type: b.__typename,
                  viewer_join_state: b.viewer_join_state,
                  visibility: b.visibility,
                  visibility_sentence: b.visibility_sentence,
                  work_groups_sync_metadata: b.work_groups_sync_metadata,
                },
                TAG: 52,
              }
            : b.__typename === "AppContent"
            ? {
                _0: {
                  app_integration: b.app_integration,
                  attachment_icon: b.app_integration,
                  attachment_type_name: b.attachment_type_name,
                  content_uri: b.content_uri,
                  file_type_category: b.file_type_category,
                  id: b.id,
                  link_preview_additional_data: b.link_preview_additional_data,
                  privacy_status: b.privacy_status,
                  type: b.__typename,
                },
                TAG: 53,
              }
            : b.__typename === "OfferItem"
            ? { _0: { id: b.id, type: b.__typename }, TAG: 54 }
            : b.__typename === "CommerceProductItemShare"
            ? {
                _0: { default_action: b.default_action, type: b.__typename },
                TAG: 55,
              }
            : b.__typename === "PostPurchaseOrderUpdateXma"
            ? {
                _0: {
                  order_id: b.order_id,
                  order_progress: b.order_progress,
                  type: b.__typename,
                },
                TAG: 56,
              }
            : b.__typename === "InThreadMultiphotoItemCTAData"
            ? {
                _0: {
                  action_prefill: b.action_prefill,
                  ad_id: b.ad_id,
                  cta_title: b.cta_title,
                  customer_id: b.customer_id,
                  index: b.index,
                  page_id: b.page_id,
                  reply_image_uri: b.reply_image_uri,
                  type: b.__typename,
                },
                TAG: 57,
              }
            : null;
      return {
        action_links: a.action_links,
        deduplication_key: a.deduplication_key,
        description: a.description,
        media: a.media,
        messaging_attribution: a.messaging_attribution,
        messenger_call_to_actions: a.messenger_call_to_actions,
        messenger_generic_xma_template_extra_info:
          a.messenger_generic_xma_template_extra_info,
        properties: a.properties,
        source: a.source,
        style_list: k(a.style_list),
        target: c,
        title_with_entities: a.title_with_entities,
        url: a.url,
        xma_layout_info: a.xma_layout_info,
      };
    }
    function m(a) {
      var b = l({
        action_links: a.action_links,
        deduplication_key: a.deduplication_key,
        description: a.description,
        media: a.media,
        messaging_attribution: a.messaging_attribution,
        messenger_call_to_actions: a.messenger_call_to_actions,
        messenger_generic_xma_template_extra_info:
          a.messenger_generic_xma_template_extra_info,
        properties: a.properties,
        source: a.source,
        style_list: a.style_list,
        target: a.target,
        title_with_entities: a.title_with_entities,
        url: a.url,
        xma_layout_info: a.xma_layout_info,
      });
      if (b == null) return null;
      a = a.subattachments.map(l);
      return Object.assign({ subattachments: a }, b);
    }
    function n(a) {
      a = a.message;
      if (a == null) return [];
      var b = [];
      a.ranges.forEach(function (a) {
        var c = a.entity;
        if (c == null) return;
        var d = c.id,
          e = c.thread_key;
        if (d == null) {
          if (e == null) return;
          e = e.thread_fbid;
          if (e == null) return;
          var f = c.__typename,
            g;
          switch (f) {
            case "MessengerViewerGroupThread":
              g = "t";
              break;
            case "User":
              g = "p";
              break;
            default:
              g = "n";
          }
          b.push({ id: e, length: a.length, offset: a.offset, type: g });
          return;
        }
        f = c.__typename;
        var h;
        switch (f) {
          case "MessengerViewerGroupThread":
            h = "t";
            break;
          case "User":
            h = "p";
            break;
          default:
            h = "n";
        }
        b.push({ id: d, length: a.length, offset: a.offset, type: h });
      });
      return b;
    }
    function o(a, b, e, f) {
      var g = {};
      b.message_reactions.forEach(function (a) {
        g[a.user.id] = a.reaction;
      });
      var k = d("FBIDCheck").isUser_deprecated(b.message_sender.id),
        l = k
          ? d("MessagingTagUtils").getSourceFromTags(b.tags_list)
          : "source:unknown";
      k = k ? d("MessagingTagUtils").getSourceTags(b.tags_list, l) : [];
      var p = b.message_id,
        q = e.thread_id,
        r = e.thread_fbid,
        s = e.other_user_fbid;
      s =
        q == null
          ? r == null
            ? s == null
              ? null
              : d("MercuryIDs").getThreadIDFromUserID(s)
            : d("MercuryIDs").getThreadIDFromThreadFBID(r)
          : q;
      r = b.secondary_language_body;
      q = b.tags_list.some(function (a) {
        if (
          a === "action:copy_message" ||
          a === "copy_self_message" ||
          a === "action:copy_attachment"
        )
          return !0;
        else return a === "copy_self_attachment";
      });
      var t = b.commerce_message_type,
        u = b.customizations,
        v = b.error_data,
        w = b.unsent_timestamp_precise;
      w =
        w == null || w === "0"
          ? null
          : c("bs_js_null_undefined").fromOption(
              c("bs_caml_format").caml_float_of_string(w)
            );
      var x = b.replied_to_message,
        y;
      if (x == null) y = null;
      else {
        var z = x.message;
        y =
          z == null
            ? { message: null, status: x.status }
            : {
                message: c("bs_js_null_undefined").fromOption(
                  c("bs_caml_option").some(o(a, z, e, f))
                ),
                status: x.status,
              };
      }
      z = b.unsender;
      x = {
        action_type:
          b.__typename === "UserMessage"
            ? "ma-type:user-generated-message"
            : "ma-type:log-message",
        ad_client_token: b.ad_client_token,
        ad_id: b.ad_id,
        attachments: null,
        author: d("MercuryIDs").getParticipantIDFromUserID(b.message_sender.id),
        author_email: b.message_sender.email,
        body: null,
        commerce_message_type:
          t == null
            ? null
            : c("bs_js_null_undefined").fromOption(
                c("bs_js_dict").get(c("MNCommerceMessageType"), t)
              ),
        creator_info: null,
        customizations: u == null ? [] : u,
        ephemeral_ttl_mode: b.ttl,
        error_data: v == null ? null : { description: v.description },
        folder: e.folder,
        has_attachment: null,
        is_filtered_content: b.tags_list.indexOf("filtered_content") !== -1,
        is_filtered_content_account:
          b.tags_list.indexOf("filtered_content_account") !== -1,
        is_filtered_content_bh:
          b.tags_list.indexOf("filtered_content_bh") !== -1,
        is_filtered_content_invalid_app:
          b.tags_list.indexOf("filtered_content_invalid_app") !== -1,
        is_filtered_content_quasar:
          b.tags_list.indexOf("filtered_content_quasar") !== -1,
        is_forwarded: q,
        is_one_way_sent: b.tags_list.some(function (a) {
          return a === "one_way_message";
        }),
        is_sponsored: b.is_sponsored,
        is_spoof_warning:
          b.tags_list.indexOf("MTA:dmarc:fail") !== -1 ||
          b.tags_list.indexOf("spam:spoofing") !== -1 ||
          b.tags_list.indexOf("MTA:spoof_warning") !== -1,
        is_unread: b.unread,
        log_message_body: null,
        log_message_data: null,
        log_message_type: null,
        m_suggestions: b.m_suggestions,
        message_id: p,
        message_source: b.message_source_data,
        message_unsendability_status: d(
          "MessageUnsendabilityStatus.bs"
        ).fromNullableString(b.message_unsendability_status),
        meta_ranges: null,
        montage_reply_data: b.montage_reply_data,
        offline_threading_id: b.offline_threading_id,
        other_user_fbid: e.other_user_fbid,
        platform_xmd: b.platform_xmd_encoded,
        preview_attachments: null,
        profile_ranges: n(b),
        ranges: null,
        raw_attachments: null,
        reactions: g,
        removed_timestamp: w,
        replied_to_message: y,
        secondary_language_body: r,
        skip_bump_thread: !1,
        source: l,
        source_tags: k,
        status: null,
        sticker_id: null,
        subject: null,
        tags: b.tags_list,
        thread_fbid: e.thread_fbid,
        thread_id: s,
        threading_id: null,
        timestamp: c("bs_caml_format").caml_float_of_string(
          b.timestamp_precise
        ),
        unsender:
          z == null
            ? null
            : {
                id: d("MercuryIDs").getParticipantIDFromUserID(
                  z.messaging_actor.id
                ),
                name: z.messaging_actor.name,
                short_name: z.messaging_actor.short_name,
              },
        verse_group_role_xmd: b.verse_group_role_xmd,
      };
      if (b.__typename === "UserMessage") {
        t = h(b);
        u = b.extensible_attachment;
        if (u == null) v = null;
        else {
          q = u.genie_attachment;
          if (q == null) w = null;
          else {
            y = q.genie_message;
            if (y == null) r = null;
            else {
              l = y.story_attachment;
              r = { story_attachment: l == null ? null : m(l) };
            }
            w = { genie_message: r };
          }
          k = u.story_attachment;
          v = {
            genie_attachment: w,
            legacy_attachment_id: u.legacy_attachment_id,
            story_attachment: k == null ? null : m(k),
          };
        }
        s = d("MessengerAttachmentTransformer.bs").transformAttachment(
          a,
          { blob_attachments: t, extensible_attachment: v, sticker: b.sticker },
          p,
          f
        );
        z = b.message;
        q = b.page_admin_sender;
        Object.assign(x, {
          attachments: s,
          body: z == null ? null : z.text,
          creator_info:
            q == null
              ? null
              : {
                  creatorID: q.admin_id,
                  creatorName: q.name,
                  creatorType: q.sender_type,
                  labelType: q.label_type,
                  pageID: q.page_id,
                  profileURI: q.profile_uri,
                },
          has_attachment: s.length > 0,
          meta_ranges: b.meta_ranges.map(function (a) {
            return babelHelpers["extends"]({}, a, { data: JSON.parse(a.data) });
          }),
          ranges: void 0,
          raw_attachments: null,
          subject: null,
        });
      } else if (
        b.__typename === "VoiceCallMessage" ||
        b.__typename === "VideoCallMessage"
      ) {
        y = b.__typename;
        l = y === "VoiceCallMessage" ? "log:phone-call" : "log:video-call";
        r = b.message_sender.id;
        w = e.other_user_fbid;
        u =
          w == null
            ? null
            : d("MercuryIDs").getParticipantIDFromUserID(
                r === w ? c("CurrentUser").getID() : w
              );
        k = b.answered;
        Object.assign(x, {
          log_message_body: b.snippet,
          log_message_data: {
            answered: k == null ? !1 : k,
            call_capture_attachments: i(a, b, f),
            callee: u,
            caller: d("MercuryIDs").getParticipantIDFromUserID(r),
          },
          log_message_type: l,
        });
      } else if (b.__typename === "ThreadNameMessage")
        Object.assign(x, {
          log_message_body: b.snippet,
          log_message_data: { name: b.thread_name },
          log_message_type: "log:thread-name",
        });
      else if (b.__typename === "ThreadImageMessage") {
        t = b.image_with_metadata;
        if (t == null) v = null;
        else {
          p = t.preview;
          v = {
            metadata: {
              dimensions:
                String(t.original_dimensions.x) +
                ("," + String(t.original_dimensions.y)),
              fbid: t.legacy_attachment_id,
            },
            preview_url: p == null ? null : p.uri,
          };
        }
        Object.assign(x, {
          log_message_body: b.snippet,
          log_message_data: { image: v },
          log_message_type: "log:thread-image",
        });
      } else if (b.__typename === "ParticipantsAddedMessage") {
        z = b.participants_added;
        Object.assign(x, {
          log_message_body: b.snippet,
          log_message_data: {
            added_participants:
              z == null
                ? []
                : z.map(function (a) {
                    return d("MercuryIDs").getParticipantIDFromUserID(a.id);
                  }),
          },
          log_message_type: "log:subscribe",
        });
      } else if (b.__typename === "ParticipantLeftMessage") {
        q = b.participants_removed;
        Object.assign(x, {
          log_message_body: b.snippet,
          log_message_data: {
            removed_participants:
              q == null
                ? []
                : q.map(function (a) {
                    return d("MercuryIDs").getParticipantIDFromUserID(a.id);
                  }),
          },
          log_message_type: "log:unsubscribe",
        });
      } else if (b.__typename === "GenericAdminTextMessage") {
        s = b.extensible_message_admin_text;
        y = b.extensible_message_admin_text_type;
        s == null
          ? y == null ||
            Object.assign(x, {
              log_message_body: b.snippet,
              log_message_data: {
                message_type: c("bs_js_null_undefined").fromOption(
                  c("bs_js_dict").get(c("MessagingGenericAdminTextType"), y)
                ),
                untypedData: void 0,
              },
              log_message_type: "log:generic-admin-text",
            })
          : y == null || Object.assign(x, j(a, s, y, b.snippet, f));
      } else if (
        b.__typename === "P2PPaymentRequestMessage" ||
        b.__typename === "P2PPaymentMessage"
      ) {
        e = b.amount;
        w = b.p2p_receiver;
        k = b.p2p_sender;
        u = b.message_type;
        Object.assign(x, {
          log_message_body: b.snippet,
          log_message_data: {
            formattedAmount: e == null ? null : e.formatted,
            receiverId:
              w == null
                ? null
                : d("MercuryIDs").getParticipantIDFromUserID(w.id),
            senderId:
              k == null
                ? null
                : d("MercuryIDs").getParticipantIDFromUserID(k.id),
            subtype:
              u == null
                ? null
                : c("bs_js_null_undefined").fromOption(
                    c("bs_js_dict").get(c("P2PPaymentLogMessageSubtype"), u)
                  ),
            transfer_id: b.transfer_id,
          },
          log_message_type: "log:orion",
        });
      }
      return x;
    }
    g.unsafeCastBlobAttachments = h;
    g._getCallCaptureAttachments = i;
    g._getGenericAdminTextMessage = j;
    g._getStyleList = k;
    g.unsafeCastExtensibleAttachmentWithoutSubattachments = l;
    g.unsafeCastExtensibleAttachment = m;
    g._getProfileRanges = n;
    g.transformMessage = o;
  },
  98
);
__d(
  "MessagingThreadType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      COMMUNITY_FOLDER: 17,
      COMMUNITY_GROUP: 18,
      COMMUNITY_GROUP_UNJOINED: 19,
      COMMUNITY_CHANNEL_CATEGORY: 20,
      COMMUNITY_PRIVATE_HIDDEN_JOINED_THREAD: 21,
      COMMUNITY_PRIVATE_HIDDEN_UNJOINED_THREAD: 22,
      COMMUNITY_BROADCAST_JOINED_THREAD: 23,
      COMMUNITY_BROADCAST_UNJOINED_THREAD: 24,
      COMMUNITY_GROUP_INVITED_UNJOINED: 25,
      DISCOVERABLE_PUBLIC_CHAT: 150,
      DISCOVERABLE_PUBLIC_CHAT_UNJOINED: 151,
      DISCOVERABLE_PUBLIC_BROADCAST_CHAT: 152,
      DISCOVERABLE_PUBLIC_BROADCAST_CHAT_UNJOINED: 153,
      ONE_TO_ONE: 1,
      GROUP: 2,
      ROOM: 3,
      MONTAGE: 4,
      MARKETPLACE: 5,
      FOLDER: 6,
      TINCAN_ONE_TO_ONE: 7,
      TINCAN_GROUP_DISAPPEARING: 8,
      CARRIER_MESSAGING_ONE_TO_ONE: 10,
      CARRIER_MESSAGING_GROUP: 11,
      TINCAN_ONE_TO_ONE_DISAPPEARING: 13,
      PAGE_FOLLOW_UP: 14,
      SECURE_MESSAGE_OVER_WA_ONE_TO_ONE: 15,
      SECURE_MESSAGE_OVER_WA_GROUP: 16,
      PINNED: 101,
      LWG: 102,
      XAC_GROUP: 200,
    });
    f["default"] = a;
  },
  66
);
__d(
  "MessengerGroupThreadSubType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ADMIN_MODEL_V2_THREAD: 1,
      FB_GROUP_CHAT: 2,
      MARKETPLACE_THREAD: 3,
      SCHOOL_CHAT: 4,
      DEPRECATED__WORK_SYNCED_CHAT: 5,
      ADMIN_NOT_SUPPORTED_THREAD: 6,
      BELL_SYNCED_CHAT: 7,
      GAMES_APP_THREAD: 8,
      VAULT_CHAT: 9,
      VERSE_CHAT: 10,
      GENERIC_COMMERCE_THREAD: 11,
      USER_JOB_THREAD: 12,
      COWORKER_GROUP_THREAD: 13,
      APPROVAL_ENFORCED_CHATROOM_THREAD: 14,
      PARENT_APPROVED_SHEPHERD_MANAGED_THREAD: 15,
      CAMPUS_GROUP_THREAD: 16,
      LOCAL_COMMUNITIES_THREAD: 17,
      CHAT_FOR_ROOM_THREAD: 18,
      GAMING_PLAY_SQUAD: 19,
      CHAT_FOR_GROUP_ADMIN_TO_MEMBER_THREAD: 20,
      EITM_BACKED_IG_1TO1_THREAD: 21,
      LEARNING_SPACE: 23,
      E2EE_GROUP_THREAD_METADATA: 24,
      IGD_BC_PARTNERSHIP: 25,
      E2EE_1TO1_THREAD_METADATA: 26,
      JOBS_CAREER_GROUP_THREAD: 27,
      IG_CREATOR_SUBSCRIBER_GROUP_THREAD: 28,
      IG_CREATOR_SUBSCRIBER_BROADCAST_CHAT: 29,
      BUSINESS_SUPPORT_THREAD: 30,
      TAGGED_PII_DATA: 31,
      IG_DISCOVERABLE_CHAT_THREAD: 32,
      SUPPORT_MESSAGING_THREAD: 33,
      DISCOVERABLE_PUBLIC_CHAT: 34,
      DISCOVERABLE_PUBLIC_BROADCAST_CHAT: 35,
      DISCOVERABLE_PUBLIC_CHAT_V2: 36,
      IG_DISCOVERABLE_CHAT_THREAD_V2: 37,
      OCULUS_MEDIA_MESSAGING: 38,
      WORK_CHAT_THREAD_CENTRIC: 39,
      COMMUNITY_MESSAGING_PUBLIC_THREAD: 40,
      COMMUNITY_MESSAGING_PRIVATE_THREAD: 41,
      COMMUNITY_MESSAGING_ADMOD_THREAD: 42,
      COMMUNITY_MESSAGING_BROADCAST_THREAD: 43,
      IG_E2EE_GROUP_THREAD_METADATA: 44,
    });
    f["default"] = a;
  },
  66
);
__d(
  "MessengerThreadCannotReplyReason",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      BLOCKED: "blocked",
      MESSENGER_BLOCKEE: "messenger_blockee",
      COMPOSER_DISABLED_BOT: "composer_disabled_bot",
      HAS_EMAIL_PARTICIPANT: "has_email_participant",
      OBJECT_ORIGINATED: "object_originated",
      READ_ONLY: "read_only",
      VIEWER_NOT_SUBSCRIBED: "viewer_not_subscribed",
      RECIPIENTS_NOT_LOADABLE: "recipients_not_loadable",
      RECIPIENTS_UNAVAILABLE: "recipients_unavailable",
      RECIPIENTS_INVALID: "recipients_invalid",
      RECIPIENTS_INACTIVE_WORK_ACC: "recipients_inactive_work_account",
      MONTAGE_NOT_AUTHOR: "montage_not_author",
      VIEWER_MUTED_IN_FBGROUP: "viewer_muted_in_fbgroup",
      VIEWER_IS_LIMITED_WORK_ACCOUNT: "viewer_is_limited_work_account",
      RECIPIENTS_IS_LIMITED_WORK_ACCOUNT: "recipients_is_limited_work_account",
      WORK_GARDEN_ARCHIVED: "work_garden_archived",
      PARTICIPANTS_IN_RESTRICTED_JURISDICTION:
        "participants_in_restricted_jurisdiction",
      BROADCAST_CHAT_READ_ONLY: "broadcast_chat_read_only",
      CM_PAGES_AP_PLUS_READ_ONLY: "cm_pages_ap_plus_read_only",
    });
    f["default"] = a;
  },
  66
);
__d(
  "MessengerThreadCannotReplyReason.bs",
  ["MessengerThreadCannotReplyReason", "bs_js_dict"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (!(a == null))
        return c("bs_js_dict").get(
          c("MessengerThreadCannotReplyReason"),
          a.toUpperCase()
        );
    }
    function b(a) {
      if (a == null) return null;
      switch (a.TAG) {
        case 1:
          return "recipients_not_loadable";
        case 0:
        case 2:
          return "blocked";
        case 3:
          return "messenger_blockee";
      }
    }
    g.fromName = a;
    g.fromMessageThreadCannotReplyReason = b;
  },
  98
);
__d(
  "bs_array",
  [
    "bs_caml_array",
    "bs_caml_exceptions",
    "bs_caml_js_exceptions",
    "bs_caml_obj",
    "bs_curry",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("bs_caml_array").make_float,
      h = {};
    function a(a, c) {
      if (a === 0) return [];
      if (a < 0)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Array.init",
          Error: new Error(),
        };
      var d = b("bs_caml_array").make(a, b("bs_curry")._1(c, 0));
      for (var e = 1; e < a; ++e) d[e] = b("bs_curry")._1(c, e);
      return d;
    }
    function c(a, c, d) {
      var e = b("bs_caml_array").make(a, []);
      for (var f = 0; f < a; ++f) e[f] = b("bs_caml_array").make(c, d);
      return e;
    }
    function i(a) {
      var c = a.length;
      if (c === 0) return [];
      else return b("bs_caml_array").sub(a, 0, c);
    }
    function d(a, c) {
      var d = a.length;
      if (d === 0) return i(c);
      else if (c.length === 0) return b("bs_caml_array").sub(a, 0, d);
      else return a.concat(c);
    }
    function e(a, c, d) {
      if (c < 0 || d < 0 || c > ((a.length - d) | 0))
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Array.sub",
          Error: new Error(),
        };
      return b("bs_caml_array").sub(a, c, d);
    }
    function j(a, b, c, d) {
      if (b < 0 || c < 0 || b > ((a.length - c) | 0))
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Array.fill",
          Error: new Error(),
        };
      for (var e = b, b = (b + c) | 0; e < b; ++e) a[e] = d;
    }
    function k(a, c, d, e, f) {
      if (
        f < 0 ||
        c < 0 ||
        c > ((a.length - f) | 0) ||
        e < 0 ||
        e > ((d.length - f) | 0)
      )
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Array.blit",
          Error: new Error(),
        };
      return b("bs_caml_array").blit(a, c, d, e, f);
    }
    function l(a, c) {
      for (var d = 0, e = c.length; d < e; ++d) b("bs_curry")._1(a, c[d]);
    }
    function m(a, c, d) {
      if (c.length !== d.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Array.iter2: arrays must have the same length",
          Error: new Error(),
        };
      for (var e = 0, f = c.length; e < f; ++e) b("bs_curry")._2(a, c[e], d[e]);
    }
    function n(a, c) {
      var d = c.length;
      if (d === 0) return [];
      var e = b("bs_caml_array").make(d, b("bs_curry")._1(a, c[0]));
      for (var f = 1; f < d; ++f) e[f] = b("bs_curry")._1(a, c[f]);
      return e;
    }
    function o(a, c, d) {
      var e = c.length,
        f = d.length;
      if (e !== f)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Array.map2: arrays must have the same length",
          Error: new Error(),
        };
      if (e === 0) return [];
      f = b("bs_caml_array").make(e, b("bs_curry")._2(a, c[0], d[0]));
      for (var g = 1; g < e; ++g) f[g] = b("bs_curry")._2(a, c[g], d[g]);
      return f;
    }
    function p(a, c) {
      for (var d = 0, e = c.length; d < e; ++d) b("bs_curry")._2(a, d, c[d]);
    }
    function q(a, c) {
      var d = c.length;
      if (d === 0) return [];
      var e = b("bs_caml_array").make(d, b("bs_curry")._2(a, 0, c[0]));
      for (var f = 1; f < d; ++f) e[f] = b("bs_curry")._2(a, f, c[f]);
      return e;
    }
    function r(a) {
      var b = (a.length - 1) | 0,
        c = 0;
      while (!0) {
        var d = c,
          e = b;
        if (e < 0) return d;
        c = { hd: a[e], tl: d };
        b = (e - 1) | 0;
        continue;
      }
    }
    function s(a, b) {
      while (!0) {
        var c = b,
          d = a;
        if (!c) return d;
        b = c.tl;
        a = (d + 1) | 0;
        continue;
      }
    }
    function t(a) {
      if (!a) return [];
      var c = b("bs_caml_array").make(s(0, a), a.hd),
        d = 1;
      a = a.tl;
      while (!0) {
        var e = a,
          f = d;
        if (!e) return c;
        c[f] = e.hd;
        a = e.tl;
        d = (f + 1) | 0;
        continue;
      }
    }
    function u(a, c, d) {
      c = c;
      for (var e = 0, f = d.length; e < f; ++e)
        c = b("bs_curry")._2(a, c, d[e]);
      return c;
    }
    function v(a, c, d) {
      d = d;
      for (var e = (c.length - 1) | 0; e >= 0; --e)
        d = b("bs_curry")._2(a, c[e], d);
      return d;
    }
    function w(a, c) {
      var d = c.length,
        e = 0;
      while (!0) {
        var f = e;
        if (f === d) return !1;
        if (b("bs_curry")._1(a, c[f])) return !0;
        e = (f + 1) | 0;
        continue;
      }
    }
    function x(a, c) {
      var d = c.length,
        e = 0;
      while (!0) {
        var f = e;
        if (f === d) return !0;
        if (!b("bs_curry")._1(a, c[f])) return !1;
        e = (f + 1) | 0;
        continue;
      }
    }
    function y(a, c) {
      var d = c.length,
        e = 0;
      while (!0) {
        var f = e;
        if (f === d) return !1;
        if (b("bs_caml_obj").caml_equal(c[f], a)) return !0;
        e = (f + 1) | 0;
        continue;
      }
    }
    function z(a, b) {
      var c = b.length,
        d = 0;
      while (!0) {
        var e = d;
        if (e === c) return !1;
        if (a === b[e]) return !0;
        d = (e + 1) | 0;
        continue;
      }
    }
    var A = b("bs_caml_exceptions").create("Array.Bottom");
    function B(a, c) {
      var d = function (d, e) {
          var f = (((((e + e) | 0) + e) | 0) + 1) | 0,
            g = f;
          if (((f + 2) | 0) < d) {
            b("bs_curry")._2(
              a,
              b("bs_caml_array").get(c, f),
              b("bs_caml_array").get(c, (f + 1) | 0)
            ) < 0 && (g = (f + 1) | 0);
            b("bs_curry")._2(
              a,
              b("bs_caml_array").get(c, g),
              b("bs_caml_array").get(c, (f + 2) | 0)
            ) < 0 && (g = (f + 2) | 0);
            return g;
          }
          if (
            ((f + 1) | 0) < d &&
            b("bs_curry")._2(
              a,
              b("bs_caml_array").get(c, f),
              b("bs_caml_array").get(c, (f + 1) | 0)
            ) < 0
          )
            return (f + 1) | 0;
          if (f < d) return f;
          throw { RE_EXN_ID: A, _1: e, Error: new Error() };
        },
        e = function (e, f, g) {
          try {
            f = f;
            while (!0) {
              var h = f,
                i = d(e, h);
              if (b("bs_curry")._2(a, b("bs_caml_array").get(c, i), g) <= 0)
                return b("bs_caml_array").set(c, h, g);
              b("bs_caml_array").set(c, h, b("bs_caml_array").get(c, i));
              f = i;
              continue;
            }
          } catch (a) {
            h = b("bs_caml_js_exceptions").internalToOCamlException(a);
            if (h.RE_EXN_ID === A) return b("bs_caml_array").set(c, h._1, g);
            throw h;
          }
        },
        f = function (a, e) {
          try {
            e = e;
            while (!0) {
              var f = e,
                g = d(a, f);
              b("bs_caml_array").set(c, f, b("bs_caml_array").get(c, g));
              e = g;
              continue;
            }
          } catch (a) {
            f = b("bs_caml_js_exceptions").internalToOCamlException(a);
            if (f.RE_EXN_ID === A) return f._1;
            throw f;
          }
        },
        g = function (e, f) {
          while (!0) {
            var d = e,
              g = (((d - 1) | 0) / 3) | 0;
            if (d === g)
              throw {
                RE_EXN_ID: "Assert_failure",
                _1: ["array.ml", 238, 4],
                Error: new Error(),
              };
            if (b("bs_curry")._2(a, b("bs_caml_array").get(c, g), f) >= 0)
              return b("bs_caml_array").set(c, d, f);
            b("bs_caml_array").set(c, d, b("bs_caml_array").get(c, g));
            if (g <= 0) return b("bs_caml_array").set(c, 0, f);
            e = g;
            continue;
          }
        },
        h = c.length;
      for (var i = (((((h + 1) | 0) / 3) | 0) - 1) | 0; i >= 0; --i)
        e(h, i, b("bs_caml_array").get(c, i));
      for (i = (h - 1) | 0; i >= 2; --i) {
        e = b("bs_caml_array").get(c, i);
        b("bs_caml_array").set(c, i, b("bs_caml_array").get(c, 0));
        g(f(i, 0), e);
      }
      if (h <= 1) return;
      e = b("bs_caml_array").get(c, 1);
      b("bs_caml_array").set(c, 1, b("bs_caml_array").get(c, 0));
      return b("bs_caml_array").set(c, 0, e);
    }
    function C(a, c) {
      var d = function (d, e, f, g, h, i, j) {
          e = (d + e) | 0;
          h = (g + h) | 0;
          var l = d;
          d = b("bs_caml_array").get(c, d);
          var m = g;
          g = b("bs_caml_array").get(f, g);
          j = j;
          while (!0) {
            var n = j,
              o = g,
              p = m,
              q = d,
              r = l;
            if (b("bs_curry")._2(a, q, o) <= 0) {
              b("bs_caml_array").set(i, n, q);
              q = (r + 1) | 0;
              if (q >= e) return k(f, p, i, (n + 1) | 0, (h - p) | 0);
              j = (n + 1) | 0;
              d = b("bs_caml_array").get(c, q);
              l = q;
              continue;
            }
            b("bs_caml_array").set(i, n, o);
            q = (p + 1) | 0;
            if (q >= h) return k(c, r, i, (n + 1) | 0, (e - r) | 0);
            j = (n + 1) | 0;
            g = b("bs_caml_array").get(f, q);
            m = q;
            continue;
          }
        },
        e = function (d, e, f, g) {
          for (var h = 0; h < g; ++h) {
            var i = b("bs_caml_array").get(c, (d + h) | 0),
              j = (((f + h) | 0) - 1) | 0;
            while (
              j >= f &&
              b("bs_curry")._2(a, b("bs_caml_array").get(e, j), i) > 0
            )
              b("bs_caml_array").set(
                e,
                (j + 1) | 0,
                b("bs_caml_array").get(e, j)
              ),
                (j = (j - 1) | 0);
            b("bs_caml_array").set(e, (j + 1) | 0, i);
          }
        },
        f = function a(f, g, h, i) {
          if (i <= 5) return e(f, g, h, i);
          var b = (i / 2) | 0;
          i = (i - b) | 0;
          a((f + b) | 0, g, (h + b) | 0, i);
          a(f, c, (f + i) | 0, b);
          return d((f + i) | 0, b, g, (h + b) | 0, i, g, h);
        },
        g = c.length;
      if (g <= 5) return e(0, c, 0, g);
      var h = (g / 2) | 0;
      g = (g - h) | 0;
      var i = b("bs_caml_array").make(g, b("bs_caml_array").get(c, 0));
      f(h, i, 0, g);
      f(0, c, g, h);
      return d(g, h, i, 0, g, c, 0);
    }
    var D = c,
      E = b("bs_caml_array").concat,
      F = C;
    f.make_float = g;
    f.init = a;
    f.make_matrix = c;
    f.create_matrix = D;
    f.append = d;
    f.concat = E;
    f.sub = e;
    f.copy = i;
    f.fill = j;
    f.blit = k;
    f.to_list = r;
    f.of_list = t;
    f.iter = l;
    f.iteri = p;
    f.map = n;
    f.mapi = q;
    f.fold_left = u;
    f.fold_right = v;
    f.iter2 = m;
    f.map2 = o;
    f.for_all = x;
    f.exists = w;
    f.mem = y;
    f.memq = z;
    f.sort = B;
    f.stable_sort = C;
    f.fast_sort = F;
    f.Floatarray = h;
  },
  null
);
__d(
  "MessengerServerPayloadTransformer.bs",
  [
    "fbt",
    "ChatConfig",
    "CurrentUser",
    "FBID.bs",
    "GenderConst",
    "MercuryIDs",
    "MessageThreadUnsendabilityStatus.bs",
    "MessagingThreadType",
    "MessengerAttachmentTransformer.bs",
    "MessengerGroupAdminModelStatus.bs",
    "MessengerGroupThreadSubType",
    "MessengerGroupsSyncStatus.bs",
    "MessengerMessageTransformer.bs",
    "MessengerObjectAssociationType",
    "MessengerThreadCannotReplyReason.bs",
    "URI",
    "bs_array",
    "bs_belt_Option",
    "bs_caml_array",
    "bs_caml_format",
    "bs_caml_option",
    "bs_js_dict",
    "bs_js_json",
    "bs_js_null_undefined",
    "bs_string",
    "getByPath",
    "isMessengerDotComURI",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function i(a) {
      var b = a.location_coordinates;
      b = b == null ? [null, null] : [b.latitude, b.longitude];
      var d = a.location_page,
        e;
      if (d == null) e = null;
      else {
        d = d.address;
        e = d == null ? null : d.full_address;
      }
      d = a.allows_rsvp ? 1 : 0;
      var f = c("bs_array").fold_left(
          function (a, b) {
            a[b.node.id] = b.guest_list_state;
            return a;
          },
          {},
          a.event_reminder_members.edges
        ),
        g = a.lightweight_event_creator;
      return {
        creator_id: g == null ? null : g.id,
        event_members: f,
        event_time: a.time,
        event_type: a.lightweight_event_type,
        latitude: b[0],
        location_address: e,
        location_name: a.location_name,
        longitude: b[1],
        note: a.note,
        oid: a.id,
        related_event: a.related_event,
        repeat_mode: a.repeat_mode,
        seconds_to_notify_before: a.seconds_to_notify_before,
        status: a.lightweight_event_status,
        title: a.event_title,
        track_rsvp: d,
      };
    }
    function j(a) {
      a = a.associated_object;
      if (a == null) return null;
      var b = a.action_link,
        d = a.group_general_chat,
        e = a.group_saves,
        f = a.profile_picture,
        g = a.verse_group_link;
      return {
        action_link:
          b == null
            ? null
            : c("CurrentUser").isWorkUser()
            ? b
            : new (c("URI"))(b).setDomain("www.facebook.com"),
        approval_mode_toggleable: a.approval_mode_toggleable,
        event_place: a.event_place,
        group_general_chat: d == null ? null : { id: d.id },
        group_saves: e == null ? { count: 0 } : { count: e.count },
        id: a.id,
        mentorship_program: a.mentorship_program,
        name: a.name,
        privacy_mode: a.privacy_mode,
        profile_picture: f == null ? null : { uri: f.uri },
        room_type: a.room_type,
        start_timestamp: a.start_timestamp,
        verse_group_link:
          g == null ? null : new (c("URI"))(g).setDomain("www.facebook.com"),
      };
    }
    function k(a) {
      a = a.related_page_thread;
      if (a == null) return null;
      var b = a.custom_thread_tags.nodes.map(function (a) {
          return { color: a.color, id: a.id, name: a.name };
        }),
        c = a.custom_thread_labels.nodes.map(function (a) {
          return {
            color: a.label_color,
            data_silo: a.data_silo,
            id: a.id,
            label_source: a.label_source,
            name: a.name,
          };
        }),
        d = a.corp_thread_labels.nodes.map(function (a) {
          return {
            color: a.label_color,
            data_silo: a.data_silo,
            id: a.id,
            name: a.name,
          };
        }),
        e = a.page;
      e = e == null ? null : e.id;
      return {
        corpLabels: d,
        customLabels: c,
        customTags: b,
        flagged: a.is_flagged,
        pageID: e,
      };
    }
    function l(a) {
      var b = a.thread_key.other_user_id;
      if (b == null) return !1;
      a = a.all_participants.edges;
      return c("bs_array").fold_left(
        function (a, c) {
          c = c.node.messaging_actor;
          if (c.id === b) return c.__typename === "User";
          else return a;
        },
        !1,
        a
      );
    }
    function m(a) {
      if (a.length === 0) return null;
      var b = {};
      a.forEach(function (a) {
        var c = a.nickname;
        if (!(c == null)) {
          b[a.participant_id] = c;
          return;
        }
      });
      return b;
    }
    function n(a) {
      return "#" + c("bs_string").sub(a, 2, (a.length - 2) | 0);
    }
    function o(a) {
      if (a == null || a === "") return null;
      else return n(a);
    }
    function a(a) {
      return a.thread_key.thread_fbid;
    }
    function b(a) {
      return a.thread_key.other_user_id;
    }
    function e(a) {
      return c("bs_caml_option").nullable_to_opt(
        c("getByPath")(a, ["messages", "page_info"])
      );
    }
    function f(a) {
      var b = c("CurrentUser").isWorkUser()
        ? h._("Workplace user")
        : h._("Facebook user");
      return {
        accepts_messenger_user_feedback: !1,
        big_image_src: null,
        company_name: null,
        employee: !1,
        fbid: d("FBID.bs").ofStringExn(a),
        gender: c("GenderConst").UNKNOWN_SINGULAR,
        href: null,
        id: "fbid:" + a,
        image_src: null,
        instant_game_channel: null,
        is_aloha_proxy_confirmed: !1,
        is_business_enabled: !1,
        is_facebook_blocked: !0,
        is_friend: !1,
        is_messenger_blocked: !1,
        is_messenger_ignored: null,
        is_messenger_platform_bot: !1,
        is_messenger_user: !1,
        is_subscribed_to_page_updates: !1,
        is_viewer_managing_parent: !1,
        name: b,
        short_name: b,
        square_image_src: null,
        timezone: null,
        title: null,
        user_type: null,
        vanity: null,
        verification_status: null,
        wec_group_admins: [],
        wec_group_creation_time: null,
        wec_group_invite_link: null,
        wec_group_participant_count: null,
        wec_group_participants: [],
        work_foreign_entity_info: null,
      };
    }
    function p(a) {
      var b = a.profile_picture_url;
      if (b == null) {
        var e = a.big_image_src;
        e = e == null ? null : e.uri;
      } else e = b;
      b = a.accepts_messenger_user_feedback;
      var f = a.work_info,
        g;
      if (f == null) g = null;
      else {
        f = f.work_community;
        f = f == null ? null : f.name;
        var h = a.work_foreign_entity_info;
        g = f == null || h == null || h.type !== "FOREIGN" ? null : f;
      }
      h = a.is_employee;
      f = a.gender;
      var i = a.url,
        j;
      if (i == null) j = null;
      else {
        var k = c("isMessengerDotComURI")(new (c("URI"))(i));
        j = k
          ? new (c("URI"))(i)
              .getUnqualifiedURI()
              .setDomain("www.facebook.com")
              .setProtocol("https")
              .toString()
          : i;
      }
      k = a.is_aloha_proxy_confirmed;
      i = a.is_blocked_by_viewer;
      var l = a.is_viewer_friend,
        m = a.is_message_blocked_by_viewer,
        n = a.is_messenger_platform_bot,
        o = a.is_messenger_user,
        p = a.is_viewer_subscribed_to_message_updates,
        q = a.is_viewer_managing_parent,
        r = a.work_info,
        s;
      if (r == null) s = null;
      else {
        var t = r.work_community;
        t = t == null ? null : t.name;
        r = r.job_title;
        s =
          t == null
            ? r == null
              ? null
              : r
            : r == null || r.length === 0
            ? t
            : "" + r + " \u2022 " + t;
      }
      r = a.__typename;
      var u;
      switch (r) {
        case "NeoApprovedUser":
          u = "parent_approved_user";
          break;
        case "Page":
          u = "page";
          break;
        case "ReducedMessagingActor":
          u = "guest";
          break;
        case "User":
          u = "user";
          break;
        default:
          u = null;
      }
      t = a.wec_group_admins;
      r = a.wec_group_creation_time;
      var v = a.wec_group_invite_link,
        w = a.wec_group_participants,
        x = a.wec_group_participants,
        y = a.work_foreign_entity_info;
      return {
        accepts_messenger_user_feedback: b == null ? !1 : b,
        big_image_src: e,
        company_name: g,
        employee: h == null ? !1 : h,
        fbid: a.id,
        gender:
          f == null
            ? c("GenderConst").NOT_A_PERSON
            : f === "MALE"
            ? c("GenderConst").MALE_SINGULAR
            : f === "FEMALE"
            ? c("GenderConst").FEMALE_SINGULAR
            : c("GenderConst").NOT_A_PERSON,
        href: j,
        id: "fbid:" + a.id,
        image_src: e,
        instant_game_channel:
          a.__typename === "Page" ? a.instant_game_channel : null,
        is_aloha_proxy_confirmed: k == null ? !1 : k,
        is_business_enabled: a.__typename === "Page",
        is_facebook_blocked: i == null ? !1 : i,
        is_friend: l == null ? !1 : l,
        is_messenger_blocked: m == null ? !1 : m,
        is_messenger_ignored: null,
        is_messenger_platform_bot: n == null ? !1 : n,
        is_messenger_user: o == null ? !1 : o,
        is_subscribed_to_page_updates: p == null ? !0 : p,
        is_viewer_managing_parent: q == null ? !1 : q,
        name: a.name,
        short_name: c("bs_belt_Option").getWithDefault(
          c("bs_caml_option").nullable_to_opt(a.short_name),
          a.name
        ),
        square_image_src: null,
        timezone: null,
        title: s,
        user_type: u,
        vanity: a.username,
        verification_status: a.verification_status,
        wec_group_admins:
          t == null
            ? []
            : t.nodes.map(function (a) {
                return {
                  id: d("MercuryIDs").getParticipantIDFromUserID(
                    a.messaging_actor.id
                  ),
                  name: a.messaging_actor.name,
                };
              }),
        wec_group_creation_time: r == null ? null : r,
        wec_group_invite_link: v == null ? null : v,
        wec_group_participant_count: w == null ? null : w.count,
        wec_group_participants:
          x == null
            ? []
            : x.nodes.map(function (a) {
                return {
                  id: d("MercuryIDs").getParticipantIDFromUserID(
                    a.messaging_actor.id
                  ),
                  name: a.messaging_actor.name,
                };
              }),
        work_foreign_entity_info: y == null ? null : y,
      };
    }
    function q(a) {
      return a.all_participants.edges.map(function (a) {
        return p(a.node.messaging_actor);
      });
    }
    function r(a, b) {
      b = b.read_receipts;
      if (b == null) return;
      var d = {};
      b.nodes.forEach(function (b) {
        var e = b.actor;
        if (!(e == null) && a !== e.id) {
          d[e.id] = {
            action: c("bs_caml_format").caml_float_of_string(b.action),
            watermark: c("bs_caml_format").caml_float_of_string(b.watermark),
          };
          return;
        }
      });
      return c("bs_caml_option").some(d);
    }
    function s(a) {
      a = a.delivery_receipts;
      if (a == null) return [];
      else
        return a.nodes.sort(function (a, b) {
          a = c("bs_caml_format").caml_float_of_string(a.timestamp_precise);
          b = c("bs_caml_format").caml_float_of_string(b.timestamp_precise);
          if (a > b) return -1;
          else if (a === b) return 0;
          else return 1;
        });
    }
    function t(a, b, c) {
      var e = b.messages;
      if (!(e == null))
        return e.nodes.map(function (e) {
          return d("MessengerMessageTransformer.bs").transformMessage(
            a,
            e,
            {
              folder: b.folder.toLowerCase(),
              other_user_fbid: b.thread_key.other_user_id,
              thread_fbid: b.thread_key.thread_fbid,
              thread_id: null,
            },
            c
          );
        });
    }
    function u(a, b, e) {
      var f = b.last_message.nodes.map(function (b) {
          var c = d("MessengerMessageTransformer.bs").unsafeCastBlobAttachments(
              b
            ),
            a = b.extensible_attachment,
            e;
          if (a == null) e = null;
          else {
            var f = a.genie_attachment,
              g;
            if (f == null) g = null;
            else {
              f = f.genie_message;
              var h;
              if (f == null) h = null;
              else {
                f = f.story_attachment;
                h = {
                  story_attachment:
                    f == null
                      ? null
                      : d(
                          "MessengerMessageTransformer.bs"
                        ).unsafeCastExtensibleAttachment(f),
                };
              }
              g = { genie_message: h };
            }
            f = a.story_attachment;
            e = {
              genie_attachment: g,
              legacy_attachment_id: a.legacy_attachment_id,
              story_attachment:
                f == null
                  ? null
                  : d(
                      "MessengerMessageTransformer.bs"
                    ).unsafeCastExtensibleAttachment(f),
            };
          }
          return {
            blob_attachments: c,
            commerce_message_type: b.commerce_message_type,
            extensible_attachment: e,
            extensible_message_admin_text: b.extensible_message_admin_text,
            extensible_message_admin_text_type:
              b.extensible_message_admin_text_type,
            message_id: b.message_id,
            message_sender: b.message_sender,
            message_unsendability_status: b.message_unsendability_status,
            platform_xmd_encoded: b.platform_xmd_encoded,
            snippet: b.snippet,
            sticker: b.sticker,
            timestamp_precise: b.timestamp_precise,
          };
        }),
        g = {
          admin_model_status_string: b.admin_model_status_string,
          all_participants: b.all_participants,
          approval_mode: b.approval_mode,
          associated_object: b.associated_object,
          can_viewer_report: b.can_viewer_report,
          cannot_reply_reason: b.cannot_reply_reason,
          composer_input_disabled: b.composer_input_disabled,
          conversion_detection_data: b.conversion_detection_data,
          customization_enabled: b.customization_enabled,
          customization_info: b.customization_info,
          description: b.description,
          ephemeral_ttl_mode: b.ephemeral_ttl_mode,
          event_reminders: b.event_reminders,
          folder: b.folder,
          group_approval_queue: b.group_approval_queue,
          group_thread_subtype: b.group_thread_subtype,
          groups_sync_status_string: b.groups_sync_status_string,
          has_viewer_archived: b.has_viewer_archived,
          id: b.id,
          image: b.image,
          is_business_page_active: b.is_business_page_active,
          is_canonical_neo_user: b.is_canonical_neo_user,
          is_other_recipient_page: b.is_other_recipient_page,
          is_page_follow_up: b.is_page_follow_up,
          is_page_unresponded_thread: b.is_page_unresponded_thread,
          is_pin_protected: b.is_pin_protected,
          is_pinned: b.is_pinned,
          is_viewer_subscribed: b.is_viewer_subscribed,
          joinable_link: b.joinable_link,
          joinable_mode: b.joinable_mode,
          last_message: { nodes: f },
          last_read_receipt: b.last_read_receipt,
          linked_mentorship_programs: b.linked_mentorship_programs,
          marketplace_thread_data: b.marketplace_thread_data,
          mentions_mute_mode: b.mentions_mute_mode,
          message_count: b.messages_count,
          montage_thread: b.montage_thread,
          mute_until: b.mute_until,
          name: b.name,
          page_comm_item: b.page_comm_item,
          page_unsubscribe_status: b.page_unsubscribe_status,
          participant_add_mode_as_string: b.participant_add_mode_as_string,
          participants_event_status: b.participants_event_status,
          pinned_messages: b.pinned_messages,
          privacy_mode: b.privacy_mode,
          reactions_mute_mode: b.reactions_mute_mode,
          related_page_thread: b.related_page_thread,
          rtc_call_data: b.rtc_call_data,
          square_image: b.square_image,
          suggested_reply_data: b.suggested_reply_data,
          theme: b.thread_theme,
          thread_admins: b.thread_admins,
          thread_associated_job_applications:
            b.thread_associated_job_applications,
          thread_associated_page_admin: b.thread_associated_page_admin,
          thread_connectivity_data: b.thread_connectivity_data,
          thread_key: b.thread_key,
          thread_pin_timestamp: b.thread_pin_timestamp,
          thread_queue_enabled: b.thread_queue_enabled,
          thread_queue_metadata: b.thread_queue_metadata,
          thread_type: b.thread_type,
          thread_unsendability_status: b.thread_unsendability_status,
          unread_count: b.unread_count,
          unread_mentions_count: b.unread_mentions_count,
          updated_time_precise: b.updated_time_precise,
          work_groups_sync_metadata: b.work_groups_sync_metadata,
        };
      f = g.customization_info;
      var h;
      if (f == null) h = [null, null, null];
      else {
        var p = f.emoji;
        h = [
          o(f.outgoing_bubble_color),
          p == null ? null : { emoji: p },
          m(f.participant_customizations),
        ];
      }
      p = h[0];
      f = g.theme;
      if (f == null) p = [p, p, p, [], null, void 0, null, null];
      else {
        var r = f.reaction_pack,
          s;
        if (r == null) s = void 0;
        else {
          r = r.reaction_assets;
          s =
            r == null
              ? void 0
              : r.nodes.map(function (a) {
                  return {
                    keyframeAssetUri: a.keyframe_asset_uri,
                    reactionEmoji: a.reaction_emoji,
                    reactionName: a.reaction_name,
                    staticAssetUri: a.static_asset.uri,
                  };
                });
        }
        r = f.gradient_colors.length;
        var t = n(f.fallback_color),
          u = d("FBID.bs").ofString(f.id);
        u = u !== void 0 ? c("bs_caml_option").valFromOption(u) : null;
        if (r > 0 && d("ChatConfig").get("chat_tab_has_gradients")) {
          var v = f.gradient_colors.map(n);
          p = [
            t,
            c("bs_caml_array").get(v, 0),
            c("bs_caml_array").get(v, (r - 1) | 0),
            v,
            u,
            s,
            f.accessibility_label,
            f.reverse_gradients_for_radial,
          ];
        } else
          p = [
            t,
            t,
            t,
            [],
            u,
            s,
            f.accessibility_label,
            f.reverse_gradients_for_radial,
          ];
      }
      r = g.page_comm_item;
      v =
        r == null
          ? [null, null, null, null, null, [], !1, [], null]
          : [
              r.comm_status,
              r.comm_source_id,
              r.id,
              r.subtitle,
              r.comm_item_owners,
              r.comm_icon_type,
              r.is_priority,
              r.biz_inbox_tags,
              r.priority_score,
            ];
      t = g.last_message.nodes;
      u = t.length !== 0 ? c("bs_caml_option").some(t[0]) : void 0;
      s = g.last_read_receipt.nodes;
      f = s.length !== 0 ? c("bs_caml_option").some(s[0]) : void 0;
      if (u !== void 0) {
        r = c("bs_caml_option").valFromOption(u);
        t = d("MessengerAttachmentTransformer.bs").transformAttachment(
          a,
          {
            blob_attachments: r.blob_attachments,
            extensible_attachment: r.extensible_attachment,
            sticker: r.sticker,
          },
          r.message_id,
          e
        );
      } else t = [];
      if (u !== void 0) {
        s = c("bs_caml_option").valFromOption(u).extensible_message_admin_text;
        if (s == null) r = null;
        else {
          e = s.game;
          r = e == null ? null : e.id;
        }
      } else r = null;
      s = d("MessengerThreadCannotReplyReason.bs").fromName(
        g.cannot_reply_reason
      );
      e = g.thread_key.other_user_id;
      if (e == null) {
        var w = g.thread_key.thread_fbid;
        w = w == null ? null : w;
      } else w = e;
      e = c("bs_array").fold_left(
        function (a, b) {
          a[b.id] = 0;
          return a;
        },
        {},
        g.thread_admins
      );
      e = c("bs_array").fold_left(
        function (a, b) {
          var d = b.node.messaging_actor.id;
          b = b.admin_type;
          var e = c("bs_js_dict").get(a, d);
          !(b == null) && e !== void 0 && (a[d] = b);
          return a;
        },
        e,
        g.all_participants.edges
      );
      var x = g.thread_queue_metadata,
        y = g.group_approval_queue,
        z = g.group_thread_subtype,
        A = g.montage_thread,
        B = g.image,
        C = g.thread_key.other_user_id,
        D;
      if (u !== void 0) {
        var E = c("bs_caml_option").valFromOption(u).platform_xmd_encoded;
        if (E == null) D = !1;
        else {
          try {
            E = JSON.parse(E);
          } catch (a) {
            E = {};
          }
          E = c("bs_js_json").classify(E);
          D =
            typeof E === "number" || E.TAG !== 2
              ? !1
              : c("bs_js_dict").get(E._0, "landing_exp") !== void 0;
        }
      } else D = !1;
      E = g.thread_queue_metadata;
      var F = g.event_reminders.nodes,
        G = g.linked_mentorship_programs,
        H = g.marketplace_thread_data,
        I;
      if (H == null) I = null;
      else {
        var J = H.buyer,
          K = H.for_sale_item,
          L;
        if (K == null) L = null;
        else {
          var M = K.primary_photo,
            N;
          if (M == null) N = null;
          else {
            M = M.image;
            N = M == null ? null : M.uri;
          }
          M = K.product_item;
          var O = K.location,
            P;
          if (O == null) P = null;
          else {
            O = O.reverse_geocode;
            P = {
              reverse_geocode:
                O == null ? null : { city: O.city, state: O.state },
            };
          }
          O = K.formatted_price;
          var Q = K.product_item;
          L = {
            c2c_shipping_eligible: K.c2c_shipping_eligible,
            delivery_types: K.delivery_types,
            id: K.id,
            image_uri: N,
            inventory_count: K.inventory_count,
            is_commerce_post_item: M == null ? !1 : M.is_commerce_post_item,
            is_pending: K.is_pending,
            is_shipping_offered: K.is_shipping_offered,
            is_sold: K.is_sold,
            location: P,
            price: O == null ? null : O.text,
            product_item_id: Q == null ? null : Q.id,
            story_id: K.story_id,
            title: K.group_commerce_item_title,
            url: K.url,
          };
        }
        N = H.rating_state;
        M = H.seller;
        if (M == null) P = !1;
        else {
          O = M.marketplace_c2c_shipping_seller;
          P = O == null ? !1 : O.is_eligible;
        }
        Q = H.seller;
        I = {
          buyer_fbid: J == null ? null : J.id,
          eligible_profile_selling_invoice_actions:
            H.eligible_profile_selling_invoice_actions,
          for_sale_item: L,
          is_eligible_to_rate: N == null ? null : N.is_eligible_to_rate,
          is_seller_eligible_for_shipping: P,
          seller_added_labels: H.seller_added_labels.map(function (a) {
            return { label_string: a.label_string, label_type: a.label_type };
          }),
          seller_fbid: Q == null ? null : Q.id,
          thread_fbid: w,
        };
      }
      K = g.name;
      M = g.associated_object;
      if (M == null) O = null;
      else {
        J = M.group_general_chat;
        O =
          J == null || w == null
            ? null
            : J.id === w
            ? c("MessengerObjectAssociationType").GENERAL_CHAT
            : c("MessengerObjectAssociationType").REGULAR_CHAT;
      }
      L = g.pinned_messages;
      N = g.rtc_call_data;
      if (N == null) P = null;
      else {
        H = N.initiator;
        P = {
          call_state: N.call_state,
          initiator_fbid:
            H == null
              ? null
              : c("bs_js_null_undefined").fromOption(
                  d("FBID.bs").ofString(H.id)
                ),
          server_info_data: N.server_info_data,
        };
      }
      Q = g.square_image;
      M = g.thread_associated_job_applications;
      J = g.thread_type;
      H = g.work_groups_sync_metadata;
      if (H == null) N = null;
      else {
        H = H.fb_group;
        N = H == null ? null : H;
      }
      return {
        accessibility_label: p[6],
        admin_model_status: d(
          "MessengerGroupAdminModelStatus.bs"
        ).fromNullableString(g.admin_model_status_string),
        admins: e,
        approval_mode: g.approval_mode,
        approval_queue_ids:
          x == null
            ? []
            : x.approval_requests.nodes.map(function (a) {
                return d("MercuryIDs").getParticipantIDFromUserID(
                  d("FBID.bs").ofStringExn(a.id)
                );
              }),
        associated_object: j(g),
        biz_inbox_tags: v[7],
        can_reply: s === void 0,
        can_viewer_report: g.can_viewer_report,
        cannot_reply_reason: s !== void 0 ? s : null,
        comm_icon_type: v[5],
        comm_item_owners: v[4],
        comm_source_id: v[1],
        comm_status: v[0],
        composer_input_disabled: g.composer_input_disabled,
        conversion_detection_data: g.conversion_detection_data,
        custom_like_icon: h[1],
        custom_nickname: h[2],
        customization_enabled: g.customization_enabled,
        description: g.description,
        ephemeral_ttl_mode: g.ephemeral_ttl_mode,
        folder: g.folder.toLowerCase(),
        footer_color: p[2],
        game_id: r,
        gradient_colors: p[3],
        graphql_token: g.id,
        group_approval_queue: y == null ? null : y.nodes,
        group_thread_subtype:
          z == null
            ? null
            : c("bs_js_null_undefined").fromOption(
                c("bs_js_dict").get(c("MessengerGroupThreadSubType"), z)
              ),
        groups_sync_status: d(
          "MessengerGroupsSyncStatus.bs"
        ).fromNullableString(g.groups_sync_status_string),
        has_email_participant:
          s !== void 0 ? s === "has_email_participant" : !1,
        has_montage: !(A == null),
        header_color: p[1],
        image_src: B == null ? null : B.uri,
        is_archived: g.has_viewer_archived,
        is_business_page_active: g.is_business_page_active,
        is_canonical: !(C == null),
        is_canonical_neo_user: g.is_canonical_neo_user,
        is_canonical_user: l(g),
        is_from_weak_entry_point: D,
        is_other_recipient_page: g.is_other_recipient_page,
        is_page_follow_up: g.is_page_follow_up,
        is_page_unresponded_thread: g.is_page_unresponded_thread,
        is_pin_protected: g.is_pin_protected,
        is_pinned: g.is_pinned,
        is_priority: v[6],
        is_subscribed: g.is_viewer_subscribed,
        is_thread_queue_enabled: !(E == null),
        joinable_link: g.joinable_link,
        joinable_mode: {
          link: g.joinable_mode.link,
          mode: c("bs_caml_format").caml_int_of_string(g.joinable_mode.mode),
        },
        last_message_admin_text_type:
          u !== void 0
            ? c("bs_caml_option").valFromOption(u)
                .extensible_message_admin_text_type
            : null,
        last_message_id: null,
        last_message_timestamp:
          u !== void 0
            ? c("bs_caml_format").caml_float_of_string(
                c("bs_caml_option").valFromOption(u).timestamp_precise
              )
            : 0,
        last_message_type:
          u !== void 0
            ? c("bs_caml_option").valFromOption(u).commerce_message_type
            : null,
        last_message_unsendability_status:
          u !== void 0
            ? c("bs_caml_option").valFromOption(u).message_unsendability_status
            : null,
        last_read_timestamp:
          f !== void 0
            ? c("bs_caml_format").caml_float_of_string(
                c("bs_caml_option").valFromOption(f).timestamp_precise
              )
            : 0,
        lightweight_event: F.length !== 0 ? i(F[0]) : null,
        lightweight_events: c("bs_array").fold_left(
          function (a, b) {
            a[b.id] = i(b);
            return a;
          },
          {},
          g.event_reminders.nodes
        ),
        linked_mentorship_programs: G == null ? null : G,
        marketplace_thread_data: I,
        mentions_mute_mode:
          g.mentions_mute_mode === "MENTIONS_NOT_MUTED" ? 0 : 1,
        message_count: g.message_count,
        mute_until: g.mute_until,
        name: K == null ? "" : K,
        object_association_type: O,
        other_user_fbid: g.thread_key.other_user_id,
        page_comm_item_id: v[2],
        page_thread_info: k(g),
        page_unsubscribe_status: g.page_unsubscribe_status,
        participant_add_mode: g.participant_add_mode_as_string,
        participants: g.all_participants.edges.map(function (a) {
          return d("MercuryIDs").getParticipantIDFromUserID(
            a.node.messaging_actor.id
          );
        }),
        participants_event_status: g.participants_event_status,
        pinned_messages:
          L == null
            ? null
            : L.map(function (b) {
                var c = b.message;
                return {
                  message:
                    c == null
                      ? null
                      : d("MessengerMessageTransformer.bs").transformMessage(
                          a,
                          c,
                          {
                            folder: g.folder.toLowerCase(),
                            other_user_fbid: g.thread_key.other_user_id,
                            thread_fbid: g.thread_key.thread_fbid,
                            thread_id: null,
                          },
                          !1
                        ),
                  message_id: b.message_id,
                  pinning_time: b.pinning_time,
                };
              }),
        preloaded_participants: q(b),
        priority_score: v[8],
        reactions: p[5],
        reactions_mute_mode:
          g.reactions_mute_mode === "REACTIONS_NOT_MUTED" ? 0 : 1,
        read_only: s !== void 0 ? s === "read_only" : !1,
        recipients_loadable:
          s !== void 0 ? s !== "recipients_not_loadable" : !0,
        reverse_gradients_for_radial: p[7],
        rtc_call_data: P,
        server_timestamp: c("bs_caml_format").caml_float_of_string(
          g.updated_time_precise
        ),
        snippet:
          u !== void 0 ? c("bs_caml_option").valFromOption(u).snippet : null,
        snippet_attachments: t,
        snippet_sender:
          u !== void 0
            ? d("MercuryIDs").getParticipantIDFromUserID(
                c("bs_caml_option").valFromOption(u).message_sender
                  .messaging_actor.id
              )
            : null,
        solid_color: p[0],
        square_image_src: Q == null ? null : Q.uri,
        subtitle: v[3],
        suggested_reply_data: g.suggested_reply_data,
        theme_id: p[4],
        thread_associated_job_applications: M == null ? null : M,
        thread_associated_page_admin: g.thread_associated_page_admin,
        thread_connectivity_data: g.thread_connectivity_data,
        thread_fbid: w,
        thread_id: "",
        thread_pin_timestamp: g.thread_pin_timestamp,
        thread_type:
          J == null
            ? null
            : c("bs_js_null_undefined").fromOption(
                c("bs_js_dict").get(c("MessagingThreadType"), J)
              ),
        thread_unsendability_status: d(
          "MessageThreadUnsendabilityStatus.bs"
        ).fromNullableString(g.thread_unsendability_status),
        timestamp: c("bs_caml_format").caml_float_of_string(
          g.updated_time_precise
        ),
        unread_count: g.unread_count,
        unread_mentions_count: g.unread_mentions_count,
        work_associated_group: N,
      };
    }
    a = a;
    b = b;
    e = e;
    f = f;
    var v = p,
      w = q;
    r = r;
    s = s;
    t = t;
    u = u;
    g.getThreadFBID = a;
    g.getOtherUserID = b;
    g.getMessagePageInfo = e;
    g.getBlockedParticipant = f;
    g.transformParticipant = v;
    g.transformParticipants = w;
    g.transformReadReceipts = r;
    g.transformDeliveryReceipts = s;
    g.transformMessages = t;
    g.transformThread = u;
  },
  98
);
__d(
  "XGraphQLBatchAPIController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/api/graphqlbatch/", {
      queries: { type: "String" },
      batch_name: { type: "String" },
      scheduler: { type: "Enum", enumType: 1 },
      shared_params: { type: "String" },
      fb_api_req_friendly_name: { type: "String" },
      uft_request_id: { type: "String" },
    });
  },
  null
);
__d(
  "MessengerWebGraphQLHelper",
  [
    "errorCode",
    "ActorURI",
    "AsyncRequest",
    "DTSG",
    "DTSGParser",
    "Deferred",
    "FBLogger",
    "WebGraphQLConfig",
    "XGraphQLBatchAPIController",
    "cr:2148",
    "cr:2703",
    "cr:4351",
    "getAsyncParams",
    "getBizInboxThreadsRelayQueryMigration",
    "getBizInboxUnifiedThreadsQuery",
    "nullthrows",
    "react-relay",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = "for (;;);",
      j = i.length;
    function a(a, b) {
      return l([a], b)[0];
    }
    function k(a, d, e) {
      var f = b("react-relay");
      f = f.fetchQuery;
      e = b("cr:2148") == null ? void 0 : b("cr:2148").getForActorID(e);
      var g = new (c("Deferred"))(),
        h = g.getPromise();
      f(c("nullthrows")(e), a, d.variables).subscribe({
        start: function () {},
        complete: function () {},
        error: function (a) {
          g.reject({
            data: {},
            errors: [{ message: a.message, severity: "CRITICAL", error: a }],
          });
        },
        next: function (a) {
          a
            ? g.resolve(a)
            : g.reject({
                data: {},
                errors: [
                  {
                    message: "Unexpected response received from server.",
                    severity: "CRITICAL",
                    response: a,
                  },
                ],
              });
        },
      });
      return h;
    }
    function l(a, e) {
      var f = e == null ? void 0 : e.actorID;
      if (a.length === 1 && f) {
        if (b("cr:4351")) {
          var g;
          g = (g = e == null ? void 0 : e.batchName) != null ? g : "";
          var h = a[0].variables,
            l = b("cr:4351").getUnifiedChannelFromMercuryOperations(
              g,
              h.source
            );
          if (
            l &&
            g &&
            (g === "MessengerGraphQLThreadlistFetcher" ||
              g === "MessengerGraphQLThreadFetcher") &&
            h.source &&
            b("cr:4351").shouldUseUnifiedQuery(l, h) &&
            d("getBizInboxUnifiedThreadsQuery").getShouldUnifyThreadQueries()
          )
            return [b("cr:4351").execUnifiedQuery(l)];
        }
        if (
          (b("cr:2703") == null ? void 0 : b("cr:2703").params.id) ===
            ((g = a[0]) == null ? void 0 : g.id) &&
          !((h = a[0]) == null ? void 0 : h.variables.before) &&
          c("getBizInboxThreadsRelayQueryMigration")()
        )
          return [k(b("cr:2703"), a[0], f)];
      }
      var m = {},
        n = {};
      l = a.map(function (a, b) {
        b = "o" + b;
        m[b] = { doc_id: c("nullthrows")(a.id), query_params: a.variables };
        a = new (c("Deferred"))();
        n[b] = a;
        return a.getPromise();
      });
      g = babelHelpers["extends"]({}, c("getAsyncParams")("POST"));
      e && e.actorID != null && (g[d("ActorURI").PARAMETER_ACTOR] = e.actorID);
      h = e && e.batchName ? { batch_name: e.batchName } : {};
      f = new (c("AsyncRequest"))()
        .setURI(c("XGraphQLBatchAPIController").getURIBuilder().getURI())
        .setOption("suppressEvaluation", !0)
        .setMethod("POST")
        .setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        .setData(
          babelHelpers["extends"]({}, h, g, { queries: JSON.stringify(m) })
        )
        .setHandler(function (a) {
          a = a.getPayload();
          a = a.response;
          try {
            if (a.startsWith(i)) {
              var b = a.substring(j);
              b = JSON.parse(b);
              if (b.error == 1357001) {
                Object.keys(n).forEach(function (a) {
                  n[a].isSettled() ||
                    n[a].reject({
                      data: {},
                      errors: [
                        {
                          message: "Not logged in.",
                          severity: "CRITICAL",
                          should_end_session: !0,
                        },
                      ],
                    });
                });
                return;
              }
            }
            c("DTSGParser").updateFromAsyncResponse(a);
            b = a.split("\r\n");
            b.pop();
            b = b.map(function (a) {
              return JSON.parse(a);
            });
            b.forEach(function (a) {
              return Object.keys(a).forEach(function (b) {
                var c = n[b];
                if (c) {
                  b = a[b];
                  if (b.extensions) {
                    var e;
                    e = (e = b.extensions) == null ? void 0 : e.dtsg_token;
                    e && d("DTSG").setToken(e);
                  }
                  b.errors
                    ? c.reject(b)
                    : b.data
                    ? c.resolve(b.data)
                    : c.reject({
                        data: {},
                        errors: [
                          {
                            message:
                              "Unexpected response received from server.",
                            severity: "CRITICAL",
                            response: b,
                          },
                        ],
                      });
                }
              });
            });
          } catch (b) {
            c("FBLogger")("webgraphql")
              .catching(b)
              .mustfix(
                "Bad response: ",
                "%s%s",
                a.substr(0, 250),
                a.length > 250 ? "[truncated]" : ""
              );
          }
          Object.keys(n).forEach(function (a) {
            n[a].isSettled() ||
              n[a].reject({
                data: {},
                errors: [
                  {
                    message: "No response received from server.",
                    severity: "CRITICAL",
                  },
                ],
              });
          });
        })
        .setTimeoutHandler(c("WebGraphQLConfig").timeout, function () {
          Object.keys(n).forEach(function (a) {
            n[a].isSettled() ||
              n[a].reject({
                data: {},
                errors: [
                  { message: "Request timed out.", severity: "CRITICAL" },
                ],
              });
          });
        })
        .setErrorHandler(function (a) {
          var b = a.getErrorDescription();
          Object.keys(n).forEach(function (c) {
            n[c].isSettled() ||
              n[c].reject({
                data: {},
                errors: [
                  { message: b, severity: "CRITICAL", error: a.getError() },
                ],
              });
          });
        });
      e && e.msgrRegion && f.setRequestHeader("X-MSGR-Region", e.msgrRegion);
      f.setAllowCrossPageTransition(!0);
      f.send();
      return l;
    }
    g.exec = a;
    g.execRelayQuery = k;
    g.execAll = l;
  },
  98
);
__d(
  "MessengerParticipantsFetcher.bs",
  [
    "MessengerParticipantsQuery.graphql",
    "MessengerServerPayloadTransformer.bs",
    "MessengerWebGraphQLHelper",
    "ODS",
    "Promise",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return d("MessengerWebGraphQLHelper")
        .exec(
          {
            id: c("MessengerParticipantsQuery.graphql").params.id,
            variables: a,
          },
          {
            actorID: null,
            batchName: "MessengerParticipantsFetcher",
            msgrRegion: null,
          }
        )
        ["catch"](function (a) {
          d("ODS").bumpEntityKey(
            2966,
            "messenger_webgraphql",
            "fetch_participants.failure"
          );
          return b("Promise").reject(a);
        })
        .then(function (b) {
          d("ODS").bumpEntityKey(
            2966,
            "messenger_webgraphql",
            "fetch_participants.success"
          );
          var c = [],
            e = new Set();
          b.messaging_actors.forEach(function (a) {
            if (a == null) return;
            a = d("MessengerServerPayloadTransformer.bs").transformParticipant(
              a
            );
            e.add(a.fbid);
            c.push(a);
          });
          b = a.ids.filter(function (a) {
            return !e.has(a);
          });
          b.length > 0 &&
            b.forEach(function (a) {
              c.push(
                d("MessengerServerPayloadTransformer.bs").getBlockedParticipant(
                  a
                )
              );
            });
          return c;
        });
    }
    g.$$fetch = a;
  },
  98
);
__d(
  "MessengerParticipants.bs",
  [
    "fbt",
    "CurrentUser",
    "FBID.bs",
    "ImmutableObject",
    "MercuryAssert",
    "MercuryIDs",
    "MercuryVanityIDMap.bs",
    "MessengerParticipantsFetcher.bs",
    "ODS",
    "Promise",
    "bs_belt_Array",
    "bs_caml_obj",
    "bs_caml_option",
    "bs_curry",
    "bs_js_dict",
    "bs_js_null_undefined",
    "immutable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { contents: 1 },
      i = {},
      j = new Set(),
      k = {},
      l = function (b, a) {
        delete b[a];
        return 0;
      },
      m = function (b, a) {
        delete b[a];
        return 0;
      };
    function n(a) {
      if (b("CurrentUser").isWorkUser()) return g._("Workplace user");
      else if (b("CurrentUser").isWorkroomsUser()) return g._("Workrooms User");
      else return g._("Facebook user");
    }
    function o(a) {
      var c = a.user_type;
      if (c == null) return a;
      if (
        !(
          b("bs_caml_obj").caml_equal(c, "user") ||
          b("bs_caml_obj").caml_equal(c, "friend")
        )
      )
        return a;
      c = a.href;
      var d = a.vanity;
      if (!(c == null)) return a;
      if (!(d == null)) return a;
      c = n();
      return Object.assign(a, { name: c, short_name: c });
    }
    function a(a) {
      Object.keys(i).forEach(function (a) {
        return m(i, a);
      });
    }
    function p(a) {
      var c = a.id,
        d = a.vanity;
      d == null || b("MercuryVanityIDMap.bs").set(d, c);
      d = b("bs_js_dict").get(i, c);
      d !== void 0
        ? (i[c] = b("ImmutableObject").set(
            b("bs_caml_option").valFromOption(d),
            a
          ))
        : (i[c] = new (b("ImmutableObject"))(o(a)));
    }
    function c(a) {
      a = a.participants;
      if (!(a == null)) {
        a.map(p);
        return;
      }
    }
    function d(a) {
      a = a.preloaded_participants;
      if (!(a == null)) {
        a.map(p);
        return;
      }
    }
    function q(a, c, d) {
      var e = {},
        f = [];
      a.forEach(function (a) {
        var c = b("bs_js_dict").get(i, a);
        c !== void 0
          ? (e[a] = b("bs_caml_option").valFromOption(c))
          : f.push(a);
      });
      if (f.length !== 0) {
        var g = [];
        f.forEach(function (a) {
          if (j.has(a)) return;
          var c = b("MercuryIDs").getUserIDFromParticipantID(a);
          if (!(c == null)) {
            g.push(c);
            j.add(a);
            return;
          }
        });
        var m = h.contents.toString();
        k[m] = [a, d];
        h.contents = (h.contents + 1) | 0;
        g.length > 0 &&
          b("MessengerParticipantsFetcher.bs")
            .$$fetch({ ids: g, source: c })
            .then(function (a) {
              a.forEach(function (a) {
                i[a.id] = new (b("ImmutableObject"))(a);
                var c = a.id;
                a = a.vanity;
                a == null || b("MercuryVanityIDMap.bs").set(a, c);
                j["delete"](c);
              });
              Object.keys(k).forEach(function (a) {
                var d = b("bs_js_dict").get(k, a);
                if (d === void 0) return;
                var e = d[0],
                  c = {};
                e.forEach(function (a) {
                  var d = b("bs_js_dict").get(i, a);
                  if (d !== void 0) {
                    c[a] = b("bs_caml_option").valFromOption(d);
                    return;
                  }
                });
                if (Object.keys(c).length === e.length) {
                  l(k, a);
                  return d[1](c);
                }
              });
              b("ODS").bumpEntityKey(
                2966,
                "messenger_webgraphql",
                "fetch_participant.success"
              );
              return b("Promise").resolve();
            })
            ["catch"](function (a) {
              b("ODS").bumpEntityKey(
                2966,
                "messenger_webgraphql",
                "fetch_participant.failure"
              );
              return b("Promise").resolve();
            });
        return m;
      }
      d(e);
      return null;
    }
    function e(a, b) {
      return q(a, null, b);
    }
    function r(a, c) {
      b("MercuryAssert").isParticipantID(a);
      return q([a], null, function (d) {
        d = b("bs_js_dict").get(d, a);
        if (d !== void 0)
          return b("bs_curry")._1(c, b("bs_caml_option").valFromOption(d));
      });
    }
    function s(a) {
      return b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(i, a));
    }
    function t(c, d) {
      var e = [],
        a = [];
      c.forEach(function (b) {
        var c = s(b);
        c == null ? e.push(b) : a.push(c);
      });
      if (e.length === 0) return [a, null];
      var f = q(e, null, function (a) {
        return b("bs_curry")._1(
          d,
          b("bs_belt_Array").keepMap(c, function (a) {
            return b("bs_caml_option").nullable_to_opt(s(a));
          })
        );
      });
      return [a, f];
    }
    function u(a, c) {
      var d = function (a) {
          return b("immutable").Map(
            a.map(function (a) {
              return [a.id, a];
            })
          );
        },
        e = function (a) {
          return b("bs_curry")._1(c, d(a));
        };
      a = t(a, e);
      return [d(a[0]), a[1]];
    }
    function v(a) {
      return l(k, a);
    }
    function w(a) {
      if (a == null) return null;
      if (b("MercuryVanityIDMap.bs").hasVanity(a)) {
        var c = b("MercuryVanityIDMap.bs").getID(a);
        if (c == null) return null;
        else return c;
      }
      c = /^\d+$/;
      if (!c.test(a)) return null;
      c = b("FBID.bs").ofString(a);
      if (c !== void 0)
        return b("MercuryIDs").getParticipantIDFromUserID(
          b("bs_caml_option").valFromOption(c)
        );
      else return null;
    }
    f.reset = a;
    f.addParticipants = c;
    f.addPreloadedParticipants = d;
    f.getDefaultName = n;
    f.get = r;
    f.getNow = s;
    f.getMultiWithSource = q;
    f.getMulti = e;
    f.getMultiEager = t;
    f.getMultiEagerMap = u;
    f.removeCallback = v;
    f.getIDFromVanityOrFBID = w;
  },
  null
);
__d(
  "JSSet.bs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return Array.from(a.values());
    }
    f.values = a;
  },
  66
);
__d(
  "bs_caml_external_polyfill",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = function () {
      if (typeof globalThis !== "undefined") return globalThis;
      if (typeof self !== "undefined") return self;
      if (typeof window !== "undefined") return window;
      if (typeof a !== "undefined") return a;
      if (typeof this !== "undefined") return this;
      throw new Error("Unable to locate global `this`");
    };
    b = function (a) {
      var b = g();
      if (b[a] === void 0)
        throw new Error(a + " not polyfilled by ReScript yet\n");
      return b[a];
    };
    c = function (a, b) {
      var c = g();
      c[a] = b;
      return 0;
    };
    f.getGlobalThis = g;
    f.resolve = b;
    f.register = c;
  },
  null
);
__d(
  "bs_caml_io",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {
        buffer: "",
        output: function (a, b) {
          a = (b.length - 1) | 0;
          if (
            typeof process !== "undefined" &&
            process.stdout &&
            process.stdout.write
          )
            return process.stdout.write(b);
          else {
            b[a] === "\n";
            return;
          }
        },
      },
      h = {
        buffer: "",
        output: function (a, b) {
          a = (b.length - 1) | 0;
          b[a] === "\n";
        },
      };
    function i(a) {
      if (a.buffer !== "") {
        a.output(a, a.buffer);
        a.buffer = "";
        return;
      }
    }
    function j(a, b, c, d) {
      b = c === 0 && d === b.length ? b : b.slice(c, d);
      if (
        typeof process !== "undefined" &&
        process.stdout &&
        process.stdout.write &&
        a === g
      )
        return process.stdout.write(b);
      c = b.lastIndexOf("\n");
      c < 0
        ? (a.buffer = a.buffer + b)
        : ((a.buffer = a.buffer + b.slice(0, (c + 1) | 0)),
          i(a),
          (a.buffer = a.buffer + b.slice((c + 1) | 0)));
    }
    function a(a, b) {
      return j(a, String.fromCharCode(b), 0, 1);
    }
    function b(a) {
      return { hd: g, tl: { hd: h, tl: 0 } };
    }
    var k;
    f.stdin = k;
    f.stdout = g;
    f.stderr = h;
    f.caml_ml_flush = i;
    f.caml_ml_output = j;
    f.caml_ml_output_char = a;
    f.caml_ml_out_channels_list = b;
  },
  null
);
__d(
  "bs_caml_sys",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (typeof process === "undefined" || process.env === void 0)
        throw { RE_EXN_ID: "Not_found", Error: new Error() };
      a = process.env[a];
      if (a !== void 0) return a;
      throw { RE_EXN_ID: "Not_found", Error: new Error() };
    }
    var g = function (a) {
      if (typeof process !== "undefined" && process.platform === "win32")
        return "Win32";
      else return "Unix";
    };
    function b(a) {
      if (typeof process === "undefined" || process.uptime === void 0)
        return -1;
      else return process.uptime();
    }
    function c(a) {
      return 127;
    }
    var h = function (a) {
      return typeof process === "undefined" || process.cwd === void 0
        ? "/"
        : process.cwd();
    };
    function d(a) {
      if (typeof process === "undefined") return ["", [""]];
      a = process.argv;
      if (a == null) return ["", [""]];
      else return [a[0], a];
    }
    function e(a) {
      if (typeof process !== "undefined") return process.exit(a);
    }
    function i(a) {
      throw {
        RE_EXN_ID: "Failure",
        _1: "caml_sys_is_directory not implemented",
        Error: new Error(),
      };
    }
    function j(a) {
      throw {
        RE_EXN_ID: "Failure",
        _1: "caml_sys_file_exists not implemented",
        Error: new Error(),
      };
    }
    f.caml_sys_getenv = a;
    f.caml_sys_time = b;
    f.os_type = g;
    f.caml_sys_system_command = c;
    f.caml_sys_getcwd = h;
    f.caml_sys_get_argv = d;
    f.caml_sys_exit = e;
    f.caml_sys_is_directory = i;
    f.caml_sys_file_exists = j;
  },
  null
);
__d(
  "bs_pervasives",
  [
    "bs_caml_bytes",
    "bs_caml_exceptions",
    "bs_caml_external_polyfill",
    "bs_caml_format",
    "bs_caml_io",
    "bs_caml_js_exceptions",
    "bs_caml_string",
    "bs_caml_sys",
    "bs_curry",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    function a(a) {
      throw { RE_EXN_ID: "Failure", _1: a, Error: new Error() };
    }
    function c(a) {
      throw { RE_EXN_ID: "Invalid_argument", _1: a, Error: new Error() };
    }
    var h = b("bs_caml_exceptions").create("Pervasives.Exit");
    function d(a) {
      if (a >= 0) return a;
      else return -a | 0;
    }
    function e(a) {
      return a ^ -1;
    }
    var i = -2147483648;
    function j(a) {
      if (isFinite(a))
        if (Math.abs(a) >= 22250738585072014e-324) return 0;
        else if (a !== 0) return 1;
        else return 2;
      else if (isNaN(a)) return 4;
      else return 3;
    }
    function k(a) {
      if (a < 0 || a > 255)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "char_of_int",
          Error: new Error(),
        };
      return a;
    }
    function l(a) {
      if (a) return "true";
      else return "false";
    }
    function m(a) {
      switch (a) {
        case "false":
          return !1;
        case "true":
          return !0;
        default:
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "bool_of_string",
            Error: new Error(),
          };
      }
    }
    function n(a) {
      switch (a) {
        case "false":
          return !1;
        case "true":
          return !0;
        default:
          return;
      }
    }
    function o(a) {
      try {
        return b("bs_caml_format").caml_int_of_string(a);
      } catch (c) {
        a = b("bs_caml_js_exceptions").internalToOCamlException(c);
        if (a.RE_EXN_ID === "Failure") return;
        throw a;
      }
    }
    function p(a) {
      var c = a.length,
        d = 0;
      while (!0) {
        var e = d;
        if (e >= c) return a + ".";
        var f = b("bs_caml_string").get(a, e);
        if (f >= 48) {
          if (f >= 58) return a;
          d = (e + 1) | 0;
          continue;
        }
        if (f !== 45) return a;
        d = (e + 1) | 0;
        continue;
      }
    }
    function q(a) {
      return p(b("bs_caml_format").caml_format_float("%.12g", a));
    }
    function r(a) {
      try {
        return b("bs_caml_format").caml_float_of_string(a);
      } catch (c) {
        a = b("bs_caml_js_exceptions").internalToOCamlException(c);
        if (a.RE_EXN_ID === "Failure") return;
        throw a;
      }
    }
    function s(a, b) {
      if (a) return { hd: a.hd, tl: s(a.tl, b) };
      else return b;
    }
    var t = (g = b("bs_caml_io")).stdin,
      u = g.stdout,
      v = g.stderr;
    function w(a, c, d) {
      a = b("bs_caml_external_polyfill").resolve("caml_ml_open_descriptor_out")(
        b("bs_caml_external_polyfill").resolve("caml_sys_open")(d, a, c)
      );
      b("bs_caml_external_polyfill").resolve("caml_ml_set_channel_name")(a, d);
      return a;
    }
    function x(a) {
      return w(
        { hd: 1, tl: { hd: 3, tl: { hd: 4, tl: { hd: 7, tl: 0 } } } },
        438,
        a
      );
    }
    function y(a) {
      return w(
        { hd: 1, tl: { hd: 3, tl: { hd: 4, tl: { hd: 6, tl: 0 } } } },
        438,
        a
      );
    }
    function z(a) {
      a = b("bs_caml_io").caml_ml_out_channels_list(void 0);
      while (!0) {
        var c = a;
        if (!c) return;
        try {
          b("bs_caml_io").caml_ml_flush(c.hd);
        } catch (a) {
          var d = b("bs_caml_js_exceptions").internalToOCamlException(a);
          if (d.RE_EXN_ID !== "Sys_error") throw d;
        }
        a = c.tl;
        continue;
      }
    }
    function A(a, c) {
      return b("bs_caml_external_polyfill").resolve("caml_ml_output_bytes")(
        a,
        c,
        0,
        c.length
      );
    }
    function B(a, c) {
      return b("bs_caml_io").caml_ml_output(a, c, 0, c.length);
    }
    function C(a, c, d, e) {
      if (d < 0 || e < 0 || d > ((c.length - e) | 0))
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "output",
          Error: new Error(),
        };
      return b("bs_caml_external_polyfill").resolve("caml_ml_output_bytes")(
        a,
        c,
        d,
        e
      );
    }
    function D(a, c, d, e) {
      if (d < 0 || e < 0 || d > ((c.length - e) | 0))
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "output_substring",
          Error: new Error(),
        };
      return b("bs_caml_io").caml_ml_output(a, c, d, e);
    }
    function E(a, c) {
      return b("bs_caml_external_polyfill").resolve("caml_output_value")(
        a,
        c,
        0
      );
    }
    function F(a) {
      b("bs_caml_io").caml_ml_flush(a);
      return b("bs_caml_external_polyfill").resolve("caml_ml_close_channel")(a);
    }
    function G(a) {
      try {
        b("bs_caml_io").caml_ml_flush(a);
      } catch (a) {}
      try {
        return b("bs_caml_external_polyfill").resolve("caml_ml_close_channel")(
          a
        );
      } catch (a) {
        return;
      }
    }
    function H(a, c, d) {
      a = b("bs_caml_external_polyfill").resolve("caml_ml_open_descriptor_in")(
        b("bs_caml_external_polyfill").resolve("caml_sys_open")(d, a, c)
      );
      b("bs_caml_external_polyfill").resolve("caml_ml_set_channel_name")(a, d);
      return a;
    }
    function I(a) {
      return H({ hd: 0, tl: { hd: 7, tl: 0 } }, 0, a);
    }
    function J(a) {
      return H({ hd: 0, tl: { hd: 6, tl: 0 } }, 0, a);
    }
    function K(a, c, d, e) {
      if (d < 0 || e < 0 || d > ((c.length - e) | 0))
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "input",
          Error: new Error(),
        };
      return b("bs_caml_external_polyfill").resolve("caml_ml_input")(
        a,
        c,
        d,
        e
      );
    }
    function L(a, c, d, e) {
      while (!0) {
        var f = e,
          g = d;
        if (f <= 0) return;
        var h = b("bs_caml_external_polyfill").resolve("caml_ml_input")(
          a,
          c,
          g,
          f
        );
        if (h === 0) throw { RE_EXN_ID: "End_of_file", Error: new Error() };
        e = (f - h) | 0;
        d = (g + h) | 0;
        continue;
      }
    }
    function M(a, b, c, d) {
      if (c < 0 || d < 0 || c > ((b.length - d) | 0))
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "really_input",
          Error: new Error(),
        };
      return L(a, b, c, d);
    }
    function N(a, c) {
      var d = b("bs_caml_bytes").caml_create_bytes(c);
      M(a, d, 0, c);
      return b("bs_caml_bytes").bytes_to_string(d);
    }
    function O(a) {
      var c = function (a, c, d) {
          while (!0) {
            var e = d,
              f = c;
            if (!e) return a;
            var g = e.hd,
              h = g.length;
            b("bs_caml_bytes").caml_blit_bytes(g, 0, a, (f - h) | 0, h);
            d = e.tl;
            c = (f - h) | 0;
            continue;
          }
        },
        d = function (d, e) {
          while (!0) {
            var f = e,
              g = d,
              h = b("bs_caml_external_polyfill").resolve(
                "caml_ml_input_scan_line"
              )(a);
            if (h === 0) {
              if (g) return c(b("bs_caml_bytes").caml_create_bytes(f), f, g);
              throw { RE_EXN_ID: "End_of_file", Error: new Error() };
            }
            if (h > 0) {
              var i = b("bs_caml_bytes").caml_create_bytes((h - 1) | 0);
              b("bs_caml_external_polyfill").resolve("caml_ml_input")(
                a,
                i,
                0,
                (h - 1) | 0
              );
              b("bs_caml_external_polyfill").resolve("caml_ml_input_char")(a);
              if (!g) return i;
              var j = (((f + h) | 0) - 1) | 0;
              return c(b("bs_caml_bytes").caml_create_bytes(j), j, {
                hd: i,
                tl: g,
              });
            }
            j = b("bs_caml_bytes").caml_create_bytes(-h | 0);
            b("bs_caml_external_polyfill").resolve("caml_ml_input")(
              a,
              j,
              0,
              -h | 0
            );
            e = (f - h) | 0;
            d = { hd: j, tl: g };
            continue;
          }
        };
      return b("bs_caml_bytes").bytes_to_string(d(0, 0));
    }
    function P(a) {
      try {
        return b("bs_caml_external_polyfill").resolve("caml_ml_close_channel")(
          a
        );
      } catch (a) {
        return;
      }
    }
    function Q(a) {
      return b("bs_caml_io").caml_ml_output_char(u, a);
    }
    function R(a) {
      return B(u, a);
    }
    function S(a) {
      return A(u, a);
    }
    function T(a) {
      return B(u, String(a));
    }
    function U(a) {
      return B(u, p(b("bs_caml_format").caml_format_float("%.12g", a)));
    }
    function V(a) {
      b("bs_caml_io").caml_ml_output_char(u, 10);
      return b("bs_caml_io").caml_ml_flush(u);
    }
    function W(a) {
      return b("bs_caml_io").caml_ml_output_char(v, a);
    }
    function X(a) {
      return B(v, a);
    }
    function aa(a) {
      return A(v, a);
    }
    function ba(a) {
      return B(v, String(a));
    }
    function ca(a) {
      return B(v, p(b("bs_caml_format").caml_format_float("%.12g", a)));
    }
    function da(a) {
      b("bs_caml_io").caml_ml_output_char(v, 10);
      return b("bs_caml_io").caml_ml_flush(v);
    }
    function ea(a) {
      b("bs_caml_io").caml_ml_flush(u);
      return O(t);
    }
    function fa(a) {
      return b("bs_caml_format").caml_int_of_string(
        (b("bs_caml_io").caml_ml_flush(u), O(t))
      );
    }
    function ga(a) {
      return o((b("bs_caml_io").caml_ml_flush(u), O(t)));
    }
    function ha(a) {
      return b("bs_caml_format").caml_float_of_string(
        (b("bs_caml_io").caml_ml_flush(u), O(t))
      );
    }
    function ia(a) {
      return r((b("bs_caml_io").caml_ml_flush(u), O(t)));
    }
    function ja(a) {
      return a._1;
    }
    var Y = { contents: z };
    function ka(a) {
      var c = Y.contents;
      Y.contents = function (d) {
        b("bs_curry")._1(a, void 0);
        return b("bs_curry")._1(c, void 0);
      };
    }
    function Z(a) {
      return b("bs_curry")._1(Y.contents, void 0);
    }
    function la(a) {
      Z(void 0);
      return b("bs_caml_sys").caml_sys_exit(a);
    }
    var ma = 2147483647,
      na = Infinity,
      oa = -Infinity,
      pa = 17976931348623157e292,
      qa = 22250738585072014e-324,
      ra = 2220446049250313e-31,
      sa = g.caml_ml_flush,
      ta = g.caml_ml_output_char;
    g = g.caml_ml_output_char;
    function ua(a, c) {
      return b("bs_caml_external_polyfill").resolve("caml_ml_output_int")(a, c);
    }
    function va(a, c) {
      return b("bs_caml_external_polyfill").resolve("caml_ml_seek_out")(a, c);
    }
    function wa(a) {
      return b("bs_caml_external_polyfill").resolve("caml_ml_pos_out")(a);
    }
    function xa(a) {
      return b("bs_caml_external_polyfill").resolve("caml_ml_channel_size")(a);
    }
    function ya(a, c) {
      return b("bs_caml_external_polyfill").resolve("caml_ml_set_binary_mode")(
        a,
        c
      );
    }
    function za(a) {
      return b("bs_caml_external_polyfill").resolve("caml_ml_input_char")(a);
    }
    function Aa(a) {
      return b("bs_caml_external_polyfill").resolve("caml_ml_input_char")(a);
    }
    function Ba(a) {
      return b("bs_caml_external_polyfill").resolve("caml_ml_input_int")(a);
    }
    function Ca(a) {
      return b("bs_caml_external_polyfill").resolve("caml_input_value")(a);
    }
    function Da(a, c) {
      return b("bs_caml_external_polyfill").resolve("caml_ml_seek_in")(a, c);
    }
    function Ea(a) {
      return b("bs_caml_external_polyfill").resolve("caml_ml_pos_in")(a);
    }
    function Fa(a) {
      return b("bs_caml_external_polyfill").resolve("caml_ml_channel_size")(a);
    }
    function Ga(a) {
      return b("bs_caml_external_polyfill").resolve("caml_ml_close_channel")(a);
    }
    function Ha(a, c) {
      return b("bs_caml_external_polyfill").resolve("caml_ml_set_binary_mode")(
        a,
        c
      );
    }
    function $(a, c) {
      return b("bs_caml_external_polyfill").resolve("caml_ml_seek_out_64")(
        a,
        c
      );
    }
    function Ia(a) {
      return b("bs_caml_external_polyfill").resolve("caml_ml_pos_out_64")(a);
    }
    function Ja(a) {
      return b("bs_caml_external_polyfill").resolve("caml_ml_channel_size_64")(
        a
      );
    }
    function Ka(a, c) {
      return b("bs_caml_external_polyfill").resolve("caml_ml_seek_in_64")(a, c);
    }
    function La(a) {
      return b("bs_caml_external_polyfill").resolve("caml_ml_pos_in_64")(a);
    }
    function Ma(a) {
      return b("bs_caml_external_polyfill").resolve("caml_ml_channel_size_64")(
        a
      );
    }
    $ = {
      seek_out: $,
      pos_out: Ia,
      out_channel_length: Ja,
      seek_in: Ka,
      pos_in: La,
      in_channel_length: Ma,
    };
    f.invalid_arg = c;
    f.failwith = a;
    f.Exit = h;
    f.abs = d;
    f.max_int = ma;
    f.min_int = i;
    f.lnot = e;
    f.infinity = na;
    f.neg_infinity = oa;
    f.max_float = pa;
    f.min_float = qa;
    f.epsilon_float = ra;
    f.classify_float = j;
    f.char_of_int = k;
    f.string_of_bool = l;
    f.bool_of_string = m;
    f.bool_of_string_opt = n;
    f.int_of_string_opt = o;
    f.string_of_float = q;
    f.float_of_string_opt = r;
    f.$at = s;
    f.stdin = t;
    f.stdout = u;
    f.stderr = v;
    f.print_char = Q;
    f.print_string = R;
    f.print_bytes = S;
    f.print_int = T;
    f.print_float = U;
    f.print_newline = V;
    f.prerr_char = W;
    f.prerr_string = X;
    f.prerr_bytes = aa;
    f.prerr_int = ba;
    f.prerr_float = ca;
    f.prerr_newline = da;
    f.read_line = ea;
    f.read_int = fa;
    f.read_int_opt = ga;
    f.read_float = ha;
    f.read_float_opt = ia;
    f.open_out = x;
    f.open_out_bin = y;
    f.open_out_gen = w;
    f.flush = sa;
    f.flush_all = z;
    f.output_char = ta;
    f.output_string = B;
    f.output_bytes = A;
    f.output = C;
    f.output_substring = D;
    f.output_byte = g;
    f.output_binary_int = ua;
    f.output_value = E;
    f.seek_out = va;
    f.pos_out = wa;
    f.out_channel_length = xa;
    f.close_out = F;
    f.close_out_noerr = G;
    f.set_binary_mode_out = ya;
    f.open_in = I;
    f.open_in_bin = J;
    f.open_in_gen = H;
    f.input_char = za;
    f.input_line = O;
    f.input = K;
    f.really_input = M;
    f.really_input_string = N;
    f.input_byte = Aa;
    f.input_binary_int = Ba;
    f.input_value = Ca;
    f.seek_in = Da;
    f.pos_in = Ea;
    f.in_channel_length = Fa;
    f.close_in = Ga;
    f.close_in_noerr = P;
    f.set_binary_mode_in = Ha;
    f.LargeFile = $;
    f.string_of_format = ja;
    f.exit = la;
    f.at_exit = ka;
    f.valid_float_lexem = p;
    f.unsafe_really_input = L;
    f.do_at_exit = Z;
  },
  null
);
