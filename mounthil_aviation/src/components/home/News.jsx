import { useRef, useState } from "react";
import Video from "../../../public/assets/mounthill_tv.mp4";
import VideoThumbnail from "/assets/mouthilltvimage1.webp";
import Hashtags from "./Hashtags";

function News() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
            <video
              ref={videoRef}
              src={Video}
              className="h-full w-full object-cover"
              onEnded={() => setIsPlaying(false)}
              playsInline
            />

            {!isPlaying && (
              <button className="absolute inset-0 cursor-pointer" onClick={togglePlay} aria-label="Play video">
                <img src={VideoThumbnail} alt="Mounthill Aviation video thumbnail" className="h-full w-full object-cover" />
                <span className="absolute inset-0 bg-black/20" />
              </button>
            )}

            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className={`absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/95 transition-transform hover:bg-white md:h-16 md:w-16 ${
                isPlaying ? "opacity-0 pointer-events-none scale-90" : "opacity-100 scale-100"
              }`}
            >
              <svg className="ml-0.5 h-5 w-5 text-sky-600 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          <div>
            <span className="mb-6 inline-flex rounded-md bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-200">
              Mounthill Aviation News Update
            </span>

            <h2 className="mb-5 text-3xl font-semibold leading-tight text-white md:text-4xl">
              2 years of taking flight, no turbulence.
            </h2>

            <p className="text-base leading-relaxed text-slate-300 md:text-lg">
              Shoutout to our staff and everyone who came through - you made it
              special. More wins. More growth. More altitude.
            </p>

            <Hashtags tags={["stillclimbing", "aocanniversary", "mounthillaviation", "nextlevel"]} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
