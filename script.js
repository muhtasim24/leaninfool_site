// Fetch the JSON data
fetch('beats.json')
    .then(response => response.json()) // Parse JSON
    .then(data => {
        const beatsContainer = document.querySelector('.beats'); // Get the beats container
        
        // Loop through the data and create elements dynamically
        data.forEach((beat) => {
            const beatBox = document.createElement('div'); // Create a new div for each beat
            beatBox.classList.add('beat-box'); // Add a class for styling
            
            // Create title and description for each beat
            const beatTitle = document.createElement('h2');
            beatTitle.textContent = beat.title; // Set the title

            const beatTag = document.createElement('p');
            beatTag.textContent = beat.tag; // Set the description


            // Append the title and description to the beatBox
            beatBox.appendChild(beatTitle);
            beatBox.appendChild(beatTag);

            // Append the beatBox to the beats container
            beatsContainer.appendChild(beatBox);
        });
    })
    .catch(error => console.error('Error loading the JSON data:', error));
