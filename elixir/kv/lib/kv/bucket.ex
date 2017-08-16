defmodule KV.Bucket do
  use Agent

  @doc """
  Starts a new bucket.
  """
  def start_link(_opts) do
    Agent.start_link(fn -> %{} end)
  end

  @doc """
  Gets a value from the `bucket` by `key`.
  """
  def get(bucket, key), do: Agent.get(bucket, &Map.get(&1, key))

  # def get(bucket, key) do
  #   # Agent.get(bucket, fn state -> Map.get(state, key) end)
  #   Agent.get(bucket, &Map.get(&1, key))
  # end

  @doc """
  Puts the `value` for the given `key` in the `bucket`.
  """
  def put(bucket, key, value), do: Agent.update(bucket, &Map.put(&1, key, value))

  # def put(bucket, key, value) do
  #   # Agent.update(bucket, fn state -> Map.put(state, key, value) end)
  #   Agent.update(bucket, &Map.put(&1, key, value))
  # end

  @doc """
  Deletes `key` from `bucket`.

  Returns the current value of `key`, if `key` exists.
  """
  def delete(bucket, key), do: Agent.get_and_update(bucket, &Map.pop(&1, key))

  # def delete(bucket, key) do
  #   Agent.get_and_update(bucket, fn state -> Map.pop(state, key) end)
  # end
end
