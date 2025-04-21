"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Paperclip, Smile } from "lucide-react";
import MessageItem from "./MessageItem";

interface ChatSectionProps {
  messages: string[];
  setMessages: (messages: string[]) => void;
}

const ChatSection = ({ messages, setMessages }: ChatSectionProps) => {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
      
      // Simulate AI response
      setIsTyping(true);
      setTimeout(() => {
        setMessages([...messages, input, "I've analyzed your PDF and found the relevant information you're looking for."]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col w-full md:w-[70%] h-full bg-surface-dark/50 backdrop-blur-sm">
      {/* Chat header */}
      <div className="border-b border-primary/10 p-3 md:p-4 flex items-center justify-between bg-surface/30">
        <div className="flex items-center">
          <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center mr-3">
            <Sparkles size={18} className="text-primary" />
          </div>
          <div>
            <h3 className="font-medium">PDF Whisperer Assistant</h3>
            <p className="text-xs text-foreground/60">Ask questions about your document</p>
          </div>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 md:p-4 bg-transparent scrollbar-thin">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center px-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Sparkles size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Ask PDF Whisperer</h3>
            <p className="text-sm text-foreground/70 max-w-md mx-auto">
              Upload a document and start asking questions about its content. The AI will analyze and respond based on the document.
            </p>
          </div>
        ) : (
          <>
            {messages.map((message, index) => (
              <MessageItem 
                key={index} 
                message={message} 
                isUser={index % 2 === 0} 
              />
            ))}
            {isTyping && (
              <div className="flex items-center animate-fade-in ml-12 mb-4">
                <div className="glass bg-surface py-2 px-4 rounded-xl inline-flex">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse mx-1" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>
      
      {/* Input area */}
      <div className="p-3 md:p-4 border-t border-primary/10 bg-surface/30">
        <div className="glass flex items-center p-1 rounded-xl relative">
          <button className="p-2 rounded-full hover:bg-surface/80 transition-colors">
            <Paperclip size={18} className="text-foreground/60" />
          </button>
          
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about your document..."
            className="flex-1 p-2 bg-transparent text-foreground border-none outline-none placeholder-foreground/50"
          />
          
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className={`ml-1 p-2 rounded-full transition-all ${
              input.trim() ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-primary/30 text-foreground/30 cursor-not-allowed'
            }`}
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-xs text-center text-foreground/50 mt-2">
          Powered by AI • Responses are generated based on your document content
        </p>
      </div>
    </div>
  );
};

export default ChatSection;