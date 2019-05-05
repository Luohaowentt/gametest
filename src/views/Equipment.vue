<template>
  <div><h2>装备</h2><hr>
    <div class="equipment-main">
      <div class="equipment-one">
        <div class="equipment-position"><span>武器</span></div>
        <div v-if="equipment.arms">
          <img class="hero-img-list" :src="equipment.arms.src"  :alt="equipment.arms.name">
          <div class="equipment-position"><span>{{equipment.arms.name}}</span></div>
          <div class="equipment-position"><span>{{equipment.arms.atr}}</span></div>&nbsp;&nbsp;&nbsp;
          <div class="equip-btn">&nbsp;&nbsp;&nbsp;<el-button plain>更换</el-button>&nbsp;&nbsp;&nbsp;<el-button type="danger"  @click="takeOff(equipment.arms)" plain>卸下</el-button></div>
        </div>
        <div v-else>
          <div class="equipment-position"><span>没有佩戴</span></div>
          <div class="equip-btn">&nbsp;&nbsp;&nbsp;<el-button plain>选择装备</el-button>&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div><hr>
      <div class="equipment-one">
        <div class="equipment-position"><span>防具</span></div>
        <div v-if="equipment.armor">
          <img class="hero-img-list" :src="equipment.armor.src"  :alt="equipment.armor.name">
          <div class="equipment-position"><span>{{equipment.armor.name}}</span></div>
          <div class="equipment-position"><span>{{equipment.armor.atr}}</span></div>&nbsp;&nbsp;&nbsp;
          <div class="equip-btn">&nbsp;&nbsp;&nbsp;<el-button plain>更换</el-button>&nbsp;&nbsp;&nbsp;<el-button type="danger"  @click="takeOff(equipment.armor)" plain>卸下</el-button></div>
        </div>
        <div v-else>
          <div class="equipment-position"><span>没有佩戴</span></div>
          <div class="equip-btn">&nbsp;&nbsp;&nbsp;<el-button plain>选择装备</el-button>&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div><hr>
      <div class="equipment-one">
        <div class="equipment-position"><span>鞋子</span></div>
        <div v-if="equipment.shoes">
          <img class="hero-img-list" :src="equipment.shoes.src"  :alt="equipment.shoes.name">
          <div class="equipment-position"><span>{{equipment.shoes.name}}</span></div>
          <div class="equipment-position"><span>{{equipment.shoes.atr}}</span></div>&nbsp;&nbsp;&nbsp;
          <div class="equip-btn">&nbsp;&nbsp;&nbsp;<el-button plain>更换</el-button>&nbsp;&nbsp;&nbsp;<el-button type="danger" @click="takeOff(equipment.shoes)" plain>卸下</el-button></div>
        </div>
        <div v-else>
          <div class="equipment-position"><span>没有佩戴</span></div>
          <div class="equip-btn">&nbsp;&nbsp;&nbsp;<el-button plain>选择装备</el-button>&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div><hr>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Equipment',
  computed: {
    ...mapState(['equipment'])
  },
  methods: {
    takeOff (equipment) {
      this.$store.dispatch('takeOff', equipment)
    }
  }
}
</script>

<style scoped>
  .equipment-main{
    margin: 0 50px;
  }
  .equipment-main  img {
    float: left;
    padding: 10px;
    width: 55px;
  }
  .equipment-position{
    display: inline-block;
    float: left;
    min-width: 100px;
    height: 65px;
    line-height: 65px;
    text-align: center;
  }
  .equipment-one{
    height: 65px;
  }

  .equip-btn{
    float: left;
    padding-top: 13px;
  }
</style>
