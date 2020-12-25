module.exports = {
  root: true,
  extends: ["airbnb-typescript", "airbnb/hooks"],
  parserOptions: {
    project: "./tsconfig.json",
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
  },
};
