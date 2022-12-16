const loadData = async() => {
  /**
   * load data from https://6253799f90266e3d0e0373e6.mockapi.io/ok/user
   */
  const response = await fetch("https://6253799f90266e3d0e0373e6.mockapi.io/ok/user");
  const str = await response.text();
  const xmlData = new DOMParser().parseFromString(str, "text/xml");
};

loadData().then((data) => {
  /**
   * render data in html table
   */
  const table=document.createElement("users");
  data.foreach((items)=>{
      const rows=table.insertRow();
      const columnA=rows.insertCell();
      columnA.innerHTML=items.Id;
      const columnB=rows.insertCell();
      columnB.innerHTML=items.Name;
      const columnC=rows.insertCell();
      columnC.innerHTML=items.Email;  
});
  document.body.appendChild(table);
});
