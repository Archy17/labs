defmodule ExSetupTest do
  use ExUnit.Case
  doctest ExSetup

  test "greets the world" do
    assert ExSetup.hello() == :world
  end
end
