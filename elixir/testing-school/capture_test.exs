ExUnit.start()

defmodule AssertionTest do
  use ExUnit.Case

  import ExUnit.CaptureIO

  test "example" do
    assert capture_io(fn ->
      IO.puts "a"
    end) == "a\n"
  end

  test "checking the return value and the IO output" do
    fun = fn ->
      assert Enum.each(["some", "example"], &(IO.puts &1)) == :ok
    end
    assert capture_io(fun) == "some\nexample\n"
    # tip: or use only: "capture_io(fun)" to silence the IO output (so only assert the return value)
  end

  test "checking the input value and the IO output" do
    fun = fn ->
      input = IO.gets ""

      IO.write input
    end

    assert capture_io("input", fun) == "input"
  end
end
