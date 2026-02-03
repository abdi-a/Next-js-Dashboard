import { verifySession } from "@/lib/session";
import { db } from "@/lib/db";

export default async function Page() {
  const session = await verifySession();
  const user = await db.user.findUnique({
    where: {
      id: session?.userId,
    },
  });

  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl font-bold">My Profile</h1>
      <div className="rounded-xl bg-gray-50 p-6 shadow-sm max-w-lg">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-500">Name</label>
            <p className="text-lg font-medium">{user?.name}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Email</label>
            <p className="text-lg font-medium">{user?.email}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">User ID</label>
            <p className="text-xs text-mono text-gray-400">{user?.id}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
