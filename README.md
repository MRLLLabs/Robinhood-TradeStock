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

In app.jsx line 48, I enter the ticker symbol to be used. You'll have to look in the database and grab a ticker symbol that is created from the seeding of the data. 

Also, in server.js line 16, a random User Id is being chosen to test. If you'd like a specific user, you can change the id number here. 

Step 7: 

If you need to change the port number, it's in server directory in start.js file. 




GET '/api/stocks/:id'

{   id: 2,
    name: "AAPL",
    price: 23.33,
    CEO: "Andrie",
    employees: 12,
    founded: 1989
}

POST '/api/transactions/'

{   
    type: 'buy'
    user_id: 3,
    stock_id: NVDA,
    total_stocks: total
}

DELETE '/api/transactions/:id'

{   
    
}

PUT '/api/transactions/:id'

{   
    type: 'buy'
    user_id: 3,
    stock_id: NVDA,
    total_stocks: total
}
