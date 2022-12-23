defmodule Serve.AccountsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Serve.Accounts` context.
  """

  @doc """
  Generate a user.
  """
  def user_fixture(attrs \\ %{}) do
    {:ok, user} =
      attrs
      |> Enum.into(%{
        is_valid: "some is_valid",
        name: "some name",
        no: "some no",
        password: "some password",
        phone: 42,
        role_id: 42,
        sex: 42
      })
      |> Serve.Accounts.create_user()

    user
  end
end
