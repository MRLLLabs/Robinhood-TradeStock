# Robinhood-TradeStock

Step 1:
Run npm i to install dependencies

Step 2: 
Create a database named 'robinhood' in MySQL. 

Step 3:
In the server directory in database.js file on line 3, you will need to change the username
and password to match your environment. I currently have it set to 'root' and ''. 

Step 4: 
To populate DB:
npm run db:setup

Step 5:
To run server: 
npm start 

Step 6: 

In app.jsx line 48, I enter the ticker symbol to be used. Currently it's set to 'JJB'. If you want to test a different company, you can change the ticker symbol here. 

Also, in server.js line 16, a random User Id is being chosen to test. If you'd like a specific user, you can change the id number here. 

Step 7: 

If you need to change the port number, it's in server directory in start.js file. 
