fetch("customers.xml")
  .then((result) => result.text())
  .then((data) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "text/xml");
    displayData(xmlDoc);
  });

function stringToNode(html) {
  const template = document.createElement(`template`);
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

function displayData(xmlDoc) {
    const listCustomer = document.getElementById(`customers`);

    const customerParse = xmlDoc.getElementsByTagName(`customer`);
    for (let index = 0; index < customerParse.length; index++) {
      const customerIndex= customerParse[index];
      const listCustomerItem = stringToNode(`<li><article><h2>${customerIndex.getAttribute('custID')}</h2>
      <p>${customerIndex.getAttribute(`title`)}${customerIndex.getElementsByTagName('name')[0].childNodes[0].nodeValue}</p>
      <div>
          <h4>Address</h4>
          ${customerIndex.getElementsByTagName('address')[0].childNodes[0].nodeValue}
          <h4>Contact:</h4>
          ${customerIndex.getElementsByTagName('phone')[0].childNodes[0].nodeValue}
          <h3>Customer Mail Address</h3>
          ${
              customerIndex.getElementsByTagName(`email`)[0] != null
                ?customerIndex.getElementsByTagName(`email`)[0].childNodes[0]
                    .nodeValue
                : "Email not given"
            }
      </div><br>
      <table>
          <tr>
              <th>Order Date</th>
          </tr>
          <tr>
              <td>${customerIndex.getElementsByTagName('orderDate')[0].childNodes[0].nodeValue}
          </tr>
      </table><br>
      <table>
          <tr>
              <th>Item Price</th>
              <th>Item Quantity</th>
          </tr>
          <tr>
              <td>${customerIndex.getElementsByTagName('itemPrice')[0].childNodes[0].nodeValue}</td>
              <td>${customerIndex.getElementsByTagName('itemQty')[0].childNodes[0].nodeValue}</td>     
          </tr>
      </table>
      
  
  </article></li>
  `);
      listCustomer.appendChild(listCustomerItem);
    }
}
/* <li>
          <h2>${`First name:-${
            CustomerNode.getElementsByTagName(`name`)[0].childNodes[0].nodeValue
          }`} </h2>
        <p>${`Address:- ${
          CustomerNode.getElementsByTagName(`address`)[0].childNodes[0]
            .nodeValue
        }`}</p>
        <p>${`Phone:- ${
          CustomerNode.getElementsByTagName(`phone`)[0].childNodes[0].nodeValue
        }`}</p>
        
        <p>${`Email: ${
          CustomerNode.getElementsByTagName(`email`)[0] != null
            ? CustomerNode.getElementsByTagName(`email`)[0].childNodes[0]
                .nodeValue
            : "Email not given"
        }`}</p>
        <p>${`Order Date: ${
          CustomerNode.getElementsByTagName(`orderDate`)[0].childNodes[0]
            .nodeValue
        }`}</p>
        <p>${`ItemPrice: ${
          CustomerNode.getElementsByTagName(`itemPrice`)[0].childNodes[0]
            .nodeValue
        }`}</p>
        <p>${`ItemQuantity: ${
          CustomerNode.getElementsByTagName(`itemQty`)[0].childNodes[0]
            .nodeValue
        }`}</p>
        </li>` */