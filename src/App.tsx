import './styles/main.css'
import * as Dialog from '@radix-ui/react-dialog'

import { GameBanner } from './components/GameBanner';
import { AdBanner } from './components/AdBanner';

import logoImg from './assets/logo.svg'
import { AdModal } from './components/AdModal';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="logo nlw" className='max-w-[300px]'/>

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <GameBanner gameName={'League Of Legends'} bannerUrl={'/game-1.png'} ad={5}/>
      </div>

      <Dialog.Root>
        <AdBanner />
        <AdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
