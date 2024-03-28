# Fizz Buzz Application

Guide to run the application locally (I am using Windows machine)
Clone the repo in code editor from GitHub: https://github.com/nikhita1995/fizzbuzz-app

# Python setup
Pre-requisites: 
1. python3 should be installed on the system 
2. install python plugin from visual studio market place (if using VS code)

# React setup
Pre-requisites:
1. Install node (https://kinsta.com/blog/how-to-install-node-js/) and check below in cmd

node -v
npm -v
 

# Execute below steps in 2 different terminals
(Terminal 1) Steps: (for python service)
1.	Go to server folder (fizzbuzz-app/server) and run below
pip install -r requirements.txt
2.	To start the service run below
python server.py

(Terminal 2) Steps: (for react ui)
1.	Go to the client folder (fizzbuzz-app/client) and run below
npm install
2.	Npm install will take some time to complete. Once all the packages run below command to start the UI
npm start

Both UI And Service should be up and running....


# Application workflow: (Authentication for login is handled with flask jwt)

User provides below input in Username and password field:
Username: admin
Password: admin

The request is passed to python service having endpoint "/login"
The Username and Password values are validated.
If the Username/Password is invalid (i.e other than admin) -- error is thrown and user is provided with the error message to provide valid credentials

else the jwt token is generated and user is redirected to Welcome page.
(Here authentication is handled using jwt token)

The generated token is passed to UI and user is successfully logged in.

The UI displays 3 buttons on the screen -
1. Fetch Data
2. Clear Data
3. Logout

Details for each button are as follows:
1. Fetch Data
When the user clicks on the fetch data button the "/numbers" endpoint is hit.
Now with this request the authentication token is passed with which the request is validated and the data is returned.

Some details about the data returned - 
This API returns altered values for 1-100 numbers based on below login
#If a number is multiple of 3 return "Fizz"
#If a number is multiple of 5 return "Buzz"
#If a number is multiple of both 3 & 5 return "FizzBuzz"
#else the number is returned

Once the data is fetched the button is disabled and "Clear Data" button is enabled.

2. Clear Data
When the clear data button is clicked the data is cleared without calling any API.
This button is enabled only if the data is present else it is disabled.

3. Logout
When the user clicks on Logout button user is redirected to Login screen and the JWT token is unset.


# OWASP top 10:
I have taken care of Unvalidated Redirects & Forwards vulnerability
(User is not allowed fetch the data unless he/she is logged with required credentials)

Vulnerability I need to take care of -  Sensitive Data Exposure.
(That can be achieved by encrypting the user details using saltd hashing functions.)


# Yet to achieve below:
1. Make UI & Service configurable for different env (dev, test, prod)
2. Add css styles
3. Enhance code with reusable code
4. Remove the hard coded values for user name & password. Instead use sql for checking if the user exists.
5. Encrypted password when calling service.
6. Current scope of project only has login page, if the user does not exit add registration page and add uses to db.
7. Use redux store for state management.
8. Add Loaders on UI when the API calls are happening