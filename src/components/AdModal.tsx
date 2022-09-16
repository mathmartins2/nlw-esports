import { Input } from './Form/Input';
import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react';

export function AdModal() {
    return (
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'>
            <Dialog.Content className='fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 w-[600px] -translate-y-1/2 rounded-lg shadow-lg shadow-black/25'>
              <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

              <form className='mt-8 flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <label className='font-semibold' htmlFor="game">Qual o game?</label>
                  <Input id='game' type="text"  placeholder='Selecione o game que deseja jogar'/>
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor="name">Seu nome (ou nickname)</label>
                  <Input id='name' type="text"  placeholder='Como te chamam?'/>
                </div>

                <div className='grid grid-cols-2 gap-6'>  
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="yearPlaying">Há quanto tempo você joga?</label>
                    <Input id='yearPlaying' type="number" placeholder='Tudo bem ser ZERO' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="discord">Qual seu dicord?</label>
                    <Input type="text" placeholder='Usuario#0000'/>
                  </div>
                </div>

                <div className='flex gap-6'>
                  <div className='flex-col gap-2'>
                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                    <div className='grid grid-cols-3 gap-2 mt-2'>
                      <button className='w-8 h-8 bg-zinc-900'>
                        D
                      </button>
                      <button className='w-8 h-8 bg-zinc-900'>
                        S
                      </button>
                      <button className='w-8 h-8 bg-zinc-900'>
                        T
                      </button>
                      <button className='w-8 h-8 bg-zinc-900'>
                        Q
                      </button>
                      <button className='w-8 h-8 bg-zinc-900'>
                        Q
                      </button>
                      <button className='w-8 h-8 bg-zinc-900'>
                        S
                      </button>
                      <button className='w-8 h-8 bg-zinc-900'>
                        S
                      </button>
                    </div>
                  </div>

                  <div className='flex flex-col gap-2 flex-1'>
                    <label htmlFor="hourStart">Qual horário do dia</label>
                    <div className='grid grid-cols-2 gap-2'>
                      <Input id='hourStart' type="time" placeholder='De' />
                      <Input id='hourEnd' type="time" placeholder='Até' />
                    </div>
                  </div>
                </div>

                <div className='flex text-sm gap-1 mt-2'>
                  <Input type="checkbox" />
                  Costumo me conectar ao chat de voz
                </div>

                <footer className='mt-4 flex gap-4 justify-end'>
                  <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close>
                  <button className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-2 hover:bg-violet-600' type='submit'>
                    <GameController className='h-6 w-6'/>
                    Encontrar
                  </button>
                </footer>
              </form>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
    )
}