# proeject-draft
it needs to import flask import Flask, render_template, session, request , redirect, url_for,jsonify
import sqlite3
from werkzeug.security import generate_password_hash,check_password_hash
from flask_socketio import SocketIO, send, emit, join_room, leave_room
import openai
import eventlet


put all html file into a folder"temp" , or change the directory before complies

For the gpt server ,  change the api key ,before use it

//同时打开两个服务器，他们分别在5000和8000端口，点击fantastic game之后需要点击一次send