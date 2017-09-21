defmodule HelloWorldTest do
  use ExUnit.Case
  doctest HelloWorld

  test "HelloWorld" do
    assert HelloWorld.main() == "Hello World"
  end
end
