defmodule Recursion do
  def print_multiple_times(msg, n) when n <= 1, do: IO.puts msg
  def print_multiple_times(msg, n) do
    IO.puts msg
    print_multiple_times(msg, n - 1)
  end

  def sum_list([head | tail], accumulator), do: sum_list(tail, head + accumulator)
  def sum_list([], accumulator), do: accumulator

  def double_each([head | tail]), do: [head * 2 | double_each(tail)]
  def double_each([]), do: []
end

Recursion.print_multiple_times("Hello!", 3)
IO.puts Recursion.sum_list([3, 4, 5], 0) # => 6
IO.puts Recursion.double_each([3, 4, 5]) # => [2, 4, 6]

IO.puts Enum.reduce([3, 4, 5], 0, fn(x, acc) -> x + acc end)
IO.puts Enum.map([3, 4, 5], fn(x) -> x * 2 end)

IO.puts Enum.reduce([3, 4, 5], 0, &+/2)
IO.puts Enum.map([3, 4, 5], &(&1 * 2))
