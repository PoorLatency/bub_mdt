local players = {}

for _, v in pairs(Ox.GetPlayers(true, { inService = 'police' })) do
    players[v.source] = v
end

local function isAuthorised(source)
    if Ox.GetPlayer(source).hasGroup(Config.PoliceGroups) then return true end

    return false
end
exports('isAuthorised', isAuthorised)

RegisterNetEvent('bub_mdt:server:openMDT', function()
    if source == '' then source = nil end

    local authorised = source == nil or isAuthorised(source)

    if authorised then
        TriggerClientEvent('bub_mdt:client:openMDT', source)
    end
end)

AddEventHandler('ox:playerLogout', function(source)
    players[source] = nil
end)

lib.addCommand('police', 'mdt', function()
    if source == '' then source = nil end
    local authorised = source == nil or isAuthorised(source)

    if authorised then
        TriggerClientEvent('bub_mdt:client:openMDT', source)
    end
end)