const express = require('express');
const { getAllProducts, getProducts, createProduct, updateProduct, deleteProduct, getAdminProducts, getProductDetails, createProductReview, getProductReviews, deleteReview } = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.route('/products').get(getProducts);
router.route('/products/all').get(getAllProducts);


router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

router.route('/admin/product/:id')
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route('/admin/products').get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router.route('/product/:id').get(getProductDetails);

router.route('/review').put(isAuthenticatedUser, createProductReview);

router.route('/admin/reviews')
    .get(getProductReviews)
    .delete(isAuthenticatedUser, deleteReview);

module.exports = router;