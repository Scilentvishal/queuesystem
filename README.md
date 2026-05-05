🚀 Redis Queue System Boilerplate (BullMQ + Docker)

A simple queue system boilerplate built using Node.js, Express, BullMQ, and Redis (Dockerized).
This project is designed for beginners to understand how background job processing works with queues.

📌 Features
Queue system using BullMQ
Background workers for async processing
Redis setup using Docker
Priority-based job handling
Simple Express API to push jobs
Easy to extend for real-world use cases (video processing, emails, etc.)
🧱 Tech Stack
Node.js
Express.js
BullMQ
Redis
Docker
⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/Scilentvishal/queuesystem.git
cd queuesystem
2️⃣ Install Dependencies
npm install
3️⃣ Start Redis using Docker

Make sure Docker is installed and running.

docker-compose -f redis-spawn.yml up -d

This will start:

Redis server → localhost:6379
Redis Insight UI → http://localhost:5540
4️⃣ Important ⚠️ (Redis Connection)

If you're running Node.js locally:

host: 'localhost',
port: 6379

If running Node.js inside Docker:

Replace localhost with your Docker network IP OR service name (redis)

Example:

host: 'redis',
port: 6379
5️⃣ Run the Server
node file.js
6️⃣ Run the Worker
node user.js
📡 API Usage
Add Job to Queue

POST /queue

{
  "taskName": "video-processing",
  "userId": "123",
  "priority": 1
}


🧠 How It Works
API receives request
Job is added to Redis queue
Worker picks job from queue
Worker processes task asynchronously
Job gets completed
⚡ Priority System
Lower number = Higher priority
(e.g., 1 is higher than 10)
🧪 Example Use Cases
Video processing
Image compression
Email sending
Background notifications
Report generation
⚠️ Notes
Jobs are persistent in Redis
Worker restart may reprocess incomplete jobs
Use removeOnComplete in production
Always make job processing idempotent
📈 Future Improvements
Retry mechanism
Dead letter queue
Job status tracking API
Dashboard integration
Rate limiting
👨‍💻 Author

Vishal (Scilentvishal)

📄 License

This project is open-source and free to use.
