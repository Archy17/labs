ExUnit.start()

defmodule SimpleArraySumTest do
  use ExUnit.Case
  import SimpleArraySum

  test "Sum a list of integers" do
    assert sum_integer_list([1, 2, 3, 4, 10, 11]) == 31
    assert sum_integer_list([100, -20, 13]) == 93
    assert sum_integer_list([5, -1, 3, 1]) == 8
    assert sum_integer_list([13, 10_013, 103]) == 10_129
  end
end
