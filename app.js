var tablinks = document.getElementsByClassName("tab-links");
var tabContaints = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");


{/* <form name="submit-to-google-sheet">
  <input name="email" type="email" placeholder="Email" required>
  <button type="submit">Send</button>
</form> */}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbw0vPiFa9LfS3IHu2ItdKfBctaIZnHgBEEolc8pkeOb1zXxnMN1cUrGIfn3rWFKQAvB/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message Sent Succesfully."
        setTimeout(() => msg.innerHTML = "", 5000);

        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabContaint of tabContaints) {
        tabContaint.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
    sidemenu.style.right="0";
}
function closemenu() {
    sidemenu.style.right="-200px";
}



