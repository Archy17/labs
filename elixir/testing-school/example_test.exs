# just type `elixir example_test.exs` on terminal to run this test
ExUnit.start()

defmodule ExampleTest do
  use ExUnit.Case

  test "the truth", do: assert 1 + 1 == 2
  test "the untruth", do: refute 1 + 1 == 3
end

################################################################################

defmodule SendingProcess do
  def run(pid) do
    send pid, :ping
  end
end

defmodule TestReceive do
  use ExUnit.Case

  test "receives ping" do
    SendingProcess.run(self())
    assert_received :ping
  end
end

################################################################################

defmodule OutputTest do
  use ExUnit.Case
  import ExUnit.CaptureIO

  test "outputs Hello World" do
    assert capture_io(fn -> IO.puts "Hello World" end) == "Hello World\n"
  end
end
