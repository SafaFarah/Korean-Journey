import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar";

const flashcardsData = [
  { id: 1, question: "\uD55C\uAE00 (Hangeul)", answer: "The Korean Alphabet" },
  { id: 2, question: "\uC548\uB155 (Annyeong)", answer: "Hello" },
  { id: 3, question: "\uAC10\uC0AC (Gamsa)", answer: "Thank you" },
  { id: 4, question: "\uC544\uB2C8\uC694 (Aniyo)", answer: "No" },
  { id: 5, question: "\uB098\uB294 (Naneun)", answer: "I am" },
];

export default function Flashcards() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcardsData.length);
  };

  const handlePrev = () => {
    setShowAnswer(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashcardsData.length - 1 : prevIndex - 1
    );
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const progress = ((currentIndex + 1) / flashcardsData.length) * 100;

  return (
    <>
      <Helmet>
        <title>Korean Journey - Flashcards</title>
        <meta
          name="description"
          content="Practice and master Korean vocabulary with interactive flashcards."
        />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 mt-10 max-w-lg w-full">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Flashcard {currentIndex + 1}
          </h2>

          <div
            className="w-full h-64 flex items-center justify-center bg-gray-100 rounded-lg shadow-inner cursor-pointer"
            onClick={toggleAnswer}
          >
            <p className="text-xl text-gray-800 text-center">
              {showAnswer
                ? flashcardsData[currentIndex].answer
                : flashcardsData[currentIndex].question}
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-2">Click the card to flip</p>

          <ProgressBar progress={progress} />

          <div className="flex justify-between items-center w-full mt-6">
            <button
              onClick={handlePrev}
              className="bg-blue-800 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600 transition"
            >
              <FaArrowLeft /> Previous
            </button>

            <button
              onClick={handleNext}
              className="bg-blue-800 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600 transition"
            >
              Next <FaArrowRight />
            </button>
          </div>

          <button
            onClick={() => navigate("/deck")}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
          >
            Go to Decks
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
