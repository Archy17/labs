defmodule ListReplication do
  @moduledoc """
  Repeats each element in a list `n` times
  """
  
  def main list, n do
    list
    |> Enum.map(&List.duplicate(&1, n)) 
    |> List.flatten
  end
end

# For HackerRank
# n = IOHelper.get()
# list = IOHelper.get(n)
# ListReplication.main(list, n)
