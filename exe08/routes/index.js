const express = require('express')
const router = express.Router()
const pagesController = require(`${process.cwd()}/controllers/pagesController`)
const userController = require(`${process.cwd()}/controllers/userController`)
const magasinsController = require(`${process.cwd()}/controllers/magasinsController`)

router.get('/', pagesController.home)
router.get('/magasins/add', magasinsController.addMagasin) // créer magasin
router.get('/magasins/:slug', magasinsController.getMagasinBySlug) // créer la page du nouveau magasin
router.get('/magasins/:id/edit', magasinsController.editMagasins) // éditer une page
router.get('/login', userController.loginForm) // créer page login
router.get('/register', userController.registerForm) // page enregistre le login et MP

router.post('/magasins/add',
    magasinsController.upload,
    magasinsController.resize,
    magasinsController.createMagasin) // créer magasin avec image et recadrer image

router.post('/magasins/add/:id',
    magasinsController.upload,
    magasinsController.resize,
    magasinsController.updateMagasin) // éditer magasin existant
router.get('/about', pagesController.about) // créer page about


router.post('/register', userController.validateRegister,userController.register)
module.exports = router

// Attention à l'ordre !!!!!!