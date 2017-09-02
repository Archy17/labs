defmodule TodoCSV do
  def init(path) do
    path
    |> read_file!
    |> format_output
    |> show_all_todos
  end

  def read_file!(path) do

  end

  def show_all_todos(todo_list) do

  end

  def show_todo(todo_list, id) do

  end

  def add_todo(todo_list, todo) do

  end

  def update_todo(todo_list, id, todo) do

  end

  def delete_todo(todo_list, id) do

  end
end
