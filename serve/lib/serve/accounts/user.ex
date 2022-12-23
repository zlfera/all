defmodule Serve.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder,
           only: [
             :name,
             :no,
             :sex,
             :phone,
             :role_id,
             :is_valid,
             :password,
             :id,
             :updated_at,
             :inserted_at
           ]}
  schema "users" do
    field :is_valid, :string
    field :name, :string
    field :no, :string
    field :password, :string
    field :phone, :integer
    field :role_id, :integer
    field :sex, :integer

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:no, :name, :password, :sex, :role_id, :phone, :is_valid])
    |> validate_required([:no, :name, :password, :sex, :role_id, :phone, :is_valid])
    |> validate_length(:name, min: 6, max: 12)
    |> validate_length(:password, min: 8, max: 22)

    # |> validate_length(:phone, min: 11, max: 11)
  end
end
