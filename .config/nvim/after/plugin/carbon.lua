local ok, carbon = pcall(require, "carbon")

if ok then
  carbon.setup({
    setting = "value"
  })

  vim.keymap.set("n", "<leader>pb", "<cmd>Fcarbon!<CR>", { desc = "[P]roject [B]uffer" })
else
  print "ranger-nim does not exist"
end
