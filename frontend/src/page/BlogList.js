import { Link } from "react-router-dom";


const BlogList = ({blogs , handleDelete}) => {

    return ( 
        <div className="blog-list">
              {blogs.map((blog) => (
        <div className="blog-preview" key={blog._id}>
          <Link to={`/blogs/${blog._id}`}>
                      <div className="blog-content">
               <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p> 
            </div>
          

          </Link>
          

        </div>
      ))}
        </div>
     );
}
 
export default BlogList;