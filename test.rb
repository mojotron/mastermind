require_relative 'terminal_colors'

class MasterMind
	attr_accessor :code, :new_board
	@@token = "\u25cf"
	@@colors = { 
		1 => :black,
		2 => :red,
		3 => :green,
		4 => :yellow,
		5 => :blue,
		6 => :white
	}

	def initialize
		@code = code_creator
		@player_decoder = Player.new
		@board = Board.new(12,4)
	end

	

	def code_creator #creates array of 4 random color symbols
		code = Array.new
		4.times do
			x = rand(@@colors.size) + 1
			code.push(@@colors)
		end
		code
	end
end
#####################################################################
class Player < MasterMind

	def initialize
		puts "Welcome Player"
	end

	def display_player_options(options, token)
		puts "Press number for assigned color"
		options.map do |key, color|
			puts "#{key} #{"\u21dd"} #{token.send(color)}"
		end
	end

	def player_guess(options, guesses, token)
		display_player_options(options,token)
		player_choice = Array.new
		guesses.times do |i|
			print "Enter #{i + 1}. choice (1-#{guesses}) >> "
			player_input = gets.chomp[0]
			player_choice.push(token.send(@@colors[player_input.to_i]))
		end
		player_choice
	end

end

class Board
	attr_reader :new_board
	@@token = "\u25cb"

	def initialize(row_number, column_number)
		@new_board = create_board(row_number, column_number)
	end

	def create_board(row_number, column_number)
		board = Array.new
		row = Array.new
		column_number.times {row.push(@@token.blue)}
		row_number.times{ board.push(row)}
		board
	end

	def display_board
		@new_board.each_with_index do |line, inx| 
			puts "#{"\u21e5"} #{line} #{"\u21e4"} Try #{inx + 1} ".gsub(/"|,|\[|\]/, "")
		end
	end
end

px = MasterMind.new
px.start_game