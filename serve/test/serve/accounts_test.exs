defmodule Serve.AccountsTest do
  use Serve.DataCase

  alias Serve.Accounts

  describe "users" do
    alias Serve.Accounts.User

    import Serve.AccountsFixtures

    @invalid_attrs %{is_valid: nil, name: nil, no: nil, password: nil, phone: nil, role_id: nil, sex: nil}

    test "list_users/0 returns all users" do
      user = user_fixture()
      assert Accounts.list_users() == [user]
    end

    test "get_user!/1 returns the user with given id" do
      user = user_fixture()
      assert Accounts.get_user!(user.id) == user
    end

    test "create_user/1 with valid data creates a user" do
      valid_attrs = %{is_valid: "some is_valid", name: "some name", no: "some no", password: "some password", phone: 42, role_id: 42, sex: 42}

      assert {:ok, %User{} = user} = Accounts.create_user(valid_attrs)
      assert user.is_valid == "some is_valid"
      assert user.name == "some name"
      assert user.no == "some no"
      assert user.password == "some password"
      assert user.phone == 42
      assert user.role_id == 42
      assert user.sex == 42
    end

    test "create_user/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Accounts.create_user(@invalid_attrs)
    end

    test "update_user/2 with valid data updates the user" do
      user = user_fixture()
      update_attrs = %{is_valid: "some updated is_valid", name: "some updated name", no: "some updated no", password: "some updated password", phone: 43, role_id: 43, sex: 43}

      assert {:ok, %User{} = user} = Accounts.update_user(user, update_attrs)
      assert user.is_valid == "some updated is_valid"
      assert user.name == "some updated name"
      assert user.no == "some updated no"
      assert user.password == "some updated password"
      assert user.phone == 43
      assert user.role_id == 43
      assert user.sex == 43
    end

    test "update_user/2 with invalid data returns error changeset" do
      user = user_fixture()
      assert {:error, %Ecto.Changeset{}} = Accounts.update_user(user, @invalid_attrs)
      assert user == Accounts.get_user!(user.id)
    end

    test "delete_user/1 deletes the user" do
      user = user_fixture()
      assert {:ok, %User{}} = Accounts.delete_user(user)
      assert_raise Ecto.NoResultsError, fn -> Accounts.get_user!(user.id) end
    end

    test "change_user/1 returns a user changeset" do
      user = user_fixture()
      assert %Ecto.Changeset{} = Accounts.change_user(user)
    end
  end
end
