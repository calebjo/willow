class Api::SessionsController < ApplicationController
    before_action :ensure_logged_in, only: [:destroy]

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
            redirect_to api_user_url(@user)
        else
            render json: ["Invalid email or password."], status: 401
        end
    end

    def destroy
        if !logged_in? 
            render json: ["You must be signed in to sign out."], status: 404
        else
            logout!
            render json: {}
        end
    end
end