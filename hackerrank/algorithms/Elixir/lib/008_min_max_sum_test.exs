defmodule MinMaxSumTest do
  use ExUnit.Case
  doctest MinMaxSum

  test "MinMaxSum" do
    assert MinMaxSum.main([1, 2, 3, 4, 5]) == {10, 14}
  end
end
