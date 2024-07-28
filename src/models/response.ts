export interface Response<T> {
  value: T[] | [];
  status: number | null;
  isSuccess: boolean | null;
  successMessage: string | null;
  correlationId: string | null;
  errors: string[] | [];
  validationErrors: string[] | [];
}
