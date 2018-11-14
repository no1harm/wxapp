//change.js

const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    curLang: {},
    langList: app.globalData.langList,
		  // 自定义自己喜欢的颜色
    colorArr: ["#EE2C2C", "#ff7070", "#EEC900", "#4876FF", "#ff6100",
      "#7DC67D", "#E17572", "#7898AA", "#C35CFF", "#33BCBA", "#C28F5C",
      "#FF8533", "#6E6E6E", "#428BCA", "#5cb85c", "#FF674F", "#E9967A",
      "#66CDAA", "#00CED1", "#9F79EE", "#CD3333", "#FFC125", "#32CD32",
      "#00BFFF", "#68A2D5", "#FF69B4", "#DB7093", "#CD3278", "#607B8B"],
    // 存储随机颜色
    randomColorArr: []
  },
	onLoad: function (options) {
		let that = this,
			labLen = that.data.langList.length,
			colorArr = that.data.colorArr,
			colorLen = colorArr.length,
			randomColorArr = [];
		//判断执行
		do {
			let random = colorArr[Math.floor(Math.random() * colorLen)];
			randomColorArr.push(random);
			labLen--;
		} while (labLen > 0)

		that.setData({
			randomColorArr: randomColorArr
		});
	},
  onShow: function () {
    this.setData({ curLang: app.globalData.curLang })
  },
  onTapItem: function(e) {
    let langObj = e.currentTarget.dataset
    wx.setStorageSync('language', langObj)
    this.setData({'curLang': langObj})
    app.globalData.curLang = langObj
    wx.switchTab({ url: '/pages/index/index'})
  }
})
