# Bloggers Platform

A modern blogging platform built with NestJS and MongoDB, providing a robust API for managing blogs, posts, comments, and user interactions.

## Features

- User authentication and authorization
- Blog and post management
- Comments system
- Email notifications
- Rate limiting
- API documentation with Swagger
- Testing infrastructure with Jest
- Throttling with NestJS Throttler

## Technologies

- **Backend Framework**: NestJS v11
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT, Passport
- **API Documentation**: Swagger/OpenAPI
- **Testing**: Jest
- **Other Key Libraries**:
  - CQRS for command/query separation
  - Class Validator & Class Transformer for DTO validation
  - Nodemailer for email functionality
  - bcrypt for password hashing

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- MongoDB installed locally or a MongoDB Atlas account
- yarn package manager

### Installation

1. Clone the repository

```bash
git clone [repository-url]
cd bloggers-platform-nest
```

2. Install dependencies

```bash
yarn install
```

3. Set up environment variables (create a .env file in the root directory)

```
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Running the Application

```bash
# Development mode
yarn start:dev

# Production mode
yarn build
yarn start:prod

# Debug mode
yarn start:debug
```

The application will be available at `http://localhost:3000`

## Testing

```bash
# Unit tests
yarn test

# E2E tests
yarn test:e2e

# Test coverage
yarn test:cov
```

## 📚 API Documentation

Once the application is running locally, you can access the Swagger API documentation at:
`http://localhost:3000/api/docs`

You can also view the API documentation for the deployed version at:
[https://bloggers-platform-mongo-nest.vercel.app/swagger](https://bloggers-platform-mongo-nest.vercel.app/swagger)

## 🔧 Scripts

- `yarn build` - Build the application
- `yarn format` - Format code with Prettier
- `yarn start` - Start the application
- `yarn start:dev` - Start in development mode with watch
- `yarn start:debug` - Start in debug mode
- `yarn start:prod` - Start in production mode
- `yarn lint` - Lint the code
- `yarn test` - Run unit tests
- `yarn test:watch` - Run tests in watch mode
- `yarn test:cov` - Generate test coverage report
- `yarn test:e2e` - Run end-to-end tests

## Project Structure

```
src/
├── auth/         # Authentication related modules
├── blogs/        # Blogs domain
├── comments/     # Comments domain
├── common/       # Shared utilities and middleware
├── config/       # Configuration files
├── posts/        # Posts domain
├── users/        # Users domain
└── main.ts       # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the UNLICENSED License.
