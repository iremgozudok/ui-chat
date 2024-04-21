"use client";
import { useState } from "react";
import botMessages from "./data/botMessages";
import RenderChatBubble from "./components/RenderChatBubble";
import RenderSendIcon from "./assets/icon.js";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          isUser: true,
          message: newMessage,
          timestamp: new Date(),
        },
      ]);
      scrollToBottom();
      setNewMessage("");
    }
   
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * botMessages.length);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          isUser: false,
          message: botMessages[randomIndex],
          timestamp: new Date(),
        },
      ]);
      scrollToBottom();
    }, 1000);
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      const chatContainer = document.querySelector(".overflow-y-scroll");
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 100);
  };

  return (
    <div className="container mx-auto h-screen max-h-screen py-5">
      <div className="h-full rounded-xl shadow-xl flex flex-col justify-end bg-gray-900">
        {/* Chat bubbles */}
        <div className="p-2 px-4 overflow-y-scroll">
          {messages.map((message, index) => (
            <RenderChatBubble key={index} message={message} />
          ))}
        </div>

        {/* Input and send message button */}
        <form className="flex justify-between space-x-4 items-center bg-gray-700 w-full py-3 px-5 rounded-b-xl">
          <input
            placeholder="Example message..."
            type="text"
            className="grow shrink bg-gray-600 rounded-lg py-2 px-4 focus:outline-none text-white"
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
          />
          <button
            className="shrink-0 grow-0"
            type="submit"
            onClick={sendMessage}
          >
            <RenderSendIcon />
          </button>
        </form>
      </div>
    </div>
  );
}
