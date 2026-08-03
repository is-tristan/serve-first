export function splitFullName(fullName) {
    const trimmedName = String(fullName || "").trim().replace(/\s+/g, " ");

    if (!trimmedName) {
        return {
            firstname: "",
            lastname: "",
        };
    }

    const nameParts = trimmedName.split(" ");
    const firstname = nameParts[0];
    const lastname = nameParts.slice(1).join(" ");

    return {
        firstname,
        lastname,
    };
}
