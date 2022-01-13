class SavedHome < ApplicationRecord
    # validations
    validates :user_id, :property_id, presence: true

    # associations
    belongs_to :user
    belongs_to :property
end