import { fromImagetoUrl } from "../utils/urls";
import Link from "next/link";

const EspCard = ({ podcast }) => {
  return (
    <div className="text-center py-3  ">
      <Link href={`/podcasts/${podcast.slug}`}>
        <a>
          <div class="w-full max-w-sm mx-auto rounded-md shadow-lg overflow-hidden">
            <img
              src={fromImagetoUrl(podcast.image)}
              alt=""
              class="overflow-hidden h-72 w-full "
            />

            <div class="p-4 bg-gray-400">
              <h3 class="font-medium text-gray-700 text-3xl my-2 ">
                {podcast.title}
              </h3>
              <p className="text-lg text-gray-700">{podcast.upload}</p>
              <div class="mt-3">
                <a
                  href=""
                  class="hover:bg-blue-500 rounded-full text-xl py-2 px-3 font-semibold hover:text-white bg-blue-600 text-white"
                >
                  Listen
                </a>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default EspCard;
