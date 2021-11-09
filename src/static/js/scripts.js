// Class definition
var KTLeaflet = function () {

  // Private functions
  var demo3 = function () {
   // define leaflet
   var leaflet = L.map('kt_leaflet_3', {
    center: [47.339, 11.602],
    zoom: 3
   })
 
   // set leaflet tile layer
   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
   }).addTo(leaflet);
 
 
   // set custom SVG icon marker
   var leafletIcon1 = L.divIcon({
    html: `<span class="svg-icon svg-icon-danger svg-icon-3x"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="24" width="24" height="0"/><path d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z" fill="#000000" fill-rule="nonzero"/></g></svg></span>`,
    bgPos: [10, 10],
    iconAnchor: [20, 37],
    popupAnchor: [0, -37],
    className: 'leaflet-marker'
   });
 
   var leafletIcon2 = L.divIcon({
    html: `<span class="svg-icon svg-icon-primary svg-icon-3x"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="24" width="24" height="0"/><path d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z" fill="#000000" fill-rule="nonzero"/></g></svg></span>`,
    bgPos: [10, 10],
    iconAnchor: [20, 37],
    popupAnchor: [0, -37],
    className: 'leaflet-marker'
   });
 
   var leafletIcon3 = L.divIcon({
    html: `<span class="svg-icon svg-icon-warning svg-icon-3x"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="24" width="24" height="0"/><path d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z" fill="#000000" fill-rule="nonzero"/></g></svg></span>`,
    bgPos: [10, 10],
    iconAnchor: [20, 37],
    popupAnchor: [0, -37],
    className: 'leaflet-marker'
   });
 
   var leafletIcon4 = L.divIcon({
    html: `<span class="svg-icon svg-icon-success svg-icon-3x"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="24" width="24" height="0"/><path d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z" fill="#000000" fill-rule="nonzero"/></g></svg></span>`,
    bgPos: [10, 10],
    iconAnchor: [20, 37],
    popupAnchor: [0, -37],
    className: 'leaflet-marker'
   });
 
   // bind markers with popup
   var marker1 = L.marker([39.3262345, -4.8380649], { icon: leafletIcon1 }).addTo(leaflet);
   var marker2 = L.marker([41.804, 13.843], { icon: leafletIcon2 }).addTo(leaflet);
   var marker3 = L.marker([51.11, 10.371], { icon: leafletIcon3 }).addTo(leaflet);
   var marker4 = L.marker([46.74, 2.417], { icon: leafletIcon4 }).addTo(leaflet);
 
   marker1.bindPopup("Spain", { closeButton: false });
   marker2.bindPopup("Italy", { closeButton: false });
   marker3.bindPopup("Germany", { closeButton: false });
   marker4.bindPopup("France", { closeButton: false });
 
   L.control.scale().addTo(leaflet);
  }
 
  return {
   // public functions
   init: function () {
    // default charts
    demo3();
   }
  };
 }();
 
 jQuery(document).ready(function () {
  KTLeaflet.init();
 });

const filterCards = () => {
  const selectAuthors1 = document.querySelector('#authors1 .dropdown-menu');
  const selectAuthors2 = document.querySelector('#authors2 .dropdown-menu');
  const cards1 = document.querySelectorAll('#authors1 .item');
  const cards2 = document.querySelectorAll('#authors2 .item');
  let selected1 = 'all';
  let selected2 = 'all';

  const filter = (select, cards, selected) => {
    select.addEventListener('click', event => {
      let target = event.target;
    	let liNode = target.nodeName.toUpperCase();
      while (liNode != 'LI') {
        target = target.parentNode;
        liNode = target.nodeName.toUpperCase();
      }
      selected = target.id;
      select.previousElementSibling.innerText = target.innerText;
      cards.forEach(item => {
        if (selected === item.getAttribute('data-status') || selected === 'all') {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      })
    })
  }
  filter(selectAuthors1, cards1, selected1);
  filter(selectAuthors2, cards2, selected2);
}

window.onload = function () {
  filterCards();
}