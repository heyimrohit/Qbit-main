export default function NotFoundPage() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center py-20">
      <h1 className="text-4xl font-bold">
        That Page Cant Be Found
      </h1>
      <p className="mt-4 text-center max-w-md">
        It looks like nothing was found at this location. Maybe try to search
        for what you are looking for?
      </p>
      <a
        href="/"
        className="bg-black text-white p-3 rounded-md hover:bg-gray-800"
      >
        Go back to Home
      </a>
    </div>
  );
}
