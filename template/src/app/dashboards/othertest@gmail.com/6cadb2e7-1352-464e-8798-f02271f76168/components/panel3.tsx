import React from "react";
import { Textarea } from "@/components/ui/textarea";

const Panel3 = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Textarea
        placeholder="Take your notes here..."
        className="w-1/2 h-1/2 p-4 border rounded-lg shadow-lg bg-white"
      />
    </div>
  );
};

export default Panel3;