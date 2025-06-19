# Rectangle REST API

A simple REST API built with Express.js to calculate the area and perimeter of a rectangle.

## Features

- Calculate the **area** of a rectangle given its length and width.
- Calculate the **perimeter** of a rectangle given its length and width.
- Returns error messages for invalid or missing parameters.

## Endpoints

### `GET /area`

**Query Parameters:**
- `length` (number, required)
- `width` (number, required)

**Example Request:**
```
GET /area?length=5&width=3
```

**Example Response:**
```json
{
  "length": 5,
  "width": 3,
  "area": 15
}
```

---

### `GET /perimeter`

**Query Parameters:**
- `length` (number, required)
- `width` (number, required)

**Example Request:**
```
GET /perimeter?length=5&width=3
```

**Example Response:**
```json
{
  "length": 5,
  "width": 3,
  "perimeter": 30
}
```

---

## Error Handling

If parameters are missing, invalid, or negative, the API returns:
```json
{
  "error": "Invalid query parameters"
}
```

## Getting Started

1. **Install dependencies:**
   ```
   npm install express
   ```

2. **Run the server:**
   ```
   node index.js
   ```
   or, if you have a `start` script in `package.json`:
   ```
   npm start
   ```

3. **Access the API:**  
   The server runs on [http://localhost:3000](http://localhost:3000) 