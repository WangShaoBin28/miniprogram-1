// pages/socket/socket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var msg="哈哈";
    //建立连接
    wx.connectSocket({
      url: 'ws://yzhd.free.idcfengye.com/websocket/oNb_54uWVxTwekG7K5zxGuAA3lsU'
      /*  修改参数为"All" 则可对所有人发送消息  */
    });
    //连接成功
    wx.onSocketOpen(function (res) {
      console.log("连接服务器成功。");
      getApp().globalData.socketOpen = true;
    });

    //接受数据
    wx.onSocketMessage(function (res) {
      console.log("传入的原数据：");
      console.log(res);
      console.log("我要进行跳转")
    })

    //发送数据
    wx.sendSocketMessage({
      data: {
        message:'aaaa'
      }

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})