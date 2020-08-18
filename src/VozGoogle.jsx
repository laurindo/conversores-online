import React, { useState } from 'react';
import './App.css';
import voiceImage from './voice.png';
import {
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton
} from "react-share";


function VozGoogle() {
  const [base64string, setBase64] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = () => {
    setLoading(true);
    setBase64("");
    debugger;
    fetch(`https://meme-google-voice.herokuapp.com/create?text=${text}`).then(resp => {
      resp.json().then(data => {
        setLoading(false);
        setBase64("data:audio/mp3;base64," + data.text.replace(/\s/g, '').trim())
      });
    });
  };

  return (
    <div className="App">
      <img src={voiceImage} alt="voz do google" className="voice-image"/>
      <h3>Voz do Google</h3>
      <input placeholder="Digite alguma texto" value={text} onChange={e => setText(e.target.value)}/>
      <button onClick={generate}>Gerar Áudio</button>
      {loading && <div>carregando...</div>}
      {base64string ? (
        <div>
          <audio controls>
            <source src={base64string} type="audio/mpeg"/>
          </audio>
          <div className="download">
            <a href={base64string} target="_blank" download>
              Click to download
            </a>
          </div>

          <div className="share">Compartilhe com seus amigos</div>
          
          <WhatsappShareButton url="https://laurindo.github.io/voz-google/">
            <img src="https://res.cloudinary.com/luneswallet/image/upload/v1597171675/voz-google/whatsapp.png" alt="zap"/>
          </WhatsappShareButton>&nbsp;&nbsp;

          <TelegramShareButton url="https://laurindo.github.io/voz-google/">
            <img src="https://res.cloudinary.com/luneswallet/image/upload/v1597171675/voz-google/telegram.png" alt="telegram"/>
          </TelegramShareButton>&nbsp;&nbsp;

          <FacebookShareButton url="https://laurindo.github.io/voz-google/">
            <img src="https://res.cloudinary.com/luneswallet/image/upload/v1597171910/voz-google/facebook.png" alt="facebook"/>
          </FacebookShareButton>
        </div>
      ) : null}
    </div>
  );
}

export default VozGoogle;
