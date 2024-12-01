import { useEffect, useState } from "react";
import axios from "axios";

export const NewsList = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/news");
        setNewsList(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2>News List</h2>
      {newsList.length === 0 ? (
        <p>No news available.</p>
      ) : (
        newsList.map((news) => (
          <div key={news.id}>
            <h3>{news.title}</h3>
            {news.contentBlocks.map((block, index) => {
              if (block.type === "text") {
                return <p key={index}>{block.content}</p>;
              }
              if (block.type === "image") {
                return <img key={index} src={`${block.content}`} alt="News" />;
              }
              if (block.type === "video") {
                return (
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${block.content}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                );
              }
              return null;
            })}
          </div>
        ))
      )}
    </div>
  );
};
