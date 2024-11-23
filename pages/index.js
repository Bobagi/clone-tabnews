import { useRef, useEffect } from "react";

function Home() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error("Erro ao tocar o áudio automaticamente:", err);
      });
    }
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error("Erro ao tocar o áudio:", err);
      });
    }
  };    
  
  return (
    <div>
      <img
        src="https://i.pinimg.com/control2/736x/b0/11/32/b011327fe0dcbc64035f4314d6b772d1.jpg"
        alt="Descrição da imagem"
      />
      <button onClick={playAudio}>Tocar Som</button>
      <audio ref={audioRef} src="/oi-meu-chapa.mp3">
        Seu navegador não suporta a reprodução de áudio.
      </audio>
    </div>
  );
}

export default Home;
