//Storage
document.addEventListener('DOMContentLoaded', () => {
    displayStoredEntries();
    const form = document.getElementById('userform');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const dob = document.getElementById('dob').value;
        const termsAccepted = document.getElementById('terms').checked ? 'true' : 'false';
        const entry = {
            name,
            email,
            password,
            dob,
            termsAccepted
        };
        saveEntryToStorage(entry);
        addEntryToTable(entry);
        form.reset();
    });
});
function displayStoredEntries() {
    const entries = JSON.parse(localStorage.getItem('entries')) || [];

    entries.forEach(entry => {
        addEntryToTable(entry);
    });
}
function saveEntryToStorage(entry) {
    let entries = JSON.parse(localStorage.getItem('entries')) || [];
    entries.push(entry);
    localStorage.setItem('entries', JSON.stringify(entries));
}
function addEntryToTable(entry) {
    const date = new Date(entry.dob);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    const tableBody = document.getElementById('entriesBody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td class="border py-2 px-4">${entry.name}</td>
        <td class="border py-2 px-4">${entry.email}</td>
        <td class="border py-2 px-4">${entry.password}</td>
        <td class="border py-2 px-4">${formattedDate}</td>
        <td class="border py-2 px-4">${entry.termsAccepted}</td>
    `;

    tableBody.appendChild(newRow);
}
