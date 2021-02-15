
const getTransitInfo = async (payload) => {
    const url = `https://svc.metrotransit.org/nextripv2/${payload}`
    try {
        const result = await fetch(url);
        return await result.json();
    } catch (e) {
        return e;
    }
}

export default getTransitInfo;