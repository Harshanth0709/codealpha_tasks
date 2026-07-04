import random

words = ["python", "computer", "programming", "keyboard", "internet"]

word = random.choice(words)

guessed_letters = []
attempts = 6

print("Welcome to Hangman!")

while attempts > 0:

    guess = input("\nEnter a letter: ")

    if guess in guessed_letters:
        print("You already guessed that letter.")
        continue

    guessed_letters.append(guess)

    if guess not in word:
        attempts -= 1
        print("Wrong guess!")
        print("Attempts left:", attempts)

    correct_letters = 0

    for letter in word:
        if letter in guessed_letters:
            print(letter, end=" ")
            correct_letters += 1
        else:
            print("_", end=" ")

    print()

    if correct_letters == len(word):
        print("\nCongratulations! You guessed the word.")
        break

if attempts == 0:
    print("\nGame Over!")
    print("The word was:", word)