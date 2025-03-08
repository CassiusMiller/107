from flask import Flask 
from flask import json

app = Flask(__name__)

#this is an endpoint
@app.get("/")
def home():
  return "Hello from Flask"

@app.post("/")
def homepost():
  return "thats not allowed"

@app.get("/about")
def about():
  return "Hello from About page"

@app.get("/info")
def info():
  name = {"name": "Clay M"}
  return json.dump(name)

app.run(debug=True)# this pass the saved info to the server