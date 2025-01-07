import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      const response = await fetch("http://localhost:5000/api/auth/verify-token", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        navigate("/login");
      }
    };

    checkToken();
  }, [navigate]);

  const groups = [
    { title: "Family1", image: "https://res.cloudinary.com/dvfqc6jma/image/upload/v1735668435/lh_vkyfw9.png", path: "/group/Family1" },
    { title: "Fruits", image: "https://res.cloudinary.com/dvfqc6jma/image/upload/v1735668434/kuj_ngybwu.png", path: "/group/Fruits" },
    { title: "Colors", image: "https://res.cloudinary.com/dvfqc6jma/image/upload/v1735668435/njkl_b82cji.png", path: "/group/Colors" },
    { title: "Animals", image: "https://res.cloudinary.com/dvfqc6jma/image/upload/v1735668428/hdad_vdyzbc.png", path: "/group/Animals" },
    { title: "Food", image: "https://res.cloudinary.com/dvfqc6jma/image/upload/v1735668429/hbkd_mfnnnv.png", path: "/group/Food" },
    { title: "Emotions", image: "https://res.cloudinary.com/dvfqc6jma/image/upload/v1735668429/jjjjjjj_saevbw.png", path: "/group/Emotions" },
    { title: "Jobs", image: "https://res.cloudinary.com/dvfqc6jma/image/upload/v1735668428/hbwldasd_nloffi.png", path: "/group/Jobs" },
    { title: "Vegetables", image: "https://res.cloudinary.com/dvfqc6jma/image/upload/v1735668429/jgb_hc248j.png", path: "/group/Vegetables" },
    { title: "Life_Events", image: "https://res.cloudinary.com/dvfqc6jma/image/upload/v1735668428/DHJC_yj5ohl.png", path: "/group/Life_Events" },
    { title: "Family2", image: "https://res.cloudinary.com/dvfqc6jma/image/upload/v1735668427/dbkadq_irbf66.png", path: "/group/Family2" },
    { title: "Drinks", image: "https://res.cloudinary.com/dvfqc6jma/image/upload/v1735668427/bllllllllll_zipg0p.png", path: "/group/Drinks" },
  ];

  return (
    <>
      <Helmet>
        <title>Korean Journey - Dashboard</title>
        <meta name="description" content="Your Dashboard for Korean Journey." />
      </Helmet>


      <div className="relative z-10 min-h-screen flex flex-col">
        {/* header */}
        <Header
          logo="images/img_header_logo.png"
          onLogoClick={() => navigate("/")}
          links={[
            { label: "Progress", onClick: () => navigate("/progress") },
            { label: "Favorites", onClick: () => navigate("/favorites") },
            { label: "Logout", onClick: () => navigate("/logout") },
          ]}
        />

        {/* groups*/}
        <main className="flex-auto p-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-11">
            {groups.map((group, index) => (
              <div
                key={index}
                className="cursor-pointer hover:shadow-xl transition-all"
                onClick={() => navigate(group.path)}
              >
                <img
                  src={group.image}
                  alt={group.title}
                  className="w-full h-150 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
