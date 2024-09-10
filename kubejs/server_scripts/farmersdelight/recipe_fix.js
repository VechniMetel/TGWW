ServerEvents.recipes(e => {
  e.forEachRecipe({type: 'farmersdelight:cooking'},r => {
    let ingredients = r.json.get('ingredients')
    let ingrs = new Array()
    ingredients.forEach(i => {
      let obj=JSON.parse(i)
      if(obj.item!=null) {
        let name = obj.item.split(':')[1]
        if(!Ingredient.of('#forge:fruits/'+name).itemIds.isEmpty()) {
          ingrs.push({tag: 'forge:fruits/'+name})
        }
        else ingrs.push(Item.of(obj.item))
      }
      else if(obj.tag!=null) {
        if(obj.tag=='forge:milks') {
          ingrs.push({tag:'forge:milk'})
        }
        else ingrs.push({tag: obj.tag})
      } 
    })
    var recipe = {
      type: 'farmersdelight:cooking',
      cookingtime: r.json.get('cookingtime'),
      experience: r.json.get('experience'),
      ingredients: ingrs,
      result: r.json.get('result')
    }
    if(r.json.has('container'))
      recipe.container=r.json.get('container')
    e.remove({id:r.getId()})
    e.custom(recipe)
  })
})