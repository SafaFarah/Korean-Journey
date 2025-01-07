import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";



const GroupPage = () => {
  const navigate = useNavigate();
  const { group } = useParams();
  const [cards, setCards] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const currentCard = cards[currentCardIndex];


  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/cards/${group}`, {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    const fetchFavorites = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/favorites", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setFavorites(data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchCards();
    fetchFavorites();
  }, [group]);


  const updateProgress = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/progress/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cardId: currentCard._id }),
        credentials: "include",
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
      } else {
        console.log(data.error);
      }
    } catch (err) {
      console.error("Error updating progress:", err);
    }
  }; 

const toggleFavorite = async (cardId) => {
  try {
    const response = await fetch("http://localhost:5000/api/favorites/toggle", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cardId }),
      credentials: "include",
    });

    const data = await response.json();

    if (response.ok) {
      if (data.message === "Card added to favorites") {
        setFavorites((prevFavorites) => [...prevFavorites, { _id: cardId }]);
      } else if (data.message === "Card removed from favorites") {
        setFavorites((prevFavorites) => prevFavorites.filter((card) => card._id !== cardId)); // إزالة الكرت
      }
    } else {
      console.log(data.error);
    }
  } catch (err) {
    console.error("Error toggling favorite:", err);
  }
};


  const isFavorite = (cardId) => {
    return favorites.some((favorite) => favorite._id === cardId);
  };

  const handleNext = async () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex((prevIndex) => prevIndex + 1);
      await updateProgress();
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex((prevIndex) => prevIndex - 1);
    }
  };

  if (cards.length === 0) {
    return <div>Loading cards...</div>; 
  };
  const progressbar = ((currentCardIndex + 1) / cards.length) * 100;
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
          {
            label: "Logout",
            onClick: () => navigate("/login"),
          },
        ]}
      />

      <div
        className="relative z-10 flex flex-col items-center justify-start"
        style={{ height: "100vh", paddingTop: "88px" }}
      >
        <div className="w-2/4 bg-gray-300 border-2 border-gray-500 h-5 rounded-md">
          <div className="bg-green-600 h-4 rounded" style={{ width: `${progressbar}%` }}></div>
        </div>

        <div
          className="relative bg-center bg-cover rounded-3xl shadow-md mt-4"
          style={{
            backgroundImage: `url(${currentCard ? (isFlipped ? currentCard.backImage : currentCard.frontImage) : ''})`,
            width: "360px",
            height: "460px",
          }}
        >
          {!isFlipped && currentCard && (
            <>
              <img
                src="/images/img_share_it.png"
                alt="Share"
                className="absolute top-4 left-4 cursor-pointer w-10 h-10"
                onClick={() => {
                  navigator.clipboard.writeText(`Check out this card: ${window.location.href}`);
                  alert("Link copied to clipboard!");
                }}
              />

<span
  className={`absolute bottom-4 left-4 cursor-pointer text-5xl ${isFavorite(currentCard._id) ? "text-yellow-500" : "text-black"}`}
  onClick={() => toggleFavorite(currentCard._id)}  // استخدام الوظيفة الجديدة
>
  {isFavorite(currentCard._id) ? "★" : "☆"}
</span>


              <img
                src="/images/img_audio.png"
                alt="Audio"
                className="absolute bottom-4 right-4 cursor-pointer w-11 h-11"
                onClick={() => new Audio(currentCard.audio).play()}
              />
            </>
          )}

          <img
            src="/images/img_flip.png"
            alt="Flip"
            className="absolute top-2 right-2 cursor-pointer max-w-16 max-h-16"
            onClick={() => setIsFlipped(!isFlipped)}
          />
        </div>

        <div className="flex justify-between mt-1 w-full max-w-md">
          <button
            className="bg-blue-900 hover:bg-blue-600 text-xl font-serif font-bold text-white px-5 py-2 rounded"
            onClick={handlePrevious}
            disabled={currentCardIndex === 0}
          >
            Previous
          </button>
          {currentCardIndex < cards.length - 1 ? (
            <button
              className="bg-blue-900 hover:bg-blue-600 text-xl font-serif font-bold text-white px-8 py-2 rounded"
              onClick={handleNext}
            >
              Next
            </button>
          ) : (
            <button
              className="bg-green-700 hover:bg-green-400 text-xl font-serif font-bold text-white px-8 py-2 rounded"
              onClick={() => navigate("/dashboard")}
            >
              Back to Home
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupPage;
