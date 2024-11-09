const toggleSkillsButton = document.getElementById("toggle-skills-button") as HTMLButtonElement
const skillSection = document.getElementById("skills") as HTMLElement

toggleSkillsButton.addEventListener('click', ()=>{
    if (skillSection.style.display === 'none') {
        skillSection.style.display = 'block';
    } else {
        skillSection.style.display = 'none';
    }
})