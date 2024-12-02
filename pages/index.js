import { useRef, useEffect } from "react";
import Image from "next/image";

function Home() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error("Error playing audio:", err);
      });
    }
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error("Oi meu chapa", err);
      });
    }
  };

  return (
    <div>
      <Image
        src="https://i.pinimg.com/control2/736x/b0/11/32/b011327fe0dcbc64035f4314d6b772d1.jpg"
        alt="Imagem do texugo do desenho animado Pica-Pau com uma expressão exagerada, olhos arregalados e dentes à mostra, acompanhado do texto 'Oi meu chapa'."
        width={736}
        height={736}
      />
      <button onClick={playAudio}>Oi meu chapa</button>
      <audio ref={audioRef} src="/oi-meu-chapa.mp3">
        Seu navegador não suporta a reprodução de áudio.
      </audio>
    </div>
  );
}

export default Home;
