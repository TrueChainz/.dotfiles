return {
  -- Plugin to replace netrw and minimal file explorer
  'SidOfc/carbon.nvim',
  config = function()
    local carbon = require("carbon")
    carbon.setup({
      setting = "value"
    })

    vim.keymap.set("n", "<leader>pb", "<cmd>Fcarbon!<CR>0", { desc = "[P]roject [B]uffer" })
  end

}
