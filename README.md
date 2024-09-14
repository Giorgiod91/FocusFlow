# 🛡️ SafeWalk: A Safety Companion App


![img-1ZgAci5OYy5L06FwTBcm0AQd](https://github.com/user-attachments/assets/7bfaf397-01ea-406f-9151-97438cac781d)

**SafeWalk** is a mobile and web app designed to provide safety for individuals when walking alone, especially at night. Built with **Expo** for mobile development. SafeWalk ensures help is always just a tap away with real-time location tracking, automatic emergency alerts, and audio/video recording.

---

## 🌟 Features

- **Live Location Tracking**: Share your live GPS location with trusted contacts in real time. Implemented with **Expo** for mobile and **Next.js** for the web dashboard.
- **Emergency Recording**: Start audio/video recording in case of an emergency and securely store the file in the cloud, using **Expo**'s native device features.
- **Panic Button**: Trigger an instant alert to your trusted contacts, including your current location and recorded data.
- **Auto-Send to Police**: In critical situations, SafeWalk can automatically send your location and recordings to law enforcement.
- **Safe Route Suggestions**: Receive suggestions for the safest routes based on lighting, traffic, and crime data (planned feature).
- **Voice Activation**: Activate emergency mode hands-free with voice commands (e.g., "Help!") using Expo's native voice recognition capabilities.


## 🛠️ Tech Stack


- **Frontend (Mobile App)**:
  - **Expo (React Native)**: Used for building the mobile app, providing access to native device features such as geolocation, camera, and microphone for GPS tracking and emergency recording.
  - **JavaScript (ES6+)**: Core programming language used to build the app's logic and interface.
  
- **Backend & Realtime Database**:
  - **Firebase Firestore**: Used for real-time GPS location tracking, securely storing user data, and facilitating fast communication between mobile devices and the server.
  - **Firebase Authentication**: Manages user authentication securely via email, phone, or social accounts.
  - **Firebase Cloud Functions**: Automates critical tasks such as sending alerts and processing real-time data.
  - **Firebase Cloud Storage**: Safely stores audio and video recordings captured during emergencies.

- **Realtime Communication**:
  - **WebSockets / Firebase Realtime Database**: Facilitates continuous, real-time data flow for location updates, ensuring that trusted contacts always have up-to-date information.

- **Cloud Services & Hosting**:
  - **Firebase Hosting**: Hosts the web dashboard and backend functions, ensuring fast and scalable deployment.
