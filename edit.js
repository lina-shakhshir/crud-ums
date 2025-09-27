async function loadUserData() {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("id");

  try {

    const { data } = await axios.get(`http://ums12.runasp.net/api/users/${userId}`);


    document.getElementById("name").value = data.data.name;
    document.getElementById("email").value = data.data.email;
    document.getElementById("age").value = data.data.age;

    document.querySelector(".loader-container").classList.add("d-none");



    const editUserForm = document.querySelector(".edit-form");
    editUserForm.onsubmit = async function (e) {
      e.preventDefault();

      try {
        const updatedName = document.querySelector("#name").value;


        const response = await axios.patch(`http://ums12.runasp.net/api/users/${userId}`, {
          id: userId,
          name: updatedName,
          email: document.getElementById("email").value,
          age: document.getElementById("age").value
        });


        // alert("User updated successfully!");
        Swal.fire({
          title: "User updated successfully!",
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        }).then(() => {
          window.location.href = "index.html";
        });



      } catch (err) {
        console.error("Update failed:", err.response ? err.response.data : err);
        alert("Failed to update user");
      }
    };

  } catch (error) {
    console.error("Error loading user:", error.response ? error.response.data : error);
  }
}

loadUserData();
