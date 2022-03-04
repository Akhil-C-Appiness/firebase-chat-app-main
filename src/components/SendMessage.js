import React, { useState } from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase'
import { Input, Button } from '@material-ui/core'
import Picker from "emoji-picker-react";
function SendMessage({ scroll }) {
    const [msg, setMsg] = useState("")
    const [showPicker, setShowPicker] = useState(false);
    const onEmojiClick = (event, emojiObject) => {
        setMsg(prevInput => prevInput + emojiObject.emoji);
        setShowPicker(true);
      };
    async function sendMessage(e) {
        e.preventDefault()
        const { uid } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg("")
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} 
                    placeholder='Message...' type="text" 
                    value={msg} 
                    onChange={e => setMsg(e.target.value)} />
                    <img className="emoji-icon" 
                    src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                    alt='xoxo'
                     onClick={() => setShowPicker(val => !val)} />
                    {showPicker && <Picker pickerStyle={{ width: '100%' }} 
                    onEmojiClick={onEmojiClick} />}
                    
                    {msg.length>0 && msg.trim().length>0? <Button 
                    style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}}
                     type="submit">Send</Button>: false}
                </div>
            </form>
        </div>
    )
}
export default SendMessage