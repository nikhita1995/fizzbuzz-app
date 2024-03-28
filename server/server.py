from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_jwt_extended import create_access_token, unset_jwt_cookies, jwt_required, JWTManager

app = Flask(__name__)
CORS(app)

#The secret key is passed to the JWTManager
app.config["JWT_SECRET_KEY"] = "fizz-buzz-fizzbuzz"
jwt = JWTManager(app)

#Endpoint to generate jwt token on login
@app.route('/login', methods=["POST"])
def login():
    username = request.json.get("email", None)
    password = request.json.get("password", None)
    if username != "admin" or password != "admin":
        return {"message": "Invalid Username or Password"}, 401

    access_token = create_access_token(identity=username)
    response = {"access_token":access_token}
    return response


#Endpoint to fetch altered values of 1-100 numbers 
#API endpoint is successfully called on when the jwt token matches
@app.route("/numbers", methods=["GET"])
@jwt_required()
def getFizzBuzz():
    #using List comprehension with multiple if elif statements
    #If a number is multiple of 3 return "Fizz"
    #If a number is multiple of 5 return "Buzz"
    #If a number is multiple of both 3 & 5 return "FizzBuzz"
    #else the number is returned
    return [{"num": i, "val": "FizzBuzz"} if i%3 == 0 and i%5 == 0 
            else {"num": i, "val": "Fizz"} if i%3 == 0 
            else {"num": i, "val": "Buzz"} if i%5 == 0 
            else {"num": i, "val": str(i)} for i in range(1, 101)] 

#Endpoint to unset token on logout
@app.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"message": "Successfully Logged out"})
    unset_jwt_cookies(response)
    return response


if __name__ == "__main__":
    app.run(debug=True)