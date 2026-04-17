import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import { systemPrompt, textModels } from "../constants";
import { MessageIcon } from "./icons/chatbox/MessageIcon";
import { ArrowIcon } from "./icons/chatbox/ArrowIcon";
import { CloseIcon } from "./icons/chatbox/CloseIcon";

const Chatbot = () => {
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  async function main(prompt) {
    try {
      const response = await ai.models.generateContent({
        model: textModels[index],
        contents: prompt,
        config: {
          systemInstruction: [
            {
              text: systemPrompt,
            },
          ],
        },
      });
      return response.text;
    } catch {
      setIndex((prev) => (prev < 1 ? prev + 1 : prev));
      return "Sorry, I can't answer that question right now. Please try again.";
    }
  }

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");
    const response = main(input);
    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: response,
          sender: "bot",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      <div
        className={`bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl shadow-black/50 w-[340px] h-[450px] flex flex-col mb-4 overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0 pointer-events-none"}`}
      >
        {/* Header */}
        <div className="bg-white/5 p-4 shrink-0 flex justify-between items-center border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <span className="text-black font-bold text-xs">AI</span>
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm">
                My AI Assistant
              </h3>
              <p className="text-green-400 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 block animate-pulse"></span>
                Online
              </p>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="text-gray-400 hover:text-white transition-colors p-1 cursor-pointer"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 custom-scrollbar">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                msg.sender === "user"
                  ? "bg-white text-black self-end rounded-br-sm"
                  : "bg-white/10 text-white self-start rounded-bl-sm border border-white/5"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white/5 shrink-0 border-t border-white/10">
          <form onSubmit={sendMessage} className="flex gap-2 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-white/10 text-white rounded-full pl-4 pr-12 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-white/30 border border-transparent focus:border-white/20 placeholder:text-gray-400 transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="cursor-pointer absolute right-1 top-1 bottom-1 bg-white text-black rounded-full hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center w-8 h-8"
            >
              <ArrowIcon />
            </button>
          </form>
        </div>
      </div>

      {/* Floating Button */}
      <div
        className={`absolute bottom-0 right-0 transition-transform duration-300 ${isOpen ? "scale-0 pointer-events-none" : "scale-100 delay-100"}`}
      >
        <button
          onClick={toggleChat}
          className="cursor-pointer w-[60px] h-[60px] bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110 active:scale-95 transition-all duration-200 border border-white/20"
        >
          <MessageIcon />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
