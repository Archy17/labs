defmodule TimeConversionPattern do
  def main(input) do
    input |> converter
  end

  # String (binary) pattern matching
  def converter(
    <<h::bytes-size(2)>> <> ":" <>
    <<m::bytes-size(2)>> <> ":" <>
    <<s::bytes-size(2)>> <>
    <<p::bytes-size(2)>>
  ) do
    "#{format_hour(h, p)}:#{m}:#{s}"
  end

  defp format_hour("12", "AM"), do: "00"
  defp format_hour(hours, "AM"), do: hours
  defp format_hour("12", "PM"), do: "12"
  defp format_hour(hours, "PM"), do: "#{String.to_integer(hours) + 12}"
end
