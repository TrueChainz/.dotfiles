local ok, neodev = pcall(require, 'neodev')
if ok then
  neodev.setup()
else 
  print("neodev does not exist")
end
