ServerEvents.recipes(r =>{
  r.recipes.create.compacting('minecraft:scute',
    ["3x minecraft:bone_meal","minecraft:lime_dye"])
  r.recipes.create.deploying('minecraft:shulker_shell',
    ['minecraft:turtle_helmet','minecraft:popped_chorus_fruit'])
  r.recipes.create.mixing("2x minecraft:andesite",
    ["2x minecraft:cobblestone","minecraft:quartz"])
  r.recipes.create.haunting(['create_netherless:ectoplasm',
    Item.of('minecraft:string').withChance(0.1)],'minecraft:string')
  r.recipes.create.compacting('minecraft:phantom_membrane',
    ['minecraft:rotten_flesh','create_netherless:ectoplasm','minecraft:leather'])
  r.recipes.create.mixing('minecraft:chorus_fruit',
    ['minecraft:ender_pearl',"#forge:fruits/sweet"])
  r.recipes.create.mixing('minecraft:chorus_flower',
    ['minecraft:chorus_fruit',"#minecraft:small_flowers"])
  r.recipes.create.mixing('minecraft:kelp',[Fluid.water(500),
    'minecraft:seagrass','vintagedelight:salt_dust'])
  r.recipes.create.haunting('minecraft:fern','minecraft:grass')
  r.recipes.create.sandpaper_polishing('create_netherless:coal_rod',
    "#minecraft:coals")
  r.recipes.create.milling('crockpot:blackstone_dust','minecraft:blackstone')
  r.recipes.create.deploying('minecraft:end_stone',['minecraft:sandstone','minecraft:popped_chorus_fruit'])
  r.recipes.create.mixing('minecraft:ghast_tear',['minecraft:warped_fungus','create_netherless:ectoplasm',
    Fluid.water(1000)])
    r.replaceInput({output:'create_netherless:netherite_fragment'},
    'minecraft:blackstone','minecraft:gilded_blackstone')
  r.recipes.create.deploying('farmersdelight:rich_soil',
    ['farmersdelight:organic_compost','#minecraft:hoes']
  ).damageIngredient({tag:'minecraft:hoes'},2)
  r.recipes.create.deploying('minecraft:skeleton_skull',
    ['minecraft:bone_block','#forge:tools/knives']
  ).damageIngredient({tag:'forge:tools/knives'},2)
  })
