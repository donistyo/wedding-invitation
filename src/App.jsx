import { useEffect, useState } from "react";

import Loading from "./Components/Loading";
import Cover from "./Components/Cover";
import Navbar from "./Components/Navbar";
import MusicPlayer from "./Components/MusicPlayer";

let audioEl = null;

import Couple from "./Components/Couple";
import Story from "./Components/Story";
import Event from "./Components/Event";
import Gallery from "./Components/Gallery";
import Gift from "./Components/Gift";
import Wishes from "./Components/Wishes";
import Thanks from "./Components/Thanks";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [opened, setOpened] = useState(false);
  const [autoScrolling, setAutoScrolling] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {!opened && (
        <Cover onOpen={() => {
          setOpened(true);
          if (!audioEl) {
            audioEl = new Audio("/wedding-music.mp3");
            audioEl.loop = true;
          }
          audioEl.play().catch(() => {});
          setTimeout(() => setAutoScrolling(true), 1500);
        }} />
      )}

      {opened && <Navbar autoScrolling={autoScrolling} setAutoScrolling={setAutoScrolling} />}
      {opened && <MusicPlayer audio={audioEl} />}

      <main
        className={`transition-all duration-1000 ${
          opened
            ? "opacity-100"
            : "opacity-0 h-screen overflow-hidden"
        }`}
      >
        <Couple />
        <Story />
        <Event />
        <Gallery />
        <Gift />
        <Wishes />
        <Thanks />
      </main>
    </>
  );
}