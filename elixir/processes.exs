send self(), {:hello, "elixir"}
receive do
  {:hello, msg} -> msg
  {:world, msg} -> "won't match"
end

################################################################################

receive do
  {:hello, msg} -> msg
after
  1_000 -> "nothing after 1s"
end

################################################################################

parent = self()

spawn fn -> send(parent, {:hello, self()}) end

receive do
  {:hello, pid} -> "Got hello from #{inspect pid}"
end

################################################################################
