document.getElementById("dob").max = new Date().toISOString().split("T")[0];

function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    if (!dobInput) {
        alert("Please select your date of birth!");
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerHTML = 
        `You are <span style="color:#ff4d6d;">${years}</span> years, 
        <span style="color:#ff9933;">${months}</span> months, 
        <span style="color:#33cc33;">${days}</span> days old! 🎉`;
}
