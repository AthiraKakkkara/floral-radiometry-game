"use client";
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const flowerData = {
  imageUrl: '/flower-today.jpg',
  question: 'What is the bee-perceived floral color based on the spectral graph?',
  options: ['UV', 'UV Blue', 'UV - Green', 'Blue', 'Blue - Green', 'Green'],
  correctAnswer: 'UV Blue'
};

const digitalFlowers = ['🌺', '🌼', '🌸', '🌻', '💐'];

export default function Home() {
  const [selectedOption, setSelectedOption] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [collection, setCollection] = useState([]);
  const [reward, setReward] = useState('');
  const [isChampion, setIsChampion] = useState(false);

  const getRandomFlower = () => {
    return digitalFlowers[Math.floor(Math.random() * digitalFlowers.length)];
  };

  const handleSubmit = () => {
    const correct = selectedOption === flowerData.correctAnswer;
    setIsCorrect(correct);
    setSubmitted(true);

    if (correct) {
      const newFlower = getRandomFlower();
      const updatedCollection = [...collection, newFlower];
      setCollection(updatedCollection);
      setReward(newFlower);

      const uniqueSet = new Set(updatedCollection);
      if (uniqueSet.size >= digitalFlowers.length) {
        setIsChampion(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-pink-800 mb-4 text-center">
        🌸 Floral Radiometry Color Challenge 🌸
      </h1>

      <Card className="w-full max-w-xl">
        <CardContent className="p-4 flex flex-col items-center">
          <Image
            src={flowerData.imageUrl}
            alt="Flower of the Day"
            width={400}
            height={400}
            className="rounded-xl shadow-md"
          />

          <p className="mt-4 text-center text-lg text-gray-700">
            {flowerData.question}
          </p>

          <select
            className="mt-4 p-2 rounded border border-gray-300 w-full"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">Select an option</option>
            {flowerData.options.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>

          <Button className="mt-4 w-full" onClick={handleSubmit} disabled={!selectedOption}>
            Submit Answer
          </Button>

          {submitted && (
            <div className="mt-4 text-lg font-semibold text-center">
              {isCorrect ? (
                <>
                  🎉 Correct! You earned a digital flower: <span className="text-2xl">{reward}</span>
                </>
              ) : (
                '❌ Oops! Try again tomorrow!'
              )}
            </div>
          )}

          {collection.length > 0 && (
            <div className="mt-4 text-center">
              <p className="text-md font-semibold text-gray-700">Your Collection:</p>
              <p className="text-3xl mt-2">{collection.join(' ')}</p>
              {isChampion && (
                <p className="mt-4 text-green-700 font-bold text-xl">🏆 Congratulations! You are a Color Champion! 🏆</p>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <p className="mt-6 text-sm text-gray-500 text-center max-w-md">
        🔁 Play daily to collect 5 uniquely colored digital flowers. You can receive duplicates, so keep playing or trade with friends to complete your collection and unlock the Color Champion Card! 💐
      </p>
    </div>
  );
}
