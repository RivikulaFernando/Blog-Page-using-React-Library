import {Link} from 'react-router-dom';

const BlogList = ({title,blogs}) => {
    
    return ( 

    <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((blog) => (
           
            <div className="blog-preview" key={blog.id}>
                <Link to = {`/blogs/${blog.id}`}>
                <h2 className="blog-preview-title">{blog.title}</h2>
                <p className="blog-preview-author"> Written by {blog.author} </p>
                </Link> 
                </div>
        ))}
    </div>   

     );
}
 
export default BlogList;