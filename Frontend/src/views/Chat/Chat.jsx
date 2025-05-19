import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState(null);
  const [isTyping, setIsTyping] = useState(false);


  useEffect(() => {
    const tempSocket = io('http://localhost:3000');
    tempSocket.connect();

    tempSocket.on('message', (message) => {
      if (message.role === 'assistant') {
        simulateTyping(message);
      } else {
        setMessages((prev) => [...prev, message]);
      }
    });

    setSocket(tempSocket);
  }, []);

const simulateTyping = (message) => {
  let text = message.content;
  let index = 0;
  let typed = '';

  setIsTyping(true); // ⬅️ Start typing

  setMessages((prev) => [...prev, { ...message, content: '' }]);

  const interval = setInterval(() => {
    typed += text[index];
    index++;
    setMessages((prevMessages) => {
      const updated = [...prevMessages];
      updated[updated.length - 1] = { ...message, content: typed };
      return updated;
    });

    if (index === text.length) {
      clearInterval(interval);
      setIsTyping(false); // ⬅️ End typing
    }
  }, 30);
};


  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      role: 'user',
      content: input,
    };

    socket.emit('message', { input, messages });
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-base-100 shadow-xl rounded-lg flex flex-col h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-base-300 font-bold text-lg">
          Chat App
        </div>

       {/* Chat messages */}
<div className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
  {messages.map((msg, index) => (
    <div key={index} className={`chat ${msg.role === 'user' ? 'chat-end' : 'chat-start'}`}>
      <div className="chat-bubble">
        {msg.content}
      </div>
    </div>
  ))}

  {/* Typing bubble only for assistant */}
  {isTyping && (
    <div className="chat chat-start">
      <div className="chat-bubble bg-base-300 text-base-content animate-pulse">
        <span className="loading loading-dots loading-md"></span>
      </div>
    </div>
  )}
</div>


        {/* Input area */}
        <div className="p-4 border-t border-base-300 flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="input input-bordered flex-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage} className="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
