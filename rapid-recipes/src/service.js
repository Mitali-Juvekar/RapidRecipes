const queryStrings = {
    app_id: process.env.REACT_APP_APP_ID,
    app_key:process.env.REACT_APP_APP_KEY
}
// https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=e78ddcc6&app_key=9b2760c3ae580369c7bff2f00c47b34e


export const fetchData = async (defaultQuery) => {
    const {app_id, app_key} = queryStrings;
    try {
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`);
        const response = await data.json()
        return response;

    }
    catch(e) {
        console.log(e,'Something went wrong!')
        return e
    }
}

export const fetchTabData = async (defaultQuery) => {
    const {app_id,app_key} = queryStrings;
    try {
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`)
        const response = await data.json()
        return response;

    }
    catch(e) {
        console.log(e,'Something went wrong!')
        return e
    }
}