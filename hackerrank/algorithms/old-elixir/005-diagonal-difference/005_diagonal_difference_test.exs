ExUnit.start()

defmodule DiagonalDifferenceTest do
  use ExUnit.Case
  import DiagonalDifference

  test "calculate the absolute difference between the sums of a matrix diagonals" do
    size = 3
    matrix = [
      {["11", "2", "4"], 0},
      {["4", "5", "6"], 1},
      {["10", "8", "-12"], 2}
    ]

    assert diagonal_sum(matrix, size) |> abs == 15
  end
end
