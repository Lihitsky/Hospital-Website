// src/components/DeleteNews.js
import { useEffect, useState } from "react";
import axios from "axios";

export const NewsDelete = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(false);

  // Загрузка списка новостей
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/news`
      );
      setNewsList(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  // Удаление новости
  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/news/${id}`);
      setNewsList((prev) => prev.filter((news) => news.id !== id));
      alert("News deleted successfully!");
    } catch (error) {
      console.error("Error deleting news:", error);
      alert("Failed to delete news. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Delete News</h2>
      {newsList.length === 0 ? (
        <p>No news available to delete.</p>
      ) : (
        newsList.map((news) => (
          <div key={news.id} style={{ marginBottom: "20px" }}>
            <h3>{news.title}</h3>
            <button
              onClick={() => handleDelete(news.id)}
              disabled={loading}
              style={{ color: "red" }}
            >
              {loading ? "Deleting..." : "Delete"}
            </button>
          </div>
        ))
      )}
    </div>
  );
};
