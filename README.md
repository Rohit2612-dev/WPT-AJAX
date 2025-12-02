## AJAX Examples and Dashboard Application 🚀

This repository contains several examples demonstrating **Asynchronous JavaScript and XML (AJAX)** using the built-in `XMLHttpRequest` object, and a more complex **Dashboard application** that interacts with a mock REST API using `json-server`.

---

### 📂 File Structure Overview

| File Name | Type | Description |
| :--- | :--- | :--- |
| `ajaxEx.html` | HTML | Simple page with buttons to trigger an AJAX GET request. |
| `ajaxEx.js` | JavaScript | Contains the `XMLHttpRequest` logic for fetching data from a `rohit.txt` file (not included). |
| `ajax01.json` | JSON | A sample JSON file containing user credentials (username/password) for a login simulation. |
| `ajax01.js` | JavaScript | Script to perform an AJAX GET request to `ajax01.json` and validate user login details on form submission. |
| `ajax03.html` | HTML | A user registration form using Bootstrap styling. (No associated JS logic provided). |
| `dashboard.html` | HTML | A complete dashboard UI for viewing, adding, updating, and deleting products. Uses Bootstrap for styling. |
| `dashboard.css` | CSS | Simple styling for the dashboard, including a border for sections (`.myborder`). |
| `dashboard.js` | JavaScript | Contains the AJAX functions (`getData`, `deleteProduct`, `addProduct`, `getSingleProduct`, `updateProduct`) to perform **CRUD** (Create, Read, Update, Delete) operations against a REST API endpoint (`http://localhost:8888/products`). |
| `ajaxnotes.txt` | Text | Notes on setting up and running `json-server` to create a mock REST API for the dashboard application. |

---

### ⚙️ Setting up the Mock API (Prerequisite for Dashboard)

The `dashboard.js` file is designed to interact with a local server running a mock REST API. You can set this up using **json-server** as described in `ajaxnotes.txt`.

#### Steps to Run the Dashboard Locally:

1.  **Initialize npm:**
    ```bash
    npm init -y
    ```
2.  **Install `json-server`:**
    ```bash
    npm install json-server
    ```
3.  **Create a JSON Database File (e.g., `db.json`):**
    The `dashboard.js` functions expect a resource named `products`. You'll need a file like `db.json` with a structure similar to this (you can create this file yourself):
    ```json
    {
      "products": [
        { "id": 1, "pname": "Laptop", "pprice": "1200", "company": "TechCorp", "quantity": "5" }
      ]
    }
    ```
4.  **Start the Server:**
    Run the server on port `8888` (as referenced in `dashboard.js`):
    ```bash
    json-server --watch -p 8888 db.json
    ```
5.  **Access the Dashboard:**
    Open `dashboard.html` in your web browser. The AJAX functions in `dashboard.js` will now communicate with the mock API running on `http://localhost:8888`.

---

### 📝 Key AJAX Functions in `dashboard.js`

All functions utilize the `XMLHttpRequest` object to perform asynchronous requests to the mock API.

| Function | HTTP Method | URL Structure | Purpose |
| :--- | :--- | :--- | :--- |
| `getData()` | **GET** | `http://localhost:8888/products` | Fetches all product data and populates the HTML table. |
| `deleteProduct()` | **DELETE** | `http://localhost:8888/products/:id` | Deletes a product based on the entered `id`. |
| `addProduct()` | **POST** | `http://localhost:8888/products` | Adds a new product record using JSON data from the input fields. |
| `getSingleProduct()` | **GET** | `http://localhost:8888/products/:id` | Fetches details for a single product to pre-fill the update form. |
| `updateProduct()` | **PUT** | `http://localhost:8888/products/:id` | Updates an existing product record using JSON data from the update fields. |

---

### 🔑 Core AJAX Concepts Demonstrated

* **GET Request (Fetching Data):** Demonstrated in `getData()` and `ajaxEx.js` to retrieve data.
* **POST Request (Creating Data):** Demonstrated in `addProduct()` to send new data to the server.
* **PUT Request (Updating Data):** Demonstrated in `updateProduct()` to modify existing data.
* **DELETE Request (Deleting Data):** Demonstrated in `deleteProduct()` to remove a record.
* **`xhr.onload`:** Used as a callback to handle the response once the request is complete and successful (`dashboard.js`, `ajaxEx.js`).
* **`xhr.open(method, url, async)`:** Used to initialize a request.
* **`xhr.send(data)`:** Used to send the request, optionally including data (e.g., JSON payload for POST/PUT).
