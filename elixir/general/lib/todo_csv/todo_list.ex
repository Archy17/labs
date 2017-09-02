defmodule TodoList do
  defstruct last_id: 0, todos: %{}
  def init(path) do
    path
    |> read_file!
    |> format_to_work
  end

  def read_file!(path) do
    path
    |> File.stream!
    |> Stream.map(&String.replace(&1, "\n", ""))
  end

  def format_to_work(input) do
    todos = Enum.reduce(input, %{}, fn(el, acc) ->
      [date, task, id] = String.split(el, ",")
      id = String.to_integer(id)
      Map.put(acc, id, %Todo{id: id, task: task, date: date})
    end)
    last_id = Map.keys(todos) |> Enum.max

    %TodoList{last_id: last_id, todos: todos}
  end

  def format_output(input) do
    input
    |> Stream.map(&String.split(&1, ","))
    |> Stream.map(&format_row/1)
  end

  def format_row([date, task, id]) do
    # Task: Name of the task
    # Date: YYYY/MM/DD
    # Task ID: 00
    "Task: #{task}\nDate: #{date}\nTask ID: #{id}\n"
  end

  def show_all_todos(todo_list) do
    todo_list
    |> Enum.each(&IO.puts/1)
  end

  # def show_todo(todo_list, id) do

  # end

  # def add_todo(todo_list, todo) do

  # end

  # def update_todo(todo_list, id, todo) do

  # end

  # def delete_todo(todo_list, id) do

  # end
end
