# Stage 1: Build the application
FROM maven:3.8.1-openjdk-17-slim AS build

# Set the working directory in the container
WORKDIR /app

# Copy the Maven POM file and install dependencies
COPY pom.xml .

# Download all the dependencies (to avoid downloading them again in subsequent builds)
RUN mvn dependency:go-offline

# Copy the rest of the application source code
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests

# Stage 2: Create a smaller runtime image
FROM openjdk:17-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy only the JAR file from the build stage
COPY --from=build /app/target/user-service-1.0-SNAPSHOT.jar /app/user-service.jar

# Expose the port the application will run on
EXPOSE 8081

# Command to run the Java application
CMD ["java", "-jar", "/app/user-service.jar"]

