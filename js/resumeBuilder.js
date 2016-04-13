var bio = {
	"name": "Amit Patel",
	"role": "Front End Web Developer",
	"contacts":{
		"mobile": "559-347-7496",
		"email": "amitpatel_7@msn.com",
		"github": "AmitP88",
		"location": "Visalia, CA"
		},
	"welcomeMessage": "Hello! Welcome to my resume!",
	"age": 27,
	"skills": ["HTML", "CSS", "Javascript", "Git version control"],
	"bioPic": ["images/Amit.jpg"]
};

var education =  {
	"schools": [
		{
			"name": "Udacity",
			"location": "online",
			"date": "05/15-Present",
			"degree": "Nanodegree",
			"major": "Front-End Web Development"
		},
		{
			"name": "California State University, Fresno",
			"location": "Fresno,CA",
			"date": "December 2013",
			"degree": "Bachelor of Science",
			"major": "Biology"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "Ventura Coastal LLC.",
			"title": "Lab Technician II",
			"location": "Visalia, CA",
		 	"date": "11/15-Present",
		 	"description": "Extract and analyze citrus juice for Brix, pH, percent acidity, and percent oil."
		},
		{
			"employer": "Deerpoint Group Inc.",
			"title": "Lab Technician",
			"location": "Fresno, CA",
		 	"date": "4/15-5/15",
		 	"description": "Conducted microwave reactions on dried plant samples for Flow Injection Analysis and ICP. Measured Total Bacterial Counts , pH, EC, and titrations on water samples."
		},
		{
			"employer": "Food Safety Net Services",
			"title": "Lab Technician",
			"location": "Fresno,CA",
			"date": "2/14-9-14",
			"description": "Verified and logged in client profile and microbiological/chemical test information into LIMS. Performed serial dilutions and used them for microbiological plating of samples"
		},
		{
			"employer": "California State University, Fresno",
			"title": "Student Researcher",
			"location": "Fresno,CA",
			"date": "08/09-08/10",
			"description": "Performed chemical dilution experiments to aid in research of the properties of gold nanoparticles. Organized data into Excel and used graphs to display any patterns in absorbance ratios."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "My Portfolio Web Page",
			"date": "05/15-06/15",
			"description": "This was my first project I worked on in the Udacity Nanodegree program for Front-end Web Development. In this project, I created a webpage that would serve as my portfolio website for potential employers to see.",
			"images": ["images/project1.jpg"]
		},
		{
			"title": "My Online Resume",
			"date": "06/15-07/15",
			"description": "This was my second project I worked on in the Udacity Nanodegree program. I learned and utilized both javascript and jQuery to create objects for an online interactive resume.",
			"images": ["images/project2final.jpg"]
		},
		{
			"title": "Classic Arcade Game",
			"date": "07/15-09/15",
			"description": "This was my third project I worked on in the Udacity Nanodegree. In this project, I used object-oriented Javascript with a provided game engine to develop a tile-based arcade game loosely based on the game Frogger. Although this project exceeded Udacity's project requirements, I plan to add two additional levels in the future.",
			"images": ["images/P3.jpg"]
		},
		{
			"title": "Website Optimization Project",
			"date": "10/15-12/15",
			"description": "My 4th project for the Udacity Front End Nanodegree program. In this project I took an existing website and optimized it using Google's Pagespeed Insights and also made the loading time faster than 60fps. I used Node.js with Grunt to minimize CSS and also compressed the image sizes to make the site load faster.",
			"images": ["images/P4.jpg"]
		},
		{
			"title": "Google Maps Project",
			"date": "01/16-Present",
			"description": "My 5th project for the Udacity FEND program. In this project I'm developing a web app that displays 5 Awesome Chinese Restaurants in San Francisco, CA. In this project, the goal is to create a webapp using Google Maps API to create a map displaying five locations of interest (I have chosen to use five highly reviewed chinese restaurants in San Francisco, CA), along with a listview (using knockout.js), a search filter, and the use of a third party API. In my project, I will be using Yelp's API to display reviews/ratings of the restaurants that will display both in the listview and in the location marker infowindows on the map. This is still a work in progress.",
			"images": ["images/Map.jpg"]
		}
	]
};

bio.display = function(){

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").prepend(formattedbioPic);
	var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedwelcomeMessage);

	var formattedMobile = HTMLcontactGeneric.replace("%contact%", "mobile").replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLcontactGeneric.replace("%contact%", "email").replace("%data%", bio.contacts.email);
	var formattedGitHub = HTMLcontactGeneric.replace("%contact%", "Github").replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLcontactGeneric.replace("%contact%", "location").replace("%data%", bio.contacts.location);
	var HTMLcontacts = formattedMobile + formattedEmail + formattedGitHub + formattedLocation;

	$('#footerContacts').append(HTMLcontacts);

	if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	}
};

bio.display();

work.display = function(){
	for (var job in work.jobs) {
	// create new div for work experience
		$("#workExperience").append(HTMLworkStart);
	// concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);
		}
	};

work.display();

education.display = function(){
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);



		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedMajor);
	}
};

education.display();

projects.display = function(){
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDate);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function inName(name) {
	var name = window.name;
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}

var name =$("#name").text();

//$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);