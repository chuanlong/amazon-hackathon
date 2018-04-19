const util = require('../../utils/util.js');
const timefade = 5;
const timesheight = 1.8;
var touchDot = 0;//触摸时的原点  
const winHeight = wx.getSystemInfoSync().windowHeight * timesheight;
Page({
  data: {
    motto: 'Hello World1'
  },
  touchMove: function (e) {
    var touchMove = e.touches[0].pageX;
    console.log("touchMove:" + touchMove + " touchDot:" + touchDot + " diff:" + (touchMove - touchDot));
    // 向右滑动  
    if (touchMove - touchDot >= 40) {
      wx.redirectTo({
        url: '../2/2'
      });
    }
  },
  onLoad: function () {
    this.setData({
      winH: wx.getSystemInfoSync().windowHeight * timesheight,
      opacity: 1,
      //这个是微信官方给的获取logs的方法 看了收益匪浅
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShow: function () {
    this.hide()
  },
  //核心方法，线程与setData
  hide: function () {
    var vm = this
    var interval = setInterval(function () {
      if (vm.data.winH > 0) {
        //清除interval 如果不清除interval会一直往上加
        clearInterval(interval)
        vm.setData({ winH: vm.data.winH-12 , opacity: vm.data.winH / winHeight * timesheight})
        vm.hide()
      }
    }, timefade);
  }
})