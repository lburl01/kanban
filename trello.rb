require 'sinatra'
require 'yaml'
require_relative 'models/task'
require 'json'
require "sinatra/cross_origin"

database_config = YAML::load(File.open('config/database.yml'))

before do
  ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'])
  content_type :json
end

after do
  ActiveRecord::Base.connection.close
end

register Sinatra::CrossOrigin

configure do
  enable :cross_origin
end

get '/foo' do
  headers 'Access-Control-Allow-Origin' => 'https://arcane-woodland-29724.herokuapp.com'
end

options '/*' do
  response["Access-Control-Allow-Headers"] = "origin, x-requested-with, content-type"
end

get '/api/tasks' do
  Task.all.to_json
end

post '/api/task' do
  task = Task.new(board: params[:board], name: params[:name], description: params[:description], label: params[:label])
  task.save if task.valid?
  status 201
  return task.to_json
end

put '/api/task/:id' do |id|
  task = Task.find_by_id(id)
  unless task.nil?
    task.update(deleted: true)
  end
end
