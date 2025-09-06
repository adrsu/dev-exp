
import Redis from "ioredis";

const redis = new Redis(); // defaults to 6379

redis.on("connect", () => {
    console.log("connected to redis")

    redis.set("greeting", "hello from redis")

    redis.get("greeting", (err, res) => {
        if (err) console.log(err);
        else console.log("from redis:", res);

        redis.quit();
    });
});