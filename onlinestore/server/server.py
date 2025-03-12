from flask import Flask , request
import json


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

products = []
@app.get("/api/products")
def get_products():
  return json.dumps(products)

@app.post("/api/products")
def post_products():
  product = request.get_json()
  products.append(product)
  print(product)
  return json.dumps(product)

@app.put("/api/products/<int:index>")
def put_products(index):
  updatedProduct = request.get_json()
  if 0<= index < len(products):
    products[index]=updatedProduct
    return json.dumps(updatedProduct)
  else: 
    return "that index does not exist"
  
# just remember that to delete an element from a list, you need to use - pop
@app.delete("/api/products/<int:index>")
def delete_products(index):
  # deletedProduct = request.get_json()
  if 0<= index < len(products):
  #    ---> Here we need to specify wich element from products list will be removed
    deletedProduct = products.pop(index)
    return json.dumps(deletedProduct)
  else: 
    return "that index does not exist" 
  
# try this to the patch, but use this logic instead - list[index].update(object)

@app.patch("/api/products/<int:index>")
def patch_products(index):
  patchProducts = request.get_json()
  if 0<= index < len(products):
    products[index].update(patchProducts)
    return json.dumps(patchProducts)
  else:
    return "That index does not exist"

app.run(debug=True)# this pass the saved info to the server