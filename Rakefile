require 'iconv'
String.class_eval do
  def permalize(from = 'utf-8', to = 'ascii//translit')
    s = self.gsub(/'/, '').to_ascii_iconv
    s.gsub!(/\W+|_/, ' ') # all non-word chars to spaces
    s.strip!
    s.downcase!
    s.gsub!(/\ +/, '-') # spaces to dashes
    s
  end

  def to_ascii_iconv
    begin
      s = self.dup
      return Iconv.iconv('ascii//translit//ignore', 'utf-8', s).to_s
    rescue Iconv::IllegalSequence
      return ''
    rescue Iconv::InvalidCharacter
      return ''
    end
  end
end

namespace :actionblog do
  desc "New Blog Post, Usage: rake actionblog:new blog_title=\"Test\""
  task :new do
    blog_title, now = ENV['blog_title'], Time.now
    todays_date = now.strftime("%Y-%m-%d")

    slug = "#{todays_date}-#{blog_title.permalize}"
    File.open("_posts/#{slug}.md", 'w') do |out|
      out.puts("---")
      out.puts("layout: post")
      out.puts("title: #{blog_title}")
      out.puts("---")
      out.puts

      out.puts("<h1><a href=\"{{ page.url }}\">{{ page.title }}</a></h1>")
      out.puts
      out.puts("<p class=\"meta\">#{now.day} #{now.strftime("%h")} #{now.year} - Singapore</p>")
    end

    puts "** New Blog Post '#{blog_title}' Created at: _posts/#{slug}.md"
  end
end
