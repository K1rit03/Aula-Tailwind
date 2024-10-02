import ReactImg from './assets/react.svg'

function App() {
  

  return (
    <div className="min-h-screen flex flex-col" >
      <header className="p-3 flex justify-center items-center flex flex-col bg-indigo-600 text-slate-100">
        <h1 className="text-3x1">Aula Tailwind </h1>
        <p>exemplo de paginá</p>
      </header>
      <main className="grow">
        <h2 className="text-2xl text-center  text-bold m-4 ">Ficha dos clientes</h2>
        <div className="p-6 flex  justify-evenly ">
          <div className="w-64 p-4 shadow-2xl text-center rounded-xl border border-indigo-950">
            <h3 className="text-2xl mb-2">Titulo</h3>
            <img src={ReactImg} alt="" className="w-2/3 m-auto " />
            <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aspernatur quos, eveniet saepe nesciunt voluptas necessitatibus et maiores reprehenderit, error dolorem sit. Dolorem culpa ducimus quia consectetur molestiae odit aperiam?</p>
          </div>
          <div className="p-6 flex flex-col justify-center items-center">
          <div className="w-64 p-4 shadow-2xl text-center rounded-xl border border-indigo-950">
            <h3 className="text-2xl mb-2">Titulo</h3>
            <img src={ReactImg} alt="" className="w-2/3 m-auto " />
            <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aspernatur quos, eveniet saepe nesciunt voluptas necessitatibus et maiores reprehenderit, error dolorem sit. Dolorem culpa ducimus quia consectetur molestiae odit aperiam?</p>
          </div>
        </div>
        <div className="p-6 flex flex-col justify-center items-center">
          <div className="w-64 p-4 shadow-2xl text-center rounded-xl border border-indigo-950">
            <h3 className="text-2xl mb-2">Titulo</h3>
            <img src={ReactImg} alt="" className="w-2/3 m-auto " />
            <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aspernatur quos, eveniet saepe nesciunt voluptas necessitatibus et maiores reprehenderit, error dolorem sit. Dolorem culpa ducimus quia consectetur molestiae odit aperiam?</p>
          </div>
        </div>
        </div>
        
      </main>

      <footer className="p-3 justify-center items-center bg-black text-white">
        <p>Av Paulista,1060 - bela vista - SP</p>
      </footer>
    </div>
  )
}

export default App
