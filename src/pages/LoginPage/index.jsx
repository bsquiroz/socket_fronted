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

            <select>
                <option value="hide">-- Sala --</option>
                <option value="sala 1">Sala 1</option>
                <option value="sala 2">Sala 2</option>
                <option value="sala 3">Sala 3</option>
            </select>
            <button onClick={joinRoom}>Ingresar</button>
        </div>
    );
};
