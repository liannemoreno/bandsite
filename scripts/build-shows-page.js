const showList =[
{
    date:"Mon Sept 06 2021",
    venue:"Ronald Lane",
    location: "San Francisco, CA",
},
{
    date:"Tue Sept 21 2021",
    venue:"Pier 3 East",
    location: "San Francisco, CA",
},
{
    date:"Fri Oct 15 2021",
    venue:"View Lounge",
    location: "San Francisco, CA",
},
{
    date:"Sat Nov 06 2021",
    venue:"Hyatt Agency",
    location: "San Francisco, CA",
},
{
    date:"Fri Nov 26 2021",
    venue:"Moscow Center",
    location: "San Francisco, CA",
},
{
    date:"Wed Dec 15 2021",
    venue:"Press Club",
    location: "San Francisco, CA",
},
];

const mainSection=document.querySelector("main");
const showsSection = document.createElement("section");
mainSection.appendChild(showsSection);
const showTitle=document.createElement("h2");
showsSection.appendChild(showTitle);
showTitle.classList.add("main__title");
showTitle.innerText= "Shows";

for (let i=0; i< showList.length; i++){
    const showsDetails = document.createElement("div");
    showsSection.appendChild(showsDetails);
    showsDetails.classList.add("main__shows");

    const dateDiv= document.createElement("div");
    showsDetails.appendChild(dateDiv);

    dateDiv.classList.add("main__shows-date");

    const date= document.createElement("p");
    dateDiv.appendChild(date);
    date.innerText="Date";

    const dateDetails= document.createElement("p");
    dateDiv.appendChild(dateDetails);
    dateDetails.innerText=showList[i].date;
    

    const venueDiv= document.createElement("div");
    showsDetails.appendChild(venueDiv);
    venueDiv.classList.add("main__shows-venue");

    const venue= document.createElement("p");
    venueDiv.appendChild(venue);
    venue.innerText="Venue";

    const venueDetails= document.createElement("p");
    venueDiv.appendChild(venueDetails);
    venueDetails.innerText=showList[i].venue;


    const locationDiv= document.createElement("div");
    showsDetails.appendChild(locationDiv);

    locationDiv.classList.add("main__shows-location");

    const location= document.createElement("p");
    locationDiv.appendChild(location);
    location.innerText="Location";

    const locationDetails= document.createElement("p");
    locationDiv.appendChild(locationDetails);
    locationDetails.innerText=showList[i].location;


    const buyButton= document.createElement("button");
    showsDetails.appendChild(buyButton);
    buyButton.classList.add("main__shows-buyButton");
    buyButton.innerText="Buy Tickets";

}
    


//     const location= document.createElement("p");
//     showsDetails.appendChild(location);
//     location.classList.add("main__shows-location");
//     location.innerText="Location";
//     console.log(showList[i]["location"])
    

    
   
    
    


// }

