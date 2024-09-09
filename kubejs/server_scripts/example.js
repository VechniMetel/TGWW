// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

const NUGGET_NUMBER = 5

ServerEvents.recipes(e => {
  let nuggetRecipe = (namespace,nuggetId,material) => {
    e.forEachRecipe(
      {type:'minecraft:smelting',output:'#forge:ingots/'+material},
      r => {
        e.smelting(Item.of(namespace+':'+nuggetId,NUGGET_NUMBER),r.getOriginalRecipeIngredients()[0])
      }
    )
    e.remove({type:'minecraft:smelting',output:'#forge:ingots/'+material})
  }
  e.remove({type:'lightmanscurrency:coin_mint'})
  e.remove({output:'lightmanscurrency:trading_core'})
  e.shaped('lightmanscurrency:trading_core',[
    'xxx',
    'xzx',
    'xxx'
  ],{
    'x':'lightmanscurrency:coin_copper',
    'z':'minecraft:quartz'
  })
  let inter = 'tgww:sub_caliber_ap_warhead_incomplete'
  e.recipes.create.sequenced_assembly(
    'tgww:sub_caliber_ap_warhead',
    '#forge:plates/copper',[
      e.recipes.createCutting(inter,inter),
      e.recipes.createDeploying(inter,[inter,'#forge:nuggets/iron'])
  ]).transitionalItem(inter).loops(1)
  inter = 'tgww:blunt_ap_warhead_incomplete'
  e.recipes.create.sequenced_assembly(
    'tgww:blunt_ap_warhead',
    '#forge:plates/copper',[
      e.recipes.createCutting(inter,inter),
      e.recipes.createDeploying(inter,[inter,'#forge:nuggets/steel'])
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
  e.shapeless(Item.of('immersiveengineering:blueprint','{blueprint:"tgww"}'),[
    '#forge:gunpowder',
    'immersiveengineering:empty_casing',
    'minecraft:paper',
    '#forge:dyes/blue'
  ])
  e.custom({
    type: 'immersiveengineering:blueprint',
    category: 'tgww',
    inputs: [
      {base_ingredient:{item:'immersiveengineering:electron_tube'},count:3},
      {tag:'forge:plates/steel'}
    ],result: Item.of('tacz:ammo',30,'{AmmoId:"immersive_armorer:burst_capacitor"}').toJson()
  })
  e.custom({
    type: 'immersiveengineering:blueprint',
    category: 'tgww',
    inputs:[
      {base_ingredient:{item:'immersiveengineering:electron_tube'},count:6},
      {base_ingredient:{tag:'forge:dusts/redstone'},count:3},
      {base_ingredient:{tag:'forge:plates/steel'},count:2}
    ],result: Item.of('tacz:ammo',20,'{AmmoId:"immersive_armorer:stream_capacitor"}').toJson()
  })
  e.custom({
    type: 'immersiveengineering:blueprint',
    category: 'tgww',
    inputs:[
      {base_ingredient:{item:'immersiveengineering:electron_tube'},count:9},
      {base_ingredient:{tag:'forge:dusts/redstone'},count:6},
      {base_ingredient:{tag:'forge:plates/steel'},count:3},
      {base_ingredient:{tag:'forge:gems/quartz'},count:2}
    ],result: Item.of('tacz:ammo',15,'{AmmoId:"immersive_armorer:high_power_capacitor"}').toJson()
  })
  e.custom({
    type: 'immersiveengineering:blueprint',
    category: 'tgww',
    inputs:[
      {base_ingredient:{tag:'forge:nuggets/steel'},count:12},
      {base_ingredient:{tag:'forge:nuggets/lead'},count:6},
      {base_ingredient:{item:'immersiveengineering:empty_casing'},count:6},
      {base_ingredient:{tag:'forge:gunpowder'},count:2}
    ],result: Item.of('tacz:ammo',6,'{AmmoId:"immersive_armorer:ap_ammo"}')
  })
  e.shaped(Item.of('tacz:ammo',50,'{AmmoId:"immersive_armorer:chemical"}'),[
    'xzx',
    'zyz',
    'xzx'
  ],{
    x:'#tgww:flammable_fluid',
    z:'#forge:plates/steel',
    y:'immersiveengineering:fluid_pipe'
  })
  e.custom({
    type: 'immersiveengineering:blueprint',
    category: 'tgww',
    inputs:[
      {base_ingredient:{tag:'forge:nuggets/iron'},count:6},
      {base_ingredient:{tag:'forge:nuggets/lead'},count:6},
      {base_ingredient:{item:'immersiveengineering:empty_casing'},count:6},
      {base_ingredient:{tag:'forge:gunpowder'},count:2}
    ],result: Item.of('tacz:ammo',6,'{AmmoId:"immersive_armorer:454_casul"}')
  })
  e.custom({
    type: 'immersiveengineering:blueprint',
    category: 'tgww',
    inputs:[
      {tag:'forge:rods/steel'},
      {base_ingredient:{tag:'forge:nuggets/steel'},count:2}
    ],result: Item.of('tacz:ammo',2,'{AmmoId:"immersive_armorer:cut_steel_rod"}')
  })
  e.custom({
    type: 'immersiveengineering:blueprint',
    category: 'tgww',
    inputs:[
      {base_ingredient:{item:'immersiveengineering:component_iron'},count:2},
      {base_ingredient:{tag:'forge:treated_wood'},count:4},
      {item:'immersiveengineering:gunpart_hammer'},
      {base_ingredient:{item:'immersiveengineering:electron_tube'},count:2},
      {item:'immersiveengineering:gunpart_barrel'},
      {item:'immersiveengineering:wooden_grip'}
    ],result: Item.of('tacz:modern_kinetic_gun','{GunId:"immersive_armorer:pump_shotgun"}')
  })
  e.custom({
    type: 'immersiveengineering:blueprint',
    category: 'tgww',
    inputs:[
      {base_ingredient:{item:'immersiveengineering:component_steel'},count:3},
      {item:'immersiveengineering:wooden_grip'},
      {item:'immersiveengineering:gunpart_hammer'},
      {item:'immersiveengineering:gunpart_barrel'},
      {base_ingredient:{tag:'forge:treated_wood'},count:6},
      {base_ingredient:{item:'immersiveengineering:component_electronic_adv'},count:2}
    ],result: Item.of('tacz:modern_kinetic_gun','{GunId:"immersive_armorer:assult_rifle"}')
  })
  e.custom({
    type: 'immersiveengineering:blueprint',
    category: 'tgww',
    inputs:[
      {item:'immersiveengineering:revolver'},
      {base_ingredient:{tag:'forge:plates/steel'},count:3},
      {item:'immersiveengineering:speedloader'},
      {base_ingredient:{item:'immersiveengineering:electron_tube'},count:3},
      {item:'immersiveengineering:component_electronic_adv'}
    ],result: Item.of('tacz:modern_kinetic_gun','{GunId:"immersive_armorer:revolver"}')
  })
  e.custom({
    type: 'immersiveengineering:blueprint',
    category: 'tgww',
    inputs:[
      {item:'immersiveengineering:railgun'},
      {base_ingredient:{tag:'forge:dusts/redstone'},count:16},
      {base_ingredient:{item:'immersiveengineering:wirecoil_steel'},count:16},
      {item:'immersiveengineering:toolupgrade_revolver_electro'},
      {item:'immersiveengineering:toolupgrade_railgun_capacitors'},
      {base_ingredient:{tag:'forge:plates/steel'},count:6}
    ],result: Item.of('tacz:modern_kinetic_gun','{GunId:"immersive_armorer:railgun"}')
  })
  e.custom({
    type: 'immersiveengineering:blueprint',
    category: 'tgww',
    inputs:[
      {base_ingredient:{tag:'forge:wires/electrum'},count:8},
      {item:'immersiveengineering:wooden_grip'},
      {item:'immersiveengineering:gunpart_barrel'},
      {item:'immersiveengineering:gunpart_hammer'},
      {base_ingredient:{item:'immersiveengineering:component_steel'},count:2}
    ],result: Item.of('tacz:modern_kinetic_gun','{GunId:"immersive_armorer:standard_rail_pistol_mk1"}')
  })
  e.custom({
    type: 'immersiveengineering:blueprint',
    category: 'tgww',
    inputs:[
      {base_ingredient:{tag:'forge:wires/electrum'},count:16},
      {item:'immersiveengineering:gunpart_barrel'},
      {base_ingredient:{item:'immersiveengineering:electron_tube'},count:4},
      Item.of('tacz:modern_kinetic_gun','{GunId:"immersive_armorer:standard_rail_pistol_mk1"}').weakNBT(),
      {base_ingredient:{item:'immersiveengineering:component_electronic'},count:5},
      {base_ingredient:{tag:'forge:wires/steel'},count:2}
    ],result: Item.of('tacz:modern_kinetic_gun','{GunId:"immersive_armorer:standard_rail_pistol_mk2"}')
  })
  e.custom({
    type: 'immersiveengineering:blueprint',
    category: 'tgww',
    inputs:[
      {base_ingredient:{tag:'forge:wires/electrum'},count:16},
      {item:'immersiveengineering:toolupgrade_revolver_electro'},
      {base_ingredient:{item:'immersiveengineering:electron_tube'},count:4},
      Item.of('tacz:modern_kinetic_gun','{GunId:"immersive_armorer:standard_rail_pistol_mk2"}').weakNBT(),
      {base_ingredient:{item:'immersiveengineering:component_electronic_adv'},count:5},
      {base_ingredient:{tag:'forge:wires/steel'},count:2}
    ],result: Item.of('tacz:modern_kinetic_gun','{GunId:"immersive_armorer:standard_rail_pistol_mk3"}')
  })
  e.custom({
    type: 'immersiveengineering:blueprint',
    category: 'tgww',
    inputs:[
      {base_ingredient:{tag:'forge:wires/steel'},count:8},
      {base_ingredient:{item:'immersiveengineering:electron_tube'},count:6},
      {base_ingredient:{tag:'forge:wires/aluminum'},count:8},
      Item.of('tacz:modern_kinetic_gun','{GunId:"immersive_armorer:standard_rail_pistol_mk3"}').weakNBT(),
      {base_ingredient:{item:'immersiveengineering:component_electronic_adv'},count:4},
      {item:'immersiveengineering:logic_unit'}
    ],result: Item.of('tacz:modern_kinetic_gun','{GunId:"immersive_armorer:standard_rail_pistol_mk4"}')
  })
  e.custom({
    type: 'immersiveengineering:blueprint',
    category: 'tgww',
    inputs:[
      {item:'immersiveengineering:gunpart_barrel'},
      {item:'immersiveengineering:gunpart_hammer'},
      {item:'immersiveengineering:component_steel'},
      {base_ingredient:{item:'immersiveengineering:electron_tube'},count:6},
      {base_ingredient:{tag:'forge:wires/aluminum'},count:8},
      {base_ingredient:{tag:'forge:wires/steel'},count:8}
    ],result: Item.of('tacz:modern_kinetic_gun','{GunId:"immersive_armorer:standard_rail_smg_mk1"}')
  })
  e.recipes.create.mechanical_crafting(Item.of('tacz:modern_kinetic_gun','{GunId:"create_armorer:pistol_auto_stress"}'),[
    'abaa',
    'ccde',
    '  ea',
    '  aa'
  ],{
    a:'#forge:plates/brass',
    b:'#vintageimprovements:springs/iron',
    c:'#forge:plates/iron',
    d:'minecraft:flint',
    e:'create:cogwheel'
  })
  e.recipes.create.mechanical_crafting(Item.of('tacz:modern_kinetic_gun','{GunId:"create_armorer:smg_auto_crank"}'),[
    'aaaba',
    'cdefg',
    '   da'
  ],{
    a:'#forge:plates/brass',
    b:'create_dd:kinetic_mechanism',
    c:'#vintageimprovements:springs/iron',
    d:'#forge:plates/iron',
    e:'create:minecart_coupling',
    f:'create:cogwheel',
    g:'minecraft:flint'
  })
  e.recipes.create.mechanical_crafting(Item.of('tacz:modern_kinetic_gun','{GunId:"create_armorer:shotgun_db_stone"}'),[
    'aaab ',
    '  cde',
    '   ee'
  ],{
    a:'#forge:plates/iron',
    b:'minecraft:flint',
    c:'create:minecart_coupling',
    d:'create:electron_tube',
    e:'#forge:plates/brass'
  })
  e.recipes.create.mechanical_crafting(Item.of('tacz:modern_kinetic_gun','{GunId:"create_armorer:pistol_revolver_torque"}'),[
    'aabaa',
    'cdbef',
    '  bga',
    '   ga'
  ],{
    a:'#forge:plates/brass',
    b:'#forge:plates/iron',
    c:'#forge:rods/iron',
    d:'create:clockwork_bearing',
    e:'create:precision_mechanism',
    f:'minecraft:flint',
    g:'#minecraft:planks'
  })
  e.recipes.create.mechanical_crafting(Item.of('tacz:modern_kinetic_gun','{GunId:"create_armorer:shotgun_pump_bearing"}'),[
    'aabcd',
    '  efg',
    '   hh'
  ],{
    a:'#forge:rods/iron',
    b:'#forge:plates/iron',
    c:'create:large_cogwheel',
    d:'#forge:plates/brass',
    e:'minecraft:lever',
    f:'create:precision_mechanism',
    g:'minecraft:flint',
    h:'#minecraft:planks'
  })
  e.recipes.create.mechanical_crafting(Item.of('tacz:modern_kinetic_gun','{GunId:"create_armorer:rifle_assult_crane"}'),[
    'abccc',
    'defgh',
    '   i '
  ],{
    a:'#forge:rods/iron',
    b:'#forge:plates/iron',
    c:'#forge:plates/brass',
    d:'#vintageimprovements:springs/iron',
    e:'create:gantry_shaft',
    f:'create:piston_extension_pole',
    g:'create_sa:steam_engine',
    h:'minecraft:flint',
    i:'#minecraft:planks'
  })
  e.recipes.create.mechanical_crafting(Item.of('tacz:modern_kinetic_gun','{GunId:"create_armorer:sniper_semi_clockwork"}'),[
    'aabaa',
    'ccdef',
    '   gh'
  ],{
    a:'#forge:plates/brass',
    b:'create:piston_extension_pole',
    c:'#forge:rods/iron',
    d:'#vintageimprovements:springs/iron',
    e:'create_sa:steam_engine',
    f:'create:precision_mechanism',
    g:'create:cogwheel',
    h:'#minecraft:planks'
  })
  e.recipes.create.mechanical_crafting(Item.of('tacz:modern_kinetic_gun','{GunId:"create_armorer:mg_platemag_flywheel"}'),[
    '  ab ',
    'cdeff',
    'ghijk',
    '   l '
  ],{
    a:'create_sa:vault_component',
    b:'#forge:plates/iron',
    c:'create_sa:steam_engine',
    d:'#vintageimprovements:springs/iron',
    e:'create_dd:cog_crank',
    f:'#forge:plates/brass',
    g:'create:flywheel',
    h:'create:precision_mechanism',
    i:'create:steam_engine',
    j:'createdieselgenerators:lighter',
    k:'create_dd:kinetic_mechanism',
    l:'createdieselgenerators:kelp_handle'
  })
  nuggetRecipe('minecraft','iron_nugget','iron')
  nuggetRecipe('minecraft','gold_nugget','gold')
  nuggetRecipe('create','copper_nugget','copper')
  nuggetRecipe('create','zinc_nugget','zinc')
  nuggetRecipe('immersiveengineering','nugget_constantan','constantan')
  nuggetRecipe('immersiveengineering','nugget_uranium','uranium')
  nuggetRecipe('immersiveengineering','nugget_electrum','electrum')
  nuggetRecipe('immersiveengineering','nugget_steel','steel')
  nuggetRecipe('immersiveengineering','nugget_nickel','nickel')
  nuggetRecipe('immersiveengineering','nugget_silver','silver')
  nuggetRecipe('immersiveengineering','nugget_aluminum','aluminum')
  nuggetRecipe('immersiveengineering','nugget_lead','lead')
})

ServerEvents.tags('item',e => {
  e.add('tgww:flammable_fluid','immersiveengineering:creosote_bucket')
  e.add('tgww:flammable_fluid','immersiveengineering:plantoil_bucket')
  e.add('tgww:flammable_fluid','immersiveengineering:ethanol_bucket')
  e.add('tgww:flammable_fluid','immersiveengineering:biodiesel_bucket')
  e.add('tgww:flammable_fluid','immersivepetroleum:diesel_bucket')
  e.add('tgww:flammable_fluid','immersivepetroleum:gasoline_bucket')
  e.add('tgww:flammable_fluid','immersivepetroleum:napalm_bucket')
  e.add('tgww:flammable_fluid','createaddition:seed_oil_bucket')
  e.add('tgww:flammable_fluid','createaddition:bioethanol_bucket')
})

ServerEvents.tags('block',e => {
  e.remove('create:safe_nbt','create_clipboard')
})
