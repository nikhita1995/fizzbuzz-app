from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


#Endpoint to fetch altered values of 1-100 numbers 
@app.route("/numbers", methods=["GET"])
def getFizzBuzz():
    print("Fizz Buzz Api Running!")
    return {"msg": "Fizz Buzz Api Running!"}


if __name__ == "__main__":
    app.run(debug=True)