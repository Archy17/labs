defmodule General.Mixfile do
  use Mix.Project

  def project do
    [
      app: :general,
      version: "0.1.0",
      elixir: "~> 1.5",
      start_permanent: Mix.env == :prod,
      test_paths: ["lib"],
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      applications: applications(Mix.env),
      extra_applications: [:logger]
    ]
  end

  defp applications(:dev), do: applications(:all) ++ [:remix]
  defp applications(_all), do: [:logger]

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      # {:dep_from_hexpm, "~> 0.3.0"},
      # {:dep_from_git, git: "https://github.com/elixir-lang/my_dep.git", tag: "0.1.0"},
      {:remix, "~> 0.0.1", only: :dev},
      {:credo, "~> 0.8", only: [:dev, :test], runtime: false},
      {:mix_test_watch, "~> 0.5", only: :dev, runtime: false}
    ]
  end
end
