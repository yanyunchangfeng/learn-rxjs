const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const SpeedMeasureWebpackPlugin = require("speed-measure-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const smw = new SpeedMeasureWebpackPlugin();
const UnusedWebpackPlugin = require("unused-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const webpackBar = require("webpackbar");
const { NODE_ENV, ANALYZE, UNUSED, MULTIPLE } = process.env;
const isDev = NODE_ENV === "development";
isAnalyzerMode = ANALYZE === "1";
isUnusedMode = UNUSED === "1";
isMultiplePage = MULTIPLE === "1";
const noop = () => {};
// module.exports = smw.wrap({ //需要包裹一层配置对象
module.exports = {
  context: process.cwd(), // 项目执行上下文路径；
  mode: process.env.NODE_ENV, //编译模式短语，支持 development、production 等值，可以理解为一种声明环境的短语
  entry: isMultiplePage
    ? {
        // 用于定义项目入口文件，Webpack会从这些入口文件开始按图索骥找出所有项目文件；
        main: "./src/index.ts", // 可以配置多个
        modal: "./src/modal.ts", // 多页应用入口
      }
    : {
        main: "./src/index.ts",
      },
  devtool: isDev ? "source-map" : false, //用于配置产物 Sourcemap 生成规则
  output: {
    // 配置产物输出路径、名称等；
    path: path.join(process.cwd(), "docs"),
    filename: "[name].[contenthash].js", //入口代码块文件名的生成规则
    chunkFilename: "[name].[contenthash].js", //非入口模块的生成规则
    clean: true,
  },
  optimization: {
    // 用于控制如何优化产物包体积，内置DeadCodeElimination、ScopeHoisting、代码混淆、代码压缩等功能
    // moduleIds: 'natural', named  deterministic size // 模块名称的生成规则 deterministic 生产模式默认值
    // chunkIds:'natural' // named  deterministic size //代码块名称的生成规则
    // 自动分割第三方模块和公共模块
    // 以下配置项为开发模式下禁止产物优化
    splitChunks: isDev
      ? false //关闭代码分包；
      : {
          chunks: "all", // 默认作用于异步chunk，值为 all 全部/initial同步/async异步
          minSize: 300 * 1024, // 默认值是30kb，代码块的最小尺寸
          maxSize: 500 * 1024, // //超过这个尺寸的 Chunk 会尝试进一步拆分出更小的 Chunk  设置 maxSize 的值会同时设置 maxAsyncSize 和 maxInitialSize 的值
          minChunks: 2, //被多少模块共享，在分割之前模块的被引用次数
          maxAsyncRequests: 2, // 限制异步模块内部的并行最大请求数的，说白了你可以理解为是每个import()它里面的最大并行请求数量
          maxInitialRequests: 4, // 限制入口的拆分数量
          // enforceSizeThreshold: 300 * 1000, //超过这个尺寸的 Chunk 会被强制分包，忽略上述其它 size 限制；
          cacheGroups: {
            //设置缓存组用来抽取满足不同规则的chunk，下面以生成common为例
            vendors: {
              chunks: "all",
              test: /node_modules/, //条件
              reuseExistingChunk: true,
              priority: -10, //优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中，为了能够让自定义缓存组有更高的优先级
            },
            commons: {
              chunks: "all",
              minChunks: 2, //最少被几个chunk引用
              priority: -20,
              reuseExistingChunk: true, //如果该chunk中引用了已经被抽取的chunk，直接引用该chunk，不会重复打包代码
            },
          },
        },
    removeAvailableModules: isDev ? false : true,
    removeEmptyChunks: isDev ? false : true,
    minimize: isDev ? false : true, //关闭代码压缩;
    concatenateModules: isDev ? false : true, //关闭模块合并;
    usedExports: isDev ? false : true, //关闭 Tree-shaking 功能； // 标记使用到的导出
    minimizer: [
      // Webpack5 之后，约定使用 `'...'` 字面量保留默认 `minimizer` 配置
      "...",
      !isDev ? new CssMinimizerPlugin() : noop,
      !isDev
        ? new HtmlMinimizerPlugin({
            minimizerOptions: {
              // 折叠 Boolean 型属性
              collapseBooleanAttributes: true,
              // 使用精简 `doctype` 定义
              useShortDoctype: true,
              // ...
            },
          })
        : noop,
    ],
  },
  watchOptions: {
    ignored: /node_modules/, //最小化 watch 监控范围
  },
  target: "web", //用于配置编译产物的目标运行环境，支持 web、node、electron 等值，不同值最终产物会有所差异
  resolve: {
    // 用于配置模块路径解析规则，可用于帮助Webpack更精确、高效地找到指定模块
    modules: [path.resolve("node_modules")], // 解析第三方包
    extensions: [".ts", ".tsx", ".js", ".css", ".less", ".scss", ".json"], // 文件后缀名 先后顺序查找
    mainFields: ["jsnext:main", "browser", "module", "main", "style"], // 优先使用 jsnext:main 中指向的 ES6 模块化语法的文件
    mainFiles: ["index"], // 入口文件的名字 默认是index
    alias: {
      // 别名  注意tsconfig.json˙中的paths也要对应配置
      src: path.resolve("src"),
    },
  },
  resolveLoader: {
    // 用于配置解析loader时的resolve 配置,默认的配置
    modules: [path.resolve("node_modules")],
    extensions: [".js", ".json"],
    mainFields: ["loader", "main"],
  },
  experiments: {
    topLevelAwait: true,
    asyncWebAssembly: true,
    lazyCompilation: isDev ? true : false, // 按需编译
  },
  module: {
    // 用于配置模块加载规则，例如针对什么类型的资源需要使用哪些Loader进行处理
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              happyPackMode: true,
              // 跳过 TS 类型检查
              // 设置为“仅编译”，关闭类型检查
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: "asset/resource",
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              // jpeg 压缩配置
              mozjpeg: {
                quality: 80,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
              disable: isDev ? true : false,
            },
          },
        ],
        // 资源模块 对标file-loader
      },
      {
        test: /\.ico$/,
        type: "asset/inline", // 对标url-loader 模块大小<limit base64字符串
      },
      {
        test: /\.txt$/,
        type: "asset/source", // 对标raw-loader
      },
      {
        test: /\.wasm$/,
        type: "webassembly/async", // 对标wasm 模块
      },
      {
        test: /\.jpg$/,
        type: "asset", // 不加/ 相当于自动配置 模块大小大于配置走 resource 否则走 source
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
      {
        test: /\.scss|css$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  performance: !isDev //监控产物体积
    ? {
        // 设置所有产物体积阈值
        maxAssetSize: 172 * 1024,
        // 设置 entry 产物体积阈值
        maxEntrypointSize: 244 * 1024,
        // 报错方式，支持 `error` | `warning` | false
        hints: "warning",
        // 过滤需要监控的文件类型
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith(".js");
        },
      }
    : false,
  stats: "errors-only", // 只在错误时输出  用于精确地控制编译过程的日志内容，在做比较细致的性能调式时非常有用
  plugins: [
    new webpackBar(),
    // fork 出子进程，专门用于执行类型检查 这样，既可以获得 Typescript 静态类型检查能力，又能提升整体编译速度。
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
    isAnalyzerMode
      ? new BundleAnalyzerPlugin({
          analyzerMode: "server", // 启动展示打包报告的http服务器
          generateStatsFile: true, // 是否生成stats.json文件
        })
      : noop,
    new htmlWebpackPlugin({
      template: path.join(process.cwd(), "src/index.html"),
      filename: "index.html",
      chunks: ["main"], // 指定包含的代码块
      favicon: path.join(process.cwd(), "src/assets/img/yanyunchangfeng.png"),
    }),
    isMultiplePage
      ? new htmlWebpackPlugin({
          template: path.join(process.cwd(), "src/index.html"),
          filename: "modal.html",
          chunks: ["modal"],
          favicon: path.join(
            process.cwd(),
            "src/assets/img/yanyunchangfeng.png"
          ),
        })
      : noop,
    new webpack.DefinePlugin({
      AUTHOR: JSON.stringify("yanyunchangfeng"),
    }),
    new FriendlyErrorsWebpackPlugin(),
    // .日志太多太少都不美观
    // .可以修改stats
    !isDev
      ? new CopyPlugin({
          patterns: [
            {
              from: path.resolve(process.cwd(), "src", "assets"),
              to: path.resolve(process.cwd(), "docs"),
            },
          ],
          options: {
            concurrency: 100,
          },
        })
      : noop,
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    // IgnorePlugin用于忽略某些特定的模块，让webpack不把这些指定的模块打包进去
    // 第一个是匹配引入模块路径的正则表达式
    // 第二个是匹配模块的对应上下文，即所在目录名
    isUnusedMode
      ? new UnusedWebpackPlugin({
          directories: [path.join(process.cwd(), "src")], //用于指定需要分析的文件目录
          root: __dirname, // 用于显示相对路径替代原有的绝对路径。
        })
      : noop,
    !isDev
      ? new MiniCssExtractPlugin({
          filename: "[name].[contenthash].css",
          chunkFilename: "[name].[contenthash].css",
        })
      : noop,
    !isDev ? new webpack.BannerPlugin("Copyright By yanyunchangfeng") : noop,
  ],
  infrastructureLogging: {
    // 用于控制日志输出方式，例如可以通过该配置将日志输出到磁盘文件
    // appendOnly: true,
    // level: "verbose",
  },
  externals: {
    //用于声明外部资源，Webpack 会直接忽略这部分资源，跳过这些资源的解析、打包操作
  },
};
// });
