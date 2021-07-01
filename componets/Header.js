import Image from "next/image";
const Header = () => {
  return (
    <div className="py-3 bg-black  text-white ">
      <div className="container">
        <div className="text-center">
          <Image
            className="mx-auto "
            src="/PURPLE_360x.jpg"
            width={300}
            height={300}
          />
          <div className="text-center py-3  mx-auto ">
            <h2 className="text-2xl">LISTEN & SUBSCRIBE ON:</h2>
            <div className="py-3  flex justify-center">
              <div>
                <a
                  href="https://podcasts.apple.com/us/podcast/good-in-the-hood-podcast/id1454831531"
                  type="button"
                  className="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600"
                >
                  <i className="fas fa-podcast "></i>
                  Apple
                </a>
              </div>
              <div className="px-3  ">
                <a
                  href="https://open.spotify.com/show/3rClGGBu1MvCFDrNb9Klql?si=2_EN6TPFQZC7MHLJugQkuQ&nd=1"
                  type="button"
                  className="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600"
                >
                  <i className="fab fa-spotify"></i> Spotify
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/channel/UCrPlrMJowXVgWUW9yWfP7pg"
                  type="button"
                  className="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 "
                >
                  <i className="fab fa-youtube"></i> Youtube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
