const { 
  override, 
  addBabelPlugins, // babel插件配置函数
  addWebpackAlias, // 路径别名
  adjustStyleLoaders,
  addPostcssPlugins
} = require('customize-cra')

const path = require('path')
// const rewirePostcss = require('react-app-rewire-postcss')
// const px2rem = require('postcss-px2rem')
const px2rem = require('postcss-plugin-px2rem')

module.exports = override(
  // ...其他配置...
  adjustStyleLoaders(rule => {
    if (rule.test.toString().includes('scss')) {
      rule.use.push({
        loader: require.resolve('sass-resources-loader'),
        options: {
          resources: './src/assets/scss/px2rem.scss' //这里是你自己放公共scss变量的路径
        }
      })
    }
  }),
  ...addBabelPlugins(
    [ 
      '@babel/plugin-proposal-decorators', // 支持装饰器
      {legacy: true}
    ]
  ),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    'components': '@/components',
    'assets': '@/assets',
    'hooks': '@/hooks',
    'network': '@/network',
    'pages': '@/pages',
    'routes': '@/routes',
    'store': '@/store',
    'utils': '@/utils'
  }),
  addPostcssPlugins([
    px2rem({
      rootValue: 75, //换算基数， 默认100 
      unitPrecision: 8, //允许REM单位增长到的十进制数字。
      propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
      propBlackList: [], //黑名单
      exclude: /(node_module)/,  //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
      selectorBlackList: [], //要忽略并保留为px的选择器
      ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
      replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
      mediaQuery: false,  //（布尔值）允许在媒体查询中转换px。
      minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
    }),
  ]),
  // (config) => {
  //   // 重写postcss
  //   rewirePostcss(config,{
  //     plugins: () => [
  //       require('postcss-flexbugs-fixes'),
  //       require('postcss-preset-env')({
  //           autoprefixer: {
  //               flexbox: 'no-2009',
  //           },
  //           stage: 3,
  //       }),
  //       //关键:设置px2rem
  //       px2rem({
  //           remUnit: 75,
  //           exclude:/node-modules/
  //       })
  //     ],
  //   })
  // }
)