require_relative 'terminal_colors'

class Board
	attr_accessor :new_board
	@@token = "\u25cb"

	def initialize(row_number, column_number)
		@new_board = create_board(row_number, column_number)
		display_board
	end

	def create_board(row_number, column_number)
		board = Array.new
		row = Array.new
		column_number.times {row.push({token: @@token, color: :white})}
		row_number.times{ board.push(row)}
		board
	end

	def display_board
		@new_board.each_with_index do |line, inx|
			print "#{"\u21e5"} "
			line.each do |item|
				print "#{item[:token].send(item[:color])} "
			end 
			print "#{"\u21e4"} Try #{inx + 1}\n"
		end
	end
end