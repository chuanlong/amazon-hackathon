Page({
  data: {
    motto: 'Hello World2'
  },
  touchStart: function (e) {
    wx.navigateTo({
      url: '../3/3'
    });
  }
})