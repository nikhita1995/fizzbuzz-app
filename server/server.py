from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/login', methods=["POST"])
def login():
    response = {"message":"Successfully Logged In"}
    return response


#Endpoint to fetch altered values of 1-100 numbers 
@app.route("/numbers", methods=["GET"])
def getFizzBuzz():
    #using List comprehension with multiple if elif statements
    #If a number is multiple of 3 return "Fizz"
    #If a number is multiple of 5 return "Buzz"
    #If a number is multiple of both 3 & 5 return "FizzBuzz"
    return [{"num": i, "val": "FizzBuzz"} if i%3 == 0 and i%5 == 0 
            else {"num": i, "val": "Fizz"} if i%3 == 0 
            else {"num": i, "val": "Buzz"} if i%5 == 0 
            else {"num": i, "val": str(i)} for i in range(1, 101)] 

@app.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"message": "Successfully Logged out"})
    return response


if __name__ == "__main__":
    app.run(debug=True)