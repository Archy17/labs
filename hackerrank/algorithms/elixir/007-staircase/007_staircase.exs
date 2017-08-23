# https://www.hackerrank.com/challenges/staircase

# Consider a staircase of size n = 4:

#    #
#   ##
#  ###
# ####

# Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

# Write a program that prints a staircase of size .

# Input Format

# A single integer, n, denoting the size of the staircase.

# Output Format

# Print a staircase of size n using # symbols and spaces.

# Note: The last line must have 0 spaces in it.

# Sample Input

# 6

# Sample Output

#      #
#     ##
#    ###
#   ####
#  #####
# ######

# Explanation

# The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n = 6.

defmodule Solution do
  def main do
    size = get_input() |> List.first

    for x <- 1..size do
      IO.puts(space_gen(size - x) <> symbol_gen(x))
    end
  end

  def get_input do
    IO.gets("")
    |> String.trim
    |> String.split
    |> Enum.map(&(String.to_integer(&1)))
  end

  def space_gen(num) do
    cond do
      num == 0 ->
        ""
      num > 0 ->
        Enum.reduce(1..num, "", fn(_i, acc) -> acc <> " " end)
    end
  end

  def symbol_gen(num) do
    Enum.reduce(1..num, "", fn(_i, acc) -> acc <> "#" end)
  end
end

Solution.main()
