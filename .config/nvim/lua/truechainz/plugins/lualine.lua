return {
  -- Set lualine as statusline
  'nvim-lualine/lualine.nvim',
  config = function()
    local lualine = require("lualine")
    lualine.setup {
      options = {
        icons_enabled = true,
        theme = 'tokyonight',
      }
    }
  end
}
