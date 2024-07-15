export type Episode = {
    image: string;
    youtube: string;
    spotify: string;
    apple: string;
};
  
export type Episodes = {
    [key: string]: Episode;
};