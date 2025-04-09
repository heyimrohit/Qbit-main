import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container flex-col gap-7 justify-center items-center py-12">
      <div className="flex-col gap-2 justify-center items-center">
        <span className="md:text-6xl text-xl font-bold">That Page Cant Be Found</span>
        <span className="text-center text-sm md:text-lg">It looks like nothing was found at this location. Maybe try to
          search for what you are looking for?</span>
      </div>
      <div>
        <Link href="/" className="bg-black text-white p-3 rounded-md hover:bg-gray-800">Go back to Home</Link>
      </div>
    </div>
  )
}