# Enter in the terminal `elixir 001_solve_me_first_test.exs` to run these tests.
ExUnit.start()

defmodule SolveMeFirstTest do
  use ExUnit.Case
  import SolveMeFirst

  test "sum two numbers" do
    assert sum(1, 2) == 3
    assert sum(-1, -2) == -3
    assert sum(1, -2) == -1
    assert sum(10, 32) == 42
    assert sum(31, 13) == 44
  end
end
