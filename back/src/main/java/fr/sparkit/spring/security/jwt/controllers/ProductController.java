package fr.sparkit.spring.security.jwt.controllers;

import fr.sparkit.spring.security.jwt.models.*;
import fr.sparkit.spring.security.jwt.payload.response.*;
import fr.sparkit.spring.security.jwt.services.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.dao.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private IProductService productService;

    @PostMapping("/addProduct")
    public ResponseEntity<?> addProduct(@RequestBody Product product) {
        productService.addProduct(product);
        return ResponseEntity.ok(new MessageResponse("Ce produit est enregistré avec succès!"));
    }


    @PutMapping("/editProduct")
    public ResponseEntity<?> editProduct(@RequestBody Product product) {
        productService.editProduct(product);
        return ResponseEntity.ok(new MessageResponse("Ce produit est modifié avec succès!"));
    }

    @GetMapping("/getAllProducts")
    public List<Product> getAllProducts() {
        return productService.listAllProducts();
    }

    @GetMapping("/getProductById/{idProduct}")
    public Product getProductById(@PathVariable("idProduct") Long idProduct) {
        return productService.getProductById(idProduct);

    }

    @GetMapping("/getProductsByIdCategory/{idCategory}")
    public ResponseEntity<?> getProductsByIdCategory(@PathVariable("idCategory") Long idCategory) throws NoSuchElementException {
        List<Product> products = productService.getProductsByIdCategory(idCategory);
        return ResponseEntity.ok().body(products);
    }

    @DeleteMapping("/deleteProduct/{id}")
    public void deleteProductById(@PathVariable("id") Long id) {
        try {
            productService.deleteProduct(id);
        } catch (DataIntegrityViolationException ex) {
            throw new DataIntegrityViolationException("we cannot delete this product");
        }
    }
}
