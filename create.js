
const addUserForm = document.querySelector(".create-form");
addUserForm.onsubmit = async function (e) {
    e.preventDefault();

    try {


        const user = {
            name: e.target.name.value,
            email: e.target.email.value,
            // password:e.target.password.value,
            // age:e.target.age.value,
            age: parseInt(e.target.age.value)


        }

        console.log(user);

        const response = await axios.post("http://ums12.runasp.net/api/users", user);

        Swal.fire({
            title: "User Added successfully!",
            icon: "success",
            timer: 2000,
            showConfirmButton: false
        }).then(() => {
            window.location.href = "index.html";
        });
        // window.location.href = "./index.html";


    }
    catch (e) {

        alert("Failed to create user. Please try again.");
    }
};