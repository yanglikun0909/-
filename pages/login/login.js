// pages/login/login.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      type: 'user',
      username:'',
      password:'',
      phone:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const usename = app.globalData.allData['userinfo'];
    if(usename) {
      wx.reLaunch({
        url: '/pages/index/index',
      }) 
    }
  },
  changType(e) {
     const type = e.currentTarget.dataset.type;
     this.setData({
       type:type
     })
  },
  inputUser(e) {
    this.setData({
      username:e.detail.value
    })
  },
  inputPwd(e) {
    this.setData({
      password:e.detail.value
    })
  },
  inputPhone(e) {
    this.setData({
      phone:e.detail.value
    })
  },
  submit() {
    if(this.data.type === 'user') {
        if(this.data.username === '' || this.data.password === '') {
          wx.showToast({
            title: '请输入账号或密码',
            icon:'none',
          })
          return;
        }
    } else {
      if(this.data.phone === '') {
        wx.showToast({
          title: '请输入手机号',
          icon:'none',
        })
        return;
      }
    }
    app.globalData.allData['userinfo'] = {
      username:  this.data.type === 'user' ? this.data.username : this.data.phone,
      role: this.data.type === 'user' ? '自建工人' : '游客',
    }
    wx.switchTab({
      url: '/pages/index/index',
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