dirs = ['/home/ericdouglas', '/home/ericdouglas/github', '.']

for dir <- dirs,
  file <- File.ls!(dir),
  path = Path.join(dir, file),
  File.regular?(path) do
    IO.puts dir
    IO.puts file
    IO.puts path
    IO.puts File.stat!(path).size
    IO.puts "\n"
end
