get '/' do
  redirect '/meditate'
end

get '/meditate' do
  erb :'/meditate'
end

