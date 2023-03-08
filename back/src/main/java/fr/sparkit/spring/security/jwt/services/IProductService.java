package fr.sparkit.spring.security.jwt.services;

import fr.sparkit.spring.security.jwt.models.*;

import java.util.*;

public interface IProductService {
    Product addProduct(Product product);

    List<Product> listAllProducts();

    Product getProductById(Long idProduct);

    List<Product> getProductsByIdCategory(Long idCategory);

    void deleteProduct(Long id);

    Product editProduct(Product product);

    Boolean inStock(Product product);
}
