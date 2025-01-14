import React, { useEffect, useState } from "react";
import "./contributor.css";

// Replace these with your repository details
const REPO_OWNER = "Sanskriti65";
const REPO_NAME = "Swigi-clone";
const GITHUB_TOKEN = ""; // Optional: Add your GitHub personal access token to avoid rate limits

const Contributor = () => {
  const [contributors, setContributors] = useState([]); // State for contributors
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [error, setError] = useState(false); // Error state

  // Fetch contributors for the current page
  const fetchContributors = async (page) => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contributors?page=${page}&per_page=4`,
        {
          headers: GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {},
        }
      );

      if (!response.ok) throw new Error("Failed to fetch contributors");

      const data = await response.json();
      setContributors(data);
      setError(false);
    } catch (error) {
      console.error("Error fetching contributors:", error);
      setContributors([]);
      setError(true);
    }
  };

  useEffect(() => {
    fetchContributors(currentPage);
  }, [currentPage]);

  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePrevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="container">
      <h1 className="title">Meet Our Contributors</h1>
      {error ? (
        <p className="error">Failed to load contributors. Please try again later.</p>
      ) : (
        <>
          <div className="contributors-grid">
            {contributors.map((contributor) => (
              <div className="contributor-card" key={contributor.id}>
                <img
                  src={contributor.avatar_url}
                  alt={`Avatar of ${contributor.login}`}
                  className="avatar"
                />
                <h3>{contributor.login}</h3>
                <a
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </div>
            ))}
          </div>
          <div >
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <button onClick={handleNextPage}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Contributor;