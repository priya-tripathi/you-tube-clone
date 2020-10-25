import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Alert } from "react-bootstrap";
import { useMutation, useApolloClient } from "@apollo/client";
import { UPLOAD_MUTATION } from "../DTO/graphqlDTO";

export function Upload() {
  const [message, setMessage] = useState("");
  const [uploadVideo, { error }] = useMutation(UPLOAD_MUTATION);
  const apolloClient = useApolloClient();

  let display = "";
  let type = "";
  if (message) {
    display = message;
    type = "success";
  } else if (error) {
    display = error.message;
    type = "danger";
  }
  function onChange({
    target: {
      files: [file],
    },
  }) {
    uploadVideo({ variables: { file } }).then(() => {
      apolloClient.resetStore();
      setMessage(`File uploaded successfully!`);
    });
  }

  return (
    <div className="column" style={{ textAlign: "center" }}>
      <h2>Upload</h2>
      <form onChange={onChange} style={{ display: "inline-table" }}>
        <Form.File
          id="uploadVideo"
          label="Browse from your device"
          accept="video/*"
          required="Alert"
        />

        <Alert variant={type}>{display}</Alert>
        <div className="home">
          <Link to="/">
            <button className="button is-text">Home</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Upload;
