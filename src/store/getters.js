export default {
  // 从图鉴中找出背包物品
  knapsackData (state) {
    let knapsackData = []
    state.knapsackList.forEach(knapsackId => {
      knapsackData.push(state.equipmentList.find(equipment => equipment.id === knapsackId))
    })
    return knapsackData
  },
  // 查询装备属性综合
  equipmentAttrSum (state) {
    const tt = ['arms', 'armor', 'shoes'] // 装备类型
    let atk = 0
    let def = 0
    let spd = 0
    for (let i = 0; i < tt.length; i++) {
      if (state.equipment[tt[i]]) {
        atk += state.equipment[tt[i]].atk
        def += state.equipment[tt[i]].def
        spd += state.equipment[tt[i]].spd
      }
    }
    return {
      atk: atk,
      def: def,
      spd: spd
    }
  }
}
