import React, {useState} from "react";

export function NewContact({onAdd, onCancel}) {
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [phone, setPhone] = useState('');


    const onNameChange = (e) => {
        setName(e.target.value)
    }
    const onSurNameChange = (e) => {
        setSurName(e.target.value)
    }
    const onPhoneChange = (e) => {
        setPhone(e.target.value)
    }
    const addNewUser = () => {
        if (name.length === 0) return
        if (surName.length === 0) return
        if (phone.length === 0) return
        onAdd(name, surName, phone)
        onCancel()
    }

        return <div>
            <input placeholder="Имя" type="text" value={name} onChange={onNameChange}/>
            <input placeholder="Фамилия" type="text" value={surName} onChange={onSurNameChange}/>
            <input placeholder="Телефон" type="number" value={phone} onChange={onPhoneChange}/>
            <button onClick={addNewUser}>Coхранить</button>
            <button onClick={onCancel}>Отменить</button>
        </div>

}
