"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u__image2 = common_vendor.resolveComponent("u--image");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_modal2 = common_vendor.resolveComponent("u-modal");
  (_easycom_u__image2 + _easycom_u_button2 + _easycom_u_modal2)();
}
const _easycom_u__image = () => "../../node-modules/uview-plus/components/u--image/u--image.js";
const _easycom_u_button = () => "../../node-modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_modal = () => "../../node-modules/uview-plus/components/u-modal/u-modal.js";
if (!Math) {
  (_easycom_u__image + _easycom_u_button + _easycom_u_modal)();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const show = common_vendor.ref(true);
    const getuserinfo = (res) => {
      common_vendor.index.getUserProfile({
        //用户实名信息，每次都弹出授权请求
        provider: "weixin",
        success: function(infoRes) {
          console.log(infoRes.userInfo, "用户信息");
          common_vendor.index.setStorage({
            key: "userInfo",
            data: infoRes.userInfo
          });
          common_vendor.index.switchTab({
            url: "/pages/index/index"
          });
        },
        fail: (error) => {
          console.log("getUserInfo fail", error);
          let content = error.errMsg;
          if (~content.indexOf("uni.login")) {
            content = "请在登录页面完成登录操作";
          }
          common_vendor.index.showModal({
            title: "获取用户信息失败",
            content: "错误原因" + content,
            showCancel: false
          });
        }
      });
    };
    const pushPhoneLogin = (res) => {
      common_vendor.index.navigateTo({ url: "/pages/phoneLogin/phoneLogin" });
      console.log(res, "跳转去手机登录");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          width: "120px",
          height: "120px",
          src: "https://cdn.uviewui.com/uview/album/1.jpg",
          shape: "circle"
        }),
        b: common_vendor.o(($event) => getuserinfo()),
        c: common_vendor.p({
          type: "warning",
          text: "微信一键登录",
          hairline: false,
          ["open-type"]: "getUserInfo"
        }),
        d: common_vendor.o(($event) => pushPhoneLogin()),
        e: common_vendor.p({
          hairline: false,
          text: "手机号登录"
        }),
        f: common_vendor.p({
          show: show.value,
          showConfirmButton: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/study/app/langChong/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
