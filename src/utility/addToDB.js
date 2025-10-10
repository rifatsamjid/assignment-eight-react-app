import { toast } from "react-toastify";
const getStoredApps = () => {


    const storedApp = localStorage.getItem("apps");

    if (storedApp) {

        const storedAppData = JSON.parse(storedApp).map(id => parseInt(id))
        return storedAppData
    }
    else {
        return []
    }
}

const addToStoredDB = (id) => {

    const storedAppData = getStoredApps();

    if (storedAppData.includes(id)) {
        toast('This app is already install!')

    }
    else {
        storedAppData.push(id)
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("apps", data)
        toast("App is install successfully!");
    }
}

const removeApps = (id) => {
    const storedAppData = getStoredApps()
    const updatedApps = storedAppData.filter(appID => appID !== id)
    localStorage.setItem("apps", JSON.stringify(updatedApps));
    toast("App uninstalled successfully!");
}

export { addToStoredDB, getStoredApps, removeApps }