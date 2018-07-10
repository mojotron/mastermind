require_relative 'terminal_colors'

class Mastermind
	@@colors = { 
		1 => :black,
		2 => :red,
		3 => :green,
		4 => :yellow,
		5 => :blue,
		6 => :white
	}

	attr_reader :board, :player, :secret_code

	def initialize
		@board = Board.new(12,4)
		@player = Player.new
		@secret_code = computer_code_generator(4, @@colors)
	end

	def start_game
		@board.display_board

		12.times do |i|
			puts
			sleep 1
			x = @player.player_guess(@@colors,4)
			@board.new_board[i] = x
			y = code_compare(x, @secret_code)
			@board.new_board[i] += y
			sleep 1
			@board.display_board
			if winner_found?(y)
				puts "\nYOU FOUND SECERT CODE, GZ!!!"
				exit
			end
		end
	end

	def computer_code_generator(code_length, options)
		secret_code = Array.new
		code_length.times do 
			i = rand(options.size) + 1
			secret_code.push(options[i])
		end
		p secret_code
		secret_code
	end

	def winner_found?(code)
		code.map! { |item| item.new_token[:color] == :red }
		code.all?(true)
	end

	def code_compare(player_code, computer_code)# flag "\u2691"
		compare_result = []
		player_code.each_with_index do |item, inx|
			if item.new_token[:color] == computer_code[inx]
				compare_result.unshift(Token.new("\u2691", :red))
				if computer_code[0..inx].include?(item.new_token[:color]) || 
					computer_code[(inx + 1)..-1].include?(item.new_token[:color])
				compare_result.push(Token.new("\u2691", :white)) if 
					!(compare_result.include?(item.new_token[:white]))
				end
			end
		end
		compare_result[0..3]
	end
end
# board class - makes board with instance methods
class Board
	attr_accessor :new_board 

	def initialize(row_number, column_number)
		@new_board = create_board(row_number, column_number)
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
			print "#{"\u21e4"}\n"
		end
	end
end
# token class - makes a token and color for board display
class Token
	attr_accessor :new_token
	def initialize(token = "\u25cb", color = :white)
		@new_token = create_token(token, color)
	end
	def create_token(token, color)
		{token: token, color: color}
	end
end
# player class - makes player and instance methods
class Player 
	def initialize
		puts "Welcome player!!!"
	end

	def display_player_options(options, token = "\u25cf")
		puts "Press number for assigned color"
		options.map do |key, color|
			print "#{key} #{"\u261b"} #{token.send(color)} |"
		end
		puts "\n"
		true
	end

	def player_guess(options, guesses, token = "\u25cf")
		display_player_options(options,token)
		player_choice = Array.new
		begin
			puts "Enter #{guesses} numbers (1-#{options.size}),no spaces between!"
			player_input = gets.chomp.split(//)[0...guesses]
			raise StandardError if !(player_input.all?('0'..'9'))
		rescue StandardError
			retry
		end 
		player_input.each do |x|
			player_choice.push(Token.new("\u25cf", options[x.to_i]))
		end
		player_choice
	end
end


x = Mastermind.new
x.start_game
