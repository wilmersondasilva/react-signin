export const CORRECT_EMAIL = 'user@mine.com'
export const CORRECT_PASSWORD = 'password'
export const REQUEST_DELAY = 1000

export default {
    signIn: (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === CORRECT_EMAIL && password === CORRECT_PASSWORD)
                    return resolve()

                return reject()
            }, REQUEST_DELAY)
        })
    },
    resetPassword: email => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === CORRECT_EMAIL) return resolve()

                return reject()
            }, REQUEST_DELAY)
        })
    }
}
