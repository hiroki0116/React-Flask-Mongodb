import React from 'react'


function Home(){
    return(
<div className="flex flex-wrap md items-center h-screen">
      <div className="bg-gray-900 w-full md:w-1/2 h-screen">
        <div className="mx-32">
          <h1 className="text-6xl font-bold mt-16 text-white">Sapporo</h1>

          
          <div className="flex mt-16 font-light text-gray-500">
            <div className="pr-4">
              <span className="uppercase">Country</span>
              <p className="text-2xl  font-semibold pt-2 text-white">Japan</p>
            </div>
            <div className="pr-4">
              <span className="uppercase">Region</span>
              <p className="text-2xl  font-semibold pt-2 text-white">Hokkaido</p>
            </div>
          </div>

          
          <div
            className=" w-full  mt-16 text-gray-400 text-sm"
          >
            Sapporo (札幌) is the fifth largest city in Japan, and the largest city on the northern Japanese island of Hokkaido. Sapporo is considered the cultural, economical, and political center of Hokkaido.
            
            The annual Sapporo Snow Festival draws more than 2 million tourists from abroad. Other notable sites include the Sapporo Beer Museum, which is the only beer museum in Japan.
          </div>

  
        </div>
      </div>
      <div className="bg-red-600 w-full md:w-1/2 h-screen">
        <img
          src="https://cdn.pixabay.com/photo/2020/01/21/08/38/otaru-4782372_960_720.jpg"
          className="h-screen w-full"
          alt="hokkaido"
        />
      </div>
    </div>
    )
}

export default Home