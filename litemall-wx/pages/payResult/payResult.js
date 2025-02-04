var util = require('../../utils/util.js');
var api = require('../../config/api.js');

var app = getApp();
Page({
  data: {
    status: false,
    orderId: 0
  },
  onLoad: function (options) {
    //首次设置语言
    var that = this
    var app = getApp()
    this.setData({
      languageMap: app.globalData.languageMap
    })
    wx.setNavigationBarTitle({
      title: app.globalData.languageMap['支付结果']
      ,
    })
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      orderId: options.orderId,
      status: options.status === '1' ? true : false
    })
  },
  onReady: function () {

  },
  onShow: function () {
    // 页面显示

  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭

  },
  payOrder() {
    let that = this;
    util.request(api.OrderPrepay, {
      orderId: that.data.orderId
    }, 'POST').then(function (res) {
      console.log(11111)
      if (res.errno === 0) {
        const payParam = res.data;
        console.log("支付过程开始")
        // wx.requestPayment({
        //   'timeStamp': payParam.timeStamp,
        //   'nonceStr': payParam.nonceStr,
        //   'package': payParam.packageValue,
        //   'signType': payParam.signType,
        //   'paySign': payParam.paySign,
        //   'success': function(res) {
        //     console.log("支付过程成功")
        //     that.setData({
        //       status: true
        //     });
        //   },
        //   'fail': function(res) {
        //     console.log("支付过程失败")
        //     util.showErrorToast(this.data.languageMap['支付失败']);
        //   },
        //   'complete': function(res) {
        //     console.log("支付过程结束")
        //   }
        // });
        
      }
      that.setData({
        status: true
      });
      console.log("支付过程结束")
    });
  }
})