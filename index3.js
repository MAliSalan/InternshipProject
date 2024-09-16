
people.forEach(people =>{
    const tr =document.createElement('tr');
    const trContent =`
                      <td><b>${people.müşteriisim}</b></td>
                      <td>${people.müşterino}</td>
                      <td>${people.iletişimbilgi}</td>
                      <td>${people.adress}</td>
                      <td>${people.rol}</td>
                      
                      `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
  })
  