import {LVLUP, ABILITYUP, SAVENAME, DISCARD} from '@/store/mutation-types'

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
  }
}
