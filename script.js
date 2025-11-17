import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// ---- Firebase Config của bạn ----
const firebaseConfig = {
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5Ujjg34rrzw8ufFKHh7AyOumbNHfQitI",
  authDomain: "esp32-lora-monitor-cdcc9.firebaseapp.com",
  databaseURL: "https://esp32-lora-monitor-cdcc9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esp32-lora-monitor-cdcc9",
  storageBucket: "esp32-lora-monitor-cdcc9.firebasestorage.app",
  messagingSenderId: "455598190026",
  appId: "1:455598190026:web:6ef064a7d7314421d87333"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ---- Khởi tạo Firebase ----
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ---- Lắng nghe dữ liệu KV1 ----
onValue(ref(db, "KV1"), (snapshot) => {
    const d = snapshot.val();
    document.getElementById("kv1Temp").textContent = d.temp;
    document.getElementById("kv1Humi").textContent = d.humi;
    document.getElementById("kv1CO").textContent = d.co;
    document.getElementById("kv1Gas").textContent = d.gas;
    document.getElementById("kv1Fire").textContent = d.fire;
    document.getElementById("kv1Time").textContent = d.time;
});

// ---- Lắng nghe dữ liệu KV2 ----
onValue(ref(db, "KV2"), (snapshot) => {
    const d = snapshot.val();
    document.getElementById("kv2Temp").textContent = d.temp;
    document.getElementById("kv2Humi").textContent = d.humi;
    document.getElementById("kv2CO").textContent = d.co;
    document.getElementById("kv2Gas").textContent = d.gas;
    document.getElementById("kv2Fire").textContent = d.fire;
    document.getElementById("kv2Time").textContent = d.time;
});
