async function getUsers() {

    try {

        const { data } = await axios.get("http://ums12.runasp.net/api/users");

        //console.log("data from backend", data);
        let users = data.data

        console.log("data from backend", users);
        let html = "";
        for (let i = 0; i < users.length; i++) {
            html += `
            <tr>
                <td>${users[i].id}</td>
                <td>${users[i].name}</td>
                <td>${users[i].email}</td>
                <td>${users[i].age}</td>

                <td class = "d-flex gap-15 justify_content_center">
                <a class = "detials" href="details.html?id=${users[i].id}">details</a>
                <button class = "delete" onclick="deleteUser(${users[i].id})">delete</button>
                <a class = "edit" href="edit.html?id=${users[i].id}">Edit</a>
               


                </td>
            </tr>
        `;
        }

        document.querySelector(".users .users-data").innerHTML = html;
        document.querySelector(".loader-container").classList.add("d-none");
        // console.log(html);
        // console.log(data);
    } catch (e) {
        alert("error loading", e);
        //or
        // console.log(e.message);
        // document.querySelector(" .text-danger").textContent ="try again";
    }

}

getUsers();

async function deleteUser(id) {
    const response = await axios.delete(`http://ums12.runasp.net/api/users/${id}`);
    Swal.fire({
        title: "User Deleted successfully!",

        icon: "success",
        timer: 2000,
        showConfirmButton: false
    }).then(() => {
        window.location.href = "index.html";
    });
    //location.reload();

}


