import {
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  popScopeId,
  pushScopeId,
  ref,
  render,
  renderSlot,
  toDisplayString,
  unref,
  vShow,
  withDirectives
} from "./chunk-IBAS2QTM.js";

// node_modules/lcl-test-ui/dist/lcl-test-ui.mjs
var _ = (e, c) => {
  const t = e.__vccOpts || e;
  for (const [o, a] of c)
    t[o] = a;
  return t;
};
var B = { class: "my-button" };
var E = defineComponent({
  name: "lclButton"
});
var L = Object.assign(E, {
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(e) {
    const c = e, t = computed(() => ["lcl-button", `lcl-button-${c.type}`]);
    return (o, a) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(unref(t))
    }, [
      createBaseVNode("button", B, [
        renderSlot(o.$slots, "default", {}, void 0, true)
      ])
    ], 2));
  }
});
var $ = _(L, [["__scopeId", "data-v-b7918169"]]);
var N = ["value", "placeholder"];
var O = defineComponent({
  name: "lclInput"
});
var j = Object.assign(O, {
  props: {
    placeholder: {
      type: String,
      default: "placeholder"
    },
    modelValue: {
      type: String || Number,
      default: "placeholder"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: c }) {
    const t = (o) => {
      c("update:modelValue", o.target.value);
    };
    return (o, a) => (openBlock(), createElementBlock("div", null, [
      createBaseVNode("input", {
        class: "lcl-input",
        type: "text",
        value: e.modelValue,
        placeholder: e.placeholder,
        onInput: t
      }, null, 40, N)
    ]));
  }
});
var D = _(j, [["__scopeId", "data-v-f6d98ac9"]]);
var T = {
  name: "lclMessage",
  //	这个是传值方法，通过父级组件传入提示状态以及提示文本
  //	可以根据不同业务自定义更多的状态
  props: {
    type: {
      type: String,
      //	success 成功
      //	warn 警告
      //	error 错误
      default: "success"
    },
    str: {
      type: String,
      default: "登陆成功"
    }
  },
  setup() {
    const e = {
      warning: {
        color: "#faad14"
      },
      error: {
        color: "#F56C6C"
      },
      success: {
        color: "#52c41a"
      },
      info: {
        color: "#1890ff"
      }
    }, c = ref(false);
    return onMounted(() => {
      c.value = true;
    }), { style: e, visible: c };
  }
};
var i = (e) => (pushScopeId("data-v-a983a60b"), e = e(), popScopeId(), e);
var F = { class: "lcl-message-box" };
var H = {
  key: 0,
  focusable: "false",
  class: "",
  "data-icon": "check-circle",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "64 64 896 896"
};
var P = i(() => createBaseVNode("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" }, null, -1));
var U = [
  P
];
var q = {
  key: 1,
  focusable: "false",
  class: "",
  "data-icon": "exclamation-circle",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "64 64 896 896"
};
var A = i(() => createBaseVNode("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" }, null, -1));
var G = [
  A
];
var J = {
  key: 2,
  focusable: "false",
  class: "",
  "data-icon": "close-circle",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "64 64 896 896"
};
var K = i(() => createBaseVNode("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" }, null, -1));
var Q = [
  K
];
var R = {
  key: 3,
  focusable: "false",
  class: "",
  "data-icon": "info-circle",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "64 64 896 896"
};
var W = i(() => createBaseVNode("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" }, null, -1));
var X = [
  W
];
var Y = { class: "text" };
function Z(e, c, t, o, a, ce) {
  return openBlock(), createElementBlock("div", F, [
    withDirectives(createBaseVNode("div", {
      class: "lcl-message",
      style: normalizeStyle(o.style[t.type])
    }, [
      t.type === "success" ? (openBlock(), createElementBlock("svg", H, U)) : createCommentVNode("", true),
      t.type === "warning" ? (openBlock(), createElementBlock("svg", q, G)) : createCommentVNode("", true),
      t.type === "error" ? (openBlock(), createElementBlock("svg", J, Q)) : createCommentVNode("", true),
      t.type === "info" ? (openBlock(), createElementBlock("svg", R, X)) : createCommentVNode("", true),
      createBaseVNode("span", Y, toDisplayString(t.str), 1)
    ], 4), [
      [vShow, o.visible]
    ])
  ]);
}
var ee = _(T, [["render", Z], ["__scopeId", "data-v-a983a60b"]]);
var r = typeof document < "u" && typeof document.createElement < "u" ? document.createElement("div") : "";
var u = null;
var f = ({ str: e, type: c }) => {
  document.body.appendChild(r);
  const t = createVNode(ee, { str: e, type: c });
  render(t, r), u && clearTimeout(u), u = setTimeout(() => {
    render(null, r);
  }, 5e6);
};
var te = [
  $,
  D,
  f
];
var m = function(e) {
  te.forEach((c) => {
    e.component(c.name, c);
  }), e.config.globalProperties.$lclMessage = f, typeof window < "u" && window.Vue && m(window.Vue);
};
var se = {
  install: m
};
export {
  f as Message,
  se as default,
  m as install,
  $ as lclButton,
  D as lclInput
};
//# sourceMappingURL=lcl-test-ui_dist_lcl-test-ui__mjs.js.map
