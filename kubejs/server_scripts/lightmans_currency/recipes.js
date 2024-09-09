ServerEvents.recipes(e => {
  e.remove({type:'lightmanscurrency:coin_mint'})
  e.remove({output:'lightmanscurrency:trading_core'})
  e.shaped('lightmanscurrency:trading_core',[
    'xxx',
    'xzx',
    'xxx'
  ],{
    'x':'lightmanscurrency:coin_copper',
    'z':'minecraft:quartz'
  })
})