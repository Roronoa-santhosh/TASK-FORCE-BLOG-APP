import{Link}from"react-router-dom";


const Navbar = () => {
    return (

             <nav className="navbar">
            <h1>
                TASK FORCE  BOLGS
            </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New blog</Link>
                <Link to="/user">user</Link>
            </div>
        </nav>

 
       
      );
}
 
export default Navbar;