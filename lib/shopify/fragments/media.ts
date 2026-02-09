const mediaFragment = /* GraphQL */ `
  fragment media on Media {
    mediaContentType
    alt
    ... on MediaImage {
      image {
        url
        altText
        width
        height
      }
    }
    ... on Video {
      sources {
        url
        mimeType
        format
        width
        height
      }
      previewImage {
        url
      }
    }
    ... on ExternalVideo {
      embedUrl
      host
    }
  }
`;

export default mediaFragment;
