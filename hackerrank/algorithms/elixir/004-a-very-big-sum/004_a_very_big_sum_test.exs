ExUnit.start()

defmodule VeryBigSumTest do
  use ExUnit.Case
  import VeryBigSum

  test "Convert strings in list to integer" do
    list = ["1000000001", "1000000002", "1000000003", "1000000004", "1000000005"]
    list_num = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

    assert list_string_to_int(list) == list_num
  end

  test "Sum list of integers" do
    list = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

    assert sum_list(list) == 5000000015
  end
end
