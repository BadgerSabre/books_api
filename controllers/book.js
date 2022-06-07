const router = require('express').Router()
const Book = require('../models/book')


// GET all books
router.get('/', async (req,res) => {
    try {
        const books = await Book.find()
        res.json(books)
    } catch (error) {
        console.log(error)
        res.send('ERROR')
    }
})

// GET book by id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id)
        res.json(book)
    } catch (error) {
        console.log(error)
        res.send('ERROR')
    }
})

// POST create new book
router.post('/', async (req, res) => {
    try {
        const book = await Book.create(req.body)
        res.json(book)
    } catch (error) {
        console.log(error)
        res.send('ERROR')
    }
})

// PUT Update book by id
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findByIdAndUpdate(id, req.body)
        res.json(book)
    } catch (error) {
        console.log(error)
        res.send('ERROR')
    }
})

// DELETE book by id
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        await Book.findByIdAndDelete(id)
        res.send(`Deleted book with id: ${id}`)
    } catch (error) {
        console.log(error)
        res.send('ERROR')
    }
})

module.exports = router