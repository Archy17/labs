# Default Arguments `\\`
defmodule Concat do
  def join(a, b \\ nil, sep \\ " ")
  def join(a, b, _sep) when is_nil(b), do: a
  def join(a, b, sep), do: a <> sep <> b
end

IO.puts Concat.join("Hello", "Elixir") # Hello Elixir
IO.puts Concat.join("Hello", "Elixir", "_") # Hello_Elixir
IO.puts Concat.join("Hello") # Hello

defmodule DefaultTest do
  def dowork(x \\ "hey"), do: x
end

IO.puts DefaultTest.dowork # hey
IO.puts DefaultTest.dowork 123 # 123
IO.puts DefaultTest.dowork # hey
