import React from "react";

export function Contact({name, surName, phone, onDelete}) {

    return <tr>
        <td>{name}</td>
        <td>{surName}</td>
        <td>{phone}</td>
        <td>
            <button onClick={onDelete}>Удалить</button>
        </td>
    </tr>
}