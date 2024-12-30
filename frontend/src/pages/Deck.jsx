import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"; // استيراد Header
import Footer from "../components/Footer"; // استيراد Footer

const initialDecks = [
  { id: 1, name: "Basic Korean Vocabulary", description: "Learn the essentials of Korean words." },
  { id: 2, name: "Hangeul Mastery", description: "Master the Korean alphabet with ease." },
  { id: 3, name: "Common Phrases", description: "Practice everyday Korean phrases." },
];

export default function Deck() {
  const [decks, setDecks] = useState(initialDecks);
  const [newDeckName, setNewDeckName] = useState("");
  const [newDeckDescription, setNewDeckDescription] = useState("");
  const navigate = useNavigate();

  const handleCreateDeck = () => {
    if (newDeckName.trim() && newDeckDescription.trim()) {
      const newDeck = {
        id: decks.length + 1,
        name: newDeckName,
        description: newDeckDescription,
      };
      setDecks([...decks, newDeck]);
      setNewDeckName("");
      setNewDeckDescription("");
    }
  };

  return (
    <>
      <Helmet>
        <title>Korean Journey - Decks</title>
        <meta name="description" content="Manage and explore your Korean learning decks." />
      </Helmet>

      {/* Header */}
      <Header title="Decks" />

      <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex flex-col items-center py-10">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Your Decks</h2>

          {/* Deck List */}
          <div className="space-y-4">
            {decks.map((deck) => (
              <div
                key={deck.id}
                className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
                onClick={() => navigate(`/deck/${deck.id}`)}
              >
                <h3 className="text-lg font-bold text-blue-800">{deck.name}</h3>
                <p className="text-sm text-gray-600">{deck.description}</p>
              </div>
            ))}
          </div>

          {/* Create New Deck */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Create a New Deck</h3>
            <input
              type="text"
              placeholder="Deck Name"
              value={newDeckName}
              onChange={(e) => setNewDeckName(e.target.value)}
              className="w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
            />
            <textarea
              placeholder="Deck Description"
              value={newDeckDescription}
              onChange={(e) => setNewDeckDescription(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              rows="3"
            />
            <button
              onClick={handleCreateDeck}
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
            >
              Create Deck
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
