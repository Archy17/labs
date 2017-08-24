# https://www.hackerrank.com/challenges/a-very-big-sum

# You are given an array of integers of size N. You need to print the sum of the elements in the array, keeping in mind that some of those integers may be quite large.

# Input Format
# The first line of the input consists of an integer N. The next line contains N space-separated integers contained in the array.

# Output Format
# Print a single value equal to the sum of the elements in the array.

# Constraints

# 1 <= N <= 10
# 0 <= A[i] <= 10 ^ 10

# Sample Input

# 5
# 1000000001 1000000002 1000000003 1000000004 1000000005

# Output

# 5000000015

defmodule VeryBigSum do
  def main do
    _len   = get_input() # unused
    _array = get_input()
    |> list_string_to_int
    |> sum_list
    |> IO.puts
  end

  def list_string_to_int(list) do
    list |> Enum.map(&(String.to_integer(&1)))
  end

  def sum_list(list) do
    Enum.reduce(list, 0, fn (num, acc) -> num + acc end)
  end

  def get_input do
    IO.gets("")
    |> String.trim
    |> String.split
  end
end

VeryBigSum.main()
