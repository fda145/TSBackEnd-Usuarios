import CustomError from './CustomError';

class BdException extends CustomError {
    constructor(message: string) {
        super(message.toString(), 500);
        console.error('Bd Error: ', super.message);
    }
}

export default BdException;