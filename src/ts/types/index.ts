export type Image = {
  src?: string;
  alt?: string;
  title?: string;
  className?: string;
};

export type Category = {
  [key: string]: any;
};

export type Footer = {
  [key: string]: any;
};

export type Header = {
  [key: string]: any;
};

export type useGetType = {
  url?: any;
  queryKey?: string[];
  onError?: (data: any) => void;
  onSuccess?: (error: any) => void;
};
