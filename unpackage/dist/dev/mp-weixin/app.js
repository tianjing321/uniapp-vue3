"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/phoneLogin/phoneLogin.js";
  "./pages/login/login.js";
  "./pages/index/index.js";
  "./pages/mine/mine.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
    let userInfo = common_vendor.index.getStorageSync("userInfo");
    console.log(userInfo, "有用户信息吗？");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/study/app/langChong/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(common_vendor.uviewPlus);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
