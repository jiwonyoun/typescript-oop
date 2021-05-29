{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMeataData = Omit<Video, "id" | "title">;

  function getVideo2(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://...",
      data: "byte-data..",
    };
  }

  function getVideoMetaData2(id: string): VideoMeataData {
    return {
      url: "https://...",
      data: "byte-data..",
    };
  }
}
