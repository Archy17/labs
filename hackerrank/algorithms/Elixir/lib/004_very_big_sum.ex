# # First version
# defmodule VeryBigSum do
#   def main do
#     _len   = get_input() # unused
#     _array = get_input()
#     |> list_string_to_int
#     |> sum_list
#     |> IO.puts
#   end

#   def list_string_to_int(list) do
#     list |> Enum.map(&(String.to_integer(&1)))
#   end

#   def sum_list(list) do
#     Enum.reduce(list, 0, fn (num, acc) -> num + acc end)
#   end

#   def get_input do
#     IO.gets("")
#     |> String.trim
#     |> String.split
#   end
# end

# VeryBigSum.main()

defmodule VeryBigSum do
  @moduledoc """
  Sum a list of integers
  """
  @spec main([number]) :: number
  def main(list), do: list |> sum_list()

  @spec sum_list([number]) :: number
  defp sum_list(list), do: Enum.reduce(list, 0, fn (num, acc) -> num + acc end)
end

# For HackerRank
# n = IOHelper.get()
# list = IOHelper.get() |> String.split() |> Enum.map(&String.to_integer/1)
# VeryBigSum.main(list) |> IO.puts
