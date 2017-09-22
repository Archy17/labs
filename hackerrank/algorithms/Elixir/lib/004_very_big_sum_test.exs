defmodule VeryBigSumTest do
  use ExUnit.Case

  test "Sum list of integers" do
    list = [
      1_000_000_001,
      1_000_000_002,
      1_000_000_003,
      1_000_000_004,
      1_000_000_005,
    ]

    assert VeryBigSum.main(list) == 5_000_000_015
  end
end
