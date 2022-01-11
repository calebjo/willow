class Api::PropertiesController < ApplicationController
    before_action :ensure_logged_in, only: [:create]
  
    def index
        @properties = Property.all
        render :index
    end
  
    def show
        @property = Property.find(params[:id])
    end
  
    def create
        @property = Property.create!(property_params)
        render :show
    end

    def update
        @property = Property.find_by(id: params[:id])
        if @property.update(property_params)
            render :show
        else
            render json: @property.errors.full_messages, status: 422
        end
    end

    def destroy
        @property = Property.find(params[:id])
        @property.destroy
    
        render :show
    end
  
    private
  
    def property_params
        params.require(:property).permit(
            :user_id,
            :address,
            :price,
            :bedrooms,
            :bathrooms,
            :square_feet,
            :lot_size,
            :year_built,
            :property_type,
            :has_basement,
            :num_stories,
            :parking_spots,
            :heating,
            :cooling,
            :hoa_fee,
            :for_sale,
            :for_rent,
            :agent_listing,
            :description,
            :photo,
            :lat,
            :lng
        )
    end
  
    def bounds
        params[:bounds]
    end
  
end
  