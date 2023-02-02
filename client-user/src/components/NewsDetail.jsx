import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getNewsBySlug } from "../store/actions/actionCreator"

function NewsDetail() {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const { newsReducer } = useSelector((state) => state)

  newsReducer.updatedAt = new Date().toLocaleDateString("en-CA")
  useEffect(() => {
    dispatch(getNewsBySlug(slug))
  }, [dispatch, slug])

  return (
    <div className="pb-5">
      <div className="flex flex-col gap-3 bg-white p-5 shadow-lg">
        {Object.keys(newsReducer).length ? (
          <>
            <div className="flex gap-3">
              <h1 className="font-light text-lg underline">
                {newsReducer.Category?.name}
              </h1>
              <h1 className="font-light text-lg underline">
                {newsReducer.Tag?.name}
              </h1>
            </div>
            <h1 className="font-medium text-3xl">{newsReducer.title}</h1>
            <div className="flex gap-3">
              <h1 className="text-lg">{newsReducer.User?.email}</h1>
              <div className="border"></div>
              <h1 className="text-lg font-light">
                Created at : {newsReducer.updatedAt}
              </h1>
            </div>
            <div className="w-2/4 mx-auto p-2 shadow-md">
              <img src={newsReducer.imgUrl} alt="newsPict"></img>
            </div>
            <h1 className="font-light text-lg">
              {newsReducer.content} Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Omnis, voluptates accusamus nam iure nostrum
              blanditiis. Quas blanditiis accusamus doloribus voluptatem,
              doloremque et dolores exercitationem ad ullam, nesciunt laudantium
              fugit tenetur. Amet tenetur cupiditate accusantium blanditiis?
              Corporis praesentium aperiam nisi id culpa et qui nam neque
              deleniti eveniet repellat, deserunt laborum quidem labore non fuga
              voluptatem quia. Ea nisi nobis aspernatur! Eveniet quibusdam
              quidem, animi perferendis impedit accusantium rem harum voluptatum
              culpa voluptatem debitis nemo eaque quasi corporis ipsam sit
              consequuntur neque quae sunt veritatis officia excepturi fugit
              nisi! Corporis, autem? Adipisci tempora asperiores quia hic omnis
              eaque veniam consequuntur ea facilis dolore nihil natus esse ex
              quisquam iusto consequatur sint autem, nesciunt exercitationem rem
              ducimus voluptatum praesentium similique. Sint, voluptatem. Dolor
              tempore enim facilis sunt minus aspernatur expedita accusamus
              explicabo fugit esse, atque repudiandae alias, exercitationem
              ipsa! In voluptates sequi illo earum, quae ad molestiae sunt,
              quod, velit voluptatibus enim?
            </h1>
            <h1>{newsReducer.description}</h1>
          </>
        ) : (
          <h1 className="text-center text-xl">No Details Found</h1>
        )}
      </div>
    </div>
  )
}

export default NewsDetail
