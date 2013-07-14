require "bundler"
Bundler.setup(:default, ENV.fetch("RACK_ENV", :development))
Bundler.require

require File.expand_path("../environment", __FILE__)