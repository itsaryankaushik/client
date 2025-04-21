"use client";

import { useState } from "react";
import UploadSection from "./components/UploadSection";
import ChatSection from "./components/ChatSection";

export default function Home() {
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <div className="flex h-screen w-screen bg-gradient-to-br from-surface-dark to-background text-foreground overflow-hidden">
      <div className="w-full h-full flex relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 -right-24 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Main content */}
        <div className="flex flex-col md:flex-row w-full h-full relative z-10">
          <UploadSection />
          <ChatSection messages={messages} setMessages={setMessages} />
        </div>
      </div>
    </div>
  );
}
