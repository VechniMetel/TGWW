ServerEvents.recipes(r =>{
    r.recipes.create.deploying("2x hannibal_delight:raw_human_meat_slice",
        ["hannibal_delight:raw_human_meat","#forge:tools/knives"])
        .damageIngredient("#forge:tools/knives",1)
        r.recipes.create.deploying("2x hannibal_delight:cooked_human_meat_slice",
            ["hannibal_delight:cooked_human_meat","#forge:tools/knives"])
        .damageIngredient("#forge:tools/knives",1)
    r.smelting("hannibal_delight:cooked_human_meat",
        "hannibal_delight:raw_human_meat",50,200)
    r.smoking("hannibal_delight:cooked_human_meat",
        "hannibal_delight:raw_human_meat",50,200)
    r.campfireCooking("hannibal_delight:cooked_human_meat",
        "hannibal_delight:raw_human_meat",50,200)
    r.smelting("hannibal_delight:cooked_human_meat_slice",
        "hannibal_delight:raw_human_meat_slice",50,200)
    r.smoking("hannibal_delight:cooked_human_meat_slice",
        "hannibal_delight:raw_human_meat_slice",50,200)
    r.campfireCooking("hannibal_delight:cooked_human_meat_slice",
        "hannibal_delight:raw_human_meat_slice",50,200)     
    r.recipes.create.mixing(["16x hannibal_delight:raw_human_meat","glass_bottle"],
        ["64x minecraft:rotten_flesh","minecraft:golden_apple",
            Item.of('minecraft:potion', '{Potion:"minecraft:weakness"}')]
        ) 
    r.recipes.create.deploying(["minecraft:skeleton_skull",
        "4x hannibal_delight:raw_human_meat_slice"],['minecraft:player_head',
            "#forge:tools/knives"]).damageIngredient("#forge:tools/knives",1)
})