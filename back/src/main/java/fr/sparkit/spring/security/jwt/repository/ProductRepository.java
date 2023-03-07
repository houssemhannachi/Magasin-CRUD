package fr.sparkit.spring.security.jwt.repository;

import fr.sparkit.spring.security.jwt.models.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

import java.util.*;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    Product findProductByCategory_IdCategory(Long idCategory);

    List<Product> findProductsByCategory_IdCategory(Long idCategory);


}
