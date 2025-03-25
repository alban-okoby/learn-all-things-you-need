const socket = io();
const markers = {}; // To store markers by user ID

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      socket.emit("send-location", { latitude, longitude });
    },
    (error) => {
      console.error(error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 2500,
    }
  );
}

const map = L.map("map").setView([0, 0], 10);
L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Custom car icon
const carIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/741/741407.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16],
});

socket.on("recive-location", (data) => {
  const { id, latitude, longitude } = data;

  if (!markers[id]) {
    markers[id] = L.marker([latitude, longitude], { icon: carIcon }).addTo(map);
  } else {
    markers[id].setLatLng([latitude, longitude]);
  }

  map.setView([latitude, longitude], 15);
});

socket.on("user-disconnected", (id) => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});