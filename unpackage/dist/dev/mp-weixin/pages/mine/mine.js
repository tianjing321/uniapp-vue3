"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  _easycom_u_button2();
}
const _easycom_u_button = () => "../../node-modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  _easycom_u_button();
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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => loginOut()),
        b: common_vendor.p({
          type: "warning",
          text: "退出登录"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/study/app/langChong/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
