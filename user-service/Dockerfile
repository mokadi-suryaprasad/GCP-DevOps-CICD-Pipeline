# Use an official OpenJDK image (slim version for smaller image size)
FROM openjdk:17-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the Java application JAR file from the host to the container
COPY target/user-service.jar /app/user-service.jar

# Expose the port the application will run on
EXPOSE 8081

# Command to run the Java application
CMD ["java", "-jar", "user-service.jar"]
