module.exports = {
  presets: [
    ["@babel/present-env", { targets: { esmodules: true } }],
    ["@babel/present-react", { runtime: "automatic" }],
  ],
};
