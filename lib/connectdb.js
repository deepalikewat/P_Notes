import mongoose from "mongoose";
const mo = "mongodb+srv://aru:aru@cluster0.dcbcmil.mongodb.net/QT?retryWrites=true&w=majority";
// const mo ="mongodb+srv://raju:raju@cluster0.tc0kuqt.mongodb.net/EduWebx?retryWrites=true&w=majority"
let cache = global.mongoose;
if (!cache){
    cache=global.mongoose={conn:null,promise:null}

}

async function databasecon() {
    if (cache.conn) {
        return cache.conn
    }
    if (!cache.promise) {
        const opt = {
            // bufferCommands: true,
            useNewUrlParser: true
        }
        cache.promise = mongoose.connect(mo, opt).then((mongoose) => {
            return mongoose
        })

    }
    cache.conn = await cache.promise
    return cache.conn

}
export default  databasecon
