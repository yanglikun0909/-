// pages/works/workDeile.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      details:JSON.parse(options.obj)
    })
    wx.setNavigationBarTitle({
      title: "详情页"
    })
  },
  upload() {
    wx.showToast({
      title: '提交成功',
    })
    app.globalData.allData.type = 0;
    setTimeout(() =>{
      wx.switchTab({
        url: '/pages/works/works',
      })
    },1000)
  },
  toMap() {
    wx.navigateTo({
      url: '/pages/map/map?obj='+JSON.stringify(this.data.details),
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