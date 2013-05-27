# Longest Collatz sequence 

# The following iterative sequence is defined for the set of positive integers:

# n  n/2 (n is even)
# n  3n + 1 (n is odd)

# Using the rule above and starting with 13, we generate the following sequence:

# 13  40  20  10  5  16  8  4  2  1
# It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. 
# Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

# Which starting number, under one million, produces the longest chain?

# NOTE: Once the chain starts the terms are allowed to go above one million.

def collatz(n):
	count = 1
	while n != 1:
		if n % 2 == 0:
			n = n / 2
		else:
			n = (3 * n) + 1
		count += 1
	return count

def longest_chain(n):
	longest_collatz = 0
	winning_number = 0
	for x in range(n/2, n):
		if collatz(x) > longest_collatz:
			longest_collatz = collatz(x)
			winning_number = x
	return winning_number, longest_collatz

print longest_chain(1000000)

