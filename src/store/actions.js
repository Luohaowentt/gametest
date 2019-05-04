import {LVLUP, ABILITYUP, SAVENAME} from '@/store/mutation-types'

export default {
  lvlUp ({commit}) {
    commit(LVLUP)
  },
  abilityUp ({commit}, ability) {
    commit(ABILITYUP, ability)
  },
  saveName ({commit}, name) {
    commit(SAVENAME, name)
  }
}
