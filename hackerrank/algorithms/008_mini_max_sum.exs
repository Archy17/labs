# https://www.hackerrank.com/challenges/mini-max-sum

# Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

# Input Format

# A single line of five space-separated integers.

# Constraints

# Each integer is in the inclusive range [1, 10^9].

# Output Format

# Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than 32 bit integer.)

# Sample Input

# 1 2 3 4 5

# Sample Output

# 10 14

defmodule Solution do
  def main do
    [min, max] = get_input()
    |> Enum.map(&(String.to_integer(&1)))
    |> Enum.sort
    |> Enum.chunk_every(4, 1, :discard)

    IO.write Enum.reduce(min, 0, &+/2)
    IO.write " "
    IO.write Enum.reduce(max, 0, &+/2)
  end

  def get_input do
    IO.gets("")
    |> String.trim
    |> String.split
  end
end

Solution.main()

# OBS: HackerRank doesn't accept the Enum.chunk_every for now
# so I used Enum.chunk(4, 1) there
