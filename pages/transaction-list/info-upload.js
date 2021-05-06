// pages/transaction-list/info-upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowdate: '',
    imagePath:[],
    type:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.type);
    this.setData({
      type:options.type,
      nowdate: this.formats()
    })
  },
  formats() {
    let time;
    const date = new Date();
    const y = date.getFullYear();
    const MM = date.getMonth()+1;
    const dd = date.getDate();
    return `${y}-${MM}-${dd}`

  },
  handleChooseAlbum(){
		//系统API，让用户在相册中选择图片（或者拍照）
		wx.chooseImage({
			success : (res) => {
			  //1、取出路径
			  const path = res.tempFilePaths
           console.log(res);
			  //2、设置imagePath
			  this.setData({
				imagePath : path
			  })
			}
		})
  },
  handleChooseAlbumss(){
	//系统API，让用户在相册中选择图片（或者拍照）
  wx.chooseImage({
    success : (res) => {
      //1、取出路径
      const path = res.tempFilePaths
         console.log(res);
      //2、设置imagePath
      this.setData({
        imagePathafter : path
      })
    }
  })
  },
  submit() {
    wx.showToast({
      title: '提报成功',
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