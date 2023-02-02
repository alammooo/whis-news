/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchNews } from "../store/actions/actionCreator"
import CardContent from "./CardContent"
// import NewsCard from "./NewsCard"

function NewsList() {
  const dispatch = useDispatch()
  const { newsReducer } = useSelector((state) => state)
  console.log(newsReducer, "INI NEWSLIST")
  useEffect(() => {
    console.log("masuk")
    dispatch(fetchNews())
  }, [])

  if (!newsReducer.length) {
    return (
      <div className="cols-span-2">
        <h1 className=" text-center font-medium text-xl">Data is not found</h1>
      </div>
    )
  }
  return (
    <section id="cards">
      {/* // <NewsCard news={el} key={el.id} /> */}
      <CardContent data={newsReducer} />
    </section>
  )
}

export default NewsList
