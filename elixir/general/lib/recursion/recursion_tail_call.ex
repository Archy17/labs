# list_len/1 function that calculates the length of a list
defmodule ListHelpers do
  @moduledoc """
  Provides helper functions to work with Lists
  """

  @doc """
  Calculates the length of a list with a non tail call recursive technique.

  ## Examples

      iex> ListHelpers.list_len_non_tail([1,2,3,4,5])
      5

      iex> ListHelpers.list_len_non_tail([])
      0
  """
  def list_len_non_tail([]), do: 0
  def list_len_non_tail([_ | tail]), do: 1 + list_len_non_tail(tail)

  @doc """
  Calculates the length of a list with a tail call recursive technique.
  """
  def list_len_tail(list), do: list_size(0, list)

  defp list_size(acc, []), do: acc
  defp list_size(acc, [_ | tail]) do
    list_size(acc + 1, tail)
  end

  @doc """
  Generates a list given the initial and final value with Non tail call optimization
  """
  def range(from, to) when from > to do
    []
  end
  def range(from, to) do
    [from | range(from + 1, to)]
  end

  @doc """
  Generates a list given the initial and final value with tail call optimization
  """
  def range_tail(from, to), do: range_opt(from, to, [])

  defp range_opt(from, to, result) when from > to, do: result
  defp range_opt(from, to, result) do
    range_opt(from, to - 1, [to | result])
  end

  @doc """
  Filter a list and return another list with only positive numbers.
  Non tail call optimization
  OBS: positive numbers are numbers greater than zero.
  """
  def filter_pos([]), do: []
  def filter_pos([head | tail]) when head > 0, do: [head | filter_pos(tail)]
  def filter_pos([_ | tail]), do: filter_pos(tail)

  @doc """
  Filter a list and return another list with only positive numbers.
  Tail call optimization
  OBS: positive numbers are numbers greater than zero.
  """
  def positive(list), do: pos_tail(list, [])

  defp pos_tail([], result), do: result |> Enum.reverse
  defp pos_tail([head | tail], result) when head > 0 do
    pos_tail(tail, [head | result])
  end
  defp pos_tail([_ | tail], result) do
    pos_tail(tail, result)
  end
end
