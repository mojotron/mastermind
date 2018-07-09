require_relative 'terminal_colors'

class Board
	attr_accessor :new_board 

	def initialize(row_number, column_number)
		@new_board = create_board(row_number, column_number)
		display_board
	end

	def create_board(row_number, column_number)
		board = Array.new
		row = Array.new
		column_number.times { row.push(Token.new) }
		row_number.times{ board.push(row)}
		board
	end

	def display_board
		@new_board.each_with_index do |line, inx|
			print "#{"\u21e5"} "
			line.each do |item|
				print "#{item.new_token[:token].send(item.new_token[:color])} "
			end 
			print "#{"\u21e4"} Try #{inx + 1}\n"
		end
	end

end

class Token
	attr_accessor :new_token
	def initialize(token = "\u25cb", color = :white)
		@new_token = create_token(token, color)
	end
	def create_token(token, color)
		{token: token, color: color}
	end
end
##########################################################
class Player 
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

x = Board.new(12,4)
y = [
	Token.new("\u25cf", :red),
	Token.new("\u25cf", :blue),
	Token.new("\u25cf", :yellow),
	Token.new("\u25cf", :green)
]

x.new_board[0] = y

x.display_board