defmodule TimeConversionPatternTest do
  use ExUnit.Case

  test "Convert 12-hour time to 24-hour format using Pattern Matching" do
    assert TimeConversionPattern.main("12:00:00AM") == "00:00:00"
    assert TimeConversionPattern.main("12:33:11AM") == "00:33:11"

    assert TimeConversionPattern.main("01:00:00AM") == "01:00:00"
    assert TimeConversionPattern.main("01:33:11AM") == "01:33:11"

    assert TimeConversionPattern.main("02:00:00AM") == "02:00:00"
    assert TimeConversionPattern.main("02:33:11AM") == "02:33:11"

    assert TimeConversionPattern.main("03:00:00AM") == "03:00:00"
    assert TimeConversionPattern.main("03:33:11AM") == "03:33:11"

    assert TimeConversionPattern.main("04:00:00AM") == "04:00:00"
    assert TimeConversionPattern.main("04:33:11AM") == "04:33:11"

    assert TimeConversionPattern.main("05:00:00AM") == "05:00:00"
    assert TimeConversionPattern.main("05:33:11AM") == "05:33:11"

    assert TimeConversionPattern.main("06:00:00AM") == "06:00:00"
    assert TimeConversionPattern.main("06:33:11AM") == "06:33:11"

    assert TimeConversionPattern.main("07:00:00AM") == "07:00:00"
    assert TimeConversionPattern.main("07:33:11AM") == "07:33:11"

    assert TimeConversionPattern.main("08:00:00AM") == "08:00:00"
    assert TimeConversionPattern.main("08:33:11AM") == "08:33:11"

    assert TimeConversionPattern.main("09:00:00AM") == "09:00:00"
    assert TimeConversionPattern.main("09:33:11AM") == "09:33:11"

    assert TimeConversionPattern.main("10:00:00AM") == "10:00:00"
    assert TimeConversionPattern.main("10:33:11AM") == "10:33:11"

    assert TimeConversionPattern.main("11:00:00AM") == "11:00:00"
    assert TimeConversionPattern.main("11:33:11AM") == "11:33:11"

    assert TimeConversionPattern.main("12:00:00PM") == "12:00:00"
    assert TimeConversionPattern.main("12:33:11PM") == "12:33:11"

    assert TimeConversionPattern.main("01:00:00PM") == "13:00:00"
    assert TimeConversionPattern.main("01:33:11PM") == "13:33:11"

    assert TimeConversionPattern.main("02:00:00PM") == "14:00:00"
    assert TimeConversionPattern.main("02:33:11PM") == "14:33:11"

    assert TimeConversionPattern.main("03:00:00PM") == "15:00:00"
    assert TimeConversionPattern.main("03:33:11PM") == "15:33:11"

    assert TimeConversionPattern.main("04:00:00PM") == "16:00:00"
    assert TimeConversionPattern.main("04:33:11PM") == "16:33:11"

    assert TimeConversionPattern.main("05:00:00PM") == "17:00:00"
    assert TimeConversionPattern.main("05:33:11PM") == "17:33:11"

    assert TimeConversionPattern.main("06:00:00PM") == "18:00:00"
    assert TimeConversionPattern.main("06:33:11PM") == "18:33:11"

    assert TimeConversionPattern.main("07:00:00PM") == "19:00:00"
    assert TimeConversionPattern.main("07:33:11PM") == "19:33:11"

    assert TimeConversionPattern.main("08:00:00PM") == "20:00:00"
    assert TimeConversionPattern.main("08:33:11PM") == "20:33:11"

    assert TimeConversionPattern.main("09:00:00PM") == "21:00:00"
    assert TimeConversionPattern.main("09:33:11PM") == "21:33:11"

    assert TimeConversionPattern.main("10:00:00PM") == "22:00:00"
    assert TimeConversionPattern.main("10:33:11PM") == "22:33:11"

    assert TimeConversionPattern.main("11:00:00PM") == "23:00:00"
    assert TimeConversionPattern.main("11:33:11PM") == "23:33:11"
  end
end
