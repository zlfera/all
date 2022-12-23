defmodule ServeWeb.HomeView do
  use ServeWeb, :view

  def render("index.json", %{code: code, message: message}) do
    %{code: code, message: message}
  end

  def render("save.json", %{code: code, message: message}) do
    sd = %{code: code, message: message}
    sd
  end
end
