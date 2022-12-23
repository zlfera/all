defmodule Serve.Repo do
  use Ecto.Repo,
    otp_app: :serve,
    adapter: Ecto.Adapters.Postgres
end
