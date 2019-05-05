<template>
  <div><h2>背包</h2><hr>
    <el-table
      :data="knapsackData"
      style="width: 100%">
      <el-table-column
        prop="icon"
        label="图标"
        width="80">
        <template slot-scope="scope">
          <img class="equipment-icon" :src="scope.row.src" alt="物品图片">
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型"
        width="180">
      </el-table-column>
      <el-table-column
        prop="atr"
        label="属性">
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作">
        <template slot-scope="scope">
          <el-button plain>装备</el-button>&nbsp;&nbsp;&nbsp;<el-button type="danger"  @click="discard(scope.row)" plain>丢弃</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'Knapsack',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['knapsackList']),
    ...mapGetters(['knapsackData'])
  },
  methods: {
    discard (row) {
      if (window.confirm(`真的要丢掉这件 ${row.name} 吗`)) {
        this.$store.dispatch('discard', row.id)
      }
    }
  }
}
</script>

<style scoped>
.equipment-icon {
  width: 50px;
}
</style>
