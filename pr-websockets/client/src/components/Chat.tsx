import React, { ChangeEvent, useState, useEffect, useRef } from 'react';

 

const Chat = () => {
    const webSocketUrl = "ws://localhost:8000/ws"

    const [socketConnected, setSocketConnected] = useState(false);
    const [message, setMessage] = useState<string>('')
    const [messageList, setMessageList] = useState<any[]>([])

    const ws = useRef<WebSocket>();

    const onChangeMessage = (event: ChangeEvent) => {
        setMessage((event.target as HTMLInputElement).value);
    };

    const onSendMessage = (event: MouseEvent|any) => {
        // message
        if (ws.current) ws.current.send(message)
        setMessage('');
        event.preventDefault() // onRest
    }


    useEffect(() => {
        if (!ws.current) {
            ws.current = new WebSocket(webSocketUrl);
            ws.current.onopen = () => {
              console.log("connected to " + webSocketUrl);
              setSocketConnected(true);
            }
            ws.current.onclose = (error) => {
                console.log("disconnect from " + webSocketUrl, error);
            };
            ws.current.onerror = (error) => {
                console.log("connection error " + webSocketUrl, error);
            };
            ws.current.onmessage = (event) => {
                console.log("connection data", event.data);
                // const data = JSON.parse(event.data);
                setMessageList((prevState) => [...prevState, event.data]);
            };
        }
        // return () => {
        //     console.log("clean up");
        //     if (ws.current) ws.current.close();
        // };
    }, [])

    return (
        <>
            <input 
                type="text" 
                id="messageText" 
                autoComplete={"off"}
                name="message"
                placeholder="메시지"
                onChange={onChangeMessage}
                value={message}
            />
            <button onClick={onSendMessage}>Send</button>

            <ul id='messages'>
                {messageList.map((message: string, index: number) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </>
    )

}

export default Chat