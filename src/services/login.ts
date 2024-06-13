import { Method, http } from "@/utils/http";

const URL = "http://localhost:8080";

export const getCodeImgApi = () => {
  return http<{ img: string; uuid: string; captchaEnabled: boolean }>({
    method: Method.GET,
    url: `${URL}/captchaImage`,
    header: {
      isToken: false,
    },
  }).then((res) => {
    if (res.data.captchaEnabled) {
      res.data.img = "data:image/gif;base64," + res.data.img;
    }
    return res;
  });
};

export const loginApi = (
  username: string,
  password: string,
  code: string,
  uuid: string
) => {
  return http<{ token?: string }>({
    method: Method.POST,
    url: `${URL}/login`,
    header: {
      isToken: false,
    },
    data: {
      username,
      password,
      code,
      uuid,
    },
  });
};

export function logoutApi() {
  return http({
    url: `${URL}/logout`,
    method: Method.POST,
  });
}
