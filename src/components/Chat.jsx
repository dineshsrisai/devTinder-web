import { useState } from "react";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { targetUserId } = useParams();

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Obi-Wan Kenobi",
      text: "You were the Chosen One!",
      position: "start",
      time: "12:45",
      image: "https://img.daisyui.com/images/profile/demo/kenobee@192.webp",
    },
    {
      id: 2,
      sender: "Anakin",
      text: "I hate you!",
      position: "end",
      time: "12:46",
      image: "https://img.daisyui.com/images/profile/demo/anakeen@192.webp",
    },
  ]);

  console.log(targetUserId);

  return (
    <div className="w-1/2 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col">
      <h1 className="p-5 border-b border-gray-600">Chat</h1>

      <div className="flex-1 overflow-scroll p-5">
        {messages.map((msg, idx) => {
          return (
            <div
              key={idx}
              className={`chat ${
                msg.position === "start" ? "chat-start" : "chat-end"
              }`}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt={msg.sender} src={msg.image} />
                </div>
              </div>

              <div className="chat-header">
                {msg.sender}
                <time className="text-xs opacity-50 ml-2">{msg.time}</time>
              </div>

              <div className="chat-bubble">{msg.text}</div>
            </div>
          );
        })}
      </div>

      <div className="p-5 border-t border-gray-600 flex items-center gap-2">
        <input
          className="flex-1 border border-gray-600 text-white rounded p-2"
          placeholder="Type a message..."
        />

        <button className="btn btn-secondary">Send</button>
      </div>
    </div>
  );
};

export default Chat;
