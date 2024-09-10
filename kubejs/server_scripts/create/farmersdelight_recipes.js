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
        else if(name=='egg') {
          ingrs.push({fluid: 'ratatouille:egg_yolk',amount: 250})
        }
        else ingrs.push(Item.of(obj.item))
      }
      else if(obj.tag!=null) ingrs.push({tag: obj.tag})
    })
    if(r.json.has('container')) ingrs.push(Item.of(JSON.parse(r.json.get('container'))))
    if(JSON.parse(r.json.get('result')).item.split(':')[1].match(/ice/)) {
      e.recipes.create.mixing(Item.of(r.json.get('result')),ingrs)
    }
    else e.recipes.create.mixing(Item.of(r.json.get('result')),ingrs).heated()
    e.remove({id: r.getId()})
  })
})