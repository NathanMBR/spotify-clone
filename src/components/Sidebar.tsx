import {
  Home as HomeIcon,
  Search as SearchIcon,
  Library as LibraryIcon
} from 'lucide-react'

export const Sidebar = () => {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
          </div>

          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>

            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <SearchIcon />
              Search
            </a>

            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <LibraryIcon />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 1</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 2</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 3</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 4</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 5</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 6</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 7</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 8</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 9</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 10</a>
          </nav>
        </aside>
  );
};