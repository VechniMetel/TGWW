// priority: 0

// Visit the wiki for more info - https://kubejs.com/

StartupEvents.registry('item', e => {
  let createTGWWItem = (id) => { e.create('tgww:'+id) }
  let createIncompleteTGWWItem = (id) => {
    e.create('tgww:'+id)
    e.create('tgww:'+id+"_incomplete").texture('tgww:item/'+id)
  }
  createIncompleteTGWWItem('sub_caliber_ap_warhead')
  createIncompleteTGWWItem('blunt_ap_warhead')
  createIncompleteTGWWItem('pneumatic_pistol_warhead')
  createTGWWItem('sub_caliber_ap_shell')
  e.create('tgww:sub_caliber_ap_shell_with_gunpowder').texture('tgww:item/sub_caliber_ap_shell')
  createTGWWItem('sub_caliber_ap_discarded_bullet_not_sealed')
  createTGWWItem('flange_ap_shell')
  e.create('tgww:flange_ap_shell_with_gunpowder').texture('tgww:item/flange_ap_shell')
  createTGWWItem('flange_blunt_ap_discarded_bullet_not_sealed')
  createTGWWItem('pneumatic_pistol_shell')
  e.create('tgww:pneumatic_pistol_shell_with_gunpowder').texture('tgww:item/pneumatic_pistol_shell')
  createTGWWItem('pneumatic_pistol_bullet_not_sealed')
  e.create('tgww:birthday_0').maxStackSize(1)
  e.create('tgww:press_w_to_ponder').maxStackSize(1)
  e.create('tgww:incomplete_totem').maxStackSize(1)
  e.create("tgww:mysterious_flesh")
    .food(t=>{
      t.hunger(8)
      t.saturation(0.4)
      t.meat()
      t.alwaysEdible()
      t.effect("minecraft:strength",20*4,1, 1)
    })
  e.create("tgww:cooked_mysterious_meat")
  .food(r=>{
    r.hunger(14)
    r.saturation(0.8)
    r.meat()
    r.alwaysEdible()
    r.effect("minecraft:strength",20*4,2, 1)
  })
e.create("tgww:incomplete_col")
e.create("tgww:incomplete_cok")
})