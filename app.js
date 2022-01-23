// axios

function getWeather(id) {
  fetch(
    "https://api.allorigins.win/get?url=https://www.metaweather.com/api/location/" +
      id +
      "/"
  )
    .then((result) => {
      // result.headers.forEach(e => console.log(e));
      // console.log(result);
      return result.json();
    })
    .then((r) => {
      let data = JSON.parse(r.contents);
      //console.log(data);
      let today = data.consolidated_weather[0];
      console.log(
        "Өнөөдөрийн " +
          data.title +
          " хот дахь температур  " +
          today.min_temp +
          " -аас " +
          today.max_temp +
          " хооронд байна. "
      );
    });
}

getWeather(2487956);
getWeather(44418);
getWeather(773964);
getWeather(1132447);
//json => JAVASCRIPT OBJECT NOTATION
//same origin policy
