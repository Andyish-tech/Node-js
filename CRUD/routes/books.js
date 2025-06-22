/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books
 *     responses:
 *       200:
 *         description: List of books
 */

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Get a book by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: A book
 *       404:
 *         description: Book not found
 */

const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all books
router.get('/', (req, res) => {
  db.query('SELECT * FROM books', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// GET book by ID
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM books WHERE id = ?', [req.params.id], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

// POST new book
router.post('/', (req, res) => {
  const { title, author } = req.body;
  db.query('INSERT INTO books (title, author) VALUES (?, ?)', [title, author], (err, result) => {
    if (err) throw err;
    res.status(201).json({ id: result.insertId, title, author });
  });
});

// PUT update book
router.put('/:id', (req, res) => {
  const { title, author } = req.body;
  db.query('UPDATE books SET title = ?, author = ? WHERE id = ?', [title, author, req.params.id], (err) => {
    if (err) throw err;
    res.json({ id: req.params.id, title, author });
  });
});

// DELETE book
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM books WHERE id = ?', [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Deleted' });
  });
});

module.exports = router;
