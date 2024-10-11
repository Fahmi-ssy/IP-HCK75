API Documentation for Inventory Routes


Base URL
http://localhost:3000


Inventory Endpoints
1. Get All Inventories
URL: /inventory/

Method: GET

Description: Retrieves a list of all inventories.

Authentication: Not required

Response:

200 OK: Returns a list of inventory items

{
  "data": [
    {
      "id": 1,
      "name": "Product A",
      "price": 100,
      "quantity": 50,
      "description": "Description of Product A"
    },
    {
      "id": 2,
      "name": "Product B",
      "price": 150,
      "quantity": 30,
      "description": "Description of Product B"
    }
  ]
}

500 Internal Server Error: If there's an error in retrieving the data.

2. Create an Inventory Item
URL: /inventory/

Method: POST

Description: Creates a new inventory item.

Authentication: Required (Bearer token)

Authorization: Required

Request Body:

JSON:
{
  "name": "Product A",
  "price": 100,
  "quantity": 50,
  "description": "Description of Product A"
}

Response:

201 Created: Returns the created inventory item.

{
  "id": 3,
  "name": "Product A",
  "price": 100,
  "quantity": 50,
  "description": "Description of Product A"
}

500 Internal Server Error: If there's an error in creating the inventory item.

400 Bad Request: If the request body is invalid.
401 Unauthorized: If the user is not authenticated.
403 Forbidden: If the user does not have authorization.
500 Internal Server Error: If there's an error in creating the inventory item.

Get Inventory by ID
URL: /inventory/:id

Method: GET

Description: Retrieves details of a specific inventory item by its ID.

Authentication: Required (Bearer token)

Authorization: Not required

Parameters:

Path:
id (integer): ID of the inventory item to retrieve.
Response:

200 OK: Returns the inventory item details
{
  "id": 1,
  "name": "Product A",
  "price": 100,
  "quantity": 50,
  "description": "Description of Product A"
}

404 Not Found: If no inventory item is found with the specified ID.
401 Unauthorized: If the user is not authenticated.
500 Internal Server Error: If there's an error in retrieving the data.

Update Inventory by ID
URL: /inventory/:id

Method: PUT

Description: Updates an existing inventory item by its ID.

Authentication: Required (Bearer token)

Authorization: Required

Parameters:

Path:
id (integer): ID of the inventory item to update.
Request Body:

JSON:  
{
  "name": "Product A Updated",
  "price": 120,
  "quantity": 60,
  "description": "Updated description of Product A"
}
Response:

200 OK: Returns the updated inventory item

{
  "id": 1,
  "name": "Product A Updated",
  "price": 120,
  "quantity": 60,
  "description": "Updated description of Product A"
}
400 Bad Request: If the request body is invalid.
401 Unauthorized: If the user is not authenticated.
403 Forbidden: If the user does not have authorization.
404 Not Found: If no inventory item is found with the specified ID.
500 Internal Server Error: If there's an error in updating the item.

Delete Inventory by ID
URL: /inventory/:id

Method: DELETE

Description: Deletes an inventory item by its ID.

Authentication: Required (Bearer token)

Authorization: Required

Parameters:

Path:
id (integer): ID of the inventory item to delete.
Response:

200 OK: Returns a success message
{
  "message": "Inventory item deleted successfully."
}
401 Unauthorized: If the user is not authenticated.
403 Forbidden: If the user does not have authorization.
404 Not Found: If no inventory item is found with the specified ID.
500 Internal Server Error: If there's an error in deleting the item.

Notes:
Authentication: The user must include a valid access_token in the Authorization header for routes that require authentication. For example:
Authorization: Bearer your_access_token
Authorization: The user must have the necessary authorization to perform certain actions. For example, to create or update an inventory item, the user must have the "create" or "update" permission.



