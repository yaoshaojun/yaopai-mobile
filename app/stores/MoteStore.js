import Reflux from 'reflux'
import MoteActions from '../actions/MoteActions'

const MoteStore = Reflux.createStore({
  data: {
    info: {
      cityName: '',
      marks: '',
      nickName: '',
      signature: '',
      totalAlbums: '',
      views: '',
      avatar: '',
      tags: [],
    },
    hintMessage: '',
    flag: '',
  },
  init: function() {
    this.listenTo(MoteActions.getInfo.success,this.onGetSuccess)
    this.listenTo(MoteActions.getInfo.failed,this.onFailed)
  },

  onFailed : function(data){
    this.data.hintMessage = '网络错误'
    this.data.flag = 'failed'
    this.trigger(this.data)
  },

  onGetSuccess : function(res){
    if(res.Success){
      this.data.info.cityName = res.CityName
      this.data.info.marks = res.Marks
      this.data.info.nickName = res.NickName
      this.data.info.signature = res.Signature
      this.data.info.totalAlbums = res.TotalAlbums
      this.data.info.views = res.Views
      this.data.info.avatar = res.Avatar
      this.data.info.tags = res.Tags
    }else{
      this.data.hintMessage = res.ErrorMsg
    }
    this.data.flag = 'getInfo'
    this.trigger(this.data)
  },
})

export default MoteStore