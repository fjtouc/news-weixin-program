// pages/detail/detail.js
var common = require('../../utils/common.js')
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    article:{
      id:'264698',
      title:'俄罗斯联邦驻华大使杰尼索夫会见校党委书记顾家山一行并接受《力冈译文全集》赠予',
      poster:'http://www.ahnu.edu.cn/__local/A/C7/68/C2C9E5E2161A466A2D54D21A63C_DD3FEC40_4EBBB.jpg?e=.jpg',
      add_date:'2018-03-05',
      content:'本网讯（校出版社）3月2日上午，俄罗斯驻华大使杰尼索夫在北京俄罗斯驻华大使馆会见了校党委书记顾家山，并接受了我校出版社赠予俄罗斯大使馆的十套《力冈译文全集》。俄罗斯驻华大使馆参赞梅利尼科娃、大使馆一秘伊戈尔、大使助理、塔斯社记者，我校校办主任曾黎明、出版社社长张奇才，我校杰出校友、俄罗斯人民友谊勋章和利哈乔夫院士奖获得者、中国俄罗斯文学研究会会长刘文飞教授等参加了会见。'
    },
    isAdd:false
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
  goToDetail:function(e) {
        let id = e.currentTarget.dataset.id;
        wx.navigateTo({
          url:'../detail/detail?id='+id
        })
      },
    onLoad:function(options) {
      let id = options.id
      var article = wx.getStorageSync(id)
      if(article != '') {
        this.setData({
          article:article,
          isAdd:true
        })
      }
      else
      {
        let result = common.getNewsDetail(id)
        if(result.code=='200'){
          this.setData({
            article:result.news,
            isAdd:false
          })
      }
      }
    },

    addFavorites: function(options) {
      let article = this.data.article;
      wx.setStorageSync(article.id,article);
      this.setData({isAdd:true});
    },
    cancalFavorites: function() {
      let article = this.data.article;
      wx.removeStorageSync(article.id);
      this.setData({isAdd:false});
    },
    getMyFavorites: function() {
      let info = wx.getStorageInfoSync();
      let keys = info.keys;
      let num = keys.length;

      let myList = [];
      for(var i = 0;i<num;i++)
      {
        let obj = wx.getStorageSync(keys[i]);
        myList.push(obj);
      }
      this.setData({
        newsList: myList,
        num:num
      });
    }
  
})