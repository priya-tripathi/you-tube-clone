import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { LOAD_VIDEOS } from "../DTO/graphqlDTO";

export default function Home() {
  var appBody =
    "Seems you haven't uploaded your first video," +
    "\n" +
    "what are you waiting for then!!" +
    "\n" +
    "Click the button below to upload your first video.";

  const { data: { videosInDb = [] } = {} } = useQuery(LOAD_VIDEOS);
  
  if (videosInDb.length > 0) {
    appBody = videosInDb.map((video) => (
      <div className="column is-half" key={video.file}>
        <div className="card">
          <div className="card-image">
            <video controls>
              <source src={video.path} />
            </video>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{video.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }
  return (
    <header className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column" style={{ textAlign: "center" }}>
              <h2>Welcome to GenTube</h2>
              <br />
              <pre>{appBody}</pre>
              <br />
              <Link to="/upload" className="button is-medium is-secondary">
                <button type="button">
                  <span>Upload</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
