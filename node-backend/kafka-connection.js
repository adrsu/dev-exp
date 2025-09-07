
import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"],
});

const producer = kafka.producer();
const consumer = kafka.consumer({groupId:"test-group"});

async function run() {
    await producer.connect();
    await producer.send({
        topic: "test-topic",
        messages: [{value: "hello from kafka"}],
    });

    console.log("message sent to kafka");

    await consumer.connect();
    await consumer.subscribe({topic: "test-topic", fromBeginning: true});

    await consumer.run({
        eachMessage: async ({topic, partition, message}) => {
            console.log(`received: ${message.value.toString()} (from ${topic})`)
        },
    });
};

run().catch(console.error);