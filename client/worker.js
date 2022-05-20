console.log("Service Woker Loaded ...");

self.addEventListener("push" , e => {
 const data = e.data.json();
 console.log("Push Received ...");
 self.registration.showNotification(data.title , {
  body: "Notified by David Nii Armah(dnaWORKS)",
  icon : ""
 });
});