//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langList[0]
  },
  globalData: {
    curLang: {},
    langList: [{
        'chs': '英文',
        "lang": 'en',
        "index": 0,
				"icon":'.icon-flag-united-states'
      },
      {
        'chs': '中文',
        'lang': 'zh',
        "index": 1,
				"icon": '.icon-flag-china'
      },
      {
        'chs': '日语',
        'lang': 'jp',
        "index": 2,
				"icon": '.icon-flag-japan'
      },
      {
        'chs': '韩语',
        'lang': 'kor',
        "index": 3,
				"icon": '.icon-flag-south-corea'
      },
      {
        'chs': '法语',
        'lang': 'fra',
        "index": 4,
				"icon": '.icon-flag-france'
      },
      {
        'chs': '西班牙语',
        'lang': 'spa',
        "index": 5,
				"icon": '.icon-flag-spain'
      },
      {
        'chs': '阿拉伯语',
        'lang': 'ara',
        "index": 6,
				"icon": '.icon-flag-united-states'
      },
    ]
  }
})