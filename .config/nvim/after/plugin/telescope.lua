local ok, builtin = pcall(require, 'telescope.builtin')
if ok then
  local builtin = require('telescope.builtin')
  vim.keymap.set('n', '<leader>pf', builtin.find_files, { desc = "[P]roject [F]iles" })
  vim.keymap.set('n', '<leader>gf', builtin.git_files, { desc = "[G]it find [F]iles" })
  vim.keymap.set('n', '<leader>ps', function()
    builtin.grep_string({ search = vim.fn.input("Grep > ") });
  end, { desc = "[P]roject [S]earch word"
  })
else
  print('telescope.builtin does not exist')
end
