<template>
  <div style="  background: #f5f5f5;">
    <div class="peisong" style="padding:4vw">
      <h5>配送信息</h5>
      <span
        class="piao"
        style="font-size: .346667rem;
    line-height: 1.38;"
      >由蜂鸟快送提供配送，约23分钟送达，距离952m</span>
      <p style="font-size: .346667rem;
    line-height: 1.38;">配送费￥0</p>
    </div>
    <div class="shangjia" style="padding:4vw">
      <h5>商家服务</h5>
      <span class="piao">票</span>
      <span style="font-size: .346667rem;
    line-height: 1.38;">该商家支持开发票，请在下单时填写好发票抬头</span>
      <p>
        <span class="piao">保</span>
        <span style="    font-size: .346667rem;
    line-height: 1.38;">该商户食品安全已由国泰产险承担，食品安全有保障</span>
      </p>
    </div>
    <div class="shangping" style="padding:4vw">
      <h5>商品实景</h5>
      <a href="###" style="margin-right:2vw">
        <img
          style="width:20%"
          src="https://cube.elemecdn.com/7/c5/947dac1bcb567f3cb05734e8ff8fdjpeg.jpeg?x-oss-process=image/format,webp/resize,w_200,h_200,m_fixed"
          alt
        />
      </a>
      <a href="###">
        <img
          style="width:20%"
          src="https://cube.elemecdn.com/e/26/e155fac736e243c56518686378307jpeg.jpeg?x-oss-process=image/format,webp/resize,w_200,h_200,m_fixed"
          alt
        />
      </a>
    </div>
    <div class="xinxi">
      <h5>商家信息</h5>
      <span
        style="    font-size: .346667rem;
    line-height: 1.38; color:#cccccc; border-bottom: 1px solid #ccc;"
      >该商户食品安全已由国泰产险承担，食品安全有保障</span>

      <ul class="detail-3mz9N">
        <!-- <li>外婆卤肉饭，传承匠心，用心做美食。</li> -->
        <li>
          <span>品类</span>
          <span>盖浇饭, 川湘菜</span>
        </li>
        <li>
          <span>商家电话</span>
          <span class="detail-2mw1q">
            <van-icon name="phone-circle" color="#00a6ff" />
            <span style="color:#00a6ff">联系商家</span>
          </span>
        </li>
        <li>
          <span>地址</span>
          <span>昌兴街3l号首层中山五路广州越秀</span>
        </li>
        <li>
          <span>营业时间</span>
          <span>09:30-22:00</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.peisong {
  background: #fff;
  margin-bottom: 0.625rem;
}
.shangjia {
  background: #fff;
  margin-bottom: 0.625rem;
  .piao {
    padding: 1px 2px;
    border: 1px solid #ccc;
    font-size: 0.75rem;
    color: #cccccc;
  }
}
h5 {
  margin: 0;
  margin-bottom: 0.625rem;
}
.shangping {
  background: #fff;
  margin-bottom: 0.625rem;
}
.xinxi {
  background: #fff;
}
.detail-3mz9N li {
  display: flex;
  padding: 4vw 4vw 4vw 4vw;
  justify-content: space-between;
  -webkit-align-items: center;
  align-items: center;
  border-bottom: .0625rem solid #ccc;
}
.van-tabs_wrap{
  position: sticky !important;
  top: 0;
  z-index: 888;
}
</style>