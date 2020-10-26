import React from "react";
import emojipedia from "../emojipedia";
import EmojiCard from "./EmojiCard";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emojiType) => (
          <EmojiCard
            key={emojiType.id}
            name={emojiType.name}
            emoji={emojiType.emoji}
            meaning={emojiType.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
