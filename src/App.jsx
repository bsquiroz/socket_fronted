import React, { useState } from "react";

import { LoginPage } from "./pages/LoginPage";
import { ChatPage } from "./pages/ChatPage";
import { socket } from "./services/sockets";

const initialState = {
    userName: "",
    room: "",
    isLogeed: false,
};

export const App = () => {
    const [valuesState, setValuesState] = useState(initialState);
    const { userName, room, isLogeed } = valuesState;

    const handleValues = (key, value) => {
        setValuesState({
            ...valuesState,
            [key]: value,
        });
    };

    const joinRoom = () => {
        if (userName !== "" && room !== "") {
            socket.emit("join_room", room);
            handleValues("isLogeed", true);
        }
    };

    return (
        <div className="App">
            {isLogeed ? (
                <ChatPage socket={socket} username={userName} room={room} />
            ) : (
                <LoginPage handleValues={handleValues} joinRoom={joinRoom} />
            )}
        </div>
    );
};
