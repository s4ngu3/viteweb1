import axios from 'axios';

const token = ""
const urltrailer = "https://api.judah.tv/api/listtrailer"

const urlcanais = "https://api.judah.tv/api/listtv/"




//const getTrailer = axios.get(urltrailer, {
//  headers: {
//  Authorization: `Bearer ${token}`
// } })



const getTrailer = axios.get(urltrailer)




const getCanais = (lista) => axios.get(urlcanais+lista)


export default { getTrailer, getCanais }