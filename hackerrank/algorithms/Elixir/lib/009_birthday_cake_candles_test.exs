defmodule BirthdayCakeCandlesTest do
  use ExUnit.Case
  doctest BirthdayCakeCandles

  test "BirthdayCakeCandles" do
    assert BirthdayCakeCandles.main([3, 2, 1, 3]) == 2
  end
end
