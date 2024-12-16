import { useState } from "react";
import axios from "axios";

import { LuLetterText } from "react-icons/lu";
import { LuImagePlus } from "react-icons/lu";
import { LuVideo } from "react-icons/lu";

const blockTypesLocalization = {
  text: "Текст",
  image: "Зображення",
  video: "Відео",
};

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

    formData.append(`contentBlocks`, JSON.stringify(contentBlocks));

    for (let file of files) {
      formData.append("files", file);
    }

    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/news`, formData, {
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
      <form onSubmit={handleSubmit}>
        <div style={{ marginTop: "25px" }}>
          <label>Заголовок:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>

        {contentBlocks.map((block, index) => (
          <ul className="list" key={index}>
            <li className="list-item">
              <label style={{ marginBottom: "0px" }}>
                Секція {index + 1} ({blockTypesLocalization[block.type]}):
                {block.type === "text" && (
                  <textarea
                    value={block.content}
                    onChange={(e) => handleContentChange(index, e)}
                    required
                  />
                )}
                {block.type === "image" && (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileBlockChange(index, e)}
                    style={{ marginTop: "15px" }}
                    required
                  />
                )}
                {block.type === "video" && (
                  <input
                    type="text"
                    value={block.content}
                    onChange={(e) => handleContentChange(index, e)}
                    placeholder="Вставте посилання на відео"
                    required
                  />
                )}
              </label>
            </li>
          </ul>
        ))}

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
            justifyContent: "center",
          }}
        >
          <button
            className="button secondary"
            onClick={() => handleAddContentBlock("text")}
          >
            <LuLetterText />
          </button>
          <button
            className="button secondary"
            onClick={() => handleAddContentBlock("image")}
          >
            <LuImagePlus />
          </button>
          <button
            className="button secondary"
            onClick={() => handleAddContentBlock("video")}
          >
            <LuVideo />
          </button>
        </div>

        <button
          className="button primary"
          style={{ marginTop: "20px", width: "100%" }}
          type="submit"
        >
          Створити
        </button>
      </form>
    </div>
  );
};
