import React, { useState, useEffect, useContext } from "react";
import { Fade } from "react-reveal";
import "./YoutubeList.scss";
import { youtubeSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

// Fallback high-fidelity videos
const fallbackVideos = [
  {
    id: "i53Gi_KxLvc",
    title: "System Design Interview – How to Design a YouTube-like Platform",
    description: "A comprehensive guide on system design principles, covering database replication, CDN edge servers, load balancing, and video transcoding at scale.",
    pubDate: "2026-04-15",
    views: "340K views",
    link: "https://www.youtube.com/watch?v=i53Gi_KxLvc",
    thumbnail: "https://img.youtube.com/vi/i53Gi_KxLvc/mqdefault.jpg"
  },
  {
    id: "9jV92_U1c_M",
    title: "Microservices Architecture Explained: Orchestration vs Choreography",
    description: "Deep dive into microservices communication patterns. Learn the differences, benefits, and architectural trade-offs between saga orchestration and saga choreography.",
    pubDate: "2026-03-22",
    views: "185K views",
    link: "https://www.youtube.com/watch?v=9jV92_U1c_M",
    thumbnail: "https://img.youtube.com/vi/9jV92_U1c_M/mqdefault.jpg"
  },
  {
    id: "HXV3zeQKqGY",
    title: "Distributed Systems: Raft Consensus Algorithm in 10 Minutes",
    description: "An intuitive explanation of the Raft consensus protocol. Learn how leader election, log replication, and safety guarantees work under the hood in partitioned networks.",
    pubDate: "2026-02-10",
    views: "220K views",
    link: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
    thumbnail: "https://img.youtube.com/vi/HXV3zeQKqGY/mqdefault.jpg"
  }
];

function formatViews(views) {
  if (!views) return "";
  const num = parseInt(views);
  if (isNaN(num)) return views;
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M views";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K views";
  }
  return num + " views";
}

export default function YoutubeList() {
  const { isDark } = useContext(StyleContext);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!youtubeSection.display) {
      setLoading(false);
      return;
    }

    const { channelId, apiKey } = youtubeSection;

    if (apiKey) {
      // Use YouTube Data API v3 if key is present
      fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${youtubeSection.maxResults || 6}&type=video`
      )
        .then((res) => res.json())
        .then((searchData) => {
          if (searchData && searchData.items && searchData.items.length > 0) {
            const videoIds = searchData.items
              .map((item) => item.id.videoId)
              .filter(Boolean)
              .join(",");

            // Fetch detailed statistics and descriptions
            fetch(
              `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoIds}&part=snippet,statistics`
            )
              .then((res) => res.json())
              .then((detailsData) => {
                if (detailsData && detailsData.items) {
                  const formatted = detailsData.items.map((item) => ({
                    id: item.id,
                    title: item.snippet.title,
                    description: item.snippet.description
                      ? item.snippet.description.slice(0, 150) +
                        (item.snippet.description.length > 150 ? "..." : "")
                      : "",
                    pubDate: item.snippet.publishedAt.split("T")[0],
                    views: formatViews(item.statistics.viewCount),
                    link: `https://www.youtube.com/watch?v=${item.id}`,
                    thumbnail: item.snippet.thumbnails.medium.url
                  }));
                  setVideos(formatted);
                } else {
                  setVideos(fallbackVideos);
                }
                setLoading(false);
              })
              .catch((err) => {
                console.error("Error fetching YouTube video details:", err);
                setVideos(fallbackVideos);
                setLoading(false);
              });
          } else {
            setVideos(fallbackVideos);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.error("Error fetching YouTube via API:", err);
          setVideos(fallbackVideos);
          setLoading(false);
        });
    } else if (channelId) {
      // Fallback to RSS to JSON fetch (no key required)
      fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data && data.items && data.items.length > 0) {
            const formatted = data.items
              .slice(0, youtubeSection.maxResults || 6)
              .map((item) => {
                // Extract video ID from link (e.g. https://www.youtube.com/watch?v=VIDEO_ID)
                const videoId = item.link.split("v=")[1];
                return {
                  id: videoId,
                  title: item.title,
                  description: item.description,
                  pubDate: item.pubDate ? item.pubDate.split(" ")[0] : "Recently",
                  views: "", // No views available in RSS feed
                  link: item.link,
                  thumbnail: item.thumbnail || `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
                };
              });
            setVideos(formatted);
          } else {
            setVideos(fallbackVideos);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching YouTube via RSS:", err);
          setVideos(fallbackVideos);
          setLoading(false);
        });
    } else {
      setVideos(fallbackVideos);
      setLoading(false);
    }
  }, []);

  if (!youtubeSection.display) {
    return null;
  }

  return (
    <div className="youtube-section" id="youtube">
      <Fade bottom duration={1000} distance="40px">
        <div className="youtube-container">
          <h1 className="green-heading">YouTube</h1>
          {youtubeSection.subtitle && (
            <p className={isDark ? "section-subtitle dark-mode-text" : "section-subtitle"}>
              {youtubeSection.subtitle}
            </p>
          )}

          {loading ? (
            <div className="youtube-loading font-mono">
              Fetching stream feed...
            </div>
          ) : (
            <div className="youtube-list">
              {videos.map((video) => (
                <div key={video.id} className="youtube-tile">
                  {/* Left: Thumbnail */}
                  <div className="tile-visual">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="video-thumbnail-img"
                    />
                    <div className="play-button-overlay">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>

                  {/* Center: Title & Description */}
                  <div className="tile-content">
                    <h3
                      className={isDark ? "tile-title dark-mode-text" : "tile-title"}
                      dangerouslySetInnerHTML={{ __html: video.title }}
                    ></h3>
                    {video.description && (
                      <p className={isDark ? "tile-desc dark-mode-text" : "tile-desc"}>
                        {video.description}
                      </p>
                    )}
                  </div>

                  {/* Right: Metadata & Watch Button */}
                  <div className="tile-actions">
                    <div className="video-metadata">
                      {video.views && video.views !== "Watch Video" && (
                        <span className="metadata-item views">{video.views}</span>
                      )}
                      <span className="metadata-item date">{video.pubDate}</span>
                    </div>
                    <a
                      href={video.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tile-action-btn watch-btn"
                    >
                      Watch
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Fade>
    </div>
  );
}
