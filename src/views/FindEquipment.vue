<template>
<div>
  <el-button type="primary" class="back" icon="el-icon-arrow-left" @click="back">返回</el-button>
  <div class="equip_now" v-if="equipment[type]">
    <div style="float: left; margin-right: 30px; text-align:center"><img :src="equipment[type].src"  :alt="equipment[type].name" ><br><span>装备中</span></div>
    <span style="float: left">{{equipment[type].name}}<br>{{equipment[type].atr}}</span>&nbsp;
  </div>
  <div v-else>
    <span>现在没有佩戴{{type_cn}}，请选择下列{{type_cn}}进行装备</span>
  </div>
  <div>
    <el-table
      :data="tableData.slice((currentPage - 1) * 5, currentPage * 5)"
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
</div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
export default {
  name: 'FindEquipment',
  data () {
    return {
      type: this.$route.params.type,
      currentPage: 1,
      tableData: [],
      type_cn: ''
    }
  },
  computed: {
    ...mapGetters(['findArms', 'findArmor', 'findShoes']),
    ...mapState(['equipment', 'knapsackList'])
  },
  watch: {
    knapsackList () {
      if (this.type === 'arms') {
        this.tableData = this.findArms
        this.type_cn = '武器'
      } else if (this.type === 'armor') {
        this.tableData = this.findArmor
        this.type_cn = '防具'
      } else if (this.type === 'shoes') {
        this.tableData = this.findShoes
        this.type_cn = '鞋子'
      }
    }
  },
  mounted () {
    if (this.type === 'arms') {
      this.tableData = this.findArms
      this.type_cn = '武器'
    } else if (this.type === 'armor') {
      this.tableData = this.findArmor
      this.type_cn = '防具'
    } else if (this.type === 'shoes') {
      this.tableData = this.findShoes
      this.type_cn = '鞋子'
    }
  },
  methods: {
    equip (row) {
      if (this.equipment[this.type]) {
        if (window.confirm(`已经装备了 ${this.equipment[this.type].name} ,是否更换？`)) {
          this.$store.dispatch('equip', [row, true, this.type]) // 数组第二个表示是否需要更换
        }
      } else {
        this.$store.dispatch('equip', [row, false, this.type])
      }
    },
    currentChange (currentPage) {
      this.currentPage = currentPage
    },
    back () {
      this.$router.push({path: '/equipment'})
    }
  }
}
</script>

<style scoped>
.equip_now{
  height: 70px;
  padding: 30px;
}
.back {
  float: right;
}
</style>
