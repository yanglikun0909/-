// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Height: 0,
    scale: 13,
    latitude:  37.453968,
    longitude:  116.307428,
    markers: [],
    circles: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    wx.getSystemInfo({
      success: function (res) {
        //设置map高度，根据当前设备宽高满屏显示
        _this.setData({
          view: {
            Height: res.windowHeight
          }
        });

            _this.setData({
              latitude: _this.data.latitude ,
              longitude: _this.data.longitude,
              markers: [{
                id: "1",
                latitude: _this.data.latitude ,
                longitude: _this.data.longitude,
                width: 50,
                height: 50,
                iconPath: "/assests/imgs/my.png",
                title: "哪里"
              }],
              circles: [{
                latitude: _this.data.latitude ,
              longitude: _this.data.longitude,
                color: '#FF0000DD',
                fillColor: '#7cb5ec88',
                radius: 1000,
                strokeWidth: 1
              }]
            })
        
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