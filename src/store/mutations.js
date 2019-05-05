import {LVLUP, ABILITYUP, SAVENAME, DISCARD, TAKEOFF, EQUIP} from '@/store/mutation-types'

export default {
  [LVLUP] (state) {
    state.attribute.exp -= state.expList[state.attribute.lv]
    state.attribute.lv += 1
    state.attribute.hp += 10
    state.attribute.mp += 5
    state.attribute.atk += 2
    state.attribute.def += 1
    state.attribute.potential += 5
  },
  [ABILITYUP] (state, ability) {
    state.attribute.potential -= 1
    if (ability === 'hp' || ability === 'mp') {
      state.attribute[ability] += 10
    } else {
      state.attribute[ability] += 1
    }
  },
  [SAVENAME] (state, name) {
    state.attribute.name = name
  },
  [DISCARD] (state, id) {
    for (let i = 0; i < state.knapsackList.length; i++) {
      if (state.knapsackList[i] === id) {
        state.knapsackList.splice(i, 1)
        return
      }
    }
  },
  [TAKEOFF] (state, equipment) {
    state.knapsackList.push(equipment.id)
    if (equipment.type === '武器') {
      state.equipment.arms = ''
    } else if (equipment.type === '防具') {
      state.equipment.armor = ''
    } else if (equipment.type === '鞋子') {
      state.equipment.shoes = ''
    }
  },
  [EQUIP] (state, equipment) { // equipment是一个数组，他的第一个值为装备对象，第二个值为布尔值，代表是否需要更换，第三个值为装备类型
    if (equipment[1]) {
      this.commit(TAKEOFF, state.equipment[equipment[2]])
    }
    state.equipment[equipment[2]] = equipment[0]
    for (let i = 0; i < state.knapsackList.length; i++) {
      if (state.knapsackList[i] === equipment[0].id) {
        state.knapsackList.splice(i, 1)
        return
      }
    }
  }
}
