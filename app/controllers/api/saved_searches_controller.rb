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

    def update
        @saved_search = SavedSearch.find_by(id: params[:id])
        if @saved_search.update(saved_search_params)
            render :show
        else
            render json: @saved_search.errors.full_messages, status: 422
        end
    end
  
    private
  
    def saved_search_params
        params.require(:saved_search).permit(:user_id, :title)
    end
end
  