# First version
# defmodule Solution do
#   def main do
#     [min, max] = get_input()
#     |> Enum.map(&(String.to_integer(&1)))
#     |> Enum.sort
#     |> Enum.chunk_every(4, 1, :discard)

#     IO.write Enum.reduce(min, 0, &+/2)
#     IO.write " "
#     IO.write Enum.reduce(max, 0, &+/2)
#   end

#   def get_input do
#     IO.gets("")
#     |> String.trim
#     |> String.split
#   end
# end

# Solution.main()

defmodule MinMaxSum do
  @moduledoc """
  Find two long integers denoting the respective minimum and maximum values
  that can be calculated by summing exactly four of the five integers in a list.
  """

  @spec main([number]) :: {number, number}
  def main(list) do
    [min, max] = list
                 |> Enum.sort()
                 |> Enum.chunk_every(4, 1, :discard)

    min_max_gen(min, max)
  end

  @spec min_max_gen([number], [number]) :: {number, number}
  defp min_max_gen(min_list, max_list) do
    sum_list = fn(list) -> Enum.reduce(list, 0, &+/2) end

    {sum_list.(min_list), sum_list.(max_list)}
  end
end
