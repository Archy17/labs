# # First version
# defmodule CompareTheTriplets do
#   def main do
#     a = get_list()
#     b = get_list()

#     compare(a, b) |> IO.puts
#   end

#   def check(a, b) do
#     if (a > b), do: 1, else: 0
#   end

#   def compare([a0, a1, a2] = _a, [b0, b1, b2] = _b) do
#     a_result = check(a0, b0) + check(a1, b1) + check(a2, b2)
#     b_result = check(b0, a0) + check(b1, a1) + check(b2, a2)

#     "#{a_result} #{b_result}"
#   end

#   def get_list do
#     IO.gets("")
#     |> String.trim
#     |> String.split
#     |> Enum.map(fn i -> String.to_integer(i) end)
#   end
# end

# CompareTheTriplets.main()

defmodule CompareTheTriplets do
  @moduledoc """
  Compare points between two players passed in a list of integers
  """

  @spec main([integer], [integer]) :: String.t
  def main(list1, list2) do
    list1
    |> compare(list2)
    |> format_to_print()
  end

  @spec compare([integer], [integer]) :: [tuple]
  defp compare(list1, list2) do
    Enum.reduce(List.zip([list1, list2]), {0, 0}, fn({x, y}, {ax, ay}) ->
      cond do
        x === y -> {ax, ay}
        x > y -> {ax + 1, ay}
        x < y -> {ax, ay + 1}
      end
    end)
  end

  @spec format_to_print(tuple) :: String.t
  defp format_to_print({x, y}) do
    "#{x} #{y}"
  end
end

# For HackerRank
# l1 = IOHelper.get() |> String.split() |> Enum.map(&String.to_integer/1)
# l2 = IOHelper.get() |> String.split() |> Enum.map(&String.to_integer/1)
# CompareTheTriplets.main(l1, l2) |> IO.puts
