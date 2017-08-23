ExUnit.start()

defmodule VeryBigSumTest do
  use ExUnit.Case
  import VeryBigSum

  test "convert strings to integer and sum them all" do
    list = ["1000000001", "1000000002", "1000000003", "1000000004", "1000000005"]

    assert sum_list_strings(list) == 5000000015
  end
end
