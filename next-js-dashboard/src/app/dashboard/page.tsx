export default function Page() {
  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl font-bold">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Placeholder cards */}
        <div className="rounded-xl bg-gray-50 p-5 shadow-sm">
          <h3 className="font-medium">Total Users</h3>
          <p className="text-2xl font-bold">1</p>
        </div>
        <div className="rounded-xl bg-gray-50 p-5 shadow-sm">
          <h3 className="font-medium">Active Sessions</h3>
          <p className="text-2xl font-bold">1</p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-8">
         {/* More dashboard content can go here */}
         <div className="w-full md:col-span-4 rounded-xl bg-gray-50 p-4">
            <h2 className="font-semibold text-lg mb-4">Recent Activity</h2>
            <p className="text-gray-500">You logged in just now.</p>
         </div>
      </div>
    </main>
  );
}
