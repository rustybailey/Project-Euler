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

