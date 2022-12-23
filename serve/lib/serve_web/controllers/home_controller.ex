defmodule ServeWeb.HomeController do
  use ServeWeb, :controller

  alias Serve.Accounts
  alias Serve.Accounts.User

  def find_by_name(conn, params) do
    user = Accounts.find_by_name(params["name"])

    conn |> render("index.json", %{code: 200, message: user})
  end

  def index(conn, params) do
    user = Accounts.get_user!(params["id"])

    conn
    |> render("index.json", %{code: 200, message: user})
  end

  def list(conn, _params) do
    list = Accounts.list_users()

    conn
    |> render("index.json", %{code: 200, message: list})
  end

  def save(conn, params) do
    params = params["form"]
    dbg(params["no"])

    {ok, u} =
      Accounts.create_user(%{
        no: params["no"],
        name: params["name"],
        password: params["password"],
        sex: params["sex"],
        role_id: params["role_id"],
        phone: params["phone"],
        is_valid: params["is_valid"]
      })

    dbg(u.phone)

    if(ok == :ok) do
      conn
      |> render("save.json", %{code: 200, message: params})
    else
      conn
      |> render("index.json", %{code: 400, message: "保存出错!"})
    end
  end

  def mod(conn, params) do
    Accounts.change_user(%User{}, params)

    conn
    |> render("save.json", %{code: 200, message: params})
  end

  def save_or_mod(conn, params) do
    Accounts.update_user(%User{}, params)

    conn
    |> render("save.json", %{code: 200, message: params})
  end

  def delete(conn, params) do
    Accounts.delete_user(%User{})

    conn
    |> render("save.json", %{code: 200, message: params})
  end
end
