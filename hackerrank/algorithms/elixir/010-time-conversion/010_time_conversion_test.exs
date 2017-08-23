ExUnit.start()

defmodule TimeConversionTest do
  use ExUnit.Case
  import TimeConversion

  test "Convert 12-hour time format to 24-hour" do
    assert converter("12:00:00AM") == "00:00:00"
    assert converter("12:00:00PM") == "12:00:00"
    assert converter("11:00:00PM") == "23:00:00"
    assert converter("11:00:00AM") == "11:00:00"
    assert converter("07:05:45PM") == "19:05:45"
  end
end
