defmodule ListHelpersTest do
  use ExUnit.Case
  doctest ListHelpers

  test "calculates the length of a list in a non tail call optimized way" do
    assert ListHelpers.list_len_non_tail([1,2,3,4,5]) == 5
    assert ListHelpers.list_len_non_tail([1,3]) == 2
    assert ListHelpers.list_len_non_tail([]) == 0
  end

  test "calculates the length of a list in a tail call optimized way" do
    assert ListHelpers.list_len_tail([1,2,3,4,5]) == 5
    assert ListHelpers.list_len_tail([1,3]) == 2
    assert ListHelpers.list_len_tail([]) == 0
  end

################################################################################

  test "create a list of integers in a range given an initial and final value" do
    assert ListHelpers.range(1, 3) == [1,2,3]
    assert ListHelpers.range(0, 5) == [0,1,2,3,4,5]
    assert ListHelpers.range(4,4) == [4]
  end

  test "create a list of integers in a range using tail call optimization" do
    assert ListHelpers.range_tail(1, 3) == [1,2,3]
    assert ListHelpers.range_tail(0, 5) == [0,1,2,3,4,5]
    assert ListHelpers.range_tail(4,4) == [4]
  end

################################################################################

  test "if the function returns another list with only positive numbers" do
    assert ListHelpers.filter_pos([1,-1,2,-2]) == [1,2]
    assert ListHelpers.filter_pos([0,1,-2]) == [1]
    assert ListHelpers.filter_pos([0,-2,2,3,-5,-120,23,-0,10]) == [2,3,23,10]
  end

  test "if the function returns another list using tail call optimization" do
    assert ListHelpers.positive([1,-1,2,-2]) == [1,2]
    assert ListHelpers.positive([0,1,-2]) == [1]
    assert ListHelpers.positive([0,-2,2,3,-5,-120,23,-0,10]) == [2,3,23,10]
  end
end
