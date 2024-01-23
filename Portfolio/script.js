function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("comment").value;
    
    var subject = "Portfolio Contact Form Submission";
    var body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
    
    var mailtoLink = "mailto: portfoliocontact2024@gmail.com" +
                     "?subject=" + encodeURIComponent(subject) +
                     "&body=" + encodeURIComponent(body);
    
    window.location.href = mailtoLink;
}


//TRY TO USE NODE JS FOR AUTOMATIC MAIL SENDING SYSTEM, BUT IT'S NEED AUTHENTICATION. SO I USE NORMAL JS TO RUN THE PROGRAM.

