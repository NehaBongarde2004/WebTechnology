const BASE_URL = "http://localhost:3000"

let role = ""
let currentUserEmail = ""
let registeredEvents = []

// SHOW SECTION
function showSection(id) {
    document.querySelectorAll('.section').forEach(sec => {
        sec.style.display = 'none'
    })
    document.getElementById(id).style.display = 'block'
}

//LOAD EVENTS 
function loadEvents() {
    fetch(`${BASE_URL}/admin/all-events`)
    .then(res => res.json())
    .then(data => {

        let html = ""

        data.data.forEach(e => {

            let registerBtn = ""

            //USER VIEW
            if (role === "user") {
                if (registeredEvents.includes(e.event_id)) {
                    registerBtn = `<button disabled style="background:gray;">Already Registered</button>`
                } else {
                    registerBtn = `
                        <button onclick="registerToEvent(${e.event_id})">
                            Register
                        </button>
                    `
                }
            }

            // ADMIN DELETE BUTTON
            let adminBtn = ""
            if (role === "admin") {
                adminBtn = `
                    <button class="delete-btn" onclick="deleteEvent(${e.event_id})">
                        Delete
                    </button>
                `
            }

            html += `
                <div class="event-card">
                    <h3>${e.event_name}</h3>
                    <p>${e.description || "No description available"}</p>
                    <p>${new Date(e.event_date).toLocaleDateString()}</p>
                    <p>${e.location}</p>
                    <p>₹${e.fees}</p>

                    ${registerBtn}
                    ${adminBtn}
                </div>
            `
        })

        document.getElementById("eventList").innerHTML = html
    })
}

// ADD EVENT
function addEvent() {
    fetch(`${BASE_URL}/admin/add-event`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            event_name: document.getElementById("name").value,
            description: document.getElementById("description").value,
            event_date: document.getElementById("date").value,
            location: document.getElementById("location").value,
            fees: document.getElementById("fees").value
        })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message)  //now comes from backend

        // clear fields
        document.getElementById("name").value = ""
        document.getElementById("description").value = ""
        document.getElementById("date").value = ""
        document.getElementById("location").value = ""
        document.getElementById("fees").value = ""

        loadEvents()
    })
}

//  DELETE EVENT
function deleteEvent(id) {
    if (!confirm("Delete this event?")) return

    fetch(`${BASE_URL}/admin/delete/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        alert("Event Deleted")
        loadEvents()
    })
}

//REGISTER TO EVENT
function registerToEvent(eventId) {
    fetch(`${BASE_URL}/participant/register-to-event`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: currentUserEmail,
            eventId: eventId
        })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message)

        loadMyEvents().then(() => {
            loadEvents()
        })
    })
}

// LOAD MY EVENTS
function loadMyEvents() {
    return fetch(`${BASE_URL}/participant/my-events?email=${currentUserEmail}`)
    .then(res => res.json())
    .then(data => {

        registeredEvents = data.data.map(e => e.event_id)

        let html = ""

        data.data.forEach(e => {
            html += `
                <div class="event-card">
                    <h3>${e.event_name}</h3>
                    <p>${new Date(e.event_date).toLocaleDateString()}</p>
                    <p>${e.location}</p>
                </div>
            `
        })

        document.getElementById("myEventList").innerHTML = html
    })
}

//  LOGIN
function login() {
    role = document.getElementById("role").value   //FIXED

    // ADMIN LOGIN
    if (role === "admin") {
        const username = document.getElementById("loginEmail").value
        const password = document.getElementById("password").value

        if (username === "admin" && password === "1234") {
            alert("Admin Login Success")

            setAdminUI()
            showSection('events')
            loadEvents()
        } else {
            alert("Invalid Admin Login")
        }
    }

    // USER LOGIN
    else {
        const email = document.getElementById("loginEmail").value

        fetch(`${BASE_URL}/user/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: document.getElementById("password").value
            })
        })
        .then(res => res.json())
        .then(data => {
            alert(data.message)

            if (data.status === "success") {
                currentUserEmail = email

                setUserUI()
                showSection('events')

                loadMyEvents().then(() => {
                    loadEvents()
                })
            }
        })
    }
}

//  REGISTER USER
function registerUser() {
    fetch(`${BASE_URL}/user/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: document.getElementById("rname").value,
            email: document.getElementById("remail").value,
            password: document.getElementById("rpassword").value
        })
    })
    .then(res => res.json())
    .then(() => {
        alert("User Registered")

        document.getElementById("rname").value = ""
        document.getElementById("remail").value = ""
        document.getElementById("rpassword").value = ""
    })
}

// UI 
function setAdminUI() {
    document.getElementById("navLinks").innerHTML = `
        <a onclick="showSection('events')">Events</a>
        <a onclick="showSection('addEvent')">Add Event</a>
        <a onclick="logout()">Logout</a>
    `
}

function setUserUI() {
    document.getElementById("navLinks").innerHTML = `
        <a onclick="showSection('events')">Events</a>
        <a onclick="showSection('myEvents'); loadMyEvents()">My Events</a>
        <a onclick="logout()">Logout</a>
    `
}

function logout() {
    location.reload()
}

//DEFAULT
showSection('login')