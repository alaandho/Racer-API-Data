//Get f1 Racer Data
const getData = async () => {
    let season = document.querySelector('.season');
    let round = document.querySelector('.round');
    let response = await axios.get(`http://ergast.com/api/f1/${season}/${round}/driverStandings`);
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
};


const Ergast_element = {
    driverRows: '.driver-list'
};



//add event listener to submit button
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let season = event.path[0][0].value;
    let round = event.path[0][1].value;
    let querySeason = document.querySelector('#season');
    let queryRound = document.querySelector('#round');
    
    //add listener to table
    for(let i = 0; i<7; i++){
        let given_name = (drivers.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName);
        let family_name = (drivers.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName);
        let name = (`${given_name} ${family_name}`);
        let nationality = (drivers.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality);
        let sponsor = (drivers.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name);
        let points = (drivers.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points);
        
        //inputting variables into table
        document.querySelector("name" + String(i+1)).innerHTML = `${given_name}`
        document.querySelector("name" + String(i+1)).innerHTML = `${family_name}`
        document.querySelector("nationality" + String(i+1)).innerHTML = `${nationality}`
        document.querySelector("sponsor" + String(i+1)).innerHTML = `${sponsor}`
        document.querySelector("points" + String(i+1)).innerHTML = `${points}`
    }
});

