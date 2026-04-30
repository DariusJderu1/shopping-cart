async function getApiResponseBody(url) {

    const response = await fetch(url);

    if(!response.ok)
        throw new Error("There was an error in the API call!");

    const data = await response.json();

    return data;
}

export default getApiResponseBody;