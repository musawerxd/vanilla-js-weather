
# Vanilla JS Weather App

A simple weather application built with **vanilla JavaScript, HTML, and CSS** that fetches real-time weather data from the OpenWeatherMap API. The project demonstrates working with APIs, asynchronous JavaScript, and dynamic DOM updates.

---

## Features

* Search weather by city name
* Displays current temperature in Celsius
* Weather condition and description
* Humidity percentage
* Wind speed converted to km/h
* "Feels like" temperature
* City-based date using timezone offset
* Default weather on load (Multan)
* Weather icons based on condition
* Light & Dark theme toggle
* Keyboard support: press Enter to search

---

## Architecture

* **API Integration:** Fetches live weather data from OpenWeatherMap
* **Async Handling:** Uses fetch with async/await and error handling
* **Data Formatting:** Helper functions format temperature, wind speed, humidity, and dates
* **DOM Updates:** UI elements updated dynamically after fetching data
* **Event Handling:** Button click and keyboard events trigger weather search

---

## Project Structure

```
vanilla-js-weather/
├── images
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/musawerxd/vanilla-js-weather.git
```

Open `index.html` in your browser.
No server required — fully client-side.

---

## Learnings

* Working with external APIs
* Using the Fetch API for HTTP requests
* Async JavaScript and Promise handling
* DOM manipulation and UI updates
* Handling timezone-based date formatting
* Improving UX with validation and keyboard input

---

## Made with chai☕ and curiosity
