FROM node:lts-bullseye

# Install system dependencies
RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp \
  build-essential \
  libcairo2-dev \
  libpango1.0-dev \
  libjpeg-dev \
  libgif-dev \
  librsvg2-dev && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

# Copy package.json and install dependencies
COPY package.json .
RUN npm install --legacy-peer-deps

# Copy application code
COPY . .

# Expose port (if needed by Railway, usually picks up PORT env var)
EXPOSE 8000

# Start command
CMD ["npm", "start"]
