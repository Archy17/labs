# shortcut to create functions
fun = &(&1 + 3) # add first parameter (&1) with 3
IO.puts fun.(1) # 4

# capture a function from a module, shortcut for `fn x -> something end`
fun2 = &List.flatten(&1, &2) # [1, 2, 3, 4, 5]
