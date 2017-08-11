# Given an array of N integers, can you find the sum of its elements?

# Input Format

# The first line contains an integer, N, denoting the size of the array.
# The second line contains N space-separated integers representing the array's elements.

# Output Format

# Print the sum of the array's elements as a single integer.

# Sample Input

# 6
# 1 2 3 4 10 11

# Sample Output

# 31

# Explanation

# We print the sum of the array's elements, which is: 1 + 2 + 3 + 4 + 10 + 11 = 31.

defmodule Solution do
  defp sum_integers(integers) do
    integers
    |> String.split
    |> Enum.reduce(0, fn(num, acc) -> String.to_integer(num) + acc end)
  end

  def main do
    length   = IO.gets("") |> String.trim # unused
    integers = IO.gets("") |> String.trim

    sum_integers(integers) |> IO.puts
  end
end

Solution.main()
