type ResponsePage<T> = {
  data: T;
  page: number;
  total_pages: number;
};

type ResponseObject<T> = {
  data: T;
};

export type Response<T> = ResponsePage<T> | ResponseObject<T>;
