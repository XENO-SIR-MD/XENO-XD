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
  librsvg2-dev \
  libnss3 \
  libatk1.0-0 \
  libatk-bridge2.0-0 \
  libcups2 \
  libdrm2 \
  libxcomposite1 \
  libxdamage1 \
  libxext6 \
  libxfixes3 \
  libxrandr2 \
  libgbm1 \
  libasound2 \
  libpangocairo-1.0-0 \
  libxshmfence1 \
  libxkbcommon0 && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

# Copy package.json and install dependencies
COPY package.json .
RUN npm install --legacy-peer-deps

# Copy application code
COPY . .

# Expose port
EXPOSE 8000

# Start command using pm2-runtime for better container support
CMD ["npx", "pm2-runtime", "index.js", "--name", "hans-byte"]
