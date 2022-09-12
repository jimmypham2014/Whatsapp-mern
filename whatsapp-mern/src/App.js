import React, {useEffect,useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js'
import axios from './axios'


function App() {

  const [messages,setMessages] = useState([])

  useEffect(()=>{
      axios.get('/messages/sync').then(response=>{
          setMessages(response.data)
        })
  },[])
  //useeffect ---> run a piece of code when the app loads once

  useEffect(() =>{
    var pusher = new Pusher('a7bfdc572ee08aa57ce2', {
      cluster: 'us3'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      alert(JSON.stringify(newMessage));
      setMessages([...messages,newMessage])
    });
 //when the message, it ensures only one subcriber. in case of 50 ppl spamming, the browner refreshes constantly
    return () =>{
      channel.unbind_all();
      channel.unsubscribe()
    }
  },[messages]) //include the dependency here so the code wont refresh
 

  return (
    <div className="app">
       <div className="app__body">
         <Sidebar />
          <Chat messages ={messages}/>

       </div>

   

    </div>
  );
}

export default App;
