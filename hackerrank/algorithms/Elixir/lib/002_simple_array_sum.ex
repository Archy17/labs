# # First version
# defmodule SimpleArraySum do
#   def main do
#     _len     = get_input() # unused
#     integers = get_input()
#     |> strings_to_int_list

#     sum_integer_list(integers) |> IO.puts
#   end

#   def get_input do
#     IO.gets("")
#     |> String.trim
#   end

#   def strings_to_int_list(string) do
#     string
#     |> String.split
#     |> Enum.map(&(String.to_integer(&1)))
#   end

#   def sum_integer_list(integers) do
#     integers
#     |> Enum.reduce(0, fn(num, acc) -> num + acc end)
#   end
# end

# SimpleArraySum.main()

defmodule SimpleArraySum do
  @moduledoc """
  Sum all integers in a list
  """

  def main(list) do
    list
    |> sum_list()
  end

  def sum_list(list) do
    list
    |> Enum.reduce(0, fn(num, acc) -> num + acc end)
  end
end

# For HackerRank
# n = IOHelper.get()
# list = IOHelper.get() |> String.split() |> Enum.map(&String.to_integer/1)
# SimpleArraySum.main(list) |> IO.puts
