defmodule SolveMeFirstTest do
  use ExUnit.Case

  test "sum two numbers" do
    assert SolveMeFirst.main(1, 2) == 3
    assert SolveMeFirst.main(-1, -2) == -3
    assert SolveMeFirst.main(1, -2) == -1
    assert SolveMeFirst.main(10, 32) == 42
    assert SolveMeFirst.main(31, 13) == 44
  end
end
