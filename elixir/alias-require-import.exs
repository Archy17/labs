defmodule Stats do
  alias Math.List, as: List
  # In the remaining module definition List exands to Math.List
  # The original List can still be accessed within Stats by Elixir.List

  alias Math.List
  # is the same as `alias Math.List, as: List`
end

# alias is lexically scoped, which allows you to set aliases inside specific functions
defmodule Math do
  def plus(a, b) do
    alias Math.List
    # ...
  end

  def minus(a, b) do
    # ...
  end
end

import List, only: [duplicate: 2]
duplicate :ok, 3 # [:ok, :ok, :ok]
