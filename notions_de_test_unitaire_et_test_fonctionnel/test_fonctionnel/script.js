const contactForm = document.getElementById("contact-form");
const username = document.getElementById("username");
const title = document.getElementById("title");
const content = document.getElementById("content");
const submitBtn = document.getElementById("subtmit-btn");

const contactFormTest = () => {
  username.value = "Paul";
  title.value = "Lorem Ipsum";
  content.value = "amet consectetur adipisicing elit.";

  if (!window.location.search) {
    submitBtn.click();
  }

  const queryParams = new URLSearchParams(window.location.search);

  if (queryParams.get("username").length > 0) {
    return true;
  }
  return false;
};

contactFormTest()
  ? console.info("Contact form test ok")
  : console.error("Contact form test failed");
