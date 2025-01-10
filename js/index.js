function openNav(){
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
}


let mybutton = document.getElementById("myBtn");

window.onscroll = function(){
    scrollFunction();
    scro
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    }else{
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}


window.addEventListener("load", () =>{
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () =>{
        document.body.removeChild("loader");
    })
})


document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a'); // Create an <a> element
    link.href = 'assets/John_CV.pdf'; // Path to your CV file
    link.download = 'John_CV.pdf'; // Filename for the downloaded file
    link.click(); // Trigger the download
  });