import { Worker } from "bullmq";

const processTask = async (job) => {
    console.log(`Processing task: ${job.data.task} for user: ${job.data.userId} with file: ${job.data.fileName}`);
    // process the job here
    await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate processing time
    console.log(`Processing task: ${job.data.task} for user: ${job.data.userId} with file: ${job.data.fileName} is done.`);
};

export const redisConnection = {
    host: 'localhost',
    port: 6379
};
const worker = new Worker('imageProcessingQueue', processTask, { connection: redisConnection });