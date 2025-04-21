"use client";

import { User, Bot } from "lucide-react";

interface MessageItemProps {
  message: string;
  isUser?: boolean;
}

const MessageItem = ({ message, isUser = true }: MessageItemProps) => {
  return (
    <div className="flex items-start mb-4 animate-fade-in">
      {!isUser && (
        <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-1">
          <Bot size={16} className="text-secondary" />
        </div>
      )}
      
      <div
        className={`p-4 rounded-xl max-w-[80%] ${
          isUser
            ? "glass bg-primary/20 text-foreground rounded-tr-none ml-auto"
            : "glass bg-surface text-foreground rounded-tl-none"
        }`}
      >
        <p className="break-words text-sm">{message}</p>
      </div>
      
      {isUser && (
        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center ml-3 mt-1">
          <User size={16} className="text-primary" />
        </div>
      )}
    </div>
  );
};

export default MessageItem;