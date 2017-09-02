defmodule EnumStreamsTest do
  use ExUnit.Case
  doctest EnumStreams

  test "if lines_lengths!/1 returns a list with the correct length of each line of a file" do
    assert EnumStreams.lines_lengths!("lib/streams_and_enums/file.txt") == [10, 100, 50, 30, 140]
  end

  test "if longest_line_length!/1 returns the longest line of a file" do
    assert EnumStreams.longest_line_length!("lib/streams_and_enums/file.txt") == 140
  end

  test "if longest_line!/1 returns the content of the longest line" do
    txt = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in."

    assert EnumStreams.longest_line!("lib/streams_and_enums/file.txt") == txt
  end

  test "if words_per_line!/1 returns a list of words per line" do
    assert EnumStreams.words_per_line!("lib/streams_and_enums/file.txt") == [2, 15, 8, 5, 23]
  end
end
