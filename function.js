document.getElementById("registrationForm").addEventListener("submit", function(e) {
    const form = e.target;
    const errors = [];

    const requiredFields = [
        { field: form.surname, name: "Surname" },
        { field: form.firstname, name: "First Name" },
        { field: form.middlename, name: "Middle Name" },
        { field: form.contact, name: "Contact Number", pattern: /^[0-9]{11}$/, message: "must be 11 digits" },
        { field: form.email, name: "Email", pattern: /@/, message: "must be a valid email" },
        { field: form.course, name: "Course" },
        { field: form.batch, name: "Batch" },
        { field: form.section, name: "Section" },
        { field: form.id, name: "ID Number" }
    ];

    requiredFields.forEach(({ field, name, pattern, message }) => {
        const value = field.value.trim();
        if (!value) {
            errors.push(`${name} is required.`);
        } else if (pattern && !pattern.test(value)) {
            errors.push(`${name} ${message}.`);
        }
    });

    if (errors.length > 0) {
        e.preventDefault();
        alert("Please fix the following:\n\n" + errors.join("\n"));
    }
});

