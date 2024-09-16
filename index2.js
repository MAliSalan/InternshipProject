
orders.forEach(order =>{
    const tr =document.createElement('tr');
    const trContent =`
                      <td><b>${order.yemekisim}</b></td>
                      <td>${order.siparisno}</td>
                      <td>${order.firmaad}</td>
                      <td class="${order.onaydurum === 'reddedildi' ? 'danger': order.onaydurum === 
                      'onaylandı' ? 'success' : order.onaydurum === 'onay bekliyor' ? 'wait' : ''
                      }">${order.onaydurum}</td>
                      <td class="${order.siparisdurum === 'reddedildi' ? 'danger': order.siparisdurum === 
                      'onaylandı' ? 'success' : order.siparisdurum === 'onay bekliyor' ? 'wait' :
                      order.siparisdurum === 'hazırlanıyor' ? 'hazirla' : order.siparisdurum === 'sipariş yolda' 
                      ? 'blue' : order.siparisdurum === 'teslim edildi' ? 'success' :''
                      }">${order.siparisdurum}</td>
                      <td class="primary">Detay</td>
                      `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
  })
  