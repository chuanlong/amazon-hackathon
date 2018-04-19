Page({
  data: {
    motto: 'Hello World1'
  },
  touchStart: function (e) {
    wx.navigateTo({
      url: '../2/2'
    });
  }
})