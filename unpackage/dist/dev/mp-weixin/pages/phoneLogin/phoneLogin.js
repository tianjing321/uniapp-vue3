"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u__input2 = common_vendor.resolveComponent("u--input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u__form2 = common_vendor.resolveComponent("u--form");
  (_easycom_u_button2 + _easycom_u__input2 + _easycom_u_form_item2 + _easycom_u__form2)();
}
const _easycom_u_button = () => "../../node-modules/uview-plus/components/u-button/u-button.js";
const _easycom_u__input = () => "../../node-modules/uview-plus/components/u--input/u--input.js";
const _easycom_u_form_item = () => "../../node-modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_u__form = () => "../../node-modules/uview-plus/components/u--form/u--form.js";
if (!Math) {
  (common_vendor.unref(uCode) + _easycom_u_button + _easycom_u__input + _easycom_u_form_item + _easycom_u__form)();
}
const _sfc_main = {
  __name: "phoneLogin",
  setup(__props) {
    common_vendor.onMounted(() => {
      console.log(uCode2, "uCode");
    });
    common_vendor.ref();
    const model1 = common_vendor.reactive({
      userInfo: {
        mobile: "",
        number: ""
      }
    });
    const rules = common_vendor.reactive({
      "userInfo.mobile": [
        {
          required: true,
          message: "请输入手机号",
          trigger: ["change", "blur"]
        },
        {
          // 自定义验证函数，见上说明
          validator: (rule, value, callback) => {
            return common_vendor.index.$u.test.mobile(value);
          },
          message: "手机号码不正确",
          // 触发器可以同时用blur和change
          trigger: ["change", "blur"]
        }
      ],
      "userInfo.number": {
        type: "string",
        min: 6,
        max: 6,
        required: true,
        message: "请输入验证码",
        trigger: ["blur", "change"]
      }
    });
    const uForm = common_vendor.ref();
    const submit = (form) => {
      console.log(model1, "表单");
      form.validate().then((res) => {
        console.log(res);
        common_vendor.index.$u.toast("校验通过");
      }).catch((errors) => {
        common_vendor.index.$u.toast("校验失败");
      });
    };
    const tips = common_vendor.ref("");
    const seconds = common_vendor.ref(10);
    const uCode2 = common_vendor.ref();
    const codeChange = (text) => {
      console.log(text, "输出文字");
      tips = text;
    };
    const getCode = (codeForm) => {
      console.log(uCode2);
      common_vendor.index.showLoading({
        title: "正在获取验证码"
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        common_vendor.index.$u.toast("验证码已发送");
        uCode2.start();
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
        a: common_vendor.sr(uCode2, "222e806a-0", {
          "k": "uCode"
        }),
        b: common_vendor.o(end),
        c: common_vendor.o(start),
        d: common_vendor.o(($event) => codeChange()),
        e: common_vendor.p({
          seconds: seconds.value
        }),
        f: common_vendor.t(tips.value),
        g: common_vendor.o(($event) => getCode(uCode2.value)),
        h: common_vendor.o(($event) => model1.userInfo.mobile = $event),
        i: common_vendor.p({
          placeholder: "请输入手机号",
          clearable: true,
          modelValue: model1.userInfo.mobile
        }),
        j: common_vendor.sr("item1", "222e806a-3,222e806a-2"),
        k: common_vendor.p({
          prop: "userInfo.mobile",
          borderBottom: true
        }),
        l: common_vendor.o(($event) => model1.userInfo.number = $event),
        m: common_vendor.p({
          placeholder: "请输入验证码",
          clearable: true,
          modelValue: model1.userInfo.number
        }),
        n: common_vendor.sr("item1", "222e806a-5,222e806a-2"),
        o: common_vendor.p({
          prop: "userInfo.number",
          borderBottom: true
        }),
        p: common_vendor.o(($event) => submit(uForm.value)),
        q: common_vendor.p({
          hairline: false,
          type: "warning",
          text: "登录"
        }),
        r: common_vendor.sr(uForm, "222e806a-2", {
          "k": "uForm"
        }),
        s: common_vendor.p({
          labelPosition: "left",
          model: model1,
          rules
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/study/app/langChong/pages/phoneLogin/phoneLogin.vue"]]);
wx.createPage(MiniProgramPage);
