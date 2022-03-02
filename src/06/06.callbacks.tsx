import {ChangeEvent, MouseEvent, useState} from 'react';
import '../14/14'

export const User = () => {
    // Сделал useState чтобы ошибки не было
    const [value, setValue] = useState<string>("Dimych")
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert('User has been deleted')
    }

    const onTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
        console.log('text have been changed')
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
    }

    const focusLost = () => {
        console.log('focus lost')
    }

    return <div>
        <textarea value={value} onChange={onTextChange} onBlur={focusLost}/>
        <input onChange={onAgeChanged} type={"number"}/>
        <button name="delete" onClick={deleteUser}>delete</button>
    </div>
}