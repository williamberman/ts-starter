export const TODO = (message?: string | undefined) => {
    if (message === undefined) {
        message = 'TODO'
    }

    throw new NotImplementedError(message)
}

class NotImplementedError extends Error { }
