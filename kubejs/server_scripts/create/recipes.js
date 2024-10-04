ServerEvents.recipes(r => {
  r.recipes.create.compacting('minecraft:scute',
    ["3x minecraft:bone_meal", "minecraft:lime_dye"])
  r.recipes.create.deploying('minecraft:shulker_shell',
    ['minecraft:turtle_helmet', 'minecraft:popped_chorus_fruit'])
  r.recipes.create.mixing("2x minecraft:andesite",
    ["2x minecraft:cobblestone", "minecraft:quartz"])
  r.recipes.create.haunting(['create_netherless:ectoplasm',
    Item.of('minecraft:string').withChance(0.1)], 'minecraft:string')
  r.recipes.create.compacting('minecraft:phantom_membrane',
    ['minecraft:rotten_flesh', 'create_netherless:ectoplasm', 'minecraft:leather'])
  r.recipes.create.mixing('minecraft:chorus_fruit',
    ['minecraft:ender_pearl', "#forge:fruits/sweet"])
  r.recipes.create.mixing('minecraft:chorus_flower',
    ['minecraft:chorus_fruit', "#minecraft:small_flowers"])
  r.recipes.create.mixing('minecraft:kelp', [Fluid.water(500),
    'minecraft:seagrass', 'vintagedelight:salt_dust'])
  r.recipes.create.haunting('minecraft:fern', 'minecraft:grass')
  r.recipes.create.sandpaper_polishing('create_netherless:coal_rod',
    "#minecraft:coals")
  r.recipes.create.milling('crockpot:blackstone_dust', 'minecraft:blackstone')
  r.recipes.create.deploying('minecraft:end_stone', ['minecraft:sandstone', 'minecraft:popped_chorus_fruit'])
  r.recipes.create.mixing('minecraft:ghast_tear', [Fluid.of('butchercraft:blood_fluid', 500), 
    'create_netherless:ectoplasm',Fluid.water(500)])
  r.replaceInput({ output: 'create_netherless:netherite_fragment' },
    'minecraft:blackstone', 'minecraft:gilded_blackstone')
  r.recipes.create.filling('farmersdelight:rich_soil',
    ['farmersdelight:organic_compost', Fluid.of('minecraft:water', 250)]
  )
  r.recipes.create.deploying('minecraft:skeleton_skull',
    ['minecraft:bone_block', '#forge:tools/knives']
  ).damageIngredient({ tag: 'forge:tools/knives' }, 2)
  r.remove({ output: 'protection_pixel:maneuveringwing' })
  r.recipes.create.mechanical_crafting('protection_pixel:maneuveringwing', [
    'ab ba',
    'cdedc',
    'af fa'
  ], {
    a: '#forge:plates/zinc',
    b: 'create:cogwheel',
    c: '#forge:fabric_hemp',
    d: 'create_dd:kinetic_mechanism',
    e: 'immersiveengineering:glider',
    f: 'create_sa:fan_component'
  })
  r.remove({ output: Item.of('minecraft:potion', '{Potion:"parcool:energy_drink"}') })
  r.custom({
    "type": "create_mechanical_extruder:extruding",
    "catalyst": {
      "item": "minecraft:raw_iron_block"
    },
    "ingredients": [
      {
        "item": "minecraft:blue_ice"
      },
      {
        "amount": 1000,
        "fluid": "minecraft:lava",
        "nbt": {}
      }
    ],
    "result": {
      "item": "create:crimsite"
    }
  })
  r.custom({
    "type": "create_mechanical_extruder:extruding",
    "catalyst": {
      "item": "minecraft:raw_gold_block"
    },
    "ingredients": [
      {
        "item": "minecraft:blue_ice"
      },
      {
        "amount": 1000,
        "fluid": "minecraft:lava",
        "nbt": {}
      }
    ],
    "result": {
      "item": "create:ochrum"
    }
  })
  r.custom({
    "type": "create_mechanical_extruder:extruding",
    "catalyst": {
      "item": "minecraft:raw_copper_block"
    },
    "ingredients": [
      {
        "item": "minecraft:blue_ice"
      },
      {
        "amount": 1000,
        "fluid": "minecraft:lava",
        "nbt": {}
      }
    ],
    "result": {
      "item": "create:veridium"
    }
  })
  r.custom({
    "type": "create_mechanical_extruder:extruding",
    "catalyst": {
      "item": "create:raw_zinc_block"
    },
    "ingredients": [
      {
        "item": "minecraft:blue_ice"
      },
      {
        "amount": 1000,
        "fluid": "minecraft:lava",
        "nbt": {}
      }
    ],
    "result": {
      "item": "create:asurine"
    }
  })
  r.custom({
    "type": "create_mechanical_extruder:extruding",
    "catalyst": {
      "item": "minecraft:magma_block"
    },
    "ingredients": [
      {
        "item": "minecraft:blue_ice"
      },
      {
        "amount": 1000,
        "fluid": "minecraft:lava",
        "nbt": {}
      }
    ],
    "result": {
      "item": "minecraft:magma_block"
    }
  })
  r.custom({
    "type": "create_mechanical_extruder:extruding",
    "ingredients": [
      {
        "item": "minecraft:packed_ice"
      },
      {
        "amount": 1000,
        "fluid": "minecraft:lava",
        "nbt": {}
      }
    ],
    "result": {
      "item": "quark:sturdy_stone"
    }
  })
  r.custom({
    "type": "create:mixing",
  
    "ingredients": [
      {
        "amount": 1000,
        "fluid": "minecraft:water"
      },
      {
        "tag": "forge:salt"
      },
      {
        "tag": "forge:sugar"
      },
      {
        "tag": "forge:lemons"
      }
    ],
    "results": [
      {
        "amount": 1000,
        "fluid": "create:potion",
        "nbt": {
          "Potion": "parcool:energy_drink"
        }
      }
    ]
  })
  r.custom({
    "type": "create_mechanical_extruder:extruding",
    "ingredients": [
      {
        "amount": 1000,
        "fluid": "minecraft:water",
        "nbt": {}
      },
      {
        "amount": 1000,
        "fluid": "minecraft:lava",
        "nbt": {}
      }
    ],
    "result": {
      "item": "minecraft:cobbled_deepslate"
    }
  })
  r.recipes.createoreexcavation.vein('{"text": "粗铝土"}',
     'immersiveengineering:raw_aluminum')
     .placement(128, 8, 2858305)
    .id('kubejs:raw_aluminum')
  r.recipes.createoreexcavation.drilling(
    'immersiveengineering:raw_aluminum', 
    'kubejs:raw_aluminum', 600).id("kubejs:ie_vein1")
  r.recipes.createoreexcavation.vein('{"text": "粗铅矿"}',
    'immersiveengineering:raw_lead')
    .placement(128, 8, 2858305)
    .id('kubejs:raw_lead')
  r.recipes.createoreexcavation.drilling(
    'immersiveengineering:raw_lead', 
    'kubejs:raw_lead', 600).id("kubejs:ie_vein2")
  r.recipes.createoreexcavation.vein('{"text": "粗银矿"}',
    'immersiveengineering:raw_silver')
    .placement(256, 16, 2858305)
    .id('kubejs:raw_silver')
  r.recipes.createoreexcavation.drilling(
    'immersiveengineering:raw_silver', 
    'kubejs:raw_silver', 1200).id("kubejs:ie_vein3")
  r.recipes.createoreexcavation.vein('{"text": "粗镍矿"}',
    'immersiveengineering:raw_nickel')
    .placement(256, 8, 2858305)
    .id('kubejs:raw_nickel')
  r.recipes.createoreexcavation.drilling(
    'immersiveengineering:raw_nickel', 
    'kubejs:raw_nickel', 1200).id("kubejs:ie_vein4")
    .stress(512)
    .fluid('minecraft:water 10') 
    r.recipes.createoreexcavation.vein('{"text": "粗铀矿"}',
      'immersiveengineering:raw_uranium')
      .placement(256, 16, 2858305)
      .id('kubejs:raw_uranium')
    r.recipes.createoreexcavation.drilling(
      'immersiveengineering:raw_uranium', 
      'kubejs:raw_uranium', 1200).id("kubejs:ie_vein5")
      .drill('createoreexcavation:diamond_drill')
      .stress(512)
      .fluid('minecraft:water 20') 
  r.recipes.create.crushing(["2x minecraft:bone_meal","3x tgww:mysterious_flesh"],'easy_villagers:villager')
  const x = 'tgww:incomplete_totem'

  r.recipes.create.sequenced_assembly(
    [
      'minecraft:totem_of_undying'
    ],
    'minecraft:paper',
    [
      r.recipes.create.pressing(x,x),
      r.recipes.create.deploying(x,[x,'minecraft:emerald']),
      r.recipes.create.filling(x,[x,Fluid.of(
        'create_enchantment_industry:hyper_experience',5)]),
      r.recipes.create.pressing(x,x)
    ]
  )
  .transitionalItem(x)
  .loops(3)
  const sm = 'tgww:incomplete_col'

    r.recipes.create.sequenced_assembly(
        [
            Item.of('twilightforest:charm_of_life_1')
        ],
        '#minecraft:planks',
        [
            r.recipes.create.filling(sm,[sm,Fluid.of('create:potion',100,'{Bottle: "REGULAR",Potion: "minecraft:regeneration"}')]),
            r.recipes.create.cutting(sm,sm)
        ]
    )
    .transitionalItem(sm)
    .loops(2)
  const bg = 'tgww:incomplete_cok'
    r.recipes.create.sequenced_assembly(
        [
            Item.of('twilightforest:charm_of_keeping_1')
        ],
        '#minecraft:planks',
        [
            r.recipes.create.pressing(bg,bg),
            r.recipes.create.deploying(bg,[bg,'minecraft:ender_pearl']),
            r.recipes.create.pressing(bg,bg)
        ]
    )
    .transitionalItem(bg)
    .loops(2)
    r.shaped('create_dd:black_asphalt_block',[
      "aa ",
      "aa ",
      "   "
    ],{
      'a':'#forge:bitumen'
    })
    r.recipes.create.splashing(['minecraft:mud',Item.of('minecraft:bamboo').withChance(0.1)],'minecraft:dirt')
    r.recipes.create.deploying('legendarysurvivaloverhaul:ice_fern',['minecraft:fern','minecraft:snowball'])
    r.recipes.create.deploying('legendarysurvivaloverhaul:sun_fern',['minecraft:fern','minecraft:flint_and_steel'])
    .damageIngredient({item:'minecraft:flint_and_steel'},1)
    r.remove({input:'create_netherless:coal_rod'})
    const f ="create_netherless:incomplete_blaze_rod"
    r.recipes.create.sequenced_assembly(
      [
          'minecraft:blaze_rod'
      ],
      'create_netherless:coal_rod',
      [
        r.recipes.create.filling(f,[f,Fluid.of('minecraft:lava',1000)]),
        r.recipes.create.pressing(f,f),
        r.recipes.create.pressing(f,f)
      ]
  )
  .transitionalItem(f)
  .loops(1)
  r.recipes.create.deploying('minecraft:dragon_breath',
    ['minecraft:experience_bottle', 'minecraft:shulker_shell'])
    r.replaceInput({input:'minecraft:diamond_hoe'},'minecraft:diamond_hoe','create_sa:brass_hoe')
    r.replaceInput({input:'minecraft:diamond_pickaxe'},'minecraft:diamond_pickaxe','create_sa:brass_pickaxe')
    r.replaceInput({input:'minecraft:diamond_axe'},'minecraft:diamond_axe','create_sa:brass_axe')
    r.replaceInput({input:'minecraft:diamond_shovel'},'minecraft:diamond_shovel','create_sa:brass_shovel')
    r.replaceInput({input:'minecraft:golden_sword'},'minecraft:golden_sword','create_sa:experience_sword')
    r.recipes.create.mixing([Fluid.of('tgww:clean_water',1000),'minecraft:charcoal'],
      [Fluid.of('minecraft:water',1000),'minecraft:charcoal'])
    r.recipes.create.filling('legendarysurvivaloverhaul:water_plant_bag',
      ['legendarysurvivaloverhaul:water_plant_seeds',Fluid.of('tgww:clean_water',100)]
    )
    r.recipes.create.filling(Item.of('legendarysurvivaloverhaul:canteen', '{"legendarysurvivaloverhaul:HydrationCapacity":10,"legendarysurvivaloverhaul:HydrationPurity":"purified"}'),
      ['legendarysurvivaloverhaul:canteen',Fluid.of('tgww:clean_water',500)]
    )
    r.recipes.create.filling(Item.of('legendarysurvivaloverhaul:large_canteen', '{"legendarysurvivaloverhaul:HydrationCapacity":20,"legendarysurvivaloverhaul:HydrationPurity":"purified"}'),
      ['legendarysurvivaloverhaul:large_canteen',Fluid.of('tgww:clean_water',1000)]
    )
    r.recipes.create.filling('legendarysurvivaloverhaul:purified_water_bottle',
      ['minecraft:glass_bottle',Fluid.of('tgww:clean_water',250)]
    )
})