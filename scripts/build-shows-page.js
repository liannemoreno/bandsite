const showList = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA",
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA",
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA",
    },
];



const showsSection = document.querySelector(".shows");
const headerContainer = document.createElement("div");
headerContainer.classList.add("shows__header");
showsSection.appendChild(headerContainer);
const showTitle = document.createElement("h2");
headerContainer.appendChild(showTitle);
showTitle.classList.add("shows__header--title");
showTitle.innerText = "Shows";

for (let i = 0; i < showList.length; i++) {
    const showsDiv = document.createElement("div");
    // showsDiv.addEventListener('click',selectedHandler);
    showsSection.appendChild(showsDiv);
    showsDiv.classList.add("shows__container");
    console.log(showsDiv);
    
    const subtitleDate = document.createElement("p");
    showsDiv.appendChild(subtitleDate);
    subtitleDate.classList.add("shows__container--subtitle");
    subtitleDate.innerText = "DATE";
    

    const dateDetails = document.createElement("p");
    showsDiv.appendChild(dateDetails);
    dateDetails.classList.add("shows__container--detail--bold");
    dateDetails.innerText = showList[i].date;

    const subtitleVenue = document.createElement("p");
    showsDiv.appendChild(subtitleVenue);
    subtitleVenue.classList.add("shows__container--subtitle");
    subtitleVenue.innerText = "VENUE";
   

    const venueDetails = document.createElement("p");
    showsDiv.appendChild(venueDetails);
    venueDetails.classList.add("shows__container--detail");
    venueDetails.innerText = showList[i].venue;

    const subtitleLocation = document.createElement("p");
    showsDiv.appendChild(subtitleLocation);
    subtitleLocation.classList.add("shows__container--subtitle");
    subtitleLocation.innerText = "LOCATION";
    

    const locationDetails = document.createElement("p");
    showsDiv.appendChild(locationDetails);
    locationDetails.classList.add("shows__container--detail");
    locationDetails.innerText = showList[i].location;

    const buttonWrap = document.createElement("div");
    buttonWrap.classList.add("shows__container--button");
    showsDiv.appendChild(buttonWrap);
    const buyButton = document.createElement("button");
    buttonWrap.appendChild(buyButton);
    buyButton.classList.add("shows__container--button--style");
    buyButton.innerText = "BUY TICKETS";

}


const showsSec = document.querySelectorAll(".shows__container");
for (let i = 0;  i < showsSec.length; i++){
    let oneShow = showsSec[i];
    oneShow.addEventListener("click",selectState);
}


function selectState(e){
    for (let shows of showsSec){
        shows.style.backgroundColor="initial";

    }

    e.currentTarget.style.backgroundColor='#E1E1E1';
}


for (let i = 0;  i < showsSec.length; i++){
    let show = showsSec[i];
    show.addEventListener("mouseover",hoverState);
}


function hoverState(e){
    for (let shows1 of showsSec){
        shows1.style.backgroundColor="initial";

    }

    e.currentTarget.style.backgroundColor='#FAFAFA';
}

for (let i = 0;  i < showsSec.length; i++){
    let show2 = showsSec[i];
    show2.addEventListener("mouseout",unHoverState);
}


function unHoverState(e){
    for (let shows3 of showsSec){
        shows3.style.backgroundColor="initial";

    }

    e.currentTarget.style.backgroundColor='#ffffff';
}