export const handleApi = async <T>(api: () => Promise<T>) => {
  try {
    const response = await api();
    return response;
  } catch (error) {
    return error;
  }
};
