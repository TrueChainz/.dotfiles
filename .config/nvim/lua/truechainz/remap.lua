vim.keymap.set("v", "J", ":m '>+1<CR>gv=gv")
vim.keymap.set("v", "K", ":m '<-2<CR>gv=gv")

vim.keymap.set("n", "<leader>pv", "<cmd>Ex<CR>", { desc = "[P]roject [V]iew" })

vim.keymap.set("n", "<C-d>", "<C-d>zz")
vim.keymap.set("n", "<C-u>", "<C-u>zz")

-- next greatest remap ever : asbjornHaland
vim.keymap.set({ "n", "v" }, "<leader>fy", [["+y]], { desc = "[F]ile Clipboard [P]aste" })
vim.keymap.set("n", "<leader>ff", vim.lsp.buf.format, { desc = "[F]ile [F]ormat" })
vim.keymap.set("n", "<leader>fc", "<cmd>so<CR>", { desc = "[F]ile [C]ompile" })
vim.keymap.set("n", "<leader>fs", "<cmd>w<CR>", { desc = "[F]ile [S]ave " })
vim.keymap.set("n", "<leader>fq", "<cmd>q<CR>", { desc = "[F]ile [Q]uit " })
vim.keymap.set("n", "<leader>fr", [[:%s/\<<C-r><C-w>\>/<C-r><C-w>/gI<Left><Left><Left>]],
  { desc = "[F]ile word [R]eplace all" })
-- idk what this does yet
-- vim.keymap.set("n", "<leader>fY", [["+Y]])

-- vim.keymap.set({ "n", "v" }, "<leader>d", [["_d]])

-- This is going to get me cancelled
vim.keymap.set("i", "<C-c>", "<Esc>")
vim.keymap.set("n", "Q", "<nop>")


-- Diagnostic keymaps
vim.keymap.set('n', '[d', vim.diagnostic.goto_prev, { desc = 'Go to previous diagnostic message' })
vim.keymap.set('n', ']d', vim.diagnostic.goto_next, { desc = 'Go to next diagnostic message' })
vim.keymap.set('n', '<leader>ce', vim.diagnostic.open_float, { desc = 'Open floating [C]ode diagnostic message' })
vim.keymap.set('n', '<leader>cq', vim.diagnostic.setloclist, { desc = 'Open [C]ode diagnostics list' })

-- Results navigating keymaps
vim.keymap.set("n", "<C-k>", "<cmd>cnext<CR>zz")
vim.keymap.set("n", "<C-j>", "<cmd>cprev<CR>zz")
vim.keymap.set("n", "<leader>rk", "<cmd>lnext<CR>zz", { desc = "[R]esults Next" })
vim.keymap.set("n", "<leader>rj", "<cmd>lprev<CR>zz", { desc = "[R]esults Prev" })


vim.keymap.set("n", "<leader>vl", "<cmd>e ~/.dotfiles/.config/nvim/lua/truechainz/lazy.lua<CR>",
  { desc = "[v]im [l]azy" })
