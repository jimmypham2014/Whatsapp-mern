import { Avatar,IconButton} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import React, {useState} from 'react'
import axios from './axios'
import './Chat.css'

function Chat({messages}) {
    const [input,setInput] = useState("")

    const sendMessage = async (e) =>{
         e.preventDefault();

         await axios.post('/messages/new',{
             message: input,
             name: "DEMO APP",
             timestamp: "just now",
             received:false
         })

         setInput('');
    }

    return (
        <div className='chat'>
           <div className='chat__header'>
                <Avatar />

                <div className='chat__headerInfo'>
                        <h3>Room Name</h3>
                        <p>Last Seen at ...</p>
                </div>
                <div className='chat__headerRight'>
                <IconButton>
                <SearchOutlinedIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>
                <IconButton>
                <AttachFileIcon/>
                </IconButton>
                </div>
                
           </div>

            <div className='chat__body'>
    
            {messages.map((message)=>(
                <p className={`chat__message ${message.received && "chat__receiver"}`}
                >
                        <span className='chat__name'>{message.name}</span>
                        {message.message}
                        <span className='chat__timestamp'>{message.timestamp}</span>
                     </p> 
            ))}
            </div>
                
            <div className='chat__footer'>
             <InsertEmoticonOutlinedIcon/>

             <form>
             <input value={input} onChange={(e) => setInput(e.target.value)} 
                placeholder='Type a message' 
                type='text'/>
             
                <button onClick = {sendMessage} type='submit'>Send a message</button>
             
             </form>
                <MicNoneOutlinedIcon/>

            </div>

        </div>
    )
}

export default Chat
