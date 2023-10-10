local ok, which_key = pcall(require, "which-key")

if ok then
  which_key.setup()
  which_key.register({
    {
      ['<leader>c'] = { name = '[C]ode', _ = 'which_key_ignore' },
      ['<leader>p'] = { name = '[P]roject', _ = 'which_key_ignore' },
      ['<leader>r'] = { name = '[R]esults', _ = 'which_key_ignore' },
      ['<leader>d'] = { name = '[D]ocument', _ = 'which_key_ignore' },
      ['<leader>v'] = { name = '[V]im Plugins', _ = 'which_key_ignore' },
      ['<leader>f'] = { name = '[F]ile', _ = 'which_key_ignore' },
      ['<leader>g'] = { name = '[G]it', _ = 'which_key_ignore' },
      ['<leader>s'] = { name = '[S]earch', _ = 'which_key_ignore' },
    }
  })
else
  print("which-key does not exist")
end
