// /src/app/page.tsx

/*type User = {
  id: number;
  name: string;
  email: string;
};

// This function is a Server Component (runs on the server)
const HomePage = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users'; // Example API URL

  try {
    // Fetch data directly from the server-side
    const res = await fetch(url); // No need for an external fetchData function
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data: User[] = await res.json(); // Parse the response as JSON

    return (
      <div>
        <h1>User List</h1>
        <ul>
          {data.length === 0 ? (
            <li>No data available</li>
          ) : (
            data.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))
          )}
        </ul>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div>
        <h1>Error</h1>
        <p>There was an issue fetching the data.</p>
      </div>
    );
  }
};

export default HomePage;*/

// /src/app/page.tsx

type User = {
  id: number;
  name: string;
  email: string;
};

// This is a server-side component in Next.js 13+
const HomePage = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users'; // Example API URL

  try {
    // Fetch data directly from the server-side
    const res = await fetch(url); // No need for an external fetchData function
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data: User[] = await res.json(); // Parse the response as JSON

    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
        <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">User List</h1>
          <ul className="space-y-4">
            {data.length === 0 ? (
              <li className="text-center text-gray-500">No data available</li>
            ) : (
              data.map((user) => (
                <li key={user.id} className="flex justify-between items-center p-4 border-b border-gray-200">
                  <span className="text-lg font-medium text-gray-800">{user.name}</span>
                  <span className="text-sm text-gray-500">{user.email}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-semibold text-red-500">Error</h1>
          <p className="text-lg text-gray-700 mt-4">There was an issue fetching the data.</p>
        </div>
      </div>
    );
  }
};

export default HomePage;
