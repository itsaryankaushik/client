"use client";

import { SignUp } from '@clerk/nextjs';
import PdfIcon from './PdfIcon';

const LandingPage = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 py-6 md:py-8">
      <div className="w-full max-w-md glass px-4 py-6 rounded-xl animate-fade-in shadow-lg overflow-hidden">
        <PdfIcon className="w-16 h-16 mx-auto text-primary mb-4" />
        <h2 className="text-xl font-bold mb-2 gradient-text text-center">Welcome to PDF Whisperer</h2>
        <p className="text-sm text-foreground/70 mb-6 text-center">
          Upload your PDF documents and chat with them using AI. Get instant answers without reading lengthy documents.
        </p>
        <div className="w-full cl-component-boundary">
          <SignUp 
            appearance={{
              elements: {
                rootBox: "w-full mx-auto",
                card: "w-full bg-transparent shadow-none",
                formButtonPrimary: "bg-primary hover:bg-primary-dark",
                formFieldInput: "bg-surface-dark border-primary/20",
                socialButtonsBlockButton: "border-primary/20",
                footerActionLink: "text-primary hover:text-primary-light"
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;