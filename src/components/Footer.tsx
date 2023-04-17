import {
  Play as PlayIcon,
  Shuffle as ShuffleIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  Repeat as RepeatIcon,
  Mic2 as MicrophoneIcon,
  LayoutList as LayoutListIcon,
  Laptop2 as LaptopIcon,
  Volume as VolumeIcon,
  Maximize2 as MaximizeIcon
} from 'lucide-react'
import Image from 'next/image';

import { playlistURL } from '@/config';

export const Footer = () => {
  return (
    <>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <Image
            src={playlistURL}
            alt="Álbum do System of a Down"
            width={56}
            height={56}
            className='w-full'
          />

          <div className='flex flex-col gap-1'>
            <strong className='font-normal'>Spiders</strong>
            <span className='text-xs text-zinc-400'>System of a Down</span>
          </div>
        </div>

        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <ShuffleIcon
              className='text-zinc-200'
              size={20}
            />
            <SkipBackIcon
              className='text-zinc-200'
              size={20}
            />

            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
              <PlayIcon />
            </button>

            <SkipForwardIcon
              className='text-zinc-200'
              size={20}
            />
            <RepeatIcon
              className='text-zinc-200'
              size={20}
            />
          </div>

          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:31</span>

            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
            </div>

            <span className='text-xs text-zinc-400'>3:35</span>
          </div>
        </div>

        <div className='flex items-center gap-4'>
            <MicrophoneIcon size={20} />
            <LayoutListIcon size={20} />
            <LaptopIcon size={20} />

            <div className='flex items-center gap-2'>
              <VolumeIcon size={20} />

              <div className='h-1 rounded-full w-24 bg-zinc-600'>
                <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
              </div>
            </div>

            <MaximizeIcon size={20} />
          </div>
      </footer>
    </>
  );
};