<template>
  <div>
    <h2>人物</h2><hr>
    <div class="attribute">
      <div class="attribute-name"><span>昵称</span></div>
      <div class="attribute-value">
        <div v-if="!fixNameFlag"><span>{{attribute.name}}</span>&nbsp;&nbsp;&nbsp;<el-button type="primary" icon="el-icon-edit" @click="fixNameFlag = !fixNameFlag" circle></el-button></div>
        <div v-else><el-input v-model="inputName" :placeholder="attribute.name" style="width: 30%"></el-input>&nbsp;&nbsp;&nbsp;<el-button type="success" icon="el-icon-check" @click="saveName" circle></el-button><el-button type="danger" icon="el-icon-close" @click="fixNameFlag = !fixNameFlag" circle></el-button></div>
      </div>
    </div>
    <div class="attribute">
      <div class="attribute-name"><span>等级</span></div>
      <div class="attribute-value"><span>{{attribute.lv}}</span></div>
    </div>
    <div class="attribute">
      <div class="attribute-name"><span>经验值</span></div>
      <div class="attribute-value"><span>{{attribute.exp}}/{{expList[attribute.lv]}}</span>&nbsp;&nbsp;&nbsp;<el-button v-if="attribute.exp >= expList[attribute.lv]" round @click="lvlUp">升级</el-button></div>
    </div>
    <div class="attribute">
      <div class="attribute-name"><span>HP</span></div>
      <div class="attribute-value"><span>{{attribute.hp}}</span><span v-if="equipmentHP" style="color: limegreen">&nbsp;&nbsp;&nbsp;( + {{equipmentHP}})</span>&nbsp;&nbsp;&nbsp;<el-button type="primary" icon="el-icon-plus" v-if="attribute.potential > 0" @click="abilityUp('hp')" circle ></el-button></div>
    </div>
    <div class="attribute">
      <div class="attribute-name"><span>MP</span></div>
      <div class="attribute-value"><span>{{attribute.mp}}</span><span v-if="equipmentMP" style="color: limegreen">&nbsp;&nbsp;&nbsp;( + {{equipmentMP}})</span>&nbsp;&nbsp;&nbsp;<el-button type="primary" icon="el-icon-plus" v-if="attribute.potential > 0" @click="abilityUp('mp')" circle></el-button></div>
    </div>
    <div class="attribute">
      <div class="attribute-name"><span>攻击</span></div>
      <div class="attribute-value">
        <span>{{attribute.atk}}</span>
        <span v-if="equipmentAttrSum.atk > 0" style="color: limegreen">&nbsp;&nbsp;&nbsp;( + {{equipmentAttrSum.atk}})</span>
        <span v-if="equipmentAttrSum.atk < 0" style="color: indianred">&nbsp;&nbsp;&nbsp;( - {{Math.abs(equipmentAttrSum.atk)}})</span>&nbsp;&nbsp;&nbsp;
        <el-button type="primary" icon="el-icon-plus" v-if="attribute.potential > 0" @click="abilityUp('atk')" circle></el-button>
      </div>
    </div>
    <div class="attribute">
      <div class="attribute-name"><span>防御</span></div>
      <div class="attribute-value"><span>{{attribute.def}}</span>
        <span v-if="equipmentAttrSum.def > 0" style="color: limegreen">&nbsp;&nbsp;&nbsp;( + {{equipmentAttrSum.def}})</span>
        <span v-if="equipmentAttrSum.def < 0" style="color: indianred">&nbsp;&nbsp;&nbsp;( - {{Math.abs(equipmentAttrSum.def)}})</span>&nbsp;&nbsp;&nbsp;
        <el-button type="primary" icon="el-icon-plus" v-if="attribute.potential > 0" @click="abilityUp('def')" circle></el-button>
      </div>
    </div>
    <div class="attribute">
      <div class="attribute-name"><span>速度</span></div>
      <div class="attribute-value"><span>{{attribute.spd}}</span>
        <span v-if="equipmentAttrSum.spd > 0" style="color: limegreen">&nbsp;&nbsp;&nbsp;( + {{equipmentAttrSum.spd}})</span>
        <span v-if="equipmentAttrSum.spd < 0" style="color: indianred">&nbsp;&nbsp;&nbsp;( - {{Math.abs(equipmentAttrSum.spd)}})</span>&nbsp;&nbsp;&nbsp;
        <el-button type="primary" icon="el-icon-plus" v-if="attribute.potential > 0" @click="abilityUp('spd')" circle></el-button>
      </div>
    </div>
    <div class="attribute">
      <div class="attribute-name">
        <span>潜力</span>
      </div>
      <div class="attribute-value">
        <span>{{attribute.potential}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'PlayerMain',
  data () {
    return {
      fixNameFlag: false,
      inputName: '',
      equipmentHP: 0,
      equipmentMP: 0 // 绿字装备属性
    }
  },
  computed: {
    ...mapState(['attribute', 'expList', 'equipment']),
    ...mapGetters(['equipmentAttrSum'])
  },
  methods: {
    lvlUp () {
      this.$store.dispatch('lvlUp')
    },
    abilityUp (ability) {
      this.$store.dispatch('abilityUp', ability)
    },
    saveName () {
      const reg = /^([a-zA-Z0-9_\u4e00-\u9fa5]){3,13}$/
      if (reg.test(this.inputName)) {
        this.$store.dispatch('saveName', this.inputName)
        this.fixNameFlag = false
      } else {
        this.$message({
          showClose: true,
          message: '名称不符合规范,需要3-13位的字母数字或中文',
          type: 'warning'
        })
      }
    }
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
