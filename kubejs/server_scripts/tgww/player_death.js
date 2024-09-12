EntityEvents.death(e => {
  if(e.entity.isPlayer()) {
    const loot = e.level.createEntity('item')
    loot.mergeNbt({ Item: { Count: 3, id: 'hannibal_delight:raw_human_meat' } })
    loot.item = Item.of('hannibal_delight:raw_human_meat', 3)
    loot.setPos(e.entity.x, e.entity.y + 1, e.entity.z)
    loot.spawn()
  }
})