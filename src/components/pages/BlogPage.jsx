import { withBase } from '@/lib/url';

const BlogPage = () => {
  return (
    <>
      <div className="content-container blog-container">
        <div className="blog-element">
          <span className="about-text">September 10, 2025</span>
          <div className=" about-text">
            <a href={withBase('/blog/nginx_arm_problem/')} className="blog-link">
              Nginx_ARM_Problem
            </a>
            <span className="post-author"></span>
          </div>
        </div>
        <div className="blog-element">
          <span className="about-text">August 7, 2025</span>
          <div className="about-text">
            <a href={withBase('/blog/my_mac_config/')} className="blog-link">
              My_Mac_Config
            </a>
            <span className="post-author"></span>
          </div>
        </div>
        <div className="blog-element">
          <span className="about-text">August 2, 2025</span>
          <div className="about-text">
            <a
              href="https://github.com/boykin345/website_on_next"
              className="blog-link"
            >
              This_website
            </a>
            <span className="post-author"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
