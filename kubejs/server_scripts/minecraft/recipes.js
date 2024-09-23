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
r.remove({output:'ars_nouveau:glyph_blink'})
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
})
