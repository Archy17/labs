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
  def main do
    time = IO.gets("")
    |> String.trim
    |> converter
    |> IO.puts
  end

  def converter(input) do
    cond do
      input == "12:00:00AM" ->
        "00:00:00"

      input == "12:00:00PM" ->
        "12:00:00"

      true ->
        to_military_format(input)
    end
  end

  def to_military_format(input) do

  end
end

TimeConversion.main()
