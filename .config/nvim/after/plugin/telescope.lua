local ok, builtin = pcall(require, 'telescope.builtin')
if ok then 
	local builtin = require('telescope.builtin') 
	vim.keymap.set('n', '<leader>pf', builtin.find_files, {})
	vim.keymap.set('n', '<leader>gf', builtin.git_files, {})
	vim.keymap.set('n', '<leader>ps', function()
		builtin.grep_string({ search = vim.fn.input("Grep > ") });
	end)
else 
	print('telescope.builtin does not exist')
end
