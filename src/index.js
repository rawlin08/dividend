import { fetchDividend } from "./tickerFunctions";

const theForm = document.querySelector('form');

theForm.addEventListener('submit', fetchDividend);