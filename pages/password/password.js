// pages/password/password.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstPwd:'',
    secondPwd:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "密码修改"
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
  submit() {
    if (!this.data.firstPwd) return;
    if (!this.data.secondPwd) return;
    if(this.data.firstPwd.length < 6 || this.data.firstPwd.length < 6) {
      wx.showToast({
        title: '密码至少6位',
        icon: 'error',
        duration: 2000
      })
      return;
    }
    if(this.data.firstPwd === this.data.secondPwd) {
      wx.showToast({
        title: '修改成功',
        icon: 'success',
        duration: 2000
      });
      setTimeout(() => {
         wx.switchTab({
        url: '/pages/mypage/mypage',
      })
      },1000)
     
   } else {
    wx.showToast({
      title: '两次输入不一致',
      icon: 'error',
      duration: 2000
    })
   }
  },
  firstInput(e) {
      console.log(e.detail.value);
      this.setData({
        firstPwd:e.detail.value
      })
  },
  secondInput(e) {
    console.log(e.detail.value);
    this.setData({
      secondPwd:e.detail.value
    })
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