defmodule CompareTheTripletsTest do
  use ExUnit.Case

  test "Find comparison points between two lists of integers" do
    assert CompareTheTriplets.main([5, 6, 7], [3, 6, 10]) == "1 1"
    assert CompareTheTriplets.main([1, 2, 3], [3, 2, 1]) == "1 1"
    assert CompareTheTriplets.main([-2, 9, 43], [-1, 10, 44]) == "0 3"
    assert CompareTheTriplets.main([10, 2, 8], [8, 10, 7]) == "2 1"
    assert CompareTheTriplets.main([5, 6, 7], [3, 1, 3]) == "3 0"
  end
end
