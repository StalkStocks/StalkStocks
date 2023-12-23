
async function fetchData(url) {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  const apiUrl = '/api/'; // TODO: update for variable stock queries


  fetchData(apiUrl)
    .then(data => {
      console.log('Fetched data:', data);
      // TODO -- use the data returned from server here
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });