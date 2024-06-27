export type VideosType = {
  url: string;
  title: string;
  thumbnail: string;
  chanelTitle: string;
  views: number;
}

export type YouTubeVideoItem = {
  id: string;
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