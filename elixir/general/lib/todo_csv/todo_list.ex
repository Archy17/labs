defmodule TodoList do
  defstruct last_id: 0, todos: %{}
  def init(path \\ "lib/todo_csv/todos.csv") do
    path
    |> read_file!
    |> format_to_work
  end

  defp read_file!(path) do
    path
    |> File.stream!
    |> Stream.map(&String.replace(&1, "\n", ""))
  end

  defp format_to_work(input) do
    format_todos = fn(el, acc) ->
      [date, task, id] = String.split(el, ",")
      id               = String.to_integer(id)

      Map.put(acc, id, %Todo{id: id, task: task, date: date})
    end

    todos   = Enum.reduce(input, %{}, format_todos)
    last_id = Map.keys(todos) |> Enum.max

    %TodoList{last_id: last_id, todos: todos}
  end

  defp format_output(todos) do
    todos
    |> Stream.map(fn{_key, %Todo{date: date, id: id, task: task}} ->
      "#{date},#{task},#{id}"
    end)
  end

  defp format_to_print(todo_list) do
    todo_list
    |> Stream.map(fn(todo) ->
      [date, task, id] = String.split(todo, ",")

      "Task: #{task}\nDate: #{date}\nTask ID: #{id}\n"
    end)
  end

  def show_all_todos(todo_list) do
    todo_list.todos
    |> format_output
    |> format_to_print
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
