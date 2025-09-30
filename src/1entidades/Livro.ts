import { ObjectId } from 'mongodb';

class Livro {
    constructor (
        public nome?: string,
        public autores?: ObjectId[],
        public _id?: string,
    ) { }
}
export default Livro;