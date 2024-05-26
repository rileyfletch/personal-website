export default function Page() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl">Home</h1>
  
        <div className="flex flex-row gap-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button 1
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
            Button 2
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
            Button 3
          </button>
        </div>
  
      </main>
    );
  }
  