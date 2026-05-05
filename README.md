# 🚀 Redis Queue System Boilerplate  
### *(BullMQ + Docker + Node.js)*

A minimal, beginner-friendly **queue system boilerplate** built with Node.js, Express.js, BullMQ, and Redis (Dockerized).

> Designed to help you quickly understand and implement **background job processing** in real-world applications.

---

## 📌 Features

- ⚡ Queue system powered by BullMQ  
- 🔄 Background workers for async processing  
- 🐳 Redis setup using Docker  
- 🎯 Priority-based job execution  
- 🌐 Simple REST API to push jobs  
- 🧩 Easy to extend for real-world use cases  

---

## 🧱 Tech Stack

| Technology | Purpose |
|-----------|--------|
| Node.js | Backend runtime |
| Express.js | API server |
| BullMQ | Queue management |
| Redis | Job storage & processing |
| Docker | Containerized Redis |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Scilentvishal/queuesystem.git
cd queuesystem

---
2️⃣ Install Dependencies
npm install
3️⃣ Start Redis (Docker)

Make sure Docker is installed and running:

docker-compose -f redis-spawn.yml up -d
Services Started:
🟥 Redis → localhost:6379
📊 Redis Insight → http://localhost:5540
4️⃣ Redis Connection Configuration ⚠️
👉 If running Node.js locally:
{
  host: 'localhost',
  port: 6379
}
👉 If running Node.js inside Docker:

Replace localhost with Docker service name:

{
  host: 'redis',
  port: 6379
}
5️⃣ Run the Server
node file.js
6️⃣ Run the Worker
node user.js
📡 API Usage
➤ Add Job to Queue

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
Example: 1 (high) > 10 (low)
🧪 Example Use Cases
🎬 Video processing
🖼️ Image compression
📧 Email sending
🔔 Background notifications
📊 Report generation
⚠️ Notes
Jobs are persistent in Redis
Worker restart may reprocess incomplete jobs
Use removeOnComplete in production
Always make job processing idempotent
📈 Future Improvements
Retry mechanism
Dead letter queue
Job status tracking API
Dashboard integration (Bull Board)
Rate limiting
👨‍💻 Author

Vishal (Scilentvishal)


