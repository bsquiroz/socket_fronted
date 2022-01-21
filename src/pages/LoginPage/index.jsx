import React from "react";
import "./styles.css";

export const LoginPage = ({ handleValues, joinRoom }) => {
    return (
        <div className="joinChatContainer">
            <h3>Unete a un chat</h3>
            <input
                type="text"
                placeholder="Ingrese su usuario"
                onChange={(event) => {
                    handleValues("userName", event.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Ingrese una sala"
                onChange={(event) => {
                    handleValues("room", event.target.value);
                }}
            />
            <button onClick={joinRoom}>Ingresar</button>
        </div>
    );
};
