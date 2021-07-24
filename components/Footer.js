const Footer = () => {
  return (
    <footer className="text-center bg-gray-600 text-white ">
      <div className="pt-3">
        <h1 className="font-medium text-xl">Follow the Pod on Social Media:</h1>
      </div>
      <div className="pb-3 pt-3 uppercase text-center tracking-wide flex justify-center">
        <div className="posts">
          <a href="https://twitter.com/GoodInAllHoods" target="_blank">
            <i
              className="fab fa-twitter text-white"
              style={{ fontSize: "2.5rem" }}
            ></i>
          </a>
        </div>
        <div className="followers">
          <a
            href="https://www.facebook.com/profile.php?id=100069878586920"
            target="_blank"
          >
            <i
              className="fab fa-facebook-f text-white mx-4"
              style={{ fontSize: "2.5rem" }}
            ></i>
          </a>
        </div>
        <div className="following">
          <a href="https://www.instagram.com/goodinthehoodpod/" target="_blank">
            <i
              class="fab fa-instagram text-white"
              style={{ fontSize: "2.5rem" }}
            ></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
