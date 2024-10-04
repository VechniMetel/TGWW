ServerEvents.recipes(e => {
  let inter = 'tgww:sub_caliber_ap_warhead_incomplete'
  e.recipes.create.sequenced_assembly(
    'tgww:sub_caliber_ap_warhead',
    '#forge:plates/copper',[
      e.recipes.createDeploying(inter,[inter,'#forge:nuggets/iron']),
      e.recipes.createCutting(inter,inter)
  ]).transitionalItem(inter).loops(1)
  inter = 'tgww:blunt_ap_warhead_incomplete'
  e.recipes.create.sequenced_assembly(
    'tgww:blunt_ap_warhead',
    '#forge:plates/copper',[
      e.recipes.createDeploying(inter,[inter,'#forge:nuggets/steel']),
      e.recipes.createCutting(inter,inter)
  ]).transitionalItem(inter).loops(1)
  e.recipes.create.cutting('tgww:pneumatic_pistol_warhead','#forge:plates/copper')
  e.recipes.create.cutting('tgww:sub_caliber_ap_shell','#forge:plates/brass')
  e.recipes.create.cutting('tgww:flange_ap_shell','#forge:plates/brass')
  e.recipes.create.cutting('tgww:pneumatic_pistol_shell','#forge:plates/brass')
  e.recipes.create.deploying('tgww:sub_caliber_ap_shell_with_gunpowder',[
    'tgww:sub_caliber_ap_shell',
    '#forge:gunpowder'
  ])
  e.recipes.create.deploying('tgww:flange_ap_shell_with_gunpowder',[
    'tgww:flange_ap_shell',
    '#forge:gunpowder'
  ])
  e.recipes.create.deploying('tgww:pneumatic_pistol_shell_with_gunpowder',[
    'tgww:pneumatic_pistol_shell',
    '#forge:gunpowder'
  ])
  e.recipes.create.deploying('tgww:sub_caliber_ap_discarded_bullet_not_sealed',[
    'tgww:sub_caliber_ap_shell_with_gunpowder',
    'tgww:sub_caliber_ap_warhead'
  ])
  e.recipes.create.deploying('tgww:flange_blunt_ap_discarded_bullet_not_sealed',[
    'tgww:flange_ap_shell_with_gunpowder',
    'tgww:blunt_ap_warhead'
  ])
  e.recipes.create.deploying('tgww:pneumatic_pistol_bullet_not_sealed',[
    'tgww:pneumatic_pistol_shell_with_gunpowder',
    'tgww:pneumatic_pistol_warhead'
  ])
  e.recipes.create.pressing([
    Item.of('tacz:ammo',3,'{AmmoId:"create_armorer:slap"}').withChance(0.95),
    Item.of('tgww:sub_caliber_ap_discarded_bullet_not_sealed').withChance(0.05)
  ],'tgww:sub_caliber_ap_discarded_bullet_not_sealed')
  e.recipes.create.pressing([
    Item.of('tacz:ammo',6,'{AmmoId:"create_armorer:gas_pistol_ammo"}').withChance(0.95),
    Item.of('tgww:pneumatic_pistol_bullet_not_sealed').withChance(0.05)
  ],'tgww:pneumatic_pistol_bullet_not_sealed')
  e.recipes.create.pressing([
    Item.of('tacz:ammo',2,'{AmmoId:"create_armorer:rbapb"}').withChance(0.95),
    Item.of('tgww:flange_blunt_ap_discarded_bullet_not_sealed').withChance(0.05)
  ],'tgww:flange_blunt_ap_discarded_bullet_not_sealed')
})