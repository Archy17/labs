defmodule HelloTimesTest do
  use ExUnit.Case
  doctest HelloTimes

  test "prints Hello World N times" do
    assert HelloTimes.main(3) == "Hello World\nHello World\nHello World\n"
  end
end
