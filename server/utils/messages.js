export const formatMessage = (username, text, time = Date.now()) {
    return { username, text, time }
}