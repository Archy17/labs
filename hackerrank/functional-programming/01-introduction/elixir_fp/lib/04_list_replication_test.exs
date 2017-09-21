defmodule ListReplicationTest do
  use ExUnit.Case
  doctest ListReplication

  test "ListReplication" do
    assert ListReplication.main([1, 2, 3, 4], 3) == [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]
  end
end
