export default {
  // 角色属性值
  attribute: {
    name: 'Chika',
    lv: 3,
    hp: 850,
    mp: 330,
    exp: 2500,
    atk: 100,
    def: 50,
    spd: 70,
    potential: 10
  },
  // 升级经验表
  expList: [0, 100, 200, 300, 400, 500, 650, 800, 1000, 1300],
  // 角色背包的物品id
  knapsackList: [101, 102, 103, 201, 202],
  // 角色装备的物品
  equipment: {
    arms: {id: 101, name: '压制之刃', type: '武器', atr: '攻击 + 9 防御 - 1', atk: 9, def: -1, spd: 0, src: 'http://cdn.dota2.com/apps/dota2/images/items/quelling_blade_lg.png'}, // 武器
    armor: '', // 防具
    shoes: '' // 鞋子
  },
  // 装备图鉴
  equipmentList: [
    {id: 101, name: '压制之刃', type: '武器', atr: '攻击 + 9', atk: 9, def: -1, spd: 0, src: 'http://cdn.dota2.com/apps/dota2/images/items/quelling_blade_lg.png'},
    {id: 102, name: '短棍', type: '武器', atr: '攻击 + 15', atk: 15, def: -1, spd: 0, src: 'http://cdn.dota2.com/apps/dota2/images/items/quarterstaff_lg.png'},
    {id: 103, name: '阔剑', type: '武器', atr: '攻击 + 5', atk: 5, def: -1, spd: 0, src: 'http://cdn.dota2.com/apps/dota2/images/items/broadsword_lg.png'},
    {id: 201, name: '圆盾', type: '防具', atr: '防御 + 5', atk: 0, def: 5, spd: 0, src: 'http://cdn.dota2.com/apps/dota2/images/items/stout_shield_lg.png'},
    {id: 202, name: '玄冥盾牌', type: '防具', atr: '防御 + 10', atk: 0, def: 10, spd: 0, src: 'http://cdn.dota2.com/apps/dota2/images/items/buckler_lg.png'},
    {id: 203, name: '先锋盾', type: '防具', atr: '防御 + 20', atk: 0, def: 10, spd: 0, src: 'http://cdn.dota2.com/apps/dota2/images/items/vanguard_lg.png'}
  ]
}
