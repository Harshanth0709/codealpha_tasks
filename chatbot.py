def get_response(msg):

    # Greetings
    if msg in ["hello", "hi", "hey", "good morning", "good evening"]:
        return "Hello! Nice to meet you."

    # Basic conversation
    elif msg == "how are you":
        return "I am fine. How are you?"

    elif msg == "what is your name":
        return "My name is ChatBot."

    elif msg == "who created you":
        return "I was created using Python."

    elif msg == "what can you do":
        return "I can chat with you and answer simple questions."

    # Time & Date
    elif msg == "what time is it":
        return "Sorry, I cannot tell the exact time yet."

    elif msg == "what is today's date":
        return "I cannot access the current date right now."

    # Personal Questions
    elif msg == "where are you from":
        return "I live inside this computer."

    elif msg == "how old are you":
        return "I do not have an age like humans."

    elif msg == "are you a robot":
        return "Yes, I am a chatbot."

    # Education
    elif msg == "what is python":
        return "Python is a popular programming language."

    elif msg == "what is java":
        return "Java is an object-oriented programming language."

    elif msg == "what is html":
        return "HTML is used to create web pages."

    elif msg == "what is css":
        return "CSS is used to style web pages."

    elif msg == "what is javascript":
        return "JavaScript adds interactivity to websites."

    # Fun
    elif msg == "tell me a joke":
        return "Why do programmers prefer dark mode? Because light attracts bugs!"

    elif msg == "tell me a fact":
        return "Python was created by Guido van Rossum."

    elif msg == "who is your favorite superhero":
        return "I like Iron Man because he loves technology."

    # Motivation
    elif msg == "motivate me":
        return "Success comes from consistent effort."

    elif msg == "i am sad":
        return "I hope things improve soon. Try talking to a friend or taking a short break."

    elif msg == "i am happy":
        return "That's wonderful to hear!"

    # College
    elif msg == "which course is best":
        return "The best course depends on your interests."

    elif msg == "what is ai":
        return "AI stands for Artificial Intelligence."

    elif msg == "what is machine learning":
        return "Machine Learning enables computers to learn from data."

    elif msg == "what is data science":
        return "Data Science is the process of extracting insights from data."

    # Weather
    elif msg == "how is the weather":
        return "I cannot check live weather yet."

    # Food
    elif msg == "what is your favorite food":
        return "I don't eat food, but pizza sounds popular."

    # Goodbye
    elif msg in ["bye", "goodbye", "see you"]:
        return "Goodbye! Have a great day."

    else:
        return "Sorry, I don't understand that question."
# Main Chat Loop
print("ChatBot: Hello! Type 'bye' to exit.")

while True:
    user_message = input("You: ").lower()

    response = get_response(user_message)
    print("ChatBot:", response)

    if user_message in ["bye", "goodbye", "see you"]:
        break    