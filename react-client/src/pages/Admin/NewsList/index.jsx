import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNewsThunk } from "../../../store/newsReducer";

import { Button } from "../../../components/Button";

import { GoPencil, GoTrash } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const NewsList = () => {
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.news.news);

  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 4;

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = newsList.slice(indexOfFirstNews, indexOfLastNews);

  const nextPage = () => {
    if (currentPage < Math.ceil(newsList.length / newsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const totalPages = Math.ceil(newsList.length / newsPerPage);

  const handleDeleteNews = (id) => {
    const result = window.confirm("Ви впевнені, що хочете видалити цю новину?");

    if (result) {
      try {
        dispatch(deleteNewsThunk(id)).unwrap();
      } catch (error) {
        console.error("Error delete news:", error);
      }
    }
  };

  return (
    <>
      <ul className="list">
        {newsList.length === 0 ? (
          <p className="empty-data-title">Данних поки немає</p>
        ) : (
          currentNews.map((news) => (
            <li
              key={news.id}
              className="list-item"
              style={{ flexDirection: "row" }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4>{news.title}</h4>
                <span style={{ fontSize: "14px" }}>
                  Створено:{" "}
                  {new Date(news.createdAt).toLocaleDateString("uk-UA")}
                </span>
                <span style={{ fontSize: "14px" }}>
                  Редаговано:{" "}
                  {new Date(news.updatedAt).toLocaleDateString("uk-UA")}
                </span>
              </div>

              <div className="actions">
                <div className="action">
                  <GoPencil />
                </div>
                <div
                  className="action"
                  onClick={() => handleDeleteNews(news.id)}
                >
                  <GoTrash />
                </div>
              </div>
            </li>
          ))
        )}
      </ul>

      <Button
        href={"news/create"}
        text={"Створити новину"}
        style={{ width: "100%" }}
      />
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
            <IoIosArrowBack />
          </button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            <IoIosArrowForward />
          </button>
        </div>
      )}
    </>
  );
};
