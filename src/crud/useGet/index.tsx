import api from "services/axios";
import { lodash } from "services";
import { useGetType } from "ts/types";
import { useQuery } from "@tanstack/react-query";

const useGet = ({
  url,
  queryKey,
  onError = () => {},
  onSuccess = () => {},
}: useGetType) => {
  const data = useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      return await api.get(url);
    },
    onSuccess: (data) => onSuccess(data),
    onError: (error) => onError(error),
  });
  return { ...lodash.get(data, "data") };
};

export default useGet;
