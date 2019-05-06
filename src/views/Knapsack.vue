<template>
  <div><h2>背包</h2><hr>
    <el-table
      :data="knapsackData.slice((currentPage - 1) * 5, currentPage * 5)"
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
          <el-button @click="equip(scope.row)" plain>装备</el-button>&nbsp;&nbsp;&nbsp;<el-button type="danger"  @click="discard(scope.row)" plain>丢弃</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      @current-change="currentChange"
      :total="50">
    </el-pagination>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'Knapsack',
  data () {
    return {
      currentPage: 1
    }
  },
  watch: {

  },
  computed: {
    ...mapState(['knapsackList', 'equipment']),
    ...mapGetters(['knapsackData'])
  },
  methods: {
    discard (row) {
      if (window.confirm(`真的要丢掉这件 ${row.name} 吗`)) {
        this.$store.dispatch('discard', row.id)
      }
    },
    equip (row) {
      if (row.type === '武器') {
        if (this.equipment.arms) {
          if (window.confirm(`已经装备了 ${this.equipment.arms.name} ,是否更换？`)) {
            this.$store.dispatch('equip', [row, true, 'arms']) // 数组第二个表示是否需要更换
          }
        } else {
          this.$store.dispatch('equip', [row, false, 'arms'])
        }
      } else if (row.type === '防具') {
        if (this.equipment.armor) {
          if (window.confirm(`已经装备了 ${this.equipment.armor.name} ,是否更换？`)) {
            this.$store.dispatch('equip', [row, true, 'armor']) // 数组第二个表示是否需要更换
          }
        } else {
          this.$store.dispatch('equip', [row, false, 'armor'])
        }
      } else if (row.type === '鞋子') {
        if (this.equipment.shoes) {
          if (window.confirm(`已经装备了 ${this.equipment.shoes.name} ,是否更换？`)) {
            this.$store.dispatch('equip', [row, true, 'shoes']) // 数组第二个表示是否需要更换
          }
        } else {
          this.$store.dispatch('equip', [row, false, 'shoes'])
        }
      }
    },
    currentChange (currentPage) {
      this.currentPage = currentPage
    }
  }
}
</script>

<style scoped>
.equipment-icon {
  width: 50px;
}
</style>
