defmodule SolveFirst do
  @moduledoc """
  Sum two numbers
  """
  def init a, b do
    parse_string(a) + parse_string(b)
  end

  defp parse_string str do
    str
    |> String.trim
    |> String.to_integer
  end
end
