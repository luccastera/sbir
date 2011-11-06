
# DEVELOPMENT

#config :all, :required => :sproutcore
#proxy '/agencies', :to => 'localhost:3000'
#proxy '/solicitations', :to => 'localhost:3000'

# PRODUCTION

config :all, :required => :sproutcore do |c|
  c[:resources_relative] = true
  c[:url_prefix] = ''
end
