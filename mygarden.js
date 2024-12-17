
document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});
const garden = document.getElementById('garden');
        const addPlantButton = document.getElementById('addPlant');

        function addPlantToGarden() {
            // Create plant container (2x2 box)
            const plantBox = document.createElement('div');
            plantBox.className = 'plant-box';

            // Create the plant (circle)
            const plant = document.createElement('div');
            plant.className = 'plant';
            
            // Append plant to the box
            plantBox.appendChild(plant);
            garden.appendChild(plantBox);
        }

        // Add plant on button click
        addPlantButton.addEventListener('click', addPlantToGarden);
