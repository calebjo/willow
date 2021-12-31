class ChangeUsers10 < ActiveRecord::Migration[6.1]
    def change
        change_table :users do |t|
            t.change :password_digest, :string, after: :email
            t.change :session_token, :string, after: :screen_name
        end
    end
end
