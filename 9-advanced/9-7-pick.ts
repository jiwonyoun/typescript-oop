{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMeataData = Pick<Video, "id" | "title">;

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://...",
      data: "byte-data..",
    };
  }

  function getVideoMetaData(id: string): VideoMeataData {
    return {
      id,
      title: "video",
    };
  }
}
