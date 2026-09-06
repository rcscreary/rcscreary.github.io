(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var year = document.getElementById("year");
  var form = document.getElementById("subscribe-form");
  var statusEl = document.getElementById("subscribe-status");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  if (form && statusEl) {
    form.addEventListener("submit", function (event) {
      var action = (form.getAttribute("action") || "").trim();
      var emailInput = form.querySelector("#email");
      var email = emailInput ? emailInput.value.trim() : "";

      // Placeholder / unset providers stay on-page with a clear message.
      if (!action || action === "#" || action.indexOf("YOUR-USERNAME") !== -1) {
        event.preventDefault();
        statusEl.hidden = false;
        if (!email || email.indexOf("@") === -1) {
          statusEl.textContent = "Please enter a valid email address.";
          statusEl.className = "form-status is-error";
          return;
        }
        statusEl.textContent =
          "Almost there — connect this form to Beehiiv, Buttondown, or Mailchimp (see README), then subscriptions will go live.";
        statusEl.className = "form-status is-ok";
      }
    });
  }
})();
