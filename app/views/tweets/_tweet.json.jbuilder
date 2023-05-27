json.extract! tweet, :id, :descripcion, :usuario, :created_at, :updated_at
json.url tweet_url(tweet, format: :json)
