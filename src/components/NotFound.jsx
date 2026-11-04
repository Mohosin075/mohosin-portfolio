import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="CC" style={{ paddingTop: 140, paddingBottom: 100, minHeight: "70vh" }}>
      <h1 className="font-display">404 — Page not found</h1>
      <p style={{ margin: "24px 0" }}>The page you requested does not exist.</p>
      <Link to="/" className="btn-v">Back to Home</Link>
    </section>
  );
}
