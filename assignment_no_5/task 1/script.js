document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.npoint.io/7bbd3a59c401f616bb89")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayCities(data.cities);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        const cityContainer = document.getElementById('city-container');
        cityContainer.innerHTML = '<p>Failed to fetch data. Please try again later.</p>';
      });
  });
  
  function displayCities(cities) {
    const cityContainer = document.getElementById('city-container');
  
    cities.forEach(city => {
      const cityElement = document.createElement('div');
      cityElement.classList.add('city');
  
      const nameElement = document.createElement('h2');
      nameElement.textContent = city.name;
  
      const detailsElement = document.createElement('p');
      detailsElement.textContent = `Population: ${city.population}, State: ${city.state}`;
  
      cityElement.appendChild(nameElement);
      cityElement.appendChild(detailsElement);
  
      cityContainer.appendChild(cityElement);
    });
  }
  