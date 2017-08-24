# https://www.hackerrank.com/challenges/time-conversion

# Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

# Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

# Input Format

# A single string containing a time in -hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM), where 01<= hh <= 12 and mm, ss <= 59.

# Output Format

# Convert and print the given time in 24-hour format, where 00 <= hh <= 23.

# Sample Input

# 07:05:45PM

# Sample Output

# 19:05:45

defmodule TimeConversion do
  def main(input) do
    input |> converter
  end

  def converter(input) do
    [hours, minutes, seconds] = String.split(input, ":")
    period = String.slice(seconds, 2..3)
    seconds = String.slice(seconds, 0..1)
    formated_hour = cond do
      period == "AM" && hours == "12" ->
        "00"

      period == "AM" ->
        hours

      period == "PM" && hours == "12" ->
        "12"

      period == "PM" ->
        hours |> String.to_integer |> Kernel.+(12) |> to_string
    end

    "#{formated_hour}:#{minutes}:#{seconds}"
  end
end

input = IO.gets("") |> String.trim
TimeConversion.main(input) |> IO.puts
