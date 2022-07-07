// const path = require("path");

// module.exports = {
//   mode: "none",
//   entry: {
//     app: path.join(__dirname, "src", "index.tsx")
//   },
//   target: "web",
//   resolve: {
//     alias: {
//       components: path.resolve(__dirname, "./src/components"),
//       assets: path.resolve(__dirname, "./src/assets"),
//       utils: path.resolve(__dirname, "./src/utils")
//     },
//     extensions: ["", ".ts", ".tsx", ".js"]
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: "ts-loader",
//         exclude: "/node_modules/"
//       },
//       {
//         test: /\.s[ac]ss$/i,
//         use: ["style-loader", "css-loader", "sass-loader"]
//       },
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"]
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: "asset/resource"
//       }
//     ]
//   },
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist")
//   }
// };
