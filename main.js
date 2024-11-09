var toggleSkillsButton = document.getElementById("toggle-skills-button");
var skillSection = document.getElementById("skills");
toggleSkillsButton.addEventListener('click', function () {
    if (skillSection.style.display === 'none') {
        skillSection.style.display = 'block';
    }
    else {
        skillSection.style.display = 'none';
    }
});
