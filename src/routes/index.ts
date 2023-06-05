import { Router } from "express";
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.home);
router.get('/cats', PageController.home);
router.get('/fishes', PageController.home);

router.get('/search', SearchController.search);

export default router;