import style from "./Blog.module.css";

const Blog = () => {
  return (
    <div className={style.blog}>
      <div className={style.blog_wrapper}>
        <div className={style.content}>
          <p className={style.heading}>Blogs</p>
          <div className={style.blog_box}>
            <div className={style.blog1}>
              <p className={style.blog_text}>GO Grow</p>
            </div>
            <div className={style.blog2}>
              <p className={style.blog_text}>GO Grow</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
