// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gridList:[
      {
        text:"我的组织",
        src:"/static/wodezuzhi.png",
        url:'/pages/organize/index'
      },
      {
        text:"关系转接",
        src:"/static/jiezhuan.png",
        url:''
      },
      {
        text:"教育评价",
        src:"/static/jypy.png",
        url:''
      },
      {
        text:"团籍注册",
        src:"/static/tjzc.png",
        url:'/pages/vieRegister/index'
      },
      {
        text:"组织生活",
        src:"/static/zzsh.png",
        url:''
      },
      {
        text:"团内激励",
        src:"/static/jili1.png",
        url:''
      },

    ],
    vipList:[
      {
        text:"小高",
        sex:0,
        url:'',
        position:"书记",
        phone:"13111111111"
      },
      {
        text:"小严",
        sex:1,
        url:'',
        position:"副书记",
        phone:"13222222222"
      },
      {
        text:"小薛",
        sex:1,
        url:'',
        position:"组织委员",
        phone:"13333333333"
      },
      {
        text:"小李",
        sex:0,
        url:'',
        position:"宣传委员",
        phone:"13444444444"
      },
      {
        text:"小谢",
        sex:0,
        url:'',
        position:"",
        phone:"13555555555"
      },
      {
        text:"小肖",
        sex:0,
        url:'',
        position:"",
        phone:"13666666666"
      },
      {
        text:"小杨",
        sex:1,
        url:'',
        position:"",
        phone:"13777777777"
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  handleClickGridItem({currentTarget}){
    const {item} = currentTarget.dataset
    wx.navigateTo({
      url: item.url,
      fail(){
        wx.showToast({
          title: '当前页面维护',
          icon:"none"
        })
      },
      success(){
        wx.showToast({
          title: '跳转成功',
          icon:"none"
        })
      }
    })
  }
})