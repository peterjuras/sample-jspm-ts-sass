System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  typescriptOptions: {
    "jsx": "react"
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  packages: {
    "src": {
      "main": "index.tsx",
      "defaultExtension": "tsx",
      "meta": {
        "*.js": {
          "loader": "ts"
        },
        "*.jsx": {
          "loader": "ts"
        },
        "*.ts": {
          "loader": "ts"
        },
        "*.tsx": {
          "loader": "ts"
        }
      }
    }
  },
  map: { }
});
