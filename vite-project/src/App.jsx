import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const projectID = '82c4ec8e-00c7-4d54-bdb8-88e4e88e98a8';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;


  return (
    <>
      <ChatEngine 
        height='100vh'
        width="100%"
        projectID= {projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </>
  )
}

export default App