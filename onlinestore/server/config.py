import pymongo
import certifi

connection_sting = "mongodb+srv://millerjrcassius:<Password1001>@fsdi-107.sbi0y.mongodb.net/?retryWrites=true&w=majority&appName=fsdi-107"

client = pymongo.MongoClient(connection_string, tlsCAFile=certifi.where())
db = client.get_database("organika")
