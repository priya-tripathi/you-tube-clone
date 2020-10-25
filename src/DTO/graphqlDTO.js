import { gql } from "@apollo/client";

export const UPLOAD_MUTATION = gql`
  mutation uploadVideo($file: Upload!) {
    uploadVideo(file: $file) {
      filename
    }
  }
`;

export const LOAD_VIDEOS = gql`
  query getVideos {
    videosInDb {
      filename
      path
    }
  }
`;
