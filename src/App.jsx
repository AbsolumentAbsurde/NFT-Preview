import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='flex h-full justify-center items-center bg-slate-900'>
      <div className='flex h-[36rem] w-80 justify-center bg-slate-800 rounded-xl lg:h-[42rem] lg:w-[30rem]'>
        <div className='flex flex-col justify-center items-center h-64 pt-[18rem] lg:w-[26rem] lg:h-96'>
          <div className='flex flex-col gap-6'>
            <div className='relative h-64 w-64 lg:h-80 lg:w-80'>
              <img src="/assets/images/image-equilibrium.jpg" alt="Image not found" className='w-full h-full object-cover rounded-xl'/>
              <div className='flex absolute justify-center items-center inset-0 rounded-xl h-full w-full object-cover opacity-0 hover:opacity-100 hover:bg-cyan-300/50'>
                <img src="/assets/images/icon-view.svg" alt="Image not found" className='rounded-xl h-10 w-10 object-cover'/>
              </div> 
            </div>
            <div className='flex'>
              <h1 className='text-xl lg:text-2xl text-white font-bold font-mono hover:text-cyan-300'>Equilibrium #3429</h1>
            </div>
            <div className='flex w-64 lg:w-72'>
              <p className='text-xs lg:text-sm text-slate-400 font-mono'>Our Equilibrium collection promotes balance and calm.</p>
            </div>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row gap-2 justify-center items-center'>
                <div className='flex justify-center items-center'>
                  <img src="/assets/images/icon-ethereum.svg" alt="Image not found" className='h-4'/>
                </div>
                <p className='text-lg font-bold text-cyan-300'>0.041 ETH</p>
              </div>
              <div className='flex flex-row gap-2 justify-center items-center'>
                <div className='flex justify-center items-center'>
                  <img src="/assets/images/icon-clock.svg" alt="Image not found" />
                </div>
                <p className='text-base text-slate-400'>3 days left</p>
              </div>
            </div>
            <div className='flex h-[0.05rem] w-54 bg-slate-400' />
            <div className='flex items-center gap-4'>
              <div className='flex h-10 aspect-square border-white border-2 rounded-full'>
                <img src="/assets/images/image-avatar.png" alt="Image not found" />
              </div>
              <div className='flex flex-row gap-1'>
                <p className='text-sm text-slate-400'>Creation of</p> <p className='text-sm text-white hover:text-cyan-300'>Jules Wyvern</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;