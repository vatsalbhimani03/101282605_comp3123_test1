const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = { "message": "delayed success!" }
            resolve(success)
        }, 500)
    })
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error("delayed exception!")
            } catch (e) {
                var error = {"error": e.message }
                reject(error)
            }
        }, 500)
    })
}

const output = async() => {
    try{
        console.log("------------------------------Question 2-----------------------------")
        console.log(await resolvedPromise())
        await rejectedPromise()
        console.log("---------------------------------------------------------------------")
    } catch(e) {
        console.error(e);
    }
}
output()