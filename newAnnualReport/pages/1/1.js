const app = getApp()
Page({
  data: {
    motto: 'Hello World1'
  },
  touchStart: function (e) {
    wx.navigateTo({
      url: '../2/2'
    });
  },
   onLoad: function () {
    app.AppMusic.seek(16);
    app.AppMusic.src = 'http://mp3.qqmusic.cc/yq/205387371.mp3';
    // http://mp3.qqmusic.cc/yq/205387371.mp3
   }
})