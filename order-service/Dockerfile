# Use Python image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt /app/
RUN pip install -r requirements.txt

# Copy the application files
COPY . /app/

# Expose the port that your Python app listens on
EXPOSE 8082

# Run the Python application
CMD ["python", "app.py"]
