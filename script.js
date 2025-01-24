// Fetch the JSON data
fetch('beats.json')
    .then(response => response.json()) // Parse JSON
    .then(data => {
        const beatsContainer = document.querySelector('.beats'); // Get the beats container
        const modal = document.querySelector('dialog'); // Select the <dialog> element
        const modalTitle = document.getElementById('modal-title'); // Modal title
        const modalImg = document.getElementById('modal-img');
        const modalAudio = document.getElementById('modal-audio'); // Modal audio
        const closeModal = document.getElementById('close-modal'); // Close button 

        // Loop through the data and create elements dynamically
        data.forEach((beat) => {
            const beatBox = document.createElement('div'); // Create a new div for each beat
            beatBox.classList.add('beat-box'); // Add a class for styling

            // Create the play button
            const playButton = document.createElement('button');
            playButton.classList.add('play-button');

            // Create a container for title and tag
            const beatDetails = document.createElement('div');
            beatDetails.classList.add('beat-details');

            // Create title and description for each beat
            const beatTitle = document.createElement('h2');
            beatTitle.textContent = beat.title; // Set the title

            const beatTag = document.createElement('p');
            beatTag.textContent = beat.tag; // Set the description

            // Append title and tag to the details container
            beatDetails.appendChild(beatTitle);
            beatDetails.appendChild(beatTag);

            // Append the play button and details to the beatBox
            beatBox.appendChild(playButton);
            beatBox.appendChild(beatDetails);
            
            beatBox.addEventListener('click', () => {
                modalTitle.textContent = beat.title; // Set modal title
                modalImg.src = beat.img;
                modalAudio.src = beat.audio; // Set modal audio (ensure your JSON contains the audio URL)
                modal.showModal(); // Open the dialog
            });

            // Append the beatBox to the beats container
            beatsContainer.appendChild(beatBox);
        });

        // Close modal on button click
        closeModal.addEventListener('click', () => {
            modal.close(); // Close the dialog
        });

        // Close modal when clicking outside of it
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.close();
            }
        });
    })
    .catch(error => console.error('Error loading the JSON data:', error));


// function to handle all audio controls
function audioControls() {

}