import { useNavigate } from "react-router-dom"

export default function NewsCard({ news }) {
  const navigate = useNavigate()
  return (
    <div
      onClick={function () {
        navigate("/news/" + news.slug)
      }}
      className="flex items-center bg-white border rounded-lg shadow-md hover:bg-gray-100 col-span-2 pl-1"
      key={news.id}>
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={news.imgUrl}
        alt="newsPict"></img>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {news.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 ">{news.content}</p>
      </div>
    </div>
  )
}
