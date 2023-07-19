import style from "./Paginated.module.css";
import imgPrev from "../../assets/prev.png";
import imgNext from "../../assets/next.png";

const Paginated = ({
  currentPage,
  currentPageSet,
  postPerPage,
  totalPosts,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(currentPage);
  return (
    <div className={style.divAll}>
      <button
        onClick={() => currentPageSet(currentPage > 1 ? currentPage - 1 : 1)}
        className={style.buttonsPaginated}
      >
        <img src={imgPrev} alt="" className={style.img} />
      </button>

      {pageNumbers?.map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => currentPageSet(pageNum)}
          className={currentPage == pageNum ? style.numberFocus : style.numberNoFocus}
        >
          {pageNum}
        </button>
      ))}

      <button
        onClick={() =>
          currentPageSet(
            currentPage >= 1 && currentPage < pageNumbers.length
              ? currentPage + 1
              : pageNumbers.length
          )
        }
        className={style.buttonsPaginated}
      >
        <img src={imgNext} alt="" className={style.img} />
      </button>
    </div>
  );
};
export default Paginated;