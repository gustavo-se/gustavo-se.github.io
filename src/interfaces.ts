export interface Gif {
  gif: string;
  title: string;
  id: string;
}

interface Url {
  url: string;
}

interface Original {
  original: Url;
}

export interface GifFetch {
  images: Original;
  id: string;
  title: string;
  data: [];
}
