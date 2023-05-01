import {NO_IMAGE_URL} from "./constants";

export const getImageUrl = (body) => {
  if(!body) return NO_IMAGE_URL
  const regex = /<img.*?src="(.*?)"/;
  const match = body.match(regex);
  return match ? match[1] : NO_IMAGE_URL
}
