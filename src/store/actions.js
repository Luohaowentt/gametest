import {LVLUP, ABILITYUP, SAVENAME, DISCARD, EQUIP, TAKEOFF} from '@/store/mutation-types'

export default {
  lvlUp ({commit}) {
    commit(LVLUP)
  },
  abilityUp ({commit}, ability) {
    commit(ABILITYUP, ability)
  },
  saveName ({commit}, name) {
    commit(SAVENAME, name)
  },
  discard ({commit}, id) {
    commit(DISCARD, id)
  },
  takeOff ({commit}, equipment) {
    commit(TAKEOFF, equipment)
  },
  equip ({commit}, equipment) {
    commit(EQUIP, equipment)
  }
}
