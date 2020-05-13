class Buyer < ApplicationRecord
  belongs_to :user
  belongs_to :item
  has_many :chats, dependent: :destroy
  has_many  :sellers, through:  :chats

  validates :user_id, presence: true
  validates :item_id, presence: true
end
