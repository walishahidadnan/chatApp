import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return (
    <>
      <ChatEngine 
        height='100vh'
        width="100%"
        projectID= '82c4ec8e-00c7-4d54-bdb8-88e4e88e98a8'
        userName='ShahidAdnan'
        userSecret='Kakakhail@2019'
        renderChatfeed={(chatAppprops)=> <ChatFeed {...chatAppprops} />}
      />
    </>
  )
}

export default App