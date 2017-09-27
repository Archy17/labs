# # First version
# defmodule Solution do
#   def main do
#     size  = get_input() |> List.first
#     array = get_input()

#     IO.puts (check_fractions(array, "positive") / size) |> format_result
#     IO.puts (check_fractions(array, "negative") / size) |> format_result
#     IO.puts (check_fractions(array, "zero") / size) |> format_result
#   end

#   def get_input do
#     IO.gets("")
#     |> String.trim
#     |> String.split
#     |> Enum.map(&(String.to_integer(&1)))
#   end

#   def check_fractions(list, type) do
#     Enum.reduce(list, 0, fn(el, acc) ->
#       if (check_num(el) == type), do: acc + 1, else: acc
#     end)
#   end

#   def check_num(num) do
#     cond do
#       num > 0 -> "positive"
#       num < 0 -> "negative"
#       num == 0 -> "zero"
#     end
#   end

#   def format_result(value), do: :erlang.float_to_binary(value, [decimals: 6])
# end

# Solution.main()

defmodule PlusMinus do
  @moduledoc """
  Find the fraction of positive, negative and zeroes in a given list
  """

  @spec main([number], number) :: [String.t]
  def main(list, size) do
    [
      check_fractions(list, size, "positive"),
      check_fractions(list, size, "negative"),
      check_fractions(list, size, "zero"),
    ]
  end

  @spec check_fractions([number], number, String.t) :: String.t
  defp check_fractions(list, size, type) do
    add_type = fn(el, acc) ->
      if (check_num(el) == type), do: acc + 1, else: acc
    end

    list
    |> Enum.reduce(0, add_type)
    |> Kernel./(size)
    |> format_result()
  end

  @spec check_num(number) :: String.t
  defp check_num(num) when num > 0, do: "positive"
  defp check_num(num) when num < 0, do: "negative"
  defp check_num(num) when num == 0, do: "zero"

  @spec format_result(number) :: String.t
  defp format_result(value), do: :erlang.float_to_binary(value, [decimals: 6])
end

# For HackerRank
# size = IOHelper.get() |> String.to_integer
# list = IOHelper.get() |> String.split() |> Enum.map(&String.to_integer/1)
# PlusMinus.main(list, size) |> Enum.each(&IO.puts/1)
