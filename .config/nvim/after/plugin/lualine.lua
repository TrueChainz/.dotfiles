local ok, lualine = pcall(require, 'lualine')
if ok then
	lualine.setup {
	  options = {
	    icons_enabled = true,
	    theme = 'tokyonight',
    }
  }
else 
	print("lualine does not exist")
end
