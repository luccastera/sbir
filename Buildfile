config :all, :required => :sproutcore

proxy '/agencies', :to => 'localhost:3000'
proxy '/solicitations', :to => 'localhost:3000'
