import { useNavigate } from "react-router-dom"


function CardContent({ data }) {
  const navigate = useNavigate()

  return (
    <section id="cards">
      <div className="grid grid-cols-4 gap-2">
        {data.map((news, idx) => (
          <div
            onClick={function () {
              navigate("/news/" + news.slug)
            }}
            className={` bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 ${
              (!(idx % 5) && "col-span-2") || ""
            }`}>
            <div className="w-full">
              <img
                className="object-cover mx-auto w-full rounded-t-lg"
                src={news.imgUrl}
                alt="newsPict"
              />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {news.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 ">{news.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
  // return (
  //   <section id="cards">
  //     <div className="grid grid-cols-4 gap-2">
  //       <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 col-span-2 row-span-2">
  //         <img
  //           className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
  //           src="/docs/images/blog/image-4.jpg"
  //           alt=""></img>
  //         <div className="flex flex-col justify-between p-4 leading-normal">
  //           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
  //             Noteworthy technology acquisitions 2021
  //           </h5>
  //           <p className="mb-3 font-normal text-gray-700 ">
  //             Here are the biggest enterprise technology acquisitions of 2021 so
  //             far, in reverse chronological order.
  //           </p>
  //         </div>
  //       </div>
  //       <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100">
  //         <img
  //           className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
  //           src="/docs/images/blog/image-4.jpg"
  //           alt=""></img>
  //         <div className="flex flex-col justify-between p-4 leading-normal">
  //           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
  //             Noteworthy technology acquisitions 2021
  //           </h5>
  //           <p className="mb-3 font-normal text-gray-700 ">
  //             Here are the biggest enterprise technology acquisitions of 2021 so
  //             far, in reverse chronological order.
  //           </p>
  //         </div>
  //       </div>
  //       <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 row-span-2">
  //         <img
  //           className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
  //           src="/docs/images/blog/image-4.jpg"
  //           alt=""></img>
  //         <div className="flex flex-col justify-between p-4 leading-normal">
  //           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
  //             Noteworthy technology acquisitions 2021
  //           </h5>
  //           <p className="mb-3 font-normal text-gray-700 ">
  //             Here are the biggest enterprise technology acquisitions of 2021 so
  //             far, in reverse chronological order.
  //           </p>
  //         </div>
  //       </div>
  //       <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100">
  //         <img
  //           className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
  //           src="/docs/images/blog/image-4.jpg"
  //           alt=""></img>
  //         <div className="flex flex-col justify-between p-4 leading-normal">
  //           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
  //             Noteworthy technology acquisitions 2021
  //           </h5>
  //           <p className="mb-3 font-normal text-gray-700 ">
  //             Here are the biggest enterprise technology acquisitions of 2021 so
  //             far, in reverse chronological order.
  //           </p>
  //         </div>
  //       </div>
  //       <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100">
  //         <img
  //           className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
  //           src="/docs/images/blog/image-4.jpg"
  //           alt=""></img>
  //         <div className="flex flex-col justify-between p-4 leading-normal">
  //           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
  //             Noteworthy technology acquisitions 2021
  //           </h5>
  //           <p className="mb-3 font-normal text-gray-700 ">
  //             Here are the biggest enterprise technology acquisitions of 2021 so
  //             far, in reverse chronological order.
  //           </p>
  //         </div>
  //       </div>
  //       <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100">
  //         <img
  //           className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
  //           src="/docs/images/blog/image-4.jpg"
  //           alt=""></img>
  //         <div className="flex flex-col justify-between p-4 leading-normal">
  //           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
  //             Noteworthy technology acquisitions 2021
  //           </h5>
  //           <p className="mb-3 font-normal text-gray-700 ">
  //             Here are the biggest enterprise technology acquisitions of 2021 so
  //             far, in reverse chronological order.
  //           </p>
  //         </div>
  //       </div>
  //       <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100">
  //         <img
  //           className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
  //           src="/docs/images/blog/image-4.jpg"
  //           alt=""></img>
  //         <div className="flex flex-col justify-between p-4 leading-normal">
  //           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
  //             Noteworthy technology acquisitions 2021
  //           </h5>
  //           <p className="mb-3 font-normal text-gray-700 ">
  //             Here are the biggest enterprise technology acquisitions of 2021 so
  //             far, in reverse chronological order.
  //           </p>
  //         </div>
  //       </div>
  //       <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100">
  //         <img
  //           className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
  //           src="/docs/images/blog/image-4.jpg"
  //           alt=""></img>
  //         <div className="flex flex-col justify-between p-4 leading-normal">
  //           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
  //             Noteworthy technology acquisitions 2021
  //           </h5>
  //           <p className="mb-3 font-normal text-gray-700 ">
  //             Here are the biggest enterprise technology acquisitions of 2021 so
  //             far, in reverse chronological order.
  //           </p>
  //         </div>
  //       </div>
  //       <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100">
  //         <img
  //           className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
  //           src="/docs/images/blog/image-4.jpg"
  //           alt=""></img>
  //         <div className="flex flex-col justify-between p-4 leading-normal">
  //           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
  //             Noteworthy technology acquisitions 2021
  //           </h5>
  //           <p className="mb-3 font-normal text-gray-700 ">
  //             Here are the biggest enterprise technology acquisitions of 2021 so
  //             far, in reverse chronological order.
  //           </p>
  //         </div>
  //       </div>
  //       <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 col-span-2">
  //         <img
  //           className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
  //           src="/docs/images/blog/image-4.jpg"
  //           alt=""></img>
  //         <div className="flex flex-col justify-between p-4 leading-normal">
  //           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
  //             Noteworthy technology acquisitions 2021
  //           </h5>
  //           <p className="mb-3 font-normal text-gray-700 ">
  //             Here are the biggest enterprise technology acquisitions of 2021 so
  //             far, in reverse chronological order.
  //           </p>
  //         </div>
  //       </div>
  //       <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100">
  //         <img
  //           className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
  //           src="/docs/images/blog/image-4.jpg"
  //           alt=""></img>
  //         <div className="flex flex-col justify-between p-4 leading-normal">
  //           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
  //             Noteworthy technology acquisitions 2021
  //           </h5>
  //           <p className="mb-3 font-normal text-gray-700 ">
  //             Here are the biggest enterprise technology acquisitions of 2021 so
  //             far, in reverse chronological order.
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // )
}

export default CardContent
