import React from "react";

function Body(props) {
  
  const resJson = props.resJson;

  let region = resJson.region,
    dauHour = resJson.currentConditions.dayhour,
    temp = resJson.currentConditions.temp.c,
    rain = resJson.currentConditions.precip,
    humidity = resJson.currentConditions.humidity,
    wind = resJson.currentConditions.wind.km,
    iconURL = resJson.currentConditions.iconURL,
    comment = resJson.currentConditions.comment,
    nextDays = resJson.next_days;

  return(
    <div className='app_body'>
          <h2>Today (now)</h2>
          <div className='today_weather'>
            <div className='location'>
              {/* location */}
              location: {region}
            </div>
            <div className='date_now'>
              {/* "Wednesday 7:00 PM" */}
              today: {dauHour}
            </div>
            <div className='temp_now'>
              {/* "c": 5,"f": 41 */}
              temp: {temp} C
            </div>
            <div className='rain'>
              {/* "rain": "1%" */}
              rain: {rain}
            </div>
            <div className='humidity'>
              {/* "humidity": "62%" */}
              humidity: {humidity}
            </div>
            <div className='wind'>
              {/* "wind" */}
              wind: {wind} km/h
            </div>
            <div className='coment'>
              sky: {comment}
            </div>
            <div className='icon_coment'>
              {/* "icon" */}
              <img src={iconURL} alt='sky__icon'/>
            </div>

          </div>
          <span className='day'>
            <p className='day_name'>day</p>
            <p className='day_name'>min-t</p>
            <p className='day_temp'>max-t</p>
            <p className='day_temp'>sky</p>

          </span>
          <ul className='next_days'>
            {
              nextDays.map((day, i) => {
                return (
                  <li className='day' key={i}>
                    <p className='day_name'>{day.day}</p>
                    <p className='day_temp'>{day.min_temp.c}</p>
                    <p className='day_name'>{day.max_temp.c}</p>
                    <img src={day.iconURL} alt='sky__icon'/>
                  </li>
                )
              })
            }

          </ul>


        </div>

  )
}

export default Body;