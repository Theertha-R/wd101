        //Storage
        document.getElementById('userform').addEventListener('submit', function(event) {
          event.preventDefault();
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          const dob = document.getElementById('dob').value;
          const termsAccepted = document.getElementById('terms').checked ? 'Yes' : 'No';
      
          const newRow = `
              <tr>
                  <td class="px-4 py-2 border-b">${name}</td>
                  <td class="px-4 py-2 border-b">${email}</td>
                  <td class="px-4 py-2 border-b">${password}</td>
                  <td class="px-4 py-2 border-b">${dob}</td>
                  <td class="px-4 py-2 border-b">${termsAccepted}</td>
              </tr>
          `;
      
          document.getElementById('entriesTable').insertAdjacentHTML('beforeend', newRow);
          document.getElementById('userform').reset();
      });
