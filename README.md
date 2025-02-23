# GO-Real-Time-Chat-App

This is a real-time chat application built with Go and WebSockets. The UI is styled to resemble Facebook Messenger, with messages aligned properly for senders (right side) and receivers (left side). The chat also includes date separators.

## Features
- Real-time messaging using WebSockets
- Messenger-style chat interface
- Date display (only shown once per day)
- Responsive message input and send button

## Prerequisites
Ensure you have the following installed:
- [Go](https://go.dev/dl/) (latest version recommended)
- A web browser (Chrome, Firefox, etc.)

## Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/deoninja/GO-Real-Time-Chat-App.git
cd GO-Real-Time-Chat-App
```

### 2. Run the Go Server
```sh
go run main.go
```
The server will start on `http://localhost:8080`.

### 3. Open the Chat App in a Browser
Go to:
```
http://localhost:8080
```
You can open multiple browser tabs to test real-time messaging.

## File Structure
```
GO-Real-Time-Chat-App
│── main.go           # Go server
│── public/
│   ├── index.html    # Chat UI
│   ├── styles.css    # Chat styles
│   ├── script.js     # WebSocket handling
```

## How It Works
1. The **Go server** (`main.go`) uses WebSockets to manage real-time communication.
2. The **frontend** (`public/index.html`, `script.js`, and `styles.css`) handles message rendering and interactions.
3. Messages are displayed with date separators, and sender messages appear on the right while receiver messages appear on the left.

## Troubleshooting
### WebSocket Connection Fails?
- Make sure the server is running (`go run main.go`).
- Try refreshing the browser.
- Check for errors in the browser console (F12 > Console).

## License
MIT License

