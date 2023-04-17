import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Play as PlayIcon
} from 'lucide-react'
import Image from 'next/image'

import { playlistURL } from '@/config';

export const Main = () => {
  return (
    <main className="flex-1 p-6">
      <div className='flex items-center gap-3'>
        <button className='rounded-full bg-black/40 p-1'>
          <ChevronLeftIcon />
        </button>

        <button className='rounded-full bg-black/40 p-1'>
          <ChevronRightIcon />
        </button>
      </div>

      <h1 className='font-semibold text-3xl mt-10'>Good morning</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image
            src={playlistURL}
            alt="Álbum do System of a Down"
            width={104}
            height={104}
          />

          <strong>System of a Down</strong>

          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
            <PlayIcon />
          </button>
        </a>

        <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image
            src={playlistURL}
            alt="Álbum do System of a Down"
            width={104}
            height={104}
          />

          <strong>System of a Down</strong>

          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
            <PlayIcon />
          </button>
        </a>

        <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image
            src={playlistURL}
            alt="Álbum do System of a Down"
            width={104}
            height={104}
          />

          <strong>System of a Down</strong>

          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
            <PlayIcon />
          </button>
        </a>

        <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image
            src={playlistURL}
            alt="Álbum do System of a Down"
            width={104}
            height={104}
          />

          <strong>System of a Down</strong>

          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
            <PlayIcon />
          </button>
        </a>

        <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image
            src={playlistURL}
            alt="Álbum do System of a Down"
            width={104}
            height={104}
          />

          <strong>System of a Down</strong>

          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
            <PlayIcon />
          </button>
        </a>

        <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image
            src={playlistURL}
            alt="Álbum do System of a Down"
            width={104}
            height={104}
          />

          <strong>System of a Down</strong>

          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
            <PlayIcon />
          </button>
        </a>
      </div>

      <h2 className='font-semibold text-2xl mt-10'>Made for You</h2>

      <div className='grid grid-cols-8 gap-4 mt-4'>
        <a href='' className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
          <Image
            src={playlistURL}
            alt="Álbum do System of a Down"
            width={104}
            height={104}
            className='w-full'
          />
          <strong className='font-semibold'>Daily mix 1</strong>
          <span className='text-sm text-zinc-400'>System of a Down</span>
        </a>

        <a href='' className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
          <Image
            src={playlistURL}
            alt="Álbum do System of a Down"
            width={104}
            height={104}
            className='w-full'
          />
          <strong className='font-semibold'>Daily mix 1</strong>
          <span className='text-sm text-zinc-400'>System of a Down</span>
        </a>

        <a href='' className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
          <Image
            src={playlistURL}
            alt="Álbum do System of a Down"
            width={104}
            height={104}
            className='w-full'
          />
          <strong className='font-semibold'>Daily mix 1</strong>
          <span className='text-sm text-zinc-400'>System of a Down</span>
        </a>

        <a href='' className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
          <Image
            src={playlistURL}
            alt="Álbum do System of a Down"
            width={104}
            height={104}
            className='w-full'
          />
          <strong className='font-semibold'>Daily mix 1</strong>
          <span className='text-sm text-zinc-400'>System of a Down</span>
        </a>

        <a href='' className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
          <Image
            src={playlistURL}
            alt="Álbum do System of a Down"
            width={104}
            height={104}
            className='w-full'
          />
          <strong className='font-semibold'>Daily mix 1</strong>
          <span className='text-sm text-zinc-400'>System of a Down</span>
        </a>
      </div>
    </main>
  );
}