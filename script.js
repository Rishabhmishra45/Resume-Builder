 // Function to add new Work Experience field
 function addNewWEField() {
    const newField = document.createElement('textarea');
    newField.classList.add('form-control', 'weField', 'mb-2');
    newField.rows = 2;
    newField.placeholder = "Company Name, Position, Duration, Responsibilities";

    const weContainer = document.querySelector('.we-container');
    weContainer.appendChild(newField);
}

// Function to add new Education field
function addEduField() {
    const newField = document.createElement('textarea');
    newField.classList.add('form-control', 'eduField', 'mb-2');
    newField.rows = 2;
    newField.placeholder = "Degree, Institution, Year, Achievements";

    const eduContainer = document.querySelector('.edu-container');
    eduContainer.appendChild(newField);
}

// Function to add new Skill field
function addSkillField() {
    const newField = document.createElement('textarea');
    newField.classList.add('form-control', 'skillField', 'mb-2');
    newField.rows = 2;
    newField.placeholder = "List your skills separated by commas";

    const skillContainer = document.querySelector('.skill-container');
    skillContainer.appendChild(newField);
}

// Function to generate resume
function generateResume() {
    // Personal Information
    document.getElementById('nameTemp1').innerHTML = document.getElementById('nameField').value;
    document.getElementById('nameTemp2').innerHTML = document.getElementById('nameField').value;
    document.getElementById('contTemp').innerHTML = `<i class="fas fa-phone contact-icon"></i>${document.getElementById('contField').value}`;

    // Set profile image if provided
    const imgUrl = document.getElementById('imgField').value;
    if (imgUrl) {
        document.getElementById('profileImg').src = imgUrl;
    }

    document.getElementById('emailTemp').innerHTML = `<i class="fas fa-envelope contact-icon"></i>${document.getElementById('emailField').value}`;
    document.getElementById('addrTemp').innerHTML = `<i class="fas fa-map-marker-alt contact-icon"></i>${document.getElementById('addrField').value}`;

    // Links
    const linkedinUrl = document.getElementById('linkdinField').value;
    const githubUrl = document.getElementById('githubField').value;

    document.getElementById('linkdinTemp').href = linkedinUrl;
    document.getElementById('linkdinTemp').innerHTML = `<i class="fab fa-linkedin contact-icon"></i>${linkedinUrl ? 'LinkedIn Profile' : 'Not provided'}`;

    document.getElementById('gitTemp').href = githubUrl;
    document.getElementById('gitTemp').innerHTML = `<i class="fab fa-github contact-icon"></i>${githubUrl ? 'GitHub Profile' : 'Not provided'}`;

    // Professional Information
    document.getElementById('objTemp').innerHTML = document.getElementById('objField').value || "Not specified";

    // Work Experience
    const weFields = document.getElementsByClassName('weField');
    let weHTML = '';
    for (let i = 0; i < weFields.length; i++) {
        if (weFields[i].value) {
            weHTML += `<li>${weFields[i].value}</li>`;
        }
    }
    document.getElementById('expTemp').innerHTML = weHTML || "<li>No work experience provided</li>";

    // Education
    const eduFields = document.getElementsByClassName('eduField');
    let eduHTML = '';
    for (let i = 0; i < eduFields.length; i++) {
        if (eduFields[i].value) {
            eduHTML += `<li>${eduFields[i].value}</li>`;
        }
    }
    document.getElementById('eduTemp').innerHTML = eduHTML || "<li>No education information provided</li>";

    // Skills
    const skillFields = document.getElementsByClassName('skillField');
    let skillHTML = '';
    for (let i = 0; i < skillFields.length; i++) {
        if (skillFields[i].value) {
            // Split skills by comma and create list items
            const skills = skillFields[i].value.split(',').map(skill => skill.trim());
            skills.forEach(skill => {
                if (skill) {
                    skillHTML += `<li>${skill}</li>`;
                }
            });
        }
    }
    document.getElementById('skillTemp').innerHTML = skillHTML || "<li>No skills provided</li>";

    // Show the resume template
    document.getElementById('resume-template').style.display = 'block';
    document.getElementById('resume-form').style.display = 'none';

    // Scroll to the resume
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Function to print resume
function printResume() {
    window.print();
}

// Function to go back to form
function backToForm() {
    document.getElementById('resume-template').style.display = 'none';
    document.getElementById('resume-form').style.display = 'block';

    // Scroll to the form
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initialize with one empty field for each section
window.onload = function () {
    // Create containers for dynamic fields
    const weContainer = document.createElement('div');
    weContainer.classList.add('we-container');
    document.getElementById('we').insertBefore(weContainer, document.getElementById('weAddButton'));

    const eduContainer = document.createElement('div');
    eduContainer.classList.add('edu-container');
    document.getElementById('edu').insertBefore(eduContainer, document.getElementById('eduAddButton'));

    const skillContainer = document.createElement('div');
    skillContainer.classList.add('skill-container');
    document.getElementById('skill').insertBefore(skillContainer, document.getElementById('skillAddButton'));

    // Add initial fields
    addNewWEField();
    addEduField();
    addSkillField();
};