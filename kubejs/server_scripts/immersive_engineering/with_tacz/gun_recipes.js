ServerEvents.recipes(e => {
  e.custom({
    type: 'immersiveengineering:blueprint',
    category: 'tgww_guns',
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
    category: 'tgww_guns',
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
    category: 'tgww_guns',
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
    category: 'tgww_guns',
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
    category: 'tgww_guns',
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
    category: 'tgww_guns',
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
    category: 'tgww_guns',
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
    category: 'tgww_guns',
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
    category: 'tgww_guns',
    inputs:[
      {item:'immersiveengineering:gunpart_barrel'},
      {item:'immersiveengineering:gunpart_hammer'},
      {item:'immersiveengineering:component_steel'},
      {base_ingredient:{item:'immersiveengineering:electron_tube'},count:6},
      {base_ingredient:{tag:'forge:wires/aluminum'},count:8},
      {base_ingredient:{tag:'forge:wires/steel'},count:8}
    ],result: Item.of('tacz:modern_kinetic_gun','{GunId:"immersive_armorer:standard_rail_smg_mk1"}')
  })
  e.custom({
    type: 'immersiveengineering:blueprint',
    category: 'tgww_guns',
    inputs:[
      {item:'immersiveengineering:chemthrower'},
      {base_ingredient:{item:'immersiveengineering:fluid_pipe'},count:2},
      {item:'immersiveengineering:gunpart_hammer'},
      {base_ingredient:{item:'immersiveengineering:wooden_grip'},count:2},
      {base_ingredient:{tag:'forge:plates/steel'},count:8},
    ],result: Item.of('tacz:modern_kinetic_gun', '{GunId:"immersive_armorer:chemical_thrower"}')
  })
  e.custom({
    type: 'immersiveengineering:blueprint',
    category: 'tgww_guns',
    inputs:[
      {item:'immersiveengineering:gunpart_barrel'},
      {item:'immersiveengineering:gunpart_hammer'},
      {item:'immersiveengineering:heavy_engineering'},
      {item:'immersiveengineering:wooden_grip'},
      {base_ingredient:{tag:'forge:nuggets/steel'},count:8},
      {base_ingredient:{tag:'forge:plates/steel'},count:8}
    ],result: Item.of('tacz:modern_kinetic_gun', '{GunId:"immersive_armorer:pistol_9mm"}')
  })
})