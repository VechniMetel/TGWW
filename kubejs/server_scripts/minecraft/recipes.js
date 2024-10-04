ServerEvents.recipes(r=>{
r.remove({output:'constructionwand:core_destruction'})
r.shapeless(Item.of('minecraft:red_mushroom',2),
['#minecraft:logs','minecraft:shears','minecraft:sugar']
).damageIngredient({item:'minecraft:shears'},2)
r.shapeless(Item.of('minecraft:brown_mushroom',2),
['minecraft:mud','minecraft:shears','minecraft:sugar']
).damageIngredient({item:'minecraft:shears'},2)
r.shaped('twilightforest:deer_spawn_egg',[
    "aba",
    "bcb",
    "aba"
],{
    'a':'twilightforest:raw_venison',
    'b':'minecraft:bone',
    'c':'minecraft:ghast_tear'
})
r.shapeless('xkdeco:mechanical_item_display',
[
   'xkdeco:plain_item_display', 'create:brass_casing'
])
r.shapeless('xkdeco:gorgeous_item_display',[
    'xkdeco:plain_item_display','minecraft:red_carpet','minecraft:dark_oak_log'
    ])
r.shapeless('xkdeco:gorgeous_block_display',[
    'xkdeco:plain_block_display','minecraft:red_carpet','minecraft:dark_oak_log'
])
r.shapeless('xkdeco:mechanical_block_display',[
    'create:brass_casing','xkdeco:plain_block_display'
])
r.smelting('tgww:cooked_mysterious_meat','tgww:mysterious_flesh',0,20*5)
r.smoking('tgww:cooked_mysterious_meat','tgww:mysterious_flesh',0,20*5)
r.shaped('create_power_loader:andesite_chunk_loader',[
    " a ",
    "bcb",
    " d "
],{
    'a':'minecraft:crying_obsidian',
    'b':'create_netherless:ectoplasm',
    'c':'minecraft:ghast_tear',
    'd':'create_power_loader:empty_andesite_chunk_loader'
})
r.shaped('create_power_loader:brass_chunk_loader',[
    " a ",
    "bcb",
    " d "
],{
    'a':'minecraft:crying_obsidian',
    'b':'create_netherless:ectoplasm',
    'c':'minecraft:ghast_tear',
    'd':'create_power_loader:empty_brass_chunk_loader'
})
r.remove({output:'ars_nouveau:ritual_warping'})
r.remove({output:'ars_nouveau:warp_scroll'})
r.remove({output:'ars_nouveau:stable_warp_scroll'})
r.remove({output:'ars_nouveau:relay_warp'})
r.remove({output:'#forge:tools/shovels'})
r.remove({output:'#forge:tools/pickaxes'})
r.remove({output:'#forge:tools/axes'})
r.remove({output:'#minecraft:hoes'})
r.remove({output:'#minecraft:swords'})
r.remove({output:'#forge:tools/shovels'})
r.shaped('minecraft:stone_shovel',[
    " a ",
    " b ",
    " b "
],{
    'a':'#quark:stone_tool_materials',
    'b':'#forge:rods/wooden'
})
r.shaped('minecraft:stone_sword',[
    " a ",
    " a ",
    " b "
],{
    'a':'#quark:stone_tool_materials',
    'b':'#forge:rods/wooden'
})
r.smithing(
    'immersiveengineering:pickaxe_steel','#forge:ingots/steel',
    'tetra:modular_double','#forge:ingots/steel'
)
r.smithing(
    'immersiveengineering:axe_steel','#forge:ingots/steel',
    'tetra:modular_double','#forge:plates/steel'
)
r.smithing(
    'immersiveengineering:hoe_steel','#forge:ingots/steel',
    'minecraft:stone_shovel','#forge:nuggets/steel'
)
r.smithing(
    'immersiveengineering:sword_steel','#forge:plates/steel',
    'minecraft:stone_sword','#forge:plates/steel'
)
r.smithing(
    'immersiveengineering:shovel_steel','#forge:nuggets/steel',
    'minecraft:stone_shovel','#forge:plates/steel'
)
r.replaceInput({ input: 'minecraft:iron_sword' },
    'minecraft:iron_sword', 'create_sa:brass_sword')
r.replaceInput({ input: 'minecraft:iron_pickaxe' },
    'minecraft:iron_pickaxe', 'create_sa:brass_pickaxe')
r.replaceInput({ input: 'minecraft:iron_axe' },
    'minecraft:iron_axe', 'create_sa:brass_axe')
r.replaceInput({ input: 'minecraft:iron_hoe' },
    'minecraft:iron_hoe', 'create_sa:brass_hoe')
r.replaceInput({ input: 'minecraft:iron_shovel' },
    'minecraft:iron_shovel', 'create_sa:brass_shovel')
r.replaceInput({ output: 'butchercraft:grinder_block_item' },
    'create_sa:brass_sword', '#forge:tools/knives')
r.replaceInput({ input: 'minecraft:diamond_sword' },
    'minecraft:diamond_sword', 'farmersdelight:diamond_knife')
r.shapeless('legendarysurvivaloverhaul:ice_fern_seeds',
    ['legendarysurvivaloverhaul:ice_fern','minecraft:shears']
).damageIngredient({item:'minecraft:shears'},1)
r.shapeless('legendarysurvivaloverhaul:sun_fern_seeds',
    ['legendarysurvivaloverhaul:sun_fern','minecraft:shears']
).damageIngredient({item:'minecraft:shears'},1)
r.remove({output:"twilightforest:uncrafting_table"})
r.replaceInput({ input: 'minecraft:wooden_shovel' },
    'minecraft:wooden_shovel','minecraft:stone_shovel')
r.remove({input:'minecraft:slime_ball',output:'minecraft:ender_pearl'})
r.recipes.create.haunting('minecraft:ender_pearl','minecraft:slime_ball')
r.recipes.create.milling('immersiveengineering:dust_sulfur','vintageimprovements:sulfur')
r.shapeless('supplementaries:antique_ink',[
    'minecraft:black_dye','minecraft:potion'])
r.shaped('minecraft:ink_sac',[
    '   ',
    ' a ',
    ' b '
],{
    'a':'supplementaries:antique_ink',
    'b':'minecraft:dried_kelp'
}).replaceIngredient('supplementaries:antique_ink','minecraft:glass_bottle')
r.shaped('primogemcraft:mmolagao',[
    'aaa',
    ' b ',
    ' b '
],{
    'a':'primogemcraft:mmola_01',
    'b':'#forge:rods/wooden'
})
r.shaped('primogemcraft:mmolachutou',[
    'aa ',
    ' b ',
    ' b '
],{
    'a':'primogemcraft:mmola_01',
    'b':'#forge:rods/wooden'
})
r.shaped('primogemcraft:mmolafu',[
    'aa ',
    'ab ',
    ' b '
],{
    'a':'primogemcraft:mmola_01',
    'b':'#forge:rods/wooden'
})
r.shaped('primogemcraft:mmolachan',[
    ' a ',
    ' b ',
    ' b '
],{
    'a':'primogemcraft:mmola_01',
    'b':'#forge:rods/wooden'
})
r.shaped('primogemcraft:mmolajian',[
    ' a ',
    ' a ',
    ' b '
],{
    'a':'primogemcraft:mmola_01',
    'b':'#forge:rods/wooden'
})
r.replaceInput({output:'primogemcraft:yuanshigao'},
    'minecraft:wooden_pickaxe','primogemcraft:mmolagao')
r.replaceInput({output:'primogemcraft:yuanshifu'},
    'minecraft:wooden_axe','primogemcraft:mmolafu')
r.replaceInput({output:'primogemcraft:yuanshiqiao'},
    'minecraft:stone_shovel','primogemcraft:mmolaqiao')
r.smithing(
    'primogemcraft:yuanshijian','primogemcraft:yuanshiyuanpei',
    'primogemcraft:mmolajian','primogemcraft:yuanshi'
)
r.smithing(
    'primogemcraft:yuanshichutou','primogemcraft:yuanshiyuanpei',
    'primogemcraft:mmolachutou','primogemcraft:yuanshi'
)
r.smithing(
    'legendarysurvivaloverhaul:large_canteen','minecraft:netherite_scrap',
    'legendarysurvivaloverhaul:canteen','minecraft:leather'
)
r.shapeless('eggdelight:bread_slice','moredelight:bread_slice')
r.shapeless('moredelight:bread_slice','eggdelight:bread_slice')
})