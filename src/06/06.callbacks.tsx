import {ChangeEvent, MouseEvent} from 'react';

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert('User has been deleted')
    }

    const onTextChange = () => {
        console.log('text have been changed')
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
    }

    const focusLost = () => {
        console.log('focus lost')
    }

    return <div>
        <textarea onChange={onTextChange} onBlur={focusLost}>Dimych</textarea>
        <input onChange={onAgeChanged} type={"number"}/>
        <button name="delete" onClick={deleteUser}>delete</button>
    </div>
}