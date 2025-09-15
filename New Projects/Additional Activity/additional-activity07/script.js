const familyMember = document.getElementById('family-member');
const memberTitle = document.getElementById('member-title');
const memberDetails = document.getElementById('member-details');
const fatherPic = document.getElementById('father-pic');
const motherPic = document.getElementById('mother-pic');

familyMember.addEventListener('change', () => {
    const selectedMember = familyMember.value;

    // Hide all pictures initially
    fatherPic.style.display = 'none';
    motherPic.style.display = 'none';

    switch (selectedMember) {
        case 'father':
            memberTitle.textContent = "Father";
            memberDetails.textContent = "He is the pillar of our family, always guiding and supporting us.";
            fatherPic.style.display = 'block';
            break;
        case 'mother':
            memberTitle.textContent = "Mother";
            memberDetails.textContent = "She is the heart of our family, full of love and care.";
            motherPic.style.display = 'block';
            break;
        case 'sibling':
            memberTitle.textContent = "Sibling";
            memberDetails.textContent = "Always my partner-in-crime, making every moment fun and memorable.";
            break;
        case 'grandparent':
            memberTitle.textContent = "Grandparent";
            memberDetails.textContent = "A treasure of wisdom and stories from the past.";
            break;
        default:
            memberTitle.textContent = "Family Member Info";
            memberDetails.textContent = "Please select a family member to view details.";
    }
});