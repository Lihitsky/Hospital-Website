import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewsThunk } from "../../../store/newsReducer";
import { useDispatch } from "react-redux";

import { LuLetterText } from "react-icons/lu";
import { LuImagePlus } from "react-icons/lu";
import { LuVideo } from "react-icons/lu";
import { GoTrash } from "react-icons/go";

const blockTypesLocalization = {
  text: "Текст",
  image: "Зображення",
  video: "Відео",
};

export const NewsCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [contentBlocks, setContentBlocks] = useState([]);
  const [files, setFiles] = useState([]);

  const handleTitleChange = (event) => setTitle(event.target.value);

  const handleAddContentBlock = (type) => {
    setContentBlocks([...contentBlocks, { type, content: "" }]);
  };

  const handleDeleteContentBlock = (index) => {
    const result = window.confirm("Ви впевнені, що хочете видалити цю секцію?");

    if (result) {
      const updatedBlocks = contentBlocks.filter((_, i) => i !== index);
      setContentBlocks(updatedBlocks);

      const fileName = contentBlocks[index]?.content;
      if (fileName && files.length > 0) {
        setFiles(files.filter((file) => file.name !== fileName));
      }
    }
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

    if (contentBlocks.length === 0) {
      alert("Будь-ласка, додайте хоча б одну секцію.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);

    formData.append(`contentBlocks`, JSON.stringify(contentBlocks));

    for (let file of files) {
      formData.append("files", file);
    }

    try {
      dispatch(createNewsThunk(formData))
        .unwrap()
        .then(() => {
          navigate("/admin");
        });
    } catch (error) {
      console.error("Error adding news:", error);
    }
  };

  const handleCancel = () => {
    if (title || contentBlocks.length !== 0 || files.length !== 0) {
      const result = confirm(
        "Ви дійсно хочете вийти? Всі данні будуть втрачені."
      );
      if (!result) return;
    }
    navigate(-1);
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
            <li className="list-item" style={{ alignItems: "flex-start" }}>
              <label style={{ marginBottom: "0px" }}>
                Секція {index + 1} ({blockTypesLocalization[block.type]}):
              </label>
              <div
                className="list-item-delete"
                onClick={() => handleDeleteContentBlock(index)}
              >
                <GoTrash />
              </div>
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
                  style={{ marginTop: "15px", maxWidth: "222px" }}
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
        <button
          className="button cancel"
          style={{ marginTop: "20px", width: "100%" }}
          onClick={handleCancel}
        >
          Назад
        </button>
      </form>
    </div>
  );
};
