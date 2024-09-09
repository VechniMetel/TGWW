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