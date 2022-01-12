class SavedHome < ApplicationRecord
    # validations
    validates :user_id, :property_id, presence: true
    validates :user_id, uniqueness: { scope: :property_id }

    # associations
    belongs_to :user
    belongs_to :property
end