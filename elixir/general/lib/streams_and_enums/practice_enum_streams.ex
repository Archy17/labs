defmodule EnumStreams do
  @moduledoc """
  Helper functions to work with files
  """

  @doc """
  Takes a file path and returns a list of numbers, with each number
  representing the length of the corresponding line from the file.
  """
  def lines_lengths!(path) do
    File.stream!(path)
    |> Stream.map(&String.replace(&1, "\n", ""))
    |> Enum.map(&String.length/1)
    # |> Enum.map(&String.length(&1))
  end

  @doc """
  Returns the length of the longest line in a file.
  """
  def longest_line_length!(path) do
    File.stream!(path)
    |> Stream.map(&String.replace(&1, "\n", ""))
    |> Stream.map(&String.length/1)
    |> Enum.max
  end

  @doc """
  Rturns the contents of the longest line in a file.
  """
  def longest_line!(path) do
    File.stream!(path)
    |> Stream.map(&String.replace(&1, "\n", ""))
    |> Enum.max_by(&String.length/1)
  end

  @doc """
  Returns a list of numbers, with each number
  representing the word count in a file.
  """
  def words_per_line!(path) do
    File.stream!(path)
    |> Stream.map(&String.replace(&1, "\n", ""))
    |> Enum.map(fn str -> length(String.split(str)) end)
  end
end
