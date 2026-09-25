/* =========================================================
   MEMBER DASHBOARD
========================================================= */


/* =========================================================
   MOBILE SIDEBAR
========================================================= */

const mobileMenu =
    document.getElementById("mobileMenu");

const sidebar =
    document.querySelector(".sidebar");


if (mobileMenu && sidebar) {

    mobileMenu.addEventListener("click", () => {

        sidebar.classList.toggle("mobile-open");

    });

}


/* Close sidebar when navigation item is selected */

document
    .querySelectorAll(".nav-item")
    .forEach(item => {

        item.addEventListener("click", event => {

            if (item.getAttribute("href") === "#") {

                event.preventDefault();

            }

            if (window.innerWidth <= 850) {

                sidebar.classList.remove(
                    "mobile-open"
                );

            }

        });

    });


/* =========================================================
   NOTIFICATIONS
========================================================= */

const notificationButton =
    document.getElementById(
        "notificationButton"
    );

const notificationPanel =
    document.getElementById(
        "notificationPanel"
    );

const closeNotifications =
    document.getElementById(
        "closeNotifications"
    );


if (
    notificationButton &&
    notificationPanel
) {

    notificationButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            notificationPanel.classList.toggle(
                "open"
            );

        }
    );

}


if (
    closeNotifications &&
    notificationPanel
) {

    closeNotifications.addEventListener(
        "click",
        () => {

            notificationPanel.classList.remove(
                "open"
            );

        }
    );

}


/* Close notifications when clicking outside */

document.addEventListener(
    "click",
    event => {

        if (
            notificationPanel &&
            notificationPanel.classList.contains(
                "open"
            ) &&
            !notificationPanel.contains(
                event.target
            ) &&
            !notificationButton.contains(
                event.target
            )
        ) {

            notificationPanel.classList.remove(
                "open"
            );

        }

    }
);


/* =========================================================
   DEMO MEMBER DATA
========================================================= */

const memberData = {

    name: "Rahul Sharma",

    memberId: "PS1024",

    plan: "Monthly Membership",

    monthlyFee: 1500,

    membershipStart:
        "12 Sep 2026",

    membershipExpiry:
        "12 Oct 2026",

    attendance: 92,

    visits: 18,

    streak: 7,

    daysRemaining: 17

};


/* =========================================================
   MEMBERSHIP STATUS
========================================================= */

function updateMembershipStatus() {

    const status =
        document.querySelector(
            ".membership-status strong"
        );

    const expiry =
        document.querySelector(
            ".membership-status span"
        );

    if (!status || !expiry) return;


    if (memberData.daysRemaining <= 0) {

        status.textContent =
            "Membership Expired";

        expiry.textContent =
            "Please renew your membership";

    }

}


/* =========================================================
   DEMO NAVIGATION
========================================================= */

document
    .querySelectorAll(
        ".nav-item"
    )
    .forEach(item => {

        item.addEventListener(
            "click",
            event => {

                const href =
                    item.getAttribute(
                        "href"
                    );

                if (href !== "#") {

                    return;

                }

                event.preventDefault();

                const label =
                    item.querySelector(
                        "span:nth-child(2)"
                    )?.textContent;

                if (!label) return;

                console.log(
                    `${label} module will be connected later.`
                );

            }
        );

    });


/* =========================================================
   BUTTONS
========================================================= */

document
    .querySelectorAll(
        ".outline-button, .full-button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                console.log(
                    "Member action:",
                    button.textContent.trim()
                );

            }
        );

    });


/* =========================================================
   INITIALIZATION
========================================================= */

updateMembershipStatus();