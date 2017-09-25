# First version
# defmodule Solution do
#   def main do
#     size = get_input() |> List.first

#     for x <- 1..size do
#       IO.puts(space_gen(size - x) <> symbol_gen(x))
#     end
#   end

#   def get_input do
#     IO.gets("")
#     |> String.trim
#     |> String.split
#     |> Enum.map(&(String.to_integer(&1)))
#   end

#   def space_gen(num) do
#     cond do
#       num == 0 ->
#         ""
#       num > 0 ->
#         Enum.reduce(1..num, "", fn(_i, acc) -> acc <> " " end)
#     end
#   end

#   def symbol_gen(num) do
#     Enum.reduce(1..num, "", fn(_i, acc) -> acc <> "#" end)
#   end
# end

# Solution.main()

defmodule StairCase do
  @moduledoc """
  Generate a staircase of size `n` using # and spaces.
  """

  @spec main(integer) :: String.t
  def main(size) do
    Enum.reduce(1..size, "", fn(i, acc)  ->
      acc <> space_gen(size - i) <> symbol_gen(i) <> "\n"
    end)
  end

  @spec space_gen(integer) :: String.t
  defp space_gen(num) when num == 0, do: ""
  defp space_gen(num) when num > 0 do
    Enum.reduce(1..num, "", fn(_i, acc) -> acc <> " " end)
  end

  @spec symbol_gen(integer) :: String.t
  defp symbol_gen(num) do
    Enum.reduce(1..num, "", fn(_i, acc) -> acc <> "#" end)
  end
end
