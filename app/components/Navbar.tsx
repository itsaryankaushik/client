"use client";

import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import PdfIcon from './PdfIcon';

const Navbar = () => {
  return (
    <header className="glass border-b border-primary/10 flex justify-between items-center py-3 px-6">
      <div className="flex items-center">
        <PdfIcon className="w-8 h-8 mr-3 text-primary" />
        <h1 className="text-xl font-bold gradient-text">PDF Whisperer</h1>
      </div>
      
      <div className="flex items-center">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <div className="flex gap-3">
            <SignInButton mode="modal">
              <button className="px-4 py-2 text-sm glass hover:bg-surface-dark/50 text-foreground rounded-lg transition-colors">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="px-4 py-2 text-sm bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>
      </div>
    </header>
  );
};

export default Navbar;