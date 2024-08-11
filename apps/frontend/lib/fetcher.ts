import { ofetch } from "ofetch";

export const $fetch = ofetch.create({
  baseURL: "http://localhost:3001",
  credentials: 'include'

})

export const fetcher = (url: string) => $fetch(url).then((res) => res)
