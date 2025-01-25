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
                audioControls(data, beat);
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
function audioControls(data, beat) {
    console.log(data);
    console.log(beat);
    console.log(beat.audio);
    const playBtn = document.querySelector('#play');
    const prevBtn = document.querySelector('#prev');
    const nextBtn = document.querySelector('#next');
    const audio = document.querySelector('#audio');
    const progress = document.querySelector('.progress');
    const progressContainer = document.querySelector('progress-container');
    let isPlaying = false;

    audio.src = beat.audio;


    function playSong() {
        isPlaying = true;
        playBtn.querySelector('i.fa-solid').classList.remove('fa-circle-play');
        playBtn.querySelector('i.fa-solid').classList.add('fa-circle-pause');
    
        audio.play();
    }
    
    function pauseSong() {
        isPlaying = false;
        playBtn.querySelector('i.fa-solid').classList.add('fa-circle-play');
        playBtn.querySelector('i.fa-solid').classList.remove('fa-circle-pause');
    
        audio.pause();
    }


    playBtn.addEventListener('click', () => {
        // if song is playing, pause it
        if (isPlaying){
            pauseSong();
        } else {
            playSong();
        }
    })
}

