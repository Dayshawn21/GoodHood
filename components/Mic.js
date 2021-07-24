import React from "react";

const Mic = () => {
  return (
    <div className="container py-3">
      <div>
        <h2 className="text-center text-5xl">Behind the Mic</h2>

        <div className="grid md:grid-cols-4 gap-4 py-3">
          <div class="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
            <div>
              <img
                class="w-full h-72  "
                src="/img/justyn.jpg"
                alt="Profile image"
              />
            </div>

            <div class="pt-6 pb-8 text-gray-600 text-center">
              <p className="text-3xl">Juice </p>
              <p class="text-2xl">Host</p>
            </div>

            <div class="pb-10 uppercase text-center tracking-wide flex justify-center">
              <div class="posts">
                <a href="https://twitter.com/JuiceInAllHoods" target="_blank">
                  <i
                    class="fab fa-twitter text-blue-700 "
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                </a>
              </div>
              <div class="followers">
                <a href="https://www.facebook.com/justynpolk" target="_blank">
                  <i
                    class="fab fa-facebook-f text-blue-700 mx-4 "
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                </a>
              </div>
              <div class="following">
                <a
                  href="https://www.instagram.com/juiceinthehood/"
                  target="_blank"
                >
                  <i
                    class="fab fa-instagram text-blue-700 "
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div class="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
            <div>
              <img
                class="w-full h-72 "
                src="/img/jay.jpg"
                alt="Profile image"
              />
            </div>

            <div class="pt-6 pb-8 text-gray-600 text-center">
              <p className="text-3xl">Jay Black </p>
              <p class="text-2xl"> Co Host</p>
            </div>

            <div class="pb-10 uppercase text-center tracking-wide flex justify-center">
              <div class="posts">
                <a href="https://twitter.com/Dacribjo" target="_blank">
                  <i
                    class="fab fa-twitter text-blue-700 mx-4  "
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div class="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
            <div>
              <img
                class="w-full h-72"
                src="/img/jimmy.jpg"
                alt="Profile image"
              />
            </div>

            <div class="pt-6 pb-8 text-gray-600 text-center">
              <p className="text-3xl">Jimmmie Smooda </p>
              <p class="text-2xl"> Co Host</p>
            </div>

            <div class="pb-10 uppercase text-center tracking-wide flex justify-center">
              <div class="posts">
                <a href="https://twitter.com/JimmieInTheHood" target="_blank">
                  <i
                    class="fab fa-twitter text-blue-700 "
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                </a>
              </div>
              <div class="followers">
                <a href="https://www.facebook.com/jimmysmooda" target="_blank">
                  <i
                    class="fab fa-facebook-f text-blue-700 mx-4 "
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                </a>
              </div>
              <div class="following">
                <a
                  href="https://www.instagram.com/jimmieinthehood"
                  target="_blank"
                >
                  <i
                    class="fab fa-instagram text-blue-700 "
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div class="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
            <div>
              <img class="w-full h-72" src="/img/kc.jpg" alt="Profile image" />
            </div>

            <div class="pt-6 pb-8 text-gray-600 text-center">
              <p className="text-3xl">KC </p>
              <p class="text-2xl"> Co Host</p>
            </div>

            <div class="pb-10 uppercase text-center tracking-wide flex justify-center">
              <div class="followers">
                <a
                  href="https://www.facebook.com/kaylin.crowder"
                  target="_blank"
                >
                  <i
                    class="fab fa-facebook-f text-blue-700 mx-4 "
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                </a>
              </div>
              <div class="following">
                <a
                  href="https://www.instagram.com/theyoungog_74"
                  target="_blank"
                >
                  <i
                    class="fab fa-instagram text-blue-700 "
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mic;
