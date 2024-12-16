import { useSelector } from "react-redux";
import { GoPencil, GoTrash } from "react-icons/go";
import { Button } from "../../../components/Button";

export const NewsList = () => {
  const newsList = useSelector((state) => state.common.news);

  return (
    // <div>
    //   <h2>News List</h2>
    //   {newsList.length === 0 ? (
    //     <p>No news available.</p>
    //   ) : (
    //     newsList.map((news) => (
    //       <div key={news.id}>
    //         <h3>{news.title}</h3>
    //         {news.contentBlocks.map((block, index) => {
    //           if (block.type === "text") {
    //             return <p key={index}>{block.content}</p>;
    //           }
    //           if (block.type === "image") {
    //             return <img key={index} src={`${block.content}`} alt="News" />;
    //           }
    //           if (block.type === "video") {
    //             return (
    //               <iframe
    //                 width="560"
    //                 height="315"
    //                 src={`https://www.youtube.com/embed/${block.content}`}
    //                 title="YouTube video player"
    //                 frameborder="0"
    //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //                 referrerPolicy="strict-origin-when-cross-origin"
    //                 allowFullScreen
    //               ></iframe>
    //             );
    //           }
    //           return null;
    //         })}
    //       </div>
    //     ))
    //   )}
    // </div>
    <>
      <ul className="list">
        {newsList.length === 0 ? (
          <p className="empty-data-title">Данних поки немає</p>
        ) : (
          newsList.map((news) => (
            <li key={news.id} className="list-item">
              <h4>{news.title}</h4>
              <div className="actions">
                <div className="action">
                  <GoPencil />
                </div>
                <div className="action">
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
    </>
  );
};
