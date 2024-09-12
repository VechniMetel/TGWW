EntityEvents.death(e => {
  if(e.entity.isPlayer()) {
    const loot = e.level.createEntity('item')
    loot.mergeNbt({ Item: { Count: 3, id: 'minecraft:diamond' } })
    loot.item = Item.of('minecraft:diamond', 3)
    loot.setPos(e.entity.x, e.entity.y + 1, e.entity.z)
    loot.spawn()
  }
})