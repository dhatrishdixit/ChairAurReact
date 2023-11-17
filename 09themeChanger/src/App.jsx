import Card from "./components/Card"
import ThemeBtn from "./components/ThemeBtn"

export default () => {
  return (
    <>
 
      <div className="flex flex-wrap min-h-screen items-center dark:bg-gray-800 p-4 flex-col ">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn />
                    </div>
                    <div className="flex gap-6 flex-row">
                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                    </div> 
                </div>
            </div>

    </>
  )
}


