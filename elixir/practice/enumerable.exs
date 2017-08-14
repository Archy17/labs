# Lists
IO.puts inspect Enum.map([1, 2, 3], &(&1 * 2)) # [2, 4, 6]

# Maps
IO.puts inspect Enum.map(%{1 => 2, 3 => 4}, fn {k, v} -> k * v end) # [2, 12]

# Ranges
IO.puts inspect Enum.map(1..3, &(&1 * 2)) # [2, 4, 6]
IO.puts inspect Enum.reduce(1..3, 0, &+/2) # 6
