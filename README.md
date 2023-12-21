Framework used Node, Express
Database used MongoDB
mongoose library to interact with mongoDB
View engine used ejs
bodyParser to parse the JSON object
Axios to fetch the 3 party's API

Tried to follow MVC architecture
steps: 
1) Run : npm init
2) In config/config.JSON : PASTE uri(for DB, If using locally paste local URI) and port(app not deployed hence of no use)

 3)  /api/Roxi/setController   -> will fetch and Store all product details in DB

After this comment 'line 16', "setupController(app)"
and uncomment 'line 17 ', "apicontroller(app)"



FOR ALL TRASACTION    :    '/api/transaction/'
FOR STATISTICS OF PARTICULAR MONTH :   '/api/transaction/statistics/:month'
FOR FINAL API CALLING OTHER ROUTES :     '/api/transaction/final'

