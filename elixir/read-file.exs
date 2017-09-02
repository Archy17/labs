defmodule GeneralModule do
  def large_lines!(path) do
    File.stream!(path)
    |> Stream.map(&String.replace(&1, "\n", ""))
    |> Stream.filter(&(String.length(&1) > 40))
    |> Stream.with_index
    |> Enum.each(fn({line, index}) -> IO.puts("#{index + 1}: #{line}") end)
  end
end

GeneralModule.large_lines!("ch03/lib/practice_enum_streams.ex")
