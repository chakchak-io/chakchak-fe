// https://react-svgr.com/docs/options/

module.exports = {
  template: require("../../templates/svgr-cli.template.cjs"),
  // descProp:true,
  expandProps: true,
  dimensions: true,
  jsxRuntime: "classic",
  filenameCase: "pascal",
  outDir: "../../generated",
  ext: "tsx",
  ref: true,
  memo: true,
  typescript: true,
  svgProps: {
    width: "{finalSize}",
    height: "{finalSize}",
    fill: "{fill}",
    viewBox: "0 0 32 32",
  },
  replaceAttrValues: {
    "#52525B": "{fill}",
    black: "{fill}",
    "#000000": "{fill}",
    "#000": "{fill}",
    "#FFF0E5": "{fill}",
  },
};
