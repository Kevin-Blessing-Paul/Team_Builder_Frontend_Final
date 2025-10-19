// Filter teams on the member page
function applyFilters() {
  const skill = document.getElementById('filterSkill').value.trim().toLowerCase();
  const interest = document.getElementById('filterInterest').value.trim().toLowerCase();
  const year = document.getElementById('filterYear').value;

  const cards = document.querySelectorAll('#teamList .team-card');
  cards.forEach(card => {
    const skills = card.dataset.skills || '';
    const interests = card.dataset.interests || '';
    const teamYear = card.dataset.year || '';

    const skillMatch = skill === '' || skills.includes(skill);
    const interestMatch = interest === '' || interests.includes(interest);
    const yearMatch = year === '' || teamYear === year || teamYear === 'Any';

    card.style.display = (skillMatch && interestMatch && yearMatch) ? '' : 'none';
  });
}

function resetFilters() {
  document.getElementById('filterSkill').value = '';
  document.getElementById('filterInterest').value = '';
  document.getElementById('filterYear').value = '';
  applyFilters();
}

function applyToTeam(teamId) {
  alert('Applied to team id: ' + teamId + ' (frontend-only)');
}
