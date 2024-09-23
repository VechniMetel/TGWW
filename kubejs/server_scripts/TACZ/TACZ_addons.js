ServerEvents.recipes(r=>{
    r.remove({output:'tacz:gun_smith_table'})
    r.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:scope_telephoto"}'),[
        'aaa',
        'bcb',
        'aaa'
    ],{
        'a':'#forge:plates/brass',
        'b':'#forge:glass_panes',
        'c':'minecraft:amethyst_shard'
    }
    )
    r.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:sight_medium_distance"}'),[
        ' a ',
        'bcb',
        ' a '
    ],{
        'a':'#forge:plates/brass',
        'b':'#forge:glass_panes',
        'c':'minecraft:amethyst_shard'
    }
    )
    r.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:sight_standard"}'),[
        ' a ',
        ' b ',
        ' a '
    ],{
        'a':'#forge:plates/brass',
        'b':'#forge:glass_panes'
    }
    )
    r.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:scope_spyglass_ie"}'),[
        ' a ',
        'b b',
        '   '
    ],{
        'a':'immersiveengineering:toolupgrade_railgun_scope',
        'b':'#forge:wires/steel'
    }
    )
    r.shapeless(Item.of('tacz:attachment', 
        '{AttachmentId:"immersive_armorer:sight_simple_reflex"}'),
        ['#forge:plates/copper','#forge:glass_panes','#forge:plates/steel',
            'immersiveengineering:component_steel','immersiveengineering:wirecutter']
    ).damageIngredient({item:'immersiveengineering:wirecutter'},1)
    r.shapeless(Item.of('tacz:attachment', 
        '{AttachmentId:"immersive_armorer:sight_light"}'),
        ['#forge:plates/iron','#forge:glass_panes',
        'immersiveengineering:component_iron','immersiveengineering:screwdriver']
    ).keepIngredient({item:'immersiveengineering:screwdriver'})
    r.recipes.create.deploying(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:muzzle_refit_brass_retractor"}'),
        ['#forge:plates/brass','#forge:nuggets/brass'])
        r.shapeless(Item.of('tacz:attachment', 
            '{AttachmentId:"immersive_armorer:muzzle_extended_barrel"}'),
            [
            'immersiveengineering:hammer','#forge:plates/steel','immersiveengineering:gunpart_barrel'
            ]
        ).damageIngredient({item:'immersiveengineering:hammer'},1)
        r.shapeless(Item.of('tacz:attachment', 
            '{AttachmentId:"immersive_armorer:muzzle_refit_pressure_wave"}'),
            ['immersiveengineering:screwdriver','immersiveengineering:toolupgrade_drill_waterproof',
                'immersiveengineering:gunpart_barrel'
            ]
        ).keepIngredient({item:'immersiveengineering:screwdriver'})
        r.shaped(Item.of('tacz:attachment', 
            '{AttachmentId:"immersive_armorer:muzzle_refit_electromagnetic_accelerator"}'),[
            '  a',
            'cb ',
            'bc '
        ],{
            'a':'immersiveengineering:toolupgrade_revolver_electro',
            'b':'immersiveengineering:coil_lv',
            'c':'#forge:ingots/steel'
        }
        )
        r.shaped(Item.of('tacz:attachment', 
            '{AttachmentId:"immersive_armorer:bayonet_revolver"}'),[
            'ab ',
            '   ',
            '   '
        ],{
            'a':'immersiveengineering:toolupgrade_revolver_bayonet',
            'b':'#forge:nuggets/steel'
        }
        )
    r.recipes.create.deploying(Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_compensator_trident"}'),
    ['#forge:plates/iron','#forge:nuggets/iron'])
    r.recipes.create.deploying(Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_brake_cthulhu"}'),
    ['#forge:plates/iron','#forge:plates/iron'])
    r.custom({
        type: 'immersiveengineering:blueprint',
        category: 'tgww_addons',
        inputs: [
          {tag:'forge:rods/steel'},
          {tag:'forge:plates/steel'}
        ],result: Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:stock_crude"}')
      })
      r.custom({
        type: 'immersiveengineering:blueprint',
        category: 'tgww_addons',
        inputs: [
          {tag:'forge:rods/steel'},
          {tag:'forge:treated_wood_slab'}
        ],result: Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:stock_simple"}')
      })
      r.custom({
        type: 'immersiveengineering:blueprint',
        category: 'tgww_addons',
        inputs: [
          {tag:'forge:rods/aluminum'},
          {tag:'forge:plates/aluminum'}
        ],result: Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:grip_aluminium"}')
      })
      r.custom({
        type: 'immersiveengineering:blueprint',
        category: 'tgww_addons',
        inputs: [
          {item:'immersiveengineering:stick_treated'},
          {tag:'forge:treated_wood_slab'}
        ],result: Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:grip_treated_wood"}')
      })
      r.custom({
        type: 'immersiveengineering:blueprint',
        category: 'tgww_addons',
        inputs: [
          {item:'immersiveengineering:stick_treated'},
          {tag:'forge:treated_wood_slab'},
          {base_ingredient:{item:'immersiveengineering:hemp_fiber'},count:4}
        ],result: Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:grip_twined"}')
      })
      r.recipes.create.deploying(Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_magpul_afg_2"}'),
    ['#forge:plates/iron','#forge:rods/iron'])
        r.recipes.create.deploying(Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_vertical_talon"}'),
    ['#forge:rods/iron','#forge:leather'])
    r.shaped(Item.of('tacz:attachment', 
        '{AttachmentId:"tacz:light_extended_mag_1"}'),[
        ' b ',
        '   ',
        ' b '
    ],{
        'b':'#forge:plates/iron'
    })
    r.shaped(Item.of('tacz:attachment', 
        '{AttachmentId:"tacz:light_extended_mag_2"}'),[
        ' b ',
        ' a ',
        ' b '
    ],{
        'a':'minecraft:gold_ingot',
        'b':'#forge:plates/iron'
    })
    r.shaped(Item.of('tacz:attachment', 
        '{AttachmentId:"tacz:light_extended_mag_3"}'),[
        ' b ',
        ' a ',
        ' b '
    ],{
        'a':'minecraft:diamond',
        'b':'#forge:plates/iron'
    })
    r.shaped(Item.of('tacz:attachment', 
        '{AttachmentId:"tacz:extended_mag_1"}'),[
        '   ',
        'b b',
        ' b '
    ],{
        'b':'#forge:plates/iron'
    })
    r.shaped(Item.of('tacz:attachment', 
        '{AttachmentId:"tacz:extended_mag_2"}'),[
        '   ',
        'bab',
        ' b '
    ],{
        'a':'minecraft:gold_ingot',
        'b':'#forge:plates/iron'
    })
    r.shaped(Item.of('tacz:attachment', 
        '{AttachmentId:"tacz:extended_mag_3"}'),[
        '   ',
        'bab',
        ' b '
    ],{
        'a':'minecraft:diamond',
        'b':'#forge:plates/iron'
    })
    r.shaped(Item.of('tacz:attachment', 
        '{AttachmentId:"tacz:sniper_extended_mag_1"}'),[
        'b b',
        'b b',
        '   '
    ],{
        'b':'#forge:plates/iron'
    })
    r.shaped(Item.of('tacz:attachment', 
        '{AttachmentId:"tacz:sniper_extended_mag_2"}'),[
        'bab',
        'bab',
        '   '
    ],{
        'a':'minecraft:gold_ingot',
        'b':'#forge:plates/iron'
    })
    r.shaped(Item.of('tacz:attachment', 
        '{AttachmentId:"tacz:sniper_extended_mag_3"}'),[
        'bab',
        'bab',
        '   '
    ],{
        'a':'minecraft:diamond',
        'b':'#forge:plates/iron'
    })
    r.shaped(Item.of('tacz:attachment', 
        '{AttachmentId:"create_armorer:extended_mag_ca_1"}'),[
        '   ',
        'b b',
        ' b '
    ],{
        'b':'create:andesite_alloy'
    })
    r.shaped(Item.of('tacz:attachment', 
        '{AttachmentId:"create_armorer:extended_mag_ca_2"}'),[
        '   ',
        'b b',
        ' b '
    ],{
        'b':'#forge:ingots/copper'
    })
    r.shaped(Item.of('tacz:attachment', 
        '{AttachmentId:"create_armorer:extended_mag_ca_3"}'),[
        '   ',
        'b b',
        ' b '
    ],{
        'b':'#forge:ingots/brass'
    })
    r.recipes.create.deploying(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:extended_capacitor_1"}'),
    ['#forge:plates/steel','immersiveengineering:electron_tube'])
    r.recipes.create.deploying(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:extended_capacitor_2"}'),
    ['#forge:plates/steel','immersiveengineering:component_electronic'])
    r.recipes.create.deploying(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:extended_capacitor_3"}'),
    ['#forge:plates/steel','immersiveengineering:component_electronic_adv'])
    r.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_refit_melted_metal_spitter"}'),[
    ' a ',
    'bcd',
    ' a '
],{
    'a':'#forge:plates/steel',
    'b':'#forge:plates/lead',
    'c':'createbigcannons:molten_steel_bucket',
    'd':'immersiveengineering:nugget_steel'
}).replaceIngredient({item:'createbigcannons:molten_steel_bucket'},'minecraft:bucket')
r.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_refit_he_compound"}'),[
    ' ad',
    'bcd',
    ' ad'
],{
    'a':'#forge:plates/steel',
    'b':'#forge:plates/lead',
    'c':'minecraft:tnt',
    'd':'immersiveengineering:nugget_steel'
})
r.recipes.create.deploying(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_focused_nozzle"}'),
    ['immersiveengineering:fluid_pipe','#forge:plates/steel'])
r.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_refit_face_melter"}'),[
    'a b',
    ' bc',
    '  b'
],{
    'a':'immersiveengineering:fluid_pipe',
    'b':'immersiveengineering:plate_steel',
    'c':'createdieselgenerators:lighter'
})
r.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_refit_fuel_stream_diffuser"}'),[
    ' bb',
    ' ca',
    ' bb'
],{
    'a':'immersiveengineering:fluid_pipe',
    'b':'immersiveengineering:plate_steel',
    'c':'minecraft:iron_bars'
})
    })