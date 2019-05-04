<template>
  <div id="app">
    <h2>Game's Name</h2>
    <hr>
    <div class="main">
      <el-row :gutter="20">
        <el-col :span="4"><LeftList/></el-col>
        <el-col :span="20"><RightMain/></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import LeftList from '@/components/LeftList'
import RightMain from '@/components/RightMain'
export default {
  name: 'App',
  components: {RightMain, LeftList}
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 60px ;
}

hr{
  width: 95%;
  margin: 15px 0 25px 0;
}
h2{
  margin-left: 10%;
}

.main{
  margin-top: 50px;
}

/*未访问的链接*/
a{
  display: flex;
  width: 100%;
  height: 100%;
  text-decoration: none;
}
a:link{
  color: black;
}
/*访问过的链接*/
a:visited{
  color: black;
}
/*鼠标经过时*/
/*a:hover{*/
  /*color: #409EFF;*/
/*}*/
/*在鼠标点击的同时*/
a:active{
  color: #75a4b3;
}
</style>
