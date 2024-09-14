const UUID = '-123924,5455,135221,-3120'
PlayerEvents.tick(event => {
  const { player, player: { age, nbt } } = event
  if (age % 20 != 0) return
  let curios = nbt.ForgeCaps['curios:inventory']
  if (curios.toString().contains("tgww:birthday_0")) {
      player.modifyAttribute('minecraft:generic.max_health', UUID, 2, "addition")
  } else player.removeAttribute('minecraft:generic.max_health', UUID)
})