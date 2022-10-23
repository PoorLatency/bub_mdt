local obj = nil

RegisterNetEvent('bub_mdt:client:openMDT', function()
    RequestAnimDict('amb@world_human_seat_wall_tablet@female@base')
    if obj == nil then
        obj = CreateObject(GetHashKey('prop_cs_tablet'), GetEntityCoords(cache.ped), 1, 1, 1)
        AttachEntityToEntity(obj, cache.ped, GetPedBoneIndex(cache.ped, 28422), 0.0, 0.0, 0.03, 0.0, 0.0, 0.0, 1, 1, 0, 1, 0, 1)
    end
    while not HasAnimDictLoaded('amb@world_human_seat_wall_tablet@female@base') do
        Wait(10)
    end
    
    TaskPlayAnim(cache.ped, "amb@world_human_seat_wall_tablet@female@base", "generic_radio_enter", 8.0, 2.0, -1, 50, 2.0, 0, 0, 0)
end)