const link = "https://project-1-api.herokuapp.com/showdates/?api_key=8aea4b4e-d06b-4881-8fad-48c753b022f1";

const showsSection = document.querySelector(".shows");
const headerContainer = document.createElement("div");
headerContainer.classList.add("shows__header");
showsSection.appendChild(headerContainer);
const showTitle = document.createElement("h2");
headerContainer.appendChild(showTitle);
showTitle.classList.add("shows__header--title");
showTitle.innerText = "Shows";

const showSection = document.querySelector(".shows__section");

displayShows();

function displayShows(){
    const getShows = axios.get(link);
    getShows.then((res) => {
        const showsArray = res.data; 
        showSection.innerHTML="";
        showsArray.forEach((show) =>{
            const showsDiv = document.createElement("div");
            showsDiv.classList.add("shows__container");
            showSection.appendChild(showsDiv);
            
            const subtitleDate = document.createElement("p");
            showsDiv.appendChild(subtitleDate);
            subtitleDate.classList.add("shows__container--subtitle");
            subtitleDate.innerText = "DATE";

            const dateDetails = document.createElement("p");
            showsDiv.appendChild(dateDetails);
            dateDetails.classList.add("shows__container--detail--bold");
            dateDetails.textContent = new Date(Number(show.date)).toDateString();

            const subtitleVenue = document.createElement("p");
            showsDiv.appendChild(subtitleVenue);
            subtitleVenue.classList.add("shows__container--subtitle");
            subtitleVenue.innerText = "VENUE";
        

            const venueDetails = document.createElement("p");
            showsDiv.appendChild(venueDetails);
            venueDetails.classList.add("shows__container--detail");
            venueDetails.textContent = show.place;

            const subtitleLocation = document.createElement("p");
            showsDiv.appendChild(subtitleLocation);
            subtitleLocation.classList.add("shows__container--subtitle");
            subtitleLocation.innerText = "LOCATION";
            

            const locationDetails = document.createElement("p");
            showsDiv.appendChild(locationDetails);
            locationDetails.classList.add("shows__container--detail");
            locationDetails.textContent = show.location;

            const buttonWrap = document.createElement("div");
            buttonWrap.classList.add("shows__container--button");
            showsDiv.appendChild(buttonWrap);
            const buyButton = document.createElement("button");
            buttonWrap.appendChild(buyButton);
            buyButton.classList.add("shows__container--button--style");
            buyButton.innerText = "BUY TICKETS";
        });
        const showsSec = document.querySelectorAll(".shows__container");
        for (let i = 0;  i < showsSec.length; i++){
            let oneShow = showsSec[i];
            oneShow.addEventListener("click",selectState);
            oneShow.addEventListener("mouseover",hoverState);
            oneShow.addEventListener("mouseout",unHoverState);
        }
    });
}

function selectState(e){
    const showsSec = document.querySelectorAll(".shows__container");
    for (let shows of showsSec){
        shows.style.backgroundColor="initial";
    }
    e.currentTarget.style.backgroundColor='#E1E1E1';
}

function hoverState(e){
    const showsSec = document.querySelectorAll(".shows__container");
    for (let shows1 of showsSec){
        shows1.style.backgroundColor="initial";
    }
    e.currentTarget.style.backgroundColor='#FAFAFA';
}

function unHoverState(e){
    const showsSec = document.querySelectorAll(".shows__container");
    for (let shows3 of showsSec){
        shows3.style.backgroundColor="initial";
    }
    e.currentTarget.style.backgroundColor='#ffffff';
}



