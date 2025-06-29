const socket = io();
const markers = {};
let myId = null;
let isFirstLocation = true;
let hasGoodLocation = false;

const map = L.map("map").setView([0, 0], 2);
L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const carIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/10337/10337609.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16],
});

const warning = document.getElementById("warning");

socket.on("connect", () => {
  myId = socket.id;
});

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude, accuracy } = position.coords;

      if (!hasGoodLocation && accuracy > 100) {
        if (warning) {
          warning.innerText = `Recherche de position précise... (précision actuelle : ${Math.round(accuracy)}m)`;
        }
        return;
      }

      if (!hasGoodLocation && accuracy <= 100) {
        hasGoodLocation = true;
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
          .then(response => response.json())
          .then(data => {
            const place = data.display_name || "Lieu inconnu";
            if (warning) {
              warning.innerText = ` Autorisation de position approuvée : ${place}`;
            }
          })
          .catch((error) => {
            console.warn("Erreur de géocodage inverse :", error);
            if (warning) {
              warning.innerText = " Position trouvée, lieu non identifié.";
            }
          });
        if (warning) {
          warning.innerText = "Autorisation de position approuvée.";
        }

        // Zoom progressif
        let zoomLevel = 1;
        const targetZoom = 5;
        const interval = setInterval(() => {
          if (zoomLevel >= targetZoom) {
            clearInterval(interval);
          } else {
            zoomLevel++;
            map.setView([latitude, longitude], zoomLevel);
          }
        }, 300);
      }

      if (hasGoodLocation) {
        socket.emit("send-location", { latitude, longitude });
      }
    },
    (error) => {
      console.error("Erreur de géolocalisation :", error);
      if (warning) {
        warning.innerText = "Autoriser l'accès à votre position pour poursuivre";
      }
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 3000,
    }
  );
} else {
  alert("La géolocalisation n'est pas supportée par ce navigateur.");
}

socket.on("recive-location", (data) => {
  const { id, latitude, longitude } = data;

  if (!markers[id]) {
    markers[id] = {
      marker: L.marker([latitude, longitude], { icon: carIcon }).addTo(map),
    };
  } else {
    markers[id].marker.setLatLng([latitude, longitude]);
  }

  if (id === myId && isFirstLocation) {
    isFirstLocation = false;
    if (!hasGoodLocation) {
      map.setView([latitude, longitude], 15);
    }
  }
});

socket.on("user-disconnected", (id) => {
  if (markers[id]) {
    map.removeLayer(markers[id].marker);
    delete markers[id];
  }
});


// const socket = io();
// const markers = {};
// let myId = null;
// let isFirstLocation = true;

// const map = L.map("map").setView([0, 0], 2);
// L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// const carIcon = L.icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/10337/10337609.png",
//   iconSize: [32, 32],
//   iconAnchor: [16, 16],
//   popupAnchor: [0, -16],
// });

// socket.on("connect", () => {
//   myId = socket.id;
// });

// if (navigator.geolocation) {
//   navigator.geolocation.watchPosition(
//     (position) => {
//       const { latitude, longitude, accuracy } = position.coords;

//       console.log(`Position : ${latitude}, ${longitude}, précision : ${accuracy}m`);

//       if (accuracy < 100) {
//         socket.emit("send-location", { latitude, longitude });
//       }
//     },
//     (error) => {
//       console.error("Erreur de géolocalisation :", error);
//     },
//     {
//       enableHighAccuracy: true,
//       maximumAge: 0,
//       timeout: 2500,
//     }
//   );
// } else {
//   alert("La géolocalisation n'est pas supportée par ce navigateur.");
// }

// socket.on("recive-location", (data) => {
//   const { id, latitude, longitude } = data;

//   if (!markers[id]) {
//     markers[id] = L.marker([latitude, longitude], { icon: carIcon }).addTo(map);
//   } else {
//     markers[id].setLatLng([latitude, longitude]);
//   }

//   if (id === myId && isFirstLocation) {
//     map.setView([latitude, longitude], 15);
//     isFirstLocation = false;
//   }
// });


// socket.on("user-disconnected", (id) => {
//   if (markers[id]) {
//     map.removeLayer(markers[id]);
//     delete markers[id];
//   }
// });


// const socket = io();
// const markers = {};

// if (navigator.geolocation) {
//   navigator.geolocation.watchPosition(
//     (position) => {
//       const { latitude, longitude } = position.coords;
//       socket.emit("send-location", { latitude, longitude });
//     },
//     (error) => {
//       console.error(error);
//     },
//     {
//       enableHighAccuracy: true,
//       maximumAge: 0,
//       timeout: 2500,
//     }
//   );
// }

// const map = L.map("map").setView([0, 0], 10);
// L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// // Custom car icon
// const carIcon = L.icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/741/741407.png",
//   iconSize: [32, 32],
//   iconAnchor: [16, 16],
//   popupAnchor: [0, -16],
// });

// socket.on("recive-location", (data) => {
//   const { id, latitude, longitude } = data;

//   if (!markers[id]) {
//     markers[id] = L.marker([latitude, longitude], { icon: carIcon }).addTo(map);
//   } else {
//     markers[id].setLatLng([latitude, longitude]);
//   }

//   map.setView([latitude, longitude], 15);
// });

// socket.on("user-disconnected", (id) => {
//   if (markers[id]) {
//     map.removeLayer(markers[id]);
//     delete markers[id];
//   }
// });