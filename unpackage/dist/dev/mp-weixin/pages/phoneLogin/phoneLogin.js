"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u__image2 = common_vendor.resolveComponent("u--image");
  const _easycom_u__input2 = common_vendor.resolveComponent("u--input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_code2 = common_vendor.resolveComponent("u-code");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u__form2 = common_vendor.resolveComponent("u--form");
  (_easycom_u__image2 + _easycom_u__input2 + _easycom_u_form_item2 + _easycom_u_code2 + _easycom_u_button2 + _easycom_u__form2)();
}
const _easycom_u__image = () => "../../node-modules/uview-plus/components/u--image/u--image.js";
const _easycom_u__input = () => "../../node-modules/uview-plus/components/u--input/u--input.js";
const _easycom_u_form_item = () => "../../node-modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_u_code = () => "../../node-modules/uview-plus/components/u-code/u-code.js";
const _easycom_u_button = () => "../../node-modules/uview-plus/components/u-button/u-button.js";
const _easycom_u__form = () => "../../node-modules/uview-plus/components/u--form/u--form.js";
if (!Math) {
  (_easycom_u__image + _easycom_u__input + _easycom_u_form_item + _easycom_u_code + _easycom_u_button + _easycom_u__form)();
}
const _sfc_main = {
  __name: "phoneLogin",
  setup(__props) {
    common_vendor.onMounted(() => {
      console.log(uCode2, "uCode2");
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
        common_vendor.index.switchTab({
          url: "/pages/index/index"
        });
      }).catch((errors) => {
        common_vendor.index.$u.toast("校验失败");
      });
    };
    let submitDisabled = common_vendor.ref(true);
    const tips2 = common_vendor.ref("");
    common_vendor.ref(10);
    const uCode2 = common_vendor.ref();
    const codeChange2 = (text) => {
      tips2.value = text;
    };
    const changeCode = (value) => {
      submitDisabled.value = false;
    };
    let codeDisable = common_vendor.ref(true);
    const phoneChange = (value) => {
      let flag = common_vendor.index.$u.test.mobile(value);
      if (!flag)
        return;
      codeDisable.value = false;
    };
    const getCode2 = (codeForm) => {
      console.log(uCode2);
      let phoneNumber = model1.userInfo.mobile;
      if (!(phoneNumber && common_vendor.index.$u.test.mobile(phoneNumber))) {
        common_vendor.index.$u.toast("请输入正确的手机号！");
        return;
      }
      if (uCode2.value.canGetCode) {
        common_vendor.index.showLoading({
          title: "正在获取验证码"
        });
        setTimeout(() => {
          common_vendor.index.hideLoading();
          common_vendor.index.$u.toast("验证码已发送");
          uCode2.value.start();
        }, 2e3);
      } else {
        common_vendor.index.$u.toast("倒计时结束后再发送");
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          showLoading: true,
          src: "https://cdn.uviewui.com/uview/common/logo.png",
          width: "140px",
          height: "140px"
        }),
        b: common_vendor.o(phoneChange),
        c: common_vendor.o(($event) => model1.userInfo.mobile = $event),
        d: common_vendor.p({
          border: "bottom",
          placeholder: "请输入手机号",
          clearable: true,
          modelValue: model1.userInfo.mobile
        }),
        e: common_vendor.sr("item1", "222e806a-2,222e806a-1"),
        f: common_vendor.p({
          prop: "userInfo.mobile"
        }),
        g: common_vendor.o(changeCode),
        h: common_vendor.o(($event) => model1.userInfo.number = $event),
        i: common_vendor.p({
          min: "6",
          max: "6",
          border: "bottom",
          placeholder: "请输入验证码",
          clearable: true,
          modelValue: model1.userInfo.number
        }),
        j: common_vendor.sr(uCode2, "222e806a-6,222e806a-4", {
          "k": "uCode2"
        }),
        k: common_vendor.o(codeChange2),
        l: common_vendor.p({
          ["keep-running"]: true,
          ["start-text"]: "点我获取验证码"
        }),
        m: common_vendor.t(tips2.value),
        n: common_vendor.o(getCode2),
        o: common_vendor.p({
          text: tips2.value,
          disabled: common_vendor.unref(codeDisable),
          plain: true,
          type: "warning"
        }),
        p: common_vendor.sr("item1", "222e806a-4,222e806a-1"),
        q: common_vendor.p({
          prop: "userInfo.number",
          borderBottom: true
        }),
        r: common_vendor.o(($event) => submit(uForm.value)),
        s: common_vendor.p({
          hairline: false,
          type: "warning",
          disabled: common_vendor.unref(submitDisabled),
          text: "登录"
        }),
        t: common_vendor.sr(uForm, "222e806a-1", {
          "k": "uForm"
        }),
        v: common_vendor.p({
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
