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
                <i
                  class="fab fa-twitter text-blue-700"
                  style={{ fontSize: "2.5rem" }}
                ></i>
              </div>
              <div class="followers">
                <i
                  class="fab fa-facebook-f text-blue-700 mx-4"
                  style={{ fontSize: "2.5rem" }}
                ></i>
              </div>
              <div class="following">
                <i
                  class="fab fa-instagram text-blue-700"
                  style={{ fontSize: "2.5rem" }}
                ></i>
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
                <i
                  class="fab fa-twitter text-blue-700"
                  style={{ fontSize: "2.5rem" }}
                ></i>
              </div>

              <div class="following">
                <i
                  class="fab fa-instagram text-blue-700 ml-4"
                  style={{ fontSize: "2.5rem" }}
                ></i>
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
              <p className="text-3xl">Jimmy </p>
              <p class="text-2xl"> Co Host</p>
            </div>

            <div class="pb-10 uppercase text-center tracking-wide flex justify-center">
              <div class="posts">
                <i
                  class="fab fa-twitter text-blue-700"
                  style={{ fontSize: "2.5rem" }}
                ></i>
              </div>
              <div class="followers">
                <i
                  class="fab fa-facebook-f text-blue-700 mx-4"
                  style={{ fontSize: "2.5rem" }}
                ></i>
              </div>
              <div class="following">
                <i
                  class="fab fa-instagram text-blue-700"
                  style={{ fontSize: "2.5rem" }}
                ></i>
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
                <i
                  class="fab fa-facebook-f text-blue-700 mr-4"
                  style={{ fontSize: "2.5rem" }}
                ></i>
              </div>
              <div class="following">
                <i
                  class="fab fa-instagram text-blue-700"
                  style={{ fontSize: "2.5rem" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mic;
