import {useState} from "react";
import emojis from './emojis'


const selectRandomElement = (arr: any) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const Emoji = () => {
    const [clicks, setClicks] = useState(0);

    const selected = selectRandomElement(emojis);

    const handleEmojiClick = (e: any) => {
        setClicks(clicks + 1);
        if (e.target.innerText !== selected.emoji) {
            alert('Wrong emoji!');
        } else if (e.timeStamp > 5000) {
            alert('Too slow!');
        } else {
            alert('You win!');
        }
    }

    const handleReset = () => {
        window.location.reload();
    }

    return (
        <div>
            <h1>{selected.emoji}: {clicks}</h1>
            <p>Click this emoji!</p>
            <ul>
            {emojis.map(emoji => (
                <li onClick={handleEmojiClick} key={emoji.id}>{emoji.emoji}</li>
            ))}
            </ul>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Emoji;
