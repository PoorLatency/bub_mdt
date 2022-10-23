utils = {}

---Beautiful debugging logs
---@param level number 1: standard logs, 2: everything
---@param msg string
function utils.debug(level, msg)
	if Config.debug and Config.debug >= level then
		print('^2[bub_mdt][' .. level .. '] ^7' .. msg)
	end
end