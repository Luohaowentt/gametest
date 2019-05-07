<template>
<div>
  <h2>技能</h2><hr>
  <div class="skills-main">
    <el-table
      :data="skillData"
      style="width: 650px; margin:0 auto">
      <el-table-column
        label="图标"
        width="100">
        <template slot-scope="scope">
          <img class="skill-icon" :src="scope.row.imgSrc" alt="技能图片">
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="技能名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="rate"
        label="等级"
        width="100">
      </el-table-column>
      <el-table-column
        label="操作"
        width="250">
        <template slot-scope="scope">
          <el-button plain>技能信息</el-button><el-button @click="skillUp(scope.row)" plain>升级</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Skills',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['skillData'])
  },
  methods: {
    skillUp (skill) {
      skill.rate++
    }
  }
}
</script>

<style scoped>
  .skills-main {
    margin: 0 20px;
  }

  .skill-icon{
    width: 50px;
  }
</style>
