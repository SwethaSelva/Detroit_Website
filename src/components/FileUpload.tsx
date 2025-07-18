import React, { useRef } from "react";
import type { ChangeEvent } from "react";

const FileUpload: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
      // You can handle the file here
    }
  };

  return (
    <div className="w-full max-w-md mx-auto text-sm pb-[6px] ml-0">
      <div className="flex items-center justify-start gap-4 mb-1">
        <button
          type="button"
          className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={handleFileClick}
        >
          Choose a file
        </button>

        <label className="text-gray-700 font-medium"> Add a file or image </label>
      </div>

      <input
        type="file"
        name="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUpload;