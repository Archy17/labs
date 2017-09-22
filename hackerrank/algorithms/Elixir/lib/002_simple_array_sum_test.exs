defmodule SimpleArraySumTest do
  use ExUnit.Case

  test "Sum a list of integers" do
    assert SimpleArraySum.main([1, 2, 3, 4, 10, 11]) == 31
    assert SimpleArraySum.main([100, -20, 13]) == 93
    assert SimpleArraySum.main([5, -1, 3, 1]) == 8
    assert SimpleArraySum.main([13, 10_013, 103]) == 10_129
  end
end
