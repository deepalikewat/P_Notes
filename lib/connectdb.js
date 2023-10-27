import mongoose from "mongoose";
const mo = "you db string"
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
