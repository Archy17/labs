defmodule SolveFirstTest do
  use ExUnit.Case
  doctest SolveFirst

  test "sum two numbers" do
    assert SolveFirst.init("2", "3") == 5
    assert SolveFirst.init("1", "3") == 4
    assert SolveFirst.init("2", "-3") == -1
  end
end
