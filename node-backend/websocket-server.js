
import {WebSocketServer} from "ws"
const wss = new WebSocketServer({port: 8080})

wss.on("connection", (ws) => {
    console.log("new client connected")

    ws.send("welcome to the websocket server")

    ws.on("message", (message) => {
        console.log("received:", message.toString());
        ws.send(`you said: ${message}`);
    })

    ws.on("close", () => {
        console.log("client disconnected")
    })
})

console.log("websocket server running on ws://localhost:8080")