# Guards
case {1, 2, 3} do
  {1, x, 3} when x > 0 -> IO.puts "Will match"
  _ -> IO.puts "Will match if guard condition were not satisfied"
end

case {1, -2, 3} do
  {1, x, 3} when x > 0 -> IO.puts "Will match"
  _ -> IO.puts "Will match if guard condition were not satisfied"
end

# Anonimous Functions
f = fn
  x, y when x > 0 -> x + y
  x, y -> x * y
end

IO.puts f.(1, 3) # 4
IO.puts f.(-3, 11) # -33
