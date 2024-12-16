// /lib/api.ts

// This function will now be a server-side function
/*export const fetchData = async (url: string) => {
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return response.json();
  };*/


// pages/_app.tsx

// /lib/api.ts

// A simple fetchData function to fetch data from an API
export const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  