document.addEventListener("DOMContentLoaded", () => {

  const ajaxSend = async (formData) => {
      const response = await fetch("https://httpbin.org/post", {
          method: "POST",
          body: formData
      });
      if (!response.ok) {
          throw new Error(`error: ${response.status}`);
      }
      return await response.text();
  };

  if (document.querySelector("form")) {
      const forms = document.querySelectorAll("form");

      forms.forEach(form => {
          form.addEventListener("submit", function (e) {
              e.preventDefault();
              const formData = new FormData(this);

              ajaxSend(formData)
                  .then((response) => {
                    setTimeout( ()=> alert("Děkujeme za zpětnou vazbu"), 0);
                      form.reset(); 
                  })
                  .catch((err) => console.error(err))
          });
      });
  }

});