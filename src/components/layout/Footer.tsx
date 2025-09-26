import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-6 border-t text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
};
