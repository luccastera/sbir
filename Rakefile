require 'rake/clean'

desc "Check the JavaScript source with JSHint - exit with status 1 if any of the files fail."
task :jshint do
  failed_files = []
  rhino_jar = File.join('.', "bin", "js.jar")
  jshint_path = File.join(".", "rhino.js")
  files_to_check = Dir['apps/**/*.js']

  files_to_check.each do |fname|
    cmd = "java -jar #{rhino_jar}  #{jshint_path} #{fname}"
    results = %x{#{cmd}}
    unless results.strip.empty?
      puts "---------------------------------------------------------- #{fname} ---------------------------------------------------------- "
      puts results
      failed_files << fname
    end
  end
  if failed_files.size > 0
    exit 1
  end
end

# Deploying stuff starts here
require 'net/ssh'
require 'net/scp'

REMOTE_DIR = "/home/luc/www/sbir/current/public/"

desc "Deploy the site"
task :deploy => :clean do
  FileUtils.rmtree 'tmp'
  
  puts "building sproutcore..."
  status = system 'sc-build'
  
  if status
    deployid = `ls tmp/build/app/sbir/en`.strip
    
    puts "creating archive..."
    system 'cd tmp/build/app/ && tar -cvpzf app.tar.gz sbir/ sproutcore/'
      
		puts "uploading archive..."
		Net::SCP.start("sbirsolicitations.com", 'luc', :port => 30000) do |scp|
		  scp.upload! 'tmp/build/app/app.tar.gz',  REMOTE_DIR
		end
  
    puts "setting up server..."
		Net::SSH.start('sbirsolicitations.com', 'luc', :port => 30000) do |ssh|
		  ssh.exec! "rm -rf #{REMOTE_DIR}/sbir"
		  ssh.exec! "rm -rf #{REMOTE_DIR}/sbir"

		  ssh.exec! "cd #{REMOTE_DIR}/ && tar xzvf app.tar.gz"
		  ssh.exec! "rm #{REMOTE_DIR}/app.tar.gz"

		  ssh.exec! "rm #{REMOTE_DIR}/index.html"
		  ssh.exec! "ln -s #{REMOTE_DIR}/sbir/en/#{deployid}/index.html #{REMOTE_DIR}/index.html"
		end
		puts "SUCCESS!"
  end
  
end

