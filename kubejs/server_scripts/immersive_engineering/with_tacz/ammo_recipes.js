ServerEvents.recipes(e => {
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
})