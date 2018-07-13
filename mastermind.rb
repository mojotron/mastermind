require_relative 'terminal_colors'

class Mastermind
	@@colors = { 
		1 => :black, 2 => :red, 3 => :green, 4 => :yellow, 5 => :blue, 6 => :white
	}

	attr_reader :board, :player, :secret_code, :set_up

	def initialize
		@board = Board.new(12,4)
		@set_up = game_set_up
		if @set_up == 1	
			@player = PlayerCodebraker.new
			@secret_code = computer_code_generator(@@colors, 4)
		else
			@player = AiCodeBreaker.new
			@secret_code = PlayerCodemaker.new(@@colors, 4)#secret code-@player.secret_code	
		end
		start_game
	end

	def start_game #contols flow of game
		@board.display_board
		@board.new_board.size.times do |i|
			puts
			sleep 1
			player_input = @player.player_guess(@@colors,4)
			@board.new_board[i] = player_input

			@set_up == 1 ? compare_result = code_compare(player_input, @secret_code) :
					compare_result = code_compare(player_input, @secret_code.secret_code)
			### ai logic ###
			#save memory, first 4 positions for red lags...
			if @set_up == 2
				@player.memory = find_red_flags(player_input, @secret_code.secret_code)
				#...from 4 to last plase is white flags
				@player.short_memory = @player.memory[4..-1]
			end
			### end ###					
			@board.new_board[i] += compare_result
			sleep 1
			@board.display_board
			if winner_found?(compare_result)
				puts (@set_up == 1 ? "\nYOU FOUND SECERT CODE, GZ!!!" : 
								"\nCOMPUTER FOUND SECERT CODE, SORRY!!!")
				exit
			end
		end
		puts (@set_up == 1 ? "\nGAME OVER!!! SORRY" : 
								"\nYOUR CODE IS UNBREAKABLE!!!")
		exit
	end

	private
	def game_set_up
		#player picks code_creator, code_guesser
		puts "If you wanna play as Code Breaker press 1"
		puts "If you wanna play as Code Maker press 2"
		player_input = gets.chomp.to_i
		case player_input
		when 1 then 1
		when 2 then 2
		else game_set_up #if input is not 1 or 2, recursion to prompt again
		end
	end

	def computer_code_generator(options, code_length)
		puts "...initialize unbreakable code..."#find better place for text
		secret_code = Array.new
		code_length.times do 
			i = rand(options.size) + 1
			secret_code.push(options[i])
		end
		#p secret_code
		secret_code
	end

	def winner_found?(code)
		code.map! { |item| item.new_token[:color] == :red }
		code.all?(true) && code.size == 4
	end

	def code_compare(player_code, computer_code)#key logic of game
		#red flag only if position and color match
		#white flag if color match but on wrong position, and that spot is not red flag
		#to mark all flags, this is for lenght codeof 4, NEEDS REFACTORING, now works so dont touch if it's not broken
		colors_position = [false, false, false, false] 
		red_flag = Array.new
		white_flag = Array.new
		#frist loop finds red flags, put color symbol in col_pos arr and push red flag in arr
		player_code.each_with_index do |item, inx|
			if item.new_token[:color] == computer_code[inx]
				colors_position[inx] = item.new_token[:color] #mark position, flag is found
				red_flag.push(Token.new("\u2691", :red))
			end
		end
		#second loop finds white flags, put color symbol in col_pos arr and push white flag in arr
		player_code.each_with_index do |item, inx|
			next if computer_code.count(item.new_token[:color]) == 
					colors_position.count(item.new_token[:color]) #makes additional white flag if not this line
			next if colors_position[inx] == item.new_token[:color] #skip if position is marked
			if computer_code.include?(item.new_token[:color])
				white_flag.push(Token.new("\u2691", :white))
				colors_position[inx] = item.new_token[:color] #mark position, flag is found
			end
		end
		red_flag + white_flag
	end

#### AI LOGIC ####
	def find_red_flags(player_code, computer_code) #additional for ai code breaker
		#4 false, for checking in Ai codebreaker for read flags
		colors_position = [false, false, false, false] 
		
		player_code.each_with_index do |item, inx|
			if item.new_token[:color] == computer_code[inx]
				colors_position[inx] = item.new_token[:color] 
			end
		end
		#appending on 4 falses, so we know that this is a white flag
		player_code.each_with_index do |item, inx|
			next if computer_code.count(item.new_token[:color]) == 
					colors_position.count(item.new_token[:color]) #makes additional white flag if not this line
			next if colors_position[inx] == item.new_token[:color] #skip if position is marked
			if computer_code.include?(item.new_token[:color])
				colors_position.push(item.new_token[:color]) #mark position, flag is found
			end
		end
		colors_position #to update memory if rendomly find red flag mark it for next go
	end
#### AI LOGIC END ####
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
# player class - makes player who guess secret code
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
# player class - makes player who create secret code
class PlayerCodemaker < PlayerCodebraker
	attr_reader :secret_code

	def initialize(options, code_length)
		puts "Welcome Code Maker!!!"
		@secret_code = create_secret_code(options, code_length)
		display_player_code
	end

	private
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

	def display_player_code
		print "Secret code: |"
		@secret_code.each do |color|
			print " #{"\u25cf".send(color)} |"
		end
		puts "\n"
	end
end
# player class - makes simulator of player who guess secret code 
class AiCodeBreaker # not real AI, cheater classs
	attr_accessor :memory, :short_memory
	def initialize 
		@memory = [false, false, false, false] #all flags, but first for are red
		@short_memory = [] #white flags
	end

	def player_guess(options, guesses, token = "\u25cf", memory = @memory, short_memory = @short_memory)
		puts "...loading codebreaker algoritam..."#find better place for text	
		computer_guess = Array.new
		guesses.times do |turn| 
			if memory[turn] != false #first check if there are any red flags
				computer_guess[turn] = Token.new(token, memory[turn])
			elsif short_memory.size >= 1 #for not red flags positions if there is
				# any white flag colors take sample and check
				computer_guess[turn] = Token.new(token, short_memory.sample)
			else # no white or red flag, take a random guess
				i = rand(options.size) + 1
				computer_guess[turn] = (Token.new(token, options[i]))
			end
		end
		computer_guess
	end
end

#start game
Mastermind.new


