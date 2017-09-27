# # First version
# defmodule SolveMeFirst do
#   def main do
#     a = get_input()
#     b = get_input()

#     sum(a,b) |> IO.puts
#   end

#   def sum(a,b), do: a + b

#   def get_input do
#     IO.gets("")
#     |> String.trim
#     |> String.to_integer
#   end
# end

# SolveMeFirst.main()

defmodule SolveMeFirst do
  @moduledoc """
  Sum two numbers
  """
  @spec main(a :: number, b :: number) :: number
  def main(a, b), do: sum(a, b)

  defp sum(a, b), do: a + b
end

# For HackerRank
# a = IOHelper.get() |> String.to_integer
# b = IOHelper.get() |> String.to_integer
# SolveMeFirst.main(a, b) |> IO.puts
