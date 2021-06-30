const Footer = () => {
  return (
    <footer className="text-center bg-gray-600 text-white ">
      <div className="pt-3">
        <h1 className="font-medium text-xl">Follow the Pod on Social Media:</h1>
      </div>
      <div class="pb-3 pt-3 uppercase text-center tracking-wide flex justify-center">
        <div class="posts">
          <i
            class="fab fa-twitter text-white"
            style={{ fontSize: "2.5rem" }}
          ></i>
        </div>
        <div class="followers">
          <i
            class="fab fa-facebook-f text-white mx-4"
            style={{ fontSize: "2.5rem" }}
          ></i>
        </div>
        <div class="following">
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
