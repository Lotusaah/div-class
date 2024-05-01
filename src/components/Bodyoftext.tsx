import React from 'react';

// Define the structure of the textData object
interface TextData {
  definition: string;
  whatLearned: string;
  situation: string;
  step1: string;
  step2: string;
  step3: string;
  step4: string;
}

// Define the props type for the BodyOfText component
interface BodyoftextProps {
  textData: TextData;
}

export const Bodyoftext: React.FC<BodyoftextProps> = ({ textData }) => {
  return (
    <div className='flex flex-row w-full body-of-text'>
      <div className='hidden md:block md:w-1/6 bg-accent'></div>
      <div className='flex w-full md:w-2/3 bg-accent'>
        <div className="bg-white w-full p-4 shadow rounded-lg">
          <div>
            <h1 className="font-bold text-xl mb-4">Definition:</h1>
            <div className="space-y-4">
              <div className="p-4 border border-gray-300 rounded">{textData.definition}</div>
            </div>
          </div>
      <div className="pt-4">
        <h1 className="font-bold text-xl mb-4">What I Learned:</h1>
        <div className="space-y-4">
          <div className="p-4 border border-gray-300 rounded">{textData.whatLearned}</div>
        </div>
      </div>
      <div className="pt-4">
        <h1 className="font-bold text-xl mb-4">Situation:</h1>
        <div className="space-y-4">
          <div className="p-4 border border-gray-300 rounded">{textData.situation}</div>
        </div>
      </div>
      <div className="pt-4">
        <h1 className="font-bold text-xl mb-4">Steps to Resolution:</h1>
        <div className="space-y-4">
          <div className="p-4 border border-gray-300 rounded">
            <ul className="list-disc pl-5">
              <li>{textData.step1}</li>
              <li>{textData.step2}</li>
              <li>{textData.step3}</li>
              <li>{textData.step4}</li>
            </ul>
         </div>
        </div>
      </div>
    </div>
    </div>
    <div className='hidden md:block md:w-1/6 bg-accent'></div>
  </div>
  );
}
