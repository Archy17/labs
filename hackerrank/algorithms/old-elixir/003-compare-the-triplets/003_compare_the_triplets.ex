# https://www.hackerrank.com/challenges/compare-the-triplets

# Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

# We define the rating for Alice's challenge to be the triplet A = (a0, a1, a2), and the rating for Bob's challenge to be the triplet B = (b0, b1, b2).

# Your task is to find their comparison points by comparing a0 with b0, a1 with b1, and a2 with b2.

# - If ai > bi, then Alice is awarded 1 point.
# - If ai < bi, then Bob is awarded 1 point.
# - If ai = bi, then neither person receives a point.

# Comparison points is the total points a person earned.

# Given A and B, can you compare the two challenges and print their respective comparison points?

# Input Format

# The first line contains 3 space-separated integers, a0, a1, and a2, describing the respective values in triplet A.
# The second line contains 3 space-separated integers, b0, b1, and b2, describing the respective values in triplet B.

# Constraints

# - 1 <= ai <= 100
# - 1 <= b1 <= 100

# Output Format

# Print two space-separated integers denoting the respective comparison points earned by Alice and Bob.

# Sample Input

# 5 6 7
# 3 6 10

# Sample Output

# 1 1

defmodule CompareTheTriplets do
  def main do
    a = get_list()
    b = get_list()

    compare(a, b) |> IO.puts
  end

  def check(a, b) do
    if (a > b), do: 1, else: 0
  end

  def compare([a0, a1, a2] = _a, [b0, b1, b2] = _b) do
    a_result = check(a0, b0) + check(a1, b1) + check(a2, b2)
    b_result = check(b0, a0) + check(b1, a1) + check(b2, a2)

    "#{a_result} #{b_result}"
  end

  def get_list do
    IO.gets("")
    |> String.trim
    |> String.split
    |> Enum.map(fn i -> String.to_integer(i) end)
  end
end

CompareTheTriplets.main()
