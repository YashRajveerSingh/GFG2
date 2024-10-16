// const APIURL = 'http://localhost:3000/jobs';

// const jobBox = document.querySelector("#job-box");

// const getJobs = async () => {
//     jobBox.innerHTML = "<p>Loading...</p>"; // Loading message
//     try {
//         const response = await fetch(APIURL);
//         const data = await response.json();
//         showJobs(data);
//     } catch (error) {
//         console.error('Fetch error:', error);
//         jobBox.innerHTML = "<p>Something went wrong. Please try again later.</p>";
//     }
// };

// const showJobs = (data) => {
//     jobBox.innerHTML = "";  // Clear job container

//     data.results.forEach((job) => {
//         const box = document.createElement("div");
//         box.classList.add("box");
//         box.innerHTML = `
//             <div class="job-info">
//                 <h2>${job.title}</h2>
//                 <h3>Company: ${job.company.display_name}</h3>
//                 <p>Location: ${job.location.display_name}</p>
//                 <a href="${job.redirect_url}" target="_blank">View Job</a>
//             </div>
//             <div class="job-description">
//                 <h4>Job Description:</h4>
//                 <p>${job.description.substring(0, 150)}...</p>
//             </div>
//         `;
//         jobBox.appendChild(box);
//     });
// };

// getJobs();
