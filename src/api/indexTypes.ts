export type ResponseIdOrStatus = {
  id?: string;
  status?: boolean;
};

export type ResponseSuccess<T = unknown> = {
  success: boolean;
  data: T;
  count: number;
};

export type ResponseError = {
  success: boolean;
  error: string;
};

