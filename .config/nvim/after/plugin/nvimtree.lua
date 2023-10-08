-- set termguicolors to enable highlight groups

local ok, nvim_tree = pcall(require, "nvim-tree")
if ok then 
  vim.opt.termguicolors = true
	-- disable netrw at the very start of your init.lua (strongly advised)
  vim.g.loaded_netrw = 1
	vim.g.loaded_netrwPlugin = 1
	require("nvim-tree").setup({
	  sort_by = "case_sensitive",
	  view = {
	    width = 30,
	    mappings = {
	      list = {
		{ key = "u", action = "dir_up" },
	      },
	    },
	  },
	  renderer = {
	    group_empty = true,
	  },
	  filters = {
	    dotfiles = false,
	  }
	})
else 
	print("nvim-tree does not exist")
end
local ok_nvim_tree_events, nvim_tree_events = pcall(require, 'nvim-tree.events')
local ok_bufferline_api, bufferline_api = pcall(require, 'bufferline.api')

if not ok_nvim_tree_events or not ok_bufferline_api then
	print("bufferline.api or nvim-tree.events does not exist")
else 
	local function get_tree_size()
	  return require'nvim-tree.view'.View.width
	end

	nvim_tree_events.subscribe('TreeOpen', function()
	  bufferline_api.set_offset(get_tree_size())
	end)

	nvim_tree_events.subscribe('Resize', function()
	  bufferline_api.set_offset(get_tree_size())
	end)

	nvim_tree_events.subscribe('TreeClose', function()
	  bufferline_api.set_offset(0)
	end)
end
