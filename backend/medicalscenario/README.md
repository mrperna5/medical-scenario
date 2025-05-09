# Medical Scenario Application

A Spring Boot application for managing medical scenarios and team summaries.

## Overview

The Medical Scenario Application is designed to help medical educators create and manage simulation scenarios for training healthcare professionals. It allows instructors to control access to scenarios and track team performance through summaries.

## Features

- **Scenario Control**: Manage access to different medical scenarios
- **Team Summaries**: Track and analyze team performance in scenarios
- **RESTful API**: Access all functionality through a well-documented API

## Technology Stack

- **Backend**: Java 17, Spring Boot 3.4.4
- **Database**: PostgreSQL
- **Documentation**: OpenAPI/Swagger
- **Build Tool**: Gradle

## Getting Started

### Prerequisites

- Java 17 or higher
- PostgreSQL database
- Gradle

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/medical-scenario.git
   cd medical-scenario
   ```

2. Configure the database connection in `src/main/resources/application.properties`:
   ```
   spring.datasource.url=jdbc:postgresql://localhost:5432/medicalscenario
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

3. Build the application:
   ```
   ./gradlew build
   ```

4. Run the application:
   ```
   ./gradlew bootRun
   ```

The application will be available at `http://localhost:8080`.

## API Documentation

The API documentation is available through Swagger UI at `http://localhost:8080/swagger-ui.html` when the application is running.

## Project Structure

- `controller`: REST API endpoints
- `service`: Business logic
- `repository`: Data access layer
- `entity`: Domain models
- `exception`: Custom exceptions and error handling
- `config`: Application configuration

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.