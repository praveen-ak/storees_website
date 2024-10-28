import { useRef, useState } from "react";
import Transition from "../transition";
export default function Video() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isplay, setisplay] = useState(false)
    const [hover, setHover] = useState(false); // initial false
    const [complete, setComplete] = useState(false); // initial false

    let videosrc = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4";
    const playVideo = () => {
        if (videoRef.current) {
            if (isplay) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
        }
        setisplay(!isplay)
    }
    const onHover = (e: any) => {
        setHover(true);
    };

    const onHoverOver = (e: any) => {
        setHover(false);
    };
    const videoDone = () => {
        setComplete(!complete)
        setisplay(!isplay)
    }
    return (
        <main className="bg-[#FFFCF5]">
            <Transition>
                <div className="container max-w-5xl pb-20">
                    <div className="relative" onMouseEnter={(e) => onHover(e)}
                        onMouseLeave={(e) => onHoverOver(e)}>
                        <video ref={videoRef} src={videosrc} className="rounded-2xl" onEnded={videoDone} />
                        <button type="button" onClick={playVideo} className={`absolute left-0 rounded-2xl top-0 h-full w-full ${!isplay || complete ? 'bg-gray-800/55' : ''}`}>
                            {!isplay && <img src="../../images/play.png" alt="" className="mx-auto w-16 md:w-auto" />}
                            {isplay && hover && <div
                                className="w-16 h-16 md:w-36 md:h-36 mx-auto flex flex-row items-center gap-2 justify-center bg-slate-400/85 rounded-full shadow-lg">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                                    className="text-slate-200 w-4 h-4 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z">
                                    </path>
                                </svg>
                            </div>}
                        </button>
                    </div>
                </div>
            </Transition>
        </main>
    )
}