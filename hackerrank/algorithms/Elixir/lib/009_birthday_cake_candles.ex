# First version

# defmodule Solution do
#   def main do
#     _quantity = get_input() # unused
#     candles   = get_input() |> Enum.map(&(String.to_integer(&1)))
#     max       = candles |> Enum.max
#     result    = length Enum.filter(candles, &(&1 == max))

#     IO.puts inspect result
#   end

#   def get_input do
#     IO.gets("")
#     |> String.trim
#     |> String.split
#   end
# end

# Solution.main()

defmodule BirthdayCakeCandles do
  @moduledoc """
  Given the `height` for each individual candle, find and print the number
  of candles one can successfully blow out.
  """

  @spec main([number]) :: integer
  def main(candles) do
    candles
    |> Enum.filter(&(&1 == candles |> Enum.max()))
    |> length
  end
end

# For HackerRank
# _size = IOHelper.get()
# candles = IOHelper.get() |> String.split() |> Enum.map(&String.to_integer/1)
# IO.puts BirthdayCakeCandles.main(candles)
