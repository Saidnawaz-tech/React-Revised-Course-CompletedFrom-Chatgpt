import {Routes, Route, Link } from 'react-router-dom';
export default ReactRouter;


function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Click on a user:</p>
      <ul>
        <li><Link to="/user/1">User 1</Link></li>
        <li><Link to="/user/2">User 2</Link></li>
        <li><Link to="/user/3">User 3</Link></li>
      </ul>
    </div>
  );
}

// Dynamic page
function User() {
  const { id } = useParams(); // get route parameter
  return <h2>👤 User Profile for User ID: {id}</h2>;
}

function ReactRouter() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} /> 
        {/* :id = dynamic parameter */}
      </Routes>
    </div>
  );
}