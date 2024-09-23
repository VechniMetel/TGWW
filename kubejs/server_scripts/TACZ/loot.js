ServerEvents.entityLootTables(r =>{
    r.modifyEntity("creeper",y =>{
        y.addPool(t =>{
        t.addItem(Item.of('tacz:ammo',
             '{AmmoId:"create_armorer:gas_pistol_ammo"}'))
             .weight(2)
             .count([3,6])
        t.addItem(Item.of('tacz:ammo', 
            '{AmmoId:"immersive_armorer:burst_capacitor"}'))
            .weight(2)
            .count([3,6])
        t.addEmpty(6)
    })
    })
}
)