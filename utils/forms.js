export function getCookie(name) {
    if (typeof document === "undefined") {
        return "";
    }

    const cookieEntry = document.cookie
        .split("; ")
        .find((entry) => entry.startsWith(`${name}=`));

    if (!cookieEntry) {
        return "";
    }

    return decodeURIComponent(cookieEntry.slice(name.length + 1));
}

export function appendHubspotContext(formData) {
    formData.set("pageUri", window.location.href);
    formData.set("pageName", document.title);

    const hutk = getCookie("hubspotutk");

    if (hutk) {
        formData.set("hutk", hutk);
    }

    return formData;
}
