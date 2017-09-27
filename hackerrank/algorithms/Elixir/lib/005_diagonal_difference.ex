# # First version
# defmodule DiagonalDifference do
#   def main do
#     size = get_input()
#     |> List.first
#     |> String.to_integer

#     size
#     |> matrix_gen
#     |> diagonal_sum(size)
#     |> abs
#     |> IO.puts
#   end

#   def matrix_gen(size) do
#     for x <- 1..size do
#       row = get_input()
#       {row, x - 1} # Enum.with_index
#     end
#   end

#   def diagonal_sum(matrix, size) do
#     Enum.reduce(matrix, 0, fn({row, index} = _item, acc) ->
#       acc + get_value(row, index) - get_value(row, size - (index + 1))
#     end)
#   end

#   def get_input do
#     IO.gets("")
#     |> String.trim
#     |> String.split
#   end

#   def get_value(row, index) do
#     Enum.at(row, index)
#     |> String.to_integer
#   end
# end

defmodule DiagonalDifference do
  @moduledoc """
  Return the absolute difference between the two sums
  of the matrix's diagonals as a single integer.
  """

  @spec main(
    matrix :: [{row :: [String.t], index :: integer}],
    size :: integer
  ) :: integer
  def main(matrix, size) do
    matrix
    |> diagonal_sum(size)
    |> abs
  end

  @spec diagonal_sum(
    matrix :: [{[String.t], integer}],
    size :: integer
  ) :: integer
  defp diagonal_sum(matrix, size) do
    Enum.reduce(matrix, 0, fn({row, index} = _item, acc) ->
      acc + get_value(row, index) - get_value(row, size - (index + 1))
    end)
  end

  @spec get_value([String.t], integer) :: integer
  defp get_value(row, index) do
    row
    |> Enum.at(index)
    |> String.to_integer
  end
end

# For HackerRank
# size = IOHelper.get() |> String.to_integer()
# matrix = for x <- 1..size do
#   row = IOHelper.get() |> String.split()
#   {row, x - 1} # Enum.with_index
# end
# DiagonalDifference.main(matrix, size) |> IO.puts
