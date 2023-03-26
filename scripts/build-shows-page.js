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
showsSection.classList.add("shows");
const showTitle=document.createElement("h2");
showsSection.appendChild(showTitle);
showTitle.classList.add("shows__title");
showTitle.innerText= "Shows";

for (let i=0; i< showList.length; i++){
    const showsDetails = document.createElement("div");
    showsSection.appendChild(showsDetails);
    showsDetails.classList.add("shows__main");

    const dateDiv= document.createElement("div");
    showsDetails.appendChild(dateDiv);

    dateDiv.classList.add("shows__main-date");

    const date= document.createElement("p");
    dateDiv.appendChild(date);
    date.classList.add("shows__main-date--word");
    date.innerText="DATE";
    

    const dateDetails= document.createElement("p");
    dateDiv.appendChild(dateDetails);
    dateDetails.classList.add("shows__main-date--detail");
    dateDetails.innerText=showList[i].date;
    

    const venueDiv= document.createElement("div");
    showsDetails.appendChild(venueDiv);
    venueDiv.classList.add("shows__main-venue");

    const venue= document.createElement("p");
    venueDiv.appendChild(venue);
    venue.classList.add("shows__main-venue--word");
    venue.innerText="VENUE";

    const venueDetails= document.createElement("p");
    venueDiv.appendChild(venueDetails);
    venueDetails.classList.add("shows__main-venue--detail");
    venueDetails.innerText=showList[i].venue;


    const locationDiv= document.createElement("div");
    showsDetails.appendChild(locationDiv);

    locationDiv.classList.add("shows__main-location");

    const location= document.createElement("p");
    locationDiv.appendChild(location);
    location.classList.add("shows__main-location--word");
    location.innerText="LOCATION";

    const locationDetails= document.createElement("p");
    locationDiv.appendChild(locationDetails);
    locationDetails.classList.add("shows__main-location--detail");
    locationDetails.innerText=showList[i].location;

    const buttonWrap= document.createElement("div");
    buttonWrap.classList.add("shows__main-button");
    showsDetails.appendChild(buttonWrap);
    const buyButton= document.createElement("button");
    buttonWrap.appendChild(buyButton);
    buyButton.classList.add("shows__main-button--style");
    buyButton.innerText="BUY TICKETS";

}
    

  

