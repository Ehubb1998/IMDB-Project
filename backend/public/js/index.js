var app = {
    init: () => {
        app.checkAuth();
        app.logOut();
    },

    checkAuth: async () => {
        try {
            const res = await fetch(
                `/users/${localStorage.getItem("IMDB_USER_ID")}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "IMDB_ACCESS_TOKEN"
                        )}`,
                    },
                }
            );

            const data = await res.json();
            const user = data.user.userName;
            if (!res.ok) {
                throw res;
            } else {
                window.location.href = `/homepage/${user}`;
                return;
            }
        } catch (error) {
            console.error(error);
        }
    },

    logOut: () => {
        document.getElementById("log-out").addEventListener("click", () => {
            localStorage.clear();
            window.location.href = "/";
        })
    }
};

document.addEventListener("DOMContentLoaded", async () => app.init());