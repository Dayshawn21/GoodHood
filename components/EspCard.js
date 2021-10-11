import { fromImagetoUrl } from "../utils/urls";
import Link from "next/link";
import Image from "next/image";

const EspCard = ({ podcast }) => {
  console.log(podcast);
  return (
    <div className="text-center py-3  ">
      <Link href={`/podcasts/${podcast.slug}`}>
        <a>
          <div class=" w-full max-w-sm mx-auto rounded-md shadow-lg">
            <div class="h-60 w-auto relative">
              <Image
                src={podcast.image.formats.small.url}
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div class="p-2 bg-gray-400">
              <h3 class="font-medium text-gray-700 text-2xl  ">
                EP{podcast.episode}
              </h3>
              <h3 class="font-medium text-gray-700 text-2xl  ">
                {podcast.title}
              </h3>
              <p className="text-lg text-gray-700">
                {new Date(podcast.upload).toLocaleDateString("en-US")}
              </p>
              <div class="py-2">
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
