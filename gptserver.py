from flask import Flask, request, jsonify, render_template
import openai

app = Flask(__name__, template_folder="temp")
openai.api_key = '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'

message_history = [{"role": "system", "content": "You are a 5 turn text adventure game."},
    {"role": "user", "content": "Give me a text adventure game. It's up to you to describe the game scene; the plot of the tomb robbery; and it's up to me to decide the actions to take. Please describe in detail all the items and creatures in the scene. If the characters in the scene are talking or talking to the protagonist; please output the dialogue content for me to choose; if the protagonist interacts with the task creatures in the scene; please describe the interaction process in detail; there should be no repeated scenes; the story should be twists and turns. Describe only one scene at a time."}]

def generate_response(user_input, message_history):
    message_history.append({"role": "user", "content": user_input})

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=message_history
    )

    reply_content = response.choices[0].message.content
    message_history.append({"role": "assistant", "content": reply_content})

    return reply_content, message_history

@app.route('/')
def index():
    return render_template('chatgpt.html')

@app.route('/chathis', methods=['POST'])
def chathis():
    global message_history  

    data = request.get_json()
    user_input = data['message']

    reply_content, message_history = generate_response(user_input, message_history)

    return jsonify({'response': reply_content})

if __name__ == '__main__':
    app.run(debug=True, port=8000)
