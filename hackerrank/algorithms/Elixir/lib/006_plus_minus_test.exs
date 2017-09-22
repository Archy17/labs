defmodule PlusMinusTest do
  use ExUnit.Case
  doctest PlusMinus

  test "#PlusMinus" do
    assert PlusMinus.main([-4, 3, -9, 0, 4, 1], 6) == [
      "0.500000",
      "0.333333",
      "0.166667",
    ]
  end
end
