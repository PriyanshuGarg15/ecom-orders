# Order Microservice

The Order Microservice handles various operations related to orders, including order creation, retrieval of order details, and administrative tasks. It ensures smooth processing of orders placed by users and facilitates efficient management of the order lifecycle.

The microservice is hosted on AWS at the following URL:

http://ecom-user-lb-321143357.ap-south-1.elb.amazonaws.com:4042

## Routes

### Admin Routes

#### Get All Orders

- **Route**: `/api/admin/orders`
- **Method**: GET
- **Description**: Retrieve a list of all orders. (Requires admin privileges)

#### Update, Delete Order

- **Route**: `/api/admin/order/:id`
- **Method**: 
  - PUT: Update details of a specific order.
  - DELETE: Remove an order from the system. (Requires admin privileges)

### User Routes

#### Create New Order

- **Route**: `/api/order/new`
- **Method**: POST
- **Description**: Place a new order.

#### Get Single Order Details

- **Route**: `/api/order/:id`
- **Method**: GET
- **Description**: Retrieve detailed information about a specific order.

#### Get User's Orders

- **Route**: `/api/orders/me`
- **Method**: GET
- **Description**: Retrieve a list of orders placed by the authenticated user.

## Dependencies

- Express.js: Web framework for Node.js
- Mongoose: MongoDB object modeling tool

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set environment variables.
4. Run the microservice using `npm start`.

## Contributors

- [Priyanshu Garg](#) - Developer
