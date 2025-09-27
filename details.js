async function getDetails() {
    try {
        const params = new URLSearchParams(window.location.search);
        const userId = params.get("id");
        const { data } = await axios.get(`http://ums12.runasp.net/api/users/${userId}`);
        console.log(data);

        document.querySelector(".user-id").textContent = userId;
        document.querySelector(".user-name").textContent = data.data.name;
        document.querySelector(".user-email").textContent = data.data.email;
        document.querySelector(".user-age").textContent = data.data.age;

        document.querySelector(".loader-container").classList.add("d-none");


    } catch (error) {
        console.error("Failed to load user details:", error);
        alert("Error loading user details. Please try again.");
    }


}
getDetails();



