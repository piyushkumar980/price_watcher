// import dotenv from 'dotenv';
// dotenv.config({ path: './server/.env' });

// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import morgan from 'morgan';
// import helmet from 'helmet';
// import compression from 'compression';
// import rateLimit from 'express-rate-limit';
// import 'express-async-errors';
// import path from "path";

// // Routes
// import cropRoutes from './routes/cropRoutes.js';
// import buyerRoutes from './routes/buyerRoutes.js';
// import predictionRoutes from './routes/predictionRoutes.js';

// class Server {
//   constructor() {
//     this.app = express();
//     this.port = process.env.PORT || 5000;

//     this.MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/farming-assistant';

//     this.validateEnvironment();
//     this.initializeMiddlewares();
//     this.initializeRoutes();
//     this.initializeErrorHandling();
//   }

//   // ✅ Validate required environment variables
//   validateEnvironment() {
//     const requiredEnvVars = ['MONGODB_URI'];
//     const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

//     if (missingVars.length > 0) {
//       console.error(`🚫 Missing required environment variables: ${missingVars.join(', ')}`);
//       process.exit(1);
//     }
//   }

//   // ✅ Initialize middlewares
//   initializeMiddlewares() {
//     this.app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
//     this.app.use(express.json({ limit: '10kb' }));
//     this.app.use(helmet());
//     this.app.use(compression());

//     this.app.use(
//       rateLimit({
//         windowMs: 15 * 60 * 1000,
//         max: 100,
//         message: 'Too many requests from this IP, please try again later.',
//       })
//     );

//     this.app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
//   }

//   // ✅ Connect to MongoDB (without deprecated options)
//   async connectDatabase() {
//     try {
//       await mongoose.connect(this.MONGODB_URI, {
//         dbName: 'farming-assistant', // Ensure it connects to the correct database
//       });

//       console.log('✅ MongoDB connected successfully');
//     } catch (error) {
//       console.error('❌ MongoDB connection failed:', error.message);
//       process.exit(1);
//     }
//   }

//   // ✅ Initialize routes
//   initializeRoutes() {
//     this.app.use('/api/crops', cropRoutes);
//     this.app.use('/api/buyers', buyerRoutes);
//     this.app.use('/api/predict', predictionRoutes);

//     // Health check endpoint
//     this.app.get('/api/health', this.healthCheckHandler);

//     // Handle unhandled routes
//     this.app.all('*', (req, res) => {
//       console.warn(`⚠️ Unhandled Route Accessed: ${req.method} ${req.originalUrl}`);
//       res.status(404).json({ success: false, error: 'Endpoint not found' });
//     });
//   }

//   healthCheckHandler(req, res) {
//     res.status(200).json({
//       status: 'healthy',
//       database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
//       timestamp: new Date().toISOString(),
//     });
//   }

//   // ✅ Global error handling
//   initializeErrorHandling() {
//     this.app.use((err, req, res, next) => {
//       console.error('❗ Server Error:', err.stack);
//       const statusCode = err.statusCode || 500;
//       const message = process.env.NODE_ENV === 'production' ? 'Something went wrong' : err.message;
//       res.status(statusCode).json({ success: false, error: message });
//     });
//   }

//   // ✅ Graceful Shutdown
//   async gracefulShutdown() {
//     console.log('\n🛑 Closing server gracefully...');
//     try {
//       await mongoose.connection.close();
//       console.log('✅ MongoDB connection closed.');
//       this.server.close(() => {
//         console.log('🚪 Server closed.');
//         process.exit(0);
//       });
//     } catch (error) {
//       console.error('❌ Graceful shutdown failed:', error);
//       process.exit(1);
//     }
//   }

//   // ✅ Start the server
//   async start() {
//     await this.connectDatabase();

//     this.server = this.app.listen(this.port, () => {
//       console.log(`🚀 Server running on http://localhost:${this.port}`);
//     });

//     process.on('SIGINT', this.gracefulShutdown.bind(this));
//     process.on('SIGTERM', this.gracefulShutdown.bind(this));
//   }
// }

// // Start the server
// const server = new Server();
// server.start();


























































































































import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";
import "express-async-errors";
import path from "path";

// Import route files
import cropRoutes from "./routes/cropRoutes.js";
import buyerRoutes from "./routes/buyerRoutes.js";
import predictionRoutes from "./routes/predictionRoutes.js";

// Load environment variables
dotenv.config({ path: "./server/.env" });

// ✅ Keeping your preferred single underscore
const _dirname = path.resolve();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 5000;
    this.MONGODB_URI =
      process.env.MONGODB_URI || "mongodb://localhost:27017/farming-assistant";

    this.validateEnvironment();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  validateEnvironment() {
    const requiredEnvVars = ["MONGODB_URI"];
    const missingVars = requiredEnvVars.filter(
      (varName) => !process.env[varName]
    );

    if (missingVars.length > 0) {
      console.error(
        `🚫 Missing required environment variables: ${missingVars.join(", ")}`
      );
      process.exit(1);
    }
  }

  initializeMiddlewares() {
    // Fixed CSP for Unsplash images while keeping single underscore
    this.app.use(
      helmet({
        contentSecurityPolicy: {
          directives: {
            ...helmet.contentSecurityPolicy.getDefaultDirectives(),
            "img-src": [
              "'self'",
              "data:",
              "https://images.unsplash.com",
              "https://*.unsplash.com"
            ],
          },
        },
      })
    );

    this.app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
    this.app.use(express.json({ limit: "10kb" }));
    this.app.use(compression());

    this.app.use(
      rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
        message: "Too many requests from this IP, please try again later.",
      })
    );

    this.app.use(
      morgan(process.env.NODE_ENV === "production" ? "combined" : "dev")
    );
  }

  async connectDatabase() {
    try {
      await mongoose.connect(this.MONGODB_URI, {
        dbName: "farming-assistant",
      });

      console.log("✅ MongoDB connected successfully");
    } catch (error) {
      console.error("❌ MongoDB connection failed:", error.message);
      process.exit(1);
    }
  }

  initializeRoutes() {
    // API routes
    this.app.use("/api/crops", cropRoutes);
    this.app.use("/api/buyers", buyerRoutes);
    this.app.use("/api/predict", predictionRoutes);

    // Health check
    this.app.get("/api/health", this.healthCheckHandler);

    // ✅ Using your _dirname variable
    const frontendPath = path.join(_dirname, "src", "dist");
    this.app.use(express.static(frontendPath));
    this.app.get("*", (_, res) => {
      res.sendFile(path.join(frontendPath, "index.html"));
    });

    this.app.all("/api/*", (req, res) => {
      console.warn(`⚠️ Unhandled API Route: ${req.method} ${req.originalUrl}`);
      res.status(404).json({ success: false, error: "Endpoint not found" });
    });
  }

  healthCheckHandler(req, res) {
    res.status(200).json({
      status: "healthy",
      database:
        mongoose.connection.readyState === 1 ? "connected" : "disconnected",
      timestamp: new Date().toISOString(),
    });
  }

  initializeErrorHandling() {
    this.app.use((err, req, res, next) => {
      console.error("❗ Server Error:", err.stack);
      const statusCode = err.statusCode || 500;
      const message =
        process.env.NODE_ENV === "production"
          ? "Something went wrong"
          : err.message;
      res.status(statusCode).json({ success: false, error: message });
    });
  }

  async gracefulShutdown() {
    console.log("\n🛑 Closing server gracefully...");
    try {
      await mongoose.connection.close();
      console.log("✅ MongoDB connection closed.");
      this.server.close(() => {
        console.log("🚪 Server closed.");
        process.exit(0);
      });
    } catch (error) {
      console.error("❌ Graceful shutdown failed:", error);
      process.exit(1);
    }
  }

  async start() {
    await this.connectDatabase();

    this.server = this.app.listen(this.port, () => {
      console.log(`🚀 Server running on http://localhost:${this.port}`);
    });

    process.on("SIGINT", this.gracefulShutdown.bind(this));
    process.on("SIGTERM", this.gracefulShutdown.bind(this));
  }
}

// Start the server
const server = new Server();
server.start();