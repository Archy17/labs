defmodule IOHelper do
  @moduledoc """
  Helper functions to deal with IO
  """

  def get, do: "" |> IO.gets |> String.trim
  def get n do
    Enum.map(1..n, fn _i -> get() end)
  end
  def get n, cb do
    n
    |> get
    |> Enum.map(cb)
  end
end
