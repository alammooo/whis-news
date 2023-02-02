import { NEWS_ACTION } from "./actionTypes"

export function setNews(payload) {
  return {
    type: NEWS_ACTION,
    payload,
  }
}

export function fetchNews() {
  return async (dispatch, getState) => {
    try {
      const { baseUrl } = getState()
      console.log(baseUrl, "INI DR CRETION");
      const response = await fetch(baseUrl + "/public/posts", {
        method: "GET",
      })
      if (!response.ok) throw response.statusText
      const data = await response.json()
      dispatch(setNews(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export function getNewsBySlug(slug) {
  return async (dispatch, getState) => {
    try {
      const { baseUrl } = getState()
      const response = await fetch(`${baseUrl}/public/posts/${slug}`,{
        method:"GET"
      })
      const data = await response.json()
      dispatch(setNews(data))
    } catch (error) {
      console.log(error)
    }
  }
}
