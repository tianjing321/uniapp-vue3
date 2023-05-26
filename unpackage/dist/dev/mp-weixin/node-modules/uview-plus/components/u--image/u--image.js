"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uvImage = () => "../u-image/u-image.js";
const _sfc_main = {
  name: "u--image",
  mixins: [common_vendor.mpMixin, common_vendor.props, common_vendor.mixin],
  components: {
    uvImage
  },
  emits: ["click", "error", "load"]
};
if (!Array) {
  const _component_uvImage = common_vendor.resolveComponent("uvImage");
  _component_uvImage();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => _ctx.$emit("click")),
    b: common_vendor.o(($event) => _ctx.$emit("error")),
    c: common_vendor.o(($event) => _ctx.$emit("load")),
    d: common_vendor.p({
      src: _ctx.src,
      mode: _ctx.mode,
      width: _ctx.width,
      height: _ctx.height,
      shape: _ctx.shape,
      radius: _ctx.radius,
      lazyLoad: _ctx.lazyLoad,
      showMenuByLongpress: _ctx.showMenuByLongpress,
      loadingIcon: _ctx.loadingIcon,
      errorIcon: _ctx.errorIcon,
      showLoading: _ctx.showLoading,
      showError: _ctx.showError,
      fade: _ctx.fade,
      webp: _ctx.webp,
      duration: _ctx.duration,
      bgColor: _ctx.bgColor,
      customStyle: _ctx.customStyle
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/study/app/langChong/node_modules/uview-plus/components/u--image/u--image.vue"]]);
wx.createComponent(Component);
