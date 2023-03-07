package fr.sparkit.spring.security.jwt.services;

import fr.sparkit.spring.security.jwt.models.*;
import fr.sparkit.spring.security.jwt.repository.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import java.util.*;

@Service
public class ProductServiceImpl implements IProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> listAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Long idProduct) {
        try {
            return productRepository.findById(idProduct).get();
        } catch (NoSuchElementException e) {
            throw new NoSuchElementException("Product not found with id " + idProduct);
        }
    }

    @Override
    public List<Product> getProductsByIdCategory(Long idCategory) {
        return productRepository.findProductsByCategory_IdCategory(idCategory);
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    @Override
    public Product editProduct(Product product) {
        return productRepository.saveAndFlush(product);

    }
}
