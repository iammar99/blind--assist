import React, { useEffect, useRef, useState } from 'react';
// ------------------------- WEBCAM -------------------------
import Webcam from 'react-webcam';
// ------------------------- ClickBTN -------------------------
import ClickBtn from 'Components/Buttons/ClickBtn';
// ------------------------- Audio -------------------------
import intro from "../../Assets/unloadAudio.mp3"

export default function Home() {
    const webRef = useRef(null);
    const [img, setImg] = useState(null);
    const audioRef = useRef(null)
    // const [messages, setMessages] = useState([]);


    const [hasPlayed, setHasPlayed] = useState(false);

    const handleUserInteraction = () => {
      if (!hasPlayed && audioRef.current) {
        setTimeout(() => {
          audioRef.current.play();
          setHasPlayed(true);
        }, 100); 
      }
    };
  
    useEffect(() => {
      if (document.readyState === 'complete') {
        handleUserInteraction();
      } else {
        document.addEventListener('DOMContentLoaded', handleUserInteraction);
  
        return () => {
          document.removeEventListener('DOMContentLoaded', handleUserInteraction);
        };
      }
    }, [hasPlayed]);
  

    const handleClick = async () => {
        // Step 1: Fetch data from the external API
        let msg = '';
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const data = await response.json();
            msg = data.title;  // Extract the message
        } catch (error) {
            console.error('Error fetching data:', error);
            msg = 'Error fetching message';  // Handle fetch errors
        }

        // Step 2: Capture the webcam image
        const screenshot = webRef.current.getScreenshot();
        setImg(screenshot);

        // Step 3: Send the image to your Django backend
        try {
            const response = await fetch('/', {  // Ensure this matches your Django endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ image: screenshot })
            });
            const result = await response.json();
            console.log('Server response:', result);
        } catch (error) {
            console.error('Error sending image:', error);
        }

        // Step 4: Update the state with the image and message
        // setMessages([
        //     ...messages,
        //     { img: screenshot, msg }
        // ]);

        // Step 5: Use the Web Speech API to speak the message
        // const voice = new SpeechSynthesisUtterance(msg);
        // console.log("Message being spoken:", voice.text);
        // speechSynthesis.speak(voice);
    };

    return (
        <>
        <audio src={intro} ref={audioRef} />
            <main onClick={handleClick}>
                <h1 className="text-center my-4 fw-bold text-light">
                    Assist Blind
                </h1>
                <h3 className='text-light text-center txt'>"Translating Sight into Words"</h3>
                <div className="container my-5">
                    <div className="row">
                        <div className="col d-flex p-0">
                            <Webcam ref={webRef} className='camera' tabIndex={0} />
                        </div>
                    </div>
                </div>
                <ClickBtn />
                {
                    img
                    ?
                    <img src={img} className='map_img mx-auto' alt="" />
                    :
                    <></>
                }
                {/* Map function to display chat */}
                {/* 
                                    {
                    messages.map((message, i) => (
                        <div key={i}>
                            <img src={message.img} className='map_img' alt="" />
                            <p className="output" id='output'>
                                {message.msg}
                            </p>
                        </div>
                    ))
                }
                */}
            </main>
        </>
    );
}
