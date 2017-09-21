defmodule HelloTimes do
  @moduledoc """
  Print "Hello World" N times
  """
  
  def main n do
    Enum.reduce(1..n, "", fn(_el, acc) -> acc <> "Hello World" <> "\n" end)
  end
end

# For HackerRank
# n = IO.gets("") |> String.trim |> String.to_integer
# IO.puts HelloTimes.main(n)
