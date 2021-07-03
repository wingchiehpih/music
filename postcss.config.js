module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      // 设置根元素字体大小
      rootValue: 100,
      // 全部内容元素都需要被转化为rem，不需要被转化的单位改为Px
      propList: ['*'],
    }
  }
}