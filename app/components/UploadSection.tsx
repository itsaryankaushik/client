"use client";

import { useState } from "react";
import { Upload, FileText, X } from "lucide-react";

// const FileUploadHandler =()=>{
//   const el=document.createElement('input');
//   el.setAttribute('type','file');
//   el.setAttribute('accept','application/pdf');
//   el.addEventListener('change', (ev) => {
//     if (el.files && el.files.length > 0) {
//       console.log(el.files);
//       const file = el.files[0];
//       // const file = el.files.item(0);
//       console.log(file);
//       // Handle the file upload here
      
//     }
//   });
//   el.click();
// }

const UploadSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type === "application/pdf") {
        setFile(droppedFile);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div className="flex flex-col items-center justify-start w-full md:w-[30%] h-full backdrop-blur-sm bg-surface/10 border-b md:border-b-0 md:border-r border-primary/20 p-4 md:p-6">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 gradient-text">Upload PDF</h2>
        
        {file ? (
          <div className="glass rounded-xl p-4 mb-4 animate-fade-in">
            <div className="flex items-start justify-between">
              <div className="flex items-start flex-1 min-w-0">
                <div className="shrink-0 bg-primary/20 p-2 rounded-lg mr-3">
                  <FileText className="text-primary" size={24} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm mb-0.5 break-all line-clamp-2">{file.name}</p>
                  <p className="text-xs opacity-70">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <button 
                onClick={handleRemoveFile}
                className="p-1 hover:bg-surface rounded-full transition-colors shrink-0 ml-2"
              >
                <X size={18} className="text-error" />
              </button>
            </div>
          </div>
        ) : (
          <div 
            className={`glass p-6 md:p-8 rounded-xl transition-all duration-300 ${
              isDragging 
                ? 'border-primary border-2 shadow-lg scale-105' 
                : 'border border-primary/30 hover:border-primary/50 hover:shadow-md'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input 
              type="file" 
              id="pdf-upload" 
              accept=".pdf" 
              className="hidden" 
              onChange={handleFileSelect}
            />
            <label htmlFor="pdf-upload" className="cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse"></div>
                  <div className="relative bg-primary/10 p-4 rounded-full">
                    <Upload size={36} className="text-primary animate-float" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Upload PDF</h3>
                <p className="text-sm text-foreground/70 text-center">
                  Drag & drop your PDF file here, or click to browse
                </p>
              </div>
            </label>
          </div>
        )}

        {/* <div className="mt-6 space-y-3">
          <div className="glass p-3 rounded-lg flex items-center space-x-3">
            <div className="bg-primary/20 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5Z"/>
              </svg>
            </div>
            <span className="text-sm">Analyze PDF content</span>
          </div>
          <div className="glass p-3 rounded-lg flex items-center space-x-3">
            <div className="bg-secondary/20 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-secondary" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
              </svg>
            </div>
            <span className="text-sm">Get instant answers</span>
          </div>
          <div className="glass p-3 rounded-lg flex items-center space-x-3">
            <div className="bg-accent/20 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-accent" viewBox="0 0 16 16">
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
              </svg>
            </div>
            <span className="text-sm">Interactive conversations</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default UploadSection;