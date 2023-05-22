Chat Application
This is a simple chat application that allows users to join rooms and communicate with each other in real-time. The application is designed and developed using the following technologies:

Backend: Python with Flask framework and SQLite database
Frontend: HTML, CSS, and JavaScript with Socket.IO library
Design and Development
The application consists of two main components: the backend server and the frontend interface. The backend server is responsible for handling the communication between clients, managing chat rooms, and storing chat history in the SQLite database. The frontend interface provides the user interface for joining rooms, sending and receiving messages, and displaying chat history.

The backend server is implemented using the Flask framework, which allows us to handle HTTP requests, establish WebSocket connections using Socket.IO, and interact with the SQLite database using the sqlite3 module. The server handles events such as joining and leaving rooms, sending and receiving messages, and updating chat history.

The frontend interface is implemented using HTML, CSS, and JavaScript. It utilizes Socket.IO to establish a WebSocket connection with the server, enabling real-time communication. The interface allows users to join rooms, send messages, and receive messages from other users in the same room. It also displays the chat history by fetching data from the server's API endpoint.

Launching the Application
To launch the application on your local machine, follow these steps:

Clone the repository to your local machine.
Ensure you have Python and Flask installed on your system.
Open a terminal or command prompt and navigate to the project directory.
Install the required dependencies by running the following command:
 pip install -r requirements.txt

Launch the backend server by running the following command
 python sever.py   
 python gptserver.py
 The server should start running on http://127.0.0.1:5000.and http://127.0.0.1:8000

 Open a web browser and visit http://127.0.0.1:5000 to access the chat application.

 Running Tests and Validation
The application does not currently have automated tests implemented. However, you can manually test and validate the functionality of the application by following these steps:

Launch the application as described in the previous section.
Open multiple browser windows or tabs and visit http://127.0.0.1:5000 to simulate multiple users.
Join different rooms from different browser windows or tabs.
Send messages from one user and verify that the messages are received by other users in the same room.
Leave and join different rooms to test the room joining and leaving functionality.
Verify that the chat history is displayed correctly by visiting the API endpoint http://127.0.0.1:5000/get_chat_history in a browser or using a tool like cURL.
Feel free to explore the codebase and make any necessary modifications or enhancements to suit your specific requirements.

For the gpt server ,  change the api key ,before use it

