const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');
const overlay = document.getElementById('overlay');
const fileInput = document.getElementById('fileInput');
const profileImage = document.getElementById('profileImage');
const overlayIcon = document.querySelector('.overlay');

// Default placeholder if no image uploaded
const placeholder = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';

// Open Sidebar
menuBtn.addEventListener('click', function() {
  sidebar.style.width = '260px';
  overlay.style.display = 'block';
});

// Close Sidebar
closeSidebar.addEventListener('click', function() {
  sidebar.style.width = '0';
  overlay.style.display = 'none';
});

// Close on overlay click
overlay.addEventListener('click', function() {
  sidebar.style.width = '0';
  overlay.style.display = 'none';
});

// Search
function search() {
  const query = document.getElementById('searchInput').value;
  alert(`You searched for: ${query}`);
}

// Click overlay "+" to trigger file input
overlayIcon.addEventListener('click', function() {
  fileInput.click();
});

// Load profile from localStorage if available
window.onload = function() {
  const storedImage = localStorage.getItem('profileImage');
  if (storedImage) {
    profileImage.src = storedImage;
  } else {
    profileImage.src = placeholder;
  }
}

// Handle profile upload
fileInput.addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      profileImage.src = event.target.result;
      localStorage.setItem('profileImage', event.target.result);
    };
    reader.readAsDataURL(file);
  }
});

const jobs = [
 {
        company: "Google",
        role: "Frontend Developer",
        location: "Bangalore, India",
        requirement: "3+ years of experience in React.js, HTML, CSS",
        eligibility: "B.Tech / M.Tech in Computer Science",
        about: "Work on Google Search UI and enhance user experience."
      },
      {
        company: "Microsoft",
        role: "Backend Developer",
        location: "Hyderabad, India",
        requirement: "Proficient in Node.js, SQL, Azure services",
        eligibility: "Bachelor's Degree in CS or related field",
        about: "Build scalable backend services for Microsoft Teams."
      },
      {
        company: "Amazon",
        role: "Data Analyst",
        location: "Chennai, India",
        requirement: "Strong in SQL, Python, Tableau",
        eligibility: "Graduate with data analysis background",
        about: "Analyze customer purchase patterns to improve sales."
      },
      {
        company: "Infosys",
        role: "Full Stack Developer",
        location: "Pune, India",
        requirement: "Java, Spring Boot, React.js experience",
        eligibility: "B.E / B.Tech in any stream",
        about: "Develop enterprise-level web apps for clients."
      },
      {
        company: "TCS",
        role: "Software Tester",
        location: "Mumbai, India",
        requirement: "Knowledge of Selenium, API testing",
        eligibility: "Any Graduate with testing certification",
        about: "Ensure software quality by automated testing."
      },
      {
        company: "Accenture",
        role: "Cloud Engineer",
        location: "Remote",
        requirement: "AWS/GCP experience, CI/CD pipelines",
        eligibility: "Cloud certification preferred",
        about: "Manage cloud infrastructure and deployments."
      },
      {
        company: "Zoho",
        role: "UI/UX Designer",
        location: "Chennai, India",
        requirement: "Figma, Adobe XD, User Research",
        eligibility: "Any Graduate with design skills",
        about: "Design user-friendly interfaces for SaaS products."
      },
      {
        company: "HCL",
        role: "Network Engineer",
        location: "Noida, India",
        requirement: "CCNA/CCNP certification",
        eligibility: "Diploma or Degree in Networking",
        about: "Manage and troubleshoot network issues."
      },
      {
        company: "Wipro",
        role: "HR Manager",
        location: "Bangalore, India",
        requirement: "5+ years of HR experience",
        eligibility: "MBA in HR Management",
        about: "Lead HR operations and recruitment processes."
      },
      {
        company: "Capgemini",
        role: "DevOps Engineer",
        location: "Kolkata, India",
        requirement: "Docker, Kubernetes, Jenkins knowledge",
        eligibility: "B.Tech in CS or related field",
        about: "Automate deployments and manage CI/CD pipelines."
      },
      {
        company: "IBM",
        role: "AI Engineer",
        location: "Pune, India",
        requirement: "Machine Learning, Python, TensorFlow",
        eligibility: "Masters in AI/ML preferred",
        about: "Work on AI-based solutions and research projects."
      },
      {
        company: "Flipkart",
        role: "Product Manager",
        location: "Bangalore, India",
        requirement: "E-commerce experience, Agile methodology",
        eligibility: "MBA with product management knowledge",
        about: "Manage product lifecycle from concept to delivery."
      },
      {
        company: "Paytm",
        role: "Security Analyst",
        location: "Noida, India",
        requirement: "Cybersecurity knowledge, ethical hacking",
        eligibility: "CEH certification preferred",
        about: "Monitor and secure company digital assets."
      },
      {
        company: "Freshworks",
        role: "Customer Support Executive",
        location: "Chennai, India",
        requirement: "Good communication, CRM knowledge",
        eligibility: "Any Graduate",
        about: "Handle customer queries and provide solutions."
      },
      {
        company: "Deloitte",
        role: "Business Analyst",
        location: "Hyderabad, India",
        requirement: "Analytical thinking, MS Excel, SQL",
        eligibility: "MBA or relevant degree",
        about: "Analyze business data to improve processes."
      }
];

function search() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const sidebar = document.getElementById("resultSidebar");
  const resultList = document.getElementById("resultList");

  resultList.innerHTML = ''; // Clear previous results

  const filteredJobs = jobs.filter(job =>
    job.role.toLowerCase().includes(query) ||
    job.company.toLowerCase().includes(query) ||
    job.location.toLowerCase().includes(query) ||
    job.requirement.toLowerCase().includes(query) ||
    job.eligibility.toLowerCase().includes(query) ||
    job.about.toLowerCase().includes(query)
  );

  if (filteredJobs.length === 0) {
    resultList.innerHTML = `<p>No matching jobs found.</p>`;
  } else {
    filteredJobs.forEach(job => {
      const div = document.createElement('div');
      div.style = "margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 15px;";
      div.innerHTML = `
        <h4 style="color:#ff7a00;">${job.role}</h4>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Requirement:</strong> ${job.requirement}</p>
        <p><strong>Eligibility:</strong> ${job.eligibility}</p>
        <button class="apply-btn" onclick="openApplyModal('${job.company}', '${job.role}')">Apply Now</button>
      `;
      resultList.appendChild(div);
    });
  }

  sidebar.classList.add('active');
}

function closeResults() {
  document.getElementById("resultSidebar").classList.remove('active');
}

