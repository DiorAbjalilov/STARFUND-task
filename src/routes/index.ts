// src/routers.ts
import { Router } from "express";
import FightController from "../controller/fights";
import FighterController from "../controller/fighters";
// import { EventController } from './controllers/EventController';
// import { FightController } from './controllers/FightController';
// import { RankingController } from './controllers/RankingController';

const router = Router();

// Fights routes
router.get("/fights", FightController.getAll);
router.get("/fight", FightController.getById);
router.post("/fight", FightController.create);
// router.put('/fighter', FightController.update);
router.delete("/fight", FightController.delete);

// // Event routes
// router.get('/events', EventController.getAll);
// router.get('/events/:id', EventController.getById);
// router.post('/events', EventController.create);
// router.put('/events/:id', EventController.update);
// router.delete('/events/:id', EventController.delete);

// // Fighters routes
router.get("/fighters", FighterController.getAll);
router.get("/fighter", FighterController.getById);
router.post("/fighter", FighterController.create);
// router.put('/fights/:id', FightController.update);
// router.delete('/fights/:id', FightController.delete);

// // Ranking routes
// router.get('/rankings', RankingController.getAll);
// router.get('/rankings/:id', RankingController.getByWeightClass);
// router.post('/rankings', RankingController.create);
// router.put('/rankings/:id', RankingController.update);
// router.delete('/rankings/:id', RankingController.delete);

export const routers = router;
