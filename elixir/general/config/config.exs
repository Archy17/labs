use Mix.Config

# import_config "#{Mix.env}.exs"

if Mix.env == :dev do
  config :mix_test_watch,
    tasks: [
      "test",
      "credo --strict",
    ]
end
