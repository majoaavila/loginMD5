class ClientsController < ApplicationController
    before_action :authenticate_user! # This is a Devise method
    def index
    end;
end
