class Item < ApplicationRecord
  has_one :seller, dependent: :destroy
  has_one :buyer
  has_one :selling_status, dependent: :destroy
  has_many :favorites, dependent: :destroy 
  has_many :comments, dependent: :destroy
  has_many :users, through: :comments
  has_many :images, dependent: :destroy
  belongs_to :brand, optional: true
  belongs_to :category
  belongs_to :shipping
  validates :name, :description, :price, :condition, :parent_category_id, :child_category_id, :category, :shipping, :images, presence: true
  validates_associated :images


  enum condition: [ :"新品・未使用", :"未使用に近い", :"目立った傷や汚れなし", :"やや傷や汚れあり", :"傷や汚れあり", :"全体的に状態が悪い" ]
  # mount_uploader :image, ImageUploader
  accepts_nested_attributes_for :images, allow_destroy: true
  accepts_nested_attributes_for :shipping
  accepts_nested_attributes_for :brand

  scope :d_search, -> (keyword){where('name LIKE(?)', "%#{keyword}%")}
  scope :previous, -> (item) { where("id < ?", item.id).order('id DESC').first }
  scope :next, -> (item) { where("id > ?", item.id).order('id ASC').first }

end
