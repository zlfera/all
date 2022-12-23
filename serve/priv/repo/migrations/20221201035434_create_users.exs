defmodule Serve.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :no, :string
      add :name, :string
      add :password, :string
      add :sex, :integer
      add :role_id, :integer
      add :phone, :integer
      add :is_valid, :string

      timestamps()
    end
  end
end
