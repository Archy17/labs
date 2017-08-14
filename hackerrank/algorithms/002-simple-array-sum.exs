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
  def main do
    len   = get_input() # unused
    integers = get_input()

    sum_integers(integers) |> IO.puts
  end

  def get_input do
    IO.gets("")
    |> String.trim
  end

  defp sum_integers(integers) do
    integers
    |> String.split
    |> Enum.reduce(0, fn(num, acc) -> String.to_integer(num) + acc end)
  end
end

Solution.main()