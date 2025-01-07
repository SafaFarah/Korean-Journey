import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";


export default function FavoritesPage() {
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/favorites", {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) throw new Error("Failed to fetch favorites");
        const data = await response.json();
        setCards(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const toggleFavorite = async (cardId) => {
  try {
    const response = await fetch("http://localhost:5000/api/favorites/toggle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ cardId }),
    });

    if (response.ok) {
      setCards((prevCards) => {
        const newCards = prevCards.filter((card) => card._id !== cardId);

        if (newCards.length === 0) {
          setCurrentCardIndex(0);
        } else if (currentCardIndex >= newCards.length) {
          setCurrentCardIndex(newCards.length - 1);
        }

        return newCards;
      });
    } else {
      const data = await response.json();
      throw new Error(data.error || "Failed to toggle favorite");
    }
  } catch (err) {
    setError(err.message);
  }
};


  const handleNext = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  if (isLoading) return <div>Loading favorites...</div>;
  if (error) return <div className="error" style={{ color: "red" }}>{error}</div>;

  if (cards.length === 0)
return (
    <div className="group-page relative min-h-screen">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/img_group_1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      <Header
        logo="/images/img_header_logo.png"
        onLogoClick={() => navigate("/")}
        links={[
          { label: "Progress", onClick: () => navigate("/progress") },
          { label: "Favorites", onClick: () => navigate("/favorites") },
          { label: "Logout", onClick: () => navigate("/login") },
        ]}
      />
       <div className="relative z-10 flex justify-center items-center min-h-screen">
        <div className="bg-white p-12 shadow-lg bg-opacity-80 rounded-lg text-center w-3/4 max-w-md">
          <img src="/images/favorites.png" alt="No Favorites" className="w-40 h-40 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-blue-900 font-mono mb-4">Oops! No Favorites Found</h2>
          <p className="text-black mb-6">
            You haven't added any cards to favorites yet!
          </p>
          <button 
            onClick={() => navigate("/")} 
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-xl">
            Go Back to Cards
          </button>
        </div>
      </div>
    </div>
  );

  const currentCard = cards[currentCardIndex] || {};
  const progress = ((currentCardIndex + 1) / cards.length) * 100;

  return (
    <div className="group-page relative min-h-screen">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/img_group_1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <Header
        logo="/images/img_header_logo.png"
        onLogoClick={() => navigate("/")}
        links={[
          { label: "Progress", onClick: () => navigate("/progress") },
          { label: "Favorites", onClick: () => navigate("/favorites") },
          { label: "Logout", onClick: () => navigate("/login") },
        ]}
      />

      <div className="relative z-10 flex flex-col items-center" style={{ height: "100vh", paddingTop: "88px" }}>
        <div className="w-3/4 bg-gray-300 h-5 rounded-lg">
          <div className="bg-green-600 h-5 rounded-lg" style={{ width: `${progress}%` }}></div>
        </div>
        <div
          className="relative bg-center bg-cover rounded-lg shadow-lg mt-6"
          style={{
            backgroundImage: `url(${isFlipped ? currentCard.backImage : currentCard.frontImage})`,
            width: "360px",
            height: "460px",
          }}
        >
          {!isFlipped && (
            <>
              <img
                src="/images/img_share_it.png"
                alt="Share"
                className="absolute top-4 left-4 cursor-pointer w-10"
                onClick={() => navigator.clipboard.writeText(window.location.href)}
              />
              <span
                className="absolute bottom-4 left-4 text-5xl text-yellow-500 cursor-pointer"
                onClick={() => toggleFavorite(currentCard._id)}
              >
                ★
              </span>
              <img
                src="/images/img_audio.png"
                alt="Audio"
                className="absolute bottom-4 right-4 cursor-pointer w-11"
                onClick={() => new Audio(currentCard.audio).play()}
              />
            </>
          )}
          <img
            src="/images/img_flip.png"
            alt="Flip"
            className="absolute top-2 right-2 cursor-pointer w-12"
            onClick={() => setIsFlipped(!isFlipped)}
          />
        </div>
        <div className="flex justify-between w-full max-w-md mt-4">
          <button
            className="bg-blue-900 text-white px-5 py-2 rounded"
            onClick={handlePrevious}
            disabled={currentCardIndex === 0}
          >
            Previous
          </button>
          <button
            className="bg-blue-900 text-white px-5 py-2 rounded"
            onClick={handleNext}
            disabled={currentCardIndex === cards.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
