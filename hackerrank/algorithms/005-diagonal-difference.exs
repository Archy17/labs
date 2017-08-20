# https://www.hackerrank.com/challenges/diagonal-difference

# Given a square matrix of size N x N, calculate the absolute difference between the sums of its diagonals.

# Input Format

# The first line contains a single integer, N. The next N lines denote the matrix's rows, with each line containing N space-separated integers describing the columns.

# Constraints

# -100 <= Elements in the matrix <= 100

# Output Format

# Print the absolute difference between the two sums of the matrix's diagonals as a single integer.

# Sample Input

# 3
# 11 2 4
# 4 5 6
# 10 8 -12

# Sample Output

# 15

# Explanation

# The primary diagonal is:

# 11
#    5
#      -12

# Sum across the primary diagonal: 11 + 5 - 12 = 4

# The secondary diagonal is:

#      4
#    5
# 10

# Sum across the secondary diagonal: 4 + 5 + 10 = 19

# Difference: |4 - 19| = 15

defmodule Solution do
  def main do
    size = get_input() |> List.first |> String.to_integer
    matrix = for x <- 1..size do
      row = get_input()
      {row, x - 1}
    end

    result = Enum.reduce(matrix, 0, fn({row, index} = _item, acc) ->
      acc + get_value(row, index) - get_value(row, size - (index + 1))
    end)

    IO.puts abs(result)
  end

  def get_input do
    IO.gets("")
    |> String.trim
    |> String.split
  end

  def get_value(row, index) do
    Enum.at(row, index)
    |> String.to_integer
  end
end

Solution.main()
