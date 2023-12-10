import React from "react";
import { useState } from "react";

const LiveChat = () => {
  const [messages, setMessages] = useState(["abc", "yty"]);
  const [message, setMessage] = useState("");
  const addMessage = () => {
    if (message.length == 0) {
      return;
    }
    let array = [...messages, message];
    setMessages(array);
    setMessage("");
  };
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        {/* chat box */}
        <div className="w-80 h-2/3 flex flex-col border shadow-md bg-white">
          <div className="flex-1 px-4 py-4 overflow-y-auto">
            <div className="flex flex-col items-end mb-4">
              {messages.map((message) => (
                <div className="flex-1 bg-green-400 text-white p-2 rounded-lg mb-2 relative">
                  <div>{message}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center border-t p-2 chatAction self-end">
              <div className="w-full mx-2">
                <input
                  className="w-full rounded-full border border-gray-200"
                  type="text"
                  defaultValue=""
                  placeholder="Aa"
                  autofocus=""
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              {/* chat send action */}
              <div>
                <button
                  className="inline-flex hover:bg-indigo-50 rounded-full p-2"
                  type="button"
                  onClick={addMessage}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveChat;
