class Api::SavedHomesController < ApplicationController
    def index
        @saved_homes = SavedHome.all
        render :index
    end
  
    def show
        @saved_home = SavedHome.find(params[:id])
    end
  
    def create
        @saved_home = SavedHome.create!(saved_home_params)
        render :show
    end

    def destroy
        @saved_home = SavedHome.find(params[:id])
        @saved_home.destroy
    
        render :show
    end
  
    private
  
    def saved_home_params
        params.require(:saved_home).permit(:user_id, :property_id)
    end
end
  