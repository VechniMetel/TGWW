ServerEvents.recipes(r=>{
r.remove({output:'constructionwand:core_destruction'})
r.shapeless(Item.of('minecraft:red_mushroom',2),
['#minecraft:logs','minecraft:shears','minecraft:sugar']
).damageIngredient({item:'minecraft:shears'},2)
r.shapeless(Item.of('minecraft:brown_mushroom',2),
['minecraft:mud','minecraft:shears','minecraft:sugar']
).damageIngredient({item:'minecraft:shears'},2)
r.remove({output:Item.of(Item.of('tacz:ammo', '{AmmoId:"tacz:magnum_r"}'))})
})
