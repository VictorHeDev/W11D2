class Api::StepsController < ApplicationController
  def index
    render json: Step.all
  end

  def create
    @step = Step.new(step_params)
    if @step.save
      render json: @step
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def update
    @step = Step.find_by(id: params[:id])

    if @step.update(step_params)
      render json: @step
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def destroy
    @step = Step.find_by(id: params[:id])
    if @step && @step.destroy
      render json: @step
    else
      render json: ["Could not delete"], status: 422
    end
  end

  private
  def step_params
    params.require(:step).permit(:title, :description, :done)
  end

end
