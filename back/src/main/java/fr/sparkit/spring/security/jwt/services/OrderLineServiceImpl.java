package fr.sparkit.spring.security.jwt.services;

import fr.sparkit.spring.security.jwt.models.*;
import fr.sparkit.spring.security.jwt.repository.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

@Service
public class OrderLineServiceImpl implements IOrderLineService {

    @Autowired
    ProductRepository productRepository;

    @Override
    public Boolean checkQuantity(OrderLine orderLine) {

        return orderLine.getQuantity() <= orderLine.getProduct().getQteStock() && orderLine.getQuantity() > 0;
    }

    public void changeProductQuantity(OrderLine orderLine) {
        Product product = orderLine.getProduct();
        long quantityRes = product.getQteStock() - orderLine.getQuantity();
        product.setQteStock(quantityRes);
        productRepository.save(product);
    }
}
