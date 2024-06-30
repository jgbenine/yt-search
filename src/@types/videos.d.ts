export type VideosType = {
  id?: string;
  url: string;
  title: string;
  thumbnail: string;
  chanelTitle: string;
  views: string;
}

export type YouTubeVideoItem = {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      standard: {
        url: string;
      };
    };
    channelTitle: string;
  };
  statistics: {
    viewCount: string;
  };
}