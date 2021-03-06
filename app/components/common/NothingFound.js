import React from "react"
import $ from 'jquery'

const toggleMenu = () => {
  $("#tagMenu").toggleClass('slide-toggle')
  $("#queryIcon").toggleClass('rotateX180deg')
  $('body').toggleClass('overflowHidden')
  $('.tagBtnLabel').toggle()
}

const NothingFound = ({title}) => (
  <section className="nothing-card">
    <header className="card-header">
      <i className="icon book_icon" />&nbsp;{title}
    </header>
    <div className="card-body">
      <img src="../imgs/yp_weixin.jpg" className="fl"/>
      <p className="fr">
        长按左侧二维码添加 YAOPAI小秘书<br/>
        <span>为您订制个性拍摄服务</span>
      </p>
    </div>
    <footer className="card-footer">
      <span>你也可以选择</span>
      <div className="btn-block btn-small">
        <a className="btn btn-green" onClick={toggleMenu}>
          重新筛选/搜索
        </a>
      </div>
      <span>或</span>
      <div className="btn-block btn-small">
        <a className="btn btn-black" href="tel:400-876-5981">
          免费电话咨询
        </a>
      </div>
    </footer>
  </section>
)

export default NothingFound
