defmodule SolveMeFirst do
  def main do
    a = get_input()
    b = get_input()

    sum(a,b) |> IO.puts
  end

  def sum(a,b), do: a + b

  def get_input do
    IO.gets("")
    |> String.trim
    |> String.to_integer
  end
end

SolveMeFirst.main()
