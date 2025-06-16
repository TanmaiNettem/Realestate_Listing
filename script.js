const properties = [
    {
      title: "Modern Apartment in New York",
      location: "newyork",
      type: "apartment",
      price: "$2,000/month",
      image: "images/h1.jpg"
    },
    {
      title: "Luxury Villa in Delhi",
      location: "delhi",
      type: "villa",
      price: "$3,500/month",
      image: "images/h2.jpeg"
    },
    {
      title: "Cozy Studio in Bangalore",
      location: "bangalore",
      type: "studio",
      price: "$1,000/month",
      image: "images/h3.jpeg"
    },
    {
      title: "Family House in New York",
      location: "newyork",
      type: "villa",
      price: "$2,800/month",
      image: "images/h4.jpeg"
    },
    {
        title: "Modern Apartment in New York",
        location: "newyork",
        type: "apartment",
        price: "$2,000/month",
        image: "images/h5.jpeg"
    },
    {
        title: "Luxury Villa in Delhi",
        location: "delhi",
        type: "villa",
        price: "$3,500/month",
        image: "images/h6.jpg"
    },
    {
        title: "Cozy Studio in Bangalore",
        location: "bangalore",
        type: "studio",
        price: "$1,000/month",
        image: "images/h7.jpeg"
    },
    {
        title: "Family House in New York",
        location: "newyork",
        type: "villa",
        price: "$2,800/month",
        image: "images/h8.jpg"
    },
  ];
  
  const propertyList = document.getElementById("property-list");
  const locationFilter = document.getElementById("locationFilter");
  const typeFilter = document.getElementById("typeFilter");
  
  function renderProperties(filteredProps) {
    propertyList.innerHTML = "";
    filteredProps.forEach(prop => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${prop.image}" alt="${prop.title}" />
        <div class="card-content">
          <h3>${prop.title}</h3>
          <p>${prop.price}</p>
          <p><strong>Location:</strong> ${prop.location}</p>
          <p><strong>Type:</strong> ${prop.type}</p>
        </div>
      `;
      propertyList.appendChild(card);
    });
  }
  
  function filterProperties() {
    const locValue = locationFilter.value;
    const typeValue = typeFilter.value;
  
    const filtered = properties.filter(p => {
      return (locValue === "all" || p.location === locValue) &&
             (typeValue === "all" || p.type === typeValue);
    });
  
    renderProperties(filtered);
  }
  
  locationFilter.addEventListener("change", filterProperties);
  typeFilter.addEventListener("change", filterProperties);
  
  // Initial render
  renderProperties(properties);
  