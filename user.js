import express from 'express';
import { Queue } from 'bullmq';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(express.json());

const queue = new Queue('imageProcessingQueue', 'redis://localhost:6379');

app.post('/queue', async (req, res) => {
    console.log(req.body);
    try {
        await queue.add('processImage', {
            task: req.body.taskName,
            userId: req.body.userId,
            fileName: `${uuidv4()}.mp4`
        }, { priority: req.body.priority });
        res.status(200).send({ message: 'Task added to the queue successfully!' });
    } catch (error) {
        console.error('Error adding job to queue:', error.message);
        res.status(500).send({ message: 'Failed to add task to the queue!' });
    }
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});