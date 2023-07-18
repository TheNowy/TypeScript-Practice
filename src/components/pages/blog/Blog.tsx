import scss from './Blog.module.scss'

const Blog = () => {
  return (
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
            <div className={scss.home_content}>
            <h1>Blog</h1>
            </div>
        </div>
      </div>
    </>
  )
}

export default Blog