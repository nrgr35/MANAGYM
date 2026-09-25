/* =========================================================
   GYM MANAGEMENT DASHBOARD
   FRONTEND / DEMO DATA
========================================================= */


/* =========================================================
   MOBILE SIDEBAR
========================================================= */

const mobileMenu = document.getElementById("mobileMenu");
const sidebar = document.querySelector(".sidebar");

if (mobileMenu && sidebar) {

    mobileMenu.addEventListener("click", () => {
        sidebar.classList.toggle("mobile-open");
    });

}


/* Close sidebar after selecting navigation on mobile */

document.querySelectorAll(".nav-item").forEach(item => {

    item.addEventListener("click", () => {

        if (window.innerWidth <= 850) {
            sidebar.classList.remove("mobile-open");
        }

    });

});


/* =========================================================
   NOTIFICATION PANEL
========================================================= */

const notificationButton =
    document.getElementById("notificationButton");

const notificationPanel =
    document.getElementById("notificationPanel");

const closeNotifications =
    document.getElementById("closeNotifications");


if (notificationButton && notificationPanel) {

    notificationButton.addEventListener("click", (event) => {

        event.stopPropagation();

        notificationPanel.classList.toggle("open");

    });

}


if (closeNotifications && notificationPanel) {

    closeNotifications.addEventListener("click", () => {

        notificationPanel.classList.remove("open");

    });

}


/* Close notification panel when clicking outside */

document.addEventListener("click", (event) => {

    if (
        notificationPanel &&
        notificationPanel.classList.contains("open") &&
        !notificationPanel.contains(event.target) &&
        !notificationButton.contains(event.target)
    ) {

        notificationPanel.classList.remove("open");

    }

});


/* =========================================================
   GLOBAL SEARCH
========================================================= */

const globalSearch =
    document.getElementById("globalSearch");


if (globalSearch) {

    globalSearch.addEventListener("input", () => {

        const query =
            globalSearch.value.trim().toLowerCase();

        const rows =
            document.querySelectorAll(
                ".table-panel tbody tr"
            );


        rows.forEach(row => {

            const text =
                row.textContent.toLowerCase();

            if (!query || text.includes(query)) {

                row.style.display = "";

            } else {

                row.style.display = "none";

            }

        });

    });

}


/* =========================================================
   ATTENDANCE PERIOD
========================================================= */

const attendancePeriod =
    document.getElementById("attendancePeriod");


if (attendancePeriod) {

    attendancePeriod.addEventListener("change", () => {

        /*
         * Demo behaviour for now.
         *
         * Later this will load actual attendance
         * data from the backend.
         */

        console.log(
            "Attendance period:",
            attendancePeriod.value
        );

    });

}


/* =========================================================
   FOLLOW-UP BUTTONS
========================================================= */

document
    .querySelectorAll(".followup-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            const row = button.closest("tr");

            const memberName =
                row.querySelector(
                    ".member-cell strong"
                )?.textContent || "Member";


            button.textContent = "Follow-up";

            alert(
                `Follow-up opened for ${memberName}.`
            );

        });

    });


/* =========================================================
   QUICK ACTIONS
========================================================= */

const actionButtons =
    document.querySelectorAll(
        ".quick-actions button"
    );


if (actionButtons.length) {

    actionButtons.forEach(button => {

        button.addEventListener("click", () => {

            const text =
                button.textContent.trim();

            if (text.includes("Add Member")) {

                alert(
                    "Add Member module will be connected here."
                );

            }

            if (text.includes("Mark Attendance")) {

                alert(
                    "Attendance module will be connected here."
                );

            }

        });

    });

}


/* =========================================================
   NAVIGATION PLACEHOLDER
========================================================= */

document
    .querySelectorAll(
        ".navigation .nav-item"
    )
    .forEach(item => {

        item.addEventListener("click", event => {

            const href =
                item.getAttribute("href");

            if (href === "#") {

                event.preventDefault();

                const page =
                    item.querySelector(
                        "span:nth-child(2)"
                    )?.textContent || "This";

                console.log(
                    `${page} module is planned for the next phase.`
                );

            }

        });

    });


/* =========================================================
   KEYBOARD SEARCH
========================================================= */

document.addEventListener("keydown", event => {

    if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
    ) {

        event.preventDefault();

        if (globalSearch) {

            globalSearch.focus();

        }

    }

});