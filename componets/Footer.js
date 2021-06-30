const Footer = () => {
  return (
    <footer className="text-center bg-gray-600 text-white ">
      <div className="pt-3">
        <h1 className="font-medium text-xl">Follow the Pod on Social Media:</h1>
      </div>
      <div className="pb-3 pt-3 uppercase text-center tracking-wide flex justify-center">
        <div className="posts">
          <i
            className="fab fa-twitter text-white"
            style={{ fontSize: "2.5rem" }}
          ></i>
        </div>
        <div className="followers">
          <i
            className="fab fa-facebook-f text-white mx-4"
            style={{ fontSize: "2.5rem" }}
          ></i>
        </div>
        <div className="following">
          <i
            class="fab fa-instagram text-white"
            style={{ fontSize: "2.5rem" }}
          ></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
