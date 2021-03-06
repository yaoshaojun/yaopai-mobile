import Reflux from 'reflux'
import HttpFactory from '../HttpFactory'
import API from '../api'

const ActivityActions = Reflux.createActions({
  search: {asyncResult: true},
  getDetail: {asyncResult: true},
  add: {asyncResult: true},
})

// 获取活动列表信息
ActivityActions.search.listen(function(){
  let data = {
    Fields : 'Id,Cover,Deadline,Title,ProvinceName,HomeRecommended,HomeSorting,IsExternal,Link,EndDate',
  }
  HttpFactory.post(API.ACTIVITY.search, data, this.completed, this.failed)
})

// 获取活动详情
ActivityActions.getDetail.listen(function(Id){
  let data = {
    Id,
    Fields : 'Id,Cover,Title,SubTitle,Display,Content,Deadline',
  }
  HttpFactory.post(API.ACTIVITY.get, data, this.completed, this.failed)
})

// 获取活动报名信息
ActivityActions.add.listen(function(item){
  const { id, tel, name, gender, remarks } = item
  let data = {
    activityId: id,
    tel,
    name,
    sex: gender,
    remarks,
  }
  HttpFactory.post(API.ACTIVITY.add, data, this.completed, this.failed)
})

export default ActivityActions
