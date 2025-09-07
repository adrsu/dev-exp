
import pkg from "pg";

const { Client } = pkg;

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "testdb",
    password: "password",
    port: "5432",
});

async function main() {
    try {
        await client.connect();
        console.log("connected to postgresql");

        const res = await client.query("SELECT NOW()");
        console.log("current time:", res.rows[0]);
    } catch (err) {
        console.log("error:", err);
    } finally {
        await client.end();
    }
}

main();

