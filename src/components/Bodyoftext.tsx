import React, { useState } from 'react';

export const Bodyoftext = () => {
  const [title, setTitle] = useState('Welcome to Our Website');
  const [subText, setSubText] = useState('Explore the vast range of information and resources.');
  const [additionalInfo, setAdditionalInfo] = useState('If you need further information, please do not hesitate to contact us.');

  return (
    <div className="min-h-screen w-full bg-accent flex flex-col justify-center items-center p-10 text-center">
      <input
        className="text-4xl font-bold text-white mb-4 bg-transparent border-b-2 border-white w-full text-center"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />
      <textarea
        className="text-xl text-gray-200 bg-transparent border-b-2 border-gray-200 w-full text-center my-8 p-2"
        value={subText}
        onChange={(e) => setSubText(e.target.value)}
        placeholder="Enter subtext"
      />
      <textarea
        className="text-gray-400 bg-transparent border-b-2 border-gray-400 w-full text-center mt-8 p-2"
        value={additionalInfo}
        onChange={(e) => setAdditionalInfo(e.target.value)}
        placeholder="Enter additional information"
      />
    </div>
  );
}
