import { Link } from "react-router-dom";
function Home() {
  return (
    <section className="hero">
      <h1>Crime Reporting System</h1>
      <p>
        Report crimes safely and help protect your community.
      </p>
      <Link to="/report" className="btn">
        Report Crime
      </Link>
    </section>
  );
}
export default Home;