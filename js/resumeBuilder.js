var work = {
	"jobs" : [
	{
		"employer" : "Acer",
		"title" : "Software-developer",
		"location" : "Bangalore",
		"date" : "Jun '15- Mar '17"
	},
	{
		"employer" : "Amazon",
		"title" : "Software-developer",
		"location" : "Bangalore",
		"date" : "Apr '17- Dec '17"
	},
	{
		"employer" : "Google",
		"title" : "Software-developer",
		"location" : "Silicon-Valley",
		"date" : "Jan '18- Present"
	}
	]
};


var projects = {
	"projects" : [
	{
		"title" : "Library-book-management",
		"dates" : "Jun '12",
		"description" : "Developed a library book management website to help students issue and return books on time"	
	},
	{
		"title" : "Music-player-app",
		"dates" : "Jun '13",
		"description" : "Developed a music- playiing application for users to select songs based on their moods"
	}
	]
};

var bio={
	"name":"Angana Borah",
	"age":23,
	"role" : "Software-developer",
	"biopic" : "images/hirist.jpg",
	"welcomeMessage" : "Welcome to my page!",
	"contacts" : {
		"mobile" : "8638111577",
		"email" : "anganaborah9@gmail.com",
		"github" : "https://github.com/AnganaB",
		"instagram" : "https://www.instagram.com/sleepnindwoods/",
		"location" : "Silicon-Valley, California"
	},
	
    "skills" : ["awesomeness", "programming" , "javascript" , "sleeping" , "singing"]
    
};
var education = {
	"schools" : [
	{
		"name" : "VKV-Umrongso",
		"degree" :"AISSE",
		"date" : "March 2009",
		"majors" : ["Science"],
		"location" : "Umrongso"
	},
	{
		"name" : "NPS International School",
		"degree" : "AISSCE",
		"date" : "April 2011",
		"majors" : ["Science"],
		"location" : "Guwahati"
	},
	{
		"name" : "NIT Silchar",
		"degree" : "BTech",
		"date" : "Jun 2015",
		"majors" : ["CS"],
		"location" : "Silchar"
	}
	],
	"onlinecourses" : [
	{
		"title" : "Javascript Essential Training",
		"school" : "Udacity",
		"Date" : " Dec '13"
	}
	]
};
function displaywork()
{
	for(job in work.jobs)
{
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle= HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formemployertitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formemployertitle);
}
};

function displaybio()
{
	var formattedName  = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedmob = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formContact = HTMLcontactGeneric.replace("%contact%", "Contacts");
	var formContact1 = formContact.replace("%data%", ":");
	var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedgit = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedinsta = HTMLInsta.replace("%data%", bio.contacts.instagram);
	var loc = HTMLlocation.replace("%data%", bio.contacts.location);
	
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	
	
	$("#topContacts").append(formContact1);
	$("#topContacts").append(formattedmob);
	$("#topContacts").append(formattedemail);
	$("#topContacts").append(formattedgit);
	$("#topContacts").append(formattedinsta);
	$("#topContacts").append(loc);
	var pic = HTMLbioPic.replace("%data%", bio.biopic);
	var mes = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(mes);
	$("#header").append(pic);
	

}

displaywork();
displaybio();


function displayedu(){
	for(ed in education.schools)
	{
		$("#education").append(HTMLschoolStart);
		var edname = HTMLschoolName.replace("%data%", education.schools[ed].name);
		$(".education-entry:last").append(edname);
		var edloc = HTMLschoolLocation.replace("%data%", education.schools[ed].location);
		$(".education-entry:last").append(edloc);
		var eddeg = HTMLschoolDegree.replace("%data%", education.schools[ed].degree);
		$(".education-entry:last").append(eddeg);
	}
};
displayedu();

projects.display= function(){
	for(project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);
		var ftitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(ftitle);
		var fdates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(fdates);
		var fdescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(fdescription);
	}
}
projects.display();


//function displayskills(){
 if(bio.skills.length>0)
    {
      $("#header").append(HTMLskillsStart);
      var formattedName  = HTMLskills.replace("%data%",bio.skills[0]);
      $("#skills").append(formattedName);
      formattedName  = HTMLskills.replace("%data%",bio.skills[1]);
      $("#skills").append(formattedName);
      var formattedName  = HTMLskills.replace("%data%",bio.skills[2]);
      $("#skills").append(formattedName);
      var formattedName  = HTMLskills.replace("%data%",bio.skills[3]);
      $("#skills").append(formattedName);
      var formattedName  = HTMLskills.replace("%data%",bio.skills[4]);
      $("#skills").append(formattedName);
    }
   //};
  // displayskills();

 

//worked

 $(document).click(function(loc){
 	var x= loc.pageX;
 	var y = loc.pageY;
 	logClicks(x,y);
 });

var work_obj;
function locationizer(work_obj) {
    var array = [];
    var i;
    for(i=0;i<work_obj.jobs.length;i++){
        array.push(work_obj.jobs.location);
    }
    return array;
}

console.log(locationizer(work));


function inName(){

	var finalName= bio.name;
	var s = bio.name.split(" ");
	s[1]= s[1].toUpperCase();
	s[0]=s[0].slice(0,1).toUpperCase() + s[0].slice(1).toLowerCase();
	finalName = s.join(" ");
	return finalName;

}

inName();

$("#main").append(internationalizeButton);
//worked
$("#mapDiv").append(googleMap);


