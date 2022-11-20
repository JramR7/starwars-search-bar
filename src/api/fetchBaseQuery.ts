import env from "react-dotenv";

export enum HttpMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

type FetchBaseQueryProps = {
  endpoint?: string;
  httpMethod: HttpMethods;
};

const fetchBaseQuery = async ({
  endpoint = "",
  httpMethod,
}: FetchBaseQueryProps) => {
  const fetchUrl = `${env.API_URL}/${endpoint}`;
  try {
    const response = await fetch(fetchUrl, { method: httpMethod });
    return response.json();
  } catch (error) {
    return error;
  }
};

export default fetchBaseQuery;
