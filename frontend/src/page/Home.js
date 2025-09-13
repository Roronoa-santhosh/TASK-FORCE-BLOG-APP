
import useFetch from "../useFetch";
import BlogList from "./BlogList";

const Home = () => {

    const{data:blogs,isPending,error} =useFetch("http://localhost:4000/api/blogs");
 








  return (
  <div className="Home">
  {error && <div style={{ color: "red", fontSize:"50px" }}>Error: {error}</div>}
  {isPending && <div>Loading...</div>}
  {blogs && <BlogList blogs={blogs} />}
</div>
  );
};

export default Home;
