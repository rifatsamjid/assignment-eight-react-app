const getStoredApps = () => {


    const storedApp = localStorage.getItem("apps");

    if (storedApp) {
        const storedAppData = JSON.parse(storedApp)
        return storedAppData
    }
    else {
        return []
    }
}

const addToStoredDB = (id) => {

    const storedAppData = getStoredApps();

    if (storedAppData.includes(id)) {
        alert('this data is already exist')

    }
    else {
        storedAppData.push(id)
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("apps", data)
    }
}

export { addToStoredDB, getStoredApps }