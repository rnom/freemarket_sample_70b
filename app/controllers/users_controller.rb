class UsersController < ApplicationController

  def show
    @nickname = current_user.nickname
    @items = []
    sellers = current_user.sellers.ids
    sellers.each do |s|
      key_id = Seller.find(s).item_id
      @item = Item.find(key_id)
      @items << @item
    end
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private
  def user_params
    params.require(:user).permit(
      :nickname, 
      :email,
      :password,
      :first_name,
      :last_name,
      :first_name_kana,
      :last_name_kana,
      :birthday
    )
  end
end
