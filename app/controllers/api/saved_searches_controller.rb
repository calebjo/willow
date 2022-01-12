class Api::SavedSearchesController < ApplicationController
    def index
        @saved_searches = SavedSearch.all
        render :index
    end
  
    def show
        @saved_search = SavedSearch.find(params[:id])
    end
  
    def create
        @saved_search = SavedSearch.create!(saved_search_params)
        render :show
    end

    def destroy
        @saved_search = SavedSearch.find(params[:id])
        @saved_search.destroy
    
        render :show
    end
  
    private
  
    def saved_search_params
        params.require(:property).permit(:user_id, :property_id)
    end
end
  