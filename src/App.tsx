import { useAtom } from 'jotai';
import FileUploaderArea from './components/file-uploader-area'
import { Button } from './components/ui/button'
import viteLogo from '/vite.svg'
import { filesAtom } from './atoms/files-atom';

function App() {
  const [files] = useAtom(filesAtom);

  return (
    <div className='flex flex-col justify-between h-screen'>
      <main className="w-full container items-center h-full justify-center flex flex-col gap-6">
        <div className='flex flex-col items-center'>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="w-20" alt="Vite logo" />
          </a>
          <h1 className='font-bold text-5xl'>Sensef</h1>
          <p>Transcript all kind of files to an shortly text</p>
        </div>
        <div className='max-w-2xl w-full'>
          <FileUploaderArea />
        </div>
        <div className='max-w-2xl w-full'>
          <Button className='w-full' disabled={!files || files.length === 0}>
            Rock It!
          </Button>
        </div>
      </main>
      <footer className='text-center p-2'>
        Provided by <a href="https://github.com/brunofilho1" target='_blank' className='text-blue-300 font-semibold'>Bruno Filho</a> | Hello there 🤟
      </footer>
    </div>
  )
}

export default App
