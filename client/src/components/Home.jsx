import { Link } from "react-router-dom"

const Home = (props) =>
{
  return (
    <div>

      <button></button>

      <div className="py-24">

        <div>
          <h1 className="text-center font-bold mt-10 text-6xl">OUR CRUD APP</h1>
        </div>

        <div className="">
          <div className="flex justify-center mt-10">
              <button className="border mx-2 px-4 py-2.5 rounded-lg text-2xl bg-purple-400 hover:bg-purple-500 text-white"> <Link to ="/create" >Insert Record</Link></button >
              <button className="border mx-2 px-4 py-2.5 rounded-lg text-2xl bg-sky-400 text-white hover:bg-sky-500"><Link to ="/display" >Display Record</Link></button>
          </div>
        </div>
      </div>

      <hr/>
      <div  className=" mt-2">
        <p className="text-center py-2 font-bold text-3xl ">CRUD [Create,Read,Update,Delete]</p>
      </div>
    




    </div>
  )
}

export default Home