import type { News } from "@/types/news";
import { Method, http } from "@/utils/http";

const langId = 1;

export const getNewsListApi = (filter: News | {} = {}) => {
  return http<News[]>({
    method: Method.GET,
    url: `/news/list?langId=${langId}`,
    data: filter,
  });
};
