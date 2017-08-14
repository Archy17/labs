defmodule Math do
  @moduledoc """
  Provides math-related functions.

  ## Examples

    iex> Math.sum(1, 2)
    3

    iex> Math.multiply(2, 5)
    10
  """

  @doc """
  Calculates the sum of two numbers.
  """
  def sum(a, b) do
    a + b
  end

  @doc """
  Calculates the multiplication of two numbers.
  """
  def multiply(a, b) do
    a * b
  end
end
