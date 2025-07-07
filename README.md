# Star Wars Data Explorer Monorepo

This project is a responsive web application (desktop and mobile) for searching data from the Star Wars universe, using a monorepo architecture with a Ruby on Rails backend and a React + Vite frontend.

## Description

The application allows you to search for movies and characters from the Star Wars universe, consuming and processing data from external APIs. It also features a statistics view that displays analytics about the queries performed in searches. The frontend is modern, responsive and uses UI libraries for a great experience on any device. The backend exposes RESTful APIs, manages data and integrates with queue and cache services.

## Project Structure

- **backend/**: Ruby on Rails API, Sidekiq for background jobs, Redis for cache and queues, PostgreSQL database.
- **frontend/**: SPA in React with Vite, styled with Mantine and Styled Components, state management with React Query.

## Used Technologies & Versions

### Backend
- **Ruby on Rails**: ~> 8.0.2
- **PostgreSQL**: 16 (via Docker)
- **Sidekiq**: for background processing
- **Redis**: 7 (via Docker)
- **Faraday**: HTTP requests
- **dotenv-rails**: environment variables
- **rack-cors**: CORS for APIs
- **sidekiq-scheduler**: job scheduling

### Frontend
- **React**: ^19.1.0
- **Vite**: ^7.0.0
- **Mantine**: ^8.1.2
- **React Query**: ^4.36.1
- **axios**: ^1.10.0
- **styled-components**: ^6.1.19
- **react-router-dom**: ^7.6.3

### Dev Tools
- **ESLint**: ^9.30.1

## How to Start the Project with Docker

### Requirements
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed

### Step-by-step

1. **Clone the repository:**
   ```sh
   git clone git@github.com:jrbarbieri/lawnstarter-test.git
   cd monorepo
   ```

2. **Configure environment variables:**
   - For both the backend and frontend, copy the sample environment files to create your own `.env` files:
     ```sh
     cp backend/.env.sample backend/.env
     cp frontend/.env.sample frontend/.env
     ```
   - Make sure the contents of your `.env` files match the respective `.env.sample` files. Adjust values only if you need to override any defaults.

3. **Start all services:**
   ```sh
   docker-compose up --build
   ```
   This will:
   - Build and start the Rails backend at `localhost:3000`
   - Build and start the React frontend at `localhost:5173`
   - Start PostgreSQL and Redis
   - Start Sidekiq for background jobs

4. **Access the application:**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend/API: [http://localhost:3000](http://localhost:3000)

5. **(Optional/first run) Prepare database:**
   - Enter the backend container:
     ```sh
     docker-compose exec backend bash
     ```
   - Prepare database and seeds:
     ```sh
     bundle exec rails db:create
     bundle exec rails db:migrate
     bundle exec rails db:seed # optional, only if you want initial query stats
     ```

### Notes
- The frontend communicates with the backend via REST API.
- The project is fully isolated via Docker, so you do not need to install Ruby, Node or database dependencies locally.

***

# Short answer questions

**1. What are you hoping to find in your next position that would make us the right next step in your career?**  
*I'm looking for a place where I can work closely with the product, contribute to smart experiments, and help shape things that directly impact the business. I get excited when there is trust in the engineering team to move fast, suggest improvements and be part of strategic decisions, not only just code what's already decided.*

*From what I've read and seen about LawnStarter, it feels like a great environment for that. I've worked a lot with growth/PLG, fast iterations/fast-paced environments and modular architectures, and I'd love to bring that experience to a team that values autonomy, ownership and results. I'm also drawn to companies that care about building a strong engineering culture while still moving fast, and that's the vibe I got from LawnStarter* (:

---

**2. What have you learned so far about us that has excited you?**  
*During the interview, I had the chance to talk with Paulo and Rodrigo, and they seemed like really nice and easygoing people. That gave me a great impression about the culture at LawnStarter. I also noticed that there are other Brazilians in important positions, which makes me feel more comfortable, especially when it comes to exchanging ideas and communicating. Even though I work well in English, it's always nice to have that kind of support in an international team.*

*At first, I wasn't sure how complex the product really was, since it looks like a simple consumer app. But the interview helped me understand that it's much bigger and more complex than I imagined, covering services across all the US, with lots of logistics, payments and other smart systems behind it. That really got me excited, because I love working on projects that seem simple at first but have a lot going on behind the scenes.*

*I also watched some videos about what it is like to work at LawnStarter, and I read some reviews on Glassdoor. Everything shows that the company has a strong and friendly engineering culture, where people enjoy working together and feel motivated to grow. That kind of environment really inspires me.*

---

**3. Have you worked in an environment where developers own delivering features all the way to production? We have QA (Quality Assurance) and a Product Operations team, however, they exist to provide support to engineers. Are you comfortable going to a place where the quality buck stops with the engineers and you have the ability to deploy and observe your own code in production?**  
*Yes, absolutely. That's actually how I've worked in my last three jobs, so I'm very comfortable with that kind of setup. As a senior full stack engineer, I've always been responsible for the full delivery of features: from writing the code, creating tests, making sure everything works well, deploying and keeping an eye on how it runs in production.*

*At Brightside, for example, I helped build important parts of the Patient Portal, like the Billing Center and Appointment History, and I was in charge of the full cycle, including creating background jobs, writing tests and pushing to production. We had support from QA and Product, but quality was mainly our job as engineers.*

*Before that, at RD Station, I worked on the PLG (Product-Led Growth) team. We did lots of experiments and fast releases, and we had to make sure they were safe and well-tested. We used metrics and tools like DataDog and Rollbar to monitor everything live, for example.*

*So for me, owning the whole process is not just familiar, it's something I enjoy. I believe it gives engineers more context, more responsibility and a stronger connection with the product. And if I can help others with this experience, I'll be happy to share!*

---

**4. What is the next technology or subject you are hoping to learn about?**  
*As a senior developer, my next goal is to deepen my experience in areas that go beyond feature development: I want to be more involved in architectural and infrastructure decisions that make a product scalable, cost-efficient and easier to maintain. I already feel solid as a full-stack developer, but I'm now focused on becoming a full-cycle developer, someone who can lead solutions from idea to production with a broader view of the system.*

*For that, I've been especially interested in learning more about cloud-native tools and services, not just using them, but choosing the right ones to solve specific problems. I've noticed how AWS, GCP, Azure, etc. keep expanding their catalogs with services that, when used well, can replace custom code, reduce cost and increase performance. I want to get better at identifying these opportunities. I don't want to solve everything just with libraries or code patterns, I want to think at the system level and choose the smartest combination of tools, including managed services, caching strategies, messaging systems, observability and infrastructure automation.*

*In short, I'm working towards being the kind of engineer who not only delivers well-written code, but also helps shape the technical direction of the product, with a strong sense of performance, maintainability and business impact.*

# Feedback

**1. What parts of this did you enjoy?**  
*I really enjoyed the test as a whole! It was fun and felt like a workout for my engineering skills! It reinforced several important concepts and pushed me to revisit and update my knowledge of the Mantine library, which I hadn't used since version 6. It was great to have the opportunity to practice with the latest version (8.1.2) and see how much it has evolved. I also liked the balance between backend and frontend challenges, and how the test encouraged thinking about architecture, code quality and user experience at the same time.*

---

**2. What parts of this did you dislike?**  
*The only minor issue I faced was with Zeplin: for some reason, the measurements there didn't always match what I saw on the screen. It wasn't a big problem, since I could adjust things easily, but it did slow me down a bit at first. Other than that, everything else was smooth and well-structured.*

---

**3. Any other comments/feedback?**  
*Overall, I thought the test was very well designed and realistic. It covered a good range of skills and made me feel like I was working on a real feature, not just a theoretical exercise. I appreciated the clear instructions and the freedom to make architectural decisions. If I could suggest anything, maybe a little more detail on the expected user flows or edge cases would help, but honestly, it was a great experience!*
