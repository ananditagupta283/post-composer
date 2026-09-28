import { useState } from "react";
import "./App.css";

function App() {
  const [platform, setPlatform] = useState("Twitter");
  const [post, setPost] = useState("");

  const limit = platform === "Twitter" ? 280 : 3000;
  const exceeded = post.length > limit;

  return (
    <div className="container">
      <h1>Post Composer</h1>

      <label>Select Platform:</label>

      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      >
        <option value="Twitter">Twitter</option>
        <option value="LinkedIn">LinkedIn</option>
      </select>

      <textarea
        placeholder="Write your post..."
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />

      <p className={exceeded ? "error" : "count"}>
        {post.length} / {limit} characters
      </p>

      {exceeded && (
        <p className="error">
          Your post exceeds the {limit} character limit for {platform}.
        </p>
      )}
    </div>
  );
}

export default App;