import { Avatar,IconButton} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import React from 'react'
import './Chat.css'

function Chat() {
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
                    <p className='chat__message'>
                        <span className='chat__name'>Sonny</span>
                        This is a message
                        <span className='chat__timestamp'>
                        {new Date().toUTCString()}
                        
                        </span>
            
                     </p>
                     <p className='chat__message chat__receiver'>
                        <span className='chat__name'>Sonny</span>
                        This is a message
                        <span className='chat__timestamp'>
                        {new Date().toUTCString()}
                        
                        </span>
            
                     </p>
            </div>
                
            <div className='chat__footer'>
             <InsertEmoticonOutlinedIcon/>

             <form>
             <input placeholder='Type a message' type='text'/>
             
                <button type='submit'>Send a message</button>
             
             </form>
                <MicNoneOutlinedIcon/>

            </div>

        </div>
    )
}

export default Chat
