"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_toast2 = common_vendor.resolveComponent("u-toast");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_toast2 + _easycom_u_button2)();
}
const _easycom_u_toast = () => "../../node-modules/uview-plus/components/u-toast/u-toast.js";
const _easycom_u_button = () => "../../node-modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_toast + common_vendor.unref(uCode) + _easycom_u_button)();
}
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    const loginOut = (res) => {
      common_vendor.index.removeStorage({
        key: "userInfo"
      });
      console.log("注销登录!");
      common_vendor.index.redirectTo({
        url: "/pages/login/login"
      });
    };
    let tips = "";
    const codeChange = (text) => {
      console.log("触发一次~");
      tips = text;
    };
    const uCode2 = common_vendor.ref();
    const getCode = () => {
      console.log(uCode2, "------1");
      common_vendor.index.showLoading({
        title: "正在获取验证码"
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        common_vendor.index.$u.toast("验证码已发送");
      }, 2e3);
    };
    const end = () => {
      common_vendor.index.$u.toast("倒计时结束");
    };
    const start = () => {
      common_vendor.index.$u.toast("倒计时开始");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.sr("uToast", "32e0a06a-0"),
        b: common_vendor.sr(uCode2, "32e0a06a-1", {
          "k": "uCode"
        }),
        c: common_vendor.o(end),
        d: common_vendor.o(start),
        e: common_vendor.o(codeChange),
        f: common_vendor.p({
          seconds: 10,
          ["start-text"]: "你好"
        }),
        g: common_vendor.t(common_vendor.unref(tips)),
        h: common_vendor.o(getCode),
        i: common_vendor.o(($event) => loginOut()),
        j: common_vendor.p({
          type: "warning",
          text: "退出登录"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/study/app/langChong/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
