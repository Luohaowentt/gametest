<template>
  <div id="main-left">
    <ul>
      <li>  <router-link to="/attribute" class="btn_left">人物</router-link></li>
      <li>  <router-link to="/skills" class="btn_left">技能</router-link></li>
      <li>  <router-link to="/equipment" class="btn_left">装备</router-link></li>
      <li>  <router-link to="/knapsack" class="btn_left">背包</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LeftList'
}
</script>

<style scoped>
  #main-left{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    min-height: 600px;
    padding: 30px;
  }

  .router-link-active{
    color: cornflowerblue;
    transition: .5s;
  }

  ul{
    padding: 0;
    margin: 0;
  }
  ul li{
    list-style: none;
    height: 40px;
    line-height: 40px;
  }
  ul li:hover{
    background-color: #cdd2ed;
  }
</style>
