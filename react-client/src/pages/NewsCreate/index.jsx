// src/components/AddNews.js
import { useState } from "react";
import axios from "axios";

export const NewsCreate = () => {
  const [title, setTitle] = useState("");
  const [contentBlocks, setContentBlocks] = useState([]);
  const [files, setFiles] = useState([]);

  const handleTitleChange = (event) => setTitle(event.target.value);

  const handleAddContentBlock = (type) => {
    setContentBlocks([...contentBlocks, { type, content: "" }]);
  };

  const handleContentChange = (index, event) => {
    const newBlocks = [...contentBlocks];
    let content = event.target.value;

    if (newBlocks[index].type === "video") {
      const splitedLink = event.target.value.split("=");
      content = splitedLink[splitedLink.length - 1];
    }

    newBlocks[index].content = content;
    setContentBlocks(newBlocks);
  };

  const handleFileBlockChange = (index, event) => {
    const file = event.target.files[0];
    const newFiles = [...files];
    newFiles.push(file);
    setFiles(newFiles);
    const newBlocks = [...contentBlocks];
    newBlocks[index].content = file.name;
    setContentBlocks(newBlocks);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);

    // Обробка блоків контенту
    formData.append(`contentBlocks`, JSON.stringify(contentBlocks));

    // Додавання окремих файлів
    for (let file of files) {
      formData.append("files", file);
    }

    try {
      await axios.post(`${process.env.SERVER_URL}/news`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("News added successfully!");
      setTitle("");
      setContentBlocks([]);
      setFiles([]);
    } catch (error) {
      console.error("Error adding news:", error);
    }
  };

  return (
    <div>
      <h2>Add News</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>

        {contentBlocks.map((block, index) => (
          <div key={index}>
            <label>
              Block {index + 1} ({block.type}):
            </label>
            {block.type === "text" && (
              <input
                type="text"
                value={block.content}
                onChange={(e) => handleContentChange(index, e)}
                placeholder="Enter text content"
                required
              />
            )}
            {block.type === "image" && (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileBlockChange(index, e)}
                required
              />
            )}
            {block.type === "video" && (
              <input
                type="text"
                value={block.content}
                onChange={(e) => handleContentChange(index, e)}
                placeholder="Enter video URL"
                required
              />
            )}
          </div>
        ))}

        <button type="button" onClick={() => handleAddContentBlock("text")}>
          Add Text Block
        </button>
        <button type="button" onClick={() => handleAddContentBlock("image")}>
          Add Image Block
        </button>
        <button type="button" onClick={() => handleAddContentBlock("video")}>
          Add Video Block
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
