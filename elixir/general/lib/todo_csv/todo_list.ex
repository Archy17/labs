defmodule TodoList do
  defstruct last_id: 0, todos: %{}
  @path "lib/todo_csv/todos.csv"

  def init do
    @path
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
    |> format_output
    |> Stream.map(fn(todo) ->
      [date, task, id] = String.split(todo, ",")

      "Task: #{task}\nDate: #{date}\nTask ID: #{id}\n"
    end)
  end

  defp print_todos(todos) do
    todos
    |> format_to_print
    |> Enum.each(&IO.puts/1)
  end

  def show_all_todos(todo_list) do
    todo_list.todos |> print_todos
  end

  def show_todo(%{todos: todos}, todo_id) do
    filter_todos = fn{_key, %{id: id, task: _task, date: _date}} ->
      todo_id == id
    end

    Enum.filter(todos, filter_todos) |> print_todos
  end

  def add_todo(%{last_id: last_id, todos: todos} = todo_list, task, date) do
    current_id = last_id + 1
    new_todo   = %Todo{id: current_id, task: task, date: date}
    new_todos  = Map.put(todos, current_id, new_todo)

    # Persist new todo in the csv file
    content = new_todos |> format_output |> Enum.map(&(&1 <> "\n"))
    File.write!(@path, content)

    %TodoList{todo_list | last_id: current_id, todos: new_todos}
  end

  # def update_todo(todo_list, id, todo) do

  # end

  # def delete_todo(todo_list, id) do

  # end
end
