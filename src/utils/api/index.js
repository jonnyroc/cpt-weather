import axios from "axios";

export default axios.create({
    baseURL: (`https://api.openweathermap.org/data/2.5/onecall?lat=-33.93&lon=18.42&%20exclude=hourly,daily&appid=33e331f7357c763c3f453bd0d9d9ec3a`)
});