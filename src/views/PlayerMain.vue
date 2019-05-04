<template>
  <div>
    <h2>人物</h2><hr>
    <div class="attribute">
      <div class="attribute-name"><span>昵称</span></div>
      <div class="attribute-value"><span>{{attribute.name}}</span>&nbsp;&nbsp;&nbsp;<el-button type="primary" icon="el-icon-edit" circle></el-button></div>
    </div>
    <div class="attribute">
      <div class="attribute-name"><span>等级</span></div>
      <div class="attribute-value"><span>{{attribute.lv}}</span></div>
    </div>
    <div class="attribute">
      <div class="attribute-name"><span>经验值</span></div>
      <div class="attribute-value"><span>{{attribute.exp}}/200</span></div>
    </div>
    <div class="attribute">
      <div class="attribute-name"><span>攻击</span></div>
      <div class="attribute-value"><span>{{attribute.atk}}</span></div>
    </div>
    <div class="attribute">
      <div class="attribute-name"><span>防御</span></div>
      <div class="attribute-value"><span>{{attribute.def}}</span></div>
    </div>
    <div class="attribute">
      <div class="attribute-name"><span>速度</span></div>
      <div class="attribute-value"><span>{{attribute.spd}}</span></div>
    </div>
    <div class="attribute">
      <div class="attribute-name"><span>潜力</span></div>
      <div class="attribute-value"><span>{{attribute.potential}}</span></div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'PlayerMain',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['attribute'])
  }
}
</script>

<style scoped>
  .attribute{
    width: 100%;
    height: 50px;
    font-size: 18px;
    line-height: 40px;
  }

  .attribute > .attribute-name{
    float: left;
    width: 20%;
    height: 100%;
    text-align: center;
  }

  .attribute > .attribute-value{
    float: left;
    width: 80%;
    height: 100%;
  }
</style>
