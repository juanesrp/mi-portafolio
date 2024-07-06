import maskHomeImage from "../assets/MaskHome.png";

const Home = () => {
  return (
    <div
      className="bg-gray-900 bg-contain md:bg-cover"
      style={{
        backgroundImage: `url(${maskHomeImage})`,
        // backgroundSize: "cover",
        backgroundPosition: "bottom left",
        minHeight: "100vh",
      }}
    >
      <h1>Home</h1>
    </div>
  );
};

export default Home;
