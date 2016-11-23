defmodule Math do
  def sum_list([head | tail], accumulator) do
    sum_list(tail, head + accumulator)
  end

  def sum_list([], accumulator) do
    accumulator
  end

  def double_each([head | tail]) do
    [head * 2 | double_each(tail)]
  end

  def double_each([]) do
    []
  end
end

IO.puts Math.sum_list([1, 2, 3, 4, 5], 0) #=> 15

# Usual recursion methods
IO.puts Enum.reduce([1, 2, 3], 0, fn(x, acc) -> x + acc end) #=> 6
IO.puts Enum.reduce([1, 2, 3], 0, &+/2)                      #=> 6

IO.puts Enum.map([1, 2, 3], fn(x) -> x * 2 end)              #=> [2, 4, 6]
IO.puts Enum.map([1, 2, 3], &(&1 * 2))                       #=> [2, 4, 6]
