class TagsController < ApplicationController
  def index
    @tags = Tag.all
  end

  def show
    @tags = set_tag
    @prototypes = set_prototype;
  end

  private
    def set_prototype
      @prototypes = Prototype.includes(:tags).where(tags: {id: params[:id]})
    end

    def set_tag
      @tags = Tag.find(params[:id])
    end
end
