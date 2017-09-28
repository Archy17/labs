defmodule TimeConversion do
  @moduledoc """
  Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
  """

  @spec main(String.t) :: String.t
  def main(input) do
    input |> converter()
  end

  @spec converter(String.t) :: String.t
  def converter(input) do
    [hours, minutes, seconds] = String.split(input, ":")
    period                    = String.slice(seconds, 2..3)
    seconds                   = String.slice(seconds, 0..1)
    formated_hour             = format_hour(period, hours)

    "#{formated_hour}:#{minutes}:#{seconds}"
  end

  @spec format_hour(String.t, String.t) :: String.t
  defp format_hour("AM", "12"), do: "00"
  defp format_hour("AM", hours), do: hours
  defp format_hour("PM", "12"), do: "12"
  defp format_hour("PM", hours), do: "#{String.to_integer(hours) + 12}"
end

# For HackerRank
# input = IO.gets("") |> String.trim
# TimeConversion.main(input) |> IO.puts
