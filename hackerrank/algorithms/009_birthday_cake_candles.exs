# https://www.hackerrank.com/challenges/birthday-cake-candles?h_r=next-challenge&h_v=zen

# Colleen is turning n years old! Therefore, she has n candles of various heights on her cake, and candle i has height `height[i]`. Because the taller candles tower over the shorter ones, Colleen can only blow out the tallest candles.

# Given the `height[i]` for each individual candle, find and print the number of candles she can successfully blow out.

# Input Format

# The first line contains a single integer, n, denoting the number of candles on the cake.
# The second line contains n space-separated integers, where each integer i describes the height of candle i.

# Constraints
# 1 <= n <= 10^5
# 1 <= `height[i]` <= 10^7

# Output Format

# Print the number of candles Colleen blows out on a new line.

# Sample Input 0

# 4
# 3 2 1 3

# Sample Output 0

# 2

# Explanation 0

# We have one candle of height 1, one candle of height 2, and two candles of height 3. Colleen only blows out the tallest candles, meaning the candles where height = 3. Because there are 2 such candles, we print 2 on a new line.

defmodule Solution do
  def main do
    _quantity = get_input() # unused
    candles   = get_input() |> Enum.map(&(String.to_integer(&1)))
    max       = candles |> Enum.max
    result    = length Enum.filter(candles, &(&1 == max))

    IO.puts inspect result
  end

  def get_input do
    IO.gets("")
    |> String.trim
    |> String.split
  end
end

Solution.main()
