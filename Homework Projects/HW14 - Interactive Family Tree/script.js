const pageSection = document.getElementById('page-section');
const sectionTitle = document.getElementById('section-title');
const sectionDescription = document.getElementById('section-description');

pageSection.addEventListener('change', () => {
    switch (pageSection.value) {
        case 'services':
            sectionTitle.textContent = "Our Services";
            sectionDescription.textContent = "We provide top-notch web development and design services.";
            break;
        case 'portfolio':
            sectionTitle.textContent = "Portfolio";
            sectionDescription.textContent = "Explore our diverse portfolio of creative projects.";
            break;
        case 'contact':
            sectionTitle.textContent = "Contact Us";
            sectionDescription.textContent = "Reach out to us through email or phone for inquiries.";
            break;
        default:
            sectionTitle.textContent = "Introduction";
            sectionDescription.textContent = "Welcome to the homepage! Use the dropdown menu to explore different sections.";
    }
});
