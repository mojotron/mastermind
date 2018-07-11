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

	attr_reader :board, :player, :secret_code, :set_up

	def initialize
		@board = Board.new(12,4)
		@set_up = game_set_up
		if @set_up == 1
			@player = PlayerCodebraker.new
			@secret_code = computer_code_generator(@@colors, 4)
			start_game_codebreaker
		else
			@player = PlayerCodemaker.new(@@colors, 4)#secret code-@player.secret_code
			@ai_player = AiCodeBreaker.new
			start_game_codemaker
		end
	end

	def start_game_codebreaker
		@board.display_board

		12.times do |i|
			puts
			sleep 1
			player_input = @player.player_guess(@@colors,4)
			@board.new_board[i] = player_input
			compare_result = code_compare(player_input, @secret_code)
			@board.new_board[i] += compare_result
			sleep 1
			@board.display_board
			if winner_found?(compare_result)
				puts "\nYOU FOUND SECERT CODE, GZ!!!"
				exit
			end
		end
	end

	def start_game_codemaker
		exit
	end

	def game_set_up
		#player picks code_creator, code_guesser
		puts "If you wanna play as Code Breaker press 1"
		puts "If you wanna play as Code Maker press 2"
		player_input = gets.chomp.to_i
		case player_input
		when 1 then 1
		when 2 then 2
		else game_set_up #if input is not 1 or 2 recursion to prompt again
		end
	end

	def computer_code_generator(options, code_length)
		puts "...initialize unbreakable code..."#find better place for text
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
		code.all?(true) && code.size == 4
	end

	def code_compare(player_code, computer_code)# flag "\u2691"
		colors_found = Array.new
		red_flag = Array.new
		white_flag = Array.new
		player_code.each_with_index do |item, inx|
			if item.new_token[:color] == computer_code[inx]
				colors_found.push(item.new_token[:color])
				red_flag.push(Token.new("\u2691", :red))
			end
		end
		player_code.each do |item|
			if (computer_code.include?(item.new_token[:color]) &&
					colors_found.none?(item.new_token[:color]))
				white_flag.push(Token.new("\u2691", :white)) 
				colors_found.push(item.new_token[:color])
			end
		end
		red_flag + white_flag
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
class PlayerCodebraker 
	def initialize
		puts "Welcome Code Breaker!!!"
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
			raise StandardError if !(player_input.all?('0'..options.size.to_s))
		rescue StandardError
			retry
		end 
		player_input.each do |x|
			player_choice.push(Token.new("\u25cf", options[x.to_i]))
		end
		player_choice
	end
end

class PlayerCodemaker < PlayerCodebraker
	attr_reader :secret_code

	def initialize(options, code_length)
		puts "Welcome Code Maker!!!"
		@secret_code = create_secret_code(options, code_length)
	end

	def create_secret_code(options, code_length, token = "\u25cf")
		display_player_options(options, token)
		player_choice = Array.new
		begin
			puts "Enter #{code_length} numbers (1-#{options.size}),no spaces between!"
			player_input = gets.chomp.split(//)[0...code_length]
			raise StandardError if !(player_input.all?('0'..options.size.to_s))
		rescue StandardError
			retry
		end 
		player_input.each do |x|
			player_choice.push(options[x.to_i])
		end
		player_choice
	end
end

class AiCodeBreaker
end

Mastermind.new


