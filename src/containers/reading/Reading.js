import React, {useState, useEffect, useContext} from "react";
import {Fade} from "react-reveal";
import "./Reading.scss";
import StyleContext from "../../contexts/StyleContext";
import {readingSection} from "../../portfolio";

export default function Reading() {
  const {isDark} = useContext(StyleContext);
  const [readingData, setReadingData] = useState(null);

  useEffect(() => {
    fetch("./reading.json")
      .then(res => res.json())
      .then(data => setReadingData(data))
      .catch(err => console.error("Error loading reading list:", err));
  }, []);

  if (!readingData) {
    return null; // Or a sleek loading skeleton
  }

  // Paper/Document SVG Icon
  const DocumentIcon = () => (
    <svg
      className="reading-tile-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );

  // Book SVG Icon (Fallback)
  const BookIcon = () => (
    <svg
      className="reading-tile-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );

  return (
    <div className="reading-section" id="reading">
      <Fade bottom duration={1000} distance="40px">
        <div className="reading-container">
          <h1 className="green-heading">Reading List</h1>
          {readingSection.subtitle && (
            <p
              className={
                isDark ? "section-subtitle dark-mode-text" : "section-subtitle"
              }
            >
              {readingSection.subtitle}
            </p>
          )}

          {/* Books Section */}
          <div className="reading-subset">
            <h2 className="subset-title">
              <i className="fas fa-book" style={{marginRight: "10px"}}></i>
              Books
            </h2>
            <div className="reading-list">
              {readingData.books.map(book => (
                <div key={book.id} className="reading-tile">
                  {/* Left: Thumbnail or Book Icon */}
                  <div className="tile-visual">
                    {book.cover ? (
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="book-cover-img"
                        onError={e => {
                          e.target.onerror = null;
                          e.target.style.display = "none";
                          e.target.parentNode.classList.add("use-icon");
                        }}
                      />
                    ) : (
                      <BookIcon />
                    )}
                    <div className="icon-overlay">
                      <BookIcon />
                    </div>
                  </div>

                  {/* Center: Content (Title and Description) */}
                  <div className="tile-content">
                    <h3
                      className={
                        isDark ? "tile-title dark-mode-text" : "tile-title"
                      }
                    >
                      {book.title}
                    </h3>
                    <span className="tile-meta">by {book.author}</span>
                    <p
                      className={
                        isDark ? "tile-desc dark-mode-text" : "tile-desc"
                      }
                    >
                      {book.description}
                    </p>
                  </div>

                  {/* Right: Status and Actions */}
                  <div className="tile-actions">
                    <span
                      className={`status-badge ${book.status.toLowerCase()}`}
                    >
                      {book.status}
                    </span>
                    {book.link && (
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tile-action-btn"
                      >
                        Details
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Articles & Papers Section */}
          <div className="reading-subset">
            <h2 className="subset-title">
              <i className="fas fa-file-alt" style={{marginRight: "10px"}}></i>
              Articles &amp; Papers
            </h2>
            <div className="reading-list">
              {readingData.articles.map(paper => (
                <div key={paper.id} className="reading-tile">
                  {/* Left: Document Icon */}
                  <div className="tile-visual use-icon">
                    <DocumentIcon />
                  </div>

                  {/* Center: Content (Title and Description) */}
                  <div className="tile-content">
                    <h3
                      className={
                        isDark ? "tile-title dark-mode-text" : "tile-title"
                      }
                    >
                      {paper.title}
                    </h3>
                    <span className="tile-meta">by {paper.author}</span>
                    <p
                      className={
                        isDark ? "tile-desc dark-mode-text" : "tile-desc"
                      }
                    >
                      {paper.description}
                    </p>
                  </div>

                  {/* Right: Status and Actions */}
                  <div className="tile-actions">
                    <span
                      className={`status-badge ${paper.status.toLowerCase()}`}
                    >
                      {paper.status}
                    </span>
                    {paper.link && (
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tile-action-btn"
                      >
                        Read Paper
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
