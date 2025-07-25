"use client";
import {
  require_react_dom
} from "./chunk-WPQCFWW4.js";
import {
  require_react
} from "./chunk-3TFVT2CW.js";
import {
  __toESM
} from "./chunk-4MBMRILA.js";

// node_modules/sonner/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);
var Ct = (s) => {
  switch (s) {
    case "success":
      return $t;
    case "info":
      return _t;
    case "warning":
      return Wt;
    case "error":
      return Ut;
    default:
      return null;
  }
};
var Ft = Array(12).fill(0);
var It = ({ visible: s }) => import_react2.default.createElement("div", { className: "sonner-loading-wrapper", "data-visible": s }, import_react2.default.createElement("div", { className: "sonner-spinner" }, Ft.map((o, t) => import_react2.default.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${t}` }))));
var $t = import_react2.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, import_react2.default.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" }));
var Wt = import_react2.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, import_react2.default.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" }));
var _t = import_react2.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, import_react2.default.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" }));
var Ut = import_react2.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, import_react2.default.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }));
var Dt = () => {
  let [s, o] = import_react3.default.useState(document.hidden);
  return import_react3.default.useEffect(() => {
    let t = () => {
      o(document.hidden);
    };
    return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
  }, []), s;
};
var ct = 1;
var ut = class {
  constructor() {
    this.subscribe = (o) => (this.subscribers.push(o), () => {
      let t = this.subscribers.indexOf(o);
      this.subscribers.splice(t, 1);
    });
    this.publish = (o) => {
      this.subscribers.forEach((t) => t(o));
    };
    this.addToast = (o) => {
      this.publish(o), this.toasts = [...this.toasts, o];
    };
    this.create = (o) => {
      var b;
      let { message: t, ...n } = o, h = typeof (o == null ? void 0 : o.id) == "number" || ((b = o.id) == null ? void 0 : b.length) > 0 ? o.id : ct++, u = this.toasts.find((d) => d.id === h), g = o.dismissible === void 0 ? true : o.dismissible;
      return u ? this.toasts = this.toasts.map((d) => d.id === h ? (this.publish({ ...d, ...o, id: h, title: t }), { ...d, ...o, id: h, dismissible: g, title: t }) : d) : this.addToast({ title: t, ...n, dismissible: g, id: h }), h;
    };
    this.dismiss = (o) => (o || this.toasts.forEach((t) => {
      this.subscribers.forEach((n) => n({ id: t.id, dismiss: true }));
    }), this.subscribers.forEach((t) => t({ id: o, dismiss: true })), o);
    this.message = (o, t) => this.create({ ...t, message: o });
    this.error = (o, t) => this.create({ ...t, message: o, type: "error" });
    this.success = (o, t) => this.create({ ...t, type: "success", message: o });
    this.info = (o, t) => this.create({ ...t, type: "info", message: o });
    this.warning = (o, t) => this.create({ ...t, type: "warning", message: o });
    this.loading = (o, t) => this.create({ ...t, type: "loading", message: o });
    this.promise = (o, t) => {
      if (!t) return;
      let n;
      t.loading !== void 0 && (n = this.create({ ...t, promise: o, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let h = o instanceof Promise ? o : o(), u = n !== void 0;
      return h.then(async (g) => {
        if (Ot(g) && !g.ok) {
          u = false;
          let b = typeof t.error == "function" ? await t.error(`HTTP error! status: ${g.status}`) : t.error, d = typeof t.description == "function" ? await t.description(`HTTP error! status: ${g.status}`) : t.description;
          this.create({ id: n, type: "error", message: b, description: d });
        } else if (t.success !== void 0) {
          u = false;
          let b = typeof t.success == "function" ? await t.success(g) : t.success, d = typeof t.description == "function" ? await t.description(g) : t.description;
          this.create({ id: n, type: "success", message: b, description: d });
        }
      }).catch(async (g) => {
        if (t.error !== void 0) {
          u = false;
          let b = typeof t.error == "function" ? await t.error(g) : t.error, d = typeof t.description == "function" ? await t.description(g) : t.description;
          this.create({ id: n, type: "error", message: b, description: d });
        }
      }).finally(() => {
        var g;
        u && (this.dismiss(n), n = void 0), (g = t.finally) == null || g.call(t);
      }), n;
    };
    this.custom = (o, t) => {
      let n = (t == null ? void 0 : t.id) || ct++;
      return this.create({ jsx: o(n), id: n, ...t }), n;
    };
    this.subscribers = [], this.toasts = [];
  }
};
var v = new ut();
var Vt = (s, o) => {
  let t = (o == null ? void 0 : o.id) || ct++;
  return v.addToast({ title: s, ...o, id: t }), t;
};
var Ot = (s) => s && typeof s == "object" && "ok" in s && typeof s.ok == "boolean" && "status" in s && typeof s.status == "number";
var Kt = Vt;
var Xt = () => v.toasts;
var Jt = Object.assign(Kt, { success: v.success, info: v.info, warning: v.warning, error: v.error, custom: v.custom, message: v.message, promise: v.promise, dismiss: v.dismiss, loading: v.loading }, { getHistory: Xt });
function ft(s, { insertAt: o } = {}) {
  if (!s || typeof document == "undefined") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", o === "top" && t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = s : n.appendChild(document.createTextNode(s));
}
ft(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function U(s) {
  return s.label !== void 0;
}
var qt = 3;
var Qt = "32px";
var Zt = 4e3;
var te = 356;
var ee = 14;
var oe = 20;
var ae = 200;
function ne(...s) {
  return s.filter(Boolean).join(" ");
}
var se = (s) => {
  var yt, xt, vt, wt, Tt, St, Rt, Et, Nt, Pt;
  let { invert: o, toast: t, unstyled: n, interacting: h, setHeights: u, visibleToasts: g, heights: b, index: d, toasts: q, expanded: $, removeToast: V, defaultRichColors: Q, closeButton: i, style: O, cancelButtonStyle: K, actionButtonStyle: Z, className: tt = "", descriptionClassName: et = "", duration: X, position: ot, gap: w, loadingIcon: j, expandByDefault: W, classNames: r, icons: I, closeButtonAriaLabel: at = "Close toast", pauseWhenPageIsHidden: k, cn: T } = s, [z, nt] = import_react.default.useState(false), [D, H] = import_react.default.useState(false), [st, N] = import_react.default.useState(false), [M, rt] = import_react.default.useState(false), [c, m] = import_react.default.useState(0), [y, S] = import_react.default.useState(0), A = import_react.default.useRef(null), l = import_react.default.useRef(null), _ = d === 0, J = d + 1 <= g, x = t.type, P = t.dismissible !== false, Mt = t.className || "", At = t.descriptionClassName || "", G = import_react.default.useMemo(() => b.findIndex((a) => a.toastId === t.id) || 0, [b, t.id]), Lt = import_react.default.useMemo(() => {
    var a;
    return (a = t.closeButton) != null ? a : i;
  }, [t.closeButton, i]), mt = import_react.default.useMemo(() => t.duration || X || Zt, [t.duration, X]), it = import_react.default.useRef(0), Y = import_react.default.useRef(0), pt = import_react.default.useRef(0), F = import_react.default.useRef(null), [gt, zt] = ot.split("-"), ht = import_react.default.useMemo(() => b.reduce((a, f, p) => p >= G ? a : a + f.height, 0), [b, G]), bt = Dt(), jt = t.invert || o, lt = x === "loading";
  Y.current = import_react.default.useMemo(() => G * w + ht, [G, ht]), import_react.default.useEffect(() => {
    nt(true);
  }, []), import_react.default.useLayoutEffect(() => {
    if (!z) return;
    let a = l.current, f = a.style.height;
    a.style.height = "auto";
    let p = a.getBoundingClientRect().height;
    a.style.height = f, S(p), u((B) => B.find((R) => R.toastId === t.id) ? B.map((R) => R.toastId === t.id ? { ...R, height: p } : R) : [{ toastId: t.id, height: p, position: t.position }, ...B]);
  }, [z, t.title, t.description, u, t.id]);
  let L = import_react.default.useCallback(() => {
    H(true), m(Y.current), u((a) => a.filter((f) => f.toastId !== t.id)), setTimeout(() => {
      V(t);
    }, ae);
  }, [t, V, u, Y]);
  import_react.default.useEffect(() => {
    if (t.promise && x === "loading" || t.duration === 1 / 0 || t.type === "loading") return;
    let a, f = mt;
    return $ || h || k && bt ? (() => {
      if (pt.current < it.current) {
        let C = (/* @__PURE__ */ new Date()).getTime() - it.current;
        f = f - C;
      }
      pt.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      f !== 1 / 0 && (it.current = (/* @__PURE__ */ new Date()).getTime(), a = setTimeout(() => {
        var C;
        (C = t.onAutoClose) == null || C.call(t, t), L();
      }, f));
    })(), () => clearTimeout(a);
  }, [$, h, W, t, mt, L, t.promise, x, k, bt]), import_react.default.useEffect(() => {
    let a = l.current;
    if (a) {
      let f = a.getBoundingClientRect().height;
      return S(f), u((p) => [{ toastId: t.id, height: f, position: t.position }, ...p]), () => u((p) => p.filter((B) => B.toastId !== t.id));
    }
  }, [u, t.id]), import_react.default.useEffect(() => {
    t.delete && L();
  }, [L, t.delete]);
  function Yt() {
    return I != null && I.loading ? import_react.default.createElement("div", { className: "sonner-loader", "data-visible": x === "loading" }, I.loading) : j ? import_react.default.createElement("div", { className: "sonner-loader", "data-visible": x === "loading" }, j) : import_react.default.createElement(It, { visible: x === "loading" });
  }
  return import_react.default.createElement("li", { "aria-live": t.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: l, className: T(tt, Mt, r == null ? void 0 : r.toast, (yt = t == null ? void 0 : t.classNames) == null ? void 0 : yt.toast, r == null ? void 0 : r.default, r == null ? void 0 : r[x], (xt = t == null ? void 0 : t.classNames) == null ? void 0 : xt[x]), "data-sonner-toast": "", "data-rich-colors": (vt = t.richColors) != null ? vt : Q, "data-styled": !(t.jsx || t.unstyled || n), "data-mounted": z, "data-promise": !!t.promise, "data-removed": D, "data-visible": J, "data-y-position": gt, "data-x-position": zt, "data-index": d, "data-front": _, "data-swiping": st, "data-dismissible": P, "data-type": x, "data-invert": jt, "data-swipe-out": M, "data-expanded": !!($ || W && z), style: { "--index": d, "--toasts-before": d, "--z-index": q.length - d, "--offset": `${D ? c : Y.current}px`, "--initial-height": W ? "auto" : `${y}px`, ...O, ...t.style }, onPointerDown: (a) => {
    lt || !P || (A.current = /* @__PURE__ */ new Date(), m(Y.current), a.target.setPointerCapture(a.pointerId), a.target.tagName !== "BUTTON" && (N(true), F.current = { x: a.clientX, y: a.clientY }));
  }, onPointerUp: () => {
    var B, C, R, dt;
    if (M || !P) return;
    F.current = null;
    let a = Number(((B = l.current) == null ? void 0 : B.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), f = (/* @__PURE__ */ new Date()).getTime() - ((C = A.current) == null ? void 0 : C.getTime()), p = Math.abs(a) / f;
    if (Math.abs(a) >= oe || p > 0.11) {
      m(Y.current), (R = t.onDismiss) == null || R.call(t, t), L(), rt(true);
      return;
    }
    (dt = l.current) == null || dt.style.setProperty("--swipe-amount", "0px"), N(false);
  }, onPointerMove: (a) => {
    var Bt;
    if (!F.current || !P) return;
    let f = a.clientY - F.current.y, p = a.clientX - F.current.x, C = (gt === "top" ? Math.min : Math.max)(0, f), R = a.pointerType === "touch" ? 10 : 2;
    Math.abs(C) > R ? (Bt = l.current) == null || Bt.style.setProperty("--swipe-amount", `${f}px`) : Math.abs(p) > R && (F.current = null);
  } }, Lt && !t.jsx ? import_react.default.createElement("button", { "aria-label": at, "data-disabled": lt, "data-close-button": true, onClick: lt || !P ? () => {
  } : () => {
    var a;
    L(), (a = t.onDismiss) == null || a.call(t, t);
  }, className: T(r == null ? void 0 : r.closeButton, (wt = t == null ? void 0 : t.classNames) == null ? void 0 : wt.closeButton) }, import_react.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, import_react.default.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), import_react.default.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, t.jsx || import_react.default.isValidElement(t.title) ? t.jsx || t.title : import_react.default.createElement(import_react.default.Fragment, null, x || t.icon || t.promise ? import_react.default.createElement("div", { "data-icon": "", className: T(r == null ? void 0 : r.icon, (Tt = t == null ? void 0 : t.classNames) == null ? void 0 : Tt.icon) }, t.promise || t.type === "loading" && !t.icon ? t.icon || Yt() : null, t.type !== "loading" ? t.icon || (I == null ? void 0 : I[x]) || Ct(x) : null) : null, import_react.default.createElement("div", { "data-content": "", className: T(r == null ? void 0 : r.content, (St = t == null ? void 0 : t.classNames) == null ? void 0 : St.content) }, import_react.default.createElement("div", { "data-title": "", className: T(r == null ? void 0 : r.title, (Rt = t == null ? void 0 : t.classNames) == null ? void 0 : Rt.title) }, t.title), t.description ? import_react.default.createElement("div", { "data-description": "", className: T(et, At, r == null ? void 0 : r.description, (Et = t == null ? void 0 : t.classNames) == null ? void 0 : Et.description) }, t.description) : null), import_react.default.isValidElement(t.cancel) ? t.cancel : t.cancel && U(t.cancel) ? import_react.default.createElement("button", { "data-button": true, "data-cancel": true, style: t.cancelButtonStyle || K, onClick: (a) => {
    var f, p;
    U(t.cancel) && P && ((p = (f = t.cancel).onClick) == null || p.call(f, a), L());
  }, className: T(r == null ? void 0 : r.cancelButton, (Nt = t == null ? void 0 : t.classNames) == null ? void 0 : Nt.cancelButton) }, t.cancel.label) : null, import_react.default.isValidElement(t.action) ? t.action : t.action && U(t.action) ? import_react.default.createElement("button", { "data-button": true, "data-action": true, style: t.actionButtonStyle || Z, onClick: (a) => {
    var f, p;
    U(t.action) && (a.defaultPrevented || ((p = (f = t.action).onClick) == null || p.call(f, a), L()));
  }, className: T(r == null ? void 0 : r.actionButton, (Pt = t == null ? void 0 : t.classNames) == null ? void 0 : Pt.actionButton) }, t.action.label) : null));
};
function Ht() {
  if (typeof window == "undefined" || typeof document == "undefined") return "ltr";
  let s = document.documentElement.getAttribute("dir");
  return s === "auto" || !s ? window.getComputedStyle(document.documentElement).direction : s;
}
function we() {
  let [s, o] = import_react.default.useState([]);
  return import_react.default.useEffect(() => v.subscribe((t) => {
    o((n) => {
      if ("dismiss" in t && t.dismiss) return n.filter((u) => u.id !== t.id);
      let h = n.findIndex((u) => u.id === t.id);
      if (h !== -1) {
        let u = [...n];
        return u[h] = { ...u[h], ...t }, u;
      } else return [t, ...n];
    });
  }), []), { toasts: s };
}
var Te = (s) => {
  let { invert: o, position: t = "bottom-right", hotkey: n = ["altKey", "KeyT"], expand: h, closeButton: u, className: g, offset: b, theme: d = "light", richColors: q, duration: $, style: V, visibleToasts: Q = qt, toastOptions: i, dir: O = Ht(), gap: K = ee, loadingIcon: Z, icons: tt, containerAriaLabel: et = "Notifications", pauseWhenPageIsHidden: X, cn: ot = ne } = s, [w, j] = import_react.default.useState([]), W = import_react.default.useMemo(() => Array.from(new Set([t].concat(w.filter((c) => c.position).map((c) => c.position)))), [w, t]), [r, I] = import_react.default.useState([]), [at, k] = import_react.default.useState(false), [T, z] = import_react.default.useState(false), [nt, D] = import_react.default.useState(d !== "system" ? d : typeof window != "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), H = import_react.default.useRef(null), st = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), N = import_react.default.useRef(null), M = import_react.default.useRef(false), rt = import_react.default.useCallback((c) => {
    var m;
    (m = w.find((y) => y.id === c.id)) != null && m.delete || v.dismiss(c.id), j((y) => y.filter(({ id: S }) => S !== c.id));
  }, [w]);
  return import_react.default.useEffect(() => v.subscribe((c) => {
    if (c.dismiss) {
      j((m) => m.map((y) => y.id === c.id ? { ...y, delete: true } : y));
      return;
    }
    setTimeout(() => {
      import_react_dom.default.flushSync(() => {
        j((m) => {
          let y = m.findIndex((S) => S.id === c.id);
          return y !== -1 ? [...m.slice(0, y), { ...m[y], ...c }, ...m.slice(y + 1)] : [c, ...m];
        });
      });
    });
  }), []), import_react.default.useEffect(() => {
    if (d !== "system") {
      D(d);
      return;
    }
    d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? D("dark") : D("light")), typeof window != "undefined" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: c }) => {
      D(c ? "dark" : "light");
    });
  }, [d]), import_react.default.useEffect(() => {
    w.length <= 1 && k(false);
  }, [w]), import_react.default.useEffect(() => {
    let c = (m) => {
      var S, A;
      n.every((l) => m[l] || m.code === l) && (k(true), (S = H.current) == null || S.focus()), m.code === "Escape" && (document.activeElement === H.current || (A = H.current) != null && A.contains(document.activeElement)) && k(false);
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [n]), import_react.default.useEffect(() => {
    if (H.current) return () => {
      N.current && (N.current.focus({ preventScroll: true }), N.current = null, M.current = false);
    };
  }, [H.current]), w.length ? import_react.default.createElement("section", { "aria-label": `${et} ${st}`, tabIndex: -1 }, W.map((c, m) => {
    var A;
    let [y, S] = c.split("-");
    return import_react.default.createElement("ol", { key: c, dir: O === "auto" ? Ht() : O, tabIndex: -1, ref: H, className: g, "data-sonner-toaster": true, "data-theme": nt, "data-y-position": y, "data-x-position": S, style: { "--front-toast-height": `${((A = r[0]) == null ? void 0 : A.height) || 0}px`, "--offset": typeof b == "number" ? `${b}px` : b || Qt, "--width": `${te}px`, "--gap": `${K}px`, ...V }, onBlur: (l) => {
      M.current && !l.currentTarget.contains(l.relatedTarget) && (M.current = false, N.current && (N.current.focus({ preventScroll: true }), N.current = null));
    }, onFocus: (l) => {
      l.target instanceof HTMLElement && l.target.dataset.dismissible === "false" || M.current || (M.current = true, N.current = l.relatedTarget);
    }, onMouseEnter: () => k(true), onMouseMove: () => k(true), onMouseLeave: () => {
      T || k(false);
    }, onPointerDown: (l) => {
      l.target instanceof HTMLElement && l.target.dataset.dismissible === "false" || z(true);
    }, onPointerUp: () => z(false) }, w.filter((l) => !l.position && m === 0 || l.position === c).map((l, _) => {
      var J, x;
      return import_react.default.createElement(se, { key: l.id, icons: tt, index: _, toast: l, defaultRichColors: q, duration: (J = i == null ? void 0 : i.duration) != null ? J : $, className: i == null ? void 0 : i.className, descriptionClassName: i == null ? void 0 : i.descriptionClassName, invert: o, visibleToasts: Q, closeButton: (x = i == null ? void 0 : i.closeButton) != null ? x : u, interacting: T, position: c, style: i == null ? void 0 : i.style, unstyled: i == null ? void 0 : i.unstyled, classNames: i == null ? void 0 : i.classNames, cancelButtonStyle: i == null ? void 0 : i.cancelButtonStyle, actionButtonStyle: i == null ? void 0 : i.actionButtonStyle, removeToast: rt, toasts: w.filter((P) => P.position == l.position), heights: r.filter((P) => P.position == l.position), setHeights: I, expandByDefault: h, gap: K, loadingIcon: Z, expanded: at, pauseWhenPageIsHidden: X, cn: ot });
    }));
  })) : null;
};
export {
  Te as Toaster,
  Jt as toast,
  we as useSonner
};
//# sourceMappingURL=sonner.js.map
